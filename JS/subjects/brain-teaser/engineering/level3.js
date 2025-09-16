// Engineering - Level 3: Structural Engineering
(function() {
  const level3 = {
    name: {
      en: "Structural Engineering",
      es: "Ingeniería Estructural", 
      de: "Bauingenieurwesen",
      nl: "Constructie-ingenieurswesen"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of a foundation in a building structure?",
          es: "¿Cuál es el propósito principal de una cimentación en una estructura de edificio?",
          de: "Was ist der Hauptzweck eines Fundaments in einer Gebäudestruktur?",
          nl: "Wat is het primaire doel van een fundering in een gebouwstructuur?"
        },
        options: [
          { en: "To transfer loads to the ground", es: "Transferir cargas al suelo", de: "Lasten auf den Boden zu übertragen", nl: "Om lasten naar de grond over te brengen" },
          { en: "To provide insulation", es: "Proporcionar aislamiento", de: "Isolierung zu bieten", nl: "Om isolatie te bieden" },
          { en: "To store water", es: "Almacenar agua", de: "Wasser zu speichern", nl: "Om water op te slaan" },
          { en: "To prevent earthquakes", es: "Prevenir terremotos", de: "Erdbeben zu verhindern", nl: "Om aardbevingen te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "The foundation's primary purpose is to transfer the building's loads safely to the ground and distribute them over a sufficient area to prevent excessive settlement.",
          es: "El propósito principal de la cimentación es transferir las cargas del edificio de manera segura al suelo y distribuirlas sobre un área suficiente para prevenir asentamientos excesivos.",
          de: "Der Hauptzweck des Fundaments ist es, die Lasten des Gebäudes sicher auf den Boden zu übertragen und sie über eine ausreichende Fläche zu verteilen, um übermäßige Setzungen zu verhindern.",
          nl: "Het primaire doel van de fundering is om de lasten van het gebouw veilig naar de grond over te brengen en ze te verdelen over een voldoende gebied om overmatige zetting te voorkomen."
        }
      },
      {
        question: {
          en: "Which type of beam has support at both ends?",
          es: "¿Qué tipo de viga tiene apoyo en ambos extremos?",
          de: "Welcher Balkentyp hat Unterstützung an beiden Enden?",
          nl: "Welk type balk heeft ondersteuning aan beide uiteinden?"
        },
        options: [
          { en: "Simply supported beam", es: "Viga simplemente apoyada", de: "Einfach unterstützter Balken", nl: "Gewoon ondersteunde balk" },
          { en: "Cantilever beam", es: "Viga en voladizo", de: "Kragbalken", nl: "Kraagbalk" },
          { en: "Continuous beam", es: "Viga continua", de: "Durchlaufträger", nl: "Doorlopende balk" },
          { en: "Fixed beam", es: "Viga fija", de: "Eingespannter Balken", nl: "Vaste balk" }
        ],
        correct: 0,
        explanation: {
          en: "A simply supported beam has support at both ends that allow rotation but prevent vertical movement, making it statically determinate.",
          es: "Una viga simplemente apoyada tiene apoyo en ambos extremos que permite rotación pero previene movimiento vertical, haciéndola estáticamente determinada.",
          de: "Ein einfach unterstützter Balken hat Unterstützung an beiden Enden, die Rotation erlaubt, aber vertikale Bewegung verhindert, wodurch er statisch bestimmt wird.",
          nl: "Een gewoon ondersteunde balk heeft ondersteuning aan beide uiteinden die rotatie toestaat maar verticale beweging voorkomt, waardoor deze statisch bepaald is."
        }
      },
      {
        question: {
          en: "What is the modulus of elasticity also known as?",
          es: "¿Cómo se conoce también el módulo de elasticidad?",
          de: "Wie wird der Elastizitätsmodul auch genannt?",
          nl: "Hoe wordt de elasticiteitsmodulus ook wel genoemd?"
        },
        options: [
          { en: "Young's modulus", es: "Módulo de Young", de: "Youngscher Modul", nl: "Young's modulus" },
          { en: "Poisson's ratio", es: "Relación de Poisson", de: "Poissonzahl", nl: "Poisson's verhouding" },
          { en: "Shear modulus", es: "Módulo de corte", de: "Schubmodul", nl: "Schuifmodulus" },
          { en: "Bulk modulus", es: "Módulo volumétrico", de: "Kompressionsmodul", nl: "Bulkmodulus" }
        ],
        correct: 0,
        explanation: {
          en: "The modulus of elasticity is commonly known as Young's modulus, named after Thomas Young. It measures a material's resistance to elastic deformation.",
          es: "El módulo de elasticidad se conoce comúnmente como módulo de Young, nombrado por Thomas Young. Mide la resistencia de un material a la deformación elástica.",
          de: "Der Elastizitätsmodul ist allgemein als Youngscher Modul bekannt, benannt nach Thomas Young. Er misst den Widerstand eines Materials gegen elastische Verformung.",
          nl: "De elasticiteitsmodulus staat algemeen bekend als Young's modulus, genoemd naar Thomas Young. Het meet de weerstand van een materiaal tegen elastische vervorming."
        }
      },
      {
        question: {
          en: "What type of stress occurs when forces act parallel to a cross-section?",
          es: "¿Qué tipo de esfuerzo ocurre cuando las fuerzas actúan paralelas a una sección transversal?",
          de: "Welche Art von Spannung tritt auf, wenn Kräfte parallel zu einem Querschnitt wirken?",
          nl: "Welk type spanning treedt op wanneer krachten parallel aan een dwarsdoorsnede werken?"
        },
        options: [
          { en: "Shear stress", es: "Esfuerzo cortante", de: "Schubspannung", nl: "Schuifspanning" },
          { en: "Normal stress", es: "Esfuerzo normal", de: "Normalspannung", nl: "Normaalspanning" },
          { en: "Bending stress", es: "Esfuerzo de flexión", de: "Biegespannung", nl: "Buigspanning" },
          { en: "Compressive stress", es: "Esfuerzo de compresión", de: "Druckspannung", nl: "Drukspanning" }
        ],
        correct: 0,
        explanation: {
          en: "Shear stress occurs when forces act parallel to a cross-section, causing the material to deform by sliding along planes parallel to the applied force.",
          es: "El esfuerzo cortante ocurre cuando las fuerzas actúan paralelas a una sección transversal, causando que el material se deforme deslizándose a lo largo de planos paralelos a la fuerza aplicada.",
          de: "Schubspannung tritt auf, wenn Kräfte parallel zu einem Querschnitt wirken und das Material sich durch Gleiten entlang Ebenen parallel zur angewandten Kraft verformt.",
          nl: "Schuifspanning treedt op wanneer krachten parallel aan een dwarsdoorsnede werken, waardoor het materiaal vervormt door te schuiven langs vlakken parallel aan de toegepaste kracht."
        }
      },
      {
        question: {
          en: "Which structural element is primarily designed to resist bending moments?",
          es: "¿Qué elemento estructural está diseñado principalmente para resistir momentos de flexión?",
          de: "Welches Strukturelement ist hauptsächlich darauf ausgelegt, Biegemomenten zu widerstehen?",
          nl: "Welk structureel element is primair ontworpen om buigmomenten te weerstaan?"
        },
        options: [
          { en: "Beam", es: "Viga", de: "Balken", nl: "Balk" },
          { en: "Column", es: "Columna", de: "Säule", nl: "Kolom" },
          { en: "Truss", es: "Armadura", de: "Fachwerk", nl: "Spantconstructie" },
          { en: "Cable", es: "Cable", de: "Kabel", nl: "Kabel" }
        ],
        correct: 0,
        explanation: {
          en: "Beams are horizontal structural elements specifically designed to resist bending moments and carry loads primarily through flexural action.",
          es: "Las vigas son elementos estructurales horizontales específicamente diseñados para resistir momentos de flexión y cargar principalmente a través de acción flexural.",
          de: "Balken sind horizontale Strukturelemente, die speziell entwickelt wurden, um Biegemomenten zu widerstehen und Lasten hauptsächlich durch Biegung zu tragen.",
          nl: "Balken zijn horizontale structurele elementen die specifiek ontworpen zijn om buigmomenten te weerstaan en lasten voornamelijk door buigwerking te dragen."
        }
      },
      {
        question: {
          en: "What is the critical buckling load for a column?",
          es: "¿Cuál es la carga crítica de pandeo para una columna?",
          de: "Was ist die kritische Knicklast für eine Säule?",
          nl: "Wat is de kritieke knikbelasting voor een kolom?"
        },
        options: [
          { en: "Euler's buckling load", es: "Carga de pandeo de Euler", de: "Eulersche Knicklast", nl: "Euler's knikbelasting" },
          { en: "Ultimate load", es: "Carga última", de: "Bruchlast", nl: "Uiteindelijke belasting" },
          { en: "Working load", es: "Carga de trabajo", de: "Betriebslast", nl: "Werkbelasting" },
          { en: "Yield load", es: "Carga de fluencia", de: "Fließlast", nl: "Vloeibelasting" }
        ],
        correct: 0,
        explanation: {
          en: "Euler's buckling load is the critical load at which a slender column will buckle under axial compression, calculated using Euler's formula.",
          es: "La carga de pandeo de Euler es la carga crítica a la cual una columna esbelta se pandeará bajo compresión axial, calculada usando la fórmula de Euler.",
          de: "Die Eulersche Knicklast ist die kritische Last, bei der eine schlanke Säule unter axialer Kompression knickt, berechnet mit der Eulerschen Formel.",
          nl: "Euler's knikbelasting is de kritieke belasting waarbij een slanke kolom zal knikken onder axiale compressie, berekend met Euler's formule."
        }
      },
      {
        question: {
          en: "What is the purpose of reinforcement in concrete structures?",
          es: "¿Cuál es el propósito del refuerzo en estructuras de concreto?",
          de: "Was ist der Zweck der Bewehrung in Betonkonstruktionen?",
          nl: "Wat is het doel van wapening in betonconstructies?"
        },
        options: [
          { en: "To resist tensile forces", es: "Resistir fuerzas de tensión", de: "Zugkräften widerstehen", nl: "Om trekkrachten te weerstaan" },
          { en: "To increase weight", es: "Aumentar el peso", de: "Gewicht erhöhen", nl: "Om gewicht te verhogen" },
          { en: "To improve insulation", es: "Mejorar el aislamiento", de: "Isolierung verbessern", nl: "Om isolatie te verbeteren" },
          { en: "To reduce cost", es: "Reducir el costo", de: "Kosten reduzieren", nl: "Om kosten te verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Steel reinforcement in concrete is primarily used to resist tensile forces, as concrete is strong in compression but weak in tension.",
          es: "El refuerzo de acero en el concreto se usa principalmente para resistir fuerzas de tensión, ya que el concreto es fuerte en compresión pero débil en tensión.",
          de: "Stahlbewehrung in Beton wird hauptsächlich verwendet, um Zugkräften zu widerstehen, da Beton druckfest, aber zugspannungsschwach ist.",
          nl: "Staalwapening in beton wordt primair gebruikt om trekkrachten te weerstaan, omdat beton sterk is in druk maar zwak in trek."
        }
      },
      {
        question: {
          en: "What is the most common type of foundation for high-rise buildings?",
          es: "¿Cuál es el tipo más común de cimentación para edificios de gran altura?",
          de: "Was ist die häufigste Art von Fundament für Hochhäuser?",
          nl: "Wat is het meest voorkomende type fundering voor hoogbouw?"
        },
        options: [
          { en: "Deep foundation (piles)", es: "Cimentación profunda (pilotes)", de: "Tiefgründung (Pfähle)", nl: "Diepe fundering (palen)" },
          { en: "Shallow foundation", es: "Cimentación superficial", de: "Flachgründung", nl: "Ondiepe fundering" },
          { en: "Raft foundation", es: "Cimentación de losa", de: "Plattengründung", nl: "Platfundering" },
          { en: "Strip foundation", es: "Cimentación corrida", de: "Streifenfundament", nl: "Strookfundering" }
        ],
        correct: 0,
        explanation: {
          en: "Deep foundations using piles are most common for high-rise buildings as they transfer heavy loads through weak soil layers to stronger bearing strata.",
          es: "Las cimentaciones profundas usando pilotes son más comunes para edificios de gran altura ya que transfieren cargas pesadas a través de capas de suelo débil a estratos de apoyo más fuertes.",
          de: "Tiefgründungen mit Pfählen sind für Hochhäuser am häufigsten, da sie schwere Lasten durch schwache Bodenschichten zu stärkeren Tragschichten übertragen.",
          nl: "Diepe funderingen met palen zijn het meest voorkomend voor hoogbouw omdat ze zware lasten door zwakke grondlagen naar sterkere draaglagen overbrengen."
        }
      },
      {
        question: {
          en: "What is the term for the maximum stress a material can withstand before permanent deformation?",
          es: "¿Cuál es el término para el esfuerzo máximo que un material puede soportar antes de la deformación permanente?",
          de: "Wie lautet der Begriff für die maximale Spannung, die ein Material vor bleibender Verformung aushalten kann?",
          nl: "Wat is de term voor de maximale spanning die een materiaal kan weerstaan voor permanente vervorming?"
        },
        options: [
          { en: "Yield strength", es: "Resistencia de fluencia", de: "Streckgrenze", nl: "Vloeigrens" },
          { en: "Ultimate strength", es: "Resistencia última", de: "Zugfestigkeit", nl: "Uiteindelijke sterkte" },
          { en: "Elastic limit", es: "Límite elástico", de: "Elastizitätsgrenze", nl: "Elastische grens" },
          { en: "Fracture strength", es: "Resistencia a la fractura", de: "Bruchfestigkeit", nl: "Breuksterkte" }
        ],
        correct: 0,
        explanation: {
          en: "Yield strength is the stress at which a material begins to deform plastically and will not return to its original shape when the load is removed.",
          es: "La resistencia de fluencia es el esfuerzo al cual un material comienza a deformarse plásticamente y no regresará a su forma original cuando se retire la carga.",
          de: "Die Streckgrenze ist die Spannung, bei der ein Material beginnt, sich plastisch zu verformen und nicht zu seiner ursprünglichen Form zurückkehrt, wenn die Last entfernt wird.",
          nl: "De vloeigrens is de spanning waarbij een materiaal begint plastisch te vervormen en niet terugkeert naar zijn oorspronkelijke vorm wanneer de belasting wordt weggenomen."
        }
      },
      {
        question: {
          en: "What type of loading causes fatigue failure in structures?",
          es: "¿Qué tipo de carga causa falla por fatiga en estructuras?",
          de: "Welche Art von Belastung verursacht Ermüdungsversagen in Strukturen?",
          nl: "Welk type belasting veroorzaakt vermoeidheidsfalen in constructies?"
        },
        options: [
          { en: "Repeated or cyclic loading", es: "Carga repetida o cíclica", de: "Wiederholte oder zyklische Belastung", nl: "Herhaalde of cyclische belasting" },
          { en: "Static loading", es: "Carga estática", de: "Statische Belastung", nl: "Statische belasting" },
          { en: "Impact loading", es: "Carga de impacto", de: "Stoßbelastung", nl: "Schokbelasting" },
          { en: "Temperature loading", es: "Carga térmica", de: "Temperaturbelastung", nl: "Temperatuurbelasting" }
        ],
        correct: 0,
        explanation: {
          en: "Fatigue failure occurs under repeated or cyclic loading at stress levels much lower than the material's ultimate strength, due to crack initiation and propagation.",
          es: "La falla por fatiga ocurre bajo carga repetida o cíclica en niveles de esfuerzo mucho menores que la resistencia última del material, debido a la iniciación y propagación de grietas.",
          de: "Ermüdungsversagen tritt unter wiederholter oder zyklischer Belastung bei Spannungsniveaus auf, die viel niedriger sind als die Zugfestigkeit des Materials, aufgrund von Rissbildung und -ausbreitung.",
          nl: "Vermoeidheidsfalen treedt op onder herhaalde of cyclische belasting bij spanningsniveaus veel lager dan de uiteindelijke sterkte van het materiaal, door scheurtje-initiatie en -voortplanting."
        }
      },
      {
        question: {
          en: "What is the primary function of a truss structure?",
          es: "¿Cuál es la función principal de una estructura de armadura?",
          de: "Was ist die Hauptfunktion einer Fachwerkstruktur?",
          nl: "Wat is de primaire functie van een spantconstructie?"
        },
        options: [
          { en: "To carry loads through axial forces in members", es: "Cargar a través de fuerzas axiales en miembros", de: "Lasten durch Axialkräfte in den Gliedern zu tragen", nl: "Om lasten te dragen door axiale krachten in leden" },
          { en: "To resist bending moments", es: "Resistir momentos de flexión", de: "Biegemomenten widerstehen", nl: "Om buigmomenten te weerstaan" },
          { en: "To provide lateral stability", es: "Proporcionar estabilidad lateral", de: "Seitliche Stabilität bieten", nl: "Om laterale stabiliteit te bieden" },
          { en: "To store energy", es: "Almacenar energía", de: "Energie speichern", nl: "Om energie op te slaan" }
        ],
        correct: 0,
        explanation: {
          en: "Trusses are designed to carry loads primarily through axial tension and compression forces in their members, with joints assumed to be pinned.",
          es: "Las armaduras están diseñadas para cargar principalmente a través de fuerzas axiales de tensión y compresión en sus miembros, con articulaciones asumidas como empernadas.",
          de: "Fachwerke sind darauf ausgelegt, Lasten hauptsächlich durch axiale Zug- und Druckkräfte in ihren Gliedern zu tragen, wobei die Verbindungen als gelenkig angenommen werden.",
          nl: "Spantconstructies zijn ontworpen om lasten voornamelijk te dragen door axiale trek- en drukkrachten in hun leden, waarbij gewrichten als scharnierend worden aangenomen."
        }
      },
      {
        question: {
          en: "What is the deflection of a simply supported beam under uniform load?",
          es: "¿Cuál es la deflexión de una viga simplemente apoyada bajo carga uniforme?",
          de: "Was ist die Durchbiegung eines einfach unterstützten Balkens unter gleichmäßiger Last?",
          nl: "Wat is de doorbuiging van een gewoon ondersteunde balk onder gelijkmatige belasting?"
        },
        options: [
          { en: "Maximum at mid-span", es: "Máxima en el centro", de: "Maximum in der Spannweite", nl: "Maximum in het midden" },
          { en: "Zero at mid-span", es: "Cero en el centro", de: "Null in der Spannweite", nl: "Nul in het midden" },
          { en: "Maximum at supports", es: "Máxima en los apoyos", de: "Maximum bei den Auflagern", nl: "Maximum bij de steunpunten" },
          { en: "Constant along the span", es: "Constante a lo largo del tramo", de: "Konstant über die Spannweite", nl: "Constant langs de overspanning" }
        ],
        correct: 0,
        explanation: {
          en: "For a simply supported beam under uniform load, the maximum deflection occurs at mid-span and equals 5wL⁴/(384EI), where w is the load per unit length.",
          es: "Para una viga simplemente apoyada bajo carga uniforme, la deflexión máxima ocurre en el centro e iguala 5wL⁴/(384EI), donde w es la carga por unidad de longitud.",
          de: "Für einen einfach unterstützten Balken unter gleichmäßiger Last tritt die maximale Durchbiegung in der Spannweite auf und beträgt 5wL⁴/(384EI), wobei w die Last pro Längeneinheit ist.",
          nl: "Voor een gewoon ondersteunde balk onder gelijkmatige belasting treedt de maximale doorbuiging op in het midden en is gelijk aan 5wL⁴/(384EI), waarbij w de belasting per lengte-eenheid is."
        }
      },
      {
        question: {
          en: "What is the relationship between stress and strain in the elastic region?",
          es: "¿Cuál es la relación entre esfuerzo y deformación en la región elástica?",
          de: "Was ist die Beziehung zwischen Spannung und Dehnung im elastischen Bereich?",
          nl: "Wat is de relatie tussen spanning en rek in het elastische gebied?"
        },
        options: [
          { en: "Hooke's Law (σ = Eε)", es: "Ley de Hooke (σ = Eε)", de: "Hookesches Gesetz (σ = Eε)", nl: "Wet van Hooke (σ = Eε)" },
          { en: "Poiseuille's Law", es: "Ley de Poiseuille", de: "Poiseuille-Gesetz", nl: "Wet van Poiseuille" },
          { en: "Newton's Law", es: "Ley de Newton", de: "Newtonsches Gesetz", nl: "Wet van Newton" },
          { en: "Bernoulli's Principle", es: "Principio de Bernoulli", de: "Bernoulli-Prinzip", nl: "Principe van Bernoulli" }
        ],
        correct: 0,
        explanation: {
          en: "Hooke's Law states that stress is directly proportional to strain in the elastic region: σ = Eε, where E is the modulus of elasticity.",
          es: "La Ley de Hooke establece que el esfuerzo es directamente proporcional a la deformación en la región elástica: σ = Eε, donde E es el módulo de elasticidad.",
          de: "Das Hookesche Gesetz besagt, dass Spannung direkt proportional zur Dehnung im elastischen Bereich ist: σ = Eε, wobei E der Elastizitätsmodul ist.",
          nl: "De Wet van Hooke stelt dat spanning direct evenredig is met rek in het elastische gebied: σ = Eε, waarbij E de elasticiteitsmodulus is."
        }
      },
      {
        question: {
          en: "What type of analysis is used for structures with unknown reactions exceeding equilibrium equations?",
          es: "¿Qué tipo de análisis se usa para estructuras con reacciones desconocidas que exceden las ecuaciones de equilibrio?",
          de: "Welche Art von Analyse wird für Strukturen mit unbekannten Reaktionen verwendet, die die Gleichgewichtsgleichungen überschreiten?",
          nl: "Welk type analyse wordt gebruikt voor constructies met onbekende reacties die de evenwichtsvergelijkingen overschrijden?"
        },
        options: [
          { en: "Indeterminate analysis", es: "Análisis indeterminado", de: "Statisch unbestimmte Analyse", nl: "Onbepaalde analyse" },
          { en: "Determinate analysis", es: "Análisis determinado", de: "Statisch bestimmte Analyse", nl: "Bepaalde analyse" },
          { en: "Dynamic analysis", es: "Análisis dinámico", de: "Dynamische Analyse", nl: "Dynamische analyse" },
          { en: "Linear analysis", es: "Análisis lineal", de: "Lineare Analyse", nl: "Lineaire analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Indeterminate (statically indeterminate) analysis is required when the number of unknown reactions exceeds the number of available equilibrium equations.",
          es: "El análisis indeterminado (estáticamente indeterminado) se requiere cuando el número de reacciones desconocidas excede el número de ecuaciones de equilibrio disponibles.",
          de: "Statisch unbestimmte Analyse ist erforderlich, wenn die Anzahl unbekannter Reaktionen die Anzahl verfügbarer Gleichgewichtsgleichungen überschreitet.",
          nl: "Onbepaalde (statisch onbepaalde) analyse is vereist wanneer het aantal onbekende reacties het aantal beschikbare evenwichtsvergelijkingen overschrijdt."
        }
      },
      {
        question: {
          en: "What is the primary consideration in seismic design of structures?",
          es: "¿Cuál es la consideración principal en el diseño sísmico de estructuras?",
          de: "Was ist die Hauptüberlegung beim seismischen Entwurf von Strukturen?",
          nl: "Wat is de primaire overweging in seismisch ontwerp van constructies?"
        },
        options: [
          { en: "Ductility and energy dissipation", es: "Ductilidad y disipación de energía", de: "Duktilität und Energiedissipation", nl: "Ductiliteit en energiedissipatie" },
          { en: "Maximum strength only", es: "Solo resistencia máxima", de: "Nur maximale Festigkeit", nl: "Alleen maximale sterkte" },
          { en: "Minimum weight", es: "Peso mínimo", de: "Minimales Gewicht", nl: "Minimaal gewicht" },
          { en: "Cost reduction", es: "Reducción de costos", de: "Kostenreduzierung", nl: "Kostenverlaging" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic design emphasizes ductility and energy dissipation capacity, allowing structures to deform inelastically while maintaining stability during earthquakes.",
          es: "El diseño sísmico enfatiza la ductilidad y capacidad de disipación de energía, permitiendo que las estructuras se deformen inelásticamente mientras mantienen estabilidad durante terremotos.",
          de: "Seismisches Design betont Duktilität und Energiedissipationskapazität, wodurch Strukturen sich während Erdbeben unelastisch verformen können, während sie ihre Stabilität beibehalten.",
          nl: "Seismisch ontwerp benadrukt ductiliteit en energiedissipatiecapaciteit, waardoor constructies inelastisch kunnen vervormen terwijl ze stabiliteit behouden tijdens aardbevingen."
        }
      },
      {
        question: {
          en: "What is the effective length of a column?",
          es: "¿Cuál es la longitud efectiva de una columna?",
          de: "Was ist die effektive Länge einer Säule?",
          nl: "Wat is de effectieve lengte van een kolom?"
        },
        options: [
          { en: "Length between points of zero moment", es: "Longitud entre puntos de momento cero", de: "Länge zwischen Nullmomenten", nl: "Lengte tussen punten van nul moment" },
          { en: "Total physical length", es: "Longitud física total", de: "Gesamte physische Länge", nl: "Totale fysieke lengte" },
          { en: "Length between supports", es: "Longitud entre apoyos", de: "Länge zwischen Stützen", nl: "Lengte tussen steunpunten" },
          { en: "Half the total length", es: "Mitad de la longitud total", de: "Halbe Gesamtlänge", nl: "Helft van de totale lengte" }
        ],
        correct: 0,
        explanation: {
          en: "The effective length of a column is the distance between points of zero moment (inflection points) and is used in buckling calculations.",
          es: "La longitud efectiva de una columna es la distancia entre puntos de momento cero (puntos de inflexión) y se usa en cálculos de pandeo.",
          de: "Die effektive Länge einer Säule ist der Abstand zwischen Nullmomenten (Wendepunkte) und wird in Knickberechnungen verwendet.",
          nl: "De effectieve lengte van een kolom is de afstand tussen punten van nul moment (buigpunten) en wordt gebruikt in knikberekeningen."
        }
      },
      {
        question: {
          en: "What is prestressed concrete designed to overcome?",
          es: "¿Qué está diseñado a superar el concreto presforzado?",
          de: "Was soll Spannbeton überwinden?",
          nl: "Wat is voorgespannen beton ontworpen om te overwinnen?"
        },
        options: [
          { en: "Concrete's weakness in tension", es: "Debilidad del concreto en tensión", de: "Schwäche des Betons in Zugspannung", nl: "Zwakte van beton in trek" },
          { en: "Steel's high cost", es: "Alto costo del acero", de: "Hohe Kosten von Stahl", nl: "Hoge kosten van staal" },
          { en: "Construction speed", es: "Velocidad de construcción", de: "Baugeschwindigkeit", nl: "Constructiesnelheid" },
          { en: "Environmental impact", es: "Impacto ambiental", de: "Umweltauswirkungen", nl: "Milieueffect" }
        ],
        correct: 0,
        explanation: {
          en: "Prestressed concrete is designed to overcome concrete's natural weakness in tension by introducing compressive stresses before loading.",
          es: "El concreto presforzado está diseñado para superar la debilidad natural del concreto en tensión introduciendo esfuerzos compresivos antes de la carga.",
          de: "Spannbeton ist darauf ausgelegt, die natürliche Schwäche des Betons in Zugspannung zu überwinden, indem vor der Belastung Druckspannungen eingeführt werden.",
          nl: "Voorgespannen beton is ontworpen om de natuurlijke zwakte van beton in trek te overwinnen door drukkrachten in te voeren voor belasting."
        }
      },
      {
        question: {
          en: "What is the main advantage of composite construction?",
          es: "¿Cuál es la principal ventaja de la construcción compuesta?",
          de: "Was ist der Hauptvorteil von Verbundbauweise?",
          nl: "Wat is het hoofdvoordeel van samengestelde constructie?"
        },
        options: [
          { en: "Combines best properties of different materials", es: "Combina las mejores propiedades de diferentes materiales", de: "Kombiniert beste Eigenschaften verschiedener Materialien", nl: "Combineert beste eigenschappen van verschillende materialen" },
          { en: "Reduces construction time", es: "Reduce el tiempo de construcción", de: "Reduziert Bauzeit", nl: "Vermindert constructietijd" },
          { en: "Eliminates maintenance", es: "Elimina el mantenimiento", de: "Eliminiert Wartung", nl: "Elimineert onderhoud" },
          { en: "Uses less material", es: "Usa menos material", de: "Verwendet weniger Material", nl: "Gebruikt minder materiaal" }
        ],
        correct: 0,
        explanation: {
          en: "Composite construction combines the best properties of different materials, such as steel's tensile strength with concrete's compressive strength.",
          es: "La construcción compuesta combina las mejores propiedades de diferentes materiales, como la resistencia a tensión del acero con la resistencia a compresión del concreto.",
          de: "Verbundbauweise kombiniert die besten Eigenschaften verschiedener Materialien, wie die Zugfestigkeit von Stahl mit der Druckfestigkeit von Beton.",
          nl: "Samengestelde constructie combineert de beste eigenschappen van verschillende materialen, zoals de treksterkte van staal met de druksterkte van beton."
        }
      },
      {
        question: {
          en: "What type of connection allows rotation but prevents translation?",
          es: "¿Qué tipo de conexión permite rotación pero previene traslación?",
          de: "Welche Art von Verbindung erlaubt Rotation, aber verhindert Translation?",
          nl: "Welk type verbinding staat rotatie toe maar voorkomt translatie?"
        },
        options: [
          { en: "Pinned connection", es: "Conexión articulada", de: "Gelenkverbindung", nl: "Scharnierverbinding" },
          { en: "Fixed connection", es: "Conexión fija", de: "Feste Verbindung", nl: "Vaste verbinding" },
          { en: "Roller connection", es: "Conexión de rodillo", de: "Rollenverbindung", nl: "Rolverbinding" },
          { en: "Sliding connection", es: "Conexión deslizante", de: "Gleitverbindung", nl: "Glijdende verbinding" }
        ],
        correct: 0,
        explanation: {
          en: "A pinned connection allows rotation about the pin but prevents translation in any direction, providing two reaction components.",
          es: "Una conexión articulada permite rotación alrededor del pin pero previene traslación en cualquier dirección, proporcionando dos componentes de reacción.",
          de: "Eine Gelenkverbindung erlaubt Rotation um den Zapfen, aber verhindert Translation in jede Richtung und bietet zwei Reaktionskomponenten.",
          nl: "Een scharnierverbinding staat rotatie rond de pin toe maar voorkomt translatie in elke richting, en biedt twee reactiecomponenten."
        }
      },
      {
        question: {
          en: "What is the typical factor of safety used in structural design?",
          es: "¿Cuál es el factor de seguridad típico usado en diseño estructural?",
          de: "Was ist der typische Sicherheitsfaktor im Strukturentwurf?",
          nl: "Wat is de typische veiligheidsfactor gebruikt in structureel ontwerp?"
        },
        options: [
          { en: "1.5 to 3.0", es: "1.5 a 3.0", de: "1,5 bis 3,0", nl: "1,5 tot 3,0" },
          { en: "0.5 to 1.0", es: "0.5 a 1.0", de: "0,5 bis 1,0", nl: "0,5 tot 1,0" },
          { en: "10 to 20", es: "10 a 20", de: "10 bis 20", nl: "10 tot 20" },
          { en: "Always exactly 1.0", es: "Siempre exactamente 1.0", de: "Immer genau 1,0", nl: "Altijd precies 1,0" }
        ],
        correct: 0,
        explanation: {
          en: "Typical factors of safety in structural design range from 1.5 to 3.0, depending on the uncertainty in loads, materials, and consequences of failure.",
          es: "Los factores de seguridad típicos en diseño estructural van de 1.5 a 3.0, dependiendo de la incertidumbre en cargas, materiales y consecuencias de falla.",
          de: "Typische Sicherheitsfaktoren im Strukturentwurf reichen von 1,5 bis 3,0, abhängig von der Unsicherheit in Lasten, Materialien und Folgen des Versagens.",
          nl: "Typische veiligheidsfactoren in structureel ontwerp variëren van 1,5 tot 3,0, afhankelijk van onzekerheid in belastingen, materialen en gevolgen van falen."
        }
      },
      {
        question: {
          en: "What phenomenon occurs when the frequency of applied load matches the natural frequency of a structure?",
          es: "¿Qué fenómeno ocurre cuando la frecuencia de la carga aplicada coincide con la frecuencia natural de una estructura?",
          de: "Welches Phänomen tritt auf, wenn die Frequenz der angewandten Last mit der Eigenfrequenz einer Struktur übereinstimmt?",
          nl: "Welk fenomeen treedt op wanneer de frequentie van toegepaste belasting overeenkomt met de natuurlijke frequentie van een constructie?"
        },
        options: [
          { en: "Resonance", es: "Resonancia", de: "Resonanz", nl: "Resonantie" },
          { en: "Buckling", es: "Pandeo", de: "Knicken", nl: "Knikken" },
          { en: "Fatigue", es: "Fatiga", de: "Ermüdung", nl: "Vermoeidheid" },
          { en: "Creep", es: "Fluencia lenta", de: "Kriechen", nl: "Kruip" }
        ],
        correct: 0,
        explanation: {
          en: "Resonance occurs when the frequency of applied dynamic load matches the natural frequency of the structure, potentially causing dangerous amplification of response.",
          es: "La resonancia ocurre cuando la frecuencia de la carga dinámica aplicada coincide con la frecuencia natural de la estructura, potencialmente causando amplificación peligrosa de la respuesta.",
          de: "Resonanz tritt auf, wenn die Frequenz der angewandten dynamischen Last mit der Eigenfrequenz der Struktur übereinstimmt, was möglicherweise eine gefährliche Verstärkung der Antwort verursacht.",
          nl: "Resonantie treedt op wanneer de frequentie van toegepaste dynamische belasting overeenkomt met de natuurlijke frequentie van de constructie, wat mogelijk gevaarlijke versterking van de reactie veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the purpose of expansion joints in structures?",
          es: "¿Cuál es el propósito de las juntas de expansión en estructuras?",
          de: "Was ist der Zweck von Dehnfugen in Strukturen?",
          nl: "Wat is het doel van uitzettingsvoegen in constructies?"
        },
        options: [
          { en: "To accommodate thermal movements", es: "Acomodar movimientos térmicos", de: "Thermische Bewegungen aufnehmen", nl: "Om thermische bewegingen op te vangen" },
          { en: "To increase strength", es: "Aumentar la resistencia", de: "Festigkeit erhöhen", nl: "Om sterkte te verhogen" },
          { en: "To reduce cost", es: "Reducir el costo", de: "Kosten reduzieren", nl: "Om kosten te verlagen" },
          { en: "To improve appearance", es: "Mejorar la apariencia", de: "Aussehen verbessern", nl: "Om het uiterlijk te verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Expansion joints allow structures to expand and contract due to temperature changes without inducing harmful stresses or cracking.",
          es: "Las juntas de expansión permiten que las estructuras se expandan y contraigan debido a cambios de temperatura sin inducir esfuerzos dañinos o grietas.",
          de: "Dehnfugen ermöglichen es Strukturen, sich aufgrund von Temperaturänderungen auszudehnen und zusammenzuziehen, ohne schädliche Spannungen oder Risse zu verursachen.",
          nl: "Uitzettingsvoegen stellen constructies in staat om uit te zetten en samen te trekken door temperatuurveranderingen zonder schadelijke spanningen of scheuren te veroorzaken."
        }
      },
      {
        question: {
          en: "What is the main structural action in an arch?",
          es: "¿Cuál es la acción estructural principal en un arco?",
          de: "Was ist die Hauptstrukturwirkung in einem Bogen?",
          nl: "Wat is de hoofdstructurele werking in een boog?"
        },
        options: [
          { en: "Compression", es: "Compresión", de: "Kompression", nl: "Compressie" },
          { en: "Tension", es: "Tensión", de: "Zugspannung", nl: "Trek" },
          { en: "Bending", es: "Flexión", de: "Biegung", nl: "Buiging" },
          { en: "Shear", es: "Cortante", de: "Schub", nl: "Schuif" }
        ],
        correct: 0,
        explanation: {
          en: "Arches primarily carry loads through compression, which makes them very efficient for materials like stone and concrete that are strong in compression.",
          es: "Los arcos principalmente cargan a través de compresión, lo que los hace muy eficientes para materiales como piedra y concreto que son fuertes en compresión.",
          de: "Bögen tragen Lasten hauptsächlich durch Kompression, was sie sehr effizient für Materialien wie Stein und Beton macht, die druckfest sind.",
          nl: "Bogen dragen lasten voornamelijk door compressie, wat ze zeer efficiënt maakt voor materialen zoals steen en beton die sterk zijn in druk."
        }
      },
      {
        question: {
          en: "What is the deflection-to-span ratio limit commonly used for beams in buildings?",
          es: "¿Cuál es el límite de relación deflexión-luz comúnmente usado para vigas en edificios?",
          de: "Was ist das Durchbiegungs-Spannweiten-Verhältnis, das häufig für Balken in Gebäuden verwendet wird?",
          nl: "Wat is de doorbuiging-overspanning verhouding limiet die gewoonlijk wordt gebruikt voor balken in gebouwen?"
        },
        options: [
          { en: "L/360 or L/250", es: "L/360 o L/250", de: "L/360 oder L/250", nl: "L/360 of L/250" },
          { en: "L/10", es: "L/10", de: "L/10", nl: "L/10" },
          { en: "L/1000", es: "L/1000", de: "L/1000", nl: "L/1000" },
          { en: "No limit required", es: "No se requiere límite", de: "Keine Begrenzung erforderlich", nl: "Geen limiet vereist" }
        ],
        correct: 0,
        explanation: {
          en: "Common deflection limits for beams are L/360 for floors with non-structural partitions and L/250 for floors without partitions, where L is the span length.",
          es: "Los límites comunes de deflexión para vigas son L/360 para pisos con particiones no estructurales y L/250 para pisos sin particiones, donde L es la longitud del tramo.",
          de: "Übliche Durchbiegungsgrenzen für Balken sind L/360 für Böden mit nicht-strukturellen Trennwänden und L/250 für Böden ohne Trennwände, wobei L die Spannweite ist.",
          nl: "Gebruikelijke doorbuigingslimieten voor balken zijn L/360 voor vloeren met niet-structurele scheidingswanden en L/250 voor vloeren zonder scheidingswanden, waarbij L de overspanning is."
        }
      },
      {
        question: {
          en: "What is the primary design consideration for cable structures?",
          es: "¿Cuál es la consideración principal de diseño para estructuras de cable?",
          de: "Was ist die Hauptentwurfsüberlegung für Kabelstrukturen?",
          nl: "Wat is de primaire ontwerpoverweging voor kabelconstructies?"
        },
        options: [
          { en: "Tension capacity and sag", es: "Capacidad de tensión y flecha", de: "Zugkapazität und Durchhang", nl: "Trekcapaciteit en doorhang" },
          { en: "Compression resistance", es: "Resistencia a compresión", de: "Druckwiderstand", nl: "Drukweerstand" },
          { en: "Bending strength", es: "Resistencia a flexión", de: "Biegefestigkeit", nl: "Buigsterkte" },
          { en: "Shear capacity", es: "Capacidad cortante", de: "Schubkapazität", nl: "Schuifcapaciteit" }
        ],
        correct: 0,
        explanation: {
          en: "Cable structures work purely in tension and their design focuses on tension capacity of the cables and controlling sag under various load conditions.",
          es: "Las estructuras de cable trabajan puramente en tensión y su diseño se enfoca en la capacidad de tensión de los cables y controlar la flecha bajo varias condiciones de carga.",
          de: "Kabelstrukturen arbeiten rein in Zugspannung und ihr Design konzentriert sich auf die Zugkapazität der Kabel und die Kontrolle des Durchhangs unter verschiedenen Lastbedingungen.",
          nl: "Kabelconstructies werken puur in trek en hun ontwerp richt zich op de trekcapaciteit van de kabels en het beheersen van doorhang onder verschillende belastingscondities."
        }
      },
      {
        question: {
          en: "What is the difference between working stress design and limit state design?",
          es: "¿Cuál es la diferencia entre diseño por esfuerzos de trabajo y diseño por estados límite?",
          de: "Was ist der Unterschied zwischen Gebrauchsspannungsdesign und Grenzzustandsdesign?",
          nl: "Wat is het verschil tussen werkspanningsontwerp en grenstoestandontwerp?"
        },
        options: [
          { en: "Working stress uses allowable stresses, limit state uses factored loads", es: "Esfuerzo de trabajo usa esfuerzos admisibles, estado límite usa cargas factorizadas", de: "Gebrauchsspannung verwendet zulässige Spannungen, Grenzzustand verwendet faktorierte Lasten", nl: "Werkspanning gebruikt toelaatbare spanningen, grensstaat gebruikt gefactoriseerde belastingen" },
          { en: "They are identical methods", es: "Son métodos idénticos", de: "Sie sind identische Methoden", nl: "Het zijn identieke methoden" },
          { en: "Working stress is only for steel", es: "Esfuerzo de trabajo es solo para acero", de: "Gebrauchsspannung ist nur für Stahl", nl: "Werkspanning is alleen voor staal" },
          { en: "Limit state is only for concrete", es: "Estado límite es solo para concreto", de: "Grenzzustand ist nur für Beton", nl: "Grensstaat is alleen voor beton" }
        ],
        correct: 0,
        explanation: {
          en: "Working stress design uses allowable stresses based on material strength divided by safety factor, while limit state design uses factored loads and material strengths.",
          es: "El diseño por esfuerzos de trabajo usa esfuerzos admisibles basados en la resistencia del material dividida por factor de seguridad, mientras que el diseño por estados límite usa cargas y resistencias de materiales factorizadas.",
          de: "Gebrauchsspannungsdesign verwendet zulässige Spannungen basierend auf Materialfestigkeit geteilt durch Sicherheitsfaktor, während Grenzzustandsdesign faktorierte Lasten und Materialfestigkeiten verwendet.",
          nl: "Werkspanningsontwerp gebruikt toelaatbare spanningen gebaseerd op materiaalsterkte gedeeld door veiligheidsfactor, terwijl grenstoestandontwerp gefactoriseerde belastingen en materiaalsterktes gebruikt."
        }
      },
      {
        question: {
          en: "What is the main purpose of lateral bracing in structures?",
          es: "¿Cuál es el propósito principal del arriostrado lateral en estructuras?",
          de: "Was ist der Hauptzweck der seitlichen Aussteifung in Strukturen?",
          nl: "Wat is het hoofddoel van laterale versterking in constructies?"
        },
        options: [
          { en: "To prevent lateral instability and buckling", es: "Prevenir inestabilidad lateral y pandeo", de: "Seitliche Instabilität und Knicken verhindern", nl: "Om laterale instabiliteit en knikken te voorkomen" },
          { en: "To increase vertical load capacity", es: "Aumentar capacidad de carga vertical", de: "Vertikale Lastkapazität erhöhen", nl: "Om verticale belastingscapaciteit te verhogen" },
          { en: "To reduce material cost", es: "Reducir costo de materiales", de: "Materialkosten reduzieren", nl: "Om materiaalkosten te verlagen" },
          { en: "To improve appearance", es: "Mejorar la apariencia", de: "Aussehen verbessern", nl: "Om het uiterlijk te verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Lateral bracing prevents lateral-torsional buckling of beams and out-of-plane buckling of columns, ensuring structural stability under load.",
          es: "El arriostrado lateral previene el pandeo lateral-torsional de vigas y pandeo fuera del plano de columnas, asegurando estabilidad estructural bajo carga.",
          de: "Seitliche Aussteifung verhindert seitliches Kippen von Balken und Knicken aus der Ebene von Säulen, wodurch strukturelle Stabilität unter Last gewährleistet wird.",
          nl: "Laterale versterking voorkomt lateraal-torsionaal knikken van balken en uit-het-vlak knikken van kolommen, wat structurele stabiliteit onder belasting verzekert."
        }
      },
      {
        question: {
          en: "What is the moment of inertia primarily used to calculate?",
          es: "¿Para qué se usa principalmente el momento de inercia para calcular?",
          de: "Wofür wird das Trägheitsmoment hauptsächlich zur Berechnung verwendet?",
          nl: "Waarvoor wordt het traagheidsmoment voornamelijk gebruikt om te berekenen?"
        },
        options: [
          { en: "Beam deflection and bending stress", es: "Deflexión de viga y esfuerzo de flexión", de: "Balkendurchbiegung und Biegespannung", nl: "Balkdoorbuiging en buigspanning" },
          { en: "Axial deformation", es: "Deformación axial", de: "Axiale Verformung", nl: "Axiale vervorming" },
          { en: "Shear stress distribution", es: "Distribución de esfuerzo cortante", de: "Schubspannungsverteilung", nl: "Schuifspanningsverdeling" },
          { en: "Material density", es: "Densidad del material", de: "Materialdichte", nl: "Materiaaldichtheid" }
        ],
        correct: 0,
        explanation: {
          en: "The moment of inertia of a cross-section is a geometric property used to calculate beam deflection and bending stress distribution.",
          es: "El momento de inercia de una sección transversal es una propiedad geométrica usada para calcular la deflexión de viga y distribución de esfuerzo de flexión.",
          de: "Das Trägheitsmoment eines Querschnitts ist eine geometrische Eigenschaft zur Berechnung von Balkendurchbiegung und Biegespannungsverteilung.",
          nl: "Het traagheidsmoment van een dwarsdoorsnede is een geometrische eigenschap gebruikt om balkdoorbuiging en buigspanningsverdeling te berekenen."
        }
      },
      {
        question: {
          en: "What is the neutral axis in a beam cross-section?",
          es: "¿Qué es el eje neutro en una sección transversal de viga?",
          de: "Was ist die neutrale Achse in einem Balkenquerschnitt?",
          nl: "Wat is de neutrale as in een balkdwarsdoorsnede?"
        },
        options: [
          { en: "The line where bending stress is zero", es: "La línea donde el esfuerzo de flexión es cero", de: "Die Linie, wo die Biegespannung null ist", nl: "De lijn waar buigspanning nul is" },
          { en: "The top fiber of the section", es: "La fibra superior de la sección", de: "Die obere Faser des Querschnitts", nl: "De bovenste vezel van de doorsnede" },
          { en: "The bottom fiber of the section", es: "La fibra inferior de la sección", de: "Die untere Faser des Querschnitts", nl: "De onderste vezel van de doorsnede" },
          { en: "The geometric center only", es: "Solo el centro geométrico", de: "Nur der geometrische Mittelpunkt", nl: "Alleen het geometrische centrum" }
        ],
        correct: 0,
        explanation: {
          en: "The neutral axis is the line in a beam cross-section where bending stress is zero, separating the tension and compression zones.",
          es: "El eje neutro es la línea en una sección transversal de viga donde el esfuerzo de flexión es cero, separando las zonas de tensión y compresión.",
          de: "Die neutrale Achse ist die Linie in einem Balkenquerschnitt, wo die Biegespannung null ist und die Zug- und Druckzonen trennt.",
          nl: "De neutrale as is de lijn in een balkdwarsdoorsnede waar buigspanning nul is, en de trek- en drukzones scheidt."
        }
      },
      {
        question: {
          en: "What type of structural system resists lateral forces through frame action?",
          es: "¿Qué tipo de sistema estructural resiste fuerzas laterales a través de acción de marco?",
          de: "Welches strukturelle System widersteht seitlichen Kräften durch Rahmenverhalten?",
          nl: "Welk type structureel systeem weerstaat laterale krachten door framewerking?"
        },
        options: [
          { en: "Moment-resisting frame", es: "Marco resistente a momentos", de: "Momentensteifer Rahmen", nl: "Momentweerstandsframe" },
          { en: "Simple frame", es: "Marco simple", de: "Einfacher Rahmen", nl: "Eenvoudig frame" },
          { en: "Pinned frame", es: "Marco articulado", de: "Gelenkrahmen", nl: "Scharnierend frame" },
          { en: "Flexible frame", es: "Marco flexible", de: "Flexibler Rahmen", nl: "Flexibel frame" }
        ],
        correct: 0,
        explanation: {
          en: "A moment-resisting frame resists lateral forces through the bending strength of beams and columns and the rigidity of their connections.",
          es: "Un marco resistente a momentos resiste fuerzas laterales a través de la resistencia a flexión de vigas y columnas y la rigidez de sus conexiones.",
          de: "Ein momentensteifer Rahmen widersteht seitlichen Kräften durch die Biegefestigkeit von Balken und Säulen und die Steifigkeit ihrer Verbindungen.",
          nl: "Een momentweerstandsframe weerstaat laterale krachten door de buigsterkte van balken en kolommen en de stijfheid van hun verbindingen."
        }
      },
      {
        question: {
          en: "What is the critical parameter for punching shear in flat slabs?",
          es: "¿Cuál es el parámetro crítico para cortante punzonante en losas planas?",
          de: "Was ist der kritische Parameter für Durchstanzen in Flachdecken?",
          nl: "Wat is de kritieke parameter voor doorbonzen in vlakke platen?"
        },
        options: [
          { en: "Perimeter of the critical section around column", es: "Perímetro de la sección crítica alrededor de la columna", de: "Umfang des kritischen Querschnitts um die Säule", nl: "Omtrek van de kritieke doorsnede rond de kolom" },
          { en: "Column height", es: "Altura de columna", de: "Säulenhöhe", nl: "Kolomhoogte" },
          { en: "Slab thickness only", es: "Solo espesor de losa", de: "Nur Plattendicke", nl: "Alleen plaatdikte" },
          { en: "Reinforcement ratio", es: "Relación de refuerzo", de: "Bewehrungsverhältnis", nl: "Wapeningsverhouding" }
        ],
        correct: 0,
        explanation: {
          en: "Punching shear capacity depends on the perimeter of the critical section around the column, typically at d/2 from the column face.",
          es: "La capacidad de cortante punzonante depende del perímetro de la sección crítica alrededor de la columna, típicamente a d/2 de la cara de la columna.",
          de: "Die Durchstanzkapazität hängt vom Umfang des kritischen Querschnitts um die Säule ab, typischerweise bei d/2 von der Säulenfläche.",
          nl: "Doorponscapaciteit hangt af van de omtrek van de kritieke doorsnede rond de kolom, typisch op d/2 van het kolomoppervlak."
        }
      },
      {
        question: {
          en: "What is the primary advantage of post-tensioned concrete over conventional reinforced concrete?",
          es: "¿Cuál es la principal ventaja del concreto post-tensado sobre el concreto reforzado convencional?",
          de: "Was ist der Hauptvorteil von nachgespanntem Beton gegenüber herkömmlichem Stahlbeton?",
          nl: "Wat is het hoofdvoordeel van nagespannen beton ten opzichte van conventioneel gewapend beton?"
        },
        options: [
          { en: "Longer spans with reduced depth", es: "Tramos más largos con profundidad reducida", de: "Längere Spannweiten mit reduzierter Tiefe", nl: "Langere overspanningen met verminderde diepte" },
          { en: "Lower material cost", es: "Menor costo de materiales", de: "Niedrigere Materialkosten", nl: "Lagere materiaalkosten" },
          { en: "Faster construction", es: "Construcción más rápida", de: "Schnellere Konstruktion", nl: "Snellere constructie" },
          { en: "No maintenance required", es: "No requiere mantenimiento", de: "Keine Wartung erforderlich", nl: "Geen onderhoud vereist" }
        ],
        correct: 0,
        explanation: {
          en: "Post-tensioning allows for longer spans with reduced structural depth by actively compressing the concrete and controlling deflections.",
          es: "El post-tensado permite tramos más largos con profundidad estructural reducida comprimiendo activamente el concreto y controlando deflexiones.",
          de: "Nachspannung ermöglicht längere Spannweiten mit reduzierter Bauhöhe durch aktives Komprimieren des Betons und Kontrolle der Durchbiegungen.",
          nl: "Naspanning maakt langere overspanningen mogelijk met verminderde structurele diepte door het beton actief samen te drukken en doorbuigingen te beheersen."
        }
      },
      {
        question: {
          en: "What is the design philosophy behind capacity design method?",
          es: "¿Cuál es la filosofía de diseño detrás del método de diseño por capacidad?",
          de: "Was ist die Entwurfsphilosophie hinter der Kapazitätsentwurfsmethode?",
          nl: "Wat is de ontwerpfilosofie achter de capaciteitsontwerpmethode?"
        },
        options: [
          { en: "Control the location and sequence of yielding", es: "Controlar la ubicación y secuencia de fluencia", de: "Ort und Reihenfolge des Fließens kontrollieren", nl: "De locatie en volgorde van vloeien beheersen" },
          { en: "Maximize structural strength", es: "Maximizar la resistencia estructural", de: "Strukturelle Festigkeit maximieren", nl: "Structurele sterkte maximaliseren" },
          { en: "Minimize construction cost", es: "Minimizar el costo de construcción", de: "Baukosten minimieren", nl: "Constructiekosten minimaliseren" },
          { en: "Reduce material usage", es: "Reducir el uso de materiales", de: "Materialverbrauch reduzieren", nl: "Materiaalgebruik verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Capacity design ensures controlled yielding in predetermined locations (like beam ends) while keeping other elements elastic, providing predictable behavior.",
          es: "El diseño por capacidad asegura fluencia controlada en ubicaciones predeterminadas (como extremos de viga) mientras mantiene otros elementos elásticos, proporcionando comportamiento predecible.",
          de: "Kapazitätsentwurf gewährleistet kontrolliertes Fließen an vorbestimmten Stellen (wie Balkenenden), während andere Elemente elastisch bleiben und vorhersagbares Verhalten bieten.",
          nl: "Capaciteitsontwerp zorgt voor gecontroleerd vloeien op vooraf bepaalde locaties (zoals balkeinden) terwijl andere elementen elastisch blijven, wat voorspelbaar gedrag biedt."
        }
      },
      {
        question: {
          en: "What is the section modulus used to calculate?",
          es: "¿Para qué se usa el módulo de sección para calcular?",
          de: "Wofür wird das Widerstandsmoment zur Berechnung verwendet?",
          nl: "Waarvoor wordt de sectiemodul gebruikt om te berekenen?"
        },
        options: [
          { en: "Maximum bending stress in a beam", es: "Esfuerzo máximo de flexión en una viga", de: "Maximale Biegespannung in einem Balken", nl: "Maximale buigspanning in een balk" },
          { en: "Deflection of beams", es: "Deflexión de vigas", de: "Durchbiegung von Balken", nl: "Doorbuiging van balken" },
          { en: "Shear stress distribution", es: "Distribución de esfuerzo cortante", de: "Schubspannungsverteilung", nl: "Schuifspanningsverdeling" },
          { en: "Column buckling load", es: "Carga de pandeo de columna", de: "Säulenknickast", nl: "Kolomknikbelasting" }
        ],
        correct: 0,
        explanation: {
          en: "The section modulus (S = I/c) is used to calculate the maximum bending stress in a beam using the formula σ = M/S.",
          es: "El módulo de sección (S = I/c) se usa para calcular el esfuerzo máximo de flexión en una viga usando la fórmula σ = M/S.",
          de: "Das Widerstandsmoment (S = I/c) wird verwendet, um die maximale Biegespannung in einem Balken mit der Formel σ = M/S zu berechnen.",
          nl: "De sectiemodul (S = I/c) wordt gebruikt om de maximale buigspanning in een balk te berekenen met de formule σ = M/S."
        }
      },
      {
        question: {
          en: "What structural phenomenon causes progressive collapse?",
          es: "¿Qué fenómeno estructural causa colapso progresivo?",
          de: "Welches strukturelle Phänomen verursacht progressiven Kollaps?",
          nl: "Welk structureel fenomeen veroorzaakt progressieve instorting?"
        },
        options: [
          { en: "Loss of one key element triggers failure of others", es: "La pérdida de un elemento clave desencadena falla de otros", de: "Verlust eines Schlüsselelements löst Versagen anderer aus", nl: "Verlies van één sleutelelement triggert falen van anderen" },
          { en: "Gradual material deterioration", es: "Deterioro gradual del material", de: "Graduelle Materialverschlechterung", nl: "Geleidelijke materiaalverslechtering" },
          { en: "Slow crack propagation", es: "Propagación lenta de grietas", de: "Langsame Rissausbreitung", nl: "Langzame scheurvoortplanting" },
          { en: "Temperature expansion", es: "Expansión térmica", de: "Temperaturausdehnung", nl: "Temperatuuruitzetting" }
        ],
        correct: 0,
        explanation: {
          en: "Progressive collapse occurs when the failure of one structural element leads to a chain reaction, causing disproportionate collapse of the entire structure.",
          es: "El colapso progresivo ocurre cuando la falla de un elemento estructural lleva a una reacción en cadena, causando colapso desproporcionado de toda la estructura.",
          de: "Progressiver Kollaps tritt auf, wenn das Versagen eines Strukturelements zu einer Kettenreaktion führt und unverhältnismäßigen Kollaps der gesamten Struktur verursacht.",
          nl: "Progressieve instorting treedt op wanneer het falen van één structureel element tot een kettingreactie leidt, wat onevenredige instorting van de hele constructie veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the plastic hinge concept in structural analysis?",
          es: "¿Qué es el concepto de rótula plástica en análisis estructural?",
          de: "Was ist das Konzept des plastischen Gelenks in der Strukturanalyse?",
          nl: "Wat is het plastic scharnier concept in structurele analyse?"
        },
        options: [
          { en: "Location where yielding occurs but rotation continues", es: "Ubicación donde ocurre fluencia pero continúa rotación", de: "Ort wo Fließen auftritt aber Rotation fortsetzt", nl: "Locatie waar vloeien optreedt maar rotatie doorgaat" },
          { en: "Physical connection between members", es: "Conexión física entre miembros", de: "Physische Verbindung zwischen Gliedern", nl: "Fysieke verbinding tussen leden" },
          { en: "Elastic deformation point", es: "Punto de deformación elástica", de: "Elastischer Verformungspunkt", nl: "Elastisch vervormingspunt" },
          { en: "Maximum stress location", es: "Ubicación de esfuerzo máximo", de: "Maximale Spannungsposition", nl: "Maximale spanningslocatie" }
        ],
        correct: 0,
        explanation: {
          en: "A plastic hinge forms where a section reaches its full plastic moment capacity and continues to rotate at constant moment, enabling redistribution of forces.",
          es: "Una rótula plástica se forma donde una sección alcanza su capacidad de momento plástico completo y continúa rotando a momento constante, permitiendo redistribución de fuerzas.",
          de: "Ein plastisches Gelenk bildet sich, wo ein Querschnitt seine volle plastische Momentenkapazität erreicht und bei konstantem Moment weiterrotiert, wodurch Kraftumverteilung ermöglicht wird.",
          nl: "Een plastic scharnier vormt zich waar een doorsnede zijn volledige plastische momentcapaciteit bereikt en blijft roteren bij constant moment, wat herverdeling van krachten mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the primary function of a shear wall in a building?",
          es: "¿Cuál es la función principal de un muro de cortante en un edificio?",
          de: "Was ist die Hauptfunktion einer Schubwand in einem Gebäude?",
          nl: "Wat is de primaire functie van een schuifwand in een gebouw?"
        },
        options: [
          { en: "To resist lateral loads from wind and earthquakes", es: "Resistir cargas laterales de viento y terremotos", de: "Seitliche Lasten von Wind und Erdbeben widerstehen", nl: "Om laterale belastingen van wind en aardbevingen te weerstaan" },
          { en: "To carry vertical loads only", es: "Solo cargar verticalmente", de: "Nur vertikale Lasten tragen", nl: "Alleen verticale lasten dragen" },
          { en: "To provide insulation", es: "Proporcionar aislamiento", de: "Isolierung bieten", nl: "Isolatie bieden" },
          { en: "To separate spaces", es: "Separar espacios", de: "Räume trennen", nl: "Ruimtes scheiden" }
        ],
        correct: 0,
        explanation: {
          en: "Shear walls are vertical structural elements designed to resist in-plane lateral forces from wind and seismic loads through their high in-plane stiffness.",
          es: "Los muros de cortante son elementos estructurales verticales diseñados para resistir fuerzas laterales en el plano de viento y cargas sísmicas a través de su alta rigidez en el plano.",
          de: "Schubwände sind vertikale Strukturelemente, die darauf ausgelegt sind, seitlichen Kräften in der Ebene von Wind und seismischen Lasten durch ihre hohe Steifigkeit in der Ebene zu widerstehen.",
          nl: "Schuifwanden zijn verticale structurele elementen ontworpen om in-het-vlak laterale krachten van wind en seismische belastingen te weerstaan door hun hoge in-het-vlak stijfheid."
        }
      },
      {
        question: {
          en: "What is the difference between elastic and plastic analysis?",
          es: "¿Cuál es la diferencia entre análisis elástico y plástico?",
          de: "Was ist der Unterschied zwischen elastischer und plastischer Analyse?",
          nl: "Wat is het verschil tussen elastische en plastische analyse?"
        },
        options: [
          { en: "Elastic assumes linear behavior, plastic considers yielding", es: "Elástico asume comportamiento lineal, plástico considera fluencia", de: "Elastisch nimmt lineares Verhalten an, plastisch berücksichtigt Fließen", nl: "Elastisch veronderstelt lineair gedrag, plastisch overweegt vloeien" },
          { en: "They are identical methods", es: "Son métodos idénticos", de: "Sie sind identische Methoden", nl: "Het zijn identieke methoden" },
          { en: "Plastic is only for steel structures", es: "Plástico es solo para estructuras de acero", de: "Plastisch ist nur für Stahlstrukturen", nl: "Plastisch is alleen voor staalconstructies" },
          { en: "Elastic is more accurate", es: "Elástico es más preciso", de: "Elastisch ist genauer", nl: "Elastisch is nauwkeuriger" }
        ],
        correct: 0,
        explanation: {
          en: "Elastic analysis assumes materials remain within elastic limits with linear stress-strain relationship, while plastic analysis accounts for yielding and nonlinear behavior.",
          es: "El análisis elástico asume que los materiales permanecen dentro de límites elásticos con relación esfuerzo-deformación lineal, mientras que el análisis plástico considera fluencia y comportamiento no lineal.",
          de: "Elastische Analyse nimmt an, dass Materialien innerhalb elastischer Grenzen mit linearer Spannungs-Dehnungs-Beziehung bleiben, während plastische Analyse Fließen und nichtlineares Verhalten berücksichtigt.",
          nl: "Elastische analyse veronderstelt dat materialen binnen elastische grenzen blijven met lineaire spanning-rek relatie, terwijl plastische analyse vloeien en niet-lineair gedrag overweegt."
        }
      },
      {
        question: {
          en: "What is the concept of effective width in wide flange beams?",
          es: "¿Qué es el concepto de ancho efectivo en vigas de ala ancha?",
          de: "Was ist das Konzept der wirksamen Breite bei Breitflanschträgern?",
          nl: "Wat is het concept van effectieve breedte in brede flensbalken?"
        },
        options: [
          { en: "The portion of flange that effectively resists bending", es: "La porción del ala que efectivamente resiste flexión", de: "Der Teil des Flansches, der effektiv Biegung widersteht", nl: "Het gedeelte van de flens dat effectief buiging weerstand biedt" },
          { en: "The total flange width", es: "El ancho total del ala", de: "Die gesamte Flanschbreite", nl: "De totale flensbredte" },
          { en: "The web thickness", es: "El espesor del alma", de: "Die Stegdicke", nl: "De lijfdikte" },
          { en: "The beam height", es: "La altura de la viga", de: "Die Balkenhöhe", nl: "De balkhoogte" }
        ],
        correct: 0,
        explanation: {
          en: "Effective width accounts for shear lag in wide flanges, where stress distribution is non-uniform and only a portion of the flange is fully effective in bending.",
          es: "El ancho efectivo considera el retraso de cortante en alas anchas, donde la distribución de esfuerzo es no uniforme y solo una porción del ala es completamente efectiva en flexión.",
          de: "Wirksame Breite berücksichtigt Schubverzug in breiten Flanschen, wo Spannungsverteilung ungleichmäßig ist und nur ein Teil des Flansches voll wirksam bei Biegung ist.",
          fl: "Effectieve breedte houdt rekening met schuifachterstand in brede flenzen, waar spanningsverdeling niet-uniform is en slechts een deel van de flens volledig effectief is bij buiging."
        }
      },
      {
        question: {
          en: "What is the main characteristic of a statically determinate structure?",
          es: "¿Cuál es la característica principal de una estructura estáticamente determinada?",
          de: "Was ist die Haupteigenschaft einer statisch bestimmten Struktur?",
          nl: "Wat is de hoofdkenmerk van een statisch bepaalde constructie?"
        },
        options: [
          { en: "Reactions can be found using equilibrium equations alone", es: "Las reacciones pueden encontrarse usando solo ecuaciones de equilibrio", de: "Reaktionen können nur mit Gleichgewichtsgleichungen gefunden werden", nl: "Reacties kunnen gevonden worden met alleen evenwichtsvergelijkingen" },
          { en: "Has infinite solutions", es: "Tiene infinitas soluciones", de: "Hat unendliche Lösungen", nl: "Heeft oneindige oplossingen" },
          { en: "Cannot carry any loads", es: "No puede cargar ninguna carga", de: "Kann keine Lasten tragen", nl: "Kan geen belastingen dragen" },
          { en: "Always fails under load", es: "Siempre falla bajo carga", de: "Versagt immer unter Last", nl: "Faalt altijd onder belasting" }
        ],
        correct: 0,
        explanation: {
          en: "In statically determinate structures, the number of unknown reactions equals the number of equilibrium equations, allowing unique solution without considering deformations.",
          es: "En estructuras estáticamente determinadas, el número de reacciones desconocidas iguala el número de ecuaciones de equilibrio, permitiendo solución única sin considerar deformaciones.",
          de: "Bei statisch bestimmten Strukturen entspricht die Anzahl unbekannter Reaktionen der Anzahl der Gleichgewichtsgleichungen, was eine eindeutige Lösung ohne Berücksichtigung von Verformungen ermöglicht.",
          nl: "In statisch bepaalde constructies is het aantal onbekende reacties gelijk aan het aantal evenwichtsvergelijkingen, wat een unieke oplossing mogelijk maakt zonder vervormingen te beschouwen."
        }
      },
      {
        question: {
          en: "What is the primary concern in design of long-span structures?",
          es: "¿Cuál es la preocupación principal en el diseño de estructuras de gran luz?",
          de: "Was ist die Hauptsorge beim Entwurf von weitspannenden Strukturen?",
          nl: "Wat is de primaire zorg in het ontwerp van lange overspanningsconstructies?"
        },
        options: [
          { en: "Deflection control rather than strength", es: "Control de deflexión más que resistencia", de: "Durchbiegungskontrolle statt Festigkeit", nl: "Doorbuigingscontrole in plaats van sterkte" },
          { en: "Maximum strength only", es: "Solo resistencia máxima", de: "Nur maximale Festigkeit", nl: "Alleen maximale sterkte" },
          { en: "Material cost", es: "Costo del material", de: "Materialkosten", nl: "Materiaalkosten" },
          { en: "Construction speed", es: "Velocidad de construcción", de: "Baugeschwindigkeit", nl: "Constructiesnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "In long-span structures, deflection often governs design because serviceability requirements limit allowable deflections more stringently than strength requirements.",
          es: "En estructuras de gran luz, la deflexión a menudo gobierna el diseño porque los requisitos de servicio limitan las deflexiones permitidas más estrictamente que los requisitos de resistencia.",
          de: "Bei weitspannenden Strukturen bestimmt oft die Durchbiegung den Entwurf, weil Gebrauchstauglichkeitsanforderungen zulässige Durchbiegungen strenger begrenzen als Festigkeitsanforderungen.",
          nl: "In lange overspanningsconstructies bepaalt doorbuiging vaak het ontwerp omdat bruikbaarheidseisen toelaatbare doorbuigingen strikter beperken dan sterkte-eisen."
        }
      },
      {
        question: {
          en: "What is the main advantage of using high-strength steel in structures?",
          es: "¿Cuál es la principal ventaja de usar acero de alta resistencia en estructuras?",
          de: "Was ist der Hauptvorteil der Verwendung von hochfestem Stahl in Strukturen?",
          nl: "Wat is het hoofdvoordeel van het gebruik van hoogsterkte staal in constructies?"
        },
        options: [
          { en: "Reduced member sizes and weight", es: "Tamaños de miembros y peso reducidos", de: "Reduzierte Bauteilgrößen und Gewicht", nl: "Verminderde afmetingen en gewicht van leden" },
          { en: "Lower material cost", es: "Menor costo de material", de: "Niedrigere Materialkosten", nl: "Lagere materiaalkosten" },
          { en: "Better corrosion resistance", es: "Mejor resistencia a la corrosión", de: "Bessere Korrosionsbeständigkeit", nl: "Betere corrosieweerstand" },
          { en: "Easier fabrication", es: "Fabricación más fácil", de: "Einfachere Herstellung", nl: "Gemakkelijkere fabricage" }
        ],
        correct: 0,
        explanation: {
          en: "High-strength steel allows for smaller member sizes and reduced structural weight while maintaining the same load capacity, leading to more economical designs.",
          es: "El acero de alta resistencia permite tamaños de miembros más pequeños y peso estructural reducido mientras mantiene la misma capacidad de carga, llevando a diseños más económicos.",
          de: "Hochfester Stahl ermöglicht kleinere Bauteilgrößen und reduziertes Strukturgewicht bei gleicher Lastkapazität, was zu wirtschaftlicheren Entwürfen führt.",
          nl: "Hoogsterkte staal maakt kleinere afmetingen van leden en verminderd structureel gewicht mogelijk terwijl dezelfde belastingscapaciteit behouden blijft, wat tot economischere ontwerpen leidt."
        }
      },
      {
        question: {
          en: "What is the purpose of stirrups in reinforced concrete beams?",
          es: "¿Cuál es el propósito de los estribos en vigas de concreto reforzado?",
          de: "Was ist der Zweck von Bügeln in Stahlbetonbalken?",
          nl: "Wat is het doel van beugels in gewapend betonbalken?"
        },
        options: [
          { en: "To resist shear forces and provide confinement", es: "Resistir fuerzas cortantes y proporcionar confinamiento", de: "Schubkräften widerstehen und Einschnürung bieten", nl: "Om schuifkrachten te weerstaan en opsluiting te bieden" },
          { en: "To increase bending capacity", es: "Aumentar capacidad de flexión", de: "Biegekapazität erhöhen", nl: "Om buigcapaciteit te verhogen" },
          { en: "To reduce concrete shrinkage", es: "Reducir contracción del concreto", de: "Betonschwund reduzieren", nl: "Om betonkrimp te verminderen" },
          { en: "To improve durability only", es: "Solo mejorar la durabilidad", de: "Nur Haltbarkeit verbessern", nl: "Alleen duurzaamheid verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Stirrups (transverse reinforcement) resist shear forces, prevent buckling of longitudinal bars, and provide confinement to concrete under loading.",
          es: "Los estribos (refuerzo transversal) resisten fuerzas cortantes, previenen pandeo de barras longitudinales, y proporcionan confinamiento al concreto bajo carga.",
          de: "Bügel (Querbewehrung) widerstehen Schubkräften, verhindern Knicken von Längsstäben und bieten Einschnürung des Betons unter Belastung.",
          nl: "Beugels (dwarsgewapening) weerstaan schuifkrachten, voorkomen knikken van langswapening, en bieden opsluiting aan beton onder belasting."
        }
      },
      {
        question: {
          en: "What is the concept of redundancy in structural systems?",
          es: "¿Qué es el concepto de redundancia en sistemas estructurales?",
          de: "Was ist das Konzept der Redundanz in Struktursystemen?",
          nl: "Wat is het concept van redundantie in structurele systemen?"
        },
        options: [
          { en: "Multiple load paths to prevent catastrophic failure", es: "Múltiples trayectorias de carga para prevenir falla catastrófica", de: "Mehrere Lastpfade zur Verhinderung katastrophaler Ausfälle", nl: "Meerdere belastingspaden om catastrofaal falen te voorkomen" },
          { en: "Using extra materials unnecessarily", es: "Usar materiales extra innecesariamente", de: "Unnötig zusätzliche Materialien verwenden", nl: "Onnodig extra materialen gebruiken" },
          { en: "Duplicating all structural members", es: "Duplicar todos los miembros estructurales", de: "Alle Strukturglieder duplizieren", nl: "Alle structurele leden dupliceren" },
          { en: "Over-designing for strength", es: "Sobre-diseñar para resistencia", de: "Über-dimensionierung für Festigkeit", nl: "Over-ontwerpen voor sterkte" }
        ],
        correct: 0,
        explanation: {
          en: "Structural redundancy provides alternative load paths so that if one element fails, the loads can be redistributed to other elements, preventing total collapse.",
          es: "La redundancia estructural proporciona trayectorias de carga alternativas para que si un elemento falla, las cargas puedan redistribuirse a otros elementos, previniendo colapso total.",
          de: "Strukturelle Redundanz bietet alternative Lastpfade, sodass bei Ausfall eines Elements die Lasten auf andere Elemente umverteilt werden können und Totalkollaps verhindert wird.",
          nl: "Structurele redundantie biedt alternatieve belastingspaden zodat als één element faalt, belastingen herverdeeld kunnen worden naar andere elementen, wat totale instorting voorkomt."
        }
      },
      {
        question: {
          en: "What is the primary purpose of load combinations in structural design?",
          es: "¿Cuál es el propósito principal de las combinaciones de carga en diseño estructural?",
          de: "Was ist der Hauptzweck von Lastkombinationen im Strukturentwurf?",
          nl: "Wat is het primaire doel van belastingscombinaties in structureel ontwerp?"
        },
        options: [
          { en: "Account for simultaneous occurrence of different loads", es: "Considerar la ocurrencia simultánea de diferentes cargas", de: "Gleichzeitiges Auftreten verschiedener Lasten berücksichtigen", nl: "Rekening houden met gelijktijdig optreden van verschillende belastingen" },
          { en: "Simplify calculations", es: "Simplificar cálculos", de: "Berechnungen vereinfachen", nl: "Berekeningen vereenvoudigen" },
          { en: "Reduce safety factors", es: "Reducir factores de seguridad", de: "Sicherheitsfaktoren reduzieren", nl: "Veiligheidsfactoren verminderen" },
          { en: "Minimize structural weight", es: "Minimizar peso estructural", de: "Strukturgewicht minimieren", nl: "Structureel gewicht minimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Load combinations consider the probability of different loads occurring simultaneously and apply appropriate factors to ensure adequate safety margins.",
          es: "Las combinaciones de carga consideran la probabilidad de diferentes cargas ocurriendo simultáneamente y aplican factores apropiados para asegurar márgenes de seguridad adecuados.",
          de: "Lastkombinationen berücksichtigen die Wahrscheinlichkeit des gleichzeitigen Auftretens verschiedener Lasten und wenden angemessene Faktoren an, um ausreichende Sicherheitsmargen zu gewährleisten.",
          nl: "Belastingscombinaties overwegen de waarschijnlijkheid dat verschillende belastingen gelijktijdig optreden en passen passende factoren toe om adequate veiligheidsmarges te waarborgen."
        }
      },
      {
        question: {
          en: "What is the main design consideration for structures in high seismic zones?",
          es: "¿Cuál es la consideración principal de diseño para estructuras en zonas de alta sismicidad?",
          de: "Was ist die Hauptentwurfsüberlegung für Strukturen in Gebieten mit hoher Seismizität?",
          nl: "Wat is de hoofdontwerpoverweging voor constructies in hoge seismische zones?"
        },
        options: [
          { en: "Ductility and energy dissipation capacity", es: "Ductilidad y capacidad de disipación de energía", de: "Duktilität und Energiedissipationskapazität", nl: "Ductiliteit en energiedissipatiecapaciteit" },
          { en: "Maximum stiffness only", es: "Solo rigidez máxima", de: "Nur maximale Steifigkeit", nl: "Alleen maximale stijfheid" },
          { en: "Lowest possible weight", es: "El menor peso posible", de: "Geringstes mögliches Gewicht", nl: "Laagst mogelijke gewicht" },
          { en: "Highest strength materials", es: "Materiales de mayor resistencia", de: "Materialien höchster Festigkeit", nl: "Sterkste materialen" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic design prioritizes ductility and energy dissipation to allow structures to absorb earthquake energy through controlled inelastic deformation without collapse.",
          es: "El diseño sísmico prioriza la ductilidad y disipación de energía para permitir que las estructuras absorban energía de terremoto a través de deformación inelástica controlada sin colapso.",
          de: "Seismisches Design priorisiert Duktilität und Energiedissipation, um Strukturen zu ermöglichen, Erdbebenenergie durch kontrollierte unelastische Verformung ohne Kollaps zu absorbieren.",
          nl: "Seismisch ontwerp prioriteert ductiliteit en energiedissipatie om constructies in staat te stellen aardbevingsenergie te absorberen door gecontroleerde inelastische vervorming zonder instorting."
        }
      },
      {
        question: {
          en: "What is the difference between local and global buckling in steel members?",
          es: "¿Cuál es la diferencia entre pandeo local y global en miembros de acero?",
          de: "Was ist der Unterschied zwischen lokalem und globalem Knicken bei Stahlgliedern?",
          nl: "Wat is het verschil tussen lokaal en globaal knikken in stalen leden?"
        },
        options: [
          { en: "Local occurs in plate elements, global affects entire member", es: "Local ocurre en elementos de placa, global afecta todo el miembro", de: "Lokal tritt in Plattenelementen auf, global betrifft das gesamte Glied", nl: "Lokaal vindt plaats in plaatelementen, globaal beïnvloedt hele lid" },
          { en: "They are the same phenomenon", es: "Son el mismo fenómeno", de: "Sie sind dasselbe Phänomen", nl: "Het zijn hetzelfde fenomeen" },
          { en: "Global is less critical", es: "Global es menos crítico", de: "Global ist weniger kritisch", nl: "Globaal is minder kritiek" },
          { en: "Local only occurs in columns", es: "Local solo ocurre en columnas", de: "Lokal tritt nur in Säulen auf", nl: "Lokaal vindt alleen plaats in kolommen" }
        ],
        correct: 0,
        explanation: {
          en: "Local buckling involves instability of individual plate elements (flanges, webs), while global buckling affects the entire member through lateral-torsional or flexural buckling.",
          es: "El pandeo local involucra inestabilidad de elementos de placa individuales (alas, almas), mientras que el pandeo global afecta todo el miembro a través de pandeo lateral-torsional o flexural.",
          de: "Lokales Knicken betrifft Instabilität einzelner Plattenelemente (Flansche, Stege), während globales Knicken das gesamte Glied durch seitliches Kippen oder Biegekniken betrifft.",
          nl: "Lokaal knikken behelst instabiliteit van individuele plaatelementen (flenzen, lijven), terwijl globaal knikken het hele lid beïnvloedt door lateraal-torsionaal of buig-knikken."
        }
      },
      {
        question: {
          en: "What is the principle behind base isolation in seismic design?",
          es: "¿Cuál es el principio detrás del aislamiento de base en diseño sísmico?",
          de: "Was ist das Prinzip hinter Basisisolierung im seismischen Entwurf?",
          nl: "Wat is het principe achter basisisolatie in seismisch ontwerp?"
        },
        options: [
          { en: "Decouple structure from ground motion", es: "Desacoplar la estructura del movimiento del suelo", de: "Struktur von Bodenbewegung entkoppeln", nl: "Constructie loskoppelen van grondbeweging" },
          { en: "Increase structural stiffness", es: "Aumentar rigidez estructural", de: "Strukturelle Steifigkeit erhöhen", nl: "Structurele stijfheid verhogen" },
          { en: "Add more damping to structure", es: "Agregar más amortiguamiento a la estructura", de: "Mehr Dämpfung zur Struktur hinzufügen", nl: "Meer demping aan de constructie toevoegen" },
          { en: "Strengthen foundation only", es: "Solo fortalecer la cimentación", de: "Nur Fundament verstärken", nl: "Alleen de fundering versterken" }
        ],
        correct: 0,
        explanation: {
          en: "Base isolation uses flexible bearings between foundation and structure to decouple the building from ground motion, reducing transmitted accelerations and forces.",
          es: "El aislamiento de base usa apoyos flexibles entre cimentación y estructura para desacoplar el edificio del movimiento del suelo, reduciendo aceleraciones y fuerzas transmitidas.",
          de: "Basisisolierung verwendet flexible Lager zwischen Fundament und Struktur, um das Gebäude von der Bodenbewegung zu entkoppeln und übertragene Beschleunigungen und Kräfte zu reduzieren.",
          nl: "Basisisolatie gebruikt flexibele lagers tussen fundering en constructie om het gebouw los te koppelen van grondbeweging, waardoor overgebrachte versnellingen en krachten worden verminderd."
        }
      },
      {
        question: {
          en: "What is the phenomenon where a structure continues to deform under constant load?",
          es: "¿Qué es el fenómeno donde una estructura continúa deformándose bajo carga constante?",
          de: "Was ist das Phänomen, bei dem sich eine Struktur unter konstanter Last weiter verformt?",
          nl: "Wat is het fenomeen waarbij een constructie blijft vervormen onder constante belasting?"
        },
        options: [
          { en: "Creep", es: "Fluencia lenta", de: "Kriechen", nl: "Kruip" },
          { en: "Fatigue", es: "Fatiga", de: "Ermüdung", nl: "Vermoeidheid" },
          { en: "Elastic deformation", es: "Deformación elástica", de: "Elastische Verformung", nl: "Elastische vervorming" },
          { en: "Plastic deformation", es: "Deformación plástica", de: "Plastische Verformung", nl: "Plastische vervorming" }
        ],
        correct: 0,
        explanation: {
          en: "Creep is the time-dependent deformation that occurs under sustained loading, particularly significant in concrete structures and at elevated temperatures.",
          es: "La fluencia lenta es la deformación dependiente del tiempo que ocurre bajo carga sostenida, particularmente significativa en estructuras de concreto y a temperaturas elevadas.",
          de: "Kriechen ist die zeitabhängige Verformung, die unter anhaltender Belastung auftritt, besonders bedeutsam bei Betonkonstruktionen und bei erhöhten Temperaturen.",
          nl: "Kruip is de tijdsafhankelijke vervorming die optreedt onder aanhoudende belasting, bijzonder significant in betonconstructies en bij verhoogde temperaturen."
        }
      },
      {
        question: {
          en: "What is the primary purpose of damping in dynamic structural analysis?",
          es: "¿Cuál es el propósito principal del amortiguamiento en análisis estructural dinámico?",
          de: "Was ist der Hauptzweck der Dämpfung in der dynamischen Strukturanalyse?",
          nl: "Wat is het primaire doel van demping in dynamische structurele analyse?"
        },
        options: [
          { en: "To dissipate energy and reduce vibrations", es: "Disipar energía y reducir vibraciones", de: "Energie dissipieren und Schwingungen reduzieren", nl: "Om energie te dissiperen en trillingen te verminderen" },
          { en: "To increase structural stiffness", es: "Aumentar rigidez estructural", de: "Strukturelle Steifigkeit erhöhen", nl: "Om structurele stijfheid te verhogen" },
          { en: "To add mass to the structure", es: "Agregar masa a la estructura", de: "Masse zur Struktur hinzufügen", nl: "Om massa aan de constructie toe te voegen" },
          { en: "To prevent static loading", es: "Prevenir carga estática", de: "Statische Belastung verhindern", nl: "Om statische belasting te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Damping dissipates vibrational energy in structures, reducing amplitude of dynamic response and preventing excessive oscillations under dynamic loads.",
          es: "El amortiguamiento disipa energía vibracional en estructuras, reduciendo la amplitud de respuesta dinámica y previniendo oscilaciones excesivas bajo cargas dinámicas.",
          de: "Dämpfung dissipiert Schwingungsenergie in Strukturen, reduziert die Amplitude der dynamischen Antwort und verhindert übermäßige Schwingungen unter dynamischen Lasten.",
          nl: "Demping dissipeert trillingsenergie in constructies, vermindert amplitude van dynamische reactie en voorkomt overmatige oscillaties onder dynamische belastingen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/engineering', level3);
  }
})();
