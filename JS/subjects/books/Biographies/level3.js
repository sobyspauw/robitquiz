// Quiz Template - Level 3: Boeken - Biografieën
(function() {
  const level3 = {
    name: {
      en: "Biographies",
      es: "Biografías",
      de: "Biografien",
      nl: "Biografieën"
    },
    questions: [
      {
        question: {
          en: "How many years did Nelson Mandela spend in prison before his release?",
          es: "¿Cuántos años pasó Nelson Mandela en prisión antes de su liberación?",
          de: "Wie viele Jahre verbrachte Nelson Mandela im Gefängnis, bevor er freigelassen wurde?",
          nl: "Hoeveel jaar bracht Nelson Mandela in de gevangenis door voor zijn vrijlating?"
        },
        options: [
          { en: "18 yrs", es: "18 años", de: "18 Jahre", nl: "18 jaar" },
          { en: "27 yrs", es: "27 años", de: "27 Jahre", nl: "27 jaar" },
          { en: "35 yrs", es: "35 años", de: "35 Jahre", nl: "35 jaar" },
          { en: "42 yrs", es: "42 años", de: "42 Jahre", nl: "42 jaar" }
        ],
        correct: 1,
        explanation: {
          en: "Nelson Mandela was imprisoned for 27 years (1962-1990), spending 18 of those years on Robben Island. He was released on February 11, 1990.",
          es: "Nelson Mandela estuvo encarcelado durante 27 años (1962-1990), pasando 18 de esos años en la Isla Robben. Fue liberado el 11 de febrero de 1990.",
          de: "Nelson Mandela war 27 Jahre lang inhaftiert (1962-1990), davon 18 Jahre auf Robben Island. Er wurde am 11. Februar 1990 freigelassen.",
          nl: "Nelson Mandela zat 27 jaar gevangen (1962-1990), waarvan 18 jaar op Robbeneiland. Hij werd vrijgelaten op 11 februari 1990."
        }
      },
      {
        question: {
          en: "In which year was Anne Frank's diary first published?",
          es: "¿En qué año se publicó por primera vez el diario de Anne Frank?",
          de: "In welchem Jahr wurde Anne Franks Tagebuch erstmals veröffentlicht?",
          nl: "In welk jaar werd Anne Franks dagboek voor het eerst gepubliceerd?"
        },
        options: [
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1947", es: "1947", de: "1947", nl: "1947" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" },
          { en: "1952", es: "1952", de: "1952", nl: "1952" }
        ],
        correct: 1,
        explanation: {
          en: "Anne Frank's diary was first published in the Netherlands in 1947 under the title 'Het Achterhuis' (The Secret Annex), two years after the end of World War II.",
          es: "El diario de Anne Frank se publicó por primera vez en los Países Bajos en 1947 bajo el título 'Het Achterhuis' (El anexo secreto), dos años después del final de la Segunda Guerra Mundial.",
          de: "Anne Franks Tagebuch wurde erstmals 1947 in den Niederlanden unter dem Titel 'Het Achterhuis' (Das Hinterhaus) veröffentlicht, zwei Jahre nach dem Ende des Zweiten Weltkriegs.",
          nl: "Anne Franks dagboek werd voor het eerst gepubliceerd in Nederland in 1947 onder de titel 'Het Achterhuis', twee jaar na het einde van de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "What disease did Stephen Hawking suffer from?",
          es: "¿De qué enfermedad sufría Stephen Hawking?",
          de: "An welcher Krankheit litt Stephen Hawking?",
          nl: "Aan welke ziekte leed Stephen Hawking?"
        },
        options: [
          { en: "Multiple sclerosis", es: "Esclerosis múltiple", de: "Multiple Sklerose", nl: "Multiple sclerose" },
          { en: "Amyotrophic lateral sclerosis (ALS)", es: "Esclerosis lateral amiotrófica (ELA)", de: "Amyotrophe Lateralsklerose (ALS)", nl: "Amyotrofische laterale sclerose (ALS)" },
          { en: "Parkinson's disease", es: "Enfermedad de Parkinson", de: "Parkinson-Krankheit", nl: "Ziekte van Parkinson" },
          { en: "Muscular dystrophy", es: "Distrofia muscular", de: "Muskeldystrophie", nl: "Spierdystrofie" }
        ],
        correct: 1,
        explanation: {
          en: "Stephen Hawking was diagnosed with amyotrophic lateral sclerosis (ALS), also known as Lou Gehrig's disease, at age 21. Despite being given only a few years to live, he survived for over 50 years with the condition.",
          es: "A Stephen Hawking le diagnosticaron esclerosis lateral amiotrófica (ELA), también conocida como enfermedad de Lou Gehrig, a los 21 años. A pesar de que le dieron solo unos años de vida, sobrevivió más de 50 años con la enfermedad.",
          de: "Bei Stephen Hawking wurde im Alter von 21 Jahren amyotrophe Lateralsklerose (ALS), auch als Lou-Gehrig-Krankheit bekannt, diagnostiziert. Obwohl ihm nur noch wenige Lebensjahre gegeben wurden, überlebte er über 50 Jahre mit der Krankheit.",
          nl: "Stephen Hawking kreeg op 21-jarige leeftijd de diagnose amyotrofische laterale sclerose (ALS), ook wel bekend als de ziekte van Lou Gehrig. Ondanks dat hij slechts enkele jaren te leven had, overleefde hij meer dan 50 jaar met de aandoening."
        }
      },
      {
        question: {
          en: "What pseudonym did Benjamin Franklin use when writing 'Poor Richard's Almanack'?",
          es: "¿Qué seudónimo usó Benjamin Franklin al escribir 'El almanaque del pobre Richard'?",
          de: "Welches Pseudonym verwendete Benjamin Franklin beim Schreiben von 'Der Almanach des armen Richard'?",
          nl: "Welke pseudoniem gebruikte Benjamin Franklin bij het schrijven van 'Poor Richard's Almanak'?"
        },
        options: [
          { en: "Poor Richard", es: "Pobre Richard", de: "Armer Richard", nl: "Arme Richard" },
          { en: "Richard Saunders", es: "Richard Saunders", de: "Richard Saunders", nl: "Richard Saunders" },
          { en: "Silence Dogood", es: "Silence Dogood", de: "Silence Dogood", nl: "Silence Dogood" },
          { en: "Anthony Afterwit", es: "Anthony Afterwit", de: "Anthony Afterwit", nl: "Anthony Afterwit" }
        ],
        correct: 1,
        explanation: {
          en: "Benjamin Franklin published 'Poor Richard's Almanack' under the pseudonym Richard Saunders from 1732 to 1758. The almanac contained weather forecasts, household hints, and proverbs.",
          es: "Benjamin Franklin publicó 'El almanaque del pobre Richard' bajo el seudónimo de Richard Saunders de 1732 a 1758. El almanaque contenía pronósticos del tiempo, consejos domésticos y proverbios.",
          de: "Benjamin Franklin veröffentlichte 'Der Almanach des armen Richard' unter dem Pseudonym Richard Saunders von 1732 bis 1758. Der Almanach enthielt Wettervorhersagen, Haushaltshilfen und Sprichwörter.",
          nl: "Benjamin Franklin publiceerde 'Poor Richard's Almanak' onder het pseudoniem Richard Saunders van 1732 tot 1758. De almanak bevatte weersvoorspellingen, huishoudelijke tips en spreekwoorden."
        }
      },
      {
        question: {
          en: "What disability did Helen Keller overcome to become an author and activist?",
          es: "¿Qué discapacidad superó Helen Keller para convertirse en autora y activista?",
          de: "Welche Behinderung überwand Helen Keller, um Autorin und Aktivistin zu werden?",
          nl: "Welke handicap overwon Helen Keller om auteur en activist te worden?"
        },
        options: [
          { en: "Deafness only", es: "Solo sordera", de: "Nur Taubheit", nl: "Alleen doofheid" },
          { en: "Blindness only", es: "Solo ceguera", de: "Nur Blindheit", nl: "Alleen blindheid" },
          { en: "Deafness and blindness", es: "Sordera y ceguera", de: "Taubheit und Blindheit", nl: "Doofheid en blindheid" },
          { en: "Paralysis", es: "Parálisis", de: "Lähmung", nl: "Verlamming" }
        ],
        correct: 2,
        explanation: {
          en: "Helen Keller became deaf and blind at 19 months old due to an illness (possibly scarlet fever or meningitis). With the help of her teacher Anne Sullivan, she learned to communicate and became the first deaf-blind person to earn a Bachelor of Arts degree.",
          es: "Helen Keller quedó sorda y ciega a los 19 meses debido a una enfermedad (posiblemente escarlatina o meningitis). Con la ayuda de su maestra Anne Sullivan, aprendió a comunicarse y se convirtió en la primera persona sordociega en obtener un título de Licenciatura en Artes.",
          de: "Helen Keller wurde im Alter von 19 Monaten aufgrund einer Krankheit (möglicherweise Scharlach oder Meningitis) taub und blind. Mit Hilfe ihrer Lehrerin Anne Sullivan lernte sie zu kommunizieren und wurde die erste taubblinde Person, die einen Bachelor of Arts erwarb.",
          nl: "Helen Keller werd doof en blind op 19 maanden oud door een ziekte (mogelijk roodvonk of meningitis). Met hulp van haar lerares Anne Sullivan leerde ze communiceren en werd de eerste doofblinde persoon die een Bachelor of Arts-graad behaalde."
        }
      },
      {
        question: {
          en: "In which concentration camp did Anne Frank die?",
          es: "¿En qué campo de concentración murió Anne Frank?",
          de: "In welchem Konzentrationslager starb Anne Frank?",
          nl: "In welk concentratiekamp stierf Anne Frank?"
        },
        options: [
          { en: "Auschwitz", es: "Auschwitz", de: "Auschwitz", nl: "Auschwitz" },
          { en: "Bergen-Belsen", es: "Bergen-Belsen", de: "Bergen-Belsen", nl: "Bergen-Belsen" },
          { en: "Dachau", es: "Dachau", de: "Dachau", nl: "Dachau" },
          { en: "Treblinka", es: "Treblinka", de: "Treblinka", nl: "Treblinka" }
        ],
        correct: 1,
        explanation: {
          en: "Anne Frank died in Bergen-Belsen concentration camp in February or March 1945, just weeks before the camp was liberated. She and her sister Margot both died of typhus.",
          es: "Anne Frank murió en el campo de concentración de Bergen-Belsen en febrero o marzo de 1945, solo semanas antes de que el campo fuera liberado. Ella y su hermana Margot murieron de tifus.",
          de: "Anne Frank starb im Februar oder März 1945 im Konzentrationslager Bergen-Belsen, nur Wochen bevor das Lager befreit wurde. Sie und ihre Schwester Margot starben beide an Typhus.",
          nl: "Anne Frank stierf in concentratiekamp Bergen-Belsen in februari of maart 1945, slechts weken voordat het kamp werd bevrijd. Zij en haar zus Margot stierven beiden aan tyfus."
        }
      },
      {
        question: {
          en: "What was Malala Yousafzai's age when she was shot by the Taliban?",
          es: "¿Qué edad tenía Malala Yousafzai cuando fue tiroteada por los talibanes?",
          de: "Wie alt war Malala Yousafzai, als sie von den Taliban erschossen wurde?",
          nl: "Hoe oud was Malala Yousafzai toen ze werd neergeschoten door de Taliban?"
        },
        options: [
          { en: "12 years old", es: "12 años", de: "12 Jahre alt", nl: "12 jaar oud" },
          { en: "15 years old", es: "15 años", de: "15 Jahre alt", nl: "15 jaar oud" },
          { en: "17 years old", es: "17 años", de: "17 Jahre alt", nl: "17 jaar oud" },
          { en: "19 years old", es: "19 años", de: "19 Jahre alt", nl: "19 jaar oud" }
        ],
        correct: 1,
        explanation: {
          en: "Malala Yousafzai was 15 years old when she was shot by a Taliban gunman on October 9, 2012, while on her way home from school in Pakistan. She survived and continues her advocacy for girls' education.",
          es: "Malala Yousafzai tenía 15 años cuando fue tiroteada por un talibán el 9 de octubre de 2012, mientras regresaba de la escuela en Pakistán. Sobrevivió y continúa su defensa por la educación de las niñas.",
          de: "Malala Yousafzai war 15 Jahre alt, als sie am 9. Oktober 2012 von einem Taliban-Schützen erschossen wurde, als sie von der Schule nach Hause fuhr in Pakistan. Sie überlebte und setzt sich weiterhin für Mädchenbildung ein.",
          nl: "Malala Yousafzai was 15 jaar oud toen ze op 9 oktober 2012 werd neergeschoten door een Taliban-schutter, terwijl ze op weg naar huis was van school in Pakistan. Ze overleefde en zet haar pleidooi voor meisjesonderwijs voort."
        }
      },
      {
        question: {
          en: "What year did Maya Angelou publish 'I Know Why the Caged Bird Sings'?",
          es: "¿En qué año publicó Maya Angelou 'Yo sé por qué canta el pájaro enjaulado'?",
          de: "In welchem Jahr veröffentlichte Maya Angelou 'Ich weiß, warum der gefangene Vogel singt'?",
          nl: "In welk jaar publiceerde Maya Angelou 'I Know Why the Caged Bird Sings'?"
        },
        options: [
          { en: "1965", es: "1965", de: "1965", nl: "1965" },
          { en: "1969", es: "1969", de: "1969", nl: "1969" },
          { en: "1973", es: "1973", de: "1973", nl: "1973" },
          { en: "1977", es: "1977", de: "1977", nl: "1977" }
        ],
        correct: 1,
        explanation: {
          en: "'I Know Why the Caged Bird Sings' was published in 1969 and became an immediate bestseller. It was the first of Maya Angelou's seven autobiographies.",
          es: "'Yo sé por qué canta el pájaro enjaulado' fue publicado en 1969 y se convirtió en un bestseller inmediato. Fue la primera de las siete autobiografías de Maya Angelou.",
          de: "'Ich weiß, warum der gefangene Vogel singt' wurde 1969 veröffentlicht und wurde sofort ein Bestseller. Es war die erste von Maya Angelous sieben Autobiografien.",
          nl: "'I Know Why the Caged Bird Sings' werd gepubliceerd in 1969 en werd meteen een bestseller. Het was de eerste van Maya Angelou's zeven autobiografieën."
        }
      },
      {
        question: {
          en: "Who was Frederick Douglass's first master who taught him the alphabet?",
          es: "¿Quién fue el primer amo de Frederick Douglass que le enseñó el alfabeto?",
          de: "Wer war Frederick Douglass' erster Herr, der ihm das Alphabet beibrachte?",
          nl: "Wie was Frederick Douglass' eerste meester die hem het alfabet leerde?"
        },
        options: [
          { en: "Thomas Auld", es: "Thomas Auld", de: "Thomas Auld", nl: "Thomas Auld" },
          { en: "Sophia Auld", es: "Sophia Auld", de: "Sophia Auld", nl: "Sophia Auld" },
          { en: "Edward Covey", es: "Edward Covey", de: "Edward Covey", nl: "Edward Covey" },
          { en: "William Freeland", es: "William Freeland", de: "William Freeland", nl: "William Freeland" }
        ],
        correct: 1,
        explanation: {
          en: "Sophia Auld, the wife of Hugh Auld, began teaching Frederick Douglass the alphabet when he was about 12 years old. However, her husband forbade it, believing education would make slaves unfit for slavery.",
          es: "Sophia Auld, la esposa de Hugh Auld, comenzó a enseñarle el alfabeto a Frederick Douglass cuando tenía unos 12 años. Sin embargo, su esposo lo prohibió, creyendo que la educación haría a los esclavos inadecuados para la esclavitud.",
          de: "Sophia Auld, die Frau von Hugh Auld, begann Frederick Douglass das Alphabet beizubringen, als er etwa 12 Jahre alt war. Ihr Mann verbot es jedoch, da er glaubte, Bildung würde Sklaven für die Sklaverei ungeeignet machen.",
          nl: "Sophia Auld, de vrouw van Hugh Auld, begon Frederick Douglass het alfabet te leren toen hij ongeveer 12 jaar oud was. Haar man verbood het echter, in de overtuiging dat onderwijs slaven ongeschikt zou maken voor slavernij."
        }
      },
      {
        question: {
          en: "In what year did Gandhi lead the famous Salt March?",
          es: "¿En qué año lideró Gandhi la famosa Marcha de la Sal?",
          de: "In welchem Jahr führte Gandhi den berühmten Salzmarsch an?",
          nl: "In welk jaar leidde Gandhi de beroemde Zoutmars?"
        },
        options: [
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1930", es: "1930", de: "1930", nl: "1930" },
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1947", es: "1947", de: "1947", nl: "1947" }
        ],
        correct: 1,
        explanation: {
          en: "Gandhi led the Salt March (also known as the Salt Satyagraha) in 1930, a 240-mile march to the Arabian Sea to produce salt in defiance of British salt taxes. It became a pivotal moment in India's independence movement.",
          es: "Gandhi lideró la Marcha de la Sal (también conocida como Salt Satyagraha) en 1930, una marcha de 240 millas hasta el Mar Arábigo para producir sal desafiando los impuestos británicos sobre la sal. Se convirtió en un momento crucial en el movimiento de independencia de India.",
          de: "Gandhi führte 1930 den Salzmarsch (auch als Salt Satyagraha bekannt) an, einen 240 Meilen langen Marsch zum Arabischen Meer, um Salz in Missachtung der britischen Salzsteuern zu produzieren. Es wurde ein entscheidender Moment in Indiens Unabhängigkeitsbewegung.",
          nl: "Gandhi leidde in 1930 de Zoutmars (ook bekend als de Salt Satyagraha), een 240 mijl lange mars naar de Arabische Zee om zout te produceren in verzet tegen Britse zoutbelastingen. Het werd een cruciaal moment in India's onafhankelijkheidsbeweging."
        }
      },
      {
        question: {
          en: "Where was Michelle Obama born?",
          es: "¿Dónde nació Michelle Obama?",
          de: "Wo wurde Michelle Obama geboren?",
          nl: "Waar werd Michelle Obama geboren?"
        },
        options: [
          { en: "Detroit, Michigan", es: "Detroit, Michigan", de: "Detroit, Michigan", nl: "Detroit, Michigan" },
          { en: "Chicago, Illinois", es: "Chicago, Illinois", de: "Chicago, Illinois", nl: "Chicago, Illinois" },
          { en: "New York, New York", es: "Nueva York, Nueva York", de: "New York, New York", nl: "New York, New York" },
          { en: "Atlanta, Georgia", es: "Atlanta, Georgia", de: "Atlanta, Georgia", nl: "Atlanta, Georgia" }
        ],
        correct: 1,
        explanation: {
          en: "Michelle Obama was born Michelle LaVaughn Robinson on January 17, 1964, in Chicago, Illinois. She grew up on the South Side of Chicago, which she discusses extensively in her memoir 'Becoming.'",
          es: "Michelle Obama nació como Michelle LaVaughn Robinson el 17 de enero de 1964 en Chicago, Illinois. Creció en el lado sur de Chicago, lo cual discute extensamente en sus memorias 'Mi historia.'",
          de: "Michelle Obama wurde als Michelle LaVaughn Robinson am 17. Januar 1964 in Chicago, Illinois, geboren. Sie wuchs in der South Side von Chicago auf, was sie ausführlich in ihren Memoiren 'Becoming' diskutiert.",
          nl: "Michelle Obama werd geboren als Michelle LaVaughn Robinson op 17 januari 1964 in Chicago, Illinois. Ze groeide op aan de South Side van Chicago, wat ze uitgebreid bespreekt in haar memoires 'Becoming.'"
        }
      },
      {
        question: {
          en: "What was the name of the ship on which Malcolm X made his pilgrimage to Mecca?",
          es: "¿Cuál era el nombre del barco en el que Malcolm X hizo su peregrinación a La Meca?",
          de: "Wie hieß das Schiff, mit dem Malcolm X seine Pilgerfahrt nach Mekka unternahm?",
          nl: "Wat was de naam van het schip waarmee Malcolm X zijn bedevaart naar Mekka maakte?"
        },
        options: [
          { en: "SS United States", es: "SS Estados Unidos", de: "SS Vereinigte Staaten", nl: "SS Verenigde Staten" },
          { en: "He traveled by airplane, not ship", es: "Viajó en avión, no en barco", de: "Er reiste mit dem Flugzeug, nicht mit dem Schiff", nl: "Hij reisde per vliegtuig, niet per schip" },
          { en: "Queen Elizabeth", es: "Queen Elizabeth", de: "Queen Elizabeth", nl: "Queen Elizabeth" },
          { en: "MS Pilgrimage", es: "MS Peregrinación", de: "MS Pilgerfahrt", nl: "MS Bedevaart" }
        ],
        correct: 1,
        explanation: {
          en: "Malcolm X traveled to Mecca by airplane in 1964, not by ship. His pilgrimage (Hajj) was a transformative experience that changed his views on race and led him to adopt a more inclusive approach to civil rights.",
          es: "Malcolm X viajó a La Meca en avión en 1964, no en barco. Su peregrinación (Hajj) fue una experiencia transformadora que cambió sus puntos de vista sobre la raza y lo llevó a adoptar un enfoque más inclusivo de los derechos civiles.",
          de: "Malcolm X reiste 1964 mit dem Flugzeug nach Mekka, nicht mit dem Schiff. Seine Pilgerfahrt (Hadsch) war eine transformative Erfahrung, die seine Ansichten über Rasse veränderte und ihn dazu führte, einen inklusiveren Ansatz für Bürgerrechte zu vertreten.",
          nl: "Malcolm X reisde in 1964 per vliegtuig naar Mekka, niet per schip. Zijn bedevaart (Hadj) was een transformerende ervaring die zijn visie op ras veranderde en hem ertoe bracht een meer inclusieve benadering van burgerrechten te omarmen."
        }
      },
      {
        question: {
          en: "What university did Barack Obama attend for his undergraduate degree?",
          es: "¿A qué universidad asistió Barack Obama para su título universitario?",
          de: "Welche Universität besuchte Barack Obama für seinen Bachelor-Abschluss?",
          nl: "Welke universiteit bezocht Barack Obama voor zijn bachelorgraad?"
        },
        options: [
          { en: "Harvard University", es: "Universidad de Harvard", de: "Harvard-Universität", nl: "Harvard University" },
          { en: "Columbia University", es: "Universidad de Columbia", de: "Columbia-Universität", nl: "Columbia University" },
          { en: "Yale University", es: "Universidad de Yale", de: "Yale-Universität", nl: "Yale University" },
          { en: "Princeton University", es: "Universidad de Princeton", de: "Princeton-Universität", nl: "Princeton University" }
        ],
        correct: 1,
        explanation: {
          en: "Barack Obama graduated from Columbia University in 1983 with a degree in Political Science. He later attended Harvard Law School, where he became the first African American president of the Harvard Law Review.",
          es: "Barack Obama se graduó de la Universidad de Columbia en 1983 con un título en Ciencias Políticas. Más tarde asistió a la Facultad de Derecho de Harvard, donde se convirtió en el primer presidente afroamericano de la Harvard Law Review.",
          de: "Barack Obama schloss 1983 sein Studium der Politikwissenschaft an der Columbia University ab. Später besuchte er die Harvard Law School, wo er der erste afroamerikanische Präsident der Harvard Law Review wurde.",
          nl: "Barack Obama studeerde in 1983 af aan Columbia University met een graad in Politieke Wetenschappen. Later ging hij naar Harvard Law School, waar hij de eerste Afro-Amerikaanse president van de Harvard Law Review werd."
        }
      },
      {
        question: {
          en: "How old was Tara Westover when she first entered a classroom?",
          es: "¿Qué edad tenía Tara Westover cuando entró por primera vez a un aula?",
          de: "Wie alt war Tara Westover, als sie zum ersten Mal ein Klassenzimmer betrat?",
          nl: "Hoe oud was Tara Westover toen ze voor het eerst een klaslokaal betrad?"
        },
        options: [
          { en: "10 years old", es: "10 años", de: "10 Jahre alt", nl: "10 jaar oud" },
          { en: "14 years old", es: "14 años", de: "14 Jahre alt", nl: "14 jaar oud" },
          { en: "17 years old", es: "17 años", de: "17 Jahre alt", nl: "17 jaar oud" },
          { en: "21 years old", es: "21 años", de: "21 Jahre alt", nl: "21 jaar oud" }
        ],
        correct: 2,
        explanation: {
          en: "Tara Westover first entered a classroom at age 17 when she enrolled at Brigham Young University. Despite having no formal education, she taught herself enough to pass the ACT and gain admission.",
          es: "Tara Westover entró por primera vez a un aula a los 17 años cuando se inscribió en la Universidad Brigham Young. A pesar de no tener educación formal, se enseñó a sí misma lo suficiente para aprobar el ACT y obtener admisión.",
          de: "Tara Westover betrat im Alter von 17 Jahren zum ersten Mal ein Klassenzimmer, als sie sich an der Brigham Young University einschrieb. Trotz fehlender formaler Bildung brachte sie sich genug selbst bei, um den ACT zu bestehen und zugelassen zu werden.",
          nl: "Tara Westover betrad op 17-jarige leeftijd voor het eerst een klaslokaal toen ze zich inschreef aan Brigham Young University. Ondanks geen formele opleiding, leerde ze zichzelf genoeg om de ACT te halen en toegelaten te worden."
        }
      },
      {
        question: {
          en: "In what city did Frank McCourt grow up, as described in 'Angela's Ashes'?",
          es: "¿En qué ciudad creció Frank McCourt, como se describe en 'Las cenizas de Ángela'?",
          de: "In welcher Stadt wuchs Frank McCourt auf, wie in 'Die Asche meiner Mutter' beschrieben?",
          nl: "In welke stad groeide Frank McCourt op, zoals beschreven in 'Angela's Ashes'?"
        },
        options: [
          { en: "Dublin", es: "Dublín", de: "Dublin", nl: "Dublin" },
          { en: "Cork", es: "Cork", de: "Cork", nl: "Cork" },
          { en: "Limerick", es: "Limerick", de: "Limerick", nl: "Limerick" },
          { en: "Galway", es: "Galway", de: "Galway", nl: "Galway" }
        ],
        correct: 2,
        explanation: {
          en: "Frank McCourt grew up in Limerick, Ireland, after his family returned from Brooklyn when he was four years old. The memoir vividly describes the poverty and hardship of his childhood in Limerick during the 1930s and 1940s.",
          es: "Frank McCourt creció en Limerick, Irlanda, después de que su familia regresara de Brooklyn cuando tenía cuatro años. Las memorias describen vívidamente la pobreza y las dificultades de su infancia en Limerick durante las décadas de 1930 y 1940.",
          de: "Frank McCourt wuchs in Limerick, Irland, auf, nachdem seine Familie aus Brooklyn zurückkehrte, als er vier Jahre alt war. Die Memoiren beschreiben anschaulich die Armut und Not seiner Kindheit in Limerick während der 1930er und 1940er Jahre.",
          nl: "Frank McCourt groeide op in Limerick, Ierland, nadat zijn familie terugkeerde uit Brooklyn toen hij vier jaar oud was. De memoires beschrijven levendig de armoede en ontberingen van zijn jeugd in Limerick tijdens de jaren 1930 en 1940."
        }
      },
      {
        question: {
          en: "What was the name of the woman who helped hide Anne Frank and her family?",
          es: "¿Cuál era el nombre de la mujer que ayudó a esconder a Anne Frank y su familia?",
          de: "Wie hieß die Frau, die Anne Frank und ihrer Familie half, sich zu verstecken?",
          nl: "Wat was de naam van de vrouw die Anne Frank en haar familie hielp verbergen?"
        },
        options: [
          { en: "Miep Gies", es: "Miep Gies", de: "Miep Gies", nl: "Miep Gies" },
          { en: "Corrie ten Boom", es: "Corrie ten Boom", de: "Corrie ten Boom", nl: "Corrie ten Boom" },
          { en: "Hannah Goslar", es: "Hannah Goslar", de: "Hannah Goslar", nl: "Hannah Goslar" },
          { en: "Edith Stein", es: "Edith Stein", de: "Edith Stein", nl: "Edith Stein" }
        ],
        correct: 0,
        explanation: {
          en: "Miep Gies was one of the helpers who hid the Frank family and four others in the Secret Annex. After the arrest, she found and preserved Anne's diary, later giving it to Otto Frank, Anne's father and sole survivor.",
          es: "Miep Gies fue una de las ayudantes que escondió a la familia Frank y a otros cuatro en el Anexo Secreto. Después del arresto, encontró y preservó el diario de Anne, entregándoselo más tarde a Otto Frank, el padre de Anne y único sobreviviente.",
          de: "Miep Gies war eine der Helferinnen, die die Familie Frank und vier andere im Hinterhaus versteckte. Nach der Verhaftung fand und bewahrte sie Annes Tagebuch auf und gab es später Otto Frank, Annes Vater und einzigem Überlebenden.",
          nl: "Miep Gies was een van de helpers die de familie Frank en vier anderen verborg in het Achterhuis. Na de arrestatie vond en bewaarde ze Anne's dagboek, dat ze later aan Otto Frank gaf, Anne's vader en enige overlevende."
        }
      },
      {
        question: {
          en: "What prize did Malala Yousafzai win in 2014, becoming the youngest recipient?",
          es: "¿Qué premio ganó Malala Yousafzai en 2014, convirtiéndose en la receptora más joven?",
          de: "Welchen Preis gewann Malala Yousafzai 2014 und wurde damit die jüngste Preisträgerin?",
          nl: "Welke prijs won Malala Yousafzai in 2014, waarmee ze de jongste ontvanger werd?"
        },
        options: [
          { en: "Pulitzer Prize", es: "Premio Pulitzer", de: "Pulitzer-Preis", nl: "Pulitzer Prize" },
          { en: "Nobel Peace Prize", es: "Premio Nobel de la Paz", de: "Friedensnobelpreis", nl: "Nobelprijs voor de Vrede" },
          { en: "Congressional Gold Medal", es: "Medalla de Oro del Congreso", de: "Goldmedaille des Kongresses", nl: "Gouden Medaille van het Congres" },
          { en: "Presidential Medal of Freedom", es: "Medalla Presidencial de la Libertad", de: "Präsidentielle Freiheitsmedaille", nl: "Presidentiële Medaille van Vrijheid" }
        ],
        correct: 1,
        explanation: {
          en: "Malala Yousafzai was awarded the Nobel Peace Prize in 2014 at age 17, sharing it with Kailash Satyarthi. She became the youngest Nobel Prize laureate in any category.",
          es: "Malala Yousafzai recibió el Premio Nobel de la Paz en 2014 a los 17 años, compartiéndolo con Kailash Satyarthi. Se convirtió en la laureada del Premio Nobel más joven en cualquier categoría.",
          de: "Malala Yousafzai wurde 2014 im Alter von 17 Jahren mit dem Friedensnobelpreis ausgezeichnet, den sie mit Kailash Satyarthi teilte. Sie wurde die jüngste Nobelpreisträgerin in jeder Kategorie.",
          nl: "Malala Yousafzai ontving in 2014 op 17-jarige leeftijd de Nobelprijs voor de Vrede, die ze deelde met Kailash Satyarthi. Ze werd de jongste Nobelprijswinnaar in welke categorie dan ook."
        }
      },
      {
        question: {
          en: "What was Winston Churchill's role during World War I before World War II?",
          es: "¿Cuál fue el papel de Winston Churchill durante la Primera Guerra Mundial antes de la Segunda Guerra Mundial?",
          de: "Was war Winston Churchills Rolle während des Ersten Weltkriegs vor dem Zweiten Weltkrieg?",
          nl: "Wat was Winston Churchills rol tijdens de Eerste Wereldoorlog vóór de Tweede Wereldoorlog?"
        },
        options: [
          { en: "Prime Minister", es: "Primer Ministro", de: "Premierminister", nl: "Premier" },
          { en: "First Lord of the Admiralty", es: "Primer Lord del Almirantazgo", de: "Erster Lord der Admiralität", nl: "Eerste Lord van de Admiraliteit" },
          { en: "Secretary of War", es: "Secretario de Guerra", de: "Kriegsminister", nl: "Minister van Oorlog" },
          { en: "Foreign Secretary", es: "Ministro de Asuntos Exteriores", de: "Außenminister", nl: "Minister van Buitenlandse Zaken" }
        ],
        correct: 1,
        explanation: {
          en: "Churchill served as First Lord of the Admiralty during World War I, responsible for the Royal Navy. He resigned in 1915 after the disastrous Gallipoli Campaign and briefly served on the Western Front before returning to government.",
          es: "Churchill sirvió como Primer Lord del Almirantazgo durante la Primera Guerra Mundial, responsable de la Royal Navy. Renunció en 1915 después de la desastrosa Campaña de Gallipoli y sirvió brevemente en el Frente Occidental antes de regresar al gobierno.",
          de: "Churchill diente während des Ersten Weltkriegs als Erster Lord der Admiralität und war für die Royal Navy verantwortlich. Er trat 1915 nach der katastrophalen Gallipoli-Kampagne zurück und diente kurz an der Westfront, bevor er in die Regierung zurückkehrte.",
          nl: "Churchill diende tijdens de Eerste Wereldoorlog als Eerste Lord van de Admiraliteit, verantwoordelijk voor de Royal Navy. Hij trad in 1915 af na de rampzalige Gallipoli-campagne en diende kort aan het Westelijk Front voordat hij terugkeerde naar de regering."
        }
      },
      {
        question: {
          en: "What occupation did Jeannette Walls have before writing 'The Glass Castle'?",
          es: "¿Qué ocupación tenía Jeannette Walls antes de escribir 'El castillo de cristal'?",
          de: "Welchen Beruf hatte Jeannette Walls, bevor sie 'Schloss aus Glas' schrieb?",
          nl: "Welk beroep had Jeannette Walls voordat ze 'The Glass Castle' schreef?"
        },
        options: [
          { en: "Teacher", es: "Maestra", de: "Lehrerin", nl: "Lerares" },
          { en: "Journalist", es: "Periodista", de: "Journalistin", nl: "Journalist" },
          { en: "Social worker", es: "Trabajadora social", de: "Sozialarbeiterin", nl: "Maatschappelijk werker" },
          { en: "Lawyer", es: "Abogada", de: "Anwältin", nl: "Advocaat" }
        ],
        correct: 1,
        explanation: {
          en: "Jeannette Walls was a successful gossip columnist and journalist for MSNBC and other publications before writing her memoir. She kept her impoverished background secret from colleagues for many years.",
          es: "Jeannette Walls fue una exitosa columnista de chismes y periodista para MSNBC y otras publicaciones antes de escribir sus memorias. Mantuvo en secreto su origen empobrecido de sus colegas durante muchos años.",
          de: "Jeannette Walls war eine erfolgreiche Klatschkolumnistin und Journalistin für MSNBC und andere Publikationen, bevor sie ihre Memoiren schrieb. Sie hielt ihren verarmten Hintergrund viele Jahre lang vor Kollegen geheim.",
          nl: "Jeannette Walls was een succesvolle roddelcolumnist en journalist voor MSNBC en andere publicaties voordat ze haar memoires schreef. Ze hield haar verarmde achtergrond jarenlang geheim voor collega's."
        }
      },
      {
        question: {
          en: "What alias did Samuel Pepys use to write his diary in coded shorthand?",
          es: "¿Qué alias usó Samuel Pepys para escribir su diario en taquigrafía codificada?",
          de: "Welches Alias verwendete Samuel Pepys, um sein Tagebuch in verschlüsselter Kurzschrift zu schreiben?",
          nl: "Welke alias gebruikte Samuel Pepys om zijn dagboek in gecodeerde stenografie te schrijven?"
        },
        options: [
          { en: "He didn't use an alias", es: "No usó un alias", de: "Er verwendete kein Alias", nl: "Hij gebruikte geen alias" },
          { en: "Mr. Anonymous", es: "Sr. Anónimo", de: "Herr Anonym", nl: "Dhr. Anoniem" },
          { en: "The Observer", es: "El Observador", de: "Der Beobachter", nl: "De Waarnemer" },
          { en: "S.P.", es: "S.P.", de: "S.P.", nl: "S.P." }
        ],
        correct: 0,
        explanation: {
          en: "Samuel Pepys didn't use an alias in his diary. He wrote in Thomas Shelton's shorthand system, which provided privacy. The diary wasn't fully transcribed and published until the 19th century, long after his death.",
          es: "Samuel Pepys no usó un alias en su diario. Escribió en el sistema de taquigrafía de Thomas Shelton, que proporcionaba privacidad. El diario no fue completamente transcrito y publicado hasta el siglo XIX, mucho después de su muerte.",
          de: "Samuel Pepys verwendete in seinem Tagebuch kein Alias. Er schrieb in Thomas Sheltons Kurzschriftsystem, das Privatsphäre bot. Das Tagebuch wurde erst im 19. Jahrhundert, lange nach seinem Tod, vollständig transkribiert und veröffentlicht.",
          nl: "Samuel Pepys gebruikte geen alias in zijn dagboek. Hij schreef in Thomas Sheltons stenografiesysteem, wat privacy bood. Het dagboek werd pas in de 19e eeuw volledig getranscribeerd en gepubliceerd, lang na zijn dood."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
