// Music - Level 6: Music Theory and Harmony
(function() {
  const level6 = {
    name: {
      en: "Music Theory and Harmony",
      es: "Teoría Musical y Armonía",
      de: "Musiktheorie und Harmonie",
      nl: "Muziektheorie en Harmonie"
    },
    questions: [
      {
        question: {
          en: "In a major key, what is the chord quality of the vi chord?",
          es: "En una tonalidad mayor, ¿cuál es la cualidad del acorde vi?",
          de: "In einer Dur-Tonart, welche Akkordqualität hat der vi-Akkord?",
          nl: "In een majeur toonsoort, wat is de accordkwaliteit van het vi-akkoord?"
        },
        options: [
          { en: "Minor", es: "Menor", de: "Moll", nl: "Mineur" },
          { en: "Major", es: "Mayor", de: "Dur", nl: "Majeur" },
          { en: "Diminished", es: "Disminuido", de: "Vermindert", nl: "Verminderd" },
          { en: "Augmented", es: "Aumentado", de: "Übermäßig", nl: "Overmatig" }
        ],
        correct: 0,
        explanation: {
          en: "In a major key, the vi chord is built on the 6th scale degree and is naturally minor (1-♭3-5).",
          es: "En una tonalidad mayor, el acorde vi se construye sobre el 6º grado de la escala y es naturalmente menor (1-♭3-5).",
          de: "In einer Dur-Tonart wird der vi-Akkord auf der 6. Stufe aufgebaut und ist natürlicherweise Moll (1-♭3-5).",
          nl: "In een majeur toonsoort wordt het vi-akkoord gebouwd op de 6e toonladdergraad en is van nature mineur (1-♭3-5)."
        }
      },
      {
        question: {
          en: "What is the dominant chord of F major?",
          es: "¿Cuál es el acorde dominante de Fa mayor?",
          de: "Was ist der Dominantakkord von F-Dur?",
          nl: "Wat is het dominant akkoord van F majeur?"
        },
        options: [
          { en: "C major", es: "Do mayor", de: "C-Dur", nl: "C majeur" },
          { en: "B♭ major", es: "Si♭ mayor", de: "B♭-Dur", nl: "B♭ majeur" },
          { en: "D minor", es: "Re menor", de: "d-Moll", nl: "D mineur" },
          { en: "G minor", es: "Sol menor", de: "g-Moll", nl: "G mineur" }
        ],
        correct: 0,
        explanation: {
          en: "The dominant chord is built on the 5th degree of the scale. In F major, the 5th degree is C, making C major the dominant chord.",
          es: "El acorde dominante se construye sobre el 5º grado de la escala. En Fa mayor, el 5º grado es Do, haciendo de Do mayor el acorde dominante.",
          de: "Der Dominantakkord wird auf der 5. Stufe der Tonleiter aufgebaut. In F-Dur ist die 5. Stufe C, wodurch C-Dur der Dominantakkord ist.",
          nl: "Het dominantakkoord wordt gebouwd op de 5e graad van de toonladder. In F majeur is de 5e graad C, waardoor C majeur het dominantakkoord is."
        }
      },
      {
        question: {
          en: "What interval creates the distinctive sound of a major 7th chord?",
          es: "¿Qué intervalo crea el sonido distintivo de un acorde de séptima mayor?",
          de: "Welches Intervall erzeugt den charakteristischen Klang eines großen Septimakkords?",
          nl: "Welk interval creëert het onderscheidende geluid van een majeur septiemakkoord?"
        },
        options: [
          { en: "Major 7th", es: "Séptima mayor", de: "Große Septime", nl: "Grote septiem" },
          { en: "Minor 7th", es: "Séptima menor", de: "Kleine Septime", nl: "Kleine septiem" },
          { en: "Perfect 5th", es: "Quinta justa", de: "Reine Quinte", nl: "Reine kwint" },
          { en: "Major 3rd", es: "Tercera mayor", de: "Große Terz", nl: "Grote terts" }
        ],
        correct: 0,
        explanation: {
          en: "A major 7th chord contains a major 7th interval between the root and 7th, which creates its characteristic bright, jazzy sound.",
          es: "Un acorde de séptima mayor contiene un intervalo de séptima mayor entre la fundamental y la séptima, lo que crea su sonido característico brillante y jazzístico.",
          de: "Ein großer Septimakkord enthält ein großes Septimintervall zwischen Grundton und Septime, was seinen charakteristischen hellen, jazzigen Klang erzeugt.",
          nl: "Een majeur septiemakkoord bevat een grote septiem interval tussen de grondtoon en septiem, wat zijn karakteristieke heldere, jazzy geluid creëert."
        }
      },
      {
        question: {
          en: "In the chord progression I-V-vi-IV, what function does the vi chord serve?",
          es: "En la progresión de acordes I-V-vi-IV, ¿qué función cumple el acorde vi?",
          de: "In der Akkordfolge I-V-vi-IV, welche Funktion erfüllt der vi-Akkord?",
          nl: "In de akkoordprogressie I-V-vi-IV, welke functie vervult het vi-akkoord?"
        },
        options: [
          { en: "Tonic substitute", es: "Sustituto de la tónica", de: "Tonikavertreter", nl: "Tonica vervanger" },
          { en: "Dominant function", es: "Función dominante", de: "Dominantfunktion", nl: "Dominantfunctie" },
          { en: "Subdominant function", es: "Función subdominante", de: "Subdominantfunktion", nl: "Subdominantfunctie" },
          { en: "Secondary dominant", es: "Dominante secundario", de: "Zwischendominante", nl: "Secundaire dominant" }
        ],
        correct: 0,
        explanation: {
          en: "The vi chord shares two notes with the I chord and often functions as a tonic substitute, providing a softer resolution than I.",
          es: "El acorde vi comparte dos notas con el acorde I y a menudo funciona como un sustituto de la tónica, proporcionando una resolución más suave que I.",
          de: "Der vi-Akkord teilt zwei Töne mit dem I-Akkord und fungiert oft als Tonikavertreter, der eine sanftere Auflösung als I bietet.",
          nl: "Het vi-akkoord deelt twee noten met het I-akkoord en fungeert vaak als tonica vervanger, wat een zachtere oplossing biedt dan I."
        }
      },
      {
        question: {
          en: "What is a secondary dominant chord?",
          es: "¿Qué es un acorde dominante secundario?",
          de: "Was ist ein Zwischendominantakkord?",
          nl: "Wat is een secundair dominant akkoord?"
        },
        options: [
          { en: "A dominant chord that resolves to a chord other than the tonic", es: "Un acorde dominante que resuelve a un acorde diferente de la tónica", de: "Ein Dominantakkord, der zu einem anderen Akkord als der Tonika auflöst", nl: "Een dominant akkoord dat oplost naar een ander akkoord dan de tonica" },
          { en: "The second chord in a progression", es: "El segundo acorde en una progresión", de: "Der zweite Akkord in einer Folge", nl: "Het tweede akkoord in een progressie" },
          { en: "A chord built on the second scale degree", es: "Un acorde construido sobre el segundo grado de la escala", de: "Ein Akkord, der auf der zweiten Stufe aufgebaut ist", nl: "Een akkoord gebouwd op de tweede toonladdergraad" },
          { en: "A weaker version of the primary dominant", es: "Una versión más débil del dominante primario", de: "Eine schwächere Version der Hauptdominante", nl: "Een zwakkere versie van de primaire dominant" }
        ],
        correct: 0,
        explanation: {
          en: "A secondary dominant is a dominant chord that temporarily tonicizes a chord other than the home tonic, creating temporary modulation.",
          es: "Un dominante secundario es un acorde dominante que temporalmente toniciza un acorde diferente de la tónica principal, creando una modulación temporal.",
          de: "Eine Zwischendominante ist ein Dominantakkord, der vorübergehend einen anderen Akkord als die Haupttonika tonikalisiert und damit eine temporäre Modulation erzeugt.",
          nl: "Een secundaire dominant is een dominant akkoord dat tijdelijk een ander akkoord dan de hoofd-tonica tonicaliseert, wat tijdelijke modulatie creëert."
        }
      },
      {
        question: {
          en: "In voice leading, what is the smoothest way to move from a C major chord to an F major chord?",
          es: "En la conducción de voces, ¿cuál es la forma más suave de pasar de un acorde de Do mayor a un acorde de Fa mayor?",
          de: "In der Stimmführung, was ist der sanfteste Weg, von einem C-Dur-Akkord zu einem F-Dur-Akkord zu wechseln?",
          nl: "In stemvoering, wat is de soepelste manier om van een C majeur akkoord naar een F majeur akkoord te gaan?"
        },
        options: [
          { en: "Keep C as a common tone, move E to F, move G to A", es: "Mantener Do como nota común, mover Mi a Fa, mover Sol a La", de: "C als gemeinsamen Ton behalten, E nach F, G nach A bewegen", nl: "Houd C als gemeenschappelijke toon, beweeg E naar F, beweeg G naar A" },
          { en: "Move all voices in parallel motion", es: "Mover todas las voces en movimiento paralelo", de: "Alle Stimmen in Parallelbewegung führen", nl: "Beweeg alle stemmen in parallelle beweging" },
          { en: "Move C to F, E to A, G to C", es: "Mover Do a Fa, Mi a La, Sol a Do", de: "C nach F, E nach A, G nach C bewegen", nl: "Beweeg C naar F, E naar A, G naar C" },
          { en: "Jump all voices by a perfect fourth", es: "Saltar todas las voces por una cuarta justa", de: "Alle Stimmen um eine reine Quarte springen lassen", nl: "Spring alle stemmen met een reine kwart" }
        ],
        correct: 0,
        explanation: {
          en: "Good voice leading minimizes motion by keeping common tones and moving other voices by step when possible. C is common to both chords.",
          es: "Una buena conducción de voces minimiza el movimiento manteniendo las notas comunes y moviendo las otras voces por pasos cuando sea posible. Do es común a ambos acordes.",
          de: "Gute Stimmführung minimiert Bewegung durch das Beibehalten gemeinsamer Töne und schrittweise Führung anderer Stimmen. C ist beiden Akkorden gemeinsam.",
          nl: "Goede stemvoering minimaliseert beweging door gemeenschappelijke tonen te behouden en andere stemmen stapsgewijs te bewegen wanneer mogelijk. C is gemeenschappelijk voor beide akkoorden."
        }
      },
      {
        question: {
          en: "What is the function of a diminished vii° chord in major keys?",
          es: "¿Cuál es la función de un acorde vii° disminuido en tonalidades mayores?",
          de: "Was ist die Funktion eines verminderten vii°-Akkords in Dur-Tonarten?",
          nl: "Wat is de functie van een verminderd vii° akkoord in majeur toonsoorten?"
        },
        options: [
          { en: "Leading tone chord with dominant function", es: "Acorde de nota sensible con función dominante", de: "Leittonakkord mit Dominantfunktion", nl: "Leidtoonakkoord met dominantfunctie" },
          { en: "Tonic function", es: "Función de tónica", de: "Tonikafunktion", nl: "Tonicafunctie" },
          { en: "Subdominant function", es: "Función subdominante", de: "Subdominantfunktion", nl: "Subdominantfunctie" },
          { en: "Decorative chord with no harmonic function", es: "Acorde decorativo sin función armónica", de: "Dekorativer Akkord ohne harmonische Funktion", nl: "Decoratief akkoord zonder harmonische functie" }
        ],
        correct: 0,
        explanation: {
          en: "The vii° chord is built on the leading tone and has strong dominant function, often resolving to the tonic chord.",
          es: "El acorde vii° se construye sobre la nota sensible y tiene una fuerte función dominante, resolviendo a menudo al acorde de tónica.",
          de: "Der vii°-Akkord wird auf dem Leitton aufgebaut und hat eine starke Dominantfunktion, die oft zur Tonika auflöst.",
          nl: "Het vii°-akkoord is gebouwd op de leidtoon en heeft sterke dominantfunctie, vaak oplossend naar het tonica-akkoord."
        }
      },
      {
        question: {
          en: "In a ii-V-I progression in C major, what are the three chords?",
          es: "En una progresión ii-V-I en Do mayor, ¿cuáles son los tres acordes?",
          de: "In einer ii-V-I-Progression in C-Dur, was sind die drei Akkorde?",
          nl: "In een ii-V-I progressie in C majeur, wat zijn de drie akkoorden?"
        },
        options: [
          { en: "Dm - G - C", es: "Rem - Sol - Do", de: "d-Moll - G-Dur - C-Dur", nl: "Dm - G - C" },
          { en: "D - G - C", es: "Re - Sol - Do", de: "D-Dur - G-Dur - C-Dur", nl: "D - G - C" },
          { en: "Em - A - D", es: "Mim - La - Re", de: "e-Moll - A-Dur - D-Dur", nl: "Em - A - D" },
          { en: "F - G - C", es: "Fa - Sol - Do", de: "F-Dur - G-Dur - C-Dur", nl: "F - G - C" }
        ],
        correct: 0,
        explanation: {
          en: "In C major, ii is Dm (D-F-A), V is G (G-B-D), and I is C (C-E-G). This is a fundamental jazz and classical progression.",
          es: "En Do mayor, ii es Rem (Re-Fa-La), V es Sol (Sol-Si-Re), y I es Do (Do-Mi-Sol). Esta es una progresión fundamental del jazz y la música clásica.",
          de: "In C-Dur ist ii d-Moll (D-F-A), V ist G-Dur (G-H-D), und I ist C-Dur (C-E-G). Dies ist eine grundlegende Jazz- und Klassik-Progression.",
          nl: "In C majeur is ii Dm (D-F-A), V is G (G-B-D), en I is C (C-E-G). Dit is een fundamentele jazz en klassieke progressie."
        }
      },
      {
        question: {
          en: "What is the chord symbol for a major chord with an added 9th?",
          es: "¿Cuál es el símbolo de acorde para un acorde mayor con novena agregada?",
          de: "Was ist das Akkordsymbol für einen Dur-Akkord mit hinzugefügter 9?",
          nl: "Wat is het akkoordsymbool voor een majeur akkoord met toegevoegde 9?"
        },
        options: [
          { en: "Cadd9", es: "Doadd9", de: "Cadd9", nl: "Cadd9" },
          { en: "C9", es: "Do9", de: "C9", nl: "C9" },
          { en: "Cmaj9", es: "Domaj9", de: "Cmaj9", nl: "Cmaj9" },
          { en: "C2", es: "Do2", de: "C2", nl: "C2" }
        ],
        correct: 0,
        explanation: {
          en: "Cadd9 indicates a major triad with an added 9th (D), while C9 implies a dominant 7th chord with a 9th.",
          es: "Doadd9 indica una tríada mayor con una novena agregada (Re), mientras que Do9 implica un acorde de séptima dominante con una novena.",
          de: "Cadd9 bezeichnet einen Dur-Dreiklang mit hinzugefügter 9 (D), während C9 einen Dominantseptakkord mit 9 impliziert.",
          nl: "Cadd9 geeft een majeur drieklank aan met een toegevoegde 9 (D), terwijl C9 een dominant septiem akkoord met een 9 impliceert."
        }
      },
      {
        question: {
          en: "In functional harmony, what does a Neapolitan sixth chord typically resolve to?",
          es: "En la armonía funcional, ¿a qué resuelve típicamente un acorde de sexta napolitana?",
          de: "In der Funktionsharmonie, zu was löst sich ein neapolitanischer Sextakkord typisch auf?",
          nl: "In functionele harmonie, waartoe lost een Napolitaanse sext akkoord typisch op?"
        },
        options: [
          { en: "Dominant chord", es: "Acorde dominante", de: "Dominantakkord", nl: "Dominant akkoord" },
          { en: "Tonic chord", es: "Acorde de tónica", de: "Tonikaakkord", nl: "Tonica akkoord" },
          { en: "Subdominant chord", es: "Acorde subdominante", de: "Subdominantakkord", nl: "Subdominant akkoord" },
          { en: "Leading tone chord", es: "Acorde de nota sensible", de: "Leittonakkord", nl: "Leidtoon akkoord" }
        ],
        correct: 0,
        explanation: {
          en: "The Neapolitan sixth chord (♭II6) typically resolves to the dominant chord, creating strong harmonic motion through its chromatic voice leading.",
          es: "El acorde de sexta napolitana (♭II6) típicamente resuelve al acorde dominante, creando un fuerte movimiento armónico a través de su conducción de voces cromática.",
          de: "Der neapolitanische Sextakkord (♭II6) löst sich typisch zum Dominantakkord auf und erzeugt durch seine chromatische Stimmführung starke harmonische Bewegung.",
          nl: "Het Napolitaanse sext akkoord (♭II6) lost typisch op naar het dominant akkoord, wat sterke harmonische beweging creëert door zijn chromatische stemvoering."
        }
      },
      {
        question: {
          en: "What is a deceptive cadence?",
          es: "¿Qué es una cadencia engañosa?",
          de: "Was ist ein Trugschluss?",
          nl: "Wat is een misleidende cadens?"
        },
        options: [
          { en: "V resolves to vi instead of I", es: "V resuelve a vi en lugar de I", de: "V löst nach vi statt nach I auf", nl: "V lost op naar vi in plaats van I" },
          { en: "I moves to V", es: "I se mueve a V", de: "I bewegt sich nach V", nl: "I beweegt naar V" },
          { en: "IV resolves to I", es: "IV resuelve a I", de: "IV löst nach I auf", nl: "IV lost op naar I" },
          { en: "vi moves to IV", es: "vi se mueve a IV", de: "vi bewegt sich nach IV", nl: "vi beweegt naar IV" }
        ],
        correct: 0,
        explanation: {
          en: "A deceptive cadence occurs when the dominant chord resolves to vi instead of the expected tonic, 'deceiving' the listener's expectations.",
          es: "Una cadencia engañosa ocurre cuando el acorde dominante resuelve a vi en lugar de la tónica esperada, 'engañando' las expectativas del oyente.",
          de: "Ein Trugschluss tritt auf, wenn der Dominantakkord nach vi statt zur erwarteten Tonika auflöst und damit die Erwartungen des Hörers 'täuscht'.",
          nl: "Een misleidende cadens treedt op wanneer het dominant akkoord oplost naar vi in plaats van de verwachte tonica, waardoor de verwachtingen van de luisteraar worden 'misleid'."
        }
      },
      {
        question: {
          en: "In a minor key, what is the chord quality of the III chord?",
          es: "En una tonalidad menor, ¿cuál es la cualidad del acorde III?",
          de: "In einer Moll-Tonart, welche Akkordqualität hat der III-Akkord?",
          nl: "In een mineur toonsoort, wat is de akkordkwaliteit van het III akkoord?"
        },
        options: [
          { en: "Major", es: "Mayor", de: "Dur", nl: "Majeur" },
          { en: "Minor", es: "Menor", de: "Moll", nl: "Mineur" },
          { en: "Diminished", es: "Disminuido", de: "Vermindert", nl: "Verminderd" },
          { en: "Augmented", es: "Aumentado", de: "Übermäßig", nl: "Overmatig" }
        ],
        correct: 0,
        explanation: {
          en: "In natural minor, the III chord is major because it's built on the 3rd degree with the intervals 1-3-5 from that degree.",
          es: "En menor natural, el acorde III es mayor porque se construye sobre el 3er grado con los intervalos 1-3-5 desde ese grado.",
          de: "In natürlichem Moll ist der III-Akkord Dur, da er auf der 3. Stufe mit den Intervallen 1-3-5 von dieser Stufe aus aufgebaut ist.",
          nl: "In natuurlijk mineur is het III akkoord majeur omdat het gebouwd is op de 3e graad met de intervallen 1-3-5 vanaf die graad."
        }
      },
      {
        question: {
          en: "What is the purpose of a suspension in harmony?",
          es: "¿Cuál es el propósito de una suspensión en armonía?",
          de: "Was ist der Zweck einer Suspension in der Harmonie?",
          nl: "Wat is het doel van een suspensie in harmonie?"
        },
        options: [
          { en: "To create tension that resolves downward by step", es: "Crear tensión que resuelve hacia abajo por grados", de: "Spannung zu erzeugen, die sich schrittweise nach unten auflöst", nl: "Om spanning te creëren die stapsgewijs naar beneden oplost" },
          { en: "To add rhythmic complexity", es: "Agregar complejidad rítmica", de: "Rhythmische Komplexität hinzuzufügen", nl: "Om ritmische complexiteit toe te voegen" },
          { en: "To change the key", es: "Cambiar la tonalidad", de: "Die Tonart zu wechseln", nl: "Om de toonsoort te veranderen" },
          { en: "To create parallel motion", es: "Crear movimiento paralelo", de: "Parallelbewegung zu erzeugen", nl: "Om parallelle beweging te creëren" }
        ],
        correct: 0,
        explanation: {
          en: "A suspension is a non-chord tone that creates dissonance and resolves downward by step, adding expressive tension to the harmony.",
          es: "Una suspensión es una nota ajena al acorde que crea disonancia y resuelve hacia abajo por grados, agregando tensión expresiva a la armonía.",
          de: "Eine Suspension ist ein akkordfremdcr Ton, der Dissonanz erzeugt und sich schrittweise nach unten auflöst, wodurch der Harmonie ausdrucksvolle Spannung hinzugefügt wird.",
          nl: "Een suspensie is een akkoordvreemde toon die dissonantie creëert en stapsgewijs naar beneden oplost, wat expressieve spanning aan de harmonie toevoegt."
        }
      },
      {
        question: {
          en: "In jazz harmony, what is a tritone substitution?",
          es: "En la armonía del jazz, ¿qué es una sustitución de tritono?",
          de: "In der Jazzharmonie, was ist eine Tritonussubstitution?",
          nl: "In jazz harmonie, wat is een tritoonvervanging?"
        },
        options: [
          { en: "Replacing a dominant chord with another dominant a tritone away", es: "Reemplazar un acorde dominante con otro dominante a un tritono de distancia", de: "Einen Dominantakkord durch einen anderen Dominantakkord einen Tritonus entfernt ersetzen", nl: "Een dominant akkoord vervangen door een ander dominant een tritoon weg" },
          { en: "Adding a tritone to any chord", es: "Agregar un tritono a cualquier acorde", de: "Einen Tritonus zu jedem Akkord hinzufügen", nl: "Een tritoon toevoegen aan elk akkoord" },
          { en: "Removing the tritone from a chord", es: "Quitar el tritono de un acorde", de: "Den Tritonus aus einem Akkord entfernen", nl: "De tritoon uit een akkoord verwijderen" },
          { en: "Playing two chords a tritone apart simultaneously", es: "Tocar dos acordes a un tritono de distancia simultáneamente", de: "Zwei Akkorde einen Tritonus entfernt gleichzeitig spielen", nl: "Twee akkoorden een tritoon uit elkaar gelijktijdig spelen" }
        ],
        correct: 0,
        explanation: {
          en: "A tritone substitution replaces a dominant 7th chord with another dominant 7th chord whose root is a tritone away, sharing the same tritone interval.",
          es: "Una sustitución de tritono reemplaza un acorde de séptima dominante con otro acorde de séptima dominante cuya fundamental está a un tritono de distancia, compartiendo el mismo intervalo de tritono.",
          de: "Eine Tritonussubstitution ersetzt einen Dominantseptakkord durch einen anderen Dominantseptakkord, dessen Grundton einen Tritonus entfernt ist und dasselbe Tritonusintervall teilt.",
          nl: "Een tritoonvervanging vervangt een dominant septiem akkoord door een ander dominant septiem akkoord waarvan de grondtoon een tritoon weg is, waarbij hetzelfde tritoon interval wordt gedeeld."
        }
      },
      {
        question: {
          en: "What is the interval between the 3rd and 7th of a dominant 7th chord?",
          es: "¿Cuál es el intervalo entre la 3ª y la 7ª de un acorde de séptima dominante?",
          de: "Was ist das Intervall zwischen der 3. und 7. eines Dominantseptakkords?",
          nl: "Wat is het interval tussen de 3e en 7e van een dominant septiem akkoord?"
        },
        options: [
          { en: "Tritone", es: "Tritono", de: "Tritonus", nl: "Tritoon" },
          { en: "Perfect 5th", es: "Quinta justa", de: "Reine Quinte", nl: "Reine kwint" },
          { en: "Major 3rd", es: "Tercera mayor", de: "Große Terz", nl: "Grote terts" },
          { en: "Minor 6th", es: "Sexta menor", de: "Kleine Sexte", nl: "Kleine sext" }
        ],
        correct: 0,
        explanation: {
          en: "The tritone between the 3rd and 7th of a dominant 7th chord creates its characteristic tension that wants to resolve to the tonic.",
          es: "El tritono entre la 3ª y la 7ª de un acorde de séptima dominante crea su tensión característica que quiere resolver a la tónica.",
          de: "Der Tritonus zwischen der 3. und 7. eines Dominantseptakkords erzeugt seine charakteristische Spannung, die zur Tonika aufgelöst werden möchte.",
          nl: "De tritoon tussen de 3e en 7e van een dominant septiem akkoord creëert zijn karakteristieke spanning die wil oplossen naar de tonica."
        }
      },
      {
        question: {
          en: "In the harmonic minor scale, which degree is raised compared to natural minor?",
          es: "En la escala menor armónica, ¿cuál grado se eleva comparado con el menor natural?",
          de: "In der harmonischen Molltonleiter, welcher Grad ist im Vergleich zu natürlichem Moll erhöht?",
          nl: "In de harmonische mineur toonladder, welke graad is verhoogd vergeleken met natuurlijk mineur?"
        },
        options: [
          { en: "7th degree", es: "7º grado", de: "7. Grad", nl: "7e graad" },
          { en: "6th degree", es: "6º grado", de: "6. Grad", nl: "6e graad" },
          { en: "3rd degree", es: "3er grado", de: "3. Grad", nl: "3e graad" },
          { en: "5th degree", es: "5º grado", de: "5. Grad", nl: "5e graad" }
        ],
        correct: 0,
        explanation: {
          en: "Harmonic minor raises the 7th degree to create a leading tone, which strengthens the V-i resolution in minor keys.",
          es: "El menor armónico eleva el 7º grado para crear una nota sensible, lo que fortalece la resolución V-i en tonalidades menores.",
          de: "Harmonisch Moll erhöht den 7. Grad, um einen Leitton zu schaffen, was die V-i-Auflösung in Moll-Tonarten verstärkt.",
          nl: "Harmonisch mineur verhoogt de 7e graad om een leidtoon te creëren, wat de V-i oplossing in mineur toonsoorten versterkt."
        }
      },
      {
        question: {
          en: "What is a pivot chord in modulation?",
          es: "¿Qué es un acorde pivote en la modulación?",
          de: "Was ist ein Drehakkord bei der Modulation?",
          nl: "Wat is een spilakkoord bij modulatie?"
        },
        options: [
          { en: "A chord common to both the old and new keys", es: "Un acorde común tanto a la tonalidad antigua como a la nueva", de: "Ein Akkord, der sowohl der alten als auch der neuen Tonart gemeinsam ist", nl: "Een akkoord dat gemeenschappelijk is voor zowel de oude als nieuwe toonsoort" },
          { en: "A chord that rotates through different inversions", es: "Un acorde que rota a través de diferentes inversiones", de: "Ein Akkord, der durch verschiedene Umkehrungen rotiert", nl: "Een akkoord dat roteert door verschillende omkering" },
          { en: "The first chord of a new key", es: "El primer acorde de una nueva tonalidad", de: "Der erste Akkord einer neuen Tonart", nl: "Het eerste akkoord van een nieuwe toonsoort" },
          { en: "A dissonant chord that needs resolution", es: "Un acorde disonante que necesita resolución", de: "Ein dissonanter Akkord, der Auflösung benötigt", nl: "Een dissonant akkoord dat oplossing nodig heeft" }
        ],
        correct: 0,
        explanation: {
          en: "A pivot chord belongs to both keys and serves as a smooth transition point in modulation, reinterpreted in the new key context.",
          es: "Un acorde pivote pertenece a ambas tonalidades y sirve como punto de transición suave en la modulación, reinterpretado en el contexto de la nueva tonalidad.",
          de: "Ein Drehakkord gehört zu beiden Tonarten und dient als sanfter Übergangspunkt bei der Modulation, neu interpretiert im Kontext der neuen Tonart.",
          nl: "Een spilakkoord behoort tot beide toonsoorten en dient als vloeiend overgangspunt bij modulatie, geherinterpreteerd in de nieuwe toonsoortcontext."
        }
      },
      {
        question: {
          en: "What is the Roman numeral analysis for a major chord built on the 4th degree of a major scale?",
          es: "¿Cuál es el análisis en números romanos para un acorde mayor construido sobre el 4º grado de una escala mayor?",
          de: "Was ist die römische Ziffernanalyse für einen Dur-Akkord, der auf dem 4. Grad einer Dur-Tonleiter aufgebaut ist?",
          nl: "Wat is de Romeinse cijferanalyse voor een majeur akkoord gebouwd op de 4e graad van een majeur toonladder?"
        },
        options: [
          { en: "IV", es: "IV", de: "IV", nl: "IV" },
          { en: "iv", es: "iv", de: "iv", nl: "iv" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "F", es: "Fa", de: "F", nl: "F" }
        ],
        correct: 0,
        explanation: {
          en: "Roman numeral analysis uses uppercase Roman numerals for major chords. The 4th degree chord in major is naturally major, so it's IV.",
          es: "El análisis con números romanos usa números romanos en mayúscula para acordes mayores. El acorde del 4º grado en mayor es naturalmente mayor, así que es IV.",
          de: "Die römische Ziffernanalyse verwendet große römische Ziffern für Dur-Akkorde. Der 4.-Grad-Akkord in Dur ist natürlicherweise Dur, also IV.",
          nl: "Romeinse cijferanalyse gebruikt hoofdletters voor majeur akkoorden. Het 4e graad akkoord in majeur is van nature majeur, dus het is IV."
        }
      },
      {
        question: {
          en: "What creates the distinctive sound of an augmented sixth chord?",
          es: "¿Qué crea el sonido distintivo de un acorde de sexta aumentada?",
          de: "Was erzeugt den charakteristischen Klang eines übermäßigen Sextakkords?",
          nl: "Wat creëert het onderscheidende geluid van een overmatige sext akkoord?"
        },
        options: [
          { en: "The augmented sixth interval that expands outward to an octave", es: "El intervalo de sexta aumentada que se expande hacia afuera a una octava", de: "Das übermäßige Sextintervall, das sich nach außen zu einer Oktave erweitert", nl: "Het overmatige sext interval dat naar buiten uitbreidt naar een octaaf" },
          { en: "The minor third in the chord", es: "La tercera menor en el acorde", de: "Die kleine Terz im Akkord", nl: "De kleine terts in het akkoord" },
          { en: "The doubled root", es: "La fundamental duplicada", de: "Der verdoppelte Grundton", nl: "De verdubbelde grondtoon" },
          { en: "The perfect fifth", es: "La quinta justa", de: "Die reine Quinte", nl: "De reine kwint" }
        ],
        correct: 0,
        explanation: {
          en: "The augmented sixth interval creates strong voice-leading tension that typically resolves outward to an octave, giving these chords their distinctive dramatic character.",
          es: "El intervalo de sexta aumentada crea una fuerte tensión en la conducción de voces que típicamente resuelve hacia afuera a una octava, dando a estos acordes su carácter dramático distintivo.",
          de: "Das übermäßige Sextintervall erzeugt starke stimmführende Spannung, die sich typisch nach außen zu einer Oktave auflöst und diesen Akkorden ihren charakteristischen dramatischen Charakter verleiht.",
          nl: "Het overmatige sext interval creëert sterke stemvoerende spanning die typisch naar buiten oplost naar een octaaf, wat deze akkoorden hun onderscheidende dramatische karakter geeft."
        }
      },
      {
        question: {
          en: "In counterpoint, what is a passing tone?",
          es: "En el contrapunto, ¿qué es una nota de paso?",
          de: "Im Kontrapunkt, was ist ein Durchgangston?",
          nl: "In contrapunt, wat is een doorgangstoon?"
        },
        options: [
          { en: "A non-chord tone that connects two chord tones by step", es: "Una nota ajena al acorde que conecta dos notas del acorde por grados", de: "Ein akkordfremdcr Ton, der zwei Akkordtöne schrittweise verbindet", nl: "Een akkoordvreemde toon die twee akkoordtonen stapsgewijs verbindt" },
          { en: "A chord tone that moves to another chord tone", es: "Una nota del acorde que se mueve a otra nota del acorde", de: "Ein Akkordton, der sich zu einem anderen Akkordton bewegt", nl: "Een akkoordtoon die naar een andere akkoordtoon beweegt" },
          { en: "A tone that is held over from the previous chord", es: "Una nota que se mantiene del acorde anterior", de: "Ein Ton, der vom vorherigen Akkord gehalten wird", nl: "Een toon die wordt vastgehouden van het vorige akkoord" },
          { en: "The strongest tone in a chord", es: "La nota más fuerte en un acorde", de: "Der stärkste Ton in einem Akkord", nl: "De sterkste toon in een akkoord" }
        ],
        correct: 0,
        explanation: {
          en: "A passing tone is a melodic embellishment that fills the gap between two chord tones, typically occurring on a weak beat and moving by step.",
          es: "Una nota de paso es un adorno melódico que llena el espacio entre dos notas del acorde, típicamente ocurriendo en un tiempo débil y moviéndose por grados.",
          de: "Ein Durchgangston ist eine melodische Verzierung, die die Lücke zwischen zwei Akkordtönen füllt, typischerweise auf einer schwachen Zählzeit auftritt und sich schrittweise bewegt.",
          nl: "Een doorgangstoon is een melodische versiering die de kloof tussen twee akkoordtonen vult, typisch voorkomend op een zwakke tel en stapsgewijs bewegend."
        }
      },
      {
        question: {
          en: "What is the difference between authentic and plagal cadences?",
          es: "¿Cuál es la diferencia entre las cadencias auténticas y plagales?",
          de: "Was ist der Unterschied zwischen authentischen und plagalen Kadenzen?",
          nl: "Wat is het verschil tussen authentieke en plagale cadenzen?"
        },
        options: [
          { en: "Authentic uses V-I, plagal uses IV-I", es: "Auténtica usa V-I, plagal usa IV-I", de: "Authentisch verwendet V-I, plagal verwendet IV-I", nl: "Authentiek gebruikt V-I, plagaal gebruikt IV-I" },
          { en: "Authentic is in major, plagal is in minor", es: "Auténtica es en mayor, plagal es en menor", de: "Authentisch ist in Dur, plagal ist in Moll", nl: "Authentiek is in majeur, plagaal is in mineur" },
          { en: "Authentic is stronger, plagal is weaker", es: "Auténtica es más fuerte, plagal es más débil", de: "Authentisch ist stärker, plagal ist schwächer", nl: "Authentiek is sterker, plagaal is zwakker" },
          { en: "They are the same thing with different names", es: "Son la misma cosa con nombres diferentes", de: "Sie sind dasselbe mit verschiedenen Namen", nl: "Ze zijn hetzelfde met verschillende namen" }
        ],
        correct: 0,
        explanation: {
          en: "An authentic cadence uses dominant to tonic motion (V-I), while a plagal cadence uses subdominant to tonic motion (IV-I), often called the 'Amen' cadence.",
          es: "Una cadencia auténtica usa movimiento dominante a tónica (V-I), mientras que una cadencia plagal usa movimiento subdominante a tónica (IV-I), a menudo llamada cadencia 'Amén'.",
          de: "Eine authentische Kadenz verwendet Dominant-zu-Tonika-Bewegung (V-I), während eine plagale Kadenz Subdominant-zu-Tonika-Bewegung (IV-I) verwendet, oft als 'Amen'-Kadenz bezeichnet.",
          nl: "Een authentieke cadens gebruikt dominant naar tonica beweging (V-I), terwijl een plagale cadens subdominant naar tonica beweging (IV-I) gebruikt, vaak de 'Amen' cadens genoemd."
        }
      },
      {
        question: {
          en: "In jazz, what is a 'backdoor' progression?",
          es: "En el jazz, ¿qué es una progresión 'backdoor'?",
          de: "Im Jazz, was ist eine 'Backdoor'-Progression?",
          nl: "In jazz, wat is een 'backdoor' progressie?"
        },
        options: [
          { en: "♭VII - IV - I", es: "♭VII - IV - I", de: "♭VII - IV - I", nl: "♭VII - IV - I" },
          { en: "V - I", es: "V - I", de: "V - I", nl: "V - I" },
          { en: "ii - V - I", es: "ii - V - I", de: "ii - V - I", nl: "ii - V - I" },
          { en: "I - vi - ii - V", es: "I - vi - ii - V", de: "I - vi - ii - V", nl: "I - vi - ii - V" }
        ],
        correct: 0,
        explanation: {
          en: "A 'backdoor' progression uses ♭VII - IV - I, approaching the tonic through the 'back door' rather than the traditional V - I dominant approach.",
          es: "Una progresión 'backdoor' usa ♭VII - IV - I, acercándose a la tónica a través de la 'puerta trasera' en lugar del enfoque dominante tradicional V - I.",
          de: "Eine 'Backdoor'-Progression verwendet ♭VII - IV - I und nähert sich der Tonika durch die 'Hintertür' statt des traditionellen V - I Dominantansatzes.",
          nl: "Een 'backdoor' progressie gebruikt ♭VII - IV - I, de tonica benaderend door de 'achterdeur' in plaats van de traditionele V - I dominant benadering."
        }
      },
      {
        question: {
          en: "What is the function of a German augmented sixth chord?",
          es: "¿Cuál es la función de un acorde alemán de sexta aumentada?",
          de: "Was ist die Funktion eines deutschen übermäßigen Sextakkords?",
          nl: "Wat is de functie van een Duits overmatig sext akkoord?"
        },
        options: [
          { en: "Pre-dominant function, typically resolving to V", es: "Función predominante, típicamente resolviendo a V", de: "Prädominantfunktion, typisch auflösend nach V", nl: "Pre-dominante functie, typisch oplossend naar V" },
          { en: "Dominant function", es: "Función dominante", de: "Dominantfunktion", nl: "Dominante functie" },
          { en: "Tonic function", es: "Función de tónica", de: "Tonikafunktion", nl: "Tonica functie" },
          { en: "No harmonic function", es: "Sin función armónica", de: "Keine harmonische Funktion", nl: "Geen harmonische functie" }
        ],
        correct: 0,
        explanation: {
          en: "German augmented sixth chords serve a pre-dominant function, creating strong voice-leading that typically resolves to the dominant chord (V or V7).",
          es: "Los acordes alemanes de sexta aumentada sirven una función predominante, creando una conducción de voces fuerte que típicamente resuelve al acorde dominante (V o V7).",
          de: "Deutsche übermäßige Sextakkorde erfüllen eine prädominante Funktion und erzeugen starke Stimmführung, die typisch zum Dominantakkord (V oder V7) auflöst.",
          nl: "Duitse overmatige sext akkoorden vervullen een pre-dominante functie, waarbij sterke stemvoering wordt gecreëerd die typisch oplost naar het dominante akkoord (V of V7)."
        }
      },
      {
        question: {
          en: "In modal harmony, what makes the Dorian mode distinctive from natural minor?",
          es: "En la armonía modal, ¿qué hace que el modo dórico sea distintivo del menor natural?",
          de: "In der modalen Harmonie, was macht den dorischen Modus charakteristisch gegenüber natürlichem Moll?",
          nl: "In modale harmonie, wat maakt de Dorische modus onderscheidend van natuurlijk mineur?"
        },
        options: [
          { en: "Raised 6th degree", es: "6º grado elevado", de: "Erhöhter 6. Grad", nl: "Verhoogde 6e graad" },
          { en: "Raised 7th degree", es: "7º grado elevado", de: "Erhöhter 7. Grad", nl: "Verhoogde 7e graad" },
          { en: "Lowered 3rd degree", es: "3er grado rebajado", de: "Erniedrigter 3. Grad", nl: "Verlaagde 3e graad" },
          { en: "Raised 4th degree", es: "4º grado elevado", de: "Erhöhter 4. Grad", nl: "Verhoogde 4e graad" }
        ],
        correct: 0,
        explanation: {
          en: "Dorian mode has a raised 6th degree compared to natural minor, which gives it a brighter, less melancholy character while maintaining its minor tonality.",
          es: "El modo dórico tiene un 6º grado elevado comparado con el menor natural, lo que le da un carácter más brillante y menos melancólico mientras mantiene su tonalidad menor.",
          de: "Der dorische Modus hat einen erhöhten 6. Grad im Vergleich zu natürlichem Moll, was ihm einen helleren, weniger melancholischen Charakter verleiht, während die Moll-Tonalität erhalten bleibt.",
          nl: "De Dorische modus heeft een verhoogde 6e graad vergeleken met natuurlijk mineur, wat het een helderder, minder melancholiek karakter geeft terwijl de mineur tonaliteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is a Phrygian cadence?",
          es: "¿Qué es una cadencia frigia?",
          de: "Was ist eine phrygische Kadenz?",
          nl: "Wat is een Frygische cadens?"
        },
        options: [
          { en: "iv6 - V in minor, with the bass moving by half-step", es: "iv6 - V en menor, con el bajo moviéndose por semitonos", de: "iv6 - V in Moll, mit dem Bass, der sich halbtonweise bewegt", nl: "iv6 - V in mineur, met de bas die zich met halve stap beweegt" },
          { en: "V - I in major", es: "V - I en mayor", de: "V - I in Dur", nl: "V - I in majeur" },
          { en: "ii - V - I", es: "ii - V - I", de: "ii - V - I", nl: "ii - V - I" },
          { en: "I - ♭II - V", es: "I - ♭II - V", de: "I - ♭II - V", nl: "I - ♭II - V" }
        ],
        correct: 0,
        explanation: {
          en: "A Phrygian cadence uses iv6 - V in minor keys, where the bass moves chromatically upward by half-step, creating a distinctive sound characteristic of the Phrygian mode.",
          es: "Una cadencia frigia usa iv6 - V en tonalidades menores, donde el bajo se mueve cromáticamente hacia arriba por semitonos, creando un sonido distintivo característico del modo frigio.",
          de: "Eine phrygische Kadenz verwendet iv6 - V in Moll-Tonarten, wo der Bass sich chromatisch aufwärts um einen Halbton bewegt und einen charakteristischen Klang des phrygischen Modus erzeugt.",
          nl: "Een Frygische cadens gebruikt iv6 - V in mineur toonsoorten, waar de bas zich chromatisch opwaarts met halve stap beweegt, wat een onderscheidend geluid creëert dat kenmerkend is voor de Frygische modus."
        }
      },
      {
        question: {
          en: "In species counterpoint, what characterizes first species?",
          es: "En el contrapunto de especies, ¿qué caracteriza a la primera especie?",
          de: "Im Gattungskontrapunkt, was charakterisiert die erste Gattung?",
          nl: "In soorten contrapunt, wat kenmerkt de eerste soort?"
        },
        options: [
          { en: "Note against note", es: "Nota contra nota", de: "Note gegen Note", nl: "Noot tegen noot" },
          { en: "Two notes against one", es: "Dos notas contra una", de: "Zwei Noten gegen eine", nl: "Twee noten tegen een" },
          { en: "Four notes against one", es: "Cuatro notas contra una", de: "Vier Noten gegen eine", nl: "Vier noten tegen een" },
          { en: "Syncopated rhythm", es: "Ritmo sincopado", de: "Synkopierter Rhythmus", nl: "Gesyncopeerd ritme" }
        ],
        correct: 0,
        explanation: {
          en: "First species counterpoint features note-against-note writing, where each note in one voice corresponds to exactly one note in the other voice.",
          es: "El contrapunto de primera especie presenta escritura nota-contra-nota, donde cada nota en una voz corresponde exactamente a una nota en la otra voz.",
          de: "Der Kontrapunkt der ersten Gattung weist Note-gegen-Note-Satz auf, bei dem jede Note in einer Stimme genau einer Note in der anderen Stimme entspricht.",
          nl: "Eerste soort contrapunt kenmerkt zich door noot-tegen-noot schrijven, waarbij elke noot in één stem precies overeenkomt met één noot in de andere stem."
        }
      },
      {
        question: {
          en: "What is the chord progression known as the 'Circle of Fifths progression'?",
          es: "¿Cuál es la progresión de acordes conocida como 'progresión del círculo de quintas'?",
          de: "Was ist die Akkordfolge, die als 'Quintenzirkel-Progression' bekannt ist?",
          nl: "Wat is de akkoordprogressie bekend als de 'kwinten cirkel progressie'?"
        },
        options: [
          { en: "Chord roots descending by perfect fifths", es: "Fundamentales de acordes descendiendo por quintas justas", de: "Akkordgrunditöne, die um reine Quinten absteigen", nl: "Akkoord grondtonen dalend met reine kwinten" },
          { en: "Chords arranged in a circle", es: "Acordes arreglados en un círculo", de: "Akkorde in einem Kreis angeordnet", nl: "Akkoorden gerangschikt in een cirkel" },
          { en: "Five chords in sequence", es: "Cinco acordes en secuencia", de: "Fünf Akkorde in Reihenfolge", nl: "Vijf akkoorden in volgorde" },
          { en: "Chords using only perfect fifths", es: "Acordes usando solo quintas justas", de: "Akkorde, die nur reine Quinten verwenden", nl: "Akkoorden die alleen reine kwinten gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Circle of fifths progressions feature chord roots that descend by perfect fifths (or ascend by perfect fourths), creating strong harmonic motion.",
          es: "Las progresiones del círculo de quintas presentan fundamentales de acordes que descienden por quintas justas (o ascienden por cuartas justas), creando un fuerte movimiento armónico.",
          de: "Quintenzirkel-Progressionen weisen Akkordgrunditöne auf, die um reine Quinten absteigen (oder um reine Quarten aufsteigen) und starke harmonische Bewegung erzeugen.",
          nl: "Kwinten cirkel progressies hebben akkoord grondtonen die dalen met reine kwinten (of stijgen met reine kwarten), wat sterke harmonische beweging creëert."
        }
      },
      {
        question: {
          en: "What is the difference between a real and tonal answer in fugue?",
          es: "¿Cuál es la diferencia entre una respuesta real y tonal en la fuga?",
          de: "Was ist der Unterschied zwischen einer realen und tonalen Antwort in einer Fuge?",
          nl: "Wat is het verschil tussen een echt en tonaal antwoord in fuga?"
        },
        options: [
          { en: "Real answer is exact transposition, tonal answer adjusts for tonal relationships", es: "La respuesta real es transposición exacta, la respuesta tonal se ajusta para las relaciones tonales", de: "Reale Antwort ist exakte Transposition, tonale Antwort passt sich an tonale Beziehungen an", nl: "Echt antwoord is exacte transpositie, tonaal antwoord past zich aan voor tonale verhoudingen" },
          { en: "Real answer is in the same key, tonal answer is in a different key", es: "La respuesta real está en la misma tonalidad, la respuesta tonal está en una tonalidad diferente", de: "Reale Antwort ist in derselben Tonart, tonale Antwort ist in einer anderen Tonart", nl: "Echt antwoord is in dezelfde toonsoort, tonaal antwoord is in een andere toonsoort" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Real answer uses all real intervals, tonal answer uses tempered intervals", es: "La respuesta real usa todos los intervalos reales, la respuesta tonal usa intervalos temperados", de: "Reale Antwort verwendet alle realen Intervalle, tonale Antwort verwendet temperierte Intervalle", nl: "Echt antwoord gebruikt alle echte intervallen, tonaal antwoord gebruikt getemperde intervallen" }
        ],
        correct: 0,
        explanation: {
          en: "A real answer is an exact intervallic transposition of the subject, while a tonal answer makes slight adjustments to maintain proper tonal relationships within the key.",
          es: "Una respuesta real es una transposición intervállica exacta del sujeto, mientras que una respuesta tonal hace ajustes ligeros para mantener las relaciones tonales apropiadas dentro de la tonalidad.",
          de: "Eine reale Antwort ist eine exakte intervallische Transposition des Themas, während eine tonale Antwort leichte Anpassungen vornimmt, um die richtigen tonalen Beziehungen innerhalb der Tonart zu erhalten.",
          nl: "Een echt antwoord is een exacte intervallische transpositie van het onderwerp, terwijl een tonaal antwoord lichte aanpassingen maakt om de juiste tonale verhoudingen binnen de toonsoort te behouden."
        }
      },
      {
        question: {
          en: "In harmonic analysis, what does a V7/V chord represent?",
          es: "En el análisis armónico, ¿qué representa un acorde V7/V?",
          de: "In der harmonischen Analyse, was stellt ein V7/V-Akkord dar?",
          nl: "In harmonische analyse, wat vertegenwoordigt een V7/V akkoord?"
        },
        options: [
          { en: "The dominant 7th of the dominant chord (secondary dominant)", es: "La séptima dominante del acorde dominante (dominante secundario)", de: "Die Dominantseptime des Dominantakkords (Zwischendominante)", nl: "De dominant septiem van het dominante akkoord (secundaire dominant)" },
          { en: "A diminished 7th chord", es: "Un acorde de séptima disminuida", de: "Ein verminderter Septakkord", nl: "Een verminderd septiem akkoord" },
          { en: "The 5th of the 5th degree", es: "La quinta del 5º grado", de: "Die Quinte des 5. Grads", nl: "De kwint van de 5e graad" },
          { en: "A chord with two dominants", es: "Un acorde con dos dominantes", de: "Ein Akkord mit zwei Dominanten", nl: "Een akkoord met twee dominanten" }
        ],
        correct: 0,
        explanation: {
          en: "V7/V indicates a secondary dominant - the dominant 7th chord of the dominant, which temporarily tonicizes the V chord before resolving to it.",
          es: "V7/V indica un dominante secundario - el acorde de séptima dominante del dominante, que temporalmente toniciza el acorde V antes de resolver a él.",
          de: "V7/V zeigt eine Zwischendominante an - den Dominantseptakkord der Dominante, der vorübergehend den V-Akkord tonikalisiert, bevor er zu ihm auflöst.",
          nl: "V7/V geeft een secundaire dominant aan - het dominant septiem akkoord van de dominant, dat tijdelijk het V akkoord tonicaliseert voordat het ertoe oplost."
        }
      },
      {
        question: {
          en: "What is voice crossing in four-part writing?",
          es: "¿Qué es el cruzamiento de voces en la escritura a cuatro partes?",
          de: "Was ist Stimmkreuzung im vierstimmigen Satz?",
          nl: "Wat is stemkruising in vierstemmig schrijven?"
        },
        options: [
          { en: "When a lower voice moves above a higher voice", es: "Cuando una voz inferior se mueve por encima de una voz superior", de: "Wenn eine tiefere Stimme sich über eine höhere Stimme bewegt", nl: "Wanneer een lagere stem boven een hogere stem beweegt" },
          { en: "When voices sing in harmony", es: "Cuando las voces cantan en armonía", de: "Wenn Stimmen in Harmonie singen", nl: "Wanneer stemmen in harmonie zingen" },
          { en: "When voices exchange notes", es: "Cuando las voces intercambian notas", de: "Wenn Stimmen Noten austauschen", nl: "Wanneer stemmen noten uitwisselen" },
          { en: "When two voices sing the same note", es: "Cuando dos voces cantan la misma nota", de: "Wenn zwei Stimmen dieselbe Note singen", nl: "Wanneer twee stemmen dezelfde noot zingen" }
        ],
        correct: 0,
        explanation: {
          en: "Voice crossing occurs when a normally lower voice (like tenor) moves above a normally higher voice (like alto), temporarily reversing their normal registral order.",
          es: "El cruzamiento de voces ocurre cuando una voz normalmente más grave (como tenor) se mueve por encima de una voz normalmente más aguda (como alto), invirtiendo temporalmente su orden registral normal.",
          de: "Stimmkreuzung tritt auf, wenn eine normalerweise tiefere Stimme (wie Tenor) sich über eine normalerweise höhere Stimme (wie Alt) bewegt und dabei vorübergehend ihre normale Registerordnung umkehrt.",
          nl: "Stemkruising treedt op wanneer een normaal lagere stem (zoals tenor) boven een normaal hogere stem (zoals alt) beweegt, waarbij tijdelijk hun normale registrale volgorde wordt omgekeerd."
        }
      },
      {
        question: {
          en: "What is the harmonic rhythm?",
          es: "¿Qué es el ritmo armónico?",
          de: "Was ist der harmonische Rhythmus?",
          nl: "Wat is het harmonische ritme?"
        },
        options: [
          { en: "The rate at which chords change", es: "La velocidad a la que cambian los acordes", de: "Die Geschwindigkeit, mit der Akkorde wechseln", nl: "De snelheid waarmee akkoorden veranderen" },
          { en: "The rhythm of the melody", es: "El ritmo de la melodía", de: "Der Rhythmus der Melodie", nl: "Het ritme van de melodie" },
          { en: "The tempo of the piece", es: "El tempo de la pieza", de: "Das Tempo des Stücks", nl: "Het tempo van het stuk" },
          { en: "The syncopation in harmony", es: "La síncopa en la armonía", de: "Die Synkope in der Harmonie", nl: "De syncope in harmonie" }
        ],
        correct: 0,
        explanation: {
          en: "Harmonic rhythm refers to how frequently chords change - it can be fast (chords changing every beat) or slow (chords lasting several measures).",
          es: "El ritmo armónico se refiere a qué tan frecuentemente cambian los acordes - puede ser rápido (acordes cambiando en cada tiempo) o lento (acordes durando varios compases).",
          de: "Harmonischer Rhythmus bezieht sich darauf, wie häufig Akkorde wechseln - er kann schnell sein (Akkorde wechseln jeden Schlag) oder langsam (Akkorde dauern mehrere Takte).",
          nl: "Harmonisch ritme verwijst naar hoe vaak akkoorden veranderen - het kan snel zijn (akkoorden veranderen elke tel) of langzaam (akkoorden duren meerdere maten)."
        }
      },
      {
        question: {
          en: "In a major key, what chord typically precedes the dominant in a strong cadential motion?",
          es: "En una tonalidad mayor, ¿qué acorde típicamente precede al dominante en un movimiento cadencial fuerte?",
          de: "In einer Dur-Tonart, welcher Akkord geht dem Dominantakkord typisch in einer starken Kadenzbewegung voraus?",
          nl: "In een majeur toonsoort, welk akkoord gaat typisch vooraf aan de dominant in een sterke cadentiale beweging?"
        },
        options: [
          { en: "IV or ii", es: "IV o ii", de: "IV oder ii", nl: "IV of ii" },
          { en: "vi", es: "vi", de: "vi", nl: "vi" },
          { en: "iii", es: "iii", de: "iii", nl: "iii" },
          { en: "I", es: "I", de: "I", nl: "I" }
        ],
        correct: 0,
        explanation: {
          en: "Pre-dominant chords (IV and ii) typically precede the dominant in cadential progressions, creating the strong harmonic motion IV(ii)-V-I or ii-V-I.",
          es: "Los acordes predominantes (IV y ii) típicamente preceden al dominante en progresiones cadenciales, creando el fuerte movimiento armónico IV(ii)-V-I o ii-V-I.",
          de: "Prädominante Akkorde (IV und ii) gehen dem Dominantakkord in Kadenzprogressionen typisch voraus und erzeugen die starke harmonische Bewegung IV(ii)-V-I oder ii-V-I.",
          nl: "Pre-dominante akkoorden (IV en ii) gaan typisch vooraf aan de dominant in cadentiale progressies, wat de sterke harmonische beweging IV(ii)-V-I of ii-V-I creëert."
        }
      },
      {
        question: {
          en: "What is the principle behind voice leading in common practice harmony?",
          es: "¿Cuál es el principio detrás de la conducción de voces en la armonía de práctica común?",
          de: "Was ist das Prinzip hinter der Stimmführung in der Harmonik der gemeinsamen Praxis?",
          nl: "Wat is het principe achter stemvoering in gewone praktijk harmonie?"
        },
        options: [
          { en: "Smooth, stepwise motion while avoiding parallel perfect intervals", es: "Movimiento suave por grados evitando intervalos perfectos paralelos", de: "Sanfte, schrittweise Bewegung unter Vermeidung paralleler perfekter Intervalle", nl: "Soepele, stapsgewijze beweging terwijl parallelle perfecte intervallen worden vermeden" },
          { en: "All voices should move in parallel motion", es: "Todas las voces deben moverse en movimiento paralelo", de: "Alle Stimmen sollten sich in Parallelbewegung bewegen", nl: "Alle stemmen zouden in parallelle beweging moeten bewegen" },
          { en: "Voices should always move by large intervals", es: "Las voces deben moverse siempre por intervalos grandes", de: "Stimmen sollten sich immer in großen Intervallen bewegen", nl: "Stemmen zouden altijd met grote intervallen moeten bewegen" },
          { en: "Only the melody needs to be considered", es: "Solo la melodía necesita ser considerada", de: "Nur die Melodie muss berücksichtigt werden", nl: "Alleen de melodie hoeft te worden overwogen" }
        ],
        correct: 0,
        explanation: {
          en: "Good voice leading emphasizes smooth, stepwise motion when possible, maintains independence between voices, and avoids problematic parallel perfect intervals (5ths and octaves).",
          es: "Una buena conducción de voces enfatiza el movimiento suave por grados cuando es posible, mantiene la independencia entre voces, y evita intervalos perfectos paralelos problemáticos (5as y 8vas).",
          de: "Gute Stimmführung betont sanfte, schrittweise Bewegung wenn möglich, erhält die Unabhängigkeit zwischen Stimmen und vermeidet problematische parallele perfekte Intervalle (Quinten und Oktaven).",
          nl: "Goede stemvoering benadrukt soepele, stapsgewijze beweging wanneer mogelijk, houdt onafhankelijkheid tussen stemmen in stand, en vermijdt problematische parallelle perfecte intervallen (kwinten en octaven)."
        }
      },
      {
        question: {
          en: "What is an escape tone in melodic writing?",
          es: "¿Qué es una nota de escape en la escritura melódica?",
          de: "Was ist ein Wechselton in der melodischen Schreibweise?",
          nl: "Wat is een ontsnappingstoon in melodisch schrijven?"
        },
        options: [
          { en: "A non-chord tone approached by step and left by leap in the opposite direction", es: "Una nota ajena al acorde abordada por grados y abandonada por salto en dirección opuesta", de: "Ein akkordfremdcr Ton, der schrittweise erreicht und durch Sprung in entgegengesetzter Richtung verlassen wird", nl: "Een akkoordvreemde toon die stapsgewijs wordt benaderd en via sprong in tegengestelde richting wordt verlaten" },
          { en: "A chord tone that moves by step", es: "Una nota del acorde que se mueve por grados", de: "Ein Akkordton, der sich schrittweise bewegt", nl: "Een akkoordtoon die stapsgewijs beweegt" },
          { en: "The highest note in a phrase", es: "La nota más alta en una frase", de: "Der höchste Ton in einer Phrase", nl: "De hoogste noot in een frase" },
          { en: "A tone that returns to itself", es: "Una nota que regresa a sí misma", de: "Ein Ton, der zu sich selbst zurückkehrt", nl: "Een toon die naar zichzelf terugkeert" }
        ],
        correct: 0,
        explanation: {
          en: "An escape tone is approached by step from a chord tone and then leaps away in the opposite direction, creating a brief melodic 'escape' from the harmonic structure.",
          es: "Una nota de escape se aborda por grados desde una nota del acorde y luego salta en dirección opuesta, creando un breve 'escape' melódico de la estructura armónica.",
          de: "Ein Wechselton wird schrittweise von einem Akkordton erreicht und springt dann in entgegengesetzter Richtung weg, wodurch ein kurzer melodischer 'Ausbruch' aus der harmonischen Struktur entsteht.",
          nl: "Een ontsnappingstoon wordt stapsgewijs benaderd vanuit een akkoordtoon en springt dan weg in de tegengestelde richting, wat een korte melodische 'ontsnapping' uit de harmonische structuur creëert."
        }
      },
      {
        question: {
          en: "In jazz harmony, what is chord substitution?",
          es: "En la armonía del jazz, ¿qué es la sustitución de acordes?",
          de: "In der Jazzharmonie, was ist Akkordsubstitution?",
          nl: "In jazz harmonie, wat is akkord substitutie?"
        },
        options: [
          { en: "Replacing a chord with another that shares similar harmonic function or notes", es: "Reemplazar un acorde con otro que comparte función armónica o notas similares", de: "Einen Akkord durch einen anderen ersetzen, der ähnliche harmonische Funktion oder Töne teilt", nl: "Een akkoord vervangen door een ander dat vergelijkbare harmonische functie of noten deelt" },
          { en: "Playing two chords at the same time", es: "Tocar dos acordes al mismo tiempo", de: "Zwei Akkorde gleichzeitig spielen", nl: "Twee akkoorden tegelijkertijd spelen" },
          { en: "Changing the rhythm of chords", es: "Cambiar el ritmo de los acordes", de: "Den Rhythmus der Akkorde ändern", nl: "Het ritme van akkoorden veranderen" },
          { en: "Adding extensions to basic triads", es: "Agregar extensiones a tríadas básicas", de: "Erweiterungen zu Grunddreiklängen hinzufügen", nl: "Extensies toevoegen aan basis drieklankken" }
        ],
        correct: 0,
        explanation: {
          en: "Chord substitution involves replacing a chord with another that can function similarly, often sharing common tones or serving the same harmonic purpose in the progression.",
          es: "La sustitución de acordes implica reemplazar un acorde con otro que puede funcionar de manera similar, a menudo compartiendo notas comunes o sirviendo el mismo propósito armónico en la progresión.",
          de: "Akkordsubstitution beinhaltet das Ersetzen eines Akkords durch einen anderen, der ähnlich funktionieren kann, oft gemeinsame Töne teilt oder denselben harmonischen Zweck in der Progression erfüllt.",
          nl: "Akkord substitutie houdt in dat een akkoord wordt vervangen door een ander dat vergelijkbaar kan functioneren, vaak gemeenschappelijke tonen deelt of hetzelfde harmonische doel dient in de progressie."
        }
      },
      {
        question: {
          en: "What is the characteristic sound of a half-diminished 7th chord?",
          es: "¿Cuál es el sonido característico de un acorde de séptima semidisminuida?",
          de: "Was ist der charakteristische Klang eines halbverminderten Septakkords?",
          nl: "Wat is het karakteristieke geluid van een half-verminderd septiem akkoord?"
        },
        options: [
          { en: "Dark and mysterious, less tense than fully diminished", es: "Oscuro y misterioso, menos tenso que completamente disminuido", de: "Dunkel und geheimnisvoll, weniger spannungsreich als vollständig vermindert", nl: "Donker en mysterieus, minder gespannen dan volledig verminderd" },
          { en: "Bright and cheerful", es: "Brillante y alegre", de: "Hell und fröhlich", nl: "Helder en vrolijk" },
          { en: "Exactly like a major 7th chord", es: "Exactamente como un acorde de séptima mayor", de: "Genau wie ein großer Septakkord", nl: "Precies zoals een majeur septiem akkoord" },
          { en: "Very dissonant and unstable", es: "Muy disonante e inestable", de: "Sehr dissonant und instabil", nl: "Zeer dissonant en onstabiel" }
        ],
        correct: 0,
        explanation: {
          en: "Half-diminished 7th chords (ø7) have a dark, mysterious quality that's less harsh than fully diminished chords, often used in jazz and romantic harmony for color.",
          es: "Los acordes de séptima semidisminuida (ø7) tienen una cualidad oscura y misteriosa que es menos áspera que los acordes completamente disminuidos, a menudo usados en jazz y armonía romántica para colorido.",
          de: "Halbverminderte Septakkorde (ø7) haben eine dunkle, geheimnisvolle Qualität, die weniger harsch ist als vollständig verminderte Akkorde, oft im Jazz und in der romantischen Harmonie für Farbe verwendet.",
          nl: "Half-verminderde septiem akkoorden (ø7) hebben een donkere, mysterieuze kwaliteit die minder hard is dan volledig verminderde akkoorden, vaak gebruikt in jazz en romantische harmonie voor kleur."
        }
      },
      {
        question: {
          en: "What is the relationship between relative major and minor keys?",
          es: "¿Cuál es la relación entre las tonalidades relativas mayores y menores?",
          de: "Was ist die Beziehung zwischen relativen Dur- und Moll-Tonarten?",
          nl: "Wat is de relatie tussen relatieve majeur en mineur toonsoorten?"
        },
        options: [
          { en: "They share the same key signature, minor is a minor third below major", es: "Comparten la misma armadura, el menor está una tercera menor por debajo del mayor", de: "Sie teilen dieselbe Vorzeichen, Moll ist eine kleine Terz unter Dur", nl: "Ze delen dezelfde voortekening, mineur is een kleine terts onder majeur" },
          { en: "They have different key signatures", es: "Tienen diferentes armaduras", de: "Sie haben verschiedene Vorzeichen", nl: "Ze hebben verschillende voortekeneningen" },
          { en: "Minor is always a perfect fifth above major", es: "El menor está siempre una quinta justa por encima del mayor", de: "Moll ist immer eine reine Quinte über Dur", nl: "Mineur is altijd een reine kwint boven majeur" },
          { en: "They are the same key", es: "Son la misma tonalidad", de: "Sie sind dieselbe Tonart", nl: "Ze zijn dezelfde toonsoort" }
        ],
        correct: 0,
        explanation: {
          en: "Relative major and minor keys share the same key signature but have different tonic notes - the relative minor's tonic is a minor third (or major sixth) below the major's tonic.",
          es: "Las tonalidades relativas mayores y menores comparten la misma armadura pero tienen diferentes notas tónicas - la tónica del relativo menor está una tercera menor (o sexta mayor) por debajo de la tónica del mayor.",
          de: "Relative Dur- und Moll-Tonarten teilen dieselbe Vorzeichen, haben aber verschiedene Grundtöne - der Grundton des relativen Moll liegt eine kleine Terz (oder große Sexte) unter dem Grundton des Dur.",
          nl: "Relatieve majeur en mineur toonsoorten delen dezelfde voortekening maar hebben verschillende grondtonen - de grondtoon van de relatieve mineur ligt een kleine terts (of grote sext) onder de grondtoon van majeur."
        }
      },
      {
        question: {
          en: "What is sequence in harmonic progressions?",
          es: "¿Qué es la secuencia en progresiones armónicas?",
          de: "Was ist Sequenz in harmonischen Progressionen?",
          nl: "Wat is sequentie in harmonische progressies?"
        },
        options: [
          { en: "Repetition of a harmonic pattern at different pitch levels", es: "Repetición de un patrón armónico en diferentes niveles de altura", de: "Wiederholung eines harmonischen Musters auf verschiedenen Tonhöhen", nl: "Herhaling van een harmonisch patroon op verschillende toonhoogten" },
          { en: "Playing chords in alphabetical order", es: "Tocar acordes en orden alfabético", de: "Akkorde in alphabetischer Reihenfolge spielen", nl: "Akkoorden spelen in alfabetische volgorde" },
          { en: "The order of chords in a key", es: "El orden de acordes en una tonalidad", de: "Die Reihenfolge der Akkorde in einer Tonart", nl: "De volgorde van akkoorden in een toonsoort" },
          { en: "A single chord repeated many times", es: "Un solo acorde repetido muchas veces", de: "Ein einziger Akkord, der viele Male wiederholt wird", nl: "Een enkel akkoord dat vele malen wordt herhaald" }
        ],
        correct: 0,
        explanation: {
          en: "Harmonic sequence involves repeating the same pattern of chord progressions at different transposition levels, creating systematic harmonic motion through the sequence.",
          es: "La secuencia armónica implica repetir el mismo patrón de progresiones de acordes en diferentes niveles de transposición, creando movimiento armónico sistemático a través de la secuencia.",
          de: "Harmonische Sequenz beinhaltet die Wiederholung desselben Musters von Akkordprogressionen auf verschiedenen Transpositionsebenen, wodurch systematische harmonische Bewegung durch die Sequenz entsteht.",
          nl: "Harmonische sequentie houdt in dat hetzelfde patroon van akkoordprogressies wordt herhaald op verschillende transpositieniveaus, wat systematische harmonische beweging door de sequentie creëert."
        }
      },
      {
        question: {
          en: "What is a Tierce de Picardie?",
          es: "¿Qué es una Tercera de Picardía?",
          de: "Was ist eine Picardische Terz?",
          nl: "Wat is een Picardische terts?"
        },
        options: [
          { en: "Major third in the final chord of a piece in minor", es: "Tercera mayor en el acorde final de una pieza en menor", de: "Große Terz im Schlussakkord eines Stücks in Moll", nl: "Grote terts in het slotakkoord van een stuk in mineur" },
          { en: "Minor third in a major key", es: "Tercera menor en una tonalidad mayor", de: "Kleine Terz in einer Dur-Tonart", nl: "Kleine terts in een majeur toonsoort" },
          { en: "A French chord progression", es: "Una progresión de acordes francesa", de: "Eine französische Akkordfolge", nl: "Een Franse akkoordprogressie" },
          { en: "An ornamental figure in baroque music", es: "Una figura ornamental en música barroca", de: "Eine ornamentale Figur in der Barockmusik", nl: "Een ornamentale figuur in barokmuziek" }
        ],
        correct: 0,
        explanation: {
          en: "The Tierce de Picardie (Picardy third) is the practice of ending a piece in minor with a major chord by raising the third, creating a brighter conclusion.",
          es: "La Tercera de Picardía es la práctica de terminar una pieza en menor con un acorde mayor elevando la tercera, creando una conclusión más brillante.",
          de: "Die Picardische Terz ist die Praxis, ein Stück in Moll mit einem Dur-Akkord zu beenden, indem die Terz erhöht wird, was einen helleren Schluss schafft.",
          nl: "De Picardische terts is de praktijk om een stuk in mineur te beëindigen met een majeur akkoord door de terts te verhogen, wat een helderder slot creëert."
        }
      },
      {
        question: {
          en: "In figured bass, what does the number 6 indicate?",
          es: "En el bajo cifrado, ¿qué indica el número 6?",
          de: "Im Generalbass, was bedeutet die Zahl 6?",
          nl: "In becijferde bas, wat geeft het getal 6 aan?"
        },
        options: [
          { en: "First inversion chord (6th and 3rd above bass)", es: "Acorde en primera inversión (6ª y 3ª sobre el bajo)", de: "Akkord in erster Umkehrung (6. und 3. über dem Bass)", nl: "Akkoord in eerste omkering (6e en 3e boven de bas)" },
          { en: "Add a sixth to the chord", es: "Agregar una sexta al acorde", de: "Eine Sexte zum Akkord hinzufügen", nl: "Een sext aan het akkoord toevoegen" },
          { en: "Play the sixth scale degree", es: "Tocar el sexto grado de la escala", de: "Den sechsten Grad der Tonleiter spielen", nl: "Speel de zesde toonladdergraad" },
          { en: "Six different chords", es: "Seis acordes diferentes", de: "Sechs verschiedene Akkorde", nl: "Zes verschillende akkoorden" }
        ],
        correct: 0,
        explanation: {
          en: "In figured bass notation, the number 6 indicates a first inversion triad, where the intervals of a 6th and 3rd are played above the bass note.",
          es: "En la notación de bajo cifrado, el número 6 indica una tríada en primera inversión, donde se tocan los intervalos de 6ª y 3ª sobre la nota del bajo.",
          de: "In der Generalbasschreibweise zeigt die Zahl 6 einen Dreiklang in erster Umkehrung an, bei dem die Intervalle einer 6. und 3. über der Bassnote gespielt werden.",
          nl: "In becijferde bas notatie geeft het getal 6 een drieklank in eerste omkering aan, waarbij de intervallen van een 6e en 3e boven de basnoot worden gespeeld."
        }
      },
      {
        question: {
          en: "What is the intervallic structure of a French augmented sixth chord?",
          es: "¿Cuál es la estructura interválica de un acorde francés de sexta aumentada?",
          de: "Was ist die Intervallstruktur eines französischen übermäßigen Sextakkords?",
          nl: "Wat is de intervallische structuur van een Frans overmatig sext akkoord?"
        },
        options: [
          { en: "Augmented 6th, augmented 4th, and major 2nd above bass", es: "6ª aumentada, 4ª aumentada y 2ª mayor sobre el bajo", de: "Übermäßige 6., übermäßige 4. und große 2. über dem Bass", nl: "Overmatige 6e, overmatige 4e en grote 2e boven de bas" },
          { en: "Augmented 6th and major 3rd above bass", es: "6ª aumentada y 3ª mayor sobre el bajo", de: "Übermäßige 6. und große 3. über dem Bass", nl: "Overmatige 6e en grote 3e boven de bas" },
          { en: "Augmented 6th, perfect 5th, and major 3rd above bass", es: "6ª aumentada, 5ª justa y 3ª mayor sobre el bajo", de: "Übermäßige 6., reine 5. und große 3. über dem Bass", nl: "Overmatige 6e, reine 5e en grote 3e boven de bas" },
          { en: "Only augmented 6th above bass", es: "Solo 6ª aumentada sobre el bajo", de: "Nur übermäßige 6. über dem Bass", nl: "Alleen overmatige 6e boven de bas" }
        ],
        correct: 0,
        explanation: {
          en: "The French augmented sixth chord contains an augmented 6th, augmented 4th (tritone), and major 2nd above the bass, creating its characteristic dissonant color.",
          es: "El acorde francés de sexta aumentada contiene una 6ª aumentada, 4ª aumentada (tritono) y 2ª mayor sobre el bajo, creando su color disonante característico.",
          de: "Der französische übermäßige Sextakkord enthält eine übermäßige 6., übermäßige 4. (Tritonus) und große 2. über dem Bass, was seine charakteristische dissonante Farbe erzeugt.",
          nl: "Het Franse overmatige sext akkoord bevat een overmatige 6e, overmatige 4e (tritoon) en grote 2e boven de bas, wat zijn karakteristieke dissonante kleur creëert."
        }
      },
      {
        question: {
          en: "What is the predominant function in tonal harmony?",
          es: "¿Cuál es la función predominante en la armonía tonal?",
          de: "Was ist die Prädominantfunktion in der tonalen Harmonie?",
          nl: "Wat is de pre-dominante functie in tonale harmonie?"
        },
        options: [
          { en: "Chords that typically precede and lead to the dominant", es: "Acordes que típicamente preceden y conducen al dominante", de: "Akkorde, die typisch der Dominante vorausgehen und zu ihr führen", nl: "Akkoorden die typisch voorafgaan aan en leiden naar de dominant" },
          { en: "The strongest chords in a key", es: "Los acordes más fuertes en una tonalidad", de: "Die stärksten Akkorde in einer Tonart", nl: "De sterkste akkoorden in een toonsoort" },
          { en: "Chords built on the tonic", es: "Acordes construidos sobre la tónica", de: "Akkorde, die auf der Tonika aufgebaut sind", nl: "Akkoorden gebouwd op de tonica" },
          { en: "Chords that replace the dominant", es: "Acordes que reemplazan al dominante", de: "Akkorde, die die Dominante ersetzen", nl: "Akkoorden die de dominant vervangen" }
        ],
        correct: 0,
        explanation: {
          en: "Predominant function refers to harmonies (like IV, ii, or vi) that create harmonic tension and typically lead to dominant chords, setting up strong cadential motion.",
          es: "La función predominante se refiere a armonías (como IV, ii o vi) que crean tensión armónica y típicamente conducen a acordes dominantes, estableciendo un fuerte movimiento cadencial.",
          de: "Die Prädominantfunktion bezieht sich auf Harmonien (wie IV, ii oder vi), die harmonische Spannung erzeugen und typisch zu Dominantakkorden führen, wodurch starke Kadenzbewegung aufgebaut wird.",
          nl: "Pre-dominante functie verwijst naar harmonieën (zoals IV, ii of vi) die harmonische spanning creëren en typisch leiden naar dominant akkoorden, waardoor sterke cadentiale beweging wordt opgezet."
        }
      },
      {
        question: {
          en: "What is chromatic harmony?",
          es: "¿Qué es la armonía cromática?",
          de: "Was ist chromatische Harmonie?",
          nl: "Wat is chromatische harmonie?"
        },
        options: [
          { en: "Harmony that uses notes outside the diatonic scale", es: "Armonía que usa notas fuera de la escala diatónica", de: "Harmonie, die Töne außerhalb der diatonischen Tonleiter verwendet", nl: "Harmonie die noten buiten de diatonische toonladder gebruikt" },
          { en: "Harmony using only white keys", es: "Armonía usando solo teclas blancas", de: "Harmonie mit nur weißen Tasten", nl: "Harmonie die alleen witte toetsen gebruikt" },
          { en: "Harmony in different colors", es: "Armonía en diferentes colores", de: "Harmonie in verschiedenen Farben", nl: "Harmonie in verschillende kleuren" },
          { en: "Harmony without any accidentals", es: "Armonía sin alteraciones", de: "Harmonie ohne Vorzeichen", nl: "Harmonie zonder voortekens" }
        ],
        correct: 0,
        explanation: {
          en: "Chromatic harmony incorporates notes and chords from outside the basic diatonic scale, using accidentals to create richer harmonic colors and increased expressiveness.",
          es: "La armonía cromática incorpora notas y acordes de fuera de la escala diatónica básica, usando alteraciones para crear colores armónicos más ricos y mayor expresividad.",
          de: "Chromatische Harmonie integriert Töne und Akkorde von außerhalb der grundlegenden diatonischen Tonleiter und verwendet Vorzeichen, um reichere harmonische Farben und erhöhte Ausdruckskraft zu schaffen.",
          nl: "Chromatische harmonie incorporeert noten en akkoorden van buiten de basis diatonische toonladder, met gebruik van voortekens om rijkere harmonische kleuren en verhoogde expressiviteit te creëren."
        }
      },
      {
        question: {
          en: "What is the purpose of contrary motion in voice leading?",
          es: "¿Cuál es el propósito del movimiento contrario en la conducción de voces?",
          de: "Was ist der Zweck der Gegenbewegung in der Stimmführung?",
          nl: "Wat is het doel van tegenbeweging in stemvoering?"
        },
        options: [
          { en: "To maintain independence between voices and avoid parallel motion", es: "Mantener independencia entre voces y evitar movimiento paralelo", de: "Unabhängigkeit zwischen Stimmen zu erhalten und Parallelbewegung zu vermeiden", nl: "Om onafhankelijkheid tussen stemmen te behouden en parallelle beweging te vermijden" },
          { en: "To create dissonance", es: "Crear disonancia", de: "Dissonanz zu erzeugen", nl: "Om dissonantie te creëren" },
          { en: "To make voices sing the same notes", es: "Hacer que las voces canten las mismas notas", de: "Stimmen dieselben Töne singen zu lassen", nl: "Om stemmen dezelfde noten te laten zingen" },
          { en: "To increase the tempo", es: "Aumentar el tempo", de: "Das Tempo zu erhöhen", nl: "Om het tempo te verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Contrary motion, where voices move in opposite directions, helps maintain voice independence, creates smooth transitions, and avoids problematic parallel perfect intervals.",
          es: "El movimiento contrario, donde las voces se mueven en direcciones opuestas, ayuda a mantener la independencia de las voces, crea transiciones suaves y evita intervalos perfectos paralelos problemáticos.",
          de: "Gegenbewegung, bei der sich Stimmen in entgegengesetzte Richtungen bewegen, hilft dabei, Stimmunabhängigkeit zu erhalten, glatte Übergänge zu schaffen und problematische parallele perfekte Intervalle zu vermeiden.",
          nl: "Tegenbeweging, waarbij stemmen in tegengestelde richtingen bewegen, helpt stemmenafhankelijkheid te behouden, creëert soepele overgangen en vermijdt problematische parallelle perfecte intervallen."
        }
      },
      {
        question: {
          en: "What is a common tone chord progression?",
          es: "¿Qué es una progresión de acordes con nota común?",
          de: "Was ist eine Gemeinsamen-Ton-Akkordfolge?",
          nl: "Wat is een gemeenschappelijke toon akkoorprogressie?"
        },
        options: [
          { en: "Chord changes that share one or more notes between consecutive chords", es: "Cambios de acordes que comparten una o más notas entre acordes consecutivos", de: "Akkordwechsel, die einen oder mehrere Töne zwischen aufeinanderfolgenden Akkorden teilen", nl: "Akkordwisselingen die een of meer noten delen tussen opeenvolgende akkoorden" },
          { en: "Chords using only one note", es: "Acordes usando solo una nota", de: "Akkorde mit nur einem Ton", nl: "Akkoorden die slechts één noot gebruiken" },
          { en: "Progressions in common time", es: "Progresiones en tiempo común", de: "Progressionen im gemeinsamen Takt", nl: "Progressies in gewone tijd" },
          { en: "Popular chord progressions", es: "Progresiones de acordes populares", de: "Beliebte Akkordfolgen", nl: "Populaire akkordprogressies" }
        ],
        correct: 0,
        explanation: {
          en: "Common tone progressions involve chord changes where one or more notes are retained between chords, creating smooth voice leading and harmonic continuity.",
          es: "Las progresiones de nota común involucran cambios de acordes donde se retienen una o más notas entre acordes, creando conducción de voces suave y continuidad armónica.",
          de: "Gemeinsamen-Ton-Progressionen beinhalten Akkordwechsel, bei denen ein oder mehrere Töne zwischen Akkorden beibehalten werden, wodurch sanfte Stimmführung und harmonische Kontinuität entstehen.",
          nl: "Gemeenschappelijke toon progressies betrekken akkordwisselingen waarbij een of meer noten tussen akkoorden worden behouden, wat soepele stemvoering en harmonische continuïteit creëert."
        }
      },
      {
        question: {
          en: "What is an appoggiatura in harmonic context?",
          es: "¿Qué es una apoyatura en contexto armónico?",
          de: "Was ist ein Vorschlag im harmonischen Kontext?",
          nl: "Wat is een appoggiatura in harmonische context?"
        },
        options: [
          { en: "A dissonant non-chord tone approached by leap and resolved by step downward", es: "Una nota ajena al acorde disonante abordada por salto y resuelta por grados hacia abajo", de: "Ein dissonanter akkordfremdcr Ton, der durch Sprung erreicht und schrittweise nach unten aufgelöst wird", nl: "Een dissonante akkoordvreemde toon benaderd door sprong en stapsgewijs naar beneden opgelost" },
          { en: "A chord tone that moves by step", es: "Una nota del acorde que se mueve por grados", de: "Ein Akkordton, der sich schrittweise bewegt", nl: "Een akkoordtoon die stapsgewijs beweegt" },
          { en: "An ornamental trill", es: "Un trino ornamental", de: "Ein ornamentaler Triller", nl: "Een ornamentele triller" },
          { en: "A rapid scale passage", es: "Un pasaje de escala rápida", de: "Eine schnelle Tonleiterpassage", nl: "Een snelle toonladderpassage" }
        ],
        correct: 0,
        explanation: {
          en: "An appoggiatura is a dissonant non-chord tone approached by leap (usually from below) that creates expressive tension before resolving down by step to a chord tone.",
          es: "Una apoyatura es una nota ajena al acorde disonante abordada por salto (generalmente desde abajo) que crea tensión expresiva antes de resolver hacia abajo por grados a una nota del acorde.",
          de: "Ein Vorschlag ist ein dissonanter akkordfremdcr Ton, der durch Sprung (meist von unten) erreicht wird und ausdrucksvolle Spannung erzeugt, bevor er schrittweise nach unten zu einem Akkordton auflöst.",
          nl: "Een appoggiatura is een dissonante akkoordvreemde toon benaderd door sprong (gewoonlijk van onderaf) die expressieve spanning creëert voordat het stapsgewijs naar beneden oplost naar een akkoordtoon."
        }
      },
      {
        question: {
          en: "What is the function of the leading tone in tonal music?",
          es: "¿Cuál es la función de la nota sensible en la música tonal?",
          de: "Was ist die Funktion des Leittons in der tonalen Musik?",
          nl: "Wat is de functie van de leidtoon in tonale muziek?"
        },
        options: [
          { en: "To create strong melodic tendency toward the tonic", es: "Crear una fuerte tendencia melódica hacia la tónica", de: "Eine starke melodische Tendenz zur Tonika zu erzeugen", nl: "Om sterke melodische neiging naar de tonica te creëren" },
          { en: "To establish the key center", es: "Establecer el centro tonal", de: "Das Tonzentrum zu etablieren", nl: "Om het tooncentrum vast te stellen" },
          { en: "To provide harmonic stability", es: "Proporcionar estabilidad armónica", de: "Harmonische Stabilität zu bieten", nl: "Om harmonische stabiliteit te bieden" },
          { en: "To create rhythmic patterns", es: "Crear patrones rítmicos", de: "Rhythmische Muster zu erzeugen", nl: "Om ritmische patronen te creëren" }
        ],
        correct: 0,
        explanation: {
          en: "The leading tone (7th degree) is positioned a half-step below the tonic, creating strong melodic tendency to resolve upward, which is fundamental to tonal gravity and cadential motion.",
          es: "La nota sensible (7º grado) se posiciona un semitono por debajo de la tónica, creando una fuerte tendencia melódica a resolver hacia arriba, lo cual es fundamental para la gravedad tonal y el movimiento cadencial.",
          de: "Der Leitton (7. Grad) ist einen Halbton unter der Tonika positioniert und erzeugt eine starke melodische Tendenz zur Auflösung nach oben, was grundlegend für die tonale Schwerkraft und Kadenzbewegung ist.",
          nl: "De leidtoon (7e graad) is gepositioneerd een halve toon onder de tonica, wat sterke melodische neiging creëert om omhoog op te lossen, wat fundamenteel is voor tonale zwaartekracht en cadentiale beweging."
        }
      },
      {
        question: {
          en: "What distinguishes the Italian, German, and French augmented sixth chords?",
          es: "¿Qué distingue los acordes italianos, alemanes y franceses de sexta aumentada?",
          de: "Was unterscheidet die italienischen, deutschen und französischen übermäßigen Sextakkorde?",
          nl: "Wat onderscheidt de Italiaanse, Duitse en Franse overmatige sext akkoorden?"
        },
        options: [
          { en: "The number of notes: Italian has 3, German has 4, French has 4 with different intervals", es: "El número de notas: Italiano tiene 3, Alemán tiene 4, Francés tiene 4 con diferentes intervalos", de: "Die Anzahl der Töne: Italienisch hat 3, Deutsch hat 4, Französisch hat 4 mit verschiedenen Intervallen", nl: "Het aantal noten: Italiaans heeft 3, Duits heeft 4, Frans heeft 4 met verschillende intervallen" },
          { en: "They are from different countries", es: "Son de diferentes países", de: "Sie stammen aus verschiedenen Ländern", nl: "Ze zijn uit verschillende landen" },
          { en: "They use different key signatures", es: "Usan diferentes armaduras", de: "Sie verwenden verschiedene Vorzeichen", nl: "Ze gebruiken verschillende voortekeneningen" },
          { en: "They resolve to different chords", es: "Resuelven a acordes diferentes", de: "Sie lösen zu verschiedenen Akkorden auf", nl: "Ze lossen op naar verschillende akkoorden" }
        ],
        correct: 0,
        explanation: {
          en: "Italian augmented sixth chords have 3 notes (augmented 6th and major 3rd above bass), German adds a perfect 5th (creating 4 notes), and French adds an augmented 4th instead.",
          es: "Los acordes italianos de sexta aumentada tienen 3 notas (6ª aumentada y 3ª mayor sobre el bajo), el alemán añade una 5ª justa (creando 4 notas), y el francés añade una 4ª aumentada en su lugar.",
          de: "Italienische übermäßige Sextakkorde haben 3 Töne (übermäßige 6. und große 3. über dem Bass), Deutsche fügen eine reine 5. hinzu (4 Töne), Französische eine übermäßige 4. stattdessen.",
          nl: "Italiaanse overmatige sext akkoorden hebben 3 noten (overmatige 6e en grote 3e boven de bas), Duitse voegen een reine 5e toe (4 noten), Franse voegen een overmatige 4e toe."
        }
      },
      {
        question: {
          en: "What is modal mixture (borrowed chords)?",
          es: "¿Qué es la mezcla modal (acordes prestados)?",
          de: "Was ist modale Mischung (entlehnte Akkorde)?",
          nl: "Wat is modale menging (geleende akkoorden)?"
        },
        options: [
          { en: "Using chords from the parallel minor/major in a major/minor key", es: "Usar acordes del menor/mayor paralelo en una tonalidad mayor/menor", de: "Akkorde aus dem parallelen Moll/Dur in einer Dur-/Moll-Tonart verwenden", nl: "Gebruik van akkoorden uit het parallelle mineur/majeur in een majeur/mineur toonsoort" },
          { en: "Mixing different instruments", es: "Mezclar diferentes instrumentos", de: "Verschiedene Instrumente mischen", nl: "Verschillende instrumenten mengen" },
          { en: "Combining different time signatures", es: "Combinar diferentes compases", de: "Verschiedene Taktarten kombinieren", nl: "Verschillende maatsoorten combineren" },
          { en: "Playing multiple modes simultaneously", es: "Tocar múltiples modos simultáneamente", de: "Mehrere Modi gleichzeitig spielen", nl: "Meerdere modi tegelijkertijd spelen" }
        ],
        correct: 0,
        explanation: {
          en: "Modal mixture involves borrowing chords from the parallel mode (minor chords in major keys or vice versa), adding harmonic color and emotional depth to progressions.",
          es: "La mezcla modal involucra tomar prestados acordes del modo paralelo (acordes menores en tonalidades mayores o viceversa), añadiendo color armónico y profundidad emocional a las progresiones.",
          de: "Modale Mischung beinhaltet das Entlehnen von Akkorden aus dem parallelen Modus (Moll-Akkorde in Dur-Tonarten oder umgekehrt), wodurch harmonische Farbe und emotionale Tiefe hinzugefügt wird.",
          nl: "Modale menging behelst het lenen van akkoorden uit de parallelle modus (mineur akkoorden in majeur toonsoorten of omgekeerd), wat harmonische kleur en emotionele diepte toevoegt aan progressies."
        }
      },
      {
        question: {
          en: "What is the difference between parallel and similar motion in voice leading?",
          es: "¿Cuál es la diferencia entre movimiento paralelo y similar en la conducción de voces?",
          de: "Was ist der Unterschied zwischen paralleler und ähnlicher Bewegung in der Stimmführung?",
          nl: "Wat is het verschil tussen parallelle en gelijksoortige beweging in stemvoering?"
        },
        options: [
          { en: "Parallel maintains exact intervals, similar moves in same direction with different intervals", es: "Paralelo mantiene intervalos exactos, similar se mueve en la misma dirección con intervalos diferentes", de: "Parallel erhält exakte Intervalle, ähnlich bewegt sich in dieselbe Richtung mit verschiedenen Intervallen", nl: "Parallel behoudt exacte intervallen, gelijksoortig beweegt in dezelfde richting met verschillende intervallen" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Parallel is faster, similar is slower", es: "Paralelo es más rápido, similar es más lento", de: "Parallel ist schneller, ähnlich ist langsamer", nl: "Parallel is sneller, gelijksoortig is langzamer" },
          { en: "Similar uses the same notes, parallel uses different notes", es: "Similar usa las mismas notas, paralelo usa notas diferentes", de: "Ähnlich verwendet dieselben Töne, parallel verwendet verschiedene Töne", nl: "Gelijksoortig gebruikt dezelfde noten, parallel gebruikt verschillende noten" }
        ],
        correct: 0,
        explanation: {
          en: "Parallel motion maintains exact intervallic relationships between voices, while similar motion has voices moving in the same direction but with changing intervals between them.",
          es: "El movimiento paralelo mantiene relaciones interválicas exactas entre voces, mientras que el movimiento similar tiene voces moviéndose en la misma dirección pero con intervalos cambiantes entre ellas.",
          de: "Parallelbewegung erhält exakte intervallische Beziehungen zwischen Stimmen, während ähnliche Bewegung Stimmen in dieselbe Richtung bewegt, aber mit sich ändernden Intervallen zwischen ihnen.",
          nl: "Parallelle beweging behoudt exacte intervallische verhoudingen tussen stemmen, terwijl gelijksoortige beweging stemmen in dezelfde richting laat bewegen maar met veranderende intervallen ertussen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/music', level6);
  }
})();
