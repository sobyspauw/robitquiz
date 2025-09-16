// Engineering - Level 2: Mechanical Engineering Basics
window.addLevel('brain-teaser/engineering', {
  name: { 
    en: 'Mechanical Engineering Basics', 
    es: 'Fundamentos de Ingeniería Mecánica', 
    de: 'Grundlagen des Maschinenbaus', 
    nl: 'Grondbeginselen Werktuigbouwkunde' 
  },
  questions: [
    {
      question: {
        en: "What is the first law of thermodynamics?",
        es: "¿Cuál es la primera ley de la termodinámica?",
        de: "Was ist der erste Hauptsatz der Thermodynamik?",
        nl: "Wat is de eerste hoofdwet van de thermodynamica?"
      },
      options: [
        { en: "Energy can be created or destroyed", es: "La energía puede ser creada o destruida", de: "Energie kann erzeugt oder zerstört werden", nl: "Energie kan gecreëerd of vernietigd worden" },
        { en: "Energy cannot be created or destroyed, only converted", es: "La energía no puede ser creada ni destruida, solo convertida", de: "Energie kann nicht erzeugt oder zerstört, nur umgewandelt werden", nl: "Energie kan niet gecreëerd of vernietigd worden, alleen omgezet" },
        { en: "Heat flows from cold to hot", es: "El calor fluye de frío a caliente", de: "Wärme fließt von kalt zu heiß", nl: "Warmte stroomt van koud naar warm" },
        { en: "Entropy always decreases", es: "La entropía siempre disminuye", de: "Entropie nimmt immer ab", nl: "Entropie neemt altijd af" }
      ],
      correct: 1,
      explanation: {
        en: "The first law of thermodynamics states that energy cannot be created or destroyed, only converted from one form to another. This is also known as the law of conservation of energy: ΔU = Q - W.",
        es: "La primera ley de la termodinámica establece que la energía no puede ser creada ni destruida, solo convertida de una forma a otra. También se conoce como la ley de conservación de la energía: ΔU = Q - W.",
        de: "Der erste Hauptsatz der Thermodynamik besagt, dass Energie nicht erzeugt oder zerstört, sondern nur von einer Form in eine andere umgewandelt werden kann. Dies ist auch als Energieerhaltungssatz bekannt: ΔU = Q - W.",
        nl: "De eerste hoofdwet van de thermodynamica stelt dat energie niet kan worden gecreëerd of vernietigd, alleen omgezet van de ene vorm naar de andere. Dit staat ook bekend als de wet van behoud van energie: ΔU = Q - W."
      }
    },
    {
      question: {
        en: "Which heat transfer mechanism requires a medium (solid, liquid, or gas)?",
        es: "¿Qué mecanismo de transferencia de calor requiere un medio (sólido, líquido o gas)?",
        de: "Welcher Wärmeübertragungsmechanismus benötigt ein Medium (fest, flüssig oder gasförmig)?",
        nl: "Welk warmteoverdrachtsmechanisme vereist een medium (vast, vloeibaar of gas)?"
      },
      options: [
        { en: "Radiation", es: "Radiación", de: "Strahlung", nl: "Straling" },
        { en: "Conduction", es: "Conducción", de: "Leitung", nl: "Geleiding" },
        { en: "Convection", es: "Convección", de: "Konvektion", nl: "Convectie" },
        { en: "Both conduction and convection", es: "Tanto conducción como convección", de: "Sowohl Leitung als auch Konvektion", nl: "Zowel geleiding als convectie" }
      ],
      correct: 3,
      explanation: {
        en: "Both conduction and convection require a medium. Conduction transfers heat through direct contact in solids, while convection transfers heat through fluid motion in liquids and gases. Radiation can transfer heat through vacuum.",
        es: "Tanto la conducción como la convección requieren un medio. La conducción transfiere calor a través del contacto directo en sólidos, mientras que la convección transfiere calor a través del movimiento de fluidos en líquidos y gases. La radiación puede transferir calor a través del vacío.",
        de: "Sowohl Leitung als auch Konvektion benötigen ein Medium. Leitung überträgt Wärme durch direkten Kontakt in Festkörpern, während Konvektion Wärme durch Fluidbewegung in Flüssigkeiten und Gasen überträgt. Strahlung kann Wärme durch Vakuum übertragen.",
        nl: "Zowel geleiding als convectie vereisen een medium. Geleiding draagt warmte over door direct contact in vaste stoffen, terwijl convectie warmte overdraagt door vloeistofbeweging in vloeistoffen en gassen. Straling kan warmte overdragen door vacuüm."
      }
    },
    {
      question: {
        en: "What is the relationship between pressure and velocity in a flowing fluid according to Bernoulli's equation?",
        es: "¿Cuál es la relación entre presión y velocidad en un fluido en movimiento según la ecuación de Bernoulli?",
        de: "Wie ist die Beziehung zwischen Druck und Geschwindigkeit in einem strömenden Fluid nach Bernoullis Gleichung?",
        nl: "Wat is de relatie tussen druk en snelheid in een stromende vloeistof volgens de vergelijking van Bernoulli?"
      },
      options: [
        { en: "Pressure increases with velocity", es: "La presión aumenta con la velocidad", de: "Druck steigt mit der Geschwindigkeit", nl: "Druk neemt toe met snelheid" },
        { en: "Pressure decreases with velocity", es: "La presión disminuye con la velocidad", de: "Druck nimmt mit der Geschwindigkeit ab", nl: "Druk neemt af met snelheid" },
        { en: "Pressure is independent of velocity", es: "La presión es independiente de la velocidad", de: "Druck ist unabhängig von der Geschwindigkeit", nl: "Druk is onafhankelijk van snelheid" },
        { en: "Pressure equals velocity squared", es: "La presión es igual a la velocidad al cuadrado", de: "Druck gleich Geschwindigkeit zum Quadrat", nl: "Druk gelijk snelheid kwadraat" }
      ],
      correct: 1,
      explanation: {
        en: "According to Bernoulli's equation, as the velocity of a fluid increases, its pressure decreases (and vice versa). This is expressed as: P + ½ρv² + ρgh = constant, where higher velocity (v) results in lower pressure (P).",
        es: "Según la ecuación de Bernoulli, cuando la velocidad de un fluido aumenta, su presión disminuye (y viceversa). Esto se expresa como: P + ½ρv² + ρgh = constante, donde mayor velocidad (v) resulta en menor presión (P).",
        de: "Nach Bernoullis Gleichung nimmt der Druck eines Fluids ab, wenn seine Geschwindigkeit zunimmt (und umgekehrt). Dies wird ausgedrückt als: P + ½ρv² + ρgh = konstant, wobei höhere Geschwindigkeit (v) zu niedrigerem Druck (P) führt.",
        nl: "Volgens de vergelijking van Bernoulli neemt de druk van een vloeistof af naarmate de snelheid toeneemt (en omgekeerd). Dit wordt uitgedrukt als: P + ½ρv² + ρgh = constant, waarbij hogere snelheid (v) resulteert in lagere druk (P)."
      }
    },
    {
      question: {
        en: "In a four-stroke internal combustion engine, which stroke involves the intake of the fuel-air mixture?",
        es: "En un motor de combustión interna de cuatro tiempos, ¿qué tiempo involucra la admisión de la mezcla combustible-aire?",
        de: "Bei einem Viertakt-Verbrennungsmotor, welcher Takt beinhaltet die Aufnahme des Kraftstoff-Luft-Gemischs?",
        nl: "In een viertakt verbrandingsmotor, welke slag behelst de inname van het brandstof-luchtmengsel?"
      },
      options: [
        { en: "Intake stroke", es: "Tiempo de admisión", de: "Ansaugtakt", nl: "Inlaatslag" },
        { en: "Compression stroke", es: "Tiempo de compresión", de: "Verdichtungstakt", nl: "Compressieslag" },
        { en: "Power stroke", es: "Tiempo de potencia", de: "Arbeitstakt", nl: "Arbeidsslag" },
        { en: "Exhaust stroke", es: "Tiempo de escape", de: "Ausstoßtakt", nl: "Uitlaatslag" }
      ],
      correct: 0,
      explanation: {
        en: "The intake stroke is when the piston moves down, creating a vacuum that draws the fuel-air mixture into the cylinder through the open intake valve. This is the first stroke of the four-stroke cycle.",
        es: "El tiempo de admisión es cuando el pistón se mueve hacia abajo, creando un vacío que aspira la mezcla combustible-aire hacia el cilindro a través de la válvula de admisión abierta. Este es el primer tiempo del ciclo de cuatro tiempos.",
        de: "Der Ansaugtakt ist, wenn sich der Kolben nach unten bewegt und ein Vakuum erzeugt, das das Kraftstoff-Luft-Gemisch durch das geöffnete Einlassventil in den Zylinder zieht. Dies ist der erste Takt des Viertaktzyklus.",
        nl: "De inlaatslag is wanneer de zuiger naar beneden beweegt, een vacuüm creërend dat het brandstof-luchtmengsel door de open inlaatklep in de cilinder zuigt. Dit is de eerste slag van de viertaktcyclus."
      }
    },
    {
      question: {
        en: "What is the gear ratio if a 20-tooth pinion drives a 60-tooth gear?",
        es: "¿Cuál es la relación de engranajes si un piñón de 20 dientes impulsa un engranaje de 60 dientes?",
        de: "Wie ist das Übersetzungsverhältnis, wenn ein 20-Zahn-Ritzel ein 60-Zahn-Zahnrad antreibt?",
        nl: "Wat is de tandwielverhouding als een 20-tands tandwiel een 60-tands tandwiel aandrijft?"
      },
      options: [
        { en: "1:3", es: "1:3", de: "1:3", nl: "1:3" },
        { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
        { en: "2:3", es: "2:3", de: "2:3", nl: "2:3" },
        { en: "3:2", es: "3:2", de: "3:2", nl: "3:2" }
      ],
      correct: 0,
      explanation: {
        en: "Gear ratio = driven gear teeth / driving gear teeth = 60/20 = 3:1. However, when expressed as driving to driven gear, it's 1:3. This means the pinion rotates 3 times for every 1 rotation of the larger gear.",
        es: "Relación de engranajes = dientes del engranaje conducido / dientes del engranaje conductor = 60/20 = 3:1. Sin embargo, cuando se expresa como engranaje conductor a conducido, es 1:3. Esto significa que el piñón rota 3 veces por cada 1 rotación del engranaje más grande.",
        de: "Übersetzungsverhältnis = Zähne des angetriebenen Zahnrads / Zähne des antreibenden Zahnrads = 60/20 = 3:1. Wenn es jedoch als antreibendes zu angetriebenem Zahnrad ausgedrückt wird, ist es 1:3. Das bedeutet, das Ritzel dreht sich 3 Mal für jede 1 Drehung des größeren Zahnrads.",
        nl: "Tandwielverhouding = tanden van aangedreven tandwiel / tanden van aandrijvend tandwiel = 60/20 = 3:1. Echter, wanneer uitgedrukt als aandrijvend naar aangedreven tandwiel, is het 1:3. Dit betekent dat het tandwiel 3 keer draait voor elke 1 rotatie van het grotere tandwiel."
      }
    },
    {
      question: {
        en: "Which type of bearing is best suited for handling both radial and thrust loads?",
        es: "¿Qué tipo de rodamiento es más adecuado para manejar cargas tanto radiales como de empuje?",
        de: "Welche Art von Lager ist am besten geeignet, um sowohl radiale als auch axiale Lasten zu bewältigen?",
        nl: "Welk type lager is het best geschikt voor het hanteren van zowel radiale als axiale belastingen?"
      },
      options: [
        { en: "Ball bearing", es: "Rodamiento de bolas", de: "Kugellager", nl: "Kogellager" },
        { en: "Roller bearing", es: "Rodamiento de rodillos", de: "Rollenlager", nl: "Rollenlager" },
        { en: "Tapered roller bearing", es: "Rodamiento de rodillos cónicos", de: "Kegelrollenlager", nl: "Kegellager" },
        { en: "Needle bearing", es: "Rodamiento de agujas", de: "Nadellager", nl: "Naaldlager" }
      ],
      correct: 2,
      explanation: {
        en: "Tapered roller bearings are specifically designed to handle both radial and thrust (axial) loads simultaneously. The tapered design allows the load to be distributed along the contact line, making them ideal for applications like automotive wheel hubs.",
        es: "Los rodamientos de rodillos cónicos están específicamente diseñados para manejar cargas radiales y de empuje (axiales) simultáneamente. El diseño cónico permite que la carga se distribuya a lo largo de la línea de contacto, haciéndolos ideales para aplicaciones como bujes de ruedas automotrices.",
        de: "Kegelrollenlager sind speziell dafür ausgelegt, sowohl radiale als auch axiale (Schub-)Lasten gleichzeitig zu bewältigen. Das konische Design ermöglicht es, die Last entlang der Kontaktlinie zu verteilen, was sie ideal für Anwendungen wie Fahrzeugradnaben macht.",
        nl: "Kegellagers zijn specifiek ontworpen om zowel radiale als axiale (schub-)belastingen tegelijkertijd te hanteren. Het conische ontwerp zorgt ervoor dat de belasting verdeeld wordt langs de contactlijn, waardoor ze ideaal zijn voor toepassingen zoals autowielnauen."
      }
    },
    {
      question: {
        en: "What is the primary function of a flywheel in mechanical systems?",
        es: "¿Cuál es la función principal de un volante en sistemas mecánicos?",
        de: "Was ist die Hauptfunktion eines Schwungrads in mechanischen Systemen?",
        nl: "Wat is de primaire functie van een vliegwiel in mechanische systemen?"
      },
      options: [
        { en: "Increase rotational speed", es: "Aumentar la velocidad rotacional", de: "Rotationsgeschwindigkeit erhöhen", nl: "Rotatiesnelheid verhogen" },
        { en: "Store kinetic energy and smooth power fluctuations", es: "Almacenar energía cinética y suavizar fluctuaciones de potencia", de: "Kinetische Energie speichern und Leistungsschwankungen glätten", nl: "Kinetische energie opslaan en vermogensschommelingen egaliseren" },
        { en: "Reduce friction", es: "Reducir fricción", de: "Reibung reduzieren", nl: "Wrijving verminderen" },
        { en: "Convert linear motion to rotational motion", es: "Convertir movimiento lineal a movimiento rotacional", de: "Lineare Bewegung in Rotationsbewegung umwandeln", nl: "Lineaire beweging omzetten naar rotatie" }
      ],
      correct: 1,
      explanation: {
        en: "A flywheel stores kinetic energy during periods of excess energy input and releases it during periods of high demand, smoothing out power fluctuations and maintaining more consistent rotational speed.",
        es: "Un volante almacena energía cinética durante períodos de exceso de entrada de energía y la libera durante períodos de alta demanda, suavizando las fluctuaciones de potencia y manteniendo una velocidad rotacional más consistente.",
        de: "Ein Schwungrad speichert kinetische Energie während Perioden überschüssiger Energiezufuhr und gibt sie während Perioden hoher Nachfrage ab, glättet Leistungsschwankungen und hält eine gleichmäßigere Rotationsgeschwindigkeit aufrecht.",
        nl: "Een vliegwiel slaat kinetische energie op tijdens perioden van overtollige energieinvoer en geeft deze vrij tijdens perioden van hoge vraag, waardoor vermogensschommelingen worden geëgaliseerd en een consistentere rotatiesnelheid wordt gehandhaafd."
      }
    },
    {
      question: {
        en: "In machining, what does the term 'feed rate' refer to?",
        es: "En mecanizado, ¿a qué se refiere el término 'velocidad de avance'?",
        de: "Was bezeichnet der Begriff 'Vorschubgeschwindigkeit' in der Bearbeitung?",
        nl: "Waar verwijst de term 'voedingssnelheid' naar in de bewerkingen?"
      },
      options: [
        { en: "The rotational speed of the spindle", es: "La velocidad rotacional del husillo", de: "Die Rotationsgeschwindigkeit der Spindel", nl: "De rotatiesnelheid van de spindel" },
        { en: "The linear speed of the cutting tool", es: "La velocidad lineal de la herramienta de corte", de: "Die lineare Geschwindigkeit des Schneidwerkzeugs", nl: "De lineaire snelheid van het snijgereedschap" },
        { en: "The rate at which the workpiece or tool advances", es: "La velocidad a la que avanza la pieza de trabajo o herramienta", de: "Die Rate, mit der das Werkstück oder Werkzeug vorschreitet", nl: "De snelheid waarmee het werkstuk of gereedschap vordert" },
        { en: "The cooling fluid flow rate", es: "La velocidad de flujo del fluido de enfriamiento", de: "Die Durchflussmenge der Kühlflüssigkeit", nl: "De stroomsnelheid van de koelvloeistof" }
      ],
      correct: 2,
      explanation: {
        en: "Feed rate refers to the velocity at which the cutting tool advances into the workpiece or the workpiece advances into the tool. It's typically measured in mm/min or inches/min and directly affects surface finish and cutting time.",
        es: "La velocidad de avance se refiere a la velocidad a la que la herramienta de corte avanza hacia la pieza de trabajo o la pieza de trabajo avanza hacia la herramienta. Típicamente se mide en mm/min o pulgadas/min y afecta directamente el acabado superficial y el tiempo de corte.",
        de: "Vorschubgeschwindigkeit bezeichnet die Geschwindigkeit, mit der das Schneidwerkzeug in das Werkstück vordringt oder das Werkstück in das Werkzeug vorgeschoben wird. Sie wird typischerweise in mm/min oder Zoll/min gemessen und beeinflusst direkt die Oberflächengüte und die Schnittzeit.",
        nl: "Voedingssnelheid verwijst naar de snelheid waarmee het snijgereedschap naar het werkstuk beweegt of het werkstuk naar het gereedschap. Het wordt typisch gemeten in mm/min of inches/min en beïnvloedt direct de oppervlakteafwerking en snijdtijd."
      }
    },
    {
      question: {
        en: "What is the main advantage of a helical gear over a straight spur gear?",
        es: "¿Cuál es la principal ventaja de un engranaje helicoidal sobre un engranaje recto?",
        de: "Was ist der Hauptvorteil eines Schrägzahnrads gegenüber einem geraden Stirnrad?",
        nl: "Wat is het hoofdvoordeel van een spiraalvormig tandwiel ten opzichte van een recht tandwiel?"
      },
      options: [
        { en: "Higher speed capability", es: "Mayor capacidad de velocidad", de: "Höhere Geschwindigkeitsfähigkeit", nl: "Hogere snelheidscapaciteit" },
        { en: "Smoother and quieter operation", es: "Funcionamiento más suave y silencioso", de: "Sanfterer und leiserer Betrieb", nl: "Soepelere en stillere werking" },
        { en: "Lower manufacturing cost", es: "Menor costo de fabricación", de: "Niedrigere Herstellungskosten", nl: "Lagere productiekosten" },
        { en: "Simpler installation", es: "Instalación más simple", de: "Einfachere Installation", nl: "Eenvoudigere installatie" }
      ],
      correct: 1,
      explanation: {
        en: "Helical gears have angled teeth that engage gradually, resulting in smoother and quieter operation compared to spur gears where all teeth engage simultaneously. This gradual engagement also provides higher load capacity.",
        es: "Los engranajes helicoidales tienen dientes angulados que se acoplan gradualmente, resultando en una operación más suave y silenciosa comparado con los engranajes rectos donde todos los dientes se acoplan simultáneamente. Este acoplamiento gradual también proporciona mayor capacidad de carga.",
        de: "Schrägzahnräder haben abgewinkelte Zähne, die sich allmählich ineinandergreifen, was zu einem sanfteren und leiseren Betrieb im Vergleich zu Stirnrädern führt, bei denen alle Zähne gleichzeitig eingreifen. Diese allmähliche Verzahnung bietet auch eine höhere Tragfähigkeit.",
        nl: "Spiraalvormige tandwielen hebben hoekige tanden die geleidelijk ingrijpen, wat resulteert in een soepelere en stillere werking vergeleken met rechte tandwielen waar alle tanden tegelijkertijd ingrijpen. Deze geleidelijke ingrepen bieden ook een hogere draagkracht."
      }
    },
    {
      question: {
        en: "What is the Carnot efficiency of a heat engine operating between 300K and 600K?",
        es: "¿Cuál es la eficiencia de Carnot de una máquina térmica que opera entre 300K y 600K?",
        de: "Wie hoch ist der Carnot-Wirkungsgrad einer Wärmekraftmaschine, die zwischen 300K und 600K arbeitet?",
        nl: "Wat is de Carnot-efficiëntie van een warmtemotor die werkt tussen 300K en 600K?"
      },
      options: [
        { en: "25%", es: "25%", de: "25%", nl: "25%" },
        { en: "50%", es: "50%", de: "50%", nl: "50%" },
        { en: "75%", es: "75%", de: "75%", nl: "75%" },
        { en: "100%", es: "100%", de: "100%", nl: "100%" }
      ],
      correct: 1,
      explanation: {
        en: "Carnot efficiency = 1 - (T_cold/T_hot) = 1 - (300K/600K) = 1 - 0.5 = 0.5 or 50%. This represents the theoretical maximum efficiency for any heat engine operating between these temperatures.",
        es: "Eficiencia de Carnot = 1 - (T_frío/T_caliente) = 1 - (300K/600K) = 1 - 0.5 = 0.5 o 50%. Esto representa la eficiencia máxima teórica para cualquier máquina térmica que opere entre estas temperaturas.",
        de: "Carnot-Wirkungsgrad = 1 - (T_kalt/T_heiß) = 1 - (300K/600K) = 1 - 0.5 = 0.5 oder 50%. Dies stellt den theoretischen Höchstwirkungsgrad für jede Wärmekraftmaschine dar, die zwischen diesen Temperaturen arbeitet.",
        nl: "Carnot-efficiëntie = 1 - (T_koud/T_heet) = 1 - (300K/600K) = 1 - 0.5 = 0.5 of 50%. Dit vertegenwoordigt de theoretische maximale efficiëntie voor elke warmtemotor die tussen deze temperaturen werkt."
      }
    },
    {
      question: {
        en: "Which manufacturing process is used to create threads on the inside of a hole?",
        es: "¿Qué proceso de fabricación se usa para crear roscas en el interior de un agujero?",
        de: "Welcher Fertigungsprozess wird verwendet, um Gewinde im Inneren eines Lochs zu erstellen?",
        nl: "Welk fabricageproces wordt gebruikt om schroefdraad aan de binnenkant van een gat te maken?"
      },
      options: [
        { en: "Threading", es: "Roscado", de: "Gewindeschneiden", nl: "Schroefdraad snijden" },
        { en: "Tapping", es: "Roscado con macho", de: "Gewindebohren", nl: "Tappen" },
        { en: "Turning", es: "Torneado", de: "Drehen", nl: "Draaien" },
        { en: "Boring", es: "Mandrinado", de: "Bohren", nl: "Boren" }
      ],
      correct: 1,
      explanation: {
        en: "Tapping is the process of cutting internal threads in a pre-drilled hole using a tap. The tap is a threaded cutting tool that removes material to form the internal thread pattern.",
        es: "El roscado con macho es el proceso de cortar roscas internas en un agujero previamente perforado usando un macho. El macho es una herramienta de corte roscada que remueve material para formar el patrón de rosca interna.",
        de: "Gewindebohren ist der Prozess des Schneidens von Innengewinden in ein vorgebohrtes Loch mit einem Gewindebohrer. Der Gewindebohrer ist ein gewindetes Schneidwerkzeug, das Material entfernt, um das Innengewindemuster zu bilden.",
        nl: "Tappen is het proces van het snijden van interne schroefdraad in een vooraf geboord gat met behulp van een tap. De tap is een draadsnijgereedschap dat materiaal wegneemt om het interne schroefdraadpatroon te vormen."
      }
    },
    {
      question: {
        en: "What is the purpose of a coupling in mechanical systems?",
        es: "¿Cuál es el propósito de un acoplamiento en sistemas mecánicos?",
        de: "Was ist der Zweck einer Kupplung in mechanischen Systemen?",
        nl: "Wat is het doel van een koppeling in mechanische systemen?"
      },
      options: [
        { en: "To increase torque", es: "Para aumentar el torque", de: "Um Drehmoment zu erhöhen", nl: "Om koppel te verhogen" },
        { en: "To connect two shafts and transmit power", es: "Para conectar dos ejes y transmitir potencia", de: "Um zwei Wellen zu verbinden und Leistung zu übertragen", nl: "Om twee assen te verbinden en vermogen over te dragen" },
        { en: "To reduce rotational speed", es: "Para reducir la velocidad rotacional", de: "Um die Rotationsgeschwindigkeit zu reduzieren", nl: "Om rotatiesnelheid te verminderen" },
        { en: "To convert rotational to linear motion", es: "Para convertir movimiento rotacional a lineal", de: "Um Rotations- in Linearbewegung umzuwandeln", nl: "Om rotatie naar lineaire beweging om te zetten" }
      ],
      correct: 1,
      explanation: {
        en: "A coupling connects two shafts together to transmit power from one to the other. Couplings can be rigid (fixed connection) or flexible (allowing for some misalignment and vibration dampening).",
        es: "Un acoplamiento conecta dos ejes juntos para transmitir potencia de uno al otro. Los acoplamientos pueden ser rígidos (conexión fija) o flexibles (permitiendo cierta desalineación y amortiguación de vibraciones).",
        de: "Eine Kupplung verbindet zwei Wellen miteinander, um Leistung von einer zur anderen zu übertragen. Kupplungen können starr (feste Verbindung) oder flexibel (erlaubt etwas Fehlausrichtung und Schwingungsdämpfung) sein.",
        nl: "Een koppeling verbindt twee assen om vermogen van de ene naar de andere over te dragen. Koppelingen kunnen rigide (vaste verbinding) of flexibel zijn (toestaan van enige uitlijningsfout en trillingdemping)."
      }
    },
    {
      question: {
        en: "Which law describes the relationship between shear stress and shear strain in elastic materials?",
        es: "¿Qué ley describe la relación entre el esfuerzo cortante y la deformación cortante en materiales elásticos?",
        de: "Welches Gesetz beschreibt die Beziehung zwischen Scherspannung und Scherverformung in elastischen Materialien?",
        nl: "Welke wet beschrijft de relatie tussen schuifspanning en schuifvervorming in elastische materialen?"
      },
      options: [
        { en: "Hooke's Law", es: "Ley de Hooke", de: "Hooksches Gesetz", nl: "Wet van Hooke" },
        { en: "Newton's Law", es: "Ley de Newton", de: "Newtonsches Gesetz", nl: "Wet van Newton" },
        { en: "Coulomb's Law", es: "Ley de Coulomb", de: "Coulombsches Gesetz", nl: "Wet van Coulomb" },
        { en: "Pascal's Law", es: "Ley de Pascal", de: "Pascalsches Gesetz", nl: "Wet van Pascal" }
      ],
      correct: 0,
      explanation: {
        en: "Hooke's Law states that shear stress is proportional to shear strain within the elastic limit: τ = Gγ, where τ is shear stress, G is the shear modulus, and γ is shear strain.",
        es: "La Ley de Hooke establece que el esfuerzo cortante es proporcional a la deformación cortante dentro del límite elástico: τ = Gγ, donde τ es el esfuerzo cortante, G es el módulo de corte, y γ es la deformación cortante.",
        de: "Das Hooksche Gesetz besagt, dass Scherspannung proportional zur Scherverformung innerhalb der Elastizitätsgrenze ist: τ = Gγ, wobei τ die Scherspannung, G der Schubmodul und γ die Scherverformung ist.",
        nl: "De Wet van Hooke stelt dat schuifspanning evenredig is met schuifvervorming binnen de elastische grens: τ = Gγ, waarbij τ de schuifspanning is, G de schuifmodulus, en γ de schuifvervorming."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using ball screws over lead screws?",
        es: "¿Cuál es la principal ventaja de usar tornillos de bolas sobre tornillos de avance?",
        de: "Was ist der Hauptvorteil der Verwendung von Kugelgewindetrieben gegenüber Gewindetrieben?",
        nl: "Wat is het hoofdvoordeel van het gebruik van kogelspin-dragers boven gewone schroeven?"
      },
      options: [
        { en: "Lower cost", es: "Menor costo", de: "Niedrigere Kosten", nl: "Lagere kosten" },
        { en: "Higher efficiency and reduced friction", es: "Mayor eficiencia y fricción reducida", de: "Höhere Effizienz und reduzierte Reibung", nl: "Hogere efficiëntie en verminderde wrijving" },
        { en: "Simpler manufacturing", es: "Fabricación más simple", de: "Einfachere Herstellung", nl: "Eenvoudigere fabricage" },
        { en: "Better corrosion resistance", es: "Mejor resistencia a la corrosión", de: "Bessere Korrosionsbeständigkeit", nl: "Betere corrosieweerstand" }
      ],
      correct: 1,
      explanation: {
        en: "Ball screws use rolling contact instead of sliding contact, which significantly reduces friction and increases efficiency (typically 85-95% vs 20-80% for lead screws). This results in smoother operation, higher precision, and longer life.",
        es: "Los tornillos de bolas usan contacto rodante en lugar de contacto deslizante, lo que reduce significativamente la fricción y aumenta la eficiencia (típicamente 85-95% vs 20-80% para tornillos de avance). Esto resulta en operación más suave, mayor precisión y vida más larga.",
        de: "Kugelgewindetriebe verwenden Rollkontakt anstatt Gleitkontakt, was die Reibung erheblich reduziert und die Effizienz erhöht (typischerweise 85-95% vs 20-80% für Gewindetriebe). Dies führt zu sanfterem Betrieb, höherer Präzision und längerer Lebensdauer.",
        nl: "Kogelspin-dragers gebruiken rollend contact in plaats van glijdend contact, wat de wrijving aanzienlijk vermindert en de efficiëntie verhoogt (typisch 85-95% vs 20-80% voor gewone schroeven). Dit resulteert in soepelere werking, hogere precisie en langere levensduur."
      }
    },
    {
      question: {
        en: "In a centrifugal pump, what happens to the fluid velocity as it moves from the impeller eye to the outlet?",
        es: "En una bomba centrífuga, ¿qué pasa a la velocidad del fluido cuando se mueve desde el ojo del impulsor hasta la salida?",
        de: "Was passiert mit der Fluidgeschwindigkeit in einer Kreiselpumpe, wenn sie sich vom Laufradauge zum Auslass bewegt?",
        nl: "Wat gebeurt er met de vloeistofsnelheid in een centrifugaalpomp als deze van het waaieroog naar de uitlaat beweegt?"
      },
      options: [
        { en: "Velocity decreases, pressure increases", es: "La velocidad disminuye, la presión aumenta", de: "Geschwindigkeit nimmt ab, Druck steigt", nl: "Snelheid neemt af, druk neemt toe" },
        { en: "Velocity increases, pressure decreases", es: "La velocidad aumenta, la presión disminuye", de: "Geschwindigkeit steigt, Druck nimmt ab", nl: "Snelheid neemt toe, druk neemt af" },
        { en: "Both velocity and pressure increase", es: "Tanto velocidad como presión aumentan", de: "Sowohl Geschwindigkeit als auch Druck steigen", nl: "Zowel snelheid als druk nemen toe" },
        { en: "Both velocity and pressure decrease", es: "Tanto velocidad como presión disminuyen", de: "Sowohl Geschwindigkeit als auch Druck nehmen ab", nl: "Zowel snelheid als druk nemen af" }
      ],
      correct: 0,
      explanation: {
        en: "In a centrifugal pump, the impeller increases the fluid's kinetic energy (velocity). As the high-velocity fluid moves through the volute (discharge casing), the velocity decreases and converts to pressure energy according to Bernoulli's principle.",
        es: "En una bomba centrífuga, el impulsor aumenta la energía cinética del fluido (velocidad). Cuando el fluido de alta velocidad se mueve a través de la voluta (carcasa de descarga), la velocidad disminuye y se convierte en energía de presión según el principio de Bernoulli.",
        de: "In einer Kreiselpumpe erhöht das Laufrad die kinetische Energie (Geschwindigkeit) der Flüssigkeit. Wenn sich die Hochgeschwindigkeitsflüssigkeit durch die Spirale (Druckgehäuse) bewegt, nimmt die Geschwindigkeit ab und wandelt sich nach Bernoullis Prinzip in Druckenergie um.",
        nl: "In een centrifugaalpomp verhoogt de waaier de kinetische energie (snelheid) van de vloeistof. Terwijl de hoge-snelheidsvloeistof door de spiraal (uitlaatbehuizing) beweegt, neemt de snelheid af en wordt omgezet in drukenergie volgens het principe van Bernoulli."
      }
    },
    {
      question: {
        en: "What is the difference between hardness and toughness in materials?",
        es: "¿Cuál es la diferencia entre dureza y tenacidad en materiales?",
        de: "Was ist der Unterschied zwischen Härte und Zähigkeit bei Materialien?",
        nl: "Wat is het verschil tussen hardheid en taaiheid in materialen?"
      },
      options: [
        { en: "Hardness is resistance to scratching, toughness is resistance to impact", es: "La dureza es resistencia al rayado, la tenacidad es resistencia al impacto", de: "Härte ist Widerstand gegen Kratzen, Zähigkeit ist Widerstand gegen Stöße", nl: "Hardheid is weerstand tegen krassen, taaiheid is weerstand tegen impact" },
        { en: "They are the same property", es: "Son la misma propiedad", de: "Sie sind dieselbe Eigenschaft", nl: "Het zijn dezelfde eigenschap" },
        { en: "Hardness is impact resistance, toughness is scratch resistance", es: "La dureza es resistencia al impacto, la tenacidad es resistencia al rayado", de: "Härte ist Stoßfestigkeit, Zähigkeit ist Kratzfestigkeit", nl: "Hardheid is slagweerstand, taaiheid is krasweerstand" },
        { en: "Both measure the same elastic property", es: "Ambas miden la misma propiedad elástica", de: "Beide messen dieselbe elastische Eigenschaft", nl: "Beide meten dezelfde elastische eigenschap" }
      ],
      correct: 0,
      explanation: {
        en: "Hardness is a material's resistance to localized plastic deformation (scratching, indentation). Toughness is a material's ability to absorb energy before fracturing, representing resistance to crack propagation and impact loading.",
        es: "La dureza es la resistencia de un material a la deformación plástica localizada (rayado, indentación). La tenacidad es la capacidad de un material para absorber energía antes de fracturarse, representando resistencia a la propagación de grietas y carga de impacto.",
        de: "Härte ist der Widerstand eines Materials gegen lokale plastische Verformung (Kratzen, Eindringen). Zähigkeit ist die Fähigkeit eines Materials, Energie vor dem Bruch zu absorbieren, und stellt den Widerstand gegen Rissausbreitung und Stoßbelastung dar.",
        nl: "Hardheid is de weerstand van een materiaal tegen gelokaliseerde plastische vervorming (krassen, indrukking). Taaiheid is het vermogen van een materiaal om energie te absorberen voordat het breekt, wat weerstand tegen scheuruitbreiding en slagbelasting vertegenwoordigt."
      }
    },
    {
      question: {
        en: "Which cooling method is most effective for high-speed machining operations?",
        es: "¿Qué método de enfriamiento es más efectivo para operaciones de mecanizado de alta velocidad?",
        de: "Welche Kühlmethode ist am effektivsten für Hochgeschwindigkeitsbearbeitungsoperationen?",
        nl: "Welke koelmethode is het meest effectief voor bewerkingen op hoge snelheid?"
      },
      options: [
        { en: "Flood cooling", es: "Enfriamiento por inundación", de: "Überflutungskühlung", nl: "Overstromingskoeling" },
        { en: "Mist cooling", es: "Enfriamiento por nebulización", de: "Nebelkühlung", nl: "Nevelkoeling" },
        { en: "Air cooling", es: "Enfriamiento por aire", de: "Luftkühlung", nl: "Luchtkoeling" },
        { en: "High-pressure coolant", es: "Refrigerante de alta presión", de: "Hochdruckkühlmittel", nl: "Hogedruk koelmiddel" }
      ],
      correct: 3,
      explanation: {
        en: "High-pressure coolant systems (typically 70-300 bar) are most effective for high-speed machining because they can penetrate the chip-tool interface better, provide superior heat removal, and help with chip evacuation at high cutting speeds.",
        es: "Los sistemas de refrigerante de alta presión (típicamente 70-300 bar) son más efectivos para mecanizado de alta velocidad porque pueden penetrar mejor la interfaz viruta-herramienta, proporcionan superior remoción de calor, y ayudan con la evacuación de virutas a altas velocidades de corte.",
        de: "Hochdruckkühlmittelsysteme (typischerweise 70-300 bar) sind am effektivsten für Hochgeschwindigkeitsbearbeitung, weil sie besser in die Span-Werkzeug-Schnittstelle eindringen können, überlegene Wärmeabfuhr bieten und bei hohen Schnittgeschwindigkeiten bei der Spanabfuhr helfen.",
        nl: "Hogedruk koelmiddelsystemen (typisch 70-300 bar) zijn het meest effectief voor bewerkingen op hoge snelheid omdat ze beter kunnen doordringen in de spaangereedschapinterface, superieure warmteafvoer bieden en helpen bij spaanevacuatie bij hoge snijsnelheden."
      }
    },
    {
      question: {
        en: "What is the purpose of annealing in metal heat treatment?",
        es: "¿Cuál es el propósito del recocido en el tratamiento térmico de metales?",
        de: "Was ist der Zweck des Glühens bei der Wärmebehandlung von Metallen?",
        nl: "Wat is het doel van uitgloeien in warmtebehandeling van metalen?"
      },
      options: [
        { en: "Increase hardness", es: "Aumentar la dureza", de: "Härte erhöhen", nl: "Hardheid verhogen" },
        { en: "Relieve stress and improve ductility", es: "Aliviar estrés y mejorar ductilidad", de: "Spannungen abbauen und Duktilität verbessern", nl: "Spanning verlichten en ductiliteit verbeteren" },
        { en: "Increase strength", es: "Aumentar la resistencia", de: "Festigkeit erhöhen", nl: "Sterkte verhogen" },
        { en: "Improve corrosion resistance", es: "Mejorar resistencia a la corrosión", de: "Korrosionsbeständigkeit verbessern", nl: "Corrosieweerstand verbeteren" }
      ],
      correct: 1,
      explanation: {
        en: "Annealing involves heating metal to a specific temperature and slow cooling to relieve internal stresses, reduce hardness, improve ductility and workability, and refine the grain structure. This makes the metal easier to machine or form.",
        es: "El recocido involucra calentar el metal a una temperatura específica y enfriarlo lentamente para aliviar tensiones internas, reducir dureza, mejorar ductilidad y trabajabilidad, y refinar la estructura de grano. Esto hace que el metal sea más fácil de mecanizar o formar.",
        de: "Glühen beinhaltet das Erhitzen von Metall auf eine bestimmte Temperatur und langsames Abkühlen, um innere Spannungen abzubauen, Härte zu reduzieren, Duktilität und Bearbeitbarkeit zu verbessern und die Kornstruktur zu verfeinern. Dies macht das Metall leichter zu bearbeiten oder zu formen.",
        nl: "Uitgloeien houdt in dat metaal wordt verwarmd tot een specifieke temperatuur en langzaam wordt afgekoeld om interne spanningen te verlichten, hardheid te verminderen, ductiliteit en bewerkbaarheid te verbeteren, en de korrelstructuur te verfijnen. Dit maakt het metaal gemakkelijker te bewerken of te vormen."
      }
    },
    {
      question: {
        en: "In fluid mechanics, what does Reynolds number indicate?",
        es: "En mecánica de fluidos, ¿qué indica el número de Reynolds?",
        de: "Was zeigt die Reynolds-Zahl in der Strömungsmechanik an?",
        nl: "Wat geeft het Reynolds-getal aan in vloeistofmechanica?"
      },
      options: [
        { en: "Flow velocity", es: "Velocidad de flujo", de: "Strömungsgeschwindigkeit", nl: "Stroomsnelheid" },
        { en: "Flow regime (laminar or turbulent)", es: "Régimen de flujo (laminar o turbulento)", de: "Strömungsregime (laminar oder turbulent)", nl: "Stroomregime (laminair of turbulent)" },
        { en: "Fluid density", es: "Densidad del fluido", de: "Fluiddichte", nl: "Vloeistofdichtheid" },
        { en: "Pressure drop", es: "Caída de presión", de: "Druckabfall", nl: "Drukval" }
      ],
      correct: 1,
      explanation: {
        en: "Reynolds number (Re = ρVD/μ) is a dimensionless parameter that predicts flow regime. For pipe flow: Re < 2300 indicates laminar flow, Re > 4000 indicates turbulent flow, and 2300 < Re < 4000 is the transition region.",
        es: "El número de Reynolds (Re = ρVD/μ) es un parámetro adimensional que predice el régimen de flujo. Para flujo en tuberías: Re < 2300 indica flujo laminar, Re > 4000 indica flujo turbulento, y 2300 < Re < 4000 es la región de transición.",
        de: "Die Reynolds-Zahl (Re = ρVD/μ) ist ein dimensionsloser Parameter, der das Strömungsregime vorhersagt. Für Rohrströmung: Re < 2300 zeigt laminare Strömung an, Re > 4000 zeigt turbulente Strömung an, und 2300 < Re < 4000 ist der Übergangsbereich.",
        nl: "Het Reynolds-getal (Re = ρVD/μ) is een dimensieloze parameter die het stroomregime voorspelt. Voor pijpstroming: Re < 2300 duidt op laminaire stroming, Re > 4000 duidt op turbulente stroming, en 2300 < Re < 4000 is het overgangsgebied."
      }
    },
    {
      question: {
        en: "What is the primary function of a steam turbine in power generation?",
        es: "¿Cuál es la función principal de una turbina de vapor en la generación de energía?",
        de: "Was ist die Hauptfunktion einer Dampfturbine bei der Stromerzeugung?",
        nl: "Wat is de primaire functie van een stoomturbine in energieopwekking?"
      },
      options: [
        { en: "Convert thermal energy to kinetic energy", es: "Convertir energía térmica a energía cinética", de: "Thermische Energie in kinetische Energie umwandeln", nl: "Thermische energie omzetten naar kinetische energie" },
        { en: "Convert steam pressure to rotational motion", es: "Convertir presión de vapor a movimiento rotacional", de: "Dampfdruck in Rotationsbewegung umwandeln", nl: "Stoomdruk omzetten naar rotatie" },
        { en: "Generate steam from water", es: "Generar vapor del agua", de: "Dampf aus Wasser erzeugen", nl: "Stoom genereren uit water" },
        { en: "Cool the steam", es: "Enfriar el vapor", de: "Dampf kühlen", nl: "Stoom koelen" }
      ],
      correct: 1,
      explanation: {
        en: "A steam turbine converts the thermal energy and pressure of steam into rotational mechanical energy. The high-pressure steam expands through turbine blades, causing the rotor to spin, which then drives an electrical generator.",
        es: "Una turbina de vapor convierte la energía térmica y presión del vapor en energía mecánica rotacional. El vapor de alta presión se expande a través de los álabes de la turbina, causando que el rotor gire, lo cual luego impulsa un generador eléctrico.",
        de: "Eine Dampfturbine wandelt die thermische Energie und den Druck von Dampf in rotatorische mechanische Energie um. Der Hochdruckdampf expandiert durch Turbinenschaufeln und verursacht, dass sich der Rotor dreht, was dann einen elektrischen Generator antreibt.",
        nl: "Een stoomturbine zet de thermische energie en druk van stoom om in roterende mechanische energie. De hogedrukstoom expandeert door turbinebladen, waardoor de rotor draait, wat vervolgens een elektrische generator aandrijft."
      }
    },
    {
      question: {
        en: "What is the main advantage of using a worm gear system?",
        es: "¿Cuál es la principal ventaja de usar un sistema de engranajes de tornillo sin fin?",
        de: "Was ist der Hauptvorteil der Verwendung eines Schneckentriebs?",
        nl: "Wat is het hoofdvoordeel van het gebruik van een wormtandwielsysteem?"
      },
      options: [
        { en: "High efficiency", es: "Alta eficiencia", de: "Hohe Effizienz", nl: "Hoge efficiëntie" },
        { en: "Low cost", es: "Bajo costo", de: "Niedrige Kosten", nl: "Lage kosten" },
        { en: "High reduction ratio in compact space", es: "Alta relación de reducción en espacio compacto", de: "Hohes Untersetzungsverhältnis auf kompaktem Raum", nl: "Hoge reductieverhouding in compacte ruimte" },
        { en: "Bidirectional operation", es: "Operación bidireccional", de: "Bidirektionaler Betrieb", nl: "Bidirectionele werking" }
      ],
      correct: 2,
      explanation: {
        en: "Worm gears provide very high reduction ratios (typically 10:1 to 100:1) in a compact space with a single gear pair. They also provide self-locking capability when the lead angle is small, preventing back-driving.",
        es: "Los engranajes de tornillo sin fin proporcionan relaciones de reducción muy altas (típicamente 10:1 a 100:1) en un espacio compacto con un solo par de engranajes. También proporcionan capacidad de auto-bloqueo cuando el ángulo de avance es pequeño, previniendo el retroceso.",
        de: "Schneckentriebe bieten sehr hohe Untersetzungsverhältnisse (typischerweise 10:1 bis 100:1) auf kompaktem Raum mit einem einzigen Zahnradpaar. Sie bieten auch Selbsthemmung, wenn der Steigungswinkel klein ist, was Rückantrieb verhindert.",
        nl: "Wormtandwielen bieden zeer hoge reductieverhoudingen (typisch 10:1 tot 100:1) in een compacte ruimte met een enkel tandwielpaar. Ze bieden ook zelfvergrendelend vermogen wanneer de stijgingshoek klein is, waardoor terugdrijven wordt voorkomen."
      }
    },
    {
      question: {
        en: "Which machining operation produces the smoothest surface finish?",
        es: "¿Qué operación de mecanizado produce el acabado superficial más suave?",
        de: "Welche Bearbeitungsoperation erzeugt die glatteste Oberflächengüte?",
        nl: "Welke bewerkingsoperatie produceert de gladste oppervlakteafwerking?"
      },
      options: [
        { en: "Turning", es: "Torneado", de: "Drehen", nl: "Draaien" },
        { en: "Milling", es: "Fresado", de: "Fräsen", nl: "Frezen" },
        { en: "Grinding", es: "Rectificado", de: "Schleifen", nl: "Slijpen" },
        { en: "Drilling", es: "Perforado", de: "Bohren", nl: "Boren" }
      ],
      correct: 2,
      explanation: {
        en: "Grinding typically produces the smoothest surface finish among conventional machining operations because it uses abrasive particles to remove very small amounts of material, resulting in surface roughness values as low as 0.1-0.8 μm Ra.",
        es: "El rectificado típicamente produce el acabado superficial más suave entre las operaciones de mecanizado convencionales porque usa partículas abrasivas para remover cantidades muy pequeñas de material, resultando en valores de rugosidad superficial tan bajos como 0.1-0.8 μm Ra.",
        de: "Schleifen erzeugt typischerweise die glatteste Oberflächengüte unter den konventionellen Bearbeitungsoperationen, weil es abrasive Partikel verwendet, um sehr kleine Materialmengen zu entfernen, was zu Oberflächenrauheitswerten von nur 0,1-0,8 μm Ra führt.",
        nl: "Slijpen produceert typisch de gladste oppervlakteafwerking onder conventionele bewerkingsoperaties omdat het schurende deeltjes gebruikt om zeer kleine hoeveelheden materiaal te verwijderen, wat resulteert in oppervlakteruwheidswaarden zo laag als 0,1-0,8 μm Ra."
      }
    },
    {
      question: {
        en: "What is the purpose of a pressure relief valve in hydraulic systems?",
        es: "¿Cuál es el propósito de una válvula de alivio de presión en sistemas hidráulicos?",
        de: "Was ist der Zweck eines Druckbegrenzungsventils in hydraulischen Systemen?",
        nl: "Wat is het doel van een drukontlastklep in hydraulische systemen?"
      },
      options: [
        { en: "Control flow direction", es: "Controlar dirección de flujo", de: "Strömungsrichtung steuern", nl: "Stroomrichting controleren" },
        { en: "Prevent overpressure and system damage", es: "Prevenir sobrepresión y daño al sistema", de: "Überdruck und Systemschäden verhindern", nl: "Overdruk en systeemschade voorkomen" },
        { en: "Regulate flow rate", es: "Regular velocidad de flujo", de: "Durchflussrate regeln", nl: "Stroomsnelheid regelen" },
        { en: "Filter contamination", es: "Filtrar contaminación", de: "Verunreinigungen filtern", nl: "Verontreiniging filteren" }
      ],
      correct: 1,
      explanation: {
        en: "A pressure relief valve automatically opens when system pressure exceeds a preset limit, allowing excess fluid to return to the reservoir. This prevents dangerous overpressure conditions that could damage components or cause system failure.",
        es: "Una válvula de alivio de presión se abre automáticamente cuando la presión del sistema excede un límite preestablecido, permitiendo que el fluido excedente regrese al reservorio. Esto previene condiciones peligrosas de sobrepresión que podrían dañar componentes o causar falla del sistema.",
        de: "Ein Druckbegrenzungsventil öffnet sich automatisch, wenn der Systemdruck eine voreingestellte Grenze überschreitet, und ermöglicht es überschüssiger Flüssigkeit, zum Behälter zurückzukehren. Dies verhindert gefährliche Überdruckzustände, die Komponenten beschädigen oder Systemausfall verursachen könnten.",
        nl: "Een drukontlastklep opent automatisch wanneer de systeemdruk een vooraf ingestelde limiet overschrijdt, waardoor overtollige vloeistof kan terugkeren naar het reservoir. Dit voorkomt gevaarlijke overdruktoestanden die componenten kunnen beschadigen of systeemfalen kunnen veroorzaken."
      }
    },
    {
      question: {
        en: "Which type of combustion chamber design is most common in modern gasoline engines?",
        es: "¿Qué tipo de diseño de cámara de combustión es más común en motores de gasolina modernos?",
        de: "Welcher Typ von Brennkammerdesign ist am häufigsten in modernen Benzinmotoren?",
        nl: "Welk type verbrandingskamerontwerp is het meest gebruikelijk in moderne benzinemotoren?"
      },
      options: [
        { en: "Wedge chamber", es: "Cámara en cuña", de: "Keilkammer", nl: "Wigkamer" },
        { en: "Hemispherical chamber", es: "Cámara hemisférica", de: "Halbkugelkammer", nl: "Halfronde kamer" },
        { en: "Pentroof chamber", es: "Cámara pentagonal", de: "Pentroof-Kammer", nl: "Pentroof kamer" },
        { en: "Bath-tub chamber", es: "Cámara de bañera", de: "Badewannenkammer", nl: "Badkuipkamer" }
      ],
      correct: 2,
      explanation: {
        en: "Pentroof (or pent-roof) combustion chambers are most common in modern gasoline engines because they allow optimal valve placement, improve breathing efficiency, reduce knock tendency, and provide better flame propagation characteristics.",
        es: "Las cámaras de combustión pentagonales son más comunes en motores de gasolina modernos porque permiten colocación óptima de válvulas, mejoran la eficiencia de respiración, reducen la tendencia al cascabeleo, y proporcionan mejores características de propagación de llama.",
        de: "Pentroof-Brennkammern sind am häufigsten in modernen Benzinmotoren, weil sie optimale Ventilplatzierung ermöglichen, die Atmungseffizienz verbessern, die Klopfneigung reduzieren und bessere Flammenausbreitungseigenschaften bieten.",
        nl: "Pentroof verbrandingskamers zijn het meest gebruikelijk in moderne benzinemotoren omdat ze optimale klepplaatsing mogelijk maken, ademhalingsefficiëntie verbeteren, klopneiging verminderen en betere vlamuitbreidingskenmerken bieden."
      }
    },
    {
      question: {
        en: "What is the main function of a radiator in an automotive cooling system?",
        es: "¿Cuál es la función principal de un radiador en un sistema de enfriamiento automotriz?",
        de: "Was ist die Hauptfunktion eines Kühlers in einem Fahrzeugkühlsystem?",
        nl: "Wat is de hoofdfunctie van een radiator in een auto koelsysteem?"
      },
      options: [
        { en: "Heat the coolant", es: "Calentar el refrigerante", de: "Kühlmittel erwärmen", nl: "Koelvloeistof verwarmen" },
        { en: "Circulate the coolant", es: "Circular el refrigerante", de: "Kühlmittel zirkulieren", nl: "Koelvloeistof circuleren" },
        { en: "Dissipate heat from coolant to air", es: "Disipar calor del refrigerante al aire", de: "Wärme vom Kühlmittel an die Luft abgeben", nl: "Warmte van koelvloeistof naar lucht afvoeren" },
        { en: "Store excess coolant", es: "Almacenar refrigerante excedente", de: "Überschüssiges Kühlmittel speichern", nl: "Overtollige koelvloeistof opslaan" }
      ],
      correct: 2,
      explanation: {
        en: "The radiator's main function is to dissipate heat from the hot coolant to the surrounding air. It uses a large surface area of thin tubes and fins to maximize heat transfer, with airflow (natural or forced) removing the heat.",
        es: "La función principal del radiador es disipar calor del refrigerante caliente al aire circundante. Usa una gran área superficial de tubos delgados y aletas para maximizar la transferencia de calor, con flujo de aire (natural o forzado) removiendo el calor.",
        de: "Die Hauptfunktion des Kühlers ist es, Wärme vom heißen Kühlmittel an die umgebende Luft abzugeben. Er verwendet eine große Oberfläche aus dünnen Rohren und Rippen, um die Wärmeübertragung zu maximieren, wobei Luftstrom (natürlich oder erzwungen) die Wärme abführt.",
        nl: "De hoofdfunctie van de radiator is warmte van de hete koelvloeistof naar de omringende lucht af te voeren. Het gebruikt een groot oppervlak van dunne buizen en lamellen om warmteoverdracht te maximaliseren, met luchtstroom (natuurlijk of geforceerd) die de warmte wegvoert."
      }
    },
    {
      question: {
        en: "In quality control, what does Six Sigma represent?",
        es: "En control de calidad, ¿qué representa Six Sigma?",
        de: "Was stellt Six Sigma in der Qualitätskontrolle dar?",
        nl: "Wat vertegenwoordigt Six Sigma in kwaliteitscontrole?"
      },
      options: [
        { en: "6 defects per million opportunities", es: "6 defectos por millón de oportunidades", de: "6 Fehler pro Million Gelegenheiten", nl: "6 defecten per miljoen kansen" },
        { en: "3.4 defects per million opportunities", es: "3.4 defectos por millón de oportunidades", de: "3,4 Fehler pro Million Gelegenheiten", nl: "3,4 defecten per miljoen kansen" },
        { en: "60 defects per million opportunities", es: "60 defectos por millón de oportunidades", de: "60 Fehler pro Million Gelegenheiten", nl: "60 defecten per miljoen kansen" },
        { en: "0.34 defects per million opportunities", es: "0.34 defectos por millón de oportunidades", de: "0,34 Fehler pro Million Gelegenheiten", nl: "0,34 defecten per miljoen kansen" }
      ],
      correct: 1,
      explanation: {
        en: "Six Sigma represents a quality level of 3.4 defects per million opportunities (DPMO). This corresponds to 99.9966% defect-free production, achieved when the process operates within 6 standard deviations of the mean.",
        es: "Six Sigma representa un nivel de calidad de 3.4 defectos por millón de oportunidades (DPMO). Esto corresponde a 99.9966% de producción libre de defectos, logrado cuando el proceso opera dentro de 6 desviaciones estándar de la media.",
        de: "Six Sigma stellt ein Qualitätsniveau von 3,4 Fehlern pro Million Gelegenheiten (DPMO) dar. Dies entspricht 99,9966% fehlerfreier Produktion, erreicht wenn der Prozess innerhalb von 6 Standardabweichungen vom Mittelwert arbeitet.",
        nl: "Six Sigma vertegenwoordigt een kwaliteitsniveau van 3,4 defecten per miljoen kansen (DPMO). Dit komt overeen met 99,9966% defectvrije productie, bereikt wanneer het proces binnen 6 standaardafwijkingen van het gemiddelde werkt."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using CAD (Computer-Aided Design) in mechanical engineering?",
        es: "¿Cuál es la principal ventaja de usar CAD (Diseño Asistido por Computadora) en ingeniería mecánica?",
        de: "Was ist der Hauptvorteil der Verwendung von CAD (Computer-Aided Design) im Maschinenbau?",
        nl: "Wat is het hoofdvoordeel van het gebruik van CAD (Computer-Aided Design) in werktuigbouwkunde?"
      },
      options: [
        { en: "Reduced material costs", es: "Costos de materiales reducidos", de: "Reduzierte Materialkosten", nl: "Verminderde materiaalkosten" },
        { en: "Improved design accuracy and faster iterations", es: "Precisión de diseño mejorada e iteraciones más rápidas", de: "Verbesserte Designgenauigkeit und schnellere Iterationen", nl: "Verbeterde ontwerpnauwkeurigheid en snellere iteraties" },
        { en: "Elimination of prototyping", es: "Eliminación de prototipos", de: "Eliminierung von Prototyping", nl: "Eliminatie van prototyping" },
        { en: "Automatic manufacturing", es: "Fabricación automática", de: "Automatische Fertigung", nl: "Automatische fabricage" }
      ],
      correct: 1,
      explanation: {
        en: "CAD systems provide improved design accuracy through precise geometric modeling, faster design iterations through easy modifications, better visualization, simulation capabilities, and automated drawing generation, significantly reducing design time and errors.",
        es: "Los sistemas CAD proporcionan precisión de diseño mejorada a través del modelado geométrico preciso, iteraciones de diseño más rápidas a través de modificaciones fáciles, mejor visualización, capacidades de simulación, y generación automática de dibujos, reduciendo significativamente el tiempo de diseño y errores.",
        de: "CAD-Systeme bieten verbesserte Designgenauigkeit durch präzise geometrische Modellierung, schnellere Design-Iterationen durch einfache Modifikationen, bessere Visualisierung, Simulationsfähigkeiten und automatisierte Zeichnungserstellung, was Design-Zeit und Fehler erheblich reduziert.",
        nl: "CAD-systemen bieden verbeterde ontwerpnauwkeurigheid door nauwkeurige geometrische modellering, snellere ontwerpiteraties door eenvoudige wijzigingen, betere visualisatie, simulatiemogelijkheden en geautomatiseerde tekeningingeneratie, wat ontwerptijd en fouten aanzienlijk vermindert."
      }
    },
    {
      question: {
        en: "Which lubrication method is best for high-speed, high-temperature applications?",
        es: "¿Qué método de lubricación es mejor para aplicaciones de alta velocidad y alta temperatura?",
        de: "Welche Schmiermethode ist am besten für Hochgeschwindigkeits-, Hochtemperatur-Anwendungen?",
        nl: "Welke smeeringsmethode is het best voor hoge snelheid, hoge temperatuur toepassingen?"
      },
      options: [
        { en: "Grease lubrication", es: "Lubricación con grasa", de: "Fettschmierung", nl: "Vetsmering" },
        { en: "Oil bath lubrication", es: "Lubricación por baño de aceite", de: "Ölbadschmierung", nl: "Oliebadsmering" },
        { en: "Oil mist lubrication", es: "Lubricación por niebla de aceite", de: "Ölnebelschmierung", nl: "Olienevelsmering" },
        { en: "Solid lubrication", es: "Lubricación sólida", de: "Festschmierung", nl: "Vaste smering" }
      ],
      correct: 2,
      explanation: {
        en: "Oil mist lubrication is ideal for high-speed, high-temperature applications because it provides continuous, precise oil delivery while the air flow helps cool the components. The mist penetrates better than other methods and doesn't accumulate like grease.",
        es: "La lubricación por niebla de aceite es ideal para aplicaciones de alta velocidad y alta temperatura porque proporciona entrega continua y precisa de aceite mientras el flujo de aire ayuda a enfriar los componentes. La niebla penetra mejor que otros métodos y no se acumula como la grasa.",
        de: "Ölnebelschmierung ist ideal für Hochgeschwindigkeits-, Hochtemperatur-Anwendungen, weil sie kontinuierliche, präzise Ölzufuhr bietet, während der Luftstrom hilft, die Komponenten zu kühlen. Der Nebel dringt besser ein als andere Methoden und sammelt sich nicht wie Fett an.",
        nl: "Olienevelsmering is ideaal voor hoge snelheid, hoge temperatuur toepassingen omdat het continue, precieze olielevering biedt terwijl de luchtstroom helpt de componenten te koelen. De nevel dringt beter door dan andere methoden en accumuleert niet zoals vet."
      }
    },
    {
      question: {
        en: "What is the main purpose of a differential in automotive systems?",
        es: "¿Cuál es el propósito principal de un diferencial en sistemas automotrices?",
        de: "Was ist der Hauptzweck eines Differentials in Fahrzeugsystemen?",
        nl: "Wat is het hoofddoel van een differentieel in auto-systemen?"
      },
      options: [
        { en: "Increase engine power", es: "Aumentar potencia del motor", de: "Motorleistung erhöhen", nl: "Motorvermogen verhogen" },
        { en: "Allow wheels to rotate at different speeds while cornering", es: "Permitir que las ruedas roten a diferentes velocidades al girar", de: "Rädern erlauben, bei Kurvenfahrt mit unterschiedlichen Geschwindigkeiten zu drehen", nl: "Wielen toestaan om met verschillende snelheden te draaien bij het nemen van bochten" },
        { en: "Reduce fuel consumption", es: "Reducir consumo de combustible", de: "Kraftstoffverbrauch reduzieren", nl: "Brandstofverbruik verminderen" },
        { en: "Improve braking performance", es: "Mejorar rendimiento de frenado", de: "Bremsleistung verbessern", nl: "Remprestaties verbeteren" }
      ],
      correct: 1,
      explanation: {
        en: "A differential allows the driving wheels to rotate at different speeds while turning corners. The outer wheel travels a longer path and must rotate faster than the inner wheel. Without a differential, tire wear and handling would be poor.",
        es: "Un diferencial permite que las ruedas motrices roten a diferentes velocidades al tomar curvas. La rueda exterior viaja un camino más largo y debe rotar más rápido que la rueda interior. Sin diferencial, el desgaste de neumáticos y manejo serían pobres.",
        de: "Ein Differential ermöglicht es den Antriebsrädern, bei Kurvenfahrt mit unterschiedlichen Geschwindigkeiten zu drehen. Das äußere Rad legt einen längeren Weg zurück und muss schneller drehen als das innere Rad. Ohne Differential wären Reifenverschleiß und Handling schlecht.",
        nl: "Een differentieel stelt de aandrijfwielen in staat om met verschillende snelheden te draaien bij het nemen van bochten. Het buitenste wiel legt een langere afstand af en moet sneller draaien dan het binnenste wiel. Zonder differentieel zouden bandslijtage en handling slecht zijn."
      }
    },
    {
      question: {
        en: "Which type of stress concentration factor has the most significant effect on fatigue life?",
        es: "¿Qué tipo de factor de concentración de estrés tiene el efecto más significativo en la vida por fatiga?",
        de: "Welcher Typ von Spannungskonzentrationsfaktor hat den signifikantesten Effekt auf die Ermüdungslebensdauer?",
        nl: "Welk type spanningsconcentratiefactor heeft het meest significante effect op vermoeidheidslevensduur?"
      },
      options: [
        { en: "Gradual diameter changes", es: "Cambios graduales de diámetro", de: "Allmähliche Durchmesseränderungen", nl: "Geleidelijke diameterveranderingen" },
        { en: "Sharp corners and notches", es: "Esquinas agudas y muescas", de: "Scharfe Ecken und Kerben", nl: "Scherpe hoeken en inkepingen" },
        { en: "Smooth surfaces", es: "Superficies lisas", de: "Glatte Oberflächen", nl: "Gladde oppervlakken" },
        { en: "Large radius fillets", es: "Filetes de radio grande", de: "Große Radiusrundungen", nl: "Grote straal afronding" }
      ],
      correct: 1,
      explanation: {
        en: "Sharp corners and notches create the highest stress concentrations, which significantly reduce fatigue life. These geometric discontinuities can increase local stress by 3-10 times the nominal stress, making them critical crack initiation sites.",
        es: "Las esquinas agudas y muescas crean las concentraciones de estrés más altas, lo que reduce significativamente la vida por fatiga. Estas discontinuidades geométricas pueden aumentar el estrés local de 3-10 veces el estrés nominal, haciéndolas sitios críticos de iniciación de grietas.",
        de: "Scharfe Ecken und Kerben erzeugen die höchsten Spannungskonzentrationen, was die Ermüdungslebensdauer erheblich reduziert. Diese geometrischen Diskontinuitäten können lokale Spannungen um das 3-10-fache der Nennspannung erhöhen und machen sie zu kritischen Rissinitiationsstellen.",
        nl: "Scherpe hoeken en inkepingen creëren de hoogste spanningsconcentraties, wat de vermoeidheidslevensduur aanzienlijk vermindert. Deze geometrische discontinuïteiten kunnen lokale spanning met 3-10 keer de nominale spanning verhogen, waardoor ze kritieke scheurinitiatieplekken worden."
      }
    },
    {
      question: {
        en: "What is the primary function of a clutch in mechanical power transmission?",
        es: "¿Cuál es la función principal de un embrague en la transmisión de potencia mecánica?",
        de: "Was ist die Hauptfunktion einer Kupplung in der mechanischen Kraftübertragung?",
        nl: "Wat is de primaire functie van een koppeling in mechanische krachtoverbrenging?"
      },
      options: [
        { en: "Increase torque", es: "Aumentar torque", de: "Drehmoment erhöhen", nl: "Koppel verhogen" },
        { en: "Engage and disengage power transmission", es: "Acoplar y desacoplar transmisión de potencia", de: "Kraftübertragung ein- und auskuppeln", nl: "Krachtoverbrenging in- en uitschakelen" },
        { en: "Change rotation direction", es: "Cambiar dirección de rotación", de: "Rotationsrichtung ändern", nl: "Rotatierichting veranderen" },
        { en: "Reduce vibration", es: "Reducir vibración", de: "Vibration reduzieren", nl: "Trillingen verminderen" }
      ],
      correct: 1,
      explanation: {
        en: "A clutch's primary function is to engage and disengage power transmission between the engine and transmission system. This allows starting the engine without load, changing gears, and controlling power delivery to the wheels.",
        es: "La función principal de un embrague es acoplar y desacoplar la transmisión de potencia entre el motor y el sistema de transmisión. Esto permite arrancar el motor sin carga, cambiar velocidades, y controlar la entrega de potencia a las ruedas.",
        de: "Die Hauptfunktion einer Kupplung ist es, die Kraftübertragung zwischen Motor und Getriebesystem ein- und auszukuppeln. Dies ermöglicht das Starten des Motors ohne Last, das Schalten von Gängen und die Kontrolle der Kraftübertragung zu den Rädern.",
        nl: "De primaire functie van een koppeling is het in- en uitschakelen van krachtoverbrenging tussen de motor en het transmissiesysteem. Dit maakt het mogelijk de motor zonder belasting te starten, versnellingen te wisselen en krachtoverbrenging naar de wielen te controleren."
      }
    },
    {
      question: {
        en: "In CNC machining, what does 'G-code' control?",
        es: "En mecanizado CNC, ¿qué controla el 'código G'?",
        de: "Was steuert 'G-Code' in der CNC-Bearbeitung?",
        nl: "Wat bestuurt 'G-code' in CNC-bewerking?"
      },
      options: [
        { en: "Tool selection", es: "Selección de herramienta", de: "Werkzeugauswahl", nl: "Gereedschapselectie" },
        { en: "Machine motion and operations", es: "Movimiento de máquina y operaciones", de: "Maschinenbewegung und -operationen", nl: "Machinebeweging en -operaties" },
        { en: "Spindle speed only", es: "Solo velocidad del husillo", de: "Nur Spindeldrehzahl", nl: "Alleen spindelsnelheid" },
        { en: "Coolant flow", es: "Flujo de refrigerante", de: "Kühlmittelfluss", nl: "Koelmiddelstroom" }
      ],
      correct: 1,
      explanation: {
        en: "G-code (geometric code) controls machine motion and operations such as linear interpolation, circular interpolation, tool positioning, drilling cycles, and coordinate system selection. It defines the toolpath and machining operations.",
        es: "El código G (código geométrico) controla el movimiento de la máquina y operaciones como interpolación lineal, interpolación circular, posicionamiento de herramienta, ciclos de perforación, y selección de sistema de coordenadas. Define la trayectoria de herramienta y operaciones de mecanizado.",
        de: "G-Code (geometrischer Code) steuert Maschinenbewegung und -operationen wie lineare Interpolation, Kreisinterpolation, Werkzeugpositionierung, Bohrzyklen und Koordinatensystemauswahl. Er definiert den Werkzeugweg und Bearbeitungsoperationen.",
        nl: "G-code (geometrische code) bestuurt machinebeweging en -operaties zoals lineaire interpolatie, circulaire interpolatie, gereedschapspositionering, boorcycli en coördinaatsysteemkeuze. Het definieert het gereedschapspad en bewerkingsoperaties."
      }
    },
    {
      question: {
        en: "What is the main advantage of using composite materials in mechanical applications?",
        es: "¿Cuál es la principal ventaja de usar materiales compuestos en aplicaciones mecánicas?",
        de: "Was ist der Hauptvorteil der Verwendung von Verbundwerkstoffen in mechanischen Anwendungen?",
        nl: "Wat is het hoofdvoordeel van het gebruik van composietmaterialen in mechanische toepassingen?"
      },
      options: [
        { en: "Lower cost", es: "Menor costo", de: "Niedrigere Kosten", nl: "Lagere kosten" },
        { en: "High strength-to-weight ratio", es: "Alta relación resistencia-peso", de: "Hohes Festigkeits-Gewichts-Verhältnis", nl: "Hoge sterkte-gewichtsverhouding" },
        { en: "Easy manufacturing", es: "Fabricación fácil", de: "Einfache Herstellung", nl: "Eenvoudige fabricage" },
        { en: "High electrical conductivity", es: "Alta conductividad eléctrica", de: "Hohe elektrische Leitfähigkeit", nl: "Hoge elektrische geleidbaarheid" }
      ],
      correct: 1,
      explanation: {
        en: "Composite materials offer excellent strength-to-weight ratios, often surpassing traditional materials like steel and aluminum. This makes them ideal for applications where weight reduction is critical, such as aerospace, automotive, and sports equipment.",
        es: "Los materiales compuestos ofrecen excelentes relaciones resistencia-peso, a menudo superando materiales tradicionales como acero y aluminio. Esto los hace ideales para aplicaciones donde la reducción de peso es crítica, como aeroespacial, automotriz y equipos deportivos.",
        de: "Verbundwerkstoffe bieten ausgezeichnete Festigkeits-Gewichts-Verhältnisse und übertreffen oft traditionelle Materialien wie Stahl und Aluminium. Dies macht sie ideal für Anwendungen, wo Gewichtsreduzierung kritisch ist, wie Luft- und Raumfahrt, Automobil und Sportausrüstung.",
        nl: "Composietmaterialen bieden uitstekende sterkte-gewichtsverhoudingen, vaak beter dan traditionele materialen zoals staal en aluminium. Dit maakt ze ideaal voor toepassingen waar gewichtsreductie cruciaal is, zoals luchtvaart, automotive en sportuitrusting."
      }
    },
    {
      question: {
        en: "Which heat treatment process increases the hardness of steel?",
        es: "¿Qué proceso de tratamiento térmico aumenta la dureza del acero?",
        de: "Welcher Wärmebehandlungsprozess erhöht die Härte von Stahl?",
        nl: "Welk warmtebehandelingsproces verhoogt de hardheid van staal?"
      },
      options: [
        { en: "Annealing", es: "Recocido", de: "Glühen", nl: "Uitgloeien" },
        { en: "Tempering", es: "Templado", de: "Anlassen", nl: "Temperen" },
        { en: "Quenching", es: "Temple", de: "Abschrecken", nl: "Harden" },
        { en: "Normalizing", es: "Normalizado", de: "Normalisieren", nl: "Normaliseren" }
      ],
      correct: 2,
      explanation: {
        en: "Quenching involves rapid cooling of heated steel (usually in water or oil) to form martensite, a hard but brittle microstructure. This dramatically increases hardness but is often followed by tempering to reduce brittleness.",
        es: "El temple involucra enfriamiento rápido del acero calentado (usualmente en agua o aceite) para formar martensita, una microestructura dura pero frágil. Esto aumenta dramáticamente la dureza pero a menudo es seguido por templado para reducir la fragilidad.",
        de: "Abschrecken beinhaltet schnelles Abkühlen von erhitztem Stahl (meist in Wasser oder Öl), um Martensit zu bilden, ein hartes aber sprödes Gefüge. Dies erhöht die Härte dramatisch, wird aber oft von Anlassen gefolgt, um Sprödigkeit zu reduzieren.",
        nl: "Harden houdt snelle afkoeling van verhit staal in (meestal in water of olie) om martensiet te vormen, een harde maar brosse microstructuur. Dit verhoogt de hardheid dramatisch maar wordt vaak gevolgd door temperen om brosheid te verminderen."
      }
    },
    {
      question: {
        en: "What is the purpose of a universal joint (U-joint) in mechanical systems?",
        es: "¿Cuál es el propósito de una junta universal (junta U) en sistemas mecánicos?",
        de: "Was ist der Zweck eines Universalgelenks (Kreuzgelenk) in mechanischen Systemen?",
        nl: "Wat is het doel van een kruiskoppeling (kruisgewricht) in mechanische systemen?"
      },
      options: [
        { en: "Increase rotational speed", es: "Aumentar velocidad rotacional", de: "Rotationsgeschwindigkeit erhöhen", nl: "Rotatiesnelheid verhogen" },
        { en: "Transmit power between shafts at an angle", es: "Transmitir potencia entre ejes en ángulo", de: "Leistung zwischen abgewinkelten Wellen übertragen", nl: "Vermogen overdragen tussen assen onder een hoek" },
        { en: "Reduce vibration", es: "Reducir vibración", de: "Vibration reduzieren", nl: "Trillingen verminderen" },
        { en: "Filter contamination", es: "Filtrar contaminación", de: "Verunreinigungen filtern", nl: "Verontreiniging filteren" }
      ],
      correct: 1,
      explanation: {
        en: "A universal joint allows the transmission of rotational power between two shafts that are not in perfect alignment, typically at angles up to 45°. It's commonly used in automotive drive shafts and industrial applications where shaft alignment varies.",
        es: "Una junta universal permite la transmisión de potencia rotacional entre dos ejes que no están en alineación perfecta, típicamente en ángulos hasta 45°. Se usa comúnmente en ejes de transmisión automotriz y aplicaciones industriales donde la alineación del eje varía.",
        de: "Ein Universalgelenk ermöglicht die Übertragung von Rotationsleistung zwischen zwei Wellen, die nicht perfekt ausgerichtet sind, typischerweise bei Winkeln bis zu 45°. Es wird häufig in Fahrzeugantriebswellen und industriellen Anwendungen verwendet, wo die Wellenausrichtung variiert.",
        nl: "Een kruiskoppeling maakt de overdracht van rotatievermogen mogelijk tussen twee assen die niet perfect uitgelijnd zijn, typisch bij hoeken tot 45°. Het wordt vaak gebruikt in auto aandrijfassen en industriële toepassingen waar asuitlijning varieert."
      }
    },
    {
      question: {
        en: "In robotics, what does DOF stand for?",
        es: "En robótica, ¿qué significa DOF?",
        de: "Was bedeutet DOF in der Robotik?",
        nl: "Wat betekent DOF in de robotica?"
      },
      options: [
        { en: "Digital Output Function", es: "Función de Salida Digital", de: "Digitale Ausgangsfunktion", nl: "Digitale Uitgangsfunctie" },
        { en: "Degrees of Freedom", es: "Grados de Libertad", de: "Freiheitsgrade", nl: "Vrijheidsgraden" },
        { en: "Dynamic Operating Force", es: "Fuerza Operativa Dinámica", de: "Dynamische Betriebskraft", nl: "Dynamische Werkingskracht" },
        { en: "Depth of Field", es: "Profundidad de Campo", de: "Schärfentiefe", nl: "Scherptediepte" }
      ],
      correct: 1,
      explanation: {
        en: "DOF stands for Degrees of Freedom, which refers to the number of independent ways a robot can move. A typical industrial robot arm has 6 DOF: three for position (x, y, z) and three for orientation (roll, pitch, yaw).",
        es: "DOF significa Grados de Libertad, que se refiere al número de formas independientes en que un robot puede moverse. Un brazo robótico industrial típico tiene 6 DOF: tres para posición (x, y, z) y tres para orientación (alabeo, cabeceo, guiñada).",
        de: "DOF steht für Freiheitsgrade, was sich auf die Anzahl der unabhängigen Bewegungsmöglichkeiten eines Roboters bezieht. Ein typischer Industrieroboterarm hat 6 DOF: drei für Position (x, y, z) und drei für Orientierung (Roll, Pitch, Yaw).",
        nl: "DOF staat voor Vrijheidsgraden, wat verwijst naar het aantal onafhankelijke manieren waarop een robot kan bewegen. Een typische industriële robotarm heeft 6 DOF: drie voor positie (x, y, z) en drie voor oriëntatie (rol, pitch, yaw)."
      }
    },
    {
      question: {
        en: "What is the main advantage of planetary gear systems?",
        es: "¿Cuál es la principal ventaja de los sistemas de engranajes planetarios?",
        de: "Was ist der Hauptvorteil von Planetengetriebesystemen?",
        nl: "Wat is het hoofdvoordeel van planetaire tandwielsystemen?"
      },
      options: [
        { en: "Low cost", es: "Bajo costo", de: "Niedrige Kosten", nl: "Lage kosten" },
        { en: "Simple design", es: "Diseño simple", de: "Einfaches Design", nl: "Eenvoudig ontwerp" },
        { en: "High torque density and multiple ratios", es: "Alta densidad de torque y múltiples relaciones", de: "Hohe Drehmomentdichte und mehrere Übersetzungen", nl: "Hoge koppeldichtheid en meerdere verhoudingen" },
        { en: "Low maintenance", es: "Bajo mantenimiento", de: "Geringer Wartungsaufwand", nl: "Laag onderhoud" }
      ],
      correct: 2,
      explanation: {
        en: "Planetary gear systems provide high torque density (more torque in a compact space) and can achieve multiple gear ratios by controlling which component (sun, planets, or ring) is the input, output, or held stationary. They're widely used in automatic transmissions and high-performance applications.",
        es: "Los sistemas de engranajes planetarios proporcionan alta densidad de torque (más torque en un espacio compacto) y pueden lograr múltiples relaciones de engranajes controlando qué componente (sol, planetas, o anillo) es la entrada, salida, o se mantiene estacionario. Se usan ampliamente en transmisiones automáticas y aplicaciones de alto rendimiento.",
        de: "Planetengetriebesysteme bieten hohe Drehmomentdichte (mehr Drehmoment auf kompaktem Raum) und können mehrere Übersetzungsverhältnisse erreichen, indem kontrolliert wird, welche Komponente (Sonnenrad, Planeten oder Hohlrad) Eingang, Ausgang oder feststehend ist. Sie werden weithin in Automatikgetrieben und Hochleistungsanwendungen verwendet.",
        nl: "Planetaire tandwielsystemen bieden hoge koppeldichtheid (meer koppel in een compacte ruimte) en kunnen meerdere tandwielverhoudingen bereiken door te controleren welk component (zon, planeten, of ring) de ingang, uitgang, of stilstaand gehouden wordt. Ze worden veel gebruikt in automatische transmissies en hoge-prestatie toepassingen."
      }
    },
    {
      question: {
        en: "What is the primary purpose of a pressure gauge in mechanical systems?",
        es: "¿Cuál es el propósito principal de un manómetro en sistemas mecánicos?",
        de: "Was ist der Hauptzweck eines Druckmessers in mechanischen Systemen?",
        nl: "Wat is het primaire doel van een drukmeter in mechanische systemen?"
      },
      options: [
        { en: "Control flow rate", es: "Controlar velocidad de flujo", de: "Durchflussmenge steuern", nl: "Stroomsnelheid controleren" },
        { en: "Monitor system pressure", es: "Monitorear presión del sistema", de: "Systemdruck überwachen", nl: "Systeemdruk bewaken" },
        { en: "Filter contaminants", es: "Filtrar contaminantes", de: "Verunreinigungen filtern", nl: "Verontreinigingen filteren" },
        { en: "Regulate temperature", es: "Regular temperatura", de: "Temperatur regeln", nl: "Temperatuur regelen" }
      ],
      correct: 1,
      explanation: {
        en: "A pressure gauge primarily monitors and displays system pressure, allowing operators to ensure the system operates within safe and efficient pressure ranges. This helps prevent overpressure conditions and diagnose system problems.",
        es: "Un manómetro principalmente monitorea y muestra la presión del sistema, permitiendo a los operadores asegurar que el sistema opere dentro de rangos de presión seguros y eficientes. Esto ayuda a prevenir condiciones de sobrepresión y diagnosticar problemas del sistema.",
        de: "Ein Druckmesser überwacht und zeigt hauptsächlich den Systemdruck an, wodurch Bediener sicherstellen können, dass das System innerhalb sicherer und effizienter Druckbereiche arbeitet. Dies hilft, Überdruckzustände zu verhindern und Systemprobleme zu diagnostizieren.",
        nl: "Een drukmeter bewaakt en toont voornamelijk systeemdruk, waardoor operators kunnen zorgen dat het systeem binnen veilige en efficiënte drukbereiken werkt. Dit helpt overdruktoestanden te voorkomen en systeemproblemen te diagnosticeren."
      }
    },
    {
      question: {
        en: "What is the efficiency formula for a heat engine operating between two thermal reservoirs?",
        es: "¿Cuál es la fórmula de eficiencia para un motor térmico operando entre dos reservorios térmicos?",
        de: "Wie lautet die Effizienzformel für eine Wärmekraftmaschine, die zwischen zwei Wärmereservoirs arbeitet?",
        nl: "Wat is de efficiëntieformule voor een warmtemotor die werkt tussen twee thermische reservoirs?"
      },
      options: [
        { en: "η = 1 - Qc/Qh", es: "η = 1 - Qc/Qh", de: "η = 1 - Qc/Qh", nl: "η = 1 - Qc/Qh" },
        { en: "η = Qh/Qc", es: "η = Qh/Qc", de: "η = Qh/Qc", nl: "η = Qh/Qc" },
        { en: "η = W/(Qh + Qc)", es: "η = W/(Qh + Qc)", de: "η = W/(Qh + Qc)", nl: "η = W/(Qh + Qc)" },
        { en: "η = (Qh - Qc)/W", es: "η = (Qh - Qc)/W", de: "η = (Qh - Qc)/W", nl: "η = (Qh - Qc)/W" }
      ],
      correct: 0,
      explanation: {
        en: "Heat engine efficiency is η = 1 - Qc/Qh, where Qc is heat rejected to the cold reservoir and Qh is heat absorbed from the hot reservoir. This represents the fraction of input heat converted to work.",
        es: "La eficiencia del motor térmico es η = 1 - Qc/Qh, donde Qc es el calor rechazado al reservorio frío y Qh es el calor absorbido del reservorio caliente. Esto representa la fracción de calor de entrada convertida a trabajo.",
        de: "Der Wirkungsgrad einer Wärmekraftmaschine ist η = 1 - Qc/Qh, wobei Qc die an das kalte Reservoir abgegebene Wärme und Qh die vom heißen Reservoir aufgenommene Wärme ist. Dies stellt den Anteil der Eingangswärme dar, der in Arbeit umgewandelt wird.",
        nl: "Warmtemotor efficiëntie is η = 1 - Qc/Qh, waarbij Qc warmte afgestoten naar het koude reservoir is en Qh warmte geabsorbeerd van het hete reservoir. Dit vertegenwoordigt het deel van ingangswarmte omgezet naar werk."
      }
    },
    {
      question: {
        en: "Which manufacturing process involves removing material to achieve desired shape and dimensions?",
        es: "¿Qué proceso de manufactura involucra remover material para lograr la forma y dimensiones deseadas?",
        de: "Welcher Fertigungsprozess beinhaltet das Entfernen von Material, um gewünschte Form und Abmessungen zu erreichen?",
        nl: "Welk productieproces behelst het verwijderen van materiaal om gewenste vorm en afmetingen te bereiken?"
      },
      options: [
        { en: "Casting", es: "Fundición", de: "Gießen", nl: "Gieten" },
        { en: "Forging", es: "Forjado", de: "Schmieden", nl: "Smeden" },
        { en: "Machining", es: "Mecanizado", de: "Zerspanung", nl: "Bewerkingen" },
        { en: "Welding", es: "Soldadura", de: "Schweißen", nl: "Lassen" }
      ],
      correct: 2,
      explanation: {
        en: "Machining is a subtractive manufacturing process that removes material from a workpiece using cutting tools (turning, milling, drilling, grinding) to achieve precise dimensions and surface finish.",
        es: "El mecanizado es un proceso de manufactura sustractiva que remueve material de una pieza de trabajo usando herramientas de corte (torneado, fresado, taladrado, rectificado) para lograr dimensiones precisas y acabado superficial.",
        de: "Zerspanung ist ein subtraktiver Fertigungsprozess, der Material von einem Werkstück mit Schneidwerkzeugen (Drehen, Fräsen, Bohren, Schleifen) entfernt, um präzise Abmessungen und Oberflächengüte zu erreichen.",
        nl: "Bewerkingen is een subtractief productieproces dat materiaal van een werkstuk verwijdert met snijgereedschap (draaien, frezen, boren, slijpen) om precieze afmetingen en oppervlakteafwerking te bereiken."
      }
    },
    {
      question: {
        en: "What is the main function of a flywheel in mechanical systems?",
        es: "¿Cuál es la función principal de un volante en sistemas mecánicos?",
        de: "Was ist die Hauptfunktion eines Schwungrads in mechanischen Systemen?",
        nl: "Wat is de hoofdfunctie van een vliegwiel in mechanische systemen?"
      },
      options: [
        { en: "Increase power output", es: "Aumentar potencia de salida", de: "Ausgangsleistung erhöhen", nl: "Uitgangsvermogen verhogen" },
        { en: "Store kinetic energy and smooth power delivery", es: "Almacenar energía cinética y suavizar entrega de potencia", de: "Kinetische Energie speichern und Kraftübertragung glätten", nl: "Kinetische energie opslaan en krachtoverbrenging gladmaken" },
        { en: "Reduce system weight", es: "Reducir peso del sistema", de: "Systemgewicht reduzieren", nl: "Systeemgewicht verminderen" },
        { en: "Control temperature", es: "Controlar temperatura", de: "Temperatur steuern", nl: "Temperatuur controleren" }
      ],
      correct: 1,
      explanation: {
        en: "A flywheel stores kinetic energy during periods of excess power and releases it during periods of power demand, smoothing out fluctuations in power delivery. It's commonly used in engines, generators, and energy storage systems.",
        es: "Un volante almacena energía cinética durante períodos de exceso de potencia y la libera durante períodos de demanda de potencia, suavizando las fluctuaciones en la entrega de potencia. Se usa comúnmente en motores, generadores y sistemas de almacenamiento de energía.",
        de: "Ein Schwungrad speichert kinetische Energie während Perioden überschüssiger Leistung und gibt sie während Leistungsbedarfsperioden ab, wodurch Schwankungen in der Kraftübertragung geglättet werden. Es wird häufig in Motoren, Generatoren und Energiespeichersystemen verwendet.",
        nl: "Een vliegwiel slaat kinetische energie op tijdens periodes van overtollig vermogen en geeft het vrij tijdens periodes van vermogensvraag, waarbij fluctuaties in vermogenlevering worden gladgemaakt. Het wordt vaak gebruikt in motoren, generatoren en energieopslagsystemen."
      }
    },
    {
      question: {
        en: "In fluid mechanics, what does Reynolds number indicate?",
        es: "En mecánica de fluidos, ¿qué indica el número de Reynolds?",
        de: "Was zeigt die Reynoldszahl in der Strömungsmechanik an?",
        nl: "Wat geeft het Reynolds-getal aan in de vloeistofmechanica?"
      },
      options: [
        { en: "Fluid density", es: "Densidad del fluido", de: "Flüssigkeitsdichte", nl: "Vloeistofdichtheid" },
        { en: "Flow rate", es: "Velocidad de flujo", de: "Durchflussmenge", nl: "Stroomsnelheid" },
        { en: "Ratio of inertial forces to viscous forces", es: "Relación de fuerzas inerciales a fuerzas viscosas", de: "Verhältnis von Trägheitskräften zu Viskositätskräften", nl: "Verhouding van traagheidskrachten tot viskeuze krachten" },
        { en: "Pressure drop", es: "Caída de presión", de: "Druckverlust", nl: "Drukval" }
      ],
      correct: 2,
      explanation: {
        en: "Reynolds number (Re = ρvD/μ) is a dimensionless parameter that indicates the ratio of inertial forces to viscous forces in fluid flow. It determines whether flow is laminar (Re < 2300) or turbulent (Re > 4000) in pipes.",
        es: "El número de Reynolds (Re = ρvD/μ) es un parámetro adimensional que indica la relación de fuerzas inerciales a fuerzas viscosas en el flujo de fluidos. Determina si el flujo es laminar (Re < 2300) o turbulento (Re > 4000) en tuberías.",
        de: "Die Reynoldszahl (Re = ρvD/μ) ist eine dimensionslose Kenngröße, die das Verhältnis von Trägheitskräften zu Viskositätskräften in der Strömung angibt. Sie bestimmt, ob die Strömung laminar (Re < 2300) oder turbulent (Re > 4000) in Rohren ist.",
        nl: "Het Reynolds-getal (Re = ρvD/μ) is een dimensieloze parameter die de verhouding van traagheidskrachten tot viskeuze krachten in vloeistofstroming aangeeft. Het bepaalt of de stroming laminair (Re < 2300) of turbulent (Re > 4000) is in buizen."
      }
    },
    {
      question: {
        en: "What is the primary advantage of helical gears over straight-cut (spur) gears?",
        es: "¿Cuál es la principal ventaja de los engranajes helicoidales sobre los engranajes de dientes rectos?",
        de: "Was ist der Hauptvorteil von Schrägverzahnungen gegenüber Geradverzahnungen?",
        nl: "Wat is het hoofdvoordeel van spiraalvormige tandwielen ten opzichte van rechte tandwielen?"
      },
      options: [
        { en: "Lower cost", es: "Menor costo", de: "Niedrigere Kosten", nl: "Lagere kosten" },
        { en: "Easier manufacturing", es: "Fabricación más fácil", de: "Einfachere Herstellung", nl: "Makkelijkere productie" },
        { en: "Smoother operation and higher load capacity", es: "Operación más suave y mayor capacidad de carga", de: "Ruhigerer Lauf und höhere Belastbarkeit", nl: "Soepelere werking en hogere belastbaarheid" },
        { en: "Simpler installation", es: "Instalación más simple", de: "Einfachere Installation", nl: "Eenvoudigere installatie" }
      ],
      correct: 2,
      explanation: {
        en: "Helical gears have angled teeth that engage gradually, providing smoother operation with less noise and vibration compared to spur gears. They can also handle higher loads due to increased contact area, though they produce axial thrust.",
        es: "Los engranajes helicoidales tienen dientes angulados que se enganchan gradualmente, proporcionando operación más suave con menos ruido y vibración comparado con engranajes rectos. También pueden manejar cargas más altas debido al área de contacto aumentada, aunque producen empuje axial.",
        de: "Schrägverzahnungen haben abgewinkelte Zähne, die sich allmählich eingreifen und einen ruhigeren Lauf mit weniger Lärm und Vibration im Vergleich zu Geradverzahnungen bieten. Sie können auch höhere Lasten aufgrund der vergrößerten Kontaktfläche handhaben, erzeugen jedoch Axialschub.",
        nl: "Spiraalvormige tandwielen hebben gehoekte tanden die geleidelijk ingrijpen, wat soepelere werking met minder geluid en trillingen biedt vergeleken met rechte tandwielen. Ze kunnen ook hogere belastingen aan door verhoogd contactoppervlak, hoewel ze axiale kracht produceren."
      }
    },
    {
      question: {
        en: "What is the purpose of a torque converter in automotive transmissions?",
        es: "¿Cuál es el propósito de un convertidor de torque en transmisiones automotrices?",
        de: "Was ist der Zweck eines Drehmomentwandlers in Fahrzeuggetrieben?",
        nl: "Wat is het doel van een koppelomvormer in automotive transmissies?"
      },
      options: [
        { en: "Increase fuel efficiency", es: "Aumentar eficiencia de combustible", de: "Kraftstoffeffizienz erhöhen", nl: "Brandstofefficiëntie verhogen" },
        { en: "Provide smooth power transfer and torque multiplication", es: "Proporcionar transferencia suave de potencia y multiplicación de torque", de: "Sanfte Kraftübertragung und Drehmomentvervielfachung bieten", nl: "Soepele krachtoverbrenging en koppelverveelvoudiging bieden" },
        { en: "Control engine temperature", es: "Controlar temperatura del motor", de: "Motortemperatur kontrollieren", nl: "Motortemperatuur controleren" },
        { en: "Filter transmission fluid", es: "Filtrar fluido de transmisión", de: "Getriebeflüssigkeit filtern", nl: "Transmissievloeistof filteren" }
      ],
      correct: 1,
      explanation: {
        en: "A torque converter uses fluid coupling to transfer power from the engine to transmission, allowing smooth engagement without a clutch. It also multiplies torque during acceleration, providing better performance from a standstill.",
        es: "Un convertidor de torque usa acoplamiento fluido para transferir potencia del motor a la transmisión, permitiendo enganche suave sin embrague. También multiplica el torque durante aceleración, proporcionando mejor rendimiento desde parado.",
        de: "Ein Drehmomentwandler verwendet Flüssigkeitskupplung, um Kraft vom Motor zum Getriebe zu übertragen und ermöglicht sanftes Eingreifen ohne Kupplung. Er vervielfacht auch das Drehmoment während der Beschleunigung und bietet bessere Leistung aus dem Stand.",
        nl: "Een koppelomvormer gebruikt vloeistofkoppeling om kracht van motor naar transmissie over te brengen, waardoor soepele inschakeling zonder koppeling mogelijk is. Het verveelvoudigt ook koppel tijdens acceleratie, wat betere prestaties vanuit stilstand biedt."
      }
    },
    {
      question: {
        en: "In stress analysis, what does the term 'factor of safety' represent?",
        es: "En análisis de esfuerzos, ¿qué representa el término 'factor de seguridad'?",
        de: "Was stellt der Begriff 'Sicherheitsfaktor' in der Spannungsanalyse dar?",
        nl: "Wat vertegenwoordigt de term 'veiligheidsfactor' in spanningsanalyse?"
      },
      options: [
        { en: "Maximum stress divided by minimum stress", es: "Esfuerzo máximo dividido por esfuerzo mínimo", de: "Maximale Spannung geteilt durch minimale Spannung", nl: "Maximale spanning gedeeld door minimale spanning" },
        { en: "Ratio of material strength to applied stress", es: "Relación de resistencia del material al esfuerzo aplicado", de: "Verhältnis von Materialfestigkeit zu angewandter Spannung", nl: "Verhouding van materiaalsterkte tot toegepaste spanning" },
        { en: "Applied stress times cross-sectional area", es: "Esfuerzo aplicado por área de sección transversal", de: "Angewandte Spannung mal Querschnittsfläche", nl: "Toegepaste spanning maal dwarsdoorsnede-oppervlak" },
        { en: "Young's modulus divided by stress", es: "Módulo de Young dividido por esfuerzo", de: "Elastizitätsmodul geteilt durch Spannung", nl: "Young's modulus gedeeld door spanning" }
      ],
      correct: 1,
      explanation: {
        en: "Factor of safety (FOS) is the ratio of ultimate strength to working stress, indicating how many times stronger a material is than the expected load. A FOS of 2 means the component can handle twice the expected load before failure.",
        es: "El factor de seguridad (FOS) es la relación de resistencia última al esfuerzo de trabajo, indicando cuántas veces más fuerte es un material que la carga esperada. Un FOS de 2 significa que el componente puede manejar el doble de la carga esperada antes de fallar.",
        de: "Der Sicherheitsfaktor (FOS) ist das Verhältnis von Bruchfestigkeit zu Arbeitsspannung und zeigt an, wie viele Male stärker ein Material als die erwartete Last ist. Ein FOS von 2 bedeutet, dass das Bauteil das Doppelte der erwarteten Last vor dem Versagen handhaben kann.",
        nl: "Veiligheidsfactor (FOS) is de verhouding van uiteindelijke sterkte tot werkspanning, wat aangeeft hoe vaak sterker een materiaal is dan de verwachte belasting. Een FOS van 2 betekent dat het component het dubbele van de verwachte belasting aankan voor falen."
      }
    },
    {
      question: {
        en: "What is the primary function of a cam in mechanical systems?",
        es: "¿Cuál es la función principal de una leva en sistemas mecánicos?",
        de: "Was ist die Hauptfunktion eines Nockens in mechanischen Systemen?",
        nl: "Wat is de primaire functie van een nok in mechanische systemen?"
      },
      options: [
        { en: "Store energy", es: "Almacenar energía", de: "Energie speichern", nl: "Energie opslaan" },
        { en: "Convert rotary motion to linear motion", es: "Convertir movimiento rotativo a movimiento lineal", de: "Drehbewegung in Linearbewegung umwandeln", nl: "Roterende beweging omzetten naar lineaire beweging" },
        { en: "Increase speed", es: "Aumentar velocidad", de: "Geschwindigkeit erhöhen", nl: "Snelheid verhogen" },
        { en: "Filter vibrations", es: "Filtrar vibraciones", de: "Vibrationen filtern", nl: "Trillingen filteren" }
      ],
      correct: 1,
      explanation: {
        en: "A cam converts rotary motion into linear motion (or vice versa) through its specially shaped profile. As the cam rotates, it pushes against a follower, creating controlled linear displacement. This is commonly used in engine valve systems and automated machinery.",
        es: "Una leva convierte movimiento rotativo en movimiento lineal (o viceversa) a través de su perfil especialmente formado. Mientras la leva rota, empuja contra un seguidor, creando desplazamiento lineal controlado. Esto se usa comúnmente en sistemas de válvulas de motor y maquinaria automatizada.",
        de: "Ein Nocken wandelt Drehbewegung in Linearbewegung (oder umgekehrt) durch sein speziell geformtes Profil um. Während sich der Nocken dreht, drückt er gegen einen Folger und erzeugt kontrollierte Linearverschiebung. Dies wird häufig in Motorventilsystemen und automatisierten Maschinen verwendet.",
        nl: "Een nok zet roterende beweging om naar lineaire beweging (of omgekeerd) door zijn speciaal gevormde profiel. Terwijl de nok draait, duwt het tegen een volger, wat gecontroleerde lineaire verplaatsing creëert. Dit wordt vaak gebruikt in motorklepsystemen en geautomatiseerde machines."
      }
    },
    {
      question: {
        en: "Which principle explains why an airplane wing generates lift?",
        es: "¿Qué principio explica por qué un ala de avión genera sustentación?",
        de: "Welches Prinzip erklärt, warum ein Flugzeugflügel Auftrieb erzeugt?",
        nl: "Welk principe verklaart waarom een vliegtuigvleugel lift genereert?"
      },
      options: [
        { en: "Archimedes' principle only", es: "Solo principio de Arquímedes", de: "Nur Archimedes-Prinzip", nl: "Alleen principe van Archimedes" },
        { en: "Newton's third law only", es: "Solo tercera ley de Newton", de: "Nur Newtons drittes Gesetz", nl: "Alleen Newton's derde wet" },
        { en: "Bernoulli's principle combined with Newton's laws", es: "Principio de Bernoulli combinado con leyes de Newton", de: "Bernoulli-Prinzip kombiniert mit Newtons Gesetzen", nl: "Bernoulli's principe gecombineerd met Newton's wetten" },
        { en: "Conservation of mass only", es: "Solo conservación de masa", de: "Nur Massenerhaltung", nl: "Alleen behoud van massa" }
      ],
      correct: 2,
      explanation: {
        en: "Aircraft lift is generated through a combination of Bernoulli's principle (pressure differences due to airflow speed variations) and Newton's laws (downward deflection of air creating upward reaction force). The wing shape and angle of attack both contribute to this effect.",
        es: "La sustentación de aeronaves se genera a través de una combinación del principio de Bernoulli (diferencias de presión debido a variaciones de velocidad de flujo de aire) y las leyes de Newton (deflección hacia abajo del aire creando fuerza de reacción hacia arriba). La forma del ala y el ángulo de ataque contribuyen a este efecto.",
        de: "Der Auftrieb von Luftfahrzeugen wird durch eine Kombination des Bernoulli-Prinzips (Druckunterschiede durch Luftstromgeschwindigkeitsvariationen) und Newtons Gesetzen (Abwärtsablenkung der Luft erzeugt Aufwärtsreaktionskraft) erzeugt. Die Flügelform und der Anstellwinkel tragen beide zu diesem Effekt bei.",
        nl: "Vliegtuiglift wordt gegenereerd door een combinatie van Bernoulli's principe (drukverschillen door luchtstroom snelheidsvariaties) en Newton's wetten (neerwaartse afbuiging van lucht creëert opwaartse reactiekracht). De vleugelvorm en aanvalshoek dragen beide bij aan dit effect."
      }
    },
    {
      question: {
        en: "What is the main purpose of a differential in automotive systems?",
        es: "¿Cuál es el propósito principal de un diferencial en sistemas automotrices?",
        de: "Was ist der Hauptzweck eines Differentials in Fahrzeugsystemen?",
        nl: "Wat is het hoofddoel van een differentieel in automotive systemen?"
      },
      options: [
        { en: "Increase engine power", es: "Aumentar potencia del motor", de: "Motorleistung erhöhen", nl: "Motorvermogen verhogen" },
        { en: "Allow wheels to rotate at different speeds during turns", es: "Permitir que las ruedas roten a diferentes velocidades durante giros", de: "Rädern ermöglichen, bei Kurven mit unterschiedlichen Geschwindigkeiten zu drehen", nl: "Wielen toestaan om met verschillende snelheden te draaien tijdens bochten" },
        { en: "Control braking force", es: "Controlar fuerza de frenado", de: "Bremskraft kontrollieren", nl: "Remkracht controleren" },
        { en: "Filter engine vibrations", es: "Filtrar vibraciones del motor", de: "Motorvibrationen filtern", nl: "Motortrillingen filteren" }
      ],
      correct: 1,
      explanation: {
        en: "A differential allows the drive wheels to rotate at different speeds when turning corners. The outer wheel travels a longer path than the inner wheel, so it must rotate faster. Without a differential, tires would scrub and wear prematurely.",
        es: "Un diferencial permite que las ruedas motrices roten a diferentes velocidades al tomar curvas. La rueda exterior viaja un camino más largo que la rueda interior, entonces debe rotar más rápido. Sin diferencial, los neumáticos se desgastarían prematuramente.",
        de: "Ein Differential ermöglicht es den Antriebsrädern, bei Kurvenfahrten mit unterschiedlichen Geschwindigkeiten zu drehen. Das äußere Rad legt einen längeren Weg zurück als das innere Rad, daher muss es schneller drehen. Ohne Differential würden die Reifen schleifen und vorzeitig verschleißen.",
        nl: "Een differentieel stelt de aandrijfwielen in staat om met verschillende snelheden te draaien bij het nemen van bochten. Het buitenste wiel legt een langere weg af dan het binnenste wiel, dus moet het sneller draaien. Zonder differentieel zouden banden slijten en voortijdig verslijten."
      }
    },
    {
      question: {
        en: "In vibration analysis, what does resonance occur when?",
        es: "En análisis de vibración, ¿cuándo ocurre la resonancia?",
        de: "Bei der Schwingungsanalyse, wann tritt Resonanz auf?",
        nl: "In trillingsanalyse, wanneer treedt resonantie op?"
      },
      options: [
        { en: "Applied frequency equals natural frequency", es: "La frecuencia aplicada iguala la frecuencia natural", de: "Angewandte Frequenz gleich natürlicher Frequenz", nl: "Toegepaste frequentie gelijk natuurlijke frequentie" },
        { en: "Temperature exceeds design limits", es: "La temperatura excede límites de diseño", de: "Temperatur überschreitet Designgrenzen", nl: "Temperatuur overschrijdt ontwerplimetten" },
        { en: "Load exceeds material strength", es: "La carga excede resistencia del material", de: "Last überschreitet Materialfestigkeit", nl: "Belasting overschrijdt materiaalsterkte" },
        { en: "Speed reaches maximum value", es: "La velocidad alcanza valor máximo", de: "Geschwindigkeit erreicht Maximalwert", nl: "Snelheid bereikt maximumwaarde" }
      ],
      correct: 0,
      explanation: {
        en: "Resonance occurs when the applied (forcing) frequency matches the natural frequency of a system. This causes dramatic amplitude amplification and can lead to catastrophic failure if not controlled. Engineers must avoid operating near resonant frequencies.",
        es: "La resonancia ocurre cuando la frecuencia aplicada (forzante) coincide con la frecuencia natural de un sistema. Esto causa amplificación dramática de amplitud y puede llevar a falla catastrófica si no se controla. Los ingenieros deben evitar operar cerca de frecuencias resonantes.",
        de: "Resonanz tritt auf, wenn die angewandte (erzwingende) Frequenz mit der natürlichen Frequenz eines Systems übereinstimmt. Dies verursacht dramatische Amplitudenverstärkung und kann zu katastrophalem Versagen führen, wenn nicht kontrolliert. Ingenieure müssen den Betrieb nahe Resonanzfrequenzen vermeiden.",
        nl: "Resonantie treedt op wanneer de toegepaste (forcerende) frequentie overeenkomt met de natuurlijke frequentie van een systeem. Dit veroorzaakt dramatische amplitudeversterking en kan leiden tot catastrofaal falen als het niet gecontroleerd wordt. Ingenieurs moeten vermijden om dicht bij resonantiefrequenties te werken."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using roller bearings instead of plain bearings?",
        es: "¿Cuál es la principal ventaja de usar rodamientos de rodillos en lugar de cojinetes lisos?",
        de: "Was ist der Hauptvorteil der Verwendung von Wälzlagern anstelle von Gleitlagern?",
        nl: "Wat is het hoofdvoordeel van het gebruik van rolletagers in plaats van glijlagers?"
      },
      options: [
        { en: "Lower manufacturing cost", es: "Menor costo de fabricación", de: "Niedrigere Herstellungskosten", nl: "Lagere productiekosten" },
        { en: "Reduced friction and maintenance", es: "Fricción reducida y mantenimiento", de: "Reduzierte Reibung und Wartung", nl: "Verminderde wrijving en onderhoud" },
        { en: "Higher temperature capability", es: "Mayor capacidad de temperatura", de: "Höhere Temperaturfähigkeit", nl: "Hogere temperatuurcapaciteit" },
        { en: "Better shock absorption", es: "Mejor absorción de impactos", de: "Bessere Stoßdämpfung", nl: "Betere schokabsorptie" }
      ],
      correct: 1,
      explanation: {
        en: "Roller bearings use rolling elements (balls or rollers) instead of sliding contact, resulting in significantly lower friction coefficient, reduced heat generation, less wear, and lower maintenance requirements compared to plain bearings.",
        es: "Los rodamientos de rodillos usan elementos rodantes (bolas o rodillos) en lugar de contacto deslizante, resultando en coeficiente de fricción significativamente menor, generación reducida de calor, menos desgaste y menores requerimientos de mantenimiento comparado con cojinetes lisos.",
        de: "Wälzlager verwenden Wälzelemente (Kugeln oder Rollen) anstelle von Gleitkontakt, was zu einem deutlich niedrigeren Reibungskoeffizienten, reduzierter Wärmeerzeugung, weniger Verschleiß und geringeren Wartungsanforderungen im Vergleich zu Gleitlagern führt.",
        nl: "Rolletagers gebruiken rollende elementen (kogels of rollers) in plaats van glijdend contact, wat resulteert in aanzienlijk lagere wrijvingscoëfficiënt, verminderde warmteontwikkeling, minder slijtage en lagere onderhoudsvereisten vergeleken met glijlagers."
      }
    }
  ]
});
