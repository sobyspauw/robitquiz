(function() {
    const level5 = {
        name: {
            en: "Wars and Battles",
            es: "Guerras y Batallas",
            de: "Kriege und Schlachten",
            nl: "Oorlogen en Veldslagen"
        },
        questions: [
            {
                question: {
                    en: "Why do countries sometimes have wars?",
                    es: "¿Por qué los países a veces tienen guerras?",
                    de: "Warum haben Länder manchmal Kriege?",
                    nl: "Waarom hebben landen soms oorlogen?"
                },
                options: [
                    { en: "They disagree about land or rules", es: "No están de acuerdo sobre tierras o reglas", de: "Sie sind sich über Land oder Regeln uneinig", nl: "Ze zijn het oneens over land of regels" },
                    { en: "They are bored", es: "Están aburridos", de: "Sie sind gelangweilt", nl: "Ze vervelen zich" },
                    { en: "They want to play", es: "Quieren jugar", de: "Sie wollen spielen", nl: "Ze willen spelen" },
                    { en: "They don't like food", es: "No les gusta la comida", de: "Sie mögen das Essen nicht", nl: "Ze houden niet van eten" }
                ],
                correct: 0,
                explanation: {
                    en: "Wars happen when countries can't agree peacefully about important things like territory, resources, or how people should be governed. While wars are serious and sad events, learning about them helps us understand why working together and solving problems peacefully is so important.",
                    es: "Las guerras ocurren cuando los países no pueden ponerse de acuerdo pacíficamente sobre cosas importantes como territorio, recursos, o cómo deben ser gobernadas las personas. Aunque las guerras son eventos serios y tristes, aprender sobre ellas nos ayuda a entender por qué trabajar juntos y resolver problemas pacíficamente es tan importante.",
                    de: "Kriege passieren, wenn Länder sich nicht friedlich über wichtige Dinge wie Territorium, Ressourcen oder wie Menschen regiert werden sollen, einigen können. Obwohl Kriege ernste und traurige Ereignisse sind, hilft uns das Lernen über sie zu verstehen, warum Zusammenarbeit und friedliche Problemlösung so wichtig ist.",
                    nl: "Oorlogen gebeuren wanneer landen het niet vreedzaam eens kunnen worden over belangrijke dingen zoals grondgebied, hulpbronnen, of hoe mensen geregeerd moeten worden. Hoewel oorlogen ernstige en droevige gebeurtenissen zijn, helpt het leren erover ons te begrijpen waarom samenwerken en problemen vreedzaam oplossen zo belangrijk is."
                }
            },
            {
                question: {
                    en: "What do soldiers wear to protect themselves in battle?",
                    es: "¿Qué usan los soldados para protegerse en la batalla?",
                    de: "Was tragen Soldaten, um sich im Kampf zu schützen?",
                    nl: "Wat dragen soldaten om zichzelf te beschermen in de strijd?"
                },
                options: [
                    { en: "Armor and helmets", es: "Armadura y cascos", de: "Rüstung und Helme", nl: "Harnas en helmen" },
                    { en: "Party clothes", es: "Ropa de fiesta", de: "Partykleidung", nl: "Feestkleding" },
                    { en: "Swimming suits", es: "Trajes de baño", de: "Badeanzüge", nl: "Zwempakken" },
                    { en: "Pajamas", es: "Pijamas", de: "Schlafanzüge", nl: "Pyjama's" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the brave girl who helped save France long ago?",
                    es: "¿Quién fue la niña valiente que ayudó a salvar Francia hace mucho tiempo?",
                    de: "Wer war das mutige Mädchen, das vor langer Zeit dabei half, Frankreich zu retten?",
                    nl: "Wie was het moedige meisje dat lang geleden hielp Frankrijk te redden?"
                },
                options: [
                    { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" },
                    { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
                    { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" },
                    { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a castle built to do?",
                    es: "¿Para qué se construye un castillo?",
                    de: "Wofür wird eine Burg gebaut?",
                    nl: "Waarvoor wordt een kasteel gebouwd?"
                },
                options: [
                    { en: "Protect people from enemies", es: "Proteger a la gente de los enemigos", de: "Menschen vor Feinden schützen", nl: "Mensen beschermen tegen vijanden" },
                    { en: "Store food", es: "Almacenar comida", de: "Essen lagern", nl: "Eten opslaan" },
                    { en: "Hold parties", es: "Hacer fiestas", de: "Partys feiern", nl: "Feestjes vieren" },
                    { en: "Keep animals", es: "Guardar animales", de: "Tiere halten", nl: "Dieren houden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What weapon did knights use in battle?",
                    es: "¿Qué arma usaban los caballeros en la batalla?",
                    de: "Welche Waffe benutzten Ritter im Kampf?",
                    nl: "Welk wapen gebruikten ridders in de strijd?"
                },
                options: [
                    { en: "Swords and shields", es: "Espadas y escudos", de: "Schwerter und Schilde", nl: "Zwaarden en schilden" },
                    { en: "Water guns", es: "Pistolas de agua", de: "Wasserpistolen", nl: "Waterpistolen" },
                    { en: "Toy swords", es: "Espadas de juguete", de: "Spielzeugschwerter", nl: "Speelgoedzwaarden" },
                    { en: "Sticks", es: "Palos", de: "Stöcke", nl: "Stokken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the famous king who fought in the Crusades?",
                    es: "¿Quién fue el famoso rey que luchó en las Cruzadas?",
                    de: "Wer war der berühmte König, der in den Kreuzzügen kämpfte?",
                    nl: "Wie was de beroemde koning die vocht in de Kruistochten?"
                },
                options: [
                    { en: "Richard the Lionheart", es: "Ricardo Corazón de León", de: "Richard Löwenherz", nl: "Richard Leeuwenhart" },
                    { en: "King Arthur", es: "Rey Arturo", de: "König Artus", nl: "Koning Arthur" },
                    { en: "King Henry", es: "Rey Enrique", de: "König Heinrich", nl: "Koning Hendrik" },
                    { en: "King John", es: "Rey Juan", de: "König John", nl: "Koning Jan" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the long war between England and France called?",
                    es: "¿Cómo se llamó la larga guerra entre Inglaterra y Francia?",
                    de: "Wie hieß der lange Krieg zwischen England und Frankreich?",
                    nl: "Hoe heette de lange oorlog tussen Engeland en Frankrijk?"
                },
                options: [
                    { en: "Hundred Years' War", es: "Guerra de los Cien Años", de: "Hundertjähriger Krieg", nl: "Honderdjarige Oorlog" },
                    { en: "World War", es: "Guerra Mundial", de: "Weltkrieg", nl: "Wereldoorlog" },
                    { en: "Civil War", es: "Guerra Civil", de: "Bürgerkrieg", nl: "Burgeroorlog" },
                    { en: "Cold War", es: "Guerra Fría", de: "Kalter Krieg", nl: "Koude Oorlog" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call people who help injured soldiers?",
                    es: "¿Cómo llamamos a las personas que ayudan a los soldados heridos?",
                    de: "Wie nennen wir Menschen, die verletzten Soldaten helfen?",
                    nl: "Hoe noemen we mensen die gewonde soldaten helpen?"
                },
                options: [
                    { en: "Medics or nurses", es: "Médicos o enfermeros", de: "Sanitäter oder Krankenschwestern", nl: "Medici of verplegers" },
                    { en: "Cooks", es: "Cocineros", de: "Köche", nl: "Koks" },
                    { en: "Teachers", es: "Maestros", de: "Lehrer", nl: "Leraren" },
                    { en: "Musicians", es: "Músicos", de: "Musiker", nl: "Muzikanten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happened at the famous Battle of Hastings?",
                    es: "¿Qué pasó en la famosa Batalla de Hastings?",
                    de: "Was passierte in der berühmten Schlacht von Hastings?",
                    nl: "Wat gebeurde er in de beroemde Slag bij Hastings?"
                },
                options: [
                    { en: "William conquered England", es: "Guillermo conquistó Inglaterra", de: "Wilhelm eroberte England", nl: "Willem veroverde Engeland" },
                    { en: "A party was held", es: "Se celebró una fiesta", de: "Eine Party wurde gefeiert", nl: "Er werd een feest gehouden" },
                    { en: "A castle was built", es: "Se construyó un castillo", de: "Eine Burg wurde gebaut", nl: "Er werd een kasteel gebouwd" },
                    { en: "A treasure was found", es: "Se encontró un tesoro", de: "Ein Schatz wurde gefunden", nl: "Er werd een schat gevonden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the famous Spartan king who fought at Thermopylae?",
                    es: "¿Quién fue el famoso rey espartano que luchó en las Termópilas?",
                    de: "Wer war der berühmte Spartaner-König, der bei den Thermopylen kämpfte?",
                    nl: "Wie was de beroemde Spartaanse koning die vocht bij Thermopylae?"
                },
                options: [
                    { en: "Leonidas", es: "Leónidas", de: "Leonidas", nl: "Leonidas" },
                    { en: "Alexander", es: "Alejandro", de: "Alexander", nl: "Alexander" },
                    { en: "Perseus", es: "Perseo", de: "Perseus", nl: "Perseus" },
                    { en: "Achilles", es: "Aquiles", de: "Achilles", nl: "Achilles" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do soldiers use to communicate in battle?",
                    es: "¿Qué usan los soldados para comunicarse en la batalla?",
                    de: "Was benutzen Soldaten, um im Kampf zu kommunizieren?",
                    nl: "Wat gebruiken soldaten om te communiceren in de strijd?"
                },
                options: [
                    { en: "Drums and horns", es: "Tambores y cuernos", de: "Trommeln und Hörner", nl: "Drums en hoorns" },
                    { en: "Telephones", es: "Teléfonos", de: "Telefone", nl: "Telefoons" },
                    { en: "Computers", es: "Computadoras", de: "Computer", nl: "Computers" },
                    { en: "Television", es: "Televisión", de: "Fernsehen", nl: "Televisie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What animal did knights ride into battle?",
                    es: "¿Qué animal montaban los caballeros en la batalla?",
                    de: "Welches Tier ritten Ritter in den Kampf?",
                    nl: "Welk dier bereden ridders in de strijd?"
                },
                options: [
                    { en: "Horses", es: "Caballos", de: "Pferde", nl: "Paarden" },
                    { en: "Elephants", es: "Elefantes", de: "Elefanten", nl: "Olifanten" },
                    { en: "Camels", es: "Camellos", de: "Kamele", nl: "Kamelen" },
                    { en: "Bears", es: "Osos", de: "Bären", nl: "Beren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the young French woman who led armies against the English?",
                    es: "¿Quién fue la joven francesa que dirigió ejércitos contra los ingleses?",
                    de: "Wer war die junge französische Frau, die Armeen gegen die Engländer führte?",
                    nl: "Wie was de jonge Franse vrouw die legers leidde tegen de Engelsen?"
                },
                options: [
                    { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" },
                    { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
                    { en: "Catherine de Medici", es: "Catalina de Médici", de: "Katharina von Medici", nl: "Catharina de' Medici" },
                    { en: "Brigitte Bardot", es: "Brigitte Bardot", de: "Brigitte Bardot", nl: "Brigitte Bardot" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a fight between two knights on horseback?",
                    es: "¿Cómo llamamos a una pelea entre dos caballeros a caballo?",
                    de: "Wie nennen wir einen Kampf zwischen zwei Rittern zu Pferde?",
                    nl: "Hoe noemen we een gevecht tussen twee ridders te paard?"
                },
                options: [
                    { en: "Joust", es: "Justa", de: "Turnier", nl: "Steekspel" },
                    { en: "Race", es: "Carrera", de: "Rennen", nl: "Race" },
                    { en: "Dance", es: "Baile", de: "Tanz", nl: "Dans" },
                    { en: "Game", es: "Juego", de: "Spiel", nl: "Spel" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What famous battle involved a wooden horse?",
                    es: "¿Qué famosa batalla involucró un caballo de madera?",
                    de: "Welche berühmte Schlacht beinhaltete ein hölzernes Pferd?",
                    nl: "Welke beroemde slag betrof een houten paard?"
                },
                options: [
                    { en: "Troy", es: "Troya", de: "Troja", nl: "Troje" },
                    { en: "Marathon", es: "Maratón", de: "Marathon", nl: "Marathon" },
                    { en: "Hastings", es: "Hastings", de: "Hastings", nl: "Hastings" },
                    { en: "Waterloo", es: "Waterloo", de: "Waterloo", nl: "Waterloo" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the great war that ended slavery in America?",
                    es: "¿Cuál fue la gran guerra que terminó la esclavitud en América?",
                    de: "Was war der große Krieg, der die Sklaverei in Amerika beendete?",
                    nl: "Wat was de grote oorlog die de slavernij in Amerika beëindigde?"
                },
                options: [
                    { en: "American Civil War", es: "Guerra Civil Americana", de: "Amerikanischer Bürgerkrieg", nl: "Amerikaanse Burgeroorlog" },
                    { en: "Revolutionary War", es: "Guerra Revolucionaria", de: "Revolutionskrieg", nl: "Revolutionaire Oorlog" },
                    { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
                    { en: "War of 1812", es: "Guerra de 1812", de: "Krieg von 1812", nl: "Oorlog van 1812" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the famous general who crossed the Alps with elephants?",
                    es: "¿Quién fue el famoso general que cruzó los Alpes con elefantes?",
                    de: "Wer war der berühmte General, der die Alpen mit Elefanten überquerte?",
                    nl: "Wie was de beroemde generaal die de Alpen overstak met olifanten?"
                },
                options: [
                    { en: "Hannibal", es: "Aníbal", de: "Hannibal", nl: "Hannibal" },
                    { en: "Caesar", es: "César", de: "Caesar", nl: "Caesar" },
                    { en: "Alexander", es: "Alejandro", de: "Alexander", nl: "Alexander" },
                    { en: "Napoleon", es: "Napoleón", de: "Napoleon", nl: "Napoleon" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the walls built around a city for protection?",
                    es: "¿Cómo llamamos a las murallas construidas alrededor de una ciudad para protección?",
                    de: "Wie nennen wir die Mauern, die zum Schutz um eine Stadt gebaut werden?",
                    nl: "Hoe noemen we de muren die rond een stad worden gebouwd ter bescherming?"
                },
                options: [
                    { en: "City walls", es: "Murallas de la ciudad", de: "Stadtmauern", nl: "Stadsmuren" },
                    { en: "Garden fences", es: "Cercas de jardín", de: "Gartenzäune", nl: "Tuinhekken" },
                    { en: "House walls", es: "Paredes de casa", de: "Hauswände", nl: "Huismuren" },
                    { en: "School walls", es: "Paredes de escuela", de: "Schulwände", nl: "Schoolmuren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the famous battle where Napoleon was finally defeated?",
                    es: "¿Cuál fue la famosa batalla donde Napoleón fue finalmente derrotado?",
                    de: "Was war die berühmte Schlacht, in der Napoleon endgültig besiegt wurde?",
                    nl: "Wat was de beroemde slag waar Napoleon uiteindelijk werd verslagen?"
                },
                options: [
                    { en: "Waterloo", es: "Waterloo", de: "Waterloo", nl: "Waterloo" },
                    { en: "Austerlitz", es: "Austerlitz", de: "Austerlitz", nl: "Austerlitz" },
                    { en: "Trafalgar", es: "Trafalgar", de: "Trafalgar", nl: "Trafalgar" },
                    { en: "Leipzig", es: "Leipzig", de: "Leipzig", nl: "Leipzig" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do soldiers do when they want to give up in battle?",
                    es: "¿Qué hacen los soldados cuando quieren rendirse en la batalla?",
                    de: "Was machen Soldaten, wenn sie im Kampf aufgeben wollen?",
                    nl: "Wat doen soldaten als ze zich willen overgeven in de strijd?"
                },
                options: [
                    { en: "Raise a white flag", es: "Levantan una bandera blanca", de: "Eine weiße Flagge hissen", nl: "Een witte vlag hijsen" },
                    { en: "Sing a song", es: "Cantan una canción", de: "Ein Lied singen", nl: "Een liedje zingen" },
                    { en: "Run away", es: "Huir", de: "Weglaufen", nl: "Wegrennen" },
                    { en: "Sit down", es: "Sentarse", de: "Sich hinsetzen", nl: "Gaan zitten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the brave Scottish hero who fought for independence?",
                    es: "¿Quién fue el valiente héroe escocés que luchó por la independencia?",
                    de: "Wer war der mutige schottische Held, der für die Unabhängigkeit kämpfte?",
                    nl: "Wie was de moedige Schotse held die vocht voor onafhankelijkheid?"
                },
                options: [
                    { en: "William Wallace", es: "William Wallace", de: "William Wallace", nl: "William Wallace" },
                    { en: "Robert Burns", es: "Robert Burns", de: "Robert Burns", nl: "Robert Burns" },
                    { en: "Sean Connery", es: "Sean Connery", de: "Sean Connery", nl: "Sean Connery" },
                    { en: "Ewan McGregor", es: "Ewan McGregor", de: "Ewan McGregor", nl: "Ewan McGregor" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What weapon shoots arrows?",
                    es: "¿Qué arma dispara flechas?",
                    de: "Welche Waffe schießt Pfeile?",
                    nl: "Welk wapen schiet pijlen?"
                },
                options: [
                    { en: "Bow", es: "Arco", de: "Bogen", nl: "Boog" },
                    { en: "Sword", es: "Espada", de: "Schwert", nl: "Zwaard" },
                    { en: "Shield", es: "Escudo", de: "Schild", nl: "Schild" },
                    { en: "Spear", es: "Lanza", de: "Speer", nl: "Speer" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a big group of soldiers fighting together?",
                    es: "¿Cómo llamamos a un gran grupo de soldados luchando juntos?",
                    de: "Wie nennen wir eine große Gruppe von Soldaten, die zusammen kämpfen?",
                    nl: "Hoe noemen we een grote groep soldaten die samen vechten?"
                },
                options: [
                    { en: "Army", es: "Ejército", de: "Armee", nl: "Leger" },
                    { en: "Team", es: "Equipo", de: "Team", nl: "Team" },
                    { en: "Club", es: "Club", de: "Verein", nl: "Club" },
                    { en: "Family", es: "Familia", de: "Familie", nl: "Familie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who leads an army in battle?",
                    es: "¿Quién lidera un ejército en la batalla?",
                    de: "Wer führt eine Armee im Kampf?",
                    nl: "Wie leidt een leger in de strijd?"
                },
                options: [
                    { en: "General", es: "General", de: "General", nl: "Generaal" },
                    { en: "Cook", es: "Cocinero", de: "Koch", nl: "Kok" },
                    { en: "Doctor", es: "Doctor", de: "Arzt", nl: "Dokter" },
                    { en: "Teacher", es: "Maestro", de: "Lehrer", nl: "Leraar" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What famous battle was fought between Greeks and Persians at Marathon?",
                    es: "¿Qué famosa batalla se libró entre griegos y persas en Maratón?",
                    de: "Welche berühmte Schlacht wurde zwischen Griechen und Persern bei Marathon ausgetragen?",
                    nl: "Welke beroemde slag werd gevochten tussen Grieken en Perzen bij Marathon?"
                },
                options: [
                    { en: "Battle of Marathon", es: "Batalla de Maratón", de: "Schlacht von Marathon", nl: "Slag bij Marathon" },
                    { en: "Battle of Troy", es: "Batalla de Troya", de: "Schlacht von Troja", nl: "Slag bij Troje" },
                    { en: "Battle of Thermopylae", es: "Batalla de las Termópilas", de: "Schlacht bei den Thermopylen", nl: "Slag bij Thermopylae" },
                    { en: "Battle of Salamis", es: "Batalla de Salamina", de: "Schlacht von Salamis", nl: "Slag bij Salamis" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the special clothes soldiers wear?",
                    es: "¿Cómo llamamos a la ropa especial que usan los soldados?",
                    de: "Wie nennen wir die besondere Kleidung, die Soldaten tragen?",
                    nl: "Hoe noemen we de speciale kleding die soldaten dragen?"
                },
                options: [
                    { en: "Uniform", es: "Uniforme", de: "Uniform", nl: "Uniform" },
                    { en: "Costume", es: "Disfraz", de: "Kostüm", nl: "Kostuum" },
                    { en: "Pajamas", es: "Pijamas", de: "Schlafanzug", nl: "Pyjama" },
                    { en: "Party dress", es: "Vestido de fiesta", de: "Partykleid", nl: "Feestjurk" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the name of the ship battle where Lord Nelson died?",
                    es: "¿Cuál fue el nombre de la batalla naval donde murió Lord Nelson?",
                    de: "Wie hieß die Seeschlacht, in der Lord Nelson starb?",
                    nl: "Wat was de naam van de zeeslag waarbij Lord Nelson stierf?"
                },
                options: [
                    { en: "Trafalgar", es: "Trafalgar", de: "Trafalgar", nl: "Trafalgar" },
                    { en: "Jutland", es: "Jutlandia", de: "Jütland", nl: "Jutland" },
                    { en: "Midway", es: "Midway", de: "Midway", nl: "Midway" },
                    { en: "Coral Sea", es: "Mar del Coral", de: "Korallenmeer", nl: "Koraalzee" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do castles have to protect the entrance?",
                    es: "¿Qué tienen los castillos para proteger la entrada?",
                    de: "Was haben Burgen, um den Eingang zu schützen?",
                    nl: "Wat hebben kastelen om de ingang te beschermen?"
                },
                options: [
                    { en: "Drawbridge", es: "Puente levadizo", de: "Zugbrücke", nl: "Ophaalbrug" },
                    { en: "Swimming pool", es: "Piscina", de: "Schwimmbad", nl: "Zwembad" },
                    { en: "Garden", es: "Jardín", de: "Garten", nl: "Tuin" },
                    { en: "Parking lot", es: "Estacionamiento", de: "Parkplatz", nl: "Parkeerplaats" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the Roman general who conquered Gaul?",
                    es: "¿Quién fue el general romano que conquistó la Galia?",
                    de: "Wer war der römische General, der Gallien eroberte?",
                    nl: "Wie was de Romeinse generaal die Gallië veroverde?"
                },
                options: [
                    { en: "Julius Caesar", es: "Julio César", de: "Julius Caesar", nl: "Julius Caesar" },
                    { en: "Augustus", es: "Augusto", de: "Augustus", nl: "Augustus" },
                    { en: "Nero", es: "Nerón", de: "Nero", nl: "Nero" },
                    { en: "Trajan", es: "Trajano", de: "Trajan", nl: "Trajanus" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens after a battle is won?",
                    es: "¿Qué pasa después de que se gana una batalla?",
                    de: "Was passiert, nachdem eine Schlacht gewonnen wurde?",
                    nl: "Wat gebeurt er nadat een slag is gewonnen?"
                },
                options: [
                    { en: "Peace talks begin", es: "Comienzan las conversaciones de paz", de: "Friedensgespräche beginnen", nl: "Vredesbesprekingen beginnen" },
                    { en: "Everyone goes shopping", es: "Todos van de compras", de: "Alle gehen einkaufen", nl: "Iedereen gaat winkelen" },
                    { en: "A party is held", es: "Se celebra una fiesta", de: "Eine Party wird gefeiert", nl: "Er wordt een feest gehouden" },
                    { en: "Everyone sleeps", es: "Todos duermen", de: "Alle schlafen", nl: "Iedereen slaapt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call people who fight on horseback?",
                    es: "¿Cómo llamamos a las personas que luchan a caballo?",
                    de: "Wie nennen wir Menschen, die zu Pferde kämpfen?",
                    nl: "Hoe noemen we mensen die te paard vechten?"
                },
                options: [
                    { en: "Cavalry", es: "Caballería", de: "Kavallerie", nl: "Cavalerie" },
                    { en: "Infantry", es: "Infantería", de: "Infanterie", nl: "Infanterie" },
                    { en: "Artillery", es: "Artillería", de: "Artillerie", nl: "Artillerie" },
                    { en: "Navy", es: "Marina", de: "Marine", nl: "Marine" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the great wall built by the Romans in Britain?",
                    es: "¿Cuál fue la gran muralla construida por los romanos en Gran Bretaña?",
                    de: "Was war die große Mauer, die von den Römern in Britannien gebaut wurde?",
                    nl: "Wat was de grote muur die door de Romeinen in Britannië werd gebouwd?"
                },
                options: [
                    { en: "Hadrian's Wall", es: "Muro de Adriano", de: "Hadrianswall", nl: "Hadrianus' Muur" },
                    { en: "Great Wall of China", es: "Gran Muralla China", de: "Chinesische Mauer", nl: "Chinese Muur" },
                    { en: "Berlin Wall", es: "Muro de Berlín", de: "Berliner Mauer", nl: "Berlijnse Muur" },
                    { en: "London Wall", es: "Muro de Londres", de: "Londoner Mauer", nl: "Londense Muur" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the Viking leader who conquered parts of England?",
                    es: "¿Quién fue el líder vikingo que conquistó partes de Inglaterra?",
                    de: "Wer war der Wikingeranführer, der Teile Englands eroberte?",
                    nl: "Wie was de Vikingleider die delen van Engeland veroverde?"
                },
                options: [
                    { en: "Ragnar Lothbrok", es: "Ragnar Lothbrok", de: "Ragnar Lothbrok", nl: "Ragnar Lothbrok" },
                    { en: "Eric the Red", es: "Erik el Rojo", de: "Erik der Rote", nl: "Erik de Rode" },
                    { en: "Leif Erikson", es: "Leif Erikson", de: "Leif Eriksson", nl: "Leif Erikson" },
                    { en: "Odin", es: "Odín", de: "Odin", nl: "Odin" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do soldiers use to protect themselves from arrows?",
                    es: "¿Qué usan los soldados para protegerse de las flechas?",
                    de: "Was benutzen Soldaten, um sich vor Pfeilen zu schützen?",
                    nl: "Wat gebruiken soldaten om zichzelf te beschermen tegen pijlen?"
                },
                options: [
                    { en: "Shields", es: "Escudos", de: "Schilde", nl: "Schilden" },
                    { en: "Umbrellas", es: "Paraguas", de: "Regenschirme", nl: "Paraplu's" },
                    { en: "Hats", es: "Sombreros", de: "Hüte", nl: "Hoeden" },
                    { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What famous siege lasted for 10 years?",
                    es: "¿Qué famoso asedio duró 10 años?",
                    de: "Welche berühmte Belagerung dauerte 10 Jahre?",
                    nl: "Welke beroemde belegering duurde 10 jaar?"
                },
                options: [
                    { en: "Siege of Troy", es: "Asedio de Troya", de: "Belagerung von Troja", nl: "Beleg van Troje" },
                    { en: "Siege of Orleans", es: "Asedio de Orleans", de: "Belagerung von Orleans", nl: "Beleg van Orléans" },
                    { en: "Siege of Constantinople", es: "Asedio de Constantinopla", de: "Belagerung von Konstantinopel", nl: "Beleg van Constantinopel" },
                    { en: "Siege of Vienna", es: "Asedio de Viena", de: "Belagerung von Wien", nl: "Beleg van Wenen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a war fought between people of the same country?",
                    es: "¿Cómo llamamos a una guerra librada entre personas del mismo país?",
                    de: "Wie nennen wir einen Krieg, der zwischen Menschen desselben Landes geführt wird?",
                    nl: "Hoe noemen we een oorlog die wordt gevochten tussen mensen van hetzelfde land?"
                },
                options: [
                    { en: "Civil war", es: "Guerra civil", de: "Bürgerkrieg", nl: "Burgeroorlog" },
                    { en: "World war", es: "Guerra mundial", de: "Weltkrieg", nl: "Wereldoorlog" },
                    { en: "Cold war", es: "Guerra fría", de: "Kalter Krieg", nl: "Koude oorlog" },
                    { en: "Trade war", es: "Guerra comercial", de: "Handelskrieg", nl: "Handelsoorlog" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who was the famous queen who fought against the Romans in Britain?",
                    es: "¿Quién fue la famosa reina que luchó contra los romanos en Gran Bretaña?",
                    de: "Wer war die berühmte Königin, die gegen die Römer in Britannien kämpfte?",
                    nl: "Wie was de beroemde koningin die vocht tegen de Romeinen in Britannië?"
                },
                options: [
                    { en: "Boudica", es: "Boudica", de: "Boudicca", nl: "Boudica" },
                    { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
                    { en: "Elizabeth I", es: "Isabel I", de: "Elisabeth I.", nl: "Elisabeth I" },
                    { en: "Victoria", es: "Victoria", de: "Victoria", nl: "Victoria" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the time when there is no war?",
                    es: "¿Cómo llamamos al tiempo cuando no hay guerra?",
                    de: "Wie nennen wir die Zeit, in der es keinen Krieg gibt?",
                    nl: "Hoe noemen we de tijd waarin er geen oorlog is?"
                },
                options: [
                    { en: "Peace", es: "Paz", de: "Frieden", nl: "Vrede" },
                    { en: "Battle", es: "Batalla", de: "Schlacht", nl: "Slag" },
                    { en: "Fight", es: "Pelea", de: "Kampf", nl: "Gevecht" },
                    { en: "War", es: "Guerra", de: "Krieg", nl: "Oorlog" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the ancient Greek fighting formation called?",
                    es: "¿Cómo se llamaba la formación de combate de los antiguos griegos?",
                    de: "Wie hieß die altgriechische Kampfformation?",
                    nl: "Hoe heette de oude Griekse gevechtsformatie?"
                },
                options: [
                    { en: "Phalanx", es: "Falange", de: "Phalanx", nl: "Falanx" },
                    { en: "Legion", es: "Legión", de: "Legion", nl: "Legioen" },
                    { en: "Squad", es: "Escuadrón", de: "Trupp", nl: "Ploeg" },
                    { en: "Battalion", es: "Batallón", de: "Bataillon", nl: "Bataljon" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the famous last battle of Napoleon?",
                    es: "¿Cuál fue la famosa última batalla de Napoleón?",
                    de: "Was war die berühmte letzte Schlacht Napoleons?",
                    nl: "Wat was de beroemde laatste slag van Napoleon?"
                },
                options: [
                    { en: "Waterloo", es: "Waterloo", de: "Waterloo", nl: "Waterloo" },
                    { en: "Austerlitz", es: "Austerlitz", de: "Austerlitz", nl: "Austerlitz" },
                    { en: "Borodino", es: "Borodino", de: "Borodino", nl: "Borodino" },
                    { en: "Leipzig", es: "Leipzig", de: "Leipzig", nl: "Leipzig" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the war between North and South America about?",
                    es: "¿De qué se trató la guerra entre el Norte y el Sur de América?",
                    de: "Worum ging es in dem Krieg zwischen Nord- und Südamerika?",
                    nl: "Waar ging de oorlog tussen Noord- en Zuid-Amerika over?"
                },
                options: [
                    { en: "Slavery and states' rights", es: "Esclavitud y derechos de los estados", de: "Sklaverei und Staatenrechte", nl: "Slavernij en staatsrechten" },
                    { en: "Food and water", es: "Comida y agua", de: "Essen und Wasser", nl: "Voedsel en water" },
                    { en: "Gold and silver", es: "Oro y plata", de: "Gold und Silber", nl: "Goud en zilver" },
                    { en: "Sports and games", es: "Deportes y juegos", de: "Sport und Spiele", nl: "Sport en spellen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do generals study to learn about war?",
                    es: "¿Qué estudian los generales para aprender sobre la guerra?",
                    de: "Was studieren Generäle, um etwas über den Krieg zu lernen?",
                    nl: "Wat bestuderen generaals om over oorlog te leren?"
                },
                options: [
                    { en: "Military history and strategy", es: "Historia militar y estrategia", de: "Militärgeschichte und Strategie", nl: "Militaire geschiedenis en strategie" },
                    { en: "Cooking and baking", es: "Cocina y repostería", de: "Kochen und Backen", nl: "Koken en bakken" },
                    { en: "Music and dancing", es: "Música y baile", de: "Musik und Tanzen", nl: "Muziek en dansen" },
                    { en: "Art and painting", es: "Arte y pintura", de: "Kunst und Malerei", nl: "Kunst en schilderen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the most important lesson we learn from studying wars?",
                    es: "¿Cuál es la lección más importante que aprendemos del estudio de las guerras?",
                    de: "Was ist die wichtigste Lektion, die wir aus dem Studium der Kriege lernen?",
                    nl: "Wat is de belangrijkste les die we leren van het bestuderen van oorlogen?"
                },
                options: [
                    { en: "Peace is better than war", es: "La paz es mejor que la guerra", de: "Frieden ist besser als Krieg", nl: "Vrede is beter dan oorlog" },
                    { en: "Wars are fun", es: "Las guerras son divertidas", de: "Kriege machen Spaß", nl: "Oorlogen zijn leuk" },
                    { en: "Fighting is good", es: "Pelear es bueno", de: "Kämpfen ist gut", nl: "Vechten is goed" },
                    { en: "Winning is everything", es: "Ganar lo es todo", de: "Gewinnen ist alles", nl: "Winnen is alles" }
                ],
                correct: 0,
                explanation: {
                    en: "The most important lesson from studying wars is that peace is much better than war! Wars cause great suffering, destruction, and sadness. When we learn about historical battles and conflicts, we understand how precious peace is and why we should always try to solve problems through talking, cooperation, and friendship rather than fighting.",
                    es: "¡La lección más importante del estudio de las guerras es que la paz es mucho mejor que la guerra! Las guerras causan gran sufrimiento, destrucción y tristeza. Cuando aprendemos sobre batallas históricas y conflictos, entendemos lo preciosa que es la paz y por qué siempre debemos tratar de resolver problemas a través de la conversación, cooperación y amistad en lugar de pelear.",
                    de: "Die wichtigste Lektion aus dem Studium der Kriege ist, dass Frieden viel besser ist als Krieg! Kriege verursachen großes Leid, Zerstörung und Trauer. Wenn wir über historische Schlachten und Konflikte lernen, verstehen wir, wie kostbar Frieden ist und warum wir immer versuchen sollten, Probleme durch Gespräche, Zusammenarbeit und Freundschaft zu lösen, anstatt zu kämpfen.",
                    nl: "De belangrijkste les van het bestuderen van oorlogen is dat vrede veel beter is dan oorlog! Oorlogen veroorzaken veel lijden, vernietiging en verdriet. Wanneer we leren over historische veldslagen en conflicten, begrijpen we hoe kostbaar vrede is en waarom we altijd moeten proberen problemen op te lossen door te praten, samen te werken en vriendschap te sluiten in plaats van te vechten."
                }
            },
            {
                question: {
                    en: "What weapon did medieval archers use to shoot far distances?",
                    es: "¿Qué arma usaban los arqueros medievales para disparar a largas distancias?",
                    de: "Welche Waffe benutzten mittelalterliche Bogenschützen, um weite Entfernungen zu schießen?",
                    nl: "Welk wapen gebruikten middeleeuwse boogschutters om ver te schieten?"
                },
                options: [
                    { en: "Longbow", es: "Arco largo", de: "Langbogen", nl: "Lange boog" },
                    { en: "Crossbow", es: "Ballesta", de: "Armbrust", nl: "Kruisboog" },
                    { en: "Slingshot", es: "Honda", de: "Steinschleuder", nl: "Katapult" },
                    { en: "Cannon", es: "Cañón", de: "Kanone", nl: "Kanon" }
                ],
                correct: 0,
                explanation: {
                    en: "The longbow was a powerful weapon used by medieval archers, especially famous with English archers during the Hundred Years' War! A skilled archer could shoot arrows over 300 yards and pierce armor. The longbow was made from a single piece of wood, often yew, and was as tall as a person. It took years of training to become expert with a longbow.",
                    es: "¡El arco largo era un arma poderosa usada por arqueros medievales, especialmente famoso con los arqueros ingleses durante la Guerra de los Cien Años! Un arquero hábil podía disparar flechas a más de 300 yardas y perforar armaduras. El arco largo estaba hecho de una sola pieza de madera, a menudo tejo, y era tan alto como una persona. Tomaba años de entrenamiento convertirse en experto con un arco largo.",
                    de: "Der Langbogen war eine mächtige Waffe, die von mittelalterlichen Bogenschützen verwendet wurde, besonders berühmt bei englischen Bogenschützen während des Hundertjährigen Krieges! Ein geschickter Bogenschütze konnte Pfeile über 300 Meter schießen und Rüstungen durchdringen. Der Langbogen war aus einem einzigen Stück Holz gemacht, oft Eibe, und war so hoch wie eine Person. Es dauerte Jahre des Trainings, um Experte mit einem Langbogen zu werden.",
                    nl: "De lange boog was een krachtig wapen dat werd gebruikt door middeleeuwse boogschutters, vooral beroemd bij Engelse boogschutters tijdens de Honderdjarige Oorlog! Een bekwame boogschutter kon pijlen meer dan 300 meter ver schieten en harnas doorboren. De lange boog was gemaakt van één stuk hout, vaak taxus, en was zo hoog als een persoon. Het kostte jaren van training om expert te worden met een lange boog."
                }
            },
            {
                question: {
                    en: "What do we call the protective ditch filled with water around a castle?",
                    es: "¿Cómo llamamos al foso protector lleno de agua alrededor de un castillo?",
                    de: "Wie nennen wir den schützenden, mit Wasser gefüllten Graben um eine Burg?",
                    nl: "Hoe noemen we de beschermende gracht gevuld met water rond een kasteel?"
                },
                options: [
                    { en: "Moat", es: "Foso", de: "Burggraben", nl: "Slotgracht" },
                    { en: "River", es: "Río", de: "Fluss", nl: "Rivier" },
                    { en: "Lake", es: "Lago", de: "See", nl: "Meer" },
                    { en: "Pool", es: "Piscina", de: "Pool", nl: "Zwembad" }
                ],
                correct: 0,
                explanation: {
                    en: "A moat is a deep, wide ditch filled with water that surrounds a castle for protection. Enemies had to cross this water barrier to reach the castle walls, making it much harder to attack! The moat also prevented enemies from digging tunnels under the castle walls. Some moats had spikes at the bottom or were filled with dangerous creatures to make them even more protective.",
                    es: "Un foso es una zanja profunda y ancha llena de agua que rodea un castillo para protección. ¡Los enemigos tenían que cruzar esta barrera de agua para llegar a las murallas del castillo, haciendo mucho más difícil atacar! El foso también evitaba que los enemigos cavaran túneles bajo las murallas del castillo. Algunos fosos tenían picos en el fondo o estaban llenos de criaturas peligrosas para hacerlos aún más protectores.",
                    de: "Ein Burggraben ist ein tiefer, breiter Graben voller Wasser, der eine Burg zum Schutz umgibt. Feinde mussten diese Wasserbarriere überqueren, um die Burgmauern zu erreichen, was einen Angriff viel schwieriger machte! Der Graben verhinderte auch, dass Feinde Tunnel unter den Burgmauern gruben. Einige Gräben hatten Spitzen am Boden oder waren mit gefährlichen Kreaturen gefüllt, um sie noch schützender zu machen.",
                    nl: "Een slotgracht is een diepe, brede gracht gevuld met water die een kasteel omringt ter bescherming. Vijanden moesten deze waterbarriëre oversteken om de kasteelmuren te bereiken, waardoor aanvallen veel moeilijker werd! De gracht voorkwam ook dat vijanden tunnels onder de kasteelmuren groeven. Sommige grachten hadden spikes op de bodem of waren gevuld met gevaarlijke wezens om ze nog beschermender te maken."
                }
            },
            {
                question: {
                    en: "Who was the famous samurai who served under multiple masters?",
                    es: "¿Quién fue el famoso samurái que sirvió bajo múltiples maestros?",
                    de: "Wer war der berühmte Samurai, der unter mehreren Herren diente?",
                    nl: "Wie was de beroemde samoerai die onder meerdere meesters diende?"
                },
                options: [
                    { en: "Miyamoto Musashi", es: "Miyamoto Musashi", de: "Miyamoto Musashi", nl: "Miyamoto Musashi" },
                    { en: "Oda Nobunaga", es: "Oda Nobunaga", de: "Oda Nobunaga", nl: "Oda Nobunaga" },
                    { en: "Tokugawa Ieyasu", es: "Tokugawa Ieyasu", de: "Tokugawa Ieyasu", nl: "Tokugawa Ieyasu" },
                    { en: "Date Masamune", es: "Date Masamune", de: "Date Masamune", nl: "Date Masamune" }
                ],
                correct: 0,
                explanation: {
                    en: "Miyamoto Musashi was Japan's most famous samurai warrior and sword master! He lived in the early 1600s and won over 60 duels without ever losing. Musashi developed a unique two-sword fighting style and wrote 'The Book of Five Rings,' a famous guide about strategy and martial arts that people still study today. He was known as a rōnin, a masterless samurai.",
                    es: "¡Miyamoto Musashi fue el guerrero samurái y maestro de espada más famoso de Japón! Vivió a principios de 1600 y ganó más de 60 duelos sin perder jamás. Musashi desarrolló un estilo único de lucha con dos espadas y escribió 'El Libro de los Cinco Anillos', una famosa guía sobre estrategia y artes marciales que la gente todavía estudia hoy. Era conocido como un rōnin, un samurái sin maestro.",
                    de: "Miyamoto Musashi war Japans berühmtester Samurai-Krieger und Schwertmeister! Er lebte in den frühen 1600ern und gewann über 60 Duelle, ohne jemals zu verlieren. Musashi entwickelte einen einzigartigen Zwei-Schwert-Kampfstil und schrieb 'Das Buch der Fünf Ringe', eine berühmte Anleitung über Strategie und Kampfkünste, die Menschen heute noch studieren. Er war als Rōnin bekannt, ein herrenloser Samurai.",
                    nl: "Miyamoto Musashi was Japan's beroemdste samoerai-krijger en zwaardmeester! Hij leefde in de vroege jaren 1600 en won meer dan 60 duels zonder ooit te verliezen. Musashi ontwikkelde een unieke twee-zwaard gevechtstijl en schreef 'Het Boek van Vijf Ringen,' een beroemde gids over strategie en vechtsporten die mensen vandaag nog bestuderen. Hij stond bekend als een rōnin, een meesterloze samoerai."
                }
            },
            {
                question: {
                    en: "What siege weapon was used to break down castle gates?",
                    es: "¿Qué arma de asedio se usaba para derribar las puertas del castillo?",
                    de: "Welche Belagerungswaffe wurde verwendet, um Burgtore aufzubrechen?",
                    nl: "Welk belegeringswapen werd gebruikt om kasteelpoorten in te breken?"
                },
                options: [
                    { en: "Battering ram", es: "Ariete", de: "Rammbock", nl: "Stormloper" },
                    { en: "Catapult", es: "Catapulta", de: "Katapult", nl: "Katapult" },
                    { en: "Trebuchet", es: "Trebuchet", de: "Trebuchet", nl: "Trebuchet" },
                    { en: "Ballista", es: "Ballesta", de: "Balliste", nl: "Ballista" }
                ],
                correct: 0,
                explanation: {
                    en: "A battering ram was a large, heavy log with a metal head that soldiers used to smash down castle gates and doors! The ram was often covered with wet hides to protect it from fire arrows. Soldiers would swing it back and forth repeatedly to break through even the strongest wooden gates. Sometimes battering rams were mounted on wheels and had roofs to protect the soldiers using them.",
                    es: "¡Un ariete era un tronco grande y pesado con cabeza de metal que los soldados usaban para derribar puertas y portones de castillos! El ariete a menudo estaba cubierto con pieles húmedas para protegerlo de las flechas de fuego. Los soldados lo balanceaban hacia adelante y hacia atrás repetidamente para atravesar incluso los portones de madera más fuertes. A veces los arietes tenían ruedas y techos para proteger a los soldados que los usaban.",
                    de: "Ein Rammbock war ein großer, schwerer Balken mit einem Metallkopf, den Soldaten verwendeten, um Burgtore und Türen einzuschlagen! Der Rammbock war oft mit nassen Häuten bedeckt, um ihn vor Feuerpfeilen zu schützen. Soldaten schwangen ihn wiederholt hin und her, um selbst die stärksten Holztore zu durchbrechen. Manchmal waren Rammböcke auf Rädern montiert und hatten Dächer, um die Soldaten zu schützen, die sie verwendeten.",
                    nl: "Een stormloper was een grote, zware boomstam met een metalen kop die soldaten gebruikten om kasteelpoorten en deuren in te slaan! De stormloper was vaak bedekt met natte huiden om hem te beschermen tegen vuurpijlen. Soldaten zwaaiden hem herhaaldelijk heen en weer om zelfs de sterkste houten poorten door te breken. Soms waren stormlopers gemonteerd op wielen en hadden ze daken om de soldaten die ze gebruikten te beschermen."
                }
            },
            {
                question: {
                    en: "Which ancient empire was known for its powerful legions?",
                    es: "¿Qué imperio antiguo era conocido por sus poderosas legiones?",
                    de: "Welches antike Reich war für seine mächtigen Legionen bekannt?",
                    nl: "Welk oud rijk stond bekend om zijn machtige legioenen?"
                },
                options: [
                    { en: "Roman Empire", es: "Imperio Romano", de: "Römisches Reich", nl: "Romeinse Rijk" },
                    { en: "Greek Empire", es: "Imperio Griego", de: "Griechisches Reich", nl: "Griekse Rijk" },
                    { en: "Egyptian Empire", es: "Imperio Egipcio", de: "Ägyptisches Reich", nl: "Egyptische Rijk" },
                    { en: "Persian Empire", es: "Imperio Persa", de: "Persisches Reich", nl: "Perzische Rijk" }
                ],
                correct: 0,
                explanation: {
                    en: "The Roman Empire was famous for its powerful legions - well-trained armies that conquered much of the known world! A Roman legion had about 5,000 soldiers who were highly disciplined and organized. They built roads, bridges, and fortifications wherever they went. Roman legions used advanced tactics, superior weapons, and engineering skills that made them nearly unstoppable for centuries.",
                    es: "¡El Imperio Romano era famoso por sus poderosas legiones - ejércitos bien entrenados que conquistaron gran parte del mundo conocido! Una legión romana tenía alrededor de 5,000 soldados que estaban altamente disciplinados y organizados. Construían caminos, puentes y fortificaciones dondequiera que fueran. Las legiones romanas usaban tácticas avanzadas, armas superiores y habilidades de ingeniería que las hicieron casi imparables por siglos.",
                    de: "Das Römische Reich war berühmt für seine mächtigen Legionen - gut ausgebildete Armeen, die einen Großteil der bekannten Welt eroberten! Eine römische Legion hatte etwa 5.000 Soldaten, die hoch diszipliniert und organisiert waren. Sie bauten Straßen, Brücken und Befestigungen, wohin sie auch gingen. Römische Legionen verwendeten fortgeschrittene Taktiken, überlegene Waffen und Ingenieurskunst, die sie jahrhundertelang fast unaufhaltsam machten.",
                    nl: "Het Romeinse Rijk stond bekend om zijn machtige legioenen - goed getrainde legers die veel van de bekende wereld veroverden! Een Romeins legioen had ongeveer 5.000 soldaten die zeer gedisciplineerd en georganiseerd waren. Ze bouwden wegen, bruggen en vestingwerken waar ze ook gingen. Romeinse legioenen gebruikten geavanceerde tactieken, superieure wapens en technische vaardigheden die hen eeuwenlang bijna onstuitbaar maakten."
                }
            },
            {
                question: {
                    en: "What do we call a large military ship used in sea battles?",
                    es: "¿Cómo llamamos a un gran barco militar usado en batallas navales?",
                    de: "Wie nennen wir ein großes Militärschiff, das in Seeschlachten verwendet wird?",
                    nl: "Hoe noemen we een groot militair schip dat werd gebruikt in zeeslagen?"
                },
                options: [
                    { en: "Warship", es: "Buque de guerra", de: "Kriegsschiff", nl: "Oorlogsschip" },
                    { en: "Fishing boat", es: "Barco de pesca", de: "Fischerboot", nl: "Vissersboot" },
                    { en: "Cruise ship", es: "Crucero", de: "Kreuzfahrtschiff", nl: "Cruiseschip" },
                    { en: "Sailboat", es: "Velero", de: "Segelboot", nl: "Zeilboot" }
                ],
                correct: 0,
                explanation: {
                    en: "A warship is a large, powerful ship built specifically for fighting in naval battles! These ships carry cannons, artillery, and other weapons to attack enemy vessels and protect their own fleet. Throughout history, warships have evolved from ancient galleys with rams to modern destroyers and battleships with advanced radar and missiles. Famous warships include HMS Victory and USS Constitution.",
                    es: "¡Un buque de guerra es un barco grande y poderoso construido específicamente para luchar en batallas navales! Estos barcos llevan cañones, artillería y otras armas para atacar naves enemigas y proteger su propia flota. A lo largo de la historia, los buques de guerra han evolucionado desde galeras antiguas con arietes hasta destructores modernos y acorazados con radar avanzado y misiles. Buques de guerra famosos incluyen HMS Victory y USS Constitution.",
                    de: "Ein Kriegsschiff ist ein großes, mächtiges Schiff, das speziell für den Kampf in Seeschlachten gebaut wurde! Diese Schiffe tragen Kanonen, Artillerie und andere Waffen, um feindliche Schiffe anzugreifen und ihre eigene Flotte zu schützen. Im Laufe der Geschichte haben sich Kriegsschiffe von antiken Galeeren mit Rammspornen zu modernen Zerstörern und Schlachtschiffen mit fortgeschrittenem Radar und Raketen entwickelt. Berühmte Kriegsschiffe sind HMS Victory und USS Constitution.",
                    nl: "Een oorlogsschip is een groot, krachtig schip dat speciaal is gebouwd voor het vechten in zeeslagen! Deze schepen dragen kanonnen, artillerie en andere wapens om vijandelijke schepen aan te vallen en hun eigen vloot te beschermen. Door de geschiedenis heen zijn oorlogsschepen geëvolueerd van oude galeien met rammen naar moderne destroyers en slagschepen met geavanceerde radar en raketten. Beroemde oorlogsschepen zijn HMS Victory en USS Constitution."
                }
            },
            {
                question: {
                    en: "What is the term for when soldiers attack a fortified place by surrounding it?",
                    es: "¿Cuál es el término cuando los soldados atacan un lugar fortificado rodeándolo?",
                    de: "Wie nennt man es, wenn Soldaten einen befestigten Ort angreifen, indem sie ihn umzingeln?",
                    nl: "Wat is de term voor wanneer soldaten een versterkte plaats aanvallen door het te omsingelen?"
                },
                options: [
                    { en: "Siege", es: "Asedio", de: "Belagerung", nl: "Belegering" },
                    { en: "Raid", es: "Incursión", de: "Überfall", nl: "Inval" },
                    { en: "Ambush", es: "Emboscada", de: "Hinterhalt", nl: "Hinderlaag" },
                    { en: "Retreat", es: "Retirada", de: "Rückzug", nl: "Terugtrekking" }
                ],
                correct: 0,
                explanation: {
                    en: "A siege is when an army surrounds a castle, city, or fortress and cuts off all supplies to force the defenders to surrender! During a siege, the attacking army might use catapults, battering rams, or dig tunnels to break through the defenses. Sieges could last for months or even years. Famous sieges in history include the Siege of Troy and the Siege of Orleans that Joan of Arc helped break.",
                    es: "¡Un asedio es cuando un ejército rodea un castillo, ciudad o fortaleza y corta todos los suministros para forzar a los defensores a rendirse! Durante un asedio, el ejército atacante podría usar catapultas, arietes, o cavar túneles para atravesar las defensas. Los asedios podían durar meses o incluso años. Asedios famosos en la historia incluyen el Asedio de Troya y el Asedio de Orleans que Juana de Arco ayudó a romper.",
                    de: "Eine Belagerung ist, wenn eine Armee eine Burg, Stadt oder Festung umzingelt und alle Versorgung abschneidet, um die Verteidiger zur Kapitulation zu zwingen! Während einer Belagerung könnte die angreifende Armee Katapulte, Rammböcke verwenden oder Tunnel graben, um die Verteidigungen zu durchbrechen. Belagerungen konnten Monate oder sogar Jahre dauern. Berühmte Belagerungen in der Geschichte sind die Belagerung von Troja und die Belagerung von Orleans, die Jeanne d'Arc zu durchbrechen half.",
                    nl: "Een belegering is wanneer een leger een kasteel, stad of vesting omsingelt en alle voorraden afsnijdt om de verdedigers te dwingen zich over te geven! Tijdens een belegering zou het aanvallende leger katapulten, stormlopers kunnen gebruiken of tunnels graven om door de verdedigingen te breken. Belegeringen konden maanden of zelfs jaren duren. Beroemde belegeringen in de geschiedenis zijn de Belegering van Troje en de Belegering van Orléans die Jeanne d'Arc hielp doorbreken."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/history', level5);
    }
})();