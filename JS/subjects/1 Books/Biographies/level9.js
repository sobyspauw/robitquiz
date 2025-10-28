// Quiz Template - Level 9: Boeken - Biografieën
(function() {
  const level9 = {
    name: {
      en: "Biographies",
      es: "Biografías",
      de: "Biografien",
      nl: "Biografieën"
    },
    questions: [
      {
        question: {
          en: "What was the exact date when the Secret Annex was raided and Anne Frank's family was arrested?",
          es: "¿Cuál fue la fecha exacta en que se allanó la Casa de atrás y se arrestó a la familia de Ana Frank?",
          de: "An welchem genauen Datum wurde das Hinterhaus durchsucht und Anne Franks Familie verhaftet?",
          nl: "Wat was de exacte datum waarop het Achterhuis een inval kreeg en Anne Franks familie werd gearresteerd?"
        },
        options: [
          { en: "August 4, 1944", es: "4 de agosto de 1944", de: "4. August 1944", nl: "4 augustus 1944" },
          { en: "July 15, 1944", es: "15 de julio de 1944", de: "15. Juli 1944", nl: "15 juli 1944" },
          { en: "September 3, 1944", es: "3 de septiembre de 1944", de: "3. September 1944", nl: "3 september 1944" },
          { en: "June 6, 1944", es: "6 de junio de 1944", de: "6. Juni 1944", nl: "6 juni 1944" }
        ],
        correct: 0,
        explanation: {
          en: "The Secret Annex was raided on August 4, 1944, by the Sicherheitsdienst (SD) led by SS-Oberscharführer Karl Silberbauer. The identity of the betrayer has never been definitively established, though several theories exist. Anne's last diary entry was three days earlier on August 1, 1944.",
          es: "La Casa de atrás fue allanada el 4 de agosto de 1944 por el Sicherheitsdienst (SD) dirigido por el SS-Oberscharführer Karl Silberbauer. La identidad del traidor nunca se ha establecido definitivamente, aunque existen varias teorías. La última entrada del diario de Ana fue tres días antes, el 1 de agosto de 1944.",
          de: "Das Hinterhaus wurde am 4. August 1944 vom Sicherheitsdienst (SD) unter Leitung von SS-Oberscharführer Karl Silberbauer durchsucht. Die Identität des Verräters wurde nie definitiv geklärt, obwohl mehrere Theorien existieren. Annes letzter Tagebucheintrag war drei Tage zuvor am 1. August 1944.",
          nl: "Het Achterhuis kreeg een inval op 4 augustus 1944 door de Sicherheitsdienst (SD) onder leiding van SS-Oberscharführer Karl Silberbauer. De identiteit van de verrader is nooit definitief vastgesteld, hoewel er verschillende theorieën bestaan. Anne's laatste dagboeknotitie was drie dagen eerder op 1 augustus 1944."
        }
      },
      {
        question: {
          en: "What was Nelson Mandela's clan name, which became his honorific title?",
          es: "¿Cuál era el nombre de clan de Nelson Mandela, que se convirtió en su título honorífico?",
          de: "Was war Nelson Mandelas Clanname, der zu seinem Ehrentitel wurde?",
          nl: "Wat was Nelson Mandela's clannaam, die zijn eretitel werd?"
        },
        options: [
          { en: "Rolihlahla", es: "Rolihlahla", de: "Rolihlahla", nl: "Rolihlahla" },
          { en: "Madiba", es: "Madiba", de: "Madiba", nl: "Madiba" },
          { en: "Dalibhunga", es: "Dalibhunga", de: "Dalibhunga", nl: "Dalibhunga" },
          { en: "Thembu", es: "Thembu", de: "Thembu", nl: "Thembu" }
        ],
        correct: 1,
        explanation: {
          en: "Madiba was Mandela's clan name, referencing the Thembu chief who ruled in the 18th century. This became an affectionate honorific by which South Africans referred to him. His birth name was Rolihlahla, his circumcision name was Dalibhunga, and he was from the Thembu ethnic group.",
          es: "Madiba era el nombre de clan de Mandela, en referencia al jefe Thembu que gobernó en el siglo XVIII. Este se convirtió en un honorífico afectuoso con el que los sudafricanos se referían a él. Su nombre de nacimiento era Rolihlahla, su nombre de circuncisión era Dalibhunga, y era del grupo étnico Thembu.",
          de: "Madiba war Mandelas Clanname, der sich auf den Thembu-Häuptling bezog, der im 18. Jahrhundert herrschte. Dies wurde zu einem liebevollen Ehrentitel, mit dem Südafrikaner ihn bezeichneten. Sein Geburtsname war Rolihlahla, sein Beschneidungsname war Dalibhunga, und er stammte aus der ethnischen Gruppe der Thembu.",
          nl: "Madiba was Mandela's clannaam, verwijzend naar de Thembu-leider die in de 18e eeuw regeerde. Dit werd een liefkozende eretitel waarmee Zuid-Afrikanen naar hem verwezen. Zijn geboortenaam was Rolihlahla, zijn besnijdenisnaam was Dalibhunga, en hij was van de Thembu etnische groep."
        }
      },
      {
        question: {
          en: "In 'Educated', what false belief did Tara Westover's father hold that prevented him from seeking proper medical care or allowing his children to attend school?",
          es: "En 'Una educación', ¿qué creencia falsa tenía el padre de Tara Westover que le impedía buscar atención médica adecuada o permitir que sus hijos asistieran a la escuela?",
          de: "Welche falsche Überzeugung hatte Tara Westovers Vater in 'Befreit', die ihn daran hinderte, angemessene medizinische Versorgung zu suchen oder seinen Kindern zu erlauben, zur Schule zu gehen?",
          nl: "Welk vals geloof had Tara Westovers vader in 'Het Besluit' dat hem ervan weerhield om goede medische zorg te zoeken of zijn kinderen toe te staan naar school te gaan?"
        },
        options: [
          { en: "He believed the government would brainwash children and control citizens", es: "Creía que el gobierno lavaría el cerebro a los niños y controlaría a los ciudadanos", de: "Er glaubte, die Regierung würde Kinder einer Gehirnwäsche unterziehen und Bürger kontrollieren", nl: "Hij geloofde dat de overheid kinderen zou hersenspoelen en burgers zou controleren" },
          { en: "He was Amish and rejected modern technology", es: "Era amish y rechazaba la tecnología moderna", de: "Er war Amish und lehnte moderne Technologie ab", nl: "Hij was Amish en verwierp moderne technologie" },
          { en: "He believed in natural selection only", es: "Creía solo en la selección natural", de: "Er glaubte nur an natürliche Selektion", nl: "Hij geloofde alleen in natuurlijke selectie" },
          { en: "He was following a specific religious sect's teachings", es: "Seguía las enseñanzas de una secta religiosa específica", de: "Er folgte den Lehren einer bestimmten religiösen Sekte", nl: "Hij volgde de leringen van een specifieke religieuze sekte" }
        ],
        correct: 0,
        explanation: {
          en: "Gene (LaRue) Westover was a Mormon fundamentalist survivalist who believed the federal government was part of an Illuminati conspiracy. He thought public schools would indoctrinate children, doctors were part of a socialist medical establishment, and that the Days of Abomination were imminent. His paranoid delusions, possibly stemming from bipolar disorder, dominated the family's isolated existence.",
          es: "Gene (LaRue) Westover era un supervivencialista fundamentalista mormón que creía que el gobierno federal era parte de una conspiración Illuminati. Pensaba que las escuelas públicas adoctrinarían a los niños, los médicos eran parte de un establecimiento médico socialista, y que los Días de la Abominación eran inminentes. Sus delirios paranoicos, posiblemente derivados del trastorno bipolar, dominaron la existencia aislada de la familia.",
          de: "Gene (LaRue) Westover war ein mormonischer fundamentalistischer Überlebenskünstler, der glaubte, die Bundesregierung sei Teil einer Illuminati-Verschwörung. Er dachte, öffentliche Schulen würden Kinder indoktrinieren, Ärzte seien Teil eines sozialistischen medizinischen Establishments, und die Tage der Abscheulichkeit stünden bevor. Seine paranoiden Wahnvorstellungen, möglicherweise aus einer bipolaren Störung stammend, beherrschten die isolierte Existenz der Familie.",
          nl: "Gene (LaRue) Westover was een mormoonse fundamentalistische survivalist die geloofde dat de federale overheid deel uitmaakte van een Illuminati-samenzwering. Hij dacht dat openbare scholen kinderen zouden indoctrineren, artsen deel uitmaakten van een socialistisch medisch establishment, en dat de Dagen van Gruwel ophanden waren. Zijn paranoïde waanideeën, mogelijk voortkomend uit een bipolaire stoornis, domineerden het geïsoleerde bestaan van de familie."
        }
      },
      {
        question: {
          en: "What was the name Malcolm X adopted after his pilgrimage to Mecca and break with the Nation of Islam?",
          es: "¿Qué nombre adoptó Malcolm X después de su peregrinación a La Meca y su ruptura con la Nación del Islam?",
          de: "Welchen Namen nahm Malcolm X nach seiner Pilgerfahrt nach Mekka und seinem Bruch mit der Nation of Islam an?",
          nl: "Welke naam nam Malcolm X aan na zijn bedevaart naar Mekka en breuk met de Nation of Islam?"
        },
        options: [
          { en: "El-Hajj Malik El-Shabazz", es: "El-Hajj Malik El-Shabazz", de: "El-Hajj Malik El-Shabazz", nl: "El-Hajj Malik El-Shabazz" },
          { en: "Malcolm Shabazz", es: "Malcolm Shabazz", de: "Malcolm Shabazz", nl: "Malcolm Shabazz" },
          { en: "Malik Al-Hajj", es: "Malik Al-Hajj", de: "Malik Al-Hajj", nl: "Malik Al-Hajj" },
          { en: "Muhammad Ali Shabazz", es: "Muhammad Ali Shabazz", de: "Muhammad Ali Shabazz", nl: "Muhammad Ali Shabazz" }
        ],
        correct: 0,
        explanation: {
          en: "After his 1964 pilgrimage to Mecca (Hajj), Malcolm X adopted the name El-Hajj Malik El-Shabazz. 'El-Hajj' indicates he had completed the Hajj, 'Malik' means 'king' in Arabic, and 'Shabazz' was a name used by the Nation of Islam referring to a supposed ancient Black tribe. He was assassinated less than a year later in February 1965.",
          es: "Después de su peregrinación a La Meca (Hajj) en 1964, Malcolm X adoptó el nombre El-Hajj Malik El-Shabazz. 'El-Hajj' indica que había completado el Hajj, 'Malik' significa 'rey' en árabe, y 'Shabazz' era un nombre usado por la Nación del Islam refiriéndose a una supuesta antigua tribu negra. Fue asesinado menos de un año después en febrero de 1965.",
          de: "Nach seiner Pilgerfahrt nach Mekka (Hadsch) im Jahr 1964 nahm Malcolm X den Namen El-Hajj Malik El-Shabazz an. 'El-Hajj' zeigt an, dass er den Hadsch vollendet hatte, 'Malik' bedeutet 'König' auf Arabisch, und 'Shabazz' war ein Name, der von der Nation of Islam verwendet wurde und sich auf einen angeblichen alten schwarzen Stamm bezog. Er wurde weniger als ein Jahr später im Februar 1965 ermordet.",
          nl: "Na zijn bedevaart naar Mekka (Hadj) in 1964 nam Malcolm X de naam El-Hajj Malik El-Shabazz aan. 'El-Hajj' geeft aan dat hij de Hadj had voltooid, 'Malik' betekent 'koning' in het Arabisch, en 'Shabazz' was een naam die door de Nation of Islam werd gebruikt verwijzend naar een vermeende oude zwarte stam. Hij werd minder dan een jaar later vermoord in februari 1965."
        }
      },
      {
        question: {
          en: "In Benjamin Franklin's autobiography, what was the name of the subscription library he founded in Philadelphia in 1731?",
          es: "En la autobiografía de Benjamin Franklin, ¿cómo se llamaba la biblioteca de suscripción que fundó en Filadelfia en 1731?",
          de: "Wie hieß die Abonnementbibliothek, die Benjamin Franklin 1731 in Philadelphia gründete, laut seiner Autobiografie?",
          nl: "Hoe heette de abonnementsbibliotheek die Benjamin Franklin in 1731 in Philadelphia oprichtte volgens zijn autobiografie?"
        },
        options: [
          { en: "The Philadelphia Library", es: "La Biblioteca de Filadelfia", de: "Die Philadelphia-Bibliothek", nl: "De Philadelphia Bibliotheek" },
          { en: "The Library Company of Philadelphia", es: "La Compañía de Biblioteca de Filadelfia", de: "Die Library Company of Philadelphia", nl: "De Library Company of Philadelphia" },
          { en: "Franklin's Reading Room", es: "La Sala de Lectura de Franklin", de: "Franklins Lesezimmer", nl: "Franklin's Leeszaal" },
          { en: "The American Philosophical Society Library", es: "La Biblioteca de la Sociedad Filosófica Americana", de: "Die Bibliothek der American Philosophical Society", nl: "De American Philosophical Society Bibliotheek" }
        ],
        correct: 1,
        explanation: {
          en: "The Library Company of Philadelphia, founded by Franklin in 1731, was the first subscription library in America. Members paid dues to borrow books, making literature accessible beyond the wealthy elite. It became a model for public libraries across America and still exists today as a scholarly research library.",
          es: "La Compañía de Biblioteca de Filadelfia, fundada por Franklin en 1731, fue la primera biblioteca de suscripción en América. Los miembros pagaban cuotas para tomar prestados libros, haciendo la literatura accesible más allá de la élite adinerada. Se convirtió en un modelo para las bibliotecas públicas en toda América y todavía existe hoy como una biblioteca de investigación académica.",
          de: "Die Library Company of Philadelphia, 1731 von Franklin gegründet, war die erste Abonnementbibliothek in Amerika. Mitglieder zahlten Beiträge, um Bücher auszuleihen, wodurch Literatur über die wohlhabende Elite hinaus zugänglich wurde. Sie wurde zum Vorbild für öffentliche Bibliotheken in ganz Amerika und existiert heute noch als wissenschaftliche Forschungsbibliothek.",
          nl: "De Library Company of Philadelphia, opgericht door Franklin in 1731, was de eerste abonnementsbibliotheek in Amerika. Leden betaalden contributie om boeken te lenen, waardoor literatuur toegankelijk werd voor meer dan alleen de rijke elite. Het werd een model voor openbare bibliotheken in heel Amerika en bestaat vandaag nog steeds als een wetenschappelijke onderzoeksbibliotheek."
        }
      },
      {
        question: {
          en: "During which year was Nelson Mandela moved from Robben Island to Pollsmoor Prison, marking a change in his imprisonment conditions?",
          es: "¿En qué año fue trasladado Nelson Mandela de la Isla Robben a la Prisión Pollsmoor, marcando un cambio en sus condiciones de encarcelamiento?",
          de: "In welchem Jahr wurde Nelson Mandela von Robben Island ins Pollsmoor-Gefängnis verlegt, was eine Änderung seiner Haftbedingungen markierte?",
          nl: "In welk jaar werd Nelson Mandela overgebracht van Robbeneiland naar Pollsmoor-gevangenis, wat een verandering in zijn gevangenschap markeerde?"
        },
        options: [
          { en: "1976", es: "1976", de: "1976", nl: "1976" },
          { en: "1980", es: "1980", de: "1980", nl: "1980" },
          { en: "1982", es: "1982", de: "1982", nl: "1982" },
          { en: "1985", es: "1985", de: "1985", nl: "1985" }
        ],
        correct: 2,
        explanation: {
          en: "Mandela was transferred from Robben Island to Pollsmoor Prison in 1982, after 18 years on the island. The move was intended to isolate him from younger political prisoners, but ironically provided better conditions and eventually facilitated secret negotiations with the government. He spent six years at Pollsmoor before being moved to Victor Verster in 1988.",
          es: "Mandela fue trasladado de la Isla Robben a la Prisión Pollsmoor en 1982, después de 18 años en la isla. El traslado tenía la intención de aislarlo de los prisioneros políticos más jóvenes, pero irónicamente proporcionó mejores condiciones y eventualmente facilitó negociaciones secretas con el gobierno. Pasó seis años en Pollsmoor antes de ser trasladado a Victor Verster en 1988.",
          de: "Mandela wurde 1982 nach 18 Jahren auf der Insel von Robben Island ins Pollsmoor-Gefängnis verlegt. Die Verlegung sollte ihn von jüngeren politischen Gefangenen isolieren, bot aber ironischerweise bessere Bedingungen und ermöglichte schließlich geheime Verhandlungen mit der Regierung. Er verbrachte sechs Jahre in Pollsmoor, bevor er 1988 nach Victor Verster verlegt wurde.",
          nl: "Mandela werd in 1982 overgebracht van Robbeneiland naar Pollsmoor-gevangenis, na 18 jaar op het eiland. De verhuizing was bedoeld om hem te isoleren van jongere politieke gevangenen, maar bood ironisch genoeg betere omstandigheden en faciliteerde uiteindelijk geheime onderhandelingen met de regering. Hij bracht zes jaar door in Pollsmoor voordat hij in 1988 naar Victor Verster werd overgebracht."
        }
      },
      {
        question: {
          en: "What specific type of work did Helen Keller and Anne Sullivan perform together to raise funds for the American Foundation for the Blind?",
          es: "¿Qué tipo específico de trabajo realizaron juntas Helen Keller y Anne Sullivan para recaudar fondos para la Fundación Americana para Ciegos?",
          de: "Welche spezifische Art von Arbeit führten Helen Keller und Anne Sullivan gemeinsam durch, um Gelder für die American Foundation for the Blind zu sammeln?",
          nl: "Welk specifiek type werk voerden Helen Keller en Anne Sullivan samen uit om geld in te zamelen voor de American Foundation for the Blind?"
        },
        options: [
          { en: "Writing books only", es: "Solo escribir libros", de: "Nur Bücher schreiben", nl: "Alleen boeken schrijven" },
          { en: "Vaudeville performances", es: "Actuaciones de vodevil", de: "Vaudeville-Auftritte", nl: "Vaudeville-optredens" },
          { en: "Radio broadcasts", es: "Transmisiones de radio", de: "Radiosendungen", nl: "Radio-uitzendingen" },
          { en: "University lectures only", es: "Solo conferencias universitarias", de: "Nur Universitätsvorlesungen", nl: "Alleen universitaire lezingen" }
        ],
        correct: 1,
        explanation: {
          en: "From 1920-1924, Helen Keller and Anne Sullivan performed on the vaudeville circuit, appearing in theaters across America. Their act demonstrated Helen's abilities and raised awareness about disabilities while earning substantial funds. Though some criticized it as undignified, Keller defended it as effective advocacy and honest work.",
          es: "De 1920 a 1924, Helen Keller y Anne Sullivan actuaron en el circuito de vodevil, apareciendo en teatros de toda América. Su acto demostraba las habilidades de Helen y creaba conciencia sobre las discapacidades mientras ganaba fondos sustanciales. Aunque algunos lo criticaron como indigno, Keller lo defendió como una defensa efectiva y trabajo honesto.",
          de: "Von 1920 bis 1924 traten Helen Keller und Anne Sullivan im Vaudeville-Circuit auf und erschienen in Theatern in ganz Amerika. Ihre Darbietung demonstrierte Helens Fähigkeiten und schuf Bewusstsein für Behinderungen, während sie erhebliche Mittel einbrachte. Obwohl einige es als unwürdig kritisierten, verteidigte Keller es als effektive Interessenvertretung und ehrliche Arbeit.",
          nl: "Van 1920-1924 traden Helen Keller en Anne Sullivan op in het vaudeville-circuit en verschenen in theaters in heel Amerika. Hun act toonde Helen's vaardigheden en creëerde bewustzijn over handicaps terwijl ze aanzienlijke fondsen verdienen. Hoewel sommigen het als onwaardig bekritiseerden, verdedigde Keller het als effectieve belangenbehartiging en eerlijk werk."
        }
      },
      {
        question: {
          en: "In 'I Know Why the Caged Bird Sings', what was the name of Maya Angelou's son, born when she was only 17?",
          es: "En 'Yo sé por qué canta el pájaro enjaulado', ¿cómo se llamaba el hijo de Maya Angelou, nacido cuando ella tenía solo 17 años?",
          de: "Wie hieß Maya Angelous Sohn in 'Ich weiß, warum der gefangene Vogel singt', der geboren wurde, als sie erst 17 Jahre alt war?",
          nl: "Hoe heette Maya Angelou's zoon in 'Ik weet waarom gekooide vogels zingen', geboren toen ze pas 17 jaar oud was?"
        },
        options: [
          { en: "Bailey Johnson Jr.", es: "Bailey Johnson Jr.", de: "Bailey Johnson Jr.", nl: "Bailey Johnson Jr." },
          { en: "Clyde Bailey Johnson", es: "Clyde Bailey Johnson", de: "Clyde Bailey Johnson", nl: "Clyde Bailey Johnson" },
          { en: "Guy Johnson", es: "Guy Johnson", de: "Guy Johnson", nl: "Guy Johnson" },
          { en: "Marcus Johnson", es: "Marcus Johnson", de: "Marcus Johnson", nl: "Marcus Johnson" }
        ],
        correct: 2,
        explanation: {
          en: "Guy Johnson was born to Maya Angelou in 1945 when she was 17 years old. The memoir ends with his birth. Maya initially feared she wouldn't be a good mother, but her mother helped her overcome these fears. Guy later became a writer and poet himself and has written about growing up with his famous mother.",
          es: "Guy Johnson nació de Maya Angelou en 1945 cuando ella tenía 17 años. Las memorias terminan con su nacimiento. Maya inicialmente temía que no sería una buena madre, pero su madre la ayudó a superar estos temores. Guy más tarde se convirtió en escritor y poeta y ha escrito sobre crecer con su famosa madre.",
          de: "Guy Johnson wurde 1945 von Maya Angelou geboren, als sie 17 Jahre alt war. Die Memoiren enden mit seiner Geburt. Maya befürchtete zunächst, keine gute Mutter zu sein, aber ihre Mutter half ihr, diese Ängste zu überwinden. Guy wurde später selbst Schriftsteller und Dichter und hat über das Aufwachsen mit seiner berühmten Mutter geschrieben.",
          nl: "Guy Johnson werd in 1945 geboren bij Maya Angelou toen ze 17 jaar oud was. De memoires eindigen met zijn geboorte. Maya was aanvankelijk bang dat ze geen goede moeder zou zijn, maar haar moeder hielp haar deze angsten te overwinnen. Guy werd later zelf schrijver en dichter en heeft geschreven over opgroeien met zijn beroemde moeder."
        }
      },
      {
        question: {
          en: "In 'The Glass Castle', what chronic health condition did Jeannette Walls' father Rex suffer from that contributed to his inability to maintain employment?",
          es: "En 'El castillo de cristal', ¿qué condición de salud crónica sufría el padre de Jeannette Walls, Rex, que contribuyó a su incapacidad para mantener un empleo?",
          de: "An welcher chronischen Gesundheitszustand litt Jeannette Walls' Vater Rex in 'Schloss aus Glas', der zu seiner Unfähigkeit beitrug, eine Anstellung zu behalten?",
          nl: "Aan welke chronische gezondheidstoestand leed Jeannette Walls' vader Rex in 'De glazen burcht' die bijdroeg aan zijn onvermogen om werk te behouden?"
        },
        options: [
          { en: "Diabetes", es: "Diabetes", de: "Diabetes", nl: "Diabetes" },
          { en: "Tuberculosis", es: "Tuberculosis", de: "Tuberkulose", nl: "Tuberculose" },
          { en: "Alcoholism", es: "Alcoholismo", de: "Alkoholismus", nl: "Alcoholisme" },
          { en: "Heart disease", es: "Enfermedad cardíaca", de: "Herzkrankheit", nl: "Hartziekte" }
        ],
        correct: 2,
        explanation: {
          en: "Rex Walls suffered from severe alcoholism throughout the memoir. His drinking led to lost jobs, violent outbursts, stealing from his children, and putting the family in danger. Despite his intelligence and charm, his addiction prevented him from providing for his family. He died in 1994 from a heart attack related to his alcoholism.",
          es: "Rex Walls sufrió de alcoholismo severo a lo largo de las memorias. Su consumo de alcohol llevó a trabajos perdidos, estallidos violentos, robo a sus hijos y poner a la familia en peligro. A pesar de su inteligencia y encanto, su adicción le impidió proveer para su familia. Murió en 1994 de un ataque al corazón relacionado con su alcoholismo.",
          de: "Rex Walls litt in den gesamten Memoiren an schwerem Alkoholismus. Sein Trinken führte zu verlorenen Jobs, gewalttätigen Ausbrüchen, Diebstahl von seinen Kindern und Gefährdung der Familie. Trotz seiner Intelligenz und seines Charmes hinderte ihn seine Sucht daran, für seine Familie zu sorgen. Er starb 1994 an einem Herzinfarkt im Zusammenhang mit seinem Alkoholismus.",
          nl: "Rex Walls leed aan ernstig alcoholisme door de hele memoires heen. Zijn drankgebruik leidde tot verloren banen, gewelddadige uitbarstingen, stelen van zijn kinderen en het in gevaar brengen van het gezin. Ondanks zijn intelligentie en charme verhinderde zijn verslaving hem om voor zijn gezin te zorgen. Hij stierf in 1994 aan een hartaanval gerelateerd aan zijn alcoholisme."
        }
      },
      {
        question: {
          en: "In Frederick Douglass's narrative, what was the name of his first wife whom he married shortly after escaping to freedom?",
          es: "En la narrativa de Frederick Douglass, ¿cómo se llamaba su primera esposa con quien se casó poco después de escapar a la libertad?",
          de: "Wie hieß Frederick Douglass' erste Frau, die er kurz nach seiner Flucht in die Freiheit heiratete, laut seiner Erzählung?",
          nl: "Hoe heette Frederick Douglass' eerste vrouw met wie hij trouwde kort na zijn ontsnapping naar de vrijheid volgens zijn verhaal?"
        },
        options: [
          { en: "Anna Murray", es: "Anna Murray", de: "Anna Murray", nl: "Anna Murray" },
          { en: "Helen Pitts", es: "Helen Pitts", de: "Helen Pitts", nl: "Helen Pitts" },
          { en: "Harriet Tubman", es: "Harriet Tubman", de: "Harriet Tubman", nl: "Harriet Tubman" },
          { en: "Sojourner Truth", es: "Sojourner Truth", de: "Sojourner Truth", nl: "Sojourner Truth" }
        ],
        correct: 0,
        explanation: {
          en: "Anna Murray was a free Black woman from Baltimore who helped Douglass escape and whom he married on September 15, 1838, just 11 days after reaching New York. She had saved money to help fund his escape. They remained married for 44 years until her death in 1882, having five children together. He later married Helen Pitts, a white suffragist.",
          es: "Anna Murray era una mujer negra libre de Baltimore que ayudó a Douglass a escapar y con quien se casó el 15 de septiembre de 1838, solo 11 días después de llegar a Nueva York. Ella había ahorrado dinero para ayudar a financiar su escape. Permanecieron casados durante 44 años hasta su muerte en 1882, teniendo cinco hijos juntos. Más tarde se casó con Helen Pitts, una sufragista blanca.",
          de: "Anna Murray war eine freie schwarze Frau aus Baltimore, die Douglass bei der Flucht half und die er am 15. September 1838, nur 11 Tage nach seiner Ankunft in New York, heiratete. Sie hatte Geld gespart, um seine Flucht zu finanzieren. Sie blieben 44 Jahre lang verheiratet bis zu ihrem Tod 1882 und hatten fünf Kinder zusammen. Später heiratete er Helen Pitts, eine weiße Suffragette.",
          nl: "Anna Murray was een vrije zwarte vrouw uit Baltimore die Douglass hielp ontsnappen en met wie hij trouwde op 15 september 1838, slechts 11 dagen na aankomst in New York. Ze had geld gespaard om zijn ontsnapping te financieren. Ze bleven 44 jaar getrouwd tot haar dood in 1882 en kregen vijf kinderen samen. Hij trouwde later met Helen Pitts, een blanke suffragette."
        }
      },
      {
        question: {
          en: "In 'Becoming', what was the name of Michelle Obama's brother who became a basketball coach?",
          es: "En 'Mi historia', ¿cómo se llamaba el hermano de Michelle Obama que se convirtió en entrenador de baloncesto?",
          de: "Wie hieß Michelle Obamas Bruder in 'Becoming', der Basketballtrainer wurde?",
          nl: "Hoe heette Michelle Obama's broer in 'Mijn verhaal' die basketbalcoach werd?"
        },
        options: [
          { en: "Marcus Robinson", es: "Marcus Robinson", de: "Marcus Robinson", nl: "Marcus Robinson" },
          { en: "Craig Robinson", es: "Craig Robinson", de: "Craig Robinson", nl: "Craig Robinson" },
          { en: "Fraser Robinson IV", es: "Fraser Robinson IV", de: "Fraser Robinson IV", nl: "Fraser Robinson IV" },
          { en: "David Robinson", es: "David Robinson", de: "David Robinson", nl: "David Robinson" }
        ],
        correct: 1,
        explanation: {
          en: "Craig Robinson is Michelle Obama's older brother. He played basketball at Princeton University and later became a basketball coach, including serving as head coach at Oregon State University and Brown University. Craig was very protective of Michelle and initially skeptical of Barack Obama when they started dating, famously playing basketball with him to assess his character.",
          es: "Craig Robinson es el hermano mayor de Michelle Obama. Jugó baloncesto en la Universidad de Princeton y más tarde se convirtió en entrenador de baloncesto, incluyendo servir como entrenador principal en la Universidad Estatal de Oregon y la Universidad Brown. Craig era muy protector con Michelle e inicialmente escéptico de Barack Obama cuando comenzaron a salir, famosamente jugando baloncesto con él para evaluar su carácter.",
          de: "Craig Robinson ist Michelle Obamas älterer Bruder. Er spielte Basketball an der Princeton University und wurde später Basketballtrainer, unter anderem als Cheftrainer an der Oregon State University und der Brown University. Craig war sehr beschützend gegenüber Michelle und zunächst skeptisch gegenüber Barack Obama, als sie sich zu daten begannen, und spielte berühmt Basketball mit ihm, um seinen Charakter einzuschätzen.",
          nl: "Craig Robinson is Michelle Obama's oudere broer. Hij speelde basketbal aan Princeton University en werd later basketbalcoach, inclusief als hoofdcoach aan Oregon State University en Brown University. Craig was erg beschermend over Michelle en aanvankelijk sceptisch over Barack Obama toen ze begonnen te daten, en speelde beroemd basketbal met hem om zijn karakter te beoordelen."
        }
      },
      {
        question: {
          en: "What year did Malala Yousafzai become the youngest person ever to win the Nobel Peace Prize?",
          es: "¿En qué año se convirtió Malala Yousafzai en la persona más joven en ganar el Premio Nobel de la Paz?",
          de: "In welchem Jahr wurde Malala Yousafzai die jüngste Person, die jemals den Friedensnobelpreis gewonnen hat?",
          nl: "In welk jaar werd Malala Yousafzai de jongste persoon ooit die de Nobelprijs voor de Vrede won?"
        },
        options: [
          { en: "2012", es: "2012", de: "2012", nl: "2012" },
          { en: "2013", es: "2013", de: "2013", nl: "2013" },
          { en: "2014", es: "2014", de: "2014", nl: "2014" },
          { en: "2015", es: "2015", de: "2015", nl: "2015" }
        ],
        correct: 2,
        explanation: {
          en: "Malala Yousafzai was awarded the Nobel Peace Prize in 2014 at age 17, sharing it with Indian child rights activist Kailash Satyarthi. She remains the youngest Nobel laureate in any category. The prize recognized her struggle against the suppression of children and young people and for the right of all children to education.",
          es: "Malala Yousafzai recibió el Premio Nobel de la Paz en 2014 a los 17 años, compartiéndolo con el activista indio por los derechos de los niños Kailash Satyarthi. Sigue siendo la laureada Nobel más joven en cualquier categoría. El premio reconoció su lucha contra la supresión de niños y jóvenes y por el derecho de todos los niños a la educación.",
          de: "Malala Yousafzai wurde 2014 im Alter von 17 Jahren mit dem Friedensnobelpreis ausgezeichnet, den sie mit dem indischen Kinderrechtsaktivisten Kailash Satyarthi teilte. Sie bleibt die jüngste Nobelpreisträgerin in jeder Kategorie. Der Preis würdigte ihren Kampf gegen die Unterdrückung von Kindern und Jugendlichen und für das Recht aller Kinder auf Bildung.",
          nl: "Malala Yousafzai ontving de Nobelprijs voor de Vrede in 2014 op 17-jarige leeftijd, die ze deelde met de Indiase kinderrechtenactivist Kailash Satyarthi. Ze blijft de jongste Nobelprijswinnaar in welke categorie dan ook. De prijs erkende haar strijd tegen de onderdrukking van kinderen en jongeren en voor het recht van alle kinderen op onderwijs."
        }
      },
      {
        question: {
          en: "In 'Angela's Ashes', what was the name of Frank McCourt's youngest brother who died in infancy?",
          es: "En 'Las cenizas de Ángela', ¿cómo se llamaba el hermano menor de Frank McCourt que murió en la infancia?",
          de: "Wie hieß Frank McCourts jüngster Bruder in 'Die Asche meiner Mutter', der im Säuglingsalter starb?",
          nl: "Hoe heette Frank McCourts jongste broer in 'De as van mijn moeder' die in de kindertijd stierf?"
        },
        options: [
          { en: "Eugene", es: "Eugene", de: "Eugene", nl: "Eugene" },
          { en: "Michael", es: "Michael", de: "Michael", nl: "Michael" },
          { en: "Margaret", es: "Margaret", de: "Margaret", nl: "Margaret" },
          { en: "Alphonsus", es: "Alphonsus", de: "Alphonsus", nl: "Alphonsus" }
        ],
        correct: 2,
        explanation: {
          en: "Margaret (also called 'the baby' in the memoir) was Frank's baby sister who died at seven weeks old in 1935, shortly after the family arrived in Ireland from America. Her death devastated the family, particularly Angela. The twins Oliver and Eugene died later. Alphonsus (Alphie) was the youngest brother who survived. Margaret's death is one of the first major tragedies in the memoir.",
          es: "Margaret (también llamada 'el bebé' en las memorias) era la hermana bebé de Frank que murió a las siete semanas en 1935, poco después de que la familia llegara a Irlanda desde América. Su muerte devastó a la familia, particularmente a Ángela. Los gemelos Oliver y Eugene murieron después. Alphonsus (Alphie) era el hermano menor que sobrevivió. La muerte de Margaret es una de las primeras grandes tragedias en las memorias.",
          de: "Margaret (in den Memoiren auch 'das Baby' genannt) war Franks kleine Schwester, die 1935 im Alter von sieben Wochen starb, kurz nachdem die Familie aus Amerika nach Irland gekommen war. Ihr Tod verwüstete die Familie, besonders Angela. Die Zwillinge Oliver und Eugene starben später. Alphonsus (Alphie) war der jüngste Bruder, der überlebte. Margarets Tod ist eine der ersten großen Tragödien in den Memoiren.",
          nl: "Margaret (ook 'de baby' genoemd in de memoires) was Franks kleine zusje die op zevenweekse leeftijd stierf in 1935, kort nadat het gezin uit Amerika in Ierland aankwam. Haar dood was verwoestend voor het gezin, vooral voor Angela. De tweeling Oliver en Eugene stierven later. Alphonsus (Alphie) was de jongste broer die overleefde. Margarets dood is een van de eerste grote tragedies in de memoires."
        }
      },
      {
        question: {
          en: "What prestigious scholarship did Tara Westover receive to study at Cambridge University?",
          es: "¿Qué prestigiosa beca recibió Tara Westover para estudiar en la Universidad de Cambridge?",
          de: "Welches prestigeträchtige Stipendium erhielt Tara Westover für ihr Studium an der Universität Cambridge?",
          nl: "Welke prestigieuze beurs ontving Tara Westover om te studeren aan Cambridge University?"
        },
        options: [
          { en: "Rhodes Scholarship", es: "Beca Rhodes", de: "Rhodes-Stipendium", nl: "Rhodes-beurs" },
          { en: "Fulbright Scholarship", es: "Beca Fulbright", de: "Fulbright-Stipendium", nl: "Fulbright-beurs" },
          { en: "Gates Cambridge Scholarship", es: "Beca Gates Cambridge", de: "Gates-Cambridge-Stipendium", nl: "Gates Cambridge-beurs" },
          { en: "Marshall Scholarship", es: "Beca Marshall", de: "Marshall-Stipendium", nl: "Marshall-beurs" }
        ],
        correct: 2,
        explanation: {
          en: "Tara Westover received the Gates Cambridge Scholarship, funded by the Bill & Melinda Gates Foundation. This highly competitive scholarship covers full costs for graduate study at Cambridge. She completed both an MPhil and PhD in History at Cambridge as a Gates Scholar, a remarkable achievement for someone with no formal education until age 17.",
          es: "Tara Westover recibió la Beca Gates Cambridge, financiada por la Fundación Bill y Melinda Gates. Esta beca altamente competitiva cubre todos los costos para estudios de posgrado en Cambridge. Completó tanto un MPhil como un PhD en Historia en Cambridge como Becaria Gates, un logro notable para alguien sin educación formal hasta los 17 años.",
          de: "Tara Westover erhielt das Gates-Cambridge-Stipendium, finanziert von der Bill & Melinda Gates Foundation. Dieses hochwettbewerbsfähige Stipendium deckt die vollen Kosten für ein Graduiertenstudium in Cambridge. Sie absolvierte sowohl einen MPhil als auch einen PhD in Geschichte in Cambridge als Gates-Stipendiatin, eine bemerkenswerte Leistung für jemanden ohne formale Bildung bis zum Alter von 17 Jahren.",
          nl: "Tara Westover ontving de Gates Cambridge-beurs, gefinancierd door de Bill & Melinda Gates Foundation. Deze zeer competitieve beurs dekt alle kosten voor graduate studie in Cambridge. Ze voltooide zowel een MPhil als PhD in Geschiedenis aan Cambridge als Gates Scholar, een opmerkelijke prestatie voor iemand zonder formeel onderwijs tot 17 jaar."
        }
      },
      {
        question: {
          en: "In 'A Brief History of Time', what communication device did Stephen Hawking use after losing his ability to speak?",
          es: "En 'Breve historia del tiempo', ¿qué dispositivo de comunicación usó Stephen Hawking después de perder su capacidad de hablar?",
          de: "Welches Kommunikationsgerät verwendete Stephen Hawking in 'Eine kurze Geschichte der Zeit', nachdem er seine Sprechfähigkeit verloren hatte?",
          nl: "Welk communicatieapparaat gebruikte Stephen Hawking in 'Het heelal' nadat hij zijn vermogen om te spreken verloor?"
        },
        options: [
          { en: "A speech-generating device with a voice synthesizer", es: "Un dispositivo generador de voz con sintetizador de voz", de: "Ein sprachgenerierendes Gerät mit Sprachsynthesizer", nl: "Een spraakgenererend apparaat met een spraaksynthesizer" },
          { en: "Sign language only", es: "Solo lenguaje de señas", de: "Nur Gebärdensprache", nl: "Alleen gebarentaal" },
          { en: "Written notes exclusively", es: "Exclusivamente notas escritas", de: "Ausschließlich schriftliche Notizen", nl: "Uitsluitend geschreven notities" },
          { en: "Morse code tapping", es: "Código Morse por golpecitos", de: "Morsecode-Klopfen", nl: "Morse code tikken" }
        ],
        correct: 0,
        explanation: {
          en: "After a tracheotomy in 1985 left him unable to speak, Hawking used a speech-generating device. Initially he selected words using a hand clicker, later using cheek muscle movements detected by an infrared sensor. The device's distinctive computerized American accent became iconic. Despite suggestions to update to a more natural voice, he kept the original synthesizer as it had become his 'voice.'",
          es: "Después de una traqueotomía en 1985 que lo dejó sin poder hablar, Hawking usó un dispositivo generador de voz. Inicialmente seleccionaba palabras usando un clic de mano, luego usando movimientos musculares de la mejilla detectados por un sensor infrarrojo. El distintivo acento americano computarizado del dispositivo se volvió icónico. A pesar de las sugerencias de actualizar a una voz más natural, mantuvo el sintetizador original ya que se había convertido en su 'voz'.",
          de: "Nach einer Tracheotomie im Jahr 1985, die ihn unfähig machte zu sprechen, verwendete Hawking ein sprachgenerierendes Gerät. Anfangs wählte er Wörter mit einem Handklicker aus, später mit Wangenmuskelbewegungen, die von einem Infrarotsensor erkannt wurden. Der charakteristische computerisierte amerikanische Akzent des Geräts wurde ikonisch. Trotz Vorschlägen, auf eine natürlichere Stimme zu aktualisieren, behielt er den ursprünglichen Synthesizer, da er zu seiner 'Stimme' geworden war.",
          nl: "Na een tracheotomie in 1985 die hem niet meer kon laten spreken, gebruikte Hawking een spraakgenererend apparaat. Aanvankelijk selecteerde hij woorden met een handklikker, later met wangspierbewegingen gedetecteerd door een infraroodsensor. Het kenmerkende gecomputeriseerde Amerikaanse accent van het apparaat werd iconisch. Ondanks suggesties om te updaten naar een natuurlijker stem, behield hij de originele synthesizer omdat het zijn 'stem' was geworden."
        }
      },
      {
        question: {
          en: "In Gandhi's autobiography, what term did he coin for his philosophy of nonviolent resistance?",
          es: "En la autobiografía de Gandhi, ¿qué término acuñó para su filosofía de resistencia no violenta?",
          de: "Welchen Begriff prägte Gandhi in seiner Autobiografie für seine Philosophie des gewaltlosen Widerstands?",
          nl: "Welke term bedacht Gandhi in zijn autobiografie voor zijn filosofie van geweldloos verzet?"
        },
        options: [
          { en: "Ahimsa", es: "Ahimsa", de: "Ahimsa", nl: "Ahimsa" },
          { en: "Satyagraha", es: "Satyagraha", de: "Satyagraha", nl: "Satyagraha" },
          { en: "Swaraj", es: "Swaraj", de: "Swaraj", nl: "Swaraj" },
          { en: "Dharma", es: "Dharma", de: "Dharma", nl: "Dharma" }
        ],
        correct: 1,
        explanation: {
          en: "Gandhi coined the term 'Satyagraha' (Sanskrit for 'truth-force' or 'soul-force') to describe his philosophy of nonviolent resistance. He developed this concept in South Africa and applied it to India's independence movement. It differs from passive resistance by emphasizing active confrontation of injustice through moral force rather than physical force. Ahimsa (nonviolence) is a related concept but Satyagraha is the broader philosophy.",
          es: "Gandhi acuñó el término 'Satyagraha' (sánscrito para 'fuerza de verdad' o 'fuerza del alma') para describir su filosofía de resistencia no violenta. Desarrolló este concepto en Sudáfrica y lo aplicó al movimiento de independencia de la India. Difiere de la resistencia pasiva al enfatizar la confrontación activa de la injusticia a través de la fuerza moral en lugar de la fuerza física. Ahimsa (no violencia) es un concepto relacionado pero Satyagraha es la filosofía más amplia.",
          de: "Gandhi prägte den Begriff 'Satyagraha' (Sanskrit für 'Wahrheitskraft' oder 'Seelenkraft'), um seine Philosophie des gewaltlosen Widerstands zu beschreiben. Er entwickelte dieses Konzept in Südafrika und wendete es auf Indiens Unabhängigkeitsbewegung an. Es unterscheidet sich vom passiven Widerstand durch die Betonung der aktiven Konfrontation von Ungerechtigkeit durch moralische Kraft statt physischer Kraft. Ahimsa (Gewaltlosigkeit) ist ein verwandtes Konzept, aber Satyagraha ist die umfassendere Philosophie.",
          nl: "Gandhi bedacht de term 'Satyagraha' (Sanskriet voor 'waarheid-kracht' of 'zielskracht') om zijn filosofie van geweldloos verzet te beschrijven. Hij ontwikkelde dit concept in Zuid-Afrika en paste het toe op India's onafhankelijkheidsbeweging. Het verschilt van passief verzet door de nadruk te leggen op actieve confrontatie van onrechtvaardigheid door morele kracht in plaats van fysieke kracht. Ahimsa (geweldloosheid) is een gerelateerd concept maar Satyagraha is de bredere filosofie."
        }
      },
      {
        question: {
          en: "What was the name of the college Samuel Pepys attended at Cambridge University?",
          es: "¿Cómo se llamaba el colegio al que asistió Samuel Pepys en la Universidad de Cambridge?",
          de: "Wie hieß das College, das Samuel Pepys an der Universität Cambridge besuchte?",
          nl: "Hoe heette het college waar Samuel Pepys aan de Universiteit van Cambridge studeerde?"
        },
        options: [
          { en: "Trinity College", es: "Trinity College", de: "Trinity College", nl: "Trinity College" },
          { en: "Magdalene College", es: "Magdalene College", de: "Magdalene College", nl: "Magdalene College" },
          { en: "King's College", es: "King's College", de: "King's College", nl: "King's College" },
          { en: "St. John's College", es: "St. John's College", de: "St. John's College", nl: "St. John's College" }
        ],
        correct: 1,
        explanation: {
          en: "Samuel Pepys attended Magdalene College, Cambridge, from 1650-1654. Ironically, his diary (along with his entire library of 3,000 books) was bequeathed to Magdalene College, where it remains today in the Pepys Library. The diary wasn't decoded and published until over 150 years after his death.",
          es: "Samuel Pepys asistió a Magdalene College, Cambridge, de 1650 a 1654. Irónicamente, su diario (junto con toda su biblioteca de 3,000 libros) fue legado a Magdalene College, donde permanece hoy en la Biblioteca Pepys. El diario no fue decodificado y publicado hasta más de 150 años después de su muerte.",
          de: "Samuel Pepys besuchte von 1650 bis 1654 das Magdalene College in Cambridge. Ironischerweise wurde sein Tagebuch (zusammen mit seiner gesamten Bibliothek von 3.000 Büchern) dem Magdalene College vermacht, wo es sich heute in der Pepys Library befindet. Das Tagebuch wurde erst über 150 Jahre nach seinem Tod entschlüsselt und veröffentlicht.",
          nl: "Samuel Pepys studeerde aan Magdalene College, Cambridge, van 1650-1654. Ironisch genoeg werd zijn dagboek (samen met zijn hele bibliotheek van 3.000 boeken) nagelaten aan Magdalene College, waar het vandaag nog steeds in de Pepys Library staat. Het dagboek werd pas gedecodeerd en gepubliceerd meer dan 150 jaar na zijn dood."
        }
      },
      {
        question: {
          en: "In 'The Diary of a Young Girl', what was Anne Frank's birth name before 'Frank'?",
          es: "En 'El diario de Ana Frank', ¿cuál era el nombre de nacimiento de Ana Frank antes de 'Frank'?",
          de: "Was war Anne Franks Geburtsname vor 'Frank' laut 'Das Tagebuch der Anne Frank'?",
          nl: "Wat was Anne Franks geboortenaam vóór 'Frank' volgens 'Het Achterhuis'?"
        },
        options: [
          { en: "Frank was always her family name", es: "Frank siempre fue su apellido", de: "Frank war immer ihr Familienname", nl: "Frank was altijd haar familienaam" },
          { en: "Holländer", es: "Holländer", de: "Holländer", nl: "Holländer" },
          { en: "Stern", es: "Stern", de: "Stern", nl: "Stern" },
          { en: "Gies", es: "Gies", de: "Gies", nl: "Gies" }
        ],
        correct: 0,
        explanation: {
          en: "Frank was always her family surname. Anne Frank was born Annelies Marie Frank on June 12, 1929, in Frankfurt, Germany. Her family moved to Amsterdam in 1933 after Hitler came to power. 'Frank' was her father Otto Frank's surname. This is a trick question - there was no name change.",
          es: "Frank siempre fue su apellido familiar. Ana Frank nació Annelies Marie Frank el 12 de junio de 1929 en Fráncfort, Alemania. Su familia se mudó a Ámsterdam en 1933 después de que Hitler llegó al poder. 'Frank' era el apellido de su padre Otto Frank. Esta es una pregunta trampa - no hubo cambio de nombre.",
          de: "Frank war immer ihr Familienname. Anne Frank wurde als Annelies Marie Frank am 12. Juni 1929 in Frankfurt, Deutschland, geboren. Ihre Familie zog 1933 nach Amsterdam, nachdem Hitler an die Macht gekommen war. 'Frank' war der Nachname ihres Vaters Otto Frank. Dies ist eine Fangfrage - es gab keine Namensänderung.",
          nl: "Frank was altijd haar familieachternaam. Anne Frank werd geboren als Annelies Marie Frank op 12 juni 1929 in Frankfurt, Duitsland. Haar familie verhuisde naar Amsterdam in 1933 nadat Hitler aan de macht kwam. 'Frank' was de achternaam van haar vader Otto Frank. Dit is een strikvraag - er was geen naamsverandering."
        }
      },
      {
        question: {
          en: "In 'Dreams from My Father', at which prestigious law review did Barack Obama become the first African American president while at Harvard?",
          es: "En 'Los sueños de mi padre', ¿en qué prestigiosa revista jurídica se convirtió Barack Obama en el primer presidente afroamericano mientras estaba en Harvard?",
          de: "Bei welcher renommierten Rechtszeitschrift wurde Barack Obama in 'Träume meines Vaters' der erste afroamerikanische Präsident während seiner Zeit in Harvard?",
          nl: "Bij welk prestigieus juridisch tijdschrift werd Barack Obama de eerste Afro-Amerikaanse president tijdens zijn tijd in Harvard volgens 'Dromen van mijn vader'?"
        },
        options: [
          { en: "Yale Law Journal", es: "Yale Law Journal", de: "Yale Law Journal", nl: "Yale Law Journal" },
          { en: "Harvard Law Review", es: "Harvard Law Review", de: "Harvard Law Review", nl: "Harvard Law Review" },
          { en: "Columbia Law Review", es: "Columbia Law Review", de: "Columbia Law Review", nl: "Columbia Law Review" },
          { en: "Stanford Law Review", es: "Stanford Law Review", de: "Stanford Law Review", nl: "Stanford Law Review" }
        ],
        correct: 1,
        explanation: {
          en: "Barack Obama became the first African American president of the Harvard Law Review in 1990, during his second year at Harvard Law School. This prestigious position brought him national attention and was featured in major newspapers. The editorship of the Harvard Law Review is one of the most coveted positions in legal academia.",
          es: "Barack Obama se convirtió en el primer presidente afroamericano del Harvard Law Review en 1990, durante su segundo año en la Facultad de Derecho de Harvard. Esta posición prestigiosa le trajo atención nacional y fue presentada en los principales periódicos. La dirección del Harvard Law Review es una de las posiciones más codiciadas en la academia jurídica.",
          de: "Barack Obama wurde 1990 während seines zweiten Jahres an der Harvard Law School der erste afroamerikanische Präsident der Harvard Law Review. Diese prestigeträchtige Position brachte ihm nationale Aufmerksamkeit und wurde in großen Zeitungen vorgestellt. Die Herausgeberschaft der Harvard Law Review ist eine der begehrtesten Positionen in der juristischen Akademie.",
          nl: "Barack Obama werd in 1990 de eerste Afro-Amerikaanse president van de Harvard Law Review tijdens zijn tweede jaar aan Harvard Law School. Deze prestigieuze positie bracht hem nationale aandacht en werd vermeld in grote kranten. Het redacteurschap van de Harvard Law Review is een van de meest begeerde posities in de juridische academische wereld."
        }
      },
      {
        question: {
          en: "What was the critical detail that made Anne Frank's diary particularly valuable - something she did after hearing a 1944 radio broadcast?",
          es: "¿Cuál fue el detalle crítico que hizo que el diario de Ana Frank fuera particularmente valioso - algo que hizo después de escuchar una transmisión de radio de 1944?",
          de: "Was war das entscheidende Detail, das Anne Franks Tagebuch besonders wertvoll machte - etwas, das sie tat, nachdem sie eine Radiosendung von 1944 gehört hatte?",
          nl: "Wat was het kritieke detail dat Anne Franks dagboek bijzonder waardevol maakte - iets dat ze deed na het horen van een radio-uitzending van 1944?"
        },
        options: [
          { en: "She started writing in multiple languages", es: "Comenzó a escribir en múltiples idiomas", de: "Sie begann in mehreren Sprachen zu schreiben", nl: "Ze begon in meerdere talen te schrijven" },
          { en: "She revised and edited her diary for potential publication", es: "Revisó y editó su diario para una posible publicación", de: "Sie überarbeitete und redigierte ihr Tagebuch für eine mögliche Veröffentlichung", nl: "Ze herzag en redigeerde haar dagboek voor mogelijke publicatie" },
          { en: "She added illustrations to every entry", es: "Agregó ilustraciones a cada entrada", de: "Sie fügte jedem Eintrag Illustrationen hinzu", nl: "Ze voegde illustraties toe aan elke notitie" },
          { en: "She translated it into English herself", es: "Lo tradujo al inglés ella misma", de: "Sie übersetzte es selbst ins Englische", nl: "Ze vertaalde het zelf naar het Engels" }
        ],
        correct: 1,
        explanation: {
          en: "In March 1944, Anne heard Dutch government-in-exile minister Gerrit Bolkestein on Radio Oranje encouraging people to preserve wartime diaries for publication after the war. She then began revising her diary, editing entries, giving people pseudonyms (like 'van Daan' for the van Pels family), and rewriting sections with publication in mind. This resulted in two versions: her original diary (version A) and her edited version (version B).",
          es: "En marzo de 1944, Ana escuchó al ministro del gobierno holandés en el exilio Gerrit Bolkestein en Radio Oranje alentando a las personas a preservar diarios de guerra para su publicación después de la guerra. Luego comenzó a revisar su diario, editando entradas, dando a las personas seudónimos (como 'van Daan' para la familia van Pels) y reescribiendo secciones con la publicación en mente. Esto resultó en dos versiones: su diario original (versión A) y su versión editada (versión B).",
          de: "Im März 1944 hörte Anne den niederländischen Exilregierungsminister Gerrit Bolkestein auf Radio Oranje, der die Menschen ermutigte, Kriegstagebücher für die Veröffentlichung nach dem Krieg aufzubewahren. Sie begann dann, ihr Tagebuch zu überarbeiten, Einträge zu redigieren, Menschen Pseudonyme zu geben (wie 'van Daan' für die Familie van Pels) und Abschnitte mit Blick auf eine Veröffentlichung umzuschreiben. Dies führte zu zwei Versionen: ihrem ursprünglichen Tagebuch (Version A) und ihrer bearbeiteten Version (Version B).",
          nl: "In maart 1944 hoorde Anne de Nederlandse minister van de regering in ballingschap Gerrit Bolkestein op Radio Oranje die mensen aanmoedigde om oorlogsdagboeken te bewaren voor publicatie na de oorlog. Ze begon toen haar dagboek te herzien, notities te redigeren, mensen pseudoniemen te geven (zoals 'van Daan' voor de familie van Pels) en secties te herschrijven met publicatie in gedachten. Dit resulteerde in twee versies: haar originele dagboek (versie A) en haar bewerkte versie (versie B)."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
