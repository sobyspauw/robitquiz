// February Daily Challenges - 28 days × 5 questions each = 140 total questions
(function() {
  
  const februaryChallenges = {
    name: {
      en: "February Daily Challenges",
      es: "Desafíos Diarios de Febrero", 
      de: "Februar Tägliche Herausforderungen",
      nl: "Februari Dagelijkse Uitdagingen"
    },
    
    // Day 1 - February 1st: Winter Month
    day1: [
      {
        question: {
          en: "What season is February in?",
          es: "¿En qué estación está febrero?",
          de: "In welcher Jahreszeit ist Februar?",
          nl: "In welk seizoen valt februari?"
        },
        options: [
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days does February usually have?",
          es: "¿Cuántos días tiene febrero normalmente?",
          de: "Wie viele Tage hat Februar normalerweise?",
          nl: "Hoeveel dagen heeft februari gewoonlijk?"
        },
        options: [
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "31", es: "31", de: "31", nl: "31" },
          { en: "27", es: "27", de: "27", nl: "27" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What birthstone belongs to February?",
          es: "¿Qué piedra de nacimiento pertenece a febrero?",
          de: "Welcher Geburtsstein gehört zum Februar?",
          nl: "Welke geboortesteen hoort bij februari?"
        },
        options: [
          { en: "Amethyst", es: "Amatista", de: "Amethyst", nl: "Amethist" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What holiday do people celebrate on February 14th?",
          es: "¿Qué feriado celebra la gente el 14 de febrero?",
          de: "Welchen Feiertag feiern Menschen am 14. Februar?",
          nl: "Welke feestdag vieren mensen op 14 februari?"
        },
        options: [
          { en: "Valentine's Day", es: "Día de San Valentín", de: "Valentinstag", nl: "Valentijnsdag" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color is often associated with Valentine's Day?",
          es: "¿Qué color se asocia a menudo con el Día de San Valentín?",
          de: "Welche Farbe wird oft mit dem Valentinstag verbunden?",
          nl: "Welke kleur wordt vaak geassocieerd met Valentijnsdag?"
        },
        options: [
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correctIndex: 0
      }
    ],

    // Day 2 - February 2nd: Groundhog Day
    day2: [
      {
        question: {
          en: "What animal is associated with February 2nd?",
          es: "¿Qué animal está asociado con el 2 de febrero?",
          de: "Welches Tier ist mit dem 2. Februar verbunden?",
          nl: "Welk dier wordt geassocieerd met 2 februari?"
        },
        options: [
          { en: "Groundhog", es: "Marmota", de: "Murmeltier", nl: "Marmot" },
          { en: "Rabbit", es: "Conejo", de: "Hase", nl: "Konijn" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" },
          { en: "Fox", es: "Zorro", de: "Fuchs", nl: "Vos" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "If a groundhog sees its shadow, what does tradition say will happen?",
          es: "Si una marmota ve su sombra, ¿qué dice la tradición que pasará?",
          de: "Was sagt die Tradition, wenn ein Murmeltier seinen Schatten sieht?",
          nl: "Wat zegt de traditie dat er gebeurt als een marmot zijn schaduw ziet?"
        },
        options: [
          { en: "Six more weeks of winter", es: "Seis semanas más de invierno", de: "Sechs weitere Winterwochen", nl: "Nog zes weken winter" },
          { en: "Early spring", es: "Primavera temprana", de: "Früher Frühling", nl: "Vroege lente" },
          { en: "Long summer", es: "Verano largo", de: "Langer Sommer", nl: "Lange zomer" },
          { en: "Cold autumn", es: "Otoño frío", de: "Kalter Herbst", nl: "Koude herfst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which famous groundhog is celebrated in Pennsylvania?",
          es: "¿Qué famosa marmota se celebra en Pensilvania?",
          de: "Welches berühmte Murmeltier wird in Pennsylvania gefeiert?",
          nl: "Welke beroemde marmot wordt gevierd in Pennsylvania?"
        },
        options: [
          { en: "Punxsutawney Phil", es: "Phil de Punxsutawney", de: "Punxsutawney Phil", nl: "Punxsutawney Phil" },
          { en: "Staten Island Chuck", es: "Chuck de Staten Island", de: "Staten Island Chuck", nl: "Staten Island Chuck" },
          { en: "General Beauregard Lee", es: "General Beauregard Lee", de: "General Beauregard Lee", nl: "Generaal Beauregard Lee" },
          { en: "Wiarton Willie", es: "Willie de Wiarton", de: "Wiarton Willie", nl: "Wiarton Willie" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest rodent in North America?",
          es: "¿Cuál es el roedor más grande de América del Norte?",
          de: "Was ist das größte Nagetier in Nordamerika?",
          nl: "Wat is het grootste knaagdier in Noord-Amerika?"
        },
        options: [
          { en: "Beaver", es: "Castor", de: "Biber", nl: "Bever" },
          { en: "Groundhog", es: "Marmota", de: "Murmeltier", nl: "Marmot" },
          { en: "Porcupine", es: "Puercoespín", de: "Stachelschwein", nl: "Stekelvarken" },
          { en: "Prairie dog", es: "Perrito de la pradera", de: "Präriehund", nl: "Prairiehond" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which season do groundhogs typically hibernate?",
          es: "¿En qué estación hibernan típicamente las marmotas?",
          de: "In welcher Jahreszeit hibernieren Murmeltiere normalerweise?",
          nl: "In welk seizoen houden marmotten doorgaans winterslaap?"
        },
        options: [
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Autumn", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      }
    ],

    // Day 3 - February 3rd: Science & Elements
    day3: [
      {
        question: {
          en: "What is the chemical symbol for gold?",
          es: "¿Cuál es el símbolo químico del oro?",
          de: "Was ist das chemische Symbol für Gold?",
          nl: "Wat is het chemische symbool voor goud?"
        },
        options: [
          { en: "Au", es: "Au", de: "Au", nl: "Au" },
          { en: "Go", es: "Go", de: "Go", nl: "Go" },
          { en: "Gd", es: "Gd", de: "Gd", nl: "Gd" },
          { en: "Ag", es: "Ag", de: "Ag", nl: "Ag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many bones are in an adult human body?",
          es: "¿Cuántos huesos hay en el cuerpo humano adulto?",
          de: "Wie viele Knochen sind in einem erwachsenen menschlichen Körper?",
          nl: "Hoeveel botten zijn er in een volwassen menselijk lichaam?"
        },
        options: [
          { en: "206", es: "206", de: "206", nl: "206" },
          { en: "256", es: "256", de: "256", nl: "256" },
          { en: "186", es: "186", de: "186", nl: "186" },
          { en: "226", es: "226", de: "226", nl: "226" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What gas makes up about 78% of Earth's atmosphere?",
          es: "¿Qué gas constituye aproximadamente el 78% de la atmósfera terrestre?",
          de: "Welches Gas macht etwa 78% der Erdatmosphäre aus?",
          nl: "Welk gas vormt ongeveer 78% van de aardatmosfeer?"
        },
        options: [
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Argon", es: "Argón", de: "Argon", nl: "Argon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the hardest natural substance on Earth?",
          es: "¿Cuál es la sustancia natural más dura de la Tierra?",
          de: "Was ist die härteste natürliche Substanz auf der Erde?",
          nl: "Wat is de hardste natuurlijke stof op aarde?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Quartz", es: "Cuarzo", de: "Quarz", nl: "Kwarts" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which scientist developed the theory of relativity?",
          es: "¿Qué científico desarrolló la teoría de la relatividad?",
          de: "Welcher Wissenschaftler entwickelte die Relativitätstheorie?",
          nl: "Welke wetenschapper ontwikkelde de relativiteitstheorie?"
        },
        options: [
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" }
        ],
        correctIndex: 0
      }
    ],

    // Day 4 - February 4th: Geography & Capitals
    day4: [
      {
        question: {
          en: "What is the capital of Australia?",
          es: "¿Cuál es la capital de Australia?",
          de: "Was ist die Hauptstadt von Australien?",
          nl: "Wat is de hoofdstad van Australië?"
        },
        options: [
          { en: "Canberra", es: "Canberra", de: "Canberra", nl: "Canberra" },
          { en: "Sydney", es: "Sydney", de: "Sydney", nl: "Sydney" },
          { en: "Melbourne", es: "Melbourne", de: "Melbourne", nl: "Melbourne" },
          { en: "Perth", es: "Perth", de: "Perth", nl: "Perth" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which continent is the driest?",
          es: "¿Cuál es el continente más seco?",
          de: "Welcher Kontinent ist der trockenste?",
          nl: "Welk continent is het droogste?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the longest river in the world?",
          es: "¿Cuál es el río más largo del mundo?",
          de: "Was ist der längste Fluss der Welt?",
          nl: "Wat is de langste rivier ter wereld?"
        },
        options: [
          { en: "Nile River", es: "Río Nilo", de: "Nil", nl: "Nijl" },
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi" },
          { en: "Yangtze River", es: "Río Yangtsé", de: "Jangtse", nl: "Yangtze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which mountain range contains Mount Everest?",
          es: "¿Qué cordillera contiene el Monte Everest?",
          de: "Welches Gebirge enthält den Mount Everest?",
          nl: "Welk gebergte bevat de Mount Everest?"
        },
        options: [
          { en: "Himalayas", es: "Himalaya", de: "Himalaya", nl: "Himalaya" },
          { en: "Andes", es: "Andes", de: "Anden", nl: "Andes" },
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Alps", es: "Alpes", de: "Alpen", nl: "Alpen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many time zones does Russia span?",
          es: "¿Cuántas zonas horarias abarca Rusia?",
          de: "Über wie viele Zeitzonen erstreckt sich Russland?",
          nl: "Over hoeveel tijdzones strekt Rusland zich uit?"
        },
        options: [
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 0
      }
    ],

    // Day 5 - February 5th: World History
    day5: [
      {
        question: {
          en: "In which year did World War II end?",
          es: "¿En qué año terminó la Segunda Guerra Mundial?",
          de: "In welchem Jahr endete der Zweite Weltkrieg?",
          nl: "In welk jaar eindigde de Tweede Wereldoorlog?"
        },
        options: [
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1943", es: "1943", de: "1943", nl: "1943" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who was the first person to walk on the moon?",
          es: "¿Quién fue la primera persona en caminar en la luna?",
          de: "Wer war die erste Person, die auf dem Mond gelaufen ist?",
          nl: "Wie was de eerste persoon die op de maan liep?"
        },
        options: [
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" },
          { en: "Yuri Gagarin", es: "Yuri Gagarin", de: "Juri Gagarin", nl: "Yuri Gagarin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "The ancient city of Troy was located in which modern-day country?",
          es: "¿En qué país actual se encontraba la antigua ciudad de Troya?",
          de: "In welchem heutigen Land befand sich die antike Stadt Troja?",
          nl: "In welk hedendaags land lag de oude stad Troje?"
        },
        options: [
          { en: "Turkey", es: "Turquía", de: "Türkei", nl: "Turkije" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Cyprus", es: "Chipre", de: "Zypern", nl: "Cyprus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which empire was ruled by Julius Caesar?",
          es: "¿Qué imperio fue gobernado por Julio César?",
          de: "Welches Reich wurde von Julius Caesar regiert?",
          nl: "Welk rijk werd geregeerd door Julius Caesar?"
        },
        options: [
          { en: "Roman Empire", es: "Imperio Romano", de: "Römisches Reich", nl: "Romeinse Rijk" },
          { en: "Greek Empire", es: "Imperio Griego", de: "Griechisches Reich", nl: "Griekse Rijk" },
          { en: "Persian Empire", es: "Imperio Persa", de: "Persisches Reich", nl: "Perzische Rijk" },
          { en: "Egyptian Empire", es: "Imperio Egipcio", de: "Ägyptisches Reich", nl: "Egyptische Rijk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "The Berlin Wall was torn down in which year?",
          es: "¿En qué año fue derribado el Muro de Berlín?",
          de: "In welchem Jahr wurde die Berliner Mauer abgerissen?",
          nl: "In welk jaar werd de Berlijnse Muur afgebroken?"
        },
        options: [
          { en: "1989", es: "1989", de: "1989", nl: "1989" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" },
          { en: "1988", es: "1988", de: "1988", nl: "1988" },
          { en: "1991", es: "1991", de: "1991", nl: "1991" }
        ],
        correctIndex: 0
      }
    ],

    // Day 6 - February 6th: Winter Sports
    day6: [
      {
        question: {
          en: "How many players are on a hockey team on the ice at one time?",
          es: "¿Cuántos jugadores hay en un equipo de hockey sobre hielo al mismo tiempo?",
          de: "Wie viele Spieler sind gleichzeitig bei einem Eishockeyteam auf dem Eis?",
          nl: "Hoeveel spelers zijn er tegelijk op het ijs bij een ijshockeyteam?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which sport would you perform a 'triple axel'?",
          es: "¿En qué deporte realizarías un 'triple axel'?",
          de: "In welcher Sportart würde man einen 'Dreifach-Axel' ausführen?",
          nl: "In welke sport zou je een 'triple axel' uitvoeren?"
        },
        options: [
          { en: "Figure skating", es: "Patinaje artístico", de: "Eiskunstlauf", nl: "Kunstschaatsen" },
          { en: "Gymnastics", es: "Gimnasia", de: "Turnen", nl: "Gymnastiek" },
          { en: "Skiing", es: "Esquí", de: "Skifahren", nl: "Skiën" },
          { en: "Snowboarding", es: "Snowboard", de: "Snowboarden", nl: "Snowboarden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the maximum speed a puck can reach in professional hockey?",
          es: "¿Cuál es la velocidad máxima que puede alcanzar un disco en hockey profesional?",
          de: "Welche Höchstgeschwindigkeit kann ein Puck im professionellen Eishockey erreichen?",
          nl: "Wat is de maximale snelheid die een puck kan bereiken in professioneel ijshockey?"
        },
        options: [
          { en: "Over 100 mph", es: "Más de 160 km/h", de: "Über 160 km/h", nl: "Meer dan 160 km/u" },
          { en: "About 60 mph", es: "Alrededor de 96 km/h", de: "Etwa 96 km/h", nl: "Ongeveer 96 km/u" },
          { en: "Around 80 mph", es: "Alrededor de 128 km/h", de: "Etwa 128 km/h", nl: "Rond 128 km/u" },
          { en: "Less than 50 mph", es: "Menos de 80 km/h", de: "Weniger als 80 km/h", nl: "Minder dan 80 km/u" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country has won the most Winter Olympic medals overall?",
          es: "¿Qué país ha ganado más medallas olímpicas de invierno en general?",
          de: "Welches Land hat insgesamt die meisten Winterolympischen Medaillen gewonnen?",
          nl: "Welk land heeft over het algemeen de meeste Olympische wintermedailles gewonnen?"
        },
        options: [
          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In curling, what is the target area called?",
          es: "En curling, ¿cómo se llama el área objetivo?",
          de: "Beim Curling, wie heißt der Zielbereich?",
          nl: "Bij curling, hoe heet het doelgebied?"
        },
        options: [
          { en: "House", es: "Casa", de: "Haus", nl: "Huis" },
          { en: "Ring", es: "Anillo", de: "Ring", nl: "Ring" },
          { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" },
          { en: "Target", es: "Objetivo", de: "Ziel", nl: "Doel" }
        ],
        correctIndex: 0
      }
    ],

    // Day 7 - February 7th: World Cultures
    day7: [
      {
        question: {
          en: "Which country is famous for the tango dance?",
          es: "¿Qué país es famoso por el baile del tango?",
          de: "Welches Land ist berühmt für den Tango-Tanz?",
          nl: "Welk land is beroemd om de tangodans?"
        },
        options: [
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the traditional Japanese art of paper folding called?",
          es: "¿Cómo se llama el arte tradicional japonés de doblar papel?",
          de: "Wie heißt die traditionelle japanische Kunst des Papierfaltens?",
          nl: "Hoe heet de traditionele Japanse kunst van papier vouwen?"
        },
        options: [
          { en: "Origami", es: "Origami", de: "Origami", nl: "Origami" },
          { en: "Ikebana", es: "Ikebana", de: "Ikebana", nl: "Ikebana" },
          { en: "Calligraphy", es: "Caligrafía", de: "Kalligrafie", nl: "Kalligrafie" },
          { en: "Bonsai", es: "Bonsái", de: "Bonsai", nl: "Bonsai" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which country would you find Machu Picchu?",
          es: "¿En qué país encontrarías Machu Picchu?",
          de: "In welchem Land würde man Machu Picchu finden?",
          nl: "In welk land zou je Machu Picchu vinden?"
        },
        options: [
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" },
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the traditional Scottish garment called?",
          es: "¿Cómo se llama la prenda tradicional escocesa?",
          de: "Wie heißt das traditionelle schottische Kleidungsstück?",
          nl: "Hoe heet het traditionele Schotse kledingstuk?"
        },
        options: [
          { en: "Kilt", es: "Falda escocesa", de: "Kilt", nl: "Kilt" },
          { en: "Toga", es: "Toga", de: "Toga", nl: "Toga" },
          { en: "Kimono", es: "Kimono", de: "Kimono", nl: "Kimono" },
          { en: "Sari", es: "Sari", de: "Sari", nl: "Sari" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which spice is known as 'red gold'?",
          es: "¿Qué especia se conoce como 'oro rojo'?",
          de: "Welches Gewürz ist als 'rotes Gold' bekannt?",
          nl: "Welke specerij staat bekend als 'rood goud'?"
        },
        options: [
          { en: "Saffron", es: "Azafrán", de: "Safran", nl: "Saffraan" },
          { en: "Paprika", es: "Pimentón", de: "Paprika", nl: "Paprika" },
          { en: "Chili", es: "Chile", de: "Chili", nl: "Chili" },
          { en: "Cinnamon", es: "Canela", de: "Zimt", nl: "Kaneel" }
        ],
        correctIndex: 0
      }
    ],

    // Day 8 - February 8th: Black History Month
    day8: [
      {
        question: {
          en: "Who was known as the 'conductor' of the Underground Railroad?",
          es: "¿Quién era conocida como la 'conductora' del Ferrocarril Subterráneo?",
          de: "Wer war als 'Schaffnerin' der Underground Railroad bekannt?",
          nl: "Wie stond bekend als de 'conducteur' van de Underground Railroad?"
        },
        options: [
          { en: "Harriet Tubman", es: "Harriet Tubman", de: "Harriet Tubman", nl: "Harriet Tubman" },
          { en: "Rosa Parks", es: "Rosa Parks", de: "Rosa Parks", nl: "Rosa Parks" },
          { en: "Sojourner Truth", es: "Sojourner Truth", de: "Sojourner Truth", nl: "Sojourner Truth" },
          { en: "Maya Angelou", es: "Maya Angelou", de: "Maya Angelou", nl: "Maya Angelou" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who delivered the famous 'I Have a Dream' speech?",
          es: "¿Quién pronunció el famoso discurso 'Tengo un sueño'?",
          de: "Wer hielt die berühmte 'I Have a Dream'-Rede?",
          nl: "Wie hield de beroemde 'I Have a Dream' toespraak?"
        },
        options: [
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." },
          { en: "Malcolm X", es: "Malcolm X", de: "Malcolm X", nl: "Malcolm X" },
          { en: "Frederick Douglass", es: "Frederick Douglass", de: "Frederick Douglass", nl: "Frederick Douglass" },
          { en: "W.E.B. Du Bois", es: "W.E.B. Du Bois", de: "W.E.B. Du Bois", nl: "W.E.B. Du Bois" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who was the first African American to play in Major League Baseball?",
          es: "¿Quién fue el primer afroamericano en jugar en las Grandes Ligas?",
          de: "Wer war der erste Afroamerikaner, der in der Major League Baseball spielte?",
          nl: "Wie was de eerste Afro-Amerikaan die in de Major League Baseball speelde?"
        },
        options: [
          { en: "Jackie Robinson", es: "Jackie Robinson", de: "Jackie Robinson", nl: "Jackie Robinson" },
          { en: "Willie Mays", es: "Willie Mays", de: "Willie Mays", nl: "Willie Mays" },
          { en: "Hank Aaron", es: "Hank Aaron", de: "Hank Aaron", nl: "Hank Aaron" },
          { en: "Lou Brock", es: "Lou Brock", de: "Lou Brock", nl: "Lou Brock" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who wrote the novel 'Invisible Man'?",
          es: "¿Quién escribió la novela 'El hombre invisible'?",
          de: "Wer schrieb den Roman 'Invisible Man'?",
          nl: "Wie schreef de roman 'Invisible Man'?"
        },
        options: [
          { en: "Ralph Ellison", es: "Ralph Ellison", de: "Ralph Ellison", nl: "Ralph Ellison" },
          { en: "James Baldwin", es: "James Baldwin", de: "James Baldwin", nl: "James Baldwin" },
          { en: "Richard Wright", es: "Richard Wright", de: "Richard Wright", nl: "Richard Wright" },
          { en: "Langston Hughes", es: "Langston Hughes", de: "Langston Hughes", nl: "Langston Hughes" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which month is Black History Month in the United States?",
          es: "¿Qué mes es el Mes de la Historia Negra en Estados Unidos?",
          de: "Welcher Monat ist der Black History Month in den Vereinigten Staaten?",
          nl: "Welke maand is Black History Month in de Verenigde Staten?"
        },
        options: [
          { en: "February", es: "Febrero", de: "Februar", nl: "Februari" },
          { en: "January", es: "Enero", de: "Januar", nl: "Januari" },
          { en: "March", es: "Marzo", de: "März", nl: "Maart" },
          { en: "October", es: "Octubre", de: "Oktober", nl: "Oktober" }
        ],
        correctIndex: 0
      }
    ],

    // Day 9 - February 9th: Music & Composers
    day9: [
      {
        question: {
          en: "How many strings does a standard guitar have?",
          es: "¿Cuántas cuerdas tiene una guitarra estándar?",
          de: "Wie viele Saiten hat eine Standard-Gitarre?",
          nl: "Hoeveel snaren heeft een standaardgitaar?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who composed 'The Four Seasons'?",
          es: "¿Quién compuso 'Las cuatro estaciones'?",
          de: "Wer komponierte 'Die vier Jahreszeiten'?",
          nl: "Wie componeerde 'De vier seizoenen'?"
        },
        options: [
          { en: "Antonio Vivaldi", es: "Antonio Vivaldi", de: "Antonio Vivaldi", nl: "Antonio Vivaldi" },
          { en: "Johann Bach", es: "Johann Bach", de: "Johann Bach", nl: "Johann Bach" },
          { en: "Wolfgang Mozart", es: "Wolfgang Mozart", de: "Wolfgang Mozart", nl: "Wolfgang Mozart" },
          { en: "Ludwig Beethoven", es: "Ludwig Beethoven", de: "Ludwig Beethoven", nl: "Ludwig Beethoven" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does 'piano' mean in musical terms?",
          es: "¿Qué significa 'piano' en términos musicales?",
          de: "Was bedeutet 'piano' in musikalischen Begriffen?",
          nl: "Wat betekent 'piano' in muzikale termen?"
        },
        options: [
          { en: "Soft", es: "Suave", de: "Leise", nl: "Zacht" },
          { en: "Fast", es: "Rápido", de: "Schnell", nl: "Snel" },
          { en: "Loud", es: "Fuerte", de: "Laut", nl: "Luid" },
          { en: "Slow", es: "Lento", de: "Langsam", nl: "Langzaam" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which instrument is known as the 'king of instruments'?",
          es: "¿Qué instrumento se conoce como el 'rey de los instrumentos'?",
          de: "Welches Instrument ist als 'König der Instrumente' bekannt?",
          nl: "Welk instrument staat bekend als de 'koning der instrumenten'?"
        },
        options: [
          { en: "Organ", es: "Órgano", de: "Orgel", nl: "Orgel" },
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Violin", es: "Violín", de: "Violine", nl: "Viool" },
          { en: "Trumpet", es: "Trompeta", de: "Trompete", nl: "Trompet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many keys are on a full-size piano?",
          es: "¿Cuántas teclas tiene un piano de tamaño completo?",
          de: "Wie viele Tasten hat ein Klavier in voller Größe?",
          nl: "Hoeveel toetsen heeft een piano op ware grootte?"
        },
        options: [
          { en: "88", es: "88", de: "88", nl: "88" },
          { en: "76", es: "76", de: "76", nl: "76" },
          { en: "61", es: "61", de: "61", nl: "61" },
          { en: "100", es: "100", de: "100", nl: "100" }
        ],
        correctIndex: 0
      }
    ],

    // Day 10 - February 10th: Food & Cuisine
    day10: [
      {
        question: {
          en: "Which country is famous for inventing pizza?",
          es: "¿Qué país es famoso por inventar la pizza?",
          de: "Welches Land ist berühmt für die Erfindung der Pizza?",
          nl: "Welk land is beroemd om de uitvinding van pizza?"
        },
        options: [
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the main ingredient in guacamole?",
          es: "¿Cuál es el ingrediente principal del guacamole?",
          de: "Was ist die Hauptzutat in Guacamole?",
          nl: "Wat is het hoofdingrediënt in guacamole?"
        },
        options: [
          { en: "Avocado", es: "Aguacate", de: "Avocado", nl: "Avocado" },
          { en: "Tomato", es: "Tomate", de: "Tomate", nl: "Tomaat" },
          { en: "Lime", es: "Lima", de: "Limette", nl: "Limoen" },
          { en: "Onion", es: "Cebolla", de: "Zwiebel", nl: "Ui" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which spice is derived from the crocus flower?",
          es: "¿Qué especia se deriva de la flor de azafrán?",
          de: "Welches Gewürz wird aus der Krokusblüte gewonnen?",
          nl: "Welke specerij wordt afgeleid van de krocusbloem?"
        },
        options: [
          { en: "Saffron", es: "Azafrán", de: "Safran", nl: "Saffraan" },
          { en: "Turmeric", es: "Cúrcuma", de: "Kurkuma", nl: "Kurkuma" },
          { en: "Paprika", es: "Pimentón", de: "Paprika", nl: "Paprika" },
          { en: "Cinnamon", es: "Canela", de: "Zimt", nl: "Kaneel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of pastry is used to make profiteroles?",
          es: "¿Qué tipo de masa se usa para hacer profiteroles?",
          de: "Welche Art von Teig wird für Profiteroles verwendet?",
          nl: "Welk type deeg wordt gebruikt om profiteroles te maken?"
        },
        options: [
          { en: "Choux pastry", es: "Masa choux", de: "Brandteig", nl: "Choux-deeg" },
          { en: "Puff pastry", es: "Masa de hojaldre", de: "Blätterteig", nl: "Bladerdeeg" },
          { en: "Shortcrust pastry", es: "Masa quebrada", de: "Mürbeteig", nl: "Korst deeg" },
          { en: "Filo pastry", es: "Masa filo", de: "Filoteig", nl: "Filodeeg" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vegetable is known as 'aubergine' in British English?",
          es: "¿Qué verdura se conoce como 'aubergine' en inglés británico?",
          de: "Welches Gemüse wird im britischen Englisch als 'aubergine' bezeichnet?",
          nl: "Welke groente staat bekend als 'aubergine' in het Britse Engels?"
        },
        options: [
          { en: "Eggplant", es: "Berenjena", de: "Aubergine", nl: "Aubergine" },
          { en: "Zucchini", es: "Calabacín", de: "Zucchini", nl: "Courgette" },
          { en: "Cucumber", es: "Pepino", de: "Gurke", nl: "Komkommer" },
          { en: "Okra", es: "Okra", de: "Okra", nl: "Okra" }
        ],
        correctIndex: 0
      }
    ],

    // Day 11 - February 11th: Literature & Authors
    day11: [
      {
        question: {
          en: "Who wrote 'Romeo and Juliet'?",
          es: "¿Quién escribió 'Romeo y Julieta'?",
          de: "Wer schrieb 'Romeo und Julia'?",
          nl: "Wie schreef 'Romeo en Julia'?"
        },
        options: [
          { en: "William Shakespeare", es: "William Shakespeare", de: "William Shakespeare", nl: "William Shakespeare" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which novel begins with 'Call me Ishmael'?",
          es: "¿Qué novela comienza con 'Llámame Ismael'?",
          de: "Welcher Roman beginnt mit 'Nennt mich Ismael'?",
          nl: "Welke roman begint met 'Noem me Ismaël'?"
        },
        options: [
          { en: "Moby Dick", es: "Moby Dick", de: "Moby Dick", nl: "Moby Dick" },
          { en: "The Great Gatsby", es: "El gran Gatsby", de: "Der große Gatsby", nl: "De grote Gatsby" },
          { en: "To Kill a Mockingbird", es: "Matar a un ruiseñor", de: "Wer die Nachtigall stört", nl: "Spaar de spotvogel" },
          { en: "1984", es: "1984", de: "1984", nl: "1984" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who created the detective character Hercule Poirot?",
          es: "¿Quién creó al detective Hercule Poirot?",
          de: "Wer schuf die Detektivfigur Hercule Poirot?",
          nl: "Wie creëerde het detective personage Hercule Poirot?"
        },
        options: [
          { en: "Agatha Christie", es: "Agatha Christie", de: "Agatha Christie", nl: "Agatha Christie" },
          { en: "Arthur Conan Doyle", es: "Arthur Conan Doyle", de: "Arthur Conan Doyle", nl: "Arthur Conan Doyle" },
          { en: "Raymond Chandler", es: "Raymond Chandler", de: "Raymond Chandler", nl: "Raymond Chandler" },
          { en: "Dorothy Sayers", es: "Dorothy Sayers", de: "Dorothy Sayers", nl: "Dorothy Sayers" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which city is Shakespeare's 'Romeo and Juliet' set?",
          es: "¿En qué ciudad está ambientada 'Romeo y Julieta' de Shakespeare?",
          de: "In welcher Stadt spielt Shakespeares 'Romeo und Julia'?",
          nl: "In welke stad speelt Shakespeare's 'Romeo en Julia'?"
        },
        options: [
          { en: "Verona", es: "Verona", de: "Verona", nl: "Verona" },
          { en: "Venice", es: "Venecia", de: "Venedig", nl: "Venetië" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Florence", es: "Florencia", de: "Florenz", nl: "Florence" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the first book in J.K. Rowling's Harry Potter series?",
          es: "¿Cuál es el primer libro de la serie Harry Potter de J.K. Rowling?",
          de: "Was ist das erste Buch in J.K. Rowlings Harry Potter Serie?",
          nl: "Wat is het eerste boek in J.K. Rowling's Harry Potter serie?"
        },
        options: [
          { en: "The Philosopher's Stone", es: "La piedra filosofal", de: "Der Stein der Weisen", nl: "De steen der wijzen" },
          { en: "The Chamber of Secrets", es: "La cámara secreta", de: "Die Kammer des Schreckens", nl: "De geheime kamer" },
          { en: "The Prisoner of Azkaban", es: "El prisionero de Azkaban", de: "Der Gefangene von Askaban", nl: "De gevangene van Azkaban" },
          { en: "The Goblet of Fire", es: "El cáliz de fuego", de: "Der Feuerkelch", nl: "De vuurbeker" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - February 12th: Technology & Innovation
    day12: [
      {
        question: {
          en: "What does 'WWW' stand for?",
          es: "¿Qué significa 'WWW'?",
          de: "Wofür steht 'WWW'?",
          nl: "Waar staat 'WWW' voor?"
        },
        options: [
          { en: "World Wide Web", es: "World Wide Web", de: "World Wide Web", nl: "World Wide Web" },
          { en: "World Wide Wire", es: "World Wide Wire", de: "World Wide Wire", nl: "World Wide Wire" },
          { en: "World Web Way", es: "World Web Way", de: "World Web Way", nl: "World Web Way" },
          { en: "Wide World Web", es: "Wide World Web", de: "Wide World Web", nl: "Wide World Web" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who is considered the father of the modern computer?",
          es: "¿Quién es considerado el padre de la computadora moderna?",
          de: "Wer gilt als Vater des modernen Computers?",
          nl: "Wie wordt beschouwd als de vader van de moderne computer?"
        },
        options: [
          { en: "Alan Turing", es: "Alan Turing", de: "Alan Turing", nl: "Alan Turing" },
          { en: "Bill Gates", es: "Bill Gates", de: "Bill Gates", nl: "Bill Gates" },
          { en: "Steve Jobs", es: "Steve Jobs", de: "Steve Jobs", nl: "Steve Jobs" },
          { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does 'AI' stand for in technology?",
          es: "¿Qué significa 'AI' en tecnología?",
          de: "Wofür steht 'AI' in der Technologie?",
          nl: "Waar staat 'AI' voor in technologie?"
        },
        options: [
          { en: "Artificial Intelligence", es: "Inteligencia Artificial", de: "Künstliche Intelligenz", nl: "Kunstmatige Intelligentie" },
          { en: "Automatic Integration", es: "Integración Automática", de: "Automatische Integration", nl: "Automatische Integratie" },
          { en: "Advanced Interface", es: "Interfaz Avanzada", de: "Erweiterte Schnittstelle", nl: "Geavanceerde Interface" },
          { en: "Audio Input", es: "Entrada de Audio", de: "Audio-Eingang", nl: "Audio Invoer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which company created the iPhone?",
          es: "¿Qué empresa creó el iPhone?",
          de: "Welches Unternehmen hat das iPhone entwickelt?",
          nl: "Welk bedrijf creëerde de iPhone?"
        },
        options: [
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
          { en: "Samsung", es: "Samsung", de: "Samsung", nl: "Samsung" },
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does 'USB' stand for?",
          es: "¿Qué significa 'USB'?",
          de: "Wofür steht 'USB'?",
          nl: "Waar staat 'USB' voor?"
        },
        options: [
          { en: "Universal Serial Bus", es: "Bus Serie Universal", de: "Universal Serial Bus", nl: "Universele Seriële Bus" },
          { en: "United System Bus", es: "Bus del Sistema Unido", de: "Vereinigter Systembus", nl: "Verenigde Systeem Bus" },
          { en: "Ultra Speed Bus", es: "Bus de Ultra Velocidad", de: "Ultra-Geschwindigkeitsbus", nl: "Ultra Snelheid Bus" },
          { en: "Universal Storage Bus", es: "Bus de Almacenamiento Universal", de: "Universeller Speicherbus", nl: "Universele Opslag Bus" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - February 13th: Love & Romance Preparation
    day13: [
      {
        question: {
          en: "What flower is most associated with love and romance?",
          es: "¿Qué flor se asocia más con el amor y el romance?",
          de: "Welche Blume wird am meisten mit Liebe und Romantik verbunden?",
          nl: "Welke bloem wordt het meest geassocieerd met liefde en romantiek?"
        },
        options: [
          { en: "Red rose", es: "Rosa roja", de: "Rote Rose", nl: "Rode roos" },
          { en: "Tulip", es: "Tulipán", de: "Tulpe", nl: "Tulp" },
          { en: "Sunflower", es: "Girasol", de: "Sonnenblume", nl: "Zonnebloem" },
          { en: "Daisy", es: "Margarita", de: "Gänseblümchen", nl: "Madeliefje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does Cupid use to make people fall in love?",
          es: "¿Qué usa Cupido para hacer que las personas se enamoren?",
          de: "Was benutzt Cupido, um Menschen sich verlieben zu lassen?",
          nl: "Wat gebruikt Cupido om mensen verliefd te laten worden?"
        },
        options: [
          { en: "Bow and arrow", es: "Arco y flecha", de: "Bogen und Pfeil", nl: "Boog en pijl" },
          { en: "Magic wand", es: "Varita mágica", de: "Zauberstab", nl: "Toverstaf" },
          { en: "Love potion", es: "Poción de amor", de: "Liebestrank", nl: "Liefdesdrankje" },
          { en: "Golden ring", es: "Anillo dorado", de: "Goldener Ring", nl: "Gouden ring" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In Roman mythology, who is Cupid's mother?",
          es: "En la mitología romana, ¿quién es la madre de Cupido?",
          de: "Wer ist in der römischen Mythologie Cupidos Mutter?",
          nl: "Wie is in de Romeinse mythologie Cupido's moeder?"
        },
        options: [
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Juno", es: "Juno", de: "Juno", nl: "Juno" },
          { en: "Diana", es: "Diana", de: "Diana", nl: "Diana" },
          { en: "Minerva", es: "Minerva", de: "Minerva", nl: "Minerva" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What shape is traditionally associated with love?",
          es: "¿Qué forma se asocia tradicionalmente con el amor?",
          de: "Welche Form wird traditionell mit Liebe verbunden?",
          nl: "Welke vorm wordt traditioneel geassocieerd met liefde?"
        },
        options: [
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Star", es: "Estrella", de: "Stern", nl: "Ster" },
          { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" },
          { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most popular gift on Valentine's Day?",
          es: "¿Cuál es el regalo más popular en el Día de San Valentín?",
          de: "Was ist das beliebteste Geschenk am Valentinstag?",
          nl: "Wat is het populairste cadeau op Valentijnsdag?"
        },
        options: [
          { en: "Chocolate", es: "Chocolate", de: "Schokolade", nl: "Chocolade" },
          { en: "Jewelry", es: "Joyería", de: "Schmuck", nl: "Sieraden" },
          { en: "Perfume", es: "Perfume", de: "Parfüm", nl: "Parfum" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - February 14th: Valentine's Day
    day14: [
      {
        question: {
          en: "Saint Valentine was a priest in which ancient empire?",
          es: "San Valentín fue un sacerdote en qué imperio antiguo?",
          de: "Heiliger Valentin war ein Priester in welchem antiken Reich?",
          nl: "Heilige Valentijn was een priester in welk oud rijk?"
        },
        options: [
          { en: "Roman Empire", es: "Imperio Romano", de: "Römisches Reich", nl: "Romeinse Rijk" },
          { en: "Greek Empire", es: "Imperio Griego", de: "Griechisches Reich", nl: "Griekse Rijk" },
          { en: "Egyptian Empire", es: "Imperio Egipcio", de: "Ägyptisches Reich", nl: "Egyptische Rijk" },
          { en: "Persian Empire", es: "Imperio Persa", de: "Persisches Reich", nl: "Perzische Rijk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many couples get engaged on Valentine's Day annually?",
          es: "¿Cuántas parejas se comprometen en el Día de San Valentín anualmente?",
          de: "Wie viele Paare verloben sich jährlich am Valentinstag?",
          nl: "Hoeveel koppels verloven zich jaarlijks op Valentijnsdag?"
        },
        options: [
          { en: "About 6 million", es: "Alrededor de 6 millones", de: "Etwa 6 Millionen", nl: "Ongeveer 6 miljoen" },
          { en: "About 2 million", es: "Alrededor de 2 millones", de: "Etwa 2 Millionen", nl: "Ongeveer 2 miljoen" },
          { en: "About 10 million", es: "Alrededor de 10 millones", de: "Etwa 10 Millionen", nl: "Ongeveer 10 miljoen" },
          { en: "About 1 million", es: "Alrededor de 1 millón", de: "Etwa 1 Million", nl: "Ongeveer 1 miljoen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What popular website debuted on Valentine's Day?",
          es: "¿Qué sitio web popular debutó en el Día de San Valentín?",
          de: "Welche beliebte Website startete am Valentinstag?",
          nl: "Welke populaire website debuteerde op Valentijnsdag?"
        },
        options: [
          { en: "YouTube", es: "YouTube", de: "YouTube", nl: "YouTube" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" },
          { en: "Instagram", es: "Instagram", de: "Instagram", nl: "Instagram" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which U.S. state produces the most roses?",
          es: "¿Qué estado de EE.UU. produce más rosas?",
          de: "Welcher US-Bundesstaat produziert die meisten Rosen?",
          nl: "Welke Amerikaanse staat produceert de meeste rozen?"
        },
        options: [
          { en: "California", es: "California", de: "Kalifornien", nl: "Californië" },
          { en: "Texas", es: "Texas", de: "Texas", nl: "Texas" },
          { en: "Florida", es: "Florida", de: "Florida", nl: "Florida" },
          { en: "New York", es: "Nueva York", de: "New York", nl: "New York" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What percentage of Valentine's Day cards are bought by women?",
          es: "¿Qué porcentaje de tarjetas del Día de San Valentín son compradas por mujeres?",
          de: "Welcher Prozentsatz der Valentinstagskarten wird von Frauen gekauft?",
          nl: "Welk percentage van Valentijnsdagkaarten wordt gekocht door vrouwen?"
        },
        options: [
          { en: "85%", es: "85%", de: "85%", nl: "85%" },
          { en: "65%", es: "65%", de: "65%", nl: "65%" },
          { en: "75%", es: "75%", de: "75%", nl: "75%" },
          { en: "50%", es: "50%", de: "50%", nl: "50%" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - February 15th: Famous Couples
    day15: [
      {
        question: {
          en: "Which royal couple married in 2011?",
          es: "¿Qué pareja real se casó en 2011?",
          de: "Welches königliche Paar heiratete 2011?",
          nl: "Welk koninklijk paar trouwde in 2011?"
        },
        options: [
          { en: "Prince William & Kate Middleton", es: "Príncipe William y Kate Middleton", de: "Prinz William & Kate Middleton", nl: "Prins William & Kate Middleton" },
          { en: "Prince Harry & Meghan Markle", es: "Príncipe Harry y Meghan Markle", de: "Prinz Harry & Meghan Markle", nl: "Prins Harry & Meghan Markle" },
          { en: "Prince Charles & Camilla", es: "Príncipe Carlos y Camilla", de: "Prinz Charles & Camilla", nl: "Prins Charles & Camilla" },
          { en: "Prince Andrew & Sarah Ferguson", es: "Príncipe Andrés y Sarah Ferguson", de: "Prinz Andrew & Sarah Ferguson", nl: "Prins Andrew & Sarah Ferguson" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which famous couple starred in 'Casablanca'?",
          es: "¿Qué famosa pareja protagonizó 'Casablanca'?",
          de: "Welches berühmte Paar spielte in 'Casablanca'?",
          nl: "Welk beroemde koppel speelde in 'Casablanca'?"
        },
        options: [
          { en: "Humphrey Bogart & Ingrid Bergman", es: "Humphrey Bogart e Ingrid Bergman", de: "Humphrey Bogart & Ingrid Bergman", nl: "Humphrey Bogart & Ingrid Bergman" },
          { en: "Clark Gable & Vivien Leigh", es: "Clark Gable y Vivien Leigh", de: "Clark Gable & Vivien Leigh", nl: "Clark Gable & Vivien Leigh" },
          { en: "Gary Grant & Grace Kelly", es: "Gary Grant y Grace Kelly", de: "Gary Grant & Grace Kelly", nl: "Gary Grant & Grace Kelly" },
          { en: "Spencer Tracy & Katharine Hepburn", es: "Spencer Tracy y Katharine Hepburn", de: "Spencer Tracy & Katharine Hepburn", nl: "Spencer Tracy & Katharine Hepburn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Romeo and Juliet belonged to which feuding families?",
          es: "¿A qué familias enemigas pertenecían Romeo y Julieta?",
          de: "Zu welchen verfeindeten Familien gehörten Romeo und Julia?",
          nl: "Tot welke vijandige families behoorden Romeo en Julia?"
        },
        options: [
          { en: "Montague & Capulet", es: "Montesco y Capuleto", de: "Montague & Capulet", nl: "Montague & Capulet" },
          { en: "Borgia & Medici", es: "Borgia y Médici", de: "Borgia & Medici", nl: "Borgia & Medici" },
          { en: "Tudor & Stuart", es: "Tudor y Stuart", de: "Tudor & Stuart", nl: "Tudor & Stuart" },
          { en: "York & Lancaster", es: "York y Lancaster", de: "York & Lancaster", nl: "York & Lancaster" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which Egyptian queen was known for her relationships with Julius Caesar and Mark Antony?",
          es: "¿Qué reina egipcia era conocida por sus relaciones con Julio César y Marco Antonio?",
          de: "Welche ägyptische Königin war bekannt für ihre Beziehungen zu Julius Caesar und Mark Antonius?",
          nl: "Welke Egyptische koningin stond bekend om haar relaties met Julius Caesar en Marcus Antonius?"
        },
        options: [
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" },
          { en: "Ankhesenamun", es: "Ankhesenamun", de: "Anchesenamun", nl: "Ankhesenamun" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which power couple founded Microsoft together?",
          es: "¿Qué poderosa pareja fundó Microsoft juntos?",
          de: "Welches mächtige Paar gründete Microsoft zusammen?",
          nl: "Welk machtige koppel richtte Microsoft samen op?"
        },
        options: [
          { en: "Bill & Melinda Gates", es: "Bill y Melinda Gates", de: "Bill & Melinda Gates", nl: "Bill & Melinda Gates" },
          { en: "Steve & Laurene Jobs", es: "Steve y Laurene Jobs", de: "Steve & Laurene Jobs", nl: "Steve & Laurene Jobs" },
          { en: "Larry & Susan Page", es: "Larry y Susan Page", de: "Larry & Susan Page", nl: "Larry & Susan Page" },
          { en: "Mark & Priscilla Zuckerberg", es: "Mark y Priscilla Zuckerberg", de: "Mark & Priscilla Zuckerberg", nl: "Mark & Priscilla Zuckerberg" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - February 16th: Art & Artists
    day16: [
      {
        question: {
          en: "Who painted 'The Starry Night'?",
          es: "¿Quién pintó 'La noche estrellada'?",
          de: "Wer malte 'Die Sternennacht'?",
          nl: "Wie schilderde 'De sterrennacht'?"
        },
        options: [
          { en: "Vincent van Gogh", es: "Vincent van Gogh", de: "Vincent van Gogh", nl: "Vincent van Gogh" },
          { en: "Pablo Picasso", es: "Pablo Picasso", de: "Pablo Picasso", nl: "Pablo Picasso" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most famous painting in the Louvre Museum?",
          es: "¿Cuál es la pintura más famosa del Museo del Louvre?",
          de: "Was ist das berühmteste Gemälde im Louvre-Museum?",
          nl: "Wat is het beroemdste schilderij in het Louvre Museum?"
        },
        options: [
          { en: "Mona Lisa", es: "Mona Lisa", de: "Mona Lisa", nl: "Mona Lisa" },
          { en: "The Last Supper", es: "La última cena", de: "Das Letzte Abendmahl", nl: "Het Laatste Avondmaal" },
          { en: "The Thinker", es: "El pensador", de: "Der Denker", nl: "De Denker" },
          { en: "Venus de Milo", es: "Venus de Milo", de: "Venus von Milo", nl: "Venus van Milo" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which art movement is Pablo Picasso most famous for?",
          es: "¿Por qué movimiento artístico es más famoso Pablo Picasso?",
          de: "Für welche Kunstbewegung ist Pablo Picasso am berühmtesten?",
          nl: "Voor welke kunstbeweging is Pablo Picasso het meest beroemd?"
        },
        options: [
          { en: "Cubism", es: "Cubismo", de: "Kubismus", nl: "Kubisme" },
          { en: "Impressionism", es: "Impresionismo", de: "Impressionismus", nl: "Impressionisme" },
          { en: "Surrealism", es: "Surrealismo", de: "Surrealismus", nl: "Surrealisme" },
          { en: "Expressionism", es: "Expresionismo", de: "Expressionismus", nl: "Expressionisme" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What material is the Statue of Liberty made of?",
          es: "¿De qué material está hecha la Estatua de la Libertad?",
          de: "Aus welchem Material besteht die Freiheitsstatue?",
          nl: "Van welk materiaal is het Vrijheidsbeeld gemaakt?"
        },
        options: [
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" },
          { en: "Bronze", es: "Bronce", de: "Bronze", nl: "Brons" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" },
          { en: "Stone", es: "Piedra", de: "Stein", nl: "Steen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which famous sculptor created 'David'?",
          es: "¿Qué famoso escultor creó 'David'?",
          de: "Welcher berühmte Bildhauer schuf 'David'?",
          nl: "Welke beroemde beeldhouwer creëerde 'David'?"
        },
        options: [
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Donatello", es: "Donatello", de: "Donatello", nl: "Donatello" },
          { en: "Rodin", es: "Rodin", de: "Rodin", nl: "Rodin" },
          { en: "Bernini", es: "Bernini", de: "Bernini", nl: "Bernini" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - February 17th: Presidents' Day (Third Monday in February)
    day17: [
      {
        question: {
          en: "Who was the first President of the United States?",
          es: "¿Quién fue el primer Presidente de los Estados Unidos?",
          de: "Wer war der erste Präsident der Vereinigten Staaten?",
          nl: "Wie was de eerste president van de Verenigde Staten?"
        },
        options: [
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which president appears on the one-dollar bill?",
          es: "¿Qué presidente aparece en el billete de un dólar?",
          de: "Welcher Präsident erscheint auf dem Ein-Dollar-Schein?",
          nl: "Welke president staat op het biljet van één dollar?"
        },
        options: [
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Alexander Hamilton", es: "Alexander Hamilton", de: "Alexander Hamilton", nl: "Alexander Hamilton" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who was president during the Civil War?",
          es: "¿Quién fue presidente durante la Guerra Civil?",
          de: "Wer war Präsident während des Bürgerkriegs?",
          nl: "Wie was president tijdens de Burgeroorlog?"
        },
        options: [
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "Ulysses S. Grant", es: "Ulysses S. Grant", de: "Ulysses S. Grant", nl: "Ulysses S. Grant" },
          { en: "Andrew Johnson", es: "Andrew Johnson", de: "Andrew Johnson", nl: "Andrew Johnson" },
          { en: "James Buchanan", es: "James Buchanan", de: "James Buchanan", nl: "James Buchanan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which president bought Louisiana from France?",
          es: "¿Qué presidente compró Louisiana a Francia?",
          de: "Welcher Präsident kaufte Louisiana von Frankreich?",
          nl: "Welke president kocht Louisiana van Frankrijk?"
        },
        options: [
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "James Madison", es: "James Madison", de: "James Madison", nl: "James Madison" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "James Monroe", es: "James Monroe", de: "James Monroe", nl: "James Monroe" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which president created the New Deal programs?",
          es: "¿Qué presidente creó los programas del Nuevo Trato?",
          de: "Welcher Präsident schuf die New Deal-Programme?",
          nl: "Welke president creëerde de New Deal-programma's?"
        },
        options: [
          { en: "Franklin D. Roosevelt", es: "Franklin D. Roosevelt", de: "Franklin D. Roosevelt", nl: "Franklin D. Roosevelt" },
          { en: "Theodore Roosevelt", es: "Theodore Roosevelt", de: "Theodore Roosevelt", nl: "Theodore Roosevelt" },
          { en: "Herbert Hoover", es: "Herbert Hoover", de: "Herbert Hoover", nl: "Herbert Hoover" },
          { en: "Harry Truman", es: "Harry Truman", de: "Harry Truman", nl: "Harry Truman" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - February 18th: Theater & Performing Arts
    day18: [
      {
        question: {
          en: "What is the longest-running show in Broadway history?",
          es: "¿Cuál es el espectáculo más duradero en la historia de Broadway?",
          de: "Was ist die am längsten laufende Show in der Broadway-Geschichte?",
          nl: "Wat is de langstlopende show in de Broadway geschiedenis?"
        },
        options: [
          { en: "The Lion King", es: "El Rey León", de: "Der König der Löwen", nl: "De Leeuwenkoning" },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
          { en: "Cats", es: "Cats", de: "Cats", nl: "Cats" },
          { en: "The Phantom of the Opera", es: "El Fantasma de la Ópera", de: "Das Phantom der Oper", nl: "Het Spook van de Opera" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of performance combines singing, dancing, and acting?",
          es: "¿Qué tipo de espectáculo combina canto, baile y actuación?",
          de: "Welche Art von Aufführung kombiniert Singen, Tanzen und Schauspielern?",
          nl: "Welk type optreden combineert zingen, dansen en acteren?"
        },
        options: [
          { en: "Musical theater", es: "Teatro musical", de: "Musiktheater", nl: "Muziektheater" },
          { en: "Opera", es: "Ópera", de: "Oper", nl: "Opera" },
          { en: "Ballet", es: "Ballet", de: "Ballett", nl: "Ballet" },
          { en: "Drama", es: "Drama", de: "Drama", nl: "Drama" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which city is the famous West End theater district located?",
          es: "¿En qué ciudad se encuentra el famoso distrito teatral de West End?",
          de: "In welcher Stadt befindet sich das berühmte West End Theaterviertel?",
          nl: "In welke stad ligt het beroemde West End theaterdistrict?"
        },
        options: [
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "New York", es: "Nueva York", de: "New York", nl: "New York" },
          { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
          { en: "Vienna", es: "Viena", de: "Wien", nl: "Wenen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What are the main acting awards called in theater?",
          es: "¿Cómo se llaman los principales premios de actuación en teatro?",
          de: "Wie heißen die wichtigsten Schauspielpreise im Theater?",
          nl: "Hoe heten de belangrijkste acteerprijzen in het theater?"
        },
        options: [
          { en: "Tony Awards", es: "Premios Tony", de: "Tony Awards", nl: "Tony Awards" },
          { en: "Emmy Awards", es: "Premios Emmy", de: "Emmy Awards", nl: "Emmy Awards" },
          { en: "Oscar Awards", es: "Premios Oscar", de: "Oscar Awards", nl: "Oscar Awards" },
          { en: "Grammy Awards", es: "Premios Grammy", de: "Grammy Awards", nl: "Grammy Awards" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which Shakespeare play features the characters Hamlet and Ophelia?",
          es: "¿Qué obra de Shakespeare presenta a los personajes Hamlet y Ofelia?",
          de: "Welches Shakespeare-Stück zeigt die Charaktere Hamlet und Ophelia?",
          nl: "Welk Shakespeare-toneelstuk heeft de personages Hamlet en Ophelia?"
        },
        options: [
          { en: "Hamlet", es: "Hamlet", de: "Hamlet", nl: "Hamlet" },
          { en: "Macbeth", es: "Macbeth", de: "Macbeth", nl: "Macbeth" },
          { en: "King Lear", es: "El Rey Lear", de: "König Lear", nl: "Koning Lear" },
          { en: "Othello", es: "Otelo", de: "Othello", nl: "Othello" }
        ],
        correctIndex: 0
      }
    ],

    // Day 19 - February 19th: Space & Astronomy
    day19: [
      {
        question: {
          en: "What is the closest planet to the Sun?",
          es: "¿Cuál es el planeta más cercano al Sol?",
          de: "Welcher ist der der Sonne nächste Planet?",
          nl: "Welke planeet ligt het dichtst bij de zon?"
        },
        options: [
          { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many moons does Earth have?",
          es: "¿Cuántas lunas tiene la Tierra?",
          de: "Wie viele Monde hat die Erde?",
          nl: "Hoeveel manen heeft de aarde?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "0", es: "0", de: "0", nl: "0" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which planet is known as the 'Red Planet'?",
          es: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
          de: "Welcher Planet ist als 'Roter Planet' bekannt?",
          nl: "Welke planeet staat bekend als de 'Rode Planeet'?"
        },
        options: [
          { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
          { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
          { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
          { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the chemical symbol for gold?",
          es: "¿Cuál es el símbolo químico del oro?",
          de: "Was ist das chemische Symbol für Gold?",
          nl: "Wat is het chemische symbool voor goud?"
        },
        options: [
          { en: "Au", es: "Au", de: "Au", nl: "Au" },
          { en: "Ag", es: "Ag", de: "Ag", nl: "Ag" },
          { en: "Go", es: "Go", de: "Go", nl: "Go" },
          { en: "Gd", es: "Gd", de: "Gd", nl: "Gd" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the name of NASA's famous space telescope?",
          es: "¿Cómo se llama el famoso telescopio espacial de la NASA?",
          de: "Wie heißt das berühmte Weltraumteleskop der NASA?",
          nl: "Wat is de naam van NASA's beroemde ruimtetelescoop?"
        },
        options: [
          { en: "Hubble", es: "Hubble", de: "Hubble", nl: "Hubble" },
          { en: "Kepler", es: "Kepler", de: "Kepler", nl: "Kepler" },
          { en: "Spitzer", es: "Spitzer", de: "Spitzer", nl: "Spitzer" },
          { en: "Chandra", es: "Chandra", de: "Chandra", nl: "Chandra" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - February 20th: Animals & Wildlife
    day20: [
      {
        question: {
          en: "What is the largest mammal in the world?",
          es: "¿Cuál es el mamífero más grande del mundo?",
          de: "Was ist das größte Säugetier der Welt?",
          nl: "Wat is het grootste zoogdier ter wereld?"
        },
        options: [
          { en: "Blue whale", es: "Ballena azul", de: "Blauwal", nl: "Blauwe vinvis" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraffe" },
          { en: "Hippopotamus", es: "Hipopótamo", de: "Nilpferd", nl: "Nijlpaard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which animal is known as the 'King of the Jungle'?",
          es: "¿Qué animal es conocido como el 'Rey de la Selva'?",
          de: "Welches Tier ist als 'König des Dschungels' bekannt?",
          nl: "Welk dier staat bekend als de 'Koning van de Jungle'?"
        },
        options: [
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Tiger", es: "Tigre", de: "Tiger", nl: "Tijger" },
          { en: "Leopard", es: "Leopardo", de: "Leopard", nl: "Luipaard" },
          { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many hearts does an octopus have?",
          es: "¿Cuántos corazones tiene un pulpo?",
          de: "Wie viele Herzen hat ein Oktopus?",
          nl: "Hoeveel harten heeft een octopus?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a group of lions called?",
          es: "¿Cómo se llama un grupo de leones?",
          de: "Wie nennt man eine Gruppe von Löwen?",
          nl: "Hoe heet een groep leeuwen?"
        },
        options: [
          { en: "Pride", es: "Manada", de: "Rudel", nl: "Troep" },
          { en: "Pack", es: "Jauría", de: "Meute", nl: "Roedel" },
          { en: "Herd", es: "Rebaño", de: "Herde", nl: "Kudde" },
          { en: "Flock", es: "Bandada", de: "Schwarm", nl: "Zwerm" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which bird cannot fly but is the fastest runner?",
          es: "¿Qué ave no puede volar pero es la corredora más rápida?",
          de: "Welcher Vogel kann nicht fliegen, aber ist der schnellste Läufer?",
          nl: "Welke vogel kan niet vliegen maar is de snelste loper?"
        },
        options: [
          { en: "Ostrich", es: "Avestruz", de: "Strauß", nl: "Struisvogel" },
          { en: "Penguin", es: "Pingüino", de: "Pinguin", nl: "Pinguïn" },
          { en: "Emu", es: "Emú", de: "Emu", nl: "Emoe" },
          { en: "Kiwi", es: "Kiwi", de: "Kiwi", nl: "Kiwi" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21 - February 21st: Mathematics & Numbers
    day21: [
      {
        question: {
          en: "What is the value of pi (π) to two decimal places?",
          es: "¿Cuál es el valor de pi (π) con dos decimales?",
          de: "Was ist der Wert von Pi (π) auf zwei Dezimalstellen?",
          nl: "Wat is de waarde van pi (π) tot twee decimalen?"
        },
        options: [
          { en: "3.14", es: "3.14", de: "3.14", nl: "3.14" },
          { en: "3.16", es: "3.16", de: "3.16", nl: "3.16" },
          { en: "3.12", es: "3.12", de: "3.12", nl: "3.12" },
          { en: "3.18", es: "3.18", de: "3.18", nl: "3.18" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 15% of 200?",
          es: "¿Cuánto es el 15% de 200?",
          de: "Was sind 15% von 200?",
          nl: "Hoeveel is 15% van 200?"
        },
        options: [
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "25", es: "25", de: "25", nl: "25" },
          { en: "35", es: "35", de: "35", nl: "35" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the square root of 64?",
          es: "¿Cuál es la raíz cuadrada de 64?",
          de: "Was ist die Quadratwurzel von 64?",
          nl: "Wat is de vierkantswortel van 64?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "9", es: "9", de: "9", nl: "9" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many sides does a hexagon have?",
          es: "¿Cuántos lados tiene un hexágono?",
          de: "Wie viele Seiten hat ein Sechseck?",
          nl: "Hoeveel zijden heeft een zeshoek?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is 12 × 11?",
          es: "¿Cuánto es 12 × 11?",
          de: "Was ist 12 × 11?",
          nl: "Hoeveel is 12 × 11?"
        },
        options: [
          { en: "132", es: "132", de: "132", nl: "132" },
          { en: "122", es: "122", de: "122", nl: "122" },
          { en: "142", es: "142", de: "142", nl: "142" },
          { en: "121", es: "121", de: "121", nl: "121" }
        ],
        correctIndex: 0
      }
    ],

    // Day 22 - February 22nd: Environment & Nature
    day22: [
      {
        question: {
          en: "What gas do plants absorb from the atmosphere during photosynthesis?",
          es: "¿Qué gas absorben las plantas de la atmósfera durante la fotosíntesis?",
          de: "Welches Gas absorbieren Pflanzen aus der Atmosphäre während der Photosynthese?",
          nl: "Welk gas absorberen planten uit de atmosfeer tijdens fotosynthese?"
        },
        options: [
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Methane", es: "Metano", de: "Methan", nl: "Methaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest rainforest in the world?",
          es: "¿Cuál es la selva tropical más grande del mundo?",
          de: "Was ist der größte Regenwald der Welt?",
          nl: "Wat is het grootste regenwoud ter wereld?"
        },
        options: [
          { en: "Amazon rainforest", es: "Selva amazónica", de: "Amazonas-Regenwald", nl: "Amazone regenwoud" },
          { en: "Congo rainforest", es: "Selva del Congo", de: "Kongo-Regenwald", nl: "Congo regenwoud" },
          { en: "Borneo rainforest", es: "Selva de Borneo", de: "Borneo-Regenwald", nl: "Borneo regenwoud" },
          { en: "Madagascar rainforest", es: "Selva de Madagascar", de: "Madagaskar-Regenwald", nl: "Madagaskar regenwoud" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What percentage of Earth's surface is covered by water?",
          es: "¿Qué porcentaje de la superficie terrestre está cubierto por agua?",
          de: "Welcher Prozentsatz der Erdoberfläche ist von Wasser bedeckt?",
          nl: "Welk percentage van het aardoppervlak is bedekt door water?"
        },
        options: [
          { en: "About 71%", es: "Alrededor del 71%", de: "Etwa 71%", nl: "Ongeveer 71%" },
          { en: "About 65%", es: "Alrededor del 65%", de: "Etwa 65%", nl: "Ongeveer 65%" },
          { en: "About 80%", es: "Alrededor del 80%", de: "Etwa 80%", nl: "Ongeveer 80%" },
          { en: "About 60%", es: "Alrededor del 60%", de: "Etwa 60%", nl: "Ongeveer 60%" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What causes acid rain?",
          es: "¿Qué causa la lluvia ácida?",
          de: "Was verursacht sauren Regen?",
          nl: "Wat veroorzaakt zure regen?"
        },
        options: [
          { en: "Air pollution", es: "Contaminación del aire", de: "Luftverschmutzung", nl: "Luchtvervuiling" },
          { en: "Ocean pollution", es: "Contaminación oceánica", de: "Meeresverschmutzung", nl: "Oceaanvervuiling" },
          { en: "Soil contamination", es: "Contaminación del suelo", de: "Bodenkontamination", nl: "Bodemverontreiniging" },
          { en: "Light pollution", es: "Contaminación lumínica", de: "Lichtverschmutzung", nl: "Lichtvervuiling" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which renewable energy source uses the sun?",
          es: "¿Qué fuente de energía renovable utiliza el sol?",
          de: "Welche erneuerbare Energiequelle nutzt die Sonne?",
          nl: "Welke hernieuwbare energiebron gebruikt de zon?"
        },
        options: [
          { en: "Solar power", es: "Energía solar", de: "Solarenergie", nl: "Zonne-energie" },
          { en: "Wind power", es: "Energía eólica", de: "Windenergie", nl: "Windenergie" },
          { en: "Hydroelectric power", es: "Energía hidroeléctrica", de: "Wasserkraft", nl: "Waterkracht" },
          { en: "Geothermal power", es: "Energía geotérmica", de: "Geothermie", nl: "Geothermische energie" }
        ],
        correctIndex: 0
      }
    ],

    // Day 23 - February 23rd: Sports & Athletics
    day23: [
      {
        question: {
          en: "How many players are on a basketball team on the court at one time?",
          es: "¿Cuántos jugadores hay en un equipo de baloncesto en la cancha al mismo tiempo?",
          de: "Wie viele Spieler sind gleichzeitig bei einem Basketballteam auf dem Platz?",
          nl: "Hoeveel spelers zijn er tegelijk op het veld bij een basketbalteam?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which sport would you perform a slam dunk?",
          es: "¿En qué deporte realizarías un slam dunk?",
          de: "In welcher Sportart würde man einen Slam Dunk ausführen?",
          nl: "In welke sport zou je een slam dunk uitvoeren?"
        },
        options: [
          { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" },
          { en: "Volleyball", es: "Voleibol", de: "Volleyball", nl: "Volleybal" },
          { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
          { en: "Soccer", es: "Fútbol", de: "Fußball", nl: "Voetbal" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How often are the Summer Olympic Games held?",
          es: "¿Con qué frecuencia se celebran los Juegos Olímpicos de Verano?",
          de: "Wie oft finden die Olympischen Sommerspiele statt?",
          nl: "Hoe vaak worden de Olympische Zomerspelen gehouden?"
        },
        options: [
          { en: "Every 4 years", es: "Cada 4 años", de: "Alle 4 Jahre", nl: "Elke 4 jaar" },
          { en: "Every 2 years", es: "Cada 2 años", de: "Alle 2 Jahre", nl: "Elke 2 jaar" },
          { en: "Every 3 years", es: "Cada 3 años", de: "Alle 3 Jahre", nl: "Elke 3 jaar" },
          { en: "Every 5 years", es: "Cada 5 años", de: "Alle 5 Jahre", nl: "Elke 5 jaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the maximum score in ten-pin bowling?",
          es: "¿Cuál es la puntuación máxima en bolos de diez pinos?",
          de: "Was ist die maximale Punktzahl beim Zehn-Pin-Bowling?",
          nl: "Wat is de maximale score bij tien-pin bowling?"
        },
        options: [
          { en: "300", es: "300", de: "300", nl: "300" },
          { en: "250", es: "250", de: "250", nl: "250" },
          { en: "200", es: "200", de: "200", nl: "200" },
          { en: "350", es: "350", de: "350", nl: "350" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In golf, what is one stroke under par called?",
          es: "En golf, ¿cómo se llama un golpe menos del par?",
          de: "Wie nennt man im Golf einen Schlag unter Par?",
          nl: "Hoe heet het in golf als je één slag onder par speelt?"
        },
        options: [
          { en: "Birdie", es: "Birdie", de: "Birdie", nl: "Birdie" },
          { en: "Eagle", es: "Eagle", de: "Eagle", nl: "Eagle" },
          { en: "Bogey", es: "Bogey", de: "Bogey", nl: "Bogey" },
          { en: "Albatross", es: "Albatros", de: "Albatros", nl: "Albatros" }
        ],
        correctIndex: 0
      }
    ],

    // Day 24 - February 24th: Movies & Cinema
    day24: [
      {
        question: {
          en: "Who directed the movie 'Jaws'?",
          es: "¿Quién dirigió la película 'Tiburón'?",
          de: "Wer führte Regie bei dem Film 'Der weiße Hai'?",
          nl: "Wie regisseerde de film 'Jaws'?"
        },
        options: [
          { en: "Steven Spielberg", es: "Steven Spielberg", de: "Steven Spielberg", nl: "Steven Spielberg" },
          { en: "George Lucas", es: "George Lucas", de: "George Lucas", nl: "George Lucas" },
          { en: "Martin Scorsese", es: "Martin Scorsese", de: "Martin Scorsese", nl: "Martin Scorsese" },
          { en: "Francis Ford Coppola", es: "Francis Ford Coppola", de: "Francis Ford Coppola", nl: "Francis Ford Coppola" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which movie won the Academy Award for Best Picture in 1994?",
          es: "¿Qué película ganó el Premio de la Academia a la Mejor Película en 1994?",
          de: "Welcher Film gewann 1994 den Oscar für den besten Film?",
          nl: "Welke film won de Academy Award voor Beste Film in 1994?"
        },
        options: [
          { en: "Forrest Gump", es: "Forrest Gump", de: "Forrest Gump", nl: "Forrest Gump" },
          { en: "The Lion King", es: "El Rey León", de: "Der König der Löwen", nl: "De Leeuwenkoning" },
          { en: "Pulp Fiction", es: "Pulp Fiction", de: "Pulp Fiction", nl: "Pulp Fiction" },
          { en: "The Shawshank Redemption", es: "Cadena perpetua", de: "Die Verurteilten", nl: "The Shawshank Redemption" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the highest-grossing movie of all time?",
          es: "¿Cuál es la película más taquillera de todos los tiempos?",
          de: "Was ist der erfolgreichste Film aller Zeiten?",
          nl: "Wat is de meest winstgevende film aller tijden?"
        },
        options: [
          { en: "Avatar", es: "Avatar", de: "Avatar", nl: "Avatar" },
          { en: "Titanic", es: "Titanic", de: "Titanic", nl: "Titanic" },
          { en: "Avengers: Endgame", es: "Avengers: Endgame", de: "Avengers: Endgame", nl: "Avengers: Endgame" },
          { en: "Star Wars", es: "Star Wars", de: "Star Wars", nl: "Star Wars" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which actor played the Joker in 'The Dark Knight'?",
          es: "¿Qué actor interpretó al Joker en 'El Caballero de la Noche'?",
          de: "Welcher Schauspieler spielte den Joker in 'The Dark Knight'?",
          nl: "Welke acteur speelde de Joker in 'The Dark Knight'?"
        },
        options: [
          { en: "Heath Ledger", es: "Heath Ledger", de: "Heath Ledger", nl: "Heath Ledger" },
          { en: "Joaquin Phoenix", es: "Joaquin Phoenix", de: "Joaquin Phoenix", nl: "Joaquin Phoenix" },
          { en: "Jack Nicholson", es: "Jack Nicholson", de: "Jack Nicholson", nl: "Jack Nicholson" },
          { en: "Jared Leto", es: "Jared Leto", de: "Jared Leto", nl: "Jared Leto" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In which movie would you hear the phrase 'May the Force be with you'?",
          es: "¿En qué película escucharías la frase 'Que la Fuerza te acompañe'?",
          de: "In welchem Film würde man den Satz 'Möge die Macht mit dir sein' hören?",
          nl: "In welke film zou je de zin 'May the Force be with you' horen?"
        },
        options: [
          { en: "Star Wars", es: "Star Wars", de: "Star Wars", nl: "Star Wars" },
          { en: "Star Trek", es: "Star Trek", de: "Star Trek", nl: "Star Trek" },
          { en: "Guardians of the Galaxy", es: "Guardianes de la Galaxia", de: "Guardians of the Galaxy", nl: "Guardians of the Galaxy" },
          { en: "Blade Runner", es: "Blade Runner", de: "Blade Runner", nl: "Blade Runner" }
        ],
        correctIndex: 0
      }
    ],

    // Day 25 - February 25th: Inventions & Discoveries
    day25: [
      {
        question: {
          en: "Who invented the telephone?",
          es: "¿Quién inventó el teléfono?",
          de: "Wer erfand das Telefon?",
          nl: "Wie heeft de telefoon uitgevonden?"
        },
        options: [
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What did Thomas Edison invent that revolutionized lighting?",
          es: "¿Qué inventó Thomas Edison que revolucionó la iluminación?",
          de: "Was erfand Thomas Edison, das die Beleuchtung revolutionierte?",
          nl: "Wat vond Thomas Edison uit dat de verlichting revolutioneerde?"
        },
        options: [
          { en: "Light bulb", es: "Bombilla", de: "Glühbirne", nl: "Gloeilamp" },
          { en: "Candle", es: "Vela", de: "Kerze", nl: "Kaars" },
          { en: "Gas lamp", es: "Lámpara de gas", de: "Gaslampe", nl: "Gaslamp" },
          { en: "Oil lamp", es: "Lámpara de aceite", de: "Öllampe", nl: "Olielamp" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who discovered penicillin?",
          es: "¿Quién descubrió la penicilina?",
          de: "Wer entdeckte Penicillin?",
          nl: "Wie ontdekte penicilline?"
        },
        options: [
          { en: "Alexander Fleming", es: "Alexander Fleming", de: "Alexander Fleming", nl: "Alexander Fleming" },
          { en: "Louis Pasteur", es: "Louis Pasteur", de: "Louis Pasteur", nl: "Louis Pasteur" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Jonas Salk", es: "Jonas Salk", de: "Jonas Salk", nl: "Jonas Salk" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What did the Wright brothers invent?",
          es: "¿Qué inventaron los hermanos Wright?",
          de: "Was erfanden die Gebrüder Wright?",
          nl: "Wat vonden de gebroeders Wright uit?"
        },
        options: [
          { en: "Airplane", es: "Avión", de: "Flugzeug", nl: "Vliegtuig" },
          { en: "Helicopter", es: "Helicóptero", de: "Hubschrauber", nl: "Helikopter" },
          { en: "Bicycle", es: "Bicicleta", de: "Fahrrad", nl: "Fiets" },
          { en: "Automobile", es: "Automóvil", de: "Automobil", nl: "Auto" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Who invented the printing press?",
          es: "¿Quién inventó la imprenta?",
          de: "Wer erfand die Druckerpresse?",
          nl: "Wie vond de drukpers uit?"
        },
        options: [
          { en: "Johannes Gutenberg", es: "Johannes Gutenberg", de: "Johannes Gutenberg", nl: "Johannes Gutenberg" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" }
        ],
        correctIndex: 0
      }
    ],

    // Day 26 - February 26th: World Capitals & Countries
    day26: [
      {
        question: {
          en: "What is the capital of Japan?",
          es: "¿Cuál es la capital de Japón?",
          de: "Was ist die Hauptstadt von Japan?",
          nl: "Wat is de hoofdstad van Japan?"
        },
        options: [
          { en: "Tokyo", es: "Tokio", de: "Tokio", nl: "Tokyo" },
          { en: "Osaka", es: "Osaka", de: "Osaka", nl: "Osaka" },
          { en: "Kyoto", es: "Kioto", de: "Kyoto", nl: "Kyoto" },
          { en: "Nagoya", es: "Nagoya", de: "Nagoya", nl: "Nagoya" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of Brazil?",
          es: "¿Cuál es la capital de Brasil?",
          de: "Was ist die Hauptstadt von Brasilien?",
          nl: "Wat is de hoofdstad van Brazilië?"
        },
        options: [
          { en: "Brasília", es: "Brasília", de: "Brasília", nl: "Brasília" },
          { en: "Rio de Janeiro", es: "Río de Janeiro", de: "Rio de Janeiro", nl: "Rio de Janeiro" },
          { en: "São Paulo", es: "São Paulo", de: "São Paulo", nl: "São Paulo" },
          { en: "Salvador", es: "Salvador", de: "Salvador", nl: "Salvador" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which country has the most time zones?",
          es: "¿Qué país tiene más zonas horarias?",
          de: "Welches Land hat die meisten Zeitzonen?",
          nl: "Welk land heeft de meeste tijdzones?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the smallest country in the world?",
          es: "¿Cuál es el país más pequeño del mundo?",
          de: "Was ist das kleinste Land der Welt?",
          nl: "Wat is het kleinste land ter wereld?"
        },
        options: [
          { en: "Vatican City", es: "Ciudad del Vaticano", de: "Vatikanstadt", nl: "Vaticaanstad" },
          { en: "Monaco", es: "Mónaco", de: "Monaco", nl: "Monaco" },
          { en: "San Marino", es: "San Marino", de: "San Marino", nl: "San Marino" },
          { en: "Liechtenstein", es: "Liechtenstein", de: "Liechtenstein", nl: "Liechtenstein" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the capital of South Africa?",
          es: "¿Cuál es la capital de Sudáfrica?",
          de: "Was ist die Hauptstadt von Südafrika?",
          nl: "Wat is de hoofdstad van Zuid-Afrika?"
        },
        options: [
          { en: "Cape Town (legislative)", es: "Ciudad del Cabo (legislativa)", de: "Kapstadt (legislativ)", nl: "Kaapstad (wetgevend)" },
          { en: "Johannesburg", es: "Johannesburgo", de: "Johannesburg", nl: "Johannesburg" },
          { en: "Durban", es: "Durban", de: "Durban", nl: "Durban" },
          { en: "Port Elizabeth", es: "Port Elizabeth", de: "Port Elizabeth", nl: "Port Elizabeth" }
        ],
        correctIndex: 0
      }
    ],

    // Day 27 - February 27th: Natural Wonders
    day27: [
      {
        question: {
          en: "What is the tallest mountain in the world?",
          es: "¿Cuál es la montaña más alta del mundo?",
          de: "Was ist der höchste Berg der Welt?",
          nl: "Wat is de hoogste berg ter wereld?"
        },
        options: [
          { en: "Mount Everest", es: "Monte Everest", de: "Mount Everest", nl: "Mount Everest" },
          { en: "K2", es: "K2", de: "K2", nl: "K2" },
          { en: "Mount Kilimanjaro", es: "Monte Kilimanjaro", de: "Mount Kilimanjaro", nl: "Mount Kilimanjaro" },
          { en: "Mount McKinley", es: "Monte McKinley", de: "Mount McKinley", nl: "Mount McKinley" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which is the deepest ocean trench?",
          es: "¿Cuál es la fosa oceánica más profunda?",
          de: "Welcher ist der tiefste Meeresgraben?",
          nl: "Welke is de diepste oceaangeul?"
        },
        options: [
          { en: "Mariana Trench", es: "Fosa de las Marianas", de: "Marianengraben", nl: "Marianentrog" },
          { en: "Puerto Rico Trench", es: "Fosa de Puerto Rico", de: "Puerto-Rico-Graben", nl: "Puerto Rico-trog" },
          { en: "Java Trench", es: "Fosa de Java", de: "Java-Graben", nl: "Java-trog" },
          { en: "Peru-Chile Trench", es: "Fosa de Perú-Chile", de: "Peru-Chile-Graben", nl: "Peru-Chili-trog" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest desert in the world?",
          es: "¿Cuál es el desierto más grande del mundo?",
          de: "Was ist die größte Wüste der Welt?",
          nl: "Wat is de grootste woestijn ter wereld?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Sahara", es: "Sahara", de: "Sahara", nl: "Sahara" },
          { en: "Arabian Desert", es: "Desierto Arábigo", de: "Arabische Wüste", nl: "Arabische woestijn" },
          { en: "Gobi Desert", es: "Desierto de Gobi", de: "Wüste Gobi", nl: "Gobi-woestijn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which waterfall is the tallest in the world?",
          es: "¿Cuál es la cascada más alta del mundo?",
          de: "Welcher Wasserfall ist der höchste der Welt?",
          nl: "Welke waterval is de hoogste ter wereld?"
        },
        options: [
          { en: "Angel Falls", es: "Salto Ángel", de: "Angelfall", nl: "Angel Falls" },
          { en: "Niagara Falls", es: "Cataratas del Niágara", de: "Niagarafälle", nl: "Niagarawatervallen" },
          { en: "Victoria Falls", es: "Cataratas Victoria", de: "Victoriafälle", nl: "Victoriawatervallen" },
          { en: "Iguazu Falls", es: "Cataratas del Iguazú", de: "Iguaçu-Wasserfälle", nl: "Iguazu-watervallen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the largest coral reef system in the world?",
          es: "¿Cuál es el sistema de arrecifes de coral más grande del mundo?",
          de: "Was ist das größte Korallenriffsystem der Welt?",
          nl: "Wat is het grootste koraalrifsysteem ter wereld?"
        },
        options: [
          { en: "Great Barrier Reef", es: "Gran Barrera de Coral", de: "Great Barrier Reef", nl: "Great Barrier Reef" },
          { en: "Caribbean Reef", es: "Arrecife del Caribe", de: "Karibisches Riff", nl: "Caribisch rif" },
          { en: "Red Sea Reef", es: "Arrecife del Mar Rojo", de: "Rotes Meer Riff", nl: "Rode Zee rif" },
          { en: "Belize Barrier Reef", es: "Arrecife de Barrera de Belice", de: "Belize Barrier Reef", nl: "Belize barrièrerif" }
        ],
        correctIndex: 0
      }
    ],

    // Day 28 - February 28th: February Wrap-up & General Knowledge
    day28: [
      {
        question: {
          en: "February is the only month that can have how many days?",
          es: "Febrero es el único mes que puede tener ¿cuántos días?",
          de: "Februar ist der einzige Monat, der wie viele Tage haben kann?",
          nl: "Februari is de enige maand die hoeveel dagen kan hebben?"
        },
        options: [
          { en: "28 or 29", es: "28 o 29", de: "28 oder 29", nl: "28 of 29" },
          { en: "30 or 31", es: "30 o 31", de: "30 oder 31", nl: "30 of 31" },
          { en: "Only 28", es: "Solo 28", de: "Nur 28", nl: "Alleen 28" },
          { en: "Only 29", es: "Solo 29", de: "Nur 29", nl: "Alleen 29" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens every four years in February?",
          es: "¿Qué pasa cada cuatro años en febrero?",
          de: "Was passiert alle vier Jahre im Februar?",
          nl: "Wat gebeurt er elke vier jaar in februari?"
        },
        options: [
          { en: "Leap day (February 29th)", es: "Día bisiesto (29 de febrero)", de: "Schalttag (29. Februar)", nl: "Schrikkeldag (29 februari)" },
          { en: "Summer Olympics", es: "Juegos Olímpicos de Verano", de: "Olympische Sommerspiele", nl: "Olympische Zomerspelen" },
          { en: "World Cup", es: "Copa del Mundo", de: "Weltmeisterschaft", nl: "Wereldkampioenschap" },
          { en: "Presidential elections", es: "Elecciones presidenciales", de: "Präsidentschaftswahlen", nl: "Presidentsverkiezingen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which zodiac signs occur in February?",
          es: "¿Qué signos zodiacales ocurren en febrero?",
          de: "Welche Sternzeichen kommen im Februar vor?",
          nl: "Welke sterrenbeelden komen voor in februari?"
        },
        options: [
          { en: "Aquarius and Pisces", es: "Acuario y Piscis", de: "Wassermann und Fische", nl: "Waterman en Vissen" },
          { en: "Capricorn and Aquarius", es: "Capricornio y Acuario", de: "Steinbock und Wassermann", nl: "Steenbok en Waterman" },
          { en: "Pisces and Aries", es: "Piscis y Aries", de: "Fische und Widder", nl: "Vissen en Ram" },
          { en: "Aquarius and Aries", es: "Acuario y Aries", de: "Wassermann und Widder", nl: "Waterman en Ram" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the most common number of days in February?",
          es: "¿Cuál es el número más común de días en febrero?",
          de: "Was ist die häufigste Anzahl von Tagen im Februar?",
          nl: "Wat is het meest voorkomende aantal dagen in februari?"
        },
        options: [
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "29", es: "29", de: "29", nl: "29" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "31", es: "31", de: "31", nl: "31" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "February comes from the Latin word 'februarius', meaning what?",
          es: "Febrero viene de la palabra latina 'februarius', que significa ¿qué?",
          de: "Februar kommt vom lateinischen Wort 'februarius', was bedeutet das?",
          nl: "Februari komt van het Latijnse woord 'februarius', wat betekent dat?"
        },
        options: [
          { en: "Purification", es: "Purificación", de: "Reinigung", nl: "Zuivering" },
          { en: "Cold", es: "Frío", de: "Kalt", nl: "Koud" },
          { en: "Love", es: "Amor", de: "Liebe", nl: "Liefde" },
          { en: "Short", es: "Corto", de: "Kurz", nl: "Kort" }
        ],
        correctIndex: 0
      }
    ]

    // Total: 28 days × 5 questions = 140 questions
  };

  // Export February challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('february', februaryChallenges);
  }

})();