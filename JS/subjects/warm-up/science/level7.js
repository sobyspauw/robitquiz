(function() {
    const level7 = {
        name: {
            en: "Matter and Materials",
            es: "Materia y Materiales",
            de: "Materie und Materialien",
            nl: "Materie en Materialen"
        },
        questions: [
            {
                question: {
                    en: "What are the three main states of matter?",
                    es: "¿Cuáles son los tres estados principales de la materia?",
                    de: "Was sind die drei Hauptzustände der Materie?",
                    nl: "Wat zijn de drie hoofdtoestanden van materie?"
                },
                options: [
                    { en: "Solid, liquid, and gas", es: "Sólido, líquido y gas", de: "Fest, flüssig und gasförmig", nl: "Vast, vloeibaar en gas" },
                    { en: "Hot, cold, and warm", es: "Caliente, frío y tibio", de: "Heiß, kalt und warm", nl: "Heet, koud en warm" },
                    { en: "Big, medium, and small", es: "Grande, mediano y pequeño", de: "Groß, mittel und klein", nl: "Groot, middel en klein" },
                    { en: "Hard, soft, and smooth", es: "Duro, suave y liso", de: "Hart, weich und glatt", nl: "Hard, zacht en glad" }
                ],
                correct: 0,
                explanation: {
                    en: "Matter exists in three main states: solid (particles close together), liquid (particles loose), and gas (particles far apart and moving freely).",
                    es: "La materia existe en tres estados principales: sólido (partículas juntas), líquido (partículas sueltas) y gas (partículas separadas y moviéndose libremente).",
                    de: "Materie existiert in drei Hauptzuständen: fest (Teilchen eng zusammen), flüssig (Teilchen locker) und gasförmig (Teilchen weit auseinander und frei beweglich).",
                    nl: "Materie bestaat in drie hoofdtoestanden: vast (deeltjes dicht bij elkaar), vloeibaar (deeltjes los) en gas (deeltjes ver uit elkaar en vrij bewegend)."
                }
            },
            {
                question: {
                    en: "What happens when you heat ice?",
                    es: "¿Qué pasa cuando calientas hielo?",
                    de: "Was passiert, wenn du Eis erwärmst?",
                    nl: "Wat gebeurt er als je ijs opwarmt?"
                },
                options: [
                    { en: "It melts into water", es: "Se derrite en agua", de: "Es schmilzt zu Wasser", nl: "Het smelt tot water" },
                    { en: "It gets harder", es: "Se vuelve más duro", de: "Es wird härter", nl: "Het wordt harder" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "When ice is heated, its molecules gain energy and move faster, breaking the rigid structure and changing from solid to liquid state.",
                    es: "Cuando el hielo se calienta, sus moléculas ganan energía y se mueven más rápido, rompiendo la estructura rígida y cambiando de estado sólido a líquido.",
                    de: "Wenn Eis erhitzt wird, gewinnen seine Moleküle Energie und bewegen sich schneller, brechen die starre Struktur und wechseln vom festen in den flüssigen Zustand.",
                    nl: "Wanneer ijs wordt verwarmd, krijgen zijn moleculen energie en bewegen sneller, breken de stijve structuur en veranderen van vaste naar vloeibare toestand."
                }
            },
            {
                question: {
                    en: "What happens when you heat water?",
                    es: "¿Qué pasa cuando calientas agua?",
                    de: "Was passiert, wenn du Wasser erwärmst?",
                    nl: "Wat gebeurt er als je water opwarmt?"
                },
                options: [
                    { en: "It turns into steam (gas)", es: "Se convierte en vapor (gas)", de: "Es wird zu Dampf (Gas)", nl: "Het wordt stoom (gas)" },
                    { en: "It freezes", es: "Se congela", de: "Es gefriert", nl: "Het bevriest" },
                    { en: "It disappears completely", es: "Desaparece completamente", de: "Es verschwindet völlig", nl: "Het verdwijnt helemaal" },
                    { en: "It becomes solid", es: "Se vuelve sólido", de: "Es wird fest", nl: "Het wordt vast" }
                ],
                correct: 0,
                explanation: {
                    en: "When water is heated to boiling point (100°C), it evaporates and becomes water vapor, changing from liquid to gas state.",
                    es: "Cuando el agua se calienta al punto de ebullición (100°C), se evapora y se convierte en vapor de agua, cambiando de estado líquido a gaseoso.",
                    de: "Wenn Wasser auf den Siedepunkt (100°C) erhitzt wird, verdunstet es und wird zu Wasserdampf, wechselt vom flüssigen in den gasförmigen Zustand.",
                    nl: "Wanneer water wordt verhit tot het kookpunt (100°C), verdampt het en wordt waterdamp, verandert van vloeibare naar gastoestand."
                }
            },
            {
                question: {
                    en: "What do we call the process when a liquid becomes a gas?",
                    es: "¿Cómo llamamos al proceso cuando un líquido se convierte en gas?",
                    de: "Wie nennen wir den Prozess, wenn eine Flüssigkeit zu Gas wird?",
                    nl: "Hoe noemen we het proces waarbij een vloeistof gas wordt?"
                },
                options: [
                    { en: "Evaporation", es: "Evaporación", de: "Verdampfung", nl: "Verdamping" },
                    { en: "Freezing", es: "Congelación", de: "Gefrieren", nl: "Bevriezen" },
                    { en: "Melting", es: "Derretimiento", de: "Schmelzen", nl: "Smelten" },
                    { en: "Condensation", es: "Condensación", de: "Kondensation", nl: "Condensatie" }
                ],
                correct: 0,
                explanation: {
                    en: "Evaporation is the process where liquid molecules gain enough energy to escape into the air as gas, happening naturally at any temperature.",
                    es: "La evaporación es el proceso donde las moléculas líquidas ganan suficiente energía para escapar al aire como gas, ocurriendo naturalmente a cualquier temperatura.",
                    de: "Verdampfung ist der Prozess, bei dem flüssige Moleküle genug Energie gewinnen, um als Gas in die Luft zu entweichen, was natürlicherweise bei jeder Temperatur geschieht.",
                    nl: "Verdamping is het proces waarbij vloeibare moleculen genoeg energie krijgen om als gas in de lucht te ontsnappen, wat natuurlijk gebeurt bij elke temperatuur."
                }
            },
            {
                question: {
                    en: "What do we call the process when a gas becomes a liquid?",
                    es: "¿Cómo llamamos al proceso cuando un gas se convierte en líquido?",
                    de: "Wie nennen wir den Prozess, wenn Gas zu Flüssigkeit wird?",
                    nl: "Hoe noemen we het proces waarbij gas vloeistof wordt?"
                },
                options: [
                    { en: "Condensation", es: "Condensación", de: "Kondensation", nl: "Condensatie" },
                    { en: "Evaporation", es: "Evaporación", de: "Verdampfung", nl: "Verdamping" },
                    { en: "Melting", es: "Derretimiento", de: "Schmelzen", nl: "Smelten" },
                    { en: "Freezing", es: "Congelación", de: "Gefrieren", nl: "Bevriezen" }
                ],
                correct: 0,
                explanation: {
                    en: "Condensation occurs when gas molecules lose energy and slow down, coming together to form liquid droplets, like water droplets on a cold surface.",
                    es: "La condensación ocurre cuando las moléculas de gas pierden energía y se ralentizan, uniéndose para formar gotas líquidas, como gotas de agua en una superficie fría.",
                    de: "Kondensation tritt auf, wenn Gasmoleküle Energie verlieren und sich verlangsamen, sich zusammenschließen, um flüssige Tröpfchen zu bilden, wie Wassertröpfchen auf einer kalten Oberfläche.",
                    nl: "Condensatie treedt op wanneer gasmoleculen energie verliezen en vertragen, samenkomen om vloeibare druppeltjes te vormen, zoals waterdruppels op een koud oppervlak."
                }
            },
            {
                question: {
                    en: "What happens to most materials when they get cold?",
                    es: "¿Qué pasa con la mayoría de materiales cuando se enfrían?",
                    de: "Was passiert mit den meisten Materialien, wenn sie kalt werden?",
                    nl: "Wat gebeurt er met de meeste materialen als ze koud worden?"
                },
                options: [
                    { en: "They contract (get smaller)", es: "Se contraen (se hacen más pequeños)", de: "Sie ziehen sich zusammen (werden kleiner)", nl: "Ze krimpen (worden kleiner)" },
                    { en: "They expand (get bigger)", es: "Se expanden (se hacen más grandes)", de: "Sie dehnen sich aus (werden größer)", nl: "Ze zetten uit (worden groter)" },
                    { en: "They change color", es: "Cambian de color", de: "Sie ändern die Farbe", nl: "Ze veranderen van kleur" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Most materials contract when cooled because their molecules move slower and get closer together, taking up less space.",
                    es: "La mayoría de materiales se contraen cuando se enfrían porque sus moléculas se mueven más lento y se acercan, ocupando menos espacio.",
                    de: "Die meisten Materialien ziehen sich beim Abkühlen zusammen, weil sich ihre Moleküle langsamer bewegen und näher zusammenkommen, weniger Platz einnehmen.",
                    nl: "De meeste materialen krimpen bij afkoeling omdat hun moleculen langzamer bewegen en dichter bij elkaar komen, minder ruimte innemen."
                }
            },
            {
                question: {
                    en: "What happens to most materials when they get hot?",
                    es: "¿Qué pasa con la mayoría de materiales cuando se calientan?",
                    de: "Was passiert mit den meisten Materialien, wenn sie heiß werden?",
                    nl: "Wat gebeurt er met de meeste materialen als ze heet worden?"
                },
                options: [
                    { en: "They expand (get bigger)", es: "Se expanden (se hacen más grandes)", de: "Sie dehnen sich aus (werden größer)", nl: "Ze zetten uit (worden groter)" },
                    { en: "They contract (get smaller)", es: "Se contraen (se hacen más pequeños)", de: "Sie ziehen sich zusammen (werden kleiner)", nl: "Ze krimpen (worden kleiner)" },
                    { en: "They turn into liquid", es: "Se convierten en líquido", de: "Sie werden zu Flüssigkeit", nl: "Ze worden vloeibaar" },
                    { en: "They disappear", es: "Desaparecen", de: "Sie verschwinden", nl: "Ze verdwijnen" }
                ],
                correct: 0,
                explanation: {
                    en: "Most materials expand when heated because their molecules move faster and spread apart, requiring more space.",
                    es: "La mayoría de materiales se expanden cuando se calientan porque sus moléculas se mueven más rápido y se separan, requiriendo más espacio.",
                    de: "Die meisten Materialien dehnen sich beim Erhitzen aus, weil sich ihre Moleküle schneller bewegen und auseinanderbreiten, mehr Platz benötigen.",
                    nl: "De meeste materialen zetten uit bij verwarming omdat hun moleculen sneller bewegen en uiteengaan, meer ruimte nodig hebben."
                }
            },
            {
                question: {
                    en: "Which materials can conduct electricity?",
                    es: "¿Qué materiales pueden conducir electricidad?",
                    de: "Welche Materialien können Elektrizität leiten?",
                    nl: "Welke materialen kunnen elektriciteit geleiden?"
                },
                options: [
                    { en: "Metals like copper and iron", es: "Metales como cobre y hierro", de: "Metalle wie Kupfer und Eisen", nl: "Metalen zoals koper en ijzer" },
                    { en: "Wood and plastic", es: "Madera y plástico", de: "Holz und Plastik", nl: "Hout en plastic" },
                    { en: "Paper and cloth", es: "Papel y tela", de: "Papier und Stoff", nl: "Papier en stof" },
                    { en: "Glass and rubber", es: "Vidrio y goma", de: "Glas und Gummi", nl: "Glas en rubber" }
                ],
                correct: 0,
                explanation: {
                    en: "Metals like copper and iron have free-moving electrons that can carry electrical current, making them excellent electrical conductors.",
                    es: "Los metales como el cobre y el hierro tienen electrones que se mueven libremente y pueden transportar corriente eléctrica, haciéndolos excelentes conductores eléctricos.",
                    de: "Metalle wie Kupfer und Eisen haben frei bewegliche Elektronen, die elektrischen Strom tragen können, was sie zu ausgezeichneten elektrischen Leitern macht.",
                    nl: "Metalen zoals koper en ijzer hebben vrij bewegende elektronen die elektrische stroom kunnen dragen, waardoor ze uitstekende elektrische geleiders zijn."
                }
            },
            {
                question: {
                    en: "What are materials that don't conduct electricity called?",
                    es: "¿Cómo se llaman los materiales que no conducen electricidad?",
                    de: "Wie heißen Materialien, die keine Elektrizität leiten?",
                    nl: "Hoe heten materialen die geen elektriciteit geleiden?"
                },
                options: [
                    { en: "Insulators", es: "Aislantes", de: "Isolatoren", nl: "Isolatoren" },
                    { en: "Conductors", es: "Conductores", de: "Leiter", nl: "Geleiders" },
                    { en: "Magnets", es: "Imanes", de: "Magnete", nl: "Magneten" },
                    { en: "Batteries", es: "Baterías", de: "Batterien", nl: "Batterijen" }
                ],
                correct: 0,
                explanation: {
                    en: "Insulators are materials that don't allow electricity to flow through them easily, protecting us from electrical shock and used to cover wires.",
                    es: "Los aislantes son materiales que no permiten que la electricidad fluya fácilmente a través de ellos, protegiéndonos de choques eléctricos y usados para cubrir cables.",
                    de: "Isolatoren sind Materialien, die Elektrizität nicht leicht durchfließen lassen, uns vor Stromschlägen schützen und zur Kabelabdeckung verwendet werden.",
                    nl: "Isolatoren zijn materialen die elektriciteit niet gemakkelijk doorlaten, ons beschermen tegen elektrische schokken en gebruikt worden om draden te bedekken."
                }
            },
            {
                question: {
                    en: "What property makes some materials magnetic?",
                    es: "¿Qué propiedad hace que algunos materiales sean magnéticos?",
                    de: "Welche Eigenschaft macht manche Materialien magnetisch?",
                    nl: "Welke eigenschap maakt sommige materialen magnetisch?"
                },
                options: [
                    { en: "They contain iron or similar metals", es: "Contienen hierro o metales similares", de: "Sie enthalten Eisen oder ähnliche Metalle", nl: "Ze bevatten ijzer of vergelijkbare metalen" },
                    { en: "They are very heavy", es: "Son muy pesados", de: "Sie sind sehr schwer", nl: "Ze zijn heel zwaar" },
                    { en: "They are colorful", es: "Son coloridos", de: "Sie sind bunt", nl: "Ze zijn kleurrijk" },
                    { en: "They are smooth", es: "Son lisos", de: "Sie sind glatt", nl: "Ze zijn glad" }
                ],
                correct: 0,
                explanation: {
                    en: "Magnetic materials contain iron or other metals with unpaired electrons that align with magnetic fields, creating attraction or repulsion.",
                    es: "Los materiales magnéticos contienen hierro u otros metales con electrones desapareados que se alinean con campos magnéticos, creando atracción o repulsión.",
                    de: "Magnetische Materialien enthalten Eisen oder andere Metalle mit ungepaarten Elektronen, die sich mit Magnetfeldern ausrichten und Anziehung oder Abstoßung erzeugen.",
                    nl: "Magnetische materialen bevatten ijzer of andere metalen met ongepaarde elektronen die zich uitlijnen met magnetische velden, waardoor aantrekking of afstoting ontstaat."
                }
            },
            {
                question: {
                    en: "What happens when you mix oil and water?",
                    es: "¿Qué pasa cuando mezclas aceite y agua?",
                    de: "Was passiert, wenn du Öl und Wasser mischst?",
                    nl: "Wat gebeurt er als je olie en water mengt?"
                },
                options: [
                    { en: "They don't mix and separate", es: "No se mezclan y se separan", de: "Sie mischen sich nicht und trennen sich", nl: "Ze mengen niet en scheiden" },
                    { en: "They form a new liquid", es: "Forman un nuevo líquido", de: "Sie bilden eine neue Flüssigkeit", nl: "Ze vormen een nieuwe vloeistof" },
                    { en: "They turn into a solid", es: "Se convierten en sólido", de: "Sie werden zu einem Feststoff", nl: "Ze worden een vaste stof" },
                    { en: "They disappear", es: "Desaparecen", de: "Sie verschwinden", nl: "Ze verdwijnen" }
                ],
                correct: 0,
                explanation: {
                    en: "Oil and water don't mix because they have different molecular properties - oil molecules are hydrophobic and water molecules are hydrophilic.",
                    es: "El aceite y el agua no se mezclan porque tienen propiedades moleculares diferentes - las moléculas de aceite son hidrofóbicas y las de agua son hidrofílicas.",
                    de: "Öl und Wasser mischen sich nicht, weil sie unterschiedliche molekulare Eigenschaften haben - Ölmoleküle sind hydrophob und Wassermoleküle hydrophil.",
                    nl: "Olie en water mengen niet omdat ze verschillende moleculaire eigenschappen hebben - oliemoleculen zijn hydrofoob en watermoleculen hydrofiel."
                }
            },
            {
                question: {
                    en: "What do we call materials that can dissolve in water?",
                    es: "¿Cómo llamamos a los materiales que pueden disolverse en agua?",
                    de: "Wie nennen wir Materialien, die sich in Wasser lösen können?",
                    nl: "Hoe noemen we materialen die kunnen oplossen in water?"
                },
                options: [
                    { en: "Soluble", es: "Solubles", de: "Löslich", nl: "Oplosbaar" },
                    { en: "Insoluble", es: "Insolubles", de: "Unlöslich", nl: "Onoplosbaar" },
                    { en: "Magnetic", es: "Magnéticos", de: "Magnetisch", nl: "Magnetisch" },
                    { en: "Transparent", es: "Transparentes", de: "Transparent", nl: "Transparant" }
                ],
                correct: 0,
                explanation: {
                    en: "Soluble materials can dissolve completely in water because their molecules can separate and mix evenly throughout the liquid.",
                    es: "Los materiales solubles pueden disolverse completamente en agua porque sus moléculas pueden separarse y mezclarse uniformemente en el líquido.",
                    de: "Lösliche Materialien können sich vollständig in Wasser lösen, weil sich ihre Moleküle trennen und gleichmäßig in der Flüssigkeit verteilen können.",
                    nl: "Oplosbare materialen kunnen volledig oplossen in water omdat hun moleculen kunnen scheiden en zich gelijkmatig door de vloeistof mengen."
                }
            },
            {
                question: {
                    en: "What happens when you add salt to water?",
                    es: "¿Qué pasa cuando agregas sal al agua?",
                    de: "Was passiert, wenn du Salz ins Wasser gibst?",
                    nl: "Wat gebeurt er als je zout aan water toevoegt?"
                },
                options: [
                    { en: "The salt dissolves and disappears", es: "La sal se disuelve y desaparece", de: "Das Salz löst sich auf und verschwindet", nl: "Het zout lost op en verdwijnt" },
                    { en: "The water turns solid", es: "El agua se vuelve sólida", de: "Das Wasser wird fest", nl: "Het water wordt vast" },
                    { en: "The salt floats on top", es: "La sal flota encima", de: "Das Salz schwimmt oben", nl: "Het zout drijft bovenop" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Salt dissolves in water because the water molecules surround and separate the salt particles, making them invisible while still present.",
                    es: "La sal se disuelve en agua porque las moléculas de agua rodean y separan las partículas de sal, haciéndolas invisibles pero aún presentes.",
                    de: "Salz löst sich in Wasser auf, weil die Wassermoleküle die Salzteilchen umgeben und trennen, wodurch sie unsichtbar aber noch vorhanden sind.",
                    nl: "Zout lost op in water omdat watermoleculen de zoutdeeltjes omringen en scheiden, waardoor ze onzichtbaar maar nog steeds aanwezig zijn."
                }
            },
            {
                question: {
                    en: "Which materials are transparent?",
                    es: "¿Qué materiales son transparentes?",
                    de: "Welche Materialien sind transparent?",
                    nl: "Welke materialen zijn transparant?"
                },
                options: [
                    { en: "Glass and clear plastic", es: "Vidrio y plástico transparente", de: "Glas und klares Plastik", nl: "Glas en doorzichtig plastic" },
                    { en: "Wood and metal", es: "Madera y metal", de: "Holz und Metall", nl: "Hout en metaal" },
                    { en: "Paper and cloth", es: "Papel y tela", de: "Papier und Stoff", nl: "Papier en stof" },
                    { en: "Rubber and foam", es: "Goma y espuma", de: "Gummi und Schaum", nl: "Rubber en schuim" }
                ],
                correct: 0,
                explanation: {
                    en: "Transparent materials allow light to pass through without scattering, so we can see clearly through them to objects on the other side.",
                    es: "Los materiales transparentes permiten que la luz pase sin dispersarse, así podemos ver claramente a través de ellos hacia objetos del otro lado.",
                    de: "Transparente Materialien lassen Licht hindurchgehen ohne Streuung, so dass wir klar durch sie hindurch zu Objekten auf der anderen Seite sehen können.",
                    nl: "Transparante materialen laten licht erdoor zonder verstrooiing, zodat we er duidelijk doorheen naar voorwerpen aan de andere kant kunnen kijken."
                }
            },
            {
                question: {
                    en: "What makes materials hard or soft?",
                    es: "¿Qué hace que los materiales sean duros o blandos?",
                    de: "Was macht Materialien hart oder weich?",
                    nl: "Wat maakt materialen hard of zacht?"
                },
                options: [
                    { en: "How tightly their particles are packed", es: "Qué tan apretadas están sus partículas", de: "Wie dicht ihre Teilchen gepackt sind", nl: "Hoe dicht hun deeltjes zijn verpakt" },
                    { en: "Their color", es: "Su color", de: "Ihre Farbe", nl: "Hun kleur" },
                    { en: "Their weight", es: "Su peso", de: "Ihr Gewicht", nl: "Hun gewicht" },
                    { en: "Their size", es: "Su tamaño", de: "Ihre Größe", nl: "Hun grootte" }
                ],
                correct: 0,
                explanation: {
                    en: "Hardness depends on how tightly particles are packed and bonded together - tightly packed particles make hard materials, loosely packed make soft ones.",
                    es: "La dureza depende de qué tan apretadas están las partículas y unidas - partículas muy empacadas hacen materiales duros, empacadas sueltas hacen blandos.",
                    de: "Härte hängt davon ab, wie dicht Teilchen gepackt und verbunden sind - dicht gepackte Teilchen machen harte Materialien, lose gepackte weiche.",
                    nl: "Hardheid hangt af van hoe dicht deeltjes zijn verpakt en verbonden - dicht verpakte deeltjes maken harde materialen, los verpakte maken zachte."
                }
            },
            {
                question: {
                    en: "What is density?",
                    es: "¿Qué es la densidad?",
                    de: "Was ist Dichte?",
                    nl: "Wat is dichtheid?"
                },
                options: [
                    { en: "How much matter fits in a space", es: "Cuánta materia cabe en un espacio", de: "Wie viel Materie in einen Raum passt", nl: "Hoeveel materie in een ruimte past" },
                    { en: "How heavy something is", es: "Qué tan pesado es algo", de: "Wie schwer etwas ist", nl: "Hoe zwaar iets is" },
                    { en: "How big something is", es: "Qué tan grande es algo", de: "Wie groß etwas ist", nl: "Hoe groot iets is" },
                    { en: "How hot something is", es: "Qué tan caliente es algo", de: "Wie heiß etwas ist", nl: "Hoe heet iets is" }
                ],
                correct: 0,
                explanation: {
                    en: "Density measures how much matter is packed into a given space - denser objects have more particles squeezed into the same volume.",
                    es: "La densidad mide cuánta materia está empacada en un espacio dado - objetos más densos tienen más partículas apretadas en el mismo volumen.",
                    de: "Dichte misst, wie viel Materie in einen gegebenen Raum gepackt ist - dichtere Objekte haben mehr Teilchen im gleichen Volumen zusammengepresst.",
                    nl: "Dichtheid meet hoeveel materie in een bepaalde ruimte is gepakt - dichtere voorwerpen hebben meer deeltjes samengeperst in hetzelfde volume."
                }
            },
            {
                question: {
                    en: "Why do some things float in water?",
                    es: "¿Por qué algunas cosas flotan en el agua?",
                    de: "Warum schwimmen manche Dinge auf dem Wasser?",
                    nl: "Waarom drijven sommige dingen op water?"
                },
                options: [
                    { en: "They are less dense than water", es: "Son menos densos que el agua", de: "Sie sind weniger dicht als Wasser", nl: "Ze zijn minder dicht dan water" },
                    { en: "They are bigger than water", es: "Son más grandes que el agua", de: "Sie sind größer als Wasser", nl: "Ze zijn groter dan water" },
                    { en: "They are lighter in color", es: "Son de color más claro", de: "Sie sind heller in der Farbe", nl: "Ze zijn lichter van kleur" },
                    { en: "They have air inside", es: "Tienen aire adentro", de: "Sie haben Luft drinnen", nl: "Ze hebben lucht van binnen" }
                ],
                correct: 0,
                explanation: {
                    en: "Objects float when they are less dense than water because the upward force of the water is stronger than the downward force of gravity.",
                    es: "Los objetos flotan cuando son menos densos que el agua porque la fuerza hacia arriba del agua es más fuerte que la fuerza hacia abajo de la gravedad.",
                    de: "Objekte schwimmen, wenn sie weniger dicht als Wasser sind, weil die Aufwärtskraft des Wassers stärker ist als die Abwärtskraft der Schwerkraft.",
                    nl: "Voorwerpen drijven wanneer ze minder dicht zijn dan water omdat de opwaartse kracht van het water sterker is dan de neerwaartse kracht van de zwaartekracht."
                }
            },
            {
                question: {
                    en: "What happens when you squeeze a sponge?",
                    es: "¿Qué pasa cuando aprietas una esponja?",
                    de: "Was passiert, wenn du einen Schwamm drückst?",
                    nl: "Wat gebeurt er als je een spons samendrukt?"
                },
                options: [
                    { en: "Water comes out and it gets smaller", es: "Sale agua y se hace más pequeña", de: "Wasser kommt heraus und es wird kleiner", nl: "Water komt eruit en het wordt kleiner" },
                    { en: "It gets harder", es: "Se vuelve más dura", de: "Es wird härter", nl: "Het wordt harder" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Squeezing a sponge forces out the water trapped in its tiny holes and compresses the sponge material into a smaller space.",
                    es: "Apretar una esponja fuerza la salida del agua atrapada en sus pequeños agujeros y comprime el material de la esponja en un espacio más pequeño.",
                    de: "Das Drücken eines Schwamms presst das in seinen winzigen Löchern gefangene Wasser heraus und komprimiert das Schwammmaterial in einen kleineren Raum.",
                    nl: "Het samendrukken van een spons dwingt het water uit de kleine gaatjes en perst het sponsmateriaal samen in een kleinere ruimte."
                }
            },
            {
                question: {
                    en: "Which materials are flexible?",
                    es: "¿Qué materiales son flexibles?",
                    de: "Welche Materialien sind flexibel?",
                    nl: "Welke materialen zijn flexibel?"
                },
                options: [
                    { en: "Rubber and fabric", es: "Goma y tela", de: "Gummi und Stoff", nl: "Rubber en stof" },
                    { en: "Glass and ceramic", es: "Vidrio y cerámica", de: "Glas und Keramik", nl: "Glas en keramiek" },
                    { en: "Metal and stone", es: "Metal y piedra", de: "Metall und Stein", nl: "Metaal en steen" },
                    { en: "Ice and concrete", es: "Hielo y concreto", de: "Eis und Beton", nl: "IJs en beton" }
                ],
                correct: 0,
                explanation: {
                    en: "Flexible materials can bend and stretch without breaking because their molecular structure allows particles to move and rearrange while staying connected.",
                    es: "Los materiales flexibles pueden doblarse y estirarse sin romperse porque su estructura molecular permite que las partículas se muevan y reorganicen mientras permanecen conectadas.",
                    de: "Flexible Materialien können sich biegen und dehnen ohne zu brechen, weil ihre molekulare Struktur es Teilchen erlaubt, sich zu bewegen und umzuordnen während sie verbunden bleiben.",
                    nl: "Flexibele materialen kunnen buigen en rekken zonder te breken omdat hun moleculaire structuur deeltjes toestaat te bewegen en herrangschikken terwijl ze verbonden blijven."
                }
            },
            {
                question: {
                    en: "What makes some materials waterproof?",
                    es: "¿Qué hace que algunos materiales sean impermeables?",
                    de: "Was macht manche Materialien wasserdicht?",
                    nl: "Wat maakt sommige materialen waterdicht?"
                },
                options: [
                    { en: "They don't absorb water", es: "No absorben agua", de: "Sie absorbieren kein Wasser", nl: "Ze absorberen geen water" },
                    { en: "They are very thick", es: "Son muy gruesos", de: "Sie sind sehr dick", nl: "Ze zijn heel dik" },
                    { en: "They are cold", es: "Son fríos", de: "Sie sind kalt", nl: "Ze zijn koud" },
                    { en: "They are smooth", es: "Son lisos", de: "Sie sind glatt", nl: "Ze zijn glad" }
                ],
                correct: 0,
                explanation: {
                    en: "Waterproof materials have tightly packed molecules or special coatings that prevent water molecules from penetrating through their surface.",
                    es: "Los materiales impermeables tienen moléculas muy empacadas o recubrimientos especiales que evitan que las moléculas de agua penetren su superficie.",
                    de: "Wasserdichte Materialien haben dicht gepackte Moleküle oder spezielle Beschichtungen, die verhindern, dass Wassermoleküle durch ihre Oberfläche eindringen.",
                    nl: "Waterdichte materialen hebben dicht verpakte moleculen of speciale coatings die voorkomen dat watermoleculen door hun oppervlak dringen."
                }
            },
            {
                question: {
                    en: "What do we call a mixture where you can see different parts?",
                    es: "¿Cómo llamamos a una mezcla donde puedes ver diferentes partes?",
                    de: "Wie nennen wir eine Mischung, bei der man verschiedene Teile sehen kann?",
                    nl: "Hoe noemen we een mengsel waarbij je verschillende delen kunt zien?"
                },
                options: [
                    { en: "A heterogeneous mixture", es: "Una mezcla heterogénea", de: "Eine heterogene Mischung", nl: "Een heterogeen mengsel" },
                    { en: "A homogeneous mixture", es: "Una mezcla homogénea", de: "Eine homogene Mischung", nl: "Een homogeen mengsel" },
                    { en: "A solution", es: "Una solución", de: "Eine Lösung", nl: "Een oplossing" },
                    { en: "A compound", es: "Un compuesto", de: "Eine Verbindung", nl: "Een verbinding" }
                ],
                correct: 0,
                explanation: {
                    en: "Heterogeneous mixtures have visible different components that don't blend completely, like oil and vinegar in salad dressing.",
                    es: "Las mezclas heterogéneas tienen componentes diferentes visibles que no se mezclan completamente, como aceite y vinagre en aderezo para ensalada.",
                    de: "Heterogene Mischungen haben sichtbar verschiedene Komponenten, die sich nicht vollständig vermischen, wie Öl und Essig in Salatdressing.",
                    nl: "Heterogene mengsels hebben zichtbaar verschillende componenten die niet volledig mengen, zoals olie en azijn in saladedressing."
                }
            },
            {
                question: {
                    en: "What happens when you mix sand and water?",
                    es: "¿Qué pasa cuando mezclas arena y agua?",
                    de: "Was passiert, wenn du Sand und Wasser mischst?",
                    nl: "Wat gebeurt er als je zand en water mengt?"
                },
                options: [
                    { en: "The sand sinks to the bottom", es: "La arena se hunde al fondo", de: "Der Sand sinkt nach unten", nl: "Het zand zinkt naar de bodem" },
                    { en: "The sand dissolves", es: "La arena se disuelve", de: "Der Sand löst sich auf", nl: "Het zand lost op" },
                    { en: "They form a new material", es: "Forman un nuevo material", de: "Sie bilden ein neues Material", nl: "Ze vormen een nieuw materiaal" },
                    { en: "The sand floats", es: "La arena flota", de: "Der Sand schwimmt", nl: "Het zand drijft" }
                ],
                correct: 0,
                explanation: {
                    en: "Sand doesn't dissolve in water because sand particles are too large and have no attraction to water molecules, so gravity pulls them down.",
                    es: "La arena no se disuelve en agua porque las partículas de arena son muy grandes y no tienen atracción a las moléculas de agua, así la gravedad las jala hacia abajo.",
                    de: "Sand löst sich nicht in Wasser auf, weil Sandpartikel zu groß sind und keine Anziehung zu Wassermolekülen haben, so zieht die Schwerkraft sie nach unten.",
                    nl: "Zand lost niet op in water omdat zanddeeltjes te groot zijn en geen aantrekking hebben tot watermoleculen, dus trekt de zwaartekracht ze naar beneden."
                }
            },
            {
                question: {
                    en: "How can you separate salt from salt water?",
                    es: "¿Cómo puedes separar la sal del agua salada?",
                    de: "Wie kannst du Salz aus Salzwasser trennen?",
                    nl: "Hoe kun je zout scheiden van zout water?"
                },
                options: [
                    { en: "Heat the water until it evaporates", es: "Calentar el agua hasta que se evapore", de: "Das Wasser erwärmen, bis es verdunstet", nl: "Het water opwarmen tot het verdampt" },
                    { en: "Freeze the mixture", es: "Congelar la mezcla", de: "Die Mischung einfrieren", nl: "Het mengsel bevriezen" },
                    { en: "Add more water", es: "Agregar más agua", de: "Mehr Wasser hinzufügen", nl: "Meer water toevoegen" },
                    { en: "Stir it very fast", es: "Revolverlo muy rápido", de: "Es sehr schnell rühren", nl: "Het heel snel roeren" }
                ],
                correct: 0,
                explanation: {
                    en: "Evaporation separates salt water because only water turns to vapor and escapes, leaving the dissolved salt crystals behind.",
                    es: "La evaporación separa el agua salada porque solo el agua se convierte en vapor y se escapa, dejando atrás los cristales de sal disueltos.",
                    de: "Verdampfung trennt Salzwasser, weil nur Wasser zu Dampf wird und entweicht, wodurch die gelösten Salzkristalle zurückbleiben.",
                    nl: "Verdamping scheidt zout water omdat alleen water tot damp wordt en ontsnapt, waardoor de opgeloste zoutkristallen achterblijven."
                }
            },
            {
                question: {
                    en: "What is rust?",
                    es: "¿Qué es el óxido?",
                    de: "Was ist Rost?",
                    nl: "Wat is roest?"
                },
                options: [
                    { en: "What happens when iron combines with oxygen", es: "Lo que pasa cuando el hierro se combina con oxígeno", de: "Was passiert, wenn Eisen sich mit Sauerstoff verbindet", nl: "Wat gebeurt als ijzer combineert met zuurstof" },
                    { en: "A type of paint", es: "Un tipo de pintura", de: "Eine Art Farbe", nl: "Een soort verf" },
                    { en: "Dirt on metal", es: "Suciedad en el metal", de: "Schmutz auf Metall", nl: "Vuil op metaal" },
                    { en: "A kind of metal", es: "Un tipo de metal", de: "Eine Art Metall", nl: "Een soort metaal" }
                ],
                correct: 0,
                explanation: {
                    en: "Rust is iron oxide formed when iron reacts chemically with oxygen and moisture in the air, creating a new reddish-brown compound.",
                    es: "El óxido es óxido de hierro formado cuando el hierro reacciona químicamente con oxígeno y humedad en el aire, creando un nuevo compuesto café-rojizo.",
                    de: "Rost ist Eisenoxid, das entsteht, wenn Eisen chemisch mit Sauerstoff und Feuchtigkeit in der Luft reagiert und eine neue rötlich-braune Verbindung bildet.",
                    nl: "Roest is ijzeroxide gevormd wanneer ijzer chemisch reageert met zuurstof en vocht in de lucht, waardoor een nieuwe roodbruine verbinding ontstaat."
                }
            },
            {
                question: {
                    en: "What properties help us identify different materials?",
                    es: "¿Qué propiedades nos ayudan a identificar diferentes materiales?",
                    de: "Welche Eigenschaften helfen uns, verschiedene Materialien zu identifizieren?",
                    nl: "Welke eigenschappen helpen ons verschillende materialen te identificeren?"
                },
                options: [
                    { en: "Color, texture, hardness, and weight", es: "Color, textura, dureza y peso", de: "Farbe, Textur, Härte und Gewicht", nl: "Kleur, textuur, hardheid en gewicht" },
                    { en: "Only color", es: "Solo color", de: "Nur Farbe", nl: "Alleen kleur" },
                    { en: "Only size", es: "Solo tamaño", de: "Nur Größe", nl: "Alleen grootte" },
                    { en: "Only smell", es: "Solo olor", de: "Nur Geruch", nl: "Alleen geur" }
                ],
                correct: 0,
                explanation: {
                    en: "We identify materials by testing their observable and measurable properties like appearance, texture, density, and how they react to forces.",
                    es: "Identificamos materiales probando sus propiedades observables y medibles como apariencia, textura, densidad y cómo reaccionan a las fuerzas.",
                    de: "Wir identifizieren Materialien durch Testen ihrer beobachtbaren und messbaren Eigenschaften wie Aussehen, Textur, Dichte und wie sie auf Kräfte reagieren.",
                    nl: "We identificeren materialen door hun waarneembare en meetbare eigenschappen te testen zoals uiterlijk, textuur, dichtheid en hoe ze reageren op krachten."
                }
            },
            {
                question: {
                    en: "What is the difference between natural and synthetic materials?",
                    es: "¿Cuál es la diferencia entre materiales naturales y sintéticos?",
                    de: "Was ist der Unterschied zwischen natürlichen und synthetischen Materialien?",
                    nl: "Wat is het verschil tussen natuurlijke en synthetische materialen?"
                },
                options: [
                    { en: "Natural materials come from nature, synthetic are made by people", es: "Los naturales vienen de la naturaleza, los sintéticos los hacen las personas", de: "Natürliche kommen aus der Natur, synthetische werden von Menschen gemacht", nl: "Natuurlijke komen uit de natuur, synthetische worden door mensen gemaakt" },
                    { en: "Natural materials are always better", es: "Los materiales naturales siempre son mejores", de: "Natürliche Materialien sind immer besser", nl: "Natuurlijke materialen zijn altijd beter" },
                    { en: "Synthetic materials don't exist", es: "Los materiales sintéticos no existen", de: "Synthetische Materialien existieren nicht", nl: "Synthetische materialen bestaan niet" },
                    { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
                ],
                correct: 0,
                explanation: {
                    en: "Natural materials exist in nature without human processing, while synthetic materials are manufactured by people using chemical processes to create new properties.",
                    es: "Los materiales naturales existen en la naturaleza sin procesamiento humano, mientras que los sintéticos son fabricados por personas usando procesos químicos para crear nuevas propiedades.",
                    de: "Natürliche Materialien existieren in der Natur ohne menschliche Verarbeitung, während synthetische Materialien von Menschen mit chemischen Prozessen hergestellt werden, um neue Eigenschaften zu schaffen.",
                    nl: "Natuurlijke materialen bestaan in de natuur zonder menselijke verwerking, terwijl synthetische materialen door mensen worden gemaakt met chemische processen om nieuwe eigenschappen te creëren."
                }
            },
            {
                question: {
                    en: "Which materials are good thermal conductors?",
                    es: "¿Qué materiales son buenos conductores térmicos?",
                    de: "Welche Materialien sind gute Wärmeleiter?",
                    nl: "Welke materialen zijn goede warmtegeleiders?"
                },
                options: [
                    { en: "Metals like aluminum and copper", es: "Metales como aluminio y cobre", de: "Metalle wie Aluminium und Kupfer", nl: "Metalen zoals aluminium en koper" },
                    { en: "Wood and plastic", es: "Madera y plástico", de: "Holz und Plastik", nl: "Hout en plastic" },
                    { en: "Fabric and paper", es: "Tela y papel", de: "Stoff und Papier", nl: "Stof en papier" },
                    { en: "Glass and ceramic", es: "Vidrio y cerámica", de: "Glas und Keramik", nl: "Glas en keramiek" }
                ],
                correct: 0,
                explanation: {
                    en: "Metals conduct heat well because their electrons can move freely, carrying thermal energy quickly from hot areas to cooler ones.",
                    es: "Los metales conducen bien el calor porque sus electrones pueden moverse libremente, llevando energía térmica rápidamente de áreas calientes a más frías.",
                    de: "Metalle leiten Wärme gut, weil sich ihre Elektronen frei bewegen können und thermische Energie schnell von heißen zu kühleren Bereichen transportieren.",
                    nl: "Metalen geleiden warmte goed omdat hun elektronen vrij kunnen bewegen en thermische energie snel van warme naar koelere gebieden transporteren."
                }
            },
            {
                question: {
                    en: "What are thermal insulators used for?",
                    es: "¿Para qué se usan los aislantes térmicos?",
                    de: "Wofür werden Wärmeisolatoren verwendet?",
                    nl: "Waarvoor worden warmte-isolatoren gebruikt?"
                },
                options: [
                    { en: "To keep heat in or out", es: "Para mantener el calor adentro o afuera", de: "Um Wärme drinnen oder draußen zu halten", nl: "Om warmte binnen of buiten te houden" },
                    { en: "To conduct electricity", es: "Para conducir electricidad", de: "Um Elektrizität zu leiten", nl: "Om elektriciteit te geleiden" },
                    { en: "To make things magnetic", es: "Para hacer las cosas magnéticas", de: "Um Dinge magnetisch zu machen", nl: "Om dingen magnetisch te maken" },
                    { en: "To change colors", es: "Para cambiar colores", de: "Um Farben zu ändern", nl: "Om kleuren te veranderen" }
                ],
                correct: 0,
                explanation: {
                    en: "Thermal insulators prevent heat transfer, keeping warm things warm and cool things cool by blocking the movement of thermal energy.",
                    es: "Los aislantes térmicos previenen la transferencia de calor, manteniendo las cosas calientes calientes y las frías frías bloqueando el movimiento de energía térmica.",
                    de: "Wärmeisolatoren verhindern Wärmeübertragung und halten warme Dinge warm und kühle Dinge kühl, indem sie die Bewegung thermischer Energie blockieren.",
                    nl: "Warmte-isolatoren voorkomen warmteoverdracht, houden warme dingen warm en koele dingen koel door de beweging van thermische energie te blokkeren."
                }
            },
            {
                question: {
                    en: "What happens when you stretch a rubber band?",
                    es: "¿Qué pasa cuando estiras una banda elástica?",
                    de: "Was passiert, wenn du ein Gummiband dehnst?",
                    nl: "Wat gebeurt er als je een elastiekje uitrekt?"
                },
                options: [
                    { en: "It stores energy and can snap back", es: "Almacena energía y puede regresar", de: "Es speichert Energie und kann zurückschnappen", nl: "Het slaat energie op en kan terugspringen" },
                    { en: "It breaks immediately", es: "Se rompe inmediatamente", de: "Es bricht sofort", nl: "Het breekt meteen" },
                    { en: "It becomes permanent", es: "Se vuelve permanente", de: "Es wird permanent", nl: "Het wordt permanent" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Rubber bands store elastic potential energy when stretched, and this stored energy provides the force to snap back to original shape when released.",
                    es: "Las bandas elásticas almacenan energía potencial elástica cuando se estiran, y esta energía almacenada proporciona la fuerza para regresar a su forma original cuando se sueltan.",
                    de: "Gummibänder speichern elastische potentielle Energie beim Dehnen, und diese gespeicherte Energie liefert die Kraft, um beim Loslassen in die ursprüngliche Form zurückzuschnappen.",
                    nl: "Elastiekjes slaan elastische potentiële energie op bij uitrekken, en deze opgeslagen energie levert de kracht om terug te springen naar de oorspronkelijke vorm bij loslaten."
                }
            },
            {
                question: {
                    en: "What makes some materials brittle?",
                    es: "¿Qué hace que algunos materiales sean quebradizos?",
                    de: "Was macht manche Materialien spröde?",
                    nl: "Wat maakt sommige materialen bros?"
                },
                options: [
                    { en: "Their particles are arranged rigidly and can't move", es: "Sus partículas están ordenadas rígidamente y no se pueden mover", de: "Ihre Teilchen sind starr angeordnet und können sich nicht bewegen", nl: "Hun deeltjes zijn stijf gerangschikt en kunnen niet bewegen" },
                    { en: "They are very old", es: "Son muy viejos", de: "Sie sind sehr alt", nl: "Ze zijn heel oud" },
                    { en: "They are too light", es: "Son muy livianos", de: "Sie sind zu leicht", nl: "Ze zijn te licht" },
                    { en: "They are too colorful", es: "Son muy coloridos", de: "Sie sind zu bunt", nl: "Ze zijn te kleurrijk" }
                ],
                correct: 0,
                explanation: {
                    en: "Brittle materials break easily because their rigid molecular structure doesn't allow particles to slide past each other when force is applied.",
                    es: "Los materiales quebradizos se rompen fácilmente porque su estructura molecular rígida no permite que las partículas se deslicen unas sobre otras cuando se aplica fuerza.",
                    de: "Spröde Materialien brechen leicht, weil ihre starre molekulare Struktur nicht erlaubt, dass Teilchen aneinander vorbeigleiten, wenn Kraft angewendet wird.",
                    nl: "Brosse materialen breken gemakkelijk omdat hun stijve moleculaire structuur niet toestaat dat deeltjes langs elkaar glijden wanneer kracht wordt toegepast."
                }
            },
            {
                question: {
                    en: "How do we test if a material is absorbent?",
                    es: "¿Cómo probamos si un material es absorbente?",
                    de: "Wie testen wir, ob ein Material saugfähig ist?",
                    nl: "Hoe testen we of een materiaal absorberend is?"
                },
                options: [
                    { en: "Drop water on it and see if it soaks in", es: "Goteamos agua sobre él y vemos si se absorbe", de: "Wasser darauf tropfen und sehen, ob es einzieht", nl: "Druppel water erop en kijk of het opzuigt" },
                    { en: "Measure its weight", es: "Medir su peso", de: "Sein Gewicht messen", nl: "Het gewicht meten" },
                    { en: "Check its color", es: "Revisar su color", de: "Seine Farbe überprüfen", nl: "De kleur controleren" },
                    { en: "Count its parts", es: "Contar sus partes", de: "Seine Teile zählen", nl: "De delen tellen" }
                ],
                correct: 0,
                explanation: {
                    en: "Testing absorbency with water shows whether a material has tiny spaces that can soak up and hold liquid molecules within its structure.",
                    es: "Probar la absorbencia con agua muestra si un material tiene espacios pequeños que pueden absorber y retener moléculas líquidas dentro de su estructura.",
                    de: "Das Testen der Saugfähigkeit mit Wasser zeigt, ob ein Material winzige Räume hat, die Flüssigkeitsmoleküle in seiner Struktur aufsaugen und halten können.",
                    nl: "Het testen van absorptie met water toont of een materiaal kleine ruimtes heeft die vloeibare moleculen in zijn structuur kunnen opzuigen en vasthouden."
                }
            },
            {
                question: {
                    en: "What happens when you mix two different colored play doughs?",
                    es: "¿Qué pasa cuando mezclas dos masas de colores diferentes?",
                    de: "Was passiert, wenn du zwei verschiedenfarbige Knete mischst?",
                    nl: "Wat gebeurt er als je twee verschillende gekleurde klei mengt?"
                },
                options: [
                    { en: "You get a new color mixture", es: "Obtienes una nueva mezcla de color", de: "Du bekommst eine neue Farbmischung", nl: "Je krijgt een nieuwe kleurmengsel" },
                    { en: "They separate completely", es: "Se separan completamente", de: "Sie trennen sich vollständig", nl: "Ze scheiden volledig" },
                    { en: "One disappears", es: "Una desaparece", de: "Eine verschwindet", nl: "Eén verdwijnt" },
                    { en: "They both turn white", es: "Ambas se vuelven blancas", de: "Beide werden weiß", nl: "Ze worden beide wit" }
                ],
                correct: 0,
                explanation: {
                    en: "Mixing different colored materials creates new color combinations as the pigment particles blend together throughout the mixture.",
                    es: "Mezclar materiales de diferentes colores crea nuevas combinaciones de colores mientras las partículas de pigmento se mezclan a través de la mezcla.",
                    de: "Das Mischen verschiedenfarbiger Materialien erzeugt neue Farbkombinationen, während sich die Pigmentpartikel in der gesamten Mischung vermischen.",
                    nl: "Het mengen van verschillende gekleurde materialen creëert nieuwe kleurcombinaties terwijl de pigmentdeeltjes door het mengsel mengen."
                }
            },
            {
                question: {
                    en: "Which materials can be recycled?",
                    es: "¿Qué materiales pueden ser reciclados?",
                    de: "Welche Materialien können recycelt werden?",
                    nl: "Welke materialen kunnen gerecycled worden?"
                },
                options: [
                    { en: "Paper, plastic, glass, and metal", es: "Papel, plástico, vidrio y metal", de: "Papier, Plastik, Glas und Metall", nl: "Papier, plastic, glas en metaal" },
                    { en: "Only paper", es: "Solo papel", de: "Nur Papier", nl: "Alleen papier" },
                    { en: "Only metal", es: "Solo metal", de: "Nur Metall", nl: "Alleen metaal" },
                    { en: "Nothing can be recycled", es: "Nada puede ser reciclado", de: "Nichts kann recycelt werden", nl: "Niets kan gerecycled worden" }
                ],
                correct: 0,
                explanation: {
                    en: "These materials can be melted down and reformed into new products, reducing waste and conserving natural resources for future use.",
                    es: "Estos materiales pueden ser derretidos y reformados en nuevos productos, reduciendo desperdicios y conservando recursos naturales para uso futuro.",
                    de: "Diese Materialien können eingeschmolzen und zu neuen Produkten umgeformt werden, wodurch Abfall reduziert und natürliche Ressourcen für zukünftige Nutzung erhalten werden.",
                    nl: "Deze materialen kunnen worden gesmolten en hervormd tot nieuwe producten, waardoor afval wordt verminderd en natuurlijke hulpbronnen voor toekomstig gebruik worden behouden."
                }
            },
            {
                question: {
                    en: "What is the best way to test material properties safely?",
                    es: "¿Cuál es la mejor manera de probar las propiedades de los materiales de manera segura?",
                    de: "Was ist der beste Weg, Materialeigenschaften sicher zu testen?",
                    nl: "Wat is de beste manier om materiaaleigenschappen veilig te testen?"
                },
                options: [
                    { en: "Use simple tests with adult supervision", es: "Usar pruebas simples con supervisión de adultos", de: "Einfache Tests unter Aufsicht von Erwachsenen verwenden", nl: "Gebruik eenvoudige tests met toezicht van volwassenen" },
                    { en: "Try dangerous experiments alone", es: "Intentar experimentos peligrosos solo", de: "Gefährliche Experimente allein versuchen", nl: "Gevaarlijke experimenten alleen proberen" },
                    { en: "Guess without testing", es: "Adivinar sin probar", de: "Raten ohne zu testen", nl: "Gokken zonder te testen" },
                    { en: "Only read about them", es: "Solo leer sobre ellos", de: "Nur darüber lesen", nl: "Alleen erover lezen" }
                ],
                correct: 0,
                explanation: {
                    en: "Safe testing means using proper procedures, wearing protection when needed, and having adult guidance to avoid accidents while learning about materials.",
                    es: "Las pruebas seguras significan usar procedimientos apropiados, usar protección cuando sea necesario y tener guía de adultos para evitar accidentes mientras aprendemos sobre materiales.",
                    de: "Sicheres Testen bedeutet, angemessene Verfahren zu verwenden, bei Bedarf Schutz zu tragen und Anleitung von Erwachsenen zu haben, um Unfälle beim Lernen über Materialien zu vermeiden.",
                    nl: "Veilig testen betekent juiste procedures gebruiken, bescherming dragen wanneer nodig en begeleiding van volwassenen hebben om ongelukken te voorkomen tijdens het leren over materialen."
                }
            },
            {
                question: {
                    en: "What can you make by combining different materials?",
                    es: "¿Qué puedes hacer combinando diferentes materiales?",
                    de: "Was kannst du durch Kombination verschiedener Materialien herstellen?",
                    nl: "Wat kun je maken door verschillende materialen te combineren?"
                },
                options: [
                    { en: "New materials with different properties", es: "Nuevos materiales con diferentes propiedades", de: "Neue Materialien mit verschiedenen Eigenschaften", nl: "Nieuwe materialen met verschillende eigenschappen" },
                    { en: "Nothing useful", es: "Nada útil", de: "Nichts Nützliches", nl: "Niets nuttigs" },
                    { en: "Only the same materials", es: "Solo los mismos materiales", de: "Nur die gleichen Materialien", nl: "Alleen dezelfde materialen" },
                    { en: "Materials that disappear", es: "Materiales que desaparecen", de: "Materialien, die verschwinden", nl: "Materialen die verdwijnen" }
                ],
                correct: 0,
                explanation: {
                    en: "Combining materials creates composites with enhanced properties that neither material had alone, like strength, flexibility, or resistance to damage.",
                    es: "Combinar materiales crea compuestos con propiedades mejoradas que ningún material tenía solo, como fuerza, flexibilidad o resistencia al daño.",
                    de: "Das Kombinieren von Materialien erzeugt Verbundwerkstoffe mit verbesserten Eigenschaften, die kein Material allein hatte, wie Stärke, Flexibilität oder Widerstand gegen Schäden.",
                    nl: "Het combineren van materialen creëert composieten met verbeterde eigenschappen die geen enkel materiaal alleen had, zoals sterkte, flexibiliteit of weerstand tegen schade."
                }
            },
            {
                question: {
                    en: "Why is it important to choose the right material for a job?",
                    es: "¿Por qué es importante elegir el material correcto para un trabajo?",
                    de: "Warum ist es wichtig, das richtige Material für eine Aufgabe zu wählen?",
                    nl: "Waarom is het belangrijk om het juiste materiaal voor een klus te kiezen?"
                },
                options: [
                    { en: "Different materials have different properties and uses", es: "Diferentes materiales tienen diferentes propiedades y usos", de: "Verschiedene Materialien haben verschiedene Eigenschaften und Verwendungen", nl: "Verschillende materialen hebben verschillende eigenschappen en toepassingen" },
                    { en: "All materials are the same", es: "Todos los materiales son iguales", de: "Alle Materialien sind gleich", nl: "Alle materialen zijn hetzelfde" },
                    { en: "It doesn't matter which you choose", es: "No importa cuál elijas", de: "Es ist egal, welches du wählst", nl: "Het maakt niet uit welke je kiest" },
                    { en: "Only expensive materials work", es: "Solo los materiales caros funcionan", de: "Nur teure Materialien funktionieren", nl: "Alleen dure materialen werken" }
                ],
                correct: 0,
                explanation: {
                    en: "Each material has unique properties suited for specific purposes - using the wrong material can lead to failure, waste, or safety problems.",
                    es: "Cada material tiene propiedades únicas adecuadas para propósitos específicos - usar el material equivocado puede llevar a fallas, desperdicio o problemas de seguridad.",
                    de: "Jedes Material hat einzigartige Eigenschaften, die für bestimmte Zwecke geeignet sind - das falsche Material zu verwenden kann zu Versagen, Verschwendung oder Sicherheitsproblemen führen.",
                    nl: "Elk materiaal heeft unieke eigenschappen geschikt voor specifieke doeleinden - het verkeerde materiaal gebruiken kan leiden tot falen, verspilling of veiligheidsproblemen."
                }
            },
            {
                question: {
                    en: "What amazing things can we learn from studying materials?",
                    es: "¿Qué cosas asombrosas podemos aprender estudiando materiales?",
                    de: "Was für erstaunliche Dinge können wir durch das Studium von Materialien lernen?",
                    nl: "Welke geweldige dingen kunnen we leren door materialen te bestuderen?"
                },
                options: [
                    { en: "How to make better and stronger materials", es: "Cómo hacer materiales mejores y más fuertes", de: "Wie man bessere und stärkere Materialien herstellt", nl: "Hoe we betere en sterkere materialen kunnen maken" },
                    { en: "That all materials are boring", es: "Que todos los materiales son aburridos", de: "Dass alle Materialien langweilig sind", nl: "Dat alle materialen saai zijn" },
                    { en: "Nothing new", es: "Nada nuevo", de: "Nichts Neues", nl: "Niets nieuws" },
                    { en: "That materials don't change", es: "Que los materiales no cambian", de: "Dass sich Materialien nicht ändern", nl: "Dat materialen niet veranderen" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying materials helps us discover how to create new technologies, solve problems, and improve life through better understanding of matter and its properties.",
                    es: "Estudiar materiales nos ayuda a descubrir cómo crear nuevas tecnologías, resolver problemas y mejorar la vida a través de un mejor entendimiento de la materia y sus propiedades.",
                    de: "Das Studium von Materialien hilft uns zu entdecken, wie wir neue Technologien schaffen, Probleme lösen und das Leben durch besseres Verständnis von Materie und ihren Eigenschaften verbessern können.",
                    nl: "Het bestuderen van materialen helpt ons ontdekken hoe we nieuwe technologieën kunnen creëren, problemen oplossen en het leven verbeteren door beter begrip van materie en zijn eigenschappen."
                }
            },
            {
                question: {
                    en: "What is a compound?",
                    es: "¿Qué es un compuesto?",
                    de: "Was ist eine Verbindung?",
                    nl: "Wat is een verbinding?"
                },
                options: [
                    { en: "Two or more different elements chemically bonded", es: "Dos o más elementos diferentes enlazados químicamente", de: "Zwei oder mehr verschiedene Elemente chemisch verbunden", nl: "Twee of meer verschillende elementen chemisch gebonden" },
                    { en: "A single type of atom", es: "Un solo tipo de átomo", de: "Ein einzelner Atomtyp", nl: "Een enkel type atoom" },
                    { en: "A mixture you can separate easily", es: "Una mezcla que puedes separar fácilmente", de: "Eine Mischung, die du leicht trennen kannst", nl: "Een mengsel dat je gemakkelijk kunt scheiden" },
                    { en: "Pure water only", es: "Solo agua pura", de: "Nur reines Wasser", nl: "Alleen zuiver water" }
                ],
                correct: 0,
                explanation: {
                    en: "A compound is formed when two or more different elements bond chemically, creating a new substance with different properties than the original elements.",
                    es: "Un compuesto se forma cuando dos o más elementos diferentes se enlazan químicamente, creando una sustancia nueva con propiedades diferentes a los elementos originales.",
                    de: "Eine Verbindung entsteht, wenn zwei oder mehr verschiedene Elemente chemisch binden und eine neue Substanz mit anderen Eigenschaften als die ursprünglichen Elemente schaffen.",
                    nl: "Een verbinding ontstaat wanneer twee of meer verschillende elementen chemisch binden, waardoor een nieuwe stof ontstaat met andere eigenschappen dan de oorspronkelijke elementen."
                }
            },
            {
                question: {
                    en: "What is crystallization?",
                    es: "¿Qué es la cristalización?",
                    de: "Was ist Kristallisation?",
                    nl: "Wat is kristallisatie?"
                },
                options: [
                    { en: "When dissolved substances form solid crystals", es: "Cuando sustancias disueltas forman cristales sólidos", de: "Wenn gelöste Stoffe feste Kristalle bilden", nl: "Wanneer opgeloste stoffen vaste kristallen vormen" },
                    { en: "When liquids turn into gas", es: "Cuando líquidos se convierten en gas", de: "Wenn Flüssigkeiten zu Gas werden", nl: "Wanneer vloeistoffen gas worden" },
                    { en: "When solids melt completely", es: "Cuando sólidos se derriten completamente", de: "Wenn Feststoffe vollständig schmelzen", nl: "Wanneer vaste stoffen volledig smelten" },
                    { en: "When materials change color", es: "Cuando materiales cambian de color", de: "Wenn Materialien die Farbe ändern", nl: "Wanneer materialen van kleur veranderen" }
                ],
                correct: 0,
                explanation: {
                    en: "Crystallization happens when dissolved particles come out of solution and arrange themselves in an orderly pattern, forming beautiful crystal structures.",
                    es: "La cristalización ocurre cuando partículas disueltas salen de la solución y se ordenan en un patrón ordenado, formando hermosas estructuras cristalinas.",
                    de: "Kristallisation geschieht, wenn gelöste Teilchen aus der Lösung austreten und sich in einem ordentlichen Muster anordnen, wodurch schöne Kristallstrukturen entstehen.",
                    nl: "Kristallisatie gebeurt wanneer opgeloste deeltjes uit de oplossing komen en zich in een ordelijk patroon rangschikken, waardoor prachtige kristalstructuren ontstaan."
                }
            },
            {
                question: {
                    en: "What is sublimation?",
                    es: "¿Qué es la sublimación?",
                    de: "Was ist Sublimation?",
                    nl: "Wat is sublimatie?"
                },
                options: [
                    { en: "When a solid turns directly into gas without melting", es: "Cuando un sólido se convierte directamente en gas sin derretirse", de: "Wenn ein Feststoff direkt zu Gas wird ohne zu schmelzen", nl: "Wanneer een vaste stof direct gas wordt zonder te smelten" },
                    { en: "When liquids freeze quickly", es: "Cuando líquidos se congelan rápidamente", de: "Wenn Flüssigkeiten schnell gefrieren", nl: "Wanneer vloeistoffen snel bevriezen" },
                    { en: "When gas becomes liquid", es: "Cuando el gas se convierte en líquido", de: "Wenn Gas zu Flüssigkeit wird", nl: "Wanneer gas vloeistof wordt" },
                    { en: "When materials get very hot", es: "Cuando materiales se calientan mucho", de: "Wenn Materialien sehr heiß werden", nl: "Wanneer materialen heel heet worden" }
                ],
                correct: 0,
                explanation: {
                    en: "Sublimation is when a solid skips the liquid phase and goes directly to gas, like dry ice turning into carbon dioxide vapor.",
                    es: "La sublimación es cuando un sólido omite la fase líquida y va directamente a gas, como el hielo seco convirtiéndose en vapor de dióxido de carbono.",
                    de: "Sublimation ist, wenn ein Feststoff die flüssige Phase überspringt und direkt zu Gas wird, wie Trockeneis, das zu Kohlendioxiddampf wird.",
                    nl: "Sublimatie is wanneer een vaste stof de vloeibare fase overslaat en direct gas wordt, zoals droogijs dat koolstofdioxide damp wordt."
                }
            },
            {
                question: {
                    en: "What happens when you cool a gas?",
                    es: "¿Qué pasa cuando enfrías un gas?",
                    de: "Was passiert, wenn du ein Gas abkühlst?",
                    nl: "Wat gebeurt er als je een gas afkoelt?"
                },
                options: [
                    { en: "It condenses into liquid droplets", es: "Se condensa en gotas líquidas", de: "Es kondensiert zu flüssigen Tröpfchen", nl: "Het condenseert tot vloeibare druppeltjes" },
                    { en: "It becomes hotter", es: "Se vuelve más caliente", de: "Es wird heißer", nl: "Het wordt warmer" },
                    { en: "It expands more", es: "Se expande más", de: "Es dehnt sich mehr aus", nl: "Het zet meer uit" },
                    { en: "Nothing happens to it", es: "No le pasa nada", de: "Nichts passiert damit", nl: "Er gebeurt niets mee" }
                ],
                correct: 0,
                explanation: {
                    en: "When gas molecules lose energy from cooling, they slow down and come closer together, forming liquid droplets through condensation.",
                    es: "Cuando las moléculas de gas pierden energía al enfriarse, se ralentizan y se acercan, formando gotas líquidas a través de la condensación.",
                    de: "Wenn Gasmolekulen durch Abkühlung Energie verlieren, verlangsamen sie sich und kommen näher zusammen, wodurch flüssige Tröpfchen durch Kondensation entstehen.",
                    nl: "Wanneer gasmoleculen energie verliezen door afkoeling, vertragen ze en komen dichter bij elkaar, waardoor vloeibare druppeltjes ontstaan door condensatie."
                }
            },
            {
                question: {
                    en: "What makes a material opaque?",
                    es: "¿Qué hace que un material sea opaco?",
                    de: "Was macht ein Material undurchsichtig?",
                    nl: "Wat maakt een materiaal ondoorzichtig?"
                },
                options: [
                    { en: "It blocks light from passing through", es: "Bloquea el paso de la luz", de: "Es blockiert das Durchdringen von Licht", nl: "Het blokkeert licht dat er doorheen gaat" },
                    { en: "It reflects all colors perfectly", es: "Refleja todos los colores perfectamente", de: "Es reflektiert alle Farben perfekt", nl: "Het reflecteert alle kleuren perfect" },
                    { en: "It has a smooth surface", es: "Tiene una superficie lisa", de: "Es hat eine glatte Oberfläche", nl: "Het heeft een glad oppervlak" },
                    { en: "It is very lightweight", es: "Es muy ligero", de: "Es ist sehr leicht", nl: "Het is heel lichtgewicht" }
                ],
                correct: 0,
                explanation: {
                    en: "Opaque materials absorb or scatter light instead of letting it pass through, making it impossible to see through them to the other side.",
                    es: "Los materiales opacos absorben o dispersan la luz en lugar de dejarla pasar, haciendo imposible ver a través de ellos al otro lado.",
                    de: "Undurchsichtige Materialien absorbieren oder streuen Licht, anstatt es durchzulassen, wodurch es unmöglich wird, durch sie zur anderen Seite zu sehen.",
                    nl: "Ondoorzichtige materialen absorberen of verstrooien licht in plaats van het erdoor te laten, waardoor het onmogelijk is er doorheen naar de andere kant te kijken."
                }
            },
            {
                question: {
                    en: "What is the melting point?",
                    es: "¿Qué es el punto de fusión?",
                    de: "Was ist der Schmelzpunkt?",
                    nl: "Wat is het smeltpunt?"
                },
                options: [
                    { en: "The temperature at which a solid becomes liquid", es: "La temperatura a la cual un sólido se convierte en líquido", de: "Die Temperatur, bei der ein Feststoff flüssig wird", nl: "De temperatuur waarbij een vaste stof vloeibaar wordt" },
                    { en: "When something gets very cold", es: "Cuando algo se pone muy frío", de: "Wenn etwas sehr kalt wird", nl: "Wanneer iets heel koud wordt" },
                    { en: "How heavy a material is", es: "Qué tan pesado es un material", de: "Wie schwer ein Material ist", nl: "Hoe zwaar een materiaal is" },
                    { en: "The color that appears when heated", es: "El color que aparece cuando se calienta", de: "Die Farbe, die beim Erhitzen erscheint", nl: "De kleur die verschijnt bij verhitting" }
                ],
                correct: 0,
                explanation: {
                    en: "Each material has a specific melting point temperature where its solid structure breaks down and particles move freely as liquid.",
                    es: "Cada material tiene una temperatura de punto de fusión específica donde su estructura sólida se rompe y las partículas se mueven libremente como líquido.",
                    de: "Jedes Material hat eine spezifische Schmelzpunkt-Temperatur, bei der seine feste Struktur zusammenbricht und Teilchen sich frei als Flüssigkeit bewegen.",
                    nl: "Elk materiaal heeft een specifieke smeltpunttemperatuur waarbij zijn vaste structuur afbreekt en deeltjes vrij bewegen als vloeistof."
                }
            },
            {
                question: {
                    en: "What is the boiling point?",
                    es: "¿Qué es el punto de ebullición?",
                    de: "Was ist der Siedepunkt?",
                    nl: "Wat is het kookpunt?"
                },
                options: [
                    { en: "The temperature when liquid becomes gas throughout", es: "La temperatura cuando el líquido se convierte en gas completamente", de: "Die Temperatur, wenn Flüssigkeit überall zu Gas wird", nl: "De temperatuur waarbij vloeistof overal gas wordt" },
                    { en: "When bubbles appear on the surface", es: "Cuando aparecen burbujas en la superficie", de: "Wenn Blasen an der Oberfläche erscheinen", nl: "Wanneer bellen op het oppervlak verschijnen" },
                    { en: "The coldest temperature possible", es: "La temperatura más fría posible", de: "Die kälteste mögliche Temperatur", nl: "De koudste mogelijke temperatuur" },
                    { en: "When materials change shape", es: "Cuando materiales cambian de forma", de: "Wenn Materialien die Form ändern", nl: "Wanneer materialen van vorm veranderen" }
                ],
                correct: 0,
                explanation: {
                    en: "At boiling point, liquid molecules have enough energy to escape as vapor bubbles throughout the liquid, not just at the surface.",
                    es: "En el punto de ebullición, las moléculas líquidas tienen suficiente energía para escapar como burbujas de vapor a través del líquido, no solo en la superficie.",
                    de: "Am Siedepunkt haben flüssige Moleküle genug Energie, um als Dampfblasen durch die gesamte Flüssigkeit zu entweichen, nicht nur an der Oberfläche.",
                    nl: "Op het kookpunt hebben vloeibare moleculen genoeg energie om als dampbellen door de hele vloeistof te ontsnappen, niet alleen aan het oppervlak."
                }
            },
            {
                question: {
                    en: "What are alloys?",
                    es: "¿Qué son las aleaciones?",
                    de: "Was sind Legierungen?",
                    nl: "Wat zijn legeringen?"
                },
                options: [
                    { en: "Mixtures of two or more metals", es: "Mezclas de dos o más metales", de: "Mischungen aus zwei oder mehr Metallen", nl: "Mengsels van twee of meer metalen" },
                    { en: "Pure metals only", es: "Solo metales puros", de: "Nur reine Metalle", nl: "Alleen zuivere metalen" },
                    { en: "Non-metal materials", es: "Materiales no metálicos", de: "Nicht-metallische Materialien", nl: "Niet-metalen materialen" },
                    { en: "Broken pieces of metal", es: "Pedazos rotos de metal", de: "Zerbrochene Metallstücke", nl: "Gebroken stukjes metaal" }
                ],
                correct: 0,
                explanation: {
                    en: "Alloys combine different metals to create materials with improved properties like strength, corrosion resistance, or special characteristics.",
                    es: "Las aleaciones combinan diferentes metales para crear materiales con propiedades mejoradas como fuerza, resistencia a la corrosión o características especiales.",
                    de: "Legierungen kombinieren verschiedene Metalle, um Materialien mit verbesserten Eigenschaften wie Stärke, Korrosionsbeständigkeit oder besonderen Eigenschaften zu schaffen.",
                    nl: "Legeringen combineren verschillende metalen om materialen te creëren met verbeterde eigenschappen zoals sterkte, corrosieweerstand of speciale kenmerken."
                }
            },
            {
                question: {
                    en: "What makes materials biodegradable?",
                    es: "¿Qué hace que los materiales sean biodegradables?",
                    de: "Was macht Materialien biologisch abbaubar?",
                    nl: "Wat maakt materialen biologisch afbreekbaar?"
                },
                options: [
                    { en: "Natural organisms can break them down", es: "Organismos naturales pueden descomponerlos", de: "Natürliche Organismen können sie abbauen", nl: "Natuurlijke organismen kunnen ze afbreken" },
                    { en: "They are very hard materials", es: "Son materiales muy duros", de: "Sie sind sehr harte Materialien", nl: "Het zijn heel harde materialen" },
                    { en: "They never change or decompose", es: "Nunca cambian o se descomponen", de: "Sie ändern sich nie oder zersetzen sich", nl: "Ze veranderen of ontbinden nooit" },
                    { en: "They are made in factories only", es: "Solo se hacen en fábricas", de: "Sie werden nur in Fabriken hergestellt", nl: "Ze worden alleen in fabrieken gemaakt" }
                ],
                correct: 0,
                explanation: {
                    en: "Biodegradable materials can be broken down by bacteria, fungi, and other living organisms into natural substances that don't harm the environment.",
                    es: "Los materiales biodegradables pueden ser descompuestos por bacterias, hongos y otros organismos vivos en sustancias naturales que no dañan el medio ambiente.",
                    de: "Biologisch abbaubare Materialien können von Bakterien, Pilzen und anderen Lebewesen in natürliche Stoffe zerlegt werden, die der Umwelt nicht schaden.",
                    nl: "Biologisch afbreekbare materialen kunnen door bacteriën, schimmels en andere levende organismen worden afgebroken tot natuurlijke stoffen die het milieu niet schaden."
                }
            },
            {
                question: {
                    en: "What is viscosity?",
                    es: "¿Qué es la viscosidad?",
                    de: "Was ist Viskosität?",
                    nl: "Wat is viscositeit?"
                },
                options: [
                    { en: "How thick or thin a liquid flows", es: "Qué tan espeso o delgado fluye un líquido", de: "Wie dick oder dünn eine Flüssigkeit fließt", nl: "Hoe dik of dun een vloeistof stroomt" },
                    { en: "How hot a liquid gets", es: "Qué tan caliente se pone un líquido", de: "Wie heiß eine Flüssigkeit wird", nl: "Hoe heet een vloeistof wordt" },
                    { en: "The color of liquids", es: "El color de los líquidos", de: "Die Farbe von Flüssigkeiten", nl: "De kleur van vloeistoffen" },
                    { en: "How much liquid weighs", es: "Cuánto pesa un líquido", de: "Wie viel eine Flüssigkeit wiegt", nl: "Hoeveel een vloeistof weegt" }
                ],
                correct: 0,
                explanation: {
                    en: "Viscosity measures a liquid's resistance to flow - honey has high viscosity (flows slowly) while water has low viscosity (flows easily).",
                    es: "La viscosidad mide la resistencia de un líquido a fluir - la miel tiene alta viscosidad (fluye lentamente) mientras el agua tiene baja viscosidad (fluye fácilmente).",
                    de: "Viskosität misst den Widerstand einer Flüssigkeit gegen das Fließen - Honig hat hohe Viskosität (fließt langsam), während Wasser niedrige Viskosität hat (fließt leicht).",
                    nl: "Viscositeit meet de weerstand van een vloeistof tegen stroming - honing heeft hoge viscositeit (stroomt langzaam) terwijl water lage viscositeit heeft (stroomt gemakkelijk)."
                }
            },
            {
                question: {
                    en: "What are polymers?",
                    es: "¿Qué son los polímeros?",
                    de: "Was sind Polymere?",
                    nl: "Wat zijn polymeren?"
                },
                options: [
                    { en: "Long chains of repeating molecules", es: "Cadenas largas de moléculas que se repiten", de: "Lange Ketten sich wiederholender Moleküle", nl: "Lange ketens van herhalende moleculen" },
                    { en: "Single atoms only", es: "Solo átomos individuales", de: "Nur einzelne Atome", nl: "Alleen enkele atomen" },
                    { en: "Very small particles", es: "Partículas muy pequeñas", de: "Sehr kleine Teilchen", nl: "Heel kleine deeltjes" },
                    { en: "Metal compounds only", es: "Solo compuestos metálicos", de: "Nur Metallverbindungen", nl: "Alleen metaalverbindingen" }
                ],
                correct: 0,
                explanation: {
                    en: "Polymers are large molecules made of many repeating units linked together, found in plastics, rubber, DNA, and many natural materials.",
                    es: "Los polímeros son moléculas grandes hechas de muchas unidades repetidas enlazadas, encontradas en plásticos, goma, ADN y muchos materiales naturales.",
                    de: "Polymere sind große Moleküle aus vielen sich wiederholenden, miteinander verbundenen Einheiten, die in Kunststoffen, Gummi, DNA und vielen natürlichen Materialien vorkommen.",
                    nl: "Polymeren zijn grote moleculen gemaakt van veel herhalende eenheden die aan elkaar gekoppeld zijn, gevonden in plastics, rubber, DNA en veel natuurlijke materialen."
                }
            },
            {
                question: {
                    en: "What is surface tension?",
                    es: "¿Qué es la tensión superficial?",
                    de: "Was ist Oberflächenspannung?",
                    nl: "Wat is oppervlaktespanning?"
                },
                options: [
                    { en: "The force that makes water form droplets", es: "La fuerza que hace que el agua forme gotas", de: "Die Kraft, die Wasser Tröpfchen bilden lässt", nl: "De kracht die water druppels laat vormen" },
                    { en: "How hard you pull on something", es: "Qué tan fuerte jalas algo", de: "Wie stark du an etwas ziehst", nl: "Hoe hard je aan iets trekt" },
                    { en: "The roughness of materials", es: "La rugosidad de los materiales", de: "Die Rauheit von Materialien", nl: "De ruwheid van materialen" },
                    { en: "How materials stick together", es: "Cómo se pegan los materiales", de: "Wie Materialien zusammenkleben", nl: "Hoe materialen aan elkaar plakken" }
                ],
                correct: 0,
                explanation: {
                    en: "Surface tension occurs because liquid molecules at the surface attract each other more strongly, creating a 'skin' effect that allows insects to walk on water.",
                    es: "La tensión superficial ocurre porque las moléculas líquidas en la superficie se atraen más fuertemente, creando un efecto de 'piel' que permite que los insectos caminen sobre el agua.",
                    de: "Oberflächenspannung entsteht, weil sich Flüssigkeitsmoleküle an der Oberfläche stärker anziehen und einen 'Haut'-Effekt erzeugen, der Insekten ermöglicht, auf Wasser zu laufen.",
                    nl: "Oppervlaktespanning ontstaat omdat vloeibare moleculen aan het oppervlak elkaar sterker aantrekken, waardoor een 'huid'-effect ontstaat dat insecten toestaat op water te lopen."
                }
            },
            {
                question: {
                    en: "What happens during filtration?",
                    es: "¿Qué pasa durante la filtración?",
                    de: "Was passiert während der Filtration?",
                    nl: "Wat gebeurt er tijdens filtratie?"
                },
                options: [
                    { en: "Larger particles are separated from smaller ones", es: "Las partículas más grandes se separan de las más pequeñas", de: "Größere Teilchen werden von kleineren getrennt", nl: "Grotere deeltjes worden gescheiden van kleinere" },
                    { en: "Everything mixes together completely", es: "Todo se mezcla completamente", de: "Alles vermischt sich vollständig", nl: "Alles mengt volledig samen" },
                    { en: "Liquids turn into solids", es: "Los líquidos se convierten en sólidos", de: "Flüssigkeiten werden zu Feststoffen", nl: "Vloeistoffen worden vaste stoffen" },
                    { en: "Materials change their color", es: "Los materiales cambian su color", de: "Materialien ändern ihre Farbe", nl: "Materialen veranderen hun kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "Filtration uses a barrier with holes that allow small particles and liquids to pass through while blocking larger particles or solids.",
                    es: "La filtración usa una barrera con agujeros que permite que partículas pequeñas y líquidos pasen mientras bloquea partículas más grandes o sólidos.",
                    de: "Filtration verwendet eine Barriere mit Löchern, die kleine Teilchen und Flüssigkeiten durchlässt, während größere Teilchen oder Feststoffe blockiert werden.",
                    nl: "Filtratie gebruikt een barrière met gaten die kleine deeltjes en vloeistoffen doorlaat terwijl grotere deeltjes of vaste stoffen worden tegengehouden."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/science', level7);
    }
})();