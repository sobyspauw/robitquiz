// Cryptography - Level 1: Cipher Basics and Cryptographic Concepts
window.addLevel('mind-bender/cryptography', {
  name: { 
    en: 'Cipher Basics and Cryptographic Concepts', 
    es: 'Fundamentos de Cifrado y Conceptos Criptográficos', 
    de: 'Chiffre-Grundlagen und Kryptografische Konzepte', 
    nl: 'Cipher Basisprincipes en Cryptografische Concepten' 
  },
  questions: [
    {
      question: {
        en: "What is the Caesar cipher also known as?",
        es: "¿Cómo se conoce también al cifrado César?",
        de: "Wie ist die Caesar-Chiffre auch bekannt?",
        nl: "Hoe staat het Caesar-cijfer ook bekend?"
      },
      options: [
        { en: "Shift cipher", es: "Cifrado de desplazamiento", de: "Verschiebechiffre", nl: "Verschuivingscijfer" },
        { en: "Substitution cipher", es: "Cifrado de sustitución", de: "Substitutionschiffre", nl: "Substitutiecijfer" },
        { en: "Vigenère cipher", es: "Cifrado Vigenère", de: "Vigenère-Chiffre", nl: "Vigenère-cijfer" },
        { en: "Playfair cipher", es: "Cifrado Playfair", de: "Playfair-Chiffre", nl: "Playfair-cijfer" }
      ],
      correct: 0,
      explanation: {
        en: "The Caesar cipher is also known as a shift cipher because it shifts each letter by a fixed number of positions in the alphabet. Named after Julius Caesar, who reportedly used it with a shift of 3.",
        es: "El cifrado César también se conoce como cifrado de desplazamiento porque desplaza cada letra un número fijo de posiciones en el alfabeto. Nombrado por Julio César, quien supuestamente lo usó con un desplazamiento de 3.",
        de: "Die Caesar-Chiffre ist auch als Verschiebechiffre bekannt, weil sie jeden Buchstaben um eine feste Anzahl von Positionen im Alphabet verschiebt. Benannt nach Julius Caesar, der es angeblich mit einer Verschiebung von 3 verwendete.",
        nl: "Het Caesar-cijfer staat ook bekend als een verschuivingscijfer omdat het elke letter een vast aantal posities in het alfabet verschuift. Vernoemd naar Julius Caesar, die het naar verluidt gebruikte met een verschuiving van 3."
      }
    },
    {
      question: {
        en: "In cryptography, what does 'plaintext' refer to?",
        es: "En criptografía, ¿a qué se refiere 'texto plano'?",
        de: "Was bezeichnet 'Klartext' in der Kryptographie?",
        nl: "Wat betekent 'platte tekst' in de cryptografie?"
      },
      options: [
        { en: "The encrypted message", es: "El mensaje encriptado", de: "Die verschlüsselte Nachricht", nl: "Het gecodeerde bericht" },
        { en: "The original, unencrypted message", es: "El mensaje original sin encriptar", de: "Die ursprüngliche, unverschlüsselte Nachricht", nl: "Het oorspronkelijke, ongecodeerde bericht" },
        { en: "The encryption key", es: "La clave de encriptación", de: "Der Verschlüsselungsschlüssel", nl: "De coderingssleutel" },
        { en: "The decryption algorithm", es: "El algoritmo de desencriptación", de: "Der Entschlüsselungsalgorithmus", nl: "Het decoderingsalgoritme" }
      ],
      correct: 1,
      explanation: {
        en: "Plaintext is the original, readable message before encryption. It becomes 'ciphertext' after encryption. The process involves transforming plaintext using a key and algorithm.",
        es: "El texto plano es el mensaje original y legible antes del cifrado. Se convierte en 'texto cifrado' después del cifrado. El proceso implica transformar el texto plano usando una clave y algoritmo.",
        de: "Klartext ist die ursprüngliche, lesbare Nachricht vor der Verschlüsselung. Es wird nach der Verschlüsselung zu 'Chiffretext'. Der Prozess beinhaltet die Transformation von Klartext mit einem Schlüssel und Algorithmus.",
        nl: "Platte tekst is het oorspronkelijke, leesbare bericht voor codering. Het wordt 'cijfertekst' na codering. Het proces omvat het transformeren van platte tekst met een sleutel en algoritme."
      }
    },
    {
      question: {
        en: "What is the key length of the ROT13 cipher?",
        es: "¿Cuál es la longitud de clave del cifrado ROT13?",
        de: "Wie lang ist der Schlüssel der ROT13-Chiffre?",
        nl: "Wat is de sleutellengte van het ROT13-cijfer?"
      },
      options: [
        { en: "13", es: "13", de: "13", nl: "13" },
        { en: "26", es: "26", de: "26", nl: "26" },
        { en: "1 (it's fixed)", es: "1 (es fijo)", de: "1 (es ist fest)", nl: "1 (het is vast)" },
        { en: "Variable", es: "Variable", de: "Variabel", nl: "Variabel" }
      ],
      correct: 2,
      explanation: {
        en: "ROT13 uses a fixed rotation of 13 positions, making its key length effectively 1. It's a special case of Caesar cipher where encryption and decryption use the same operation.",
        es: "ROT13 usa una rotación fija de 13 posiciones, haciendo que la longitud de su clave sea efectivamente 1. Es un caso especial del cifrado César donde cifrado y descifrado usan la misma operación.",
        de: "ROT13 verwendet eine feste Rotation von 13 Positionen, wodurch seine Schlüssellänge effektiv 1 ist. Es ist ein Spezialfall der Caesar-Chiffre, bei dem Verschlüsselung und Entschlüsselung dieselbe Operation verwenden.",
        nl: "ROT13 gebruikt een vaste rotatie van 13 posities, waardoor de sleutellengte effectief 1 is. Het is een speciaal geval van het Caesar-cijfer waarbij codering en decodering dezelfde operatie gebruiken."
      }
    },
    {
      question: {
        en: "What makes the Vigenère cipher stronger than a simple Caesar cipher?",
        es: "¿Qué hace que el cifrado Vigenère sea más fuerte que un simple cifrado César?",
        de: "Was macht die Vigenère-Chiffre stärker als eine einfache Caesar-Chiffre?",
        nl: "Wat maakt het Vigenère-cijfer sterker dan een eenvoudig Caesar-cijfer?"
      },
      options: [
        { en: "It uses a longer alphabet", es: "Usa un alfabeto más largo", de: "Es verwendet ein längeres Alphabet", nl: "Het gebruikt een langer alfabet" },
        { en: "It uses a keyword to vary the shift", es: "Usa una palabra clave para variar el desplazamiento", de: "Es verwendet ein Schlüsselwort, um die Verschiebung zu variieren", nl: "Het gebruikt een sleutelwoord om de verschuiving te variëren" },
        { en: "It encrypts numbers as well as letters", es: "Cifra números además de letras", de: "Es verschlüsselt Zahlen sowie Buchstaben", nl: "Het codeert cijfers en letters" },
        { en: "It works backwards through the alphabet", es: "Funciona hacia atrás en el alfabeto", de: "Es arbeitet rückwärts durch das Alphabet", nl: "Het werkt achterwaarts door het alfabet" }
      ],
      correct: 1,
      explanation: {
        en: "The Vigenère cipher uses a repeating keyword to determine different shift values for each letter position, making frequency analysis much more difficult than with Caesar cipher's fixed shift.",
        es: "El cifrado Vigenère usa una palabra clave repetitiva para determinar diferentes valores de desplazamiento para cada posición de letra, haciendo el análisis de frecuencia mucho más difícil que con el desplazamiento fijo del cifrado César.",
        de: "Die Vigenère-Chiffre verwendet ein sich wiederholendes Schlüsselwort, um verschiedene Verschiebungswerte für jede Buchstabenposition zu bestimmen, wodurch die Häufigkeitsanalyse viel schwieriger wird als bei der festen Verschiebung der Caesar-Chiffre.",
        nl: "Het Vigenère-cijfer gebruikt een herhalend sleutelwoord om verschillende verschuivingswaarden voor elke letterpositie te bepalen, waardoor frequentieanalyse veel moeilijker wordt dan bij de vaste verschuiving van het Caesar-cijfer."
      }
    },
    {
      question: {
        en: "What is the main weakness of monoalphabetic substitution ciphers?",
        es: "¿Cuál es la principal debilidad de los cifrados de sustitución monoalfabéticos?",
        de: "Was ist die Hauptschwäche von monoalphabetischen Substitutionschiffren?",
        nl: "Wat is de hoofdzwakte van monoalfabetische substitutiecijfers?"
      },
      options: [
        { en: "They're too slow to encrypt", es: "Son demasiado lentos para cifrar", de: "Sie sind zu langsam zum Verschlüsseln", nl: "Ze zijn te langzaam om te coderen" },
        { en: "They preserve letter frequencies", es: "Preservan las frecuencias de letras", de: "Sie bewahren Buchstabenhäufigkeiten", nl: "Ze behouden letterfrequenties" },
        { en: "They require too much memory", es: "Requieren demasiada memoria", de: "Sie benötigen zu viel Speicher", nl: "Ze vereisen te veel geheugen" },
        { en: "They can only encrypt uppercase letters", es: "Solo pueden cifrar letras mayúsculas", de: "Sie können nur Großbuchstaben verschlüsseln", nl: "Ze kunnen alleen hoofdletters coderen" }
      ],
      correct: 1,
      explanation: {
        en: "Monoalphabetic substitution ciphers maintain the same letter frequency patterns as the original language, making them vulnerable to frequency analysis attacks where common letters can be identified.",
        es: "Los cifrados de sustitución monoalfabéticos mantienen los mismos patrones de frecuencia de letras que el idioma original, haciéndolos vulnerables a ataques de análisis de frecuencia donde se pueden identificar letras comunes.",
        de: "Monoalphabetische Substitutionschiffren behalten dieselben Buchstabenhäufigkeitsmuster wie die ursprüngliche Sprache bei, wodurch sie anfällig für Häufigkeitsanalyse-Angriffe werden, bei denen häufige Buchstaben identifiziert werden können.",
        nl: "Monoalfabetische substitutiecijfers behouden dezelfde letterfrequentiepatronen als de oorspronkelijke taal, waardoor ze kwetsbaar zijn voor frequentieanalyse-aanvallen waarbij veel voorkomende letters kunnen worden geïdentificeerd."
      }
    },
    {
      question: {
        en: "In the Atbash cipher, what letter does 'A' become?",
        es: "En el cifrado Atbash, ¿en qué letra se convierte 'A'?",
        de: "In der Atbash-Chiffre, zu welchem Buchstaben wird 'A'?",
        nl: "In het Atbash-cijfer, welke letter wordt 'A'?"
      },
      options: [
        { en: "B", es: "B", de: "B", nl: "B" },
        { en: "Y", es: "Y", de: "Y", nl: "Y" },
        { en: "Z", es: "Z", de: "Z", nl: "Z" },
        { en: "N", es: "N", de: "N", nl: "N" }
      ],
      correct: 2,
      explanation: {
        en: "The Atbash cipher reverses the alphabet: A↔Z, B↔Y, C↔X, etc. It's one of the oldest known substitution ciphers, originally used for Hebrew text.",
        es: "El cifrado Atbash invierte el alfabeto: A↔Z, B↔Y, C↔X, etc. Es uno de los cifrados de sustitución más antiguos conocidos, usado originalmente para texto hebreo.",
        de: "Die Atbash-Chiffre kehrt das Alphabet um: A↔Z, B↔Y, C↔X, usw. Es ist eine der ältesten bekannten Substitutionschiffren, ursprünglich für hebräischen Text verwendet.",
        nl: "Het Atbash-cijfer keert het alfabet om: A↔Z, B↔Y, C↔X, enz. Het is een van de oudst bekende substitutiecijfers, oorspronkelijk gebruikt voor Hebreeuwse tekst."
      }
    },
    {
      question: {
        en: "What does 'cryptanalysis' mean?",
        es: "¿Qué significa 'criptoanálisis'?",
        de: "Was bedeutet 'Kryptanalyse'?",
        nl: "Wat betekent 'cryptanalyse'?"
      },
      options: [
        { en: "Creating new encryption methods", es: "Crear nuevos métodos de cifrado", de: "Neue Verschlüsselungsmethoden erstellen", nl: "Nieuwe coderingsmethoden creëren" },
        { en: "The art of breaking codes and ciphers", es: "El arte de romper códigos y cifrados", de: "Die Kunst, Codes und Chiffren zu brechen", nl: "De kunst van het breken van codes en cijfers" },
        { en: "Storing encrypted data securely", es: "Almacenar datos cifrados de forma segura", de: "Verschlüsselte Daten sicher speichern", nl: "Gecodeerde gegevens veilig opslaan" },
        { en: "Converting text to binary", es: "Convertir texto a binario", de: "Text in Binär umwandeln", nl: "Tekst naar binair converteren" }
      ],
      correct: 1,
      explanation: {
        en: "Cryptanalysis is the study of analyzing and breaking cryptographic systems. It involves finding weaknesses in encryption methods to recover plaintext without knowing the key.",
        es: "El criptoanálisis es el estudio de analizar y romper sistemas criptográficos. Implica encontrar debilidades en métodos de cifrado para recuperar texto plano sin conocer la clave.",
        de: "Kryptanalyse ist das Studium der Analyse und des Brechens kryptographischer Systeme. Es beinhaltet das Finden von Schwächen in Verschlüsselungsmethoden, um Klartext ohne Kenntnis des Schlüssels zu gewinnen.",
        nl: "Cryptanalyse is de studie van het analyseren en breken van cryptografische systemen. Het houdt in het vinden van zwakke punten in coderingsmethoden om platte tekst te herstellen zonder de sleutel te kennen."
      }
    },
    {
      question: {
        en: "What is a 'polyalphabetic cipher'?",
        es: "¿Qué es un 'cifrado polialfabético'?",
        de: "Was ist eine 'polyalphabetische Chiffre'?",
        nl: "Wat is een 'polyalfabetisch cijfer'?"
      },
      options: [
        { en: "A cipher using multiple alphabets or keys", es: "Un cifrado que usa múltiples alfabetos o claves", de: "Eine Chiffre mit mehreren Alphabeten oder Schlüsseln", nl: "Een cijfer dat meerdere alfabetten of sleutels gebruikt" },
        { en: "A cipher that only works with Greek letters", es: "Un cifrado que solo funciona con letras griegas", de: "Eine Chiffre, die nur mit griechischen Buchstaben funktioniert", nl: "Een cijfer dat alleen werkt met Griekse letters" },
        { en: "A cipher using mathematical polynomials", es: "Un cifrado que usa polinomios matemáticos", de: "Eine Chiffre mit mathematischen Polynomen", nl: "Een cijfer dat wiskundige polynomen gebruikt" },
        { en: "A cipher with variable length keys", es: "Un cifrado con claves de longitud variable", de: "Eine Chiffre mit Schlüsseln variabler Länge", nl: "Een cijfer met sleutels van variabele lengte" }
      ],
      correct: 0,
      explanation: {
        en: "A polyalphabetic cipher uses multiple substitution alphabets or varying keys during encryption, making it more resistant to frequency analysis than monoalphabetic ciphers.",
        es: "Un cifrado polialfabético usa múltiples alfabetos de sustitución o claves variables durante el cifrado, haciéndolo más resistente al análisis de frecuencia que los cifrados monoalfabéticos.",
        de: "Eine polyalphabetische Chiffre verwendet mehrere Substitutionsalphabete oder variierende Schlüssel während der Verschlüsselung, wodurch sie resistenter gegen Häufigkeitsanalyse wird als monoalphabetische Chiffren.",
        nl: "Een polyalfabetisch cijfer gebruikt meerdere substitutie-alfabetten of variërende sleutels tijdens codering, waardoor het resistenter is tegen frequentieanalyse dan monoalfabetische cijfers."
      }
    },
    {
      question: {
        en: "What does the term 'steganography' refer to?",
        es: "¿A qué se refiere el término 'esteganografía'?",
        de: "Worauf bezieht sich der Begriff 'Steganographie'?",
        nl: "Waar verwijst de term 'steganografie' naar?"
      },
      options: [
        { en: "Breaking encryption codes", es: "Romper códigos de cifrado", de: "Verschlüsselungscodes brechen", nl: "Coderingscodes breken" },
        { en: "Hiding messages within other messages", es: "Ocultar mensajes dentro de otros mensajes", de: "Nachrichten in anderen Nachrichten verstecken", nl: "Berichten verbergen in andere berichten" },
        { en: "Creating unbreakable ciphers", es: "Crear cifrados inquebrantables", de: "Unzerbrechliche Chiffren erstellen", nl: "Onbreekbare cijfers creëren" },
        { en: "Writing in ancient languages", es: "Escribir en idiomas antiguos", de: "In alten Sprachen schreiben", nl: "Schrijven in oude talen" }
      ],
      correct: 1,
      explanation: {
        en: "Steganography is the practice of hiding secret messages within ordinary-looking texts, images, or other media. Unlike cryptography which scrambles data, steganography conceals the existence of the message itself.",
        es: "La esteganografía es la práctica de ocultar mensajes secretos dentro de textos, imágenes u otros medios de apariencia ordinaria. A diferencia de la criptografía que mezcla datos, la esteganografía oculta la existencia del mensaje mismo.",
        de: "Steganographie ist die Praxis, geheime Nachrichten in gewöhnlich aussehenden Texten, Bildern oder anderen Medien zu verstecken. Im Gegensatz zur Kryptographie, die Daten verschlüsselt, verbirgt Steganographie die Existenz der Nachricht selbst.",
        nl: "Steganografie is de praktijk van het verbergen van geheime berichten binnen gewoon ogende teksten, afbeeldingen of andere media. In tegenstelling tot cryptografie die gegevens versleutelt, verbergt steganografie het bestaan van het bericht zelf."
      }
    },
    {
      question: {
        en: "In the Rail Fence cipher with 3 rails, where would the first letter be placed?",
        es: "En el cifrado Rail Fence con 3 rieles, ¿dónde se colocaría la primera letra?",
        de: "In der Rail Fence-Chiffre mit 3 Schienen, wo würde der erste Buchstabe platziert werden?",
        nl: "In het Rail Fence-cijfer met 3 rails, waar zou de eerste letter geplaatst worden?"
      },
      options: [
        { en: "Top rail", es: "Riel superior", de: "Obere Schiene", nl: "Bovenste rail" },
        { en: "Middle rail", es: "Riel medio", de: "Mittlere Schiene", nl: "Middelste rail" },
        { en: "Bottom rail", es: "Riel inferior", de: "Untere Schiene", nl: "Onderste rail" },
        { en: "It alternates", es: "Alterna", de: "Es wechselt", nl: "Het wisselt af" }
      ],
      correct: 0,
      explanation: {
        en: "In the Rail Fence cipher, letters are written in a zigzag pattern across multiple rails. The first letter is placed on the top rail, then the pattern moves down and back up.",
        es: "En el cifrado Rail Fence, las letras se escriben en un patrón zigzag a través de múltiples rieles. La primera letra se coloca en el riel superior, luego el patrón baja y sube de nuevo.",
        de: "In der Rail Fence-Chiffre werden Buchstaben in einem Zickzack-Muster über mehrere Schienen geschrieben. Der erste Buchstabe wird auf die obere Schiene gesetzt, dann bewegt sich das Muster nach unten und wieder nach oben.",
        nl: "In het Rail Fence-cijfer worden letters in een zigzag-patroon over meerdere rails geschreven. De eerste letter wordt op de bovenste rail geplaatst, dan beweegt het patroon naar beneden en weer omhoog."
      }
    },
    {
      question: {
        en: "What is the key space of a simple Caesar cipher?",
        es: "¿Cuál es el espacio de claves de un simple cifrado César?",
        de: "Wie groß ist der Schlüsselraum einer einfachen Caesar-Chiffre?",
        nl: "Wat is de sleutelruimte van een eenvoudig Caesar-cijfer?"
      },
      options: [
        { en: "26 possible keys", es: "26 claves posibles", de: "26 mögliche Schlüssel", nl: "26 mogelijke sleutels" },
        { en: "25 possible keys", es: "25 claves posibles", de: "25 mögliche Schlüssel", nl: "25 mogelijke sleutels" },
        { en: "256 possible keys", es: "256 claves posibles", de: "256 mögliche Schlüssel", nl: "256 mogelijke sleutels" },
        { en: "Unlimited keys", es: "Claves ilimitadas", de: "Unbegrenzte Schlüssel", nl: "Onbeperkte sleutels" }
      ],
      correct: 1,
      explanation: {
        en: "A Caesar cipher has 25 useful keys (shifts of 1-25). A shift of 0 leaves text unchanged, and a shift of 26 is equivalent to no shift, so there are effectively 25 possible keys.",
        es: "Un cifrado César tiene 25 claves útiles (desplazamientos de 1-25). Un desplazamiento de 0 deja el texto sin cambios, y un desplazamiento de 26 es equivalente a ningún desplazamiento, así que hay efectivamente 25 claves posibles.",
        de: "Eine Caesar-Chiffre hat 25 nützliche Schlüssel (Verschiebungen von 1-25). Eine Verschiebung von 0 lässt den Text unverändert, und eine Verschiebung von 26 ist gleichbedeutend mit keiner Verschiebung, also gibt es effektiv 25 mögliche Schlüssel.",
        nl: "Een Caesar-cijfer heeft 25 nuttige sleutels (verschuivingen van 1-25). Een verschuiving van 0 laat tekst onveranderd, en een verschuiving van 26 is gelijk aan geen verschuiving, dus er zijn effectief 25 mogelijke sleutels."
      }
    },
    {
      question: {
        en: "What is the main advantage of the one-time pad cipher?",
        es: "¿Cuál es la principal ventaja del cifrado de libreta de un solo uso?",
        de: "Was ist der Hauptvorteil der Einmalschlüssel-Chiffre?",
        nl: "Wat is het hoofdvoordeel van het eenmalig klaverutjescijfer?"
      },
      options: [
        { en: "It's very fast to compute", es: "Es muy rápido de calcular", de: "Es ist sehr schnell zu berechnen", nl: "Het is zeer snel te berekenen" },
        { en: "It's theoretically unbreakable", es: "Es teóricamente inquebrantable", de: "Es ist theoretisch unzerbrechlich", nl: "Het is theoretisch onbreekbaar" },
        { en: "It requires no key", es: "No requiere clave", de: "Es benötigt keinen Schlüssel", nl: "Het vereist geen sleutel" },
        { en: "It works with any alphabet", es: "Funciona con cualquier alfabeto", de: "Es funktioniert mit jedem Alphabet", nl: "Het werkt met elk alfabet" }
      ],
      correct: 1,
      explanation: {
        en: "The one-time pad provides perfect secrecy when used correctly - it's mathematically proven to be unbreakable if the key is truly random, as long as the plaintext, and used only once.",
        es: "La libreta de un solo uso proporciona secreto perfecto cuando se usa correctamente - está matemáticamente probado que es inquebrantable si la clave es verdaderamente aleatoria, tan larga como el texto plano, y usada solo una vez.",
        de: "Der Einmalschlüssel bietet perfekte Geheimhaltung bei korrekter Verwendung - es ist mathematisch bewiesen, dass er unzerbrechlich ist, wenn der Schlüssel wirklich zufällig, so lang wie der Klartext und nur einmal verwendet wird.",
        nl: "Het eenmalig klaverut biedt perfecte geheimhouding wanneer correct gebruikt - het is wiskundig bewezen onbreekbaar te zijn als de sleutel werkelijk willekeurig is, zo lang als de platte tekst, en slechts eenmaal gebruikt."
      }
    },
    {
      question: {
        en: "What is 'frequency analysis' in cryptanalysis?",
        es: "¿Qué es el 'análisis de frecuencia' en criptoanálisis?",
        de: "Was ist 'Häufigkeitsanalyse' in der Kryptanalyse?",
        nl: "Wat is 'frequentieanalyse' in cryptanalyse?"
      },
      options: [
        { en: "Analyzing how often ciphers are used", es: "Analizar con qué frecuencia se usan los cifrados", de: "Analysieren, wie oft Chiffren verwendet werden", nl: "Analyseren hoe vaak cijfers worden gebruikt" },
        { en: "Studying letter frequency patterns in ciphertext", es: "Estudiar patrones de frecuencia de letras en texto cifrado", de: "Buchstabenhäufigkeitsmuster im Chiffretext studieren", nl: "Letterfrequentiepatronen in cijfertekst bestuderen" },
        { en: "Measuring encryption speed", es: "Medir la velocidad de cifrado", de: "Verschlüsselungsgeschwindigkeit messen", nl: "Coderingssnelheid meten" },
        { en: "Counting the number of keys", es: "Contar el número de claves", de: "Die Anzahl der Schlüssel zählen", nl: "Het aantal sleutels tellen" }
      ],
      correct: 1,
      explanation: {
        en: "Frequency analysis examines how often each letter appears in ciphertext and compares it to known letter frequencies in the target language to help break substitution ciphers.",
        es: "El análisis de frecuencia examina con qué frecuencia aparece cada letra en el texto cifrado y lo compara con frecuencias de letras conocidas en el idioma objetivo para ayudar a romper cifrados de sustitución.",
        de: "Häufigkeitsanalyse untersucht, wie oft jeder Buchstabe im Chiffretext erscheint und vergleicht es mit bekannten Buchstabenhäufigkeiten in der Zielsprache, um Substitutionschiffren zu brechen.",
        nl: "Frequentieanalyse onderzoekt hoe vaak elke letter verschijnt in cijfertekst en vergelijkt dit met bekende letterfrequenties in de doeltaal om substitutiecijfers te breken."
      }
    },
    {
      question: {
        en: "In the Playfair cipher, how are letters arranged?",
        es: "En el cifrado Playfair, ¿cómo se organizan las letras?",
        de: "In der Playfair-Chiffre, wie werden Buchstaben angeordnet?",
        nl: "In het Playfair-cijfer, hoe worden letters gerangschikt?"
      },
      options: [
        { en: "In a single row", es: "En una sola fila", de: "In einer einzigen Reihe", nl: "In een enkele rij" },
        { en: "In a 5×5 grid", es: "En una cuadrícula de 5×5", de: "In einem 5×5-Gitter", nl: "In een 5×5 rooster" },
        { en: "In alphabetical order", es: "En orden alfabético", de: "In alphabetischer Reihenfolge", nl: "In alfabetische volgorde" },
        { en: "Randomly scattered", es: "Dispersas aleatoriamente", de: "Zufällig verstreut", nl: "Willekeurig verspreid" }
      ],
      correct: 1,
      explanation: {
        en: "The Playfair cipher uses a 5×5 grid filled with letters (I and J usually share a space). The grid is typically filled using a keyword followed by the remaining letters of the alphabet.",
        es: "El cifrado Playfair usa una cuadrícula de 5×5 llena de letras (I y J usualmente comparten un espacio). La cuadrícula típicamente se llena usando una palabra clave seguida de las letras restantes del alfabeto.",
        de: "Die Playfair-Chiffre verwendet ein 5×5-Gitter, das mit Buchstaben gefüllt ist (I und J teilen sich normalerweise einen Platz). Das Gitter wird typischerweise mit einem Schlüsselwort gefüllt, gefolgt von den verbleibenden Buchstaben des Alphabets.",
        nl: "Het Playfair-cijfer gebruikt een 5×5 rooster gevuld met letters (I en J delen meestal een ruimte). Het rooster wordt meestal gevuld met een sleutelwoord gevolgd door de overige letters van het alfabet."
      }
    },
    {
      question: {
        en: "What is a 'null cipher'?",
        es: "¿Qué es un 'cifrado nulo'?",
        de: "Was ist eine 'Null-Chiffre'?",
        nl: "Wat is een 'nulcijfer'?"
      },
      options: [
        { en: "A cipher with no encryption", es: "Un cifrado sin encriptación", de: "Eine Chiffre ohne Verschlüsselung", nl: "Een cijfer zonder codering" },
        { en: "A cipher where the message is hidden within innocent text", es: "Un cifrado donde el mensaje se oculta dentro de texto inocente", de: "Eine Chiffre, bei der die Nachricht in unschuldigem Text versteckt ist", nl: "Een cijfer waarbij het bericht verborgen is in onschuldige tekst" },
        { en: "A cipher that produces no output", es: "Un cifrado que no produce salida", de: "Eine Chiffre, die keine Ausgabe produziert", nl: "Een cijfer dat geen uitvoer produceert" },
        { en: "A broken cipher system", es: "Un sistema de cifrado roto", de: "Ein gebrochenes Chiffresystem", nl: "Een gebroken cijfersysteem" }
      ],
      correct: 1,
      explanation: {
        en: "A null cipher hides the real message within seemingly innocent text, often using specific letter positions, first letters of words, or other patterns to spell out the secret message.",
        es: "Un cifrado nulo oculta el mensaje real dentro de texto aparentemente inocente, a menudo usando posiciones específicas de letras, primeras letras de palabras, u otros patrones para deletrear el mensaje secreto.",
        de: "Eine Null-Chiffre versteckt die echte Nachricht in scheinbar unschuldigem Text, oft unter Verwendung spezifischer Buchstabenpositionen, ersten Buchstaben von Wörtern oder anderen Mustern, um die geheime Nachricht zu buchstabieren.",
        nl: "Een nulcijfer verbergt het echte bericht in schijnbaar onschuldige tekst, vaak gebruikmakend van specifieke letterposities, eerste letters van woorden, of andere patronen om het geheime bericht te spellen."
      }
    },
    {
      question: {
        en: "What is the key requirement for the Vigenère cipher?",
        es: "¿Cuál es el requisito clave para el cifrado Vigenère?",
        de: "Was ist die Schlüsselanforderung für die Vigenère-Chiffre?",
        nl: "Wat is de sleutelvereiste voor het Vigenère-cijfer?"
      },
      options: [
        { en: "A numeric password", es: "Una contraseña numérica", de: "Ein numerisches Passwort", nl: "Een numeriek wachtwoord" },
        { en: "A keyword or phrase", es: "Una palabra clave o frase", de: "Ein Schlüsselwort oder Phrase", nl: "Een sleutelwoord of zin" },
        { en: "A mathematical formula", es: "Una fórmula matemática", de: "Eine mathematische Formel", nl: "Een wiskundige formule" },
        { en: "A physical device", es: "Un dispositivo físico", de: "Ein physisches Gerät", nl: "Een fysiek apparaat" }
      ],
      correct: 1,
      explanation: {
        en: "The Vigenère cipher requires a keyword or phrase that is repeated to match the length of the plaintext. Each letter of the keyword determines the shift amount for the corresponding plaintext letter.",
        es: "El cifrado Vigenère requiere una palabra clave o frase que se repite para igualar la longitud del texto plano. Cada letra de la palabra clave determina la cantidad de desplazamiento para la letra correspondiente del texto plano.",
        de: "Die Vigenère-Chiffre benötigt ein Schlüsselwort oder eine Phrase, die wiederholt wird, um der Länge des Klartexts zu entsprechen. Jeder Buchstabe des Schlüsselworts bestimmt die Verschiebungsmenge für den entsprechenden Klartextbuchstaben.",
        nl: "Het Vigenère-cijfer vereist een sleutelwoord of zin die wordt herhaald om overeen te komen met de lengte van de platte tekst. Elke letter van het sleutelwoord bepaalt de verschuivingshoeveelheid voor de corresponderende platte tekst letter."
      }
    },
    {
      question: {
        en: "What does 'ciphertext' refer to in cryptography?",
        es: "¿A qué se refiere 'texto cifrado' en criptografía?",
        de: "Worauf bezieht sich 'Chiffretext' in der Kryptographie?",
        nl: "Waar verwijst 'cijfertekst' naar in cryptografie?"
      },
      options: [
        { en: "The original message before encryption", es: "El mensaje original antes del cifrado", de: "Die ursprüngliche Nachricht vor der Verschlüsselung", nl: "Het oorspronkelijke bericht voor codering" },
        { en: "The encrypted message", es: "El mensaje encriptado", de: "Die verschlüsselte Nachricht", nl: "Het gecodeerde bericht" },
        { en: "The encryption key", es: "La clave de encriptación", de: "Der Verschlüsselungsschlüssel", nl: "De coderingssleutel" },
        { en: "The decryption algorithm", es: "El algoritmo de desencriptación", de: "Der Entschlüsselungsalgorithmus", nl: "Het decoderingsalgoritme" }
      ],
      correct: 1,
      explanation: {
        en: "Ciphertext is the encrypted form of the original message (plaintext). It appears scrambled and unreadable without the proper key and decryption method.",
        es: "El texto cifrado es la forma encriptada del mensaje original (texto plano). Aparece mezclado e ilegible sin la clave apropiada y el método de descifrado.",
        de: "Chiffretext ist die verschlüsselte Form der ursprünglichen Nachricht (Klartext). Er erscheint durcheinander und unlesbar ohne den richtigen Schlüssel und die Entschlüsselungsmethode.",
        nl: "Cijfertekst is de gecodeerde vorm van het oorspronkelijke bericht (platte tekst). Het lijkt verward en onleesbaar zonder de juiste sleutel en decoderingsmethode."
      }
    },
    {
      question: {
        en: "What is the main purpose of a 'transposition cipher'?",
        es: "¿Cuál es el propósito principal de un 'cifrado de transposición'?",
        de: "Was ist der Hauptzweck einer 'Transpositionschiffre'?",
        nl: "Wat is het hoofddoel van een 'transpositiecijfer'?"
      },
      options: [
        { en: "To substitute letters with numbers", es: "Sustituir letras con números", de: "Buchstaben durch Zahlen ersetzen", nl: "Letters vervangen door cijfers" },
        { en: "To rearrange the order of letters", es: "Reorganizar el orden de las letras", de: "Die Reihenfolge der Buchstaben neu ordnen", nl: "De volgorde van letters herschikken" },
        { en: "To change letters to symbols", es: "Cambiar letras a símbolos", de: "Buchstaben zu Symbolen ändern", nl: "Letters veranderen in symbolen" },
        { en: "To add extra letters", es: "Agregar letras adicionales", de: "Zusätzliche Buchstaben hinzufügen", nl: "Extra letters toevoegen" }
      ],
      correct: 1,
      explanation: {
        en: "Transposition ciphers rearrange the order of letters in the plaintext without changing the letters themselves. Examples include the Rail Fence cipher and columnar transposition.",
        es: "Los cifrados de transposición reorganizan el orden de las letras en el texto plano sin cambiar las letras mismas. Ejemplos incluyen el cifrado Rail Fence y la transposición columnar.",
        de: "Transpositionschiffren ordnen die Reihenfolge der Buchstaben im Klartext neu, ohne die Buchstaben selbst zu ändern. Beispiele sind die Rail Fence-Chiffre und Spaltentransposition.",
        nl: "Transpositiecijfers herschikken de volgorde van letters in de platte tekst zonder de letters zelf te veranderen. Voorbeelden zijn het Rail Fence-cijfer en kolomtranspositie."
      }
    },
    {
      question: {
        en: "In a simple substitution cipher, each letter is replaced by:",
        es: "En un cifrado de sustitución simple, cada letra es reemplazada por:",
        de: "In einer einfachen Substitutionschiffre wird jeder Buchstabe ersetzt durch:",
        nl: "In een eenvoudig substitutiecijfer wordt elke letter vervangen door:"
      },
      options: [
        { en: "A different letter consistently", es: "Una letra diferente consistentemente", de: "Einen anderen Buchstaben konsistent", nl: "Een andere letter consequent" },
        { en: "A random letter each time", es: "Una letra aleatoria cada vez", de: "Einen zufälligen Buchstaben jedes Mal", nl: "Een willekeurige letter elke keer" },
        { en: "Multiple different letters", es: "Múltiples letras diferentes", de: "Mehrere verschiedene Buchstaben", nl: "Meerdere verschillende letters" },
        { en: "The same letter", es: "La misma letra", de: "Denselben Buchstaben", nl: "Dezelfde letter" }
      ],
      correct: 0,
      explanation: {
        en: "In a simple (monoalphabetic) substitution cipher, each letter of the plaintext is consistently replaced by the same letter throughout the entire message, creating a one-to-one mapping.",
        es: "En un cifrado de sustitución simple (monoalfabético), cada letra del texto plano es consistentemente reemplazada por la misma letra en todo el mensaje, creando un mapeo uno a uno.",
        de: "In einer einfachen (monoalphabetischen) Substitutionschiffre wird jeder Buchstabe des Klartexts konsistent durch denselben Buchstaben in der gesamten Nachricht ersetzt, wodurch eine Eins-zu-Eins-Zuordnung entsteht.",
        nl: "In een eenvoudig (monoalfabetisch) substitutiecijfer wordt elke letter van de platte tekst consequent vervangen door dezelfde letter door het hele bericht, wat een één-op-één mapping creëert."
      }
    },
    {
      question: {
        en: "What is the 'Kasiski examination'?",
        es: "¿Qué es el 'examen de Kasiski'?",
        de: "Was ist die 'Kasiski-Untersuchung'?",
        nl: "Wat is het 'Kasiski-onderzoek'?"
      },
      options: [
        { en: "A method to create stronger ciphers", es: "Un método para crear cifrados más fuertes", de: "Eine Methode zur Erstellung stärkerer Chiffren", nl: "Een methode om sterkere cijfers te maken" },
        { en: "A technique to find the key length in Vigenère ciphers", es: "Una técnica para encontrar la longitud de clave en cifrados Vigenère", de: "Eine Technik zur Bestimmung der Schlüssellänge in Vigenère-Chiffren", nl: "Een techniek om de sleutellengte in Vigenère-cijfers te vinden" },
        { en: "A type of substitution cipher", es: "Un tipo de cifrado de sustitución", de: "Eine Art Substitutionschiffre", nl: "Een type substitutiecijfer" },
        { en: "A physical encryption device", es: "Un dispositivo de cifrado físico", de: "Ein physisches Verschlüsselungsgerät", nl: "Een fysiek coderingsapparaat" }
      ],
      correct: 1,
      explanation: {
        en: "The Kasiski examination looks for repeated sequences in Vigenère ciphertext. The distances between these repetitions often reveal the key length, making the cipher vulnerable to further analysis.",
        es: "El examen de Kasiski busca secuencias repetidas en el texto cifrado Vigenère. Las distancias entre estas repeticiones a menudo revelan la longitud de la clave, haciendo el cifrado vulnerable a análisis posterior.",
        de: "Die Kasiski-Untersuchung sucht nach wiederholten Sequenzen im Vigenère-Chiffretext. Die Abstände zwischen diesen Wiederholungen offenbaren oft die Schlüssellänge, wodurch die Chiffre für weitere Analysen anfällig wird.",
        nl: "Het Kasiski-onderzoek zoekt naar herhaalde sequenties in Vigenère-cijfertekst. De afstanden tussen deze herhalingen onthullen vaak de sleutellengte, waardoor het cijfer kwetsbaar wordt voor verdere analyse."
      }
    },
    {
      question: {
        en: "What is a 'block cipher'?",
        es: "¿Qué es un 'cifrado de bloque'?",
        de: "Was ist eine 'Blockchiffre'?",
        nl: "Wat is een 'blokcijfer'?"
      },
      options: [
        { en: "A cipher that encrypts one letter at a time", es: "Un cifrado que encripta una letra a la vez", de: "Eine Chiffre, die einen Buchstaben nach dem anderen verschlüsselt", nl: "Een cijfer dat één letter tegelijk codeert" },
        { en: "A cipher that encrypts fixed-size blocks of data", es: "Un cifrado que encripta bloques de datos de tamaño fijo", de: "Eine Chiffre, die Datenblöcke fester Größe verschlüsselt", nl: "Een cijfer dat blokken van vaste grootte gegevens codeert" },
        { en: "A cipher used only for numbers", es: "Un cifrado usado solo para números", de: "Eine Chiffre, die nur für Zahlen verwendet wird", nl: "Een cijfer dat alleen voor cijfers wordt gebruikt" },
        { en: "A cipher that blocks unauthorized access", es: "Un cifrado que bloquea el acceso no autorizado", de: "Eine Chiffre, die unbefugten Zugriff blockiert", nl: "Een cijfer dat ongeautoriseerde toegang blokkeert" }
      ],
      correct: 1,
      explanation: {
        en: "A block cipher encrypts data in fixed-size chunks (blocks), typically 64 or 128 bits. Examples include DES, AES, and Blowfish. This differs from stream ciphers that encrypt one bit or byte at a time.",
        es: "Un cifrado de bloque encripta datos en trozos de tamaño fijo (bloques), típicamente 64 o 128 bits. Ejemplos incluyen DES, AES, y Blowfish. Esto difiere de los cifrados de flujo que encriptan un bit o byte a la vez.",
        de: "Eine Blockchiffre verschlüsselt Daten in Blöcken fester Größe, typischerweise 64 oder 128 Bits. Beispiele sind DES, AES und Blowfish. Dies unterscheidet sich von Stromchiffren, die ein Bit oder Byte nach dem anderen verschlüsseln.",
        nl: "Een blokcijfer codeert gegevens in brokken van vaste grootte (blokken), meestal 64 of 128 bits. Voorbeelden zijn DES, AES, en Blowfish. Dit verschilt van stroomcijfers die één bit of byte tegelijk coderen."
      }
    },
    {
      question: {
        en: "What does 'cryptographic key' mean?",
        es: "¿Qué significa 'clave criptográfica'?",
        de: "Was bedeutet 'kryptographischer Schlüssel'?",
        nl: "Wat betekent 'cryptografische sleutel'?"
      },
      options: [
        { en: "A physical lock mechanism", es: "Un mecanismo de cerradura física", de: "Ein physischer Schlossmechanismus", nl: "Een fysiek slotmechanisme" },
        { en: "The secret information used to encrypt/decrypt", es: "La información secreta usada para encriptar/desencriptar", de: "Die geheime Information zur Ver-/Entschlüsselung", nl: "De geheime informatie gebruikt om te coderen/decoderen" },
        { en: "The algorithm used for encryption", es: "El algoritmo usado para encriptación", de: "Der Algorithmus für die Verschlüsselung", nl: "Het algoritme gebruikt voor codering" },
        { en: "The computer program that encrypts data", es: "El programa de computadora que encripta datos", de: "Das Computerprogramm, das Daten verschlüsselt", nl: "Het computerprogramma dat gegevens codeert" }
      ],
      correct: 1,
      explanation: {
        en: "A cryptographic key is the secret piece of information (usually a string of characters or numbers) that controls the encryption and decryption process in a cryptographic algorithm.",
        es: "Una clave criptográfica es la pieza secreta de información (usualmente una cadena de caracteres o números) que controla el proceso de encriptación y desencriptación en un algoritmo criptográfico.",
        de: "Ein kryptographischer Schlüssel ist die geheime Information (normalerweise eine Zeichenfolge oder Zahlen), die den Ver- und Entschlüsselungsprozess in einem kryptographischen Algorithmus steuert.",
        nl: "Een cryptografische sleutel is het geheime stukje informatie (meestal een reeks tekens of cijfers) dat het coderings- en decoderingsproces in een cryptografisch algoritme controleert."
      }
    },
    {
      question: {
        en: "What is the main disadvantage of the one-time pad?",
        es: "¿Cuál es la principal desventaja de la libreta de un solo uso?",
        de: "Was ist der Hauptnachteil des Einmalschlüssels?",
        nl: "Wat is het hoofdnadeel van het eenmalig klaverut?"
      },
      options: [
        { en: "It's too slow", es: "Es demasiado lento", de: "Es ist zu langsam", nl: "Het is te langzaam" },
        { en: "It's easily broken", es: "Se rompe fácilmente", de: "Es ist leicht zu brechen", nl: "Het is gemakkelijk te breken" },
        { en: "Key distribution and management", es: "Distribución y gestión de claves", de: "Schlüsselverteilung und -verwaltung", nl: "Sleuteldistributie en -beheer" },
        { en: "It only works with numbers", es: "Solo funciona con números", de: "Es funktioniert nur mit Zahlen", nl: "Het werkt alleen met cijfers" }
      ],
      correct: 2,
      explanation: {
        en: "The one-time pad requires a key as long as the message, truly random generation, and secure distribution of keys. Managing and distributing these large, unique keys securely is extremely challenging.",
        es: "La libreta de un solo uso requiere una clave tan larga como el mensaje, generación verdaderamente aleatoria, y distribución segura de claves. Gestionar y distribuir estas claves grandes y únicas de manera segura es extremadamente desafiante.",
        de: "Der Einmalschlüssel benötigt einen Schlüssel so lang wie die Nachricht, wirklich zufällige Erzeugung und sichere Verteilung der Schlüssel. Die sichere Verwaltung und Verteilung dieser großen, einzigartigen Schlüssel ist extrem herausfordernd.",
        nl: "Het eenmalig klaverut vereist een sleutel zo lang als het bericht, werkelijk willekeurige generatie, en veilige distributie van sleutels. Het beheren en distribueren van deze grote, unieke sleutels op veilige wijze is uiterst uitdagend."
      }
    },
    {
      question: {
        en: "What is 'symmetric encryption'?",
        es: "¿Qué es la 'encriptación simétrica'?",
        de: "Was ist 'symmetrische Verschlüsselung'?",
        nl: "Wat is 'symmetrische codering'?"
      },
      options: [
        { en: "Encryption that uses the same key for both encryption and decryption", es: "Encriptación que usa la misma clave para cifrado y descifrado", de: "Verschlüsselung, die denselben Schlüssel für Ver- und Entschlüsselung verwendet", nl: "Codering die dezelfde sleutel gebruikt voor zowel codering als decodering" },
        { en: "Encryption that creates mirror images", es: "Encriptación que crea imágenes espejo", de: "Verschlüsselung, die Spiegelbilder erstellt", nl: "Codering die spiegelbeelden creëert" },
        { en: "Encryption using two different keys", es: "Encriptación usando dos claves diferentes", de: "Verschlüsselung mit zwei verschiedenen Schlüsseln", nl: "Codering met twee verschillende sleutels" },
        { en: "Encryption that works in both directions", es: "Encriptación que funciona en ambas direcciones", de: "Verschlüsselung, die in beide Richtungen funktioniert", nl: "Codering die in beide richtingen werkt" }
      ],
      correct: 0,
      explanation: {
        en: "Symmetric encryption uses the same key for both encryption and decryption. Both parties must have the same secret key. Examples include AES, DES, and classical ciphers like Caesar and Vigenère.",
        es: "La encriptación simétrica usa la misma clave para cifrado y descifrado. Ambas partes deben tener la misma clave secreta. Ejemplos incluyen AES, DES, y cifrados clásicos como César y Vigenère.",
        de: "Symmetrische Verschlüsselung verwendet denselben Schlüssel für Ver- und Entschlüsselung. Beide Parteien müssen denselben geheimen Schlüssel haben. Beispiele sind AES, DES und klassische Chiffren wie Caesar und Vigenère.",
        nl: "Symmetrische codering gebruikt dezelfde sleutel voor zowel codering als decodering. Beide partijen moeten dezelfde geheime sleutel hebben. Voorbeelden zijn AES, DES, en klassieke cijfers zoals Caesar en Vigenère."
      }
    },
    {
      question: {
        en: "What is the 'Enigma machine'?",
        es: "¿Qué es la 'máquina Enigma'?",
        de: "Was ist die 'Enigma-Maschine'?",
        nl: "Wat is de 'Enigma-machine'?"
      },
      options: [
        { en: "A modern computer encryption program", es: "Un programa moderno de encriptación por computadora", de: "Ein modernes Computer-Verschlüsselungsprogramm", nl: "Een modern computercoderingsrogramma" },
        { en: "A mechanical cipher device used in WWII", es: "Un dispositivo de cifrado mecánico usado en la Segunda Guerra Mundial", de: "Ein mechanisches Chiffriergerät aus dem Zweiten Weltkrieg", nl: "Een mechanisch cijferapparaat gebruikt in WOII" },
        { en: "A type of substitution cipher", es: "Un tipo de cifrado de sustitución", de: "Eine Art Substitutionschiffre", nl: "Een type substitutiecijfer" },
        { en: "A puzzle game", es: "Un juego de rompecabezas", de: "Ein Puzzlespiel", nl: "Een puzzelspel" }
      ],
      correct: 1,
      explanation: {
        en: "The Enigma machine was an electro-mechanical rotor cipher machine used by Nazi Germany during World War II. Breaking Enigma was a crucial achievement in Allied cryptanalysis efforts.",
        es: "La máquina Enigma era un dispositivo de cifrado electromecánico de rotor usado por la Alemania Nazi durante la Segunda Guerra Mundial. Romper Enigma fue un logro crucial en los esfuerzos de criptoanálisis de los Aliados.",
        de: "Die Enigma-Maschine war ein elektromechanisches Rotor-Chiffriergerät, das von Nazi-Deutschland während des Zweiten Weltkriegs verwendet wurde. Das Brechen von Enigma war ein entscheidender Erfolg in den Kryptanalyse-Bemühungen der Alliierten.",
        nl: "De Enigma-machine was een elektromechanisch rotor-cijferapparaat gebruikt door Nazi-Duitsland tijdens de Tweede Wereldoorlog. Het breken van Enigma was een cruciale prestatie in de geallieerde cryptanalyse-inspanningen."
      }
    },
    {
      question: {
        en: "In cryptography, what is 'entropy'?",
        es: "En criptografía, ¿qué es la 'entropía'?",
        de: "Was ist 'Entropie' in der Kryptographie?",
        nl: "Wat is 'entropie' in de cryptografie?"
      },
      options: [
        { en: "The speed of encryption", es: "La velocidad de encriptación", de: "Die Verschlüsselungsgeschwindigkeit", nl: "De coderingssnelheid" },
        { en: "The randomness or unpredictability of data", es: "La aleatoriedad o impredecibilidad de los datos", de: "Die Zufälligkeit oder Unvorhersagbarkeit von Daten", nl: "De willekeurigheid of onvoorspelbaarheid van gegevens" },
        { en: "The length of the encryption key", es: "La longitud de la clave de encriptación", de: "Die Länge des Verschlüsselungsschlüssels", nl: "De lengte van de coderingssleutel" },
        { en: "The complexity of the algorithm", es: "La complejidad del algoritmo", de: "Die Komplexität des Algorithmus", nl: "De complexiteit van het algoritme" }
      ],
      correct: 1,
      explanation: {
        en: "In cryptography, entropy measures the randomness or unpredictability of data. High entropy means the data is very random and hard to predict, which is crucial for secure keys and initialization vectors.",
        es: "En criptografía, la entropía mide la aleatoriedad o impredecibilidad de los datos. Alta entropía significa que los datos son muy aleatorios y difíciles de predecir, lo cual es crucial para claves seguras y vectores de inicialización.",
        de: "In der Kryptographie misst Entropie die Zufälligkeit oder Unvorhersagbarkeit von Daten. Hohe Entropie bedeutet, dass die Daten sehr zufällig und schwer vorhersagbar sind, was für sichere Schlüssel und Initialisierungsvektoren entscheidend ist.",
        nl: "In cryptografie meet entropie de willekeurigheid of onvoorspelbaarheid van gegevens. Hoge entropie betekent dat de gegevens zeer willekeurig en moeilijk te voorspellen zijn, wat cruciaal is voor veilige sleutels en initialisatievectoren."
      }
    },
    {
      question: {
        en: "What is a 'substitution-permutation network'?",
        es: "¿Qué es una 'red de sustitución-permutación'?",
        de: "Was ist ein 'Substitutions-Permutations-Netzwerk'?",
        nl: "Wat is een 'substitutie-permutatie-netwerk'?"
      },
      options: [
        { en: "A type of computer network", es: "Un tipo de red de computadoras", de: "Eine Art Computernetzwerk", nl: "Een type computernetwerk" },
        { en: "A cryptographic structure alternating substitution and permutation", es: "Una estructura criptográfica que alterna sustitución y permutación", de: "Eine kryptographische Struktur, die Substitution und Permutation abwechselt", nl: "Een cryptografische structuur die substitutie en permutatie afwisselt" },
        { en: "A mathematical theorem", es: "Un teorema matemático", de: "Ein mathematischer Satz", nl: "Een wiskundige stelling" },
        { en: "A password generation method", es: "Un método de generación de contraseñas", de: "Eine Passwort-Generierungsmethode", nl: "Een wachtwoordgeneratiemethode" }
      ],
      correct: 1,
      explanation: {
        en: "A substitution-permutation network (SPN) is a cryptographic structure that alternates substitution operations (S-boxes) and permutation operations (P-boxes) across multiple rounds, used in modern block ciphers like AES.",
        es: "Una red de sustitución-permutación (SPN) es una estructura criptográfica que alterna operaciones de sustitución (S-boxes) y operaciones de permutación (P-boxes) a través de múltiples rondas, usada en cifrados de bloque modernos como AES.",
        de: "Ein Substitutions-Permutations-Netzwerk (SPN) ist eine kryptographische Struktur, die Substitutionsoperationen (S-Boxen) und Permutationsoperationen (P-Boxen) über mehrere Runden abwechselt, verwendet in modernen Blockchiffren wie AES.",
        nl: "Een substitutie-permutatie-netwerk (SPN) is een cryptografische structuur die substitutie-operaties (S-boxen) en permutatie-operaties (P-boxen) afwisselt over meerdere rondes, gebruikt in moderne blokcijfers zoals AES."
      }
    },
    {
      question: {
        en: "What is the purpose of 'key stretching' in cryptography?",
        es: "¿Cuál es el propósito del 'estiramiento de clave' en criptografía?",
        de: "Was ist der Zweck von 'Schlüsselstreckung' in der Kryptographie?",
        nl: "Wat is het doel van 'sleutelverlenging' in cryptografie?"
      },
      options: [
        { en: "To make keys physically longer", es: "Hacer las claves físicamente más largas", de: "Schlüssel physisch länger machen", nl: "Sleutels fysiek langer maken" },
        { en: "To slow down brute force attacks", es: "Ralentizar ataques de fuerza bruta", de: "Brute-Force-Angriffe verlangsamen", nl: "Brute force aanvallen vertragen" },
        { en: "To compress encryption keys", es: "Comprimir claves de encriptación", de: "Verschlüsselungsschlüssel komprimieren", nl: "Coderingssleutels comprimeren" },
        { en: "To share keys across networks", es: "Compartir claves a través de redes", de: "Schlüssel über Netzwerke teilen", nl: "Sleutels delen over netwerken" }
      ],
      correct: 1,
      explanation: {
        en: "Key stretching makes password-based keys more secure by intentionally slowing down the key derivation process, making brute force attacks computationally expensive. Examples include PBKDF2 and bcrypt.",
        es: "El estiramiento de clave hace que las claves basadas en contraseñas sean más seguras al ralentizar intencionalmente el proceso de derivación de clave, haciendo que los ataques de fuerza bruta sean computacionalmente costosos. Ejemplos incluyen PBKDF2 y bcrypt.",
        de: "Schlüsselstreckung macht passwortbasierte Schlüssel sicherer, indem sie absichtlich den Schlüsselableitungsprozess verlangsamt und Brute-Force-Angriffe rechnerisch teuer macht. Beispiele sind PBKDF2 und bcrypt.",
        nl: "Sleutelverlenging maakt wachtwoord-gebaseerde sleutels veiliger door opzettelijk het sleutelafleiding proces te vertragen, waardoor brute force aanvallen computationeel duur worden. Voorbeelden zijn PBKDF2 en bcrypt."
      }
    },
    {
      question: {
        en: "What is a 'nonce' in cryptography?",
        es: "¿Qué es un 'nonce' en criptografía?",
        de: "Was ist eine 'Nonce' in der Kryptographie?",
        nl: "Wat is een 'nonce' in cryptografie?"
      },
      options: [
        { en: "A type of encryption algorithm", es: "Un tipo de algoritmo de encriptación", de: "Eine Art Verschlüsselungsalgorithmus", nl: "Een type coderingsalgoritme" },
        { en: "A number used only once", es: "Un número usado solo una vez", de: "Eine Zahl, die nur einmal verwendet wird", nl: "Een getal dat slechts eenmaal wordt gebruikt" },
        { en: "A broken encryption method", es: "Un método de encriptación roto", de: "Eine gebrochene Verschlüsselungsmethode", nl: "Een gebroken coderingsmethode" },
        { en: "A password replacement", es: "Un reemplazo de contraseña", de: "Ein Passwort-Ersatz", nl: "Een wachtwoordvervanging" }
      ],
      correct: 1,
      explanation: {
        en: "A nonce (number used once) is a random or pseudo-random number used only once in cryptographic communications. It prevents replay attacks and ensures that each encryption operation produces different output even with the same input.",
        es: "Un nonce (número usado una vez) es un número aleatorio o pseudo-aleatorio usado solo una vez en comunicaciones criptográficas. Previene ataques de reproducción y asegura que cada operación de encriptación produzca salida diferente incluso con la misma entrada.",
        de: "Eine Nonce (Zahl nur einmal verwendet) ist eine zufällige oder pseudo-zufällige Zahl, die nur einmal in kryptographischen Kommunikationen verwendet wird. Sie verhindert Replay-Angriffe und stellt sicher, dass jede Verschlüsselungsoperation unterschiedliche Ausgaben produziert, selbst bei derselben Eingabe.",
        nl: "Een nonce (getal slechts eenmaal gebruikt) is een willekeurig of pseudo-willekeurig getal dat slechts eenmaal wordt gebruikt in cryptografische communicaties. Het voorkomt replay-aanvallen en zorgt ervoor dat elke coderingsoperatie verschillende output produceert, zelfs met dezelfde input."
      }
    },
    {
      question: {
        en: "What was the main innovation of the Diffie-Hellman key exchange?",
        es: "¿Cuál fue la principal innovación del intercambio de claves Diffie-Hellman?",
        de: "Was war die Hauptinnovation des Diffie-Hellman-Schlüsselaustauschs?",
        nl: "Wat was de hoofdinnovatie van de Diffie-Hellman sleuteluitwisseling?"
      },
      options: [
        { en: "Faster encryption speed", es: "Velocidad de encriptación más rápida", de: "Schnellere Verschlüsselungsgeschwindigkeit", nl: "Snellere coderingssnelheid" },
        { en: "Smaller key sizes", es: "Tamaños de clave más pequeños", de: "Kleinere Schlüsselgrößen", nl: "Kleinere sleutelgroottes" },
        { en: "Public key establishment over insecure channels", es: "Establecimiento de clave pública sobre canales inseguros", de: "Öffentliche Schlüsseletablierung über unsichere Kanäle", nl: "Publieke sleutelvaststelling over onveilige kanalen" },
        { en: "Unbreakable encryption", es: "Encriptación inquebrantable", de: "Unzerbrechliche Verschlüsselung", nl: "Onbreekbare codering" }
      ],
      correct: 2,
      explanation: {
        en: "Diffie-Hellman key exchange was revolutionary because it allowed two parties to establish a shared secret key over an insecure channel without having met before, solving the key distribution problem.",
        es: "El intercambio de claves Diffie-Hellman fue revolucionario porque permitió a dos partes establecer una clave secreta compartida sobre un canal inseguro sin haberse conocido antes, resolviendo el problema de distribución de claves.",
        de: "Der Diffie-Hellman-Schlüsselaustausch war revolutionär, weil er zwei Parteien ermöglichte, einen gemeinsamen geheimen Schlüssel über einen unsicheren Kanal zu etablieren, ohne sich vorher getroffen zu haben, wodurch das Schlüsselverteilungsproblem gelöst wurde.",
        nl: "Diffie-Hellman sleuteluitwisseling was revolutionair omdat het twee partijen toestond om een gedeelde geheime sleutel vast te stellen over een onveilig kanaal zonder elkaar eerder te hebben ontmoet, waardoor het sleuteldistributieprobleem werd opgelost."
      }
    },
    {
      question: {
        en: "What is the main characteristic of a 'stream cipher'?",
        es: "¿Cuál es la característica principal de un 'cifrado de flujo'?",
        de: "Was ist das Hauptmerkmal einer 'Stromchiffre'?",
        nl: "Wat is het hoofdkenmerk van een 'stroomcijfer'?"
      },
      options: [
        { en: "It encrypts data bit by bit or byte by byte", es: "Encripta datos bit por bit o byte por byte", de: "Es verschlüsselt Daten Bit für Bit oder Byte für Byte", nl: "Het codeert gegevens bit voor bit of byte voor byte" },
        { en: "It only works with text data", es: "Solo funciona con datos de texto", de: "Es funktioniert nur mit Textdaten", nl: "Het werkt alleen met tekstgegevens" },
        { en: "It creates a continuous flow of encrypted data", es: "Crea un flujo continuo de datos encriptados", de: "Es erzeugt einen kontinuierlichen Strom verschlüsselter Daten", nl: "Het creëert een continue stroom van gecodeerde gegevens" },
        { en: "It requires streaming hardware", es: "Requiere hardware de transmisión", de: "Es benötigt Streaming-Hardware", nl: "Het vereist streaming hardware" }
      ],
      correct: 0,
      explanation: {
        en: "Stream ciphers encrypt plaintext one bit or byte at a time using a keystream, unlike block ciphers that encrypt fixed-size blocks. Examples include RC4 and ChaCha20.",
        es: "Los cifrados de flujo encriptan texto plano un bit o byte a la vez usando un flujo de clave, a diferencia de los cifrados de bloque que encriptan bloques de tamaño fijo. Ejemplos incluyen RC4 y ChaCha20.",
        de: "Stromchiffren verschlüsseln Klartext ein Bit oder Byte nach dem anderen mit einem Schlüsselstrom, im Gegensatz zu Blockchiffren, die Blöcke fester Größe verschlüsseln. Beispiele sind RC4 und ChaCha20.",
        nl: "Stroomcijfers coderen platte tekst één bit of byte tegelijk met behulp van een sleutelstroom, in tegenstelling tot blokcijfers die blokken van vaste grootte coderen. Voorbeelden zijn RC4 en ChaCha20."
      }
    },
    {
      question: {
        en: "What is 'public key cryptography' also known as?",
        es: "¿Cómo se conoce también la 'criptografía de clave pública'?",
        de: "Wie ist 'Public-Key-Kryptographie' auch bekannt?",
        nl: "Hoe staat 'publieke sleutel cryptografie' ook bekend?"
      },
      options: [
        { en: "Symmetric cryptography", es: "Criptografía simétrica", de: "Symmetrische Kryptographie", nl: "Symmetrische cryptografie" },
        { en: "Asymmetric cryptography", es: "Criptografía asimétrica", de: "Asymmetrische Kryptographie", nl: "Asymmetrische cryptografie" },
        { en: "Classical cryptography", es: "Criptografía clásica", de: "Klassische Kryptographie", nl: "Klassieke cryptografie" },
        { en: "Quantum cryptography", es: "Criptografía cuántica", de: "Quantenkryptographie", nl: "Kwantumcryptografie" }
      ],
      correct: 1,
      explanation: {
        en: "Public key cryptography is also known as asymmetric cryptography because it uses two different keys - a public key and a private key - for encryption and decryption operations.",
        es: "La criptografía de clave pública también se conoce como criptografía asimétrica porque usa dos claves diferentes - una clave pública y una clave privada - para operaciones de encriptación y desencriptación.",
        de: "Public-Key-Kryptographie ist auch als asymmetrische Kryptographie bekannt, weil sie zwei verschiedene Schlüssel - einen öffentlichen und einen privaten Schlüssel - für Ver- und Entschlüsselungsoperationen verwendet.",
        nl: "Publieke sleutel cryptografie staat ook bekend als asymmetrische cryptografie omdat het twee verschillende sleutels gebruikt - een publieke sleutel en een private sleutel - voor coderings- en decoderingsoperaties."
      }
    },
    {
      question: {
        en: "What is the primary purpose of a 'hash function' in cryptography?",
        es: "¿Cuál es el propósito principal de una 'función hash' en criptografía?",
        de: "Was ist der Hauptzweck einer 'Hash-Funktion' in der Kryptographie?",
        nl: "Wat is het hoofddoel van een 'hash-functie' in cryptografie?"
      },
      options: [
        { en: "To encrypt data reversibly", es: "Encriptar datos de forma reversible", de: "Daten reversibel verschlüsseln", nl: "Gegevens omkeerbaar coderen" },
        { en: "To create a fixed-size digest of variable input", es: "Crear un resumen de tamaño fijo de entrada variable", de: "Einen Digest fester Größe von variabler Eingabe erstellen", nl: "Een digest van vaste grootte maken van variabele invoer" },
        { en: "To generate random numbers", es: "Generar números aleatorios", de: "Zufallszahlen generieren", nl: "Willekeurige getallen genereren" },
        { en: "To compress large files", es: "Comprimir archivos grandes", de: "Große Dateien komprimieren", nl: "Grote bestanden comprimeren" }
      ],
      correct: 1,
      explanation: {
        en: "Hash functions take variable-length input and produce a fixed-size output (digest or hash value). They're used for data integrity verification, password storage, and digital signatures. Examples include SHA-256 and MD5.",
        es: "Las funciones hash toman entrada de longitud variable y producen una salida de tamaño fijo (resumen o valor hash). Se usan para verificación de integridad de datos, almacenamiento de contraseñas, y firmas digitales. Ejemplos incluyen SHA-256 y MD5.",
        de: "Hash-Funktionen nehmen Eingaben variabler Länge und produzieren eine Ausgabe fester Größe (Digest oder Hash-Wert). Sie werden für Datenintegritätsprüfung, Passwort-Speicherung und digitale Signaturen verwendet. Beispiele sind SHA-256 und MD5.",
        nl: "Hash-functies nemen variabele-lengte invoer en produceren een vaste-grootte uitvoer (digest of hash-waarde). Ze worden gebruikt voor gegevensintegriteitsverificatie, wachtwoordopslag, en digitale handtekeningen. Voorbeelden zijn SHA-256 en MD5."
      }
    },
    {
      question: {
        en: "What does 'perfect forward secrecy' provide?",
        es: "¿Qué proporciona el 'secreto perfecto hacia adelante'?",
        de: "Was bietet 'Perfect Forward Secrecy'?",
        nl: "Wat biedt 'perfect forward secrecy'?"
      },
      options: [
        { en: "Faster encryption processing", es: "Procesamiento de encriptación más rápido", de: "Schnellere Verschlüsselungsverarbeitung", nl: "Snellere coderingsverwerking" },
        { en: "Protection of past communications if long-term keys are compromised", es: "Protección de comunicaciones pasadas si las claves a largo plazo se ven comprometidas", de: "Schutz vergangener Kommunikation, wenn langfristige Schlüssel kompromittiert werden", nl: "Bescherming van eerdere communicaties als lange termijn sleutels gecompromitteerd worden" },
        { en: "Unlimited key storage", es: "Almacenamiento ilimitado de claves", de: "Unbegrenzte Schlüsselspeicherung", nl: "Onbeperkte sleutelopslag" },
        { en: "Automatic key generation", es: "Generación automática de claves", de: "Automatische Schlüsselgenerierung", nl: "Automatische sleutelgeneratie" }
      ],
      correct: 1,
      explanation: {
        en: "Perfect forward secrecy ensures that if long-term cryptographic keys are compromised, past communication sessions remain secure because each session used ephemeral (temporary) keys that were not stored.",
        es: "El secreto perfecto hacia adelante asegura que si las claves criptográficas a largo plazo se ven comprometidas, las sesiones de comunicación pasadas permanecen seguras porque cada sesión usó claves efímeras (temporales) que no se almacenaron.",
        de: "Perfect Forward Secrecy stellt sicher, dass wenn langfristige kryptographische Schlüssel kompromittiert werden, vergangene Kommunikationssitzungen sicher bleiben, weil jede Sitzung ephemere (temporäre) Schlüssel verwendete, die nicht gespeichert wurden.",
        nl: "Perfect forward secrecy zorgt ervoor dat als lange termijn cryptografische sleutels gecompromitteerd worden, eerdere communicatiesessies veilig blijven omdat elke sessie efemere (tijdelijke) sleutels gebruikte die niet werden opgeslagen."
      }
    },
    {
      question: {
        en: "What is a 'digital signature' used for?",
        es: "¿Para qué se usa una 'firma digital'?",
        de: "Wofür wird eine 'digitale Signatur' verwendet?",
        nl: "Waarvoor wordt een 'digitale handtekening' gebruikt?"
      },
      options: [
        { en: "Encrypting data for confidentiality", es: "Encriptar datos para confidencialidad", de: "Daten für Vertraulichkeit verschlüsseln", nl: "Gegevens coderen voor vertrouwelijkheid" },
        { en: "Verifying authenticity and integrity", es: "Verificar autenticidad e integridad", de: "Authentizität und Integrität verifizieren", nl: "Authenticiteit en integriteit verifiëren" },
        { en: "Generating random keys", es: "Generar claves aleatorias", de: "Zufällige Schlüssel generieren", nl: "Willekeurige sleutels genereren" },
        { en: "Compressing files securely", es: "Comprimir archivos de forma segura", de: "Dateien sicher komprimieren", nl: "Bestanden veilig comprimeren" }
      ],
      correct: 1,
      explanation: {
        en: "Digital signatures provide authentication (verifying who sent the message) and integrity (ensuring the message hasn't been tampered with). They use asymmetric cryptography and hash functions.",
        es: "Las firmas digitales proporcionan autenticación (verificar quién envió el mensaje) e integridad (asegurar que el mensaje no ha sido manipulado). Usan criptografía asimétrica y funciones hash.",
        de: "Digitale Signaturen bieten Authentifizierung (Verifizierung, wer die Nachricht gesendet hat) und Integrität (Sicherstellung, dass die Nachricht nicht manipuliert wurde). Sie verwenden asymmetrische Kryptographie und Hash-Funktionen.",
        nl: "Digitale handtekeningen bieden authenticatie (verifiëren wie het bericht verzond) en integriteit (verzekeren dat het bericht niet gemanipuleerd is). Ze gebruiken asymmetrische cryptografie en hash-functies."
      }
    },
    {
      question: {
        en: "What vulnerability does the 'birthday attack' exploit?",
        es: "¿Qué vulnerabilidad explota el 'ataque de cumpleaños'?",
        de: "Welche Schwachstelle nutzt der 'Geburtstagsangriff' aus?",
        nl: "Welke kwetsbaarheid exploiteert de 'verjaardagsaanval'?"
      },
      options: [
        { en: "Weak password policies", es: "Políticas de contraseñas débiles", de: "Schwache Passwort-Richtlinien", nl: "Zwakke wachtwoordbeleid" },
        { en: "Hash function collisions", es: "Colisiones de función hash", de: "Hash-Funktions-Kollisionen", nl: "Hash-functie botsingen" },
        { en: "Outdated encryption algorithms", es: "Algoritmos de encriptación obsoletos", de: "Veraltete Verschlüsselungsalgorithmen", nl: "Verouderde coderingsalgoritmen" },
        { en: "Insufficient key lengths", es: "Longitudes de clave insuficientes", de: "Unzureichende Schlüssellängen", nl: "Onvoldoende sleutellengtes" }
      ],
      correct: 1,
      explanation: {
        en: "The birthday attack exploits the birthday paradox to find hash collisions faster than brute force. It shows that finding two inputs that hash to the same value is easier than finding a specific hash value.",
        es: "El ataque de cumpleaños explota la paradoja del cumpleaños para encontrar colisiones hash más rápido que la fuerza bruta. Muestra que encontrar dos entradas que produzcan el mismo hash es más fácil que encontrar un valor hash específico.",
        de: "Der Geburtstagsangriff nutzt das Geburtstagsparadoxon aus, um Hash-Kollisionen schneller als durch Brute-Force zu finden. Er zeigt, dass das Finden zweier Eingaben, die denselben Hash-Wert ergeben, einfacher ist als das Finden eines spezifischen Hash-Werts.",
        nl: "De verjaardagsaanval exploiteert de verjaardagsparadox om hash-botsingen sneller te vinden dan brute force. Het toont aan dat het vinden van twee invoeren die naar dezelfde waarde hashen makkelijker is dan het vinden van een specifieke hash-waarde."
      }
    },
    {
      question: {
        en: "What is the main advantage of elliptic curve cryptography (ECC)?",
        es: "¿Cuál es la principal ventaja de la criptografía de curva elíptica (ECC)?",
        de: "Was ist der Hauptvorteil der elliptischen Kurvenkryptographie (ECC)?",
        nl: "Wat is het hoofdvoordeel van elliptische curve cryptografie (ECC)?"
      },
      options: [
        { en: "Faster computation speed", es: "Velocidad de cálculo más rápida", de: "Schnellere Berechnungsgeschwindigkeit", nl: "Snellere berekeningssnelheid" },
        { en: "Smaller key sizes for equivalent security", es: "Tamaños de clave más pequeños para seguridad equivalente", de: "Kleinere Schlüsselgrößen für gleichwertige Sicherheit", nl: "Kleinere sleutelgroottes voor gelijkwaardige beveiliging" },
        { en: "Immunity to quantum attacks", es: "Inmunidad a ataques cuánticos", de: "Immunität gegen Quantenangriffe", nl: "Immuniteit tegen kwantumaanvallen" },
        { en: "Unlimited key generation", es: "Generación ilimitada de claves", de: "Unbegrenzte Schlüsselgenerierung", nl: "Onbeperkte sleutelgeneratie" }
      ],
      correct: 1,
      explanation: {
        en: "ECC provides the same level of security as RSA with much smaller key sizes. For example, a 256-bit ECC key provides similar security to a 3072-bit RSA key, making it more efficient for mobile devices and IoT.",
        es: "ECC proporciona el mismo nivel de seguridad que RSA con tamaños de clave mucho más pequeños. Por ejemplo, una clave ECC de 256 bits proporciona seguridad similar a una clave RSA de 3072 bits, haciéndola más eficiente para dispositivos móviles e IoT.",
        de: "ECC bietet dasselbe Sicherheitsniveau wie RSA mit viel kleineren Schlüsselgrößen. Beispielsweise bietet ein 256-Bit-ECC-Schlüssel ähnliche Sicherheit wie ein 3072-Bit-RSA-Schlüssel, wodurch es effizienter für mobile Geräte und IoT wird.",
        nl: "ECC biedt hetzelfde beveiligingsniveau als RSA met veel kleinere sleutelgroottes. Bijvoorbeeld, een 256-bit ECC sleutel biedt vergelijkbare beveiliging als een 3072-bit RSA sleutel, waardoor het efficiënter is voor mobiele apparaten en IoT."
      }
    },
    {
      question: {
        en: "What is 'salt' used for in password hashing?",
        es: "¿Para qué se usa la 'sal' en el hash de contraseñas?",
        de: "Wofür wird 'Salt' beim Passwort-Hashing verwendet?",
        nl: "Waarvoor wordt 'salt' gebruikt bij wachtwoord hashing?"
      },
      options: [
        { en: "To make passwords taste better", es: "Para hacer que las contraseñas sepan mejor", de: "Um Passwörter besser schmecken zu lassen", nl: "Om wachtwoorden beter te laten smaken" },
        { en: "To prevent rainbow table attacks", es: "Para prevenir ataques de tabla arcoíris", de: "Um Rainbow-Table-Angriffe zu verhindern", nl: "Om rainbow table aanvallen te voorkomen" },
        { en: "To compress password databases", es: "Para comprimir bases de datos de contraseñas", de: "Um Passwort-Datenbanken zu komprimieren", nl: "Om wachtwoorddatabases te comprimeren" },
        { en: "To encrypt passwords directly", es: "Para encriptar contraseñas directamente", de: "Um Passwörter direkt zu verschlüsseln", nl: "Om wachtwoorden direct te coderen" }
      ],
      correct: 1,
      explanation: {
        en: "Salt is random data added to passwords before hashing. It ensures that identical passwords produce different hash values, preventing rainbow table attacks and making password cracking much more difficult.",
        es: "La sal son datos aleatorios añadidos a las contraseñas antes del hash. Asegura que contraseñas idénticas produzcan valores hash diferentes, previniendo ataques de tabla arcoíris y haciendo el descifrado de contraseñas mucho más difícil.",
        de: "Salt sind zufällige Daten, die Passwörtern vor dem Hashing hinzugefügt werden. Es stellt sicher, dass identische Passwörter verschiedene Hash-Werte produzieren, verhindert Rainbow-Table-Angriffe und macht das Passwort-Knacken viel schwieriger.",
        nl: "Salt is willekeurige data toegevoegd aan wachtwoorden voor hashing. Het zorgt ervoor dat identieke wachtwoorden verschillende hash-waarden produceren, voorkomt rainbow table aanvallen en maakt wachtwoord kraken veel moeilijker."
      }
    },
    {
      question: {
        en: "What does 'entropy' measure in the context of cryptography?",
        es: "¿Qué mide la 'entropía' en el contexto de la criptografía?",
        de: "Was misst 'Entropie' im Kontext der Kryptographie?",
        nl: "Wat meet 'entropie' in de context van cryptografie?"
      },
      options: [
        { en: "Encryption speed", es: "Velocidad de encriptación", de: "Verschlüsselungsgeschwindigkeit", nl: "Coderingssnelheid" },
        { en: "Randomness and unpredictability", es: "Aleatoriedad e impredecibilidad", de: "Zufälligkeit und Unvorhersagbarkeit", nl: "Willekeurigheid en onvoorspelbaarheid" },
        { en: "Key length", es: "Longitud de clave", de: "Schlüssellänge", nl: "Sleutellengte" },
        { en: "Algorithm complexity", es: "Complejidad del algoritmo", de: "Algorithmus-Komplexität", nl: "Algoritme complexiteit" }
      ],
      correct: 1,
      explanation: {
        en: "In cryptography, entropy measures the randomness and unpredictability of data. High entropy means the data is very random and unpredictable, which is crucial for generating secure cryptographic keys.",
        es: "En criptografía, la entropía mide la aleatoriedad e impredecibilidad de los datos. Alta entropía significa que los datos son muy aleatorios e impredecibles, lo cual es crucial para generar claves criptográficas seguras.",
        de: "In der Kryptographie misst Entropie die Zufälligkeit und Unvorhersagbarkeit von Daten. Hohe Entropie bedeutet, dass die Daten sehr zufällig und unvorhersagbar sind, was für die Generierung sicherer kryptographischer Schlüssel entscheidend ist.",
        nl: "In cryptografie meet entropie de willekeurigheid en onvoorspelbaarheid van data. Hoge entropie betekent dat de data zeer willekeurig en onvoorspelbaar is, wat cruciaal is voor het genereren van veilige cryptografische sleutels."
      }
    },
    {
      question: {
        en: "What type of attack tries all possible keys systematically?",
        es: "¿Qué tipo de ataque prueba todas las claves posibles sistemáticamente?",
        de: "Welche Art von Angriff probiert systematisch alle möglichen Schlüssel aus?",
        nl: "Welk type aanval probeert systematisch alle mogelijke sleutels?"
      },
      options: [
        { en: "Brute force attack", es: "Ataque de fuerza bruta", de: "Brute-Force-Angriff", nl: "Brute force aanval" },
        { en: "Dictionary attack", es: "Ataque de diccionario", de: "Wörterbuch-Angriff", nl: "Woordenboek aanval" },
        { en: "Social engineering", es: "Ingeniería social", de: "Social Engineering", nl: "Social engineering" },
        { en: "Frequency analysis", es: "Análisis de frecuencia", de: "Häufigkeitsanalyse", nl: "Frequentieanalyse" }
      ],
      correct: 0,
      explanation: {
        en: "A brute force attack systematically tries all possible keys or passwords until the correct one is found. The time required depends on key length and available computing power.",
        es: "Un ataque de fuerza bruta prueba sistemáticamente todas las claves o contraseñas posibles hasta encontrar la correcta. El tiempo requerido depende de la longitud de la clave y el poder de cómputo disponible.",
        de: "Ein Brute-Force-Angriff probiert systematisch alle möglichen Schlüssel oder Passwörter aus, bis der richtige gefunden wird. Die benötigte Zeit hängt von der Schlüssellänge und verfügbaren Rechenleistung ab.",
        nl: "Een brute force aanval probeert systematisch alle mogelijke sleutels of wachtwoorden totdat de juiste wordt gevonden. De benodigde tijd hangt af van sleutellengte en beschikbare rekenkracht."
      }
    },
    {
      question: {
        en: "What is the main purpose of digital certificates?",
        es: "¿Cuál es el propósito principal de los certificados digitales?",
        de: "Was ist der Hauptzweck digitaler Zertifikate?",
        nl: "Wat is het hoofddoel van digitale certificaten?"
      },
      options: [
        { en: "To encrypt data", es: "Para encriptar datos", de: "Daten zu verschlüsseln", nl: "Om data te coderen" },
        { en: "To verify identity and authenticity", es: "Para verificar identidad y autenticidad", de: "Identität und Authentizität zu verifizieren", nl: "Om identiteit en authenticiteit te verifiëren" },
        { en: "To compress files", es: "Para comprimir archivos", de: "Dateien zu komprimieren", nl: "Om bestanden te comprimeren" },
        { en: "To store passwords", es: "Para almacenar contraseñas", de: "Passwörter zu speichern", nl: "Om wachtwoorden op te slaan" }
      ],
      correct: 1,
      explanation: {
        en: "Digital certificates are used to verify the identity and authenticity of entities in digital communications. They bind a public key to an identity and are issued by trusted Certificate Authorities (CAs).",
        es: "Los certificados digitales se usan para verificar la identidad y autenticidad de entidades en comunicaciones digitales. Vinculan una clave pública a una identidad y son emitidos por Autoridades Certificadoras (CA) confiables.",
        de: "Digitale Zertifikate werden verwendet, um die Identität und Authentizität von Entitäten in digitalen Kommunikationen zu verifizieren. Sie binden einen öffentlichen Schlüssel an eine Identität und werden von vertrauenswürdigen Zertifizierungsstellen (CAs) ausgestellt.",
        nl: "Digitale certificaten worden gebruikt om de identiteit en authenticiteit van entiteiten in digitale communicatie te verifiëren. Ze koppelen een publieke sleutel aan een identiteit en worden uitgegeven door vertrouwde Certificaat Autoriteiten (CA's)."
      }
    },
    {
      question: {
        en: "What is the difference between encoding and encryption?",
        es: "¿Cuál es la diferencia entre codificación y encriptación?",
        de: "Was ist der Unterschied zwischen Kodierung und Verschlüsselung?",
        nl: "Wat is het verschil tussen codering en encryptie?"
      },
      options: [
        { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" },
        { en: "Encoding is for compression, encryption for security", es: "La codificación es para compresión, la encriptación para seguridad", de: "Kodierung ist für Kompression, Verschlüsselung für Sicherheit", nl: "Codering is voor compressie, encryptie voor beveiliging" },
        { en: "Encoding transforms data format, encryption protects data with keys", es: "La codificación transforma formato de datos, la encriptación protege datos con claves", de: "Kodierung transformiert Datenformat, Verschlüsselung schützt Daten mit Schlüsseln", nl: "Codering transformeert data formaat, encryptie beschermt data met sleutels" },
        { en: "Encoding is faster than encryption", es: "La codificación es más rápida que la encriptación", de: "Kodierung ist schneller als Verschlüsselung", nl: "Codering is sneller dan encryptie" }
      ],
      correct: 2,
      explanation: {
        en: "Encoding transforms data from one format to another (like Base64) and is reversible without a key. Encryption transforms data to protect it and requires a secret key for reversal. Encoding doesn't provide security, encryption does.",
        es: "La codificación transforma datos de un formato a otro (como Base64) y es reversible sin clave. La encriptación transforma datos para protegerlos y requiere una clave secreta para reversión. La codificación no proporciona seguridad, la encriptación sí.",
        de: "Kodierung transformiert Daten von einem Format in ein anderes (wie Base64) und ist ohne Schlüssel umkehrbar. Verschlüsselung transformiert Daten zum Schutz und erfordert einen geheimen Schlüssel zur Umkehrung. Kodierung bietet keine Sicherheit, Verschlüsselung schon.",
        nl: "Codering transformeert data van een formaat naar een ander (zoals Base64) en is omkeerbaar zonder sleutel. Encryptie transformeert data om het te beschermen en vereist een geheime sleutel voor omkering. Codering biedt geen beveiliging, encryptie wel."
      }
    },
    {
      question: {
        en: "What is a 'nonce' in cryptography?",
        es: "¿Qué es un 'nonce' en criptografía?",
        de: "Was ist eine 'Nonce' in der Kryptographie?",
        nl: "Wat is een 'nonce' in cryptografie?"
      },
      options: [
        { en: "A type of encryption algorithm", es: "Un tipo de algoritmo de encriptación", de: "Eine Art Verschlüsselungsalgorithmus", nl: "Een type encryptie-algoritme" },
        { en: "A number used only once", es: "Un número usado solo una vez", de: "Eine Zahl, die nur einmal verwendet wird", nl: "Een getal dat slechts één keer gebruikt wordt" },
        { en: "A password verification method", es: "Un método de verificación de contraseñas", de: "Eine Passwort-Verifikationsmethode", nl: "Een wachtwoordverificatiemethode" },
        { en: "A key exchange protocol", es: "Un protocolo de intercambio de claves", de: "Ein Schlüsselaustauschprotokoll", nl: "Een sleuteluitwisselingsprotocol" }
      ],
      correct: 1,
      explanation: {
        en: "A nonce (number used once) is a random or pseudo-random number used only once in a cryptographic communication. It prevents replay attacks and ensures freshness of cryptographic operations.",
        es: "Un nonce (número usado una vez) es un número aleatorio o pseudoaleatorio usado solo una vez en una comunicación criptográfica. Previene ataques de repetición y asegura la frescura de las operaciones criptográficas.",
        de: "Eine Nonce (Zahl nur einmal verwendet) ist eine zufällige oder pseudo-zufällige Zahl, die nur einmal in einer kryptographischen Kommunikation verwendet wird. Sie verhindert Replay-Angriffe und gewährleistet die Frische kryptographischer Operationen.",
        nl: "Een nonce (number used once) is een willekeurig of pseudo-willekeurig getal dat slechts één keer gebruikt wordt in cryptografische communicatie. Het voorkomt replay-aanvallen en zorgt voor versheid van cryptografische operaties."
      }
    },
    {
      question: {
        en: "What cryptographic principle ensures that a small change in input produces a dramatically different output?",
        es: "¿Qué principio criptográfico asegura que un pequeño cambio en la entrada produzca una salida dramáticamente diferente?",
        de: "Welches kryptographische Prinzip stellt sicher, dass eine kleine Änderung der Eingabe eine dramatisch andere Ausgabe erzeugt?",
        nl: "Welk cryptografisch principe zorgt ervoor dat een kleine verandering in input een dramatisch verschillende output produceert?"
      },
      options: [
        { en: "Diffusion", es: "Difusión", de: "Diffusion", nl: "Diffusie" },
        { en: "Confusion", es: "Confusión", de: "Konfusion", nl: "Verwarring" },
        { en: "Avalanche effect", es: "Efecto avalancha", de: "Lawineneffekt", nl: "Lawine-effect" },
        { en: "Key stretching", es: "Extensión de clave", de: "Schlüsseldehnung", nl: "Sleutel stretching" }
      ],
      correct: 2,
      explanation: {
        en: "The avalanche effect ensures that a small change in input (even one bit) causes a significant change in output (ideally 50% of output bits change). This property is crucial for good cryptographic hash functions and encryption algorithms.",
        es: "El efecto avalancha asegura que un pequeño cambio en la entrada (incluso un bit) cause un cambio significativo en la salida (idealmente el 50% de los bits de salida cambian). Esta propiedad es crucial para buenas funciones hash criptográficas y algoritmos de encriptación.",
        de: "Der Lawineneffekt stellt sicher, dass eine kleine Änderung der Eingabe (selbst ein Bit) eine erhebliche Änderung der Ausgabe verursacht (idealerweise ändern sich 50% der Ausgabebits). Diese Eigenschaft ist entscheidend für gute kryptographische Hash-Funktionen und Verschlüsselungsalgorithmen.",
        nl: "Het lawine-effect zorgt ervoor dat een kleine verandering in input (zelfs één bit) een significante verandering in output veroorzaakt (ideaal veranderen 50% van de output bits). Deze eigenschap is cruciaal voor goede cryptografische hash-functies en encryptie-algoritmen."
      }
    },
    {
      question: {
        en: "Which attack exploits the mathematical relationship between ciphertext and plaintext?",
        es: "¿Qué ataque explota la relación matemática entre texto cifrado y texto plano?",
        de: "Welcher Angriff nutzt die mathematische Beziehung zwischen Chiffretext und Klartext aus?",
        nl: "Welke aanval exploiteert de wiskundige relatie tussen cijfertekst en platte tekst?"
      },
      options: [
        { en: "Brute force attack", es: "Ataque de fuerza bruta", de: "Brute-Force-Angriff", nl: "Brute force aanval" },
        { en: "Cryptanalysis", es: "Criptoanálisis", de: "Kryptoanalyse", nl: "Cryptoanalyse" },
        { en: "Social engineering", es: "Ingeniería social", de: "Social Engineering", nl: "Social engineering" },
        { en: "Phishing", es: "Phishing", de: "Phishing", nl: "Phishing" }
      ],
      correct: 1,
      explanation: {
        en: "Cryptanalysis is the study of mathematical techniques for defeating cryptographic systems. It exploits mathematical relationships, patterns, and weaknesses in algorithms to break encryption without trying every possible key.",
        es: "El criptoanálisis es el estudio de técnicas matemáticas para derrotar sistemas criptográficos. Explota relaciones matemáticas, patrones y debilidades en algoritmos para romper la encriptación sin probar cada clave posible.",
        de: "Kryptoanalyse ist das Studium mathematischer Techniken zur Überwindung kryptographischer Systeme. Sie nutzt mathematische Beziehungen, Muster und Schwächen in Algorithmen aus, um Verschlüsselung zu brechen, ohne jeden möglichen Schlüssel auszuprobieren.",
        nl: "Cryptoanalyse is de studie van wiskundige technieken voor het overwinnen van cryptografische systemen. Het exploiteert wiskundige relaties, patronen en zwaktes in algoritmen om encryptie te breken zonder elke mogelijke sleutel te proberen."
      }
    },
    {
      question: {
        en: "What is the primary security concern with using the same key for multiple encryptions?",
        es: "¿Cuál es la principal preocupación de seguridad al usar la misma clave para múltiples encriptaciones?",
        de: "Was ist das Hauptsicherheitsproblem bei der Verwendung desselben Schlüssels für mehrere Verschlüsselungen?",
        nl: "Wat is de primaire beveiligingszorg bij het gebruik van dezelfde sleutel voor meerdere encrypties?"
      },
      options: [
        { en: "Slower performance", es: "Rendimiento más lento", de: "Langsamere Leistung", nl: "Tragere prestaties" },
        { en: "Pattern recognition and correlation attacks", es: "Reconocimiento de patrones y ataques de correlación", de: "Mustererkennung und Korrelationsangriffe", nl: "Patroonherkenning en correlatieaanvallen" },
        { en: "Key becomes corrupted", es: "La clave se corrompe", de: "Schlüssel wird beschädigt", nl: "Sleutel wordt beschadigd" },
        { en: "Increased storage requirements", es: "Mayores requisitos de almacenamiento", de: "Erhöhte Speicheranforderungen", nl: "Verhoogde opslagvereisten" }
      ],
      correct: 1,
      explanation: {
        en: "Reusing the same key for multiple encryptions can reveal patterns and enable correlation attacks. Attackers can analyze multiple ciphertexts encrypted with the same key to potentially recover the key or plaintext.",
        es: "Reusar la misma clave para múltiples encriptaciones puede revelar patrones y permitir ataques de correlación. Los atacantes pueden analizar múltiples textos cifrados encriptados con la misma clave para potencialmente recuperar la clave o texto plano.",
        de: "Die Wiederverwendung desselben Schlüssels für mehrere Verschlüsselungen kann Muster aufdecken und Korrelationsangriffe ermöglichen. Angreifer können mehrere mit demselben Schlüssel verschlüsselte Chiffretexte analysieren, um möglicherweise den Schlüssel oder Klartext zu ermitteln.",
        nl: "Het hergebruiken van dezelfde sleutel voor meerdere encrypties kan patronen onthullen en correlatieaanvallen mogelijk maken. Aanvallers kunnen meerdere cijferteksten geanalyseerd die met dezelfde sleutel zijn versleuteld om mogelijk de sleutel of platte tekst te herstellen."
      }
    },
    {
      question: {
        en: "What does 'perfect forward secrecy' mean?",
        es: "¿Qué significa 'secreto directo perfecto'?",
        de: "Was bedeutet 'Perfect Forward Secrecy'?",
        nl: "Wat betekent 'perfect forward secrecy'?"
      },
      options: [
        { en: "Keys never expire", es: "Las claves nunca expiran", de: "Schlüssel laufen nie ab", nl: "Sleutels verlopen nooit" },
        { en: "Compromised long-term keys don't compromise past sessions", es: "Las claves comprometidas a largo plazo no comprometen sesiones pasadas", de: "Kompromittierte Langzeitschlüssel kompromittieren keine vergangenen Sitzungen", nl: "Gecompromitteerde lange-termijn sleutels compromitteren geen eerdere sessies" },
        { en: "Encryption is unbreakable", es: "La encriptación es inquebrantable", de: "Verschlüsselung ist unknackbar", nl: "Encryptie is onbreekbaar" },
        { en: "Keys are stored securely", es: "Las claves se almacenan de forma segura", de: "Schlüssel werden sicher gespeichert", nl: "Sleutels worden veilig opgeslagen" }
      ],
      correct: 1,
      explanation: {
        en: "Perfect forward secrecy ensures that if long-term secret keys are compromised, previously encrypted communications remain secure. Each session uses unique, ephemeral keys that are not stored permanently.",
        es: "El secreto directo perfecto asegura que si las claves secretas a largo plazo son comprometidas, las comunicaciones previamente encriptadas permanecen seguras. Cada sesión usa claves únicas y efímeras que no se almacenan permanentemente.",
        de: "Perfect Forward Secrecy stellt sicher, dass frühere verschlüsselte Kommunikation sicher bleibt, auch wenn Langzeit-Geheimschlüssel kompromittiert werden. Jede Sitzung verwendet einzigartige, temporäre Schlüssel, die nicht dauerhaft gespeichert werden.",
        nl: "Perfect forward secrecy zorgt ervoor dat als lange-termijn geheime sleutels gecompromitteerd worden, eerder versleutelde communicatie veilig blijft. Elke sessie gebruikt unieke, tijdelijke sleutels die niet permanent worden opgeslagen."
      }
    },
    {
      question: {
        en: "Which cryptographic hash function is currently considered the most secure for new applications?",
        es: "¿Qué función hash criptográfica se considera actualmente la más segura para nuevas aplicaciones?",
        de: "Welche kryptographische Hash-Funktion gilt derzeit als die sicherste für neue Anwendungen?",
        nl: "Welke cryptografische hash-functie wordt momenteel beschouwd als de veiligste voor nieuwe toepassingen?"
      },
      options: [
        { en: "MD5", es: "MD5", de: "MD5", nl: "MD5" },
        { en: "SHA-1", es: "SHA-1", de: "SHA-1", nl: "SHA-1" },
        { en: "SHA-256 or SHA-3", es: "SHA-256 o SHA-3", de: "SHA-256 oder SHA-3", nl: "SHA-256 of SHA-3" },
        { en: "CRC32", es: "CRC32", de: "CRC32", nl: "CRC32" }
      ],
      correct: 2,
      explanation: {
        en: "SHA-256 (part of SHA-2 family) and SHA-3 are currently considered secure for new applications. MD5 and SHA-1 have known vulnerabilities and should not be used for security purposes. CRC32 is for error detection, not cryptographic security.",
        es: "SHA-256 (parte de la familia SHA-2) y SHA-3 se consideran actualmente seguros para nuevas aplicaciones. MD5 y SHA-1 tienen vulnerabilidades conocidas y no deberían usarse para propósitos de seguridad. CRC32 es para detección de errores, no seguridad criptográfica.",
        de: "SHA-256 (Teil der SHA-2-Familie) und SHA-3 gelten derzeit als sicher für neue Anwendungen. MD5 und SHA-1 haben bekannte Schwachstellen und sollten nicht für Sicherheitszwecke verwendet werden. CRC32 ist für Fehlererkennung, nicht für kryptographische Sicherheit.",
        nl: "SHA-256 (onderdeel van de SHA-2 familie) en SHA-3 worden momenteel als veilig beschouwd voor nieuwe toepassingen. MD5 en SHA-1 hebben bekende kwetsbaarheden en zouden niet gebruikt moeten worden voor beveiligingsdoeleinden. CRC32 is voor foutdetectie, niet cryptografische beveiliging."
      }
    },
    {
      question: {
        en: "What is the main purpose of key derivation functions (KDFs)?",
        es: "¿Cuál es el propósito principal de las funciones de derivación de claves (KDF)?",
        de: "Was ist der Hauptzweck von Schlüsselableitungsfunktionen (KDFs)?",
        nl: "Wat is het hoofddoel van sleutelafgeleidingsfuncties (KDF's)?"
      },
      options: [
        { en: "To compress encryption keys", es: "Para comprimir claves de encriptación", de: "Verschlüsselungsschlüssel zu komprimieren", nl: "Om encryptiesleutels te comprimeren" },
        { en: "To derive cryptographic keys from passwords or other secrets", es: "Para derivar claves criptográficas de contraseñas u otros secretos", de: "Kryptographische Schlüssel aus Passwörtern oder anderen Geheimnissen abzuleiten", nl: "Om cryptografische sleutels af te leiden van wachtwoorden of andere geheimen" },
        { en: "To store keys securely", es: "Para almacenar claves de forma segura", de: "Schlüssel sicher zu speichern", nl: "Om sleutels veilig op te slaan" },
        { en: "To transmit keys over networks", es: "Para transmitir claves a través de redes", de: "Schlüssel über Netzwerke zu übertragen", nl: "Om sleutels over netwerken te verzenden" }
      ],
      correct: 1,
      explanation: {
        en: "Key derivation functions (KDFs) are used to derive one or more cryptographic keys from a secret value like a password, passphrase, or master key. They often include features like salt and iteration counts to strengthen security against attacks.",
        es: "Las funciones de derivación de claves (KDF) se usan para derivar una o más claves criptográficas de un valor secreto como una contraseña, frase de paso o clave maestra. A menudo incluyen características como sal y conteos de iteración para fortalecer la seguridad contra ataques.",
        de: "Schlüsselableitungsfunktionen (KDFs) werden verwendet, um einen oder mehrere kryptographische Schlüssel aus einem geheimen Wert wie einem Passwort, einer Passphrase oder einem Hauptschlüssel abzuleiten. Sie enthalten oft Funktionen wie Salt und Iterationszahlen, um die Sicherheit gegen Angriffe zu stärken.",
        nl: "Sleutelafgeleidingsfuncties (KDF's) worden gebruikt om een of meer cryptografische sleutels af te leiden van een geheime waarde zoals een wachtwoord, wachtwoordzin of hoofdsleutel. Ze bevatten vaak functies zoals salt en iteratietelling om de beveiliging tegen aanvallen te versterken."
      }
    },
    {
      question: {
        en: "What makes a cipher 'computationally secure'?",
        es: "¿Qué hace que un cifrado sea 'computacionalmente seguro'?",
        de: "Was macht eine Chiffre 'rechnerisch sicher'?",
        nl: "Wat maakt een cijfer 'computationeel veilig'?"
      },
      options: [
        { en: "It uses the longest possible keys", es: "Usa las claves más largas posibles", de: "Es verwendet die längstmöglichen Schlüssel", nl: "Het gebruikt de langst mogelijke sleutels" },
        { en: "Breaking it would require an impractically large amount of computation", es: "Romperlo requeriría una cantidad imprácticamente grande de cómputo", de: "Es zu brechen würde eine unpraktisch große Menge an Berechnung erfordern", nl: "Het breken ervan zou een onpraktisch grote hoeveelheid berekening vereisen" },
        { en: "It's theoretically unbreakable", es: "Es teóricamente inquebrantable", de: "Es ist theoretisch unknackbar", nl: "Het is theoretisch onbreekbaar" },
        { en: "It uses quantum encryption", es: "Usa encriptación cuántica", de: "Es verwendet Quantenverschlüsselung", nl: "Het gebruikt kwantumversleuteling" }
      ],
      correct: 1,
      explanation: {
        en: "A cipher is computationally secure if the best-known attack against it requires an amount of computation that is infeasible with current and foreseeable technology. This is practical security rather than theoretical perfect security.",
        es: "Un cifrado es computacionalmente seguro si el mejor ataque conocido contra él requiere una cantidad de cómputo que es inviable con la tecnología actual y previsible. Esta es seguridad práctica más que seguridad perfecta teórica.",
        de: "Eine Chiffre ist rechnerisch sicher, wenn der beste bekannte Angriff dagegen eine Menge an Berechnung erfordert, die mit aktueller und absehbarer Technologie nicht durchführbar ist. Dies ist praktische Sicherheit statt theoretisch perfekte Sicherheit.",
        nl: "Een cijfer is computationeel veilig als de best bekende aanval ertegen een hoeveelheid berekening vereist die onhaalbaar is met huidige en voorzienbare technologie. Dit is praktische beveiliging in plaats van theoretisch perfecte beveiliging."
      }
    }
  ]
});