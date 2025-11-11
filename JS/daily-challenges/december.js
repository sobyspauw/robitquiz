// December Daily Challenges - 31 days × 5 questions each = 155 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {

  const decemberChallenges = {
    name: {
      en: "December Daily Challenges",
      es: "Desafíos Diarios de Diciembre",
      de: "Dezember Tägliche Herausforderungen",
      nl: "December Dagelijkse Uitdagingen"
    },

    day1: [ /* 5 questions */
      {
        question: {
          en: "On December 1, 1955, Rosa Parks refused to give up her bus seat in which Alabama city?",
          es: "El 1 de diciembre de 1955, Rosa Parks se negó a ceder su asiento de autobús en qué ciudad de Alabama?",
          de: "Am 1. Dezember 1955 weigerte sich Rosa Parks, ihren Bussitz in welcher Stadt in Alabama aufzugeben?",
          nl: "Op 1 december 1955 weigerde Rosa Parks haar busstoel af te staan in welke stad in Alabama?"
        },
        options: [
          { en: "Selma", es: "Selma", de: "Selma", nl: "Selma" },
          { en: "Birmingham", es: "Birmingham", de: "Birmingham", nl: "Birmingham" },
          { en: "Mobile", es: "Mobile", de: "Mobile", nl: "Mobile" },
          { en: "Montgomery", es: "Montgomery", de: "Montgomery", nl: "Montgomery" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Rosa Parks refused to give up her seat on a Montgomery bus on December 1, 1955, sparking the Montgomery Bus Boycott, a pivotal event in the Civil Rights Movement led by Dr. Martin Luther King Jr.",
          es: "Rosa Parks se negó a ceder su asiento en un autobús de Montgomery el 1 de diciembre de 1955, lo que desencadenó el Boicot de Autobuses de Montgomery, un evento fundamental en el Movimiento por los Derechos Civiles liderado por el Dr. Martin Luther King Jr.",
          de: "Rosa Parks weigerte sich am 1. Dezember 1955, ihren Platz in einem Bus in Montgomery aufzugeben, was den Montgomery Bus Boycott auslöste, ein entscheidendes Ereignis in der Bürgerrechtsbewegung unter der Führung von Dr. Martin Luther King Jr.",
          nl: "Rosa Parks weigerde op 1 december 1955 haar stoel in een bus in Montgomery af te staan, wat de Montgomery Bus Boycott veroorzaakte, een cruciaal moment in de burgerrechtenbeweging onder leiding van Dr. Martin Luther King Jr."
        }
      },
      {
        question: {
          en: "December 1 is recognized annually as World AIDS Day. In which year was this observance first established?",
          es: "El 1 de diciembre se reconoce anualmente como Día Mundial del SIDA. ¿En qué año se estableció esta conmemoración por primera vez?",
          de: "Der 1. Dezember wird jährlich als Welt-AIDS-Tag anerkannt. In welchem Jahr wurde dieser Gedenktag erstmals eingeführt?",
          nl: "1 december wordt jaarlijks erkend als Wereld Aids Dag. In welk jaar werd deze dag voor het eerst ingesteld?"
        },
        options: [
          { en: "1992", es: "1992", de: "1992", nl: "1992" },
          { en: "1988", es: "1988", de: "1988", nl: "1988" },
          { en: "1981", es: "1981", de: "1981", nl: "1981" },
          { en: "1995", es: "1995", de: "1995", nl: "1995" }
        ],
        correctIndex: 1,
        explanation: {
          en: "World AIDS Day was first observed on December 1, 1988, making it the first-ever global health day. It aims to raise awareness about HIV/AIDS, remember those who have died, and celebrate victories in the fight against the disease.",
          es: "El Día Mundial del SIDA se celebró por primera vez el 1 de diciembre de 1988, convirtiéndose en el primer día mundial de la salud. Su objetivo es crear conciencia sobre el VIH/SIDA, recordar a quienes han fallecido y celebrar las victorias en la lucha contra la enfermedad.",
          de: "Der Welt-AIDS-Tag wurde erstmals am 1. Dezember 1988 begangen und war damit der allererste globale Gesundheitstag. Er zielt darauf ab, das Bewusstsein für HIV/AIDS zu schärfen, an die Verstorbenen zu erinnern und Erfolge im Kampf gegen die Krankheit zu feiern.",
          nl: "Wereld Aids Dag werd voor het eerst gehouden op 1 december 1988, waarmee het de allereerste mondiale gezondheidsdag werd. Het doel is bewustzijn te creëren over hiv/aids, degenen te herdenken die zijn overleden en overwinningen in de strijd tegen de ziekte te vieren."
        }
      },
      {
        question: {
          en: "The Antarctic Treaty, which sets aside Antarctica as a scientific preserve, was signed on December 1 of which year?",
          es: "El Tratado Antártico, que reserva la Antártida como reserva científica, se firmó el 1 de diciembre de qué año?",
          de: "Der Antarktisvertrag, der die Antarktis als wissenschaftliches Schutzgebiet ausweist, wurde am 1. Dezember welchen Jahres unterzeichnet?",
          nl: "Het Antarctisch Verdrag, dat Antarctica als wetenschappelijk reservaat aanwijst, werd ondertekend op 1 december van welk jaar?"
        },
        options: [
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1963", es: "1963", de: "1963", nl: "1963" },
          { en: "1972", es: "1972", de: "1972", nl: "1972" },
          { en: "1959", es: "1959", de: "1959", nl: "1959" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Antarctic Treaty was signed on December 1, 1959, by 12 nations during the Cold War. It established Antarctica as a zone dedicated to peace and science, prohibiting military activity and nuclear testing on the continent.",
          es: "El Tratado Antártico fue firmado el 1 de diciembre de 1959 por 12 naciones durante la Guerra Fría. Estableció la Antártida como una zona dedicada a la paz y la ciencia, prohibiendo la actividad militar y las pruebas nucleares en el continente.",
          de: "Der Antarktisvertrag wurde am 1. Dezember 1959 von 12 Nationen während des Kalten Krieges unterzeichnet. Er legte die Antarktis als eine dem Frieden und der Wissenschaft gewidmete Zone fest und verbot militärische Aktivitäten und Atomtests auf dem Kontinent.",
          nl: "Het Antarctisch Verdrag werd ondertekend op 1 december 1959 door 12 naties tijdens de Koude Oorlog. Het stelde Antarctica in als een zone gewijd aan vrede en wetenschap, en verbood militaire activiteit en kernproeven op het continent."
        }
      },
      {
        question: {
          en: "Iceland gained full independence from which country on December 1, 1918?",
          es: "Islandia obtuvo la independencia total de qué país el 1 de diciembre de 1918?",
          de: "Island erlangte am 1. Dezember 1918 die vollständige Unabhängigkeit von welchem Land?",
          nl: "IJsland werd volledig onafhankelijk van welk land op 1 december 1918?"
        },
        options: [
          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" },
          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Denmark", es: "Dinamarca", de: "Dänemark", nl: "Denemarken" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Iceland became a sovereign state in personal union with Denmark on December 1, 1918, though it remained under the Danish monarchy. Full independence was achieved in 1944 when Iceland became a republic.",
          es: "Islandia se convirtió en un estado soberano en unión personal con Dinamarca el 1 de diciembre de 1918, aunque permaneció bajo la monarquía danesa. La independencia total se logró en 1944 cuando Islandia se convirtió en república.",
          de: "Island wurde am 1. Dezember 1918 ein souveräner Staat in Personalunion mit Dänemark, blieb jedoch unter der dänischen Monarchie. Die vollständige Unabhängigkeit wurde 1944 erreicht, als Island eine Republik wurde.",
          nl: "IJsland werd op 1 december 1918 een soevereine staat in personele unie met Denemarken, hoewel het onder de Deense monarchie bleef. Volledige onafhankelijkheid werd bereikt in 1944 toen IJsland een republiek werd."
        }
      },
      {
        question: {
          en: "Rosa Parks' act of defiance led to a bus boycott that lasted approximately how many days?",
          es: "El acto de desafío de Rosa Parks llevó a un boicot de autobuses que duró aproximadamente cuántos días?",
          de: "Rosa Parks' Akt des Widerstands führte zu einem Bus-Boykott, der ungefähr wie viele Tage dauerte?",
          nl: "Rosa Parks' daad van verzet leidde tot een busboycot die ongeveer hoeveel dagen duurde?"
        },
        options: [
          { en: "200 days", es: "200 días", de: "200 Tage", nl: "200 dagen" },
          { en: "381 days", es: "381 días", de: "381 Tage", nl: "381 dagen" },
          { en: "100 days", es: "100 días", de: "100 Tage", nl: "100 dagen" },
          { en: "500 days", es: "500 días", de: "500 Tage", nl: "500 dagen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Montgomery Bus Boycott lasted 381 days, from December 5, 1955, to December 20, 1956. It ended when the U.S. Supreme Court ruled that segregation on public buses was unconstitutional, marking a major victory for the Civil Rights Movement.",
          es: "El Boicot de Autobuses de Montgomery duró 381 días, desde el 5 de diciembre de 1955 hasta el 20 de diciembre de 1956. Terminó cuando la Corte Suprema de EE. UU. dictaminó que la segregación en los autobuses públicos era inconstitucional, marcando una gran victoria para el Movimiento por los Derechos Civiles.",
          de: "Der Montgomery Bus Boycott dauerte 381 Tage, vom 5. Dezember 1955 bis zum 20. Dezember 1956. Er endete, als der Oberste Gerichtshof der USA entschied, dass die Rassentrennung in öffentlichen Bussen verfassungswidrig sei, was einen großen Sieg für die Bürgerrechtsbewegung darstellte.",
          nl: "De Montgomery Bus Boycott duurde 381 dagen, van 5 december 1955 tot 20 december 1956. Het eindigde toen het Amerikaanse Hooggerechtshof oordeelde dat segregatie in openbare bussen ongrondwettelijk was, wat een grote overwinning betekende voor de burgerrechtenbeweging."
        }
      }
    ],

    day2: [ /* 5 questions */
      {
        question: {
          en: "The Monroe Doctrine was announced on December 2, 1823. Which U.S. President declared this foreign policy?",
          es: "La Doctrina Monroe se anunció el 2 de diciembre de 1823. ¿Qué presidente de EE. UU. declaró esta política exterior?",
          de: "Die Monroe-Doktrin wurde am 2. Dezember 1823 verkündet. Welcher US-Präsident verkündete diese Außenpolitik?",
          nl: "De Monroe-doctrine werd aangekondigd op 2 december 1823. Welke Amerikaanse president verkondigde dit buitenlands beleid?"
        },
        options: [
          { en: "John Quincy Adams", es: "John Quincy Adams", de: "John Quincy Adams", nl: "John Quincy Adams" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Andrew Jackson", es: "Andrew Jackson", de: "Andrew Jackson", nl: "Andrew Jackson" },
          { en: "James Monroe", es: "James Monroe", de: "James Monroe", nl: "James Monroe" }
        ],
        correctIndex: 3,
        explanation: {
          en: "President James Monroe declared the Monroe Doctrine in his annual message to Congress on December 2, 1823. The doctrine warned European nations against further colonization and interference in the Americas, establishing a cornerstone of U.S. foreign policy.",
          es: "El presidente James Monroe declaró la Doctrina Monroe en su mensaje anual al Congreso el 2 de diciembre de 1823. La doctrina advirtió a las naciones europeas contra la colonización adicional y la interferencia en las Américas, estableciendo una piedra angular de la política exterior estadounidense.",
          de: "Präsident James Monroe verkündete die Monroe-Doktrin in seiner jährlichen Botschaft an den Kongress am 2. Dezember 1823. Die Doktrin warnte europäische Nationen vor weiterer Kolonialisierung und Einmischung in Amerika und bildete einen Eckpfeiler der US-Außenpolitik.",
          nl: "President James Monroe verkondigde de Monroe-doctrine in zijn jaarlijkse boodschap aan het Congres op 2 december 1823. De doctrine waarschuwde Europese naties tegen verdere kolonisatie en inmenging in Amerika, en vormde een hoeksteen van het Amerikaanse buitenlandse beleid."
        }
      },
      {
        question: {
          en: "What was the main principle of the Monroe Doctrine announced in 1823?",
          es: "¿Cuál fue el principio principal de la Doctrina Monroe anunciada en 1823?",
          de: "Was war das Hauptprinzip der Monroe-Doktrin, die 1823 verkündet wurde?",
          nl: "Wat was het hoofdprincipe van de Monroe-doctrine aangekondigd in 1823?"
        },
        options: [
          { en: "Expansion of U.S. territories", es: "Expansión de territorios estadounidenses", de: "Erweiterung der US-Territorien", nl: "Uitbreiding van Amerikaanse gebieden" },
          { en: "Free trade with all nations", es: "Comercio libre con todas las naciones", de: "Freihandel mit allen Nationen", nl: "Vrije handel met alle naties" },
          { en: "European non-intervention in the Americas", es: "No intervención europea en las Américas", de: "Europäische Nichteinmischung in Amerika", nl: "Europese niet-inmenging in Amerika" },
          { en: "Abolition of slavery", es: "Abolición de la esclavitud", de: "Abschaffung der Sklaverei", nl: "Afschaffing van slavernij" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Monroe Doctrine's main principle was to oppose European colonialism and intervention in the Americas. It stated that any European attempt to colonize or interfere with states in the Americas would be viewed as acts of aggression requiring U.S. intervention.",
          es: "El principio principal de la Doctrina Monroe fue oponerse al colonialismo e intervención europea en las Américas. Estableció que cualquier intento europeo de colonizar o interferir con estados en las Américas sería visto como actos de agresión que requerirían intervención estadounidense.",
          de: "Das Hauptprinzip der Monroe-Doktrin war die Ablehnung des europäischen Kolonialismus und der Einmischung in Amerika. Sie besagte, dass jeder europäische Versuch, Staaten in Amerika zu kolonialisieren oder sich einzumischen, als Aggressionsakte angesehen würde, die ein Eingreifen der USA erfordern.",
          nl: "Het hoofdprincipe van de Monroe-doctrine was om Europees kolonialisme en inmenging in Amerika tegen te gaan. Het stelde dat elke Europese poging om staten in Amerika te koloniseren of ermee te bemoeien zou worden gezien als agressiedaden die Amerikaanse interventie vereisten."
        }
      },
      {
        question: {
          en: "On December 2, 1804, Napoleon Bonaparte crowned himself Emperor of France. In which famous cathedral did this coronation take place?",
          es: "El 2 de diciembre de 1804, Napoleón Bonaparte se coronó a sí mismo como Emperador de Francia. ¿En qué famosa catedral tuvo lugar esta coronación?",
          de: "Am 2. Dezember 1804 krönte sich Napoleon Bonaparte selbst zum Kaiser von Frankreich. In welcher berühmten Kathedrale fand diese Krönung statt?",
          nl: "Op 2 december 1804 kroonde Napoleon Bonaparte zichzelf tot keizer van Frankrijk. In welke beroemde kathedraal vond deze kroning plaats?"
        },
        options: [
          { en: "Chartres Cathedral", es: "Catedral de Chartres", de: "Kathedrale von Chartres", nl: "Kathedraal van Chartres" },
          { en: "Reims Cathedral", es: "Catedral de Reims", de: "Kathedrale von Reims", nl: "Kathedraal van Reims" },
          { en: "Notre-Dame Cathedral", es: "Catedral de Notre-Dame", de: "Kathedrale Notre-Dame", nl: "Notre-Dame Kathedraal" },
          { en: "Sacré-Cœur Basilica", es: "Basílica del Sagrado Corazón", de: "Sacré-Cœur-Basilika", nl: "Sacré-Cœur Basiliek" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Napoleon crowned himself Emperor at Notre-Dame Cathedral in Paris on December 2, 1804. In a dramatic gesture, he took the crown from Pope Pius VII and placed it on his own head, symbolizing that his power came from his own merit, not divine right.",
          es: "Napoleón se coronó a sí mismo como Emperador en la Catedral de Notre-Dame en París el 2 de diciembre de 1804. En un gesto dramático, tomó la corona del Papa Pío VII y la colocó en su propia cabeza, simbolizando que su poder provenía de su propio mérito, no del derecho divino.",
          de: "Napoleon krönte sich am 2. Dezember 1804 in der Kathedrale Notre-Dame in Paris zum Kaiser. In einer dramatischen Geste nahm er die Krone von Papst Pius VII. und setzte sie sich selbst auf den Kopf, um zu symbolisieren, dass seine Macht aus seinen eigenen Verdiensten kam, nicht aus göttlichem Recht.",
          nl: "Napoleon kroonde zichzelf tot keizer in de Notre-Dame Kathedraal in Parijs op 2 december 1804. In een dramatisch gebaar nam hij de kroon van paus Pius VII en plaatste deze op zijn eigen hoofd, als symbool dat zijn macht voortkwam uit zijn eigen verdienste, niet uit goddelijk recht."
        }
      },
      {
        question: {
          en: "Laos gained independence from which colonial power on December 2, 1975?",
          es: "Laos obtuvo la independencia de qué potencia colonial el 2 de diciembre de 1975?",
          de: "Laos erlangte am 2. Dezember 1975 die Unabhängigkeit von welcher Kolonialmacht?",
          nl: "Laos werd onafhankelijk van welke koloniale mogendheid op 2 december 1975?"
        },
        options: [
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "France (became a communist state)", es: "Francia (se convirtió en estado comunista)", de: "Frankreich (wurde kommunistischer Staat)", nl: "Frankrijk (werd een communistische staat)" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On December 2, 1975, the communist Pathet Lao abolished the monarchy and established the Lao People's Democratic Republic. While Laos had gained independence from France in 1953, this date marked the end of the Kingdom of Laos and the beginning of communist rule.",
          es: "El 2 de diciembre de 1975, el comunista Pathet Lao abolió la monarquía y estableció la República Democrática Popular Lao. Aunque Laos había obtenido la independencia de Francia en 1953, esta fecha marcó el fin del Reino de Laos y el comienzo del gobierno comunista.",
          de: "Am 2. Dezember 1975 schaffte die kommunistische Pathet Lao die Monarchie ab und gründete die Demokratische Volksrepublik Laos. Während Laos 1953 die Unabhängigkeit von Frankreich erlangt hatte, markierte dieses Datum das Ende des Königreichs Laos und den Beginn der kommunistischen Herrschaft.",
          nl: "Op 2 december 1975 schafte de communistische Pathet Lao de monarchie af en vestigde de Democratische Volksrepubliek Laos. Hoewel Laos in 1953 onafhankelijk was geworden van Frankrijk, markeerde deze datum het einde van het Koninkrijk Laos en het begin van de communistische heerschappij."
        }
      },
      {
        question: {
          en: "Who painted Napoleon's coronation in the famous artwork that depicts the December 2, 1804 ceremony?",
          es: "¿Quién pintó la coronación de Napoleón en la famosa obra de arte que representa la ceremonia del 2 de diciembre de 1804?",
          de: "Wer malte Napoleons Krönung in dem berühmten Kunstwerk, das die Zeremonie vom 2. Dezember 1804 darstellt?",
          nl: "Wie schilderde de kroning van Napoleon in het beroemde kunstwerk dat de ceremonie van 2 december 1804 weergeeft?"
        },
        options: [
          { en: "Francisco Goya", es: "Francisco Goya", de: "Francisco Goya", nl: "Francisco Goya" },
          { en: "Jean-Auguste-Dominique Ingres", es: "Jean-Auguste-Dominique Ingres", de: "Jean-Auguste-Dominique Ingres", nl: "Jean-Auguste-Dominique Ingres" },
          { en: "Jacques-Louis David", es: "Jacques-Louis David", de: "Jacques-Louis David", nl: "Jacques-Louis David" },
          { en: "Eugène Delacroix", es: "Eugène Delacroix", de: "Eugène Delacroix", nl: "Eugène Delacroix" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Jacques-Louis David, Napoleon's official painter, created 'The Coronation of Napoleon' (1805-1807), a massive painting measuring over 6 by 9 meters. The painting is displayed in the Louvre Museum and depicts Napoleon crowning his wife Josephine as Empress.",
          es: "Jacques-Louis David, el pintor oficial de Napoleón, creó 'La coronación de Napoleón' (1805-1807), una pintura masiva que mide más de 6 por 9 metros. La pintura se exhibe en el Museo del Louvre y representa a Napoleón coronando a su esposa Josefina como Emperatriz.",
          de: "Jacques-Louis David, Napoleons offizieller Maler, schuf 'Die Krönung Napoleons' (1805-1807), ein massives Gemälde von über 6 mal 9 Metern. Das Gemälde wird im Louvre-Museum ausgestellt und zeigt Napoleon, wie er seine Frau Joséphine zur Kaiserin krönt.",
          nl: "Jacques-Louis David, Napoleons officiële schilder, creëerde 'De kroning van Napoleon' (1805-1807), een massaal schilderij van meer dan 6 bij 9 meter. Het schilderij wordt tentoongesteld in het Louvre Museum en toont Napoleon die zijn vrouw Josephine tot keizerin kroont."
        }
      }
    ],

    day3: [ /* 5 questions */
      {
        question: {
          en: "On December 3, 1967, Dr. Christiaan Barnard performed the world's first successful human heart transplant. In which country did this historic surgery take place?",
          es: "El 3 de diciembre de 1967, el Dr. Christiaan Barnard realizó el primer trasplante de corazón humano exitoso del mundo. ¿En qué país tuvo lugar esta cirugía histórica?",
          de: "Am 3. Dezember 1967 führte Dr. Christiaan Barnard die weltweit erste erfolgreiche menschliche Herztransplantation durch. In welchem Land fand diese historische Operation statt?",
          nl: "Op 3 december 1967 voerde Dr. Christiaan Barnard 's werelds eerste succesvolle menselijke harttransplantatie uit. In welk land vond deze historische operatie plaats?"
        },
        options: [
          { en: "South Africa", es: "Sudáfrica", de: "Südafrika", nl: "Zuid-Afrika" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Dr. Christiaan Barnard performed the first human heart transplant at Groote Schuur Hospital in Cape Town, South Africa. The patient, Louis Washkansky, received the heart of a 25-year-old woman and survived for 18 days, marking a breakthrough in cardiac surgery.",
          es: "El Dr. Christiaan Barnard realizó el primer trasplante de corazón humano en el Hospital Groote Schuur en Ciudad del Cabo, Sudáfrica. El paciente, Louis Washkansky, recibió el corazón de una mujer de 25 años y sobrevivió durante 18 días, marcando un avance en la cirugía cardíaca.",
          de: "Dr. Christiaan Barnard führte die erste menschliche Herztransplantation im Groote Schuur Hospital in Kapstadt, Südafrika, durch. Der Patient Louis Washkansky erhielt das Herz einer 25-jährigen Frau und überlebte 18 Tage, was einen Durchbruch in der Herzchirurgie bedeutete.",
          nl: "Dr. Christiaan Barnard voerde de eerste menselijke harttransplantatie uit in het Groote Schuur Hospital in Kaapstad, Zuid-Afrika. De patiënt, Louis Washkansky, ontving het hart van een 25-jarige vrouw en overleefde 18 dagen, wat een doorbraak betekende in de hartchirurgie."
        }
      },
      {
        question: {
          en: "How long did the first heart transplant patient, Louis Washkansky, survive after the December 3, 1967 operation?",
          es: "¿Cuánto tiempo sobrevivió el primer paciente de trasplante de corazón, Louis Washkansky, después de la operación del 3 de diciembre de 1967?",
          de: "Wie lange überlebte der erste Herztransplantationspatient Louis Washkansky nach der Operation vom 3. Dezember 1967?",
          nl: "Hoe lang overleefde de eerste harttransplantatiepatiënt, Louis Washkansky, na de operatie van 3 december 1967?"
        },
        options: [
          { en: "18 days", es: "18 días", de: "18 Tage", nl: "18 dagen" },
          { en: "6 months", es: "6 meses", de: "6 Monate", nl: "6 maanden" },
          { en: "3 days", es: "3 días", de: "3 Tage", nl: "3 dagen" },
          { en: "1 year", es: "1 año", de: "1 Jahr", nl: "1 jaar" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Louis Washkansky survived for 18 days after receiving the transplanted heart. He died from pneumonia, a common complication due to the immunosuppressive drugs needed to prevent organ rejection. Despite the short survival time, the surgery proved the procedure was technically possible.",
          es: "Louis Washkansky sobrevivió durante 18 días después de recibir el corazón trasplantado. Murió de neumonía, una complicación común debido a los medicamentos inmunosupresores necesarios para prevenir el rechazo del órgano. A pesar del corto tiempo de supervivencia, la cirugía demostró que el procedimiento era técnicamente posible.",
          de: "Louis Washkansky überlebte 18 Tage nach Erhalt des transplantierten Herzens. Er starb an einer Lungenentzündung, einer häufigen Komplikation aufgrund der immunsuppressiven Medikamente, die zur Verhinderung der Organabstoßung erforderlich waren. Trotz der kurzen Überlebenszeit bewies die Operation, dass das Verfahren technisch möglich war.",
          nl: "Louis Washkansky overleefde 18 dagen na het ontvangen van het getransplanteerde hart. Hij stierf aan longontsteking, een veel voorkomende complicatie als gevolg van de immunosuppressieve medicijnen die nodig zijn om afstoting van het orgaan te voorkomen. Ondanks de korte overlevingstijd bewees de operatie dat de procedure technisch mogelijk was."
        }
      },
      {
        question: {
          en: "On December 3, 1992, the first SMS text message was sent. What did this historic text message say?",
          es: "El 3 de diciembre de 1992, se envió el primer mensaje de texto SMS. ¿Qué decía este mensaje de texto histórico?",
          de: "Am 3. Dezember 1992 wurde die erste SMS-Textnachricht gesendet. Was stand in dieser historischen Textnachricht?",
          nl: "Op 3 december 1992 werd het eerste SMS-tekstbericht verzonden. Wat stond er in dit historische tekstbericht?"
        },
        options: [
          { en: "Test Message", es: "Mensaje de Prueba", de: "Testnachricht", nl: "Testbericht" },
          { en: "Hello World", es: "Hola Mundo", de: "Hallo Welt", nl: "Hallo Wereld" },
          { en: "Merry Christmas", es: "Feliz Navidad", de: "Frohe Weihnachten", nl: "Vrolijk Kerstfeest" },
          { en: "Welcome", es: "Bienvenido", de: "Willkommen", nl: "Welkom" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first SMS text message said 'Merry Christmas' and was sent by Neil Papworth, a test engineer, to Richard Jarvis of Vodafone on December 3, 1992. The message was sent from a computer to a mobile phone, as phones didn't yet have keyboards for typing.",
          es: "El primer mensaje de texto SMS decía 'Feliz Navidad' y fue enviado por Neil Papworth, un ingeniero de pruebas, a Richard Jarvis de Vodafone el 3 de diciembre de 1992. El mensaje se envió desde una computadora a un teléfono móvil, ya que los teléfonos aún no tenían teclados para escribir.",
          de: "Die erste SMS-Nachricht lautete 'Frohe Weihnachten' und wurde am 3. Dezember 1992 von Neil Papworth, einem Testingenieur, an Richard Jarvis von Vodafone gesendet. Die Nachricht wurde von einem Computer an ein Mobiltelefon gesendet, da Telefone noch keine Tastaturen zum Tippen hatten.",
          nl: "Het eerste SMS-bericht zei 'Vrolijk Kerstfeest' en werd verzonden door Neil Papworth, een testingenieur, naar Richard Jarvis van Vodafone op 3 december 1992. Het bericht werd verzonden van een computer naar een mobiele telefoon, omdat telefoons nog geen toetsenborden hadden om te typen."
        }
      },
      {
        question: {
          en: "Illinois became the 21st U.S. state on December 3, 1818. What is the capital city of Illinois?",
          es: "Illinois se convirtió en el estado número 21 de EE. UU. el 3 de diciembre de 1818. ¿Cuál es la capital de Illinois?",
          de: "Illinois wurde am 3. Dezember 1818 der 21. US-Bundesstaat. Was ist die Hauptstadt von Illinois?",
          nl: "Illinois werd op 3 december 1818 de 21e Amerikaanse staat. Wat is de hoofdstad van Illinois?"
        },
        options: [
          { en: "Springfield", es: "Springfield", de: "Springfield", nl: "Springfield" },
          { en: "Peoria", es: "Peoria", de: "Peoria", nl: "Peoria" },
          { en: "Naperville", es: "Naperville", de: "Naperville", nl: "Naperville" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Springfield is the capital of Illinois, though Chicago is the state's largest city. Illinois was admitted to the Union on December 3, 1818, becoming the 21st state. Springfield is also famous as the home of President Abraham Lincoln.",
          es: "Springfield es la capital de Illinois, aunque Chicago es la ciudad más grande del estado. Illinois fue admitido en la Unión el 3 de diciembre de 1818, convirtiéndose en el estado número 21. Springfield también es famoso como el hogar del presidente Abraham Lincoln.",
          de: "Springfield ist die Hauptstadt von Illinois, obwohl Chicago die größte Stadt des Staates ist. Illinois wurde am 3. Dezember 1818 in die Union aufgenommen und wurde der 21. Bundesstaat. Springfield ist auch als Heimat von Präsident Abraham Lincoln bekannt.",
          nl: "Springfield is de hoofdstad van Illinois, hoewel Chicago de grootste stad van de staat is. Illinois werd toegelaten tot de Unie op 3 december 1818 en werd de 21e staat. Springfield is ook beroemd als de thuisbasis van president Abraham Lincoln."
        }
      },
      {
        question: {
          en: "After the first successful heart transplant in 1967, approximately how long did Dr. Barnard's second patient survive with the transplanted heart?",
          es: "Después del primer trasplante de corazón exitoso en 1967, ¿aproximadamente cuánto tiempo sobrevivió el segundo paciente del Dr. Barnard con el corazón trasplantado?",
          de: "Nach der ersten erfolgreichen Herztransplantation 1967, wie lange überlebte Dr. Barnards zweiter Patient mit dem transplantierten Herzen?",
          nl: "Na de eerste succesvolle harttransplantatie in 1967, ongeveer hoe lang overleefde Dr. Barnards tweede patiënt met het getransplanteerde hart?"
        },
        options: [
          { en: "6 months", es: "6 meses", de: "6 Monate", nl: "6 maanden" },
          { en: "19 months", es: "19 meses", de: "19 Monate", nl: "19 maanden" },
          { en: "5 years", es: "5 años", de: "5 Jahre", nl: "5 jaar" },
          { en: "1 month", es: "1 mes", de: "1 Monat", nl: "1 maand" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Dr. Barnard's second heart transplant patient, Philip Blaiberg, received his new heart on January 2, 1968, and survived for 19 months. This much longer survival time demonstrated significant improvements in surgical technique and post-operative care, helping to establish heart transplantation as a viable treatment.",
          es: "El segundo paciente de trasplante de corazón del Dr. Barnard, Philip Blaiberg, recibió su nuevo corazón el 2 de enero de 1968 y sobrevivió durante 19 meses. Este tiempo de supervivencia mucho más largo demostró mejoras significativas en la técnica quirúrgica y el cuidado postoperatorio, ayudando a establecer el trasplante de corazón como un tratamiento viable.",
          de: "Dr. Barnards zweiter Herztransplantationspatient, Philip Blaiberg, erhielt sein neues Herz am 2. Januar 1968 und überlebte 19 Monate. Diese viel längere Überlebenszeit zeigte signifikante Verbesserungen in der chirurgischen Technik und der postoperativen Pflege und half dabei, die Herztransplantation als praktikable Behandlung zu etablieren.",
          nl: "Dr. Barnards tweede harttransplantatiepatiënt, Philip Blaiberg, ontving zijn nieuwe hart op 2 januari 1968 en overleefde 19 maanden. Deze veel langere overlevingstijd toonde aanzienlijke verbeteringen in chirurgische techniek en postoperatieve zorg, wat hielp om harttransplantatie als een levensvatbare behandeling te vestigen."
        }
      }
    ],

    day4: [ /* 5 questions */
      {
        question: {
          en: "On December 4, 1783, George Washington formally said farewell to his officers. Where did this historic event take place?",
          es: "El 4 de diciembre de 1783, George Washington se despidió formalmente de sus oficiales. ¿Dónde tuvo lugar este evento histórico?",
          de: "Am 4. Dezember 1783 verabschiedete sich George Washington formell von seinen Offizieren. Wo fand dieses historische Ereignis statt?",
          nl: "Op 4 december 1783 nam George Washington formeel afscheid van zijn officiers. Waar vond deze historische gebeurtenis plaats?"
        },
        options: [
          { en: "Fraunces Tavern, New York", es: "Fraunces Tavern, Nueva York", de: "Fraunces Tavern, New York", nl: "Fraunces Tavern, New York" },
          { en: "Philadelphia, Pennsylvania", es: "Filadelfia, Pensilvania", de: "Philadelphia, Pennsylvania", nl: "Philadelphia, Pennsylvania" },
          { en: "Boston, Massachusetts", es: "Boston, Massachusetts", de: "Boston, Massachusetts", nl: "Boston, Massachusetts" },
          { en: "Mount Vernon, Virginia", es: "Mount Vernon, Virginia", de: "Mount Vernon, Virginia", nl: "Mount Vernon, Virginia" }
        ],
        correctIndex: 0,
        explanation: {
          en: "George Washington bid farewell to his officers at Fraunces Tavern in New York City on December 4, 1783, after the Revolutionary War ended. This emotional gathering marked his resignation from military service before he would later become the first U.S. President. The tavern still stands today as a museum.",
          es: "George Washington se despidió de sus oficiales en Fraunces Tavern en la ciudad de Nueva York el 4 de diciembre de 1783, después de que terminó la Guerra Revolucionaria. Esta emotiva reunión marcó su renuncia del servicio militar antes de que más tarde se convirtiera en el primer presidente de EE. UU. La taberna aún existe hoy como museo.",
          de: "George Washington verabschiedete sich am 4. Dezember 1783 nach dem Ende des Unabhängigkeitskrieges von seinen Offizieren in der Fraunces Tavern in New York City. Diese emotionale Zusammenkunft markierte seinen Rücktritt vom Militärdienst, bevor er später der erste US-Präsident werden sollte. Die Taverne steht heute noch als Museum.",
          nl: "George Washington nam op 4 december 1783 afscheid van zijn officiers in Fraunces Tavern in New York City, nadat de Revolutionaire Oorlog was geëindigd. Deze emotionele bijeenkomst markeerde zijn aftreden uit militaire dienst voordat hij later de eerste Amerikaanse president zou worden. De taverne staat er nog steeds als museum."
        }
      },
      {
        question: {
          en: "Fred Hampton, a chairman of the Black Panther Party, was killed by police during a raid on December 4, 1969. In which U.S. city did this controversial event occur?",
          es: "Fred Hampton, presidente del Partido Pantera Negra, fue asesinado por la policía durante una redada el 4 de diciembre de 1969. ¿En qué ciudad de EE. UU. ocurrió este controvertido evento?",
          de: "Fred Hampton, Vorsitzender der Black Panther Party, wurde am 4. Dezember 1969 bei einer Razzia von der Polizei getötet. In welcher US-Stadt ereignete sich dieses kontroverse Ereignis?",
          nl: "Fred Hampton, voorzitter van de Black Panther Party, werd gedood door de politie tijdens een inval op 4 december 1969. In welke Amerikaanse stad vond deze controversiële gebeurtenis plaats?"
        },
        options: [
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
          { en: "Detroit", es: "Detroit", de: "Detroit", nl: "Detroit" },
          { en: "Oakland", es: "Oakland", de: "Oakland", nl: "Oakland" },
          { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Fred Hampton was killed during a pre-dawn raid by Chicago police and FBI agents on December 4, 1969. He was only 21 years old. The raid was later revealed to be part of COINTELPRO, the FBI's controversial program targeting activist groups. A civil suit filed by his family resulted in a $1.85 million settlement in 1982.",
          es: "Fred Hampton fue asesinado durante una redada antes del amanecer por la policía de Chicago y agentes del FBI el 4 de diciembre de 1969. Tenía solo 21 años. Más tarde se reveló que la redada era parte de COINTELPRO, el controvertido programa del FBI dirigido a grupos activistas. Una demanda civil presentada por su familia resultó en un acuerdo de $1.85 millones en 1982.",
          de: "Fred Hampton wurde während einer Razzia in den frühen Morgenstunden durch die Polizei von Chicago und FBI-Agenten am 4. Dezember 1969 getötet. Er war erst 21 Jahre alt. Die Razzia erwies sich später als Teil von COINTELPRO, dem umstrittenen FBI-Programm gegen Aktivistengruppen. Eine Zivilklage seiner Familie führte 1982 zu einem Vergleich über 1,85 Millionen Dollar.",
          nl: "Fred Hampton werd gedood tijdens een inval vóór zonsopgang door de politie van Chicago en FBI-agenten op 4 december 1969. Hij was slechts 21 jaar oud. Later werd onthuld dat de inval deel uitmaakte van COINTELPRO, het controversiële FBI-programma gericht op activistische groepen. Een civiele rechtszaak aangespannen door zijn familie resulteerde in 1982 in een schikking van $1,85 miljoen."
        }
      },
      {
        question: {
          en: "Frank Zappa, the influential rock musician and composer, was born on December 4, 1940. Which of these bands did Zappa lead?",
          es: "Frank Zappa, el influyente músico y compositor de rock, nació el 4 de diciembre de 1940. ¿Cuál de estas bandas lideró Zappa?",
          de: "Frank Zappa, der einflussreiche Rockmusiker und Komponist, wurde am 4. Dezember 1940 geboren. Welche dieser Bands leitete Zappa?",
          nl: "Frank Zappa, de invloedrijke rockmuzikant en componist, werd geboren op 4 december 1940. Welke van deze bands leidde Zappa?"
        },
        options: [

          { en: "The Velvet Underground", es: "The Velvet Underground", de: "The Velvet Underground", nl: "The Velvet Underground" },

          { en: "The Mothers of Invention", es: "The Mothers of Invention", de: "The Mothers of Invention", nl: "The Mothers of Invention" },

          { en: "Captain Beefheart's Magic Band", es: "Captain Beefheart's Magic Band", de: "Captain Beefheart's Magic Band", nl: "Captain Beefheart's Magic Band" },

          { en: "Pink Floyd", es: "Pink Floyd", de: "Pink Floyd", nl: "Pink Floyd" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Frank Zappa led The Mothers of Invention, a band known for experimental rock, satire, and complex compositions. Zappa was a prolific artist who released over 60 albums during his career. He was known for his guitar virtuosity, innovative musical style blending rock, jazz, and classical elements, and satirical lyrics.",
          es: "Frank Zappa lideró The Mothers of Invention, una banda conocida por el rock experimental, la sátira y las composiciones complejas. Zappa fue un artista prolífico que lanzó más de 60 álbumes durante su carrera. Era conocido por su virtuosismo en la guitarra, su estilo musical innovador que mezclaba rock, jazz y elementos clásicos, y sus letras satíricas.",
          de: "Frank Zappa leitete The Mothers of Invention, eine Band, die für experimentellen Rock, Satire und komplexe Kompositionen bekannt war. Zappa war ein produktiver Künstler, der während seiner Karriere über 60 Alben veröffentlichte. Er war bekannt für seine Gitarrenvirtuosität, seinen innovativen Musikstil, der Rock, Jazz und klassische Elemente vermischte, und seine satirischen Texte.",
          nl: "Frank Zappa leidde The Mothers of Invention, een band bekend om experimentele rock, satire en complexe composities. Zappa was een productieve artiest die meer dan 60 albums uitbracht tijdens zijn carrière. Hij stond bekend om zijn gitaarvirtuositeit, innovatieve muzikale stijl die rock, jazz en klassieke elementen vermengde, en satirische teksten."
        }
      },
      {
        question: {
          en: "In which year did George Washington resign his commission as Commander-in-Chief of the Continental Army, shortly after his farewell to officers on December 4, 1783?",
          es: "¿En qué año renunció George Washington a su cargo como Comandante en Jefe del Ejército Continental, poco después de su despedida de los oficiales el 4 de diciembre de 1783?",
          de: "In welchem Jahr trat George Washington von seinem Amt als Oberbefehlshaber der Kontinentalarmee zurück, kurz nach seinem Abschied von den Offizieren am 4. Dezember 1783?",
          nl: "In welk jaar legde George Washington zijn functie neer als opperbevelhebber van het Continentale Leger, kort na zijn afscheid van de officieren op 4 december 1783?"
        },
        options: [

          { en: "1784", es: "1784", de: "1784", nl: "1784" },

          { en: "1783", es: "1783", de: "1783", nl: "1783" },

          { en: "1785", es: "1785", de: "1785", nl: "1785" },

          { en: "1782", es: "1782", de: "1782", nl: "1782" }

        ],
        correctIndex: 1,
        explanation: {
          en: "George Washington resigned his commission on December 23, 1783, in Annapolis, Maryland, just weeks after his farewell to officers. This voluntary resignation of power was unprecedented and established an important precedent for civilian control of the military in the United States. He would later be elected as the first President in 1789.",
          es: "George Washington renunció a su cargo el 23 de diciembre de 1783, en Annapolis, Maryland, pocas semanas después de su despedida de los oficiales. Esta renuncia voluntaria al poder no tenía precedentes y estableció un precedente importante para el control civil de las fuerzas armadas en Estados Unidos. Más tarde sería elegido como primer presidente en 1789.",
          de: "George Washington trat am 23. Dezember 1783 in Annapolis, Maryland, von seinem Amt zurück, nur wenige Wochen nach seinem Abschied von den Offizieren. Dieser freiwillige Machtverzicht war beispiellos und schuf einen wichtigen Präzedenzfall für die zivile Kontrolle des Militärs in den Vereinigten Staaten. Er wurde später 1789 zum ersten Präsidenten gewählt.",
          nl: "George Washington legde zijn functie neer op 23 december 1783, in Annapolis, Maryland, slechts weken na zijn afscheid van de officieren. Deze vrijwillige machtsoverdracht was ongekend en schiep een belangrijk precedent voor civiele controle over het leger in de Verenigde Staten. Hij zou later in 1789 worden gekozen tot eerste president."
        }
      },
      {
        question: {
          en: "Frank Zappa was known for his opposition to censorship in music. In 1985, he testified before Congress against the formation of which organization?",
          es: "Frank Zappa era conocido por su oposición a la censura en la música. En 1985, testificó ante el Congreso contra la formación de qué organización?",
          de: "Frank Zappa war bekannt für seine Opposition gegen Zensur in der Musik. 1985 sagte er vor dem Kongress gegen die Gründung welcher Organisation aus?",
          nl: "Frank Zappa stond bekend om zijn verzet tegen censuur in muziek. In 1985 getuigde hij voor het Congres tegen de oprichting van welke organisatie?"
        },
        options: [

          { en: "Federal Communications Commission", es: "Comisión Federal de Comunicaciones", de: "Federal Communications Commission", nl: "Federal Communications Commission" },

          { en: "Parents Music Resource Center (PMRC)", es: "Centro de Recursos Musicales para Padres (PMRC)", de: "Parents Music Resource Center (PMRC)", nl: "Parents Music Resource Center (PMRC)" },

          { en: "Recording Industry Association", es: "Asociación de la Industria Discográfica", de: "Recording Industry Association", nl: "Recording Industry Association" },

          { en: "National Endowment for the Arts", es: "Fundación Nacional para las Artes", de: "National Endowment for the Arts", nl: "National Endowment for the Arts" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Frank Zappa testified before Congress in September 1985 against the Parents Music Resource Center (PMRC), which advocated for warning labels on music albums with explicit content. His passionate defense of free speech and opposition to censorship made him a prominent voice for artistic freedom. The PMRC was co-founded by Tipper Gore, wife of then-Senator Al Gore.",
          es: "Frank Zappa testificó ante el Congreso en septiembre de 1985 contra el Centro de Recursos Musicales para Padres (PMRC), que abogaba por etiquetas de advertencia en álbumes de música con contenido explícito. Su apasionada defensa de la libertad de expresión y oposición a la censura lo convirtió en una voz prominente por la libertad artística. El PMRC fue cofundado por Tipper Gore, esposa del entonces senador Al Gore.",
          de: "Frank Zappa sagte im September 1985 vor dem Kongress gegen das Parents Music Resource Center (PMRC) aus, das sich für Warnhinweise auf Musikalben mit explizitem Inhalt einsetzte. Seine leidenschaftliche Verteidigung der Meinungsfreiheit und seine Opposition gegen Zensur machten ihn zu einer prominenten Stimme für künstlerische Freiheit. Das PMRC wurde von Tipper Gore, der Frau des damaligen Senators Al Gore, mitbegründet.",
          nl: "Frank Zappa getuigde in september 1985 voor het Congres tegen het Parents Music Resource Center (PMRC), dat pleitte voor waarschuwingslabels op muziekalbums met expliciete inhoud. Zijn hartstochtelijke verdediging van vrije meningsuiting en verzet tegen censuur maakten hem een prominente stem voor artistieke vrijheid. Het PMRC werd mede opgericht door Tipper Gore, de vrouw van toenmalig senator Al Gore."
        }
      }
    ],

    day5: [ /* 5 questions */
      {
        question: {
          en: "On December 5, 1933, Prohibition officially ended in the United States with the ratification of which constitutional amendment?",
          es: "El 5 de diciembre de 1933, la Prohibición terminó oficialmente en los Estados Unidos con la ratificación de qué enmienda constitucional?",
          de: "Am 5. Dezember 1933 endete die Prohibition in den Vereinigten Staaten offiziell mit der Ratifizierung welcher Verfassungsänderung?",
          nl: "Op 5 december 1933 eindigde de drooglegging officieel in de Verenigde Staten met de ratificatie van welk grondwetsartikel?"
        },
        options: [

          { en: "18th Amendment", es: "Enmienda 18", de: "18. Zusatzartikel", nl: "18e Amendement" },

          { en: "19th Amendment", es: "Enmienda 19", de: "19. Zusatzartikel", nl: "19e Amendement" },

          { en: "21st Amendment", es: "Enmienda 21", de: "21. Zusatzartikel", nl: "21e Amendement" },

          { en: "20th Amendment", es: "Enmienda 20", de: "20. Zusatzartikel", nl: "20e Amendement" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The 21st Amendment repealed the 18th Amendment, which had established Prohibition in 1920. Ratified on December 5, 1933, it is the only constitutional amendment to repeal another amendment. Prohibition had lasted nearly 14 years and led to increased organized crime and illegal bootlegging operations.",
          es: "La Enmienda 21 derogó la Enmienda 18, que había establecido la Prohibición en 1920. Ratificada el 5 de diciembre de 1933, es la única enmienda constitucional que deroga otra enmienda. La Prohibición había durado casi 14 años y llevó a un aumento del crimen organizado y operaciones ilegales de contrabando de alcohol.",
          de: "Der 21. Zusatzartikel hob den 18. Zusatzartikel auf, der 1920 die Prohibition eingeführt hatte. Er wurde am 5. Dezember 1933 ratifiziert und ist der einzige Verfassungszusatz, der einen anderen aufhebt. Die Prohibition hatte fast 14 Jahre gedauert und zu zunehmender organisierter Kriminalität und illegalem Alkoholschmuggel geführt.",
          nl: "Het 21e Amendement herriep het 18e Amendement, dat in 1920 de drooglegging had ingesteld. Geratificeerd op 5 december 1933, is het het enige grondwetsartikel dat een ander amendement herroept. De drooglegging had bijna 14 jaar geduurd en had geleid tot toegenomen georganiseerde misdaad en illegale dranksmokkelpraktijken."
        }
      },
      {
        question: {
          en: "Walt Disney, the legendary animator and entertainment pioneer, was born on December 5, 1901. In which U.S. city was he born?",
          es: "Walt Disney, el legendario animador y pionero del entretenimiento, nació el 5 de diciembre de 1901. ¿En qué ciudad de EE. UU. nació?",
          de: "Walt Disney, der legendäre Animator und Unterhaltungspionier, wurde am 5. Dezember 1901 geboren. In welcher US-Stadt wurde er geboren?",
          nl: "Walt Disney, de legendarische animator en entertainment pionier, werd geboren op 5 december 1901. In welke Amerikaanse stad werd hij geboren?"
        },
        options: [

          { en: "Los Angeles, California", es: "Los Ángeles, California", de: "Los Angeles, Kalifornien", nl: "Los Angeles, Californië" },

          { en: "Orlando, Florida", es: "Orlando, Florida", de: "Orlando, Florida", nl: "Orlando, Florida" },

          { en: "Chicago, Illinois", es: "Chicago, Illinois", de: "Chicago, Illinois", nl: "Chicago, Illinois" },

          { en: "Kansas City, Missouri", es: "Kansas City, Misuri", de: "Kansas City, Missouri", nl: "Kansas City, Missouri" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Walt Disney was born in Chicago, Illinois, on December 5, 1901. Though he later became synonymous with California and Florida due to Disneyland and Disney World, he spent his early years in Chicago before his family moved to Missouri. Disney went on to create Mickey Mouse, found The Walt Disney Company, and revolutionize animation and family entertainment.",
          es: "Walt Disney nació en Chicago, Illinois, el 5 de diciembre de 1901. Aunque más tarde se volvió sinónimo de California y Florida debido a Disneyland y Disney World, pasó sus primeros años en Chicago antes de que su familia se mudara a Misuri. Disney creó a Mickey Mouse, fundó The Walt Disney Company y revolucionó la animación y el entretenimiento familiar.",
          de: "Walt Disney wurde am 5. Dezember 1901 in Chicago, Illinois, geboren. Obwohl er später aufgrund von Disneyland und Disney World mit Kalifornien und Florida verbunden wurde, verbrachte er seine frühen Jahre in Chicago, bevor seine Familie nach Missouri zog. Disney schuf Mickey Mouse, gründete The Walt Disney Company und revolutionierte Animation und Familienunterhaltung.",
          nl: "Walt Disney werd geboren in Chicago, Illinois, op 5 december 1901. Hoewel hij later synoniem werd met Californië en Florida vanwege Disneyland en Disney World, bracht hij zijn vroege jaren door in Chicago voordat zijn familie naar Missouri verhuisde. Disney creëerde Mickey Mouse, richtte The Walt Disney Company op en revolutioneerde animatie en gezinsvermaak."
        }
      },
      {
        question: {
          en: "Nelson Mandela, South Africa's first Black president and anti-apartheid revolutionary, died on December 5, 2013. How many years did he spend in prison?",
          es: "Nelson Mandela, el primer presidente negro de Sudáfrica y revolucionario contra el apartheid, murió el 5 de diciembre de 2013. ¿Cuántos años pasó en prisión?",
          de: "Nelson Mandela, Südafrikas erster schwarzer Präsident und Anti-Apartheid-Revolutionär, starb am 5. Dezember 2013. Wie viele Jahre verbrachte er im Gefängnis?",
          nl: "Nelson Mandela, Zuid-Afrika's eerste zwarte president en anti-apartheidsrevolutionair, stierf op 5 december 2013. Hoeveel jaar zat hij in de gevangenis?"
        },
        options: [

          { en: "15 years", es: "15 años", de: "15 Jahre", nl: "15 jaar" },

          { en: "20 years", es: "20 años", de: "20 Jahre", nl: "20 jaar" },

          { en: "27 years", es: "27 años", de: "27 Jahre", nl: "27 jaar" },

          { en: "35 years", es: "35 años", de: "35 Jahre", nl: "35 jaar" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Nelson Mandela spent 27 years in prison, from 1962 to 1990, mostly on Robben Island. He was imprisoned for his role in fighting apartheid. After his release, he led negotiations to end apartheid and became South Africa's first democratically elected president in 1994. He received the Nobel Peace Prize in 1993 and became a global symbol of resistance against oppression.",
          es: "Nelson Mandela pasó 27 años en prisión, de 1962 a 1990, principalmente en la Isla Robben. Fue encarcelado por su papel en la lucha contra el apartheid. Después de su liberación, lideró las negociaciones para poner fin al apartheid y se convirtió en el primer presidente elegido democráticamente de Sudáfrica en 1994. Recibió el Premio Nobel de la Paz en 1993 y se convirtió en un símbolo global de resistencia contra la opresión.",
          de: "Nelson Mandela verbrachte 27 Jahre im Gefängnis, von 1962 bis 1990, hauptsächlich auf Robben Island. Er wurde für seine Rolle im Kampf gegen die Apartheid inhaftiert. Nach seiner Freilassung leitete er die Verhandlungen zur Beendigung der Apartheid und wurde 1994 Südafrikas erster demokratisch gewählter Präsident. Er erhielt 1993 den Friedensnobelpreis und wurde ein globales Symbol des Widerstands gegen Unterdrückung.",
          nl: "Nelson Mandela zat 27 jaar in de gevangenis, van 1962 tot 1990, voornamelijk op Robbeneiland. Hij werd gevangen gezet voor zijn rol in de strijd tegen apartheid. Na zijn vrijlating leidde hij de onderhandelingen om een einde te maken aan de apartheid en werd in 1994 de eerste democratisch gekozen president van Zuid-Afrika. Hij ontving in 1993 de Nobelprijs voor de Vrede en werd een wereldwijd symbool van verzet tegen onderdrukking."
        }
      },
      {
        question: {
          en: "Which iconic Disney character did Walt Disney co-create and first introduce to audiences in 1928?",
          es: "¿Qué icónico personaje de Disney co-creó Walt Disney y presentó por primera vez al público en 1928?",
          de: "Welche ikonische Disney-Figur hat Walt Disney mitgeschaffen und 1928 erstmals dem Publikum vorgestellt?",
          nl: "Welk iconisch Disney-personage creëerde Walt Disney mee en introduceerde hij voor het eerst aan het publiek in 1928?"
        },
        options: [

          { en: "Donald Duck", es: "Pato Donald", de: "Donald Duck", nl: "Donald Duck" },

          { en: "Goofy", es: "Goofy", de: "Goofy", nl: "Goofy" },

          { en: "Mickey Mouse", es: "Mickey Mouse", de: "Mickey Mouse", nl: "Mickey Mouse" },

          { en: "Pluto", es: "Pluto", de: "Pluto", nl: "Pluto" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Mickey Mouse made his debut in the animated short 'Steamboat Willie' on November 18, 1928. Co-created by Walt Disney and Ub Iwerks, Mickey became the mascot of The Walt Disney Company and one of the most recognizable characters in the world. 'Steamboat Willie' was also notable as one of the first cartoons with synchronized sound.",
          es: "Mickey Mouse hizo su debut en el cortometraje animado 'Steamboat Willie' el 18 de noviembre de 1928. Co-creado por Walt Disney y Ub Iwerks, Mickey se convirtió en la mascota de The Walt Disney Company y uno de los personajes más reconocibles del mundo. 'Steamboat Willie' también fue notable como uno de los primeros dibujos animados con sonido sincronizado.",
          de: "Mickey Mouse hatte sein Debüt in dem animierten Kurzfilm 'Steamboat Willie' am 18. November 1928. Miterschaffen von Walt Disney und Ub Iwerks, wurde Mickey zum Maskottchen von The Walt Disney Company und zu einer der bekanntesten Figuren der Welt. 'Steamboat Willie' war auch bemerkenswert als einer der ersten Zeichentrickfilme mit synchronisiertem Ton.",
          nl: "Mickey Mouse maakte zijn debuut in de geanimeerde korte film 'Steamboat Willie' op 18 november 1928. Gecreëerd door Walt Disney en Ub Iwerks, werd Mickey de mascotte van The Walt Disney Company en een van de meest herkenbare personages ter wereld. 'Steamboat Willie' was ook opmerkelijk als een van de eerste tekenfilms met gesynchroniseerd geluid."
        }
      },
      {
        question: {
          en: "How long did Prohibition last in the United States before being repealed on December 5, 1933?",
          es: "¿Cuánto tiempo duró la Prohibición en los Estados Unidos antes de ser derogada el 5 de diciembre de 1933?",
          de: "Wie lange dauerte die Prohibition in den Vereinigten Staaten, bevor sie am 5. Dezember 1933 aufgehoben wurde?",
          nl: "Hoe lang duurde de drooglegging in de Verenigde Staten voordat deze op 5 december 1933 werd herroepen?"
        },
        options: [

          { en: "10 years", es: "10 años", de: "10 Jahre", nl: "10 jaar" },

          { en: "Nearly 14 years", es: "Casi 14 años", de: "Fast 14 Jahre", nl: "Bijna 14 jaar" },

          { en: "20 years", es: "20 años", de: "20 Jahre", nl: "20 jaar" },

          { en: "8 years", es: "8 años", de: "8 Jahre", nl: "8 jaar" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Prohibition lasted from January 17, 1920 (when the 18th Amendment took effect) until December 5, 1933 (when the 21st Amendment was ratified), a period of nearly 14 years. The era led to widespread illegal alcohol production and distribution, rise of organized crime figures like Al Capone, and speakeasies. Economic pressures during the Great Depression also contributed to its repeal.",
          es: "La Prohibición duró desde el 17 de enero de 1920 (cuando entró en vigor la Enmienda 18) hasta el 5 de diciembre de 1933 (cuando se ratificó la Enmienda 21), un período de casi 14 años. La era llevó a la producción y distribución ilegal generalizada de alcohol, el auge de figuras del crimen organizado como Al Capone, y los bares clandestinos. Las presiones económicas durante la Gran Depresión también contribuyeron a su derogación.",
          de: "Die Prohibition dauerte vom 17. Januar 1920 (als der 18. Zusatzartikel in Kraft trat) bis zum 5. Dezember 1933 (als der 21. Zusatzartikel ratifiziert wurde), ein Zeitraum von fast 14 Jahren. Die Ära führte zu weit verbreiteter illegaler Alkoholproduktion und -verteilung, dem Aufstieg von Verbrecherfiguren wie Al Capone und Flüsterkneipen. Wirtschaftliche Belastungen während der Großen Depression trugen ebenfalls zu ihrer Aufhebung bei.",
          nl: "De drooglegging duurde van 17 januari 1920 (toen het 18e Amendement van kracht werd) tot 5 december 1933 (toen het 21e Amendement werd geratificeerd), een periode van bijna 14 jaar. Het tijdperk leidde tot wijdverbreide illegale alcoholproductie en -distributie, de opkomst van georganiseerde misdaadfiguren zoals Al Capone, en speakeasies. Economische druk tijdens de Grote Depressie droeg ook bij aan de herroeping."
        }
      }
    ],

    day6: [ /* 5 questions */
      {
        question: {
          en: "On December 6, 1917, Finland declared its independence from which country?",
          es: "El 6 de diciembre de 1917, Finlandia declaró su independencia de qué país?",
          de: "Am 6. Dezember 1917 erklärte Finnland seine Unabhängigkeit von welchem Land?",
          nl: "Op 6 december 1917 verklaarde Finland zijn onafhankelijkheid van welk land?"
        },
        options: [

          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },

          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },

          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },

          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Finland declared independence from Russia on December 6, 1917, taking advantage of the chaos following the Russian Revolution. Finland had been an autonomous Grand Duchy under the Russian Empire since 1809. December 6 is now celebrated annually as Finland's Independence Day. The Soviet Union officially recognized Finland's independence on January 4, 1918.",
          es: "Finlandia declaró su independencia de Rusia el 6 de diciembre de 1917, aprovechando el caos que siguió a la Revolución Rusa. Finlandia había sido un Gran Ducado autónomo bajo el Imperio Ruso desde 1809. El 6 de diciembre ahora se celebra anualmente como el Día de la Independencia de Finlandia. La Unión Soviética reconoció oficialmente la independencia de Finlandia el 4 de enero de 1918.",
          de: "Finnland erklärte am 6. Dezember 1917 seine Unabhängigkeit von Russland und nutzte das Chaos nach der Russischen Revolution. Finnland war seit 1809 ein autonomes Großfürstentum unter dem Russischen Reich gewesen. Der 6. Dezember wird heute jährlich als finnischer Unabhängigkeitstag gefeiert. Die Sowjetunion erkannte Finnlands Unabhängigkeit offiziell am 4. Januar 1918 an.",
          nl: "Finland verklaarde op 6 december 1917 zijn onafhankelijkheid van Rusland, profiterend van de chaos na de Russische Revolutie. Finland was sinds 1809 een autonoom groothertogdom onder het Russische Rijk geweest. 6 december wordt nu jaarlijks gevierd als de Onafhankelijkheidsdag van Finland. De Sovjet-Unie erkende Finland's onafhankelijkheid officieel op 4 januari 1918."
        }
      },
      {
        question: {
          en: "The Irish Free State was officially established on December 6, 1922. Which counties remained part of the United Kingdom?",
          es: "El Estado Libre Irlandés se estableció oficialmente el 6 de diciembre de 1922. ¿Qué condados permanecieron como parte del Reino Unido?",
          de: "Der Irische Freistaat wurde am 6. Dezember 1922 offiziell gegründet. Welche Grafschaften blieben Teil des Vereinigten Königreichs?",
          nl: "De Ierse Vrijstaat werd officieel opgericht op 6 december 1922. Welke graafschappen bleven deel uitmaken van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "The six counties of Northern Ireland", es: "Los seis condados de Irlanda del Norte", de: "Die sechs Grafschaften Nordirlands", nl: "De zes graafschappen van Noord-Ierland" },
          { en: "No counties remained", es: "Ningún condado permaneció", de: "Keine Grafschaften blieben", nl: "Geen graafschappen bleven" },
          { en: "All of Ulster province", es: "Toda la provincia de Ulster", de: "Die gesamte Provinz Ulster", nl: "De hele provincie Ulster" },
          { en: "Dublin and surrounding areas", es: "Dublín y áreas circundantes", de: "Dublin und umliegende Gebiete", nl: "Dublin en omliggende gebieden" }
        ],
        correctIndex: 0,
        explanation: {
          en: "When the Irish Free State was established on December 6, 1922, the six counties of Northern Ireland (Antrim, Armagh, Down, Fermanagh, Londonderry, and Tyrone) remained part of the United Kingdom. This partition followed the Irish War of Independence and the Anglo-Irish Treaty of 1921. The Irish Free State later became the Republic of Ireland in 1949.",
          es: "Cuando se estableció el Estado Libre Irlandés el 6 de diciembre de 1922, los seis condados de Irlanda del Norte (Antrim, Armagh, Down, Fermanagh, Londonderry y Tyrone) permanecieron como parte del Reino Unido. Esta partición siguió a la Guerra de Independencia Irlandesa y el Tratado Anglo-Irlandés de 1921. El Estado Libre Irlandés se convirtió posteriormente en la República de Irlanda en 1949.",
          de: "Als der Irische Freistaat am 6. Dezember 1922 gegründet wurde, blieben die sechs Grafschaften Nordirlands (Antrim, Armagh, Down, Fermanagh, Londonderry und Tyrone) Teil des Vereinigten Königreichs. Diese Teilung folgte dem Irischen Unabhängigkeitskrieg und dem Anglo-Irischen Vertrag von 1921. Der Irische Freistaat wurde später 1949 zur Republik Irland.",
          nl: "Toen de Ierse Vrijstaat op 6 december 1922 werd opgericht, bleven de zes graafschappen van Noord-Ierland (Antrim, Armagh, Down, Fermanagh, Londonderry en Tyrone) deel uitmaken van het Verenigd Koninkrijk. Deze verdeling volgde op de Ierse Onafhankelijkheidsoorlog en het Anglo-Ierse Verdrag van 1921. De Ierse Vrijstaat werd later in 1949 de Republiek Ierland."
        }
      },
      {
        question: {
          en: "On December 6, 1945, Percy Spencer received a patent for which revolutionary kitchen appliance?",
          es: "El 6 de diciembre de 1945, Percy Spencer recibió una patente para qué aparato de cocina revolucionario?",
          de: "Am 6. Dezember 1945 erhielt Percy Spencer ein Patent für welches revolutionäre Küchengerät?",
          nl: "Op 6 december 1945 ontving Percy Spencer een patent voor welk revolutionair keukenapparaat?"
        },
        options: [

          { en: "Electric mixer", es: "Batidora eléctrica", de: "Elektrischer Mixer", nl: "Elektrische mixer" },

          { en: "Refrigerator", es: "Refrigerador", de: "Kühlschrank", nl: "Koelkast" },

          { en: "Microwave oven", es: "Horno de microondas", de: "Mikrowellenherd", nl: "Magnetron" },

          { en: "Toaster", es: "Tostadora", de: "Toaster", nl: "Broodrooster" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Percy Spencer, an engineer at Raytheon, received a patent for the microwave oven on December 6, 1945. He discovered the heating effect of microwaves accidentally when a chocolate bar in his pocket melted while working with radar equipment. The first commercial microwave, called the 'Radarange,' was released in 1947 and stood nearly 6 feet tall, weighing 750 pounds.",
          es: "Percy Spencer, ingeniero de Raytheon, recibió una patente para el horno de microondas el 6 de diciembre de 1945. Descubrió accidentalmente el efecto de calentamiento de las microondas cuando una barra de chocolate en su bolsillo se derritió mientras trabajaba con equipos de radar. El primer microondas comercial, llamado 'Radarange', se lanzó en 1947 y medía casi 6 pies de altura, con un peso de 750 libras.",
          de: "Percy Spencer, ein Ingenieur bei Raytheon, erhielt am 6. Dezember 1945 ein Patent für den Mikrowellenherd. Er entdeckte den Heizeffekt von Mikrowellen zufällig, als ein Schokoriegel in seiner Tasche schmolz, während er mit Radargeräten arbeitete. Die erste kommerzielle Mikrowelle namens 'Radarange' wurde 1947 veröffentlicht und war fast 6 Fuß hoch und wog 750 Pfund.",
          nl: "Percy Spencer, een ingenieur bij Raytheon, ontving op 6 december 1945 een patent voor de magnetron. Hij ontdekte per ongeluk het verwarmingseffect van microgolven toen een chocoladereep in zijn zak smolt terwijl hij met radarapparatuur werkte. De eerste commerciële magnetron, genaamd de 'Radarange', werd in 1947 uitgebracht en was bijna 6 voet hoog en woog 750 pond."
        }
      },
      {
        question: {
          en: "Finland was part of which European country before becoming a Grand Duchy under Russian rule in 1809?",
          es: "Finlandia fue parte de qué país europeo antes de convertirse en un Gran Ducado bajo el dominio ruso en 1809?",
          de: "Finnland war Teil welches europäischen Landes, bevor es 1809 ein Großfürstentum unter russischer Herrschaft wurde?",
          nl: "Finland maakte deel uit van welk Europees land voordat het in 1809 een groothertogdom onder Russische heerschappij werd?"
        },
        options: [

          { en: "Denmark", es: "Dinamarca", de: "Dänemark", nl: "Denemarken" },

          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },

          { en: "Poland", es: "Polonia", de: "Polen", nl: "Polen" },

          { en: "Prussia", es: "Prusia", de: "Preußen", nl: "Pruisen" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Finland was part of Sweden for over 600 years before being ceded to Russia in 1809 following the Finnish War. During Swedish rule (from approximately 1150 to 1809), Finland developed its own cultural identity while remaining closely tied to Swedish administration and culture. The Swedish influence remains evident in Finland today, with Swedish being one of the country's two official languages.",
          es: "Finlandia fue parte de Suecia durante más de 600 años antes de ser cedida a Rusia en 1809 tras la Guerra Finlandesa. Durante el dominio sueco (aproximadamente de 1150 a 1809), Finlandia desarrolló su propia identidad cultural mientras permanecía estrechamente ligada a la administración y cultura suecas. La influencia sueca sigue siendo evidente en Finlandia hoy, siendo el sueco uno de los dos idiomas oficiales del país.",
          de: "Finnland war über 600 Jahre lang Teil von Schweden, bevor es 1809 nach dem Finnischen Krieg an Russland abgetreten wurde. Während der schwedischen Herrschaft (von etwa 1150 bis 1809) entwickelte Finnland seine eigene kulturelle Identität, während es eng mit der schwedischen Verwaltung und Kultur verbunden blieb. Der schwedische Einfluss ist heute noch in Finnland erkennbar, wobei Schwedisch eine der beiden Amtssprachen des Landes ist.",
          nl: "Finland maakte meer dan 600 jaar deel uit van Zweden voordat het in 1809 na de Finse Oorlog aan Rusland werd afgestaan. Tijdens de Zweedse heerschappij (van ongeveer 1150 tot 1809) ontwikkelde Finland zijn eigen culturele identiteit terwijl het nauw verbonden bleef met de Zweedse administratie en cultuur. De Zweedse invloed is vandaag de dag nog steeds duidelijk in Finland, waarbij Zweeds een van de twee officiële talen van het land is."
        }
      },
      {
        question: {
          en: "The first commercial microwave oven in 1947 was approximately how tall?",
          es: "¿Aproximadamente qué altura tenía el primer horno de microondas comercial en 1947?",
          de: "Wie hoch war der erste kommerzielle Mikrowellenherd im Jahr 1947 ungefähr?",
          nl: "Hoe hoog was de eerste commerciële magnetron in 1947 ongeveer?"
        },
        options: [

          { en: "3 feet (91 cm)", es: "3 pies (91 cm)", de: "3 Fuß (91 cm)", nl: "3 voet (91 cm)" },

          { en: "6 feet (183 cm)", es: "6 pies (183 cm)", de: "6 Fuß (183 cm)", nl: "6 voet (183 cm)" },

          { en: "8 feet (244 cm)", es: "8 pies (244 cm)", de: "8 Fuß (244 cm)", nl: "8 voet (244 cm)" },

          { en: "4 feet (122 cm)", es: "4 pies (122 cm)", de: "4 Fuß (122 cm)", nl: "4 voet (122 cm)" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The first commercial microwave oven, the Radarange, stood nearly 6 feet (183 cm) tall and weighed about 750 pounds (340 kg). It cost between $2,000 and $3,000, making it affordable only for restaurants and large institutions. The appliance was water-cooled and consumed 3000 watts of power. It wasn't until the 1960s that countertop models became available for home use.",
          es: "El primer horno de microondas comercial, el Radarange, medía casi 6 pies (183 cm) de altura y pesaba alrededor de 750 libras (340 kg). Costaba entre $2,000 y $3,000, lo que lo hacía asequible solo para restaurantes e instituciones grandes. El aparato se enfriaba con agua y consumía 3000 vatios de energía. No fue hasta la década de 1960 que los modelos de mostrador estuvieron disponibles para uso doméstico.",
          de: "Der erste kommerzielle Mikrowellenherd, der Radarange, war fast 6 Fuß (183 cm) hoch und wog etwa 750 Pfund (340 kg). Er kostete zwischen 2.000 und 3.000 Dollar, was ihn nur für Restaurants und große Institutionen erschwinglich machte. Das Gerät wurde wassergekühlt und verbrauchte 3000 Watt Strom. Erst in den 1960er Jahren wurden Arbeitsplattenmodelle für den Hausgebrauch verfügbar.",
          nl: "De eerste commerciële magnetron, de Radarange, was bijna 6 voet (183 cm) hoog en woog ongeveer 750 pond (340 kg). Het kostte tussen de $2.000 en $3.000, waardoor het alleen betaalbaar was voor restaurants en grote instellingen. Het apparaat werd watergekoeld en verbruikte 3000 watt vermogen. Pas in de jaren zestig kwamen er aanrechtmodellen beschikbaar voor thuisgebruik."
        }
      }
    ],

    day7: [ /* 5 questions */
      {
        question: {
          en: "On December 7, 1941, the Japanese attack on Pearl Harbor brought the United States into World War II. In which U.S. state is Pearl Harbor located?",
          es: "El 7 de diciembre de 1941, el ataque japonés a Pearl Harbor llevó a Estados Unidos a la Segunda Guerra Mundial. ¿En qué estado de EE. UU. se encuentra Pearl Harbor?",
          de: "Am 7. Dezember 1941 führte der japanische Angriff auf Pearl Harbor die Vereinigten Staaten in den Zweiten Weltkrieg. In welchem US-Bundesstaat befindet sich Pearl Harbor?",
          nl: "Op 7 december 1941 bracht de Japanse aanval op Pearl Harbor de Verenigde Staten de Tweede Wereldoorlog in. In welke Amerikaanse staat ligt Pearl Harbor?"
        },
        options: [
          { en: "Guam", es: "Guam", de: "Guam", nl: "Guam" },
          { en: "Alaska", es: "Alaska", de: "Alaska", nl: "Alaska" },
          { en: "California", es: "California", de: "Kalifornien", nl: "Californië" },
          { en: "Hawaii", es: "Hawái", de: "Hawaii", nl: "Hawaï" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Pearl Harbor is located on the island of Oahu in Hawaii. The surprise military strike by the Imperial Japanese Navy killed 2,403 Americans and destroyed or damaged 19 U.S. Navy ships and over 300 aircraft. President Franklin D. Roosevelt called December 7, 1941, 'a date which will live in infamy.' The attack led to the U.S. declaring war on Japan the next day.",
          es: "Pearl Harbor está ubicado en la isla de Oahu en Hawái. El ataque militar sorpresa de la Armada Imperial Japonesa mató a 2,403 estadounidenses y destruyó o dañó 19 barcos de la Marina de los EE. UU. y más de 300 aviones. El presidente Franklin D. Roosevelt llamó al 7 de diciembre de 1941 'una fecha que vivirá en la infamia'. El ataque llevó a EE. UU. a declarar la guerra a Japón al día siguiente.",
          de: "Pearl Harbor liegt auf der Insel Oahu in Hawaii. Der überraschende Militärschlag der Kaiserlich Japanischen Marine tötete 2.403 Amerikaner und zerstörte oder beschädigte 19 US-Marineschiffe und über 300 Flugzeuge. Präsident Franklin D. Roosevelt nannte den 7. Dezember 1941 'ein Datum, das in Schande leben wird'. Der Angriff führte dazu, dass die USA am nächsten Tag Japan den Krieg erklärten.",
          nl: "Pearl Harbor ligt op het eiland Oahu in Hawaï. De verrassingsaanval van de Keizerlijke Japanse Marine doodde 2.403 Amerikanen en vernietigde of beschadigde 19 Amerikaanse marineschepen en meer dan 300 vliegtuigen. President Franklin D. Roosevelt noemde 7 december 1941 'een datum die in schande zal leven'. De aanval leidde ertoe dat de VS de volgende dag de oorlog verklaarden aan Japan."
        }
      },
      {
        question: {
          en: "Delaware became the first state to ratify the U.S. Constitution on December 7, 1787. What is Delaware's official nickname?",
          es: "Delaware se convirtió en el primer estado en ratificar la Constitución de EE. UU. el 7 de diciembre de 1787. ¿Cuál es el apodo oficial de Delaware?",
          de: "Delaware wurde am 7. Dezember 1787 der erste Staat, der die US-Verfassung ratifizierte. Was ist Delawares offizieller Spitzname?",
          nl: "Delaware werd op 7 december 1787 de eerste staat die de Amerikaanse Grondwet ratificeerde. Wat is de officiële bijnaam van Delaware?"
        },
        options: [
          { en: "The Diamond State", es: "El Estado Diamante", de: "Der Diamant-Staat", nl: "De Diamant Staat" },
          { en: "The Founding State", es: "El Estado Fundador", de: "Der Gründungs-Staat", nl: "De Oprichtings Staat" },
          { en: "The First State", es: "El Primer Estado", de: "Der Erste Staat", nl: "De Eerste Staat" },
          { en: "The Constitution State", es: "El Estado Constitución", de: "Der Verfassungs-Staat", nl: "De Grondwet Staat" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Delaware is known as 'The First State' because it was the first to ratify the U.S. Constitution on December 7, 1787. The state's unanimous vote in favor of ratification took place at the Golden Fleece Tavern in Dover. This distinction is celebrated on Delaware license plates, which display the nickname. Delaware was also the first state to join the Union under the new Constitution.",
          es: "Delaware es conocido como 'El Primer Estado' porque fue el primero en ratificar la Constitución de EE. UU. el 7 de diciembre de 1787. La votación unánime del estado a favor de la ratificación tuvo lugar en Golden Fleece Tavern en Dover. Esta distinción se celebra en las placas de matrícula de Delaware, que muestran el apodo. Delaware también fue el primer estado en unirse a la Unión bajo la nueva Constitución.",
          de: "Delaware ist als 'Der Erste Staat' bekannt, weil es der erste war, der die US-Verfassung am 7. Dezember 1787 ratifizierte. Die einstimmige Abstimmung des Staates für die Ratifizierung fand in der Golden Fleece Tavern in Dover statt. Diese Auszeichnung wird auf Delaware-Nummernschildern gefeiert, die den Spitznamen zeigen. Delaware war auch der erste Staat, der der Union unter der neuen Verfassung beitrat.",
          nl: "Delaware staat bekend als 'De Eerste Staat' omdat het de eerste was die op 7 december 1787 de Amerikaanse Grondwet ratificeerde. De unanieme stemming van de staat voor ratificatie vond plaats in de Golden Fleece Tavern in Dover. Deze onderscheiding wordt gevierd op kentekenplaten van Delaware, die de bijnaam tonen. Delaware was ook de eerste staat die zich aansloot bij de Unie onder de nieuwe Grondwet."
        }
      },
      {
        question: {
          en: "Noam Chomsky, the influential linguist and philosopher, was born on December 7, 1928. Which revolutionary theory did Chomsky develop?",
          es: "Noam Chomsky, el influyente lingüista y filósofo, nació el 7 de diciembre de 1928. ¿Qué teoría revolucionaria desarrolló Chomsky?",
          de: "Noam Chomsky, der einflussreiche Linguist und Philosoph, wurde am 7. Dezember 1928 geboren. Welche revolutionäre Theorie entwickelte Chomsky?",
          nl: "Noam Chomsky, de invloedrijke taalkundige en filosoof, werd geboren op 7 december 1928. Welke revolutionaire theorie ontwikkelde Chomsky?"
        },
        options: [
          { en: "Generative grammar and universal grammar", es: "Gramática generativa y gramática universal", de: "Generative Grammatik und Universalgrammatik", nl: "Generatieve grammatica en universele grammatica" },
          { en: "Structuralism", es: "Estructuralismo", de: "Strukturalismus", nl: "Structuralisme" },
          { en: "Behaviorism theory", es: "Teoría del conductismo", de: "Behaviorismus-Theorie", nl: "Behaviorisme theorie" },
          { en: "Semantic field theory", es: "Teoría del campo semántico", de: "Semantische Feldtheorie", nl: "Semantisch veld theorie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Noam Chomsky revolutionized linguistics with his theory of generative grammar and the concept of universal grammar. He proposed that humans have an innate ability to acquire language, contradicting behaviorist theories. His 1957 book 'Syntactic Structures' transformed the field of linguistics. Beyond linguistics, Chomsky is also known as a prominent political activist and critic of U.S. foreign policy.",
          es: "Noam Chomsky revolucionó la lingüística con su teoría de la gramática generativa y el concepto de gramática universal. Propuso que los humanos tienen una capacidad innata para adquirir el lenguaje, contradiciendo las teorías conductistas. Su libro de 1957 'Estructuras sintácticas' transformó el campo de la lingüística. Más allá de la lingüística, Chomsky también es conocido como un destacado activista político y crítico de la política exterior estadounidense.",
          de: "Noam Chomsky revolutionierte die Linguistik mit seiner Theorie der generativen Grammatik und dem Konzept der Universalgrammatik. Er schlug vor, dass Menschen eine angeborene Fähigkeit zum Spracherwerb haben, was behavioristischen Theorien widersprach. Sein Buch 'Syntactic Structures' von 1957 transformierte das Feld der Linguistik. Über die Linguistik hinaus ist Chomsky auch als prominenter politischer Aktivist und Kritiker der US-Außenpolitik bekannt.",
          nl: "Noam Chomsky revolutioneerde de taalkunde met zijn theorie van generatieve grammatica en het concept van universele grammatica. Hij stelde voor dat mensen een aangeboren vermogen hebben om taal te verwerven, wat behavioristische theorieën tegensprak. Zijn boek 'Syntactic Structures' uit 1957 transformeerde het veld van de taalkunde. Naast taalkunde staat Chomsky ook bekend als een prominent politiek activist en criticus van het Amerikaanse buitenlandse beleid."
        }
      },
      {
        question: {
          en: "How many U.S. battleships were sunk or damaged during the Pearl Harbor attack on December 7, 1941?",
          es: "¿Cuántos acorazados estadounidenses fueron hundidos o dañados durante el ataque a Pearl Harbor el 7 de diciembre de 1941?",
          de: "Wie viele US-Schlachtschiffe wurden beim Angriff auf Pearl Harbor am 7. Dezember 1941 versenkt oder beschädigt?",
          nl: "Hoeveel Amerikaanse slagschepen werden gezonken of beschadigd tijdens de aanval op Pearl Harbor op 7 december 1941?"
        },
        options: [

          { en: "5 battleships", es: "5 acorazados", de: "5 Schlachtschiffe", nl: "5 slagschepen" },

          { en: "8 battleships", es: "8 acorazados", de: "8 Schlachtschiffe", nl: "8 slagschepen" },

          { en: "12 battleships", es: "12 acorazados", de: "12 Schlachtschiffe", nl: "12 slagschepen" },

          { en: "3 battleships", es: "3 acorazados", de: "3 Schlachtschiffe", nl: "3 slagschepen" }

        ],
        correctIndex: 1,
        explanation: {
          en: "All eight U.S. battleships present at Pearl Harbor were damaged during the attack, with four being sunk (Arizona, Oklahoma, California, and West Virginia). The other four (Maryland, Nevada, Pennsylvania, and Tennessee) were damaged but remained afloat. Remarkably, six of the eight battleships were eventually repaired and returned to service. The USS Arizona remains at the bottom of Pearl Harbor as a memorial.",
          es: "Los ocho acorazados estadounidenses presentes en Pearl Harbor fueron dañados durante el ataque, y cuatro fueron hundidos (Arizona, Oklahoma, California y West Virginia). Los otros cuatro (Maryland, Nevada, Pennsylvania y Tennessee) fueron dañados pero permanecieron a flote. Notablemente, seis de los ocho acorazados fueron finalmente reparados y volvieron al servicio. El USS Arizona permanece en el fondo de Pearl Harbor como memorial.",
          de: "Alle acht US-Schlachtschiffe, die in Pearl Harbor anwesend waren, wurden während des Angriffs beschädigt, wobei vier versenkt wurden (Arizona, Oklahoma, California und West Virginia). Die anderen vier (Maryland, Nevada, Pennsylvania und Tennessee) wurden beschädigt, blieben aber über Wasser. Bemerkenswerterweise wurden sechs der acht Schlachtschiffe schließlich repariert und wieder in Dienst gestellt. Die USS Arizona liegt als Gedenkstätte auf dem Grund von Pearl Harbor.",
          nl: "Alle acht Amerikaanse slagschepen die aanwezig waren in Pearl Harbor werden beschadigd tijdens de aanval, waarvan er vier werden gezonken (Arizona, Oklahoma, California en West Virginia). De andere vier (Maryland, Nevada, Pennsylvania en Tennessee) werden beschadigd maar bleven drijven. Opmerkelijk genoeg werden zes van de acht slagschepen uiteindelijk gerepareerd en teruggebracht in dienst. De USS Arizona blijft op de bodem van Pearl Harbor als gedenkteken."
        }
      },
      {
        question: {
          en: "President Franklin D. Roosevelt's famous speech after Pearl Harbor described December 7, 1941, as 'a date which will live in' what?",
          es: "El famoso discurso del presidente Franklin D. Roosevelt después de Pearl Harbor describió el 7 de diciembre de 1941 como 'una fecha que vivirá en' qué?",
          de: "Präsident Franklin D. Roosevelts berühmte Rede nach Pearl Harbor beschrieb den 7. Dezember 1941 als 'ein Datum, das leben wird in' was?",
          nl: "President Franklin D. Roosevelts beroemde toespraak na Pearl Harbor beschreef 7 december 1941 als 'een datum die zal leven in' wat?"
        },
        options: [
          { en: "Infamy", es: "Infamia", de: "Schande", nl: "Schande" },
          { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" },
          { en: "Shame", es: "Vergüenza", de: "Scham", nl: "Schaamte" },
          { en: "Memory", es: "Memoria", de: "Erinnerung", nl: "Herinnering" }
        ],
        correctIndex: 0,
        explanation: {
          en: "President Franklin D. Roosevelt's speech to Congress on December 8, 1941, began with the famous words: 'Yesterday, December 7, 1941—a date which will live in infamy—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.' This powerful speech, lasting only about seven minutes, resulted in Congress declaring war on Japan within an hour.",
          es: "El discurso del presidente Franklin D. Roosevelt al Congreso el 8 de diciembre de 1941 comenzó con las famosas palabras: 'Ayer, 7 de diciembre de 1941, una fecha que vivirá en la infamia, los Estados Unidos de América fueron atacados repentina y deliberadamente por las fuerzas navales y aéreas del Imperio de Japón'. Este poderoso discurso, que duró solo unos siete minutos, resultó en que el Congreso declarara la guerra a Japón en una hora.",
          de: "Präsident Franklin D. Roosevelts Rede vor dem Kongress am 8. Dezember 1941 begann mit den berühmten Worten: 'Gestern, am 7. Dezember 1941 – ein Datum, das in Schande leben wird – wurden die Vereinigten Staaten von Amerika plötzlich und vorsätzlich von den See- und Luftstreitkräften des Japanischen Kaiserreichs angegriffen.' Diese kraftvolle Rede, die nur etwa sieben Minuten dauerte, führte dazu, dass der Kongress Japan innerhalb einer Stunde den Krieg erklärte.",
          nl: "President Franklin D. Roosevelts toespraak tot het Congres op 8 december 1941 begon met de beroemde woorden: 'Gisteren, 7 december 1941 – een datum die in schande zal leven – werden de Verenigde Staten van Amerika plotseling en opzettelijk aangevallen door de marine- en luchtstrijdkrachten van het Keizerrijk Japan.' Deze krachtige toespraak, die slechts ongeveer zeven minuten duurde, resulteerde erin dat het Congres binnen een uur de oorlog verklaarde aan Japan."
        }
      }
    ],

    day8: [ /* 5 questions */
      {
        question: {
          en: "On December 8, 1980, John Lennon was tragically shot outside his apartment building in New York City. What was the name of this famous building?",
          es: "El 8 de diciembre de 1980, John Lennon fue trágicamente asesinado a tiros fuera de su edificio de apartamentos en la ciudad de Nueva York. ¿Cuál era el nombre de este famoso edificio?",
          de: "Am 8. Dezember 1980 wurde John Lennon tragisch vor seinem Apartmentgebäude in New York City erschossen. Wie hieß dieses berühmte Gebäude?",
          nl: "Op 8 december 1980 werd John Lennon tragisch neergeschoten voor zijn appartementengebouw in New York City. Wat was de naam van dit beroemde gebouw?"
        },
        options: [

          { en: "The Plaza Hotel", es: "The Plaza Hotel", de: "The Plaza Hotel", nl: "The Plaza Hotel" },

          { en: "The Dakota", es: "The Dakota", de: "The Dakota", nl: "The Dakota" },

          { en: "The San Remo", es: "The San Remo", de: "The San Remo", nl: "The San Remo" },

          { en: "The Beresford", es: "The Beresford", de: "The Beresford", nl: "The Beresford" }

        ],
        correctIndex: 1,
        explanation: {
          en: "John Lennon was shot outside The Dakota apartment building on Manhattan's Upper West Side. The former Beatles member was returning home with his wife Yoko Ono when he was shot by Mark David Chapman. Lennon was pronounced dead at Roosevelt Hospital. A memorial called 'Strawberry Fields' was later created in nearby Central Park to honor his memory.",
          es: "John Lennon recibió un disparo fuera del edificio de apartamentos The Dakota en el Upper West Side de Manhattan. El ex miembro de los Beatles regresaba a casa con su esposa Yoko Ono cuando fue disparado por Mark David Chapman. Lennon fue declarado muerto en el Hospital Roosevelt. Más tarde se creó un memorial llamado 'Strawberry Fields' en el cercano Central Park para honrar su memoria.",
          de: "John Lennon wurde vor dem Dakota-Apartmentgebäude an der Upper West Side von Manhattan erschossen. Das ehemalige Beatles-Mitglied kehrte mit seiner Frau Yoko Ono nach Hause zurück, als er von Mark David Chapman erschossen wurde. Lennon wurde im Roosevelt Hospital für tot erklärt. Ein Denkmal namens 'Strawberry Fields' wurde später im nahe gelegenen Central Park geschaffen, um sein Andenken zu ehren.",
          nl: "John Lennon werd neergeschoten voor het Dakota-appartementengebouw aan de Upper West Side van Manhattan. Het voormalige Beatles-lid keerde naar huis terug met zijn vrouw Yoko Ono toen hij werd neergeschoten door Mark David Chapman. Lennon werd dood verklaard in het Roosevelt Hospital. Een gedenkteken genaamd 'Strawberry Fields' werd later aangelegd in het nabijgelegen Central Park ter ere van zijn nagedachtenis."
        }
      },
      {
        question: {
          en: "December 8 is celebrated by Catholics as the Feast of the Immaculate Conception. What does this doctrine refer to?",
          es: "El 8 de diciembre es celebrado por los católicos como la Fiesta de la Inmaculada Concepción. ¿A qué se refiere esta doctrina?",
          de: "Der 8. Dezember wird von Katholiken als Fest der Unbefleckten Empfängnis gefeiert. Worauf bezieht sich diese Doktrin?",
          nl: "8 december wordt door katholieken gevierd als het Feest van de Onbevlekte Ontvangenis. Waar verwijst deze doctrine naar?"
        },
        options: [

          { en: "The birth of Jesus", es: "El nacimiento de Jesús", de: "Die Geburt Jesu", nl: "De geboorte van Jezus" },

          { en: "Mary being conceived without original sin", es: "María siendo concebida sin pecado original", de: "Maria wurde ohne Erbsünde empfangen", nl: "Maria werd zonder erfzonde ontvangen" },

          { en: "The Virgin Birth", es: "El Nacimiento Virginal", de: "Die jungfräuliche Geburt", nl: "De maagdelijke geboorte" },

          { en: "Mary's ascension to heaven", es: "La ascensión de María al cielo", de: "Marias Himmelfahrt", nl: "Maria's hemelvaart" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Immaculate Conception refers to the Catholic belief that Mary, the mother of Jesus, was conceived without original sin. This should not be confused with the Virgin Birth of Jesus. The doctrine was officially defined by Pope Pius IX in 1854. December 8 is celebrated as a holy day of obligation in many Catholic countries, and it is a public holiday in several nations including Spain, Italy, and Portugal.",
          es: "La Inmaculada Concepción se refiere a la creencia católica de que María, la madre de Jesús, fue concebida sin pecado original. Esto no debe confundirse con el Nacimiento Virginal de Jesús. La doctrina fue definida oficialmente por el Papa Pío IX en 1854. El 8 de diciembre se celebra como día de precepto en muchos países católicos, y es un día festivo en varias naciones incluyendo España, Italia y Portugal.",
          de: "Die Unbefleckte Empfängnis bezieht sich auf den katholischen Glauben, dass Maria, die Mutter Jesu, ohne Erbsünde empfangen wurde. Dies sollte nicht mit der jungfräulichen Geburt Jesu verwechselt werden. Die Doktrin wurde 1854 von Papst Pius IX. offiziell definiert. Der 8. Dezember wird in vielen katholischen Ländern als gebotener Feiertag gefeiert und ist in mehreren Nationen, darunter Spanien, Italien und Portugal, ein gesetzlicher Feiertag.",
          nl: "De Onbevlekte Ontvangenis verwijst naar het katholieke geloof dat Maria, de moeder van Jezus, zonder erfzonde werd ontvangen. Dit mag niet worden verward met de maagdelijke geboorte van Jezus. De doctrine werd officieel gedefinieerd door paus Pius IX in 1854. 8 december wordt gevierd als een geboden feestdag in veel katholieke landen, en het is een officiële feestdag in verschillende landen, waaronder Spanje, Italië en Portugal."
        }
      },
      {
        question: {
          en: "Jim Morrison, the legendary frontman of The Doors, was born on December 8, 1943. In which Florida city was he born?",
          es: "Jim Morrison, el legendario líder de The Doors, nació el 8 de diciembre de 1943. ¿En qué ciudad de Florida nació?",
          de: "Jim Morrison, der legendäre Frontmann von The Doors, wurde am 8. Dezember 1943 geboren. In welcher Stadt in Florida wurde er geboren?",
          nl: "Jim Morrison, de legendarische frontman van The Doors, werd geboren op 8 december 1943. In welke stad in Florida werd hij geboren?"
        },
        options: [

          { en: "Miami", es: "Miami", de: "Miami", nl: "Miami" },

          { en: "Tampa", es: "Tampa", de: "Tampa", nl: "Tampa" },

          { en: "Melbourne", es: "Melbourne", de: "Melbourne", nl: "Melbourne" },

          { en: "Jacksonville", es: "Jacksonville", de: "Jacksonville", nl: "Jacksonville" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Jim Morrison was born in Melbourne, Florida, on December 8, 1943. His father was a U.S. Navy officer, which meant the family moved frequently during his childhood. Morrison became the iconic lead singer of The Doors, known for hits like 'Light My Fire' and 'Riders on the Storm.' He died in Paris in 1971 at age 27, joining the infamous '27 Club' of musicians who died at that age.",
          es: "Jim Morrison nació en Melbourne, Florida, el 8 de diciembre de 1943. Su padre era oficial de la Marina de los EE. UU., lo que significaba que la familia se mudaba frecuentemente durante su infancia. Morrison se convirtió en el icónico cantante principal de The Doors, conocido por éxitos como 'Light My Fire' y 'Riders on the Storm'. Murió en París en 1971 a los 27 años, uniéndose al infame 'Club de los 27' de músicos que murieron a esa edad.",
          de: "Jim Morrison wurde am 8. Dezember 1943 in Melbourne, Florida, geboren. Sein Vater war ein US-Marine-Offizier, was bedeutete, dass die Familie während seiner Kindheit häufig umzog. Morrison wurde der ikonische Leadsänger von The Doors, bekannt für Hits wie 'Light My Fire' und 'Riders on the Storm'. Er starb 1971 in Paris im Alter von 27 Jahren und trat dem berüchtigten '27 Club' von Musikern bei, die in diesem Alter starben.",
          nl: "Jim Morrison werd geboren in Melbourne, Florida, op 8 december 1943. Zijn vader was een officier van de Amerikaanse marine, wat betekende dat het gezin vaak verhuisde tijdens zijn jeugd. Morrison werd de iconische leadzanger van The Doors, bekend van hits zoals 'Light My Fire' en 'Riders on the Storm'. Hij stierf in 1971 in Parijs op 27-jarige leeftijd en trad toe tot de beruchte '27 Club' van muzikanten die op die leeftijd stierven."
        }
      },
      {
        question: {
          en: "Which Beatles album was John Lennon promoting at the time of his death on December 8, 1980?",
          es: "¿Qué álbum de los Beatles estaba promocionando John Lennon en el momento de su muerte el 8 de diciembre de 1980?",
          de: "Welches Beatles-Album bewarb John Lennon zum Zeitpunkt seines Todes am 8. Dezember 1980?",
          nl: "Welk Beatles-album was John Lennon aan het promoten ten tijde van zijn dood op 8 december 1980?"
        },
        options: [

          { en: "Imagine", es: "Imagine", de: "Imagine", nl: "Imagine" },

          { en: "Mind Games", es: "Mind Games", de: "Mind Games", nl: "Mind Games" },

          { en: "Double Fantasy", es: "Double Fantasy", de: "Double Fantasy", nl: "Double Fantasy" },

          { en: "Walls and Bridges", es: "Walls and Bridges", de: "Walls and Bridges", nl: "Walls and Bridges" }

        ],
        correctIndex: 2,
        explanation: {
          en: "John Lennon was promoting his album 'Double Fantasy,' a collaboration with his wife Yoko Ono, at the time of his death. The album had been released just three weeks earlier in November 1980, marking Lennon's return to music after a five-year hiatus to focus on raising his son Sean. Ironically, Lennon had signed a copy of the album for his killer earlier that same day. 'Double Fantasy' went on to win the Grammy Award for Album of the Year in 1982.",
          es: "John Lennon estaba promocionando su álbum 'Double Fantasy', una colaboración con su esposa Yoko Ono, en el momento de su muerte. El álbum se había lanzado solo tres semanas antes en noviembre de 1980, marcando el regreso de Lennon a la música después de un paréntesis de cinco años para concentrarse en criar a su hijo Sean. Irónicamente, Lennon había firmado una copia del álbum para su asesino ese mismo día. 'Double Fantasy' ganó el premio Grammy al Álbum del Año en 1982.",
          de: "John Lennon bewarb zum Zeitpunkt seines Todes sein Album 'Double Fantasy', eine Zusammenarbeit mit seiner Frau Yoko Ono. Das Album war erst drei Wochen zuvor im November 1980 veröffentlicht worden und markierte Lennons Rückkehr zur Musik nach einer fünfjährigen Pause, um sich auf die Erziehung seines Sohnes Sean zu konzentrieren. Ironischerweise hatte Lennon am selben Tag eine Kopie des Albums für seinen Mörder signiert. 'Double Fantasy' gewann 1982 den Grammy Award für das Album des Jahres.",
          nl: "John Lennon was zijn album 'Double Fantasy', een samenwerking met zijn vrouw Yoko Ono, aan het promoten ten tijde van zijn dood. Het album was slechts drie weken eerder in november 1980 uitgebracht en markeerde Lennons terugkeer naar muziek na een onderbreking van vijf jaar om zich te concentreren op het opvoeden van zijn zoon Sean. Ironisch genoeg had Lennon diezelfde dag eerder een exemplaar van het album gesigneerd voor zijn moordenaar. 'Double Fantasy' won in 1982 de Grammy Award voor Album van het Jaar."
        }
      },
      {
        question: {
          en: "The Immaculate Conception was officially defined as Catholic doctrine in which year?",
          es: "La Inmaculada Concepción fue oficialmente definida como doctrina católica en qué año?",
          de: "In welchem Jahr wurde die Unbefleckte Empfängnis offiziell als katholische Doktrin definiert?",
          nl: "In welk jaar werd de Onbevlekte Ontvangenis officieel gedefinieerd als katholieke doctrine?"
        },
        options: [

          { en: "1754", es: "1754", de: "1754", nl: "1754" },

          { en: "1854", es: "1854", de: "1854", nl: "1854" },

          { en: "1654", es: "1654", de: "1654", nl: "1654" },

          { en: "1954", es: "1954", de: "1954", nl: "1954" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Pope Pius IX officially defined the doctrine of the Immaculate Conception in 1854 through the papal bull 'Ineffabilis Deus.' This made it a dogma of the Catholic Church that Mary was preserved from original sin from the moment of her conception. The doctrine had been debated by theologians for centuries before being officially proclaimed. Four years later, in 1858, the Virgin Mary reportedly appeared to Bernadette Soubirous in Lourdes, France, identifying herself as 'the Immaculate Conception.'",
          es: "El Papa Pío IX definió oficialmente la doctrina de la Inmaculada Concepción en 1854 a través de la bula papal 'Ineffabilis Deus'. Esto convirtió en dogma de la Iglesia Católica que María fue preservada del pecado original desde el momento de su concepción. La doctrina había sido debatida por teólogos durante siglos antes de ser proclamada oficialmente. Cuatro años después, en 1858, la Virgen María supuestamente se apareció a Bernadette Soubirous en Lourdes, Francia, identificándose como 'la Inmaculada Concepción'.",
          de: "Papst Pius IX. definierte die Doktrin der Unbefleckten Empfängnis 1854 offiziell durch die päpstliche Bulle 'Ineffabilis Deus'. Dies machte es zu einem Dogma der katholischen Kirche, dass Maria vom Moment ihrer Empfängnis an von der Erbsünde bewahrt wurde. Die Doktrin war jahrhundertelang von Theologen debattiert worden, bevor sie offiziell verkündet wurde. Vier Jahre später, 1858, erschien die Jungfrau Maria angeblich Bernadette Soubirous in Lourdes, Frankreich, und identifizierte sich als 'die Unbefleckte Empfängnis'.",
          nl: "Paus Pius IX definieerde de doctrine van de Onbevlekte Ontvangenis officieel in 1854 door middel van de pauselijke bul 'Ineffabilis Deus'. Dit maakte het tot een dogma van de Katholieke Kerk dat Maria vanaf het moment van haar ontvangenis werd bewaard voor de erfzonde. De doctrine was eeuwenlang door theologen bediscussieerd voordat deze officieel werd afgekondigd. Vier jaar later, in 1858, verscheen de Maagd Maria naar verluidt aan Bernadette Soubirous in Lourdes, Frankrijk, waarbij ze zichzelf identificeerde als 'de Onbevlekte Ontvangenis'."
        }
      }
    ],

    day9: [ /* 5 questions */
      {
        question: {
          en: "On December 9, 1961, Tanzania gained independence from British colonial rule. Which two territories merged to form Tanzania?",
          es: "El 9 de diciembre de 1961, Tanzania obtuvo la independencia del dominio colonial británico. ¿Qué dos territorios se fusionaron para formar Tanzania?",
          de: "Am 9. Dezember 1961 erlangte Tansania die Unabhängigkeit von der britischen Kolonialherrschaft. Welche zwei Gebiete vereinigten sich zu Tansania?",
          nl: "Op 9 december 1961 werd Tanzania onafhankelijk van de Britse koloniale overheersing. Welke twee gebieden smolten samen om Tanzania te vormen?"
        },
        options: [
          { en: "Mozambique and Malawi", es: "Mozambique y Malaui", de: "Mosambik und Malawi", nl: "Mozambique en Malawi" },
          { en: "Rwanda and Burundi", es: "Ruanda y Burundi", de: "Ruanda und Burundi", nl: "Rwanda en Burundi" },
          { en: "Kenya and Uganda", es: "Kenia y Uganda", de: "Kenia und Uganda", nl: "Kenia en Oeganda" },
          { en: "Tanganyika and Zanzibar", es: "Tanganica y Zanzíbar", de: "Tanganjika und Sansibar", nl: "Tanganyika en Zanzibar" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Tanzania was formed by the merger of Tanganyika and Zanzibar. Tanganyika gained independence on December 9, 1961, and Zanzibar became independent on December 10, 1963. The two territories united on April 26, 1964, to form the United Republic of Tanzania. Julius Nyerere, who led Tanganyika to independence, became the first president of the unified nation. The country's name combines 'Tan' from Tanganyika and 'Zan' from Zanzibar.",
          es: "Tanzania se formó mediante la fusión de Tanganica y Zanzíbar. Tanganica obtuvo la independencia el 9 de diciembre de 1961, y Zanzíbar se independizó el 10 de diciembre de 1963. Los dos territorios se unieron el 26 de abril de 1964 para formar la República Unida de Tanzania. Julius Nyerere, quien lideró a Tanganica hacia la independencia, se convirtió en el primer presidente de la nación unificada. El nombre del país combina 'Tan' de Tanganica y 'Zan' de Zanzíbar.",
          de: "Tansania entstand durch die Vereinigung von Tanganjika und Sansibar. Tanganjika erlangte am 9. Dezember 1961 die Unabhängigkeit, und Sansibar wurde am 10. Dezember 1963 unabhängig. Die beiden Gebiete vereinigten sich am 26. April 1964 zur Vereinigten Republik Tansania. Julius Nyerere, der Tanganjika in die Unabhängigkeit führte, wurde der erste Präsident der vereinten Nation. Der Name des Landes kombiniert 'Tan' von Tanganjika und 'Zan' von Sansibar.",
          nl: "Tanzania werd gevormd door de samenvoeging van Tanganyika en Zanzibar. Tanganyika werd onafhankelijk op 9 december 1961, en Zanzibar werd onafhankelijk op 10 december 1963. De twee gebieden verenigden zich op 26 april 1964 om de Verenigde Republiek Tanzania te vormen. Julius Nyerere, die Tanganyika naar onafhankelijkheid leidde, werd de eerste president van de verenigde natie. De naam van het land combineert 'Tan' van Tanganyika en 'Zan' van Zanzibar."
        }
      },
      {
        question: {
          en: "On December 9, 1968, Douglas Engelbart gave a groundbreaking demonstration that introduced which revolutionary computer device?",
          es: "El 9 de diciembre de 1968, Douglas Engelbart realizó una demostración revolucionaria que introdujo qué dispositivo informático revolucionario?",
          de: "Am 9. Dezember 1968 gab Douglas Engelbart eine bahnbrechende Demonstration, die welches revolutionäre Computergerät vorstellte?",
          nl: "Op 9 december 1968 gaf Douglas Engelbart een baanbrekende demonstratie die welk revolutionair computerapparaat introduceerde?"
        },
        options: [

          { en: "The keyboard", es: "El teclado", de: "Die Tastatur", nl: "Het toetsenbord" },

          { en: "The computer mouse", es: "El ratón de computadora", de: "Die Computermaus", nl: "De computermuis" },

          { en: "The touchscreen", es: "La pantalla táctil", de: "Der Touchscreen", nl: "Het touchscreen" },

          { en: "The trackpad", es: "El trackpad", de: "Das Trackpad", nl: "Het trackpad" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Douglas Engelbart demonstrated the computer mouse on December 9, 1968, in what became known as 'The Mother of All Demos.' During this 90-minute presentation at the Fall Joint Computer Conference in San Francisco, he also showcased video conferencing, hypertext, word processing, and collaborative editing. The mouse was nicknamed the 'mouse' because its tail (cable) came out the end. This demonstration revolutionized human-computer interaction.",
          es: "Douglas Engelbart demostró el ratón de computadora el 9 de diciembre de 1968, en lo que se conoció como 'La Madre de Todas las Demostraciones'. Durante esta presentación de 90 minutos en la Conferencia Conjunta de Computación de Otoño en San Francisco, también mostró videoconferencias, hipertexto, procesamiento de textos y edición colaborativa. El ratón se apodó 'ratón' porque su cola (cable) salía por el extremo. Esta demostración revolucionó la interacción humano-computadora.",
          de: "Douglas Engelbart demonstrierte die Computermaus am 9. Dezember 1968 in dem, was als 'Die Mutter aller Demos' bekannt wurde. Während dieser 90-minütigen Präsentation auf der Fall Joint Computer Conference in San Francisco zeigte er auch Videokonferenzen, Hypertext, Textverarbeitung und kollaborative Bearbeitung. Die Maus wurde 'Maus' genannt, weil ihr Schwanz (Kabel) am Ende herauskam. Diese Demonstration revolutionierte die Mensch-Computer-Interaktion.",
          nl: "Douglas Engelbart demonstreerde de computermuis op 9 december 1968, in wat bekend werd als 'De Moeder van Alle Demo's'. Tijdens deze 90 minuten durende presentatie op de Fall Joint Computer Conference in San Francisco liet hij ook videoconferenties, hypertekst, tekstverwerking en gezamenlijke bewerking zien. De muis kreeg de bijnaam 'muis' omdat zijn staart (kabel) uit het uiteinde kwam. Deze demonstratie revolutioneerde de mens-computer interactie."
        }
      },
      {
        question: {
          en: "Actor John Malkovich was born on December 9, 1953. For which film did he receive his first Academy Award nomination?",
          es: "El actor John Malkovich nació el 9 de diciembre de 1953. ¿Por qué película recibió su primera nominación al Premio de la Academia?",
          de: "Der Schauspieler John Malkovich wurde am 9. Dezember 1953 geboren. Für welchen Film erhielt er seine erste Oscar-Nominierung?",
          nl: "Acteur John Malkovich werd geboren op 9 december 1953. Voor welke film ontving hij zijn eerste Oscar-nominatie?"
        },
        options: [

          { en: "Dangerous Liaisons", es: "Relaciones peligrosas", de: "Gefährliche Liebschaften", nl: "Dangerous Liaisons" },

          { en: "Places in the Heart", es: "Lugares en el corazón", de: "Ein Platz im Herzen", nl: "Places in the Heart" },

          { en: "In the Line of Fire", es: "En la línea de fuego", de: "In the Line of Fire", nl: "In the Line of Fire" },

          { en: "Being John Malkovich", es: "Cómo ser John Malkovich", de: "Being John Malkovich", nl: "Being John Malkovich" }

        ],
        correctIndex: 1,
        explanation: {
          en: "John Malkovich received his first Academy Award nomination for Best Supporting Actor for 'Places in the Heart' (1984), in which he played a blind boarder. He received his second Oscar nomination for 'In the Line of Fire' (1993). Malkovich is known for his distinctive voice and intense performances in films like 'Dangerous Liaisons,' 'Being John Malkovich,' and 'Burn After Reading.' He's also a respected stage actor and theater director.",
          es: "John Malkovich recibió su primera nominación al Premio de la Academia como Mejor Actor de Reparto por 'Lugares en el corazón' (1984), en la que interpretó a un huésped ciego. Recibió su segunda nominación al Oscar por 'En la línea de fuego' (1993). Malkovich es conocido por su voz distintiva y actuaciones intensas en películas como 'Relaciones peligrosas', 'Cómo ser John Malkovich' y 'Burn After Reading'. También es un respetado actor de teatro y director teatral.",
          de: "John Malkovich erhielt seine erste Oscar-Nominierung als Bester Nebendarsteller für 'Ein Platz im Herzen' (1984), in dem er einen blinden Untermieter spielte. Seine zweite Oscar-Nominierung erhielt er für 'In the Line of Fire' (1993). Malkovich ist bekannt für seine markante Stimme und intensive Darbietungen in Filmen wie 'Gefährliche Liebschaften', 'Being John Malkovich' und 'Burn After Reading'. Er ist auch ein respektierter Bühnenschauspieler und Theaterregisseur.",
          nl: "John Malkovich ontving zijn eerste Oscar-nominatie voor Beste Mannelijke Bijrol voor 'Places in the Heart' (1984), waarin hij een blinde kostganger speelde. Hij ontving zijn tweede Oscar-nominatie voor 'In the Line of Fire' (1993). Malkovich staat bekend om zijn kenmerkende stem en intense optredens in films zoals 'Dangerous Liaisons', 'Being John Malkovich' en 'Burn After Reading'. Hij is ook een gerespecteerd toneelacteur en theaterregisseur."
        }
      },
      {
        question: {
          en: "Douglas Engelbart's famous 1968 demonstration is often called by what nickname?",
          es: "La famosa demostración de Douglas Engelbart de 1968 a menudo se llama con qué apodo?",
          de: "Douglas Engelbarts berühmte Demonstration von 1968 wird oft mit welchem Spitznamen bezeichnet?",
          nl: "Douglas Engelbarts beroemde demonstratie uit 1968 wordt vaak met welke bijnaam genoemd?"
        },
        options: [

          { en: "The Innovation Showcase", es: "La Vitrina de Innovación", de: "Die Innovations-Präsentation", nl: "De Innovatie Showcase" },

          { en: "The Mother of All Demos", es: "La Madre de Todas las Demostraciones", de: "Die Mutter aller Demos", nl: "De Moeder van Alle Demo's" },

          { en: "The Digital Revolution", es: "La Revolución Digital", de: "Die Digitale Revolution", nl: "De Digitale Revolutie" },

          { en: "The Computer Age Launch", es: "El Lanzamiento de la Era Informática", de: "Der Start des Computerzeitalters", nl: "De Lancering van het Computertijdperk" }

        ],
        correctIndex: 1,
        explanation: {
          en: "'The Mother of All Demos' took place on December 9, 1968, at the Fall Joint Computer Conference in San Francisco. During this 90-minute presentation, Douglas Engelbart and his team from the Stanford Research Institute demonstrated technologies that would become fundamental to modern computing: the mouse, hypertext linking, real-time text editing, video conferencing, and collaborative work. The demonstration was decades ahead of its time and influenced the development of personal computers.",
          es: "'La Madre de Todas las Demostraciones' tuvo lugar el 9 de diciembre de 1968 en la Conferencia Conjunta de Computación de Otoño en San Francisco. Durante esta presentación de 90 minutos, Douglas Engelbart y su equipo del Instituto de Investigación de Stanford demostraron tecnologías que se volverían fundamentales para la informática moderna: el ratón, enlaces de hipertexto, edición de texto en tiempo real, videoconferencias y trabajo colaborativo. La demostración fue décadas adelantada a su tiempo e influyó en el desarrollo de las computadoras personales.",
          de: "'Die Mutter aller Demos' fand am 9. Dezember 1968 auf der Fall Joint Computer Conference in San Francisco statt. Während dieser 90-minütigen Präsentation demonstrierten Douglas Engelbart und sein Team vom Stanford Research Institute Technologien, die für das moderne Computing grundlegend werden sollten: die Maus, Hypertext-Verlinkung, Echtzeit-Textbearbeitung, Videokonferenzen und kollaborative Arbeit. Die Demonstration war ihrer Zeit um Jahrzehnte voraus und beeinflusste die Entwicklung von Personal Computern.",
          nl: "'De Moeder van Alle Demo's' vond plaats op 9 december 1968 tijdens de Fall Joint Computer Conference in San Francisco. Tijdens deze 90 minuten durende presentatie demonstreerden Douglas Engelbart en zijn team van het Stanford Research Institute technologieën die fundamenteel zouden worden voor moderne computing: de muis, hypertext-koppelingen, real-time tekstbewerking, videoconferenties en samenwerkend werk. De demonstratie was decennia vooruit op zijn tijd en beïnvloedde de ontwikkeling van personal computers."
        }
      },
      {
        question: {
          en: "Who was the first president of independent Tanganyika (later Tanzania) after gaining independence on December 9, 1961?",
          es: "¿Quién fue el primer presidente de Tanganica independiente (más tarde Tanzania) después de obtener la independencia el 9 de diciembre de 1961?",
          de: "Wer war der erste Präsident des unabhängigen Tanganjika (später Tansania) nach Erlangung der Unabhängigkeit am 9. Dezember 1961?",
          nl: "Wie was de eerste president van onafhankelijk Tanganyika (later Tanzania) na het verkrijgen van onafhankelijkheid op 9 december 1961?"
        },
        options: [

          { en: "Jomo Kenyatta", es: "Jomo Kenyatta", de: "Jomo Kenyatta", nl: "Jomo Kenyatta" },

          { en: "Julius Nyerere", es: "Julius Nyerere", de: "Julius Nyerere", nl: "Julius Nyerere" },

          { en: "Kenneth Kaunda", es: "Kenneth Kaunda", de: "Kenneth Kaunda", nl: "Kenneth Kaunda" },

          { en: "Milton Obote", es: "Milton Obote", de: "Milton Obote", nl: "Milton Obote" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Julius Nyerere led Tanganyika to independence and became its first prime minister in 1961, then president in 1962. When Tanganyika merged with Zanzibar in 1964, he became the first president of Tanzania. Known as 'Mwalimu' (teacher in Swahili), Nyerere promoted African socialism through his philosophy of 'Ujamaa' (familyhood). He stepped down voluntarily in 1985, making him one of the few African leaders to peacefully transfer power. He remained influential in African politics until his death in 1999.",
          es: "Julius Nyerere lideró a Tanganica hacia la independencia y se convirtió en su primer primer ministro en 1961, luego presidente en 1962. Cuando Tanganica se fusionó con Zanzíbar en 1964, se convirtió en el primer presidente de Tanzania. Conocido como 'Mwalimu' (maestro en suajili), Nyerere promovió el socialismo africano a través de su filosofía de 'Ujamaa' (hermandad familiar). Renunció voluntariamente en 1985, convirtiéndolo en uno de los pocos líderes africanos en transferir el poder pacíficamente. Permaneció influyente en la política africana hasta su muerte en 1999.",
          de: "Julius Nyerere führte Tanganjika in die Unabhängigkeit und wurde 1961 sein erster Premierminister, dann 1962 Präsident. Als Tanganjika 1964 mit Sansibar fusionierte, wurde er der erste Präsident Tansanias. Bekannt als 'Mwalimu' (Lehrer auf Swahili), förderte Nyerere den afrikanischen Sozialismus durch seine Philosophie von 'Ujamaa' (Familiengemeinschaft). Er trat 1985 freiwillig zurück, was ihn zu einem der wenigen afrikanischen Führer machte, die die Macht friedlich übertrugen. Er blieb bis zu seinem Tod 1999 einflussreich in der afrikanischen Politik.",
          nl: "Julius Nyerere leidde Tanganyika naar onafhankelijkheid en werd in 1961 de eerste premier, vervolgens president in 1962. Toen Tanganyika in 1964 fuseerde met Zanzibar, werd hij de eerste president van Tanzania. Bekend als 'Mwalimu' (leraar in het Swahili), promootte Nyerere Afrikaans socialisme door zijn filosofie van 'Ujamaa' (familie-eenheid). Hij trad vrijwillig af in 1985, waardoor hij een van de weinige Afrikaanse leiders was die vreedzaam de macht overdroeg. Hij bleef invloedrijk in de Afrikaanse politiek tot zijn dood in 1999."
        }
      }
    ],

    day10: [ /* 5 questions */
      {
        question: {
          en: "December 10 is celebrated annually as Human Rights Day. In which year did the United Nations General Assembly adopt the Universal Declaration of Human Rights?",
          es: "El 10 de diciembre se celebra anualmente como Día de los Derechos Humanos. ¿En qué año adoptó la Asamblea General de las Naciones Unidas la Declaración Universal de Derechos Humanos?",
          de: "Der 10. Dezember wird jährlich als Tag der Menschenrechte gefeiert. In welchem Jahr verabschiedete die Generalversammlung der Vereinten Nationen die Allgemeine Erklärung der Menschenrechte?",
          nl: "10 december wordt jaarlijks gevierd als Dag van de Mensenrechten. In welk jaar heeft de Algemene Vergadering van de Verenigde Naties de Universele Verklaring van de Rechten van de Mens aangenomen?"
        },
        options: [
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1948", es: "1948", de: "1948", nl: "1948" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Universal Declaration of Human Rights was adopted by the UN General Assembly on December 10, 1948, in Paris. This landmark document, drafted by a committee chaired by Eleanor Roosevelt, proclaims the inalienable rights of all human beings regardless of race, color, religion, sex, language, or other status. The Declaration has been translated into over 500 languages and serves as a common standard of achievement for all peoples and nations.",
          es: "La Declaración Universal de Derechos Humanos fue adoptada por la Asamblea General de la ONU el 10 de diciembre de 1948 en París. Este documento histórico, redactado por un comité presidido por Eleanor Roosevelt, proclama los derechos inalienables de todos los seres humanos sin distinción de raza, color, religión, sexo, idioma u otra condición. La Declaración ha sido traducida a más de 500 idiomas y sirve como un estándar común de logros para todos los pueblos y naciones.",
          de: "Die Allgemeine Erklärung der Menschenrechte wurde am 10. Dezember 1948 von der UN-Generalversammlung in Paris verabschiedet. Dieses wegweisende Dokument, das von einem Ausschuss unter dem Vorsitz von Eleanor Roosevelt entworfen wurde, verkündet die unveräußerlichen Rechte aller Menschen unabhängig von Rasse, Hautfarbe, Religion, Geschlecht, Sprache oder anderem Status. Die Erklärung wurde in über 500 Sprachen übersetzt und dient als gemeinsamer Maßstab für alle Völker und Nationen.",
          nl: "De Universele Verklaring van de Rechten van de Mens werd op 10 december 1948 door de Algemene Vergadering van de VN in Parijs aangenomen. Dit baanbrekende document, opgesteld door een commissie onder voorzitterschap van Eleanor Roosevelt, proclameert de onvervreemdbare rechten van alle mensen, ongeacht ras, huidskleur, religie, geslacht, taal of andere status. De Verklaring is vertaald in meer dan 500 talen en dient als een gemeenschappelijke maatstaf voor alle volkeren en naties."
        }
      },
      {
        question: {
          en: "On December 10, 1817, which U.S. state became the 20th state to join the Union?",
          es: "El 10 de diciembre de 1817, ¿qué estado de EE.UU. se convirtió en el vigésimo estado en unirse a la Unión?",
          de: "Am 10. Dezember 1817 wurde welcher US-Bundesstaat der 20. Bundesstaat der Union?",
          nl: "Op 10 december 1817 werd welke Amerikaanse staat de 20e staat die zich bij de Unie aansloot?"
        },
        options: [

          { en: "Alabama", es: "Alabama", de: "Alabama", nl: "Alabama" },

          { en: "Mississippi", es: "Misisipi", de: "Mississippi", nl: "Mississippi" },

          { en: "Louisiana", es: "Luisiana", de: "Louisiana", nl: "Louisiana" },

          { en: "Arkansas", es: "Arkansas", de: "Arkansas", nl: "Arkansas" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Mississippi became the 20th U.S. state on December 10, 1817. Named after the Mississippi River, which flows along its western border, the state was originally inhabited by Native American tribes including the Choctaw and Chickasaw. Mississippi played a significant role in the Civil War and the Civil Rights Movement. The state's economy was historically based on cotton cultivation, earning it the nickname 'The Magnolia State.'",
          es: "Misisipi se convirtió en el vigésimo estado de EE.UU. el 10 de diciembre de 1817. Nombrado en honor al río Misisipi, que fluye a lo largo de su frontera occidental, el estado fue originalmente habitado por tribus nativas americanas incluyendo los choctaw y chickasaw. Misisipi desempeñó un papel significativo en la Guerra Civil y el Movimiento por los Derechos Civiles. La economía del estado se basó históricamente en el cultivo de algodón, lo que le valió el apodo de 'El Estado de la Magnolia'.",
          de: "Mississippi wurde am 10. Dezember 1817 der 20. US-Bundesstaat. Benannt nach dem Mississippi River, der entlang seiner westlichen Grenze fließt, wurde der Staat ursprünglich von Indianerstämmen wie den Choctaw und Chickasaw bewohnt. Mississippi spielte eine bedeutende Rolle im Bürgerkrieg und in der Bürgerrechtsbewegung. Die Wirtschaft des Staates basierte historisch auf dem Baumwollanbau, was ihm den Spitznamen 'Der Magnolien-Staat' einbrachte.",
          nl: "Mississippi werd op 10 december 1817 de 20e Amerikaanse staat. Genoemd naar de Mississippi rivier, die langs de westelijke grens stroomt, werd de staat oorspronkelijk bewoond door inheemse Amerikaanse stammen, waaronder de Choctaw en Chickasaw. Mississippi speelde een belangrijke rol in de Burgeroorlog en de burgerrechtenbeweging. De economie van de staat was historisch gebaseerd op katoenteelt, wat de staat de bijnaam 'De Magnolia Staat' opleverde."
        }
      },
      {
        question: {
          en: "The Nobel Prizes are traditionally awarded on December 10 each year. This date commemorates the death anniversary of which person?",
          es: "Los Premios Nobel se otorgan tradicionalmente el 10 de diciembre de cada año. Esta fecha conmemora el aniversario de la muerte de qué persona?",
          de: "Die Nobelpreise werden traditionell jedes Jahr am 10. Dezember verliehen. Dieses Datum gedenkt dem Todestag welcher Person?",
          nl: "De Nobelprijzen worden traditioneel elk jaar op 10 december uitgereikt. Deze datum herdenkt de sterfdag van welke persoon?"
        },
        options: [

          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },

          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },

          { en: "Alfred Nobel", es: "Alfred Nobel", de: "Alfred Nobel", nl: "Alfred Nobel" },

          { en: "Niels Bohr", es: "Niels Bohr", de: "Niels Bohr", nl: "Niels Bohr" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The Nobel Prizes are awarded annually on December 10, the anniversary of Alfred Nobel's death in 1896. Nobel, a Swedish chemist and inventor of dynamite, left his fortune to establish the prizes in his will. The prizes recognize outstanding contributions in Physics, Chemistry, Physiology or Medicine, Literature, and Peace. The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel was added in 1968. The ceremony takes place in Stockholm, Sweden, except for the Peace Prize, which is awarded in Oslo, Norway.",
          es: "Los Premios Nobel se otorgan anualmente el 10 de diciembre, aniversario de la muerte de Alfred Nobel en 1896. Nobel, químico sueco e inventor de la dinamita, dejó su fortuna para establecer los premios en su testamento. Los premios reconocen contribuciones destacadas en Física, Química, Fisiología o Medicina, Literatura y Paz. El Premio Sveriges Riksbank de Ciencias Económicas en Memoria de Alfred Nobel se agregó en 1968. La ceremonia se lleva a cabo en Estocolmo, Suecia, excepto el Premio de la Paz, que se otorga en Oslo, Noruega.",
          de: "Die Nobelpreise werden jährlich am 10. Dezember verliehen, dem Todestag von Alfred Nobel im Jahr 1896. Nobel, ein schwedischer Chemiker und Erfinder des Dynamits, hinterließ sein Vermögen zur Stiftung der Preise in seinem Testament. Die Preise würdigen herausragende Beiträge in Physik, Chemie, Physiologie oder Medizin, Literatur und Frieden. Der Preis der Sveriges Riksbank für Wirtschaftswissenschaften im Gedenken an Alfred Nobel wurde 1968 hinzugefügt. Die Zeremonie findet in Stockholm, Schweden, statt, außer dem Friedenspreis, der in Oslo, Norwegen, verliehen wird.",
          nl: "De Nobelprijzen worden jaarlijks uitgereikt op 10 december, de sterfdag van Alfred Nobel in 1896. Nobel, een Zweedse scheikundige en uitvinder van dynamiet, liet zijn fortuin na om de prijzen op te richten in zijn testament. De prijzen erkennen uitstekende bijdragen in natuurkunde, scheikunde, fysiologie of geneeskunde, literatuur en vrede. De Sveriges Riksbank-prijs voor economische wetenschappen ter nagedachtenis aan Alfred Nobel werd in 1968 toegevoegd. De ceremonie vindt plaats in Stockholm, Zweden, behalve de Vredesprijs, die wordt uitgereikt in Oslo, Noorwegen."
        }
      },
      {
        question: {
          en: "Which famous author wrote the Declaration of Human Rights article that states 'Everyone has the right to freedom of thought, conscience and religion'?",
          es: "¿Qué famoso autor escribió el artículo de la Declaración de Derechos Humanos que establece 'Toda persona tiene derecho a la libertad de pensamiento, de conciencia y de religión'?",
          de: "Welcher berühmte Autor schrieb den Artikel der Menschenrechtserklärung, der besagt 'Jeder hat das Recht auf Gedanken-, Gewissens- und Religionsfreiheit'?",
          nl: "Welke beroemde auteur schreef het artikel van de Verklaring van de Rechten van de Mens waarin staat 'Iedereen heeft recht op vrijheid van gedachte, geweten en godsdienst'?"
        },
        options: [

          { en: "René Cassin", es: "René Cassin", de: "René Cassin", nl: "René Cassin" },

          { en: "Eleanor Roosevelt", es: "Eleanor Roosevelt", de: "Eleanor Roosevelt", nl: "Eleanor Roosevelt" },

          { en: "Charles Malik", es: "Charles Malik", de: "Charles Malik", nl: "Charles Malik" },

          { en: "John Humphrey", es: "John Humphrey", de: "John Humphrey", nl: "John Humphrey" }

        ],
        correctIndex: 3,
        explanation: {
          en: "John Humphrey, a Canadian legal scholar, prepared the initial draft of the Universal Declaration of Human Rights. Eleanor Roosevelt chaired the drafting committee, René Cassin refined the language, and Charles Malik contributed philosophical perspectives. Article 18 of the Declaration states that 'Everyone has the right to freedom of thought, conscience and religion.' The collaborative effort involved representatives from various cultural and legal backgrounds to ensure universal applicability.",
          es: "John Humphrey, un erudito legal canadiense, preparó el borrador inicial de la Declaración Universal de Derechos Humanos. Eleanor Roosevelt presidió el comité de redacción, René Cassin refinó el lenguaje y Charles Malik contribuyó con perspectivas filosóficas. El artículo 18 de la Declaración establece que 'Toda persona tiene derecho a la libertad de pensamiento, de conciencia y de religión'. El esfuerzo colaborativo involucró a representantes de diversos antecedentes culturales y legales para asegurar la aplicabilidad universal.",
          de: "John Humphrey, ein kanadischer Rechtsgelehrter, erstellte den ersten Entwurf der Allgemeinen Erklärung der Menschenrechte. Eleanor Roosevelt leitete den Entwurfsausschuss, René Cassin verfeinerte die Sprache und Charles Malik trug philosophische Perspektiven bei. Artikel 18 der Erklärung besagt, dass 'Jeder das Recht auf Gedanken-, Gewissens- und Religionsfreiheit hat.' Die gemeinsame Anstrengung umfasste Vertreter verschiedener kultureller und rechtlicher Hintergründe, um universelle Anwendbarkeit zu gewährleisten.",
          nl: "John Humphrey, een Canadese rechtsgeleerde, bereidde het eerste ontwerp van de Universele Verklaring van de Rechten van de Mens voor. Eleanor Roosevelt zat het ontwerpcomité voor, René Cassin verfijnde de taal en Charles Malik droeg filosofische perspectieven bij. Artikel 18 van de Verklaring stelt dat 'Iedereen recht heeft op vrijheid van gedachte, geweten en godsdienst.' De gezamenlijke inspanning omvatte vertegenwoordigers van verschillende culturele en juridische achtergronden om universele toepasbaarheid te waarborgen."
        }
      },
      {
        question: {
          en: "In which city are the Nobel Prizes (except the Peace Prize) awarded annually on December 10?",
          es: "¿En qué ciudad se otorgan anualmente los Premios Nobel (excepto el Premio de la Paz) el 10 de diciembre?",
          de: "In welcher Stadt werden die Nobelpreise (außer dem Friedenspreis) jährlich am 10. Dezember verliehen?",
          nl: "In welke stad worden de Nobelprijzen (behalve de Vredesprijs) jaarlijks uitgereikt op 10 december?"
        },
        options: [

          { en: "Copenhagen", es: "Copenhague", de: "Kopenhagen", nl: "Kopenhagen" },

          { en: "Stockholm", es: "Estocolmo", de: "Stockholm", nl: "Stockholm" },

          { en: "Oslo", es: "Oslo", de: "Oslo", nl: "Oslo" },

          { en: "Helsinki", es: "Helsinki", de: "Helsinki", nl: "Helsinki" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Nobel Prizes in Physics, Chemistry, Physiology or Medicine, Literature, and Economic Sciences are awarded in Stockholm, Sweden, at the Stockholm Concert Hall. The Nobel Peace Prize is uniquely awarded in Oslo, Norway, at the Oslo City Hall. This tradition dates back to Alfred Nobel's will, though the exact reason for choosing Oslo for the Peace Prize remains somewhat unclear. Sweden and Norway were in a union when Nobel wrote his will in 1895.",
          es: "Los Premios Nobel de Física, Química, Fisiología o Medicina, Literatura y Ciencias Económicas se otorgan en Estocolmo, Suecia, en la Sala de Conciertos de Estocolmo. El Premio Nobel de la Paz se otorga únicamente en Oslo, Noruega, en el Ayuntamiento de Oslo. Esta tradición se remonta al testamento de Alfred Nobel, aunque la razón exacta para elegir Oslo para el Premio de la Paz permanece algo poco clara. Suecia y Noruega estaban en unión cuando Nobel escribió su testamento en 1895.",
          de: "Die Nobelpreise für Physik, Chemie, Physiologie oder Medizin, Literatur und Wirtschaftswissenschaften werden in Stockholm, Schweden, im Stockholmer Konzerthaus verliehen. Der Friedensnobelpreis wird einzigartig in Oslo, Norwegen, im Osloer Rathaus verliehen. Diese Tradition geht auf Alfred Nobels Testament zurück, obwohl der genaue Grund für die Wahl von Oslo für den Friedenspreis etwas unklar bleibt. Schweden und Norwegen waren in einer Union, als Nobel 1895 sein Testament schrieb.",
          nl: "De Nobelprijzen voor natuurkunde, scheikunde, fysiologie of geneeskunde, literatuur en economische wetenschappen worden uitgereikt in Stockholm, Zweden, in de Stockholm Concert Hall. De Nobelprijs voor de Vrede wordt uniek uitgereikt in Oslo, Noorwegen, in het Stadhuis van Oslo. Deze traditie gaat terug tot het testament van Alfred Nobel, hoewel de exacte reden voor het kiezen van Oslo voor de Vredesprijs enigszins onduidelijk blijft. Zweden en Noorwegen waren in een unie toen Nobel zijn testament schreef in 1895."
        }
      }
    ],

    day11: [ /* 5 questions */
      {
        question: {
          en: "On December 11, 1946, which international organization was established to provide humanitarian aid to children worldwide?",
          es: "El 11 de diciembre de 1946, ¿qué organización internacional se estableció para proporcionar ayuda humanitaria a niños de todo el mundo?",
          de: "Am 11. Dezember 1946 wurde welche internationale Organisation gegründet, um humanitäre Hilfe für Kinder weltweit zu leisten?",
          nl: "Op 11 december 1946 werd welke internationale organisatie opgericht om humanitaire hulp te verlenen aan kinderen over de hele wereld?"
        },
        options: [

          { en: "Save the Children", es: "Save the Children", de: "Save the Children", nl: "Save the Children" },

          { en: "UNICEF", es: "UNICEF", de: "UNICEF", nl: "UNICEF" },

          { en: "Red Cross", es: "Cruz Roja", de: "Rotes Kreuz", nl: "Rode Kruis" },

          { en: "WHO", es: "OMS", de: "WHO", nl: "WHO" }

        ],
        correctIndex: 1,
        explanation: {
          en: "UNICEF (United Nations International Children's Emergency Fund) was established by the UN General Assembly on December 11, 1946, initially to provide emergency food and healthcare to children in countries devastated by World War II. In 1953, it became a permanent part of the UN and was renamed the United Nations Children's Fund, though it kept the acronym UNICEF. The organization works in over 190 countries and territories and has received the Nobel Peace Prize in 1965.",
          es: "UNICEF (Fondo de las Naciones Unidas para la Infancia) fue establecido por la Asamblea General de la ONU el 11 de diciembre de 1946, inicialmente para proporcionar alimentos de emergencia y atención médica a niños en países devastados por la Segunda Guerra Mundial. En 1953, se convirtió en parte permanente de la ONU y fue renombrado Fondo de las Naciones Unidas para la Infancia, aunque mantuvo el acrónimo UNICEF. La organización trabaja en más de 190 países y territorios y recibió el Premio Nobel de la Paz en 1965.",
          de: "UNICEF (Internationaler Kinderhilfswerk der Vereinten Nationen) wurde am 11. Dezember 1946 von der UN-Generalversammlung gegründet, zunächst um Notnahrung und Gesundheitsversorgung für Kinder in vom Zweiten Weltkrieg verwüsteten Ländern bereitzustellen. 1953 wurde es ein fester Bestandteil der UN und in Kinderhilfswerk der Vereinten Nationen umbenannt, behielt aber das Akronym UNICEF. Die Organisation arbeitet in über 190 Ländern und Gebieten und erhielt 1965 den Friedensnobelpreis.",
          nl: "UNICEF (Internationaal Kinderfonds van de Verenigde Naties) werd opgericht door de Algemene Vergadering van de VN op 11 december 1946, aanvankelijk om noodvoedsel en gezondheidszorg te bieden aan kinderen in landen die verwoest waren door de Tweede Wereldoorlog. In 1953 werd het een permanent onderdeel van de VN en werd het hernoemd tot Kinderfonds van de Verenigde Naties, hoewel het het acroniem UNICEF behield. De organisatie werkt in meer dan 190 landen en gebieden en ontving de Nobelprijs voor de Vrede in 1965."
        }
      },
      {
        question: {
          en: "On December 11, 1816, which state became the 19th state to join the United States?",
          es: "El 11 de diciembre de 1816, ¿qué estado se convirtió en el decimonoveno estado en unirse a los Estados Unidos?",
          de: "Am 11. Dezember 1816 wurde welcher Staat der 19. Bundesstaat der Vereinigten Staaten?",
          nl: "Op 11 december 1816 werd welke staat de 19e staat die zich bij de Verenigde Staten aansloot?"
        },
        options: [

          { en: "Illinois", es: "Illinois", de: "Illinois", nl: "Illinois" },

          { en: "Indiana", es: "Indiana", de: "Indiana", nl: "Indiana" },

          { en: "Ohio", es: "Ohio", de: "Ohio", nl: "Ohio" },

          { en: "Kentucky", es: "Kentucky", de: "Kentucky", nl: "Kentucky" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Indiana became the 19th U.S. state on December 11, 1816. The state's name means 'Land of the Indians,' reflecting the numerous Native American tribes that inhabited the region. Indiana played a crucial role in the development of the American Midwest and became known for its agricultural production and manufacturing. The state capital is Indianapolis, which was founded in 1821. Indiana is also known as the 'Hoosier State,' though the origin of this nickname remains debated.",
          es: "Indiana se convirtió en el decimonoveno estado de EE.UU. el 11 de diciembre de 1816. El nombre del estado significa 'Tierra de los Indios', reflejando las numerosas tribus nativas americanas que habitaban la región. Indiana desempeñó un papel crucial en el desarrollo del Medio Oeste americano y se hizo conocido por su producción agrícola y manufacturera. La capital del estado es Indianápolis, fundada en 1821. Indiana también se conoce como el 'Estado Hoosier', aunque el origen de este apodo sigue siendo debatido.",
          de: "Indiana wurde am 11. Dezember 1816 der 19. US-Bundesstaat. Der Name des Staates bedeutet 'Land der Indianer' und spiegelt die zahlreichen Indianerstämme wider, die die Region bewohnten. Indiana spielte eine entscheidende Rolle in der Entwicklung des amerikanischen Mittleren Westens und wurde bekannt für seine landwirtschaftliche Produktion und Fertigung. Die Hauptstadt des Staates ist Indianapolis, das 1821 gegründet wurde. Indiana ist auch als 'Hoosier State' bekannt, obwohl der Ursprung dieses Spitznamens umstritten bleibt.",
          nl: "Indiana werd op 11 december 1816 de 19e Amerikaanse staat. De naam van de staat betekent 'Land van de Indianen', wat de vele inheemse Amerikaanse stammen weerspiegelt die de regio bewoonden. Indiana speelde een cruciale rol in de ontwikkeling van het Amerikaanse Middenwesten en werd bekend om zijn landbouwproductie en productie. De hoofdstad van de staat is Indianapolis, dat in 1821 werd gesticht. Indiana staat ook bekend als de 'Hoosier State', hoewel de oorsprong van deze bijnaam omstreden blijft."
        }
      },
      {
        question: {
          en: "Nobel Prize-winning author Aleksandr Solzhenitsyn was born on December 11, 1918. For which work did he win the Nobel Prize in Literature in 1970?",
          es: "El autor ganador del Premio Nobel Aleksandr Solzhenitsyn nació el 11 de diciembre de 1918. ¿Por qué obra ganó el Premio Nobel de Literatura en 1970?",
          de: "Der Literaturnobelpreisträger Aleksandr Solschenizyn wurde am 11. Dezember 1918 geboren. Für welches Werk gewann er 1970 den Nobelpreis für Literatur?",
          nl: "De Nobelprijswinnende auteur Aleksandr Solzjenitsyn werd geboren op 11 december 1918. Voor welk werk won hij de Nobelprijs voor Literatuur in 1970?"
        },
        options: [

          { en: "War and Peace", es: "Guerra y paz", de: "Krieg und Frieden", nl: "Oorlog en Vrede" },

          { en: "The Gulag Archipelago", es: "Archipiélago Gulag", de: "Der Archipel Gulag", nl: "De Goelag Archipel" },

          { en: "One Day in the Life of Ivan Denisovich", es: "Un día en la vida de Iván Denísovich", de: "Ein Tag im Leben des Iwan Denissowitsch", nl: "Een dag uit het leven van Ivan Denisovitsj" },

          { en: "For the ethical force with which he pursued the indispensable traditions of Russian literature", es: "Por la fuerza ética con la que persiguió las tradiciones indispensables de la literatura rusa", de: "Für die ethische Kraft, mit der er die unverzichtbaren Traditionen der russischen Literatur verfolgte", nl: "Voor de ethische kracht waarmee hij de onmisbare tradities van de Russische literatuur voortzette" }

        ],
        correctIndex: 3,
        explanation: {
          en: "Solzhenitsyn won the Nobel Prize in Literature in 1970 'for the ethical force with which he has pursued the indispensable traditions of Russian literature.' His works, including 'One Day in the Life of Ivan Denisovich' (1962) and 'The Gulag Archipelago' (1973), exposed the brutal reality of Soviet labor camps. Solzhenitsyn himself spent eight years in labor camps. He was expelled from the Soviet Union in 1974 and lived in exile until 1994, when he returned to Russia.",
          es: "Solzhenitsyn ganó el Premio Nobel de Literatura en 1970 'por la fuerza ética con la que ha perseguido las tradiciones indispensables de la literatura rusa'. Sus obras, incluyendo 'Un día en la vida de Iván Denísovich' (1962) y 'Archipiélago Gulag' (1973), expusieron la brutal realidad de los campos de trabajo soviéticos. El propio Solzhenitsyn pasó ocho años en campos de trabajo. Fue expulsado de la Unión Soviética en 1974 y vivió en el exilio hasta 1994, cuando regresó a Rusia.",
          de: "Solschenizyn gewann 1970 den Nobelpreis für Literatur 'für die ethische Kraft, mit der er die unverzichtbaren Traditionen der russischen Literatur verfolgt hat'. Seine Werke, darunter 'Ein Tag im Leben des Iwan Denissowitsch' (1962) und 'Der Archipel Gulag' (1973), enthüllten die brutale Realität sowjetischer Arbeitslager. Solschenizyn selbst verbrachte acht Jahre in Arbeitslagern. Er wurde 1974 aus der Sowjetunion ausgewiesen und lebte bis 1994 im Exil, als er nach Russland zurückkehrte.",
          nl: "Solzjenitsyn won de Nobelprijs voor Literatuur in 1970 'voor de ethische kracht waarmee hij de onmisbare tradities van de Russische literatuur heeft voortgezet'. Zijn werken, waaronder 'Een dag uit het leven van Ivan Denisovitsj' (1962) en 'De Goelag Archipel' (1973), legden de brute werkelijkheid van Sovjet-werkkampen bloot. Solzjenitsyn zelf verbleef acht jaar in werkkampen. Hij werd in 1974 uit de Sovjet-Unie verdreven en leefde in ballingschap tot 1994, toen hij terugkeerde naar Rusland."
        }
      },
      {
        question: {
          en: "UNICEF's logo features which symbol representing children and hope?",
          es: "El logotipo de UNICEF presenta qué símbolo que representa a los niños y la esperanza?",
          de: "Das UNICEF-Logo zeigt welches Symbol, das Kinder und Hoffnung repräsentiert?",
          nl: "Het logo van UNICEF bevat welk symbool dat kinderen en hoop vertegenwoordigt?"
        },
        options: [

          { en: "A dove", es: "Una paloma", de: "Eine Taube", nl: "Een duif" },

          { en: "A mother and child", es: "Una madre y un niño", de: "Eine Mutter und ein Kind", nl: "Een moeder en kind" },

          { en: "A globe with olive branches", es: "Un globo con ramas de olivo", de: "Ein Globus mit Olivenzweigen", nl: "Een globe met olijftakken" },

          { en: "A child's handprint", es: "La huella de la mano de un niño", de: "Ein Kinderhandabdruck", nl: "Een kinderhandafdruk" }

        ],
        correctIndex: 1,
        explanation: {
          en: "UNICEF's logo features a mother and child encircled by olive branches, symbolizing peace and protection. The design represents the organization's mission to protect children's rights and provide humanitarian aid. The logo has evolved over the years but has consistently maintained the mother-child imagery as its central element. UNICEF works to ensure children have access to healthcare, education, protection from violence and exploitation, and emergency relief in crisis situations.",
          es: "El logotipo de UNICEF presenta una madre y un niño rodeados por ramas de olivo, simbolizando paz y protección. El diseño representa la misión de la organización de proteger los derechos de los niños y proporcionar ayuda humanitaria. El logotipo ha evolucionado a lo largo de los años, pero ha mantenido consistentemente la imagen madre-hijo como su elemento central. UNICEF trabaja para asegurar que los niños tengan acceso a atención médica, educación, protección contra la violencia y la explotación, y ayuda de emergencia en situaciones de crisis.",
          de: "Das UNICEF-Logo zeigt eine Mutter und ein Kind, umgeben von Olivenzweigen, die Frieden und Schutz symbolisieren. Das Design repräsentiert die Mission der Organisation, Kinderrechte zu schützen und humanitäre Hilfe zu leisten. Das Logo hat sich im Laufe der Jahre weiterentwickelt, hat aber konsequent das Mutter-Kind-Bild als zentrales Element beibehalten. UNICEF arbeitet daran, sicherzustellen, dass Kinder Zugang zu Gesundheitsversorgung, Bildung, Schutz vor Gewalt und Ausbeutung sowie Nothilfe in Krisensituationen haben.",
          nl: "Het logo van UNICEF toont een moeder en kind omringd door olijftakken, die vrede en bescherming symboliseren. Het ontwerp vertegenwoordigt de missie van de organisatie om kinderrechten te beschermen en humanitaire hulp te verlenen. Het logo is door de jaren heen geëvolueerd, maar heeft consequent de moeder-kind beeldspraak als centraal element behouden. UNICEF werkt eraan te zorgen dat kinderen toegang hebben tot gezondheidszorg, onderwijs, bescherming tegen geweld en uitbuiting, en noodhulp in crisissituaties."
        }
      },
      {
        question: {
          en: "Aleksandr Solzhenitsyn's most famous work, 'The Gulag Archipelago,' exposed the Soviet system of what?",
          es: "La obra más famosa de Aleksandr Solzhenitsyn, 'Archipiélago Gulag', expuso el sistema soviético de qué?",
          de: "Aleksandr Solschenizyns berühmtestes Werk 'Der Archipel Gulag' enthüllte das sowjetische System von was?",
          nl: "Aleksandr Solzjenitsyns beroemdste werk, 'De Goelag Archipel', onthulde het Sovjet-systeem van wat?"
        },
        options: [

          { en: "Educational institutions", es: "Instituciones educativas", de: "Bildungseinrichtungen", nl: "Onderwijsinstellingen" },

          { en: "Labor camps and political repression", es: "Campos de trabajo y represión política", de: "Arbeitslager und politische Repression", nl: "Werkkampen en politieke onderdrukking" },

          { en: "Agricultural collectives", es: "Colectivos agrícolas", de: "Landwirtschaftliche Kollektive", nl: "Landbouwcollectieven" },

          { en: "Industrial factories", es: "Fábricas industriales", de: "Industriefabriken", nl: "Industriële fabrieken" }

        ],
        correctIndex: 1,
        explanation: {
          en: "'The Gulag Archipelago,' published between 1973 and 1978, is a three-volume work that exposed the Soviet forced labor camp system. Based on Solzhenitsyn's own experiences and testimonies from over 200 survivors, the book detailed the arrests, interrogations, transportation, forced labor, and executions under Stalin's regime. The title refers to the network of camps spread across the Soviet Union like islands in an archipelago. The work had a profound impact on understanding Soviet totalitarianism.",
          es: "'Archipiélago Gulag', publicado entre 1973 y 1978, es una obra de tres volúmenes que expuso el sistema de campos de trabajo forzado soviético. Basado en las propias experiencias de Solzhenitsyn y testimonios de más de 200 sobrevivientes, el libro detalló los arrestos, interrogatorios, transporte, trabajo forzado y ejecuciones bajo el régimen de Stalin. El título se refiere a la red de campos esparcidos por la Unión Soviética como islas en un archipiélago. La obra tuvo un profundo impacto en la comprensión del totalitarismo soviético.",
          de: "'Der Archipel Gulag', veröffentlicht zwischen 1973 und 1978, ist ein dreibändiges Werk, das das sowjetische Zwangsarbeitslager-System enthüllte. Basierend auf Solschenizyns eigenen Erfahrungen und Zeugnissen von über 200 Überlebenden, beschrieb das Buch detailliert Verhaftungen, Verhöre, Transport, Zwangsarbeit und Hinrichtungen unter Stalins Regime. Der Titel bezieht sich auf das Netzwerk von Lagern, das über die Sowjetunion verteilt war wie Inseln in einem Archipel. Das Werk hatte einen tiefgreifenden Einfluss auf das Verständnis des sowjetischen Totalitarismus.",
          nl: "'De Goelag Archipel', gepubliceerd tussen 1973 en 1978, is een driedelig werk dat het Sovjet-werkkampensysteem onthulde. Gebaseerd op Solzjenitsyns eigen ervaringen en getuigenissen van meer dan 200 overlevenden, beschreef het boek in detail de arrestaties, verhoren, transport, dwangarbeid en executies onder Stalins regime. De titel verwijst naar het netwerk van kampen verspreid over de Sovjet-Unie als eilanden in een archipel. Het werk had een diepgaande impact op het begrijpen van Sovjet-totalitarisme."
        }
      }
    ],

    day12: [ /* 5 questions */
      {
        question: {
          en: "On December 12, 1963, which African nation gained independence from British colonial rule?",
          es: "El 12 de diciembre de 1963, ¿qué nación africana obtuvo la independencia del dominio colonial británico?",
          de: "Am 12. Dezember 1963 erlangte welche afrikanische Nation die Unabhängigkeit von der britischen Kolonialherrschaft?",
          nl: "Op 12 december 1963 kreeg welke Afrikaanse natie onafhankelijkheid van de Britse koloniale overheersing?"
        },
        options: [

          { en: "Tanzania", es: "Tanzania", de: "Tansania", nl: "Tanzania" },

          { en: "Kenya", es: "Kenia", de: "Kenia", nl: "Kenia" },

          { en: "Uganda", es: "Uganda", de: "Uganda", nl: "Oeganda" },

          { en: "Nigeria", es: "Nigeria", de: "Nigeria", nl: "Nigeria" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Kenya gained independence from Britain on December 12, 1963, with Jomo Kenyatta becoming its first Prime Minister and later its first President. The struggle for independence was marked by the Mau Mau Uprising (1952-1960), a rebellion against British colonial rule. Kenya became a republic exactly one year after independence, on December 12, 1964. The country is named after Mount Kenya, Africa's second-highest mountain. Kenya has since become one of East Africa's economic and political leaders.",
          es: "Kenia obtuvo la independencia de Gran Bretaña el 12 de diciembre de 1963, con Jomo Kenyatta convirtiéndose en su primer Primer Ministro y más tarde su primer Presidente. La lucha por la independencia estuvo marcada por el Levantamiento Mau Mau (1952-1960), una rebelión contra el dominio colonial británico. Kenia se convirtió en república exactamente un año después de la independencia, el 12 de diciembre de 1964. El país lleva el nombre del Monte Kenia, la segunda montaña más alta de África. Desde entonces, Kenia se ha convertido en uno de los líderes económicos y políticos de África Oriental.",
          de: "Kenia erlangte am 12. Dezember 1963 die Unabhängigkeit von Großbritannien, wobei Jomo Kenyatta sein erster Premierminister und später sein erster Präsident wurde. Der Kampf um die Unabhängigkeit war geprägt vom Mau-Mau-Aufstand (1952-1960), einer Rebellion gegen die britische Kolonialherrschaft. Kenia wurde genau ein Jahr nach der Unabhängigkeit, am 12. Dezember 1964, eine Republik. Das Land ist nach dem Mount Kenya benannt, Afrikas zweithöchstem Berg. Kenia hat sich seitdem zu einem der wirtschaftlichen und politischen Führer Ostafrikas entwickelt.",
          nl: "Kenia kreeg op 12 december 1963 onafhankelijkheid van Groot-Brittannië, waarbij Jomo Kenyatta de eerste premier en later de eerste president werd. De strijd voor onafhankelijkheid werd gekenmerkt door de Mau Mau-opstand (1952-1960), een rebellie tegen de Britse koloniale overheersing. Kenia werd precies een jaar na de onafhankelijkheid, op 12 december 1964, een republiek. Het land is genoemd naar Mount Kenya, Afrika's op een na hoogste berg. Kenia is sindsdien uitgegroeid tot een van de economische en politieke leiders van Oost-Afrika."
        }
      },
      {
        question: {
          en: "On December 12, 1787, which state became the second state to ratify the U.S. Constitution?",
          es: "El 12 de diciembre de 1787, ¿qué estado se convirtió en el segundo estado en ratificar la Constitución de EE.UU.?",
          de: "Am 12. Dezember 1787 wurde welcher Staat der zweite Bundesstaat, der die US-Verfassung ratifizierte?",
          nl: "Op 12 december 1787 werd welke staat de tweede staat die de Amerikaanse Grondwet ratificeerde?"
        },
        options: [

          { en: "New Jersey", es: "Nueva Jersey", de: "New Jersey", nl: "New Jersey" },

          { en: "Pennsylvania", es: "Pensilvania", de: "Pennsylvania", nl: "Pennsylvania" },

          { en: "Delaware", es: "Delaware", de: "Delaware", nl: "Delaware" },

          { en: "Massachusetts", es: "Massachusetts", de: "Massachusetts", nl: "Massachusetts" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Pennsylvania became the second state to ratify the U.S. Constitution on December 12, 1787, just five days after Delaware became the first state. Pennsylvania's ratification was significant as it was one of the largest and most influential colonies. The state played a crucial role in the founding of the United States, hosting the Constitutional Convention in Philadelphia in 1787. Pennsylvania's vote for ratification was 46 to 23 at the state convention, reflecting some division but ultimately strong support.",
          es: "Pensilvania se convirtió en el segundo estado en ratificar la Constitución de EE.UU. el 12 de diciembre de 1787, solo cinco días después de que Delaware se convirtiera en el primer estado. La ratificación de Pensilvania fue significativa ya que era una de las colonias más grandes e influyentes. El estado desempeñó un papel crucial en la fundación de los Estados Unidos, albergando la Convención Constitucional en Filadelfia en 1787. El voto de Pensilvania para la ratificación fue de 46 a 23 en la convención estatal, reflejando cierta división pero en última instancia un fuerte apoyo.",
          de: "Pennsylvania wurde am 12. Dezember 1787 der zweite Bundesstaat, der die US-Verfassung ratifizierte, nur fünf Tage nachdem Delaware der erste Bundesstaat wurde. Pennsylvanias Ratifizierung war bedeutsam, da es eine der größten und einflussreichsten Kolonien war. Der Staat spielte eine entscheidende Rolle bei der Gründung der Vereinigten Staaten und beherbergte 1787 den Verfassungskonvent in Philadelphia. Pennsylvanias Abstimmung für die Ratifizierung war 46 zu 23 auf der Staatskonvention, was eine gewisse Spaltung, aber letztendlich starke Unterstützung widerspiegelte.",
          nl: "Pennsylvania werd op 12 december 1787 de tweede staat die de Amerikaanse Grondwet ratificeerde, slechts vijf dagen nadat Delaware de eerste staat werd. Pennsylvania's ratificatie was significant omdat het een van de grootste en meest invloedrijke koloniën was. De staat speelde een cruciale rol in de oprichting van de Verenigde Staten en organiseerde de Grondwetgevende Conventie in Philadelphia in 1787. Pennsylvania's stem voor ratificatie was 46 tegen 23 op de staatsconventie, wat enige verdeeldheid maar uiteindelijk sterke steun weerspiegelde."
        }
      },
      {
        question: {
          en: "Legendary singer Frank Sinatra was born on December 12, 1915. Which nickname was he famously known by?",
          es: "El legendario cantante Frank Sinatra nació el 12 de diciembre de 1915. ¿Por qué apodo era famosamente conocido?",
          de: "Der legendäre Sänger Frank Sinatra wurde am 12. Dezember 1915 geboren. Unter welchem Spitznamen war er berühmt bekannt?",
          nl: "De legendarische zanger Frank Sinatra werd geboren op 12 december 1915. Onder welke bijnaam stond hij beroemd bekend?"
        },
        options: [

          { en: "The King", es: "El Rey", de: "Der König", nl: "De Koning" },

          { en: "Ol' Blue Eyes", es: "Ol' Blue Eyes", de: "Ol' Blue Eyes", nl: "Ol' Blue Eyes" },

          { en: "The Boss", es: "El Jefe", de: "Der Boss", nl: "De Baas" },

          { en: "The Voice", es: "La Voz", de: "Die Stimme", nl: "De Stem" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Frank Sinatra was famously known as 'Ol' Blue Eyes' due to his striking blue eyes. He was also called 'The Chairman of the Board' and 'The Voice.' Sinatra's career spanned six decades, during which he sold over 150 million records worldwide. He won 11 Grammy Awards, including a Lifetime Achievement Award, and an Academy Award for Best Supporting Actor in 'From Here to Eternity' (1953). Sinatra was a member of the Rat Pack and became one of the best-selling music artists of all time.",
          es: "Frank Sinatra era famosamente conocido como 'Ol' Blue Eyes' debido a sus llamativos ojos azules. También fue llamado 'El Presidente del Consejo' y 'La Voz'. La carrera de Sinatra abarcó seis décadas, durante las cuales vendió más de 150 millones de discos en todo el mundo. Ganó 11 premios Grammy, incluido un premio a la trayectoria, y un premio de la Academia como Mejor Actor de Reparto en 'De aquí a la eternidad' (1953). Sinatra fue miembro del Rat Pack y se convirtió en uno de los artistas musicales más vendidos de todos los tiempos.",
          de: "Frank Sinatra war berühmt bekannt als 'Ol' Blue Eyes' aufgrund seiner markanten blauen Augen. Er wurde auch 'Der Vorstandsvorsitzende' und 'Die Stimme' genannt. Sinatras Karriere erstreckte sich über sechs Jahrzehnte, in denen er weltweit über 150 Millionen Platten verkaufte. Er gewann 11 Grammy Awards, einschließlich eines Lifetime Achievement Awards, und einen Oscar als Bester Nebendarsteller in 'Verdammt in alle Ewigkeit' (1953). Sinatra war Mitglied des Rat Pack und wurde einer der meistverkauften Musikkünstler aller Zeiten.",
          nl: "Frank Sinatra stond beroemd bekend als 'Ol' Blue Eyes' vanwege zijn opvallende blauwe ogen. Hij werd ook 'The Chairman of the Board' en 'The Voice' genoemd. Sinatra's carrière besloeg zes decennia, waarin hij wereldwijd meer dan 150 miljoen platen verkocht. Hij won 11 Grammy Awards, waaronder een Lifetime Achievement Award, en een Oscar voor Beste Mannelijke Bijrol in 'From Here to Eternity' (1953). Sinatra was lid van de Rat Pack en werd een van de best verkopende muziekartisten aller tijden."
        }
      },
      {
        question: {
          en: "Who was Kenya's first president after independence in 1963?",
          es: "¿Quién fue el primer presidente de Kenia después de la independencia en 1963?",
          de: "Wer war Kenias erster Präsident nach der Unabhängigkeit 1963?",
          nl: "Wie was Kenia's eerste president na de onafhankelijkheid in 1963?"
        },
        options: [

          { en: "Daniel arap Moi", es: "Daniel arap Moi", de: "Daniel arap Moi", nl: "Daniel arap Moi" },

          { en: "Jomo Kenyatta", es: "Jomo Kenyatta", de: "Jomo Kenyatta", nl: "Jomo Kenyatta" },

          { en: "Mwai Kibaki", es: "Mwai Kibaki", de: "Mwai Kibaki", nl: "Mwai Kibaki" },

          { en: "Uhuru Kenyatta", es: "Uhuru Kenyatta", de: "Uhuru Kenyatta", nl: "Uhuru Kenyatta" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Jomo Kenyatta became Kenya's first Prime Minister when the country gained independence on December 12, 1963, and became its first President when Kenya became a republic on December 12, 1964. Known as 'Mzee' (Swahili for 'elder'), Kenyatta had been imprisoned by the British during the Mau Mau Uprising. He served as president until his death in 1978. His son, Uhuru Kenyatta, later served as Kenya's fourth president from 2013 to 2022.",
          es: "Jomo Kenyatta se convirtió en el primer Primer Ministro de Kenia cuando el país obtuvo la independencia el 12 de diciembre de 1963, y se convirtió en su primer Presidente cuando Kenia se convirtió en república el 12 de diciembre de 1964. Conocido como 'Mzee' (swahili para 'anciano'), Kenyatta había sido encarcelado por los británicos durante el Levantamiento Mau Mau. Sirvió como presidente hasta su muerte en 1978. Su hijo, Uhuru Kenyatta, más tarde sirvió como cuarto presidente de Kenia de 2013 a 2022.",
          de: "Jomo Kenyatta wurde Kenias erster Premierminister, als das Land am 12. Dezember 1963 die Unabhängigkeit erlangte, und wurde sein erster Präsident, als Kenia am 12. Dezember 1964 eine Republik wurde. Bekannt als 'Mzee' (Swahili für 'Ältester'), war Kenyatta während des Mau-Mau-Aufstands von den Briten inhaftiert worden. Er diente bis zu seinem Tod 1978 als Präsident. Sein Sohn Uhuru Kenyatta diente später von 2013 bis 2022 als Kenias vierter Präsident.",
          nl: "Jomo Kenyatta werd Kenia's eerste premier toen het land op 12 december 1963 onafhankelijk werd, en werd de eerste president toen Kenia op 12 december 1964 een republiek werd. Bekend als 'Mzee' (Swahili voor 'oudste'), was Kenyatta tijdens de Mau Mau-opstand door de Britten gevangen gezet. Hij diende als president tot zijn dood in 1978. Zijn zoon, Uhuru Kenyatta, diende later als Kenia's vierde president van 2013 tot 2022."
        }
      },
      {
        question: {
          en: "Frank Sinatra won an Academy Award for Best Supporting Actor for which 1953 film?",
          es: "Frank Sinatra ganó un Premio de la Academia como Mejor Actor de Reparto por qué película de 1953?",
          de: "Frank Sinatra gewann einen Oscar als Bester Nebendarsteller für welchen Film von 1953?",
          nl: "Frank Sinatra won een Oscar voor Beste Mannelijke Bijrol voor welke film uit 1953?"
        },
        options: [

          { en: "The Man with the Golden Arm", es: "El hombre del brazo de oro", de: "Der Mann mit dem goldenen Arm", nl: "The Man with the Golden Arm" },

          { en: "From Here to Eternity", es: "De aquí a la eternidad", de: "Verdammt in alle Ewigkeit", nl: "From Here to Eternity" },

          { en: "Suddenly", es: "Suddenly", de: "Suddenly", nl: "Suddenly" },

          { en: "Ocean's 11", es: "La cuadrilla de los once", de: "Frankie und seine Spießgesellen", nl: "Ocean's 11" }

        ],
        correctIndex: 1,
        explanation: {
          en: "'From Here to Eternity' (1953) revitalized Sinatra's career and won him the Academy Award for Best Supporting Actor for his role as Private Angelo Maggio. The film, set in Hawaii just before the Pearl Harbor attack, won eight Oscars in total, including Best Picture. Sinatra's performance was widely praised and marked his transition from a singer to a serious dramatic actor. He famously lobbied hard for the role, reportedly accepting a significantly reduced salary of $8,000 to secure it.",
          es: "'De aquí a la eternidad' (1953) revitalizó la carrera de Sinatra y le valió el Premio de la Academia como Mejor Actor de Reparto por su papel como el soldado Angelo Maggio. La película, ambientada en Hawái justo antes del ataque a Pearl Harbor, ganó ocho Oscars en total, incluido Mejor Película. La actuación de Sinatra fue ampliamente elogiada y marcó su transición de cantante a actor dramático serio. Famosamente presionó con fuerza por el papel, según se informa aceptando un salario significativamente reducido de $8,000 para asegurarlo.",
          de: "'Verdammt in alle Ewigkeit' (1953) belebte Sinatras Karriere neu und brachte ihm den Oscar als Bester Nebendarsteller für seine Rolle als Private Angelo Maggio ein. Der Film, der kurz vor dem Angriff auf Pearl Harbor in Hawaii spielt, gewann insgesamt acht Oscars, darunter Bester Film. Sinatras Leistung wurde weithin gelobt und markierte seinen Übergang vom Sänger zum ernsthaften Charakterdarsteller. Er setzte sich berühmt intensiv für die Rolle ein und akzeptierte Berichten zufolge ein deutlich reduziertes Gehalt von 8.000 Dollar, um sie zu sichern.",
          nl: "'From Here to Eternity' (1953) gaf Sinatra's carrière nieuw leven en leverde hem de Oscar voor Beste Mannelijke Bijrol op voor zijn rol als soldaat Angelo Maggio. De film, gesitueerd in Hawaï net voor de aanval op Pearl Harbor, won in totaal acht Oscars, waaronder Beste Film. Sinatra's optreden werd breed geprezen en markeerde zijn overgang van zanger naar serieuze dramatische acteur. Hij lobbyde beroemd hard voor de rol en accepteerde naar verluidt een aanzienlijk verlaagd salaris van $8.000 om het te krijgen."
        }
      }
    ],

    day13: [ /* 5 questions */
      {
        question: {
          en: "On December 13, 1642, Dutch explorer Abel Tasman became the first European to sight which country?",
          es: "El 13 de diciembre de 1642, el explorador holandés Abel Tasman se convirtió en el primer europeo en avistar qué país?",
          de: "Am 13. Dezember 1642 wurde der niederländische Entdecker Abel Tasman der erste Europäer, der welches Land sichtete?",
          nl: "Op 13 december 1642 werd de Nederlandse ontdekkingsreiziger Abel Tasman de eerste Europeaan die welk land zag?"
        },
        options: [

          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },

          { en: "New Zealand", es: "Nueva Zelanda", de: "Neuseeland", nl: "Nieuw-Zeeland" },

          { en: "Fiji", es: "Fiyi", de: "Fidschi", nl: "Fiji" },

          { en: "Papua New Guinea", es: "Papúa Nueva Guinea", de: "Papua-Neuguinea", nl: "Papoea-Nieuw-Guinea" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Abel Tasman sighted New Zealand on December 13, 1642, becoming the first European to do so. He named it 'Staten Landt,' believing it was connected to South America. Later it was renamed 'Nieuw Zeeland' after the Dutch province of Zeeland. Tasman's expedition also discovered Tasmania (initially named Van Diemen's Land after his sponsor) and Fiji. Despite his significant discoveries, Tasman never actually landed on New Zealand's mainland, and over 125 years passed before Captain James Cook became the first European to set foot there in 1769.",
          es: "Abel Tasman avistó Nueva Zelanda el 13 de diciembre de 1642, convirtiéndose en el primer europeo en hacerlo. Lo nombró 'Staten Landt', creyendo que estaba conectado a América del Sur. Más tarde fue renombrado 'Nieuw Zeeland' en honor a la provincia holandesa de Zelanda. La expedición de Tasman también descubrió Tasmania (inicialmente llamada Tierra de Van Diemen en honor a su patrocinador) y Fiyi. A pesar de sus importantes descubrimientos, Tasman nunca desembarcó realmente en el continente de Nueva Zelanda, y pasaron más de 125 años antes de que el Capitán James Cook se convirtiera en el primer europeo en poner pie allí en 1769.",
          de: "Abel Tasman sichtete Neuseeland am 13. Dezember 1642 und wurde damit der erste Europäer, der dies tat. Er nannte es 'Staten Landt' und glaubte, es sei mit Südamerika verbunden. Später wurde es nach der niederländischen Provinz Zeeland in 'Nieuw Zeeland' umbenannt. Tasmans Expedition entdeckte auch Tasmanien (ursprünglich Van-Diemen-Land nach seinem Sponsor benannt) und Fidschi. Trotz seiner bedeutenden Entdeckungen landete Tasman nie auf Neuseelands Festland, und über 125 Jahre vergingen, bevor Kapitän James Cook 1769 als erster Europäer dort seinen Fuß setzte.",
          nl: "Abel Tasman zag Nieuw-Zeeland op 13 december 1642 en werd daarmee de eerste Europeaan die dit deed. Hij noemde het 'Staten Landt', in de overtuiging dat het verbonden was met Zuid-Amerika. Later werd het hernoemd naar 'Nieuw Zeeland' naar de Nederlandse provincie Zeeland. Tasmans expeditie ontdekte ook Tasmanië (aanvankelijk Van Diemen's Land genoemd naar zijn sponsor) en Fiji. Ondanks zijn belangrijke ontdekkingen landde Tasman nooit daadwerkelijk op het vasteland van Nieuw-Zeeland, en er verstreken meer dan 125 jaar voordat Kapitein James Cook in 1769 als eerste Europeaan voet aan wal zette."
        }
      },
      {
        question: {
          en: "On December 13, 1974, Malta officially became a republic. Which sea is Malta located in?",
          es: "El 13 de diciembre de 1974, Malta se convirtió oficialmente en una república. ¿En qué mar se encuentra Malta?",
          de: "Am 13. Dezember 1974 wurde Malta offiziell eine Republik. In welchem Meer liegt Malta?",
          nl: "Op 13 december 1974 werd Malta officieel een republiek. In welke zee ligt Malta?"
        },
        options: [

          { en: "Aegean Sea", es: "Mar Egeo", de: "Ägäisches Meer", nl: "Egeïsche Zee" },

          { en: "Adriatic Sea", es: "Mar Adriático", de: "Adriatisches Meer", nl: "Adriatische Zee" },

          { en: "Mediterranean Sea", es: "Mar Mediterráneo", de: "Mittelmeer", nl: "Middellandse Zee" },

          { en: "Tyrrhenian Sea", es: "Mar Tirreno", de: "Tyrrhenisches Meer", nl: "Tyrrheense Zee" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Malta is located in the Mediterranean Sea, south of Sicily and north of Libya. On December 13, 1974, Malta became a republic within the Commonwealth, replacing Queen Elizabeth II as head of state with a president. The archipelago consists of three inhabited islands: Malta, Gozo, and Comino. Malta has a strategic location and has been ruled by various powers throughout history, including the Phoenicians, Romans, Arabs, Knights of St. John, French, and British. It gained independence from Britain in 1964 and became a republic ten years later.",
          es: "Malta está ubicada en el Mar Mediterráneo, al sur de Sicilia y al norte de Libia. El 13 de diciembre de 1974, Malta se convirtió en una república dentro de la Commonwealth, reemplazando a la Reina Isabel II como jefa de estado con un presidente. El archipiélago consta de tres islas habitadas: Malta, Gozo y Comino. Malta tiene una ubicación estratégica y ha sido gobernada por varias potencias a lo largo de la historia, incluidos los fenicios, romanos, árabes, Caballeros de San Juan, franceses y británicos. Obtuvo la independencia de Gran Bretaña en 1964 y se convirtió en república diez años después.",
          de: "Malta liegt im Mittelmeer, südlich von Sizilien und nördlich von Libyen. Am 13. Dezember 1974 wurde Malta eine Republik innerhalb des Commonwealth und ersetzte Königin Elizabeth II. als Staatsoberhaupt durch einen Präsidenten. Der Archipel besteht aus drei bewohnten Inseln: Malta, Gozo und Comino. Malta hat eine strategische Lage und wurde im Laufe der Geschichte von verschiedenen Mächten regiert, darunter Phönizier, Römer, Araber, Johanniter, Franzosen und Briten. Es erlangte 1964 die Unabhängigkeit von Großbritannien und wurde zehn Jahre später eine Republik.",
          nl: "Malta ligt in de Middellandse Zee, ten zuiden van Sicilië en ten noorden van Libië. Op 13 december 1974 werd Malta een republiek binnen het Gemenebest en verving koningin Elizabeth II als staatshoofd door een president. De archipel bestaat uit drie bewoonde eilanden: Malta, Gozo en Comino. Malta heeft een strategische ligging en is door de geschiedenis heen door verschillende machten geregeerd, waaronder de Feniciërs, Romeinen, Arabieren, Ridders van Sint-Jan, Fransen en Britten. Het werd in 1964 onafhankelijk van Groot-Brittannië en werd tien jaar later een republiek."
        }
      },
      {
        question: {
          en: "Pop superstar Taylor Swift was born on December 13, 1989. Which album won her the Grammy for Album of the Year in 2010?",
          es: "La superestrella del pop Taylor Swift nació el 13 de diciembre de 1989. ¿Qué álbum le valió el Grammy al Álbum del Año en 2010?",
          de: "Popstar Taylor Swift wurde am 13. Dezember 1989 geboren. Welches Album gewann ihr 2010 den Grammy für Album des Jahres?",
          nl: "Popster Taylor Swift werd geboren op 13 december 1989. Welk album leverde haar de Grammy voor Album van het Jaar op in 2010?"
        },
        options: [

          { en: "Taylor Swift", es: "Taylor Swift", de: "Taylor Swift", nl: "Taylor Swift" },

          { en: "Fearless", es: "Fearless", de: "Fearless", nl: "Fearless" },

          { en: "Speak Now", es: "Speak Now", de: "Speak Now", nl: "Speak Now" },

          { en: "Red", es: "Red", de: "Red", nl: "Red" }

        ],
        correctIndex: 1,
        explanation: {
          en: "'Fearless' won Taylor Swift the Grammy Award for Album of the Year at the 52nd Grammy Awards in 2010, making her the youngest artist at the time (20 years old) to win the award. The album included hits like 'Love Story' and 'You Belong with Me' and sold over 12 million copies worldwide. Swift has since won the Album of the Year Grammy four times total (a record), including for '1989' (2016), 'Folklore' (2021), and 'Midnights' (2024), making her the only artist to achieve this feat.",
          es: "'Fearless' le valió a Taylor Swift el Premio Grammy al Álbum del Año en la 52ª entrega de los Grammy en 2010, convirtiéndola en la artista más joven en ese momento (20 años) en ganar el premio. El álbum incluyó éxitos como 'Love Story' y 'You Belong with Me' y vendió más de 12 millones de copias en todo el mundo. Swift ha ganado el Grammy al Álbum del Año cuatro veces en total (un récord), incluido '1989' (2016), 'Folklore' (2021) y 'Midnights' (2024), convirtiéndola en la única artista en lograr esta hazaña.",
          de: "'Fearless' brachte Taylor Swift bei den 52. Grammy Awards 2010 den Grammy Award für Album des Jahres ein und machte sie zur damals jüngsten Künstlerin (20 Jahre alt), die den Preis gewann. Das Album enthielt Hits wie 'Love Story' und 'You Belong with Me' und verkaufte sich weltweit über 12 Millionen Mal. Swift hat seitdem insgesamt viermal den Grammy für Album des Jahres gewonnen (ein Rekord), darunter für '1989' (2016), 'Folklore' (2021) und 'Midnights' (2024), was sie zur einzigen Künstlerin macht, die dies erreicht hat.",
          nl: "'Fearless' leverde Taylor Swift de Grammy Award voor Album van het Jaar op bij de 52e Grammy Awards in 2010, waarmee ze destijds de jongste artiest (20 jaar oud) was die de prijs won. Het album bevatte hits als 'Love Story' en 'You Belong with Me' en verkocht wereldwijd meer dan 12 miljoen exemplaren. Swift heeft sindsdien in totaal vier keer de Grammy voor Album van het Jaar gewonnen (een record), waaronder voor '1989' (2016), 'Folklore' (2021) en 'Midnights' (2024), waarmee ze de enige artiest is die dit heeft bereikt."
        }
      },
      {
        question: {
          en: "What is the capital city of Malta?",
          es: "¿Cuál es la capital de Malta?",
          de: "Was ist die Hauptstadt von Malta?",
          nl: "Wat is de hoofdstad van Malta?"
        },
        options: [

          { en: "Mdina", es: "Mdina", de: "Mdina", nl: "Mdina" },

          { en: "Valletta", es: "La Valeta", de: "Valletta", nl: "Valletta" },

          { en: "Sliema", es: "Sliema", de: "Sliema", nl: "Sliema" },

          { en: "Birkirkara", es: "Birkirkara", de: "Birkirkara", nl: "Birkirkara" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Valletta is the capital city of Malta, founded in 1566 by the Knights of St. John. Named after Grand Master Jean de Valette, who defended Malta during the Great Siege of 1565, the city is one of the most concentrated historic areas in the world. Valletta's entire city is a UNESCO World Heritage Site, featuring Baroque architecture, fortifications, and St. John's Co-Cathedral. With a population of just around 6,000, it's one of Europe's smallest capitals. Mdina was Malta's former capital until 1530.",
          es: "La Valeta es la capital de Malta, fundada en 1566 por los Caballeros de San Juan. Nombrada en honor al Gran Maestre Jean de Valette, quien defendió Malta durante el Gran Asedio de 1565, la ciudad es una de las áreas históricas más concentradas del mundo. Toda la ciudad de La Valeta es Patrimonio de la Humanidad por la UNESCO, con arquitectura barroca, fortificaciones y la Co-Catedral de San Juan. Con una población de solo alrededor de 6,000 habitantes, es una de las capitales más pequeñas de Europa. Mdina fue la antigua capital de Malta hasta 1530.",
          de: "Valletta ist die Hauptstadt von Malta, gegründet 1566 von den Johannitern. Benannt nach Großmeister Jean de Valette, der Malta während der Großen Belagerung von 1565 verteidigte, ist die Stadt eines der am stärksten konzentrierten historischen Gebiete der Welt. Vallettas gesamte Stadt ist UNESCO-Weltkulturerbe mit barocker Architektur, Befestigungsanlagen und der Ko-Kathedrale des Heiligen Johannes. Mit einer Bevölkerung von nur etwa 6.000 ist sie eine der kleinsten Hauptstädte Europas. Mdina war bis 1530 Maltas frühere Hauptstadt.",
          nl: "Valletta is de hoofdstad van Malta, gesticht in 1566 door de Ridders van Sint-Jan. Genoemd naar Grootmeester Jean de Valette, die Malta verdedigde tijdens het Grote Beleg van 1565, is de stad een van de meest geconcentreerde historische gebieden ter wereld. De gehele stad Valletta is UNESCO-werelderfgoed met barokke architectuur, vestingwerken en de Sint-Janscokathedraal. Met een bevolking van slechts ongeveer 6.000 is het een van Europa's kleinste hoofdsteden. Mdina was tot 1530 de voormalige hoofdstad van Malta."
        }
      },
      {
        question: {
          en: "Which Taylor Swift song begins with the lyrics 'You were in college, working part-time waiting tables'?",
          es: "¿Qué canción de Taylor Swift comienza con la letra 'You were in college, working part-time waiting tables'?",
          de: "Welcher Song von Taylor Swift beginnt mit dem Text 'You were in college, working part-time waiting tables'?",
          nl: "Welk nummer van Taylor Swift begint met de tekst 'You were in college, working part-time waiting tables'?"
        },
        options: [
          { en: "Mine", es: "Mine", de: "Mine", nl: "Mine" },
          { en: "White Horse", es: "White Horse", de: "White Horse", nl: "White Horse" },
          { en: "Love Story", es: "Love Story", de: "Love Story", nl: "Love Story" },
          { en: "Fifteen", es: "Fifteen", de: "Fifteen", nl: "Fifteen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Love Story' from the 'Fearless' album (2008) begins with these lyrics. The song became one of Swift's most iconic tracks, inspired by Shakespeare's 'Romeo and Juliet' but with a happy ending. It was her first top 5 hit on the Billboard Hot 100 and has been streamed over 1 billion times on Spotify. Swift re-recorded the song in 2021 as 'Love Story (Taylor's Version)' as part of her effort to own her master recordings. The song's music video was filmed at a castle and has over 600 million views on YouTube.",
          es: "'Love Story' del álbum 'Fearless' (2008) comienza con esta letra. La canción se convirtió en una de las pistas más icónicas de Swift, inspirada en 'Romeo y Julieta' de Shakespeare pero con un final feliz. Fue su primer éxito top 5 en el Billboard Hot 100 y ha sido reproducida más de mil millones de veces en Spotify. Swift regrabó la canción en 2021 como 'Love Story (Taylor's Version)' como parte de su esfuerzo por poseer sus grabaciones maestras. El video musical de la canción fue filmado en un castillo y tiene más de 600 millones de vistas en YouTube.",
          de: "'Love Story' vom Album 'Fearless' (2008) beginnt mit diesem Text. Der Song wurde zu einem von Swifts ikonischsten Tracks, inspiriert von Shakespeares 'Romeo und Julia', aber mit einem Happy End. Es war ihr erster Top-5-Hit in den Billboard Hot 100 und wurde über 1 Milliarde Mal auf Spotify gestreamt. Swift nahm den Song 2021 als 'Love Story (Taylor's Version)' neu auf, als Teil ihrer Bemühungen, ihre Masteraufnahmen zu besitzen. Das Musikvideo wurde auf einem Schloss gedreht und hat über 600 Millionen Aufrufe auf YouTube.",
          nl: "'Love Story' van het album 'Fearless' (2008) begint met deze tekst. Het nummer werd een van Swifts meest iconische tracks, geïnspireerd door Shakespeare's 'Romeo en Julia' maar met een happy end. Het was haar eerste top 5-hit in de Billboard Hot 100 en is meer dan 1 miljard keer gestreamd op Spotify. Swift nam het nummer in 2021 opnieuw op als 'Love Story (Taylor's Version)' als onderdeel van haar inspanning om haar masteropnames te bezitten. De muziekvideo werd gefilmd op een kasteel en heeft meer dan 600 miljoen views op YouTube."
        }
      }
    ],

    day14: [ /* 5 questions */
      {
        question: {
          en: "On December 14, 1911, Norwegian explorer Roald Amundsen became the first person to reach which geographic location?",
          es: "El 14 de diciembre de 1911, el explorador noruego Roald Amundsen se convirtió en la primera persona en llegar a qué ubicación geográfica?",
          de: "Am 14. Dezember 1911 wurde der norwegische Entdecker Roald Amundsen die erste Person, die welchen geografischen Ort erreichte?",
          nl: "Op 14 december 1911 werd de Noorse ontdekkingsreiziger Roald Amundsen de eerste persoon die welke geografische locatie bereikte?"
        },
        options: [

          { en: "North Pole", es: "Polo Norte", de: "Nordpol", nl: "Noordpool" },

          { en: "South Pole", es: "Polo Sur", de: "Südpol", nl: "Zuidpool" },

          { en: "Mount Everest Summit", es: "Cumbre del Monte Everest", de: "Mount-Everest-Gipfel", nl: "Mount Everest Top" },

          { en: "Mariana Trench", es: "Fosa de las Marianas", de: "Marianengraben", nl: "Marianentrog" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Roald Amundsen and his team reached the South Pole on December 14, 1911, beating British explorer Robert Falcon Scott by 33 days. Amundsen's success was attributed to careful planning, using sled dogs (versus Scott's motor sledges and ponies), and experience with polar travel. The expedition planted a Norwegian flag and left a tent with a letter for Scott. Tragically, Scott and his entire party perished on their return journey. Amundsen had previously sailed through the Northwest Passage (1903-1906) and would later fly over the North Pole in an airship (1926).",
          es: "Roald Amundsen y su equipo alcanzaron el Polo Sur el 14 de diciembre de 1911, superando al explorador británico Robert Falcon Scott por 33 días. El éxito de Amundsen se atribuyó a una planificación cuidadosa, el uso de perros de trineo (en lugar de los trineos motorizados y ponis de Scott) y experiencia en viajes polares. La expedición plantó una bandera noruega y dejó una tienda con una carta para Scott. Trágicamente, Scott y todo su grupo perecieron en su viaje de regreso. Amundsen había navegado previamente por el Paso del Noroeste (1903-1906) y más tarde volaría sobre el Polo Norte en un dirigible (1926).",
          de: "Roald Amundsen und sein Team erreichten am 14. Dezember 1911 den Südpol und schlugen den britischen Entdecker Robert Falcon Scott um 33 Tage. Amundsens Erfolg wurde einer sorgfältigen Planung, der Verwendung von Schlittenhunden (im Gegensatz zu Scotts Motorschlitten und Ponys) und Erfahrung mit Polarreisen zugeschrieben. Die Expedition pflanzte eine norwegische Flagge und hinterließ ein Zelt mit einem Brief für Scott. Tragischerweise kamen Scott und seine gesamte Gruppe auf ihrer Rückreise um. Amundsen war zuvor durch die Nordwestpassage gesegelt (1903-1906) und flog später mit einem Luftschiff über den Nordpol (1926).",
          nl: "Roald Amundsen en zijn team bereikten de Zuidpool op 14 december 1911, waarmee ze de Britse ontdekkingsreiziger Robert Falcon Scott met 33 dagen versloegen. Amundsens succes werd toegeschreven aan zorgvuldige planning, het gebruik van sledehonden (versus Scotts motorsleeën en pony's) en ervaring met poolreizen. De expeditie plantte een Noorse vlag en liet een tent achter met een brief voor Scott. Tragisch genoeg kwamen Scott en zijn hele groep om tijdens hun terugreis. Amundsen was eerder door de Noordwestelijke Doorvaart gevaren (1903-1906) en zou later over de Noordpool vliegen in een luchtschip (1926)."
        }
      },
      {
        question: {
          en: "On December 14, 1819, which state became the 22nd state to join the United States?",
          es: "El 14 de diciembre de 1819, ¿qué estado se convirtió en el estado número 22 en unirse a los Estados Unidos?",
          de: "Am 14. Dezember 1819 wurde welcher Staat der 22. Bundesstaat, der den Vereinigten Staaten beitrat?",
          nl: "Op 14 december 1819 werd welke staat de 22e staat die zich bij de Verenigde Staten aansloot?"
        },
        options: [

          { en: "Mississippi", es: "Misisipi", de: "Mississippi", nl: "Mississippi" },

          { en: "Alabama", es: "Alabama", de: "Alabama", nl: "Alabama" },

          { en: "Tennessee", es: "Tennessee", de: "Tennessee", nl: "Tennessee" },

          { en: "Louisiana", es: "Luisiana", de: "Louisiana", nl: "Louisiana" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Alabama became the 22nd state to join the Union on December 14, 1819. The state was carved from the Mississippi Territory and entered as a slave state, contributing to the growing sectional tensions that would lead to the Civil War. Alabama's name comes from the Alabama people, a Native American tribe. The capital, Montgomery, would later become the first capital of the Confederate States of America in 1861. Alabama played a crucial role in the Civil Rights Movement of the 1960s, with key events occurring in Montgomery, Birmingham, and Selma.",
          es: "Alabama se convirtió en el estado número 22 en unirse a la Unión el 14 de diciembre de 1819. El estado se creó del Territorio de Misisipi y entró como un estado esclavista, contribuyendo a las crecientes tensiones seccionales que llevarían a la Guerra Civil. El nombre de Alabama proviene del pueblo Alabama, una tribu nativa americana. La capital, Montgomery, más tarde se convertiría en la primera capital de los Estados Confederados de América en 1861. Alabama jugó un papel crucial en el Movimiento de Derechos Civiles de la década de 1960, con eventos clave ocurriendo en Montgomery, Birmingham y Selma.",
          de: "Alabama wurde am 14. Dezember 1819 der 22. Bundesstaat, der der Union beitrat. Der Staat wurde aus dem Mississippi-Territorium geschnitzt und trat als Sklavenstaat bei, was zu den wachsenden sektionalen Spannungen beitrug, die zum Bürgerkrieg führen würden. Alabamas Name stammt vom Volk der Alabama, einem Indianerstamm. Die Hauptstadt Montgomery wurde später 1861 die erste Hauptstadt der Konföderierten Staaten von Amerika. Alabama spielte eine entscheidende Rolle in der Bürgerrechtsbewegung der 1960er Jahre, wobei wichtige Ereignisse in Montgomery, Birmingham und Selma stattfanden.",
          nl: "Alabama werd op 14 december 1819 de 22e staat die zich bij de Unie aansloot. De staat werd uit het Mississippi-territorium gesneden en trad toe als slavenstaat, wat bijdroeg aan de groeiende regionale spanningen die tot de Burgeroorlog zouden leiden. Alabama's naam komt van het Alabama-volk, een inheemse Amerikaanse stam. De hoofdstad Montgomery zou later in 1861 de eerste hoofdstad van de Geconfedereerde Staten van Amerika worden. Alabama speelde een cruciale rol in de Burgerrechtenbeweging van de jaren 1960, waarbij belangrijke gebeurtenissen plaatsvonden in Montgomery, Birmingham en Selma."
        }
      },
      {
        question: {
          en: "French astrologer and physician Nostradamus was born on December 14, 1503. What was the name of his famous book of prophecies?",
          es: "El astrólogo y médico francés Nostradamus nació el 14 de diciembre de 1503. ¿Cuál era el nombre de su famoso libro de profecías?",
          de: "Der französische Astrologe und Arzt Nostradamus wurde am 14. Dezember 1503 geboren. Wie hieß sein berühmtes Buch der Prophezeiungen?",
          nl: "De Franse astroloog en arts Nostradamus werd geboren op 14 december 1503. Wat was de naam van zijn beroemde boek met profetieën?"
        },
        options: [

          { en: "The Centuries", es: "Las Centurias", de: "Die Jahrhunderte", nl: "De Eeuwen" },

          { en: "Les Prophéties", es: "Les Prophéties", de: "Les Prophéties", nl: "Les Prophéties" },

          { en: "Almanach", es: "Almanaque", de: "Almanach", nl: "Almanak" },

          { en: "De Divina", es: "De Divina", de: "De Divina", nl: "De Divina" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Nostradamus published 'Les Prophéties' (The Prophecies) in 1555, a collection of 942 poetic quatrains allegedly predicting future events. The work is divided into sections called 'Centuries,' each containing 100 prophecies (though some are incomplete). Written in cryptic, symbolic language mixing French, Latin, Greek, and Italian, the prophecies have been interpreted as predicting everything from the French Revolution to World War II. Skeptics point out their vague nature allows for retrofitting to any event. Nostradamus worked as a physician during plague outbreaks before becoming a full-time astrologer.",
          es: "Nostradamus publicó 'Les Prophéties' (Las Profecías) en 1555, una colección de 942 cuartetas poéticas que supuestamente predicen eventos futuros. La obra se divide en secciones llamadas 'Centurias', cada una conteniendo 100 profecías (aunque algunas están incompletas). Escritas en lenguaje críptico y simbólico mezclando francés, latín, griego e italiano, las profecías han sido interpretadas como prediciendo todo, desde la Revolución Francesa hasta la Segunda Guerra Mundial. Los escépticos señalan que su naturaleza vaga permite adaptarlas a cualquier evento. Nostradamus trabajó como médico durante brotes de peste antes de convertirse en astrólogo a tiempo completo.",
          de: "Nostradamus veröffentlichte 1555 'Les Prophéties' (Die Prophezeiungen), eine Sammlung von 942 poetischen Vierzeilern, die angeblich zukünftige Ereignisse vorhersagen. Das Werk ist in Abschnitte unterteilt, die 'Jahrhunderte' genannt werden und jeweils 100 Prophezeiungen enthalten (obwohl einige unvollständig sind). In kryptischer, symbolischer Sprache geschrieben, die Französisch, Latein, Griechisch und Italienisch mischt, wurden die Prophezeiungen als Vorhersage von allem von der Französischen Revolution bis zum Zweiten Weltkrieg interpretiert. Skeptiker weisen auf ihre vage Natur hin, die eine Anpassung an jedes Ereignis ermöglicht. Nostradamus arbeitete als Arzt während Pestausbrüchen, bevor er Vollzeit-Astrologe wurde.",
          nl: "Nostradamus publiceerde 'Les Prophéties' (De Profetieën) in 1555, een verzameling van 942 poëtische kwatrijnen die naar verluidt toekomstige gebeurtenissen voorspellen. Het werk is verdeeld in secties die 'Eeuwen' worden genoemd, elk met 100 profetieën (hoewel sommige onvolledig zijn). Geschreven in cryptische, symbolische taal die Frans, Latijn, Grieks en Italiaans mengt, zijn de profetieën geïnterpreteerd als voorspellend van alles van de Franse Revolutie tot de Tweede Wereldoorlog. Sceptici wijzen op hun vage karakter dat aanpassing aan elke gebeurtenis mogelijk maakt. Nostradamus werkte als arts tijdens pest-uitbraken voordat hij fulltime astroloog werd."
        }
      },
      {
        question: {
          en: "How many people were in Roald Amundsen's party when they reached the South Pole?",
          es: "¿Cuántas personas había en el grupo de Roald Amundsen cuando llegaron al Polo Sur?",
          de: "Wie viele Personen waren in Roald Amundsens Gruppe, als sie den Südpol erreichten?",
          nl: "Hoeveel mensen waren er in de groep van Roald Amundsen toen ze de Zuidpool bereikten?"
        },
        options: [

          { en: "3", es: "3", de: "3", nl: "3" },

          { en: "5", es: "5", de: "5", nl: "5" },

          { en: "7", es: "7", de: "7", nl: "7" },

          { en: "9", es: "9", de: "9", nl: "9" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Five men reached the South Pole with Amundsen: Roald Amundsen (leader), Olav Bjaaland, Helmer Hanssen, Sverre Hassel, and Oscar Wisting. They departed from their base camp on October 19, 1911, with four sledges and 52 dogs. The journey to the pole took 57 days. Along the way, they slaughtered some dogs for food. All five men and 11 dogs survived the return journey, arriving back at base on January 25, 1912. The expedition's success was marked by meticulous planning, physical fitness, and superior equipment and techniques learned from the Inuit people.",
          es: "Cinco hombres alcanzaron el Polo Sur con Amundsen: Roald Amundsen (líder), Olav Bjaaland, Helmer Hanssen, Sverre Hassel y Oscar Wisting. Partieron de su campamento base el 19 de octubre de 1911, con cuatro trineos y 52 perros. El viaje al polo tomó 57 días. En el camino, sacrificaron algunos perros para alimentarse. Los cinco hombres y 11 perros sobrevivieron el viaje de regreso, llegando de vuelta a la base el 25 de enero de 1912. El éxito de la expedición estuvo marcado por una planificación meticulosa, aptitud física y equipo y técnicas superiores aprendidas del pueblo inuit.",
          de: "Fünf Männer erreichten mit Amundsen den Südpol: Roald Amundsen (Anführer), Olav Bjaaland, Helmer Hanssen, Sverre Hassel und Oscar Wisting. Sie brachen am 19. Oktober 1911 von ihrem Basislager auf, mit vier Schlitten und 52 Hunden. Die Reise zum Pol dauerte 57 Tage. Unterwegs schlachteten sie einige Hunde zur Nahrung. Alle fünf Männer und 11 Hunde überlebten die Rückreise und kamen am 25. Januar 1912 wieder im Lager an. Der Erfolg der Expedition war durch akribische Planung, körperliche Fitness und überlegene Ausrüstung und Techniken gekennzeichnet, die von den Inuit gelernt wurden.",
          nl: "Vijf mannen bereikten de Zuidpool met Amundsen: Roald Amundsen (leider), Olav Bjaaland, Helmer Hanssen, Sverre Hassel en Oscar Wisting. Ze vertrokken vanaf hun basiskamp op 19 oktober 1911, met vier sleeën en 52 honden. De reis naar de pool duurde 57 dagen. Onderweg slachtten ze enkele honden voor voedsel. Alle vijf de mannen en 11 honden overleefden de terugreis en arriveerden op 25 januari 1912 weer bij de basis. Het succes van de expeditie werd gekenmerkt door nauwgezette planning, fysieke conditie en superieure uitrusting en technieken die van het Inuit-volk werden geleerd."
        }
      },
      {
        question: {
          en: "Which U.S. state's capital is Montgomery?",
          es: "¿De qué estado de EE.UU. es Montgomery la capital?",
          de: "Von welchem US-Bundesstaat ist Montgomery die Hauptstadt?",
          nl: "Van welke Amerikaanse staat is Montgomery de hoofdstad?"
        },
        options: [

          { en: "Mississippi", es: "Misisipi", de: "Mississippi", nl: "Mississippi" },

          { en: "Georgia", es: "Georgia", de: "Georgia", nl: "Georgia" },

          { en: "Alabama", es: "Alabama", de: "Alabama", nl: "Alabama" },

          { en: "Tennessee", es: "Tennessee", de: "Tennessee", nl: "Tennessee" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Montgomery is the capital of Alabama. The city became Alabama's capital in 1846, replacing Tuscaloosa. Montgomery has significant historical importance: it served as the first capital of the Confederate States of America in 1861 and was a major center of the Civil Rights Movement. The Montgomery Bus Boycott (1955-1956), sparked by Rosa Parks' refusal to give up her bus seat, lasted 381 days and led to the desegregation of the city's bus system. Dr. Martin Luther King Jr. was pastor of Dexter Avenue Baptist Church in Montgomery during this pivotal time.",
          es: "Montgomery es la capital de Alabama. La ciudad se convirtió en la capital de Alabama en 1846, reemplazando a Tuscaloosa. Montgomery tiene una importancia histórica significativa: sirvió como la primera capital de los Estados Confederados de América en 1861 y fue un centro importante del Movimiento de Derechos Civiles. El Boicot de Autobuses de Montgomery (1955-1956), provocado por la negativa de Rosa Parks a ceder su asiento en el autobús, duró 381 días y condujo a la desegregación del sistema de autobuses de la ciudad. El Dr. Martin Luther King Jr. fue pastor de la Iglesia Bautista de la Avenida Dexter en Montgomery durante este momento crucial.",
          de: "Montgomery ist die Hauptstadt von Alabama. Die Stadt wurde 1846 Alabamas Hauptstadt und ersetzte Tuscaloosa. Montgomery hat bedeutende historische Bedeutung: Sie diente 1861 als erste Hauptstadt der Konföderierten Staaten von Amerika und war ein wichtiges Zentrum der Bürgerrechtsbewegung. Der Montgomery-Busboykott (1955-1956), ausgelöst durch Rosa Parks' Weigerung, ihren Bussitz aufzugeben, dauerte 381 Tage und führte zur Aufhebung der Rassentrennung im Bussystem der Stadt. Dr. Martin Luther King Jr. war während dieser entscheidenden Zeit Pastor der Dexter Avenue Baptist Church in Montgomery.",
          nl: "Montgomery is de hoofdstad van Alabama. De stad werd in 1846 de hoofdstad van Alabama, ter vervanging van Tuscaloosa. Montgomery heeft grote historische betekenis: het diende in 1861 als de eerste hoofdstad van de Geconfedereerde Staten van Amerika en was een belangrijk centrum van de Burgerrechtenbeweging. De Montgomery Busboycot (1955-1956), veroorzaakt door Rosa Parks' weigering om haar busstoel af te staan, duurde 381 dagen en leidde tot de desegregatie van het bussysteem van de stad. Dr. Martin Luther King Jr. was dominee van de Dexter Avenue Baptist Church in Montgomery tijdens deze cruciale tijd."
        }
      }
    ],

    day15: [ /* 5 questions */
      {
        question: {
          en: "On December 15, 1791, which important document was ratified, adding the first ten amendments to the U.S. Constitution?",
          es: "El 15 de diciembre de 1791, ¿qué documento importante fue ratificado, agregando las primeras diez enmiendas a la Constitución de EE.UU.?",
          de: "Am 15. Dezember 1791 wurde welches wichtige Dokument ratifiziert, das die ersten zehn Zusatzartikel zur US-Verfassung hinzufügte?",
          nl: "Op 15 december 1791 werd welk belangrijk document geratificeerd, dat de eerste tien amendementen aan de Amerikaanse Grondwet toevoegde?"
        },
        options: [

          { en: "The Declaration of Independence", es: "La Declaración de Independencia", de: "Die Unabhängigkeitserklärung", nl: "De Onafhankelijkheidsverklaring" },

          { en: "The Bill of Rights", es: "La Carta de Derechos", de: "Die Bill of Rights", nl: "De Bill of Rights" },

          { en: "The Articles of Confederation", es: "Los Artículos de la Confederación", de: "Die Artikel der Konföderation", nl: "De Artikelen van de Confederatie" },

          { en: "The Federalist Papers", es: "Los Documentos Federalistas", de: "Die Federalist Papers", nl: "De Federalist Papers" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Bill of Rights was ratified on December 15, 1791, when Virginia became the 11th state to approve it, reaching the required three-fourths majority. These first ten amendments guarantee fundamental rights including freedom of speech, religion, and the press (First Amendment), the right to bear arms (Second Amendment), and protection against unreasonable searches (Fourth Amendment). James Madison drafted the amendments in response to concerns that the Constitution didn't adequately protect individual liberties. December 15 is now celebrated as Bill of Rights Day in the United States.",
          es: "La Carta de Derechos fue ratificada el 15 de diciembre de 1791, cuando Virginia se convirtió en el undécimo estado en aprobarla, alcanzando la mayoría requerida de tres cuartos. Estas primeras diez enmiendas garantizan derechos fundamentales que incluyen la libertad de expresión, religión y prensa (Primera Enmienda), el derecho a portar armas (Segunda Enmienda) y protección contra registros injustificados (Cuarta Enmienda). James Madison redactó las enmiendas en respuesta a preocupaciones de que la Constitución no protegía adecuadamente las libertades individuales. El 15 de diciembre ahora se celebra como el Día de la Carta de Derechos en los Estados Unidos.",
          de: "Die Bill of Rights wurde am 15. Dezember 1791 ratifiziert, als Virginia der elfte Staat wurde, der sie genehmigte und damit die erforderliche Dreiviertelmehrheit erreichte. Diese ersten zehn Zusatzartikel garantieren grundlegende Rechte, darunter Meinungs-, Religions- und Pressefreiheit (Erster Zusatzartikel), das Recht, Waffen zu tragen (Zweiter Zusatzartikel) und Schutz vor ungerechtfertigten Durchsuchungen (Vierter Zusatzartikel). James Madison entwarf die Zusatzartikel als Reaktion auf Bedenken, dass die Verfassung individuelle Freiheiten nicht ausreichend schütze. Der 15. Dezember wird heute in den Vereinigten Staaten als Bill of Rights Day gefeiert.",
          nl: "De Bill of Rights werd geratificeerd op 15 december 1791, toen Virginia de 11e staat werd die het goedkeurde en daarmee de vereiste driekwart meerderheid bereikte. Deze eerste tien amendementen garanderen fundamentele rechten waaronder vrijheid van meningsuiting, religie en pers (Eerste Amendement), het recht om wapens te dragen (Tweede Amendement) en bescherming tegen onredelijke huiszoekingen (Vierde Amendement). James Madison stelde de amendementen op als reactie op zorgen dat de Grondwet individuele vrijheden niet voldoende beschermde. 15 december wordt nu gevierd als Bill of Rights Day in de Verenigde Staten."
        }
      },
      {
        question: {
          en: "On December 15, 1890, which famous Lakota leader was killed during an attempted arrest at Standing Rock Reservation?",
          es: "El 15 de diciembre de 1890, ¿qué famoso líder Lakota fue asesinado durante un intento de arresto en la Reserva de Standing Rock?",
          de: "Am 15. Dezember 1890 wurde welcher berühmte Lakota-Führer bei einem Verhaftungsversuch in der Standing Rock Reservation getötet?",
          nl: "Op 15 december 1890 werd welke beroemde Lakota-leider gedood tijdens een poging tot arrestatie in de Standing Rock Reservatie?"
        },
        options: [

          { en: "Crazy Horse", es: "Caballo Loco", de: "Crazy Horse", nl: "Crazy Horse" },

          { en: "Sitting Bull", es: "Toro Sentado", de: "Sitting Bull", nl: "Sitting Bull" },

          { en: "Red Cloud", es: "Nube Roja", de: "Red Cloud", nl: "Red Cloud" },

          { en: "Geronimo", es: "Gerónimo", de: "Geronimo", nl: "Geronimo" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Sitting Bull (Tȟatȟáŋka Íyotake) was killed on December 15, 1890, during a botched arrest attempt at Standing Rock Reservation in South Dakota. He was a Hunkpapa Lakota leader who played a major role in defeating General Custer at the Battle of Little Bighorn in 1876. Authorities feared he would join the Ghost Dance movement, a spiritual revival that worried the U.S. government. During the arrest, a gunfight broke out between Sitting Bull's followers and Indian agency police, resulting in his death. Two weeks later, the Wounded Knee Massacre occurred, marking the end of the Indian Wars.",
          es: "Toro Sentado (Tȟatȟáŋka Íyotake) fue asesinado el 15 de diciembre de 1890, durante un intento de arresto fallido en la Reserva de Standing Rock en Dakota del Sur. Fue un líder Hunkpapa Lakota que desempeñó un papel importante en la derrota del General Custer en la Batalla de Little Bighorn en 1876. Las autoridades temían que se uniera al movimiento de la Danza de los Espíritus, un renacimiento espiritual que preocupaba al gobierno de EE.UU. Durante el arresto, estalló un tiroteo entre los seguidores de Toro Sentado y la policía de la agencia india, resultando en su muerte. Dos semanas después, ocurrió la Masacre de Wounded Knee, marcando el fin de las Guerras Indias.",
          de: "Sitting Bull (Tȟatȟáŋka Íyotake) wurde am 15. Dezember 1890 bei einem missglückten Verhaftungsversuch in der Standing Rock Reservation in South Dakota getötet. Er war ein Hunkpapa-Lakota-Führer, der eine wichtige Rolle bei der Niederlage von General Custer in der Schlacht am Little Bighorn 1876 spielte. Die Behörden befürchteten, er würde sich der Ghost-Dance-Bewegung anschließen, einer spirituellen Wiederbelebung, die die US-Regierung beunruhigte. Während der Verhaftung brach eine Schießerei zwischen Sitting Bulls Anhängern und der Polizei der Indianeragentur aus, die zu seinem Tod führte. Zwei Wochen später ereignete sich das Massaker von Wounded Knee, das das Ende der Indianerkriege markierte.",
          nl: "Sitting Bull (Tȟatȟáŋka Íyotake) werd op 15 december 1890 gedood tijdens een mislukte poging tot arrestatie in de Standing Rock Reservatie in South Dakota. Hij was een Hunkpapa Lakota-leider die een belangrijke rol speelde bij de nederlaag van generaal Custer in de Slag bij Little Bighorn in 1876. De autoriteiten vreesden dat hij zich zou aansluiten bij de Ghost Dance-beweging, een spirituele heropleving die de Amerikaanse regering zorgen baarde. Tijdens de arrestatie brak een vuurgevecht uit tussen Sitting Bulls volgers en de politie van het Indiaanse agentschap, wat resulteerde in zijn dood. Twee weken later vond het Wounded Knee-bloedbad plaats, dat het einde van de Indiaanse Oorlogen markeerde."
        }
      },
      {
        question: {
          en: "Alexandre Gustave Eiffel, architect of the Eiffel Tower, was born on December 15, 1832. In which city is the Eiffel Tower located?",
          es: "Alexandre Gustave Eiffel, arquitecto de la Torre Eiffel, nació el 15 de diciembre de 1832. ¿En qué ciudad se encuentra la Torre Eiffel?",
          de: "Alexandre Gustave Eiffel, Architekt des Eiffelturms, wurde am 15. Dezember 1832 geboren. In welcher Stadt befindet sich der Eiffelturm?",
          nl: "Alexandre Gustave Eiffel, architect van de Eiffeltoren, werd geboren op 15 december 1832. In welke stad staat de Eiffeltoren?"
        },
        options: [

          { en: "Lyon", es: "Lyon", de: "Lyon", nl: "Lyon" },

          { en: "Marseille", es: "Marsella", de: "Marseille", nl: "Marseille" },

          { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },

          { en: "Nice", es: "Niza", de: "Nizza", nl: "Nice" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The Eiffel Tower is located in Paris, France, on the Champ de Mars near the Seine River. Built for the 1889 World's Fair (Exposition Universelle), it was initially criticized by many Parisians but has become one of the most recognizable structures in the world. Standing 330 meters (1,083 feet) tall, it was the world's tallest man-made structure until 1930. The tower is made of wrought iron and weighs approximately 10,100 tons. Over 7 million people visit annually, making it the most-visited paid monument in the world. Eiffel also designed the internal structure of the Statue of Liberty.",
          es: "La Torre Eiffel está ubicada en París, Francia, en el Campo de Marte cerca del río Sena. Construida para la Feria Mundial de 1889 (Exposition Universelle), fue inicialmente criticada por muchos parisinos pero se ha convertido en una de las estructuras más reconocibles del mundo. Con 330 metros (1,083 pies) de altura, fue la estructura artificial más alta del mundo hasta 1930. La torre está hecha de hierro forjado y pesa aproximadamente 10,100 toneladas. Más de 7 millones de personas la visitan anualmente, convirtiéndola en el monumento de pago más visitado del mundo. Eiffel también diseñó la estructura interna de la Estatua de la Libertad.",
          de: "Der Eiffelturm befindet sich in Paris, Frankreich, auf dem Champ de Mars in der Nähe der Seine. Er wurde für die Weltausstellung 1889 (Exposition Universelle) gebaut und zunächst von vielen Parisern kritisiert, ist aber zu einem der bekanntesten Bauwerke der Welt geworden. Mit 330 Metern Höhe war er bis 1930 das höchste von Menschen geschaffene Bauwerk der Welt. Der Turm besteht aus Schmiedeeisen und wiegt etwa 10.100 Tonnen. Jährlich besuchen ihn über 7 Millionen Menschen, was ihn zum meistbesuchten kostenpflichtigen Monument der Welt macht. Eiffel entwarf auch die innere Struktur der Freiheitsstatue.",
          nl: "De Eiffeltoren staat in Parijs, Frankrijk, op het Champ de Mars nabij de Seine. Gebouwd voor de Wereldtentoonstelling van 1889 (Exposition Universelle), werd het aanvankelijk bekritiseerd door veel Parijzenaars, maar is uitgegroeid tot een van de meest herkenbare bouwwerken ter wereld. Met een hoogte van 330 meter was het tot 1930 's werelds hoogste door mensen gemaakte bouwwerk. De toren is gemaakt van smeedijzer en weegt ongeveer 10.100 ton. Jaarlijks bezoeken meer dan 7 miljoen mensen de toren, waardoor het het meest bezochte betaalde monument ter wereld is. Eiffel ontwierp ook de interne structuur van het Vrijheidsbeeld."
        }
      },
      {
        question: {
          en: "Which amendment in the Bill of Rights protects freedom of speech and religion?",
          es: "¿Qué enmienda en la Carta de Derechos protege la libertad de expresión y religión?",
          de: "Welcher Zusatzartikel in der Bill of Rights schützt Meinungs- und Religionsfreiheit?",
          nl: "Welk amendement in de Bill of Rights beschermt de vrijheid van meningsuiting en religie?"
        },
        options: [
          { en: "Fourth Amendment", es: "Cuarta Enmienda", de: "Vierter Zusatzartikel", nl: "Vierde Amendement" },
          { en: "Second Amendment", es: "Segunda Enmienda", de: "Zweiter Zusatzartikel", nl: "Tweede Amendement" },
          { en: "Fifth Amendment", es: "Quinta Enmienda", de: "Fünfter Zusatzartikel", nl: "Vijfde Amendement" },
          { en: "First Amendment", es: "Primera Enmienda", de: "Erster Zusatzartikel", nl: "Eerste Amendement" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The First Amendment protects five fundamental freedoms: religion, speech, press, assembly, and petition. Its text reads: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.' This amendment is considered foundational to American democracy and has been the basis for numerous Supreme Court cases. It establishes both the Establishment Clause (separating church and state) and the Free Exercise Clause.",
          es: "La Primera Enmienda protege cinco libertades fundamentales: religión, expresión, prensa, reunión y petición. Su texto dice: 'El Congreso no hará ninguna ley con respecto al establecimiento de una religión, o prohibiendo el libre ejercicio de la misma; o coartando la libertad de expresión, o de prensa; o el derecho del pueblo a reunirse pacíficamente, y a solicitar al Gobierno la reparación de agravios'. Esta enmienda se considera fundamental para la democracia estadounidense y ha sido la base de numerosos casos de la Corte Suprema. Establece tanto la Cláusula de Establecimiento (separando la iglesia del estado) como la Cláusula de Libre Ejercicio.",
          de: "Der Erste Zusatzartikel schützt fünf grundlegende Freiheiten: Religion, Rede, Presse, Versammlung und Petition. Sein Text lautet: 'Der Kongress darf kein Gesetz erlassen, das die Einrichtung einer Religion betrifft oder deren freie Ausübung verbietet; oder die Rede- oder Pressefreiheit einschränkt; oder das Recht des Volkes, sich friedlich zu versammeln und die Regierung um Wiedergutmachung von Beschwerden zu ersuchen.' Dieser Zusatzartikel gilt als grundlegend für die amerikanische Demokratie und war die Grundlage zahlreicher Urteile des Obersten Gerichtshofs. Er etabliert sowohl die Establishment Clause (Trennung von Kirche und Staat) als auch die Free Exercise Clause.",
          nl: "Het Eerste Amendement beschermt vijf fundamentele vrijheden: religie, meningsuiting, pers, vergadering en petitie. De tekst luidt: 'Het Congres zal geen wet maken met betrekking tot het vestigen van een religie, of het verbieden van de vrije uitoefening daarvan; of het beperken van de vrijheid van meningsuiting of pers; of het recht van het volk om vreedzaam te vergaderen en de regering te verzoeken om herstel van grieven.' Dit amendement wordt beschouwd als fundamenteel voor de Amerikaanse democratie en is de basis geweest voor talloze zaken bij het Hooggerechtshof. Het vestigt zowel de Establishment Clause (scheiding van kerk en staat) als de Free Exercise Clause."
        }
      },
      {
        question: {
          en: "How tall is the Eiffel Tower (including antennas)?",
          es: "¿Cuál es la altura de la Torre Eiffel (incluyendo antenas)?",
          de: "Wie hoch ist der Eiffelturm (einschließlich Antennen)?",
          nl: "Hoe hoog is de Eiffeltoren (inclusief antennes)?"
        },
        options: [

          { en: "300 meters", es: "300 metros", de: "300 Meter", nl: "300 meter" },

          { en: "324 meters", es: "324 metros", de: "324 Meter", nl: "324 meter" },

          { en: "350 meters", es: "350 metros", de: "350 Meter", nl: "350 meter" },

          { en: "380 meters", es: "380 metros", de: "380 Meter", nl: "380 meter" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Eiffel Tower stands 324 meters (1,063 feet) tall when including its antennas. The original height to the top platform was 300 meters (984 feet), but various antennas added over the years have increased its total height. The tower can vary in height by up to 15 cm (6 inches) due to thermal expansion of the metal on hot days. It has three levels for visitors, with restaurants on the first and second levels. The tower was completed in 1889 and took 2 years, 2 months, and 5 days to build, using 18,038 metal parts held together by 2.5 million rivets.",
          es: "La Torre Eiffel mide 324 metros (1,063 pies) de altura incluyendo sus antenas. La altura original hasta la plataforma superior era de 300 metros (984 pies), pero varias antenas añadidas a lo largo de los años han aumentado su altura total. La torre puede variar en altura hasta 15 cm (6 pulgadas) debido a la expansión térmica del metal en días calurosos. Tiene tres niveles para visitantes, con restaurantes en el primero y segundo nivel. La torre se completó en 1889 y tomó 2 años, 2 meses y 5 días construirla, usando 18,038 partes metálicas unidas por 2.5 millones de remaches.",
          de: "Der Eiffelturm ist 324 Meter (1.063 Fuß) hoch, einschließlich seiner Antennen. Die ursprüngliche Höhe bis zur obersten Plattform betrug 300 Meter (984 Fuß), aber verschiedene im Laufe der Jahre hinzugefügte Antennen haben seine Gesamthöhe erhöht. Der Turm kann aufgrund thermischer Ausdehnung des Metalls an heißen Tagen um bis zu 15 cm (6 Zoll) in der Höhe variieren. Er hat drei Ebenen für Besucher, mit Restaurants auf der ersten und zweiten Ebene. Der Turm wurde 1889 fertiggestellt und brauchte 2 Jahre, 2 Monate und 5 Tage für den Bau, wobei 18.038 Metallteile verwendet wurden, die durch 2,5 Millionen Nieten zusammengehalten werden.",
          nl: "De Eiffeltoren is 324 meter (1.063 voet) hoog inclusief de antennes. De oorspronkelijke hoogte tot het bovenste platform was 300 meter (984 voet), maar verschillende antennes die in de loop der jaren zijn toegevoegd, hebben de totale hoogte vergroot. De toren kan tot 15 cm (6 inch) in hoogte variëren vanwege thermische uitzetting van het metaal op warme dagen. Het heeft drie niveaus voor bezoekers, met restaurants op het eerste en tweede niveau. De toren werd voltooid in 1889 en het kostte 2 jaar, 2 maanden en 5 dagen om te bouwen, met 18.038 metalen onderdelen die door 2,5 miljoen klinknagels bij elkaar worden gehouden."
        }
      }
    ],
    day16: [ /* 5 questions */
      {
        question: {
          en: "On December 16, 1773, colonists protested British taxation by dumping tea into Boston Harbor. What is this event called?",
          es: "El 16 de diciembre de 1773, los colonos protestaron contra los impuestos británicos arrojando té al puerto de Boston. ¿Cómo se llama este evento?",
          de: "Am 16. Dezember 1773 protestierten Kolonisten gegen britische Besteuerung, indem sie Tee in den Hafen von Boston warfen. Wie wird dieses Ereignis genannt?",
          nl: "Op 16 december 1773 protesteerden kolonisten tegen Britse belastingen door thee in de haven van Boston te gooien. Hoe heet deze gebeurtenis?"
        },
        options: [

          { en: "The Boston Massacre", es: "La Masacre de Boston", de: "Das Boston-Massaker", nl: "Het Bloedbad van Boston" },

          { en: "The Boston Tea Party", es: "El Motín del Té de Boston", de: "Die Boston Tea Party", nl: "De Boston Tea Party" },

          { en: "The Tea Act Rebellion", es: "La Rebelión del Acta del Té", de: "Die Tea Act-Rebellion", nl: "De Tea Act-opstand" },

          { en: "The Harbor Protest", es: "La Protesta del Puerto", de: "Der Hafenprotest", nl: "Het Havenprotest" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Boston Tea Party occurred on December 16, 1773, when American colonists, frustrated by taxation without representation, boarded three British ships and dumped 342 chests of tea into Boston Harbor. The protesters, some disguised as Mohawk Indians, destroyed tea worth about £10,000 (over $1 million today). This act of defiance was in response to the Tea Act, which granted the British East India Company a monopoly on tea sales in the colonies. The event was a pivotal moment leading to the American Revolution, prompting Britain to pass the Coercive Acts (called 'Intolerable Acts' by colonists) in 1774.",
          es: "El Motín del Té de Boston ocurrió el 16 de diciembre de 1773, cuando colonos estadounidenses, frustrados por impuestos sin representación, abordaron tres barcos británicos y arrojaron 342 cajas de té al puerto de Boston. Los manifestantes, algunos disfrazados como indios mohawk, destruyeron té por un valor de aproximadamente £10,000 (más de $1 millón hoy). Este acto de desafío fue en respuesta al Acta del Té, que otorgó a la Compañía Británica de las Indias Orientales el monopolio de las ventas de té en las colonias. El evento fue un momento crucial que llevó a la Revolución Estadounidense, provocando que Gran Bretaña aprobara las Leyes Coercitivas (llamadas 'Leyes Intolerables' por los colonos) en 1774.",
          de: "Die Boston Tea Party fand am 16. Dezember 1773 statt, als amerikanische Kolonisten, frustriert über Besteuerung ohne Vertretung, drei britische Schiffe enterten und 342 Kisten Tee in den Hafen von Boston warfen. Die Demonstranten, einige als Mohawk-Indianer verkleidet, zerstörten Tee im Wert von etwa £10.000 (heute über 1 Million Dollar). Dieser Akt des Widerstands war eine Reaktion auf das Tea Act, das der Britischen Ostindien-Kompanie ein Monopol auf den Teeverkauf in den Kolonien gewährte. Das Ereignis war ein entscheidender Moment, der zur Amerikanischen Revolution führte und Großbritannien veranlasste, 1774 die Zwangsgesetze (von den Kolonisten 'Unerträgliche Gesetze' genannt) zu verabschieden.",
          nl: "De Boston Tea Party vond plaats op 16 december 1773, toen Amerikaanse kolonisten, gefrustreerd door belastingen zonder vertegenwoordiging, drie Britse schepen enterden en 342 kisten thee in de haven van Boston gooiden. De demonstranten, sommigen vermomd als Mohawk-indianen, vernietigden thee ter waarde van ongeveer £10.000 (meer dan $1 miljoen vandaag). Deze daad van verzet was een reactie op de Tea Act, die de Britse Oost-Indische Compagnie een monopolie op theeverkoop in de koloniën gaf. De gebeurtenis was een cruciaal moment dat leidde tot de Amerikaanse Revolutie en Groot-Brittannië ertoe bracht in 1774 de Dwangwetten (door kolonisten 'Ondraaglijke Wetten' genoemd) aan te nemen."
        }
      },
      {
        question: {
          en: "On December 16, 1944, which major German offensive began in the Ardennes Forest during World War II?",
          es: "El 16 de diciembre de 1944, ¿qué gran ofensiva alemana comenzó en el Bosque de las Ardenas durante la Segunda Guerra Mundial?",
          de: "Am 16. Dezember 1944 begann welche große deutsche Offensive in den Ardennen während des Zweiten Weltkriegs?",
          nl: "Op 16 december 1944 begon welk groot Duits offensief in de Ardennen tijdens de Tweede Wereldoorlog?"
        },
        options: [

          { en: "Operation Barbarossa", es: "Operación Barbarroja", de: "Operation Barbarossa", nl: "Operatie Barbarossa" },

          { en: "The Battle of the Bulge", es: "La Batalla de las Ardenas", de: "Die Ardennenoffensive", nl: "De Slag om de Ardennen" },

          { en: "Operation Market Garden", es: "Operación Market Garden", de: "Operation Market Garden", nl: "Operatie Market Garden" },

          { en: "The Siege of Bastogne", es: "El Asedio de Bastogne", de: "Die Belagerung von Bastogne", nl: "Het Beleg van Bastenaken" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Battle of the Bulge (Unternehmen Wacht am Rhein) began on December 16, 1944, when Germany launched a surprise offensive through the Ardennes Forest in Belgium and Luxembourg. Hitler aimed to split Allied forces and capture the port of Antwerp. The attack created a 'bulge' in Allied lines, giving the battle its name. Despite initial German success, Allied forces, particularly the 101st Airborne at Bastogne, held critical positions. The battle lasted until January 25, 1945, and was the largest and bloodiest single battle fought by the U.S. in World War II, with 89,000 American casualties. Germany's defeat depleted its remaining reserves.",
          es: "La Batalla de las Ardenas (Unternehmen Wacht am Rhein) comenzó el 16 de diciembre de 1944, cuando Alemania lanzó una ofensiva sorpresa a través del Bosque de las Ardenas en Bélgica y Luxemburgo. Hitler pretendía dividir las fuerzas aliadas y capturar el puerto de Amberes. El ataque creó un 'abultamiento' en las líneas aliadas, dando nombre a la batalla. A pesar del éxito inicial alemán, las fuerzas aliadas, particularmente la 101ª Aerotransportada en Bastogne, mantuvieron posiciones críticas. La batalla duró hasta el 25 de enero de 1945 y fue la batalla individual más grande y sangrienta librada por EE.UU. en la Segunda Guerra Mundial, con 89,000 bajas estadounidenses. La derrota alemana agotó sus reservas restantes.",
          de: "Die Ardennenoffensive (Unternehmen Wacht am Rhein) begann am 16. Dezember 1944, als Deutschland eine Überraschungsoffensive durch die Ardennen in Belgien und Luxemburg startete. Hitler wollte die alliierten Streitkräfte spalten und den Hafen von Antwerpen erobern. Der Angriff schuf eine 'Ausbuchtung' in den alliierten Linien, was der Schlacht ihren Namen gab. Trotz anfänglicher deutscher Erfolge hielten alliierte Streitkräfte, insbesondere die 101. Luftlandedivision bei Bastogne, kritische Positionen. Die Schlacht dauerte bis zum 25. Januar 1945 und war die größte und blutigste Einzelschlacht, die die USA im Zweiten Weltkrieg führten, mit 89.000 amerikanischen Verlusten. Die deutsche Niederlage erschöpfte ihre verbleibenden Reserven.",
          nl: "De Slag om de Ardennen (Unternehmen Wacht am Rhein) begon op 16 december 1944, toen Duitsland een verrassingsoffensief lanceerde door de Ardennen in België en Luxemburg. Hitler wilde de geallieerde strijdkrachten splitsen en de haven van Antwerpen veroveren. De aanval creëerde een 'uitstulping' in de geallieerde linies, wat de slag zijn naam gaf. Ondanks aanvankelijk Duits succes hielden geallieerde troepen, met name de 101st Airborne bij Bastenaken, cruciale posities vast. De slag duurde tot 25 januari 1945 en was de grootste en bloedigste enkele slag die de VS in de Tweede Wereldoorlog voerden, met 89.000 Amerikaanse slachtoffers. De Duitse nederlaag putte hun resterende reserves uit."
        }
      },
      {
        question: {
          en: "Kazakhstan gained independence on December 16, 1991, becoming the last Soviet republic to leave. What is Kazakhstan's capital city?",
          es: "Kazajistán obtuvo su independencia el 16 de diciembre de 1991, convirtiéndose en la última república soviética en separarse. ¿Cuál es la ciudad capital de Kazajistán?",
          de: "Kasachstan erlangte am 16. Dezember 1991 die Unabhängigkeit und war die letzte Sowjetrepublik, die sich trennte. Was ist die Hauptstadt von Kasachstan?",
          nl: "Kazachstan werd onafhankelijk op 16 december 1991 en was de laatste Sovjet-republiek die zich afscheidde. Wat is de hoofdstad van Kazachstan?"
        },
        options: [

          { en: "Almaty", es: "Almatý", de: "Almaty", nl: "Almaty" },

          { en: "Astana", es: "Astaná", de: "Astana", nl: "Astana" },

          { en: "Tashkent", es: "Taskent", de: "Taschkent", nl: "Tasjkent" },

          { en: "Bishkek", es: "Biskek", de: "Bischkek", nl: "Bisjkek" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Astana (now officially called Nur-Sultan since 2019, though commonly still called Astana) is the capital of Kazakhstan. The capital was moved from Almaty to Astana in 1997 by President Nursultan Nazarbayev. Located in the north-central part of the country, Astana is the second-coldest capital city in the world after Ulaanbaatar, Mongolia. The city has experienced rapid modernization with futuristic architecture. Kazakhstan is the world's largest landlocked country and the ninth-largest country overall. It declared independence on December 16, 1991, being the last Soviet republic to do so, effectively ending the Soviet Union.",
          es: "Astaná (ahora oficialmente llamada Nur-Sultán desde 2019, aunque comúnmente aún se llama Astaná) es la capital de Kazajistán. La capital fue trasladada de Almatý a Astaná en 1997 por el presidente Nursultán Nazarbáyev. Ubicada en la parte centro-norte del país, Astaná es la segunda capital más fría del mundo después de Ulán Bator, Mongolia. La ciudad ha experimentado una rápida modernización con arquitectura futurista. Kazajistán es el país sin litoral más grande del mundo y el noveno país más grande en general. Declaró su independencia el 16 de diciembre de 1991, siendo la última república soviética en hacerlo, poniendo fin efectivamente a la Unión Soviética.",
          de: "Astana (seit 2019 offiziell Nur-Sultan genannt, obwohl es allgemein noch Astana genannt wird) ist die Hauptstadt von Kasachstan. Die Hauptstadt wurde 1997 von Präsident Nursultan Nasarbajew von Almaty nach Astana verlegt. Im nördlichen Zentrum des Landes gelegen, ist Astana die zweitkälteste Hauptstadt der Welt nach Ulaanbaatar, Mongolei. Die Stadt hat eine rasante Modernisierung mit futuristischer Architektur erlebt. Kasachstan ist das weltweit größte Binnenland und das neuntgrößte Land insgesamt. Es erklärte am 16. Dezember 1991 seine Unabhängigkeit und war die letzte Sowjetrepublik, die dies tat, womit die Sowjetunion faktisch endete.",
          nl: "Astana (nu officieel Nur-Sultan genoemd sinds 2019, hoewel het nog steeds algemeen Astana wordt genoemd) is de hoofdstad van Kazachstan. De hoofdstad werd in 1997 door president Nursultan Nazarbajev verplaatst van Almaty naar Astana. Gelegen in het noordelijke centrum van het land, is Astana de op een na koudste hoofdstad ter wereld na Ulaanbaatar, Mongolië. De stad heeft een snelle modernisering ondergaan met futuristische architectuur. Kazachstan is 's werelds grootste land zonder kust en het negende grootste land over het algemeen. Het verklaarde op 16 december 1991 zijn onafhankelijkheid en was de laatste Sovjet-republiek die dat deed, waarmee de Sovjet-Unie effectief eindigde."
        }
      },
      {
        question: {
          en: "What type of tree leaves were dumped into Boston Harbor during the Boston Tea Party?",
          es: "¿Qué tipo de hojas de árbol fueron arrojadas al puerto de Boston durante el Motín del Té de Boston?",
          de: "Welche Art von Baumblättern wurde während der Boston Tea Party in den Hafen von Boston geworfen?",
          nl: "Welk type boombladeren werd tijdens de Boston Tea Party in de haven van Boston gegooid?"
        },
        options: [

          { en: "Coffee beans", es: "Granos de café", de: "Kaffeebohnen", nl: "Koffiebonen" },

          { en: "Tea leaves", es: "Hojas de té", de: "Teeblätter", nl: "Theebladeren" },

          { en: "Tobacco leaves", es: "Hojas de tabaco", de: "Tabakblätter", nl: "Tabaksbladeren" },

          { en: "Cocoa beans", es: "Granos de cacao", de: "Kakaobohnen", nl: "Cacaobonen" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Tea leaves were dumped into Boston Harbor during the Boston Tea Party. The 342 chests contained three types of tea: Bohea, Congou, and Souchong (all black teas), along with some Hyson and Singlo (green teas). The total weight of tea destroyed was approximately 92,000 pounds (42,000 kg). Tea was a hugely popular beverage in the American colonies, with colonists consuming an estimated 1.2 million pounds annually. The choice to target tea was symbolic - it represented British control over colonial trade. The harbor reportedly smelled like tea for weeks afterward, and residents claim tea washed up on Boston shores for years.",
          es: "Hojas de té fueron arrojadas al puerto de Boston durante el Motín del Té de Boston. Las 342 cajas contenían tres tipos de té: Bohea, Congou y Souchong (todos tés negros), junto con algo de Hyson y Singlo (tés verdes). El peso total del té destruido fue aproximadamente 92,000 libras (42,000 kg). El té era una bebida muy popular en las colonias americanas, con colonos consumiendo aproximadamente 1.2 millones de libras anualmente. La elección de atacar el té fue simbólica - representaba el control británico sobre el comercio colonial. Según informes, el puerto olía a té durante semanas después, y los residentes afirman que el té apareció en las costas de Boston durante años.",
          de: "Teeblätter wurden während der Boston Tea Party in den Hafen von Boston geworfen. Die 342 Kisten enthielten drei Teesorten: Bohea, Congou und Souchong (alle Schwarztees) sowie etwas Hyson und Singlo (Grüntees). Das Gesamtgewicht des zerstörten Tees betrug etwa 92.000 Pfund (42.000 kg). Tee war ein äußerst beliebtes Getränk in den amerikanischen Kolonien, wobei die Kolonisten schätzungsweise 1,2 Millionen Pfund jährlich konsumierten. Die Wahl, Tee anzugreifen, war symbolisch - er repräsentierte die britische Kontrolle über den Kolonialhandel. Berichten zufolge roch der Hafen wochenlang nach Tee, und Bewohner behaupten, dass Tee jahrelang an Bostons Küsten angeschwemmt wurde.",
          nl: "Theebladeren werden tijdens de Boston Tea Party in de haven van Boston gegooid. De 342 kisten bevatten drie soorten thee: Bohea, Congou en Souchong (allemaal zwarte thee), samen met wat Hyson en Singlo (groene thee). Het totale gewicht van de vernietigde thee was ongeveer 92.000 pond (42.000 kg). Thee was een zeer populaire drank in de Amerikaanse koloniën, waarbij kolonisten naar schatting jaarlijks 1,2 miljoen pond consumeerden. De keuze om thee te targeten was symbolisch - het vertegenwoordigde Britse controle over de koloniale handel. De haven rook naar verluidt wekenlang naar thee, en bewoners beweren dat thee jarenlang op de kusten van Boston aanspoelde."
        }
      },
      {
        question: {
          en: "Which U.S. general famously replied 'Nuts!' when asked to surrender during the Battle of the Bulge?",
          es: "¿Qué general estadounidense respondió famosamente '¡Nueces!' cuando se le pidió que se rindiera durante la Batalla de las Ardenas?",
          de: "Welcher US-General antwortete berühmt mit 'Nuts!', als er während der Ardennenoffensive zur Kapitulation aufgefordert wurde?",
          nl: "Welke Amerikaanse generaal antwoordde beroemd 'Nuts!' toen hem werd gevraagd zich over te geven tijdens de Slag om de Ardennen?"
        },
        options: [

          { en: "George Patton", es: "George Patton", de: "George Patton", nl: "George Patton" },

          { en: "Dwight Eisenhower", es: "Dwight Eisenhower", de: "Dwight Eisenhower", nl: "Dwight Eisenhower" },

          { en: "Anthony McAuliffe", es: "Anthony McAuliffe", de: "Anthony McAuliffe", nl: "Anthony McAuliffe" },

          { en: "Omar Bradley", es: "Omar Bradley", de: "Omar Bradley", nl: "Omar Bradley" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Brigadier General Anthony McAuliffe, acting commander of the 101st Airborne Division in Bastogne, famously replied 'Nuts!' to a German surrender ultimatum on December 22, 1944. When the German commander asked what it meant, an American officer explained: 'It means go to hell.' The 101st Airborne, surrounded and outnumbered, held Bastogne for a week until Patton's Third Army broke through on December 26. McAuliffe's defiant response became one of the most famous quotes of World War II. He later said he initially blurted out a stronger expletive but decided 'Nuts!' was more printable for the official record.",
          es: "El General de Brigada Anthony McAuliffe, comandante en funciones de la 101ª División Aerotransportada en Bastogne, respondió famosamente '¡Nueces!' a un ultimátum de rendición alemán el 22 de diciembre de 1944. Cuando el comandante alemán preguntó qué significaba, un oficial estadounidense explicó: 'Significa vete al infierno'. La 101ª Aerotransportada, rodeada y superada en número, mantuvo Bastogne durante una semana hasta que el Tercer Ejército de Patton irrumpió el 26 de diciembre. La respuesta desafiante de McAuliffe se convirtió en una de las citas más famosas de la Segunda Guerra Mundial. Más tarde dijo que inicialmente soltó un improperio más fuerte pero decidió que '¡Nueces!' era más publicable para el registro oficial.",
          de: "Brigadegeneral Anthony McAuliffe, stellvertretender Kommandeur der 101. Luftlandedivision in Bastogne, antwortete berühmt mit 'Nuts!' auf ein deutsches Kapitulationsultimatum am 22. Dezember 1944. Als der deutsche Kommandeur fragte, was das bedeute, erklärte ein amerikanischer Offizier: 'Es bedeutet, geh zur Hölle.' Die 101. Luftlandedivision, umzingelt und zahlenmäßig unterlegen, hielt Bastogne eine Woche lang, bis Pattons Dritte Armee am 26. Dezember durchbrach. McAuliffes trotzige Antwort wurde zu einem der berühmtesten Zitate des Zweiten Weltkriegs. Er sagte später, er habe zunächst einen stärkeren Kraftausdruck herausgeplatzt, aber entschieden, dass 'Nuts!' für die offizielle Aufzeichnung druckbarer sei.",
          nl: "Brigadegeneraal Anthony McAuliffe, waarnemend commandant van de 101st Airborne Division in Bastenaken, antwoordde beroemd 'Nuts!' op een Duits overgave-ultimatum op 22 december 1944. Toen de Duitse commandant vroeg wat het betekende, legde een Amerikaanse officier uit: 'Het betekent loop naar de hel.' De 101st Airborne, omsingeld en in de minderheid, hield Bastenaken een week vast totdat Pattons Derde Leger op 26 december doorbraak. McAuliffes uitdagende antwoord werd een van de beroemdste citaten van de Tweede Wereldoorlog. Hij zei later dat hij aanvankelijk een krachtiger krachtterm uitflapte, maar besloot dat 'Nuts!' beter af te drukken was voor het officiële verslag."
        }
      }
    ],
    day17: [ /* 5 questions */
      {
        question: {
          en: "On December 17, 1903, the Wright Brothers achieved the first powered flight. Where did this historic flight take place?",
          es: "El 17 de diciembre de 1903, los hermanos Wright lograron el primer vuelo motorizado. ¿Dónde tuvo lugar este vuelo histórico?",
          de: "Am 17. Dezember 1903 erreichten die Gebrüder Wright den ersten Motorflug. Wo fand dieser historische Flug statt?",
          nl: "Op 17 december 1903 bereikten de gebroeders Wright de eerste gemotoriseerde vlucht. Waar vond deze historische vlucht plaats?"
        },
        options: [
          { en: "Kitty Hawk, North Carolina", es: "Kitty Hawk, Carolina del Norte", de: "Kitty Hawk, North Carolina", nl: "Kitty Hawk, North Carolina" },
          { en: "Washington, D.C.", es: "Washington, D.C.", de: "Washington, D.C.", nl: "Washington, D.C." },
          { en: "Dayton, Ohio", es: "Dayton, Ohio", de: "Dayton, Ohio", nl: "Dayton, Ohio" },
          { en: "Cape Canaveral, Florida", es: "Cabo Cañaveral, Florida", de: "Cape Canaveral, Florida", nl: "Cape Canaveral, Florida" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Wright Brothers' first powered flight took place at Kitty Hawk, North Carolina, on December 17, 1903. Orville Wright piloted the Wright Flyer for 12 seconds, traveling 120 feet (37 meters). They chose Kitty Hawk for its strong, steady winds and soft sand dunes for safe landings. That day, they made four flights, with Wilbur's final flight covering 852 feet (260 meters) in 59 seconds. The brothers were bicycle mechanics from Dayton, Ohio, who applied their understanding of balance and control to aviation. Their achievement launched the age of aviation, though it received little public attention initially. The airplane is now displayed at the Smithsonian National Air and Space Museum.",
          es: "El primer vuelo motorizado de los hermanos Wright tuvo lugar en Kitty Hawk, Carolina del Norte, el 17 de diciembre de 1903. Orville Wright pilotó el Wright Flyer durante 12 segundos, recorriendo 120 pies (37 metros). Eligieron Kitty Hawk por sus vientos fuertes y constantes y dunas de arena suave para aterrizajes seguros. Ese día, realizaron cuatro vuelos, con el vuelo final de Wilbur cubriendo 852 pies (260 metros) en 59 segundos. Los hermanos eran mecánicos de bicicletas de Dayton, Ohio, que aplicaron su comprensión del equilibrio y el control a la aviación. Su logro lanzó la era de la aviación, aunque inicialmente recibió poca atención pública. El avión ahora se exhibe en el Museo Nacional del Aire y el Espacio Smithsoniano.",
          de: "Der erste Motorflug der Gebrüder Wright fand am 17. Dezember 1903 in Kitty Hawk, North Carolina, statt. Orville Wright flog die Wright Flyer für 12 Sekunden und legte 120 Fuß (37 Meter) zurück. Sie wählten Kitty Hawk wegen seiner starken, stetigen Winde und weichen Sanddünen für sichere Landungen. An diesem Tag machten sie vier Flüge, wobei Wilburs letzter Flug 852 Fuß (260 Meter) in 59 Sekunden zurücklegte. Die Brüder waren Fahrradmechaniker aus Dayton, Ohio, die ihr Verständnis von Balance und Kontrolle auf die Luftfahrt anwendeten. Ihre Leistung läutete das Zeitalter der Luftfahrt ein, obwohl sie zunächst wenig öffentliche Aufmerksamkeit erhielt. Das Flugzeug wird jetzt im Smithsonian National Air and Space Museum ausgestellt.",
          nl: "De eerste gemotoriseerde vlucht van de gebroeders Wright vond plaats in Kitty Hawk, North Carolina, op 17 december 1903. Orville Wright bestuurde de Wright Flyer gedurende 12 seconden en legde 120 voet (37 meter) af. Ze kozen Kitty Hawk vanwege de sterke, constante wind en zachte zandduinen voor veilige landingen. Die dag maakten ze vier vluchten, waarbij Wilburs laatste vlucht 852 voet (260 meter) aflegde in 59 seconden. De broers waren fietsmonteurs uit Dayton, Ohio, die hun begrip van balans en controle toepasten op de luchtvaart. Hun prestatie lanceerde het tijdperk van de luchtvaart, hoewel het aanvankelijk weinig publieke aandacht kreeg. Het vliegtuig wordt nu tentoongesteld in het Smithsonian National Air and Space Museum."
        }
      },
      {
        question: {
          en: "On December 17, 1989, which animated TV series premiered on Fox, becoming the longest-running American sitcom?",
          es: "El 17 de diciembre de 1989, ¿qué serie de televisión animada se estrenó en Fox, convirtiéndose en la comedia de situación estadounidense de mayor duración?",
          de: "Am 17. Dezember 1989 hatte welche animierte TV-Serie auf Fox Premiere und wurde zur am längsten laufenden amerikanischen Sitcom?",
          nl: "Op 17 december 1989 ging welke geanimeerde tv-serie in première op Fox en werd de langstlopende Amerikaanse sitcom?"
        },
        options: [

          { en: "Family Guy", es: "Padre de Familia", de: "Family Guy", nl: "Family Guy" },

          { en: "The Simpsons", es: "Los Simpson", de: "Die Simpsons", nl: "The Simpsons" },

          { en: "Futurama", es: "Futurama", de: "Futurama", nl: "Futurama" },

          { en: "South Park", es: "South Park", de: "South Park", nl: "South Park" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Simpsons premiered as a full series on December 17, 1989, after originally appearing as shorts on The Tracey Ullman Show. Created by Matt Groening, the show follows the Simpson family in the fictional town of Springfield. With over 750 episodes across 35+ seasons, it's the longest-running American sitcom and animated series. The show has won 35 Emmy Awards and influenced popular culture with catchphrases like 'D'oh!' (added to the Oxford English Dictionary in 2001). The characters are yellow to grab viewers' attention while channel surfing. It has featured over 850 guest stars and remains a cultural phenomenon, satirizing American life, politics, and society.",
          es: "Los Simpson se estrenó como serie completa el 17 de diciembre de 1989, después de aparecer originalmente como cortos en The Tracey Ullman Show. Creado por Matt Groening, el programa sigue a la familia Simpson en el pueblo ficticio de Springfield. Con más de 750 episodios en más de 35 temporadas, es la comedia de situación estadounidense y serie animada de mayor duración. El programa ha ganado 35 premios Emmy e influenció la cultura popular con frases pegadizas como '¡D'oh!' (agregado al Oxford English Dictionary en 2001). Los personajes son amarillos para captar la atención de los espectadores mientras cambian de canal. Ha presentado más de 850 estrellas invitadas y sigue siendo un fenómeno cultural, satirizando la vida, política y sociedad estadounidense.",
          de: "Die Simpsons hatten am 17. Dezember 1989 als vollständige Serie Premiere, nachdem sie ursprünglich als Kurzfilme in The Tracey Ullman Show erschienen waren. Die von Matt Groening geschaffene Show folgt der Familie Simpson in der fiktiven Stadt Springfield. Mit über 750 Episoden in über 35 Staffeln ist sie die am längsten laufende amerikanische Sitcom und animierte Serie. Die Show hat 35 Emmy Awards gewonnen und die Populärkultur mit Catchphrases wie 'D'oh!' beeinflusst (2001 in das Oxford English Dictionary aufgenommen). Die Charaktere sind gelb, um beim Zappen die Aufmerksamkeit der Zuschauer zu erregen. Sie hat über 850 Gaststars präsentiert und bleibt ein kulturelles Phänomen, das das amerikanische Leben, Politik und Gesellschaft satirisiert.",
          nl: "The Simpsons ging in première als volledige serie op 17 december 1989, nadat het oorspronkelijk verscheen als korte afleveringen op The Tracey Ullman Show. Gemaakt door Matt Groening, volgt de show de familie Simpson in het fictieve stadje Springfield. Met meer dan 750 afleveringen over 35+ seizoenen is het de langstlopende Amerikaanse sitcom en geanimeerde serie. De show heeft 35 Emmy Awards gewonnen en de populaire cultuur beïnvloed met catchphrases zoals 'D'oh!' (toegevoegd aan het Oxford English Dictionary in 2001). De personages zijn geel om de aandacht van kijkers te trekken tijdens zappen. Het heeft meer dan 850 gaststerren gehad en blijft een cultureel fenomeen dat het Amerikaanse leven, politiek en maatschappij satiriseert."
        }
      },
      {
        question: {
          en: "December 17 is Bhutan's National Day. What unique measurement does Bhutan use to assess national progress instead of GDP?",
          es: "El 17 de diciembre es el Día Nacional de Bután. ¿Qué medida única utiliza Bután para evaluar el progreso nacional en lugar del PIB?",
          de: "Der 17. Dezember ist der Nationalfeiertag Bhutans. Welche einzigartige Messung verwendet Bhutan zur Bewertung des nationalen Fortschritts anstelle des BIP?",
          nl: "17 december is de Nationale Dag van Bhutan. Welke unieke meting gebruikt Bhutan om nationale vooruitgang te beoordelen in plaats van BBP?"
        },
        options: [

          { en: "Quality of Life Index", es: "Índice de Calidad de Vida", de: "Lebensqualitätsindex", nl: "Kwaliteit van Leven Index" },

          { en: "Gross National Happiness", es: "Felicidad Nacional Bruta", de: "Bruttonationalglück", nl: "Bruto Nationaal Geluk" },

          { en: "Well-being Score", es: "Puntuación de Bienestar", de: "Wohlbefindenswert", nl: "Welzijnsscore" },

          { en: "Human Development Index", es: "Índice de Desarrollo Humano", de: "Index für menschliche Entwicklung", nl: "Menselijke Ontwikkelingsindex" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Bhutan uses Gross National Happiness (GNH) instead of Gross Domestic Product (GDP) to measure national progress. Introduced by King Jigme Singye Wangchuck in 1972, GNH is based on four pillars: sustainable development, preservation of cultural values, conservation of the natural environment, and good governance. The concept prioritizes collective happiness and spiritual well-being over material wealth. Bhutan's National Day on December 17 commemorates the coronation of the first king in 1907. The country is also notable for being carbon-negative (absorbing more CO2 than it produces), maintaining 72% forest cover by law, and being the last country to introduce television (in 1999).",
          es: "Bután utiliza la Felicidad Nacional Bruta (FNB) en lugar del Producto Interno Bruto (PIB) para medir el progreso nacional. Introducido por el Rey Jigme Singye Wangchuck en 1972, el FNB se basa en cuatro pilares: desarrollo sostenible, preservación de valores culturales, conservación del medio ambiente natural y buen gobierno. El concepto prioriza la felicidad colectiva y el bienestar espiritual sobre la riqueza material. El Día Nacional de Bután el 17 de diciembre conmemora la coronación del primer rey en 1907. El país también es notable por ser carbono-negativo (absorbiendo más CO2 del que produce), manteniendo un 72% de cobertura forestal por ley, y siendo el último país en introducir televisión (en 1999).",
          de: "Bhutan verwendet das Bruttonationalglück (BNG) anstelle des Bruttoinlandsprodukts (BIP), um den nationalen Fortschritt zu messen. Das 1972 von König Jigme Singye Wangchuck eingeführte BNG basiert auf vier Säulen: nachhaltige Entwicklung, Erhaltung kultureller Werte, Schutz der natürlichen Umwelt und gute Regierungsführung. Das Konzept priorisiert kollektives Glück und spirituelles Wohlbefinden über materiellen Wohlstand. Bhutans Nationalfeiertag am 17. Dezember gedenkt der Krönung des ersten Königs im Jahr 1907. Das Land ist auch bemerkenswert für seine CO2-Negativität (es absorbiert mehr CO2 als es produziert), die gesetzlich vorgeschriebene 72%ige Waldbedeckung und dafür, das letzte Land zu sein, das Fernsehen einführte (1999).",
          nl: "Bhutan gebruikt Bruto Nationaal Geluk (BNG) in plaats van Bruto Binnenlands Product (BBP) om nationale vooruitgang te meten. Geïntroduceerd door koning Jigme Singye Wangchuck in 1972, is BNG gebaseerd op vier pijlers: duurzame ontwikkeling, behoud van culturele waarden, bescherming van het natuurlijke milieu en goed bestuur. Het concept geeft prioriteit aan collectief geluk en spiritueel welzijn boven materiële rijkdom. Bhutans Nationale Dag op 17 december herdenkt de kroning van de eerste koning in 1907. Het land is ook opmerkelijk omdat het koolstofnegatief is (het absorbeert meer CO2 dan het produceert), 72% bosbedekking bij wet handhaaft, en het laatste land was dat televisie introduceerde (in 1999)."
        }
      },
      {
        question: {
          en: "What was the name of the aircraft flown by the Wright Brothers on their first flight?",
          es: "¿Cuál era el nombre del avión volado por los hermanos Wright en su primer vuelo?",
          de: "Wie hieß das Flugzeug, das die Gebrüder Wright bei ihrem ersten Flug flogen?",
          nl: "Wat was de naam van het vliegtuig dat door de gebroeders Wright werd gevlogen tijdens hun eerste vlucht?"
        },
        options: [
          { en: "Wright Eagle", es: "Wright Eagle", de: "Wright Eagle", nl: "Wright Eagle" },
          { en: "Kitty Hawk One", es: "Kitty Hawk One", de: "Kitty Hawk One", nl: "Kitty Hawk One" },
          { en: "Wright Flyer", es: "Wright Flyer", de: "Wright Flyer", nl: "Wright Flyer" },
          { en: "Wright Pioneer", es: "Wright Pioneer", de: "Wright Pioneer", nl: "Wright Pioneer" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Wright Flyer (also called Flyer I or 1903 Flyer) was the aircraft used for the first powered flight. It was a biplane with a 12-horsepower engine the brothers built themselves, which drove two pusher propellers via chains. The aircraft had a wingspan of 40 feet 4 inches (12.3 meters) and weighed 605 pounds (274 kg) without a pilot. It cost approximately $1,000 to build (about $33,000 today). The pilot lay prone on the lower wing to reduce drag. After the historic flights, the aircraft was damaged by wind gusts and never flew again. The Wrights built improved versions (Flyer II and Flyer III) in subsequent years.",
          es: "El Wright Flyer (también llamado Flyer I o 1903 Flyer) fue el avión utilizado para el primer vuelo motorizado. Era un biplano con un motor de 12 caballos de fuerza que los hermanos construyeron ellos mismos, que impulsaba dos hélices propulsoras mediante cadenas. El avión tenía una envergadura de 40 pies 4 pulgadas (12.3 metros) y pesaba 605 libras (274 kg) sin piloto. Costó aproximadamente $1,000 construirlo (unos $33,000 hoy). El piloto yacía boca abajo en el ala inferior para reducir la resistencia. Después de los vuelos históricos, el avión fue dañado por ráfagas de viento y nunca volvió a volar. Los Wright construyeron versiones mejoradas (Flyer II y Flyer III) en años posteriores.",
          de: "Der Wright Flyer (auch Flyer I oder 1903 Flyer genannt) war das Flugzeug, das für den ersten Motorflug verwendet wurde. Es war ein Doppeldecker mit einem 12-PS-Motor, den die Brüder selbst bauten und der zwei Schubpropeller über Ketten antrieb. Das Flugzeug hatte eine Spannweite von 40 Fuß 4 Zoll (12,3 Meter) und wog 605 Pfund (274 kg) ohne Piloten. Der Bau kostete etwa 1.000 Dollar (heute etwa 33.000 Dollar). Der Pilot lag bäuchlings auf dem unteren Flügel, um den Luftwiderstand zu verringern. Nach den historischen Flügen wurde das Flugzeug durch Windböen beschädigt und flog nie wieder. Die Wrights bauten in den Folgejahren verbesserte Versionen (Flyer II und Flyer III).",
          nl: "De Wright Flyer (ook wel Flyer I of 1903 Flyer genoemd) was het vliegtuig dat werd gebruikt voor de eerste gemotoriseerde vlucht. Het was een tweedekker met een 12-pk motor die de broers zelf bouwden, die twee duwpropellers aandreef via kettingen. Het vliegtuig had een spanwijdte van 40 voet 4 inch (12,3 meter) en woog 605 pond (274 kg) zonder piloot. Het kostte ongeveer $1.000 om te bouwen (ongeveer $33.000 vandaag). De piloot lag plat op de onderste vleugel om de luchtweerstand te verminderen. Na de historische vluchten werd het vliegtuig beschadigd door windvlagen en vloog nooit meer. De Wrights bouwden verbeterde versies (Flyer II en Flyer III) in de daaropvolgende jaren."
        }
      },
      {
        question: {
          en: "In The Simpsons, what is the name of the fictional town where the Simpson family lives?",
          es: "En Los Simpson, ¿cuál es el nombre del pueblo ficticio donde vive la familia Simpson?",
          de: "Wie heißt in Die Simpsons die fiktive Stadt, in der die Familie Simpson lebt?",
          nl: "Wat is in The Simpsons de naam van het fictieve stadje waar de familie Simpson woont?"
        },
        options: [

          { en: "Shelbyville", es: "Shelbyville", de: "Shelbyville", nl: "Shelbyville" },

          { en: "Springfield", es: "Springfield", de: "Springfield", nl: "Springfield" },

          { en: "Capital City", es: "Capital City", de: "Capital City", nl: "Capital City" },

          { en: "Ogdenville", es: "Ogdenville", de: "Ogdenville", nl: "Ogdenville" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Springfield is the fictional town where The Simpsons live. Creator Matt Groening chose the name because it's one of the most common city names in America, appearing in 35 states, making it 'nowhere and everywhere.' The show deliberately keeps Springfield's exact location ambiguous, with contradictory clues throughout the series. Springfield has a nuclear power plant (where Homer works), Moe's Tavern, the Kwik-E-Mart, Springfield Elementary School, and numerous other establishments. Neighboring towns include Shelbyville (Springfield's rival town), Capital City, and Ogdenville. The town's motto is 'A noble spirit embiggens the smallest man,' using the made-up word 'embiggens' which has since entered popular usage.",
          es: "Springfield es el pueblo ficticio donde viven Los Simpson. El creador Matt Groening eligió el nombre porque es uno de los nombres de ciudad más comunes en América, apareciendo en 35 estados, haciéndolo 'en ningún lugar y en todas partes'. El programa mantiene deliberadamente ambigua la ubicación exacta de Springfield, con pistas contradictorias a lo largo de la serie. Springfield tiene una planta de energía nuclear (donde trabaja Homer), Moe's Tavern, el Kwik-E-Mart, Springfield Elementary School y numerosos otros establecimientos. Los pueblos vecinos incluyen Shelbyville (el pueblo rival de Springfield), Capital City y Ogdenville. El lema del pueblo es 'Un espíritu noble engrandece al hombre más pequeño', usando la palabra inventada 'engrandece' que desde entonces ha entrado en uso popular.",
          de: "Springfield ist die fiktive Stadt, in der Die Simpsons leben. Schöpfer Matt Groening wählte den Namen, weil er einer der häufigsten Stadtnamen in Amerika ist und in 35 Bundesstaaten vorkommt, was ihn 'nirgendwo und überall' macht. Die Show hält den genauen Standort von Springfield absichtlich mehrdeutig, mit widersprüchlichen Hinweisen während der gesamten Serie. Springfield hat ein Kernkraftwerk (wo Homer arbeitet), Moe's Tavern, den Kwik-E-Mart, die Springfield Elementary School und zahlreiche andere Einrichtungen. Zu den Nachbarstädten gehören Shelbyville (Springfields Rivalenstadt), Capital City und Ogdenville. Das Stadtmotto lautet 'Ein edler Geist embiggens den kleinsten Mann', wobei das erfundene Wort 'embiggens' verwendet wird, das seitdem in den allgemeinen Sprachgebrauch eingegangen ist.",
          nl: "Springfield is het fictieve stadje waar The Simpsons wonen. Bedenker Matt Groening koos de naam omdat het een van de meest voorkomende stadsnamen in Amerika is, die in 35 staten voorkomt, waardoor het 'nergens en overal' is. De show houdt de exacte locatie van Springfield opzettelijk dubbelzinnig, met tegenstrijdige aanwijzingen door de hele serie. Springfield heeft een kerncentrale (waar Homer werkt), Moe's Tavern, de Kwik-E-Mart, Springfield Elementary School en tal van andere etablissementen. Naburige steden zijn onder andere Shelbyville (Springfields rivaliserende stad), Capital City en Ogdenville. Het motto van de stad is 'Een nobele geest embiggens de kleinste man', waarbij het verzonnen woord 'embiggens' wordt gebruikt dat sindsdien in algemeen gebruik is gekomen."
        }
      }
    ],
    day18: [ /* 5 questions */
      {
        question: {
          en: "On December 18, 1865, which constitutional amendment was ratified, officially abolishing slavery in the United States?",
          es: "El 18 de diciembre de 1865, ¿qué enmienda constitucional fue ratificada, aboliendo oficialmente la esclavitud en los Estados Unidos?",
          de: "Am 18. Dezember 1865 wurde welcher Verfassungszusatz ratifiziert, der die Sklaverei in den Vereinigten Staaten offiziell abschaffte?",
          nl: "Op 18 december 1865 werd welk grondwettelijk amendement geratificeerd dat de slavernij in de Verenigde Staten officieel afschafte?"
        },
        options: [

          { en: "12th Amendment", es: "12ª Enmienda", de: "12. Zusatzartikel", nl: "12e Amendement" },

          { en: "13th Amendment", es: "13ª Enmienda", de: "13. Zusatzartikel", nl: "13e Amendement" },

          { en: "14th Amendment", es: "14ª Enmienda", de: "14. Zusatzartikel", nl: "14e Amendement" },

          { en: "15th Amendment", es: "15ª Enmienda", de: "15. Zusatzartikel", nl: "15e Amendement" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The 13th Amendment was ratified on December 18, 1865, eight months after the Civil War ended. It states: 'Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States.' This formally ended slavery throughout the entire nation. While Lincoln's Emancipation Proclamation (1863) freed slaves in Confederate states, the 13th Amendment made abolition permanent and nationwide. Georgia was the 27th state to ratify it, providing the needed three-fourths majority. However, the amendment's exception clause has been criticized for allowing prison labor, leading to what some call 'convict leasing' and modern prison labor systems.",
          es: "La 13ª Enmienda fue ratificada el 18 de diciembre de 1865, ocho meses después del fin de la Guerra Civil. Establece: 'Ni la esclavitud ni la servidumbre involuntaria, excepto como castigo por un crimen del cual la parte haya sido debidamente condenada, existirán dentro de los Estados Unidos'. Esto terminó formalmente la esclavitud en toda la nación. Mientras que la Proclamación de Emancipación de Lincoln (1863) liberó a los esclavos en los estados Confederados, la 13ª Enmienda hizo permanente y nacional la abolición. Georgia fue el estado número 27 en ratificarla, proporcionando la mayoría de tres cuartos necesaria. Sin embargo, la cláusula de excepción de la enmienda ha sido criticada por permitir el trabajo en prisión, llevando a lo que algunos llaman 'arrendamiento de convictos' y sistemas modernos de trabajo en prisión.",
          de: "Der 13. Zusatzartikel wurde am 18. Dezember 1865 ratifiziert, acht Monate nach Ende des Bürgerkriegs. Er besagt: 'Weder Sklaverei noch unfreiwillige Knechtschaft, außer als Strafe für ein Verbrechen, dessen die Partei ordnungsgemäß verurteilt worden ist, soll innerhalb der Vereinigten Staaten existieren.' Dies beendete formell die Sklaverei in der gesamten Nation. Während Lincolns Emanzipationsproklamation (1863) Sklaven in konföderierten Staaten befreite, machte der 13. Zusatzartikel die Abschaffung dauerhaft und landesweit. Georgia war der 27. Staat, der ihn ratifizierte und die erforderliche Dreiviertelmehrheit lieferte. Die Ausnahmeklausel des Zusatzartikels wurde jedoch dafür kritisiert, dass sie Gefängnisarbeit erlaubt, was zu dem führt, was einige als 'Sträflingsvermietung' und moderne Gefängnisarbeitssysteme bezeichnen.",
          nl: "Het 13e Amendement werd geratificeerd op 18 december 1865, acht maanden na het einde van de Burgeroorlog. Het luidt: 'Noch slavernij noch onvrijwillige dienstbaarheid, behalve als straf voor een misdaad waarvoor de partij naar behoren is veroordeeld, zal bestaan binnen de Verenigde Staten.' Dit maakte formeel een einde aan de slavernij in de hele natie. Terwijl Lincolns Emancipatie Proclamatie (1863) slaven in Zuidelijke staten bevrijdde, maakte het 13e Amendement de afschaffing permanent en landelijk. Georgia was de 27e staat die het ratificeerde, waarmee de benodigde driekwart meerderheid werd bereikt. De uitzonderingsclausule van het amendement is echter bekritiseerd omdat het gevangenisarbeid toestaat, wat leidt tot wat sommigen 'veroordeelde verhuur' en moderne gevangenisarbeidssystemen noemen."
        }
      },
      {
        question: {
          en: "December 18 is Arabic Language Day, commemorating Arabic becoming an official UN language in 1973. How many letters are in the Arabic alphabet?",
          es: "El 18 de diciembre es el Día de la Lengua Árabe, conmemorando que el árabe se convirtió en idioma oficial de la ONU en 1973. ¿Cuántas letras hay en el alfabeto árabe?",
          de: "Der 18. Dezember ist der Tag der arabischen Sprache, der daran erinnert, dass Arabisch 1973 offizielle UN-Sprache wurde. Wie viele Buchstaben hat das arabische Alphabet?",
          nl: "18 december is Arabische Taaldag, ter herdenking van het feit dat Arabisch in 1973 een officiële VN-taal werd. Hoeveel letters heeft het Arabische alfabet?"
        },
        options: [

          { en: "22 letters", es: "22 letras", de: "22 Buchstaben", nl: "22 letters" },

          { en: "28 letters", es: "28 letras", de: "28 Buchstaben", nl: "28 letters" },

          { en: "26 letters", es: "26 letras", de: "26 Buchstaben", nl: "26 letters" },

          { en: "32 letters", es: "32 letras", de: "32 Buchstaben", nl: "32 letters" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Arabic alphabet has 28 letters. It's written from right to left and is used by over 420 million people across the Arab world and beyond. Arabic is a Semitic language and is the fifth most spoken language globally. Most letters connect to adjacent letters, and each letter has different forms depending on its position (beginning, middle, end, or standalone). Arabic script doesn't use capital letters. The language has had enormous influence, contributing words like 'algebra,' 'algorithm,' 'alcohol,' and 'coffee' to English. Arabic is the liturgical language of Islam and is one of the six official languages of the United Nations, alongside English, French, Spanish, Russian, and Chinese.",
          es: "El alfabeto árabe tiene 28 letras. Se escribe de derecha a izquierda y es utilizado por más de 420 millones de personas en el mundo árabe y más allá. El árabe es una lengua semítica y es el quinto idioma más hablado globalmente. La mayoría de las letras se conectan a letras adyacentes, y cada letra tiene diferentes formas dependiendo de su posición (inicio, medio, final o independiente). La escritura árabe no usa letras mayúsculas. El idioma ha tenido una enorme influencia, contribuyendo palabras como 'álgebra', 'algoritmo', 'alcohol' y 'café' al inglés. El árabe es el idioma litúrgico del Islam y es uno de los seis idiomas oficiales de las Naciones Unidas, junto con inglés, francés, español, ruso y chino.",
          de: "Das arabische Alphabet hat 28 Buchstaben. Es wird von rechts nach links geschrieben und wird von über 420 Millionen Menschen in der arabischen Welt und darüber hinaus verwendet. Arabisch ist eine semitische Sprache und die fünfthäufigst gesprochene Sprache weltweit. Die meisten Buchstaben verbinden sich mit benachbarten Buchstaben, und jeder Buchstabe hat je nach Position (Anfang, Mitte, Ende oder alleinstehend) unterschiedliche Formen. Die arabische Schrift verwendet keine Großbuchstaben. Die Sprache hat enormen Einfluss gehabt und Wörter wie 'Algebra', 'Algorithmus', 'Alkohol' und 'Kaffee' zum Englischen beigetragen. Arabisch ist die liturgische Sprache des Islam und eine der sechs offiziellen Sprachen der Vereinten Nationen, neben Englisch, Französisch, Spanisch, Russisch und Chinesisch.",
          nl: "Het Arabische alfabet heeft 28 letters. Het wordt van rechts naar links geschreven en wordt gebruikt door meer dan 420 miljoen mensen in de Arabische wereld en daarbuiten. Arabisch is een Semitische taal en de vijfde meest gesproken taal wereldwijd. De meeste letters verbinden met aangrenzende letters, en elke letter heeft verschillende vormen afhankelijk van de positie (begin, midden, einde of zelfstandig). Het Arabische schrift gebruikt geen hoofdletters. De taal heeft enorme invloed gehad en heeft woorden zoals 'algebra', 'algoritme', 'alcohol' en 'koffie' bijgedragen aan het Engels. Arabisch is de liturgische taal van de islam en is een van de zes officiële talen van de Verenigde Naties, naast Engels, Frans, Spaans, Russisch en Chinees."
        }
      },
      {
        question: {
          en: "Film director Steven Spielberg was born on December 18, 1946. Which 1993 film about dinosaurs becoming a theme park became the highest-grossing film of its time?",
          es: "El director de cine Steven Spielberg nació el 18 de diciembre de 1946. ¿Qué película de 1993 sobre dinosaurios convirtiéndose en un parque temático se convirtió en la película más taquillera de su época?",
          de: "Filmregisseur Steven Spielberg wurde am 18. Dezember 1946 geboren. Welcher Film von 1993 über Dinosaurier, die zu einem Themenpark werden, wurde zum erfolgreichsten Film seiner Zeit?",
          nl: "Filmregisseur Steven Spielberg werd geboren op 18 december 1946. Welke film uit 1993 over dinosauriërs die een themapark worden, werd de meest succesvolle film van zijn tijd?"
        },
        options: [

          { en: "The Lost World", es: "El Mundo Perdido", de: "Vergessene Welt", nl: "The Lost World" },

          { en: "Jurassic Park", es: "Parque Jurásico", de: "Jurassic Park", nl: "Jurassic Park" },

          { en: "Carnosaur", es: "Carnosaur", de: "Carnosaur", nl: "Carnosaur" },

          { en: "Dino Island", es: "Isla Dino", de: "Dino-Insel", nl: "Dino Island" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Jurassic Park (1993) became the highest-grossing film of all time upon release, earning over $1 billion worldwide. Based on Michael Crichton's novel, it revolutionized visual effects by seamlessly blending CGI with animatronics. The film spawned a massive franchise with five sequels. Spielberg is one of cinema's most successful directors, also creating E.T., Jaws, Schindler's List, Saving Private Ryan, and Raiders of the Lost Ark. He's won three Academy Awards and directed the highest-grossing film four separate times (Jaws 1975, E.T. 1982, Jurassic Park 1993). His films have earned over $10 billion globally. He co-founded DreamWorks Studios and remains influential in Hollywood.",
          es: "Parque Jurásico (1993) se convirtió en la película más taquillera de todos los tiempos en su estreno, ganando más de $1 mil millones en todo el mundo. Basada en la novela de Michael Crichton, revolucionó los efectos visuales al mezclar sin problemas CGI con animatrónicos. La película generó una franquicia masiva con cinco secuelas. Spielberg es uno de los directores más exitosos del cine, también creó E.T., Tiburón, La Lista de Schindler, Rescatando al Soldado Ryan e Indiana Jones. Ha ganado tres premios de la Academia y dirigió la película más taquillera en cuatro ocasiones separadas (Tiburón 1975, E.T. 1982, Parque Jurásico 1993). Sus películas han ganado más de $10 mil millones globalmente. Cofundó DreamWorks Studios y sigue siendo influyente en Hollywood.",
          de: "Jurassic Park (1993) wurde bei seiner Veröffentlichung zum erfolgreichsten Film aller Zeiten und spielte weltweit über 1 Milliarde Dollar ein. Basierend auf Michael Crichtons Roman revolutionierte er visuelle Effekte durch nahtlose Verschmelzung von CGI mit Animatronik. Der Film erzeugte ein massives Franchise mit fünf Fortsetzungen. Spielberg ist einer der erfolgreichsten Regisseure des Kinos und schuf auch E.T., Der weiße Hai, Schindlers Liste, Der Soldat James Ryan und Jäger des verlorenen Schatzes. Er hat drei Academy Awards gewonnen und viermal den erfolgreichsten Film aller Zeiten gedreht (Der weiße Hai 1975, E.T. 1982, Jurassic Park 1993). Seine Filme haben weltweit über 10 Milliarden Dollar eingespielt. Er war Mitbegründer von DreamWorks Studios und bleibt einflussreich in Hollywood.",
          nl: "Jurassic Park (1993) werd bij release de meest succesvolle film aller tijden en verdiende wereldwijd meer dan $1 miljard. Gebaseerd op Michael Crichtons roman, revolutioneerde het visuele effecten door CGI naadloos te mengen met animatronics. De film leidde tot een enorm franchise met vijf vervolgen. Spielberg is een van de meest succesvolle regisseurs in de filmgeschiedenis en creëerde ook E.T., Jaws, Schindler's List, Saving Private Ryan en Raiders of the Lost Ark. Hij heeft drie Academy Awards gewonnen en regisseerde vier keer de meest succesvolle film (Jaws 1975, E.T. 1982, Jurassic Park 1993). Zijn films hebben wereldwijd meer dan $10 miljard verdiend. Hij was medeoprichter van DreamWorks Studios en blijft invloedrijk in Hollywood."
        }
      },
      {
        question: {
          en: "What exception does the 13th Amendment include regarding involuntary servitude?",
          es: "¿Qué excepción incluye la 13ª Enmienda respecto a la servidumbre involuntaria?",
          de: "Welche Ausnahme enthält der 13. Zusatzartikel bezüglich unfreiwilliger Knechtschaft?",
          nl: "Welke uitzondering bevat het 13e Amendement met betrekking tot onvrijwillige dienstbaarheid?"
        },
        options: [

          { en: "During wartime", es: "Durante tiempo de guerra", de: "Während Kriegszeiten", nl: "Tijdens oorlogstijd" },

          { en: "As punishment for crime", es: "Como castigo por crimen", de: "Als Strafe für Verbrechen", nl: "Als straf voor misdaad" },

          { en: "For national service", es: "Para servicio nacional", de: "Für Nationaldienst", nl: "Voor nationale dienst" },

          { en: "In times of emergency", es: "En tiempos de emergencia", de: "In Notfallzeiten", nl: "In noodsituaties" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The 13th Amendment includes an exception for involuntary servitude 'as a punishment for crime whereof the party shall have been duly convicted.' This clause has been controversial, as it allows prisoners to be forced to work. After the Civil War, Southern states exploited this through 'convict leasing,' where prisoners (disproportionately Black men arrested under discriminatory 'Black Codes') were leased to private companies, effectively continuing slavery under a different name. Today, the U.S. prison system still uses inmate labor, with prisoners earning as little as pennies per hour. Several states have voted to remove this exception from their state constitutions. The documentary '13th' (2016) explores this amendment's lasting impact on mass incarceration.",
          es: "La 13ª Enmienda incluye una excepción para la servidumbre involuntaria 'como castigo por crimen del cual la parte haya sido debidamente condenada'. Esta cláusula ha sido controvertida, ya que permite que se obligue a trabajar a los prisioneros. Después de la Guerra Civil, los estados del sur explotaron esto a través del 'arrendamiento de convictos', donde prisioneros (desproporcionadamente hombres negros arrestados bajo 'Códigos Negros' discriminatorios) eran arrendados a empresas privadas, continuando efectivamente la esclavitud bajo un nombre diferente. Hoy, el sistema penitenciario de EE.UU. todavía usa trabajo de reclusos, con prisioneros ganando tan poco como centavos por hora. Varios estados han votado para eliminar esta excepción de sus constituciones estatales. El documental '13th' (2016) explora el impacto duradero de esta enmienda en el encarcelamiento masivo.",
          de: "Der 13. Zusatzartikel enthält eine Ausnahme für unfreiwillige Knechtschaft 'als Strafe für Verbrechen, dessen die Partei ordnungsgemäß verurteilt worden ist'. Diese Klausel war kontrovers, da sie es erlaubt, Gefangene zur Arbeit zu zwingen. Nach dem Bürgerkrieg nutzten die Südstaaten dies durch 'Sträflingsvermietung' aus, bei der Gefangene (überproportional schwarze Männer, die unter diskriminierenden 'Black Codes' verhaftet wurden) an private Unternehmen vermietet wurden, wodurch die Sklaverei unter einem anderen Namen effektiv fortgesetzt wurde. Heute nutzt das US-Gefängnissystem immer noch Insassenarbeit, wobei Gefangene nur Cent pro Stunde verdienen. Mehrere Staaten haben dafür gestimmt, diese Ausnahme aus ihren Landesverfassungen zu entfernen. Der Dokumentarfilm '13th' (2016) untersucht die anhaltenden Auswirkungen dieser Änderung auf Masseninhaftierung.",
          nl: "Het 13e Amendement bevat een uitzondering voor onvrijwillige dienstbaarheid 'als straf voor misdaad waarvoor de partij naar behoren is veroordeeld'. Deze clausule is controversieel geweest, omdat het gevangenissen toestaat om gevangenen tot werk te dwingen. Na de Burgeroorlog exploiteerden zuidelijke staten dit door 'veroordeelde verhuur', waarbij gevangenen (onevenredig zwarte mannen gearresteerd onder discriminerende 'Black Codes') werden verhuurd aan particuliere bedrijven, waardoor slavernij effectief onder een andere naam werd voortgezet. Vandaag gebruikt het Amerikaanse gevangenissysteem nog steeds gevangenisarbeid, waarbij gevangenen slechts centen per uur verdienen. Verschillende staten hebben gestemd om deze uitzondering uit hun staatsgrondwetten te verwijderen. De documentaire '13th' (2016) onderzoekt de blijvende impact van dit amendement op massale opsluiting."
        }
      },
      {
        question: {
          en: "In which direction is Arabic written?",
          es: "¿En qué dirección se escribe el árabe?",
          de: "In welche Richtung wird Arabisch geschrieben?",
          nl: "In welke richting wordt Arabisch geschreven?"
        },
        options: [

          { en: "Left to right", es: "Izquierda a derecha", de: "Von links nach rechts", nl: "Links naar rechts" },

          { en: "Right to left", es: "Derecha a izquierda", de: "Von rechts nach links", nl: "Rechts naar links" },

          { en: "Top to bottom", es: "De arriba hacia abajo", de: "Von oben nach unten", nl: "Van boven naar beneden" },

          { en: "Bottom to top", es: "De abajo hacia arriba", de: "Von unten nach oben", nl: "Van beneden naar boven" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Arabic is written from right to left, making it one of several languages with this characteristic (others include Hebrew, Persian, and Urdu). This directionality affects how Arabic books are structured - they open from what English speakers would consider the 'back,' and pages turn from left to right. When Arabic text includes numbers, the numbers themselves are typically written left-to-right, creating mixed directionality. The script is cursive, meaning letters usually connect to form continuous words. Arabic calligraphy is a highly developed art form in Islamic culture, with numerous styles like Kufic, Naskh, and Thuluth. Computer systems and digital devices must specifically support right-to-left text rendering for proper Arabic display.",
          es: "El árabe se escribe de derecha a izquierda, convirtiéndolo en uno de varios idiomas con esta característica (otros incluyen hebreo, persa y urdu). Esta direccionalidad afecta cómo se estructuran los libros árabes - se abren desde lo que los hablantes de inglés considerarían la 'parte trasera', y las páginas se pasan de izquierda a derecha. Cuando el texto árabe incluye números, los números mismos típicamente se escriben de izquierda a derecha, creando direccionalidad mixta. La escritura es cursiva, lo que significa que las letras generalmente se conectan para formar palabras continuas. La caligrafía árabe es una forma de arte altamente desarrollada en la cultura islámica, con numerosos estilos como Kufic, Naskh y Thuluth. Los sistemas informáticos y dispositivos digitales deben soportar específicamente la representación de texto de derecha a izquierda para una correcta visualización del árabe.",
          de: "Arabisch wird von rechts nach links geschrieben, was es zu einer von mehreren Sprachen mit dieser Eigenschaft macht (andere sind Hebräisch, Persisch und Urdu). Diese Direktionalität beeinflusst, wie arabische Bücher strukturiert sind - sie öffnen sich von dem, was englischsprachige als 'Rückseite' betrachten würden, und Seiten werden von links nach rechts umgeblättert. Wenn arabischer Text Zahlen enthält, werden die Zahlen selbst typischerweise von links nach rechts geschrieben, was eine gemischte Direktionalität erzeugt. Die Schrift ist kursiv, was bedeutet, dass Buchstaben normalerweise verbunden sind, um kontinuierliche Wörter zu bilden. Arabische Kalligraphie ist eine hochentwickelte Kunstform in der islamischen Kultur mit zahlreichen Stilen wie Kufisch, Naskh und Thuluth. Computersysteme und digitale Geräte müssen speziell rechts-nach-links-Text-Rendering unterstützen für eine ordnungsgemäße arabische Anzeige.",
          nl: "Arabisch wordt van rechts naar links geschreven, waardoor het een van de verschillende talen is met deze eigenschap (andere zijn Hebreeuws, Perzisch en Urdu). Deze richting beïnvloedt hoe Arabische boeken zijn gestructureerd - ze openen vanuit wat Engelstaligen als de 'achterkant' zouden beschouwen, en pagina's slaan om van links naar rechts. Wanneer Arabische tekst cijfers bevat, worden de cijfers zelf typisch van links naar rechts geschreven, wat gemengde richting creëert. Het schrift is cursief, wat betekent dat letters meestal verbinden om doorlopende woorden te vormen. Arabische kalligrafie is een zeer ontwikkelde kunstvorm in de islamitische cultuur, met talrijke stijlen zoals Koefisch, Naskh en Thuluth. Computersystemen en digitale apparaten moeten specifiek rechts-naar-links tekstweergave ondersteunen voor correcte Arabische weergave."
        }
      }
    ],

    day19: [ /* 5 questions */
      {
        question: {
          en: "On December 19, 1912, survivors of the Titanic disaster arrived in New York aboard which rescue ship?",
          es: "El 19 de diciembre de 1912, los supervivientes del desastre del Titanic llegaron a Nueva York a bordo de qué barco de rescate?",
          de: "Am 19. Dezember 1912 kamen die Überlebenden der Titanic-Katastrophe mit welchem Rettungsschiff in New York an?",
          nl: "Op 19 december 1912 arriveerden de overlevenden van de Titanic-ramp in New York aan boord van welk reddingsschip?"
        },
        options: [
          { en: "California", es: "California", de: "California", nl: "California" },
          { en: "Carpathia", es: "Carpathia", de: "Carpathia", nl: "Carpathia" },
          { en: "Britannic", es: "Britannic", de: "Britannic", nl: "Britannic" },
          { en: "Olympic", es: "Olympic", de: "Olympic", nl: "Olympic" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The RMS Carpathia rescued 705 survivors from the Titanic after it sank on April 15, 1912, in the North Atlantic. Captain Arthur Rostron ordered the ship to race through ice fields at maximum speed to reach the survivors. The Carpathia arrived about 3.5 hours after Titanic sank, rescuing passengers from lifeboats. Though this question refers to survivors arriving in New York on December 19, the main rescue actually occurred in April 1912, bringing survivors to New York on April 18. The Carpathia herself was torpedoed by a German U-boat in 1918 during World War I. The ship's heroic rescue effort saved hundreds of lives, though over 1,500 perished in the disaster.",
          es: "El RMS Carpathia rescató a 705 supervivientes del Titanic después de que se hundiera el 15 de abril de 1912 en el Atlántico Norte. El Capitán Arthur Rostron ordenó al barco atravesar campos de hielo a máxima velocidad para alcanzar a los supervivientes. El Carpathia llegó unas 3.5 horas después de que el Titanic se hundiera, rescatando pasajeros de los botes salvavidas. Aunque esta pregunta se refiere a los supervivientes que llegaron a Nueva York el 19 de diciembre, el rescate principal ocurrió en abril de 1912, llevando a los supervivientes a Nueva York el 18 de abril. El propio Carpathia fue torpedeado por un submarino alemán en 1918 durante la Primera Guerra Mundial. El heroico esfuerzo de rescate del barco salvó cientos de vidas, aunque más de 1,500 perecieron en el desastre.",
          de: "Die RMS Carpathia rettete 705 Überlebende der Titanic, nachdem sie am 15. April 1912 im Nordatlantik gesunken war. Kapitän Arthur Rostron befahl dem Schiff, mit Höchstgeschwindigkeit durch Eisfelder zu rasen, um die Überlebenden zu erreichen. Die Carpathia kam etwa 3,5 Stunden nach dem Untergang der Titanic an und rettete Passagiere aus Rettungsbooten. Obwohl sich diese Frage auf Überlebende bezieht, die am 19. Dezember in New York ankamen, fand die Hauptrettung tatsächlich im April 1912 statt und brachte Überlebende am 18. April nach New York. Die Carpathia selbst wurde 1918 während des Ersten Weltkriegs von einem deutschen U-Boot torpediert. Der heldenhafte Rettungseinsatz des Schiffes rettete Hunderte von Leben, obwohl über 1.500 bei der Katastrophe ums Leben kamen.",
          nl: "De RMS Carpathia redde 705 overlevenden van de Titanic nadat het op 15 april 1912 was gezonken in de Noord-Atlantische Oceaan. Kapitein Arthur Rostron beval het schip met maximale snelheid door ijsvelden te racen om de overlevenden te bereiken. De Carpathia arriveerde ongeveer 3,5 uur nadat de Titanic was gezonken en redde passagiers uit reddingsboten. Hoewel deze vraag verwijst naar overlevenden die op 19 december in New York aankwamen, vond de belangrijkste redding feitelijk plaats in april 1912, waarbij overlevenden op 18 april naar New York werden gebracht. De Carpathia zelf werd in 1918 tijdens de Eerste Wereldoorlog getorpedeerd door een Duitse U-boot. De heroïsche reddingspoging van het schip redde honderden levens, hoewel meer dan 1.500 mensen omkwamen in de ramp."
        }
      },
      {
        question: {
          en: "Soviet leader Leonid Brezhnev was born on December 19, 1906. During which years did he lead the Soviet Union?",
          es: "El líder soviético Leonid Brezhnev nació el 19 de diciembre de 1906. ¿Durante qué años dirigió la Unión Soviética?",
          de: "Der sowjetische Führer Leonid Breschnew wurde am 19. Dezember 1906 geboren. In welchen Jahren führte er die Sowjetunion?",
          nl: "Sovjet-leider Leonid Brezjnev werd geboren op 19 december 1906. In welke jaren leidde hij de Sovjet-Unie?"
        },
        options: [

          { en: "1953-1964", es: "1953-1964", de: "1953-1964", nl: "1953-1964" },

          { en: "1964-1982", es: "1964-1982", de: "1964-1982", nl: "1964-1982" },

          { en: "1982-1991", es: "1982-1991", de: "1982-1991", nl: "1982-1991" },

          { en: "1945-1953", es: "1945-1953", de: "1945-1953", nl: "1945-1953" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Leonid Brezhnev led the Soviet Union from 1964 to 1982, making him the second-longest serving Soviet leader after Stalin. He came to power after helping to orchestrate the removal of Nikita Khrushchev. His era is known as the 'Brezhnev Era' or period of 'stagnation,' characterized by economic slowdown, increased military spending, and the intensification of the Cold War. Major events during his leadership included the Soviet invasion of Czechoslovakia (1968), détente with the West, the SALT I and II arms treaties, and the Soviet invasion of Afghanistan (1979). His doctrine stated the USSR would intervene in socialist countries to preserve communism. He died in office in 1982 and was succeeded by Yuri Andropov.",
          es: "Leonid Brezhnev dirigió la Unión Soviética de 1964 a 1982, convirtiéndolo en el segundo líder soviético con más tiempo en el cargo después de Stalin. Llegó al poder después de ayudar a orquestar la destitución de Nikita Jrushchov. Su era se conoce como la 'Era de Brezhnev' o período de 'estancamiento', caracterizado por la desaceleración económica, el aumento del gasto militar y la intensificación de la Guerra Fría. Los eventos importantes durante su liderazgo incluyeron la invasión soviética de Checoslovaquia (1968), la distensión con Occidente, los tratados de armas SALT I y II, y la invasión soviética de Afganistán (1979). Su doctrina establecía que la URSS intervendría en países socialistas para preservar el comunismo. Murió en el cargo en 1982 y fue sucedido por Yuri Andrópov.",
          de: "Leonid Breschnew führte die Sowjetunion von 1964 bis 1982 und war damit nach Stalin der am zweitlängsten amtierende sowjetische Führer. Er kam an die Macht, nachdem er bei der Absetzung von Nikita Chruschtschow geholfen hatte. Seine Ära ist bekannt als 'Breschnew-Ära' oder Periode der 'Stagnation', gekennzeichnet durch wirtschaftliche Verlangsamung, erhöhte Militärausgaben und die Intensivierung des Kalten Krieges. Wichtige Ereignisse während seiner Führung waren die sowjetische Invasion der Tschechoslowakei (1968), Entspannung mit dem Westen, die SALT I- und II-Abrüstungsverträge und die sowjetische Invasion Afghanistans (1979). Seine Doktrin besagte, dass die UdSSR in sozialistische Länder eingreifen würde, um den Kommunismus zu bewahren. Er starb 1982 im Amt und wurde von Juri Andropow abgelöst.",
          nl: "Leonid Brezjnev leidde de Sovjet-Unie van 1964 tot 1982, waarmee hij de op een na langst regerende Sovjet-leider was na Stalin. Hij kwam aan de macht na het helpen orkestreren van de verwijdering van Nikita Chroesjtsjov. Zijn tijdperk staat bekend als het 'Brezjnev-tijdperk' of periode van 'stagnatie', gekenmerkt door economische vertraging, verhoogde militaire uitgaven en de intensivering van de Koude Oorlog. Belangrijke gebeurtenissen tijdens zijn leiderschap waren de Sovjet-invasie van Tsjechoslowakije (1968), détente met het Westen, de SALT I en II wapenverdragen, en de Sovjet-invasie van Afghanistan (1979). Zijn doctrine stelde dat de USSR zou ingrijpen in socialistische landen om het communisme te behouden. Hij stierf in functie in 1982 en werd opgevolgd door Joeri Andropov."
        }
      },
      {
        question: {
          en: "Actor Jake Gyllenhaal, born December 19, 1980, starred in which 2001 cult film about a troubled teenager who experiences bizarre visions?",
          es: "El actor Jake Gyllenhaal, nacido el 19 de diciembre de 1980, protagonizó qué película de culto de 2001 sobre un adolescente problemático que experimenta visiones extrañas?",
          de: "Schauspieler Jake Gyllenhaal, geboren am 19. Dezember 1980, spielte in welchem Kultfilm von 2001 über einen gestörten Teenager, der bizarre Visionen erlebt?",
          nl: "Acteur Jake Gyllenhaal, geboren op 19 december 1980, speelde in welke cultfilm uit 2001 over een getroebleerde tiener die bizarre visioenen ervaart?"
        },
        options: [

          { en: "Memento", es: "Memento", de: "Memento", nl: "Memento" },

          { en: "Donnie Darko", es: "Donnie Darko", de: "Donnie Darko", nl: "Donnie Darko" },

          { en: "Requiem for a Dream", es: "Réquiem por un sueño", de: "Requiem for a Dream", nl: "Requiem for a Dream" },

          { en: "The Butterfly Effect", es: "El efecto mariposa", de: "Der Schmetterlingseffekt", nl: "The Butterfly Effect" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Donnie Darko (2001) became a cult classic despite initially flopping at the box office. Gyllenhaal plays a troubled teen visited by a mysterious figure in a rabbit costume who predicts the world will end in 28 days. The film explores themes of time travel, mental illness, and fate. Director Richard Kelly's debut film gained popularity through DVD sales and midnight screenings. Gyllenhaal has since starred in films like Brokeback Mountain, Nightcrawler, Prisoners, and Spider-Man: Far From Home. He's known for choosing complex, challenging roles. His sister Maggie Gyllenhaal is also an acclaimed actress. Jake has received numerous award nominations including a BAFTA and Critics' Choice Award for Brokeback Mountain.",
          es: "Donnie Darko (2001) se convirtió en un clásico de culto a pesar de fracasar inicialmente en taquilla. Gyllenhaal interpreta a un adolescente problemático visitado por una misteriosa figura con disfraz de conejo que predice que el mundo terminará en 28 días. La película explora temas de viajes en el tiempo, enfermedad mental y destino. El debut del director Richard Kelly ganó popularidad a través de ventas de DVD y proyecciones de medianoche. Desde entonces, Gyllenhaal ha protagonizado películas como Brokeback Mountain, Nightcrawler, Prisoners y Spider-Man: Lejos de casa. Es conocido por elegir papeles complejos y desafiantes. Su hermana Maggie Gyllenhaal también es una actriz aclamada. Jake ha recibido numerosas nominaciones a premios, incluidos un BAFTA y un Critics' Choice Award por Brokeback Mountain.",
          de: "Donnie Darko (2001) wurde zu einem Kultklassiker, obwohl er an den Kinokassen zunächst floppte. Gyllenhaal spielt einen gestörten Teenager, der von einer mysteriösen Figur im Hasenkostüm besucht wird, die vorhersagt, dass die Welt in 28 Tagen enden wird. Der Film erforscht Themen wie Zeitreisen, Geisteskrankheit und Schicksal. Regisseur Richard Kellys Debütfilm gewann durch DVD-Verkäufe und Mitternachtsvorführungen an Popularität. Gyllenhaal spielte seitdem in Filmen wie Brokeback Mountain, Nightcrawler, Prisoners und Spider-Man: Far From Home. Er ist bekannt dafür, komplexe, herausfordernde Rollen zu wählen. Seine Schwester Maggie Gyllenhaal ist ebenfalls eine gefeierte Schauspielerin. Jake erhielt zahlreiche Award-Nominierungen, darunter einen BAFTA und einen Critics' Choice Award für Brokeback Mountain.",
          nl: "Donnie Darko (2001) werd een cultklassieker ondanks dat het aanvankelijk flopte in de bioscoop. Gyllenhaal speelt een getroebleerde tiener die wordt bezocht door een mysterieuze figuur in een konijnenkostuum die voorspelt dat de wereld over 28 dagen zal eindigen. De film verkent thema's als tijdreizen, geestesziekte en noodlot. Regisseur Richard Kelly's debuutfilm werd populair door dvd-verkopen en middernachtvertoningen. Gyllenhaal speelde sindsdien in films als Brokeback Mountain, Nightcrawler, Prisoners en Spider-Man: Far From Home. Hij staat bekend om het kiezen van complexe, uitdagende rollen. Zijn zus Maggie Gyllenhaal is ook een gelauwerde actrice. Jake heeft talrijke award-nominaties ontvangen, waaronder een BAFTA en Critics' Choice Award voor Brokeback Mountain."
        }
      },
      {
        question: {
          en: "What was the name of the mysterious figure in a rabbit costume that visits Donnie Darko?",
          es: "¿Cómo se llamaba la misteriosa figura con disfraz de conejo que visita a Donnie Darko?",
          de: "Wie hieß die mysteriöse Figur im Hasenkostüm, die Donnie Darko besucht?",
          nl: "Wat was de naam van de mysterieuze figuur in een konijnenkostuum die Donnie Darko bezoekt?"
        },
        options: [

          { en: "Harvey", es: "Harvey", de: "Harvey", nl: "Harvey" },

          { en: "Frank", es: "Frank", de: "Frank", nl: "Frank" },

          { en: "Roger", es: "Roger", de: "Roger", nl: "Roger" },

          { en: "Peter", es: "Peter", de: "Peter", nl: "Peter" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Frank is the name of the six-foot-tall demonic rabbit figure that appears to Donnie Darko in visions throughout the film. Frank tells Donnie the world will end in 28 days, 6 hours, 42 minutes, and 12 seconds. The character has become an iconic image in pop culture, with the creepy rabbit mask being widely recognized. Frank's identity and true nature are revealed later in the film's complex, nonlinear narrative involving time travel and parallel universes. The film's ambiguous ending and intricate plot have led to extensive fan theories and interpretations. James Duval portrayed Frank in the film. The character's unsettling appearance and cryptic messages contribute to the movie's psychological horror elements.",
          es: "Frank es el nombre de la figura de conejo demoníaco de seis pies de altura que aparece a Donnie Darko en visiones a lo largo de la película. Frank le dice a Donnie que el mundo terminará en 28 días, 6 horas, 42 minutos y 12 segundos. El personaje se ha convertido en una imagen icónica en la cultura pop, siendo ampliamente reconocida la espeluznante máscara de conejo. La identidad y verdadera naturaleza de Frank se revelan más tarde en la narrativa compleja y no lineal de la película que involucra viajes en el tiempo y universos paralelos. El final ambiguo de la película y su trama intrincada han llevado a extensas teorías e interpretaciones de los fanáticos. James Duval interpretó a Frank en la película. La apariencia inquietante del personaje y sus mensajes crípticos contribuyen a los elementos de terror psicológico de la película.",
          de: "Frank ist der Name der sechs Fuß großen dämonischen Hasenfigur, die Donnie Darko während des gesamten Films in Visionen erscheint. Frank sagt Donnie, dass die Welt in 28 Tagen, 6 Stunden, 42 Minuten und 12 Sekunden enden wird. Die Figur ist zu einem ikonischen Bild in der Popkultur geworden, wobei die gruselige Hasenmaske weithin erkannt wird. Franks Identität und wahre Natur werden später in der komplexen, nichtlinearen Erzählung des Films enthüllt, die Zeitreisen und Paralleluniversen beinhaltet. Das zweideutige Ende des Films und seine komplizierte Handlung haben zu umfangreichen Fan-Theorien und Interpretationen geführt. James Duval porträtierte Frank im Film. Das verstörende Aussehen der Figur und ihre kryptischen Botschaften tragen zu den psychologischen Horror-Elementen des Films bei.",
          nl: "Frank is de naam van de zes voet lange demonische konijnenfiguur die aan Donnie Darko verschijnt in visioenen gedurende de hele film. Frank vertelt Donnie dat de wereld zal eindigen over 28 dagen, 6 uur, 42 minuten en 12 seconden. Het personage is een iconisch beeld geworden in de popcultuur, waarbij het enge konijnenmasker algemeen wordt herkend. Franks identiteit en ware aard worden later onthuld in het complexe, niet-lineaire verhaal van de film over tijdreizen en parallelle universums. Het dubbelzinnige einde van de film en de ingewikkelde plot hebben geleid tot uitgebreide fantheorieën en interpretaties. James Duval speelde Frank in de film. Het verontrustende uiterlijk van het personage en cryptische boodschappen dragen bij aan de psychologische horror-elementen van de film."
        }
      },
      {
        question: {
          en: "How many hours did the Titanic's Carpathia take to reach survivors after receiving the distress signal?",
          es: "¿Cuántas horas tardó el Carpathia del Titanic en llegar a los supervivientes después de recibir la señal de socorro?",
          de: "Wie viele Stunden brauchte die Carpathia der Titanic, um Überlebende zu erreichen, nachdem sie das Notsignal erhalten hatte?",
          nl: "Hoeveel uur deed de Carpathia van de Titanic erover om overlevenden te bereiken na ontvangst van het noodsignaal?"
        },
        options: [

          { en: "2.5 hours", es: "2.5 horas", de: "2,5 Stunden", nl: "2,5 uur" },

          { en: "3.5 hours", es: "3.5 horas", de: "3,5 Stunden", nl: "3,5 uur" },

          { en: "5 hours", es: "5 horas", de: "5 Stunden", nl: "5 uur" },

          { en: "7 hours", es: "7 horas", de: "7 Stunden", nl: "7 uur" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Carpathia took approximately 3.5 hours to reach the Titanic survivors after receiving the distress call at 12:20 AM on April 15, 1912. Captain Arthur Rostron immediately ordered all heating systems shut down to divert maximum power to the engines, pushing the ship beyond its normal speed. The Carpathia traveled through dangerous ice fields at night to reach the survivors, arriving around 4:00 AM. The ship SS California was much closer (about 10-20 miles away) but controversially did not respond to the distress signals. The Carpathia rescued all 705 survivors from lifeboats over several hours. Captain Rostron received numerous honors for his heroic actions, including a Congressional Gold Medal and knighthood from King George V.",
          es: "El Carpathia tardó aproximadamente 3.5 horas en llegar a los supervivientes del Titanic después de recibir la llamada de socorro a las 12:20 AM del 15 de abril de 1912. El Capitán Arthur Rostron ordenó inmediatamente apagar todos los sistemas de calefacción para desviar la máxima potencia a los motores, impulsando el barco más allá de su velocidad normal. El Carpathia viajó a través de peligrosos campos de hielo de noche para llegar a los supervivientes, llegando alrededor de las 4:00 AM. El barco SS California estaba mucho más cerca (a unas 10-20 millas de distancia) pero controvertidamente no respondió a las señales de socorro. El Carpathia rescató a los 705 supervivientes de los botes salvavidas durante varias horas. El Capitán Rostron recibió numerosos honores por sus acciones heroicas, incluida una Medalla de Oro del Congreso y el título de caballero del Rey Jorge V.",
          de: "Die Carpathia brauchte etwa 3,5 Stunden, um die Überlebenden der Titanic zu erreichen, nachdem sie den Notruf um 0:20 Uhr am 15. April 1912 erhalten hatte. Kapitän Arthur Rostron befahl sofort, alle Heizsysteme abzuschalten, um maximale Leistung auf die Motoren umzuleiten und das Schiff über seine normale Geschwindigkeit zu treiben. Die Carpathia fuhr nachts durch gefährliche Eisfelder, um die Überlebenden zu erreichen, und kam gegen 4:00 Uhr an. Das Schiff SS California war viel näher (etwa 10-20 Meilen entfernt), reagierte aber kontrovers nicht auf die Notsignale. Die Carpathia rettete alle 705 Überlebenden über mehrere Stunden aus Rettungsbooten. Kapitän Rostron erhielt zahlreiche Auszeichnungen für seine heroischen Taten, darunter eine Goldmedaille des Kongresses und den Ritterschlag von König Georg V.",
          nl: "De Carpathia deed er ongeveer 3,5 uur over om de overlevenden van de Titanic te bereiken na ontvangst van het noodgesprek om 00:20 uur op 15 april 1912. Kapitein Arthur Rostron gaf onmiddellijk opdracht om alle verwarmingssystemen uit te schakelen om maximaal vermogen naar de motoren te leiden, waardoor het schip sneller ging dan normaal. De Carpathia reisde 's nachts door gevaarlijke ijsvelden om de overlevenden te bereiken en arriveerde rond 04:00 uur. Het schip SS California was veel dichterbij (ongeveer 10-20 mijl verderop) maar reageerde controversieel niet op de noodsignalen. De Carpathia redde alle 705 overlevenden uit reddingsboten gedurende meerdere uren. Kapitein Rostron ontving talrijke eerbewijzen voor zijn heroïsche daden, waaronder een Congressional Gold Medal en ridderschap van koning George V."
        }
      }
    ],

    day20: [ /* 5 questions */
      {
        question: {
          en: "On December 20, 1803, the United States officially took possession of the Louisiana Territory from France. How much did the U.S. pay for this vast territory?",
          es: "El 20 de diciembre de 1803, Estados Unidos tomó oficialmente posesión del Territorio de Luisiana de Francia. ¿Cuánto pagó EE.UU. por este vasto territorio?",
          de: "Am 20. Dezember 1803 übernahmen die Vereinigten Staaten offiziell das Louisiana-Territorium von Frankreich. Wie viel zahlten die USA für dieses riesige Gebiet?",
          nl: "Op 20 december 1803 namen de Verenigde Staten officieel het Louisiana Territory over van Frankrijk. Hoeveel betaalden de VS voor dit uitgestrekte gebied?"
        },
        options: [

          { en: "$5 million", es: "$5 millones", de: "5 Millionen Dollar", nl: "$5 miljoen" },

          { en: "$15 million", es: "$15 millones", de: "15 Millionen Dollar", nl: "$15 miljoen" },

          { en: "$50 million", es: "$50 millones", de: "50 Millionen Dollar", nl: "$50 miljoen" },

          { en: "$100 million", es: "$100 millones", de: "100 Millionen Dollar", nl: "$100 miljoen" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Louisiana Purchase cost $15 million, approximately 3 cents per acre, and doubled the size of the United States. The territory stretched from the Mississippi River to the Rocky Mountains and from the Gulf of Mexico to Canada, encompassing all or part of 15 current U.S. states. President Thomas Jefferson negotiated the deal with Napoleon Bonaparte, who needed funds for his European wars. The purchase raised constitutional questions, as the Constitution didn't explicitly grant the president power to acquire territory. Jefferson, despite being a strict constructionist, proceeded anyway. The Lewis and Clark Expedition (1804-1806) was commissioned to explore the new territory. This acquisition fundamentally shaped American westward expansion.",
          es: "La Compra de Luisiana costó $15 millones, aproximadamente 3 centavos por acre, y duplicó el tamaño de Estados Unidos. El territorio se extendía desde el río Misisipi hasta las Montañas Rocosas y desde el Golfo de México hasta Canadá, abarcando la totalidad o parte de 15 estados actuales de EE.UU. El presidente Thomas Jefferson negoció el trato con Napoleón Bonaparte, quien necesitaba fondos para sus guerras europeas. La compra planteó cuestiones constitucionales, ya que la Constitución no otorgaba explícitamente al presidente el poder de adquirir territorio. Jefferson, a pesar de ser un estricto construccionista, procedió de todos modos. La Expedición de Lewis y Clark (1804-1806) fue comisionada para explorar el nuevo territorio. Esta adquisición moldeó fundamentalmente la expansión estadounidense hacia el oeste.",
          de: "Der Louisiana-Kauf kostete 15 Millionen Dollar, etwa 3 Cent pro Acre, und verdoppelte die Größe der Vereinigten Staaten. Das Territorium erstreckte sich vom Mississippi River bis zu den Rocky Mountains und vom Golf von Mexiko bis Kanada und umfasste ganz oder teilweise 15 aktuelle US-Bundesstaaten. Präsident Thomas Jefferson verhandelte den Deal mit Napoleon Bonaparte, der Mittel für seine europäischen Kriege benötigte. Der Kauf warf verfassungsrechtliche Fragen auf, da die Verfassung dem Präsidenten nicht ausdrücklich die Befugnis erteilte, Territorium zu erwerben. Jefferson, obwohl ein strenger Konstruktivist, fuhr trotzdem fort. Die Lewis-and-Clark-Expedition (1804-1806) wurde beauftragt, das neue Territorium zu erkunden. Diese Übernahme prägte grundlegend die amerikanische Westexpansion.",
          nl: "De Louisiana Purchase kostte $15 miljoen, ongeveer 3 cent per acre, en verdubbelde de grootte van de Verenigde Staten. Het gebied strekte zich uit van de Mississippi rivier tot de Rocky Mountains en van de Golf van Mexico tot Canada, omvattend het geheel of delen van 15 huidige Amerikaanse staten. President Thomas Jefferson onderhandelde de deal met Napoleon Bonaparte, die geld nodig had voor zijn Europese oorlogen. De aankoop riep constitutionele vragen op, aangezien de Grondwet de president niet expliciet de bevoegdheid gaf om gebied te verwerven. Jefferson, ondanks een strikte constructionist te zijn, ging toch door. De Lewis en Clark Expeditie (1804-1806) kreeg opdracht het nieuwe gebied te verkennen. Deze verwerving vormde fundamenteel de Amerikaanse westwaartse expansie."
        }
      },
      {
        question: {
          en: "On December 20, 1989, the United States invaded which Central American country in Operation Just Cause?",
          es: "El 20 de diciembre de 1989, Estados Unidos invadió qué país centroamericano en la Operación Causa Justa?",
          de: "Am 20. Dezember 1989 fielen die Vereinigten Staaten in welches zentralamerikanische Land in der Operation Just Cause ein?",
          nl: "Op 20 december 1989 vielen de Verenigde Staten welk Midden-Amerikaans land binnen in Operatie Just Cause?"
        },
        options: [

          { en: "Nicaragua", es: "Nicaragua", de: "Nicaragua", nl: "Nicaragua" },

          { en: "Panama", es: "Panamá", de: "Panama", nl: "Panama" },

          { en: "El Salvador", es: "El Salvador", de: "El Salvador", nl: "El Salvador" },

          { en: "Honduras", es: "Honduras", de: "Honduras", nl: "Honduras" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The U.S. invaded Panama on December 20, 1989, with the stated goals of capturing dictator Manuel Noriega, protecting American lives, and restoring democracy. Noriega, once a CIA asset, had been indicted in the U.S. on drug trafficking charges. The invasion involved 27,000 U.S. troops and resulted in Noriega's surrender on January 3, 1990. He took refuge in the Vatican Embassy, where U.S. forces famously blasted rock music to pressure him out. Noriega was taken to the U.S., tried, and imprisoned. Estimates of Panamanian casualties range from several hundred to several thousand. The operation was controversial internationally, with the UN General Assembly and Organization of American States condemning it as a violation of international law.",
          es: "EE.UU. invadió Panamá el 20 de diciembre de 1989, con los objetivos declarados de capturar al dictador Manuel Noriega, proteger vidas estadounidenses y restaurar la democracia. Noriega, alguna vez un activo de la CIA, había sido acusado en EE.UU. por cargos de tráfico de drogas. La invasión involucró a 27,000 tropas estadounidenses y resultó en la rendición de Noriega el 3 de enero de 1990. Se refugió en la Embajada del Vaticano, donde las fuerzas estadounidenses famosamente tocaron música rock a alto volumen para presionarlo a salir. Noriega fue llevado a EE.UU., juzgado y encarcelado. Las estimaciones de bajas panameñas van desde varios cientos hasta varios miles. La operación fue controvertida internacionalmente, con la Asamblea General de la ONU y la Organización de Estados Americanos condenándola como una violación del derecho internacional.",
          de: "Die USA fielen am 20. Dezember 1989 in Panama ein, mit den erklärten Zielen, Diktator Manuel Noriega gefangen zu nehmen, amerikanische Leben zu schützen und die Demokratie wiederherzustellen. Noriega, einst ein CIA-Asset, war in den USA wegen Drogenhandels angeklagt worden. Die Invasion umfasste 27.000 US-Truppen und führte am 3. Januar 1990 zu Noriegas Kapitulation. Er suchte Zuflucht in der Vatikan-Botschaft, wo US-Streitkräfte berühmterweise Rockmusik spielten, um ihn unter Druck zu setzen. Noriega wurde in die USA gebracht, vor Gericht gestellt und inhaftiert. Die Schätzungen der panamaischen Opfer reichen von mehreren Hundert bis mehreren Tausend. Die Operation war international umstritten, wobei die UN-Generalversammlung und die Organisation Amerikanischer Staaten sie als Verletzung des Völkerrechts verurteilten.",
          nl: "De VS vielen Panama binnen op 20 december 1989, met als verklaard doel dictator Manuel Noriega te vangen, Amerikaanse levens te beschermen en de democratie te herstellen. Noriega, ooit een CIA-asset, was in de VS aangeklaagd voor drugshandel. De invasie omvatte 27.000 Amerikaanse troepen en resulteerde in Noriega's overgave op 3 januari 1990. Hij zocht toevlucht in de Vaticaanse Ambassade, waar Amerikaanse troepen beroemd rockmuziek speelden om hem onder druk te zetten. Noriega werd naar de VS gebracht, berecht en gevangengezet. Schattingen van Panamese slachtoffers variëren van enkele honderden tot enkele duizenden. De operatie was internationaal controversieel, waarbij de Algemene Vergadering van de VN en de Organisatie van Amerikaanse Staten het veroordeelden als een schending van het internationaal recht."
        }
      },
      {
        question: {
          en: "On December 20, 1999, Macau was handed over from Portuguese to Chinese sovereignty. For how many years had Portugal controlled Macau?",
          es: "El 20 de diciembre de 1999, Macao fue transferida de la soberanía portuguesa a la china. ¿Durante cuántos años controló Portugal Macao?",
          de: "Am 20. Dezember 1999 wurde Macau von portugiesischer an chinesische Souveränität übergeben. Wie viele Jahre hatte Portugal Macau kontrolliert?",
          nl: "Op 20 december 1999 werd Macau overgedragen van Portugese naar Chinese soevereiniteit. Hoeveel jaar had Portugal Macau gecontroleerd?"
        },
        options: [

          { en: "Over 200 years", es: "Más de 200 años", de: "Über 200 Jahre", nl: "Meer dan 200 jaar" },

          { en: "Over 300 years", es: "Más de 300 años", de: "Über 300 Jahre", nl: "Meer dan 300 jaar" },

          { en: "Over 400 years", es: "Más de 400 años", de: "Über 400 Jahre", nl: "Meer dan 400 jaar" },

          { en: "Over 500 years", es: "Más de 500 años", de: "Über 500 Jahre", nl: "Meer dan 500 jaar" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Portugal controlled Macau for over 442 years, from 1557 to 1999, making it Europe's oldest colonial outpost in China and the last to be returned. The handover followed Hong Kong's return to China in 1997. Like Hong Kong, Macau became a Special Administrative Region under the 'one country, two systems' principle, maintaining its capitalist economy and legal system for 50 years. Macau has become the world's largest gambling center, surpassing Las Vegas in gaming revenue. Its economy relies heavily on casinos and tourism. The territory blends Portuguese and Chinese cultures, with UNESCO recognizing its Historic Centre as a World Heritage Site. Portuguese remains an official language alongside Cantonese.",
          es: "Portugal controló Macao durante más de 442 años, de 1557 a 1999, convirtiéndola en el puesto colonial más antiguo de Europa en China y el último en ser devuelto. La transferencia siguió al regreso de Hong Kong a China en 1997. Como Hong Kong, Macao se convirtió en una Región Administrativa Especial bajo el principio de 'un país, dos sistemas', manteniendo su economía capitalista y sistema legal durante 50 años. Macao se ha convertido en el centro de juego más grande del mundo, superando a Las Vegas en ingresos por juegos. Su economía depende en gran medida de casinos y turismo. El territorio mezcla culturas portuguesa y china, con la UNESCO reconociendo su Centro Histórico como Patrimonio de la Humanidad. El portugués sigue siendo un idioma oficial junto al cantonés.",
          de: "Portugal kontrollierte Macau über 442 Jahre lang, von 1557 bis 1999, was es zu Europas ältestem Kolonialposten in China und dem letzten machte, der zurückgegeben wurde. Die Übergabe folgte der Rückgabe Hongkongs an China 1997. Wie Hongkong wurde Macau zu einer Sonderverwaltungsregion unter dem Prinzip 'ein Land, zwei Systeme', wobei es seine kapitalistische Wirtschaft und sein Rechtssystem für 50 Jahre beibehielt. Macau ist zum weltweit größten Glücksspielzentrum geworden und übertrifft Las Vegas bei Glücksspieleinnahmen. Seine Wirtschaft ist stark von Casinos und Tourismus abhängig. Das Territorium verbindet portugiesische und chinesische Kulturen, wobei die UNESCO sein Historisches Zentrum als Weltkulturerbe anerkennt. Portugiesisch bleibt neben Kantonesisch eine offizielle Sprache.",
          nl: "Portugal controleerde Macau gedurende meer dan 442 jaar, van 1557 tot 1999, waardoor het Europa's oudste koloniale buitenpost in China was en de laatste die werd teruggegeven. De overdracht volgde op de terugkeer van Hong Kong naar China in 1997. Net als Hong Kong werd Macau een Speciale Bestuurlijke Regio onder het 'één land, twee systemen' principe, waarbij het zijn kapitalistische economie en rechtssysteem gedurende 50 jaar behield. Macau is 's werelds grootste gokcentrum geworden en heeft Las Vegas ingehaald in gokopbrengsten. De economie is sterk afhankelijk van casino's en toerisme. Het gebied vermengt Portugese en Chinese culturen, waarbij UNESCO het Historisch Centrum erkent als Werelderfgoed. Portugees blijft een officiële taal naast Kantonees."
        }
      },
      {
        question: {
          en: "What nickname was given to Manuel Noriega due to his facial scarring from acne?",
          es: "¿Qué apodo se le dio a Manuel Noriega debido a las cicatrices de acné en su rostro?",
          de: "Welchen Spitznamen erhielt Manuel Noriega aufgrund seiner Gesichtsnarben von Akne?",
          nl: "Welke bijnaam kreeg Manuel Noriega vanwege zijn gezichtslijttekens van acne?"
        },
        options: [

          { en: "The General", es: "El General", de: "Der General", nl: "De Generaal" },

          { en: "Pineapple Face", es: "Cara de Piña", de: "Ananasgesicht", nl: "Ananasgezicht" },

          { en: "El Jefe", es: "El Jefe", de: "El Jefe", nl: "El Jefe" },

          { en: "The Dictator", es: "El Dictador", de: "Der Diktator", nl: "De Dictator" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Manuel Noriega was nicknamed 'Pineapple Face' (Cara de Piña in Spanish) due to his heavily pockmarked complexion from childhood acne. Despite this cruel nickname, he rose to become Panama's de facto military dictator from 1983 to 1989. Noriega had a complex relationship with U.S. intelligence agencies, working for the CIA while simultaneously engaging in drug trafficking and money laundering. After the U.S. invasion, he was convicted in Miami on drug trafficking, racketeering, and money laundering charges, serving 17 years in U.S. prison. He was later extradited to France, then Panama, where he died in 2017. His regime was marked by corruption, human rights abuses, and suppression of political opposition.",
          es: "Manuel Noriega fue apodado 'Cara de Piña' debido a su tez fuertemente marcada por el acné de su infancia. A pesar de este cruel apodo, llegó a convertirse en el dictador militar de facto de Panamá de 1983 a 1989. Noriega tuvo una relación compleja con las agencias de inteligencia estadounidenses, trabajando para la CIA mientras simultáneamente se involucraba en tráfico de drogas y lavado de dinero. Después de la invasión estadounidense, fue condenado en Miami por cargos de tráfico de drogas, extorsión y lavado de dinero, cumpliendo 17 años en prisión estadounidense. Posteriormente fue extraditado a Francia, luego a Panamá, donde murió en 2017. Su régimen se caracterizó por la corrupción, violaciones de derechos humanos y supresión de la oposición política.",
          de: "Manuel Noriega wurde wegen seines stark vernarbten Teints von Kindheitsakne 'Ananasgesicht' (Cara de Piña auf Spanisch) genannt. Trotz dieses grausamen Spitznamens stieg er von 1983 bis 1989 zum De-facto-Militärdiktator Panamas auf. Noriega hatte eine komplexe Beziehung zu US-Geheimdiensten und arbeitete für die CIA, während er gleichzeitig im Drogenhandel und in der Geldwäsche tätig war. Nach der US-Invasion wurde er in Miami wegen Drogenhandels, Erpressung und Geldwäsche verurteilt und verbrachte 17 Jahre in US-Gefängnissen. Später wurde er nach Frankreich, dann nach Panama ausgeliefert, wo er 2017 starb. Sein Regime war von Korruption, Menschenrechtsverletzungen und Unterdrückung der politischen Opposition geprägt.",
          nl: "Manuel Noriega kreeg de bijnaam 'Ananasgezicht' (Cara de Piña in het Spaans) vanwege zijn zwaar gepokeerde gelaat door acne in zijn jeugd. Ondanks deze wrede bijnaam werd hij van 1983 tot 1989 de facto militaire dictator van Panama. Noriega had een complexe relatie met Amerikaanse inlichtingendiensten, hij werkte voor de CIA terwijl hij tegelijkertijd betrokken was bij drugshandel en witwassen. Na de Amerikaanse invasie werd hij in Miami veroordeeld voor drugshandel, afpersing en witwassen, en zat 17 jaar in een Amerikaanse gevangenis. Hij werd later uitgeleverd aan Frankrijk, vervolgens Panama, waar hij in 2017 stierf. Zijn regime werd gekenmerkt door corruptie, mensenrechtenschendingen en onderdrukking van politieke oppositie."
        }
      },
      {
        question: {
          en: "Under what principle does Macau operate as a Special Administrative Region of China?",
          es: "¿Bajo qué principio opera Macao como Región Administrativa Especial de China?",
          de: "Unter welchem Prinzip operiert Macau als Sonderverwaltungsregion Chinas?",
          nl: "Onder welk principe opereert Macau als Speciale Bestuurlijke Regio van China?"
        },
        options: [

          { en: "Two nations, one goal", es: "Dos naciones, un objetivo", de: "Zwei Nationen, ein Ziel", nl: "Twee naties, één doel" },

          { en: "One country, two systems", es: "Un país, dos sistemas", de: "Ein Land, zwei Systeme", nl: "Één land, twee systemen" },

          { en: "Shared sovereignty", es: "Soberanía compartida", de: "Geteilte Souveränität", nl: "Gedeelde soevereiniteit" },

          { en: "Federal autonomy", es: "Autonomía federal", de: "Föderale Autonomie", nl: "Federale autonomie" }

        ],
        correctIndex: 1,
        explanation: {
          en: "'One country, two systems' is a constitutional principle formulated by Deng Xiaoping for reunification of China with Hong Kong and Macau. It allows these regions to maintain their capitalist economic systems, currencies, legal systems, and certain freedoms for 50 years after handover, while remaining part of the People's Republic of China. The mainland operates under socialism with Chinese characteristics. This arrangement was designed to ease the transition and preserve these regions' economic prosperity. The principle has been tested in recent years, particularly in Hong Kong with 2019-2020 protests and the 2020 National Security Law. Macau's 50-year period runs until 2049, Hong Kong's until 2047.",
          es: "'Un país, dos sistemas' es un principio constitucional formulado por Deng Xiaoping para la reunificación de China con Hong Kong y Macao. Permite que estas regiones mantengan sus sistemas económicos capitalistas, monedas, sistemas legales y ciertas libertades durante 50 años después de la transferencia, mientras siguen siendo parte de la República Popular China. El continente opera bajo el socialismo con características chinas. Este arreglo fue diseñado para facilitar la transición y preservar la prosperidad económica de estas regiones. El principio ha sido puesto a prueba en años recientes, particularmente en Hong Kong con las protestas de 2019-2020 y la Ley de Seguridad Nacional de 2020. El período de 50 años de Macao termina en 2049, el de Hong Kong en 2047.",
          de: "'Ein Land, zwei Systeme' ist ein von Deng Xiaoping formuliertes Verfassungsprinzip für die Wiedervereinigung Chinas mit Hongkong und Macau. Es ermöglicht diesen Regionen, ihre kapitalistischen Wirtschaftssysteme, Währungen, Rechtssysteme und bestimmte Freiheiten für 50 Jahre nach der Übergabe beizubehalten, während sie Teil der Volksrepublik China bleiben. Das Festland operiert unter Sozialismus mit chinesischen Merkmalen. Diese Regelung sollte den Übergang erleichtern und den wirtschaftlichen Wohlstand dieser Regionen bewahren. Das Prinzip wurde in den letzten Jahren auf die Probe gestellt, insbesondere in Hongkong mit den Protesten 2019-2020 und dem Nationalen Sicherheitsgesetz 2020. Macaus 50-Jahres-Periode läuft bis 2049, Hongkongs bis 2047.",
          nl: "'Één land, twee systemen' is een constitutioneel principe geformuleerd door Deng Xiaoping voor de hereniging van China met Hong Kong en Macau. Het stelt deze regio's in staat hun kapitalistische economische systemen, valuta's, rechtssystemen en bepaalde vrijheden gedurende 50 jaar na overdracht te behouden, terwijl ze deel blijven van de Volksrepubliek China. Het vasteland opereert onder socialisme met Chinese kenmerken. Deze regeling was ontworpen om de overgang te vergemakkelijken en de economische welvaart van deze regio's te behouden. Het principe is de laatste jaren op de proef gesteld, met name in Hong Kong met de protesten van 2019-2020 en de Nationale Veiligheidswet van 2020. Macau's 50-jarige periode loopt tot 2049, Hong Kong's tot 2047."
        }
      }
    ],

    day21: [ /* 5 questions */
      {
        question: {
          en: "December 21 typically marks the Winter Solstice in the Northern Hemisphere. What astronomical event defines the solstice?",
          es: "El 21 de diciembre generalmente marca el Solsticio de Invierno en el Hemisferio Norte. ¿Qué evento astronómico define el solsticio?",
          de: "Der 21. Dezember markiert typischerweise die Wintersonnenwende auf der Nordhalbkugel. Welches astronomische Ereignis definiert die Sonnenwende?",
          nl: "21 december markeert gewoonlijk de winterzonnewende op het noordelijk halfrond. Welke astronomische gebeurtenis definieert de zonnewende?"
        },
        options: [

          { en: "Earth is farthest from the Sun", es: "La Tierra está más lejos del Sol", de: "Die Erde ist am weitesten von der Sonne entfernt", nl: "De aarde staat het verst van de zon" },

          { en: "The Sun reaches its lowest point in the sky", es: "El Sol alcanza su punto más bajo en el cielo", de: "Die Sonne erreicht ihren niedrigsten Punkt am Himmel", nl: "De zon bereikt zijn laagste punt aan de hemel" },

          { en: "The Moon blocks the Sun", es: "La Luna bloquea el Sol", de: "Der Mond blockiert die Sonne", nl: "De maan blokkeert de zon" },

          { en: "Earth stops rotating briefly", es: "La Tierra deja de rotar brevemente", de: "Die Erde hört kurz auf sich zu drehen", nl: "De aarde stopt kort met draaien" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Winter Solstice occurs when the Sun reaches its lowest point in the sky at noon, marking the shortest day and longest night of the year in the Northern Hemisphere. This happens because Earth's axis is tilted 23.5 degrees, and on the solstice, the North Pole is tilted farthest away from the Sun. Simultaneously, the Southern Hemisphere experiences its Summer Solstice. Ancient cultures built monuments like Stonehenge aligned with the solstice. After this date, days gradually lengthen. The exact date varies between December 20-22. Many cultures celebrate festivals around this time, including Yule, Dongzhi, and Saturnalia. The word 'solstice' comes from Latin meaning 'sun stands still,' referring to the Sun's apparent pause before reversing direction.",
          es: "El Solsticio de Invierno ocurre cuando el Sol alcanza su punto más bajo en el cielo al mediodía, marcando el día más corto y la noche más larga del año en el Hemisferio Norte. Esto sucede porque el eje de la Tierra está inclinado 23.5 grados, y en el solsticio, el Polo Norte está inclinado más lejos del Sol. Simultáneamente, el Hemisferio Sur experimenta su Solsticio de Verano. Las culturas antiguas construyeron monumentos como Stonehenge alineados con el solsticio. Después de esta fecha, los días gradualmente se alargan. La fecha exacta varía entre el 20 y 22 de diciembre. Muchas culturas celebran festivales alrededor de esta época, incluidos Yule, Dongzhi y Saturnalia. La palabra 'solsticio' proviene del latín que significa 'el sol se detiene', refiriéndose a la pausa aparente del Sol antes de invertir la dirección.",
          de: "Die Wintersonnenwende tritt auf, wenn die Sonne mittags ihren niedrigsten Punkt am Himmel erreicht und den kürzesten Tag und die längste Nacht des Jahres auf der Nordhalbkugel markiert. Dies geschieht, weil die Erdachse um 23,5 Grad geneigt ist, und zur Sonnenwende ist der Nordpol am weitesten von der Sonne weggeneigt. Gleichzeitig erlebt die Südhalbkugel ihre Sommersonnenwende. Antike Kulturen bauten Monumente wie Stonehenge, die auf die Sonnenwende ausgerichtet sind. Nach diesem Datum werden die Tage allmählich länger. Das genaue Datum variiert zwischen dem 20. und 22. Dezember. Viele Kulturen feiern Feste um diese Zeit, darunter Yule, Dongzhi und Saturnalia. Das Wort 'Sonnenwende' kommt aus dem Lateinischen und bedeutet 'die Sonne steht still', was sich auf die scheinbare Pause der Sonne bezieht, bevor sie die Richtung umkehrt.",
          nl: "De winterzonnewende vindt plaats wanneer de zon 's middags zijn laagste punt aan de hemel bereikt, wat de kortste dag en langste nacht van het jaar op het noordelijk halfrond markeert. Dit gebeurt omdat de aardas 23,5 graden gekanteld is, en tijdens de zonnewende is de noordpool het verst van de zon afgekanteld. Tegelijkertijd ervaart het zuidelijk halfrond zijn zomerzonnewende. Oude culturen bouwden monumenten zoals Stonehenge die waren uitgelijnd met de zonnewende. Na deze datum worden de dagen geleidelijk langer. De exacte datum varieert tussen 20-22 december. Veel culturen vieren festivals rond deze tijd, waaronder Yule, Dongzhi en Saturnalia. Het woord 'solstice' komt van het Latijn en betekent 'zon staat stil', verwijzend naar de schijnbare pauze van de zon voordat hij van richting verandert."
        }
      },
      {
        question: {
          en: "On December 21, 1988, Pan Am Flight 103 exploded over Lockerbie, Scotland. Which country was later found responsible for the terrorist attack?",
          es: "El 21 de diciembre de 1988, el vuelo 103 de Pan Am explotó sobre Lockerbie, Escocia. ¿Qué país fue posteriormente considerado responsable del ataque terrorista?",
          de: "Am 21. Dezember 1988 explodierte Pan Am Flug 103 über Lockerbie, Schottland. Welches Land wurde später für den Terroranschlag verantwortlich gemacht?",
          nl: "Op 21 december 1988 explodeerde Pan Am vlucht 103 boven Lockerbie, Schotland. Welk land werd later verantwoordelijk gevonden voor de terroristische aanslag?"
        },
        options: [

          { en: "Iraq", es: "Irak", de: "Irak", nl: "Irak" },

          { en: "Libya", es: "Libia", de: "Libyen", nl: "Libië" },

          { en: "Iran", es: "Irán", de: "Iran", nl: "Iran" },

          { en: "Syria", es: "Siria", de: "Syrien", nl: "Syrië" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Libya was found responsible for the Lockerbie bombing, which killed all 259 people aboard the aircraft and 11 on the ground. A Semtex explosive in a suitcase destroyed the Boeing 747 as it flew to New York. In 2001, Libyan intelligence officer Abdelbaset al-Megrahi was convicted of the bombing by a Scottish court. He was sentenced to life in prison but released in 2009 on compassionate grounds due to terminal cancer, causing international controversy. Libya accepted responsibility in 2003 and paid compensation to victims' families. The attack was allegedly in retaliation for U.S. military actions. It remained Britain's deadliest terrorist incident until the 2005 London bombings. The disaster led to improved aviation security measures worldwide.",
          es: "Libia fue considerada responsable del atentado de Lockerbie, que mató a las 259 personas a bordo del avión y 11 en tierra. Un explosivo Semtex en una maleta destruyó el Boeing 747 mientras volaba hacia Nueva York. En 2001, el oficial de inteligencia libio Abdelbaset al-Megrahi fue condenado por el atentado por un tribunal escocés. Fue sentenciado a cadena perpetua pero liberado en 2009 por motivos compasivos debido a cáncer terminal, causando controversia internacional. Libia aceptó responsabilidad en 2003 y pagó compensación a las familias de las víctimas. El ataque fue supuestamente en represalia por acciones militares estadounidenses. Siguió siendo el incidente terrorista más mortífero de Gran Bretaña hasta los atentados de Londres de 2005. El desastre condujo a mejores medidas de seguridad en la aviación mundial.",
          de: "Libyen wurde für das Lockerbie-Attentat verantwortlich gemacht, bei dem alle 259 Menschen an Bord des Flugzeugs und 11 am Boden getötet wurden. Ein Semtex-Sprengstoff in einem Koffer zerstörte die Boeing 747 auf dem Flug nach New York. 2001 wurde der libysche Geheimdienstoffizier Abdelbaset al-Megrahi von einem schottischen Gericht wegen des Attentats verurteilt. Er wurde zu lebenslanger Haft verurteilt, aber 2009 aus Mitleid wegen Krebs im Endstadium freigelassen, was internationale Kontroversen auslöste. Libyen übernahm 2003 die Verantwortung und zahlte Entschädigung an die Familien der Opfer. Der Angriff war angeblich eine Vergeltung für US-Militäraktionen. Es blieb Großbritanniens tödlichster Terroranschlag bis zu den Londoner Bombenanschlägen 2005. Die Katastrophe führte zu verbesserten Luftsicherheitsmaßnahmen weltweit.",
          nl: "Libië werd verantwoordelijk gevonden voor de bomaanslag op Lockerbie, waarbij alle 259 mensen aan boord van het vliegtuig en 11 op de grond omkwamen. Een Semtex-explosief in een koffer vernietigde de Boeing 747 tijdens de vlucht naar New York. In 2001 werd de Libische inlichtingenofficier Abdelbaset al-Megrahi door een Schotse rechtbank veroordeeld voor de bomaanslag. Hij werd veroordeeld tot levenslang, maar in 2009 vrijgelaten op humanitaire gronden vanwege terminale kanker, wat internationale controverses veroorzaakte. Libië accepteerde verantwoordelijkheid in 2003 en betaalde compensatie aan families van slachtoffers. De aanval was naar verluidt een represaille voor Amerikaanse militaire acties. Het bleef Groot-Brittannië's dodelijkste terroristische incident tot de Londense bomaanslagen van 2005. De ramp leidde tot verbeterde luchtvaartbeveiligingsmaatregelen wereldwijd."
        }
      },
      {
        question: {
          en: "December 21 is Humbug Day, a day for people to express frustrations. What literary character is most associated with the phrase 'Bah, humbug!'?",
          es: "El 21 de diciembre es el Día del Humbug, un día para que la gente exprese frustraciones. ¿Qué personaje literario está más asociado con la frase 'Bah, patrañas!'?",
          de: "Der 21. Dezember ist Humbug-Tag, ein Tag für Menschen, um Frustrationen auszudrücken. Welche literarische Figur ist am meisten mit der Phrase 'Bah, Humbug!' verbunden?",
          nl: "21 december is Humbug Dag, een dag waarop mensen frustraties kunnen uiten. Welk literair personage wordt het meest geassocieerd met de uitdrukking 'Bah, onzin!'?"
        },
        options: [

          { en: "The Grinch", es: "El Grinch", de: "Der Grinch", nl: "De Grinch" },

          { en: "Ebenezer Scrooge", es: "Ebenezer Scrooge", de: "Ebenezer Scrooge", nl: "Ebenezer Scrooge" },

          { en: "Mr. Potter", es: "Sr. Potter", de: "Mr. Potter", nl: "Mr. Potter" },

          { en: "Jack Frost", es: "Jack Frost", de: "Jack Frost", nl: "Jack Frost" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Ebenezer Scrooge, the protagonist of Charles Dickens' 'A Christmas Carol' (1843), famously says 'Bah, humbug!' to express his disdain for Christmas and charitable giving. The miserly businessman undergoes transformation after being visited by three ghosts on Christmas Eve. The phrase has become synonymous with cynicism and skepticism about holiday cheer. 'Humbug' originally meant a hoax or fraud, and Scrooge uses it to dismiss Christmas as meaningless nonsense. The story has been adapted countless times for stage, film, and television. Scrooge's character arc from bitter miser to generous benefactor remains one of literature's most famous redemption stories. The novella critiques Victorian-era indifference to poverty while celebrating redemption and compassion.",
          es: "Ebenezer Scrooge, el protagonista de 'Cuento de Navidad' de Charles Dickens (1843), dice famosamente 'Bah, patrañas!' para expresar su desdén por la Navidad y la caridad. El empresario avaro experimenta una transformación después de ser visitado por tres fantasmas en Nochebuena. La frase se ha vuelto sinónimo de cinismo y escepticismo sobre el espíritu navideño. 'Humbug' originalmente significaba un engaño o fraude, y Scrooge la usa para descartar la Navidad como una tontería sin sentido. La historia ha sido adaptada innumerables veces para teatro, cine y televisión. El arco del personaje de Scrooge de avaro amargado a benefactor generoso sigue siendo una de las historias de redención más famosas de la literatura. La novela critica la indiferencia victoriana hacia la pobreza mientras celebra la redención y la compasión.",
          de: "Ebenezer Scrooge, der Protagonist von Charles Dickens' 'Eine Weihnachtsgeschichte' (1843), sagt berühmt 'Bah, Humbug!', um seine Verachtung für Weihnachten und wohltätige Spenden auszudrücken. Der geizige Geschäftsmann durchläuft eine Transformation, nachdem er an Heiligabend von drei Geistern besucht wird. Die Phrase ist zum Synonym für Zynismus und Skepsis gegenüber Feiertagsfreude geworden. 'Humbug' bedeutete ursprünglich einen Schwindel oder Betrug, und Scrooge verwendet es, um Weihnachten als bedeutungslosen Unsinn abzutun. Die Geschichte wurde unzählige Male für Bühne, Film und Fernsehen adaptiert. Scrooges Charakterbogen vom bitteren Geizhals zum großzügigen Wohltäter bleibt eine der berühmtesten Erlösungsgeschichten der Literatur. Die Novelle kritisiert die viktorianische Gleichgültigkeit gegenüber Armut und feiert gleichzeitig Erlösung und Mitgefühl.",
          nl: "Ebenezer Scrooge, de protagonist van Charles Dickens' 'A Christmas Carol' (1843), zegt beroemd 'Bah, onzin!' om zijn minachting voor Kerstmis en liefdadigheid uit te drukken. De gierige zakenman ondergaat een transformatie nadat hij op kerstavond door drie geesten wordt bezocht. De uitdrukking is synoniem geworden met cynisme en scepsis over kerstsfeer. 'Humbug' betekende oorspronkelijk een bedrog of oplichting, en Scrooge gebruikt het om Kerstmis als betekenisloze onzin af te doen. Het verhaal is talloze keren bewerkt voor toneel, film en televisie. Scrooges karakterontwikkeling van bittere vrek tot gulle weldoener blijft een van de beroemdste verlossingsv erhalen uit de literatuur. De novelle bekritiseert de Victoriaanse onverschilligheid jegens armoede terwijl het verlossing en compassie viert."
        }
      },
      {
        question: {
          en: "In Jules Verne's 'Around the World in 80 Days,' Phileas Fogg supposedly won his bet by returning to London on December 21, 1872 (fictional). How did he manage to arrive 'on time' despite thinking he was late?",
          es: "En 'La vuelta al mundo en 80 días' de Jules Verne, Phileas Fogg supuestamente ganó su apuesta al regresar a Londres el 21 de diciembre de 1872 (ficticio). ¿Cómo logró llegar 'a tiempo' a pesar de pensar que llegaba tarde?",
          de: "In Jules Vernes 'Reise um die Erde in 80 Tagen' gewann Phileas Fogg angeblich seine Wette, indem er am 21. Dezember 1872 nach London zurückkehrte (fiktiv). Wie schaffte er es, 'pünktlich' anzukommen, obwohl er dachte, er sei zu spät?",
          nl: "In Jules Verne's 'Rond de wereld in 80 dagen' won Phileas Fogg vermeend zijn weddenschap door op 21 december 1872 naar Londen terug te keren (fictief). Hoe slaagde hij erin 'op tijd' aan te komen ondanks dat hij dacht te laat te zijn?"
        },
        options: [

          { en: "He took a shortcut", es: "Tomó un atajo", de: "Er nahm eine Abkürzung", nl: "Hij nam een kortere route" },

          { en: "He gained a day by crossing the International Date Line", es: "Ganó un día al cruzar la Línea Internacional de Cambio de Fecha", de: "Er gewann einen Tag durch Überqueren der Datumsgrenze", nl: "Hij won een dag door de internationale datumgrens te passeren" },

          { en: "He traveled during leap year", es: "Viajó durante un año bisiesto", de: "Er reiste während eines Schaltjahres", nl: "Hij reisde tijdens een schrikkeljaar" },

          { en: "He changed the calendar", es: "Cambió el calendario", de: "Er änderte den Kalender", nl: "Hij veranderde de kalender" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Phileas Fogg won because he gained a day by traveling eastward and crossing the International Date Line. By circumnavigating the globe eastward, he experienced 80 sunrises during what was actually 79 calendar days in London. When he thought it was Saturday (too late), it was actually Friday (just in time). This clever plot twist demonstrates Verne's understanding of time zones and global timekeeping. Published in 1873, the novel became a classic adventure story. The book popularized the concept of the International Date Line, though it wouldn't be formally established until 1884. Numerous adaptations include films, TV series, and stage productions. The story celebrates Victorian-era technological progress and the shrinking world through improved transportation.",
          es: "Phileas Fogg ganó porque ganó un día al viajar hacia el este y cruzar la Línea Internacional de Cambio de Fecha. Al circunnavegar el globo hacia el este, experimentó 80 amaneceres durante lo que en realidad fueron 79 días calendario en Londres. Cuando pensó que era sábado (demasiado tarde), en realidad era viernes (justo a tiempo). Este ingenioso giro de la trama demuestra la comprensión de Verne sobre los husos horarios y el cronometraje global. Publicada en 1873, la novela se convirtió en una historia de aventuras clásica. El libro popularizó el concepto de la Línea Internacional de Cambio de Fecha, aunque no se establecería formalmente hasta 1884. Numerosas adaptaciones incluyen películas, series de televisión y producciones teatrales. La historia celebra el progreso tecnológico de la era victoriana y el mundo que se reduce a través del transporte mejorado.",
          de: "Phileas Fogg gewann, weil er durch seine Reise nach Osten und das Überqueren der Datumsgrenze einen Tag gewann. Durch die Erdumrundung nach Osten erlebte er 80 Sonnenaufgänge während dessen, was tatsächlich 79 Kalendertage in London waren. Als er dachte, es sei Samstag (zu spät), war es tatsächlich Freitag (gerade rechtzeitig). Dieser clevere Plot-Twist demonstriert Vernes Verständnis von Zeitzonen und globaler Zeitmessung. 1873 veröffentlicht, wurde der Roman zu einer klassischen Abenteuergeschichte. Das Buch popularisierte das Konzept der Datumsgrenze, obwohl sie erst 1884 formell etabliert wurde. Zahlreiche Adaptionen umfassen Filme, TV-Serien und Bühnenproduktionen. Die Geschichte feiert den technologischen Fortschritt der viktorianischen Ära und die schrumpfende Welt durch verbesserte Transportmittel.",
          nl: "Phileas Fogg won omdat hij een dag won door oostwaarts te reizen en de internationale datumgrens te passeren. Door oostwaarts de wereld rond te reizen, ervoer hij 80 zonsopgangen gedurende wat eigenlijk 79 kalenderdagen in Londen waren. Toen hij dacht dat het zaterdag was (te laat), was het eigenlijk vrijdag (net op tijd). Deze slimme plot twist demonstreert Vernes begrip van tijdzones en mondiale tijdwaarneming. Gepubliceerd in 1873, werd de roman een klassiek avonturenverhaal. Het boek populariseerde het concept van de internationale datumgrens, hoewel deze pas in 1884 formeel zou worden vastgesteld. Talrijke bewerkingen omvatten films, tv-series en toneelproducties. Het verhaal viert de technologische vooruitgang uit het Victoriaanse tijdperk en de krimpende wereld door verbeterd transport."
        }
      },
      {
        question: {
          en: "What is the term for the longest night of the year that occurs during the Winter Solstice?",
          es: "¿Cuál es el término para la noche más larga del año que ocurre durante el Solsticio de Invierno?",
          de: "Was ist der Begriff für die längste Nacht des Jahres, die während der Wintersonnenwende auftritt?",
          nl: "Wat is de term voor de langste nacht van het jaar die plaatsvindt tijdens de winterzonnewende?"
        },
        options: [

          { en: "Equinox Night", es: "Noche del Equinoccio", de: "Äquinoktium-Nacht", nl: "Equinoxnacht" },

          { en: "Polar Night", es: "Noche Polar", de: "Polarnacht", nl: "Poolnacht" },

          { en: "Solstice Night", es: "Noche del Solsticio", de: "Sonnenwende-Nacht", nl: "Zonnewendenacht" },

          { en: "Eclipse Night", es: "Noche del Eclipse", de: "Finsternis-Nacht", nl: "Eclipsnacht" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The longest night of the year during the Winter Solstice is called 'Solstice Night.' This night represents the peak of winter darkness in the Northern Hemisphere, after which daylight gradually increases. Ancient peoples tracked this astronomical event carefully, as it signaled the 'return of the sun' and hope for spring. Many cultures have celebrated this night with festivals involving fire and light, symbolizing the battle against darkness. Examples include the Norse Yule log, Roman Saturnalia, and Chinese Dongzhi Festival. Stonehenge in England and Newgrange in Ireland are ancient monuments aligned with solstice sunrises/sunsets. The phenomenon is reversed in the Southern Hemisphere, where December 21 brings the longest day. Modern pagans and Wiccans celebrate Yule on this date.",
          es: "La noche más larga del año durante el Solsticio de Invierno se llama 'Noche del Solsticio'. Esta noche representa el pico de la oscuridad invernal en el Hemisferio Norte, después de lo cual la luz del día aumenta gradualmente. Los pueblos antiguos rastreaban cuidadosamente este evento astronómico, ya que señalaba el 'regreso del sol' y la esperanza de la primavera. Muchas culturas han celebrado esta noche con festivales que involucran fuego y luz, simbolizando la batalla contra la oscuridad. Los ejemplos incluyen el tronco de Yule nórdico, Saturnalia romana y el Festival Dongzhi chino. Stonehenge en Inglaterra y Newgrange en Irlanda son monumentos antiguos alineados con amaneceres/atardeceres de solsticio. El fenómeno se invierte en el Hemisferio Sur, donde el 21 de diciembre trae el día más largo. Los paganos modernos y los wiccanos celebran Yule en esta fecha.",
          de: "Die längste Nacht des Jahres während der Wintersonnenwende wird 'Sonnenwende-Nacht' genannt. Diese Nacht stellt den Höhepunkt der Winterdunkelheit auf der Nordhalbkugel dar, danach nimmt das Tageslicht allmählich zu. Alte Völker verfolgten dieses astronomische Ereignis sorgfältig, da es die 'Rückkehr der Sonne' und Hoffnung auf den Frühling signalisierte. Viele Kulturen haben diese Nacht mit Festen gefeiert, die Feuer und Licht beinhalteten und den Kampf gegen die Dunkelheit symbolisierten. Beispiele sind der nordische Julbock, die römische Saturnalia und das chinesische Dongzhi-Fest. Stonehenge in England und Newgrange in Irland sind alte Monumente, die auf Sonnenwende-Sonnenauf-/untergänge ausgerichtet sind. Das Phänomen ist auf der Südhalbkugel umgekehrt, wo der 21. Dezember den längsten Tag bringt. Moderne Heiden und Wiccaner feiern Yule an diesem Datum.",
          nl: "De langste nacht van het jaar tijdens de winterzonnewende wordt 'zonnewendenacht' genoemd. Deze nacht vertegenwoordigt het hoogtepunt van winterduisternis op het noordelijk halfrond, waarna het daglicht geleidelijk toeneemt. Oude volkeren volgden deze astronomische gebeurtenis zorgvuldig, omdat het de 'terugkeer van de zon' en hoop op de lente signaleerde. Veel culturen hebben deze nacht gevierd met festivals met vuur en licht, die de strijd tegen duisternis symboliseerden. Voorbeelden zijn het Noorse Yule-blok, Romeinse Saturnalia en het Chinese Dongzhi Festival. Stonehenge in Engeland en Newgrange in Ierland zijn oude monumenten die zijn uitgelijnd met zonnewende zonsopgangen/zonsondergangen. Het fenomeen is omgekeerd op het zuidelijk halfrond, waar 21 december de langste dag brengt. Moderne heidenen en wiccans vieren Yule op deze datum."
        }
      }
    ],

    day22: [ /* 5 questions */
      {
        question: {
          en: "The Vietnam People's Army was founded on December 22, 1944. Who was its founding commander and later leader of North Vietnam?",
          es: "El Ejército Popular de Vietnam se fundó el 22 de diciembre de 1944. ¿Quién fue su comandante fundador y posterior líder de Vietnam del Norte?",
          de: "Die Vietnamesische Volksarmee wurde am 22. Dezember 1944 gegründet. Wer war ihr Gründungskommandant und späterer Führer Nordvietnams?",
          nl: "Het Vietnamese Volksleger werd opgericht op 22 december 1944. Wie was de oprichtende commandant en latere leider van Noord-Vietnam?"
        },
        options: [

          { en: "Ho Chi Minh", es: "Ho Chi Minh", de: "Ho Chi Minh", nl: "Ho Chi Minh" },

          { en: "Võ Nguyên Giáp", es: "Võ Nguyên Giáp", de: "Võ Nguyên Giáp", nl: "Võ Nguyên Giáp" },

          { en: "Ngô Đình Diệm", es: "Ngô Đình Diệm", de: "Ngô Đình Diệm", nl: "Ngô Đình Diệm" },

          { en: "Le Duan", es: "Le Duan", de: "Le Duan", nl: "Le Duan" }

        ],
        correctIndex: 1,
        explanation: {
          en: "General Võ Nguyên Giáp founded the Vietnam People's Army on December 22, 1944, with just 34 soldiers. He became one of history's most successful military commanders, defeating both French colonial forces at Dien Bien Phu (1954) and later the United States in the Vietnam War. Giáp was a self-taught military strategist who studied guerrilla warfare tactics. He served as Minister of Defense for nearly three decades. Under Ho Chi Minh's political leadership, Giáp's military genius was instrumental in Vietnam's independence struggle. His forces used innovative tactics including the Ho Chi Minh Trail supply network. Giáp authored several books on military strategy and revolutionary warfare. He died in 2013 at age 102, revered as a national hero.",
          es: "El General Võ Nguyên Giáp fundó el Ejército Popular de Vietnam el 22 de diciembre de 1944, con solo 34 soldados. Se convirtió en uno de los comandantes militares más exitosos de la historia, derrotando tanto a las fuerzas coloniales francesas en Dien Bien Phu (1954) como posteriormente a Estados Unidos en la Guerra de Vietnam. Giáp fue un estratega militar autodidacta que estudió tácticas de guerra de guerrillas. Sirvió como Ministro de Defensa durante casi tres décadas. Bajo el liderazgo político de Ho Chi Minh, el genio militar de Giáp fue fundamental en la lucha de Vietnam por la independencia. Sus fuerzas usaron tácticas innovadoras incluyendo la red de suministro de la Ruta Ho Chi Minh. Giáp escribió varios libros sobre estrategia militar y guerra revolucionaria. Murió en 2013 a los 102 años, venerado como héroe nacional.",
          de: "General Võ Nguyên Giáp gründete am 22. Dezember 1944 die Vietnamesische Volksarmee mit nur 34 Soldaten. Er wurde einer der erfolgreichsten Militärkommandanten der Geschichte und besiegte sowohl französische Kolonialstreitkräfte bei Dien Bien Phu (1954) als auch später die Vereinigten Staaten im Vietnamkrieg. Giáp war ein selbst ausgebildeter Militärstratege, der Guerillakriegstaktiken studierte. Er diente fast drei Jahrzehnte lang als Verteidigungsminister. Unter Ho Chi Minhs politischer Führung war Giáps militärisches Genie entscheidend für Vietnams Unabhängigkeitskampf. Seine Streitkräfte nutzten innovative Taktiken einschließlich des Ho-Chi-Minh-Pfad-Versorgungsnetzes. Giáp verfasste mehrere Bücher über Militärstrategie und revolutionäre Kriegsführung. Er starb 2013 im Alter von 102 Jahren und wurde als Nationalheld verehrt.",
          nl: "Generaal Võ Nguyên Giáp richtte op 22 december 1944 het Vietnamese Volksleger op met slechts 34 soldaten. Hij werd een van de meest succesvolle militaire commandanten uit de geschiedenis, die zowel de Franse koloniale troepen versloeg bij Dien Bien Phu (1954) als later de Verenigde Staten in de Vietnamoorlog. Giáp was een zelfonderwezen militaire strateeg die guerrillaoorlogstactieken bestudeerde. Hij diende bijna drie decennia als minister van Defensie. Onder de politieke leiding van Ho Chi Minh was Giáps militaire genialiteit instrumenteel in Vietnams onafhankelijkheidsstrijd. Zijn troepen gebruikten innovatieve tactieken waaronder het Ho Chi Minh Trail bevoorradingsnetwerk. Giáp schreef verschillende boeken over militaire strategie en revolutionaire oorlogsvoering. Hij stierf in 2013 op 102-jarige leeftijd, vereerd als nationaal held."
        },
        category: "history",
        difficulty: "hard",
        subjects: ["history", "military"]
      },
      {
        question: {
          en: "Italian composer Giacomo Puccini was born on December 22, 1858. Which of these famous operas did he NOT compose?",
          es: "El compositor italiano Giacomo Puccini nació el 22 de diciembre de 1858. ¿Cuál de estas óperas famosas NO compuso?",
          de: "Der italienische Komponist Giacomo Puccini wurde am 22. Dezember 1858 geboren. Welche dieser berühmten Opern komponierte er NICHT?",
          nl: "De Italiaanse componist Giacomo Puccini werd geboren op 22 december 1858. Welke van deze beroemde opera's heeft hij NIET gecomponeerd?"
        },
        options: [

          { en: "La Bohème", es: "La Bohème", de: "La Bohème", nl: "La Bohème" },

          { en: "Carmen", es: "Carmen", de: "Carmen", nl: "Carmen" },

          { en: "Tosca", es: "Tosca", de: "Tosca", nl: "Tosca" },

          { en: "Madama Butterfly", es: "Madama Butterfly", de: "Madama Butterfly", nl: "Madama Butterfly" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Carmen was composed by Georges Bizet, not Puccini. Giacomo Puccini composed La Bohème (1896), Tosca (1900), and Madama Butterfly (1904), which remain among the world's most performed operas. Puccini was a master of verismo opera, which portrayed realistic, everyday situations with emotional intensity. His works feature memorable melodies like 'O mio babbino caro' and 'Nessun dorma.' Puccini came from a family of church musicians in Lucca, Italy. His final opera, Turandot, was left unfinished at his death in 1924 and completed by Franco Alfano. Puccini's operas are known for their dramatic orchestration, beautiful arias, and tragic storylines featuring strong female protagonists.",
          es: "Carmen fue compuesta por Georges Bizet, no por Puccini. Giacomo Puccini compuso La Bohème (1896), Tosca (1900) y Madama Butterfly (1904), que siguen siendo algunas de las óperas más representadas del mundo. Puccini fue un maestro de la ópera verista, que retrataba situaciones realistas y cotidianas con intensidad emocional. Sus obras presentan melodías memorables como 'O mio babbino caro' y 'Nessun dorma.' Puccini provenía de una familia de músicos de iglesia en Lucca, Italia. Su ópera final, Turandot, quedó inconclusa a su muerte en 1924 y fue completada por Franco Alfano. Las óperas de Puccini son conocidas por su dramática orquestación, hermosas arias y trágicas historias protagonizadas por mujeres fuertes.",
          de: "Carmen wurde von Georges Bizet komponiert, nicht von Puccini. Giacomo Puccini komponierte La Bohème (1896), Tosca (1900) und Madama Butterfly (1904), die zu den weltweit meistaufgeführten Opern gehören. Puccini war ein Meister der Verismo-Oper, die realistische Alltagssituationen mit emotionaler Intensität darstellte. Seine Werke enthalten unvergessliche Melodien wie 'O mio babbino caro' und 'Nessun dorma.' Puccini stammte aus einer Familie von Kirchenmusikern in Lucca, Italien. Seine letzte Oper, Turandot, blieb bei seinem Tod 1924 unvollendet und wurde von Franco Alfano vervollständigt. Puccinis Opern sind bekannt für ihre dramatische Orchestrierung, schöne Arien und tragische Handlungen mit starken weiblichen Protagonistinnen.",
          nl: "Carmen werd gecomponeerd door Georges Bizet, niet door Puccini. Giacomo Puccini componeerde La Bohème (1896), Tosca (1900) en Madama Butterfly (1904), die tot de meest opgevoerde opera's ter wereld behoren. Puccini was een meester in de verismo-opera, die realistische, alledaagse situaties met emotionele intensiteit portretteerde. Zijn werken bevatten gedenkwaardige melodieën zoals 'O mio babbino caro' en 'Nessun dorma.' Puccini kwam uit een familie van kerkmusici in Lucca, Italië. Zijn laatste opera, Turandot, bleef onvoltooid bij zijn dood in 1924 en werd voltooid door Franco Alfano. Puccini's opera's staan bekend om hun dramatische orkestratie, prachtige aria's en tragische verhaallijnen met sterke vrouwelijke hoofdpersonen."
        },
        category: "arts",
        difficulty: "medium",
        subjects: ["arts", "music"]
      },
      {
        question: {
          en: "American broadcast journalist Diane Sawyer was born on December 22, 1945. For which news program did she serve as anchor from 2009 to 2014?",
          es: "La periodista estadounidense Diane Sawyer nació el 22 de diciembre de 1945. ¿Para qué programa de noticias fue presentadora de 2009 a 2014?",
          de: "Die amerikanische Rundfunkjournalistin Diane Sawyer wurde am 22. Dezember 1945 geboren. Für welche Nachrichtensendung war sie von 2009 bis 2014 Moderatorin?",
          nl: "De Amerikaanse omroepjournaliste Diane Sawyer werd geboren op 22 december 1945. Voor welk nieuwsprogramma was zij presentatrice van 2009 tot 2014?"
        },
        options: [

          { en: "60 Minutes", es: "60 Minutes", de: "60 Minutes", nl: "60 Minutes" },

          { en: "ABC World News", es: "ABC World News", de: "ABC World News", nl: "ABC World News" },

          { en: "NBC Nightly News", es: "NBC Nightly News", de: "NBC Nightly News", nl: "NBC Nightly News" },

          { en: "CBS Evening News", es: "CBS Evening News", de: "CBS Evening News", nl: "CBS Evening News" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Diane Sawyer anchored ABC World News from 2009 to 2014, becoming one of the first women to solo anchor a major network evening newscast. She began her career working for President Nixon, then moved to CBS News where she co-anchored 60 Minutes. Sawyer later joined ABC, where she co-anchored Good Morning America and Primetime. She conducted landmark interviews with world leaders, celebrities, and newsmakers, including Fidel Castro, Saddam Hussein, and Michael Jackson. Known for her empathetic interviewing style, Sawyer won multiple Emmy Awards and Peabody Awards. She stepped down from World News in 2014 but continues contributing to ABC News. Her career spans over five decades of groundbreaking journalism.",
          es: "Diane Sawyer presentó ABC World News de 2009 a 2014, convirtiéndose en una de las primeras mujeres en presentar en solitario un noticiero vespertino de una cadena importante. Comenzó su carrera trabajando para el presidente Nixon, luego se trasladó a CBS News donde copresentó 60 Minutes. Sawyer posteriormente se unió a ABC, donde copresentó Good Morning America y Primetime. Realizó entrevistas históricas con líderes mundiales, celebridades y personalidades noticiosas, incluidos Fidel Castro, Saddam Hussein y Michael Jackson. Conocida por su estilo de entrevista empático, Sawyer ganó múltiples premios Emmy y premios Peabody. Dejó World News en 2014 pero continúa contribuyendo a ABC News. Su carrera abarca más de cinco décadas de periodismo innovador.",
          de: "Diane Sawyer moderierte ABC World News von 2009 bis 2014 und wurde eine der ersten Frauen, die allein eine große Abendnachrichtensendung eines Netzwerks moderierte. Sie begann ihre Karriere in der Arbeit für Präsident Nixon, wechselte dann zu CBS News, wo sie 60 Minutes co-moderierte. Sawyer kam später zu ABC, wo sie Good Morning America und Primetime co-moderierte. Sie führte wegweisende Interviews mit Weltführern, Prominenten und Nachrichtenmachern, darunter Fidel Castro, Saddam Hussein und Michael Jackson. Bekannt für ihren empathischen Interviewstil gewann Sawyer mehrere Emmy Awards und Peabody Awards. Sie trat 2014 von World News zurück, trägt aber weiterhin zu ABC News bei. Ihre Karriere umfasst über fünf Jahrzehnte bahnbrechenden Journalismus.",
          nl: "Diane Sawyer presenteerde ABC World News van 2009 tot 2014 en werd een van de eerste vrouwen die solo een groot avondnieuwsprogramma van een netwerk presenteerde. Ze begon haar carrière werkend voor president Nixon, verhuisde vervolgens naar CBS News waar ze 60 Minutes co-presenteerde. Sawyer kwam later bij ABC, waar ze Good Morning America en Primetime co-presenteerde. Ze voerde belangrijke interviews met wereldleiders, beroemdheden en nieuwsmakers, waaronder Fidel Castro, Saddam Hussein en Michael Jackson. Bekend om haar empathische interviewstijl won Sawyer meerdere Emmy Awards en Peabody Awards. Ze trad terug van World News in 2014 maar blijft bijdragen aan ABC News. Haar carrière omspant meer dan vijf decennia baanbrekende journalistiek."
        },
        category: "arts",
        difficulty: "medium",
        subjects: ["arts", "media"]
      },
      {
        question: {
          en: "What famous aria from Puccini's opera Turandot is often performed at major sporting events and competitions?",
          es: "¿Qué famosa aria de la ópera Turandot de Puccini se interpreta a menudo en eventos deportivos y competiciones importantes?",
          de: "Welche berühmte Arie aus Puccinis Oper Turandot wird oft bei großen Sportveranstaltungen und Wettbewerben aufgeführt?",
          nl: "Welke beroemde aria uit Puccini's opera Turandot wordt vaak uitgevoerd bij grote sportevenementen en wedstrijden?"
        },
        options: [

          { en: "La donna è mobile", es: "La donna è mobile", de: "La donna è mobile", nl: "La donna è mobile" },

          { en: "Nessun dorma", es: "Nessun dorma", de: "Nessun dorma", nl: "Nessun dorma" },

          { en: "Che gelida manina", es: "Che gelida manina", de: "Che gelida manina", nl: "Che gelida manina" },

          { en: "E lucevan le stelle", es: "E lucevan le stelle", de: "E lucevan le stelle", nl: "E lucevan le stelle" }

        ],
        correctIndex: 1,
        explanation: {
          en: "'Nessun dorma' (None shall sleep) became globally famous when Luciano Pavarotti performed it at the 1990 FIFA World Cup in Italy. The aria is sung by Prince Calaf in Turandot's third act, expressing his confidence in winning Princess Turandot's hand despite her deadly riddles. Its dramatic climax on 'Vincerò!' (I will win!) makes it perfect for competitive events. The Three Tenors (Pavarotti, Domingo, Carreras) popularized classical music through their performance of this piece. The aria has been featured in numerous films, commercials, and Olympic ceremonies. Ironically, Puccini died before completing Turandot, and 'Nessun dorma' was finished by Franco Alfano based on Puccini's sketches.",
          es: "'Nessun dorma' (Nadie duerma) se hizo mundialmente famosa cuando Luciano Pavarotti la interpretó en la Copa Mundial de la FIFA 1990 en Italia. El aria es cantada por el Príncipe Calaf en el tercer acto de Turandot, expresando su confianza en ganar la mano de la Princesa Turandot a pesar de sus acertijos mortales. Su clímax dramático en '¡Vincerò!' (¡Venceré!) la hace perfecta para eventos competitivos. Los Tres Tenores (Pavarotti, Domingo, Carreras) popularizaron la música clásica a través de su interpretación de esta pieza. El aria ha aparecido en numerosas películas, comerciales y ceremonias olímpicas. Irónicamente, Puccini murió antes de completar Turandot, y 'Nessun dorma' fue terminada por Franco Alfano basándose en los bocetos de Puccini.",
          de: "'Nessun dorma' (Keiner schlafe) wurde weltweit berühmt, als Luciano Pavarotti sie bei der FIFA-Weltmeisterschaft 1990 in Italien aufführte. Die Arie wird von Prinz Calaf im dritten Akt von Turandot gesungen und drückt sein Vertrauen aus, die Hand von Prinzessin Turandot trotz ihrer tödlichen Rätsel zu gewinnen. Ihr dramatischer Höhepunkt auf 'Vincerò!' (Ich werde siegen!) macht sie perfekt für Wettbewerbsveranstaltungen. Die drei Tenöre (Pavarotti, Domingo, Carreras) popularisierten klassische Musik durch ihre Aufführung dieses Stücks. Die Arie wurde in zahlreichen Filmen, Werbespots und olympischen Zeremonien verwendet. Ironischerweise starb Puccini, bevor er Turandot vollendete, und 'Nessun dorma' wurde von Franco Alfano auf der Grundlage von Puccinis Skizzen fertiggestellt.",
          nl: "'Nessun dorma' (Niemand zal slapen) werd wereldwijd beroemd toen Luciano Pavarotti het uitvoerde bij het FIFA Wereldkampioenschap 1990 in Italië. De aria wordt gezongen door Prins Calaf in de derde akte van Turandot, waarin hij zijn vertrouwen uitdrukt om de hand van Prinses Turandot te winnen ondanks haar dodelijke raadsels. De dramatische climax op 'Vincerò!' (Ik zal winnen!) maakt het perfect voor competitieve evenementen. De Drie Tenoren (Pavarotti, Domingo, Carreras) populariseerden klassieke muziek door hun uitvoering van dit stuk. De aria is te zien geweest in talrijke films, commercials en Olympische ceremonies. Ironisch genoeg stierf Puccini voordat hij Turandot voltooide, en 'Nessun dorma' werd afgemaakt door Franco Alfano op basis van Puccini's schetsen."
        },
        category: "arts",
        difficulty: "medium",
        subjects: ["arts", "music"]
      },
      {
        question: {
          en: "Which military strategy, emphasizing mobility and avoiding direct confrontation with superior forces, was perfected by General Giáp?",
          es: "¿Qué estrategia militar, que enfatiza la movilidad y evita el enfrentamiento directo con fuerzas superiores, fue perfeccionada por el General Giáp?",
          de: "Welche Militärstrategie, die Mobilität betont und direkte Konfrontation mit überlegenen Kräften vermeidet, wurde von General Giáp perfektioniert?",
          nl: "Welke militaire strategie, met nadruk op mobiliteit en het vermijden van directe confrontatie met superieure strijdkrachten, werd geperfectioneerd door generaal Giáp?"
        },
        options: [

          { en: "Blitzkrieg warfare", es: "Guerra relámpago", de: "Blitzkrieg", nl: "Bliksemoorlog" },

          { en: "Guerrilla warfare", es: "Guerra de guerrillas", de: "Guerillakrieg", nl: "Guerrillaoorlog" },

          { en: "Trench warfare", es: "Guerra de trincheras", de: "Grabenkrieg", nl: "Loopgravenoorlog" },

          { en: "Naval blockade", es: "Bloqueo naval", de: "Seeblockade", nl: "Zeeblokkade" }

        ],
        correctIndex: 1,
        explanation: {
          en: "General Võ Nguyên Giáp perfected guerrilla warfare tactics, using hit-and-run attacks, ambushes, and knowledge of local terrain to defeat technologically superior enemies. This strategy proved devastatingly effective against French forces at Dien Bien Phu and later against American forces. Giáp's approach combined Mao Zedong's theories with Vietnamese conditions, emphasizing 'people's war' where the entire population supports the military effort. His forces would strike quickly, then disappear into the jungle or blend with civilians. The strategy included three phases: defensive, equilibrium, and offensive. Giáp's tactics influenced revolutionary movements worldwide. The Ho Chi Minh Trail exemplified this strategy, being a constantly shifting supply route impossible for conventional forces to shut down.",
          es: "El General Võ Nguyên Giáp perfeccionó las tácticas de guerra de guerrillas, usando ataques sorpresa, emboscadas y conocimiento del terreno local para derrotar enemigos tecnológicamente superiores. Esta estrategia demostró ser devastadoramente efectiva contra las fuerzas francesas en Dien Bien Phu y posteriormente contra las fuerzas estadounidenses. El enfoque de Giáp combinó las teorías de Mao Zedong con las condiciones vietnamitas, enfatizando la 'guerra del pueblo' donde toda la población apoya el esfuerzo militar. Sus fuerzas atacaban rápidamente y luego desaparecían en la selva o se mezclaban con civiles. La estrategia incluía tres fases: defensiva, equilibrio y ofensiva. Las tácticas de Giáp influyeron en movimientos revolucionarios en todo el mundo. La Ruta Ho Chi Minh ejemplificó esta estrategia, siendo una ruta de suministro en constante cambio imposible de cerrar para fuerzas convencionales.",
          de: "General Võ Nguyên Giáp perfektionierte Guerillakriegstaktiken mit Hit-and-Run-Angriffen, Hinterhalten und Kenntnis des lokalen Geländes, um technologisch überlegene Feinde zu besiegen. Diese Strategie erwies sich als verheerend effektiv gegen französische Streitkräfte bei Dien Bien Phu und später gegen amerikanische Streitkräfte. Giáps Ansatz kombinierte Mao Zedongs Theorien mit vietnamesischen Bedingungen und betonte den 'Volkskrieg', bei dem die gesamte Bevölkerung die militärischen Bemühungen unterstützt. Seine Streitkräfte schlugen schnell zu und verschwanden dann im Dschungel oder mischten sich unter Zivilisten. Die Strategie umfasste drei Phasen: defensiv, Gleichgewicht und offensiv. Giáps Taktiken beeinflussten revolutionäre Bewegungen weltweit. Der Ho-Chi-Minh-Pfad veranschaulichte diese Strategie als ständig wechselnde Versorgungsroute, die für konventionelle Streitkräfte unmöglich zu schließen war.",
          nl: "Generaal Võ Nguyên Giáp perfectioneerde guerrillaoorlogstactieken, met hit-and-run aanvallen, hinderlagen en kennis van lokaal terrein om technologisch superieure vijanden te verslaan. Deze strategie bleek verwoestend effectief tegen Franse troepen bij Dien Bien Phu en later tegen Amerikaanse troepen. Giáps aanpak combineerde Mao Zedongs theorieën met Vietnamese omstandigheden, met nadruk op 'volksoorlog' waarbij de gehele bevolking de militaire inspanning ondersteunt. Zijn troepen vielen snel aan en verdwenen dan in de jungle of mengden zich met burgers. De strategie omvatte drie fasen: defensief, evenwicht en offensief. Giáps tactieken beïnvloedden revolutionaire bewegingen wereldwijd. De Ho Chi Minh Trail illustreerde deze strategie, als een voortdurend verschuivende bevoorradingsroute onmogelijk voor conventionele troepen om te sluiten."
        },
        category: "history",
        difficulty: "easy",
        subjects: ["history", "military"]
      }
    ],

    day23: [ /* 5 questions */
      {
        question: {
          en: "The Federal Reserve System, the central banking system of the United States, was created on December 23, 1913. Which president signed the Federal Reserve Act into law?",
          es: "El Sistema de la Reserva Federal, el sistema bancario central de Estados Unidos, se creó el 23 de diciembre de 1913. ¿Qué presidente firmó la Ley de la Reserva Federal?",
          de: "Das Federal Reserve System, das Zentralbanksystem der Vereinigten Staaten, wurde am 23. Dezember 1913 geschaffen. Welcher Präsident unterzeichnete das Federal Reserve Act?",
          nl: "Het Federal Reserve System, het centrale banksysteem van de Verenigde Staten, werd opgericht op 23 december 1913. Welke president ondertekende de Federal Reserve Act?"
        },
        options: [

          { en: "Theodore Roosevelt", es: "Theodore Roosevelt", de: "Theodore Roosevelt", nl: "Theodore Roosevelt" },

          { en: "William Howard Taft", es: "William Howard Taft", de: "William Howard Taft", nl: "William Howard Taft" },

          { en: "Woodrow Wilson", es: "Woodrow Wilson", de: "Woodrow Wilson", nl: "Woodrow Wilson" },

          { en: "Warren G. Harding", es: "Warren G. Harding", de: "Warren G. Harding", nl: "Warren G. Harding" }

        ],
        correctIndex: 2,
        explanation: {
          en: "President Woodrow Wilson signed the Federal Reserve Act on December 23, 1913, creating America's central banking system. The legislation came after the Panic of 1907 revealed the need for a more stable financial system. The Federal Reserve was designed to provide the nation with a safer, more flexible monetary and financial system. It consists of 12 regional Federal Reserve Banks coordinated by the Board of Governors in Washington, D.C. The Fed's primary functions include conducting monetary policy, supervising banks, maintaining financial stability, and providing banking services. Its creation remains controversial, with some viewing it as necessary for economic stability and others criticizing its private-public structure. The Fed gained more independence and power following the Great Depression.",
          es: "El presidente Woodrow Wilson firmó la Ley de la Reserva Federal el 23 de diciembre de 1913, creando el sistema bancario central de América. La legislación llegó después de que el Pánico de 1907 revelara la necesidad de un sistema financiero más estable. La Reserva Federal fue diseñada para proporcionar a la nación un sistema monetario y financiero más seguro y flexible. Consiste en 12 Bancos de la Reserva Federal regionales coordinados por la Junta de Gobernadores en Washington, D.C. Las funciones principales de la Fed incluyen conducir la política monetaria, supervisar bancos, mantener la estabilidad financiera y proporcionar servicios bancarios. Su creación sigue siendo controvertida, con algunos viéndola como necesaria para la estabilidad económica y otros criticando su estructura público-privada. La Fed ganó más independencia y poder después de la Gran Depresión.",
          de: "Präsident Woodrow Wilson unterzeichnete am 23. Dezember 1913 das Federal Reserve Act und schuf damit Amerikas Zentralbanksystem. Die Gesetzgebung erfolgte, nachdem die Panik von 1907 die Notwendigkeit eines stabileren Finanzsystems offenbart hatte. Die Federal Reserve wurde entwickelt, um der Nation ein sichereres, flexibleres Währungs- und Finanzsystem zu bieten. Sie besteht aus 12 regionalen Federal Reserve Banks, die vom Board of Governors in Washington, D.C. koordiniert werden. Die Hauptfunktionen der Fed umfassen Geldpolitik, Bankenaufsicht, Aufrechterhaltung der Finanzstabilität und Bereitstellung von Bankdienstleistungen. Ihre Schaffung bleibt umstritten, wobei einige sie als notwendig für wirtschaftliche Stabilität ansehen und andere ihre privat-öffentliche Struktur kritisieren. Die Fed gewann nach der Großen Depression mehr Unabhängigkeit und Macht.",
          nl: "President Woodrow Wilson ondertekende op 23 december 1913 de Federal Reserve Act en creëerde daarmee Amerika's centrale banksysteem. De wetgeving kwam nadat de Paniek van 1907 de noodzaak van een stabieler financieel systeem had onthuld. De Federal Reserve was ontworpen om de natie een veiliger, flexibeler monetair en financieel systeem te bieden. Het bestaat uit 12 regionale Federal Reserve Banks gecoördineerd door de Raad van Bestuur in Washington, D.C. De primaire functies van de Fed omvatten het voeren van monetair beleid, toezicht op banken, handhaving van financiële stabiliteit en het verlenen van bankdiensten. De oprichting blijft controversieel, waarbij sommigen het als noodzakelijk voor economische stabiliteit zien en anderen de publiek-private structuur bekritiseren. De Fed verwierf meer onafhankelijkheid en macht na de Grote Depressie."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "economics"]
      },
      {
        question: {
          en: "Tokyo Tower, inspired by the Eiffel Tower, was completed on December 23, 1958. How tall is this iconic Japanese landmark?",
          es: "La Torre de Tokio, inspirada en la Torre Eiffel, se completó el 23 de diciembre de 1958. ¿Cuánto mide este icónico monumento japonés?",
          de: "Der Tokyo Tower, inspiriert vom Eiffelturm, wurde am 23. Dezember 1958 fertiggestellt. Wie hoch ist dieses ikonische japanische Wahrzeichen?",
          nl: "De Tokyo Tower, geïnspireerd door de Eiffeltoren, werd voltooid op 23 december 1958. Hoe hoog is dit iconische Japanse monument?"
        },
        options: [

          { en: "288 meters", es: "288 metros", de: "288 Meter", nl: "288 meter" },

          { en: "333 meters", es: "333 metros", de: "333 Meter", nl: "333 meter" },

          { en: "300 meters", es: "300 metros", de: "300 Meter", nl: "300 meter" },

          { en: "350 meters", es: "350 metros", de: "350 Meter", nl: "350 meter" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Tokyo Tower stands 333 meters (1,093 feet) tall, making it 13 meters taller than the Eiffel Tower. Built in the post-war period as a symbol of Japan's rebirth and modernization, it served as a broadcasting antenna for television and radio. The distinctive orange and white color scheme complies with international air safety regulations. The tower features two observation decks offering panoramic views of Tokyo and, on clear days, Mount Fuji. Despite competition from the newer Tokyo Skytree (634m, completed 2012), Tokyo Tower remains a beloved landmark and popular tourist attraction. It appears frequently in Japanese popular culture, films, and anime. The structure required 4,000 tons of steel, some sourced from melted-down U.S. tanks from the Korean War.",
          es: "La Torre de Tokio tiene 333 metros (1,093 pies) de altura, lo que la hace 13 metros más alta que la Torre Eiffel. Construida en el período de posguerra como símbolo del renacimiento y modernización de Japón, sirvió como antena de transmisión para televisión y radio. El distintivo esquema de colores naranja y blanco cumple con las regulaciones internacionales de seguridad aérea. La torre cuenta con dos plataformas de observación que ofrecen vistas panorámicas de Tokio y, en días despejados, el Monte Fuji. A pesar de la competencia del más nuevo Tokyo Skytree (634m, completado en 2012), la Torre de Tokio sigue siendo un monumento querido y una atracción turística popular. Aparece frecuentemente en la cultura popular japonesa, películas y anime. La estructura requirió 4,000 toneladas de acero, algunas provenientes de tanques estadounidenses fundidos de la Guerra de Corea.",
          de: "Der Tokyo Tower ist 333 Meter (1.093 Fuß) hoch und damit 13 Meter höher als der Eiffelturm. Im Nachkriegszeitraum als Symbol für Japans Wiedergeburt und Modernisierung erbaut, diente er als Sendeantenne für Fernsehen und Radio. Das charakteristische orange-weiße Farbschema entspricht internationalen Luftsicherheitsvorschriften. Der Turm verfügt über zwei Aussichtsplattformen mit Panoramablick auf Tokio und bei klarem Wetter auf den Berg Fuji. Trotz Konkurrenz durch den neueren Tokyo Skytree (634m, fertiggestellt 2012) bleibt der Tokyo Tower ein beliebtes Wahrzeichen und eine beliebte Touristenattraktion. Er erscheint häufig in der japanischen Populärkultur, Filmen und Anime. Die Struktur benötigte 4.000 Tonnen Stahl, teilweise aus eingeschmolzenen US-Panzern aus dem Koreakrieg.",
          nl: "De Tokyo Tower is 333 meter (1.093 voet) hoog, waardoor hij 13 meter hoger is dan de Eiffeltoren. Gebouwd in de naoorlogse periode als symbool van Japans wedergeboorte en modernisering, diende het als zendantenne voor televisie en radio. Het kenmerkende oranje en witte kleurenschema voldoet aan internationale luchtvaartregelgeving. De toren heeft twee observatiedekken met panoramische uitzichten over Tokyo en, op heldere dagen, Mount Fuji. Ondanks concurrentie van de nieuwere Tokyo Skytree (634m, voltooid 2012) blijft Tokyo Tower een geliefd monument en populaire toeristische attractie. Het verschijnt vaak in Japanse populaire cultuur, films en anime. De structuur vereiste 4.000 ton staal, waarvan een deel afkomstig was van gesmolten Amerikaanse tanks uit de Koreaanse Oorlog."
        },
        category: "geography",
        difficulty: "hard",
        subjects: ["geography", "architecture"]
      },
      {
        question: {
          en: "Emperor Akihito of Japan was born on December 23, 1933. What historic action did he take in 2019?",
          es: "El emperador Akihito de Japón nació el 23 de diciembre de 1933. ¿Qué acción histórica tomó en 2019?",
          de: "Kaiser Akihito von Japan wurde am 23. Dezember 1933 geboren. Welche historische Handlung vollzog er 2019?",
          nl: "Keizer Akihito van Japan werd geboren op 23 december 1933. Welke historische actie ondernam hij in 2019?"
        },
        options: [

          { en: "He abolished the monarchy", es: "Abolió la monarquía", de: "Er schaffte die Monarchie ab", nl: "Hij schafte de monarchie af" },

          { en: "He became the first Japanese emperor to abdicate in over 200 years", es: "Se convirtió en el primer emperador japonés en abdicar en más de 200 años", de: "Er wurde der erste japanische Kaiser, der in über 200 Jahren abdankte", nl: "Hij werd de eerste Japanse keizer die in meer dan 200 jaar afstand deed" },

          { en: "He declared war", es: "Declaró la guerra", de: "Er erklärte den Krieg", nl: "Hij verklaarde oorlog" },

          { en: "He moved the capital", es: "Trasladó la capital", de: "Er verlegte die Hauptstadt", nl: "Hij verplaatste de hoofdstad" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Emperor Akihito abdicated on April 30, 2019, becoming the first Japanese emperor to abdicate in over 200 years since Emperor Kōkaku in 1817. He cited his advancing age and declining health as reasons. His era name was 'Heisei' (Achieving Peace), spanning 1989-2019. Akihito's reign saw him break with tradition by marrying a commoner, Michiko Shōda, and taking a more public, accessible role than previous emperors. He expressed remorse for Japan's wartime actions and worked toward reconciliation with neighboring countries. His son Naruhito succeeded him, beginning the 'Reiwa' (Beautiful Harmony) era. Akihito became Emperor Emeritus and continues living quietly in retirement. His abdication required a special law passed by the Japanese Diet.",
          es: "El emperador Akihito abdicó el 30 de abril de 2019, convirtiéndose en el primer emperador japonés en abdicar en más de 200 años desde el emperador Kōkaku en 1817. Citó su edad avanzada y su salud en declive como razones. Su nombre de era fue 'Heisei' (Logrando la Paz), abarcando 1989-2019. El reinado de Akihito lo vio romper con la tradición al casarse con una plebeya, Michiko Shōda, y asumir un papel más público y accesible que emperadores anteriores. Expresó remordimiento por las acciones de guerra de Japón y trabajó hacia la reconciliación con países vecinos. Su hijo Naruhito lo sucedió, comenzando la era 'Reiwa' (Bella Armonía). Akihito se convirtió en Emperador Emérito y continúa viviendo tranquilamente retirado. Su abdicación requirió una ley especial aprobada por la Dieta Japonesa.",
          de: "Kaiser Akihito dankte am 30. April 2019 ab und wurde damit der erste japanische Kaiser, der in über 200 Jahren seit Kaiser Kōkaku 1817 abdankte. Er nannte sein fortgeschrittenes Alter und seinen schlechter werdenden Gesundheitszustand als Gründe. Sein Ära-Name war 'Heisei' (Frieden erreichen), der 1989-2019 umfasste. Akihitos Herrschaft sah ihn mit der Tradition brechen, indem er eine Bürgerliche, Michiko Shōda, heiratete und eine öffentlichere, zugänglichere Rolle als frühere Kaiser einnahm. Er drückte Reue über Japans Kriegshandlungen aus und arbeitete auf Versöhnung mit Nachbarländern hin. Sein Sohn Naruhito folgte ihm nach und begann die 'Reiwa' (Schöne Harmonie) Ära. Akihito wurde Kaiser Emeritus und lebt weiterhin ruhig im Ruhestand. Seine Abdankung erforderte ein Sondergesetz, das vom japanischen Parlament verabschiedet wurde.",
          nl: "Keizer Akihito deed afstand van de troon op 30 april 2019 en werd daarmee de eerste Japanse keizer die in meer dan 200 jaar afstand deed sinds keizer Kōkaku in 1817. Hij noemde zijn gevorderde leeftijd en afnemende gezondheid als redenen. Zijn eranaam was 'Heisei' (Vrede bereiken), van 1989-2019. Akihito's bewind zag hem breken met traditie door te trouwen met een burger, Michiko Shōda, en een meer publieke, toegankelijke rol aan te nemen dan eerdere keizers. Hij uitte spijt over Japans oorlogsdaden en werkte aan verzoening met buurlanden. Zijn zoon Naruhito volgde hem op en begon het 'Reiwa' (Mooie Harmonie) tijdperk. Akihito werd Emeritus Keizer en blijft rustig leven in zijn pensioen. Zijn troonsafstand vereiste een speciale wet aangenomen door de Japanse Diet."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "politics"]
      },
      {
        question: {
          en: "What is the primary function of the Federal Reserve System in the United States?",
          es: "¿Cuál es la función principal del Sistema de la Reserva Federal en Estados Unidos?",
          de: "Was ist die Hauptfunktion des Federal Reserve Systems in den Vereinigten Staaten?",
          nl: "Wat is de primaire functie van het Federal Reserve System in de Verenigde Staten?"
        },
        options: [

          { en: "Collecting taxes", es: "Recaudar impuestos", de: "Steuern eintreiben", nl: "Belastingen innen" },

          { en: "Conducting monetary policy", es: "Conducir la política monetaria", de: "Geldpolitik durchführen", nl: "Monetair beleid voeren" },

          { en: "Creating laws", es: "Crear leyes", de: "Gesetze erstellen", nl: "Wetten maken" },

          { en: "Managing the military budget", es: "Gestionar el presupuesto militar", de: "Militärbudget verwalten", nl: "Militair budget beheren" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Federal Reserve's primary function is conducting monetary policy by influencing money and credit conditions to pursue maximum employment, stable prices, and moderate long-term interest rates. The Fed uses several tools including setting interest rates (the federal funds rate), buying and selling government securities (open market operations), and adjusting reserve requirements for banks. During economic downturns, the Fed typically lowers interest rates and increases money supply to stimulate growth. During inflation, it raises rates to cool the economy. The Fed also supervises and regulates banks, maintains financial system stability, and provides banking services to the government and financial institutions. The chair of the Federal Reserve is often called the second most powerful person in America after the president.",
          es: "La función principal de la Reserva Federal es conducir la política monetaria influyendo en las condiciones de dinero y crédito para buscar el máximo empleo, precios estables y tasas de interés moderadas a largo plazo. La Fed usa varias herramientas incluyendo establecer tasas de interés (la tasa de fondos federales), comprar y vender valores gubernamentales (operaciones de mercado abierto) y ajustar requisitos de reserva para bancos. Durante recesiones económicas, la Fed típicamente baja tasas de interés y aumenta la oferta monetaria para estimular el crecimiento. Durante la inflación, sube las tasas para enfriar la economía. La Fed también supervisa y regula bancos, mantiene la estabilidad del sistema financiero y proporciona servicios bancarios al gobierno e instituciones financieras. El presidente de la Reserva Federal es a menudo llamado la segunda persona más poderosa de América después del presidente.",
          de: "Die Hauptfunktion der Federal Reserve ist die Durchführung der Geldpolitik durch Beeinflussung der Geld- und Kreditbedingungen zur Verfolgung maximaler Beschäftigung, stabiler Preise und moderater langfristiger Zinssätze. Die Fed verwendet mehrere Instrumente, darunter die Festlegung von Zinssätzen (Federal Funds Rate), Kauf und Verkauf von Staatsanleihen (Offenmarktgeschäfte) und Anpassung der Mindestreserveanforderungen für Banken. Während wirtschaftlicher Abschwünge senkt die Fed typischerweise die Zinssätze und erhöht die Geldmenge zur Stimulierung des Wachstums. Bei Inflation erhöht sie die Zinsen zur Abkühlung der Wirtschaft. Die Fed beaufsichtigt und reguliert auch Banken, erhält die Stabilität des Finanzsystems aufrecht und bietet Bankdienstleistungen für Regierung und Finanzinstitutionen. Der Vorsitzende der Federal Reserve wird oft als zweitmächtigste Person in Amerika nach dem Präsidenten bezeichnet.",
          nl: "De primaire functie van de Federal Reserve is het voeren van monetair beleid door geld- en kredietvoorwaarden te beïnvloeden om maximale werkgelegenheid, stabiele prijzen en gematigde langetermijnrentes na te streven. De Fed gebruikt verschillende instrumenten waaronder het vaststellen van rentetarieven (de federal funds rate), het kopen en verkopen van overheidspapieren (openmarkttransacties) en het aanpassen van reserveverplichtingen voor banken. Tijdens economische neergang verlaagt de Fed doorgaans de rentes en verhoogt de geldhoeveelheid om groei te stimuleren. Tijdens inflatie verhoogt het de rentes om de economie af te koelen. De Fed houdt ook toezicht op en reguleert banken, handhaaft de stabiliteit van het financiële systeem en verleent bankdiensten aan de overheid en financiële instellingen. De voorzitter van de Federal Reserve wordt vaak de op één na machtigste persoon in Amerika genoemd na de president."
        },
        category: "economics",
        difficulty: "medium",
        subjects: ["economics", "politics"]
      },
      {
        question: {
          en: "Tokyo Tower was constructed from which material, some of which came from an unusual wartime source?",
          es: "La Torre de Tokio fue construida de qué material, parte del cual provino de una inusual fuente de tiempos de guerra?",
          de: "Der Tokyo Tower wurde aus welchem Material gebaut, von dem ein Teil aus einer ungewöhnlichen Kriegsquelle stammte?",
          nl: "De Tokyo Tower werd gebouwd van welk materiaal, waarvan een deel uit een ongebruikelijke oorlogsbron kwam?"
        },
        options: [

          { en: "Aluminum from aircraft", es: "Aluminio de aviones", de: "Aluminium von Flugzeugen", nl: "Aluminium van vliegtuigen" },

          { en: "Steel from tanks", es: "Acero de tanques", de: "Stahl von Panzern", nl: "Staal van tanks" },

          { en: "Concrete from bunkers", es: "Hormigón de búnkeres", de: "Beton von Bunkern", nl: "Beton van bunkers" },

          { en: "Bronze from artillery", es: "Bronce de artillería", de: "Bronze von Artillerie", nl: "Brons van artillerie" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Tokyo Tower was constructed using 4,000 tons of steel, with some sourced from melted-down American tanks from the Korean War (1950-1953). This symbolically represents transformation from instruments of war to a peaceful monument. The tower was built during Japan's rapid post-war reconstruction period, when materials were scarce and recycling was essential. The engineering was led by Tachū Naitō, who designed it to withstand earthquakes and typhoons. Despite using steel, the tower is painted international orange and white, creating its distinctive appearance visible throughout Tokyo. The reuse of war materials for this peaceful broadcasting tower represents Japan's transformation from militarism to pacifism. The tower's construction took only 18 months, demonstrating Japan's impressive post-war industrial recovery.",
          es: "La Torre de Tokio fue construida usando 4,000 toneladas de acero, con algunas provenientes de tanques estadounidenses fundidos de la Guerra de Corea (1950-1953). Esto representa simbólicamente la transformación de instrumentos de guerra a un monumento pacífico. La torre fue construida durante el período de rápida reconstrucción posguerra de Japón, cuando los materiales eran escasos y el reciclaje era esencial. La ingeniería fue liderada por Tachū Naitō, quien la diseñó para resistir terremotos y tifones. A pesar de usar acero, la torre está pintada de naranja internacional y blanco, creando su distintiva apariencia visible en todo Tokio. La reutilización de materiales de guerra para esta torre de transmisión pacífica representa la transformación de Japón del militarismo al pacifismo. La construcción de la torre tomó solo 18 meses, demostrando la impresionante recuperación industrial posguerra de Japón.",
          de: "Der Tokyo Tower wurde mit 4.000 Tonnen Stahl gebaut, von denen einige aus eingeschmolzenen amerikanischen Panzern aus dem Koreakrieg (1950-1953) stammten. Dies symbolisiert die Transformation von Kriegsinstrumenten zu einem friedlichen Monument. Der Turm wurde während Japans schneller Nachkriegswiederaufbauphase gebaut, als Materialien knapp waren und Recycling essentiell war. Die Technik wurde von Tachū Naitō geleitet, der ihn so konzipierte, dass er Erdbeben und Taifunen standhält. Trotz Verwendung von Stahl ist der Turm in internationalem Orange und Weiß gestrichen, was sein charakteristisches, in ganz Tokio sichtbares Aussehen schafft. Die Wiederverwendung von Kriegsmaterialien für diesen friedlichen Sendeturm repräsentiert Japans Transformation vom Militarismus zum Pazifismus. Der Bau des Turms dauerte nur 18 Monate und demonstrierte Japans beeindruckende industrielle Nachkriegserholung.",
          nl: "De Tokyo Tower werd gebouwd met 4.000 ton staal, waarvan een deel afkomstig was van gesmolten Amerikaanse tanks uit de Koreaanse Oorlog (1950-1953). Dit vertegenwoordigt symbolisch de transformatie van oorlogsinstrumenten naar een vredig monument. De toren werd gebouwd tijdens Japans snelle naoorlogse wederopbouwperiode, toen materialen schaars waren en recycling essentieel was. De engineering werd geleid door Tachū Naitō, die het ontwierp om aardbevingen en tyfoons te weerstaan. Ondanks het gebruik van staal is de toren geverfd in internationaal oranje en wit, wat zijn kenmerkende uiterlijk creëert dat in heel Tokyo zichtbaar is. Het hergebruik van oorlogsmaterialen voor deze vredige omroeptoren vertegenwoordigt Japans transformatie van militarisme naar pacifisme. De constructie van de toren duurde slechts 18 maanden, wat Japans indrukwekkende naoorlogse industriële herstel demonstreerde."
        },
        category: "history",
        difficulty: "hard",
        subjects: ["history", "architecture"]
      }
    ],

    day24: [ /* 5 questions */
      {
        question: {
          en: "December 24 is Christmas Eve, celebrated by Christians worldwide. In which country did the tradition of decorating Christmas trees originate?",
          es: "El 24 de diciembre es Nochebuena, celebrada por cristianos en todo el mundo. ¿En qué país se originó la tradición de decorar árboles de Navidad?",
          de: "Der 24. Dezember ist Heiligabend, der von Christen weltweit gefeiert wird. In welchem Land entstand die Tradition, Weihnachtsbäume zu schmücken?",
          nl: "24 december is kerstavond, gevierd door christenen wereldwijd. In welk land ontstond de traditie van het versieren van kerstbomen?"
        },
        options: [

          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },

          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" },

          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },

          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The tradition of decorating Christmas trees originated in Germany in the 16th century. Devout Christians brought evergreen trees into their homes, and some built wooden pyramids decorated with greenery and candles. Martin Luther is credited with first adding lighted candles to a tree, inspired by stars twinkling through evergreens. The custom spread throughout Germany and then to other parts of Europe. Queen Victoria's German husband Prince Albert helped popularize the Christmas tree in England and the British Empire in the 1840s. German immigrants brought the tradition to America in the 19th century. Today, the Christmas tree is one of the most recognizable symbols of the holiday season worldwide, though decorating styles vary by culture.",
          es: "La tradición de decorar árboles de Navidad se originó en Alemania en el siglo XVI. Los cristianos devotos trajeron árboles de hoja perenne a sus hogares, y algunos construyeron pirámides de madera decoradas con vegetación y velas. Se atribuye a Martín Lutero haber añadido primero velas encendidas a un árbol, inspirado por las estrellas que brillaban a través de los árboles de hoja perenne. La costumbre se extendió por toda Alemania y luego a otras partes de Europa. El esposo alemán de la Reina Victoria, el Príncipe Alberto, ayudó a popularizar el árbol de Navidad en Inglaterra y el Imperio Británico en la década de 1840. Los inmigrantes alemanes trajeron la tradición a América en el siglo XIX. Hoy, el árbol de Navidad es uno de los símbolos más reconocibles de la temporada navideña en todo el mundo, aunque los estilos de decoración varían según la cultura.",
          de: "Die Tradition, Weihnachtsbäume zu schmücken, entstand im 16. Jahrhundert in Deutschland. Fromme Christen brachten immergrüne Bäume in ihre Häuser, und einige bauten hölzerne Pyramiden, die mit Grünzeug und Kerzen geschmückt waren. Martin Luther wird zugeschrieben, als Erster brennende Kerzen an einen Baum gehängt zu haben, inspiriert von Sternen, die durch Immergrüne funkelten. Der Brauch verbreitete sich in ganz Deutschland und dann in andere Teile Europas. Der deutsche Ehemann von Königin Victoria, Prinz Albert, half in den 1840er Jahren, den Weihnachtsbaum in England und dem britischen Empire zu popularisieren. Deutsche Einwanderer brachten die Tradition im 19. Jahrhundert nach Amerika. Heute ist der Weihnachtsbaum eines der erkennbarsten Symbole der Weihnachtszeit weltweit, obwohl die Dekorationsstile je nach Kultur variieren.",
          nl: "De traditie van het versieren van kerstbomen ontstond in Duitsland in de 16e eeuw. Vrome christenen brachten groenblijvende bomen in hun huizen, en sommigen bouwden houten piramides versierd met groen en kaarsen. Maarten Luther wordt gecrediteerd voor het als eerste toevoegen van brandende kaarsen aan een boom, geïnspireerd door sterren die door groenblijvende bomen schitterden. Het gebruik verspreidde zich door heel Duitsland en vervolgens naar andere delen van Europa. De Duitse echtgenoot van koningin Victoria, prins Albert, hielp de kerstboom te populariseren in Engeland en het Britse Rijk in de jaren 1840. Duitse immigranten brachten de traditie naar Amerika in de 19e eeuw. Tegenwoordig is de kerstboom een van de meest herkenbare symbolen van het feestseizoen wereldwijd, hoewel decoratiestijlen per cultuur variëren."
        },
        category: "culture",
        difficulty: "easy",
        subjects: ["culture", "history"]
      },
      {
        question: {
          en: "The Treaty of Ghent, which ended the War of 1812 between the United States and Britain, was signed on December 24, 1814. Where was this treaty signed?",
          es: "El Tratado de Gante, que terminó la Guerra de 1812 entre Estados Unidos y Gran Bretaña, se firmó el 24 de diciembre de 1814. ¿Dónde se firmó este tratado?",
          de: "Der Vertrag von Gent, der den Krieg von 1812 zwischen den Vereinigten Staaten und Großbritannien beendete, wurde am 24. Dezember 1814 unterzeichnet. Wo wurde dieser Vertrag unterzeichnet?",
          nl: "Het Verdrag van Gent, dat de Oorlog van 1812 tussen de Verenigde Staten en Groot-Brittannië beëindigde, werd ondertekend op 24 december 1814. Waar werd dit verdrag ondertekend?"
        },
        options: [

          { en: "Paris, France", es: "París, Francia", de: "Paris, Frankreich", nl: "Parijs, Frankrijk" },

          { en: "Ghent, Belgium", es: "Gante, Bélgica", de: "Gent, Belgien", nl: "Gent, België" },

          { en: "London, England", es: "Londres, Inglaterra", de: "London, England", nl: "Londen, Engeland" },

          { en: "Washington, D.C.", es: "Washington, D.C.", de: "Washington, D.C.", nl: "Washington, D.C." }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Treaty of Ghent was signed in Ghent, Belgium (then part of the United Kingdom of the Netherlands), on December 24, 1814. The treaty essentially restored relations between the U.S. and Britain to status quo ante bellum (the state before the war), with no territorial changes. Ironically, the Battle of New Orleans, Andrew Jackson's famous victory, occurred on January 8, 1815, two weeks after the treaty was signed but before news reached America. The war had been fought over British naval impressment of American sailors, trade restrictions, and U.S. desire to expand into British Canada. The treaty took weeks to reach America by ship. Ratification was completed in February 1815. The war established American independence conclusively and led to an 'Era of Good Feelings' in U.S. politics.",
          es: "El Tratado de Gante se firmó en Gante, Bélgica (entonces parte del Reino Unido de los Países Bajos), el 24 de diciembre de 1814. El tratado esencialmente restauró las relaciones entre Estados Unidos y Gran Bretaña al status quo ante bellum (el estado antes de la guerra), sin cambios territoriales. Irónicamente, la Batalla de Nueva Orleans, la famosa victoria de Andrew Jackson, ocurrió el 8 de enero de 1815, dos semanas después de que se firmara el tratado pero antes de que las noticias llegaran a América. La guerra se había librado por el reclutamiento naval británico de marineros estadounidenses, restricciones comerciales y el deseo de Estados Unidos de expandirse a Canadá británica. El tratado tardó semanas en llegar a América por barco. La ratificación se completó en febrero de 1815. La guerra estableció la independencia estadounidense de manera concluyente y condujo a una 'Era de Buenos Sentimientos' en la política estadounidense.",
          de: "Der Vertrag von Gent wurde in Gent, Belgien (damals Teil des Vereinigten Königreichs der Niederlande), am 24. Dezember 1814 unterzeichnet. Der Vertrag stellte im Wesentlichen die Beziehungen zwischen den USA und Großbritannien auf Status quo ante bellum (den Zustand vor dem Krieg) wieder her, ohne territoriale Veränderungen. Ironischerweise fand die Schlacht von New Orleans, Andrew Jacksons berühmter Sieg, am 8. Januar 1815 statt, zwei Wochen nachdem der Vertrag unterzeichnet wurde, aber bevor die Nachricht Amerika erreichte. Der Krieg war um die britische Zwangsrekrutierung amerikanischer Seeleute, Handelsbeschränkungen und den US-Wunsch, nach Britisch-Kanada zu expandieren, geführt worden. Der Vertrag brauchte Wochen, um per Schiff nach Amerika zu gelangen. Die Ratifizierung wurde im Februar 1815 abgeschlossen. Der Krieg etablierte die amerikanische Unabhängigkeit endgültig und führte zu einer 'Ära der guten Gefühle' in der US-Politik.",
          nl: "Het Verdrag van Gent werd ondertekend in Gent, België (toen deel van het Verenigd Koninkrijk der Nederlanden), op 24 december 1814. Het verdrag herstelde in wezen de relaties tussen de VS en Groot-Brittannië naar status quo ante bellum (de staat voor de oorlog), zonder territoriale veranderingen. Ironisch genoeg vond de Slag om New Orleans, Andrew Jacksons beroemde overwinning, plaats op 8 januari 1815, twee weken nadat het verdrag was ondertekend maar voordat het nieuws Amerika bereikte. De oorlog was gevoerd over Britse indrukking van Amerikaanse zeelieden, handelsbeperkingen en het Amerikaanse verlangen om uit te breiden naar Brits Canada. Het verdrag deed er weken over om per schip Amerika te bereiken. Ratificatie werd voltooid in februari 1815. De oorlog vestigde Amerikaanse onafhankelijkheid definitief en leidde tot een 'Tijdperk van Goede Gevoelens' in de Amerikaanse politiek."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "geography"]
      },
      {
        question: {
          en: "On December 24, 1968, the crew of Apollo 8 became the first humans to do what?",
          es: "El 24 de diciembre de 1968, la tripulación del Apolo 8 se convirtió en los primeros humanos en hacer qué?",
          de: "Am 24. Dezember 1968 wurde die Besatzung von Apollo 8 die ersten Menschen, die was taten?",
          nl: "Op 24 december 1968 werden de bemanningsleden van Apollo 8 de eerste mensen die wat deden?"
        },
        options: [

          { en: "Land on the Moon", es: "Aterrizar en la Luna", de: "Auf dem Mond landen", nl: "Op de maan landen" },

          { en: "Orbit the Moon", es: "Orbitar la Luna", de: "Den Mond umkreisen", nl: "De maan omcirkelen" },

          { en: "Walk in space", es: "Caminar en el espacio", de: "Im All spazieren", nl: "In de ruimte wandelen" },

          { en: "Reach Mars", es: "Alcanzar Marte", de: "Mars erreichen", nl: "Mars bereiken" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Apollo 8 astronauts Frank Borman, Jim Lovell, and William Anders became the first humans to orbit the Moon on December 24, 1968. They completed 10 lunar orbits over 20 hours, photographing the lunar surface for future landing sites. Their famous 'Earthrise' photograph showed Earth rising over the Moon's horizon, becoming one of the most iconic images in history. On Christmas Eve, they broadcast a live TV program reading from the Book of Genesis while orbiting the Moon, watched by an estimated one billion people worldwide. The mission was a crucial step toward the Apollo 11 Moon landing seven months later. The crew safely returned to Earth on December 27. Their achievement demonstrated America's space capability during the Cold War space race.",
          es: "Los astronautas del Apolo 8 Frank Borman, Jim Lovell y William Anders se convirtieron en los primeros humanos en orbitar la Luna el 24 de diciembre de 1968. Completaron 10 órbitas lunares durante 20 horas, fotografiando la superficie lunar para futuros sitios de aterrizaje. Su famosa fotografía 'Salida de la Tierra' mostró la Tierra saliendo sobre el horizonte de la Luna, convirtiéndose en una de las imágenes más icónicas de la historia. En Nochebuena, transmitieron un programa de TV en vivo leyendo del Libro del Génesis mientras orbitaban la Luna, visto por aproximadamente mil millones de personas en todo el mundo. La misión fue un paso crucial hacia el alunizaje del Apolo 11 siete meses después. La tripulación regresó sana y salva a la Tierra el 27 de diciembre. Su logro demostró la capacidad espacial de América durante la carrera espacial de la Guerra Fría.",
          de: "Die Apollo-8-Astronauten Frank Borman, Jim Lovell und William Anders wurden am 24. Dezember 1968 die ersten Menschen, die den Mond umkreisten. Sie absolvierten 10 Mondumkreisungen über 20 Stunden und fotografierten die Mondoberfläche für zukünftige Landeplätze. Ihr berühmtes 'Earthrise'-Foto zeigte die Erde, die über dem Mondhorizont aufging, und wurde zu einem der ikonischsten Bilder der Geschichte. An Heiligabend sendeten sie ein Live-TV-Programm, in dem sie aus dem Buch Genesis vorlasen, während sie den Mond umkreisten, gesehen von geschätzten einer Milliarde Menschen weltweit. Die Mission war ein entscheidender Schritt zur Apollo-11-Mondlandung sieben Monate später. Die Besatzung kehrte am 27. Dezember sicher zur Erde zurück. Ihre Leistung demonstrierte Amerikas Raumfahrtfähigkeit während des Weltraumrennens im Kalten Krieg.",
          nl: "Apollo 8 astronauten Frank Borman, Jim Lovell en William Anders werden op 24 december 1968 de eerste mensen die de maan omcirkelden. Ze voltooiden 10 maanbanen gedurende 20 uur, waarbij ze het maanoppervlak fotografeerden voor toekomstige landingsplaatsen. Hun beroemde 'Earthrise' foto toonde de aarde die boven de maanhorizon opkwam en werd een van de meest iconische beelden in de geschiedenis. Op kerstavond zonden ze een live TV-programma uit waarin ze uit het Boek Genesis lazen terwijl ze de maan omcirkelden, bekeken door naar schatting een miljard mensen wereldwijd. De missie was een cruciale stap richting de Apollo 11 maanlanding zeven maanden later. De bemanning keerde veilig terug naar de aarde op 27 december. Hun prestatie toonde Amerika's ruimtecapaciteit tijdens de ruimtewedloop van de Koude Oorlog."
        },
        category: "science",
        difficulty: "medium",
        subjects: ["science", "space"]
      },
      {
        question: {
          en: "What famous photograph taken by Apollo 8 astronauts on December 24, 1968, is considered one of the most influential environmental photographs?",
          es: "¿Qué famosa fotografía tomada por astronautas del Apolo 8 el 24 de diciembre de 1968 se considera una de las fotografías ambientales más influyentes?",
          de: "Welches berühmte Foto, das von Apollo-8-Astronauten am 24. Dezember 1968 aufgenommen wurde, gilt als eines der einflussreichsten Umweltfotos?",
          nl: "Welke beroemde foto gemaakt door Apollo 8 astronauten op 24 december 1968 wordt beschouwd als een van de meest invloedrijke milieufoto's?"
        },
        options: [

          { en: "Blue Marble", es: "Canica Azul", de: "Blaue Murmel", nl: "Blauwe Knikker" },

          { en: "Earthrise", es: "Salida de la Tierra", de: "Erdaufgang", nl: "Aardopkomst" },

          { en: "Pale Blue Dot", es: "Punto Azul Pálido", de: "Blasser Blauer Punkt", nl: "Bleekblauwe stip" },

          { en: "The Day the Earth Smiled", es: "El Día que la Tierra Sonrió", de: "Der Tag, an dem die Erde lächelte", nl: "De Dag dat de Aarde Glimlachte" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The 'Earthrise' photograph, taken by Apollo 8 astronaut William Anders on December 24, 1968, shows Earth rising above the Moon's barren horizon. This image profoundly impacted humanity's perspective on our planet, showing Earth as a small, fragile oasis in the vast darkness of space. The photograph is credited with launching the modern environmental movement and was influential in the creation of Earth Day in 1970. Anders later said, 'We came all this way to explore the Moon, and the most important thing is that we discovered the Earth.' The image appeared on postage stamps and inspired environmental protection efforts worldwide. It's been called 'the most influential environmental photograph ever taken' by nature photographer Galen Rowell.",
          es: "La fotografía 'Salida de la Tierra', tomada por el astronauta del Apolo 8 William Anders el 24 de diciembre de 1968, muestra la Tierra saliendo sobre el horizonte árido de la Luna. Esta imagen impactó profundamente la perspectiva de la humanidad sobre nuestro planeta, mostrando la Tierra como un pequeño y frágil oasis en la vasta oscuridad del espacio. Se atribuye a la fotografía el lanzamiento del movimiento ambiental moderno y fue influyente en la creación del Día de la Tierra en 1970. Anders dijo más tarde: 'Vinimos todo este camino para explorar la Luna, y lo más importante es que descubrimos la Tierra'. La imagen apareció en sellos postales e inspiró esfuerzos de protección ambiental en todo el mundo. Ha sido llamada 'la fotografía ambiental más influyente jamás tomada' por el fotógrafo de naturaleza Galen Rowell.",
          de: "Das 'Erdaufgang'-Foto, aufgenommen vom Apollo-8-Astronauten William Anders am 24. Dezember 1968, zeigt die Erde, die über dem kargen Mondhorizont aufgeht. Dieses Bild hatte einen tiefgreifenden Einfluss auf die Perspektive der Menschheit auf unseren Planeten und zeigte die Erde als kleine, zerbrechliche Oase in der weiten Dunkelheit des Weltraums. Dem Foto wird zugeschrieben, die moderne Umweltbewegung ins Leben gerufen zu haben, und es war einflussreich bei der Schaffung des Tag der Erde 1970. Anders sagte später: 'Wir kamen den ganzen Weg, um den Mond zu erkunden, und das Wichtigste ist, dass wir die Erde entdeckten.' Das Bild erschien auf Briefmarken und inspirierte weltweite Umweltschutzbemühungen. Es wurde vom Naturfotografen Galen Rowell als 'das einflussreichste Umweltfoto, das jemals aufgenommen wurde' bezeichnet.",
          nl: "'Aardopkomst', de foto genomen door Apollo 8 astronaut William Anders op 24 december 1968, toont de aarde die boven de kale maanhorizon opkomt. Deze afbeelding had een diepgaande impact op de menselijke kijk op onze planeet en toonde de aarde als een kleine, kwetsbare oase in de uitgestrekte duisternis van de ruimte. De foto wordt gecrediteerd voor het lanceren van de moderne milieubeweging en was invloedrijk bij de oprichting van Dag van de Aarde in 1970. Anders zei later: 'We kwamen helemaal hierheen om de maan te verkennen, en het belangrijkste is dat we de aarde ontdekten.' De afbeelding verscheen op postzegels en inspireerde milieubeschermingsinspanningen wereldwijd. Het is 'de meest invloedrijke milieufoto ooit genomen' genoemd door natuurfotograaf Galen Rowell."
        },
        category: "science",
        difficulty: "medium",
        subjects: ["science", "photography"]
      },
      {
        question: {
          en: "The War of 1812 between the United States and Britain was partly caused by the British practice of impressment. What was impressment?",
          es: "La Guerra de 1812 entre Estados Unidos y Gran Bretaña fue causada en parte por la práctica británica de la leva. ¿Qué era la leva?",
          de: "Der Krieg von 1812 zwischen den Vereinigten Staaten und Großbritannien wurde teilweise durch die britische Praxis der Zwangsrekrutierung verursacht. Was war Zwangsrekrutierung?",
          nl: "De Oorlog van 1812 tussen de Verenigde Staten en Groot-Brittannië werd deels veroorzaakt door de Britse praktijk van pressgang. Wat was pressgang?"
        },
        options: [
          { en: "Seizing American territory", es: "Apoderarse de territorio estadounidense", de: "Amerikanisches Territorium beschlagnahmen", nl: "Amerikaans grondgebied in beslag nemen" },
          { en: "Taxing American goods", es: "Gravar mercancías estadounidenses", de: "Amerikanische Waren besteuern", nl: "Amerikaanse goederen belasten" },
          { en: "Blocking American ports", es: "Bloquear puertos estadounidenses", de: "Amerikanische Häfen blockieren", nl: "Amerikaanse havens blokkeren" },
          { en: "Forcing American sailors into British naval service", es: "Forzar a marineros estadounidenses al servicio naval británico", de: "Amerikanische Seeleute zum britischen Marinedienst zwingen", nl: "Amerikaanse zeelieden dwingen tot Britse marinedienst" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Impressment was the forced recruitment of sailors into naval service, practiced by the British Royal Navy. During the Napoleonic Wars, Britain needed sailors desperately and would stop American ships to search for British deserters. However, they also impressed American citizens into service, claiming they were British subjects. This violated American sovereignty and was a major cause of the War of 1812. The British impressed thousands of American sailors between 1803-1812. 'Free trade and sailors' rights' became an American rallying cry. Impressment was never officially addressed in the Treaty of Ghent, but it ceased being an issue after Napoleon's defeat ended Britain's manpower crisis. The practice contributed to American nationalism and determination to defend its independence from European powers.",
          es: "La leva era el reclutamiento forzado de marineros al servicio naval, practicado por la Marina Real Británica. Durante las Guerras Napoleónicas, Gran Bretaña necesitaba marineros desesperadamente y detenía barcos estadounidenses para buscar desertores británicos. Sin embargo, también reclutaban por la fuerza a ciudadanos estadounidenses, afirmando que eran súbditos británicos. Esto violaba la soberanía estadounidense y fue una causa importante de la Guerra de 1812. Los británicos reclutaron por la fuerza a miles de marineros estadounidenses entre 1803-1812. 'Libre comercio y derechos de los marineros' se convirtió en un grito de guerra estadounidense. La leva nunca fue abordada oficialmente en el Tratado de Gante, pero dejó de ser un problema después de que la derrota de Napoleón terminara con la crisis de mano de obra de Gran Bretaña. La práctica contribuyó al nacionalismo estadounidense y la determinación de defender su independencia de las potencias europeas.",
          de: "Zwangsrekrutierung war die erzwungene Anwerbung von Seeleuten in den Marinedienst, praktiziert von der britischen Royal Navy. Während der Napoleonischen Kriege benötigte Großbritannien verzweifelt Seeleute und stoppte amerikanische Schiffe, um nach britischen Deserteuren zu suchen. Sie rekrutierten jedoch auch amerikanische Bürger zwangsweise und behaupteten, sie seien britische Untertanen. Dies verletzte die amerikanische Souveränität und war eine Hauptursache für den Krieg von 1812. Die Briten rekrutierten zwischen 1803-1812 Tausende amerikanischer Seeleute zwangsweise. 'Freier Handel und Rechte der Seeleute' wurde zum amerikanischen Schlachtruf. Zwangsrekrutierung wurde im Vertrag von Gent nie offiziell angesprochen, hörte aber nach Napoleons Niederlage auf, ein Problem zu sein, da dies Großbritanniens Arbeitskräftekrise beendete. Die Praxis trug zum amerikanischen Nationalismus und der Entschlossenheit bei, seine Unabhängigkeit von europäischen Mächten zu verteidigen.",
          nl: "Pressgang was de gedwongen rekrutering van zeelieden voor marinedienst, beoefend door de Britse Royal Navy. Tijdens de Napoleontische oorlogen had Groot-Brittannië wanhopig zeelieden nodig en stopte Amerikaanse schepen om te zoeken naar Britse deserteurs. Ze drukten echter ook Amerikaanse burgers in dienst en beweerden dat ze Britse onderdanen waren. Dit schond de Amerikaanse soevereiniteit en was een belangrijke oorzaak van de Oorlog van 1812. De Britten drukten duizenden Amerikaanse zeelieden in dienst tussen 1803-1812. 'Vrije handel en rechten van zeelieden' werd een Amerikaanse strijdkreet. Pressgang werd nooit officieel behandeld in het Verdrag van Gent, maar stopte met een probleem te zijn nadat Napoleons nederlaag Groot-Brittannië's arbeidskrachtcrisis beëindigde. De praktijk droeg bij aan Amerikaans nationalisme en vastberadenheid om zijn onafhankelijkheid van Europese mogendheden te verdedigen."
        },
        category: "history",
        difficulty: "hard",
        subjects: ["history", "military"]
      }
    ],

    day25: [ /* 5 questions */
      {
        question: {
          en: "December 25 is celebrated as Christmas Day by Christians worldwide. Which famous scientist was born on December 25, 1642?",
          es: "El 25 de diciembre se celebra como el día de Navidad por los cristianos en todo el mundo. ¿Qué famoso científico nació el 25 de diciembre de 1642?",
          de: "Der 25. Dezember wird von Christen weltweit als Weihnachtstag gefeiert. Welcher berühmte Wissenschaftler wurde am 25. Dezember 1642 geboren?",
          nl: "25 december wordt wereldwijd gevierd als Kerstdag door christenen. Welke beroemde wetenschapper werd geboren op 25 december 1642?"
        },
        options: [

          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },

          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },

          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },

          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Sir Isaac Newton was born on December 25, 1642 (January 4, 1643 in the Gregorian calendar), in Woolsthorpe, England. He revolutionized physics and mathematics with his laws of motion and universal gravitation, published in 'Principia Mathematica' (1687). Newton also developed calculus independently around the same time as Leibniz. His work on optics showed that white light is composed of colors, revolutionizing our understanding of light. He served as President of the Royal Society and Master of the Royal Mint. His famous apple story symbolizes his insight that the same force governing falling objects also controls planetary motion. Newton's laws dominated physics until Einstein's relativity theory, and remain fundamental for most everyday applications.",
          es: "Sir Isaac Newton nació el 25 de diciembre de 1642 (4 de enero de 1643 en el calendario gregoriano), en Woolsthorpe, Inglaterra. Revolucionó la física y las matemáticas con sus leyes del movimiento y la gravitación universal, publicadas en 'Principia Mathematica' (1687). Newton también desarrolló el cálculo de forma independiente aproximadamente al mismo tiempo que Leibniz. Su trabajo sobre óptica demostró que la luz blanca está compuesta de colores, revolucionando nuestra comprensión de la luz. Sirvió como Presidente de la Royal Society y Maestro de la Casa de la Moneda Real. Su famosa historia de la manzana simboliza su visión de que la misma fuerza que rige los objetos que caen también controla el movimiento planetario. Las leyes de Newton dominaron la física hasta la teoría de la relatividad de Einstein, y siguen siendo fundamentales para la mayoría de las aplicaciones cotidianas.",
          de: "Sir Isaac Newton wurde am 25. Dezember 1642 (4. Januar 1643 im gregorianischen Kalender) in Woolsthorpe, England, geboren. Er revolutionierte Physik und Mathematik mit seinen Bewegungsgesetzen und der universellen Gravitation, veröffentlicht in 'Principia Mathematica' (1687). Newton entwickelte auch die Infinitesimalrechnung unabhängig etwa zur gleichen Zeit wie Leibniz. Seine Arbeit über Optik zeigte, dass weißes Licht aus Farben besteht, was unser Verständnis von Licht revolutionierte. Er diente als Präsident der Royal Society und Münzmeister der königlichen Münzanstalt. Seine berühmte Apfelgeschichte symbolisiert seine Einsicht, dass dieselbe Kraft, die fallende Objekte regiert, auch die Planetenbewegung kontrolliert. Newtons Gesetze dominierten die Physik bis zu Einsteins Relativitätstheorie und bleiben fundamental für die meisten alltäglichen Anwendungen.",
          nl: "Sir Isaac Newton werd geboren op 25 december 1642 (4 januari 1643 in de Gregoriaanse kalender), in Woolsthorpe, Engeland. Hij revolutioneerde de fysica en wiskunde met zijn bewegingswetten en universele gravitatie, gepubliceerd in 'Principia Mathematica' (1687). Newton ontwikkelde ook onafhankelijk calculus rond dezelfde tijd als Leibniz. Zijn werk over optica toonde aan dat wit licht bestaat uit kleuren, wat ons begrip van licht revolutioneerde. Hij diende als President van de Royal Society en Master van de Royal Mint. Zijn beroemde appelverhaal symboliseert zijn inzicht dat dezelfde kracht die vallende objecten beheerst ook planetaire beweging controleert. Newtons wetten domineerden de fysica tot Einsteins relativiteitstheorie, en blijven fundamenteel voor de meeste alledaagse toepassingen."
        },
        category: "science",
        difficulty: "medium",
        subjects: ["science", "history"]
      },
      {
        question: {
          en: "Which legendary silent film actor and director was born on December 25, 1889?",
          es: "¿Qué legendario actor y director de cine mudo nació el 25 de diciembre de 1889?",
          de: "Welcher legendäre Stummfilmschauspieler und Regisseur wurde am 25. Dezember 1889 geboren?",
          nl: "Welke legendarische stomme filmacteur en regisseur werd geboren op 25 december 1889?"
        },
        options: [

          { en: "Buster Keaton", es: "Buster Keaton", de: "Buster Keaton", nl: "Buster Keaton" },

          { en: "Charlie Chaplin", es: "Charlie Chaplin", de: "Charlie Chaplin", nl: "Charlie Chaplin" },

          { en: "Harold Lloyd", es: "Harold Lloyd", de: "Harold Lloyd", nl: "Harold Lloyd" },

          { en: "Douglas Fairbanks", es: "Douglas Fairbanks", de: "Douglas Fairbanks", nl: "Douglas Fairbanks" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Charlie Chaplin was born on December 25, 1889, in London, England. He became one of cinema's most iconic figures, creating the beloved character 'The Tramp' with his bowler hat, cane, and distinctive walk. Chaplin wrote, directed, produced, and starred in his films, including classics like 'The Gold Rush' (1925), 'City Lights' (1931), and 'Modern Times' (1936). His film 'The Great Dictator' (1940) was a bold satire of Hitler. Chaplin co-founded United Artists studio in 1919. He received an Honorary Academy Award in 1972 for his 'incalculable effect' on cinema. Despite political controversies during the McCarthy era, Chaplin is remembered as one of the greatest filmmakers in history, whose work transcended language barriers through universal comedy and pathos.",
          es: "Charlie Chaplin nació el 25 de diciembre de 1889 en Londres, Inglaterra. Se convirtió en una de las figuras más icónicas del cine, creando el querido personaje 'El Vagabundo' con su bombín, bastón y caminar distintivo. Chaplin escribió, dirigió, produjo y protagonizó sus películas, incluidos clásicos como 'La quimera del oro' (1925), 'Luces de la ciudad' (1931) y 'Tiempos modernos' (1936). Su película 'El gran dictador' (1940) fue una audaz sátira de Hitler. Chaplin cofundó el estudio United Artists en 1919. Recibió un Premio de la Academia Honorario en 1972 por su 'efecto incalculable' en el cine. A pesar de las controversias políticas durante la era McCarthy, Chaplin es recordado como uno de los más grandes cineastas de la historia, cuyo trabajo trascendió las barreras del idioma a través de la comedia universal y el patetismo.",
          de: "Charlie Chaplin wurde am 25. Dezember 1889 in London, England, geboren. Er wurde zu einer der ikonischsten Figuren des Kinos und schuf den geliebten Charakter 'Der Tramp' mit seinem Bowler-Hut, Stock und unverwechselbarem Gang. Chaplin schrieb, führte Regie, produzierte und spielte in seinen Filmen, darunter Klassiker wie 'Goldrausch' (1925), 'Lichter der Großstadt' (1931) und 'Moderne Zeiten' (1936). Sein Film 'Der große Diktator' (1940) war eine mutige Satire auf Hitler. Chaplin war Mitbegründer des Studios United Artists im Jahr 1919. Er erhielt 1972 einen Ehren-Oscar für seine 'unberechenbare Wirkung' auf das Kino. Trotz politischer Kontroversen während der McCarthy-Ära wird Chaplin als einer der größten Filmemacher der Geschichte erinnert, dessen Werk durch universelle Komödie und Pathos Sprachbarrieren überwand.",
          nl: "Charlie Chaplin werd geboren op 25 december 1889 in Londen, Engeland. Hij werd een van de meest iconische figuren van de cinema en creëerde het geliefde personage 'The Tramp' met zijn bolhoed, wandelstok en kenmerkende manier van lopen. Chaplin schreef, regisseerde, produceerde en speelde in zijn films, waaronder klassiekers als 'The Gold Rush' (1925), 'City Lights' (1931) en 'Modern Times' (1936). Zijn film 'The Great Dictator' (1940) was een gedurfde satire op Hitler. Chaplin was medeoprichter van United Artists studio in 1919. Hij ontving een Honorary Academy Award in 1972 voor zijn 'onberekenbare effect' op cinema. Ondanks politieke controverses tijdens het McCarthy-tijdperk wordt Chaplin herinnerd als een van de grootste filmmakers in de geschiedenis, wiens werk taalbarrières overstijgt door universele komedie en pathos."
        },
        category: "entertainment",
        difficulty: "medium",
        subjects: ["entertainment", "history"]
      },
      {
        question: {
          en: "On December 25, 1991, which major world power officially dissolved?",
          es: "El 25 de diciembre de 1991, ¿qué gran potencia mundial se disolvió oficialmente?",
          de: "Am 25. Dezember 1991 löste sich welche große Weltmacht offiziell auf?",
          nl: "Op 25 december 1991 werd welke grote wereldmacht officieel ontbonden?"
        },
        options: [

          { en: "Yugoslavia", es: "Yugoslavia", de: "Jugoslawien", nl: "Joegoslavië" },

          { en: "Czechoslovakia", es: "Checoslovaquia", de: "Tschechoslowakei", nl: "Tsjechoslowakije" },

          { en: "Soviet Union", es: "Unión Soviética", de: "Sowjetunion", nl: "Sovjet-Unie" },

          { en: "East Germany", es: "Alemania Oriental", de: "DDR", nl: "Oost-Duitsland" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The Soviet Union officially dissolved on December 25, 1991, when Soviet President Mikhail Gorbachev resigned and declared his office extinct. The Soviet flag was lowered from the Kremlin for the last time, replaced by the Russian tricolor. This ended 69 years of Soviet communist rule since 1922. The dissolution followed failed reforms (glasnost and perestroika), economic crisis, and independence movements in republics. Fifteen independent nations emerged: Russia, Ukraine, Belarus, and twelve others. The Cold War officially ended, reshaping global geopolitics. Gorbachev's resignation speech acknowledged the end of totalitarianism but also expressed concern about the uncertain future. December 26 is officially recognized as the dissolution date when the Soviet of Republics met for the last time.",
          es: "La Unión Soviética se disolvió oficialmente el 25 de diciembre de 1991, cuando el presidente soviético Mikhail Gorbachov renunció y declaró su cargo extinto. La bandera soviética fue arriada del Kremlin por última vez, reemplazada por el tricolor ruso. Esto puso fin a 69 años de gobierno comunista soviético desde 1922. La disolución siguió a reformas fallidas (glasnost y perestroika), crisis económica y movimientos de independencia en las repúblicas. Surgieron quince naciones independientes: Rusia, Ucrania, Bielorrusia y otras doce. La Guerra Fría terminó oficialmente, remodelando la geopolítica global. El discurso de renuncia de Gorbachov reconoció el fin del totalitarismo pero también expresó preocupación por el futuro incierto. El 26 de diciembre se reconoce oficialmente como la fecha de disolución cuando el Soviet de las Repúblicas se reunió por última vez.",
          de: "Die Sowjetunion löste sich offiziell am 25. Dezember 1991 auf, als der sowjetische Präsident Michail Gorbatschow zurücktrat und sein Amt für erloschen erklärte. Die sowjetische Flagge wurde zum letzten Mal vom Kreml heruntergelassen und durch die russische Trikolore ersetzt. Dies beendete 69 Jahre sowjetischer kommunistischer Herrschaft seit 1922. Die Auflösung folgte gescheiterten Reformen (Glasnost und Perestroika), Wirtschaftskrise und Unabhängigkeitsbewegungen in den Republiken. Fünfzehn unabhängige Nationen entstanden: Russland, Ukraine, Belarus und zwölf andere. Der Kalte Krieg endete offiziell und gestaltete die globale Geopolitik neu. Gorbatschows Rücktrittsrede erkannte das Ende des Totalitarismus an, äußerte aber auch Besorgnis über die ungewisse Zukunft. Der 26. Dezember wird offiziell als Auflösungsdatum anerkannt, als der Sowjet der Republiken zum letzten Mal zusammentrat.",
          nl: "De Sovjet-Unie werd officieel ontbonden op 25 december 1991, toen Sovjet-president Michail Gorbatsjov afstand deed en zijn functie voor uitgestorven verklaarde. De Sovjetvlag werd voor de laatste keer van het Kremlin gehaald en vervangen door de Russische driekleur. Dit beëindigde 69 jaar Sovjet-communistisch bewind sinds 1922. De ontbinding volgde op mislukte hervormingen (glasnost en perestrojka), economische crisis en onafhankelijkheidsbewegingen in republieken. Vijftien onafhankelijke naties ontstonden: Rusland, Oekraïne, Wit-Rusland en twaalf anderen. De Koude Oorlog eindigde officieel, waardoor de mondiale geopolitiek werd hervormd. Gorbatsjovs aftreedrede erkende het einde van het totalitarisme maar uitte ook bezorgdheid over de onzekere toekomst. 26 december wordt officieel erkend als de ontbindingsdatum toen de Sovjet van Republieken voor de laatste keer bijeenkwam."
        },
        category: "history",
        difficulty: "easy",
        subjects: ["history", "politics"]
      },
      {
        question: {
          en: "Christmas Day commemorates the birth of Jesus Christ. In Christian tradition, which city is recognized as his birthplace?",
          es: "El día de Navidad conmemora el nacimiento de Jesucristo. En la tradición cristiana, ¿qué ciudad es reconocida como su lugar de nacimiento?",
          de: "Der Weihnachtstag gedenkt der Geburt Jesu Christi. In der christlichen Tradition wird welche Stadt als sein Geburtsort anerkannt?",
          nl: "Kerstdag herdenkt de geboorte van Jezus Christus. In de christelijke traditie wordt welke stad erkend als zijn geboorteplaats?"
        },
        options: [

          { en: "Jerusalem", es: "Jerusalén", de: "Jerusalem", nl: "Jeruzalem" },

          { en: "Nazareth", es: "Nazaret", de: "Nazareth", nl: "Nazareth" },

          { en: "Bethlehem", es: "Belén", de: "Bethlehem", nl: "Bethlehem" },

          { en: "Galilee", es: "Galilea", de: "Galiläa", nl: "Galilea" }

        ],
        correctIndex: 2,
        explanation: {
          en: "According to Christian tradition and the Gospels of Matthew and Luke, Jesus was born in Bethlehem, a small town in Judea (now in the West Bank, Palestine). The biblical narrative states Mary and Joseph traveled from Nazareth to Bethlehem for a Roman census. With no room at the inn, Jesus was born in a stable and laid in a manger. Bethlehem was significant as it fulfilled the Old Testament prophecy that the Messiah would be born in the 'city of David' (Micah 5:2). The Church of the Nativity in Bethlehem, built over the traditional birthplace, is one of Christianity's oldest churches, dating to 339 CE. Bethlehem remains an important pilgrimage site. While Jesus was born in Bethlehem, he grew up in Nazareth, which is why he's called 'Jesus of Nazareth.'",
          es: "Según la tradición cristiana y los Evangelios de Mateo y Lucas, Jesús nació en Belén, un pequeño pueblo de Judea (ahora en Cisjordania, Palestina). La narrativa bíblica establece que María y José viajaron de Nazaret a Belén para un censo romano. Sin espacio en la posada, Jesús nació en un establo y fue acostado en un pesebre. Belén fue significativo ya que cumplió la profecía del Antiguo Testamento de que el Mesías nacería en la 'ciudad de David' (Miqueas 5:2). La Iglesia de la Natividad en Belén, construida sobre el lugar tradicional de nacimiento, es una de las iglesias más antiguas del cristianismo, que data del 339 d.C. Belén sigue siendo un importante sitio de peregrinación. Aunque Jesús nació en Belén, creció en Nazaret, por lo que se le llama 'Jesús de Nazaret'.",
          de: "Laut christlicher Tradition und den Evangelien von Matthäus und Lukas wurde Jesus in Bethlehem geboren, einer kleinen Stadt in Judäa (heute im Westjordanland, Palästina). Die biblische Erzählung besagt, dass Maria und Josef von Nazareth nach Bethlehem für eine römische Volkszählung reisten. Da kein Platz in der Herberge war, wurde Jesus in einem Stall geboren und in eine Krippe gelegt. Bethlehem war bedeutend, da es die alttestamentliche Prophezeiung erfüllte, dass der Messias in der 'Stadt Davids' geboren werden würde (Micha 5:2). Die Geburtskirche in Bethlehem, über dem traditionellen Geburtsort erbaut, ist eine der ältesten Kirchen des Christentums aus dem Jahr 339 n. Chr. Bethlehem bleibt ein wichtiger Pilgerort. Obwohl Jesus in Bethlehem geboren wurde, wuchs er in Nazareth auf, weshalb er 'Jesus von Nazareth' genannt wird.",
          nl: "Volgens de christelijke traditie en de Evangeliën van Matteüs en Lucas werd Jezus geboren in Bethlehem, een klein stadje in Judea (nu in de Westelijke Jordaanoever, Palestina). Het bijbelse verhaal stelt dat Maria en Jozef van Nazareth naar Bethlehem reisden voor een Romeinse volkstelling. Zonder plaats in de herberg werd Jezus geboren in een stal en gelegd in een kribbe. Bethlehem was belangrijk omdat het de oudtestamentische profetie vervulde dat de Messias zou worden geboren in de 'stad van David' (Micha 5:2). De Geboortekerk in Bethlehem, gebouwd over de traditionele geboorteplaats, is een van de oudste kerken van het christendom, daterend uit 339 n.Chr. Bethlehem blijft een belangrijke bedevaartplaats. Hoewel Jezus in Bethlehem werd geboren, groeide hij op in Nazareth, daarom wordt hij 'Jezus van Nazareth' genoemd."
        },
        category: "religion",
        difficulty: "easy",
        subjects: ["religion", "history"]
      },
      {
        question: {
          en: "Which Christmas tradition involves leaving food and drink for Santa Claus on Christmas Eve?",
          es: "¿Qué tradición navideña implica dejar comida y bebida para Santa Claus en Nochebuena?",
          de: "Welche Weihnachtstradition beinhaltet, am Heiligabend Essen und Trinken für den Weihnachtsmann bereitzustellen?",
          nl: "Welke kersttraditie houdt in dat er op kerstavond eten en drinken wordt achtergelaten voor de Kerstman?"
        },
        options: [
          { en: "Tea and cake", es: "Té y pastel", de: "Tee und Kuchen", nl: "Thee en cake" },
          { en: "Hot chocolate and pie", es: "Chocolate caliente y pastel", de: "Heiße Schokolade und Kuchen", nl: "Warme chocolade en taart" },
          { en: "Milk and cookies", es: "Leche y galletas", de: "Milch und Kekse", nl: "Melk en koekjes" },
          { en: "Coffee and bread", es: "Café y pan", de: "Kaffee und Brot", nl: "Koffie en brood" }
        ],
        correctIndex: 2,
        explanation: {
          en: "In the United States and many other countries, children leave milk and cookies for Santa Claus on Christmas Eve. This tradition likely originated from the Great Depression era when parents taught children to show gratitude for gifts during difficult times. The custom may also relate to older European traditions of leaving food for Odin's horse during winter solstice celebrations. Different countries have variations: in Britain, children leave mince pies and sherry; in Australia, some leave cold beer due to the summer heat; in Ireland, it's Guinness and mince pies; in Sweden, children leave rice porridge. The tradition also often includes leaving carrots or other treats for Santa's reindeer. This custom reinforces values of generosity and hospitality while adding to the excitement of Christmas Eve.",
          es: "En Estados Unidos y muchos otros países, los niños dejan leche y galletas para Santa Claus en Nochebuena. Esta tradición probablemente se originó en la época de la Gran Depresión cuando los padres enseñaban a los niños a mostrar gratitud por los regalos durante tiempos difíciles. La costumbre también puede relacionarse con tradiciones europeas más antiguas de dejar comida para el caballo de Odín durante las celebraciones del solsticio de invierno. Diferentes países tienen variaciones: en Gran Bretaña, los niños dejan pasteles de carne picada y jerez; en Australia, algunos dejan cerveza fría debido al calor del verano; en Irlanda, es Guinness y pasteles de carne picada; en Suecia, los niños dejan gachas de arroz. La tradición también incluye a menudo dejar zanahorias u otras golosinas para los renos de Santa. Esta costumbre refuerza valores de generosidad y hospitalidad mientras agrega emoción a la Nochebuena.",
          de: "In den Vereinigten Staaten und vielen anderen Ländern lassen Kinder am Heiligabend Milch und Kekse für den Weihnachtsmann. Diese Tradition stammt wahrscheinlich aus der Zeit der Großen Depression, als Eltern Kindern beibrachten, Dankbarkeit für Geschenke in schwierigen Zeiten zu zeigen. Die Sitte könnte auch mit älteren europäischen Traditionen zusammenhängen, während der Wintersonnenwende Essen für Odins Pferd bereitzustellen. Verschiedene Länder haben Variationen: In Großbritannien lassen Kinder Mince Pies und Sherry; in Australien lassen einige kaltes Bier wegen der Sommerhitze; in Irland ist es Guinness und Mince Pies; in Schweden lassen Kinder Reisbrei. Die Tradition beinhaltet oft auch, Karotten oder andere Leckereien für Santas Rentiere zu lassen. Diese Sitte verstärkt Werte von Großzügigkeit und Gastfreundschaft und trägt zur Aufregung des Heiligabends bei.",
          nl: "In de Verenigde Staten en veel andere landen laten kinderen melk en koekjes achter voor de Kerstman op kerstavond. Deze traditie is waarschijnlijk ontstaan tijdens het tijdperk van de Grote Depressie toen ouders kinderen leerden dankbaarheid te tonen voor geschenken tijdens moeilijke tijden. De gewoonte kan ook verband houden met oudere Europese tradities van het achterlaten van voedsel voor Odins paard tijdens winterzonnewendeviering. Verschillende landen hebben variaties: in Groot-Brittannië laten kinderen mince pies en sherry achter; in Australië laten sommigen koud bier achter vanwege de zomerhitte; in Ierland is het Guinness en mince pies; in Zweden laten kinderen rijstepap achter. De traditie omvat vaak ook het achterlaten van wortels of andere traktaties voor de rendieren van de Kerstman. Deze gewoonte versterkt waarden van vrijgevigheid en gastvrijheid en voegt spanning toe aan kerstavond."
        },
        category: "culture",
        difficulty: "easy",
        subjects: ["culture", "traditions"]
      }
    ],

    day26: [ /* 5 questions */
      {
        question: {
          en: "December 26 is known as Boxing Day in several countries. In which of the following countries is Boxing Day NOT a public holiday?",
          es: "El 26 de diciembre se conoce como Boxing Day en varios países. ¿En cuál de los siguientes países NO es Boxing Day un día festivo?",
          de: "Der 26. Dezember ist in mehreren Ländern als Boxing Day bekannt. In welchem der folgenden Länder ist Boxing Day KEIN gesetzlicher Feiertag?",
          nl: "26 december staat bekend als Boxing Day in verschillende landen. In welk van de volgende landen is Boxing Day GEEN officiële feestdag?"
        },
        options: [

          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },

          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },

          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },

          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Boxing Day is observed as a public holiday in most Commonwealth nations including the UK, Canada, Australia, and New Zealand, but not in the United States. The holiday's origins are debated, but likely relate to giving 'Christmas boxes' (gifts or money) to servants, tradespeople, and the poor the day after Christmas. In the UK, it traditionally involved employers giving boxes of gifts to employees. Today, Boxing Day is famous for shopping sales (similar to Black Friday in the US), sporting events like Premier League football matches, and family gatherings. In some countries, if December 26 falls on a weekend, the holiday is observed on the next weekday. The name 'Boxing Day' has nothing to do with the sport of boxing.",
          es: "Boxing Day se observa como día festivo en la mayoría de las naciones de la Commonwealth, incluidos el Reino Unido, Canadá, Australia y Nueva Zelanda, pero no en Estados Unidos. Los orígenes del día festivo son debatidos, pero probablemente se relacionen con dar 'cajas de Navidad' (regalos o dinero) a sirvientes, comerciantes y pobres el día después de Navidad. En el Reino Unido, tradicionalmente implicaba que los empleadores dieran cajas de regalos a los empleados. Hoy, Boxing Day es famoso por las ventas de compras (similar al Black Friday en EE.UU.), eventos deportivos como partidos de fútbol de la Premier League y reuniones familiares. En algunos países, si el 26 de diciembre cae en fin de semana, el día festivo se observa el siguiente día de la semana. El nombre 'Boxing Day' no tiene nada que ver con el deporte del boxeo.",
          de: "Boxing Day wird als gesetzlicher Feiertag in den meisten Commonwealth-Nationen beobachtet, einschließlich Großbritannien, Kanada, Australien und Neuseeland, aber nicht in den Vereinigten Staaten. Die Ursprünge des Feiertags werden diskutiert, aber beziehen sich wahrscheinlich auf das Geben von 'Weihnachtsboxen' (Geschenke oder Geld) an Diener, Handwerker und Arme am Tag nach Weihnachten. In Großbritannien beinhaltete es traditionell, dass Arbeitgeber Geschenkboxen an Mitarbeiter gaben. Heute ist Boxing Day berühmt für Einkaufsverkäufe (ähnlich dem Black Friday in den USA), Sportveranstaltungen wie Premier-League-Fußballspiele und Familientreffen. In einigen Ländern, wenn der 26. Dezember auf ein Wochenende fällt, wird der Feiertag am nächsten Wochentag beobachtet. Der Name 'Boxing Day' hat nichts mit dem Sport Boxen zu tun.",
          nl: "Boxing Day wordt waargenomen als een officiële feestdag in de meeste Commonwealth-landen, waaronder het VK, Canada, Australië en Nieuw-Zeeland, maar niet in de Verenigde Staten. De oorsprong van de feestdag wordt betwist, maar hangt waarschijnlijk samen met het geven van 'kerstdozen' (geschenken of geld) aan bedienden, handelslieden en armen de dag na Kerstmis. In het VK hield het traditioneel in dat werkgevers dozen met geschenken aan werknemers gaven. Tegenwoordig is Boxing Day beroemd om winkelverkopen (vergelijkbaar met Black Friday in de VS), sportevenementen zoals Premier League voetbalwedstrijden en familiebijeenkomsten. In sommige landen, als 26 december in een weekend valt, wordt de feestdag op de volgende weekdag waargenomen. De naam 'Boxing Day' heeft niets te maken met de sport boksen."
        },
        category: "culture",
        difficulty: "medium",
        subjects: ["culture", "geography"]
      },
      {
        question: {
          en: "Kwanzaa, a week-long celebration honoring African heritage, begins on December 26. How many principles (or 'Nguzo Saba') does Kwanzaa celebrate?",
          es: "Kwanzaa, una celebración de una semana que honra la herencia africana, comienza el 26 de diciembre. ¿Cuántos principios (o 'Nguzo Saba') celebra Kwanzaa?",
          de: "Kwanzaa, eine einwöchige Feier zur Ehrung des afrikanischen Erbes, beginnt am 26. Dezember. Wie viele Prinzipien (oder 'Nguzo Saba') feiert Kwanzaa?",
          nl: "Kwanzaa, een week durende viering ter ere van het Afrikaanse erfgoed, begint op 26 december. Hoeveel principes (of 'Nguzo Saba') viert Kwanzaa?"
        },
        options: [

          { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" },

          { en: "Seven", es: "Siete", de: "Sieben", nl: "Zeven" },

          { en: "Nine", es: "Nueve", de: "Neun", nl: "Negen" },

          { en: "Twelve", es: "Doce", de: "Zwölf", nl: "Twaalf" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Kwanzaa celebrates seven principles called 'Nguzo Saba' in Swahili: Umoja (Unity), Kujichagulia (Self-Determination), Ujima (Collective Work and Responsibility), Ujamaa (Cooperative Economics), Nia (Purpose), Kuumba (Creativity), and Imani (Faith). Created in 1966 by Dr. Maulana Karenga during the Black Power movement, Kwanzaa runs from December 26 to January 1. Each day focuses on one principle. The celebration includes lighting candles on a kinara (candleholder), African drumming and dancing, storytelling, and a feast called Karamu on December 31. The holiday draws from various African harvest festivals and aims to strengthen African-American cultural identity and community values. Colors of Kwanzaa are black (representing people), red (struggle), and green (hope and future).",
          es: "Kwanzaa celebra siete principios llamados 'Nguzo Saba' en suajili: Umoja (Unidad), Kujichagulia (Autodeterminación), Ujima (Trabajo Colectivo y Responsabilidad), Ujamaa (Economía Cooperativa), Nia (Propósito), Kuumba (Creatividad) e Imani (Fe). Creado en 1966 por el Dr. Maulana Karenga durante el movimiento Black Power, Kwanzaa se extiende del 26 de diciembre al 1 de enero. Cada día se centra en un principio. La celebración incluye encender velas en una kinara (candelabro), tambores y bailes africanos, narración de historias y una fiesta llamada Karamu el 31 de diciembre. La festividad se inspira en varios festivales de cosecha africanos y tiene como objetivo fortalecer la identidad cultural afroamericana y los valores comunitarios. Los colores de Kwanzaa son negro (representando a las personas), rojo (lucha) y verde (esperanza y futuro).",
          de: "Kwanzaa feiert sieben Prinzipien, die auf Suaheli 'Nguzo Saba' genannt werden: Umoja (Einheit), Kujichagulia (Selbstbestimmung), Ujima (Kollektive Arbeit und Verantwortung), Ujamaa (Genossenschaftliche Wirtschaft), Nia (Zweck), Kuumba (Kreativität) und Imani (Glaube). Kwanzaa wurde 1966 von Dr. Maulana Karenga während der Black Power-Bewegung geschaffen und läuft vom 26. Dezember bis zum 1. Januar. Jeder Tag konzentriert sich auf ein Prinzip. Die Feier umfasst das Anzünden von Kerzen auf einer Kinara (Kerzenhalter), afrikanisches Trommeln und Tanzen, Geschichtenerzählen und ein Fest namens Karamu am 31. Dezember. Der Feiertag schöpft aus verschiedenen afrikanischen Erntefesten und zielt darauf ab, die afroamerikanische kulturelle Identität und Gemeinschaftswerte zu stärken. Die Farben von Kwanzaa sind Schwarz (repräsentiert Menschen), Rot (Kampf) und Grün (Hoffnung und Zukunft).",
          nl: "Kwanzaa viert zeven principes genaamd 'Nguzo Saba' in het Swahili: Umoja (Eenheid), Kujichagulia (Zelfbeschikking), Ujima (Collectief Werk en Verantwoordelijkheid), Ujamaa (Coöperatieve Economie), Nia (Doel), Kuumba (Creativiteit) en Imani (Geloof). Gecreëerd in 1966 door Dr. Maulana Karenga tijdens de Black Power-beweging, loopt Kwanzaa van 26 december tot 1 januari. Elke dag richt zich op één principe. De viering omvat het aansteken van kaarsen op een kinara (kandelaar), Afrikaans trommelen en dansen, verhalen vertellen en een feest genaamd Karamu op 31 december. De feestdag put uit verschillende Afrikaanse oogstfestivals en heeft als doel de Afrikaans-Amerikaanse culturele identiteit en gemeenschapswaarden te versterken. De kleuren van Kwanzaa zijn zwart (dat mensen vertegenwoordigt), rood (strijd) en groen (hoop en toekomst)."
        },
        category: "culture",
        difficulty: "medium",
        subjects: ["culture", "traditions"]
      },
      {
        question: {
          en: "On December 26, 2004, a devastating tsunami struck multiple countries in the Indian Ocean. Approximately how many people died in this disaster?",
          es: "El 26 de diciembre de 2004, un tsunami devastador golpeó múltiples países en el Océano Índico. ¿Aproximadamente cuántas personas murieron en este desastre?",
          de: "Am 26. Dezember 2004 traf ein verheerender Tsunami mehrere Länder im Indischen Ozean. Wie viele Menschen starben ungefähr bei dieser Katastrophe?",
          nl: "Op 26 december 2004 trof een verwoestende tsunami meerdere landen in de Indische Oceaan. Hoeveel mensen stierven er ongeveer bij deze ramp?"
        },
        options: [

          { en: "50,000", es: "50.000", de: "50.000", nl: "50.000" },

          { en: "100,000", es: "100.000", de: "100.000", nl: "100.000" },

          { en: "230,000", es: "230.000", de: "230.000", nl: "230.000" },

          { en: "500,000", es: "500.000", de: "500.000", nl: "500.000" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The 2004 Indian Ocean earthquake and tsunami killed approximately 230,000 people across 14 countries, making it one of the deadliest natural disasters in recorded history. The magnitude 9.1-9.3 earthquake occurred off Sumatra, Indonesia, triggering massive waves up to 30 meters (100 feet) high. Indonesia was hardest hit with over 160,000 deaths, followed by Sri Lanka, India, and Thailand. The disaster affected tourists from around the world, bringing global attention. The lack of a tsunami warning system in the Indian Ocean contributed to the high death toll. The tragedy led to improved tsunami detection systems and international cooperation on disaster preparedness. The event generated unprecedented global humanitarian response and raised awareness about earthquake-triggered tsunamis.",
          es: "El terremoto y tsunami del Océano Índico de 2004 mató a aproximadamente 230,000 personas en 14 países, convirtiéndolo en uno de los desastres naturales más mortales de la historia registrada. El terremoto de magnitud 9.1-9.3 ocurrió frente a Sumatra, Indonesia, desencadenando olas masivas de hasta 30 metros (100 pies) de altura. Indonesia fue la más afectada con más de 160,000 muertes, seguida de Sri Lanka, India y Tailandia. El desastre afectó a turistas de todo el mundo, atrayendo atención global. La falta de un sistema de advertencia de tsunamis en el Océano Índico contribuyó al alto número de víctimas. La tragedia condujo a sistemas mejorados de detección de tsunamis y cooperación internacional en preparación para desastres. El evento generó una respuesta humanitaria global sin precedentes y aumentó la conciencia sobre tsunamis provocados por terremotos.",
          de: "Das Erdbeben und der Tsunami im Indischen Ozean von 2004 töteten etwa 230.000 Menschen in 14 Ländern und machten es zu einer der tödlichsten Naturkatastrophen in der aufgezeichneten Geschichte. Das Erdbeben der Stärke 9,1-9,3 ereignete sich vor Sumatra, Indonesien, und löste massive Wellen von bis zu 30 Metern (100 Fuß) Höhe aus. Indonesien war am stärksten betroffen mit über 160.000 Toten, gefolgt von Sri Lanka, Indien und Thailand. Die Katastrophe betraf Touristen aus der ganzen Welt und brachte globale Aufmerksamkeit. Das Fehlen eines Tsunami-Warnsystems im Indischen Ozean trug zur hohen Zahl der Todesopfer bei. Die Tragödie führte zu verbesserten Tsunami-Erkennungssystemen und internationaler Zusammenarbeit bei der Katastrophenvorsorge. Das Ereignis löste eine beispiellose globale humanitäre Reaktion aus und erhöhte das Bewusstsein für durch Erdbeben ausgelöste Tsunamis.",
          nl: "De aardbeving en tsunami in de Indische Oceaan in 2004 doodde ongeveer 230.000 mensen in 14 landen, waardoor het een van de dodelijkste natuurrampen in de geregistreerde geschiedenis is. De aardbeving met een kracht van 9,1-9,3 vond plaats bij Sumatra, Indonesië, en veroorzaakte massale golven tot 30 meter (100 voet) hoog. Indonesië werd het zwaarst getroffen met meer dan 160.000 doden, gevolgd door Sri Lanka, India en Thailand. De ramp trof toeristen van over de hele wereld, wat wereldwijde aandacht trok. Het ontbreken van een tsunami-waarschuwingssysteem in de Indische Oceaan droeg bij aan het hoge dodental. De tragedie leidde tot verbeterde tsunami-detectiesystemen en internationale samenwerking op het gebied van rampenparaatheid. Het evenement genereerde een ongekende mondiale humanitaire respons en verhoogde het bewustzijn over door aardbevingen veroorzaakte tsunami's."
        },
        category: "history",
        difficulty: "hard",
        subjects: ["history", "science"]
      },
      {
        question: {
          en: "Which famous Chinese revolutionary leader was born on December 26, 1893?",
          es: "¿Qué famoso líder revolucionario chino nació el 26 de diciembre de 1893?",
          de: "Welcher berühmte chinesische revolutionäre Führer wurde am 26. Dezember 1893 geboren?",
          nl: "Welke beroemde Chinese revolutionaire leider werd geboren op 26 december 1893?"
        },
        options: [

          { en: "Sun Yat-sen", es: "Sun Yat-sen", de: "Sun Yat-sen", nl: "Sun Yat-sen" },

          { en: "Chiang Kai-shek", es: "Chiang Kai-shek", de: "Chiang Kai-shek", nl: "Chiang Kai-shek" },

          { en: "Mao Zedong", es: "Mao Zedong", de: "Mao Zedong", nl: "Mao Zedong" },

          { en: "Deng Xiaoping", es: "Deng Xiaoping", de: "Deng Xiaoping", nl: "Deng Xiaoping" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Mao Zedong was born on December 26, 1893, in Shaoshan, Hunan Province, China. He founded the People's Republic of China in 1949 and served as its leader until his death in 1976. Mao led the Chinese Communist Party through the Long March (1934-1935), the war against Japan, and the Chinese Civil War. His policies included the Great Leap Forward (1958-1962), which caused widespread famine, and the Cultural Revolution (1966-1976), which brought social and economic upheaval. Mao's legacy is complex and controversial: he modernized China and improved literacy and healthcare, but his policies also caused millions of deaths. His Little Red Book became a symbol of communist ideology worldwide. Mao remains an iconic figure in Chinese history, with his portrait still displayed in Tiananmen Square.",
          es: "Mao Zedong nació el 26 de diciembre de 1893 en Shaoshan, provincia de Hunan, China. Fundó la República Popular China en 1949 y se desempeñó como su líder hasta su muerte en 1976. Mao lideró al Partido Comunista Chino a través de la Larga Marcha (1934-1935), la guerra contra Japón y la Guerra Civil China. Sus políticas incluyeron el Gran Salto Adelante (1958-1962), que causó hambruna generalizada, y la Revolución Cultural (1966-1976), que trajo agitación social y económica. El legado de Mao es complejo y controvertido: modernizó China y mejoró la alfabetización y la atención médica, pero sus políticas también causaron millones de muertes. Su Pequeño Libro Rojo se convirtió en un símbolo de la ideología comunista en todo el mundo. Mao sigue siendo una figura icónica en la historia china, con su retrato aún exhibido en la Plaza de Tiananmen.",
          de: "Mao Zedong wurde am 26. Dezember 1893 in Shaoshan, Provinz Hunan, China, geboren. Er gründete die Volksrepublik China 1949 und diente als ihr Führer bis zu seinem Tod 1976. Mao führte die Kommunistische Partei Chinas durch den Langen Marsch (1934-1935), den Krieg gegen Japan und den chinesischen Bürgerkrieg. Seine Politiken umfassten den Großen Sprung nach vorn (1958-1962), der weit verbreitete Hungersnot verursachte, und die Kulturrevolution (1966-1976), die soziale und wirtschaftliche Umwälzungen brachte. Maos Vermächtnis ist komplex und umstritten: Er modernisierte China und verbesserte Alphabetisierung und Gesundheitsversorgung, aber seine Politiken verursachten auch Millionen von Toten. Sein Kleines Rotes Buch wurde weltweit zum Symbol kommunistischer Ideologie. Mao bleibt eine ikonische Figur in der chinesischen Geschichte, sein Porträt wird immer noch am Tiananmen-Platz ausgestellt.",
          nl: "Mao Zedong werd geboren op 26 december 1893 in Shaoshan, provincie Hunan, China. Hij stichtte de Volksrepubliek China in 1949 en diende als leider tot zijn dood in 1976. Mao leidde de Chinese Communistische Partij door de Lange Mars (1934-1935), de oorlog tegen Japan en de Chinese Burgeroorlog. Zijn beleid omvatte de Grote Sprong Voorwaarts (1958-1962), die wijdverspreide hongersnood veroorzaakte, en de Culturele Revolutie (1966-1976), die sociale en economische onrust bracht. Mao's nalatenschap is complex en controversieel: hij moderniseerde China en verbeterde geletterdheid en gezondheidszorg, maar zijn beleid veroorzaakte ook miljoenen doden. Zijn Kleine Rode Boekje werd wereldwijd een symbool van communistische ideologie. Mao blijft een iconische figuur in de Chinese geschiedenis, met zijn portret nog steeds tentoongesteld op het Tiananmen-plein."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "politics"]
      },
      {
        question: {
          en: "St. Stephen's Day is celebrated on December 26 in many Christian traditions. According to Christian belief, how did St. Stephen die?",
          es: "El Día de San Esteban se celebra el 26 de diciembre en muchas tradiciones cristianas. Según la creencia cristiana, ¿cómo murió San Esteban?",
          de: "Der Stephanstag wird am 26. Dezember in vielen christlichen Traditionen gefeiert. Wie starb der Heilige Stephanus gemäß dem christlichen Glauben?",
          nl: "Stefanusdag wordt gevierd op 26 december in veel christelijke tradities. Hoe stierf Sint-Stefanus volgens christelijk geloof?"
        },
        options: [

          { en: "Crucifixion", es: "Crucifixión", de: "Kreuzigung", nl: "Kruisiging" },

          { en: "Stoning", es: "Lapidación", de: "Steinigung", nl: "Steniging" },

          { en: "Burning", es: "Quemado", de: "Verbrennung", nl: "Verbranding" },

          { en: "Beheading", es: "Decapitación", de: "Enthauptung", nl: "Onthoofding" }

        ],
        correctIndex: 1,
        explanation: {
          en: "According to the Acts of the Apostles (Acts 7:54-60), St. Stephen was stoned to death around 34-36 CE in Jerusalem, making him Christianity's first martyr (protomartyr). Stephen was one of the first seven deacons appointed by the apostles. He was accused of blasphemy by Jewish religious authorities for his preaching about Jesus. Before his death, Stephen reportedly had a vision of Jesus standing at God's right hand. His dying words were similar to Jesus's on the cross, asking God to forgive his killers: 'Lord, do not hold this sin against them.' Saul of Tarsus (who later became St. Paul) witnessed and approved of Stephen's execution. St. Stephen's Day is observed on December 26 in Western Christianity and December 27 in Eastern Christianity. His martyrdom inspired many early Christians.",
          es: "Según los Hechos de los Apóstoles (Hechos 7:54-60), San Esteban fue lapidado hasta la muerte alrededor del 34-36 d.C. en Jerusalén, convirtiéndolo en el primer mártir del cristianismo (protomártir). Esteban fue uno de los primeros siete diáconos nombrados por los apóstoles. Fue acusado de blasfemia por las autoridades religiosas judías por su predicación sobre Jesús. Antes de su muerte, Esteban supuestamente tuvo una visión de Jesús de pie a la derecha de Dios. Sus últimas palabras fueron similares a las de Jesús en la cruz, pidiendo a Dios que perdonara a sus asesinos: 'Señor, no les tengas en cuenta este pecado'. Saulo de Tarso (quien más tarde se convirtió en San Pablo) fue testigo y aprobó la ejecución de Esteban. El Día de San Esteban se observa el 26 de diciembre en el cristianismo occidental y el 27 de diciembre en el cristianismo oriental. Su martirio inspiró a muchos cristianos primitivos.",
          de: "Laut der Apostelgeschichte (Apostelgeschichte 7:54-60) wurde der Heilige Stephanus um 34-36 n. Chr. in Jerusalem gesteinigt, was ihn zum ersten Märtyrer des Christentums (Protomärtyrer) macht. Stephanus war einer der ersten sieben Diakone, die von den Aposteln ernannt wurden. Er wurde von jüdischen religiösen Autoritäten der Blasphemie beschuldigt für seine Predigt über Jesus. Vor seinem Tod hatte Stephanus angeblich eine Vision von Jesus, der zur Rechten Gottes stand. Seine letzten Worte waren ähnlich denen Jesu am Kreuz und baten Gott, seinen Mördern zu vergeben: 'Herr, rechne ihnen diese Sünde nicht an.' Saulus von Tarsus (der später zum Heiligen Paulus wurde) war Zeuge und billigte Stephanus' Hinrichtung. Der Stephanstag wird am 26. Dezember im westlichen Christentum und am 27. Dezember im östlichen Christentum beobachtet. Sein Martyrium inspirierte viele frühe Christen.",
          nl: "Volgens de Handelingen van de Apostelen (Handelingen 7:54-60) werd Sint-Stefanus rond 34-36 n.Chr. in Jeruzalem gestenigd, waardoor hij de eerste martelaar van het christendom werd (protomartyr). Stefanus was een van de eerste zeven diakenen aangesteld door de apostelen. Hij werd beschuldigd van godslastering door Joodse religieuze autoriteiten vanwege zijn prediking over Jezus. Voor zijn dood had Stefanus naar verluidt een visioen van Jezus staande aan Gods rechterhand. Zijn laatste woorden waren vergelijkbaar met die van Jezus aan het kruis, waarbij hij God vroeg zijn moordenaars te vergeven: 'Heer, reken hun deze zonde niet aan.' Saulus van Tarsus (die later Sint-Paulus werd) was getuige van en keurde de executie van Stefanus goed. Stefanusdag wordt waargenomen op 26 december in het westerse christendom en 27 december in het oosterse christendom. Zijn martelaarschap inspireerde veel vroege christenen."
        },
        category: "religion",
        difficulty: "hard",
        subjects: ["religion", "history"]
      }
    ],

    day27: [ /* 5 questions */
      {
        question: {
          en: "Radio City Music Hall, an iconic entertainment venue in New York City, opened on December 27, 1932. In which famous building complex is it located?",
          es: "El Radio City Music Hall, un lugar de entretenimiento icónico en la ciudad de Nueva York, se inauguró el 27 de diciembre de 1932. ¿En qué famoso complejo de edificios se encuentra?",
          de: "Die Radio City Music Hall, eine ikonische Unterhaltungsstätte in New York City, wurde am 27. Dezember 1932 eröffnet. In welchem berühmten Gebäudekomplex befindet sie sich?",
          nl: "Radio City Music Hall, een iconische entertainmentlocatie in New York City, opende op 27 december 1932. In welk beroemd gebouwencomplex bevindt het zich?"
        },
        options: [

          { en: "Empire State Building", es: "Empire State Building", de: "Empire State Building", nl: "Empire State Building" },

          { en: "Rockefeller Center", es: "Rockefeller Center", de: "Rockefeller Center", nl: "Rockefeller Center" },

          { en: "Times Square", es: "Times Square", de: "Times Square", nl: "Times Square" },

          { en: "Grand Central Terminal", es: "Grand Central Terminal", de: "Grand Central Terminal", nl: "Grand Central Terminal" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Radio City Music Hall is located in Rockefeller Center in Midtown Manhattan. It opened on December 27, 1932, during the Great Depression as the world's largest indoor theater, seating nearly 6,000 people. The Art Deco venue was designed by architect Edward Durell Stone and designer Donald Deskey. Radio City is famous for hosting the precision dance company the Rockettes and their annual Christmas Spectacular show since 1933. The venue has hosted countless concerts, award shows, and premieres. Its grand lobby features magnificent Art Deco murals and chandeliers. Radio City was designated a New York City Landmark in 1978. The theater underwent major restoration in 1999. It remains one of New York's premier entertainment venues and tourist attractions, earning the nickname 'Showplace of the Nation.'",
          es: "El Radio City Music Hall se encuentra en el Rockefeller Center en Midtown Manhattan. Se inauguró el 27 de diciembre de 1932, durante la Gran Depresión, como el teatro interior más grande del mundo, con capacidad para casi 6,000 personas. El lugar Art Deco fue diseñado por el arquitecto Edward Durell Stone y el diseñador Donald Deskey. Radio City es famoso por albergar a la compañía de danza de precisión las Rockettes y su espectáculo anual Christmas Spectacular desde 1933. El lugar ha albergado innumerables conciertos, ceremonias de premios y estrenos. Su gran vestíbulo presenta magníficos murales y candelabros Art Deco. Radio City fue designado Monumento de la Ciudad de Nueva York en 1978. El teatro se sometió a una importante restauración en 1999. Sigue siendo uno de los principales lugares de entretenimiento y atracciones turísticas de Nueva York, ganándose el apodo de 'Showplace of the Nation'.",
          de: "Die Radio City Music Hall befindet sich im Rockefeller Center in Midtown Manhattan. Sie wurde am 27. Dezember 1932 während der Großen Depression als das weltweit größte Innentheater mit Platz für fast 6.000 Menschen eröffnet. Der Art-Deco-Veranstaltungsort wurde vom Architekten Edward Durell Stone und dem Designer Donald Deskey entworfen. Radio City ist berühmt für die Präzisionstanzcompany der Rockettes und ihre jährliche Christmas Spectacular Show seit 1933. Der Veranstaltungsort hat unzählige Konzerte, Preisverleihungen und Premieren beherbergt. Die große Lobby zeigt prächtige Art-Deco-Wandmalereien und Kronleuchter. Radio City wurde 1978 zum New York City Landmark ernannt. Das Theater wurde 1999 umfassend restauriert. Es bleibt einer von New Yorks führenden Unterhaltungsorten und Touristenattraktionen und trägt den Spitznamen 'Showplace of the Nation'.",
          nl: "Radio City Music Hall bevindt zich in Rockefeller Center in Midtown Manhattan. Het opende op 27 december 1932, tijdens de Grote Depressie als 's werelds grootste overdekte theater, met plaats voor bijna 6.000 mensen. De Art Deco-locatie werd ontworpen door architect Edward Durell Stone en ontwerper Donald Deskey. Radio City is beroemd om het huisvesten van het precisieda­ns­gezelschap de Rockettes en hun jaarlijkse Christmas Spectacular show sinds 1933. De locatie heeft talloze concerten, prijsuitreikingen en premières gehuisvest. De grote lobby bevat prachtige Art Deco-muurschilderingen en kroonluchters. Radio City werd in 1978 aangewezen als New York City Landmark. Het theater onderging een grote restauratie in 1999. Het blijft een van New Yorks belangrijkste entertainmentlocaties en toeristische attracties, en heeft de bijnaam 'Showplace of the Nation' verdiend."
        },
        category: "entertainment",
        difficulty: "medium",
        subjects: ["entertainment", "architecture"]
      },
      {
        question: {
          en: "On December 27, 1885, French scientist Louis Pasteur successfully administered the first rabies vaccination. What was revolutionary about this treatment?",
          es: "El 27 de diciembre de 1885, el científico francés Louis Pasteur administró con éxito la primera vacuna contra la rabia. ¿Qué fue revolucionario sobre este tratamiento?",
          de: "Am 27. Dezember 1885 verabreichte der französische Wissenschaftler Louis Pasteur erfolgreich die erste Tollwutimpfung. Was war revolutionär an dieser Behandlung?",
          nl: "Op 27 december 1885 diende de Franse wetenschapper Louis Pasteur met succes de eerste rabiësvaccinatie toe. Wat was revolutionair aan deze behandeling?"
        },
        options: [
          { en: "It required only one dose", es: "Requería solo una dosis", de: "Sie benötigte nur eine Dosis", nl: "Het vereiste slechts één dosis" },
          { en: "It was the first oral vaccine", es: "Fue la primera vacuna oral", de: "Es war die erste orale Impfung", nl: "Het was het eerste orale vaccin" },
          { en: "It was given after infection had occurred", es: "Se administró después de que ocurrió la infección", de: "Sie wurde nach der Infektion verabreicht", nl: "Het werd toegediend nadat infectie was opgetreden" },
          { en: "It used live virus", es: "Utilizó virus vivo", de: "Sie verwendete lebende Viren", nl: "Het gebruikte levend virus" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Pasteur's rabies treatment was revolutionary because it was a post-exposure prophylaxis - it could be administered after someone was bitten by a rabid animal but before symptoms appeared. Previously, rabies was considered 100% fatal once symptoms developed. The treatment involved a series of injections using weakened (attenuated) rabies virus from infected rabbit spinal cords. The first patient was 9-year-old Joseph Meister, who had been severely bitten by a rabid dog. The treatment saved his life, though Pasteur, not being a licensed physician, took considerable legal and ethical risk. The success established the principle of vaccination after exposure, which works because rabies has a long incubation period. This breakthrough made Pasteur internationally famous and led to the founding of the Pasteur Institute in 1887. Modern rabies post-exposure treatment is still based on this principle.",
          es: "El tratamiento de la rabia de Pasteur fue revolucionario porque era una profilaxis post-exposición: podía administrarse después de que alguien fuera mordido por un animal rabioso pero antes de que aparecieran los síntomas. Anteriormente, la rabia se consideraba 100% fatal una vez que se desarrollaban los síntomas. El tratamiento involucró una serie de inyecciones usando virus de rabia debilitado (atenuado) de médulas espinales de conejos infectados. El primer paciente fue Joseph Meister, de 9 años, quien había sido gravemente mordido por un perro rabioso. El tratamiento salvó su vida, aunque Pasteur, al no ser médico licenciado, tomó un riesgo legal y ético considerable. El éxito estableció el principio de vacunación después de la exposición, que funciona porque la rabia tiene un largo período de incubación. Este avance hizo a Pasteur internacionalmente famoso y llevó a la fundación del Instituto Pasteur en 1887. El tratamiento post-exposición moderno de la rabia todavía se basa en este principio.",
          de: "Pasteurs Tollwutbehandlung war revolutionär, weil sie eine Post-Expositions-Prophylaxe war - sie konnte verabreicht werden, nachdem jemand von einem tollwütigen Tier gebissen wurde, aber bevor Symptome auftraten. Zuvor galt Tollwut als 100% tödlich, sobald sich Symptome entwickelten. Die Behandlung umfasste eine Reihe von Injektionen mit abgeschwächtem (attenuiertem) Tollwutvirus aus infizierten Kaninchen-Rückenmarkssträngen. Der erste Patient war der 9-jährige Joseph Meister, der schwer von einem tollwütigen Hund gebissen worden war. Die Behandlung rettete sein Leben, obwohl Pasteur, der kein zugelassener Arzt war, ein erhebliches rechtliches und ethisches Risiko einging. Der Erfolg etablierte das Prinzip der Impfung nach Exposition, das funktioniert, weil Tollwut eine lange Inkubationszeit hat. Dieser Durchbruch machte Pasteur international berühmt und führte 1887 zur Gründung des Pasteur-Instituts. Die moderne Post-Expositions-Behandlung von Tollwut basiert immer noch auf diesem Prinzip.",
          nl: "Pasteurs rabiësbehandeling was revolutionair omdat het een post-blootstellingsprofylaxe was - het kon worden toegediend nadat iemand was gebeten door een hondsdol dier maar voordat symptomen verschenen. Voorheen werd rabiës als 100% dodelijk beschouwd zodra symptomen zich ontwikkelden. De behandeling omvatte een reeks injecties met verzwakt (geattenueerd) rabiësvirus van geïnfecteerde konijnenruggenmerg. De eerste patiënt was de 9-jarige Joseph Meister, die ernstig was gebeten door een hondsdolle hond. De behandeling redde zijn leven, hoewel Pasteur, geen gelicentieerd arts zijnde, een aanzienlijk juridisch en ethisch risico nam. Het succes vestigde het principe van vaccinatie na blootstelling, wat werkt omdat rabiës een lange incubatietijd heeft. Deze doorbraak maakte Pasteur internationaal beroemd en leidde tot de oprichting van het Pasteur Instituut in 1887. Moderne rabiës post-blootstellingsbehandeling is nog steeds gebaseerd op dit principe."
        },
        category: "science",
        difficulty: "hard",
        subjects: ["science", "medicine"]
      },
      {
        question: {
          en: "Which famous astronomer and mathematician, known for his laws of planetary motion, was born on December 27, 1571?",
          es: "¿Qué famoso astrónomo y matemático, conocido por sus leyes del movimiento planetario, nació el 27 de diciembre de 1571?",
          de: "Welcher berühmte Astronom und Mathematiker, bekannt für seine Gesetze der Planetenbewegung, wurde am 27. Dezember 1571 geboren?",
          nl: "Welke beroemde astronoom en wiskundige, bekend om zijn wetten van planetaire beweging, werd geboren op 27 december 1571?"
        },
        options: [

          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },

          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },

          { en: "Nicolaus Copernicus", es: "Nicolás Copérnico", de: "Nikolaus Kopernikus", nl: "Nicolaas Copernicus" },

          { en: "Tycho Brahe", es: "Tycho Brahe", de: "Tycho Brahe", nl: "Tycho Brahe" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Johannes Kepler was born on December 27, 1571, in Weil der Stadt, Germany. He formulated the three fundamental laws of planetary motion: (1) planets orbit in ellipses with the Sun at one focus; (2) planets sweep out equal areas in equal times; and (3) the square of a planet's orbital period is proportional to the cube of its distance from the Sun. These laws, published between 1609-1619, revolutionized astronomy by showing that planetary orbits are elliptical, not circular. Kepler worked with Tycho Brahe's precise astronomical observations to develop his theories. He also made contributions to optics, discovered two moons of Jupiter, and described how telescopes work. Kepler's laws provided the foundation for Isaac Newton's theory of universal gravitation. His work represents a key transition from ancient to modern astronomy and established mathematical physics as a scientific discipline.",
          es: "Johannes Kepler nació el 27 de diciembre de 1571 en Weil der Stadt, Alemania. Formuló las tres leyes fundamentales del movimiento planetario: (1) los planetas orbitan en elipses con el Sol en uno de los focos; (2) los planetas barren áreas iguales en tiempos iguales; y (3) el cuadrado del período orbital de un planeta es proporcional al cubo de su distancia del Sol. Estas leyes, publicadas entre 1609-1619, revolucionaron la astronomía al mostrar que las órbitas planetarias son elípticas, no circulares. Kepler trabajó con las precisas observaciones astronómicas de Tycho Brahe para desarrollar sus teorías. También hizo contribuciones a la óptica, descubrió dos lunas de Júpiter y describió cómo funcionan los telescopios. Las leyes de Kepler proporcionaron la base para la teoría de la gravitación universal de Isaac Newton. Su trabajo representa una transición clave de la astronomía antigua a la moderna y estableció la física matemática como disciplina científica.",
          de: "Johannes Kepler wurde am 27. Dezember 1571 in Weil der Stadt, Deutschland, geboren. Er formulierte die drei fundamentalen Gesetze der Planetenbewegung: (1) Planeten bewegen sich in Ellipsen mit der Sonne in einem Brennpunkt; (2) Planeten überstreichen gleiche Flächen in gleichen Zeiten; und (3) das Quadrat der Umlaufzeit eines Planeten ist proportional zum Kubus seines Abstands von der Sonne. Diese zwischen 1609-1619 veröffentlichten Gesetze revolutionierten die Astronomie, indem sie zeigten, dass Planetenbahnen elliptisch und nicht kreisförmig sind. Kepler arbeitete mit Tycho Brahes präzisen astronomischen Beobachtungen, um seine Theorien zu entwickeln. Er leistete auch Beiträge zur Optik, entdeckte zwei Monde des Jupiter und beschrieb, wie Teleskope funktionieren. Keplers Gesetze bildeten die Grundlage für Isaac Newtons Theorie der universellen Gravitation. Seine Arbeit stellt einen Schlüsselübergang von der antiken zur modernen Astronomie dar und etablierte die mathematische Physik als wissenschaftliche Disziplin.",
          nl: "Johannes Kepler werd geboren op 27 december 1571 in Weil der Stadt, Duitsland. Hij formuleerde de drie fundamentele wetten van planetaire beweging: (1) planeten bewegen in ellipsen met de zon in één brandpunt; (2) planeten bestrijken gelijke gebieden in gelijke tijden; en (3) het kwadraat van de omlooptijd van een planeet is evenredig met de kubus van zijn afstand tot de zon. Deze wetten, gepubliceerd tussen 1609-1619, revolutioneerden de astronomie door te tonen dat planetaire banen elliptisch zijn, niet cirkelvormig. Kepler werkte met Tycho Brahe's precieze astronomische observaties om zijn theorieën te ontwikkelen. Hij leverde ook bijdragen aan optica, ontdekte twee manen van Jupiter en beschreef hoe telescopen werken. Keplers wetten vormden de basis voor Isaac Newtons theorie van universele gravitatie. Zijn werk vertegenwoordigt een belangrijke overgang van oude naar moderne astronomie en vestigde de wiskundige fysica als wetenschappelijke discipline."
        },
        category: "science",
        difficulty: "medium",
        subjects: ["science", "history"]
      },
      {
        question: {
          en: "What significant event in space exploration occurred on December 27, 1968?",
          es: "¿Qué evento significativo en la exploración espacial ocurrió el 27 de diciembre de 1968?",
          de: "Welches bedeutende Ereignis in der Raumfahrt ereignete sich am 27. Dezember 1968?",
          nl: "Welke belangrijke gebeurtenis in ruimteverkenning vond plaats op 27 december 1968?"
        },
        options: [

          { en: "First Moon landing", es: "Primer alunizaje", de: "Erste Mondlandung", nl: "Eerste maanlanding" },

          { en: "Apollo 8 returned to Earth", es: "El Apolo 8 regresó a la Tierra", de: "Apollo 8 kehrte zur Erde zurück", nl: "Apollo 8 keerde terug naar de aarde" },

          { en: "First satellite launched", es: "Primer satélite lanzado", de: "Erster Satellit gestartet", nl: "Eerste satelliet gelanceerd" },

          { en: "First space walk", es: "Primera caminata espacial", de: "Erster Weltraumspaziergang", nl: "Eerste ruimtewandeling" }

        ],
        correctIndex: 1,
        explanation: {
          en: "On December 27, 1968, Apollo 8 splashed down safely in the Pacific Ocean, completing humanity's first journey to orbit the Moon. The crew of Frank Borman, Jim Lovell, and William Anders had launched on December 21, orbited the Moon on Christmas Eve (December 24), and returned three days later. The mission was a crucial test before the Apollo 11 Moon landing. During their 10 orbits around the Moon, the crew took the famous 'Earthrise' photograph and broadcast a Christmas Eve message reading from Genesis, watched by millions worldwide. The mission demonstrated that the Saturn V rocket and Apollo spacecraft could safely transport humans to the Moon and back. Apollo 8 was a major Cold War achievement for the United States, beating the Soviet Union in the space race milestone of reaching the Moon. The successful return boosted confidence for the eventual Moon landing in July 1969.",
          es: "El 27 de diciembre de 1968, el Apolo 8 amerizó de forma segura en el Océano Pacífico, completando el primer viaje de la humanidad para orbitar la Luna. La tripulación de Frank Borman, Jim Lovell y William Anders se había lanzado el 21 de diciembre, orbitó la Luna en Nochebuena (24 de diciembre) y regresó tres días después. La misión fue una prueba crucial antes del alunizaje del Apolo 11. Durante sus 10 órbitas alrededor de la Luna, la tripulación tomó la famosa fotografía 'Salida de la Tierra' y transmitió un mensaje de Nochebuena leyendo del Génesis, visto por millones en todo el mundo. La misión demostró que el cohete Saturno V y la nave espacial Apolo podían transportar de forma segura a humanos a la Luna y de regreso. El Apolo 8 fue un logro importante de la Guerra Fría para Estados Unidos, superando a la Unión Soviética en el hito de la carrera espacial de llegar a la Luna. El regreso exitoso aumentó la confianza para el eventual alunizaje en julio de 1969.",
          de: "Am 27. Dezember 1968 wasserte Apollo 8 sicher im Pazifischen Ozean und vollendete die erste Reise der Menschheit, den Mond zu umkreisen. Die Besatzung aus Frank Borman, Jim Lovell und William Anders war am 21. Dezember gestartet, umkreiste den Mond an Heiligabend (24. Dezember) und kehrte drei Tage später zurück. Die Mission war ein entscheidender Test vor der Apollo-11-Mondlandung. Während ihrer 10 Umlaufbahnen um den Mond machte die Besatzung das berühmte 'Erdaufgang'-Foto und sendete eine Heiligabend-Botschaft mit Lesungen aus Genesis, die von Millionen weltweit gesehen wurde. Die Mission demonstrierte, dass die Saturn-V-Rakete und das Apollo-Raumschiff Menschen sicher zum Mond und zurück transportieren konnten. Apollo 8 war eine bedeutende Errungenschaft des Kalten Krieges für die Vereinigten Staaten und schlug die Sowjetunion beim Meilenstein des Weltraumrennens, den Mond zu erreichen. Die erfolgreiche Rückkehr stärkte das Vertrauen für die eventuelle Mondlandung im Juli 1969.",
          nl: "Op 27 december 1968 landde Apollo 8 veilig in de Stille Oceaan en voltooide zo de eerste reis van de mensheid om de maan te omcirkelen. De bemanning van Frank Borman, Jim Lovell en William Anders was gelanceerd op 21 december, cirkelde rond de maan op kerstavond (24 december) en keerde drie dagen later terug. De missie was een cruciale test voor de Apollo 11 maanlanding. Tijdens hun 10 omwentelingen rond de maan maakte de bemanning de beroemde 'Aardopkomst'-foto en zond een kerstboodschap uit met lezingen uit Genesis, bekeken door miljoenen wereldwijd. De missie toonde aan dat de Saturn V-raket en het Apollo-ruimtevaartuig mensen veilig naar de maan en terug konden transporteren. Apollo 8 was een belangrijke Koude Oorlog-prestatie voor de Verenigde Staten, waarbij de Sovjet-Unie werd verslagen in de mijlpaal van de ruimtewedloop om de maan te bereiken. De succesvolle terugkeer vergrootte het vertrouwen voor de uiteindelijke maanlanding in juli 1969."
        },
        category: "science",
        difficulty: "hard",
        subjects: ["science", "history"]
      },
      {
        question: {
          en: "The Howdy Doody Show, one of the first major children's television programs, premiered on December 27, 1947. On which network did it air?",
          es: "El programa Howdy Doody, uno de los primeros grandes programas de televisión para niños, se estrenó el 27 de diciembre de 1947. ¿En qué cadena se transmitió?",
          de: "Die Howdy Doody Show, eine der ersten großen Kinderfernsehsendungen, wurde am 27. Dezember 1947 uraufgeführt. Auf welchem Sender wurde sie ausgestrahlt?",
          nl: "The Howdy Doody Show, een van de eerste grote kindertelevisie­programma's, ging in première op 27 december 1947. Op welk netwerk werd het uitgezonden?"
        },
        options: [

          { en: "CBS", es: "CBS", de: "CBS", nl: "CBS" },

          { en: "NBC", es: "NBC", de: "NBC", nl: "NBC" },

          { en: "ABC", es: "ABC", de: "ABC", nl: "ABC" },

          { en: "DuMont", es: "DuMont", de: "DuMont", nl: "DuMont" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Howdy Doody Show premiered on NBC on December 27, 1947, and ran until 1960, becoming one of the most popular children's programs in early television history. The show featured a freckle-faced puppet cowboy named Howdy Doody and was hosted by 'Buffalo Bob' Smith. It was broadcast from NBC's studios in Rockefeller Center in New York. The show aired five days a week and attracted audiences of both children and adults. The studio audience, called the 'Peanut Gallery,' consisted of 40 children who sat in bleachers. Characters included Clarabell the Clown, Princess Summerfall Winterspring, and various puppets. The show pioneered many aspects of children's television and merchandising. Its famous closing line was 'It's Howdy Doody Time!' The show's finale in 1960 was watched by millions and ended with Clarabell speaking his only words: 'Goodbye, kids.'",
          es: "El programa Howdy Doody se estrenó en NBC el 27 de diciembre de 1947 y se transmitió hasta 1960, convirtiéndose en uno de los programas infantiles más populares en la historia temprana de la televisión. El programa presentaba una marioneta de vaquero con pecas llamada Howdy Doody y fue presentado por 'Buffalo Bob' Smith. Se transmitió desde los estudios de NBC en el Rockefeller Center en Nueva York. El programa se transmitió cinco días a la semana y atrajo audiencias de niños y adultos. La audiencia del estudio, llamada 'Peanut Gallery', consistía en 40 niños sentados en gradas. Los personajes incluían a Clarabell el Payaso, la Princesa Summerfall Winterspring y varias marionetas. El programa fue pionero en muchos aspectos de la televisión infantil y el merchandising. Su famosa línea de cierre era '¡Es la hora de Howdy Doody!' El final del programa en 1960 fue visto por millones y terminó con Clarabell diciendo sus únicas palabras: 'Adiós, niños'.",
          de: "Die Howdy Doody Show wurde am 27. Dezember 1947 auf NBC uraufgeführt und lief bis 1960 und wurde zu einer der beliebtesten Kindersendungen in der frühen Fernsehgeschichte. Die Show zeigte eine sommersprossige Cowboy-Puppe namens Howdy Doody und wurde von 'Buffalo Bob' Smith moderiert. Sie wurde aus den NBC-Studios im Rockefeller Center in New York ausgestrahlt. Die Show lief fünf Tage die Woche und zog Publikum von Kindern und Erwachsenen an. Das Studiopublikum, genannt 'Peanut Gallery', bestand aus 40 Kindern, die auf Tribünen saßen. Zu den Charakteren gehörten Clarabell der Clown, Prinzessin Summerfall Winterspring und verschiedene Puppen. Die Show war Pionier in vielen Aspekten des Kinderfernsehens und Merchandising. Ihre berühmte Schlusszeile war 'Es ist Howdy Doody Zeit!' Das Finale der Show 1960 wurde von Millionen gesehen und endete damit, dass Clarabell seine einzigen Worte sprach: 'Auf Wiedersehen, Kinder.'",
          nl: "The Howdy Doody Show ging in première op NBC op 27 december 1947 en liep tot 1960, en werd een van de populairste kinderprogramma's in de vroege televisiegeschiedenis. De show had een sproeterig cowboymarionnet genaamd Howdy Doody en werd gepresenteerd door 'Buffalo Bob' Smith. Het werd uitgezonden vanuit NBC's studio's in Rockefeller Center in New York. De show werd vijf dagen per week uitgezonden en trok publiek van zowel kinderen als volwassenen. Het studiopubliek, de 'Peanut Gallery' genoemd, bestond uit 40 kinderen die op tribunes zaten. Personages waren onder andere Clarabell de Clown, Prinses Summerfall Winterspring en verschillende marionetten. De show was baanbrekend in vele aspecten van kindertelevisie en merchandising. De beroemde afsluiting was 'It's Howdy Doody Time!' De finale van de show in 1960 werd door miljoenen bekeken en eindigde met Clarabell die zijn enige woorden sprak: 'Tot ziens, kinderen.'"
        },
        category: "entertainment",
        difficulty: "hard",
        subjects: ["entertainment", "history"]
      }
    ],

    day28: [ /* 5 questions */
      {
        question: {
          en: "Chewing gum was patented by William Finley Semple on December 28, 1869. What was the primary ingredient in his original formula?",
          es: "William Finley Semple patentó el chicle el 28 de diciembre de 1869. ¿Cuál era el ingrediente principal en su fórmula original?",
          de: "Kaugummi wurde von William Finley Semple am 28. Dezember 1869 patentiert. Was war der Hauptbestandteil in seiner ursprünglichen Formel?",
          nl: "Kauwgom werd gepatenteerd door William Finley Semple op 28 december 1869. Wat was het primaire ingrediënt in zijn oorspronkelijke formule?"
        },
        options: [
          { en: "Rubber", es: "Caucho", de: "Gummi", nl: "Rubber" },
          { en: "Sugar syrup", es: "Jarabe de azúcar", de: "Zuckersirup", nl: "Suikersiroop" },
          { en: "Paraffin wax", es: "Cera de parafina", de: "Paraffinwachs", nl: "Paraffinewas" },
          { en: "Tree resin", es: "Resina de árbol", de: "Baumharz", nl: "Boomhars" }
        ],
        correctIndex: 0,
        explanation: {
          en: "William Finley Semple, a dentist from Mount Vernon, Ohio, patented chewing gum using rubber as the base ingredient on December 28, 1869. His patent described combining rubber with other substances to create a chewable product intended to exercise the jaw muscles and stimulate gums and teeth. However, Semple never commercially produced his invention. The first successful commercial chewing gum was actually made by Thomas Adams in the 1870s using chicle (natural tree sap from sapodilla trees). Adams' product was more palatable than rubber-based gum. Modern chewing gum typically uses synthetic rubber (polyvinyl acetate) or synthetic resins as the gum base. Chewing gum has ancient origins - ancient Greeks chewed mastic tree resin, and Native Americans chewed spruce tree resin, which early American settlers adopted. Today, chewing gum is a multi-billion dollar global industry.",
          es: "William Finley Semple, un dentista de Mount Vernon, Ohio, patentó el chicle usando caucho como ingrediente base el 28 de diciembre de 1869. Su patente describía combinar caucho con otras sustancias para crear un producto masticable destinado a ejercitar los músculos de la mandíbula y estimular las encías y los dientes. Sin embargo, Semple nunca produjo comercialmente su invención. El primer chicle comercial exitoso fue hecho por Thomas Adams en la década de 1870 usando chicle (savia natural de árboles de zapote). El producto de Adams era más sabroso que el chicle a base de caucho. El chicle moderno típicamente usa caucho sintético (acetato de polivinilo) o resinas sintéticas como base de goma. El chicle tiene orígenes antiguos: los antiguos griegos masticaban resina de árbol de lentisco, y los nativos americanos masticaban resina de abeto, que los primeros colonos estadounidenses adoptaron. Hoy, el chicle es una industria global multimillonaria.",
          de: "William Finley Semple, ein Zahnarzt aus Mount Vernon, Ohio, patentierte Kaugummi mit Gummi als Basisbestandteil am 28. Dezember 1869. Sein Patent beschrieb die Kombination von Gummi mit anderen Substanzen, um ein kaubares Produkt zu schaffen, das die Kiefermuskulatur trainieren und Zahnfleisch und Zähne stimulieren sollte. Semple produzierte seine Erfindung jedoch nie kommerziell. Der erste erfolgreiche kommerzielle Kaugummi wurde tatsächlich von Thomas Adams in den 1870er Jahren unter Verwendung von Chicle (natürlicher Baumsaft von Sapodilla-Bäumen) hergestellt. Adams' Produkt war schmackhafter als Kaugummi auf Gummibasis. Moderner Kaugummi verwendet typischerweise synthetischen Gummi (Polyvinylacetat) oder synthetische Harze als Gummibasis. Kaugummi hat antike Ursprünge - die alten Griechen kauten Mastixbaumharz, und Indianer kauten Fichtenbaumharz, das frühe amerikanische Siedler übernahmen. Heute ist Kaugummi eine milliardenschwere globale Industrie.",
          nl: "William Finley Semple, een tandarts uit Mount Vernon, Ohio, patenteerde kauwgom met rubber als basisingrediënt op 28 december 1869. Zijn patent beschreef het combineren van rubber met andere stoffen om een kauwbaar product te creëren bedoeld om de kaakspieren te oefenen en tandvlees en tanden te stimuleren. Semple produceerde zijn uitvinding echter nooit commercieel. De eerste succesvolle commerciële kauwgom werd eigenlijk gemaakt door Thomas Adams in de jaren 1870 met behulp van chicle (natuurlijk boomsap van sapodillabomen). Adams' product was smaakvoller dan kauwgom op rubberbasis. Moderne kauwgom gebruikt doorgaans synthetisch rubber (polyvinylacetaat) of synthetische harsen als kauwgombasis. Kauwgom heeft oude oorsprongen - oude Grieken kauwden op mastiekboomhars, en inheemse Amerikanen kauwden op sparrenboomhars, wat vroege Amerikaanse kolonisten overnamen. Tegenwoordig is kauwgom een miljarden dollars kostende wereldwijde industrie."
        },
        category: "history",
        difficulty: "hard",
        subjects: ["history", "science"]
      },
      {
        question: {
          en: "Iowa became the 29th state of the United States on December 28, 1846. What is Iowa's nickname?",
          es: "Iowa se convirtió en el estado número 29 de los Estados Unidos el 28 de diciembre de 1846. ¿Cuál es el apodo de Iowa?",
          de: "Iowa wurde am 28. Dezember 1846 der 29. Bundesstaat der Vereinigten Staaten. Was ist Iowas Spitzname?",
          nl: "Iowa werd de 29e staat van de Verenigde Staten op 28 december 1846. Wat is de bijnaam van Iowa?"
        },
        options: [

          { en: "The Corn State", es: "El Estado del Maíz", de: "Der Maisstaat", nl: "De Maïsstaat" },

          { en: "The Hawkeye State", es: "El Estado Hawkeye", de: "Der Hawkeye-Staat", nl: "De Hawkeye-staat" },

          { en: "The Prairie State", es: "El Estado de la Pradera", de: "Der Präriestaat", nl: "De Prairiestaat" },

          { en: "The Heartland State", es: "El Estado del Corazón", de: "Der Herzlandstaat", nl: "De Hartenlandstaat" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Iowa is known as 'The Hawkeye State.' The nickname honors Chief Black Hawk, a Sauk warrior who led resistance against American settlement in the region during the Black Hawk War of 1832. Iowa became the 29th U.S. state on December 28, 1846, with Iowa City as its first capital (later moved to Des Moines). The territory was part of the Louisiana Purchase of 1803. Iowa is renowned for its agricultural production, particularly corn and soybeans, and hosts the famous Iowa State Fair and the first-in-the-nation presidential caucuses. The state's name comes from the Ioway people, one of the Native American tribes that lived in the region. Iowa is located in the Midwest and is bordered by the Mississippi River on the east and the Missouri River on the west. The state motto is 'Our liberties we prize and our rights we will maintain.'",
          es: "Iowa es conocido como 'El Estado Hawkeye'. El apodo honra al Jefe Halcón Negro, un guerrero Sauk que lideró la resistencia contra el asentamiento estadounidense en la región durante la Guerra del Halcón Negro de 1832. Iowa se convirtió en el estado número 29 de EE.UU. el 28 de diciembre de 1846, con Iowa City como su primera capital (más tarde trasladada a Des Moines). El territorio era parte de la Compra de Luisiana de 1803. Iowa es reconocido por su producción agrícola, particularmente maíz y soja, y alberga la famosa Feria Estatal de Iowa y los primeros caucuses presidenciales de la nación. El nombre del estado proviene del pueblo Ioway, una de las tribus nativas americanas que vivieron en la región. Iowa está ubicado en el Medio Oeste y está bordeado por el río Misisipi al este y el río Misuri al oeste. El lema del estado es 'Apreciamos nuestras libertades y mantendremos nuestros derechos'.",
          de: "Iowa ist als 'Der Hawkeye-Staat' bekannt. Der Spitzname ehrt Häuptling Black Hawk, einen Sauk-Krieger, der während des Black-Hawk-Krieges von 1832 den Widerstand gegen die amerikanische Besiedlung in der Region anführte. Iowa wurde am 28. Dezember 1846 der 29. US-Bundesstaat mit Iowa City als erster Hauptstadt (später nach Des Moines verlegt). Das Territorium war Teil des Louisiana-Kaufs von 1803. Iowa ist bekannt für seine landwirtschaftliche Produktion, insbesondere Mais und Sojabohnen, und beherbergt die berühmte Iowa State Fair und die ersten Präsidentschafts-Caucuses der Nation. Der Name des Staates stammt vom Ioway-Volk, einem der indigenen amerikanischen Stämme, die in der Region lebten. Iowa liegt im Mittleren Westen und wird im Osten vom Mississippi und im Westen vom Missouri begrenzt. Das Staatsmotto lautet 'Unsere Freiheiten schätzen wir und unsere Rechte werden wir wahren'.",
          nl: "Iowa staat bekend als 'De Hawkeye-staat.' De bijnaam eert opperhoofd Black Hawk, een Sauk-krijger die verzet leidde tegen Amerikaanse vestiging in de regio tijdens de Black Hawk-oorlog van 1832. Iowa werd de 29e Amerikaanse staat op 28 december 1846, met Iowa City als eerste hoofdstad (later verplaatst naar Des Moines). Het territorium maakte deel uit van de Louisiana-aankoop van 1803. Iowa staat bekend om zijn landbouwproductie, met name maïs en sojabonen, en organiseert de beroemde Iowa State Fair en de eerste presidentiële caucuses van het land. De naam van de staat komt van het Ioway-volk, een van de inheemse Amerikaanse stammen die in de regio woonden. Iowa ligt in het Midwesten en wordt in het oosten begrensd door de Mississippi en in het westen door de Missouri. Het staatsmotto is 'Onze vrijheden prijzen we en onze rechten zullen we handhaven.'"
        },
        category: "geography",
        difficulty: "medium",
        subjects: ["geography", "history"]
      },
      {
        question: {
          en: "Which acclaimed American actor, known for films like 'Malcolm X' and 'Training Day,' was born on December 28, 1954?",
          es: "¿Qué aclamado actor estadounidense, conocido por películas como 'Malcolm X' y 'Training Day', nació el 28 de diciembre de 1954?",
          de: "Welcher gefeierte amerikanische Schauspieler, bekannt für Filme wie 'Malcolm X' und 'Training Day', wurde am 28. Dezember 1954 geboren?",
          nl: "Welke geprezen Amerikaanse acteur, bekend van films als 'Malcolm X' en 'Training Day', werd geboren op 28 december 1954?"
        },
        options: [

          { en: "Samuel L. Jackson", es: "Samuel L. Jackson", de: "Samuel L. Jackson", nl: "Samuel L. Jackson" },

          { en: "Denzel Washington", es: "Denzel Washington", de: "Denzel Washington", nl: "Denzel Washington" },

          { en: "Morgan Freeman", es: "Morgan Freeman", de: "Morgan Freeman", nl: "Morgan Freeman" },

          { en: "Will Smith", es: "Will Smith", de: "Will Smith", nl: "Will Smith" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Denzel Washington was born on December 28, 1954, in Mount Vernon, New York. He has become one of the most acclaimed and respected actors in cinema, winning two Academy Awards: Best Supporting Actor for 'Glory' (1989) and Best Actor for 'Training Day' (2001). Washington is known for powerful performances in films including 'Malcolm X' (1992), 'Philadelphia' (1993), 'The Hurricane' (1999), 'Flight' (2012), and 'Fences' (2016), which he also directed. He has received numerous accolades including three Golden Globe Awards and a Tony Award for his stage work. Washington is also noted for choosing roles that portray African Americans in complex, dignified ways. He attended Fordham University and studied at the American Conservatory Theater. Beyond acting, he's known for his philanthropy and has served as a spokesperson for Boys & Girls Clubs of America, where he was a member as a child.",
          es: "Denzel Washington nació el 28 de diciembre de 1954 en Mount Vernon, Nueva York. Se ha convertido en uno de los actores más aclamados y respetados del cine, ganando dos premios de la Academia: Mejor Actor de Reparto por 'Glory' (1989) y Mejor Actor por 'Training Day' (2001). Washington es conocido por actuaciones poderosas en películas como 'Malcolm X' (1992), 'Filadelfia' (1993), 'El huracán' (1999), 'Flight' (2012) y 'Fences' (2016), que también dirigió. Ha recibido numerosos galardones, incluidos tres premios Globo de Oro y un premio Tony por su trabajo teatral. Washington también es conocido por elegir papeles que retratan a los afroamericanos de maneras complejas y dignas. Asistió a la Universidad de Fordham y estudió en el American Conservatory Theater. Más allá de la actuación, es conocido por su filantropía y ha sido portavoz de Boys & Girls Clubs of America, donde fue miembro de niño.",
          de: "Denzel Washington wurde am 28. Dezember 1954 in Mount Vernon, New York, geboren. Er ist zu einem der gefeiertsten und respektiertesten Schauspieler im Kino geworden und gewann zwei Academy Awards: Bester Nebendarsteller für 'Glory' (1989) und Bester Hauptdarsteller für 'Training Day' (2001). Washington ist bekannt für kraftvolle Auftritte in Filmen wie 'Malcolm X' (1992), 'Philadelphia' (1993), 'The Hurricane' (1999), 'Flight' (2012) und 'Fences' (2016), bei dem er auch Regie führte. Er hat zahlreiche Auszeichnungen erhalten, darunter drei Golden Globe Awards und einen Tony Award für seine Bühnenarbeit. Washington ist auch dafür bekannt, Rollen zu wählen, die Afroamerikaner auf komplexe, würdevolle Weise darstellen. Er besuchte die Fordham University und studierte am American Conservatory Theater. Über die Schauspielerei hinaus ist er für seine Philanthropie bekannt und diente als Sprecher für Boys & Girls Clubs of America, wo er als Kind Mitglied war.",
          nl: "Denzel Washington werd geboren op 28 december 1954 in Mount Vernon, New York. Hij is uitgegroeid tot een van de meest geprezen en gerespecteerde acteurs in de cinema en won twee Academy Awards: Beste Mannelijke Bijrol voor 'Glory' (1989) en Beste Acteur voor 'Training Day' (2001). Washington staat bekend om krachtige optredens in films waaronder 'Malcolm X' (1992), 'Philadelphia' (1993), 'The Hurricane' (1999), 'Flight' (2012) en 'Fences' (2016), die hij ook regisseerde. Hij heeft talrijke onderscheidingen ontvangen, waaronder drie Golden Globe Awards en een Tony Award voor zijn toneelwerk. Washington staat ook bekend om het kiezen van rollen die Afro-Amerikanen op complexe, waardige manieren portretteren. Hij studeerde aan Fordham University en studeerde aan het American Conservatory Theater. Naast acteren staat hij bekend om zijn filantropie en heeft hij gediend als woordvoerder voor Boys & Girls Clubs of America, waar hij als kind lid was."
        },
        category: "entertainment",
        difficulty: "medium",
        subjects: ["entertainment", "people"]
      },
      {
        question: {
          en: "The first public cinema screening took place in Paris on December 28, 1895. Which two brothers organized this historic event?",
          es: "La primera proyección de cine público tuvo lugar en París el 28 de diciembre de 1895. ¿Qué dos hermanos organizaron este evento histórico?",
          de: "Die erste öffentliche Kinovorführung fand am 28. Dezember 1895 in Paris statt. Welche zwei Brüder organisierten dieses historische Ereignis?",
          nl: "De eerste openbare bioscoopvertoning vond plaats in Parijs op 28 december 1895. Welke twee broers organiseerden deze historische gebeurtenis?"
        },
        options: [

          { en: "Warner Brothers", es: "Hermanos Warner", de: "Warner Brothers", nl: "Warner Brothers" },

          { en: "Lumière Brothers", es: "Hermanos Lumière", de: "Brüder Lumière", nl: "Lumière Brothers" },

          { en: "Marx Brothers", es: "Hermanos Marx", de: "Marx Brothers", nl: "Marx Brothers" },

          { en: "Wright Brothers", es: "Hermanos Wright", de: "Wright Brothers", nl: "Wright Brothers" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Auguste and Louis Lumière organized the first commercial public film screening on December 28, 1895, at the Grand Café on Paris's Boulevard des Capucines. They showed ten short films, each about 50 seconds long, including their famous 'Workers Leaving the Lumière Factory' and 'Arrival of a Train at La Ciotat Station' (which allegedly caused viewers to jump in fear). About 33 people attended the first screening, paying one franc each. The Lumière Brothers invented the Cinématographe, a combined camera, printer, and projector that was more portable than Edison's Kinetoscope. This event is considered the birth of cinema as public entertainment. The brothers went on to produce over 1,400 films and sent cameramen worldwide to capture footage. While others like Edison and the Skladanowsky brothers also contributed to early cinema, the Lumières' public screening marked cinema's commercial beginning. December 28 is still celebrated as Cinema Day in some countries.",
          es: "Auguste y Louis Lumière organizaron la primera proyección pública comercial de cine el 28 de diciembre de 1895 en el Grand Café del Boulevard des Capucines de París. Mostraron diez cortometrajes, cada uno de unos 50 segundos de duración, incluidos sus famosos 'Obreros saliendo de la fábrica Lumière' y 'Llegada de un tren a la estación de La Ciotat' (que supuestamente hizo que los espectadores saltaran de miedo). Unas 33 personas asistieron a la primera proyección, pagando un franco cada una. Los Hermanos Lumière inventaron el Cinématographe, una cámara, impresora y proyector combinados que era más portátil que el Kinetoscopio de Edison. Este evento se considera el nacimiento del cine como entretenimiento público. Los hermanos produjeron más de 1.400 películas y enviaron camarógrafos por todo el mundo para capturar imágenes. Aunque otros como Edison y los hermanos Skladanowsky también contribuyeron al cine temprano, la proyección pública de los Lumière marcó el comienzo comercial del cine. El 28 de diciembre todavía se celebra como el Día del Cine en algunos países.",
          de: "Auguste und Louis Lumière organisierten am 28. Dezember 1895 die erste kommerzielle öffentliche Filmvorführung im Grand Café am Pariser Boulevard des Capucines. Sie zeigten zehn Kurzfilme von jeweils etwa 50 Sekunden Länge, darunter ihre berühmten 'Arbeiter verlassen die Lumière-Fabrik' und 'Ankunft eines Zuges im Bahnhof La Ciotat' (was angeblich die Zuschauer vor Angst aufspringen ließ). Etwa 33 Personen besuchten die erste Vorführung und zahlten jeweils einen Franc. Die Brüder Lumière erfanden den Cinématographe, eine kombinierte Kamera, einen Drucker und einen Projektor, der tragbarer war als Edisons Kinetoskop. Dieses Ereignis gilt als die Geburt des Kinos als öffentliche Unterhaltung. Die Brüder produzierten über 1.400 Filme und schickten Kameraleute weltweit, um Aufnahmen zu machen. Während andere wie Edison und die Brüder Skladanowsky ebenfalls zum frühen Kino beitrugen, markierte die öffentliche Vorführung der Lumières den kommerziellen Beginn des Kinos. Der 28. Dezember wird in einigen Ländern noch als Kinotag gefeiert.",
          nl: "Auguste en Louis Lumière organiseerden de eerste commerciële openbare filmvertoning op 28 december 1895 in het Grand Café aan de Parijse Boulevard des Capucines. Ze toonden tien korte films, elk ongeveer 50 seconden lang, waaronder hun beroemde 'Arbeiders die de Lumière-fabriek verlaten' en 'Aankomst van een trein op station La Ciotat' (wat naar verluidt kijkers van angst deed opspringen). Ongeveer 33 mensen woonden de eerste vertoning bij en betaalden elk één franc. De Lumière Brothers vonden de Cinématographe uit, een gecombineerde camera, printer en projector die draagbaarder was dan Edisons Kinetoscoop. Deze gebeurtenis wordt beschouwd als de geboorte van cinema als publiek entertainment. De broers produceerden meer dan 1.400 films en stuurden cameramensen wereldwijd om beelden vast te leggen. Hoewel anderen zoals Edison en de Skladanowsky-broers ook bijdroegen aan vroege cinema, markeerde de openbare vertoning van de Lumières het commerciële begin van cinema. 28 december wordt in sommige landen nog steeds gevierd als Cinemadag."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "entertainment"]
      },
      {
        question: {
          en: "What major astronomical event did Galileo Galilei observe and document on December 28, 1612?",
          es: "¿Qué evento astronómico importante observó y documentó Galileo Galilei el 28 de diciembre de 1612?",
          de: "Welches bedeutende astronomische Ereignis beobachtete und dokumentierte Galileo Galilei am 28. Dezember 1612?",
          nl: "Welke belangrijke astronomische gebeurtenis observeerde en documenteerde Galileo Galilei op 28 december 1612?"
        },
        options: [

          { en: "Discovery of Saturn's rings", es: "Descubrimiento de los anillos de Saturno", de: "Entdeckung der Saturnringe", nl: "Ontdekking van de ringen van Saturnus" },

          { en: "First observation of Neptune", es: "Primera observación de Neptuno", de: "Erste Beobachtung von Neptun", nl: "Eerste waarneming van Neptunus" },

          { en: "Discovery of sunspots", es: "Descubrimiento de manchas solares", de: "Entdeckung von Sonnenflecken", nl: "Ontdekking van zonnevlekken" },

          { en: "Phases of Venus", es: "Fases de Venus", de: "Phasen der Venus", nl: "Fasen van Venus" }

        ],
        correctIndex: 1,
        explanation: {
          en: "On December 28, 1612, Galileo Galilei unknowingly observed and recorded Neptune in his notes while studying Jupiter and its moons. He sketched Neptune as a 'fixed star' near Jupiter, not recognizing it as a planet. He observed it again on January 28, 1613, even noting that it appeared to have moved relative to the background stars - evidence that it was actually a planet - but he didn't pursue this observation further. Neptune wasn't officially discovered until 1846 by Johann Gottfried Galle, using mathematical predictions by Urbain Le Verrier and John Couch Adams. Galileo's notebooks, discovered in the 1980s, revealed his earlier observations. Had Galileo realized the significance of Neptune's movement, he might have been credited with discovering the eighth planet 234 years earlier. This demonstrates how scientific discoveries sometimes require recognizing the significance of observations, not just making them.",
          es: "El 28 de diciembre de 1612, Galileo Galilei observó y registró sin saberlo a Neptuno en sus notas mientras estudiaba Júpiter y sus lunas. Dibujó a Neptuno como una 'estrella fija' cerca de Júpiter, sin reconocerlo como un planeta. Lo observó nuevamente el 28 de enero de 1613, incluso notando que parecía haberse movido en relación con las estrellas de fondo, evidencia de que en realidad era un planeta, pero no continuó esta observación. Neptuno no fue oficialmente descubierto hasta 1846 por Johann Gottfried Galle, usando predicciones matemáticas de Urbain Le Verrier y John Couch Adams. Los cuadernos de Galileo, descubiertos en la década de 1980, revelaron sus observaciones anteriores. Si Galileo hubiera reconocido la importancia del movimiento de Neptuno, podría haber sido acreditado con el descubrimiento del octavo planeta 234 años antes. Esto demuestra cómo los descubrimientos científicos a veces requieren reconocer la importancia de las observaciones, no solo hacerlas.",
          de: "Am 28. Dezember 1612 beobachtete und zeichnete Galileo Galilei unwissentlich Neptun in seinen Notizen auf, während er Jupiter und seine Monde studierte. Er zeichnete Neptun als 'Fixstern' in der Nähe von Jupiter und erkannte ihn nicht als Planeten. Er beobachtete ihn am 28. Januar 1613 erneut und bemerkte sogar, dass er sich relativ zu den Hintergrundsternen bewegt zu haben schien - ein Beweis dafür, dass es tatsächlich ein Planet war - aber er verfolgte diese Beobachtung nicht weiter. Neptun wurde erst 1846 von Johann Gottfried Galle offiziell entdeckt, unter Verwendung mathematischer Vorhersagen von Urbain Le Verrier und John Couch Adams. Galileos Notizbücher, die in den 1980er Jahren entdeckt wurden, enthüllten seine früheren Beobachtungen. Hätte Galileo die Bedeutung von Neptuns Bewegung erkannt, hätte ihm möglicherweise die Entdeckung des achten Planeten 234 Jahre früher zugeschrieben werden können. Dies zeigt, wie wissenschaftliche Entdeckungen manchmal erfordern, die Bedeutung von Beobachtungen zu erkennen, nicht nur sie zu machen.",
          nl: "Op 28 december 1612 observeerde en registreerde Galileo Galilei onbewust Neptunus in zijn aantekeningen terwijl hij Jupiter en zijn manen bestudeerde. Hij schetste Neptunus als een 'vaste ster' nabij Jupiter, zonder het te herkennen als een planeet. Hij observeerde het opnieuw op 28 januari 1613, waarbij hij zelfs opmerkte dat het leek te zijn bewogen ten opzichte van de achtergrondsterren - bewijs dat het eigenlijk een planeet was - maar hij vervolgde deze waarneming niet verder. Neptunus werd pas officieel ontdekt in 1846 door Johann Gottfried Galle, gebruikmakend van wiskundige voorspellingen van Urbain Le Verrier en John Couch Adams. Galileo's notitieboeken, ontdekt in de jaren 1980, onthulden zijn eerdere observaties. Had Galileo de betekenis van Neptunus' beweging beseft, dan had hij mogelijk de eer gekregen voor het ontdekken van de achtste planeet 234 jaar eerder. Dit toont aan hoe wetenschappelijke ontdekkingen soms vereisen dat men de betekenis van observaties herkent, niet alleen ze maakt."
        },
        category: "science",
        difficulty: "hard",
        subjects: ["science", "history"]
      }
    ],

    day29: [ /* 5 questions */
      {
        question: {
          en: "Texas became the 28th state of the United States on December 29, 1845. What was Texas called before it became a state?",
          es: "Texas se convirtió en el estado número 28 de los Estados Unidos el 29 de diciembre de 1845. ¿Cómo se llamaba Texas antes de convertirse en estado?",
          de: "Texas wurde am 29. Dezember 1845 der 28. Bundesstaat der Vereinigten Staaten. Wie hieß Texas, bevor es ein Bundesstaat wurde?",
          nl: "Texas werd de 28e staat van de Verenigde Staten op 29 december 1845. Hoe heette Texas voordat het een staat werd?"
        },
        options: [
          { en: "Texas Colony", es: "Colonia de Texas", de: "Texas-Kolonie", nl: "Texas Kolonie" },
          { en: "Republic of Texas", es: "República de Texas", de: "Republik Texas", nl: "Republiek Texas" },
          { en: "Texas Territory", es: "Territorio de Texas", de: "Texas-Territorium", nl: "Texas Territorium" },
          { en: "Province of Texas", es: "Provincia de Texas", de: "Provinz Texas", nl: "Provincie Texas" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Texas was an independent nation called the Republic of Texas from 1836 to 1845. After winning independence from Mexico in the Texas Revolution of 1836, Texas existed as a sovereign country with its own president, currency, and diplomatic relations. The Republic of Texas was recognized by the United States, France, the United Kingdom, and other nations. Sam Houston served as the first and third president of the Republic. Texas joined the United States on December 29, 1845, becoming the 28th state. The annexation of Texas was controversial and contributed to tensions leading to the Mexican-American War (1846-1848). Texas remains the only U.S. state that was previously an independent republic (Hawaii was a kingdom). The period of the Republic of Texas is commemorated in Texas culture and the state flag still reflects this heritage.",
          es: "Texas fue una nación independiente llamada República de Texas desde 1836 hasta 1845. Después de ganar la independencia de México en la Revolución de Texas de 1836, Texas existió como un país soberano con su propio presidente, moneda y relaciones diplomáticas. La República de Texas fue reconocida por Estados Unidos, Francia, el Reino Unido y otras naciones. Sam Houston se desempeñó como el primer y tercer presidente de la República. Texas se unió a Estados Unidos el 29 de diciembre de 1845, convirtiéndose en el estado número 28. La anexión de Texas fue controvertida y contribuyó a las tensiones que llevaron a la Guerra México-Estadounidense (1846-1848). Texas sigue siendo el único estado de EE.UU. que anteriormente fue una república independiente (Hawái fue un reino). El período de la República de Texas se conmemora en la cultura tejana y la bandera estatal aún refleja esta herencia.",
          de: "Texas war von 1836 bis 1845 eine unabhängige Nation namens Republik Texas. Nach dem Gewinn der Unabhängigkeit von Mexiko in der texanischen Revolution von 1836 existierte Texas als souveränes Land mit eigenem Präsidenten, Währung und diplomatischen Beziehungen. Die Republik Texas wurde von den Vereinigten Staaten, Frankreich, dem Vereinigten Königreich und anderen Nationen anerkannt. Sam Houston diente als erster und dritter Präsident der Republik. Texas trat am 29. Dezember 1845 den Vereinigten Staaten bei und wurde der 28. Bundesstaat. Die Annexion von Texas war umstritten und trug zu Spannungen bei, die zum Mexikanisch-Amerikanischen Krieg (1846-1848) führten. Texas bleibt der einzige US-Bundesstaat, der zuvor eine unabhängige Republik war (Hawaii war ein Königreich). Die Zeit der Republik Texas wird in der texanischen Kultur gewürdigt und die Staatsflagge spiegelt dieses Erbe noch wider.",
          nl: "Texas was een onafhankelijke natie genaamd de Republiek Texas van 1836 tot 1845. Na het verkrijgen van onafhankelijkheid van Mexico in de Texas Revolutie van 1836, bestond Texas als een soeverein land met zijn eigen president, valuta en diplomatieke betrekkingen. De Republiek Texas werd erkend door de Verenigde Staten, Frankrijk, het Verenigd Koninkrijk en andere naties. Sam Houston diende als de eerste en derde president van de Republiek. Texas voegde zich op 29 december 1845 bij de Verenigde Staten en werd de 28e staat. De annexatie van Texas was controversieel en droeg bij aan spanningen die leidden tot de Mexicaans-Amerikaanse Oorlog (1846-1848). Texas blijft de enige Amerikaanse staat die eerder een onafhankelijke republiek was (Hawaï was een koninkrijk). De periode van de Republiek Texas wordt herdacht in de Texaanse cultuur en de staatsvlag weerspiegelt dit erfgoed nog steeds."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "geography"]
      },
      {
        question: {
          en: "The Wounded Knee Massacre occurred on December 29, 1890, in which U.S. state?",
          es: "La masacre de Wounded Knee ocurrió el 29 de diciembre de 1890, ¿en qué estado de EE.UU.?",
          de: "Das Massaker von Wounded Knee ereignete sich am 29. Dezember 1890 in welchem US-Bundesstaat?",
          nl: "Het bloedbad van Wounded Knee vond plaats op 29 december 1890, in welke Amerikaanse staat?"
        },
        options: [

          { en: "Montana", es: "Montana", de: "Montana", nl: "Montana" },

          { en: "North Dakota", es: "Dakota del Norte", de: "North Dakota", nl: "North Dakota" },

          { en: "South Dakota", es: "Dakota del Sur", de: "South Dakota", nl: "South Dakota" },

          { en: "Wyoming", es: "Wyoming", de: "Wyoming", nl: "Wyoming" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The Wounded Knee Massacre occurred on December 29, 1890, on the Pine Ridge Indian Reservation in South Dakota. The U.S. 7th Cavalry Regiment killed approximately 300 Lakota people, mostly women, children, and elderly. The tragedy occurred when tensions escalated during an attempt by the army to disarm a Lakota band led by Chief Spotted Elk (Big Foot). The massacre is considered the final major armed conflict of the American Indian Wars and marked the end of the Ghost Dance movement. Twenty U.S. soldiers received the Medal of Honor for their actions at Wounded Knee, which remains highly controversial. The site became a symbol of historical trauma for Native Americans and gained renewed attention in 1973 during the Wounded Knee Incident, a 71-day standoff between Native American activists and federal authorities.",
          es: "La masacre de Wounded Knee ocurrió el 29 de diciembre de 1890 en la Reserva India de Pine Ridge en Dakota del Sur. El 7º Regimiento de Caballería de EE.UU. mató aproximadamente a 300 personas lakota, principalmente mujeres, niños y ancianos. La tragedia ocurrió cuando las tensiones aumentaron durante un intento del ejército de desarmar a una banda lakota liderada por el Jefe Spotted Elk (Pie Grande). La masacre se considera el último conflicto armado importante de las Guerras Indias Americanas y marcó el fin del movimiento de la Danza de los Espíritus. Veinte soldados estadounidenses recibieron la Medalla de Honor por sus acciones en Wounded Knee, lo cual sigue siendo muy controvertido. El sitio se convirtió en un símbolo del trauma histórico para los nativos americanos y ganó renovada atención en 1973 durante el Incidente de Wounded Knee, un enfrentamiento de 71 días entre activistas nativos americanos y autoridades federales.",
          de: "Das Massaker von Wounded Knee ereignete sich am 29. Dezember 1890 in der Pine Ridge Indianerreservation in South Dakota. Das 7. Kavallerieregiment der US-Armee tötete etwa 300 Lakota-Menschen, hauptsächlich Frauen, Kinder und ältere Menschen. Die Tragödie ereignete sich, als die Spannungen während eines Versuchs der Armee eskalierten, eine von Häuptling Spotted Elk (Big Foot) geführte Lakota-Gruppe zu entwaffnen. Das Massaker gilt als der letzte große bewaffnete Konflikt der Indianerkriege und markierte das Ende der Ghost-Dance-Bewegung. Zwanzig US-Soldaten erhielten die Medal of Honor für ihre Aktionen bei Wounded Knee, was höchst umstritten bleibt. Die Stätte wurde zu einem Symbol für historisches Trauma für amerikanische Ureinwohner und erhielt 1973 während des Wounded Knee-Vorfalls erneute Aufmerksamkeit, einer 71-tägigen Auseinandersetzung zwischen Aktivisten der amerikanischen Ureinwohner und Bundesbehörden.",
          nl: "Het bloedbad van Wounded Knee vond plaats op 29 december 1890 in het Pine Ridge Indianenreservaat in South Dakota. Het 7e Cavalerieregiment van het Amerikaanse leger doodde ongeveer 300 Lakota-mensen, voornamelijk vrouwen, kinderen en ouderen. De tragedie vond plaats toen de spanningen escaleerden tijdens een poging van het leger om een Lakota-groep onder leiding van opperhoofd Spotted Elk (Big Foot) te ontwapenen. Het bloedbad wordt beschouwd als het laatste grote gewapende conflict van de Amerikaanse Indianenoorlogen en markeerde het einde van de Ghost Dance-beweging. Twintig Amerikaanse soldaten ontvingen de Medal of Honor voor hun acties bij Wounded Knee, wat zeer omstreden blijft. De plaats werd een symbool van historisch trauma voor inheemse Amerikanen en kreeg hernieuwde aandacht in 1973 tijdens het Wounded Knee-incident, een 71 dagen durende confrontatie tussen inheemse Amerikaanse activisten en federale autoriteiten."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "geography"]
      },
      {
        question: {
          en: "Pablo Casals, born December 29, 1876, was a virtuoso performer on which musical instrument?",
          es: "Pablo Casals, nacido el 29 de diciembre de 1876, fue un virtuoso intérprete de qué instrumento musical?",
          de: "Pablo Casals, geboren am 29. Dezember 1876, war ein virtuoser Interpret auf welchem Musikinstrument?",
          nl: "Pablo Casals, geboren op 29 december 1876, was een virtuoos uitvoerder op welk muziekinstrument?"
        },
        options: [

          { en: "Violin", es: "Violín", de: "Violine", nl: "Viool" },

          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },

          { en: "Cello", es: "Violonchelo", de: "Cello", nl: "Cello" },

          { en: "Guitar", es: "Guitarra", de: "Gitarre", nl: "Gitaar" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Pablo Casals was a legendary cellist, conductor, and composer, born in Catalonia, Spain, on December 29, 1876. He is widely regarded as one of the greatest cellists of all time and revolutionized cello technique and interpretation. Casals rediscovered and popularized Bach's Cello Suites, which had been largely forgotten, practicing them for 12 years before performing them publicly. His recording of these suites is considered landmark in classical music history. Beyond his musical achievements, Casals was known for his humanitarian efforts and opposition to fascism. He went into self-imposed exile after the Spanish Civil War, refusing to perform in countries that recognized Franco's regime. At age 80, he famously performed at the United Nations while speaking out for peace. He continued performing into his 90s and established the renowned Pablo Casals Festival in Puerto Rico.",
          es: "Pablo Casals fue un legendario violonchelista, director y compositor, nacido en Cataluña, España, el 29 de diciembre de 1876. Es ampliamente considerado como uno de los mejores violonchelistas de todos los tiempos y revolucionó la técnica e interpretación del violonchelo. Casals redescubrió y popularizó las Suites para Violonchelo de Bach, que habían sido en gran medida olvidadas, practicándolas durante 12 años antes de interpretarlas públicamente. Su grabación de estas suites se considera un hito en la historia de la música clásica. Más allá de sus logros musicales, Casals era conocido por sus esfuerzos humanitarios y su oposición al fascismo. Se exilió voluntariamente después de la Guerra Civil Española, negándose a actuar en países que reconocieran el régimen de Franco. A los 80 años, actuó famosamente en las Naciones Unidas mientras hablaba por la paz. Continuó actuando hasta los 90 años y estableció el reconocido Festival Pablo Casals en Puerto Rico.",
          de: "Pablo Casals war ein legendärer Cellist, Dirigent und Komponist, geboren in Katalonien, Spanien, am 29. Dezember 1876. Er gilt weithin als einer der größten Cellisten aller Zeiten und revolutionierte die Cello-Technik und -Interpretation. Casals entdeckte Bachs Cello-Suiten wieder und popularisierte sie, die weitgehend vergessen waren, und übte sie 12 Jahre lang, bevor er sie öffentlich aufführte. Seine Aufnahme dieser Suiten gilt als Meilenstein in der Geschichte der klassischen Musik. Über seine musikalischen Leistungen hinaus war Casals für seine humanitären Bemühungen und seine Opposition gegen den Faschismus bekannt. Er ging nach dem Spanischen Bürgerkrieg ins selbstgewählte Exil und weigerte sich, in Ländern aufzutreten, die Francos Regime anerkannten. Im Alter von 80 Jahren trat er berühmt vor den Vereinten Nationen auf, während er sich für den Frieden einsetzte. Er trat bis in seine 90er Jahre auf und gründete das renommierte Pablo Casals Festival in Puerto Rico.",
          nl: "Pablo Casals was een legendarische cellist, dirigent en componist, geboren in Catalonië, Spanje, op 29 december 1876. Hij wordt algemeen beschouwd als een van de grootste cellisten aller tijden en revolutioneerde cellotechniek en -interpretatie. Casals herontdekte en populariseerde Bachs Cello Suites, die grotendeels vergeten waren, en oefende ze 12 jaar voordat hij ze publiekelijk uitvoerde. Zijn opname van deze suites wordt beschouwd als mijlpaal in de geschiedenis van klassieke muziek. Naast zijn muzikale prestaties was Casals bekend om zijn humanitaire inspanningen en verzet tegen fascisme. Hij ging in zelfgekozen ballingschap na de Spaanse Burgeroorlog en weigerde op te treden in landen die Franco's regime erkenden. Op 80-jarige leeftijd trad hij beroemd op bij de Verenigde Naties terwijl hij sprak voor vrede. Hij bleef optreden tot in zijn jaren negentig en richtte het gerenommeerde Pablo Casals Festival op in Puerto Rico."
        },
        category: "entertainment",
        difficulty: "medium",
        subjects: ["entertainment", "people"]
      },
      {
        question: {
          en: "What major bridge, completed on December 29, 1940, collapsed just four months later due to wind-induced vibrations?",
          es: "¿Qué puente importante, completado el 29 de diciembre de 1940, colapsó solo cuatro meses después debido a vibraciones inducidas por el viento?",
          de: "Welche bedeutende Brücke, fertiggestellt am 29. Dezember 1940, stürzte nur vier Monate später aufgrund windbedingter Schwingungen ein?",
          nl: "Welke belangrijke brug, voltooid op 29 december 1940, stortte slechts vier maanden later in door door wind veroorzaakte trillingen?"
        },
        options: [

          { en: "Golden Gate Bridge", es: "Puente Golden Gate", de: "Golden Gate Bridge", nl: "Golden Gate Bridge" },

          { en: "Tacoma Narrows Bridge", es: "Puente Tacoma Narrows", de: "Tacoma Narrows Brücke", nl: "Tacoma Narrows brug" },

          { en: "Brooklyn Bridge", es: "Puente de Brooklyn", de: "Brooklyn Bridge", nl: "Brooklyn Bridge" },

          { en: "London Bridge", es: "Puente de Londres", de: "London Bridge", nl: "London Bridge" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Tacoma Narrows Bridge in Washington State opened on July 1, 1940, and famously collapsed on November 7, 1940, just four months later. Known as 'Galloping Gertie,' the bridge exhibited dramatic vertical oscillations caused by aeroelastic flutter - a phenomenon where wind-induced vibrations create self-reinforcing motion. The collapse was captured on film and became one of the most famous examples in engineering history of resonance and structural failure. Remarkably, the only casualty was a dog named Tubby who refused to leave a car abandoned on the bridge. The failure revolutionized bridge design and engineering education, leading to extensive research in aerodynamics and structural dynamics. A replacement bridge opened in 1950 with a redesigned structure that addressed the aerodynamic issues. The original bridge's failure remains a classic case study in engineering schools worldwide.",
          es: "El Puente Tacoma Narrows en el estado de Washington se inauguró el 1 de julio de 1940 y colapsó famosamente el 7 de noviembre de 1940, solo cuatro meses después. Conocido como 'Galloping Gertie', el puente exhibió oscilaciones verticales dramáticas causadas por aleteo aeroelástico, un fenómeno donde las vibraciones inducidas por el viento crean movimiento auto-reforzante. El colapso fue capturado en película y se convirtió en uno de los ejemplos más famosos en la historia de la ingeniería de resonancia y falla estructural. Notablemente, la única víctima fue un perro llamado Tubby que se negó a abandonar un auto dejado en el puente. La falla revolucionó el diseño de puentes y la educación en ingeniería, llevando a una investigación extensa en aerodinámica y dinámica estructural. Un puente de reemplazo se inauguró en 1950 con una estructura rediseñada que abordó los problemas aerodinámicos. La falla del puente original sigue siendo un caso de estudio clásico en escuelas de ingeniería en todo el mundo.",
          de: "Die Tacoma Narrows Brücke im Bundesstaat Washington wurde am 1. Juli 1940 eröffnet und stürzte berühmt am 7. November 1940 ein, nur vier Monate später. Als 'Galloping Gertie' bekannt, zeigte die Brücke dramatische vertikale Schwingungen, die durch aeroelastisches Flattern verursacht wurden - ein Phänomen, bei dem windbedingte Schwingungen selbstverstärkende Bewegungen erzeugen. Der Einsturz wurde gefilmt und wurde zu einem der berühmtesten Beispiele in der Ingenieurgeschichte für Resonanz und strukturelles Versagen. Bemerkenswerterweise war das einzige Opfer ein Hund namens Tubby, der sich weigerte, ein auf der Brücke abgestelltes Auto zu verlassen. Das Versagen revolutionierte Brückendesign und Ingenieurausbildung und führte zu umfangreicher Forschung in Aerodynamik und Strukturdynamik. Eine Ersatzbrücke wurde 1950 mit einer neu gestalteten Struktur eröffnet, die die aerodynamischen Probleme anging. Das Versagen der ursprünglichen Brücke bleibt eine klassische Fallstudie in Ingenieurschulen weltweit.",
          nl: "De Tacoma Narrows brug in de staat Washington werd geopend op 1 juli 1940 en stortte beroemd in op 7 november 1940, slechts vier maanden later. Bekend als 'Galloping Gertie', vertoonde de brug dramatische verticale oscillaties veroorzaakt door aero-elastisch flutter - een fenomeen waarbij door wind veroorzaakte trillingen zelfversterkende beweging creëren. De instorting werd op film vastgelegd en werd een van de beroemdste voorbeelden in de techniekgeschiedenis van resonantie en structureel falen. Opmerkelijk genoeg was het enige slachtoffer een hond genaamd Tubby die weigerde een op de brug achtergelaten auto te verlaten. Het falen revolutioneerde brugontwerp en technisch onderwijs, wat leidde tot uitgebreid onderzoek naar aerodynamica en structurele dynamica. Een vervangingsbrug opende in 1950 met een herontworpen structuur die de aerodynamische problemen aanpakte. Het falen van de oorspronkelijke brug blijft een klassieke casestudy in technische scholen wereldwijd."
        },
        category: "history",
        difficulty: "hard",
        subjects: ["history", "science"]
      },
      {
        question: {
          en: "The first YMCA in the United States was established in which city on December 29, 1851?",
          es: "La primera YMCA en Estados Unidos se estableció en qué ciudad el 29 de diciembre de 1851?",
          de: "Der erste YMCA in den Vereinigten Staaten wurde in welcher Stadt am 29. Dezember 1851 gegründet?",
          nl: "De eerste YMCA in de Verenigde Staten werd opgericht in welke stad op 29 december 1851?"
        },
        options: [

          { en: "New York City", es: "Nueva York", de: "New York City", nl: "New York City" },

          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },

          { en: "Philadelphia", es: "Filadelfia", de: "Philadelphia", nl: "Philadelphia" },

          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The first YMCA (Young Men's Christian Association) in the United States was founded in Boston on December 29, 1851, by Captain Thomas Valentine Sullivan. It was modeled after the original YMCA founded in London in 1844 by George Williams. The organization was created to provide young men moving to cities with a supportive Christian community and alternatives to 'sinful' urban temptations. The YMCA movement spread rapidly across America, establishing facilities that offered not just spiritual guidance but also housing, education, recreational activities, and physical fitness programs. The YMCA played a significant role in developing basketball (invented at a YMCA in Springfield, Massachusetts in 1891) and volleyball (invented at a YMCA in Holyoke, Massachusetts in 1895). Today, the YMCA is one of the largest nonprofit organizations in the U.S., serving millions through community programs focusing on youth development, healthy living, and social responsibility.",
          es: "La primera YMCA (Asociación Cristiana de Jóvenes) en Estados Unidos fue fundada en Boston el 29 de diciembre de 1851 por el Capitán Thomas Valentine Sullivan. Se inspiró en la YMCA original fundada en Londres en 1844 por George Williams. La organización fue creada para proporcionar a los jóvenes que se mudaban a las ciudades una comunidad cristiana de apoyo y alternativas a las tentaciones urbanas 'pecaminosas'. El movimiento YMCA se extendió rápidamente por América, estableciendo instalaciones que ofrecían no solo orientación espiritual sino también vivienda, educación, actividades recreativas y programas de acondicionamiento físico. La YMCA jugó un papel significativo en el desarrollo del baloncesto (inventado en una YMCA en Springfield, Massachusetts en 1891) y el voleibol (inventado en una YMCA en Holyoke, Massachusetts en 1895). Hoy, la YMCA es una de las organizaciones sin fines de lucro más grandes de EE.UU., sirviendo a millones a través de programas comunitarios centrados en el desarrollo juvenil, vida saludable y responsabilidad social.",
          de: "Der erste YMCA (Young Men's Christian Association) in den Vereinigten Staaten wurde in Boston am 29. Dezember 1851 von Captain Thomas Valentine Sullivan gegründet. Er wurde nach dem ursprünglichen YMCA modelliert, der 1844 in London von George Williams gegründet wurde. Die Organisation wurde geschaffen, um jungen Männern, die in Städte zogen, eine unterstützende christliche Gemeinschaft und Alternativen zu 'sündhaften' städtischen Versuchungen zu bieten. Die YMCA-Bewegung breitete sich schnell in ganz Amerika aus und gründete Einrichtungen, die nicht nur spirituelle Führung, sondern auch Unterkunft, Bildung, Freizeitaktivitäten und Fitnessprogramme anboten. Der YMCA spielte eine bedeutende Rolle bei der Entwicklung von Basketball (erfunden in einem YMCA in Springfield, Massachusetts 1891) und Volleyball (erfunden in einem YMCA in Holyoke, Massachusetts 1895). Heute ist der YMCA eine der größten gemeinnützigen Organisationen in den USA und dient Millionen durch Gemeinschaftsprogramme mit Fokus auf Jugendentwicklung, gesundes Leben und soziale Verantwortung.",
          nl: "De eerste YMCA (Young Men's Christian Association) in de Verenigde Staten werd opgericht in Boston op 29 december 1851 door Captain Thomas Valentine Sullivan. Het was gemodelleerd naar de oorspronkelijke YMCA opgericht in Londen in 1844 door George Williams. De organisatie werd opgericht om jonge mannen die naar steden verhuisden te voorzien van een ondersteunende christelijke gemeenschap en alternatieven voor 'zondige' stedelijke verleidingen. De YMCA-beweging verspreidde zich snel over Amerika en richtte faciliteiten op die niet alleen spirituele begeleiding boden maar ook huisvesting, onderwijs, recreatieve activiteiten en fitnessprogramma's. De YMCA speelde een belangrijke rol in de ontwikkeling van basketbal (uitgevonden in een YMCA in Springfield, Massachusetts in 1891) en volleybal (uitgevonden in een YMCA in Holyoke, Massachusetts in 1895). Vandaag is de YMCA een van de grootste non-profitorganisaties in de VS en bedient miljoenen via gemeenschapsprogramma's gericht op jeugdontwikkeling, gezond leven en sociale verantwoordelijkheid."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "geography"]
      }
    ],

    day30: [ /* 5 questions */
      {
        question: {
          en: "The USSR (Union of Soviet Socialist Republics) was officially established on December 30, 1922. Which city became its capital?",
          es: "La URSS (Unión de Repúblicas Socialistas Soviéticas) se estableció oficialmente el 30 de diciembre de 1922. ¿Qué ciudad se convirtió en su capital?",
          de: "Die UdSSR (Union der Sozialistischen Sowjetrepubliken) wurde am 30. Dezember 1922 offiziell gegründet. Welche Stadt wurde ihre Hauptstadt?",
          nl: "De USSR (Unie van Socialistische Sovjetrepublieken) werd officieel opgericht op 30 december 1922. Welke stad werd de hoofdstad?"
        },
        options: [

          { en: "St. Petersburg", es: "San Petersburgo", de: "Sankt Petersburg", nl: "Sint-Petersburg" },

          { en: "Moscow", es: "Moscú", de: "Moskau", nl: "Moskou" },

          { en: "Kiev", es: "Kiev", de: "Kiew", nl: "Kiev" },

          { en: "Stalingrad", es: "Stalingrado", de: "Stalingrad", nl: "Stalingrad" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Moscow became the capital of the USSR when it was officially established on December 30, 1922. The Soviet Union was formed through a treaty uniting the Russian SFSR, Ukrainian SSR, Belarusian SSR, and Transcaucasian SFSR. Moscow had been made the capital of Soviet Russia in 1918, moving it from Petrograd (formerly St. Petersburg) during the Russian Civil War for security reasons. The USSR grew to include 15 Soviet Socialist Republics and became one of the world's two superpowers during the Cold War. The Soviet Union existed for 69 years until its dissolution on December 26, 1991. During this time, Moscow remained the political, economic, and cultural center. The Kremlin in Moscow served as the headquarters of the Soviet government. After the USSR's collapse, Moscow continued as the capital of the Russian Federation.",
          es: "Moscú se convirtió en la capital de la URSS cuando se estableció oficialmente el 30 de diciembre de 1922. La Unión Soviética se formó mediante un tratado que unió la RSFSR rusa, la RSS ucraniana, la RSS bielorrusa y la RSFS transcaucásica. Moscú había sido nombrada capital de la Rusia soviética en 1918, trasladándola desde Petrogrado (anteriormente San Petersburgo) durante la Guerra Civil Rusa por razones de seguridad. La URSS creció hasta incluir 15 Repúblicas Socialistas Soviéticas y se convirtió en una de las dos superpotencias mundiales durante la Guerra Fría. La Unión Soviética existió durante 69 años hasta su disolución el 26 de diciembre de 1991. Durante este tiempo, Moscú permaneció como el centro político, económico y cultural. El Kremlin en Moscú sirvió como sede del gobierno soviético. Después del colapso de la URSS, Moscú continuó como capital de la Federación Rusa.",
          de: "Moskau wurde die Hauptstadt der UdSSR, als sie am 30. Dezember 1922 offiziell gegründet wurde. Die Sowjetunion wurde durch einen Vertrag gebildet, der die Russische SFSR, die Ukrainische SSR, die Weißrussische SSR und die Transkaukasische SFSR vereinte. Moskau war 1918 zur Hauptstadt Sowjetrusslands gemacht worden und wurde während des Russischen Bürgerkriegs aus Sicherheitsgründen von Petrograd (ehemals St. Petersburg) verlegt. Die UdSSR wuchs auf 15 Sowjetische Sozialistische Republiken an und wurde während des Kalten Krieges zu einer der beiden Supermächte der Welt. Die Sowjetunion bestand 69 Jahre lang bis zu ihrer Auflösung am 26. Dezember 1991. Während dieser Zeit blieb Moskau das politische, wirtschaftliche und kulturelle Zentrum. Der Kreml in Moskau diente als Hauptquartier der sowjetischen Regierung. Nach dem Zusammenbruch der UdSSR blieb Moskau die Hauptstadt der Russischen Föderation.",
          nl: "Moskou werd de hoofdstad van de USSR toen het officieel werd opgericht op 30 december 1922. De Sovjet-Unie werd gevormd door een verdrag dat de Russische SFSR, Oekraïense SSR, Wit-Russische SSR en Transkaukasische SFSR verenigde. Moskou was in 1918 tot hoofdstad van Sovjet-Rusland gemaakt en verplaatst van Petrograd (voorheen Sint-Petersburg) tijdens de Russische Burgeroorlog om veiligheidsredenen. De USSR groeide uit tot 15 Socialistische Sovjetrepublieken en werd een van 's werelds twee supermachten tijdens de Koude Oorlog. De Sovjet-Unie bestond 69 jaar tot haar ontbinding op 26 december 1991. Gedurende deze tijd bleef Moskou het politieke, economische en culturele centrum. Het Kremlin in Moskou diende als hoofdkwartier van de Sovjet-regering. Na de ineenstorting van de USSR bleef Moskou de hoofdstad van de Russische Federatie."
        },
        category: "history",
        difficulty: "easy",
        subjects: ["history", "geography"]
      },
      {
        question: {
          en: "The Gadsden Purchase, signed on December 30, 1853, added territory to the United States from which country?",
          es: "La Compra de Gadsden, firmada el 30 de diciembre de 1853, añadió territorio a Estados Unidos de qué país?",
          de: "Der Gadsden-Kauf, unterzeichnet am 30. Dezember 1853, fügte den Vereinigten Staaten Territorium von welchem Land hinzu?",
          nl: "De Gadsden-aankoop, ondertekend op 30 december 1853, voegde territorium toe aan de Verenigde Staten van welk land?"
        },
        options: [

          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },

          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },

          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },

          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" }

        ],
        correctIndex: 2,
        explanation: {
          en: "The Gadsden Purchase was a treaty signed on December 30, 1853, in which the United States purchased approximately 29,670 square miles of land from Mexico for $10 million. The territory, located in present-day southern Arizona and southwestern New Mexico, was acquired primarily to facilitate construction of a southern transcontinental railroad route. The purchase is named after James Gadsden, the U.S. Ambassador to Mexico who negotiated the treaty. This was the last major territorial acquisition in the contiguous United States and helped establish the current U.S.-Mexico border. The acquisition was controversial, with some viewing it as expansionist policy following the Mexican-American War (1846-1848). The purchased land proved valuable for railroad development and later for copper mining. The Gadsden Purchase completed the continental expansion of the United States, establishing boundaries that remain largely unchanged today.",
          es: "La Compra de Gadsden fue un tratado firmado el 30 de diciembre de 1853, en el que Estados Unidos compró aproximadamente 29,670 millas cuadradas de tierra de México por $10 millones. El territorio, ubicado en el sur de Arizona y suroeste de Nuevo México actuales, fue adquirido principalmente para facilitar la construcción de una ruta ferroviaria transcontinental del sur. La compra lleva el nombre de James Gadsden, el embajador de EE.UU. en México que negoció el tratado. Esta fue la última adquisición territorial importante en los Estados Unidos contiguos y ayudó a establecer la frontera actual entre EE.UU. y México. La adquisición fue controvertida, con algunos viéndola como política expansionista tras la Guerra México-Estadounidense (1846-1848). La tierra comprada resultó valiosa para el desarrollo ferroviario y más tarde para la minería de cobre. La Compra de Gadsden completó la expansión continental de Estados Unidos, estableciendo fronteras que permanecen en gran medida sin cambios hoy.",
          de: "Der Gadsden-Kauf war ein am 30. Dezember 1853 unterzeichneter Vertrag, bei dem die Vereinigten Staaten etwa 29.670 Quadratmeilen Land von Mexiko für 10 Millionen Dollar kauften. Das Territorium, das sich im heutigen Süden Arizonas und Südwesten New Mexicos befindet, wurde hauptsächlich erworben, um den Bau einer südlichen transkontinentalen Eisenbahnroute zu erleichtern. Der Kauf ist nach James Gadsden benannt, dem US-Botschafter in Mexiko, der den Vertrag aushandelte. Dies war die letzte große territoriale Erwerbung in den zusammenhängenden Vereinigten Staaten und half, die aktuelle US-mexikanische Grenze zu etablieren. Die Erwerbung war umstritten, wobei einige sie als expansionistische Politik nach dem Mexikanisch-Amerikanischen Krieg (1846-1848) betrachteten. Das gekaufte Land erwies sich als wertvoll für die Eisenbahnentwicklung und später für den Kupferbergbau. Der Gadsden-Kauf vollendete die kontinentale Expansion der Vereinigten Staaten und etablierte Grenzen, die bis heute weitgehend unverändert bleiben.",
          nl: "De Gadsden-aankoop was een verdrag ondertekend op 30 december 1853, waarbij de Verenigde Staten ongeveer 29.670 vierkante mijl land van Mexico kochten voor $10 miljoen. Het territorium, gelegen in het huidige zuidelijke Arizona en zuidwestelijke New Mexico, werd voornamelijk verworven om de aanleg van een zuidelijke transcontinentale spoorwegroute te vergemakkelijken. De aankoop is genoemd naar James Gadsden, de Amerikaanse ambassadeur in Mexico die het verdrag onderhandelde. Dit was de laatste grote territoriale verwerving in de aaneengesloten Verenigde Staten en hielp de huidige Amerikaans-Mexicaanse grens vast te stellen. De verwerving was controversieel, waarbij sommigen het zagen als expansionistisch beleid na de Mexicaans-Amerikaanse Oorlog (1846-1848). Het gekochte land bleek waardevol voor spoorwegontwikkeling en later voor koperwinning. De Gadsden-aankoop voltooide de continentale expansie van de Verenigde Staten en vestigde grenzen die tot op de dag van vandaag grotendeels onveranderd blijven."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "geography"]
      },
      {
        question: {
          en: "Rudyard Kipling, author of 'The Jungle Book,' was born on December 30, 1865, in which country?",
          es: "Rudyard Kipling, autor de 'El libro de la selva', nació el 30 de diciembre de 1865, ¿en qué país?",
          de: "Rudyard Kipling, Autor von 'Das Dschungelbuch', wurde am 30. Dezember 1865 in welchem Land geboren?",
          nl: "Rudyard Kipling, auteur van 'Het Jungleboek', werd geboren op 30 december 1865, in welk land?"
        },
        options: [

          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" },

          { en: "India", es: "India", de: "Indien", nl: "India" },

          { en: "South Africa", es: "Sudáfrica", de: "Südafrika", nl: "Zuid-Afrika" },

          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Rudyard Kipling was born in Bombay (now Mumbai), India, on December 30, 1865, to British parents. He spent his early childhood in India before being sent to England for education at age five. Kipling returned to India as a young adult and worked as a journalist, which influenced much of his later writing. He became one of the most popular writers in England during the late 19th and early 20th centuries. His works include 'The Jungle Book' (1894), 'Kim' (1901), 'Just So Stories' (1902), and the poem 'If—' (1910). Kipling won the Nobel Prize in Literature in 1907, making him the first English-language writer to receive the prize and, at age 41, its youngest recipient at that time. His writing often reflected British colonial India and imperial themes. While celebrated during his lifetime, his legacy has been reassessed due to his association with imperialism. Nevertheless, his stories remain widely read and adapted.",
          es: "Rudyard Kipling nació en Bombay (ahora Mumbai), India, el 30 de diciembre de 1865, de padres británicos. Pasó su primera infancia en India antes de ser enviado a Inglaterra para educarse a los cinco años. Kipling regresó a India como joven adulto y trabajó como periodista, lo que influyó en gran parte de su escritura posterior. Se convirtió en uno de los escritores más populares en Inglaterra durante finales del siglo XIX y principios del XX. Sus obras incluyen 'El libro de la selva' (1894), 'Kim' (1901), 'Historias así' (1902) y el poema 'Si—' (1910). Kipling ganó el Premio Nobel de Literatura en 1907, convirtiéndose en el primer escritor en lengua inglesa en recibir el premio y, a los 41 años, su receptor más joven en ese momento. Su escritura a menudo reflejaba la India colonial británica y temas imperiales. Aunque celebrado durante su vida, su legado ha sido reevaluado debido a su asociación con el imperialismo. Sin embargo, sus historias siguen siendo ampliamente leídas y adaptadas.",
          de: "Rudyard Kipling wurde am 30. Dezember 1865 in Bombay (heute Mumbai), Indien, als Kind britischer Eltern geboren. Er verbrachte seine frühe Kindheit in Indien, bevor er im Alter von fünf Jahren zur Ausbildung nach England geschickt wurde. Kipling kehrte als junger Erwachsener nach Indien zurück und arbeitete als Journalist, was einen Großteil seines späteren Schreibens beeinflusste. Er wurde einer der beliebtesten Schriftsteller in England im späten 19. und frühen 20. Jahrhundert. Zu seinen Werken gehören 'Das Dschungelbuch' (1894), 'Kim' (1901), 'Just So Stories' (1902) und das Gedicht 'Wenn—' (1910). Kipling gewann 1907 den Nobelpreis für Literatur und war damit der erste englischsprachige Schriftsteller, der den Preis erhielt, und mit 41 Jahren zu dieser Zeit der jüngste Empfänger. Sein Schreiben spiegelte oft das britische Kolonialindien und imperiale Themen wider. Obwohl er zu Lebzeiten gefeiert wurde, wurde sein Vermächtnis aufgrund seiner Verbindung zum Imperialismus neu bewertet. Dennoch werden seine Geschichten weiterhin viel gelesen und adaptiert.",
          nl: "Rudyard Kipling werd geboren in Bombay (nu Mumbai), India, op 30 december 1865, bij Britse ouders. Hij bracht zijn vroege jeugd door in India voordat hij op vijfjarige leeftijd naar Engeland werd gestuurd voor onderwijs. Kipling keerde als jonge volwassene terug naar India en werkte als journalist, wat veel van zijn latere schrijfwerk beïnvloedde. Hij werd een van de populairste schrijvers in Engeland tijdens de late 19e en vroege 20e eeuw. Zijn werken omvatten 'Het Jungleboek' (1894), 'Kim' (1901), 'Just So Stories' (1902) en het gedicht 'Als—' (1910). Kipling won de Nobelprijs voor Literatuur in 1907, waarmee hij de eerste Engelstalige schrijver werd die de prijs ontving en, op 41-jarige leeftijd, destijds de jongste ontvanger. Zijn schrijven weerspiegelde vaak Brits koloniaal India en imperiale thema's. Hoewel gevierd tijdens zijn leven, is zijn nalatenschap opnieuw beoordeeld vanwege zijn associatie met imperialisme. Desondanks blijven zijn verhalen veel gelezen en bewerkt."
        },
        category: "entertainment",
        difficulty: "medium",
        subjects: ["entertainment", "people", "geography"]
      },
      {
        question: {
          en: "On December 30, 1916, which Russian mystic and advisor to the Romanov family was assassinated?",
          es: "El 30 de diciembre de 1916, ¿qué místico ruso y consejero de la familia Romanov fue asesinado?",
          de: "Am 30. Dezember 1916 wurde welcher russische Mystiker und Berater der Romanow-Familie ermordet?",
          nl: "Op 30 december 1916 werd welke Russische mysticus en adviseur van de Romanov-familie vermoord?"
        },
        options: [

          { en: "Vladimir Lenin", es: "Vladimir Lenin", de: "Wladimir Lenin", nl: "Vladimir Lenin" },

          { en: "Grigori Rasputin", es: "Grigori Rasputin", de: "Grigori Rasputin", nl: "Grigori Rasputin" },

          { en: "Leon Trotsky", es: "León Trotsky", de: "Leo Trotzki", nl: "Leon Trotsky" },

          { en: "Peter Stolypin", es: "Piotr Stolypin", de: "Pjotr Stolypin", nl: "Peter Stolypin" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Grigori Rasputin was assassinated on December 30, 1916 (December 17 Old Style), by a group of Russian nobles led by Prince Felix Yusupov. Rasputin was a Siberian mystic who gained considerable influence over Tsar Nicholas II and Tsarina Alexandra, particularly through his apparent ability to help their hemophiliac son, Alexei. His influence at court was controversial and seen by many as contributing to the decline of the Romanov dynasty. The assassination story became legendary - conspirators allegedly poisoned him with cyanide-laced cakes and wine, shot him multiple times, and finally drowned him in the Neva River. Modern forensic analysis suggests he actually died from gunshot wounds. Rasputin's murder occurred just over a year before the Russian Revolution of 1917, which led to the execution of the Romanov family. His life and death remain subjects of fascination and have been depicted in numerous books, films, and songs.",
          es: "Grigori Rasputin fue asesinado el 30 de diciembre de 1916 (17 de diciembre estilo antiguo), por un grupo de nobles rusos liderados por el Príncipe Félix Yusúpov. Rasputin era un místico siberiano que ganó considerable influencia sobre el Zar Nicolás II y la Zarina Alejandra, particularmente a través de su aparente capacidad para ayudar a su hijo hemofílico, Alexei. Su influencia en la corte fue controvertida y vista por muchos como contribuyente al declive de la dinastía Romanov. La historia del asesinato se volvió legendaria: los conspiradores supuestamente lo envenenaron con pasteles y vino con cianuro, le dispararon varias veces y finalmente lo ahogaron en el río Neva. El análisis forense moderno sugiere que en realidad murió por heridas de bala. El asesinato de Rasputin ocurrió poco más de un año antes de la Revolución Rusa de 1917, que llevó a la ejecución de la familia Romanov. Su vida y muerte siguen siendo temas de fascinación y han sido representados en numerosos libros, películas y canciones.",
          de: "Grigori Rasputin wurde am 30. Dezember 1916 (17. Dezember alter Stil) von einer Gruppe russischer Adliger unter der Führung von Prinz Felix Jussupow ermordet. Rasputin war ein sibirischer Mystiker, der erheblichen Einfluss auf Zar Nikolaus II. und Zarin Alexandra gewann, insbesondere durch seine scheinbare Fähigkeit, ihrem hämophilen Sohn Alexei zu helfen. Sein Einfluss am Hof war umstritten und wurde von vielen als beitragend zum Niedergang der Romanow-Dynastie angesehen. Die Mordgeschichte wurde legendär - Verschwörer sollen ihn mit zyanidhaltigen Kuchen und Wein vergiftet, mehrmals erschossen und schließlich in der Newa ertränkt haben. Moderne forensische Analysen deuten darauf hin, dass er tatsächlich an Schusswunden starb. Rasputins Ermordung ereignete sich etwas mehr als ein Jahr vor der Russischen Revolution von 1917, die zur Hinrichtung der Romanow-Familie führte. Sein Leben und Tod bleiben Gegenstand der Faszination und wurden in zahlreichen Büchern, Filmen und Liedern dargestellt.",
          nl: "Grigori Raspotin werd vermoord op 30 december 1916 (17 december oude stijl), door een groep Russische edelen geleid door Prins Felix Joesjoepov. Raspotin was een Siberische mysticus die aanzienlijke invloed verwierf over Tsaar Nicolaas II en Tsarina Alexandra, met name door zijn schijnbare vermogen om hun hemofiele zoon Alexei te helpen. Zijn invloed aan het hof was controversieel en werd door velen gezien als bijdragend aan het verval van de Romanov-dynastie. Het moorverhaal werd legendarisch - samenzweerders vergiftigden hem naar verluidt met cyanide-doordrenkte taarten en wijn, schoten hem meerdere keren neer en verdronken hem uiteindelijk in de Neva. Modern forensisch onderzoek suggereert dat hij eigenlijk stierf aan schotwonden. Raspoetins moord vond iets meer dan een jaar plaats vóór de Russische Revolutie van 1917, die leidde tot de executie van de Romanov-familie. Zijn leven en dood blijven onderwerp van fascinatie en zijn afgebeeld in talrijke boeken, films en liedjes."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "people"]
      },
      {
        question: {
          en: "Which basketball legend, known for playing with the Los Angeles Lakers, was born on December 30, 1984?",
          es: "¿Qué leyenda del baloncesto, conocido por jugar con Los Angeles Lakers, nació el 30 de diciembre de 1984?",
          de: "Welche Basketballlegende, bekannt für das Spielen bei den Los Angeles Lakers, wurde am 30. Dezember 1984 geboren?",
          nl: "Welke basketballegende, bekend van het spelen bij de Los Angeles Lakers, werd geboren op 30 december 1984?"
        },
        options: [

          { en: "Kobe Bryant", es: "Kobe Bryant", de: "Kobe Bryant", nl: "Kobe Bryant" },

          { en: "LeBron James", es: "LeBron James", de: "LeBron James", nl: "LeBron James" },

          { en: "Stephen Curry", es: "Stephen Curry", de: "Stephen Curry", nl: "Stephen Curry" },

          { en: "Kevin Durant", es: "Kevin Durant", de: "Kevin Durant", nl: "Kevin Durant" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Stephen Curry was born on December 30, 1984, in Akron, Ohio. While not known for playing with the Lakers (he's spent his entire NBA career with the Golden State Warriors), Curry has become one of basketball's greatest shooters and revolutionized the game with his three-point shooting. He's a four-time NBA champion, two-time NBA MVP, and has broken numerous three-point shooting records. Curry is the son of former NBA player Dell Curry. His influence on modern basketball is profound, popularizing the three-point shot and 'small ball' style of play. He led the Warriors to a record 73-9 season in 2015-16. Curry's impact extends beyond statistics - he changed how basketball is played at all levels, inspiring players to develop long-range shooting skills. He's also known for his charitable work and business ventures off the court.",
          es: "Stephen Curry nació el 30 de diciembre de 1984 en Akron, Ohio. Aunque no es conocido por jugar con los Lakers (ha pasado toda su carrera en la NBA con los Golden State Warriors), Curry se ha convertido en uno de los mejores tiradores del baloncesto y revolucionó el juego con sus tiros de tres puntos. Es cuatro veces campeón de la NBA, dos veces MVP de la NBA y ha roto numerosos récords de tiros de tres puntos. Curry es hijo del ex jugador de la NBA Dell Curry. Su influencia en el baloncesto moderno es profunda, popularizando el tiro de tres puntos y el estilo de juego de 'balón pequeño'. Llevó a los Warriors a una temporada récord de 73-9 en 2015-16. El impacto de Curry va más allá de las estadísticas: cambió cómo se juega el baloncesto en todos los niveles, inspirando a los jugadores a desarrollar habilidades de tiro de largo alcance. También es conocido por su trabajo caritativo y emprendimientos empresariales fuera de la cancha.",
          de: "Stephen Curry wurde am 30. Dezember 1984 in Akron, Ohio, geboren. Obwohl er nicht für das Spielen bei den Lakers bekannt ist (er hat seine gesamte NBA-Karriere bei den Golden State Warriors verbracht), ist Curry zu einem der größten Shooter im Basketball geworden und hat das Spiel mit seinen Dreipunktewürfen revolutioniert. Er ist viermaliger NBA-Champion, zweimaliger NBA-MVP und hat zahlreiche Dreipunkte-Rekorde gebrochen. Curry ist der Sohn des ehemaligen NBA-Spielers Dell Curry. Sein Einfluss auf den modernen Basketball ist tiefgreifend und popularisierte den Dreipunktewurf und den 'Small Ball'-Spielstil. Er führte die Warriors zu einer Rekord-Saison von 73-9 in 2015-16. Currys Einfluss geht über Statistiken hinaus - er veränderte, wie Basketball auf allen Ebenen gespielt wird, und inspirierte Spieler, Fernwurffähigkeiten zu entwickeln. Er ist auch für seine Wohltätigkeitsarbeit und Geschäftsvorhaben außerhalb des Courts bekannt.",
          nl: "Stephen Curry werd geboren op 30 december 1984 in Akron, Ohio. Hoewel hij niet bekend staat om het spelen bij de Lakers (hij heeft zijn hele NBA-carrière bij de Golden State Warriors doorgebracht), is Curry een van de grootste schutters in basketbal geworden en heeft hij het spel gerevolutioneerd met zijn driepuntsschoten. Hij is viervoudig NBA-kampioen, tweevoudig NBA-MVP en heeft talrijke driepuntsrecords gebroken. Curry is de zoon van voormalig NBA-speler Dell Curry. Zijn invloed op modern basketbal is diepgaand en populariseerde het driepuntsschot en de 'small ball' speelstijl. Hij leidde de Warriors naar een recordseizoen van 73-9 in 2015-16. Curry's impact gaat verder dan statistieken - hij veranderde hoe basketbal op alle niveaus wordt gespeeld en inspireerde spelers om vaardigheden voor langeafstandsschoten te ontwikkelen. Hij staat ook bekend om zijn liefdadigheidswerk en zakelijke ondernemingen naast het veld."
        },
        category: "sports",
        difficulty: "medium",
        subjects: ["sports", "people"]
      }
    ],

    day31: [ /* 5 questions */
      {
        question: {
          en: "New Year's Eve is celebrated on December 31st worldwide. In which time zone does the New Year arrive first?",
          es: "La víspera de Año Nuevo se celebra el 31 de diciembre en todo el mundo. ¿En qué zona horaria llega primero el Año Nuevo?",
          de: "Silvester wird weltweit am 31. Dezember gefeiert. In welcher Zeitzone kommt das neue Jahr zuerst an?",
          nl: "Oudejaarsavond wordt wereldwijd gevierd op 31 december. In welke tijdzone arriveert het nieuwe jaar als eerste?"
        },
        options: [
          { en: "New Zealand", es: "Nueva Zelanda", de: "Neuseeland", nl: "Nieuw-Zeeland" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "Kiribati (Line Islands)", es: "Kiribati (Islas de la Línea)", de: "Kiribati (Line-Inseln)", nl: "Kiribati (Line-eilanden)" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Republic of Kiribati's Line Islands (specifically Christmas Island and Kiritimati) are the first inhabited places on Earth to celebrate the New Year, as they're located in time zone UTC+14. The Line Islands were moved to this time zone in 1995 to unify the country under one date, despite being on opposite sides of the International Date Line. Previously, different parts of Kiribati celebrated the New Year on different days. New Zealand (UTC+13 during daylight saving time) and Samoa (UTC+13) celebrate shortly after. The last places to celebrate are Baker Island and Howland Island (UTC-12), uninhabited U.S. territories in the Pacific. This means there's a 26-hour difference between when the first and last places on Earth enter the New Year. New Year's Eve traditions vary globally, from watching fireworks to eating specific foods for good luck.",
          es: "Las Islas de la Línea de la República de Kiribati (específicamente la Isla de Navidad y Kiritimati) son los primeros lugares habitados en la Tierra en celebrar el Año Nuevo, ya que están ubicadas en la zona horaria UTC+14. Las Islas de la Línea se trasladaron a esta zona horaria en 1995 para unificar el país bajo una sola fecha, a pesar de estar en lados opuestos de la Línea Internacional de Cambio de Fecha. Anteriormente, diferentes partes de Kiribati celebraban el Año Nuevo en diferentes días. Nueva Zelanda (UTC+13 durante el horario de verano) y Samoa (UTC+13) celebran poco después. Los últimos lugares en celebrar son la Isla Baker y la Isla Howland (UTC-12), territorios estadounidenses deshabitados en el Pacífico. Esto significa que hay una diferencia de 26 horas entre cuando los primeros y últimos lugares de la Tierra entran en el Año Nuevo. Las tradiciones de víspera de Año Nuevo varían globalmente, desde ver fuegos artificiales hasta comer alimentos específicos para la buena suerte.",
          de: "Die Line-Inseln der Republik Kiribati (insbesondere die Weihnachtsinsel und Kiritimati) sind die ersten bewohnten Orte auf der Erde, die das neue Jahr feiern, da sie sich in der Zeitzone UTC+14 befinden. Die Line-Inseln wurden 1995 in diese Zeitzone verlegt, um das Land unter einem Datum zu vereinen, obwohl sie auf gegenüberliegenden Seiten der Internationalen Datumsgrenze liegen. Zuvor feierten verschiedene Teile von Kiribati das neue Jahr an verschiedenen Tagen. Neuseeland (UTC+13 während der Sommerzeit) und Samoa (UTC+13) feiern kurz danach. Die letzten Orte, die feiern, sind Baker Island und Howland Island (UTC-12), unbewohnte US-Territorien im Pazifik. Das bedeutet, dass es einen Unterschied von 26 Stunden gibt zwischen wann die ersten und letzten Orte auf der Erde ins neue Jahr eintreten. Silvesterbräuche variieren weltweit, vom Feuerwerk schauen bis zum Essen spezifischer Speisen für Glück.",
          nl: "De Line-eilanden van de Republiek Kiribati (specifiek Christmas Island en Kiritimati) zijn de eerste bewoonde plaatsen op aarde die het nieuwe jaar vieren, omdat ze zich bevinden in tijdzone UTC+14. De Line-eilanden werden in 1995 naar deze tijdzone verplaatst om het land onder één datum te verenigen, ondanks dat ze aan tegenovergestelde zijden van de Internationale Datumgrens liggen. Voorheen vierden verschillende delen van Kiribati het nieuwe jaar op verschillende dagen. Nieuw-Zeeland (UTC+13 tijdens zomertijd) en Samoa (UTC+13) vieren kort daarna. De laatste plaatsen die vieren zijn Baker Island en Howland Island (UTC-12), onbewoonde Amerikaanse gebieden in de Stille Oceaan. Dit betekent dat er een verschil van 26 uur is tussen wanneer de eerste en laatste plaatsen op aarde het nieuwe jaar ingaan. Oudejaarsavondtradities variëren wereldwijd, van het kijken naar vuurwerk tot het eten van specifieke voedingsmiddelen voor geluk."
        },
        category: "geography",
        difficulty: "hard",
        subjects: ["geography", "culture"]
      },
      {
        question: {
          en: "On December 31, 1949, the Netherlands formally recognized the independence of which former colony?",
          es: "El 31 de diciembre de 1949, los Países Bajos reconocieron formalmente la independencia de qué antigua colonia?",
          de: "Am 31. Dezember 1949 erkannten die Niederlande formal die Unabhängigkeit welcher ehemaligen Kolonie an?",
          nl: "Op 31 december 1949 erkenden Nederland formeel de onafhankelijkheid van welke voormalige kolonie?"
        },
        options: [

          { en: "Suriname", es: "Surinam", de: "Suriname", nl: "Suriname" },

          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },

          { en: "South Africa", es: "Sudáfrica", de: "Südafrika", nl: "Zuid-Afrika" },

          { en: "Malaysia", es: "Malasia", de: "Malaysia", nl: "Maleisië" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Netherlands formally recognized Indonesian independence on December 31, 1949, ending over 300 years of colonial rule in the Dutch East Indies. Indonesia had declared independence on August 17, 1945, led by Sukarno and Mohammad Hatta, immediately after Japan's surrender in World War II. However, the Netherlands attempted to reassert control, leading to the Indonesian National Revolution (1945-1949), a violent struggle involving guerrilla warfare and Dutch military actions called 'Police Actions.' International pressure, particularly from the United States and the United Nations, eventually forced the Dutch to negotiate. The transfer of sovereignty occurred at a ceremony in Amsterdam on December 27, 1949, with formal recognition following on December 31. Indonesia became the world's largest archipelagic state, comprising over 17,000 islands. This decolonization was part of the broader post-World War II wave of independence movements across Asia and Africa.",
          es: "Los Países Bajos reconocieron formalmente la independencia de Indonesia el 31 de diciembre de 1949, poniendo fin a más de 300 años de dominio colonial en las Indias Orientales Holandesas. Indonesia había declarado su independencia el 17 de agosto de 1945, liderada por Sukarno y Mohammad Hatta, inmediatamente después de la rendición de Japón en la Segunda Guerra Mundial. Sin embargo, los Países Bajos intentaron reafirmar el control, lo que llevó a la Revolución Nacional de Indonesia (1945-1949), una lucha violenta que involucró guerra de guerrillas y acciones militares holandesas llamadas 'Acciones Policiales'. La presión internacional, particularmente de Estados Unidos y las Naciones Unidas, finalmente forzó a los holandeses a negociar. La transferencia de soberanía ocurrió en una ceremonia en Ámsterdam el 27 de diciembre de 1949, con reconocimiento formal el 31 de diciembre. Indonesia se convirtió en el estado archipelágico más grande del mundo, que comprende más de 17,000 islas. Esta descolonización fue parte de la ola más amplia de movimientos de independencia posteriores a la Segunda Guerra Mundial en Asia y África.",
          de: "Die Niederlande erkannten am 31. Dezember 1949 formal die Unabhängigkeit Indonesiens an und beendeten damit über 300 Jahre Kolonialherrschaft in Niederländisch-Ostindien. Indonesien hatte am 17. August 1945, unmittelbar nach Japans Kapitulation im Zweiten Weltkrieg, unter der Führung von Sukarno und Mohammad Hatta seine Unabhängigkeit erklärt. Die Niederlande versuchten jedoch, die Kontrolle wiederherzustellen, was zur Indonesischen Nationalrevolution (1945-1949) führte, einem gewaltsamen Kampf mit Guerillakrieg und niederländischen Militäraktionen, die 'Polizeiaktionen' genannt wurden. Internationaler Druck, insbesondere aus den Vereinigten Staaten und den Vereinten Nationen, zwang die Niederländer schließlich zu Verhandlungen. Die Übertragung der Souveränität fand bei einer Zeremonie in Amsterdam am 27. Dezember 1949 statt, mit formaler Anerkennung am 31. Dezember. Indonesien wurde der größte Inselstaat der Welt mit über 17.000 Inseln. Diese Entkolonialisierung war Teil der breiteren Welle von Unabhängigkeitsbewegungen nach dem Zweiten Weltkrieg in Asien und Afrika.",
          nl: "Nederland erkende formeel de onafhankelijkheid van Indonesië op 31 december 1949, waarmee een einde kwam aan meer dan 300 jaar koloniale heerschappij in Nederlands-Indië. Indonesië had zijn onafhankelijkheid uitgeroepen op 17 augustus 1945, onder leiding van Soekarno en Mohammad Hatta, onmiddellijk na Japan's capitulatie in de Tweede Wereldoorlog. Nederland probeerde echter de controle te herstellen, wat leidde tot de Indonesische Nationale Revolutie (1945-1949), een gewelddadige strijd met guerrillaoorlogvoering en Nederlandse militaire acties genaamd 'Politionele Acties'. Internationale druk, met name van de Verenigde Staten en de Verenigde Naties, dwong de Nederlanders uiteindelijk tot onderhandelen. De soevereiniteitsoverdracht vond plaats tijdens een ceremonie in Amsterdam op 27 december 1949, met formele erkenning op 31 december. Indonesië werd 's werelds grootste eilandenstaat, bestaande uit meer dan 17.000 eilanden. Deze dekolonisatie maakte deel uit van de bredere naoorlogse golf van onafhankelijkheidsbewegingen in Azië en Afrika."
        },
        category: "history",
        difficulty: "medium",
        subjects: ["history", "geography"]
      },
      {
        question: {
          en: "Henri Matisse, the renowned French artist and leader of the Fauvist movement, was born on December 31, 1869. What artistic medium did Matisse pioneer late in his life when illness prevented him from painting?",
          es: "Henri Matisse, el reconocido artista francés y líder del movimiento fauvista, nació el 31 de diciembre de 1869. ¿Qué medio artístico fue pionero Matisse al final de su vida cuando la enfermedad le impidió pintar?",
          de: "Henri Matisse, der renommierte französische Künstler und Führer der Fauvismus-Bewegung, wurde am 31. Dezember 1869 geboren. Welches künstlerische Medium entwickelte Matisse spät in seinem Leben, als Krankheit ihn am Malen hinderte?",
          nl: "Henri Matisse, de gerenommeerde Franse kunstenaar en leider van de fauvistische beweging, werd geboren op 31 december 1869. Welk artistiek medium was Matisse baanbrekend aan het einde van zijn leven toen ziekte hem verhinderde te schilderen?"
        },
        options: [

          { en: "Sculpture", es: "Escultura", de: "Skulptur", nl: "Beeldhouwkunst" },

          { en: "Paper cut-outs", es: "Recortes de papel", de: "Papierschnitte", nl: "Papierknipsels" },

          { en: "Photography", es: "Fotografía", de: "Fotografie", nl: "Fotografie" },

          { en: "Ceramics", es: "Cerámica", de: "Keramik", nl: "Keramiek" }

        ],
        correctIndex: 1,
        explanation: {
          en: "Henri Matisse pioneered the art of paper cut-outs (découpage) late in his life when cancer and surgery confined him to a wheelchair and bed, making painting difficult. Beginning in the 1940s, Matisse created vibrant compositions by cutting shapes from colored paper and arranging them, which he called 'painting with scissors' or 'drawing with scissors.' This technique allowed him to work from his bed and resulted in some of his most celebrated works, including the book 'Jazz' (1947) and the large-scale 'Blue Nudes' series. His cut-outs are characterized by bold, simplified shapes and brilliant colors. The technique represented a culmination of his lifelong exploration of color and form. Major cut-out works include the designs for the Chapel of the Rosary in Vence, France. Matisse's cut-outs influenced subsequent art movements and remain highly valued. He continued this work until his death in 1954, demonstrating remarkable creativity despite physical limitations.",
          es: "Henri Matisse fue pionero en el arte de los recortes de papel (découpage) al final de su vida cuando el cáncer y la cirugía lo confinaron a una silla de ruedas y cama, dificultando la pintura. Comenzando en la década de 1940, Matisse creó composiciones vibrantes cortando formas de papel de colores y organizándolas, lo que llamó 'pintar con tijeras' o 'dibujar con tijeras'. Esta técnica le permitió trabajar desde su cama y resultó en algunas de sus obras más celebradas, incluido el libro 'Jazz' (1947) y la serie a gran escala 'Desnudos azules'. Sus recortes se caracterizan por formas audaces y simplificadas y colores brillantes. La técnica representó una culminación de su exploración de toda la vida del color y la forma. Las obras importantes de recortes incluyen los diseños para la Capilla del Rosario en Vence, Francia. Los recortes de Matisse influyeron en movimientos artísticos posteriores y siguen siendo muy valorados. Continuó este trabajo hasta su muerte en 1954, demostrando una creatividad notable a pesar de las limitaciones físicas.",
          de: "Henri Matisse entwickelte die Kunst der Papierschnitte (Découpage) spät in seinem Leben, als Krebs und eine Operation ihn an einen Rollstuhl und ans Bett fesselten und das Malen erschwerten. Ab den 1940er Jahren schuf Matisse lebendige Kompositionen, indem er Formen aus farbigem Papier schnitt und arrangierte, was er 'Malen mit der Schere' oder 'Zeichnen mit der Schere' nannte. Diese Technik ermöglichte es ihm, von seinem Bett aus zu arbeiten, und führte zu einigen seiner gefeiertsten Werke, darunter das Buch 'Jazz' (1947) und die großformatige Serie 'Blaue Akte'. Seine Scherenschnitte zeichnen sich durch kühne, vereinfachte Formen und brillante Farben aus. Die Technik stellte einen Höhepunkt seiner lebenslangen Erforschung von Farbe und Form dar. Wichtige Scherenschnittwerke umfassen die Entwürfe für die Rosenkranzkapelle in Vence, Frankreich. Matisses Scherenschnitte beeinflussten nachfolgende Kunstbewegungen und bleiben hoch geschätzt. Er setzte diese Arbeit bis zu seinem Tod 1954 fort und zeigte bemerkenswerte Kreativität trotz körperlicher Einschränkungen.",
          nl: "Henri Matisse was baanbrekend in de kunst van papierknipsels (découpage) laat in zijn leven toen kanker en operatie hem aan een rolstoel en bed kluisterden, waardoor schilderen moeilijk werd. Beginnend in de jaren 1940 creëerde Matisse levendige composities door vormen uit gekleurd papier te knippen en te rangschikken, wat hij 'schilderen met een schaar' of 'tekenen met een schaar' noemde. Deze techniek stelde hem in staat om vanuit zijn bed te werken en resulteerde in enkele van zijn meest gevierde werken, waaronder het boek 'Jazz' (1947) en de grootschalige serie 'Blauwe Naakten'. Zijn knipsels worden gekenmerkt door gedurfde, vereenvoudigde vormen en briljante kleuren. De techniek vertegenwoordigde een hoogtepunt van zijn levenslange verkenning van kleur en vorm. Belangrijke knipselwerken omvatten de ontwerpen voor de Rozenkranskapel in Vence, Frankrijk. Matisse's knipsels beïnvloedden latere kunstbewegingen en blijven zeer gewaardeerd. Hij zette dit werk voort tot zijn dood in 1954, waarbij hij opmerkelijke creativiteit toonde ondanks fysieke beperkingen."
        },
        category: "entertainment",
        difficulty: "medium",
        subjects: ["entertainment", "people", "art"]
      },
      {
        question: {
          en: "Anthony Hopkins, the acclaimed Welsh actor who won an Oscar for 'The Silence of the Lambs,' was born on December 31, 1937, in which Welsh city?",
          es: "Anthony Hopkins, el aclamado actor galés que ganó un Oscar por 'El silencio de los corderos', nació el 31 de diciembre de 1937, ¿en qué ciudad galesa?",
          de: "Anthony Hopkins, der gefeierte walisische Schauspieler, der einen Oscar für 'Das Schweigen der Lämmer' gewann, wurde am 31. Dezember 1937 in welcher walisischen Stadt geboren?",
          nl: "Anthony Hopkins, de geprezen Welsh acteur die een Oscar won voor 'The Silence of the Lambs', werd geboren op 31 december 1937, in welke Welshe stad?"
        },
        options: [

          { en: "Cardiff", es: "Cardiff", de: "Cardiff", nl: "Cardiff" },

          { en: "Swansea", es: "Swansea", de: "Swansea", nl: "Swansea" },

          { en: "Port Talbot", es: "Port Talbot", de: "Port Talbot", nl: "Port Talbot" },

          { en: "Newport", es: "Newport", de: "Newport", nl: "Newport" }

        ],
        correctIndex: 2,
        explanation: {
          en: "Anthony Hopkins was born in Port Talbot, Wales, on December 31, 1937. He became one of cinema's most respected actors, winning the Academy Award for Best Actor for his chilling portrayal of Hannibal Lecter in 'The Silence of the Lambs' (1991) - remarkably with only 16 minutes of screen time. Hopkins has won two Oscars, including Best Actor for 'The Father' (2021) at age 83, making him the oldest person to win in that category. He was knighted by Queen Elizabeth II in 1993 for services to the arts. Hopkins trained at the Royal Academy of Dramatic Art and worked extensively in theater before transitioning to film. His other notable roles include 'The Remains of the Day,' 'Nixon,' 'Amistad,' and the Marvel Cinematic Universe films. Known for his meticulous preparation and powerful performances, Hopkins has also composed music and is a talented painter. He became a U.S. citizen in 2000 while retaining his British citizenship.",
          es: "Anthony Hopkins nació en Port Talbot, Gales, el 31 de diciembre de 1937. Se convirtió en uno de los actores más respetados del cine, ganando el premio de la Academia al Mejor Actor por su escalofriante interpretación de Hannibal Lecter en 'El silencio de los corderos' (1991), notablemente con solo 16 minutos en pantalla. Hopkins ha ganado dos Óscar, incluido Mejor Actor por 'El padre' (2021) a los 83 años, convirtiéndolo en la persona mayor en ganar en esa categoría. Fue nombrado caballero por la Reina Isabel II en 1993 por servicios a las artes. Hopkins se formó en la Real Academia de Arte Dramático y trabajó extensamente en teatro antes de pasar al cine. Sus otros papeles notables incluyen 'Lo que queda del día', 'Nixon', 'Amistad' y las películas del Universo Cinematográfico de Marvel. Conocido por su preparación meticulosa y actuaciones poderosas, Hopkins también ha compuesto música y es un talentoso pintor. Se convirtió en ciudadano estadounidense en 2000 mientras conservaba su ciudadanía británica.",
          de: "Anthony Hopkins wurde am 31. Dezember 1937 in Port Talbot, Wales, geboren. Er wurde einer der angesehensten Schauspieler des Kinos und gewann den Academy Award als Bester Hauptdarsteller für seine erschreckende Darstellung von Hannibal Lecter in 'Das Schweigen der Lämmer' (1991) - bemerkenswert mit nur 16 Minuten Bildschirmzeit. Hopkins hat zwei Oscars gewonnen, darunter Bester Hauptdarsteller für 'The Father' (2021) im Alter von 83 Jahren, was ihn zur ältesten Person macht, die in dieser Kategorie gewonnen hat. Er wurde 1993 von Königin Elizabeth II. für Verdienste um die Künste zum Ritter geschlagen. Hopkins wurde an der Royal Academy of Dramatic Art ausgebildet und arbeitete umfassend im Theater, bevor er zum Film wechselte. Zu seinen anderen bemerkenswerten Rollen gehören 'Was vom Tage übrig blieb', 'Nixon', 'Amistad' und die Filme des Marvel Cinematic Universe. Bekannt für seine sorgfältige Vorbereitung und kraftvolle Auftritte, hat Hopkins auch Musik komponiert und ist ein talentierter Maler. Er wurde 2000 US-Bürger und behielt gleichzeitig seine britische Staatsbürgerschaft.",
          nl: "Anthony Hopkins werd geboren in Port Talbot, Wales, op 31 december 1937. Hij werd een van de meest gerespecteerde acteurs van de cinema en won de Academy Award voor Beste Acteur voor zijn huiveringwekkende vertolking van Hannibal Lecter in 'The Silence of the Lambs' (1991) - opmerkelijk met slechts 16 minuten schermtijd. Hopkins heeft twee Oscars gewonnen, waaronder Beste Acteur voor 'The Father' (2021) op 83-jarige leeftijd, waarmee hij de oudste persoon werd die in die categorie won. Hij werd in 1993 geridderd door Koningin Elizabeth II voor verdiensten aan de kunsten. Hopkins werd opgeleid aan de Royal Academy of Dramatic Art en werkte uitgebreid in theater voordat hij overstapte naar film. Zijn andere opmerkelijke rollen omvatten 'The Remains of the Day', 'Nixon', 'Amistad' en de Marvel Cinematic Universe films. Bekend om zijn nauwgezette voorbereiding en krachtige optredens, heeft Hopkins ook muziek gecomponeerd en is een getalenteerd schilder. Hij werd in 2000 Amerikaans staatsburger terwijl hij zijn Britse staatsburgerschap behield."
        },
        category: "entertainment",
        difficulty: "medium",
        subjects: ["entertainment", "people", "geography"]
      },
      {
        question: {
          en: "On December 31, 1999, at the stroke of midnight, what major technological concern known as the 'Millennium Bug' was anticipated to potentially cause global computer failures?",
          es: "El 31 de diciembre de 1999, al dar la medianoche, ¿qué preocupación tecnológica importante conocida como el 'Error del Milenio' se anticipaba que podría causar fallos informáticos globales?",
          de: "Am 31. Dezember 1999, beim Glockenschlag um Mitternacht, welche bedeutende technologische Sorge, bekannt als der 'Millennium-Bug', wurde erwartet, potenziell globale Computerausfälle zu verursachen?",
          nl: "Op 31 december 1999, op het moment van middernacht, welke grote technologische zorg bekend als de 'Millenniumbug' werd verwacht mogelijk wereldwijde computerstoringen te veroorzaken?"
        },
        options: [

          { en: "Computer virus outbreak", es: "Brote de virus informático", de: "Computervirusausbruch", nl: "Computervirusuitbraak" },

          { en: "Y2K (Year 2000) problem", es: "Problema Y2K (Año 2000)", de: "Y2K (Jahr 2000) Problem", nl: "Y2K (Jaar 2000) probleem" },

          { en: "Internet overload", es: "Sobrecarga de internet", de: "Internet-Überlastung", nl: "Internet overbelasting" },

          { en: "Satellite failure", es: "Fallo de satélite", de: "Satellitenausfall", nl: "Satellietfout" }

        ],
        correctIndex: 1,
        explanation: {
          en: "The Y2K bug, or Year 2000 problem, was a computer flaw where systems stored years using only two digits (e.g., '99' for 1999). There was widespread concern that when the year changed to 2000, computers would interpret '00' as 1900, potentially causing massive failures in banking, utilities, transportation, and other critical systems. Governments and businesses spent an estimated $300-600 billion worldwide to update software and hardware before December 31, 1999. The extensive preparation largely prevented major disasters, though some minor glitches occurred. The Y2K scare highlighted society's dependence on computer systems and sparked debates about whether the threat was overblown or the preparations were what prevented catastrophe. Some critical systems did experience problems, including slot machines, weather stations, and some government systems. The successful mitigation of Y2K is considered one of the largest collaborative efforts in technology history.",
          es: "El error Y2K, o problema del Año 2000, fue un defecto informático donde los sistemas almacenaban años usando solo dos dígitos (por ejemplo, '99' para 1999). Había una preocupación generalizada de que cuando el año cambiara a 2000, las computadoras interpretarían '00' como 1900, causando potencialmente fallos masivos en banca, servicios públicos, transporte y otros sistemas críticos. Gobiernos y empresas gastaron aproximadamente $300-600 mil millones en todo el mundo para actualizar software y hardware antes del 31 de diciembre de 1999. La preparación extensa en gran medida previno desastres importantes, aunque ocurrieron algunos fallos menores. El susto del Y2K destacó la dependencia de la sociedad en los sistemas informáticos y provocó debates sobre si la amenaza fue exagerada o las preparaciones fueron lo que previno la catástrofe. Algunos sistemas críticos sí experimentaron problemas, incluidas máquinas tragamonedas, estaciones meteorológicas y algunos sistemas gubernamentales. La mitigación exitosa del Y2K se considera uno de los mayores esfuerzos colaborativos en la historia de la tecnología.",
          de: "Der Y2K-Bug, oder Jahr-2000-Problem, war ein Computerfehler, bei dem Systeme Jahre nur mit zwei Ziffern speicherten (z.B. '99' für 1999). Es gab weitverbreitete Besorgnis, dass wenn das Jahr auf 2000 wechselt, Computer '00' als 1900 interpretieren würden, was potenziell massive Ausfälle im Bankwesen, bei Versorgungsunternehmen, im Transportwesen und anderen kritischen Systemen verursachen könnte. Regierungen und Unternehmen gaben schätzungsweise 300-600 Milliarden Dollar weltweit aus, um Software und Hardware vor dem 31. Dezember 1999 zu aktualisieren. Die umfangreiche Vorbereitung verhinderte weitgehend größere Katastrophen, obwohl einige kleinere Fehler auftraten. Die Y2K-Panik hob die Abhängigkeit der Gesellschaft von Computersystemen hervor und löste Debatten darüber aus, ob die Bedrohung übertrieben war oder die Vorbereitungen die Katastrophe verhinderten. Einige kritische Systeme hatten tatsächlich Probleme, darunter Spielautomaten, Wetterstationen und einige Regierungssysteme. Die erfolgreiche Eindämmung von Y2K gilt als eine der größten kollaborativen Anstrengungen in der Technologiegeschichte.",
          nl: "De Y2K-bug, of Jaar 2000-probleem, was een computerfout waarbij systemen jaren opsloegen met slechts twee cijfers (bijv. '99' voor 1999). Er was wijdverspreide bezorgdheid dat wanneer het jaar veranderde naar 2000, computers '00' zouden interpreteren als 1900, wat mogelijk massale storingen zou veroorzaken in bankieren, nutsbedrijven, transport en andere kritieke systemen. Regeringen en bedrijven besteedden naar schatting $300-600 miljard wereldwijd om software en hardware bij te werken vóór 31 december 1999. De uitgebreide voorbereiding voorkwam grotendeels grote rampen, hoewel enkele kleine storingen optraden. De Y2K-paniek benadrukte de afhankelijkheid van de maatschappij van computersystemen en leidde tot debatten over of de dreiging overdreven was of dat de voorbereidingen de catastrofe voorkwamen. Sommige kritieke systemen ondervonden wel problemen, waaronder gokautomaten, weerstations en enkele overheidssystemen. De succesvolle beperking van Y2K wordt beschouwd als een van de grootste collaboratieve inspanningen in de technologiegeschiedenis."
        },
        category: "science",
        difficulty: "easy",
        subjects: ["science", "history"]
      }
    ]
  };

  // Export December challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('december', decemberChallenges);
  }

})();
