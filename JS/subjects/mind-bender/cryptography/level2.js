// Cryptography - Level 2: Classical Ciphers and Polyalphabetic Systems
window.addLevel('mind-bender/cryptography', {
  name: {
    en: "Classical Ciphers and Polyalphabetic Systems",
    es: "Cifrados Clásicos y Sistemas Polialfabéticos",
    de: "Klassische Chiffren und Polyalphabetische Systeme",
    nl: "Klassieke Cijfers en Polyalfabetische Systemen"
  },
  questions: [
    {
      question: {
        en: "What is the key characteristic of the Vigenère cipher?",
        es: "¿Cuál es la característica clave del cifrado Vigenère?",
        de: "Was ist das Hauptmerkmal der Vigenère-Chiffre?",
        nl: "Wat is het belangrijkste kenmerk van het Vigenère-cijfer?"
      },
      options: [
        { en: "Uses a single substitution alphabet", es: "Usa un solo alfabeto de sustitución", de: "Verwendet ein einzelnes Substitutionsalphabet", nl: "Gebruikt een enkel substitutiealfabet" },
        { en: "Uses multiple substitution alphabets", es: "Usa múltiples alfabetos de sustitución", de: "Verwendet mehrere Substitutionsalphabete", nl: "Gebruikt meerdere substitutiealfabeten" },
        { en: "Only encrypts numbers", es: "Solo cifra números", de: "Verschlüsselt nur Zahlen", nl: "Versleutelt alleen getallen" },
        { en: "Uses transposition only", es: "Solo usa transposición", de: "Verwendet nur Transposition", nl: "Gebruikt alleen transpositie" }
      ],
      correct: 1,
      explanation: {
        en: "The Vigenère cipher uses multiple substitution alphabets based on a repeating keyword, making it much stronger than monoalphabetic ciphers like Caesar cipher.",
        es: "El cifrado Vigenère usa múltiples alfabetos de sustitución basados en una palabra clave repetitiva, haciéndolo mucho más fuerte que los cifrados monoalfabéticos como el cifrado César.",
        de: "Die Vigenère-Chiffre verwendet mehrere Substitutionsalphabete basierend auf einem sich wiederholenden Schlüsselwort, wodurch sie viel stärker ist als monoalphabetische Chiffren wie die Caesar-Chiffre.",
        nl: "Het Vigenère-cijfer gebruikt meerdere substitutiealfabeten gebaseerd op een herhalend sleutelwoord, waardoor het veel sterker is dan monoalfabetische cijfers zoals het Caesar-cijfer."
      }
    },
    {
      question: {
        en: "Which cipher uses a 5x5 grid and encrypts pairs of letters?",
        es: "¿Qué cifrado usa una cuadrícula de 5x5 y cifra pares de letras?",
        de: "Welche Chiffre verwendet ein 5x5-Gitter und verschlüsselt Buchstabenpaare?",
        nl: "Welk cijfer gebruikt een 5x5 raster en versleutelt letterparen?"
      },
      options: [
        { en: "Playfair cipher", es: "Cifrado Playfair", de: "Playfair-Chiffre", nl: "Playfair-cijfer" },
        { en: "Rail fence cipher", es: "Cifrado de valla", de: "Zaunpfahl-Chiffre", nl: "Hek-cijfer" },
        { en: "Atbash cipher", es: "Cifrado Atbash", de: "Atbasch-Chiffre", nl: "Atbash-cijfer" },
        { en: "Scytale cipher", es: "Cifrado Escítala", de: "Skytale-Chiffre", nl: "Scytale-cijfer" }
      ],
      correct: 0,
      explanation: {
        en: "The Playfair cipher uses a 5x5 grid of letters (combining I and J) and encrypts digrams (pairs of letters) rather than individual letters, making frequency analysis more difficult.",
        es: "El cifrado Playfair usa una cuadrícula de 5x5 letras (combinando I y J) y cifra digramas (pares de letras) en lugar de letras individuales, haciendo el análisis de frecuencia más difícil.",
        de: "Die Playfair-Chiffre verwendet ein 5x5-Gitter aus Buchstaben (I und J werden kombiniert) und verschlüsselt Digramme (Buchstabenpaare) anstatt einzelne Buchstaben, was die Häufigkeitsanalyse erschwert.",
        nl: "Het Playfair-cijfer gebruikt een 5x5 raster van letters (I en J gecombineerd) en versleutelt digrammen (letterparen) in plaats van individuele letters, waardoor frequentieanalyse moeilijker wordt."
      }
    },
    {
      question: {
        en: "What is the main weakness of monoalphabetic substitution ciphers?",
        es: "¿Cuál es la principal debilidad de los cifrados de sustitución monoalfabéticos?",
        de: "Was ist die Hauptschwäche monoalphabetischer Substitutionschiffren?",
        nl: "Wat is de grootste zwakte van monoalfabetische substitutiecijfers?"
      },
      options: [
        { en: "They are too complex to use", es: "Son demasiado complejos de usar", de: "Sie sind zu komplex in der Anwendung", nl: "Ze zijn te complex om te gebruiken" },
        { en: "They preserve letter frequencies", es: "Preservan las frecuencias de letras", de: "Sie erhalten Buchstabenhäufigkeiten", nl: "Ze behouden letterfrequenties" },
        { en: "They require long keys", es: "Requieren claves largas", de: "Sie benötigen lange Schlüssel", nl: "Ze hebben lange sleutels nodig" },
        { en: "They only work with numbers", es: "Solo funcionan con números", de: "Sie funktionieren nur mit Zahlen", nl: "Ze werken alleen met getallen" }
      ],
      correct: 1,
      explanation: {
        en: "Monoalphabetic ciphers preserve the frequency distribution of letters in the original language, making them vulnerable to frequency analysis attacks.",
        es: "Los cifrados monoalfabéticos preservan la distribución de frecuencia de las letras en el idioma original, haciéndolos vulnerables a ataques de análisis de frecuencia.",
        de: "Monoalphabetische Chiffren erhalten die Häufigkeitsverteilung der Buchstaben in der ursprünglichen Sprache bei, wodurch sie anfällig für Häufigkeitsanalyse-Angriffe werden.",
        nl: "Monoalfabetische cijfers behouden de frequentieverdeling van letters in de oorspronkelijke taal, waardoor ze kwetsbaar zijn voor frequentieanalyse-aanvallen."
      }
    },
    {
      question: {
        en: "Which method was used by Friedrich Kasiski to break the Vigenère cipher?",
        es: "¿Qué método fue usado por Friedrich Kasiski para romper el cifrado Vigenère?",
        de: "Welche Methode verwendete Friedrich Kasiski, um die Vigenère-Chiffre zu brechen?",
        nl: "Welke methode gebruikte Friedrich Kasiski om het Vigenère-cijfer te breken?"
      },
      options: [
        { en: "Frequency analysis", es: "Análisis de frecuencia", de: "Häufigkeitsanalyse", nl: "Frequentieanalyse" },
        { en: "Finding repeated patterns", es: "Encontrar patrones repetidos", de: "Wiederkehrende Muster finden", nl: "Herhalende patronen vinden" },
        { en: "Brute force attack", es: "Ataque de fuerza bruta", de: "Brute-Force-Angriff", nl: "Brute force aanval" },
        { en: "Dictionary attack", es: "Ataque de diccionario", de: "Wörterbuch-Angriff", nl: "Woordenboek aanval" }
      ],
      correct: 1,
      explanation: {
        en: "The Kasiski examination looks for repeated sequences in the ciphertext to determine the key length, then applies frequency analysis to each position.",
        es: "El examen de Kasiski busca secuencias repetidas en el texto cifrado para determinar la longitud de la clave, luego aplica análisis de frecuencia a cada posición.",
        de: "Die Kasiski-Untersuchung sucht nach wiederholten Sequenzen im Chiffretext, um die Schlüssellänge zu bestimmen, und wendet dann Häufigkeitsanalyse auf jede Position an.",
        nl: "Het Kasiski-onderzoek zoekt naar herhaalde sequenties in de cijfertekst om de sleutellengte te bepalen, en past dan frequentieanalyse toe op elke positie."
      }
    },
    {
      question: {
        en: "What is a 'running key' cipher?",
        es: "¿Qué es un cifrado de 'clave corriente'?",
        de: "Was ist eine 'laufende Schlüssel'-Chiffre?",
        nl: "Wat is een 'lopende sleutel' cijfer?"
      },
      options: [
        { en: "A cipher where the key changes with each use", es: "Un cifrado donde la clave cambia con cada uso", de: "Eine Chiffre, bei der sich der Schlüssel bei jeder Verwendung ändert", nl: "Een cijfer waarbij de sleutel bij elk gebruik verandert" },
        { en: "A Vigenère cipher using a book as the key", es: "Un cifrado Vigenère usando un libro como clave", de: "Eine Vigenère-Chiffre, die ein Buch als Schlüssel verwendet", nl: "Een Vigenère-cijfer dat een boek als sleutel gebruikt" },
        { en: "A cipher that only works while running", es: "Un cifrado que solo funciona mientras corre", de: "Eine Chiffre, die nur während der Ausführung funktioniert", nl: "Een cijfer dat alleen werkt tijdens het uitvoeren" },
        { en: "A transposition cipher", es: "Un cifrado de transposición", de: "Eine Transpositionschiffre", nl: "Een transpositiecijfer" }
      ],
      correct: 1,
      explanation: {
        en: "A running key cipher is a variant of the Vigenère cipher where the key is as long as the message, typically derived from a book or other text.",
        es: "Un cifrado de clave corriente es una variante del cifrado Vigenère donde la clave es tan larga como el mensaje, típicamente derivada de un libro u otro texto.",
        de: "Eine laufende Schlüssel-Chiffre ist eine Variante der Vigenère-Chiffre, bei der der Schlüssel so lang ist wie die Nachricht, typischerweise abgeleitet von einem Buch oder anderen Text.",
        nl: "Een lopende sleutel cijfer is een variant van het Vigenère-cijfer waarbij de sleutel zo lang is als het bericht, typisch afgeleid van een boek of andere tekst."
      }
    },
    {
      question: {
        en: "Which cipher transposes letters according to a geometric pattern?",
        es: "¿Qué cifrado traspone letras según un patrón geométrico?",
        de: "Welche Chiffre transponiert Buchstaben nach einem geometrischen Muster?",
        nl: "Welk cijfer transponeert letters volgens een geometrisch patroon?"
      },
      options: [
        { en: "Caesar cipher", es: "Cifrado César", de: "Caesar-Chiffre", nl: "Caesar-cijfer" },
        { en: "Rail fence cipher", es: "Cifrado de valla", de: "Zaunpfahl-Chiffre", nl: "Hek-cijfer" },
        { en: "Atbash cipher", es: "Cifrado Atbash", de: "Atbasch-Chiffre", nl: "Atbash-cijfer" },
        { en: "Polybius square", es: "Cuadrado de Polibio", de: "Polybios-Quadrat", nl: "Polybius vierkant" }
      ],
      correct: 1,
      explanation: {
        en: "The rail fence cipher writes the plaintext in a zigzag pattern across multiple 'rails' and then reads off the ciphertext row by row.",
        es: "El cifrado de valla escribe el texto plano en un patrón zigzag a través de múltiples 'rieles' y luego lee el texto cifrado fila por fila.",
        de: "Die Zaunpfahl-Chiffre schreibt den Klartext in einem Zickzack-Muster über mehrere 'Schienen' und liest dann den Chiffretext zeilenweise ab.",
        nl: "Het hek-cijfer schrijft de platte tekst in een zigzag patroon over meerdere 'rails' en leest dan de cijfertekst rij voor rij af."
      }
    },
    {
      question: {
        en: "What is the index of coincidence used for in cryptanalysis?",
        es: "¿Para qué se usa el índice de coincidencia en criptoanálisis?",
        de: "Wofür wird der Koinzidenzindex in der Kryptoanalyse verwendet?",
        nl: "Waarvoor wordt de coïncidentie-index gebruikt in cryptoanalyse?"
      },
      options: [
        { en: "Measuring randomness of text", es: "Medir la aleatoriedad del texto", de: "Messung der Zufälligkeit von Text", nl: "Het meten van willekeurigheid van tekst" },
        { en: "Finding the cipher key directly", es: "Encontrar la clave del cifrado directamente", de: "Den Chiffre-Schlüssel direkt finden", nl: "De cijfersleutel direct vinden" },
        { en: "Converting between alphabets", es: "Convertir entre alfabetos", de: "Umwandlung zwischen Alphabeten", nl: "Converteren tussen alfabetten" },
        { en: "Generating random keys", es: "Generar claves aleatorias", de: "Generierung zufälliger Schlüssel", nl: "Willekeurige sleutels genereren" }
      ],
      correct: 0,
      explanation: {
        en: "The index of coincidence measures how much the frequency distribution of letters in a text resembles that of natural language, helping determine if a cipher is monoalphabetic or polyalphabetic.",
        es: "El índice de coincidencia mide cuánto se parece la distribución de frecuencia de letras en un texto a la del lenguaje natural, ayudando a determinar si un cifrado es monoalfabético o polialfabético.",
        de: "Der Koinzidenzindex misst, wie sehr die Häufigkeitsverteilung der Buchstaben in einem Text der natürlichen Sprache ähnelt, und hilft zu bestimmen, ob eine Chiffre monoalphabetisch oder polyalphabetisch ist.",
        nl: "De coïncidentie-index meet hoeveel de frequentieverdeling van letters in een tekst lijkt op die van natuurlijke taal, wat helpt bepalen of een cijfer monoalfabetisch of polyalfabetisch is."
      }
    },
    {
      question: {
        en: "Which ancient cipher simply reverses the alphabet (A=Z, B=Y, etc.)?",
        es: "¿Qué cifrado antiguo simplemente invierte el alfabeto (A=Z, B=Y, etc.)?",
        de: "Welche antike Chiffre kehrt einfach das Alphabet um (A=Z, B=Y, etc.)?",
        nl: "Welk oud cijfer draait simpelweg het alfabet om (A=Z, B=Y, enz.)?"
      },
      options: [
        { en: "Caesar cipher", es: "Cifrado César", de: "Caesar-Chiffre", nl: "Caesar-cijfer" },
        { en: "Atbash cipher", es: "Cifrado Atbash", de: "Atbasch-Chiffre", nl: "Atbash-cijfer" },
        { en: "Vigenère cipher", es: "Cifrado Vigenère", de: "Vigenère-Chiffre", nl: "Vigenère-cijfer" },
        { en: "Playfair cipher", es: "Cifrado Playfair", de: "Playfair-Chiffre", nl: "Playfair-cijfer" }
      ],
      correct: 1,
      explanation: {
        en: "The Atbash cipher is an ancient Hebrew cipher that substitutes each letter with its counterpart from the reversed alphabet (A↔Z, B↔Y, C↔X, etc.).",
        es: "El cifrado Atbash es un cifrado hebreo antiguo que sustituye cada letra con su contraparte del alfabeto invertido (A↔Z, B↔Y, C↔X, etc.).",
        de: "Die Atbasch-Chiffre ist eine alte hebräische Chiffre, die jeden Buchstaben mit seinem Gegenstück aus dem umgekehrten Alphabet ersetzt (A↔Z, B↔Y, C↔X, etc.).",
        nl: "Het Atbash-cijfer is een oud Hebreeuws cijfer dat elke letter vervangt door zijn tegenhanger uit het omgekeerde alfabet (A↔Z, B↔Y, C↔X, enz.)."
      }
    },
    {
      question: {
        en: "What is the main advantage of the Four-Square cipher over Playfair?",
        es: "¿Cuál es la ventaja principal del cifrado Four-Square sobre Playfair?",
        de: "Was ist der Hauptvorteil der Four-Square-Chiffre gegenüber Playfair?",
        nl: "Wat is het belangrijkste voordeel van het Four-Square cijfer ten opzichte van Playfair?"
      },
      options: [
        { en: "It's easier to implement", es: "Es más fácil de implementar", de: "Es ist einfacher zu implementieren", nl: "Het is makkelijker te implementeren" },
        { en: "It uses four 5x5 grids instead of one", es: "Usa cuatro cuadrículas de 5x5 en lugar de una", de: "Es verwendet vier 5x5-Gitter anstatt eines", nl: "Het gebruikt vier 5x5 rasters in plaats van één" },
        { en: "It only requires one key", es: "Solo requiere una clave", de: "Es benötigt nur einen Schlüssel", nl: "Het heeft slechts één sleutel nodig" },
        { en: "It works with individual letters", es: "Funciona con letras individuales", de: "Es funktioniert mit einzelnen Buchstaben", nl: "Het werkt met individuele letters" }
      ],
      correct: 1,
      explanation: {
        en: "The Four-Square cipher uses four 5x5 grids (two plaintext grids and two key grids) providing greater security than the single grid used in Playfair.",
        es: "El cifrado Four-Square usa cuatro cuadrículas de 5x5 (dos cuadrículas de texto plano y dos cuadrículas de clave) proporcionando mayor seguridad que la única cuadrícula usada en Playfair.",
        de: "Die Four-Square-Chiffre verwendet vier 5x5-Gitter (zwei Klartext-Gitter und zwei Schlüssel-Gitter) und bietet dadurch größere Sicherheit als das einzelne Gitter bei Playfair.",
        nl: "Het Four-Square cijfer gebruikt vier 5x5 rasters (twee platte tekst rasters en twee sleutel rasters) wat meer beveiliging biedt dan het enkele raster gebruikt in Playfair."
      }
    },
    {
      question: {
        en: "Which cipher uses a cylinder with letters arranged in rows?",
        es: "¿Qué cifrado usa un cilindro con letras ordenadas en filas?",
        de: "Welche Chiffre verwendet einen Zylinder mit in Reihen angeordneten Buchstaben?",
        nl: "Welk cijfer gebruikt een cilinder met letters gerangschikt in rijen?"
      },
      options: [
        { en: "Jefferson wheel cipher", es: "Cifrado de rueda Jefferson", de: "Jefferson-Rad-Chiffre", nl: "Jefferson wiel cijfer" },
        { en: "Scytale cipher", es: "Cifrado Escítala", de: "Skytale-Chiffre", nl: "Scytale-cijfer" },
        { en: "Enigma machine", es: "Máquina Enigma", de: "Enigma-Maschine", nl: "Enigma machine" },
        { en: "Porta cipher", es: "Cifrado Porta", de: "Porta-Chiffre", nl: "Porta-cijfer" }
      ],
      correct: 0,
      explanation: {
        en: "The Jefferson wheel cipher (or Jefferson disk) uses multiple cylindrical wheels with letters arranged around their circumference, allowing for different alignments to create various cipher alphabets.",
        es: "El cifrado de rueda Jefferson (o disco Jefferson) usa múltiples ruedas cilíndricas con letras ordenadas alrededor de su circunferencia, permitiendo diferentes alineaciones para crear varios alfabetos de cifrado.",
        de: "Die Jefferson-Rad-Chiffre (oder Jefferson-Scheibe) verwendet mehrere zylindrische Räder mit Buchstaben, die um ihren Umfang angeordnet sind, wodurch verschiedene Ausrichtungen möglich sind, um verschiedene Chiffre-Alphabete zu erstellen.",
        nl: "Het Jefferson wiel cijfer (of Jefferson schijf) gebruikt meerdere cilindrische wielen met letters gerangschikt rond hun omtrek, wat verschillende uitlijningen mogelijk maakt om verschillende cijfer alfabetten te creëren."
      }
    },
    {
      question: {
        en: "What is the key space of a simple substitution cipher using the English alphabet?",
        es: "¿Cuál es el espacio de claves de un cifrado de sustitución simple usando el alfabeto inglés?",
        de: "Was ist der Schlüsselraum einer einfachen Substitutionschiffre mit dem englischen Alphabet?",
        nl: "Wat is de sleutelruimte van een eenvoudig substitutiecijfer met het Engelse alfabet?"
      },
      options: [
        { en: "26 possibilities", es: "26 posibilidades", de: "26 Möglichkeiten", nl: "26 mogelijkheden" },
        { en: "26! (factorial) possibilities", es: "26! (factorial) posibilidades", de: "26! (Fakultät) Möglichkeiten", nl: "26! (faculteit) mogelijkheden" },
        { en: "2^26 possibilities", es: "2^26 posibilidades", de: "2^26 Möglichkeiten", nl: "2^26 mogelijkheden" },
        { en: "26^26 possibilities", es: "26^26 posibilidades", de: "26^26 Möglichkeiten", nl: "26^26 mogelijkheden" }
      ],
      correct: 1,
      explanation: {
        en: "A simple substitution cipher has 26! possible keys because each of the 26 letters can be mapped to any of the remaining letters, giving 26 × 25 × 24 × ... × 1 possibilities.",
        es: "Un cifrado de sustitución simple tiene 26! claves posibles porque cada una de las 26 letras puede mapearse a cualquiera de las letras restantes, dando 26 × 25 × 24 × ... × 1 posibilidades.",
        de: "Eine einfache Substitutionschiffre hat 26! mögliche Schlüssel, weil jeder der 26 Buchstaben auf jeden der verbleibenden Buchstaben abgebildet werden kann, was 26 × 25 × 24 × ... × 1 Möglichkeiten ergibt.",
        nl: "Een eenvoudig substitutiecijfer heeft 26! mogelijke sleutels omdat elk van de 26 letters kan worden toegewezen aan elk van de resterende letters, wat 26 × 25 × 24 × ... × 1 mogelijkheden geeft."
      }
    },
    {
      question: {
        en: "Which polyalphabetic cipher uses a tableau (tabula recta)?",
        es: "¿Qué cifrado polialfabético usa un tableau (tabula recta)?",
        de: "Welche polyalphabetische Chiffre verwendet ein Tableau (Tabula Recta)?",
        nl: "Welk polyalfabetisch cijfer gebruikt een tableau (tabula recta)?"
      },
      options: [
        { en: "Beaufort cipher", es: "Cifrado Beaufort", de: "Beaufort-Chiffre", nl: "Beaufort-cijfer" },
        { en: "Trithemius cipher", es: "Cifrado Trithemius", de: "Trithemius-Chiffre", nl: "Trithemius-cijfer" },
        { en: "Vigenère cipher", es: "Cifrado Vigenère", de: "Vigenère-Chiffre", nl: "Vigenère-cijfer" },
        { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
      ],
      correct: 3,
      explanation: {
        en: "The Vigenère tableau (tabula recta) is a 26×26 grid used by Vigenère, Beaufort, and Trithemius ciphers, each applying it differently but all using the same basic structure.",
        es: "El tableau de Vigenère (tabula recta) es una cuadrícula de 26×26 usada por los cifrados Vigenère, Beaufort y Trithemius, cada uno aplicándolo diferentemente pero todos usando la misma estructura básica.",
        de: "Das Vigenère-Tableau (Tabula Recta) ist ein 26×26-Gitter, das von Vigenère-, Beaufort- und Trithemius-Chiffren verwendet wird, wobei jede es anders anwendet, aber alle dieselbe Grundstruktur verwenden.",
        nl: "Het Vigenère tableau (tabula recta) is een 26×26 raster gebruikt door Vigenère, Beaufort en Trithemius cijfers, elk past het anders toe maar allemaal gebruiken ze dezelfde basisstructuur."
      }
    },
    {
      question: {
        en: "What makes the Autokey cipher more secure than standard Vigenère?",
        es: "¿Qué hace al cifrado Autokey más seguro que el Vigenère estándar?",
        de: "Was macht die Autokey-Chiffre sicherer als die Standard-Vigenère?",
        nl: "Wat maakt het Autokey-cijfer veiliger dan standaard Vigenère?"
      },
      options: [
        { en: "It uses longer keys", es: "Usa claves más largas", de: "Es verwendet längere Schlüssel", nl: "Het gebruikt langere sleutels" },
        { en: "The key includes the plaintext itself", es: "La clave incluye el texto plano mismo", de: "Der Schlüssel enthält den Klartext selbst", nl: "De sleutel bevat de platte tekst zelf" },
        { en: "It requires two separate keys", es: "Requiere dos claves separadas", de: "Es benötigt zwei separate Schlüssel", nl: "Het heeft twee aparte sleutels nodig" },
        { en: "It only works with prime numbers", es: "Solo funciona con números primos", de: "Es funktioniert nur mit Primzahlen", nl: "Het werkt alleen met priemgetallen" }
      ],
      correct: 1,
      explanation: {
        en: "The Autokey cipher extends the key by appending the plaintext to the keyword, making the key as long as the message and reducing repetitive patterns that can be exploited.",
        es: "El cifrado Autokey extiende la clave agregando el texto plano a la palabra clave, haciendo la clave tan larga como el mensaje y reduciendo patrones repetitivos que pueden ser explotados.",
        de: "Die Autokey-Chiffre erweitert den Schlüssel, indem sie den Klartext an das Schlüsselwort anhängt, wodurch der Schlüssel so lang wie die Nachricht wird und sich wiederholende Muster reduziert werden, die ausgenutzt werden können.",
        nl: "Het Autokey-cijfer breidt de sleutel uit door de platte tekst aan het sleutelwoord toe te voegen, waardoor de sleutel zo lang wordt als het bericht en herhalende patronen verminderd worden die uitgebuit kunnen worden."
      }
    },
    {
      question: {
        en: "Which cipher was used by the Confederacy during the American Civil War?",
        es: "¿Qué cifrado fue usado por la Confederación durante la Guerra Civil Americana?",
        de: "Welche Chiffre wurde von der Konföderation während des amerikanischen Bürgerkriegs verwendet?",
        nl: "Welk cijfer werd gebruikt door de Confederatie tijdens de Amerikaanse Burgeroorlog?"
      },
      options: [
        { en: "Vigenère cipher", es: "Cifrado Vigenère", de: "Vigenère-Chiffre", nl: "Vigenère-cijfer" },
        { en: "Great Cipher", es: "Gran Cifrado", de: "Große Chiffre", nl: "Grote Cijfer" },
        { en: "Playfair cipher", es: "Cifrado Playfair", de: "Playfair-Chiffre", nl: "Playfair-cijfer" },
        { en: "ADFGVX cipher", es: "Cifrado ADFGVX", de: "ADFGVX-Chiffre", nl: "ADFGVX-cijfer" }
      ],
      correct: 0,
      explanation: {
        en: "The Confederate States used the Vigenère cipher during the American Civil War, though their key management was often poor, leading to successful Union cryptanalysis.",
        es: "Los Estados Confederados usaron el cifrado Vigenère durante la Guerra Civil Americana, aunque su gestión de claves era a menudo deficiente, llevando a un criptoanálisis exitoso de la Unión.",
        de: "Die Konföderierten Staaten verwendeten die Vigenère-Chiffre während des amerikanischen Bürgerkriegs, obwohl ihr Schlüsselmanagement oft schlecht war, was zu erfolgreicher Kryptoanalyse der Union führte.",
        nl: "De Geconfedereerde Staten gebruikten het Vigenère-cijfer tijdens de Amerikaanse Burgeroorlog, hoewel hun sleutelbeheer vaak slecht was, wat leidde tot succesvolle cryptoanalyse door de Unie."
      }
    },
    {
      question: {
        en: "What is the principle behind the Nihilist cipher?",
        es: "¿Cuál es el principio detrás del cifrado Nihilista?",
        de: "Was ist das Prinzip hinter der Nihilisten-Chiffre?",
        nl: "Wat is het principe achter het Nihilist-cijfer?"
      },
      options: [
        { en: "Converting letters to numbers then adding key numbers", es: "Convertir letras a números luego sumar números de clave", de: "Buchstaben in Zahlen umwandeln, dann Schlüsselzahlen addieren", nl: "Letters omzetten naar getallen en dan sleutelgetallen optellen" },
        { en: "Using only vowels for encryption", es: "Usar solo vocales para cifrado", de: "Nur Vokale für die Verschlüsselung verwenden", nl: "Alleen klinkers gebruiken voor versleuteling" },
        { en: "Reversing the entire message", es: "Invertir todo el mensaje", de: "Die gesamte Nachricht umkehren", nl: "Het hele bericht omdraaien" },
        { en: "Using random substitution", es: "Usar sustitución aleatoria", de: "Zufällige Substitution verwenden", nl: "Willekeurige substitutie gebruiken" }
      ],
      correct: 0,
      explanation: {
        en: "The Nihilist cipher first converts letters to numbers using a Polybius square, then adds key numbers to create the final ciphertext numbers.",
        es: "El cifrado Nihilista primero convierte letras a números usando un cuadrado de Polibio, luego suma números de clave para crear los números finales del texto cifrado.",
        de: "Die Nihilisten-Chiffre wandelt zuerst Buchstaben in Zahlen um mit einem Polybios-Quadrat, dann addiert sie Schlüsselzahlen, um die endgültigen Chiffretextzahlen zu erstellen.",
        nl: "Het Nihilist-cijfer zet eerst letters om naar getallen met behulp van een Polybius vierkant, en telt dan sleutelgetallen op om de finale cijfertekst getallen te creëren."
      }
    },
    {
      question: {
        en: "Which matrix operation is fundamental to the Hill cipher?",
        es: "¿Qué operación matricial es fundamental para el cifrado Hill?",
        de: "Welche Matrixoperation ist grundlegend für die Hill-Chiffre?",
        nl: "Welke matrixbewerking is fundamenteel voor het Hill-cijfer?"
      },
      options: [
        { en: "Matrix addition", es: "Suma de matrices", de: "Matrixaddition", nl: "Matrix optelling" },
        { en: "Matrix multiplication", es: "Multiplicación de matrices", de: "Matrixmultiplikation", nl: "Matrix vermenigvuldiging" },
        { en: "Matrix subtraction", es: "Resta de matrices", de: "Matrixsubtraktion", nl: "Matrix aftrekking" },
        { en: "Matrix division", es: "División de matrices", de: "Matrixdivision", nl: "Matrix deling" }
      ],
      correct: 1,
      explanation: {
        en: "The Hill cipher encrypts by multiplying plaintext vectors with a key matrix, and decrypts by multiplying with the inverse key matrix (modulo 26).",
        es: "El cifrado Hill cifra multiplicando vectores de texto plano con una matriz clave, y descifra multiplicando con la matriz clave inversa (módulo 26).",
        de: "Die Hill-Chiffre verschlüsselt durch Multiplikation von Klartextvektoren mit einer Schlüsselmatrix und entschlüsselt durch Multiplikation mit der inversen Schlüsselmatrix (modulo 26).",
        nl: "Het Hill-cijfer versleutelt door platte tekst vectoren te vermenigvuldigen met een sleutelmatrix, en ontcijfert door te vermenigvuldigen met de inverse sleutelmatrix (modulo 26)."
      }
    },
    {
      question: {
        en: "What is a key requirement for the Hill cipher key matrix?",
        es: "¿Cuál es un requisito clave para la matriz clave del cifrado Hill?",
        de: "Was ist eine Schlüsselanforderung für die Hill-Chiffre-Schlüsselmatrix?",
        nl: "Wat is een belangrijke vereiste voor de Hill-cijfer sleutelmatrix?"
      },
      options: [
        { en: "It must be symmetric", es: "Debe ser simétrica", de: "Sie muss symmetrisch sein", nl: "Het moet symmetrisch zijn" },
        { en: "It must be invertible modulo 26", es: "Debe ser invertible módulo 26", de: "Sie muss invertierbar modulo 26 sein", nl: "Het moet inverteerbaar zijn modulo 26" },
        { en: "It must contain only prime numbers", es: "Debe contener solo números primos", de: "Sie muss nur Primzahlen enthalten", nl: "Het moet alleen priemgetallen bevatten" },
        { en: "It must be diagonal", es: "Debe ser diagonal", de: "Sie muss diagonal sein", nl: "Het moet diagonaal zijn" }
      ],
      correct: 1,
      explanation: {
        en: "The Hill cipher key matrix must be invertible modulo 26 to allow decryption. If the determinant shares a common factor with 26, the matrix cannot be inverted.",
        es: "La matriz clave del cifrado Hill debe ser invertible módulo 26 para permitir el descifrado. Si el determinante comparte un factor común con 26, la matriz no puede ser invertida.",
        de: "Die Hill-Chiffre-Schlüsselmatrix muss invertierbar modulo 26 sein, um Entschlüsselung zu ermöglichen. Wenn die Determinante einen gemeinsamen Faktor mit 26 teilt, kann die Matrix nicht invertiert werden.",
        nl: "De Hill-cijfer sleutelmatrix moet inverteerbaar zijn modulo 26 om ontcijfering mogelijk te maken. Als de determinant een gemeenschappelijke factor deelt met 26, kan de matrix niet geïnverteerd worden."
      }
    },
    {
      question: {
        en: "Which cipher combines substitution and transposition?",
        es: "¿Qué cifrado combina sustitución y transposición?",
        de: "Welche Chiffre kombiniert Substitution und Transposition?",
        nl: "Welk cijfer combineert substitutie en transpositie?"
      },
      options: [
        { en: "ADFGVX cipher", es: "Cifrado ADFGVX", de: "ADFGVX-Chiffre", nl: "ADFGVX-cijfer" },
        { en: "Caesar cipher", es: "Cifrado César", de: "Caesar-Chiffre", nl: "Caesar-cijfer" },
        { en: "Rail fence cipher", es: "Cifrado de valla", de: "Zaunpfahl-Chiffre", nl: "Hek-cijfer" },
        { en: "Atbash cipher", es: "Cifrado Atbash", de: "Atbasch-Chiffre", nl: "Atbash-cijfer" }
      ],
      correct: 0,
      explanation: {
        en: "The ADFGVX cipher first substitutes plaintext characters using a 6×6 grid with coordinates A,D,F,G,V,X, then applies columnar transposition to the result.",
        es: "El cifrado ADFGVX primero sustituye caracteres del texto plano usando una cuadrícula de 6×6 con coordenadas A,D,F,G,V,X, luego aplica transposición columnar al resultado.",
        de: "Die ADFGVX-Chiffre substituiert zuerst Klartextzeichen mit einem 6×6-Gitter mit Koordinaten A,D,F,G,V,X, dann wendet sie Spaltentransposition auf das Ergebnis an.",
        nl: "Het ADFGVX-cijfer vervangt eerst platte tekst karakters met behulp van een 6×6 raster met coördinaten A,D,F,G,V,X, en past dan kolomtranspositie toe op het resultaat."
      }
    },
    {
      question: {
        en: "What distinguishes the Beaufort cipher from the Vigenère cipher?",
        es: "¿Qué distingue al cifrado Beaufort del cifrado Vigenère?",
        de: "Was unterscheidet die Beaufort-Chiffre von der Vigenère-Chiffre?",
        nl: "Wat onderscheidt het Beaufort-cijfer van het Vigenère-cijfer?"
      },
      options: [
        { en: "It uses subtraction instead of addition", es: "Usa resta en lugar de suma", de: "Es verwendet Subtraktion statt Addition", nl: "Het gebruikt aftrekking in plaats van optelling" },
        { en: "It requires two keys", es: "Requiere dos claves", de: "Es benötigt zwei Schlüssel", nl: "Het heeft twee sleutels nodig" },
        { en: "It only works with numbers", es: "Solo funciona con números", de: "Es funktioniert nur mit Zahlen", nl: "Het werkt alleen met getallen" },
        { en: "It uses a different alphabet", es: "Usa un alfabeto diferente", de: "Es verwendet ein anderes Alphabet", nl: "Het gebruikt een ander alfabet" }
      ],
      correct: 0,
      explanation: {
        en: "The Beaufort cipher uses subtraction (key - plaintext) instead of addition (key + plaintext) like Vigenère, making encryption and decryption operations identical.",
        es: "El cifrado Beaufort usa resta (clave - texto plano) en lugar de suma (clave + texto plano) como Vigenère, haciendo las operaciones de cifrado y descifrado idénticas.",
        de: "Die Beaufort-Chiffre verwendet Subtraktion (Schlüssel - Klartext) anstatt Addition (Schlüssel + Klartext) wie Vigenère, wodurch Verschlüsselungs- und Entschlüsselungsoperationen identisch sind.",
        nl: "Het Beaufort-cijfer gebruikt aftrekking (sleutel - platte tekst) in plaats van optelling (sleutel + platte tekst) zoals Vigenère, waardoor versleutelings- en ontcijferingsoperaties identiek zijn."
      }
    },
    {
      question: {
        en: "Which cryptanalytic technique specifically targets short repeated key sequences?",
        es: "¿Qué técnica criptoanalítica específicamente apunta a secuencias de clave repetidas cortas?",
        de: "Welche kryptoanalytische Technik zielt speziell auf kurze wiederholte Schlüsselsequenzen ab?",
        nl: "Welke cryptoanalytische techniek richt zich specifiek op korte herhaalde sleutelsequenties?"
      },
      options: [
        { en: "Frequency analysis", es: "Análisis de frecuencia", de: "Häufigkeitsanalyse", nl: "Frequentieanalyse" },
        { en: "Kasiski examination", es: "Examen de Kasiski", de: "Kasiski-Untersuchung", nl: "Kasiski-onderzoek" },
        { en: "Brute force attack", es: "Ataque de fuerza bruta", de: "Brute-Force-Angriff", nl: "Brute force aanval" },
        { en: "Dictionary attack", es: "Ataque de diccionario", de: "Wörterbuch-Angriff", nl: "Woordenboek aanval" }
      ],
      correct: 1,
      explanation: {
        en: "The Kasiski examination identifies repeated patterns in ciphertext that likely result from the same plaintext being encrypted with the same portion of a repeating key.",
        es: "El examen de Kasiski identifica patrones repetidos en el texto cifrado que probablemente resultan del mismo texto plano siendo cifrado con la misma porción de una clave repetitiva.",
        de: "Die Kasiski-Untersuchung identifiziert wiederholte Muster im Chiffretext, die wahrscheinlich daraus resultieren, dass derselbe Klartext mit demselben Teil eines sich wiederholenden Schlüssels verschlüsselt wird.",
        nl: "Het Kasiski-onderzoek identificeert herhaalde patronen in cijfertekst die waarschijnlijk resulteren van dezelfde platte tekst die versleuteld wordt met hetzelfde deel van een herhalende sleutel."
      }
    },
    {
      question: {
        en: "What is the security strength of classical ciphers compared to modern cryptography?",
        es: "¿Cuál es la fortaleza de seguridad de los cifrados clásicos comparados con la criptografía moderna?",
        de: "Wie ist die Sicherheitsstärke klassischer Chiffren im Vergleich zur modernen Kryptographie?",
        nl: "Wat is de beveiligingssterkte van klassieke cijfers vergeleken met moderne cryptografie?"
      },
      options: [
        { en: "Much stronger due to mathematical complexity", es: "Mucho más fuerte debido a la complejidad matemática", de: "Viel stärker aufgrund mathematischer Komplexität", nl: "Veel sterker vanwege wiskundige complexiteit" },
        { en: "Equivalent to modern methods", es: "Equivalente a métodos modernos", de: "Gleichwertig mit modernen Methoden", nl: "Equivalent aan moderne methoden" },
        { en: "Much weaker, easily broken with computers", es: "Mucho más débil, fácilmente roto con computadoras", de: "Viel schwächer, leicht mit Computern zu brechen", nl: "Veel zwakker, gemakkelijk te breken met computers" },
        { en: "Stronger for long messages only", es: "Más fuerte solo para mensajes largos", de: "Stärker nur für lange Nachrichten", nl: "Sterker alleen voor lange berichten" }
      ],
      correct: 2,
      explanation: {
        en: "Classical ciphers are much weaker than modern cryptography and can be easily broken by computers using frequency analysis, pattern recognition, and brute force within seconds or minutes.",
        es: "Los cifrados clásicos son mucho más débiles que la criptografía moderna y pueden ser fácilmente rotos por computadoras usando análisis de frecuencia, reconocimiento de patrones y fuerza bruta en segundos o minutos.",
        de: "Klassische Chiffren sind viel schwächer als moderne Kryptographie und können leicht von Computern mit Häufigkeitsanalyse, Mustererkennung und Brute Force in Sekunden oder Minuten gebrochen werden.",
        nl: "Klassieke cijfers zijn veel zwakker dan moderne cryptografie en kunnen gemakkelijk door computers gebroken worden met frequentieanalyse, patroonherkenning en brute force binnen seconden of minuten."
      }
    },
    {
      question: {
        en: "Which Renaissance polymath improved upon the Vigenère cipher?",
        es: "¿Qué polímata del Renacimiento mejoró el cifrado Vigenère?",
        de: "Welcher Renaissance-Universalgelehrte verbesserte die Vigenère-Chiffre?",
        nl: "Welke Renaissance polymath verbeterde het Vigenère-cijfer?"
      },
      options: [
        { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
        { en: "Johannes Trithemius", es: "Johannes Trithemius", de: "Johannes Trithemius", nl: "Johannes Trithemius" },
        { en: "Giovan Battista Bellaso", es: "Giovan Battista Bellaso", de: "Giovan Battista Bellaso", nl: "Giovan Battista Bellaso" },
        { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" }
      ],
      correct: 1,
      explanation: {
        en: "Johannes Trithemius wrote 'Polygraphiae' in 1518, describing progressive key systems that became the foundation for later polyalphabetic ciphers including Vigenère.",
        es: "Johannes Trithemius escribió 'Polygraphiae' en 1518, describiendo sistemas de clave progresiva que se convirtieron en la base para cifrados polialfabéticos posteriores incluyendo Vigenère.",
        de: "Johannes Trithemius schrieb 1518 'Polygraphiae' und beschrieb progressive Schlüsselsysteme, die zur Grundlage für spätere polyalphabetische Chiffren einschließlich Vigenère wurden.",
        nl: "Johannes Trithemius schreef 'Polygraphiae' in 1518, waarin hij progressieve sleutelsystemen beschreef die de basis werden voor latere polyalfabetische cijfers inclusief Vigenère."
      }
    },
    {
      question: {
        en: "What is the main limitation of the one-time pad in practical use?",
        es: "¿Cuál es la limitación principal de la libreta de un solo uso en uso práctico?",
        de: "Was ist die Hauptbegrenzung des Einmal-Pads in der praktischen Anwendung?",
        nl: "Wat is de belangrijkste beperking van de one-time pad in praktisch gebruik?"
      },
      options: [
        { en: "It's too slow to encrypt", es: "Es demasiado lento para cifrar", de: "Es ist zu langsam zum Verschlüsseln", nl: "Het is te langzaam om te versleutelen" },
        { en: "Key distribution and management", es: "Distribución y gestión de claves", de: "Schlüsselverteilung und -verwaltung", nl: "Sleuteldistributie en -beheer" },
        { en: "It only works with short messages", es: "Solo funciona con mensajes cortos", de: "Es funktioniert nur mit kurzen Nachrichten", nl: "Het werkt alleen met korte berichten" },
        { en: "It's easily broken by computers", es: "Es fácilmente roto por computadoras", de: "Es wird leicht von Computern gebrochen", nl: "Het wordt gemakkelijk door computers gebroken" }
      ],
      correct: 1,
      explanation: {
        en: "While theoretically unbreakable, the one-time pad requires secure distribution of keys as long as the message, which is often impractical for large-scale communication.",
        es: "Aunque teóricamente inquebrantable, la libreta de un solo uso requiere distribución segura de claves tan largas como el mensaje, lo cual es a menudo impractico para comunicación a gran escala.",
        de: "Obwohl theoretisch unknackbar, erfordert das Einmal-Pad sichere Verteilung von Schlüsseln so lang wie die Nachricht, was oft unpraktisch für großflächige Kommunikation ist.",
        nl: "Hoewel theoretisch onbreekbaar, vereist de one-time pad veilige distributie van sleutels zo lang als het bericht, wat vaak onpraktisch is voor grootschalige communicatie."
      }
    },
    {
      question: {
        en: "Which historical figure created a cipher wheel device in the 1790s?",
        es: "¿Qué figura histórica creó un dispositivo de rueda de cifrado en la década de 1790?",
        de: "Welche historische Figur schuf in den 1790er Jahren ein Chiffre-Rad-Gerät?",
        nl: "Welke historische figuur creëerde een cijferwiel apparaat in de jaren 1790?"
      },
      options: [
        { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
        { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
        { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
        { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" }
      ],
      correct: 1,
      explanation: {
        en: "Thomas Jefferson created a wheel cipher device consisting of 26 numbered wheels, each containing the alphabet in a different scrambled order, around 1795.",
        es: "Thomas Jefferson creó un dispositivo de cifrado de rueda consistente en 26 ruedas numeradas, cada una conteniendo el alfabeto en un orden mezclado diferente, alrededor de 1795.",
        de: "Thomas Jefferson schuf um 1795 ein Rad-Chiffre-Gerät bestehend aus 26 nummerierten Rädern, die jeweils das Alphabet in einer anderen durcheinandergewürfelten Reihenfolge enthalten.",
        nl: "Thomas Jefferson creëerde rond 1795 een wielcijfer apparaat bestaande uit 26 genummerde wielen, elk met het alfabet in een andere door elkaar gehusselde volgorde."
      }
    },
    {
      question: {
        en: "What is the purpose of padding in classical ciphers?",
        es: "¿Cuál es el propósito del relleno en los cifrados clásicos?",
        de: "Was ist der Zweck von Padding in klassischen Chiffren?",
        nl: "Wat is het doel van padding in klassieke cijfers?"
      },
      options: [
        { en: "To make encryption faster", es: "Para hacer el cifrado más rápido", de: "Um die Verschlüsselung zu beschleunigen", nl: "Om versleuteling sneller te maken" },
        { en: "To hide message length and structure", es: "Para ocultar la longitud y estructura del mensaje", de: "Um Nachrichtenlänge und -struktur zu verbergen", nl: "Om berichtlengte en -structuur te verbergen" },
        { en: "To add error correction", es: "Para agregar corrección de errores", de: "Um Fehlerkorrektur hinzuzufügen", nl: "Om foutcorrectie toe te voegen" },
        { en: "To compress the message", es: "Para comprimir el mensaje", de: "Um die Nachricht zu komprimieren", nl: "Om het bericht te comprimeren" }
      ],
      correct: 1,
      explanation: {
        en: "Padding adds dummy characters to hide the true message length, word boundaries, and sentence structure, making cryptanalysis more difficult by obscuring linguistic patterns.",
        es: "El relleno agrega caracteres ficticios para ocultar la longitud real del mensaje, límites de palabras y estructura de oraciones, haciendo el criptoanálisis más difícil al oscurecer patrones lingüísticos.",
        de: "Padding fügt Dummy-Zeichen hinzu, um die wahre Nachrichtenlänge, Wortgrenzen und Satzstruktur zu verbergen, wodurch die Kryptoanalyse durch Verschleierung sprachlicher Muster erschwert wird.",
        nl: "Padding voegt dummy karakters toe om de werkelijke berichtlengte, woordgrenzen en zinsstructuur te verbergen, waardoor cryptoanalyse moeilijker wordt door taalkundige patronen te verhullen."
      }
    },
    {
      question: {
        en: "Which cipher was supposedly used by Mary Queen of Scots in her conspiracy letters?",
        es: "¿Qué cifrado supuestamente fue usado por María Reina de Escocia en sus cartas de conspiración?",
        de: "Welche Chiffre wurde angeblich von Maria Stuart in ihren Verschwörungsbriefen verwendet?",
        nl: "Welk cijfer werd naar verluidt gebruikt door Maria Koningin der Schotten in haar samenzweringsbriven?"
      },
      options: [
        { en: "Caesar cipher", es: "Cifrado César", de: "Caesar-Chiffre", nl: "Caesar-cijfer" },
        { en: "Nomenclator cipher", es: "Cifrado Nomenclator", de: "Nomenclator-Chiffre", nl: "Nomenclator-cijfer" },
        { en: "Vigenère cipher", es: "Cifrado Vigenère", de: "Vigenère-Chiffre", nl: "Vigenère-cijfer" },
        { en: "Playfair cipher", es: "Cifrado Playfair", de: "Playfair-Chiffre", nl: "Playfair-cijfer" }
      ],
      correct: 1,
      explanation: {
        en: "Mary Queen of Scots used a nomenclator cipher, which combined substitution symbols with code words for common terms, in her letters plotting against Elizabeth I. These were deciphered, leading to her execution.",
        es: "María Reina de Escocia usó un cifrado nomenclator, que combinaba símbolos de sustitución con palabras código para términos comunes, en sus cartas conspirando contra Isabel I. Estas fueron descifradas, llevando a su ejecución.",
        de: "Maria Stuart verwendete eine Nomenclator-Chiffre, die Substitutionssymbole mit Codewörtern für gebräuchliche Begriffe kombinierte, in ihren Briefen gegen Elizabeth I. Diese wurden entschlüsselt, was zu ihrer Hinrichtung führte.",
        nl: "Maria Koningin der Schotten gebruikte een nomenclator-cijfer, dat substitutiesymbolen combineerde met codewoorden voor gewone termen, in haar brieven die samenzweerden tegen Elizabeth I. Deze werden ontcijferd, wat tot haar executie leidde."
      }
    },
    {
      question: {
        en: "What is the key insight behind the Babington Plot cipher breaking?",
        es: "¿Cuál es la idea clave detrás del rompimiento del cifrado del Complot de Babington?",
        de: "Was ist die Schlüsselerkenntnis hinter dem Brechen der Babington-Verschwörungs-Chiffre?",
        nl: "Wat is het belangrijkste inzicht achter het breken van het Babington Plot cijfer?"
      },
      options: [
        { en: "Using computers for analysis", es: "Usar computadoras para análisis", de: "Computer für die Analyse verwenden", nl: "Computers gebruiken voor analyse" },
        { en: "Frequency analysis of symbols", es: "Análisis de frecuencia de símbolos", de: "Häufigkeitsanalyse von Symbolen", nl: "Frequentieanalyse van symbolen" },
        { en: "Social engineering", es: "Ingeniería social", de: "Social Engineering", nl: "Social engineering" },
        { en: "Mathematical algorithms", es: "Algoritmos matemáticos", de: "Mathematische Algorithmen", nl: "Wiskundige algoritmen" }
      ],
      correct: 1,
      explanation: {
        en: "Thomas Phelippes broke the Babington Plot cipher by applying frequency analysis to the symbol substitutions, demonstrating the power of statistical cryptanalysis in the 16th century.",
        es: "Thomas Phelippes rompió el cifrado del Complot de Babington aplicando análisis de frecuencia a las sustituciones de símbolos, demostrando el poder del criptoanálisis estadístico en el siglo XVI.",
        de: "Thomas Phelippes brach die Babington-Verschwörungs-Chiffre durch Anwendung der Häufigkeitsanalyse auf die Symbolsubstitutionen und demonstrierte die Macht der statistischen Kryptoanalyse im 16. Jahrhundert.",
        nl: "Thomas Phelippes brak het Babington Plot cijfer door frequentieanalyse toe te passen op de symboolvervangingen, wat de kracht van statistische cryptoanalyse in de 16e eeuw demonstreerde."
      }
    },
    {
      question: {
        en: "Which mathematical concept is essential for understanding the Hill cipher?",
        es: "¿Qué concepto matemático es esencial para entender el cifrado Hill?",
        de: "Welches mathematische Konzept ist wesentlich für das Verständnis der Hill-Chiffre?",
        nl: "Welk wiskundig concept is essentieel voor het begrijpen van het Hill-cijfer?"
      },
      options: [
        { en: "Prime factorization", es: "Factorización prima", de: "Primfaktorzerlegung", nl: "Priemfactorisatie" },
        { en: "Modular arithmetic", es: "Aritmética modular", de: "Modulare Arithmetik", nl: "Modulaire rekenkunde" },
        { en: "Logarithms", es: "Logaritmos", de: "Logarithmen", nl: "Logaritmen" },
        { en: "Calculus", es: "Cálculo", de: "Analysis", nl: "Calculus" }
      ],
      correct: 1,
      explanation: {
        en: "The Hill cipher relies heavily on modular arithmetic (mod 26 for English alphabet) for both the matrix operations and ensuring results stay within the alphabet range.",
        es: "El cifrado Hill depende mucho de la aritmética modular (mod 26 para el alfabeto inglés) tanto para las operaciones de matriz como para asegurar que los resultados permanezcan dentro del rango del alfabeto.",
        de: "Die Hill-Chiffre ist stark auf modulare Arithmetik (mod 26 für das englische Alphabet) angewiesen, sowohl für die Matrixoperationen als auch um sicherzustellen, dass die Ergebnisse im Alphabetbereich bleiben.",
        nl: "Het Hill-cijfer is sterk afhankelijk van modulaire rekenkunde (mod 26 voor het Engelse alfabet) voor zowel de matrixbewerkingen als om ervoor te zorgen dat resultaten binnen het alfabetbereik blijven."
      }
    },
    {
      question: {
        en: "What security advantage does the Two-Square cipher have over Playfair?",
        es: "¿Qué ventaja de seguridad tiene el cifrado Two-Square sobre Playfair?",
        de: "Welchen Sicherheitsvorteil hat die Two-Square-Chiffre gegenüber Playfair?",
        nl: "Welk beveiligingsvoordeel heeft het Two-Square cijfer ten opzichte van Playfair?"
      },
      options: [
        { en: "It's faster to compute", es: "Es más rápido de calcular", de: "Es ist schneller zu berechnen", nl: "Het is sneller te berekenen" },
        { en: "It uses independent key squares", es: "Usa cuadrados de clave independientes", de: "Es verwendet unabhängige Schlüsselquadrate", nl: "Het gebruikt onafhankelijke sleutelvierkanten" },
        { en: "It requires shorter keys", es: "Requiere claves más cortas", de: "Es benötigt kürzere Schlüssel", nl: "Het heeft kortere sleutels nodig" },
        { en: "It only encrypts vowels", es: "Solo cifra vocales", de: "Es verschlüsselt nur Vokale", nl: "Het versleutelt alleen klinkers" }
      ],
      correct: 1,
      explanation: {
        en: "The Two-Square cipher uses separate key squares for horizontal and vertical coordinates, providing greater security than Playfair's single shared square by reducing pattern analysis opportunities.",
        es: "El cifrado Two-Square usa cuadrados de clave separados para coordenadas horizontales y verticales, proporcionando mayor seguridad que el único cuadrado compartido de Playfair al reducir oportunidades de análisis de patrones.",
        de: "Die Two-Square-Chiffre verwendet separate Schlüsselquadrate für horizontale und vertikale Koordinaten und bietet dadurch größere Sicherheit als Playfairs einzelnes geteiltes Quadrat, indem sie Musteranalysemöglichkeiten reduziert.",
        nl: "Het Two-Square cijfer gebruikt aparte sleutelvierkanten voor horizontale en verticale coördinaten, wat meer beveiliging biedt dan Playfair's enkele gedeelde vierkant door patroonanalyse mogelijkheden te verminderen."
      }
    },
    {
      question: {
        en: "Which historical event led to increased interest in mechanical cipher devices?",
        es: "¿Qué evento histórico llevó al aumento del interés en dispositivos de cifrado mecánicos?",
        de: "Welches historische Ereignis führte zu erhöhtem Interesse an mechanischen Chiffre-Geräten?",
        nl: "Welke historische gebeurtenis leidde tot toegenomen interesse in mechanische cijferapparaten?"
      },
      options: [
        { en: "The American Civil War", es: "La Guerra Civil Americana", de: "Der amerikanische Bürgerkrieg", nl: "De Amerikaanse Burgeroorlog" },
        { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
        { en: "The Industrial Revolution", es: "La Revolución Industrial", de: "Die industrielle Revolution", nl: "De Industriële Revolutie" },
        { en: "The Renaissance", es: "El Renacimiento", de: "Die Renaissance", nl: "De Renaissance" }
      ],
      correct: 1,
      explanation: {
        en: "World War I created an unprecedented need for secure, rapid communication over radio, driving development of mechanical cipher devices like the Enigma machine and other rotor-based systems.",
        es: "La Primera Guerra Mundial creó una necesidad sin precedentes de comunicación segura y rápida por radio, impulsando el desarrollo de dispositivos de cifrado mecánicos como la máquina Enigma y otros sistemas basados en rotores.",
        de: "Der Erste Weltkrieg schuf einen beispiellosen Bedarf an sicherer, schneller Kommunikation über Funk und trieb die Entwicklung mechanischer Chiffre-Geräte wie der Enigma-Maschine und anderer rotorbasierter Systeme voran.",
        nl: "De Eerste Wereldoorlog creëerde een ongekende behoefte aan veilige, snelle communicatie via radio, wat de ontwikkeling van mechanische cijferapparaten zoals de Enigma machine en andere rotor-gebaseerde systemen voortduwde."
      }
    },
    {
      question: {
        en: "What is the fundamental weakness of all classical substitution ciphers?",
        es: "¿Cuál es la debilidad fundamental de todos los cifrados de sustitución clásicos?",
        de: "Was ist die grundlegende Schwäche aller klassischen Substitutionschiffren?",
        nl: "Wat is de fundamentele zwakte van alle klassieke substitutiecijfers?"
      },
      options: [
        { en: "They're too complex", es: "Son demasiado complejos", de: "Sie sind zu komplex", nl: "Ze zijn te complex" },
        { en: "They preserve some statistical properties", es: "Preservan algunas propiedades estadísticas", de: "Sie erhalten einige statistische Eigenschaften", nl: "Ze behouden enkele statistische eigenschappen" },
        { en: "They require long keys", es: "Requieren claves largas", de: "Sie benötigen lange Schlüssel", nl: "Ze hebben lange sleutels nodig" },
        { en: "They work only with letters", es: "Solo funcionan con letras", de: "Sie funktionieren nur mit Buchstaben", nl: "Ze werken alleen met letters" }
      ],
      correct: 1,
      explanation: {
        en: "All classical substitution ciphers preserve some statistical properties of the original language (letter frequencies, bigram patterns, etc.), making them vulnerable to various forms of statistical analysis.",
        es: "Todos los cifrados de sustitución clásicos preservan algunas propiedades estadísticas del idioma original (frecuencias de letras, patrones de bigramas, etc.), haciéndolos vulnerables a varias formas de análisis estadístico.",
        de: "Alle klassischen Substitutionschiffren erhalten einige statistische Eigenschaften der ursprünglichen Sprache (Buchstabenhäufigkeiten, Bigramm-Muster, etc.), wodurch sie anfällig für verschiedene Formen statistischer Analyse werden.",
        nl: "Alle klassieke substitutiecijfers behouden enkele statistische eigenschappen van de oorspronkelijke taal (letterfrequenties, bigrampatronen, enz.), waardoor ze kwetsbaar zijn voor verschillende vormen van statistische analyse."
      }
    },
    {
      question: {
        en: "What is the significance of the period in polyalphabetic ciphers?",
        es: "¿Cuál es la importancia del período en los cifrados polialfabéticos?",
        de: "Was ist die Bedeutung der Periode in polyalphabetischen Chiffren?",
        nl: "Wat is de betekenis van de periode in polyalfabetische cijfers?"
      },
      options: [
        { en: "The length of the repeating key pattern", es: "La longitud del patrón de clave repetitiva", de: "Die Länge des sich wiederholenden Schlüsselmusters", nl: "De lengte van het herhalende sleutelpatroon" },
        { en: "The time needed to encrypt", es: "El tiempo necesario para cifrar", de: "Die Zeit, die zum Verschlüsseln benötigt wird", nl: "De tijd nodig om te versleutelen" },
        { en: "The alphabet size used", es: "El tamaño del alfabeto usado", de: "Die verwendete Alphabetgröße", nl: "De gebruikte alfabetgrootte" },
        { en: "The number of substitutions", es: "El número de sustituciones", de: "Die Anzahl der Substitutionen", nl: "Het aantal substituties" }
      ],
      correct: 0,
      explanation: {
        en: "The period of a polyalphabetic cipher is the length of the key before it repeats. Finding the period is crucial for cryptanalysis, as it allows breaking the cipher into monoalphabetic components.",
        es: "El período de un cifrado polialfabético es la longitud de la clave antes de que se repita. Encontrar el período es crucial para el criptoanálisis, ya que permite romper el cifrado en componentes monoalfabéticos.",
        de: "Die Periode einer polyalphabetischen Chiffre ist die Länge des Schlüssels, bevor er sich wiederholt. Das Finden der Periode ist entscheidend für die Kryptoanalyse, da es ermöglicht, die Chiffre in monoalphabetische Komponenten zu zerlegen.",
        nl: "De periode van een polyalfabetisch cijfer is de lengte van de sleutel voordat deze zich herhaalt. Het vinden van de periode is cruciaal voor cryptoanalyse, omdat het mogelijk maakt het cijfer op te breken in monoalfabetische componenten."
      }
    },
    {
      question: {
        en: "Which cipher analysis technique measures the 'roughness' of text?",
        es: "¿Qué técnica de análisis de cifrado mide la 'rugosidad' del texto?",
        de: "Welche Chiffre-Analysetechnik misst die 'Rauheit' von Text?",
        nl: "Welke cijferanalyse techniek meet de 'ruwheid' van tekst?"
      },
      options: [
        { en: "Chi-squared test", es: "Prueba de chi-cuadrado", de: "Chi-Quadrat-Test", nl: "Chi-kwadraat test" },
        { en: "Entropy analysis", es: "Análisis de entropía", de: "Entropie-Analyse", nl: "Entropie analyse" },
        { en: "Autocorrelation", es: "Autocorrelación", de: "Autokorrelation", nl: "Autocorrelatie" },
        { en: "Friedman test", es: "Prueba de Friedman", de: "Friedman-Test", nl: "Friedman test" }
      ],
      correct: 0,
      explanation: {
        en: "The chi-squared test measures how much the observed letter frequencies deviate from expected frequencies, providing a statistical measure of text 'roughness' or randomness.",
        es: "La prueba de chi-cuadrado mide cuánto se desvían las frecuencias de letras observadas de las frecuencias esperadas, proporcionando una medida estadística de la 'rugosidad' o aleatoriedad del texto.",
        de: "Der Chi-Quadrat-Test misst, wie stark die beobachteten Buchstabenhäufigkeiten von den erwarteten Häufigkeiten abweichen, und liefert ein statistisches Maß für die 'Rauheit' oder Zufälligkeit von Text.",
        nl: "De chi-kwadraat test meet hoeveel de geobserveerde letterfrequenties afwijken van verwachte frequenties, wat een statistische maat geeft voor tekst 'ruwheid' of willekeurigheid."
      }
    },
    {
      question: {
        en: "What makes the Gronsfeld cipher different from Vigenère?",
        es: "¿Qué hace diferente al cifrado Gronsfeld del Vigenère?",
        de: "Was macht die Gronsfeld-Chiffre anders als Vigenère?",
        nl: "Wat maakt het Gronsfeld-cijfer anders dan Vigenère?"
      },
      options: [
        { en: "Uses numbers as the key instead of letters", es: "Usa números como clave en lugar de letras", de: "Verwendet Zahlen als Schlüssel anstatt Buchstaben", nl: "Gebruikt getallen als sleutel in plaats van letters" },
        { en: "Only encrypts consonants", es: "Solo cifra consonantes", de: "Verschlüsselt nur Konsonanten", nl: "Versleutelt alleen medeklinkers" },
        { en: "Uses reverse alphabet order", es: "Usa orden alfabético inverso", de: "Verwendet umgekehrte Alphabetreihenfolge", nl: "Gebruikt omgekeerde alfabetische volgorde" },
        { en: "Requires two separate keys", es: "Requiere dos claves separadas", de: "Benötigt zwei separate Schlüssel", nl: "Heeft twee aparte sleutels nodig" }
      ],
      correct: 0,
      explanation: {
        en: "The Gronsfeld cipher is essentially a Vigenère cipher that uses a numeric key instead of an alphabetic keyword, where each digit represents the Caesar shift for that position.",
        es: "El cifrado Gronsfeld es esencialmente un cifrado Vigenère que usa una clave numérica en lugar de una palabra clave alfabética, donde cada dígito representa el desplazamiento César para esa posición.",
        de: "Die Gronsfeld-Chiffre ist im Wesentlichen eine Vigenère-Chiffre, die einen numerischen Schlüssel anstatt eines alphabetischen Schlüsselworts verwendet, wobei jede Ziffer die Caesar-Verschiebung für diese Position darstellt.",
        nl: "Het Gronsfeld-cijfer is in essentie een Vigenère-cijfer dat een numerieke sleutel gebruikt in plaats van een alfabetisch sleutelwoord, waarbij elk cijfer de Caesar-verschuiving voor die positie vertegenwoordigt."
      }
    },
    {
      question: {
        en: "Which geometric transformation does the route cipher employ?",
        es: "¿Qué transformación geométrica emplea el cifrado de ruta?",
        de: "Welche geometrische Transformation verwendet die Route-Chiffre?",
        nl: "Welke geometrische transformatie gebruikt het route-cijfer?"
      },
      options: [
        { en: "Matrix rotation", es: "Rotación de matriz", de: "Matrixrotation", nl: "Matrix rotatie" },
        { en: "Rectangle transposition", es: "Transposición rectangular", de: "Rechteckige Transposition", nl: "Rechthoekige transpositie" },
        { en: "Circular permutation", es: "Permutación circular", de: "Zirkuläre Permutation", nl: "Circulaire permutatie" },
        { en: "Spiral arrangement", es: "Disposición en espiral", de: "Spiralanordnung", nl: "Spiraalvormige rangschikking" }
      ],
      correct: 1,
      explanation: {
        en: "The route cipher arranges plaintext in a rectangle and reads it out following a specific path (route), effectively performing a geometric transposition of the text layout.",
        es: "El cifrado de ruta organiza el texto plano en un rectángulo y lo lee siguiendo un camino específico (ruta), efectivamente realizando una transposición geométrica del diseño del texto.",
        de: "Die Route-Chiffre ordnet Klartext in einem Rechteck an und liest ihn entlang eines spezifischen Pfades (Route) aus, wodurch effektiv eine geometrische Transposition des Textlayouts durchgeführt wird.",
        nl: "Het route-cijfer rangschikt platte tekst in een rechthoek en leest deze uit volgens een specifiek pad (route), waardoor effectief een geometrische transpositie van de tekstindeling wordt uitgevoerd."
      }
    },
    {
      question: {
        en: "What is the key vulnerability of short-period polyalphabetic ciphers?",
        es: "¿Cuál es la vulnerabilidad clave de los cifrados polialfabéticos de período corto?",
        de: "Was ist die Hauptverwundbarkeit kurzer polyalphabetischer Chiffren?",
        nl: "Wat is de belangrijkste kwetsbaarheid van korte-periode polyalfabetische cijfers?"
      },
      options: [
        { en: "They're too slow to encrypt", es: "Son demasiado lentos para cifrar", de: "Sie sind zu langsam zum Verschlüsseln", nl: "Ze zijn te langzaam om te versleutelen" },
        { en: "Statistical patterns become apparent with sufficient text", es: "Los patrones estadísticos se vuelven aparentes con suficiente texto", de: "Statistische Muster werden bei ausreichend Text sichtbar", nl: "Statistische patronen worden duidelijk met voldoende tekst" },
        { en: "They require complex mathematical calculations", es: "Requieren cálculos matemáticos complejos", de: "Sie erfordern komplexe mathematische Berechnungen", nl: "Ze vereisen complexe wiskundige berekeningen" },
        { en: "They only work with prime number keys", es: "Solo funcionan con claves de números primos", de: "Sie funktionieren nur mit Primzahlschlüsseln", nl: "Ze werken alleen met priemgetal sleutels" }
      ],
      correct: 1,
      explanation: {
        en: "Short-period polyalphabetic ciphers repeat their key frequently, allowing cryptanalysts to collect enough statistics on each cipher position to break them using frequency analysis.",
        es: "Los cifrados polialfabéticos de período corto repiten su clave frecuentemente, permitiendo a los criptoanalistas recopilar suficientes estadísticas en cada posición del cifrado para romperlos usando análisis de frecuencia.",
        de: "Kurze polyalphabetische Chiffren wiederholen ihren Schlüssel häufig, wodurch Kryptoanalytiker genügend Statistiken über jede Chiffreposition sammeln können, um sie mit Häufigkeitsanalyse zu brechen.",
        nl: "Korte-periode polyalfabetische cijfers herhalen hun sleutel vaak, waardoor cryptoanalisten voldoende statistieken kunnen verzamelen over elke cijferpositie om ze te breken met frequentieanalyse."
      }
    },
    {
      question: {
        en: "Which historical cryptographer wrote 'Steganographia'?",
        es: "¿Qué criptógrafo histórico escribió 'Steganographia'?",
        de: "Welcher historische Kryptograph schrieb 'Steganographia'?",
        nl: "Welke historische cryptograaf schreef 'Steganographia'?"
      },
      options: [
        { en: "Johannes Trithemius", es: "Johannes Trithemius", de: "Johannes Trithemius", nl: "Johannes Trithemius" },
        { en: "Blaise de Vigenère", es: "Blaise de Vigenère", de: "Blaise de Vigenère", nl: "Blaise de Vigenère" },
        { en: "Leon Battista Alberti", es: "Leon Battista Alberti", de: "Leon Battista Alberti", nl: "Leon Battista Alberti" },
        { en: "Girolamo Cardano", es: "Girolamo Cardano", de: "Girolamo Cardano", nl: "Girolamo Cardano" }
      ],
      correct: 0,
      explanation: {
        en: "Johannes Trithemius wrote 'Steganographia' (1499-1503), a work on cryptography and steganography disguised as a book on black magic, containing early descriptions of polyalphabetic systems.",
        es: "Johannes Trithemius escribió 'Steganographia' (1499-1503), una obra sobre criptografía y esteganografía disfrazada como un libro sobre magia negra, conteniendo descripciones tempranas de sistemas polialfabéticos.",
        de: "Johannes Trithemius schrieb 'Steganographia' (1499-1503), ein Werk über Kryptographie und Steganographie, das als Buch über schwarze Magie getarnt war und frühe Beschreibungen polyalphabetischer Systeme enthielt.",
        nl: "Johannes Trithemius schreef 'Steganographia' (1499-1503), een werk over cryptografie en steganografie vermommd als een boek over zwarte magie, met vroege beschrijvingen van polyalfabetische systemen."
      }
    },
    {
      question: {
        en: "What is the main cryptographic principle behind columnar transposition?",
        es: "¿Cuál es el principio criptográfico principal detrás de la transposición columnar?",
        de: "Was ist das hauptsächliche kryptographische Prinzip hinter der Spaltentransposition?",
        nl: "Wat is het belangrijkste cryptografische principe achter kolomtranspositie?"
      },
      options: [
        { en: "Character substitution", es: "Sustitución de caracteres", de: "Zeichensubstitution", nl: "Karakter substitutie" },
        { en: "Rearranging character positions", es: "Reorganizar posiciones de caracteres", de: "Neuanordnung der Zeichenpositionen", nl: "Herrangschikken van karakter posities" },
        { en: "Mathematical transformation", es: "Transformación matemática", de: "Mathematische Transformation", nl: "Wiskundige transformatie" },
        { en: "Frequency masking", es: "Enmascaramiento de frecuencia", de: "Frequenzmaskierung", nl: "Frequentie maskering" }
      ],
      correct: 1,
      explanation: {
        en: "Columnar transposition works by rearranging the positions of characters in the plaintext according to a key-determined pattern, without changing the characters themselves.",
        es: "La transposición columnar funciona reorganizando las posiciones de los caracteres en el texto plano según un patrón determinado por la clave, sin cambiar los caracteres mismos.",
        de: "Die Spaltentransposition funktioniert durch Neuanordnung der Positionen der Zeichen im Klartext nach einem schlüsselbestimmten Muster, ohne die Zeichen selbst zu ändern.",
        nl: "Kolomtranspositie werkt door de posities van karakters in de platte tekst te herrangschikken volgens een sleutel-bepaald patroon, zonder de karakters zelf te veranderen."
      }
    },
    {
      question: {
        en: "Which cipher is considered the 'unbreakable cipher' when used correctly?",
        es: "¿Qué cifrado se considera el 'cifrado inquebrantable' cuando se usa correctamente?",
        de: "Welche Chiffre wird als 'unknackbare Chiffre' betrachtet, wenn sie korrekt verwendet wird?",
        nl: "Welk cijfer wordt beschouwd als het 'onbreekbare cijfer' wanneer correct gebruikt?"
      },
      options: [
        { en: "Vigenère cipher with long random key", es: "Cifrado Vigenère con clave aleatoria larga", de: "Vigenère-Chiffre mit langem zufälligen Schlüssel", nl: "Vigenère-cijfer met lange willekeurige sleutel" },
        { en: "One-time pad (Vernam cipher)", es: "Libreta de un solo uso (cifrado Vernam)", de: "Einmal-Pad (Vernam-Chiffre)", nl: "One-time pad (Vernam-cijfer)" },
        { en: "Hill cipher with large matrix", es: "Cifrado Hill con matriz grande", de: "Hill-Chiffre mit großer Matrix", nl: "Hill-cijfer met grote matrix" },
        { en: "Playfair with multiple grids", es: "Playfair con múltiples cuadrículas", de: "Playfair mit mehreren Gittern", nl: "Playfair met meerdere rasters" }
      ],
      correct: 1,
      explanation: {
        en: "The one-time pad (Vernam cipher) is mathematically proven to be unbreakable when the key is truly random, as long as the message, used only once, and kept completely secret.",
        es: "La libreta de un solo uso (cifrado Vernam) está matemáticamente probado que es inquebrantable cuando la clave es verdaderamente aleatoria, tan larga como el mensaje, usada solo una vez y mantenida completamente secreta.",
        de: "Das Einmal-Pad (Vernam-Chiffre) ist mathematisch bewiesen unknackbar, wenn der Schlüssel wirklich zufällig, so lang wie die Nachricht, nur einmal verwendet und völlig geheim gehalten wird.",
        nl: "De one-time pad (Vernam-cijfer) is wiskundig bewezen onbreekbaar wanneer de sleutel werkelijk willekeurig is, zo lang als het bericht, slechts eenmaal gebruikt en volledig geheim gehouden."
      }
    },
    {
      question: {
        en: "What cryptanalytic breakthrough occurred during World War I?",
        es: "¿Qué avance criptoanalítico ocurrió durante la Primera Guerra Mundial?",
        de: "Welcher kryptoanalytische Durchbruch ereignete sich während des Ersten Weltkriegs?",
        nl: "Welke cryptoanalytische doorbraak vond plaats tijdens de Eerste Wereldoorlog?"
      },
      options: [
        { en: "Breaking the Enigma machine", es: "Romper la máquina Enigma", de: "Brechen der Enigma-Maschine", nl: "Het breken van de Enigma machine" },
        { en: "Decrypting the Zimmermann Telegram", es: "Descifrar el Telegrama de Zimmermann", de: "Entschlüsselung des Zimmermann-Telegramms", nl: "Het ontcijferen van het Zimmermann Telegram" },
        { en: "Inventing frequency analysis", es: "Inventar el análisis de frecuencia", de: "Erfindung der Häufigkeitsanalyse", nl: "Het uitvinden van frequentieanalyse" },
        { en: "Creating the first computer", es: "Crear la primera computadora", de: "Erschaffung des ersten Computers", nl: "Het creëren van de eerste computer" }
      ],
      correct: 1,
      explanation: {
        en: "The decryption of the Zimmermann Telegram by British cryptanalysts in 1917 was a major breakthrough that helped bring the United States into WWI and demonstrated the strategic importance of cryptanalysis.",
        es: "El descifrado del Telegrama de Zimmermann por criptoanalistas británicos en 1917 fue un gran avance que ayudó a traer a Estados Unidos a la Primera Guerra Mundial y demostró la importancia estratégica del criptoanálisis.",
        de: "Die Entschlüsselung des Zimmermann-Telegramms durch britische Kryptoanalytiker 1917 war ein großer Durchbruch, der half, die USA in den Ersten Weltkrieg zu bringen und die strategische Bedeutung der Kryptoanalyse demonstrierte.",
        nl: "Het ontcijferen van het Zimmermann Telegram door Britse cryptoanalisten in 1917 was een grote doorbraak die hielp de Verenigde Staten in de Eerste Wereldoorlog te betrekken en toonde het strategische belang van cryptoanalyse aan."
      }
    },
    {
      question: {
        en: "What is the theoretical key space of a Playfair cipher?",
        es: "¿Cuál es el espacio de claves teórico de un cifrado Playfair?",
        de: "Was ist der theoretische Schlüsselraum einer Playfair-Chiffre?",
        nl: "Wat is de theoretische sleutelruimte van een Playfair-cijfer?"
      },
      options: [
        { en: "25!", es: "25!", de: "25!", nl: "25!" },
        { en: "26!", es: "26!", de: "26!", nl: "26!" },
        { en: "25! × 26", es: "25! × 26", de: "25! × 26", nl: "25! × 26" },
        { en: "2^25", es: "2^25", de: "2^25", nl: "2^25" }
      ],
      correct: 0,
      explanation: {
        en: "Playfair uses a 5×5 grid with 25 letters (I/J combined), giving 25! possible arrangements of the remaining 25 letters after fixing one position.",
        es: "Playfair usa una cuadrícula de 5×5 con 25 letras (I/J combinadas), dando 25! posibles arreglos de las 25 letras restantes después de fijar una posición.",
        de: "Playfair verwendet ein 5×5-Gitter mit 25 Buchstaben (I/J kombiniert), was 25! mögliche Anordnungen der verbleibenden 25 Buchstaben nach Fixierung einer Position ergibt.",
        nl: "Playfair gebruikt een 5×5 raster met 25 letters (I/J gecombineerd), wat 25! mogelijke arrangementen geeft van de resterende 25 letters na het vastleggen van één positie."
      }
    },
    {
      question: {
        en: "Which statistical test helps determine if a cipher is homophonic?",
        es: "¿Qué prueba estadística ayuda a determinar si un cifrado es homofónico?",
        de: "Welcher statistische Test hilft zu bestimmen, ob eine Chiffre homophonisch ist?",
        nl: "Welke statistische test helpt bepalen of een cijfer homofonisch is?"
      },
      options: [
        { en: "Variance analysis of symbol frequencies", es: "Análisis de varianza de frecuencias de símbolos", de: "Varianzanalyse der Symbolhäufigkeiten", nl: "Variantieanalyse van symboolfrecuenties" },
        { en: "Chi-squared goodness of fit", es: "Bondad de ajuste de chi-cuadrado", de: "Chi-Quadrat-Anpassungstest", nl: "Chi-kwadraat goedheid van fit" },
        { en: "Mann-Whitney U test", es: "Prueba U de Mann-Whitney", de: "Mann-Whitney-U-Test", nl: "Mann-Whitney U test" },
        { en: "Student's t-test", es: "Prueba t de Student", de: "Student-t-Test", nl: "Student's t-test" }
      ],
      correct: 0,
      explanation: {
        en: "Homophonic ciphers assign multiple symbols to frequent letters to flatten frequency distribution. Variance analysis reveals if symbol frequencies are more uniform than expected.",
        es: "Los cifrados homofónicos asignan múltiples símbolos a letras frecuentes para aplanar la distribución de frecuencia. El análisis de varianza revela si las frecuencias de símbolos son más uniformes de lo esperado.",
        de: "Homophone Chiffren weisen häufigen Buchstaben mehrere Symbole zu, um die Häufigkeitsverteilung zu glätten. Varianzanalyse zeigt, ob Symbolhäufigkeiten gleichmäßiger als erwartet sind.",
        nl: "Homofonische cijfers wijzen meerdere symbolen toe aan frequente letters om frequentieverdeling af te vlakken. Variantieanalyse onthult of symboolfrecuenties uniformer zijn dan verwacht."
      }
    },
    {
      question: {
        en: "What is the primary security advantage of the Porta cipher over standard Vigenère?",
        es: "¿Cuál es la ventaja de seguridad principal del cifrado Porta sobre el Vigenère estándar?",
        de: "Was ist der hauptsächliche Sicherheitsvorteil der Porta-Chiffre gegenüber der Standard-Vigenère?",
        nl: "Wat is het belangrijkste beveiligingsvoordeel van het Porta-cijfer ten opzichte van standaard Vigenère?"
      },
      options: [
        { en: "Self-reciprocal nature simplifies key management", es: "La naturaleza auto-recíproca simplifica la gestión de claves", de: "Selbstreziproke Natur vereinfacht Schlüsselverwaltung", nl: "Zelf-wederkerige aard vereenvoudigt sleutelbeheer" },
        { en: "Uses larger alphabet size", es: "Usa un tamaño de alfabeto más grande", de: "Verwendet größere Alphabetgröße", nl: "Gebruikt groter alfabetformaat" },
        { en: "Requires multiple keys simultaneously", es: "Requiere múltiples claves simultáneamente", de: "Benötigt mehrere Schlüssel gleichzeitig", nl: "Vereist meerdere sleutels tegelijk" },
        { en: "Only encrypts vowels", es: "Solo cifra vocales", de: "Verschlüsselt nur Vokale", nl: "Versleutelt alleen klinkers" }
      ],
      correct: 0,
      explanation: {
        en: "The Porta cipher is self-reciprocal, meaning the same operation encrypts and decrypts, reducing operational complexity and potential key management errors.",
        es: "El cifrado Porta es auto-recíproco, significando que la misma operación cifra y descifra, reduciendo la complejidad operacional y errores potenciales de gestión de claves.",
        de: "Die Porta-Chiffre ist selbstreziprok, das bedeutet, dieselbe Operation verschlüsselt und entschlüsselt, wodurch operative Komplexität und potenzielle Schlüsselverwaltungsfehler reduziert werden.",
        nl: "Het Porta-cijfer is zelf-wederkerig, wat betekent dat dezelfde operatie versleutelt en ontcijfert, waardoor operationele complexiteit en potentiële sleutelbeheerfouten verminderd worden."
      }
    },
    {
      question: {
        en: "Which cryptanalytic technique exploits the autocorrelation function of ciphertext?",
        es: "¿Qué técnica criptoanalítica explota la función de autocorrelación del texto cifrado?",
        de: "Welche kryptoanalytische Technik nutzt die Autokorrelationsfunktion des Chiffretexts aus?",
        nl: "Welke cryptoanalytische techniek benut de autocorrelatiefunctie van cijfertekst?"
      },
      options: [
        { en: "Kappa test for period determination", es: "Prueba kappa para determinación de período", de: "Kappa-Test zur Periodenbestimmung", nl: "Kappa test voor periode bepaling" },
        { en: "Friedman's index of coincidence", es: "Índice de coincidencia de Friedman", de: "Friedmans Koinzidenzindex", nl: "Friedman's coïncidentie-index" },
        { en: "Bigram frequency analysis", es: "Análisis de frecuencia de bigramas", de: "Bigramm-Häufigkeitsanalyse", nl: "Bigram frequentieanalyse" },
        { en: "Mutual information computation", es: "Cálculo de información mutua", de: "Berechnung der Wechselbeziehung", nl: "Wederzijdse informatie berekening" }
      ],
      correct: 0,
      explanation: {
        en: "The kappa test measures autocorrelation by examining how often letters at positions separated by a fixed distance are identical, revealing period length in polyalphabetic ciphers.",
        es: "La prueba kappa mide autocorrelación examinando cuán a menudo las letras en posiciones separadas por una distancia fija son idénticas, revelando la longitud del período en cifrados polialfabéticos.",
        de: "Der Kappa-Test misst Autokorrelation durch Untersuchung, wie oft Buchstaben an Positionen mit festem Abstand identisch sind, wodurch die Periodenlänge in polyalphabetischen Chiffren offenbart wird.",
        nl: "De kappa test meet autocorrelatie door te onderzoeken hoe vaak letters op posities gescheiden door een vaste afstand identiek zijn, wat de periodenlengte in polyalfabetische cijfers onthult."
      }
    },
    {
      question: {
        en: "What makes the Quagmire ciphers more resistant to cryptanalysis than standard Vigenère?",
        es: "¿Qué hace a los cifrados Quagmire más resistentes al criptoanálisis que el Vigenère estándar?",
        de: "Was macht die Quagmire-Chiffren widerstandsfähiger gegen Kryptoanalyse als die Standard-Vigenère?",
        nl: "Wat maakt de Quagmire-cijfers resistenter tegen cryptoanalyse dan standaard Vigenère?"
      },
      options: [
        { en: "Mixed alphabets with different indicator sequences", es: "Alfabetos mezclados con diferentes secuencias indicadoras", de: "Gemischte Alphabete mit verschiedenen Indikatorsequenzen", nl: "Gemengde alfabetten met verschillende indicatorreeksen" },
        { en: "Non-repeating key sequences", es: "Secuencias de clave no repetitivas", de: "Nicht-wiederholende Schlüsselsequenzen", nl: "Niet-herhalende sleutelsequenties" },
        { en: "Exponential key expansion", es: "Expansión exponencial de clave", de: "Exponentielle Schlüsselerweiterung", nl: "Exponentiële sleuteluitbreiding" },
        { en: "Prime number modular arithmetic", es: "Aritmética modular de números primos", de: "Primzahl-modulare Arithmetik", nl: "Priemgetal modulaire rekenkunde" }
      ],
      correct: 0,
      explanation: {
        en: "Quagmire ciphers use scrambled alphabets for both plaintext and key, with different periodic indicator sequences, making frequency analysis and period determination more complex.",
        es: "Los cifrados Quagmire usan alfabetos mezclados tanto para texto plano como para clave, con diferentes secuencias indicadoras periódicas, haciendo el análisis de frecuencia y determinación de período más complejos.",
        de: "Quagmire-Chiffren verwenden durcheinandergewürfelte Alphabete für sowohl Klartext als auch Schlüssel, mit verschiedenen periodischen Indikatorsequenzen, wodurch Häufigkeitsanalyse und Periodenbestimmung komplexer werden.",
        nl: "Quagmire-cijfers gebruiken door elkaar gehusselde alfabetten voor zowel platte tekst als sleutel, met verschillende periodieke indicatorreeksen, waardoor frequentieanalyse en periode bepaling complexer worden."
      }
    },
    {
      question: {
        en: "Which matrix property is essential for a Hill cipher to be cryptographically secure?",
        es: "¿Qué propiedad matricial es esencial para que un cifrado Hill sea criptográficamente seguro?",
        de: "Welche Matrixeigenschaft ist wesentlich für eine kryptographisch sichere Hill-Chiffre?",
        nl: "Welke matrix eigenschap is essentieel voor een cryptografisch veilig Hill-cijfer?"
      },
      options: [
        { en: "Determinant coprime to alphabet size", es: "Determinante coprimo al tamaño del alfabeto", de: "Determinante teilerfremd zur Alphabetgröße", nl: "Determinant relatief priemgetal tot alfabetgrootte" },
        { en: "Orthogonal transformation matrix", es: "Matriz de transformación ortogonal", de: "Orthogonale Transformationsmatrix", nl: "Orthogonale transformatiematrix" },
        { en: "Positive definite eigenvalues", es: "Valores propios definidos positivos", de: "Positiv definite Eigenwerte", nl: "Positief gedefinieerde eigenwaarden" },
        { en: "Hermitian symmetry property", es: "Propiedad de simetría hermitiana", de: "Hermitesche Symmetrieeigenschaft", nl: "Hermitische symmetrie eigenschap" }
      ],
      correct: 0,
      explanation: {
        en: "For Hill cipher decryption to be possible, the key matrix must have a determinant that is coprime (gcd = 1) to the alphabet size, ensuring matrix invertibility in modular arithmetic.",
        es: "Para que la desencriptación del cifrado Hill sea posible, la matriz clave debe tener un determinante que sea coprimo (gcd = 1) al tamaño del alfabeto, asegurando la invertibilidad matricial en aritmética modular.",
        de: "Damit Hill-Chiffre-Entschlüsselung möglich ist, muss die Schlüsselmatrix eine Determinante haben, die teilerfremd (ggT = 1) zur Alphabetgröße ist, wodurch Matrixinvertierbarkeit in modularer Arithmetik gewährleistet wird.",
        nl: "Voor Hill-cijfer ontcijfering moet de sleutelmatrix een determinant hebben die relatief priemgetal is (ggd = 1) tot de alfabetgrootte, wat matrix inverteerbaarheid in modulaire rekenkunde garandeert."
      }
    },
    {
      question: {
        en: "What is the fundamental limitation of the Bazeries cylinder in practical cryptography?",
        es: "¿Cuál es la limitación fundamental del cilindro de Bazeries en criptografía práctica?",
        de: "Was ist die grundlegende Begrenzung des Bazeries-Zylinders in der praktischen Kryptographie?",
        nl: "Wat is de fundamentele beperking van de Bazeries cilinder in praktische cryptografie?"
      },
      options: [
        { en: "Fixed alphabetic sequences reduce key space", es: "Secuencias alfabéticas fijas reducen el espacio de claves", de: "Feste alphabetische Sequenzen reduzieren den Schlüsselraum", nl: "Vaste alfabetische sequenties verminderen sleutelruimte" },
        { en: "Mechanical complexity causes frequent errors", es: "La complejidad mecánica causa errores frecuentes", de: "Mechanische Komplexität verursacht häufige Fehler", nl: "Mechanische complexiteit veroorzaakt frequente fouten" },
        { en: "Requires synchronized cylinder alignment", es: "Requiere alineación sincronizada de cilindros", de: "Benötigt synchronisierte Zylinderausrichtung", nl: "Vereist gesynchroniseerde cilinder uitlijning" },
        { en: "Limited to short message encryption only", es: "Limitado solo a cifrado de mensajes cortos", de: "Beschränkt nur auf kurze Nachrichtenverschlüsselung", nl: "Beperkt tot alleen korte bericht versleuteling" }
      ],
      correct: 0,
      explanation: {
        en: "The Bazeries cylinder uses fixed alphabetic arrangements on each disk, significantly limiting the effective key space compared to truly random arrangements like Jefferson's wheel cipher.",
        es: "El cilindro de Bazeries usa arreglos alfabéticos fijos en cada disco, limitando significativamente el espacio de claves efectivo comparado con arreglos verdaderamente aleatorios como el cifrado de rueda de Jefferson.",
        de: "Der Bazeries-Zylinder verwendet feste alphabetische Anordnungen auf jeder Scheibe, wodurch der effektive Schlüsselraum im Vergleich zu wirklich zufälligen Anordnungen wie Jeffersons Rad-Chiffre erheblich begrenzt wird.",
        nl: "De Bazeries cilinder gebruikt vaste alfabetische arrangementen op elke schijf, wat de effectieve sleutelruimte aanzienlijk beperkt vergeleken met werkelijk willekeurige arrangementen zoals Jefferson's wiel-cijfer."
      }
    },
    {
      question: {
        en: "Which cryptanalytic approach specifically targets the period-finding problem in polyalphabetic ciphers?",
        es: "¿Qué enfoque criptoanalítico específicamente apunta al problema de encontrar períodos en cifrados polialfabéticos?",
        de: "Welcher kryptoanalytische Ansatz zielt speziell auf das Periodenfindungsproblem in polyalphabetischen Chiffren ab?",
        nl: "Welke cryptoanalytische benadering richt zich specifiek op het periode-vindingsprobleem in polyalfabetische cijfers?"
      },
      options: [
        { en: "Babbage-Kasiski method with gcd analysis", es: "Método Babbage-Kasiski con análisis de gcd", de: "Babbage-Kasiski-Methode mit ggT-Analyse", nl: "Babbage-Kasiski methode met ggd analyse" },
        { en: "Linear cryptanalysis with bias detection", es: "Criptoanálisis lineal con detección de sesgo", de: "Lineare Kryptoanalyse mit Bias-Erkennung", nl: "Lineaire cryptoanalyse met bias detectie" },
        { en: "Differential fault analysis technique", es: "Técnica de análisis de falla diferencial", de: "Differentielle Fehleranalyse-Technik", nl: "Differentiële fout analyse techniek" },
        { en: "Algebraic attack using Gröbner bases", es: "Ataque algebraico usando bases de Gröbner", de: "Algebraischer Angriff mit Gröbner-Basen", nl: "Algebraïsche aanval met Gröbner bases" }
      ],
      correct: 0,
      explanation: {
        en: "The Babbage-Kasiski method identifies repeated ciphertext sequences, calculates distances between repetitions, and uses GCD analysis to determine the most likely key period length.",
        es: "El método Babbage-Kasiski identifica secuencias repetidas de texto cifrado, calcula distancias entre repeticiones, y usa análisis de GCD para determinar la longitud del período de clave más probable.",
        de: "Die Babbage-Kasiski-Methode identifiziert wiederholte Chiffretextsequenzen, berechnet Abstände zwischen Wiederholungen und verwendet ggT-Analyse zur Bestimmung der wahrscheinlichsten Schlüsselperiodenlänge.",
        nl: "De Babbage-Kasiski methode identificeert herhaalde cijfertekst sequenties, berekent afstanden tussen herhalingen, en gebruikt GGD analyse om de meest waarschijnlijke sleutelperiodelengte te bepalen."
      }
    },
    {
      question: {
        en: "What is the computational complexity advantage of the Affine cipher over general monoalphabetic substitution?",
        es: "¿Cuál es la ventaja de complejidad computacional del cifrado Afín sobre la sustitución monoalfabética general?",
        de: "Was ist der rechnerische Komplexitätsvorteil der Affinen Chiffre gegenüber allgemeiner monoalphabetischer Substitution?",
        nl: "Wat is het computationele complexiteitsvoordeel van het Affiene cijfer ten opzichte van algemene monoalfabetische substitutie?"
      },
      options: [
        { en: "O(1) key generation vs O(n!) space complexity", es: "Generación de clave O(1) vs complejidad espacial O(n!)", de: "O(1) Schlüsselerzeugung vs O(n!) Raumkomplexität", nl: "O(1) sleutelgeneratie vs O(n!) ruimtecomplexiteit" },
        { en: "Linear encryption time vs exponential decryption", es: "Tiempo de cifrado lineal vs descifrado exponencial", de: "Lineare Verschlüsselungszeit vs exponentielle Entschlüsselung", nl: "Lineaire versleutelingstijd vs exponentiële ontcijfering" },
        { en: "Parallel processing capability enhancement", es: "Mejora de capacidad de procesamiento paralelo", de: "Verbesserung der Parallelverarbeitungsfähigkeit", nl: "Parallelle verwerkingscapaciteit verbetering" },
        { en: "Reduced memory requirements for implementation", es: "Requisitos de memoria reducidos para implementación", de: "Reduzierte Speicheranforderungen für Implementierung", nl: "Verminderde geheugen vereisten voor implementatie" }
      ],
      correct: 0,
      explanation: {
        en: "Affine cipher uses only two parameters (a,b) giving O(φ(26)×26) ≈ O(1) key space vs general substitution's 26! factorial complexity, making key management dramatically simpler.",
        es: "El cifrado afín usa solo dos parámetros (a,b) dando espacio de claves O(φ(26)×26) ≈ O(1) vs la complejidad factorial 26! de sustitución general, haciendo la gestión de claves dramáticamente más simple.",
        de: "Die Affine Chiffre verwendet nur zwei Parameter (a,b) mit O(φ(26)×26) ≈ O(1) Schlüsselraum vs der 26!-Fakultätskomplexität allgemeiner Substitution, wodurch Schlüsselverwaltung dramatisch einfacher wird.",
        nl: "Het Affiene cijfer gebruikt slechts twee parameters (a,b) met O(φ(26)×26) ≈ O(1) sleutelruimte vs algemene substitutie's 26! faculteit complexiteit, waardoor sleutelbeheer dramatisch eenvoudiger wordt."
      }
    },
    {
      question: {
        en: "Which historical cipher machine influenced the development of modern stream ciphers?",
        es: "¿Qué máquina de cifrado histórica influyó en el desarrollo de cifrados de flujo modernos?",
        de: "Welche historische Chiffremaschine beeinflusste die Entwicklung moderner Stromchiffren?",
        nl: "Welke historische cijfermachine beïnvloedde de ontwikkeling van moderne stream-cijfers?"
      },
      options: [
        { en: "Hagelin M-209 rotor system", es: "Sistema de rotor Hagelin M-209", de: "Hagelin M-209 Rotorsystem", nl: "Hagelin M-209 rotor systeem" },
        { en: "Lorenz SZ-42 teleprinter cipher", es: "Cifrado de teletipo Lorenz SZ-42", de: "Lorenz SZ-42 Fernschreiber-Chiffre", nl: "Lorenz SZ-42 teletype cijfer" },
        { en: "Siemens T52 keyboard encryptor", es: "Cifrador de teclado Siemens T52", de: "Siemens T52 Tastatur-Verschlüsseler", nl: "Siemens T52 toetsenbord versleutelaar" },
        { en: "Purple cipher analytical engine", es: "Motor analítico de cifrado Purple", de: "Purple-Chiffre-Analysemaschine", nl: "Purple cijfer analytische machine" }
      ],
      correct: 1,
      explanation: {
        en: "The Lorenz SZ-42 used binary addition (XOR) with pseudorandom keystreams generated by mechanical wheels, establishing the fundamental principle underlying modern stream cipher design.",
        es: "El Lorenz SZ-42 usó suma binaria (XOR) con flujos de clave pseudoaleatorios generados por ruedas mecánicas, estableciendo el principio fundamental subyacente al diseño de cifrados de flujo modernos.",
        de: "Die Lorenz SZ-42 verwendete binäre Addition (XOR) mit pseudozufälligen Schlüsselströmen, die von mechanischen Rädern erzeugt wurden, und etablierte das grundlegende Prinzip moderner Stromchiffren-Designs.",
        nl: "De Lorenz SZ-42 gebruikte binaire optelling (XOR) met pseudowillekeurige sleutelstromen gegenereerd door mechanische wielen, wat het fundamentele principe vestigde dat ten grondslag ligt aan modern stream-cijfer ontwerp."
      }
    }
  ]
});
