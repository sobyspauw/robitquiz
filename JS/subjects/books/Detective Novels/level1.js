// Quiz Template - Level 1: Boeken - Detectiveromans
(function() {
  const level1 = {
    name: {
      en: "Detective Novels - Beginner",
      es: "Novelas de Detectives - Principiante",
      de: "Kriminalromane - Anfänger",
      nl: "Detectiveromans - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who created the character Sherlock Holmes?",
          es: "¿Quién creó el personaje de Sherlock Holmes?",
          de: "Wer erschuf die Figur Sherlock Holmes?",
          nl: "Wie creëerde het personage Sherlock Holmes?"
        },
        options: [
          { en: "Arthur Conan Doyle", es: "Arthur Conan Doyle", de: "Arthur Conan Doyle", nl: "Arthur Conan Doyle" },
          { en: "Edgar Allan Poe", es: "Edgar Allan Poe", de: "Edgar Allan Poe", nl: "Edgar Allan Poe" },
          { en: "Wilkie Collins", es: "Wilkie Collins", de: "Wilkie Collins", nl: "Wilkie Collins" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" }
        ],
        correct: 0,
        explanation: {
          en: "Arthur Conan Doyle created Sherlock Holmes, first appearing in 'A Study in Scarlet' in 1887. Holmes became one of the most famous fictional detectives in literature.",
          es: "Arthur Conan Doyle creó a Sherlock Holmes, que apareció por primera vez en 'Estudio en escarlata' en 1887. Holmes se convirtió en uno de los detectives ficticios más famosos de la literatura.",
          de: "Arthur Conan Doyle erschuf Sherlock Holmes, der 1887 erstmals in 'Eine Studie in Scharlachrot' erschien. Holmes wurde einer der berühmtesten fiktiven Detektive der Literatur.",
          nl: "Arthur Conan Doyle creëerde Sherlock Holmes, die voor het eerst verscheen in 'Een studie in rood' in 1887. Holmes werd een van de beroemdste fictieve detectives in de literatuur."
        }
      },
      {
        question: {
          en: "What is the address of Sherlock Holmes' residence?",
          es: "¿Cuál es la dirección de la residencia de Sherlock Holmes?",
          de: "Wie lautet die Adresse von Sherlock Holmes' Wohnsitz?",
          nl: "Wat is het adres van Sherlock Holmes' woonplaats?"
        },
        options: [
          { en: "221A Baker Street", es: "221A Baker Street", de: "221A Baker Street", nl: "221A Baker Street" },
          { en: "221B Baker Street", es: "221B Baker Street", de: "221B Baker Street", nl: "221B Baker Street" },
          { en: "221C Baker Street", es: "221C Baker Street", de: "221C Baker Street", nl: "221C Baker Street" },
          { en: "222B Baker Street", es: "222B Baker Street", de: "222B Baker Street", nl: "222B Baker Street" }
        ],
        correct: 1,
        explanation: {
          en: "Sherlock Holmes lived at 221B Baker Street in London with his roommate Dr. Watson. This fictional address has become one of the most famous addresses in literature.",
          es: "Sherlock Holmes vivía en 221B Baker Street en Londres con su compañero de cuarto Dr. Watson. Esta dirección ficticia se ha convertido en una de las direcciones más famosas de la literatura.",
          de: "Sherlock Holmes lebte in der 221B Baker Street in London mit seinem Mitbewohner Dr. Watson. Diese fiktive Adresse ist eine der berühmtesten Adressen der Literatur geworden.",
          nl: "Sherlock Holmes woonde op 221B Baker Street in Londen met zijn kamergenoot Dr. Watson. Dit fictieve adres is een van de beroemdste adressen in de literatuur geworden."
        }
      },
      {
        question: {
          en: "Who wrote 'The Murder of Roger Ackroyd'?",
          es: "¿Quién escribió 'El asesinato de Roger Ackroyd'?",
          de: "Wer schrieb 'Mord an Roger Ackroyd'?",
          nl: "Wie schreef 'De moord op Roger Ackroyd'?"
        },
        options: [
          { en: "Dorothy L. Sayers", es: "Dorothy L. Sayers", de: "Dorothy L. Sayers", nl: "Dorothy L. Sayers" },
          { en: "Agatha Christie", es: "Agatha Christie", de: "Agatha Christie", nl: "Agatha Christie" },
          { en: "Margery Allingham", es: "Margery Allingham", de: "Margery Allingham", nl: "Margery Allingham" },
          { en: "Ngaio Marsh", es: "Ngaio Marsh", de: "Ngaio Marsh", nl: "Ngaio Marsh" }
        ],
        correct: 1,
        explanation: {
          en: "Agatha Christie wrote 'The Murder of Roger Ackroyd' in 1926, featuring Hercule Poirot. It's famous for its controversial and innovative narrative technique.",
          es: "Agatha Christie escribió 'El asesinato de Roger Ackroyd' en 1926, protagonizada por Hercule Poirot. Es famosa por su técnica narrativa controvertida e innovadora.",
          de: "Agatha Christie schrieb 1926 'Mord an Roger Ackroyd' mit Hercule Poirot. Es ist berühmt für seine kontroverse und innovative Erzähltechnik.",
          nl: "Agatha Christie schreef 'De moord op Roger Ackroyd' in 1926, met Hercule Poirot. Het is beroemd om zijn controversiële en innovatieve verhaaltechniek."
        }
      },
      {
        question: {
          en: "What is Hercule Poirot's nationality?",
          es: "¿Cuál es la nacionalidad de Hercule Poirot?",
          de: "Welche Nationalität hat Hercule Poirot?",
          nl: "Wat is de nationaliteit van Hercule Poirot?"
        },
        options: [
          { en: "French", es: "Francés", de: "Französisch", nl: "Frans" },
          { en: "Belgian", es: "Belga", de: "Belgisch", nl: "Belgisch" },
          { en: "Swiss", es: "Suizo", de: "Schweizerisch", nl: "Zwitsers" },
          { en: "Dutch", es: "Holandés", de: "Niederländisch", nl: "Nederlands" }
        ],
        correct: 1,
        explanation: {
          en: "Hercule Poirot is Belgian, as created by Agatha Christie. He often corrects people who mistake him for French, taking pride in his Belgian heritage.",
          es: "Hercule Poirot es belga, según lo creó Agatha Christie. A menudo corrige a las personas que lo confunden con francés, enorgulleciéndose de su herencia belga.",
          de: "Hercule Poirot ist Belgier, wie ihn Agatha Christie schuf. Er korrigiert oft Leute, die ihn für einen Franzosen halten, und ist stolz auf sein belgisches Erbe.",
          nl: "Hercule Poirot is Belgisch, zoals gecreëerd door Agatha Christie. Hij corrigeert vaak mensen die hem voor een Fransman aanzien, trots op zijn Belgische afkomst."
        }
      },
      {
        question: {
          en: "Who wrote 'The Big Sleep'?",
          es: "¿Quién escribió 'El sueño eterno'?",
          de: "Wer schrieb 'Tiefer Schlaf'?",
          nl: "Wie schreef 'De grote slaap'?"
        },
        options: [
          { en: "Dashiell Hammett", es: "Dashiell Hammett", de: "Dashiell Hammett", nl: "Dashiell Hammett" },
          { en: "Raymond Chandler", es: "Raymond Chandler", de: "Raymond Chandler", nl: "Raymond Chandler" },
          { en: "James M. Cain", es: "James M. Cain", de: "James M. Cain", nl: "James M. Cain" },
          { en: "Mickey Spillane", es: "Mickey Spillane", de: "Mickey Spillane", nl: "Mickey Spillane" }
        ],
        correct: 1,
        explanation: {
          en: "Raymond Chandler wrote 'The Big Sleep' in 1939, featuring detective Philip Marlowe. It's considered a classic of hard-boiled detective fiction.",
          es: "Raymond Chandler escribió 'El sueño eterno' en 1939, protagonizada por el detective Philip Marlowe. Se considera un clásico de la ficción detectivesca dura.",
          de: "Raymond Chandler schrieb 1939 'Tiefer Schlaf' mit dem Detektiv Philip Marlowe. Es gilt als Klassiker der Hard-Boiled-Kriminalliteratur.",
          nl: "Raymond Chandler schreef 'De grote slaap' in 1939, met detective Philip Marlowe. Het wordt beschouwd als een klassieker van de hard-boiled detectivefictie."
        }
      },
      {
        question: {
          en: "What is the name of Miss Marple's village?",
          es: "¿Cómo se llama el pueblo de Miss Marple?",
          de: "Wie heißt Miss Marples Dorf?",
          nl: "Hoe heet het dorp van Miss Marple?"
        },
        options: [
          { en: "St. Mary Mead", es: "St. Mary Mead", de: "St. Mary Mead", nl: "St. Mary Mead" },
          { en: "Little Wickham", es: "Little Wickham", de: "Little Wickham", nl: "Little Wickham" },
          { en: "Much Benham", es: "Much Benham", de: "Much Benham", nl: "Much Benham" },
          { en: "King's Abbott", es: "King's Abbott", de: "King's Abbott", nl: "King's Abbott" }
        ],
        correct: 0,
        explanation: {
          en: "Miss Jane Marple lives in the village of St. Mary Mead. This fictional English village is the setting for many of Agatha Christie's mysteries featuring the elderly amateur detective.",
          es: "Miss Jane Marple vive en el pueblo de St. Mary Mead. Este pueblo inglés ficticio es el escenario de muchos de los misterios de Agatha Christie que presentan a la detective amateur de edad avanzada.",
          de: "Miss Jane Marple lebt im Dorf St. Mary Mead. Dieses fiktive englische Dorf ist der Schauplatz vieler Krimis von Agatha Christie mit der älteren Amateurdetektivin.",
          nl: "Miss Jane Marple woont in het dorp St. Mary Mead. Dit fictieve Engelse dorp is het decor voor veel van Agatha Christie's mysteries met de oudere amateur-detective."
        }
      },
      {
        question: {
          en: "Who created the detective Sam Spade?",
          es: "¿Quién creó al detective Sam Spade?",
          de: "Wer erschuf den Detektiv Sam Spade?",
          nl: "Wie creëerde detective Sam Spade?"
        },
        options: [
          { en: "Raymond Chandler", es: "Raymond Chandler", de: "Raymond Chandler", nl: "Raymond Chandler" },
          { en: "Dashiell Hammett", es: "Dashiell Hammett", de: "Dashiell Hammett", nl: "Dashiell Hammett" },
          { en: "Ross Macdonald", es: "Ross Macdonald", de: "Ross Macdonald", nl: "Ross Macdonald" },
          { en: "John D. MacDonald", es: "John D. MacDonald", de: "John D. MacDonald", nl: "John D. MacDonald" }
        ],
        correct: 1,
        explanation: {
          en: "Dashiell Hammett created Sam Spade, who first appeared in 'The Maltese Falcon' (1930). Spade became an iconic figure in hard-boiled detective fiction.",
          es: "Dashiell Hammett creó a Sam Spade, quien apareció por primera vez en 'El halcón maltés' (1930). Spade se convirtió en una figura icónica en la ficción detectivesca dura.",
          de: "Dashiell Hammett erschuf Sam Spade, der erstmals in 'Der Malteser Falke' (1930) auftrat. Spade wurde zu einer Ikone der Hard-Boiled-Kriminalliteratur.",
          nl: "Dashiell Hammett creëerde Sam Spade, die voor het eerst verscheen in 'De Maltese valk' (1930). Spade werd een iconische figuur in de hard-boiled detectivefictie."
        }
      },
      {
        question: {
          en: "What is the first Hercule Poirot novel?",
          es: "¿Cuál es la primera novela de Hercule Poirot?",
          de: "Was ist der erste Hercule Poirot Roman?",
          nl: "Wat is de eerste Hercule Poirot roman?"
        },
        options: [
          { en: "The Murder of Roger Ackroyd", es: "El asesinato de Roger Ackroyd", de: "Mord an Roger Ackroyd", nl: "De moord op Roger Ackroyd" },
          { en: "The Mysterious Affair at Styles", es: "El misterioso caso de Styles", de: "Das geheimnisvolle Verbrechen in Styles", nl: "De mysterieuze zaak in Styles" },
          { en: "Death on the Nile", es: "Muerte en el Nilo", de: "Tod auf dem Nil", nl: "Dood op de Nijl" },
          { en: "Murder on the Orient Express", es: "Asesinato en el Orient Express", de: "Mord im Orient Express", nl: "Moord in de Orient Express" }
        ],
        correct: 1,
        explanation: {
          en: "'The Mysterious Affair at Styles' (1920) was Agatha Christie's first published novel and introduced Hercule Poirot to the world of detective fiction.",
          es: "'El misterioso caso de Styles' (1920) fue la primera novela publicada de Agatha Christie e introdujo a Hercule Poirot al mundo de la ficción detectivesca.",
          de: "'Das geheimnisvolle Verbrechen in Styles' (1920) war Agatha Christies erster veröffentlichter Roman und führte Hercule Poirot in die Welt der Kriminalliteratur ein.",
          nl: "'De mysterieuze zaak in Styles' (1920) was Agatha Christie's eerste gepubliceerde roman en introduceerde Hercule Poirot in de wereld van detectivefictie."
        }
      },
      {
        question: {
          en: "Who wrote 'The Maltese Falcon'?",
          es: "¿Quién escribió 'El halcón maltés'?",
          de: "Wer schrieb 'Der Malteser Falke'?",
          nl: "Wie schreef 'De Maltese valk'?"
        },
        options: [
          { en: "Raymond Chandler", es: "Raymond Chandler", de: "Raymond Chandler", nl: "Raymond Chandler" },
          { en: "Dashiell Hammett", es: "Dashiell Hammett", de: "Dashiell Hammett", nl: "Dashiell Hammett" },
          { en: "Erle Stanley Gardner", es: "Erle Stanley Gardner", de: "Erle Stanley Gardner", nl: "Erle Stanley Gardner" },
          { en: "Cornell Woolrich", es: "Cornell Woolrich", de: "Cornell Woolrich", nl: "Cornell Woolrich" }
        ],
        correct: 1,
        explanation: {
          en: "Dashiell Hammett wrote 'The Maltese Falcon' in 1930. It's considered one of the greatest detective novels and helped establish the hard-boiled genre.",
          es: "Dashiell Hammett escribió 'El halcón maltés' en 1930. Se considera una de las mejores novelas detectivescas y ayudó a establecer el género negro.",
          de: "Dashiell Hammett schrieb 1930 'Der Malteser Falke'. Es gilt als einer der größten Kriminalromane und half bei der Etablierung des Hard-Boiled-Genres.",
          nl: "Dashiell Hammett schreef 'De Maltese valk' in 1930. Het wordt beschouwd als een van de beste detectiveromans en hielp het hard-boiled genre vestigen."
        }
      },
      {
        question: {
          en: "What is Lord Peter Wimsey's first name?",
          es: "¿Cuál es el nombre de pila de Lord Peter Wimsey?",
          de: "Wie lautet Lord Peter Wimseys Vorname?",
          nl: "Wat is Lord Peter Wimsey's voornaam?"
        },
        options: [
          { en: "Peter", es: "Peter", de: "Peter", nl: "Peter" },
          { en: "Death Bredon", es: "Death Bredon", de: "Death Bredon", nl: "Death Bredon" },
          { en: "Gerald", es: "Gerald", de: "Gerald", nl: "Gerald" },
          { en: "Denver", es: "Denver", de: "Denver", nl: "Denver" }
        ],
        correct: 0,
        explanation: {
          en: "Lord Peter Death Bredon Wimsey is his full name, but Peter is his first name. He was created by Dorothy L. Sayers as an aristocratic amateur detective.",
          es: "Lord Peter Death Bredon Wimsey es su nombre completo, pero Peter es su nombre de pila. Fue creado por Dorothy L. Sayers como un detective amateur aristocrático.",
          de: "Lord Peter Death Bredon Wimsey ist sein vollständiger Name, aber Peter ist sein Vorname. Er wurde von Dorothy L. Sayers als aristokratischer Amateurdetektiv geschaffen.",
          nl: "Lord Peter Death Bredon Wimsey is zijn volledige naam, maar Peter is zijn voornaam. Hij werd gecreëerd door Dorothy L. Sayers als een aristocratische amateur-detective."
        }
      },
      {
        question: {
          en: "Who wrote 'The Daughter of Time'?",
          es: "¿Quién escribió 'La hija del tiempo'?",
          de: "Wer schrieb 'Die Tochter der Zeit'?",
          nl: "Wie schreef 'De dochter van de tijd'?"
        },
        options: [
          { en: "Ngaio Marsh", es: "Ngaio Marsh", de: "Ngaio Marsh", nl: "Ngaio Marsh" },
          { en: "Josephine Tey", es: "Josephine Tey", de: "Josephine Tey", nl: "Josephine Tey" },
          { en: "Margery Allingham", es: "Margery Allingham", de: "Margery Allingham", nl: "Margery Allingham" },
          { en: "Dorothy L. Sayers", es: "Dorothy L. Sayers", de: "Dorothy L. Sayers", nl: "Dorothy L. Sayers" }
        ],
        correct: 1,
        explanation: {
          en: "Josephine Tey wrote 'The Daughter of Time' in 1951, featuring Inspector Alan Grant investigating the historical mystery of Richard III and the Princes in the Tower.",
          es: "Josephine Tey escribió 'La hija del tiempo' en 1951, protagonizada por el Inspector Alan Grant investigando el misterio histórico de Ricardo III y los Príncipes en la Torre.",
          de: "Josephine Tey schrieb 1951 'Die Tochter der Zeit' mit Inspector Alan Grant, der das historische Mysterium um Richard III. und die Prinzen im Tower untersucht.",
          nl: "Josephine Tey schreef 'De dochter van de tijd' in 1951, met inspecteur Alan Grant die het historische mysterie van Richard III en de Prinsen in de Tower onderzoekt."
        }
      },
      {
        question: {
          en: "What is the pen name of Baroness Orczy's detective character?",
          es: "¿Cuál es el seudónimo del personaje detective de la Baronesa Orczy?",
          de: "Wie lautet der Künstlername der Detektivfigur von Baroness Orczy?",
          nl: "Wat is de schuilnaam van Baroness Orczy's detective personage?"
        },
        options: [
          { en: "The Old Man in the Corner", es: "El Viejo en la Esquina", de: "Der Alte Mann in der Ecke", nl: "De Oude Man in de Hoek" },
          { en: "Lady Molly", es: "Lady Molly", de: "Lady Molly", nl: "Lady Molly" },
          { en: "The Scarlet Pimpernel", es: "La Pimpinela Escarlata", de: "Das Scharlachrote Siegel", nl: "De Rode Pimpernel" },
          { en: "Skin O' My Tooth", es: "Skin O' My Tooth", de: "Skin O' My Tooth", nl: "Skin O' My Tooth" }
        ],
        correct: 0,
        explanation: {
          en: "'The Old Man in the Corner' is Baroness Orczy's armchair detective who solves mysteries from his table at a London tea shop, never leaving his corner to investigate.",
          es: "'El Viejo en la Esquina' es el detective de sillón de la Baronesa Orczy que resuelve misterios desde su mesa en una tetería de Londres, sin salir nunca de su esquina para investigar.",
          de: "'Der Alte Mann in der Ecke' ist Baroness Orczys Lehnstuhldetektiv, der Mysterien von seinem Tisch in einem Londoner Teehaus löst, ohne je seine Ecke zum Ermitteln zu verlassen.",
          nl: "'De Oude Man in de Hoek' is Baroness Orczy's fauteuil-detective die mysteries oplost vanaf zijn tafel in een Londense theesalon, zonder ooit zijn hoek te verlaten om te onderzoeken."
        }
      },
      {
        question: {
          en: "Who created the detective Father Brown?",
          es: "¿Quién creó al detective Padre Brown?",
          de: "Wer erschuf den Detektiv Pater Brown?",
          nl: "Wie creëerde detective Pater Brown?"
        },
        options: [
          { en: "Ronald Knox", es: "Ronald Knox", de: "Ronald Knox", nl: "Ronald Knox" },
          { en: "G.K. Chesterton", es: "G.K. Chesterton", de: "G.K. Chesterton", nl: "G.K. Chesterton" },
          { en: "John Dickson Carr", es: "John Dickson Carr", de: "John Dickson Carr", nl: "John Dickson Carr" },
          { en: "Edgar Wallace", es: "Edgar Wallace", de: "Edgar Wallace", nl: "Edgar Wallace" }
        ],
        correct: 1,
        explanation: {
          en: "G.K. Chesterton created Father Brown, a Catholic priest who solves crimes through his understanding of human nature and theology. The character first appeared in 1910.",
          es: "G.K. Chesterton creó al Padre Brown, un sacerdote católico que resuelve crímenes a través de su comprensión de la naturaleza humana y la teología. El personaje apareció por primera vez en 1910.",
          de: "G.K. Chesterton erschuf Pater Brown, einen katholischen Priester, der Verbrechen durch sein Verständnis der menschlichen Natur und Theologie löst. Die Figur erschien erstmals 1910.",
          nl: "G.K. Chesterton creëerde Pater Brown, een katholieke priester die misdaden oplost door zijn begrip van de menselijke natuur en theologie. Het personage verscheen voor het eerst in 1910."
        }
      },
      {
        question: {
          en: "What is the setting for most of John le Carré's spy novels?",
          es: "¿Cuál es el escenario de la mayoría de las novelas de espías de John le Carré?",
          de: "Was ist der Schauplatz der meisten Spionageromane von John le Carré?",
          nl: "Wat is de setting voor de meeste spionageromans van John le Carré?"
        },
        options: [
          { en: "World War II", es: "Segunda Guerra Mundial", de: "Zweiter Weltkrieg", nl: "Tweede Wereldoorlog" },
          { en: "Cold War", es: "Guerra Fría", de: "Kalter Krieg", nl: "Koude Oorlog" },
          { en: "Victorian Era", es: "Era Victoriana", de: "Viktorianische Ära", nl: "Victoriaanse Tijd" },
          { en: "Modern Terrorism", es: "Terrorismo Moderno", de: "Moderner Terrorismus", nl: "Modern Terrorisme" }
        ],
        correct: 1,
        explanation: {
          en: "John le Carré's most famous spy novels, including 'The Spy Who Came in from the Cold' and the George Smiley series, are set during the Cold War era.",
          es: "Las novelas de espías más famosas de John le Carré, incluyendo 'El espía que surgió del frío' y la serie de George Smiley, están ambientadas durante la era de la Guerra Fría.",
          de: "John le Carrés berühmteste Spionageromane, einschließlich 'Der Spion, der aus der Kälte kam' und der George Smiley-Serie, spielen während der Zeit des Kalten Krieges.",
          nl: "John le Carré's beroemdste spionageromans, waaronder 'De spion die uit de kou kwam' en de George Smiley-serie, spelen zich af tijdens het tijdperk van de Koude Oorlog."
        }
      },
      {
        question: {
          en: "Who wrote 'The Name of the Rose'?",
          es: "¿Quién escribió 'El nombre de la rosa'?",
          de: "Wer schrieb 'Der Name der Rose'?",
          nl: "Wie schreef 'De naam van de roos'?"
        },
        options: [
          { en: "Umberto Eco", es: "Umberto Eco", de: "Umberto Eco", nl: "Umberto Eco" },
          { en: "Italo Calvino", es: "Italo Calvino", de: "Italo Calvino", nl: "Italo Calvino" },
          { en: "Roberto Bolaño", es: "Roberto Bolaño", de: "Roberto Bolaño", nl: "Roberto Bolaño" },
          { en: "José Saramago", es: "José Saramago", de: "José Saramago", nl: "José Saramago" }
        ],
        correct: 0,
        explanation: {
          en: "Umberto Eco wrote 'The Name of the Rose' (1980), a historical mystery novel set in a medieval monastery. It combines detective fiction with philosophical and theological themes.",
          es: "Umberto Eco escribió 'El nombre de la rosa' (1980), una novela de misterio histórica ambientada en un monasterio medieval. Combina ficción detectivesca con temas filosóficos y teológicos.",
          de: "Umberto Eco schrieb 'Der Name der Rose' (1980), einen historischen Kriminalroman, der in einem mittelalterlichen Kloster spielt. Er verbindet Kriminalliteratur mit philosophischen und theologischen Themen.",
          nl: "Umberto Eco schreef 'De naam van de roos' (1980), een historische mystery roman die zich afspeelt in een middeleeuws klooster. Het combineert detectivefictie met filosofische en theologische thema's."
        }
      },
      {
        question: {
          en: "What is the nationality of detective Kurt Wallander?",
          es: "¿Cuál es la nacionalidad del detective Kurt Wallander?",
          de: "Welche Nationalität hat der Detektiv Kurt Wallander?",
          nl: "Wat is de nationaliteit van detective Kurt Wallander?"
        },
        options: [
          { en: "Norwegian", es: "Noruego", de: "Norwegisch", nl: "Noors" },
          { en: "Danish", es: "Danés", de: "Dänisch", nl: "Deens" },
          { en: "Swedish", es: "Sueco", de: "Schwedisch", nl: "Zweeds" },
          { en: "Finnish", es: "Finlandés", de: "Finnisch", nl: "Fins" }
        ],
        correct: 2,
        explanation: {
          en: "Kurt Wallander is a Swedish police inspector created by author Henning Mankell. He works in the town of Ystad in southern Sweden.",
          es: "Kurt Wallander es un inspector de policía sueco creado por el autor Henning Mankell. Trabaja en la ciudad de Ystad en el sur de Suecia.",
          de: "Kurt Wallander ist ein schwedischer Polizeiinspektor, geschaffen vom Autor Henning Mankell. Er arbeitet in der Stadt Ystad in Südschweden.",
          nl: "Kurt Wallander is een Zweedse politie-inspecteur gecreëerd door auteur Henning Mankell. Hij werkt in de stad Ystad in Zuid-Zweden."
        }
      },
      {
        question: {
          en: "Who wrote 'The Talented Mr. Ripley'?",
          es: "¿Quién escribió 'El talentoso Sr. Ripley'?",
          de: "Wer schrieb 'Der talentierte Mr. Ripley'?",
          nl: "Wie schreef 'De getalenteerde heer Ripley'?"
        },
        options: [
          { en: "Ruth Rendell", es: "Ruth Rendell", de: "Ruth Rendell", nl: "Ruth Rendell" },
          { en: "P.D. James", es: "P.D. James", de: "P.D. James", nl: "P.D. James" },
          { en: "Patricia Highsmith", es: "Patricia Highsmith", de: "Patricia Highsmith", nl: "Patricia Highsmith" },
          { en: "Gillian Flynn", es: "Gillian Flynn", de: "Gillian Flynn", nl: "Gillian Flynn" }
        ],
        correct: 2,
        explanation: {
          en: "Patricia Highsmith wrote 'The Talented Mr. Ripley' (1955), the first in a series featuring the charming but sociopathic Tom Ripley.",
          es: "Patricia Highsmith escribió 'El talentoso Sr. Ripley' (1955), el primero de una serie que presenta al encantador pero sociópata Tom Ripley.",
          de: "Patricia Highsmith schrieb 'Der talentierte Mr. Ripley' (1955), den ersten einer Serie mit dem charmanten aber soziopathischen Tom Ripley.",
          nl: "Patricia Highsmith schreef 'De getalenteerde heer Ripley' (1955), de eerste in een serie met de charmante maar sociopathische Tom Ripley."
        }
      },
      {
        question: {
          en: "What is the name of Stieg Larsson's detective character?",
          es: "¿Cómo se llama el personaje detective de Stieg Larsson?",
          de: "Wie heißt Stieg Larssons Detektivfigur?",
          nl: "Wat is de naam van Stieg Larsson's detective personage?"
        },
        options: [
          { en: "Lisbeth Salander", es: "Lisbeth Salander", de: "Lisbeth Salander", nl: "Lisbeth Salander" },
          { en: "Mikael Blomkvist", es: "Mikael Blomkvist", de: "Mikael Blomkvist", nl: "Mikael Blomkvist" },
          { en: "Both Lisbeth and Mikael", es: "Tanto Lisbeth como Mikael", de: "Sowohl Lisbeth als auch Mikael", nl: "Zowel Lisbeth als Mikael" },
          { en: "Martin Vanger", es: "Martin Vanger", de: "Martin Vanger", nl: "Martin Vanger" }
        ],
        correct: 2,
        explanation: {
          en: "Stieg Larsson's Millennium trilogy features both journalist Mikael Blomkvist and hacker Lisbeth Salander as detective protagonists working together to solve mysteries.",
          es: "La trilogía Millennium de Stieg Larsson presenta tanto al periodista Mikael Blomkvist como a la hacker Lisbeth Salander como protagonistas detectives que trabajan juntos para resolver misterios.",
          de: "Stieg Larssons Millennium-Trilogie zeigt sowohl den Journalisten Mikael Blomkvist als auch die Hackerin Lisbeth Salander als Detektiv-Protagonisten, die zusammenarbeiten, um Mysterien zu lösen.",
          nl: "Stieg Larsson's Millennium-trilogie toont zowel journalist Mikael Blomkvist als hacker Lisbeth Salander als detective-protagonisten die samenwerken om mysteries op te lossen."
        }
      },
      {
        question: {
          en: "Who created the detective Inspector Morse?",
          es: "¿Quién creó al detective Inspector Morse?",
          de: "Wer erschuf den Detektiv Inspector Morse?",
          nl: "Wie creëerde detective inspecteur Morse?"
        },
        options: [
          { en: "Ian Rankin", es: "Ian Rankin", de: "Ian Rankin", nl: "Ian Rankin" },
          { en: "Colin Dexter", es: "Colin Dexter", de: "Colin Dexter", nl: "Colin Dexter" },
          { en: "Peter Robinson", es: "Peter Robinson", de: "Peter Robinson", nl: "Peter Robinson" },
          { en: "Reginald Hill", es: "Reginald Hill", de: "Reginald Hill", nl: "Reginald Hill" }
        ],
        correct: 1,
        explanation: {
          en: "Colin Dexter created Inspector Morse, who first appeared in 'Last Bus to Woodstock' (1975). The character is known for his love of crosswords, opera, and real ale.",
          es: "Colin Dexter creó al Inspector Morse, que apareció por primera vez en 'Último autobús a Woodstock' (1975). El personaje es conocido por su amor por los crucigramas, la ópera y la cerveza real.",
          de: "Colin Dexter erschuf Inspector Morse, der erstmals in 'Last Bus to Woodstock' (1975) auftrat. Die Figur ist bekannt für seine Liebe zu Kreuzworträtseln, Oper und echtem Bier.",
          nl: "Colin Dexter creëerde inspecteur Morse, die voor het eerst verscheen in 'Laatste bus naar Woodstock' (1975). Het personage staat bekend om zijn liefde voor kruiswoordpuzzels, opera en echt bier."
        }
      },
      {
        question: {
          en: "Who wrote 'In the Woods', the first book in the Dublin Murder Squad series?",
          es: "¿Quién escribió 'En el bosque', el primer libro de la serie Dublin Murder Squad?",
          de: "Wer schrieb 'Im Wald', das erste Buch der Dublin Murder Squad-Serie?",
          nl: "Wie schreef 'In the Woods', het eerste boek in de Dublin Murder Squad-serie?"
        },
        options: [
          { en: "Tana French", es: "Tana French", de: "Tana French", nl: "Tana French" },
          { en: "Louise Penny", es: "Louise Penny", de: "Louise Penny", nl: "Louise Penny" },
          { en: "Gillian Flynn", es: "Gillian Flynn", de: "Gillian Flynn", nl: "Gillian Flynn" },
          { en: "Kate Atkinson", es: "Kate Atkinson", de: "Kate Atkinson", nl: "Kate Atkinson" }
        ],
        correct: 0,
        explanation: {
          en: "Tana French wrote 'In the Woods' (2007), a psychological mystery that won several awards and launched the acclaimed Dublin Murder Squad series.",
          es: "Tana French escribió 'En el bosque' (2007), un misterio psicológico que ganó varios premios y lanzó la aclamada serie Dublin Murder Squad.",
          de: "Tana French schrieb 'Im Wald' (2007), ein psychologischer Krimi, der mehrere Preise gewann und die gefeierte Dublin Murder Squad-Serie startete.",
          nl: "Tana French schreef 'In the Woods' (2007), een psychologische thriller die verschillende prijzen won en de veelgeprezen Dublin Murder Squad-serie lanceerde."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();