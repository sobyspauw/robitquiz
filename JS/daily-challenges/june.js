// June Daily Challenges - 30 days × 5 questions each = 150 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {
  
  const juneChallenges = {
    name: {
      en: "June Daily Challenges",
      es: "Desafíos Diarios de Junio", 
      de: "Juni Tägliche Herausforderungen",
      nl: "Juni Dagelijkse Uitdagingen"
    },
    
    // Day 1 - June 1st: Historical Events
    day1: [
      {
        question: {
          en: "On June 1, 1980, which groundbreaking 24-hour news network was launched by Ted Turner?",
          es: "El 1 de junio de 1980, ¿qué innovadora cadena de noticias 24 horas fue lanzada por Ted Turner?",
          de: "Am 1. Juni 1980 wurde welches bahnbrechende 24-Stunden-Nachrichtennetzwerk von Ted Turner gestartet?",
          nl: "Op 1 juni 1980 werd welk baanbrekend 24-uurs nieuwsnetwerk gelanceerd door Ted Turner?"
        },
        options: [
          {
            en: "Fox News",
            es: "Fox News",
            de: "Fox News",
            nl: "Fox News"
          },
          {
            en: "CNN",
            es: "CNN",
            de: "CNN",
            nl: "CNN"
          },
          {
            en: "MSNBC",
            es: "MSNBC",
            de: "MSNBC",
            nl: "MSNBC"
          },
          {
            en: "BBC News",
            es: "BBC News",
            de: "BBC News",
            nl: "BBC News"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "CNN (Cable News Network) launched on June 1, 1980, becoming the first 24-hour news channel in television history. The network revolutionized news coverage by providing continuous news broadcasting from its Atlanta headquarters.",
          es: "CNN (Cable News Network) se lanzó el 1 de junio de 1980, convirtiéndose en el primer canal de noticias 24 horas en la historia de la televisión. La cadena revolucionó la cobertura noticiosa al proporcionar transmisión continua de noticias desde su sede en Atlanta.",
          de: "CNN (Cable News Network) startete am 1. Juni 1980 und wurde der erste 24-Stunden-Nachrichtensender in der Fernsehgeschichte. Das Netzwerk revolutionierte die Nachrichtenberichterstattung durch kontinuierliche Nachrichtensendungen von seinem Hauptsitz in Atlanta aus.",
          nl: "CNN (Cable News Network) werd gelanceerd op 1 juni 1980 en werd het eerste 24-uurs nieuwskanaal in de televisiegeschiedenis. Het netwerk revolutioneerde de nieuwsverslaggeving door continue nieuwsuitzendingen vanuit het hoofdkantoor in Atlanta te verzorgen."
        }
      },
      {
        question: {
          en: "Which iconic Hollywood actress and sex symbol was born on June 1, 1926?",
          es: "¿Qué icónica actriz de Hollywood y símbolo sexual nació el 1 de junio de 1926?",
          de: "Welche ikonische Hollywood-Schauspielerin und Sexsymbol wurde am 1. Juni 1926 geboren?",
          nl: "Welke iconische Hollywood-actrice en sekssymbool werd geboren op 1 juni 1926?"
        },
        options: [
          {
            en: "Grace Kelly",
            es: "Grace Kelly",
            de: "Grace Kelly",
            nl: "Grace Kelly"
          },
          {
            en: "Marilyn Monroe",
            es: "Marilyn Monroe",
            de: "Marilyn Monroe",
            nl: "Marilyn Monroe"
          },
          {
            en: "Elizabeth Taylor",
            es: "Elizabeth Taylor",
            de: "Elizabeth Taylor",
            nl: "Elizabeth Taylor"
          },
          {
            en: "Audrey Hepburn",
            es: "Audrey Hepburn",
            de: "Audrey Hepburn",
            nl: "Audrey Hepburn"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Marilyn Monroe was born Norma Jeane Mortenson on June 1, 1926, in Los Angeles, California. She became one of the most iconic figures in Hollywood history and a cultural symbol of beauty and femininity.",
          es: "Marilyn Monroe nació como Norma Jeane Mortenson el 1 de junio de 1926 en Los Ángeles, California. Se convirtió en una de las figuras más icónicas de la historia de Hollywood y un símbolo cultural de belleza y feminidad.",
          de: "Marilyn Monroe wurde als Norma Jeane Mortenson am 1. Juni 1926 in Los Angeles, Kalifornien, geboren. Sie wurde eine der ikonischsten Persönlichkeiten der Hollywood-Geschichte und ein kulturelles Symbol für Schönheit und Weiblichkeit.",
          nl: "Marilyn Monroe werd geboren als Norma Jeane Mortenson op 1 juni 1926 in Los Angeles, Californië. Ze werd een van de meest iconische figuren in de Hollywood-geschiedenis en een cultureel symbool van schoonheid en vrouwelijkheid."
        }
      },
      {
        question: {
          en: "On June 1, 1796, which state became the 16th state to join the United States?",
          es: "El 1 de junio de 1796, ¿qué estado se convirtió en el decimosexto estado en unirse a los Estados Unidos?",
          de: "Am 1. Juni 1796 wurde welcher Staat der 16. Bundesstaat der Vereinigten Staaten?",
          nl: "Op 1 juni 1796 werd welke staat de 16e staat om zich bij de Verenigde Staten aan te sluiten?"
        },
        options: [
          {
            en: "Kentucky",
            es: "Kentucky",
            de: "Kentucky",
            nl: "Kentucky"
          },
          {
            en: "Tennessee",
            es: "Tennessee",
            de: "Tennessee",
            nl: "Tennessee"
          },
          {
            en: "Ohio",
            es: "Ohio",
            de: "Ohio",
            nl: "Ohio"
          },
          {
            en: "Mississippi",
            es: "Mississippi",
            de: "Mississippi",
            nl: "Mississippi"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Tennessee was admitted to the Union on June 1, 1796, becoming the 16th state. It was the first state created from government territory, using the audacious 'Tennessee Plan' which involved creating a state government before receiving congressional approval.",
          es: "Tennessee fue admitido en la Unión el 1 de junio de 1796, convirtiéndose en el decimosexto estado. Fue el primer estado creado a partir de territorio gubernamental, utilizando el audaz 'Plan de Tennessee' que implicaba crear un gobierno estatal antes de recibir la aprobación del Congreso.",
          de: "Tennessee wurde am 1. Juni 1796 in die Union aufgenommen und wurde der 16. Bundesstaat. Es war der erste Staat, der aus Regierungsterritorium geschaffen wurde, und nutzte den kühnen 'Tennessee-Plan', der die Schaffung einer Staatsregierung vor der Genehmigung durch den Kongress beinhaltete.",
          nl: "Tennessee werd op 1 juni 1796 toegelaten tot de Unie en werd de 16e staat. Het was de eerste staat die werd gecreëerd uit regeringsgebied, met gebruik van het gedurfde 'Tennessee Plan' dat inhield dat een staatsregering werd opgericht voordat goedkeuring van het Congres werd verkregen."
        }
      },
      {
        question: {
          en: "Which state joined the United States exactly four years before Tennessee, on June 1, 1792?",
          es: "¿Qué estado se unió a los Estados Unidos exactamente cuatro años antes que Tennessee, el 1 de junio de 1792?",
          de: "Welcher Staat trat genau vier Jahre vor Tennessee, am 1. Juni 1792, den Vereinigten Staaten bei?",
          nl: "Welke staat trad precies vier jaar voor Tennessee, op 1 juni 1792, toe tot de Verenigde Staten?"
        },
        options: [
          {
            en: "Virginia",
            es: "Virginia",
            de: "Virginia",
            nl: "Virginia"
          },
          {
            en: "Kentucky",
            es: "Kentucky",
            de: "Kentucky",
            nl: "Kentucky"
          },
          {
            en: "Vermont",
            es: "Vermont",
            de: "Vermont",
            nl: "Vermont"
          },
          {
            en: "North Carolina",
            es: "Carolina del Norte",
            de: "North Carolina",
            nl: "North Carolina"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Kentucky was admitted to the United States on June 1, 1792, as the 15th state. It was the first state west of the Appalachian Mountains to join the Union, making this an interesting historical coincidence that both Kentucky and Tennessee share the same statehood date four years apart.",
          es: "Kentucky fue admitido en los Estados Unidos el 1 de junio de 1792 como el decimoquinto estado. Fue el primer estado al oeste de las Montañas Apalaches en unirse a la Unión, lo que hace que sea una interesante coincidencia histórica que tanto Kentucky como Tennessee compartan la misma fecha de adhesión con cuatro años de diferencia.",
          de: "Kentucky wurde am 1. Juni 1792 als 15. Bundesstaat in die Vereinigten Staaten aufgenommen. Es war der erste Staat westlich der Appalachen, der der Union beitrat, was es zu einem interessanten historischen Zufall macht, dass Kentucky und Tennessee dasselbe Beitrittsdatum mit vier Jahren Abstand teilen.",
          nl: "Kentucky werd op 1 juni 1792 toegelaten tot de Verenigde Staten als de 15e staat. Het was de eerste staat ten westen van de Appalachen die zich bij de Unie aansloot, wat het een interessant historisch toeval maakt dat zowel Kentucky als Tennessee dezelfde toetredingsdatum delen met vier jaar verschil."
        }
      },
      {
        question: {
          en: "In 1974, Dr. Henry Heimlich published his life-saving technique on June 1. What does this technique help prevent?",
          es: "En 1974, el Dr. Henry Heimlich publicó su técnica de salvamento el 1 de junio. ¿Qué ayuda a prevenir esta técnica?",
          de: "1974 veröffentlichte Dr. Henry Heimlich seine lebensrettende Technik am 1. Juni. Was hilft diese Technik zu verhindern?",
          nl: "In 1974 publiceerde Dr. Henry Heimlich zijn levensreddende techniek op 1 juni. Wat helpt deze techniek te voorkomen?"
        },
        options: [
          {
            en: "Heart attacks",
            es: "Ataques cardíacos",
            de: "Herzinfarkte",
            nl: "Hartaanvallen"
          },
          {
            en: "Choking deaths",
            es: "Muertes por asfixia",
            de: "Erstickungstod",
            nl: "Verstikkingsdoden"
          },
          {
            en: "Drowning",
            es: "Ahogamiento",
            de: "Ertrinken",
            nl: "Verdrinking"
          },
          {
            en: "Poisoning",
            es: "Envenenamiento",
            de: "Vergiftung",
            nl: "Vergiftiging"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 1, 1974, Dr. Henry Heimlich published his technique for saving choking victims in the Emergency Medicine journal. The Heimlich maneuver uses abdominal thrusts to dislodge objects blocking the airway and has saved countless lives since its introduction.",
          es: "El 1 de junio de 1974, el Dr. Henry Heimlich publicó su técnica para salvar víctimas de asfixia en la revista Emergency Medicine. La maniobra de Heimlich utiliza compresiones abdominales para desalojar objetos que bloquean las vías respiratorias y ha salvado innumerables vidas desde su introducción.",
          de: "Am 1. Juni 1974 veröffentlichte Dr. Henry Heimlich seine Technik zur Rettung von Erstickungsopfern in der Zeitschrift Emergency Medicine. Das Heimlich-Manöver verwendet Bauchstöße, um Gegenstände zu lösen, die die Atemwege blockieren, und hat seit seiner Einführung unzählige Leben gerettet.",
          nl: "Op 1 juni 1974 publiceerde Dr. Henry Heimlich zijn techniek voor het redden van verstikkingsslachtoffers in het tijdschrift Emergency Medicine. De Heimlich-manoeuvre gebruikt buikstoten om voorwerpen te verwijderen die de luchtwegen blokkeren en heeft sinds de introductie ontelbare levens gered."
        }
      }
    ],

    // Day 2 - June 2nd: Historical Events
    day2: [
      {
        question: {
          en: "On June 2, 1953, which monarch was crowned at Westminster Abbey in the first televised coronation?",
          es: "El 2 de junio de 1953, ¿qué monarca fue coronado en la Abadía de Westminster en la primera coronación televisada?",
          de: "Am 2. Juni 1953 wurde welcher Monarch in der Westminster Abbey in der ersten im Fernsehen übertragenen Krönung gekrönt?",
          nl: "Op 2 juni 1953 werd welke monarch gekroond in Westminster Abbey in de eerste televisie-uitzending van een kroning?"
        },
        options: [
          {
            en: "Queen Victoria",
            es: "Reina Victoria",
            de: "Königin Victoria",
            nl: "Koningin Victoria"
          },
          {
            en: "King George VI",
            es: "Rey Jorge VI",
            de: "König Georg VI.",
            nl: "Koning George VI"
          },
          {
            en: "Queen Elizabeth II",
            es: "Reina Isabel II",
            de: "Königin Elizabeth II.",
            nl: "Koningin Elizabeth II"
          },
          {
            en: "King Edward VIII",
            es: "Rey Eduardo VIII",
            de: "König Edward VIII.",
            nl: "Koning Edward VIII"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Queen Elizabeth II was crowned at Westminster Abbey on June 2, 1953, at age 27. This historic ceremony was watched by 27 million people in the UK and hundreds of millions worldwide, making it the first coronation ever broadcast on television.",
          es: "La Reina Isabel II fue coronada en la Abadía de Westminster el 2 de junio de 1953, a los 27 años. Esta ceremonia histórica fue vista por 27 millones de personas en el Reino Unido y cientos de millones en todo el mundo, convirtiéndola en la primera coronación transmitida por televisión.",
          de: "Königin Elizabeth II. wurde am 2. Juni 1953 im Alter von 27 Jahren in der Westminster Abbey gekrönt. Diese historische Zeremonie wurde von 27 Millionen Menschen in Großbritannien und Hunderten von Millionen weltweit verfolgt und war die erste im Fernsehen übertragene Krönung.",
          nl: "Koningin Elizabeth II werd gekroond in Westminster Abbey op 2 juni 1953, op 27-jarige leeftijd. Deze historische ceremonie werd bekeken door 27 miljoen mensen in het VK en honderden miljoenen wereldwijd, waarmee het de eerste kroning was die op televisie werd uitgezonden."
        }
      },
      {
        question: {
          en: "How many guests attended Queen Elizabeth II's coronation ceremony at Westminster Abbey?",
          es: "¿Cuántos invitados asistieron a la ceremonia de coronación de la Reina Isabel II en la Abadía de Westminster?",
          de: "Wie viele Gäste nahmen an der Krönungszeremonie von Königin Elizabeth II. in der Westminster Abbey teil?",
          nl: "Hoeveel gasten woonden de kroningsceremonie van Koningin Elizabeth II bij in Westminster Abbey?"
        },
        options: [
          {
            en: "2,500",
            es: "2.500",
            de: "2.500",
            nl: "2.500"
          },
          {
            en: "5,000",
            es: "5.000",
            de: "5.000",
            nl: "5.000"
          },
          {
            en: "8,251",
            es: "8.251",
            de: "8.251",
            nl: "8.251"
          },
          {
            en: "10,000",
            es: "10.000",
            de: "10.000",
            nl: "10.000"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "8,251 guests attended the coronation ceremony in Westminster Abbey on June 2, 1953. The lavish ceremony featured traditions dating back a millennium, with the young queen taking oaths, being anointed with holy oil, and receiving the crown and regalia.",
          es: "8.251 invitados asistieron a la ceremonia de coronación en la Abadía de Westminster el 2 de junio de 1953. La lujosa ceremonia presentó tradiciones que datan de hace mil años, con la joven reina haciendo juramentos, siendo ungida con óleo sagrado y recibiendo la corona y las insignias reales.",
          de: "8.251 Gäste nahmen an der Krönungszeremonie in der Westminster Abbey am 2. Juni 1953 teil. Die prunkvolle Zeremonie beinhaltete Traditionen, die ein Jahrtausend zurückreichen, wobei die junge Königin Eide ablegte, mit heiligem Öl gesalbt wurde und die Krone und Insignien erhielt.",
          nl: "8.251 gasten woonden de kroningsceremonie bij in Westminster Abbey op 2 juni 1953. De weelderige ceremonie vertoonde tradities die een millennium teruggaan, waarbij de jonge koningin eden aflegde, gezalfd werd met heilige olie en de kroon en regalia ontving."
        }
      },
      {
        question: {
          en: "On June 2, 1946, Italy held a referendum that established it as what type of government?",
          es: "El 2 de junio de 1946, Italia celebró un referéndum que la estableció como qué tipo de gobierno?",
          de: "Am 2. Juni 1946 hielt Italien ein Referendum ab, das es als welche Art von Regierung etablierte?",
          nl: "Op 2 juni 1946 hield Italië een referendum dat het vestigde als welk type regering?"
        },
        options: [
          {
            en: "A monarchy",
            es: "Una monarquía",
            de: "Eine Monarchie",
            nl: "Een monarchie"
          },
          {
            en: "A republic",
            es: "Una república",
            de: "Eine Republik",
            nl: "Een republiek"
          },
          {
            en: "A dictatorship",
            es: "Una dictadura",
            de: "Eine Diktatur",
            nl: "Een dictatuur"
          },
          {
            en: "A federation",
            es: "Una federación",
            de: "Eine Föderation",
            nl: "Een federatie"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 2, 1946, Italy held an institutional referendum where 54.3% voted in favor of becoming a republic versus 45.7% for the monarchy. This was the first vote by universal suffrage in Italy and is now celebrated annually as Festa della Repubblica.",
          es: "El 2 de junio de 1946, Italia celebró un referéndum institucional donde el 54,3% votó a favor de convertirse en república frente al 45,7% por la monarquía. Esta fue la primera votación por sufragio universal en Italia y ahora se celebra anualmente como Festa della Repubblica.",
          de: "Am 2. Juni 1946 hielt Italien ein institutionelles Referendum ab, bei dem 54,3% für die Republik und 45,7% für die Monarchie stimmten. Dies war die erste Abstimmung durch allgemeines Wahlrecht in Italien und wird nun jährlich als Festa della Repubblica gefeiert.",
          nl: "Op 2 juni 1946 hield Italië een institutioneel referendum waarbij 54,3% stemde voor een republiek tegenover 45,7% voor de monarchie. Dit was de eerste stemming door algemeen kiesrecht in Italië en wordt nu jaarlijks gevierd als Festa della Repubblica."
        }
      },
      {
        question: {
          en: "What percentage of Italy's population voted in favor of the republic in the 1946 referendum?",
          es: "¿Qué porcentaje de la población de Italia votó a favor de la república en el referéndum de 1946?",
          de: "Welcher Prozentsatz der italienischen Bevölkerung stimmte beim Referendum von 1946 für die Republik?",
          nl: "Welk percentage van de Italiaanse bevolking stemde voor de republiek in het referendum van 1946?"
        },
        options: [
          {
            en: "45.7%",
            es: "45,7%",
            de: "45,7%",
            nl: "45,7%"
          },
          {
            en: "50.0%",
            es: "50,0%",
            de: "50,0%",
            nl: "50,0%"
          },
          {
            en: "54.3%",
            es: "54,3%",
            de: "54,3%",
            nl: "54,3%"
          },
          {
            en: "60.5%",
            es: "60,5%",
            de: "60,5%",
            nl: "60,5%"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "54.3% of Italian citizens voted in favor of the republic, with 12,717,923 votes, while 45.7% voted for the monarchy with 10,719,284 votes. This referendum marked the birth of the modern Italian Republic and ended the reign of the House of Savoy.",
          es: "El 54,3% de los ciudadanos italianos votó a favor de la república, con 12.717.923 votos, mientras que el 45,7% votó por la monarquía con 10.719.284 votos. Este referéndum marcó el nacimiento de la República Italiana moderna y terminó el reinado de la Casa de Saboya.",
          de: "54,3% der italienischen Bürger stimmten für die Republik mit 12.717.923 Stimmen, während 45,7% für die Monarchie mit 10.719.284 Stimmen stimmten. Dieses Referendum markierte die Geburt der modernen Italienischen Republik und beendete die Herrschaft des Hauses Savoyen.",
          nl: "54,3% van de Italiaanse burgers stemde voor de republiek met 12.717.923 stemmen, terwijl 45,7% stemde voor de monarchie met 10.719.284 stemmen. Dit referendum markeerde de geboorte van de moderne Italiaanse Republiek en beëindigde de heerschappij van het Huis van Savoye."
        }
      },
      {
        question: {
          en: "After the coronation, Queen Elizabeth II and Prince Philip traveled in what type of ceremonial vehicle?",
          es: "Después de la coronación, la Reina Isabel II y el Príncipe Felipe viajaron en qué tipo de vehículo ceremonial?",
          de: "Nach der Krönung reisten Königin Elizabeth II. und Prinz Philip in welcher Art von zeremoniellem Fahrzeug?",
          nl: "Na de kroning reisden Koningin Elizabeth II en Prins Philip in welk type ceremonieel voertuig?"
        },
        options: [
          {
            en: "A motorized limousine",
            es: "Una limusina motorizada",
            de: "Eine motorisierte Limousine",
            nl: "Een gemotoriseerde limousine"
          },
          {
            en: "A gilded horse-drawn carriage",
            es: "Un carruaje dorado tirado por caballos",
            de: "Eine vergoldete Pferdekutsche",
            nl: "Een vergulde koets met paarden"
          },
          {
            en: "An open-top car",
            es: "Un automóvil descapotable",
            de: "Ein Cabrio",
            nl: "Een open auto"
          },
          {
            en: "A royal barge",
            es: "Una barcaza real",
            de: "Eine königliche Barke",
            nl: "Een koninklijke boot"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "After the ceremony, millions of rain-drenched spectators cheered as the 27-year-old queen and 31-year-old Duke of Edinburgh passed along a five-mile procession route in a gilded horse-drawn carriage. This traditional ceremonial transport added to the historic grandeur of the occasion.",
          es: "Después de la ceremonia, millones de espectadores empapados por la lluvia vitorearon mientras la reina de 27 años y el Duque de Edimburgo de 31 años pasaban por una ruta de procesión de cinco millas en un carruaje dorado tirado por caballos. Este transporte ceremonial tradicional agregó grandeza histórica a la ocasión.",
          de: "Nach der Zeremonie jubelten Millionen von regennassen Zuschauern, als die 27-jährige Königin und der 31-jährige Herzog von Edinburgh entlang einer fünf Meilen langen Prozessionsroute in einer vergoldeten Pferdekutsche fuhren. Dieses traditionelle zeremonielle Transportmittel trug zur historischen Pracht des Anlasses bei.",
          nl: "Na de ceremonie juichten miljoenen door regen doorweekte toeschouwers terwijl de 27-jarige koningin en de 31-jarige Hertog van Edinburgh langs een vijf mijl lange processie route reden in een vergulde koets met paarden. Dit traditionele ceremoniële vervoermiddel voegde toe aan de historische grandeur van de gelegenheid."
        }
      }
    ],

    // Day 3 - June 3rd: Historical Events
    day3: [
      {
        question: {
          en: "On June 3, 1937, who married American socialite Wallis Simpson at the Château de Candé in France?",
          es: "El 3 de junio de 1937, ¿quién se casó con la socialité estadounidense Wallis Simpson en el Château de Candé en Francia?",
          de: "Am 3. Juni 1937 heiratete wer die amerikanische Gesellschaftsdame Wallis Simpson im Château de Candé in Frankreich?",
          nl: "Op 3 juni 1937 trouwde wie met de Amerikaanse society dame Wallis Simpson in het Château de Candé in Frankrijk?"
        },
        options: [
          {
            en: "King George VI",
            es: "Rey Jorge VI",
            de: "König Georg VI.",
            nl: "Koning George VI"
          },
          {
            en: "The Duke of Windsor (Edward VIII)",
            es: "El Duque de Windsor (Eduardo VIII)",
            de: "Der Herzog von Windsor (Edward VIII.)",
            nl: "De Hertog van Windsor (Edward VIII)"
          },
          {
            en: "Prince Philip",
            es: "Príncipe Felipe",
            de: "Prinz Philip",
            nl: "Prins Philip"
          },
          {
            en: "King Edward VII",
            es: "Rey Eduardo VII",
            de: "König Edward VII.",
            nl: "Koning Edward VII"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Duke of Windsor, formerly King Edward VIII, married Wallis Simpson on June 3, 1937. Edward had abdicated the throne in December 1936, famously stating he could not continue as king without 'the help and support of the woman I love.'",
          es: "El Duque de Windsor, anteriormente el Rey Eduardo VIII, se casó con Wallis Simpson el 3 de junio de 1937. Eduardo había abdicado el trono en diciembre de 1936, declarando famosamente que no podía continuar como rey sin 'la ayuda y el apoyo de la mujer que amo.'",
          de: "Der Herzog von Windsor, ehemals König Edward VIII., heiratete Wallis Simpson am 3. Juni 1937. Edward hatte im Dezember 1936 abgedankt und berühmt erklärt, er könne nicht als König weitermachen ohne 'die Hilfe und Unterstützung der Frau, die ich liebe.'",
          nl: "De Hertog van Windsor, voorheen Koning Edward VIII, trouwde met Wallis Simpson op 3 juni 1937. Edward had de troon opgegeven in december 1936, met de beroemde verklaring dat hij niet kon doorgaan als koning zonder 'de hulp en steun van de vrouw die ik liefheb.'"
        }
      },
      {
        question: {
          en: "Why did no members of the British royal family attend the Duke of Windsor's wedding to Wallis Simpson?",
          es: "¿Por qué ningún miembro de la familia real británica asistió a la boda del Duque de Windsor con Wallis Simpson?",
          de: "Warum nahm kein Mitglied der britischen Königsfamilie an der Hochzeit des Herzogs von Windsor mit Wallis Simpson teil?",
          nl: "Waarom woonde geen enkel lid van de Britse koninklijke familie de bruiloft van de Hertog van Windsor met Wallis Simpson bij?"
        },
        options: [
          {
            en: "They were on vacation",
            es: "Estaban de vacaciones",
            de: "Sie waren im Urlaub",
            nl: "Ze waren op vakantie"
          },
          {
            en: "They disapproved of the marriage due to the constitutional crisis",
            es: "Desaprobaban el matrimonio debido a la crisis constitucional",
            de: "Sie missbilligten die Ehe aufgrund der Verfassungskrise",
            nl: "Ze keurden het huwelijk af vanwege de constitutionele crisis"
          },
          {
            en: "Travel was too difficult during that time",
            es: "Viajar era demasiado difícil en ese momento",
            de: "Reisen war zu dieser Zeit zu schwierig",
            nl: "Reizen was te moeilijk in die tijd"
          },
          {
            en: "They were not invited",
            es: "No fueron invitados",
            de: "Sie wurden nicht eingeladen",
            nl: "Ze waren niet uitgenodigd"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The royal family stayed away because Wallis Simpson was a twice-divorced American socialite, and Edward's relationship with her caused a constitutional crisis that led to his abdication. The Church of England refused to sanction the wedding, and the family viewed the marriage as inappropriate.",
          es: "La familia real se mantuvo alejada porque Wallis Simpson era una socialité estadounidense divorciada dos veces, y la relación de Eduardo con ella causó una crisis constitucional que llevó a su abdicación. La Iglesia de Inglaterra se negó a sancionar la boda, y la familia vio el matrimonio como inapropiado.",
          de: "Die königliche Familie blieb fern, weil Wallis Simpson eine zweimal geschiedene amerikanische Gesellschaftsdame war und Edwards Beziehung zu ihr eine Verfassungskrise auslöste, die zu seiner Abdankung führte. Die Church of England weigerte sich, die Hochzeit zu genehmigen, und die Familie betrachtete die Ehe als unangemessen.",
          nl: "De koninklijke familie bleef weg omdat Wallis Simpson een tweemaal gescheiden Amerikaanse society dame was, en Edwards relatie met haar veroorzaakte een constitutionele crisis die leidde tot zijn troonsafstand. De Church of England weigerde de bruiloft te bekrachtigen, en de familie beschouwde het huwelijk als ongepast."
        }
      },
      {
        question: {
          en: "On June 3, 1943, which violent series of attacks began in Los Angeles involving American servicemen and Mexican American youths?",
          es: "El 3 de junio de 1943, ¿qué serie violenta de ataques comenzó en Los Ángeles involucrando a militares estadounidenses y jóvenes mexicoamericanos?",
          de: "Am 3. Juni 1943 begann welche gewalttätige Serie von Angriffen in Los Angeles, an der amerikanische Soldaten und mexikanisch-amerikanische Jugendliche beteiligt waren?",
          nl: "Op 3 juni 1943 begon welke gewelddadige reeks aanvallen in Los Angeles waarbij Amerikaanse militairen en Mexicaans-Amerikaanse jongeren betrokken waren?"
        },
        options: [
          {
            en: "The Watts Riots",
            es: "Los Disturbios de Watts",
            de: "Die Watts-Unruhen",
            nl: "De Watts-rellen"
          },
          {
            en: "The Rodney King Riots",
            es: "Los Disturbios de Rodney King",
            de: "Die Rodney-King-Unruhen",
            nl: "De Rodney King-rellen"
          },
          {
            en: "The Zoot Suit Riots",
            es: "Los Disturbios del Traje Zoot",
            de: "Die Zoot-Suit-Unruhen",
            nl: "De Zoot Suit-rellen"
          },
          {
            en: "The LA Gang Wars",
            es: "Las Guerras de Pandillas de LA",
            de: "Die LA-Bandenkriege",
            nl: "De LA-bendeoorlogen"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Zoot Suit Riots began on June 3, 1943, when American servicemen stationed in Southern California attacked young Latino and Mexican American city residents wearing zoot suits. The riots lasted until June 8, when military officials banned all personnel from Los Angeles.",
          es: "Los Disturbios del Traje Zoot comenzaron el 3 de junio de 1943, cuando militares estadounidenses estacionados en el sur de California atacaron a jóvenes residentes latinos y mexicoamericanos que vestían trajes zoot. Los disturbios duraron hasta el 8 de junio, cuando las autoridades militares prohibieron a todo el personal ir a Los Ángeles.",
          de: "Die Zoot-Suit-Unruhen begannen am 3. Juni 1943, als in Südkalifornien stationierte amerikanische Soldaten junge Latino- und mexikanisch-amerikanische Stadtbewohner angriffen, die Zoot Suits trugen. Die Unruhen dauerten bis zum 8. Juni, als Militärbeamte allem Personal verboten, nach Los Angeles zu gehen.",
          nl: "De Zoot Suit-rellen begonnen op 3 juni 1943, toen Amerikaanse militairen die in Zuid-Californië waren gestationeerd jonge Latino- en Mexicaans-Amerikaanse stadsbewoners aanvielen die zoot suits droegen. De rellen duurden tot 8 juni, toen militaire functionarissen al het personeel verboden naar Los Angeles te gaan."
        }
      },
      {
        question: {
          en: "What color was Wallis Simpson's custom-designed wedding dress?",
          es: "¿De qué color era el vestido de novia diseñado a medida de Wallis Simpson?",
          de: "Welche Farbe hatte das maßgeschneiderte Hochzeitskleid von Wallis Simpson?",
          nl: "Welke kleur had de op maat gemaakte trouwjurk van Wallis Simpson?"
        },
        options: [
          {
            en: "Pure white",
            es: "Blanco puro",
            de: "Reinweiß",
            nl: "Zuiver wit"
          },
          {
            en: "Ivory",
            es: "Marfil",
            de: "Elfenbein",
            nl: "Ivoor"
          },
          {
            en: "Wallis blue (a custom shade to match her eyes)",
            es: "Azul Wallis (un tono personalizado para combinar con sus ojos)",
            de: "Wallis-Blau (ein maßgeschneiderter Farbton passend zu ihren Augen)",
            nl: "Wallis-blauw (een op maat gemaakte tint om bij haar ogen te passen)"
          },
          {
            en: "Cream",
            es: "Crema",
            de: "Creme",
            nl: "Crème"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Wallis Simpson wore a 'Wallis blue' Mainbocher wedding dress, a custom shade designed specifically to match her eyes. This detail has become one of the most memorable aspects of the controversial royal wedding that scandalized the British monarchy.",
          es: "Wallis Simpson llevó un vestido de novia Mainbocher en 'azul Wallis', un tono personalizado diseñado específicamente para combinar con sus ojos. Este detalle se ha convertido en uno de los aspectos más memorables de la controvertida boda real que escandalizó a la monarquía británica.",
          de: "Wallis Simpson trug ein 'Wallis-blaues' Mainbocher-Hochzeitskleid, ein maßgeschneiderter Farbton, der speziell zu ihren Augen passen sollte. Dieses Detail ist zu einem der denkwürdigsten Aspekte der kontroversen königlichen Hochzeit geworden, die die britische Monarchie erschütterte.",
          nl: "Wallis Simpson droeg een 'Wallis-blauwe' Mainbocher-trouwjurk, een op maat gemaakte tint die speciaal was ontworpen om bij haar ogen te passen. Dit detail is een van de meest gedenkwaardige aspecten geworden van de controversiële koninklijke bruiloft die de Britse monarchie schokte."
        }
      },
      {
        question: {
          en: "On June 3, 1963, which influential Pope died at age 81?",
          es: "El 3 de junio de 1963, ¿qué Papa influyente murió a los 81 años?",
          de: "Am 3. Juni 1963 starb welcher einflussreiche Papst im Alter von 81 Jahren?",
          nl: "Op 3 juni 1963 stierf welke invloedrijke paus op 81-jarige leeftijd?"
        },
        options: [
          {
            en: "Pope Pius XII",
            es: "Papa Pío XII",
            de: "Papst Pius XII.",
            nl: "Paus Pius XII"
          },
          {
            en: "Pope John XXIII",
            es: "Papa Juan XXIII",
            de: "Papst Johannes XXIII.",
            nl: "Paus Johannes XXIII"
          },
          {
            en: "Pope Paul VI",
            es: "Papa Pablo VI",
            de: "Papst Paul VI.",
            nl: "Paus Paulus VI"
          },
          {
            en: "Pope John Paul I",
            es: "Papa Juan Pablo I",
            de: "Papst Johannes Paul I.",
            nl: "Paus Johannes Paulus I"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Pope John XXIII died on June 3, 1963, at age 81. He was known for convening the Second Vatican Council and was succeeded by Pope Paul VI. John XXIII became beloved for his warm personality and efforts to modernize the Catholic Church.",
          es: "El Papa Juan XXIII murió el 3 de junio de 1963, a los 81 años. Era conocido por convocar el Concilio Vaticano II y fue sucedido por el Papa Pablo VI. Juan XXIII se hizo querido por su personalidad cálida y sus esfuerzos por modernizar la Iglesia Católica.",
          de: "Papst Johannes XXIII. starb am 3. Juni 1963 im Alter von 81 Jahren. Er war bekannt für die Einberufung des Zweiten Vatikanischen Konzils und wurde von Papst Paul VI. abgelöst. Johannes XXIII. wurde für seine warme Persönlichkeit und seine Bemühungen zur Modernisierung der katholischen Kirche geliebt.",
          nl: "Paus Johannes XXIII stierf op 3 juni 1963, op 81-jarige leeftijd. Hij stond bekend om het bijeenroepen van het Tweede Vaticaans Concilie en werd opgevolgd door Paus Paulus VI. Johannes XXIII werd geliefd vanwege zijn warme persoonlijkheid en inspanningen om de katholieke kerk te moderniseren."
        }
      }
    ],

    // Day 4 - June 4th: Historical Events
    day4: [
      {
        question: {
          en: "On June 4, 1989, which pro-democracy demonstration was violently suppressed in Beijing?",
          es: "El 4 de junio de 1989, ¿qué manifestación prodemocracia fue violentamente reprimida en Beijing?",
          de: "Am 4. Juni 1989 wurde welche Pro-Demokratie-Demonstration in Peking gewaltsam niedergeschlagen?",
          nl: "Op 4 juni 1989 werd welke pro-democratie demonstratie gewelddadig onderdrukt in Beijing?"
        },
        options: [
          {
            en: "The Hong Kong Protests",
            es: "Las Protestas de Hong Kong",
            de: "Die Hongkong-Proteste",
            nl: "De Hongkong-protesten"
          },
          {
            en: "The Tiananmen Square Protests",
            es: "Las Protestas de la Plaza de Tiananmen",
            de: "Die Proteste auf dem Platz des Himmlischen Friedens",
            nl: "De Tiananmen-protesten"
          },
          {
            en: "The Shanghai Uprising",
            es: "El Levantamiento de Shanghai",
            de: "Der Shanghai-Aufstand",
            nl: "De Shanghai-opstand"
          },
          {
            en: "The Beijing Spring",
            es: "La Primavera de Beijing",
            de: "Der Pekinger Frühling",
            nl: "De Beijing-lente"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Tiananmen Square protests were violently suppressed on June 4, 1989, when Chinese troops opened fire on students and workers who had been peacefully protesting. The exact death toll remains disputed, with estimates ranging from several hundred to close to 1,000 casualties.",
          es: "Las protestas de la Plaza de Tiananmen fueron violentamente reprimidas el 4 de junio de 1989, cuando las tropas chinas abrieron fuego contra estudiantes y trabajadores que habían estado protestando pacíficamente. El número exacto de muertos sigue en disputa, con estimaciones que van desde varios cientos hasta cerca de 1.000 víctimas.",
          de: "Die Proteste auf dem Platz des Himmlischen Friedens wurden am 4. Juni 1989 gewaltsam niedergeschlagen, als chinesische Truppen auf Studenten und Arbeiter schossen, die friedlich protestiert hatten. Die genau Todeszahl bleibt umstritten, mit Schätzungen von mehreren hundert bis zu nahe 1.000 Opfern.",
          nl: "De Tiananmen-protesten werden gewelddadig onderdrukt op 4 juni 1989, toen Chinese troepen het vuur openden op studenten en arbeiders die vreedzaam hadden geprotesteerd. Het exacte dodental blijft betwist, met schattingen variërend van enkele honderden tot bijna 1.000 slachtoffers."
        }
      },
      {
        question: {
          en: "What were the Tiananmen Square protesters primarily demanding?",
          es: "¿Qué exigían principalmente los manifestantes de la Plaza de Tiananmen?",
          de: "Was forderten die Demonstranten auf dem Platz des Himmlischen Friedens hauptsächlich?",
          nl: "Wat eisten de Tiananmen-demonstranten voornamelijk?"
        },
        options: [
          {
            en: "Economic sanctions against foreign countries",
            es: "Sanciones económicas contra países extranjeros",
            de: "Wirtschaftssanktionen gegen ausländische Länder",
            nl: "Economische sancties tegen buitenlandse landen"
          },
          {
            en: "Political and economic reforms, including an end to corruption and censorship",
            es: "Reformas políticas y económicas, incluyendo el fin de la corrupción y la censura",
            de: "Politische und wirtschaftliche Reformen, einschließlich eines Endes der Korruption und Zensur",
            nl: "Politieke en economische hervormingen, waaronder een einde aan corruptie en censuur"
          },
          {
            en: "Military expansion",
            es: "Expansión militar",
            de: "Militärische Expansion",
            nl: "Militaire uitbreiding"
          },
          {
            en: "Independence from China",
            es: "Independencia de China",
            de: "Unabhängigkeit von China",
            nl: "Onafhankelijkheid van China"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The university students gathered in Tiananmen Square to demand political and economic reforms broadly centered on calls for an end to corruption, censorship, and limits on basic rights. The protests lasted from April 15 to June 4, 1989.",
          es: "Los estudiantes universitarios se reunieron en la Plaza de Tiananmen para exigir reformas políticas y económicas centradas ampliamente en llamados para terminar con la corrupción, la censura y las limitaciones a los derechos básicos. Las protestas duraron desde el 15 de abril hasta el 4 de junio de 1989.",
          de: "Die Universitätsstudenten versammelten sich auf dem Platz des Himmlischen Friedens, um politische und wirtschaftliche Reformen zu fordern, die sich weitgehend auf Forderungen nach einem Ende der Korruption, Zensur und Einschränkungen grundlegender Rechte konzentrierten. Die Proteste dauerten vom 15. April bis zum 4. Juni 1989.",
          nl: "De universiteitsstudenten verzamelden zich op het Tiananmen-plein om politieke en economische hervormingen te eisen die breed gecentreerd waren op oproepen om een einde te maken aan corruptie, censuur en beperkingen van fundamentele rechten. De protesten duurden van 15 april tot 4 juni 1989."
        }
      },
      {
        question: {
          en: "On June 4, 1942, which decisive naval battle of World War II began in the Pacific?",
          es: "El 4 de junio de 1942, ¿qué batalla naval decisiva de la Segunda Guerra Mundial comenzó en el Pacífico?",
          de: "Am 4. Juni 1942 begann welche entscheidende Seeschlacht des Zweiten Weltkriegs im Pazifik?",
          nl: "Op 4 juni 1942 begon welke beslissende zeeslacht van de Tweede Wereldoorlog in de Stille Oceaan?"
        },
        options: [
          {
            en: "Battle of Coral Sea",
            es: "Batalla del Mar del Coral",
            de: "Schlacht im Korallenmeer",
            nl: "Slag in de Koraalzee"
          },
          {
            en: "Battle of Leyte Gulf",
            es: "Batalla del Golfo de Leyte",
            de: "Schlacht im Golf von Leyte",
            nl: "Slag in de Golf van Leyte"
          },
          {
            en: "Battle of Midway",
            es: "Batalla de Midway",
            de: "Schlacht um Midway",
            nl: "Slag om Midway"
          },
          {
            en: "Battle of the Philippine Sea",
            es: "Batalla del Mar de Filipinas",
            de: "Schlacht in der Philippinensee",
            nl: "Slag in de Filippijnenzee"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Midway began on June 4, 1942, marking a turning point in the Pacific theater of World War II. The outnumbered U.S. Pacific Fleet destroyed four Japanese aircraft carriers while losing only one of its own, the USS Yorktown.",
          es: "La Batalla de Midway comenzó el 4 de junio de 1942, marcando un punto de inflexión en el teatro del Pacífico de la Segunda Guerra Mundial. La superada en número Flota del Pacífico de EE.UU. destruyó cuatro portaaviones japoneses mientras perdía solo uno propio, el USS Yorktown.",
          de: "Die Schlacht um Midway begann am 4. Juni 1942 und markierte einen Wendepunkt im pazifischen Kriegsschauplatz des Zweiten Weltkriegs. Die zahlenmäßig unterlegene US-Pazifikflotte zerstörte vier japanische Flugzeugträger, während sie nur einen eigenen verlor, die USS Yorktown.",
          nl: "De Slag om Midway begon op 4 juni 1942 en markeerde een keerpunt in het Pacifisch theater van de Tweede Wereldoorlog. De in de minderheid zijnde Amerikaanse Pacifische Vloot vernietigde vier Japanse vliegdekschepen terwijl ze er zelf maar één verloor, de USS Yorktown."
        }
      },
      {
        question: {
          en: "How many Japanese aircraft carriers were destroyed during the Battle of Midway?",
          es: "¿Cuántos portaaviones japoneses fueron destruidos durante la Batalla de Midway?",
          de: "Wie viele japanische Flugzeugträger wurden während der Schlacht um Midway zerstört?",
          nl: "Hoeveel Japanse vliegdekschepen werden vernietigd tijdens de Slag om Midway?"
        },
        options: [
          {
            en: "Two",
            es: "Dos",
            de: "Zwei",
            nl: "Twee"
          },
          {
            en: "Three",
            es: "Tres",
            de: "Drei",
            nl: "Drie"
          },
          {
            en: "Four",
            es: "Cuatro",
            de: "Vier",
            nl: "Vier"
          },
          {
            en: "Five",
            es: "Cinco",
            de: "Fünf",
            nl: "Vijf"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Four Japanese aircraft carriers were destroyed during the Battle of Midway, including the Akagi, Kaga, Soryu, and Hiryu. This devastating loss hobbled Japan's naval might and brought Japanese and American sea power to approximate parity in the Pacific.",
          es: "Cuatro portaaviones japoneses fueron destruidos durante la Batalla de Midway, incluyendo el Akagi, Kaga, Soryu e Hiryu. Esta pérdida devastadora debilitó el poder naval de Japón y llevó el poder marítimo japonés y estadounidense a una paridad aproximada en el Pacífico.",
          de: "Vier japanische Flugzeugträger wurden während der Schlacht um Midway zerstört, darunter die Akagi, Kaga, Soryu und Hiryu. Dieser verheerende Verlust lähmte Japans Seemacht und brachte die japanische und amerikanische Seemacht im Pazifik auf ungefähr gleiche Höhe.",
          nl: "Vier Japanse vliegdekschepen werden vernietigd tijdens de Slag om Midway, waaronder de Akagi, Kaga, Soryu en Hiryu. Dit verwoestende verlies verzwakte Japans zeemacht en bracht de Japanse en Amerikaanse zeemacht in de Stille Oceaan ongeveer op gelijke voet."
        }
      },
      {
        question: {
          en: "On June 4, 1738, which British monarch was born?",
          es: "El 4 de junio de 1738, ¿qué monarca británico nació?",
          de: "Am 4. Juni 1738 wurde welcher britische Monarch geboren?",
          nl: "Op 4 juni 1738 werd welke Britse monarch geboren?"
        },
        options: [
          {
            en: "King George II",
            es: "Rey Jorge II",
            de: "König Georg II.",
            nl: "Koning George II"
          },
          {
            en: "King George III",
            es: "Rey Jorge III",
            de: "König Georg III.",
            nl: "Koning George III"
          },
          {
            en: "King George IV",
            es: "Rey Jorge IV",
            de: "König Georg IV.",
            nl: "Koning George IV"
          },
          {
            en: "King William IV",
            es: "Rey Guillermo IV",
            de: "König Wilhelm IV.",
            nl: "Koning Willem IV"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "King George III was born on June 4, 1738. He is famously known as the British monarch during the American Revolution, reigning from 1760 until his death in 1820, making him one of the longest-reigning British kings.",
          es: "El Rey Jorge III nació el 4 de junio de 1738. Es famosamente conocido como el monarca británico durante la Revolución Estadounidense, reinando desde 1760 hasta su muerte en 1820, convirtiéndolo en uno de los reyes británicos con reinado más largo.",
          de: "König Georg III. wurde am 4. Juni 1738 geboren. Er ist berühmt als der britische Monarch während der Amerikanischen Revolution, der von 1760 bis zu seinem Tod 1820 regierte und damit einer der am längsten regierenden britischen Könige war.",
          nl: "Koning George III werd geboren op 4 juni 1738. Hij staat bekend als de Britse monarch tijdens de Amerikaanse Revolutie, regeerde van 1760 tot zijn dood in 1820, waardoor hij een van de langst regerende Britse koningen werd."
        }
      }
    ],

    // Day 5 - June 5th: Historical Events
    day5: [
      {
        question: {
          en: "On June 5, 1968, Senator Robert F. Kennedy was fatally shot shortly after midnight. Where did this tragic event occur?",
          es: "El 5 de junio de 1968, el Senador Robert F. Kennedy fue mortalmente herido poco después de la medianoche. ¿Dónde ocurrió este trágico evento?",
          de: "Am 5. Juni 1968 wurde Senator Robert F. Kennedy kurz nach Mitternacht tödlich erschossen. Wo ereignete sich dieses tragische Ereignis?",
          nl: "Op 5 juni 1968 werd Senator Robert F. Kennedy kort na middernacht dodelijk neergeschoten. Waar vond deze tragische gebeurtenis plaats?"
        },
        options: [
          {
            en: "The White House",
            es: "La Casa Blanca",
            de: "Das Weiße Haus",
            nl: "Het Witte Huis"
          },
          {
            en: "The Ambassador Hotel in Los Angeles",
            es: "El Hotel Ambassador en Los Ángeles",
            de: "Das Ambassador Hotel in Los Angeles",
            nl: "Het Ambassador Hotel in Los Angeles"
          },
          {
            en: "Madison Square Garden in New York",
            es: "Madison Square Garden en Nueva York",
            de: "Madison Square Garden in New York",
            nl: "Madison Square Garden in New York"
          },
          {
            en: "The Capitol Building in Washington DC",
            es: "El Edificio del Capitolio en Washington DC",
            de: "Das Kapitolgebäude in Washington DC",
            nl: "Het Capitool in Washington DC"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Robert F. Kennedy was shot at the Ambassador Hotel in Los Angeles shortly after midnight on June 5, 1968, after winning the California presidential primary. He was shot by 24-year-old Palestinian Sirhan Sirhan and died the following day on June 6.",
          es: "Robert F. Kennedy fue disparado en el Hotel Ambassador en Los Ángeles poco después de la medianoche el 5 de junio de 1968, después de ganar la primaria presidencial de California. Fue disparado por el palestino Sirhan Sirhan de 24 años y murió al día siguiente el 6 de junio.",
          de: "Robert F. Kennedy wurde im Ambassador Hotel in Los Angeles kurz nach Mitternacht am 5. Juni 1968 erschossen, nachdem er die kalifornische Präsidentschaftsvorwahl gewonnen hatte. Er wurde vom 24-jährigen Palästinenser Sirhan Sirhan erschossen und starb am folgenden Tag, dem 6. Juni.",
          nl: "Robert F. Kennedy werd neergeschoten in het Ambassador Hotel in Los Angeles kort na middernacht op 5 juni 1968, na het winnen van de Californische presidentiële voorverkiezing. Hij werd neergeschoten door de 24-jarige Palestijn Sirhan Sirhan en stierf de volgende dag op 6 juni."
        }
      },
      {
        question: {
          en: "Why did Sirhan Sirhan claim he assassinated Robert F. Kennedy?",
          es: "¿Por qué afirmó Sirhan Sirhan que asesinó a Robert F. Kennedy?",
          de: "Warum behauptete Sirhan Sirhan, Robert F. Kennedy ermordet zu haben?",
          nl: "Waarom beweerde Sirhan Sirhan dat hij Robert F. Kennedy vermoordde?"
        },
        options: [
          {
            en: "Due to Kennedy's stance on civil rights",
            es: "Debido a la postura de Kennedy sobre los derechos civiles",
            de: "Aufgrund von Kennedys Haltung zu Bürgerrechten",
            nl: "Vanwege Kennedy's standpunt over burgerrechten"
          },
          {
            en: "Due to Kennedy's support for Israel during the Six-Day War",
            es: "Debido al apoyo de Kennedy a Israel durante la Guerra de los Seis Días",
            de: "Aufgrund von Kennedys Unterstützung für Israel während des Sechstagekriegs",
            nl: "Vanwege Kennedy's steun aan Israël tijdens de Zesdaagse Oorlog"
          },
          {
            en: "Personal vendetta unrelated to politics",
            es: "Vendetta personal no relacionada con la política",
            de: "Persönliche Vendetta ohne politischen Bezug",
            nl: "Persoonlijke vendetta los van politiek"
          },
          {
            en: "Opposition to the Vietnam War",
            es: "Oposición a la Guerra de Vietnam",
            de: "Widerstand gegen den Vietnamkrieg",
            nl: "Verzet tegen de Vietnamoorlog"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Sirhan Sirhan later stated he assassinated Kennedy out of concern for the Palestinian cause, feeling betrayed by Kennedy's support for Israel during the Six-Day War in 1967. The assassination occurred exactly one year after the war began on June 5, 1967.",
          es: "Sirhan Sirhan declaró más tarde que asesinó a Kennedy por preocupación por la causa palestina, sintiéndose traicionado por el apoyo de Kennedy a Israel durante la Guerra de los Seis Días en 1967. El asesinato ocurrió exactamente un año después de que comenzara la guerra el 5 de junio de 1967.",
          de: "Sirhan Sirhan erklärte später, er habe Kennedy aus Sorge um die palästinensische Sache ermordet und fühlte sich von Kennedys Unterstützung für Israel während des Sechstagekriegs 1967 verraten. Das Attentat ereignete sich genau ein Jahr nachdem der Krieg am 5. Juni 1967 begann.",
          nl: "Sirhan Sirhan verklaarde later dat hij Kennedy vermoordde uit bezorgdheid voor de Palestijnse zaak, zich verraden voelend door Kennedy's steun aan Israël tijdens de Zesdaagse Oorlog in 1967. De moord vond plaats precies één jaar nadat de oorlog begon op 5 juni 1967."
        }
      },
      {
        question: {
          en: "On June 5, 1967, which conflict began when Israel launched preemptive airfield strikes?",
          es: "El 5 de junio de 1967, ¿qué conflicto comenzó cuando Israel lanzó ataques preventivos a aeródromos?",
          de: "Am 5. Juni 1967 begann welcher Konflikt, als Israel präventive Angriffe auf Flugplätze startete?",
          nl: "Op 5 juni 1967 begon welk conflict toen Israël preventieve aanvallen op vliegvelden lanceerde?"
        },
        options: [
          {
            en: "The Yom Kippur War",
            es: "La Guerra de Yom Kippur",
            de: "Der Jom-Kippur-Krieg",
            nl: "De Jom Kippoer-oorlog"
          },
          {
            en: "The Six-Day War",
            es: "La Guerra de los Seis Días",
            de: "Der Sechstagekrieg",
            nl: "De Zesdaagse Oorlog"
          },
          {
            en: "The First Intifada",
            es: "La Primera Intifada",
            de: "Die Erste Intifada",
            nl: "De Eerste Intifada"
          },
          {
            en: "The Suez Crisis",
            es: "La Crisis de Suez",
            de: "Die Suezkrise",
            nl: "De Suezcrisis"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Six-Day War began on June 5, 1967, when Israel, anticipating a possible attack by its Arab neighbors, launched preemptive airfield strikes that destroyed nearly the entire Egyptian air force. The conflict resulted in a decisive Israeli victory and reshaped the Middle East.",
          es: "La Guerra de los Seis Días comenzó el 5 de junio de 1967, cuando Israel, anticipando un posible ataque de sus vecinos árabes, lanzó ataques preventivos a aeródromos que destruyeron casi toda la fuerza aérea egipcia. El conflicto resultó en una victoria israelí decisiva y remodeló el Medio Oriente.",
          de: "Der Sechstagekrieg begann am 5. Juni 1967, als Israel in Erwartung eines möglichen Angriffs seiner arabischen Nachbarn präventive Angriffe auf Flugplätze startete, die fast die gesamte ägyptische Luftwaffe zerstörten. Der Konflikt führte zu einem entscheidenden israelischen Sieg und formte den Nahen Osten neu.",
          nl: "De Zesdaagse Oorlog begon op 5 juni 1967, toen Israël, anticiperend op een mogelijke aanval door zijn Arabische buren, preventieve aanvallen op vliegvelden lanceerde die bijna de gehele Egyptische luchtmacht vernietigden. Het conflict resulteerde in een beslissende Israëlische overwinning en hervormde het Midden-Oosten."
        }
      },
      {
        question: {
          en: "On June 5, 1947, U.S. Secretary of State George Marshall delivered a speech at Harvard University that led to what major initiative?",
          es: "El 5 de junio de 1947, el Secretario de Estado de EE.UU. George Marshall pronunció un discurso en la Universidad de Harvard que llevó a qué importante iniciativa?",
          de: "Am 5. Juni 1947 hielt der US-Außenminister George Marshall eine Rede an der Harvard University, die zu welcher wichtigen Initiative führte?",
          nl: "Op 5 juni 1947 hield de Amerikaanse minister van Buitenlandse Zaken George Marshall een toespraak aan de Harvard Universiteit die leidde tot welk belangrijk initiatief?"
        },
        options: [
          {
            en: "The United Nations Charter",
            es: "La Carta de las Naciones Unidas",
            de: "Die Charta der Vereinten Nationen",
            nl: "Het Handvest van de Verenigde Naties"
          },
          {
            en: "The Marshall Plan",
            es: "El Plan Marshall",
            de: "Der Marshall-Plan",
            nl: "Het Marshallplan"
          },
          {
            en: "NATO",
            es: "OTAN",
            de: "NATO",
            nl: "NAVO"
          },
          {
            en: "The Truman Doctrine",
            es: "La Doctrina Truman",
            de: "Die Truman-Doktrin",
            nl: "De Truman-doctrine"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "George Marshall's June 5, 1947 speech at Harvard outlined the Marshall Plan, offering American aid to promote European recovery after World War II. Over four years, the United States delivered nearly $13 billion in assistance. Marshall received the Nobel Peace Prize in 1953 for this initiative.",
          es: "El discurso de George Marshall del 5 de junio de 1947 en Harvard delineó el Plan Marshall, ofreciendo ayuda estadounidense para promover la recuperación europea después de la Segunda Guerra Mundial. Durante cuatro años, Estados Unidos entregó casi $13 mil millones en asistencia. Marshall recibió el Premio Nobel de la Paz en 1953 por esta iniciativa.",
          de: "George Marshalls Rede vom 5. Juni 1947 in Harvard skizzierte den Marshall-Plan und bot amerikanische Hilfe zur Förderung der europäischen Erholung nach dem Zweiten Weltkrieg an. Über vier Jahre lieferten die Vereinigten Staaten fast 13 Milliarden Dollar an Hilfe. Marshall erhielt 1953 den Friedensnobelpreis für diese Initiative.",
          nl: "George Marshalls toespraak van 5 juni 1947 in Harvard schetste het Marshallplan, dat Amerikaanse hulp bood om het Europese herstel na de Tweede Wereldoorlog te bevorderen. Gedurende vier jaar leverden de Verenigde Staten bijna $13 miljard aan hulp. Marshall ontving in 1953 de Nobelprijs voor de Vrede voor dit initiatief."
        }
      },
      {
        question: {
          en: "June 5 is celebrated annually as which international awareness day?",
          es: "El 5 de junio se celebra anualmente como qué día internacional de concienciación?",
          de: "Der 5. Juni wird jährlich als welcher internationale Bewusstseinstag gefeiert?",
          nl: "5 juni wordt jaarlijks gevierd als welke internationale bewustwordingsdag?"
        },
        options: [
          {
            en: "World Ocean Day",
            es: "Día Mundial de los Océanos",
            de: "Welttag der Ozeane",
            nl: "Wereldoceanendag"
          },
          {
            en: "World Environment Day",
            es: "Día Mundial del Medio Ambiente",
            de: "Weltumwelttag",
            nl: "Wereldmilieudag"
          },
          {
            en: "International Day of Peace",
            es: "Día Internacional de la Paz",
            de: "Internationaler Friedenstag",
            nl: "Internationale Dag van de Vrede"
          },
          {
            en: "Earth Day",
            es: "Día de la Tierra",
            de: "Tag der Erde",
            nl: "Dag van de Aarde"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "June 5 is celebrated globally as World Environment Day. This annual event raises awareness about environmental issues and encourages worldwide action to protect our planet. It is one of the United Nations' principal vehicles for encouraging awareness and action for environmental protection.",
          es: "El 5 de junio se celebra globalmente como el Día Mundial del Medio Ambiente. Este evento anual crea conciencia sobre problemas ambientales y fomenta la acción mundial para proteger nuestro planeta. Es uno de los principales vehículos de las Naciones Unidas para fomentar la conciencia y la acción para la protección ambiental.",
          de: "Der 5. Juni wird weltweit als Weltumwelttag gefeiert. Diese jährliche Veranstaltung schafft Bewusstsein für Umweltfragen und fördert weltweite Maßnahmen zum Schutz unseres Planeten. Es ist eines der wichtigsten Instrumente der Vereinten Nationen zur Förderung des Bewusstseins und der Maßnahmen für den Umweltschutz.",
          nl: "5 juni wordt wereldwijd gevierd als Wereldmilieudag. Dit jaarlijkse evenement vergroot het bewustzijn over milieukwesties en moedigt wereldwijde actie aan om onze planeet te beschermen. Het is een van de belangrijkste middelen van de Verenigde Naties om bewustzijn en actie voor milieubescherming aan te moedigen."
        }
      }
    ],

    // Day 6 - June 6th: D-Day and Historical Events
    day6: [
      {
        question: {
          en: "On June 6, 1944, what historic military operation was launched during World War II?",
          es: "El 6 de junio de 1944, ¿qué histórica operación militar se lanzó durante la Segunda Guerra Mundial?",
          de: "Am 6. Juni 1944 wurde welche historische Militäroperation während des Zweiten Weltkriegs gestartet?",
          nl: "Op 6 juni 1944 werd welke historische militaire operatie gelanceerd tijdens de Tweede Wereldoorlog?"
        },
        options: [
          {
            en: "Operation Market Garden",
            es: "Operación Market Garden",
            de: "Operation Market Garden",
            nl: "Operatie Market Garden"
          },
          {
            en: "Operation Overlord (D-Day)",
            es: "Operación Overlord (Día D)",
            de: "Operation Overlord (D-Day)",
            nl: "Operatie Overlord (D-Day)"
          },
          {
            en: "Operation Barbarossa",
            es: "Operación Barbarossa",
            de: "Operation Barbarossa",
            nl: "Operatie Barbarossa"
          },
          {
            en: "Operation Desert Storm",
            es: "Operación Tormenta del Desierto",
            de: "Operation Wüstensturm",
            nl: "Operatie Desert Storm"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "D-Day, or Operation Overlord, began on June 6, 1944, when Allied forces landed on the beaches of Normandy, France. More than 150,000 troops crossed the English Channel in the largest seaborne invasion in history, marking the beginning of the liberation of Western Europe from Nazi occupation.",
          es: "El Día D, u Operación Overlord, comenzó el 6 de junio de 1944, cuando las fuerzas aliadas desembarcaron en las playas de Normandía, Francia. Más de 150,000 soldados cruzaron el Canal de la Mancha en la mayor invasión anfibia de la historia, marcando el comienzo de la liberación de Europa Occidental de la ocupación nazi.",
          de: "Der D-Day oder Operation Overlord begann am 6. Juni 1944, als alliierte Streitkräfte an den Stränden der Normandie in Frankreich landeten. Mehr als 150.000 Soldaten überquerten den Ärmelkanal in der größten amphibischen Invasion der Geschichte und markierten den Beginn der Befreiung Westeuropas von der Nazi-Besatzung.",
          nl: "D-Day, of Operatie Overlord, begon op 6 juni 1944, toen geallieerde troepen landden op de stranden van Normandië, Frankrijk. Meer dan 150.000 soldaten staken het Kanaal over in de grootste amfibische invasie uit de geschiedenis, wat het begin markeerde van de bevrijding van West-Europa van de nazi-bezetting."
        }
      },
      {
        question: {
          en: "How many beaches were involved in the D-Day landings on June 6, 1944?",
          es: "¿Cuántas playas estuvieron involucradas en los desembarcos del Día D el 6 de junio de 1944?",
          de: "Wie viele Strände waren an den D-Day-Landungen am 6. Juni 1944 beteiligt?",
          nl: "Hoeveel stranden waren betrokken bij de D-Day-landingen op 6 juni 1944?"
        },
        options: [
          {
            en: "Three beaches",
            es: "Tres playas",
            de: "Drei Strände",
            nl: "Drie stranden"
          },
          {
            en: "Five beaches",
            es: "Cinco playas",
            de: "Fünf Strände",
            nl: "Vijf stranden"
          },
          {
            en: "Seven beaches",
            es: "Siete playas",
            de: "Sieben Strände",
            nl: "Zeven stranden"
          },
          {
            en: "Ten beaches",
            es: "Diez playas",
            de: "Zehn Strände",
            nl: "Tien stranden"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The D-Day invasion involved five beaches along the Normandy coast: Utah, Omaha, Gold, Juno, and Sword. American forces landed on Utah and Omaha, while British and Canadian troops landed on Gold, Juno, and Sword beaches, forming a 50-mile stretch of the Normandy coastline.",
          es: "La invasión del Día D involucró cinco playas a lo largo de la costa de Normandía: Utah, Omaha, Gold, Juno y Sword. Las fuerzas estadounidenses desembarcaron en Utah y Omaha, mientras que las tropas británicas y canadienses desembarcaron en las playas Gold, Juno y Sword, formando una franja de 50 millas de la costa de Normandía.",
          de: "Die D-Day-Invasion umfasste fünf Strände entlang der Normandie-Küste: Utah, Omaha, Gold, Juno und Sword. Amerikanische Truppen landeten in Utah und Omaha, während britische und kanadische Truppen an den Stränden Gold, Juno und Sword landeten und einen 50-Meilen-Abschnitt der Normandie-Küste bildeten.",
          nl: "De D-Day-invasie omvatte vijf stranden langs de Normandische kust: Utah, Omaha, Gold, Juno en Sword. Amerikaanse troepen landden op Utah en Omaha, terwijl Britse en Canadese troepen landden op Gold, Juno en Sword stranden, een strook van 50 mijl langs de Normandische kust vormend."
        }
      },
      {
        question: {
          en: "On June 6, 1844, what organization was founded in London that became a worldwide movement?",
          es: "El 6 de junio de 1844, ¿qué organización fue fundada en Londres que se convirtió en un movimiento mundial?",
          de: "Am 6. Juni 1844 wurde welche Organisation in London gegründet, die zu einer weltweiten Bewegung wurde?",
          nl: "Op 6 juni 1844 werd welke organisatie opgericht in Londen die een wereldwijde beweging werd?"
        },
        options: [
          {
            en: "Red Cross",
            es: "Cruz Roja",
            de: "Rotes Kreuz",
            nl: "Rode Kruis"
          },
          {
            en: "YMCA (Young Men's Christian Association)",
            es: "YMCA (Asociación Cristiana de Jóvenes)",
            de: "CVJM (Christlicher Verein Junger Menschen)",
            nl: "YMCA (Young Men's Christian Association)"
          },
          {
            en: "Salvation Army",
            es: "Ejército de Salvación",
            de: "Heilsarmee",
            nl: "Leger des Heils"
          },
          {
            en: "Boy Scouts",
            es: "Boy Scouts",
            de: "Pfadfinder",
            nl: "Padvinders"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The YMCA (Young Men's Christian Association) was founded on June 6, 1844, in London by George Williams. It began as a refuge for young men seeking to escape the hazards of life on the streets and has grown into a worldwide movement focused on youth development, healthy living, and social responsibility.",
          es: "La YMCA (Asociación Cristiana de Jóvenes) fue fundada el 6 de junio de 1844 en Londres por George Williams. Comenzó como un refugio para jóvenes que buscaban escapar de los peligros de la vida en las calles y se ha convertido en un movimiento mundial centrado en el desarrollo juvenil, la vida saludable y la responsabilidad social.",
          de: "Der CVJM wurde am 6. Juni 1844 in London von George Williams gegründet. Er begann als Zufluchtsort für junge Männer, die den Gefahren des Straßenlebens entkommen wollten, und ist zu einer weltweiten Bewegung gewachsen, die sich auf Jugendentwicklung, gesundes Leben und soziale Verantwortung konzentriert.",
          nl: "De YMCA werd opgericht op 6 juni 1844 in Londen door George Williams. Het begon als een toevluchtsoord voor jonge mannen die probeerden te ontsnappen aan de gevaren van het leven op straat en is uitgegroeid tot een wereldwijde beweging gericht op jeugdontwikkeling, gezond leven en sociale verantwoordelijkheid."
        }
      },
      {
        question: {
          en: "What devastating event occurred in Seattle, Washington on June 6, 1889?",
          es: "¿Qué evento devastador ocurrió en Seattle, Washington el 6 de junio de 1889?",
          de: "Welches verheerende Ereignis ereignete sich am 6. Juni 1889 in Seattle, Washington?",
          nl: "Welke verwoestende gebeurtenis vond plaats in Seattle, Washington op 6 juni 1889?"
        },
        options: [
          {
            en: "A major earthquake",
            es: "Un gran terremoto",
            de: "Ein großes Erdbeben",
            nl: "Een grote aardbeving"
          },
          {
            en: "The Great Seattle Fire",
            es: "El Gran Incendio de Seattle",
            de: "Das Große Feuer von Seattle",
            nl: "De Grote Brand van Seattle"
          },
          {
            en: "A devastating flood",
            es: "Una inundación devastadora",
            de: "Eine verheerende Überschwemmung",
            nl: "Een verwoestende overstroming"
          },
          {
            en: "A volcanic eruption",
            es: "Una erupción volcánica",
            de: "Ein Vulkanausbruch",
            nl: "Een vulkaanuitbarsting"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Great Seattle Fire destroyed all of downtown Seattle on June 6, 1889, burning 25 city blocks and leaving thousands homeless. The fire started in a cabinet shop and spread quickly through the wooden buildings. Seattle rebuilt with brick and stone, and raised the street level, creating the famous Seattle Underground.",
          es: "El Gran Incendio de Seattle destruyó todo el centro de Seattle el 6 de junio de 1889, quemando 25 cuadras de la ciudad y dejando a miles sin hogar. El incendio comenzó en una carpintería y se extendió rápidamente a través de los edificios de madera. Seattle se reconstruyó con ladrillo y piedra, y elevó el nivel de la calle, creando el famoso Seattle Underground.",
          de: "Das Große Feuer von Seattle zerstörte am 6. Juni 1889 die gesamte Innenstadt von Seattle, verbrannte 25 Stadtblocks und ließ Tausende obdachlos. Das Feuer begann in einer Tischlerei und breitete sich schnell durch die Holzgebäude aus. Seattle wurde mit Ziegeln und Stein wieder aufgebaut und das Straßenniveau angehoben, wodurch das berühmte Seattle Underground entstand.",
          nl: "De Grote Brand van Seattle verwoestte heel het centrum van Seattle op 6 juni 1889, waarbij 25 stadsblokken verbrandden en duizenden dakloos werden. De brand begon in een meubelmakerij en verspreidde zich snel door de houten gebouwen. Seattle herbouwde met baksteen en steen en verhoogde het straatniveau, waardoor het beroemde Seattle Underground ontstond."
        }
      },
      {
        question: {
          en: "On June 6, 1933, what entertainment innovation opened for the first time in Camden, New Jersey?",
          es: "El 6 de junio de 1933, ¿qué innovación de entretenimiento se abrió por primera vez en Camden, Nueva Jersey?",
          de: "Am 6. Juni 1933 wurde welche Unterhaltungsinnovation zum ersten Mal in Camden, New Jersey, eröffnet?",
          nl: "Op 6 juni 1933 werd welke entertainment-innovatie voor het eerst geopend in Camden, New Jersey?"
        },
        options: [
          {
            en: "The first television station",
            es: "La primera estación de televisión",
            de: "Der erste Fernsehsender",
            nl: "Het eerste televisiestation"
          },
          {
            en: "The first drive-in movie theater",
            es: "El primer autocine",
            de: "Das erste Autokino",
            nl: "De eerste drive-in bioscoop"
          },
          {
            en: "The first shopping mall",
            es: "El primer centro comercial",
            de: "Das erste Einkaufszentrum",
            nl: "Het eerste winkelcentrum"
          },
          {
            en: "The first theme park",
            es: "El primer parque temático",
            de: "Der erste Freizeitpark",
            nl: "Het eerste pretpark"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first drive-in movie theater opened in Camden, New Jersey on June 6, 1933. Created by Richard Hollingshead, it allowed people to watch movies from the comfort of their cars. This innovation became hugely popular in America, especially during the 1950s and 1960s, transforming the movie-going experience.",
          es: "El primer autocine se abrió en Camden, Nueva Jersey el 6 de junio de 1933. Creado por Richard Hollingshead, permitía a las personas ver películas desde la comodidad de sus coches. Esta innovación se volvió enormemente popular en América, especialmente durante las décadas de 1950 y 1960, transformando la experiencia de ir al cine.",
          de: "Das erste Autokino wurde am 6. Juni 1933 in Camden, New Jersey, eröffnet. Von Richard Hollingshead geschaffen, ermöglichte es den Menschen, Filme bequem von ihren Autos aus zu sehen. Diese Innovation wurde in Amerika sehr beliebt, besonders in den 1950er und 1960er Jahren, und verwandelte das Kinoerlebnis.",
          nl: "De eerste drive-in bioscoop opende in Camden, New Jersey op 6 juni 1933. Gemaakt door Richard Hollingshead, stelde het mensen in staat om films te kijken vanuit het comfort van hun auto's. Deze innovatie werd enorm populair in Amerika, vooral tijdens de jaren 1950 en 1960, en transformeerde de bioscoopervaring."
        }
      }
    ],

    // Day 7 - June 7th: Treaty of Tordesillas and Historical Events
    day7: [
      {
        question: {
          en: "On June 7, 1494, which treaty was signed that divided the New World between Spain and Portugal?",
          es: "El 7 de junio de 1494, ¿qué tratado se firmó que dividió el Nuevo Mundo entre España y Portugal?",
          de: "Am 7. Juni 1494 wurde welcher Vertrag unterzeichnet, der die Neue Welt zwischen Spanien und Portugal aufteilte?",
          nl: "Op 7 juni 1494 werd welk verdrag ondertekend dat de Nieuwe Wereld verdeelde tussen Spanje en Portugal?"
        },
        options: [
          {
            en: "Treaty of Paris",
            es: "Tratado de París",
            de: "Vertrag von Paris",
            nl: "Verdrag van Parijs"
          },
          {
            en: "Treaty of Versailles",
            es: "Tratado de Versalles",
            de: "Vertrag von Versailles",
            nl: "Verdrag van Versailles"
          },
          {
            en: "Treaty of Tordesillas",
            es: "Tratado de Tordesillas",
            de: "Vertrag von Tordesillas",
            nl: "Verdrag van Tordesillas"
          },
          {
            en: "Treaty of Utrecht",
            es: "Tratado de Utrecht",
            de: "Vertrag von Utrecht",
            nl: "Verdrag van Utrecht"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Treaty of Tordesillas was signed on June 7, 1494, in Tordesillas, Spain, dividing the newly discovered lands outside Europe between Spain and Portugal. The treaty drew an imaginary line 370 leagues west of the Cape Verde Islands, giving Spain lands to the west and Portugal lands to the east. This explains why Brazil speaks Portuguese today while most of Latin America speaks Spanish.",
          es: "El Tratado de Tordesillas se firmó el 7 de junio de 1494 en Tordesillas, España, dividiendo las tierras recién descubiertas fuera de Europa entre España y Portugal. El tratado trazó una línea imaginaria 370 leguas al oeste de las Islas de Cabo Verde, otorgando a España las tierras al oeste y a Portugal las tierras al este. Esto explica por qué Brasil habla portugués hoy mientras que la mayoría de América Latina habla español.",
          de: "Der Vertrag von Tordesillas wurde am 7. Juni 1494 in Tordesillas, Spanien, unterzeichnet und teilte die neu entdeckten Länder außerhalb Europas zwischen Spanien und Portugal auf. Der Vertrag zog eine imaginäre Linie 370 Leguas westlich der Kapverdischen Inseln, wodurch Spanien die Länder im Westen und Portugal die Länder im Osten erhielt. Dies erklärt, warum Brasilien heute Portugiesisch spricht, während der größte Teil Lateinamerikas Spanisch spricht.",
          nl: "Het Verdrag van Tordesillas werd ondertekend op 7 juni 1494 in Tordesillas, Spanje, waarbij de nieuw ontdekte landen buiten Europa werden verdeeld tussen Spanje en Portugal. Het verdrag trok een denkbeeldige lijn 370 leguas ten westen van de Kaapverdische Eilanden, waardoor Spanje de landen in het westen en Portugal de landen in het oosten kreeg. Dit verklaart waarom Brazilië vandaag Portugees spreekt terwijl het grootste deel van Latijns-Amerika Spaans spreekt."
        }
      },
      {
        question: {
          en: "On June 7, 1929, which tiny independent state was established?",
          es: "El 7 de junio de 1929, ¿qué pequeño estado independiente se estableció?",
          de: "Am 7. Juni 1929 wurde welcher winzige unabhängige Staat gegründet?",
          nl: "Op 7 juni 1929 werd welke kleine onafhankelijke staat opgericht?"
        },
        options: [
          {
            en: "Monaco",
            es: "Mónaco",
            de: "Monaco",
            nl: "Monaco"
          },
          {
            en: "Vatican City",
            es: "Ciudad del Vaticano",
            de: "Vatikanstadt",
            nl: "Vaticaanstad"
          },
          {
            en: "Liechtenstein",
            es: "Liechtenstein",
            de: "Liechtenstein",
            nl: "Liechtenstein"
          },
          {
            en: "San Marino",
            es: "San Marino",
            de: "San Marino",
            nl: "San Marino"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Vatican City became an independent state on June 7, 1929, following the signing of the Lateran Treaty between the Holy See and Italy. At only 44 hectares (110 acres), it is the world's smallest independent nation-state by both area and population. Vatican City is the spiritual and administrative headquarters of the Roman Catholic Church.",
          es: "La Ciudad del Vaticano se convirtió en un estado independiente el 7 de junio de 1929, tras la firma del Tratado de Letrán entre la Santa Sede e Italia. Con solo 44 hectáreas (110 acres), es el estado-nación independiente más pequeño del mundo tanto en área como en población. La Ciudad del Vaticano es la sede espiritual y administrativa de la Iglesia Católica Romana.",
          de: "Die Vatikanstadt wurde am 7. Juni 1929 nach der Unterzeichnung des Lateranvertrags zwischen dem Heiligen Stuhl und Italien zu einem unabhängigen Staat. Mit nur 44 Hektar ist sie der kleinste unabhängige Nationalstaat der Welt, sowohl nach Fläche als auch nach Bevölkerung. Die Vatikanstadt ist das geistliche und administrative Hauptquartier der römisch-katholischen Kirche.",
          nl: "Vaticaanstad werd een onafhankelijke staat op 7 juni 1929, na de ondertekening van het Verdrag van Lateranen tussen de Heilige Stoel en Italië. Met slechts 44 hectare is het 's werelds kleinste onafhankelijke natiestaat, zowel qua oppervlakte als qua bevolking. Vaticaanstad is het spirituele en administratieve hoofdkwartier van de Rooms-Katholieke Kerk."
        }
      },
      {
        question: {
          en: "What devastating natural disaster struck Port Royal, Jamaica on June 7, 1692?",
          es: "¿Qué desastre natural devastador golpeó Port Royal, Jamaica el 7 de junio de 1692?",
          de: "Welche verheerende Naturkatastrophe traf Port Royal, Jamaika am 7. Juni 1692?",
          nl: "Welke verwoestende natuurramp trof Port Royal, Jamaica op 7 juni 1692?"
        },
        options: [
          {
            en: "A hurricane",
            es: "Un huracán",
            de: "Ein Hurrikan",
            nl: "Een orkaan"
          },
          {
            en: "A volcanic eruption",
            es: "Una erupción volcánica",
            de: "Ein Vulkanausbruch",
            nl: "Een vulkaanuitbarsting"
          },
          {
            en: "An earthquake and tsunami",
            es: "Un terremoto y tsunami",
            de: "Ein Erdbeben und Tsunami",
            nl: "Een aardbeving en tsunami"
          },
          {
            en: "A wildfire",
            es: "Un incendio forestal",
            de: "Ein Waldbrand",
            nl: "Een bosbrand"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "On June 7, 1692, a massive earthquake devastated Port Royal, Jamaica, followed by a tsunami. The earthquake caused soil liquefaction that swallowed entire buildings and killed thousands of people. Port Royal, once known as the 'wickedest city on Earth' due to its pirate population, was nearly completely destroyed and never fully recovered.",
          es: "El 7 de junio de 1692, un masivo terremoto devastó Port Royal, Jamaica, seguido de un tsunami. El terremoto causó licuefacción del suelo que tragó edificios enteros y mató a miles de personas. Port Royal, una vez conocida como la 'ciudad más perversa de la Tierra' debido a su población pirata, fue casi completamente destruida y nunca se recuperó completamente.",
          de: "Am 7. Juni 1692 verwüstete ein massives Erdbeben Port Royal, Jamaika, gefolgt von einem Tsunami. Das Erdbeben verursachte Bodenverflüssigung, die ganze Gebäude verschlang und Tausende von Menschen tötete. Port Royal, einst als die 'böseste Stadt der Erde' wegen ihrer Piratenbevölkerung bekannt, wurde fast vollständig zerstört und erholte sich nie vollständig.",
          nl: "Op 7 juni 1692 verwoestte een massale aardbeving Port Royal, Jamaica, gevolgd door een tsunami. De aardbeving veroorzaakte bodemvervloeiing die hele gebouwen verzwolg en duizenden mensen doodde. Port Royal, ooit bekend als de 'slechste stad op aarde' vanwege zijn piratenbevolking, werd bijna volledig vernietigd en herstelde nooit volledig."
        }
      },
      {
        question: {
          en: "On June 7, 1975, which major sporting event was held for the first time?",
          es: "El 7 de junio de 1975, ¿qué gran evento deportivo se celebró por primera vez?",
          de: "Am 7. Juni 1975 wurde welches große Sportereignis zum ersten Mal abgehalten?",
          nl: "Op 7 juni 1975 werd welk groot sportevenement voor het eerst gehouden?"
        },
        options: [
          {
            en: "The first FIFA World Cup",
            es: "La primera Copa Mundial de la FIFA",
            de: "Die erste FIFA Fußball-Weltmeisterschaft",
            nl: "Het eerste FIFA Wereldkampioenschap"
          },
          {
            en: "The first Cricket World Cup",
            es: "La primera Copa Mundial de Cricket",
            de: "Die erste Cricket-Weltmeisterschaft",
            nl: "Het eerste Cricket Wereldkampioenschap"
          },
          {
            en: "The first Rugby World Cup",
            es: "La primera Copa Mundial de Rugby",
            de: "Die erste Rugby-Weltmeisterschaft",
            nl: "Het eerste Rugby Wereldkampioenschap"
          },
          {
            en: "The first Super Bowl",
            es: "El primer Super Bowl",
            de: "Der erste Super Bowl",
            nl: "De eerste Super Bowl"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Cricket World Cup began on June 7, 1975, hosted by England. It has since become one of the world's most important sporting events. The West Indies team entered the history books by winning the inaugural tournament, defeating Australia in the final at Lord's Cricket Ground in London.",
          es: "La primera Copa Mundial de Cricket comenzó el 7 de junio de 1975, organizada por Inglaterra. Desde entonces se ha convertido en uno de los eventos deportivos más importantes del mundo. El equipo de las Indias Occidentales entró en los libros de historia al ganar el torneo inaugural, derrotando a Australia en la final en el Lord's Cricket Ground en Londres.",
          de: "Die erste Cricket-Weltmeisterschaft begann am 7. Juni 1975 und wurde von England ausgerichtet. Sie ist seitdem zu einem der wichtigsten Sportereignisse der Welt geworden. Das Team der Westindischen Inseln schrieb Geschichte, indem es das erste Turnier gewann und Australien im Finale auf dem Lord's Cricket Ground in London besiegte.",
          nl: "Het eerste Cricket Wereldkampioenschap begon op 7 juni 1975, georganiseerd door Engeland. Het is sindsdien uitgegroeid tot een van de belangrijkste sportevenementen ter wereld. Het team van de West-Indië kwam in de geschiedenisboeken door het inaugurele toernooi te winnen en Australië te verslaan in de finale op Lord's Cricket Ground in Londen."
        }
      },
      {
        question: {
          en: "On June 7, 1099, during the First Crusade, what city did the Crusaders begin to besiege?",
          es: "El 7 de junio de 1099, durante la Primera Cruzada, ¿qué ciudad comenzaron a asediar los cruzados?",
          de: "Am 7. Juni 1099, während des Ersten Kreuzzugs, welche Stadt begannen die Kreuzfahrer zu belagern?",
          nl: "Op 7 juni 1099, tijdens de Eerste Kruistocht, welke stad begonnen de kruisvaarders te belegeren?"
        },
        options: [
          {
            en: "Constantinople",
            es: "Constantinopla",
            de: "Konstantinopel",
            nl: "Constantinopel"
          },
          {
            en: "Damascus",
            es: "Damasco",
            de: "Damaskus",
            nl: "Damascus"
          },
          {
            en: "Jerusalem",
            es: "Jerusalén",
            de: "Jerusalem",
            nl: "Jeruzalem"
          },
          {
            en: "Cairo",
            es: "El Cairo",
            de: "Kairo",
            nl: "Caïro"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Siege of Jerusalem began on June 7, 1099, during the First Crusade. After a grueling five-week siege in the summer heat, the Crusaders breached the city walls on July 15, 1099. This marked a significant turning point in the Crusades and led to the establishment of the Kingdom of Jerusalem.",
          es: "El Asedio de Jerusalén comenzó el 7 de junio de 1099, durante la Primera Cruzada. Después de un agotador asedio de cinco semanas en el calor del verano, los cruzados atravesaron las murallas de la ciudad el 15 de julio de 1099. Esto marcó un punto de inflexión significativo en las Cruzadas y condujo al establecimiento del Reino de Jerusalén.",
          de: "Die Belagerung von Jerusalem begann am 7. Juni 1099 während des Ersten Kreuzzugs. Nach einer zermürbenden fünfwöchigen Belagerung in der Sommerhitze durchbrachen die Kreuzfahrer am 15. Juli 1099 die Stadtmauern. Dies markierte einen bedeutenden Wendepunkt in den Kreuzzügen und führte zur Gründung des Königreichs Jerusalem.",
          nl: "Het Beleg van Jeruzalem begon op 7 juni 1099, tijdens de Eerste Kruistocht. Na een uitputtend beleg van vijf weken in de zomerhitte doorbraken de kruisvaarders op 15 juli 1099 de stadsmuren. Dit markeerde een belangrijk keerpunt in de Kruistochten en leidde tot de oprichting van het Koninkrijk Jeruzalem."
        }
      }
    ],

    // Day 8 - June 8th: Frank Lloyd Wright and Historical Events
    day8: [
      {
        question: {
          en: "On June 8, 1867, which renowned American architect was born in Wisconsin?",
          es: "El 8 de junio de 1867, ¿qué renombrado arquitecto estadounidense nació en Wisconsin?",
          de: "Am 8. Juni 1867 wurde welcher renommierte amerikanische Architekt in Wisconsin geboren?",
          nl: "Op 8 juni 1867 werd welke gerenommeerde Amerikaanse architect geboren in Wisconsin?"
        },
        options: [
          {
            en: "Louis Sullivan",
            es: "Louis Sullivan",
            de: "Louis Sullivan",
            nl: "Louis Sullivan"
          },
          {
            en: "Frank Lloyd Wright",
            es: "Frank Lloyd Wright",
            de: "Frank Lloyd Wright",
            nl: "Frank Lloyd Wright"
          },
          {
            en: "Le Corbusier",
            es: "Le Corbusier",
            de: "Le Corbusier",
            nl: "Le Corbusier"
          },
          {
            en: "Ludwig Mies van der Rohe",
            es: "Ludwig Mies van der Rohe",
            de: "Ludwig Mies van der Rohe",
            nl: "Ludwig Mies van der Rohe"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Frank Lloyd Wright was born on June 8, 1867, in Richland Center, Wisconsin. He is widely regarded as America's most significant architect, designing over 1,000 structures during his 70-year career. His philosophy of organic architecture, exemplified in works like Fallingwater (1935), emphasized harmony between humanity and the environment.",
          es: "Frank Lloyd Wright nació el 8 de junio de 1867 en Richland Center, Wisconsin. Es ampliamente considerado como el arquitecto más importante de América, diseñando más de 1,000 estructuras durante su carrera de 70 años. Su filosofía de arquitectura orgánica, ejemplificada en obras como Fallingwater (1935), enfatizaba la armonía entre la humanidad y el medio ambiente.",
          de: "Frank Lloyd Wright wurde am 8. Juni 1867 in Richland Center, Wisconsin, geboren. Er gilt weithin als Amerikas bedeutendster Architekt und entwarf über 1.000 Strukturen während seiner 70-jährigen Karriere. Seine Philosophie der organischen Architektur, die in Werken wie Fallingwater (1935) zum Ausdruck kommt, betonte die Harmonie zwischen Menschheit und Umwelt.",
          nl: "Frank Lloyd Wright werd geboren op 8 juni 1867 in Richland Center, Wisconsin. Hij wordt algemeen beschouwd als Amerika's belangrijkste architect en ontwierp meer dan 1.000 structuren tijdens zijn 70-jarige carrière. Zijn filosofie van organische architectuur, geëxemplificeerd in werken zoals Fallingwater (1935), benadrukte de harmonie tussen mensheid en omgeving."
        }
      },
      {
        question: {
          en: "On June 8, 1949, which dystopian novel by George Orwell was published?",
          es: "El 8 de junio de 1949, ¿qué novela distópica de George Orwell fue publicada?",
          de: "Am 8. Juni 1949 wurde welcher dystopische Roman von George Orwell veröffentlicht?",
          nl: "Op 8 juni 1949 werd welke dystopische roman van George Orwell gepubliceerd?"
        },
        options: [
          {
            en: "Animal Farm",
            es: "Rebelión en la Granja",
            de: "Farm der Tiere",
            nl: "Dierenboerderij"
          },
          {
            en: "Brave New World",
            es: "Un Mundo Feliz",
            de: "Schöne Neue Welt",
            nl: "Heerlijke Nieuwe Wereld"
          },
          {
            en: "1984",
            es: "1984",
            de: "1984",
            nl: "1984"
          },
          {
            en: "Fahrenheit 451",
            es: "Fahrenheit 451",
            de: "Fahrenheit 451",
            nl: "Fahrenheit 451"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "George Orwell's novel '1984' was published on June 8, 1949. This dystopian masterpiece depicts a totalitarian society under constant surveillance, where the government controls every aspect of life. Terms like 'Big Brother,' 'thoughtcrime,' and 'Newspeak' from the novel have become part of modern language when discussing government surveillance and authoritarianism.",
          es: "La novela '1984' de George Orwell fue publicada el 8 de junio de 1949. Esta obra maestra distópica retrata una sociedad totalitaria bajo vigilancia constante, donde el gobierno controla cada aspecto de la vida. Términos como 'Gran Hermano,' 'crimental' y 'neolengua' de la novela se han convertido en parte del lenguaje moderno al discutir la vigilancia gubernamental y el autoritarismo.",
          de: "George Orwells Roman '1984' wurde am 8. Juni 1949 veröffentlicht. Dieses dystopische Meisterwerk beschreibt eine totalitäre Gesellschaft unter ständiger Überwachung, in der die Regierung jeden Aspekt des Lebens kontrolliert. Begriffe wie 'Big Brother,' 'Gedankenverbrechen' und 'Neusprech' aus dem Roman sind Teil der modernen Sprache geworden, wenn über staatliche Überwachung und Autoritarismus diskutiert wird.",
          nl: "George Orwells roman '1984' werd gepubliceerd op 8 juni 1949. Dit dystopische meesterwerk beschrijft een totalitaire samenleving onder constante surveillance, waar de regering elk aspect van het leven controleert. Termen als 'Big Brother,' 'gedachtenmisdaad' en 'Nieuwspraak' uit de roman zijn onderdeel geworden van de moderne taal bij het bespreken van overheidstoezicht en autoritarisme."
        }
      },
      {
        question: {
          en: "On June 8, 793 AD, which event is considered the beginning of the Viking Age?",
          es: "El 8 de junio de 793 d.C., ¿qué evento se considera el comienzo de la Era Vikinga?",
          de: "Am 8. Juni 793 n. Chr. gilt welches Ereignis als Beginn der Wikingerzeit?",
          nl: "Op 8 juni 793 na Christus, welke gebeurtenis wordt beschouwd als het begin van de Vikingen-tijdperk?"
        },
        options: [
          {
            en: "The founding of Dublin",
            es: "La fundación de Dublín",
            de: "Die Gründung von Dublin",
            nl: "De oprichting van Dublin"
          },
          {
            en: "The raid on Lindisfarne",
            es: "El asalto a Lindisfarne",
            de: "Der Überfall auf Lindisfarne",
            nl: "De aanval op Lindisfarne"
          },
          {
            en: "The discovery of Iceland",
            es: "El descubrimiento de Islandia",
            de: "Die Entdeckung Islands",
            nl: "De ontdekking van IJsland"
          },
          {
            en: "The Battle of Hastings",
            es: "La Batalla de Hastings",
            de: "Die Schlacht von Hastings",
            nl: "De Slag bij Hastings"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Vikings raided the abbey at Lindisfarne in Northumbria on June 8, 793. This attack on one of the holiest sites in England shocked medieval Europe and is commonly accepted as marking the beginning of the Viking Age. The monastery's remote location and rich treasures made it an ideal target for Norse raiders.",
          es: "Los vikingos asaltaron la abadía de Lindisfarne en Northumbria el 8 de junio de 793. Este ataque a uno de los sitios más sagrados de Inglaterra conmocionó a la Europa medieval y se acepta comúnmente como el comienzo de la Era Vikinga. La ubicación remota del monasterio y sus ricos tesoros lo convirtieron en un objetivo ideal para los asaltantes nórdicos.",
          de: "Wikinger überfielen am 8. Juni 793 die Abtei in Lindisfarne in Northumbria. Dieser Angriff auf eine der heiligsten Stätten Englands schockierte das mittelalterliche Europa und wird allgemein als Beginn der Wikingerzeit akzeptiert. Die abgelegene Lage des Klosters und seine reichen Schätze machten es zu einem idealen Ziel für nordische Räuber.",
          nl: "Vikingen vielen op 8 juni 793 de abdij in Lindisfarne in Northumbria aan. Deze aanval op een van de heiligste plaatsen in Engeland schokte het middeleeuwse Europa en wordt algemeen aanvaard als het begin van de Vikingtijd. De afgelegen locatie van het klooster en zijn rijke schatten maakten het een ideaal doelwit voor Noorse plunderaars."
        }
      },
      {
        question: {
          en: "On June 8, 1972, which iconic photograph from the Vietnam War was taken?",
          es: "El 8 de junio de 1972, ¿qué fotografía icónica de la Guerra de Vietnam fue tomada?",
          de: "Am 8. Juni 1972 wurde welches ikonische Foto aus dem Vietnamkrieg aufgenommen?",
          nl: "Op 8 juni 1972 werd welke iconische foto van de Vietnamoorlog genomen?"
        },
        options: [
          {
            en: "The flag-raising on Iwo Jima",
            es: "El izamiento de la bandera en Iwo Jima",
            de: "Die Flaggenhissung auf Iwo Jima",
            nl: "Het hijsen van de vlag op Iwo Jima"
          },
          {
            en: "The napalm girl (Phan Thị Kim Phúc)",
            es: "La niña del napalm (Phan Thị Kim Phúc)",
            de: "Das Napalm-Mädchen (Phan Thị Kim Phúc)",
            nl: "Het napalmmeisje (Phan Thị Kim Phúc)"
          },
          {
            en: "The execution of a Viet Cong prisoner",
            es: "La ejecución de un prisionero del Viet Cong",
            de: "Die Hinrichtung eines Vietcong-Gefangenen",
            nl: "De executie van een Vietcong-gevangene"
          },
          {
            en: "The burning monk",
            es: "El monje en llamas",
            de: "Der brennende Mönch",
            nl: "De brandende monnik"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 8, 1972, Associated Press photographer Nick Ut captured an iconic image of nine-year-old Phan Thị Kim Phúc running from a napalm attack during the Vietnam War. The Pulitzer Prize-winning photograph, showing the girl's burns and terror, became one of the most powerful anti-war images and helped turn public opinion against the war.",
          es: "El 8 de junio de 1972, el fotógrafo de Associated Press Nick Ut capturó una imagen icónica de Phan Thị Kim Phúc, de nueve años, huyendo de un ataque de napalm durante la Guerra de Vietnam. La fotografía ganadora del Premio Pulitzer, que muestra las quemaduras y el terror de la niña, se convirtió en una de las imágenes antibélicas más poderosas y ayudó a cambiar la opinión pública contra la guerra.",
          de: "Am 8. Juni 1972 machte der Fotograf Nick Ut von Associated Press ein ikonisches Bild der neunjährigen Phan Thị Kim Phúc, die vor einem Napalmangriff während des Vietnamkriegs floh. Das mit dem Pulitzer-Preis ausgezeichnete Foto, das die Verbrennungen und den Terror des Mädchens zeigt, wurde zu einem der mächtigsten Antikriegsbilder und half, die öffentliche Meinung gegen den Krieg zu wenden.",
          nl: "Op 8 juni 1972 nam Associated Press-fotograaf Nick Ut een iconische foto van de negenjarige Phan Thị Kim Phúc die vluchtte voor een napalmaanval tijdens de Vietnamoorlog. De Pulitzer Prize-winnende foto, die de brandwonden en terreur van het meisje toont, werd een van de krachtigste anti-oorlogsbeelden en hielp de publieke opinie tegen de oorlog te keren."
        }
      },
      {
        question: {
          en: "On June 8, 1789, which American Founding Father introduced the proposed Bill of Rights to Congress?",
          es: "El 8 de junio de 1789, ¿qué Padre Fundador estadounidense presentó la propuesta de Declaración de Derechos al Congreso?",
          de: "Am 8. Juni 1789 stellte welcher amerikanische Gründervater die vorgeschlagene Bill of Rights dem Kongress vor?",
          nl: "Op 8 juni 1789 introduceerde welke Amerikaanse Grondlegger de voorgestelde Bill of Rights aan het Congres?"
        },
        options: [
          {
            en: "George Washington",
            es: "George Washington",
            de: "George Washington",
            nl: "George Washington"
          },
          {
            en: "Thomas Jefferson",
            es: "Thomas Jefferson",
            de: "Thomas Jefferson",
            nl: "Thomas Jefferson"
          },
          {
            en: "James Madison",
            es: "James Madison",
            de: "James Madison",
            nl: "James Madison"
          },
          {
            en: "Benjamin Franklin",
            es: "Benjamin Franklin",
            de: "Benjamin Franklin",
            nl: "Benjamin Franklin"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "James Madison introduced the proposed Bill of Rights to the United States Congress on June 8, 1789. These first ten amendments to the Constitution guarantee fundamental rights and freedoms, including freedom of speech, religion, and the press. Madison's work on the Bill of Rights earned him the title 'Father of the Constitution.'",
          es: "James Madison presentó la propuesta de Declaración de Derechos al Congreso de los Estados Unidos el 8 de junio de 1789. Estas primeras diez enmiendas a la Constitución garantizan derechos y libertades fundamentales, incluida la libertad de expresión, religión y prensa. El trabajo de Madison en la Declaración de Derechos le valió el título de 'Padre de la Constitución'.",
          de: "James Madison stellte am 8. Juni 1789 die vorgeschlagene Bill of Rights dem Kongress der Vereinigten Staaten vor. Diese ersten zehn Zusatzartikel zur Verfassung garantieren grundlegende Rechte und Freiheiten, einschließlich der Meinungs-, Religions- und Pressefreiheit. Madisons Arbeit an der Bill of Rights brachte ihm den Titel 'Vater der Verfassung' ein.",
          nl: "James Madison introduceerde de voorgestelde Bill of Rights aan het Congres van de Verenigde Staten op 8 juni 1789. Deze eerste tien amendementen op de Grondwet garanderen fundamentele rechten en vrijheden, waaronder vrijheid van meningsuiting, religie en pers. Madisons werk aan de Bill of Rights leverde hem de titel 'Vader van de Grondwet' op."
        }
      }
    ],

    // Day 9 - June 9th: Donald Duck and Historical Events
    day9: [
      {
        question: {
          en: "On June 9, 1934, which beloved Disney character made their first screen debut?",
          es: "El 9 de junio de 1934, ¿qué querido personaje de Disney hizo su primera aparición en pantalla?",
          de: "Am 9. Juni 1934 hatte welche beliebte Disney-Figur ihren ersten Auftritt auf der Leinwand?",
          nl: "Op 9 juni 1934 maakte welk geliefd Disney-personage hun eerste optreden op het scherm?"
        },
        options: [
          {
            en: "Mickey Mouse",
            es: "Mickey Mouse",
            de: "Mickey Mouse",
            nl: "Mickey Mouse"
          },
          {
            en: "Donald Duck",
            es: "Pato Donald",
            de: "Donald Duck",
            nl: "Donald Duck"
          },
          {
            en: "Goofy",
            es: "Goofy",
            de: "Goofy",
            nl: "Goofy"
          },
          {
            en: "Pluto",
            es: "Pluto",
            de: "Pluto",
            nl: "Pluto"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Donald Duck made his first screen debut on June 9, 1934, in the Silly Symphony cartoon 'The Wise Little Hen.' With his distinctive voice provided by Clarence Nash, Donald quickly became an iconic character. He has appeared in more films than any other Disney character and is the most published comic book character in the world outside of the superhero genre.",
          es: "Pato Donald hizo su primera aparición en pantalla el 9 de junio de 1934, en el dibujo animado Silly Symphony 'La Gallina Sabia.' Con su distintiva voz proporcionada por Clarence Nash, Donald rápidamente se convirtió en un personaje icónico. Ha aparecido en más películas que cualquier otro personaje de Disney y es el personaje de cómic más publicado en el mundo fuera del género de superhéroes.",
          de: "Donald Duck hatte am 9. Juni 1934 seinen ersten Auftritt im Silly Symphony-Zeichentrickfilm 'Die kluge kleine Henne.' Mit seiner unverwechselbaren Stimme von Clarence Nash wurde Donald schnell zu einer ikonischen Figur. Er ist in mehr Filmen aufgetreten als jede andere Disney-Figur und ist die am meisten veröffentlichte Comic-Figur der Welt außerhalb des Superhelden-Genres.",
          nl: "Donald Duck maakte zijn eerste optreden op 9 juni 1934 in de Silly Symphony cartoon 'The Wise Little Hen.' Met zijn karakteristieke stem verzorgd door Clarence Nash, werd Donald snel een iconisch personage. Hij is in meer films verschenen dan enig ander Disney-personage en is het meest gepubliceerde stripfiguur ter wereld buiten het superheldgenre."
        }
      },
      {
        question: {
          en: "On June 9, 1954, which U.S. Senator was confronted with the famous question: 'Have you no sense of decency, sir?'",
          es: "El 9 de junio de 1954, ¿a qué senador estadounidense se le hizo la famosa pregunta: '¿No tiene sentido de la decencia, señor?'",
          de: "Am 9. Juni 1954 wurde welchem US-Senator die berühmte Frage gestellt: 'Haben Sie keinen Anstand, Sir?'",
          nl: "Op 9 juni 1954 werd welke Amerikaanse senator geconfronteerd met de beroemde vraag: 'Heeft u geen gevoel voor fatsoen, meneer?'"
        },
        options: [
          {
            en: "John F. Kennedy",
            es: "John F. Kennedy",
            de: "John F. Kennedy",
            nl: "John F. Kennedy"
          },
          {
            en: "Lyndon B. Johnson",
            es: "Lyndon B. Johnson",
            de: "Lyndon B. Johnson",
            nl: "Lyndon B. Johnson"
          },
          {
            en: "Joseph McCarthy",
            es: "Joseph McCarthy",
            de: "Joseph McCarthy",
            nl: "Joseph McCarthy"
          },
          {
            en: "Robert F. Kennedy",
            es: "Robert F. Kennedy",
            de: "Robert F. Kennedy",
            nl: "Robert F. Kennedy"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "On June 9, 1954, during the Army-McCarthy hearings, attorney Joseph Welch confronted Senator Joseph McCarthy with the famous line 'Have you no sense of decency, sir, at long last?' This moment marked a turning point in McCarthy's anti-communist witch hunts, as public opinion began to turn against him and the practice of McCarthyism.",
          es: "El 9 de junio de 1954, durante las audiencias Army-McCarthy, el abogado Joseph Welch confrontó al Senador Joseph McCarthy con la famosa frase '¿No tiene sentido de la decencia, señor, finalmente?' Este momento marcó un punto de inflexión en las cazas de brujas anticomunistas de McCarthy, ya que la opinión pública comenzó a volverse en su contra y la práctica del macartismo.",
          de: "Am 9. Juni 1954 konfrontierte der Anwalt Joseph Welch während der Army-McCarthy-Anhörungen Senator Joseph McCarthy mit der berühmten Zeile 'Haben Sie keinen Anstand, Sir, endlich?' Dieser Moment markierte einen Wendepunkt in McCarthys antikommunistischen Hexenjagden, da sich die öffentliche Meinung gegen ihn und die Praxis des McCarthyismus zu wenden begann.",
          nl: "Op 9 juni 1954 confronteerde advocaat Joseph Welch tijdens de Army-McCarthy-hoorzittingen Senator Joseph McCarthy met de beroemde zin 'Heeft u geen gevoel voor fatsoen, meneer, eindelijk?' Dit moment markeerde een keerpunt in McCarthy's anticommunistische heksenjachten, aangezien de publieke opinie zich tegen hem en de praktijk van McCarthyisme begon te keren."
        }
      },
      {
        question: {
          en: "On June 9, 1928, who became the first woman to fly across the Atlantic Ocean as a passenger?",
          es: "El 9 de junio de 1928, ¿quién se convirtió en la primera mujer en volar a través del Océano Atlántico como pasajera?",
          de: "Am 9. Juni 1928 wurde wer die erste Frau, die als Passagierin über den Atlantik flog?",
          nl: "Op 9 juni 1928 werd wie de eerste vrouw die als passagier over de Atlantische Oceaan vloog?"
        },
        options: [
          {
            en: "Bessie Coleman",
            es: "Bessie Coleman",
            de: "Bessie Coleman",
            nl: "Bessie Coleman"
          },
          {
            en: "Amelia Earhart",
            es: "Amelia Earhart",
            de: "Amelia Earhart",
            nl: "Amelia Earhart"
          },
          {
            en: "Harriet Quimby",
            es: "Harriet Quimby",
            de: "Harriet Quimby",
            nl: "Harriet Quimby"
          },
          {
            en: "Jacqueline Cochran",
            es: "Jacqueline Cochran",
            de: "Jacqueline Cochran",
            nl: "Jacqueline Cochran"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Amelia Earhart became the first woman to fly across the Atlantic Ocean on June 9, 1928, though she was a passenger on this historic flight. Four years later, in 1932, she would become the first woman to fly solo across the Atlantic. Her achievements inspired generations of female aviators and broke barriers for women in aviation.",
          es: "Amelia Earhart se convirtió en la primera mujer en volar a través del Océano Atlántico el 9 de junio de 1928, aunque fue pasajera en este vuelo histórico. Cuatro años después, en 1932, se convertiría en la primera mujer en volar en solitario a través del Atlántico. Sus logros inspiraron a generaciones de aviadoras y rompieron barreras para las mujeres en la aviación.",
          de: "Amelia Earhart wurde am 9. Juni 1928 die erste Frau, die über den Atlantik flog, obwohl sie bei diesem historischen Flug Passagierin war. Vier Jahre später, 1932, wurde sie die erste Frau, die allein über den Atlantik flog. Ihre Leistungen inspirierten Generationen weiblicher Pilotinnen und brachen Barrieren für Frauen in der Luftfahrt.",
          nl: "Amelia Earhart werd de eerste vrouw die op 9 juni 1928 over de Atlantische Oceaan vloog, hoewel ze passagier was op deze historische vlucht. Vier jaar later, in 1932, zou ze de eerste vrouw worden die solo over de Atlantische Oceaan vloog. Haar prestaties inspireerden generaties vrouwelijke piloten en doorbraken barrières voor vrouwen in de luchtvaart."
        }
      },
      {
        question: {
          en: "On June 9, 1968, U.S. President Lyndon B. Johnson declared a national day of mourning for which assassinated political leader?",
          es: "El 9 de junio de 1968, el presidente estadounidense Lyndon B. Johnson declaró un día nacional de luto por ¿qué líder político asesinado?",
          de: "Am 9. Juni 1968 erklärte US-Präsident Lyndon B. Johnson einen nationalen Trauertag für welchen ermordeten politischen Führer?",
          nl: "Op 9 juni 1968 riep de Amerikaanse president Lyndon B. Johnson een nationale rouwdag uit voor welke vermoorde politieke leider?"
        },
        options: [
          {
            en: "Martin Luther King Jr.",
            es: "Martin Luther King Jr.",
            de: "Martin Luther King Jr.",
            nl: "Martin Luther King Jr."
          },
          {
            en: "Robert F. Kennedy",
            es: "Robert F. Kennedy",
            de: "Robert F. Kennedy",
            nl: "Robert F. Kennedy"
          },
          {
            en: "Malcolm X",
            es: "Malcolm X",
            de: "Malcolm X",
            nl: "Malcolm X"
          },
          {
            en: "Medgar Evers",
            es: "Medgar Evers",
            de: "Medgar Evers",
            nl: "Medgar Evers"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 9, 1968, President Lyndon B. Johnson declared a national day of mourning for Robert F. Kennedy, who had been assassinated on June 5, 1968, shortly after winning the California Democratic presidential primary. RFK was shot by Sirhan Sirhan at the Ambassador Hotel in Los Angeles and died the next day, deepening the nation's trauma just months after the assassination of Martin Luther King Jr.",
          es: "El 9 de junio de 1968, el presidente Lyndon B. Johnson declaró un día nacional de luto por Robert F. Kennedy, quien había sido asesinado el 5 de junio de 1968, poco después de ganar las primarias presidenciales demócratas de California. RFK fue disparado por Sirhan Sirhan en el Hotel Ambassador en Los Ángeles y murió al día siguiente, profundizando el trauma de la nación solo meses después del asesinato de Martin Luther King Jr.",
          de: "Am 9. Juni 1968 erklärte Präsident Lyndon B. Johnson einen nationalen Trauertag für Robert F. Kennedy, der am 5. Juni 1968 ermordet worden war, kurz nachdem er die demokratische Präsidentschaftsvorwahl in Kalifornien gewonnen hatte. RFK wurde von Sirhan Sirhan im Ambassador Hotel in Los Angeles erschossen und starb am nächsten Tag, was das Trauma der Nation nur Monate nach der Ermordung von Martin Luther King Jr. vertiefte.",
          nl: "Op 9 juni 1968 riep president Lyndon B. Johnson een nationale rouwdag uit voor Robert F. Kennedy, die op 5 juni 1968 was vermoord, kort nadat hij de Democratische presidentiële voorverkiezing in Californië had gewonnen. RFK werd neergeschoten door Sirhan Sirhan in het Ambassador Hotel in Los Angeles en overleed de volgende dag, waardoor het trauma van de natie werd verdiept, slechts maanden na de moord op Martin Luther King Jr."
        }
      },
      {
        question: {
          en: "On June 9, 1960, what scientific achievement occurred at the Lawrence Livermore National Laboratory?",
          es: "El 9 de junio de 1960, ¿qué logro científico ocurrió en el Laboratorio Nacional Lawrence Livermore?",
          de: "Am 9. Juni 1960 welche wissenschaftliche Errungenschaft ereignete sich im Lawrence Livermore National Laboratory?",
          nl: "Op 9 juni 1960 vond welke wetenschappelijke prestatie plaats in het Lawrence Livermore National Laboratory?"
        },
        options: [
          {
            en: "First successful nuclear fission experiment",
            es: "Primer experimento exitoso de fisión nuclear",
            de: "Erstes erfolgreiches Kernspaltungsexperiment",
            nl: "Eerste succesvolle nucleaire splijtingsexperiment"
          },
          {
            en: "First successful controlled nuclear fusion reaction",
            es: "Primera reacción de fusión nuclear controlada exitosa",
            de: "Erste erfolgreiche kontrollierte Kernfusionsreaktion",
            nl: "Eerste succesvolle gecontroleerde kernfusiereactie"
          },
          {
            en: "Discovery of a new element",
            es: "Descubrimiento de un nuevo elemento",
            de: "Entdeckung eines neuen Elements",
            nl: "Ontdekking van een nieuw element"
          },
          {
            en: "First particle accelerator test",
            es: "Primera prueba de acelerador de partículas",
            de: "Erster Teilchenbeschleunigertest",
            nl: "Eerste deeltjesversnellertest"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 9, 1960, the first successful controlled nuclear fusion reaction took place at the Lawrence Livermore National Laboratory in California. Nuclear fusion, the process that powers the sun, involves combining light atomic nuclei to release enormous amounts of energy. This achievement represented a major step toward potential clean energy production, though practical fusion power remains an ongoing challenge.",
          es: "El 9 de junio de 1960, tuvo lugar la primera reacción de fusión nuclear controlada exitosa en el Laboratorio Nacional Lawrence Livermore en California. La fusión nuclear, el proceso que alimenta al sol, implica combinar núcleos atómicos ligeros para liberar enormes cantidades de energía. Este logro representó un paso importante hacia la producción potencial de energía limpia, aunque la energía de fusión práctica sigue siendo un desafío continuo.",
          de: "Am 9. Juni 1960 fand die erste erfolgreiche kontrollierte Kernfusionsreaktion im Lawrence Livermore National Laboratory in Kalifornien statt. Kernfusion, der Prozess, der die Sonne antreibt, beinhaltet die Kombination leichter Atomkerne, um enorme Energiemengen freizusetzen. Diese Errungenschaft stellte einen wichtigen Schritt in Richtung potenzieller sauberer Energieerzeugung dar, obwohl praktische Fusionsenergie eine anhaltende Herausforderung bleibt.",
          nl: "Op 9 juni 1960 vond de eerste succesvolle gecontroleerde kernfusiereactie plaats in het Lawrence Livermore National Laboratory in Californië. Kernfusie, het proces dat de zon aandrijft, omvat het combineren van lichte atoomkernen om enorme hoeveelheden energie vrij te maken. Deze prestatie vertegenwoordigde een belangrijke stap naar potentiële schone energieproductie, hoewel praktische fusie-energie een voortdurende uitdaging blijft."
        }
      }
    ],

    // Day 10 - June 10th: Alcoholics Anonymous and Historical Events
    day10: [
      {
        question: {
          en: "On June 10, 1935, which important support organization was founded in Akron, Ohio?",
          es: "El 10 de junio de 1935, ¿qué importante organización de apoyo fue fundada en Akron, Ohio?",
          de: "Am 10. Juni 1935 wurde welche wichtige Unterstützungsorganisation in Akron, Ohio, gegründet?",
          nl: "Op 10 juni 1935 werd welke belangrijke ondersteuningsorganisatie opgericht in Akron, Ohio?"
        },
        options: [
          {
            en: "The Red Cross",
            es: "La Cruz Roja",
            de: "Das Rote Kreuz",
            nl: "Het Rode Kruis"
          },
          {
            en: "Alcoholics Anonymous",
            es: "Alcohólicos Anónimos",
            de: "Anonyme Alkoholiker",
            nl: "Anonieme Alcoholisten"
          },
          {
            en: "The Salvation Army",
            es: "El Ejército de Salvación",
            de: "Die Heilsarmee",
            nl: "Het Leger des Heils"
          },
          {
            en: "Rotary International",
            es: "Rotary Internacional",
            de: "Rotary International",
            nl: "Rotary International"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Alcoholics Anonymous (AA) was founded on June 10, 1935, when Bill Wilson and Dr. Robert Smith had their last drink together in Akron, Ohio. They developed a 12-step program that became the foundation of America's self-help culture. Today, there are more than 60,000 local groups in the United States with nearly two million members, and the model has been adapted for many other support groups.",
          es: "Alcohólicos Anónimos (AA) fue fundado el 10 de junio de 1935, cuando Bill Wilson y el Dr. Robert Smith tomaron su última bebida juntos en Akron, Ohio. Desarrollaron un programa de 12 pasos que se convirtió en la base de la cultura de autoayuda de América. Hoy, hay más de 60,000 grupos locales en los Estados Unidos con casi dos millones de miembros, y el modelo se ha adaptado para muchos otros grupos de apoyo.",
          de: "Anonyme Alkoholiker (AA) wurde am 10. Juni 1935 gegründet, als Bill Wilson und Dr. Robert Smith ihren letzten Drink zusammen in Akron, Ohio, hatten. Sie entwickelten ein 12-Schritte-Programm, das zur Grundlage der amerikanischen Selbsthilfekultur wurde. Heute gibt es mehr als 60.000 lokale Gruppen in den Vereinigten Staaten mit fast zwei Millionen Mitgliedern, und das Modell wurde für viele andere Selbsthilfegruppen angepasst.",
          nl: "Anonieme Alcoholisten (AA) werd opgericht op 10 juni 1935, toen Bill Wilson en Dr. Robert Smith hun laatste drankje samen dronken in Akron, Ohio. Ze ontwikkelden een 12-stappenprogramma dat de basis werd van Amerika's zelfhulpcultuur. Vandaag zijn er meer dan 60.000 lokale groepen in de Verenigde Staten met bijna twee miljoen leden, en het model is aangepast voor veel andere steungroepen."
        }
      },
      {
        question: {
          en: "On June 10, 1190, which Holy Roman Emperor drowned during the Third Crusade?",
          es: "El 10 de junio de 1190, ¿qué emperador del Sacro Imperio Romano se ahogó durante la Tercera Cruzada?",
          de: "Am 10. Juni 1190 ertrank welcher Kaiser des Heiligen Römischen Reiches während des Dritten Kreuzzugs?",
          nl: "Op 10 juni 1190 verdronk welke keizer van het Heilige Roomse Rijk tijdens de Derde Kruistocht?"
        },
        options: [
          {
            en: "Charlemagne",
            es: "Carlomagno",
            de: "Karl der Große",
            nl: "Karel de Grote"
          },
          {
            en: "Otto I",
            es: "Otón I",
            de: "Otto I.",
            nl: "Otto I"
          },
          {
            en: "Frederick I Barbarossa",
            es: "Federico I Barbarroja",
            de: "Friedrich I. Barbarossa",
            nl: "Frederik I Barbarossa"
          },
          {
            en: "Henry IV",
            es: "Enrique IV",
            de: "Heinrich IV.",
            nl: "Hendrik IV"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Frederick I Barbarossa, Holy Roman Emperor, drowned in the river Saleph (in modern-day Turkey) on June 10, 1190, while leading an army to Jerusalem during the Third Crusade. His death was a devastating blow to the Crusade, as his experienced army was left without leadership. Most of his troops returned home, and those who continued faced numerous challenges without their emperor.",
          es: "Federico I Barbarroja, emperador del Sacro Imperio Romano, se ahogó en el río Saleph (en la actual Turquía) el 10 de junio de 1190, mientras lideraba un ejército hacia Jerusalén durante la Tercera Cruzada. Su muerte fue un golpe devastador para la Cruzada, ya que su experimentado ejército quedó sin liderazgo. La mayoría de sus tropas regresaron a casa, y aquellos que continuaron enfrentaron numerosos desafíos sin su emperador.",
          de: "Friedrich I. Barbarossa, Kaiser des Heiligen Römischen Reiches, ertrank am 10. Juni 1190 im Fluss Saleph (in der heutigen Türkei), während er eine Armee nach Jerusalem während des Dritten Kreuzzugs führte. Sein Tod war ein verheerender Schlag für den Kreuzzug, da seine erfahrene Armee ohne Führung blieb. Die meisten seiner Truppen kehrten nach Hause zurück, und diejenigen, die weitermachten, standen ohne ihren Kaiser vor zahlreichen Herausforderungen.",
          nl: "Frederik I Barbarossa, keizer van het Heilige Roomse Rijk, verdronk in de rivier Saleph (in het huidige Turkije) op 10 juni 1190, terwijl hij een leger naar Jeruzalem leidde tijdens de Derde Kruistocht. Zijn dood was een verwoestende slag voor de Kruistocht, aangezien zijn ervaren leger zonder leiding kwam. De meeste van zijn troepen keerden terug naar huis, en degenen die doorgingen, werden geconfronteerd met tal van uitdagingen zonder hun keizer."
        }
      },
      {
        question: {
          en: "On June 10, 1692, who became the first person executed during the Salem witch trials?",
          es: "El 10 de junio de 1692, ¿quién se convirtió en la primera persona ejecutada durante los juicios de brujas de Salem?",
          de: "Am 10. Juni 1692 wurde wer die erste Person, die während der Hexenprozesse von Salem hingerichtet wurde?",
          nl: "Op 10 juni 1692 werd wie de eerste persoon die werd geëxecuteerd tijdens de heksenprocessen van Salem?"
        },
        options: [
          {
            en: "Sarah Good",
            es: "Sarah Good",
            de: "Sarah Good",
            nl: "Sarah Good"
          },
          {
            en: "Bridget Bishop",
            es: "Bridget Bishop",
            de: "Bridget Bishop",
            nl: "Bridget Bishop"
          },
          {
            en: "Rebecca Nurse",
            es: "Rebecca Nurse",
            de: "Rebecca Nurse",
            nl: "Rebecca Nurse"
          },
          {
            en: "Tituba",
            es: "Tituba",
            de: "Tituba",
            nl: "Tituba"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bridget Bishop became the first person to be hanged during the Salem witch trials on June 10, 1692, in the Massachusetts Bay Colony. She was accused of witchcraft based on spectral evidence and gossip from her neighbors. Her execution marked the beginning of a dark period in American colonial history, during which 19 people were hanged and several others died in prison before the hysteria ended in 1693.",
          es: "Bridget Bishop se convirtió en la primera persona en ser ahorcada durante los juicios de brujas de Salem el 10 de junio de 1692, en la Colonia de la Bahía de Massachusetts. Fue acusada de brujería basándose en evidencia espectral y chismes de sus vecinos. Su ejecución marcó el comienzo de un período oscuro en la historia colonial estadounidense, durante el cual 19 personas fueron ahorcadas y varias otras murieron en prisión antes de que terminara la histeria en 1693.",
          de: "Bridget Bishop wurde am 10. Juni 1692 die erste Person, die während der Hexenprozesse von Salem in der Massachusetts Bay Colony gehängt wurde. Sie wurde aufgrund spektraler Beweise und Klatsch von ihren Nachbarn der Hexerei beschuldigt. Ihre Hinrichtung markierte den Beginn einer dunklen Periode in der amerikanischen Kolonialgeschichte, während der 19 Menschen gehängt und mehrere andere im Gefängnis starben, bevor die Hysterie 1693 endete.",
          nl: "Bridget Bishop werd de eerste persoon die werd opgehangen tijdens de heksenprocessen van Salem op 10 juni 1692, in de Massachusetts Bay Colony. Ze werd beschuldigd van hekserij op basis van spectraal bewijs en roddels van haar buren. Haar executie markeerde het begin van een donkere periode in de Amerikaanse koloniale geschiedenis, waarin 19 mensen werden opgehangen en verscheidene anderen in de gevangenis stierven voordat de hysterie in 1693 eindigde."
        }
      },
      {
        question: {
          en: "On June 10, 1940, which country declared war on France and the United Kingdom during World War II?",
          es: "El 10 de junio de 1940, ¿qué país declaró la guerra a Francia y el Reino Unido durante la Segunda Guerra Mundial?",
          de: "Am 10. Juni 1940 erklärte welches Land Frankreich und dem Vereinigten Königreich während des Zweiten Weltkriegs den Krieg?",
          nl: "Op 10 juni 1940 verklaarde welk land de oorlog aan Frankrijk en het Verenigd Koninkrijk tijdens de Tweede Wereldoorlog?"
        },
        options: [
          {
            en: "Spain",
            es: "España",
            de: "Spanien",
            nl: "Spanje"
          },
          {
            en: "Japan",
            es: "Japón",
            de: "Japan",
            nl: "Japan"
          },
          {
            en: "Fascist Italy",
            es: "Italia Fascista",
            de: "Faschistisches Italien",
            nl: "Fascistisch Italië"
          },
          {
            en: "Soviet Union",
            es: "Unión Soviética",
            de: "Sowjetunion",
            nl: "Sovjet-Unie"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Fascist Italy, led by Benito Mussolini, declared war on France and the United Kingdom on June 10, 1940, during World War II. Mussolini timed this declaration to coincide with Germany's imminent victory over France, hoping to gain territorial concessions. Italy then began an invasion of southern France, marking its full entry into the war on the side of Nazi Germany.",
          es: "Italia Fascista, liderada por Benito Mussolini, declaró la guerra a Francia y el Reino Unido el 10 de junio de 1940, durante la Segunda Guerra Mundial. Mussolini programó esta declaración para que coincidiera con la inminente victoria de Alemania sobre Francia, esperando obtener concesiones territoriales. Italia luego comenzó una invasión del sur de Francia, marcando su entrada completa en la guerra del lado de la Alemania nazi.",
          de: "Das faschistische Italien unter Benito Mussolini erklärte am 10. Juni 1940 während des Zweiten Weltkriegs Frankreich und dem Vereinigten Königreich den Krieg. Mussolini timed diese Erklärung so, dass sie mit dem bevorstehenden Sieg Deutschlands über Frankreich zusammenfiel, in der Hoffnung auf territoriale Zugeständnisse. Italien begann dann eine Invasion in Südfrankreich und markierte damit seinen vollständigen Eintritt in den Krieg an der Seite Nazi-Deutschlands.",
          nl: "Fascistisch Italië, geleid door Benito Mussolini, verklaarde op 10 juni 1940 de oorlog aan Frankrijk en het Verenigd Koninkrijk tijdens de Tweede Wereldoorlog. Mussolini timede deze verklaring om samen te vallen met de aanstaande overwinning van Duitsland op Frankrijk, in de hoop territoriale concessies te verkrijgen. Italië begon vervolgens een invasie van Zuid-Frankrijk, wat zijn volledige toetreding tot de oorlog aan de zijde van nazi-Duitsland markeerde."
        }
      },
      {
        question: {
          en: "On June 10, 1967, which major military conflict ended after six days of fighting?",
          es: "El 10 de junio de 1967, ¿qué importante conflicto militar terminó después de seis días de combate?",
          de: "Am 10. Juni 1967 endete welcher große militärische Konflikt nach sechs Tagen des Kampfes?",
          nl: "Op 10 juni 1967 eindigde welk groot militair conflict na zes dagen van gevechten?"
        },
        options: [
          {
            en: "The Korean War",
            es: "La Guerra de Corea",
            de: "Der Koreakrieg",
            nl: "De Koreaanse Oorlog"
          },
          {
            en: "The Six-Day War",
            es: "La Guerra de los Seis Días",
            de: "Der Sechstagekrieg",
            nl: "De Zesdaagse Oorlog"
          },
          {
            en: "The Yom Kippur War",
            es: "La Guerra del Yom Kippur",
            de: "Der Jom-Kippur-Krieg",
            nl: "De Yom Kippoer-oorlog"
          },
          {
            en: "The Falklands War",
            es: "La Guerra de las Malvinas",
            de: "Der Falklandkrieg",
            nl: "De Falklandoorlog"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Six-Day War was fought between Israel and the neighboring states of Egypt, Jordan, and Syria from June 5-10, 1967. In a swift and decisive military campaign, Israel captured the Sinai Peninsula, Gaza Strip, West Bank, East Jerusalem, and Golan Heights. The war dramatically reshaped the Middle East and continues to influence the region's politics today.",
          es: "La Guerra de los Seis Días se libró entre Israel y los estados vecinos de Egipto, Jordania y Siria del 5 al 10 de junio de 1967. En una campaña militar rápida y decisiva, Israel capturó la Península del Sinaí, la Franja de Gaza, Cisjordania, Jerusalén Este y los Altos del Golán. La guerra remodeló dramáticamente el Medio Oriente y continúa influyendo en la política de la región hoy en día.",
          de: "Der Sechstagekrieg wurde vom 5. bis 10. Juni 1967 zwischen Israel und den Nachbarstaaten Ägypten, Jordanien und Syrien geführt. In einer schnellen und entscheidenden Militärkampagne eroberte Israel die Sinai-Halbinsel, den Gazastreifen, das Westjordanland, Ostjerusalem und die Golanhöhen. Der Krieg formte den Nahen Osten dramatisch um und beeinflusst die Politik der Region bis heute.",
          nl: "De Zesdaagse Oorlog werd gevoerd tussen Israël en de buurstaten Egypte, Jordanië en Syrië van 5-10 juni 1967. In een snelle en beslissende militaire campagne veroverde Israël het Sinaï-schiereiland, de Gazastrook, de Westelijke Jordaanoever, Oost-Jeruzalem en de Golanhoogten. De oorlog vormde het Midden-Oosten dramatisch om en blijft de politiek van de regio vandaag beïnvloeden."
        }
      }
    ],

    // Day 11 - June 11th: Historical Events
    day11: [
      {
        question: {
          en: "Which famous ocean explorer and filmmaker was born on June 11, 1910?",
          es: "¿Qué famoso explorador oceánico y cineasta nació el 11 de junio de 1910?",
          de: "Welcher berühmte Meeresforscher und Filmemacher wurde am 11. Juni 1910 geboren?",
          nl: "Welke beroemde oceaanverkenner en filmmaker werd geboren op 11 juni 1910?"
        },
        options: [
          {
            en: "Robert Ballard",
            es: "Robert Ballard",
            de: "Robert Ballard",
            nl: "Robert Ballard"
          },
          {
            en: "Jacques Cousteau",
            es: "Jacques Cousteau",
            de: "Jacques Cousteau",
            nl: "Jacques Cousteau"
          },
          {
            en: "Sylvia Earle",
            es: "Sylvia Earle",
            de: "Sylvia Earle",
            nl: "Sylvia Earle"
          },
          {
            en: "James Cameron",
            es: "James Cameron",
            de: "James Cameron",
            nl: "James Cameron"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jacques-Yves Cousteau was born on June 11, 1910, in France. He co-invented the Aqua-Lung (modern SCUBA equipment) and became one of the world's most famous oceanographers through his documentaries and books about marine life.",
          es: "Jacques-Yves Cousteau nació el 11 de junio de 1910 en Francia. Co-inventó el Aqua-Lung (equipo de buceo moderno) y se convirtió en uno de los oceanógrafos más famosos del mundo a través de sus documentales y libros sobre la vida marina.",
          de: "Jacques-Yves Cousteau wurde am 11. Juni 1910 in Frankreich geboren. Er erfand gemeinsam das Aqua-Lung (moderne Tauchausrüstung) und wurde durch seine Dokumentationen und Bücher über das Meeresleben zu einem der berühmtesten Ozeanographen der Welt.",
          nl: "Jacques-Yves Cousteau werd geboren op 11 juni 1910 in Frankrijk. Hij vond samen met anderen de Aqua-Lung uit (moderne duikuitrusting) en werd een van 's werelds beroemdste oceanografen door zijn documentaires en boeken over het zeeleven."
        }
      },
      {
        question: {
          en: "What major volcanic eruption began its explosive phase on June 11-12, 1991?",
          es: "¿Qué gran erupción volcánica comenzó su fase explosiva el 11-12 de junio de 1991?",
          de: "Welcher große Vulkanausbruch begann seine explosive Phase am 11.-12. Juni 1991?",
          nl: "Welke grote vulkaanuitbarsting begon zijn explosieve fase op 11-12 juni 1991?"
        },
        options: [
          {
            en: "Mount St. Helens",
            es: "Monte St. Helens",
            de: "Mount St. Helens",
            nl: "Mount St. Helens"
          },
          {
            en: "Mount Vesuvius",
            es: "Monte Vesubio",
            de: "Vesuv",
            nl: "Vesuvius"
          },
          {
            en: "Mount Pinatubo",
            es: "Monte Pinatubo",
            de: "Mount Pinatubo",
            nl: "Mount Pinatubo"
          },
          {
            en: "Mount Fuji",
            es: "Monte Fuji",
            de: "Fujisan",
            nl: "Mount Fuji"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Mount Pinatubo in the Philippines began its major explosive eruptions on June 12, 1991, culminating on June 15 in the second-largest volcanic eruption of the 20th century. Scientists successfully predicted the eruption, saving at least 5,000 lives.",
          es: "El Monte Pinatubo en Filipinas comenzó sus grandes erupciones explosivas el 12 de junio de 1991, culminando el 15 de junio en la segunda erupción volcánica más grande del siglo XX. Los científicos predijeron con éxito la erupción, salvando al menos 5,000 vidas.",
          de: "Der Mount Pinatubo auf den Philippinen begann seine großen explosiven Ausbrüche am 12. Juni 1991, die am 15. Juni im zweitgrößten Vulkanausbruch des 20. Jahrhunderts gipfelten. Wissenschaftler sagten den Ausbruch erfolgreich voraus und retteten mindestens 5.000 Leben.",
          nl: "Mount Pinatubo in de Filipijnen begon zijn grote explosieve uitbarstingen op 12 juni 1991, culminerend op 15 juni in de op een na grootste vulkaanuitbarsting van de 20e eeuw. Wetenschappers voorspelden de uitbarsting met succes en redden minstens 5.000 levens."
        }
      },
      {
        question: {
          en: "On June 11, 1963, which Buddhist monk self-immolated in protest against religious persecution?",
          es: "El 11 de junio de 1963, ¿qué monje budista se autoinmoló en protesta contra la persecución religiosa?",
          de: "Welcher buddhistische Mönch verbrannte sich am 11. Juni 1963 aus Protest gegen religiöse Verfolgung selbst?",
          nl: "Welke boeddhistische monnik verbrandde zichzelf op 11 juni 1963 uit protest tegen religieuze vervolging?"
        },
        options: [
          {
            en: "Dalai Lama",
            es: "Dalái Lama",
            de: "Dalai Lama",
            nl: "Dalai Lama"
          },
          {
            en: "Thich Quang Duc",
            es: "Thich Quang Duc",
            de: "Thich Quang Duc",
            nl: "Thich Quang Duc"
          },
          {
            en: "Thich Nhat Hanh",
            es: "Thich Nhat Hanh",
            de: "Thich Nhat Hanh",
            nl: "Thich Nhat Hanh"
          },
          {
            en: "Kodo Sawaki",
            es: "Kodo Sawaki",
            de: "Kodo Sawaki",
            nl: "Kodo Sawaki"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Thich Quang Duc, a Vietnamese Buddhist monk, set himself on fire in Saigon on June 11, 1963, to protest the persecution of Buddhists by South Vietnam's government. The iconic photograph of his act became a powerful symbol of protest.",
          es: "Thich Quang Duc, un monje budista vietnamita, se prendió fuego en Saigón el 11 de junio de 1963 para protestar contra la persecución de budistas por parte del gobierno de Vietnam del Sur. La icónica fotografía de su acto se convirtió en un poderoso símbolo de protesta.",
          de: "Thich Quang Duc, ein vietnamesischer buddhistischer Mönch, zündete sich am 11. Juni 1963 in Saigon an, um gegen die Verfolgung von Buddhisten durch die Regierung Südvietnams zu protestieren. Das ikonische Foto seiner Tat wurde zu einem mächtigen Symbol des Protests.",
          nl: "Thich Quang Duc, een Vietnamese boeddhistische monnik, stak zichzelf in brand in Saigon op 11 juni 1963 om te protesteren tegen de vervolging van boeddhisten door de regering van Zuid-Vietnam. De iconische foto van zijn daad werd een krachtig symbool van protest."
        }
      },
      {
        question: {
          en: "What revolutionary diving equipment did Jacques Cousteau co-invent that made underwater exploration accessible?",
          es: "¿Qué equipo revolucionario de buceo co-inventó Jacques Cousteau que hizo accesible la exploración submarina?",
          de: "Welche revolutionäre Tauchausrüstung erfand Jacques Cousteau mit, die die Unterwassererforschung zugänglich machte?",
          nl: "Welke revolutionaire duikuitrusting vond Jacques Cousteau mee uit die onderwater verkenning toegankelijk maakte?"
        },
        options: [
          {
            en: "Diving bell",
            es: "Campana de buceo",
            de: "Taucherglocke",
            nl: "Duikklok"
          },
          {
            en: "Aqua-Lung (SCUBA)",
            es: "Aqua-Lung (equipo de buceo autónomo)",
            de: "Aqua-Lung (Tauchgerät)",
            nl: "Aqua-Lung (duikuitrusting)"
          },
          {
            en: "Submarine",
            es: "Submarino",
            de: "U-Boot",
            nl: "Onderzeeër"
          },
          {
            en: "Snorkel",
            es: "Esnórquel",
            de: "Schnorchel",
            nl: "Snorkel"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Cousteau co-developed the Aqua-Lung, the first successful self-contained underwater breathing apparatus (SCUBA), which revolutionized ocean exploration. This invention allowed divers to explore underwater environments with unprecedented freedom and safety.",
          es: "Cousteau co-desarrolló el Aqua-Lung, el primer aparato de respiración subacuático autónomo exitoso (SCUBA), que revolucionó la exploración oceánica. Este invento permitió a los buceadores explorar entornos submarinos con libertad y seguridad sin precedentes.",
          de: "Cousteau entwickelte gemeinsam das Aqua-Lung, das erste erfolgreiche autonome Unterwasser-Atemgerät (SCUBA), das die Meeresforschung revolutionierte. Diese Erfindung ermöglichte es Tauchern, Unterwasserwelten mit beispielloser Freiheit und Sicherheit zu erkunden.",
          nl: "Cousteau ontwikkelde samen de Aqua-Lung, het eerste succesvolle zelfstandige onderwaterademhalingsapparaat (SCUBA), dat de oceaanverkenning revolutioneerde. Deze uitvinding stelde duikers in staat om onderwateromgevingen te verkennen met ongekende vrijheid en veiligheid."
        }
      },
      {
        question: {
          en: "On June 11, 1979, which legendary Western actor died at age 72?",
          es: "El 11 de junio de 1979, ¿qué legendario actor de westerns murió a los 72 años?",
          de: "Welcher legendäre Western-Schauspieler starb am 11. Juni 1979 im Alter von 72 Jahren?",
          nl: "Welke legendarische western-acteur stierf op 11 juni 1979 op 72-jarige leeftijd?"
        },
        options: [
          {
            en: "Clint Eastwood",
            es: "Clint Eastwood",
            de: "Clint Eastwood",
            nl: "Clint Eastwood"
          },
          {
            en: "Gary Cooper",
            es: "Gary Cooper",
            de: "Gary Cooper",
            nl: "Gary Cooper"
          },
          {
            en: "John Wayne",
            es: "John Wayne",
            de: "John Wayne",
            nl: "John Wayne"
          },
          {
            en: "James Stewart",
            es: "James Stewart",
            de: "James Stewart",
            nl: "James Stewart"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "John Wayne, born Marion Morrison, died on June 11, 1979. He was an iconic American actor who starred in over 170 films and became synonymous with Western movies and American masculinity in cinema.",
          es: "John Wayne, nacido Marion Morrison, murió el 11 de junio de 1979. Fue un actor estadounidense icónico que protagonizó más de 170 películas y se convirtió en sinónimo de películas del oeste y la masculinidad estadounidense en el cine.",
          de: "John Wayne, geboren als Marion Morrison, starb am 11. Juni 1979. Er war ein ikonischer amerikanischer Schauspieler, der in über 170 Filmen mitspielte und zum Synonym für Western-Filme und amerikanische Männlichkeit im Kino wurde.",
          nl: "John Wayne, geboren als Marion Morrison, stierf op 11 juni 1979. Hij was een iconische Amerikaanse acteur die in meer dan 170 films speelde en synoniem werd met westernfilms en Amerikaanse mannelijkheid in de cinema."
        }
      }
    ],

    // Day 12 - June 12th: Historical Events
    day12: [
      {
        question: {
          en: "On June 12, 1942, which young Jewish girl received a diary for her 13th birthday?",
          es: "El 12 de junio de 1942, ¿qué joven judía recibió un diario para su decimotercer cumpleaños?",
          de: "Welches junge jüdische Mädchen erhielt am 12. Juni 1942 ein Tagebuch zu ihrem 13. Geburtstag?",
          nl: "Welk jong Joods meisje ontving op 12 juni 1942 een dagboek voor haar 13e verjaardag?"
        },
        options: [
          {
            en: "Hannah Arendt",
            es: "Hannah Arendt",
            de: "Hannah Arendt",
            nl: "Hannah Arendt"
          },
          {
            en: "Edith Stein",
            es: "Edith Stein",
            de: "Edith Stein",
            nl: "Edith Stein"
          },
          {
            en: "Anne Frank",
            es: "Anne Frank",
            de: "Anne Frank",
            nl: "Anne Frank"
          },
          {
            en: "Etty Hillesum",
            es: "Etty Hillesum",
            de: "Etty Hillesum",
            nl: "Etty Hillesum"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Anne Frank received her red-checkered diary on June 12, 1942, for her 13th birthday in Amsterdam. She began writing in it before her family went into hiding from the Nazis. Her diary became one of the most important Holocaust documents.",
          es: "Anne Frank recibió su diario a cuadros rojos el 12 de junio de 1942 para su decimotercer cumpleaños en Ámsterdam. Comenzó a escribir en él antes de que su familia se escondiera de los nazis. Su diario se convirtió en uno de los documentos más importantes del Holocausto.",
          de: "Anne Frank erhielt ihr rot-kariertes Tagebuch am 12. Juni 1942 zu ihrem 13. Geburtstag in Amsterdam. Sie begann darin zu schreiben, bevor ihre Familie sich vor den Nazis versteckte. Ihr Tagebuch wurde zu einem der wichtigsten Holocaust-Dokumente.",
          nl: "Anne Frank ontving haar rood-geruite dagboek op 12 juni 1942 voor haar 13e verjaardag in Amsterdam. Ze begon erin te schrijven voordat haar familie zich verstopte voor de nazi's. Haar dagboek werd een van de belangrijkste Holocaust-documenten."
        }
      },
      {
        question: {
          en: "On June 12, 1990, which declaration marked Russia's sovereignty from the Soviet Union?",
          es: "El 12 de junio de 1990, ¿qué declaración marcó la soberanía de Rusia de la Unión Soviética?",
          de: "Welche Erklärung markierte am 12. Juni 1990 die Souveränität Russlands von der Sowjetunion?",
          nl: "Welke verklaring markeerde op 12 juni 1990 de soevereiniteit van Rusland van de Sovjet-Unie?"
        },
        options: [
          {
            en: "Russian Independence Act",
            es: "Acta de Independencia Rusa",
            de: "Russische Unabhängigkeitserklärung",
            nl: "Russische Onafhankelijkheidsakte"
          },
          {
            en: "Declaration of State Sovereignty",
            es: "Declaración de Soberanía Estatal",
            de: "Erklärung der staatlichen Souveränität",
            nl: "Verklaring van Staatssoevereiniteit"
          },
          {
            en: "Moscow Treaty",
            es: "Tratado de Moscú",
            de: "Moskauer Vertrag",
            nl: "Verdrag van Moskou"
          },
          {
            en: "Russian Federation Charter",
            es: "Carta de la Federación Rusa",
            de: "Charta der Russischen Föderation",
            nl: "Handvest van de Russische Federatie"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 12, 1990, the Russian Soviet Federative Socialist Republic adopted the Declaration of State Sovereignty. This historic document proclaimed Russia's sovereignty and intention to establish a democratic state, eventually leading to the dissolution of the Soviet Union.",
          es: "El 12 de junio de 1990, la República Socialista Federativa Soviética de Rusia adoptó la Declaración de Soberanía Estatal. Este documento histórico proclamó la soberanía de Rusia y la intención de establecer un estado democrático, lo que finalmente condujo a la disolución de la Unión Soviética.",
          de: "Am 12. Juni 1990 verabschiedete die Russische Sozialistische Föderative Sowjetrepublik die Erklärung der staatlichen Souveränität. Dieses historische Dokument proklamierte Russlands Souveränität und die Absicht, einen demokratischen Staat zu errichten, was schließlich zur Auflösung der Sowjetunion führte.",
          nl: "Op 12 juni 1990 nam de Russische Socialistische Federatieve Sovjet-Republiek de Verklaring van Staatssoevereiniteit aan. Dit historische document proclameerde de soevereiniteit van Rusland en de intentie om een democratische staat te vestigen, wat uiteindelijk leidde tot de ontbinding van de Sovjet-Unie."
        }
      },
      {
        question: {
          en: "In what year was Anne Frank born on June 12?",
          es: "¿En qué año nació Anne Frank el 12 de junio?",
          de: "In welchem Jahr wurde Anne Frank am 12. Juni geboren?",
          nl: "In welk jaar werd Anne Frank geboren op 12 juni?"
        },
        options: [
          {
            en: "1925",
            es: "1925",
            de: "1925",
            nl: "1925"
          },
          {
            en: "1929",
            es: "1929",
            de: "1929",
            nl: "1929"
          },
          {
            en: "1933",
            es: "1933",
            de: "1933",
            nl: "1933"
          },
          {
            en: "1940",
            es: "1940",
            de: "1940",
            nl: "1940"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Annelies Marie Frank was born on June 12, 1929, in Frankfurt, Germany. She and her family fled to Amsterdam after the Nazi rise to power, where she later went into hiding and wrote her famous diary documenting life during the Holocaust.",
          es: "Annelies Marie Frank nació el 12 de junio de 1929 en Frankfurt, Alemania. Ella y su familia huyeron a Ámsterdam después del ascenso nazi al poder, donde más tarde se escondió y escribió su famoso diario documentando la vida durante el Holocausto.",
          de: "Annelies Marie Frank wurde am 12. Juni 1929 in Frankfurt, Deutschland, geboren. Sie und ihre Familie flohen nach der Machtergreifung der Nazis nach Amsterdam, wo sie sich später versteckte und ihr berühmtes Tagebuch schrieb, das das Leben während des Holocaust dokumentiert.",
          nl: "Annelies Marie Frank werd geboren op 12 juni 1929 in Frankfurt, Duitsland. Zij en haar familie vluchtten naar Amsterdam na de opkomst van de nazi's, waar ze zich later verstopte en haar beroemde dagboek schreef dat het leven tijdens de Holocaust documenteert."
        }
      },
      {
        question: {
          en: "What is June 12 celebrated as in Russia since 1992?",
          es: "¿Cómo se celebra el 12 de junio en Rusia desde 1992?",
          de: "Als was wird der 12. Juni in Russland seit 1992 gefeiert?",
          nl: "Waarvoor wordt 12 juni in Rusland sinds 1992 gevierd?"
        },
        options: [
          {
            en: "Victory Day",
            es: "Día de la Victoria",
            de: "Tag des Sieges",
            nl: "Overwinningsdag"
          },
          {
            en: "Russia Day",
            es: "Día de Rusia",
            de: "Tag Russlands",
            nl: "Rusland Dag"
          },
          {
            en: "Independence Day",
            es: "Día de la Independencia",
            de: "Unabhängigkeitstag",
            nl: "Onafhankelijkheidsdag"
          },
          {
            en: "Constitution Day",
            es: "Día de la Constitución",
            de: "Tag der Verfassung",
            nl: "Grondwetsdag"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "June 12 has been celebrated as Russia Day since 1992, commemorating the adoption of the Declaration of State Sovereignty in 1990. It is one of Russia's most important national holidays, marking the beginning of Russia's path to independence.",
          es: "El 12 de junio se celebra como Día de Rusia desde 1992, conmemorando la adopción de la Declaración de Soberanía Estatal en 1990. Es una de las festividades nacionales más importantes de Rusia, marcando el comienzo del camino de Rusia hacia la independencia.",
          de: "Der 12. Juni wird seit 1992 als Tag Russlands gefeiert und erinnert an die Verabschiedung der Erklärung der staatlichen Souveränität im Jahr 1990. Es ist einer der wichtigsten Nationalfeiertage Russlands und markiert den Beginn von Russlands Weg zur Unabhängigkeit.",
          nl: "12 juni wordt sinds 1992 gevierd als Rusland Dag, ter herdenking van de aanname van de Verklaring van Staatssoevereiniteit in 1990. Het is een van Ruslands belangrijkste nationale feestdagen en markeert het begin van Ruslands weg naar onafhankelijkheid."
        }
      },
      {
        question: {
          en: "On June 12, 1987, which US president challenged Soviet leader Gorbachev to 'tear down this wall'?",
          es: "El 12 de junio de 1987, ¿qué presidente de EE.UU. desafió al líder soviético Gorbachov a 'derribar este muro'?",
          de: "Welcher US-Präsident forderte am 12. Juni 1987 den sowjetischen Führer Gorbatschow auf, 'diese Mauer niederzureißen'?",
          nl: "Welke Amerikaanse president daagde op 12 juni 1987 de Sovjetleider Gorbatsjov uit om 'deze muur neer te halen'?"
        },
        options: [
          {
            en: "Jimmy Carter",
            es: "Jimmy Carter",
            de: "Jimmy Carter",
            nl: "Jimmy Carter"
          },
          {
            en: "George H.W. Bush",
            es: "George H.W. Bush",
            de: "George H.W. Bush",
            nl: "George H.W. Bush"
          },
          {
            en: "Ronald Reagan",
            es: "Ronald Reagan",
            de: "Ronald Reagan",
            nl: "Ronald Reagan"
          },
          {
            en: "Bill Clinton",
            es: "Bill Clinton",
            de: "Bill Clinton",
            nl: "Bill Clinton"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ronald Reagan delivered his famous 'Tear down this wall' speech at the Brandenburg Gate near the Berlin Wall on June 12, 1987. This iconic Cold War speech challenged Gorbachev to open the gate and became a symbol of the push for freedom in Eastern Europe.",
          es: "Ronald Reagan pronunció su famoso discurso 'Derribe este muro' en la Puerta de Brandeburgo cerca del Muro de Berlín el 12 de junio de 1987. Este icónico discurso de la Guerra Fría desafió a Gorbachov a abrir la puerta y se convirtió en un símbolo del impulso por la libertad en Europa del Este.",
          de: "Ronald Reagan hielt seine berühmte 'Reißen Sie diese Mauer nieder'-Rede am Brandenburger Tor nahe der Berliner Mauer am 12. Juni 1987. Diese ikonische Kalter-Krieg-Rede forderte Gorbatschow auf, das Tor zu öffnen und wurde zum Symbol für den Drang nach Freiheit in Osteuropa.",
          nl: "Ronald Reagan hield zijn beroemde 'Haal deze muur neer'-toespraak bij de Brandenburger Tor nabij de Berlijnse Muur op 12 juni 1987. Deze iconische Koude Oorlog-toespraak daagde Gorbatsjov uit om de poort te openen en werd een symbool van de drang naar vrijheid in Oost-Europa."
        }
      }
    ],

    // Day 13 - June 13th: Historical Events
    day13: [
      {
        question: {
          en: "On June 13, 1966, which landmark Supreme Court decision established Miranda rights?",
          es: "El 13 de junio de 1966, ¿qué decisión histórica de la Corte Suprema estableció los derechos Miranda?",
          de: "Welche wegweisende Entscheidung des Obersten Gerichtshofs etablierte am 13. Juni 1966 die Miranda-Rechte?",
          nl: "Welke baanbrekende beslissing van het Hooggerechtshof vestigde op 13 juni 1966 de Miranda-rechten?"
        },
        options: [
          {
            en: "Brown v. Board of Education",
            es: "Brown contra Junta de Educación",
            de: "Brown gegen Board of Education",
            nl: "Brown versus Board of Education"
          },
          {
            en: "Miranda v. Arizona",
            es: "Miranda contra Arizona",
            de: "Miranda gegen Arizona",
            nl: "Miranda versus Arizona"
          },
          {
            en: "Roe v. Wade",
            es: "Roe contra Wade",
            de: "Roe gegen Wade",
            nl: "Roe versus Wade"
          },
          {
            en: "Gideon v. Wainwright",
            es: "Gideon contra Wainwright",
            de: "Gideon gegen Wainwright",
            nl: "Gideon versus Wainwright"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Supreme Court ruled in Miranda v. Arizona on June 13, 1966, that police must inform suspects of their rights before interrogation. This includes the right to remain silent and the right to an attorney, fundamentally changing law enforcement practices.",
          es: "La Corte Suprema dictaminó en Miranda contra Arizona el 13 de junio de 1966 que la policía debe informar a los sospechosos de sus derechos antes del interrogatorio. Esto incluye el derecho a permanecer en silencio y el derecho a un abogado, cambiando fundamentalmente las prácticas policiales.",
          de: "Der Oberste Gerichtshof entschied am 13. Juni 1966 in Miranda gegen Arizona, dass die Polizei Verdächtige vor dem Verhör über ihre Rechte informieren muss. Dazu gehören das Recht zu schweigen und das Recht auf einen Anwalt, was die Strafverfolgungspraktiken grundlegend veränderte.",
          nl: "Het Hooggerechtshof oordeelde in Miranda versus Arizona op 13 juni 1966 dat de politie verdachten voor verhoor moet informeren over hun rechten. Dit omvat het recht om te zwijgen en het recht op een advocaat, waardoor de wetshandhavingspraktijken fundamenteel veranderden."
        }
      },
      {
        question: {
          en: "According to historical records, which legendary conqueror died on June 13, 323 BC?",
          es: "Según los registros históricos, ¿qué legendario conquistador murió el 13 de junio de 323 a.C.?",
          de: "Welcher legendäre Eroberer starb laut historischen Aufzeichnungen am 13. Juni 323 v. Chr.?",
          nl: "Welke legendarische veroveraar stierf volgens historische archieven op 13 juni 323 v.Chr.?"
        },
        options: [
          {
            en: "Julius Caesar",
            es: "Julio César",
            de: "Julius Cäsar",
            nl: "Julius Caesar"
          },
          {
            en: "Genghis Khan",
            es: "Gengis Kan",
            de: "Dschingis Khan",
            nl: "Genghis Khan"
          },
          {
            en: "Alexander the Great",
            es: "Alejandro Magno",
            de: "Alexander der Große",
            nl: "Alexander de Grote"
          },
          {
            en: "Napoleon Bonaparte",
            es: "Napoleón Bonaparte",
            de: "Napoleon Bonaparte",
            nl: "Napoleon Bonaparte"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Alexander the Great died in Babylon on June 13, 323 BC, at age 32-33. He had created one of the largest empires in history, stretching from Greece to India. His death led to the division of his empire among his generals.",
          es: "Alejandro Magno murió en Babilonia el 13 de junio de 323 a.C., a la edad de 32-33 años. Había creado uno de los imperios más grandes de la historia, extendiéndose desde Grecia hasta la India. Su muerte llevó a la división de su imperio entre sus generales.",
          de: "Alexander der Große starb am 13. Juni 323 v. Chr. in Babylon im Alter von 32-33 Jahren. Er hatte eines der größten Reiche der Geschichte geschaffen, das sich von Griechenland bis Indien erstreckte. Sein Tod führte zur Teilung seines Reiches unter seinen Generälen.",
          nl: "Alexander de Grote stierf in Babylon op 13 juni 323 v.Chr. op 32-33-jarige leeftijd. Hij had een van de grootste rijken in de geschiedenis gecreëerd, zich uitstrekkend van Griekenland tot India. Zijn dood leidde tot de verdeling van zijn rijk onder zijn generaals."
        }
      },
      {
        question: {
          en: "What do police officers recite to suspects as a result of the Miranda decision?",
          es: "¿Qué recitan los oficiales de policía a los sospechosos como resultado de la decisión Miranda?",
          de: "Was rezitieren Polizeibeamte Verdächtigen aufgrund der Miranda-Entscheidung vor?",
          nl: "Wat reciteren politieagenten aan verdachten als gevolg van de Miranda-beslissing?"
        },
        options: [
          {
            en: "The Pledge of Allegiance",
            es: "El Juramento de Lealtad",
            de: "Das Treuegelöbnis",
            nl: "De Trouwbelofte"
          },
          {
            en: "Miranda Warning",
            es: "Advertencia Miranda",
            de: "Miranda-Warnung",
            nl: "Miranda-waarschuwing"
          },
          {
            en: "Bill of Rights",
            es: "Declaración de Derechos",
            de: "Bill of Rights",
            nl: "Bill of Rights"
          },
          {
            en: "Constitution Oath",
            es: "Juramento Constitucional",
            de: "Verfassungseid",
            nl: "Grondwettelijke Eed"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Miranda Warning begins with 'You have the right to remain silent' and informs suspects of their constitutional rights. Police departments issue Miranda cards to officers to ensure they correctly recite these rights during arrests and interrogations.",
          es: "La Advertencia Miranda comienza con 'Tiene derecho a permanecer en silencio' e informa a los sospechosos de sus derechos constitucionales. Los departamentos de policía emiten tarjetas Miranda a los oficiales para asegurar que reciten correctamente estos derechos durante arrestos e interrogatorios.",
          de: "Die Miranda-Warnung beginnt mit 'Sie haben das Recht zu schweigen' und informiert Verdächtige über ihre verfassungsmäßigen Rechte. Polizeibehörden geben Miranda-Karten an Beamte aus, um sicherzustellen, dass sie diese Rechte bei Verhaftungen und Verhören korrekt vortragen.",
          nl: "De Miranda-waarschuwing begint met 'U hebt het recht om te zwijgen' en informeert verdachten over hun grondwettelijke rechten. Politieafdelingen geven Miranda-kaarten uit aan agenten om ervoor te zorgen dat ze deze rechten correct reciteren tijdens arrestaties en verhoren."
        }
      },
      {
        question: {
          en: "On June 13, 1983, which spacecraft became the first human-made object to leave the solar system?",
          es: "El 13 de junio de 1983, ¿qué nave espacial se convirtió en el primer objeto hecho por el hombre en salir del sistema solar?",
          de: "Welches Raumschiff wurde am 13. Juni 1983 zum ersten von Menschen gemachten Objekt, das das Sonnensystem verließ?",
          nl: "Welk ruimtevaartuig werd op 13 juni 1983 het eerste door mensen gemaakte object dat het zonnestelsel verliet?"
        },
        options: [
          {
            en: "Voyager 2",
            es: "Voyager 2",
            de: "Voyager 2",
            nl: "Voyager 2"
          },
          {
            en: "Pioneer 10",
            es: "Pioneer 10",
            de: "Pioneer 10",
            nl: "Pioneer 10"
          },
          {
            en: "Apollo 11",
            es: "Apollo 11",
            de: "Apollo 11",
            nl: "Apollo 11"
          },
          {
            en: "Hubble Telescope",
            es: "Telescopio Hubble",
            de: "Hubble-Teleskop",
            nl: "Hubble Telescoop"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Pioneer 10 crossed Neptune's orbit on June 13, 1983, becoming the first spacecraft to travel beyond all the solar system's planets. Launched in 1972, it provided valuable data about Jupiter and the outer solar system before heading into interstellar space.",
          es: "Pioneer 10 cruzó la órbita de Neptuno el 13 de junio de 1983, convirtiéndose en la primera nave espacial en viajar más allá de todos los planetas del sistema solar. Lanzada en 1972, proporcionó datos valiosos sobre Júpiter y el sistema solar exterior antes de dirigirse al espacio interestelar.",
          de: "Pioneer 10 überquerte am 13. Juni 1983 die Neptun-Umlaufbahn und wurde damit zum ersten Raumschiff, das über alle Planeten des Sonnensystems hinausreiste. Die 1972 gestartete Sonde lieferte wertvolle Daten über Jupiter und das äußere Sonnensystem, bevor sie in den interstellaren Raum vordrang.",
          nl: "Pioneer 10 kruiste op 13 juni 1983 de baan van Neptunus en werd daarmee het eerste ruimtevaartuig dat voorbij alle planeten van het zonnestelsel reisde. Gelanceerd in 1972, leverde het waardevolle gegevens over Jupiter en het buitenste zonnestelsel voordat het de interstellaire ruimte inging."
        }
      },
      {
        question: {
          en: "What empire did Alexander the Great rule when he died in 323 BC?",
          es: "¿Qué imperio gobernaba Alejandro Magno cuando murió en 323 a.C.?",
          de: "Welches Reich regierte Alexander der Große, als er 323 v. Chr. starb?",
          nl: "Welk rijk regeerde Alexander de Grote toen hij stierf in 323 v.Chr.?"
        },
        options: [
          {
            en: "Roman Empire",
            es: "Imperio Romano",
            de: "Römisches Reich",
            nl: "Romeinse Rijk"
          },
          {
            en: "Macedonian Empire",
            es: "Imperio Macedonio",
            de: "Makedonisches Reich",
            nl: "Macedonisch Rijk"
          },
          {
            en: "Persian Empire",
            es: "Imperio Persa",
            de: "Persisches Reich",
            nl: "Perzische Rijk"
          },
          {
            en: "Ottoman Empire",
            es: "Imperio Otomano",
            de: "Osmanisches Reich",
            nl: "Ottomaanse Rijk"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Alexander ruled the Macedonian Empire, which he had expanded from his father's kingdom in Macedonia to encompass Greece, Egypt, Persia, and parts of India. His conquests created one of history's largest empires and spread Greek culture across three continents.",
          es: "Alejandro gobernó el Imperio Macedonio, que había expandido desde el reino de su padre en Macedonia para abarcar Grecia, Egipto, Persia y partes de India. Sus conquistas crearon uno de los imperios más grandes de la historia y difundieron la cultura griega a través de tres continentes.",
          de: "Alexander herrschte über das Makedonische Reich, das er vom Königreich seines Vaters in Makedonien auf Griechenland, Ägypten, Persien und Teile Indiens ausgedehnt hatte. Seine Eroberungen schufen eines der größten Reiche der Geschichte und verbreiteten die griechische Kultur über drei Kontinente.",
          nl: "Alexander regeerde over het Macedonische Rijk, dat hij had uitgebreid van het koninkrijk van zijn vader in Macedonië tot het omvatte Griekenland, Egypte, Perzië en delen van India. Zijn veroveringen creëerden een van de grootste rijken uit de geschiedenis en verspreidden de Griekse cultuur over drie continenten."
        }
      }
    ],

    // Day 14 - June 14th: Historical Events
    day14: [
      {
        question: {
          en: "On June 14, 1777, what did the Second Continental Congress officially adopt as the national symbol?",
          es: "El 14 de junio de 1777, ¿qué adoptó oficialmente el Segundo Congreso Continental como símbolo nacional?",
          de: "Was verabschiedete der Zweite Kontinentalkongress am 14. Juni 1777 offiziell als nationales Symbol?",
          nl: "Wat nam het Tweede Continentale Congres op 14 juni 1777 officieel aan als nationaal symbool?"
        },
        options: [
          {
            en: "The Constitution",
            es: "La Constitución",
            de: "Die Verfassung",
            nl: "De Grondwet"
          },
          {
            en: "The American Flag",
            es: "La Bandera Americana",
            de: "Die Amerikanische Flagge",
            nl: "De Amerikaanse Vlag"
          },
          {
            en: "The Declaration of Independence",
            es: "La Declaración de Independencia",
            de: "Die Unabhängigkeitserklärung",
            nl: "De Onafhankelijkheidsverklaring"
          },
          {
            en: "The National Anthem",
            es: "El Himno Nacional",
            de: "Die Nationalhymne",
            nl: "Het Volkslied"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Second Continental Congress adopted the Stars and Stripes as the official flag of the United States on June 14, 1777. This date is now celebrated annually as Flag Day in the United States, commemorating the adoption of America's national symbol.",
          es: "El Segundo Congreso Continental adoptó las Barras y Estrellas como bandera oficial de los Estados Unidos el 14 de junio de 1777. Esta fecha ahora se celebra anualmente como Día de la Bandera en los Estados Unidos, conmemorando la adopción del símbolo nacional de América.",
          de: "Der Zweite Kontinentalkongress verabschiedete am 14. Juni 1777 die Sterne und Streifen als offizielle Flagge der Vereinigten Staaten. Dieses Datum wird jetzt jährlich als Flaggentag in den Vereinigten Staaten gefeiert und erinnert an die Einführung des amerikanischen Nationalsymbols.",
          nl: "Het Tweede Continentale Congres nam op 14 juni 1777 de Stars and Stripes aan als de officiële vlag van de Verenigde Staten. Deze datum wordt nu jaarlijks gevierd als Vlaggendag in de Verenigde Staten, ter herdenking van de aanname van Amerika's nationale symbool."
        }
      },
      {
        question: {
          en: "Which revolutionary leader was born on June 14, 1928?",
          es: "¿Qué líder revolucionario nació el 14 de junio de 1928?",
          de: "Welcher revolutionäre Anführer wurde am 14. Juni 1928 geboren?",
          nl: "Welke revolutionaire leider werd geboren op 14 juni 1928?"
        },
        options: [
          {
            en: "Fidel Castro",
            es: "Fidel Castro",
            de: "Fidel Castro",
            nl: "Fidel Castro"
          },
          {
            en: "Che Guevara",
            es: "Che Guevara",
            de: "Che Guevara",
            nl: "Che Guevara"
          },
          {
            en: "Vladimir Lenin",
            es: "Vladimir Lenin",
            de: "Wladimir Lenin",
            nl: "Vladimir Lenin"
          },
          {
            en: "Mao Zedong",
            es: "Mao Zedong",
            de: "Mao Zedong",
            nl: "Mao Zedong"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ernesto 'Che' Guevara was born on June 14, 1928, in Argentina. He became a major figure in the Cuban Revolution alongside Fidel Castro and later became an icon of revolutionary movements worldwide. His image remains one of the most recognizable symbols in popular culture.",
          es: "Ernesto 'Che' Guevara nació el 14 de junio de 1928 en Argentina. Se convirtió en una figura importante de la Revolución Cubana junto a Fidel Castro y posteriormente se convirtió en un ícono de los movimientos revolucionarios en todo el mundo. Su imagen sigue siendo uno de los símbolos más reconocibles de la cultura popular.",
          de: "Ernesto 'Che' Guevara wurde am 14. Juni 1928 in Argentinien geboren. Er wurde neben Fidel Castro zu einer Hauptfigur der Kubanischen Revolution und später zu einer Ikone revolutionärer Bewegungen weltweit. Sein Bild bleibt eines der bekanntesten Symbole der Populärkultur.",
          nl: "Ernesto 'Che' Guevara werd geboren op 14 juni 1928 in Argentinië. Hij werd een belangrijke figuur in de Cubaanse Revolutie naast Fidel Castro en werd later een icoon van revolutionaire bewegingen wereldwijd. Zijn beeld blijft een van de meest herkenbare symbolen in de populaire cultuur."
        }
      },
      {
        question: {
          en: "On June 14, 1982, which conflict ended with Argentina's surrender?",
          es: "El 14 de junio de 1982, ¿qué conflicto terminó con la rendición de Argentina?",
          de: "Welcher Konflikt endete am 14. Juni 1982 mit Argentiniens Kapitulation?",
          nl: "Welk conflict eindigde op 14 juni 1982 met de overgave van Argentinië?"
        },
        options: [
          {
            en: "The Chaco War",
            es: "La Guerra del Chaco",
            de: "Der Chaco-Krieg",
            nl: "De Chaco-oorlog"
          },
          {
            en: "The Falklands War",
            es: "La Guerra de las Malvinas",
            de: "Der Falklandkrieg",
            nl: "De Falklandoorlog"
          },
          {
            en: "The War of the Pacific",
            es: "La Guerra del Pacífico",
            de: "Der Pazifikkrieg",
            nl: "De Pacifische Oorlog"
          },
          {
            en: "The Beagle Conflict",
            es: "El Conflicto del Beagle",
            de: "Der Beagle-Konflikt",
            nl: "Het Beagle-conflict"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Falklands War ended on June 14, 1982, when Argentina surrendered to Britain after 74 days of conflict. The war began when Argentina invaded the British-controlled Falkland Islands, resulting in British victory and significant political consequences for both nations.",
          es: "La Guerra de las Malvinas terminó el 14 de junio de 1982 cuando Argentina se rindió ante Gran Bretaña después de 74 días de conflicto. La guerra comenzó cuando Argentina invadió las Islas Malvinas controladas por Gran Bretaña, resultando en la victoria británica y consecuencias políticas significativas para ambas naciones.",
          de: "Der Falklandkrieg endete am 14. Juni 1982, als Argentinien nach 74 Tagen Konflikt vor Großbritannien kapitulierte. Der Krieg begann, als Argentinien die britisch kontrollierten Falklandinseln überfiel, was zu einem britischen Sieg und erheblichen politischen Konsequenzen für beide Nationen führte.",
          nl: "De Falklandoorlog eindigde op 14 juni 1982 toen Argentinië zich overgaf aan Groot-Brittannië na 74 dagen conflict. De oorlog begon toen Argentinië de door Groot-Brittannië gecontroleerde Falklandeilanden binnenviel, wat resulteerde in een Britse overwinning en aanzienlijke politieke gevolgen voor beide naties."
        }
      },
      {
        question: {
          en: "On June 14, 1940, which European capital city was occupied by German forces during World War II?",
          es: "El 14 de junio de 1940, ¿qué ciudad capital europea fue ocupada por las fuerzas alemanas durante la Segunda Guerra Mundial?",
          de: "Welche europäische Hauptstadt wurde am 14. Juni 1940 während des Zweiten Weltkriegs von deutschen Streitkräften besetzt?",
          nl: "Welke Europese hoofdstad werd op 14 juni 1940 bezet door Duitse troepen tijdens de Tweede Wereldoorlog?"
        },
        options: [
          {
            en: "London",
            es: "Londres",
            de: "London",
            nl: "Londen"
          },
          {
            en: "Brussels",
            es: "Bruselas",
            de: "Brüssel",
            nl: "Brussel"
          },
          {
            en: "Paris",
            es: "París",
            de: "Paris",
            nl: "Parijs"
          },
          {
            en: "Amsterdam",
            es: "Ámsterdam",
            de: "Amsterdam",
            nl: "Amsterdam"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "German forces entered Paris on June 14, 1940, marking one of the darkest moments in French history. The occupation lasted four years until the city's liberation in August 1944. This event symbolized France's defeat in the Battle of France during World War II.",
          es: "Las fuerzas alemanas entraron en París el 14 de junio de 1940, marcando uno de los momentos más oscuros de la historia francesa. La ocupación duró cuatro años hasta la liberación de la ciudad en agosto de 1944. Este evento simbolizó la derrota de Francia en la Batalla de Francia durante la Segunda Guerra Mundial.",
          de: "Deutsche Streitkräfte marschierten am 14. Juni 1940 in Paris ein und markierten damit einen der dunkelsten Momente der französischen Geschichte. Die Besatzung dauerte vier Jahre bis zur Befreiung der Stadt im August 1944. Dieses Ereignis symbolisierte Frankreichs Niederlage in der Schlacht um Frankreich während des Zweiten Weltkriegs.",
          nl: "Duitse troepen trokken Parijs binnen op 14 juni 1940, wat een van de donkerste momenten in de Franse geschiedenis markeerde. De bezetting duurde vier jaar tot de bevrijding van de stad in augustus 1944. Deze gebeurtenis symboliseerde de nederlaag van Frankrijk in de Slag om Frankrijk tijdens de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "When was Flag Day officially established as a national observance in the United States?",
          es: "¿Cuándo se estableció oficialmente el Día de la Bandera como conmemoración nacional en los Estados Unidos?",
          de: "Wann wurde der Flaggentag offiziell als nationaler Gedenktag in den Vereinigten Staaten etabliert?",
          nl: "Wanneer werd Vlaggendag officieel ingesteld als nationale herdenking in de Verenigde Staten?"
        },
        options: [
          {
            en: "1777",
            es: "1777",
            de: "1777",
            nl: "1777"
          },
          {
            en: "1876",
            es: "1876",
            de: "1876",
            nl: "1876"
          },
          {
            en: "1916",
            es: "1916",
            de: "1916",
            nl: "1916"
          },
          {
            en: "1949",
            es: "1949",
            de: "1949",
            nl: "1949"
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "While President Woodrow Wilson proclaimed June 14 as Flag Day in 1916, Congress permanently established it as a national observance in 1949. Though not a federal holiday, Flag Day honors the adoption of the American flag and promotes patriotism.",
          es: "Aunque el presidente Woodrow Wilson proclamó el 14 de junio como Día de la Bandera en 1916, el Congreso lo estableció permanentemente como conmemoración nacional en 1949. Aunque no es un feriado federal, el Día de la Bandera honra la adopción de la bandera estadounidense y promueve el patriotismo.",
          de: "Obwohl Präsident Woodrow Wilson den 14. Juni 1916 zum Flaggentag erklärte, etablierte der Kongress ihn 1949 dauerhaft als nationalen Gedenktag. Obwohl kein Bundesfeiertag, ehrt der Flaggentag die Einführung der amerikanischen Flagge und fördert den Patriotismus.",
          nl: "Hoewel president Woodrow Wilson 14 juni in 1916 als Vlaggendag proclameerde, stelde het Congres het in 1949 permanent in als nationale herdenking. Hoewel het geen federale feestdag is, eert Vlaggendag de aanname van de Amerikaanse vlag en bevordert het patriottisme."
        }
      }
    ],

    // Day 15 - June 15th: Historical Events
    day15: [
      {
        question: {
          en: "On June 15, 1215, which document limiting royal power was sealed by King John of England?",
          es: "El 15 de junio de 1215, ¿qué documento que limitaba el poder real fue sellado por el rey Juan de Inglaterra?",
          de: "Welches Dokument zur Begrenzung der königlichen Macht wurde am 15. Juni 1215 von König Johann von England besiegelt?",
          nl: "Welk document dat de koninklijke macht beperkte werd op 15 juni 1215 verzegeld door koning Jan van Engeland?"
        },
        options: [
          {
            en: "The Declaration of Independence",
            es: "La Declaración de Independencia",
            de: "Die Unabhängigkeitserklärung",
            nl: "De Onafhankelijkheidsverklaring"
          },
          {
            en: "The Magna Carta",
            es: "La Carta Magna",
            de: "Die Magna Carta",
            nl: "De Magna Carta"
          },
          {
            en: "The Bill of Rights",
            es: "La Declaración de Derechos",
            de: "Die Bill of Rights",
            nl: "De Bill of Rights"
          },
          {
            en: "The Constitution",
            es: "La Constitución",
            de: "Die Verfassung",
            nl: "De Grondwet"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "King John sealed the Magna Carta at Runnymede on June 15, 1215, following a revolt by English nobles. This 'Great Charter' established the principle that everyone, including the king, is subject to the law and laid the foundation for individual rights and democratic governance.",
          es: "El rey Juan selló la Carta Magna en Runnymede el 15 de junio de 1215, tras una revuelta de nobles ingleses. Esta 'Gran Carta' estableció el principio de que todos, incluido el rey, están sujetos a la ley y sentó las bases para los derechos individuales y el gobierno democrático.",
          de: "König Johann besiegelte die Magna Carta in Runnymede am 15. Juni 1215 nach einer Revolte englischer Adliger. Diese 'Große Charta' etablierte das Prinzip, dass jeder, einschließlich des Königs, dem Gesetz unterliegt und legte die Grundlage für individuelle Rechte und demokratische Regierungsführung.",
          nl: "Koning Jan verzegelde de Magna Carta in Runnymede op 15 juni 1215, na een opstand van Engelse edelen. Dit 'Grote Handvest' vestigde het principe dat iedereen, inclusief de koning, onderworpen is aan de wet en legde de basis voor individuele rechten en democratisch bestuur."
        }
      },
      {
        question: {
          en: "On June 15, 1991, which volcano in the Philippines produced the second-largest eruption of the 20th century?",
          es: "El 15 de junio de 1991, ¿qué volcán en Filipinas produjo la segunda erupción más grande del siglo XX?",
          de: "Welcher Vulkan auf den Philippinen erzeugte am 15. Juni 1991 den zweitgrößten Ausbruch des 20. Jahrhunderts?",
          nl: "Welke vulkaan in de Filipijnen produceerde op 15 juni 1991 de op een na grootste uitbarsting van de 20e eeuw?"
        },
        options: [
          {
            en: "Mount Mayon",
            es: "Monte Mayon",
            de: "Mount Mayon",
            nl: "Mount Mayon"
          },
          {
            en: "Mount Taal",
            es: "Monte Taal",
            de: "Mount Taal",
            nl: "Mount Taal"
          },
          {
            en: "Mount Pinatubo",
            es: "Monte Pinatubo",
            de: "Mount Pinatubo",
            nl: "Mount Pinatubo"
          },
          {
            en: "Mount Apo",
            es: "Monte Apo",
            de: "Mount Apo",
            nl: "Mount Apo"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Mount Pinatubo's climactic eruption began on June 15, 1991, sending an ash cloud 40 km into the atmosphere. Scientists had successfully predicted the eruption, allowing evacuations that saved thousands of lives. The eruption significantly affected global climate for several years.",
          es: "La erupción culminante del Monte Pinatubo comenzó el 15 de junio de 1991, enviando una nube de ceniza de 40 km a la atmósfera. Los científicos habían predicho exitosamente la erupción, permitiendo evacuaciones que salvaron miles de vidas. La erupción afectó significativamente el clima global durante varios años.",
          de: "Der klimatische Ausbruch des Mount Pinatubo begann am 15. Juni 1991 und schleuderte eine Aschewolke 40 km in die Atmosphäre. Wissenschaftler hatten den Ausbruch erfolgreich vorhergesagt, was Evakuierungen ermöglichte, die Tausende von Leben retteten. Der Ausbruch beeinflusste das globale Klima mehrere Jahre lang erheblich.",
          nl: "De climax-uitbarsting van Mount Pinatubo begon op 15 juni 1991 en stuurde een aswolk van 40 km de atmosfeer in. Wetenschappers hadden de uitbarsting met succes voorspeld, wat evacuaties mogelijk maakte die duizenden levens redden. De uitbarsting beïnvloedde het wereldwijde klimaat gedurende meerdere jaren aanzienlijk."
        }
      },
      {
        question: {
          en: "What foundational principle did the Magna Carta establish?",
          es: "¿Qué principio fundamental estableció la Carta Magna?",
          de: "Welches grundlegende Prinzip etablierte die Magna Carta?",
          nl: "Welk fundamenteel principe vestigde de Magna Carta?"
        },
        options: [
          {
            en: "Divine right of kings",
            es: "Derecho divino de los reyes",
            de: "Göttliches Recht der Könige",
            nl: "Goddelijk recht van koningen"
          },
          {
            en: "Rule of law applies to everyone",
            es: "El estado de derecho se aplica a todos",
            de: "Rechtsstaatlichkeit gilt für alle",
            nl: "Rechtsstaat is van toepassing op iedereen"
          },
          {
            en: "Absolute monarchy",
            es: "Monarquía absoluta",
            de: "Absolute Monarchie",
            nl: "Absolute monarchie"
          },
          {
            en: "Religious authority over law",
            es: "Autoridad religiosa sobre la ley",
            de: "Religiöse Autorität über Gesetz",
            nl: "Religieuze autoriteit boven de wet"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Magna Carta established that the sovereign is subject to the rule of law, not above it. This revolutionary concept became a cornerstone of constitutional government and influenced legal systems worldwide, including the US Constitution and Bill of Rights.",
          es: "La Carta Magna estableció que el soberano está sujeto al estado de derecho, no por encima de él. Este concepto revolucionario se convirtió en piedra angular del gobierno constitucional e influyó en los sistemas legales de todo el mundo, incluida la Constitución de EE.UU. y la Declaración de Derechos.",
          de: "Die Magna Carta etablierte, dass der Souverän der Rechtsstaatlichkeit unterliegt und nicht darüber steht. Dieses revolutionäre Konzept wurde zu einem Eckpfeiler verfassungsmäßiger Regierung und beeinflusste Rechtssysteme weltweit, einschließlich der US-Verfassung und Bill of Rights.",
          nl: "De Magna Carta vestigde dat de soeverein onderworpen is aan de rechtsstaat, niet erboven. Dit revolutionaire concept werd een hoeksteen van constitutioneel bestuur en beïnvloedde rechtssystemen wereldwijd, inclusief de Amerikaanse Grondwet en Bill of Rights."
        }
      },
      {
        question: {
          en: "On June 15, 1752, what experiment did Benjamin Franklin reportedly conduct?",
          es: "El 15 de junio de 1752, ¿qué experimento realizó supuestamente Benjamin Franklin?",
          de: "Welches Experiment führte Benjamin Franklin Berichten zufolge am 15. Juni 1752 durch?",
          nl: "Welk experiment voerde Benjamin Franklin naar verluidt uit op 15 juni 1752?"
        },
        options: [
          {
            en: "Discovering electricity",
            es: "Descubrir la electricidad",
            de: "Entdeckung der Elektrizität",
            nl: "Elektriciteit ontdekken"
          },
          {
            en: "The kite and lightning experiment",
            es: "El experimento de la cometa y el rayo",
            de: "Das Drachen- und Blitzexperiment",
            nl: "Het vliegeren bliksemexperiment"
          },
          {
            en: "Inventing the telegraph",
            es: "Inventar el telégrafo",
            de: "Erfindung des Telegrafen",
            nl: "De telegraaf uitvinden"
          },
          {
            en: "Creating the first battery",
            es: "Crear la primera batería",
            de: "Erschaffung der ersten Batterie",
            nl: "De eerste batterij maken"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Benjamin Franklin's famous kite experiment occurred in June 1752, though historians debate the exact date. He demonstrated that lightning is electricity, leading to his invention of the lightning rod. This experiment was dangerous but revolutionized understanding of electricity.",
          es: "El famoso experimento de la cometa de Benjamin Franklin ocurrió en junio de 1752, aunque los historiadores debaten la fecha exacta. Demostró que el rayo es electricidad, lo que llevó a su invención del pararrayos. Este experimento fue peligroso pero revolucionó la comprensión de la electricidad.",
          de: "Benjamin Franklins berühmtes Drachenexperiment fand im Juni 1752 statt, obwohl Historiker über das genaue Datum debattieren. Er demonstrierte, dass Blitz Elektrizität ist, was zu seiner Erfindung des Blitzableiters führte. Dieses Experiment war gefährlich, revolutionierte aber das Verständnis von Elektrizität.",
          nl: "Benjamin Franklins beroemde vliegerexperiment vond plaats in juni 1752, hoewel historici debatteren over de exacte datum. Hij toonde aan dat bliksem elektriciteit is, wat leidde tot zijn uitvinding van de bliksemafleider. Dit experiment was gevaarlijk maar revolutioneerde het begrip van elektriciteit."
        }
      },
      {
        question: {
          en: "Where did King John seal the Magna Carta on June 15, 1215?",
          es: "¿Dónde selló el rey Juan la Carta Magna el 15 de junio de 1215?",
          de: "Wo besiegelte König Johann die Magna Carta am 15. Juni 1215?",
          nl: "Waar verzegelde koning Jan de Magna Carta op 15 juni 1215?"
        },
        options: [
          {
            en: "London Bridge",
            es: "Puente de Londres",
            de: "London Bridge",
            nl: "London Bridge"
          },
          {
            en: "Westminster Abbey",
            es: "Abadía de Westminster",
            de: "Westminster Abbey",
            nl: "Westminster Abbey"
          },
          {
            en: "Runnymede",
            es: "Runnymede",
            de: "Runnymede",
            nl: "Runnymede"
          },
          {
            en: "Windsor Castle",
            es: "Castillo de Windsor",
            de: "Windsor Castle",
            nl: "Windsor Castle"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "King John sealed the Magna Carta at Runnymede, a meadow by the River Thames between Windsor and Staines. This neutral location was chosen for negotiations between the king and rebellious barons. The site remains a historic landmark commemorating this pivotal moment in constitutional history.",
          es: "El rey Juan selló la Carta Magna en Runnymede, un prado junto al río Támesis entre Windsor y Staines. Este lugar neutral fue elegido para las negociaciones entre el rey y los barones rebeldes. El sitio sigue siendo un hito histórico que conmemora este momento crucial en la historia constitucional.",
          de: "König Johann besiegelte die Magna Carta in Runnymede, einer Wiese am Fluss Themse zwischen Windsor und Staines. Dieser neutrale Ort wurde für Verhandlungen zwischen dem König und rebellischen Baronen gewählt. Der Ort bleibt ein historisches Wahrzeichen, das an diesen entscheidenden Moment der Verfassungsgeschichte erinnert.",
          nl: "Koning Jan verzegelde de Magna Carta in Runnymede, een weide aan de rivier de Theems tussen Windsor en Staines. Deze neutrale locatie werd gekozen voor onderhandelingen tussen de koning en rebelse baronnen. De locatie blijft een historisch monument ter herdenking van dit cruciale moment in de constitutionele geschiedenis."
        }
      }
    ],

    // Day 16 - June 16th: Soweto Uprising
    day16: [
      {
        question: {
          en: "On June 16, 1976, what major event began in Soweto, South Africa?",
          es: "El 16 de junio de 1976, ¿qué evento importante comenzó en Soweto, Sudáfrica?",
          de: "Welches wichtige Ereignis begann am 16. Juni 1976 in Soweto, Südafrika?",
          nl: "Welke belangrijke gebeurtenis begon op 16 juni 1976 in Soweto, Zuid-Afrika?"
        },
        options: [
          { en: "The Soweto Uprising", es: "El Levantamiento de Soweto", de: "Der Soweto-Aufstand", nl: "De Soweto-opstand" },
          { en: "The independence celebration", es: "La celebración de la independencia", de: "Die Unabhängigkeitsfeier", nl: "De onafhankelijkheidsviering" },
          { en: "The Olympics", es: "Los Juegos Olímpicos", de: "Die Olympischen Spiele", nl: "De Olympische Spelen" },
          { en: "A music festival", es: "Un festival de música", de: "Ein Musikfestival", nl: "Een muziekfestival" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Soweto Uprising began on June 16, 1976, when thousands of black students protested against the Afrikaans language requirement in schools. Police violence killed hundreds of students, and this tragedy became a turning point in the fight against apartheid in South Africa.",
          es: "El Levantamiento de Soweto comenzó el 16 de junio de 1976, cuando miles de estudiantes negros protestaron contra el requisito del idioma afrikáans en las escuelas. La violencia policial mató a cientos de estudiantes, y esta tragedia se convirtió en un punto de inflexión en la lucha contra el apartheid en Sudáfrica.",
          de: "Der Soweto-Aufstand begann am 16. Juni 1976, als Tausende schwarze Schüler gegen die Afrikaans-Sprachanforderung in Schulen protestierten. Polizeigewalt tötete Hunderte von Schülern, und diese Tragödie wurde zu einem Wendepunkt im Kampf gegen die Apartheid in Südafrika.",
          nl: "De Soweto-opstand begon op 16 juni 1976, toen duizenden zwarte studenten protesteerden tegen de Afrikaanse taaleis in scholen. Politiegeweld doodde honderden studenten, en deze tragedie werd een keerpunt in de strijd tegen apartheid in Zuid-Afrika."
        }
      },
      {
        question: {
          en: "What were the Soweto students primarily protesting against in 1976?",
          es: "¿Contra qué protestaban principalmente los estudiantes de Soweto en 1976?",
          de: "Wogegen protestierten die Soweto-Schüler 1976 hauptsächlich?",
          nl: "Waar protesteerden de Soweto-studenten in 1976 voornamelijk tegen?"
        },
        options: [
          { en: "Homework requirements", es: "Requisitos de tarea", de: "Hausaufgabenanforderungen", nl: "Huiswerkvereisten" },
          { en: "Being forced to learn in Afrikaans", es: "Ser forzados a aprender en afrikáans", de: "Gezwungen zu werden, auf Afrikaans zu lernen", nl: "Gedwongen worden om in het Afrikaans te leren" },
          { en: "School uniforms", es: "Uniformes escolares", de: "Schuluniformen", nl: "Schooluniformen" },
          { en: "Long school hours", es: "Horas escolares largas", de: "Lange Schulstunden", nl: "Lange schooluren" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Students protested the apartheid government's decree that Afrikaans must be used as the medium of instruction in black schools. This language policy was seen as another tool of oppression, as most black South Africans did not speak Afrikaans and it represented the language of their oppressors.",
          es: "Los estudiantes protestaron contra el decreto del gobierno del apartheid de que el afrikáans debía usarse como medio de instrucción en las escuelas negras. Esta política lingüística se vio como otra herramienta de opresión, ya que la mayoría de los sudafricanos negros no hablaban afrikáans y representaba el idioma de sus opresores.",
          de: "Die Schüler protestierten gegen das Dekret der Apartheid-Regierung, dass Afrikaans als Unterrichtssprache in schwarzen Schulen verwendet werden muss. Diese Sprachpolitik wurde als weiteres Werkzeug der Unterdrückung angesehen, da die meisten schwarzen Südafrikaner kein Afrikaans sprachen und es die Sprache ihrer Unterdrücker darstellte.",
          nl: "Studenten protesteerden tegen het decreet van de apartheidregering dat Afrikaans als onderwijstaal in zwarte scholen moest worden gebruikt. Dit taalbeleid werd gezien als een ander middel van onderdrukking, omdat de meeste zwarte Zuid-Afrikanen geen Afrikaans spraken en het de taal van hun onderdrukkers vertegenwoordigde."
        }
      },
      {
        question: {
          en: "On June 16, 1903, which American company was founded that would revolutionize automobiles?",
          es: "El 16 de junio de 1903, ¿qué compañía estadounidense fue fundada que revolucionaría los automóviles?",
          de: "Welches amerikanische Unternehmen wurde am 16. Juni 1903 gegründet, das die Automobilindustrie revolutionieren sollte?",
          nl: "Welk Amerikaans bedrijf werd op 16 juni 1903 opgericht dat de auto-industrie zou revolutioneren?"
        },
        options: [
          {
            en: "General Motors",
            es: "General Motors",
            de: "General Motors",
            nl: "General Motors"
          },
          {
            en: "Ford Motor Company",
            es: "Ford Motor Company",
            de: "Ford Motor Company",
            nl: "Ford Motor Company"
          },
          {
            en: "Chrysler",
            es: "Chrysler",
            de: "Chrysler",
            nl: "Chrysler"
          },
          {
            en: "Tesla",
            es: "Tesla",
            de: "Tesla",
            nl: "Tesla"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Ford Motor Company was founded by Henry Ford on June 16, 1903. Ford revolutionized manufacturing with the assembly line production method, making automobiles affordable for the average American. The Model T became one of the most iconic cars in history.",
          es: "La Ford Motor Company fue fundada por Henry Ford el 16 de junio de 1903. Ford revolucionó la fabricación con el método de producción en cadena de montaje, haciendo que los automóviles fueran asequibles para el estadounidense promedio. El Modelo T se convirtió en uno de los autos más icónicos de la historia.",
          de: "Die Ford Motor Company wurde von Henry Ford am 16. Juni 1903 gegründet. Ford revolutionierte die Fertigung mit der Fließbandproduktionsmethode und machte Automobile für den durchschnittlichen Amerikaner erschwinglich. Das Model T wurde zu einem der ikonischsten Autos der Geschichte.",
          nl: "De Ford Motor Company werd opgericht door Henry Ford op 16 juni 1903. Ford revolutioneerde de productie met de lopende-bandproductiemethode, waardoor auto's betaalbaar werden voor de gemiddelde Amerikaan. De Model T werd een van de meest iconische auto's in de geschiedenis."
        }
      },
      {
        question: {
          en: "June 16 is now celebrated as Youth Day in which country?",
          es: "El 16 de junio ahora se celebra como Día de la Juventud en ¿qué país?",
          de: "Der 16. Juni wird heute als Tag der Jugend in welchem Land gefeiert?",
          nl: "16 juni wordt nu gevierd als Jeugddag in welk land?"
        },
        options: [
          {
            en: "United States",
            es: "Estados Unidos",
            de: "Vereinigte Staaten",
            nl: "Verenigde Staten"
          },
          {
            en: "United Kingdom",
            es: "Reino Unido",
            de: "Vereinigtes Königreich",
            nl: "Verenigd Koninkrijk"
          },
          {
            en: "South Africa",
            es: "Sudáfrica",
            de: "Südafrika",
            nl: "Zuid-Afrika"
          },
          {
            en: "Australia",
            es: "Australia",
            de: "Australien",
            nl: "Australië"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "South Africa celebrates June 16 as Youth Day, commemorating the Soweto Uprising of 1976. This public holiday honors the young people who fought against apartheid's unjust education policies and recognizes the important role of youth in achieving freedom and democracy.",
          es: "Sudáfrica celebra el 16 de junio como Día de la Juventud, conmemorando el Levantamiento de Soweto de 1976. Este día festivo honra a los jóvenes que lucharon contra las políticas educativas injustas del apartheid y reconoce el papel importante de la juventud en el logro de la libertad y la democracia.",
          de: "Südafrika feiert den 16. Juni als Tag der Jugend, in Gedenken an den Soweto-Aufstand von 1976. Dieser Feiertag ehrt die jungen Menschen, die gegen die ungerechten Bildungspolitiken der Apartheid kämpften, und erkennt die wichtige Rolle der Jugend bei der Erlangung von Freiheit und Demokratie an.",
          nl: "Zuid-Afrika viert 16 juni als Jeugddag, ter herdenking van de Soweto-opstand van 1976. Deze feestdag eert de jongeren die vochten tegen het onrechtvaardige onderwijsbeleid van apartheid en erkent de belangrijke rol van jongeren bij het bereiken van vrijheid en democratie."
        }
      },
      {
        question: {
          en: "On June 16, 1963, which Soviet cosmonaut became the first woman in space?",
          es: "El 16 de junio de 1963, ¿qué cosmonauta soviética se convirtió en la primera mujer en el espacio?",
          de: "Welche sowjetische Kosmonautin wurde am 16. Juni 1963 die erste Frau im Weltraum?",
          nl: "Welke Sovjet-kosmonaut werd op 16 juni 1963 de eerste vrouw in de ruimte?"
        },
        options: [
          {
            en: "Sally Ride",
            es: "Sally Ride",
            de: "Sally Ride",
            nl: "Sally Ride"
          },
          {
            en: "Valentina Tereshkova",
            es: "Valentina Tereshkova",
            de: "Valentina Tereschkowa",
            nl: "Valentina Tereshkova"
          },
          {
            en: "Svetlana Savitskaya",
            es: "Svetlana Savitskaya",
            de: "Swetlana Sawizkaja",
            nl: "Svetlana Savitskaya"
          },
          {
            en: "Mae Jemison",
            es: "Mae Jemison",
            de: "Mae Jemison",
            nl: "Mae Jemison"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Valentina Tereshkova launched into space aboard Vostok 6 on June 16, 1963, becoming the first woman to fly in space. Her mission lasted almost three days and she orbited Earth 48 times. It would be nearly 20 years before another woman would go to space.",
          es: "Valentina Tereshkova fue lanzada al espacio a bordo del Vostok 6 el 16 de junio de 1963, convirtiéndose en la primera mujer en volar al espacio. Su misión duró casi tres días y orbitó la Tierra 48 veces. Pasarían casi 20 años antes de que otra mujer fuera al espacio.",
          de: "Valentina Tereschkowa startete am 16. Juni 1963 an Bord von Wostok 6 ins All und wurde die erste Frau im Weltraum. Ihre Mission dauerte fast drei Tage und sie umkreiste die Erde 48 Mal. Es sollte fast 20 Jahre dauern, bis eine weitere Frau ins All flog.",
          nl: "Valentina Tereshkova lanceerde op 16 juni 1963 aan boord van Vostok 6 de ruimte in en werd de eerste vrouw die in de ruimte vloog. Haar missie duurde bijna drie dagen en ze cirkelde 48 keer rond de aarde. Het zou bijna 20 jaar duren voordat een andere vrouw naar de ruimte zou gaan."
        }
      }
    ],

    // Day 17 - June 17th: Watergate Break-in
    day17: [
      {
        question: {
          en: "On June 17, 1972, what notorious event occurred at the Watergate complex in Washington D.C.?",
          es: "El 17 de junio de 1972, ¿qué evento notorio ocurrió en el complejo Watergate en Washington D.C.?",
          de: "Welches berüchtigte Ereignis ereignete sich am 17. Juni 1972 im Watergate-Komplex in Washington D.C.?",
          nl: "Welke beruchte gebeurtenis vond plaats op 17 juni 1972 in het Watergate-complex in Washington D.C.?"
        },
        options: [
          {
            en: "A robbery at a jewelry store",
            es: "Un robo en una joyería",
            de: "Ein Raubüberfall auf einen Juwelier",
            nl: "Een overval op een juwelier"
          },
          {
            en: "The Watergate break-in",
            es: "El allanamiento de Watergate",
            de: "Der Watergate-Einbruch",
            nl: "De Watergate-inbraak"
          },
          {
            en: "A presidential inauguration",
            es: "Una inauguración presidencial",
            de: "Eine Präsidentschaftseinweihung",
            nl: "Een presidentiële inauguratie"
          },
          {
            en: "A peace treaty signing",
            es: "La firma de un tratado de paz",
            de: "Eine Friedensvertragsunterzeichnung",
            nl: "Een vredesverdragondertekening"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Five men were arrested for breaking into the Democratic National Committee headquarters at the Watergate complex. This burglary led to investigations that uncovered President Nixon's involvement in covering up the crime, ultimately forcing him to resign in 1974, the only U.S. president to do so.",
          es: "Cinco hombres fueron arrestados por irrumpir en la sede del Comité Nacional Demócrata en el complejo Watergate. Este robo llevó a investigaciones que descubrieron la participación del presidente Nixon en encubrir el crimen, lo que finalmente lo obligó a renunciar en 1974, el único presidente estadounidense en hacerlo.",
          de: "Fünf Männer wurden verhaftet, weil sie in das Hauptquartier des Demokratischen Nationalkomitees im Watergate-Komplex eingebrochen waren. Dieser Einbruch führte zu Ermittlungen, die Präsident Nixons Beteiligung an der Vertuschung des Verbrechens aufdeckten und ihn schließlich 1974 zum Rücktritt zwangen, als einziger US-Präsident.",
          nl: "Vijf mannen werden gearresteerd voor het inbreken in het hoofdkwartier van het Democratisch Nationaal Comité in het Watergate-complex. Deze inbraak leidde tot onderzoeken die de betrokkenheid van president Nixon bij het verdoezelen van de misdaad aan het licht brachten, wat hem uiteindelijk dwong in 1974 af te treden, de enige Amerikaanse president die dit deed."
        }
      },
      {
        question: {
          en: "What was the target of the Watergate break-in?",
          es: "¿Cuál fue el objetivo del allanamiento de Watergate?",
          de: "Was war das Ziel des Watergate-Einbruchs?",
          nl: "Wat was het doelwit van de Watergate-inbraak?"
        },
        options: [
          { en: "Democratic National Committee offices", es: "Oficinas del Comité Nacional Demócrata", de: "Büros des Demokratischen Nationalkomitees", nl: "Kantoren van het Democratisch Nationaal Comité" },
          { en: "The Supreme Court", es: "La Corte Suprema", de: "Der Oberste Gerichtshof", nl: "Het Hooggerechtshof" },
          { en: "The White House", es: "La Casa Blanca", de: "Das Weiße Haus", nl: "Het Witte Huis" },
          { en: "The Pentagon", es: "El Pentágono", de: "Das Pentagon", nl: "Het Pentagon" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The burglars were attempting to wiretap phones and steal documents from the Democratic National Committee headquarters. The break-in was part of a larger campaign of political espionage and sabotage directed by members of President Nixon's re-election committee.",
          es: "Los ladrones intentaban intervenir teléfonos y robar documentos de la sede del Comité Nacional Demócrata. El allanamiento era parte de una campaña más amplia de espionaje político y sabotaje dirigida por miembros del comité de reelección del presidente Nixon.",
          de: "Die Einbrecher versuchten, Telefone anzuzapfen und Dokumente aus dem Hauptquartier des Demokratischen Nationalkomitees zu stehlen. Der Einbruch war Teil einer größeren Kampagne politischer Spionage und Sabotage, die von Mitgliedern von Präsident Nixons Wiederwahlkomitee geleitet wurde.",
          nl: "De inbrekers probeerden telefoons af te tappen en documenten te stelen van het hoofdkwartier van het Democratisch Nationaal Comité. De inbraak maakte deel uit van een grotere campagne van politieke spionage en sabotage geleid door leden van het herverkiezingscomité van president Nixon."
        }
      },
      {
        question: {
          en: "On June 17, 1775, which famous Revolutionary War battle took place near Boston?",
          es: "El 17 de junio de 1775, ¿qué famosa batalla de la Guerra Revolucionaria tuvo lugar cerca de Boston?",
          de: "Welche berühmte Schlacht des Unabhängigkeitskrieges fand am 17. Juni 1775 in der Nähe von Boston statt?",
          nl: "Welke beroemde slag uit de Onafhankelijkheidsoorlog vond plaats op 17 juni 1775 bij Boston?"
        },
        options: [
          {
            en: "Battle of Lexington",
            es: "Batalla de Lexington",
            de: "Schlacht von Lexington",
            nl: "Slag bij Lexington"
          },
          {
            en: "Battle of Bunker Hill",
            es: "Batalla de Bunker Hill",
            de: "Schlacht von Bunker Hill",
            nl: "Slag bij Bunker Hill"
          },
          {
            en: "Battle of Yorktown",
            es: "Batalla de Yorktown",
            de: "Schlacht von Yorktown",
            nl: "Slag bij Yorktown"
          },
          {
            en: "Battle of Saratoga",
            es: "Batalla de Saratoga",
            de: "Schlacht von Saratoga",
            nl: "Slag bij Saratoga"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Battle of Bunker Hill (actually fought on Breed's Hill) was one of the first major battles of the American Revolution. Though the British won, they suffered heavy casualties. The battle demonstrated that colonial forces could stand against the British army and boosted American confidence.",
          es: "La Batalla de Bunker Hill (realmente luchada en Breed's Hill) fue una de las primeras batallas importantes de la Revolución Americana. Aunque los británicos ganaron, sufrieron grandes bajas. La batalla demostró que las fuerzas coloniales podían enfrentarse al ejército británico y aumentó la confianza estadounidense.",
          de: "Die Schlacht von Bunker Hill (tatsächlich auf Breed's Hill ausgetragen) war eine der ersten großen Schlachten der Amerikanischen Revolution. Obwohl die Briten gewannen, erlitten sie schwere Verluste. Die Schlacht zeigte, dass koloniale Streitkräfte der britischen Armee standhalten konnten und stärkte das amerikanische Selbstvertrauen.",
          nl: "De Slag bij Bunker Hill (eigenlijk uitgevochten op Breed's Hill) was een van de eerste grote veldslagen van de Amerikaanse Revolutie. Hoewel de Britten wonnen, leden ze zware verliezen. De slag toonde aan dat koloniale troepen stand konden houden tegen het Britse leger en vergrootte het Amerikaanse zelfvertrouwen."
        }
      },
      {
        question: {
          en: "What major consequence resulted from the Watergate scandal?",
          es: "¿Qué consecuencia importante resultó del escándalo de Watergate?",
          de: "Welche wichtige Konsequenz ergab sich aus dem Watergate-Skandal?",
          nl: "Welke belangrijke consequentie volgde uit het Watergate-schandaal?"
        },
        options: [
          { en: "The closing of the Supreme Court", es: "El cierre de la Corte Suprema", de: "Die Schließung des Obersten Gerichtshofs", nl: "De sluiting van het Hooggerechtshof" },
          { en: "The impeachment of Congress", es: "El juicio político del Congreso", de: "Die Amtsenthebung des Kongresses", nl: "De afzetting van het Congres" },
          { en: "The end of presidential elections", es: "El fin de las elecciones presidenciales", de: "Das Ende der Präsidentschaftswahlen", nl: "Het einde van presidentsverkiezingen" },
          { en: "President Nixon's resignation", es: "La renuncia del presidente Nixon", de: "Der Rücktritt von Präsident Nixon", nl: "Het aftreden van president Nixon" }
        ],
        correctIndex: 3,
        explanation: {
          en: "President Richard Nixon resigned on August 8, 1974, becoming the first and only U.S. president to resign from office. Facing almost certain impeachment for obstruction of justice and abuse of power, Nixon chose to step down. The scandal profoundly affected public trust in government.",
          es: "El presidente Richard Nixon renunció el 8 de agosto de 1974, convirtiéndose en el primer y único presidente estadounidense en renunciar a su cargo. Enfrentando un juicio político casi seguro por obstrucción de la justicia y abuso de poder, Nixon eligió renunciar. El escándalo afectó profundamente la confianza pública en el gobierno.",
          de: "Präsident Richard Nixon trat am 8. August 1974 zurück und wurde der erste und einzige US-Präsident, der zurücktrat. Angesichts einer fast sicheren Amtsenthebung wegen Behinderung der Justiz und Machtmissbrauch entschied sich Nixon zurückzutreten. Der Skandal beeinträchtigte das öffentliche Vertrauen in die Regierung erheblich.",
          nl: "President Richard Nixon trad af op 8 augustus 1974 en werd de eerste en enige Amerikaanse president die aftrad. Geconfronteerd met een bijna zekere afzetting wegens belemmering van de rechtsgang en machtsmisbruik, koos Nixon ervoor af te treden. Het schandaal beïnvloedde het publieke vertrouwen in de overheid diepgaand."
        }
      },
      {
        question: {
          en: "On June 17, 1994, what major event in sports history occurred?",
          es: "El 17 de junio de 1994, ¿qué evento importante en la historia del deporte ocurrió?",
          de: "Welches wichtige Ereignis in der Sportgeschichte ereignete sich am 17. Juni 1994?",
          nl: "Welke belangrijke gebeurtenis in de sportgeschiedenis vond plaats op 17 juni 1994?"
        },
        options: [
          { en: "O.J. Simpson's low-speed police chase", es: "La persecución policial a baja velocidad de O.J. Simpson", de: "O.J. Simpsons langsame Polizeiverfolgungsjagd", nl: "O.J. Simpsons langzame politieachtervolging" },
          { en: "The first World Cup final", es: "La primera final de la Copa del Mundo", de: "Das erste Weltcup-Finale", nl: "De eerste Wereldbeker finale" },
          { en: "The Olympics opening ceremony", es: "La ceremonia de apertura de los Juegos Olímpicos", de: "Die olympische Eröffnungsfeier", nl: "De openingsceremonie van de Olympische Spelen" },
          { en: "The Super Bowl", es: "El Super Bowl", de: "Der Super Bowl", nl: "De Super Bowl" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On June 17, 1994, millions watched on live television as former NFL star O.J. Simpson led police on a low-speed chase in a white Ford Bronco on Los Angeles freeways. The chase interrupted coverage of the NBA Finals and became one of the most watched events in television history.",
          es: "El 17 de junio de 1994, millones de personas vieron en televisión en vivo cómo la ex estrella de la NFL O.J. Simpson lideró a la policía en una persecución a baja velocidad en una Ford Bronco blanca por las autopistas de Los Ángeles. La persecución interrumpió la cobertura de las Finales de la NBA y se convirtió en uno de los eventos más vistos en la historia de la televisión.",
          de: "Am 17. Juni 1994 sahen Millionen im Live-Fernsehen zu, wie der ehemalige NFL-Star O.J. Simpson die Polizei in einem weißen Ford Bronco auf den Autobahnen von Los Angeles in einer langsamen Verfolgungsjagd führte. Die Verfolgungsjagd unterbrach die Berichterstattung über die NBA-Finals und wurde zu einem der meistgesehenen Ereignisse in der Fernsehgeschichte.",
          nl: "Op 17 juni 1994 keken miljoenen mensen live op televisie toe terwijl voormalig NFL-ster O.J. Simpson de politie op een langzame achtervolging leidde in een witte Ford Bronco op de snelwegen van Los Angeles. De achtervolging onderbrak de berichtgeving van de NBA Finals en werd een van de meest bekeken gebeurtenissen in de televisiegeschiedenis."
        }
      }
    ],

    // Day 18 - June 18th: Battle of Waterloo
    day18: [
      {
        question: {
          en: "On June 18, 1815, which decisive battle ended Napoleon Bonaparte's rule as Emperor of France?",
          es: "El 18 de junio de 1815, ¿qué batalla decisiva terminó el gobierno de Napoleón Bonaparte como Emperador de Francia?",
          de: "Welche entscheidende Schlacht beendete am 18. Juni 1815 Napoleon Bonapartes Herrschaft als Kaiser von Frankreich?",
          nl: "Welke beslissende slag beëindigde op 18 juni 1815 Napoleon Bonapartes heerschappij als keizer van Frankrijk?"
        },
        options: [
          {
            en: "Battle of Austerlitz",
            es: "Batalla de Austerlitz",
            de: "Schlacht von Austerlitz",
            nl: "Slag bij Austerlitz"
          },
          {
            en: "Battle of Leipzig",
            es: "Batalla de Leipzig",
            de: "Schlacht bei Leipzig",
            nl: "Slag bij Leipzig"
          },
          {
            en: "Battle of Waterloo",
            es: "Batalla de Waterloo",
            de: "Schlacht bei Waterloo",
            nl: "Slag bij Waterloo"
          },
          {
            en: "Battle of Trafalgar",
            es: "Batalla de Trafalgar",
            de: "Schlacht von Trafalgar",
            nl: "Slag bij Trafalgar"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Waterloo was fought near Waterloo in present-day Belgium, ending Napoleon's Hundred Days return from exile. The Duke of Wellington and Prussian forces under Blücher defeated Napoleon's army. This battle reshaped Europe and ended the Napoleonic Wars, leading to Napoleon's exile to Saint Helena.",
          es: "La Batalla de Waterloo se libró cerca de Waterloo en la actual Bélgica, terminando el regreso de los Cien Días de Napoleón del exilio. El Duque de Wellington y las fuerzas prusianas bajo Blücher derrotaron al ejército de Napoleón. Esta batalla reformó Europa y terminó las Guerras Napoleónicas, llevando al exilio de Napoleón en Santa Elena.",
          de: "Die Schlacht bei Waterloo wurde in der Nähe von Waterloo im heutigen Belgien ausgetragen und beendete Napoleons Hundert-Tage-Rückkehr aus dem Exil. Der Herzog von Wellington und preußische Streitkräfte unter Blücher besiegten Napoleons Armee. Diese Schlacht gestaltete Europa neu und beendete die Napoleonischen Kriege, was zu Napoleons Verbannung nach St. Helena führte.",
          nl: "De Slag bij Waterloo werd uitgevochten bij Waterloo in het huidige België en beëindigde Napoleons terugkeer van de Honderd Dagen uit ballingschap. De hertog van Wellington en Pruisische troepen onder Blücher versloegen Napoleons leger. Deze slag hervormde Europa en beëindigde de Napoleontische oorlogen, wat leidde tot Napoleons ballingschap naar Sint-Helena."
        }
      },
      {
        question: {
          en: "Who commanded the British forces at the Battle of Waterloo?",
          es: "¿Quién comandó las fuerzas británicas en la Batalla de Waterloo?",
          de: "Wer befehligte die britischen Streitkräfte in der Schlacht bei Waterloo?",
          nl: "Wie commandeerde de Britse troepen bij de Slag bij Waterloo?"
        },
        options: [
          {
            en: "Admiral Nelson",
            es: "Almirante Nelson",
            de: "Admiral Nelson",
            nl: "Admiraal Nelson"
          },
          {
            en: "The Duke of Wellington",
            es: "El Duque de Wellington",
            de: "Der Herzog von Wellington",
            nl: "De hertog van Wellington"
          },
          {
            en: "General Cornwallis",
            es: "General Cornwallis",
            de: "General Cornwallis",
            nl: "Generaal Cornwallis"
          },
          {
            en: "Lord Kitchener",
            es: "Lord Kitchener",
            de: "Lord Kitchener",
            nl: "Lord Kitchener"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Arthur Wellesley, the Duke of Wellington, commanded the Anglo-Allied army at Waterloo. His defensive tactics and coordination with Prussian forces under Marshal Blücher proved decisive. Wellington later became British Prime Minister and is remembered as one of Britain's greatest military commanders.",
          es: "Arthur Wellesley, el Duque de Wellington, comandó el ejército anglo-aliado en Waterloo. Sus tácticas defensivas y coordinación con las fuerzas prusianas bajo el mariscal Blücher resultaron decisivas. Wellington se convirtió más tarde en Primer Ministro británico y es recordado como uno de los más grandes comandantes militares de Gran Bretaña.",
          de: "Arthur Wellesley, der Herzog von Wellington, befehligte die anglo-alliierte Armee bei Waterloo. Seine Defensivtaktiken und die Koordination mit den preußischen Streitkräften unter Marschall Blücher erwiesen sich als entscheidend. Wellington wurde später britischer Premierminister und wird als einer der größten Militärkommandanten Großbritanniens in Erinnerung behalten.",
          nl: "Arthur Wellesley, de hertog van Wellington, commandeerde het Anglo-geallieerde leger bij Waterloo. Zijn defensieve tactieken en coördinatie met Pruisische troepen onder maarschalk Blücher bleken beslissend. Wellington werd later Brits premier en wordt herinnerd als een van Groot-Brittannië's grootste militaire commandanten."
        }
      },
      {
        question: {
          en: "On June 18, 1983, which American became the first woman in space from the United States?",
          es: "El 18 de junio de 1983, ¿qué estadounidense se convirtió en la primera mujer en el espacio de Estados Unidos?",
          de: "Welche Amerikanerin wurde am 18. Juni 1983 die erste Frau im Weltraum aus den Vereinigten Staaten?",
          nl: "Welke Amerikaanse werd op 18 juni 1983 de eerste vrouw in de ruimte uit de Verenigde Staten?"
        },
        options: [
          {
            en: "Mae Jemison",
            es: "Mae Jemison",
            de: "Mae Jemison",
            nl: "Mae Jemison"
          },
          {
            en: "Valentina Tereshkova",
            es: "Valentina Tereshkova",
            de: "Valentina Tereschkowa",
            nl: "Valentina Tereshkova"
          },
          {
            en: "Sally Ride",
            es: "Sally Ride",
            de: "Sally Ride",
            nl: "Sally Ride"
          },
          {
            en: "Eileen Collins",
            es: "Eileen Collins",
            de: "Eileen Collins",
            nl: "Eileen Collins"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Sally Ride launched aboard Space Shuttle Challenger on June 18, 1983, becoming the first American woman in space. A physicist and astronaut, she flew two shuttle missions and later became a champion for science education. Her achievement broke barriers and inspired generations of women in science and space exploration.",
          es: "Sally Ride fue lanzada a bordo del transbordador espacial Challenger el 18 de junio de 1983, convirtiéndose en la primera mujer estadounidense en el espacio. Física y astronauta, voló dos misiones del transbordador y más tarde se convirtió en una defensora de la educación científica. Su logro rompió barreras e inspiró a generaciones de mujeres en la ciencia y la exploración espacial.",
          de: "Sally Ride startete am 18. Juni 1983 an Bord des Space Shuttle Challenger und wurde die erste amerikanische Frau im Weltraum. Als Physikerin und Astronautin flog sie zwei Shuttle-Missionen und wurde später eine Verfechterin der naturwissenschaftlichen Bildung. Ihre Leistung durchbrach Barrieren und inspirierte Generationen von Frauen in Wissenschaft und Weltraumforschung.",
          nl: "Sally Ride lanceerde aan boord van de Space Shuttle Challenger op 18 juni 1983 en werd de eerste Amerikaanse vrouw in de ruimte. Als fysicus en astronaut vloog ze twee shuttlemissies en werd later een kampioene voor wetenschappelijk onderwijs. Haar prestatie doorbrak barrières en inspireerde generaties vrouwen in wetenschap en ruimtevaartonderzoek."
        }
      },
      {
        question: {
          en: "Where did Napoleon Bonaparte spend the rest of his life after losing at Waterloo?",
          es: "¿Dónde pasó Napoleón Bonaparte el resto de su vida después de perder en Waterloo?",
          de: "Wo verbrachte Napoleon Bonaparte nach seiner Niederlage bei Waterloo den Rest seines Lebens?",
          nl: "Waar bracht Napoleon Bonaparte de rest van zijn leven door na zijn nederlaag bij Waterloo?"
        },
        options: [
          {
            en: "Elba Island",
            es: "Isla de Elba",
            de: "Insel Elba",
            nl: "Eiland Elba"
          },
          {
            en: "Corsica",
            es: "Córcega",
            de: "Korsika",
            nl: "Corsica"
          },
          {
            en: "Saint Helena",
            es: "Santa Elena",
            de: "St. Helena",
            nl: "Sint-Helena"
          },
          {
            en: "Malta",
            es: "Malta",
            de: "Malta",
            nl: "Malta"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "After his defeat at Waterloo, Napoleon was exiled to the remote island of Saint Helena in the South Atlantic Ocean, over 1,200 miles from the nearest continent. He lived there under British supervision until his death in 1821. This final exile ensured he could never again threaten European stability.",
          es: "Después de su derrota en Waterloo, Napoleón fue exiliado a la remota isla de Santa Elena en el Océano Atlántico Sur, a más de 1,200 millas del continente más cercano. Vivió allí bajo supervisión británica hasta su muerte en 1821. Este exilio final aseguró que nunca más pudiera amenazar la estabilidad europea.",
          de: "Nach seiner Niederlage bei Waterloo wurde Napoleon auf die abgelegene Insel St. Helena im Südatlantik verbannt, über 1.200 Meilen vom nächsten Kontinent entfernt. Er lebte dort unter britischer Aufsicht bis zu seinem Tod 1821. Diese letzte Verbannung stellte sicher, dass er nie wieder die europäische Stabilität bedrohen konnte.",
          nl: "Na zijn nederlaag bij Waterloo werd Napoleon verbannen naar het afgelegen eiland Sint-Helena in de Zuid-Atlantische Oceaan, meer dan 1.200 mijl van het dichtstbijzijnde continent. Hij leefde daar onder Brits toezicht tot zijn dood in 1821. Deze laatste ballingschap zorgde ervoor dat hij nooit meer de Europese stabiliteit kon bedreigen."
        }
      },
      {
        question: {
          en: "On June 18, 1812, the United States declared war on which country, beginning the War of 1812?",
          es: "El 18 de junio de 1812, Estados Unidos declaró la guerra a ¿qué país, comenzando la Guerra de 1812?",
          de: "Am 18. Juni 1812 erklärten die Vereinigten Staaten welchem Land den Krieg und begannen damit den Krieg von 1812?",
          nl: "Op 18 juni 1812 verklaarde de Verenigde Staten de oorlog aan welk land, waarmee de Oorlog van 1812 begon?"
        },
        options: [
          {
            en: "France",
            es: "Francia",
            de: "Frankreich",
            nl: "Frankrijk"
          },
          {
            en: "Spain",
            es: "España",
            de: "Spanien",
            nl: "Spanje"
          },
          {
            en: "Great Britain",
            es: "Gran Bretaña",
            de: "Großbritannien",
            nl: "Groot-Brittannië"
          },
          {
            en: "Russia",
            es: "Rusia",
            de: "Russland",
            nl: "Rusland"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The United States declared war on Great Britain on June 18, 1812, citing British interference with American shipping and impressment of American sailors. The war lasted until 1815 and included the burning of Washington D.C. and the Battle of New Orleans. The conflict ended in a treaty that essentially restored pre-war boundaries.",
          es: "Estados Unidos declaró la guerra a Gran Bretaña el 18 de junio de 1812, citando la interferencia británica con el comercio marítimo estadounidense y la leva forzosa de marineros estadounidenses. La guerra duró hasta 1815 e incluyó la quema de Washington D.C. y la Batalla de Nueva Orleans. El conflicto terminó en un tratado que esencialmente restauró las fronteras previas a la guerra.",
          de: "Die Vereinigten Staaten erklärten Großbritannien am 18. Juni 1812 den Krieg und verwiesen auf britische Einmischung in die amerikanische Schifffahrt und Zwangsrekrutierung amerikanischer Seeleute. Der Krieg dauerte bis 1815 und umfasste die Verbrennung von Washington D.C. und die Schlacht von New Orleans. Der Konflikt endete mit einem Vertrag, der im Wesentlichen die Vorkriegsgrenzen wiederherstellte.",
          nl: "De Verenigde Staten verklaarden de oorlog aan Groot-Brittannië op 18 juni 1812, verwijzend naar Britse inmenging in de Amerikaanse scheepvaart en gedwongen rekrutering van Amerikaanse zeelieden. De oorlog duurde tot 1815 en omvatte de verbranding van Washington D.C. en de Slag bij New Orleans. Het conflict eindigde met een verdrag dat in wezen de vooroorlogse grenzen herstelde."
        }
      }
    ],

    // Day 19 - June 19th: Juneteenth
    day19: [
      {
        question: {
          en: "On June 19, 1865, what significant announcement was made in Galveston, Texas?",
          es: "El 19 de junio de 1865, ¿qué anuncio significativo se hizo en Galveston, Texas?",
          de: "Welche bedeutende Ankündigung wurde am 19. Juni 1865 in Galveston, Texas gemacht?",
          nl: "Welke belangrijke aankondiging werd gedaan op 19 juni 1865 in Galveston, Texas?"
        },
        options: [
          {
            en: "The end of the Civil War",
            es: "El fin de la Guerra Civil",
            de: "Das Ende des Bürgerkriegs",
            nl: "Het einde van de Burgeroorlog"
          },
          {
            en: "The enforcement of the Emancipation Proclamation freeing enslaved people",
            es: "La aplicación de la Proclamación de Emancipación liberando a las personas esclavizadas",
            de: "Die Durchsetzung der Emanzipationsproklamation zur Befreiung versklavter Menschen",
            nl: "De handhaving van de Emancipatieproclamatie die tot vrijlating van tot slaaf gemaakte mensen leidde"
          },
          {
            en: "Texas statehood",
            es: "La estadidad de Texas",
            de: "Die Staatlichkeit von Texas",
            nl: "Het staatschap van Texas"
          },
          {
            en: "The discovery of oil",
            es: "El descubrimiento del petróleo",
            de: "Die Entdeckung von Öl",
            nl: "De ontdekking van olie"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Union General Gordon Granger arrived in Galveston and announced that all enslaved people in Texas were now free, over two years after the Emancipation Proclamation. This date became known as Juneteenth, celebrating the end of slavery in the United States and is now a federal holiday recognizing African American freedom and achievement.",
          es: "El general de la Unión Gordon Granger llegó a Galveston y anunció que todas las personas esclavizadas en Texas ahora eran libres, más de dos años después de la Proclamación de Emancipación. Esta fecha se conoció como Juneteenth, celebrando el fin de la esclavitud en Estados Unidos y ahora es un día festivo federal que reconoce la libertad y el logro afroamericano.",
          de: "Unionsgeneral Gordon Granger kam in Galveston an und verkündete, dass alle versklavten Menschen in Texas nun frei seien, über zwei Jahre nach der Emanzipationsproklamation. Dieses Datum wurde als Juneteenth bekannt und feiert das Ende der Sklaverei in den Vereinigten Staaten und ist jetzt ein Bundesfeiertag, der die afroamerikanische Freiheit und Leistung anerkennt.",
          nl: "Unie-generaal Gordon Granger arriveerde in Galveston en kondigde aan dat alle tot slaaf gemaakte mensen in Texas nu vrij waren, meer dan twee jaar na de Emancipatieproclamatie. Deze datum werd bekend als Juneteenth, ter viering van het einde van de slavernij in de Verenigde Staten en is nu een federale feestdag die Afro-Amerikaanse vrijheid en prestatie erkent."
        }
      },
      {
        question: {
          en: "What does the name 'Juneteenth' combine?",
          es: "¿Qué combina el nombre 'Juneteenth'?",
          de: "Was kombiniert der Name 'Juneteenth'?",
          nl: "Wat combineert de naam 'Juneteenth'?"
        },
        options: [
          {
            en: "June and freedom",
            es: "Junio y libertad",
            de: "Juni und Freiheit",
            nl: "Juni en vrijheid"
          },
          {
            en: "June and nineteenth",
            es: "Junio y diecinueve",
            de: "Juni und neunzehnter",
            nl: "Juni en negentiende"
          },
          {
            en: "Justice andteenth",
            es: "Justicia y décimo",
            de: "Gerechtigkeit und zehnter",
            nl: "Rechtvaardigheid en tiende"
          },
          {
            en: "July andteenth",
            es: "Julio y décimo",
            de: "Juli und zehnter",
            nl: "Juli en tiende"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Juneteenth is a combination of 'June' and 'nineteenth,' commemorating June 19, 1865. The holiday is also known as Freedom Day, Jubilee Day, Liberation Day, and Emancipation Day. In 2021, it became the first new federal holiday in the United States since Martin Luther King Jr. Day was established.",
          es: "Juneteenth es una combinación de 'June' (junio) y 'nineteenth' (diecinueve), conmemorando el 19 de junio de 1865. El día festivo también se conoce como Día de la Libertad, Día del Jubileo, Día de la Liberación y Día de la Emancipación. En 2021, se convirtió en el primer nuevo día festivo federal en Estados Unidos desde que se estableció el Día de Martin Luther King Jr.",
          de: "'Juneteenth' ist eine Kombination aus 'June' (Juni) und 'nineteenth' (neunzehnter) zum Gedenken an den 19. Juni 1865. Der Feiertag ist auch als Freedom Day, Jubilee Day, Liberation Day und Emancipation Day bekannt. 2021 wurde er der erste neue Bundesfeiertag in den Vereinigten Staaten seit der Einführung des Martin Luther King Jr. Day.",
          nl: "'Juneteenth' is een combinatie van 'June' (juni) en 'nineteenth' (negentiende), ter herdenking van 19 juni 1865. De feestdag staat ook bekend als Freedom Day, Jubilee Day, Liberation Day en Emancipation Day. In 2021 werd het de eerste nieuwe federale feestdag in de Verenigde Staten sinds de Martin Luther King Jr. Day werd ingesteld."
        }
      },
      {
        question: {
          en: "Why did it take over two years after the Emancipation Proclamation for enslaved people in Texas to learn they were free?",
          es: "¿Por qué tardó más de dos años después de la Proclamación de Emancipación para que las personas esclavizadas en Texas supieran que eran libres?",
          de: "Warum dauerte es über zwei Jahre nach der Emanzipationsproklamation, bis versklavte Menschen in Texas erfuhren, dass sie frei waren?",
          nl: "Waarom duurde het meer dan twee jaar na de Emancipatieproclamatie voordat tot slaaf gemaakte mensen in Texas hoorden dat ze vrij waren?"
        },
        options: [
          { en: "Communication technology didn't exist", es: "La tecnología de comunicación no existía", de: "Kommunikationstechnologie existierte nicht", nl: "Communicatietechnologie bestond niet" },
          { en: "Texas was remote and had few Union troops to enforce the order", es: "Texas era remoto y tenía pocas tropas de la Unión para hacer cumplir la orden", de: "Texas war abgelegen und hatte wenige Unionstruppen zur Durchsetzung der Anordnung", nl: "Texas was afgelegen en had weinig Unie-troepen om de order af te dwingen" },
          { en: "The Emancipation Proclamation didn't apply to Texas", es: "La Proclamación de Emancipación no se aplicaba a Texas", de: "Die Emanzipationsproklamation galt nicht für Texas", nl: "De Emancipatieproclamatie was niet van toepassing op Texas" },
          { en: "Texas had already freed all enslaved people", es: "Texas ya había liberado a todas las personas esclavizadas", de: "Texas hatte bereits alle versklavten Menschen befreit", nl: "Texas had al alle tot slaaf gemaakte mensen bevrijd" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Texas was the most remote Confederate state with minimal Union presence during the war, allowing slavery to continue largely unimpeded. Many enslavers deliberately withheld the information from enslaved people. Only when Union troops arrived in force after the war's end could the proclamation be properly enforced throughout Texas.",
          es: "Texas era el estado confederado más remoto con presencia mínima de la Unión durante la guerra, permitiendo que la esclavitud continuara en gran medida sin impedimentos. Muchos esclavistas ocultaron deliberadamente la información a las personas esclavizadas. Solo cuando las tropas de la Unión llegaron en masa después del fin de la guerra pudo aplicarse adecuadamente la proclamación en todo Texas.",
          de: "Texas war der abgelegenste Konföderiertenstaat mit minimaler Unionspräsenz während des Krieges, was es der Sklaverei ermöglichte, weitgehend ungehindert fortzubestehen. Viele Sklavenhalter hielten die Information absichtlich vor versklavten Menschen zurück. Erst als Unionstruppen nach Kriegsende in großer Zahl eintrafen, konnte die Proklamation in ganz Texas ordnungsgemäß durchgesetzt werden.",
          nl: "Texas was de meest afgelegen Geconfedereerde staat met minimale aanwezigheid van de Unie tijdens de oorlog, waardoor slavernij grotendeels ongehinderd kon doorgaan. Veel slavenhouders weerhielden opzettelijk de informatie van tot slaaf gemaakte mensen. Pas toen de Unie-troepen in groten getale arriveerden na het einde van de oorlog, kon de proclamatie overal in Texas naar behoren worden afgedwongen."
        }
      },
      {
        question: {
          en: "In what year did Juneteenth become a federal holiday in the United States?",
          es: "¿En qué año se convirtió Juneteenth en un día festivo federal en Estados Unidos?",
          de: "In welchem Jahr wurde Juneteenth ein Bundesfeiertag in den Vereinigten Staaten?",
          nl: "In welk jaar werd Juneteenth een federale feestdag in de Verenigde Staten?"
        },
        options: [
          {
            en: "1965",
            es: "1965",
            de: "1965",
            nl: "1965"
          },
          {
            en: "1983",
            es: "1983",
            de: "1983",
            nl: "1983"
          },
          {
            en: "2000",
            es: "2000",
            de: "2000",
            nl: "2000"
          },
          {
            en: "2021",
            es: "2021",
            de: "2021",
            nl: "2021"
          }
        ],
        correctIndex: 3,
        explanation: {
          en: "President Joe Biden signed legislation making Juneteenth a federal holiday on June 17, 2021. This made it the first new federal holiday since Martin Luther King Jr. Day was established in 1983. The holiday officially commemorates the end of slavery in the United States and celebrates African American culture and achievements.",
          es: "El presidente Joe Biden firmó una legislación que convirtió a Juneteenth en un día festivo federal el 17 de junio de 2021. Esto lo convirtió en el primer nuevo día festivo federal desde que se estableció el Día de Martin Luther King Jr. en 1983. El día festivo conmemora oficialmente el fin de la esclavitud en Estados Unidos y celebra la cultura y los logros afroamericanos.",
          de: "Präsident Joe Biden unterzeichnete am 17. Juni 2021 ein Gesetz, das Juneteenth zu einem Bundesfeiertag machte. Dies machte ihn zum ersten neuen Bundesfeiertag seit der Einführung des Martin Luther King Jr. Day im Jahr 1983. Der Feiertag gedenkt offiziell dem Ende der Sklaverei in den Vereinigten Staaten und feiert die afroamerikanische Kultur und Errungenschaften.",
          nl: "President Joe Biden ondertekende op 17 juni 2021 wetgeving die van Juneteenth een federale feestdag maakte. Dit maakte het de eerste nieuwe federale feestdag sinds de Martin Luther King Jr. Day in 1983 werd ingesteld. De feestdag herdenkt officieel het einde van slavernij in de Verenigde Staten en viert Afro-Amerikaanse cultuur en prestaties."
        }
      },
      {
        question: {
          en: "On June 19, 1953, which couple was executed for espionage during the Cold War?",
          es: "El 19 de junio de 1953, ¿qué pareja fue ejecutada por espionaje durante la Guerra Fría?",
          de: "Welches Paar wurde am 19. Juni 1953 wegen Spionage während des Kalten Krieges hingerichtet?",
          nl: "Welk paar werd op 19 juni 1953 geëxecuteerd voor spionage tijdens de Koude Oorlog?"
        },
        options: [
          { en: "The Kennedys", es: "Los Kennedy", de: "Die Kennedys", nl: "De Kennedys" },
          { en: "The Rosenbergs", es: "Los Rosenberg", de: "Die Rosenbergs", nl: "De Rosenbergs" },
          { en: "The Nixons", es: "Los Nixon", de: "Die Nixons", nl: "De Nixons" },
          { en: "The Clintons", es: "Los Clinton", de: "Die Clintons", nl: "De Clintons" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Julius and Ethel Rosenberg were executed on June 19, 1953, for conspiracy to commit espionage after being convicted of passing atomic secrets to the Soviet Union. Their case remains controversial to this day, with ongoing debates about the fairness of their trial and the severity of their punishment during the height of Cold War tensions.",
          es: "Julius y Ethel Rosenberg fueron ejecutados el 19 de junio de 1953 por conspiración para cometer espionaje después de ser condenados por pasar secretos atómicos a la Unión Soviética. Su caso sigue siendo controvertido hasta el día de hoy, con debates continuos sobre la equidad de su juicio y la severidad de su castigo durante el apogeo de las tensiones de la Guerra Fría.",
          de: "Julius und Ethel Rosenberg wurden am 19. Juni 1953 wegen Verschwörung zur Spionage hingerichtet, nachdem sie der Weitergabe atomarer Geheimnisse an die Sowjetunion für schuldig befunden worden waren. Ihr Fall bleibt bis heute umstritten, mit anhaltenden Debatten über die Fairness ihres Prozesses und die Schwere ihrer Strafe während des Höhepunkts der Spannungen im Kalten Krieg.",
          nl: "Julius en Ethel Rosenberg werden op 19 juni 1953 geëxecuteerd voor samenzwering tot spionage nadat ze waren veroordeeld voor het doorgeven van atoomgeheimen aan de Sovjet-Unie. Hun zaak blijft tot op de dag van vandaag controversieel, met voortdurende debatten over de eerlijkheid van hun proces en de ernst van hun straf tijdens het hoogtepunt van de Koude Oorlog-spanningen."
        }
      }
    ],

    // Day 20 - June 20th: West Virginia Statehood & Summer Solstice
    day20: [
      {
        question: {
          en: "On June 20, 1863, which state was admitted to the Union during the Civil War?",
          es: "El 20 de junio de 1863, ¿qué estado fue admitido en la Unión durante la Guerra Civil?",
          de: "Welcher Staat wurde am 20. Juni 1863 während des Bürgerkriegs in die Union aufgenommen?",
          nl: "Welke staat werd op 20 juni 1863 tijdens de Burgeroorlog toegelaten tot de Unie?"
        },
        options: [
          {
            en: "Kentucky",
            es: "Kentucky",
            de: "Kentucky",
            nl: "Kentucky"
          },
          {
            en: "West Virginia",
            es: "Virginia Occidental",
            de: "West Virginia",
            nl: "West Virginia"
          },
          {
            en: "Tennessee",
            es: "Tennessee",
            de: "Tennessee",
            nl: "Tennessee"
          },
          {
            en: "Maryland",
            es: "Maryland",
            de: "Maryland",
            nl: "Maryland"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "West Virginia became the 35th state on June 20, 1863, the only state to form by seceding from a Confederate state during the Civil War. Western Virginia counties opposed secession and remained loyal to the Union, eventually forming their own state. West Virginia's motto is 'Montani Semper Liberi' (Mountaineers Are Always Free).",
          es: "Virginia Occidental se convirtió en el estado número 35 el 20 de junio de 1863, el único estado formado al separarse de un estado confederado durante la Guerra Civil. Los condados del oeste de Virginia se opusieron a la secesión y permanecieron leales a la Unión, formando eventualmente su propio estado. El lema de Virginia Occidental es 'Montani Semper Liberi' (Los Montañeses Siempre Son Libres).",
          de: "West Virginia wurde am 20. Juni 1863 der 35. Staat, der einzige Staat, der sich während des Bürgerkriegs durch Abspaltung von einem Konföderiertenstaat bildete. Die Grafschaften West-Virginias lehnten die Sezession ab und blieben der Union treu und bildeten schließlich ihren eigenen Staat. West Virginias Motto ist 'Montani Semper Liberi' (Bergbewohner sind immer frei).",
          nl: "West Virginia werd de 35e staat op 20 juni 1863, de enige staat die werd gevormd door zich af te scheiden van een Geconfedereerde staat tijdens de Burgeroorlog. De West-Virginia county's waren tegen afscheiding en bleven trouw aan de Unie, en vormden uiteindelijk hun eigen staat. Het motto van West Virginia is 'Montani Semper Liberi' (Bergbewoners zijn altijd vrij)."
        }
      },
      {
        question: {
          en: "What makes West Virginia unique among U.S. states?",
          es: "¿Qué hace que Virginia Occidental sea único entre los estados de EE. UU.?",
          de: "Was macht West Virginia unter den US-Bundesstaaten einzigartig?",
          nl: "Wat maakt West Virginia uniek onder Amerikaanse staten?"
        },
        options: [
          {
            en: "It was the first state admitted to the Union",
            es: "Fue el primer estado admitido en la Unión",
            de: "Es war der erste Staat, der in die Union aufgenommen wurde",
            nl: "Het was de eerste staat die tot de Unie werd toegelaten"
          },
          {
            en: "It's the only state formed by seceding from a Confederate state",
            es: "Es el único estado formado al separarse de un estado confederado",
            de: "Es ist der einzige Staat, der durch Abspaltung von einem Konföderiertenstaat gebildet wurde",
            nl: "Het is de enige staat die werd gevormd door zich af te scheiden van een Geconfedereerde staat"
          },
          {
            en: "It has no mountains",
            es: "No tiene montañas",
            de: "Es hat keine Berge",
            nl: "Het heeft geen bergen"
          },
          {
            en: "It was the last state to join the Union",
            es: "Fue el último estado en unirse a la Unión",
            de: "Es war der letzte Staat, der der Union beitrat",
            nl: "Het was de laatste staat die zich bij de Unie aansloot"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "West Virginia is unique as the only U.S. state to form by separating from another state during wartime. When Virginia seceded from the Union in 1861, the western counties refused to follow and instead created their own state that remained loyal to the Union. This unprecedented action was controversial but ultimately accepted by Congress.",
          es: "Virginia Occidental es único como el único estado de EE. UU. formado al separarse de otro estado durante tiempos de guerra. Cuando Virginia se separó de la Unión en 1861, los condados occidentales se negaron a seguir y en su lugar crearon su propio estado que permaneció leal a la Unión. Esta acción sin precedentes fue controvertida pero finalmente aceptada por el Congreso.",
          de: "West Virginia ist einzigartig als der einzige US-Bundesstaat, der sich während der Kriegszeit von einem anderen Staat abspaltete. Als Virginia 1861 aus der Union austrat, weigerten sich die westlichen Grafschaften zu folgen und gründeten stattdessen ihren eigenen Staat, der der Union treu blieb. Diese beispiellose Aktion war umstritten, wurde aber letztendlich vom Kongress akzeptiert.",
          nl: "West Virginia is uniek als de enige Amerikaanse staat die werd gevormd door zich tijdens oorlogstijd af te scheiden van een andere staat. Toen Virginia zich in 1861 afscheidde van de Unie, weigerden de westelijke county's te volgen en creëerden in plaats daarvan hun eigen staat die trouw bleef aan de Unie. Deze ongekende actie was controversieel maar werd uiteindelijk geaccepteerd door het Congres."
        }
      },
      {
        question: {
          en: "Around June 20-21, which astronomical event typically occurs in the Northern Hemisphere?",
          es: "Alrededor del 20-21 de junio, ¿qué evento astronómico ocurre típicamente en el Hemisferio Norte?",
          de: "Um den 20.-21. Juni herum tritt welches astronomische Ereignis typischerweise in der nördlichen Hemisphäre auf?",
          nl: "Rond 20-21 juni vindt welke astronomische gebeurtenis meestal plaats op het noordelijk halfrond?"
        },
        options: [
          {
            en: "Winter solstice",
            es: "Solsticio de invierno",
            de: "Wintersonnenwende",
            nl: "Winterzonnewende"
          },
          {
            en: "Summer solstice",
            es: "Solsticio de verano",
            de: "Sommersonnenwende",
            nl: "Zomerzonnewende"
          },
          {
            en: "Spring equinox",
            es: "Equinoccio de primavera",
            de: "Frühlingsäquinoktium",
            nl: "Lente-equinox"
          },
          {
            en: "Autumn equinox",
            es: "Equinoccio de otoño",
            de: "Herbstäquinoktium",
            nl: "Herfst-equinox"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The summer solstice, marking the longest day and shortest night of the year in the Northern Hemisphere, typically occurs around June 20-21. On this day, the North Pole is tilted closest to the sun, resulting in maximum daylight. Many cultures celebrate this astronomical event with festivals and traditions dating back thousands of years.",
          es: "El solsticio de verano, que marca el día más largo y la noche más corta del año en el Hemisferio Norte, generalmente ocurre alrededor del 20-21 de junio. En este día, el Polo Norte está inclinado más cerca del sol, resultando en la máxima luz del día. Muchas culturas celebran este evento astronómico con festivales y tradiciones que datan de miles de años.",
          de: "Die Sommersonnenwende, die den längsten Tag und die kürzeste Nacht des Jahres in der nördlichen Hemisphäre markiert, tritt typischerweise um den 20.-21. Juni auf. An diesem Tag ist der Nordpol am nächsten zur Sonne geneigt, was zu maximalem Tageslicht führt. Viele Kulturen feiern dieses astronomische Ereignis mit Festivals und Traditionen, die Tausende von Jahren zurückreichen.",
          nl: "De zomerzonnewende, die de langste dag en kortste nacht van het jaar op het noordelijk halfrond markeert, vindt meestal plaats rond 20-21 juni. Op deze dag helt de Noordpool het dichtst naar de zon, wat resulteert in maximaal daglicht. Veel culturen vieren deze astronomische gebeurtenis met festivals en tradities die duizenden jaren teruggaan."
        }
      },
      {
        question: {
          en: "On June 20, 1789, what historic oath did members of France's Third Estate take?",
          es: "El 20 de junio de 1789, ¿qué juramento histórico hicieron los miembros del Tercer Estado de Francia?",
          de: "Welchen historischen Eid legten Mitglieder des französischen Dritten Standes am 20. Juni 1789 ab?",
          nl: "Welke historische eed legden leden van de Franse Derde Stand op 20 juni 1789 af?"
        },
        options: [
          { en: "The Tennis Court Oath", es: "El Juramento del Juego de Pelota", de: "Der Ballhausschwur", nl: "De Eed van het Kaatsspel" },
          { en: "The Royal Oath", es: "El Juramento Real", de: "Der Königseid", nl: "De Koninklijke Eed" },
          { en: "The Oath of Allegiance", es: "El Juramento de Lealtad", de: "Der Treueeid", nl: "De Trouweed" },
          { en: "The Declaration of Independence", es: "La Declaración de Independencia", de: "Die Unabhängigkeitserklärung", nl: "De Onafhankelijkheidsverklaring" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Tennis Court Oath was taken on June 20, 1789, when members of France's Third Estate vowed not to separate until a constitution had been established. Locked out of their meeting hall, they gathered at a nearby tennis court. This oath was a pivotal moment leading to the French Revolution and the eventual overthrow of the monarchy.",
          es: "El Juramento del Juego de Pelota fue tomado el 20 de junio de 1789, cuando los miembros del Tercer Estado de Francia juraron no separarse hasta que se estableciera una constitución. Excluidos de su sala de reuniones, se reunieron en una cancha de tenis cercana. Este juramento fue un momento crucial que condujo a la Revolución Francesa y al eventual derrocamiento de la monarquía.",
          de: "Der Ballhausschwur wurde am 20. Juni 1789 abgelegt, als Mitglieder des französischen Dritten Standes schworen, sich nicht zu trennen, bis eine Verfassung geschaffen worden war. Aus ihrem Versammlungssaal ausgeschlossen, versammelten sie sich in einem nahegelegenen Ballhaus. Dieser Eid war ein entscheidender Moment, der zur Französischen Revolution und zum späteren Sturz der Monarchie führte.",
          nl: "De Eed van het Kaatsspel werd afgelegd op 20 juni 1789, toen leden van de Franse Derde Stand zworen niet uiteen te gaan totdat er een grondwet was vastgesteld. Buitengesloten van hun vergaderzaal, verzamelden ze zich bij een nabijgelegen kaatsbaan. Deze eed was een cruciaal moment dat leidde tot de Franse Revolutie en de uiteindelijke omverwerping van de monarchie."
        }
      },
      {
        question: {
          en: "On June 20, 1975, which famous movie about a great white shark was released?",
          es: "El 20 de junio de 1975, ¿qué película famosa sobre un gran tiburón blanco fue estrenada?",
          de: "Welcher berühmte Film über einen weißen Hai wurde am 20. Juni 1975 veröffentlicht?",
          nl: "Welke beroemde film over een grote witte haai werd uitgebracht op 20 juni 1975?"
        },
        options: [
          {
            en: "The Deep",
            es: "Las profundidades",
            de: "Der Tiefe",
            nl: "De Diepte"
          },
          {
            en: "Jaws",
            es: "Tiburón",
            de: "Der weiße Hai",
            nl: "Jaws"
          },
          {
            en: "Orca",
            es: "Orca",
            de: "Orca",
            nl: "Orca"
          },
          {
            en: "Moby Dick",
            es: "Moby Dick",
            de: "Moby Dick",
            nl: "Moby Dick"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Steven Spielberg's 'Jaws' was released on June 20, 1975, and became the first summer blockbuster in cinema history. The thriller about a great white shark terrorizing a beach community broke box office records and revolutionized movie marketing. Its iconic music by John Williams and the line 'You're gonna need a bigger boat' became part of pop culture.",
          es: "'Tiburón' de Steven Spielberg fue estrenada el 20 de junio de 1975 y se convirtió en el primer gran éxito de taquilla de verano en la historia del cine. El thriller sobre un gran tiburón blanco que aterroriza a una comunidad costera rompió récords de taquilla y revolucionó el marketing cinematográfico. Su música icónica de John Williams y la frase 'Vas a necesitar un bote más grande' se convirtieron en parte de la cultura pop.",
          de: "Steven Spielbergs 'Der weiße Hai' wurde am 20. Juni 1975 veröffentlicht und wurde der erste Sommer-Blockbuster in der Kinogeschichte. Der Thriller über einen weißen Hai, der eine Strandgemeinde terrorisiert, brach Kassenrekorde und revolutionierte das Filmmarketing. Seine ikonische Musik von John Williams und die Zeile 'Du wirst ein größeres Boot brauchen' wurden Teil der Popkultur.",
          nl: "Steven Spielbergs 'Jaws' werd uitgebracht op 20 juni 1975 en werd de eerste zomerblockbuster in de filmgeschiedenis. De thriller over een grote witte haai die een strandgemeenschap terroriseert brak box office records en revolutioneerde filmmarketing. De iconische muziek van John Williams en de zin 'You're gonna need a bigger boat' werden onderdeel van de popcultuur."
        }
      }
    ],

    // Day 21 - June 21st: Summer Solstice and Historical Events
    day21: [
      {
        question: {
          en: "On June 21, 1788, which state became the ninth to ratify the U.S. Constitution, making it official?",
          es: "El 21 de junio de 1788, ¿qué estado se convirtió en el noveno en ratificar la Constitución de EE. UU., haciéndola oficial?",
          de: "Welcher Staat ratifizierte am 21. Juni 1788 als neunter die US-Verfassung und machte sie damit offiziell?",
          nl: "Welke staat ratificeerde op 21 juni 1788 als negende de Amerikaanse Grondwet, waardoor deze officieel werd?"
        },
        options: [
          {
            en: "Virginia",
            es: "Virginia",
            de: "Virginia",
            nl: "Virginia"
          },
          {
            en: "New Hampshire",
            es: "Nuevo Hampshire",
            de: "New Hampshire",
            nl: "New Hampshire"
          },
          {
            en: "Massachusetts",
            es: "Massachusetts",
            de: "Massachusetts",
            nl: "Massachusetts"
          },
          {
            en: "New York",
            es: "Nueva York",
            de: "New York",
            nl: "New York"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "New Hampshire became the ninth state to ratify the U.S. Constitution on June 21, 1788, providing the necessary votes to make it the law of the land. The Constitution required ratification by nine of the thirteen states to go into effect. New Hampshire's ratification was a pivotal moment in American history, establishing the framework of government that still exists today.",
          es: "Nuevo Hampshire se convirtió en el noveno estado en ratificar la Constitución de EE. UU. el 21 de junio de 1788, proporcionando los votos necesarios para convertirla en la ley del país. La Constitución requería la ratificación de nueve de los trece estados para entrar en vigor. La ratificación de Nuevo Hampshire fue un momento crucial en la historia estadounidense, estableciendo el marco de gobierno que aún existe hoy.",
          de: "New Hampshire wurde am 21. Juni 1788 der neunte Staat, der die US-Verfassung ratifizierte und damit die notwendigen Stimmen lieferte, um sie zum Gesetz des Landes zu machen. Die Verfassung benötigte die Ratifizierung von neun der dreizehn Staaten, um in Kraft zu treten. New Hampshires Ratifizierung war ein entscheidender Moment in der amerikanischen Geschichte und etablierte den Regierungsrahmen, der noch heute besteht.",
          nl: "New Hampshire werd de negende staat die de Amerikaanse Grondwet ratificeerde op 21 juni 1788, waarmee de nodige stemmen werden geleverd om het de wet van het land te maken. De Grondwet vereiste ratificatie door negen van de dertien staten om van kracht te worden. De ratificatie door New Hampshire was een cruciaal moment in de Amerikaanse geschiedenis en vestigde het regeringskader dat vandaag nog steeds bestaat."
        }
      },
      {
        question: {
          en: "On June 21, 1971, which environmental organization was founded in Vancouver, Canada?",
          es: "El 21 de junio de 1971, ¿qué organización ambiental fue fundada en Vancouver, Canadá?",
          de: "Welche Umweltorganisation wurde am 21. Juni 1971 in Vancouver, Kanada gegründet?",
          nl: "Welke milieuorganisatie werd op 21 juni 1971 opgericht in Vancouver, Canada?"
        },
        options: [
          {
            en: "World Wildlife Fund",
            es: "Fondo Mundial para la Naturaleza",
            de: "World Wildlife Fund",
            nl: "Wereld Natuur Fonds"
          },
          {
            en: "Greenpeace",
            es: "Greenpeace",
            de: "Greenpeace",
            nl: "Greenpeace"
          },
          {
            en: "Sierra Club",
            es: "Sierra Club",
            de: "Sierra Club",
            nl: "Sierra Club"
          },
          {
            en: "Friends of the Earth",
            es: "Amigos de la Tierra",
            de: "Friends of the Earth",
            nl: "Vrienden van de Aarde"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Greenpeace was founded on June 21, 1971, in Vancouver, Canada, initially to protest nuclear testing. The organization has grown into one of the world's most influential environmental groups, known for direct action campaigns to protect the environment. Greenpeace now operates in over 55 countries and focuses on issues including climate change, deforestation, overfishing, and nuclear power.",
          es: "Greenpeace fue fundada el 21 de junio de 1971 en Vancouver, Canadá, inicialmente para protestar contra las pruebas nucleares. La organización ha crecido hasta convertirse en uno de los grupos ambientales más influyentes del mundo, conocido por campañas de acción directa para proteger el medio ambiente. Greenpeace ahora opera en más de 55 países y se centra en temas que incluyen el cambio climático, la deforestación, la sobrepesca y la energía nuclear.",
          de: "Greenpeace wurde am 21. Juni 1971 in Vancouver, Kanada gegründet, zunächst um gegen Atomtests zu protestieren. Die Organisation ist zu einer der einflussreichsten Umweltgruppen der Welt gewachsen, bekannt für direkte Aktionskampagnen zum Schutz der Umwelt. Greenpeace operiert jetzt in über 55 Ländern und konzentriert sich auf Themen wie Klimawandel, Entwaldung, Überfischung und Atomkraft.",
          nl: "Greenpeace werd opgericht op 21 juni 1971 in Vancouver, Canada, aanvankelijk om te protesteren tegen nucleaire tests. De organisatie is uitgegroeid tot een van 's werelds meest invloedrijke milieugroepen, bekend om directe actiecampagnes ter bescherming van het milieu. Greenpeace opereert nu in meer dan 55 landen en richt zich op kwesties zoals klimaatverandering, ontbossing, overbevissing en kernenergie."
        }
      },
      {
        question: {
          en: "What astronomical event typically occurs on or around June 21st in the Northern Hemisphere?",
          es: "¿Qué evento astronómico ocurre típicamente el 21 de junio o alrededor de esa fecha en el Hemisferio Norte?",
          de: "Welches astronomische Ereignis tritt typischerweise am oder um den 21. Juni in der nördlichen Hemisphäre auf?",
          nl: "Welke astronomische gebeurtenis vindt meestal plaats op of rond 21 juni op het noordelijk halfrond?"
        },
        options: [
          {
            en: "Winter Solstice",
            es: "Solsticio de invierno",
            de: "Wintersonnenwende",
            nl: "Winterzonnewende"
          },
          {
            en: "Summer Solstice",
            es: "Solsticio de verano",
            de: "Sommersonnenwende",
            nl: "Zomerzonnewende"
          },
          {
            en: "Autumn Equinox",
            es: "Equinoccio de otoño",
            de: "Herbstäquinoktium",
            nl: "Herfst-equinox"
          },
          {
            en: "Spring Equinox",
            es: "Equinoccio de primavera",
            de: "Frühlingsäquinoktium",
            nl: "Lente-equinox"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Summer Solstice occurs on or around June 21st in the Northern Hemisphere, marking the longest day and shortest night of the year. On this day, the North Pole is tilted closest to the sun, resulting in maximum daylight hours. Ancient cultures, including Stonehenge builders and the Mayans, created monuments aligned with the summer solstice to celebrate this astronomical event.",
          es: "El Solsticio de verano ocurre el 21 de junio o alrededor de esa fecha en el Hemisferio Norte, marcando el día más largo y la noche más corta del año. En este día, el Polo Norte está inclinado más cerca del sol, resultando en el máximo de horas de luz. Culturas antiguas, incluyendo los constructores de Stonehenge y los mayas, crearon monumentos alineados con el solsticio de verano para celebrar este evento astronómico.",
          de: "Die Sommersonnenwende tritt am oder um den 21. Juni in der nördlichen Hemisphäre auf und markiert den längsten Tag und die kürzeste Nacht des Jahres. An diesem Tag ist der Nordpol am nächsten zur Sonne geneigt, was zu maximalen Tageslichtstunden führt. Antike Kulturen, einschließlich der Stonehenge-Erbauer und der Maya, schufen Monumente, die mit der Sommersonnenwende ausgerichtet waren, um dieses astronomische Ereignis zu feiern.",
          nl: "De Zomerzonnewende vindt plaats op of rond 21 juni op het noordelijk halfrond en markeert de langste dag en kortste nacht van het jaar. Op deze dag helt de Noordpool het dichtst naar de zon, wat resulteert in maximale daglichturen. Oude culturen, waaronder de bouwers van Stonehenge en de Maya's, creëerden monumenten die waren uitgelijnd met de zomerzonnewende om deze astronomische gebeurtenis te vieren."
        }
      },
      {
        question: {
          en: "On June 21, 1964, civil rights workers James Chaney, Andrew Goodman, and Michael Schwerner disappeared in which U.S. state?",
          es: "El 21 de junio de 1964, los trabajadores de derechos civiles James Chaney, Andrew Goodman y Michael Schwerner desaparecieron en ¿qué estado de EE. UU.?",
          de: "Am 21. Juni 1964 verschwanden die Bürgerrechtsaktivisten James Chaney, Andrew Goodman und Michael Schwerner in welchem US-Bundesstaat?",
          nl: "Op 21 juni 1964 verdwenen burgerrechtenactivisten James Chaney, Andrew Goodman en Michael Schwerner in welke Amerikaanse staat?"
        },
        options: [
          {
            en: "Alabama",
            es: "Alabama",
            de: "Alabama",
            nl: "Alabama"
          },
          {
            en: "Georgia",
            es: "Georgia",
            de: "Georgia",
            nl: "Georgia"
          },
          {
            en: "Mississippi",
            es: "Misisipi",
            de: "Mississippi",
            nl: "Mississippi"
          },
          {
            en: "Louisiana",
            es: "Luisiana",
            de: "Louisiana",
            nl: "Louisiana"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The three civil rights workers disappeared in Mississippi on June 21, 1964, after investigating a church burning. They were murdered by members of the Ku Klux Klan with assistance from local law enforcement. Their bodies were found 44 days later, and the case became a pivotal moment in the civil rights movement, highlighting the dangers faced by activists working to register African American voters in the South.",
          es: "Los tres trabajadores de derechos civiles desaparecieron en Misisipi el 21 de junio de 1964, después de investigar el incendio de una iglesia. Fueron asesinados por miembros del Ku Klux Klan con la asistencia de las autoridades locales. Sus cuerpos fueron encontrados 44 días después, y el caso se convirtió en un momento crucial en el movimiento de derechos civiles, destacando los peligros que enfrentaban los activistas que trabajaban para registrar votantes afroamericanos en el Sur.",
          de: "Die drei Bürgerrechtsaktivisten verschwanden am 21. Juni 1964 in Mississippi, nachdem sie einen Kirchenbrand untersucht hatten. Sie wurden von Mitgliedern des Ku Klux Klan mit Unterstützung lokaler Strafverfolgungsbehörden ermordet. Ihre Leichen wurden 44 Tage später gefunden, und der Fall wurde zu einem entscheidenden Moment in der Bürgerrechtsbewegung und verdeutlichte die Gefahren, denen Aktivisten ausgesetzt waren, die daran arbeiteten, afroamerikanische Wähler im Süden zu registrieren.",
          nl: "De drie burgerrechtenactivisten verdwenen op 21 juni 1964 in Mississippi na het onderzoeken van een kerkbrand. Ze werden vermoord door leden van de Ku Klux Klan met hulp van lokale wetshandhavers. Hun lichamen werden 44 dagen later gevonden, en de zaak werd een cruciaal moment in de burgerrechtenbeweging, waarbij de gevaren werden benadrukt waarmee activisten te maken kregen die werkten aan het registreren van Afro-Amerikaanse kiezers in het Zuiden."
        }
      },
      {
        question: {
          en: "On June 21, 1982, which future monarch was born, becoming second in line to the British throne?",
          es: "El 21 de junio de 1982, ¿qué futuro monarca nació, convirtiéndose en segundo en la línea de sucesión al trono británico?",
          de: "Welcher zukünftige Monarch wurde am 21. Juni 1982 geboren und wurde zweiter in der britischen Thronfolge?",
          nl: "Welke toekomstige monarch werd geboren op 21 juni 1982 en werd tweede in lijn voor de Britse troon?"
        },
        options: [
          {
            en: "Prince Harry",
            es: "Príncipe Harry",
            de: "Prinz Harry",
            nl: "Prins Harry"
          },
          {
            en: "Prince William",
            es: "Príncipe William",
            de: "Prinz William",
            nl: "Prins William"
          },
          {
            en: "Prince George",
            es: "Príncipe George",
            de: "Prinz George",
            nl: "Prins George"
          },
          {
            en: "Prince Andrew",
            es: "Príncipe Andrew",
            de: "Prinz Andrew",
            nl: "Prins Andrew"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Prince William was born on June 21, 1982, at St. Mary's Hospital in London as the first child of Prince Charles and Princess Diana. His birth was celebrated worldwide and he became second in line to the British throne after his father. William is now the Prince of Wales and heir apparent, having married Catherine Middleton in 2011 and having three children.",
          es: "El Príncipe William nació el 21 de junio de 1982 en el Hospital St. Mary's en Londres como el primer hijo del Príncipe Carlos y la Princesa Diana. Su nacimiento fue celebrado en todo el mundo y se convirtió en segundo en la línea de sucesión al trono británico después de su padre. William es ahora el Príncipe de Gales y heredero aparente, habiendo se casado con Catherine Middleton en 2011 y teniendo tres hijos.",
          de: "Prinz William wurde am 21. Juni 1982 im St. Mary's Hospital in London als erstes Kind von Prinz Charles und Prinzessin Diana geboren. Seine Geburt wurde weltweit gefeiert und er wurde zweiter in der britischen Thronfolge nach seinem Vater. William ist jetzt der Prinz von Wales und Thronfolger, nachdem er 2011 Catherine Middleton geheiratet und drei Kinder bekommen hat.",
          nl: "Prins William werd geboren op 21 juni 1982 in St. Mary's Hospital in Londen als eerste kind van Prins Charles en Prinses Diana. Zijn geboorte werd wereldwijd gevierd en hij werd tweede in lijn voor de Britse troon na zijn vader. William is nu de Prins van Wales en troonopvolger, nadat hij in 2011 met Catherine Middleton is getrouwd en drie kinderen heeft gekregen."
        }
      }
    ],

    // Day 22 - June 22nd: Operation Barbarossa and Historical Events
    day22: [
      {
        question: {
          en: "On June 22, 1941, which major World War II operation began when Nazi Germany invaded the Soviet Union?",
          es: "El 22 de junio de 1941, ¿qué operación importante de la Segunda Guerra Mundial comenzó cuando la Alemania nazi invadió la Unión Soviética?",
          de: "Welche bedeutende Operation des Zweiten Weltkriegs begann am 22. Juni 1941, als Nazi-Deutschland die Sowjetunion überfiel?",
          nl: "Welke grote operatie van de Tweede Wereldoorlog begon op 22 juni 1941 toen nazi-Duitsland de Sovjet-Unie binnenviel?"
        },
        options: [
          {
            en: "Operation Overlord",
            es: "Operación Overlord",
            de: "Operation Overlord",
            nl: "Operatie Overlord"
          },
          {
            en: "Operation Barbarossa",
            es: "Operación Barbarroja",
            de: "Unternehmen Barbarossa",
            nl: "Operatie Barbarossa"
          },
          {
            en: "Operation Market Garden",
            es: "Operación Market Garden",
            de: "Operation Market Garden",
            nl: "Operatie Market Garden"
          },
          {
            en: "Operation Torch",
            es: "Operación Torch",
            de: "Operation Torch",
            nl: "Operatie Torch"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Operation Barbarossa was launched on June 22, 1941, representing the largest invasion force in history with over 3 million Axis troops. Despite initial German successes, the invasion ultimately failed, becoming a major turning point in World War II. The brutal campaign resulted in millions of casualties and marked the beginning of Germany's eventual defeat on the Eastern Front.",
          es: "La Operación Barbarroja se lanzó el 22 de junio de 1941, representando la fuerza de invasión más grande de la historia con más de 3 millones de tropas del Eje. A pesar de los éxitos alemanes iniciales, la invasión finalmente fracasó, convirtiéndose en un punto de inflexión importante en la Segunda Guerra Mundial. La brutal campaña resultó en millones de bajas y marcó el comienzo de la eventual derrota de Alemania en el Frente Oriental.",
          de: "Das Unternehmen Barbarossa wurde am 22. Juni 1941 gestartet und stellte mit über 3 Millionen Achsentruppen die größte Invasionstruppe der Geschichte dar. Trotz anfänglicher deutscher Erfolge scheiterte die Invasion letztendlich und wurde zu einem wichtigen Wendepunkt im Zweiten Weltkrieg. Der brutale Feldzug forderte Millionen von Opfern und markierte den Beginn von Deutschlands letztendlicher Niederlage an der Ostfront.",
          nl: "Operatie Barbarossa werd gelanceerd op 22 juni 1941 en vertegenwoordigde de grootste invasiemacht in de geschiedenis met meer dan 3 miljoen Asmogendheden troepen. Ondanks aanvankelijke Duitse successen faalde de invasie uiteindelijk en werd het een belangrijk keerpunt in de Tweede Wereldoorlog. De brute campagne resulteerde in miljoenen slachtoffers en markeerde het begin van Duitslands uiteindelijke nederlaag aan het Oostfront."
        }
      },
      {
        question: {
          en: "On June 22, 1944, which act granted various benefits to U.S. World War II veterans?",
          es: "El 22 de junio de 1944, ¿qué ley otorgó varios beneficios a los veteranos estadounidenses de la Segunda Guerra Mundial?",
          de: "Welches Gesetz gewährte am 22. Juni 1944 verschiedene Leistungen für US-Veteranen des Zweiten Weltkriegs?",
          nl: "Welke wet verleende op 22 juni 1944 verschillende voordelen aan Amerikaanse veteranen van de Tweede Wereldoorlog?"
        },
        options: [
          {
            en: "The Veterans Act",
            es: "La Ley de Veteranos",
            de: "Das Veteranengesetz",
            nl: "De Veteranenwet"
          },
          {
            en: "The G.I. Bill",
            es: "El G.I. Bill",
            de: "Die G.I. Bill",
            nl: "De G.I. Bill"
          },
          {
            en: "The Soldiers' Relief Act",
            es: "La Ley de Alivio para Soldados",
            de: "Das Soldatenhilfegesetz",
            nl: "De Soldatenhulpwet"
          },
          {
            en: "The Military Benefits Act",
            es: "La Ley de Beneficios Militares",
            de: "Das Militärleistungsgesetz",
            nl: "De Militaire Voordelenwet"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The G.I. Bill of Rights was signed into law on June 22, 1944, providing unprecedented benefits to returning World War II veterans. It offered financial support for education, home loans, and unemployment insurance, helping millions of veterans transition to civilian life. This legislation fundamentally transformed American society, creating a more educated middle class and fueling post-war economic prosperity.",
          es: "El G.I. Bill de Derechos fue firmado como ley el 22 de junio de 1944, proporcionando beneficios sin precedentes a los veteranos que regresaban de la Segunda Guerra Mundial. Ofreció apoyo financiero para educación, préstamos hipotecarios y seguro de desempleo, ayudando a millones de veteranos a hacer la transición a la vida civil. Esta legislación transformó fundamentalmente la sociedad estadounidense, creando una clase media más educada e impulsando la prosperidad económica de posguerra.",
          de: "Die G.I. Bill of Rights wurde am 22. Juni 1944 zum Gesetz, das beispiellose Leistungen für zurückkehrende Veteranen des Zweiten Weltkriegs bot. Es bot finanzielle Unterstützung für Bildung, Hypothekendarlehen und Arbeitslosenversicherung und half Millionen von Veteranen beim Übergang ins Zivilleben. Diese Gesetzgebung veränderte die amerikanische Gesellschaft grundlegend, schuf eine gebildetere Mittelschicht und trieb den wirtschaftlichen Wohlstand der Nachkriegszeit voran.",
          nl: "De G.I. Bill of Rights werd op 22 juni 1944 ondertekend als wet en bood ongekende voordelen aan terugkerende veteranen van de Tweede Wereldoorlog. Het bood financiële steun voor onderwijs, hypotheken en werkloosheidsverzekering, en help miljoenen veteranen over te stappen naar het burgerleven. Deze wetgeving transformeerde de Amerikaanse samenleving fundamenteel, creëerde een meer opgeleide middenklasse en voedde de economische welvaart na de oorlog."
        }
      },
      {
        question: {
          en: "On June 22, 1940, which European country surrendered to Nazi Germany after six weeks of fighting?",
          es: "El 22 de junio de 1940, ¿qué país europeo se rindió a la Alemania nazi después de seis semanas de lucha?",
          de: "Welches europäische Land kapitulierte am 22. Juni 1940 nach sechs Wochen Kampf vor Nazi-Deutschland?",
          nl: "Welk Europees land capituleerde op 22 juni 1940 voor nazi-Duitsland na zes weken vechten?"
        },
        options: [
          {
            en: "Belgium",
            es: "Bélgica",
            de: "Belgien",
            nl: "België"
          },
          {
            en: "France",
            es: "Francia",
            de: "Frankreich",
            nl: "Frankrijk"
          },
          {
            en: "Netherlands",
            es: "Países Bajos",
            de: "Niederlande",
            nl: "Nederland"
          },
          {
            en: "Poland",
            es: "Polonia",
            de: "Polen",
            nl: "Polen"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "France signed an armistice with Nazi Germany on June 22, 1940, in the same railway car where Germany had surrendered in 1918. The surrender followed Germany's rapid invasion through the Ardennes, which bypassed France's Maginot Line defenses. France was divided into an occupied zone controlled by Germany and Vichy France, a puppet government in the south, until the Allied liberation in 1944.",
          es: "Francia firmó un armisticio con la Alemania nazi el 22 de junio de 1940, en el mismo vagón de ferrocarril donde Alemania se había rendido en 1918. La rendición siguió a la rápida invasión de Alemania a través de las Ardenas, que evitó las defensas de la Línea Maginot de Francia. Francia se dividió en una zona ocupada controlada por Alemania y Francia de Vichy, un gobierno títere en el sur, hasta la liberación aliada en 1944.",
          de: "Frankreich unterzeichnete am 22. Juni 1940 einen Waffenstillstand mit Nazi-Deutschland, im selben Eisenbahnwaggon, in dem Deutschland 1918 kapituliert hatte. Die Kapitulation folgte Deutschlands schneller Invasion durch die Ardennen, die Frankreichs Maginot-Linie umging. Frankreich wurde in eine von Deutschland kontrollierte besetzte Zone und Vichy-Frankreich, eine Marionettenregierung im Süden, aufgeteilt, bis zur alliierten Befreiung 1944.",
          nl: "Frankrijk ondertekende op 22 juni 1940 een wapenstilstand met nazi-Duitsland, in dezelfde treinwagon waar Duitsland in 1918 had gecapituleerd. De overgave volgde op Duitslands snelle invasie door de Ardennen, die de verdediging van de Maginotlinie van Frankrijk omzeilde. Frankrijk werd verdeeld in een bezette zone gecontroleerd door Duitsland en Vichy-Frankrijk, een marionettenregering in het zuiden, tot de geallieerde bevrijding in 1944."
        }
      },
      {
        question: {
          en: "On June 22, 1633, the Catholic Church forced which famous astronomer to recant his support for heliocentrism?",
          es: "El 22 de junio de 1633, la Iglesia Católica obligó a ¿qué famoso astrónomo a retractarse de su apoyo al heliocentrismo?",
          de: "Welchen berühmten Astronomen zwang die katholische Kirche am 22. Juni 1633, seine Unterstützung für den Heliozentrismus zu widerrufen?",
          nl: "Welke beroemde astronoom dwong de katholieke kerk op 22 juni 1633 zijn steun voor het heliocentrisme te herroepen?"
        },
        options: [
          {
            en: "Johannes Kepler",
            es: "Johannes Kepler",
            de: "Johannes Kepler",
            nl: "Johannes Kepler"
          },
          {
            en: "Nicolaus Copernicus",
            es: "Nicolás Copérnico",
            de: "Nikolaus Kopernikus",
            nl: "Nicolaas Copernicus"
          },
          {
            en: "Galileo Galilei",
            es: "Galileo Galilei",
            de: "Galileo Galilei",
            nl: "Galileo Galilei"
          },
          {
            en: "Tycho Brahe",
            es: "Tycho Brahe",
            de: "Tycho Brahe",
            nl: "Tycho Brahe"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Galileo Galilei was forced by the Roman Inquisition to recant his support for Copernican heliocentrism on June 22, 1633. He was found guilty of heresy for supporting the theory that the Earth revolves around the Sun, rather than the geocentric view held by the Church. Galileo spent the rest of his life under house arrest, but his scientific work laid the foundation for modern astronomy and physics.",
          es: "Galileo Galilei fue obligado por la Inquisición Romana a retractarse de su apoyo al heliocentrismo copernicano el 22 de junio de 1633. Fue declarado culpable de herejía por apoyar la teoría de que la Tierra gira alrededor del Sol, en lugar de la visión geocéntrica sostenida por la Iglesia. Galileo pasó el resto de su vida bajo arresto domiciliario, pero su trabajo científico sentó las bases para la astronomía y física modernas.",
          de: "Galileo Galilei wurde von der römischen Inquisition gezwungen, am 22. Juni 1633 seine Unterstützung für den kopernikanischen Heliozentrismus zu widerrufen. Er wurde der Ketzerei schuldig befunden, weil er die Theorie unterstützte, dass die Erde sich um die Sonne dreht, anstatt der von der Kirche vertretenen geozentrischen Ansicht. Galileo verbrachte den Rest seines Lebens unter Hausarrest, aber seine wissenschaftliche Arbeit legte den Grundstein für die moderne Astronomie und Physik.",
          nl: "Galileo Galilei werd gedwongen door de Roomse Inquisitie om zijn steun voor het Copernicaanse heliocentrisme te herroepen op 22 juni 1633. Hij werd schuldig bevonden aan ketterij omdat hij de theorie steunde dat de aarde om de zon draait, in plaats van het geocentrische standpunt van de kerk. Galileo bracht de rest van zijn leven door onder huisarrest, maar zijn wetenschappelijk werk legde de basis voor moderne astronomie en natuurkunde."
        }
      },
      {
        question: {
          en: "On June 22, 2012, which spacecraft became the first commercial vehicle to dock with the International Space Station?",
          es: "El 22 de junio de 2012, ¿qué nave espacial se convirtió en el primer vehículo comercial en acoplarse a la Estación Espacial Internacional?",
          de: "Welches Raumfahrzeug wurde am 22. Juni 2012 das erste kommerzielle Fahrzeug, das an die Internationale Raumstation andockte?",
          nl: "Welk ruimtevaartuig werd op 22 juni 2012 het eerste commerciële voertuig dat aankoppelde aan het International Space Station?"
        },
        options: [
          {
            en: "Blue Origin New Shepard",
            es: "Blue Origin New Shepard",
            de: "Blue Origin New Shepard",
            nl: "Blue Origin New Shepard"
          },
          {
            en: "SpaceX Dragon",
            es: "SpaceX Dragon",
            de: "SpaceX Dragon",
            nl: "SpaceX Dragon"
          },
          {
            en: "Boeing Starliner",
            es: "Boeing Starliner",
            de: "Boeing Starliner",
            nl: "Boeing Starliner"
          },
          {
            en: "Virgin Galactic SpaceShipTwo",
            es: "Virgin Galactic SpaceShipTwo",
            de: "Virgin Galactic SpaceShipTwo",
            nl: "Virgin Galactic SpaceShipTwo"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "SpaceX's Dragon spacecraft successfully docked with the International Space Station on June 22, 2012, marking a historic milestone in commercial spaceflight. This achievement demonstrated that private companies could safely transport cargo to the ISS, reducing NASA's reliance on government-operated spacecraft. Dragon later became the first commercial spacecraft to transport astronauts to the ISS in 2020.",
          es: "La nave espacial Dragon de SpaceX se acopló con éxito a la Estación Espacial Internacional el 22 de junio de 2012, marcando un hito histórico en los vuelos espaciales comerciales. Este logro demostró que las empresas privadas podían transportar carga de manera segura a la EEI, reduciendo la dependencia de la NASA de naves espaciales operadas por el gobierno. Dragon se convirtió más tarde en la primera nave espacial comercial en transportar astronautas a la EEI en 2020.",
          de: "SpaceX's Dragon-Raumschiff dockte am 22. Juni 2012 erfolgreich an die Internationale Raumstation an und markierte damit einen historischen Meilenstein in der kommerziellen Raumfahrt. Diese Leistung demonstrierte, dass private Unternehmen sicher Fracht zur ISS transportieren konnten, wodurch NASAs Abhängigkeit von staatlich betriebenen Raumfahrzeugen verringert wurde. Dragon wurde später im Jahr 2020 das erste kommerzielle Raumfahrzeug, das Astronauten zur ISS transportierte.",
          nl: "SpaceX's Dragon-ruimtevaartuig koppelde succesvol aan bij het International Space Station op 22 juni 2012, wat een historische mijlpaal markeerde in commerciële ruimtevaart. Deze prestatie toonde aan dat particuliere bedrijven veilig vracht naar het ISS konden vervoeren, waardoor NASA's afhankelijkheid van door de overheid geëxploiteerde ruimtevaartuigen verminderde. Dragon werd later in 2020 het eerste commerciële ruimtevaartuig dat astronauten naar het ISS vervoerde."
        }
      }
    ],

    // Day 23 - June 23rd: Battle of Okinawa and Historical Events
    day23: [
      {
        question: {
          en: "On June 23, 1945, which major Pacific battle of World War II officially ended with Allied victory?",
          es: "El 23 de junio de 1945, ¿qué importante batalla del Pacífico de la Segunda Guerra Mundial terminó oficialmente con la victoria aliada?",
          de: "Welche wichtige Pazifikschlacht des Zweiten Weltkriegs endete am 23. Juni 1945 offiziell mit dem Sieg der Alliierten?",
          nl: "Welke belangrijke Pacifische slag van de Tweede Wereldoorlog eindigde officieel op 23 juni 1945 met een geallieerde overwinning?"
        },
        options: [
          {
            en: "Battle of Iwo Jima",
            es: "Batalla de Iwo Jima",
            de: "Schlacht um Iwojima",
            nl: "Slag om Iwo Jima"
          },
          {
            en: "Battle of Okinawa",
            es: "Batalla de Okinawa",
            de: "Schlacht um Okinawa",
            nl: "Slag om Okinawa"
          },
          {
            en: "Battle of Midway",
            es: "Batalla de Midway",
            de: "Schlacht um Midway",
            nl: "Slag bij Midway"
          },
          {
            en: "Battle of Guadalcanal",
            es: "Batalla de Guadalcanal",
            de: "Schlacht um Guadalcanal",
            nl: "Slag om Guadalcanal"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Battle of Okinawa ended on June 23, 1945, after 82 days of brutal fighting. It was one of the bloodiest battles of World War II, with over 100,000 Japanese and 12,000 American military deaths, plus massive civilian casualties. The fierce Japanese resistance at Okinawa influenced the decision to use atomic weapons to end the war rather than invade mainland Japan.",
          es: "La Batalla de Okinawa terminó el 23 de junio de 1945, después de 82 días de lucha brutal. Fue una de las batallas más sangrientas de la Segunda Guerra Mundial, con más de 100,000 muertes militares japonesas y 12,000 estadounidenses, más bajas civiles masivas. La feroz resistencia japonesa en Okinawa influyó en la decisión de usar armas atómicas para terminar la guerra en lugar de invadir el Japón continental.",
          de: "Die Schlacht um Okinawa endete am 23. Juni 1945 nach 82 Tagen brutaler Kämpfe. Es war eine der blutigsten Schlachten des Zweiten Weltkriegs mit über 100.000 japanischen und 12.000 amerikanischen Militärtoten sowie massiven zivilen Opfern. Der erbitterte japanische Widerstand auf Okinawa beeinflusste die Entscheidung, Atomwaffen einzusetzen, um den Krieg zu beenden, anstatt das japanische Festland zu überfallen.",
          nl: "De Slag om Okinawa eindigde op 23 juni 1945 na 82 dagen van brutale gevechten. Het was een van de bloedigste veldslagen van de Tweede Wereldoorlog, met meer dan 100.000 Japanse en 12.000 Amerikaanse militaire doden, plus enorme burgerdoden. Het felle Japanse verzet op Okinawa beïnvloedde de beslissing om atoomwapens te gebruiken om de oorlog te beëindigen in plaats van het Japanse vasteland binnen te vallen."
        }
      },
      {
        question: {
          en: "On June 23, 1868, which inventor received a patent for the first practical typewriter?",
          es: "El 23 de junio de 1868, ¿qué inventor recibió una patente para la primera máquina de escribir práctica?",
          de: "Welcher Erfinder erhielt am 23. Juni 1868 ein Patent für die erste praktische Schreibmaschine?",
          nl: "Welke uitvinder ontving op 23 juni 1868 een patent voor de eerste praktische typemachine?"
        },
        options: [
          {
            en: "Thomas Edison",
            es: "Thomas Edison",
            de: "Thomas Edison",
            nl: "Thomas Edison"
          },
          {
            en: "Alexander Graham Bell",
            es: "Alexander Graham Bell",
            de: "Alexander Graham Bell",
            nl: "Alexander Graham Bell"
          },
          {
            en: "Christopher Latham Sholes",
            es: "Christopher Latham Sholes",
            de: "Christopher Latham Sholes",
            nl: "Christopher Latham Sholes"
          },
          {
            en: "Samuel Morse",
            es: "Samuel Morse",
            de: "Samuel Morse",
            nl: "Samuel Morse"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Christopher Latham Sholes received a patent for the typewriter on June 23, 1868, revolutionizing written communication. His design included the QWERTY keyboard layout, which is still used today on computer keyboards. The typewriter dramatically increased the speed and efficiency of business and personal correspondence, particularly opening office jobs to women in the late 19th century.",
          es: "Christopher Latham Sholes recibió una patente para la máquina de escribir el 23 de junio de 1868, revolucionando la comunicación escrita. Su diseño incluía el diseño de teclado QWERTY, que todavía se usa hoy en día en los teclados de computadora. La máquina de escribir aumentó dramáticamente la velocidad y eficiencia de la correspondencia comercial y personal, particularmente abriendo trabajos de oficina a las mujeres a fines del siglo XIX.",
          de: "Christopher Latham Sholes erhielt am 23. Juni 1868 ein Patent für die Schreibmaschine und revolutionierte damit die schriftliche Kommunikation. Sein Design umfasste das QWERTY-Tastaturlayout, das heute noch auf Computertastaturen verwendet wird. Die Schreibmaschine steigerte die Geschwindigkeit und Effizienz der geschäftlichen und privaten Korrespondenz dramatisch und öffnete insbesondere Ende des 19. Jahrhunderts Bürojobs für Frauen.",
          nl: "Christopher Latham Sholes ontving op 23 juni 1868 een patent voor de typemachine, wat de geschreven communicatie revolutioneerde. Zijn ontwerp omvatte de QWERTY-toetsenbordindeling, die vandaag nog steeds wordt gebruikt op computertoetsenborden. De typemachine verhoogde de snelheid en efficiëntie van zakelijke en persoonlijke correspondentie dramatisch, en opende met name eind 19e eeuw kantoorbanen voor vrouwen."
        }
      },
      {
        question: {
          en: "On June 23, 2016, which European country voted to leave the European Union in a historic referendum?",
          es: "El 23 de junio de 2016, ¿qué país europeo votó para salir de la Unión Europea en un referéndum histórico?",
          de: "Welches europäische Land stimmte am 23. Juni 2016 in einem historischen Referendum für den Austritt aus der Europäischen Union?",
          nl: "Welk Europees land stemde op 23 juni 2016 om de Europese Unie te verlaten in een historisch referendum?"
        },
        options: [
          {
            en: "Norway",
            es: "Noruega",
            de: "Norwegen",
            nl: "Noorwegen"
          },
          {
            en: "Switzerland",
            es: "Suiza",
            de: "Schweiz",
            nl: "Zwitserland"
          },
          {
            en: "United Kingdom",
            es: "Reino Unido",
            de: "Vereinigtes Königreich",
            nl: "Verenigd Koninkrijk"
          },
          {
            en: "Denmark",
            es: "Dinamarca",
            de: "Dänemark",
            nl: "Denemarken"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The United Kingdom voted to leave the European Union on June 23, 2016, with 52% voting to leave and 48% voting to remain. This referendum, known as Brexit, led to years of political negotiations and the UK's formal departure from the EU on January 31, 2020. The decision had profound implications for trade, immigration, and political relationships across Europe.",
          es: "El Reino Unido votó para salir de la Unión Europea el 23 de junio de 2016, con el 52% votando por salir y el 48% votando por permanecer. Este referéndum, conocido como Brexit, llevó a años de negociaciones políticas y la salida formal del Reino Unido de la UE el 31 de enero de 2020. La decisión tuvo implicaciones profundas para el comercio, la inmigración y las relaciones políticas en toda Europa.",
          de: "Das Vereinigte Königreich stimmte am 23. Juni 2016 für den Austritt aus der Europäischen Union, wobei 52% für den Austritt und 48% für den Verbleib stimmten. Dieses als Brexit bekannte Referendum führte zu jahrelangen politischen Verhandlungen und dem formellen Austritt Großbritanniens aus der EU am 31. Januar 2020. Die Entscheidung hatte tiefgreifende Auswirkungen auf Handel, Einwanderung und politische Beziehungen in ganz Europa.",
          nl: "Het Verenigd Koninkrijk stemde op 23 juni 2016 om de Europese Unie te verlaten, waarbij 52% stemde om te vertrekken en 48% stemde om te blijven. Dit referendum, bekend als Brexit, leidde tot jaren van politieke onderhandelingen en het formele vertrek van het VK uit de EU op 31 januari 2020. De beslissing had diepgaande implicaties voor handel, immigratie en politieke relaties in heel Europa."
        }
      },
      {
        question: {
          en: "On June 23, 1894, what organization was founded in Paris, France, to revive the ancient Olympic Games?",
          es: "El 23 de junio de 1894, ¿qué organización fue fundada en París, Francia, para revivir los antiguos Juegos Olímpicos?",
          de: "Welche Organisation wurde am 23. Juni 1894 in Paris, Frankreich, gegründet, um die antiken Olympischen Spiele wiederzubeleben?",
          nl: "Welke organisatie werd op 23 juni 1894 opgericht in Parijs, Frankrijk, om de oude Olympische Spelen nieuw leven in te blazen?"
        },
        options: [
          {
            en: "International Sports Federation",
            es: "Federación Internacional de Deportes",
            de: "Internationaler Sportverband",
            nl: "Internationale Sportfederatie"
          },
          {
            en: "International Olympic Committee",
            es: "Comité Olímpico Internacional",
            de: "Internationales Olympisches Komitee",
            nl: "Internationaal Olympisch Comité"
          },
          {
            en: "World Athletics Association",
            es: "Asociación Mundial de Atletismo",
            de: "Weltleichtathletikverband",
            nl: "Wereld Atletiek Associatie"
          },
          {
            en: "Global Games Organization",
            es: "Organización de Juegos Globales",
            de: "Globale Spieleorganisation",
            nl: "Wereldwijde Spelorganisatie"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The International Olympic Committee (IOC) was founded on June 23, 1894, by Pierre de Coubertin in Paris. The organization's mission was to revive the ancient Olympic Games in a modern international format. The first modern Olympics were held in Athens in 1896, and the Games have since become the world's foremost international sporting event, promoting peace and unity through sport.",
          es: "El Comité Olímpico Internacional (COI) fue fundado el 23 de junio de 1894 por Pierre de Coubertin en París. La misión de la organización era revivir los antiguos Juegos Olímpicos en un formato internacional moderno. Los primeros Juegos Olímpicos modernos se celebraron en Atenas en 1896, y los Juegos se han convertido desde entonces en el evento deportivo internacional más importante del mundo, promoviendo la paz y la unidad a través del deporte.",
          de: "Das Internationale Olympische Komitee (IOC) wurde am 23. Juni 1894 von Pierre de Coubertin in Paris gegründet. Die Mission der Organisation war es, die antiken Olympischen Spiele in einem modernen internationalen Format wiederzubeleben. Die ersten modernen Olympischen Spiele fanden 1896 in Athen statt, und die Spiele sind seitdem zum weltweit wichtigsten internationalen Sportereignis geworden und fördern Frieden und Einheit durch Sport.",
          nl: "Het Internationaal Olympisch Comité (IOC) werd opgericht op 23 juni 1894 door Pierre de Coubertin in Parijs. De missie van de organisatie was om de oude Olympische Spelen nieuw leven in te blazen in een modern internationaal formaat. De eerste moderne Olympische Spelen werden gehouden in Athene in 1896, en de Spelen zijn sindsdien het belangrijkste internationale sportevenement ter wereld geworden, waarbij vrede en eenheid door sport worden bevorderd."
        }
      },
      {
        question: {
          en: "On June 23, 1972, which U.S. president signed Title IX into law, prohibiting sex discrimination in education?",
          es: "El 23 de junio de 1972, ¿qué presidente de EE. UU. firmó el Título IX como ley, prohibiendo la discriminación sexual en la educación?",
          de: "Welcher US-Präsident unterzeichnete am 23. Juni 1972 Titel IX zum Gesetz, der die Diskriminierung aufgrund des Geschlechts in der Bildung verbietet?",
          nl: "Welke Amerikaanse president ondertekende op 23 juni 1972 Title IX als wet, waarbij geslachtsdiscriminatie in het onderwijs werd verboden?"
        },
        options: [
          {
            en: "Lyndon B. Johnson",
            es: "Lyndon B. Johnson",
            de: "Lyndon B. Johnson",
            nl: "Lyndon B. Johnson"
          },
          {
            en: "Richard Nixon",
            es: "Richard Nixon",
            de: "Richard Nixon",
            nl: "Richard Nixon"
          },
          {
            en: "Gerald Ford",
            es: "Gerald Ford",
            de: "Gerald Ford",
            nl: "Gerald Ford"
          },
          {
            en: "Jimmy Carter",
            es: "Jimmy Carter",
            de: "Jimmy Carter",
            nl: "Jimmy Carter"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "President Richard Nixon signed Title IX into law on June 23, 1972, as part of the Education Amendments. This landmark legislation prohibits sex-based discrimination in any educational program or activity receiving federal funding. While initially focused on access to education, Title IX had a particularly transformative effect on women's athletics, dramatically increasing female participation in sports at all educational levels.",
          es: "El presidente Richard Nixon firmó el Título IX como ley el 23 de junio de 1972, como parte de las Enmiendas Educativas. Esta legislación histórica prohíbe la discriminación basada en el sexo en cualquier programa o actividad educativa que reciba fondos federales. Aunque inicialmente se centró en el acceso a la educación, el Título IX tuvo un efecto particularmente transformador en el atletismo femenino, aumentando dramáticamente la participación femenina en deportes en todos los niveles educativos.",
          de: "Präsident Richard Nixon unterzeichnete am 23. Juni 1972 Titel IX als Teil der Bildungsänderungen zum Gesetz. Diese wegweisende Gesetzgebung verbietet geschlechtsbasierte Diskriminierung in jedem Bildungsprogramm oder jeder Aktivität, die bundesstaatliche Finanzierung erhält. Obwohl ursprünglich auf den Zugang zur Bildung ausgerichtet, hatte Titel IX einen besonders transformativen Effekt auf den Frauensport und steigerte die weibliche Teilnahme am Sport auf allen Bildungsebenen dramatisch.",
          nl: "President Richard Nixon ondertekende Title IX op 23 juni 1972 als onderdeel van de onderwijswijzigingen. Deze baanbrekende wetgeving verbiedt geslachtsgebaseerde discriminatie in elk onderwijsprogramma of elke activiteit die federale financiering ontvangt. Hoewel aanvankelijk gericht op toegang tot onderwijs, had Title IX een bijzonder transformerend effect op vrouwensport, waarbij de vrouwelijke deelname aan sport op alle onderwijsniveaus dramatisch toenam."
        }
      }
    ],

    // Day 24 - June 24th: Berlin Airlift and Historical Events
    day24: [
      {
        question: {
          en: "On June 24, 1948, what major Cold War operation began to supply West Berlin by air?",
          es: "El 24 de junio de 1948, ¿qué importante operación de la Guerra Fría comenzó para abastecer Berlín Occidental por aire?",
          de: "Welche wichtige Operation des Kalten Krieges begann am 24. Juni 1948, um West-Berlin auf dem Luftweg zu versorgen?",
          nl: "Welke belangrijke operatie van de Koude Oorlog begon op 24 juni 1948 om West-Berlijn via de lucht te bevoorraden?"
        },
        options: [
          {
            en: "Operation Rolling Thunder",
            es: "Operación Rolling Thunder",
            de: "Operation Rolling Thunder",
            nl: "Operatie Rolling Thunder"
          },
          {
            en: "The Berlin Airlift",
            es: "El Puente Aéreo de Berlín",
            de: "Die Berliner Luftbrücke",
            nl: "De Berlijnse Luchtbrug"
          },
          {
            en: "Operation Desert Storm",
            es: "Operación Tormenta del Desierto",
            de: "Operation Wüstensturm",
            nl: "Operatie Desert Storm"
          },
          {
            en: "The Marshall Plan",
            es: "El Plan Marshall",
            de: "Der Marshallplan",
            nl: "Het Marshallplan"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Berlin Airlift began on June 24, 1948, in response to the Soviet blockade of West Berlin. For nearly a year, American and British planes delivered food, fuel, and supplies to over 2 million West Berliners. The operation demonstrated Western resolve and ultimately forced the Soviets to lift the blockade in May 1949, marking a major Cold War victory without military conflict.",
          es: "El Puente Aéreo de Berlín comenzó el 24 de junio de 1948, en respuesta al bloqueo soviético de Berlín Occidental. Durante casi un año, los aviones estadounidenses y británicos entregaron alimentos, combustible y suministros a más de 2 millones de berlineses occidentales. La operación demostró la determinación occidental y finalmente obligó a los soviéticos a levantar el bloqueo en mayo de 1949, marcando una importante victoria de la Guerra Fría sin conflicto militar.",
          de: "Die Berliner Luftbrücke begann am 24. Juni 1948 als Reaktion auf die sowjetische Blockade West-Berlins. Fast ein Jahr lang lieferten amerikanische und britische Flugzeuge Nahrungsmittel, Treibstoff und Vorräte an über 2 Millionen West-Berliner. Die Operation demonstrierte westliche Entschlossenheit und zwang die Sowjets schließlich, die Blockade im Mai 1949 aufzuheben, was einen bedeutenden Sieg im Kalten Krieg ohne militärischen Konflikt markierte.",
          nl: "De Berlijnse Luchtbrug begon op 24 juni 1948 als reactie op de Sovjet-blokkade van West-Berlijn. Bijna een jaar lang leverden Amerikaanse en Britse vliegtuigen voedsel, brandstof en voorraden aan meer dan 2 miljoen West-Berlijners. De operatie toonde westerse vastberadenheid en dwong de Sovjets uiteindelijk om de blokkade in mei 1949 op te heffen, wat een belangrijke overwinning in de Koude Oorlog zonder militair conflict betekende."
        }
      },
      {
        question: {
          en: "On June 24, 1509, which English king was crowned at Westminster Abbey alongside Catherine of Aragon?",
          es: "El 24 de junio de 1509, ¿qué rey inglés fue coronado en la Abadía de Westminster junto a Catalina de Aragón?",
          de: "Welcher englische König wurde am 24. Juni 1509 zusammen mit Katharina von Aragón in Westminster Abbey gekrönt?",
          nl: "Welke Engelse koning werd op 24 juni 1509 gekroond in Westminster Abbey samen met Catharina van Aragon?"
        },
        options: [
          {
            en: "Henry VII",
            es: "Enrique VII",
            de: "Heinrich VII.",
            nl: "Hendrik VII"
          },
          {
            en: "Henry VIII",
            es: "Enrique VIII",
            de: "Heinrich VIII.",
            nl: "Hendrik VIII"
          },
          {
            en: "Edward VI",
            es: "Eduardo VI",
            de: "Eduard VI.",
            nl: "Eduard VI"
          },
          {
            en: "Richard III",
            es: "Ricardo III",
            de: "Richard III.",
            nl: "Richard III"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Henry VIII was crowned King of England on June 24, 1509, at age 17, alongside his first wife Catherine of Aragon. His reign would become one of the most significant in English history, marked by the break with the Catholic Church, the establishment of the Church of England, and six marriages. Henry's quest for a male heir would reshape English religion and politics for generations.",
          es: "Enrique VIII fue coronado Rey de Inglaterra el 24 de junio de 1509, a los 17 años, junto a su primera esposa Catalina de Aragón. Su reinado se convertiría en uno de los más significativos de la historia inglesa, marcado por la ruptura con la Iglesia Católica, el establecimiento de la Iglesia de Inglaterra y seis matrimonios. La búsqueda de Enrique de un heredero varón remodelaría la religión y la política inglesa durante generaciones.",
          de: "Heinrich VIII. wurde am 24. Juni 1509 im Alter von 17 Jahren zum König von England gekrönt, zusammen mit seiner ersten Frau Katharina von Aragón. Seine Herrschaft sollte eine der bedeutendsten in der englischen Geschichte werden, geprägt durch den Bruch mit der katholischen Kirche, die Gründung der Church of England und sechs Ehen. Heinrichs Suche nach einem männlichen Erben sollte die englische Religion und Politik für Generationen umgestalten.",
          nl: "Hendrik VIII werd op 24 juni 1509 gekroond tot koning van Engeland op 17-jarige leeftijd, samen met zijn eerste vrouw Catharina van Aragon. Zijn bewind zou een van de belangrijkste in de Engelse geschiedenis worden, gekenmerkt door de breuk met de katholieke kerk, de oprichting van de Kerk van Engeland en zes huwelijken. Hendriks zoektocht naar een mannelijke erfgenaam zou de Engelse religie en politiek voor generaties hervormen."
        }
      },
      {
        question: {
          en: "On June 24, 1947, what mysterious phenomenon was first reported by pilot Kenneth Arnold over Washington State?",
          es: "El 24 de junio de 1947, ¿qué fenómeno misterioso fue reportado por primera vez por el piloto Kenneth Arnold sobre el estado de Washington?",
          de: "Welches mysteriöse Phänomen wurde am 24. Juni 1947 erstmals vom Piloten Kenneth Arnold über dem Bundesstaat Washington gemeldet?",
          nl: "Welk mysterieus fenomeen werd op 24 juni 1947 voor het eerst gemeld door piloot Kenneth Arnold boven de staat Washington?"
        },
        options: [
          {
            en: "Aurora Borealis",
            es: "Aurora Boreal",
            de: "Nordlichter",
            nl: "Noorderlicht"
          },
          {
            en: "Flying Saucers (UFOs)",
            es: "Platillos Voladores (OVNIs)",
            de: "Fliegende Untertassen (UFOs)",
            nl: "Vliegende Schotels (UFO's)"
          },
          {
            en: "Ball Lightning",
            es: "Rayo en Bola",
            de: "Kugelblitz",
            nl: "Bliksembal"
          },
          {
            en: "Meteor Shower",
            es: "Lluvia de Meteoros",
            de: "Meteorschauer",
            nl: "Meteorenregen"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 24, 1947, private pilot Kenneth Arnold reported seeing nine high-speed objects flying near Mount Rainier, Washington. He described their movement as like 'saucers skipping on water,' leading newspapers to coin the term 'flying saucers.' This sighting sparked the modern UFO phenomenon and led to widespread public interest in unidentified flying objects that continues today.",
          es: "El 24 de junio de 1947, el piloto privado Kenneth Arnold reportó haber visto nueve objetos de alta velocidad volando cerca del Monte Rainier, Washington. Describió su movimiento como 'platillos saltando sobre el agua', lo que llevó a los periódicos a acuñar el término 'platillos voladores'. Este avistamiento desató el fenómeno moderno de los OVNIs y generó un amplio interés público en objetos voladores no identificados que continúa hasta hoy.",
          de: "Am 24. Juni 1947 berichtete der Privatpilot Kenneth Arnold, neun Hochgeschwindigkeitsobjekte in der Nähe des Mount Rainier, Washington, gesehen zu haben. Er beschrieb ihre Bewegung als wie 'Untertassen, die über Wasser hüpfen', was Zeitungen dazu veranlasste, den Begriff 'fliegende Untertassen' zu prägen. Diese Sichtung löste das moderne UFO-Phänomen aus und führte zu einem weit verbreiteten öffentlichen Interesse an unidentifizierten Flugobjekten, das bis heute anhält.",
          nl: "Op 24 juni 1947 meldde privépiloot Kenneth Arnold dat hij negen objecten met hoge snelheid zag vliegen in de buurt van Mount Rainier, Washington. Hij beschreef hun beweging als 'schotels die over water springen', wat kranten ertoe bracht de term 'vliegende schotels' te bedenken. Deze waarneming leidde tot het moderne UFO-fenomeen en leidde tot wijdverbreide publieke belangstelling voor ongeïdentificeerde vliegende objecten die vandaag de dag nog voortduurt."
        }
      },
      {
        question: {
          en: "On June 24, 1314, which Scottish king won a decisive victory over England at the Battle of Bannockburn?",
          es: "El 24 de junio de 1314, ¿qué rey escocés obtuvo una victoria decisiva sobre Inglaterra en la Batalla de Bannockburn?",
          de: "Welcher schottische König errang am 24. Juni 1314 einen entscheidenden Sieg über England in der Schlacht von Bannockburn?",
          nl: "Welke Schotse koning behaalde op 24 juni 1314 een beslissende overwinning op Engeland in de Slag bij Bannockburn?"
        },
        options: [
          {
            en: "William Wallace",
            es: "William Wallace",
            de: "William Wallace",
            nl: "William Wallace"
          },
          {
            en: "Robert the Bruce",
            es: "Roberto I de Escocia",
            de: "Robert the Bruce",
            nl: "Robert de Bruce"
          },
          {
            en: "James I",
            es: "Jacobo I",
            de: "Jakob I.",
            nl: "Jacobus I"
          },
          {
            en: "Malcolm III",
            es: "Malcolm III",
            de: "Malcolm III.",
            nl: "Malcolm III"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Robert the Bruce led Scottish forces to a decisive victory over England's King Edward II at Bannockburn on June 24, 1314. Despite being heavily outnumbered, the Scots used superior tactics and knowledge of terrain to defeat the English army. This victory secured Scottish independence and Robert's position as king, and is considered one of Scotland's greatest military triumphs.",
          es: "Roberto I de Escocia lideró las fuerzas escocesas a una victoria decisiva sobre el Rey Eduardo II de Inglaterra en Bannockburn el 24 de junio de 1314. A pesar de estar muy superados en número, los escoceses usaron tácticas superiores y conocimiento del terreno para derrotar al ejército inglés. Esta victoria aseguró la independencia escocesa y la posición de Roberto como rey, y se considera uno de los mayores triunfos militares de Escocia.",
          de: "Robert the Bruce führte die schottischen Streitkräfte am 24. Juni 1314 zu einem entscheidenden Sieg über Englands König Edward II. bei Bannockburn. Obwohl sie zahlenmäßig stark unterlegen waren, nutzten die Schotten überlegene Taktiken und Geländekenntnisse, um die englische Armee zu besiegen. Dieser Sieg sicherte die schottische Unabhängigkeit und Roberts Position als König und gilt als einer von Schottlands größten militärischen Triumphen.",
          nl: "Robert de Bruce leidde de Schotse strijdkrachten naar een beslissende overwinning op de Engelse koning Edward II bij Bannockburn op 24 juni 1314. Ondanks zwaar in de minderheid te zijn, gebruikten de Schotten superieure tactieken en kennis van het terrein om het Engelse leger te verslaan. Deze overwinning verzekerde de Schotse onafhankelijkheid en Roberts positie als koning, en wordt beschouwd als een van Schotlands grootste militaire triomfen."
        }
      },
      {
        question: {
          en: "On June 24, 1812, which European leader began his disastrous invasion of Russia with the Grand Army?",
          es: "El 24 de junio de 1812, ¿qué líder europeo comenzó su desastrosa invasión de Rusia con la Gran Armada?",
          de: "Welcher europäische Führer begann am 24. Juni 1812 seine katastrophale Invasion Russlands mit der Grande Armée?",
          nl: "Welke Europese leider begon op 24 juni 1812 zijn rampzalige invasie van Rusland met het Grote Leger?"
        },
        options: [
          {
            en: "Frederick the Great",
            es: "Federico el Grande",
            de: "Friedrich der Große",
            nl: "Frederik de Grote"
          },
          {
            en: "Napoleon Bonaparte",
            es: "Napoleón Bonaparte",
            de: "Napoleon Bonaparte",
            nl: "Napoleon Bonaparte"
          },
          {
            en: "Otto von Bismarck",
            es: "Otto von Bismarck",
            de: "Otto von Bismarck",
            nl: "Otto von Bismarck"
          },
          {
            en: "Charles XII of Sweden",
            es: "Carlos XII de Suecia",
            de: "Karl XII. von Schweden",
            nl: "Karel XII van Zweden"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Napoleon Bonaparte launched his invasion of Russia on June 24, 1812, with over 600,000 troops in the Grande Armée. The campaign proved catastrophic due to Russian scorched-earth tactics, harsh winter conditions, and supply problems. Less than 100,000 soldiers returned, marking the beginning of Napoleon's downfall. This disastrous campaign demonstrated the limits of military power and strategic overreach.",
          es: "Napoleón Bonaparte lanzó su invasión de Rusia el 24 de junio de 1812, con más de 600,000 tropas en la Grande Armée. La campaña resultó catastrófica debido a las tácticas rusas de tierra arrasada, las duras condiciones invernales y los problemas de suministro. Menos de 100,000 soldados regresaron, marcando el comienzo de la caída de Napoleón. Esta campaña desastrosa demostró los límites del poder militar y el exceso estratégico.",
          de: "Napoleon Bonaparte startete am 24. Juni 1812 seine Invasion Russlands mit über 600.000 Soldaten in der Grande Armée. Der Feldzug erwies sich als katastrophal aufgrund russischer Taktiken der verbrannten Erde, harscher Winterbedingungen und Versorgungsproblemen. Weniger als 100.000 Soldaten kehrten zurück, was den Beginn von Napoleons Fall markierte. Dieser katastrophale Feldzug demonstrierte die Grenzen militärischer Macht und strategischer Überdehnung.",
          nl: "Napoleon Bonaparte lanceerde zijn invasie van Rusland op 24 juni 1812 met meer dan 600.000 troepen in de Grande Armée. De campagne bleek rampzalig vanwege Russische verschroeide-aarde-tactieken, barre winteromstandigheden en bevoorradingsproblemen. Minder dan 100.000 soldaten keerden terug, wat het begin van Napoleons ondergang markeerde. Deze rampzalige campagne toonde de grenzen van militaire macht en strategische overschatting aan."
        }
      }
    ],

    // Day 25 - June 25th: Korean War and Historical Events
    day25: [
      {
        question: {
          en: "On June 25, 1950, which major Cold War conflict began when North Korea invaded South Korea?",
          es: "El 25 de junio de 1950, ¿qué importante conflicto de la Guerra Fría comenzó cuando Corea del Norte invadió Corea del Sur?",
          de: "Welcher wichtige Konflikt des Kalten Krieges begann am 25. Juni 1950, als Nordkorea Südkorea überfiel?",
          nl: "Welk belangrijk conflict van de Koude Oorlog begon op 25 juni 1950 toen Noord-Korea Zuid-Korea binnenviel?"
        },
        options: [
          {
            en: "Vietnam War",
            es: "Guerra de Vietnam",
            de: "Vietnamkrieg",
            nl: "Vietnamoorlog"
          },
          {
            en: "Korean War",
            es: "Guerra de Corea",
            de: "Koreakrieg",
            nl: "Koreaanse Oorlog"
          },
          {
            en: "Cuban Missile Crisis",
            es: "Crisis de los Misiles de Cuba",
            de: "Kubakrise",
            nl: "Cubacrisis"
          },
          {
            en: "Bay of Pigs Invasion",
            es: "Invasión de Bahía de Cochinos",
            de: "Invasion in der Schweinebucht",
            nl: "Invasie in de Varkensbaai"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Korean War began on June 25, 1950, when North Korean forces crossed the 38th parallel and invaded South Korea. The United Nations, led primarily by the United States, intervened to support South Korea, while China backed North Korea. The war lasted three years, resulted in millions of casualties, and ended in an armistice in 1953, leaving Korea divided to this day.",
          es: "La Guerra de Corea comenzó el 25 de junio de 1950, cuando las fuerzas norcoreanas cruzaron el paralelo 38 e invadieron Corea del Sur. Las Naciones Unidas, lideradas principalmente por Estados Unidos, intervinieron para apoyar a Corea del Sur, mientras que China respaldaba a Corea del Norte. La guerra duró tres años, resultó en millones de bajas y terminó en un armisticio en 1953, dejando a Corea dividida hasta el día de hoy.",
          de: "Der Koreakrieg begann am 25. Juni 1950, als nordkoreanische Streitkräfte den 38. Breitengrad überschritten und Südkorea überfielen. Die Vereinten Nationen, hauptsächlich von den Vereinigten Staaten geführt, intervenierten zur Unterstützung Südkoreas, während China Nordkorea unterstützte. Der Krieg dauerte drei Jahre, forderte Millionen Opfer und endete 1953 mit einem Waffenstillstand, der Korea bis heute geteilt ließ.",
          nl: "De Koreaanse Oorlog begon op 25 juni 1950 toen Noord-Koreaanse strijdkrachten de 38e breedtegraad overstaken en Zuid-Korea binnenvielen. De Verenigde Naties, voornamelijk geleid door de Verenigde Staten, kwamen tussenbeide om Zuid-Korea te steunen, terwijl China Noord-Korea steunde. De oorlog duurde drie jaar, resulteerde in miljoenen slachtoffers en eindigde in een wapenstilstand in 1953, waardoor Korea tot op de dag van vandaag verdeeld bleef."
        }
      },
      {
        question: {
          en: "On June 25, 2009, which legendary pop star known as the 'King of Pop' died in Los Angeles?",
          es: "El 25 de junio de 2009, ¿qué legendaria estrella del pop conocida como el 'Rey del Pop' murió en Los Ángeles?",
          de: "Welcher legendäre Popstar, bekannt als der 'King of Pop', starb am 25. Juni 2009 in Los Angeles?",
          nl: "Welke legendarische popster, bekend als de 'King of Pop', stierf op 25 juni 2009 in Los Angeles?"
        },
        options: [
          {
            en: "Elvis Presley",
            es: "Elvis Presley",
            de: "Elvis Presley",
            nl: "Elvis Presley"
          },
          {
            en: "Prince",
            es: "Prince",
            de: "Prince",
            nl: "Prince"
          },
          {
            en: "Michael Jackson",
            es: "Michael Jackson",
            de: "Michael Jackson",
            nl: "Michael Jackson"
          },
          {
            en: "David Bowie",
            es: "David Bowie",
            de: "David Bowie",
            nl: "David Bowie"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Michael Jackson died on June 25, 2009, at age 50, shocking fans worldwide. Known as the 'King of Pop,' Jackson revolutionized music videos, dance, and pop culture with hits like 'Thriller,' 'Billie Jean,' and 'Beat It.' His innovative performances, including the moonwalk, and record-breaking album sales made him one of the most influential entertainers in history. His death sparked global mourning and tributes.",
          es: "Michael Jackson murió el 25 de junio de 2009, a los 50 años, conmocionando a los fanáticos de todo el mundo. Conocido como el 'Rey del Pop', Jackson revolucionó los videos musicales, el baile y la cultura pop con éxitos como 'Thriller', 'Billie Jean' y 'Beat It'. Sus actuaciones innovadoras, incluyendo el moonwalk, y sus ventas récord de álbumes lo convirtieron en uno de los artistas más influyentes de la historia. Su muerte provocó duelo y tributos globales.",
          de: "Michael Jackson starb am 25. Juni 2009 im Alter von 50 Jahren und schockierte Fans weltweit. Als 'King of Pop' bekannt, revolutionierte Jackson Musikvideos, Tanz und Popkultur mit Hits wie 'Thriller', 'Billie Jean' und 'Beat It'. Seine innovativen Auftritte, einschließlich des Moonwalks, und rekordverdächtige Albumverkäufe machten ihn zu einem der einflussreichsten Entertainer der Geschichte. Sein Tod löste weltweite Trauer und Ehrungen aus.",
          nl: "Michael Jackson stierf op 25 juni 2009 op 50-jarige leeftijd, wat fans over de hele wereld schokte. Bekend als de 'King of Pop', revolutioneerde Jackson muziekvideo's, dans en popcultuur met hits als 'Thriller', 'Billie Jean' en 'Beat It'. Zijn innovatieve optredens, waaronder de moonwalk, en recordbrekende albumverkopen maakten hem tot een van de meest invloedrijke entertainers in de geschiedenis. Zijn dood veroorzaakte wereldwijde rouw en eerbetoon."
        }
      },
      {
        question: {
          en: "On June 25, 1876, which U.S. cavalry commander was defeated at the Battle of Little Bighorn?",
          es: "El 25 de junio de 1876, ¿qué comandante de caballería estadounidense fue derrotado en la Batalla de Little Bighorn?",
          de: "Welcher US-Kavalleriekommandant wurde am 25. Juni 1876 in der Schlacht am Little Bighorn besiegt?",
          nl: "Welke Amerikaanse cavaleriecommandant werd verslagen op 25 juni 1876 in de Slag bij Little Bighorn?"
        },
        options: [
          {
            en: "General Ulysses S. Grant",
            es: "General Ulysses S. Grant",
            de: "General Ulysses S. Grant",
            nl: "Generaal Ulysses S. Grant"
          },
          {
            en: "Colonel George Armstrong Custer",
            es: "Coronel George Armstrong Custer",
            de: "Oberst George Armstrong Custer",
            nl: "Kolonel George Armstrong Custer"
          },
          {
            en: "General William Tecumseh Sherman",
            es: "General William Tecumseh Sherman",
            de: "General William Tecumseh Sherman",
            nl: "Generaal William Tecumseh Sherman"
          },
          {
            en: "General Robert E. Lee",
            es: "General Robert E. Lee",
            de: "General Robert E. Lee",
            nl: "Generaal Robert E. Lee"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Colonel George Armstrong Custer and his 7th Cavalry Regiment were defeated by Lakota, Northern Cheyenne, and Arapaho warriors at Little Bighorn on June 25, 1876. Led by Sitting Bull and Crazy Horse, Native American forces annihilated Custer's immediate command of over 200 soldiers. Known as 'Custer's Last Stand,' this was one of the most significant Native American victories, though it ultimately led to intensified U.S. military campaigns against indigenous peoples.",
          es: "El Coronel George Armstrong Custer y su 7º Regimiento de Caballería fueron derrotados por guerreros Lakota, Cheyenne del Norte y Arapaho en Little Bighorn el 25 de junio de 1876. Liderados por Toro Sentado y Caballo Loco, las fuerzas nativas americanas aniquilaron el comando inmediato de Custer de más de 200 soldados. Conocida como 'La Última Batalla de Custer', esta fue una de las victorias más significativas de los nativos americanos, aunque finalmente llevó a intensificadas campañas militares estadounidenses contra los pueblos indígenas.",
          de: "Oberst George Armstrong Custer und sein 7. Kavallerieregiment wurden am 25. Juni 1876 von Lakota-, Northern Cheyenne- und Arapaho-Kriegern am Little Bighorn besiegt. Unter der Führung von Sitting Bull und Crazy Horse vernichteten die Streitkräfte der amerikanischen Ureinwohner Custers unmittelbares Kommando von über 200 Soldaten. Als 'Custers letztes Gefecht' bekannt, war dies einer der bedeutendsten Siege der amerikanischen Ureinwohner, obwohl es letztendlich zu intensivierten US-Militärkampagnen gegen indigene Völker führte.",
          nl: "Kolonel George Armstrong Custer en zijn 7e Cavalerieregiment werden verslagen door Lakota, Northern Cheyenne en Arapaho krijgers bij Little Bighorn op 25 juni 1876. Geleid door Sitting Bull en Crazy Horse vernietigden inheemse Amerikaanse strijdkrachten Custers directe commando van meer dan 200 soldaten. Bekend als 'Custers Laatste Gevecht', was dit een van de meest significante overwinningen van inheemse Amerikanen, hoewel het uiteindelijk leidde tot geïntensiveerde Amerikaanse militaire campagnes tegen inheemse volkeren."
        }
      },
      {
        question: {
          en: "On June 25, 1993, which author's book became a global phenomenon after a TV interview led to massive sales?",
          es: "El 25 de junio de 1993, ¿el libro de qué autor se convirtió en un fenómeno global después de que una entrevista de TV llevara a ventas masivas?",
          de: "Welcher Autor hatte am 25. Juni 1993 ein Buch, das nach einem TV-Interview zu massiven Verkäufen führte und zu einem globalen Phänomen wurde?",
          nl: "Van welke auteur werd het boek op 25 juni 1993 een wereldwijd fenomeen nadat een tv-interview leidde tot enorme verkopen?"
        },
        options: [
          {
            en: "Stephen King",
            es: "Stephen King",
            de: "Stephen King",
            nl: "Stephen King"
          },
          {
            en: "J.K. Rowling",
            es: "J.K. Rowling",
            de: "J.K. Rowling",
            nl: "J.K. Rowling"
          },
          {
            en: "John Grisham",
            es: "John Grisham",
            de: "John Grisham",
            nl: "John Grisham"
          },
          {
            en: "Tom Clancy",
            es: "Tom Clancy",
            de: "Tom Clancy",
            nl: "Tom Clancy"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "John Grisham's legal thriller 'The Firm' became a bestseller phenomenon after his appearance on The Today Show on June 25, 1993, coinciding with the film adaptation's release. The combination of the movie's success and TV publicity catapulted Grisham to superstardom. He became one of the best-selling authors of the 1990s, with his legal thrillers consistently topping bestseller lists and being adapted into major films.",
          es: "El thriller legal de John Grisham 'La Firma' se convirtió en un fenómeno de bestseller después de su aparición en The Today Show el 25 de junio de 1993, coincidiendo con el estreno de la adaptación cinematográfica. La combinación del éxito de la película y la publicidad televisiva catapultó a Grisham al estrellato. Se convirtió en uno de los autores más vendidos de los años 90, con sus thrillers legales constantemente encabezando las listas de bestsellers y siendo adaptados en películas importantes.",
          de: "John Grishams Justizthriller 'Die Firma' wurde nach seinem Auftritt in der Today Show am 25. Juni 1993, zeitgleich mit der Veröffentlichung der Filmadaption, zu einem Bestseller-Phänomen. Die Kombination aus dem Erfolg des Films und der TV-Publicity katapultierte Grisham zum Superstar. Er wurde einer der meistverkauften Autoren der 1990er Jahre, wobei seine Justizthriller konsequent die Bestsellerlisten anführten und in große Filme umgesetzt wurden.",
          nl: "John Grishams juridische thriller 'The Firm' werd een bestsellerfenomeen na zijn verschijning in The Today Show op 25 juni 1993, samenvallend met de release van de filmadaptatie. De combinatie van het succes van de film en tv-publiciteit katapulteerde Grisham naar supersterrendom. Hij werd een van de bestverkopende auteurs van de jaren '90, waarbij zijn juridische thrillers consequent de bestsellerlijsten aanvoerden en werden verfilmd als grote films."
        }
      },
      {
        question: {
          en: "On June 25, 1978, which science fiction film featuring a mysterious rainbow flag premiered?",
          es: "El 25 de junio de 1978, ¿qué película de ciencia ficción con una misteriosa bandera arcoíris se estrenó?",
          de: "Welcher Science-Fiction-Film mit einer mysteriösen Regenbogenflagge hatte am 25. Juni 1978 Premiere?",
          nl: "Welke sciencefictionfilm met een mysterieuze regenboogvlag ging op 25 juni 1978 in première?"
        },
        options: [
          {
            en: "Star Wars",
            es: "La Guerra de las Galaxias",
            de: "Krieg der Sterne",
            nl: "Star Wars"
          },
          {
            en: "Close Encounters of the Third Kind",
            es: "Encuentros Cercanos del Tercer Tipo",
            de: "Unheimliche Begegnung der dritten Art",
            nl: "Close Encounters of the Third Kind"
          },
          {
            en: "Alien",
            es: "Alien",
            de: "Alien",
            nl: "Alien"
          },
          {
            en: "The Black Hole",
            es: "El Agujero Negro",
            de: "Das schwarze Loch",
            nl: "The Black Hole"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The film 'Close Encounters of the Third Kind' featured the use of colored lights and visual communication. However, June 25, 1978, is actually more historically significant as the day the rainbow flag was first flown at the San Francisco Gay Freedom Day Parade, designed by Gilbert Baker. This colorful symbol became the iconic emblem of LGBTQ+ pride worldwide, representing diversity, inclusivity, and the fight for equal rights.",
          es: "La película 'Encuentros Cercanos del Tercer Tipo' presentó el uso de luces de colores y comunicación visual. Sin embargo, el 25 de junio de 1978 es en realidad más históricamente significativo como el día en que la bandera arcoíris se izó por primera vez en el Desfile del Día de la Libertad Gay de San Francisco, diseñada por Gilbert Baker. Este símbolo colorido se convirtió en el emblema icónico del orgullo LGBTQ+ en todo el mundo, representando diversidad, inclusividad y la lucha por la igualdad de derechos.",
          de: "Der Film 'Unheimliche Begegnung der dritten Art' zeigte die Verwendung farbiger Lichter und visueller Kommunikation. Der 25. Juni 1978 ist jedoch historisch bedeutsamer als der Tag, an dem die Regenbogenflagge erstmals bei der San Francisco Gay Freedom Day Parade gehisst wurde, entworfen von Gilbert Baker. Dieses farbenfrohe Symbol wurde zum ikonischen Emblem des LGBTQ+-Stolzes weltweit und repräsentiert Vielfalt, Inklusivität und den Kampf für gleiche Rechte.",
          nl: "De film 'Close Encounters of the Third Kind' gebruikte gekleurde lichten en visuele communicatie. Echter, 25 juni 1978 is eigenlijk historisch belangrijker als de dag waarop de regenboogvlag voor het eerst werd gehesen bij de San Francisco Gay Freedom Day Parade, ontworpen door Gilbert Baker. Dit kleurrijke symbool werd het iconische embleem van LGBTQ+-trots wereldwijd, dat diversiteit, inclusiviteit en de strijd voor gelijke rechten vertegenwoordigt."
        }
      }
    ],

    // Day 26 - June 26th: Historical Events
    day26: [
      {
        question: {
          en: "On June 26, 1945, which important international document was signed in San Francisco, establishing the United Nations?",
          es: "El 26 de junio de 1945, ¿qué importante documento internacional se firmó en San Francisco, estableciendo las Naciones Unidas?",
          de: "Welches wichtige internationale Dokument wurde am 26. Juni 1945 in San Francisco unterzeichnet und begründete die Vereinten Nationen?",
          nl: "Welk belangrijk internationaal document werd op 26 juni 1945 in San Francisco ondertekend, waarmee de Verenigde Naties werden opgericht?"
        },
        options: [
          {
            en: "The Geneva Convention",
            es: "La Convención de Ginebra",
            de: "Die Genfer Konvention",
            nl: "Het Verdrag van Genève"
          },
          {
            en: "The UN Charter",
            es: "La Carta de la ONU",
            de: "Die UN-Charta",
            nl: "Het VN-Handvest"
          },
          {
            en: "The Atlantic Charter",
            es: "La Carta del Atlántico",
            de: "Die Atlantik-Charta",
            nl: "Het Atlantisch Handvest"
          },
          {
            en: "The Treaty of Paris",
            es: "El Tratado de París",
            de: "Der Vertrag von Paris",
            nl: "Het Verdrag van Parijs"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The United Nations Charter was signed on June 26, 1945, by 50 countries at the San Francisco Conference. This foundational document established the UN to maintain international peace and security, develop friendly relations among nations, and promote social progress. The UN officially came into existence on October 24, 1945, when the Charter was ratified by the five permanent Security Council members and a majority of other signatories.",
          es: "La Carta de las Naciones Unidas fue firmada el 26 de junio de 1945 por 50 países en la Conferencia de San Francisco. Este documento fundacional estableció la ONU para mantener la paz y seguridad internacional, desarrollar relaciones amistosas entre naciones y promover el progreso social. La ONU entró oficialmente en existencia el 24 de octubre de 1945, cuando la Carta fue ratificada por los cinco miembros permanentes del Consejo de Seguridad y una mayoría de otros signatarios.",
          de: "Die Charta der Vereinten Nationen wurde am 26. Juni 1945 von 50 Ländern auf der Konferenz von San Francisco unterzeichnet. Dieses Gründungsdokument etablierte die UN zur Wahrung des internationalen Friedens und der Sicherheit, zur Entwicklung freundschaftlicher Beziehungen zwischen Nationen und zur Förderung des sozialen Fortschritts. Die UN trat offiziell am 24. Oktober 1945 in Kraft, als die Charta von den fünf ständigen Mitgliedern des Sicherheitsrates und einer Mehrheit anderer Unterzeichner ratifiziert wurde.",
          nl: "Het Handvest van de Verenigde Naties werd op 26 juni 1945 ondertekend door 50 landen tijdens de Conferentie van San Francisco. Dit fundamentele document richtte de VN op om internationale vrede en veiligheid te handhaven, vriendschappelijke betrekkingen tussen naties te ontwikkelen en sociale vooruitgang te bevorderen. De VN kwam officieel tot stand op 24 oktober 1945, toen het Handvest werd geratificeerd door de vijf permanente leden van de Veiligheidsraad en een meerderheid van andere ondertekenaars."
        }
      },
      {
        question: {
          en: "On June 26, 1997, which fantasy novel by J.K. Rowling was first published, launching one of the most successful book series in history?",
          es: "El 26 de junio de 1997, ¿qué novela de fantasía de J.K. Rowling se publicó por primera vez, lanzando una de las series de libros más exitosas de la historia?",
          de: "Welcher Fantasy-Roman von J.K. Rowling wurde am 26. Juni 1997 erstmals veröffentlicht und startete eine der erfolgreichsten Buchreihen der Geschichte?",
          nl: "Welke fantasieroman van J.K. Rowling werd op 26 juni 1997 voor het eerst gepubliceerd, waarmee een van de meest succesvolle boekenreeksen in de geschiedenis werd gelanceerd?"
        },
        options: [
          {
            en: "Harry Potter and the Chamber of Secrets",
            es: "Harry Potter y la Cámara Secreta",
            de: "Harry Potter und die Kammer des Schreckens",
            nl: "Harry Potter en de Geheime Kamer"
          },
          {
            en: "The Hobbit",
            es: "El Hobbit",
            de: "Der Hobbit",
            nl: "De Hobbit"
          },
          {
            en: "Harry Potter and the Philosopher's Stone",
            es: "Harry Potter y la Piedra Filosofal",
            de: "Harry Potter und der Stein der Weisen",
            nl: "Harry Potter en de Steen der Wijzen"
          },
          {
            en: "The Chronicles of Narnia",
            es: "Las Crónicas de Narnia",
            de: "Die Chroniken von Narnia",
            nl: "De Kronieken van Narnia"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Harry Potter and the Philosopher's Stone was published in the UK on June 26, 1997, with an initial print run of just 500 copies. The book became a global phenomenon, spawning six sequels, eight films, and a massive franchise. The series has sold over 500 million copies worldwide and has been translated into 80 languages, making it one of the best-selling book series in history.",
          es: "Harry Potter y la Piedra Filosofal se publicó en el Reino Unido el 26 de junio de 1997, con una tirada inicial de solo 500 copias. El libro se convirtió en un fenómeno global, generando seis secuelas, ocho películas y una franquicia masiva. La serie ha vendido más de 500 millones de copias en todo el mundo y ha sido traducida a 80 idiomas, convirtiéndola en una de las series de libros más vendidas de la historia.",
          de: "Harry Potter und der Stein der Weisen wurde am 26. Juni 1997 in Großbritannien mit einer Erstauflage von nur 500 Exemplaren veröffentlicht. Das Buch wurde zu einem globalen Phänomen und brachte sechs Fortsetzungen, acht Filme und ein riesiges Franchise hervor. Die Serie hat weltweit über 500 Millionen Exemplare verkauft und wurde in 80 Sprachen übersetzt, was sie zu einer der meistverkauften Buchreihen der Geschichte macht.",
          nl: "Harry Potter en de Steen der Wijzen werd op 26 juni 1997 in het VK gepubliceerd met een eerste oplage van slechts 500 exemplaren. Het boek werd een wereldwijd fenomeen en bracht zes vervolgen, acht films en een enorm franchise voort. De serie heeft wereldwijd meer dan 500 miljoen exemplaren verkocht en is vertaald in 80 talen, waardoor het een van de best verkochte boekenreeksen in de geschiedenis is."
        }
      },
      {
        question: {
          en: "On June 26, 1963, which U.S. President gave his famous 'Ich bin ein Berliner' speech in West Berlin?",
          es: "El 26 de junio de 1963, ¿qué presidente estadounidense pronunció su famoso discurso 'Ich bin ein Berliner' en Berlín Occidental?",
          de: "Welcher US-Präsident hielt am 26. Juni 1963 seine berühmte 'Ich bin ein Berliner' Rede in West-Berlin?",
          nl: "Welke Amerikaanse president hield op 26 juni 1963 zijn beroemde 'Ich bin ein Berliner' toespraak in West-Berlijn?"
        },
        options: [
          {
            en: "Dwight D. Eisenhower",
            es: "Dwight D. Eisenhower",
            de: "Dwight D. Eisenhower",
            nl: "Dwight D. Eisenhower"
          },
          {
            en: "Lyndon B. Johnson",
            es: "Lyndon B. Johnson",
            de: "Lyndon B. Johnson",
            nl: "Lyndon B. Johnson"
          },
          {
            en: "John F. Kennedy",
            es: "John F. Kennedy",
            de: "John F. Kennedy",
            nl: "John F. Kennedy"
          },
          {
            en: "Richard Nixon",
            es: "Richard Nixon",
            de: "Richard Nixon",
            nl: "Richard Nixon"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "President John F. Kennedy delivered his iconic 'Ich bin ein Berliner' speech on June 26, 1963, to a crowd of over 450,000 people in West Berlin. The speech was a powerful statement of solidarity with West Berliners living behind the Berlin Wall during the Cold War. Kennedy's words, meaning 'I am a Berliner,' became one of the most famous declarations of the Cold War era and symbolized American commitment to defending freedom in divided Berlin.",
          es: "El presidente John F. Kennedy pronunció su icónico discurso 'Ich bin ein Berliner' el 26 de junio de 1963 ante una multitud de más de 450,000 personas en Berlín Occidental. El discurso fue una poderosa declaración de solidaridad con los berlineses occidentales que vivían detrás del Muro de Berlín durante la Guerra Fría. Las palabras de Kennedy, que significan 'Soy un berlinés', se convirtieron en una de las declaraciones más famosas de la era de la Guerra Fría y simbolizaron el compromiso estadounidense de defender la libertad en Berlín dividida.",
          de: "Präsident John F. Kennedy hielt am 26. Juni 1963 seine ikonische 'Ich bin ein Berliner' Rede vor einer Menschenmenge von über 450.000 Menschen in West-Berlin. Die Rede war eine kraftvolle Solidaritätserklärung mit den West-Berlinern, die während des Kalten Krieges hinter der Berliner Mauer lebten. Kennedys Worte wurden zu einer der berühmtesten Erklärungen der Ära des Kalten Krieges und symbolisierten das amerikanische Engagement zur Verteidigung der Freiheit im geteilten Berlin.",
          nl: "President John F. Kennedy hield zijn iconische 'Ich bin ein Berliner' toespraak op 26 juni 1963 voor een menigte van meer dan 450.000 mensen in West-Berlijn. De toespraak was een krachtige verklaring van solidariteit met West-Berlijners die achter de Berlijnse Muur leefden tijdens de Koude Oorlog. Kennedy's woorden, die 'Ik ben een Berliner' betekenen, werden een van de beroemdste verklaringen van het Koude Oorlog-tijdperk en symboliseerden de Amerikaanse toewijding aan het verdedigen van vrijheid in het verdeelde Berlijn."
        }
      },
      {
        question: {
          en: "On June 26, 2000, which groundbreaking announcement about human genetics was made jointly by President Bill Clinton and Prime Minister Tony Blair?",
          es: "El 26 de junio de 2000, ¿qué anuncio revolucionario sobre genética humana fue hecho conjuntamente por el presidente Bill Clinton y el primer ministro Tony Blair?",
          de: "Welche bahnbrechende Ankündigung zur menschlichen Genetik wurde am 26. Juni 2000 gemeinsam von Präsident Bill Clinton und Premierminister Tony Blair gemacht?",
          nl: "Welke baanbrekende aankondiging over menselijke genetica werd op 26 juni 2000 gezamenlijk gedaan door president Bill Clinton en premier Tony Blair?"
        },
        options: [
          {
            en: "Discovery of DNA structure",
            es: "Descubrimiento de la estructura del ADN",
            de: "Entdeckung der DNA-Struktur",
            nl: "Ontdekking van de DNA-structuur"
          },
          {
            en: "Completion of the Human Genome Project draft",
            es: "Finalización del borrador del Proyecto Genoma Humano",
            de: "Fertigstellung des Entwurfs des Humangenomprojekts",
            nl: "Voltooiing van het ontwerp van het Human Genome Project"
          },
          {
            en: "First successful gene therapy",
            es: "Primera terapia génica exitosa",
            de: "Erste erfolgreiche Gentherapie",
            nl: "Eerste succesvolle gentherapie"
          },
          {
            en: "Cloning of Dolly the sheep",
            es: "Clonación de la oveja Dolly",
            de: "Klonierung des Schafs Dolly",
            nl: "Klonen van schaap Dolly"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 26, 2000, President Clinton and Prime Minister Blair announced the completion of the first working draft of the Human Genome Project, which mapped the entire human genetic code. This international scientific achievement involved sequencing approximately 3 billion DNA base pairs that make up human chromosomes. The project revolutionized medicine and biology, enabling advances in personalized medicine, disease research, and our understanding of human evolution and variation.",
          es: "El 26 de junio de 2000, el presidente Clinton y el primer ministro Blair anunciaron la finalización del primer borrador funcional del Proyecto Genoma Humano, que mapeó todo el código genético humano. Este logro científico internacional implicó secuenciar aproximadamente 3 mil millones de pares de bases de ADN que componen los cromosomas humanos. El proyecto revolucionó la medicina y la biología, permitiendo avances en medicina personalizada, investigación de enfermedades y nuestra comprensión de la evolución y variación humana.",
          de: "Am 26. Juni 2000 kündigten Präsident Clinton und Premierminister Blair die Fertigstellung des ersten Arbeitsentwurfs des Humangenomprojekts an, das den gesamten menschlichen genetischen Code kartierte. Diese internationale wissenschaftliche Errungenschaft umfasste die Sequenzierung von etwa 3 Milliarden DNA-Basenpaaren, die menschliche Chromosomen bilden. Das Projekt revolutionierte Medizin und Biologie und ermöglichte Fortschritte in der personalisierten Medizin, Krankheitsforschung und unserem Verständnis von menschlicher Evolution und Variation.",
          nl: "Op 26 juni 2000 kondigden president Clinton en premier Blair de voltooiing aan van het eerste werkontwerp van het Human Genome Project, dat de volledige menselijke genetische code in kaart bracht. Deze internationale wetenschappelijke prestatie omvatte het sequencen van ongeveer 3 miljard DNA-basenparen die menselijke chromosomen vormen. Het project revolutioneerde de geneeskunde en biologie en maakte vooruitgang mogelijk in gepersonaliseerde geneeskunde, ziekteonderzoek en ons begrip van menselijke evolutie en variatie."
        }
      },
      {
        question: {
          en: "On June 26, 1284, according to legend, which German town lost its children to a mysterious piper?",
          es: "El 26 de junio de 1284, según la leyenda, ¿qué ciudad alemana perdió a sus niños a manos de un misterioso flautista?",
          de: "Welche deutsche Stadt verlor der Legende nach am 26. Juni 1284 ihre Kinder an einen mysteriösen Pfeifer?",
          nl: "Welke Duitse stad verloor volgens de legende op 26 juni 1284 zijn kinderen aan een mysterieuze pijper?"
        },
        options: [
          {
            en: "Bremen",
            es: "Bremen",
            de: "Bremen",
            nl: "Bremen"
          },
          {
            en: "Cologne",
            es: "Colonia",
            de: "Köln",
            nl: "Keulen"
          },
          {
            en: "Hamelin",
            es: "Hamelín",
            de: "Hameln",
            nl: "Hamelen"
          },
          {
            en: "Frankfurt",
            es: "Fráncfort",
            de: "Frankfurt",
            nl: "Frankfurt"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The legend of the Pied Piper of Hamelin dates to June 26, 1284, when, according to folklore, a mysterious piper led 130 children away from the town of Hamelin, Germany, never to return. The tale, popularized by the Brothers Grimm, may have been based on a real historical event, possibly involving child emigration, a plague, or a children's crusade. The story has become one of the most enduring European legends and continues to be retold in various forms worldwide.",
          es: "La leyenda del Flautista de Hamelín se remonta al 26 de junio de 1284, cuando, según el folclore, un flautista misterioso llevó a 130 niños lejos de la ciudad de Hamelín, Alemania, para nunca regresar. El cuento, popularizado por los Hermanos Grimm, puede haber estado basado en un evento histórico real, posiblemente relacionado con emigración infantil, una plaga o una cruzada de niños. La historia se ha convertido en una de las leyendas europeas más perdurables y continúa siendo contada de varias formas en todo el mundo.",
          de: "Die Legende vom Rattenfänger von Hameln datiert auf den 26. Juni 1284, als laut Folklore ein mysteriöser Pfeifer 130 Kinder aus der Stadt Hameln, Deutschland, wegführte, die nie zurückkehrten. Die Geschichte, popularisiert durch die Gebrüder Grimm, könnte auf einem echten historischen Ereignis basieren, möglicherweise im Zusammenhang mit Kinderemigration, einer Pest oder einem Kinderkreuzzug. Die Geschichte ist zu einer der beständigsten europäischen Legenden geworden und wird weltweit weiterhin in verschiedenen Formen erzählt.",
          nl: "De legende van de Rattenvanger van Hamelen dateert van 26 juni 1284, toen volgens folklore een mysterieuze pijper 130 kinderen wegvoerde uit de stad Hamelen, Duitsland, om nooit meer terug te keren. Het verhaal, populair gemaakt door de Gebroeders Grimm, kan gebaseerd zijn op een echte historische gebeurtenis, mogelijk met betrekking tot kinderemmigratie, een plaag of een kinderkruistocht. Het verhaal is een van de meest blijvende Europese legenden geworden en wordt wereldwijd nog steeds in verschillende vormen verteld."
        }
      }
    ],

    // Day 27 - June 27th: Historical Events
    day27: [
      {
        question: {
          en: "On June 27, 1967, what revolutionary banking device was first installed in London, allowing customers to withdraw cash without entering the bank?",
          es: "El 27 de junio de 1967, ¿qué dispositivo bancario revolucionario se instaló por primera vez en Londres, permitiendo a los clientes retirar efectivo sin entrar al banco?",
          de: "Welches revolutionäre Bankgerät wurde am 27. Juni 1967 erstmals in London installiert und ermöglichte es Kunden, Bargeld abzuheben, ohne die Bank zu betreten?",
          nl: "Welk revolutionair bankapparaat werd op 27 juni 1967 voor het eerst in Londen geïnstalleerd, waardoor klanten contant geld konden opnemen zonder de bank binnen te gaan?"
        },
        options: [
          {
            en: "The credit card reader",
            es: "El lector de tarjetas de crédito",
            de: "Der Kreditkartenleser",
            nl: "De creditcardlezer"
          },
          {
            en: "The ATM (Automated Teller Machine)",
            es: "El cajero automático",
            de: "Der Geldautomat",
            nl: "De geldautomaat"
          },
          {
            en: "The check depositor",
            es: "El depositador de cheques",
            de: "Der Scheckeinzahler",
            nl: "De cheque-inleverautomaat"
          },
          {
            en: "The currency exchange machine",
            es: "La máquina de cambio de divisas",
            de: "Der Geldwechselautomat",
            nl: "De valutawisselautomaat"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The world's first ATM was installed on June 27, 1967, at a Barclays Bank branch in Enfield, London, invented by John Shepherd-Barron. The machine dispensed a maximum of £10 per transaction and used special vouchers instead of plastic cards. This innovation revolutionized banking by providing 24-hour access to cash and changed how people manage their money. Today, there are over 3 million ATMs worldwide, making this one of the most successful inventions in banking history.",
          es: "El primer cajero automático del mundo se instaló el 27 de junio de 1967 en una sucursal de Barclays Bank en Enfield, Londres, inventado por John Shepherd-Barron. La máquina dispensaba un máximo de £10 por transacción y usaba vales especiales en lugar de tarjetas de plástico. Esta innovación revolucionó la banca al proporcionar acceso al efectivo las 24 horas y cambió la forma en que las personas administran su dinero. Hoy en día, hay más de 3 millones de cajeros automáticos en todo el mundo, lo que hace de esta una de las invenciones más exitosas en la historia bancaria.",
          de: "Der weltweit erste Geldautomat wurde am 27. Juni 1967 in einer Barclays Bank-Filiale in Enfield, London, installiert, erfunden von John Shepherd-Barron. Das Gerät gab maximal £10 pro Transaktion aus und verwendete spezielle Gutscheine anstelle von Plastikkarten. Diese Innovation revolutionierte das Bankwesen, indem sie rund um die Uhr Zugang zu Bargeld bot und die Art und Weise veränderte, wie Menschen ihr Geld verwalten. Heute gibt es weltweit über 3 Millionen Geldautomaten, was dies zu einer der erfolgreichsten Erfindungen in der Bankengeschichte macht.",
          nl: "De eerste geldautomaat ter wereld werd op 27 juni 1967 geïnstalleerd bij een Barclays Bank-vestiging in Enfield, Londen, uitgevonden door John Shepherd-Barron. De machine verstrekte maximaal £10 per transactie en gebruikte speciale bonnen in plaats van plastic kaarten. Deze innovatie revolutioneerde het bankwezen door 24 uur per dag toegang tot contant geld te bieden en veranderde de manier waarop mensen met hun geld omgaan. Vandaag zijn er wereldwijd meer dan 3 miljoen geldautomaten, waardoor dit een van de meest succesvolle uitvindingen in de bankgeschiedenis is."
        }
      },
      {
        question: {
          en: "On June 27, 1950, which U.S. President authorized American forces to enter the Korean War?",
          es: "El 27 de junio de 1950, ¿qué presidente estadounidense autorizó a las fuerzas estadounidenses a entrar en la Guerra de Corea?",
          de: "Welcher US-Präsident genehmigte am 27. Juni 1950 den Eintritt amerikanischer Streitkräfte in den Koreakrieg?",
          nl: "Welke Amerikaanse president gaf op 27 juni 1950 toestemming aan Amerikaanse troepen om de Koreaanse Oorlog binnen te gaan?"
        },
        options: [
          {
            en: "Franklin D. Roosevelt",
            es: "Franklin D. Roosevelt",
            de: "Franklin D. Roosevelt",
            nl: "Franklin D. Roosevelt"
          },
          {
            en: "Dwight D. Eisenhower",
            es: "Dwight D. Eisenhower",
            de: "Dwight D. Eisenhower",
            nl: "Dwight D. Eisenhower"
          },
          {
            en: "Harry S. Truman",
            es: "Harry S. Truman",
            de: "Harry S. Truman",
            nl: "Harry S. Truman"
          },
          {
            en: "John F. Kennedy",
            es: "John F. Kennedy",
            de: "John F. Kennedy",
            nl: "John F. Kennedy"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "President Harry S. Truman authorized U.S. military intervention in Korea on June 27, 1950, just two days after North Korea invaded South Korea. Truman committed American air and naval forces to support South Korea, framing the intervention as a UN police action rather than a formal declaration of war. This decision marked a significant moment in the Cold War, as it was the first major military confrontation between communist and capitalist forces after World War II.",
          es: "El presidente Harry S. Truman autorizó la intervención militar estadounidense en Corea el 27 de junio de 1950, solo dos días después de que Corea del Norte invadiera Corea del Sur. Truman comprometió fuerzas aéreas y navales estadounidenses para apoyar a Corea del Sur, enmarcando la intervención como una acción policial de la ONU en lugar de una declaración formal de guerra. Esta decisión marcó un momento significativo en la Guerra Fría, ya que fue el primer enfrentamiento militar importante entre fuerzas comunistas y capitalistas después de la Segunda Guerra Mundial.",
          de: "Präsident Harry S. Truman genehmigte am 27. Juni 1950 die militärische Intervention der USA in Korea, nur zwei Tage nachdem Nordkorea Südkorea überfallen hatte. Truman setzte amerikanische Luft- und Seestreitkräfte zur Unterstützung Südkoreas ein und bezeichnete die Intervention als UN-Polizeiaktion statt einer formellen Kriegserklärung. Diese Entscheidung markierte einen bedeutenden Moment im Kalten Krieg, da es die erste große militärische Konfrontation zwischen kommunistischen und kapitalistischen Kräften nach dem Zweiten Weltkrieg war.",
          nl: "President Harry S. Truman gaf op 27 juni 1950 toestemming voor Amerikaanse militaire interventie in Korea, slechts twee dagen nadat Noord-Korea Zuid-Korea was binnengevallen. Truman zette Amerikaanse lucht- en zeestrijdkrachten in om Zuid-Korea te steunen, waarbij hij de interventie fraamde als een VN-politieactie in plaats van een formele oorlogsverklaring. Deze beslissing markeerde een belangrijk moment in de Koude Oorlog, omdat het de eerste grote militaire confrontatie was tussen communistische en kapitalistische strijdkrachten na de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "On June 27, 2007, which former British Prime Minister became a Middle East envoy shortly after leaving office?",
          es: "El 27 de junio de 2007, ¿qué ex primer ministro británico se convirtió en enviado de Oriente Medio poco después de dejar el cargo?",
          de: "Welcher ehemalige britische Premierminister wurde am 27. Juni 2007 kurz nach seinem Ausscheiden aus dem Amt Nahost-Gesandter?",
          nl: "Welke voormalige Britse premier werd op 27 juni 2007 kort na zijn vertrek benoemd tot gezant voor het Midden-Oosten?"
        },
        options: [
          {
            en: "Margaret Thatcher",
            es: "Margaret Thatcher",
            de: "Margaret Thatcher",
            nl: "Margaret Thatcher"
          },
          {
            en: "John Major",
            es: "John Major",
            de: "John Major",
            nl: "John Major"
          },
          {
            en: "Tony Blair",
            es: "Tony Blair",
            de: "Tony Blair",
            nl: "Tony Blair"
          },
          {
            en: "Gordon Brown",
            es: "Gordon Brown",
            de: "Gordon Brown",
            nl: "Gordon Brown"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Tony Blair was appointed as the Quartet's Middle East envoy on June 27, 2007, the day he stepped down as British Prime Minister after 10 years in office. The Quartet consists of the United Nations, United States, European Union, and Russia. Blair's role focused on promoting economic development and institutional reforms in Palestinian territories. His appointment was significant given his involvement in Middle Eastern affairs during his premiership, particularly regarding the Iraq War.",
          es: "Tony Blair fue nombrado enviado de Oriente Medio del Cuarteto el 27 de junio de 2007, el día en que renunció como Primer Ministro británico después de 10 años en el cargo. El Cuarteto está formado por las Naciones Unidas, Estados Unidos, la Unión Europea y Rusia. El papel de Blair se centró en promover el desarrollo económico y las reformas institucionales en los territorios palestinos. Su nombramiento fue significativo dada su participación en asuntos de Oriente Medio durante su mandato, particularmente en relación con la Guerra de Irak.",
          de: "Tony Blair wurde am 27. Juni 2007, dem Tag, an dem er nach 10 Jahren im Amt als britischer Premierminister zurücktrat, zum Nahost-Gesandten des Quartetts ernannt. Das Quartett besteht aus den Vereinten Nationen, den Vereinigten Staaten, der Europäischen Union und Russland. Blairs Rolle konzentrierte sich auf die Förderung wirtschaftlicher Entwicklung und institutioneller Reformen in den palästinensischen Gebieten. Seine Ernennung war bedeutsam angesichts seiner Beteiligung an Angelegenheiten des Nahen Ostens während seiner Amtszeit, insbesondere im Zusammenhang mit dem Irakkrieg.",
          nl: "Tony Blair werd op 27 juni 2007 benoemd tot gezant voor het Midden-Oosten van het Kwartet, de dag waarop hij na 10 jaar als Britse premier aftrad. Het Kwartet bestaat uit de Verenigde Naties, Verenigde Staten, Europese Unie en Rusland. Blairs rol richtte zich op het bevorderen van economische ontwikkeling en institutionele hervormingen in Palestijnse gebieden. Zijn benoeming was significant gezien zijn betrokkenheid bij zaken in het Midden-Oosten tijdens zijn premierschap, met name met betrekking tot de Irakoorlog."
        }
      },
      {
        question: {
          en: "On June 27, 1844, which religious leader was killed by a mob in Carthage, Illinois, founding a religion that continues today?",
          es: "El 27 de junio de 1844, ¿qué líder religioso fue asesinado por una turba en Carthage, Illinois, fundando una religión que continúa hoy?",
          de: "Welcher religiöse Führer wurde am 27. Juni 1844 von einem Mob in Carthage, Illinois, getötet, nachdem er eine Religion gegründet hatte, die bis heute fortbesteht?",
          nl: "Welke religieuze leider werd op 27 juni 1844 door een menigte gedood in Carthage, Illinois, nadat hij een religie had gesticht die vandaag nog bestaat?"
        },
        options: [
          {
            en: "Brigham Young",
            es: "Brigham Young",
            de: "Brigham Young",
            nl: "Brigham Young"
          },
          {
            en: "Joseph Smith",
            es: "Joseph Smith",
            de: "Joseph Smith",
            nl: "Joseph Smith"
          },
          {
            en: "John Wesley",
            es: "John Wesley",
            de: "John Wesley",
            nl: "John Wesley"
          },
          {
            en: "William Penn",
            es: "William Penn",
            de: "William Penn",
            nl: "William Penn"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Joseph Smith, the founder of the Latter Day Saint movement (Mormonism), was killed by a mob on June 27, 1844, while imprisoned in Carthage, Illinois. Smith had published the Book of Mormon in 1830 and established the Church of Jesus Christ of Latter-day Saints. After his death, Brigham Young led the majority of followers westward to Utah. Today, the LDS Church has over 16 million members worldwide, making Smith's religious movement one of the most successful new religions founded in modern times.",
          es: "Joseph Smith, el fundador del movimiento de los Santos de los Últimos Días (mormonismo), fue asesinado por una turba el 27 de junio de 1844, mientras estaba encarcelado en Carthage, Illinois. Smith había publicado el Libro de Mormón en 1830 y estableció la Iglesia de Jesucristo de los Santos de los Últimos Días. Después de su muerte, Brigham Young lideró a la mayoría de los seguidores hacia el oeste hasta Utah. Hoy, la Iglesia SUD tiene más de 16 millones de miembros en todo el mundo, lo que hace del movimiento religioso de Smith una de las nuevas religiones más exitosas fundadas en tiempos modernos.",
          de: "Joseph Smith, der Gründer der Bewegung der Heiligen der Letzten Tage (Mormonismus), wurde am 27. Juni 1844 von einem Mob getötet, während er in Carthage, Illinois, inhaftiert war. Smith hatte 1830 das Buch Mormon veröffentlicht und die Kirche Jesu Christi der Heiligen der Letzten Tage gegründet. Nach seinem Tod führte Brigham Young die Mehrheit der Anhänger westwärts nach Utah. Heute hat die HLT-Kirche weltweit über 16 Millionen Mitglieder, was Smiths religiöse Bewegung zu einer der erfolgreichsten neuen Religionen macht, die in der Neuzeit gegründet wurden.",
          nl: "Joseph Smith, de oprichter van de Beweging van de Heiligen der Laatste Dagen (mormonisme), werd op 27 juni 1844 door een menigte gedood terwijl hij gevangen zat in Carthage, Illinois. Smith had in 1830 het Boek van Mormon gepubliceerd en de Kerk van Jezus Christus van de Heiligen der Laatste Dagen opgericht. Na zijn dood leidde Brigham Young de meerderheid van de volgelingen westwaarts naar Utah. Vandaag heeft de HLD-kerk wereldwijd meer dan 16 miljoen leden, waardoor Smiths religieuze beweging een van de meest succesvolle nieuwe religies is die in moderne tijden zijn gesticht."
        }
      },
      {
        question: {
          en: "On June 27, 1893, which major financial event caused panic on Wall Street and led to a severe economic depression?",
          es: "El 27 de junio de 1893, ¿qué importante evento financiero causó pánico en Wall Street y condujo a una severa depresión económica?",
          de: "Welches wichtige Finanzereignis verursachte am 27. Juni 1893 Panik an der Wall Street und führte zu einer schweren wirtschaftlichen Depression?",
          nl: "Welke belangrijke financiële gebeurtenis veroorzaakte op 27 juni 1893 paniek op Wall Street en leidde tot een ernstige economische depressie?"
        },
        options: [
          {
            en: "The Great Depression",
            es: "La Gran Depresión",
            de: "Die Große Depression",
            nl: "De Grote Depressie"
          },
          {
            en: "The Panic of 1893 stock market crash",
            es: "El Pánico de 1893 y el colapso del mercado de valores",
            de: "Die Panik von 1893 und der Börsencrash",
            nl: "De Paniek van 1893 beurscrash"
          },
          {
            en: "Black Tuesday",
            es: "Martes Negro",
            de: "Schwarzer Dienstag",
            nl: "Zwarte Dinsdag"
          },
          {
            en: "The 2008 Financial Crisis",
            es: "La Crisis Financiera de 2008",
            de: "Die Finanzkrise 2008",
            nl: "De Financiële Crisis van 2008"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 27, 1893, the stock market crashed, marking the beginning of the Panic of 1893, one of the worst economic depressions in U.S. history. The crisis was triggered by the bankruptcy of major railroads, bank failures, and the collapse of overextended businesses. Unemployment reached 20%, and the depression lasted four years. This panic led to significant political and economic reforms, including debates over monetary policy and the gold standard that shaped American politics for decades.",
          es: "El 27 de junio de 1893, el mercado de valores colapsó, marcando el comienzo del Pánico de 1893, una de las peores depresiones económicas en la historia de Estados Unidos. La crisis fue desencadenada por la quiebra de importantes ferrocarriles, quiebras bancarias y el colapso de empresas sobreendeudadas. El desempleo alcanzó el 20% y la depresión duró cuatro años. Este pánico condujo a importantes reformas políticas y económicas, incluidos debates sobre política monetaria y el patrón oro que dieron forma a la política estadounidense durante décadas.",
          de: "Am 27. Juni 1893 brach der Aktienmarkt zusammen und markierte den Beginn der Panik von 1893, einer der schlimmsten wirtschaftlichen Depressionen in der US-Geschichte. Die Krise wurde durch den Bankrott großer Eisenbahnen, Bankenpleiten und den Zusammenbruch überschuldeter Unternehmen ausgelöst. Die Arbeitslosigkeit erreichte 20%, und die Depression dauerte vier Jahre. Diese Panik führte zu bedeutenden politischen und wirtschaftlichen Reformen, einschließlich Debatten über Geldpolitik und den Goldstandard, die die amerikanische Politik jahrzehntelang prägten.",
          nl: "Op 27 juni 1893 stortte de aandelenmarkt in, wat het begin markeerde van de Paniek van 1893, een van de ergste economische depressies in de Amerikaanse geschiedenis. De crisis werd veroorzaakt door het faillissement van grote spoorwegmaatschappijen, bankfaillissementen en de ineenstorting van overbelaste bedrijven. De werkloosheid bereikte 20%, en de depressie duurde vier jaar. Deze paniek leidde tot belangrijke politieke en economische hervormingen, waaronder debatten over monetair beleid en de goudstandaard die decennialang de Amerikaanse politiek vormgaven."
        }
      }
    ],

    // Day 28 - June 28th: Historical Events
    day28: [
      {
        question: {
          en: "On June 28, 1914, which event in Sarajevo triggered the start of World War I?",
          es: "El 28 de junio de 1914, ¿qué evento en Sarajevo desencadenó el inicio de la Primera Guerra Mundial?",
          de: "Welches Ereignis in Sarajevo löste am 28. Juni 1914 den Beginn des Ersten Weltkriegs aus?",
          nl: "Welke gebeurtenis in Sarajevo leidde op 28 juni 1914 tot het begin van de Eerste Wereldoorlog?"
        },
        options: [
          {
            en: "The sinking of the Lusitania",
            es: "El hundimiento del Lusitania",
            de: "Der Untergang der Lusitania",
            nl: "Het zinken van de Lusitania"
          },
          {
            en: "The assassination of Archduke Franz Ferdinand",
            es: "El asesinato del Archiduque Francisco Fernando",
            de: "Die Ermordung von Erzherzog Franz Ferdinand",
            nl: "De moord op aartshertog Franz Ferdinand"
          },
          {
            en: "The invasion of Belgium",
            es: "La invasión de Bélgica",
            de: "Die Invasion Belgiens",
            nl: "De invasie van België"
          },
          {
            en: "The Battle of Verdun",
            es: "La Batalla de Verdún",
            de: "Die Schlacht von Verdun",
            nl: "De Slag om Verdun"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "On June 28, 1914, Archduke Franz Ferdinand of Austria and his wife Sophie were assassinated in Sarajevo by Gavrilo Princip, a Serbian nationalist. This assassination set off a chain reaction of diplomatic crises and military mobilizations due to Europe's complex alliance system. Austria-Hungary declared war on Serbia, triggering alliances that brought Russia, Germany, France, and eventually Britain into the conflict. This single act of political violence ultimately led to World War I, resulting in over 17 million deaths.",
          es: "El 28 de junio de 1914, el Archiduque Francisco Fernando de Austria y su esposa Sophie fueron asesinados en Sarajevo por Gavrilo Princip, un nacionalista serbio. Este asesinato desencadenó una reacción en cadena de crisis diplomáticas y movilizaciones militares debido al complejo sistema de alianzas de Europa. Austria-Hungría declaró la guerra a Serbia, activando alianzas que llevaron a Rusia, Alemania, Francia y eventualmente a Gran Bretaña al conflicto. Este único acto de violencia política finalmente condujo a la Primera Guerra Mundial, resultando en más de 17 millones de muertes.",
          de: "Am 28. Juni 1914 wurden Erzherzog Franz Ferdinand von Österreich und seine Frau Sophie in Sarajevo von Gavrilo Princip, einem serbischen Nationalisten, ermordet. Dieses Attentat löste aufgrund des komplexen Bündnissystems Europas eine Kettenreaktion diplomatischer Krisen und militärischer Mobilisierungen aus. Österreich-Ungarn erklärte Serbien den Krieg, was Bündnisse aktivierte, die Russland, Deutschland, Frankreich und schließlich Großbritannien in den Konflikt einbezogen. Diese einzelne Tat politischer Gewalt führte letztendlich zum Ersten Weltkrieg mit über 17 Millionen Toten.",
          nl: "Op 28 juni 1914 werden aartshertog Franz Ferdinand van Oostenrijk en zijn vrouw Sophie vermoord in Sarajevo door Gavrilo Princip, een Servische nationalist. Deze moord zette een kettingreactie van diplomatieke crises en militaire mobilisaties in gang vanwege Europa's complexe alliantiesysteem. Oostenrijk-Hongarije verklaarde Servië de oorlog, wat allianties activeerde die Rusland, Duitsland, Frankrijk en uiteindelijk Groot-Brittannië bij het conflict betrokken. Deze enkele daad van politiek geweld leidde uiteindelijk tot de Eerste Wereldoorlog, wat resulteerde in meer dan 17 miljoen doden."
        }
      },
      {
        question: {
          en: "On June 28, 1919, which treaty was signed in the Palace of Versailles, officially ending World War I?",
          es: "El 28 de junio de 1919, ¿qué tratado se firmó en el Palacio de Versalles, poniendo fin oficialmente a la Primera Guerra Mundial?",
          de: "Welcher Vertrag wurde am 28. Juni 1919 im Schloss von Versailles unterzeichnet und beendete offiziell den Ersten Weltkrieg?",
          nl: "Welk verdrag werd op 28 juni 1919 ondertekend in het Paleis van Versailles, waarmee de Eerste Wereldoorlog officieel eindigde?"
        },
        options: [
          {
            en: "The Treaty of Paris",
            es: "El Tratado de París",
            de: "Der Vertrag von Paris",
            nl: "Het Verdrag van Parijs"
          },
          {
            en: "The Treaty of Versailles",
            es: "El Tratado de Versalles",
            de: "Der Vertrag von Versailles",
            nl: "Het Verdrag van Versailles"
          },
          {
            en: "The Treaty of Ghent",
            es: "El Tratado de Gante",
            de: "Der Vertrag von Gent",
            nl: "Het Verdrag van Gent"
          },
          {
            en: "The Treaty of Trianon",
            es: "El Tratado de Trianon",
            de: "Der Vertrag von Trianon",
            nl: "Het Verdrag van Trianon"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Treaty of Versailles was signed on June 28, 1919, exactly five years after the assassination of Archduke Franz Ferdinand. The treaty imposed harsh terms on Germany, including territorial losses, military restrictions, and massive reparations payments. These punitive conditions, particularly the 'war guilt' clause, created economic hardship and resentment in Germany. Many historians argue that the harsh terms of Versailles contributed to the rise of extremism in Germany and ultimately helped set the stage for World War II.",
          es: "El Tratado de Versalles se firmó el 28 de junio de 1919, exactamente cinco años después del asesinato del Archiduque Francisco Fernando. El tratado impuso términos severos a Alemania, incluidas pérdidas territoriales, restricciones militares y pagos masivos de reparaciones. Estas condiciones punitivas, particularmente la cláusula de 'culpabilidad de guerra', crearon dificultades económicas y resentimiento en Alemania. Muchos historiadores argumentan que los términos severos de Versalles contribuyeron al surgimiento del extremismo en Alemania y finalmente ayudaron a preparar el escenario para la Segunda Guerra Mundial.",
          de: "Der Vertrag von Versailles wurde am 28. Juni 1919 unterzeichnet, genau fünf Jahre nach der Ermordung von Erzherzog Franz Ferdinand. Der Vertrag legte Deutschland harte Bedingungen auf, einschließlich Gebietsverlusten, militärischen Beschränkungen und massiven Reparationszahlungen. Diese strafenden Bedingungen, insbesondere die 'Kriegsschuldklausel', schufen wirtschaftliche Not und Verbitterung in Deutschland. Viele Historiker argumentieren, dass die harten Bedingungen von Versailles zum Aufstieg des Extremismus in Deutschland beitrugen und letztendlich die Bühne für den Zweiten Weltkrieg bereiteten.",
          nl: "Het Verdrag van Versailles werd op 28 juni 1919 ondertekend, precies vijf jaar na de moord op aartshertog Franz Ferdinand. Het verdrag legde zware voorwaarden op aan Duitsland, waaronder territoriale verliezen, militaire beperkingen en massale herstelbetalingen. Deze straffende voorwaarden, met name de 'oorlogsschuldclausule', creëerden economische ontberingen en wrok in Duitsland. Veel historici beweren dat de harde voorwaarden van Versailles bijdroegen aan de opkomst van extremisme in Duitsland en uiteindelijk hielpen het podium voor te bereiden voor de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "On June 28, 1969, what historic event occurred at the Stonewall Inn in New York City's Greenwich Village?",
          es: "El 28 de junio de 1969, ¿qué evento histórico ocurrió en el Stonewall Inn en Greenwich Village de Nueva York?",
          de: "Welches historische Ereignis fand am 28. Juni 1969 im Stonewall Inn in New Yorks Greenwich Village statt?",
          nl: "Welke historische gebeurtenis vond plaats op 28 juni 1969 in de Stonewall Inn in Greenwich Village in New York City?"
        },
        options: [
          {
            en: "The first Pride parade",
            es: "El primer desfile del Orgullo",
            de: "Die erste Pride-Parade",
            nl: "De eerste Pride-parade"
          },
          {
            en: "The Stonewall riots began",
            es: "Comenzaron los disturbios de Stonewall",
            de: "Die Stonewall-Aufstände begannen",
            nl: "De Stonewall-rellen begonnen"
          },
          {
            en: "Same-sex marriage was legalized",
            es: "Se legalizó el matrimonio entre personas del mismo sexo",
            de: "Die gleichgeschlechtliche Ehe wurde legalisiert",
            nl: "Het homohuwelijk werd gelegaliseerd"
          },
          {
            en: "The first LGBTQ+ rights law was passed",
            es: "Se aprobó la primera ley de derechos LGBTQ+",
            de: "Das erste LGBTQ+-Rechtsgesetz wurde verabschiedet",
            nl: "De eerste LGBTQ+-rechtenwet werd aangenomen"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Stonewall riots began on June 28, 1969, when patrons of the Stonewall Inn, a gay bar in Greenwich Village, resisted a police raid. This spontaneous uprising against police harassment marked a turning point in the LGBTQ+ rights movement. The riots lasted several days and inspired the formation of activist groups and the first Pride marches. Today, June is celebrated as Pride Month in commemoration of Stonewall, and the inn is now a National Historic Landmark.",
          es: "Los disturbios de Stonewall comenzaron el 28 de junio de 1969, cuando los clientes del Stonewall Inn, un bar gay en Greenwich Village, resistieron una redada policial. Este levantamiento espontáneo contra el acoso policial marcó un punto de inflexión en el movimiento por los derechos LGBTQ+. Los disturbios duraron varios días e inspiraron la formación de grupos activistas y las primeras marchas del Orgullo. Hoy, junio se celebra como el Mes del Orgullo en conmemoración de Stonewall, y el bar es ahora un Monumento Histórico Nacional.",
          de: "Die Stonewall-Aufstände begannen am 28. Juni 1969, als Gäste des Stonewall Inn, einer Schwulenbar in Greenwich Village, sich gegen eine Polizeirazzia wehrten. Dieser spontane Aufstand gegen Polizeischikane markierte einen Wendepunkt in der LGBTQ+-Rechtsbewegung. Die Aufstände dauerten mehrere Tage und inspirierten die Gründung von Aktivistengruppen und die ersten Pride-Märsche. Heute wird der Juni als Pride Month zum Gedenken an Stonewall gefeiert, und das Inn ist jetzt ein National Historic Landmark.",
          nl: "De Stonewall-rellen begonnen op 28 juni 1969, toen bezoekers van de Stonewall Inn, een homobar in Greenwich Village, zich verzetten tegen een politie-inval. Deze spontane opstand tegen politie-intimidatie markeerde een keerpunt in de LGBTQ+-rechtenbeweging. De rellen duurden enkele dagen en inspireerden de vorming van activistische groepen en de eerste Pride-marsen. Vandaag wordt juni gevierd als Pride Month ter herdenking van Stonewall, en de bar is nu een National Historic Landmark."
        }
      },
      {
        question: {
          en: "On June 28, 2012, which European country officially requested a financial bailout during the European debt crisis?",
          es: "El 28 de junio de 2012, ¿qué país europeo solicitó oficialmente un rescate financiero durante la crisis de deuda europea?",
          de: "Welches europäische Land beantragte am 28. Juni 2012 offiziell ein Finanzrettungspaket während der europäischen Schuldenkrise?",
          nl: "Welk Europees land vroeg op 28 juni 2012 officieel om een financiële reddingsoperatie tijdens de Europese schuldencrisis?"
        },
        options: [
          {
            en: "Greece",
            es: "Grecia",
            de: "Griechenland",
            nl: "Griekenland"
          },
          {
            en: "Spain",
            es: "España",
            de: "Spanien",
            nl: "Spanje"
          },
          {
            en: "Portugal",
            es: "Portugal",
            de: "Portugal",
            nl: "Portugal"
          },
          {
            en: "Ireland",
            es: "Irlanda",
            de: "Irland",
            nl: "Ierland"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Spain formally requested a bailout of up to 100 billion euros on June 28, 2012, to rescue its struggling banking sector during the European debt crisis. The Spanish banking system had been severely weakened by the collapse of the country's real estate bubble and mounting bad loans. This bailout was part of the broader European financial crisis that affected several eurozone countries. The rescue package helped stabilize Spain's banking system and prevent a broader economic collapse.",
          es: "España solicitó formalmente un rescate de hasta 100 mil millones de euros el 28 de junio de 2012 para rescatar su sector bancario en dificultades durante la crisis de deuda europea. El sistema bancario español había sido severamente debilitado por el colapso de la burbuja inmobiliaria del país y el aumento de préstamos morosos. Este rescate fue parte de la crisis financiera europea más amplia que afectó a varios países de la eurozona. El paquete de rescate ayudó a estabilizar el sistema bancario de España y prevenir un colapso económico más amplio.",
          de: "Spanien beantragte am 28. Juni 2012 formell eine Rettungsaktion von bis zu 100 Milliarden Euro, um seinen angeschlagenen Bankensektor während der europäischen Schuldenkrise zu retten. Das spanische Bankensystem war durch den Zusammenbruch der Immobilienblase des Landes und zunehmende Problemkredite stark geschwächt worden. Diese Rettungsaktion war Teil der breiteren europäischen Finanzkrise, die mehrere Eurozone-Länder betraf. Das Rettungspaket half, Spaniens Bankensystem zu stabilisieren und einen breiteren wirtschaftlichen Zusammenbruch zu verhindern.",
          nl: "Spanje vroeg op 28 juni 2012 formeel om een reddingsoperatie van maximaal 100 miljard euro om zijn worstelende banksector te redden tijdens de Europese schuldencrisis. Het Spaanse banksysteem was ernstig verzwakt door de ineenstorting van de vastgoedzeepbel van het land en toenemende slechte leningen. Deze reddingsoperatie maakte deel uit van de bredere Europese financiële crisis die verschillende eurozonelanden trof. Het reddingspakket help het Spaanse banksysteem te stabiliseren en een bredere economische ineenstorting te voorkomen."
        }
      },
      {
        question: {
          en: "On June 28, 1778, which famous Revolutionary War battle in New Jersey ended inconclusively in intense summer heat?",
          es: "El 28 de junio de 1778, ¿qué famosa batalla de la Guerra de Independencia en Nueva Jersey terminó sin resultado concluyente en un calor intenso de verano?",
          de: "Welche berühmte Schlacht des Unabhängigkeitskrieges in New Jersey endete am 28. Juni 1778 in intensiver Sommerhitze ergebnislos?",
          nl: "Welke beroemde slag uit de Onafhankelijkheidsoorlog in New Jersey eindigde op 28 juni 1778 zonder beslissend resultaat in intense zomerhitte?"
        },
        options: [
          {
            en: "The Battle of Bunker Hill",
            es: "La Batalla de Bunker Hill",
            de: "Die Schlacht von Bunker Hill",
            nl: "De Slag bij Bunker Hill"
          },
          {
            en: "The Battle of Saratoga",
            es: "La Batalla de Saratoga",
            de: "Die Schlacht von Saratoga",
            nl: "De Slag bij Saratoga"
          },
          {
            en: "The Battle of Monmouth",
            es: "La Batalla de Monmouth",
            de: "Die Schlacht von Monmouth",
            nl: "De Slag bij Monmouth"
          },
          {
            en: "The Battle of Yorktown",
            es: "La Batalla de Yorktown",
            de: "Die Schlacht von Yorktown",
            nl: "De Slag bij Yorktown"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Monmouth was fought on June 28, 1778, in New Jersey during one of the hottest days of the year, with temperatures exceeding 100°F (38°C). George Washington's Continental Army engaged British forces under General Henry Clinton. The battle is notable for the legendary actions of Molly Pitcher, who allegedly carried water to soldiers and took over a cannon when her husband collapsed from heat. Although tactically inconclusive, the battle demonstrated that the Continental Army could stand toe-to-toe with British regulars after their winter training at Valley Forge.",
          es: "La Batalla de Monmouth se libró el 28 de junio de 1778 en Nueva Jersey durante uno de los días más calurosos del año, con temperaturas superiores a 100°F (38°C). El Ejército Continental de George Washington se enfrentó a las fuerzas británicas bajo el mando del General Henry Clinton. La batalla es notable por las acciones legendarias de Molly Pitcher, quien supuestamente llevó agua a los soldados y se hizo cargo de un cañón cuando su esposo colapsó por el calor. Aunque tácticamente inconclusa, la batalla demostró que el Ejército Continental podía enfrentarse de igual a igual con los regulares británicos después de su entrenamiento invernal en Valley Forge.",
          de: "Die Schlacht von Monmouth wurde am 28. Juni 1778 in New Jersey an einem der heißesten Tage des Jahres mit Temperaturen über 100°F (38°C) ausgetragen. George Washingtons Kontinentalarmee kämpfte gegen britische Truppen unter General Henry Clinton. Die Schlacht ist bemerkenswert für die legendären Taten von Molly Pitcher, die angeblich Wasser zu Soldaten trug und eine Kanone übernahm, als ihr Mann wegen der Hitze zusammenbrach. Obwohl taktisch ergebnislos, zeigte die Schlacht, dass die Kontinentalarmee nach ihrem Wintertraining in Valley Forge den britischen Regulären gewachsen war.",
          nl: "De Slag bij Monmouth werd uitgevochten op 28 juni 1778 in New Jersey tijdens een van de heetste dagen van het jaar, met temperaturen boven 100°F (38°C). George Washingtons Continentale Leger nam het op tegen Britse troepen onder generaal Henry Clinton. De slag is opmerkelijk vanwege de legendarische acties van Molly Pitcher, die naar verluidt water naar soldaten droeg en een kanon overnam toen haar man bezweek aan de hitte. Hoewel tactisch niet beslissend, toonde de slag aan dat het Continentale Leger na hun wintertraining in Valley Forge gelijkwaardig was aan Britse reguliere troepen."
        }
      }
    ],

    // Day 29 - June 29th: Historical Events
    day29: [
      {
        question: {
          en: "On June 29, 2007, which revolutionary device was released by Apple, changing the smartphone industry forever?",
          es: "El 29 de junio de 2007, ¿qué dispositivo revolucionario fue lanzado por Apple, cambiando la industria de los teléfonos inteligentes para siempre?",
          de: "Welches revolutionäre Gerät wurde am 29. Juni 2007 von Apple veröffentlicht und veränderte die Smartphone-Industrie für immer?",
          nl: "Welk revolutionair apparaat werd op 29 juni 2007 door Apple uitgebracht, waarmee de smartphone-industrie voorgoed veranderde?"
        },
        options: [
          {
            en: "The iPod",
            es: "El iPod",
            de: "Der iPod",
            nl: "De iPod"
          },
          {
            en: "The iPhone",
            es: "El iPhone",
            de: "Das iPhone",
            nl: "De iPhone"
          },
          {
            en: "The iPad",
            es: "El iPad",
            de: "Das iPad",
            nl: "De iPad"
          },
          {
            en: "The Apple Watch",
            es: "El Apple Watch",
            de: "Die Apple Watch",
            nl: "De Apple Watch"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first iPhone was released on June 29, 2007, revolutionizing mobile technology by combining a phone, iPod, and internet communicator into one device with a multi-touch interface. Steve Jobs had unveiled the iPhone six months earlier, calling it a device that was 'five years ahead of any other phone.' The original iPhone lacked features now considered standard, like 3G connectivity and the App Store, but it fundamentally changed how people interact with technology and sparked the modern smartphone era.",
          es: "El primer iPhone se lanzó el 29 de junio de 2007, revolucionando la tecnología móvil al combinar un teléfono, iPod y comunicador de internet en un dispositivo con interfaz multitáctil. Steve Jobs había presentado el iPhone seis meses antes, llamándolo un dispositivo que estaba '5 años adelantado a cualquier otro teléfono'. El iPhone original carecía de características ahora consideradas estándar, como conectividad 3G y la App Store, pero cambió fundamentalmente la forma en que las personas interactúan con la tecnología y desencadenó la era moderna de los teléfonos inteligentes.",
          de: "Das erste iPhone wurde am 29. Juni 2007 veröffentlicht und revolutionierte die Mobiltechnologie, indem es Telefon, iPod und Internet-Kommunikator in einem Gerät mit Multi-Touch-Oberfläche kombinierte. Steve Jobs hatte das iPhone sechs Monate zuvor vorgestellt und es als ein Gerät bezeichnet, das 'fünf Jahre vor jedem anderen Telefon' sei. Das ursprüngliche iPhone fehlten Funktionen, die heute als Standard gelten, wie 3G-Konnektivität und der App Store, aber es veränderte grundlegend, wie Menschen mit Technologie interagieren, und löste die moderne Smartphone-Ära aus.",
          nl: "De eerste iPhone werd op 29 juni 2007 uitgebracht en revolutioneerde mobiele technologie door een telefoon, iPod en internetcommunicator te combineren in één apparaat met een multi-touch interface. Steve Jobs had de iPhone zes maanden eerder onthuld en noemde het een apparaat dat '5 jaar vooruit was op elke andere telefoon'. De originele iPhone miste functies die nu als standaard worden beschouwd, zoals 3G-connectiviteit en de App Store, maar veranderde fundamenteel hoe mensen omgaan met technologie en startte het moderne smartphone-tijdperk."
        }
      },
      {
        question: {
          en: "On June 29, 1613, which famous London theater burned down during a performance of Shakespeare's Henry VIII?",
          es: "El 29 de junio de 1613, ¿qué famoso teatro de Londres se incendió durante una representación de Enrique VIII de Shakespeare?",
          de: "Welches berühmte Londoner Theater brannte am 29. Juni 1613 während einer Aufführung von Shakespeares Heinrich VIII. nieder?",
          nl: "Welk beroemd theater in Londen brandde op 29 juni 1613 af tijdens een opvoering van Shakespeares Henry VIII?"
        },
        options: [
          {
            en: "The Royal Opera House",
            es: "La Royal Opera House",
            de: "Das Royal Opera House",
            nl: "Het Royal Opera House"
          },
          {
            en: "The Globe Theatre",
            es: "El Globe Theatre",
            de: "Das Globe Theatre",
            nl: "Het Globe Theatre"
          },
          {
            en: "The West End Theatre",
            es: "El West End Theatre",
            de: "Das West End Theatre",
            nl: "Het West End Theatre"
          },
          {
            en: "The Old Vic",
            es: "El Old Vic",
            de: "Das Old Vic",
            nl: "Het Old Vic"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Globe Theatre burned down on June 29, 1613, when a theatrical cannon misfired during a performance of Shakespeare's 'Henry VIII,' igniting the thatched roof. The entire theater was destroyed within two hours, though remarkably, no one was killed—one man's breeches reportedly caught fire but were extinguished with a bottle of ale. The Globe was rebuilt in 1614 with a tiled roof. A modern reconstruction, Shakespeare's Globe, opened near the original site in 1997.",
          es: "El Globe Theatre se incendió el 29 de junio de 1613, cuando un cañón teatral falló durante una representación de 'Enrique VIII' de Shakespeare, encendiendo el techo de paja. Todo el teatro fue destruido en dos horas, aunque notablemente, nadie murió—los pantalones de un hombre supuestamente se incendiaron pero fueron apagados con una botella de cerveza. El Globe fue reconstruido en 1614 con techo de tejas. Una reconstrucción moderna, Shakespeare's Globe, se abrió cerca del sitio original en 1997.",
          de: "Das Globe Theatre brannte am 29. Juni 1613 nieder, als eine Theaterkanone während einer Aufführung von Shakespeares 'Heinrich VIII.' fehlzündete und das Strohdach entzündete. Das gesamte Theater wurde innerhalb von zwei Stunden zerstört, obwohl bemerkenswerterweise niemand getötet wurde—die Hosen eines Mannes sollen Feuer gefangen haben, wurden aber mit einer Flasche Bier gelöscht. Das Globe wurde 1614 mit einem Ziegeldach wieder aufgebaut. Eine moderne Rekonstruktion, Shakespeare's Globe, wurde 1997 in der Nähe des ursprünglichen Standorts eröffnet.",
          nl: "Het Globe Theatre brandde af op 29 juni 1613, toen een theatrale kanon verkeerd afging tijdens een opvoering van Shakespeares 'Henry VIII', waardoor het rieten dak vlam vatte. Het hele theater werd binnen twee uur verwoest, hoewel opmerkelijk genoeg niemand omkwam—de broek van een man zou vlam hebben gevat maar werd geblust met een fles bier. Het Globe werd herbouwd in 1614 met een pannendak. Een moderne reconstructie, Shakespeare's Globe, opende in 1997 nabij de oorspronkelijke locatie."
        }
      },
      {
        question: {
          en: "On June 29, 1995, which U.S. space shuttle docked with the Russian space station Mir for the first time?",
          es: "El 29 de junio de 1995, ¿qué transbordador espacial estadounidense se acopló con la estación espacial rusa Mir por primera vez?",
          de: "Welches US-Space-Shuttle dockte am 29. Juni 1995 erstmals an die russische Raumstation Mir an?",
          nl: "Welke Amerikaanse spaceshuttle koppelde op 29 juni 1995 voor het eerst aan het Russische ruimtestation Mir?"
        },
        options: [
          {
            en: "Discovery",
            es: "Discovery",
            de: "Discovery",
            nl: "Discovery"
          },
          {
            en: "Atlantis",
            es: "Atlantis",
            de: "Atlantis",
            nl: "Atlantis"
          },
          {
            en: "Challenger",
            es: "Challenger",
            de: "Challenger",
            nl: "Challenger"
          },
          {
            en: "Columbia",
            es: "Columbia",
            de: "Columbia",
            nl: "Columbia"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Space Shuttle Atlantis docked with the Russian space station Mir on June 29, 1995, marking the first time an American spacecraft joined with a Russian space station. This historic mission symbolized the end of the Space Race rivalry and the beginning of cooperative space exploration between former Cold War adversaries. The docking created the largest spacecraft ever in orbit at that time. This cooperation laid the groundwork for the International Space Station partnership that continues today.",
          es: "El transbordador espacial Atlantis se acopló con la estación espacial rusa Mir el 29 de junio de 1995, marcando la primera vez que una nave espacial estadounidense se unió con una estación espacial rusa. Esta misión histórica simbolizó el fin de la rivalidad de la Carrera Espacial y el comienzo de la exploración espacial cooperativa entre antiguos adversarios de la Guerra Fría. El acoplamiento creó la nave espacial más grande jamás en órbita en ese momento. Esta cooperación sentó las bases para la asociación de la Estación Espacial Internacional que continúa hoy.",
          de: "Das Space Shuttle Atlantis dockte am 29. Juni 1995 an die russische Raumstation Mir an und markierte das erste Mal, dass ein amerikanisches Raumschiff mit einer russischen Raumstation verbunden wurde. Diese historische Mission symbolisierte das Ende der Rivalität im Weltraumrennen und den Beginn der kooperativen Weltraumforschung zwischen ehemaligen Gegnern des Kalten Krieges. Das Andocken schuf das zu diesem Zeitpunkt größte Raumschiff, das jemals in der Umlaufbahn war. Diese Zusammenarbeit legte den Grundstein für die Partnerschaft der Internationalen Raumstation, die bis heute fortbesteht.",
          nl: "Space Shuttle Atlantis koppelde op 29 juni 1995 aan het Russische ruimtestation Mir, wat de eerste keer markeerde dat een Amerikaans ruimtevaartuig verbonden was met een Russisch ruimtestation. Deze historische missie symboliseerde het einde van de Space Race-rivaliteit en het begin van coöperatieve ruimteverkenning tussen voormalige tegenstanders uit de Koude Oorlog. De koppeling creëerde het op dat moment grootste ruimtevaartuig ooit in een baan om de aarde. Deze samenwerking legde de basis voor het partnerschap van het Internationaal Ruimtestation dat vandaag voortduurt."
        }
      },
      {
        question: {
          en: "On June 29, 1956, which iconic American actress married playwright Arthur Miller?",
          es: "El 29 de junio de 1956, ¿qué icónica actriz estadounidense se casó con el dramaturgo Arthur Miller?",
          de: "Welche ikonische amerikanische Schauspielerin heiratete am 29. Juni 1956 den Dramatiker Arthur Miller?",
          nl: "Welke iconische Amerikaanse actrice trouwde op 29 juni 1956 met toneelschrijver Arthur Miller?"
        },
        options: [
          {
            en: "Elizabeth Taylor",
            es: "Elizabeth Taylor",
            de: "Elizabeth Taylor",
            nl: "Elizabeth Taylor"
          },
          {
            en: "Audrey Hepburn",
            es: "Audrey Hepburn",
            de: "Audrey Hepburn",
            nl: "Audrey Hepburn"
          },
          {
            en: "Marilyn Monroe",
            es: "Marilyn Monroe",
            de: "Marilyn Monroe",
            nl: "Marilyn Monroe"
          },
          {
            en: "Grace Kelly",
            es: "Grace Kelly",
            de: "Grace Kelly",
            nl: "Grace Kelly"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Marilyn Monroe married Arthur Miller on June 29, 1956, in a surprising union that brought together Hollywood glamour and serious literature. Monroe converted to Judaism for the marriage, and the couple represented an unlikely pairing of the era's most famous sex symbol with one of America's greatest playwrights. Miller wrote 'The Misfits' as a gift for Monroe, giving her a dramatic role to showcase her acting abilities. Their marriage lasted until 1961, ending shortly before Monroe's tragic death in 1962.",
          es: "Marilyn Monroe se casó con Arthur Miller el 29 de junio de 1956, en una unión sorprendente que reunió el glamour de Hollywood y la literatura seria. Monroe se convirtió al judaísmo para el matrimonio, y la pareja representó una pareja improbable del símbolo sexual más famoso de la época con uno de los mejores dramaturgos de Estados Unidos. Miller escribió 'Los inadaptados' como regalo para Monroe, dándole un papel dramático para mostrar sus habilidades actorales. Su matrimonio duró hasta 1961, terminando poco antes de la trágica muerte de Monroe en 1962.",
          de: "Marilyn Monroe heiratete Arthur Miller am 29. Juni 1956 in einer überraschenden Verbindung, die Hollywood-Glamour und ernsthafte Literatur zusammenbrachte. Monroe konvertierte für die Ehe zum Judentum, und das Paar repräsentierte eine unwahrscheinliche Paarung des berühmtesten Sexsymbols der Ära mit einem der größten amerikanischen Dramatiker. Miller schrieb 'Misfits' als Geschenk für Monroe und gab ihr eine dramatische Rolle, um ihre Schauspielkunst zu zeigen. Ihre Ehe dauerte bis 1961 und endete kurz vor Monroes tragischem Tod 1962.",
          nl: "Marilyn Monroe trouwde op 29 juni 1956 met Arthur Miller in een verrassende unie die Hollywood-glamour en serieuze literatuur samenbracht. Monroe bekeerde zich tot het jodendom voor het huwelijk, en het paar vertegenwoordigde een onwaarschijnlijke koppeling van het beroemdste sekssymbool van het tijdperk met een van Amerika's grootste toneelschrijvers. Miller schreef 'The Misfits' als cadeau voor Monroe, waarbij hij haar een dramatische rol gaf om haar acteertalent te tonen. Hun huwelijk duurde tot 1961 en eindigde kort voor Monroes tragische dood in 1962."
        }
      },
      {
        question: {
          en: "On June 29, 1966, which country became the first in the Western Hemisphere to have a female head of government?",
          es: "El 29 de junio de 1966, ¿qué país se convirtió en el primero del Hemisferio Occidental en tener una mujer como jefa de gobierno?",
          de: "Welches Land hatte am 29. Juni 1966 als erstes in der westlichen Hemisphäre eine weibliche Regierungschefin?",
          nl: "Welk land werd op 29 juni 1966 het eerste land in het Westelijk Halfrond met een vrouwelijk regeringsleider?"
        },
        options: [
          {
            en: "United States",
            es: "Estados Unidos",
            de: "Vereinigte Staaten",
            nl: "Verenigde Staten"
          },
          {
            en: "Canada",
            es: "Canadá",
            de: "Kanada",
            nl: "Canada"
          },
          {
            en: "Argentina",
            es: "Argentina",
            de: "Argentinien",
            nl: "Argentinië"
          },
          {
            en: "Argentina",
            es: "Argentina",
            de: "Argentinien",
            nl: "Argentinië"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "Argentina became the first country in the Western Hemisphere to have a female head of government when María Estela Martínez de Perón became Vice President on June 29, 1966, under her husband Juan Perón. She later became President in 1974 upon her husband's death, making her the first female president in the world. Though her presidency was troubled and ended with a military coup in 1976, her ascension marked a historic milestone for women in Latin American politics.",
          es: "Argentina se convirtió en el primer país del Hemisferio Occidental en tener una mujer como jefa de gobierno cuando María Estela Martínez de Perón se convirtió en Vicepresidenta el 29 de junio de 1966, bajo su esposo Juan Perón. Más tarde se convirtió en Presidenta en 1974 tras la muerte de su esposo, convirtiéndola en la primera presidenta mujer del mundo. Aunque su presidencia fue problemática y terminó con un golpe militar en 1976, su ascenso marcó un hito histórico para las mujeres en la política latinoamericana.",
          de: "Argentinien wurde am 29. Juni 1966 das erste Land der westlichen Hemisphäre mit einer weiblichen Regierungschefin, als María Estela Martínez de Perón unter ihrem Ehemann Juan Perón Vizepräsidentin wurde. Sie wurde später 1974 nach dem Tod ihres Mannes Präsidentin und war damit die erste weibliche Präsidentin der Welt. Obwohl ihre Präsidentschaft problematisch war und 1976 mit einem Militärputsch endete, markierte ihr Aufstieg einen historischen Meilenstein für Frauen in der lateinamerikanischen Politik.",
          nl: "Argentinië werd op 29 juni 1966 het eerste land in het Westelijk Halfrond met een vrouwelijk regeringsleider toen María Estela Martínez de Perón vicepresident werd onder haar echtgenoot Juan Perón. Ze werd later in 1974 president na de dood van haar man, waarmee ze 's werelds eerste vrouwelijke president werd. Hoewel haar presidentschap problematisch was en eindigde met een militaire coup in 1976, markeerde haar opkomst een historische mijlpaal voor vrouwen in de Latijns-Amerikaanse politiek."
        }
      }
    ],

    // Day 30 - June 30th: Historical Events
    day30: [
      {
        question: {
          en: "On June 30, 1936, which epic novel by Margaret Mitchell was first published, later becoming one of the best-selling books of all time?",
          es: "El 30 de junio de 1936, ¿qué novela épica de Margaret Mitchell se publicó por primera vez, convirtiéndose más tarde en uno de los libros más vendidos de todos los tiempos?",
          de: "Welcher epische Roman von Margaret Mitchell wurde am 30. Juni 1936 erstmals veröffentlicht und wurde später zu einem der meistverkauften Bücher aller Zeiten?",
          nl: "Welke epische roman van Margaret Mitchell werd op 30 juni 1936 voor het eerst gepubliceerd en werd later een van de best verkochte boeken aller tijden?"
        },
        options: [
          {
            en: "To Kill a Mockingbird",
            es: "Matar un ruiseñor",
            de: "Wer die Nachtigall stört",
            nl: "Spaar de spotvogel"
          },
          {
            en: "Gone with the Wind",
            es: "Lo que el viento se llevó",
            de: "Vom Winde verweht",
            nl: "Gejaagd door de wind"
          },
          {
            en: "The Great Gatsby",
            es: "El gran Gatsby",
            de: "Der große Gatsby",
            nl: "De grote Gatsby"
          },
          {
            en: "East of Eden",
            es: "Al este del Edén",
            de: "Jenseits von Eden",
            nl: "Ten oosten van Eden"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Gone with the Wind was published on June 30, 1936, and became an immediate sensation, winning the Pulitzer Prize in 1937. Margaret Mitchell's only novel tells the story of Scarlett O'Hara during the American Civil War and Reconstruction era. The book sold over one million copies within six months and has sold over 30 million copies worldwide. The 1939 film adaptation won 10 Academy Awards and remains one of the highest-grossing films of all time when adjusted for inflation.",
          es: "Lo que el viento se llevó se publicó el 30 de junio de 1936 y se convirtió en una sensación inmediata, ganando el Premio Pulitzer en 1937. La única novela de Margaret Mitchell cuenta la historia de Scarlett O'Hara durante la Guerra Civil Americana y la era de la Reconstrucción. El libro vendió más de un millón de copias en seis meses y ha vendido más de 30 millones de copias en todo el mundo. La adaptación cinematográfica de 1939 ganó 10 premios de la Academia y sigue siendo una de las películas más taquilleras de todos los tiempos cuando se ajusta por inflación.",
          de: "Vom Winde verweht wurde am 30. Juni 1936 veröffentlicht und wurde sofort zu einer Sensation, die 1937 den Pulitzer-Preis gewann. Margaret Mitchells einziger Roman erzählt die Geschichte von Scarlett O'Hara während des amerikanischen Bürgerkriegs und der Reconstruction-Ära. Das Buch verkaufte sich innerhalb von sechs Monaten über eine Million Mal und hat weltweit über 30 Millionen Exemplare verkauft. Die Verfilmung von 1939 gewann 10 Academy Awards und bleibt einer der umsatzstärksten Filme aller Zeiten, wenn man die Inflation berücksichtigt.",
          nl: "Gejaagd door de wind werd op 30 juni 1936 gepubliceerd en werd onmiddellijk een sensatie, waarbij het in 1937 de Pulitzer Prize won. Margaret Mitchells enige roman vertelt het verhaal van Scarlett O'Hara tijdens de Amerikaanse Burgeroorlog en het Reconstructietijdperk. Het boek verkocht binnen zes maanden meer dan een miljoen exemplaren en heeft wereldwijd meer dan 30 miljoen exemplaren verkocht. De filmbewerking uit 1939 won 10 Academy Awards en blijft een van de best verdienende films aller tijden wanneer gecorrigeerd voor inflatie."
        }
      },
      {
        question: {
          en: "On June 30, 1908, what mysterious explosion occurred in a remote area of Siberia, flattening an estimated 80 million trees?",
          es: "El 30 de junio de 1908, ¿qué misteriosa explosión ocurrió en una zona remota de Siberia, derribando aproximadamente 80 millones de árboles?",
          de: "Welche mysteriöse Explosion ereignete sich am 30. Juni 1908 in einer abgelegenen Region Sibiriens und legte schätzungsweise 80 Millionen Bäume nieder?",
          nl: "Welke mysterieuze explosie vond plaats op 30 juni 1908 in een afgelegen gebied van Siberië, waarbij naar schatting 80 miljoen bomen werden geveld?"
        },
        options: [
          {
            en: "The Chernobyl disaster",
            es: "El desastre de Chernóbil",
            de: "Die Katastrophe von Tschernobyl",
            nl: "De ramp in Tsjernobyl"
          },
          {
            en: "The Tunguska event",
            es: "El evento de Tunguska",
            de: "Das Tunguska-Ereignis",
            nl: "De Tunguska-gebeurtenis"
          },
          {
            en: "A volcanic eruption",
            es: "Una erupción volcánica",
            de: "Ein Vulkanausbruch",
            nl: "Een vulkaanuitbarsting"
          },
          {
            en: "A nuclear test",
            es: "Una prueba nuclear",
            de: "Ein Atomtest",
            nl: "Een kernproef"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Tunguska event occurred on June 30, 1908, when a massive explosion flattened approximately 80 million trees over 2,150 square kilometers in Siberia. The blast was likely caused by the air burst of a meteoroid or comet fragment 5-10 kilometers above the Earth's surface, releasing energy equivalent to 10-15 megatons of TNT. Remarkably, no impact crater was ever found, and there were no confirmed human casualties due to the remote location. The Tunguska event remains the largest impact event in recorded history.",
          es: "El evento de Tunguska ocurrió el 30 de junio de 1908, cuando una explosión masiva derribó aproximadamente 80 millones de árboles en 2,150 kilómetros cuadrados en Siberia. La explosión fue probablemente causada por la explosión aérea de un meteoroide o fragmento de cometa 5-10 kilómetros sobre la superficie de la Tierra, liberando energía equivalente a 10-15 megatones de TNT. Notablemente, nunca se encontró un cráter de impacto y no hubo víctimas humanas confirmadas debido a la ubicación remota. El evento de Tunguska sigue siendo el mayor evento de impacto en la historia registrada.",
          de: "Das Tunguska-Ereignis ereignete sich am 30. Juni 1908, als eine massive Explosion etwa 80 Millionen Bäume auf 2.150 Quadratkilometern in Sibirien niederlegte. Die Explosion wurde wahrscheinlich durch den Luftstoß eines Meteoroiden oder Kometenfragments 5-10 Kilometer über der Erdoberfläche verursacht, das Energie freisetzt, die 10-15 Megatonnen TNT entspricht. Bemerkenswerterweise wurde nie ein Einschlagskrater gefunden, und es gab aufgrund der abgelegenen Lage keine bestätigten menschlichen Opfer. Das Tunguska-Ereignis bleibt das größte Einschlagsereignis in der aufgezeichneten Geschichte.",
          nl: "De Tunguska-gebeurtenis vond plaats op 30 juni 1908, toen een massale explosie ongeveer 80 miljoen bomen over 2.150 vierkante kilometer in Siberië velde. De explosie werd waarschijnlijk veroorzaakt door de luchtontploffing van een meteoroïde of komeetfragment 5-10 kilometer boven het aardoppervlak, waarbij energie vrijkwam equivalent aan 10-15 megaton TNT. Opmerkelijk genoeg werd er nooit een inslagkrater gevonden en waren er geen bevestigde menselijke slachtoffers vanwege de afgelegen locatie. De Tunguska-gebeurtenis blijft de grootste inslaggebeurtenis in de geregistreerde geschiedenis."
        }
      },
      {
        question: {
          en: "On June 30, 1997, which famous British children's author published the first book in a series that would become a global phenomenon?",
          es: "El 30 de junio de 1997, ¿qué famoso autor infantil británico publicó el primer libro de una serie que se convertiría en un fenómeno global?",
          de: "Welcher berühmte britische Kinderbuchautor veröffentlichte am 30. Juni 1997 das erste Buch einer Serie, die zu einem globalen Phänomen werden sollte?",
          nl: "Welke beroemde Britse kinderboekenschrijver publiceerde op 30 juni 1997 het eerste boek in een serie die een wereldwijd fenomeen zou worden?"
        },
        options: [
          {
            en: "Roald Dahl",
            es: "Roald Dahl",
            de: "Roald Dahl",
            nl: "Roald Dahl"
          },
          {
            en: "C.S. Lewis",
            es: "C.S. Lewis",
            de: "C.S. Lewis",
            nl: "C.S. Lewis"
          },
          {
            en: "J.K. Rowling",
            es: "J.K. Rowling",
            de: "J.K. Rowling",
            nl: "J.K. Rowling"
          },
          {
            en: "Philip Pullman",
            es: "Philip Pullman",
            de: "Philip Pullman",
            nl: "Philip Pullman"
          }
        ],
        correctIndex: 2,
        explanation: {
          en: "J.K. Rowling's 'Harry Potter and the Philosopher's Stone' was published in the UK on June 30, 1997 (though some sources cite June 26), with an initial print run of just 500 copies. The book launched a seven-book series that became the best-selling book series in history, with over 500 million copies sold worldwide. The franchise expanded into eight blockbuster films, theme parks, and merchandise, creating a multi-billion dollar empire and inspiring a generation of readers worldwide.",
          es: "Harry Potter y la Piedra Filosofal de J.K. Rowling se publicó en el Reino Unido el 30 de junio de 1997 (aunque algunas fuentes citan el 26 de junio), con una tirada inicial de solo 500 copias. El libro lanzó una serie de siete libros que se convirtió en la serie de libros más vendida de la historia, con más de 500 millones de copias vendidas en todo el mundo. La franquicia se expandió a ocho películas taquilleras, parques temáticos y mercancía, creando un imperio multimillonario e inspirando a una generación de lectores en todo el mundo.",
          de: "J.K. Rowlings 'Harry Potter und der Stein der Weisen' wurde am 30. Juni 1997 in Großbritannien veröffentlicht (obwohl einige Quellen den 26. Juni nennen), mit einer Erstauflage von nur 500 Exemplaren. Das Buch startete eine siebenteilige Serie, die zur meistverkauften Buchreihe der Geschichte wurde, mit über 500 Millionen verkauften Exemplaren weltweit. Das Franchise expandierte zu acht Blockbuster-Filmen, Themenparks und Merchandise und schuf ein Multi-Milliarden-Dollar-Imperium, das eine Generation von Lesern weltweit inspirierte.",
          nl: "J.K. Rowlings 'Harry Potter en de Steen der Wijzen' werd op 30 juni 1997 in het VK gepubliceerd (hoewel sommige bronnen 26 juni vermelden), met een eerste oplage van slechts 500 exemplaren. Het boek lanceerde een serie van zeven boeken die de best verkochte boekenreeks in de geschiedenis werd, met meer dan 500 miljoen verkochte exemplaren wereldwijd. Het franchise breidde uit naar acht blockbusterfilms, pretparken en merchandise, waarmee een imperium van meerdere miljarden dollars werd gecreëerd en een generatie lezers wereldwijd werd geïnspireerd."
        }
      },
      {
        question: {
          en: "On June 30, 1960, which African nation gained independence from Belgium, later becoming the Democratic Republic of the Congo?",
          es: "El 30 de junio de 1960, ¿qué nación africana obtuvo la independencia de Bélgica, convirtiéndose más tarde en la República Democrática del Congo?",
          de: "Welche afrikanische Nation erlangte am 30. Juni 1960 die Unabhängigkeit von Belgien und wurde später zur Demokratischen Republik Kongo?",
          nl: "Welke Afrikaanse natie werd op 30 juni 1960 onafhankelijk van België en werd later de Democratische Republiek Congo?"
        },
        options: [
          {
            en: "Rwanda",
            es: "Ruanda",
            de: "Ruanda",
            nl: "Rwanda"
          },
          {
            en: "Belgian Congo",
            es: "Congo Belga",
            de: "Belgisch-Kongo",
            nl: "Belgisch-Congo"
          },
          {
            en: "Burundi",
            es: "Burundi",
            de: "Burundi",
            nl: "Burundi"
          },
          {
            en: "Uganda",
            es: "Uganda",
            de: "Uganda",
            nl: "Oeganda"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Belgian Congo gained independence on June 30, 1960, becoming the Republic of the Congo (later renamed the Democratic Republic of the Congo). The independence celebration was attended by King Baudouin of Belgium, but the transition was marred by political instability. Within days, the country descended into crisis with army mutinies and the secession of Katanga province. The country's first Prime Minister, Patrice Lumumba, was assassinated in 1961, beginning decades of turmoil under leaders like Mobutu Sese Seko.",
          es: "El Congo Belga obtuvo la independencia el 30 de junio de 1960, convirtiéndose en la República del Congo (más tarde renombrada República Democrática del Congo). La celebración de la independencia contó con la asistencia del rey Balduino de Bélgica, pero la transición se vio empañada por inestabilidad política. En días, el país descendió a la crisis con motines del ejército y la secesión de la provincia de Katanga. El primer Primer Ministro del país, Patrice Lumumba, fue asesinado en 1961, comenzando décadas de agitación bajo líderes como Mobutu Sese Seko.",
          de: "Belgisch-Kongo erlangte am 30. Juni 1960 die Unabhängigkeit und wurde zur Republik Kongo (später umbenannt in Demokratische Republik Kongo). An der Unabhängigkeitsfeier nahm König Baudouin von Belgien teil, aber der Übergang war von politischer Instabilität überschattet. Innerhalb von Tagen stürzte das Land in eine Krise mit Armeemeutereien und der Abspaltung der Provinz Katanga. Der erste Premierminister des Landes, Patrice Lumumba, wurde 1961 ermordet, was Jahrzehnte von Unruhen unter Führern wie Mobutu Sese Seko einleitete.",
          nl: "Belgisch-Congo werd op 30 juni 1960 onafhankelijk en werd de Republiek Congo (later hernoemd tot Democratische Republiek Congo). De onafhankelijkheidsviering werd bijgewoond door koning Boudewijn van België, maar de overgang werd geplaagd door politieke instabiliteit. Binnen enkele dagen raakte het land in een crisis met legermuitingen en de afscheiding van de provincie Katanga. De eerste premier van het land, Patrice Lumumba, werd in 1961 vermoord, wat het begin markeerde van decennia van onrust onder leiders als Mobutu Sese Seko."
        }
      },
      {
        question: {
          en: "On June 30, 2013, which popular short-form video app was launched, later becoming a cultural phenomenon before shutting down in 2017?",
          es: "El 30 de junio de 2013, ¿qué popular aplicación de videos cortos se lanzó, convirtiéndose más tarde en un fenómeno cultural antes de cerrar en 2017?",
          de: "Welche beliebte Kurzform-Video-App wurde am 30. Juni 2013 gestartet, wurde später zu einem kulturellen Phänomen, bevor sie 2017 geschlossen wurde?",
          nl: "Welke populaire app voor korte video's werd gelanceerd op 30 juni 2013, werd later een cultureel fenomeen voordat deze in 2017 werd gesloten?"
        },
        options: [
          {
            en: "TikTok",
            es: "TikTok",
            de: "TikTok",
            nl: "TikTok"
          },
          {
            en: "Vine",
            es: "Vine",
            de: "Vine",
            nl: "Vine"
          },
          {
            en: "Instagram",
            es: "Instagram",
            de: "Instagram",
            nl: "Instagram"
          },
          {
            en: "Snapchat",
            es: "Snapchat",
            de: "Snapchat",
            nl: "Snapchat"
          }
        ],
        correctIndex: 1,
        explanation: {
          en: "Vine was launched on June 30, 2013, allowing users to create and share 6-second looping video clips. The app quickly gained popularity, reaching 200 million active users by 2015 and launching the careers of numerous internet celebrities and content creators. Vine's creative constraints inspired innovative comedy, music, and artistic content. Despite its cultural impact, Twitter (which owned Vine) shut down the app in January 2017. Vine's influence lives on through compilation videos and inspired successors like TikTok.",
          es: "Vine se lanzó el 30 de junio de 2013, permitiendo a los usuarios crear y compartir clips de video en bucle de 6 segundos. La aplicación ganó popularidad rápidamente, alcanzando 200 millones de usuarios activos en 2015 y lanzando las carreras de numerosas celebridades de internet y creadores de contenido. Las limitaciones creativas de Vine inspiraron contenido innovador de comedia, música y arte. A pesar de su impacto cultural, Twitter (que era dueño de Vine) cerró la aplicación en enero de 2017. La influencia de Vine persiste a través de videos de compilación e inspiró sucesores como TikTok.",
          de: "Vine wurde am 30. Juni 2013 gestartet und ermöglichte es Benutzern, 6-Sekunden-Loop-Videoclips zu erstellen und zu teilen. Die App gewann schnell an Popularität, erreichte 2015 200 Millionen aktive Benutzer und startete die Karrieren zahlreicher Internet-Prominenter und Content-Ersteller. Vines kreative Einschränkungen inspirierten innovative Comedy-, Musik- und Kunstinhalte. Trotz seiner kulturellen Wirkung stellte Twitter (dem Vine gehörte) die App im Januar 2017 ein. Vines Einfluss lebt durch Compilation-Videos weiter und inspirierte Nachfolger wie TikTok.",
          nl: "Vine werd gelanceerd op 30 juni 2013, waardoor gebruikers 6 seconden durende loopende videoclips konden maken en delen. De app werd snel populair, bereikte in 2015 200 miljoen actieve gebruikers en lanceerde de carrières van talrijke internetberoemdheden en contentmakers. Vine's creatieve beperkingen inspireerden innovatieve comedy-, muziek- en artistieke inhoud. Ondanks de culturele impact sloot Twitter (dat Vine bezat) de app in januari 2017. Vine's invloed blijft voortleven door compilatievideo's en inspireerde opvolgers zoals TikTok."
        }
      }
    ]
  };

  // Export June challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('june', juneChallenges);
  }

})();