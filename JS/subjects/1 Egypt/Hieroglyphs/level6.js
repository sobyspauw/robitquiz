// Quiz Level 6: Hiërogliefen - Hieroglyphic Grammar & Structure
(function() {
  "use strict";

  const level6 = {
    name: {
      en: "Hieroglyphic Grammar & Structure",
      es: "Gramática y Estructura Jeroglífica",
      de: "Hieroglyphische Grammatik und Struktur",
      nl: "Hiëroglifische Grammatica & Structuur"
    },
    questions: [
      {
        question: {
          en: "What are the three main categories of hieroglyphic signs?",
          es: "¿Cuáles son las tres categorías principales de signos jeroglíficos?",
          de: "Was sind die drei Hauptkategorien hieroglyphischer Zeichen?",
          nl: "Wat zijn de drie hoofdcategorieën van hiëroglifische tekens?"
        },
        options: [
          { en: "Logograms, phonograms, and determinatives", es: "Logogramas, fonogramas y determinativos", de: "Logogramme, Phonogramme und Determinative", nl: "Logogrammen, fonogrammen en determinatieven" },
          { en: "Vowels, consonants, and punctuation", es: "Vocales, consonantes y puntuación", de: "Vokale, Konsonanten und Interpunktion", nl: "Klinkers, medeklinkers en leestekens" },
          { en: "Sacred, royal, and common signs", es: "Signos sagrados, reales y comunes", de: "Heilige, königliche und gewöhnliche Zeichen", nl: "Heilige, koninklijke en gewone tekens" },
          { en: "Animals, objects, and humans", es: "Animales, objetos y humanos", de: "Tiere, Objekte und Menschen", nl: "Dieren, voorwerpen en mensen" }
        ],
        correct: 0,
        explanation: {
          en: "The three main categories are logograms (word signs), phonograms (sound signs), and determinatives (meaning classifiers). These could be combined to create complex words and meanings.",
          es: "Las tres categorías principales son logogramas (signos de palabras), fonogramas (signos de sonido) y determinativos (clasificadores de significado). Estos podían combinarse para crear palabras y significados complejos.",
          de: "Die drei Hauptkategorien sind Logogramme (Wortzeichen), Phonogramme (Lautzeichen) und Determinative (Bedeutungsklassifikatoren). Diese konnten kombiniert werden, um komplexe Wörter und Bedeutungen zu schaffen.",
          nl: "De drie hoofdcategorieën zijn logogrammen (woordtekens), fonogrammen (klanktekens) en determinatieven (betekenisclassificeerders). Deze konden worden gecombineerd om complexe woorden en betekenissen te creëren."
        }
      },
      {
        question: {
          en: "What is a trilateral root in hieroglyphic writing?",
          es: "¿Qué es una raíz trilateral en la escritura jeroglífica?",
          de: "Was ist eine trilaterale Wurzel in der hieroglyphischen Schrift?",
          nl: "Wat is een trilaterale wortel in hiëroglifisch schrift?"
        },
        options: [
          { en: "A sign representing three consonants", es: "Un signo que representa tres consonantes", de: "Ein Zeichen, das drei Konsonanten darstellt", nl: "Een teken dat drie medeklinkers voorstelt" },
          { en: "A word with three meanings", es: "Una palabra con tres significados", de: "Ein Wort mit drei Bedeutungen", nl: "Een woord met drie betekenissen" },
          { en: "Three signs written together", es: "Tres signos escritos juntos", de: "Drei zusammengeschriebene Zeichen", nl: "Drie samen geschreven tekens" },
          { en: "A triangle-shaped hieroglyph", es: "Un jeroglífico en forma de triángulo", de: "Eine dreieckige Hieroglyphe", nl: "Een driehoekige hiëroglief" }
        ],
        correct: 0,
        explanation: {
          en: "A trilateral root is a single hieroglyphic sign that represents three consonants, forming the core of many Egyptian words. These were efficient ways to write complex sounds.",
          es: "Una raíz trilateral es un signo jeroglífico único que representa tres consonantes, formando el núcleo de muchas palabras egipcias. Estas eran formas eficientes de escribir sonidos complejos.",
          de: "Eine trilaterale Wurzel ist ein einzelnes hieroglyphisches Zeichen, das drei Konsonanten darstellt und den Kern vieler ägyptischer Wörter bildet. Dies waren effiziente Wege, komplexe Laute zu schreiben.",
          nl: "Een trilaterale wortel is een enkel hiëroglifisch teken dat drie medeklinkers voorstelt, wat de kern vormt van veel Egyptische woorden. Dit waren efficiënte manieren om complexe klanken te schrijven."
        }
      },
      {
        question: {
          en: "How are adjectives typically positioned relative to nouns in hieroglyphic texts?",
          es: "¿Cómo se posicionan típicamente los adjetivos en relación con los sustantivos en textos jeroglíficos?",
          de: "Wie werden Adjektive typischerweise relativ zu Substantiven in hieroglyphischen Texten positioniert?",
          nl: "Hoe worden bijvoeglijke naamwoorden typisch gepositioneerd ten opzichte van zelfstandige naamwoorden in hiëroglifische teksten?"
        },
        options: [
          { en: "Always before the noun", es: "Siempre antes del sustantivo", de: "Immer vor dem Substantiv", nl: "Altijd voor het zelfstandig naamwoord" },
          { en: "After the noun they modify", es: "Después del sustantivo que modifican", de: "Nach dem Substantiv, das sie modifizieren", nl: "Na het zelfstandig naamwoord dat ze modificeren" },
          { en: "Always at the beginning of sentences", es: "Siempre al comienzo de las oraciones", de: "Immer am Satzanfang", nl: "Altijd aan het begin van zinnen" },
          { en: "Randomly placed", es: "Colocados aleatoriamente", de: "Zufällig platziert", nl: "Willekeurig geplaatst" }
        ],
        correct: 1,
        explanation: {
          en: "In Egyptian, adjectives typically follow the noun they modify, similar to many modern languages like French or Spanish. For example, 'house big' rather than 'big house'.",
          es: "En egipcio, los adjetivos típicamente siguen al sustantivo que modifican, similar a muchos idiomas modernos como francés o español. Por ejemplo, 'casa grande' en lugar de 'grande casa'.",
          de: "Im Ägyptischen folgen Adjektive typischerweise dem Substantiv, das sie modifizieren, ähnlich wie in vielen modernen Sprachen wie Französisch oder Spanisch. Zum Beispiel 'Haus groß' statt 'großes Haus'.",
          nl: "In het Egyptisch volgen bijvoeglijke naamwoorden typisch het zelfstandig naamwoord dat ze modificeren, vergelijkbaar met veel moderne talen zoals Frans of Spaans. Bijvoorbeeld, 'huis groot' in plaats van 'groot huis'."
        }
      },
      {
        question: {
          en: "What is the dual form in Egyptian grammar?",
          es: "¿Qué es la forma dual en la gramática egipcia?",
          de: "Was ist die Dualform in der ägyptischen Grammatik?",
          nl: "Wat is de dualis vorm in de Egyptische grammatica?"
        },
        options: [
          { en: "A form for exactly two of something", es: "Una forma para exactamente dos de algo", de: "Eine Form für genau zwei von etwas", nl: "Een vorm voor precies twee van iets" },
          { en: "A form for multiple meanings", es: "Una forma para múltiples significados", de: "Eine Form für mehrere Bedeutungen", nl: "Een vorm voor meerdere betekenissen" },
          { en: "A double-written word", es: "Una palabra escrita doble", de: "Ein doppelt geschriebenes Wort", nl: "Een dubbel geschreven woord" },
          { en: "A form for very large numbers", es: "Una forma para números muy grandes", de: "Eine Form für sehr große Zahlen", nl: "Een vorm voor zeer grote getallen" }
        ],
        correct: 0,
        explanation: {
          en: "The dual form was used specifically for exactly two of something, different from singular (one) and plural (more than two). It was marked by special endings and determinatives.",
          es: "La forma dual se usaba específicamente para exactamente dos de algo, diferente del singular (uno) y plural (más de dos). Se marcaba con terminaciones especiales y determinativos.",
          de: "Die Dualform wurde spezifisch für genau zwei von etwas verwendet, unterschiedlich von Singular (eins) und Plural (mehr als zwei). Sie wurde durch spezielle Endungen und Determinative markiert.",
          nl: "De dualis vorm werd specifiek gebruikt voor precies twee van iets, anders dan enkelvoud (één) en meervoud (meer dan twee). Het werd gemarkeerd door speciale uitgangen en determinatieven."
        }
      },
      {
        question: {
          en: "What is the function of phonetic complements in hieroglyphic writing?",
          es: "¿Cuál es la función de los complementos fonéticos en la escritura jeroglífica?",
          de: "Was ist die Funktion phonetischer Komplemente in der hieroglyphischen Schrift?",
          nl: "Wat is de functie van fonetische complementen in hiëroglifisch schrift?"
        },
        options: [
          { en: "To change the meaning of words", es: "Para cambiar el significado de las palabras", de: "Um die Bedeutung von Wörtern zu ändern", nl: "Om de betekenis van woorden te veranderen" },
          { en: "To clarify pronunciation of logograms", es: "Para aclarar la pronunciación de logogramas", de: "Um die Aussprache von Logogrammen zu klären", nl: "Om de uitspraak van logogrammen te verduidelijken" },
          { en: "To mark the end of sentences", es: "Para marcar el final de las oraciones", de: "Um das Ende von Sätzen zu markieren", nl: "Om het einde van zinnen aan te geven" },
          { en: "To indicate plural forms", es: "Para indicar formas plurales", de: "Um Pluralformen anzuzeigen", nl: "Om meervoudsvormen aan te geven" }
        ],
        correct: 1,
        explanation: {
          en: "Phonetic complements were added to logograms to clarify their pronunciation, especially when the same logogram could be read in different ways. They helped disambiguate reading.",
          es: "Los complementos fonéticos se agregaban a los logogramas para aclarar su pronunciación, especialmente cuando el mismo logograma podía leerse de diferentes maneras. Ayudaban a desambiguar la lectura.",
          de: "Phonetische Komplemente wurden zu Logogrammen hinzugefügt, um ihre Aussprache zu klären, besonders wenn dasselbe Logogramm auf verschiedene Weise gelesen werden konnte. Sie halfen, das Lesen zu disambiguieren.",
          nl: "Fonetische complementen werden toegevoegd aan logogrammen om hun uitspraak te verduidelijken, vooral wanneer hetzelfde logogram op verschillende manieren kon worden gelezen. Ze hielpen om het lezen te verduidelijken."
        }
      },
      {
        question: {
          en: "What is honorific transposition in hieroglyphic writing?",
          es: "¿Qué es la transposición honorífica en la escritura jeroglífica?",
          de: "Was ist ehrende Transposition in der hieroglyphischen Schrift?",
          nl: "Wat is eerbiedige transpositie in hiëroglifisch schrift?"
        },
        options: [
          { en: "Writing divine names first out of respect", es: "Escribir nombres divinos primero por respeto", de: "Göttliche Namen aus Respekt zuerst schreiben", nl: "Goddelijke namen eerst schrijven uit respect" },
          { en: "Writing words backwards", es: "Escribir palabras al revés", de: "Wörter rückwärts schreiben", nl: "Woorden achterwaarts schrijven" },
          { en: "Using only capital letters", es: "Usar solo letras mayúsculas", de: "Nur Großbuchstaben verwenden", nl: "Alleen hoofdletters gebruiken" },
          { en: "Adding extra decorations", es: "Agregar decoraciones extra", de: "Extra Dekorationen hinzufügen", nl: "Extra versieringen toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Honorific transposition involved writing divine names or royal titles first in a phrase, even if grammatically they should come later, as a sign of respect and reverence.",
          es: "La transposición honorífica implicaba escribir nombres divinos o títulos reales primero en una frase, incluso si gramaticalmente deberían venir después, como señal de respeto y reverencia.",
          de: "Ehrende Transposition beinhaltete das Schreiben göttlicher Namen oder königlicher Titel zuerst in einem Satz, auch wenn sie grammatikalisch später kommen sollten, als Zeichen von Respekt und Ehrfurcht.",
          nl: "Eerbiedige transpositie hield in dat goddelijke namen of koninklijke titels eerst in een zin werden geschreven, zelfs als ze grammaticaal later zouden moeten komen, als teken van respect en eerbied."
        }
      },
      {
        question: {
          en: "How are questions typically formed in hieroglyphic Egyptian?",
          es: "¿Cómo se forman típicamente las preguntas en egipcio jeroglífico?",
          de: "Wie werden Fragen typischerweise im hieroglyphischen Ägyptisch gebildet?",
          nl: "Hoe worden vragen typisch gevormd in hiëroglifisch Egyptisch?"
        },
        options: [
          { en: "Using a question mark symbol", es: "Usando un símbolo de signo de interrogación", de: "Mit einem Fragezeichen-Symbol", nl: "Met een vraagteken symbool" },
          { en: "Using interrogative particles and word order", es: "Usando partículas interrogativas y orden de palabras", de: "Mit Fragepartikeln und Wortstellung", nl: "Met vraagwoorden en woordvolgorde" },
          { en: "Always starting with a specific hieroglyph", es: "Siempre comenzando con un jeroglífico específico", de: "Immer mit einer spezifischen Hieroglyphe beginnend", nl: "Altijd beginnend met een specifieke hiëroglief" },
          { en: "Writing words in reverse order", es: "Escribiendo palabras en orden inverso", de: "Wörter in umgekehrter Reihenfolge schreiben", nl: "Woorden in omgekeerde volgorde schrijven" }
        ],
        correct: 1,
        explanation: {
          en: "Questions were formed using interrogative particles (like 'in' for 'is it?') and specific word orders. There was no question mark punctuation; the grammar and context indicated questions.",
          es: "Las preguntas se formaban usando partículas interrogativas (como 'in' para '¿es?') y órdenes de palabras específicos. No había puntuación de signo de interrogación; la gramática y el contexto indicaban preguntas.",
          de: "Fragen wurden mit Fragepartikeln (wie 'in' für 'ist es?') und spezifischen Wortstellungen gebildet. Es gab keine Fragezeichen-Interpunktion; Grammatik und Kontext zeigten Fragen an.",
          nl: "Vragen werden gevormd met vraagwoorden (zoals 'in' voor 'is het?') en specifieke woordvolgordes. Er was geen vraagteken punctuatie; de grammatica en context gaven vragen aan."
        }
      },
      {
        question: {
          en: "What is the suffix conjugation in Egyptian grammar?",
          es: "¿Qué es la conjugación de sufijo en la gramática egipcia?",
          de: "Was ist die Suffixkonjugation in der ägyptischen Grammatik?",
          nl: "Wat is de suffix vervoeging in de Egyptische grammatica?"
        },
        options: [
          { en: "Adding suffixes to show who performs the action", es: "Agregar sufijos para mostrar quién realiza la acción", de: "Suffixe hinzufügen, um zu zeigen, wer die Handlung ausführt", nl: "Achtervoegsels toevoegen om te tonen wie de handeling uitvoert" },
          { en: "Adding prefixes to verbs", es: "Agregar prefijos a los verbos", de: "Präfixe zu Verben hinzufügen", nl: "Voorvoegsels toevoegen aan werkwoorden" },
          { en: "Changing the root of words", es: "Cambiar la raíz de las palabras", de: "Die Wurzel von Wörtern ändern", nl: "De wortel van woorden veranderen" },
          { en: "Using auxiliary verbs", es: "Usar verbos auxiliares", de: "Hilfsverben verwenden", nl: "Hulpwerkwoorden gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Suffix conjugation involved adding pronouns as suffixes to verbs to indicate who performed the action (I, you, he, she, etc.). This was one of the main ways to conjugate verbs.",
          es: "La conjugación de sufijo implicaba agregar pronombres como sufijos a los verbos para indicar quién realizó la acción (yo, tú, él, ella, etc.). Esta era una de las formas principales de conjugar verbos.",
          de: "Suffixkonjugation beinhaltete das Hinzufügen von Pronomen als Suffixe zu Verben, um anzuzeigen, wer die Handlung ausführte (ich, du, er, sie, etc.). Dies war eine der Hauptarten, Verben zu konjugieren.",
          nl: "Suffix vervoeging hield in dat voornaamwoorden als achtervoegsels aan werkwoorden werden toegevoegd om aan te geven wie de handeling uitvoerde (ik, jij, hij, zij, enz.). Dit was een van de hoofdmanieren om werkwoorden te vervoegen."
        }
      },
      {
        question: {
          en: "What is gemination in hieroglyphic writing?",
          es: "¿Qué es la geminación en la escritura jeroglífica?",
          de: "Was ist Gemination in der hieroglyphischen Schrift?",
          nl: "Wat is geminatie in hiëroglifisch schrift?"
        },
        options: [
          { en: "Writing the same hieroglyph twice for emphasis", es: "Escribir el mismo jeroglífico dos veces para énfasis", de: "Dasselbe Hieroglyph zweimal schreiben für Betonung", nl: "Hetzelfde hiëroglyph tweemaal schrijven voor nadruk" },
          { en: "Doubling consonants in pronunciation", es: "Duplicar consonantes en la pronunciación", de: "Konsonanten in der Aussprache verdoppeln", nl: "Medeklinkers verdubbelen in uitspraak" },
          { en: "Using twin symbols", es: "Usar símbolos gemelos", de: "Zwillingssymbole verwenden", nl: "Tweelingsymbolen gebruiken" },
          { en: "Combining two different hieroglyphs", es: "Combinar dos jeroglíficos diferentes", de: "Zwei verschiedene Hieroglyphen kombinieren", nl: "Twee verschillende hiërogliefen combineren" }
        ],
        correct: 1,
        explanation: {
          en: "Gemination refers to the doubling of consonants in pronunciation, which could be indicated in writing through various methods including repetition of phonetic signs or special markers.",
          es: "La geminación se refiere a la duplicación de consonantes en la pronunciación, que podía indicarse en la escritura a través de varios métodos incluyendo repetición de signos fonéticos o marcadores especiales.",
          de: "Gemination bezieht sich auf die Verdopplung von Konsonanten in der Aussprache, was in der Schrift durch verschiedene Methoden angezeigt werden konnte, einschließlich Wiederholung phonetischer Zeichen oder spezieller Markierungen.",
          nl: "Geminatie verwijst naar het verdubbelen van medeklinkers in uitspraak, wat in het schrift kon worden aangegeven door verschillende methoden inclusief herhaling van fonetische tekens of speciale markeringen."
        }
      },
      {
        question: {
          en: "What is the nisbe formation in Egyptian grammar?",
          es: "¿Qué es la formación nisbe en la gramática egipcia?",
          de: "Was ist die Nisbe-Bildung in der ägyptischen Grammatik?",
          nl: "Wat is de nisbe vorming in de Egyptische grammatica?"
        },
        options: [
          { en: "A way to form adjectives meaning 'belonging to' or 'of'", es: "Una forma de formar adjetivos que significan 'perteneciente a' o 'de'", de: "Eine Art, Adjektive zu bilden, die 'gehörend zu' oder 'von' bedeuten", nl: "Een manier om bijvoeglijke naamwoorden te vormen die 'behorend tot' of 'van' betekenen" },
          { en: "A type of plural formation", es: "Un tipo de formación plural", de: "Eine Art der Pluralbildung", nl: "Een soort meervoudsvorming" },
          { en: "A method of verb conjugation", es: "Un método de conjugación verbal", de: "Eine Methode der Verbkonjugation", nl: "Een methode van werkwoordvervoeging" },
          { en: "A way to write numbers", es: "Una forma de escribir números", de: "Eine Art, Zahlen zu schreiben", nl: "Een manier om getallen te schrijven" }
        ],
        correct: 0,
        explanation: {
          en: "Nisbe formation created adjectives meaning 'belonging to', 'of', or 'from' by adding specific endings to nouns. For example, turning 'Memphis' into 'Memphite' (of Memphis).",
          es: "La formación nisbe creaba adjetivos que significan 'perteneciente a', 'de' o 'desde' agregando terminaciones específicas a los sustantivos. Por ejemplo, convirtiendo 'Memphis' en 'Menfita' (de Memphis).",
          de: "Nisbe-Bildung schuf Adjektive mit der Bedeutung 'gehörend zu', 'von' oder 'aus', indem spezifische Endungen zu Substantiven hinzugefügt wurden. Zum Beispiel 'Memphis' in 'Memphitisch' (aus Memphis) verwandeln.",
          nl: "Nisbe vorming creëerde bijvoeglijke naamwoorden die 'behorend tot', 'van' of 'uit' betekenen door specifieke uitgangen toe te voegen aan zelfstandige naamwoorden. Bijvoorbeeld, 'Memphis' veranderen in 'Memphitisch' (van Memphis)."
        }
      },
      {
        question: {
          en: "How is possession typically indicated in hieroglyphic Egyptian?",
          es: "¿Cómo se indica típicamente la posesión en egipcio jeroglífico?",
          de: "Wie wird Besitz typischerweise im hieroglyphischen Ägyptisch angezeigt?",
          nl: "Hoe wordt bezit typisch aangegeven in hiëroglifisch Egyptisch?"
        },
        options: [
          { en: "Using apostrophes", es: "Usando apóstrofes", de: "Mit Apostrophen", nl: "Met apostroffen" },
          { en: "Through suffix pronouns and genitival constructions", es: "A través de pronombres de sufijo y construcciones genitivales", de: "Durch Suffix-Pronomen und Genitivkonstruktionen", nl: "Door suffix voornaamwoorden en genitief constructies" },
          { en: "Only through word order", es: "Solo a través del orden de las palabras", de: "Nur durch Wortstellung", nl: "Alleen door woordvolgorde" },
          { en: "Using special possession hieroglyphs", es: "Usando jeroglíficos especiales de posesión", de: "Mit speziellen Besitz-Hieroglyphen", nl: "Met speciale bezits-hiërogliefen" }
        ],
        correct: 1,
        explanation: {
          en: "Possession was shown through suffix pronouns (my, your, his, her) and genitival constructions where the possessor followed the possessed item, similar to 'house of John'.",
          es: "La posesión se mostraba a través de pronombres de sufijo (mi, tu, su) y construcciones genitivales donde el poseedor seguía al elemento poseído, similar a 'casa de Juan'.",
          de: "Besitz wurde durch Suffix-Pronomen (mein, dein, sein, ihr) und Genitivkonstruktionen gezeigt, wo der Besitzer dem besessenen Gegenstand folgte, ähnlich wie 'Haus des Johannes'.",
          nl: "Bezit werd getoond door suffix voornaamwoorden (mijn, jouw, zijn, haar) en genitief constructies waarbij de bezitter volgde op het bezeten item, vergelijkbaar met 'huis van Jan'."
        }
      },
      {
        question: {
          en: "What is the purpose of the stroke determinative (|) in hieroglyphic writing?",
          es: "¿Cuál es el propósito del determinativo de trazo (|) en la escritura jeroglífica?",
          de: "Was ist der Zweck des Strich-Determinativs (|) in der hieroglyphischen Schrift?",
          nl: "Wat is het doel van het streep-determinatief (|) in hiëroglifisch schrift?"
        },
        options: [
          { en: "To mark abstract concepts", es: "Para marcar conceptos abstractos", de: "Um abstrakte Konzepte zu markieren", nl: "Om abstracte concepten te markeren" },
          { en: "To separate words", es: "Para separar palabras", de: "Um Wörter zu trennen", nl: "Om woorden te scheiden" },
          { en: "To indicate single, specific items", es: "Para indicar elementos únicos y específicos", de: "Um einzelne, spezifische Gegenstände anzuzeigen", nl: "Om enkele, specifieke items aan te geven" },
          { en: "To show plural forms", es: "Para mostrar formas plurales", de: "Um Pluralformen zu zeigen", nl: "Om meervoudsvormen te tonen" }
        ],
        correct: 2,
        explanation: {
          en: "The stroke determinative (|) was used to indicate single, specific items, distinguishing them from general classes or concepts. It helped specify that something was a particular individual instance.",
          es: "El determinativo de trazo (|) se usaba para indicar elementos únicos y específicos, distinguiéndolos de clases generales o conceptos. Ayudaba a especificar que algo era una instancia individual particular.",
          de: "Das Strich-Determinativ (|) wurde verwendet, um einzelne, spezifische Gegenstände anzuzeigen und sie von allgemeinen Klassen oder Konzepten zu unterscheiden. Es half zu spezifizieren, dass etwas eine bestimmte individuelle Instanz war.",
          nl: "Het streep-determinatief (|) werd gebruikt om enkele, specifieke items aan te geven, ze onderscheidend van algemene klassen of concepten. Het hielp specificeren dat iets een bepaald individueel geval was."
        }
      },
      {
        question: {
          en: "What is cryptographic writing in hieroglyphic texts?",
          es: "¿Qué es la escritura criptográfica en textos jeroglíficos?",
          de: "Was ist kryptographische Schrift in hieroglyphischen Texten?",
          nl: "Wat is cryptografisch schrift in hiëroglifische teksten?"
        },
        options: [
          { en: "Secret codes for military messages", es: "Códigos secretos para mensajes militares", de: "Geheimcodes für militärische Nachrichten", nl: "Geheime codes voor militaire berichten" },
          { en: "Deliberately obscure writing using unusual sign values", es: "Escritura deliberadamente oscura usando valores de signos inusuales", de: "Absichtlich obskure Schrift mit ungewöhnlichen Zeichenwerten", nl: "Opzettelijk obscuur schrift met ongebruikelijke tekenwaarden" },
          { en: "Ancient computer programming", es: "Programación de computadoras antigua", de: "Antike Computerprogrammierung", nl: "Oude computerprogrammering" },
          { en: "Writing with invisible ink", es: "Escribir con tinta invisible", de: "Schreiben mit unsichtbarer Tinte", nl: "Schrijven met onzichtbare inkt" }
        ],
        correct: 1,
        explanation: {
          en: "Cryptographic writing involved deliberately obscure or puzzling writing using unusual sign values, acrophonic principles, or visual puns. It was often used in religious or royal contexts for mystical effect.",
          es: "La escritura criptográfica implicaba escritura deliberadamente oscura o enigmática usando valores de signos inusuales, principios acrofónicos o juegos de palabras visuales. A menudo se usaba en contextos religiosos o reales para efecto místico.",
          de: "Kryptographische Schrift beinhaltete absichtlich obskure oder rätselhafte Schrift mit ungewöhnlichen Zeichenwerten, akrophonischen Prinzipien oder visuellen Wortspielen. Sie wurde oft in religiösen oder königlichen Kontexten für mystische Wirkung verwendet.",
          nl: "Cryptografisch schrift hield in dat opzettelijk obscuur of raadselachtig schrift werd gebruikt met ongebruikelijke tekenwaarden, acrofonische principes of visuele woordspelingen. Het werd vaak gebruikt in religieuze of koninklijke contexten voor mystiek effect."
        }
      },
      {
        question: {
          en: "What is the emphatic construction in Egyptian grammar?",
          es: "¿Qué es la construcción enfática en la gramática egipcia?",
          de: "Was ist die emphatische Konstruktion in der ägyptischen Grammatik?",
          nl: "Wat is de nadruk constructie in de Egyptische grammatica?"
        },
        options: [
          { en: "A way to emphasize or focus on specific elements", es: "Una forma de enfatizar o enfocar elementos específicos", de: "Eine Art, spezifische Elemente zu betonen oder zu fokussieren", nl: "Een manier om specifieke elementen te benadrukken of te focussen" },
          { en: "Writing with larger hieroglyphs", es: "Escribir con jeroglíficos más grandes", de: "Mit größeren Hieroglyphen schreiben", nl: "Schrijven met grotere hiërogliefen" },
          { en: "Using only royal hieroglyphs", es: "Usar solo jeroglíficos reales", de: "Nur königliche Hieroglyphen verwenden", nl: "Alleen koninklijke hiërogliefen gebruiken" },
          { en: "Repeating words three times", es: "Repetir palabras tres veces", de: "Wörter dreimal wiederholen", nl: "Woorden drie keer herhalen" }
        ],
        correct: 0,
        explanation: {
          en: "The emphatic construction allowed writers to emphasize or focus on specific elements of a sentence by changing the normal word order, similar to 'it is X that...' constructions in English.",
          es: "La construcción enfática permitía a los escritores enfatizar o enfocar elementos específicos de una oración cambiando el orden normal de las palabras, similar a construcciones 'es X que...' en español.",
          de: "Die emphatische Konstruktion erlaubte es Schreibern, spezifische Elemente eines Satzes zu betonen oder zu fokussieren, indem sie die normale Wortstellung änderten, ähnlich wie 'es ist X, das...' Konstruktionen im Deutschen.",
          nl: "De nadruk constructie stelde schrijvers in staat om specifieke elementen van een zin te benadrukken of te focussen door de normale woordvolgorde te veranderen, vergelijkbaar met 'het is X dat...' constructies in het Nederlands."
        }
      },
      {
        question: {
          en: "How are compound words typically formed in hieroglyphic Egyptian?",
          es: "¿Cómo se forman típicamente las palabras compuestas en egipcio jeroglífico?",
          de: "Wie werden zusammengesetzte Wörter typischerweise im hieroglyphischen Ägyptisch gebildet?",
          nl: "Hoe worden samengestelde woorden typisch gevormd in hiëroglifisch Egyptisch?"
        },
        options: [
          { en: "By writing words separately with spaces", es: "Escribiendo palabras por separado con espacios", de: "Durch separate Schreibweise mit Leerzeichen", nl: "Door woorden apart te schrijven met spaties" },
          { en: "By combining multiple word elements with shared determinatives", es: "Combinando múltiples elementos de palabras con determinativos compartidos", de: "Durch Kombination mehrerer Wortelemente mit geteilten Determinativen", nl: "Door meerdere woordelementen te combineren met gedeelde determinatieven" },
          { en: "Using only the first letter of each word", es: "Usando solo la primera letra de cada palabra", de: "Nur den ersten Buchstaben jedes Wortes verwenden", nl: "Alleen de eerste letter van elk woord gebruiken" },
          { en: "Writing words in different colors", es: "Escribiendo palabras en diferentes colores", de: "Wörter in verschiedenen Farben schreiben", nl: "Woorden in verschillende kleuren schrijven" }
        ],
        correct: 1,
        explanation: {
          en: "Compound words were formed by combining multiple word elements, often sharing determinatives that applied to the whole compound. This created efficient ways to express complex concepts.",
          es: "Las palabras compuestas se formaban combinando múltiples elementos de palabras, a menudo compartiendo determinativos que se aplicaban a todo el compuesto. Esto creaba formas eficientes de expresar conceptos complejos.",
          de: "Zusammengesetzte Wörter wurden durch Kombination mehrerer Wortelemente gebildet, oft mit geteilten Determinativen, die für das gesamte Kompositum galten. Dies schuf effiziente Wege, komplexe Konzepte auszudrücken.",
          nl: "Samengestelde woorden werden gevormd door meerdere woordelementen te combineren, vaak met gedeelde determinatieven die op het hele samengestelde woord van toepassing waren. Dit creëerde efficiënte manieren om complexe concepten uit te drukken."
        }
      },
      {
        question: {
          en: "What is the difference between the subjunctive and indicative forms in Egyptian?",
          es: "¿Cuál es la diferencia entre las formas subjuntiva e indicativa en egipcio?",
          de: "Was ist der Unterschied zwischen Konjunktiv und Indikativ im Ägyptischen?",
          nl: "Wat is het verschil tussen de aanvoegende wijs en aantonende wijs in het Egyptisch?"
        },
        options: [
          { en: "Subjunctive expresses wishes/hypotheticals, indicative states facts", es: "El subjuntivo expresa deseos/hipotéticos, el indicativo declara hechos", de: "Konjunktiv drückt Wünsche/Hypothesen aus, Indikativ stellt Fakten dar", nl: "Aanvoegende wijs drukt wensen/hypothetische situaties uit, aantonende wijs stelt feiten" },
          { en: "Subjunctive is for past tense, indicative for present", es: "El subjuntivo es para tiempo pasado, el indicativo para presente", de: "Konjunktiv ist für Vergangenheit, Indikativ für Gegenwart", nl: "Aanvoegende wijs is voor verleden tijd, aantonende wijs voor tegenwoordige tijd" },
          { en: "Subjunctive is for gods, indicative for humans", es: "El subjuntivo es para dioses, el indicativo para humanos", de: "Konjunktiv ist für Götter, Indikativ für Menschen", nl: "Aanvoegende wijs is voor goden, aantonende wijs voor mensen" },
          { en: "They are identical in Egyptian", es: "Son idénticos en egipcio", de: "Sie sind im Ägyptischen identisch", nl: "Ze zijn identiek in het Egyptisch" }
        ],
        correct: 0,
        explanation: {
          en: "The subjunctive expressed wishes, possibilities, or hypothetical situations, while the indicative stated facts or actual events. This distinction was important for expressing different types of reality.",
          es: "El subjuntivo expresaba deseos, posibilidades o situaciones hipotéticas, mientras que el indicativo declaraba hechos o eventos reales. Esta distinción era importante para expresar diferentes tipos de realidad.",
          de: "Der Konjunktiv drückte Wünsche, Möglichkeiten oder hypothetische Situationen aus, während der Indikativ Fakten oder tatsächliche Ereignisse darstellte. Diese Unterscheidung war wichtig für die Darstellung verschiedener Arten von Realität.",
          nl: "De aanvoegende wijs drukte wensen, mogelijkheden of hypothetische situaties uit, terwijl de aantonende wijs feiten of werkelijke gebeurtenissen stelde. Dit onderscheid was belangrijk voor het uitdrukken van verschillende soorten realiteit."
        }
      },
      {
        question: {
          en: "How are relative clauses typically introduced in hieroglyphic Egyptian?",
          es: "¿Cómo se introducen típicamente las cláusulas relativas en egipcio jeroglífico?",
          de: "Wie werden Relativsätze typischerweise im hieroglyphischen Ägyptisch eingeleitet?",
          nl: "Hoe worden betrekkelijke bijzinnen typisch ingevoerd in hiëroglifisch Egyptisch?"
        },
        options: [
          { en: "With relative pronouns like 'who' or 'which'", es: "Con pronombres relativos como 'quien' o 'cual'", de: "Mit Relativpronomen wie 'der' oder 'welcher'", nl: "Met betrekkelijke voornaamwoorden zoals 'die' of 'welke'" },
          { en: "Through participles and specific constructions", es: "A través de participios y construcciones específicas", de: "Durch Partizipien und spezifische Konstruktionen", nl: "Door deelwoorden en specifieke constructies" },
          { en: "Only through word order changes", es: "Solo a través de cambios en el orden de las palabras", de: "Nur durch Wortstellungsänderungen", nl: "Alleen door woordvolgorde veranderingen" },
          { en: "Using question words", es: "Usando palabras interrogativas", de: "Mit Fragewörtern", nl: "Met vraagwoorden" }
        ],
        correct: 1,
        explanation: {
          en: "Relative clauses were typically formed using participles and specific grammatical constructions rather than relative pronouns like in English. The structure was more similar to using verbal adjectives.",
          es: "Las cláusulas relativas se formaban típicamente usando participios y construcciones gramaticales específicas en lugar de pronombres relativos como en español. La estructura era más similar a usar adjetivos verbales.",
          de: "Relativsätze wurden typischerweise mit Partizipien und spezifischen grammatischen Konstruktionen gebildet, nicht mit Relativpronomen wie im Deutschen. Die Struktur war eher wie die Verwendung verbaler Adjektive.",
          nl: "Betrekkelijke bijzinnen werden typisch gevormd met deelwoorden en specifieke grammaticale constructies in plaats van betrekkelijke voornaamwoorden zoals in het Nederlands. De structuur was meer vergelijkbaar met het gebruik van werkwoordelijke bijvoeglijke naamwoorden."
        }
      },
      {
        question: {
          en: "What is the passive voice construction in Egyptian hieroglyphic writing?",
          es: "¿Qué es la construcción de voz pasiva en la escritura jeroglífica egipcia?",
          de: "Was ist die Passivkonstruktion in der ägyptischen hieroglyphischen Schrift?",
          nl: "Wat is de lijdende vorm constructie in Egyptisch hiëroglifisch schrift?"
        },
        options: [
          { en: "Using auxiliary verbs with main verbs", es: "Usando verbos auxiliares con verbos principales", de: "Hilfsverben mit Hauptverben verwenden", nl: "Hulpwerkwoorden gebruiken met hoofdwerkwoorden" },
          { en: "Special verb forms and constructions without expressed agents", es: "Formas verbales especiales y construcciones sin agentes expresos", de: "Spezielle Verbformen und Konstruktionen ohne ausgedrückte Handelnde", nl: "Speciale werkwoordsvormen en constructies zonder uitgedrukte actoren" },
          { en: "Reversing normal word order", es: "Invertir el orden normal de las palabras", de: "Die normale Wortstellung umkehren", nl: "De normale woordvolgorde omkeren" },
          { en: "Adding special determinatives", es: "Agregando determinativos especiales", de: "Spezielle Determinative hinzufügen", nl: "Speciale determinatieven toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "The passive voice used special verb forms and constructions where the subject receives the action rather than performs it, often without explicitly mentioning who performs the action.",
          es: "La voz pasiva usaba formas verbales especiales y construcciones donde el sujeto recibe la acción en lugar de realizarla, a menudo sin mencionar explícitamente quién realiza la acción.",
          de: "Das Passiv verwendete spezielle Verbformen und Konstruktionen, bei denen das Subjekt die Handlung empfängt, anstatt sie auszuführen, oft ohne explizit zu erwähnen, wer die Handlung ausführt.",
          nl: "De lijdende vorm gebruikte speciale werkwoordsvormen en constructies waarbij het onderwerp de handeling ontvangt in plaats van uitvoert, vaak zonder expliciet te vermelden wie de handeling uitvoert."
        }
      },
      {
        question: {
          en: "What does the 'ba' hieroglyph represent in Egyptian beliefs?",
          es: "¿Qué representa el jeroglífico 'ba' en las creencias egipcias?",
          de: "Was stellt die 'Ba'-Hieroglyphe in ägyptischen Glaubensvorstellungen dar?",
          nl: "Wat stelt de 'ba'-hiëroglief voor in Egyptische overtuigingen?"
        },
        options: [
          { en: "The physical body", es: "El cuerpo físico", de: "Der physische Körper", nl: "Het fysieke lichaam" },
          { en: "The personality or soul", es: "La personalidad o alma", de: "Die Persönlichkeit oder Seele", nl: "De persoonlijkheid of ziel" },
          { en: "The name", es: "El nombre", de: "Der Name", nl: "De naam" },
          { en: "The shadow", es: "La sombra", de: "Der Schatten", nl: "De schaduw" }
        ],
        correct: 1,
        explanation: {
          en: "The ba (𓅽) represented the personality or soul of a person in Egyptian belief. Often depicted as a human-headed bird, it could move between the physical and spiritual realms.",
          es: "El ba (𓅽) representaba la personalidad o alma de una persona en la creencia egipcia. A menudo representado como un pájaro con cabeza humana, podía moverse entre los reinos físico y espiritual.",
          de: "Das Ba (𓅽) stellte die Persönlichkeit oder Seele einer Person im ägyptischen Glauben dar. Oft als menschenköpfiger Vogel dargestellt, konnte es zwischen den physischen und spirituellen Bereichen bewegen.",
          nl: "De ba (𓅽) vertegenwoordigde de persoonlijkheid of ziel van een persoon in het Egyptische geloof. Vaak afgebeeld als een vogel met mensenhoofd, kon het bewegen tussen de fysieke en spirituele werelden."
        }
      },
      {
        question: {
          en: "What is the significance of bilateral symmetry in hieroglyphic texts?",
          es: "¿Cuál es la importancia de la simetría bilateral en textos jeroglíficos?",
          de: "Welche Bedeutung hat die bilaterale Symmetrie in hieroglyphischen Texten?",
          nl: "Wat is de betekenis van bilaterale symmetrie in hiëroglifische teksten?"
        },
        options: [
          { en: "It was purely decorative", es: "Era puramente decorativo", de: "Es war rein dekorativ", nl: "Het was puur decoratief" },
          { en: "It created balance and aesthetic harmony, especially on monuments", es: "Creaba equilibrio y armonía estética, especialmente en monumentos", de: "Es schuf Gleichgewicht und ästhetische Harmonie, besonders auf Monumenten", nl: "Het creëerde balans en esthetische harmonie, vooral op monumenten" },
          { en: "It indicated mistakes in writing", es: "Indicaba errores en la escritura", de: "Es zeigte Fehler im Schreiben an", nl: "Het gaf fouten in het schrijven aan" },
          { en: "It was used only for religious texts", es: "Se usaba solo para textos religiosos", de: "Es wurde nur für religiöse Texte verwendet", nl: "Het werd alleen gebruikt voor religieuze teksten" }
        ],
        correct: 1,
        explanation: {
          en: "Bilateral symmetry in hieroglyphic texts, especially on temple walls and monuments, created visual balance and aesthetic harmony. Texts would mirror each other on either side of doorways or central figures, with hieroglyphs facing inward toward the center.",
          es: "La simetría bilateral en textos jeroglíficos, especialmente en paredes de templos y monumentos, creaba equilibrio visual y armonía estética. Los textos se reflejaban entre sí a ambos lados de puertas o figuras centrales, con jeroglíficos mirando hacia el centro.",
          de: "Die bilaterale Symmetrie in hieroglyphischen Texten, besonders an Tempelwänden und Monumenten, schuf visuelles Gleichgewicht und ästhetische Harmonie. Texte spiegelten sich auf beiden Seiten von Türöffnungen oder zentralen Figuren, wobei die Hieroglyphen zur Mitte hin gerichtet waren.",
          nl: "Bilaterale symmetrie in hiëroglifische teksten, vooral op tempelmuren en monumenten, creëerde visuele balans en esthetische harmonie. Teksten spiegelden elkaar aan weerszijden van deuropeningen of centrale figuren, met hiërogliefen die naar het midden keken."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }

  return level6;
})();