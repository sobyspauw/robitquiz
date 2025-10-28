// Cleopatra Quiz - Level 1: Basic Cleopatra Knowledge
(function() {
  const level1 = {
    name: {
      en: "Cleopatra Level 1",
      es: "Cleopatra Nivel 1",
      de: "Kleopatra Stufe 1",
      nl: "Cleopatra Level 1"
    },
    questions: [
      {
        question: {
          en: "Who was Cleopatra VII?",
          es: "¿Quién fue Cleopatra VII?",
          de: "Wer war Kleopatra VII?",
          nl: "Wie was Cleopatra VII?"
        },
        options: [
          { en: "The last pharaoh of Egypt", es: "La última faraona de Egipto", de: "Die letzte Pharaonin Ägyptens", nl: "De laatste farao van Egypte" },
          { en: "A Roman empress", es: "Una emperatriz romana", de: "Eine römische Kaiserin", nl: "Een Romeinse keizerin" },
          { en: "A Greek goddess", es: "Una diosa griega", de: "Eine griechische Göttin", nl: "Een Griekse godin" },
          { en: "An Egyptian priestess", es: "Una sacerdotisa egipcia", de: "Eine ägyptische Priesterin", nl: "Een Egyptische priesteres" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra VII was the last active pharaoh of Ancient Egypt, ruling from 51-30 BCE until Egypt became a Roman province.",
          es: "Cleopatra VII fue la última faraona activa del Antiguo Egipto, gobernando del 51-30 a.C. hasta que Egipto se convirtió en una provincia romana.",
          de: "Kleopatra VII war die letzte aktive Pharaonin des Alten Ägypten, herrschte von 51-30 v.Chr. bis Ägypten eine römische Provinz wurde.",
          nl: "Cleopatra VII was de laatste actieve farao van het Oude Egypte, regerend van 51-30 v.Chr. totdat Egypte een Romeinse provincie werd."
        }
      },
      {
        question: {
          en: "What language did Cleopatra primarily speak?",
          es: "¿Qué idioma hablaba principalmente Cleopatra?",
          de: "Welche Sprache sprach Kleopatra hauptsächlich?",
          nl: "Welke taal sprak Cleopatra voornamelijk?"
        },
        options: [
          { en: "Greek", es: "Griego", de: "Griechisch", nl: "Grieks" },
          { en: "Egyptian", es: "Egipcio", de: "Ägyptisch", nl: "Egyptisch" },
          { en: "Latin", es: "Latín", de: "Lateinisch", nl: "Latijn" },
          { en: "Arabic", es: "Árabe", de: "Arabisch", nl: "Arabisch" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra was from the Ptolemaic dynasty, which was Greek. She was actually the first Ptolemaic ruler to learn the Egyptian language.",
          es: "Cleopatra era de la dinastía ptolemaica, que era griega. En realidad fue la primera gobernante ptolemaica en aprender el idioma egipcio.",
          de: "Kleopatra stammte aus der ptolemäischen Dynastie, die griechisch war. Sie war tatsächlich die erste ptolemäische Herrscherin, die die ägyptische Sprache lernte.",
          nl: "Cleopatra was van de Ptolemaeïsche dynastie, die Grieks was. Ze was eigenlijk de eerste Ptolemaeïsche heerser die de Egyptische taal leerde."
        }
      },
      {
        question: {
          en: "Which Roman leaders was Cleopatra romantically involved with?",
          es: "¿Con qué líderes romanos tuvo Cleopatra relaciones románticas?",
          de: "Mit welchen römischen Führern hatte Kleopatra romantische Beziehungen?",
          nl: "Met welke Romeinse leiders had Cleopatra romantische relaties?"
        },
        options: [
          { en: "Julius Caesar and Mark Antony", es: "Julio César y Marco Antonio", de: "Julius Caesar und Marcus Antonius", nl: "Julius Caesar en Marcus Antonius" },
          { en: "Augustus and Nero", es: "Augusto y Nerón", de: "Augustus und Nero", nl: "Augustus en Nero" },
          { en: "Pompey and Crassus", es: "Pompeyo y Craso", de: "Pompeius und Crassus", nl: "Pompeius en Crassus" },
          { en: "Cicero and Brutus", es: "Cicerón y Bruto", de: "Cicero und Brutus", nl: "Cicero en Brutus" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra had famous relationships with Julius Caesar (with whom she had a son) and later Mark Antony (with whom she had three children).",
          es: "Cleopatra tuvo relaciones famosas con Julio César (con quien tuvo un hijo) y luego Marco Antonio (con quien tuvo tres hijos).",
          de: "Kleopatra hatte berühmte Beziehungen zu Julius Caesar (mit dem sie einen Sohn hatte) und später Marcus Antonius (mit dem sie drei Kinder hatte).",
          nl: "Cleopatra had beroemde relaties met Julius Caesar (met wie ze een zoon had) en later Marcus Antonius (met wie ze drie kinderen had)."
        }
      },
      {
        question: {
          en: "How did Cleopatra famously meet Julius Caesar?",
          es: "¿Cómo conoció famosamente Cleopatra a Julio César?",
          de: "Wie lernte Kleopatra berühmt Julius Caesar kennen?",
          nl: "Hoe ontmoette Cleopatra op beroemde wijze Julius Caesar?"
        },
        options: [
          { en: "Smuggled herself to him in a carpet", es: "Se metió de contrabando a él en una alfombra", de: "Schmuggelte sich in einem Teppich zu ihm", nl: "Smokkelde zichzelf naar hem in een tapijt" },
          { en: "Met him at a grand banquet", es: "Lo conoció en un gran banquete", de: "Traf ihn bei einem großen Bankett", nl: "Ontmoette hem op een groot banket" },
          { en: "Sailed to Rome to visit him", es: "Navegó a Roma para visitarlo", de: "Segelte nach Rom um ihn zu besuchen", nl: "Zeilde naar Rome om hem te bezoeken" },
          { en: "Sent him a diplomatic letter", es: "Le envió una carta diplomática", de: "Schickte ihm einen diplomatischen Brief", nl: "Stuurde hem een diplomatieke brief" }
        ],
        correct: 0,
        explanation: {
          en: "According to legend, Cleopatra had herself smuggled into Caesar's palace rolled up in a carpet to get past his guards and make a dramatic first impression.",
          es: "Según la leyenda, Cleopatra se hizo contrabandear al palacio de César enrollada en una alfombra para pasar a sus guardias y causar una primera impresión dramática.",
          de: "Der Legende nach ließ sich Kleopatra in einem Teppich eingerollt in Caesars Palast schmuggeln, um an seinen Wachen vorbeizukommen und einen dramatischen ersten Eindruck zu machen.",
          nl: "Volgens de legende liet Cleopatra zichzelf opgerold in een tapijt naar Caesars paleis smokkelen om langs zijn wachters te komen en een dramatische eerste indruk te maken."
        }
      },
      {
        question: {
          en: "How did Cleopatra die?",
          es: "¿Cómo murió Cleopatra?",
          de: "Wie starb Kleopatra?",
          nl: "Hoe stierf Cleopatra?"
        },
        options: [
          { en: "Snake bite (suicide)", es: "Mordedura de serpiente (suicidio)", de: "Schlangenbiss (Selbstmord)", nl: "Slangenbeet (zelfmoord)" },
          { en: "Poison from enemies", es: "Veneno de enemigos", de: "Gift von Feinden", nl: "Vergif van vijanden" },
          { en: "Battle wounds", es: "Heridas de batalla", de: "Kampfwunden", nl: "Gevechtswonden" },
          { en: "Natural old age", es: "Vejez natural", de: "Natürliches Alter", nl: "Natuurlijke ouderdom" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra died by suicide in 30 BCE, traditionally believed to be from the bite of an asp (Egyptian cobra) rather than face capture by Octavian.",
          es: "Cleopatra murió por suicidio en 30 a.C., tradicionalmente se cree que por la mordedura de un áspid (cobra egipcia) en lugar de enfrentar la captura por Octavio.",
          de: "Kleopatra starb 30 v.Chr. durch Selbstmord, traditionell durch den Biss einer Natter (ägyptische Kobra), anstatt sich von Octavian gefangen nehmen zu lassen.",
          nl: "Cleopatra stierf door zelfmoord in 30 v.Chr., traditioneel geloofd door de beet van een adder (Egyptische cobra) in plaats van gevangenneming door Octavianus."
        }
      },
      {
        question: {
          en: "What was the name of Cleopatra's kingdom?",
          es: "¿Cuál era el nombre del reino de Cleopatra?",
          de: "Wie hieß Kleopatras Königreich?",
          nl: "Wat was de naam van Cleopatra's koninkrijk?"
        },
        options: [
          { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Persia", es: "Persia", de: "Persien", nl: "Perzië" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra was the Queen of Egypt, ruling from Alexandria. She was the last ruler of the Ptolemaic Kingdom of Egypt.",
          es: "Cleopatra fue la Reina de Egipto, gobernando desde Alejandría. Fue la última gobernante del Reino Ptolemaico de Egipto.",
          de: "Kleopatra war die Königin von Ägypten und regierte von Alexandria aus. Sie war die letzte Herrscherin des ptolemäischen Königreichs Ägypten.",
          nl: "Cleopatra was de koningin van Egypte, regerend vanuit Alexandrië. Ze was de laatste heerser van het Ptolemaeïsche koninkrijk van Egypte."
        }
      },
      {
        question: {
          en: "In which city did Cleopatra primarily rule from?",
          es: "¿Desde qué ciudad gobernó principalmente Cleopatra?",
          de: "Von welcher Stadt aus regierte Kleopatra hauptsächlich?",
          nl: "Vanuit welke stad regeerde Cleopatra voornamelijk?"
        },
        options: [
          { en: "Alexandria", es: "Alejandría", de: "Alexandria", nl: "Alexandrië" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Caïro" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra ruled from Alexandria, the great cultural and intellectual center of the ancient world, founded by Alexander the Great.",
          es: "Cleopatra gobernó desde Alejandría, el gran centro cultural e intelectual del mundo antiguo, fundado por Alejandro Magno.",
          de: "Kleopatra regierte von Alexandria aus, dem großen kulturellen und intellektuellen Zentrum der antiken Welt, gegründet von Alexander dem Großen.",
          nl: "Cleopatra regeerde vanuit Alexandrië, het grote culturele en intellectuele centrum van de antieke wereld, gesticht door Alexander de Grote."
        }
      },
      {
        question: {
          en: "What dynasty did Cleopatra belong to?",
          es: "¿A qué dinastía pertenecía Cleopatra?",
          de: "Zu welcher Dynastie gehörte Kleopatra?",
          nl: "Tot welke dynastie behoorde Cleopatra?"
        },
        options: [
          { en: "Ptolemaic Dynasty", es: "Dinastía Ptolemaica", de: "Ptolemäische Dynastie", nl: "Ptolemaeïsche dynastie" },
          { en: "Roman Dynasty", es: "Dinastía Romana", de: "Römische Dynastie", nl: "Romeinse dynastie" },
          { en: "Persian Dynasty", es: "Dinastía Persa", de: "Persische Dynastie", nl: "Perzische dynastie" },
          { en: "Macedonian Dynasty", es: "Dinastía Macedonia", de: "Makedonische Dynastie", nl: "Macedonische dynastie" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra was part of the Ptolemaic Dynasty, which was established by Ptolemy I, one of Alexander the Great's generals, after Alexander's death.",
          es: "Cleopatra era parte de la Dinastía Ptolemaica, que fue establecida por Ptolomeo I, uno de los generales de Alejandro Magno, después de la muerte de Alejandro.",
          de: "Kleopatra gehörte zur ptolemäischen Dynastie, die von Ptolemaios I., einem der Generäle Alexanders des Großen, nach Alexanders Tod gegründet wurde.",
          nl: "Cleopatra maakte deel uit van de Ptolemaeïsche dynastie, die werd opgericht door Ptolemaeus I, een van Alexander de Grote's generaals, na de dood van Alexander."
        }
      },
      {
        question: {
          en: "What was the name of Cleopatra's son with Julius Caesar?",
          es: "¿Cuál era el nombre del hijo de Cleopatra con Julio César?",
          de: "Wie hieß Kleopatras Sohn mit Julius Caesar?",
          nl: "Wat was de naam van Cleopatra's zoon met Julius Caesar?"
        },
        options: [
          { en: "Caesarion", es: "Cesarión", de: "Caesarion", nl: "Caesarion" },
          { en: "Alexander", es: "Alejandro", de: "Alexander", nl: "Alexander" },
          { en: "Marcus", es: "Marco", de: "Marcus", nl: "Marcus" },
          { en: "Ptolemy", es: "Ptolomeo", de: "Ptolemaios", nl: "Ptolemaeus" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra's son with Julius Caesar was named Caesarion (meaning 'Little Caesar'). His formal name was Ptolemy XV Caesar.",
          es: "El hijo de Cleopatra con Julio César se llamaba Cesarión (que significa 'Pequeño César'). Su nombre formal era Ptolomeo XV César.",
          de: "Kleopatras Sohn mit Julius Caesar hieß Caesarion (bedeutet 'Kleiner Caesar'). Sein formeller Name war Ptolemaios XV. Caesar.",
          nl: "Cleopatra's zoon met Julius Caesar heette Caesarion (wat 'Kleine Caesar' betekent). Zijn formele naam was Ptolemaeus XV Caesar."
        }
      },
      {
        question: {
          en: "How many languages could Cleopatra speak?",
          es: "¿Cuántos idiomas podía hablar Cleopatra?",
          de: "Wie viele Sprachen konnte Kleopatra sprechen?",
          nl: "Hoeveel talen kon Cleopatra spreken?"
        },
        options: [
          { en: "At least 9 languages", es: "Al menos 9 idiomas", de: "Mindestens 9 Sprachen", nl: "Minstens 9 talen" },
          { en: "Only 2 languages", es: "Solo 2 idiomas", de: "Nur 2 Sprachen", nl: "Slechts 2 talen" },
          { en: "Only Greek", es: "Solo griego", de: "Nur Griechisch", nl: "Alleen Grieks" },
          { en: "3 languages", es: "3 idiomas", de: "3 Sprachen", nl: "3 talen" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra was highly educated and could speak at least 9 languages, including Egyptian, Greek, Hebrew, Aramaic, and Latin, making her an exceptional diplomat.",
          es: "Cleopatra era muy educada y podía hablar al menos 9 idiomas, incluyendo egipcio, griego, hebreo, arameo y latín, lo que la convertía en una diplomática excepcional.",
          de: "Kleopatra war hochgebildet und konnte mindestens 9 Sprachen sprechen, darunter Ägyptisch, Griechisch, Hebräisch, Aramäisch und Lateinisch, was sie zu einer außergewöhnlichen Diplomatin machte.",
          nl: "Cleopatra was hoogopgeleid en kon minstens 9 talen spreken, waaronder Egyptisch, Grieks, Hebreeuws, Aramees en Latijn, wat haar een uitzonderlijke diplomaat maakte."
        }
      },
      {
        question: {
          en: "At what age did Cleopatra become queen?",
          es: "¿A qué edad se convirtió Cleopatra en reina?",
          de: "In welchem Alter wurde Kleopatra Königin?",
          nl: "Op welke leeftijd werd Cleopatra koningin?"
        },
        options: [
          { en: "18 years old", es: "18 años", de: "18 Jahre alt", nl: "18 jaar oud" },
          { en: "25 years old", es: "25 años", de: "25 Jahre alt", nl: "25 jaar oud" },
          { en: "14 years old", es: "14 años", de: "14 Jahre alt", nl: "14 jaar oud" },
          { en: "30 years old", es: "30 años", de: "30 Jahre alt", nl: "30 jaar oud" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra became co-ruler of Egypt at age 18 in 51 BCE, initially ruling alongside her younger brother Ptolemy XIII.",
          es: "Cleopatra se convirtió en co-gobernante de Egipto a los 18 años en 51 a.C., inicialmente gobernando junto a su hermano menor Ptolomeo XIII.",
          de: "Kleopatra wurde im Alter von 18 Jahren 51 v.Chr. Mitregentin Ägyptens und regierte zunächst zusammen mit ihrem jüngeren Bruder Ptolemaios XIII.",
          nl: "Cleopatra werd medeheerser van Egypte op 18-jarige leeftijd in 51 v.Chr., aanvankelijk regerend naast haar jongere broer Ptolemaeus XIII."
        }
      },
      {
        question: {
          en: "Who defeated Cleopatra and Mark Antony at the Battle of Actium?",
          es: "¿Quién derrotó a Cleopatra y Marco Antonio en la Batalla de Actium?",
          de: "Wer besiegte Kleopatra und Marcus Antonius in der Schlacht von Actium?",
          nl: "Wie versloeg Cleopatra en Marcus Antonius in de Slag bij Actium?"
        },
        options: [
          { en: "Octavian (later Augustus)", es: "Octavio (más tarde Augusto)", de: "Octavian (später Augustus)", nl: "Octavianus (later Augustus)" },
          { en: "Pompey", es: "Pompeyo", de: "Pompeius", nl: "Pompeius" },
          { en: "Nero", es: "Nerón", de: "Nero", nl: "Nero" },
          { en: "Brutus", es: "Bruto", de: "Brutus", nl: "Brutus" }
        ],
        correct: 0,
        explanation: {
          en: "Octavian, who later became Emperor Augustus, defeated Cleopatra and Mark Antony at the naval Battle of Actium in 31 BCE, leading to their downfall.",
          es: "Octavio, quien más tarde se convirtió en el Emperador Augusto, derrotó a Cleopatra y Marco Antonio en la batalla naval de Actium en 31 a.C., lo que llevó a su caída.",
          de: "Octavian, der später Kaiser Augustus wurde, besiegte Kleopatra und Marcus Antonius 31 v.Chr. in der Seeschlacht von Actium, was zu ihrem Untergang führte.",
          nl: "Octavianus, die later keizer Augustus werd, versloeg Cleopatra en Marcus Antonius in de zeeslag bij Actium in 31 v.Chr., wat leidde tot hun ondergang."
        }
      },
      {
        question: {
          en: "With whom did Cleopatra initially co-rule Egypt?",
          es: "¿Con quién co-gobernó inicialmente Cleopatra Egipto?",
          de: "Mit wem regierte Kleopatra zunächst Ägypten gemeinsam?",
          nl: "Met wie regeerde Cleopatra aanvankelijk Egypte samen?"
        },
        options: [
          { en: "Her younger brother Ptolemy XIII", es: "Su hermano menor Ptolomeo XIII", de: "Ihrem jüngeren Bruder Ptolemaios XIII", nl: "Haar jongere broer Ptolemaeus XIII" },
          { en: "Her mother", es: "Su madre", de: "Ihrer Mutter", nl: "Haar moeder" },
          { en: "Mark Antony", es: "Marco Antonio", de: "Marcus Antonius", nl: "Marcus Antonius" },
          { en: "Julius Caesar", es: "Julio César", de: "Julius Caesar", nl: "Julius Caesar" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra initially co-ruled with her younger brother Ptolemy XIII, as was customary in the Ptolemaic dynasty, though they later became enemies.",
          es: "Cleopatra inicialmente co-gobernó con su hermano menor Ptolomeo XIII, como era costumbre en la dinastía ptolemaica, aunque luego se convirtieron en enemigos.",
          de: "Kleopatra regierte zunächst mit ihrem jüngeren Bruder Ptolemaios XIII., wie es in der ptolemäischen Dynastie üblich war, obwohl sie später zu Feinden wurden.",
          nl: "Cleopatra regeerde aanvankelijk samen met haar jongere broer Ptolemaeus XIII, zoals gebruikelijk was in de Ptolemaeïsche dynastie, hoewel ze later vijanden werden."
        }
      },
      {
        question: {
          en: "What type of snake allegedly bit Cleopatra?",
          es: "¿Qué tipo de serpiente supuestamente mordió a Cleopatra?",
          de: "Welche Art von Schlange soll Kleopatra gebissen haben?",
          nl: "Welk type slang beet Cleopatra naar verluidt?"
        },
        options: [
          { en: "Asp (Egyptian cobra)", es: "Áspid (cobra egipcia)", de: "Natter (ägyptische Kobra)", nl: "Adder (Egyptische cobra)" },
          { en: "Viper", es: "Víbora", de: "Viper", nl: "Adder" },
          { en: "Python", es: "Pitón", de: "Python", nl: "Python" },
          { en: "Rattlesnake", es: "Serpiente de cascabel", de: "Klapperschlange", nl: "Ratelslang" }
        ],
        correct: 0,
        explanation: {
          en: "According to ancient accounts, Cleopatra died from the bite of an asp, which is an Egyptian cobra, though some modern historians debate this.",
          es: "Según relatos antiguos, Cleopatra murió por la mordedura de un áspid, que es una cobra egipcia, aunque algunos historiadores modernos debaten esto.",
          de: "Antiken Berichten zufolge starb Kleopatra durch den Biss einer Natter, einer ägyptischen Kobra, obwohl einige moderne Historiker dies bezweifeln.",
          nl: "Volgens oude verslagen stierf Cleopatra door de beet van een adder, een Egyptische cobra, hoewel sommige moderne historici dit betwisten."
        }
      },
      {
        question: {
          en: "How many children did Cleopatra have in total?",
          es: "¿Cuántos hijos tuvo Cleopatra en total?",
          de: "Wie viele Kinder hatte Kleopatra insgesamt?",
          nl: "Hoeveel kinderen had Cleopatra in totaal?"
        },
        options: [
          { en: "Four children", es: "Cuatro hijos", de: "Vier Kinder", nl: "Vier kinderen" },
          { en: "Two children", es: "Dos hijos", de: "Zwei Kinder", nl: "Twee kinderen" },
          { en: "Three children", es: "Tres hijos", de: "Drei Kinder", nl: "Drie kinderen" },
          { en: "Five children", es: "Cinco hijos", de: "Fünf Kinder", nl: "Vijf kinderen" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra had four children: one son (Caesarion) with Julius Caesar and three children (twins Alexander Helios and Cleopatra Selene II, and Ptolemy Philadelphus) with Mark Antony.",
          es: "Cleopatra tuvo cuatro hijos: un hijo (Cesarión) con Julio César y tres hijos (los gemelos Alejandro Helios y Cleopatra Selene II, y Ptolomeo Filadelfo) con Marco Antonio.",
          de: "Kleopatra hatte vier Kinder: einen Sohn (Caesarion) mit Julius Caesar und drei Kinder (die Zwillinge Alexander Helios und Kleopatra Selene II sowie Ptolemaios Philadelphos) mit Marcus Antonius.",
          nl: "Cleopatra had vier kinderen: één zoon (Caesarion) met Julius Caesar en drie kinderen (de tweeling Alexander Helios en Cleopatra Selene II, en Ptolemaeus Philadelphus) met Marcus Antonius."
        }
      },
      {
        question: {
          en: "What happened to Egypt after Cleopatra's death?",
          es: "¿Qué sucedió con Egipto después de la muerte de Cleopatra?",
          de: "Was geschah mit Ägypten nach Kleopatras Tod?",
          nl: "Wat gebeurde er met Egypte na de dood van Cleopatra?"
        },
        options: [
          { en: "It became a Roman province", es: "Se convirtió en una provincia romana", de: "Es wurde eine römische Provinz", nl: "Het werd een Romeinse provincie" },
          { en: "It became independent", es: "Se volvió independiente", de: "Es wurde unabhängig", nl: "Het werd onafhankelijk" },
          { en: "It was conquered by Greece", es: "Fue conquistado por Grecia", de: "Es wurde von Griechenland erobert", nl: "Het werd veroverd door Griekenland" },
          { en: "It was divided among her children", es: "Fue dividido entre sus hijos", de: "Es wurde unter ihren Kindern aufgeteilt", nl: "Het werd verdeeld onder haar kinderen" }
        ],
        correct: 0,
        explanation: {
          en: "After Cleopatra's death in 30 BCE, Egypt was annexed by Rome and became a Roman province, ending over 3,000 years of Egyptian independence.",
          es: "Después de la muerte de Cleopatra en 30 a.C., Egipto fue anexado por Roma y se convirtió en una provincia romana, terminando más de 3,000 años de independencia egipcia.",
          de: "Nach Kleopatras Tod 30 v.Chr. wurde Ägypten von Rom annektiert und wurde eine römische Provinz, was mehr als 3.000 Jahre ägyptischer Unabhängigkeit beendete.",
          nl: "Na de dood van Cleopatra in 30 v.Chr. werd Egypte geannexeerd door Rome en werd het een Romeinse provincie, waarmee meer dan 3.000 jaar Egyptische onafhankelijkheid eindigde."
        }
      },
      {
        question: {
          en: "What was remarkable about Cleopatra's education?",
          es: "¿Qué fue notable sobre la educación de Cleopatra?",
          de: "Was war bemerkenswert an Kleopatras Bildung?",
          nl: "Wat was opmerkelijk aan Cleopatra's opleiding?"
        },
        options: [
          { en: "She was highly educated in multiple subjects", es: "Estaba altamente educada en múltiples materias", de: "Sie war in mehreren Fächern hochgebildet", nl: "Ze was hoogopgeleid in meerdere vakken" },
          { en: "She never learned to read", es: "Nunca aprendió a leer", de: "Sie lernte nie zu lesen", nl: "Ze leerde nooit lezen" },
          { en: "She only studied military strategy", es: "Solo estudió estrategia militar", de: "Sie studierte nur Militärstrategie", nl: "Ze studeerde alleen militaire strategie" },
          { en: "She had no formal education", es: "No tuvo educación formal", de: "Sie hatte keine formelle Bildung", nl: "Ze had geen formele opleiding" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra received an excellent education and was knowledgeable in mathematics, philosophy, oratory, astronomy, and multiple languages, making her one of the most educated rulers of her time.",
          es: "Cleopatra recibió una excelente educación y tenía conocimientos en matemáticas, filosofía, oratoria, astronomía y múltiples idiomas, lo que la convirtió en una de las gobernantas más educadas de su época.",
          de: "Kleopatra erhielt eine ausgezeichnete Ausbildung und war bewandert in Mathematik, Philosophie, Rhetorik, Astronomie und mehreren Sprachen, was sie zu einer der gebildetsten Herrscherinnen ihrer Zeit machte.",
          nl: "Cleopatra kreeg een uitstekende opleiding en had kennis van wiskunde, filosofie, retorica, astronomie en meerdere talen, wat haar een van de meest opgeleide heersers van haar tijd maakte."
        }
      },
      {
        question: {
          en: "What was the primary reason for Cleopatra's alliance with Julius Caesar?",
          es: "¿Cuál fue la razón principal de la alianza de Cleopatra con Julio César?",
          de: "Was war der Hauptgrund für Kleopatras Allianz mit Julius Caesar?",
          nl: "Wat was de belangrijkste reden voor Cleopatra's alliantie met Julius Caesar?"
        },
        options: [
          { en: "To secure her throne against her brother", es: "Para asegurar su trono contra su hermano", de: "Um ihren Thron gegen ihren Bruder zu sichern", nl: "Om haar troon te beveiligen tegen haar broer" },
          { en: "To conquer Rome", es: "Para conquistar Roma", de: "Um Rom zu erobern", nl: "Om Rome te veroveren" },
          { en: "To learn Latin", es: "Para aprender latín", de: "Um Lateinisch zu lernen", nl: "Om Latijn te leren" },
          { en: "To travel to Greece", es: "Para viajar a Grecia", de: "Um nach Griechenland zu reisen", nl: "Om naar Griekenland te reizen" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra allied with Julius Caesar primarily to secure her position as pharaoh and defeat her brother Ptolemy XIII, who had driven her from power.",
          es: "Cleopatra se alió con Julio César principalmente para asegurar su posición como faraona y derrotar a su hermano Ptolomeo XIII, quien la había expulsado del poder.",
          de: "Kleopatra verbündete sich mit Julius Caesar hauptsächlich, um ihre Position als Pharaonin zu sichern und ihren Bruder Ptolemaios XIII zu besiegen, der sie von der Macht vertrieben hatte.",
          nl: "Cleopatra sloot een alliantie met Julius Caesar voornamelijk om haar positie als farao veilig te stellen en haar broer Ptolemaeus XIII te verslaan, die haar van de macht had verdreven."
        }
      },
      {
        question: {
          en: "In what year did Cleopatra die?",
          es: "¿En qué año murió Cleopatra?",
          de: "In welchem Jahr starb Kleopatra?",
          nl: "In welk jaar stierf Cleopatra?"
        },
        options: [
          { en: "30 BCE", es: "30 a.C.", de: "30 v.Chr.", nl: "30 v.Chr." },
          { en: "44 BCE", es: "44 a.C.", de: "44 v.Chr.", nl: "44 v.Chr." },
          { en: "51 BCE", es: "51 a.C.", de: "51 v.Chr.", nl: "51 v.Chr." },
          { en: "20 BCE", es: "20 a.C.", de: "20 v.Chr.", nl: "20 v.Chr." }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra died in 30 BCE at the age of 39, shortly after the defeat at the Battle of Actium and Mark Antony's death.",
          es: "Cleopatra murió en 30 a.C. a la edad de 39 años, poco después de la derrota en la Batalla de Actium y la muerte de Marco Antonio.",
          de: "Kleopatra starb 30 v.Chr. im Alter von 39 Jahren, kurz nach der Niederlage in der Schlacht von Actium und dem Tod von Marcus Antonius.",
          nl: "Cleopatra stierf in 30 v.Chr. op 39-jarige leeftijd, kort na de nederlaag in de Slag bij Actium en de dood van Marcus Antonius."
        }
      },
      {
        question: {
          en: "What famous building was located in Cleopatra's capital city of Alexandria?",
          es: "¿Qué edificio famoso se encontraba en la ciudad capital de Cleopatra, Alejandría?",
          de: "Welches berühmte Gebäude befand sich in Kleopatras Hauptstadt Alexandria?",
          nl: "Welk beroemd gebouw bevond zich in Cleopatra's hoofdstad Alexandrië?"
        },
        options: [
          { en: "The Great Library of Alexandria", es: "La Gran Biblioteca de Alejandría", de: "Die Große Bibliothek von Alexandria", nl: "De Grote Bibliotheek van Alexandrië" },
          { en: "The Colosseum", es: "El Coliseo", de: "Das Kolosseum", nl: "Het Colosseum" },
          { en: "The Parthenon", es: "El Partenón", de: "Das Parthenon", nl: "Het Parthenon" },
          { en: "The Hanging Gardens", es: "Los Jardines Colgantes", de: "Die Hängenden Gärten", nl: "De Hangende Tuinen" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Library of Alexandria was one of the largest and most significant libraries of the ancient world, located in Cleopatra's capital city.",
          es: "La Gran Biblioteca de Alejandría fue una de las bibliotecas más grandes y significativas del mundo antiguo, ubicada en la ciudad capital de Cleopatra.",
          de: "Die Große Bibliothek von Alexandria war eine der größten und bedeutendsten Bibliotheken der antiken Welt, gelegen in Kleopatras Hauptstadt.",
          nl: "De Grote Bibliotheek van Alexandrië was een van de grootste en belangrijkste bibliotheken van de antieke wereld, gelegen in Cleopatra's hoofdstad."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
