(function() {
    const level10Questions = [
        {
            question: {
                en: "How does pasta cooking water pH affect texture and color during preparation?",
                es: "¿Cómo afecta el pH del agua de cocción de pasta a la textura y el color durante la preparación?",
                de: "Wie beeinflusst der pH-Wert des Pasta-Kochwassers Textur und Farbe während der Zubereitung?",
                nl: "Hoe beïnvloedt pasta-kookwater pH textuur en kleur tijdens de bereiding?"
            },
            options: [
                {
                    en: "Alkaline water strengthens gluten bonds and enhances yellow color, while acidic water weakens structure",
                    es: "El agua alcalina fortalece los enlaces de gluten y realza el color amarillo, mientras que el agua ácida debilita la estructura",
                    de: "Alkalisches Wasser stärkt Glutenbindungen und verstärkt gelbe Farbe, während saures Wasser die Struktur schwächt",
                    nl: "Alkalisch water versterkt glutenbindingen en versterkt gele kleur, terwijl zuur water de structuur verzwakt"
                },
                {
                    en: "pH has no effect on pasta cooking whatsoever",
                    es: "El pH no tiene ningún efecto en la cocción de pasta",
                    de: "Der pH-Wert hat keinerlei Auswirkung auf das Pastakochen",
                    nl: "pH heeft geen enkel effect op pasta koken"
                },
                {
                    en: "Acidic water makes pasta cook faster and firmer",
                    es: "El agua ácida hace que la pasta se cocine más rápido y más firme",
                    de: "Saures Wasser lässt Pasta schneller und fester kochen",
                    nl: "Zuur water maakt pasta sneller en steviger koken"
                },
                {
                    en: "Only extremely high pH above 12 affects pasta",
                    es: "Solo pH extremadamente alto por encima de 12 afecta la pasta",
                    de: "Nur extrem hoher pH-Wert über 12 beeinflusst Pasta",
                    nl: "Alleen extreem hoge pH boven 12 beïnvloedt pasta"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Water pH significantly affects pasta chemistry: Alkaline water (pH 8-9, like in traditional ramen preparation using kansui) strengthens disulfide bonds in gluten proteins, creating firmer, chewier texture. It also intensifies yellow pigments (flavonoids) in flour, producing brighter color. This is why Asian alkaline noodles have distinctive color and springiness. Conversely, acidic water weakens gluten structure, resulting in softer, more fragile pasta. Most tap water is neutral (pH 7), ideal for standard pasta. Some artisanal pasta makers experiment with pH adjustment to achieve specific textural results, demonstrating how water chemistry extends beyond salt concentration.",
                es: "El pH del agua afecta significativamente la química de la pasta: El agua alcalina (pH 8-9, como en la preparación tradicional de ramen usando kansui) fortalece los enlaces disulfuro en las proteínas de gluten, creando textura más firme y masticable. También intensifica los pigmentos amarillos (flavonoides) en la harina, produciendo color más brillante. Por eso los fideos alcalinos asiáticos tienen color y elasticidad distintivos. Por el contrario, el agua ácida debilita la estructura del gluten, resultando en pasta más suave y frágil. La mayoría del agua del grifo es neutra (pH 7), ideal para pasta estándar. Algunos fabricantes artesanales de pasta experimentan con ajuste de pH para lograr resultados texturales específicos, demostrando cómo la química del agua se extiende más allá de la concentración de sal.",
                de: "Der Wasser-pH-Wert beeinflusst die Pastachemie erheblich: Alkalisches Wasser (pH 8-9, wie bei traditioneller Ramen-Zubereitung mit Kansui) stärkt Disulfidbrücken in Glutenproteinen und erzeugt festere, zähere Textur. Es intensiviert auch gelbe Pigmente (Flavonoide) im Mehl und produziert hellere Farbe. Deshalb haben asiatische alkalische Nudeln ihre charakteristische Farbe und Sprungkraft. Umgekehrt schwächt saures Wasser die Glutenstruktur, was zu weicherer, zerbrechlicherer Pasta führt. Die meiste Leitungswasser ist neutral (pH 7), ideal für Standard-Pasta. Einige handwerkliche Pastahersteller experimentieren mit pH-Anpassung, um spezifische texturelle Ergebnisse zu erzielen, was zeigt, wie Wasserchemie über Salzkonzentration hinausgeht.",
                nl: "Water-pH beïnvloedt pastachemie aanzienlijk: Alkalisch water (pH 8-9, zoals bij traditionele ramenbereiding met kansui) versterkt disulfidebindingen in gluteneiwitten, waardoor stevigere, chewerige textuur ontstaat. Het intensifieert ook gele pigmenten (flavonoïden) in meel, wat helderdere kleur produceert. Daarom hebben Aziatische alkalische noedels hun kenmerkende kleur en veerkracht. Omgekeerd verzwakt zuur water de glutenstructuur, resulterend in zachtere, breekbare pasta. De meeste kraanwater is neutraal (pH 7), ideaal voor standaard pasta. Sommige ambachtelijke pastamakers experimenteren met pH-aanpassing om specifieke texturele resultaten te bereiken, wat aantoont hoe waterchemie verder gaat dan zoutconcentratie."
            }
        },
        {
            question: {
                en: "At what temperature range does starch gelatinization occur in different wheat varieties used for pasta?",
                es: "¿En qué rango de temperatura ocurre la gelatinización del almidón en diferentes variedades de trigo usadas para pasta?",
                de: "Bei welchem Temperaturbereich erfolgt Stärkegelatinierung in verschiedenen für Pasta verwendeten Weizensorten?",
                nl: "Bij welk temperatuurbereik vindt zetmeelgelatinisering plaats in verschillende tarwevariëteiten gebruikt voor pasta?"
            },
            options: [
                {
                    en: "65-72°C depending on wheat variety, with durum wheat typically gelatinizing at 68-70°C",
                    es: "65-72°C dependiendo de la variedad de trigo, con trigo duro típicamente gelatinizando a 68-70°C",
                    de: "65-72°C je nach Weizensorte, wobei Hartweizen typischerweise bei 68-70°C gelatiniert",
                    nl: "65-72°C afhankelijk van tarwevariëteit, waarbij durumtarwe typisch gelatiniseert bij 68-70°C"
                },
                {
                    en: "100°C exactly when water boils, same for all wheat types",
                    es: "Exactamente 100°C cuando el agua hierve, igual para todos los tipos de trigo",
                    de: "Genau 100°C wenn Wasser kocht, gleich für alle Weizentypen",
                    nl: "Precies 100°C wanneer water kookt, hetzelfde voor alle tarwesoorten"
                },
                {
                    en: "50-55°C which is why cold water soaking works",
                    es: "50-55°C por lo que funciona el remojo en agua fría",
                    de: "50-55°C weshalb Kaltwassereinweichen funktioniert",
                    nl: "50-55°C daarom werkt koud water weken"
                },
                {
                    en: "Above 85°C for all pasta varieties uniformly",
                    es: "Por encima de 85°C para todas las variedades de pasta uniformemente",
                    de: "Über 85°C für alle Pastasorten einheitlich",
                    nl: "Boven 85°C voor alle pastavariëteiten uniform"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Starch gelatinization—when starch granules absorb water, swell, and release amylose—occurs at specific temperatures varying by wheat type. Durum wheat (used for quality dried pasta) typically gelatinizes at 68-70°C, while common wheat varieties range from 65-72°C. This is why pasta doesn't need vigorously boiling water (100°C); water above 70°C suffices. The gelatinization temperature depends on amylose/amylopectin ratios, granule size, and wheat genetics. Understanding this allows techniques like Harold McGee's method of bringing pasta to a boil, then turning off heat and letting residual temperature complete cooking, saving energy while achieving proper texture.",
                es: "La gelatinización del almidón—cuando los gránulos de almidón absorben agua, se hinchan y liberan amilosa—ocurre a temperaturas específicas que varían según el tipo de trigo. El trigo duro (usado para pasta seca de calidad) típicamente gelatiniza a 68-70°C, mientras que las variedades comunes de trigo varían de 65-72°C. Por eso la pasta no necesita agua hirviendo vigorosamente (100°C); agua por encima de 70°C es suficiente. La temperatura de gelatinización depende de las proporciones de amilosa/amilopectina, tamaño del gránulo y genética del trigo. Entender esto permite técnicas como el método de Harold McGee de llevar la pasta a ebullición, luego apagar el fuego y dejar que la temperatura residual complete la cocción, ahorrando energía mientras se logra textura apropiada.",
                de: "Stärkegelatinierung—wenn Stärkegranula Wasser aufnehmen, anschwellen und Amylose freisetzen—erfolgt bei spezifischen Temperaturen, die je nach Weizenart variieren. Hartweizen (für hochwertige getrocknete Pasta verwendet) gelatiniert typischerweise bei 68-70°C, während gewöhnliche Weizensorten von 65-72°C reichen. Deshalb braucht Pasta kein heftig kochendes Wasser (100°C); Wasser über 70°C reicht aus. Die Gelatinierungstemperatur hängt von Amylose-/Amylopektin-Verhältnissen, Granulagröße und Weizengenetik ab. Das Verständnis hiervon ermöglicht Techniken wie Harold McGees Methode, Pasta zum Kochen zu bringen, dann die Hitze auszuschalten und die Restwärme das Garen vollenden zu lassen, was Energie spart und gleichzeitig richtige Textur erreicht.",
                nl: "Zetmeelgelatinisering—wanneer zetmeelkorrels water absorberen, zwellen en amylose vrijgeven—vindt plaats bij specifieke temperaturen die variëren per tarwesoort. Durumtarwe (gebruikt voor kwaliteitsgedroogde pasta) gelatiniseert typisch bij 68-70°C, terwijl gewone tarwevariëteiten variëren van 65-72°C. Daarom heeft pasta geen heftig kokend water (100°C) nodig; water boven 70°C is voldoende. De gelatiniseringstemperatuur hangt af van amylose/amylopectine-verhoudingen, korrelgrootte en tarwegenetica. Dit begrijpen maakt technieken mogelijk zoals Harold McGee's methode van pasta aan de kook brengen, dan warmte uitzetten en laten restwarmte het koken voltooien, wat energie bespaart terwijl goede textuur wordt bereikt."
            }
        },
        {
            question: {
                en: "What is the ideal amylose to amylopectin ratio in wheat starch for optimal pasta firmness?",
                es: "¿Cuál es la proporción ideal de amilosa a amilopectina en el almidón de trigo para firmeza óptima de pasta?",
                de: "Was ist das ideale Amylose-zu-Amylopektin-Verhältnis in Weizenstärke für optimale Pastafestigkeit?",
                nl: "Wat is de ideale amylose-tot-amylopectine-verhouding in tarwezetmeel voor optimale pastasteviheid?"
            },
            options: [
                {
                    en: "20-30% amylose provides ideal firmness, as it forms strong gel networks while amylopectin provides adhesion",
                    es: "20-30% de amilosa proporciona firmeza ideal, ya que forma redes de gel fuertes mientras que la amilopectina proporciona adhesión",
                    de: "20-30% Amylose bietet ideale Festigkeit, da es starke Gelnetzwerke bildet, während Amylopektin Adhäsion bietet",
                    nl: "20-30% amylose biedt ideale stevigheid, omdat het sterke gelnetwerken vormt terwijl amylopectine adhesie biedt"
                },
                {
                    en: "50% amylose and 50% amylopectin for perfect balance",
                    es: "50% de amilosa y 50% de amilopectina para equilibrio perfecto",
                    de: "50% Amylose und 50% Amylopektin für perfektes Gleichgewicht",
                    nl: "50% amylose en 50% amylopectine voor perfecte balans"
                },
                {
                    en: "Less than 10% amylose for maximum softness",
                    es: "Menos del 10% de amilosa para máxima suavidad",
                    de: "Weniger als 10% Amylose für maximale Weichheit",
                    nl: "Minder dan 10% amylose voor maximale zachtheid"
                },
                {
                    en: "Over 40% amylose for extremely firm texture",
                    es: "Más del 40% de amilosa para textura extremadamente firme",
                    de: "Über 40% Amylose für extrem feste Textur",
                    nl: "Boven 40% amylose voor extreem stevige textuur"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Wheat starch contains two polysaccharides: amylose (straight-chain molecules, 20-30% of starch) and amylopectin (branched molecules, 70-80%). Amylose molecules align and form strong, firm gel structures when cooked and cooled—creating pasta's al dente bite and preventing mushiness. Amylopectin provides sticky, adhesive properties that help sauce cling. Durum wheat naturally has optimal ratios for pasta. High-amylose varieties (above 30%) would be too firm and chalky, while low-amylose (below 15%) would be too soft and sticky. Plant breeders select wheat varieties with ideal amylose content for specific pasta applications, demonstrating how genetics determines final texture.",
                es: "El almidón de trigo contiene dos polisacáridos: amilosa (moléculas de cadena recta, 20-30% del almidón) y amilopectina (moléculas ramificadas, 70-80%). Las moléculas de amilosa se alinean y forman estructuras de gel fuertes y firmes cuando se cocinan y enfrían—creando el mordisco al dente de la pasta y previniendo que se vuelva blanda. La amilopectina proporciona propiedades pegajosas y adhesivas que ayudan a que la salsa se adhiera. El trigo duro naturalmente tiene proporciones óptimas para pasta. Las variedades de alta amilosa (por encima del 30%) serían demasiado firmes y calcáreas, mientras que las de baja amilosa (por debajo del 15%) serían demasiado suaves y pegajosas. Los mejoradores de plantas seleccionan variedades de trigo con contenido ideal de amilosa para aplicaciones específicas de pasta, demostrando cómo la genética determina la textura final.",
                de: "Weizenstärke enthält zwei Polysaccharide: Amylose (geradkettige Moleküle, 20-30% der Stärke) und Amylopektin (verzweigte Moleküle, 70-80%). Amylose-Moleküle ordnen sich an und bilden starke, feste Gelstrukturen beim Kochen und Abkühlen—was den Al-Dente-Biss der Pasta erzeugt und Matschigkeit verhindert. Amylopektin bietet klebrige, adhäsive Eigenschaften, die helfen, Soße haften zu lassen. Hartweizen hat natürlicherweise optimale Verhältnisse für Pasta. Hochamylose-Sorten (über 30%) wären zu fest und kreidig, während niedrigamylose (unter 15%) zu weich und klebrig wäre. Pflanzenzüchter wählen Weizensorten mit idealem Amylosegehalt für spezifische Pasta-Anwendungen aus, was zeigt, wie Genetik die endgültige Textur bestimmt.",
                nl: "Tarwezetmeel bevat twee polysachariden: amylose (rechte kettingmoleculen, 20-30% van zetmeel) en amylopectine (vertakte moleculen, 70-80%). Amylose-moleculen ordenen zich en vormen sterke, stevige gelstructuren bij koken en afkoelen—wat pasta's al dente beet creëert en papperigheid voorkomt. Amylopectine biedt plakkerige, adhesieve eigenschappen die helpen saus te laten hechten. Durumtarwe heeft van nature optimale verhoudingen voor pasta. Hoge-amylosevariëteiten (boven 30%) zouden te stevig en krijtig zijn, terwijl lage-amylose (onder 15%) te zacht en plakkerig zou zijn. Plantenkwekers selecteren tarwevariëteiten met ideaal amylosegehalte voor specifieke pastatoepassingen, wat aantoont hoe genetica de uiteindelijke textuur bepaalt."
            }
        },
        {
            question: {
                en: "Which country has the second-highest per capita pasta consumption after Italy?",
                es: "¿Qué país tiene el segundo consumo de pasta per cápita más alto después de Italia?",
                de: "Welches Land hat den zweithöchsten Pro-Kopf-Pasta-Konsum nach Italien?",
                nl: "Welk land heeft het op een na hoogste pasta-consumptie per hoofd na Italië?"
            },
            options: [
                {
                    en: "Tunisia at approximately 16-17 kg per person per year, reflecting cultural culinary fusion",
                    es: "Túnez con aproximadamente 16-17 kg por persona por año, reflejando fusión culinaria cultural",
                    de: "Tunesien mit etwa 16-17 kg pro Person pro Jahr, was kulturelle kulinarische Fusion widerspiegelt",
                    nl: "Tunesië met ongeveer 16-17 kg per persoon per jaar, wat culturele culinaire fusie weerspiegelt"
                },
                {
                    en: "United States with high fast food pasta consumption",
                    es: "Estados Unidos con alto consumo de pasta de comida rápida",
                    de: "Vereinigte Staaten mit hohem Fast-Food-Pasta-Konsum",
                    nl: "Verenigde Staten met hoge fastfood pasta-consumptie"
                },
                {
                    en: "Japan due to ramen noodle popularity",
                    es: "Japón debido a la popularidad de los fideos ramen",
                    de: "Japan wegen der Popularität von Ramen-Nudeln",
                    nl: "Japan vanwege ramen noedel-populariteit"
                },
                {
                    en: "France with traditional French-Italian cuisine influence",
                    es: "Francia con influencia tradicional de cocina franco-italiana",
                    de: "Frankreich mit traditionellem französisch-italienischem Kücheneinfluss",
                    nl: "Frankrijk met traditionele Frans-Italiaanse keukeninvloed"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Tunisia surprisingly ranks second globally in pasta consumption (16-17 kg per capita annually), after Italy's dominant 23 kg. This reflects Tunisia's historical connection to Italy through Mediterranean proximity, French colonial influence that introduced European foods, and local adaptation of pasta into North African cuisine. Tunisian dishes incorporate pasta with harissa, preserved lemons, and lamb, creating unique fusion. Venezuela, Switzerland, and Greece also rank highly. The USA consumes about 9 kg per capita. Global pasta consumption exceeds 17 million tons annually, with consumption growing in Asia and Africa as pasta becomes a truly international staple transcending its Italian origins.",
                es: "Túnez sorprendentemente ocupa el segundo lugar a nivel mundial en consumo de pasta (16-17 kg per cápita anualmente), después de los dominantes 23 kg de Italia. Esto refleja la conexión histórica de Túnez con Italia a través de la proximidad mediterránea, la influencia colonial francesa que introdujo alimentos europeos y la adaptación local de pasta a la cocina norteafricana. Los platos tunecinos incorporan pasta con harissa, limones en conserva y cordero, creando fusión única. Venezuela, Suiza y Grecia también ocupan lugares altos. EE.UU. consume alrededor de 9 kg per cápita. El consumo global de pasta supera los 17 millones de toneladas anualmente, con consumo creciente en Asia y África mientras la pasta se convierte en un alimento básico verdaderamente internacional trascendiendo sus orígenes italianos.",
                de: "Tunesien rangiert überraschenderweise weltweit an zweiter Stelle beim Pasta-Konsum (16-17 kg pro Kopf jährlich), nach Italiens dominierenden 23 kg. Dies spiegelt Tunesiens historische Verbindung zu Italien durch mediterrane Nähe, französischen Kolonialeinfluss, der europäische Lebensmittel einführte, und lokale Anpassung von Pasta in die nordafrikanische Küche wider. Tunesische Gerichte integrieren Pasta mit Harissa, eingelegten Zitronen und Lamm und schaffen einzigartige Fusion. Venezuela, Schweiz und Griechenland rangieren ebenfalls hoch. Die USA konsumieren etwa 9 kg pro Kopf. Der weltweite Pasta-Konsum übersteigt 17 Millionen Tonnen jährlich, mit wachsendem Konsum in Asien und Afrika, während Pasta zu einem wahrhaft internationalen Grundnahrungsmittel wird, das seine italienischen Ursprünge transzendiert.",
                nl: "Tunesië staat verrassend op de tweede plaats wereldwijd in pasta-consumptie (16-17 kg per capita jaarlijks), na Italië's dominante 23 kg. Dit weerspiegelt Tunesië's historische verbinding met Italië door Middellandse Zee nabijheid, Franse koloniale invloed die Europese voedingsmiddelen introduceerde, en lokale aanpassing van pasta in Noord-Afrikaanse keuken. Tunesische gerechten incorporeren pasta met harissa, ingelegde citroenen en lam, wat unieke fusie creëert. Venezuela, Zwitserland en Griekenland staan ook hoog. De VS consumeert ongeveer 9 kg per capita. Wereldwijde pasta-consumptie overschrijdt 17 miljoen ton jaarlijks, met groeiende consumptie in Azië en Afrika terwijl pasta een werkelijk internationaal basisvoedsel wordt dat zijn Italiaanse oorsprong overstijgt."
            }
        },
        {
            question: {
                en: "Who invented instant noodles and what was the key innovation that made them possible?",
                es: "¿Quién inventó los fideos instantáneos y cuál fue la innovación clave que los hizo posibles?",
                de: "Wer erfand Instantnudeln und was war die Schlüsselinnovation, die sie möglich machte?",
                nl: "Wie vond instantnoedels uit en wat was de belangrijkste innovatie die ze mogelijk maakte?"
            },
            options: [
                {
                    en: "Momofuku Ando in 1958 using flash-frying technique to remove moisture while creating rehydration channels",
                    es: "Momofuku Ando en 1958 usando técnica de fritura rápida para eliminar humedad mientras crea canales de rehidratación",
                    de: "Momofuku Ando 1958 mit Blitzfrittiertechnik zur Feuchtigkeitsentfernung bei gleichzeitiger Schaffung von Rehydrierungskanälen",
                    nl: "Momofuku Ando in 1958 met snelfrituurtechniek om vocht te verwijderen terwijl rehydratiekanalen worden gecreëerd"
                },
                {
                    en: "Italian scientists in 1920s through freeze-drying technology",
                    es: "Científicos italianos en la década de 1920 mediante tecnología de liofilización",
                    de: "Italienische Wissenschaftler in den 1920er Jahren durch Gefriertrocknung",
                    nl: "Italiaanse wetenschappers in de jaren 1920 door vriesdroging"
                },
                {
                    en: "American military researchers in 1940s for ration packs",
                    es: "Investigadores militares estadounidenses en la década de 1940 para paquetes de raciones",
                    de: "Amerikanische Militärforscher in den 1940er Jahren für Rationspakete",
                    nl: "Amerikaanse militaire onderzoekers in de jaren 1940 voor rantsoenpakketten"
                },
                {
                    en: "Chinese inventors in ancient times through sun-drying methods",
                    es: "Inventores chinos en tiempos antiguos mediante métodos de secado al sol",
                    de: "Chinesische Erfinder in der Antike durch Sonnentrocknung",
                    nl: "Chinese uitvinders in oude tijden door zonnedroogmethoden"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Momofuku Ando invented instant ramen in 1958 in Osaka, Japan, revolutionizing global food. His innovation was flash-frying pre-cooked noodles in palm oil at high temperature, which rapidly dehydrated them while creating microscopic pores that allow quick rehydration with hot water. The oil coating also prevented oxidation and extended shelf life. Ando founded Nissin Foods, launching 'Chikin Ramen,' followed by Cup Noodles in 1971. Instant noodles now constitute a $44+ billion global industry with over 100 billion servings consumed annually, providing affordable nutrition worldwide and representing one of the 20th century's most impactful food innovations.",
                es: "Momofuku Ando inventó el ramen instantáneo en 1958 en Osaka, Japón, revolucionando la alimentación mundial. Su innovación fue freír rápidamente fideos precocidos en aceite de palma a alta temperatura, que los deshidrató rápidamente mientras creaba poros microscópicos que permiten rehidratación rápida con agua caliente. El recubrimiento de aceite también previno la oxidación y extendió la vida útil. Ando fundó Nissin Foods, lanzando 'Chikin Ramen', seguido de Cup Noodles en 1971. Los fideos instantáneos ahora constituyen una industria global de más de $44 mil millones con más de 100 mil millones de porciones consumidas anualmente, proporcionando nutrición asequible en todo el mundo y representando una de las innovaciones alimentarias más impactantes del siglo XX.",
                de: "Momofuku Ando erfand 1958 in Osaka, Japan, Instantramen und revolutionierte die globale Ernährung. Seine Innovation war das Blitzfrittieren vorgekochter Nudeln in Palmöl bei hoher Temperatur, was sie schnell dehydrierte und gleichzeitig mikroskopische Poren schuf, die schnelle Rehydrierung mit heißem Wasser ermöglichen. Die Ölbeschichtung verhinderte auch Oxidation und verlängerte die Haltbarkeit. Ando gründete Nissin Foods und brachte 'Chikin Ramen' auf den Markt, gefolgt von Cup Noodles 1971. Instantnudeln bilden heute eine globale Industrie von über 44 Milliarden US-Dollar mit über 100 Milliarden jährlich konsumierten Portionen, bieten weltweit erschwingliche Ernährung und repräsentieren eine der folgenreichsten Lebensmittelinnovationen des 20. Jahrhunderts.",
                nl: "Momofuku Ando vond instant ramen uit in 1958 in Osaka, Japan, wat wereldwijde voedselvoorziening revolutioneerde. Zijn innovatie was snel frituren van voorgekookte noedels in palmolie bij hoge temperatuur, wat ze snel uitdroogde terwijl microscopische poriën werden gecreëerd die snelle rehydratie met heet water mogelijk maken. De oliecoating voorkwam ook oxidatie en verlengde de houdbaarheid. Ando richtte Nissin Foods op en lanceerde 'Chikin Ramen', gevolgd door Cup Noodles in 1971. Instantnoedels vormen nu een wereldwijde industrie van $44+ miljard met meer dan 100 miljard porties jaarlijks geconsumeerd, wat betaalbare voeding wereldwijd biedt en een van de meest impactvolle voedselinnovaties van de 20e eeuw vertegenwoordigt."
            }
        },
        {
            question: {
                en: "How do traditional Italian pasta-making techniques compare to Asian noodle traditions like ramen, spätzle, and udon?",
                es: "¿Cómo se comparan las técnicas tradicionales de elaboración de pasta italiana con las tradiciones de fideos asiáticos como ramen, spätzle y udon?",
                de: "Wie vergleichen sich traditionelle italienische Pasta-Herstellungstechniken mit asiatischen Nudel-Traditionen wie Ramen, Spätzle und Udon?",
                nl: "Hoe vergelijken traditionele Italiaanse pasta-maaktechnieken met Aziatische noedeltradities zoals ramen, spätzle en udon?"
            },
            options: [
                {
                    en: "Different flours, hydration levels, kneading methods, and alkalinity create distinct textures serving specific culinary roles",
                    es: "Diferentes harinas, niveles de hidratación, métodos de amasado y alcalinidad crean texturas distintas que sirven roles culinarios específicos",
                    de: "Verschiedene Mehle, Hydratationsniveaus, Knetmethoden und Alkalinität erzeugen unterschiedliche Texturen für spezifische kulinarische Rollen",
                    nl: "Verschillende melen, hydratieniveaus, kneedmethoden en alkaliniteit creëren onderscheidende texturen die specifieke culinaire rollen dienen"
                },
                {
                    en: "All noodles worldwide use identical preparation methods",
                    es: "Todos los fideos en el mundo usan métodos de preparación idénticos",
                    de: "Alle Nudeln weltweit verwenden identische Zubereitungsmethoden",
                    nl: "Alle noedels wereldwijd gebruiken identieke bereidingsmethoden"
                },
                {
                    en: "Only Italian pasta uses wheat; all others use rice exclusively",
                    es: "Solo la pasta italiana usa trigo; todos los demás usan arroz exclusivamente",
                    de: "Nur italienische Pasta verwendet Weizen; alle anderen verwenden ausschließlich Reis",
                    nl: "Alleen Italiaanse pasta gebruikt tarwe; alle anderen gebruiken uitsluitend rijst"
                },
                {
                    en: "Asian noodles are always thinner than Italian pasta",
                    es: "Los fideos asiáticos son siempre más delgados que la pasta italiana",
                    de: "Asiatische Nudeln sind immer dünner als italienische Pasta",
                    nl: "Aziatische noedels zijn altijd dunner dan Italiaanse pasta"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Global noodle traditions reveal fascinating variations: Italian pasta uses durum wheat with water (sometimes eggs), low hydration, and extended kneading for firm texture. Japanese ramen employs alkaline water (kansui) creating springy, yellow noodles. Chinese hand-pulled noodles (la mian) use high-gluten flour with intensive stretching and folding. Udon uses soft wheat with high water content for thick, chewy texture. German spätzle uses soft wheat with eggs and high hydration, pressed through perforations. Vietnamese rice noodles (pho) use rice flour with different texture entirely. Each tradition evolved to complement specific broths, sauces, and culinary contexts, demonstrating how fundamental ingredients and techniques create distinct regional identities.",
                es: "Las tradiciones globales de fideos revelan variaciones fascinantes: La pasta italiana usa trigo duro con agua (a veces huevos), baja hidratación y amasado extendido para textura firme. El ramen japonés emplea agua alcalina (kansui) creando fideos amarillos y elásticos. Los fideos chinos estirados a mano (la mian) usan harina de alto gluten con estiramiento y plegado intensivo. El udon usa trigo blando con alto contenido de agua para textura gruesa y masticable. El spätzle alemán usa trigo blando con huevos y alta hidratación, prensado a través de perforaciones. Los fideos de arroz vietnamitas (pho) usan harina de arroz con textura completamente diferente. Cada tradición evolucionó para complementar caldos, salsas y contextos culinarios específicos, demostrando cómo ingredientes fundamentales y técnicas crean identidades regionales distintas.",
                de: "Globale Nudel-Traditionen offenbaren faszinierende Variationen: Italienische Pasta verwendet Hartweizen mit Wasser (manchmal Eier), niedrige Hydratation und ausgedehntes Kneten für feste Textur. Japanisches Ramen verwendet alkalisches Wasser (Kansui) zur Erzeugung federnder, gelber Nudeln. Chinesische handgezogene Nudeln (La Mian) verwenden Mehl mit hohem Glutengehalt mit intensivem Dehnen und Falten. Udon verwendet Weichweizen mit hohem Wassergehalt für dicke, zähe Textur. Deutsche Spätzle verwenden Weichweizen mit Eiern und hoher Hydratation, durch Perforationen gepresst. Vietnamesische Reisnudeln (Pho) verwenden Reismehl mit völlig unterschiedlicher Textur. Jede Tradition entwickelte sich, um spezifische Brühen, Soßen und kulinarische Kontexte zu ergänzen, was zeigt, wie grundlegende Zutaten und Techniken unterschiedliche regionale Identitäten schaffen.",
                nl: "Wereldwijde noedeltradities onthullen fascinerende variaties: Italiaanse pasta gebruikt durumtarwe met water (soms eieren), lage hydratie en langdurig kneden voor stevige textuur. Japanse ramen gebruikt alkalisch water (kansui) dat veerkrachtige, gele noedels creëert. Chinese handgetrokken noedels (la mian) gebruiken meel met hoog glutengehalte met intensief strekken en vouwen. Udon gebruikt zachte tarwe met hoog watergehalte voor dikke, chewy textuur. Duitse spätzle gebruikt zachte tarwe met eieren en hoge hydratie, geperst door perforaties. Vietnamese rijstnoedels (pho) gebruiken rijstmeel met volledig verschillende textuur. Elke traditie evolueerde om specifieke bouillons, sauzen en culinaire contexten aan te vullen, wat aantoont hoe fundamentele ingrediënten en technieken onderscheidende regionale identiteiten creëren."
            }
        },
        {
            question: {
                en: "How is nanotechnology being applied to pasta production for health benefits?",
                es: "¿Cómo se está aplicando la nanotecnología a la producción de pasta para beneficios de salud?",
                de: "Wie wird Nanotechnologie auf die Pasta-Produktion für gesundheitliche Vorteile angewandt?",
                nl: "Hoe wordt nanotechnologie toegepast op pasta-productie voor gezondheidsvoordelen?"
            },
            options: [
                {
                    en: "Surface modification with nano-encapsulated nutrients and bioactive compounds for enhanced absorption and controlled release",
                    es: "Modificación de superficie con nutrientes nano-encapsulados y compuestos bioactivos para absorción mejorada y liberación controlada",
                    de: "Oberflächenmodifikation mit nanogekapselten Nährstoffen und bioaktiven Verbindungen für verbesserte Absorption und kontrollierte Freisetzung",
                    nl: "Oppervlaktemodificatie met nano-ingekapselde voedingsstoffen en bioactieve verbindingen voor verbeterde absorptie en gecontroleerde afgifte"
            },
                {
                    en: "Making pasta smaller using miniaturization technology",
                    es: "Hacer la pasta más pequeña usando tecnología de miniaturización",
                    de: "Pasta kleiner machen durch Miniaturisierungstechnologie",
                    nl: "Pasta kleiner maken met miniaturisatietechnologie"
                },
                {
                    en: "Creating invisible pasta that cannot be seen",
                    es: "Crear pasta invisible que no se puede ver",
                    de: "Unsichtbare Pasta erstellen, die nicht gesehen werden kann",
                    nl: "Onzichtbare pasta creëren die niet kan worden gezien"
                },
                {
                    en: "Using nano-robots to cook pasta automatically",
                    es: "Usar nano-robots para cocinar pasta automáticamente",
                    de: "Nano-Roboter verwenden, um Pasta automatisch zu kochen",
                    nl: "Nano-robots gebruiken om pasta automatisch te koken"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Researchers are exploring nano-encapsulation to incorporate vitamins, minerals, omega-3 fatty acids, probiotics, and antioxidants into pasta matrices. Nanoparticles (typically 1-100 nanometers) protect sensitive nutrients from degradation during processing and cooking, then release them gradually during digestion for better bioavailability. Applications include iron nanoparticles to combat anemia, calcium for bone health, and plant sterol nanoparticles for cholesterol reduction. Surface nano-coatings can also reduce glycemic index by slowing starch digestion. While still largely experimental, this technology could transform pasta into a functional food delivering targeted nutrition, though regulatory approval and consumer acceptance remain challenges.",
                es: "Los investigadores están explorando la nano-encapsulación para incorporar vitaminas, minerales, ácidos grasos omega-3, probióticos y antioxidantes en matrices de pasta. Las nanopartículas (típicamente 1-100 nanómetros) protegen nutrientes sensibles de la degradación durante el procesamiento y cocción, luego los liberan gradualmente durante la digestión para mejor biodisponibilidad. Las aplicaciones incluyen nanopartículas de hierro para combatir la anemia, calcio para la salud ósea y nanopartículas de esterol vegetal para reducción del colesterol. Los nano-recubrimientos superficiales también pueden reducir el índice glucémico al ralentizar la digestión del almidón. Aunque todavía es en gran medida experimental, esta tecnología podría transformar la pasta en un alimento funcional que entrega nutrición dirigida, aunque la aprobación regulatoria y la aceptación del consumidor siguen siendo desafíos.",
                de: "Forscher erforschen Nano-Verkapselung zur Einarbeitung von Vitaminen, Mineralien, Omega-3-Fettsäuren, Probiotika und Antioxidantien in Pastamatrizen. Nanopartikel (typischerweise 1-100 Nanometer) schützen empfindliche Nährstoffe vor Abbau während Verarbeitung und Kochen und setzen sie dann allmählich während der Verdauung für bessere Bioverfügbarkeit frei. Anwendungen umfassen Eisen-Nanopartikel zur Bekämpfung von Anämie, Kalzium für Knochengesundheit und Pflanzensterol-Nanopartikel zur Cholesterinsenkung. Oberflächen-Nano-Beschichtungen können auch den glykämischen Index reduzieren, indem sie die Stärkeverdauung verlangsamen. Obwohl noch weitgehend experimentell, könnte diese Technologie Pasta in ein funktionelles Lebensmittel verwandeln, das gezielte Ernährung liefert, obwohl behördliche Genehmigung und Verbraucherakzeptanz Herausforderungen bleiben.",
                nl: "Onderzoekers onderzoeken nano-inkapseling om vitamines, mineralen, omega-3-vetzuren, probiotica en antioxidanten in pastamatrices op te nemen. Nanodeeltjes (meestal 1-100 nanometer) beschermen gevoelige voedingsstoffen tegen afbraak tijdens verwerking en koken, en geven ze dan geleidelijk vrij tijdens de spijsvertering voor betere biologische beschikbaarheid. Toepassingen omvatten ijzer-nanodeeltjes om bloedarmoede te bestrijden, calcium voor botgezondheid en plantsterol-nanodeeltjes voor cholesterolverlaging. Oppervlakte nano-coatings kunnen ook de glycemische index verlagen door zetmeelvertering te vertragen. Hoewel nog grotendeels experimenteel, zou deze technologie pasta kunnen transformeren in een functioneel voedsel dat gerichte voeding levert, hoewel regelgevende goedkeuring en acceptatie door consumenten uitdagingen blijven."
            }
        },
        {
            question: {
                en: "How is climate change impacting durum wheat cultivation for pasta production?",
                es: "¿Cómo está impactando el cambio climático el cultivo de trigo duro para la producción de pasta?",
                de: "Wie beeinflusst der Klimawandel den Hartweizenanbau für die Pasta-Produktion?",
                nl: "Hoe beïnvloedt klimaatverandering durumtarweteelt voor pastaproductie?"
            },
            options: [
                {
                    en: "Rising temperatures and water stress reduce yields and protein content, threatening traditional growing regions",
                    es: "El aumento de temperaturas y el estrés hídrico reducen los rendimientos y el contenido de proteínas, amenazando las regiones de cultivo tradicionales",
                    de: "Steigende Temperaturen und Wasserstress reduzieren Erträge und Proteingehalt und bedrohen traditionelle Anbaugebiete",
                    nl: "Stijgende temperaturen en waterstress verminderen opbrengsten en eiwitgehalte, wat traditionele teeltgebieden bedreigt"
                },
                {
                    en: "Climate change has no effect on wheat production",
                    es: "El cambio climático no tiene efecto en la producción de trigo",
                    de: "Klimawandel hat keinen Einfluss auf die Weizenproduktion",
                    nl: "Klimaatverandering heeft geen effect op tarweproductie"
                },
                {
                    en: "Warmer weather always improves wheat yields everywhere",
                    es: "El clima más cálido siempre mejora los rendimientos de trigo en todas partes",
                    de: "Wärmeres Wetter verbessert immer die Weizenerträge überall",
                    nl: "Warmer weer verbetert altijd tarweopbrengsten overal"
                },
                {
                    en: "Only pests are affected, not the wheat plants themselves",
                    es: "Solo las plagas se ven afectadas, no las propias plantas de trigo",
                    de: "Nur Schädlinge sind betroffen, nicht die Weizenpflanzen selbst",
                    nl: "Alleen plagen worden beïnvloed, niet de tarweplanten zelf"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Climate change poses serious threats to durum wheat cultivation: Rising temperatures during grain-filling reduce kernel weight and protein content (crucial for pasta quality). Drought stress in Mediterranean regions (Italy, Spain, North Africa)—traditional durum growing areas—decreases yields. Extreme weather events damage crops. Heat above 30°C during flowering reduces pollination. These factors threaten global pasta supply and quality. Responses include developing heat-tolerant and drought-resistant cultivars through breeding and genetic modification, shifting cultivation to cooler northern regions (Canada, northern Europe), and implementing precision agriculture with optimized irrigation. The pasta industry faces significant adaptation challenges to maintain quality and affordability.",
                es: "El cambio climático plantea serias amenazas al cultivo de trigo duro: El aumento de temperaturas durante el llenado del grano reduce el peso del grano y el contenido de proteínas (crucial para la calidad de la pasta). El estrés por sequía en las regiones mediterráneas (Italia, España, Norte de África)—áreas tradicionales de cultivo de trigo duro—disminuye los rendimientos. Los eventos climáticos extremos dañan los cultivos. El calor por encima de 30°C durante la floración reduce la polinización. Estos factores amenazan el suministro y la calidad globales de pasta. Las respuestas incluyen desarrollar cultivares tolerantes al calor y resistentes a la sequía mediante mejoramiento y modificación genética, cambiar el cultivo a regiones más frías del norte (Canadá, Europa del norte) e implementar agricultura de precisión con riego optimizado. La industria de la pasta enfrenta desafíos significativos de adaptación para mantener calidad y accesibilidad.",
                de: "Der Klimawandel stellt ernste Bedrohungen für den Hartweizenanbau dar: Steigende Temperaturen während der Kornfüllung reduzieren Korngewicht und Proteingehalt (entscheidend für Pastaqualität). Dürrestress in mediterranen Regionen (Italien, Spanien, Nordafrika)—traditionelle Hartweizen-Anbaugebiete—verringert Erträge. Extreme Wetterereignisse schädigen Ernten. Hitze über 30°C während der Blüte reduziert Bestäubung. Diese Faktoren bedrohen globale Pasta-Versorgung und -Qualität. Reaktionen umfassen Entwicklung hitzetoleranter und dürreresistenter Sorten durch Züchtung und genetische Veränderung, Verschiebung des Anbaus in kühlere nördliche Regionen (Kanada, Nordeuropa) und Implementierung von Präzisionslandwirtschaft mit optimierter Bewässerung. Die Pastaindustrie steht vor erheblichen Anpassungsherausforderungen zur Aufrechterhaltung von Qualität und Erschwinglichkeit.",
                nl: "Klimaatverandering vormt ernstige bedreigingen voor durumtarweteelt: Stijgende temperaturen tijdens graanvulling verminderen kernelgewicht en eiwitgehalte (cruciaal voor pastakwaliteit). Droogtestress in mediterrane regio's (Italië, Spanje, Noord-Afrika)—traditionele durumteeltgebieden—vermindert opbrengsten. Extreme weersomstandigheden beschadigen gewassen. Hitte boven 30°C tijdens bloei vermindert bestuiving. Deze factoren bedreigen wereldwijde pasta-aanvoer en -kwaliteit. Reacties omvatten het ontwikkelen van hittetolerante en droogteresistente cultivars door veredeling en genetische modificatie, het verschuiven van teelt naar koelere noordelijke regio's (Canada, Noord-Europa), en het implementeren van precisielandbouw met geoptimaliseerde irrigatie. De pasta-industrie staat voor aanzienlijke aanpassingsuitdagingen om kwaliteit en betaalbaarheid te behouden."
            }
        },
        {
            question: {
                en: "What sustainable packaging innovations are being developed for pasta products?",
                es: "¿Qué innovaciones de empaque sostenible se están desarrollando para productos de pasta?",
                de: "Welche nachhaltigen Verpackungsinnovationen werden für Pastaprodukte entwickelt?",
                nl: "Welke duurzame verpakkingsinnovaties worden ontwikkeld voor pastaproducten?"
            },
            options: [
                {
                    en: "Compostable bioplastics from corn starch, mushroom packaging, and edible films reducing plastic waste",
                    es: "Bioplásticos compostables de almidón de maíz, empaque de hongos y películas comestibles que reducen residuos plásticos",
                    de: "Kompostierbare Biokunststoffe aus Maisstärke, Pilzverpackung und essbare Filme zur Reduzierung von Plastikmüll",
                    nl: "Composteerbare bioplastics van maïszetmeel, paddenstoelverpakking en eetbare films die plasticafval verminderen"
                },
                {
                    en: "Heavier plastic packaging for better protection",
                    es: "Empaque plástico más pesado para mejor protección",
                    de: "Schwerere Plastikverpackung für besseren Schutz",
                    nl: "Zwaardere plastic verpakking voor betere bescherming"
                },
                {
                    en: "No packaging innovations are needed",
                    es: "No se necesitan innovaciones de empaque",
                    de: "Keine Verpackungsinnovationen sind erforderlich",
                    nl: "Geen verpakkingsinnovaties zijn nodig"
                },
                {
                    en: "Metal cans exclusively for all pasta types",
                    es: "Latas de metal exclusivamente para todos los tipos de pasta",
                    de: "Metalldosen ausschließlich für alle Pastatypen",
                    nl: "Metalen blikken uitsluitend voor alle pastasoorten"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "The pasta industry is innovating sustainable packaging to reduce environmental impact: PLA (polylactic acid) bioplastics derived from corn starch or sugarcane are compostable alternatives to petroleum-based plastics. Mushroom mycelium packaging grows into desired shapes and fully biodegrades. Paper-based packaging with moisture barriers protects pasta while being recyclable. Some companies experiment with edible packaging films made from seaweed or rice paper. Bulk dispensers reduce single-use packaging. Barilla and others have reduced packaging weight and increased recycled content. Challenges include maintaining moisture protection, preventing breakage, and cost. These innovations address the approximately 140 million tons of plastic packaging waste generated by the food industry annually.",
                es: "La industria de la pasta está innovando en empaque sostenible para reducir el impacto ambiental: Los bioplásticos PLA (ácido poliláctico) derivados del almidón de maíz o caña de azúcar son alternativas compostables a los plásticos basados en petróleo. El empaque de micelio de hongos crece en formas deseadas y se biodegrada completamente. El empaque a base de papel con barreras de humedad protege la pasta mientras es reciclable. Algunas compañías experimentan con películas de empaque comestibles hechas de algas marinas o papel de arroz. Los dispensadores a granel reducen el empaque de un solo uso. Barilla y otros han reducido el peso del empaque y aumentado el contenido reciclado. Los desafíos incluyen mantener protección contra humedad, prevenir roturas y costo. Estas innovaciones abordan los aproximadamente 140 millones de toneladas de residuos de empaque plástico generados por la industria alimentaria anualmente.",
                de: "Die Pastaindustrie innoviert nachhaltige Verpackungen zur Reduzierung der Umweltbelastung: PLA (Polymilchsäure)-Biokunststoffe aus Maisstärke oder Zuckerrohr sind kompostierbare Alternativen zu erdölbasierten Kunststoffen. Pilzmyzel-Verpackungen wachsen in gewünschte Formen und bauen sich vollständig biologisch ab. Papierbasierte Verpackungen mit Feuchtigkeitsbarrieren schützen Pasta und sind recycelbar. Einige Unternehmen experimentieren mit essbaren Verpackungsfilmen aus Seetang oder Reispapier. Bulk-Spender reduzieren Einwegverpackungen. Barilla und andere haben Verpackungsgewicht reduziert und Recyclinganteil erhöht. Herausforderungen umfassen Feuchtigkeitsschutz, Bruchvermeidung und Kosten. Diese Innovationen adressieren die etwa 140 Millionen Tonnen Plastikverpackungsmüll, die jährlich von der Lebensmittelindustrie erzeugt werden.",
                nl: "De pasta-industrie innoveert duurzame verpakkingen om milieueffecten te verminderen: PLA (polymelkzuur) bioplastics afgeleid van maïszetmeel of suikerriet zijn composteerbare alternatieven voor op aardolie gebaseerde plastics. Paddenstoel mycelium-verpakking groeit in gewenste vormen en is volledig biologisch afbreekbaar. Op papier gebaseerde verpakking met vochtbarrières beschermt pasta terwijl het recyclebaar is. Sommige bedrijven experimenteren met eetbare verpakkingsfilms gemaakt van zeewier of rijstpapier. Bulkdispensers verminderen eenmalige verpakking. Barilla en anderen hebben verpakkingsgewicht verminderd en gerecycled gehalte verhoogd. Uitdagingen omvatten vochtbescherming behouden, breken voorkomen en kosten. Deze innovaties pakken de ongeveer 140 miljoen ton plastic verpakkingsafval aan dat jaarlijks door de voedselindustrie wordt gegenereerd."
            }
        },
        {
            question: {
                en: "How can blockchain technology be applied to pasta supply chain transparency and authenticity verification?",
                es: "¿Cómo se puede aplicar la tecnología blockchain a la transparencia de la cadena de suministro de pasta y la verificación de autenticidad?",
                de: "Wie kann Blockchain-Technologie auf Transparenz der Pasta-Lieferkette und Authentizitätsüberprüfung angewandt werden?",
                nl: "Hoe kan blockchaintechnologie worden toegepast op transparantie van de pasta-toeleveringsketen en authenticiteitsverificatie?"
            },
            options: [
                {
                    en: "Immutable tracking from wheat field to consumer verifying DOP/IGP origins and preventing counterfeiting",
                    es: "Rastreo inmutable desde el campo de trigo hasta el consumidor verificando orígenes DOP/IGP y previniendo falsificaciones",
                    de: "Unveränderliche Verfolgung vom Weizenfeld zum Verbraucher zur Überprüfung von DOP/IGP-Ursprüngen und Verhinderung von Fälschungen",
                    nl: "Onveranderlijke tracking van tarweveld tot consument die DOP/IGP-oorsprong verifieert en vervalsing voorkomt"
                },
                {
                    en: "Blockchain only applies to cryptocurrency, not food products",
                    es: "Blockchain solo se aplica a criptomonedas, no a productos alimenticios",
                    de: "Blockchain gilt nur für Kryptowährung, nicht für Lebensmittelprodukte",
                    nl: "Blockchain is alleen van toepassing op cryptocurrency, niet op voedselproducten"
                },
                {
                    en: "Using blockchain to cook pasta automatically",
                    es: "Usar blockchain para cocinar pasta automáticamente",
                    de: "Blockchain verwenden, um Pasta automatisch zu kochen",
                    nl: "Blockchain gebruiken om pasta automatisch te koken"
                },
                {
                    en: "Blockchain replaces traditional pasta recipes with digital versions",
                    es: "Blockchain reemplaza las recetas tradicionales de pasta con versiones digitales",
                    de: "Blockchain ersetzt traditionelle Pasta-Rezepte durch digitale Versionen",
                    nl: "Blockchain vervangt traditionele pastacepten door digitale versies"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Blockchain creates tamper-proof digital ledgers tracking every step in pasta production: recording wheat cultivation location and practices, milling process, production date, transportation conditions, and retail sale. Each transaction is cryptographically secured and permanently recorded. For DOP/IGP protected pastas (like Pasta di Gragnano IGP), blockchain can verify authentic geographic origin and traditional methods, combating the estimated €60 billion annual Italian food fraud problem. Consumers scanning QR codes can access complete product histories. Companies like IBM Food Trust are implementing blockchain for food transparency. Challenges include implementation costs, technology adoption by small producers, and ensuring data accuracy at entry points.",
                es: "Blockchain crea libros contables digitales a prueba de manipulación que rastrean cada paso en la producción de pasta: registrando ubicación y prácticas de cultivo de trigo, proceso de molienda, fecha de producción, condiciones de transporte y venta minorista. Cada transacción está asegurada criptográficamente y registrada permanentemente. Para pastas protegidas DOP/IGP (como Pasta di Gragnano IGP), blockchain puede verificar origen geográfico auténtico y métodos tradicionales, combatiendo el problema estimado de €60 mil millones anuales de fraude alimentario italiano. Los consumidores que escanean códigos QR pueden acceder a historiales completos de productos. Compañías como IBM Food Trust están implementando blockchain para transparencia alimentaria. Los desafíos incluyen costos de implementación, adopción de tecnología por pequeños productores y asegurar precisión de datos en puntos de entrada.",
                de: "Blockchain erstellt manipulationssichere digitale Hauptbücher, die jeden Schritt der Pasta-Produktion verfolgen: Aufzeichnung von Weizenanbauort und -praktiken, Mahlprozess, Produktionsdatum, Transportbedingungen und Einzelhandelsverkauf. Jede Transaktion ist kryptografisch gesichert und dauerhaft aufgezeichnet. Für DOP/IGP-geschützte Pasta (wie Pasta di Gragnano IGP) kann Blockchain authentische geografische Herkunft und traditionelle Methoden überprüfen und das geschätzte €60-Milliarden-jährliche italienische Lebensmittelbetugsproblem bekämpfen. Verbraucher, die QR-Codes scannen, können auf vollständige Produktgeschichten zugreifen. Unternehmen wie IBM Food Trust implementieren Blockchain für Lebensmitteltransparenz. Herausforderungen umfassen Implementierungskosten, Technologieadoption durch kleine Produzenten und Sicherstellung der Datengenauigkeit an Eingabepunkten.",
                nl: "Blockchain creëert fraudebestendige digitale grootboeken die elke stap in pastaproductie volgen: registratie van tarweteeltlocatie en -praktijken, maalproces, productiedatum, transportcondities en detailhandel. Elke transactie is cryptografisch beveiligd en permanent geregistreerd. Voor DOP/IGP-beschermde pasta's (zoals Pasta di Gragnano IGP) kan blockchain authentieke geografische oorsprong en traditionele methoden verifiëren, wat het geschatte €60 miljard jaarlijkse Italiaanse voedselfraude-probleem bestrijdt. Consumenten die QR-codes scannen kunnen toegang krijgen tot complete productgeschiedenissen. Bedrijven zoals IBM Food Trust implementeren blockchain voor voedseltransparantie. Uitdagingen omvatten implementatiekosten, technologie-adoptie door kleine producenten en zorgen voor data-nauwkeurigheid bij invoerpunten."
            }
        },
        {
            question: {
                en: "What future protein sources are being explored for alternative meat-based pasta sauces like ragù?",
                es: "¿Qué fuentes de proteína futuras se están explorando para salsas de pasta alternativas a base de carne como el ragù?",
                de: "Welche zukünftigen Proteinquellen werden für alternative fleischbasierte Pastasoßen wie Ragù erforscht?",
                nl: "Welke toekomstige eiwitbronnen worden onderzocht voor alternatieve vleesgebaseerde pastasauzen zoals ragù?"
            },
            options: [
                {
                    en: "Cellular agriculture producing lab-grown meat, fermentation-derived proteins, and plant-based mycoprotein alternatives",
                    es: "Agricultura celular produciendo carne cultivada en laboratorio, proteínas fermentación y alternativas micoproteína vegetal",
                    de: "Zelluläre Landwirtschaft Labor-Fleisch, Fermentationsproteine und pflanzliche Mykoprotein-Alternativen",
                    nl: "Cellulaire landbouw die lab-gekweekt vlees, fermentatie-eiwitten en plantaardige mycoproteine-alternatieven produceert"
                },
                {
                    en: "Only traditional animal meat will ever be used in pasta sauces",
                    es: "Solo la carne animal tradicional se usará alguna vez en salsas para pasta",
                    de: "Nur traditionelles Tierfleisch wird jemals in Pastasoßen verwendet",
                    nl: "Alleen traditioneel dierlijk vlees zal ooit in pastasauzen worden gebruikt"
                },
                {
                    en: "Synthetic chemicals replacing all natural proteins",
                    es: "Químicos sintéticos reemplazando todas las proteínas naturales",
                    de: "Synthetische Chemikalien ersetzen alle natürlichen Proteine",
                    nl: "Synthetische chemicaliën die alle natuurlijke eiwitten vervangen"
                },
                {
                    en: "Future pasta will never contain protein sources",
                    es: "La pasta futura nunca contendrá fuentes de proteínas",
                    de: "Zukünftige Pasta wird niemals Proteinquellen enthalten",
                    nl: "Toekomstige pasta zal nooit eiwitbronnen bevatten"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "The future of pasta sauces includes revolutionary protein sources: Cellular agriculture (cultivated meat) grows real meat cells in bioreactors without raising animals, potentially producing ground beef for Bolognese ragù with reduced environmental impact. Precision fermentation uses microorganisms to produce animal proteins (like casein) without animals, enabling authentic dairy-free cheese sauces. Mycoprotein (from fungi like Fusarium) provides meat-like texture. Plant-based alternatives using pea protein, soy, and wheat gluten increasingly mimic meat texture and flavor. These innovations address livestock's 14.5% contribution to global greenhouse gas emissions, land use concerns, and animal welfare issues while attempting to preserve traditional pasta sauce flavors and textures.",
                es: "El futuro de las salsas para pasta incluye fuentes de proteína revolucionarias: La agricultura celular (carne cultivada) hace crecer células de carne reales en biorreactores sin criar animales, produciendo potencialmente carne molida para ragù boloñés con impacto ambiental reducido. La fermentación de precisión usa microorganismos para producir proteínas animales (como caseína) sin animales, permitiendo salsas de queso auténticas sin lácteos. La micoproteína (de hongos como Fusarium) proporciona textura similar a la carne. Las alternativas a base de plantas usando proteína de guisante, soja y gluten de trigo imitan cada vez más la textura y sabor de la carne. Estas innovaciones abordan la contribución del 14.5% del ganado a las emisiones globales de gases de efecto invernadero, preocupaciones sobre uso de tierra y problemas de bienestar animal mientras intentan preservar sabores y texturas tradicionales de salsas para pasta.",
                de: "Die Zukunft von Pastasoßen umfasst revolutionäre Proteinquellen: Zelluläre Landwirtschaft (kultiviertes Fleisch) züchtet echte Fleischzellen in Bioreaktoren ohne Tierzucht und produziert potenziell Hackfleisch für Bolognese-Ragù mit reduzierter Umweltbelastung. Präzisionsfermentation verwendet Mikroorganismen zur Produktion tierischer Proteine (wie Kasein) ohne Tiere und ermöglicht authentische milchfreie Käsesoßen. Mykoprotein (aus Pilzen wie Fusarium) bietet fleischähnliche Textur. Pflanzliche Alternativen mit Erbsenprotein, Soja und Weizengluten ahmen zunehmend Fleischtextur und -geschmack nach. Diese Innovationen adressieren den 14,5%-Beitrag der Viehzucht zu globalen Treibhausgasemissionen, Landnutzungsbedenken und Tierschutzfragen, während sie versuchen, traditionelle Pastasoßen-Aromen und -Texturen zu bewahren.",
                nl: "De toekomst van pastasauzen omvat revolutionaire eiwitbronnen: Cellulaire landbouw (gekweekt vlees) kweekt echte vleescellen in bioreactoren zonder dieren te fokken, wat potentieel gehakt produceert voor Bolognese ragù met verminderde milieueffecten. Precisiefermentatie gebruikt micro-organismen om dierlijke eiwitten (zoals caseïne) te produceren zonder dieren, wat authentieke zuivelvrije kaassauzen mogelijk maakt. Mycoproteine (van schimmels zoals Fusarium) biedt vleesachtige textuur. Plantaardige alternatieven met erwtenproteïne, soja en tarwegluten bootsen steeds meer vleestextuur en -smaak na. Deze innovaties pakken de 14,5% bijdrage van vee aan wereldwijde broeikasgasemissies aan, landgebruikzorgen en dierenwelzijnsproblemen terwijl ze proberen traditionele pastasausmaken en -texturen te behouden."
            }
        },
        {
            question: {
                en: "How does neurogastronomy explain human preferences for al dente pasta texture?",
                es: "¿Cómo explica la neurogastronomía las preferencias humanas por la textura de pasta al dente?",
                de: "Wie erklärt Neurogastronomie menschliche Präferenzen für Al-Dente-Pasta-Textur?",
                nl: "Hoe verklaart neurogastronomie menselijke voorkeuren voor al dente pastatextuur?"
            },
            options: [
                {
                    en: "Brain reward centers respond to textural contrast and mechanical resistance, triggering satisfaction signals",
                    es: "Los centros de recompensa del cerebro responden al contraste de textura y resistencia mecánica, activando señales de satisfacción",
                    de: "Gehirn-Belohnungszentren reagieren auf texturellen Kontrast und mechanischen Widerstand und lösen Zufriedenheitssignale aus",
                    nl: "Hersenbeloningscentra reageren op textureel contrast en mechanische weerstand, wat tevredenheidssignalen activeert"
                },
                {
                    en: "Al dente preference is purely cultural with no biological basis",
                    es: "La preferencia por al dente es puramente cultural sin base biológica",
                    de: "Al-Dente-Präferenz ist rein kulturell ohne biologische Grundlage",
                    nl: "Al dente-voorkeur is puur cultureel zonder biologische basis"
                },
                {
                    en: "Only Italian people can taste the difference in pasta texture",
                    es: "Solo los italianos pueden notar la diferencia en la textura de la pasta",
                    de: "Nur Italiener können den Unterschied in der Pasta-Textur schmecken",
                    nl: "Alleen Italianen kunnen het verschil in pastatextuur proeven"
                },
                {
                    en: "Brain has no involvement in texture perception",
                    es: "El cerebro no tiene participación en la percepción de textura",
                    de: "Das Gehirn ist nicht an der Texturwahrnehmung beteiligt",
                    nl: "Hersenen hebben geen betrokkenheid bij textuurperceptie"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Neurogastronomy studies how the brain processes eating experiences. Al dente pasta (firm center with slight resistance) provides optimal textural complexity that activates mechanoreceptors in the mouth, sending signals to the somatosensory cortex. This textural contrast—outer surface versus firm core—creates more neural activity and engagement than uniform soft texture. The slight resistance requires chewing, which releases flavors gradually and stimulates dopamine reward pathways associated with satisfaction. Mushy overcooked pasta lacks this complexity, providing less sensory stimulation. Additionally, al dente pasta has lower glycemic response, creating steadier blood sugar and sustained satiety signals. This explains why texture profoundly affects enjoyment beyond mere taste.",
                es: "La neurogastronomía estudia cómo el cerebro procesa las experiencias de comer. La pasta al dente (centro firme con ligera resistencia) proporciona complejidad de textura óptima que activa mecanorreceptores en la boca, enviando señales a la corteza somatosensorial. Este contraste de textura—superficie exterior versus núcleo firme—crea más actividad neural y compromiso que la textura suave uniforme. La ligera resistencia requiere masticación, que libera sabores gradualmente y estimula vías de recompensa de dopamina asociadas con satisfacción. La pasta blanda sobrecocida carece de esta complejidad, proporcionando menos estimulación sensorial. Además, la pasta al dente tiene respuesta glucémica más baja, creando azúcar en sangre más estable y señales de saciedad sostenidas. Esto explica por qué la textura afecta profundamente el disfrute más allá del simple sabor.",
                de: "Neurogastronomie untersucht, wie das Gehirn Esserfahrungen verarbeitet. Al-Dente-Pasta (fester Kern mit leichtem Widerstand) bietet optimale texturelle Komplexität, die Mechanorezeptoren im Mund aktiviert und Signale an den somatosensorischen Cortex sendet. Dieser texturelle Kontrast—äußere Oberfläche versus fester Kern—erzeugt mehr neuronale Aktivität und Engagement als einheitliche weiche Textur. Der leichte Widerstand erfordert Kauen, das Aromen allmählich freisetzt und Dopamin-Belohnungswege stimuliert, die mit Zufriedenheit verbunden sind. Matschige übergekochte Pasta fehlt diese Komplexität und bietet weniger sensorische Stimulation. Außerdem hat Al-Dente-Pasta eine niedrigere glykämische Reaktion, die stabileren Blutzucker und anhaltende Sättigungssignale erzeugt. Dies erklärt, warum Textur den Genuss über den bloßen Geschmack hinaus tiefgreifend beeinflusst.",
                nl: "Neurogastronomie bestudeert hoe de hersenen eetervaringen verwerken. Al dente pasta (stevig centrum met lichte weerstand) biedt optimale texturele complexiteit die mechanoreceptoren in de mond activeert, wat signalen naar de somatosensorische cortex stuurt. Dit texturele contrast—buitenoppervlak versus stevig kerngedeelte—creëert meer neuronale activiteit en betrokkenheid dan uniforme zachte textuur. De lichte weerstand vereist kauwen, wat geleidelijk smaken vrijgeeft en dopamine-beloningspaden stimuleert die geassocieerd zijn met tevredenheid. Papperige overkookte pasta mist deze complexiteit en biedt minder sensorische stimulatie. Bovendien heeft al dente pasta een lagere glycemische respons, wat stabieler bloedsuiker en aanhoudende verzadigingssignalen creëert. Dit verklaart waarom textuur diepgaand genot beïnvloedt naast louter smaak."
            }
        },
        {
            question: {
                en: "What are pasta shape optimization algorithms being developed for?",
                es: "¿Para qué se están desarrollando algoritmos de optimización de formas de pasta?",
                de: "Wofür werden Pasta-Form-Optimierungsalgorithmen entwickelt?",
                nl: "Waarvoor worden pasta-vormoptimalisatie-algoritmen ontwikkeld?"
            },
            options: [
                {
                    en: "Computer modeling to maximize sauce retention, optimize cooking uniformity, and reduce production material waste",
                    es: "Modelado por computadora para maximizar la retención de salsa, optimizar la uniformidad de cocción y reducir el desperdicio de material de producción",
                    de: "Computermodellierung zur Maximierung der Saucenretention, Optimierung der Kochgleichmäßigkeit und Reduzierung von Produktionsmaterialabfällen",
                    nl: "Computermodellering om sausbehoud te maximaliseren, kookuniformiteit te optimaliseren en productie-materiaalverspilling te verminderen"
                },
                {
                    en: "Making all pasta shapes identical worldwide",
                    es: "Hacer que todas las formas de pasta sean idénticas en todo el mundo",
                    de: "Alle Pastaformen weltweit identisch machen",
                    nl: "Alle pastavorm wereldwijd identiek maken"
                },
                {
                    en: "Eliminating traditional pasta shapes entirely",
                    es: "Eliminar completamente las formas tradicionales de pasta",
                    de: "Traditionelle Pastaformen vollständig eliminieren",
                    nl: "Traditionele pastavormen volledig elimineren"
                },
                {
                    en: "Algorithms have no application in pasta design",
                    es: "Los algoritmos no tienen aplicación en el diseño de pasta",
                    de: "Algorithmen haben keine Anwendung im Pasta-Design",
                    nl: "Algoritmen hebben geen toepassing in pastaontwerp"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Computational fluid dynamics and algorithm-driven design are revolutionizing pasta engineering. Researchers use computer simulations to model how water flows around shapes during cooking, how sauce adheres to surface topology, and how shapes pack efficiently for shipping. MIT's Tangible Media Group created flat pasta that transforms into 3D shapes when cooked, using strategic groove patterns calculated by algorithms. Parameters optimized include: surface area-to-volume ratios for sauce coating, internal structure for uniform cooking, ridge patterns for maximum sauce grip, and material efficiency reducing dough waste. This combines tradition with modern engineering, potentially creating new pasta shapes that outperform historical designs in specific sauce applications while respecting cooking principles.",
                es: "La dinámica de fluidos computacional y el diseño impulsado por algoritmos están revolucionando la ingeniería de pasta. Los investigadores usan simulaciones por computadora para modelar cómo fluye el agua alrededor de las formas durante la cocción, cómo la salsa se adhiere a la topología de la superficie y cómo las formas se empacan eficientemente para el envío. El Tangible Media Group del MIT creó pasta plana que se transforma en formas 3D al cocinarse, usando patrones de ranuras estratégicas calculadas por algoritmos. Los parámetros optimizados incluyen: proporciones de área superficial a volumen para recubrimiento de salsa, estructura interna para cocción uniforme, patrones de crestas para máximo agarre de salsa y eficiencia de material reduciendo desperdicio de masa. Esto combina tradición con ingeniería moderna, creando potencialmente nuevas formas de pasta que superan diseños históricos en aplicaciones específicas de salsa mientras respetan principios de cocción.",
                de: "Computergestützte Strömungsdynamik und algorithmusgesteuertes Design revolutionieren Pasta-Engineering. Forscher verwenden Computersimulationen, um zu modellieren, wie Wasser beim Kochen um Formen fließt, wie Soße an Oberflächentopologie haftet und wie Formen sich effizient für den Versand packen lassen. MITs Tangible Media Group schuf flache Pasta, die sich beim Kochen in 3D-Formen verwandelt, unter Verwendung strategischer Rillenmuster, die durch Algorithmen berechnet wurden. Optimierte Parameter umfassen: Oberflächen-zu-Volumen-Verhältnisse für Soßenbeschichtung, interne Struktur für einheitliches Kochen, Rippenmuster für maximalen Soßengriff und Materialeffizienz zur Reduzierung von Teigabfällen. Dies kombiniert Tradition mit moderner Technik und schafft potenziell neue Pastaformen, die historische Designs in spezifischen Soßenanwendungen übertreffen, während sie Kochprinzipien respektieren.",
                nl: "Computationele vloeistofdynamica en algoritme-gedreven ontwerp revolutioneren pasta-engineering. Onderzoekers gebruiken computersimulaties om te modelleren hoe water rond vormen stroomt tijdens het koken, hoe saus hecht aan oppervlaktetopologie, en hoe vormen efficiënt verpakken voor verzending. MIT's Tangible Media Group creëerde platte pasta die transformeert in 3D-vormen bij het koken, met strategische groefpatronen berekend door algoritmen. Geoptimaliseerde parameters omvatten: oppervlakte-tot-volume-verhoudingen voor sausbedekking, interne structuur voor uniform koken, ribbpatronen voor maximale sausgreep, en materiaalefficiëntie die deegverspilling vermindert. Dit combineert traditie met moderne engineering, wat mogelijk nieuwe pastavormen creëert die historische ontwerpen overtreffen in specifieke saustoepassingen terwijl kookprincipes worden gerespecteerd."
            }
        },
        {
            question: {
                en: "Why is su filindeu pasta being considered for UNESCO intangible heritage protection?",
                es: "¿Por qué la pasta su filindeu está siendo considerada para protección del patrimonio inmaterial de la UNESCO?",
                de: "Warum wird Su-Filindeu-Pasta für den Schutz des immateriellen UNESCO-Erbes in Betracht gezogen?",
                nl: "Waarom wordt su filindeu-pasta overwogen voor bescherming van immaterieel UNESCO-erfgoed?"
            },
            options: [
                {
                    en: "Extremely rare technique at risk of extinction with only three known practitioners preserving centuries-old tradition",
                    es: "Técnica extremadamente rara en riesgo de extinción con solo tres practicantes conocidos preservando tradición centenaria",
                    de: "Extrem seltene Technik vom Aussterben bedroht mit nur drei bekannten Praktizierenden, die jahrhundertealte Tradition bewahren",
                    nl: "Extreem zeldzame techniek die met uitsterven wordt bedreigd met slechts drie bekende beoefenaars die eeuwenoude traditie behouden"
                },
                {
                    en: "It is the most commercially successful pasta worldwide",
                    es: "Es la pasta comercialmente más exitosa del mundo",
                    de: "Es ist die kommerziell erfolgreichste Pasta weltweit",
                    nl: "Het is de commercieel meest succesvolle pasta wereldwijd"
                },
                {
                    en: "UNESCO protects all pasta types automatically",
                    es: "La UNESCO protege automáticamente todos los tipos de pasta",
                    de: "UNESCO schützt alle Pastatypen automatisch",
                    nl: "UNESCO beschermt alle pastasoorten automatisch"
                },
                {
                    en: "It was invented recently and needs modern recognition",
                    es: "Fue inventada recientemente y necesita reconocimiento moderno",
                    de: "Es wurde kürzlich erfunden und braucht moderne Anerkennung",
                    nl: "Het werd recent uitgevonden en heeft moderne erkenning nodig"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Su filindeu represents critically endangered culinary knowledge. Made only in Nuoro, Sardinia, for over 300 years, this impossibly thin pasta requires such skill that only three women in the Abraini family can make it. The technique involves stretching and folding semolina dough into 256 strands thinner than hair, laid in three crossed layers. Despite attempts by renowned chefs and food scientists, no one outside the family has successfully learned it. UNESCO's Intangible Cultural Heritage list protects traditional practices at risk of disappearing. Su filindeu exemplifies knowledge transmission solely through hands-on apprenticeship over decades, representing irreplaceable cultural heritage. Its potential loss would erase a unique manifestation of human creativity and pasta-making mastery.",
                es: "Su filindeu representa conocimiento culinario críticamente en peligro. Hecha solo en Nuoro, Cerdeña, durante más de 300 años, esta pasta imposiblemente delgada requiere tal habilidad que solo tres mujeres de la familia Abraini pueden hacerla. La técnica implica estirar y doblar masa de sémola en 256 hebras más delgadas que el cabello, dispuestas en tres capas cruzadas. A pesar de los intentos de chefs renombrados y científicos de alimentos, nadie fuera de la familia la ha aprendido exitosamente. La lista del Patrimonio Cultural Inmaterial de la UNESCO protege prácticas tradicionales en riesgo de desaparecer. Su filindeu ejemplifica transmisión de conocimiento únicamente mediante aprendizaje práctico durante décadas, representando patrimonio cultural irremplazable. Su pérdida potencial borraría una manifestación única de creatividad humana y maestría en elaboración de pasta.",
                de: "Su Filindeu repräsentiert vom Aussterben bedrohtes kulinarisches Wissen. Seit über 300 Jahren nur in Nuoro, Sardinien, hergestellt, erfordert diese unmöglich dünne Pasta solche Fertigkeit, dass nur drei Frauen der Familie Abraini sie herstellen können. Die Technik beinhaltet Dehnen und Falten von Hartweizengrießteig in 256 Stränge dünner als Haar, in drei gekreuzten Schichten angeordnet. Trotz Versuchen renommierter Köche und Lebensmittelwissenschaftler hat niemand außerhalb der Familie sie erfolgreich erlernt. UNESCOs Liste des immateriellen Kulturerbes schützt traditionelle Praktiken, die vom Verschwinden bedroht sind. Su Filindeu verkörpert Wissensübertragung ausschließlich durch praktische Lehre über Jahrzehnte und repräsentiert unersetzliches kulturelles Erbe. Ihr potenzieller Verlust würde eine einzigartige Manifestation menschlicher Kreativität und Pasta-Herstellungsmeisterschaft auslöschen.",
                nl: "Su filindeu vertegenwoordigt kritisch bedreigde culinaire kennis. Alleen gemaakt in Nuoro, Sardinië, gedurende meer dan 300 jaar, vereist deze onmogelijk dunne pasta zo'n vaardigheid dat slechts drie vrouwen in de familie Abraini het kunnen maken. De techniek omvat het rekken en vouwen van semolina-deeg in 256 strengen dunner dan haar, gelegd in drie gekruiste lagen. Ondanks pogingen van bekende chefs en voedselwetenschappers heeft niemand buiten de familie het succesvol geleerd. UNESCO's Immaterieel Cultureel Erfgoed lijst beschermt traditionele praktijken die met verdwijning worden bedreigd. Su filindeu belichaamt kennisoverdracht uitsluitend door hands-on leerlingschap gedurende tientallen jaren, wat onvervangbaar cultureel erfgoed vertegenwoordigt. Zijn potentiële verlies zou een unieke manifestatie van menselijke creativiteit en pasta-maakmeesterschap uitwissen."
            }
        },
        {
            question: {
                en: "How does the carbon footprint of locally-produced pasta compare to imported pasta from traditional Italian regions?",
                es: "¿Cómo se compara la huella de carbono de la pasta producida localmente con la pasta importada de regiones tradicionales italianas?",
                de: "Wie vergleicht sich der CO2-Fußabdruck lokal produzierter Pasta mit importierter Pasta aus traditionellen italienischen Regionen?",
                nl: "Hoe vergelijkt de koolstofvoetafdruk van lokaal geproduceerde pasta met geïmporteerde pasta uit traditionele Italiaanse regio's?"
            },
            options: [
                {
                    en: "Local production has lower transport emissions, but total impact depends on agricultural practices, energy sources, and production methods",
                    es: "Producción local tiene emisiones transporte más bajas, pero impacto total depende de prácticas agrícolas, energía y producción",
                    de: "Lokale Produktion hat niedrigere Transportemissionen, aber Gesamtwirkung hängt von Landwirtschaft, Energie und Produktion ab",
                    nl: "Lokale productie heeft lagere transportemissies, maar totale impact hangt af van landbouw, energiebronnen en productiemethoden"
                },
                {
                    en: "Imported pasta always has higher carbon footprint in all cases",
                    es: "La pasta importada siempre tiene mayor huella de carbono en todos los casos",
                    de: "Importierte Pasta hat immer in allen Fällen höheren CO2-Fußabdruck",
                    nl: "Geïmporteerde pasta heeft altijd hogere koolstofvoetafdruk in alle gevallen"
                },
                {
                    en: "Carbon footprint is identical regardless of production location",
                    es: "La huella de carbono es idéntica independientemente de la ubicación de producción",
                    de: "CO2-Fußabdruck ist identisch unabhängig vom Produktionsstandort",
                    nl: "Koolstofvoetafdruk is identiek ongeacht productielocatie"
                },
                {
                    en: "Only packaging affects carbon footprint, not production or transport",
                    es: "Solo el empaque afecta la huella de carbono, no la producción ni el transporte",
                    de: "Nur Verpackung beeinflusst CO2-Fußabdruck, nicht Produktion oder Transport",
                    nl: "Alleen verpakking beïnvloedt koolstofvoetafdruk, niet productie of transport"
                }
            ],
            correctAnswer: 0,
            explanation: {
                en: "Pasta's carbon footprint is complex: Transportation accounts for approximately 10-15% of total emissions—shipping from Italy adds ~0.2 kg CO2 per kg pasta versus local production. However, wheat cultivation (fertilizer use, irrigation, farming practices) represents 50-60% of emissions. Italian durum wheat grown with sustainable practices may have lower agricultural emissions than conventionally-farmed wheat elsewhere. Manufacturing energy source matters—renewable versus fossil fuels. Scale efficiency affects emissions per unit. Studies show that production method and ingredient sourcing often outweigh transportation 'food miles.' Optimal environmental choice balances local sourcing with sustainable farming and efficient production, not just proximity. Life cycle assessments provide complete pictures beyond simple distance calculations.",
                es: "La huella de carbono de la pasta es compleja: El transporte representa aproximadamente 10-15% de las emisiones totales—el envío desde Italia añade ~0.2 kg CO2 por kg de pasta versus producción local. Sin embargo, el cultivo de trigo (uso de fertilizantes, riego, prácticas agrícolas) representa 50-60% de las emisiones. El trigo duro italiano cultivado con prácticas sostenibles puede tener emisiones agrícolas más bajas que el trigo cultivado convencionalmente en otros lugares. La fuente de energía de fabricación importa—renovable versus combustibles fósiles. La eficiencia de escala afecta las emisiones por unidad. Los estudios muestran que el método de producción y el abastecimiento de ingredientes a menudo superan las 'millas de alimentos' de transporte. La elección ambiental óptima equilibra el abastecimiento local con agricultura sostenible y producción eficiente, no solo proximidad. Las evaluaciones del ciclo de vida proporcionan imágenes completas más allá de cálculos simples de distancia.",
                de: "Der CO2-Fußabdruck von Pasta ist komplex: Transport macht etwa 10-15% der Gesamtemissionen aus—Versand aus Italien fügt ~0,2 kg CO2 pro kg Pasta hinzu versus lokale Produktion. Jedoch repräsentiert Weizenanbau (Düngemitteleinsatz, Bewässerung, landwirtschaftliche Praktiken) 50-60% der Emissionen. Italienischer Hartweizen, der mit nachhaltigen Praktiken angebaut wird, kann niedrigere landwirtschaftliche Emissionen haben als konventionell angebauter Weizen anderswo. Die Energiequelle der Herstellung ist wichtig—erneuerbar versus fossile Brennstoffe. Skaleneffizienz beeinflusst Emissionen pro Einheit. Studien zeigen, dass Produktionsmethode und Zutatenherkunft oft Transport-'Food Miles' überwiegen. Optimale Umweltauswahl balanciert lokale Beschaffung mit nachhaltiger Landwirtschaft und effizienter Produktion, nicht nur Nähe. Lebenszyklusanalysen bieten vollständige Bilder über einfache Entfernungsberechnungen hinaus.",
                nl: "Pasta's koolstofvoetafdruk is complex: Transport vertegenwoordigt ongeveer 10-15% van totale emissies—verzending uit Italië voegt ~0,2 kg CO2 toe per kg pasta versus lokale productie. Echter, tarweteelt (kunstmestgebruik, irrigatie, landbouwpraktijken) vertegenwoordigt 50-60% van emissies. Italiaanse durumtarwe geteeld met duurzame praktijken kan lagere landbouwemissies hebben dan conventioneel geteelde tarwe elders. Energie-bron voor productie is belangrijk—hernieuwbaar versus fossiele brandstoffen. Schaalefficiëntie beïnvloedt emissies per eenheid. Studies tonen dat productiemethode en ingrediënt sourcing vaak transport 'food miles' overtreffen. Optimale milieukeuze balanceert lokale sourcing met duurzame landbouw en efficiënte productie, niet alleen nabijheid. Levenscyclusanalyses bieden complete beelden voorbij simpele afstandsberekeningen."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level10Questions;
    } else {
        window.level10Questions = level10Questions;
    }
})();
