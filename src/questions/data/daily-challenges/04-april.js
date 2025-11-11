// April Daily Challenges - 30 days × 5 questions each = 150 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {

  const aprilChallenges = {
    name: {
      en: "April Daily Challenges",
      es: "Desafíos Diarios de Abril",
      de: "April Tägliche Herausforderungen",
      nl: "April Dagelijkse Uitdagingen"
    },

    // Day 1 - April 1st: April Fools' Day & Apple Computer Founded (1976)
    day1: [
      {
        question: {
          en: "On April 1, 1976, which technology company was founded by Steve Jobs and Steve Wozniak?",
          es: "El 1 de abril de 1976, ¿qué empresa de tecnología fue fundada por Steve Jobs y Steve Wozniak?",
          de: "Welches Technologieunternehmen wurde am 1. April 1976 von Steve Jobs und Steve Wozniak gegründet?",
          nl: "Op 1 april 1976, welk technologiebedrijf werd opgericht door Steve Jobs en Steve Wozniak?"
        },
        options: [
          { en: "Xerox", es: "Xerox", de: "Xerox", nl: "Xerox" },
          { en: "Apple Computer", es: "Apple Computer", de: "Apple Computer", nl: "Apple Computer" },
          { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Apple Computer, Inc. was founded on April 1, 1976, by Steve Jobs, Steve Wozniak, and Ronald Wayne. The company was established to sell the Apple I personal computer kit. Interestingly, the founders did not realize it was April Fools' Day until after forming the company, making the timing purely coincidental.",
          es: "Apple Computer, Inc. fue fundada el 1 de abril de 1976 por Steve Jobs, Steve Wozniak y Ronald Wayne. La empresa se estableció para vender el kit de computadora personal Apple I. Curiosamente, los fundadores no se dieron cuenta de que era el Día de los Inocentes hasta después de formar la empresa, lo que hizo que el momento fuera puramente coincidencial.",
          de: "Apple Computer, Inc. wurde am 1. April 1976 von Steve Jobs, Steve Wozniak und Ronald Wayne gegründet. Das Unternehmen wurde gegründet, um das Apple I Personal Computer Kit zu verkaufen. Interessanterweise bemerkten die Gründer erst nach der Firmengründung, dass es der 1. April war, was das Timing rein zufällig machte.",
          nl: "Apple Computer, Inc. werd opgericht op 1 april 1976 door Steve Jobs, Steve Wozniak en Ronald Wayne. Het bedrijf werd opgericht om de Apple I personal computer kit te verkopen. Interessant genoeg realiseerden de oprichters zich pas na de oprichting dat het 1 april was, waardoor de timing puur toevallig was."
        }
      },
      {
        question: {
          en: "For how much money did the original Apple I computer sell in 1976?",
          es: "¿Por cuánto dinero se vendió la computadora original Apple I en 1976?",
          de: "Für wie viel Geld wurde der ursprüngliche Apple I Computer 1976 verkauft?",
          nl: "Voor hoeveel geld werd de originele Apple I computer verkocht in 1976?"
        },
        options: [
          { en: "$500.00", es: "$500.00", de: "$500.00", nl: "$500.00" },
          { en: "$1,200.00", es: "$1,200.00", de: "$1,200.00", nl: "$1,200.00" },
          { en: "$999.99", es: "$999.99", de: "$999.99", nl: "$999.99" },
          { en: "$666.66", es: "$666.66", de: "$666.66", nl: "$666.66" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Apple I was sold for $666.66, a price chosen by Steve Wozniak because he liked repeating digits. The computer was sold as a kit to the Homebrew Computer Club. This unusual price point became part of Apple's early history and folklore.",
          es: "El Apple I se vendió por $666.66, un precio elegido por Steve Wozniak porque le gustaban los dígitos repetidos. La computadora se vendió como un kit al Homebrew Computer Club. Este punto de precio inusual se convirtió en parte de la historia y folclore temprano de Apple.",
          de: "Der Apple I wurde für $666.66 verkauft, ein Preis, den Steve Wozniak wählte, weil er sich wiederholende Ziffern mochte. Der Computer wurde als Bausatz an den Homebrew Computer Club verkauft. Dieser ungewöhnliche Preispunkt wurde Teil der frühen Geschichte und Folklore von Apple.",
          nl: "De Apple I werd verkocht voor $666.66, een prijs gekozen door Steve Wozniak omdat hij van herhalende cijfers hield. De computer werd als bouwpakket verkocht aan de Homebrew Computer Club. Dit ongebruikelijke prijspunt werd onderdeel van Apple's vroege geschiedenis en folklore."
        }
      },
      {
        question: {
          en: "When did the Gregorian calendar officially move New Year's Day to January 1st, making April 1st a day for pranks on those who forgot?",
          es: "¿Cuándo movió oficialmente el calendario gregoriano el Día de Año Nuevo al 1 de enero, convirtiendo el 1 de abril en un día para bromas a quienes lo olvidaron?",
          de: "Wann verlegte der Gregorianische Kalender offiziell den Neujahrstag auf den 1. Januar und machte den 1. April zu einem Tag für Streiche an diejenigen, die es vergaßen?",
          nl: "Wanneer verschoof de Gregoriaanse kalender officieel Nieuwjaarsdag naar 1 januari, waardoor 1 april een dag werd voor grappen met degenen die het vergaten?"
        },
        options: [
          { en: "1492", es: "1492", de: "1492", nl: "1492" },
          { en: "1600", es: "1600", de: "1600", nl: "1600" },
          { en: "1582", es: "1582", de: "1582", nl: "1582" },
          { en: "1700", es: "1700", de: "1700", nl: "1700" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Gregorian calendar was adopted in 1582, moving New Year's Day from late March/early April to January 1st. One theory suggests that April Fools' Day originated when people who continued celebrating the new year in April became targets of jokes and pranks. Not all countries adopted the new calendar simultaneously, creating confusion across Europe.",
          es: "El calendario gregoriano se adoptó en 1582, trasladando el Día de Año Nuevo de finales de marzo/principios de abril al 1 de enero. Una teoría sugiere que el Día de los Inocentes se originó cuando las personas que continuaron celebrando el año nuevo en abril se convirtieron en objetivo de bromas y travesuras. No todos los países adoptaron el nuevo calendario simultáneamente, creando confusión en toda Europa.",
          de: "Der Gregorianische Kalender wurde 1582 eingeführt und verlegte den Neujahrstag von Ende März/Anfang April auf den 1. Januar. Eine Theorie besagt, dass der 1. April entstand, als Menschen, die das neue Jahr weiterhin im April feierten, zu Zielen von Scherzen und Streichen wurden. Nicht alle Länder führten den neuen Kalender gleichzeitig ein, was in ganz Europa für Verwirrung sorgte.",
          nl: "De Gregoriaanse kalender werd aangenomen in 1582 en verplaatste Nieuwjaarsdag van eind maart/begin april naar 1 januari. Een theorie suggereert dat 1 april ontstond toen mensen die het nieuwe jaar bleven vieren in april het doelwit werden van grappen en streken. Niet alle landen namen de nieuwe kalender tegelijkertijd aan, wat voor verwarring zorgde in heel Europa."
        }
      },
      {
        question: {
          en: "Ronald Wayne, the third co-founder of Apple, sold his 10% stake in the company for how much just 12 days after founding?",
          es: "Ronald Wayne, el tercer cofundador de Apple, vendió su participación del 10% en la empresa por cuánto solo 12 días después de la fundación?",
          de: "Ronald Wayne, der dritte Mitbegründer von Apple, verkaufte seinen 10%-Anteil am Unternehmen für wie viel nur 12 Tage nach der Gründung?",
          nl: "Ronald Wayne, de derde medeoprichter van Apple, verkocht zijn 10% belang in het bedrijf voor hoeveel slechts 12 dagen na de oprichting?"
        },
        options: [
          { en: "$8,000", es: "$8,000", de: "$8,000", nl: "$8,000" },
          { en: "$80,000", es: "$80,000", de: "$80,000", nl: "$80,000" },
          { en: "$800", es: "$800", de: "$800", nl: "$800" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ronald Wayne sold his 10% stake in Apple for just $800 less than two weeks after the company's founding. He feared the financial liability if Apple failed. That stake would eventually be worth billions of dollars, making it one of the most expensive decisions in business history.",
          es: "Ronald Wayne vendió su participación del 10% en Apple por solo $800 menos de dos semanas después de la fundación de la empresa. Temía la responsabilidad financiera si Apple fracasaba. Esa participación eventualmente valdría miles de millones de dólares, convirtiéndola en una de las decisiones más costosas en la historia empresarial.",
          de: "Ronald Wayne verkaufte seinen 10%-Anteil an Apple für nur $800 weniger als zwei Wochen nach der Gründung des Unternehmens. Er fürchtete die finanzielle Haftung, falls Apple scheitern würde. Dieser Anteil wäre schließlich Milliarden von Dollar wert gewesen, was es zu einer der teuersten Entscheidungen in der Unternehmensgeschichte macht.",
          nl: "Ronald Wayne verkocht zijn 10% belang in Apple voor slechts $800 minder dan twee weken na de oprichting van het bedrijf. Hij vreesde de financiële aansprakelijkheid als Apple zou falen. Dat belang zou uiteindelijk miljarden dollars waard zijn, waardoor het een van de duurste beslissingen in de bedrijfsgeschiedenis werd."
        }
      },
      {
        question: {
          en: "April Fools' Day is known by what name in France, where people traditionally attach paper fish to others' backs?",
          es: "El Día de los Inocentes se conoce con qué nombre en Francia, donde la gente tradicionalmente pega peces de papel en las espaldas de otros?",
          de: "Der 1. April ist in Frankreich unter welchem Namen bekannt, wo Menschen traditionell Papierfische auf die Rücken anderer kleben?",
          nl: "1 april staat in Frankrijk bekend onder welke naam, waar mensen traditioneel papieren vissen op de ruggen van anderen plakken?"
        },
        options: [
          { en: "Jour de Blague", es: "Jour de Blague", de: "Jour de Blague", nl: "Jour de Blague" },
          { en: "Fête des Fous", es: "Fête des Fous", de: "Fête des Fous", nl: "Fête des Fous" },
          { en: "Poisson d'Avril", es: "Poisson d'Avril", de: "Poisson d'Avril", nl: "Poisson d'Avril" },
          { en: "Premier Avril", es: "Premier Avril", de: "Premier Avril", nl: "Premier Avril" }
        ],
        correctIndex: 2,
        explanation: {
          en: "In France, April Fools' Day is called 'Poisson d'Avril' (April Fish). The tradition involves children trying to attach paper fish to people's backs without being noticed. The origin of this custom is uncertain, but it may relate to fish being more easily caught in April when they are spawning.",
          es: "En Francia, el Día de los Inocentes se llama 'Poisson d'Avril' (Pez de Abril). La tradición implica que los niños intenten pegar peces de papel en las espaldas de las personas sin ser notados. El origen de esta costumbre es incierto, pero puede relacionarse con que los peces son más fáciles de atrapar en abril cuando están desovando.",
          de: "In Frankreich wird der 1. April 'Poisson d'Avril' (April-Fisch) genannt. Die Tradition besteht darin, dass Kinder versuchen, Papierfische auf die Rücken der Menschen zu kleben, ohne bemerkt zu werden. Der Ursprung dieses Brauchs ist ungewiss, könnte aber damit zusammenhängen, dass Fische im April während der Laichzeit leichter zu fangen sind.",
          nl: "In Frankrijk wordt 1 april 'Poisson d'Avril' (April-vis) genoemd. De traditie houdt in dat kinderen proberen papieren vissen op de ruggen van mensen te plakken zonder opgemerkt te worden. De oorsprong van deze gewoonte is onzeker, maar het kan verband houden met het feit dat vissen gemakkelijker te vangen zijn in april wanneer ze paaien."
        }
      }
    ],

    // Day 2 - April 2nd: Falklands War Begins (1982)
    day2: [
      {
        question: {
          en: "On April 2, 1982, Argentina invaded which islands, starting a war with the United Kingdom?",
          es: "El 2 de abril de 1982, Argentina invadió qué islas, iniciando una guerra con el Reino Unido?",
          de: "Am 2. April 1982 fiel Argentinien in welche Inseln ein und begann einen Krieg mit dem Vereinigten Königreich?",
          nl: "Op 2 april 1982 viel Argentinië welke eilanden binnen, waarmee een oorlog met het Verenigd Koninkrijk begon?"
        },
        options: [
          { en: "Canary Islands", es: "Islas Canarias", de: "Kanarische Inseln", nl: "Canarische Eilanden" },
          { en: "Channel Islands", es: "Islas del Canal", de: "Kanalinseln", nl: "Kanaaleilanden" },
          { en: "Falkland Islands", es: "Islas Malvinas", de: "Falklandinseln", nl: "Falklandeilanden" },
          { en: "Galapagos Islands", es: "Islas Galápagos", de: "Galapagosinseln", nl: "Galapagoseilanden" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 2, 1982, Argentina invaded the Falkland Islands in Operation Rosario. The islands had been under British control since 1833. The Argentine military junta, led by General Leopoldo Galtieri, planned the invasion to promote patriotic feeling and support for their regime. The conflict lasted 74 days and ended with British victory on June 14.",
          es: "El 2 de abril de 1982, Argentina invadió las Islas Malvinas en la Operación Rosario. Las islas habían estado bajo control británico desde 1833. La junta militar argentina, liderada por el General Leopoldo Galtieri, planeó la invasión para promover el sentimiento patriótico y el apoyo a su régimen. El conflicto duró 74 días y terminó con la victoria británica el 14 de junio.",
          de: "Am 2. April 1982 fiel Argentinien in die Falklandinseln ein (Operation Rosario). Die Inseln waren seit 1833 unter britischer Kontrolle. Die argentinische Militärjunta unter General Leopoldo Galtieri plante die Invasion, um patriotische Gefühle und Unterstützung für ihr Regime zu fördern. Der Konflikt dauerte 74 Tage und endete am 14. Juni mit einem britischen Sieg.",
          nl: "Op 2 april 1982 viel Argentinië de Falklandeilanden binnen tijdens Operatie Rosario. De eilanden waren sinds 1833 onder Britse controle. De Argentijnse militaire junta, geleid door generaal Leopoldo Galtieri, plande de invasie om patriottische gevoelens en steun voor hun regime te bevorderen. Het conflict duurde 74 dagen en eindigde op 14 juni met een Britse overwinning."
        }
      },
      {
        question: {
          en: "How many total casualties (military deaths from both sides) occurred during the Falklands War?",
          es: "¿Cuántas bajas totales (muertes militares de ambos lados) ocurrieron durante la Guerra de las Malvinas?",
          de: "Wie viele Gesamtverluste (militärische Todesfälle von beiden Seiten) gab es während des Falklandkriegs?",
          nl: "Hoeveel totale slachtoffers (militaire doden van beide kanten) vielen er tijdens de Falklandoorlog?"
        },
        options: [
          { en: "1,500 (1,000 Argentine, 500 British)", es: "1,500 (1,000 argentinos, 500 británicos)", de: "1,500 (1,000 argentinische, 500 britische)", nl: "1,500 (1,000 Argentijnse, 500 Britse)" },
          { en: "450 (300 Argentine, 150 British)", es: "450 (300 argentinos, 150 británicos)", de: "450 (300 argentinische, 150 britische)", nl: "450 (300 Argentijnse, 150 Britse)" },
          { en: "904 (649 Argentine, 255 British)", es: "904 (649 argentinos, 255 británicos)", de: "904 (649 argentinische, 255 britische)", nl: "904 (649 Argentijnse, 255 Britse)" },
          { en: "2,000 (1,200 Argentine, 800 British)", es: "2,000 (1,200 argentinos, 800 británicos)", de: "2,000 (1,200 argentinische, 800 britische)", nl: "2,000 (1,200 Argentijnse, 800 Britse)" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Falklands War resulted in 649 Argentine military personnel deaths and 255 British military personnel deaths, totaling 904 military casualties. Additionally, three Falkland Islanders were killed during the conflict. The war also caused significant injuries, with over 1,600 Argentine and 777 British military personnel wounded.",
          es: "La Guerra de las Malvinas resultó en 649 muertes de personal militar argentino y 255 muertes de personal militar británico, totalizando 904 bajas militares. Además, tres habitantes de las Islas Malvinas murieron durante el conflicto. La guerra también causó heridas significativas, con más de 1,600 militares argentinos y 777 británicos heridos.",
          de: "Der Falklandkrieg forderte 649 Tote unter argentinischem Militärpersonal und 255 Tote unter britischem Militärpersonal, insgesamt 904 militärische Verluste. Zusätzlich wurden drei Falkland-Inselbewohner während des Konflikts getötet. Der Krieg verursachte auch erhebliche Verletzungen, mit über 1.600 verletzten argentinischen und 777 verletzten britischen Militärangehörigen.",
          nl: "De Falklandoorlog resulteerde in 649 doden onder Argentijns militair personeel en 255 doden onder Brits militair personeel, in totaal 904 militaire slachtoffers. Bovendien werden drie bewoners van de Falklandeilanden gedood tijdens het conflict. De oorlog veroorzaakte ook aanzienlijke verwondingen, met meer dan 1.600 gewonde Argentijnse en 777 gewonde Britse militairen."
        }
      },
      {
        question: {
          en: "What was the code name for the Argentine military operation to invade the Falkland Islands?",
          es: "¿Cuál fue el nombre en clave de la operación militar argentina para invadir las Islas Malvinas?",
          de: "Wie lautete der Codename für die argentinische Militäroperation zur Invasion der Falklandinseln?",
          nl: "Wat was de codenaam voor de Argentijnse militaire operatie om de Falklandeilanden binnen te vallen?"
        },
        options: [
          { en: "Operation Southern Cross", es: "Operación Cruz del Sur", de: "Operation Südkreuz", nl: "Operatie Zuiderkruis" },
          { en: "Operation Condor", es: "Operación Cóndor", de: "Operation Condor", nl: "Operatie Condor" },
          { en: "Operation Malvinas", es: "Operación Malvinas", de: "Operation Malvinas", nl: "Operatie Malvinas" },
          { en: "Operation Rosario", es: "Operación Rosario", de: "Operation Rosario", nl: "Operatie Rosario" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Operation Rosario was the code name for the Argentine invasion of the Falkland Islands. The operation began shortly after midnight on April 2, 1982, with Argentine commandos landing on the islands. By 8:30 a.m., with 800 troops ashore and 2,000 more arriving, the British governor surrendered, completing the successful occupation.",
          es: "Operación Rosario fue el nombre en clave de la invasión argentina de las Islas Malvinas. La operación comenzó poco después de la medianoche del 2 de abril de 1982, con comandos argentinos desembarcando en las islas. A las 8:30 a.m., con 800 tropas en tierra y 2,000 más llegando, el gobernador británico se rindió, completando la ocupación exitosa.",
          de: "Operation Rosario war der Codename für die argentinische Invasion der Falklandinseln. Die Operation begann kurz nach Mitternacht am 2. April 1982, als argentinische Kommandos auf den Inseln landeten. Um 8:30 Uhr, mit 800 Soldaten an Land und 2.000 weiteren auf dem Weg, ergab sich der britische Gouverneur und vollendete die erfolgreiche Besetzung.",
          nl: "Operatie Rosario was de codenaam voor de Argentijnse invasie van de Falklandeilanden. De operatie begon kort na middernacht op 2 april 1982, met Argentijnse commando's die op de eilanden landden. Om 8:30 uur, met 800 troepen aan land en 2.000 meer op komst, capituleerde de Britse gouverneur, waarmee de succesvolle bezetting werd voltooid."
        }
      },
      {
        question: {
          en: "Which UN resolution condemned the Argentine invasion and demanded immediate withdrawal from the Falklands?",
          es: "¿Qué resolución de la ONU condenó la invasión argentina y exigió el retiro inmediato de las Malvinas?",
          de: "Welche UN-Resolution verurteilte die argentinische Invasion und forderte den sofortigen Rückzug von den Falklandinseln?",
          nl: "Welke VN-resolutie veroordeelde de Argentijnse invasie en eiste onmiddellijke terugtrekking van de Falklandeilanden?"
        },
        options: [
          { en: "Resolution 242", es: "Resolución 242", de: "Resolution 242", nl: "Resolutie 242" },
          { en: "Resolution 338", es: "Resolución 338", de: "Resolution 338", nl: "Resolutie 338" },
          { en: "Resolution 678", es: "Resolución 678", de: "Resolution 678", nl: "Resolutie 678" },
          { en: "Resolution 502", es: "Resolución 502", de: "Resolution 502", nl: "Resolutie 502" }
        ],
        correctIndex: 3,
        explanation: {
          en: "UN Security Council Resolution 502, adopted on April 3, 1982 (one day after the invasion), condemned the Argentine invasion and demanded an immediate cessation of hostilities and withdrawal of Argentine forces. The resolution called for diplomatic negotiations to resolve the sovereignty dispute. It provided international legitimacy for Britain's military response.",
          es: "La Resolución 502 del Consejo de Seguridad de la ONU, adoptada el 3 de abril de 1982 (un día después de la invasión), condenó la invasión argentina y exigió el cese inmediato de hostilidades y el retiro de las fuerzas argentinas. La resolución pidió negociaciones diplomáticas para resolver la disputa de soberanía. Proporcionó legitimidad internacional para la respuesta militar británica.",
          de: "Die UN-Sicherheitsratsresolution 502, verabschiedet am 3. April 1982 (einen Tag nach der Invasion), verurteilte die argentinische Invasion und forderte eine sofortige Einstellung der Feindseligkeiten und den Rückzug der argentinischen Streitkräfte. Die Resolution forderte diplomatische Verhandlungen zur Lösung des Souveränitätsstreits. Sie bot internationale Legitimität für die britische Militärreaktion.",
          nl: "VN-Veiligheidsraadresolutie 502, aangenomen op 3 april 1982 (één dag na de invasie), veroordeelde de Argentijnse invasie en eiste een onmiddellijke beëindiging van vijandelijkheden en terugtrekking van Argentijnse troepen. De resolutie riep op tot diplomatieke onderhandelingen om het soevereiniteitsgeschil op te lossen. Het verleende internationale legitimiteit aan de Britse militaire reactie."
        }
      },
      {
        question: {
          en: "When did the British Task Force begin sailing toward the Falklands after the Argentine invasion?",
          es: "¿Cuándo comenzó a navegar la Fuerza de Tarea Británica hacia las Malvinas después de la invasión argentina?",
          de: "Wann begann die britische Task Force nach der argentinischen Invasion in Richtung Falklandinseln zu segeln?",
          nl: "Wanneer begon de Britse Task Force naar de Falklandeilanden te varen na de Argentijnse invasie?"
        },
        options: [
          { en: "April 15, 1982", es: "15 de abril de 1982", de: "15. April 1982", nl: "15 april 1982" },
          { en: "April 2, 1982", es: "2 de abril de 1982", de: "2. April 1982", nl: "2 april 1982" },
          { en: "April 10, 1982", es: "10 de abril de 1982", de: "10. April 1982", nl: "10 april 1982" },
          { en: "April 5, 1982", es: "5 de abril de 1982", de: "5. April 1982", nl: "5 april 1982" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 5, 1982, just three days after the invasion, the British government dispatched a naval task force to engage Argentine forces. The task force consisted of over 100 ships, including aircraft carriers HMS Hermes and HMS Invincible. The rapid military response demonstrated Britain's determination to retake the islands by force if necessary.",
          es: "El 5 de abril de 1982, solo tres días después de la invasión, el gobierno británico envió una fuerza de tarea naval para enfrentar a las fuerzas argentinas. La fuerza de tarea consistió en más de 100 barcos, incluyendo los portaaviones HMS Hermes y HMS Invincible. La respuesta militar rápida demostró la determinación de Gran Bretaña de retomar las islas por la fuerza si era necesario.",
          de: "Am 5. April 1982, nur drei Tage nach der Invasion, entsandte die britische Regierung eine Marine-Task Force, um gegen argentinische Streitkräfte vorzugehen. Die Task Force bestand aus über 100 Schiffen, darunter die Flugzeugträger HMS Hermes und HMS Invincible. Die schnelle militärische Reaktion demonstrierte Großbritanniens Entschlossenheit, die Inseln notfalls mit Gewalt zurückzuerobern.",
          nl: "Op 5 april 1982, slechts drie dagen na de invasie, stuurde de Britse regering een marinetaakgroep om Argentijnse troepen te confronteren. De taakgroep bestond uit meer dan 100 schepen, waaronder vliegdekschepen HMS Hermes en HMS Invincible. De snelle militaire reactie toonde Groot-Brittannië's vastberadenheid om de eilanden desnoods met geweld terug te nemen."
        }
      }
    ],

    // Day 3 - April 3rd: Pony Express Begins (1860) & Marshall Plan (1948)
    day3: [
      {
        question: {
          en: "On April 3, 1860, which famous mail delivery service began operations between Missouri and California?",
          es: "El 3 de abril de 1860, ¿qué famoso servicio de entrega de correo comenzó operaciones entre Missouri y California?",
          de: "Am 3. April 1860 begann welcher berühmte Postdienst seinen Betrieb zwischen Missouri und Kalifornien?",
          nl: "Op 3 april 1860 begon welke beroemde postbezorgingsdienst met operaties tussen Missouri en Californië?"
        },
        options: [
          { en: "United States Postal Service", es: "Servicio Postal de Estados Unidos", de: "United States Postal Service", nl: "United States Postal Service" },
          { en: "Pony Express", es: "Pony Express", de: "Pony Express", nl: "Pony Express" },
          { en: "Wells Fargo", es: "Wells Fargo", de: "Wells Fargo", nl: "Wells Fargo" },
          { en: "Butterfield Overland Mail", es: "Butterfield Overland Mail", de: "Butterfield Overland Mail", nl: "Butterfield Overland Mail" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Pony Express began on April 3, 1860, with riders departing simultaneously from St. Joseph, Missouri, and Sacramento, California. Using horse and rider relay teams, the service covered approximately 1,800 miles in about 10 days. Although it operated for only 18 months and was financially unprofitable, it became a legendary symbol of American frontier spirit.",
          es: "El Pony Express comenzó el 3 de abril de 1860, con jinetes partiendo simultáneamente de St. Joseph, Missouri, y Sacramento, California. Usando equipos de relevos de caballos y jinetes, el servicio cubría aproximadamente 1,800 millas en unos 10 días. Aunque operó solo 18 meses y no fue rentable financieramente, se convirtió en un símbolo legendario del espíritu fronterizo estadounidense.",
          de: "Der Pony Express begann am 3. April 1860, mit Reitern, die gleichzeitig von St. Joseph, Missouri, und Sacramento, Kalifornien, aufbrachen. Mit Pferde- und Reiter-Staffeln legte der Dienst etwa 1.800 Meilen in etwa 10 Tagen zurück. Obwohl er nur 18 Monate betrieben wurde und finanziell unrentabel war, wurde er zu einem legendären Symbol des amerikanischen Pioniergeistes.",
          nl: "De Pony Express begon op 3 april 1860, met ruiters die tegelijkertijd vertrokken vanuit St. Joseph, Missouri, en Sacramento, Californië. Met behulp van paard-en-ruiter-aflossingen legde de dienst ongeveer 1.800 mijl af in ongeveer 10 dagen. Hoewel het slechts 18 maanden opereerde en financieel onrendabel was, werd het een legendarisch symbool van de Amerikaanse pioniergeest."
        }
      },
      {
        question: {
          en: "How long did it take for the first Pony Express mail to travel from Missouri to Sacramento?",
          es: "¿Cuánto tiempo tardó el primer correo del Pony Express en viajar de Missouri a Sacramento?",
          de: "Wie lange dauerte es, bis die erste Pony Express-Post von Missouri nach Sacramento reiste?",
          nl: "Hoe lang duurde het voordat de eerste Pony Express-post van Missouri naar Sacramento reisde?"
        },
        options: [
          { en: "30 days", es: "30 días", de: "30 Tage", nl: "30 dagen" },
          { en: "21 days", es: "21 días", de: "21 Tage", nl: "21 dagen" },
          { en: "5 days", es: "5 días", de: "5 Tage", nl: "5 dagen" },
          { en: "10 days", es: "10 días", de: "10 Tage", nl: "10 dagen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The first westbound Pony Express mail arrived in Sacramento on April 13, 1860, approximately 10 days after departing St. Joseph, Missouri. This was remarkably fast for the era, beating the eastbound delivery by two days. The service set a new standard for cross-country communication and helped demonstrate the feasibility of a transcontinental mail system.",
          es: "El primer correo del Pony Express con destino al oeste llegó a Sacramento el 13 de abril de 1860, aproximadamente 10 días después de salir de St. Joseph, Missouri. Esto fue notablemente rápido para la época, superando la entrega hacia el este por dos días. El servicio estableció un nuevo estándar para la comunicación transcontinental y ayudó a demostrar la viabilidad de un sistema de correo transcontinental.",
          de: "Die erste westwärts reisende Pony Express-Post kam am 13. April 1860 in Sacramento an, etwa 10 Tage nach dem Verlassen von St. Joseph, Missouri. Dies war für die damalige Zeit bemerkenswert schnell und schlug die ostwärts reisende Lieferung um zwei Tage. Der Dienst setzte einen neuen Standard für die transkontinentale Kommunikation und half, die Machbarkeit eines transkontinentalen Postsystems zu demonstrieren.",
          nl: "De eerste westwaartse Pony Express-post arriveerde op 13 april 1860 in Sacramento, ongeveer 10 dagen na vertrek uit St. Joseph, Missouri. Dit was opmerkelijk snel voor die tijd en versloeg de oostwaartse levering met twee dagen. De dienst zette een nieuwe standaard voor transcontinentale communicatie en hielp de haalbaarheid van een transcontinentaal postsysteem aan te tonen."
        }
      },
      {
        question: {
          en: "On April 3, 1948, President Truman signed which historic economic aid program for post-war Europe?",
          es: "El 3 de abril de 1948, el presidente Truman firmó qué programa histórico de ayuda económica para la Europa de posguerra?",
          de: "Am 3. April 1948 unterzeichnete Präsident Truman welches historische Wirtschaftshilfeprogramm für das Nachkriegseuropa?",
          nl: "Op 3 april 1948 ondertekende president Truman welk historisch economisch hulpprogramma voor naoorlogs Europa?"
        },
        options: [
          { en: "Atlantic Charter", es: "Carta del Atlántico", de: "Atlantik-Charta", nl: "Atlantisch Handvest" },
          { en: "Truman Doctrine", es: "Doctrina Truman", de: "Truman-Doktrin", nl: "Truman-doctrine" },
          { en: "Marshall Plan", es: "Plan Marshall", de: "Marshallplan", nl: "Marshallplan" },
          { en: "Bretton Woods Agreement", es: "Acuerdo de Bretton Woods", de: "Bretton-Woods-Abkommen", nl: "Bretton Woods-akkoord" }
        ],
        correctIndex: 2,
        explanation: {
          en: "President Harry S. Truman signed the Economic Assistance Act on April 3, 1948, creating the Marshall Plan. Named after Secretary of State George C. Marshall, this program provided over $12 billion (equivalent to about $138 billion today) to help European nations recover from World War II. It successfully prevented the spread of communism while fostering economic recovery and stable democratic governments.",
          es: "El presidente Harry S. Truman firmó la Ley de Asistencia Económica el 3 de abril de 1948, creando el Plan Marshall. Nombrado en honor al Secretario de Estado George C. Marshall, este programa proporcionó más de $12 mil millones (equivalente a unos $138 mil millones hoy) para ayudar a las naciones europeas a recuperarse de la Segunda Guerra Mundial. Previno exitosamente la propagación del comunismo mientras fomentaba la recuperación económica y gobiernos democráticos estables.",
          de: "Präsident Harry S. Truman unterzeichnete am 3. April 1948 das Wirtschaftshilfegesetz und schuf damit den Marshallplan. Benannt nach Außenminister George C. Marshall, stellte dieses Programm über 12 Milliarden Dollar (heute etwa 138 Milliarden Dollar entsprechend) zur Verfügung, um europäischen Nationen bei der Erholung vom Zweiten Weltkrieg zu helfen. Es verhinderte erfolgreich die Ausbreitung des Kommunismus und förderte gleichzeitig die wirtschaftliche Erholung und stabile demokratische Regierungen.",
          nl: "President Harry S. Truman ondertekende op 3 april 1948 de Wet op Economische Bijstand, waarmee het Marshallplan werd gecreëerd. Genoemd naar minister van Buitenlandse Zaken George C. Marshall, verschafte dit programma meer dan $12 miljard (equivalent aan ongeveer $138 miljard vandaag) om Europese landen te helpen herstellen van de Tweede Wereldoorlog. Het voorkwam met succes de verspreiding van communisme terwijl het economisch herstel en stabiele democratische regeringen bevorderde."
        }
      },
      {
        question: {
          en: "How much money did the Marshall Plan provide to European nations between 1948 and 1952?",
          es: "¿Cuánto dinero proporcionó el Plan Marshall a las naciones europeas entre 1948 y 1952?",
          de: "Wie viel Geld stellte der Marshallplan zwischen 1948 und 1952 für europäische Nationen bereit?",
          nl: "Hoeveel geld verschafte het Marshallplan aan Europese landen tussen 1948 en 1952?"
        },
        options: [
          { en: "Over $5 billion", es: "Más de $5 mil millones", de: "Über 5 Milliarden Dollar", nl: "Meer dan $5 miljard" },
          { en: "Over $25 billion", es: "Más de $25 mil millones", de: "Über 25 Milliarden Dollar", nl: "Meer dan $25 miljard" },
          { en: "Over $12 billion", es: "Más de $12 mil millones", de: "Über 12 Milliarden Dollar", nl: "Meer dan $12 miljard" },
          { en: "Over $50 billion", es: "Más de $50 mil millones", de: "Über 50 Milliarden Dollar", nl: "Meer dan $50 miljard" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Marshall Plan provided over $12 billion in economic assistance to European nations between 1948 and 1952. In today's currency, this would be equivalent to approximately $138 billion. The aid helped rebuild war-torn economies, modernize industry, and remove trade barriers. It is widely considered one of the most successful foreign policy initiatives in American history.",
          es: "El Plan Marshall proporcionó más de $12 mil millones en asistencia económica a las naciones europeas entre 1948 y 1952. En la moneda actual, esto equivaldría a aproximadamente $138 mil millones. La ayuda ayudó a reconstruir las economías devastadas por la guerra, modernizar la industria y eliminar las barreras comerciales. Se considera ampliamente una de las iniciativas de política exterior más exitosas en la historia estadounidense.",
          de: "Der Marshallplan stellte zwischen 1948 und 1952 über 12 Milliarden Dollar an Wirtschaftshilfe für europäische Nationen bereit. In heutiger Währung entspräche dies etwa 138 Milliarden Dollar. Die Hilfe trug dazu bei, kriegszerstörte Volkswirtschaften wieder aufzubauen, die Industrie zu modernisieren und Handelshemmnisse abzubauen. Er gilt weithin als eine der erfolgreichsten außenpolitischen Initiativen in der amerikanischen Geschichte.",
          nl: "Het Marshallplan verschafte tussen 1948 en 1952 meer dan $12 miljard aan economische hulp aan Europese landen. In de huidige valuta zou dit ongeveer $138 miljard bedragen. De hulp hielp bij het herbouwen van door oorlog verwoeste economieën, het moderniseren van industrie en het wegnemen van handelsbarrières. Het wordt algemeen beschouwd als een van de meest succesvolle buitenlands beleidsinitiatieven in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "What ultimately led to the end of the Pony Express service in October 1861?",
          es: "¿Qué condujo finalmente al fin del servicio Pony Express en octubre de 1861?",
          de: "Was führte letztendlich zur Einstellung des Pony Express-Dienstes im Oktober 1861?",
          nl: "Wat leidde uiteindelijk tot het einde van de Pony Express-dienst in oktober 1861?"
        },
        options: [
          { en: "Native American attacks", es: "Ataques de nativos americanos", de: "Angriffe der amerikanischen Ureinwohner", nl: "Aanvallen van inheemse Amerikanen" },
          { en: "Railroad completion", es: "Finalización del ferrocarril", de: "Fertigstellung der Eisenbahn", nl: "Voltooiing van de spoorlijn" },
          { en: "Civil War outbreak", es: "Estallido de la Guerra Civil", de: "Ausbruch des Bürgerkriegs", nl: "Uitbraak van de Burgeroorlog" },
          { en: "Completion of transcontinental telegraph", es: "Finalización del telégrafo transcontinental", de: "Fertigstellung der transkontinentalen Telegrafie", nl: "Voltooiing van de transcontinentale telegraaf" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Pony Express ended operations in October 1861, just 18 months after it began, when the transcontinental telegraph was completed. The telegraph could send messages almost instantaneously across the continent, making the 10-day Pony Express service obsolete. Despite its short operational life and financial losses, the Pony Express became an enduring symbol of American innovation and determination.",
          es: "El Pony Express terminó operaciones en octubre de 1861, solo 18 meses después de comenzar, cuando se completó el telégrafo transcontinental. El telégrafo podía enviar mensajes casi instantáneamente a través del continente, haciendo obsoleto el servicio de 10 días del Pony Express. A pesar de su corta vida operativa y pérdidas financieras, el Pony Express se convirtió en un símbolo perdurable de la innovación y determinación estadounidense.",
          de: "Der Pony Express stellte im Oktober 1861, nur 18 Monate nach seinem Beginn, den Betrieb ein, als die transkontinentale Telegrafie fertiggestellt wurde. Die Telegrafie konnte Nachrichten nahezu augenblicklich über den Kontinent senden, wodurch der 10-tägige Pony Express-Dienst überflüssig wurde. Trotz seiner kurzen Betriebszeit und finanziellen Verluste wurde der Pony Express zu einem dauerhaften Symbol amerikanischer Innovation und Entschlossenheit.",
          nl: "De Pony Express stopte met opereren in oktober 1861, slechts 18 maanden na de start, toen de transcontinentale telegraaf werd voltooid. De telegraaf kon berichten bijna onmiddellijk over het continent versturen, waardoor de 10-daagse Pony Express-dienst verouderd werd. Ondanks zijn korte operationele leven en financiële verliezen, werd de Pony Express een blijvend symbool van Amerikaanse innovatie en vastberadenheid."
        }
      }
    ],

    // Day 4 - April 4th: Martin Luther King Jr. Assassination (1968) & NATO Founded (1949)
    day4: [
      {
        question: {
          en: "On April 4, 1968, civil rights leader Martin Luther King Jr. was assassinated in which American city?",
          es: "El 4 de abril de 1968, el líder de derechos civiles Martin Luther King Jr. fue asesinado en qué ciudad estadounidense?",
          de: "Am 4. April 1968 wurde der Bürgerrechtsführer Martin Luther King Jr. in welcher amerikanischen Stadt ermordet?",
          nl: "Op 4 april 1968 werd burgerrechtenleider Martin Luther King Jr. vermoord in welke Amerikaanse stad?"
        },
        options: [
          { en: "Memphis, Tennessee", es: "Memphis, Tennessee", de: "Memphis, Tennessee", nl: "Memphis, Tennessee" },
          { en: "Birmingham, Alabama", es: "Birmingham, Alabama", de: "Birmingham, Alabama", nl: "Birmingham, Alabama" },
          { en: "Atlanta, Georgia", es: "Atlanta, Georgia", de: "Atlanta, Georgia", nl: "Atlanta, Georgia" },
          { en: "Washington, D.C.", es: "Washington, D.C.", de: "Washington, D.C.", nl: "Washington, D.C." }
        ],
        correctIndex: 0,
        explanation: {
          en: "Martin Luther King Jr. was shot and killed on the balcony of the Lorraine Motel in Memphis, Tennessee, on April 4, 1968. He was 39 years old and had traveled to Memphis to support striking African-American sanitation workers. The assassination occurred just after 6 p.m., and King was pronounced dead at a Memphis hospital. His death triggered widespread riots and unrest across the United States.",
          es: "Martin Luther King Jr. fue disparado y asesinado en el balcón del Motel Lorraine en Memphis, Tennessee, el 4 de abril de 1968. Tenía 39 años y había viajado a Memphis para apoyar a los trabajadores de saneamiento afroamericanos en huelga. El asesinato ocurrió poco después de las 6 p.m., y King fue declarado muerto en un hospital de Memphis. Su muerte desencadenó disturbios y desórdenes generalizados en los Estados Unidos.",
          de: "Martin Luther King Jr. wurde am 4. April 1968 auf dem Balkon des Lorraine Motels in Memphis, Tennessee, erschossen. Er war 39 Jahre alt und war nach Memphis gereist, um streikende afroamerikanische Sanitärarbeiter zu unterstützen. Das Attentat ereignete sich kurz nach 18 Uhr, und King wurde in einem Krankenhaus in Memphis für tot erklärt. Sein Tod löste in den gesamten Vereinigten Staaten weit verbreitete Unruhen und Aufstände aus.",
          nl: "Martin Luther King Jr. werd neergeschoten en gedood op het balkon van het Lorraine Motel in Memphis, Tennessee, op 4 april 1968. Hij was 39 jaar oud en was naar Memphis gereisd om stakende Afro-Amerikaanse sanitaire werkers te steunen. De moord vond plaats net na 18:00 uur, en King werd dood verklaard in een ziekenhuis in Memphis. Zijn dood veroorzaakte wijdverspreide rellen en onrust in de Verenigde Staten."
        }
      },
      {
        question: {
          en: "Why had Martin Luther King Jr. traveled to Memphis in April 1968?",
          es: "¿Por qué Martin Luther King Jr. había viajado a Memphis en abril de 1968?",
          de: "Warum war Martin Luther King Jr. im April 1968 nach Memphis gereist?",
          nl: "Waarom was Martin Luther King Jr. in april 1968 naar Memphis gereisd?"
        },
        options: [
          { en: "To meet with local politicians", es: "Para reunirse con políticos locales", de: "Um sich mit lokalen Politikern zu treffen", nl: "Om met lokale politici te ontmoeten" },
          { en: "To give a major speech on civil rights", es: "Para dar un discurso importante sobre derechos civiles", de: "Um eine wichtige Rede über Bürgerrechte zu halten", nl: "Om een belangrijke toespraak over burgerrechten te houden" },
          { en: "To organize a voting rights march", es: "Para organizar una marcha por derechos de voto", de: "Um einen Marsch für Wahlrechte zu organisieren", nl: "Om een mars voor stemrechten te organiseren" },
          { en: "To support striking sanitation workers", es: "Para apoyar a trabajadores de saneamiento en huelga", de: "Um streikende Sanitärarbeiter zu unterstützen", nl: "Om stakende sanitaire werkers te steunen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "King traveled to Memphis to support striking African-American sanitation workers who were protesting poor working conditions, low wages, and discriminatory treatment. The strike began after two workers were killed by a malfunctioning garbage truck. King saw their struggle as part of the broader civil rights movement and economic justice. His support for the workers demonstrated his commitment to both racial and economic equality.",
          es: "King viajó a Memphis para apoyar a los trabajadores de saneamiento afroamericanos en huelga que protestaban contra las malas condiciones laborales, los bajos salarios y el trato discriminatorio. La huelga comenzó después de que dos trabajadores murieran por un camión de basura defectuoso. King vio su lucha como parte del movimiento más amplio de derechos civiles y justicia económica. Su apoyo a los trabajadores demostró su compromiso con la igualdad racial y económica.",
          de: "King reiste nach Memphis, um streikende afroamerikanische Sanitärarbeiter zu unterstützen, die gegen schlechte Arbeitsbedingungen, niedrige Löhne und diskriminierende Behandlung protestierten. Der Streik begann, nachdem zwei Arbeiter von einem defekten Müllwagen getötet worden waren. King sah ihren Kampf als Teil der breiteren Bürgerrechtsbewegung und wirtschaftlichen Gerechtigkeit. Seine Unterstützung für die Arbeiter zeigte sein Engagement für rassische und wirtschaftliche Gleichheit.",
          nl: "King reisde naar Memphis om stakende Afro-Amerikaanse sanitaire werkers te steunen die protesteerden tegen slechte arbeidsomstandigheden, lage lonen en discriminerende behandeling. De staking begon nadat twee werkers waren gedood door een defecte vuilniswagen. King zag hun strijd als onderdeel van de bredere burgerrechtenbeweging en economische rechtvaardigheid. Zijn steun aan de werkers toonde zijn toewijding aan zowel raciale als economische gelijkheid."
        }
      },
      {
        question: {
          en: "Who was convicted of assassinating Martin Luther King Jr.?",
          es: "¿Quién fue condenado por asesinar a Martin Luther King Jr.?",
          de: "Wer wurde wegen der Ermordung von Martin Luther King Jr. verurteilt?",
          nl: "Wie werd veroordeeld voor de moord op Martin Luther King Jr.?"
        },
        options: [
          { en: "John Wilkes Booth", es: "John Wilkes Booth", de: "John Wilkes Booth", nl: "John Wilkes Booth" },
          { en: "James Earl Ray", es: "James Earl Ray", de: "James Earl Ray", nl: "James Earl Ray" },
          { en: "Lee Harvey Oswald", es: "Lee Harvey Oswald", de: "Lee Harvey Oswald", nl: "Lee Harvey Oswald" },
          { en: "Sirhan Sirhan", es: "Sirhan Sirhan", de: "Sirhan Sirhan", nl: "Sirhan Sirhan" }
        ],
        correctIndex: 1,
        explanation: {
          en: "James Earl Ray, a 40-year-old escaped fugitive, confessed to killing Martin Luther King Jr. and was sentenced to 99 years in prison. However, Ray later recanted his confession, claiming he was part of a conspiracy. Despite numerous investigations, he was never granted a trial. King's death caused riots in over 100 cities, resulting in 43 deaths and more than 3,000 injuries.",
          es: "James Earl Ray, un fugitivo escapado de 40 años, confesó haber matado a Martin Luther King Jr. y fue sentenciado a 99 años de prisión. Sin embargo, Ray luego se retractó de su confesión, afirmando que era parte de una conspiración. A pesar de numerosas investigaciones, nunca se le concedió un juicio. La muerte de King causó disturbios en más de 100 ciudades, resultando en 43 muertes y más de 3,000 heridos.",
          de: "James Earl Ray, ein 40-jähriger entflohener Flüchtiger, gestand, Martin Luther King Jr. getötet zu haben, und wurde zu 99 Jahren Gefängnis verurteilt. Ray widerrief jedoch später sein Geständnis und behauptete, Teil einer Verschwörung zu sein. Trotz zahlreicher Untersuchungen wurde ihm nie ein Prozess gewährt. Kings Tod verursachte Unruhen in über 100 Städten, die zu 43 Todesfällen und mehr als 3.000 Verletzten führten.",
          nl: "James Earl Ray, een 40-jarige ontsnapte voortvluchtige, bekende Martin Luther King Jr. te hebben vermoord en werd veroordeeld tot 99 jaar gevangenisstraf. Ray trok zijn bekentenis echter later in en beweerde deel uit te maken van een samenzwering. Ondanks tal van onderzoeken kreeg hij nooit een proces. Kings dood veroorzaakte rellen in meer dan 100 steden, wat resulteerde in 43 doden en meer dan 3.000 gewonden."
        }
      },
      {
        question: {
          en: "On April 4, 1949, twelve nations signed a treaty establishing which important military alliance?",
          es: "El 4 de abril de 1949, doce naciones firmaron un tratado estableciendo qué importante alianza militar?",
          de: "Am 4. April 1949 unterzeichneten zwölf Nationen einen Vertrag zur Gründung welches wichtigen Militärbündnisses?",
          nl: "Op 4 april 1949 ondertekenden twaalf landen een verdrag tot oprichting van welke belangrijke militaire alliantie?"
        },
        options: [
          { en: "NATO (North Atlantic Treaty Organization)", es: "OTAN (Organización del Tratado del Atlántico Norte)", de: "NATO (Nordatlantikpakt-Organisation)", nl: "NAVO (Noord-Atlantische Verdragsorganisatie)" },
          { en: "European Union", es: "Unión Europea", de: "Europäische Union", nl: "Europese Unie" },
          { en: "United Nations", es: "Naciones Unidas", de: "Vereinte Nationen", nl: "Verenigde Naties" },
          { en: "Warsaw Pact", es: "Pacto de Varsovia", de: "Warschauer Pakt", nl: "Warschaupact" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The North Atlantic Treaty was signed on April 4, 1949, in Washington, D.C., establishing NATO. The twelve founding members included the United States, Canada, United Kingdom, France, and eight other Western European nations. This mutual defense pact was created to counter potential Soviet aggression during the Cold War. NATO's collective defense principle states that an attack on one member is an attack on all.",
          es: "El Tratado del Atlántico Norte fue firmado el 4 de abril de 1949 en Washington, D.C., estableciendo la OTAN. Los doce miembros fundadores incluyeron a Estados Unidos, Canadá, Reino Unido, Francia y otras ocho naciones de Europa Occidental. Este pacto de defensa mutua fue creado para contrarrestar la posible agresión soviética durante la Guerra Fría. El principio de defensa colectiva de la OTAN establece que un ataque a un miembro es un ataque a todos.",
          de: "Der Nordatlantikvertrag wurde am 4. April 1949 in Washington, D.C., unterzeichnet und gründete die NATO. Die zwölf Gründungsmitglieder umfassten die Vereinigten Staaten, Kanada, das Vereinigte Königreich, Frankreich und acht weitere westeuropäische Nationen. Dieser Beistandspakt wurde geschaffen, um möglicher sowjetischer Aggression während des Kalten Krieges entgegenzuwirken. Das kollektive Verteidigungsprinzip der NATO besagt, dass ein Angriff auf ein Mitglied ein Angriff auf alle ist.",
          nl: "Het Noord-Atlantisch Verdrag werd ondertekend op 4 april 1949 in Washington, D.C., waarmee de NAVO werd opgericht. De twaalf oprichtende leden waren onder andere de Verenigde Staten, Canada, het Verenigd Koninkrijk, Frankrijk en acht andere West-Europese landen. Dit wederzijdse verdedigingspact werd gecreëerd om mogelijke Sovjet-aggressie tijdens de Koude Oorlog tegen te gaan. Het collectieve verdedigingsprincipe van de NAVO stelt dat een aanval op één lid een aanval op allen is."
        }
      },
      {
        question: {
          en: "What is NATO's famous collective defense principle, outlined in Article 5 of the treaty?",
          es: "¿Cuál es el famoso principio de defensa colectiva de la OTAN, descrito en el Artículo 5 del tratado?",
          de: "Was ist das berühmte kollektive Verteidigungsprinzip der NATO, das in Artikel 5 des Vertrags dargelegt ist?",
          nl: "Wat is het beroemde collectieve verdedigingsprincipe van de NAVO, uiteengezet in Artikel 5 van het verdrag?"
        },
        options: [
          { en: "All members share nuclear weapons", es: "Todos los miembros comparten armas nucleares", de: "Alle Mitglieder teilen Atomwaffen", nl: "Alle leden delen kernwapens" },
          { en: "Members must provide military bases to allies", es: "Los miembros deben proporcionar bases militares a los aliados", de: "Mitglieder müssen Verbündeten Militärbasen zur Verfügung stellen", nl: "Leden moeten militaire bases verstrekken aan bondgenoten" },
          { en: "An attack on one member is an attack on all", es: "Un ataque a un miembro es un ataque a todos", de: "Ein Angriff auf ein Mitglied ist ein Angriff auf alle", nl: "Een aanval op één lid is een aanval op allen" },
          { en: "Members must contribute equal military forces", es: "Los miembros deben contribuir con fuerzas militares iguales", de: "Mitglieder müssen gleiche militärische Kräfte beisteuern", nl: "Leden moeten gelijke militaire troepen bijdragen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Article 5 of the North Atlantic Treaty establishes that an armed attack against one or more NATO members shall be considered an attack against all members. This principle of collective defense has been invoked only once in NATO's history: after the September 11, 2001 terrorist attacks on the United States. This provision serves as the cornerstone of the alliance and a powerful deterrent against aggression.",
          es: "El Artículo 5 del Tratado del Atlántico Norte establece que un ataque armado contra uno o más miembros de la OTAN se considerará un ataque contra todos los miembros. Este principio de defensa colectiva se ha invocado solo una vez en la historia de la OTAN: después de los ataques terroristas del 11 de septiembre de 2001 contra Estados Unidos. Esta disposición sirve como piedra angular de la alianza y un poderoso elemento disuasorio contra la agresión.",
          de: "Artikel 5 des Nordatlantikvertrags legt fest, dass ein bewaffneter Angriff gegen ein oder mehrere NATO-Mitglieder als Angriff gegen alle Mitglieder betrachtet wird. Dieses Prinzip der kollektiven Verteidigung wurde in der Geschichte der NATO nur einmal angerufen: nach den Terroranschlägen vom 11. September 2001 gegen die Vereinigten Staaten. Diese Bestimmung dient als Eckpfeiler der Allianz und als starke Abschreckung gegen Aggression.",
          nl: "Artikel 5 van het Noord-Atlantisch Verdrag stelt dat een gewapende aanval tegen één of meer NAVO-leden zal worden beschouwd als een aanval tegen alle leden. Dit principe van collectieve verdediging is slechts één keer in de geschiedenis van de NAVO ingeroepen: na de terroristische aanslagen van 11 september 2001 op de Verenigde Staten. Deze bepaling dient als hoeksteen van de alliantie en een krachtig afschrikmiddel tegen aggressie."
        }
      }
    ],

    // Day 5 - April 5th: Kurt Cobain Death (1994)
    day5: [
      {
        question: {
          en: "On April 5, 1994, Kurt Cobain, frontman of which influential grunge band, died by suicide?",
          es: "El 5 de abril de 1994, Kurt Cobain, líder de qué influyente banda de grunge, murió por suicidio?",
          de: "Am 5. April 1994 starb Kurt Cobain, Frontmann welcher einflussreichen Grunge-Band, durch Suizid?",
          nl: "Op 5 april 1994 stierf Kurt Cobain, frontman van welke invloedrijke grungeband, door zelfdoding?"
        },
        options: [
          { en: "Soundgarden", es: "Soundgarden", de: "Soundgarden", nl: "Soundgarden" },
          { en: "Alice in Chains", es: "Alice in Chains", de: "Alice in Chains", nl: "Alice in Chains" },
          { en: "Pearl Jam", es: "Pearl Jam", de: "Pearl Jam", nl: "Pearl Jam" },
          { en: "Nirvana", es: "Nirvana", de: "Nirvana", nl: "Nirvana" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Kurt Cobain was the lead vocalist, guitarist, and primary songwriter for Nirvana, one of the most influential rock bands of the 1990s. He died by suicide on April 5, 1994, at his home in Seattle at age 27. His body was discovered three days later on April 8 by an electrician. Cobain's death marked the end of Nirvana and became a defining moment in rock music history.",
          es: "Kurt Cobain fue el vocalista principal, guitarrista y compositor principal de Nirvana, una de las bandas de rock más influyentes de la década de 1990. Murió por suicidio el 5 de abril de 1994 en su casa en Seattle a los 27 años. Su cuerpo fue descubierto tres días después, el 8 de abril, por un electricista. La muerte de Cobain marcó el fin de Nirvana y se convirtió en un momento definitorio en la historia de la música rock.",
          de: "Kurt Cobain war der Leadsänger, Gitarrist und Hauptsongwriter von Nirvana, einer der einflussreichsten Rockbands der 1990er Jahre. Er starb am 5. April 1994 durch Suizid in seinem Haus in Seattle im Alter von 27 Jahren. Sein Körper wurde drei Tage später am 8. April von einem Elektriker entdeckt. Cobains Tod markierte das Ende von Nirvana und wurde zu einem prägenden Moment in der Geschichte der Rockmusik.",
          nl: "Kurt Cobain was de leadzanger, gitarist en belangrijkste songwriter van Nirvana, een van de meest invloedrijke rockbands van de jaren negentig. Hij stierf door zelfdoding op 5 april 1994 in zijn huis in Seattle op 27-jarige leeftijd. Zijn lichaam werd drie dagen later op 8 april ontdekt door een elektricien. Cobains dood markeerde het einde van Nirvana en werd een bepalend moment in de geschiedenis van de rockmuziek."
        }
      },
      {
        question: {
          en: "At what age did Kurt Cobain die, making him part of the infamous '27 Club'?",
          es: "¿A qué edad murió Kurt Cobain, convirtiéndolo en parte del infame 'Club de los 27'?",
          de: "In welchem Alter starb Kurt Cobain und wurde damit Teil des berüchtigten '27 Club'?",
          nl: "Op welke leeftijd stierf Kurt Cobain, waardoor hij deel werd van de beruchte '27 Club'?"
        },
        options: [
          { en: "32 years old", es: "32 años", de: "32 Jahre alt", nl: "32 jaar oud" },
          { en: "30 years old", es: "30 años", de: "30 Jahre alt", nl: "30 jaar oud" },
          { en: "27 years old", es: "27 años", de: "27 Jahre alt", nl: "27 jaar oud" },
          { en: "25 years old", es: "25 años", de: "25 Jahre alt", nl: "25 jaar oud" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Kurt Cobain died at age 27, joining the notorious '27 Club' of influential musicians who died at that age. This group includes Jimi Hendrix, Janis Joplin, Jim Morrison, and Amy Winehouse. Cobain was born on February 20, 1967, and died on April 5, 1994. His death enhanced the dark mystique surrounding this phenomenon and sparked discussions about the pressures of fame and artistic genius.",
          es: "Kurt Cobain murió a los 27 años, uniéndose al notorio 'Club de los 27' de músicos influyentes que murieron a esa edad. Este grupo incluye a Jimi Hendrix, Janis Joplin, Jim Morrison y Amy Winehouse. Cobain nació el 20 de febrero de 1967 y murió el 5 de abril de 1994. Su muerte intensificó la mística oscura que rodea este fenómeno y provocó discusiones sobre las presiones de la fama y el genio artístico.",
          de: "Kurt Cobain starb im Alter von 27 Jahren und trat damit dem berüchtigten '27 Club' einflussreicher Musiker bei, die in diesem Alter starben. Zu dieser Gruppe gehören Jimi Hendrix, Janis Joplin, Jim Morrison und Amy Winehouse. Cobain wurde am 20. Februar 1967 geboren und starb am 5. April 1994. Sein Tod verstärkte die düstere Mystik um dieses Phänomen und löste Diskussionen über den Druck von Ruhm und künstlerischem Genie aus.",
          nl: "Kurt Cobain stierf op 27-jarige leeftijd en werd daarmee lid van de beruchte '27 Club' van invloedrijke muzikanten die op die leeftijd stierven. Deze groep omvat Jimi Hendrix, Janis Joplin, Jim Morrison en Amy Winehouse. Cobain werd geboren op 20 februari 1967 en stierf op 5 april 1994. Zijn dood versterkte de duistere mystiek rond dit fenomeen en leidde tot discussies over de druk van roem en artistiek genie."
        }
      },
      {
        question: {
          en: "When was Kurt Cobain's body discovered after his death?",
          es: "¿Cuándo fue descubierto el cuerpo de Kurt Cobain después de su muerte?",
          de: "Wann wurde Kurt Cobains Körper nach seinem Tod entdeckt?",
          nl: "Wanneer werd Kurt Cobains lichaam ontdekt na zijn dood?"
        },
        options: [
          { en: "April 12, 1994 (7 days later)", es: "12 de abril de 1994 (7 días después)", de: "12. April 1994 (7 Tage später)", nl: "12 april 1994 (7 dagen later)" },
          { en: "April 8, 1994 (3 days later)", es: "8 de abril de 1994 (3 días después)", de: "8. April 1994 (3 Tage später)", nl: "8 april 1994 (3 dagen later)" },
          { en: "April 6, 1994 (1 day later)", es: "6 de abril de 1994 (1 día después)", de: "6. April 1994 (1 Tag später)", nl: "6 april 1994 (1 dag later)" },
          { en: "April 5, 1994 (same day)", es: "5 de abril de 1994 (mismo día)", de: "5. April 1994 (gleicher Tag)", nl: "5 april 1994 (zelfde dag)" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Kurt Cobain's body was discovered on April 8, 1994, three days after his death on April 5. An electrician who had been hired to install a security system at Cobain's Seattle home found him. Forensic investigators and a coroner determined that Cobain had died on April 5. The Seattle Police incident report stated he was found with a shotgun and a suicide note nearby.",
          es: "El cuerpo de Kurt Cobain fue descubierto el 8 de abril de 1994, tres días después de su muerte el 5 de abril. Un electricista que había sido contratado para instalar un sistema de seguridad en la casa de Cobain en Seattle lo encontró. Los investigadores forenses y un forense determinaron que Cobain había muerto el 5 de abril. El informe del incidente de la Policía de Seattle indicó que fue encontrado con una escopeta y una nota de suicidio cerca.",
          de: "Kurt Cobains Körper wurde am 8. April 1994, drei Tage nach seinem Tod am 5. April, entdeckt. Ein Elektriker, der beauftragt worden war, ein Sicherheitssystem in Cobains Haus in Seattle zu installieren, fand ihn. Forensische Ermittler und ein Gerichtsmediziner stellten fest, dass Cobain am 5. April gestorben war. Der Vorfallbericht der Polizei von Seattle besagte, dass er mit einer Schrotflinte und einem Abschiedsbrief in der Nähe gefunden wurde.",
          nl: "Kurt Cobains lichaam werd ontdekt op 8 april 1994, drie dagen na zijn dood op 5 april. Een elektricien die was ingehuurd om een beveiligingssysteem in Cobains huis in Seattle te installeren, vond hem. Forensische onderzoekers en een lijkschouwer bepaalden dat Cobain op 5 april was gestorven. Het incidentrapport van de politie van Seattle vermeldde dat hij werd gevonden met een jachtgeweer en een afscheidsbrief in de buurt."
        }
      },
      {
        question: {
          en: "Which Nirvana album, released in 1991, became a landmark of the grunge movement and alternative rock?",
          es: "¿Qué álbum de Nirvana, lanzado en 1991, se convirtió en un hito del movimiento grunge y el rock alternativo?",
          de: "Welches Nirvana-Album, das 1991 veröffentlicht wurde, wurde zu einem Meilenstein der Grunge-Bewegung und des Alternative Rock?",
          nl: "Welk Nirvana-album, uitgebracht in 1991, werd een mijlpaal van de grungebeweging en alternatieve rock?"
        },
        options: [
          { en: "Unplugged in New York", es: "Unplugged in New York", de: "Unplugged in New York", nl: "Unplugged in New York" },
          { en: "Nevermind", es: "Nevermind", de: "Nevermind", nl: "Nevermind" },
          { en: "Bleach", es: "Bleach", de: "Bleach", nl: "Bleach" },
          { en: "In Utero", es: "In Utero", de: "In Utero", nl: "In Utero" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nirvana's second studio album 'Nevermind' was released on September 24, 1991, and became a cultural phenomenon. The album, featuring the hit single 'Smells Like Teen Spirit,' brought grunge and alternative rock into the mainstream. It displaced Michael Jackson's 'Dangerous' from the number one spot on the Billboard charts. 'Nevermind' sold over 30 million copies worldwide and is considered one of the greatest albums of all time.",
          es: "El segundo álbum de estudio de Nirvana 'Nevermind' fue lanzado el 24 de septiembre de 1991 y se convirtió en un fenómeno cultural. El álbum, que incluye el exitoso sencillo 'Smells Like Teen Spirit', llevó el grunge y el rock alternativo a la corriente principal. Desplazó el 'Dangerous' de Michael Jackson del primer puesto en las listas de Billboard. 'Nevermind' vendió más de 30 millones de copias en todo el mundo y se considera uno de los mejores álbumes de todos los tiempos.",
          de: "Nirvanas zweites Studioalbum 'Nevermind' wurde am 24. September 1991 veröffentlicht und wurde zu einem kulturellen Phänomen. Das Album mit der Hit-Single 'Smells Like Teen Spirit' brachte Grunge und Alternative Rock in den Mainstream. Es verdrängte Michael Jacksons 'Dangerous' von der Nummer-eins-Position der Billboard-Charts. 'Nevermind' verkaufte sich weltweit über 30 Millionen Mal und gilt als eines der größten Alben aller Zeiten.",
          nl: "Nirvana's tweede studio-album 'Nevermind' werd uitgebracht op 24 september 1991 en werd een cultureel fenomeen. Het album, met de hitsingle 'Smells Like Teen Spirit', bracht grunge en alternatieve rock naar de mainstream. Het verdreef Michael Jackson's 'Dangerous' van de nummer één positie in de Billboard-hitlijsten. 'Nevermind' verkocht wereldwijd meer dan 30 miljoen exemplaren en wordt beschouwd als een van de grootste albums aller tijden."
        }
      },
      {
        question: {
          en: "How many people attended the public vigil held for Kurt Cobain on April 10, 1994, at Seattle Center?",
          es: "¿Cuántas personas asistieron a la vigilia pública celebrada por Kurt Cobain el 10 de abril de 1994 en Seattle Center?",
          de: "Wie viele Menschen nahmen an der öffentlichen Mahnwache für Kurt Cobain am 10. April 1994 im Seattle Center teil?",
          nl: "Hoeveel mensen woonden de openbare wake bij die op 10 april 1994 voor Kurt Cobain werd gehouden in het Seattle Center?"
        },
        options: [
          { en: "Approximately 2,000", es: "Aproximadamente 2,000", de: "Ungefähr 2.000", nl: "Ongeveer 2.000" },
          { en: "Approximately 20,000", es: "Aproximadamente 20,000", de: "Ungefähr 20.000", nl: "Ongeveer 20.000" },
          { en: "Approximately 50,000", es: "Aproximadamente 50,000", de: "Ungefähr 50.000", nl: "Ongeveer 50.000" },
          { en: "Approximately 7,000", es: "Aproximadamente 7,000", de: "Ungefähr 7.000", nl: "Ongeveer 7.000" }
        ],
        correctIndex: 3,
        explanation: {
          en: "A public vigil was held on April 10, 1994, at a park in Seattle Center, drawing approximately 7,000 mourners. During the vigil, a recording was played of Kurt Cobain's widow, Courtney Love, reading from his suicide note. She responded to his words with her own, her voice cracking with emotion. The vigil became an important moment for fans to collectively grieve and honor Cobain's musical legacy and cultural impact.",
          es: "Se celebró una vigilia pública el 10 de abril de 1994 en un parque en Seattle Center, atrayendo aproximadamente 7,000 dolientes. Durante la vigilia, se reprodujo una grabación de la viuda de Kurt Cobain, Courtney Love, leyendo su nota de suicidio. Ella respondió a sus palabras con las suyas, su voz quebrándose de emoción. La vigilia se convirtió en un momento importante para que los fanáticos lloraran colectivamente y honraran el legado musical y el impacto cultural de Cobain.",
          de: "Am 10. April 1994 fand eine öffentliche Mahnwache in einem Park im Seattle Center statt, zu der etwa 7.000 Trauernde kamen. Während der Mahnwache wurde eine Aufnahme abgespielt, in der Kurt Cobains Witwe Courtney Love seinen Abschiedsbrief vorlas. Sie antwortete auf seine Worte mit ihren eigenen, ihre Stimme brach vor Emotion. Die Mahnwache wurde zu einem wichtigen Moment, in dem Fans gemeinsam trauern und Cobains musikalisches Erbe und kulturelle Wirkung ehren konnten.",
          nl: "Op 10 april 1994 werd een openbare wake gehouden in een park in het Seattle Center, waar ongeveer 7.000 rouwenden op afkwamen. Tijdens de wake werd een opname afgespeeld van Kurt Cobains weduwe, Courtney Love, die zijn afscheidsbrief voorlas. Ze reageerde op zijn woorden met haar eigen woorden, haar stem brak van emotie. De wake werd een belangrijk moment voor fans om collectief te rouwen en Cobains muzikale erfenis en culturele impact te eren."
        }
      }
    ],

    // Day 6 - April 6th: First Modern Olympics (1896) & US Enters WWI (1917)
    day6: [
      {
        question: {
          en: "On April 6, 1896, where were the first modern Olympic Games officially opened?",
          es: "El 6 de abril de 1896, ¿dónde se inauguraron oficialmente los primeros Juegos Olímpicos modernos?",
          de: "Am 6. April 1896, wo wurden die ersten modernen Olympischen Spiele offiziell eröffnet?",
          nl: "Op 6 april 1896, waar werden de eerste moderne Olympische Spelen officieel geopend?"
        },
        options: [
          { en: "Athens, Greece", es: "Atenas, Grecia", de: "Athen, Griechenland", nl: "Athene, Griekenland" },
          { en: "London, England", es: "Londres, Inglaterra", de: "London, England", nl: "Londen, Engeland" },
          { en: "Rome, Italy", es: "Roma, Italia", de: "Rom, Italien", nl: "Rome, Italië" },
          { en: "Paris, France", es: "París, Francia", de: "Paris, Frankreich", nl: "Parijs, Frankrijk" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The first modern Olympic Games formally opened in Athens, Greece, on April 6, 1896. King Georgios I of Greece and a crowd of 60,000 spectators welcomed athletes from 13 nations to the international competition. The Games featured 280 participants competing in 43 events, covering track-and-field, swimming, gymnastics, cycling, wrestling, weightlifting, fencing, shooting, and tennis.",
          es: "Los primeros Juegos Olímpicos modernos se inauguraron formalmente en Atenas, Grecia, el 6 de abril de 1896. El rey Jorge I de Grecia y una multitud de 60,000 espectadores dieron la bienvenida a atletas de 13 naciones a la competencia internacional. Los Juegos contaron con 280 participantes compitiendo en 43 eventos, cubriendo atletismo, natación, gimnasia, ciclismo, lucha, levantamiento de pesas, esgrima, tiro y tenis.",
          de: "Die ersten modernen Olympischen Spiele wurden am 6. April 1896 in Athen, Griechenland, offiziell eröffnet. König Georgios I. von Griechenland und eine Menge von 60.000 Zuschauern begrüßten Athleten aus 13 Nationen beim internationalen Wettbewerb. Die Spiele umfassten 280 Teilnehmer, die in 43 Veranstaltungen antraten, darunter Leichtathletik, Schwimmen, Gymnastik, Radfahren, Ringen, Gewichtheben, Fechten, Schießen und Tennis.",
          nl: "De eerste moderne Olympische Spelen werden formeel geopend in Athene, Griekenland, op 6 april 1896. Koning Georgios I van Griekenland en een menigte van 60.000 toeschouwers verwelkomden atleten uit 13 landen bij de internationale competitie. De Spelen omvatten 280 deelnemers die streden in 43 evenementen, waaronder atletiek, zwemmen, gymnastiek, wielrennen, worstelen, gewichtheffen, schermen, schieten en tennis."
        }
      },
      {
        question: {
          en: "On April 6, 1917, the United States entered World War I by declaring war against which nation?",
          es: "El 6 de abril de 1917, Estados Unidos entró en la Primera Guerra Mundial al declarar la guerra contra qué nación?",
          de: "Am 6. April 1917 trat die Vereinigten Staaten in den Ersten Weltkrieg ein, indem sie welcher Nation den Krieg erklärten?",
          nl: "Op 6 april 1917 trad de Verenigde Staten toe tot de Eerste Wereldoorlog door de oorlog te verklaren aan welke natie?"
        },
        options: [
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Ottoman Empire", es: "Imperio Otomano", de: "Osmanisches Reich", nl: "Ottomaanse Rijk" },
          { en: "Austria-Hungary", es: "Austria-Hungría", de: "Österreich-Ungarn", nl: "Oostenrijk-Hongarije" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 6, 1917, the United States entered World War I as the House joined the Senate in approving a declaration of war against Germany, which was then signed by President Woodrow Wilson. The U.S. had maintained neutrality for nearly three years, but German submarine attacks on American ships and the Zimmermann Telegram pushed the nation toward war. American entry proved decisive in the Allied victory.",
          es: "El 6 de abril de 1917, Estados Unidos entró en la Primera Guerra Mundial cuando la Cámara se unió al Senado para aprobar una declaración de guerra contra Alemania, que luego fue firmada por el presidente Woodrow Wilson. Estados Unidos había mantenido la neutralidad durante casi tres años, pero los ataques submarinos alemanes a barcos estadounidenses y el Telegrama de Zimmermann empujaron a la nación hacia la guerra. La entrada estadounidense resultó decisiva para la victoria aliada.",
          de: "Am 6. April 1917 traten die Vereinigten Staaten in den Ersten Weltkrieg ein, als das Repräsentantenhaus sich dem Senat anschloss, um eine Kriegserklärung gegen Deutschland zu genehmigen, die dann von Präsident Woodrow Wilson unterzeichnet wurde. Die USA hatten fast drei Jahre lang Neutralität bewahrt, aber deutsche U-Boot-Angriffe auf amerikanische Schiffe und das Zimmermann-Telegramm trieben die Nation in den Krieg. Der amerikanische Eintritt erwies sich als entscheidend für den alliierten Sieg.",
          nl: "Op 6 april 1917 trad de Verenigde Staten toe tot de Eerste Wereldoorlog toen het Huis zich bij de Senaat voegde in het goedkeuren van een oorlogsverklaring aan Duitsland, die vervolgens werd ondertekend door president Woodrow Wilson. De VS hadden bijna drie jaar neutraliteit gehandhaafd, maar Duitse onderzeeëraanvallen op Amerikaanse schepen en het Zimmermann-telegram duwden de natie richting oorlog. De Amerikaanse toetreding bleek beslissend voor de geallieerde overwinning."
        }
      },
      {
        question: {
          en: "How many nations participated in the first modern Olympic Games in Athens in 1896?",
          es: "¿Cuántas naciones participaron en los primeros Juegos Olímpicos modernos en Atenas en 1896?",
          de: "Wie viele Nationen nahmen an den ersten modernen Olympischen Spielen in Athen 1896 teil?",
          nl: "Hoeveel landen namen deel aan de eerste moderne Olympische Spelen in Athene in 1896?"
        },
        options: [
          { en: "8 nations", es: "8 naciones", de: "8 Nationen", nl: "8 landen" },
          { en: "13 nations", es: "13 naciones", de: "13 Nationen", nl: "13 landen" },
          { en: "25 nations", es: "25 naciones", de: "25 Nationen", nl: "25 landen" },
          { en: "20 nations", es: "20 naciones", de: "20 Nationen", nl: "20 landen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Thirteen nations participated in the first modern Olympic Games in Athens in 1896, with 280 athletes competing in 43 events. The participating countries included Greece, Germany, France, Great Britain, Hungary, Austria, Denmark, and the United States. The Games were much smaller than today's Olympics, with only male athletes competing. The revival of the Olympics was inspired by Pierre de Coubertin's vision to promote international peace through sports.",
          es: "Trece naciones participaron en los primeros Juegos Olímpicos modernos en Atenas en 1896, con 280 atletas compitiendo en 43 eventos. Los países participantes incluyeron Grecia, Alemania, Francia, Gran Bretaña, Hungría, Austria, Dinamarca y Estados Unidos. Los Juegos eran mucho más pequeños que las Olimpiadas actuales, con solo atletas masculinos compitiendo. El renacimiento de las Olimpiadas fue inspirado por la visión de Pierre de Coubertin de promover la paz internacional a través del deporte.",
          de: "Dreizehn Nationen nahmen an den ersten modernen Olympischen Spielen in Athen 1896 teil, mit 280 Athleten, die in 43 Veranstaltungen antraten. Die teilnehmenden Länder umfassten Griechenland, Deutschland, Frankreich, Großbritannien, Ungarn, Österreich, Dänemark und die Vereinigten Staaten. Die Spiele waren viel kleiner als die heutigen Olympischen Spiele, mit nur männlichen Athleten. Die Wiederbelebung der Olympischen Spiele wurde von Pierre de Coubertins Vision inspiriert, internationalen Frieden durch Sport zu fördern.",
          nl: "Dertien landen namen deel aan de eerste moderne Olympische Spelen in Athene in 1896, met 280 atleten die streden in 43 evenementen. De deelnemende landen omvatten Griekenland, Duitsland, Frankrijk, Groot-Brittannië, Hongarije, Oostenrijk, Denemarken en de Verenigde Staten. De Spelen waren veel kleiner dan de huidige Olympische Spelen, met alleen mannelijke atleten. De heropleving van de Olympische Spelen werd geïnspireerd door Pierre de Coubertins visie om internationale vrede te bevorderen door sport."
        }
      },
      {
        question: {
          en: "On April 6, 1909, which American explorer claimed to have reached the North Pole with Matthew Henson and four Inuits?",
          es: "El 6 de abril de 1909, ¿qué explorador estadounidense afirmó haber llegado al Polo Norte con Matthew Henson y cuatro inuits?",
          de: "Am 6. April 1909, welcher amerikanische Entdecker behauptete, mit Matthew Henson und vier Inuits den Nordpol erreicht zu haben?",
          nl: "Op 6 april 1909, welke Amerikaanse ontdekkingsreiziger beweerde de Noordpool te hebben bereikt met Matthew Henson en vier Inuits?"
        },
        options: [
          { en: "Richard Byrd", es: "Richard Byrd", de: "Richard Byrd", nl: "Richard Byrd" },
          { en: "Robert Peary", es: "Robert Peary", de: "Robert Peary", nl: "Robert Peary" },
          { en: "Roald Amundsen", es: "Roald Amundsen", de: "Roald Amundsen", nl: "Roald Amundsen" },
          { en: "Ernest Shackleton", es: "Ernest Shackleton", de: "Ernest Shackleton", nl: "Ernest Shackleton" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Robert Peary, along with Matthew Henson and four Inuit companions, claimed to have reached the North Pole on April 6, 1909. They traveled by ship to Ellesmere Island in 1908 and raced across hundreds of miles of ice in 1909. However, decades after Peary's death, navigational errors in his travel log surfaced, suggesting the expedition may have fallen short by a few miles. In 1911, the U.S. Congress formally recognized Peary's claim.",
          es: "Robert Peary, junto con Matthew Henson y cuatro compañeros inuits, afirmaron haber llegado al Polo Norte el 6 de abril de 1909. Viajaron en barco a la isla de Ellesmere en 1908 y corrieron a través de cientos de millas de hielo en 1909. Sin embargo, décadas después de la muerte de Peary, surgieron errores de navegación en su registro de viaje, sugiriendo que la expedición puede haber quedado corta por unas pocas millas. En 1911, el Congreso de Estados Unidos reconoció formalmente la afirmación de Peary.",
          de: "Robert Peary behauptete zusammen mit Matthew Henson und vier Inuit-Gefährten, am 6. April 1909 den Nordpol erreicht zu haben. Sie reisten 1908 per Schiff nach Ellesmere Island und rasten 1909 über Hunderte von Meilen Eis. Jahrzehnte nach Pearys Tod tauchten jedoch Navigationsfehler in seinem Reisetagebuch auf, die darauf hindeuten, dass die Expedition möglicherweise einige Meilen zu kurz gekommen ist. 1911 erkannte der US-Kongress Pearys Anspruch formell an.",
          nl: "Robert Peary beweerde samen met Matthew Henson en vier Inuit-metgezellen op 6 april 1909 de Noordpool te hebben bereikt. Ze reisden per schip naar Ellesmere Island in 1908 en raceten in 1909 over honderden mijlen ijs. Decennia na Pearys dood doken echter navigatiefouten op in zijn reislogboek, wat suggereert dat de expeditie mogelijk enkele mijlen te kort kwam. In 1911 erkende het Amerikaanse Congres Pearys claim formeel."
        }
      },
      {
        question: {
          en: "Which bloody Civil War battle began on April 6, 1862, in Tennessee near a church called Shiloh?",
          es: "¿Qué sangrienta batalla de la Guerra Civil comenzó el 6 de abril de 1862 en Tennessee cerca de una iglesia llamada Shiloh?",
          de: "Welche blutige Schlacht des Bürgerkriegs begann am 6. April 1862 in Tennessee in der Nähe einer Kirche namens Shiloh?",
          nl: "Welke bloedige burgeroorlogsslag begon op 6 april 1862 in Tennessee bij een kerk genaamd Shiloh?"
        },
        options: [
          { en: "Battle of Vicksburg", es: "Batalla de Vicksburg", de: "Schlacht von Vicksburg", nl: "Slag bij Vicksburg" },
          { en: "Battle of Antietam", es: "Batalla de Antietam", de: "Schlacht von Antietam", nl: "Slag bij Antietam" },
          { en: "Battle of Gettysburg", es: "Batalla de Gettysburg", de: "Schlacht von Gettysburg", nl: "Slag bij Gettysburg" },
          { en: "Battle of Shiloh", es: "Batalla de Shiloh", de: "Schlacht von Shiloh", nl: "Slag bij Shiloh" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Battle of Shiloh began on April 6, 1862, when Confederate forces under General Albert Sidney Johnston launched a surprise attack against Union troops led by General Ulysses S. Grant near Pittsburgh Landing in Tennessee. The battle was fought near a small church called Shiloh, meaning 'place of peace.' Union forces beat back the Confederates the next day. The Battle of Shiloh became one of the bloodiest engagements of the war, with over 23,000 casualties, shocking both North and South.",
          es: "La Batalla de Shiloh comenzó el 6 de abril de 1862, cuando las fuerzas confederadas bajo el General Albert Sidney Johnston lanzaron un ataque sorpresa contra las tropas de la Unión lideradas por el General Ulysses S. Grant cerca de Pittsburgh Landing en Tennessee. La batalla se libró cerca de una pequeña iglesia llamada Shiloh, que significa 'lugar de paz'. Las fuerzas de la Unión rechazaron a los confederados al día siguiente. La Batalla de Shiloh se convirtió en uno de los enfrentamientos más sangrientos de la guerra, con más de 23,000 bajas, impactando tanto al Norte como al Sur.",
          de: "Die Schlacht von Shiloh begann am 6. April 1862, als konföderierte Streitkräfte unter General Albert Sidney Johnston einen Überraschungsangriff gegen Unionstruppen unter General Ulysses S. Grant in der Nähe von Pittsburgh Landing in Tennessee starteten. Die Schlacht wurde in der Nähe einer kleinen Kirche namens Shiloh ausgetragen, was 'Ort des Friedens' bedeutet. Die Unionstruppen schlugen die Konföderierten am nächsten Tag zurück. Die Schlacht von Shiloh wurde zu einem der blutigsten Gefechte des Krieges mit über 23.000 Opfern, was sowohl den Norden als auch den Süden schockierte.",
          nl: "De Slag bij Shiloh begon op 6 april 1862, toen Zuidelijke strijdkrachten onder generaal Albert Sidney Johnston een verrassingsaanval lanceerden tegen Unie-troepen geleid door generaal Ulysses S. Grant bij Pittsburgh Landing in Tennessee. De slag werd uitgevochten bij een kleine kerk genaamd Shiloh, wat 'plaats van vrede' betekent. Unie-strijdkrachten dreven de Zuidelijken de volgende dag terug. De Slag bij Shiloh werd een van de bloedigste gevechten van de oorlog, met meer dan 23.000 slachtoffers, wat zowel het Noorden als het Zuiden schokte."
        }
      }
    ],

    // Day 7 - April 7th: World Health Organization Founded (1948) & Rwanda Genocide Begins (1994)
    day7: [
      {
        question: {
          en: "On April 7, 1948, which important international health organization was officially established?",
          es: "El 7 de abril de 1948, ¿qué importante organización internacional de salud fue establecida oficialmente?",
          de: "Am 7. April 1948 wurde welche wichtige internationale Gesundheitsorganisation offiziell gegründet?",
          nl: "Op 7 april 1948 werd welke belangrijke internationale gezondheidsorganisatie officieel opgericht?"
        },
        options: [
          { en: "World Health Organization (WHO)", es: "Organización Mundial de la Salud (OMS)", de: "Weltgesundheitsorganisation (WHO)", nl: "Wereldgezondheidsorganisatie (WHO)" },
          { en: "Doctors Without Borders", es: "Médicos Sin Fronteras", de: "Ärzte ohne Grenzen", nl: "Artsen Zonder Grenzen" },
          { en: "UNICEF", es: "UNICEF", de: "UNICEF", nl: "UNICEF" },
          { en: "Red Cross", es: "Cruz Roja", de: "Rotes Kreuz", nl: "Rode Kruis" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The World Health Organization (WHO) was established on April 7, 1948, when its constitution formally came into force after being ratified by the 26th member state. The WHO serves as the directing and coordinating authority in global public health within the United Nations system. Each year, WHO celebrates its establishment date as World Health Day, promoting health awareness worldwide. The organization formally began its work on September 1, 1948.",
          es: "La Organización Mundial de la Salud (OMS) fue establecida el 7 de abril de 1948, cuando su constitución entró formalmente en vigor después de ser ratificada por el 26º estado miembro. La OMS sirve como autoridad directora y coordinadora en salud pública global dentro del sistema de las Naciones Unidas. Cada año, la OMS celebra su fecha de establecimiento como el Día Mundial de la Salud, promoviendo la conciencia de salud en todo el mundo. La organización comenzó formalmente su trabajo el 1 de septiembre de 1948.",
          de: "Die Weltgesundheitsorganisation (WHO) wurde am 7. April 1948 gegründet, als ihre Verfassung nach der Ratifizierung durch den 26. Mitgliedstaat offiziell in Kraft trat. Die WHO dient als leitende und koordinierende Behörde für globale öffentliche Gesundheit innerhalb des Systems der Vereinten Nationen. Jedes Jahr feiert die WHO ihr Gründungsdatum als Weltgesundheitstag und fördert das Gesundheitsbewusstsein weltweit. Die Organisation nahm am 1. September 1948 offiziell ihre Arbeit auf.",
          nl: "De Wereldgezondheidsorganisatie (WHO) werd opgericht op 7 april 1948, toen haar grondwet formeel van kracht werd na ratificatie door de 26e lidstaat. De WHO dient als de leidende en coördinerende autoriteit op het gebied van mondiale volksgezondheid binnen het systeem van de Verenigde Naties. Elk jaar viert de WHO haar oprichtingsdatum als Wereldgezondheidsdag, waarbij gezondheidsvoorlichting wereldwijd wordt bevorderd. De organisatie begon formeel haar werk op 1 september 1948."
        }
      },
      {
        question: {
          en: "Why is April 7 observed annually as World Health Day?",
          es: "¿Por qué se observa anualmente el 7 de abril como el Día Mundial de la Salud?",
          de: "Warum wird der 7. April jährlich als Weltgesundheitstag begangen?",
          nl: "Waarom wordt 7 april jaarlijks waargenomen als Wereldgezondheidsdag?"
        },
        options: [
          { en: "It marks the establishment of WHO in 1948", es: "Marca el establecimiento de la OMS en 1948", de: "Es markiert die Gründung der WHO im Jahr 1948", nl: "Het markeert de oprichting van de WHO in 1948" },
          { en: "It commemorates the discovery of penicillin", es: "Conmemora el descubrimiento de la penicilina", de: "Es gedenkt der Entdeckung von Penicillin", nl: "Het herdenkt de ontdekking van penicilline" },
          { en: "It honors medical workers worldwide", es: "Honra a los trabajadores médicos en todo el mundo", de: "Es ehrt medizinische Fachkräfte weltweit", nl: "Het eert medische werkers wereldwijd" },
          { en: "It marks the end of a global pandemic", es: "Marca el fin de una pandemia global", de: "Es markiert das Ende einer globalen Pandemie", nl: "Het markeert het einde van een wereldwijde pandemie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "World Health Day is observed annually on April 7 to commemorate the establishment of the World Health Organization on that date in 1948. Each year, WHO uses this day to draw worldwide attention to a specific health topic of concern to people everywhere. The day provides an opportunity to mobilize action around health issues that affect the international community. WHO organizes commemorative events at its headquarters in New York and at United Nations offices around the world.",
          es: "El Día Mundial de la Salud se observa anualmente el 7 de abril para conmemorar el establecimiento de la Organización Mundial de la Salud en esa fecha en 1948. Cada año, la OMS utiliza este día para llamar la atención mundial sobre un tema específico de salud que preocupa a las personas en todas partes. El día brinda una oportunidad para movilizar acciones en torno a temas de salud que afectan a la comunidad internacional. La OMS organiza eventos conmemorativos en su sede en Nueva York y en oficinas de las Naciones Unidas en todo el mundo.",
          de: "Der Weltgesundheitstag wird jährlich am 7. April begangen, um an die Gründung der Weltgesundheitsorganisation an diesem Datum im Jahr 1948 zu erinnern. Jedes Jahr nutzt die WHO diesen Tag, um weltweite Aufmerksamkeit auf ein bestimmtes Gesundheitsthema zu lenken, das Menschen überall betrifft. Der Tag bietet die Gelegenheit, Maßnahmen zu Gesundheitsfragen zu mobilisieren, die die internationale Gemeinschaft betreffen. Die WHO organisiert Gedenkveranstaltungen in ihrem Hauptsitz in New York und in Büros der Vereinten Nationen auf der ganzen Welt.",
          nl: "De Wereldgezondheidsdag wordt jaarlijks waargenomen op 7 april ter herdenking van de oprichting van de Wereldgezondheidsorganisatie op die datum in 1948. Elk jaar gebruikt de WHO deze dag om wereldwijde aandacht te vestigen op een specifiek gezondheidsonderwerp dat mensen overal aangaat. De dag biedt een kans om actie te mobiliseren rond gezondheidskwesties die de internationale gemeenschap raken. De WHO organiseert herdenkingsevenementen op haar hoofdkantoor in New York en bij kantoren van de Verenigde Naties over de hele wereld."
        }
      },
      {
        question: {
          en: "On April 7, 1994, which tragic event began in Rwanda that lasted approximately 100 days?",
          es: "El 7 de abril de 1994, ¿qué evento trágico comenzó en Ruanda que duró aproximadamente 100 días?",
          de: "Am 7. April 1994 begann welches tragische Ereignis in Ruanda, das etwa 100 Tage dauerte?",
          nl: "Op 7 april 1994 begon welke tragische gebeurtenis in Rwanda die ongeveer 100 dagen duurde?"
        },
        options: [
          { en: "Rwandan civil war", es: "Guerra civil de Ruanda", de: "Ruandischer Bürgerkrieg", nl: "Rwandese burgeroorlog" },
          { en: "Famine in East Africa", es: "Hambruna en África Oriental", de: "Hungersnot in Ostafrika", nl: "Hongersnood in Oost-Afrika" },
          { en: "Rwanda genocide against the Tutsi", es: "Genocidio de Ruanda contra los tutsis", de: "Völkermord in Ruanda an den Tutsi", nl: "Genocide in Rwanda tegen de Tutsi" },
          { en: "Constitutional referendum", es: "Referéndum constitucional", de: "Verfassungsreferendum", nl: "Constitutioneel referendum" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 7, 1994, the Rwanda genocide began, lasting approximately 100 days until mid-July. The genocide was ignited by the assassination of President Juvénal Habyarimana on April 6, 1994. An estimated 500,000 to 1 million Tutsi and moderate Hutus were systematically killed by Hutu militias. The United Nations General Assembly declared April 7 as the International Day of Reflection on the 1994 Genocide Against the Tutsi in Rwanda to commemorate this tragic event.",
          es: "El 7 de abril de 1994 comenzó el genocidio de Ruanda, que duró aproximadamente 100 días hasta mediados de julio. El genocidio fue provocado por el asesinato del presidente Juvénal Habyarimana el 6 de abril de 1994. Se estima que entre 500,000 y 1 millón de tutsis y hutus moderados fueron asesinados sistemáticamente por milicias hutus. La Asamblea General de las Naciones Unidas declaró el 7 de abril como Día Internacional de Reflexión sobre el Genocidio de 1994 contra los Tutsis en Ruanda para conmemorar este trágico evento.",
          de: "Am 7. April 1994 begann der Völkermord in Ruanda, der etwa 100 Tage bis Mitte Juli dauerte. Der Völkermord wurde durch die Ermordung von Präsident Juvénal Habyarimana am 6. April 1994 ausgelöst. Schätzungsweise 500.000 bis 1 Million Tutsi und gemäßigte Hutus wurden systematisch von Hutu-Milizen getötet. Die Generalversammlung der Vereinten Nationen erklärte den 7. April zum Internationalen Tag des Gedenkens an den Völkermord von 1994 an den Tutsi in Ruanda, um dieses tragische Ereignis zu gedenken.",
          nl: "Op 7 april 1994 begon de genocide in Rwanda, die ongeveer 100 dagen duurde tot half juli. De genocide werd veroorzaakt door de moord op president Juvénal Habyarimana op 6 april 1994. Naar schatting 500.000 tot 1 miljoen Tutsi en gematigde Hutu's werden systematisch gedood door Hutu-milities. De Algemene Vergadering van de Verenigde Naties verklaarde 7 april tot Internationale Dag van Bezinning over de Genocide van 1994 tegen de Tutsi in Rwanda om deze tragische gebeurtenis te herdenken."
        }
      },
      {
        question: {
          en: "Approximately how many people were killed during the Rwanda genocide in 1994?",
          es: "¿Aproximadamente cuántas personas fueron asesinadas durante el genocidio de Ruanda en 1994?",
          de: "Ungefähr wie viele Menschen wurden während des Völkermords in Ruanda 1994 getötet?",
          nl: "Ongeveer hoeveel mensen werden gedood tijdens de genocide in Rwanda in 1994?"
        },
        options: [
          { en: "100,000 to 200,000", es: "100,000 a 200,000", de: "100.000 bis 200.000", nl: "100.000 tot 200.000" },
          { en: "50,000 to 100,000", es: "50,000 a 100,000", de: "50.000 bis 100.000", nl: "50.000 tot 100.000" },
          { en: "500,000 to 1 million", es: "500,000 a 1 millón", de: "500.000 bis 1 Million", nl: "500.000 tot 1 miljoen" },
          { en: "2 to 3 million", es: "2 a 3 millones", de: "2 bis 3 Millionen", nl: "2 tot 3 miljoen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "An estimated 500,000 to 1 million people were killed during the Rwanda genocide in 1994. The victims were primarily members of the Tutsi ethnic group, along with some moderate Hutus and Twa who opposed the genocide. The systematic killings were carried out by Hutu militias over approximately 100 days. The international community was criticized for failing to intervene to stop the genocide, which remains one of the darkest chapters in modern African history.",
          es: "Se estima que entre 500,000 y 1 millón de personas fueron asesinadas durante el genocidio de Ruanda en 1994. Las víctimas fueron principalmente miembros del grupo étnico tutsi, junto con algunos hutus moderados y twa que se opusieron al genocidio. Los asesinatos sistemáticos fueron llevados a cabo por milicias hutus durante aproximadamente 100 días. La comunidad internacional fue criticada por no intervenir para detener el genocidio, que sigue siendo uno de los capítulos más oscuros de la historia africana moderna.",
          de: "Schätzungsweise 500.000 bis 1 Million Menschen wurden während des Völkermords in Ruanda 1994 getötet. Die Opfer waren hauptsächlich Angehörige der ethnischen Gruppe der Tutsi sowie einige gemäßigte Hutus und Twa, die sich dem Völkermord widersetzten. Die systematischen Tötungen wurden von Hutu-Milizen über etwa 100 Tage durchgeführt. Die internationale Gemeinschaft wurde dafür kritisiert, dass sie nicht eingriff, um den Völkermord zu stoppen, der eines der dunkelsten Kapitel der modernen afrikanischen Geschichte bleibt.",
          nl: "Naar schatting werden 500.000 tot 1 miljoen mensen gedood tijdens de genocide in Rwanda in 1994. De slachtoffers waren voornamelijk leden van de Tutsi-etnische groep, samen met enkele gematigde Hutu's en Twa die zich tegen de genocide verzetten. De systematische moorden werden uitgevoerd door Hutu-milities gedurende ongeveer 100 dagen. De internationale gemeenschap werd bekritiseerd voor het falen om in te grijpen om de genocide te stoppen, die een van de donkerste hoofdstukken in de moderne Afrikaanse geschiedenis blijft."
        }
      },
      {
        question: {
          en: "What event on April 6, 1994, ignited the Rwanda genocide the following day?",
          es: "¿Qué evento el 6 de abril de 1994 provocó el genocidio de Ruanda al día siguiente?",
          de: "Welches Ereignis am 6. April 1994 löste den Völkermord in Ruanda am folgenden Tag aus?",
          nl: "Welke gebeurtenis op 6 april 1994 veroorzaakte de genocide in Rwanda de volgende dag?"
        },
        options: [
          { en: "Assassination of President Habyarimana", es: "Asesinato del presidente Habyarimana", de: "Ermordung von Präsident Habyarimana", nl: "Moord op president Habyarimana" },
          { en: "Military coup d'état", es: "Golpe de estado militar", de: "Militärputsch", nl: "Militaire staatsgreep" },
          { en: "UN peacekeepers withdrawal", es: "Retirada de cascos azules de la ONU", de: "Abzug der UN-Friedenstruppen", nl: "Terugtrekking van VN-vredestroepen" },
          { en: "Border conflict with Uganda", es: "Conflicto fronterizo con Uganda", de: "Grenzkonflikt mit Uganda", nl: "Grensconflict met Oeganda" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Rwanda genocide was ignited by the assassination of President Juvénal Habyarimana on April 6, 1994, when his plane was shot down near Kigali airport. The president's death triggered systematic violence against the Tutsi population beginning April 7. Within hours of the assassination, Hutu extremists began setting up roadblocks and killing Tutsis and moderate Hutus. The genocide continued for approximately 100 days until the Rwandan Patriotic Front gained control of the country.",
          es: "El genocidio de Ruanda fue provocado por el asesinato del presidente Juvénal Habyarimana el 6 de abril de 1994, cuando su avión fue derribado cerca del aeropuerto de Kigali. La muerte del presidente desencadenó violencia sistemática contra la población tutsi a partir del 7 de abril. Horas después del asesinato, extremistas hutus comenzaron a establecer controles y a matar tutsis y hutus moderados. El genocidio continuó durante aproximadamente 100 días hasta que el Frente Patriótico Ruandés ganó el control del país.",
          de: "Der Völkermord in Ruanda wurde durch die Ermordung von Präsident Juvénal Habyarimana am 6. April 1994 ausgelöst, als sein Flugzeug in der Nähe des Flughafens von Kigali abgeschossen wurde. Der Tod des Präsidenten löste ab dem 7. April systematische Gewalt gegen die Tutsi-Bevölkerung aus. Innerhalb von Stunden nach dem Attentat begannen Hutu-Extremisten, Straßensperren zu errichten und Tutsis und gemäßigte Hutus zu töten. Der Völkermord dauerte etwa 100 Tage, bis die Ruandische Patriotische Front die Kontrolle über das Land gewann.",
          nl: "De genocide in Rwanda werd veroorzaakt door de moord op president Juvénal Habyarimana op 6 april 1994, toen zijn vliegtuig werd neergeschoten bij het vliegveld van Kigali. De dood van de president veroorzaakte systematisch geweld tegen de Tutsi-bevolking vanaf 7 april. Binnen enkele uren na de moord begonnen Hutu-extremisten wegversperringen op te zetten en Tutsi's en gematigde Hutu's te doden. De genocide duurde ongeveer 100 dagen totdat het Rwandese Patriottisch Front de controle over het land kreeg."
        }
      }
    ],

    // Day 8 - April 8th: Hank Aaron Breaks Home Run Record (1974)
    day8: [
      {
        question: {
          en: "On April 8, 1974, Hank Aaron broke whose legendary home run record by hitting his 715th career homer?",
          es: "El 8 de abril de 1974, Hank Aaron rompió el legendario récord de jonrones de quién al batear su jonrón número 715 de su carrera?",
          de: "Am 8. April 1974 brach Hank Aaron wessen legendären Homerun-Rekord mit seinem 715. Karriere-Homerun?",
          nl: "Op 8 april 1974 brak Hank Aaron wiens legendarische homerun-record door zijn 715e carrière-homerun te slaan?"
        },
        options: [
          { en: "Babe Ruth", es: "Babe Ruth", de: "Babe Ruth", nl: "Babe Ruth" },
          { en: "Willie Mays", es: "Willie Mays", de: "Willie Mays", nl: "Willie Mays" },
          { en: "Mickey Mantle", es: "Mickey Mantle", de: "Mickey Mantle", nl: "Mickey Mantle" },
          { en: "Lou Gehrig", es: "Lou Gehrig", de: "Lou Gehrig", nl: "Lou Gehrig" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 8, 1974, Hank Aaron of the Atlanta Braves hit his 715th career home run, breaking Babe Ruth's legendary record of 714 homers. Aaron hit a 1-0 pitch from Dodgers pitcher Al Downing over the left-centerfield wall in the fourth inning at Atlanta-Fulton County Stadium. At precisely 9:07 PM local time, before a sellout crowd of 53,775, he achieved what many considered an unbreakable record. Aaron retired in 1976 with 755 career home runs.",
          es: "El 8 de abril de 1974, Hank Aaron de los Bravos de Atlanta bateó su jonrón número 715 de su carrera, rompiendo el legendario récord de 714 jonrones de Babe Ruth. Aaron bateó un lanzamiento de 1-0 del pitcher de los Dodgers Al Downing sobre la pared del jardín central izquierdo en la cuarta entrada en el Estadio Atlanta-Fulton County. A las 9:07 PM hora local exactamente, ante una multitud de 53,775 personas, logró lo que muchos consideraban un récord inquebrantable. Aaron se retiró en 1976 con 755 jonrones de carrera.",
          de: "Am 8. April 1974 schlug Hank Aaron von den Atlanta Braves seinen 715. Karriere-Homerun und brach damit Babe Ruths legendären Rekord von 714 Homeruns. Aaron schlug einen 1-0-Pitch von Dodgers-Pitcher Al Downing über die linke Mittelfeld-Mauer im vierten Inning im Atlanta-Fulton County Stadium. Um genau 21:07 Uhr Ortszeit, vor ausverkauftem Publikum von 53.775 Zuschauern, erreichte er, was viele für einen unübertreffbaren Rekord hielten. Aaron ging 1976 mit 755 Karriere-Homeruns in den Ruhestand.",
          nl: "Op 8 april 1974 sloeg Hank Aaron van de Atlanta Braves zijn 715e carrière-homerun en brak daarmee Babe Ruth's legendarische record van 714 homeruns. Aaron sloeg een 1-0 worp van Dodgers-werper Al Downing over de muur van het linker middenveld in de vierde inning in het Atlanta-Fulton County Stadium. Om precies 21:07 uur lokale tijd, voor een uitverkocht publiek van 53.775 toeschouwers, bereikte hij wat velen als een onbreekbaar record beschouwden. Aaron ging met pensioen in 1976 met 755 carrière-homeruns."
        }
      },
      {
        question: {
          en: "Where did Hank Aaron hit his historic 715th home run in 1974?",
          es: "¿Dónde bateó Hank Aaron su histórico jonrón número 715 en 1974?",
          de: "Wo schlug Hank Aaron seinen historischen 715. Homerun 1974?",
          nl: "Waar sloeg Hank Aaron zijn historische 715e homerun in 1974?"
        },
        options: [
          { en: "Fenway Park", es: "Fenway Park", de: "Fenway Park", nl: "Fenway Park" },
          { en: "Yankee Stadium", es: "Yankee Stadium", de: "Yankee Stadium", nl: "Yankee Stadium" },
          { en: "Atlanta-Fulton County Stadium", es: "Estadio Atlanta-Fulton County", de: "Atlanta-Fulton County Stadium", nl: "Atlanta-Fulton County Stadium" },
          { en: "Dodger Stadium", es: "Dodger Stadium", de: "Dodger Stadium", nl: "Dodger Stadium" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Hank Aaron hit his historic 715th home run at Atlanta-Fulton County Stadium on April 8, 1974, before a sellout crowd of 53,775 fans. The home run came in the fourth inning off Los Angeles Dodgers pitcher Al Downing. Aaron's mother Estella was one of the first people he greeted at home plate after circling the bases. The achievement was made even more remarkable because Aaron accomplished it despite receiving hate mail and death threats from those who didn't want to see Ruth's record broken.",
          es: "Hank Aaron bateó su histórico jonrón número 715 en el Estadio Atlanta-Fulton County el 8 de abril de 1974, ante una multitud de 53,775 fanáticos. El jonrón llegó en la cuarta entrada contra el lanzador de los Dodgers de Los Ángeles Al Downing. La madre de Aaron, Estella, fue una de las primeras personas que saludó en el plato después de dar la vuelta a las bases. El logro fue aún más notable porque Aaron lo logró a pesar de recibir correo de odio y amenazas de muerte de quienes no querían ver que se rompiera el récord de Ruth.",
          de: "Hank Aaron schlug seinen historischen 715. Homerun im Atlanta-Fulton County Stadium am 8. April 1974 vor ausverkauftem Publikum von 53.775 Fans. Der Homerun kam im vierten Inning gegen Los Angeles Dodgers Pitcher Al Downing. Aarons Mutter Estella war eine der ersten Personen, die er am Home Plate begrüßte, nachdem er die Bases umrundet hatte. Die Leistung war noch bemerkenswerter, weil Aaron sie trotz Hass-Mails und Morddrohungen von denen vollbrachte, die nicht wollten, dass Ruths Rekord gebrochen wird.",
          nl: "Hank Aaron sloeg zijn historische 715e homerun in het Atlanta-Fulton County Stadium op 8 april 1974, voor een uitverkocht publiek van 53.775 fans. De homerun kwam in de vierde inning tegen Los Angeles Dodgers werper Al Downing. Aarons moeder Estella was een van de eerste personen die hij begroette bij de thuisplaat na het rondlopen van de honken. De prestatie was nog opmerkelijker omdat Aaron dit bereikte ondanks het ontvangen van haatmail en doodsbedreigingen van degenen die niet wilden dat Ruth's record werd gebroken."
        }
      },
      {
        question: {
          en: "How many home runs did Hank Aaron finish his career with when he retired in 1976?",
          es: "¿Con cuántos jonrones terminó Hank Aaron su carrera cuando se retiró en 1976?",
          de: "Mit wie vielen Homeruns beendete Hank Aaron seine Karriere, als er 1976 in den Ruhestand ging?",
          nl: "Met hoeveel homeruns eindigde Hank Aaron zijn carrière toen hij met pensioen ging in 1976?"
        },
        options: [
          { en: "660 home runs", es: "660 jonrones", de: "660 Homeruns", nl: "660 homeruns" },
          { en: "800 home runs", es: "800 jonrones", de: "800 Homeruns", nl: "800 homeruns" },
          { en: "755 home runs", es: "755 jonrones", de: "755 Homeruns", nl: "755 homeruns" },
          { en: "714 home runs", es: "714 jonrones", de: "714 Homeruns", nl: "714 homeruns" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Hank Aaron retired in 1976 with 755 career home runs, a record that stood for 33 years until it was broken by Barry Bonds in 2007. Aaron's achievement was remarkable not only for its longevity but also for the consistency he displayed throughout his career. He hit 30 or more home runs in 15 different seasons. Aaron's record-breaking moment came amid significant racial tension and death threats, making his accomplishment even more impressive and historically significant.",
          es: "Hank Aaron se retiró en 1976 con 755 jonrones de carrera, un récord que se mantuvo durante 33 años hasta que fue roto por Barry Bonds en 2007. El logro de Aaron fue notable no solo por su longevidad sino también por la consistencia que mostró a lo largo de su carrera. Bateó 30 o más jonrones en 15 temporadas diferentes. El momento récord de Aaron llegó en medio de una tensión racial significativa y amenazas de muerte, haciendo que su logro fuera aún más impresionante e históricamente significativo.",
          de: "Hank Aaron ging 1976 mit 755 Karriere-Homeruns in den Ruhestand, ein Rekord, der 33 Jahre lang hielt, bis er 2007 von Barry Bonds gebrochen wurde. Aarons Leistung war bemerkenswert nicht nur wegen ihrer Langlebigkeit, sondern auch wegen der Beständigkeit, die er während seiner gesamten Karriere zeigte. Er schlug in 15 verschiedenen Saisons 30 oder mehr Homeruns. Aarons rekordverdächtiger Moment kam inmitten erheblicher rassischer Spannungen und Morddrohungen, was seine Leistung noch beeindruckender und historisch bedeutsamer machte.",
          nl: "Hank Aaron ging met pensioen in 1976 met 755 carrière-homeruns, een record dat 33 jaar standhield totdat het in 2007 werd gebroken door Barry Bonds. Aarons prestatie was opmerkelijk niet alleen vanwege de langdurigheid maar ook vanwege de consistentie die hij gedurende zijn carrière toonde. Hij sloeg in 15 verschillende seizoenen 30 of meer homeruns. Aarons recordbrekende moment kwam te midden van aanzienlijke raciale spanning en doodsbedreigingen, waardoor zijn prestatie nog indrukwekkender en historisch belangrijker werd."
        }
      },
      {
        question: {
          en: "Four days before breaking the record, what did Hank Aaron accomplish on Opening Day 1974?",
          es: "Cuatro días antes de romper el récord, ¿qué logró Hank Aaron en el Día de Apertura de 1974?",
          de: "Was erreichte Hank Aaron vier Tage vor dem Rekordbruch am Eröffnungstag 1974?",
          nl: "Wat bereikte Hank Aaron vier dagen voor het breken van het record op de openingsdag van 1974?"
        },
        options: [
          { en: "He announced his retirement plans", es: "Anunció sus planes de retiro", de: "Er kündigte seine Ruhestandspläne an", nl: "Hij kondigde zijn pensioenplannen aan" },
          { en: "He hit two home runs in one game", es: "Bateó dos jonrones en un juego", de: "Er schlug zwei Homeruns in einem Spiel", nl: "Hij sloeg twee homeruns in één wedstrijd" },
          { en: "He tied Babe Ruth's record with homer #714", es: "Empató el récord de Babe Ruth con el jonrón #714", de: "Er stellte Babe Ruths Rekord mit Homerun #714 ein", nl: "Hij evenaarde Babe Ruth's record met homerun #714" },
          { en: "He received a Presidential award", es: "Recibió un premio presidencial", de: "Er erhielt eine Präsidentenauszeichnung", nl: "Hij ontving een presidentiële onderscheiding" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On Opening Day 1974, four days before breaking Babe Ruth's record, Hank Aaron tied the record by hitting his 714th career home run in Cincinnati. This created tremendous anticipation for his next at-bat, which would come before the home crowd in Atlanta. The Braves management wanted Aaron to break the record at home, creating controversy about whether he should sit out the opening series. Aaron hit the record-breaking 715th homer in his first at-bat of the home opener.",
          es: "En el Día de Apertura de 1974, cuatro días antes de romper el récord de Babe Ruth, Hank Aaron empató el récord al batear su jonrón número 714 de su carrera en Cincinnati. Esto creó una tremenda anticipación para su siguiente turno al bate, que llegaría ante la multitud local en Atlanta. La gerencia de los Bravos quería que Aaron rompiera el récord en casa, creando controversia sobre si debería no jugar en la serie de apertura. Aaron bateó el jonrón récord número 715 en su primer turno al bate del partido inaugural en casa.",
          de: "Am Eröffnungstag 1974, vier Tage vor dem Brechen von Babe Ruths Rekord, stellte Hank Aaron den Rekord ein, indem er seinen 714. Karriere-Homerun in Cincinnati schlug. Dies schuf enorme Vorfreude auf seinen nächsten Schlagversuch, der vor der Heimatmenge in Atlanta stattfinden würde. Das Management der Braves wollte, dass Aaron den Rekord zu Hause bricht, was Kontroversen darüber auslöste, ob er die Eröffnungsserie aussetzen sollte. Aaron schlug den rekordverdächtigen 715. Homerun bei seinem ersten Schlagversuch des Heimspieleröffnungsspiels.",
          nl: "Op de openingsdag van 1974, vier dagen voor het breken van Babe Ruth's record, evenaarde Hank Aaron het record door zijn 714e carrière-homerun te slaan in Cincinnati. Dit zorgde voor enorme verwachting voor zijn volgende slagbeurt, die voor het thuispubliek in Atlanta zou komen. Het management van de Braves wilde dat Aaron het record thuis zou breken, wat controverse veroorzaakte over de vraag of hij de openingsserie zou moeten overslaan. Aaron sloeg de recordbrekende 715e homerun in zijn eerste slagbeurt van de thuisopener."
        }
      },
      {
        question: {
          en: "On April 8, Buddhists celebrate the commemoration of whose birth according to tradition?",
          es: "El 8 de abril, los budistas celebran la conmemoración del nacimiento de quién según la tradición?",
          de: "Am 8. April feiern Buddhisten die Gedenkfeier wessen Geburt gemäß der Tradition?",
          nl: "Op 8 april vieren boeddhisten de herdenking van wiens geboorte volgens de traditie?"
        },
        options: [
          { en: "Confucius", es: "Confucio", de: "Konfuzius", nl: "Confucius" },
          { en: "Lao Tzu", es: "Lao Tse", de: "Laozi", nl: "Lao Tzu" },
          { en: "Dalai Lama", es: "Dalai Lama", de: "Dalai Lama", nl: "Dalai Lama" },
          { en: "Siddhartha Gautama (Buddha)", es: "Siddhartha Gautama (Buda)", de: "Siddhartha Gautama (Buddha)", nl: "Siddhartha Gautama (Boeddha)" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 8, Buddhists celebrate the commemoration of the birth of Gautama Buddha, the founder of Buddhism. According to tradition, Siddhartha Gautama was born on April 8, 560 BCE, as Prince Siddhartha in what is now modern Nepal. In the Japanese tradition of the Buddhist Churches of America, this day is called Hanamatsuri. Siddhartha reached enlightenment and became a Buddha at age 35, founding one of the world's major religions that today has hundreds of millions of followers.",
          es: "El 8 de abril, los budistas celebran la conmemoración del nacimiento de Gautama Buda, el fundador del budismo. Según la tradición, Siddhartha Gautama nació el 8 de abril de 560 a.C., como el príncipe Siddhartha en lo que ahora es el Nepal moderno. En la tradición japonesa de las Iglesias Budistas de América, este día se llama Hanamatsuri. Siddhartha alcanzó la iluminación y se convirtió en Buda a los 35 años, fundando una de las principales religiones del mundo que hoy tiene cientos de millones de seguidores.",
          de: "Am 8. April feiern Buddhisten die Gedenkfeier der Geburt von Gautama Buddha, dem Begründer des Buddhismus. Der Tradition nach wurde Siddhartha Gautama am 8. April 560 v. Chr. als Prinz Siddhartha in dem geboren, was heute das moderne Nepal ist. In der japanischen Tradition der Buddhist Churches of America wird dieser Tag Hanamatsuri genannt. Siddhartha erreichte die Erleuchtung und wurde im Alter von 35 Jahren ein Buddha und gründete eine der großen Weltreligionen, die heute Hunderte Millionen Anhänger hat.",
          nl: "Op 8 april vieren boeddhisten de herdenking van de geboorte van Gautama Boeddha, de stichter van het boeddhisme. Volgens de traditie werd Siddhartha Gautama geboren op 8 april 560 v.Chr., als prins Siddhartha in wat nu het moderne Nepal is. In de Japanse traditie van de Boeddhistische Kerken van Amerika wordt deze dag Hanamatsuri genoemd. Siddhartha bereikte verlichting en werd een Boeddha op 35-jarige leeftijd, en stichtte een van 's werelds grote religies die vandaag honderden miljoenen volgers heeft."
        }
      }
    ],
    day9: [
      {
        question: {
          en: "On April 9, 1865, which Confederate general surrendered to Ulysses S. Grant at Appomattox Court House, effectively ending the American Civil War?",
          es: "El 9 de abril de 1865, ¿qué general confederado se rindió a Ulysses S. Grant en Appomattox Court House, poniendo fin efectivamente a la Guerra Civil Americana?",
          de: "Am 9. April 1865 kapitulierte welcher konföderierte General vor Ulysses S. Grant in Appomattox Court House und beendete damit faktisch den Amerikanischen Bürgerkrieg?",
          nl: "Op 9 april 1865 gaf welke Zuidelijke generaal zich over aan Ulysses S. Grant in Appomattox Court House, wat feitelijk een einde maakte aan de Amerikaanse Burgeroorlog?"
        },
        options: [
          { en: "James Longstreet", es: "James Longstreet", de: "James Longstreet", nl: "James Longstreet" },
          { en: "Jefferson Davis", es: "Jefferson Davis", de: "Jefferson Davis", nl: "Jefferson Davis" },
          { en: "Stonewall Jackson", es: "Stonewall Jackson", de: "Stonewall Jackson", nl: "Stonewall Jackson" },
          { en: "Robert E. Lee", es: "Robert E. Lee", de: "Robert E. Lee", nl: "Robert E. Lee" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 9, 1865, Confederate General Robert E. Lee surrendered his 28,000 troops to Union General Ulysses S. Grant at Appomattox Court House, Virginia. The two generals met in the front parlor of the Wilmer McLean home at one o'clock that afternoon. Grant arrived in his mud-splattered field uniform while Lee appeared in full dress attire with sash and sword. The generous surrender terms allowed Confederate officers to keep their sidearms and horses, and all troops could return home without being disturbed by Union authorities as long as they observed their paroles.",
          es: "El 9 de abril de 1865, el general confederado Robert E. Lee rindió sus 28,000 tropas al general de la Unión Ulysses S. Grant en Appomattox Court House, Virginia. Los dos generales se reunieron en la sala principal de la casa de Wilmer McLean a la una de la tarde. Grant llegó con su uniforme de campo salpicado de barro mientras que Lee apareció con uniforme de gala completo con fajín y espada. Los generosos términos de rendición permitieron a los oficiales confederados conservar sus armas y caballos, y todas las tropas podían regresar a casa sin ser molestadas por las autoridades de la Unión siempre que observaran sus libertades condicionales.",
          de: "Am 9. April 1865 übergab der konföderierte General Robert E. Lee seine 28.000 Soldaten dem Unionsgeneral Ulysses S. Grant in Appomattox Court House, Virginia. Die beiden Generäle trafen sich um ein Uhr nachmittags im vorderen Salon des Hauses von Wilmer McLean. Grant kam in seiner schlammbespritzte Felduniform, während Lee in voller Galauniform mit Schärpe und Schwert erschien. Die großzügigen Kapitulationsbedingungen erlaubten es den konföderierten Offizieren, ihre Seitenwaffen und Pferde zu behalten, und alle Truppen konnten nach Hause zurückkehren, ohne von den Unionsbehörden behelligt zu werden, solange sie ihre Bewährungsauflagen beachteten.",
          nl: "Op 9 april 1865 gaf de Zuidelijke generaal Robert E. Lee zijn 28.000 troepen over aan de Unie-generaal Ulysses S. Grant in Appomattox Court House, Virginia. De twee generaals ontmoetten elkaar om één uur 's middags in de voorkamer van het huis van Wilmer McLean. Grant arriveerde in zijn met modder bespatte velduniform terwijl Lee verscheen in vol galakostuum met sjerp en zwaard. De genereuze overgavevoorwaarden stonden de Zuidelijke officieren toe hun zijwapens en paarden te behouden, en alle troepen konden naar huis terugkeren zonder te worden lastiggevallen door de Unie-autoriteiten zolang ze hun voorwaardelijke vrijlating naleefden."
        }
      },
      {
        question: {
          en: "What happened to the Confederate capital of Richmond just days before Lee's surrender at Appomattox on April 9, 1865?",
          es: "¿Qué le sucedió a la capital confederada de Richmond pocos días antes de la rendición de Lee en Appomattox el 9 de abril de 1865?",
          de: "Was geschah mit der konföderierten Hauptstadt Richmond nur wenige Tage vor Lees Kapitulation in Appomattox am 9. April 1865?",
          nl: "Wat gebeurde er met de Zuidelijke hoofdstad Richmond enkele dagen voor Lee's overgave in Appomattox op 9 april 1865?"
        },
        options: [
          { en: "It remained under Confederate control", es: "Permaneció bajo control confederado", de: "Sie blieb unter konföderierter Kontrolle", nl: "Het bleef onder Zuidelijke controle" },
          { en: "It surrendered peacefully", es: "Se rindió pacíficamente", de: "Sie kapitulierte friedlich", nl: "Het gaf zich vreedzaam over" },
          { en: "It fell to Union forces on April 2", es: "Cayó ante las fuerzas de la Unión el 2 de abril", de: "Sie fiel am 2. April an die Unionstruppen", nl: "Het viel op 2 april in handen van de Unie-strijdkrachten" },
          { en: "It was burned by its own citizens", es: "Fue quemada por sus propios ciudadanos", de: "Sie wurde von ihren eigenen Bürgern niedergebrannt", nl: "Het werd verbrand door zijn eigen burgers" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Richmond, the Confederate capital, fell to Union forces on April 2, 1865, just seven days before Lee's surrender at Appomattox. After 10 months of siege at Petersburg and Richmond starting in June 1864, Union forces led by General Phillip Sheridan captured a critical transportation link at Five Forks on April 1. Confederate President Jefferson Davis and other government officials fled the city. The fall of Richmond marked the beginning of the end for the Confederacy, as Lee's army was forced to retreat westward, eventually leading to the final surrender.",
          es: "Richmond, la capital confederada, cayó ante las fuerzas de la Unión el 2 de abril de 1865, solo siete días antes de la rendición de Lee en Appomattox. Después de 10 meses de asedio en Petersburg y Richmond a partir de junio de 1864, las fuerzas de la Unión lideradas por el general Phillip Sheridan capturaron un enlace de transporte crítico en Five Forks el 1 de abril. El presidente confederado Jefferson Davis y otros funcionarios del gobierno abandonaron la ciudad. La caída de Richmond marcó el comienzo del fin para la Confederación, ya que el ejército de Lee se vio obligado a retirarse hacia el oeste, lo que finalmente condujo a la rendición final.",
          de: "Richmond, die konföderierte Hauptstadt, fiel am 2. April 1865 an die Unionstruppen, nur sieben Tage vor Lees Kapitulation in Appomattox. Nach 10-monatiger Belagerung von Petersburg und Richmond ab Juni 1864 eroberten die von General Phillip Sheridan angeführten Unionstruppen am 1. April eine kritische Verkehrsverbindung bei Five Forks. Der konföderierte Präsident Jefferson Davis und andere Regierungsbeamte flohen aus der Stadt. Der Fall von Richmond markierte den Anfang vom Ende für die Konföderation, da Lees Armee gezwungen war, sich nach Westen zurückzuziehen, was schließlich zur endgültigen Kapitulation führte.",
          nl: "Richmond, de Zuidelijke hoofdstad, viel op 2 april 1865 in handen van de Unie-strijdkrachten, slechts zeven dagen voor Lee's overgave in Appomattox. Na 10 maanden beleg van Petersburg en Richmond vanaf juni 1864, veroverden de Unie-strijdkrachten onder leiding van generaal Phillip Sheridan op 1 april een cruciale transportverbinding bij Five Forks. De Zuidelijke president Jefferson Davis en andere regeringsfunctionarissen vluchtten uit de stad. De val van Richmond markeerde het begin van het einde voor de Confederatie, aangezien Lee's leger gedwongen was naar het westen terug te trekken, wat uiteindelijk leidde tot de definitieve overgave."
        }
      },
      {
        question: {
          en: "On April 9, 1940, Nazi Germany launched which operation that invaded both Denmark and Norway?",
          es: "El 9 de abril de 1940, la Alemania Nazi lanzó qué operación que invadió tanto Dinamarca como Noruega?",
          de: "Am 9. April 1940 startete Nazi-Deutschland welche Operation, die sowohl Dänemark als auch Norwegen überfiel?",
          nl: "Op 9 april 1940 lanceerde nazi-Duitsland welke operatie die zowel Denemarken als Noorwegen binnenviel?"
        },
        options: [
          { en: "Operation Market Garden", es: "Operación Market Garden", de: "Operation Market Garden", nl: "Operatie Market Garden" },
          { en: "Operation Barbarossa", es: "Operación Barbarroja", de: "Unternehmen Barbarossa", nl: "Operatie Barbarossa" },
          { en: "Operation Sea Lion", es: "Operación León Marino", de: "Unternehmen Seelöwe", nl: "Operatie Zeeleeuw" },
          { en: "Operation Weserübung", es: "Operación Weserübung", de: "Unternehmen Weserübung", nl: "Operatie Weserübung" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 9, 1940, Nazi Germany launched Operation Weserübung, simultaneously invading Denmark and Norway. Denmark surrendered within six hours, while Norway resisted longer, with its mainland army capitulating on June 10, 1940. German warships quickly occupied major Norwegian ports including Oslo, Bergen, Narvik, Trondheim, Kristiansand, and Stavanger. The invasion was strategically important to secure naval bases against Britain and to protect crucial iron-ore shipments from neutral Sweden through the Norwegian port of Narvik.",
          es: "El 9 de abril de 1940, la Alemania Nazi lanzó la Operación Weserübung, invadiendo simultáneamente Dinamarca y Noruega. Dinamarca se rindió en seis horas, mientras que Noruega resistió más tiempo, y su ejército continental capituló el 10 de junio de 1940. Los buques de guerra alemanes ocuparon rápidamente los principales puertos noruegos, incluidos Oslo, Bergen, Narvik, Trondheim, Kristiansand y Stavanger. La invasión fue estratégicamente importante para asegurar bases navales contra Gran Bretaña y proteger los envíos cruciales de mineral de hierro desde la Suecia neutral a través del puerto noruego de Narvik.",
          de: "Am 9. April 1940 startete Nazi-Deutschland das Unternehmen Weserübung und überfiel gleichzeitig Dänemark und Norwegen. Dänemark kapitulierte innerhalb von sechs Stunden, während Norwegen länger Widerstand leistete und seine Festlandsarmee am 10. Juni 1940 kapitulierte. Deutsche Kriegsschiffe besetzten schnell wichtige norwegische Häfen, darunter Oslo, Bergen, Narvik, Trondheim, Kristiansand und Stavanger. Die Invasion war strategisch wichtig, um Marinestützpunkte gegen Großbritannien zu sichern und die entscheidenden Eisenerzlieferungen aus dem neutralen Schweden durch den norwegischen Hafen Narvik zu schützen.",
          nl: "Op 9 april 1940 lanceerde nazi-Duitsland Operatie Weserübung en viel tegelijkertijd Denemarken en Noorwegen binnen. Denemarken gaf zich binnen zes uur over, terwijl Noorwegen langer weerstand bood en zijn vastelandsleger capituleerde op 10 juni 1940. Duitse oorlogsschepen bezetten snel belangrijke Noorse havens, waaronder Oslo, Bergen, Narvik, Trondheim, Kristiansand en Stavanger. De invasie was strategisch belangrijk om marinebases tegen Groot-Brittannië veilig te stellen en de cruciale ijzerertszendingen uit neutraal Zweden via de Noorse haven Narvik te beschermen."
        }
      },
      {
        question: {
          en: "On April 9, 1939, African American contralto Marian Anderson performed at which iconic location after being denied access to Constitution Hall?",
          es: "El 9 de abril de 1939, la contralto afroamericana Marian Anderson actuó en qué lugar icónico después de que se le negara el acceso al Constitution Hall?",
          de: "Am 9. April 1939 trat die afroamerikanische Altistin Marian Anderson an welchem ikonischen Ort auf, nachdem ihr der Zugang zur Constitution Hall verweigert worden war?",
          nl: "Op 9 april 1939 trad de Afro-Amerikaanse alt Marian Anderson op welke iconische locatie op nadat haar toegang tot Constitution Hall was geweigerd?"
        },
        options: [
          { en: "Lincoln Memorial", es: "Memorial de Lincoln", de: "Lincoln Memorial", nl: "Lincoln Memorial" },
          { en: "White House Rose Garden", es: "Jardín de Rosas de la Casa Blanca", de: "Rosengarten des Weißen Hauses", nl: "Rozentuin van het Witte Huis" },
          { en: "Carnegie Hall", es: "Carnegie Hall", de: "Carnegie Hall", nl: "Carnegie Hall" },
          { en: "National Mall", es: "National Mall", de: "National Mall", nl: "National Mall" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On Easter Sunday, April 9, 1939, Marian Anderson performed at the Lincoln Memorial before an audience of 75,000 people after the Daughters of the American Revolution denied her request to perform at Constitution Hall due to their all-white performer policy. First Lady Eleanor Roosevelt publicly resigned her DAR membership in protest. Secretary of the Interior Harold Ickes arranged the Lincoln Memorial concert, which was broadcast nationally. Anderson opened with 'America,' sang 'Ave Maria,' and closed with 'Nobody Knows the Trouble I've Seen,' making the event a pivotal moment in civil rights history.",
          es: "El Domingo de Pascua, 9 de abril de 1939, Marian Anderson actuó en el Memorial de Lincoln ante una audiencia de 75,000 personas después de que las Hijas de la Revolución Americana le negaran su solicitud de actuar en el Constitution Hall debido a su política de artistas solo blancos. La Primera Dama Eleanor Roosevelt renunció públicamente a su membresía de las DAR en protesta. El Secretario del Interior Harold Ickes organizó el concierto del Memorial de Lincoln, que fue transmitido a nivel nacional. Anderson abrió con 'America', cantó 'Ave Maria' y cerró con 'Nobody Knows the Trouble I've Seen', convirtiendo el evento en un momento crucial en la historia de los derechos civiles.",
          de: "Am Ostersonntag, dem 9. April 1939, trat Marian Anderson vor 75.000 Zuschauern am Lincoln Memorial auf, nachdem die Daughters of the American Revolution ihre Anfrage abgelehnt hatten, in der Constitution Hall aufzutreten, aufgrund ihrer Politik nur weißer Künstler. First Lady Eleanor Roosevelt trat öffentlich aus Protest aus ihrer DAR-Mitgliedschaft zurück. Innenminister Harold Ickes organisierte das Konzert am Lincoln Memorial, das landesweit übertragen wurde. Anderson eröffnete mit 'America', sang 'Ave Maria' und schloss mit 'Nobody Knows the Trouble I've Seen', wodurch das Ereignis zu einem entscheidenden Moment in der Geschichte der Bürgerrechte wurde.",
          nl: "Op Paaszondag, 9 april 1939, trad Marian Anderson op bij het Lincoln Memorial voor een publiek van 75.000 mensen nadat de Daughters of the American Revolution haar verzoek om op te treden in Constitution Hall hadden afgewezen vanwege hun beleid van alleen blanke artiesten. First Lady Eleanor Roosevelt zegde publiekelijk uit protest haar DAR-lidmaatschap op. Minister van Binnenlandse Zaken Harold Ickes regelde het concert bij het Lincoln Memorial, dat landelijk werd uitgezonden. Anderson opende met 'America', zong 'Ave Maria' en sloot af met 'Nobody Knows the Trouble I've Seen', waardoor het evenement een cruciaal moment werd in de geschiedenis van de burgerrechten."
        }
      },
      {
        question: {
          en: "In 1959 on April 9, which group of astronauts was selected for NASA's Mercury space program and dubbed the 'Mercury Seven'?",
          es: "En 1959, el 9 de abril, ¿qué grupo de astronautas fue seleccionado para el programa espacial Mercury de la NASA y apodado los 'Siete de Mercury'?",
          de: "1959 wurde am 9. April welche Gruppe von Astronauten für NASAs Mercury-Weltraumprogramm ausgewählt und als 'Mercury Seven' bezeichnet?",
          nl: "In 1959 werd op 9 april welke groep astronauten geselecteerd voor NASA's Mercury ruimteprogramma en de 'Mercury Zeven' genoemd?"
        },
        options: [
          { en: "Cernan, Young, Duke, Mitchell, Irwin, Scott, Bean", es: "Cernan, Young, Duke, Mitchell, Irwin, Scott, Bean", de: "Cernan, Young, Duke, Mitchell, Irwin, Scott, Bean", nl: "Cernan, Young, Duke, Mitchell, Irwin, Scott, Bean" },
          { en: "Glenn, Shepard, Grissom, Cooper, Carpenter, Schirra, Slayton", es: "Glenn, Shepard, Grissom, Cooper, Carpenter, Schirra, Slayton", de: "Glenn, Shepard, Grissom, Cooper, Carpenter, Schirra, Slayton", nl: "Glenn, Shepard, Grissom, Cooper, Carpenter, Schirra, Slayton" },
          { en: "Armstrong, Aldrin, Collins, Lovell, Anders, Borman, McDivitt", es: "Armstrong, Aldrin, Collins, Lovell, Anders, Borman, McDivitt", de: "Armstrong, Aldrin, Collins, Lovell, Anders, Borman, McDivitt", nl: "Armstrong, Aldrin, Collins, Lovell, Anders, Borman, McDivitt" },
          { en: "Gagarin, Titov, Leonov, Tereshkova, Komarov, Bykovsky, Nikolayev", es: "Gagarin, Titov, Leonov, Tereshkova, Komarov, Bykovsky, Nikolayev", de: "Gagarin, Titov, Leonov, Tereshkova, Komarov, Bykovsky, Nikolayev", nl: "Gagarin, Titov, Leonov, Tereshkova, Komarov, Bykovsky, Nikolayev" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 9, 1959, NASA selected seven military test pilots for the Mercury program: John Glenn, Alan Shepard, Gus Grissom, Gordon Cooper, Scott Carpenter, Wally Schirra, and Deke Slayton. They became known as the 'Mercury Seven' and were America's first astronauts. Alan Shepard became the first American in space in 1961, followed by Gus Grissom. John Glenn became the first American to orbit Earth in 1962. These pioneering astronauts helped establish the United States space program during the intense Space Race with the Soviet Union.",
          es: "El 9 de abril de 1959, la NASA seleccionó a siete pilotos de prueba militares para el programa Mercury: John Glenn, Alan Shepard, Gus Grissom, Gordon Cooper, Scott Carpenter, Wally Schirra y Deke Slayton. Se hicieron conocidos como los 'Siete de Mercury' y fueron los primeros astronautas de Estados Unidos. Alan Shepard se convirtió en el primer estadounidense en el espacio en 1961, seguido por Gus Grissom. John Glenn se convirtió en el primer estadounidense en orbitar la Tierra en 1962. Estos pioneros astronautas ayudaron a establecer el programa espacial de Estados Unidos durante la intensa Carrera Espacial con la Unión Soviética.",
          de: "Am 9. April 1959 wählte die NASA sieben militärische Testpiloten für das Mercury-Programm aus: John Glenn, Alan Shepard, Gus Grissom, Gordon Cooper, Scott Carpenter, Wally Schirra und Deke Slayton. Sie wurden als 'Mercury Seven' bekannt und waren Amerikas erste Astronauten. Alan Shepard wurde 1961 der erste Amerikaner im Weltraum, gefolgt von Gus Grissom. John Glenn wurde 1962 der erste Amerikaner, der die Erde umkreiste. Diese Pionier-Astronauten halfen, das Raumfahrtprogramm der Vereinigten Staaten während des intensiven Weltraumrennens mit der Sowjetunion zu etablieren.",
          nl: "Op 9 april 1959 selecteerde NASA zeven militaire testpiloten voor het Mercury-programma: John Glenn, Alan Shepard, Gus Grissom, Gordon Cooper, Scott Carpenter, Wally Schirra en Deke Slayton. Ze werden bekend als de 'Mercury Zeven' en waren Amerika's eerste astronauten. Alan Shepard werd in 1961 de eerste Amerikaan in de ruimte, gevolgd door Gus Grissom. John Glenn werd in 1962 de eerste Amerikaan die de aarde omcirkelde. Deze pioniers astronauten hielpen het ruimteprogramma van de Verenigde Staten op te zetten tijdens de intense Ruimterace met de Sovjet-Unie."
        }
      }
    ],
    day10: [
      {
        question: {
          en: "On April 10, 1912, from which port did the RMS Titanic depart on its ill-fated maiden voyage?",
          es: "El 10 de abril de 1912, ¿desde qué puerto partió el RMS Titanic en su desafortunado viaje inaugural?",
          de: "Am 10. April 1912, von welchem Hafen aus startete die RMS Titanic zu ihrer verhängnisvollen Jungfernfahrt?",
          nl: "Op 10 april 1912 vertrok de RMS Titanic vanuit welke haven op haar noodlottige eerste reis?"
        },
        options: [
          { en: "Liverpool, England", es: "Liverpool, Inglaterra", de: "Liverpool, England", nl: "Liverpool, Engeland" },
          { en: "Southampton, England", es: "Southampton, Inglaterra", de: "Southampton, England", nl: "Southampton, Engeland" },
          { en: "Belfast, Northern Ireland", es: "Belfast, Irlanda del Norte", de: "Belfast, Nordirland", nl: "Belfast, Noord-Ierland" },
          { en: "London, England", es: "Londres, Inglaterra", de: "London, England", nl: "Londen, Engeland" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 10, 1912, the RMS Titanic departed from Southampton, England, shortly after noon on its maiden voyage to New York. A total of 920 passengers boarded at Southampton: 179 First Class, 247 Second Class, and 494 Third Class. The departure was delayed by about 60 minutes due to a near-collision incident when the displacement from Titanic's massive hull caused the liner SS New York's mooring cables to snap, swinging it stern-first toward Titanic. The two ships came within just 4 feet of each other before tugboats averted disaster.",
          es: "El 10 de abril de 1912, el RMS Titanic partió de Southampton, Inglaterra, poco después del mediodía en su viaje inaugural a Nueva York. Un total de 920 pasajeros abordaron en Southampton: 179 de Primera Clase, 247 de Segunda Clase y 494 de Tercera Clase. La salida se retrasó unos 60 minutos debido a un incidente de casi colisión cuando el desplazamiento del enorme casco del Titanic hizo que los cables de amarre del transatlántico SS New York se rompieran, balanceándolo de popa hacia el Titanic. Los dos barcos estuvieron a solo 4 pies el uno del otro antes de que los remolcadores evitaran el desastre.",
          de: "Am 10. April 1912 verließ die RMS Titanic kurz nach Mittag Southampton, England, zu ihrer Jungfernfahrt nach New York. Insgesamt 920 Passagiere gingen in Southampton an Bord: 179 Erste Klasse, 247 Zweite Klasse und 494 Dritte Klasse. Die Abfahrt verzögerte sich um etwa 60 Minuten aufgrund eines Beinahe-Zusammenstoßes, als die Verdrängung von Titanics massivem Rumpf die Festmacher des Linienschiffs SS New York brechen ließ, wodurch es mit dem Heck zuerst auf die Titanic zuschwang. Die beiden Schiffe kamen sich bis auf nur 4 Fuß nahe, bevor Schlepper die Katastrophe abwendeten.",
          nl: "Op 10 april 1912 vertrok de RMS Titanic vanuit Southampton, Engeland, kort na het middaguur op haar eerste reis naar New York. In totaal gingen 920 passagiers in Southampton aan boord: 179 Eerste Klas, 247 Tweede Klas en 494 Derde Klas. Het vertrek werd ongeveer 60 minuten vertraagd door een bijna-aanvaring toen de verplaatsing van Titanic's massieve romp de meertouwen van het lijnschip SS New York deed breken, waardoor het met de achtersteven eerst naar Titanic zwaaide. De twee schepen kwamen tot op slechts 4 voet van elkaar voordat sleepboten de ramp afwendden."
        }
      },
      {
        question: {
          en: "What dramatic incident delayed the Titanic's departure from Southampton on April 10, 1912?",
          es: "¿Qué incidente dramático retrasó la salida del Titanic de Southampton el 10 de abril de 1912?",
          de: "Welcher dramatische Vorfall verzögerte die Abfahrt der Titanic von Southampton am 10. April 1912?",
          nl: "Welk dramatisch incident vertraagde het vertrek van de Titanic vanuit Southampton op 10 april 1912?"
        },
        options: [
          { en: "Bad weather prevented departure", es: "El mal tiempo impidió la salida", de: "Schlechtes Wetter verhinderte die Abfahrt", nl: "Slecht weer verhinderde het vertrek" },
          { en: "A fire broke out in the boiler room", es: "Se produjo un incendio en la sala de calderas", de: "Ein Feuer brach im Kesselraum aus", nl: "Er brak brand uit in de ketelruimte" },
          { en: "A passenger fell overboard", es: "Un pasajero cayó por la borda", de: "Ein Passagier fiel über Bord", nl: "Een passagier viel overboord" },
          { en: "The SS New York nearly collided with Titanic", es: "El SS New York casi colisionó con el Titanic", de: "Die SS New York wäre fast mit der Titanic kollidiert", nl: "De SS New York botste bijna met de Titanic" }
        ],
        correctIndex: 3,
        explanation: {
          en: "At noon on April 10, 1912, as Titanic departed Southampton, her massive displacement created a surge of water that snapped the mooring cables of the nearby liner SS New York. The New York swung stern-first toward Titanic, and the two ships came within just 4 feet of colliding. Quick action by tugboat crews and Titanic's captain managed to avert the collision. This incident delayed Titanic's departure by approximately 60 minutes, with sailing finally resuming at 1:00 PM. This near-miss was seen by some as an ominous sign, though most dismissed it at the time.",
          es: "Al mediodía del 10 de abril de 1912, cuando el Titanic partió de Southampton, su enorme desplazamiento creó una oleada de agua que rompió los cables de amarre del transatlántico cercano SS New York. El New York se balanceó de popa hacia el Titanic, y los dos barcos estuvieron a solo 4 pies de colisionar. La acción rápida de las tripulaciones de remolcadores y del capitán del Titanic logró evitar la colisión. Este incidente retrasó la salida del Titanic aproximadamente 60 minutos, con la navegación finalmente reanudándose a la 1:00 PM. Este casi accidente fue visto por algunos como una señal ominosa, aunque la mayoría lo descartó en ese momento.",
          de: "Am Mittag des 10. April 1912, als die Titanic Southampton verließ, erzeugte ihre massive Verdrängung eine Wasserwelle, die die Festmacher des nahegelegenen Linienschiffs SS New York riss. Die New York schwang mit dem Heck zuerst auf die Titanic zu, und die beiden Schiffe kamen sich bis auf nur 4 Fuß nahe, bevor sie kollidierten. Schnelles Handeln der Schlepperbesatzungen und des Kapitäns der Titanic verhinderte die Kollision. Dieser Vorfall verzögerte die Abfahrt der Titanic um etwa 60 Minuten, wobei die Fahrt schließlich um 13:00 Uhr wieder aufgenommen wurde. Dieser Beinahe-Zusammenstoß wurde von einigen als unheilvolles Zeichen angesehen, obwohl ihn die meisten damals abtaten.",
          nl: "Op 10 april 1912, toen de Titanic om het middaguur vanuit Southampton vertrok, veroorzaakte haar enorme verplaatsing een watergolf die de meertouwen van het nabijgelegen lijnschip SS New York deed breken. De New York zwaaide met de achtersteven eerst naar de Titanic, en de twee schepen kwamen tot op slechts 4 voet van elkaar voordat ze botsten. Snel optreden van de sleepbootbemanningen en de kapitein van de Titanic wist de botsing te voorkomen. Dit incident vertraagde het vertrek van de Titanic met ongeveer 60 minuten, waarbij het varen uiteindelijk om 13:00 uur werd hervat. Deze bijna-aanvaring werd door sommigen gezien als een onheilspellend teken, hoewel de meesten het toen afwezen."
        }
      },
      {
        question: {
          en: "On April 10, 1815, Mount Tambora in Indonesia produced what is considered the most powerful volcanic eruption in recorded history. What global climate phenomenon did it cause in 1816?",
          es: "El 10 de abril de 1815, el Monte Tambora en Indonesia produjo lo que se considera la erupción volcánica más poderosa de la historia registrada. ¿Qué fenómeno climático global causó en 1816?",
          de: "Am 10. April 1815 erzeugte der Berg Tambora in Indonesien den mächtigsten Vulkanausbruch der aufgezeichneten Geschichte. Welches globale Klimaphänomen verursachte er 1816?",
          nl: "Op 10 april 1815 veroorzaakte de berg Tambora in Indonesië wat wordt beschouwd als de krachtigste vulkaanuitbarsting in de geschreven geschiedenis. Welk wereldwijd klimaatfenomeen veroorzaakte het in 1816?"
        },
        options: [
          { en: "The Year Without a Summer", es: "El Año Sin Verano", de: "Das Jahr ohne Sommer", nl: "Het Jaar Zonder Zomer" },
          { en: "The Medieval Warm Period", es: "El Período Cálido Medieval", de: "Die Mittelalterliche Warmzeit", nl: "De Middeleeuwse Warmteperiode" },
          { en: "The Little Ice Age", es: "La Pequeña Edad de Hielo", de: "Die Kleine Eiszeit", nl: "De Kleine IJstijd" },
          { en: "The Great Frost", es: "La Gran Helada", de: "Der Große Frost", nl: "De Grote Vorst" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Mount Tambora's eruption on April 10, 1815, with a volcanic explosivity index of 7, ejected 37-45 cubic kilometers of material into the atmosphere. The eruption column reached over 43 kilometers into the stratosphere. At least 10,000 people died immediately from pyroclastic flows and tsunamis, with an additional 60,000 deaths from crop failures. The ash dispersed worldwide, lowering global temperatures and causing 1816 to be known as 'The Year Without a Summer,' triggering extreme weather, harvest failures, and food shortages across Europe and North America.",
          es: "La erupción del Monte Tambora el 10 de abril de 1815, con un índice de explosividad volcánica de 7, expulsó 37-45 kilómetros cúbicos de material a la atmósfera. La columna de erupción alcanzó más de 43 kilómetros en la estratosfera. Al menos 10,000 personas murieron inmediatamente por flujos piroclásticos y tsunamis, con 60,000 muertes adicionales por pérdidas de cosechas. La ceniza se dispersó por todo el mundo, bajando las temperaturas globales y haciendo que 1816 fuera conocido como 'El Año Sin Verano', desencadenando clima extremo, pérdidas de cosechas y escasez de alimentos en Europa y América del Norte.",
          de: "Der Ausbruch des Tambora am 10. April 1815, mit einem Vulkanexplosivitätsindex von 7, schleuderte 37-45 Kubikkilometer Material in die Atmosphäre. Die Eruptionssäule erreichte über 43 Kilometer in die Stratosphäre. Mindestens 10.000 Menschen starben sofort durch pyroklastische Ströme und Tsunamis, mit zusätzlich 60.000 Todesfällen durch Ernteausfälle. Die Asche verteilte sich weltweit, senkte die globalen Temperaturen und führte dazu, dass 1816 als 'Das Jahr ohne Sommer' bekannt wurde, was extremes Wetter, Ernteausfälle und Nahrungsmittelknappheit in Europa und Nordamerika auslöste.",
          nl: "De uitbarsting van de Tambora op 10 april 1815, met een vulkanische explosiviteitsindex van 7, wierp 37-45 kubieke kilometer materiaal de atmosfeer in. De uitbarstingskolom reikte tot over 43 kilometer de stratosfeer in. Minstens 10.000 mensen stierven onmiddellijk door pyroclastische stromen en tsunami's, met nog eens 60.000 doden door mislukte oogsten. De as verspreidde zich wereldwijd, verlaagde de wereldwijde temperaturen en zorgde ervoor dat 1816 bekend werd als 'Het Jaar Zonder Zomer', wat extreem weer, mislukte oogsten en voedseltekorten in Europa en Noord-Amerika veroorzaakte."
        }
      },
      {
        question: {
          en: "On April 10, 1998, which landmark peace agreement was signed in Northern Ireland, ending 30 years of conflict known as the Troubles?",
          es: "El 10 de abril de 1998, ¿qué acuerdo de paz histórico se firmó en Irlanda del Norte, poniendo fin a 30 años de conflicto conocido como los Troubles?",
          de: "Am 10. April 1998 wurde welches bahnbrechende Friedensabkommen in Nordirland unterzeichnet, das 30 Jahre Konflikt, bekannt als die Troubles, beendete?",
          nl: "Op 10 april 1998 werd welk belangrijk vredesakkoord getekend in Noord-Ierland, dat een einde maakte aan 30 jaar conflict bekend als de Troubles?"
        },
        options: [
          { en: "Dayton Agreement", es: "Acuerdo de Dayton", de: "Dayton-Abkommen", nl: "Dayton Akkoord" },
          { en: "Camp David Accords", es: "Acuerdos de Camp David", de: "Camp-David-Abkommen", nl: "Camp David Akkoorden" },
          { en: "Treaty of Versailles", es: "Tratado de Versalles", de: "Vertrag von Versailles", nl: "Verdrag van Versailles" },
          { en: "Good Friday Agreement", es: "Acuerdo del Viernes Santo", de: "Karfreitagsabkommen", nl: "Goede Vrijdag Akkoord" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Good Friday Agreement, also called the Belfast Agreement, was signed on April 10, 1998 (Good Friday), ending most of the violence of the Troubles in Northern Ireland. The talks were chaired by US special envoy George J. Mitchell, with UK Prime Minister Tony Blair and Irish Taoiseach Bertie Ahern leading their governments. At 5:30 PM, 17 hours past the deadline, Mitchell announced an agreement between the two governments and Northern Ireland's political parties. On May 22, 1998, referendums in both Northern Ireland and the Republic of Ireland approved the agreement with 71% and 94% voting 'Yes' respectively.",
          es: "El Acuerdo del Viernes Santo, también llamado Acuerdo de Belfast, se firmó el 10 de abril de 1998 (Viernes Santo), poniendo fin a la mayor parte de la violencia de los Troubles en Irlanda del Norte. Las conversaciones fueron presididas por el enviado especial de EE. UU. George J. Mitchell, con el Primer Ministro británico Tony Blair y el Taoiseach irlandés Bertie Ahern liderando sus gobiernos. A las 5:30 PM, 17 horas después del plazo límite, Mitchell anunció un acuerdo entre los dos gobiernos y los partidos políticos de Irlanda del Norte. El 22 de mayo de 1998, los referéndums en Irlanda del Norte y la República de Irlanda aprobaron el acuerdo con un 71% y 94% votando 'Sí' respectivamente.",
          de: "Das Karfreitagsabkommen, auch Belfast-Abkommen genannt, wurde am 10. April 1998 (Karfreitag) unterzeichnet und beendete den größten Teil der Gewalt der Troubles in Nordirland. Die Gespräche wurden vom US-Sondergesandten George J. Mitchell geleitet, wobei der britische Premierminister Tony Blair und der irische Taoiseach Bertie Ahern ihre Regierungen führten. Um 17:30 Uhr, 17 Stunden nach Ablauf der Frist, verkündete Mitchell eine Einigung zwischen den beiden Regierungen und den politischen Parteien Nordirlands. Am 22. Mai 1998 billigten Referenden sowohl in Nordirland als auch in der Republik Irland das Abkommen mit 71% bzw. 94% Ja-Stimmen.",
          nl: "Het Goede Vrijdag Akkoord, ook wel het Belfast Akkoord genoemd, werd ondertekend op 10 april 1998 (Goede Vrijdag) en maakte een einde aan het grootste deel van het geweld van de Troubles in Noord-Ierland. De gesprekken werden voorgezeten door de Amerikaanse speciale gezant George J. Mitchell, met de Britse premier Tony Blair en de Ierse Taoiseach Bertie Ahern die hun regeringen leidden. Om 17:30 uur, 17 uur na de deadline, kondigde Mitchell een akkoord aan tussen de twee regeringen en de politieke partijen van Noord-Ierland. Op 22 mei 1998 keurden referenda in zowel Noord-Ierland als de Republiek Ierland het akkoord goed met respectievelijk 71% en 94% 'Ja'-stemmen."
        }
      },
      {
        question: {
          en: "On April 10, 1970, which member of The Beatles publicly announced he was leaving the band while promoting his solo album?",
          es: "El 10 de abril de 1970, ¿qué miembro de The Beatles anunció públicamente que abandonaba la banda mientras promocionaba su álbum en solitario?",
          de: "Am 10. April 1970 verkündete welches Mitglied der Beatles öffentlich, dass er die Band verlässt, während er sein Soloalbum bewarb?",
          nl: "Op 10 april 1970 kondigde welk lid van The Beatles publiekelijk aan dat hij de band verliet terwijl hij zijn soloalbum promootte?"
        },
        options: [
          { en: "Paul McCartney", es: "Paul McCartney", de: "Paul McCartney", nl: "Paul McCartney" },
          { en: "John Lennon", es: "John Lennon", de: "John Lennon", nl: "John Lennon" },
          { en: "Ringo Starr", es: "Ringo Starr", de: "Ringo Starr", nl: "Ringo Starr" },
          { en: "George Harrison", es: "George Harrison", de: "George Harrison", nl: "George Harrison" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 10, 1970, Paul McCartney announced he was leaving The Beatles while promoting his debut solo album 'McCartney,' due for release on April 17. Instead of traditional interviews, McCartney created a self-interview answering questions about the band's future. The Daily Mirror broke the story with the headline 'Paul is quitting The Beatles.' When asked if the Lennon-McCartney songwriting partnership would continue, he answered 'No.' Although John Lennon had privately requested a 'divorce' the previous September, McCartney's public announcement made the breakup official, shocking fans worldwide.",
          es: "El 10 de abril de 1970, Paul McCartney anunció que abandonaba The Beatles mientras promocionaba su álbum debut en solitario 'McCartney', cuyo lanzamiento estaba previsto para el 17 de abril. En lugar de entrevistas tradicionales, McCartney creó una autoentrevista respondiendo preguntas sobre el futuro de la banda. El Daily Mirror publicó la noticia con el titular 'Paul está abandonando The Beatles'. Cuando se le preguntó si la asociación de compositores Lennon-McCartney continuaría, respondió 'No'. Aunque John Lennon había solicitado en privado un 'divorcio' el septiembre anterior, el anuncio público de McCartney oficializó la separación, conmocionando a los fanáticos de todo el mundo.",
          de: "Am 10. April 1970 verkündete Paul McCartney, dass er die Beatles verlässt, während er sein Debüt-Soloalbum 'McCartney' bewarb, das am 17. April erscheinen sollte. Anstelle traditioneller Interviews erstellte McCartney ein Selbstinterview, in dem er Fragen zur Zukunft der Band beantwortete. Der Daily Mirror veröffentlichte die Geschichte mit der Schlagzeile 'Paul verlässt die Beatles'. Als er gefragt wurde, ob die Songwriting-Partnerschaft Lennon-McCartney fortgesetzt würde, antwortete er 'Nein'. Obwohl John Lennon im September zuvor privat eine 'Scheidung' gefordert hatte, machte McCartneys öffentliche Ankündigung die Trennung offiziell und schockierte Fans weltweit.",
          nl: "Op 10 april 1970 kondigde Paul McCartney aan dat hij The Beatles verliet terwijl hij zijn debuut soloalbum 'McCartney' promootte, dat op 17 april zou uitkomen. In plaats van traditionele interviews creëerde McCartney een zelf-interview waarin hij vragen beantwoordde over de toekomst van de band. De Daily Mirror bracht het verhaal met de kop 'Paul verlaat The Beatles'. Toen hem werd gevraagd of het Lennon-McCartney songwriting partnerschap zou voortduren, antwoordde hij 'Nee'. Hoewel John Lennon de vorige september privé om een 'scheiding' had gevraagd, maakte McCartneys publieke aankondiging de breuk officieel en schokte het fans wereldwijd."
        }
      }
    ],
    day11: [
      {
        question: {
          en: "On April 11, 1970, which Apollo mission launched from Kennedy Space Center, later becoming known as NASA's 'successful failure'?",
          es: "El 11 de abril de 1970, ¿qué misión Apollo se lanzó desde el Centro Espacial Kennedy, convirtiéndose más tarde en el 'fracaso exitoso' de la NASA?",
          de: "Am 11. April 1970 startete welche Apollo-Mission vom Kennedy Space Center und wurde später als NASAs 'erfolgreicher Misserfolg' bekannt?",
          nl: "Op 11 april 1970 werd welke Apollo-missie gelanceerd vanaf het Kennedy Space Center, die later bekend werd als NASA's 'succesvolle mislukking'?"
        },
        options: [
          { en: "Apollo 12", es: "Apollo 12", de: "Apollo 12", nl: "Apollo 12" },
          { en: "Apollo 13", es: "Apollo 13", de: "Apollo 13", nl: "Apollo 13" },
          { en: "Apollo 14", es: "Apollo 14", de: "Apollo 14", nl: "Apollo 14" },
          { en: "Apollo 11", es: "Apollo 11", de: "Apollo 11", nl: "Apollo 11" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Apollo 13 launched on April 11, 1970, at 2:13 PM EST from Kennedy Space Center, carrying astronauts James Lovell, John Swigert, and Fred Haise. On April 13, an oxygen tank explosion 200,000 miles from Earth forced the crew to abort the moon landing. The crew famously radioed 'Houston, we've had a problem.' They survived by using the lunar module as a lifeboat and successfully splashed down on April 17. Despite not reaching the moon, the mission demonstrated NASA's ability to solve critical problems under pressure.",
          es: "Apollo 13 se lanzó el 11 de abril de 1970 a las 2:13 PM EST desde el Centro Espacial Kennedy, llevando a los astronautas James Lovell, John Swigert y Fred Haise. El 13 de abril, una explosión de tanque de oxígeno a 200,000 millas de la Tierra obligó a la tripulación a abortar el aterrizaje lunar. La tripulación transmitió por radio la famosa frase 'Houston, tenemos un problema'. Sobrevivieron usando el módulo lunar como bote salvavidas y amerizaron con éxito el 17 de abril. A pesar de no alcanzar la luna, la misión demostró la capacidad de la NASA para resolver problemas críticos bajo presión.",
          de: "Apollo 13 startete am 11. April 1970 um 14:13 Uhr EST vom Kennedy Space Center mit den Astronauten James Lovell, John Swigert und Fred Haise. Am 13. April zwang eine Sauerstofftank-Explosion 200.000 Meilen von der Erde entfernt die Besatzung, die Mondlandung abzubrechen. Die Besatzung funkte berühmt 'Houston, wir haben ein Problem'. Sie überlebten, indem sie das Mondmodul als Rettungsboot nutzten und erfolgreich am 17. April wasserten. Obwohl sie den Mond nicht erreichten, zeigte die Mission NASAs Fähigkeit, kritische Probleme unter Druck zu lösen.",
          nl: "Apollo 13 werd gelanceerd op 11 april 1970 om 14:13 uur EST vanaf het Kennedy Space Center, met astronauten James Lovell, John Swigert en Fred Haise. Op 13 april dwong een zuurstoftank explosie 200.000 mijl van de aarde de bemanning de maanlanding af te breken. De bemanning straalde beroemd uit 'Houston, we hebben een probleem'. Ze overleefden door de maanmodule als reddingsboot te gebruiken en maakten succesvol een waterlanding op 17 april. Ondanks het niet bereiken van de maan, toonde de missie NASA's vermogen om kritieke problemen onder druk op te lossen."
        }
      },
      {
        question: {
          en: "What famous phrase was radioed to mission control during the Apollo 13 crisis that began two days after its launch on April 11, 1970?",
          es: "¿Qué frase famosa se transmitió por radio al control de la misión durante la crisis del Apollo 13 que comenzó dos días después de su lanzamiento el 11 de abril de 1970?",
          de: "Welcher berühmte Satz wurde während der Apollo-13-Krise an die Missionskontrolle gefunkt, die zwei Tage nach dem Start am 11. April 1970 begann?",
          nl: "Welke beroemde zin werd uitgezonden naar de missiecontrole tijdens de Apollo 13 crisis die begon twee dagen na de lancering op 11 april 1970?"
        },
        options: [
          { en: "Houston, we've had a problem", es: "Houston, tenemos un problema", de: "Houston, wir haben ein Problem", nl: "Houston, we hebben een probleem" },
          { en: "One small step for man", es: "Un pequeño paso para el hombre", de: "Ein kleiner Schritt für einen Mann", nl: "Een kleine stap voor de mens" },
          { en: "The Eagle has landed", es: "El Águila ha aterrizado", de: "Der Adler ist gelandet", nl: "De Adelaar is geland" },
          { en: "Failure is not an option", es: "El fracaso no es una opción", de: "Scheitern ist keine Option", nl: "Falen is geen optie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 13, 1970, at 9:08 PM, two days after launch, astronaut Jack Swigert reported 'Houston, we've had a problem' after an oxygen tank explosion crippled the spacecraft. Commander Jim Lovell then confirmed 'Houston, we've had a problem here.' The explosion occurred 200,000 miles from Earth, forcing the crew to abandon their moon landing plans. They converted the lunar module into a lifeboat for the return journey. All three astronauts survived, splashing down safely on April 17, making it one of NASA's most dramatic rescues.",
          es: "El 13 de abril de 1970 a las 9:08 PM, dos días después del lanzamiento, el astronauta Jack Swigert reportó 'Houston, tenemos un problema' después de que una explosión de tanque de oxígeno paralizara la nave espacial. El comandante Jim Lovell luego confirmó 'Houston, hemos tenido un problema aquí'. La explosión ocurrió a 200,000 millas de la Tierra, obligando a la tripulación a abandonar sus planes de aterrizaje lunar. Convirtieron el módulo lunar en un bote salvavidas para el viaje de regreso. Los tres astronautas sobrevivieron, amerizando con seguridad el 17 de abril, convirtiéndola en uno de los rescates más dramáticos de la NASA.",
          de: "Am 13. April 1970 um 21:08 Uhr, zwei Tage nach dem Start, meldete Astronaut Jack Swigert 'Houston, wir haben ein Problem' nachdem eine Sauerstofftank-Explosion das Raumschiff lahmgelegt hatte. Kommandant Jim Lovell bestätigte dann 'Houston, wir haben hier ein Problem'. Die Explosion ereignete sich 200.000 Meilen von der Erde entfernt und zwang die Besatzung, ihre Mondlandungspläne aufzugeben. Sie wandelten das Mondmodul in ein Rettungsboot für die Rückreise um. Alle drei Astronauten überlebten und wasserten sicher am 17. April, was es zu einer der dramatischsten Rettungsaktionen der NASA machte.",
          nl: "Op 13 april 1970 om 21:08 uur, twee dagen na de lancering, meldde astronaut Jack Swigert 'Houston, we hebben een probleem' nadat een zuurstoftank explosie het ruimtevaartuig verlamde. Commandant Jim Lovell bevestigde vervolgens 'Houston, we hebben hier een probleem'. De explosie vond plaats 200.000 mijl van de aarde, waardoor de bemanning hun maanlandingsplannen moest opgeven. Ze verbouwden de maanmodule tot een reddingsboot voor de terugreis. Alle drie astronauten overleefden en maakten veilig een waterlanding op 17 april, waardoor het een van NASA's meest dramatische reddingen werd."
        }
      },
      {
        question: {
          en: "On April 11, 2012, what major African political event occurred when soldiers seized power in Mali?",
          es: "El 11 de abril de 2012, ¿qué importante evento político africano ocurrió cuando los soldados tomaron el poder en Malí?",
          de: "Am 11. April 2012 ereignete sich welches wichtige afrikanische politische Ereignis, als Soldaten in Mali die Macht ergriffen?",
          nl: "Op 11 april 2012 vond welke belangrijke Afrikaanse politieke gebeurtenis plaats toen soldaten de macht grepen in Mali?"
        },
        options: [
          { en: "Independence declaration", es: "Declaración de independencia", de: "Unabhängigkeitserklärung", nl: "Onafhankelijkheidsverklaring" },
          { en: "A military coup d'état", es: "Un golpe de estado militar", de: "Ein militärischer Staatsstreich", nl: "Een militaire staatsgreep" },
          { en: "Democratic elections", es: "Elecciones democráticas", de: "Demokratische Wahlen", nl: "Democratische verkiezingen" },
          { en: "Peace treaty signing", es: "Firma de tratado de paz", de: "Friedensvertragsunterzeichnung", nl: "Vredesverdrag ondertekening" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 11, 2012, rebel soldiers staged a military coup in Mali, overthrowing President Amadou Toumani Touré just one month before scheduled elections. The coup leaders, frustrated with the government's handling of a Tuareg rebellion in northern Mali, seized control of the presidential palace in Bamako. The coup created a power vacuum that allowed Islamic militants to gain control of northern Mali. International pressure eventually led to a return to civilian rule, and the coup highlighted regional instability in the Sahel region of Africa.",
          es: "El 11 de abril de 2012, soldados rebeldes organizaron un golpe militar en Malí, derrocando al presidente Amadou Toumani Touré apenas un mes antes de las elecciones programadas. Los líderes del golpe, frustrados con el manejo del gobierno de una rebelión tuareg en el norte de Malí, tomaron el control del palacio presidencial en Bamako. El golpe creó un vacío de poder que permitió a los militantes islámicos ganar control del norte de Malí. La presión internacional finalmente condujo a un regreso al gobierno civil, y el golpe destacó la inestabilidad regional en la región del Sahel de África.",
          de: "Am 11. April 2012 führten Rebellensoldaten einen Militärputsch in Mali durch und stürzten Präsident Amadou Toumani Touré nur einen Monat vor geplanten Wahlen. Die Putschführer, frustriert über den Umgang der Regierung mit einem Tuareg-Aufstand in Nordmali, übernahmen die Kontrolle über den Präsidentenpalast in Bamako. Der Putsch schuf ein Machtvakuum, das es islamischen Militanten ermöglichte, die Kontrolle über Nordmali zu erlangen. Internationaler Druck führte schließlich zu einer Rückkehr zur Zivilregierung, und der Putsch hob die regionale Instabilität in der Sahelzone Afrikas hervor.",
          nl: "Op 11 april 2012 organiseerden rebellen soldaten een militaire staatsgreep in Mali, waarbij president Amadou Toumani Touré werd afgezet slechts een maand voor de geplande verkiezingen. De leiders van de staatsgreep, gefrustreerd over de aanpak van de regering van een Toeareg-opstand in het noorden van Mali, grepen de controle over het presidentieel paleis in Bamako. De staatsgreep creëerde een machtsvacuüm dat islamitische militanten in staat stelde controle over het noorden van Mali te krijgen. Internationale druk leidde uiteindelijk tot een terugkeer naar burgerlijk bestuur, en de staatsgreep benadrukte de regionale instabiliteit in de Sahel-regio van Afrika."
        }
      },
      {
        question: {
          en: "On April 11, 1951, President Harry S. Truman made a controversial decision during the Korean War. What did he do?",
          es: "El 11 de abril de 1951, el presidente Harry S. Truman tomó una decisión controvertida durante la Guerra de Corea. ¿Qué hizo?",
          de: "Am 11. April 1951 traf Präsident Harry S. Truman während des Koreakrieges eine kontroverse Entscheidung. Was tat er?",
          nl: "Op 11 april 1951 nam president Harry S. Truman een controversiële beslissing tijdens de Koreaanse Oorlog. Wat deed hij?"
        },
        options: [
          { en: "Ended the Korean War", es: "Terminó la Guerra de Corea", de: "Beendete den Koreakrieg", nl: "Beëindigde de Koreaanse Oorlog" },
          { en: "Used nuclear weapons", es: "Usó armas nucleares", de: "Setzte Atomwaffen ein", nl: "Gebruikte kernwapens" },
          { en: "Relieved General Douglas MacArthur of his command", es: "Relevó al General Douglas MacArthur de su mando", de: "Enthob General Douglas MacArthur seines Kommandos", nl: "Onthief generaal Douglas MacArthur van zijn bevel" },
          { en: "Declared war on China", es: "Declaró la guerra a China", de: "Erklärte China den Krieg", nl: "Verklaarde China de oorlog" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 11, 1951, President Truman relieved General Douglas MacArthur of his command in Korea and Japan, one of the most controversial decisions in American military history. MacArthur had publicly disagreed with Truman's limited war strategy, advocating for attacking China directly and potentially using nuclear weapons. Truman believed MacArthur's insubordination threatened civilian control of the military. The decision sparked outrage among MacArthur's supporters, but Truman stood firm on the principle that military leaders must follow presidential directives. MacArthur returned to the US to a hero's welcome and addressed Congress.",
          es: "El 11 de abril de 1951, el presidente Truman relevó al General Douglas MacArthur de su mando en Corea y Japón, una de las decisiones más controvertidas en la historia militar estadounidense. MacArthur había expresado públicamente su desacuerdo con la estrategia de guerra limitada de Truman, abogando por atacar a China directamente y potencialmente usar armas nucleares. Truman creía que la insubordinación de MacArthur amenazaba el control civil de los militares. La decisión provocó indignación entre los partidarios de MacArthur, pero Truman se mantuvo firme en el principio de que los líderes militares deben seguir las directivas presidenciales. MacArthur regresó a EE. UU. con una bienvenida de héroe y se dirigió al Congreso.",
          de: "Am 11. April 1951 enthob Präsident Truman General Douglas MacArthur seines Kommandos in Korea und Japan, eine der umstrittensten Entscheidungen in der amerikanischen Militärgeschichte. MacArthur hatte öffentlich mit Trumans begrenzter Kriegsstrategie nicht übereingestimmt und dafür plädiert, China direkt anzugreifen und möglicherweise Atomwaffen einzusetzen. Truman glaubte, dass MacArthurs Insubordination die zivile Kontrolle über das Militär bedrohte. Die Entscheidung löste Empörung unter MacArthurs Unterstützern aus, aber Truman blieb beim Prinzip fest, dass Militärführer präsidiale Direktiven befolgen müssen. MacArthur kehrte in die USA zu einem Heldenempfang zurück und sprach vor dem Kongress.",
          nl: "Op 11 april 1951 onthief president Truman generaal Douglas MacArthur van zijn bevel in Korea en Japan, een van de meest controversiële beslissingen in de Amerikaanse militaire geschiedenis. MacArthur had publiekelijk niet ingestemd met Truman's beperkte oorlogsstrategie en pleitte voor het direct aanvallen van China en mogelijk het gebruik van kernwapens. Truman geloofde dat MacArthurs insubordinatie de civiele controle over het leger bedreigde. De beslissing veroorzaakte woede onder MacArthur's aanhangers, maar Truman bleef standvastig bij het principe dat militaire leiders presidentiële richtlijnen moeten volgen. MacArthur keerde terug naar de VS met een heldenontvangst en sprak voor het Congres."
        }
      },
      {
        question: {
          en: "On April 11, 1968, President Lyndon B. Johnson signed which landmark legislation that prohibited discrimination in housing?",
          es: "El 11 de abril de 1968, el presidente Lyndon B. Johnson firmó qué legislación histórica que prohibía la discriminación en la vivienda?",
          de: "Am 11. April 1968 unterzeichnete Präsident Lyndon B. Johnson welche wegweisende Gesetzgebung, die Diskriminierung im Wohnungswesen verbot?",
          nl: "Op 11 april 1968 ondertekende president Lyndon B. Johnson welke baanbrekende wetgeving die discriminatie in huisvesting verbood?"
        },
        options: [
          { en: "Americans with Disabilities Act", es: "Ley de Estadounidenses con Discapacidades", de: "Gesetz über Amerikaner mit Behinderungen", nl: "Americans with Disabilities Act" },
          { en: "Civil Rights Act of 1968 (Fair Housing Act)", es: "Ley de Derechos Civiles de 1968 (Ley de Vivienda Justa)", de: "Bürgerrechtsgesetz von 1968 (Fair Housing Act)", nl: "Civil Rights Act van 1968 (Fair Housing Act)" },
          { en: "Voting Rights Act", es: "Ley de Derechos de Voto", de: "Wahlrechtsgesetz", nl: "Stemrechtenwet" },
          { en: "Equal Employment Opportunity Act", es: "Ley de Igualdad de Oportunidades de Empleo", de: "Gesetz über Chancengleichheit am Arbeitsplatz", nl: "Wet Gelijke Kansen in Werk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 11, 1968, President Johnson signed the Civil Rights Act of 1968, also known as the Fair Housing Act, which prohibited discrimination in housing based on race, religion, or national origin. The law came just one week after the assassination of Dr. Martin Luther King Jr. on April 4, 1968, and was partly driven by the national grief and riots that followed. The Act made it illegal to refuse to sell or rent housing to anyone based on protected characteristics. It was later amended to include sex, familial status, and disability as protected classes.",
          es: "El 11 de abril de 1968, el presidente Johnson firmó la Ley de Derechos Civiles de 1968, también conocida como la Ley de Vivienda Justa, que prohibía la discriminación en la vivienda basada en raza, religión u origen nacional. La ley llegó solo una semana después del asesinato del Dr. Martin Luther King Jr. el 4 de abril de 1968, y fue impulsada en parte por el duelo nacional y los disturbios que siguieron. La Ley hizo ilegal negarse a vender o alquilar vivienda a cualquier persona basándose en características protegidas. Posteriormente se enmendó para incluir sexo, estado familiar y discapacidad como clases protegidas.",
          de: "Am 11. April 1968 unterzeichnete Präsident Johnson das Bürgerrechtsgesetz von 1968, auch bekannt als Fair Housing Act, das Diskriminierung im Wohnungswesen aufgrund von Rasse, Religion oder nationaler Herkunft verbot. Das Gesetz kam nur eine Woche nach der Ermordung von Dr. Martin Luther King Jr. am 4. April 1968 und wurde teilweise durch die nationale Trauer und die Unruhen angetrieben, die folgten. Das Gesetz machte es illegal, jemandem aufgrund geschützter Merkmale den Verkauf oder die Vermietung von Wohnraum zu verweigern. Es wurde später geändert, um Geschlecht, Familienstand und Behinderung als geschützte Klassen einzuschließen.",
          nl: "Op 11 april 1968 ondertekende president Johnson de Civil Rights Act van 1968, ook bekend als de Fair Housing Act, die discriminatie in huisvesting verbood op basis van ras, religie of nationale afkomst. De wet kwam slechts een week na de moord op Dr. Martin Luther King Jr. op 4 april 1968 en werd deels gedreven door het nationale verdriet en de rellen die volgden. De wet maakte het illegaal om te weigeren huisvesting te verkopen of verhuren aan iemand op basis van beschermde kenmerken. Het werd later gewijzigd om geslacht, gezinsstatus en handicap op te nemen als beschermde klassen."
        }
      }
    ],
    day12: [
      {
        question: {
          en: "On April 12, 1961, Soviet cosmonaut Yuri Gagarin became the first human in space. How long did his historic orbital flight last?",
          es: "El 12 de abril de 1961, el cosmonauta soviético Yuri Gagarin se convirtió en el primer humano en el espacio. ¿Cuánto duró su histórico vuelo orbital?",
          de: "Am 12. April 1961 wurde der sowjetische Kosmonaut Juri Gagarin der erste Mensch im Weltraum. Wie lange dauerte sein historischer Orbitalflug?",
          nl: "Op 12 april 1961 werd de Sovjet-kosmonaut Yuri Gagarin de eerste mens in de ruimte. Hoe lang duurde zijn historische orbitale vlucht?"
        },
        options: [
          { en: "3 hours", es: "3 horas", de: "3 Stunden", nl: "3 uur" },
          { en: "45 minutes", es: "45 minutos", de: "45 Minuten", nl: "45 minuten" },
          { en: "24 hours", es: "24 horas", de: "24 Stunden", nl: "24 uur" },
          { en: "108 minutes", es: "108 minutos", de: "108 Minuten", nl: "108 minuten" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Yuri Gagarin's historic flight aboard Vostok 1 lasted 108 minutes, during which he completed one orbit of Earth at a maximum altitude of 187 miles. The 27-year-old cosmonaut became the first human to journey into outer space and orbit the planet. Traveling at 27,400 kilometers per hour, Gagarin's spacecraft was controlled entirely by automatic systems. He parachuted separately from his capsule after ejecting at 7 km altitude. This achievement launched the space age and is now celebrated annually as the International Day of Human Space Flight.",
          es: "El histórico vuelo de Yuri Gagarin a bordo del Vostok 1 duró 108 minutos, durante los cuales completó una órbita de la Tierra a una altitud máxima de 187 millas. El cosmonauta de 27 años se convirtió en el primer humano en viajar al espacio exterior y orbitar el planeta. Viajando a 27,400 kilómetros por hora, la nave espacial de Gagarin fue controlada completamente por sistemas automáticos. Se lanzó en paracaídas separadamente de su cápsula después de eyectarse a 7 km de altitud. Este logro lanzó la era espacial y ahora se celebra anualmente como el Día Internacional del Vuelo Espacial Humano.",
          de: "Juri Gagarins historischer Flug an Bord von Wostok 1 dauerte 108 Minuten, während derer er eine Erdumrundung in einer maximalen Höhe von 187 Meilen absolvierte. Der 27-jährige Kosmonaut wurde der erste Mensch, der in den Weltraum reiste und den Planeten umkreiste. Mit 27.400 Kilometern pro Stunde wurde Gagarins Raumschiff vollständig von automatischen Systemen gesteuert. Er sprang separat von seiner Kapsel mit dem Fallschirm ab, nachdem er sich in 7 km Höhe ausgestoßen hatte. Diese Errungenschaft läutete das Weltraumzeitalter ein und wird heute jährlich als Internationaler Tag der bemannten Raumfahrt gefeiert.",
          nl: "Yuri Gagarin's historische vlucht aan boord van Vostok 1 duurde 108 minuten, waarin hij één baan om de aarde voltooide op een maximale hoogte van 187 mijl. De 27-jarige kosmonaut werd de eerste mens die de ruimte inging en de planeet omcirkelde. Reizend met 27.400 kilometer per uur werd Gagarin's ruimtevaartuig volledig bestuurd door automatische systemen. Hij landde apart van zijn capsule met een parachute na te zijn uitgestoten op 7 km hoogte. Deze prestatie lanceerde het ruimtetijdperk en wordt nu jaarlijks gevierd als de Internationale Dag van de Bemande Ruimtevaart."
        }
      },
      {
        question: {
          en: "On April 12, 1861, which event marked the beginning of the American Civil War?",
          es: "El 12 de abril de 1861, ¿qué evento marcó el comienzo de la Guerra Civil Estadounidense?",
          de: "Am 12. April 1861 markierte welches Ereignis den Beginn des Amerikanischen Bürgerkriegs?",
          nl: "Op 12 april 1861 markeerde welke gebeurtenis het begin van de Amerikaanse Burgeroorlog?"
        },
        options: [
          { en: "Battle of Gettysburg began", es: "Comenzó la Batalla de Gettysburg", de: "Die Schlacht von Gettysburg begann", nl: "De Slag bij Gettysburg begon" },
          { en: "Sherman's March to the Sea started", es: "Comenzó la Marcha de Sherman al Mar", de: "Shermans Marsch zum Meer begann", nl: "Sherman's Mars naar de Zee begon" },
          { en: "Confederate forces fired on Fort Sumter", es: "Las fuerzas confederadas dispararon contra Fort Sumter", de: "Konföderierte Truppen feuerten auf Fort Sumter", nl: "Zuidelijke troepen vuurden op Fort Sumter" },
          { en: "Lincoln issued Emancipation Proclamation", es: "Lincoln emitió la Proclamación de Emancipación", de: "Lincoln erließ die Emanzipationsproklamation", nl: "Lincoln vaardigde de Emancipatie Proclamatie uit" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 12, 1861, Confederate shore batteries under General Pierre G.T. Beauregard opened fire on Union-held Fort Sumter in Charleston Harbor, South Carolina. During the 34-hour bombardment, 50 Confederate guns and mortars fired more than 4,000 rounds at the fort. U.S. Major Robert Anderson surrendered on April 13. The attack on Fort Sumter marked the official beginning of the American Civil War, which would last four years and claim over 600,000 lives. President Lincoln called for 75,000 volunteers to suppress the rebellion.",
          es: "El 12 de abril de 1861, las baterías costeras confederadas bajo el General Pierre G.T. Beauregard abrieron fuego contra el Fort Sumter controlado por la Unión en el puerto de Charleston, Carolina del Sur. Durante el bombardeo de 34 horas, 50 cañones y morteros confederados dispararon más de 4,000 proyectiles al fuerte. El Mayor estadounidense Robert Anderson se rindió el 13 de abril. El ataque a Fort Sumter marcó el comienzo oficial de la Guerra Civil Estadounidense, que duraría cuatro años y cobraría más de 600,000 vidas. El presidente Lincoln pidió 75,000 voluntarios para suprimir la rebelión.",
          de: "Am 12. April 1861 eröffneten konföderierte Küstenbatterien unter General Pierre G.T. Beauregard das Feuer auf das von der Union gehaltene Fort Sumter im Hafen von Charleston, South Carolina. Während des 34-stündigen Bombardements feuerten 50 konföderierte Geschütze und Mörser mehr als 4.000 Granaten auf das Fort ab. US-Major Robert Anderson kapitulierte am 13. April. Der Angriff auf Fort Sumter markierte den offiziellen Beginn des Amerikanischen Bürgerkriegs, der vier Jahre dauern und über 600.000 Menschenleben fordern sollte. Präsident Lincoln rief 75.000 Freiwillige auf, die Rebellion zu unterdrücken.",
          nl: "Op 12 april 1861 openden Zuidelijke kustbatterijen onder generaal Pierre G.T. Beauregard het vuur op het door de Unie beheerde Fort Sumter in Charleston Harbor, South Carolina. Tijdens het 34 uur durende bombardement vuurden 50 Zuidelijke kanonnen en mortieren meer dan 4.000 rondes af op het fort. U.S. Majoor Robert Anderson gaf zich over op 13 april. De aanval op Fort Sumter markeerde het officiële begin van de Amerikaanse Burgeroorlog, die vier jaar zou duren en meer dan 600.000 levens zou kosten. President Lincoln riep 75.000 vrijwilligers op om de opstand te onderdrukken."
        }
      },
      {
        question: {
          en: "On April 12, 1945, which U.S. President died suddenly in Warm Springs, Georgia, leading Vice President Harry Truman to assume office?",
          es: "El 12 de abril de 1945, ¿qué presidente de EE. UU. murió repentinamente en Warm Springs, Georgia, llevando al vicepresidente Harry Truman a asumir el cargo?",
          de: "Am 12. April 1945 starb welcher US-Präsident plötzlich in Warm Springs, Georgia, was Vizepräsident Harry Truman veranlasste, das Amt zu übernehmen?",
          nl: "Op 12 april 1945 stierf welke Amerikaanse president plotseling in Warm Springs, Georgia, waardoor vicepresident Harry Truman het ambt overnam?"
        },
        options: [
          { en: "Warren G. Harding", es: "Warren G. Harding", de: "Warren G. Harding", nl: "Warren G. Harding" },
          { en: "Woodrow Wilson", es: "Woodrow Wilson", de: "Woodrow Wilson", nl: "Woodrow Wilson" },
          { en: "Franklin D. Roosevelt", es: "Franklin D. Roosevelt", de: "Franklin D. Roosevelt", nl: "Franklin D. Roosevelt" },
          { en: "Theodore Roosevelt", es: "Theodore Roosevelt", de: "Theodore Roosevelt", nl: "Theodore Roosevelt" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 12, 1945, President Franklin D. Roosevelt died of a cerebral hemorrhage at his retreat in Warm Springs, Georgia, at age 63. He had served as president for over 12 years, leading America through the Great Depression and most of World War II. Vice President Harry S. Truman was sworn in as the 33rd president that evening. Roosevelt's death came less than a month before Germany's surrender in World War II. Truman faced enormous challenges, including deciding to use atomic bombs against Japan and managing post-war reconstruction.",
          es: "El 12 de abril de 1945, el presidente Franklin D. Roosevelt murió de una hemorragia cerebral en su retiro en Warm Springs, Georgia, a los 63 años. Había servido como presidente durante más de 12 años, liderando a Estados Unidos a través de la Gran Depresión y la mayor parte de la Segunda Guerra Mundial. El vicepresidente Harry S. Truman prestó juramento como el 33º presidente esa noche. La muerte de Roosevelt ocurrió menos de un mes antes de la rendición de Alemania en la Segunda Guerra Mundial. Truman enfrentó desafíos enormes, incluida la decisión de usar bombas atómicas contra Japón y gestionar la reconstrucción de posguerra.",
          de: "Am 12. April 1945 starb Präsident Franklin D. Roosevelt an einer Gehirnblutung in seinem Rückzugsort in Warm Springs, Georgia, im Alter von 63 Jahren. Er hatte über 12 Jahre als Präsident gedient und Amerika durch die Große Depression und den größten Teil des Zweiten Weltkriegs geführt. Vizepräsident Harry S. Truman wurde an diesem Abend als 33. Präsident vereidigt. Roosevelts Tod kam weniger als einen Monat vor Deutschlands Kapitulation im Zweiten Weltkrieg. Truman stand vor enormen Herausforderungen, einschließlich der Entscheidung, Atombomben gegen Japan einzusetzen und den Wiederaufbau nach dem Krieg zu verwalten.",
          nl: "Op 12 april 1945 stierf president Franklin D. Roosevelt aan een hersenbloeding in zijn toevluchtsoord in Warm Springs, Georgia, op 63-jarige leeftijd. Hij had meer dan 12 jaar als president gediend en Amerika door de Grote Depressie en het grootste deel van de Tweede Wereldoorlog geleid. Vicepresident Harry S. Truman werd die avond beëdigd als de 33e president. Roosevelts dood kwam minder dan een maand voor de overgave van Duitsland in de Tweede Wereldoorlog. Truman stond voor enorme uitdagingen, waaronder de beslissing om atoombommen tegen Japan te gebruiken en de wederopbouw na de oorlog te beheren."
        }
      },
      {
        question: {
          en: "On April 12, 1981, NASA launched which spacecraft, marking the first flight of a reusable space shuttle?",
          es: "El 12 de abril de 1981, la NASA lanzó qué nave espacial, marcando el primer vuelo de un transbordador espacial reutilizable?",
          de: "Am 12. April 1981 startete die NASA welches Raumfahrzeug und markierte damit den ersten Flug eines wiederverwendbaren Space Shuttles?",
          nl: "Op 12 april 1981 lanceerde NASA welk ruimtevaartuig, dat de eerste vlucht van een herbruikbare ruimteveer markeerde?"
        },
        options: [
          { en: "Space Shuttle Endeavour", es: "Transbordador Espacial Endeavour", de: "Space Shuttle Endeavour", nl: "Spaceshuttle Endeavour" },
          { en: "Space Shuttle Columbia (STS-1)", es: "Transbordador Espacial Columbia (STS-1)", de: "Space Shuttle Columbia (STS-1)", nl: "Spaceshuttle Columbia (STS-1)" },
          { en: "Space Shuttle Challenger", es: "Transbordador Espacial Challenger", de: "Space Shuttle Challenger", nl: "Spaceshuttle Challenger" },
          { en: "Space Shuttle Discovery", es: "Transbordador Espacial Discovery", de: "Space Shuttle Discovery", nl: "Spaceshuttle Discovery" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 12, 1981, twenty years to the day after Yuri Gagarin's historic spaceflight, NASA launched Space Shuttle Columbia on mission STS-1, the first flight of the Space Shuttle program. Astronauts John Young and Robert Crippen piloted the spacecraft on a 54-hour mission that completed 36 orbits of Earth. Columbia successfully touched down at Edwards Air Force Base in California on April 14. The shuttle represented a new era of reusable spacecraft, designed to be launched multiple times, unlike previous single-use capsules.",
          es: "El 12 de abril de 1981, veinte años después del día del histórico vuelo espacial de Yuri Gagarin, la NASA lanzó el Transbordador Espacial Columbia en la misión STS-1, el primer vuelo del programa del Transbordador Espacial. Los astronautas John Young y Robert Crippen pilotaron la nave espacial en una misión de 54 horas que completó 36 órbitas de la Tierra. Columbia aterrizó con éxito en la Base de la Fuerza Aérea Edwards en California el 14 de abril. El transbordador representó una nueva era de naves espaciales reutilizables, diseñadas para ser lanzadas varias veces, a diferencia de las cápsulas de un solo uso anteriores.",
          de: "Am 12. April 1981, genau zwanzig Jahre nach Juri Gagarins historischem Raumflug, startete die NASA das Space Shuttle Columbia auf der Mission STS-1, dem ersten Flug des Space-Shuttle-Programms. Die Astronauten John Young und Robert Crippen steuerten das Raumfahrzeug auf einer 54-Stunden-Mission, die 36 Erdumrundungen absolvierte. Columbia landete erfolgreich auf der Edwards Air Force Base in Kalifornien am 14. April. Das Shuttle repräsentierte eine neue Ära wiederverwendbarer Raumfahrzeuge, die mehrfach gestartet werden sollten, im Gegensatz zu früheren Einweg-Kapseln.",
          nl: "Op 12 april 1981, precies twintig jaar na Yuri Gagarin's historische ruimtevlucht, lanceerde NASA de Space Shuttle Columbia op missie STS-1, de eerste vlucht van het Space Shuttle programma. Astronauten John Young en Robert Crippen bestuurden het ruimtevaartuig op een 54 uur durende missie die 36 banen om de aarde voltooide. Columbia landde succesvol op Edwards Air Force Base in Californië op 14 april. De shuttle vertegenwoordigde een nieuw tijdperk van herbruikbare ruimtevaartuigen, ontworpen om meerdere keren gelanceerd te worden, in tegenstelling tot eerdere capsules voor eenmalig gebruik."
        }
      },
      {
        question: {
          en: "On April 12, 1955, Jonas Salk announced successful trials of his vaccine against which deadly disease?",
          es: "El 12 de abril de 1955, Jonas Salk anunció pruebas exitosas de su vacuna contra qué enfermedad mortal?",
          de: "Am 12. April 1955 verkündete Jonas Salk erfolgreiche Versuche seines Impfstoffs gegen welche tödliche Krankheit?",
          nl: "Op 12 april 1955 kondigde Jonas Salk succesvolle proeven aan van zijn vaccin tegen welke dodelijke ziekte?"
        },
        options: [
          { en: "Tuberculosis", es: "Tuberculosis", de: "Tuberkulose", nl: "Tuberculose" },
          { en: "Smallpox", es: "Viruela", de: "Pocken", nl: "Pokken" },
          { en: "Measles", es: "Sarampión", de: "Masern", nl: "Mazelen" },
          { en: "Polio (poliomyelitis)", es: "Polio (poliomielitis)", de: "Kinderlähmung (Poliomyelitis)", nl: "Polio (poliomyelitis)" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 12, 1955, Dr. Jonas Salk announced that his polio vaccine was safe and effective, following extensive field trials involving nearly 2 million children. The announcement was made at the University of Michigan and was met with tremendous celebration across America. Polio had paralyzed thousands of children annually and caused widespread fear. The vaccine was declared 'safe, effective, and potent.' Mass vaccination campaigns began immediately, dramatically reducing polio cases. By 1979, polio was eliminated from the United States. Salk refused to patent the vaccine, saying 'Could you patent the sun?'",
          es: "El 12 de abril de 1955, el Dr. Jonas Salk anunció que su vacuna contra la polio era segura y efectiva, después de extensas pruebas de campo que involucraron a casi 2 millones de niños. El anuncio se realizó en la Universidad de Michigan y fue recibido con tremenda celebración en toda América. La polio había paralizado a miles de niños anualmente y causaba miedo generalizado. La vacuna fue declarada 'segura, efectiva y potente'. Las campañas de vacunación masiva comenzaron inmediatamente, reduciendo dramáticamente los casos de polio. Para 1979, la polio fue eliminada de Estados Unidos. Salk se negó a patentar la vacuna, diciendo '¿Podrías patentar el sol?'",
          de: "Am 12. April 1955 verkündete Dr. Jonas Salk, dass sein Polio-Impfstoff sicher und wirksam war, nach umfangreichen Feldversuchen mit fast 2 Millionen Kindern. Die Ankündigung erfolgte an der Universität von Michigan und wurde in ganz Amerika mit großer Freude aufgenommen. Polio hatte jährlich Tausende von Kindern gelähmt und weit verbreitete Angst verursacht. Der Impfstoff wurde als 'sicher, wirksam und potent' erklärt. Massenimpfkampagnen begannen sofort und reduzierten die Polio-Fälle dramatisch. Bis 1979 war Polio aus den Vereinigten Staaten eliminiert. Salk weigerte sich, den Impfstoff zu patentieren, und sagte: 'Könnten Sie die Sonne patentieren?'",
          nl: "Op 12 april 1955 kondigde Dr. Jonas Salk aan dat zijn poliovaccin veilig en effectief was, na uitgebreide veldproeven met bijna 2 miljoen kinderen. De aankondiging werd gedaan aan de Universiteit van Michigan en werd met enorme viering door heel Amerika ontvangen. Polio had jaarlijks duizenden kinderen verlamd en zorgde voor wijdverbreide angst. Het vaccin werd verklaard als 'veilig, effectief en krachtig'. Massale vaccinatiecampagnes begonnen onmiddellijk en verminderden het aantal poliogevallen dramatisch. Tegen 1979 was polio geëlimineerd uit de Verenigde Staten. Salk weigerde het vaccin te patenteren en zei: 'Zou je de zon kunnen patenteren?'"
        }
      }
    ],
    day13: [
      {
        question: {
          en: "On April 13, 1743, which Founding Father and future U.S. President was born at Shadwell Plantation in Virginia?",
          es: "El 13 de abril de 1743, ¿qué Padre Fundador y futuro presidente de EE. UU. nació en la Plantación Shadwell en Virginia?",
          de: "Am 13. April 1743 wurde welcher Gründervater und zukünftige US-Präsident auf der Shadwell Plantation in Virginia geboren?",
          nl: "Op 13 april 1743 werd welke Founding Father en toekomstige Amerikaanse president geboren op Shadwell Plantation in Virginia?"
        },
        options: [
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Thomas Jefferson was born on April 13, 1743 (New Style calendar), at Shadwell Plantation in Virginia. He became the third President of the United States (1801-1809) and was the primary author of the Declaration of Independence. Jefferson was a polymath who made significant contributions to politics, architecture, education, and science. He founded the University of Virginia and doubled the size of the United States through the Louisiana Purchase. His birthday was officially recognized by President Franklin D. Roosevelt in 1938 through Presidential Proclamation 2276.",
          es: "Thomas Jefferson nació el 13 de abril de 1743 (calendario de Nuevo Estilo), en la Plantación Shadwell en Virginia. Se convirtió en el tercer presidente de los Estados Unidos (1801-1809) y fue el autor principal de la Declaración de Independencia. Jefferson fue un polímata que hizo contribuciones significativas a la política, la arquitectura, la educación y la ciencia. Fundó la Universidad de Virginia y duplicó el tamaño de Estados Unidos a través de la Compra de Luisiana. Su cumpleaños fue reconocido oficialmente por el presidente Franklin D. Roosevelt en 1938 a través de la Proclamación Presidencial 2276.",
          de: "Thomas Jefferson wurde am 13. April 1743 (Gregorianischer Kalender) auf der Shadwell Plantation in Virginia geboren. Er wurde der dritte Präsident der Vereinigten Staaten (1801-1809) und war der Hauptautor der Unabhängigkeitserklärung. Jefferson war ein Universalgelehrter, der bedeutende Beiträge zur Politik, Architektur, Bildung und Wissenschaft leistete. Er gründete die Universität von Virginia und verdoppelte die Größe der Vereinigten Staaten durch den Louisiana-Kauf. Sein Geburtstag wurde 1938 durch die Präsidialproklamation 2276 von Präsident Franklin D. Roosevelt offiziell anerkannt.",
          nl: "Thomas Jefferson werd geboren op 13 april 1743 (Nieuwe Stijl kalender), op Shadwell Plantation in Virginia. Hij werd de derde president van de Verenigde Staten (1801-1809) en was de belangrijkste auteur van de Onafhankelijkheidsverklaring. Jefferson was een veelzijdig geleerde die belangrijke bijdragen leverde aan politiek, architectuur, onderwijs en wetenschap. Hij stichtte de Universiteit van Virginia en verdubbelde de grootte van de Verenigde Staten door de Louisiana Purchase. Zijn verjaardag werd officieel erkend door president Franklin D. Roosevelt in 1938 door Presidentiële Proclamatie 2276."
        }
      },
      {
        question: {
          en: "On April 13, 1970, an oxygen tank explosion occurred on Apollo 13. How far from Earth was the spacecraft when this happened?",
          es: "El 13 de abril de 1970, ocurrió una explosión de tanque de oxígeno en el Apollo 13. ¿A qué distancia de la Tierra estaba la nave espacial cuando esto sucedió?",
          de: "Am 13. April 1970 ereignete sich eine Sauerstofftank-Explosion bei Apollo 13. Wie weit von der Erde entfernt war das Raumschiff, als dies geschah?",
          nl: "Op 13 april 1970 vond een zuurstoftank explosie plaats op Apollo 13. Hoe ver van de aarde was het ruimtevaartuig toen dit gebeurde?"
        },
        options: [
          { en: "500,000 miles from Earth", es: "500,000 millas de la Tierra", de: "500.000 Meilen von der Erde entfernt", nl: "500.000 mijl van de aarde" },
          { en: "10,000 miles from Earth", es: "10,000 millas de la Tierra", de: "10.000 Meilen von der Erde entfernt", nl: "10.000 mijl van de aarde" },
          { en: "50,000 miles from Earth", es: "50,000 millas de la Tierra", de: "50.000 Meilen von der Erde entfernt", nl: "50.000 mijl van de aarde" },
          { en: "200,000 miles from Earth", es: "200,000 millas de la Tierra", de: "200.000 Meilen von der Erde entfernt", nl: "200.000 mijl van de aarde" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 13, 1970, at 9:08 PM, an oxygen tank exploded on Apollo 13 when the spacecraft was 200,000 miles from Earth. Two days after launch on April 11, astronaut Jack Swigert reported 'Houston, we've had a problem.' The explosion crippled the spacecraft's service module, forcing the crew to abandon their moon landing mission. Astronauts James Lovell, John Swigert, and Fred Haise used the lunar module as a lifeboat for their return journey. They successfully splashed down on April 17, making it one of NASA's most dramatic rescues.",
          es: "El 13 de abril de 1970, a las 9:08 PM, un tanque de oxígeno explotó en el Apollo 13 cuando la nave espacial estaba a 200,000 millas de la Tierra. Dos días después del lanzamiento el 11 de abril, el astronauta Jack Swigert reportó 'Houston, tenemos un problema'. La explosión paralizó el módulo de servicio de la nave espacial, obligando a la tripulación a abandonar su misión de aterrizaje lunar. Los astronautas James Lovell, John Swigert y Fred Haise usaron el módulo lunar como bote salvavidas para su viaje de regreso. Amerizaron con éxito el 17 de abril, convirtiéndola en uno de los rescates más dramáticos de la NASA.",
          de: "Am 13. April 1970 um 21:08 Uhr explodierte ein Sauerstofftank bei Apollo 13, als das Raumschiff 200.000 Meilen von der Erde entfernt war. Zwei Tage nach dem Start am 11. April meldete Astronaut Jack Swigert 'Houston, wir haben ein Problem'. Die Explosion lähmte das Servicemodul des Raumschiffs und zwang die Besatzung, ihre Mondlandungsmission aufzugeben. Die Astronauten James Lovell, John Swigert und Fred Haise nutzten das Mondmodul als Rettungsboot für ihre Rückreise. Sie wasserten erfolgreich am 17. April, was es zu einer der dramatischsten Rettungsaktionen der NASA machte.",
          nl: "Op 13 april 1970 om 21:08 uur explodeerde een zuurstoftank op Apollo 13 toen het ruimtevaartuig 200.000 mijl van de aarde was. Twee dagen na de lancering op 11 april meldde astronaut Jack Swigert 'Houston, we hebben een probleem'. De explosie verlamde de servicemodule van het ruimtevaartuig, waardoor de bemanning hun maanlandingsmissie moest opgeven. Astronauten James Lovell, John Swigert en Fred Haise gebruikten de maanmodule als reddingsboot voor hun terugreis. Ze maakten succesvol een waterlanding op 17 april, waardoor het een van NASA's meest dramatische reddingen werd."
        }
      },
      {
        question: {
          en: "On April 13, 1870, which famous American art institution was incorporated in New York City?",
          es: "El 13 de abril de 1870, ¿qué famosa institución de arte estadounidense fue incorporada en la ciudad de Nueva York?",
          de: "Am 13. April 1870 wurde welche berühmte amerikanische Kunstinstitution in New York City gegründet?",
          nl: "Op 13 april 1870 werd welke beroemde Amerikaanse kunstinstelling opgericht in New York City?"
        },
        options: [
          { en: "The Whitney Museum", es: "El Museo Whitney", de: "Das Whitney Museum", nl: "Het Whitney Museum" },
          { en: "The Museum of Modern Art (MoMA)", es: "El Museo de Arte Moderno (MoMA)", de: "Das Museum of Modern Art (MoMA)", nl: "Het Museum of Modern Art (MoMA)" },
          { en: "The Metropolitan Museum of Art", es: "El Museo Metropolitano de Arte", de: "Das Metropolitan Museum of Art", nl: "Het Metropolitan Museum of Art" },
          { en: "The Guggenheim Museum", es: "El Museo Guggenheim", de: "Das Guggenheim Museum", nl: "Het Guggenheim Museum" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 13, 1870, the Legislature of the State of New York granted an act of incorporation formally establishing The Metropolitan Museum of Art. The museum's charter outlined its purpose: 'establishing and maintaining a Museum and Library of Art, encouraging and developing the Study of the Fine Arts, and advancing the general knowledge of kindred subjects.' The Met opened to the public on February 20, 1872, in the Dodworth Building on Fifth Avenue. In 1880, the museum moved to its current location on Fifth Avenue at 82nd Street, where it has become one of the world's largest and most visited art museums.",
          es: "El 13 de abril de 1870, la Legislatura del Estado de Nueva York otorgó un acta de incorporación que estableció formalmente el Museo Metropolitano de Arte. La carta del museo delineó su propósito: 'establecer y mantener un Museo y Biblioteca de Arte, fomentar y desarrollar el Estudio de las Bellas Artes, y avanzar el conocimiento general de temas afines'. El Met abrió al público el 20 de febrero de 1872 en el Edificio Dodworth en la Quinta Avenida. En 1880, el museo se mudó a su ubicación actual en la Quinta Avenida en la calle 82, donde se ha convertido en uno de los museos de arte más grandes y visitados del mundo.",
          de: "Am 13. April 1870 gewährte die Legislative des Staates New York eine Gründungsurkunde, die das Metropolitan Museum of Art formell etablierte. Die Satzung des Museums umriss seinen Zweck: 'Einrichtung und Erhaltung eines Museums und einer Kunstbibliothek, Förderung und Entwicklung des Studiums der schönen Künste und Förderung des allgemeinen Wissens verwandter Themen.' Das Met öffnete am 20. Februar 1872 im Dodworth Building an der Fifth Avenue für die Öffentlichkeit. 1880 zog das Museum an seinen heutigen Standort an der Fifth Avenue Ecke 82. Straße, wo es zu einem der größten und meistbesuchten Kunstmuseen der Welt geworden ist.",
          nl: "Op 13 april 1870 verleende de Wetgever van de Staat New York een oprichtingsakte die formeel het Metropolitan Museum of Art oprichtte. Het charter van het museum schetste zijn doel: 'het oprichten en onderhouden van een Museum en Bibliotheek van Kunst, het aanmoedigen en ontwikkelen van de Studie van de Schone Kunsten, en het bevorderen van de algemene kennis van verwante onderwerpen.' Het Met opende voor het publiek op 20 februari 1872 in het Dodworth Building aan Fifth Avenue. In 1880 verhuisde het museum naar zijn huidige locatie aan Fifth Avenue op 82nd Street, waar het een van 's werelds grootste en meest bezochte kunstmusea is geworden."
        }
      },
      {
        question: {
          en: "On April 13, 1943, during World War II, which tragic massacre of Polish officers by Soviet forces was announced by Nazi Germany?",
          es: "El 13 de abril de 1943, durante la Segunda Guerra Mundial, ¿qué trágica masacre de oficiales polacos por fuerzas soviéticas fue anunciada por la Alemania Nazi?",
          de: "Am 13. April 1943 wurde während des Zweiten Weltkriegs welches tragische Massaker an polnischen Offizieren durch sowjetische Streitkräfte von Nazi-Deutschland angekündigt?",
          nl: "Op 13 april 1943 werd tijdens de Tweede Wereldoorlog welke tragische bloedbad van Poolse officieren door Sovjet-troepen aangekondigd door nazi-Duitsland?"
        },
        options: [
          { en: "Katyn Massacre", es: "Masacre de Katyn", de: "Massaker von Katyn", nl: "Bloedbad van Katyn" },
          { en: "Warsaw Uprising", es: "Levantamiento de Varsovia", de: "Warschauer Aufstand", nl: "Opstand van Warschau" },
          { en: "Lidice Massacre", es: "Masacre de Lidice", de: "Massaker von Lidice", nl: "Bloedbad van Lidice" },
          { en: "Babi Yar Massacre", es: "Masacre de Babi Yar", de: "Massaker von Babyn Jar", nl: "Bloedbad van Babi Yar" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 13, 1943, Nazi Germany announced the discovery of mass graves in the Katyn Forest near Smolensk, containing the bodies of approximately 22,000 Polish military officers and intellectuals executed by Soviet secret police in 1940. The Soviets blamed the Nazis for the massacre, a lie maintained until 1990. The revelation caused a diplomatic crisis between the Polish government-in-exile and the Soviet Union. The Katyn Massacre remains a deeply painful chapter in Polish history, symbolizing the betrayal of Poland by both Nazi Germany and the Soviet Union during World War II.",
          es: "El 13 de abril de 1943, la Alemania Nazi anunció el descubrimiento de fosas comunes en el Bosque de Katyn cerca de Smolensk, que contenían los cuerpos de aproximadamente 22,000 oficiales militares polacos e intelectuales ejecutados por la policía secreta soviética en 1940. Los soviéticos culparon a los nazis por la masacre, una mentira mantenida hasta 1990. La revelación causó una crisis diplomática entre el gobierno polaco en el exilio y la Unión Soviética. La Masacre de Katyn sigue siendo un capítulo profundamente doloroso en la historia polaca, simbolizando la traición de Polonia tanto por la Alemania Nazi como por la Unión Soviética durante la Segunda Guerra Mundial.",
          de: "Am 13. April 1943 gab Nazi-Deutschland die Entdeckung von Massengräbern im Wald von Katyn bei Smolensk bekannt, die die Leichen von etwa 22.000 polnischen Militäroffizieren und Intellektuellen enthielten, die 1940 von der sowjetischen Geheimpolizei hingerichtet wurden. Die Sowjets beschuldigten die Nazis für das Massaker, eine Lüge, die bis 1990 aufrechterhalten wurde. Die Enthüllung verursachte eine diplomatische Krise zwischen der polnischen Exilregierung und der Sowjetunion. Das Massaker von Katyn bleibt ein zutiefst schmerzhaftes Kapitel in der polnischen Geschichte und symbolisiert den Verrat Polens durch Nazi-Deutschland und die Sowjetunion während des Zweiten Weltkriegs.",
          nl: "Op 13 april 1943 kondigde nazi-Duitsland de ontdekking aan van massagraven in het Katyn-bos bij Smolensk, met de lichamen van ongeveer 22.000 Poolse militaire officieren en intellectuelen die in 1940 door de Sovjet-geheime politie waren geëxecuteerd. De Sovjets gaven de nazi's de schuld van het bloedbad, een leugen die tot 1990 werd gehandhaafd. De onthulling veroorzaakte een diplomatieke crisis tussen de Poolse regering in ballingschap en de Sovjet-Unie. Het Bloedbad van Katyn blijft een diep pijnlijk hoofdstuk in de Poolse geschiedenis en symboliseert het verraad van Polen door zowel nazi-Duitsland als de Sovjet-Unie tijdens de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "On April 13, 2029, what astronomical event is predicted to occur when asteroid Apophis passes extremely close to Earth?",
          es: "El 13 de abril de 2029, ¿qué evento astronómico se predice que ocurrirá cuando el asteroide Apophis pase extremadamente cerca de la Tierra?",
          de: "Am 13. April 2029 wird vorhergesagt, dass welches astronomische Ereignis eintritt, wenn der Asteroid Apophis extrem nah an der Erde vorbeifliegt?",
          nl: "Op 13 april 2029 wordt voorspeld dat welke astronomische gebeurtenis zal plaatsvinden wanneer asteroïde Apophis extreem dicht bij de aarde passeert?"
        },
        options: [
          { en: "A close approach visible to the naked eye", es: "Un acercamiento cercano visible a simple vista", de: "Eine nahe Begegnung, die mit bloßem Auge sichtbar ist", nl: "Een nabije passage zichtbaar met het blote oog" },
          { en: "Breaking apart into fragments", es: "Fragmentándose en pedazos", de: "Zerbrechen in Fragmente", nl: "Uiteenvallen in fragmenten" },
          { en: "Collision with the Moon", es: "Colisión con la Luna", de: "Kollision mit dem Mond", nl: "Botsing met de maan" },
          { en: "An impact with Earth", es: "Un impacto con la Tierra", de: "Ein Einschlag auf der Erde", nl: "Een inslag op aarde" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 13, 2029, asteroid 99942 Apophis will pass within approximately 31,000 kilometers (19,000 miles) of Earth's surface, closer than many communication satellites. This will be the closest approach of an asteroid this size in recorded history. Apophis will be visible to the naked eye from some locations, appearing as a bright point of light moving across the sky. Scientists have determined there is no risk of collision. This rare event will provide valuable opportunities for astronomical observation and research into near-Earth objects.",
          es: "El 13 de abril de 2029, el asteroide 99942 Apophis pasará a aproximadamente 31,000 kilómetros (19,000 millas) de la superficie de la Tierra, más cerca que muchos satélites de comunicaciones. Este será el acercamiento más cercano de un asteroide de este tamaño en la historia registrada. Apophis será visible a simple vista desde algunas ubicaciones, apareciendo como un punto brillante de luz moviéndose a través del cielo. Los científicos han determinado que no hay riesgo de colisión. Este raro evento proporcionará valiosas oportunidades para la observación astronómica y la investigación de objetos cercanos a la Tierra.",
          de: "Am 13. April 2029 wird der Asteroid 99942 Apophis in etwa 31.000 Kilometern (19.000 Meilen) Entfernung an der Erdoberfläche vorbeifliegen, näher als viele Kommunikationssatelliten. Dies wird die nächste Begegnung eines Asteroiden dieser Größe in der aufgezeichneten Geschichte sein. Apophis wird von einigen Orten aus mit bloßem Auge sichtbar sein und als heller Lichtpunkt erscheinen, der sich über den Himmel bewegt. Wissenschaftler haben festgestellt, dass keine Kollisionsgefahr besteht. Dieses seltene Ereignis wird wertvolle Möglichkeiten für astronomische Beobachtungen und Forschungen zu erdnahen Objekten bieten.",
          nl: "Op 13 april 2029 zal asteroïde 99942 Apophis binnen ongeveer 31.000 kilometer (19.000 mijl) van het aardoppervlak passeren, dichterbij dan veel communicatiesatellieten. Dit zal de dichtstbijzijnde passage van een asteroïde van deze grootte zijn in de geschreven geschiedenis. Apophis zal vanaf sommige locaties zichtbaar zijn met het blote oog en verschijnen als een helder lichtpunt dat over de hemel beweegt. Wetenschappers hebben vastgesteld dat er geen risico op botsing is. Deze zeldzame gebeurtenis zal waardevolle mogelijkheden bieden voor astronomische waarneming en onderzoek naar aardscherende objecten."
        }
      }
    ],
    day14: [
      {
        question: {
          en: "On April 14, 1865, at which Washington, D.C. theater was President Abraham Lincoln shot by John Wilkes Booth?",
          es: "El 14 de abril de 1865, ¿en qué teatro de Washington, D.C. fue disparado el presidente Abraham Lincoln por John Wilkes Booth?",
          de: "Am 14. April 1865 wurde Präsident Abraham Lincoln in welchem Theater in Washington, D.C. von John Wilkes Booth erschossen?",
          nl: "Op 14 april 1865 werd president Abraham Lincoln in welk theater in Washington, D.C. neergeschoten door John Wilkes Booth?"
        },
        options: [
          { en: "Kennedy Center", es: "Centro Kennedy", de: "Kennedy Center", nl: "Kennedy Center" },
          { en: "National Theatre", es: "Teatro Nacional", de: "Nationaltheater", nl: "Nationaal Theater" },
          { en: "Warner Theatre", es: "Teatro Warner", de: "Warner Theatre", nl: "Warner Theatre" },
          { en: "Ford's Theatre", es: "Teatro Ford", de: "Ford's Theatre", nl: "Ford's Theatre" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 14, 1865, President Abraham Lincoln was shot at Ford's Theatre while watching the play 'Our American Cousin.' Actor John Wilkes Booth entered the presidential box at approximately 10:15 PM and shot Lincoln in the back of the head. Lincoln was carried across the street to the Petersen House, where he died the following morning at 7:22 AM. This was the first presidential assassination in U.S. history, occurring just five days after General Lee's surrender at Appomattox. Vice President Andrew Johnson was sworn in as the 17th president.",
          es: "El 14 de abril de 1865, el presidente Abraham Lincoln recibió un disparo en el Teatro Ford mientras veía la obra 'Nuestro Primo Americano'. El actor John Wilkes Booth entró en el palco presidencial aproximadamente a las 10:15 PM y disparó a Lincoln en la parte posterior de la cabeza. Lincoln fue llevado al otro lado de la calle a la Casa Petersen, donde murió a la mañana siguiente a las 7:22 AM. Este fue el primer asesinato presidencial en la historia de EE. UU., ocurriendo solo cinco días después de la rendición del General Lee en Appomattox. El vicepresidente Andrew Johnson prestó juramento como el 17º presidente.",
          de: "Am 14. April 1865 wurde Präsident Abraham Lincoln im Ford's Theatre erschossen, während er das Stück 'Our American Cousin' ansah. Der Schauspieler John Wilkes Booth betrat gegen 22:15 Uhr die Präsidentenloge und schoss Lincoln in den Hinterkopf. Lincoln wurde über die Straße zum Petersen House getragen, wo er am folgenden Morgen um 7:22 Uhr starb. Dies war das erste Präsidentenattentat in der Geschichte der USA und ereignete sich nur fünf Tage nach General Lees Kapitulation in Appomattox. Vizepräsident Andrew Johnson wurde als 17. Präsident vereidigt.",
          nl: "Op 14 april 1865 werd president Abraham Lincoln neergeschoten in Ford's Theatre terwijl hij naar het toneelstuk 'Our American Cousin' keek. Acteur John Wilkes Booth betrad de presidentiële loge rond 22:15 uur en schoot Lincoln in het achterhoofd. Lincoln werd naar het Petersen House aan de overkant van de straat gedragen, waar hij de volgende ochtend om 7:22 uur stierf. Dit was de eerste presidentiële moord in de geschiedenis van de VS en vond plaats slechts vijf dagen na generaal Lee's overgave in Appomattox. Vicepresident Andrew Johnson werd beëdigd als de 17e president."
        }
      },
      {
        question: {
          en: "On April 14, 1912, at what time did the RMS Titanic strike an iceberg in the North Atlantic Ocean?",
          es: "El 14 de abril de 1912, ¿a qué hora chocó el RMS Titanic con un iceberg en el Océano Atlántico Norte?",
          de: "Am 14. April 1912, um welche Uhrzeit kollidierte die RMS Titanic mit einem Eisberg im Nordatlantik?",
          nl: "Op 14 april 1912, op welk tijdstip raakte de RMS Titanic een ijsberg in de Noord-Atlantische Oceaan?"
        },
        options: [
          { en: "3:15 AM", es: "3:15 AM", de: "3:15 Uhr", nl: "3:15 uur" },
          { en: "1:00 AM", es: "1:00 AM", de: "1:00 Uhr", nl: "1:00 uur" },
          { en: "11:40 PM", es: "11:40 PM", de: "23:40 Uhr", nl: "23:40 uur" },
          { en: "9:30 PM", es: "9:30 PM", de: "21:30 Uhr", nl: "21:30 uur" }
        ],
        correctIndex: 2,
        explanation: {
          en: "At 11:40 PM on April 14, 1912, the RMS Titanic struck an iceberg during its maiden voyage from Southampton to New York. The ship had received multiple iceberg warnings but maintained high speed through dangerous waters. Lookouts Frederick Fleet and Reginald Lee spotted the iceberg and rang the warning bell, but it was too late to avoid collision. The iceberg scraped along the starboard side, creating openings below the waterline. The Titanic sank two hours and forty minutes later at 2:20 AM on April 15, claiming over 1,500 lives.",
          es: "A las 11:40 PM del 14 de abril de 1912, el RMS Titanic chocó con un iceberg durante su viaje inaugural de Southampton a Nueva York. El barco había recibido múltiples advertencias de icebergs pero mantuvo alta velocidad a través de aguas peligrosas. Los vigías Frederick Fleet y Reginald Lee avistaron el iceberg y tocaron la campana de advertencia, pero era demasiado tarde para evitar la colisión. El iceberg raspó a lo largo del lado de estribor, creando aberturas debajo de la línea de flotación. El Titanic se hundió dos horas y cuarenta minutos después a las 2:20 AM del 15 de abril, cobrando más de 1,500 vidas.",
          de: "Um 23:40 Uhr am 14. April 1912 kollidierte die RMS Titanic während ihrer Jungfernfahrt von Southampton nach New York mit einem Eisberg. Das Schiff hatte mehrere Eisberg-Warnungen erhalten, hielt aber hohe Geschwindigkeit durch gefährliche Gewässer. Die Ausguckposten Frederick Fleet und Reginald Lee entdeckten den Eisberg und läuteten die Warnungsglocke, aber es war zu spät, um die Kollision zu vermeiden. Der Eisberg schrammte entlang der Steuerbordseite und schuf Öffnungen unterhalb der Wasserlinie. Die Titanic sank zwei Stunden und vierzig Minuten später um 2:20 Uhr am 15. April und forderte über 1.500 Menschenleben.",
          nl: "Om 23:40 uur op 14 april 1912 raakte de RMS Titanic een ijsberg tijdens haar eerste reis van Southampton naar New York. Het schip had meerdere ijsbergwaarschuwingen ontvangen maar behield hoge snelheid door gevaarlijke wateren. Uitkijkposten Frederick Fleet en Reginald Lee zagen de ijsberg en luidden de waarschuwingsbel, maar het was te laat om de botsing te vermijden. De ijsberg schuurde langs de stuurboordzijde en creëerde openingen onder de waterlijn. De Titanic zonk twee uur en veertig minuten later om 2:20 uur op 15 april, waarbij meer dan 1.500 levens verloren gingen."
        }
      },
      {
        question: {
          en: "On April 14, 1935, which devastating environmental disaster struck the Great Plains, earning the name 'Black Sunday'?",
          es: "El 14 de abril de 1935, ¿qué devastador desastre ambiental golpeó las Grandes Llanuras, ganándose el nombre de 'Domingo Negro'?",
          de: "Am 14. April 1935 ereignete sich welche verheerende Umweltkatastrophe in den Great Plains, die den Namen 'Schwarzer Sonntag' erhielt?",
          nl: "Op 14 april 1935 trof welke verwoestende milieuramp de Great Plains, die de naam 'Zwarte Zondag' kreeg?"
        },
        options: [
          { en: "A massive dust storm", es: "Una tormenta de polvo masiva", de: "Ein massiver Staubsturm", nl: "Een enorme stofstorm" },
          { en: "A severe tornado outbreak", es: "Un brote severo de tornados", de: "Ein schwerer Tornado-Ausbruch", nl: "Een hevige tornado-uitbraak" },
          { en: "A catastrophic flood", es: "Una inundación catastrófica", de: "Eine katastrophale Überschwemmung", nl: "Een catastrofale overstroming" },
          { en: "A major earthquake", es: "Un terremoto importante", de: "Ein großes Erdbeben", nl: "Een grote aardbeving" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 14, 1935, known as 'Black Sunday,' one of the most devastating dust storms of the Dust Bowl era swept across the Great Plains. The wall of dust, estimated at 500 to 600 feet in height, moved at 50 to 60 mph, turning a sunny afternoon into complete darkness. Decades of over-planting and three years of severe drought had stripped the land of vegetation, allowing topsoil to blow away. Reporter Robert E. Geiger coined the term 'Dust Bowl' after this storm. The disaster led to the Soil Conservation Act of 1935.",
          es: "El 14 de abril de 1935, conocido como 'Domingo Negro', una de las tormentas de polvo más devastadoras de la era del Dust Bowl barrió las Grandes Llanuras. El muro de polvo, estimado en 500 a 600 pies de altura, se movió a 50 a 60 mph, convirtiendo una tarde soleada en oscuridad completa. Décadas de sobreplantación y tres años de sequía severa habían despojado a la tierra de vegetación, permitiendo que la capa superior del suelo volara. El reportero Robert E. Geiger acuñó el término 'Dust Bowl' después de esta tormenta. El desastre condujo a la Ley de Conservación del Suelo de 1935.",
          de: "Am 14. April 1935, bekannt als 'Schwarzer Sonntag', fegte einer der verheerendsten Staubstürme der Dust-Bowl-Ära über die Great Plains. Die Staubwand, geschätzt auf 500 bis 600 Fuß Höhe, bewegte sich mit 50 bis 60 mph und verwandelte einen sonnigen Nachmittag in völlige Dunkelheit. Jahrzehnte der Übernutzung und drei Jahre schwerer Dürre hatten das Land der Vegetation beraubt und ermöglichten es dem Mutterboden wegzuwehen. Reporter Robert E. Geiger prägte nach diesem Sturm den Begriff 'Dust Bowl'. Die Katastrophe führte zum Bodenschutzgesetz von 1935.",
          nl: "Op 14 april 1935, bekend als 'Zwarte Zondag', trok een van de meest verwoestende stofstormen van het Dust Bowl-tijdperk over de Great Plains. De muur van stof, geschat op 500 tot 600 voet hoog, bewoog met 50 tot 60 mph en veranderde een zonnige middag in volledige duisternis. Decennia van overplanting en drie jaar van ernstige droogte hadden het land van vegetatie beroofd, waardoor de bovengrond kon wegwaaien. Reporter Robert E. Geiger bedacht de term 'Dust Bowl' na deze storm. De ramp leidde tot de Bodembeschermingswet van 1935."
        }
      },
      {
        question: {
          en: "On April 14, 2003, scientists announced they had successfully completed mapping what groundbreaking scientific achievement?",
          es: "El 14 de abril de 2003, los científicos anunciaron que habían completado con éxito el mapeo de qué logro científico innovador?",
          de: "Am 14. April 2003 verkündeten Wissenschaftler, dass sie erfolgreich die Kartierung welcher bahnbrechenden wissenschaftlichen Errungenschaft abgeschlossen hatten?",
          nl: "Op 14 april 2003 kondigden wetenschappers aan dat ze met succes de kartering van welke baanbrekende wetenschappelijke prestatie hadden voltooid?"
        },
        options: [
          { en: "The ocean floor", es: "El fondo del océano", de: "Der Meeresboden", nl: "De oceaanbodem" },
          { en: "The complete Mars map", es: "El mapa completo de Marte", de: "Die vollständige Mars-Karte", nl: "De complete Mars-kaart" },
          { en: "The Human Genome Project", es: "El Proyecto del Genoma Humano", de: "Das Humangenomprojekt", nl: "Het Humaan Genoomproject" },
          { en: "The Amazon rainforest", es: "La selva amazónica", de: "Der Amazonas-Regenwald", nl: "Het Amazone-regenwoud" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 14, 2003, scientists announced the successful completion of the Human Genome Project, which mapped all the genes in human DNA. The project began in 1990 and involved researchers from six countries. The complete sequence contained approximately 3 billion DNA base pairs. This achievement revolutionized medicine, allowing for better understanding of genetic diseases, personalized medicine, and evolutionary biology. The project was completed ahead of schedule and under budget, marking one of the most significant scientific accomplishments of the 21st century.",
          es: "El 14 de abril de 2003, los científicos anunciaron la finalización exitosa del Proyecto del Genoma Humano, que mapeó todos los genes en el ADN humano. El proyecto comenzó en 1990 e involucró a investigadores de seis países. La secuencia completa contenía aproximadamente 3 mil millones de pares de bases de ADN. Este logro revolucionó la medicina, permitiendo una mejor comprensión de las enfermedades genéticas, la medicina personalizada y la biología evolutiva. El proyecto se completó antes de lo programado y por debajo del presupuesto, marcando uno de los logros científicos más significativos del siglo XXI.",
          de: "Am 14. April 2003 verkündeten Wissenschaftler den erfolgreichen Abschluss des Humangenomprojekts, das alle Gene in der menschlichen DNA kartierte. Das Projekt begann 1990 und umfasste Forscher aus sechs Ländern. Die vollständige Sequenz enthielt ungefähr 3 Milliarden DNA-Basenpaare. Diese Errungenschaft revolutionierte die Medizin und ermöglichte ein besseres Verständnis genetischer Krankheiten, personalisierte Medizin und Evolutionsbiologie. Das Projekt wurde vor dem Zeitplan und unter dem Budget abgeschlossen und markierte eine der bedeutendsten wissenschaftlichen Errungenschaften des 21. Jahrhunderts.",
          nl: "Op 14 april 2003 kondigden wetenschappers de succesvolle voltooiing aan van het Humaan Genoomproject, dat alle genen in menselijk DNA in kaart bracht. Het project begon in 1990 en omvatte onderzoekers uit zes landen. De volledige sequentie bevatte ongeveer 3 miljard DNA-basenparen. Deze prestatie revolutioneerde de geneeskunde en maakte een beter begrip mogelijk van genetische ziekten, gepersonaliseerde geneeskunde en evolutionaire biologie. Het project werd voor schema en onder budget voltooid en markeerde een van de meest significante wetenschappelijke prestaties van de 21e eeuw."
        }
      },
      {
        question: {
          en: "On April 14, 1828, which dictionary pioneer published the first edition of his American English dictionary?",
          es: "El 14 de abril de 1828, ¿qué pionero de los diccionarios publicó la primera edición de su diccionario de inglés americano?",
          de: "Am 14. April 1828 veröffentlichte welcher Wörterbuch-Pionier die erste Ausgabe seines amerikanisch-englischen Wörterbuchs?",
          nl: "Op 14 april 1828 publiceerde welke woordenboek-pionier de eerste editie van zijn Amerikaans-Engels woordenboek?"
        },
        options: [
          { en: "Samuel Johnson", es: "Samuel Johnson", de: "Samuel Johnson", nl: "Samuel Johnson" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Daniel Webster", es: "Daniel Webster", de: "Daniel Webster", nl: "Daniel Webster" },
          { en: "Noah Webster", es: "Noah Webster", de: "Noah Webster", nl: "Noah Webster" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 14, 1828, Noah Webster published 'An American Dictionary of the English Language,' containing 70,000 words, including 12,000 that had never appeared in any dictionary before. Webster spent 27 years compiling the dictionary, learning 26 languages in the process. He established American spellings distinct from British English, such as 'color' instead of 'colour' and 'center' instead of 'centre.' Webster's dictionary became the standard reference for American English and continues today as Merriam-Webster, profoundly influencing American language and education.",
          es: "El 14 de abril de 1828, Noah Webster publicó 'Un Diccionario Americano de la Lengua Inglesa', que contenía 70,000 palabras, incluidas 12,000 que nunca habían aparecido en ningún diccionario antes. Webster pasó 27 años compilando el diccionario, aprendiendo 26 idiomas en el proceso. Estableció ortografías americanas distintas del inglés británico, como 'color' en lugar de 'colour' y 'center' en lugar de 'centre'. El diccionario de Webster se convirtió en la referencia estándar para el inglés americano y continúa hoy como Merriam-Webster, influyendo profundamente en el lenguaje y la educación estadounidense.",
          de: "Am 14. April 1828 veröffentlichte Noah Webster 'An American Dictionary of the English Language' mit 70.000 Wörtern, darunter 12.000, die noch nie zuvor in einem Wörterbuch erschienen waren. Webster verbrachte 27 Jahre mit der Zusammenstellung des Wörterbuchs und lernte dabei 26 Sprachen. Er etablierte amerikanische Schreibweisen, die sich vom britischen Englisch unterschieden, wie 'color' statt 'colour' und 'center' statt 'centre'. Websters Wörterbuch wurde zur Standardreferenz für amerikanisches Englisch und wird heute als Merriam-Webster fortgeführt, was die amerikanische Sprache und Bildung tiefgreifend beeinflusste.",
          nl: "Op 14 april 1828 publiceerde Noah Webster 'An American Dictionary of the English Language', met 70.000 woorden, waaronder 12.000 die nog nooit eerder in een woordenboek waren verschenen. Webster bracht 27 jaar door met het samenstellen van het woordenboek en leerde daarbij 26 talen. Hij vestigde Amerikaanse spellingen die afwijken van Brits Engels, zoals 'color' in plaats van 'colour' en 'center' in plaats van 'centre'. Websters woordenboek werd de standaardreferentie voor Amerikaans Engels en gaat vandaag door als Merriam-Webster, met een diepgaande invloed op de Amerikaanse taal en het onderwijs."
        }
      }
    ],
    day15: [
      {
        question: {
          en: "On April 15, 1912, at what time did the RMS Titanic finally sink beneath the Atlantic Ocean after hitting an iceberg?",
          es: "El 15 de abril de 1912, ¿a qué hora se hundió finalmente el RMS Titanic bajo el Océano Atlántico después de golpear un iceberg?",
          de: "Am 15. April 1912, um welche Uhrzeit sank die RMS Titanic endgültig im Atlantischen Ozean, nachdem sie einen Eisberg getroffen hatte?",
          nl: "Op 15 april 1912, op welk tijdstip zonk de RMS Titanic uiteindelijk onder de Atlantische Oceaan na het raken van een ijsberg?"
        },
        options: [
          { en: "4:00 AM", es: "4:00 AM", de: "4:00 Uhr", nl: "4:00 uur" },
          { en: "12:30 AM", es: "12:30 AM", de: "0:30 Uhr", nl: "0:30 uur" },
          { en: "2:20 AM", es: "2:20 AM", de: "2:20 Uhr", nl: "2:20 uur" },
          { en: "11:40 PM", es: "11:40 PM", de: "23:40 Uhr", nl: "23:40 uur" }
        ],
        correctIndex: 2,
        explanation: {
          en: "At 2:20 AM on April 15, 1912, the RMS Titanic broke apart and sank in the North Atlantic Ocean, two hours and forty minutes after striking an iceberg at 11:40 PM on April 14. The 'unsinkable' ship went down during its maiden voyage from Southampton to New York. Of the 2,224 passengers and crew aboard, only 710 survived. The tragedy resulted in major reforms in maritime safety, including requirements for sufficient lifeboats, 24-hour radio watch, and the establishment of the International Ice Patrol to monitor icebergs.",
          es: "A las 2:20 AM del 15 de abril de 1912, el RMS Titanic se partió y se hundió en el Océano Atlántico Norte, dos horas y cuarenta minutos después de golpear un iceberg a las 11:40 PM del 14 de abril. El barco 'insumergible' se hundió durante su viaje inaugural de Southampton a Nueva York. De los 2,224 pasajeros y tripulación a bordo, solo 710 sobrevivieron. La tragedia resultó en importantes reformas en la seguridad marítima, incluidos requisitos para botes salvavidas suficientes, vigilancia de radio las 24 horas y el establecimiento de la Patrulla Internacional del Hielo para monitorear icebergs.",
          de: "Um 2:20 Uhr am 15. April 1912 zerbrach und sank die RMS Titanic im Nordatlantik, zwei Stunden und vierzig Minuten nachdem sie um 23:40 Uhr am 14. April einen Eisberg getroffen hatte. Das 'unsinkbare' Schiff ging während seiner Jungfernfahrt von Southampton nach New York unter. Von den 2.224 Passagieren und Besatzungsmitgliedern an Bord überlebten nur 710. Die Tragödie führte zu größeren Reformen in der Schiffssicherheit, einschließlich Anforderungen für ausreichende Rettungsboote, 24-Stunden-Funkwache und der Einrichtung der Internationalen Eispatrouille zur Überwachung von Eisbergen.",
          nl: "Om 2:20 uur op 15 april 1912 brak de RMS Titanic uiteen en zonk in de Noord-Atlantische Oceaan, twee uur en veertig minuten nadat ze om 23:40 uur op 14 april een ijsberg had geraakt. Het 'onzinkbare' schip zonk tijdens haar eerste reis van Southampton naar New York. Van de 2.224 passagiers en bemanningsleden aan boord overleefden er slechts 710. De tragedie leidde tot grote hervormingen in de maritieme veiligheid, waaronder vereisten voor voldoende reddingsboten, 24-uurs radiowacht en de oprichting van de Internationale IJspatrouille om ijsbergen te monitoren."
        }
      },
      {
        question: {
          en: "On April 15, 1865, at what time did President Abraham Lincoln die from the gunshot wound inflicted the night before?",
          es: "El 15 de abril de 1865, ¿a qué hora murió el presidente Abraham Lincoln por la herida de bala infligida la noche anterior?",
          de: "Am 15. April 1865, um welche Uhrzeit starb Präsident Abraham Lincoln an der Schusswunde, die ihm in der Nacht zuvor zugefügt wurde?",
          nl: "Op 15 april 1865, op welk tijdstip stierf president Abraham Lincoln aan de schotwond die de avond ervoor was toegebracht?"
        },
        options: [
          { en: "10:15 PM", es: "10:15 PM", de: "22:15 Uhr", nl: "22:15 uur" },
          { en: "12:00 PM", es: "12:00 PM", de: "12:00 Uhr", nl: "12:00 uur" },
          { en: "3:00 AM", es: "3:00 AM", de: "3:00 Uhr", nl: "3:00 uur" },
          { en: "7:22 AM", es: "7:22 AM", de: "7:22 Uhr", nl: "7:22 uur" }
        ],
        correctIndex: 3,
        explanation: {
          en: "President Abraham Lincoln died at 7:22 AM on April 15, 1865, nine hours after being shot by John Wilkes Booth at Ford's Theatre. He was carried across the street to the Petersen House, where doctors attended to him throughout the night. The 16th president never regained consciousness after the assassination. Secretary of War Edwin Stanton reportedly said 'Now he belongs to the ages' at the moment of Lincoln's death. Vice President Andrew Johnson was sworn in as the 17th president later that day, facing the enormous challenge of post-Civil War reconstruction.",
          es: "El presidente Abraham Lincoln murió a las 7:22 AM del 15 de abril de 1865, nueve horas después de ser disparado por John Wilkes Booth en el Teatro Ford. Fue llevado al otro lado de la calle a la Casa Petersen, donde los médicos lo atendieron durante toda la noche. El 16º presidente nunca recuperó la consciencia después del asesinato. El Secretario de Guerra Edwin Stanton supuestamente dijo 'Ahora pertenece a las edades' en el momento de la muerte de Lincoln. El vicepresidente Andrew Johnson prestó juramento como el 17º presidente más tarde ese día, enfrentando el enorme desafío de la reconstrucción posterior a la Guerra Civil.",
          de: "Präsident Abraham Lincoln starb um 7:22 Uhr am 15. April 1865, neun Stunden nachdem er von John Wilkes Booth im Ford's Theatre erschossen worden war. Er wurde über die Straße zum Petersen House getragen, wo Ärzte ihn die ganze Nacht über versorgten. Der 16. Präsident erlangte nach dem Attentat nie wieder das Bewusstsein. Kriegsminister Edwin Stanton soll im Moment von Lincolns Tod gesagt haben: 'Jetzt gehört er den Zeitaltern'. Vizepräsident Andrew Johnson wurde später an diesem Tag als 17. Präsident vereidigt und stand vor der enormen Herausforderung des Wiederaufbaus nach dem Bürgerkrieg.",
          nl: "President Abraham Lincoln stierf om 7:22 uur op 15 april 1865, negen uur nadat hij door John Wilkes Booth was neergeschoten in Ford's Theatre. Hij werd naar het Petersen House aan de overkant van de straat gedragen, waar artsen hem de hele nacht verzorgden. De 16e president kreeg na de moordaanslag nooit meer het bewustzijn terug. Minister van Oorlog Edwin Stanton zou op het moment van Lincolns dood hebben gezegd: 'Nu behoort hij toe aan de eeuwen'. Vicepresident Andrew Johnson werd later die dag beëdigd als de 17e president en stond voor de enorme uitdaging van de wederopbouw na de Burgeroorlog."
        }
      },
      {
        question: {
          en: "On April 15, 1947, Jackie Robinson made his Major League Baseball debut, breaking the color barrier. Which team did he play for?",
          es: "El 15 de abril de 1947, Jackie Robinson hizo su debut en las Grandes Ligas de Béisbol, rompiendo la barrera del color. ¿Para qué equipo jugó?",
          de: "Am 15. April 1947 gab Jackie Robinson sein Major League Baseball Debüt und durchbrach die Rassengrenze. Für welches Team spielte er?",
          nl: "Op 15 april 1947 maakte Jackie Robinson zijn Major League Baseball debuut en doorbrak de kleurenbarrière. Voor welk team speelde hij?"
        },
        options: [
          { en: "Chicago Cubs", es: "Chicago Cubs", de: "Chicago Cubs", nl: "Chicago Cubs" },
          { en: "Boston Red Sox", es: "Boston Red Sox", de: "Boston Red Sox", nl: "Boston Red Sox" },
          { en: "New York Yankees", es: "New York Yankees", de: "New York Yankees", nl: "New York Yankees" },
          { en: "Brooklyn Dodgers", es: "Brooklyn Dodgers", de: "Brooklyn Dodgers", nl: "Brooklyn Dodgers" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 15, 1947, Jackie Robinson became the first African American to play in Major League Baseball in the modern era when he debuted for the Brooklyn Dodgers at Ebbets Field. Robinson faced intense racial discrimination and threats, but his exceptional talent and dignity helped break baseball's color barrier. He was signed by Dodgers general manager Branch Rickey. Robinson went on to become Rookie of the Year in 1947 and won the MVP award in 1949. Every MLB team now honors Jackie Robinson by retiring his number 42 across all teams.",
          es: "El 15 de abril de 1947, Jackie Robinson se convirtió en el primer afroamericano en jugar en las Grandes Ligas de Béisbol en la era moderna cuando debutó con los Brooklyn Dodgers en Ebbets Field. Robinson enfrentó intensa discriminación racial y amenazas, pero su talento excepcional y dignidad ayudaron a romper la barrera del color del béisbol. Fue fichado por el gerente general de los Dodgers, Branch Rickey. Robinson se convirtió en Novato del Año en 1947 y ganó el premio MVP en 1949. Cada equipo de las MLB ahora honra a Jackie Robinson retirando su número 42 en todos los equipos.",
          de: "Am 15. April 1947 wurde Jackie Robinson der erste Afroamerikaner, der in der modernen Ära in der Major League Baseball spielte, als er für die Brooklyn Dodgers im Ebbets Field debütierte. Robinson war intensiver Rassendiskriminierung und Drohungen ausgesetzt, aber sein außergewöhnliches Talent und seine Würde halfen, die Rassengrenze im Baseball zu durchbrechen. Er wurde vom Dodgers Generaldirektor Branch Rickey verpflichtet. Robinson wurde 1947 Rookie des Jahres und gewann 1949 den MVP-Award. Jedes MLB-Team ehrt jetzt Jackie Robinson, indem seine Nummer 42 bei allen Teams zurückgezogen wurde.",
          nl: "Op 15 april 1947 werd Jackie Robinson de eerste Afro-Amerikaan die in het moderne tijdperk in Major League Baseball speelde toen hij debuteerde voor de Brooklyn Dodgers in Ebbets Field. Robinson werd geconfronteerd met intense raciale discriminatie en bedreigingen, maar zijn uitzonderlijke talent en waardigheid hielpen de kleurenbarrière van het honkbal te doorbreken. Hij werd getekend door Dodgers general manager Branch Rickey. Robinson werd in 1947 Rookie van het Jaar en won in 1949 de MVP-prijs. Elk MLB-team eert nu Jackie Robinson door zijn nummer 42 bij alle teams terug te trekken."
        }
      },
      {
        question: {
          en: "On April 15, 2013, two bombs exploded near the finish line of which major sporting event, killing 3 people and injuring hundreds?",
          es: "El 15 de abril de 2013, dos bombas explotaron cerca de la línea de meta de qué importante evento deportivo, matando a 3 personas e hiriendo a cientos?",
          de: "Am 15. April 2013 explodierten zwei Bomben in der Nähe der Ziellinie welcher großen Sportveranstaltung, wobei 3 Menschen getötet und Hunderte verletzt wurden?",
          nl: "Op 15 april 2013 ontploften twee bommen bij de finish van welk groot sportevenement, waarbij 3 mensen werden gedood en honderden gewond raakten?"
        },
        options: [
          { en: "London Marathon", es: "Maratón de Londres", de: "London-Marathon", nl: "London Marathon" },
          { en: "New York City Marathon", es: "Maratón de Nueva York", de: "New York City Marathon", nl: "New York City Marathon" },
          { en: "Chicago Marathon", es: "Maratón de Chicago", de: "Chicago-Marathon", nl: "Chicago Marathon" },
          { en: "Boston Marathon", es: "Maratón de Boston", de: "Boston-Marathon", nl: "Boston Marathon" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 15, 2013, two pressure cooker bombs exploded near the finish line of the Boston Marathon, killing 3 people and injuring more than 260 others. The attack occurred at 2:49 PM, approximately three hours after the winners had crossed the finish line. The perpetrators, brothers Dzhokhar and Tamerlan Tsarnaev, were identified through surveillance footage. A massive manhunt ensued, culminating in Tamerlan's death and Dzhokhar's capture. The phrase 'Boston Strong' became a rallying cry for the city's resilience. The marathon has continued annually as a symbol of determination.",
          es: "El 15 de abril de 2013, dos bombas de olla a presión explotaron cerca de la línea de meta del Maratón de Boston, matando a 3 personas e hiriendo a más de 260 otras. El ataque ocurrió a las 2:49 PM, aproximadamente tres horas después de que los ganadores habían cruzado la línea de meta. Los perpetradores, los hermanos Dzhokhar y Tamerlan Tsarnaev, fueron identificados a través de imágenes de vigilancia. Se produjo una búsqueda masiva, culminando en la muerte de Tamerlan y la captura de Dzhokhar. La frase 'Boston Strong' se convirtió en un grito de guerra para la resiliencia de la ciudad. El maratón ha continuado anualmente como símbolo de determinación.",
          de: "Am 15. April 2013 explodierten zwei Schnellkochtopf-Bomben in der Nähe der Ziellinie des Boston-Marathons, wobei 3 Menschen getötet und mehr als 260 weitere verletzt wurden. Der Angriff ereignete sich um 14:49 Uhr, etwa drei Stunden nachdem die Sieger die Ziellinie überquert hatten. Die Täter, die Brüder Dzhokhar und Tamerlan Tsarnaev, wurden durch Überwachungsaufnahmen identifiziert. Eine massive Fahndung folgte, die in Tamerlans Tod und Dzhokhars Festnahme gipfelte. Der Ausdruck 'Boston Strong' wurde zum Schlachtruf für die Widerstandsfähigkeit der Stadt. Der Marathon wird weiterhin jährlich als Symbol der Entschlossenheit durchgeführt.",
          nl: "Op 15 april 2013 ontploften twee snelkookpanbommen bij de finish van de Boston Marathon, waarbij 3 mensen werden gedood en meer dan 260 anderen gewond raakten. De aanval vond plaats om 14:49 uur, ongeveer drie uur nadat de winnaars de finish hadden bereikt. De daders, de broers Dzhokhar en Tamerlan Tsarnaev, werden geïdentificeerd via bewakingsbeelden. Een massale klopjacht volgde, culminerend in Tamerlan's dood en Dzhokhar's gevangenneming. De uitdrukking 'Boston Strong' werd een strijdkreet voor de veerkracht van de stad. De marathon wordt jaarlijks voortgezet als symbool van vastberadenheid."
        }
      },
      {
        question: {
          en: "On April 15, 2019, a devastating fire broke out at which iconic French landmark in Paris?",
          es: "El 15 de abril de 2019, se produjo un incendio devastador en qué punto de referencia icónico francés en París?",
          de: "Am 15. April 2019 brach ein verheerender Brand an welchem ikonischen französischen Wahrzeichen in Paris aus?",
          nl: "Op 15 april 2019 brak een verwoestende brand uit bij welk iconisch Frans monument in Parijs?"
        },
        options: [
          { en: "Arc de Triomphe", es: "Arco del Triunfo", de: "Arc de Triomphe", nl: "Arc de Triomphe" },
          { en: "Notre-Dame Cathedral", es: "Catedral de Notre-Dame", de: "Kathedrale Notre-Dame", nl: "Notre-Dame Kathedraal" },
          { en: "Louvre Museum", es: "Museo del Louvre", de: "Louvre Museum", nl: "Louvre Museum" },
          { en: "Eiffel Tower", es: "Torre Eiffel", de: "Eiffelturm", nl: "Eiffeltoren" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 15, 2019, a massive fire swept through Notre-Dame Cathedral in Paris while the landmark was undergoing renovations. The fire began around 6:30 PM and quickly spread across the roof and spire. The cathedral's iconic spire collapsed, and much of the wooden roof was destroyed. However, the main stone structure, including the two bell towers, was saved through the efforts of over 400 firefighters. The fire shocked the world, and French President Emmanuel Macron pledged to rebuild the 850-year-old Gothic masterpiece. Restoration efforts are ongoing.",
          es: "El 15 de abril de 2019, un incendio masivo arrasó la Catedral de Notre-Dame en París mientras el punto de referencia estaba siendo renovado. El incendio comenzó alrededor de las 6:30 PM y se propagó rápidamente por el techo y la aguja. La icónica aguja de la catedral se derrumbó y gran parte del techo de madera fue destruido. Sin embargo, la estructura de piedra principal, incluidas las dos torres de campanas, se salvó gracias a los esfuerzos de más de 400 bomberos. El incendio conmocionó al mundo, y el presidente francés Emmanuel Macron prometió reconstruir la obra maestra gótica de 850 años. Los esfuerzos de restauración están en curso.",
          de: "Am 15. April 2019 fegte ein massives Feuer durch die Kathedrale Notre-Dame in Paris, während das Wahrzeichen renoviert wurde. Das Feuer begann gegen 18:30 Uhr und breitete sich schnell über Dach und Turm aus. Der ikonische Turm der Kathedrale stürzte ein, und ein Großteil des Holzdachs wurde zerstört. Die Hauptsteinstruktur, einschließlich der beiden Glockentürme, wurde jedoch durch die Bemühungen von über 400 Feuerwehrleuten gerettet. Das Feuer schockierte die Welt, und der französische Präsident Emmanuel Macron versprach, das 850 Jahre alte gotische Meisterwerk wieder aufzubauen. Die Restaurierungsarbeiten sind im Gange.",
          nl: "Op 15 april 2019 raasde een massale brand door de Notre-Dame Kathedraal in Parijs terwijl het monument werd gerenoveerd. De brand begon rond 18:30 uur en verspreidde zich snel over het dak en de torenspits. De iconische torenspits van de kathedraal stortte in en een groot deel van het houten dak werd vernietigd. De belangrijkste stenen structuur, inclusief de twee klokkentorens, werd echter gered door de inspanningen van meer dan 400 brandweerlieden. De brand schokte de wereld en de Franse president Emmanuel Macron beloofde het 850 jaar oude gotische meesterwerk te herbouwen. Restauratiewerkzaamheden zijn gaande."
        }
      }
    ],

    // Day 16 - April 16th: Virginia Tech Shooting (2007) & Charlie Chaplin Born (1889)
    day16: [
      {
        question: {
          en: "On April 16, 2007, the Virginia Tech shooting became one of the deadliest mass shootings in U.S. history. How many people were killed by the gunman?",
          es: "El 16 de abril de 2007, el tiroteo de Virginia Tech se convirtió en uno de los tiroteos masivos más mortales en la historia de EE.UU. ¿Cuántas personas fueron asesinadas por el pistolero?",
          de: "Am 16. April 2007 wurde die Schießerei an der Virginia Tech zu einer der tödlichsten Massenerschießungen in der Geschichte der USA. Wie viele Menschen wurden von dem Schützen getötet?",
          nl: "Op 16 april 2007 werd de schietpartij op Virginia Tech een van de dodelijkste massa-schietpartijen in de Amerikaanse geschiedenis. Hoeveel mensen werden gedood door de schutter?"
        },
        options: [
          { en: "19 people", es: "19 personas", de: "19 Menschen", nl: "19 mensen" },
          { en: "45 people", es: "45 personas", de: "45 Menschen", nl: "45 mensen" },
          { en: "27 people", es: "27 personas", de: "27 Menschen", nl: "27 mensen" },
          { en: "32 people", es: "32 personas", de: "32 Menschen", nl: "32 mensen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 16, 2007, a student at Virginia Tech shot and killed 32 professors and students before taking his own life. The massacre began at 7:15 AM in a residence hall and continued at 9:40 AM in a classroom building. It was one of the deadliest mass shootings in U.S. history and led to widespread discussions about campus safety, mental health services, and gun control.",
          es: "El 16 de abril de 2007, un estudiante de Virginia Tech disparó y mató a 32 profesores y estudiantes antes de quitarse la vida. La masacre comenzó a las 7:15 AM en una residencia estudiantil y continuó a las 9:40 AM en un edificio de aulas. Fue uno de los tiroteos masivos más mortales en la historia de EE.UU. y llevó a discusiones generalizadas sobre seguridad en los campus, servicios de salud mental y control de armas.",
          de: "Am 16. April 2007 erschoss ein Student der Virginia Tech 32 Professoren und Studenten, bevor er sich das Leben nahm. Das Massaker begann um 7:15 Uhr in einem Wohnheim und setzte sich um 9:40 Uhr in einem Klassengebäude fort. Es war eine der tödlichsten Massenerschießungen in der Geschichte der USA und führte zu weitreichenden Diskussionen über Campus-Sicherheit, psychische Gesundheitsdienste und Waffenkontrolle.",
          nl: "Op 16 april 2007 schoot een student van Virginia Tech 32 professoren en studenten dood voordat hij zelfmoord pleegde. Het bloedbad begon om 7:15 uur in een studentenflat en ging om 9:40 uur verder in een klaslokaal. Het was een van de dodelijkste massa-schietpartijen in de Amerikaanse geschiedenis en leidde tot wijdverspreide discussies over campusveiligheid, geestelijke gezondheidszorg en wapenbeheersing."
        }
      },
      {
        question: {
          en: "On April 16, 1889, which legendary silent film actor and comedian was born in London?",
          es: "El 16 de abril de 1889, ¿qué legendario actor de cine mudo y comediante nació en Londres?",
          de: "Welcher legendäre Stummfilmschauspieler und Komiker wurde am 16. April 1889 in London geboren?",
          nl: "Op 16 april 1889, welke legendarische stomme film acteur en komiek werd geboren in Londen?"
        },
        options: [
          { en: "Harold Lloyd", es: "Harold Lloyd", de: "Harold Lloyd", nl: "Harold Lloyd" },
          { en: "Laurel and Hardy", es: "Laurel y Hardy", de: "Laurel und Hardy", nl: "Laurel en Hardy" },
          { en: "Buster Keaton", es: "Buster Keaton", de: "Buster Keaton", nl: "Buster Keaton" },
          { en: "Charlie Chaplin", es: "Charlie Chaplin", de: "Charlie Chaplin", nl: "Charlie Chaplin" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Charlie Chaplin was born Charles Spencer Chaplin in London on April 16, 1889. He became one of the most famous actors in early Hollywood, best known for his character 'The Tramp.' Chaplin directed and starred in 82 films, most of them comedies. In 1972, he received a special Academy Award, and in 1975, Queen Elizabeth II knighted him. He died in 1977, leaving an indelible mark on cinema history.",
          es: "Charlie Chaplin nació como Charles Spencer Chaplin en Londres el 16 de abril de 1889. Se convirtió en uno de los actores más famosos del Hollywood temprano, mejor conocido por su personaje 'El Vagabundo.' Chaplin dirigió y protagonizó 82 películas, la mayoría comedias. En 1972, recibió un premio especial de la Academia, y en 1975, la Reina Isabel II lo nombró caballero. Murió en 1977, dejando una marca indeleble en la historia del cine.",
          de: "Charlie Chaplin wurde am 16. April 1889 als Charles Spencer Chaplin in London geboren. Er wurde einer der berühmtesten Schauspieler im frühen Hollywood, am bekanntesten für seine Figur 'Der Landstreicher.' Chaplin führte Regie und spielte in 82 Filmen, die meisten davon Komödien. 1972 erhielt er einen speziellen Academy Award, und 1975 schlug ihn Königin Elizabeth II. zum Ritter. Er starb 1977 und hinterließ einen unvergesslichen Eindruck in der Kinogeschichte.",
          nl: "Charlie Chaplin werd geboren als Charles Spencer Chaplin in Londen op 16 april 1889. Hij werd een van de beroemdste acteurs in het vroege Hollywood, het best bekend om zijn personage 'De Landoper.' Chaplin regisseerde en speelde in 82 films, de meeste daarvan komedies. In 1972 ontving hij een speciale Academy Award, en in 1975 ridder koningin Elizabeth II hem. Hij stierf in 1977 en liet een onuitwisbare stempel achter op de filmgeschiedenis."
        }
      },
      {
        question: {
          en: "The Virginia Tech shooting lasted approximately how long from the first shots in the residence hall to the gunman's death?",
          es: "El tiroteo de Virginia Tech duró aproximadamente cuánto tiempo desde los primeros disparos en la residencia estudiantil hasta la muerte del pistolero?",
          de: "Wie lange dauerte die Schießerei an der Virginia Tech ungefähr von den ersten Schüssen im Wohnheim bis zum Tod des Schützen?",
          nl: "Hoe lang duurde de schietpartij op Virginia Tech ongeveer vanaf de eerste schoten in de studentenflat tot de dood van de schutter?"
        },
        options: [
          { en: "About 45 minutes", es: "Aproximadamente 45 minutos", de: "Etwa 45 Minuten", nl: "Ongeveer 45 minuten" },
          { en: "About 6 hours", es: "Aproximadamente 6 horas", de: "Etwa 6 Stunden", nl: "Ongeveer 6 uur" },
          { en: "About 30 minutes", es: "Aproximadamente 30 minutos", de: "Etwa 30 Minuten", nl: "Ongeveer 30 minuten" },
          { en: "About 2 hours", es: "Aproximadamente 2 horas", de: "Etwa 2 Stunden", nl: "Ongeveer 2 uur" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Virginia Tech shooting occurred in two separate attacks about two hours apart. The first shooting began at 7:15 AM in West Ambler Johnston Hall, killing two students. The second and deadlier attack began at 9:40 AM in Norris Hall, where the gunman chained doors and went room to room. Police stormed the building at approximately 10:00 AM, by which time the gunman had taken his own life. The tragedy prompted major reforms in campus emergency response systems.",
          es: "El tiroteo de Virginia Tech ocurrió en dos ataques separados con aproximadamente dos horas de diferencia. El primer tiroteo comenzó a las 7:15 AM en West Ambler Johnston Hall, matando a dos estudiantes. El segundo y más mortal ataque comenzó a las 9:40 AM en Norris Hall, donde el pistolero encadenó las puertas y fue de habitación en habitación. La policía irrumpió en el edificio aproximadamente a las 10:00 AM, momento en el cual el pistolero ya se había quitado la vida. La tragedia provocó importantes reformas en los sistemas de respuesta a emergencias en los campus.",
          de: "Die Schießerei an der Virginia Tech ereignete sich in zwei getrennten Angriffen im Abstand von etwa zwei Stunden. Die erste Schießerei begann um 7:15 Uhr in der West Ambler Johnston Hall und tötete zwei Studenten. Der zweite und tödlichere Angriff begann um 9:40 Uhr in der Norris Hall, wo der Schütze Türen verkettete und von Raum zu Raum ging. Die Polizei stürmte das Gebäude gegen 10:00 Uhr, zu diesem Zeitpunkt hatte sich der Schütze bereits das Leben genommen. Die Tragödie führte zu großen Reformen in Campus-Notfallsystemen.",
          nl: "De schietpartij op Virginia Tech vond plaats in twee afzonderlijke aanvallen met ongeveer twee uur tussentijd. De eerste schietpartij begon om 7:15 uur in West Ambler Johnston Hall en doodde twee studenten. De tweede en dodelijkere aanval begon om 9:40 uur in Norris Hall, waar de schutter deuren aan elkaar ketende en van kamer naar kamer ging. De politie bestormde het gebouw om ongeveer 10:00 uur, tegen die tijd had de schutter zelfmoord gepleegd. De tragedie leidde tot belangrijke hervormingen in campus-noodresponssystemen."
        }
      },
      {
        question: {
          en: "Which famous Charlie Chaplin character, featuring a bowler hat, cane, and toothbrush mustache, became his most iconic role?",
          es: "¿Qué famoso personaje de Charlie Chaplin, con un sombrero de hongo, bastón y bigote de cepillo de dientes, se convirtió en su papel más icónico?",
          de: "Welche berühmte Charlie-Chaplin-Figur mit Melone, Spazierstock und Zahnbürstenschnurrbart wurde seine ikonischste Rolle?",
          nl: "Welk beroemd personage van Charlie Chaplin, met een bolhoed, wandelstok en tandenborstelmoustache, werd zijn meest iconische rol?"
        },
        options: [
          { en: "The Great Dictator", es: "El Gran Dictador", de: "Der große Diktator", nl: "De Grote Dictator" },
          { en: "The Kid", es: "El Chico", de: "Das Kind", nl: "Het Kind" },
          { en: "Modern Times Man", es: "El Hombre de Tiempos Modernos", de: "Der Mann der modernen Zeiten", nl: "De Man van Moderne Tijden" },
          { en: "The Tramp", es: "El Vagabundo", de: "Der Landstreicher", nl: "De Landoper" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Charlie Chaplin's 'The Tramp' became one of the most recognizable characters in cinema history. First appearing in 1914, The Tramp was characterized by his distinctive costume: a bowler hat, tight jacket, oversized pants, large shoes, cane, and toothbrush mustache. Despite his shabby appearance, the character displayed dignity, kindness, and resilience. The Tramp appeared in dozens of Chaplin's films and became a symbol of the downtrodden but hopeful working class during the Great Depression era.",
          es: "El 'Vagabundo' de Charlie Chaplin se convirtió en uno de los personajes más reconocibles de la historia del cine. Apareciendo por primera vez en 1914, El Vagabundo se caracterizaba por su traje distintivo: un sombrero de hongo, chaqueta ajustada, pantalones grandes, zapatos grandes, bastón y bigote de cepillo de dientes. A pesar de su apariencia descuidada, el personaje mostraba dignidad, bondad y resistencia. El Vagabundo apareció en docenas de películas de Chaplin y se convirtió en un símbolo de la clase trabajadora oprimida pero esperanzada durante la era de la Gran Depresión.",
          de: "Charlie Chaplins 'Der Landstreicher' wurde zu einer der bekanntesten Figuren der Kinogeschichte. Der Landstreicher erschien erstmals 1914 und zeichnete sich durch sein charakteristisches Kostüm aus: eine Melone, eine enge Jacke, übergroße Hosen, große Schuhe, einen Spazierstock und einen Zahnbürstenschnurrbart. Trotz seines schäbigen Aussehens zeigte die Figur Würde, Freundlichkeit und Widerstandsfähigkeit. Der Landstreicher erschien in Dutzenden von Chaplins Filmen und wurde zu einem Symbol für die unterdrückte, aber hoffnungsvolle Arbeiterklasse während der Ära der Großen Depression.",
          nl: "Charlie Chaplins 'De Landoper' werd een van de meest herkenbare personages in de filmgeschiedenis. De Landoper verscheen voor het eerst in 1914 en werd gekenmerkt door zijn onderscheidende kostuum: een bolhoed, strakke jas, grote broek, grote schoenen, wandelstok en tandenborstelmoustache. Ondanks zijn sjofele uiterlijk toonde het personage waardigheid, vriendelijkheid en veerkracht. De Landoper verscheen in tientallen films van Chaplin en werd een symbool voor de onderdrukte maar hoopvolle arbeidersklasse tijdens het tijdperk van de Grote Depressie."
        }
      },
      {
        question: {
          en: "In what year did Charlie Chaplin return to the United States to accept a special Academy Award after years of controversy?",
          es: "¿En qué año regresó Charlie Chaplin a Estados Unidos para aceptar un premio especial de la Academia después de años de controversia?",
          de: "In welchem Jahr kehrte Charlie Chaplin in die Vereinigten Staaten zurück, um nach Jahren der Kontroverse einen speziellen Academy Award entgegenzunehmen?",
          nl: "In welk jaar keerde Charlie Chaplin terug naar de Verenigde Staten om een speciale Academy Award te accepteren na jaren van controverse?"
        },
        options: [
          { en: "1980", es: "1980", de: "1980", nl: "1980" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1972", es: "1972", de: "1972", nl: "1972" },
          { en: "1955", es: "1955", de: "1955", nl: "1955" }
        ],
        correctIndex: 2,
        explanation: {
          en: "In 1972, Charlie Chaplin returned to America for the first time in 20 years to accept a special Academy Award for 'the incalculable effect he has had on making motion pictures the art form of this century.' He had left the U.S. in 1952 amid controversy over his political views during the Red Scare era. The 1972 ceremony gave him a 12-minute standing ovation, one of the longest in Oscar history. He died in Switzerland in 1977 at age 88.",
          es: "En 1972, Charlie Chaplin regresó a América por primera vez en 20 años para aceptar un premio especial de la Academia por 'el efecto incalculable que ha tenido en hacer que las películas sean la forma de arte de este siglo.' Había dejado los EE.UU. en 1952 en medio de controversias sobre sus puntos de vista políticos durante la era del Miedo Rojo. La ceremonia de 1972 le dio una ovación de pie de 12 minutos, una de las más largas en la historia de los Oscar. Murió en Suiza en 1977 a los 88 años.",
          de: "1972 kehrte Charlie Chaplin zum ersten Mal seit 20 Jahren nach Amerika zurück, um einen speziellen Academy Award für 'die unkalkulierbare Wirkung, die er darauf hatte, Filme zur Kunstform dieses Jahrhunderts zu machen' entgegenzunehmen. Er hatte die USA 1952 inmitten von Kontroversen über seine politischen Ansichten während der Red Scare-Ära verlassen. Die Zeremonie von 1972 gab ihm eine 12-minütige stehende Ovation, eine der längsten in der Oscar-Geschichte. Er starb 1977 im Alter von 88 Jahren in der Schweiz.",
          nl: "In 1972 keerde Charlie Chaplin voor het eerst in 20 jaar terug naar Amerika om een speciale Academy Award te accepteren voor 'het onberekenbare effect dat hij heeft gehad op het maken van films tot de kunstvorm van deze eeuw.' Hij had de VS in 1952 verlaten te midden van controverses over zijn politieke opvattingen tijdens het Red Scare-tijdperk. De ceremonie van 1972 gaf hem een staande ovatie van 12 minuten, een van de langste in de Oscar-geschiedenis. Hij stierf in Zwitserland in 1977 op 88-jarige leeftijd."
        }
      }
    ],

    // Day 17 - April 17th: Bay of Pigs Invasion (1961) & Benjamin Franklin Dies (1790)
    day17: [
      {
        question: {
          en: "On April 17, 1961, which Caribbean country was invaded by Cuban exiles in the failed Bay of Pigs invasion?",
          es: "El 17 de abril de 1961, ¿qué país caribeño fue invadido por exiliados cubanos en la fallida invasión de Bahía de Cochinos?",
          de: "Welches karibische Land wurde am 17. April 1961 von kubanischen Exilanten in der gescheiterten Invasion der Schweinebucht angegriffen?",
          nl: "Op 17 april 1961, welk Caribisch land werd binnengevallen door Cubaanse ballingen tijdens de mislukte invasie van de Varkensbaai?"
        },
        options: [
          { en: "Haiti", es: "Haití", de: "Haiti", nl: "Haïti" },
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Dominican Republic", es: "República Dominicana", de: "Dominikanische Republik", nl: "Dominicaanse Republiek" },
          { en: "Jamaica", es: "Jamaica", de: "Jamaika", nl: "Jamaica" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 17, 1961, around 1,200 Cuban exiles landed at the Bay of Pigs in Cuba in a CIA-financed attempt to overthrow Fidel Castro's communist government. The invasion failed within two days due to rapid counterattacks by Castro's forces, lack of U.S. air support, and the absence of expected popular uprising. Over 100 attackers were killed and more than 1,100 were captured. This embarrassing failure severely damaged U.S.-Cuba relations and strengthened Castro's position.",
          es: "El 17 de abril de 1961, alrededor de 1,200 exiliados cubanos desembarcaron en Bahía de Cochinos en Cuba en un intento financiado por la CIA de derrocar al gobierno comunista de Fidel Castro. La invasión fracasó en dos días debido a rápidos contraataques de las fuerzas de Castro, falta de apoyo aéreo de EE.UU. y la ausencia del esperado levantamiento popular. Más de 100 atacantes murieron y más de 1,100 fueron capturados. Este vergonzoso fracaso dañó gravemente las relaciones entre EE.UU. y Cuba y fortaleció la posición de Castro.",
          de: "Am 17. April 1961 landeten rund 1.200 kubanische Exilanten in der Schweinebucht in Kuba in einem von der CIA finanzierten Versuch, Fidel Castros kommunistische Regierung zu stürzen. Die Invasion scheiterte innerhalb von zwei Tagen aufgrund schneller Gegenangriffe von Castros Streitkräften, fehlender US-Luftunterstützung und dem Ausbleiben des erwarteten Volksaufstands. Über 100 Angreifer wurden getötet und mehr als 1.100 gefangen genommen. Dieses peinliche Scheitern beschädigte die Beziehungen zwischen den USA und Kuba schwer und stärkte Castros Position.",
          nl: "Op 17 april 1961 landden ongeveer 1.200 Cubaanse ballingen in de Varkensbaai in Cuba in een door de CIA gefinancierde poging om de communistische regering van Fidel Castro omver te werpen. De invasie mislukte binnen twee dagen vanwege snelle tegenaanvallen van Castro's troepen, gebrek aan Amerikaanse luchtsteun en de afwezigheid van de verwachte volksopstand. Meer dan 100 aanvallers werden gedood en meer dan 1.100 werden gevangengenomen. Deze gênante mislukking beschadigde de betrekkingen tussen de VS en Cuba ernstig en versterkte Castro's positie."
        }
      },
      {
        question: {
          en: "On April 17, 1790, which American Founding Father died in Philadelphia at age 84?",
          es: "El 17 de abril de 1790, ¿qué Padre Fundador estadounidense murió en Filadelfia a la edad de 84 años?",
          de: "Welcher amerikanische Gründervater starb am 17. April 1790 in Philadelphia im Alter von 84 Jahren?",
          nl: "Op 17 april 1790, welke Amerikaanse Founding Father stierf in Philadelphia op 84-jarige leeftijd?"
        },
        options: [
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Benjamin Franklin died on April 17, 1790, at his home in Philadelphia from a pleuritic attack. He was 84 years old. Approximately 20,000 people attended his funeral, demonstrating his immense popularity. Franklin was one of the most accomplished Founding Fathers: a statesman, inventor, scientist, printer, and diplomat. He helped draft the Declaration of Independence and the U.S. Constitution, invented the lightning rod and bifocals, and served as ambassador to France during the Revolutionary War.",
          es: "Benjamin Franklin murió el 17 de abril de 1790, en su casa de Filadelfia por un ataque pleurítico. Tenía 84 años. Aproximadamente 20,000 personas asistieron a su funeral, demostrando su inmensa popularidad. Franklin fue uno de los Padres Fundadores más consumados: un estadista, inventor, científico, impresor y diplomático. Ayudó a redactar la Declaración de Independencia y la Constitución de EE.UU., inventó el pararrayos y las gafas bifocales, y sirvió como embajador en Francia durante la Guerra Revolucionaria.",
          de: "Benjamin Franklin starb am 17. April 1790 in seinem Haus in Philadelphia an einem pleuritischen Anfall. Er war 84 Jahre alt. Etwa 20.000 Menschen nahmen an seiner Beerdigung teil, was seine immense Beliebtheit demonstrierte. Franklin war einer der bedeutendsten Gründerväter: ein Staatsmann, Erfinder, Wissenschaftler, Drucker und Diplomat. Er half bei der Ausarbeitung der Unabhängigkeitserklärung und der US-Verfassung, erfand den Blitzableiter und die Bifokalbrille und diente während des Unabhängigkeitskrieges als Botschafter in Frankreich.",
          nl: "Benjamin Franklin stierf op 17 april 1790 in zijn huis in Philadelphia aan een pleuritische aanval. Hij was 84 jaar oud. Ongeveer 20.000 mensen woonden zijn begrafenis bij, wat zijn immense populariteit aantoonde. Franklin was een van de meest getalenteerde Founding Fathers: een staatsman, uitvinder, wetenschapper, drukker en diplomaat. Hij hielp de Onafhankelijkheidsverklaring en de Amerikaanse Grondwet op te stellen, vond de bliksemafleider en bifocale brillen uit, en diende als ambassadeur in Frankrijk tijdens de Revolutionaire Oorlog."
        }
      },
      {
        question: {
          en: "Which U.S. President approved the Bay of Pigs invasion plan, though it was originally conceived under his predecessor?",
          es: "¿Qué presidente de EE.UU. aprobó el plan de invasión de Bahía de Cochinos, aunque fue concebido originalmente bajo su predecesor?",
          de: "Welcher US-Präsident genehmigte den Invasionsplan der Schweinebucht, obwohl er ursprünglich unter seinem Vorgänger konzipiert wurde?",
          nl: "Welke Amerikaanse president keurde het invasieplan van de Varkensbaai goed, hoewel het oorspronkelijk onder zijn voorganger was bedacht?"
        },
        options: [
          { en: "Richard Nixon", es: "Richard Nixon", de: "Richard Nixon", nl: "Richard Nixon" },
          { en: "Lyndon B. Johnson", es: "Lyndon B. Johnson", de: "Lyndon B. Johnson", nl: "Lyndon B. Johnson" },
          { en: "Dwight D. Eisenhower", es: "Dwight D. Eisenhower", de: "Dwight D. Eisenhower", nl: "Dwight D. Eisenhower" },
          { en: "John F. Kennedy", es: "John F. Kennedy", de: "John F. Kennedy", nl: "John F. Kennedy" }
        ],
        correctIndex: 3,
        explanation: {
          en: "President John F. Kennedy approved the Bay of Pigs invasion shortly after taking office in 1961, though the plan was developed under President Eisenhower. Kennedy inherited the operation but made the critical decision to limit U.S. military involvement, denying air support that might have helped the invasion succeed. The failure haunted Kennedy's presidency and contributed to his determination to stand firm during the Cuban Missile Crisis in 1962. Kennedy publicly accepted responsibility for the disaster.",
          es: "El presidente John F. Kennedy aprobó la invasión de Bahía de Cochinos poco después de asumir el cargo en 1961, aunque el plan fue desarrollado bajo el presidente Eisenhower. Kennedy heredó la operación pero tomó la decisión crítica de limitar la participación militar de EE.UU., negando el apoyo aéreo que podría haber ayudado a que la invasión tuviera éxito. El fracaso persiguió la presidencia de Kennedy y contribuyó a su determinación de mantenerse firme durante la Crisis de los Misiles de Cuba en 1962. Kennedy aceptó públicamente la responsabilidad por el desastre.",
          de: "Präsident John F. Kennedy genehmigte die Invasion der Schweinebucht kurz nach seinem Amtsantritt 1961, obwohl der Plan unter Präsident Eisenhower entwickelt wurde. Kennedy erbte die Operation, traf aber die kritische Entscheidung, die militärische Beteiligung der USA zu begrenzen und die Luftunterstützung zu verweigern, die zum Erfolg der Invasion hätte beitragen können. Das Scheitern verfolgte Kennedys Präsidentschaft und trug zu seiner Entschlossenheit bei, während der Kubakrise 1962 standhaft zu bleiben. Kennedy übernahm öffentlich die Verantwortung für die Katastrophe.",
          nl: "President John F. Kennedy keurde de invasie van de Varkensbaai kort na zijn aantreden in 1961 goed, hoewel het plan onder president Eisenhower was ontwikkeld. Kennedy erfde de operatie maar nam de kritieke beslissing om de Amerikaanse militaire betrokkenheid te beperken en luchtsteun te weigeren die de invasie had kunnen helpen slagen. De mislukking achtervolgde Kennedy's presidentschap en droeg bij aan zijn vastberadenheid om standvastig te blijven tijdens de Cubaanse Rakettencrisis in 1962. Kennedy nam publiekelijk de verantwoordelijkheid voor de ramp op zich."
        }
      },
      {
        question: {
          en: "Benjamin Franklin is famous for his kite experiment that demonstrated the electrical nature of what natural phenomenon?",
          es: "Benjamin Franklin es famoso por su experimento con cometas que demostró la naturaleza eléctrica de qué fenómeno natural?",
          de: "Benjamin Franklin ist berühmt für sein Drachenexperiment, das die elektrische Natur welches Naturphänomens demonstrierte?",
          nl: "Benjamin Franklin is beroemd om zijn vliegerexperiment dat de elektrische aard van welk natuurverschijnsel aantoonde?"
        },
        options: [
          { en: "Tornadoes", es: "Tornados", de: "Tornados", nl: "Tornado's" },
          { en: "Static electricity", es: "Electricidad estática", de: "Statische Elektrizität", nl: "Statische elektriciteit" },
          { en: "Lightning", es: "Relámpagos", de: "Blitze", nl: "Bliksem" },
          { en: "Aurora Borealis", es: "Aurora Boreal", de: "Nordlichter", nl: "Noorderlicht" }
        ],
        correctIndex: 2,
        explanation: {
          en: "In 1752, Benjamin Franklin conducted his famous kite experiment during a thunderstorm, proving that lightning was electrical in nature. He flew a kite with a metal key attached to the string, and when lightning struck, electric charge traveled down the wet string to the key, producing sparks. This dangerous experiment led to his invention of the lightning rod, which protects buildings from lightning strikes. Franklin's electrical research earned him international acclaim and membership in the Royal Society.",
          es: "En 1752, Benjamin Franklin realizó su famoso experimento con cometas durante una tormenta eléctrica, demostrando que el relámpago era de naturaleza eléctrica. Voló una cometa con una llave de metal atada al cordel, y cuando cayó un rayo, la carga eléctrica viajó por el cordel mojado hasta la llave, produciendo chispas. Este peligroso experimento llevó a su invención del pararrayos, que protege los edificios de los rayos. La investigación eléctrica de Franklin le valió el reconocimiento internacional y la membresía en la Royal Society.",
          de: "1752 führte Benjamin Franklin sein berühmtes Drachenexperiment während eines Gewitters durch und bewies, dass Blitze elektrischer Natur sind. Er ließ einen Drachen mit einem an der Schnur befestigten Metallschlüssel fliegen, und als der Blitz einschlug, wanderte die elektrische Ladung die nasse Schnur hinunter zum Schlüssel und erzeugte Funken. Dieses gefährliche Experiment führte zu seiner Erfindung des Blitzableiters, der Gebäude vor Blitzeinschlägen schützt. Franklins elektrische Forschung brachte ihm internationale Anerkennung und die Mitgliedschaft in der Royal Society ein.",
          nl: "In 1752 voerde Benjamin Franklin zijn beroemde vliegerexperiment uit tijdens een onweersbui en bewees dat bliksem van elektrische aard was. Hij liet een vlieger op met een metalen sleutel die aan het touw was bevestigd, en toen de bliksem insloeg, reisde de elektrische lading via het natte touw naar de sleutel en produceerde vonken. Dit gevaarlijke experiment leidde tot zijn uitvinding van de bliksemafleider, die gebouwen beschermt tegen blikseminslagen. Franklin's elektrisch onderzoek leverde hem internationale erkenning en lidmaatschap van de Royal Society op."
        }
      },
      {
        question: {
          en: "On April 17, 1937, which iconic animated character made its debut in the cartoon 'Porky's Duck Hunt'?",
          es: "El 17 de abril de 1937, ¿qué personaje animado icónico hizo su debut en el dibujo animado 'La Cacería del Pato de Porky'?",
          de: "Welche ikonische Zeichentrickfigur feierte am 17. April 1937 ihr Debüt im Cartoon 'Porkys Entenjagd'?",
          nl: "Op 17 april 1937, welk iconisch geanimeerd personage maakte zijn debuut in de cartoon 'Porky's Duck Hunt'?"
        },
        options: [
          { en: "Daffy Duck", es: "El Pato Lucas", de: "Daffy Duck", nl: "Daffy Duck" },
          { en: "Bugs Bunny", es: "Bugs Bunny", de: "Bugs Bunny", nl: "Bugs Bunny" },
          { en: "Donald Duck", es: "El Pato Donald", de: "Donald Duck", nl: "Donald Duck" },
          { en: "Tweety Bird", es: "Piolín", de: "Tweety", nl: "Tweety" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Daffy Duck made his first appearance on April 17, 1937, in the Looney Tunes cartoon 'Porky's Duck Hunt,' directed by Tex Avery. In the cartoon, Porky Pig tries to hunt Daffy, but the duck proves too clever and energetic to catch. Daffy was originally portrayed as a zany, uncontrollable character, though his personality evolved over time. Mel Blanc provided Daffy's distinctive voice for 52 years. Daffy became one of Warner Bros.' most popular characters and appeared in over 130 cartoons.",
          es: "El Pato Lucas hizo su primera aparición el 17 de abril de 1937, en el dibujo animado de Looney Tunes 'La Cacería del Pato de Porky,' dirigido por Tex Avery. En el dibujo, Porky Pig intenta cazar al Pato Lucas, pero el pato demuestra ser demasiado astuto y enérgico para atraparlo. Lucas fue originalmente retratado como un personaje chiflado e incontrolable, aunque su personalidad evolucionó con el tiempo. Mel Blanc proporcionó la voz distintiva de Lucas durante 52 años. Lucas se convirtió en uno de los personajes más populares de Warner Bros. y apareció en más de 130 dibujos animados.",
          de: "Daffy Duck hatte seinen ersten Auftritt am 17. April 1937 im Looney Tunes-Cartoon 'Porkys Entenjagd,' unter der Regie von Tex Avery. Im Cartoon versucht Porky Pig, Daffy zu jagen, aber die Ente erweist sich als zu clever und energisch, um gefangen zu werden. Daffy wurde ursprünglich als verrückter, unkontrollierbarer Charakter dargestellt, obwohl sich seine Persönlichkeit im Laufe der Zeit entwickelte. Mel Blanc lieferte 52 Jahre lang Daffys unverwechselbare Stimme. Daffy wurde einer der beliebtesten Charaktere von Warner Bros. und trat in über 130 Cartoons auf.",
          nl: "Daffy Duck maakte zijn eerste verschijning op 17 april 1937 in de Looney Tunes cartoon 'Porky's Duck Hunt,' geregisseerd door Tex Avery. In de cartoon probeert Porky Pig Daffy te jagen, maar de eend blijkt te slim en energiek om te vangen. Daffy werd oorspronkelijk afgeschilderd als een gek, oncontroleerbaar personage, hoewel zijn persoonlijkheid in de loop der tijd evolueerde. Mel Blanc verzorgde 52 jaar lang Daffy's onderscheidende stem. Daffy werd een van de populairste personages van Warner Bros. en verscheen in meer dan 130 cartoons."
        }
      }
    ],

    // Day 18 - April 18th: San Francisco Earthquake (1906) & Paul Revere's Ride (1775)
    day18: [
      {
        question: {
          en: "On April 18, 1906, a devastating earthquake struck which major U.S. city, followed by fires that destroyed much of it?",
          es: "El 18 de abril de 1906, un terremoto devastador golpeó qué importante ciudad estadounidense, seguido de incendios que destruyeron gran parte de ella?",
          de: "Am 18. April 1906 traf ein verheerendes Erdbeben welche große US-Stadt, gefolgt von Bränden, die einen Großteil davon zerstörten?",
          nl: "Op 18 april 1906 trof een verwoestende aardbeving welke grote Amerikaanse stad, gevolgd door branden die een groot deel ervan verwoestten?"
        },
        options: [
          { en: "San Diego", es: "San Diego", de: "San Diego", nl: "San Diego" },
          { en: "San Francisco", es: "San Francisco", de: "San Francisco", nl: "San Francisco" },
          { en: "Seattle", es: "Seattle", de: "Seattle", nl: "Seattle" },
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 1906 San Francisco earthquake struck at 5:12 AM on April 18 with an estimated magnitude of 7.9. The earthquake ruptured 296 miles of the San Andreas Fault. Devastating fires broke out and burned for several days, ultimately destroying over 80% of the city. Between 3,000 and 6,000 people died, making it the deadliest earthquake in U.S. history. The disaster led to major advances in earthquake science and building codes. San Francisco was rebuilt within a few years.",
          es: "El terremoto de San Francisco de 1906 ocurrió a las 5:12 AM del 18 de abril con una magnitud estimada de 7.9. El terremoto rompió 296 millas de la Falla de San Andrés. Incendios devastadores estallaron y ardieron durante varios días, destruyendo finalmente más del 80% de la ciudad. Entre 3,000 y 6,000 personas murieron, convirtiéndolo en el terremoto más mortífero en la historia de EE.UU. El desastre llevó a grandes avances en la ciencia de los terremotos y los códigos de construcción. San Francisco fue reconstruida en pocos años.",
          de: "Das Erdbeben von San Francisco 1906 ereignete sich am 18. April um 5:12 Uhr mit einer geschätzten Stärke von 7,9. Das Erdbeben riss 296 Meilen der San-Andreas-Verwerfung auf. Verheerende Brände brachen aus und brannten mehrere Tage lang, wobei schließlich über 80% der Stadt zerstört wurden. Zwischen 3.000 und 6.000 Menschen starben, was es zum tödlichsten Erdbeben in der Geschichte der USA macht. Die Katastrophe führte zu großen Fortschritten in der Erdbebenforschung und bei Bauvorschriften. San Francisco wurde innerhalb weniger Jahre wieder aufgebaut.",
          nl: "De aardbeving van San Francisco in 1906 vond plaats om 5:12 uur op 18 april met een geschatte kracht van 7,9. De aardbeving scheurde 296 mijl van de San Andreas-breuk open. Verwoestende branden braken uit en brandden meerdere dagen, waarbij uiteindelijk meer dan 80% van de stad werd verwoest. Tussen de 3.000 en 6.000 mensen stierven, waardoor het de dodelijkste aardbeving in de Amerikaanse geschiedenis is. De ramp leidde tot grote vooruitgang in aardbevingswetenschap en bouwvoorschriften. San Francisco werd binnen een paar jaar herbouwd."
        }
      },
      {
        question: {
          en: "On April 18, 1775, Paul Revere made his famous midnight ride to warn colonists that which group was approaching?",
          es: "El 18 de abril de 1775, Paul Revere hizo su famoso viaje de medianoche para advertir a los colonos que qué grupo se acercaba?",
          de: "Am 18. April 1775 unternahm Paul Revere seinen berühmten Mitternachtsritt, um die Kolonisten zu warnen, dass welche Gruppe sich näherte?",
          nl: "Op 18 april 1775 maakte Paul Revere zijn beroemde middernachtelijke rit om kolonisten te waarschuwen dat welke groep naderde?"
        },
        options: [
          { en: "Spanish army", es: "Ejército español", de: "Spanische Armee", nl: "Spaans leger" },
          { en: "Native American warriors", es: "Guerreros nativos americanos", de: "Indianerkrieger", nl: "Inheemse Amerikaanse krijgers" },
          { en: "British troops", es: "Tropas británicas", de: "Britische Truppen", nl: "Britse troepen" },
          { en: "French soldiers", es: "Soldados franceses", de: "Französische Soldaten", nl: "Franse soldaten" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On the night of April 18, 1775, Paul Revere rode from Charlestown to Lexington, Massachusetts, warning colonists that British Regular troops were marching to seize weapons and arrest rebel leaders. Contrary to legend, he did not shout 'The British are coming!' but likely said 'The Regulars are coming out!' Revere was one of several riders that night. His warning allowed the colonial militia to prepare, leading to the Battles of Lexington and Concord on April 19, which started the American Revolutionary War.",
          es: "La noche del 18 de abril de 1775, Paul Revere cabalgó desde Charlestown hasta Lexington, Massachusetts, advirtiendo a los colonos que las tropas regulares británicas marchaban para confiscar armas y arrestar a líderes rebeldes. Contrario a la leyenda, no gritó '¡Vienen los británicos!' sino que probablemente dijo '¡Vienen los regulares!' Revere fue uno de varios jinetes esa noche. Su advertencia permitió que la milicia colonial se preparara, llevando a las Batallas de Lexington y Concord el 19 de abril, que iniciaron la Guerra Revolucionaria Estadounidense.",
          de: "In der Nacht des 18. April 1775 ritt Paul Revere von Charlestown nach Lexington, Massachusetts, und warnte die Kolonisten, dass britische Reguläre marschierten, um Waffen zu beschlagnahmen und Rebellenführer zu verhaften. Entgegen der Legende rief er nicht 'Die Briten kommen!', sondern sagte wahrscheinlich 'Die Regulären kommen heraus!' Revere war einer von mehreren Reitern in dieser Nacht. Seine Warnung ermöglichte es der Kolonialmiliz, sich vorzubereiten, was zu den Schlachten von Lexington und Concord am 19. April führte, die den Amerikanischen Unabhängigkeitskrieg auslösten.",
          nl: "Op de nacht van 18 april 1775 reed Paul Revere van Charlestown naar Lexington, Massachusetts, om kolonisten te waarschuwen dat Britse reguliere troepen marcheerden om wapens in beslag te nemen en rebellenleiders te arresteren. In tegenstelling tot de legende riep hij niet 'De Britten komen!' maar zei waarschijnlijk 'De regulieren komen eruit!' Revere was een van verschillende ruiters die nacht. Zijn waarschuwing stelde de koloniale militie in staat zich voor te bereiden, wat leidde tot de Veldslagen van Lexington en Concord op 19 april, die de Amerikaanse Onafhankelijkheidsoorlog begonnen."
        }
      },
      {
        question: {
          en: "The 1906 San Francisco earthquake ruptured approximately how many miles of the San Andreas Fault?",
          es: "El terremoto de San Francisco de 1906 rompió aproximadamente cuántas millas de la Falla de San Andrés?",
          de: "Das Erdbeben von San Francisco 1906 riss ungefähr wie viele Meilen der San-Andreas-Verwerfung auf?",
          nl: "De aardbeving van San Francisco in 1906 scheurde ongeveer hoeveel mijl van de San Andreas-breuk?"
        },
        options: [
          { en: "75 miles", es: "75 millas", de: "75 Meilen", nl: "75 mijl" },
          { en: "296 miles", es: "296 millas", de: "296 Meilen", nl: "296 mijl" },
          { en: "500 miles", es: "500 millas", de: "500 Meilen", nl: "500 mijl" },
          { en: "150 miles", es: "150 millas", de: "150 Meilen", nl: "150 mijl" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The 1906 earthquake ruptured 296 miles (477 kilometers) of the San Andreas Fault, from northwest of San Juan Bautista to Cape Mendocino. The rupture created visible ground displacement of up to 20 feet in some areas. The earthquake caused intense shaking throughout Northern California, with damage reported as far south as the Salinas Valley and as far north as Eureka. This massive rupture demonstrated the enormous power stored along fault lines and revolutionized understanding of plate tectonics.",
          es: "El terremoto de 1906 rompió 296 millas (477 kilómetros) de la Falla de San Andrés, desde el noroeste de San Juan Bautista hasta Cape Mendocino. La ruptura creó un desplazamiento visible del suelo de hasta 20 pies en algunas áreas. El terremoto causó sacudidas intensas en todo el norte de California, con daños reportados tan al sur como el Valle de Salinas y tan al norte como Eureka. Esta ruptura masiva demostró el enorme poder almacenado a lo largo de las líneas de falla y revolucionó la comprensión de la tectónica de placas.",
          de: "Das Erdbeben von 1906 riss 296 Meilen (477 Kilometer) der San-Andreas-Verwerfung auf, von nordwestlich von San Juan Bautista bis Cape Mendocino. Der Riss erzeugte in einigen Gebieten eine sichtbare Bodenverschiebung von bis zu 20 Fuß. Das Erdbeben verursachte intensive Erschütterungen in ganz Nordkalifornien, wobei Schäden bis südlich ins Salinas Valley und bis nördlich nach Eureka gemeldet wurden. Dieser massive Riss demonstrierte die enorme Kraft, die entlang von Verwerfungslinien gespeichert ist, und revolutionierte das Verständnis der Plattentektonik.",
          nl: "De aardbeving van 1906 scheurde 296 mijl (477 kilometer) van de San Andreas-breuk, van ten noordwesten van San Juan Bautista tot Cape Mendocino. De breuk veroorzaakte zichtbare grondverschuiving van wel 20 voet in sommige gebieden. De aardbeving veroorzaakte intense schudding door heel Noord-Californië, met schade gerapporteerd zo ver zuidelijk als de Salinas Valley en zo ver noordelijk als Eureka. Deze massale breuk toonde de enorme kracht die langs breuklijnen is opgeslagen en zorgde voor een revolutie in het begrip van plaattektoniek."
        }
      },
      {
        question: {
          en: "On April 18, 1955, which famous physicist died in Princeton, New Jersey, at age 76?",
          es: "El 18 de abril de 1955, ¿qué famoso físico murió en Princeton, Nueva Jersey, a la edad de 76 años?",
          de: "Welcher berühmte Physiker starb am 18. April 1955 in Princeton, New Jersey, im Alter von 76 Jahren?",
          nl: "Op 18 april 1955, welke beroemde fysicus stierf in Princeton, New Jersey, op 76-jarige leeftijd?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Werner Heisenberg", es: "Werner Heisenberg", de: "Werner Heisenberg", nl: "Werner Heisenberg" },
          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" },
          { en: "Max Planck", es: "Max Planck", de: "Max Planck", nl: "Max Planck" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Albert Einstein died on April 18, 1955, at Princeton Hospital in New Jersey from an abdominal aortic aneurysm. He was 76 years old. Einstein revolutionized physics with his theories of special and general relativity, explaining the nature of space, time, and gravity. He won the 1921 Nobel Prize in Physics for his discovery of the photoelectric effect. Einstein fled Nazi Germany in 1933 and spent the rest of his life at Princeton's Institute for Advanced Study. He remains one of history's most influential scientists.",
          es: "Albert Einstein murió el 18 de abril de 1955, en el Hospital de Princeton en Nueva Jersey por un aneurisma aórtico abdominal. Tenía 76 años. Einstein revolucionó la física con sus teorías de la relatividad especial y general, explicando la naturaleza del espacio, el tiempo y la gravedad. Ganó el Premio Nobel de Física en 1921 por su descubrimiento del efecto fotoeléctrico. Einstein huyo de la Alemania nazi en 1933 y pasó el resto de su vida en el Instituto de Estudios Avanzados de Princeton. Sigue siendo uno de los científicos más influyentes de la historia.",
          de: "Albert Einstein starb am 18. April 1955 im Princeton Hospital in New Jersey an einem abdominalen Aortenaneurysma. Er war 76 Jahre alt. Einstein revolutionierte die Physik mit seinen Theorien der speziellen und allgemeinen Relativität und erklärte die Natur von Raum, Zeit und Schwerkraft. Er gewann 1921 den Nobelpreis für Physik für seine Entdeckung des photoelektrischen Effekts. Einstein floh 1933 aus Nazi-Deutschland und verbrachte den Rest seines Lebens am Institute for Advanced Study in Princeton. Er bleibt einer der einflussreichsten Wissenschaftler der Geschichte.",
          nl: "Albert Einstein stierf op 18 april 1955 in het Princeton Hospital in New Jersey aan een abdominaal aorta-aneurysma. Hij was 76 jaar oud. Einstein zorgde voor een revolutie in de natuurkunde met zijn theorieën van speciale en algemene relativiteit, waarbij hij de aard van ruimte, tijd en zwaartekracht verklaarde. Hij won in 1921 de Nobelprijs voor Natuurkunde voor zijn ontdekking van het foto-elektrisch effect. Einstein vluchtte in 1933 uit nazi-Duitsland en bracht de rest van zijn leven door bij het Institute for Advanced Study van Princeton. Hij blijft een van de meest invloedrijke wetenschappers uit de geschiedenis."
        }
      },
      {
        question: {
          en: "In 1775, Paul Revere's warning helped prepare colonial militia for battles in which two Massachusetts towns on April 19?",
          es: "En 1775, la advertencia de Paul Revere ayudó a preparar a la milicia colonial para batallas en qué dos pueblos de Massachusetts el 19 de abril?",
          de: "1775 half Paul Reveres Warnung der Kolonialmiliz, sich auf Schlachten in welchen zwei Städten in Massachusetts am 19. April vorzubereiten?",
          nl: "In 1775 hielp Paul Revere's waarschuwing de koloniale militie zich voor te bereiden op gevechten in welke twee steden in Massachusetts op 19 april?"
        },
        options: [
          { en: "Salem and Marblehead", es: "Salem y Marblehead", de: "Salem und Marblehead", nl: "Salem en Marblehead" },
          { en: "Plymouth and Provincetown", es: "Plymouth y Provincetown", de: "Plymouth und Provincetown", nl: "Plymouth en Provincetown" },
          { en: "Lexington and Concord", es: "Lexington y Concord", de: "Lexington und Concord", nl: "Lexington en Concord" },
          { en: "Boston and Cambridge", es: "Boston y Cambridge", de: "Boston und Cambridge", nl: "Boston en Cambridge" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Paul Revere's midnight ride warned colonists that British troops were coming, allowing militia to assemble in Lexington and Concord. On April 19, 1775, these towns became the sites of the first battles of the American Revolutionary War. At Lexington Green, 77 colonial militia faced 700 British regulars in a brief skirmish. The British then marched to Concord, where a larger battle occurred at the North Bridge. These battles marked the start of America's fight for independence and are commemorated as Patriots' Day in Massachusetts.",
          es: "El viaje de medianoche de Paul Revere advirtió a los colonos que venían tropas británicas, permitiendo que la milicia se reuniera en Lexington y Concord. El 19 de abril de 1775, estos pueblos se convirtieron en los sitios de las primeras batallas de la Guerra Revolucionaria Estadounidense. En Lexington Green, 77 milicianos coloniales enfrentaron a 700 regulares británicos en una breve escaramuza. Los británicos luego marcharon a Concord, donde ocurrió una batalla más grande en el Puente Norte. Estas batallas marcaron el inicio de la lucha de América por la independencia y se conmemoran como el Día de los Patriotas en Massachusetts.",
          de: "Paul Reveres Mitternachtsritt warnte die Kolonisten, dass britische Truppen kamen, was es der Miliz ermöglichte, sich in Lexington und Concord zu versammeln. Am 19. April 1775 wurden diese Städte zu den Schauplätzen der ersten Schlachten des Amerikanischen Unabhängigkeitskrieges. Auf Lexington Green standen sich 77 Kolonialmilizen und 700 britische Reguläre in einem kurzen Gefecht gegenüber. Die Briten marschierten dann nach Concord, wo eine größere Schlacht an der North Bridge stattfand. Diese Schlachten markierten den Beginn von Amerikas Kampf für die Unabhängigkeit und werden in Massachusetts als Patriots' Day gefeiert.",
          nl: "Paul Revere's middernachtelijke rit waarschuwde kolonisten dat Britse troepen kwamen, waardoor de militie zich kon verzamelen in Lexington en Concord. Op 19 april 1775 werden deze steden de locaties van de eerste veldslagen van de Amerikaanse Onafhankelijkheidsoorlog. Op Lexington Green stonden 77 koloniale militieleden tegenover 700 Britse reguliere troepen in een korte schermutseling. De Britten marcheerden vervolgens naar Concord, waar een grotere veldslag plaatsvond bij de North Bridge. Deze veldslagen markeerden het begin van Amerika's strijd voor onafhankelijkheid en worden herdacht als Patriots' Day in Massachusetts."
        }
      }
    ],

    // Day 19 - April 19th: Oklahoma City Bombing (1995) & American Revolution Begins (1775)
    day19: [
      {
        question: {
          en: "On April 19, 1995, a truck bomb exploded outside which federal building in Oklahoma, killing 168 people?",
          es: "El 19 de abril de 1995, una bomba en un camión explotó fuera de qué edificio federal en Oklahoma, matando a 168 personas?",
          de: "Am 19. April 1995 explodierte eine LKW-Bombe vor welchem Bundesgebäude in Oklahoma und tötete 168 Menschen?",
          nl: "Op 19 april 1995 ontplofte een vrachtwagenbom buiten welk federaal gebouw in Oklahoma, waarbij 168 mensen om het leven kwamen?"
        },
        options: [
          { en: "Federal Reserve Building", es: "Edificio de la Reserva Federal", de: "Federal Reserve Building", nl: "Federal Reserve Building" },
          { en: "Robert F. Kennedy Building", es: "Edificio Robert F. Kennedy", de: "Robert F. Kennedy Building", nl: "Robert F. Kennedy Building" },
          { en: "J. Edgar Hoover Building", es: "Edificio J. Edgar Hoover", de: "J. Edgar Hoover Building", nl: "J. Edgar Hoover Building" },
          { en: "Alfred P. Murrah Federal Building", es: "Edificio Federal Alfred P. Murrah", de: "Alfred P. Murrah Federal Building", nl: "Alfred P. Murrah Federal Building" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 19, 1995, Timothy McVeigh detonated a truck bomb outside the Alfred P. Murrah Federal Building in Oklahoma City, killing 168 people, including 19 children in a daycare center. It remains the deadliest act of domestic terrorism in U.S. history. McVeigh chose the date to coincide with the second anniversary of the Waco siege and the 220th anniversary of the Battles of Lexington and Concord. He was executed in 2001. The bombing led to major changes in building security protocols.",
          es: "El 19 de abril de 1995, Timothy McVeigh detonó una bomba en un camión fuera del Edificio Federal Alfred P. Murrah en Oklahoma City, matando a 168 personas, incluidos 19 niños en una guardería. Sigue siendo el acto más mortífero de terrorismo doméstico en la historia de EE.UU. McVeigh eligió la fecha para coincidir con el segundo aniversario del asedio de Waco y el 220 aniversario de las Batallas de Lexington y Concord. Fue ejecutado en 2001. El atentado llevó a cambios importantes en los protocolos de seguridad de edificios.",
          de: "Am 19. April 1995 zündete Timothy McVeigh eine LKW-Bombe vor dem Alfred P. Murrah Federal Building in Oklahoma City und tötete 168 Menschen, darunter 19 Kinder in einer Kindertagesstätte. Es bleibt die tödlichste Tat inländischen Terrorismus in der Geschichte der USA. McVeigh wählte das Datum, um es mit dem zweiten Jahrestag der Belagerung von Waco und dem 220. Jahrestag der Schlachten von Lexington und Concord zusammenfallen zu lassen. Er wurde 2001 hingerichtet. Die Bombardierung führte zu größeren Änderungen in Gebäudesicherheitsprotokollen.",
          nl: "Op 19 april 1995 liet Timothy McVeigh een vrachtwagenbom ontploffen bij het Alfred P. Murrah Federal Building in Oklahoma City, waarbij 168 mensen omkwamen, waaronder 19 kinderen in een kinderdagverblijf. Het blijft de dodelijkste daad van binnenlands terrorisme in de Amerikaanse geschiedenis. McVeigh koos de datum om samen te vallen met de tweede verjaardag van het beleg van Waco en de 220e verjaardag van de Veldslagen van Lexington en Concord. Hij werd in 2001 geëxecuteerd. De aanslag leidde tot grote veranderingen in beveiligingsprotocollen voor gebouwen."
        }
      },
      {
        question: {
          en: "On April 19, 1775, the American Revolutionary War began with battles in Lexington and which other Massachusetts town?",
          es: "El 19 de abril de 1775, la Guerra Revolucionaria Estadounidense comenzó con batallas en Lexington y en qué otro pueblo de Massachusetts?",
          de: "Am 19. April 1775 begann der Amerikanische Unabhängigkeitskrieg mit Schlachten in Lexington und in welcher anderen Stadt in Massachusetts?",
          nl: "Op 19 april 1775 begon de Amerikaanse Onafhankelijkheidsoorlog met veldslagen in Lexington en welke andere stad in Massachusetts?"
        },
        options: [
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
          { en: "Cambridge", es: "Cambridge", de: "Cambridge", nl: "Cambridge" },
          { en: "Salem", es: "Salem", de: "Salem", nl: "Salem" },
          { en: "Concord", es: "Concord", de: "Concord", nl: "Concord" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Battles of Lexington and Concord on April 19, 1775, marked the outbreak of the American Revolutionary War. British troops marched from Boston to seize weapons stored in Concord and arrest rebel leaders. At Lexington Green, colonial militia faced British regulars in the 'shot heard round the world.' The British then advanced to Concord, where they met fiercer resistance. Colonial forces harassed the British during their retreat to Boston. This day of conflict sparked an eight-year war that led to American independence.",
          es: "Las Batallas de Lexington y Concord el 19 de abril de 1775 marcaron el estallido de la Guerra Revolucionaria Estadounidense. Las tropas británicas marcharon desde Boston para confiscar armas almacenadas en Concord y arrestar a líderes rebeldes. En Lexington Green, la milicia colonial enfrentó a los regulares británicos en el 'disparo escuchado en todo el mundo.' Los británicos luego avanzaron a Concord, donde encontraron una resistencia más feroz. Las fuerzas coloniales acosaron a los británicos durante su retirada a Boston. Este día de conflicto desencadenó una guerra de ocho años que llevó a la independencia estadounidense.",
          de: "Die Schlachten von Lexington und Concord am 19. April 1775 markierten den Ausbruch des Amerikanischen Unabhängigkeitskrieges. Britische Truppen marschierten von Boston aus, um in Concord gelagerte Waffen zu beschlagnahmen und Rebellenführer zu verhaften. Auf Lexington Green standen sich Kolonialmilizen und britische Reguläre im 'Schuss, der um die Welt gehört wurde' gegenüber. Die Briten rückten dann nach Concord vor, wo sie auf heftigeren Widerstand stießen. Koloniale Streitkräfte schikanierten die Briten während ihres Rückzugs nach Boston. Dieser Tag des Konflikts löste einen achtjährigen Krieg aus, der zur amerikanischen Unabhängigkeit führte.",
          nl: "De Veldslagen van Lexington en Concord op 19 april 1775 markeerden het uitbreken van de Amerikaanse Onafhankelijkheidsoorlog. Britse troepen marcheerden vanuit Boston om wapens die waren opgeslagen in Concord in beslag te nemen en rebellenleiders te arresteren. Op Lexington Green stonden koloniale militie en Britse reguliere troepen tegenover elkaar in het 'schot dat over de hele wereld werd gehoord.' De Britten trokken vervolgens op naar Concord, waar ze op hevig verzet stuitten. Koloniale strijdkrachten teisterden de Britten tijdens hun terugtocht naar Boston. Deze dag van conflict leidde tot een oorlog van acht jaar die tot Amerikaanse onafhankelijkheid leidde."
        }
      },
      {
        question: {
          en: "The 51-day standoff with the Branch Davidian religious group in Waco, Texas, ended violently on April 19 of which year?",
          es: "El enfrentamiento de 51 días con el grupo religioso Branch Davidian en Waco, Texas, terminó violentamente el 19 de abril de qué año?",
          de: "Die 51-tägige Belagerung der religiösen Gruppe Branch Davidian in Waco, Texas, endete am 19. April welches Jahres gewaltsam?",
          nl: "De 51 dagen durende confrontatie met de Branch Davidian religieuze groep in Waco, Texas, eindigde gewelddadig op 19 april van welk jaar?"
        },
        options: [
          { en: "1995", es: "1995", de: "1995", nl: "1995" },
          { en: "1993", es: "1993", de: "1993", nl: "1993" },
          { en: "1989", es: "1989", de: "1989", nl: "1989" },
          { en: "1991", es: "1991", de: "1991", nl: "1991" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 19, 1993, the FBI launched a tear gas assault on the Branch Davidian compound in Waco, Texas, ending a 51-day standoff. The compound caught fire, killing 76 people including leader David Koresh and at least 20 children. The siege began on February 28 when federal agents attempted to execute a search warrant. The tragic ending sparked intense controversy about government tactics. Timothy McVeigh cited the Waco incident as motivation for the Oklahoma City bombing exactly two years later on April 19, 1995.",
          es: "El 19 de abril de 1993, el FBI lanzó un asalto con gas lacrimógeno al complejo Branch Davidian en Waco, Texas, terminando un enfrentamiento de 51 días. El complejo se incendió, matando a 76 personas, incluido el líder David Koresh y al menos 20 niños. El asedio comenzó el 28 de febrero cuando agentes federales intentaron ejecutar una orden de registro. El trágico final generó una intensa controversia sobre las tácticas gubernamentales. Timothy McVeigh citó el incidente de Waco como motivación para el atentado de Oklahoma City exactamente dos años después, el 19 de abril de 1995.",
          de: "Am 19. April 1993 startete das FBI einen Tränengasangriff auf die Anlage der Branch Davidians in Waco, Texas, und beendete damit eine 51-tägige Belagerung. Die Anlage fing Feuer und tötete 76 Menschen, darunter Anführer David Koresh und mindestens 20 Kinder. Die Belagerung begann am 28. Februar, als Bundesagenten versuchten, einen Durchsuchungsbefehl zu vollstrecken. Das tragische Ende löste intensive Kontroversen über Regierungstaktiken aus. Timothy McVeigh nannte den Waco-Vorfall als Motivation für das Bombenattentat in Oklahoma City genau zwei Jahre später am 19. April 1995.",
          nl: "Op 19 april 1993 lanceerde de FBI een traangasaanval op het Branch Davidian complex in Waco, Texas, waarmee een 51 dagen durende confrontatie eindigde. Het complex vatte vlam en doodde 76 mensen, waaronder leider David Koresh en minstens 20 kinderen. Het beleg begon op 28 februari toen federale agenten probeerden een huiszoekingsbevel uit te voeren. Het tragische einde veroorzaakte intense controverse over overheidstactieken. Timothy McVeigh noemde het Waco-incident als motivatie voor de aanslag in Oklahoma City precies twee jaar later op 19 april 1995."
        }
      },
      {
        question: {
          en: "How many children were killed in the daycare center inside the Murrah Federal Building during the Oklahoma City bombing?",
          es: "¿Cuántos niños murieron en la guardería dentro del Edificio Federal Murrah durante el atentado de Oklahoma City?",
          de: "Wie viele Kinder wurden in der Kindertagesstätte im Murrah Federal Building während des Bombenanschlags in Oklahoma City getötet?",
          nl: "Hoeveel kinderen werden gedood in het kinderdagverblijf in het Murrah Federal Building tijdens de aanslag in Oklahoma City?"
        },
        options: [
          { en: "25 children", es: "25 niños", de: "25 Kinder", nl: "25 kinderen" },
          { en: "12 children", es: "12 niños", de: "12 Kinder", nl: "12 kinderen" },
          { en: "19 children", es: "19 niños", de: "19 Kinder", nl: "19 kinderen" },
          { en: "8 children", es: "8 niños", de: "8 Kinder", nl: "8 kinderen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Nineteen children under the age of six were killed in the America's Kids daycare center on the second floor of the Murrah Building. The image of firefighter Chris Fields carrying the body of one-year-old Baylee Almon became an iconic symbol of the tragedy. The deaths of so many young children shocked the nation and intensified public outrage. A memorial now stands at the site, featuring 168 empty chairs representing each victim, with 19 smaller chairs for the children. The Oklahoma City National Memorial Museum educates visitors about the bombing.",
          es: "Diecinueve niños menores de seis años murieron en la guardería America's Kids en el segundo piso del Edificio Murrah. La imagen del bombero Chris Fields llevando el cuerpo de Baylee Almon, de un año, se convirtió en un símbolo icónico de la tragedia. Las muertes de tantos niños pequeños conmocionaron a la nación e intensificaron la indignación pública. Un memorial ahora se encuentra en el sitio, con 168 sillas vacías que representan a cada víctima, con 19 sillas más pequeñas para los niños. El Museo Memorial Nacional de Oklahoma City educa a los visitantes sobre el atentado.",
          de: "Neunzehn Kinder unter sechs Jahren wurden in der Kindertagesstätte America's Kids im zweiten Stock des Murrah-Gebäudes getötet. Das Bild des Feuerwehrmanns Chris Fields, der den Körper der einjährigen Baylee Almon trägt, wurde zu einem ikonischen Symbol der Tragödie. Der Tod so vieler kleiner Kinder schockierte die Nation und verstärkte die öffentliche Empörung. Ein Denkmal steht jetzt an der Stelle mit 168 leeren Stühlen, die jedes Opfer repräsentieren, mit 19 kleineren Stühlen für die Kinder. Das Oklahoma City National Memorial Museum informiert Besucher über den Bombenanschlag.",
          nl: "Negentien kinderen onder de zes jaar werden gedood in het America's Kids kinderdagverblijf op de tweede verdieping van het Murrah Building. Het beeld van brandweerman Chris Fields die het lichaam van de eenjarige Baylee Almon droeg, werd een iconisch symbool van de tragedie. De dood van zoveel jonge kinderen schokte de natie en intensiveerde de publieke verontwaardiging. Een gedenkteken staat nu op de locatie, met 168 lege stoelen die elk slachtoffer vertegenwoordigen, met 19 kleinere stoelen voor de kinderen. Het Oklahoma City National Memorial Museum informeert bezoekers over de aanslag."
        }
      },
      {
        question: {
          en: "What famous phrase describes the first shots fired at Lexington on April 19, 1775, which started the Revolutionary War?",
          es: "¿Qué frase famosa describe los primeros disparos en Lexington el 19 de abril de 1775, que iniciaron la Guerra Revolucionaria?",
          de: "Welcher berühmte Ausdruck beschreibt die ersten Schüsse, die am 19. April 1775 in Lexington abgefeuert wurden und den Unabhängigkeitskrieg auslösten?",
          nl: "Welke beroemde uitdrukking beschrijft de eerste schoten die op 19 april 1775 in Lexington werden gelost en de Revolutionaire Oorlog begonnen?"
        },
        options: [
          { en: "The first strike for independence", es: "El primer golpe por la independencia", de: "Der erste Schlag für die Unabhängigkeit", nl: "De eerste slag voor onafhankelijkheid" },
          { en: "The dawn of liberty", es: "El amanecer de la libertad", de: "Die Morgendämmerung der Freiheit", nl: "De dageraad van vrijheid" },
          { en: "The shot heard round the world", es: "El disparo escuchado en todo el mundo", de: "Der Schuss, der um die Welt gehört wurde", nl: "Het schot dat over de hele wereld werd gehoord" },
          { en: "The battle cry of freedom", es: "El grito de batalla de la libertad", de: "Der Schlachtruf der Freiheit", nl: "De strijdkreet van vrijheid" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The phrase 'the shot heard round the world' comes from Ralph Waldo Emerson's 1837 poem 'Concord Hymn,' commemorating the battles of April 19, 1775. The expression captures how these first shots of the American Revolution had global significance, inspiring democratic movements worldwide. No one knows who fired first at Lexington Green that morning, but the ensuing conflict changed world history. The phrase emphasizes that the American fight for independence became a model for other nations seeking freedom from colonial rule.",
          es: "La frase 'el disparo escuchado en todo el mundo' proviene del poema de 1837 de Ralph Waldo Emerson 'Himno de Concord,' conmemorando las batallas del 19 de abril de 1775. La expresión captura cómo estos primeros disparos de la Revolución Estadounidense tuvieron significancia global, inspirando movimientos democráticos en todo el mundo. Nadie sabe quién disparó primero en Lexington Green esa mañana, pero el conflicto resultante cambió la historia mundial. La frase enfatiza que la lucha estadounidense por la independencia se convirtió en un modelo para otras naciones que buscaban liberarse del dominio colonial.",
          de: "Der Ausdruck 'der Schuss, der um die Welt gehört wurde' stammt aus Ralph Waldo Emersons Gedicht 'Concord Hymn' von 1837, das die Schlachten vom 19. April 1775 gedenkt. Der Ausdruck erfasst, wie diese ersten Schüsse der Amerikanischen Revolution weltweite Bedeutung hatten und demokratische Bewegungen weltweit inspirierten. Niemand weiß, wer an diesem Morgen auf Lexington Green zuerst schoss, aber der daraus resultierende Konflikt veränderte die Weltgeschichte. Der Ausdruck betont, dass der amerikanische Kampf für die Unabhängigkeit zum Vorbild für andere Nationen wurde, die Freiheit von Kolonialherrschaft suchten.",
          nl: "De uitdrukking 'het schot dat over de hele wereld werd gehoord' komt uit Ralph Waldo Emerson's gedicht 'Concord Hymn' uit 1837, ter nagedachtenis aan de veldslagen van 19 april 1775. De uitdrukking legt vast hoe deze eerste schoten van de Amerikaanse Revolutie wereldwijde betekenis hadden en democratische bewegingen wereldwijd inspireerden. Niemand weet wie die ochtend als eerste schoot op Lexington Green, maar het daaruit voortvloeiende conflict veranderde de wereldgeschiedenis. De uitdrukking benadrukt dat de Amerikaanse strijd voor onafhankelijkheid een model werd voor andere naties die vrijheid zochten van koloniale heerschappij."
        }
      }
    ],

    // Day 20 - April 20th: Columbine Shooting (1999) & Adolf Hitler Born (1889)
    day20: [
      {
        question: {
          en: "On April 20, 1999, a school shooting at Columbine High School in Colorado resulted in how many deaths, including the two perpetrators?",
          es: "El 20 de abril de 1999, un tiroteo escolar en Columbine High School en Colorado resultó en cuántas muertes, incluidos los dos perpetradores?",
          de: "Am 20. April 1999 führte eine Schulerschießung an der Columbine High School in Colorado zu wie vielen Todesfällen, einschließlich der beiden Täter?",
          nl: "Op 20 april 1999 resulteerde een schoolschietpartij op Columbine High School in Colorado in hoeveel doden, inclusief de twee daders?"
        },
        options: [
          { en: "10 deaths", es: "10 muertes", de: "10 Todesfälle", nl: "10 doden" },
          { en: "20 deaths", es: "20 muertes", de: "20 Todesfälle", nl: "20 doden" },
          { en: "25 deaths", es: "25 muertes", de: "25 Todesfälle", nl: "25 doden" },
          { en: "15 deaths", es: "15 muertes", de: "15 Todesfälle", nl: "15 doden" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 20, 1999, students Eric Harris and Dylan Klebold killed 13 people (12 students and one teacher) at Columbine High School before taking their own lives, for a total of 15 deaths. The massacre lasted approximately 49 minutes and injured 21 additional people. The shooting shocked the nation and sparked widespread debates about gun control, school safety, bullying, and violence in media. Columbine became a tragic turning point that led to enhanced security measures in schools nationwide and influenced how law enforcement responds to active shooter situations.",
          es: "El 20 de abril de 1999, los estudiantes Eric Harris y Dylan Klebold mataron a 13 personas (12 estudiantes y un maestro) en Columbine High School antes de quitarse la vida, para un total de 15 muertes. La masacre duró aproximadamente 49 minutos e hirió a 21 personas adicionales. El tiroteo conmocionó a la nación y desencadenó debates generalizados sobre control de armas, seguridad escolar, acoso y violencia en los medios. Columbine se convirtió en un trágico punto de inflexión que llevó a medidas de seguridad mejoradas en escuelas en todo el país e influyó en cómo las fuerzas del orden responden a situaciones de tiradores activos.",
          de: "Am 20. April 1999 töteten die Schüler Eric Harris und Dylan Klebold 13 Menschen (12 Schüler und einen Lehrer) an der Columbine High School, bevor sie sich das Leben nahmen, insgesamt 15 Todesfälle. Das Massaker dauerte etwa 49 Minuten und verletzte 21 weitere Menschen. Die Schießerei schockierte die Nation und löste weitreichende Debatten über Waffenkontrolle, Schulsicherheit, Mobbing und Gewalt in den Medien aus. Columbine wurde zu einem tragischen Wendepunkt, der zu verstärkten Sicherheitsmaßnahmen an Schulen im ganzen Land führte und beeinflusste, wie Strafverfolgungsbehörden auf aktive Schützensituationen reagieren.",
          nl: "Op 20 april 1999 doodden studenten Eric Harris en Dylan Klebold 13 mensen (12 studenten en één leraar) op Columbine High School voordat ze zelfmoord pleegden, in totaal 15 doden. Het bloedbad duurde ongeveer 49 minuten en verwondde 21 extra mensen. De schietpartij schokte de natie en leidde tot wijdverspreide debatten over wapenbeheersing, schoolveiligheid, pesten en geweld in de media. Columbine werd een tragisch keerpunt dat leidde tot verbeterde veiligheidsmaatregelen op scholen in het hele land en beïnvloedde hoe wetshandhaving reageert op actieve schutterssituaties."
        }
      },
      {
        question: {
          en: "On April 20, 1889, which historical figure who would later become dictator of Nazi Germany was born in Austria?",
          es: "El 20 de abril de 1889, ¿qué figura histórica que más tarde se convertiría en dictador de la Alemania nazi nació en Austria?",
          de: "Welche historische Figur, die später Diktator von Nazi-Deutschland werden sollte, wurde am 20. April 1889 in Österreich geboren?",
          nl: "Op 20 april 1889, welke historische figuur die later dictator van nazi-Duitsland zou worden, werd geboren in Oostenrijk?"
        },
        options: [
          { en: "Heinrich Himmler", es: "Heinrich Himmler", de: "Heinrich Himmler", nl: "Heinrich Himmler" },
          { en: "Joseph Goebbels", es: "Joseph Goebbels", de: "Joseph Goebbels", nl: "Joseph Goebbels" },
          { en: "Hermann Göring", es: "Hermann Göring", de: "Hermann Göring", nl: "Hermann Göring" },
          { en: "Adolf Hitler", es: "Adolf Hitler", de: "Adolf Hitler", nl: "Adolf Hitler" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Adolf Hitler was born on April 20, 1889, in Braunau am Inn, Austria. He rose to power as Chancellor of Germany in 1933 and became Führer in 1934, establishing a totalitarian Nazi regime. Hitler led Germany into World War II in 1939 and orchestrated the Holocaust, the systematic murder of six million Jews and millions of others. His actions resulted in approximately 70-85 million deaths worldwide. Hitler committed suicide in his Berlin bunker on April 30, 1945, as Allied forces closed in.",
          es: "Adolf Hitler nació el 20 de abril de 1889 en Braunau am Inn, Austria. Ascendió al poder como Canciller de Alemania en 1933 y se convirtió en Führer en 1934, estableciendo un régimen nazi totalitario. Hitler llevó a Alemania a la Segunda Guerra Mundial en 1939 y orquestó el Holocausto, el asesinato sistemático de seis millones de judíos y millones de otros. Sus acciones resultaron en aproximadamente 70-85 millones de muertes en todo el mundo. Hitler se suicidó en su búnker de Berlín el 30 de abril de 1945, mientras las fuerzas aliadas se acercaban.",
          de: "Adolf Hitler wurde am 20. April 1889 in Braunau am Inn, Österreich, geboren. Er kam 1933 als Reichskanzler von Deutschland an die Macht und wurde 1934 Führer, wobei er ein totalitäres Nazi-Regime etablierte. Hitler führte Deutschland 1939 in den Zweiten Weltkrieg und orchestrierte den Holocaust, die systematische Ermordung von sechs Millionen Juden und Millionen anderen. Seine Handlungen führten zu etwa 70-85 Millionen Toten weltweit. Hitler beging am 30. April 1945 Selbstmord in seinem Berliner Bunker, als die alliierten Streitkräfte näher rückten.",
          nl: "Adolf Hitler werd geboren op 20 april 1889 in Braunau am Inn, Oostenrijk. Hij kwam aan de macht als kanselier van Duitsland in 1933 en werd Führer in 1934, waarbij hij een totalitair naziregime vestigde. Hitler leidde Duitsland in 1939 de Tweede Wereldoorlog in en orkestreerde de Holocaust, de systematische moord op zes miljoen Joden en miljoenen anderen. Zijn acties resulteerden in ongeveer 70-85 miljoen doden wereldwijd. Hitler pleegde zelfmoord in zijn Berlijnse bunker op 30 april 1945, toen de geallieerde troepen naderden."
        }
      },
      {
        question: {
          en: "On April 20, 1914, the Ludlow Massacre occurred during a labor strike by workers in which industry in Colorado?",
          es: "El 20 de abril de 1914, la Masacre de Ludlow ocurrió durante una huelga laboral de trabajadores en qué industria en Colorado?",
          de: "Am 20. April 1914 ereignete sich das Ludlow-Massaker während eines Arbeitskampfes von Arbeitern in welcher Industrie in Colorado?",
          nl: "Op 20 april 1914 vond het Ludlow-bloedbad plaats tijdens een arbeidsstaking door arbeiders in welke industrie in Colorado?"
        },
        options: [
          { en: "Railroad construction", es: "Construcción de ferrocarriles", de: "Eisenbahnbau", nl: "Spoorwegbouw" },
          { en: "Oil drilling", es: "Perforación de petróleo", de: "Ölbohrung", nl: "Olieboring" },
          { en: "Coal mining", es: "Minería del carbón", de: "Kohlebergbau", nl: "Kolenmijnbouw" },
          { en: "Steel manufacturing", es: "Fabricación de acero", de: "Stahlherstellung", nl: "Staalfabricage" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 20, 1914, Colorado National Guard soldiers and company guards attacked a tent colony of striking coal miners and their families in Ludlow, Colorado. At least 21 people were killed, including 11 children and two women who suffocated in a pit beneath a burning tent. The massacre became a watershed moment in American labor history, exposing the brutal conditions faced by miners and galvanizing support for workers' rights. The tragedy occurred during a violent struggle between corporate power and laboring men for better working conditions and union recognition.",
          es: "El 20 de abril de 1914, soldados de la Guardia Nacional de Colorado y guardias de la compañía atacaron una colonia de tiendas de campaña de mineros del carbón en huelga y sus familias en Ludlow, Colorado. Al menos 21 personas murieron, incluidos 11 niños y dos mujeres que se asfixiaron en un pozo debajo de una tienda en llamas. La masacre se convirtió en un momento decisivo en la historia laboral estadounidense, exponiendo las condiciones brutales que enfrentaban los mineros y galvanizando el apoyo a los derechos de los trabajadores. La tragedia ocurrió durante una lucha violenta entre el poder corporativo y los trabajadores por mejores condiciones laborales y reconocimiento sindical.",
          de: "Am 20. April 1914 griffen Soldaten der Colorado National Guard und Firmenwachen eine Zeltkolonie streikender Kohlebergleute und ihrer Familien in Ludlow, Colorado, an. Mindestens 21 Menschen wurden getötet, darunter 11 Kinder und zwei Frauen, die in einer Grube unter einem brennenden Zelt erstickten. Das Massaker wurde zu einem Wendepunkt in der amerikanischen Arbeitsgeschichte, der die brutalen Bedingungen aufdeckte, denen Bergleute ausgesetzt waren, und die Unterstützung für Arbeiterrechte mobilisierte. Die Tragödie ereignete sich während eines gewaltsamen Kampfes zwischen Unternehmensmacht und Arbeitern für bessere Arbeitsbedingungen und Gewerkschaftsanerkennung.",
          nl: "Op 20 april 1914 vielen soldaten van de Colorado National Guard en bedrijfsbewakers een tentenkamp aan van stakende kolenmijnwerkers en hun families in Ludlow, Colorado. Minstens 21 mensen werden gedood, waaronder 11 kinderen en twee vrouwen die stikten in een kuil onder een brandende tent. Het bloedbad werd een keerpunt in de Amerikaanse arbeidsgeschiedenis, waarbij de brute omstandigheden werden onthuld waarmee mijnwerkers werden geconfronteerd en de steun voor arbeidersrechten werd gemobiliseerd. De tragedie vond plaats tijdens een gewelddadige strijd tussen bedrijfsmacht en arbeiders voor betere arbeidsomstandigheden en vakbondserkenning."
        }
      },
      {
        question: {
          en: "On April 20, 1972, which Apollo mission's lunar module landed on the Moon with astronauts John Young and Charles Duke?",
          es: "El 20 de abril de 1972, el módulo lunar de qué misión Apolo aterrizó en la Luna con los astronautas John Young y Charles Duke?",
          de: "Am 20. April 1972 landete das Mondmodul welcher Apollo-Mission mit den Astronauten John Young und Charles Duke auf dem Mond?",
          nl: "Op 20 april 1972 landde de maanmodule van welke Apollo-missie op de Maan met astronauten John Young en Charles Duke?"
        },
        options: [
          { en: "Apollo 16", es: "Apolo 16", de: "Apollo 16", nl: "Apollo 16" },
          { en: "Apollo 17", es: "Apolo 17", de: "Apollo 17", nl: "Apollo 17" },
          { en: "Apollo 14", es: "Apolo 14", de: "Apollo 14", nl: "Apollo 14" },
          { en: "Apollo 15", es: "Apolo 15", de: "Apollo 15", nl: "Apollo 15" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Apollo 16 landed on the Moon on April 20, 1972, marking the fifth crewed lunar landing. Astronauts John Young and Charles Duke spent 71 hours on the lunar surface in the Descartes Highlands, conducting three moonwalks totaling over 20 hours. They collected 209 pounds of lunar samples and deployed scientific instruments. Command Module Pilot Thomas Mattingly orbited above. Apollo 16 was the first mission to land in the lunar highlands rather than a mare region. It was the penultimate Apollo mission, followed only by Apollo 17 in December 1972.",
          es: "Apolo 16 aterrizó en la Luna el 20 de abril de 1972, marcando el quinto aterrizaje lunar tripulado. Los astronautas John Young y Charles Duke pasaron 71 horas en la superficie lunar en las Tierras Altas de Descartes, realizando tres caminatas lunares que totalizaron más de 20 horas. Recolectaron 209 libras de muestras lunares y desplegaron instrumentos científicos. El piloto del módulo de comando Thomas Mattingly orbitó arriba. Apolo 16 fue la primera misión en aterrizar en las tierras altas lunares en lugar de una región de mare. Fue la penúltima misión Apolo, seguida solo por Apolo 17 en diciembre de 1972.",
          de: "Apollo 16 landete am 20. April 1972 auf dem Mond und markierte die fünfte bemannte Mondlandung. Die Astronauten John Young und Charles Duke verbrachten 71 Stunden auf der Mondoberfläche im Descartes-Hochland und führten drei Mondwanderungen durch, die insgesamt über 20 Stunden dauerten. Sie sammelten 209 Pfund Mondproben und installierten wissenschaftliche Instrumente. Kommandomodulpilot Thomas Mattingly kreiste oben. Apollo 16 war die erste Mission, die im Mondhochland und nicht in einer Mare-Region landete. Es war die vorletzte Apollo-Mission, gefolgt nur von Apollo 17 im Dezember 1972.",
          nl: "Apollo 16 landde op 20 april 1972 op de Maan, wat de vijfde bemande maanlanding markeerde. Astronauten John Young en Charles Duke brachten 71 uur door op het maanoppervlak in de Descartes Highlands, waarbij ze drie maanwandelingen uitvoerden die in totaal meer dan 20 uur duurden. Ze verzamelden 209 pond maanmonsters en installeerden wetenschappelijke instrumenten. Command Module Piloot Thomas Mattingly cirkelde erboven. Apollo 16 was de eerste missie die landde in de maanhoogvlakten in plaats van een mare-regio. Het was de op één na laatste Apollo-missie, gevolgd door alleen Apollo 17 in december 1972."
        }
      },
      {
        question: {
          en: "The Columbine shooting took place in which Colorado city near Denver?",
          es: "El tiroteo de Columbine tuvo lugar en qué ciudad de Colorado cerca de Denver?",
          de: "Die Columbine-Schießerei fand in welcher Stadt in Colorado in der Nähe von Denver statt?",
          nl: "De Columbine-schietpartij vond plaats in welke stad in Colorado nabij Denver?"
        },
        options: [
          { en: "Littleton", es: "Littleton", de: "Littleton", nl: "Littleton" },
          { en: "Aurora", es: "Aurora", de: "Aurora", nl: "Aurora" },
          { en: "Boulder", es: "Boulder", de: "Boulder", nl: "Boulder" },
          { en: "Colorado Springs", es: "Colorado Springs", de: "Colorado Springs", nl: "Colorado Springs" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Columbine High School is located in Columbine, an unincorporated community in Jefferson County near Littleton, Colorado, about 10 miles southwest of Denver. The April 20, 1999, shooting occurred during the school day and was extensively covered by media, with live television broadcasts showing students fleeing and SWAT teams responding. The tragedy profoundly impacted the Littleton community and sparked a national conversation about school safety. A permanent memorial was established at a nearby park to honor the 13 victims killed by the perpetrators.",
          es: "Columbine High School está ubicada en Columbine, una comunidad no incorporada en el condado de Jefferson cerca de Littleton, Colorado, aproximadamente 10 millas al suroeste de Denver. El tiroteo del 20 de abril de 1999 ocurrió durante el día escolar y fue extensamente cubierto por los medios, con transmisiones de televisión en vivo mostrando estudiantes huyendo y equipos SWAT respondiendo. La tragedia impactó profundamente a la comunidad de Littleton y provocó una conversación nacional sobre seguridad escolar. Se estableció un memorial permanente en un parque cercano para honrar a las 13 víctimas asesinadas por los perpetradores.",
          de: "Die Columbine High School befindet sich in Columbine, einer nicht eingemeindeten Gemeinde im Jefferson County in der Nähe von Littleton, Colorado, etwa 10 Meilen südwestlich von Denver. Die Schießerei vom 20. April 1999 ereignete sich während des Schultages und wurde ausführlich von den Medien berichtet, mit Live-Fernsehübertragungen, die fliehende Schüler und reagierende SWAT-Teams zeigten. Die Tragödie beeinträchtigte die Littleton-Gemeinde zutiefst und löste eine nationale Diskussion über Schulsicherheit aus. Ein permanentes Denkmal wurde in einem nahe gelegenen Park errichtet, um den 13 Opfern zu gedenken, die von den Tätern getötet wurden.",
          nl: "Columbine High School bevindt zich in Columbine, een niet-geïncorporeerde gemeenschap in Jefferson County nabij Littleton, Colorado, ongeveer 10 mijl ten zuidwesten van Denver. De schietpartij van 20 april 1999 vond plaats tijdens de schooldag en werd uitgebreid door de media besproken, met live televisie-uitzendingen die studenten lieten zien die vluchtten en SWAT-teams die reageerden. De tragedie had een diepgaande impact op de Littleton-gemeenschap en leidde tot een nationale discussie over schoolveiligheid. Een permanent gedenkteken werd opgericht in een nabijgelegen park ter ere van de 13 slachtoffers die door de daders werden gedood."
        }
      }
    ],

    // Day 21 - April 21st: Founding of Rome (753 BC) & Queen Elizabeth II Birthday (1926)
    day21: [
      {
        question: {
          en: "According to Roman mythology, on what date in 753 BC was the city of Rome founded by Romulus?",
          es: "Según la mitología romana, ¿en qué fecha del 753 a.C. fue fundada la ciudad de Roma por Rómulo?",
          de: "Laut römischer Mythologie wurde an welchem Datum im Jahr 753 v. Chr. die Stadt Rom von Romulus gegründet?",
          nl: "Volgens de Romeinse mythologie, op welke datum in 753 v.Chr. werd de stad Rome gesticht door Romulus?"
        },
        options: [
          { en: "May 1", es: "1 de mayo", de: "1. Mai", nl: "1 mei" },
          { en: "June 10", es: "10 de junio", de: "10. Juni", nl: "10 juni" },
          { en: "March 15", es: "15 de marzo", de: "15. März", nl: "15 maart" },
          { en: "April 21", es: "21 de abril", de: "21. April", nl: "21 april" }
        ],
        correctIndex: 3,
        explanation: {
          en: "According to Roman mythology and tradition, Romulus founded Rome on April 21, 753 BC, after killing his twin brother Remus. This date was established by Roman scholar Marcus Terentius Varro and coincided with the festival of Parilia, sacred to Pales, the goddess of shepherds. Romans celebrated this day annually as the birthday of their city, which would become the capital of one of history's greatest empires.",
          es: "Según la mitología y tradición romana, Rómulo fundó Roma el 21 de abril del 753 a.C., después de matar a su hermano gemelo Remo. Esta fecha fue establecida por el erudito romano Marco Terencio Varrón y coincidió con el festival de Parilia, sagrado para Pales, la diosa de los pastores. Los romanos celebraban este día anualmente como el cumpleaños de su ciudad, que se convertiría en la capital de uno de los imperios más grandes de la historia.",
          de: "Laut römischer Mythologie und Tradition gründete Romulus Rom am 21. April 753 v. Chr., nachdem er seinen Zwillingsbruder Remus getötet hatte. Dieses Datum wurde vom römischen Gelehrten Marcus Terentius Varro festgelegt und fiel mit dem Fest der Parilia zusammen, das der Göttin Pales, der Göttin der Hirten, geweiht war. Die Römer feierten diesen Tag jährlich als Geburtstag ihrer Stadt, die zur Hauptstadt eines der größten Reiche der Geschichte werden sollte.",
          nl: "Volgens de Romeinse mythologie en traditie stichtte Romulus Rome op 21 april 753 v.Chr., nadat hij zijn tweelingbroer Remus had gedood. Deze datum werd vastgesteld door de Romeinse geleerde Marcus Terentius Varro en viel samen met het festival van Parilia, gewijd aan Pales, de godin van de herders. De Romeinen vierden deze dag jaarlijks als de verjaardag van hun stad, die de hoofdstad zou worden van een van de grootste rijken in de geschiedenis."
        }
      },
      {
        question: {
          en: "Queen Elizabeth II, who became the longest-reigning British monarch, was born on April 21 in which year?",
          es: "La Reina Isabel II, quien se convirtió en la monarca británica con el reinado más largo, nació el 21 de abril de qué año?",
          de: "Königin Elizabeth II., die zur am längsten regierenden britischen Monarchin wurde, wurde am 21. April welchen Jahres geboren?",
          nl: "Koningin Elizabeth II, die de langst regerende Britse monarch werd, werd geboren op 21 april in welk jaar?"
        },
        options: [
          { en: "1930", es: "1930", de: "1930", nl: "1930" },
          { en: "1922", es: "1922", de: "1922", nl: "1922" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1926", es: "1926", de: "1926", nl: "1926" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Queen Elizabeth II was born Elizabeth Alexandra Mary Windsor on April 21, 1926, in London. She ascended to the throne on February 6, 1952, and reigned for over 70 years until her death on September 8, 2022. Her reign was the longest of any British monarch, surpassing Queen Victoria's 63-year reign. She witnessed tremendous changes in British society and the transformation of the British Empire into the Commonwealth of Nations.",
          es: "La Reina Isabel II nació como Elizabeth Alexandra Mary Windsor el 21 de abril de 1926 en Londres. Ascendió al trono el 6 de febrero de 1952 y reinó durante más de 70 años hasta su muerte el 8 de septiembre de 2022. Su reinado fue el más largo de cualquier monarca británico, superando el reinado de 63 años de la Reina Victoria. Fue testigo de tremendos cambios en la sociedad británica y la transformación del Imperio Británico en la Commonwealth de Naciones.",
          de: "Königin Elizabeth II. wurde als Elizabeth Alexandra Mary Windsor am 21. April 1926 in London geboren. Sie bestieg den Thron am 6. Februar 1952 und regierte über 70 Jahre bis zu ihrem Tod am 8. September 2022. Ihre Regentschaft war die längste eines britischen Monarchen und übertraf die 63-jährige Regentschaft von Königin Victoria. Sie erlebte enorme Veränderungen in der britischen Gesellschaft und die Transformation des britischen Empire in das Commonwealth of Nations.",
          nl: "Koningin Elizabeth II werd geboren als Elizabeth Alexandra Mary Windsor op 21 april 1926 in Londen. Ze besteeg de troon op 6 februari 1952 en regeerde meer dan 70 jaar tot haar dood op 8 september 2022. Haar regering was de langste van alle Britse vorsten en overtrof het 63-jarige bewind van koningin Victoria. Ze was getuige van enorme veranderingen in de Britse samenleving en de transformatie van het Britse Rijk naar het Gemenebest van Naties."
        }
      },
      {
        question: {
          en: "On April 21, 1836, which decisive battle lasting only 18 minutes led to Texas independence from Mexico?",
          es: "El 21 de abril de 1836, ¿qué batalla decisiva que duró solo 18 minutos llevó a la independencia de Texas de México?",
          de: "Welche entscheidende Schlacht, die nur 18 Minuten dauerte, führte am 21. April 1836 zur Unabhängigkeit von Texas von Mexiko?",
          nl: "Op 21 april 1836, welke beslissende slag die slechts 18 minuten duurde, leidde tot de onafhankelijkheid van Texas van Mexico?"
        },
        options: [
          { en: "Battle of Goliad", es: "Batalla de Goliad", de: "Schlacht von Goliad", nl: "Slag bij Goliad" },
          { en: "Battle of San Jacinto", es: "Batalla de San Jacinto", de: "Schlacht von San Jacinto", nl: "Slag bij San Jacinto" },
          { en: "Battle of the Alamo", es: "Batalla del Álamo", de: "Schlacht von Alamo", nl: "Slag om de Alamo" },
          { en: "Battle of Gonzales", es: "Batalla de Gonzales", de: "Schlacht von Gonzales", nl: "Slag bij Gonzales" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Battle of San Jacinto took place on April 21, 1836, where Texan forces led by General Sam Houston defeated Mexican General Santa Anna in a surprise attack lasting only 18 minutes. The battle cry \"Remember the Alamo!\" motivated Texan troops seeking revenge for earlier defeats. Santa Anna was captured the next day, and this decisive victory secured Texas independence from Mexico. The battle resulted in the creation of the Republic of Texas, which existed as an independent nation for nine years before joining the United States in 1845.",
          es: "La Batalla de San Jacinto tuvo lugar el 21 de abril de 1836, donde las fuerzas texanas lideradas por el general Sam Houston derrotaron al general mexicano Santa Anna en un ataque sorpresa que duró solo 18 minutos. El grito de batalla '¡Recuerden el Álamo!' motivó a las tropas texanas que buscaban venganza por derrotas anteriores. Santa Anna fue capturado al día siguiente, y esta victoria decisiva aseguró la independencia de Texas de México. La batalla resultó en la creación de la República de Texas, que existió como nación independiente durante nueve años antes de unirse a los Estados Unidos en 1845.",
          de: "Die Schlacht von San Jacinto fand am 21. April 1836 statt, als texanische Streitkräfte unter General Sam Houston den mexikanischen General Santa Anna in einem Überraschungsangriff besiegten, der nur 18 Minuten dauerte. Der Schlachtruf 'Erinnert euch an Alamo!' motivierte texanische Truppen, die Rache für frühere Niederlagen suchten. Santa Anna wurde am nächsten Tag gefangen genommen, und dieser entscheidende Sieg sicherte die Unabhängigkeit von Texas von Mexiko. Die Schlacht führte zur Gründung der Republik Texas, die neun Jahre lang als unabhängige Nation existierte, bevor sie 1845 den Vereinigten Staaten beitrat.",
          nl: "De Slag bij San Jacinto vond plaats op 21 april 1836, waarbij Texaanse troepen onder leiding van generaal Sam Houston de Mexicaanse generaal Santa Anna versloegen in een verrassingsaanval die slechts 18 minuten duurde. De strijdkreet 'Herinner de Alamo!' motiveerde Texaanse troepen die wraak zochten voor eerdere nederlagen. Santa Anna werd de volgende dag gevangengenomen, en deze beslissende overwinning verzekerde de onafhankelijkheid van Texas van Mexico. De slag resulteerde in de oprichting van de Republiek Texas, die negen jaar als onafhankelijke natie bestond voordat het in 1845 bij de Verenigde Staten voegde."
        }
      },
      {
        question: {
          en: "On April 21, 1509, which English king ascended to the throne following the death of his father Henry VII?",
          es: "El 21 de abril de 1509, ¿qué rey inglés ascendió al trono tras la muerte de su padre Enrique VII?",
          de: "Welcher englische König bestieg am 21. April 1509 den Thron nach dem Tod seines Vaters Heinrich VII.?",
          nl: "Op 21 april 1509, welke Engelse koning besteeg de troon na de dood van zijn vader Hendrik VII?"
        },
        options: [
          { en: "Edward VI", es: "Eduardo VI", de: "Eduard VI.", nl: "Eduard VI" },
          { en: "Henry VIII", es: "Enrique VIII", de: "Heinrich VIII.", nl: "Hendrik VIII" },
          { en: "Richard III", es: "Ricardo III", de: "Richard III.", nl: "Richard III" },
          { en: "Henry VI", es: "Enrique VI", de: "Heinrich VI.", nl: "Hendrik VI" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Henry VIII ascended to the English throne on April 21, 1509, at age 17, following his father's death. His 38-year reign is remembered for the English Reformation, breaking from the Roman Catholic Church to establish the Church of England. He is also famous for his six marriages and his role in the Dissolution of the Monasteries. Henry's desire for a male heir and his break with Rome profoundly shaped English history, politics, and religion for centuries to come.",
          es: "Enrique VIII ascendió al trono inglés el 21 de abril de 1509, a los 17 años, tras la muerte de su padre. Su reinado de 38 años es recordado por la Reforma Inglesa, la ruptura con la Iglesia Católica Romana para establecer la Iglesia de Inglaterra. También es famoso por sus seis matrimonios y su papel en la Disolución de los Monasterios. El deseo de Enrique de un heredero varón y su ruptura con Roma moldearon profundamente la historia, política y religión inglesa durante los siglos venideros.",
          de: "Heinrich VIII. bestieg am 21. April 1509 im Alter von 17 Jahren den englischen Thron nach dem Tod seines Vaters. Seine 38-jährige Herrschaft ist bekannt für die englische Reformation, den Bruch mit der römisch-katholischen Kirche zur Gründung der Church of England. Er ist auch berühmt für seine sechs Ehen und seine Rolle bei der Auflösung der Klöster. Heinrichs Wunsch nach einem männlichen Erben und sein Bruch mit Rom prägten die englische Geschichte, Politik und Religion für die kommenden Jahrhunderte zutiefst.",
          nl: "Hendrik VIII besteeg op 21 april 1509 op 17-jarige leeftijd de Engelse troon na de dood van zijn vader. Zijn 38-jarige regering wordt herinnerd voor de Engelse Reformatie, de breuk met de rooms-katholieke kerk om de Kerk van Engeland op te richten. Hij is ook beroemd om zijn zes huwelijken en zijn rol in de Ontbinding van de Kloosters. Hendriks verlangen naar een mannelijke erfgenaam en zijn breuk met Rome vormden eeuwenlang diepgaand de Engelse geschiedenis, politiek en religie."
        }
      },
      {
        question: {
          en: "On April 21, 1918, which famous German World War I fighter pilot known as the 'Red Baron' was shot down and killed?",
          es: "El 21 de abril de 1918, ¿qué famoso piloto de combate alemán de la Primera Guerra Mundial conocido como el 'Barón Rojo' fue derribado y muerto?",
          de: "Welcher berühmte deutsche Jagdflieger des Ersten Weltkriegs, bekannt als der 'Rote Baron', wurde am 21. April 1918 abgeschossen und getötet?",
          nl: "Op 21 april 1918, welke beroemde Duitse gevechtspiloot uit de Eerste Wereldoorlog, bekend als de 'Rode Baron', werd neergeschoten en gedood?"
        },
        options: [
          { en: "Ernst Udet", es: "Ernst Udet", de: "Ernst Udet", nl: "Ernst Udet" },
          { en: "Oswald Boelcke", es: "Oswald Boelcke", de: "Oswald Boelcke", nl: "Oswald Boelcke" },
          { en: "Manfred von Richthofen", es: "Manfred von Richthofen", de: "Manfred von Richthofen", nl: "Manfred von Richthofen" },
          { en: "Hermann Göring", es: "Hermann Göring", de: "Hermann Göring", nl: "Hermann Göring" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Manfred von Richthofen, nicknamed the 'Red Baron' for his distinctive bright red Fokker triplane, was shot down over France on April 21, 1918. He was credited with 80 confirmed air combat victories, making him the most successful fighter pilot of World War I. The circumstances of his death remain debated, with both ground fire from Australian troops and aerial combat with Canadian pilot Roy Brown claimed as possible causes. His legacy made him an iconic figure in aviation history and German military tradition.",
          es: "Manfred von Richthofen, apodado el 'Barón Rojo' por su distintivo triplano Fokker rojo brillante, fue derribado sobre Francia el 21 de abril de 1918. Se le acreditaron 80 victorias confirmadas en combate aéreo, convirtiéndolo en el piloto de combate más exitoso de la Primera Guerra Mundial. Las circunstancias de su muerte siguen siendo debatidas, con tanto el fuego terrestre de tropas australianas como el combate aéreo con el piloto canadiense Roy Brown reclamados como posibles causas. Su legado lo convirtió en una figura icónica en la historia de la aviación y la tradición militar alemana.",
          de: "Manfred von Richthofen, wegen seines markanten hellroten Fokker-Dreideckers 'Roter Baron' genannt, wurde am 21. April 1918 über Frankreich abgeschossen. Ihm wurden 80 bestätigte Luftkampfsiege zugeschrieben, was ihn zum erfolgreichsten Jagdflieger des Ersten Weltkriegs machte. Die Umstände seines Todes werden weiterhin diskutiert, wobei sowohl Bodenfeuer von australischen Truppen als auch Luftkampf mit dem kanadischen Piloten Roy Brown als mögliche Ursachen genannt werden. Sein Vermächtnis machte ihn zu einer Ikone in der Luftfahrtgeschichte und der deutschen Militärtradition.",
          nl: "Manfred von Richthofen, bijgenaamd de 'Rode Baron' vanwege zijn opvallende helderrode Fokker driekleurig vliegtuig, werd neergeschoten boven Frankrijk op 21 april 1918. Hij had 80 bevestigde luchtgevechtsoverwinningen, waardoor hij de meest succesvolle gevechtspiloot van de Eerste Wereldoorlog werd. De omstandigheden van zijn dood blijven onderwerp van debat, waarbij zowel grondvuur van Australische troepen als luchtgevechten met de Canadese piloot Roy Brown als mogelijke oorzaken worden genoemd. Zijn erfenis maakte hem tot een iconische figuur in de luchtvaartgeschiedenis en de Duitse militaire traditie."
        }
      }
    ],

    // Day 22 - April 22nd: Earth Day (1970) & Lenin Birthday (1870)
    day22: [
      {
        question: {
          en: "On April 22, 1970, the first Earth Day was celebrated. Who was the U.S. Senator who founded this environmental movement?",
          es: "El 22 de abril de 1970 se celebró el primer Día de la Tierra. ¿Quién fue el senador estadounidense que fundó este movimiento ambiental?",
          de: "Am 22. April 1970 wurde der erste Tag der Erde gefeiert. Wer war der US-Senator, der diese Umweltbewegung gründete?",
          nl: "Op 22 april 1970 werd de eerste Dag van de Aarde gevierd. Wie was de Amerikaanse senator die deze milieubeweging oprichtte?"
        },
        options: [
          { en: "Edmund Muskie", es: "Edmund Muskie", de: "Edmund Muskie", nl: "Edmund Muskie" },
          { en: "Henry Jackson", es: "Henry Jackson", de: "Henry Jackson", nl: "Henry Jackson" },
          { en: "Ralph Nader", es: "Ralph Nader", de: "Ralph Nader", nl: "Ralph Nader" },
          { en: "Gaylord Nelson", es: "Gaylord Nelson", de: "Gaylord Nelson", nl: "Gaylord Nelson" }
        ],
        correctIndex: 3,
        explanation: {
          en: "U.S. Senator Gaylord Nelson from Wisconsin founded Earth Day on April 22, 1970, as a nationwide environmental teach-in. He hired young activist Denis Hayes to coordinate the event, which mobilized 20 million Americans to demonstrate for environmental protection. The date was chosen to fall between spring break and final exams, maximizing student participation. Earth Day is now celebrated globally by over 1 billion people in 193 countries, making it one of the world's largest civic observances dedicated to environmental awareness.",
          es: "El senador estadounidense Gaylord Nelson de Wisconsin fundó el Día de la Tierra el 22 de abril de 1970, como una enseñanza ambiental a nivel nacional. Contrató al joven activista Denis Hayes para coordinar el evento, que movilizó a 20 millones de estadounidenses para manifestarse por la protección ambiental. La fecha fue elegida para caer entre las vacaciones de primavera y los exámenes finales, maximizando la participación estudiantil. El Día de la Tierra ahora se celebra globalmente por más de mil millones de personas en 193 países, convirtiéndolo en una de las conmemoraciones cívicas más grandes del mundo dedicadas a la conciencia ambiental.",
          de: "US-Senator Gaylord Nelson aus Wisconsin gründete den Tag der Erde am 22. April 1970 als landesweite Umweltbildungsveranstaltung. Er stellte den jungen Aktivisten Denis Hayes ein, um die Veranstaltung zu koordinieren, die 20 Millionen Amerikaner mobilisierte, um für Umweltschutz zu demonstrieren. Das Datum wurde gewählt, um zwischen Frühjahrsferien und Abschlussprüfungen zu fallen und die Beteiligung von Studenten zu maximieren. Der Tag der Erde wird heute weltweit von über 1 Milliarde Menschen in 193 Ländern gefeiert und ist damit eine der weltweit größten bürgerlichen Gedenkveranstaltungen, die dem Umweltbewusstsein gewidmet ist.",
          nl: "Amerikaanse senator Gaylord Nelson uit Wisconsin richtte op 22 april 1970 de Dag van de Aarde op als een landelijke milieu-teach-in. Hij huurde de jonge activist Denis Hayes in om het evenement te coördineren, dat 20 miljoen Amerikanen mobiliseerde om te demonstreren voor milieubescherming. De datum werd gekozen om tussen de voorjaarsvakantie en eindexamens te vallen, om de deelname van studenten te maximaliseren. De Dag van de Aarde wordt nu wereldwijd gevierd door meer dan 1 miljard mensen in 193 landen, waardoor het een van 's werelds grootste burgerlijke herdenkingen is die gewijd is aan milieubewustzijn."
        }
      },
      {
        question: {
          en: "Vladimir Lenin, leader of the Bolshevik Revolution and founder of the Soviet Union, was born on April 22 in which year?",
          es: "Vladimir Lenin, líder de la Revolución Bolchevique y fundador de la Unión Soviética, nació el 22 de abril de qué año?",
          de: "Wladimir Lenin, Führer der Bolschewistischen Revolution und Gründer der Sowjetunion, wurde am 22. April welchen Jahres geboren?",
          nl: "Vladimir Lenin, leider van de Bolsjewistische Revolutie en oprichter van de Sovjet-Unie, werd geboren op 22 april in welk jaar?"
        },
        options: [
          { en: "1870", es: "1870", de: "1870", nl: "1870" },
          { en: "1875", es: "1875", de: "1875", nl: "1875" },
          { en: "1865", es: "1865", de: "1865", nl: "1865" },
          { en: "1880", es: "1880", de: "1880", nl: "1880" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Vladimir Ilyich Lenin was born on April 22, 1870, in Simbirsk, Russia. He led the Bolshevik Revolution in October 1917, overthrowing the Russian Provisional Government and establishing the world's first socialist state. Lenin served as head of the Soviet government from 1917 until his death in 1924. His political theories, known as Leninism, became a major branch of Marxist ideology and profoundly influenced 20th-century history, shaping communist movements worldwide.",
          es: "Vladimir Ilich Lenin nació el 22 de abril de 1870 en Simbirsk, Rusia. Lideró la Revolución Bolchevique en octubre de 1917, derrocando al Gobierno Provisional Ruso y estableciendo el primer estado socialista del mundo. Lenin sirvió como jefe del gobierno soviético desde 1917 hasta su muerte en 1924. Sus teorías políticas, conocidas como leninismo, se convirtieron en una rama importante de la ideología marxista e influyeron profundamente en la historia del siglo XX, dando forma a movimientos comunistas en todo el mundo.",
          de: "Wladimir Iljitsch Lenin wurde am 22. April 1870 in Simbirsk, Russland, geboren. Er führte die Bolschewistische Revolution im Oktober 1917 an, stürzte die Russische Provisorische Regierung und gründete den ersten sozialistischen Staat der Welt. Lenin war von 1917 bis zu seinem Tod 1924 Regierungschef der Sowjetunion. Seine politischen Theorien, bekannt als Leninismus, wurden zu einem wichtigen Zweig der marxistischen Ideologie und beeinflussten die Geschichte des 20. Jahrhunderts zutiefst, indem sie kommunistische Bewegungen weltweit prägten.",
          nl: "Vladimir Iljitsj Lenin werd geboren op 22 april 1870 in Simbirsk, Rusland. Hij leidde de Bolsjewistische Revolutie in oktober 1917, waarbij hij de Russische Voorlopige Regering omverwierp en 's werelds eerste socialistische staat vestigde. Lenin diende als hoofd van de Sovjet-regering van 1917 tot zijn dood in 1924. Zijn politieke theorieën, bekend als leninisme, werden een belangrijke tak van de marxistische ideologie en beïnvloedden de geschiedenis van de 20e eeuw diepgaand, waarbij communistische bewegingen wereldwijd vorm kregen."
        }
      },
      {
        question: {
          en: "On April 22, 1970, how many Americans participated in the first Earth Day demonstrations?",
          es: "El 22 de abril de 1970, ¿cuántos estadounidenses participaron en las primeras manifestaciones del Día de la Tierra?",
          de: "Wie viele Amerikaner nahmen am 22. April 1970 an den ersten Tag-der-Erde-Demonstrationen teil?",
          nl: "Op 22 april 1970, hoeveel Amerikanen namen deel aan de eerste Dag van de Aarde demonstraties?"
        },
        options: [
          { en: "1 million", es: "1 millón", de: "1 Million", nl: "1 miljoen" },
          { en: "50 million", es: "50 millones", de: "50 Millionen", nl: "50 miljoen" },
          { en: "20 million", es: "20 millones", de: "20 Millionen", nl: "20 miljoen" },
          { en: "5 million", es: "5 millones", de: "5 Millionen", nl: "5 miljoen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Approximately 20 million Americans participated in the first Earth Day on April 22, 1970, representing about 10% of the U.S. population at the time. Thousands of colleges and universities organized protests, and communities across the country held rallies and educational events. The massive public response led to significant environmental legislation, including the creation of the Environmental Protection Agency (EPA) and the passage of the Clean Air Act, Clean Water Act, and Endangered Species Act. Earth Day demonstrated the power of grassroots environmental activism.",
          es: "Aproximadamente 20 millones de estadounidenses participaron en el primer Día de la Tierra el 22 de abril de 1970, representando aproximadamente el 10% de la población de EE. UU. en ese momento. Miles de colegios y universidades organizaron protestas, y comunidades en todo el país realizaron mítines y eventos educativos. La respuesta pública masiva llevó a una legislación ambiental significativa, incluida la creación de la Agencia de Protección Ambiental (EPA) y la aprobación de la Ley de Aire Limpio, Ley de Agua Limpia y Ley de Especies en Peligro de Extinción. El Día de la Tierra demostró el poder del activismo ambiental de base.",
          de: "Ungefähr 20 Millionen Amerikaner nahmen am ersten Tag der Erde am 22. April 1970 teil, was etwa 10% der damaligen US-Bevölkerung entsprach. Tausende von Colleges und Universitäten organisierten Proteste, und Gemeinden im ganzen Land hielten Kundgebungen und Bildungsveranstaltungen ab. Die massive öffentliche Reaktion führte zu bedeutender Umweltgesetzgebung, einschließlich der Gründung der Umweltschutzbehörde (EPA) und der Verabschiedung des Clean Air Act, Clean Water Act und Endangered Species Act. Der Tag der Erde demonstrierte die Macht des Basisumweltaktivismus.",
          nl: "Ongeveer 20 miljoen Amerikanen namen deel aan de eerste Dag van de Aarde op 22 april 1970, wat ongeveer 10% van de Amerikaanse bevolking op dat moment vertegenwoordigde. Duizenden hogescholen en universiteiten organiseerden protesten, en gemeenschappen in het hele land hielden rally's en educatieve evenementen. De massale publieke respons leidde tot aanzienlijke milieuwetgeving, waaronder de oprichting van het Environmental Protection Agency (EPA) en de goedkeuring van de Clean Air Act, Clean Water Act en Endangered Species Act. De Dag van de Aarde toonde de kracht van grassroots milieuactivisme."
        }
      },
      {
        question: {
          en: "On April 22, 1864, the U.S. Congress authorized the use of which phrase on American coins?",
          es: "El 22 de abril de 1864, el Congreso de EE. UU. autorizó el uso de qué frase en las monedas estadounidenses?",
          de: "Am 22. April 1864 genehmigte der US-Kongress die Verwendung welcher Phrase auf amerikanischen Münzen?",
          nl: "Op 22 april 1864 autoriseerde het Amerikaanse Congres het gebruik van welke zin op Amerikaanse munten?"
        },
        options: [
          { en: "Liberty and Justice", es: "Liberty and Justice", de: "Liberty and Justice", nl: "Liberty and Justice" },
          { en: "E Pluribus Unum", es: "E Pluribus Unum", de: "E Pluribus Unum", nl: "E Pluribus Unum" },
          { en: "In God We Trust", es: "In God We Trust", de: "In God We Trust", nl: "In God We Trust" },
          { en: "One Nation United", es: "One Nation United", de: "One Nation United", nl: "One Nation United" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 22, 1864, Congress passed the Coinage Act authorizing the inscription 'In God We Trust' to appear on U.S. coins. This was during the Civil War when religious sentiment was particularly strong. The phrase first appeared on the two-cent coin in 1864 and gradually appeared on other denominations. It became the official national motto of the United States in 1956, replacing the unofficial motto 'E Pluribus Unum.' The phrase continues to appear on all U.S. currency today.",
          es: "El 22 de abril de 1864, el Congreso aprobó la Ley de Acuñación autorizando la inscripción 'In God We Trust' para aparecer en las monedas estadounidenses. Esto fue durante la Guerra Civil cuando el sentimiento religioso era particularmente fuerte. La frase apareció por primera vez en la moneda de dos centavos en 1864 y gradualmente apareció en otras denominaciones. Se convirtió en el lema nacional oficial de los Estados Unidos en 1956, reemplazando el lema no oficial 'E Pluribus Unum'. La frase continúa apareciendo en toda la moneda estadounidense hoy.",
          de: "Am 22. April 1864 verabschiedete der Kongress das Münzgesetz, das die Inschrift 'In God We Trust' auf US-Münzen genehmigte. Dies war während des Bürgerkriegs, als religiöse Gefühle besonders stark waren. Die Phrase erschien erstmals 1864 auf der Zwei-Cent-Münze und erschien allmählich auf anderen Stückelungen. Sie wurde 1956 zum offiziellen Nationalmotto der Vereinigten Staaten und ersetzte das inoffizielle Motto 'E Pluribus Unum'. Die Phrase erscheint heute weiterhin auf allen US-Währungen.",
          nl: "Op 22 april 1864 keurde het Congres de Coinage Act goed die de inscriptie 'In God We Trust' toestond om op Amerikaanse munten te verschijnen. Dit was tijdens de Burgeroorlog toen religieus sentiment bijzonder sterk was. De zin verscheen voor het eerst op de twee-cent munt in 1864 en verscheen geleidelijk op andere coupures. Het werd in 1956 het officiële nationale motto van de Verenigde Staten, ter vervanging van het onofficiële motto 'E Pluribus Unum'. De zin blijft vandaag de dag op alle Amerikaanse valuta verschijnen."
        }
      },
      {
        question: {
          en: "The coincidence of Earth Day falling on Lenin's 100th birthday in 1970 led to conspiracy theories. Was this date intentional?",
          es: "La coincidencia de que el Día de la Tierra cayera en el cumpleaños número 100 de Lenin en 1970 llevó a teorías de conspiración. ¿Fue esta fecha intencional?",
          de: "Der Zufall, dass der Tag der Erde 1970 auf Lenins 100. Geburtstag fiel, führte zu Verschwörungstheorien. War dieses Datum beabsichtigt?",
          nl: "Het toeval dat de Dag van de Aarde viel op Lenins 100e verjaardag in 1970 leidde tot complottheorieën. Was deze datum opzettelijk?"
        },
        options: [
          { en: "Yes, it was deliberately chosen", es: "Sí, fue elegido deliberadamente", de: "Ja, es wurde absichtlich gewählt", nl: "Ja, het was opzettelijk gekozen" },
          { en: "The date was chosen by Soviet agents", es: "La fecha fue elegida por agentes soviéticos", de: "Das Datum wurde von sowjetischen Agenten gewählt", nl: "De datum werd gekozen door Sovjet-agenten" },
          { en: "It was moved to Lenin's birthday", es: "Se trasladó al cumpleaños de Lenin", de: "Es wurde auf Lenins Geburtstag verlegt", nl: "Het werd verplaatst naar Lenins verjaardag" },
          { en: "No, it was purely coincidental", es: "No, fue puramente coincidencial", de: "Nein, es war rein zufällig", nl: "Nee, het was puur toeval" }
        ],
        correctIndex: 3,
        explanation: {
          en: "According to fact-checkers and founder Gaylord Nelson, the date was purely coincidental. Nelson wanted a date in spring with good weather that fell during the week of April 19-25 to maximize college student participation, avoiding spring break and exam periods. He did not consider Lenin's birthday when choosing April 22. The conspiracy theory has persisted despite being thoroughly debunked, demonstrating how historical coincidences can fuel unfounded speculation about political motivations.",
          es: "Según los verificadores de hechos y el fundador Gaylord Nelson, la fecha fue puramente coincidencial. Nelson quería una fecha en primavera con buen clima que cayera durante la semana del 19 al 25 de abril para maximizar la participación de estudiantes universitarios, evitando las vacaciones de primavera y los períodos de exámenes. No consideró el cumpleaños de Lenin al elegir el 22 de abril. La teoría de conspiración ha persistido a pesar de haber sido completamente desmentida, demostrando cómo las coincidencias históricas pueden alimentar especulaciones infundadas sobre motivaciones políticas.",
          de: "Laut Faktenprüfern und Gründer Gaylord Nelson war das Datum rein zufällig. Nelson wollte ein Datum im Frühling mit gutem Wetter, das in die Woche vom 19. bis 25. April fiel, um die Teilnahme von College-Studenten zu maximieren und Frühjahrsferien und Prüfungszeiten zu vermeiden. Er berücksichtigte Lenins Geburtstag nicht bei der Wahl des 22. April. Die Verschwörungstheorie hat trotz gründlicher Widerlegung bestanden und zeigt, wie historische Zufälle unbegründete Spekulationen über politische Motivationen schüren können.",
          nl: "Volgens fact-checkers en oprichter Gaylord Nelson was de datum puur toevallig. Nelson wilde een datum in het voorjaar met goed weer die viel in de week van 19-25 april om de deelname van studenten te maximaliseren, waarbij voorjaarsvakantie en examenperiodes werden vermeden. Hij overwoog Lenins verjaardag niet bij het kiezen van 22 april. De complottheorie is blijven bestaan ondanks grondig te zijn ontkracht, wat aantoont hoe historische toevalligheden ongefundeerde speculatie over politieke motieven kunnen voeden."
        }
      }
    ],

    // Day 23 - April 23rd: Shakespeare Birthday/Death (1564/1616) & YouTube Founded (2005)
    day23: [
      {
        question: {
          en: "William Shakespeare was both born and died on April 23, but in different years. In which years did these events occur?",
          es: "William Shakespeare nació y murió el 23 de abril, pero en diferentes años. ¿En qué años ocurrieron estos eventos?",
          de: "William Shakespeare wurde am 23. April geboren und starb auch an diesem Datum, aber in verschiedenen Jahren. In welchen Jahren ereigneten sich diese Ereignisse?",
          nl: "William Shakespeare werd geboren en stierf op 23 april, maar in verschillende jaren. In welke jaren vonden deze gebeurtenissen plaats?"
        },
        options: [
          { en: "Born 1560, Died 1620", es: "Nacido en 1560, Murió en 1620", de: "Geboren 1560, Gestorben 1620", nl: "Geboren 1560, Gestorven 1620" },
          { en: "Born 1564, Died 1616", es: "Nacido en 1564, Murió en 1616", de: "Geboren 1564, Gestorben 1616", nl: "Geboren 1564, Gestorven 1616" },
          { en: "Born 1570, Died 1625", es: "Nacido en 1570, Murió en 1625", de: "Geboren 1570, Gestorben 1625", nl: "Geboren 1570, Gestorven 1625" },
          { en: "Born 1555, Died 1610", es: "Nacido en 1555, Murió en 1610", de: "Geboren 1555, Gestorben 1610", nl: "Geboren 1555, Gestorven 1610" }
        ],
        correctIndex: 1,
        explanation: {
          en: "William Shakespeare was born on April 23, 1564, in Stratford-upon-Avon, England, and died exactly 52 years later on April 23, 1616. Church records show his baptism on April 26, 1564, and since baptisms typically occurred three days after birth, April 23 is accepted as his birthday. The Bard of Avon is considered the greatest writer in the English language, having written approximately 39 plays, 154 sonnets, and numerous poems that continue to be performed and studied worldwide.",
          es: "William Shakespeare nació el 23 de abril de 1564 en Stratford-upon-Avon, Inglaterra, y murió exactamente 52 años después el 23 de abril de 1616. Los registros de la iglesia muestran su bautismo el 26 de abril de 1564, y dado que los bautismos típicamente ocurrían tres días después del nacimiento, se acepta el 23 de abril como su cumpleaños. El Bardo de Avon es considerado el escritor más grande en lengua inglesa, habiendo escrito aproximadamente 39 obras de teatro, 154 sonetos y numerosos poemas que continúan siendo representados y estudiados en todo el mundo.",
          de: "William Shakespeare wurde am 23. April 1564 in Stratford-upon-Avon, England, geboren und starb genau 52 Jahre später am 23. April 1616. Kirchenunterlagen zeigen seine Taufe am 26. April 1564, und da Taufen normalerweise drei Tage nach der Geburt stattfanden, wird der 23. April als sein Geburtstag akzeptiert. Der Barde von Avon gilt als größter Schriftsteller in englischer Sprache, der etwa 39 Theaterstücke, 154 Sonette und zahlreiche Gedichte schrieb, die weltweit weiterhin aufgeführt und studiert werden.",
          nl: "William Shakespeare werd geboren op 23 april 1564 in Stratford-upon-Avon, Engeland, en stierf precies 52 jaar later op 23 april 1616. Kerkelijke registers tonen zijn doop op 26 april 1564, en aangezien dopen meestal drie dagen na de geboorte plaatsvonden, wordt 23 april geaccepteerd als zijn verjaardag. De Bard van Avon wordt beschouwd als de grootste schrijver in de Engelse taal, die ongeveer 39 toneelstukken, 154 sonnetten en talrijke gedichten schreef die wereldwijd blijven worden opgevoerd en bestudeerd."
        }
      },
      {
        question: {
          en: "On April 23, 2005, the first video was uploaded to YouTube. What was the title of this historic video?",
          es: "El 23 de abril de 2005, se subió el primer video a YouTube. ¿Cuál fue el título de este video histórico?",
          de: "Am 23. April 2005 wurde das erste Video auf YouTube hochgeladen. Was war der Titel dieses historischen Videos?",
          nl: "Op 23 april 2005 werd de eerste video geüpload naar YouTube. Wat was de titel van deze historische video?"
        },
        options: [
          { en: "Welcome to YouTube", es: "Welcome to YouTube", de: "Welcome to YouTube", nl: "Welcome to YouTube" },
          { en: "Hello World", es: "Hello World", de: "Hello World", nl: "Hello World" },
          { en: "First YouTube video", es: "First YouTube video", de: "First YouTube video", nl: "First YouTube video" },
          { en: "Me at the zoo", es: "Me at the zoo", de: "Me at the zoo", nl: "Me at the zoo" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The first YouTube video, titled 'Me at the zoo,' was uploaded on April 23, 2005, by co-founder Jawed Karim. The 19-second video shows Karim at the San Diego Zoo discussing elephants. This simple upload launched a revolution in media sharing and user-generated content. Today, YouTube has over 2 billion monthly users, and more than 500 hours of video content are uploaded every minute. The platform transformed how we consume entertainment, education, and news.",
          es: "El primer video de YouTube, titulado 'Me at the zoo', fue subido el 23 de abril de 2005 por el cofundador Jawed Karim. El video de 19 segundos muestra a Karim en el zoológico de San Diego hablando sobre elefantes. Esta simple carga lanzó una revolución en el intercambio de medios y contenido generado por usuarios. Hoy, YouTube tiene más de 2 mil millones de usuarios mensuales, y se suben más de 500 horas de contenido de video cada minuto. La plataforma transformó cómo consumimos entretenimiento, educación y noticias.",
          de: "Das erste YouTube-Video mit dem Titel 'Me at the zoo' wurde am 23. April 2005 vom Mitbegründer Jawed Karim hochgeladen. Das 19-sekündige Video zeigt Karim im Zoo von San Diego, wie er über Elefanten spricht. Dieser einfache Upload löste eine Revolution im Medienaustausch und nutzergenerierten Inhalten aus. Heute hat YouTube über 2 Milliarden monatliche Nutzer, und mehr als 500 Stunden Videoinhalte werden jede Minute hochgeladen. Die Plattform transformierte, wie wir Unterhaltung, Bildung und Nachrichten konsumieren.",
          nl: "De eerste YouTube-video, getiteld 'Me at the zoo', werd geüpload op 23 april 2005 door medeoprichter Jawed Karim. De 19 seconden durende video toont Karim in de San Diego Zoo terwijl hij het heeft over olifanten. Deze eenvoudige upload lanceerde een revolutie in het delen van media en door gebruikers gegenereerde inhoud. Tegenwoordig heeft YouTube meer dan 2 miljard maandelijkse gebruikers, en meer dan 500 uur aan video-inhoud wordt elke minuut geüpload. Het platform transformeerde hoe we entertainment, onderwijs en nieuws consumeren."
        }
      },
      {
        question: {
          en: "UNESCO celebrates World Book and Copyright Day on April 23 because Shakespeare and which other famous author both died on this date?",
          es: "La UNESCO celebra el Día Mundial del Libro y del Derecho de Autor el 23 de abril porque Shakespeare y qué otro autor famoso murieron en esta fecha?",
          de: "Die UNESCO feiert den Welttag des Buches und des Urheberrechts am 23. April, weil Shakespeare und welcher andere berühmte Autor beide an diesem Datum starben?",
          nl: "UNESCO viert de Wereldboekendag op 23 april omdat Shakespeare en welke andere beroemde auteur beide op deze datum stierven?"
        },
        options: [
          { en: "Victor Hugo", es: "Victor Hugo", de: "Victor Hugo", nl: "Victor Hugo" },
          { en: "Dante Alighieri", es: "Dante Alighieri", de: "Dante Alighieri", nl: "Dante Alighieri" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "Miguel de Cervantes", es: "Miguel de Cervantes", de: "Miguel de Cervantes", nl: "Miguel de Cervantes" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Miguel de Cervantes, author of 'Don Quixote,' died on April 23, 1616, the same day as Shakespeare. UNESCO established World Book and Copyright Day on April 23, 1995, to honor both literary giants and promote reading, publishing, and copyright protection. The date also marks the birth or death of several other prominent authors. Don Quixote is considered one of the greatest works of fiction ever written and a founding work of modern Western literature, making Cervantes' contribution to world literature comparable to Shakespeare's.",
          es: "Miguel de Cervantes, autor de 'Don Quijote', murió el 23 de abril de 1616, el mismo día que Shakespeare. La UNESCO estableció el Día Mundial del Libro y del Derecho de Autor el 23 de abril de 1995 para honrar a ambos gigantes literarios y promover la lectura, la publicación y la protección de derechos de autor. La fecha también marca el nacimiento o muerte de varios otros autores prominentes. Don Quijote es considerado una de las obras de ficción más grandes jamás escritas y una obra fundacional de la literatura occidental moderna, haciendo que la contribución de Cervantes a la literatura mundial sea comparable a la de Shakespeare.",
          de: "Miguel de Cervantes, Autor von 'Don Quijote', starb am 23. April 1616, am selben Tag wie Shakespeare. Die UNESCO etablierte den Welttag des Buches und des Urheberrechts am 23. April 1995, um beide literarischen Giganten zu ehren und Lesen, Veröffentlichung und Urheberrechtsschutz zu fördern. Das Datum markiert auch die Geburt oder den Tod mehrerer anderer prominenter Autoren. Don Quijote gilt als eines der größten Werke der Fiktion, die je geschrieben wurden, und ein Gründungswerk der modernen westlichen Literatur, was Cervantes' Beitrag zur Weltliteratur mit dem von Shakespeare vergleichbar macht.",
          nl: "Miguel de Cervantes, auteur van 'Don Quichot', stierf op 23 april 1616, dezelfde dag als Shakespeare. UNESCO vestigde de Wereldboekendag op 23 april 1995 om beide literaire giganten te eren en lezen, publiceren en auteursrechtbescherming te bevorderen. De datum markeert ook de geboorte of dood van verschillende andere prominente auteurs. Don Quichot wordt beschouwd als een van de grootste fictiewerken ooit geschreven en een grondleggend werk van de moderne westerse literatuur, waardoor Cervantes' bijdrage aan de wereldliteratuur vergelijkbaar is met die van Shakespeare."
        }
      },
      {
        question: {
          en: "On April 23, 1990, which famous space telescope was launched aboard the Space Shuttle Discovery?",
          es: "El 23 de abril de 1990, ¿qué famoso telescopio espacial fue lanzado a bordo del transbordador espacial Discovery?",
          de: "Welches berühmte Weltraumteleskop wurde am 23. April 1990 an Bord des Space Shuttle Discovery gestartet?",
          nl: "Op 23 april 1990, welke beroemde ruimtetelescoop werd gelanceerd aan boord van de Space Shuttle Discovery?"
        },
        options: [
          { en: "James Webb Space Telescope", es: "Telescopio Espacial James Webb", de: "James-Webb-Weltraumteleskop", nl: "James Webb-ruimtetelescoop" },
          { en: "Hubble Space Telescope", es: "Telescopio Espacial Hubble", de: "Hubble-Weltraumteleskop", nl: "Hubble-ruimtetelescoop" },
          { en: "Chandra X-ray Observatory", es: "Observatorio Chandra de rayos X", de: "Chandra-Röntgenobservatorium", nl: "Chandra-röntgenobservatorium" },
          { en: "Spitzer Space Telescope", es: "Telescopio Espacial Spitzer", de: "Spitzer-Weltraumteleskop", nl: "Spitzer-ruimtetelescoop" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Hubble Space Telescope was launched on April 23, 1990, aboard Space Shuttle Discovery mission STS-31. It was deployed on April 25, 1990, into orbit around Earth. Hubble revolutionized astronomy by providing unprecedented clear views of the universe from beyond Earth's atmosphere. Despite initial optical flaws that were corrected in 1993, Hubble has made over 1.5 million observations and contributed to groundbreaking discoveries including determining the age of the universe, discovering dark energy, and capturing stunning images of distant galaxies.",
          es: "El Telescopio Espacial Hubble fue lanzado el 23 de abril de 1990 a bordo de la misión STS-31 del transbordador espacial Discovery. Se desplegó el 25 de abril de 1990 en órbita alrededor de la Tierra. Hubble revolucionó la astronomía al proporcionar vistas sin precedentes del universo desde más allá de la atmósfera terrestre. A pesar de los defectos ópticos iniciales que se corrigieron en 1993, Hubble ha realizado más de 1.5 millones de observaciones y contribuido a descubrimientos revolucionarios, incluida la determinación de la edad del universo, el descubrimiento de la energía oscura y la captura de imágenes impresionantes de galaxias distantes.",
          de: "Das Hubble-Weltraumteleskop wurde am 23. April 1990 an Bord der Space-Shuttle-Discovery-Mission STS-31 gestartet. Es wurde am 25. April 1990 in einer Umlaufbahn um die Erde eingesetzt. Hubble revolutionierte die Astronomie, indem es beispiellose klare Ansichten des Universums von jenseits der Erdatmosphäre lieferte. Trotz anfänglicher optischer Mängel, die 1993 korrigiert wurden, hat Hubble über 1,5 Millionen Beobachtungen gemacht und zu bahnbrechenden Entdeckungen beigetragen, darunter die Bestimmung des Alters des Universums, die Entdeckung dunkler Energie und die Aufnahme atemberaubender Bilder ferner Galaxien.",
          nl: "De Hubble-ruimtetelescoop werd gelanceerd op 23 april 1990 aan boord van Space Shuttle Discovery missie STS-31. Het werd op 25 april 1990 in een baan om de aarde gebracht. Hubble revolutioneerde de astronomie door ongekende heldere uitzichten op het universum te bieden van buiten de atmosfeer van de aarde. Ondanks aanvankelijke optische gebreken die in 1993 werden gecorrigeerd, heeft Hubble meer dan 1,5 miljoen waarnemingen gedaan en bijgedragen aan baanbrekende ontdekkingen, waaronder het bepalen van de leeftijd van het universum, het ontdekken van donkere energie en het vastleggen van verbluffende beelden van verre sterrenstelsels."
        }
      },
      {
        question: {
          en: "On April 23, 1635, the first public school in America was founded. What was its name?",
          es: "El 23 de abril de 1635, se fundó la primera escuela pública en América. ¿Cuál era su nombre?",
          de: "Am 23. April 1635 wurde die erste öffentliche Schule in Amerika gegründet. Wie lautete ihr Name?",
          nl: "Op 23 april 1635 werd de eerste openbare school in Amerika opgericht. Wat was de naam ervan?"
        },
        options: [
          { en: "Boston Latin School", es: "Boston Latin School", de: "Boston Latin School", nl: "Boston Latin School" },
          { en: "Plymouth School", es: "Plymouth School", de: "Plymouth School", nl: "Plymouth School" },
          { en: "Yale Academy", es: "Yale Academy", de: "Yale Academy", nl: "Yale Academy" },
          { en: "Harvard College", es: "Harvard College", de: "Harvard College", nl: "Harvard College" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Boston Latin School was founded on April 23, 1635, making it the oldest public school in America and the oldest existing school in the United States. Established by the Town of Boston, it was modeled after the Free Grammar School of Boston in England. The school has educated numerous notable Americans including five signers of the Declaration of Independence, four Harvard presidents, and several U.S. governors. Boston Latin School continues to operate today as a highly selective exam school, maintaining its tradition of academic excellence for nearly 400 years.",
          es: "Boston Latin School fue fundada el 23 de abril de 1635, convirtiéndola en la escuela pública más antigua de América y la escuela existente más antigua de los Estados Unidos. Establecida por la ciudad de Boston, se modeló según la Free Grammar School de Boston en Inglaterra. La escuela ha educado a numerosos estadounidenses notables, incluidos cinco firmantes de la Declaración de Independencia, cuatro presidentes de Harvard y varios gobernadores de EE. UU. Boston Latin School continúa operando hoy como una escuela de examen altamente selectiva, manteniendo su tradición de excelencia académica durante casi 400 años.",
          de: "Die Boston Latin School wurde am 23. April 1635 gegründet und ist damit die älteste öffentliche Schule in Amerika und die älteste bestehende Schule in den Vereinigten Staaten. Gegründet von der Stadt Boston, wurde sie nach der Free Grammar School von Boston in England modelliert. Die Schule hat zahlreiche bemerkenswerte Amerikaner ausgebildet, darunter fünf Unterzeichner der Unabhängigkeitserklärung, vier Harvard-Präsidenten und mehrere US-Gouverneure. Die Boston Latin School ist heute noch als hoch selektive Prüfungsschule in Betrieb und pflegt ihre Tradition der akademischen Exzellenz seit fast 400 Jahren.",
          nl: "Boston Latin School werd opgericht op 23 april 1635, waardoor het de oudste openbare school in Amerika en de oudste bestaande school in de Verenigde Staten is. Opgericht door de stad Boston, was het gemodelleerd naar de Free Grammar School van Boston in Engeland. De school heeft talrijke opmerkelijke Amerikanen opgeleid, waaronder vijf ondertekenaars van de Onafhankelijkheidsverklaring, vier Harvard-presidenten en verschillende Amerikaanse gouverneurs. Boston Latin School blijft vandaag de dag opereren als een zeer selectieve examenschool, waarbij de traditie van academische uitmuntendheid al bijna 400 jaar wordt gehandhaafd."
        }
      }
    ],

    // Day 24 - April 24th: Library of Congress Founded (1800)
    day24: [
      {
        question: {
          en: "On April 24, 1800, President John Adams signed an act of Congress establishing which institution?",
          es: "El 24 de abril de 1800, el presidente John Adams firmó un acta del Congreso estableciendo qué institución?",
          de: "Am 24. April 1800 unterzeichnete Präsident John Adams ein Gesetz des Kongresses zur Gründung welcher Institution?",
          nl: "Op 24 april 1800 ondertekende president John Adams een wet van het Congres die welke instelling oprichtte?"
        },
        options: [
          { en: "Supreme Court Library", es: "Biblioteca de la Corte Suprema", de: "Oberster Gerichtshof Bibliothek", nl: "Hooggerechtshofbibliotheek" },
          { en: "Library of Congress", es: "Biblioteca del Congreso", de: "Library of Congress", nl: "Library of Congress" },
          { en: "Smithsonian Institution", es: "Institución Smithsoniana", de: "Smithsonian Institution", nl: "Smithsonian Institution" },
          { en: "National Archives", es: "Archivos Nacionales", de: "Nationalarchiv", nl: "Nationaal Archief" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 24, 1800, President John Adams approved legislation that appropriated $5,000 to purchase books for the use of Congress, establishing the Library of Congress. It is the nation's oldest federal cultural institution and the largest library in the world. The first books, ordered from London, arrived in 1801 and consisted of 740 volumes and 3 maps. Today, the Library of Congress holds more than 173 million items in its collection across multiple buildings in Washington, D.C.",
          es: "El 24 de abril de 1800, el presidente John Adams aprobó una legislación que asignó $5,000 para comprar libros para uso del Congreso, estableciendo la Biblioteca del Congreso. Es la institución cultural federal más antigua de la nación y la biblioteca más grande del mundo. Los primeros libros, ordenados desde Londres, llegaron en 1801 y consistieron en 740 volúmenes y 3 mapas. Hoy, la Biblioteca del Congreso alberga más de 173 millones de artículos en su colección en múltiples edificios en Washington, D.C.",
          de: "Am 24. April 1800 genehmigte Präsident John Adams ein Gesetz, das $5.000 für den Kauf von Büchern für den Kongress bereitstellte und die Library of Congress gründete. Sie ist die älteste bundesstaatliche Kulturinstitution der Nation und die größte Bibliothek der Welt. Die ersten Bücher, aus London bestellt, trafen 1801 ein und bestanden aus 740 Bänden und 3 Karten. Heute beherbergt die Library of Congress mehr als 173 Millionen Artikel in ihrer Sammlung in mehreren Gebäuden in Washington, D.C.",
          nl: "Op 24 april 1800 keurde president John Adams wetgeving goed die $5.000 reserveerde voor de aankoop van boeken voor gebruik door het Congres, waarmee de Library of Congress werd opgericht. Het is de oudste federale culturele instelling van de natie en de grootste bibliotheek ter wereld. De eerste boeken, besteld uit Londen, arriveerden in 1801 en bestonden uit 740 volumes en 3 kaarten. Tegenwoordig bezit de Library of Congress meer dan 173 miljoen items in haar collectie verspreid over meerdere gebouwen in Washington, D.C."
        }
      },
      {
        question: {
          en: "In 1814, the British burned the U.S. Capitol and destroyed the Library of Congress. Which former president sold his personal library to rebuild it?",
          es: "En 1814, los británicos quemaron el Capitolio de EE. UU. y destruyeron la Biblioteca del Congreso. ¿Qué ex presidente vendió su biblioteca personal para reconstruirla?",
          de: "1814 verbrannten die Briten das US-Kapitol und zerstörten die Library of Congress. Welcher ehemalige Präsident verkaufte seine persönliche Bibliothek, um sie wieder aufzubauen?",
          nl: "In 1814 verbrandden de Britten het Amerikaanse Capitool en vernietigden de Library of Congress. Welke voormalige president verkocht zijn persoonlijke bibliotheek om deze te herbouwen?"
        },
        options: [
          { en: "James Madison", es: "James Madison", de: "James Madison", nl: "James Madison" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" }
        ],
        correctIndex: 1,
        explanation: {
          en: "After the British burned the Capitol during the War of 1812, destroying the 3,000-volume Library of Congress, Thomas Jefferson offered to sell his personal library to Congress. Jefferson's collection of 6,487 books was purchased for $23,950 in 1815 and became the foundation for rebuilding the library. Jefferson's library was the largest and finest in the country at the time, containing books in multiple languages on diverse subjects. This acquisition transformed the Library of Congress from a legislative library into a national library with universal scope.",
          es: "Después de que los británicos quemaran el Capitolio durante la Guerra de 1812, destruyendo la Biblioteca del Congreso de 3,000 volúmenes, Thomas Jefferson ofreció vender su biblioteca personal al Congreso. La colección de Jefferson de 6,487 libros fue comprada por $23,950 en 1815 y se convirtió en la base para reconstruir la biblioteca. La biblioteca de Jefferson era la más grande y mejor del país en ese momento, conteniendo libros en múltiples idiomas sobre diversos temas. Esta adquisición transformó la Biblioteca del Congreso de una biblioteca legislativa en una biblioteca nacional con alcance universal.",
          de: "Nachdem die Briten während des Krieges von 1812 das Kapitol verbrannt und die 3.000 Bände umfassende Library of Congress zerstört hatten, bot Thomas Jefferson an, seine persönliche Bibliothek an den Kongress zu verkaufen. Jeffersons Sammlung von 6.487 Büchern wurde 1815 für $23.950 gekauft und wurde zur Grundlage für den Wiederaufbau der Bibliothek. Jeffersons Bibliothek war zu dieser Zeit die größte und beste des Landes und enthielt Bücher in mehreren Sprachen zu verschiedenen Themen. Diese Übernahme verwandelte die Library of Congress von einer Legislativbibliothek in eine Nationalbibliothek mit universellem Umfang.",
          nl: "Nadat de Britten tijdens de Oorlog van 1812 het Capitool hadden verbrand en de Library of Congress van 3.000 volumes hadden vernietigd, bood Thomas Jefferson aan zijn persoonlijke bibliotheek aan het Congres te verkopen. Jeffersons collectie van 6.487 boeken werd in 1815 gekocht voor $23.950 en werd de basis voor de herbouw van de bibliotheek. Jeffersons bibliotheek was destijds de grootste en beste van het land en bevatte boeken in meerdere talen over diverse onderwerpen. Deze acquisitie transformeerde de Library of Congress van een wetgevende bibliotheek naar een nationale bibliotheek met universeel bereik."
        }
      },
      {
        question: {
          en: "On April 24, 1990, the Space Shuttle Discovery launched carrying which important scientific instrument into orbit?",
          es: "El 24 de abril de 1990, el transbordador espacial Discovery se lanzó llevando qué importante instrumento científico a órbita?",
          de: "Am 24. April 1990 startete das Space Shuttle Discovery mit welchem wichtigen wissenschaftlichen Instrument an Bord in die Umlaufbahn?",
          nl: "Op 24 april 1990 lanceerde de Space Shuttle Discovery met welk belangrijk wetenschappelijk instrument aan boord naar de ruimte?"
        },
        options: [
          { en: "Chandra X-ray Observatory", es: "Observatorio Chandra de rayos X", de: "Chandra-Röntgenobservatorium", nl: "Chandra-röntgenobservatorium" },
          { en: "Hubble Space Telescope", es: "Telescopio Espacial Hubble", de: "Hubble-Weltraumteleskop", nl: "Hubble-ruimtetelescoop" },
          { en: "Spitzer Space Telescope", es: "Telescopio Espacial Spitzer", de: "Spitzer-Weltraumteleskop", nl: "Spitzer-ruimtetelescoop" },
          { en: "Compton Gamma Ray Observatory", es: "Observatorio Compton de rayos gamma", de: "Compton-Gammastrahlen-Observatorium", nl: "Compton-gammastraling-observatorium" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Space Shuttle Discovery launched on April 24, 1990, carrying the Hubble Space Telescope. The telescope was deployed into orbit the next day, April 25. Named after astronomer Edwin Hubble, it was designed to observe the universe from beyond Earth's distorting atmosphere. Although initial images revealed a flawed primary mirror, astronauts successfully repaired it during a 1993 servicing mission. Hubble has since revolutionized astronomy with discoveries about the universe's age, expansion rate, dark energy, and black holes, while capturing iconic images of distant galaxies and nebulae.",
          es: "El transbordador espacial Discovery se lanzó el 24 de abril de 1990, llevando el Telescopio Espacial Hubble. El telescopio fue desplegado en órbita al día siguiente, el 25 de abril. Nombrado en honor al astrónomo Edwin Hubble, fue diseñado para observar el universo desde más allá de la atmósfera distorsionadora de la Tierra. Aunque las imágenes iniciales revelaron un espejo primario defectuoso, los astronautas lo repararon con éxito durante una misión de servicio en 1993. Desde entonces, Hubble ha revolucionado la astronomía con descubrimientos sobre la edad del universo, la tasa de expansión, la energía oscura y los agujeros negros, mientras capturaba imágenes icónicas de galaxias y nebulosas distantes.",
          de: "Das Space Shuttle Discovery startete am 24. April 1990 mit dem Hubble-Weltraumteleskop an Bord. Das Teleskop wurde am nächsten Tag, dem 25. April, in die Umlaufbahn gebracht. Benannt nach dem Astronomen Edwin Hubble, wurde es entwickelt, um das Universum von jenseits der verzerrenden Atmosphäre der Erde zu beobachten. Obwohl erste Bilder einen fehlerhaften Hauptspiegel zeigten, reparierten Astronauten ihn erfolgreich während einer Wartungsmission 1993. Seitdem hat Hubble die Astronomie mit Entdeckungen über das Alter des Universums, die Expansionsrate, dunkle Energie und schwarze Löcher revolutioniert, während es ikonische Bilder ferner Galaxien und Nebel aufnahm.",
          nl: "Space Shuttle Discovery lanceerde op 24 april 1990 met de Hubble-ruimtetelescoop aan boord. De telescoop werd de volgende dag, 25 april, in een baan gebracht. Vernoemd naar astronoom Edwin Hubble, was het ontworpen om het universum te observeren van buiten de vervormende atmosfeer van de aarde. Hoewel initiële beelden een gebrekkige primaire spiegel onthulden, repareerden astronauten deze met succes tijdens een onderhoudsmissie in 1993. Hubble heeft sindsdien de astronomie gerevolutioneerd met ontdekkingen over de leeftijd van het universum, de uitbreidingssnelheid, donkere energie en zwarte gaten, terwijl het iconische beelden van verre sterrenstelsels en nevels vastlegde."
        }
      },
      {
        question: {
          en: "On April 24, 1916, the Easter Rising began in which European city?",
          es: "El 24 de abril de 1916, el Levantamiento de Pascua comenzó en qué ciudad europea?",
          de: "Am 24. April 1916 begann der Osteraufstand in welcher europäischen Stadt?",
          nl: "Op 24 april 1916 begon de Paasopstand in welke Europese stad?"
        },
        options: [
          { en: "Dublin, Ireland", es: "Dublín, Irlanda", de: "Dublin, Irland", nl: "Dublin, Ierland" },
          { en: "Edinburgh, Scotland", es: "Edimburgo, Escocia", de: "Edinburgh, Schottland", nl: "Edinburgh, Schotland" },
          { en: "Belfast, Ireland", es: "Belfast, Irlanda", de: "Belfast, Irland", nl: "Belfast, Ierland" },
          { en: "London, England", es: "Londres, Inglaterra", de: "London, England", nl: "Londen, Engeland" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Easter Rising began on Easter Monday, April 24, 1916, in Dublin, Ireland. Irish republicans launched an armed insurrection against British rule, seizing key locations including the General Post Office. The rebellion lasted six days before British forces suppressed it. Although initially unpopular among many Irish, the execution of 16 rebel leaders by the British transformed public opinion and became a catalyst for Irish independence. The Easter Rising is considered a pivotal event that led to the Irish War of Independence and eventually the establishment of the Irish Free State in 1922.",
          es: "El Levantamiento de Pascua comenzó el Lunes de Pascua, 24 de abril de 1916, en Dublín, Irlanda. Los republicanos irlandeses lanzaron una insurrección armada contra el dominio británico, tomando lugares clave incluida la Oficina General de Correos. La rebelión duró seis días antes de que las fuerzas británicas la suprimieran. Aunque inicialmente impopular entre muchos irlandeses, la ejecución de 16 líderes rebeldes por parte de los británicos transformó la opinión pública y se convirtió en un catalizador para la independencia irlandesa. El Levantamiento de Pascua se considera un evento crucial que llevó a la Guerra de Independencia de Irlanda y eventualmente al establecimiento del Estado Libre Irlandés en 1922.",
          de: "Der Osteraufstand begann am Ostermontag, dem 24. April 1916, in Dublin, Irland. Irische Republikaner starteten einen bewaffneten Aufstand gegen die britische Herrschaft und besetzten wichtige Orte, darunter das Hauptpostamt. Die Rebellion dauerte sechs Tage, bevor britische Streitkräfte sie niederschlugen. Obwohl zunächst bei vielen Iren unpopulär, transformierte die Hinrichtung von 16 Rebellenführern durch die Briten die öffentliche Meinung und wurde zu einem Katalysator für die irische Unabhängigkeit. Der Osteraufstand gilt als entscheidendes Ereignis, das zum irischen Unabhängigkeitskrieg und schließlich zur Gründung des Irischen Freistaats 1922 führte.",
          nl: "De Paasopstand begon op Paasmaandag, 24 april 1916, in Dublin, Ierland. Ierse republikeinen lanceerden een gewapende opstand tegen de Britse heerschappij en namen belangrijke locaties in, waaronder het Algemeen Postkantoor. De opstand duurde zes dagen voordat Britse troepen deze onderdrukte. Hoewel aanvankelijk impopulair bij veel Ieren, transformeerde de executie van 16 rebellenleiders door de Britten de publieke opinie en werd een katalysator voor Ierse onafhankelijkheid. De Paasopstand wordt beschouwd als een cruciale gebeurtenis die leidde tot de Ierse Onafhankelijkheidsoorlog en uiteindelijk de oprichting van de Ierse Vrijstaat in 1922."
        }
      },
      {
        question: {
          en: "How much money did Congress initially appropriate to establish the Library of Congress in 1800?",
          es: "¿Cuánto dinero asignó inicialmente el Congreso para establecer la Biblioteca del Congreso en 1800?",
          de: "Wie viel Geld stellte der Kongress ursprünglich für die Gründung der Library of Congress im Jahr 1800 bereit?",
          nl: "Hoeveel geld reserveerde het Congres aanvankelijk om de Library of Congress in 1800 op te richten?"
        },
        options: [
          { en: "$2,500", es: "$2,500", de: "$2.500", nl: "$2.500" },
          { en: "$5,000", es: "$5,000", de: "$5.000", nl: "$5.000" },
          { en: "$15,000", es: "$15,000", de: "$15.000", nl: "$15.000" },
          { en: "$10,000", es: "$10,000", de: "$10.000", nl: "$10.000" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Congress appropriated $5,000 on April 24, 1800, for the purchase of books necessary for Congressional use, establishing the Library of Congress. This modest initial investment purchased 740 books and 3 maps from London, which arrived in 1801. By comparison, Thomas Jefferson's personal library purchased in 1815 cost $23,950 and contained 6,487 books. Today, the Library of Congress has an annual budget of over $700 million and holds more than 173 million items, making it the world's largest library and a testament to how a small initial investment grew into an invaluable national treasure.",
          es: "El Congreso asignó $5,000 el 24 de abril de 1800 para la compra de libros necesarios para uso del Congreso, estableciendo la Biblioteca del Congreso. Esta modesta inversión inicial compró 740 libros y 3 mapas de Londres, que llegaron en 1801. En comparación, la biblioteca personal de Thomas Jefferson comprada en 1815 costó $23,950 y contenía 6,487 libros. Hoy, la Biblioteca del Congreso tiene un presupuesto anual de más de $700 millones y alberga más de 173 millones de artículos, convirtiéndola en la biblioteca más grande del mundo y un testimonio de cómo una pequeña inversión inicial creció en un tesoro nacional invaluable.",
          de: "Der Kongress stellte am 24. April 1800 $5.000 für den Kauf von Büchern bereit, die für den Kongressgebrauch notwendig waren, und gründete damit die Library of Congress. Diese bescheidene Anfangsinvestition kaufte 740 Bücher und 3 Karten aus London, die 1801 ankamen. Im Vergleich dazu kostete Thomas Jeffersons persönliche Bibliothek, die 1815 gekauft wurde, $23.950 und enthielt 6.487 Bücher. Heute hat die Library of Congress ein jährliches Budget von über $700 Millionen und beherbergt mehr als 173 Millionen Artikel, was sie zur größten Bibliothek der Welt macht und ein Zeugnis dafür ist, wie aus einer kleinen Anfangsinvestition ein unschätzbarer Nationalschatz wurde.",
          nl: "Het Congres reserveerde op 24 april 1800 $5.000 voor de aankoop van boeken die nodig waren voor gebruik door het Congres, waarmee de Library of Congress werd opgericht. Deze bescheiden initiële investering kocht 740 boeken en 3 kaarten uit Londen, die in 1801 arriveerden. Ter vergelijking: de persoonlijke bibliotheek van Thomas Jefferson die in 1815 werd gekocht, kostte $23.950 en bevatte 6.487 boeken. Tegenwoordig heeft de Library of Congress een jaarlijks budget van meer dan $700 miljoen en bezit meer dan 173 miljoen items, waardoor het 's werelds grootste bibliotheek is en een getuigenis van hoe een kleine initiële investering uitgroeide tot een onschatbare nationale schat."
        }
      }
    ],

    // Day 25 - April 25th: DNA Double Helix Published (1953) & ANZAC Day (1915)
    day25: [
      {
        question: {
          en: "On April 25, 1953, James Watson and Francis Crick published their groundbreaking paper revealing the structure of DNA in which scientific journal?",
          es: "El 25 de abril de 1953, James Watson y Francis Crick publicaron su innovador artículo revelando la estructura del ADN en qué revista científica?",
          de: "Am 25. April 1953 veröffentlichten James Watson und Francis Crick ihre bahnbrechende Arbeit über die Struktur der DNA in welcher wissenschaftlichen Zeitschrift?",
          nl: "Op 25 april 1953 publiceerden James Watson en Francis Crick hun baanbrekende paper over de structuur van DNA in welk wetenschappelijk tijdschrift?"
        },
        options: [
          { en: "Nature", es: "Nature", de: "Nature", nl: "Nature" },
          { en: "Cell", es: "Cell", de: "Cell", nl: "Cell" },
          { en: "Science", es: "Science", de: "Science", nl: "Science" },
          { en: "The Lancet", es: "The Lancet", de: "The Lancet", nl: "The Lancet" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 25, 1953, Watson and Crick published 'Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid' in the journal Nature, revealing DNA's double helix structure. This discovery, built on Rosalind Franklin's X-ray crystallography work, revolutionized biology and medicine. It explained how genetic information is stored and replicated, launching the field of molecular biology. Their work earned them the 1962 Nobel Prize in Physiology or Medicine, shared with Maurice Wilkins. April 25 is now celebrated as World DNA Day.",
          es: "El 25 de abril de 1953, Watson y Crick publicaron 'Estructura Molecular de Ácidos Nucleicos: Una Estructura para el Ácido Desoxirribonucleico' en la revista Nature, revelando la estructura de doble hélice del ADN. Este descubrimiento, construido sobre el trabajo de cristalografía de rayos X de Rosalind Franklin, revolucionó la biología y la medicina. Explicó cómo se almacena y replica la información genética, lanzando el campo de la biología molecular. Su trabajo les valió el Premio Nobel de Fisiología o Medicina de 1962, compartido con Maurice Wilkins. El 25 de abril ahora se celebra como el Día Mundial del ADN.",
          de: "Am 25. April 1953 veröffentlichten Watson und Crick 'Molekulare Struktur von Nukleinsäuren: Eine Struktur für Desoxyribonukleinsäure' in der Zeitschrift Nature und enthüllten die Doppelhelixstruktur der DNA. Diese Entdeckung, die auf Rosalind Franklins Röntgenkristallographie-Arbeit aufbaute, revolutionierte Biologie und Medizin. Sie erklärte, wie genetische Informationen gespeichert und repliziert werden, und begründete das Gebiet der Molekularbiologie. Ihre Arbeit brachte ihnen 1962 den Nobelpreis für Physiologie oder Medizin ein, geteilt mit Maurice Wilkins. Der 25. April wird heute als Welt-DNA-Tag gefeiert.",
          nl: "Op 25 april 1953 publiceerden Watson en Crick 'Moleculaire Structuur van Nucleïnezuren: Een Structuur voor Desoxyribonucleïnezuur' in het tijdschrift Nature, waarbij ze de dubbele helixstructuur van DNA onthulden. Deze ontdekking, gebaseerd op het röntgenkristallografiewerk van Rosalind Franklin, revolutioneerde de biologie en geneeskunde. Het verklaarde hoe genetische informatie wordt opgeslagen en gerepliceerd, en lanceerde het vakgebied van de moleculaire biologie. Hun werk leverde hen in 1962 de Nobelprijs voor Fysiologie of Geneeskunde op, gedeeld met Maurice Wilkins. 25 april wordt nu gevierd als Wereld-DNA-dag."
        }
      },
      {
        question: {
          en: "ANZAC Day, commemorated on April 25, honors the soldiers who fought at Gallipoli in which year?",
          es: "El Día de ANZAC, conmemorado el 25 de abril, honra a los soldados que lucharon en Gallipoli en qué año?",
          de: "Der ANZAC-Tag, der am 25. April begangen wird, ehrt die Soldaten, die in Gallipoli in welchem Jahr kämpften?",
          nl: "ANZAC Day, herdacht op 25 april, eert de soldaten die vochten in Gallipoli in welk jaar?"
        },
        options: [
          { en: "1915", es: "1915", de: "1915", nl: "1915" },
          { en: "1918", es: "1918", de: "1918", nl: "1918" },
          { en: "1916", es: "1916", de: "1916", nl: "1916" },
          { en: "1914", es: "1914", de: "1914", nl: "1914" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 25, 1915, troops from the Australian and New Zealand Army Corps (ANZAC) landed on the Gallipoli Peninsula in Turkey during World War I. The campaign aimed to capture Constantinople but resulted in a devastating eight-month stalemate with over 250,000 casualties on both sides. Although the campaign failed, ANZAC Day became a national day of remembrance in Australia and New Zealand, honoring those who served and died in all wars. The day is marked by dawn services, marches, and commemorative ceremonies, symbolizing courage, mateship, and sacrifice.",
          es: "El 25 de abril de 1915, tropas del Cuerpo de Ejército de Australia y Nueva Zelanda (ANZAC) desembarcaron en la península de Gallipoli en Turquía durante la Primera Guerra Mundial. La campaña tenía como objetivo capturar Constantinopla pero resultó en un devastador estancamiento de ocho meses con más de 250,000 bajas en ambos bandos. Aunque la campaña fracasó, el Día de ANZAC se convirtió en un día nacional de recuerdo en Australia y Nueva Zelanda, honrando a quienes sirvieron y murieron en todas las guerras. El día se marca con servicios al amanecer, marchas y ceremonias conmemorativas, simbolizando coraje, compañerismo y sacrificio.",
          de: "Am 25. April 1915 landeten Truppen des Australian and New Zealand Army Corps (ANZAC) auf der Gallipoli-Halbinsel in der Türkei während des Ersten Weltkriegs. Die Kampagne zielte darauf ab, Konstantinopel zu erobern, führte jedoch zu einer verheerenden achtmonatigen Pattsituation mit über 250.000 Opfern auf beiden Seiten. Obwohl die Kampagne scheiterte, wurde der ANZAC-Tag zu einem nationalen Gedenktag in Australien und Neuseeland, der diejenigen ehrt, die in allen Kriegen gedient haben und gestorben sind. Der Tag wird mit Morgenfeiern, Märschen und Gedenkzeremonien begangen und symbolisiert Mut, Kameradschaft und Opferbereitschaft.",
          nl: "Op 25 april 1915 landden troepen van het Australian and New Zealand Army Corps (ANZAC) op het schiereiland Gallipoli in Turkije tijdens de Eerste Wereldoorlog. De campagne was bedoeld om Constantinopel te veroveren, maar resulteerde in een verwoestende acht maanden durende patstelling met meer dan 250.000 slachtoffers aan beide zijden. Hoewel de campagne faalde, werd ANZAC Day een nationale herdenkingsdag in Australië en Nieuw-Zeeland, ter ere van degenen die hebben gediend en zijn gestorven in alle oorlogen. De dag wordt gemarkeerd door ochtenddiensten, marsen en herdenkingsceremonies, en symboliseert moed, kameraadschap en offers."
        }
      },
      {
        question: {
          en: "What does the acronym ANZAC stand for?",
          es: "¿Qué significa el acrónimo ANZAC?",
          de: "Wofür steht das Akronym ANZAC?",
          nl: "Waar staat het acroniem ANZAC voor?"
        },
        options: [
          { en: "Australian and New Zealand Army Corps", es: "Australian and New Zealand Army Corps", de: "Australian and New Zealand Army Corps", nl: "Australian and New Zealand Army Corps" },
          { en: "Allied Nations Zone Attack Command", es: "Allied Nations Zone Attack Command", de: "Allied Nations Zone Attack Command", nl: "Allied Nations Zone Attack Command" },
          { en: "Australia-New Zealand Armed Coalition", es: "Australia-New Zealand Armed Coalition", de: "Australia-New Zealand Armed Coalition", nl: "Australia-New Zealand Armed Coalition" },
          { en: "ANZAC Naval and Air Command", es: "ANZAC Naval and Air Command", de: "ANZAC Naval and Air Command", nl: "ANZAC Naval and Air Command" }
        ],
        correctIndex: 0,
        explanation: {
          en: "ANZAC stands for Australian and New Zealand Army Corps, the combined military force that fought together during World War I. The term was coined during the Gallipoli Campaign and became synonymous with the qualities of courage, mateship, endurance, and sacrifice displayed by these soldiers. The ANZAC legend has become a defining element of Australian and New Zealand national identity. ANZAC Day commemorates not just the Gallipoli campaign, but all Australians and New Zealanders who served and died in military operations. The word 'ANZAC' is legally protected in both countries.",
          es: "ANZAC significa Australian and New Zealand Army Corps, la fuerza militar combinada que luchó junta durante la Primera Guerra Mundial. El término se acuñó durante la Campaña de Gallipoli y se convirtió en sinónimo de las cualidades de coraje, compañerismo, resistencia y sacrificio mostradas por estos soldatos. La leyenda ANZAC se ha convertido en un elemento definitorio de la identidad nacional de Australia y Nueva Zelanda. El Día de ANZAC conmemora no solo la campaña de Gallipoli, sino a todos los australianos y neozelandeses que sirvieron y murieron en operaciones militares. La palabra 'ANZAC' está legalmente protegida en ambos países.",
          de: "ANZAC steht für Australian and New Zealand Army Corps, die kombinierte Militärmacht, die während des Ersten Weltkriegs zusammen kämpfte. Der Begriff wurde während der Gallipoli-Kampagne geprägt und wurde zum Synonym für die Eigenschaften Mut, Kameradschaft, Ausdauer und Opferbereitschaft, die diese Soldaten zeigten. Die ANZAC-Legende ist zu einem definierenden Element der australischen und neuseeländischen nationalen Identität geworden. Der ANZAC-Tag gedenkt nicht nur der Gallipoli-Kampagne, sondern aller Australier und Neuseeländer, die in Militäroperationen gedient haben und gestorben sind. Das Wort 'ANZAC' ist in beiden Ländern gesetzlich geschützt.",
          nl: "ANZAC staat voor Australian and New Zealand Army Corps, de gecombineerde militaire macht die tijdens de Eerste Wereldoorlog samen vocht. De term werd bedacht tijdens de Gallipoli-campagne en werd synoniem met de kwaliteiten van moed, kameraadschap, uithoudingsvermogen en opoffering die deze soldaten toonden. De ANZAC-legende is een bepalend element geworden van de Australische en Nieuw-Zeelandse nationale identiteit. ANZAC Day herdenkt niet alleen de Gallipoli-campagne, maar alle Australiërs en Nieuw-Zeelanders die hebben gediend en zijn gestorven in militaire operaties. Het woord 'ANZAC' is wettelijk beschermd in beide landen."
        }
      },
      {
        question: {
          en: "Whose X-ray crystallography work was crucial to Watson and Crick's discovery of DNA's structure, though she received less recognition?",
          es: "¿El trabajo de cristalografía de rayos X de quién fue crucial para el descubrimiento de Watson y Crick de la estructura del ADN, aunque ella recibió menos reconocimiento?",
          de: "Wessen Röntgenkristallographie-Arbeit war entscheidend für Watson und Cricks Entdeckung der DNA-Struktur, obwohl sie weniger Anerkennung erhielt?",
          nl: "Wiens röntgenkristallografiewerk was cruciaal voor de ontdekking van de DNA-structuur door Watson en Crick, hoewel zij minder erkenning ontving?"
        },
        options: [
          { en: "Dorothy Hodgkin", es: "Dorothy Hodgkin", de: "Dorothy Hodgkin", nl: "Dorothy Hodgkin" },
          { en: "Barbara McClintock", es: "Barbara McClintock", de: "Barbara McClintock", nl: "Barbara McClintock" },
          { en: "Rosalind Franklin", es: "Rosalind Franklin", de: "Rosalind Franklin", nl: "Rosalind Franklin" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Rosalind Franklin's X-ray crystallography work, particularly her famous 'Photo 51,' provided crucial evidence for DNA's double helix structure. Watson and Crick used her data, often without her knowledge or proper credit, to build their model. Franklin died of ovarian cancer in 1958 at age 37, possibly due to radiation exposure from her research. The 1962 Nobel Prize went to Watson, Crick, and Maurice Wilkins; Franklin's critical contribution was largely unrecognized until decades later. Her story highlights historical gender bias in science and the importance of acknowledging all contributors to scientific breakthroughs.",
          es: "El trabajo de cristalografía de rayos X de Rosalind Franklin, particularmente su famosa 'Foto 51', proporcionó evidencia crucial para la estructura de doble hélice del ADN. Watson y Crick usaron sus datos, a menudo sin su conocimiento o crédito adecuado, para construir su modelo. Franklin murió de cáncer de ovario en 1958 a los 37 años, posiblemente debido a la exposición a la radiación de su investigación. El Premio Nobel de 1962 fue para Watson, Crick y Maurice Wilkins; la contribución crítica de Franklin fue en gran medida no reconocida hasta décadas después. Su historia destaca el sesgo de género histórico en la ciencia y la importancia de reconocer a todos los contribuyentes a los avances científicos.",
          de: "Rosalind Franklins Röntgenkristallographie-Arbeit, insbesondere ihr berühmtes 'Foto 51', lieferte entscheidende Beweise für die Doppelhelixstruktur der DNA. Watson und Crick nutzten ihre Daten, oft ohne ihr Wissen oder angemessene Anerkennung, um ihr Modell zu bauen. Franklin starb 1958 im Alter von 37 Jahren an Eierstockkrebs, möglicherweise aufgrund von Strahlenbelastung durch ihre Forschung. Der Nobelpreis 1962 ging an Watson, Crick und Maurice Wilkins; Franklins kritischer Beitrag wurde erst Jahrzehnte später weitgehend anerkannt. Ihre Geschichte zeigt die historische Geschlechtervoreingenommenheit in der Wissenschaft und die Bedeutung, alle Beiträge zu wissenschaftlichen Durchbrüchen anzuerkennen.",
          nl: "Het röntgenkristallografiewerk van Rosalind Franklin, met name haar beroemde 'Foto 51', leverde cruciaal bewijs voor de dubbele helixstructuur van DNA. Watson en Crick gebruikten haar gegevens, vaak zonder haar medeweten of juiste erkenning, om hun model te bouwen. Franklin stierf in 1958 op 37-jarige leeftijd aan eierstokkanker, mogelijk als gevolg van stralingsblootstelling door haar onderzoek. De Nobelprijs van 1962 ging naar Watson, Crick en Maurice Wilkins; Franklins cruciale bijdrage werd grotendeels pas decennia later erkend. Haar verhaal belicht historische genderbias in de wetenschap en het belang van het erkennen van alle bijdragers aan wetenschappelijke doorbraken."
        }
      },
      {
        question: {
          en: "On April 25, 1990, the Hubble Space Telescope was deployed into orbit. What major flaw was discovered shortly after deployment?",
          es: "El 25 de abril de 1990, el Telescopio Espacial Hubble fue desplegado en órbita. ¿Qué gran defecto se descubrió poco después del despliegue?",
          de: "Am 25. April 1990 wurde das Hubble-Weltraumteleskop in die Umlaufbahn gebracht. Welcher große Fehler wurde kurz nach dem Einsatz entdeckt?",
          nl: "Op 25 april 1990 werd de Hubble-ruimtetelescoop in een baan gebracht. Welk groot defect werd kort na de plaatsing ontdekt?"
        },
        options: [
          { en: "Gyroscope failure", es: "Falla del giroscopio", de: "Gyroskop-Ausfall", nl: "Storing in gyroscoop" },
          { en: "Solar panel malfunction", es: "Mal funcionamiento del panel solar", de: "Solarpanel-Fehlfunktion", nl: "Storing in zonnepaneel" },
          { en: "Communication system failure", es: "Falla del sistema de comunicación", de: "Kommunikationssystem-Ausfall", nl: "Storing in communicatiesysteem" },
          { en: "Spherical aberration in the primary mirror", es: "Aberración esférica en el espejo primario", de: "Sphärische Aberration im Hauptspiegel", nl: "Sferische aberratie in de primaire spiegel" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Shortly after deployment on April 25, 1990, scientists discovered that Hubble's primary mirror had spherical aberration - it was ground to the wrong shape by 2.2 micrometers (1/50th the width of a human hair). This flaw caused blurry images and threatened the mission's success. In December 1993, Space Shuttle Endeavour astronauts installed corrective optics during a complex repair mission, effectively giving Hubble 'contact lenses.' The repair was completely successful, and Hubble went on to revolutionize astronomy with stunning images and groundbreaking discoveries about the universe's age, expansion, and composition.",
          es: "Poco después del despliegue el 25 de abril de 1990, los científicos descubrieron que el espejo primario de Hubble tenía aberración esférica: estaba pulido con la forma incorrecta por 2.2 micrómetros (1/50 del ancho de un cabello humano). Este defecto causaba imágenes borrosas y amenazaba el éxito de la misión. En diciembre de 1993, astronautas del transbordador espacial Endeavour instalaron óptica correctiva durante una compleja misión de reparación, efectivamente dándole a Hubble 'lentes de contacto'. La reparación fue completamente exitosa, y Hubble continuó revolucionando la astronomía con imágenes impresionantes y descubrimientos revolucionarios sobre la edad, expansión y composición del universo.",
          de: "Kurz nach dem Einsatz am 25. April 1990 entdeckten Wissenschaftler, dass Hubbles Hauptspiegel eine sphärische Aberration aufwies - er war um 2,2 Mikrometer (1/50 der Breite eines menschlichen Haares) falsch geschliffen. Dieser Fehler verursachte unscharfe Bilder und bedrohte den Erfolg der Mission. Im Dezember 1993 installierten Astronauten des Space Shuttle Endeavour während einer komplexen Reparaturmission korrigierende Optiken und gaben Hubble effektiv 'Kontaktlinsen'. Die Reparatur war vollständig erfolgreich, und Hubble revolutionierte die Astronomie mit atemberaubenden Bildern und bahnbrechenden Entdeckungen über das Alter, die Expansion und die Zusammensetzung des Universums.",
          nl: "Kort na de plaatsing op 25 april 1990 ontdekten wetenschappers dat de primaire spiegel van Hubble sferische aberratie had - deze was 2,2 micrometer verkeerd geslepen (1/50ste van de breedte van een mensenhaar). Deze fout veroorzaakte wazige beelden en bedreigde het succes van de missie. In december 1993 installeerden astronauten van Space Shuttle Endeavour corrigerende optica tijdens een complexe reparatiemissie, waardoor Hubble effectief 'contactlenzen' kreeg. De reparatie was volledig succesvol en Hubble ging verder met het revolutioneren van de astronomie met verbluffende beelden en baanbrekende ontdekkingen over de leeftijd, uitbreiding en samenstelling van het universum."
        }
      }
    ],

    // Day 26 - April 26th: Chernobyl Disaster (1986) & Tanzania Union Day (1964)
    day26: [
      {
        question: {
          en: "On April 26, 1986, the world's worst nuclear disaster occurred at which Soviet nuclear power plant?",
          es: "El 26 de abril de 1986, el peor desastre nuclear del mundo ocurrió en qué planta nuclear soviética?",
          de: "Am 26. April 1986 ereignete sich die weltweit schlimmste Atomkatastrophe in welchem sowjetischen Atomkraftwerk?",
          nl: "Op 26 april 1986 vond de ergste nucleaire ramp ter wereld plaats in welke Sovjet-kerncentrale?"
        },
        options: [
          { en: "Mayak", es: "Mayak", de: "Mayak", nl: "Mayak" },
          { en: "Chernobyl", es: "Chernóbil", de: "Tschernobyl", nl: "Tsjernobyl" },
          { en: "Fukushima", es: "Fukushima", de: "Fukushima", nl: "Fukushima" },
          { en: "Three Mile Island", es: "Three Mile Island", de: "Three Mile Island", nl: "Three Mile Island" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 26, 1986, reactor number 4 at the Chernobyl Nuclear Power Plant exploded during a safety test, releasing massive amounts of radioactive material across Europe. The disaster killed 31 people directly and thousands more from radiation-related illnesses. Over 350,000 people were evacuated from the surrounding areas, including the abandoned city of Pripyat. The explosion was caused by a flawed reactor design combined with operator errors during the test. Today, the site is covered by a massive containment structure and remains a stark reminder of the dangers of nuclear energy when safety protocols are inadequate.",
          es: "El 26 de abril de 1986, el reactor número 4 de la Planta Nuclear de Chernóbil explotó durante una prueba de seguridad, liberando cantidades masivas de material radiactivo por toda Europa. El desastre mató a 31 personas directamente y a miles más por enfermedades relacionadas con la radiación. Más de 350,000 personas fueron evacuadas de las áreas circundantes, incluida la ciudad abandonada de Pripyat. La explosión fue causada por un diseño de reactor defectuoso combinado con errores de los operadores durante la prueba. Hoy, el sitio está cubierto por una estructura de contención masiva y sigue siendo un recordatorio contundente de los peligros de la energía nuclear cuando los protocolos de seguridad son inadecuados.",
          de: "Am 26. April 1986 explodierte Reaktor Nummer 4 im Kernkraftwerk Tschernobyl während eines Sicherheitstests und setzte massive Mengen radioaktiven Materials in ganz Europa frei. Die Katastrophe tötete 31 Menschen direkt und Tausende weitere an strahlungsbedingten Krankheiten. Über 350.000 Menschen wurden aus den umliegenden Gebieten evakuiert, einschließlich der verlassenen Stadt Pripyat. Die Explosion wurde durch ein fehlerhaftes Reaktordesign in Kombination mit Bedienfehlern während des Tests verursacht. Heute ist die Anlage von einer massiven Schutzhülle bedeckt und bleibt eine eindringliche Mahnung an die Gefahren der Kernenergie, wenn Sicherheitsprotokolle unzureichend sind.",
          nl: "Op 26 april 1986 explodeerde reactor nummer 4 in de kerncentrale van Tsjernobyl tijdens een veiligheidstest, waarbij enorme hoeveelheden radioactief materiaal over heel Europa werden verspreid. De ramp doodde direct 31 mensen en duizenden meer aan stralingsziekte. Meer dan 350.000 mensen werden geëvacueerd uit de omliggende gebieden, waaronder de verlaten stad Pripyat. De explosie werd veroorzaakt door een gebrekkig reactorontwerp in combinatie met fouten van operators tijdens de test. Tegenwoordig is de locatie bedekt met een enorme beschermingsconstructie en blijft het een schrijnende herinnering aan de gevaren van kernenergie wanneer veiligheidsprotocollen ontoereikend zijn."
        }
      },
      {
        question: {
          en: "What Swedish nuclear power plant first detected abnormal radiation levels from Chernobyl on April 28, 1986, forcing the Soviet Union to acknowledge the disaster?",
          es: "¿Qué planta nuclear sueca detectó por primera vez niveles anormales de radiación de Chernóbil el 28 de abril de 1986, obligando a la Unión Soviética a reconocer el desastre?",
          de: "Welches schwedische Kernkraftwerk entdeckte am 28. April 1986 zuerst abnormale Strahlungswerte von Tschernobyl und zwang die Sowjetunion, die Katastrophe anzuerkennen?",
          nl: "Welke Zweedse kerncentrale detecteerde als eerste abnormale stralingsniveaus van Tsjernobyl op 28 april 1986, waardoor de Sovjet-Unie gedwongen werd de ramp te erkennen?"
        },
        options: [
          { en: "Oskarshamn", es: "Oskarshamn", de: "Oskarshamn", nl: "Oskarshamn" },
          { en: "Ringhals", es: "Ringhals", de: "Ringhals", nl: "Ringhals" },
          { en: "Barsebäck", es: "Barsebäck", de: "Barsebäck", nl: "Barsebäck" },
          { en: "Forsmark", es: "Forsmark", de: "Forsmark", nl: "Forsmark" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On the morning of April 28, 1986, radiation alarms went off at the Forsmark Nuclear Power Plant in Sweden, over 1,000 kilometers from Chernobyl. Initially, Swedish authorities suspected a leak at their own facility, but investigation revealed the radiation was coming from outside. This discovery forced the Soviet Union to finally admit the disaster had occurred, as they had been trying to cover it up for two days. The detection at Forsmark demonstrated how far radioactive material had spread across Europe and played a crucial role in alerting the international community to the severity of the Chernobyl catastrophe.",
          es: "En la mañana del 28 de abril de 1986, las alarmas de radiación sonaron en la Planta Nuclear de Forsmark en Suecia, a más de 1,000 kilómetros de Chernóbil. Inicialmente, las autoridades suecas sospecharon una fuga en su propia instalación, pero la investigación reveló que la radiación venía del exterior. Este descubrimiento obligó a la Unión Soviética a finalmente admitir que el desastre había ocurrido, ya que habían estado tratando de ocultarlo durante dos días. La detección en Forsmark demostró cuán lejos se había extendido el material radiactivo por Europa y jugó un papel crucial en alertar a la comunidad internacional sobre la gravedad de la catástrofe de Chernóbil.",
          de: "Am Morgen des 28. April 1986 lösten Strahlungsalarme im Kernkraftwerk Forsmark in Schweden aus, über 1.000 Kilometer von Tschernobyl entfernt. Zunächst vermuteten die schwedischen Behörden ein Leck in ihrer eigenen Anlage, aber Untersuchungen ergaben, dass die Strahlung von außen kam. Diese Entdeckung zwang die Sowjetunion schließlich zuzugeben, dass die Katastrophe stattgefunden hatte, da sie zwei Tage lang versucht hatten, sie zu vertuschen. Die Entdeckung in Forsmark demonstrierte, wie weit sich radioaktives Material über Europa ausgebreitet hatte, und spielte eine entscheidende Rolle dabei, die internationale Gemeinschaft auf die Schwere der Tschernobyl-Katastrophe aufmerksam zu machen.",
          nl: "Op de ochtend van 28 april 1986 gingen de stralingsalarmen af in de kerncentrale van Forsmark in Zweden, meer dan 1.000 kilometer van Tsjernobyl. Aanvankelijk vermoedden de Zweedse autoriteiten een lek in hun eigen faciliteit, maar onderzoek onthulde dat de straling van buitenaf kwam. Deze ontdekking dwong de Sovjet-Unie eindelijk toe te geven dat de ramp had plaatsgevonden, aangezien ze twee dagen hadden geprobeerd het te verdoezelen. De detectie in Forsmark demonstreerde hoe ver radioactief materiaal zich over Europa had verspreid en speelde een cruciale rol bij het waarschuwen van de internationale gemeenschap over de ernst van de Tsjernobyl-catastrofe."
        }
      },
      {
        question: {
          en: "On April 26, 1964, which two African nations united to form Tanzania?",
          es: "El 26 de abril de 1964, ¿qué dos naciones africanas se unieron para formar Tanzania?",
          de: "Am 26. April 1964 vereinigten sich welche zwei afrikanischen Nationen zu Tansania?",
          nl: "Op 26 april 1964 verenigden welke twee Afrikaanse naties zich om Tanzania te vormen?"
        },
        options: [
          { en: "Rwanda and Burundi", es: "Ruanda y Burundi", de: "Ruanda und Burundi", nl: "Rwanda en Burundi" },
          { en: "Kenya and Uganda", es: "Kenia y Uganda", de: "Kenia und Uganda", nl: "Kenia en Oeganda" },
          { en: "Tanganyika and Zanzibar", es: "Tanganyika y Zanzíbar", de: "Tanganjika und Sansibar", nl: "Tanganyika en Zanzibar" },
          { en: "Zambia and Malawi", es: "Zambia y Malaui", de: "Sambia und Malawi", nl: "Zambia en Malawi" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 26, 1964, Tanganyika and the island nation of Zanzibar officially merged to form the United Republic of Tanzania. Tanganyika had gained independence from Britain in 1961, while Zanzibar became independent in 1963. The union was led by Tanganyika's President Julius Nyerere and Zanzibar's President Abeid Karume. This voluntary merger between two newly independent African states was unique in post-colonial Africa. Tanzania celebrates April 26 as Union Day, a national holiday. The name 'Tanzania' is a portmanteau combining 'Tanganyika' and 'Zanzibar,' symbolizing the unity of the mainland and islands.",
          es: "El 26 de abril de 1964, Tanganyika y la nación insular de Zanzíbar se fusionaron oficialmente para formar la República Unida de Tanzania. Tanganyika había obtenido la independencia de Gran Bretaña en 1961, mientras que Zanzíbar se independizó en 1963. La unión fue liderada por el Presidente de Tanganyika Julius Nyerere y el Presidente de Zanzíbar Abeid Karume. Esta fusión voluntaria entre dos estados africanos recién independientes fue única en el África poscolonial. Tanzania celebra el 26 de abril como el Día de la Unión, una festividad nacional. El nombre 'Tanzania' es una palabra compuesta que combina 'Tanganyika' y 'Zanzíbar', simbolizando la unidad del continente y las islas.",
          de: "Am 26. April 1964 fusionierten Tanganjika und die Inselnation Sansibar offiziell zur Vereinigten Republik Tansania. Tanganjika hatte 1961 die Unabhängigkeit von Großbritannien erlangt, während Sansibar 1963 unabhängig wurde. Die Union wurde von Tanganikas Präsident Julius Nyerere und Sansibars Präsident Abeid Karume angeführt. Diese freiwillige Fusion zwischen zwei neu unabhängigen afrikanischen Staaten war einzigartig im postkolonialen Afrika. Tansania feiert den 26. April als Unionstag, einen nationalen Feiertag. Der Name 'Tansania' ist ein Kofferwort, das 'Tanganjika' und 'Sansibar' kombiniert und die Einheit von Festland und Inseln symbolisiert.",
          nl: "Op 26 april 1964 fuseerden Tanganyika en de eilandnatie Zanzibar officieel om de Verenigde Republiek Tanzania te vormen. Tanganyika had in 1961 onafhankelijkheid verkregen van Groot-Brittannië, terwijl Zanzibar in 1963 onafhankelijk werd. De unie werd geleid door de president van Tanganyika Julius Nyerere en de president van Zanzibar Abeid Karume. Deze vrijwillige fusie tussen twee pasgeboren onafhankelijke Afrikaanse staten was uniek in postkoloniaal Afrika. Tanzania viert 26 april als Unie-dag, een nationale feestdag. De naam 'Tanzania' is een porte-manteau die 'Tanganyika' en 'Zanzibar' combineert, wat de eenheid van het vasteland en de eilanden symboliseert."
        }
      },
      {
        question: {
          en: "On April 26, 1937, which Basque town was bombed during the Spanish Civil War, inspiring Pablo Picasso's famous anti-war painting?",
          es: "El 26 de abril de 1937, ¿qué pueblo vasco fue bombardeado durante la Guerra Civil Española, inspirando la famosa pintura antibélica de Pablo Picasso?",
          de: "Am 26. April 1937 wurde welche baskische Stadt während des Spanischen Bürgerkriegs bombardiert und inspirierte Pablo Picassos berühmtes Antikriegsgemälde?",
          nl: "Op 26 april 1937 werd welke Baskische stad gebombardeerd tijdens de Spaanse Burgeroorlog, wat Pablo Picasso's beroemde anti-oorlogsschilderij inspireerde?"
        },
        options: [
          { en: "Bilbao", es: "Bilbao", de: "Bilbao", nl: "Bilbao" },
          { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" },
          { en: "San Sebastián", es: "San Sebastián", de: "San Sebastián", nl: "San Sebastián" },
          { en: "Guernica", es: "Guernica", de: "Guernica", nl: "Guernica" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 26, 1937, German and Italian warplanes bombed the Basque town of Guernica for approximately three hours during the Spanish Civil War. The attack, carried out by Nazi Germany's Condor Legion at Franco's request, was one of the first aerial bombings of a civilian population center. The bombing destroyed much of the town and killed hundreds of civilians. Pablo Picasso immortalized this tragedy in his massive anti-war masterpiece 'Guernica,' which became one of the most powerful statements against war and fascism in modern art. The painting debuted at the 1937 Paris International Exposition and remains a symbol of the horrors of war.",
          es: "El 26 de abril de 1937, aviones de guerra alemanes e italianos bombardearon el pueblo vasco de Guernica durante aproximadamente tres horas durante la Guerra Civil Española. El ataque, llevado a cabo por la Legión Cóndor de la Alemania nazi a petición de Franco, fue uno de los primeros bombardeos aéreos de un centro de población civil. El bombardeo destruyó gran parte del pueblo y mató a cientos de civiles. Pablo Picasso inmortalizó esta tragedia en su masiva obra maestra antibélica 'Guernica', que se convirtió en una de las declaraciones más poderosas contra la guerra y el fascismo en el arte moderno. La pintura debutó en la Exposición Internacional de París de 1937 y sigue siendo un símbolo de los horrores de la guerra.",
          de: "Am 26. April 1937 bombardierten deutsche und italienische Kampfflugzeuge die baskische Stadt Guernica während des Spanischen Bürgerkriegs etwa drei Stunden lang. Der Angriff, durchgeführt von Nazideutschlands Legion Condor auf Francos Wunsch, war einer der ersten Luftangriffe auf ein ziviles Bevölkerungszentrum. Die Bombardierung zerstörte einen Großteil der Stadt und tötete Hunderte von Zivilisten. Pablo Picasso verewigte diese Tragödie in seinem massiven Antikriegs-Meisterwerk 'Guernica', das zu einer der stärksten Aussagen gegen Krieg und Faschismus in der modernen Kunst wurde. Das Gemälde wurde 1937 auf der Pariser Weltausstellung uraufgeführt und bleibt ein Symbol für die Schrecken des Krieges.",
          nl: "Op 26 april 1937 bombardeerden Duitse en Italiaanse gevechtsvliegtuigen de Baskische stad Guernica gedurende ongeveer drie uur tijdens de Spaanse Burgeroorlog. De aanval, uitgevoerd door Nazi-Duitslands Legioen Condor op verzoek van Franco, was een van de eerste luchtbombardementen op een civiel bevolkingscentrum. Het bombardement verwoestte een groot deel van de stad en doodde honderden burgers. Pablo Picasso vereeuwigde deze tragedie in zijn enorme anti-oorlog meesterwerk 'Guernica', dat een van de krachtigste verklaringen tegen oorlog en fascisme in de moderne kunst werd. Het schilderij debuteerde op de Parijse Wereldtentoonstelling van 1937 en blijft een symbool van de verschrikkingen van oorlog."
        }
      },
      {
        question: {
          en: "Approximately how many people were evacuated from the Chernobyl area following the 1986 disaster?",
          es: "¿Aproximadamente cuántas personas fueron evacuadas del área de Chernóbil después del desastre de 1986?",
          de: "Ungefähr wie viele Menschen wurden nach der Katastrophe von 1986 aus dem Tschernobyl-Gebiet evakuiert?",
          nl: "Ongeveer hoeveel mensen werden na de ramp van 1986 uit het Tsjernobyl-gebied geëvacueerd?"
        },
        options: [
          { en: "About 150,000", es: "Aproximadamente 150,000", de: "Etwa 150.000", nl: "Ongeveer 150.000" },
          { en: "Around 50,000", es: "Alrededor de 50,000", de: "Etwa 50.000", nl: "Ongeveer 50.000" },
          { en: "Over 350,000", es: "Más de 350,000", de: "Über 350.000", nl: "Meer dan 350.000" },
          { en: "Nearly 1 million", es: "Casi 1 millón", de: "Fast 1 Million", nl: "Bijna 1 miljoen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Over 350,000 people were evacuated from the areas surrounding Chernobyl following the 1986 disaster. The evacuation began with the nearby city of Pripyat on April 27, just one day after the explosion, where 49,000 residents were told they were leaving temporarily. However, they never returned. The evacuation expanded over subsequent weeks and months to include a 30-kilometer exclusion zone around the plant. The disaster contaminated large areas of Ukraine, Belarus, and Russia with radioactive fallout. Today, the Chernobyl Exclusion Zone remains largely uninhabited, though some elderly residents have returned illegally to their ancestral homes.",
          es: "Más de 350,000 personas fueron evacuadas de las áreas circundantes a Chernóbil después del desastre de 1986. La evacuación comenzó con la cercana ciudad de Pripyat el 27 de abril, solo un día después de la explosión, donde a 49,000 residentes se les dijo que se iban temporalmente. Sin embargo, nunca regresaron. La evacuación se amplió durante las semanas y meses posteriores para incluir una zona de exclusión de 30 kilómetros alrededor de la planta. El desastre contaminó grandes áreas de Ucrania, Bielorrusia y Rusia con lluvia radiactiva. Hoy, la Zona de Exclusión de Chernóbil permanece en gran parte deshabitada, aunque algunos residentes ancianos han regresado ilegalmente a sus hogares ancestrales.",
          de: "Über 350.000 Menschen wurden nach der Katastrophe von 1986 aus den Gebieten um Tschernobyl evakuiert. Die Evakuierung begann am 27. April mit der nahegelegenen Stadt Pripyat, nur einen Tag nach der Explosion, wo 49.000 Bewohnern gesagt wurde, sie würden vorübergehend gehen. Sie kehrten jedoch nie zurück. Die Evakuierung wurde in den folgenden Wochen und Monaten auf eine 30-Kilometer-Sperrzone um das Kraftwerk ausgedehnt. Die Katastrophe verseuchte große Gebiete der Ukraine, Weißrusslands und Russlands mit radioaktivem Niederschlag. Heute bleibt die Tschernobyl-Sperrzone weitgehend unbewohnt, obwohl einige ältere Bewohner illegal in ihre angestammten Häuser zurückgekehrt sind.",
          nl: "Meer dan 350.000 mensen werden na de ramp van 1986 geëvacueerd uit de gebieden rond Tsjernobyl. De evacuatie begon op 27 april met de nabijgelegen stad Pripyat, slechts één dag na de explosie, waar aan 49.000 bewoners werd verteld dat ze tijdelijk vertrokken. Ze zijn echter nooit teruggekeerd. De evacuatie breidde zich in de daaropvolgende weken en maanden uit tot een uitsluitingszone van 30 kilometer rond de centrale. De ramp besmette grote gebieden van Oekraïne, Wit-Rusland en Rusland met radioactieve neerslag. Tegenwoordig blijft de Tsjernobyl-uitsluitingszone grotendeels onbewoond, hoewel enkele oudere bewoners illegaal zijn teruggekeerd naar hun voorouderlijke huizen."
        }
      }
    ],

    // Day 27 - April 27th: South Africa's First Democratic Election (1994) & Sierra Leone Independence (1961)
    day27: [
      {
        question: {
          en: "On April 27, 1994, South Africa held its first democratic election with universal suffrage. Which political party won with 62% of the vote?",
          es: "El 27 de abril de 1994, Sudáfrica celebró su primera elección democrática con sufragio universal. ¿Qué partido político ganó con el 62% de los votos?",
          de: "Am 27. April 1994 hielt Südafrika seine erste demokratische Wahl mit allgemeinem Wahlrecht ab. Welche politische Partei gewann mit 62% der Stimmen?",
          nl: "Op 27 april 1994 hield Zuid-Afrika zijn eerste democratische verkiezing met algemeen kiesrecht. Welke politieke partij won met 62% van de stemmen?"
        },
        options: [
          { en: "National Party", es: "Partido Nacional", de: "Nationale Partei", nl: "Nationale Partij" },
          { en: "African National Congress (ANC)", es: "Congreso Nacional Africano (ANC)", de: "Afrikanischer Nationalkongress (ANC)", nl: "African National Congress (ANC)" },
          { en: "Democratic Alliance", es: "Alianza Democrática", de: "Demokratische Allianz", nl: "Democratische Alliantie" },
          { en: "Inkatha Freedom Party", es: "Partido de la Libertad Inkatha", de: "Inkatha-Freiheitspartei", nl: "Inkatha Vrijheidspartij" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The African National Congress (ANC) won South Africa's historic first democratic election with 62% of the vote, bringing Nelson Mandela to the presidency. The election, held from April 26-29, 1994, marked the end of apartheid and allowed nearly 20 million South Africans of all races to vote for the first time. Long queues formed over four days as millions participated in this momentous occasion. April 27 became a national holiday called Freedom Day, celebrating the birth of South African democracy. The ANC's victory began a new era of reconciliation and equality under Mandela's leadership.",
          es: "El Congreso Nacional Africano (ANC) ganó la histórica primera elección democrática de Sudáfrica con el 62% de los votos, llevando a Nelson Mandela a la presidencia. La elección, celebrada del 26 al 29 de abril de 1994, marcó el fin del apartheid y permitió que casi 20 millones de sudafricanos de todas las razas votaran por primera vez. Se formaron largas colas durante cuatro días mientras millones participaron en esta ocasión trascendental. El 27 de abril se convirtió en un feriado nacional llamado Día de la Libertad, celebrando el nacimiento de la democracia sudafricana. La victoria del ANC comenzó una nueva era de reconciliación e igualdad bajo el liderazgo de Mandela.",
          de: "Der Afrikanische Nationalkongress (ANC) gewann Südafrikas historische erste demokratische Wahl mit 62% der Stimmen und brachte Nelson Mandela an die Macht. Die Wahl, die vom 26. bis 29. April 1994 stattfand, markierte das Ende der Apartheid und ermöglichte es fast 20 Millionen Südafrikanern aller Rassen, zum ersten Mal zu wählen. Lange Schlangen bildeten sich über vier Tage, während Millionen an diesem bedeutsamen Ereignis teilnahmen. Der 27. April wurde zu einem nationalen Feiertag namens Freiheitstag, der die Geburt der südafrikanischen Demokratie feiert. Der Sieg des ANC begann eine neue Ära der Versöhnung und Gleichheit unter Mandelas Führung.",
          nl: "Het African National Congress (ANC) won Zuid-Afrika's historische eerste democratische verkiezing met 62% van de stemmen, waardoor Nelson Mandela president werd. De verkiezing, gehouden van 26-29 april 1994, markeerde het einde van de apartheid en stelde bijna 20 miljoen Zuid-Afrikanen van alle rassen in staat voor het eerst te stemmen. Lange rijen vormden zich gedurende vier dagen terwijl miljoenen deelnamen aan deze monumentale gelegenheid. 27 april werd een nationale feestdag genaamd Vrijheidsdag, ter viering van de geboorte van de Zuid-Afrikaanse democratie. De overwinning van het ANC begon een nieuw tijdperk van verzoening en gelijkheid onder Mandela's leiderschap."
        }
      },
      {
        question: {
          en: "What is South Africa's national holiday on April 27 called, commemorating the first democratic election?",
          es: "¿Cómo se llama el feriado nacional de Sudáfrica el 27 de abril, conmemorando la primera elección democrática?",
          de: "Wie heißt Südafrikas nationaler Feiertag am 27. April, der an die erste demokratische Wahl erinnert?",
          nl: "Hoe heet de nationale feestdag van Zuid-Afrika op 27 april, ter herdenking van de eerste democratische verkiezing?"
        },
        options: [
          { en: "Freedom Day", es: "Día de la Libertad", de: "Freiheitstag", nl: "Vrijheidsdag" },
          { en: "Liberation Day", es: "Día de la Liberación", de: "Befreiungstag", nl: "Bevrijdingsdag" },
          { en: "Unity Day", es: "Día de la Unidad", de: "Tag der Einheit", nl: "Eenheidsdag" },
          { en: "Democracy Day", es: "Día de la Democracia", de: "Demokratietag", nl: "Democratiedag" }
        ],
        correctIndex: 0,
        explanation: {
          en: "South Africa celebrates April 27 as Freedom Day, a public holiday commemorating the country's first democratic election in 1994. This historic vote allowed all South Africans, regardless of race, to participate in choosing their government for the first time. Freedom Day symbolizes the end of centuries of colonialism and decades of apartheid oppression. The day represents the birth of a new democratic South Africa based on equality, human dignity, and freedom. South Africans mark Freedom Day with celebrations, reflection on the country's journey to democracy, and renewed commitment to building a non-racial, non-sexist society.",
          es: "Sudáfrica celebra el 27 de abril como Día de la Libertad, un feriado público que conmemora la primera elección democrática del país en 1994. Esta votación histórica permitió a todos los sudafricanos, sin importar su raza, participar en la elección de su gobierno por primera vez. El Día de la Libertad simboliza el fin de siglos de colonialismo y décadas de opresión del apartheid. El día representa el nacimiento de una nueva Sudáfrica democrática basada en la igualdad, la dignidad humana y la libertad. Los sudafricanos celebran el Día de la Libertad con celebraciones, reflexión sobre el camino del país hacia la democracia y un renovado compromiso de construir una sociedad no racial y no sexista.",
          de: "Südafrika feiert den 27. April als Freiheitstag, einen öffentlichen Feiertag zum Gedenken an die erste demokratische Wahl des Landes im Jahr 1994. Diese historische Abstimmung ermöglichte es allen Südafrikanern, unabhängig von ihrer Rasse, zum ersten Mal an der Wahl ihrer Regierung teilzunehmen. Der Freiheitstag symbolisiert das Ende von Jahrhunderten des Kolonialismus und Jahrzehnten der Apartheid-Unterdrückung. Der Tag repräsentiert die Geburt eines neuen demokratischen Südafrika, das auf Gleichheit, Menschenwürde und Freiheit basiert. Südafrikaner begehen den Freiheitstag mit Feiern, Reflexion über die Reise des Landes zur Demokratie und erneuertem Engagement für den Aufbau einer nicht-rassistischen, nicht-sexistischen Gesellschaft.",
          nl: "Zuid-Afrika viert 27 april als Vrijheidsdag, een nationale feestdag ter herdenking van de eerste democratische verkiezing van het land in 1994. Deze historische stemming stelde alle Zuid-Afrikanen, ongeacht ras, in staat voor het eerst deel te nemen aan de verkiezing van hun regering. Vrijheidsdag symboliseert het einde van eeuwen kolonialisme en decennia van apartheidsonderdrukking. De dag vertegenwoordigt de geboorte van een nieuw democratisch Zuid-Afrika gebaseerd op gelijkheid, menselijke waardigheid en vrijheid. Zuid-Afrikanen markeren Vrijheidsdag met vieringen, reflectie op de reis van het land naar democratie en hernieuwde toewijding aan het bouwen van een niet-raciale, niet-seksistische samenleving."
        }
      },
      {
        question: {
          en: "On April 27, 1961, which West African nation gained independence from British colonial rule?",
          es: "El 27 de abril de 1961, ¿qué nación de África Occidental obtuvo la independencia del dominio colonial británico?",
          de: "Am 27. April 1961 erlangte welche westafrikanische Nation die Unabhängigkeit von britischer Kolonialherrschaft?",
          nl: "Op 27 april 1961 verkreeg welke West-Afrikaanse natie onafhankelijkheid van Britse koloniale heerschappij?"
        },
        options: [
          { en: "Sierra Leone", es: "Sierra Leona", de: "Sierra Leone", nl: "Sierra Leone" },
          { en: "Ghana", es: "Ghana", de: "Ghana", nl: "Ghana" },
          { en: "Nigeria", es: "Nigeria", de: "Nigeria", nl: "Nigeria" },
          { en: "Gambia", es: "Gambia", de: "Gambia", nl: "Gambia" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Sierra Leone gained independence from British colonial rule on April 27, 1961, ending almost 150 years of British control. At midnight, the country's green, white, and blue flag was raised at Brookfields Playground in Freetown as huge crowds celebrated. The Duke of Kent handed over royal instruments recognizing Sierra Leone as an independent nation. Sir Milton Margai became the country's first Prime Minister, leading Sierra Leone as a parliamentary democracy within the Commonwealth. The independence came after years of political organization and negotiation, marking a significant moment in Africa's decolonization movement during the 1960s.",
          es: "Sierra Leona obtuvo la independencia del dominio colonial británico el 27 de abril de 1961, terminando casi 150 años de control británico. A medianoche, la bandera verde, blanca y azul del país fue izada en Brookfields Playground en Freetown mientras enormes multitudes celebraban. El Duque de Kent entregó instrumentos reales reconociendo a Sierra Leona como una nación independiente. Sir Milton Margai se convirtió en el primer Primer Ministro del país, liderando Sierra Leona como una democracia parlamentaria dentro de la Commonwealth. La independencia llegó después de años de organización política y negociación, marcando un momento significativo en el movimiento de descolonización de África durante la década de 1960.",
          de: "Sierra Leone erlangte am 27. April 1961 die Unabhängigkeit von britischer Kolonialherrschaft und beendete damit fast 150 Jahre britischer Kontrolle. Um Mitternacht wurde die grün-weiß-blaue Flagge des Landes auf dem Brookfields Playground in Freetown gehisst, während riesige Menschenmengen feierten. Der Herzog von Kent übergab königliche Urkunden, die Sierra Leone als unabhängige Nation anerkannten. Sir Milton Margai wurde der erste Premierminister des Landes und führte Sierra Leone als parlamentarische Demokratie innerhalb des Commonwealth. Die Unabhängigkeit kam nach Jahren politischer Organisation und Verhandlung und markierte einen bedeutenden Moment in Afrikas Entkolonialisierungsbewegung während der 1960er Jahre.",
          nl: "Sierra Leone verkreeg onafhankelijkheid van Britse koloniale heerschappij op 27 april 1961, waarmee een einde kwam aan bijna 150 jaar Britse controle. Om middernacht werd de groene, witte en blauwe vlag van het land gehesen op Brookfields Playground in Freetown terwijl enorme menigten feestten. De hertog van Kent overhandigde koninklijke documenten die Sierra Leone als onafhankelijke natie erkenden. Sir Milton Margai werd 's lands eerste premier, die Sierra Leone leidde als parlementaire democratie binnen het Gemenebest. De onafhankelijkheid kwam na jaren van politieke organisatie en onderhandeling, wat een belangrijk moment markeerde in Afrika's dekolonisatiebeweging tijdens de jaren 1960."
        }
      },
      {
        question: {
          en: "On April 27, 1822, which future U.S. President and Civil War general was born in Point Pleasant, Ohio?",
          es: "El 27 de abril de 1822, ¿qué futuro Presidente de EE.UU. y general de la Guerra Civil nació en Point Pleasant, Ohio?",
          de: "Am 27. April 1822 wurde welcher zukünftige US-Präsident und General des Bürgerkriegs in Point Pleasant, Ohio, geboren?",
          nl: "Op 27 april 1822 werd welke toekomstige Amerikaanse president en generaal van de Burgeroorlog geboren in Point Pleasant, Ohio?"
        },
        options: [
          { en: "Ulysses S. Grant", es: "Ulysses S. Grant", de: "Ulysses S. Grant", nl: "Ulysses S. Grant" },
          { en: "William T. Sherman", es: "William T. Sherman", de: "William T. Sherman", nl: "William T. Sherman" },
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "Andrew Johnson", es: "Andrew Johnson", de: "Andrew Johnson", nl: "Andrew Johnson" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Ulysses S. Grant was born as Hiram Ulysses Grant on April 27, 1822, in Point Pleasant, Ohio. He became the commanding general of the Union Army during the American Civil War, leading the North to victory over the Confederacy in 1865. His military success made him a national hero and propelled him to the presidency. Grant served as the 18th President of the United States from 1869 to 1877, working to protect African American civil rights during Reconstruction. Despite his military brilliance, his presidency was marred by corruption scandals involving his appointees, though Grant himself remained personally honest.",
          es: "Ulysses S. Grant nació como Hiram Ulysses Grant el 27 de abril de 1822, en Point Pleasant, Ohio. Se convirtió en el general comandante del Ejército de la Unión durante la Guerra Civil Americana, liderando al Norte a la victoria sobre la Confederación en 1865. Su éxito militar lo convirtió en un héroe nacional y lo impulsó a la presidencia. Grant sirvió como el 18º Presidente de los Estados Unidos de 1869 a 1877, trabajando para proteger los derechos civiles de los afroamericanos durante la Reconstrucción. A pesar de su brillantez militar, su presidencia estuvo empañada por escándalos de corrupción que involucraron a sus nombrados, aunque el propio Grant permaneció personalmente honesto.",
          de: "Ulysses S. Grant wurde als Hiram Ulysses Grant am 27. April 1822 in Point Pleasant, Ohio, geboren. Er wurde kommandierender General der Unionsarmee während des Amerikanischen Bürgerkriegs und führte den Norden 1865 zum Sieg über die Konföderation. Sein militärischer Erfolg machte ihn zu einem Nationalhelden und katapultierte ihn ins Präsidentenamt. Grant diente von 1869 bis 1877 als 18. Präsident der Vereinigten Staaten und arbeitete daran, die Bürgerrechte der Afroamerikaner während der Reconstruction zu schützen. Trotz seiner militärischen Brillanz wurde seine Präsidentschaft von Korruptionsskandalen überschattet, die seine Ernannten betrafen, obwohl Grant selbst persönlich ehrlich blieb.",
          nl: "Ulysses S. Grant werd geboren als Hiram Ulysses Grant op 27 april 1822, in Point Pleasant, Ohio. Hij werd de opperbevelhebber van het Unie-leger tijdens de Amerikaanse Burgeroorlog en leidde het Noorden naar de overwinning op de Confederatie in 1865. Zijn militaire succes maakte hem een nationale held en stuwde hem naar het presidentschap. Grant diende van 1869 tot 1877 als de 18e president van de Verenigde Staten, werkend aan de bescherming van de burgerrechten van Afro-Amerikanen tijdens de Reconstructie. Ondanks zijn militaire genialiteit werd zijn presidentschap geteisterd door corruptieschandalen met zijn benoemingen, hoewel Grant zelf persoonlijk eerlijk bleef."
        }
      },
      {
        question: {
          en: "How many South Africans of all races voted in the 1994 democratic election, compared to only 3 million white voters in the last apartheid election?",
          es: "¿Cuántos sudafricanos de todas las razas votaron en la elección democrática de 1994, en comparación con solo 3 millones de votantes blancos en la última elección del apartheid?",
          de: "Wie viele Südafrikaner aller Rassen wählten bei der demokratischen Wahl 1994, verglichen mit nur 3 Millionen weißen Wählern bei der letzten Apartheid-Wahl?",
          nl: "Hoeveel Zuid-Afrikanen van alle rassen stemden in de democratische verkiezing van 1994, vergeleken met slechts 3 miljoen blanke kiezers in de laatste apartheidsverkiezing?"
        },
        options: [
          { en: "About 10 million", es: "Aproximadamente 10 millones", de: "Etwa 10 Millionen", nl: "Ongeveer 10 miljoen" },
          { en: "Nearly 20 million", es: "Casi 20 millones", de: "Fast 20 Millionen", nl: "Bijna 20 miljoen" },
          { en: "Around 5 million", es: "Alrededor de 5 millones", de: "Etwa 5 Millionen", nl: "Ongeveer 5 miljoen" },
          { en: "Over 30 million", es: "Más de 30 millones", de: "Über 30 Millionen", nl: "Meer dan 30 miljoen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nearly 20 million South Africans of all races voted in the 1994 democratic election, a dramatic increase from just 3 million white voters in the last apartheid election in 1989. This massive expansion in voter participation reflected the end of racist voting restrictions that had excluded the Black, Coloured, and Indian majority from democratic participation. Long queues formed over the four-day voting period as millions exercised their right to vote for the first time. The overwhelming turnout demonstrated the deep hunger for democracy and equality that had driven the anti-apartheid struggle for decades.",
          es: "Casi 20 millones de sudafricanos de todas las razas votaron en la elección democrática de 1994, un aumento dramático de solo 3 millones de votantes blancos en la última elección del apartheid en 1989. Esta expansión masiva en la participación de votantes reflejó el fin de las restricciones de voto racistas que habían excluido a la mayoría negra, de color e india de la participación democrática. Se formaron largas colas durante el período de votación de cuatro días mientras millones ejercían su derecho al voto por primera vez. La abrumadora participación demostró el profundo hambre de democracia e igualdad que había impulsado la lucha contra el apartheid durante décadas.",
          de: "Fast 20 Millionen Südafrikaner aller Rassen wählten bei der demokratischen Wahl 1994, eine dramatische Zunahme gegenüber nur 3 Millionen weißen Wählern bei der letzten Apartheid-Wahl 1989. Diese massive Expansion der Wählerbeteiligung spiegelte das Ende rassistischer Wahlbeschränkungen wider, die die schwarze, farbige und indische Mehrheit von der demokratischen Teilnahme ausgeschlossen hatten. Während des viertägigen Wahlzeitraums bildeten sich lange Schlangen, als Millionen zum ersten Mal ihr Wahlrecht ausübten. Die überwältigende Beteiligung demonstrierte den tiefen Hunger nach Demokratie und Gleichheit, der den Anti-Apartheid-Kampf jahrzehntelang angetrieben hatte.",
          nl: "Bijna 20 miljoen Zuid-Afrikanen van alle rassen stemden in de democratische verkiezing van 1994, een dramatische toename ten opzichte van slechts 3 miljoen blanke kiezers in de laatste apartheidsverkiezing in 1989. Deze enorme uitbreiding van de kiezersparticipatie weerspiegelde het einde van racistische stembeperkingen die de zwarte, gekleurde en Indiase meerderheid hadden uitgesloten van democratische participatie. Lange rijen vormden zich gedurende de vierdaagse stemperiode terwijl miljoenen voor het eerst hun stemrecht uitoefenden. De overweldigende opkomst toonde de diepe honger naar democratie en gelijkheid die de anti-apartheidsstrijd decennialang had aangedreven."
        }
      }
    ],

    // Day 28 - April 28th: Mutiny on the Bounty (1789) & Mussolini Executed (1945)
    day28: [
      {
        question: {
          en: "On April 28, 1789, a famous mutiny occurred on which British Royal Navy ship in the Pacific Ocean?",
          es: "El 28 de abril de 1789, ocurrió un famoso motín en qué barco de la Marina Real Británica en el Océano Pacífico?",
          de: "Am 28. April 1789 ereignete sich eine berühmte Meuterei auf welchem Schiff der britischen Royal Navy im Pazifischen Ozean?",
          nl: "Op 28 april 1789 vond een beroemde muiterij plaats op welk schip van de Britse Royal Navy in de Stille Oceaan?"
        },
        options: [
          { en: "HMS Endeavour", es: "HMS Endeavour", de: "HMS Endeavour", nl: "HMS Endeavour" },
          { en: "HMS Bounty", es: "HMS Bounty", de: "HMS Bounty", nl: "HMS Bounty" },
          { en: "HMS Beagle", es: "HMS Beagle", de: "HMS Beagle", nl: "HMS Beagle" },
          { en: "HMS Victory", es: "HMS Victory", de: "HMS Victory", nl: "HMS Victory" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Mutiny on the Bounty occurred on April 28, 1789, when acting-Lieutenant Fletcher Christian and disaffected crewmen seized control from Captain William Bligh. The ship had been on a mission to transport breadfruit plants from Tahiti to the West Indies. After a five-month layover in Tahiti where crew formed relationships with locals, they became unwilling to return to strict naval discipline. Christian and mutineers set Bligh and 18 loyalists adrift in an open boat. Remarkably, Bligh navigated over 3,500 miles to safety. The mutineers eventually settled on Pitcairn Island, while some who remained in Tahiti were captured and hanged.",
          es: "El Motín del Bounty ocurrió el 28 de abril de 1789, cuando el teniente interino Fletcher Christian y marineros descontentos tomaron el control del Capitán William Bligh. El barco había estado en una misión para transportar plantas de árbol del pan de Tahití a las Indias Occidentales. Después de una estadía de cinco meses en Tahití donde la tripulación formó relaciones con los locales, se volvieron reacios a volver a la estricta disciplina naval. Christian y los amotinados dejaron a Bligh y 18 leales a la deriva en un bote abierto. Notablemente, Bligh navegó más de 3,500 millas hasta seguridad. Los amotinados finalmente se establecieron en la Isla Pitcairn, mientras que algunos que permanecieron en Tahití fueron capturados y ahorcados.",
          de: "Die Meuterei auf der Bounty ereignete sich am 28. April 1789, als der amtierende Leutnant Fletcher Christian und unzufriedene Besatzungsmitglieder die Kontrolle von Kapitän William Bligh übernahmen. Das Schiff war auf einer Mission, um Brotfruchtpflanzen von Tahiti zu den Westindischen Inseln zu transportieren. Nach einem fünfmonatigen Aufenthalt in Tahiti, wo die Besatzung Beziehungen zu Einheimischen aufbaute, wollten sie nicht zur strengen Marineseelendisziplin zurückkehren. Christian und die Meuterer setzten Bligh und 18 Loyalisten in einem offenen Boot aus. Bemerkenswerterweise navigierte Bligh über 3.500 Meilen in Sicherheit. Die Meuterer ließen sich schließlich auf Pitcairn Island nieder, während einige, die in Tahiti blieben, gefangen genommen und gehängt wurden.",
          nl: "De Muiterij op de Bounty vond plaats op 28 april 1789, toen waarnemend luitenant Fletcher Christian en ontevreden bemanningsleden de controle overnamen van kapitein William Bligh. Het schip was op een missie om broodvruchtplanten van Tahiti naar West-Indië te vervoeren. Na een verblijf van vijf maanden in Tahiti, waar de bemanning relaties vormde met lokale bewoners, waren ze onwillig om terug te keren naar strikte marine-discipline. Christian en de muiters zetten Bligh en 18 loyalisten te drijven in een open boot. Opmerkelijk genoeg navigeerde Bligh meer dan 3.500 mijl naar veiligheid. De muiters vestigden zich uiteindelijk op Pitcairn Island, terwijl sommigen die in Tahiti bleven werden gevangengenomen en opgehangen."
        }
      },
      {
        question: {
          en: "Who was the captain of HMS Bounty who was set adrift during the mutiny but miraculously survived?",
          es: "¿Quién fue el capitán del HMS Bounty que fue dejado a la deriva durante el motín pero milagrosamente sobrevivió?",
          de: "Wer war der Kapitän der HMS Bounty, der während der Meuterei ausgesetzt wurde, aber auf wundersame Weise überlebte?",
          nl: "Wie was de kapitein van de HMS Bounty die tijdens de muiterij te drijven werd gezet maar wonderbaarlijk overleefde?"
        },
        options: [
          { en: "William Bligh", es: "William Bligh", de: "William Bligh", nl: "William Bligh" },
          { en: "Francis Drake", es: "Francis Drake", de: "Francis Drake", nl: "Francis Drake" },
          { en: "James Cook", es: "James Cook", de: "James Cook", nl: "James Cook" },
          { en: "Horatio Nelson", es: "Horatio Nelson", de: "Horatio Nelson", nl: "Horatio Nelson" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Captain William Bligh was set adrift with 18 loyal crew members in a 23-foot open boat with minimal supplies after the mutiny on April 28, 1789. In one of history's most remarkable feats of navigation and survival, Bligh successfully navigated over 3,500 nautical miles across the Pacific to reach Timor in 47 days. Despite harsh conditions and limited food and water, all but one man survived the journey. Bligh returned to England, where he faced a court-martial (standard procedure after losing a ship) and was honorably acquitted. His account of the mutiny made him famous, though his reputation for harsh discipline contributed to the mutiny.",
          es: "El Capitán William Bligh fue dejado a la deriva con 18 miembros leales de la tripulación en un bote abierto de 23 pies con suministros mínimos después del motín el 28 de abril de 1789. En una de las hazañas más notables de navegación y supervivencia de la historia, Bligh navegó con éxito más de 3,500 millas náuticas a través del Pacífico para llegar a Timor en 47 días. A pesar de las duras condiciones y la limitada comida y agua, todos menos un hombre sobrevivieron al viaje. Bligh regresó a Inglaterra, donde enfrentó un consejo de guerra (procedimiento estándar después de perder un barco) y fue absuelto honorablemente. Su relato del motín lo hizo famoso, aunque su reputación por la disciplina dura contribuyó al motín.",
          de: "Kapitän William Bligh wurde nach der Meuterei am 28. April 1789 mit 18 loyalen Besatzungsmitgliedern in einem 23-Fuß-offenen Boot mit minimalen Vorräten ausgesetzt. In einer der bemerkenswertesten Leistungen von Navigation und Überleben in der Geschichte navigierte Bligh erfolgreich über 3.500 Seemeilen über den Pazifik, um in 47 Tagen Timor zu erreichen. Trotz harter Bedingungen und begrenzter Nahrung und Wasser überlebten alle bis auf einen Mann die Reise. Bligh kehrte nach England zurück, wo er sich einem Kriegsgericht stellen musste (Standardverfahren nach dem Verlust eines Schiffes) und ehrenvoll freigesprochen wurde. Sein Bericht über die Meuterei machte ihn berühmt, obwohl sein Ruf für harte Disziplin zur Meuterei beitrug.",
          nl: "Kapitein William Bligh werd na de muiterij op 28 april 1789 met 18 loyale bemanningsleden te drijven gezet in een 23-voet open boot met minimale voorraden. In een van de meest opmerkelijke prestaties van navigatie en overleving in de geschiedenis navigeerde Bligh met succes meer dan 3.500 zeemijl over de Stille Oceaan om in 47 dagen Timor te bereiken. Ondanks barre omstandigheden en beperkt voedsel en water overleefden alle behalve één man de reis. Bligh keerde terug naar Engeland, waar hij een krijgsraad moest ondergaan (standaardprocedure na het verliezen van een schip) en eerlijk werd vrijgesproken. Zijn verslag van de muiterij maakte hem beroemd, hoewel zijn reputatie voor harde discipline bijdroeg aan de muiterij."
        }
      },
      {
        question: {
          en: "On April 28, 1945, Italian dictator Benito Mussolini and his mistress were executed by Italian partisans in what manner?",
          es: "El 28 de abril de 1945, el dictador italiano Benito Mussolini y su amante fueron ejecutados por partisanos italianos de qué manera?",
          de: "Am 28. April 1945 wurden der italienische Diktator Benito Mussolini und seine Geliebte von italienischen Partisanen auf welche Weise hingerichtet?",
          nl: "Op 28 april 1945 werden de Italiaanse dictator Benito Mussolini en zijn minnares door Italiaanse partizanen op welke manier geëxecuteerd?"
        },
        options: [
          { en: "Poisoned", es: "Envenenados", de: "Vergiftet", nl: "Vergiftigd" },
          { en: "Hanged publicly", es: "Ahorcados públicamente", de: "Öffentlich gehängt", nl: "Publiekelijk opgehangen" },
          { en: "Beheaded", es: "Decapitados", de: "Enthauptet", nl: "Onthoofd" },
          { en: "Shot by firing squad", es: "Fusilados", de: "Von einem Erschießungskommando erschossen", nl: "Neergeschoten door vuurpeloton" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 28, 1945, Benito Mussolini and his mistress Clara Petacci were captured by Italian communist partisans as they attempted to flee to Switzerland. They were executed by firing squad near Lake Como. The next day, their bodies were taken to Milan and hung upside down at a gas station in Piazzale Loreto, where Mussolini's regime had previously executed resistance fighters. This public display symbolized the fall of Italian fascism and the end of Mussolini's 21-year dictatorship. Just two days later, Adolf Hitler committed suicide in Berlin, marking the collapse of the Axis powers in Europe.",
          es: "El 28 de abril de 1945, Benito Mussolini y su amante Clara Petacci fueron capturados por partisanos comunistas italianos mientras intentaban huir a Suiza. Fueron ejecutados por un pelotón de fusilamiento cerca del Lago Como. Al día siguiente, sus cuerpos fueron llevados a Milán y colgados boca abajo en una gasolinera en Piazzale Loreto, donde el régimen de Mussolini había ejecutado previamente a luchadores de la resistencia. Esta exhibición pública simbolizó la caída del fascismo italiano y el fin de la dictadura de 21 años de Mussolini. Apenas dos días después, Adolf Hitler se suicidó en Berlín, marcando el colapso de las potencias del Eje en Europa.",
          de: "Am 28. April 1945 wurden Benito Mussolini und seine Geliebte Clara Petacci von italienischen kommunistischen Partisanen gefangen genommen, als sie versuchten, in die Schweiz zu fliehen. Sie wurden in der Nähe des Comer Sees von einem Erschießungskommando hingerichtet. Am nächsten Tag wurden ihre Leichen nach Mailand gebracht und kopfüber an einer Tankstelle am Piazzale Loreto aufgehängt, wo Mussolinis Regime zuvor Widerstandskämpfer hingerichtet hatte. Diese öffentliche zur Schaustellung symbolisierte den Fall des italienischen Faschismus und das Ende von Mussolinis 21-jähriger Diktatur. Nur zwei Tage später beging Adolf Hitler Selbstmord in Berlin, was den Zusammenbruch der Achsenmächte in Europa markierte.",
          nl: "Op 28 april 1945 werden Benito Mussolini en zijn minnares Clara Petacci gevangen genomen door Italiaanse communistische partizanen terwijl ze probeerden naar Zwitserland te vluchten. Ze werden geëxecuteerd door een vuurpeloton nabij het Comomeer. De volgende dag werden hun lichamen naar Milaan gebracht en ondersteboven opgehangen bij een benzinestation op Piazzale Loreto, waar Mussolini's regime eerder verzetsstrijders had geëxecuteerd. Deze publieke vertoning symboliseerde de val van het Italiaanse fascisme en het einde van Mussolini's 21-jarige dictatuur. Slechts twee dagen later pleegde Adolf Hitler zelfmoord in Berlijn, wat de ineenstorting van de Asmogendheden in Europa markeerde."
        }
      },
      {
        question: {
          en: "On April 28, 1788, Maryland became the seventh state to ratify what foundational U.S. document?",
          es: "El 28 de abril de 1788, Maryland se convirtió en el séptimo estado en ratificar qué documento fundamental de EE.UU.?",
          de: "Am 28. April 1788 wurde Maryland der siebte Staat, der welches grundlegende US-Dokument ratifizierte?",
          nl: "Op 28 april 1788 werd Maryland de zevende staat die welk fundamenteel Amerikaans document ratificeerde?"
        },
        options: [
          { en: "The Declaration of Independence", es: "La Declaración de Independencia", de: "Die Unabhängigkeitserklärung", nl: "De Onafhankelijkheidsverklaring" },
          { en: "The Bill of Rights", es: "La Carta de Derechos", de: "Die Bill of Rights", nl: "De Bill of Rights" },
          { en: "The Constitution", es: "La Constitución", de: "Die Verfassung", nl: "De Grondwet" },
          { en: "The Articles of Confederation", es: "Los Artículos de la Confederación", de: "Die Konföderationsartikel", nl: "De Artikelen van Confederatie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On April 28, 1788, Maryland ratified the United States Constitution by a vote of 63 to 11, becoming the seventh state to do so. The Maryland ratification convention met from April 21-28 in the House of Delegates chamber at the Annapolis State House. Maryland's ratification was significant as it demonstrated growing support for the new Constitution among the former colonies. The Constitution would officially take effect once nine states ratified it, which happened on June 21, 1788, when New Hampshire became the ninth state. Maryland's early ratification helped build momentum for the creation of the federal government under the Constitution.",
          es: "El 28 de abril de 1788, Maryland ratificó la Constitución de los Estados Unidos por un voto de 63 a 11, convirtiéndose en el séptimo estado en hacerlo. La convención de ratificación de Maryland se reunió del 21 al 28 de abril en la cámara de la Cámara de Delegados en la Casa del Estado de Annapolis. La ratificación de Maryland fue significativa ya que demostró un apoyo creciente para la nueva Constitución entre las antiguas colonias. La Constitución entraría oficialmente en vigor una vez que nueve estados la ratificaran, lo que sucedió el 21 de junio de 1788, cuando New Hampshire se convirtió en el noveno estado. La ratificación temprana de Maryland ayudó a generar impulso para la creación del gobierno federal bajo la Constitución.",
          de: "Am 28. April 1788 ratifizierte Maryland die Verfassung der Vereinigten Staaten mit 63 zu 11 Stimmen und wurde damit der siebte Staat, der dies tat. Die Ratifizierungskonvention von Maryland tagte vom 21. bis 28. April in der Kammer des Abgeordnetenhauses im Annapolis State House. Marylands Ratifizierung war bedeutend, da sie wachsende Unterstützung für die neue Verfassung unter den ehemaligen Kolonien demonstrierte. Die Verfassung würde offiziell in Kraft treten, sobald neun Staaten sie ratifizierten, was am 21. Juni 1788 geschah, als New Hampshire der neunte Staat wurde. Marylands frühe Ratifizierung half, Schwung für die Schaffung der Bundesregierung unter der Verfassung aufzubauen.",
          nl: "Op 28 april 1788 ratificeerde Maryland de Grondwet van de Verenigde Staten met 63 tegen 11 stemmen, waarmee het de zevende staat werd die dit deed. De ratificatieconventie van Maryland vergaderde van 21-28 april in de kamer van het Huis van Afgevaardigden in het Annapolis State House. De ratificatie door Maryland was significant omdat het groeiende steun voor de nieuwe Grondwet onder de voormalige koloniën aantoonde. De Grondwet zou officieel van kracht worden zodra negen staten het ratificeerden, wat gebeurde op 21 juni 1788, toen New Hampshire de negende staat werd. Maryland's vroege ratificatie hielp momentum op te bouwen voor de oprichting van de federale regering onder de Grondwet."
        }
      },
      {
        question: {
          en: "What plant was HMS Bounty originally commissioned to transport from Tahiti to the West Indies before the mutiny?",
          es: "¿Qué planta fue originalmente encargada al HMS Bounty para transportar de Tahití a las Indias Occidentales antes del motín?",
          de: "Welche Pflanze sollte die HMS Bounty ursprünglich von Tahiti zu den Westindischen Inseln transportieren, bevor die Meuterei stattfand?",
          nl: "Welke plant moest de HMS Bounty oorspronkelijk van Tahiti naar West-Indië vervoeren voordat de muiterij plaatsvond?"
        },
        options: [
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" },
          { en: "Sugarcane", es: "Caña de azúcar", de: "Zuckerrohr", nl: "Suikerriet" },
          { en: "Coconut palms", es: "Palmeras de coco", de: "Kokospalmen", nl: "Kokospalmen" },
          { en: "Breadfruit", es: "Árbol del pan", de: "Brotfrucht", nl: "Broodvrucht" }
        ],
        correctIndex: 3,
        explanation: {
          en: "HMS Bounty was commissioned to transport breadfruit plants from Tahiti to the West Indies, where they would serve as cheap food for enslaved people working on sugar plantations. Breadfruit is a starchy tropical fruit that grows on trees and was seen as an economical way to feed enslaved laborers. The ship spent five months in Tahiti collecting breadfruit plants, during which time the crew enjoyed the island's tropical paradise and formed relationships with Tahitian women. This extended, pleasant stay made the crew reluctant to return to the harsh discipline of naval life, contributing directly to the mutiny when Captain Bligh's strict command clashed with the crew's desire for the freedom they had experienced.",
          es: "El HMS Bounty fue encargado para transportar plantas de árbol del pan de Tahití a las Indias Occidentales, donde servirían como alimento barato para las personas esclavizadas que trabajaban en las plantaciones de azúcar. El árbol del pan es una fruta tropical con almidón que crece en árboles y se veía como una forma económica de alimentar a los trabajadores esclavizados. El barco pasó cinco meses en Tahití recolectando plantas de árbol del pan, durante cuyo tiempo la tripulación disfrutó del paraíso tropical de la isla y formó relaciones con mujeres tahitianas. Esta estadía extendida y placentera hizo que la tripulación fuera reacia a regresar a la dura disciplina de la vida naval, contribuyendo directamente al motín cuando el mando estricto del Capitán Bligh chocó con el deseo de la tripulación por la libertad que habían experimentado.",
          de: "Die HMS Bounty wurde beauftragt, Brotfruchtpflanzen von Tahiti zu den Westindischen Inseln zu transportieren, wo sie als billiges Essen für versklavte Menschen dienen sollten, die auf Zuckerplantagen arbeiteten. Brotfrucht ist eine stärkehaltige tropische Frucht, die auf Bäumen wächst und als wirtschaftliche Methode angesehen wurde, versklavte Arbeiter zu ernähren. Das Schiff verbrachte fünf Monate in Tahiti mit dem Sammeln von Brotfruchtpflanzen, während dieser Zeit genoss die Besatzung das tropische Paradies der Insel und ging Beziehungen mit tahitianischen Frauen ein. Dieser verlängerte, angenehme Aufenthalt machte die Besatzung abgeneigt, zur harten Disziplin des Marinelebens zurückzukehren, was direkt zur Meuterei beitrug, als Kapitän Blighs strikte Führung mit dem Wunsch der Besatzung nach der Freiheit kollidierte, die sie erlebt hatten.",
          nl: "HMS Bounty kreeg de opdracht om broodvruchtplanten van Tahiti naar West-Indië te vervoeren, waar ze zouden dienen als goedkoop voedsel voor tot slaaf gemaakte mensen die op suikerplantages werkten. Broodvrucht is een zetmeelrijke tropische vrucht die op bomen groeit en werd gezien als een economische manier om tot slaaf gemaakte arbeiders te voeden. Het schip bracht vijf maanden door in Tahiti met het verzamelen van broodvruchtplanten, gedurende welke tijd de bemanning genoot van het tropische paradijs van het eiland en relaties aanging met Tahitiaanse vrouwen. Dit verlengde, aangename verblijf maakte de bemanning terughoudend om terug te keren naar de harde discipline van het marineleven, wat direct bijdroeg aan de muiterij toen kapitein Bligh's strikte bevel botste met het verlangen van de bemanning naar de vrijheid die ze hadden ervaren."
        }
      }
    ],

    // Day 29 - April 29th: Los Angeles Riots (1992) & Dachau Liberation (1945)
    day29: [
      {
        question: {
          en: "On April 29, 1992, riots erupted in Los Angeles after four police officers were acquitted in the beating of which motorist?",
          es: "El 29 de abril de 1992, estallaron disturbios en Los Ángeles después de que cuatro oficiales de policía fueran absueltos en la golpiza de qué motorista?",
          de: "Am 29. April 1992 brachen in Los Angeles Unruhen aus, nachdem vier Polizeibeamte im Fall der Misshandlung welches Autofahrers freigesprochen wurden?",
          nl: "Op 29 april 1992 braken er rellen uit in Los Angeles nadat vier politieagenten werden vrijgesproken van de mishandeling van welke automobilist?"
        },
        options: [
          { en: "Eric Garner", es: "Eric Garner", de: "Eric Garner", nl: "Eric Garner" },
          { en: "Oscar Grant", es: "Oscar Grant", de: "Oscar Grant", nl: "Oscar Grant" },
          { en: "Amadou Diallo", es: "Amadou Diallo", de: "Amadou Diallo", nl: "Amadou Diallo" },
          { en: "Rodney King", es: "Rodney King", de: "Rodney King", nl: "Rodney King" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The 1992 Los Angeles riots began on April 29 after four LAPD officers were acquitted of beating Rodney King, despite videotape evidence showing them striking King over 50 times. The verdict sparked six days of violence that resulted in 63 deaths, over 2,000 injuries, and approximately $1 billion in property damage. The riots exposed deep racial tensions and economic inequalities in Los Angeles. King himself made a famous televised plea asking 'Can we all get along?' The uprising led to reforms in the LAPD and renewed national discussions about police brutality and systemic racism in America.",
          es: "Los disturbios de Los Ángeles de 1992 comenzaron el 29 de abril después de que cuatro oficiales del LAPD fueran absueltos de golpear a Rodney King, a pesar de la evidencia en video que mostraba cómo golpeaban a King más de 50 veces. El veredicto provocó seis días de violencia que resultaron en 63 muertes, más de 2,000 heridos y aproximadamente $1 mil millones en daños a la propiedad. Los disturbios expusieron profundas tensiones raciales y desigualdades económicas en Los Ángeles. El propio King hizo un famoso llamado televisado preguntando '¿Podemos llevarnos bien todos?' El levantamiento condujo a reformas en el LAPD y renovadas discusiones nacionales sobre la brutalidad policial y el racismo sistémico en Estados Unidos.",
          de: "Die Unruhen in Los Angeles 1992 begannen am 29. April, nachdem vier LAPD-Beamte vom Vorwurf der Misshandlung von Rodney King freigesprochen wurden, trotz Videobeweisen, die zeigten, wie sie King über 50 Mal schlugen. Das Urteil löste sechs Tage Gewalt aus, die 63 Tote, über 2.000 Verletzte und etwa 1 Milliarde Dollar Sachschaden zur Folge hatten. Die Unruhen legten tiefe Rassenspannungen und wirtschaftliche Ungleichheiten in Los Angeles offen. King selbst machte einen berühmten im Fernsehen übertragenen Appell und fragte: 'Können wir alle miteinander auskommen?' Der Aufstand führte zu Reformen im LAPD und erneuerten nationalen Diskussionen über Polizeibrutalität und systemischen Rassismus in Amerika.",
          nl: "De rellen in Los Angeles van 1992 begonnen op 29 april nadat vier LAPD-agenten werden vrijgesproken van het slaan van Rodney King, ondanks videobewijs dat toonde hoe ze King meer dan 50 keer sloegen. Het vonnis leidde tot zes dagen van geweld dat resulteerde in 63 doden, meer dan 2.000 gewonden en ongeveer $1 miljard aan materiële schade. De rellen legden diepe raciale spanningen en economische ongelijkheden in Los Angeles bloot. King zelf deed een beroemde televisie-oproep waarin hij vroeg: 'Kunnen we allemaal met elkaar opschieten?' De opstand leidde tot hervormingen in de LAPD en hernieuwde nationale discussies over politiegeweld en systemisch racisme in Amerika."
        }
      },
      {
        question: {
          en: "How many days did the 1992 Los Angeles riots last, and approximately how many people died?",
          es: "¿Cuántos días duraron los disturbios de Los Ángeles de 1992 y aproximadamente cuántas personas murieron?",
          de: "Wie viele Tage dauerten die Unruhen in Los Angeles 1992 und wie viele Menschen starben ungefähr?",
          nl: "Hoeveel dagen duurden de rellen in Los Angeles van 1992 en hoeveel mensen stierven er ongeveer?"
        },
        options: [
          { en: "10 days, 100 deaths", es: "10 días, 100 muertes", de: "10 Tage, 100 Tote", nl: "10 dagen, 100 doden" },
          { en: "2 days, 20 deaths", es: "2 días, 20 muertes", de: "2 Tage, 20 Tote", nl: "2 dagen, 20 doden" },
          { en: "6 days, 63 deaths", es: "6 días, 63 muertes", de: "6 Tage, 63 Tote", nl: "6 dagen, 63 doden" },
          { en: "3 days, 30 deaths", es: "3 días, 30 muertes", de: "3 Tage, 30 Tote", nl: "3 dagen, 30 doden" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 1992 Los Angeles riots lasted six days, from April 29 to May 4, resulting in 63 deaths and over 2,000 injuries. The violence caused approximately $1 billion in property damage, making it one of the most destructive civil disturbances in U.S. history. The riots spread across South Central Los Angeles and other parts of the city, with widespread looting, arson, and violence. The National Guard and federal troops were deployed to restore order. The uprising revealed deep frustrations with police brutality, economic inequality, and racial discrimination in Los Angeles' communities of color, particularly affecting Korean-American businesses in affected neighborhoods.",
          es: "Los disturbios de Los Ángeles de 1992 duraron seis días, del 29 de abril al 4 de mayo, resultando en 63 muertes y más de 2,000 heridos. La violencia causó aproximadamente $1 mil millones en daños a la propiedad, convirtiéndola en una de las perturbaciones civiles más destructivas en la historia de EE.UU. Los disturbios se extendieron por el centro-sur de Los Ángeles y otras partes de la ciudad, con saqueos generalizados, incendios provocados y violencia. La Guardia Nacional y las tropas federales fueron desplegadas para restaurar el orden. El levantamiento reveló profundas frustraciones con la brutalidad policial, la desigualdad económica y la discriminación racial en las comunidades de color de Los Ángeles, afectando particularmente a los negocios coreano-americanos en los vecindarios afectados.",
          de: "Die Unruhen in Los Angeles 1992 dauerten sechs Tage, vom 29. April bis 4. Mai, und führten zu 63 Toten und über 2.000 Verletzten. Die Gewalt verursachte etwa 1 Milliarde Dollar Sachschaden und machte sie zu einer der zerstörerischsten Bürgerunruhen in der Geschichte der USA. Die Unruhen breiteten sich über South Central Los Angeles und andere Teile der Stadt aus, mit weit verbreiteten Plünderungen, Brandstiftung und Gewalt. Die Nationalgarde und Bundestruppen wurden eingesetzt, um die Ordnung wiederherzustellen. Der Aufstand offenbarte tiefe Frustrationen über Polizeibrutalität, wirtschaftliche Ungleichheit und Rassendiskriminierung in den farbigen Gemeinden von Los Angeles, wobei besonders koreanisch-amerikanische Geschäfte in den betroffenen Stadtvierteln betroffen waren.",
          nl: "De rellen in Los Angeles van 1992 duurden zes dagen, van 29 april tot 4 mei, wat resulteerde in 63 doden en meer dan 2.000 gewonden. Het geweld veroorzaakte ongeveer $1 miljard aan materiële schade, waardoor het een van de meest verwoestende burgerlijke onlusten in de Amerikaanse geschiedenis werd. De rellen verspreidden zich over South Central Los Angeles en andere delen van de stad, met wijdverspreide plunderingen, brandstichting en geweld. De Nationale Garde en federale troepen werden ingezet om de orde te herstellen. De opstand onthulde diepe frustraties over politiegeweld, economische ongelijkheid en raciaal discriminatie in de gekleurde gemeenschappen van Los Angeles, waarbij Koreaans-Amerikaanse bedrijven in getroffen buurten bijzonder werden getroffen."
        }
      },
      {
        question: {
          en: "On April 29, 1945, which Nazi concentration camp was liberated by the U.S. Seventh Army?",
          es: "El 29 de abril de 1945, ¿qué campo de concentración nazi fue liberado por el Séptimo Ejército de EE.UU.?",
          de: "Am 29. April 1945 wurde welches Nazi-Konzentrationslager von der 7. US-Armee befreit?",
          nl: "Op 29 april 1945 werd welk nazi-concentratiekamp bevrijd door het Amerikaanse Zevende Leger?"
        },
        options: [
          { en: "Bergen-Belsen", es: "Bergen-Belsen", de: "Bergen-Belsen", nl: "Bergen-Belsen" },
          { en: "Buchenwald", es: "Buchenwald", de: "Buchenwald", nl: "Buchenwald" },
          { en: "Auschwitz", es: "Auschwitz", de: "Auschwitz", nl: "Auschwitz" },
          { en: "Dachau", es: "Dachau", de: "Dachau", nl: "Dachau" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On April 29, 1945, the U.S. Seventh Army's 45th Infantry Division liberated Dachau concentration camp near Munich, Germany. Dachau was the first Nazi concentration camp, established in March 1933 shortly after Hitler came to power. American soldiers found approximately 32,000 prisoners in horrific conditions, along with evidence of mass murder including railroad cars filled with corpses. The liberation revealed the full extent of Nazi atrocities to American soldiers and the world. Some liberating soldiers were so shocked by the conditions that they killed SS guards in what became known as the Dachau liberation reprisals. The camp served as a model for other Nazi concentration camps.",
          es: "El 29 de abril de 1945, la 45.ª División de Infantería del Séptimo Ejército de EE.UU. liberó el campo de concentración de Dachau cerca de Múnich, Alemania. Dachau fue el primer campo de concentración nazi, establecido en marzo de 1933 poco después de que Hitler llegara al poder. Los soldados americanos encontraron aproximadamente 32,000 prisioneros en condiciones horribles, junto con evidencia de asesinatos en masa incluyendo vagones de tren llenos de cadáveres. La liberación reveló la magnitud total de las atrocidades nazis a los soldados americanos y al mundo. Algunos soldados liberadores quedaron tan impactados por las condiciones que mataron a guardias de las SS en lo que se conoció como las represalias de la liberación de Dachau. El campo sirvió como modelo para otros campos de concentración nazis.",
          de: "Am 29. April 1945 befreite die 45. Infanteriedivision der 7. US-Armee das Konzentrationslager Dachau in der Nähe von München, Deutschland. Dachau war das erste Nazi-Konzentrationslager, das im März 1933 kurz nach Hitlers Machtübernahme errichtet wurde. Amerikanische Soldaten fanden etwa 32.000 Gefangene unter schrecklichen Bedingungen sowie Beweise für Massenmord, einschließlich Eisenbahnwaggons voller Leichen. Die Befreiung offenbarte das volle Ausmaß der Nazi-Gräueltaten den amerikanischen Soldaten und der Welt. Einige befreiende Soldaten waren so schockiert von den Bedingungen, dass sie SS-Wachen in den sogenannten Dachau-Befreiungsrepressalien töteten. Das Lager diente als Modell für andere Nazi-Konzentrationslager.",
          nl: "Op 29 april 1945 bevrijdde de 45e Infanteriedivisie van het Amerikaanse Zevende Leger concentratiekamp Dachau bij München, Duitsland. Dachau was het eerste nazi-concentratiekamp, opgericht in maart 1933 kort nadat Hitler aan de macht kwam. Amerikaanse soldaten vonden ongeveer 32.000 gevangenen in verschrikkelijke omstandigheden, samen met bewijs van massaslachtingen inclusief treinwagons vol lijken. De bevrijding onthulde de volledige omvang van nazi-gruweldaden aan Amerikaanse soldaten en de wereld. Sommige bevrijdende soldaten waren zo geschokt door de omstandigheden dat ze SS-bewakers doodden in wat bekend werd als de Dachau-bevrijdingsrepresailles. Het kamp diende als model voor andere nazi-concentratiekampen."
        }
      },
      {
        question: {
          en: "On April 29, 1945, Adolf Hitler married his longtime companion in the Führerbunker. Who was she?",
          es: "El 29 de abril de 1945, Adolf Hitler se casó con su compañera de mucho tiempo en el Führerbunker. ¿Quién era ella?",
          de: "Am 29. April 1945 heiratete Adolf Hitler seine langjährige Begleiterin im Führerbunker. Wer war sie?",
          nl: "Op 29 april 1945 trouwde Adolf Hitler met zijn langdurige metgezel in de Führerbunker. Wie was zij?"
        },
        options: [
          { en: "Leni Riefenstahl", es: "Leni Riefenstahl", de: "Leni Riefenstahl", nl: "Leni Riefenstahl" },
          { en: "Unity Mitford", es: "Unity Mitford", de: "Unity Mitford", nl: "Unity Mitford" },
          { en: "Magda Goebbels", es: "Magda Goebbels", de: "Magda Goebbels", nl: "Magda Goebbels" },
          { en: "Eva Braun", es: "Eva Braun", de: "Eva Braun", nl: "Eva Braun" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Adolf Hitler married Eva Braun in a small civil ceremony in the Führerbunker on April 29, 1945, as Soviet forces closed in on Berlin. Eva Braun had been Hitler's companion for over 12 years but was kept largely hidden from the public. The marriage lasted less than 40 hours - the couple committed suicide together on April 30, 1945, as the Battle of Berlin raged above them. Their bodies were burned in the Reich Chancellery garden as Hitler had ordered. Eva Braun's loyalty remained absolute to the end, choosing to die with Hitler rather than escape. Their deaths marked the collapse of Nazi Germany.",
          es: "Adolf Hitler se casó con Eva Braun en una pequeña ceremonia civil en el Führerbunker el 29 de abril de 1945, mientras las fuerzas soviéticas se acercaban a Berlín. Eva Braun había sido la compañera de Hitler durante más de 12 años pero fue mantenida en gran parte oculta del público. El matrimonio duró menos de 40 horas: la pareja se suicidó junta el 30 de abril de 1945, mientras la Batalla de Berlín se libraba sobre ellos. Sus cuerpos fueron quemados en el jardín de la Cancillería del Reich como Hitler había ordenado. La lealtad de Eva Braun permaneció absoluta hasta el final, eligiendo morir con Hitler en lugar de escapar. Sus muertes marcaron el colapso de la Alemania nazi.",
          de: "Adolf Hitler heiratete Eva Braun in einer kleinen standesamtlichen Zeremonie im Führerbunker am 29. April 1945, als sowjetische Truppen auf Berlin vorrückten. Eva Braun war über 12 Jahre lang Hitlers Begleiterin gewesen, wurde aber weitgehend vor der Öffentlichkeit verborgen gehalten. Die Ehe dauerte weniger als 40 Stunden - das Paar beging am 30. April 1945 gemeinsam Selbstmord, während die Schlacht um Berlin über ihnen tobte. Ihre Leichen wurden im Garten der Reichskanzlei verbrannt, wie Hitler befohlen hatte. Eva Brauns Loyalität blieb bis zum Ende absolut, sie wählte mit Hitler zu sterben, anstatt zu fliehen. Ihr Tod markierte den Zusammenbruch Nazi-Deutschlands.",
          nl: "Adolf Hitler trouwde met Eva Braun in een kleine burgerlijke ceremonie in de Führerbunker op 29 april 1945, terwijl Sovjettroepen Berlijn naderden. Eva Braun was meer dan 12 jaar Hitler's metgezel geweest maar werd grotendeels verborgen gehouden voor het publiek. Het huwelijk duurde minder dan 40 uur - het paar pleegde samen zelfmoord op 30 april 1945, terwijl de Slag om Berlijn boven hen woedde. Hun lichamen werden verbrand in de tuin van de Rijkskanselarij zoals Hitler had bevolen. Eva Braun's loyaliteit bleef tot het einde absoluut, ze koos ervoor om met Hitler te sterven in plaats van te ontsnappen. Hun dood markeerde de ineenstorting van nazi-Duitsland."
        }
      },
      {
        question: {
          en: "When was Dachau concentration camp, the first Nazi camp, originally established?",
          es: "¿Cuándo se estableció originalmente el campo de concentración de Dachau, el primer campo nazi?",
          de: "Wann wurde das Konzentrationslager Dachau, das erste Nazi-Lager, ursprünglich errichtet?",
          nl: "Wanneer werd concentratiekamp Dachau, het eerste nazi-kamp, oorspronkelijk opgericht?"
        },
        options: [
          { en: "March 1933", es: "Marzo de 1933", de: "März 1933", nl: "Maart 1933" },
          { en: "November 1938", es: "Noviembre de 1938", de: "November 1938", nl: "November 1938" },
          { en: "January 1942", es: "Enero de 1942", de: "Januar 1942", nl: "Januari 1942" },
          { en: "September 1939", es: "Septiembre de 1939", de: "September 1939", nl: "September 1939" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Dachau concentration camp was established in March 1933, just weeks after Adolf Hitler became Chancellor of Germany. It was the first Nazi concentration camp and served as a model for all subsequent camps. Initially designed to hold political prisoners, communists, and other opponents of the Nazi regime, Dachau later imprisoned Jews, Roma, homosexuals, and other groups targeted by the Nazis. Over its 12-year operation, more than 200,000 prisoners passed through Dachau, with at least 40,000 dying from disease, malnutrition, abuse, and execution. The camp's motto 'Arbeit macht frei' ('Work sets you free') became infamous as a symbol of Nazi deception and cruelty.",
          es: "El campo de concentración de Dachau se estableció en marzo de 1933, solo semanas después de que Adolf Hitler se convirtiera en Canciller de Alemania. Fue el primer campo de concentración nazi y sirvió como modelo para todos los campos posteriores. Inicialmente diseñado para retener a prisioneros políticos, comunistas y otros opositores del régimen nazi, Dachau más tarde encarceló a judíos, romaníes, homosexuales y otros grupos objetivo de los nazis. Durante sus 12 años de operación, más de 200,000 prisioneros pasaron por Dachau, con al menos 40,000 muriendo por enfermedades, desnutrición, abuso y ejecución. El lema del campo 'Arbeit macht frei' ('El trabajo libera') se volvió infame como símbolo del engaño y la crueldad nazi.",
          de: "Das Konzentrationslager Dachau wurde im März 1933 errichtet, nur Wochen nachdem Adolf Hitler Reichskanzler geworden war. Es war das erste Nazi-Konzentrationslager und diente als Modell für alle nachfolgenden Lager. Ursprünglich zur Inhaftierung von politischen Gefangenen, Kommunisten und anderen Gegnern des Nazi-Regimes konzipiert, inhaftierte Dachau später Juden, Roma, Homosexuelle und andere von den Nazis verfolgte Gruppen. Während seines 12-jährigen Betriebs durchliefen mehr als 200.000 Gefangene Dachau, wobei mindestens 40.000 an Krankheit, Unterernährung, Misshandlung und Hinrichtung starben. Das Lagermotto 'Arbeit macht frei' wurde als Symbol für Nazi-Täuschung und Grausamkeit berüchtigt.",
          nl: "Concentratiekamp Dachau werd opgericht in maart 1933, slechts weken nadat Adolf Hitler rijkskanselier van Duitsland was geworden. Het was het eerste nazi-concentratiekamp en diende als model voor alle volgende kampen. Oorspronkelijk ontworpen om politieke gevangenen, communisten en andere tegenstanders van het naziregime vast te houden, hield Dachau later Joden, Roma, homoseksuelen en andere door de nazi's gerichte groepen gevangen. Tijdens zijn 12-jarige werking passeerden meer dan 200.000 gevangenen Dachau, waarbij minstens 40.000 stierven aan ziekte, ondervoeding, misbruik en executie. Het kampmotto 'Arbeit macht frei' ('Werk maakt vrij') werd berucht als symbool van nazi-bedrog en wreedheid."
        }
      }
    ],

    // Day 30 - April 30th: Hitler's Suicide (1945) & Fall of Saigon (1975)
    day30: [
      {
        question: {
          en: "On April 30, 1945, Adolf Hitler committed suicide in his bunker in Berlin. How did he die?",
          es: "El 30 de abril de 1945, Adolf Hitler se suicidó en su búnker en Berlín. ¿Cómo murió?",
          de: "Am 30. April 1945 beging Adolf Hitler Selbstmord in seinem Bunker in Berlin. Wie starb er?",
          nl: "Op 30 april 1945 pleegde Adolf Hitler zelfmoord in zijn bunker in Berlijn. Hoe stierf hij?"
        },
        options: [
          { en: "Hanging", es: "Ahorcamiento", de: "Erhängen", nl: "Ophanging" },
          { en: "Self-inflicted stabbing", es: "Apuñalamiento autoinfligido", de: "Selbst zugefügte Stichverletzung", nl: "Zelf toegebrachte steekwond" },
          { en: "Gunshot to the head", es: "Disparo en la cabeza", de: "Schuss in den Kopf", nl: "Schot in het hoofd" },
          { en: "Cyanide poisoning only", es: "Solo envenenamiento con cianuro", de: "Nur Zyanitvergiftung", nl: "Alleen cyanidevergiftiging" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Adolf Hitler committed suicide by gunshot to the head on April 30, 1945, in the Führerbunker beneath the Reich Chancellery in Berlin. He may have also bitten down on a cyanide capsule simultaneously. His wife Eva Braun, whom he had married just 40 hours earlier, died by cyanide poisoning at the same time. As Soviet forces closed in on Berlin and defeat was inevitable, Hitler chose death over capture. His body and Eva's were carried outside, doused with petrol, and burned in the Reich Chancellery garden. Germany surrendered unconditionally one week later, ending World War II in Europe.",
          es: "Adolf Hitler se suicidó con un disparo en la cabeza el 30 de abril de 1945, en el Führerbunker debajo de la Cancillería del Reich en Berlín. Es posible que también haya mordido una cápsula de cianuro simultáneamente. Su esposa Eva Braun, con quien se había casado apenas 40 horas antes, murió por envenenamiento con cianuro al mismo tiempo. Mientras las fuerzas soviéticas se acercaban a Berlín y la derrota era inevitable, Hitler eligió la muerte sobre la captura. Su cuerpo y el de Eva fueron sacados, rociados con gasolina y quemados en el jardín de la Cancillería del Reich. Alemania se rindió incondicionalmente una semana después, terminando la Segunda Guerra Mundial en Europa.",
          de: "Adolf Hitler beging am 30. April 1945 durch einen Schuss in den Kopf Selbstmord im Führerbunker unter der Reichskanzlei in Berlin. Möglicherweise biss er auch gleichzeitig auf eine Zyankalikapsel. Seine Frau Eva Braun, die er nur 40 Stunden zuvor geheiratet hatte, starb zur gleichen Zeit durch Zyankali-Vergiftung. Als sowjetische Truppen auf Berlin vorrückten und die Niederlage unvermeidlich war, wählte Hitler den Tod statt der Gefangennahme. Sein Leichnam und der von Eva wurden nach draußen getragen, mit Benzin übergossen und im Garten der Reichskanzlei verbrannt. Deutschland kapitulierte eine Woche später bedingungslos und beendete den Zweiten Weltkrieg in Europa.",
          nl: "Adolf Hitler pleegde zelfmoord door een schot in het hoofd op 30 april 1945, in de Führerbunker onder de Rijkskanselarij in Berlijn. Hij heeft mogelijk ook tegelijkertijd op een cyanidecapsule gebeten. Zijn vrouw Eva Braun, met wie hij slechts 40 uur eerder was getrouwd, stierf tegelijkertijd door cyanidevergiftiging. Toen Sovjettroepen Berlijn naderden en de nederlaag onvermijdelijk was, koos Hitler voor de dood boven gevangenneming. Zijn lichaam en dat van Eva werden naar buiten gedragen, met benzine overgoten en verbrand in de tuin van de Rijkskanselarij. Duitsland capituleerde een week later onvoorwaardelijk, waarmee de Tweede Wereldoorlog in Europa eindigde."
        }
      },
      {
        question: {
          en: "On April 30, 1975, which city fell to North Vietnamese forces, effectively ending the Vietnam War?",
          es: "El 30 de abril de 1975, ¿qué ciudad cayó ante las fuerzas norvietnamitas, terminando efectivamente la Guerra de Vietnam?",
          de: "Am 30. April 1975 fiel welche Stadt an nordvietnamesische Truppen, wodurch der Vietnamkrieg effektiv beendet wurde?",
          nl: "Op 30 april 1975 viel welke stad in handen van Noord-Vietnamese troepen, waarmee de Vietnamoorlog effectief eindigde?"
        },
        options: [
          { en: "Da Nang", es: "Da Nang", de: "Da Nang", nl: "Da Nang" },
          { en: "Saigon", es: "Saigón", de: "Saigon", nl: "Saigon" },
          { en: "Hue", es: "Hue", de: "Hue", nl: "Hue" },
          { en: "Hanoi", es: "Hanói", de: "Hanoi", nl: "Hanoi" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On April 30, 1975, Saigon, the capital of South Vietnam, fell to North Vietnamese forces, ending the Vietnam War. South Vietnamese President Duong Van Minh announced unconditional surrender as North Vietnamese tanks rolled into the city. The day before saw chaotic evacuations as American helicopters airlifted people from the U.S. Embassy rooftop in one of history's most iconic images. The Fall of Saigon marked the end of American involvement in Vietnam after decades of conflict. Saigon was subsequently renamed Ho Chi Minh City. The event represented a significant Cold War defeat for the United States and the reunification of Vietnam under communist rule.",
          es: "El 30 de abril de 1975, Saigón, la capital de Vietnam del Sur, cayó ante las fuerzas norvietnamitas, terminando la Guerra de Vietnam. El presidente survietnamita Duong Van Minh anunció la rendición incondicional mientras los tanques norvietnamitas entraban en la ciudad. El día anterior vio evacuaciones caóticas cuando helicópteros americanos transportaron personas desde el techo de la Embajada de EE.UU. en una de las imágenes más icónicas de la historia. La Caída de Saigón marcó el fin de la participación americana en Vietnam después de décadas de conflicto. Saigón fue posteriormente renombrada Ciudad Ho Chi Minh. El evento representó una derrota significativa de la Guerra Fría para Estados Unidos y la reunificación de Vietnam bajo gobierno comunista.",
          de: "Am 30. April 1975 fiel Saigon, die Hauptstadt Südvietnams, an nordvietnamesische Truppen und beendete den Vietnamkrieg. Der südvietnamesische Präsident Duong Van Minh verkündete die bedingungslose Kapitulation, als nordvietnamesische Panzer in die Stadt rollten. Der Tag zuvor sah chaotische Evakuierungen, als amerikanische Hubschrauber Menschen vom Dach der US-Botschaft ausflogen - eines der ikonischsten Bilder der Geschichte. Der Fall von Saigon markierte das Ende der amerikanischen Beteiligung in Vietnam nach Jahrzehnten des Konflikts. Saigon wurde anschließend in Ho-Chi-Minh-Stadt umbenannt. Das Ereignis stellte eine bedeutende Niederlage des Kalten Krieges für die Vereinigten Staaten und die Wiedervereinigung Vietnams unter kommunistischer Herrschaft dar.",
          nl: "Op 30 april 1975 viel Saigon, de hoofdstad van Zuid-Vietnam, in handen van Noord-Vietnamese troepen, waarmee de Vietnamoorlog eindigde. De Zuid-Vietnamese president Duong Van Minh kondigde onvoorwaardelijke overgave aan toen Noord-Vietnamese tanks de stad binnenreden. De dag ervoor zagen chaotische evacuaties toen Amerikaanse helikopters mensen evacueerden vanaf het dak van de Amerikaanse ambassade in een van de meest iconische beelden uit de geschiedenis. De Val van Saigon markeerde het einde van Amerikaanse betrokkenheid in Vietnam na decennia van conflict. Saigon werd vervolgens hernoemd naar Ho Chi Minhstad. De gebeurtenis vertegenwoordigde een significante Koude Oorlog-nederlaag voor de Verenigde Staten en de hereniging van Vietnam onder communistische heerschappij."
        }
      },
      {
        question: {
          en: "On April 30, 1789, George Washington was inaugurated as the first U.S. President. In which city did this historic event take place?",
          es: "El 30 de abril de 1789, George Washington fue inaugurado como el primer Presidente de EE.UU. ¿En qué ciudad tuvo lugar este evento histórico?",
          de: "Am 30. April 1789 wurde George Washington als erster US-Präsident vereidigt. In welcher Stadt fand dieses historische Ereignis statt?",
          nl: "Op 30 april 1789 werd George Washington ingehuldigd als de eerste Amerikaanse president. In welke stad vond deze historische gebeurtenis plaats?"
        },
        options: [
          { en: "Washington D.C.", es: "Washington D.C.", de: "Washington D.C.", nl: "Washington D.C." },
          { en: "Philadelphia", es: "Filadelfia", de: "Philadelphia", nl: "Philadelphia" },
          { en: "New York City", es: "Ciudad de Nueva York", de: "New York City", nl: "New York City" },
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" }
        ],
        correctIndex: 2,
        explanation: {
          en: "George Washington was inaugurated as the first President of the United States on April 30, 1789, at Federal Hall in New York City, which was then the nation's capital. Washington took the oath of office on the balcony overlooking Wall Street, administered by Robert Livingston, Chancellor of New York. After the oath, Washington delivered the first presidential inaugural address to a joint session of Congress. The ceremony established many traditions still followed today, including the president-elect taking the oath with his hand on a Bible. New York served as the U.S. capital from 1785 to 1790 before moving to Philadelphia and eventually Washington D.C.",
          es: "George Washington fue inaugurado como el primer Presidente de los Estados Unidos el 30 de abril de 1789, en el Federal Hall en la Ciudad de Nueva York, que entonces era la capital de la nación. Washington tomó el juramento del cargo en el balcón con vista a Wall Street, administrado por Robert Livingston, Canciller de Nueva York. Después del juramento, Washington pronunció el primer discurso inaugural presidencial a una sesión conjunta del Congreso. La ceremonia estableció muchas tradiciones que aún se siguen hoy, incluyendo que el presidente electo tome el juramento con su mano sobre una Biblia. Nueva York sirvió como capital de EE.UU. de 1785 a 1790 antes de trasladarse a Filadelfia y eventualmente Washington D.C.",
          de: "George Washington wurde am 30. April 1789 in der Federal Hall in New York City, der damaligen Hauptstadt der Nation, als erster Präsident der Vereinigten Staaten vereidigt. Washington legte den Amtseid auf dem Balkon mit Blick auf die Wall Street ab, durchgeführt von Robert Livingston, Kanzler von New York. Nach dem Eid hielt Washington die erste Antrittsrede eines Präsidenten vor einer gemeinsamen Sitzung des Kongresses. Die Zeremonie etablierte viele Traditionen, die noch heute befolgt werden, einschließlich dass der gewählte Präsident den Eid mit seiner Hand auf einer Bibel ablegt. New York diente von 1785 bis 1790 als US-Hauptstadt, bevor sie nach Philadelphia und schließlich nach Washington D.C. verlegt wurde.",
          nl: "George Washington werd op 30 april 1789 ingehuldigd als de eerste president van de Verenigde Staten in Federal Hall in New York City, dat toen de hoofdstad van de natie was. Washington legde de eed af op het balkon met uitzicht op Wall Street, afgenomen door Robert Livingston, kanselier van New York. Na de eed hield Washington de eerste presidentiële inaugurele toespraak voor een gezamenlijke zitting van het Congres. De ceremonie vestigde vele tradities die vandaag de dag nog steeds worden gevolgd, waaronder dat de gekozen president de eed aflegt met zijn hand op een Bijbel. New York diende van 1785 tot 1790 als de Amerikaanse hoofdstad voordat het naar Philadelphia en uiteindelijk Washington D.C. verhuisde."
        }
      },
      {
        question: {
          en: "What is the Fall of Saigon also commonly known as, reflecting its significance in Vietnamese history?",
          es: "¿Cómo se conoce comúnmente también la Caída de Saigón, reflejando su significado en la historia vietnamita?",
          de: "Wie wird der Fall von Saigon auch allgemein genannt, was seine Bedeutung in der vietnamesischen Geschichte widerspiegelt?",
          nl: "Hoe wordt de Val van Saigon ook wel genoemd, wat de betekenis ervan in de Vietnamese geschiedenis weerspiegelt?"
        },
        options: [
          { en: "Tet Offensive", es: "Ofensiva del Tet", de: "Tet-Offensive", nl: "Tet-offensief" },
          { en: "Saigon Offensive", es: "Ofensiva de Saigón", de: "Saigon-Offensive", nl: "Saigon-offensief" },
          { en: "Liberation of Saigon", es: "Liberación de Saigón", de: "Befreiung von Saigon", nl: "Bevrijding van Saigon" },
          { en: "Victory Day", es: "Día de la Victoria", de: "Tag des Sieges", nl: "Overwinningsdag" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Fall of Saigon is also known as the Liberation of Saigon, particularly in Vietnam and by those who supported North Vietnam during the war. This alternate name reflects the different perspectives on the event - while Western sources often call it the 'Fall' implying defeat, Vietnamese sources use 'Liberation' to emphasize the reunification and independence from foreign intervention. In Vietnam, April 30 is celebrated as Reunification Day, a national holiday commemorating the end of the war and the reunification of North and South Vietnam. The event marked the end of one of the longest and most controversial conflicts of the Cold War era.",
          es: "La Caída de Saigón también se conoce como la Liberación de Saigón, particularmente en Vietnam y por aquellos que apoyaron a Vietnam del Norte durante la guerra. Este nombre alternativo refleja las diferentes perspectivas sobre el evento: mientras que las fuentes occidentales a menudo lo llaman la 'Caída' implicando derrota, las fuentes vietnamitas usan 'Liberación' para enfatizar la reunificación e independencia de la intervención extranjera. En Vietnam, el 30 de abril se celebra como el Día de la Reunificación, una festividad nacional que conmemora el fin de la guerra y la reunificación de Vietnam del Norte y del Sur. El evento marcó el fin de uno de los conflictos más largos y controvertidos de la era de la Guerra Fría.",
          de: "Der Fall von Saigon ist auch als die Befreiung von Saigon bekannt, insbesondere in Vietnam und bei denen, die während des Krieges Nordvietnam unterstützten. Dieser alternative Name spiegelt die unterschiedlichen Perspektiven auf das Ereignis wider - während westliche Quellen es oft den 'Fall' nennen, was Niederlage impliziert, verwenden vietnamesische Quellen 'Befreiung', um die Wiedervereinigung und Unabhängigkeit von ausländischer Intervention zu betonen. In Vietnam wird der 30. April als Wiedervereinigungstag gefeiert, ein nationaler Feiertag zum Gedenken an das Ende des Krieges und die Wiedervereinigung von Nord- und Südvietnam. Das Ereignis markierte das Ende eines der längsten und umstrittensten Konflikte der Ära des Kalten Krieges.",
          nl: "De Val van Saigon staat ook bekend als de Bevrijding van Saigon, met name in Vietnam en door degenen die Noord-Vietnam tijdens de oorlog steunden. Deze alternatieve naam weerspiegelt de verschillende perspectieven op de gebeurtenis - terwijl westerse bronnen het vaak de 'Val' noemen wat nederlaag impliceert, gebruiken Vietnamese bronnen 'Bevrijding' om de hereniging en onafhankelijkheid van buitenlandse interventie te benadrukken. In Vietnam wordt 30 april gevierd als Herenigingsdag, een nationale feestdag ter herdenking van het einde van de oorlog en de hereniging van Noord- en Zuid-Vietnam. De gebeurtenis markeerde het einde van een van de langste en meest controversiële conflicten van het Koude Oorlog-tijdperk."
        }
      },
      {
        question: {
          en: "How many days after Hitler's suicide did Germany surrender, ending World War II in Europe?",
          es: "¿Cuántos días después del suicidio de Hitler se rindió Alemania, terminando la Segunda Guerra Mundial en Europa?",
          de: "Wie viele Tage nach Hitlers Selbstmord kapitulierte Deutschland und beendete den Zweiten Weltkrieg in Europa?",
          nl: "Hoeveel dagen na Hitler's zelfmoord capituleerde Duitsland, waarmee de Tweede Wereldoorlog in Europa eindigde?"
        },
        options: [
          { en: "1 day (May 1, 1945)", es: "1 día (1 de mayo de 1945)", de: "1 Tag (1. Mai 1945)", nl: "1 dag (1 mei 1945)" },
          { en: "7 days (May 7-8, 1945)", es: "7 días (7-8 de mayo de 1945)", de: "7 Tage (7.-8. Mai 1945)", nl: "7 dagen (7-8 mei 1945)" },
          { en: "14 days (May 14, 1945)", es: "14 días (14 de mayo de 1945)", de: "14 Tage (14. Mai 1945)", nl: "14 dagen (14 mei 1945)" },
          { en: "30 days (May 30, 1945)", es: "30 días (30 de mayo de 1945)", de: "30 Tage (30. Mai 1945)", nl: "30 dagen (30 mei 1945)" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Germany surrendered unconditionally seven days after Hitler's suicide on April 30, 1945. The surrender was signed on May 7, 1945, at Allied headquarters in Reims, France, and took effect on May 8, known as V-E Day (Victory in Europe Day). Hitler's successor, Grand Admiral Karl Dönitz, authorized the surrender after recognizing that continuing the war was futile. The delay between Hitler's death and surrender allowed time for German military leadership to negotiate terms and organize the capitulation. May 8-9 is celebrated as Victory Day in many European countries, marking the end of the deadliest conflict in human history that claimed over 40 million lives in Europe alone.",
          es: "Alemania se rindió incondicionalmente siete días después del suicidio de Hitler el 30 de abril de 1945. La rendición se firmó el 7 de mayo de 1945, en la sede aliada en Reims, Francia, y entró en vigor el 8 de mayo, conocido como Día V-E (Día de la Victoria en Europa). El sucesor de Hitler, el Gran Almirante Karl Dönitz, autorizó la rendición después de reconocer que continuar la guerra era inútil. El retraso entre la muerte de Hitler y la rendición permitió tiempo para que el liderazgo militar alemán negociara los términos y organizara la capitulación. El 8-9 de mayo se celebra como Día de la Victoria en muchos países europeos, marcando el fin del conflicto más mortífero en la historia humana que cobró más de 40 millones de vidas solo en Europa.",
          de: "Deutschland kapitulierte bedingungslos sieben Tage nach Hitlers Selbstmord am 30. April 1945. Die Kapitulation wurde am 7. Mai 1945 im alliierten Hauptquartier in Reims, Frankreich, unterzeichnet und trat am 8. Mai in Kraft, bekannt als V-E Day (Victory in Europe Day). Hitlers Nachfolger, Großadmiral Karl Dönitz, genehmigte die Kapitulation, nachdem er erkannt hatte, dass die Fortsetzung des Krieges sinnlos war. Die Verzögerung zwischen Hitlers Tod und der Kapitulation gab der deutschen Militärführung Zeit, Bedingungen auszuhandeln und die Kapitulation zu organisieren. Der 8.-9. Mai wird in vielen europäischen Ländern als Tag des Sieges gefeiert und markiert das Ende des tödlichsten Konflikts der Menschheitsgeschichte, der allein in Europa über 40 Millionen Menschenleben forderte.",
          nl: "Duitsland capituleerde onvoorwaardelijk zeven dagen na Hitler's zelfmoord op 30 april 1945. De overgave werd ondertekend op 7 mei 1945, bij het geallieerde hoofdkwartier in Reims, Frankrijk, en werd van kracht op 8 mei, bekend als V-E Day (Victory in Europe Day). Hitler's opvolger, grootadmiraal Karl Dönitz, autoriseerde de overgave nadat hij erkende dat voortzetting van de oorlog zinloos was. De vertraging tussen Hitler's dood en de overgave gaf tijd aan de Duitse militaire leiding om voorwaarden te onderhandelen en de capitulatie te organiseren. 8-9 mei wordt gevierd als Overwinningsdag in veel Europese landen, wat het einde markeert van het dodelijkste conflict in de menselijke geschiedenis dat alleen al in Europa meer dan 40 miljoen levens eiste."
        }
      }
    ]
  };

  // Register with the daily challenges system if it exists
  if (window.dailyChallengesRegistry) {
    window.dailyChallengesRegistry.april = aprilChallenges;
  }

  window.aprilChallenges = aprilChallenges;

})();
