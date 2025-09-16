(function() {
    const level10 = {
        name: {
            en: "Science in Everyday Life",
            es: "Ciencia en la Vida Cotidiana",
            de: "Wissenschaft im Alltag",
            nl: "Wetenschap in het Dagelijks Leven"
        },
        questions: [
            {
                question: {
                    en: "How does a thermometer work?",
                    es: "¿Cómo funciona un termómetro?",
                    de: "Wie funktioniert ein Thermometer?",
                    nl: "Hoe werkt een thermometer?"
                },
                options: [
                    { en: "Liquid expands when it gets hot", es: "El líquido se expande cuando se calienta", de: "Flüssigkeit dehnt sich aus wenn sie heiß wird", nl: "Vloeistof zet uit als het warm wordt" },
                    { en: "It measures light", es: "Mide la luz", de: "Es misst Licht", nl: "Het meet licht" },
                    { en: "It counts heat particles", es: "Cuenta partículas de calor", de: "Es zählt Wärmeteilchen", nl: "Het telt warmte deeltjes" },
                    { en: "Magic", es: "Magia", de: "Magie", nl: "Magie" }
                ],
                correct: 0,
                explanation: {
                    en: "Thermometers use thermal expansion - when temperature rises, the liquid inside expands and rises up the scale to show the temperature.",
                    es: "Los termómetros usan expansión térmica - cuando la temperatura sube, el líquido adentro se expande y sube por la escala para mostrar la temperatura.",
                    de: "Thermometer nutzen thermische Ausdehnung - wenn die Temperatur steigt, dehnt sich die Flüssigkeit darin aus und steigt die Skala hoch, um die Temperatur zu zeigen.",
                    nl: "Thermometers gebruiken thermische uitzetting - wanneer de temperatuur stijgt, zet de vloeistof erin uit en stijgt de schaal op om de temperatuur te tonen."
                }
            },
            {
                question: {
                    en: "Why do we put food in the refrigerator?",
                    es: "¿Por qué ponemos comida en el refrigerador?",
                    de: "Warum stellen wir Essen in den Kühlschrank?",
                    nl: "Waarom zetten we voedsel in de koelkast?"
                },
                options: [
                    { en: "Cold slows down bacteria growth", es: "El frío ralentiza el crecimiento de bacterias", de: "Kälte verlangsamt Bakterienwachstum", nl: "Kou vertraagt bacteriegroei" },
                    { en: "Food likes to be cold", es: "A la comida le gusta estar fría", de: "Essen mag es kalt", nl: "Voedsel houdt van koud zijn" },
                    { en: "It makes food taste better", es: "Hace que la comida sepa mejor", de: "Es lässt Essen besser schmecken", nl: "Het laat voedsel beter smaken" },
                    { en: "To save space", es: "Para ahorrar espacio", de: "Um Platz zu sparen", nl: "Om ruimte te besparen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cold temperatures slow down bacterial growth and chemical reactions that cause food spoilage, keeping food fresh and safe longer.",
                    es: "Las temperaturas frías ralentizan el crecimiento bacteriano y las reacciones químicas que causan deterioro de alimentos, manteniendo la comida fresca y segura por más tiempo.",
                    de: "Kalte Temperaturen verlangsamen Bakterienwachstum und chemische Reaktionen, die Lebensmittelverderb verursachen, halten Essen länger frisch und sicher.",
                    nl: "Koude temperaturen vertragen bacteriegroei en chemische reacties die voedselbederf veroorzaken, houden voedsel langer vers en veilig."
                }
            },
            {
                question: {
                    en: "How does soap help us get clean?",
                    es: "¿Cómo nos ayuda el jabón a estar limpios?",
                    de: "Wie hilft uns Seife sauber zu werden?",
                    nl: "Hoe helpt zeep ons schoon te worden?"
                },
                options: [
                    { en: "It breaks up oil and dirt", es: "Rompe el aceite y la suciedad", de: "Es zerlegt Öl und Schmutz", nl: "Het breekt olie en vuil af" },
                    { en: "It kills all germs instantly", es: "Mata todos los gérmenes al instante", de: "Es tötet alle Keime sofort", nl: "Het doodt alle kiemen meteen" },
                    { en: "It makes water wetter", es: "Hace el agua más húmeda", de: "Es macht Wasser nasser", nl: "Het maakt water natter" },
                    { en: "It changes water color", es: "Cambia el color del agua", de: "Es ändert die Wasserfarbe", nl: "Het verandert de waterkleur" }
                ],
                correct: 0,
                explanation: {
                    en: "Soap molecules have two ends - one attracts water and one attracts oil, allowing them to surround dirt and grease so water can wash them away.",
                    es: "Las moléculas de jabón tienen dos extremos - uno atrae agua y uno atrae aceite, permitiéndoles rodear suciedad y grasa para que el agua pueda lavarlas.",
                    de: "Seifenmoleküle haben zwei Enden - eines zieht Wasser an und eines zieht Öl an, wodurch sie Schmutz und Fett umschließen können, damit Wasser sie wegwaschen kann.",
                    nl: "Zeepmoleculen hebben twee uiteinden - een trekt water aan en een trekt olie aan, waardoor ze vuil en vet kunnen omringen zodat water ze kan wegwassen."
                }
            },
            {
                question: {
                    en: "Why do we cook food?",
                    es: "¿Por qué cocinamos la comida?",
                    de: "Warum kochen wir Essen?",
                    nl: "Waarom koken we voedsel?"
                },
                options: [
                    { en: "Heat kills harmful bacteria", es: "El calor mata las bacterias dañinas", de: "Hitze tötet schädliche Bakterien", nl: "Warmte doodt schadelijke bacteriën" },
                    { en: "To make it heavier", es: "Para hacerla más pesada", de: "Um es schwerer zu machen", nl: "Om het zwaarder te maken" },
                    { en: "To change its color", es: "Para cambiar su color", de: "Um seine Farbe zu ändern", nl: "Om de kleur te veranderen" },
                    { en: "To make it bigger", es: "Para hacerla más grande", de: "Um es größer zu machen", nl: "Om het groter te maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Cooking food with heat destroys harmful bacteria, viruses, and parasites that could make us sick, making food safer to eat.",
                    es: "Cocinar comida con calor destruye bacterias dañinas, virus y parásitos que podrían enfermarnos, haciendo la comida más segura para comer.",
                    de: "Das Kochen von Essen mit Hitze zerstört schädliche Bakterien, Viren und Parasiten, die uns krank machen könnten, macht Essen sicherer zu essen.",
                    nl: "Voedsel koken met warmte vernietigt schadelijke bacteriën, virussen en parasieten die ons ziek kunnen maken, maakt voedsel veiliger om te eten."
                }
            },
            {
                question: {
                    en: "How does a microwave heat food?",
                    es: "¿Cómo calienta la comida un microondas?",
                    de: "Wie erhitzt eine Mikrowelle Essen?",
                    nl: "Hoe verwarmt een magnetron voedsel?"
                },
                options: [
                    { en: "It makes water molecules vibrate", es: "Hace vibrar las moléculas de agua", de: "Es lässt Wassermoleküle vibrieren", nl: "Het laat watermoleculen trillen" },
                    { en: "It uses tiny fires", es: "Usa fuegos pequeños", de: "Es verwendet kleine Feuer", nl: "Het gebruikt kleine vuurtjes" },
                    { en: "It shoots hot air", es: "Dispara aire caliente", de: "Es schießt heiße Luft", nl: "Het schiet hete lucht" },
                    { en: "It uses magic waves", es: "Usa ondas mágicas", de: "Es verwendet Zauberwellen", nl: "Het gebruikt magische golven" }
                ],
                correct: 0,
                explanation: {
                    en: "Microwaves emit electromagnetic waves that cause water molecules in food to vibrate rapidly, generating heat from the inside out.",
                    es: "Los microondas emiten ondas electromagnéticas que causan que las moléculas de agua en la comida vibren rápidamente, generando calor desde adentro hacia afuera.",
                    de: "Mikrowellen senden elektromagnetische Wellen aus, die Wassermoleküle im Essen schnell vibrieren lassen und Wärme von innen nach außen erzeugen.",
                    nl: "Magnetrons zenden elektromagnetische golven uit die watermoleculen in voedsel snel laten trillen, genereren warmte van binnenuit."
                }
            },
            {
                question: {
                    en: "Why do we wear sunglasses?",
                    es: "¿Por qué usamos gafas de sol?",
                    de: "Warum tragen wir Sonnenbrillen?",
                    nl: "Waarom dragen we zonnebrillen?"
                },
                options: [
                    { en: "To protect our eyes from bright light", es: "Para proteger nuestros ojos de la luz brillante", de: "Um unsere Augen vor hellem Licht zu schützen", nl: "Om onze ogen te beschermen tegen fel licht" },
                    { en: "To see better in the dark", es: "Para ver mejor en la oscuridad", de: "Um im Dunkeln besser zu sehen", nl: "Om beter te zien in het donker" },
                    { en: "To look cool", es: "Para verse genial", de: "Um cool auszusehen", nl: "Om er cool uit te zien" },
                    { en: "To hide our eyes", es: "Para ocultar nuestros ojos", de: "Um unsere Augen zu verstecken", nl: "Om onze ogen te verbergen" }
                ],
                correct: 0,
                explanation: {
                    en: "Sunglasses filter out harmful ultraviolet (UV) radiation from the sun, protecting our eyes from damage and reducing painful glare.",
                    es: "Las gafas de sol filtran la radiación ultravioleta (UV) dañina del sol, protegiendo nuestros ojos del daño y reduciendo el resplandor doloroso.",
                    de: "Sonnenbrillen filtern schädliche ultraviolette (UV) Strahlung der Sonne heraus, schützen unsere Augen vor Schäden und reduzieren schmerzhaften Blendeffekt.",
                    nl: "Zonnebrillen filteren schadelijke ultraviolette (UV) straling van de zon, beschermen onze ogen tegen schade en verminderen pijnlijke schittering."
                }
            },
            {
                question: {
                    en: "How do glasses help people see better?",
                    es: "¿Cómo ayudan las gafas a las personas a ver mejor?",
                    de: "Wie helfen Brillen Menschen besser zu sehen?",
                    nl: "Hoe helpen brillen mensen beter te zien?"
                },
                options: [
                    { en: "They bend light to focus it correctly", es: "Doblan la luz para enfocarla correctamente", de: "Sie biegen Licht um es richtig zu fokussieren", nl: "Ze buigen licht om het correct te focussen" },
                    { en: "They make everything bigger", es: "Hacen todo más grande", de: "Sie machen alles größer", nl: "Ze maken alles groter" },
                    { en: "They add more light", es: "Añaden más luz", de: "Sie fügen mehr Licht hinzu", nl: "Ze voegen meer licht toe" },
                    { en: "They clean the air", es: "Limpian el aire", de: "Sie reinigen die Luft", nl: "Ze maken de lucht schoon" }
                ],
                correct: 0,
                explanation: {
                    en: "Glasses have specially shaped lenses that bend light rays to help focus them correctly on the retina, correcting vision problems.",
                    es: "Las gafas tienen lentes especialmente formados que doblan los rayos de luz para ayudar a enfocarlos correctamente en la retina, corrigiendo problemas de visión.",
                    de: "Brillen haben speziell geformte Linsen, die Lichtstrahlen biegen, um sie korrekt auf die Netzhaut zu fokussieren und Sehprobleme zu korrigieren.",
                    nl: "Brillen hebben speciaal gevormde lenzen die lichtstralen buigen om ze correct op het netvlies te focussen, corrigeren visie problemen."
                }
            },
            {
                question: {
                    en: "Why do ice cubes float in water?",
                    es: "¿Por qué flotan los cubos de hielo en el agua?",
                    de: "Warum schwimmen Eiswürfel auf Wasser?",
                    nl: "Waarom drijven ijsblokjes op water?"
                },
                options: [
                    { en: "Ice is less dense than water", es: "El hielo es menos denso que el agua", de: "Eis ist weniger dicht als Wasser", nl: "Ijs is minder dicht dan water" },
                    { en: "Ice is magnetic", es: "El hielo es magnético", de: "Eis ist magnetisch", nl: "Ijs is magnetisch" },
                    { en: "Ice has air bubbles", es: "El hielo tiene burbujas de aire", de: "Eis hat Luftblasen", nl: "Ijs heeft luchtbellen" },
                    { en: "Water pushes ice up", es: "El agua empuja el hielo hacia arriba", de: "Wasser drückt Eis nach oben", nl: "Water duwt ijs omhoog" }
                ],
                correct: 0,
                explanation: {
                    en: "When water freezes into ice, it expands and becomes less dense than liquid water, causing ice cubes to float on the surface.",
                    es: "Cuando el agua se congela en hielo, se expande y se vuelve menos denso que el agua líquida, causando que los cubos de hielo floten en la superficie.",
                    de: "Wenn Wasser zu Eis gefriert, dehnt es sich aus und wird weniger dicht als flüssiges Wasser, wodurch Eiswürfel an der Oberfläche schwimmen.",
                    nl: "Wanneer water bevriest tot ijs, zet het uit en wordt minder dicht dan vloeibaar water, waardoor ijsblokjes op het oppervlak drijven."
                }
            },
            {
                question: {
                    en: "How does a band-aid help a cut heal?",
                    es: "¿Cómo ayuda una curita a sanar un corte?",
                    de: "Wie hilft ein Pflaster einer Schnittwunde zu heilen?",
                    nl: "Hoe helpt een pleister een snee te genezen?"
                },
                options: [
                    { en: "It keeps the wound clean and protected", es: "Mantiene la herida limpia y protegida", de: "Es hält die Wunde sauber und geschützt", nl: "Het houdt de wond schoon en beschermd" },
                    { en: "It adds medicine to the cut", es: "Añade medicina al corte", de: "Es fügt Medizin zum Schnitt hinzu", nl: "Het voegt medicijn toe aan de snee" },
                    { en: "It pulls the cut together", es: "Junta el corte", de: "Es zieht den Schnitt zusammen", nl: "Het trekt de snee samen" },
                    { en: "It makes new skin grow faster", es: "Hace que crezca nueva piel más rápido", de: "Es lässt neue Haut schneller wachsen", nl: "Het laat nieuwe huid sneller groeien" }
                ],
                correct: 0,
                explanation: {
                    en: "Band-aids create a protective barrier that keeps dirt and bacteria out while maintaining moisture needed for proper wound healing.",
                    es: "Las curitas crean una barrera protectora que mantiene la suciedad y bacterias afuera mientras mantiene la humedad necesaria para la curación adecuada de heridas.",
                    de: "Pflaster schaffen eine Schutzbarriere, die Schmutz und Bakterien fernhalten, während sie die für ordnungsgemäße Wundheilung benötigte Feuchtigkeit beibehalten.",
                    nl: "Pleisters creëren een beschermende barrière die vuil en bacteriën buiten houdt terwijl ze vochtigheid behouden die nodig is voor goede wondgenezing."
                }
            },
            {
                question: {
                    en: "Why do we need to drink water every day?",
                    es: "¿Por qué necesitamos beber agua todos los días?",
                    de: "Warum müssen wir jeden Tag Wasser trinken?",
                    nl: "Waarom moeten we elke dag water drinken?"
                },
                options: [
                    { en: "Our body is mostly water and needs it to function", es: "Nuestro cuerpo es mayormente agua y la necesita para funcionar", de: "Unser Körper besteht größtenteils aus Wasser und braucht es zum Funktionieren", nl: "Ons lichaam bestaat grotendeels uit water en heeft het nodig om te functioneren" },
                    { en: "Water makes us grow taller", es: "El agua nos hace crecer más alto", de: "Wasser lässt uns größer werden", nl: "Water laat ons langer groeien" },
                    { en: "Water cleans our teeth", es: "El agua limpia nuestros dientes", de: "Wasser reinigt unsere Zähne", nl: "Water maakt onze tanden schoon" },
                    { en: "Water makes us stronger", es: "El agua nos hace más fuertes", de: "Wasser macht uns stärker", nl: "Water maakt ons sterker" }
                ],
                correct: 0,
                explanation: {
                    en: "Water is essential for all body functions including blood circulation, temperature regulation, waste removal, and cellular processes.",
                    es: "El agua es esencial para todas las funciones corporales incluyendo circulación sanguínea, regulación de temperatura, eliminación de desechos y procesos celulares.",
                    de: "Wasser ist wesentlich für alle Körperfunktionen einschließlich Blutkreislauf, Temperaturregulierung, Abfallbeseitigung und zelluläre Prozesse.",
                    nl: "Water is essentieel voor alle lichaamsfuncties inclusief bloedcirculatie, temperatuurregulatie, afvalverwijdering en cellulaire processen."
                }
            },
            {
                question: {
                    en: "How does sunscreen protect our skin?",
                    es: "¿Cómo protege el protector solar nuestra piel?",
                    de: "Wie schützt Sonnencreme unsere Haut?",
                    nl: "Hoe beschermt zonnebrandcrème onze huid?"
                },
                options: [
                    { en: "It blocks harmful UV rays", es: "Bloquea los rayos UV dañinos", de: "Es blockiert schädliche UV-Strahlen", nl: "Het blokkeert schadelijke UV-stralen" },
                    { en: "It makes skin waterproof", es: "Hace la piel impermeable", de: "Es macht die Haut wasserdicht", nl: "Het maakt de huid waterdicht" },
                    { en: "It cools the skin down", es: "Enfría la piel", de: "Es kühlt die Haut ab", nl: "Het koelt de huid af" },
                    { en: "It changes skin color", es: "Cambia el color de la piel", de: "Es ändert die Hautfarbe", nl: "Het verandert de huidskleur" }
                ],
                correct: 0,
                explanation: {
                    en: "Sunscreen contains chemicals that absorb or reflect ultraviolet radiation, preventing it from penetrating and damaging skin cells.",
                    es: "El protector solar contiene químicos que absorben o reflejan radiación ultravioleta, evitando que penetre y dañe las células de la piel.",
                    de: "Sonnencreme enthält Chemikalien, die ultraviolette Strahlung absorbieren oder reflektieren und verhindern, dass sie eindringt und Hautzellen schädigt.",
                    nl: "Zonnebrandcrème bevat chemicaliën die ultraviolette straling absorberen of weerkaatsen, voorkomen dat het doordringt en huidcellen beschadigt."
                }
            },
            {
                question: {
                    en: "Why does a balloon pop when you stick it with a pin?",
                    es: "¿Por qué se revienta un globo cuando lo pinchas con un alfiler?",
                    de: "Warum platzt ein Ballon, wenn man ihn mit einer Nadel sticht?",
                    nl: "Waarom knalt een ballon als je hem prikt met een speld?"
                },
                options: [
                    { en: "The air pressure inside escapes quickly", es: "La presión del aire dentro se escapa rápidamente", de: "Der Luftdruck innen entweicht schnell", nl: "De luchtdruk binnenin ontsnapt snel" },
                    { en: "The balloon gets scared", es: "El globo se asusta", de: "Der Ballon bekommt Angst", nl: "De ballon wordt bang" },
                    { en: "The pin is too sharp", es: "El alfiler es muy afilado", de: "Die Nadel ist zu scharf", nl: "De speld is te scherp" },
                    { en: "The balloon is too old", es: "El globo es muy viejo", de: "Der Ballon ist zu alt", nl: "De ballon is te oud" }
                ],
                correct: 0,
                explanation: {
                    en: "The pin creates a small hole that releases the compressed air inside instantly, causing the balloon to rupture due to sudden pressure change.",
                    es: "El alfiler crea un pequeño agujero que libera el aire comprimido adentro instantáneamente, causando que el globo se rompa debido al cambio súbito de presión.",
                    de: "Die Nadel erzeugt ein kleines Loch, das die komprimierte Luft innen sofort freigibt und den Ballon aufgrund plötzlicher Druckveränderung platzen lässt.",
                    nl: "De speld creëert een klein gaatje dat de samengeperste lucht binnenin onmiddellijk vrijgeeft, waardoor de ballon knapt door plotselinge drukverandering."
                }
            },
            {
                question: {
                    en: "How does a straw help you drink?",
                    es: "¿Cómo te ayuda un popote a beber?",
                    de: "Wie hilft dir ein Strohhalm beim Trinken?",
                    nl: "Hoe helpt een rietje je om te drinken?"
                },
                options: [
                    { en: "You create suction that pulls liquid up", es: "Creas succión que atrae el líquido hacia arriba", de: "Du erzeugst Saugkraft die Flüssigkeit hochzieht", nl: "Je creëert zuigkracht die vloeistof omhoog trekt" },
                    { en: "The straw pushes liquid up", es: "El popote empuja el líquido hacia arriba", de: "Der Strohhalm drückt Flüssigkeit hoch", nl: "Het rietje duwt vloeistof omhoog" },
                    { en: "Gravity pulls liquid through", es: "La gravedad atrae el líquido", de: "Schwerkraft zieht Flüssigkeit durch", nl: "Zwaartekracht trekt vloeistof door" },
                    { en: "The liquid wants to go up", es: "El líquido quiere subir", de: "Die Flüssigkeit will hochgehen", nl: "De vloeistof wil omhoog" }
                ],
                correct: 0,
                explanation: {
                    en: "When you suck air out of the straw, you create lower pressure inside, allowing atmospheric pressure to push liquid up through the straw.",
                    es: "Cuando succiones aire del popote, creas menor presión adentro, permitiendo que la presión atmosférica empuje líquido hacia arriba por el popote.",
                    de: "Wenn du Luft aus dem Strohhalm saugst, erzeugst du niedrigeren Druck innen, wodurch atmosphärischer Druck Flüssigkeit durch den Strohhalm hochdrücken kann.",
                    nl: "Wanneer je lucht uit het rietje zuigt, creëer je lagere druk binnenin, waardoor atmosferische druk vloeistof omhoog door het rietje kan duwen."
                }
            },
            {
                question: {
                    en: "Why do we use salt on icy roads?",
                    es: "¿Por qué usamos sal en carreteras heladas?",
                    de: "Warum benutzen wir Salz auf vereisten Straßen?",
                    nl: "Waarom gebruiken we zout op ijzige wegen?"
                },
                options: [
                    { en: "Salt lowers the freezing point of water", es: "La sal baja el punto de congelación del agua", de: "Salz senkt den Gefrierpunkt von Wasser", nl: "Zout verlaagt het vriespunt van water" },
                    { en: "Salt makes roads rough", es: "La sal hace las carreteras rugosas", de: "Salz macht Straßen rau", nl: "Zout maakt wegen ruw" },
                    { en: "Salt absorbs cold", es: "La sal absorbe el frío", de: "Salz absorbiert Kälte", nl: "Zout absorbeert kou" },
                    { en: "Salt creates heat", es: "La sal crea calor", de: "Salz erzeugt Wärme", nl: "Zout creëert warmte" }
                ],
                correct: 0,
                explanation: {
                    en: "Salt lowers the freezing point of water, causing ice to melt at temperatures below 0°C and preventing new ice from forming.",
                    es: "La sal baja el punto de congelación del agua, causando que el hielo se derrita a temperaturas bajo 0°C y evitando que se forme nuevo hielo.",
                    de: "Salz senkt den Gefrierpunkt von Wasser, lässt Eis bei Temperaturen unter 0°C schmelzen und verhindert, dass sich neues Eis bildet.",
                    nl: "Zout verlaagt het vriespunt van water, zorgt ervoor dat ijs smelt bij temperaturen onder 0°C en voorkomt dat nieuw ijs vormt."
                }
            },
            {
                question: {
                    en: "How does a zipper work?",
                    es: "¿Cómo funciona una cremallera?",
                    de: "Wie funktioniert ein Reißverschluss?",
                    nl: "Hoe werkt een rits?"
                },
                options: [
                    { en: "Interlocking teeth connect and separate", es: "Dientes entrelazados se conectan y separan", de: "Ineinandergreifende Zähne verbinden und trennen sich", nl: "In elkaar grijpende tandjes verbinden en scheiden" },
                    { en: "Magnets hold it together", es: "Imanes lo mantienen junto", de: "Magnete halten es zusammen", nl: "Magneten houden het samen" },
                    { en: "Glue sticks the sides", es: "Pegamento pega los lados", de: "Kleber klebt die Seiten", nl: "Lijm plakt de zijkanten" },
                    { en: "Thread sews it closed", es: "Hilo lo cose cerrado", de: "Faden näht es zu", nl: "Draad naait het dicht" }
                ],
                correct: 0,
                explanation: {
                    en: "The zipper slider forces interlocking teeth together when closing and separates them when opening, creating a secure but reversible seal.",
                    es: "El deslizador de la cremallera fuerza los dientes entrelazados juntos al cerrar y los separa al abrir, creando un sello seguro pero reversible.",
                    de: "Der Reißverschluss-Schieber zwingt ineinandergreifende Zähne beim Schließen zusammen und trennt sie beim Öffnen, schafft eine sichere aber umkehrbare Abdichtung.",
                    nl: "De ritsschuiver dwingt in elkaar grijpende tandjes samen bij sluiten en scheidt ze bij openen, creëert een veilige maar omkeerbare afdichting."
                }
            },
            {
                question: {
                    en: "Why do we brush our teeth?",
                    es: "¿Por qué nos cepillamos los dientes?",
                    de: "Warum putzen wir unsere Zähne?",
                    nl: "Waarom poetsen we onze tanden?"
                },
                options: [
                    { en: "To remove bacteria and food particles", es: "Para remover bacterias y partículas de comida", de: "Um Bakterien und Essensreste zu entfernen", nl: "Om bacteriën en voedselresten te verwijderen" },
                    { en: "To make them whiter", es: "Para hacerlos más blancos", de: "Um sie weißer zu machen", nl: "Om ze witter te maken" },
                    { en: "To make them grow bigger", es: "Para hacerlos crecer más grandes", de: "Um sie größer wachsen zu lassen", nl: "Om ze groter te laten groeien" },
                    { en: "To change their shape", es: "Para cambiar su forma", de: "Um ihre Form zu ändern", nl: "Om hun vorm te veranderen" }
                ],
                correct: 0,
                explanation: {
                    en: "Brushing removes plaque bacteria and food particles that can cause tooth decay, gum disease, and bad breath if left uncleaned.",
                    es: "Cepillarse remueve bacterias de placa y partículas de comida que pueden causar caries, enfermedad de las encías y mal aliento si no se limpian.",
                    de: "Zähneputzen entfernt Plaque-Bakterien und Essensreste, die Karies, Zahnfleischerkrankungen und Mundgeruch verursachen können, wenn sie nicht gereinigt werden.",
                    nl: "Poetsen verwijdert plaque bacteriën en voedselresten die tandverval, tandvleesziekte en slechte adem kunnen veroorzaken als ze niet worden gereinigd."
                }
            },
            {
                question: {
                    en: "How does a digital thermometer measure temperature?",
                    es: "¿Cómo mide la temperatura un termómetro digital?",
                    de: "Wie misst ein digitales Thermometer Temperatur?",
                    nl: "Hoe meet een digitale thermometer temperatuur?"
                },
                options: [
                    { en: "Electronic sensors detect heat", es: "Sensores electrónicos detectan el calor", de: "Elektronische Sensoren erkennen Wärme", nl: "Elektronische sensoren detecteren warmte" },
                    { en: "It counts heat particles", es: "Cuenta partículas de calor", de: "Es zählt Wärmeteilchen", nl: "Het telt warmte deeltjes" },
                    { en: "It measures light levels", es: "Mide niveles de luz", de: "Es misst Lichtstärke", nl: "Het meet lichtniveaus" },
                    { en: "It listens to sound", es: "Escucha sonidos", de: "Es hört auf Geräusche", nl: "Het luistert naar geluid" }
                ],
                correct: 0,
                explanation: {
                    en: "Digital thermometers use electronic temperature sensors that change electrical resistance based on temperature, converted to digital readings.",
                    es: "Los termómetros digitales usan sensores electrónicos de temperatura que cambian resistencia eléctrica según la temperatura, convertida a lecturas digitales.",
                    de: "Digitale Thermometer verwenden elektronische Temperatursensoren, die elektrischen Widerstand basierend auf Temperatur ändern, umgewandelt in digitale Ablesungen.",
                    nl: "Digitale thermometers gebruiken elektronische temperatuursensoren die elektrische weerstand veranderen op basis van temperatuur, omgezet naar digitale aflezingen."
                }
            },
            {
                question: {
                    en: "Why do we wear different clothes in different weather?",
                    es: "¿Por qué usamos ropa diferente en diferentes climas?",
                    de: "Warum tragen wir verschiedene Kleidung bei verschiedenem Wetter?",
                    nl: "Waarom dragen we verschillende kleding bij verschillende weersomstandigheden?"
                },
                options: [
                    { en: "To control our body temperature", es: "Para controlar la temperatura de nuestro cuerpo", de: "Um unsere Körpertemperatur zu kontrollieren", nl: "Om onze lichaamstemperatuur te controleren" },
                    { en: "To look fashionable", es: "Para verse a la moda", de: "Um modisch auszusehen", nl: "Om modieus te zijn" },
                    { en: "To match the sky color", es: "Para combinar con el color del cielo", de: "Um zur Himmelsfarbe zu passen", nl: "Om bij de luchtkleur te passen" },
                    { en: "Because clothes change seasons", es: "Porque la ropa cambia estaciones", de: "Weil Kleidung Jahreszeiten wechselt", nl: "Omdat kleding van seizoenen verandert" }
                ],
                correct: 0,
                explanation: {
                    en: "Different clothing materials provide insulation or cooling to help our bodies maintain comfortable temperature in varying weather conditions.",
                    es: "Diferentes materiales de ropa proporcionan aislamiento o enfriamiento para ayudar a nuestros cuerpos mantener temperatura cómoda en condiciones climáticas variadas.",
                    de: "Verschiedene Kleidungsmaterialien bieten Isolierung oder Kühlung, um unseren Körpern zu helfen, komfortable Temperatur bei verschiedenen Wetterbedingungen zu halten.",
                    nl: "Verschillende kledingmaterialen bieden isolatie of koeling om onze lichamen te helpen comfortabele temperatuur te behouden in wisselende weersomstandigheden."
                }
            },
            {
                question: {
                    en: "How does a car's brake work?",
                    es: "¿Cómo funciona el freno de un carro?",
                    de: "Wie funktioniert die Bremse eines Autos?",
                    nl: "Hoe werkt de rem van een auto?"
                },
                options: [
                    { en: "Friction slows down the wheels", es: "La fricción ralentiza las ruedas", de: "Reibung verlangsamt die Räder", nl: "Wrijving vertraagt de wielen" },
                    { en: "It turns off the engine", es: "Apaga el motor", de: "Es schaltet den Motor ab", nl: "Het zet de motor uit" },
                    { en: "It makes the car heavier", es: "Hace el carro más pesado", de: "Es macht das Auto schwerer", nl: "Het maakt de auto zwaarder" },
                    { en: "Magnets stop the car", es: "Imanes detienen el carro", de: "Magnete stoppen das Auto", nl: "Magneten stoppen de auto" }
                ],
                correct: 0,
                explanation: {
                    en: "Car brakes use friction to convert the car's kinetic energy into heat energy, slowing the vehicle by pressing brake pads against rotating discs.",
                    es: "Los frenos del carro usan fricción para convertir la energía cinética del carro en energía térmica, ralentizando el vehículo presionando pastillas de freno contra discos rotatorios.",
                    de: "Autobremsen nutzen Reibung, um die kinetische Energie des Autos in Wärmeenergie umzuwandeln, verlangsamen das Fahrzeug durch Anpressen von Bremsbelägen gegen rotierende Scheiben.",
                    nl: "Autoremmen gebruiken wrijving om de kinetische energie van de auto om te zetten in warmte-energie, vertragen het voertuig door remblokken tegen roterende schijven te drukken."
                }
            },
            {
                question: {
                    en: "Why do we use umbrellas when it rains?",
                    es: "¿Por qué usamos paraguas cuando llueve?",
                    de: "Warum benutzen wir Regenschirme wenn es regnet?",
                    nl: "Waarom gebruiken we paraplu's als het regent?"
                },
                options: [
                    { en: "The waterproof material blocks raindrops", es: "El material impermeable bloquea las gotas de lluvia", de: "Das wasserdichte Material blockiert Regentropfen", nl: "Het waterdichte materiaal blokkeert regendruppels" },
                    { en: "They make rain go away", es: "Hacen que la lluvia se vaya", de: "Sie lassen Regen verschwinden", nl: "Ze laten regen verdwijnen" },
                    { en: "They absorb all the water", es: "Absorben toda el agua", de: "Sie absorbieren alles Wasser", nl: "Ze absorberen al het water" },
                    { en: "They create a force field", es: "Crean un campo de fuerza", de: "Sie erzeugen ein Kraftfeld", nl: "Ze creëren een krachtenveld" }
                ],
                correct: 0,
                explanation: {
                    en: "Umbrellas have waterproof canopies that deflect raindrops away from our bodies, keeping us dry by preventing water from reaching us.",
                    es: "Los paraguas tienen cubiertas impermeables que desvian gotas de lluvia de nuestros cuerpos, manteniéndonos secos evitando que el agua nos alcance.",
                    de: "Regenschirme haben wasserdichte Überdachungen, die Regentropfen von unseren Körpern ablenken und uns trocken halten, indem sie verhindern, dass Wasser uns erreicht.",
                    nl: "Paraplu's hebben waterdichte kappen die regendruppels van onze lichamen afleiden, houden ons droog door te voorkomen dat water ons bereikt."
                }
            },
            {
                question: {
                    en: "How does a flashlight make light?",
                    es: "¿Cómo produce luz una linterna?",
                    de: "Wie macht eine Taschenlampe Licht?",
                    nl: "Hoe maakt een zaklamp licht?"
                },
                options: [
                    { en: "Electricity flows through a light bulb or LED", es: "La electricidad fluye a través de una bombilla o LED", de: "Elektrizität fließt durch eine Glühbirne oder LED", nl: "Elektriciteit stroomt door een gloeilamp of LED" },
                    { en: "It captures sunlight", es: "Captura luz solar", de: "Es fängt Sonnenlicht ein", nl: "Het vangt zonlicht" },
                    { en: "Batteries glow by themselves", es: "Las baterías brillan por sí solas", de: "Batterien leuchten von selbst", nl: "Batterijen gloeien vanzelf" },
                    { en: "It reflects light from outside", es: "Refleja luz del exterior", de: "Es reflektiert Licht von außen", nl: "Het weerkaatst licht van buitenaf" }
                ],
                correct: 0,
                explanation: {
                    en: "Flashlights convert chemical energy from batteries into electrical energy, which then powers an LED or bulb to produce light energy.",
                    es: "Las linternas convierten energía química de las baterías en energía eléctrica, que luego alimenta un LED o bombilla para producir energía lumineosa.",
                    de: "Taschenlampen wandeln chemische Energie aus Batterien in elektrische Energie um, die dann eine LED oder Glühbirne antreibt, um Lichtenergie zu erzeugen.",
                    nl: "Zaklampen zetten chemische energie van batterijen om in elektrische energie, die vervolgens een LED of gloeilamp voedt om lichtenergie te produceren."
                }
            },
            {
                question: {
                    en: "Why do we need to wash our hands?",
                    es: "¿Por qué necesitamos lavarnos las manos?",
                    de: "Warum müssen wir unsere Hände waschen?",
                    nl: "Waarom moeten we onze handen wassen?"
                },
                options: [
                    { en: "To remove germs and bacteria", es: "Para remover gérmenes y bacterias", de: "Um Keime und Bakterien zu entfernen", nl: "Om ziektekiemen en bacteriën te verwijderen" },
                    { en: "To make them softer", es: "Para hacerlas más suaves", de: "Um sie weicher zu machen", nl: "Om ze zachter te maken" },
                    { en: "To change their color", es: "Para cambiar su color", de: "Um ihre Farbe zu ändern", nl: "Om hun kleur te veranderen" },
                    { en: "To make them smaller", es: "Para hacerlas más pequeñas", de: "Um sie kleiner zu machen", nl: "Om ze kleiner te maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Hand washing removes disease-causing bacteria, viruses, and other pathogens that we pick up from touching contaminated surfaces.",
                    es: "Lavarse las manos remueve bacterias causantes de enfermedades, virus y otros patógenos que recogemos al tocar superficies contaminadas.",
                    de: "Händewaschen entfernt krankheitsverursachende Bakterien, Viren und andere Krankheitserreger, die wir beim Berühren kontaminierter Oberflächen aufnehmen.",
                    nl: "Handen wassen verwijdert ziekteverwekkende bacteriën, virussen en andere pathogenen die we oppikken door het aanraken van besmette oppervlakken."
                }
            },
            {
                question: {
                    en: "How does a bicycle helmet protect your head?",
                    es: "¿Cómo protege tu cabeza un casco de bicicleta?",
                    de: "Wie schützt ein Fahrradhelm deinen Kopf?",
                    nl: "Hoe beschermt een fietshelm je hoofd?"
                },
                options: [
                    { en: "It absorbs impact energy from crashes", es: "Absorbe la energía del impacto de los choques", de: "Es absorbiert Aufprallenergie von Stürzen", nl: "Het absorbeert botsingsenergie van ongevallen" },
                    { en: "It makes your head harder", es: "Hace tu cabeza más dura", de: "Es macht deinen Kopf härter", nl: "Het maakt je hoofd harder" },
                    { en: "It deflects all objects away", es: "Desvía todos los objetos", de: "Es lenkt alle Objekte ab", nl: "Het weerkaatst alle voorwerpen weg" },
                    { en: "It makes you more visible", es: "Te hace más visible", de: "Es macht dich sichtbarer", nl: "Het maakt je beter zichtbaar" }
                ],
                correct: 0,
                explanation: {
                    en: "Helmets absorb and distribute impact forces over a larger area, reducing the concentrated force on any one part of the skull during accidents.",
                    es: "Los cascos absorben y distribuyen fuerzas de impacto sobre un área más grande, reduciendo la fuerza concentrada en cualquier parte del cráneo durante accidentes.",
                    de: "Helme absorbieren und verteilen Aufprallkräfte über eine größere Fläche, reduzieren die konzentrierte Kraft auf jeden Teil des Schädels bei Unfällen.",
                    nl: "Helmen absorberen en verdelen botsingingskrachten over een groter gebied, verminderen de geconcentreerde kracht op elk deel van de schedel tijdens ongevallen."
                }
            },
            {
                question: {
                    en: "Why do we put ice on injuries?",
                    es: "¿Por qué ponemos hielo en las lesiones?",
                    de: "Warum legen wir Eis auf Verletzungen?",
                    nl: "Waarom leggen we ijs op verwondingen?"
                },
                options: [
                    { en: "Cold reduces swelling and pain", es: "El frío reduce la hinchazón y el dolor", de: "Kälte reduziert Schwellung und Schmerz", nl: "Kou vermindert zwelling en pijn" },
                    { en: "Ice makes injuries heal faster", es: "El hielo hace que las lesiones sanen más rápido", de: "Eis lässt Verletzungen schneller heilen", nl: "Ijs laat verwondingen sneller genezen" },
                    { en: "Cold kills all germs", es: "El frío mata todos los gérmenes", de: "Kälte tötet alle Keime", nl: "Kou doodt alle ziektekiemen" },
                    { en: "Ice adds moisture", es: "El hielo añade humedad", de: "Eis fügt Feuchtigkeit hinzu", nl: "Ijs voegt vochtigheid toe" }
                ],
                correct: 0,
                explanation: {
                    en: "Cold temperatures constrict blood vessels, reducing inflammation and swelling while numbing pain signals to provide relief.",
                    es: "Las temperaturas frías contraen los vasos sanguíneos, reduciendo inflamación e hinchazón mientras entumecen señales de dolor para dar alivio.",
                    de: "Kalte Temperaturen verengen Blutgefäße, reduzieren Entzündung und Schwellung, während sie Schmerzsignale betäuben, um Linderung zu bieten.",
                    nl: "Koude temperaturen vernauwen bloedvaten, verminderen ontsteking en zwelling terwijl ze pijnsignalen verdoven om verlichting te bieden."
                }
            },
            {
                question: {
                    en: "How do non-stick pans work?",
                    es: "¿Cómo funcionan las sartenes antiadherentes?",
                    de: "Wie funktionieren Antihaftpfannen?",
                    nl: "Hoe werken anti-aanbakpannen?"
                },
                options: [
                    { en: "Special coating prevents food from sticking", es: "Un recubrimiento especial evita que la comida se pegue", de: "Spezielle Beschichtung verhindert das Anhaften von Essen", nl: "Speciale coating voorkomt dat voedsel vastplakt" },
                    { en: "They're always cold", es: "Siempre están frías", de: "Sie sind immer kalt", nl: "Ze zijn altijd koud" },
                    { en: "They move the food around", es: "Mueven la comida", de: "Sie bewegen das Essen", nl: "Ze bewegen het voedsel" },
                    { en: "They use magnetism", es: "Usan magnetismo", de: "Sie verwenden Magnetismus", nl: "Ze gebruiken magnetisme" }
                ],
                correct: 0,
                explanation: {
                    en: "Non-stick pans have special polymer coatings that create a smooth, slippery surface that food cannot easily bond to or stick against.",
                    es: "Las sartenes antiadherentes tienen recubrimientos de polímero especiales que crean una superficie lisa y resbaladiza a la que la comida no puede adherirse fácilmente.",
                    de: "Antihaftpfannen haben spezielle Polymerbeschichtungen, die eine glatte, rutschige Oberfläche schaffen, an die Essen nicht leicht haften oder kleben kann.",
                    nl: "Anti-aanbakpannen hebben speciale polymeercoatings die een glad, glibberig oppervlak creëren waaraan voedsel niet gemakkelijk kan hechten of vastplakken."
                }
            },
            {
                question: {
                    en: "Why does bread rise when you bake it?",
                    es: "¿Por qué se infla el pan cuando lo horneas?",
                    de: "Warum geht Brot auf wenn du es bäckst?",
                    nl: "Waarom rijst brood als je het bakt?"
                },
                options: [
                    { en: "Yeast produces gas bubbles", es: "La levadura produce burbujas de gas", de: "Hefe produziert Gasblasen", nl: "Gist produceert gasbellen" },
                    { en: "Heat makes it grow", es: "El calor lo hace crecer", de: "Hitze lässt es wachsen", nl: "Warmte laat het groeien" },
                    { en: "Air gets trapped inside", es: "El aire queda atrapado adentro", de: "Luft wird darin eingeschlossen", nl: "Lucht wordt binnenin gevangen" },
                    { en: "Water turns to steam", es: "El agua se convierte en vapor", de: "Wasser wird zu Dampf", nl: "Water wordt stoom" }
                ],
                correct: 0,
                explanation: {
                    en: "Yeast fermentation produces carbon dioxide gas bubbles that get trapped in the dough, causing it to expand and rise during baking.",
                    es: "La fermentación de levadura produce burbujas de gas dióxido de carbono que quedan atrapadas en la masa, causando que se expanda y se infle durante el horneado.",
                    de: "Hefefermentation produziert Kohlendioxid-Gasblasen, die im Teig gefangen werden und ihn während des Backens aufgehen und steigen lassen.",
                    nl: "Gistfermentatie produceert koolstofdioxide gasbellen die gevangen raken in het deeg, waardoor het uitzet en rijst tijdens het bakken."
                }
            },
            {
                question: {
                    en: "How does a vacuum cleaner work?",
                    es: "¿Cómo funciona una aspiradora?",
                    de: "Wie funktioniert ein Staubsauger?",
                    nl: "Hoe werkt een stofzuiger?"
                },
                options: [
                    { en: "It creates suction to pull in dirt", es: "Crea succión para atraer la suciedad", de: "Es erzeugt Saugkraft um Schmutz einzuziehen", nl: "Het creëert zuigkracht om vuil aan te trekken" },
                    { en: "It uses magnets to attract dirt", es: "Usa imanes para atraer la suciedad", de: "Es verwendet Magnete um Schmutz anzuziehen", nl: "Het gebruikt magneten om vuil aan te trekken" },
                    { en: "It sprays water to clean", es: "Rocía agua para limpiar", de: "Es sprüht Wasser zum Reinigen", nl: "Het spuit water om te reinigen" },
                    { en: "It melts dirt away", es: "Derrite la suciedad", de: "Es schmilzt Schmutz weg", nl: "Het smelt vuil weg" }
                ],
                correct: 0,
                explanation: {
                    en: "Vacuum cleaners use a motor-driven fan to create suction that pulls air and debris through a hose into a collection bag or chamber.",
                    es: "Las aspiradoras usan un ventilador impulsado por motor para crear succión que atrae aire y desechos a través de una manguera hacia una bolsa o cámara de recolección.",
                    de: "Staubsauger verwenden einen motorgetriebenen Ventilator, um Saugkraft zu erzeugen, die Luft und Schmutz durch einen Schlauch in einen Sammelbeutel oder eine Kammer zieht.",
                    nl: "Stofzuigers gebruiken een door motor aangedreven ventilator om zuigkracht te creëren die lucht en vuil door een slang naar een verzamelzak of kamer trekt."
                }
            },
            {
                question: {
                    en: "Why do we use different materials for different jobs?",
                    es: "¿Por qué usamos diferentes materiales para diferentes trabajos?",
                    de: "Warum verwenden wir verschiedene Materialien für verschiedene Aufgaben?",
                    nl: "Waarom gebruiken we verschillende materialen voor verschillende taken?"
                },
                options: [
                    { en: "Each material has special properties", es: "Cada material tiene propiedades especiales", de: "Jedes Material hat besondere Eigenschaften", nl: "Elk materiaal heeft speciale eigenschappen" },
                    { en: "To make things look pretty", es: "Para hacer las cosas bonitas", de: "Um Dinge hübsch zu machen", nl: "Om dingen mooi te maken" },
                    { en: "Because they cost different amounts", es: "Porque cuestan diferentes cantidades", de: "Weil sie unterschiedlich kosten", nl: "Omdat ze verschillende bedragen kosten" },
                    { en: "Materials like variety", es: "A los materiales les gusta la variedad", de: "Materialien mögen Abwechslung", nl: "Materialen houden van variatie" }
                ],
                correct: 0,
                explanation: {
                    en: "Each material has unique properties like strength, flexibility, conductivity, or resistance that make it best suited for specific applications.",
                    es: "Cada material tiene propiedades únicas como fuerza, flexibilidad, conductividad o resistencia que lo hacen más adecuado para aplicaciones específicas.",
                    de: "Jedes Material hat einzigartige Eigenschaften wie Stärke, Flexibilität, Leitfähigkeit oder Widerstand, die es am besten für spezifische Anwendungen geeignet machen.",
                    nl: "Elk materiaal heeft unieke eigenschappen zoals sterkte, flexibiliteit, geleidbaarheid of weerstand die het het meest geschikt maken voor specifieke toepassingen."
                }
            },
            {
                question: {
                    en: "How does the scientific method help us learn?",
                    es: "¿Cómo nos ayuda el método científico a aprender?",
                    de: "Wie hilft uns die wissenschaftliche Methode zu lernen?",
                    nl: "Hoe helpt de wetenschappelijke methode ons te leren?"
                },
                options: [
                    { en: "We observe, ask questions, and test ideas", es: "Observamos, hacemos preguntas y probamos ideas", de: "Wir beobachten, stellen Fragen und testen Ideen", nl: "We observeren, stellen vragen en testen ideeën" },
                    { en: "We guess and hope we're right", es: "Adivinamos y esperamos estar bien", de: "Wir raten und hoffen richtig zu liegen", nl: "We raden en hopen dat we gelijk hebben" },
                    { en: "We only read books", es: "Solo leemos libros", de: "Wir lesen nur Bücher", nl: "We lezen alleen boeken" },
                    { en: "We ask other people", es: "Preguntamos a otras personas", de: "Wir fragen andere Menschen", nl: "We vragen aan andere mensen" }
                ],
                correct: 0,
                explanation: {
                    en: "The scientific method provides a systematic way to test ideas through observation, hypothesis, experimentation, and analysis to discover reliable knowledge.",
                    es: "El método científico proporciona una manera sistemática de probar ideas a través de observación, hipótesis, experimentación y análisis para descubrir conocimiento confiable.",
                    de: "Die wissenschaftliche Methode bietet einen systematischen Weg, Ideen durch Beobachtung, Hypothese, Experimente und Analyse zu testen, um zuverlässiges Wissen zu entdecken.",
                    nl: "De wetenschappelijke methode biedt een systematische manier om ideeën te testen door observatie, hypothese, experimenten en analyse om betrouwbare kennis te ontdekken."
                }
            },
            {
                question: {
                    en: "Why is it important to ask questions about how things work?",
                    es: "¿Por qué es importante hacer preguntas sobre cómo funcionan las cosas?",
                    de: "Warum ist es wichtig Fragen darüber zu stellen, wie Dinge funktionieren?",
                    nl: "Waarom is het belangrijk om vragen te stellen over hoe dingen werken?"
                },
                options: [
                    { en: "Questions lead to new discoveries and inventions", es: "Las preguntas llevan a nuevos descubrimientos e inventos", de: "Fragen führen zu neuen Entdeckungen und Erfindungen", nl: "Vragen leiden tot nieuwe ontdekkingen en uitvindingen" },
                    { en: "Questions make us sound smart", es: "Las preguntas nos hacen sonar inteligentes", de: "Fragen lassen uns klug erscheinen", nl: "Vragen laten ons slim klinken" },
                    { en: "Questions waste time", es: "Las preguntas desperdician tiempo", de: "Fragen verschwenden Zeit", nl: "Vragen verspillen tijd" },
                    { en: "Questions are just for school", es: "Las preguntas son solo para la escuela", de: "Fragen sind nur für die Schule", nl: "Vragen zijn alleen voor school" }
                ],
                correct: 0,
                explanation: {
                    en: "Curiosity and questioning drive scientific discovery and innovation, leading to new technologies, solutions, and understanding that improve our world.",
                    es: "La curiosidad y el cuestionamiento impulsan el descubrimiento científico e innovación, llevando a nuevas tecnologías, soluciones y entendimiento que mejoran nuestro mundo.",
                    de: "Neugier und Hinterfragen treiben wissenschaftliche Entdeckung und Innovation an, führen zu neuen Technologien, Lösungen und Verständnis, die unsere Welt verbessern.",
                    nl: "Nieuwsgierigheid en vragen stellen drijven wetenschappelijke ontdekking en innovatie aan, leiden tot nieuwe technologieën, oplossingen en begrip die onze wereld verbeteren."
                }
            },
            {
                question: {
                    en: "How has science made our lives better?",
                    es: "¿Cómo ha mejorado la ciencia nuestras vidas?",
                    de: "Wie hat Wissenschaft unser Leben verbessert?",
                    nl: "Hoe heeft wetenschap ons leven beter gemaakt?"
                },
                options: [
                    { en: "It gave us medicine, technology, and better understanding", es: "Nos dio medicina, tecnología y mejor comprensión", de: "Sie gab uns Medizin, Technologie und besseres Verständnis", nl: "Het gaf ons medicijnen, technologie en beter begrip" },
                    { en: "It made everything more complicated", es: "Hizo todo más complicado", de: "Sie machte alles komplizierter", nl: "Het maakte alles ingewikkelder" },
                    { en: "It only helps scientists", es: "Solo ayuda a los científicos", de: "Sie hilft nur Wissenschaftlern", nl: "Het helpt alleen wetenschappers" },
                    { en: "It doesn't change anything", es: "No cambia nada", de: "Sie ändert nichts", nl: "Het verandert niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Science has given us medical advances, communication technology, transportation, clean water, better food production, and countless innovations that improve health, safety, and quality of life.",
                    es: "La ciencia nos ha dado avances médicos, tecnología de comunicación, transporte, agua limpia, mejor producción de alimentos e innumerables innovaciones que mejoran salud, seguridad y calidad de vida.",
                    de: "Wissenschaft hat uns medizinische Fortschritte, Kommunikationstechnologie, Transport, sauberes Wasser, bessere Nahrungsmittelproduktion und unzählige Innovationen gegeben, die Gesundheit, Sicherheit und Lebensqualität verbessern.",
                    nl: "Wetenschap heeft ons medische vooruitgang, communicatietechnologie, transport, schoon water, betere voedselproductie en talloze innovaties gegeven die gezondheid, veiligheid en levenskwaliteit verbeteren."
                }
            },
            {
                question: {
                    en: "Why do we need to wash our hands with soap?",
                    es: "¿Por qué necesitamos lavarnos las manos con jabón?",
                    de: "Warum müssen wir unsere Hände mit Seife waschen?",
                    nl: "Waarom moeten we onze handen wassen met zeep?"
                },
                options: [
                    { en: "Soap breaks down germs and washes them away", es: "El jabón rompe los gérmenes y los lava", de: "Seife zersetzt Keime und wäscht sie weg", nl: "Zeep breekt bacteriën af en spoelt ze weg" },
                    { en: "Soap makes hands smell good", es: "El jabón hace que las manos huelan bien", de: "Seife lässt Hände gut riechen", nl: "Zeep laat handen lekker ruiken" },
                    { en: "Water alone is enough", es: "Solo el agua es suficiente", de: "Wasser allein ist genug", nl: "Water alleen is genoeg" },
                    { en: "It's just a habit", es: "Es solo un hábito", de: "Es ist nur eine Gewohnheit", nl: "Het is gewoon een gewoonte" }
                ],
                correct: 0,
                explanation: {
                    en: "Soap is like a superhero against germs! It breaks apart the outer layer of bacteria and viruses, making them fall apart. Then water washes them down the drain. That's why washing with soap for 20 seconds protects us from getting sick!",
                    es: "¡El jabón es como un superhéroe contra los gérmenes! Rompe la capa externa de bacterias y virus, haciendo que se desintegren. Luego el agua los lava por el desagüe. ¡Por eso lavarse con jabón por 20 segundos nos protege de enfermarnos!",
                    de: "Seife ist wie ein Superheld gegen Keime! Sie zerbricht die äußere Schicht von Bakterien und Viren und lässt sie auseinanderfallen. Dann spült Wasser sie in den Abfluss. Deshalb schützt uns das Waschen mit Seife für 20 Sekunden davor, krank zu werden!",
                    nl: "Zeep is als een superheld tegen ziektekiemen! Het breekt de buitenste laag van bacteriën en virussen af, waardoor ze uit elkaar vallen. Dan spoelt water ze door de afvoer. Daarom beschermt wassen met zeep gedurende 20 seconden ons tegen ziek worden!"
                }
            },
            {
                question: {
                    en: "How do microwaves heat food?",
                    es: "¿Cómo calientan la comida los microondas?",
                    de: "Wie erwärmen Mikrowellen Essen?",
                    nl: "Hoe verwarmen magnetrons voedsel?"
                },
                options: [
                    { en: "They make water molecules vibrate quickly", es: "Hacen que las moléculas de agua vibren rápidamente", de: "Sie lassen Wassermoleküle schnell vibrieren", nl: "Ze laten watermoleculen snel trillen" },
                    { en: "They use regular heat like an oven", es: "Usan calor regular como un horno", de: "Sie verwenden normale Hitze wie ein Ofen", nl: "Ze gebruiken gewone warmte zoals een oven" },
                    { en: "They shoot fire at the food", es: "Disparan fuego a la comida", de: "Sie schießen Feuer auf das Essen", nl: "Ze schieten vuur op het voedsel" },
                    { en: "They freeze the food first", es: "Congelan la comida primero", de: "Sie frieren das Essen zuerst ein", nl: "Ze bevriezen het voedsel eerst" }
                ],
                correct: 0,
                explanation: {
                    en: "Microwaves use special electromagnetic waves that make water molecules in food vibrate super fast - about 2.5 billion times per second! This vibration creates heat from the inside out, warming your food quickly. It's like making the water molecules dance so fast they get hot!",
                    es: "¡Los microondas usan ondas electromagnéticas especiales que hacen vibrar las moléculas de agua en la comida súper rápido - cerca de 2.5 mil millones de veces por segundo! Esta vibración crea calor desde adentro hacia afuera, calentando tu comida rápidamente. ¡Es como hacer que las moléculas de agua bailen tan rápido que se calientan!",
                    de: "Mikrowellen verwenden spezielle elektromagnetische Wellen, die Wassermoleküle im Essen super schnell vibrieren lassen - etwa 2,5 Milliarden Mal pro Sekunde! Diese Vibration erzeugt Wärme von innen nach außen und erwärmt dein Essen schnell. Es ist, als würde man die Wassermoleküle so schnell tanzen lassen, dass sie heiß werden!",
                    nl: "Magnetrons gebruiken speciale elektromagnetische golven die watermoleculen in voedsel super snel laten trillen - ongeveer 2,5 miljard keer per seconde! Deze trillingen creëren warmte van binnenuit, waardoor je voedsel snel opwarmt. Het is alsof je de watermoleculen zo snel laat dansen dat ze warm worden!"
                }
            },
            {
                question: {
                    en: "Why do ice cubes float in water?",
                    es: "¿Por qué flotan los cubitos de hielo en el agua?",
                    de: "Warum schwimmen Eiswürfel im Wasser?",
                    nl: "Waarom drijven ijsblokjes in water?"
                },
                options: [
                    { en: "Ice is less dense than water", es: "El hielo es menos denso que el agua", de: "Eis ist weniger dicht als Wasser", nl: "Ijs is minder dicht dan water" },
                    { en: "Ice has air bubbles", es: "El hielo tiene burbujas de aire", de: "Eis hat Luftblasen", nl: "Ijs heeft luchtbellen" },
                    { en: "Cold things always float", es: "Las cosas frías siempre flotan", de: "Kalte Dinge schwimmen immer", nl: "Koude dingen drijven altijd" },
                    { en: "Gravity doesn't work on ice", es: "La gravedad no funciona en el hielo", de: "Schwerkraft wirkt nicht auf Eis", nl: "Zwaartekracht werkt niet op ijs" }
                ],
                correct: 0,
                explanation: {
                    en: "Ice floats because it's actually less dense than liquid water! When water freezes, its molecules arrange into a crystal structure that takes up more space, making ice lighter per volume. This is unusual - most substances get denser when they freeze, but water is special!",
                    es: "¡El hielo flota porque es en realidad menos denso que el agua líquida! Cuando el agua se congela, sus moléculas se organizan en una estructura cristalina que ocupa más espacio, haciendo el hielo más liviano por volumen. Esto es inusual - la mayoría de sustancias se vuelven más densas cuando se congelan, ¡pero el agua es especial!",
                    de: "Eis schwimmt, weil es tatsächlich weniger dicht ist als flüssiges Wasser! Wenn Wasser gefriert, ordnen sich seine Moleküle in einer Kristallstruktur an, die mehr Platz einnimmt, wodurch Eis pro Volumen leichter wird. Das ist ungewöhnlich - die meisten Substanzen werden dichter, wenn sie gefrieren, aber Wasser ist besonders!",
                    nl: "Ijs drijft omdat het eigenlijk minder dicht is dan vloeibaar water! Wanneer water bevriest, rangschikken zijn moleculen zich in een kristalstructuur die meer ruimte inneemt, waardoor ijs lichter wordt per volume. Dit is ongewoon - de meeste stoffen worden dichter wanneer ze bevriezen, maar water is speciaal!"
                }
            },
            {
                question: {
                    en: "How do batteries work?",
                    es: "¿Cómo funcionan las baterías?",
                    de: "Wie funktionieren Batterien?",
                    nl: "Hoe werken batterijen?"
                },
                options: [
                    { en: "Chemical reactions create electrical energy", es: "Reacciones químicas crean energía eléctrica", de: "Chemische Reaktionen erzeugen elektrische Energie", nl: "Chemische reacties creëren elektrische energie" },
                    { en: "They store sunlight", es: "Almacenan luz solar", de: "Sie speichern Sonnenlicht", nl: "Ze slaan zonlicht op" },
                    { en: "They collect static electricity", es: "Recolectan electricidad estática", de: "Sie sammeln statische Elektrizität", nl: "Ze verzamelen statische elektriciteit" },
                    { en: "Magnets spin inside them", es: "Los imanes giran dentro de ellas", de: "Magnete drehen sich darin", nl: "Magneten draaien erin" }
                ],
                correct: 0,
                explanation: {
                    en: "Batteries are like tiny chemical power plants! Inside, different chemicals react with each other, creating a flow of electrons (electricity). The reaction pushes electrons from the negative end to the positive end through your device, powering it up. When the chemicals are used up, the battery is dead!",
                    es: "¡Las baterías son como pequeñas plantas de energía química! Adentro, diferentes químicos reaccionan entre sí, creando un flujo de electrones (electricidad). La reacción empuja electrones del extremo negativo al positivo a través de tu dispositivo, encendiéndolo. ¡Cuando los químicos se agotan, la batería está muerta!",
                    de: "Batterien sind wie winzige chemische Kraftwerke! Drinnen reagieren verschiedene Chemikalien miteinander und erzeugen einen Elektronenfluss (Elektrizität). Die Reaktion drückt Elektronen vom negativen zum positiven Ende durch dein Gerät und versorgt es mit Strom. Wenn die Chemikalien aufgebraucht sind, ist die Batterie leer!",
                    nl: "Batterijen zijn als kleine chemische energiecentrales! Binnenin reageren verschillende chemicaliën met elkaar, wat een stroom van elektronen (elektriciteit) creëert. De reactie duwt elektronen van de negatieve naar de positieve kant door je apparaat, waardoor het wordt aangedreven. Wanneer de chemicaliën opraken, is de batterij leeg!"
                }
            },
            {
                question: {
                    en: "Why does bread rise when baking?",
                    es: "¿Por qué se eleva el pan al hornear?",
                    de: "Warum geht Brot beim Backen auf?",
                    nl: "Waarom rijst brood tijdens het bakken?"
                },
                options: [
                    { en: "Yeast creates gas bubbles", es: "La levadura crea burbujas de gas", de: "Hefe erzeugt Gasblasen", nl: "Gist maakt gasbellen" },
                    { en: "Heat makes bread float", es: "El calor hace flotar el pan", de: "Hitze lässt Brot schweben", nl: "Warmte laat brood zweven" },
                    { en: "Air gets trapped accidentally", es: "El aire queda atrapado accidentalmente", de: "Luft wird zufällig eingeschlossen", nl: "Lucht wordt per ongeluk opgesloten" },
                    { en: "The oven pushes it up", es: "El horno lo empuja hacia arriba", de: "Der Ofen drückt es hoch", nl: "De oven duwt het omhoog" }
                ],
                correct: 0,
                explanation: {
                    en: "Yeast is like tiny bread helpers! These living microorganisms eat the sugars in dough and produce carbon dioxide gas as waste. These gas bubbles get trapped in the dough, making it puff up and become fluffy. Heat from baking sets the structure, keeping the bread light and airy!",
                    es: "¡La levadura son como pequeños ayudantes del pan! Estos microorganismos vivos comen los azúcares en la masa y producen gas dióxido de carbono como desecho. Estas burbujas de gas quedan atrapadas en la masa, haciendo que se hinche y se vuelva esponjosa. ¡El calor del horneado fija la estructura, manteniendo el pan ligero y aireado!",
                    de: "Hefe ist wie winzige Brothelfer! Diese lebenden Mikroorganismen fressen die Zucker im Teig und produzieren Kohlendioxidgas als Abfall. Diese Gasblasen werden im Teig eingeschlossen, wodurch er aufgeht und fluffig wird. Hitze vom Backen fixiert die Struktur und hält das Brot leicht und luftig!",
                    nl: "Gist is als kleine broodhelpers! Deze levende micro-organismen eten de suikers in deeg en produceren koolstofdioxide gas als afval. Deze gasbellen raken opgesloten in het deeg, waardoor het opzwelt en luchtig wordt. Warmte van het bakken zet de structuur vast, waardoor het brood licht en luchtig blijft!"
                }
            },
            {
                question: {
                    en: "How do vaccines help protect us?",
                    es: "¿Cómo nos ayudan a protegernos las vacunas?",
                    de: "Wie helfen uns Impfstoffe beim Schutz?",
                    nl: "Hoe helpen vaccins ons beschermen?"
                },
                options: [
                    { en: "They teach our immune system to recognize diseases", es: "Enseñan a nuestro sistema inmunológico a reconocer enfermedades", de: "Sie lehren unser Immunsystem, Krankheiten zu erkennen", nl: "Ze leren ons immuunsysteem ziektes te herkennen" },
                    { en: "They kill all germs in our body", es: "Matan todos los gérmenes en nuestro cuerpo", de: "Sie töten alle Keime in unserem Körper", nl: "Ze doden alle ziektekiemen in ons lichaam" },
                    { en: "They make us never get sick", es: "Hacen que nunca nos enfermemos", de: "Sie sorgen dafür, dass wir nie krank werden", nl: "Ze zorgen ervoor dat we nooit ziek worden" },
                    { en: "They give us superpowers", es: "Nos dan superpoderes", de: "Sie geben uns Superkräfte", nl: "Ze geven ons superkrachten" }
                ],
                correct: 0,
                explanation: {
                    en: "Vaccines are like training camps for your immune system! They contain weakened or inactive parts of disease-causing germs. This safely shows your immune system what the enemy looks like, so it can quickly recognize and fight the real disease if it ever shows up. It's like giving your body a practice round!",
                    es: "¡Las vacunas son como campos de entrenamiento para tu sistema inmunológico! Contienen partes debilitadas o inactivas de gérmenes que causan enfermedades. Esto muestra de forma segura a tu sistema inmunológico cómo se ve el enemigo, para que pueda reconocer y combatir rápidamente la enfermedad real si alguna vez aparece. ¡Es como darle a tu cuerpo una ronda de práctica!",
                    de: "Impfstoffe sind wie Trainingslager für dein Immunsystem! Sie enthalten geschwächte oder inaktive Teile von krankheitsverursachenden Keimen. Das zeigt deinem Immunsystem sicher, wie der Feind aussieht, damit es die echte Krankheit schnell erkennen und bekämpfen kann, falls sie jemals auftaucht. Es ist wie eine Übungsrunde für deinen Körper!",
                    nl: "Vaccins zijn als trainingskampen voor je immuunsysteem! Ze bevatten verzwakte of inactieve delen van ziekteverwekkers. Dit laat je immuunsysteem veilig zien hoe de vijand eruitziet, zodat het de echte ziekte snel kan herkennen en bestrijden als het ooit opduikt. Het is als je lichaam een oefenronde geven!"
                }
            },
            {
                question: {
                    en: "Why does metal feel colder than wood even at the same temperature?",
                    es: "¿Por qué el metal se siente más frío que la madera incluso a la misma temperatura?",
                    de: "Warum fühlt sich Metall kälter an als Holz, auch bei derselben Temperatur?",
                    nl: "Waarom voelt metaal kouder dan hout, zelfs bij dezelfde temperatuur?"
                },
                options: [
                    { en: "Metal conducts heat away from your skin faster", es: "El metal conduce el calor lejos de tu piel más rápido", de: "Metall leitet Wärme schneller von deiner Haut weg", nl: "Metaal geleidt warmte sneller weg van je huid" },
                    { en: "Metal is actually colder", es: "El metal está realmente más frío", de: "Metall ist tatsächlich kälter", nl: "Metaal is werkelijk kouder" },
                    { en: "Wood heats up by itself", es: "La madera se calienta por sí sola", de: "Holz erwärmt sich von selbst", nl: "Hout warmt zichzelf op" },
                    { en: "Our skin prefers wood", es: "Nuestra piel prefiere la madera", de: "Unsere Haut bevorzugt Holz", nl: "Onze huid heeft een voorkeur voor hout" }
                ],
                correct: 0,
                explanation: {
                    en: "Metal is a great heat conductor - it quickly pulls heat away from your warm skin, making it feel cold! Wood is a poor conductor, so it doesn't steal your body heat as fast, feeling warmer. It's like metal is a heat thief while wood is a heat keeper!",
                    es: "¡El metal es un gran conductor de calor - rápidamente quita calor de tu piel cálida, haciéndolo sentir frío! La madera es un mal conductor, así que no roba el calor de tu cuerpo tan rápido, sintiéndose más cálida. ¡Es como si el metal fuera un ladrón de calor mientras la madera fuera un guardián de calor!",
                    de: "Metall ist ein großartiger Wärmeleiter - es zieht schnell Wärme von deiner warmen Haut weg, wodurch es sich kalt anfühlt! Holz ist ein schlechter Leiter, also stiehlt es deine Körperwärme nicht so schnell und fühlt sich wärmer an. Es ist, als wäre Metall ein Wärmedieb, während Holz ein Wärmebewahrer ist!",
                    nl: "Metaal is een geweldige warmtegeleider - het trekt snel warmte weg van je warme huid, waardoor het koud aanvoelt! Hout is een slechte geleider, dus het steelt je lichaamswarmte niet zo snel, waardoor het warmer aanvoelt. Het is alsof metaal een warmtedief is terwijl hout een warmtebewaarder is!"
                }
            },
            {
                question: {
                    en: "How do touchscreens know where we touch?",
                    es: "¿Cómo saben las pantallas táctiles dónde tocamos?",
                    de: "Wie wissen Touchscreens, wo wir berühren?",
                    nl: "Hoe weten aanraakschermen waar we aanraken?"
                },
                options: [
                    { en: "They detect electrical changes from our fingers", es: "Detectan cambios eléctricos de nuestros dedos", de: "Sie erkennen elektrische Veränderungen von unseren Fingern", nl: "Ze detecteren elektrische veranderingen van onze vingers" },
                    { en: "They use tiny cameras", es: "Usan cámaras pequeñas", de: "Sie verwenden winzige Kameras", nl: "Ze gebruiken kleine camera's" },
                    { en: "They feel the pressure", es: "Sienten la presión", de: "Sie spüren den Druck", nl: "Ze voelen de druk" },
                    { en: "Magic sensors everywhere", es: "Sensores mágicos por todos lados", de: "Magische Sensoren überall", nl: "Magische sensoren overal" }
                ],
                correct: 0,
                explanation: {
                    en: "Most touchscreens are capacitive - they have an invisible grid of electrical circuits. Your finger conducts electricity, so when you touch the screen, it changes the electrical field at that spot. The computer detects this change and knows exactly where you touched! Your finger is like a tiny lightning rod!",
                    es: "¡La mayoría de pantallas táctiles son capacitivas - tienen una cuadrícula invisible de circuitos eléctricos. Tu dedo conduce electricidad, así que cuando tocas la pantalla, cambia el campo eléctrico en ese lugar. ¡La computadora detecta este cambio y sabe exactamente dónde tocaste! ¡Tu dedo es como una pequeña varilla de rayos!",
                    de: "Die meisten Touchscreens sind kapazitiv - sie haben ein unsichtbares Gitter aus elektrischen Schaltkreisen. Dein Finger leitet Elektrizität, also wenn du den Bildschirm berührst, ändert es das elektrische Feld an dieser Stelle. Der Computer erkennt diese Änderung und weiß genau, wo du berührt hast! Dein Finger ist wie ein winziger Blitzableiter!",
                    nl: "De meeste aanraakschermen zijn capacitief - ze hebben een onzichtbaar raster van elektrische circuits. Je vinger geleidt elektriciteit, dus wanneer je het scherm aanraakt, verandert het het elektrische veld op die plek. De computer detecteert deze verandering en weet precies waar je hebt aangeraakt! Je vinger is als een kleine bliksemafleider!"
                }
            },
            {
                question: {
                    en: "Why does cut fruit turn brown?",
                    es: "¿Por qué la fruta cortada se vuelve marrón?",
                    de: "Warum wird geschnittenes Obst braun?",
                    nl: "Waarom wordt gesneden fruit bruin?"
                },
                options: [
                    { en: "Oxygen in air reacts with the fruit", es: "El oxígeno en el aire reacciona con la fruta", de: "Sauerstoff in der Luft reagiert mit dem Obst", nl: "Zuurstof in de lucht reageert met het fruit" },
                    { en: "The fruit gets dirty", es: "La fruta se ensucia", de: "Das Obst wird schmutzig", nl: "Het fruit wordt vies" },
                    { en: "Light makes it change color", es: "La luz hace que cambie de color", de: "Licht lässt es die Farbe ändern", nl: "Licht laat het van kleur veranderen" },
                    { en: "It's getting ripe", es: "Se está madurando", de: "Es wird reif", nl: "Het wordt rijp" }
                ],
                correct: 0,
                explanation: {
                    en: "When you cut fruit, you expose it to oxygen in the air. The fruit contains enzymes that react with oxygen, causing a chemical reaction called oxidation. This turns the fruit brown, just like how iron rusts! You can slow this down by adding lemon juice, which blocks the reaction!",
                    es: "¡Cuando cortas fruta, la expones al oxígeno en el aire. La fruta contiene enzimas que reaccionan con el oxígeno, causando una reacción química llamada oxidación. Esto vuelve la fruta marrón, ¡igual que como el hierro se oxida! ¡Puedes desacelerar esto agregando jugo de limón, que bloquea la reacción!",
                    de: "Wenn du Obst schneidest, setzt du es dem Sauerstoff in der Luft aus. Das Obst enthält Enzyme, die mit Sauerstoff reagieren und eine chemische Reaktion namens Oxidation verursachen. Das macht das Obst braun, genauso wie Eisen rostet! Du kannst das verlangsamen, indem du Zitronensaft hinzufügst, der die Reaktion blockiert!",
                    nl: "Wanneer je fruit snijdt, stel je het bloot aan zuurstof in de lucht. Het fruit bevat enzymen die reageren met zuurstof, waardoor een chemische reactie ontstaat die oxidatie wordt genoemd. Dit maakt het fruit bruin, net zoals ijzer roest! Je kunt dit vertragen door citroensap toe te voegen, dat de reactie blokkeert!"
                }
            },
            {
                question: {
                    en: "How do mirrors work?",
                    es: "¿Cómo funcionan los espejos?",
                    de: "Wie funktionieren Spiegel?",
                    nl: "Hoe werken spiegels?"
                },
                options: [
                    { en: "They reflect light back to your eyes", es: "Reflejan la luz de vuelta a tus ojos", de: "Sie reflektieren Licht zurück zu deinen Augen", nl: "Ze weerkaatsen licht terug naar je ogen" },
                    { en: "They store images", es: "Almacenan imágenes", de: "Sie speichern Bilder", nl: "Ze slaan beelden op" },
                    { en: "They create light", es: "Crean luz", de: "Sie erzeugen Licht", nl: "Ze creëren licht" },
                    { en: "They show the future", es: "Muestran el futuro", de: "Sie zeigen die Zukunft", nl: "Ze tonen de toekomst" }
                ],
                correct: 0,
                explanation: {
                    en: "Mirrors have a very smooth surface that reflects light in a predictable way! Light bounces off you, hits the mirror, and bounces back to your eyes in straight lines. The mirror acts like a perfect light bouncer, sending the image of your face right back to you. That's why you see yourself!",
                    es: "¡Los espejos tienen una superficie muy lisa que refleja la luz de manera predecible! La luz rebota de ti, golpea el espejo, y rebota de vuelta a tus ojos en líneas rectas. El espejo actúa como un rebotador perfecto de luz, enviando la imagen de tu cara de vuelta a ti. ¡Por eso te ves a ti mismo!",
                    de: "Spiegel haben eine sehr glatte Oberfläche, die Licht vorhersagbar reflektiert! Licht prallt von dir ab, trifft den Spiegel und prallt in geraden Linien zu deinen Augen zurück. Der Spiegel wirkt wie ein perfekter Lichtabpraller und sendet das Bild deines Gesichts direkt zu dir zurück. Deshalb siehst du dich selbst!",
                    nl: "Spiegels hebben een heel glad oppervlak dat licht op een voorspelbare manier weerkaatst! Licht kaatst van jou af, raakt de spiegel, en kaatst terug naar je ogen in rechte lijnen. De spiegel werkt als een perfecte lichtkaatser, die het beeld van je gezicht recht terug naar je stuurt. Daarom zie je jezelf!"
                }
            },
            {
                question: {
                    en: "Why do we need to refrigerate food?",
                    es: "¿Por qué necesitamos refrigerar la comida?",
                    de: "Warum müssen wir Essen kühlen?",
                    nl: "Waarom moeten we voedsel koelen?"
                },
                options: [
                    { en: "Cold slows down bacteria growth", es: "El frío desacelera el crecimiento de bacterias", de: "Kälte verlangsamt das Bakterienwachstum", nl: "Kou vertraagt bacteriegroei" },
                    { en: "Food tastes better when cold", es: "La comida sabe mejor fría", de: "Essen schmeckt besser, wenn es kalt ist", nl: "Voedsel smaakt beter als het koud is" },
                    { en: "It makes food last forever", es: "Hace que la comida dure para siempre", de: "Es macht Essen für immer haltbar", nl: "Het laat voedsel voor altijd meegaan" },
                    { en: "Cold air is cleaner", es: "El aire frío es más limpio", de: "Kalte Luft ist sauberer", nl: "Koude lucht is schoner" }
                ],
                correct: 0,
                explanation: {
                    en: "Cold temperatures slow down bacteria and other microorganisms that make food spoil! Just like how you move slower in cold weather, bacteria grow and multiply much slower in the fridge. This keeps your food fresh and safe to eat for longer. Heat speeds up bacteria growth, which is why food spoils faster when left out!",
                    es: "¡Las temperaturas frías desaceleran las bacterias y otros microorganismos que hacen que la comida se eche a perder! Al igual que te mueves más lento en clima frío, las bacterias crecen y se multiplican mucho más lento en el refrigerador. Esto mantiene tu comida fresca y segura para comer por más tiempo. ¡El calor acelera el crecimiento de bacterias, por eso la comida se echa a perder más rápido cuando se deja afuera!",
                    de: "Kalte Temperaturen verlangsamen Bakterien und andere Mikroorganismen, die Essen verderben lassen! Genau wie du dich in kaltem Wetter langsamer bewegst, wachsen und vermehren sich Bakterien im Kühlschrank viel langsamer. Das hält dein Essen länger frisch und sicher zum Essen. Hitze beschleunigt das Bakterienwachstum, deshalb verdirbt Essen schneller, wenn es draußen gelassen wird!",
                    nl: "Koude temperaturen vertragen bacteriën en andere micro-organismen die voedsel laten bederven! Net zoals jij langzamer beweegt in koud weer, groeien en vermenigvuldigen bacteriën veel langzamer in de koelkast. Dit houdt je voedsel langer vers en veilig om te eten. Warmte versnelt bacteriegroei, daarom bederft voedsel sneller als het buiten wordt gelaten!"
                }
            },
            {
                question: {
                    en: "How does sunscreen protect our skin?",
                    es: "¿Cómo protege el protector solar nuestra piel?",
                    de: "Wie schützt Sonnencreme unsere Haut?",
                    nl: "Hoe beschermt zonnebrandcrème onze huid?"
                },
                options: [
                    { en: "It blocks or absorbs harmful UV rays", es: "Bloquea o absorbe los rayos UV dañinos", de: "Es blockiert oder absorbiert schädliche UV-Strahlen", nl: "Het blokkeert of absorbeert schadelijke UV-stralen" },
                    { en: "It makes skin waterproof", es: "Hace la piel impermeable", de: "Es macht die Haut wasserdicht", nl: "Het maakt huid waterdicht" },
                    { en: "It cools down the skin", es: "Enfría la piel", de: "Es kühlt die Haut ab", nl: "Het koelt de huid af" },
                    { en: "It attracts good sunlight", es: "Atrae la buena luz solar", de: "Es zieht gutes Sonnenlicht an", nl: "Het trekt goed zonlicht aan" }
                ],
                correct: 0,
                explanation: {
                    en: "Sunscreen contains special chemicals that act like tiny shields for your skin! Some ingredients absorb UV rays and turn them into harmless heat, while others reflect UV rays away like tiny mirrors. UV rays from the sun can damage skin cells and cause sunburn, so sunscreen is like armor that protects you!",
                    es: "¡El protector solar contiene químicos especiales que actúan como pequeños escudos para tu piel! Algunos ingredientes absorben los rayos UV y los convierten en calor inofensivo, mientras otros reflejan los rayos UV como pequeños espejos. Los rayos UV del sol pueden dañar las células de la piel y causar quemaduras, ¡así que el protector solar es como armadura que te protege!",
                    de: "Sonnencreme enthält spezielle Chemikalien, die wie winzige Schilde für deine Haut wirken! Einige Inhaltsstoffe absorbieren UV-Strahlen und wandeln sie in harmlose Wärme um, während andere UV-Strahlen wie winzige Spiegel wegrefektieren. UV-Strahlen von der Sonne können Hautzellen schädigen und Sonnenbrand verursachen, also ist Sonnencreme wie eine Rüstung, die dich schützt!",
                    nl: "Zonnebrandcrème bevat speciale chemicaliën die werken als kleine schilden voor je huid! Sommige ingrediënten absorberen UV-stralen en veranderen ze in onschadelijke warmte, terwijl andere UV-stralen wegkaatsen als kleine spiegeltjes. UV-stralen van de zon kunnen huidcellen beschadigen en zonnebrand veroorzaken, dus zonnebrandcrème is als een pantser dat je beschermt!"
                }
            },
            {
                question: {
                    en: "Why does soap make bubbles?",
                    es: "¿Por qué el jabón hace burbujas?",
                    de: "Warum macht Seife Blasen?",
                    nl: "Waarom maakt zeep bellen?"
                },
                options: [
                    { en: "Soap molecules reduce water's surface tension", es: "Las moléculas de jabón reducen la tensión superficial del agua", de: "Seifenmoleküle reduzieren die Oberflächenspannung von Wasser", nl: "Zeepmoleculen verminderen de oppervlaktespanning van water" },
                    { en: "Soap traps air naturally", es: "El jabón atrapa aire naturalmente", de: "Seife fängt Luft natürlich ein", nl: "Zeep vangt lucht van nature" },
                    { en: "Heat from your hands creates bubbles", es: "El calor de tus manos crea burbujas", de: "Wärme von deinen Händen erzeugt Blasen", nl: "Warmte van je handen maakt bellen" },
                    { en: "Soap is naturally bubbly", es: "El jabón es naturalmente burbujeante", de: "Seife ist von Natur aus blasig", nl: "Zeep is van nature belletjesrijk" }
                ],
                correct: 0,
                explanation: {
                    en: "Soap molecules are like tiny troublemakers that break up water's natural 'stickiness' (surface tension)! This lets water stretch into thin films that can trap air inside, creating bubbles. The soap forms a flexible skin around the air bubble. Without soap, water drops would just stick together and couldn't hold air inside!",
                    es: "¡Las moléculas de jabón son como pequeños alborotadores que rompen la 'pegajosidad' natural del agua (tensión superficial)! Esto permite que el agua se estire en películas delgadas que pueden atrapar aire adentro, creando burbujas. El jabón forma una piel flexible alrededor de la burbuja de aire. ¡Sin jabón, las gotas de agua solo se pegarían y no podrían mantener aire adentro!",
                    de: "Seifenmoleküle sind wie winzige Unruhestifter, die die natürliche 'Klebrigkeit' (Oberflächenspannung) von Wasser aufbrechen! Das lässt Wasser sich in dünne Filme dehnen, die Luft darin einschließen können und Blasen erzeugen. Die Seife bildet eine flexible Haut um die Luftblase. Ohne Seife würden Wassertropfen nur zusammenkleben und könnten keine Luft darin halten!",
                    nl: "Zeepmoleculen zijn als kleine onruststokers die de natuurlijke 'plakkerigheid' (oppervlaktespanning) van water verstoren! Dit laat water uitrekken in dunne films die lucht kunnen opsluiten, waardoor bellen ontstaan. De zeep vormt een flexibele huid rond de luchtbel. Zonder zeep zouden waterdruppels alleen maar samenklitten en konden ze geen lucht vasthouden!"
                }
            },
            {
                question: {
                    en: "How do greenhouse gases warm the Earth?",
                    es: "¿Cómo calientan la Tierra los gases de efecto invernadero?",
                    de: "Wie erwärmen Treibhausgase die Erde?",
                    nl: "Hoe verwarmen broeikasgassen de aarde?"
                },
                options: [
                    { en: "They trap heat like a blanket around Earth", es: "Atrapan calor como una manta alrededor de la Tierra", de: "Sie fangen Wärme wie eine Decke um die Erde ein", nl: "Ze vangen warmte op als een deken rond de aarde" },
                    { en: "They create heat by themselves", es: "Crean calor por sí mismos", de: "Sie erzeugen selbst Wärme", nl: "Ze maken zelf warmte" },
                    { en: "They move the Earth closer to the sun", es: "Mueven la Tierra más cerca del sol", de: "Sie bewegen die Erde näher zur Sonne", nl: "Ze bewegen de aarde dichter naar de zon" },
                    { en: "They make the sun brighter", es: "Hacen el sol más brillante", de: "Sie machen die Sonne heller", nl: "Ze maken de zon helderder" }
                ],
                correct: 0,
                explanation: {
                    en: "Greenhouse gases work like a blanket around Earth! Sunlight comes through our atmosphere and heats the ground. The ground tries to radiate this heat back to space, but greenhouse gases in the air catch some of this heat and send it back down, keeping Earth warmer. It's like being under covers on a cold night!",
                    es: "¡Los gases de efecto invernadero funcionan como una manta alrededor de la Tierra! La luz solar pasa a través de nuestra atmósfera y calienta el suelo. El suelo trata de radiar este calor de vuelta al espacio, pero los gases de efecto invernadero en el aire atrapan parte de este calor y lo envían de vuelta, manteniendo la Tierra más caliente. ¡Es como estar bajo las cobijas en una noche fría!",
                    de: "Treibhausgase wirken wie eine Decke um die Erde! Sonnenlicht kommt durch unsere Atmosphäre und erwärmt den Boden. Der Boden versucht, diese Wärme zurück ins All zu strahlen, aber Treibhausgase in der Luft fangen einen Teil dieser Wärme ab und senden sie zurück nach unten, wodurch die Erde wärmer bleibt. Es ist wie unter einer Decke in einer kalten Nacht!",
                    nl: "Broeikasgassen werken als een deken rond de aarde! Zonlicht komt door onze atmosfeer en verwarmt de grond. De grond probeert deze warmte terug naar de ruimte uit te stralen, maar broeikasgassen in de lucht vangen een deel van deze warmte op en sturen het terug naar beneden, waardoor de aarde warmer blijft. Het is als onder dekens liggen op een koude nacht!"
                }
            },
            {
                question: {
                    en: "Why do we see different phases of the moon?",
                    es: "¿Por qué vemos diferentes fases de la luna?",
                    de: "Warum sehen wir verschiedene Mondphasen?",
                    nl: "Waarom zien we verschillende fasen van de maan?"
                },
                options: [
                    { en: "The sun lights up different parts as the moon orbits Earth", es: "El sol ilumina diferentes partes mientras la luna orbita la Tierra", de: "Die Sonne beleuchtet verschiedene Teile, während der Mond die Erde umkreist", nl: "De zon verlicht verschillende delen terwijl de maan om de aarde draait" },
                    { en: "The moon changes shape", es: "La luna cambia de forma", de: "Der Mond ändert seine Form", nl: "De maan verandert van vorm" },
                    { en: "Earth's shadow blocks the moon", es: "La sombra de la Tierra bloquea la luna", de: "Der Schatten der Erde blockiert den Mond", nl: "De schaduw van de aarde blokkeert de maan" },
                    { en: "Clouds cover parts of the moon", es: "Las nubes cubren partes de la luna", de: "Wolken bedecken Teile des Mondes", nl: "Wolken bedekken delen van de maan" }
                ],
                correct: 0,
                explanation: {
                    en: "Moon phases happen because of the moon's position relative to Earth and the sun! The moon doesn't make its own light - it reflects sunlight like a mirror. As the moon orbits around Earth, we see different amounts of its sunlit side. When the moon is between Earth and the sun, we see a new moon (dark). When Earth is between the moon and sun, we see a full moon!",
                    es: "¡Las fases lunares suceden debido a la posición de la luna relativa a la Tierra y el sol! La luna no hace su propia luz - refleja luz solar como un espejo. Mientras la luna orbita alrededor de la Tierra, vemos diferentes cantidades de su lado iluminado por el sol. Cuando la luna está entre la Tierra y el sol, vemos luna nueva (oscura). ¡Cuando la Tierra está entre la luna y el sol, vemos luna llena!",
                    de: "Mondphasen entstehen durch die Position des Mondes relativ zur Erde und zur Sonne! Der Mond macht nicht sein eigenes Licht - er reflektiert Sonnenlicht wie ein Spiegel. Während der Mond um die Erde kreist, sehen wir verschiedene Mengen seiner sonnenbeschienenen Seite. Wenn der Mond zwischen Erde und Sonne ist, sehen wir Neumond (dunkel). Wenn die Erde zwischen Mond und Sonne ist, sehen wir Vollmond!",
                    nl: "Maanfasen gebeuren vanwege de positie van de maan ten opzichte van de aarde en de zon! De maan maakt niet zijn eigen licht - het weerkaatst zonlicht als een spiegel. Terwijl de maan om de aarde draait, zien we verschillende hoeveelheden van zijn door de zon verlichte kant. Wanneer de maan tussen de aarde en de zon staat, zien we nieuwe maan (donker). Wanneer de aarde tussen de maan en de zon staat, zien we volle maan!"
                }
            },
            {
                question: {
                    en: "How do plants make oxygen for us to breathe?",
                    es: "¿Cómo hacen las plantas oxígeno para que respiremos?",
                    de: "Wie machen Pflanzen Sauerstoff für uns zum Atmen?",
                    nl: "Hoe maken planten zuurstof voor ons om te ademen?"
                },
                options: [
                    { en: "Through photosynthesis using sunlight and carbon dioxide", es: "A través de fotosíntesis usando luz solar y dióxido de carbono", de: "Durch Photosynthese mit Sonnenlicht und Kohlendioxid", nl: "Door fotosynthese met zonlicht en koolstofdioxide" },
                    { en: "They breathe out oxygen like we breathe out air", es: "Exhalan oxígeno como nosotros exhalamos aire", de: "Sie atmen Sauerstoff aus wie wir Luft ausatmen", nl: "Ze ademen zuurstof uit zoals wij lucht uitademen" },
                    { en: "They absorb oxygen from soil", es: "Absorben oxígeno del suelo", de: "Sie absorbieren Sauerstoff aus dem Boden", nl: "Ze absorberen zuurstof uit de grond" },
                    { en: "They collect it from rain", es: "Lo recolectan de la lluvia", de: "Sie sammeln es aus dem Regen", nl: "Ze verzamelen het uit regen" }
                ],
                correct: 0,
                explanation: {
                    en: "Plants are like oxygen factories powered by sunlight! During photosynthesis, they take in carbon dioxide from the air and water from their roots. Using energy from sunlight, they combine these to make sugar for food and release oxygen as a bonus waste product. One large tree can make enough oxygen for two people per day!",
                    es: "¡Las plantas son como fábricas de oxígeno alimentadas por luz solar! Durante la fotosíntesis, toman dióxido de carbono del aire y agua de sus raíces. Usando energía de la luz solar, combinan estos para hacer azúcar para alimento y liberan oxígeno como producto de desecho extra. ¡Un árbol grande puede hacer suficiente oxígeno para dos personas por día!",
                    de: "Pflanzen sind wie Sauerstofffabriken, die von Sonnenlicht angetrieben werden! Während der Photosynthese nehmen sie Kohlendioxid aus der Luft und Wasser aus ihren Wurzeln auf. Mit Energie aus Sonnenlicht kombinieren sie diese, um Zucker als Nahrung zu machen und geben Sauerstoff als Bonus-Abfallprodukt ab. Ein großer Baum kann genug Sauerstoff für zwei Personen pro Tag machen!",
                    nl: "Planten zijn als zuurstofffabrieken aangedreven door zonlicht! Tijdens fotosynthese nemen ze koolstofdioxide uit de lucht en water uit hun wortels op. Met energie van zonlicht combineren ze deze om suiker te maken voor voedsel en geven zuurstof af als bonus afvalproduct. Eén grote boom kan genoeg zuurstof maken voor twee mensen per dag!"
                }
            },
            {
                question: {
                    en: "Why do we use salt to melt ice on roads?",
                    es: "¿Por qué usamos sal para derretir hielo en las carreteras?",
                    de: "Warum verwenden wir Salz, um Eis auf Straßen zu schmelzen?",
                    nl: "Waarom gebruiken we zout om ijs op wegen te smelten?"
                },
                options: [
                    { en: "Salt lowers the freezing point of water", es: "La sal baja el punto de congelación del agua", de: "Salz senkt den Gefrierpunkt von Wasser", nl: "Zout verlaagt het vriespunt van water" },
                    { en: "Salt creates heat", es: "La sal crea calor", de: "Salz erzeugt Wärme", nl: "Zout creëert warmte" },
                    { en: "Salt dissolves ice directly", es: "La sal disuelve el hielo directamente", de: "Salz löst Eis direkt auf", nl: "Zout lost ijs direct op" },
                    { en: "Salt absorbs cold", es: "La sal absorbe frío", de: "Salz absorbiert Kälte", nl: "Zout absorbeert kou" }
                ],
                correct: 0,
                explanation: {
                    en: "Salt is like a freezing spoiler! When you mix salt with water, it lowers the temperature at which water freezes from 32°F (0°C) to something much colder. So even when it's below freezing outside, the salty water stays liquid instead of turning into ice. It's like giving water superpowers to resist freezing!",
                    es: "¡La sal es como un estropeador de congelación! Cuando mezclas sal con agua, baja la temperatura a la que el agua se congela de 0°C a algo mucho más frío. Así que incluso cuando está bajo cero afuera, el agua salada permanece líquida en lugar de convertirse en hielo. ¡Es como darle superpoderes al agua para resistir la congelación!",
                    de: "Salz ist wie ein Gefrier-Störer! Wenn du Salz mit Wasser mischst, senkt es die Temperatur, bei der Wasser von 0°C zu etwas viel Kälterem gefriert. Also selbst wenn es draußen unter dem Gefrierpunkt ist, bleibt das salzige Wasser flüssig, anstatt zu Eis zu werden. Es ist wie dem Wasser Superkräfte zu geben, um dem Gefrieren zu widerstehen!",
                    nl: "Zout is als een bevriez-verstoorster! Wanneer je zout mengt met water, verlaagt het de temperatuur waarbij water bevriest van 0°C naar iets veel kouders. Dus zelfs als het buiten vriest, blijft het zoute water vloeibaar in plaats van ijs te worden. Het is als water superkrachten geven om bevriezing te weerstaan!"
                }
            },
            {
                question: {
                    en: "What makes fireworks explode in different colors?",
                    es: "¿Qué hace que los fuegos artificiales exploten en diferentes colores?",
                    de: "Was lässt Feuerwerke in verschiedenen Farben explodieren?",
                    nl: "Wat zorgt ervoor dat vuurwerk in verschillende kleuren explodeert?"
                },
                options: [
                    { en: "Different metal chemicals burn in different colors", es: "Diferentes químicos metálicos arden en diferentes colores", de: "Verschiedene Metallchemikalien brennen in verschiedenen Farben", nl: "Verschillende metaalchemicaliën branden in verschillende kleuren" },
                    { en: "Colored paper is added", es: "Se agrega papel de colores", de: "Farbiges Papier wird hinzugefügt", nl: "Gekleurd papier wordt toegevoegd" },
                    { en: "Food coloring is mixed in", es: "Se mezcla colorante de alimentos", de: "Lebensmittelfarbe wird eingemischt", nl: "Voedselkleurstof wordt erin gemengd" },
                    { en: "Light filters change the colors", es: "Los filtros de luz cambian los colores", de: "Lichtfilter ändern die Farben", nl: "Lichtfilters veranderen de kleuren" }
                ],
                correct: 0,
                explanation: {
                    en: "Fireworks are like chemistry light shows! Different metals create different colored flames when they burn. Strontium makes red, copper makes blue and green, sodium makes yellow, and magnesium makes bright white. When these metal powders explode and burn in the sky, they create those amazing colorful displays. It's the same science that makes campfires have different colored flames!",
                    es: "¡Los fuegos artificiales son como espectáculos de luz química! Diferentes metales crean llamas de diferentes colores cuando se queman. El estroncio hace rojo, el cobre hace azul y verde, el sodio hace amarillo, y el magnesio hace blanco brillante. Cuando estos polvos metálicos explotan y se queman en el cielo, crean esas increíbles exhibiciones coloridas. ¡Es la misma ciencia que hace que las fogatas tengan llamas de diferentes colores!",
                    de: "Feuerwerke sind wie chemische Lichtshows! Verschiedene Metalle erzeugen verschiedenfarbige Flammen, wenn sie brennen. Strontium macht rot, Kupfer macht blau und grün, Natrium macht gelb, und Magnesium macht helles Weiß. Wenn diese Metallpulver am Himmel explodieren und brennen, erzeugen sie diese erstaunlichen farbenfrohen Displays. Es ist die gleiche Wissenschaft, die Lagerfeuer verschiedenfarbige Flammen haben lässt!",
                    nl: "Vuurwerk is als chemische lichtshows! Verschillende metalen creëren verschillende gekleurde vlammen wanneer ze branden. Strontium maakt rood, koper maakt blauw en groen, natrium maakt geel, en magnesium maakt helder wit. Wanneer deze metaalpoeders exploderen en branden aan de hemel, creëren ze die geweldige kleurrijke vertoningen. Het is dezelfde wetenschap die kampvuren verschillende gekleurde vlammen laat hebben!"
                }
            },
            {
                question: {
                    en: "How do 3D movies make images look like they pop out?",
                    es: "¿Cómo hacen las películas 3D que las imágenes parezcan salir?",
                    de: "Wie lassen 3D-Filme Bilder aussehen, als würden sie herausspringen?",
                    nl: "Hoe zorgen 3D-films ervoor dat beelden eruit lijken te springen?"
                },
                options: [
                    { en: "They show slightly different images to each eye", es: "Muestran imágenes ligeramente diferentes a cada ojo", de: "Sie zeigen leicht verschiedene Bilder für jedes Auge", nl: "Ze tonen iets verschillende beelden aan elk oog" },
                    { en: "The screen moves back and forth", es: "La pantalla se mueve hacia adelante y atrás", de: "Der Bildschirm bewegt sich vor und zurück", nl: "Het scherm beweegt heen en weer" },
                    { en: "Special lights project forward", es: "Luces especiales proyectan hacia adelante", de: "Spezielle Lichter projizieren nach vorne", nl: "Speciale lichten projecteren vooruit" },
                    { en: "The glasses create holograms", es: "Los lentes crean hologramas", de: "Die Brille erzeugt Hologramme", nl: "De bril creëert hologrammen" }
                ],
                correct: 0,
                explanation: {
                    en: "3D movies trick your brain by showing each eye a slightly different image, just like how your two eyes normally see things from slightly different angles! The special glasses filter the images so your left eye only sees one version and your right eye sees another. Your brain combines these two different views and creates the illusion of depth, making things appear to jump out of the screen!",
                    es: "¡Las películas 3D engañan a tu cerebro mostrando a cada ojo una imagen ligeramente diferente, igual que como tus dos ojos normalmente ven cosas desde ángulos ligeramente diferentes! Los lentes especiales filtran las imágenes para que tu ojo izquierdo solo vea una versión y tu ojo derecho vea otra. ¡Tu cerebro combina estas dos vistas diferentes y crea la ilusión de profundidad, haciendo que las cosas parezcan saltar de la pantalla!",
                    de: "3D-Filme täuschen dein Gehirn, indem sie jedem Auge ein leicht anderes Bild zeigen, genau wie deine zwei Augen normalerweise Dinge aus leicht verschiedenen Winkeln sehen! Die spezielle Brille filtert die Bilder, sodass dein linkes Auge nur eine Version sieht und dein rechtes Auge eine andere. Dein Gehirn kombiniert diese zwei verschiedenen Ansichten und erzeugt die Illusion von Tiefe, wodurch Dinge aus dem Bildschirm herauszuspringen scheinen!",
                    nl: "3D-films misleiden je hersenen door elk oog een iets ander beeld te tonen, net zoals je twee ogen normaal dingen zien vanuit iets verschillende hoeken! De speciale bril filtert de beelden zodat je linkeroog alleen één versie ziet en je rechteroog een andere. Je hersenen combineren deze twee verschillende beelden en creëren de illusie van diepte, waardoor dingen uit het scherm lijken te springen!"
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/science', level10);
    }
})();