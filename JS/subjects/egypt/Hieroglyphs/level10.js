// Quiz Level 10: Hiërogliefen - Master Hieroglyph Reading & Expert Knowledge
(function() {
  "use strict";

  const level10 = {
    name: {
      en: "Master Hieroglyph Reading & Expert Knowledge",
      es: "Maestría en Lectura de Jeroglíficos y Conocimiento Experto",
      de: "Meisterhafte Hieroglyphen-Lesung und Expertenwissen",
      nl: "Meesterschap in Hiëroglieflezing & Expertkennis"
    },
    questions: [
      {
        question: {
          en: "What is the most complex aspect of reading Ptolemaic temple inscriptions?",
          es: "¿Cuál es el aspecto más complejo de leer inscripciones de templos ptolemaicos?",
          de: "Was ist der komplexeste Aspekt beim Lesen ptolemäischer Tempelinschriften?",
          nl: "Wat is het meest complexe aspect van het lezen van Ptolemese tempelinscripties?"
        },
        options: [
          { en: "Cryptographic orthography with multiple sign values", es: "Ortografía criptográfica con múltiples valores de signos", de: "Kryptographische Orthographie mit mehreren Zeichenwerten", nl: "Cryptografische orthografie met meerdere tekenwaarden" },
          { en: "Use of only Old Kingdom signs", es: "Uso solo de signos del Reino Antiguo", de: "Verwendung nur von Zeichen des Alten Reiches", nl: "Gebruik van alleen Oude Koninkrijk tekens" },
          { en: "Complete absence of determinatives", es: "Ausencia completa de determinativos", de: "Völliges Fehlen von Determinativen", nl: "Volledige afwezigheid van determinatieven" },
          { en: "Exclusive use of Coptic vocabulary", es: "Uso exclusivo de vocabulario copto", de: "Ausschließliche Verwendung koptischen Vokabulars", nl: "Exclusief gebruik van Koptisch vocabulaire" }
        ],
        correct: 0,
        explanation: {
          en: "Ptolemaic temple inscriptions feature cryptographic orthography where single signs can have multiple values, including acrophonic principles, visual puns, and esoteric meanings, making them extremely challenging to decipher.",
          es: "Las inscripciones de templos ptolemaicos presentan ortografía criptográfica donde signos únicos pueden tener múltiples valores, incluyendo principios acrofónicos, juegos de palabras visuales y significados esotéricos, haciéndolas extremadamente desafiantes de descifrar.",
          de: "Ptolemäische Tempelinschriften zeigen kryptographische Orthographie, bei der einzelne Zeichen mehrere Werte haben können, einschließlich akrophonischer Prinzipien, visueller Wortspiele und esoterischer Bedeutungen, was sie extrem schwer zu entschlüsseln macht.",
          nl: "Ptolemese tempelinscripties bevatten cryptografische orthografie waarbij enkele tekens meerdere waarden kunnen hebben, inclusief acrofonische principes, visuele woordspelingen en esoterische betekenissen, waardoor ze extreem uitdagend zijn om te ontcijferen."
        }
      },
      {
        question: {
          en: "What advanced technique is essential for reading damaged hieroglyphic texts?",
          es: "¿Qué técnica avanzada es esencial para leer textos jeroglíficos dañados?",
          de: "Welche fortgeschrittene Technik ist wesentlich für das Lesen beschädigter hieroglyphischer Texte?",
          nl: "Welke geavanceerde techniek is essentieel voor het lezen van beschadigde hiëroglifische teksten?"
        },
        options: [
          { en: "Philological reconstruction using parallel texts and formulaic patterns", es: "Reconstrucción filológica usando textos paralelos y patrones formulaicos", de: "Philologische Rekonstruktion mit Paralleltexten und formelhaften Mustern", nl: "Filologische reconstructie met parallelle teksten en formele patronen" },
          { en: "Random guessing of missing signs", es: "Adivinanza aleatoria de signos faltantes", de: "Zufälliges Raten fehlender Zeichen", nl: "Willekeurig raden van ontbrekende tekens" },
          { en: "Using only the visible portions", es: "Usar solo las porciones visibles", de: "Nur die sichtbaren Teile verwenden", nl: "Alleen de zichtbare delen gebruiken" },
          { en: "Modern translation software", es: "Software de traducción moderna", de: "Moderne Übersetzungssoftware", nl: "Moderne vertaalsoftware" }
        ],
        correct: 0,
        explanation: {
          en: "Philological reconstruction involves analyzing parallel texts, understanding formulaic patterns, applying knowledge of Egyptian grammar and religious/administrative conventions to systematically restore damaged passages.",
          es: "La reconstrucción filológica involucra analizar textos paralelos, entender patrones formulaicos, aplicar conocimiento de gramática egipcia y convenciones religiosas/administrativas para restaurar sistemáticamente pasajes dañados.",
          de: "Philologische Rekonstruktion beinhaltet die Analyse von Paralleltexten, das Verstehen formelhafter Muster und die Anwendung von Kenntnissen der ägyptischen Grammatik und religiösen/administrativen Konventionen zur systematischen Wiederherstellung beschädigter Passagen.",
          nl: "Filologische reconstructie houdt in het analyseren van parallelle teksten, begrijpen van formele patronen, toepassen van kennis van Egyptische grammatica en religieuze/administratieve conventies om systematisch beschadigde passages te herstellen."
        }
      },
      {
        question: {
          en: "What is the significance of 'group writing' in hieroglyphic texts?",
          es: "¿Cuál es la importancia de la 'escritura grupal' en textos jeroglíficos?",
          de: "Was ist die Bedeutung der 'Gruppenschreibung' in hieroglyphischen Texten?",
          nl: "Wat is de betekenis van 'groepschrijven' in hiëroglifische teksten?"
        },
        options: [
          { en: "Signs arranged for aesthetic balance rather than reading order", es: "Signos organizados para equilibrio estético en lugar de orden de lectura", de: "Zeichen für ästhetisches Gleichgewicht statt Lesereihenfolge angeordnet", nl: "Tekens gerangschikt voor esthetisch evenwicht in plaats van leesvolgorde" },
          { en: "Multiple scribes working together", es: "Múltiples escribas trabajando juntos", de: "Mehrere Schreiber arbeiten zusammen", nl: "Meerdere schrijvers die samenwerken" },
          { en: "Collective nouns only", es: "Solo sustantivos colectivos", de: "Nur Kollektivnomen", nl: "Alleen collectieve zelfstandige naamwoorden" },
          { en: "Religious group ceremonies", es: "Ceremonias grupales religiosas", de: "Religiöse Gruppeszeremonien", nl: "Religieuze groepsceremonies" }
        ],
        correct: 0,
        explanation: {
          en: "Group writing involves arranging hieroglyphic signs for aesthetic balance and visual harmony rather than strict reading order, requiring advanced understanding of both linguistic and artistic principles.",
          es: "La escritura grupal involucra organizar signos jeroglíficos para equilibrio estético y armonía visual en lugar de orden de lectura estricto, requiriendo comprensión avanzada de principios tanto lingüísticos como artísticos.",
          de: "Gruppenschreibung beinhaltet die Anordnung hieroglyphischer Zeichen für ästhetisches Gleichgewicht und visuelle Harmonie statt strenger Lesereihenfolge und erfordert fortgeschrittenes Verständnis sowohl linguistischer als auch künstlerischer Prinzipien.",
          nl: "Groepschrijven houdt in het rangschikken van hiëroglifische tekens voor esthetisch evenwicht en visuele harmonie in plaats van strikte leesvolgorde, waarbij geavanceerd begrip van zowel linguïstische als artistieke principes vereist is."
        }
      },
      {
        question: {
          en: "What advanced phonological knowledge is crucial for understanding Middle Egyptian?",
          es: "¿Qué conocimiento fonológico avanzado es crucial para entender el egipcio medio?",
          de: "Welches fortgeschrittene phonologische Wissen ist entscheidend für das Verständnis des Mittelägyptischen?",
          nl: "Welke geavanceerde fonologische kennis is cruciaal voor het begrijpen van Middeneeuwse Egyptisch?"
        },
        options: [
          { en: "Consonantal root patterns and vowel reconstruction", es: "Patrones de raíces consonánticas y reconstrucción vocal", de: "Konsonantische Wurzelmuster und Vokalrekonstruktion", nl: "Consonantale wortelpatronen en klinkerreconstructie" },
          { en: "Modern Arabic pronunciation", es: "Pronunciación árabe moderna", de: "Moderne arabische Aussprache", nl: "Moderne Arabische uitspraak" },
          { en: "Greek phonetic values only", es: "Solo valores fonéticos griegos", de: "Nur griechische Lautwerte", nl: "Alleen Griekse fonetische waarden" },
          { en: "English sound correspondences", es: "Correspondencias de sonidos ingleses", de: "Englische Lautentsprechungen", nl: "Engelse klankovereenkomsten" }
        ],
        correct: 0,
        explanation: {
          en: "Understanding Middle Egyptian requires knowledge of Semitic consonantal root patterns and reconstruction of vowel systems using comparative evidence from Coptic, Semitic languages, and ancient transcriptions.",
          es: "Entender el egipcio medio requiere conocimiento de patrones de raíces consonánticas semíticas y reconstrucción de sistemas vocales usando evidencia comparativa del copto, idiomas semíticos y transcripciones antiguas.",
          de: "Das Verständnis des Mittelägyptischen erfordert Kenntnisse semitischer konsonantischer Wurzelmuster und Rekonstruktion von Vokalsystemen unter Verwendung vergleichender Evidenz aus dem Koptischen, semitischen Sprachen und antiken Transkriptionen.",
          nl: "Het begrijpen van Middeneeuwse Egyptisch vereist kennis van Semitische consonantale wortelpatronen en reconstructie van klinker systemen met vergelijkende bewijs uit Koptisch, Semitische talen en oude transcripties."
        }
      },
      {
        question: {
          en: "What is the most challenging aspect of translating Egyptian literary texts?",
          es: "¿Cuál es el aspecto más desafiante de traducir textos literarios egipcios?",
          de: "Was ist der herausforderndste Aspekt bei der Übersetzung ägyptischer literarischer Texte?",
          nl: "Wat is het meest uitdagende aspect van het vertalen van Egyptische literaire teksten?"
        },
        options: [
          { en: "Capturing cultural nuances, wordplay, and poetic structures", es: "Capturar matices culturales, juegos de palabras y estructuras poéticas", de: "Kulturelle Nuancen, Wortspiele und poetische Strukturen erfassen", nl: "Culturele nuances, woordspelingen en poëtische structuren vangen" },
          { en: "Identifying all the hieroglyphic signs", es: "Identificar todos los signos jeroglíficos", de: "Alle hieroglyphischen Zeichen identifizieren", nl: "Alle hiëroglifische tekens identificeren" },
          { en: "Finding parallel texts", es: "Encontrar textos paralelos", de: "Paralleltexte finden", nl: "Parallelle teksten vinden" },
          { en: "Dating the manuscripts", es: "Datar los manuscritos", de: "Die Manuskripte datieren", nl: "De manuscripten dateren" }
        ],
        correct: 0,
        explanation: {
          en: "Literary translation requires not just linguistic accuracy but also capturing cultural nuances, wordplay, metaphors, poetic meters, and literary conventions that may not have direct equivalents in modern languages.",
          es: "La traducción literaria requiere no solo precisión lingüística sino también capturar matices culturales, juegos de palabras, metáforas, metros poéticos y convenciones literarias que pueden no tener equivalentes directos en idiomas modernos.",
          de: "Literarische Übersetzung erfordert nicht nur sprachliche Genauigkeit, sondern auch das Erfassen kultureller Nuancen, Wortspiele, Metaphern, poetischer Meter und literarischer Konventionen, die möglicherweise keine direkten Entsprechungen in modernen Sprachen haben.",
          nl: "Literaire vertaling vereist niet alleen linguïstische nauwkeurigheid maar ook het vangen van culturele nuances, woordspelingen, metaforen, poëtische meters en literaire conventies die mogelijk geen directe equivalenten hebben in moderne talen."
        }
      },
      {
        question: {
          en: "What distinguishes a master-level understanding of Egyptian verbal system?",
          es: "¿Qué distingue una comprensión de nivel maestro del sistema verbal egipcio?",
          de: "Was unterscheidet ein Meister-Level-Verständnis des ägyptischen Verbalsystems?",
          nl: "Wat onderscheidt een meester-niveau begrip van het Egyptische werkwoordssysteem?"
        },
        options: [
          { en: "Recognition of aspectual distinctions, modal nuances, and diachronic changes", es: "Reconocimiento de distinciones aspectuales, matices modales y cambios diacrónicos", de: "Erkennung aspektueller Unterscheidungen, modaler Nuancen und diachroner Veränderungen", nl: "Herkenning van aspectuele onderscheidingen, modale nuances en diachronische veranderingen" },
          { en: "Memorizing basic verb forms", es: "Memorizar formas verbales básicas", de: "Grundlegende Verbformen auswendig lernen", nl: "Basis werkwoordsvormen memoriseren" },
          { en: "Knowing only present tense", es: "Conocer solo tiempo presente", de: "Nur Präsens kennen", nl: "Alleen tegenwoordige tijd kennen" },
          { en: "Using only suffix conjugation", es: "Usar solo conjugación de sufijo", de: "Nur Suffixkonjugation verwenden", nl: "Alleen suffix vervoeging gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Master-level understanding involves recognizing aspectual distinctions (perfective/imperfective), modal nuances (indicative/subjunctive), historical changes in verbal morphology, and subtle semantic differences between constructions.",
          es: "La comprensión de nivel maestro involucra reconocer distinciones aspectuales (perfectivo/imperfectivo), matices modales (indicativo/subjuntivo), cambios históricos en morfología verbal y diferencias semánticas sutiles entre construcciones.",
          de: "Meister-Level-Verständnis beinhaltet die Erkennung aspektueller Unterscheidungen (perfektiv/imperfektiv), modaler Nuancen (indikativ/subjunktiv), historischer Veränderungen in der Verbalmorphologie und subtiler semantischer Unterschiede zwischen Konstruktionen.",
          nl: "Meester-niveau begrip houdt in het herkennen van aspectuele onderscheidingen (perfectief/imperfectief), modale nuances (indicatief/subjunctief), historische veranderingen in werkwoordmorfologie en subtiele semantische verschillen tussen constructies."
        }
      },
      {
        question: {
          en: "What is the most sophisticated approach to analyzing Egyptian religious texts?",
          es: "¿Cuál es el enfoque más sofisticado para analizar textos religiosos egipcios?",
          de: "Was ist der ausgeklügeltste Ansatz zur Analyse ägyptischer religiöser Texte?",
          nl: "Wat is de meest geavanceerde benadering voor het analyseren van Egyptische religieuze teksten?"
        },
        options: [
          { en: "Interdisciplinary analysis combining linguistics, theology, and anthropology", es: "Análisis interdisciplinario combinando lingüística, teología y antropología", de: "Interdisziplinäre Analyse, die Linguistik, Theologie und Anthropologie kombiniert", nl: "Interdisciplinaire analyse die taalkunde, theologie en antropologie combineert" },
          { en: "Pure grammatical analysis only", es: "Solo análisis gramatical puro", de: "Nur reine grammatische Analyse", nl: "Alleen pure grammaticale analyse" },
          { en: "Modern religious interpretations", es: "Interpretaciones religiosas modernas", de: "Moderne religiöse Interpretationen", nl: "Moderne religieuze interpretaties" },
          { en: "Literal word-for-word translation", es: "Traducción literal palabra por palabra", de: "Wörtliche Wort-für-Wort-Übersetzung", nl: "Letterlijke woord-voor-woord vertaling" }
        ],
        correct: 0,
        explanation: {
          en: "Sophisticated analysis requires interdisciplinary approaches combining linguistic analysis, understanding of Egyptian theological concepts, anthropological insights into ritual practices, and comparative religious studies.",
          es: "El análisis sofisticado requiere enfoques interdisciplinarios combinando análisis lingüístico, comprensión de conceptos teológicos egipcios, perspectivas antropológicas sobre prácticas rituales y estudios religiosos comparativos.",
          de: "Ausgeklügelte Analyse erfordert interdisziplinäre Ansätze, die linguistische Analyse, Verständnis ägyptischer theologischer Konzepte, anthropologische Einsichten in rituelle Praktiken und vergleichende Religionsstudien kombinieren.",
          nl: "Geavanceerde analyse vereist interdisciplinaire benaderingen die linguïstische analyse, begrip van Egyptische theologische concepten, antropologische inzichten in rituele praktijken en vergelijkende religiewetenschappen combineren."
        }
      },
      {
        question: {
          en: "What characterizes expert-level paleographic analysis of hieroglyphic texts?",
          es: "¿Qué caracteriza el análisis paleográfico de nivel experto de textos jeroglíficos?",
          de: "Was charakterisiert die paläographische Analyse hieroglyphischer Texte auf Expertenebene?",
          nl: "Wat kenmerkt expert-niveau paleografische analyse van hiëroglifische teksten?"
        },
        options: [
          { en: "Dating texts through sign evolution, scribal hands, and regional variations", es: "Datar textos a través de evolución de signos, manos escribas y variaciones regionales", de: "Texte durch Zeichenentwicklung, Schreiberhände und regionale Variationen datieren", nl: "Teksten dateren door tekenevoluitie, schrijvershanden en regionale variaties" },
          { en: "Counting the number of signs", es: "Contar el número de signos", de: "Die Anzahl der Zeichen zählen", nl: "Het aantal tekens tellen" },
          { en: "Measuring text length only", es: "Solo medir longitud del texto", de: "Nur Textlänge messen", nl: "Alleen tekstlengte meten" },
          { en: "Identifying obvious damage", es: "Identificar daño obvio", de: "Offensichtliche Schäden identifizieren", nl: "Duidelijke schade identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Expert paleographic analysis involves dating texts through detailed study of sign evolution, identifying individual scribal hands, recognizing regional variations, understanding workshop traditions, and analyzing material culture contexts.",
          es: "El análisis paleográfico experto involucra datar textos a través del estudio detallado de la evolución de signos, identificar manos escribas individuales, reconocer variaciones regionales, entender tradiciones de talleres y analizar contextos de cultura material.",
          de: "Experten-paläographische Analyse beinhaltet die Datierung von Texten durch detaillierte Untersuchung der Zeichenentwicklung, Identifizierung einzelner Schreiberhände, Erkennung regionaler Variationen, Verständnis von Werkstatttraditionen und Analyse materieller Kulturkontexte.",
          nl: "Expert paleografische analyse houdt in het dateren van teksten door gedetailleerde studie van tekenevoluitie, identificatie van individuele schrijvershanden, herkenning van regionale variaties, begrip van werkplaats tradities en analyse van materiële cultuur contexten."
        }
      },
      {
        question: {
          en: "What is the highest level of hieroglyphic textual criticism?",
          es: "¿Cuál es el nivel más alto de crítica textual jeroglífica?",
          de: "Was ist die höchste Ebene hieroglyphischer Textkritik?",
          nl: "Wat is het hoogste niveau van hiëroglifische tekstkritiek?"
        },
        options: [
          { en: "Establishing critical editions through manuscript comparison and emendation", es: "Establecer ediciones críticas a través de comparación de manuscritos y enmienda", de: "Kritische Ausgaben durch Manuskriptvergleich und Emendation etablieren", nl: "Kritische edities vaststellen door manuscriptvergelijking en emendatie" },
          { en: "Reading individual words correctly", es: "Leer palabras individuales correctamente", de: "Einzelne Wörter korrekt lesen", nl: "Individuele woorden correct lezen" },
          { en: "Copying hieroglyphic signs", es: "Copiar signos jeroglíficos", de: "Hieroglyphische Zeichen kopieren", nl: "Hiëroglifische tekens kopiëren" },
          { en: "Identifying subject matters", es: "Identificar materias temáticas", de: "Themenbereiche identifizieren", nl: "Onderwerpen identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "The highest level involves establishing critical editions by comparing multiple manuscript versions, identifying scribal errors, proposing emendations, reconstructing archetype texts, and providing scholarly apparatus with variant readings.",
          es: "El nivel más alto involucra establecer ediciones críticas comparando múltiples versiones de manuscritos, identificando errores de escribas, proponiendo enmiendas, reconstruyendo textos arquetípicos y proporcionando aparato académico con lecturas variantes.",
          de: "Die höchste Ebene beinhaltet die Etablierung kritischer Ausgaben durch Vergleich mehrerer Manuskriptversionen, Identifizierung von Schreiberfehlern, Vorschlag von Emendationen, Rekonstruktion archetypischer Texte und Bereitstellung wissenschaftlicher Apparate mit Variantenlesungen.",
          nl: "Het hoogste niveau houdt in het vaststellen van kritische edities door vergelijking van meerdere manuscriptversies, identificatie van schrijversfouten, voorstellen van emendaties, reconstructie van archetype teksten en het bieden van wetenschappelijke apparaat met variant lezingen."
        }
      },
      {
        question: {
          en: "What distinguishes mastery of Egyptian lexicography?",
          es: "¿Qué distingue la maestría de la lexicografía egipcia?",
          de: "Was unterscheidet die Beherrschung der ägyptischen Lexikographie?",
          nl: "Wat onderscheidt meesterschap in Egyptische lexicografie?"
        },
        options: [
          { en: "Understanding semantic fields, etymology, and diachronic lexical changes", es: "Entender campos semánticos, etimología y cambios léxicos diacrónicos", de: "Verständnis semantischer Felder, Etymologie und diachroner lexikalischer Veränderungen", nl: "Begrip van semantische velden, etymologie en diachronische lexicale veranderingen" },
          { en: "Knowing basic word meanings", es: "Conocer significados básicos de palabras", de: "Grundlegende Wortbedeutungen kennen", nl: "Basis woordbetekenissen kennen" },
          { en: "Using only modern dictionaries", es: "Usar solo diccionarios modernos", de: "Nur moderne Wörterbücher verwenden", nl: "Alleen moderne woordenboeken gebruiken" },
          { en: "Memorizing word lists", es: "Memorizar listas de palabras", de: "Wortlisten auswendig lernen", nl: "Woordlijsten memoriseren" }
        ],
        correct: 0,
        explanation: {
          en: "Lexicographic mastery involves understanding semantic fields, tracing etymological developments, recognizing metaphorical extensions, analyzing borrowings, and tracking how word meanings change across different periods and contexts.",
          es: "La maestría lexicográfica involucra entender campos semánticos, rastrear desarrollos etimológicos, reconocer extensiones metafóricas, analizar préstamos y seguir cómo los significados de palabras cambian a través de diferentes períodos y contextos.",
          de: "Lexikographische Meisterschaft beinhaltet das Verständnis semantischer Felder, das Verfolgen etymologischer Entwicklungen, das Erkennen metaphorischer Erweiterungen, die Analyse von Entlehnungen und das Verfolgen, wie sich Wortbedeutungen über verschiedene Perioden und Kontexte ändern.",
          nl: "Lexicografische meesterschap houdt in het begrip van semantische velden, het traceren van etymologische ontwikkelingen, het herkennen van metaforische uitbreidingen, het analyseren van leenwoorden en het volgen van hoe woordbetekenissen veranderen over verschillende perioden en contexten."
        }
      },
      {
        question: {
          en: "What represents the pinnacle of hieroglyphic interpretive skill?",
          es: "¿Qué representa la cúspide de la habilidad interpretativa jeroglífica?",
          de: "Was stellt den Gipfel hieroglyphischer Interpretationsfähigkeit dar?",
          nl: "Wat vertegenwoordigt de top van hiëroglifische interpretatieve vaardigheid?"
        },
        options: [
          { en: "Synthesizing linguistic, cultural, and historical knowledge for nuanced interpretation", es: "Sintetizar conocimiento lingüístico, cultural e histórico para interpretación matizada", de: "Linguistisches, kulturelles und historisches Wissen für nuancierte Interpretation synthetisieren", nl: "Linguïstische, culturele en historische kennis synthetiseren voor genuanceerde interpretatie" },
          { en: "Reading texts aloud", es: "Leer textos en voz alta", de: "Texte laut vorlesen", nl: "Teksten hardop lezen" },
          { en: "Translating word-for-word", es: "Traducir palabra por palabra", de: "Wort-für-Wort übersetzen", nl: "Woord-voor-woord vertalen" },
          { en: "Identifying all hieroglyphic signs", es: "Identificar todos los signos jeroglíficos", de: "Alle hieroglyphischen Zeichen identifizieren", nl: "Alle hiëroglifische tekens identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "The pinnacle of interpretive skill involves synthesizing deep linguistic knowledge with cultural understanding, historical context, religious concepts, and literary conventions to produce nuanced, contextually appropriate interpretations that capture both explicit and implicit meanings.",
          es: "La cúspide de la habilidad interpretativa involucra sintetizar conocimiento lingüístico profundo con comprensión cultural, contexto histórico, conceptos religiosos y convenciones literarias para producir interpretaciones matizadas y contextualmente apropiadas que capturen significados tanto explícitos como implícitos.",
          de: "Der Gipfel der Interpretationsfähigkeit beinhaltet die Synthese tiefgreifenden linguistischen Wissens mit kulturellem Verständnis, historischem Kontext, religiösen Konzepten und literarischen Konventionen, um nuancierte, kontextuell angemessene Interpretationen zu produzieren, die sowohl explizite als auch implizite Bedeutungen erfassen.",
          nl: "De top van interpretatieve vaardigheid houdt in het synthetiseren van diepe linguïstische kennis met cultureel begrip, historische context, religieuze concepten en literaire conventies om genuanceerde, contextueel gepaste interpretaties te produceren die zowel expliciete als impliciete betekenissen vangen."
        }
      },
      {
        question: {
          en: "What advanced knowledge is required for editing unpublished hieroglyphic texts?",
          es: "¿Qué conocimiento avanzado se requiere para editar textos jeroglíficos inéditos?",
          de: "Welches fortgeschrittene Wissen ist für die Bearbeitung unveröffentlichter hieroglyphischer Texte erforderlich?",
          nl: "Welke geavanceerde kennis is vereist voor het bewerken van ongepubliceerde hiëroglifische teksten?"
        },
        options: [
          { en: "Epigraphic documentation, collation methods, and editorial principles", es: "Documentación epigráfica, métodos de colación y principios editoriales", de: "Epigraphische Dokumentation, Kollationsmethoden und editorische Prinzipien", nl: "Epigrafische documentatie, collatieemethoden en editoriale principes" },
          { en: "Basic photography skills", es: "Habilidades básicas de fotografía", de: "Grundlegende Fotografiekenntnisse", nl: "Basis fotografievaardigheden" },
          { en: "Computer typesetting only", es: "Solo composición tipográfica computacional", de: "Nur Computer-Typesetting", nl: "Alleen computertypezetting" },
          { en: "Popular writing ability", es: "Habilidad de escritura popular", de: "Populäre Schreibfähigkeit", nl: "Populaire schrijfvaardigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Editing unpublished texts requires expertise in epigraphic documentation, collation methods for comparing readings, understanding editorial principles, knowledge of publication standards, and ability to create critical apparatus with scholarly annotations.",
          es: "Editar textos inéditos requiere experiencia en documentación epigráfica, métodos de colación para comparar lecturas, entender principios editoriales, conocimiento de estándares de publicación y habilidad para crear aparato crítico con anotaciones académicas.",
          de: "Die Bearbeitung unveröffentlichter Texte erfordert Expertise in epigraphischer Dokumentation, Kollationsmethoden zum Vergleich von Lesungen, Verständnis editorischer Prinzipien, Kenntnisse von Publikationsstandards und die Fähigkeit, kritische Apparate mit wissenschaftlichen Anmerkungen zu erstellen.",
          nl: "Het bewerken van ongepubliceerde teksten vereist expertise in epigrafische documentatie, collatiemethoden voor het vergelijken van lezingen, begrip van editoriale principes, kennis van publicatiestandaarden en vermogen om kritische apparaat te creëren met wetenschappelijke annotaties."
        }
      },
      {
        question: {
          en: "What characterizes the most advanced level of comparative Egyptian linguistics?",
          es: "¿Qué caracteriza el nivel más avanzado de lingüística egipcia comparativa?",
          de: "Was charakterisiert die fortgeschrittenste Ebene der vergleichenden ägyptischen Linguistik?",
          nl: "Wat kenmerkt het meest geavanceerde niveau van vergelijkende Egyptische taalkunde?"
        },
        options: [
          { en: "Reconstructing Proto-Egyptian and understanding Afroasiatic connections", es: "Reconstruir proto-egipcio y entender conexiones afroasiáticas", de: "Proto-Ägyptisch rekonstruieren und afroasiatische Verbindungen verstehen", nl: "Proto-Egyptisch reconstrueren en Afroaziatische verbindingen begrijpen" },
          { en: "Learning only Middle Egyptian", es: "Aprender solo egipcio medio", de: "Nur Mittelägyptisch lernen", nl: "Alleen Middeneeuwse Egyptisch leren" },
          { en: "Comparing with Latin only", es: "Comparar solo con latín", de: "Nur mit Latein vergleichen", nl: "Alleen vergelijken met Latijn" },
          { en: "Studying modern languages", es: "Estudiar idiomas modernos", de: "Moderne Sprachen studieren", nl: "Moderne talen bestuderen" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced comparative linguistics involves reconstructing Proto-Egyptian phonology and morphology, understanding Egyptian's place within Afroasiatic, tracing historical developments, and contributing to broader questions of language family relationships.",
          es: "La lingüística comparativa avanzada involucra reconstruir fonología y morfología proto-egipcias, entender el lugar del egipcio dentro del afroasiático, rastrear desarrollos históricos y contribuir a preguntas más amplias de relaciones familiares lingüísticas.",
          de: "Fortgeschrittene vergleichende Linguistik beinhaltet die Rekonstruktion proto-ägyptischer Phonologie und Morphologie, das Verständnis der Position des Ägyptischen innerhalb des Afroasiatischen, das Verfolgen historischer Entwicklungen und Beiträge zu breiteren Fragen von Sprachfamilien-Beziehungen.",
          nl: "Geavanceerde vergelijkende taalkunde houdt in het reconstrueren van Proto-Egyptische fonologie en morfologie, begrip van Egyptisch's plaats binnen Afroaziatisch, het traceren van historische ontwikkelingen en bijdragen aan bredere vragen van taalfamilie relaties."
        }
      },
      {
        question: {
          en: "What defines expertise in Egyptian codicology and manuscript studies?",
          es: "¿Qué define la experiencia en codicología egipcia y estudios de manuscritos?",
          de: "Was definiert Expertise in ägyptischer Kodikologie und Manuskriptstudien?",
          nl: "Wat definieert expertise in Egyptische codicologie en manuscriptstudies?"
        },
        options: [
          { en: "Understanding papyrus production, scribal practices, and manuscript transmission", es: "Entender producción de papiro, prácticas escribas y transmisión de manuscritos", de: "Verständnis von Papyrusproduktion, Schreibpraktiken und Manuskriptübertragung", nl: "Begrip van papyrusproductie, schrijverspraktijken en manuscript transmissie" },
          { en: "Only reading finished texts", es: "Solo leer textos terminados", de: "Nur fertige Texte lesen", nl: "Alleen voltooide teksten lezen" },
          { en: "Modern printing techniques", es: "Técnicas de impresión modernas", de: "Moderne Drucktechniken", nl: "Moderne druktechnieken" },
          { en: "Digital formatting only", es: "Solo formato digital", de: "Nur digitale Formatierung", nl: "Alleen digitale opmaak" }
        ],
        correct: 0,
        explanation: {
          en: "Codicological expertise involves understanding papyrus and leather production, scribal training and practices, manuscript layout conventions, correction methods, library organization, and patterns of textual transmission across time.",
          es: "La experiencia codicológica involucra entender producción de papiro y cuero, entrenamiento y prácticas escribas, convenciones de diseño de manuscritos, métodos de corrección, organización de bibliotecas y patrones de transmisión textual a través del tiempo.",
          de: "Kodikologische Expertise beinhaltet das Verständnis von Papyrus- und Lederproduktion, Schreiberausbildung und -praktiken, Manuskript-Layout-Konventionen, Korrekturmethoden, Bibliotheksorganisation und Mustern der Textübertragung über die Zeit.",
          nl: "Codicologische expertise houdt in het begrip van papyrus en leer productie, schrijver training en praktijken, manuscript layout conventies, correctie methoden, bibliotheek organisatie en patronen van tekstuele transmissie door de tijd."
        }
      },
      {
        question: {
          en: "What represents the ultimate goal of hieroglyphic scholarship?",
          es: "¿Qué representa el objetivo último de la erudición jeroglífica?",
          de: "Was stellt das ultimative Ziel hieroglyphischer Gelehrsamkeit dar?",
          nl: "Wat vertegenwoordigt het ultieme doel van hiëroglifische wetenschap?"
        },
        options: [
          { en: "Contributing to human understanding of ancient Egyptian civilization", es: "Contribuir al entendimiento humano de la civilización egipcia antigua", de: "Zum menschlichen Verständnis der altägyptischen Zivilisation beitragen", nl: "Bijdragen aan menselijk begrip van de oude Egyptische beschaving" },
          { en: "Collecting hieroglyphic signs", es: "Coleccionar signos jeroglíficos", de: "Hieroglyphische Zeichen sammeln", nl: "Hiëroglifische tekens verzamelen" },
          { en: "Teaching basic reading skills", es: "Enseñar habilidades básicas de lectura", de: "Grundlegende Lesefähigkeiten unterrichten", nl: "Basis leesvaardigheden onderwijzen" },
          { en: "Creating modern hieroglyphic art", es: "Crear arte jeroglífico moderno", de: "Moderne hieroglyphische Kunst schaffen", nl: "Moderne hiëroglifische kunst creëren" }
        ],
        correct: 0,
        explanation: {
          en: "The ultimate goal is contributing to comprehensive understanding of ancient Egyptian civilization through rigorous scholarship that illuminates their language, thought, culture, religion, and historical development for broader human knowledge.",
          es: "El objetivo último es contribuir a la comprensión integral de la civilización egipcia antigua a través de erudición rigurosa que ilumine su idioma, pensamiento, cultura, religión y desarrollo histórico para el conocimiento humano más amplio.",
          de: "Das ultimative Ziel ist der Beitrag zum umfassenden Verständnis der altägyptischen Zivilisation durch rigorose Gelehrsamkeit, die ihre Sprache, ihr Denken, ihre Kultur, Religion und historische Entwicklung für das breitere menschliche Wissen erhellt.",
          nl: "Het ultieme doel is bijdragen aan uitgebreid begrip van de oude Egyptische beschaving door rigoureuze wetenschap die hun taal, denken, cultuur, religie en historische ontwikkeling verlicht voor breder menselijk begrip."
        }
      },
      {
        question: {
          en: "What distinguishes a true Egyptologist from an amateur hieroglyph reader?",
          es: "¿Qué distingue a un verdadero egiptólogo de un lector amateur de jeroglíficos?",
          de: "Was unterscheidet einen wahren Ägyptologen von einem Amateur-Hieroglyphen-Leser?",
          nl: "Wat onderscheidt een echte Egyptoloog van een amateur hiëroglieflezer?"
        },
        options: [
          { en: "Systematic methodology, critical analysis, and scholarly contribution", es: "Metodología sistemática, análisis crítico y contribución académica", de: "Systematische Methodik, kritische Analyse und wissenschaftlicher Beitrag", nl: "Systematische methodologie, kritische analyse en wetenschappelijke bijdrage" },
          { en: "Reading speed only", es: "Solo velocidad de lectura", de: "Nur Lesegeschwindigkeit", nl: "Alleen leessnelheid" },
          { en: "Number of texts read", es: "Número de textos leídos", de: "Anzahl gelesener Texte", nl: "Aantal gelezen teksten" },
          { en: "Popular publications", es: "Publicaciones populares", de: "Populäre Veröffentlichungen", nl: "Populaire publicaties" }
        ],
        correct: 0,
        explanation: {
          en: "True Egyptologists employ systematic methodology, rigorous critical analysis, peer review, interdisciplinary knowledge, and make original scholarly contributions that advance the field through careful research and publication.",
          es: "Los verdaderos egiptólogos emplean metodología sistemática, análisis crítico riguroso, revisión por pares, conocimiento interdisciplinario y hacen contribuciones académicas originales que avanzan el campo a través de investigación cuidadosa y publicación.",
          de: "Wahre Ägyptologen wenden systematische Methodik, rigorose kritische Analyse, Peer-Review, interdisziplinäres Wissen an und leisten originelle wissenschaftliche Beiträge, die das Feld durch sorgfältige Forschung und Publikation voranbringen.",
          nl: "Echte Egyptologen gebruiken systematische methodologie, rigoureuze kritische analyse, peer review, interdisciplinaire kennis en leveren originele wetenschappelijke bijdragen die het veld vooruitbrengen door zorgvuldig onderzoek en publicatie."
        }
      },
      {
        question: {
          en: "What is the most important principle for responsible hieroglyphic interpretation?",
          es: "¿Cuál es el principio más importante para la interpretación responsable de jeroglíficos?",
          de: "Was ist das wichtigste Prinzip für verantwortliche hieroglyphische Interpretation?",
          nl: "Wat is het belangrijkste principe voor verantwoordelijke hiëroglifische interpretatie?"
        },
        options: [
          { en: "Evidence-based methodology with acknowledgment of uncertainties", es: "Metodología basada en evidencia con reconocimiento de incertidumbres", de: "Evidenzbasierte Methodik mit Anerkennung von Unsicherheiten", nl: "Bewijs-gebaseerde methodologie met erkenning van onzekerheden" },
          { en: "Intuitive guessing", es: "Adivinanza intuitiva", de: "Intuitives Raten", nl: "Intuïtief raden" },
          { en: "Popular appeal", es: "Atractivo popular", de: "Populäre Anziehungskraft", nl: "Populaire aantrekkingskracht" },
          { en: "Dramatic interpretations", es: "Interpretaciones dramáticas", de: "Dramatische Interpretationen", nl: "Dramatische interpretaties" }
        ],
        correct: 0,
        explanation: {
          en: "Responsible interpretation requires evidence-based methodology, transparent reasoning, acknowledgment of uncertainties and alternative readings, peer review, and honest representation of the limitations and possibilities of our knowledge.",
          es: "La interpretación responsable requiere metodología basada en evidencia, razonamiento transparente, reconocimiento de incertidumbres y lecturas alternativas, revisión por pares y representación honesta de las limitaciones y posibilidades de nuestro conocimiento.",
          de: "Verantwortliche Interpretation erfordert evidenzbasierte Methodik, transparente Begründung, Anerkennung von Unsicherheiten und alternativen Lesungen, Peer-Review und ehrliche Darstellung der Grenzen und Möglichkeiten unseres Wissens.",
          nl: "Verantwoordelijke interpretatie vereist bewijs-gebaseerde methodologie, transparante redenering, erkenning van onzekerheden en alternatieve lezingen, peer review en eerlijke representatie van de beperkingen en mogelijkheden van onze kennis."
        }
      },
      {
        question: {
          en: "What is the significance of the 'Ramesseum Dramatic Papyrus'?",
          es: "¿Cuál es la importancia del 'Papiro Dramático del Ramesseum'?",
          de: "Welche Bedeutung hat der 'Ramesseum-Dramatische Papyrus'?",
          nl: "Wat is de betekenis van de 'Ramesseum Dramatische Papyrus'?"
        },
        options: [
          { en: "It's a royal decree", es: "Es un decreto real", de: "Es ist ein königlicher Erlass", nl: "Het is een koninklijk decreet" },
          { en: "It contains stage directions for religious rituals", es: "Contiene direcciones escénicas para rituales religiosos", de: "Es enthält Regieführungsanweisungen für religiöse Rituale", nl: "Het bevat toneeldirecties voor religieuze rituelen" },
          { en: "It's a shopping list", es: "Es una lista de compras", de: "Es ist eine Einkaufsliste", nl: "Het is een boodschappenlijst" },
          { en: "It's a mathematical treatise", es: "Es un tratado matemático", de: "Es ist eine mathematische Abhandlung", nl: "Het is een wiskundig verhandeling" }
        ],
        correct: 1,
        explanation: {
          en: "The Ramesseum Dramatic Papyrus (Middle Kingdom, c. 1980 BCE) is one of the earliest examples of dramatic literature, containing stage directions and dialogue for the ritual of the coronation ceremony. It provides unique insights into Egyptian theatrical and religious practices.",
          es: "El Papiro Dramático del Ramesseum (Reino Medio, c. 1980 a.C.) es uno de los primeros ejemplos de literatura dramática, que contiene direcciones escénicas y diálogo para el ritual de la ceremonia de coronación. Proporciona perspectivas únicas sobre las prácticas teatrales y religiosas egipcias.",
          de: "Der Ramesseum-Dramatische Papyrus (Mittleres Reich, ca. 1980 v. Chr.) ist eines der frühesten Beispiele dramatischer Literatur und enthält Regieführungsanweisungen und Dialog für das Ritual der Krönungszeremonie. Er bietet einzigartige Einblicke in ägyptische theatralische und religiöse Praktiken.",
          nl: "De Ramesseum Dramatische Papyrus (Middenrijk, ca. 1980 v.Chr.) is een van de vroegste voorbeelden van dramatische literatuur, met toneeldirecties en dialoog voor het ritueel van de kroningsceremonie. Het biedt unieke inzichten in Egyptische theatrale en religieuze praktijken."
        }
      },
      {
        question: {
          en: "What innovation did Jean-François Champollion make in 1822?",
          es: "¿Qué innovación hizo Jean-François Champollion en 1822?",
          de: "Welche Innovation machte Jean-François Champollion im Jahr 1822?",
          nl: "Welke innovatie maakte Jean-François Champollion in 1822?"
        },
        options: [
          { en: "He discovered the pyramids", es: "Descubrió las pirámides", de: "Er entdeckte die Pyramiden", nl: "Hij ontdekte de piramides" },
          { en: "He deciphered hieroglyphic writing", es: "Descifró la escritura jeroglífica", de: "Er entzifferte die Hieroglyphenschrift", nl: "Hij ontcijferde hiëroglifisch schrift" },
          { en: "He found Tutankhamun's tomb", es: "Encontró la tumba de Tutankamón", de: "Er fand Tutanchamuns Grab", nl: "Hij vond het graf van Toetanchamon" },
          { en: "He translated the Bible into Egyptian", es: "Tradujo la Biblia al egipcio", de: "Er übersetzte die Bibel ins Ägyptische", nl: "Hij vertaalde de Bijbel naar het Egyptisch" }
        ],
        correct: 1,
        explanation: {
          en: "Jean-François Champollion successfully deciphered hieroglyphic writing in 1822 using the Rosetta Stone. He proved that hieroglyphs were both phonetic and ideographic, revolutionizing Egyptology and unlocking thousands of years of Egyptian history and culture.",
          es: "Jean-François Champollion descifró con éxito la escritura jeroglífica en 1822 usando la Piedra Rosetta. Demostró que los jeroglíficos eran tanto fonéticos como ideográficos, revolucionando la egiptología y desbloqueando miles de años de historia y cultura egipcia.",
          de: "Jean-François Champollion entzifferte 1822 erfolgreich die Hieroglyphenschrift unter Verwendung des Steins von Rosette. Er bewies, dass Hieroglyphen sowohl phonetisch als auch ideographisch waren, revolutionierte die Ägyptologie und erschloss Tausende von Jahren ägyptischer Geschichte und Kultur.",
          nl: "Jean-François Champollion ontcijferde met succes hiëroglifisch schrift in 1822 met behulp van de Steen van Rosetta. Hij bewees dat hiërogliefen zowel fonetisch als ideografisch waren, revolutioneerde de egyptologie en ontsluierde duizenden jaren Egyptische geschiedenis en cultuur."
        }
      },
      {
        question: {
          en: "What is 'group writing' (or 'syllabic orthography') in Late Egyptian?",
          es: "¿Qué es la 'escritura grupal' (u 'ortografía silábica') en egipcio tardío?",
          de: "Was ist 'Gruppenschrift' (oder 'syllabische Orthographie') im Spätägyptischen?",
          nl: "Wat is 'groepsschrift' (of 'syllabische orthografie') in Laat-Egyptisch?"
        },
        options: [
          { en: "Writing in groups of three", es: "Escribir en grupos de tres", de: "In Dreiergruppen schreiben", nl: "Schrijven in groepen van drie" },
          { en: "A shift to representing syllables rather than just consonants", es: "Un cambio para representar sílabas en lugar de solo consonantes", de: "Eine Verschiebung zur Darstellung von Silben statt nur Konsonanten", nl: "Een verschuiving naar het voorstellen van lettergrepen in plaats van alleen medeklinkers" },
          { en: "Collective authorship", es: "Autoría colectiva", de: "Kollektive Urheberschaft", nl: "Collectief auteurschap" },
          { en: "Using larger hieroglyphs", es: "Usar jeroglíficos más grandes", de: "Größere Hieroglyphen verwenden", nl: "Grotere hiërogliefen gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Group writing in Late Egyptian (from c. 1300 BCE) represented a shift from writing only consonants to indicating syllables, including vowels. This system used combinations of signs to approximate the spoken language more closely, reflecting changes in pronunciation and linguistic evolution.",
          es: "La escritura grupal en egipcio tardío (desde c. 1300 a.C.) representó un cambio de escribir solo consonantes a indicar sílabas, incluyendo vocales. Este sistema usaba combinaciones de signos para aproximarse más estrechamente al lenguaje hablado, reflejando cambios en la pronunciación y evolución lingüística.",
          de: "Gruppenschrift im Spätägyptischen (ab ca. 1300 v. Chr.) stellte eine Verschiebung vom Schreiben nur von Konsonanten zur Angabe von Silben, einschließlich Vokalen, dar. Dieses System verwendete Zeichenkombinationen, um sich der gesprochenen Sprache näher anzunähern und spiegelte Änderungen in Aussprache und sprachlicher Evolution wider.",
          nl: "Groepsschrift in Laat-Egyptisch (vanaf ca. 1300 v.Chr.) vertegenwoordigde een verschuiving van alleen medeklinkers schrijven naar het aangeven van lettergrepen, inclusief klinkers. Dit systeem gebruikte combinaties van tekens om dichter bij de gesproken taal te komen, wat veranderingen in uitspraak en taalkundige evolutie weerspiegelde."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }

  return level10;
})();