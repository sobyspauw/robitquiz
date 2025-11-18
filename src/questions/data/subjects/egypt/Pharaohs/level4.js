// Pharaohs Quiz - Level 4: Advanced Knowledge
(function() {
  const level4 = {
    name: {
      en: "Pharaohs Level 4",
      es: "Faraones Nivel 4",
      de: "Pharaonen Stufe 4",
      nl: "Faraos Level 4"
    },
    questions: [
      {
        question: {
          en: "What evidence from CT scans suggests Ramesses III died from assassination rather than natural causes?",
          es: "¿Qué evidencia de tomografías computarizadas sugiere que Ramsés III murió por asesinato en lugar de causas naturales?",
          de: "Welche Beweise aus CT-Scans deuten darauf hin, dass Ramses III durch Attentat statt natürlicher Ursachen starb?",
          nl: "Welk bewijs van CT-scans suggereert dat Ramses III stierf door moord in plaats van natuurlijke oorzaken?"
        },
        options: [
          { en: "Deep throat wound severing trachea and major blood vessels, with an amulet placed in the wound", es: "Herida profunda en la garganta cortando la tráquea y vasos sanguíneos principales, con un amuleto colocado en la herida", de: "Tiefe Halswunde, die Luftröhre und große Blutgefäße durchtrennt, mit einem in der Wunde platzierten Amulett", nl: "Diepe keel wond die luchtpijp en grote bloedvaten doorsnijdt, met een amulet geplaatst in de wond" },
          { en: "Skull fractures from blunt force trauma", es: "Fracturas craneales por traumatismo contundente", de: "Schädelfrakturen durch stumpfes Trauma", nl: "Schedel fracturen door stomp geweld" },
          { en: "Poison residue in bone marrow", es: "Residuos de veneno en médula ósea", de: "Giftrückstände im Knochenmark", nl: "Gif residu in beenmerg" },
          { en: "Evidence of strangulation marks on neck vertebrae", es: "Evidencia de marcas de estrangulación en vértebras cervicales", de: "Beweise für Strangulationsmarken an Halswirbeln", nl: "Bewijs van wurging markeringen op nek wervels" }
        ],
        correct: 0,
        explanation: {
          en: "2012 CT scans revealed a deep throat wound with an Eye of Horus amulet placed in it for magical healing in the afterlife. This confirms papyrus accounts of the Harem Conspiracy to assassinate Ramesses III.",
          es: "Tomografías de 2012 revelaron una herida profunda en la garganta con un amuleto del Ojo de Horus colocado en ella para curación mágica en el más allá. Esto confirma los relatos de papiros de la Conspiración del Harén para asesinar a Ramsés III.",
          de: "CT-Scans von 2012 zeigten eine tiefe Halswunde mit einem darin platzierten Horus-Auge-Amulett für magische Heilung im Jenseits. Dies bestätigt Papyrusberichte über die Harem-Verschwörung zur Ermordung von Ramses III.",
          nl: "2012 CT-scans onthulden een diepe keel wond met een Oog van Horus amulet erin geplaatst voor magische genezing in het hiernamaals. Dit bevestigt papyrus verslagen van de Harem Samenzwering om Ramses III te vermoorden."
        }
      },
      {
        question: {
          en: "Which pharaoh's prenomen 'Maatkare' means 'Truth is the Soul of Re' and reflected divine legitimacy claims?",
          es: "¿El prenombre de qué faraón 'Maatkare' significa 'La verdad es el alma de Ra' y reflejaba reclamos de legitimidad divina?",
          de: "Welches Pharaonenprenomen 'Maatkare' bedeutet 'Wahrheit ist die Seele des Re' und spiegelte göttliche Legitimitätsansprüche wider?",
          nl: "Welke farao's prenomen 'Maatkare' betekent 'Waarheid is de Ziel van Re' en weerspiegelde goddelijke legitimiteit claims?"
        },
        options: [
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Sobekneferu", es: "Sobekneferu", de: "Sobekneferu", nl: "Sobekneferoe" },
          { en: "Cleopatra VII", es: "Cleopatra VII", de: "Kleopatra VII", nl: "Cleopatra VII" }
        ],
        correct: 0,
        explanation: {
          en: "Hatshepsut's throne name Maatkare emphasized her connection to cosmic order (maat) and the sun god Re, legitimizing her unprecedented female rule through divine right rather than mere royal lineage.",
          es: "El nombre de trono de Hatshepsut Maatkare enfatizaba su conexión con el orden cósmico (maat) y el dios sol Ra, legitimando su gobierno femenino sin precedentes a través del derecho divino.",
          de: "Hatschepsuts Thronname Maatkare betonte ihre Verbindung zur kosmischen Ordnung (Maat) und dem Sonnengott Re und legitimierte ihre beispiellose weibliche Herrschaft durch göttliches Recht.",
          nl: "Hatsjepsoet's troon naam Maatkare benadrukte haar verbinding met kosmische orde (maat) en de zonnegod Re, legitimerend haar ongekende vrouwelijke heerschappij door goddelijk recht in plaats van slechts koninklijke afstamming."
        }
      },
      {
        question: {
          en: "What architectural feature of Khufu's Great Pyramid remains unexplained and may have served astronomical or ventilation purposes?",
          es: "¿Qué característica arquitectónica de la Gran Pirámide de Keops permanece inexplicada y pudo haber servido para propósitos astronómicos o de ventilación?",
          de: "Welches architektonische Merkmal der Großen Pyramide des Cheops bleibt ungeklärt und könnte astronomischen oder Belüftungszwecken gedient haben?",
          nl: "Welk architectonisch kenmerk van Cheops' Grote Piramide blijft onverklaard en kan gediend hebben voor astronomische of ventilatie doeleinden?"
        },
        options: [
          { en: "The narrow 'air shafts' extending from King's and Queen's Chambers at precise angles", es: "Los estrechos 'conductos de aire' que se extienden desde las Cámaras del Rey y la Reina en ángulos precisos", de: "Die schmalen 'Luftschächte', die sich von der König- und Königinkammer in präzisen Winkeln erstrecken", nl: "De smalle 'lucht schachten' uitstrekkend van Koning's en Koningin's Kamers in precieze hoeken" },
          { en: "The perfectly polished granite sarcophagus", es: "El sarcófago de granito perfectamente pulido", de: "Der perfekt polierte Granitsarkophag", nl: "De perfect gepolijste granieten sarcofaag" },
          { en: "The entrance doorway hidden design", es: "El diseño oculto de la puerta de entrada", de: "Das versteckte Eingangstor-Design", nl: "Het verborgen ingangs deur ontwerp" },
          { en: "The limestone foundation blocks", es: "Los bloques de cimentación de piedra caliza", de: "Die Kalksteinfundamentblöcke", nl: "De kalksteen fundering blokken" }
        ],
        correct: 0,
        explanation: {
          en: "Four narrow shafts (20x20cm) extend from the burial chambers at angles aligning with stars like Orion and Sirius. Their purpose—stellar alignment for the pharaoh's soul, ventilation, or structural relief—remains debated.",
          es: "Cuatro conductos estrechos (20x20cm) se extienden desde las cámaras funerarias en ángulos alineados con estrellas como Orión y Sirio. Su propósito—alineación estelar para el alma del faraón, ventilación o alivio estructural—permanece en debate.",
          de: "Vier schmale Schächte (20x20cm) erstrecken sich von den Grabkammern in Winkeln, die auf Sterne wie Orion und Sirius ausgerichtet sind. Ihr Zweck—Sternausrichtung für die Seele des Pharaos, Belüftung oder strukturelle Entlastung—bleibt umstritten.",
          nl: "Vier smalle schachten (20x20cm) strekken zich uit van de graf kamers in hoeken die aansluiten bij sterren zoals Orion en Sirius. Hun doel—stellaire uitlijning voor de ziel van de farao, ventilatie of structurele verlichting—blijft gedebatteerd."
        }
      },
      {
        question: {
          en: "Which pharaoh's diplomatic correspondence, the Amarna Letters, reveal complex international relations with Babylon, Mittani, and Hittites?",
          es: "¿La correspondencia diplomática de qué faraón, las Cartas de Amarna, revelan relaciones internacionales complejas con Babilonia, Mittani e Hititas?",
          de: "Welches Pharaonendiplomat Korrespondenz, die Amarna-Briefe, enthüllen komplexe internationale Beziehungen mit Babylon, Mittani und Hethitern?",
          nl: "Welke farao's diplomatieke correspondentie, de Amarna Brieven, onthullen complexe internationale relaties met Babylon, Mittani en Hettieten?"
        },
        options: [
          { en: "Akhenaten and Amenhotep III", es: "Akenatón y Amenhotep III", de: "Echnaton und Amenophis III", nl: "Achnaton en Amenhotep III" },
          { en: "Only Tutankhamun", es: "Solo Tutankamón", de: "Nur Tutanchamun", nl: "Alleen Toetanchamon" },
          { en: "Only Ramesses II", es: "Solo Ramsés II", de: "Nur Ramses II", nl: "Alleen Ramses II" },
          { en: "Only Thutmose IV", es: "Solo Tutmosis IV", de: "Nur Thutmosis IV", nl: "Alleen Thoetmosis IV" }
        ],
        correct: 0,
        explanation: {
          en: "The 382 Amarna Letters, written in Akkadian cuneiform on clay tablets, document diplomatic exchanges primarily during Amenhotep III and Akhenaten's reigns, revealing marriage alliances, gift exchanges, and vassal state negotiations.",
          es: "Las 382 Cartas de Amarna, escritas en cuneiforme acadio en tablillas de arcilla, documentan intercambios diplomáticos principalmente durante los reinados de Amenhotep III y Akenatón, revelando alianzas matrimoniales, intercambios de regalos y negociaciones con estados vasallos.",
          de: "Die 382 Amarna-Briefe, in akkadischer Keilschrift auf Tontafeln geschrieben, dokumentieren diplomatische Austausche hauptsächlich während der Regierungszeiten von Amenophis III und Echnaton, enthüllen Heiratsallianzen, Geschenkaustausch und Vasallenstaatenverhandlungen.",
          nl: "De 382 Amarna Brieven, geschreven in Akkadisch spijkerschrift op klei tabletten, documenteren diplomatieke uitwisselingen voornamelijk tijdens Amenhotep III en Achnaton's regeerperiodes, onthullend huwelijks allianties, geschenk uitwisselingen en vazalstaat onderhandelingen."
        }
      },
      {
        question: {
          en: "What unusual co-regency arrangement did Amenemhat I establish to ensure smooth succession?",
          es: "¿Qué arreglo inusual de corregencia estableció Amenemhat I para asegurar una sucesión suave?",
          de: "Welche ungewöhnliche Mitregentschaftsvereinbarung etablierte Amenemhet I, um eine reibungslose Nachfolge zu gewährleisten?",
          nl: "Welke ongebruikelijke mede-regentschap regeling stelde Amenemhat I in om soepele opvolging te verzekeren?"
        },
        options: [
          { en: "Ruling jointly with his son Senusret I for 10 years before his death", es: "Gobernando conjuntamente con su hijo Senusret I durante 10 años antes de su muerte", de: "Gemeinsam mit seinem Sohn Sesostris I für 10 Jahre vor seinem Tod regierend", nl: "Gezamenlijk regerend met zijn zoon Senoeseret I gedurende 10 jaar voor zijn dood" },
          { en: "Appointing multiple heirs simultaneously", es: "Nombrando múltiples herederos simultáneamente", de: "Gleichzeitige Ernennung mehrerer Erben", nl: "Meerdere erfgenamen gelijktijdig aanstellend" },
          { en: "Abdicating completely before death", es: "Abdicando completamente antes de la muerte", de: "Vollständige Abdankung vor dem Tod", nl: "Volledig abdicerend voor dood" },
          { en: "Rotating power between family members", es: "Rotando el poder entre miembros de la familia", de: "Macht zwischen Familienmitgliedern rotierend", nl: "Macht roterend tussen familie leden" }
        ],
        correct: 0,
        explanation: {
          en: "Amenemhat I pioneered the Middle Kingdom co-regency tradition, ruling alongside Senusret I for approximately 10 years. This practice prevented succession crises and civil wars that plagued earlier periods.",
          es: "Amenemhat I fue pionero en la tradición de corregencia del Reino Medio, gobernando junto a Senusret I durante aproximadamente 10 años. Esta práctica previno crisis de sucesión y guerras civiles que afectaron períodos anteriores.",
          de: "Amenemhet I etablierte die Mitregentschaftstradition des Mittleren Reiches und regierte etwa 10 Jahre lang gemeinsam mit Sesostris I. Diese Praxis verhinderte Nachfolgekrisen und Bürgerkriege früherer Perioden.",
          nl: "Amenemhat I was pionier in de Middenrijk mede-regentschap traditie, regeerde naast Senoeseret I gedurende ongeveer 10 jaar. Deze praktijk voorkwam opvolging crises en burgeroorlogen die eerdere periodes teisterden."
        }
      },
      {
        question: {
          en: "Which Dynasty 26 pharaoh attempted to restore Egypt's former glory by consciously imitating Old Kingdom art and architecture?",
          es: "¿Qué faraón de la Dinastía 26 intentó restaurar la gloria anterior de Egipto imitando conscientemente el arte y arquitectura del Reino Antiguo?",
          de: "Welcher Pharao der 26. Dynastie versuchte, Ägyptens frühere Herrlichkeit wiederherzustellen, indem er bewusst Kunst und Architektur des Alten Reiches nachahmte?",
          nl: "Welke Dynastie 26 farao probeerde Egypte's vroegere glorie te herstellen door bewust Oude Rijk kunst en architectuur te imiteren?"
        },
        options: [
          { en: "Psamtik I (Psammetichus I)", es: "Psamético I", de: "Psammetich I", nl: "Psamtik I" },
          { en: "Nectanebo II", es: "Nectanebo II", de: "Nektanebos II", nl: "Nectanebo II" },
          { en: "Amasis II", es: "Amasis II", de: "Amasis II", nl: "Amasis II" },
          { en: "Apries", es: "Apries", de: "Apries", nl: "Apries" }
        ],
        correct: 0,
        explanation: {
          en: "Psamtik I initiated the Saite Renaissance, deliberately reviving Old Kingdom artistic styles, pyramid texts, and administrative practices during Dynasty 26 (664-525 BCE) to legitimize his rule and evoke Egypt's golden age.",
          es: "Psamético I inició el Renacimiento Saíta, reviviendo deliberadamente estilos artísticos del Reino Antiguo, textos de pirámides y prácticas administrativas durante la Dinastía 26 (664-525 a.C.) para legitimar su gobierno y evocar la edad dorada de Egipto.",
          de: "Psammetich I initiierte die Saïtische Renaissance und belebte bewusst künstlerische Stile des Alten Reiches, Pyramidentexte und Verwaltungspraktiken während der 26. Dynastie (664-525 v. Chr.), um seine Herrschaft zu legitimieren und Ägyptens goldenes Zeitalter zu evozieren.",
          nl: "Psamtik I initieerde de Saïtische Renaissance, opzettelijk Oude Rijk artistieke stijlen, piramide teksten en administratieve praktijken heroplevend tijdens Dynastie 26 (664-525 v.Chr.) om zijn heerschappij te legitimeren en Egypte's gouden tijdperk op te roepen."
        }
      },
      {
        question: {
          en: "What innovative burial practice did Djoser's architect Imhotep introduce in the Step Pyramid complex?",
          es: "¿Qué práctica de entierro innovadora introdujo el arquitecto de Djoser, Imhotep, en el complejo de la Pirámide Escalonada?",
          de: "Welche innovative Bestattungspraxis führte Djosers Architekt Imhotep im Stufenpyramidenkomplex ein?",
          nl: "Welke innovatieve begrafenis praktijk introduceerde Djoser's architect Imhotep in het Trap Piramide complex?"
        },
        options: [
          { en: "Underground galleries with blue faience tiles mimicking reed matting", es: "Galerías subterráneas con azulejos de loza azul imitando esteras de caña", de: "Unterirdische Galerien mit blauen Fayence-Fliesen, die Schilfmatten nachahmen", nl: "Ondergrondse galerijen met blauwe faience tegels die riet matten imiteren" },
          { en: "Above-ground stone sarcophagi", es: "Sarcófagos de piedra sobre el suelo", de: "Oberirdische Steinsarkophage", nl: "Bovengrondse stenen sarcofagen" },
          { en: "Wooden burial chambers", es: "Cámaras de entierro de madera", de: "Hölzerne Grabkammern", nl: "Houten begrafenis kamers" },
          { en: "Multiple pyramid entrances", es: "Múltiples entradas de pirámide", de: "Mehrere Pyramideneingänge", nl: "Meerdere piramide ingangen" }
        ],
        correct: 0,
        explanation: {
          en: "Imhotep created elaborate underground chambers decorated with over 36,000 blue-green faience tiles arranged to replicate the reed mat walls of Djoser's palace, symbolically recreating his earthly residence for eternity.",
          es: "Imhotep creó elaboradas cámaras subterráneas decoradas con más de 36.000 azulejos de loza azul-verde dispuestos para replicar las paredes de esteras de caña del palacio de Djoser, recreando simbólicamente su residencia terrenal para la eternidad.",
          de: "Imhotep schuf aufwendige unterirdische Kammern, die mit über 36.000 blau-grünen Fayence-Fliesen dekoriert waren, um die Schilfmattenwände von Djosers Palast nachzubilden und symbolisch seine irdische Residenz für die Ewigkeit nachzubilden.",
          nl: "Imhotep creëerde uitgebreide ondergrondse kamers versierd met meer dan 36.000 blauw-groene faience tegels gerangschikt om de riet mat muren van Djoser's paleis te repliceren, symbolisch zijn aardse verblijf voor eeuwigheid nabootsend."
        }
      },
      {
        question: {
          en: "Which female pharaoh ruled briefly at the end of Dynasty 12 before the Second Intermediate Period?",
          es: "¿Qué faraona gobernó brevemente al final de la Dinastía 12 antes del Segundo Período Intermedio?",
          de: "Welche weibliche Pharaonin herrschte kurzzeitig am Ende der 12. Dynastie vor der Zweiten Zwischenzeit?",
          nl: "Welke vrouwelijke farao regeerde kort aan het einde van Dynastie 12 voor de Tweede Tussenperiode?"
        },
        options: [
          { en: "Sobekneferu", es: "Sobekneferu", de: "Sobekneferu", nl: "Sobekneferoe" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" },
          { en: "Tausret", es: "Tausret", de: "Tausret", nl: "Tausret" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" }
        ],
        correct: 0,
        explanation: {
          en: "Sobekneferu ruled c. 1806-1802 BCE as the last pharaoh of Dynasty 12. She adopted both feminine and masculine royal regalia, possibly indicating the lack of a male heir and the dynasty's impending collapse.",
          es: "Sobekneferu gobernó c. 1806-1802 a.C. como la última faraona de la Dinastía 12. Adoptó regalia real tanto femenina como masculina, posiblemente indicando la falta de un heredero varón y el inminente colapso de la dinastía.",
          de: "Sobekneferu herrschte ca. 1806-1802 v. Chr. als letzte Pharaonin der 12. Dynastie. Sie übernahm sowohl weibliche als auch männliche königliche Insignien, was möglicherweise auf das Fehlen eines männlichen Erben und den bevorstehenden Zusammenbruch der Dynastie hindeutet.",
          nl: "Sobekneferoe regeerde c. 1806-1802 v.Chr. als de laatste farao van Dynastie 12. Ze nam zowel vrouwelijke als mannelijke koninklijke regalia aan, mogelijk wijzend op het gebrek aan een mannelijke erfgenaam en de aanstaande ineenstorting van de dynastie."
        }
      },
      {
        question: {
          en: "What technological innovation in bronze metallurgy emerged during the New Kingdom pharaohs' military expansions?",
          es: "¿Qué innovación tecnológica en metalurgia de bronce surgió durante las expansiones militares de los faraones del Reino Nuevo?",
          de: "Welche technologische Innovation in der Bronzemetallurgie entstand während der militärischen Expansionen der Pharaonen des Neuen Reiches?",
          nl: "Welke technologische innovatie in brons metallurgie ontstond tijdens de Nieuwe Rijk faraos' militaire expansies?"
        },
        options: [
          { en: "Improved bronze alloy composition (10-12% tin) for stronger weapons and chariot fittings", es: "Composición mejorada de aleación de bronce (10-12% estaño) para armas más fuertes y accesorios de carros", de: "Verbesserte Bronzelegierungszusammensetzung (10-12% Zinn) für stärkere Waffen und Streitwagenteile", nl: "Verbeterde brons legering samenstelling (10-12% tin) voor sterkere wapens en strijdwagen bevestigingen" },
          { en: "Iron smelting techniques", es: "Técnicas de fundición de hierro", de: "Eisenschmelztechniken", nl: "IJzer smelt technieken" },
          { en: "Steel production methods", es: "Métodos de producción de acero", de: "Stahlproduktionsmethoden", nl: "Staal productie methoden" },
          { en: "Aluminum casting", es: "Fundición de aluminio", de: "Aluminiumguss", nl: "Aluminium gieten" }
        ],
        correct: 0,
        explanation: {
          en: "New Kingdom metallurgists perfected bronze alloys with 10-12% tin content, creating superior weapons, chariot components, and tools. Contact with Near Eastern cultures through military campaigns accelerated this technology transfer.",
          es: "Los metalurgistas del Reino Nuevo perfeccionaron aleaciones de bronce con 10-12% de contenido de estaño, creando armas superiores, componentes de carros y herramientas. El contacto con culturas del Cercano Oriente a través de campañas militares aceleró esta transferencia de tecnología.",
          de: "Metallurgen des Neuen Reiches perfektionierten Bronzelegierungen mit 10-12% Zinngehalt und schufen überlegene Waffen, Streitwagenkomponenten und Werkzeuge. Der Kontakt mit nahöstlichen Kulturen durch militärische Kampagnen beschleunigte diesen Technologietransfer.",
          nl: "Nieuwe Rijk metallurgen perfectioneerden brons legeringen met 10-12% tin gehalte, superieure wapens, strijdwagen componenten en gereedschap creërend. Contact met Nabije Oosterse culturen door militaire campagnes versnelde deze technologie overdracht."
        }
      },
      {
        question: {
          en: "Which pharaoh's mortuary temple at Abydos featured the famous 'Abydos King List' with 76 predecessors?",
          es: "¿El templo mortuorio de qué faraón en Abidos presentó la famosa 'Lista de Reyes de Abidos' con 76 predecesores?",
          de: "Welches Pharaonentotentempel in Abydos zeigte die berühmte 'Abydos-Königsliste' mit 76 Vorgängern?",
          nl: "Welke farao's mortuaire tempel in Abydos presenteerde de beroemde 'Abydos Koning Lijst' met 76 voorgangers?"
        },
        options: [
          { en: "Seti I", es: "Seti I", de: "Sethos I", nl: "Seti I" },
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Thutmose III", es: "Tutmosis III", de: "Thutmosis III", nl: "Thoetmosis III" },
          { en: "Amenhotep II", es: "Amenhotep II", de: "Amenophis II", nl: "Amenhotep II" }
        ],
        correct: 0,
        explanation: {
          en: "Seti I's Abydos temple contains a critical king list carved in relief, though it deliberately omits 'heretical' rulers like Hatshepsut, Akhenaten, and the Amarna Period pharaohs, reflecting political revisionism.",
          es: "El templo de Abidos de Seti I contiene una lista crítica de reyes tallada en relieve, aunque omite deliberadamente gobernantes 'heréticos' como Hatshepsut, Akenatón y los faraones del Período de Amarna, reflejando revisionismo político.",
          de: "Sethos' I Abydos-Tempel enthält eine kritische Königsliste in Relief geschnitzt, obwohl sie bewusst 'ketzerische' Herrscher wie Hatschepsut, Echnaton und die Amarna-Pharaonen auslässt, was politischen Revisionismus widerspiegelt.",
          nl: "Seti I's Abydos tempel bevat een kritieke koning lijst gesneden in reliëf, hoewel het opzettelijk 'ketterische' heersers zoals Hatsjepsoet, Achnaton en de Amarna Periode faraos weglaat, politiek revisionisme weerspiegelend."
        }
      },
      {
        question: {
          en: "What was the purpose of the 'royal cartouche' (shenu) that enclosed pharaohs' names?",
          es: "¿Cuál era el propósito del 'cartucho real' (shenu) que encerraba los nombres de los faraones?",
          de: "Was war der Zweck der 'königlichen Kartusche' (Schenu), die die Namen der Pharaonen einschloss?",
          nl: "Wat was het doel van de 'koninklijke cartouche' (shenu) die faraos' namen omsloot?"
        },
        options: [
          { en: "Magical protection symbolizing the sun's eternal circuit around the pharaoh's name", es: "Protección mágica simbolizando el circuito eterno del sol alrededor del nombre del faraón", de: "Magischer Schutz, der den ewigen Kreislauf der Sonne um den Namen des Pharaos symbolisiert", nl: "Magische bescherming symboliserend de eeuwige circuit van de zon rond de naam van de farao" },
          { en: "Decorative border with no symbolic meaning", es: "Borde decorativo sin significado simbólico", de: "Dekorativer Rahmen ohne symbolische Bedeutung", nl: "Decoratieve rand zonder symbolische betekenis" },
          { en: "Military rank insignia", es: "Insignia de rango militar", de: "Militärische Rangabzeichen", nl: "Militaire rang insignes" },
          { en: "Geographical boundary marker", es: "Marcador de límite geográfico", de: "Geografische Grenzmarkierung", nl: "Geografische grens markering" }
        ],
        correct: 0,
        explanation: {
          en: "The cartouche, an elongated oval loop representing a rope, symbolized the sun's protective circuit. It magically defended the pharaoh's name from harm, crucial since destroying a name could erase someone's existence in the afterlife.",
          es: "El cartucho, un bucle oval alargado que representa una cuerda, simbolizaba el circuito protector del sol. Defendía mágicamente el nombre del faraón del daño, crucial ya que destruir un nombre podía borrar la existencia de alguien en el más allá.",
          de: "Die Kartusche, eine längliche ovale Schleife, die ein Seil darstellt, symbolisierte den schützenden Kreislauf der Sonne. Sie verteidigte magisch den Namen des Pharaos vor Schaden, entscheidend, da die Zerstörung eines Namens jemandes Existenz im Jenseits auslöschen konnte.",
          nl: "De cartouche, een langwerpige ovale lus die een touw voorstelt, symboliseerde de beschermende circuit van de zon. Het verdedigde magisch de naam van de farao tegen schade, cruciaal aangezien het vernietigen van een naam iemands bestaan in het hiernamaals kon uitwissen."
        }
      },
      {
        question: {
          en: "Which Dynasty 18 pharaoh commissioned the Deir el-Bahari temple with its distinctive terraced architecture?",
          es: "¿Qué faraón de la Dinastía 18 encargó el templo de Deir el-Bahari con su distintiva arquitectura de terrazas?",
          de: "Welcher Pharao der 18. Dynastie beauftragte den Deir el-Bahari-Tempel mit seiner charakteristischen Terrassenarchitektur?",
          nl: "Welke Dynastie 18 farao gaf opdracht voor de Deir el-Bahari tempel met zijn kenmerkende terrasvormige architectuur?"
        },
        options: [
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" },
          { en: "Thutmose III", es: "Tutmosis III", de: "Thutmosis III", nl: "Thoetmosis III" },
          { en: "Amenhotep II", es: "Amenhotep II", de: "Amenophis II", nl: "Amenhotep II" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" }
        ],
        correct: 0,
        explanation: {
          en: "Hatshepsut's mortuary temple Djeser-Djeseru ('Holy of Holies'), designed by architect Senenmut, features three colonnaded terraces built into limestone cliffs. Its innovative design harmonizes architecture with natural landscape.",
          es: "El templo mortuorio de Hatshepsut Djeser-Djeseru ('Santo de los Santos'), diseñado por el arquitecto Senenmut, presenta tres terrazas con columnas construidas en acantilados de piedra caliza. Su diseño innovador armoniza la arquitectura con el paisaje natural.",
          de: "Hatschepsuts Totentempel Djeser-Djeseru ('Allerheiligstes'), entworfen von Architekt Senenmut, verfügt über drei Kolonnaden-Terrassen, die in Kalksteinfelsen gebaut sind. Sein innovatives Design harmonisiert Architektur mit natürlicher Landschaft.",
          nl: "Hatsjepsoet's mortuaire tempel Djeser-Djeseru ('Heilige der Heiligen'), ontworpen door architect Senenmut, heeft drie terrassen met zuilen gebouwd in kalksteen kliffen. Zijn innovatieve ontwerp harmoniseert architectuur met natuurlijk landschap."
        }
      },
      {
        question: {
          en: "What evidence suggests Pharaoh Narmer (possibly Menes) unified Upper and Lower Egypt around 3100 BCE?",
          es: "¿Qué evidencia sugiere que el faraón Narmer (posiblemente Menes) unificó el Alto y Bajo Egipto alrededor de 3100 a.C.?",
          de: "Welche Beweise deuten darauf hin, dass Pharao Narmer (möglicherweise Menes) Ober- und Unterägypten um 3100 v. Chr. vereinte?",
          nl: "Welk bewijs suggereert dat Farao Narmer (mogelijk Menes) Boven- en Beneden-Egypte rond 3100 v.Chr. verenigd heeft?"
        },
        options: [
          { en: "The Narmer Palette depicting him wearing both the white and red crowns", es: "La Paleta de Narmer representándolo usando tanto las coronas blanca como roja", de: "Die Narmer-Palette, die ihn sowohl mit der weißen als auch der roten Krone zeigt", nl: "Het Narmer Palet hem afbeeldend dragend zowel de witte als rode kronen" },
          { en: "Greek historical texts from Herodotus", es: "Textos históricos griegos de Heródoto", de: "Griechische historische Texte von Herodot", nl: "Griekse historische teksten van Herodotus" },
          { en: "Roman inscriptions", es: "Inscripciones romanas", de: "Römische Inschriften", nl: "Romeinse inscripties" },
          { en: "Modern archaeological excavations only", es: "Solo excavaciones arqueológicas modernas", de: "Nur moderne archäologische Ausgrabungen", nl: "Alleen moderne archeologische opgravingen" }
        ],
        correct: 0,
        explanation: {
          en: "The ceremonial Narmer Palette shows the pharaoh wearing Upper Egypt's white crown on one side and Lower Egypt's red crown on the reverse, symbolizing unified rule. This c. 3100 BCE artifact provides the earliest evidence of Egyptian unification.",
          es: "La Paleta ceremonial de Narmer muestra al faraón usando la corona blanca del Alto Egipto en un lado y la corona roja del Bajo Egipto en el reverso, simbolizando el gobierno unificado. Este artefacto c. 3100 a.C. proporciona la evidencia más temprana de la unificación egipcia.",
          de: "Die zeremonielle Narmer-Palette zeigt den Pharao mit der weißen Krone Oberägyptens auf einer Seite und der roten Krone Unterägyptens auf der Rückseite, was die vereinte Herrschaft symbolisiert. Dieses Artefakt ca. 3100 v. Chr. liefert den frühesten Beweis für die ägyptische Vereinigung.",
          nl: "Het ceremoniële Narmer Palet toont de farao dragend Boven-Egypte's witte kroon op één kant en Beneden-Egypte's rode kroon op de keerzijde, verenigd bestuur symboliserend. Dit c. 3100 v.Chr. artefact biedt het vroegste bewijs van Egyptische eenwording."
        }
      },
      {
        question: {
          en: "Which pharaoh built the Ramesseum, featuring colossal statues and extensive grain storage facilities?",
          es: "¿Qué faraón construyó el Ramesseum, que presenta estatuas colosales y extensas instalaciones de almacenamiento de granos?",
          de: "Welcher Pharao baute das Ramesseum mit kolossalen Statuen und umfangreichen Getreidespeicheranlagen?",
          nl: "Welke farao bouwde het Ramesseum, met kolossale standbeelden en uitgebreide graan opslag faciliteiten?"
        },
        options: [
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Ramesses III", es: "Ramsés III", de: "Ramses III", nl: "Ramses III" },
          { en: "Seti I", es: "Seti I", de: "Sethos I", nl: "Seti I" },
          { en: "Amenhotep III", es: "Amenhotep III", de: "Amenophis III", nl: "Amenhotep III" }
        ],
        correct: 0,
        explanation: {
          en: "Ramesses II's Ramesseum mortuary temple on Thebes' west bank included a 1,000-ton seated statue (now the 'Ozymandias' of Shelley's poem) and extensive storage magazines, demonstrating economic power alongside religious function.",
          es: "El templo mortuorio Ramesseum de Ramsés II en la orilla oeste de Tebas incluía una estatua sentada de 1.000 toneladas (ahora el 'Ozymandias' del poema de Shelley) y extensos almacenes, demostrando poder económico junto a la función religiosa.",
          de: "Ramses IIs Ramesseum-Totentempel am Westufer von Theben umfasste eine 1.000-Tonnen-Sitzstatue (heute das 'Ozymandias' von Shelleys Gedicht) und umfangreiche Speichermagazine, was wirtschaftliche Macht neben religiöser Funktion demonstriert.",
          nl: "Ramses II's Ramesseum mortuaire tempel op Thebe's west oever omvatte een 1.000-ton zittend standbeeld (nu de 'Ozymandias' van Shelley's gedicht) en uitgebreide opslag magazijnen, economische macht naast religieuze functie demonstrerend."
        }
      },
      {
        question: {
          en: "What was the ideological purpose of the 'smiting the enemies' scene frequently depicted in pharaonic art?",
          es: "¿Cuál era el propósito ideológico de la escena de 'golpear a los enemigos' frecuentemente representada en el arte faraónico?",
          de: "Was war der ideologische Zweck der 'Feinde schlagen'-Szene, die häufig in pharaonischer Kunst dargestellt wurde?",
          nl: "Wat was het ideologische doel van de 'vijanden slaan' scène frequent afgebeeld in faraonische kunst?"
        },
        options: [
          { en: "Demonstrating pharaoh's role as defender of cosmic order (maat) against chaos (isfet)", es: "Demostrar el papel del faraón como defensor del orden cósmico (maat) contra el caos (isfet)", de: "Demonstration der Rolle des Pharaos als Verteidiger der kosmischen Ordnung (Maat) gegen Chaos (Isfet)", nl: "Demonstrerend farao's rol als verdediger van kosmische orde (maat) tegen chaos (isfet)" },
          { en: "Historical documentation of actual battles", es: "Documentación histórica de batallas reales", de: "Historische Dokumentation tatsächlicher Schlachten", nl: "Historische documentatie van werkelijke gevechten" },
          { en: "Entertainment decoration only", es: "Solo decoración de entretenimiento", de: "Nur Unterhaltungsdekoration", nl: "Alleen vermaak decoratie" },
          { en: "Foreign policy announcements", es: "Anuncios de política exterior", de: "Außenpolitische Ankündigungen", nl: "Buitenlands beleid aankondigingen" }
        ],
        correct: 0,
        explanation: {
          en: "The ritualized smiting pose—pharaoh grasping enemies by the hair—symbolized maintaining cosmic order rather than documenting specific battles. This ideological image reinforced the ruler's divine mandate to uphold maat and defeat chaos.",
          es: "La pose ritualizada de golpear—el faraón agarrando enemigos por el cabello—simbolizaba mantener el orden cósmico en lugar de documentar batallas específicas. Esta imagen ideológica reforzaba el mandato divino del gobernante para sostener maat y derrotar el caos.",
          de: "Die ritualisierte Schlagpose—Pharao, der Feinde am Haar packt—symbolisierte die Aufrechterhaltung der kosmischen Ordnung statt der Dokumentation spezifischer Schlachten. Dieses ideologische Bild verstärkte das göttliche Mandat des Herrschers, Maat aufrechtzuerhalten und Chaos zu besiegen.",
          nl: "De geritualiseerde slag pose—farao grijpend vijanden bij het haar—symboliseerde kosmische orde handhaven in plaats van specifieke gevechten documenteren. Dit ideologische beeld versterkte de goddelijke mandaat van de heerser om maat te handhaven en chaos te verslaan."
        }
      },
      {
        question: {
          en: "Which pharaoh's red granite sarcophagus was recycled from an earlier burial and shows evidence of re-carving?",
          es: "¿El sarcófago de granito rojo de qué faraón fue reciclado de un entierro anterior y muestra evidencia de retallado?",
          de: "Welches Pharaonengranitssarkophag aus rotem Granit wurde aus einer früheren Bestattung recycelt und zeigt Beweise für Umarbeitung?",
          nl: "Welke farao's rode granieten sarcofaag werd gerecycled van een eerdere begrafenis en toont bewijs van her-snijden?"
        },
        options: [
          { en: "Ramesses II (reused Merenptah's sarcophagus for his own burial)", es: "Ramsés II (reutilizó el sarcófago de Merenptah para su propio entierro)", de: "Ramses II (verwendete Merenptahs Sarkophag für seine eigene Bestattung wieder)", nl: "Ramses II (hergebruikte Merenptah's sarcofaag voor zijn eigen begrafenis)" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
          { en: "Akhenaten", es: "Akenatón", de: "Echnaton", nl: "Achnaton" }
        ],
        correct: 0,
        explanation: {
          en: "Evidence suggests Ramesses II appropriated Merenptah's sarcophagus, which was then re-appropriated again in the Third Intermediate Period. Such recycling was common during resource scarcity or when claiming predecessor's legitimacy.",
          es: "La evidencia sugiere que Ramsés II se apropió del sarcófago de Merenptah, que luego fue apropiado nuevamente en el Tercer Período Intermedio. Tal reciclaje era común durante la escasez de recursos o al reclamar la legitimidad de predecesores.",
          de: "Beweise deuten darauf hin, dass Ramses II Merenptahs Sarkophag in Besitz nahm, der dann in der Dritten Zwischenzeit erneut übernommen wurde. Solches Recycling war während Ressourcenknappheit oder bei Anspruch auf Vorgängerlegitimität üblich.",
          nl: "Bewijs suggereert dat Ramses II Merenptah's sarcofaag toe-eigende, die vervolgens opnieuw toe-geëigend werd in de Derde Tussenperiode. Dergelijke recycling was gebruikelijk tijdens schaarste aan middelen of bij claim op voorganger's legitimiteit."
        }
      },
      {
        question: {
          en: "What diplomatic marriage alliance did Thutmose IV forge by marrying a Mitanni princess?",
          es: "¿Qué alianza matrimonial diplomática forjó Tutmosis IV al casarse con una princesa de Mitanni?",
          de: "Welche diplomatische Heiratsallianz schmiedete Thutmosis IV durch die Heirat mit einer Mitanni-Prinzessin?",
          nl: "Welke diplomatieke huwelijks alliantie smeedde Thoetmosis IV door te trouwen met een Mitanni prinses?"
        },
        options: [
          { en: "Peace treaty ending decades of conflict over Syrian territories", es: "Tratado de paz terminando décadas de conflicto sobre territorios sirios", de: "Friedensvertrag, der Jahrzehnte des Konflikts über syrische Gebiete beendete", nl: "Vredesverdrag eindigend decennia van conflict over Syrische gebieden" },
          { en: "Trade agreement for copper imports", es: "Acuerdo comercial para importaciones de cobre", de: "Handelsabkommen für Kupferimporte", nl: "Handels overeenkomst voor koper import" },
          { en: "Military alliance against Assyria", es: "Alianza militar contra Asiria", de: "Militärallianz gegen Assyrien", nl: "Militaire alliantie tegen Assyrië" },
          { en: "Cultural exchange program", es: "Programa de intercambio cultural", de: "Kulturaustauschprogramm", nl: "Culturele uitwisseling programma" }
        ],
        correct: 0,
        explanation: {
          en: "Thutmose IV's marriage to Mutemwiya, daughter of Mitanni King Artatama I, established peace after his grandfather Thutmose III's military campaigns. This initiated the practice of diplomatic marriages that characterized the Amarna Age.",
          es: "El matrimonio de Tutmosis IV con Mutemwiya, hija del rey de Mitanni Artatama I, estableció la paz después de las campañas militares de su abuelo Tutmosis III. Esto inició la práctica de matrimonios diplomáticos que caracterizó la Edad de Amarna.",
          de: "Thutmosis IVs Heirat mit Mutemwiya, Tochter des Mitanni-Königs Artatama I, etablierte Frieden nach den Militärkampagnen seines Großvaters Thutmosis III. Dies initiierte die Praxis diplomatischer Ehen, die das Amarna-Zeitalter charakterisierte.",
          nl: "Thoetmosis IV's huwelijk met Mutemwiya, dochter van Mitanni Koning Artatama I, vestigde vrede na zijn grootvader Thoetmosis III's militaire campagnes. Dit initieerde de praktijk van diplomatieke huwelijken die het Amarna Tijdperk karakteriseerde."
        }
      },
      {
        question: {
          en: "Which Middle Kingdom pharaoh is depicted with realistically aged features, breaking from idealized portraiture?",
          es: "¿Qué faraón del Reino Medio se representa con características de envejecimiento realistas, rompiendo con el retrato idealizado?",
          de: "Welcher Pharao des Mittleren Reiches wird mit realistisch gealterten Merkmalen dargestellt und bricht damit mit idealisierter Porträtkunst?",
          nl: "Welke Middenrijk farao wordt afgebeeld met realistisch verouderde kenmerken, brekend met geïdealiseerde portretkunst?"
        },
        options: [
          { en: "Senusret III", es: "Senusret III", de: "Sesostris III", nl: "Senoeseret III" },
          { en: "Mentuhotep II", es: "Mentuhotep II", de: "Mentuhotep II", nl: "Mentuhotep II" },
          { en: "Amenemhat I", es: "Amenemhat I", de: "Amenemhet I", nl: "Amenemhat I" },
          { en: "Senusret I", es: "Senusret I", de: "Sesostris I", nl: "Senoeseret I" }
        ],
        correct: 0,
        explanation: {
          en: "Senusret III's portraits show lined faces, heavy-lidded eyes, and furrowed brows, representing the burden of kingship. This 'veristic' style conveyed wisdom and experience rather than timeless youth, unique in Egyptian royal art.",
          es: "Los retratos de Senusret III muestran rostros con líneas, ojos con párpados pesados y ceños fruncidos, representando la carga de la realeza. Este estilo 'verístico' transmitía sabiduría y experiencia en lugar de juventud eterna, único en el arte real egipcio.",
          de: "Sesostris' III Porträts zeigen gezeichnete Gesichter, schwere Augenlider und gefurchte Brauen, die die Last des Königtums darstellen. Dieser 'veristische' Stil vermittelte Weisheit und Erfahrung statt zeitloser Jugend, einzigartig in ägyptischer königlicher Kunst.",
          nl: "Senoeseret III's portretten tonen gegroefd gezichten, zware oogleden en gefronste wenkbrauwen, representerende de last van koningschap. Deze 'veristische' stijl droeg wijsheid en ervaring over in plaats van tijdloze jeugd, uniek in Egyptische koninklijke kunst."
        }
      },
      {
        question: {
          en: "What innovative pyramid construction technique did Amenemhat III employ at Hawara?",
          es: "¿Qué técnica innovadora de construcción de pirámides empleó Amenemhat III en Hawara?",
          de: "Welche innovative Pyramidenbaustechnik setzte Amenemhet III in Hawara ein?",
          nl: "Welke innovatieve piramide constructie techniek gebruikte Amenemhat III in Hawara?"
        },
        options: [
          { en: "Complex internal sliding portcullis system and multiple false passages to deter tomb robbers", es: "Sistema complejo interno de rastrillo deslizante y múltiples pasajes falsos para disuadir a ladrones de tumbas", de: "Komplexes internes Schiebefallgittersystem und mehrere falsche Gänge zur Abschreckung von Grabräubern", nl: "Complex intern glijdend valhek systeem en meerdere valse passages om graf rovers af te schrikken" },
          { en: "Use of fired brick instead of stone", es: "Uso de ladrillo cocido en lugar de piedra", de: "Verwendung von gebrannten Ziegeln statt Stein", nl: "Gebruik van gebakken baksteen in plaats van steen" },
          { en: "External ramps remaining in place", es: "Rampas externas permaneciendo en su lugar", de: "Externe Rampen an Ort und Stelle bleibend", nl: "Externe hellingen op hun plaats blijvend" },
          { en: "Hollow internal chambers", es: "Cámaras internas huecas", de: "Hohle innere Kammern", nl: "Holle interne kamers" }
        ],
        correct: 0,
        explanation: {
          en: "Amenemhat III's Hawara pyramid featured elaborate anti-theft measures including three sliding stone portcullises, blind passages, and a ceiling that could be lowered to seal the burial chamber—yet robbers still succeeded.",
          es: "La pirámide de Hawara de Amenemhat III presentaba elaboradas medidas antirrobo incluyendo tres rastrillos de piedra deslizantes, pasajes ciegos y un techo que podía bajarse para sellar la cámara funeraria—sin embargo, los ladrones aún tuvieron éxito.",
          de: "Amenemhets III Hawara-Pyramide verfügte über aufwendige Diebstahlschutzmaßnahmen einschließlich drei gleitender Steinfallgitter, Blindgänge und einer Decke, die gesenkt werden konnte, um die Grabkammer zu versiegeln—dennoch waren Räuber erfolgreich.",
          nl: "Amenemhat III's Hawara piramide had uitgebreide anti-diefstal maatregelen inclusief drie glijdende stenen valhekken, blinde passages en een plafond dat verlaagd kon worden om de graf kamer te verzegelen—toch slaagden rovers nog steeds."
        }
      },
      {
        question: {
          en: "Which Late Period pharaoh successfully expelled the Assyrians and initiated a cultural renaissance?",
          es: "¿Qué faraón del Período Tardío expulsó exitosamente a los asirios e inició un renacimiento cultural?",
          de: "Welcher Pharao der Spätzeit vertrieb erfolgreich die Assyrer und initiierte eine kulturelle Renaissance?",
          nl: "Welke Late Periode farao verdreef succesvol de Assyriërs en initieerde een culturele renaissance?"
        },
        options: [
          { en: "Psamtik I", es: "Psamético I", de: "Psammetich I", nl: "Psamtik I" },
          { en: "Nectanebo I", es: "Nectanebo I", de: "Nektanebos I", nl: "Nectanebo I" },
          { en: "Amasis", es: "Amasis", de: "Amasis", nl: "Amasis" },
          { en: "Apries", es: "Apries", de: "Apries", nl: "Apries" }
        ],
        correct: 0,
        explanation: {
          en: "Psamtik I unified Egypt and expelled Assyrian forces around 656 BCE, establishing Dynasty 26's Saite Period. He initiated a cultural revival deliberately imitating Old and Middle Kingdom art, architecture, and religious practices.",
          es: "Psamético I unificó Egipto y expulsó las fuerzas asirias alrededor de 656 a.C., estableciendo el Período Saíta de la Dinastía 26. Inició un renacimiento cultural imitando deliberadamente arte, arquitectura y prácticas religiosas del Reino Antiguo y Medio.",
          de: "Psammetich I vereinte Ägypten und vertrieb assyrische Streitkräfte um 656 v. Chr., etablierte die Saïtenzeit der 26. Dynastie. Er initiierte eine kulturelle Wiederbelebung, die bewusst Kunst, Architektur und religiöse Praktiken des Alten und Mittleren Reiches nachahmte.",
          nl: "Psamtik I verenigd Egypte en verdreef Assyrische troepen rond 656 v.Chr., vesttigend Dynastie 26's Saïtische Periode. Hij initieerde een culturele heropleving opzettelijk Oude en Middenrijk kunst, architectuur en religieuze praktijken imiterend."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
