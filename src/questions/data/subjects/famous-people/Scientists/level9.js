// Scientists Quiz - Level 9: Extreme Knowledge
(function() {
  const level9 = {
    name: {
      en: "Scientists Level 9",
      es: "Científicos Nivel 9",
      de: "Wissenschaftler Stufe 9",
      nl: "Wetenschappers Level 9"
    },
    questions: [
      {
        question: {
          en: "Which mathematician developed topos theory, revolutionizing the foundations of mathematics and logic?",
          es: "¿Qué matemático desarrolló la teoría de topos, revolucionando los fundamentos de las matemáticas y la lógica?",
          de: "Welcher Mathematiker entwickelte die Topos-Theorie und revolutionierte damit die Grundlagen der Mathematik und Logik?",
          nl: "Welke wiskundige ontwikkelde topostheorie, wat een revolutie teweegbracht in de fundamenten van de wiskunde en logica?"
        },
        options: [
          { en: "Alexander Grothendieck", es: "Alexander Grothendieck", de: "Alexander Grothendieck", nl: "Alexander Grothendieck" },
          { en: "André Weil", es: "André Weil", de: "André Weil", nl: "André Weil" },
          { en: "Jean-Pierre Serre", es: "Jean-Pierre Serre", de: "Jean-Pierre Serre", nl: "Jean-Pierre Serre" },
          { en: "Saunders Mac Lane", es: "Saunders Mac Lane", de: "Saunders Mac Lane", nl: "Saunders Mac Lane" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Grothendieck revolutionized algebraic geometry and developed topos theory in the 1960s, creating a framework that unified geometry, logic, and set theory. He won the Fields Medal in 1966 but later withdrew from the mathematical community, living in seclusion until his death in 2014.",
          es: "Alexander Grothendieck revolucionó la geometría algebraica y desarrolló la teoría de topos en la década de 1960, creando un marco que unificó geometría, lógica y teoría de conjuntos. Ganó la Medalla Fields en 1966 pero luego se retiró de la comunidad matemática, viviendo recluido hasta su muerte en 2014.",
          de: "Alexander Grothendieck revolutionierte die algebraische Geometrie und entwickelte in den 1960er Jahren die Topos-Theorie, wodurch ein Rahmen entstand, der Geometrie, Logik und Mengenlehre vereinte. Er gewann 1966 die Fields-Medaille, zog sich jedoch später aus der mathematischen Gemeinschaft zurück und lebte bis zu seinem Tod 2014 zurückgezogen.",
          nl: "Alexander Grothendieck revolutioneerde de algebraïsche meetkunde en ontwikkelde in de jaren 1960 topostheorie, waarbij hij een raamwerk creëerde dat meetkunde, logica en verzamelingenleer verenigde. Hij won de Fields-medaille in 1966, maar trok zich later terug uit de wiskundige gemeenschap en leefde in afzondering tot zijn dood in 2014."
        }
      },
      {
        question: {
          en: "Who discovered the Higgs mechanism independently of Peter Higgs, though receiving less recognition?",
          es: "¿Quién descubrió el mecanismo de Higgs independientemente de Peter Higgs, aunque recibiendo menos reconocimiento?",
          de: "Wer entdeckte den Higgs-Mechanismus unabhängig von Peter Higgs, erhielt aber weniger Anerkennung?",
          nl: "Wie ontdekte het Higgs-mechanisme onafhankelijk van Peter Higgs, hoewel met minder erkenning?"
        },
        options: [
          { en: "Robert Brout", es: "Robert Brout", de: "Robert Brout", nl: "Robert Brout" },
          { en: "Steven Weinberg", es: "Steven Weinberg", de: "Steven Weinberg", nl: "Steven Weinberg" },
          { en: "Sheldon Glashow", es: "Sheldon Glashow", de: "Sheldon Glashow", nl: "Sheldon Glashow" },
          { en: "Abdus Salam", es: "Abdus Salam", de: "Abdus Salam", nl: "Abdus Salam" }
        ],
        correct: 0,
        explanation: {
          en: "Robert Brout and François Englert proposed the Higgs mechanism in 1964, simultaneously with Peter Higgs. Englert shared the 2013 Nobel Prize with Higgs for this discovery, but Brout had died in 2011. Several other physicists also contributed independently, including Gerald Guralnik, Carl Hagen, and Tom Kibble.",
          es: "Robert Brout y François Englert propusieron el mecanismo de Higgs en 1964, simultáneamente con Peter Higgs. Englert compartió el Premio Nobel de 2013 con Higgs por este descubrimiento, pero Brout había muerto en 2011. Varios otros físicos también contribuyeron independientemente, incluidos Gerald Guralnik, Carl Hagen y Tom Kibble.",
          de: "Robert Brout und François Englert schlugen 1964 gleichzeitig mit Peter Higgs den Higgs-Mechanismus vor. Englert teilte sich 2013 den Nobelpreis mit Higgs für diese Entdeckung, aber Brout war 2011 gestorben. Mehrere andere Physiker trugen ebenfalls unabhängig bei, darunter Gerald Guralnik, Carl Hagen und Tom Kibble.",
          nl: "Robert Brout en François Englert stelden in 1964 het Higgs-mechanisme voor, gelijktijdig met Peter Higgs. Englert deelde de Nobelprijs van 2013 met Higgs voor deze ontdekking, maar Brout was in 2011 overleden. Verschillende andere natuurkundigen droegen ook onafhankelijk bij, waaronder Gerald Guralnik, Carl Hagen en Tom Kibble."
        }
      },
      {
        question: {
          en: "Which chemist synthesized the first artificial cell capable of self-replication?",
          es: "¿Qué químico sintetizó la primera célula artificial capaz de autorreplicación?",
          de: "Welcher Chemiker synthetisierte die erste künstliche Zelle, die zur Selbstreplikation fähig war?",
          nl: "Welke chemicus synthetiseerde de eerste kunstmatige cel die in staat was tot zelfreplicatie?"
        },
        options: [
          { en: "Craig Venter", es: "Craig Venter", de: "Craig Venter", nl: "Craig Venter" },
          { en: "George Church", es: "George Church", de: "George Church", nl: "George Church" },
          { en: "Stanley Miller", es: "Stanley Miller", de: "Stanley Miller", nl: "Stanley Miller" },
          { en: "Jack Szostak", es: "Jack Szostak", de: "Jack Szostak", nl: "Jack Szostak" }
        ],
        correct: 0,
        explanation: {
          en: "Craig Venter and his team created the first synthetic bacterial cell (Mycoplasma mycoides JCVI-syn1.0) in 2010, with a chemically synthesized genome. This milestone in synthetic biology demonstrated that life could be created from chemically synthesized genetic material, though it used an existing cell as a recipient.",
          es: "Craig Venter y su equipo crearon la primera célula bacteriana sintética (Mycoplasma mycoides JCVI-syn1.0) en 2010, con un genoma sintetizado químicamente. Este hito en biología sintética demostró que la vida podía crearse a partir de material genético sintetizado químicamente, aunque utilizó una célula existente como receptora.",
          de: "Craig Venter und sein Team schufen 2010 die erste synthetische Bakterienzelle (Mycoplasma mycoides JCVI-syn1.0) mit einem chemisch synthetisierten Genom. Dieser Meilenstein in der synthetischen Biologie zeigte, dass Leben aus chemisch synthetisiertem genetischem Material erschaffen werden konnte, obwohl eine bestehende Zelle als Empfänger verwendet wurde.",
          nl: "Craig Venter en zijn team creëerden in 2010 de eerste synthetische bacteriële cel (Mycoplasma mycoides JCVI-syn1.0), met een chemisch gesynthetiseerd genoom. Deze mijlpaal in synthetische biologie toonde aan dat leven kon worden gecreëerd uit chemisch gesynthetiseerd genetisch materiaal, hoewel een bestaande cel als ontvanger werd gebruikt."
        }
      },
      {
        question: {
          en: "Who developed the AdS/CFT correspondence, linking string theory to quantum field theory?",
          es: "¿Quién desarrolló la correspondencia AdS/CFT, vinculando la teoría de cuerdas con la teoría cuántica de campos?",
          de: "Wer entwickelte die AdS/CFT-Korrespondenz, die Stringtheorie mit Quantenfeldtheorie verknüpft?",
          nl: "Wie ontwikkelde de AdS/CFT-correspondentie, die snaartheorie verbindt met kwantumveldentheorie?"
        },
        options: [
          { en: "Juan Maldacena", es: "Juan Maldacena", de: "Juan Maldacena", nl: "Juan Maldacena" },
          { en: "Edward Witten", es: "Edward Witten", de: "Edward Witten", nl: "Edward Witten" },
          { en: "Leonard Susskind", es: "Leonard Susskind", de: "Leonard Susskind", nl: "Leonard Susskind" },
          { en: "Gerard 't Hooft", es: "Gerard 't Hooft", de: "Gerard 't Hooft", nl: "Gerard 't Hooft" }
        ],
        correct: 0,
        explanation: {
          en: "Juan Maldacena proposed the AdS/CFT (Anti-de Sitter/Conformal Field Theory) correspondence in 1997, establishing a profound connection between gravity theories and quantum field theories. This conjecture has become one of the most important developments in theoretical physics, providing insights into quantum gravity and black hole physics.",
          es: "Juan Maldacena propuso la correspondencia AdS/CFT (Anti-de Sitter/Teoría de Campos Conforme) en 1997, estableciendo una conexión profunda entre teorías de gravedad y teorías cuánticas de campos. Esta conjetura se ha convertido en uno de los desarrollos más importantes en física teórica, proporcionando perspectivas sobre gravedad cuántica y física de agujeros negros.",
          de: "Juan Maldacena schlug 1997 die AdS/CFT-Korrespondenz (Anti-de Sitter/Konforme Feldtheorie) vor und stellte damit eine tiefgreifende Verbindung zwischen Gravitationstheorien und Quantenfeldtheorien her. Diese Vermutung wurde zu einer der wichtigsten Entwicklungen in der theoretischen Physik und liefert Einblicke in Quantengravitation und Schwarze-Loch-Physik.",
          nl: "Juan Maldacena stelde in 1997 de AdS/CFT-correspondentie (Anti-de Sitter/Conforme Veldentheorie) voor, waarbij een diepgaande verbinding werd gelegd tussen zwaartekrachttheorieën en kwantumveldentheorieën. Dit vermoeden is een van de belangrijkste ontwikkelingen in de theoretische natuurkunde geworden en biedt inzichten in kwantumzwaartekracht en zwarte gaten-natuurkunde."
        }
      },
      {
        question: {
          en: "Which mathematician solved the Langlands program for function fields, winning the Abel Prize?",
          es: "¿Qué matemático resolvió el programa de Langlands para campos de funciones, ganando el Premio Abel?",
          de: "Welcher Mathematiker löste das Langlands-Programm für Funktionenkörper und gewann den Abel-Preis?",
          nl: "Welke wiskundige loste het Langlands-programma voor functievelden op en won de Abel-prijs?"
        },
        options: [
          { en: "Laurent Lafforgue", es: "Laurent Lafforgue", de: "Laurent Lafforgue", nl: "Laurent Lafforgue" },
          { en: "Robert Langlands", es: "Robert Langlands", de: "Robert Langlands", nl: "Robert Langlands" },
          { en: "Terence Tao", es: "Terence Tao", de: "Terence Tao", nl: "Terence Tao" },
          { en: "Peter Scholze", es: "Peter Scholze", de: "Peter Scholze", nl: "Peter Scholze" }
        ],
        correct: 0,
        explanation: {
          en: "Laurent Lafforgue proved the Langlands correspondence for function fields in 1998-2000, earning the Fields Medal in 2002. This was a major breakthrough in the Langlands program, which seeks to connect number theory, representation theory, and algebraic geometry through deep relationships between automorphic forms and Galois representations.",
          es: "Laurent Lafforgue demostró la correspondencia de Langlands para campos de funciones en 1998-2000, ganando la Medalla Fields en 2002. Este fue un gran avance en el programa de Langlands, que busca conectar teoría de números, teoría de representaciones y geometría algebraica a través de relaciones profundas entre formas automórficas y representaciones de Galois.",
          de: "Laurent Lafforgue bewies 1998-2000 die Langlands-Korrespondenz für Funktionenkörper und erhielt 2002 die Fields-Medaille. Dies war ein bedeutender Durchbruch im Langlands-Programm, das versucht, Zahlentheorie, Darstellungstheorie und algebraische Geometrie durch tiefe Beziehungen zwischen automorphen Formen und Galois-Darstellungen zu verbinden.",
          nl: "Laurent Lafforgue bewees de Langlands-correspondentie voor functievelden in 1998-2000 en won de Fields-medaille in 2002. Dit was een belangrijke doorbraak in het Langlands-programma, dat streeft naar het verbinden van getaltheorie, representatietheorie en algebraïsche meetkunde door diepe relaties tussen automorfe vormen en Galois-representaties."
        }
      },
      {
        question: {
          en: "Who discovered the bacterial immune system that became the basis for CRISPR technology, before its use in gene editing?",
          es: "¿Quién descubrió el sistema inmune bacteriano que se convirtió en la base de la tecnología CRISPR, antes de su uso en edición genética?",
          de: "Wer entdeckte das bakterielle Immunsystem, das zur Grundlage der CRISPR-Technologie wurde, vor ihrer Verwendung in der Genbearbeitung?",
          nl: "Wie ontdekte het bacteriële immuunsysteem dat de basis werd voor CRISPR-technologie, vóór het gebruik ervan in genbewerking?"
        },
        options: [
          { en: "Yoshizumi Ishino", es: "Yoshizumi Ishino", de: "Yoshizumi Ishino", nl: "Yoshizumi Ishino" },
          { en: "Emmanuelle Charpentier", es: "Emmanuelle Charpentier", de: "Emmanuelle Charpentier", nl: "Emmanuelle Charpentier" },
          { en: "Jennifer Doudna", es: "Jennifer Doudna", de: "Jennifer Doudna", nl: "Jennifer Doudna" },
          { en: "Feng Zhang", es: "Feng Zhang", de: "Feng Zhang", nl: "Feng Zhang" }
        ],
        correct: 0,
        explanation: {
          en: "Yoshizumi Ishino first identified CRISPR sequences in E. coli in 1987, though he didn't understand their function. Francisco Mojica later recognized them as part of an adaptive immune system in bacteria. The transformation into a gene-editing tool came later with Charpentier, Doudna, and others, who won the 2020 Nobel Prize.",
          es: "Yoshizumi Ishino identificó por primera vez las secuencias CRISPR en E. coli en 1987, aunque no entendió su función. Francisco Mojica las reconoció más tarde como parte de un sistema inmune adaptativo en bacterias. La transformación en una herramienta de edición genética llegó después con Charpentier, Doudna y otros, quienes ganaron el Premio Nobel de 2020.",
          de: "Yoshizumi Ishino identifizierte 1987 erstmals CRISPR-Sequenzen in E. coli, verstand jedoch ihre Funktion nicht. Francisco Mojica erkannte sie später als Teil eines adaptiven Immunsystems in Bakterien. Die Umwandlung in ein Genbearbeitungswerkzeug erfolgte später mit Charpentier, Doudna und anderen, die 2020 den Nobelpreis gewannen.",
          nl: "Yoshizumi Ishino identificeerde CRISPR-sequenties voor het eerst in E. coli in 1987, hoewel hij hun functie niet begreep. Francisco Mojica herkende ze later als onderdeel van een adaptief immuunsysteem in bacteriën. De transformatie naar een genenbewerkingstool kwam later met Charpentier, Doudna en anderen, die de Nobelprijs van 2020 wonnen."
        }
      },
      {
        question: {
          en: "Which physicist developed the weak measurement theory, allowing the observation of quantum systems without collapsing them?",
          es: "¿Qué físico desarrolló la teoría de medición débil, permitiendo la observación de sistemas cuánticos sin colapsarlos?",
          de: "Welcher Physiker entwickelte die Theorie schwacher Messungen und ermöglichte damit die Beobachtung von Quantensystemen ohne deren Kollaps?",
          nl: "Welke natuurkundige ontwikkelde de zwakke-metingstheorie, waardoor de observatie van kwantumsystemen mogelijk werd zonder ze te laten instorten?"
        },
        options: [
          { en: "Yakir Aharonov", es: "Yakir Aharonov", de: "Yakir Aharonov", nl: "Yakir Aharonov" },
          { en: "Anton Zeilinger", es: "Anton Zeilinger", de: "Anton Zeilinger", nl: "Anton Zeilinger" },
          { en: "Alain Aspect", es: "Alain Aspect", de: "Alain Aspect", nl: "Alain Aspect" },
          { en: "John Clauser", es: "John Clauser", de: "John Clauser", nl: "John Clauser" }
        ],
        correct: 0,
        explanation: {
          en: "Yakir Aharonov developed weak measurement theory with colleagues in 1988, showing that quantum systems can be measured without completely collapsing their wavefunction. He is also famous for the Aharonov-Bohm effect, demonstrating that electromagnetic potentials have physical significance in quantum mechanics beyond just the fields.",
          es: "Yakir Aharonov desarrolló la teoría de medición débil con colegas en 1988, mostrando que los sistemas cuánticos pueden medirse sin colapsar completamente su función de onda. También es famoso por el efecto Aharonov-Bohm, demostrando que los potenciales electromagnéticos tienen significado físico en mecánica cuántica más allá de los campos.",
          de: "Yakir Aharonov entwickelte 1988 mit Kollegen die Theorie schwacher Messungen und zeigte, dass Quantensysteme gemessen werden können, ohne ihre Wellenfunktion vollständig zu kollabieren. Er ist auch berühmt für den Aharonov-Bohm-Effekt, der zeigt, dass elektromagnetische Potentiale in der Quantenmechanik über die Felder hinaus physikalische Bedeutung haben.",
          nl: "Yakir Aharonov ontwikkelde in 1988 met collega's de zwakke-metingstheorie, waaruit bleek dat kwantumsystemen kunnen worden gemeten zonder hun golffunctie volledig te laten instorten. Hij is ook beroemd om het Aharonov-Bohm-effect, dat aantoont dat elektromagnetische potentialen fysieke betekenis hebben in de kwantummechanica buiten alleen de velden."
        }
      },
      {
        question: {
          en: "Who discovered the thermodynamic arrow of time by explaining entropy increase without invoking the second law directly?",
          es: "¿Quién descubrió la flecha termodinámica del tiempo al explicar el aumento de entropía sin invocar directamente la segunda ley?",
          de: "Wer entdeckte den thermodynamischen Zeitpfeil, indem er die Entropiezunahme ohne direkten Bezug auf den zweiten Hauptsatz erklärte?",
          nl: "Wie ontdekte de thermodynamische tijdpijl door de toename van entropie te verklaren zonder direct de tweede wet aan te roepen?"
        },
        options: [
          { en: "Ludwig Boltzmann", es: "Ludwig Boltzmann", de: "Ludwig Boltzmann", nl: "Ludwig Boltzmann" },
          { en: "Rudolf Clausius", es: "Rudolf Clausius", de: "Rudolf Clausius", nl: "Rudolf Clausius" },
          { en: "James Clerk Maxwell", es: "James Clerk Maxwell", de: "James Clerk Maxwell", nl: "James Clerk Maxwell" },
          { en: "Josiah Willard Gibbs", es: "Josiah Willard Gibbs", de: "Josiah Willard Gibbs", nl: "Josiah Willard Gibbs" }
        ],
        correct: 0,
        explanation: {
          en: "Ludwig Boltzmann developed statistical mechanics in the 1870s, showing that entropy increase emerges from statistical behavior of particles rather than fundamental laws. His H-theorem explained irreversibility microscopically, though it faced criticism (Loschmidt's paradox). Boltzmann's work laid the foundation for understanding time's arrow through probability.",
          es: "Ludwig Boltzmann desarrolló la mecánica estadística en la década de 1870, mostrando que el aumento de entropía emerge del comportamiento estadístico de las partículas en lugar de leyes fundamentales. Su teorema H explicó la irreversibilidad microscópicamente, aunque enfrentó críticas (paradoja de Loschmidt). El trabajo de Boltzmann sentó las bases para comprender la flecha del tiempo a través de la probabilidad.",
          de: "Ludwig Boltzmann entwickelte in den 1870er Jahren die statistische Mechanik und zeigte, dass die Entropiezunahme aus dem statistischen Verhalten von Teilchen und nicht aus fundamentalen Gesetzen hervorgeht. Sein H-Theorem erklärte Irreversibilität mikroskopisch, obwohl es Kritik (Loschmidts Paradoxon) erfuhr. Boltzmanns Arbeit legte den Grundstein für das Verständnis des Zeitpfeils durch Wahrscheinlichkeit.",
          nl: "Ludwig Boltzmann ontwikkelde in de jaren 1870 de statistische mechanica en toonde aan dat entropietoename voortkomt uit statistisch gedrag van deeltjes in plaats van fundamentele wetten. Zijn H-theorema verklaarde onomkeerbaarheid microscopisch, hoewel het kritiek kreeg (Loschmidts paradox). Boltzmanns werk legde de basis voor het begrijpen van de tijdpijl door waarschijnlijkheid."
        }
      },
      {
        question: {
          en: "Which biologist discovered horizontal gene transfer in bacteria, challenging Darwin's tree of life?",
          es: "¿Qué biólogo descubrió la transferencia horizontal de genes en bacterias, desafiando el árbol de la vida de Darwin?",
          de: "Welcher Biologe entdeckte den horizontalen Gentransfer in Bakterien und stellte damit Darwins Lebensbaum in Frage?",
          nl: "Welke bioloog ontdekte horizontale genoverdracht in bacteriën, wat Darwins levensboom uitdaagde?"
        },
        options: [
          { en: "Carl Woese", es: "Carl Woese", de: "Carl Woese", nl: "Carl Woese" },
          { en: "Lynn Margulis", es: "Lynn Margulis", de: "Lynn Margulis", nl: "Lynn Margulis" },
          { en: "Ernst Mayr", es: "Ernst Mayr", de: "Ernst Mayr", nl: "Ernst Mayr" },
          { en: "Joshua Lederberg", es: "Joshua Lederberg", de: "Joshua Lederberg", nl: "Joshua Lederberg" }
        ],
        correct: 0,
        explanation: {
          en: "Carl Woese discovered the third domain of life (Archaea) in 1977 and was instrumental in revealing horizontal gene transfer, showing that genes can move between distantly related organisms. This challenged the traditional tree of life concept, suggesting a more web-like pattern of evolution, particularly among microorganisms.",
          es: "Carl Woese descubrió el tercer dominio de la vida (Archaea) en 1977 y fue fundamental para revelar la transferencia horizontal de genes, mostrando que los genes pueden moverse entre organismos distantemente relacionados. Esto desafió el concepto tradicional del árbol de la vida, sugiriendo un patrón de evolución más similar a una red, particularmente entre microorganismos.",
          de: "Carl Woese entdeckte 1977 die dritte Domäne des Lebens (Archaea) und war maßgeblich an der Aufdeckung des horizontalen Gentransfers beteiligt, der zeigt, dass Gene zwischen entfernt verwandten Organismen übertragen werden können. Dies stellte das traditionelle Konzept des Lebensbaums in Frage und deutete auf ein eher netzartiges Evolutionsmuster hin, insbesondere bei Mikroorganismen.",
          nl: "Carl Woese ontdekte in 1977 het derde domein van het leven (Archaea) en speelde een instrumentele rol bij het onthullen van horizontale genoverdracht, waaruit bleek dat genen kunnen bewegen tussen ver verwante organismen. Dit daagde het traditionele levensboomconcept uit en suggereerde een meer webachtig evolutiepatroon, vooral bij micro-organismen."
        }
      },
      {
        question: {
          en: "Who formulated the Birch and Swinnerton-Dyer conjecture, one of the Millennium Prize Problems?",
          es: "¿Quién formuló la conjetura de Birch y Swinnerton-Dyer, uno de los Problemas del Milenio?",
          de: "Wer formulierte die Birch-Swinnerton-Dyer-Vermutung, eines der Millennium-Probleme?",
          nl: "Wie formuleerde het vermoeden van Birch en Swinnerton-Dyer, een van de Millenniumprijsproblemen?"
        },
        options: [
          { en: "Bryan Birch", es: "Bryan Birch", de: "Bryan Birch", nl: "Bryan Birch" },
          { en: "Andrew Wiles", es: "Andrew Wiles", de: "Andrew Wiles", nl: "Andrew Wiles" },
          { en: "John Tate", es: "John Tate", de: "John Tate", nl: "John Tate" },
          { en: "Barry Mazur", es: "Barry Mazur", de: "Barry Mazur", nl: "Barry Mazur" }
        ],
        correct: 0,
        explanation: {
          en: "Bryan Birch and Peter Swinnerton-Dyer formulated their conjecture in the 1960s, relating the number of rational points on an elliptic curve to the behavior of its L-function. This remains one of the seven unsolved Millennium Prize Problems, with a $1 million reward for a proof, and is central to number theory.",
          es: "Bryan Birch y Peter Swinnerton-Dyer formularon su conjetura en la década de 1960, relacionando el número de puntos racionales en una curva elíptica con el comportamiento de su función L. Este sigue siendo uno de los siete Problemas del Milenio sin resolver, con una recompensa de $1 millón por una prueba, y es central en teoría de números.",
          de: "Bryan Birch und Peter Swinnerton-Dyer formulierten ihre Vermutung in den 1960er Jahren und verbanden die Anzahl rationaler Punkte auf einer elliptischen Kurve mit dem Verhalten ihrer L-Funktion. Dies bleibt eines der sieben ungelösten Millennium-Probleme mit einer Belohnung von 1 Million Dollar für einen Beweis und ist zentral für die Zahlentheorie.",
          nl: "Bryan Birch en Peter Swinnerton-Dyer formuleerden hun vermoeden in de jaren 1960, waarbij ze het aantal rationele punten op een elliptische kromme relateerden aan het gedrag van zijn L-functie. Dit blijft een van de zeven onopgeloste Millenniumprijsproblemen, met een beloning van $1 miljoen voor een bewijs, en staat centraal in de getaltheorie."
        }
      },
      {
        question: {
          en: "Which chemist discovered the Belousov-Zhabotinsky reaction, the first convincing chemical oscillator?",
          es: "¿Qué químico descubrió la reacción de Belousov-Zhabotinsky, el primer oscilador químico convincente?",
          de: "Welcher Chemiker entdeckte die Belousov-Zhabotinsky-Reaktion, den ersten überzeugenden chemischen Oszillator?",
          nl: "Welke chemicus ontdekte de Belousov-Zhabotinsky-reactie, de eerste overtuigende chemische oscillator?"
        },
        options: [
          { en: "Boris Belousov", es: "Boris Belousov", de: "Boris Belousov", nl: "Boris Belousov" },
          { en: "Ilya Prigogine", es: "Ilya Prigogine", de: "Ilya Prigogine", nl: "Ilya Prigogine" },
          { en: "Manfred Eigen", es: "Manfred Eigen", de: "Manfred Eigen", nl: "Manfred Eigen" },
          { en: "Fritz Haber", es: "Fritz Haber", de: "Fritz Haber", nl: "Fritz Haber" }
        ],
        correct: 0,
        explanation: {
          en: "Boris Belousov discovered the oscillating chemical reaction in 1951, but it was rejected by journals as impossible. Anatoly Zhabotinsky rediscovered and studied it in the 1960s, leading to its acceptance. This reaction demonstrated that chemical systems can exhibit periodic behavior, revolutionizing understanding of non-equilibrium thermodynamics and pattern formation.",
          es: "Boris Belousov descubrió la reacción química oscilante en 1951, pero fue rechazada por revistas como imposible. Anatoly Zhabotinsky la redescubrió y estudió en la década de 1960, llevando a su aceptación. Esta reacción demostró que los sistemas químicos pueden exhibir comportamiento periódico, revolucionando la comprensión de la termodinámica de no equilibrio y formación de patrones.",
          de: "Boris Belousov entdeckte 1951 die oszillierende chemische Reaktion, die jedoch von Zeitschriften als unmöglich abgelehnt wurde. Anatoly Zhabotinsky entdeckte sie in den 1960er Jahren wieder und untersuchte sie, was zu ihrer Akzeptanz führte. Diese Reaktion zeigte, dass chemische Systeme periodisches Verhalten zeigen können, und revolutionierte das Verständnis der Nichtgleichgewichtsthermodynamik und Musterbildung.",
          nl: "Boris Belousov ontdekte de oscillerende chemische reactie in 1951, maar deze werd door tijdschriften afgewezen als onmogelijk. Anatoly Zhabotinsky herontdekte en bestudeerde het in de jaren 1960, wat leidde tot acceptatie. Deze reactie toonde aan dat chemische systemen periodiek gedrag kunnen vertonen, wat een revolutie teweegbracht in het begrip van niet-evenwichtsthermodynamica en patroonvorming."
        }
      },
      {
        question: {
          en: "Who developed perverse sheaves, a key tool in algebraic geometry and representation theory?",
          es: "¿Quién desarrolló los haces perversos, una herramienta clave en geometría algebraica y teoría de representaciones?",
          de: "Wer entwickelte perverse Garben, ein Schlüsselwerkzeug in algebraischer Geometrie und Darstellungstheorie?",
          nl: "Wie ontwikkelde perverse schoven, een belangrijk instrument in algebraïsche meetkunde en representatietheorie?"
        },
        options: [
          { en: "Alexander Beilinson", es: "Alexander Beilinson", de: "Alexander Beilinson", nl: "Alexander Beilinson" },
          { en: "Pierre Deligne", es: "Pierre Deligne", de: "Pierre Deligne", nl: "Pierre Deligne" },
          { en: "Vladimir Drinfeld", es: "Vladimir Drinfeld", de: "Vladimir Drinfeld", nl: "Vladimir Drinfeld" },
          { en: "Maxim Kontsevich", es: "Maxim Kontsevich", de: "Maxim Kontsevich", nl: "Maxim Kontsevich" }
        ],
        correct: 0,
        explanation: {
          en: "Alexander Beilinson, Joseph Bernstein, and Pierre Deligne developed the theory of perverse sheaves in the 1980s. Despite the unfortunate name (a mathematical joke), these objects became fundamental in algebraic geometry, representation theory, and the geometric Langlands program, providing powerful tools for studying singularities and intersection cohomology.",
          es: "Alexander Beilinson, Joseph Bernstein y Pierre Deligne desarrollaron la teoría de haces perversos en la década de 1980. A pesar del desafortunado nombre (una broma matemática), estos objetos se volvieron fundamentales en geometría algebraica, teoría de representaciones y el programa de Langlands geométrico, proporcionando herramientas poderosas para estudiar singularidades y cohomología de intersección.",
          de: "Alexander Beilinson, Joseph Bernstein und Pierre Deligne entwickelten in den 1980er Jahren die Theorie perverser Garben. Trotz des unglücklichen Namens (ein mathematischer Witz) wurden diese Objekte grundlegend in der algebraischen Geometrie, Darstellungstheorie und dem geometrischen Langlands-Programm und lieferten mächtige Werkzeuge zur Untersuchung von Singularitäten und Schnittkohomologie.",
          nl: "Alexander Beilinson, Joseph Bernstein en Pierre Deligne ontwikkelden in de jaren 1980 de theorie van perverse schoven. Ondanks de ongelukkige naam (een wiskundige grap) werden deze objecten fundamenteel in algebraïsche meetkunde, representatietheorie en het meetkundige Langlands-programma, wat krachtige instrumenten opleverde voor het bestuderen van singulariteiten en doorsnedecohomologie."
        }
      },
      {
        question: {
          en: "Which physicist discovered that black holes emit thermal radiation, now called Hawking radiation?",
          es: "¿Qué físico descubrió que los agujeros negros emiten radiación térmica, ahora llamada radiación de Hawking?",
          de: "Welcher Physiker entdeckte, dass Schwarze Löcher thermische Strahlung aussenden, heute Hawking-Strahlung genannt?",
          nl: "Welke natuurkundige ontdekte dat zwarte gaten thermische straling uitstralen, nu Hawking-straling genoemd?"
        },
        options: [
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" },
          { en: "Jacob Bekenstein", es: "Jacob Bekenstein", de: "Jacob Bekenstein", nl: "Jacob Bekenstein" },
          { en: "Roger Penrose", es: "Roger Penrose", de: "Roger Penrose", nl: "Roger Penrose" },
          { en: "Kip Thorne", es: "Kip Thorne", de: "Kip Thorne", nl: "Kip Thorne" }
        ],
        correct: 0,
        explanation: {
          en: "Stephen Hawking discovered in 1974 that black holes emit thermal radiation due to quantum effects near the event horizon, eventually evaporating completely. This revolutionary finding connected quantum mechanics, general relativity, and thermodynamics, though it raised the black hole information paradox, which remains partially unresolved.",
          es: "Stephen Hawking descubrió en 1974 que los agujeros negros emiten radiación térmica debido a efectos cuánticos cerca del horizonte de eventos, evaporándose eventualmente por completo. Este hallazgo revolucionario conectó mecánica cuántica, relatividad general y termodinámica, aunque planteó la paradoja de información del agujero negro, que permanece parcialmente sin resolver.",
          de: "Stephen Hawking entdeckte 1974, dass Schwarze Löcher aufgrund von Quanteneffekten in der Nähe des Ereignishorizonts thermische Strahlung aussenden und schließlich vollständig verdampfen. Diese revolutionäre Erkenntnis verband Quantenmechanik, allgemeine Relativitätstheorie und Thermodynamik, warf jedoch das Informationsparadoxon Schwarzer Löcher auf, das teilweise ungelöst bleibt.",
          nl: "Stephen Hawking ontdekte in 1974 dat zwarte gaten thermische straling uitstralen door kwantumeffecten nabij de waarnemingshorizon, waarbij ze uiteindelijk volledig verdampen. Deze revolutionaire ontdekking verbond kwantummechanica, algemene relativiteitstheorie en thermodynamica, hoewel het de zwarte gaten-informatieparadox opriep, die gedeeltelijk onopgelost blijft."
        }
      },
      {
        question: {
          en: "Who discovered prion diseases and their unique mechanism of protein misfolding?",
          es: "¿Quién descubrió las enfermedades priónicas y su mecanismo único de mal plegamiento de proteínas?",
          de: "Wer entdeckte Prionenkrankheiten und ihren einzigartigen Mechanismus der Proteinfehlfaltung?",
          nl: "Wie ontdekte prionziekten en hun unieke mechanisme van eiwitvouwingsfout?"
        },
        options: [
          { en: "Stanley Prusiner", es: "Stanley Prusiner", de: "Stanley Prusiner", nl: "Stanley Prusiner" },
          { en: "Carleton Gajdusek", es: "Carleton Gajdusek", de: "Carleton Gajdusek", nl: "Carleton Gajdusek" },
          { en: "Luc Montagnier", es: "Luc Montagnier", de: "Luc Montagnier", nl: "Luc Montagnier" },
          { en: "Frederick Sanger", es: "Frederick Sanger", de: "Frederick Sanger", nl: "Frederick Sanger" }
        ],
        correct: 0,
        explanation: {
          en: "Stanley Prusiner discovered prions in the 1980s, showing that proteins alone (without nucleic acids) can transmit disease by causing normal proteins to misfold. This revolutionary finding challenged the central dogma of molecular biology and earned him the 1997 Nobel Prize in Physiology or Medicine. Prion diseases include Creutzfeldt-Jakob disease and mad cow disease.",
          es: "Stanley Prusiner descubrió los priones en la década de 1980, mostrando que las proteínas solas (sin ácidos nucleicos) pueden transmitir enfermedades al causar que las proteínas normales se plieguen mal. Este hallazgo revolucionario desafió el dogma central de la biología molecular y le valió el Premio Nobel de Fisiología o Medicina de 1997. Las enfermedades priónicas incluyen la enfermedad de Creutzfeldt-Jakob y la enfermedad de las vacas locas.",
          de: "Stanley Prusiner entdeckte in den 1980er Jahren Prionen und zeigte, dass Proteine allein (ohne Nukleinsäuren) Krankheiten übertragen können, indem sie normale Proteine zur Fehlfaltung veranlassen. Diese revolutionäre Erkenntnis stellte das zentrale Dogma der Molekularbiologie in Frage und brachte ihm 1997 den Nobelpreis für Physiologie oder Medizin ein. Prionenkrankheiten umfassen die Creutzfeldt-Jakob-Krankheit und Rinderwahn.",
          nl: "Stanley Prusiner ontdekte prionen in de jaren 1980 en toonde aan dat eiwitten alleen (zonder nucleïnezuren) ziekten kunnen overdragen door normale eiwitten verkeerd te laten vouwen. Deze revolutionaire ontdekking daagde het centrale dogma van de moleculaire biologie uit en leverde hem de Nobelprijs voor Fysiologie of Geneeskunde van 1997 op. Prionziekten omvatten de ziekte van Creutzfeldt-Jakob en gekkekoeienziekte."
        }
      },
      {
        question: {
          en: "Which mathematician proved the geometric Langlands conjecture for complex curves?",
          es: "¿Qué matemático demostró la conjetura de Langlands geométrica para curvas complejas?",
          de: "Welcher Mathematiker bewies die geometrische Langlands-Vermutung für komplexe Kurven?",
          nl: "Welke wiskundige bewees het meetkundige Langlands-vermoeden voor complexe krommen?"
        },
        options: [
          { en: "Dennis Gaitsgory", es: "Dennis Gaitsgory", de: "Dennis Gaitsgory", nl: "Dennis Gaitsgory" },
          { en: "Robert Langlands", es: "Robert Langlands", de: "Robert Langlands", nl: "Robert Langlands" },
          { en: "Edward Frenkel", es: "Edward Frenkel", de: "Edward Frenkel", nl: "Edward Frenkel" },
          { en: "Richard Taylor", es: "Richard Taylor", de: "Richard Taylor", nl: "Richard Taylor" }
        ],
        correct: 0,
        explanation: {
          en: "Dennis Gaitsgory, along with collaborators including Sam Raskin, announced a proof of the geometric Langlands conjecture for complex curves in 2024. This represents a major breakthrough in the Langlands program, which seeks deep connections between different areas of mathematics including number theory, geometry, and representation theory.",
          es: "Dennis Gaitsgory, junto con colaboradores incluyendo a Sam Raskin, anunció una prueba de la conjetura de Langlands geométrica para curvas complejas en 2024. Esto representa un gran avance en el programa de Langlands, que busca conexiones profundas entre diferentes áreas de las matemáticas incluyendo teoría de números, geometría y teoría de representaciones.",
          de: "Dennis Gaitsgory kündigte zusammen mit Mitarbeitern, darunter Sam Raskin, 2024 einen Beweis der geometrischen Langlands-Vermutung für komplexe Kurven an. Dies stellt einen bedeutenden Durchbruch im Langlands-Programm dar, das tiefe Verbindungen zwischen verschiedenen Bereichen der Mathematik sucht, darunter Zahlentheorie, Geometrie und Darstellungstheorie.",
          nl: "Dennis Gaitsgory kondigde samen met medewerkers, waaronder Sam Raskin, in 2024 een bewijs aan van het meetkundige Langlands-vermoeden voor complexe krommen. Dit vertegenwoordigt een belangrijke doorbraak in het Langlands-programma, dat diepe verbindingen zoekt tussen verschillende gebieden van de wiskunde, waaronder getaltheorie, meetkunde en representatietheorie."
        }
      },
      {
        question: {
          en: "Who discovered the first brown dwarf, confirming the existence of objects between planets and stars?",
          es: "¿Quién descubrió la primera enana marrón, confirmando la existencia de objetos entre planetas y estrellas?",
          de: "Wer entdeckte den ersten Braunen Zwerg und bestätigte damit die Existenz von Objekten zwischen Planeten und Sternen?",
          nl: "Wie ontdekte de eerste bruine dwerg en bevestigde daarmee het bestaan van objecten tussen planeten en sterren?"
        },
        options: [
          { en: "Shiv Kumar", es: "Shiv Kumar", de: "Shiv Kumar", nl: "Shiv Kumar" },
          { en: "Jill Tarter", es: "Jill Tarter", de: "Jill Tarter", nl: "Jill Tarter" },
          { en: "Michel Mayor", es: "Michel Mayor", de: "Michel Mayor", nl: "Michel Mayor" },
          { en: "Gibor Basri", es: "Gibor Basri", de: "Gibor Basri", nl: "Gibor Basri" }
        ],
        correct: 0,
        explanation: {
          en: "Shiv Kumar predicted brown dwarfs theoretically in 1963, though the first confirmed discovery was Gliese 229B in 1995 by Tadashi Nakajima and collaborators. Brown dwarfs are substellar objects too massive to be planets but not massive enough to sustain hydrogen fusion, filling a crucial gap in our understanding of stellar evolution.",
          es: "Shiv Kumar predijo las enanas marrones teóricamente en 1963, aunque el primer descubrimiento confirmado fue Gliese 229B en 1995 por Tadashi Nakajima y colaboradores. Las enanas marrones son objetos subestelares demasiado masivos para ser planetas pero no lo suficientemente masivos para sostener fusión de hidrógeno, llenando un vacío crucial en nuestra comprensión de la evolución estelar.",
          de: "Shiv Kumar sagte Braune Zwerge 1963 theoretisch voraus, obwohl die erste bestätigte Entdeckung Gliese 229B im Jahr 1995 durch Tadashi Nakajima und Mitarbeiter war. Braune Zwerge sind substellare Objekte, die zu massereich sind, um Planeten zu sein, aber nicht massereich genug, um Wasserstofffusion aufrechtzuerhalten, und füllen eine entscheidende Lücke in unserem Verständnis der Sternentwicklung.",
          nl: "Shiv Kumar voorspelde bruine dwergen theoretisch in 1963, hoewel de eerste bevestigde ontdekking Gliese 229B was in 1995 door Tadashi Nakajima en medewerkers. Bruine dwergen zijn substellaire objecten die te massief zijn om planeten te zijn, maar niet massief genoeg om waterstoffusie te onderhouden, wat een cruciale kloof vult in ons begrip van stellaire evolutie."
        }
      },
      {
        question: {
          en: "Which chemist discovered the fullerenes (buckyballs), a new form of carbon?",
          es: "¿Qué químico descubrió los fullerenos (buckyballs), una nueva forma de carbono?",
          de: "Welcher Chemiker entdeckte die Fullerene (Buckyballs), eine neue Form von Kohlenstoff?",
          nl: "Welke chemicus ontdekte de fullerenen (buckyballs), een nieuwe vorm van koolstof?"
        },
        options: [
          { en: "Harold Kroto", es: "Harold Kroto", de: "Harold Kroto", nl: "Harold Kroto" },
          { en: "Richard Smalley", es: "Richard Smalley", de: "Richard Smalley", nl: "Richard Smalley" },
          { en: "Robert Curl", es: "Robert Curl", de: "Robert Curl", nl: "Robert Curl" },
          { en: "Sumio Iijima", es: "Sumio Iijima", de: "Sumio Iijima", nl: "Sumio Iijima" }
        ],
        correct: 0,
        explanation: {
          en: "Harold Kroto, Robert Curl, and Richard Smalley discovered buckminsterfullerene (C60) in 1985, a soccer-ball-shaped molecule of 60 carbon atoms. This discovery revealed a third form of pure carbon (alongside diamond and graphite), earned them the 1996 Nobel Prize in Chemistry, and opened the field of nanotechnology.",
          es: "Harold Kroto, Robert Curl y Richard Smalley descubrieron el buckminsterfullereno (C60) en 1985, una molécula en forma de balón de fútbol de 60 átomos de carbono. Este descubrimiento reveló una tercera forma de carbono puro (junto al diamante y grafito), les valió el Premio Nobel de Química de 1996 y abrió el campo de la nanotecnología.",
          de: "Harold Kroto, Robert Curl und Richard Smalley entdeckten 1985 Buckminsterfullerene (C60), ein fußballförmiges Molekül aus 60 Kohlenstoffatomen. Diese Entdeckung enthüllte eine dritte Form von reinem Kohlenstoff (neben Diamant und Graphit), brachte ihnen 1996 den Nobelpreis für Chemie ein und eröffnete das Feld der Nanotechnologie.",
          nl: "Harold Kroto, Robert Curl en Richard Smalley ontdekten in 1985 buckminsterfullerene (C60), een voetbalvormig molecuul van 60 koolstofatomen. Deze ontdekking onthulde een derde vorm van pure koolstof (naast diamant en grafiet), leverde hen de Nobelprijs voor Scheikunde van 1996 op en opende het veld van de nanotechnologie."
        }
      },
      {
        question: {
          en: "Who developed the theory of quantum decoherence, explaining the quantum-classical boundary?",
          es: "¿Quién desarrolló la teoría de decoherencia cuántica, explicando la frontera cuántico-clásica?",
          de: "Wer entwickelte die Theorie der Quantendekohärenz und erklärte damit die Quanten-Klassik-Grenze?",
          nl: "Wie ontwikkelde de theorie van kwantumdecoherentie, wat de kwantum-klassieke grens verklaarde?"
        },
        options: [
          { en: "Wojciech Zurek", es: "Wojciech Zurek", de: "Wojciech Zurek", nl: "Wojciech Zurek" },
          { en: "Hugh Everett", es: "Hugh Everett", de: "Hugh Everett", nl: "Hugh Everett" },
          { en: "John von Neumann", es: "John von Neumann", de: "John von Neumann", nl: "John von Neumann" },
          { en: "David Bohm", es: "David Bohm", de: "David Bohm", nl: "David Bohm" }
        ],
        correct: 0,
        explanation: {
          en: "Wojciech Zurek developed the theory of quantum decoherence in the 1980s, showing how quantum systems lose their coherence through interaction with their environment, explaining the emergence of classical behavior. This resolved many puzzles about quantum measurement and provided a framework for understanding why we don't see quantum superpositions in everyday life.",
          es: "Wojciech Zurek desarrolló la teoría de decoherencia cuántica en la década de 1980, mostrando cómo los sistemas cuánticos pierden su coherencia a través de la interacción con su entorno, explicando la emergencia del comportamiento clásico. Esto resolvió muchos enigmas sobre medición cuántica y proporcionó un marco para entender por qué no vemos superposiciones cuánticas en la vida cotidiana.",
          de: "Wojciech Zurek entwickelte in den 1980er Jahren die Theorie der Quantendekohärenz und zeigte, wie Quantensysteme durch Wechselwirkung mit ihrer Umgebung ihre Kohärenz verlieren, was die Entstehung klassischen Verhaltens erklärt. Dies löste viele Rätsel über Quantenmessungen und lieferte einen Rahmen zum Verständnis, warum wir im Alltag keine Quantensuperposition sehen.",
          nl: "Wojciech Zurek ontwikkelde in de jaren 1980 de theorie van kwantumdecoherentie, waarbij hij aantoonde hoe kwantumsystemen hun coherentie verliezen door interactie met hun omgeving, wat de opkomst van klassiek gedrag verklaarde. Dit loste veel puzzels over kwantummetingen op en bood een raamwerk voor het begrijpen waarom we geen kwantumsuperposities in het dagelijks leven zien."
        }
      },
      {
        question: {
          en: "Which mathematician solved the Kadison-Singer problem, connecting operator algebras to signal processing?",
          es: "¿Qué matemático resolvió el problema de Kadison-Singer, conectando álgebras de operadores con procesamiento de señales?",
          de: "Welcher Mathematiker löste das Kadison-Singer-Problem und verband damit Operatoralgebren mit Signalverarbeitung?",
          nl: "Welke wiskundige loste het Kadison-Singer-probleem op, wat operatoralgebra's verbond met signaalverwerking?"
        },
        options: [
          { en: "Adam Marcus", es: "Adam Marcus", de: "Adam Marcus", nl: "Adam Marcus" },
          { en: "Terence Tao", es: "Terence Tao", de: "Terence Tao", nl: "Terence Tao" },
          { en: "Timothy Gowers", es: "Timothy Gowers", de: "Timothy Gowers", nl: "Timothy Gowers" },
          { en: "Noga Alon", es: "Noga Alon", de: "Noga Alon", nl: "Noga Alon" }
        ],
        correct: 0,
        explanation: {
          en: "Adam Marcus, Daniel Spielman, and Nikhil Srivastava solved the Kadison-Singer problem in 2013, a 50-year-old question in operator theory that had implications across mathematics, from functional analysis to signal processing. Their proof used techniques from random matrix theory and graph theory, surprising experts with its elegant approach.",
          es: "Adam Marcus, Daniel Spielman y Nikhil Srivastava resolvieron el problema de Kadison-Singer en 2013, una pregunta de 50 años en teoría de operadores que tenía implicaciones en toda las matemáticas, desde análisis funcional hasta procesamiento de señales. Su prueba utilizó técnicas de teoría de matrices aleatorias y teoría de grafos, sorprendiendo a expertos con su enfoque elegante.",
          de: "Adam Marcus, Daniel Spielman und Nikhil Srivastava lösten 2013 das Kadison-Singer-Problem, eine 50 Jahre alte Frage in der Operatortheorie mit Auswirkungen auf die gesamte Mathematik, von der Funktionalanalysis bis zur Signalverarbeitung. Ihr Beweis verwendete Techniken aus der Theorie zufälliger Matrizen und Graphentheorie und überraschte Experten mit seinem eleganten Ansatz.",
          nl: "Adam Marcus, Daniel Spielman en Nikhil Srivastava losten in 2013 het Kadison-Singer-probleem op, een 50 jaar oude vraag in operatortheorie met implicaties over de gehele wiskunde, van functionele analyse tot signaalverwerking. Hun bewijs gebruikte technieken uit de theorie van willekeurige matrices en grafentheorie en verraste experts met zijn elegante aanpak."
        }
      },
      {
        question: {
          en: "Who discovered the mechanism of autophagy, the cell's self-eating process?",
          es: "¿Quién descubrió el mecanismo de autofagia, el proceso de autoconsumo celular?",
          de: "Wer entdeckte den Mechanismus der Autophagie, den Selbstverdauungsprozess der Zelle?",
          nl: "Wie ontdekte het mechanisme van autofagie, het zelfetende proces van de cel?"
        },
        options: [
          { en: "Yoshinori Ohsumi", es: "Yoshinori Ohsumi", de: "Yoshinori Ohsumi", nl: "Yoshinori Ohsumi" },
          { en: "Christian de Duve", es: "Christian de Duve", de: "Christian de Duve", nl: "Christian de Duve" },
          { en: "Günter Blobel", es: "Günter Blobel", de: "Günter Blobel", nl: "Günter Blobel" },
          { en: "Randy Schekman", es: "Randy Schekman", de: "Randy Schekman", nl: "Randy Schekman" }
        ],
        correct: 0,
        explanation: {
          en: "Yoshinori Ohsumi discovered the molecular mechanisms of autophagy in yeast in the 1990s, identifying key genes responsible for this cellular recycling process. His work earned him the 2016 Nobel Prize in Physiology or Medicine and revealed how cells break down and recycle their own components, crucial for health, aging, and disease.",
          es: "Yoshinori Ohsumi descubrió los mecanismos moleculares de autofagia en levaduras en la década de 1990, identificando genes clave responsables de este proceso de reciclaje celular. Su trabajo le valió el Premio Nobel de Fisiología o Medicina de 2016 y reveló cómo las células descomponen y reciclan sus propios componentes, crucial para salud, envejecimiento y enfermedad.",
          de: "Yoshinori Ohsumi entdeckte in den 1990er Jahren die molekularen Mechanismen der Autophagie in Hefen und identifizierte Schlüsselgene, die für diesen zellulären Recyclingprozess verantwortlich sind. Seine Arbeit brachte ihm 2016 den Nobelpreis für Physiologie oder Medizin ein und enthüllte, wie Zellen ihre eigenen Bestandteile abbauen und recyceln, was für Gesundheit, Alterung und Krankheit entscheidend ist.",
          nl: "Yoshinori Ohsumi ontdekte in de jaren 1990 de moleculaire mechanismen van autofagie in gist en identificeerde cruciale genen die verantwoordelijk zijn voor dit cellulaire recyclingproces. Zijn werk leverde hem de Nobelprijs voor Fysiologie of Geneeskunde van 2016 op en onthulde hoe cellen hun eigen componenten afbreken en recyclen, wat cruciaal is voor gezondheid, veroudering en ziekte."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
