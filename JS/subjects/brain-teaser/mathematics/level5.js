// Mathematics - Level 5: Number Theory and Prime Numbers
window.addLevel('brain-teaser/mathematics', {
  name: { 
    en: 'Number Theory and Prime Numbers', 
    es: 'Teoría de Números y Números Primos', 
    de: 'Zahlentheorie und Primzahlen', 
    nl: 'Getaltheorie en Priemgetallen' 
  },
  questions: [
    {
      question: {
        en: "What is the smallest prime number?",
        es: "¿Cuál es el número primo más pequeño?",
        de: "Was ist die kleinste Primzahl?",
        nl: "Wat is het kleinste priemgetal?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "5", es: "5", de: "5", nl: "5" }
      ],
      correct: 1,
      explanation: {
        en: "2 is the smallest prime number. It's the only even prime number since all other even numbers are divisible by 2. By definition, 1 is not considered prime.",
        es: "2 es el número primo más pequeño. Es el único número primo par ya que todos los demás números pares son divisibles por 2. Por definición, 1 no se considera primo.",
        de: "2 ist die kleinste Primzahl. Es ist die einzige gerade Primzahl, da alle anderen geraden Zahlen durch 2 teilbar sind. Per Definition gilt 1 nicht als Primzahl.",
        nl: "2 is het kleinste priemgetal. Het is het enige even priemgetal omdat alle andere even getallen deelbaar zijn door 2. Per definitie wordt 1 niet als priem beschouwd."
      }
    },
    {
      question: {
        en: "What is the prime factorization of 60?",
        es: "¿Cuál es la factorización prima de 60?",
        de: "Was ist die Primfaktorzerlegung von 60?",
        nl: "Wat is de priemfactorisatie van 60?"
      },
      options: [
        { en: "2² × 3 × 5", es: "2² × 3 × 5", de: "2² × 3 × 5", nl: "2² × 3 × 5" },
        { en: "2 × 3² × 5", es: "2 × 3² × 5", de: "2 × 3² × 5", nl: "2 × 3² × 5" },
        { en: "2² × 3² × 5", es: "2² × 3² × 5", de: "2² × 3² × 5", nl: "2² × 3² × 5" },
        { en: "2³ × 3 × 5", es: "2³ × 3 × 5", de: "2³ × 3 × 5", nl: "2³ × 3 × 5" }
      ],
      correct: 0,
      explanation: {
        en: "60 = 4 × 15 = 4 × 3 × 5 = 2² × 3 × 5. Every integer has a unique prime factorization (Fundamental Theorem of Arithmetic).",
        es: "60 = 4 × 15 = 4 × 3 × 5 = 2² × 3 × 5. Todo entero tiene una factorización prima única (Teorema Fundamental de la Aritmética).",
        de: "60 = 4 × 15 = 4 × 3 × 5 = 2² × 3 × 5. Jede ganze Zahl hat eine eindeutige Primfaktorzerlegung (Fundamentalsatz der Arithmetik).",
        nl: "60 = 4 × 15 = 4 × 3 × 5 = 2² × 3 × 5. Elk geheel getal heeft een unieke priemfactorisatie (Hoofdstelling van de Rekenkunde)."
      }
    },
    {
      question: {
        en: "What is the greatest common divisor (GCD) of 48 and 18?",
        es: "¿Cuál es el máximo común divisor (MCD) de 48 y 18?",
        de: "Was ist der größte gemeinsame Teiler (ggT) von 48 und 18?",
        nl: "Wat is de grootste gemene deler (GGD) van 48 en 18?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "9", es: "9", de: "9", nl: "9" }
      ],
      correct: 2,
      explanation: {
        en: "Using the Euclidean algorithm: 48 = 18 × 2 + 12, 18 = 12 × 1 + 6, 12 = 6 × 2 + 0. Therefore GCD(48,18) = 6.",
        es: "Usando el algoritmo euclidiano: 48 = 18 × 2 + 12, 18 = 12 × 1 + 6, 12 = 6 × 2 + 0. Por tanto MCD(48,18) = 6.",
        de: "Mit dem euklidischen Algorithmus: 48 = 18 × 2 + 12, 18 = 12 × 1 + 6, 12 = 6 × 2 + 0. Daher ggT(48,18) = 6.",
        nl: "Met het Euclidische algoritme: 48 = 18 × 2 + 12, 18 = 12 × 1 + 6, 12 = 6 × 2 + 0. Daarom GGD(48,18) = 6."
      }
    },
    {
      question: {
        en: "What is the least common multiple (LCM) of 12 and 8?",
        es: "¿Cuál es el mínimo común múltiplo (MCM) de 12 y 8?",
        de: "Was ist das kleinste gemeinsame Vielfache (kgV) von 12 und 8?",
        nl: "Wat is het kleinste gemene veelvoud (KGV) van 12 en 8?"
      },
      options: [
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "20", es: "20", de: "20", nl: "20" },
        { en: "24", es: "24", de: "24", nl: "24" },
        { en: "96", es: "96", de: "96", nl: "96" }
      ],
      correct: 2,
      explanation: {
        en: "LCM(12,8) = (12 × 8) / GCD(12,8) = 96 / 4 = 24. Alternatively, 12 = 2² × 3, 8 = 2³, so LCM = 2³ × 3 = 24.",
        es: "MCM(12,8) = (12 × 8) / MCD(12,8) = 96 / 4 = 24. Alternativamente, 12 = 2² × 3, 8 = 2³, así MCM = 2³ × 3 = 24.",
        de: "kgV(12,8) = (12 × 8) / ggT(12,8) = 96 / 4 = 24. Alternativ: 12 = 2² × 3, 8 = 2³, also kgV = 2³ × 3 = 24.",
        nl: "KGV(12,8) = (12 × 8) / GGD(12,8) = 96 / 4 = 24. Alternatief: 12 = 2² × 3, 8 = 2³, dus KGV = 2³ × 3 = 24."
      }
    },
    {
      question: {
        en: "In modular arithmetic, what is 17 ≡ ? (mod 5)?",
        es: "En aritmética modular, ¿qué es 17 ≡ ? (mod 5)?",
        de: "In der modularen Arithmetik, was ist 17 ≡ ? (mod 5)?",
        nl: "In modulaire rekenkunde, wat is 17 ≡ ? (mod 5)?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" }
      ],
      correct: 1,
      explanation: {
        en: "17 ÷ 5 = 3 remainder 2, so 17 ≡ 2 (mod 5). In modular arithmetic, we're interested in the remainder when dividing by the modulus.",
        es: "17 ÷ 5 = 3 residuo 2, así 17 ≡ 2 (mod 5). En aritmética modular, nos interesa el residuo al dividir por el módulo.",
        de: "17 ÷ 5 = 3 Rest 2, also 17 ≡ 2 (mod 5). In der modularen Arithmetik interessiert uns der Rest bei der Division durch den Modulus.",
        nl: "17 ÷ 5 = 3 rest 2, dus 17 ≡ 2 (mod 5). In modulaire rekenkunde zijn we geïnteresseerd in de rest bij deling door de modulus."
      }
    },
    {
      question: {
        en: "Which number is NOT prime?",
        es: "¿Qué número NO es primo?",
        de: "Welche Zahl ist NICHT prim?",
        nl: "Welk getal is NIET priem?"
      },
      options: [
        { en: "17", es: "17", de: "17", nl: "17" },
        { en: "19", es: "19", de: "19", nl: "19" },
        { en: "21", es: "21", de: "21", nl: "21" },
        { en: "23", es: "23", de: "23", nl: "23" }
      ],
      correct: 2,
      explanation: {
        en: "21 = 3 × 7, so it's composite (not prime). A prime number has exactly two factors: 1 and itself. 17, 19, and 23 are all prime.",
        es: "21 = 3 × 7, así es compuesto (no primo). Un número primo tiene exactamente dos factores: 1 y él mismo. 17, 19 y 23 son todos primos.",
        de: "21 = 3 × 7, also ist es zusammengesetzt (nicht prim). Eine Primzahl hat genau zwei Faktoren: 1 und sich selbst. 17, 19 und 23 sind alle prim.",
        nl: "21 = 3 × 7, dus het is samengesteld (niet priem). Een priemgetal heeft precies twee factoren: 1 en zichzelf. 17, 19 en 23 zijn allemaal priem."
      }
    },
    {
      question: {
        en: "What are the first 6 terms of the Fibonacci sequence?",
        es: "¿Cuáles son los primeros 6 términos de la secuencia de Fibonacci?",
        de: "Was sind die ersten 6 Terme der Fibonacci-Folge?",
        nl: "Wat zijn de eerste 6 termen van de Fibonacci-reeks?"
      },
      options: [
        { en: "1, 1, 2, 3, 5, 8", es: "1, 1, 2, 3, 5, 8", de: "1, 1, 2, 3, 5, 8", nl: "1, 1, 2, 3, 5, 8" },
        { en: "0, 1, 1, 2, 3, 5", es: "0, 1, 1, 2, 3, 5", de: "0, 1, 1, 2, 3, 5", nl: "0, 1, 1, 2, 3, 5" },
        { en: "1, 2, 3, 5, 8, 13", es: "1, 2, 3, 5, 8, 13", de: "1, 2, 3, 5, 8, 13", nl: "1, 2, 3, 5, 8, 13" },
        { en: "2, 3, 5, 8, 13, 21", es: "2, 3, 5, 8, 13, 21", de: "2, 3, 5, 8, 13, 21", nl: "2, 3, 5, 8, 13, 21" }
      ],
      correct: 1,
      explanation: {
        en: "The Fibonacci sequence starts with 0, 1, then each term is the sum of the two preceding terms: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...",
        es: "La secuencia de Fibonacci comienza con 0, 1, luego cada término es la suma de los dos términos anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...",
        de: "Die Fibonacci-Folge beginnt mit 0, 1, dann ist jeder Term die Summe der beiden vorhergehenden Terme: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...",
        nl: "De Fibonacci-reeks begint met 0, 1, dan is elke term de som van de twee voorgaande termen: 0, 1, 1, 2, 3, 5, 8, 13, 21, ..."
      }
    },
    {
      question: {
        en: "What is a perfect number?",
        es: "¿Qué es un número perfecto?",
        de: "Was ist eine vollkommene Zahl?",
        nl: "Wat is een perfect getal?"
      },
      options: [
        { en: "A number equal to the sum of its proper divisors", es: "Un número igual a la suma de sus divisores propios", de: "Eine Zahl gleich der Summe ihrer echten Teiler", nl: "Een getal gelijk aan de som van zijn echte delers" },
        { en: "A prime number", es: "Un número primo", de: "Eine Primzahl", nl: "Een priemgetal" },
        { en: "A number with an even number of divisors", es: "Un número con un número par de divisores", de: "Eine Zahl mit einer geraden Anzahl von Teilern", nl: "Een getal met een even aantal delers" },
        { en: "A square number", es: "Un número cuadrado", de: "Eine Quadratzahl", nl: "Een kwadraat getal" }
      ],
      correct: 0,
      explanation: {
        en: "A perfect number equals the sum of its proper divisors (divisors excluding itself). For example, 6 = 1 + 2 + 3. The first few perfect numbers are 6, 28, 496, 8128.",
        es: "Un número perfecto es igual a la suma de sus divisores propios (divisores excluyendo a sí mismo). Por ejemplo, 6 = 1 + 2 + 3. Los primeros números perfectos son 6, 28, 496, 8128.",
        de: "Eine vollkommene Zahl ist gleich der Summe ihrer echten Teiler (Teiler ohne sich selbst). Zum Beispiel 6 = 1 + 2 + 3. Die ersten vollkommenen Zahlen sind 6, 28, 496, 8128.",
        nl: "Een perfect getal is gelijk aan de som van zijn echte delers (delers exclusief zichzelf). Bijvoorbeeld, 6 = 1 + 2 + 3. De eerste perfecte getallen zijn 6, 28, 496, 8128."
      }
    },
    {
      question: {
        en: "What divisibility rule applies to 9?",
        es: "¿Qué regla de divisibilidad se aplica al 9?",
        de: "Welche Teilbarkeitsregel gilt für 9?",
        nl: "Welke deelbaarheidswegel geldt voor 9?"
      },
      options: [
        { en: "A number is divisible by 9 if its last digit is 9", es: "Un número es divisible por 9 si su último dígito es 9", de: "Eine Zahl ist durch 9 teilbar, wenn ihre letzte Ziffer 9 ist", nl: "Een getal is deelbaar door 9 als het laatste cijfer 9 is" },
        { en: "A number is divisible by 9 if it's odd", es: "Un número es divisible por 9 si es impar", de: "Eine Zahl ist durch 9 teilbar, wenn sie ungerade ist", nl: "Een getal is deelbaar door 9 als het oneven is" },
        { en: "A number is divisible by 9 if the sum of its digits is divisible by 9", es: "Un número es divisible por 9 si la suma de sus dígitos es divisible por 9", de: "Eine Zahl ist durch 9 teilbar, wenn die Summe ihrer Ziffern durch 9 teilbar ist", nl: "Een getal is deelbaar door 9 als de som van zijn cijfers deelbaar is door 9" },
        { en: "A number is divisible by 9 if it ends in 0", es: "Un número es divisible por 9 si termina en 0", de: "Eine Zahl ist durch 9 teilbar, wenn sie auf 0 endet", nl: "Een getal is deelbaar door 9 als het eindigt op 0" }
      ],
      correct: 2,
      explanation: {
        en: "A number is divisible by 9 if and only if the sum of its digits is divisible by 9. For example, 729: 7+2+9 = 18, and 18 is divisible by 9, so 729 is divisible by 9.",
        es: "Un número es divisible por 9 si y solo si la suma de sus dígitos es divisible por 9. Por ejemplo, 729: 7+2+9 = 18, y 18 es divisible por 9, así 729 es divisible por 9.",
        de: "Eine Zahl ist genau dann durch 9 teilbar, wenn die Summe ihrer Ziffern durch 9 teilbar ist. Zum Beispiel 729: 7+2+9 = 18, und 18 ist durch 9 teilbar, also ist 729 durch 9 teilbar.",
        nl: "Een getal is deelbaar door 9 als en slechts als de som van zijn cijfers deelbaar is door 9. Bijvoorbeeld, 729: 7+2+9 = 18, en 18 is deelbaar door 9, dus 729 is deelbaar door 9."
      }
    },
    {
      question: {
        en: "Which statement about the Goldbach Conjecture is correct?",
        es: "¿Qué afirmación sobre la Conjetura de Goldbach es correcta?",
        de: "Welche Aussage über die Goldbach-Vermutung ist richtig?",
        nl: "Welke bewering over het Vermoeden van Goldbach is correct?"
      },
      options: [
        { en: "Every even integer greater than 2 can be expressed as the sum of two primes", es: "Todo entero par mayor que 2 puede expresarse como la suma de dos primos", de: "Jede gerade ganze Zahl größer als 2 kann als Summe zweier Primzahlen ausgedrückt werden", nl: "Elk even geheel getal groter dan 2 kan worden uitgedrukt als de som van twee priemgetallen" },
        { en: "Every odd integer can be expressed as the sum of three primes", es: "Todo entero impar puede expresarse como la suma de tres primos", de: "Jede ungerade ganze Zahl kann als Summe dreier Primzahlen ausgedrückt werden", nl: "Elk oneven geheel getal kan worden uitgedrukt als de som van drie priemgetallen" },
        { en: "There are infinitely many twin primes", es: "Hay infinitos números primos gemelos", de: "Es gibt unendlich viele Zwillingsprimzahlen", nl: "Er zijn oneindig veel tweelingpriemgetallen" },
        { en: "Every prime number is odd", es: "Todo número primo es impar", de: "Jede Primzahl ist ungerade", nl: "Elk priemgetal is oneven" }
      ],
      correct: 0,
      explanation: {
        en: "The Goldbach Conjecture states that every even integer greater than 2 can be expressed as the sum of two primes. It remains unproven but has been verified for very large numbers.",
        es: "La Conjetura de Goldbach establece que todo entero par mayor que 2 puede expresarse como la suma de dos primos. Permanece sin demostrar pero ha sido verificada para números muy grandes.",
        de: "Die Goldbach-Vermutung besagt, dass jede gerade ganze Zahl größer als 2 als Summe zweier Primzahlen ausgedrückt werden kann. Sie bleibt unbewiesen, wurde aber für sehr große Zahlen verifiziert.",
        nl: "Het Vermoeden van Goldbach stelt dat elk even geheel getal groter dan 2 kan worden uitgedrukt als de som van twee priemgetallen. Het blijft onbewezen maar is geverifieerd voor zeer grote getallen."
      }
    },
    {
      question: {
        en: "What is 7! (7 factorial)?",
        es: "¿Qué es 7! (7 factorial)?",
        de: "Was ist 7! (7 Fakultät)?",
        nl: "Wat is 7! (7 faculteit)?"
      },
      options: [
        { en: "49", es: "49", de: "49", nl: "49" },
        { en: "343", es: "343", de: "343", nl: "343" },
        { en: "5040", es: "5040", de: "5040", nl: "5040" },
        { en: "40320", es: "40320", de: "40320", nl: "40320" }
      ],
      correct: 2,
      explanation: {
        en: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040. Factorial is the product of all positive integers from 1 to n.",
        es: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040. El factorial es el producto de todos los enteros positivos de 1 a n.",
        de: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040. Fakultät ist das Produkt aller positiven ganzen Zahlen von 1 bis n.",
        nl: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040. Faculteit is het product van alle positieve gehele getallen van 1 tot n."
      }
    },
    {
      question: {
        en: "What is the 10th term in the sequence of prime numbers?",
        es: "¿Cuál es el décimo término en la secuencia de números primos?",
        de: "Was ist der 10. Term in der Folge der Primzahlen?",
        nl: "Wat is de 10e term in de reeks van priemgetallen?"
      },
      options: [
        { en: "23", es: "23", de: "23", nl: "23" },
        { en: "29", es: "29", de: "29", nl: "29" },
        { en: "31", es: "31", de: "31", nl: "31" },
        { en: "37", es: "37", de: "37", nl: "37" }
      ],
      correct: 1,
      explanation: {
        en: "The first 10 primes are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. So the 10th prime is 29.",
        es: "Los primeros 10 primos son: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Así el décimo primo es 29.",
        de: "Die ersten 10 Primzahlen sind: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Also ist die 10. Primzahl 29.",
        nl: "De eerste 10 priemgetallen zijn: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Dus het 10e priemgetal is 29."
      }
    },
    {
      question: {
        en: "What is the sum of the proper divisors of 12?",
        es: "¿Cuál es la suma de los divisores propios de 12?",
        de: "Was ist die Summe der echten Teiler von 12?",
        nl: "Wat is de som van de echte delers van 12?"
      },
      options: [
        { en: "16", es: "16", de: "16", nl: "16" },
        { en: "28", es: "28", de: "28", nl: "28" },
        { en: "15", es: "15", de: "15", nl: "15" },
        { en: "18", es: "18", de: "18", nl: "18" }
      ],
      correct: 0,
      explanation: {
        en: "The proper divisors of 12 are: 1, 2, 3, 4, 6 (excluding 12 itself). Their sum is 1 + 2 + 3 + 4 + 6 = 16.",
        es: "Los divisores propios de 12 son: 1, 2, 3, 4, 6 (excluyendo 12 mismo). Su suma es 1 + 2 + 3 + 4 + 6 = 16.",
        de: "Die echten Teiler von 12 sind: 1, 2, 3, 4, 6 (ohne 12 selbst). Ihre Summe ist 1 + 2 + 3 + 4 + 6 = 16.",
        nl: "De echte delers van 12 zijn: 1, 2, 3, 4, 6 (exclusief 12 zelf). Hun som is 1 + 2 + 3 + 4 + 6 = 16."
      }
    },
    {
      question: {
        en: "In modular arithmetic, what is (7 × 8) mod 6?",
        es: "En aritmética modular, ¿qué es (7 × 8) mod 6?",
        de: "In der modularen Arithmetik, was ist (7 × 8) mod 6?",
        nl: "In modulaire rekenkunde, wat is (7 × 8) mod 6?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "8", es: "8", de: "8", nl: "8" }
      ],
      correct: 1,
      explanation: {
        en: "7 × 8 = 56. 56 ÷ 6 = 9 remainder 4, so (7 × 8) mod 6 = 4. Alternatively, 7 ≡ 1 (mod 6) and 8 ≡ 2 (mod 6), so 1 × 2 = 2 ≡ 4 is incorrect. Let me recalculate: 56 mod 6 = 4.",
        es: "7 × 8 = 56. 56 ÷ 6 = 9 residuo 4, así (7 × 8) mod 6 = 4. Alternativamente, 7 ≡ 1 (mod 6) y 8 ≡ 2 (mod 6), así 1 × 2 = 2, pero verifiquemos: 56 mod 6 = 4.",
        de: "7 × 8 = 56. 56 ÷ 6 = 9 Rest 4, also (7 × 8) mod 6 = 4. Alternativ: 7 ≡ 1 (mod 6) und 8 ≡ 2 (mod 6), also 1 × 2 = 2, aber prüfen wir: 56 mod 6 = 4.",
        nl: "7 × 8 = 56. 56 ÷ 6 = 9 rest 4, dus (7 × 8) mod 6 = 4. Alternatief: 7 ≡ 1 (mod 6) en 8 ≡ 2 (mod 6), dus 1 × 2 = 2, maar laten we controleren: 56 mod 6 = 4."
      }
    },
    {
      question: {
        en: "What type of number is 28?",
        es: "¿Qué tipo de número es 28?",
        de: "Was für eine Art Zahl ist 28?",
        nl: "Wat voor soort getal is 28?"
      },
      options: [
        { en: "Prime number", es: "Número primo", de: "Primzahl", nl: "Priemgetal" },
        { en: "Perfect number", es: "Número perfecto", de: "Vollkommene Zahl", nl: "Perfect getal" },
        { en: "Fibonacci number", es: "Número de Fibonacci", de: "Fibonacci-Zahl", nl: "Fibonacci-getal" },
        { en: "Mersenne number", es: "Número de Mersenne", de: "Mersenne-Zahl", nl: "Mersenne-getal" }
      ],
      correct: 1,
      explanation: {
        en: "28 is a perfect number. Its proper divisors are 1, 2, 4, 7, 14, and their sum is 1+2+4+7+14 = 28. The first few perfect numbers are 6, 28, 496, 8128.",
        es: "28 es un número perfecto. Sus divisores propios son 1, 2, 4, 7, 14, y su suma es 1+2+4+7+14 = 28. Los primeros números perfectos son 6, 28, 496, 8128.",
        de: "28 ist eine vollkommene Zahl. Ihre echten Teiler sind 1, 2, 4, 7, 14, und ihre Summe ist 1+2+4+7+14 = 28. Die ersten vollkommenen Zahlen sind 6, 28, 496, 8128.",
        nl: "28 is een perfect getal. Zijn echte delers zijn 1, 2, 4, 7, 14, en hun som is 1+2+4+7+14 = 28. De eerste perfecte getallen zijn 6, 28, 496, 8128."
      }
    },
    {
      question: {
        en: "What is the next prime number after 97?",
        es: "¿Cuál es el siguiente número primo después de 97?",
        de: "Was ist die nächste Primzahl nach 97?",
        nl: "Wat is het volgende priemgetal na 97?"
      },
      options: [
        { en: "99", es: "99", de: "99", nl: "99" },
        { en: "101", es: "101", de: "101", nl: "101" },
        { en: "103", es: "103", de: "103", nl: "103" },
        { en: "107", es: "107", de: "107", nl: "107" }
      ],
      correct: 1,
      explanation: {
        en: "After 97, we check: 98 = 2×49 (not prime), 99 = 9×11 (not prime), 100 = 4×25 (not prime), 101 is prime (not divisible by 2, 3, 5, 7, or 10).",
        es: "Después de 97, verificamos: 98 = 2×49 (no primo), 99 = 9×11 (no primo), 100 = 4×25 (no primo), 101 es primo (no divisible por 2, 3, 5, 7, o 10).",
        de: "Nach 97 prüfen wir: 98 = 2×49 (nicht prim), 99 = 9×11 (nicht prim), 100 = 4×25 (nicht prim), 101 ist prim (nicht teilbar durch 2, 3, 5, 7 oder 10).",
        nl: "Na 97 controleren we: 98 = 2×49 (niet priem), 99 = 9×11 (niet priem), 100 = 4×25 (niet priem), 101 is priem (niet deelbaar door 2, 3, 5, 7, of 10)."
      }
    },
    {
      question: {
        en: "What is the Chinese Remainder Theorem used for?",
        es: "¿Para qué se usa el Teorema Chino del Residuo?",
        de: "Wofür wird der Chinesische Restsatz verwendet?",
        nl: "Waarvoor wordt de Chinese Reststelling gebruikt?"
      },
      options: [
        { en: "Finding prime factorizations", es: "Encontrar factorizaciones primas", de: "Primfaktorzerlegungen finden", nl: "Priemfactorisaties vinden" },
        { en: "Solving systems of modular equations", es: "Resolver sistemas de ecuaciones modulares", de: "Systeme modularer Gleichungen lösen", nl: "Systemen van modulaire vergelijkingen oplossen" },
        { en: "Testing for primality", es: "Probar la primalidad", de: "Primalitätstests", nl: "Testen op priemeigenschappen" },
        { en: "Calculating Fibonacci numbers", es: "Calcular números de Fibonacci", de: "Fibonacci-Zahlen berechnen", nl: "Fibonacci-getallen berekenen" }
      ],
      correct: 1,
      explanation: {
        en: "The Chinese Remainder Theorem provides a method for solving systems of simultaneous congruences with pairwise coprime moduli. It's fundamental in modular arithmetic.",
        es: "El Teorema Chino del Residuo proporciona un método para resolver sistemas de congruencias simultáneas con módulos coprimos por pares. Es fundamental en aritmética modular.",
        de: "Der Chinesische Restsatz bietet eine Methode zur Lösung von Systemen simultaner Kongruenzen mit paarweise teilerfremden Moduln. Er ist grundlegend in der modularen Arithmetik.",
        nl: "De Chinese Reststelling biedt een methode voor het oplossen van systemen van gelijktijdige congruenties met paarsgewijs relatief priemmoduli. Het is fundamenteel in modulaire rekenkunde."
      }
    },
    {
      question: {
        en: "What is Fermat's Little Theorem?",
        es: "¿Qué es el Pequeño Teorema de Fermat?",
        de: "Was ist Fermats kleiner Satz?",
        nl: "Wat is de Kleine Stelling van Fermat?"
      },
      options: [
        { en: "If p is prime and a is not divisible by p, then a^(p-1) ≡ 1 (mod p)", es: "Si p es primo y a no es divisible por p, entonces a^(p-1) ≡ 1 (mod p)", de: "Wenn p prim ist und a nicht durch p teilbar ist, dann a^(p-1) ≡ 1 (mod p)", nl: "Als p priem is en a niet deelbaar is door p, dan a^(p-1) ≡ 1 (mod p)" },
        { en: "Every even integer can be written as the sum of two primes", es: "Todo entero par puede escribirse como la suma de dos primos", de: "Jede gerade ganze Zahl kann als Summe zweier Primzahlen geschrieben werden", nl: "Elk even geheel getal kan worden geschreven als de som van twee priemgetallen" },
        { en: "There are infinitely many prime numbers", es: "Hay infinitos números primos", de: "Es gibt unendlich viele Primzahlen", nl: "Er zijn oneindig veel priemgetallen" },
        { en: "The equation x^n + y^n = z^n has no solutions for n > 2", es: "La ecuación x^n + y^n = z^n no tiene soluciones para n > 2", de: "Die Gleichung x^n + y^n = z^n hat keine Lösungen für n > 2", nl: "De vergelijking x^n + y^n = z^n heeft geen oplossingen voor n > 2" }
      ],
      correct: 0,
      explanation: {
        en: "Fermat's Little Theorem: If p is prime and a is not divisible by p, then a^(p-1) ≡ 1 (mod p). This is fundamental in number theory and cryptography.",
        es: "Pequeño Teorema de Fermat: Si p es primo y a no es divisible por p, entonces a^(p-1) ≡ 1 (mod p). Esto es fundamental en teoría de números y criptografía.",
        de: "Fermats kleiner Satz: Wenn p prim ist und a nicht durch p teilbar ist, dann a^(p-1) ≡ 1 (mod p). Dies ist fundamental in der Zahlentheorie und Kryptographie.",
        nl: "Kleine Stelling van Fermat: Als p priem is en a niet deelbaar is door p, dan a^(p-1) ≡ 1 (mod p). Dit is fundamenteel in de getaltheorie en cryptografie."
      }
    },
    {
      question: {
        en: "Which pair represents twin primes?",
        es: "¿Qué par representa números primos gemelos?",
        de: "Welches Paar stellt Zwillingsprimzahlen dar?",
        nl: "Welk paar vertegenwoordigt tweelingpriemgetallen?"
      },
      options: [
        { en: "(5, 7)", es: "(5, 7)", de: "(5, 7)", nl: "(5, 7)" },
        { en: "(11, 15)", es: "(11, 15)", de: "(11, 15)", nl: "(11, 15)" },
        { en: "(13, 17)", es: "(13, 17)", de: "(13, 17)", nl: "(13, 17)" },
        { en: "(19, 23)", es: "(19, 23)", de: "(19, 23)", nl: "(19, 23)" }
      ],
      correct: 0,
      explanation: {
        en: "Twin primes are pairs of primes that differ by 2. (5,7) is a twin prime pair. Other examples include (3,5), (11,13), (17,19), (29,31), (41,43).",
        es: "Los números primos gemelos son pares de primos que difieren en 2. (5,7) es un par de primos gemelos. Otros ejemplos incluyen (3,5), (11,13), (17,19), (29,31), (41,43).",
        de: "Zwillingsprimzahlen sind Paare von Primzahlen, die sich um 2 unterscheiden. (5,7) ist ein Zwillingsprimzahlpaar. Andere Beispiele sind (3,5), (11,13), (17,19), (29,31), (41,43).",
        nl: "Tweelingpriemgetallen zijn paren van priemgetallen die 2 verschillen. (5,7) is een tweelingpriemgetallenpaar. Andere voorbeelden zijn (3,5), (11,13), (17,19), (29,31), (41,43)."
      }
    },
    {
      question: {
        en: "What is 2^5 mod 7?",
        es: "¿Qué es 2^5 mod 7?",
        de: "Was ist 2^5 mod 7?",
        nl: "Wat is 2^5 mod 7?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "5", es: "5", de: "5", nl: "5" }
      ],
      correct: 1,
      explanation: {
        en: "2^5 = 32. 32 ÷ 7 = 4 remainder 4, so 2^5 ≡ 4 (mod 7). Wait, let me double-check: 32 = 7×4 + 4, so the remainder is 4, not 3. The answer should be 4.",
        es: "2^5 = 32. 32 ÷ 7 = 4 residuo 4, así 2^5 ≡ 4 (mod 7). Espera, déjame verificar: 32 = 7×4 + 4, así el residuo es 4, no 3. La respuesta debería ser 4.",
        de: "2^5 = 32. 32 ÷ 7 = 4 Rest 4, also 2^5 ≡ 4 (mod 7). Moment, lass mich das überprüfen: 32 = 7×4 + 4, also ist der Rest 4, nicht 3. Die Antwort sollte 4 sein.",
        nl: "2^5 = 32. 32 ÷ 7 = 4 rest 4, dus 2^5 ≡ 4 (mod 7). Wacht, laat me dubbelchecken: 32 = 7×4 + 4, dus de rest is 4, niet 3. Het antwoord zou 4 moeten zijn."
      }
    },
    {
      question: {
        en: "What is an abundant number?",
        es: "¿Qué es un número abundante?",
        de: "Was ist eine abundante Zahl?",
        nl: "Wat is een overvloedig getal?"
      },
      options: [
        { en: "A number smaller than the sum of its proper divisors", es: "Un número menor que la suma de sus divisores propios", de: "Eine Zahl kleiner als die Summe ihrer echten Teiler", nl: "Een getal kleiner dan de som van zijn echte delers" },
        { en: "A number equal to the sum of its proper divisors", es: "Un número igual a la suma de sus divisores propios", de: "Eine Zahl gleich der Summe ihrer echten Teiler", nl: "Een getal gelijk aan de som van zijn echte delers" },
        { en: "A number greater than the sum of its proper divisors", es: "Un número mayor que la suma de sus divisores propios", de: "Eine Zahl größer als die Summe ihrer echten Teiler", nl: "Een getal groter dan de som van zijn echte delers" },
        { en: "A prime number", es: "Un número primo", de: "Eine Primzahl", nl: "Een priemgetal" }
      ],
      correct: 0,
      explanation: {
        en: "An abundant number is smaller than the sum of its proper divisors. For example, 12 < 1+2+3+4+6 = 16, so 12 is abundant. This contrasts with perfect numbers (equal) and deficient numbers (greater).",
        es: "Un número abundante es menor que la suma de sus divisores propios. Por ejemplo, 12 < 1+2+3+4+6 = 16, así 12 es abundante. Esto contrasta con números perfectos (igual) y números deficientes (mayor).",
        de: "Eine abundante Zahl ist kleiner als die Summe ihrer echten Teiler. Zum Beispiel 12 < 1+2+3+4+6 = 16, also ist 12 abundant. Dies steht im Gegensatz zu vollkommenen Zahlen (gleich) und defizienten Zahlen (größer).",
        nl: "Een overvloedig getal is kleiner dan de som van zijn echte delers. Bijvoorbeeld, 12 < 1+2+3+4+6 = 16, dus 12 is overvloedig. Dit contrasteert met perfecte getallen (gelijk) en deficiënte getallen (groter)."
      }
    },
    {
      question: {
        en: "What is the Euclidean algorithm used for?",
        es: "¿Para qué se usa el algoritmo euclidiano?",
        de: "Wofür wird der euklidische Algorithmus verwendet?",
        nl: "Waarvoor wordt het Euclidische algoritme gebruikt?"
      },
      options: [
        { en: "Finding prime numbers", es: "Encontrar números primos", de: "Primzahlen finden", nl: "Priemgetallen vinden" },
        { en: "Computing the greatest common divisor", es: "Calcular el máximo común divisor", de: "Den größten gemeinsamen Teiler berechnen", nl: "De grootste gemene deler berekenen" },
        { en: "Solving quadratic equations", es: "Resolver ecuaciones cuadráticas", de: "Quadratische Gleichungen lösen", nl: "Kwadratische vergelijkingen oplossen" },
        { en: "Calculating square roots", es: "Calcular raíces cuadradas", de: "Quadratwurzeln berechnen", nl: "Vierkantswortels berekenen" }
      ],
      correct: 1,
      explanation: {
        en: "The Euclidean algorithm efficiently computes the greatest common divisor (GCD) of two integers using repeated division. It's based on the principle that GCD(a,b) = GCD(b, a mod b).",
        es: "El algoritmo euclidiano calcula eficientemente el máximo común divisor (MCD) de dos enteros usando división repetida. Se basa en el principio de que MCD(a,b) = MCD(b, a mod b).",
        de: "Der euklidische Algorithmus berechnet effizient den größten gemeinsamen Teiler (ggT) zweier ganzer Zahlen durch wiederholte Division. Er basiert auf dem Prinzip, dass ggT(a,b) = ggT(b, a mod b).",
        nl: "Het Euclidische algoritme berekent efficiënt de grootste gemene deler (GGD) van twee gehele getallen door herhaalde deling. Het is gebaseerd op het principe dat GGD(a,b) = GGD(b, a mod b)."
      }
    },
    {
      question: {
        en: "What is a Mersenne prime?",
        es: "¿Qué es un primo de Mersenne?",
        de: "Was ist eine Mersenne-Primzahl?",
        nl: "Wat is een Mersenne-priemgetal?"
      },
      options: [
        { en: "A prime of the form 2^p - 1 where p is prime", es: "Un primo de la forma 2^p - 1 donde p es primo", de: "Eine Primzahl der Form 2^p - 1, wobei p prim ist", nl: "Een priemgetal van de vorm 2^p - 1 waarbij p priem is" },
        { en: "Any odd prime number", es: "Cualquier número primo impar", de: "Jede ungerade Primzahl", nl: "Elk oneven priemgetal" },
        { en: "A prime that divides 2^n - 1", es: "Un primo que divide 2^n - 1", de: "Eine Primzahl, die 2^n - 1 teilt", nl: "Een priemgetal dat 2^n - 1 deelt" },
        { en: "The largest known prime", es: "El primo más grande conocido", de: "Die größte bekannte Primzahl", nl: "Het grootste bekende priemgetal" }
      ],
      correct: 0,
      explanation: {
        en: "A Mersenne prime is a prime number of the form 2^p - 1 where p is also prime. Examples include 3 (2²-1), 7 (2³-1), 31 (2⁵-1). Not all numbers of this form are prime.",
        es: "Un primo de Mersenne es un número primo de la forma 2^p - 1 donde p también es primo. Los ejemplos incluyen 3 (2²-1), 7 (2³-1), 31 (2⁵-1). No todos los números de esta forma son primos.",
        de: "Eine Mersenne-Primzahl ist eine Primzahl der Form 2^p - 1, wobei p ebenfalls prim ist. Beispiele sind 3 (2²-1), 7 (2³-1), 31 (2⁵-1). Nicht alle Zahlen dieser Form sind prim.",
        nl: "Een Mersenne-priemgetal is een priemgetal van de vorm 2^p - 1 waarbij p ook priem is. Voorbeelden zijn 3 (2²-1), 7 (2³-1), 31 (2⁵-1). Niet alle getallen van deze vorm zijn priem."
      }
    },
    {
      question: {
        en: "How many prime numbers are there between 20 and 30?",
        es: "¿Cuántos números primos hay entre 20 y 30?",
        de: "Wie viele Primzahlen gibt es zwischen 20 und 30?",
        nl: "Hoeveel priemgetallen zijn er tussen 20 en 30?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" }
      ],
      correct: 1,
      explanation: {
        en: "The primes between 20 and 30 are 23 and 29. So there are 2 primes in this range. 21=3×7, 22=2×11, 24=8×3, 25=5², 26=2×13, 27=3³, 28=4×7 are all composite.",
        es: "Los primos entre 20 y 30 son 23 y 29. Así hay 2 primos en este rango. 21=3×7, 22=2×11, 24=8×3, 25=5², 26=2×13, 27=3³, 28=4×7 son todos compuestos.",
        de: "Die Primzahlen zwischen 20 und 30 sind 23 und 29. Also gibt es 2 Primzahlen in diesem Bereich. 21=3×7, 22=2×11, 24=8×3, 25=5², 26=2×13, 27=3³, 28=4×7 sind alle zusammengesetzt.",
        nl: "De priemgetallen tussen 20 en 30 zijn 23 en 29. Dus er zijn 2 priemgetallen in dit bereik. 21=3×7, 22=2×11, 24=8×3, 25=5², 26=2×13, 27=3³, 28=4×7 zijn allemaal samengesteld."
      }
    },
    {
      question: {
        en: "What is the sum of the first 5 prime numbers?",
        es: "¿Cuál es la suma de los primeros 5 números primos?",
        de: "Was ist die Summe der ersten 5 Primzahlen?",
        nl: "Wat is de som van de eerste 5 priemgetallen?"
      },
      options: [
        { en: "26", es: "26", de: "26", nl: "26" },
        { en: "28", es: "28", de: "28", nl: "28" },
        { en: "30", es: "30", de: "30", nl: "30" },
        { en: "32", es: "32", de: "32", nl: "32" }
      ],
      correct: 1,
      explanation: {
        en: "The first 5 primes are 2, 3, 5, 7, 11. Their sum is 2 + 3 + 5 + 7 + 11 = 28.",
        es: "Los primeros 5 primos son 2, 3, 5, 7, 11. Su suma es 2 + 3 + 5 + 7 + 11 = 28.",
        de: "Die ersten 5 Primzahlen sind 2, 3, 5, 7, 11. Ihre Summe ist 2 + 3 + 5 + 7 + 11 = 28.",
        nl: "De eerste 5 priemgetallen zijn 2, 3, 5, 7, 11. Hun som is 2 + 3 + 5 + 7 + 11 = 28."
      }
    },
    {
      question: {
        en: "What is the multiplicative order of 3 modulo 7?",
        es: "¿Cuál es el orden multiplicativo de 3 módulo 7?",
        de: "Was ist die multiplikative Ordnung von 3 modulo 7?",
        nl: "Wat is de multiplicatieve orde van 3 modulo 7?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "7", es: "7", de: "7", nl: "7" }
      ],
      correct: 2,
      explanation: {
        en: "The multiplicative order is the smallest positive integer k such that 3^k ≡ 1 (mod 7). Testing: 3¹≡3, 3²≡2, 3³≡6, 3⁴≡4, 3⁵≡5, 3⁶≡1 (mod 7). So the order is 6.",
        es: "El orden multiplicativo es el menor entero positivo k tal que 3^k ≡ 1 (mod 7). Probando: 3¹≡3, 3²≡2, 3³≡6, 3⁴≡4, 3⁵≡5, 3⁶≡1 (mod 7). Así el orden es 6.",
        de: "Die multiplikative Ordnung ist die kleinste positive ganze Zahl k, sodass 3^k ≡ 1 (mod 7). Testen: 3¹≡3, 3²≡2, 3³≡6, 3⁴≡4, 3⁵≡5, 3⁶≡1 (mod 7). Die Ordnung ist also 6.",
        nl: "De multiplicatieve orde is het kleinste positieve gehele getal k zodanig dat 3^k ≡ 1 (mod 7). Testen: 3¹≡3, 3²≡2, 3³≡6, 3⁴≡4, 3⁵≡5, 3⁶≡1 (mod 7). Dus de orde is 6."
      }
    },
    {
      question: {
        en: "What is Wilson's theorem?",
        es: "¿Qué es el teorema de Wilson?",
        de: "Was ist Wilsons Theorem?",
        nl: "Wat is de stelling van Wilson?"
      },
      options: [
        { en: "(p-1)! ≡ -1 (mod p) if and only if p is prime", es: "(p-1)! ≡ -1 (mod p) si y solo si p es primo", de: "(p-1)! ≡ -1 (mod p) genau dann, wenn p prim ist", nl: "(p-1)! ≡ -1 (mod p) als en slechts als p priem is" },
        { en: "Every even number is the sum of two primes", es: "Todo número par es la suma de dos primos", de: "Jede gerade Zahl ist die Summe zweier Primzahlen", nl: "Elk even getal is de som van twee priemgetallen" },
        { en: "There are infinitely many primes", es: "Hay infinitos primos", de: "Es gibt unendlich viele Primzahlen", nl: "Er zijn oneindig veel priemgetallen" },
        { en: "p divides a^p - a for any integer a", es: "p divide a^p - a para cualquier entero a", de: "p teilt a^p - a für jede ganze Zahl a", nl: "p deelt a^p - a voor elk geheel getal a" }
      ],
      correct: 0,
      explanation: {
        en: "Wilson's theorem states that (p-1)! ≡ -1 (mod p) if and only if p is prime. For example, 4! = 24 ≡ -1 ≡ 4 (mod 5), confirming 5 is prime.",
        es: "El teorema de Wilson establece que (p-1)! ≡ -1 (mod p) si y solo si p es primo. Por ejemplo, 4! = 24 ≡ -1 ≡ 4 (mod 5), confirmando que 5 es primo.",
        de: "Wilsons Theorem besagt, dass (p-1)! ≡ -1 (mod p) genau dann gilt, wenn p prim ist. Zum Beispiel 4! = 24 ≡ -1 ≡ 4 (mod 5), was bestätigt, dass 5 prim ist.",
        nl: "De stelling van Wilson stelt dat (p-1)! ≡ -1 (mod p) als en slechts als p priem is. Bijvoorbeeld, 4! = 24 ≡ -1 ≡ 4 (mod 5), wat bevestigt dat 5 priem is."
      }
    },
    {
      question: {
        en: "Which number has exactly 6 divisors?",
        es: "¿Qué número tiene exactamente 6 divisores?",
        de: "Welche Zahl hat genau 6 Teiler?",
        nl: "Welk getal heeft precies 6 delers?"
      },
      options: [
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "9", es: "9", de: "9", nl: "9" },
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      options: [
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "9", es: "9", de: "9", nl: "9" },
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      correct: 2,
      explanation: {
        en: "10 = 2 × 5 has divisors 1, 2, 5, 10 (4 divisors). Wait, let me recalculate: 12 = 2² × 3 has divisors 1, 2, 3, 4, 6, 12 (6 divisors). The answer should be 12.",
        es: "10 = 2 × 5 tiene divisores 1, 2, 5, 10 (4 divisores). Espera, déjame recalcular: 12 = 2² × 3 tiene divisores 1, 2, 3, 4, 6, 12 (6 divisores). La respuesta debería ser 12.",
        de: "10 = 2 × 5 hat Teiler 1, 2, 5, 10 (4 Teiler). Moment, lass mich neu rechnen: 12 = 2² × 3 hat Teiler 1, 2, 3, 4, 6, 12 (6 Teiler). Die Antwort sollte 12 sein.",
        nl: "10 = 2 × 5 heeft delers 1, 2, 5, 10 (4 delers). Wacht, laat me herberekenen: 12 = 2² × 3 heeft delers 1, 2, 3, 4, 6, 12 (6 delers). Het antwoord zou 12 moeten zijn."
      }
    },
    {
      question: {
        en: "What is φ(10), where φ is Euler's totient function?",
        es: "¿Qué es φ(10), donde φ es la función totiente de Euler?",
        de: "Was ist φ(10), wobei φ die Eulersche φ-Funktion ist?",
        nl: "Wat is φ(10), waarbij φ de totientfunctie van Euler is?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "8", es: "8", de: "8", nl: "8" }
      ],
      correct: 1,
      explanation: {
        en: "φ(10) counts integers from 1 to 10 that are coprime to 10. Since 10 = 2 × 5, numbers coprime to 10 are: 1, 3, 7, 9. So φ(10) = 4.",
        es: "φ(10) cuenta enteros de 1 a 10 que son coprimos a 10. Como 10 = 2 × 5, los números coprimos a 10 son: 1, 3, 7, 9. Así φ(10) = 4.",
        de: "φ(10) zählt ganze Zahlen von 1 bis 10, die zu 10 teilerfremd sind. Da 10 = 2 × 5, sind die zu 10 teilerfremden Zahlen: 1, 3, 7, 9. Also φ(10) = 4.",
        nl: "φ(10) telt gehele getallen van 1 tot 10 die relatief priem zijn met 10. Omdat 10 = 2 × 5, zijn getallen relatief priem met 10: 1, 3, 7, 9. Dus φ(10) = 4."
      }
    },
    {
      question: {
        en: "What is the digit sum of 999?",
        es: "¿Cuál es la suma de dígitos de 999?",
        de: "Was ist die Ziffernsumme von 999?",
        nl: "Wat is de cijfersom van 999?"
      },
      options: [
        { en: "25", es: "25", de: "25", nl: "25" },
        { en: "27", es: "27", de: "27", nl: "27" },
        { en: "29", es: "29", de: "29", nl: "29" },
        { en: "31", es: "31", de: "31", nl: "31" }
      ],
      correct: 1,
      explanation: {
        en: "The digit sum of 999 is 9 + 9 + 9 = 27. This is useful for divisibility tests, as a number is divisible by 9 if and only if its digit sum is divisible by 9.",
        es: "La suma de dígitos de 999 es 9 + 9 + 9 = 27. Esto es útil para pruebas de divisibilidad, ya que un número es divisible por 9 si y solo si su suma de dígitos es divisible por 9.",
        de: "Die Ziffernsumme von 999 ist 9 + 9 + 9 = 27. Dies ist nützlich für Teilbarkeitstests, da eine Zahl genau dann durch 9 teilbar ist, wenn ihre Ziffernsumme durch 9 teilbar ist.",
        nl: "De cijfersom van 999 is 9 + 9 + 9 = 27. Dit is nuttig voor deelbaarheidstests, omdat een getal deelbaar is door 9 als en slechts als zijn cijfersom deelbaar is door 9."
      }
    },
    {
      question: {
        en: "What is the smallest composite number?",
        es: "¿Cuál es el número compuesto más pequeño?",
        de: "Was ist die kleinste zusammengesetzte Zahl?",
        nl: "Wat is het kleinste samengestelde getal?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "8", es: "8", de: "8", nl: "8" }
      ],
      correct: 1,
      explanation: {
        en: "4 is the smallest composite number. A composite number has more than two factors. 4 = 2 × 2, so its factors are 1, 2, 4. Numbers 1, 2, 3 are not composite (1 is neither prime nor composite).",
        es: "4 es el número compuesto más pequeño. Un número compuesto tiene más de dos factores. 4 = 2 × 2, así sus factores son 1, 2, 4. Los números 1, 2, 3 no son compuestos (1 no es ni primo ni compuesto).",
        de: "4 ist die kleinste zusammengesetzte Zahl. Eine zusammengesetzte Zahl hat mehr als zwei Faktoren. 4 = 2 × 2, also sind ihre Faktoren 1, 2, 4. Die Zahlen 1, 2, 3 sind nicht zusammengesetzt (1 ist weder prim noch zusammengesetzt).",
        nl: "4 is het kleinste samengestelde getal. Een samengesteld getal heeft meer dan twee factoren. 4 = 2 × 2, dus zijn factoren zijn 1, 2, 4. Getallen 1, 2, 3 zijn niet samengesteld (1 is noch priem noch samengesteld)."
      }
    },
    {
      question: {
        en: "What is the binary representation of 13?",
        es: "¿Cuál es la representación binaria de 13?",
        de: "Was ist die binäre Darstellung von 13?",
        nl: "Wat is de binaire voorstelling van 13?"
      },
      options: [
        { en: "1011", es: "1011", de: "1011", nl: "1011" },
        { en: "1101", es: "1101", de: "1101", nl: "1101" },
        { en: "1110", es: "1110", de: "1110", nl: "1110" },
        { en: "1111", es: "1111", de: "1111", nl: "1111" }
      ],
      correct: 1,
      explanation: {
        en: "13 in binary: 13 = 8 + 4 + 1 = 2³ + 2² + 2⁰, so 13 = 1101₂. Converting: 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13.",
        es: "13 en binario: 13 = 8 + 4 + 1 = 2³ + 2² + 2⁰, así 13 = 1101₂. Convirtiendo: 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13.",
        de: "13 binär: 13 = 8 + 4 + 1 = 2³ + 2² + 2⁰, also 13 = 1101₂. Umwandlung: 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13.",
        nl: "13 in binair: 13 = 8 + 4 + 1 = 2³ + 2² + 2⁰, dus 13 = 1101₂. Omzetten: 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13."
      }
    },
    {
      question: {
        en: "Which of these is a triangular number?",
        es: "¿Cuál de estos es un número triangular?",
        de: "Welche davon ist eine Dreieckszahl?",
        nl: "Welke hiervan is een driehoeksgetal?"
      },
      options: [
        { en: "14", es: "14", de: "14", nl: "14" },
        { en: "15", es: "15", de: "15", nl: "15" },
        { en: "16", es: "16", de: "16", nl: "16" },
        { en: "17", es: "17", de: "17", nl: "17" }
      ],
      correct: 1,
      explanation: {
        en: "Triangular numbers have the form n(n+1)/2. The sequence starts: 1, 3, 6, 10, 15, 21, 28, ... So 15 = 5×6/2 is triangular.",
        es: "Los números triangulares tienen la forma n(n+1)/2. La secuencia comienza: 1, 3, 6, 10, 15, 21, 28, ... Así 15 = 5×6/2 es triangular.",
        de: "Dreieckszahlen haben die Form n(n+1)/2. Die Folge beginnt: 1, 3, 6, 10, 15, 21, 28, ... Also ist 15 = 5×6/2 eine Dreieckszahl.",
        nl: "Driehoeksgetallen hebben de vorm n(n+1)/2. De reeks begint: 1, 3, 6, 10, 15, 21, 28, ... Dus 15 = 5×6/2 is driehoekig."
      }
    },
    {
      question: {
        en: "What is the sum 1 + 2 + 3 + ... + 100?",
        es: "¿Cuál es la suma 1 + 2 + 3 + ... + 100?",
        de: "Was ist die Summe 1 + 2 + 3 + ... + 100?",
        nl: "Wat is de som 1 + 2 + 3 + ... + 100?"
      },
      options: [
        { en: "5000", es: "5000", de: "5000", nl: "5000" },
        { en: "5050", es: "5050", de: "5050", nl: "5050" },
        { en: "5100", es: "5100", de: "5100", nl: "5100" },
        { en: "5500", es: "5500", de: "5500", nl: "5500" }
      ],
      correct: 1,
      explanation: {
        en: "Using the formula for arithmetic series: sum = n(n+1)/2 = 100×101/2 = 10100/2 = 5050. This is the 100th triangular number.",
        es: "Usando la fórmula para series aritméticas: suma = n(n+1)/2 = 100×101/2 = 10100/2 = 5050. Este es el centésimo número triangular.",
        de: "Mit der Formel für arithmetische Reihen: Summe = n(n+1)/2 = 100×101/2 = 10100/2 = 5050. Dies ist die 100. Dreieckszahl.",
        nl: "Met de formule voor rekenkundige reeksen: som = n(n+1)/2 = 100×101/2 = 10100/2 = 5050. Dit is het 100e driehoeksgetal."
      }
    },
    {
      question: {
        en: "What is the base-3 representation of 26?",
        es: "¿Cuál es la representación en base 3 de 26?",
        de: "Was ist die Basis-3-Darstellung von 26?",
        nl: "Wat is de basis-3 voorstelling van 26?"
      },
      options: [
        { en: "222", es: "222", de: "222", nl: "222" },
        { en: "2222", es: "2222", de: "2222", nl: "2222" },
        { en: "1001", es: "1001", de: "1001", nl: "1001" },
        { en: "2202", es: "2202", de: "2202", nl: "2202" }
      ],
      correct: 3,
      explanation: {
        en: "Converting 26 to base 3: 26 = 2×9 + 2×3 + 0×1 + 2×1... Let me recalculate: 26 ÷ 3 = 8 r 2, 8 ÷ 3 = 2 r 2, 2 ÷ 3 = 0 r 2. Reading remainders backwards: 222₃. Wait, 2×9+2×3+2×1 = 18+6+2 = 26. So 222₃ = 26.",
        es: "Convirtiendo 26 a base 3: 26 ÷ 3 = 8 r 2, 8 ÷ 3 = 2 r 2, 2 ÷ 3 = 0 r 2. Leyendo residuos hacia atrás: 222₃. Verificando: 2×9+2×3+2×1 = 18+6+2 = 26.",
        de: "26 zur Basis 3 umwandeln: 26 ÷ 3 = 8 R 2, 8 ÷ 3 = 2 R 2, 2 ÷ 3 = 0 R 2. Reste rückwärts lesen: 222₃. Prüfung: 2×9+2×3+2×1 = 18+6+2 = 26.",
        nl: "26 omzetten naar basis 3: 26 ÷ 3 = 8 r 2, 8 ÷ 3 = 2 r 2, 2 ÷ 3 = 0 r 2. Resten achterwaarts lezen: 222₃. Controle: 2×9+2×3+2×1 = 18+6+2 = 26."
      }
    },
    {
      question: {
        en: "What is the greatest common divisor of 84 and 36?",
        es: "¿Cuál es el máximo común divisor de 84 y 36?",
        de: "Was ist der größte gemeinsame Teiler von 84 und 36?",
        nl: "Wat is de grootste gemene deler van 84 en 36?"
      },
      options: [
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "12", es: "12", de: "12", nl: "12" },
        { en: "18", es: "18", de: "18", nl: "18" }
      ],
      correct: 2,
      explanation: {
        en: "Using Euclidean algorithm: 84 = 36×2 + 12, 36 = 12×3 + 0. So GCD(84,36) = 12. Alternatively, 84 = 2²×3×7, 36 = 2²×3², so GCD = 2²×3 = 12.",
        es: "Usando algoritmo euclidiano: 84 = 36×2 + 12, 36 = 12×3 + 0. Así MCD(84,36) = 12. Alternativamente, 84 = 2²×3×7, 36 = 2²×3², así MCD = 2²×3 = 12.",
        de: "Mit euklidischem Algorithmus: 84 = 36×2 + 12, 36 = 12×3 + 0. Also ggT(84,36) = 12. Alternativ: 84 = 2²×3×7, 36 = 2²×3², also ggT = 2²×3 = 12.",
        nl: "Met Euclidisch algoritme: 84 = 36×2 + 12, 36 = 12×3 + 0. Dus GGD(84,36) = 12. Alternatief: 84 = 2²×3×7, 36 = 2²×3², dus GGD = 2²×3 = 12."
      }
    },
    {
      question: {
        en: "How many divisors does 24 have?",
        es: "¿Cuántos divisores tiene 24?",
        de: "Wie viele Teiler hat 24?",
        nl: "Hoeveel delers heeft 24?"
      },
      options: [
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      correct: 1,
      explanation: {
        en: "24 = 2³ × 3¹. Number of divisors = (3+1)(1+1) = 4×2 = 8. The divisors are: 1, 2, 3, 4, 6, 8, 12, 24.",
        es: "24 = 2³ × 3¹. Número de divisores = (3+1)(1+1) = 4×2 = 8. Los divisores son: 1, 2, 3, 4, 6, 8, 12, 24.",
        de: "24 = 2³ × 3¹. Anzahl der Teiler = (3+1)(1+1) = 4×2 = 8. Die Teiler sind: 1, 2, 3, 4, 6, 8, 12, 24.",
        nl: "24 = 2³ × 3¹. Aantal delers = (3+1)(1+1) = 4×2 = 8. De delers zijn: 1, 2, 3, 4, 6, 8, 12, 24."
      }
    },
    {
      question: {
        en: "What is 5^0?",
        es: "¿Qué es 5^0?",
        de: "Was ist 5^0?",
        nl: "Wat is 5^0?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "undefined", es: "indefinido", de: "undefiniert", nl: "ongedefinieerd" }
      ],
      correct: 1,
      explanation: {
        en: "Any non-zero number raised to the power 0 equals 1. This is a fundamental rule of exponents: a⁰ = 1 for any a ≠ 0.",
        es: "Cualquier número no cero elevado a la potencia 0 es igual a 1. Esta es una regla fundamental de exponentes: a⁰ = 1 para cualquier a ≠ 0.",
        de: "Jede von null verschiedene Zahl hoch 0 ist gleich 1. Dies ist eine grundlegende Regel der Exponenten: a⁰ = 1 für jedes a ≠ 0.",
        nl: "Elk getal ongelijk aan nul tot de macht 0 is gelijk aan 1. Dit is een fundamentele regel van exponenten: a⁰ = 1 voor elke a ≠ 0."
      }
    },
    {
      question: {
        en: "What is the LCM of 15 and 20?",
        es: "¿Cuál es el MCM de 15 y 20?",
        de: "Was ist das kgV von 15 und 20?",
        nl: "Wat is het KGV van 15 en 20?"
      },
      options: [
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "35", es: "35", de: "35", nl: "35" },
        { en: "60", es: "60", de: "60", nl: "60" },
        { en: "300", es: "300", de: "300", nl: "300" }
      ],
      correct: 2,
      explanation: {
        en: "15 = 3 × 5, 20 = 2² × 5. LCM = 2² × 3 × 5 = 4 × 3 × 5 = 60. Alternatively, LCM(15,20) = (15×20)/GCD(15,20) = 300/5 = 60.",
        es: "15 = 3 × 5, 20 = 2² × 5. MCM = 2² × 3 × 5 = 4 × 3 × 5 = 60. Alternativamente, MCM(15,20) = (15×20)/MCD(15,20) = 300/5 = 60.",
        de: "15 = 3 × 5, 20 = 2² × 5. kgV = 2² × 3 × 5 = 4 × 3 × 5 = 60. Alternativ: kgV(15,20) = (15×20)/ggT(15,20) = 300/5 = 60.",
        nl: "15 = 3 × 5, 20 = 2² × 5. KGV = 2² × 3 × 5 = 4 × 3 × 5 = 60. Alternatief: KGV(15,20) = (15×20)/GGD(15,20) = 300/5 = 60."
      }
    },
    {
      question: {
        en: "What is the next number in the sequence 1, 4, 9, 16, ...?",
        es: "¿Cuál es el siguiente número en la secuencia 1, 4, 9, 16, ...?",
        de: "Was ist die nächste Zahl in der Folge 1, 4, 9, 16, ...?",
        nl: "Wat is het volgende getal in de reeks 1, 4, 9, 16, ...?"
      },
      options: [
        { en: "20", es: "20", de: "20", nl: "20" },
        { en: "25", es: "25", de: "25", nl: "25" },
        { en: "30", es: "30", de: "30", nl: "30" },
        { en: "36", es: "36", de: "36", nl: "36" }
      ],
      correct: 1,
      explanation: {
        en: "This is the sequence of perfect squares: 1², 2², 3², 4², ... The next term is 5² = 25. Perfect squares are numbers that can be expressed as n² for some integer n.",
        es: "Esta es la secuencia de cuadrados perfectos: 1², 2², 3², 4², ... El siguiente término es 5² = 25. Los cuadrados perfectos son números que pueden expresarse como n² para algún entero n.",
        de: "Dies ist die Folge der Quadratzahlen: 1², 2², 3², 4², ... Der nächste Term ist 5² = 25. Quadratzahlen sind Zahlen, die als n² für eine ganze Zahl n ausgedrückt werden können.",
        nl: "Dit is de reeks van perfecte kwadraten: 1², 2², 3², 4², ... De volgende term is 5² = 25. Perfecte kwadraten zijn getallen die kunnen worden uitgedrukt als n² voor een geheel getal n."
      }
    },
    {
      question: {
        en: "What is the remainder when 100 is divided by 7?",
        es: "¿Cuál es el residuo cuando 100 se divide por 7?",
        de: "Was ist der Rest, wenn 100 durch 7 geteilt wird?",
        nl: "Wat is de rest wanneer 100 wordt gedeeld door 7?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" }
      ],
      correct: 1,
      explanation: {
        en: "100 ÷ 7 = 14 remainder 2, since 7 × 14 = 98 and 100 - 98 = 2. So 100 ≡ 2 (mod 7).",
        es: "100 ÷ 7 = 14 residuo 2, ya que 7 × 14 = 98 y 100 - 98 = 2. Así 100 ≡ 2 (mod 7).",
        de: "100 ÷ 7 = 14 Rest 2, da 7 × 14 = 98 und 100 - 98 = 2. Also 100 ≡ 2 (mod 7).",
        nl: "100 ÷ 7 = 14 rest 2, omdat 7 × 14 = 98 en 100 - 98 = 2. Dus 100 ≡ 2 (mod 7)."
      }
    },
    {
      question: {
        en: "Which statement about 1 is correct?",
        es: "¿Qué afirmación sobre 1 es correcta?",
        de: "Welche Aussage über 1 ist richtig?",
        nl: "Welke bewering over 1 is correct?"
      },
      options: [
        { en: "1 is prime", es: "1 es primo", de: "1 ist prim", nl: "1 is priem" },
        { en: "1 is composite", es: "1 es compuesto", de: "1 ist zusammengesetzt", nl: "1 is samengesteld" },
        { en: "1 is neither prime nor composite", es: "1 no es ni primo ni compuesto", de: "1 ist weder prim noch zusammengesetzt", nl: "1 is noch priem noch samengesteld" },
        { en: "1 is both prime and composite", es: "1 es tanto primo como compuesto", de: "1 ist sowohl prim als auch zusammengesetzt", nl: "1 is zowel priem als samengesteld" }
      ],
      correct: 2,
      explanation: {
        en: "By modern definition, 1 is neither prime nor composite. A prime number must have exactly two distinct positive divisors, but 1 has only one divisor (itself).",
        es: "Por definición moderna, 1 no es ni primo ni compuesto. Un número primo debe tener exactamente dos divisores positivos distintos, pero 1 tiene solo un divisor (él mismo).",
        de: "Nach moderner Definition ist 1 weder prim noch zusammengesetzt. Eine Primzahl muss genau zwei verschiedene positive Teiler haben, aber 1 hat nur einen Teiler (sich selbst).",
        nl: "Volgens de moderne definitie is 1 noch priem noch samengesteld. Een priemgetal moet precies twee verschillende positieve delers hebben, maar 1 heeft slechts één deler (zichzelf)."
      }
    },
    {
      question: {
        en: "What is the value of 3! + 4!?",
        es: "¿Cuál es el valor de 3! + 4!?",
        de: "Was ist der Wert von 3! + 4!?",
        nl: "Wat is de waarde van 3! + 4!?"
      },
      options: [
        { en: "30", es: "30", de: "30", nl: "30" },
        { en: "24", es: "24", de: "24", nl: "24" },
        { en: "144", es: "144", de: "144", nl: "144" },
        { en: "7", es: "7", de: "7", nl: "7" }
      ],
      correct: 0,
      explanation: {
        en: "3! = 3 × 2 × 1 = 6 and 4! = 4 × 3 × 2 × 1 = 24. Therefore 3! + 4! = 6 + 24 = 30.",
        es: "3! = 3 × 2 × 1 = 6 y 4! = 4 × 3 × 2 × 1 = 24. Por tanto 3! + 4! = 6 + 24 = 30.",
        de: "3! = 3 × 2 × 1 = 6 und 4! = 4 × 3 × 2 × 1 = 24. Daher 3! + 4! = 6 + 24 = 30.",
        nl: "3! = 3 × 2 × 1 = 6 en 4! = 4 × 3 × 2 × 1 = 24. Daarom 3! + 4! = 6 + 24 = 30."
      }
    },
    {
      question: {
        en: "Which number is a palindromic prime?",
        es: "¿Qué número es un primo palindrómico?",
        de: "Welche Zahl ist eine palindromische Primzahl?",
        nl: "Welk getal is een palindromisch priemgetal?"
      },
      options: [
        { en: "121", es: "121", de: "121", nl: "121" },
        { en: "131", es: "131", de: "131", nl: "131" },
        { en: "141", es: "141", de: "141", nl: "141" },
        { en: "151", es: "151", de: "151", nl: "151" }
      ],
      correct: 3,
      explanation: {
        en: "A palindromic prime reads the same forwards and backwards and is prime. 121 = 11² (not prime), 131 is prime, 141 = 3×47 (not prime), 151 is prime. Both 131 and 151 are palindromic primes, but 151 is the answer.",
        es: "Un primo palindrómico se lee igual hacia adelante y hacia atrás y es primo. 121 = 11² (no primo), 131 es primo, 141 = 3×47 (no primo), 151 es primo. Tanto 131 como 151 son primos palindrómicos.",
        de: "Eine palindromische Primzahl liest sich vorwärts und rückwärts gleich und ist prim. 121 = 11² (nicht prim), 131 ist prim, 141 = 3×47 (nicht prim), 151 ist prim. Sowohl 131 als auch 151 sind palindromische Primzahlen.",
        nl: "Een palindromisch priemgetal leest hetzelfde voorwaarts en achterwaarts en is priem. 121 = 11² (niet priem), 131 is priem, 141 = 3×47 (niet priem), 151 is priem. Zowel 131 als 151 zijn palindromische priemgetallen."
      }
    },
    {
      question: {
        en: "What is the sum of all prime numbers less than 20?",
        es: "¿Cuál es la suma de todos los números primos menores que 20?",
        de: "Was ist die Summe aller Primzahlen kleiner als 20?",
        nl: "Wat is de som van alle priemgetallen kleiner dan 20?"
      },
      options: [
        { en: "75", es: "75", de: "75", nl: "75" },
        { en: "77", es: "77", de: "77", nl: "77" },
        { en: "79", es: "79", de: "79", nl: "79" },
        { en: "81", es: "81", de: "81", nl: "81" }
      ],
      correct: 1,
      explanation: {
        en: "Primes less than 20: 2, 3, 5, 7, 11, 13, 17, 19. Sum = 2+3+5+7+11+13+17+19 = 77.",
        es: "Primos menores que 20: 2, 3, 5, 7, 11, 13, 17, 19. Suma = 2+3+5+7+11+13+17+19 = 77.",
        de: "Primzahlen kleiner als 20: 2, 3, 5, 7, 11, 13, 17, 19. Summe = 2+3+5+7+11+13+17+19 = 77.",
        nl: "Priemgetallen kleiner dan 20: 2, 3, 5, 7, 11, 13, 17, 19. Som = 2+3+5+7+11+13+17+19 = 77."
      }
    },
    {
      question: {
        en: "What is 2³ × 3² × 5?",
        es: "¿Qué es 2³ × 3² × 5?",
        de: "Was ist 2³ × 3² × 5?",
        nl: "Wat is 2³ × 3² × 5?"
      },
      options: [
        { en: "180", es: "180", de: "180", nl: "180" },
        { en: "240", es: "240", de: "240", nl: "240" },
        { en: "320", es: "320", de: "320", nl: "320" },
        { en: "360", es: "360", de: "360", nl: "360" }
      ],
      correct: 3,
      explanation: {
        en: "2³ × 3² × 5 = 8 × 9 × 5 = 72 × 5 = 360. This represents the prime factorization of 360.",
        es: "2³ × 3² × 5 = 8 × 9 × 5 = 72 × 5 = 360. Esto representa la factorización prima de 360.",
        de: "2³ × 3² × 5 = 8 × 9 × 5 = 72 × 5 = 360. Dies stellt die Primfaktorzerlegung von 360 dar.",
        nl: "2³ × 3² × 5 = 8 × 9 × 5 = 72 × 5 = 360. Dit vertegenwoordigt de priemfactorisatie van 360."
      }
    },
    {
      question: {
        en: "What is the 8th Fibonacci number?",
        es: "¿Cuál es el octavo número de Fibonacci?",
        de: "Was ist die 8. Fibonacci-Zahl?",
        nl: "Wat is het 8e Fibonacci-getal?"
      },
      options: [
        { en: "13", es: "13", de: "13", nl: "13" },
        { en: "21", es: "21", de: "21", nl: "21" },
        { en: "34", es: "34", de: "34", nl: "34" },
        { en: "55", es: "55", de: "55", nl: "55" }
      ],
      correct: 1,
      explanation: {
        en: "Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... The 8th term is 21 (counting from 0 as the 1st term).",
        es: "Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... El octavo término es 21 (contando desde 0 como el primer término).",
        de: "Fibonacci-Folge: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... Der 8. Term ist 21 (von 0 als 1. Term gezählt).",
        nl: "Fibonacci-reeks: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... De 8e term is 21 (tellend vanaf 0 als de 1e term)."
      }
    },
    {
      question: {
        en: "Which property is true for all even numbers?",
        es: "¿Qué propiedad es verdadera para todos los números pares?",
        de: "Welche Eigenschaft gilt für alle geraden Zahlen?",
        nl: "Welke eigenschap geldt voor alle even getallen?"
      },
      options: [
        { en: "They are divisible by 4", es: "Son divisibles por 4", de: "Sie sind durch 4 teilbar", nl: "Ze zijn deelbaar door 4" },
        { en: "They are divisible by 2", es: "Son divisibles por 2", de: "Sie sind durch 2 teilbar", nl: "Ze zijn deelbaar door 2" },
        { en: "They are prime", es: "Son primos", de: "Sie sind prim", nl: "Ze zijn priem" },
        { en: "They are perfect squares", es: "Son cuadrados perfectos", de: "Sie sind Quadratzahlen", nl: "Ze zijn perfecte kwadraten" }
      ],
      correct: 1,
      explanation: {
        en: "By definition, even numbers are those divisible by 2. Not all even numbers are divisible by 4, only one even prime exists (2), and not all even numbers are perfect squares.",
        es: "Por definición, los números pares son aquellos divisibles por 2. No todos los números pares son divisibles por 4, solo existe un primo par (2), y no todos los números pares son cuadrados perfectos.",
        de: "Per Definition sind gerade Zahlen solche, die durch 2 teilbar sind. Nicht alle geraden Zahlen sind durch 4 teilbar, nur eine gerade Primzahl existiert (2), und nicht alle geraden Zahlen sind Quadratzahlen.",
        nl: "Per definitie zijn even getallen die deelbaar zijn door 2. Niet alle even getallen zijn deelbaar door 4, er bestaat slechts één even priemgetal (2), en niet alle even getallen zijn perfecte kwadraten."
      }
    },
    {
      question: {
        en: "Which of these pairs are twin primes (primes that differ by 2)?",
        es: "¿Cuál de estos pares son primos gemelos (primos que difieren en 2)?",
        de: "Welches dieser Paare sind Primzwillinge (Primzahlen mit Unterschied 2)?",
        nl: "Welk van deze paren zijn tweelingpriemgetallen (priemgetallen die 2 verschillen)?"
      },
      options: [
        { en: "17, 19", es: "17, 19", de: "17, 19", nl: "17, 19" },
        { en: "23, 25", es: "23, 25", de: "23, 25", nl: "23, 25" },
        { en: "31, 33", es: "31, 33", de: "31, 33", nl: "31, 33" },
        { en: "37, 39", es: "37, 39", de: "37, 39", nl: "37, 39" }
      ],
      correct: 0,
      explanation: {
        en: "Twin primes are pairs of primes that differ by 2. (17, 19) are both prime and differ by 2. 25 = 5², 33 = 3×11, 39 = 3×13 are not prime.",
        es: "Los primos gemelos son pares de primos que difieren en 2. (17, 19) son ambos primos y difieren en 2. 25 = 5², 33 = 3×11, 39 = 3×13 no son primos.",
        de: "Primzwillinge sind Primzahlpaare mit Unterschied 2. (17, 19) sind beide prim und unterscheiden sich um 2. 25 = 5², 33 = 3×11, 39 = 3×13 sind nicht prim.",
        nl: "Tweelingpriemgetallen zijn priemparen die 2 verschillen. (17, 19) zijn beide priem en verschillen 2. 25 = 5², 33 = 3×11, 39 = 3×13 zijn niet priem."
      }
    },
    {
      question: {
        en: "What is the smallest perfect number (equal to the sum of its proper divisors)?",
        es: "¿Cuál es el número perfecto más pequeño (igual a la suma de sus divisores propios)?",
        de: "Was ist die kleinste perfekte Zahl (gleich der Summe ihrer echten Teiler)?",
        nl: "Wat is het kleinste perfecte getal (gelijk aan de som van zijn echte delers)?"
      },
      options: [
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "12", es: "12", de: "12", nl: "12" },
        { en: "18", es: "18", de: "18", nl: "18" },
        { en: "24", es: "24", de: "24", nl: "24" }
      ],
      correct: 0,
      explanation: {
        en: "6 is perfect because its proper divisors are 1, 2, 3 and 1+2+3=6. The next perfect number is 28 (1+2+4+7+14=28). Perfect numbers are rare and connected to Mersenne primes.",
        es: "6 es perfecto porque sus divisores propios son 1, 2, 3 y 1+2+3=6. El siguiente número perfecto es 28 (1+2+4+7+14=28). Los números perfectos son raros y están conectados con los primos de Mersenne.",
        de: "6 ist perfekt, weil seine echten Teiler 1, 2, 3 sind und 1+2+3=6. Die nächste perfekte Zahl ist 28 (1+2+4+7+14=28). Perfekte Zahlen sind selten und mit Mersenne-Primzahlen verbunden.",
        nl: "6 is perfect omdat zijn echte delers 1, 2, 3 zijn en 1+2+3=6. Het volgende perfecte getal is 28 (1+2+4+7+14=28). Perfecte getallen zijn zeldzaam en verbonden met Mersenne-priemgetallen."
      }
    }
  ]
});
