// Quiz - Level 10: Drinken - Traditionele dranken (Meester Traditionele Drankenkennis)
(function() {
    "use strict";

    const level10 = {
        name: {
            en: "Master Traditional Beverage Knowledge",
            es: "Conocimiento Maestro de Bebidas Tradicionales",
            de: "Meister Traditionelle Getränkekunde",
            nl: "Meester Traditionele Drankenkennis"
        },
        questions: [
            {
                question: {
                    en: "What is the traditional Chinese method of aging Shaoxing wine called, involving burial underground for decades?",
                    es: "¿Cómo se llama el método chino tradicional de envejecer el vino Shaoxing, que implica enterrarlo bajo tierra durante décadas?",
                    de: "Wie heißt die traditionelle chinesische Methode zur Alterung von Shaoxing-Wein, bei der er jahrzehntelang unterirdisch vergraben wird?",
                    nl: "Hoe heet de traditionele Chinese methode om Shaoxing-wijn te laten rijpen, waarbij deze tientallen jaren ondergronds wordt begraven?"
                },
                options: [
                    {
                        en: "Huadiao aging",
                        es: "Envejecimiento Huadiao",
                        de: "Huadiao-Alterung",
                        nl: "Huadiao-rijping"
                    },
                    {
                        en: "Fengjiu method",
                        es: "Método Fengjiu",
                        de: "Fengjiu-Methode",
                        nl: "Fengjiu-methode"
                    },
                    {
                        en: "Tianqi burial",
                        es: "Enterramiento Tianqi",
                        de: "Tianqi-Begräbnis",
                        nl: "Tianqi-begrafenis"
                    },
                    {
                        en: "Longquan technique",
                        es: "Técnica Longquan",
                        de: "Longquan-Technik",
                        nl: "Longquan-techniek"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Huadiao aging involves burying decorated jars of Shaoxing wine underground, sometimes for 20-50 years, creating extraordinarily complex flavors.",
                    es: "El envejecimiento Huadiao implica enterrar jarras decoradas de vino Shaoxing bajo tierra, a veces durante 20-50 años, creando sabores extraordinariamente complejos.",
                    de: "Die Huadiao-Alterung beinhaltet das Vergraben dekorierter Krüge mit Shaoxing-Wein unter der Erde, manchmal 20-50 Jahre lang, was außergewöhnlich komplexe Aromen schafft.",
                    nl: "Huadiao-rijping houdt in dat versierde potten met Shaoxing-wijn ondergronds worden begraven, soms 20-50 jaar lang, waardoor buitengewoon complexe smaken ontstaan."
                }
            },
            {
                question: {
                    en: "Which rare Ethiopian traditional drink is made from fermented false banana (enset) and has been consumed for over 1000 years?",
                    es: "¿Qué bebida tradicional etíope rara se hace de plátano falso fermentado (enset) y se ha consumido durante más de 1000 años?",
                    de: "Welches seltene äthiopische traditionelle Getränk wird aus fermentierter falscher Banane (Enset) hergestellt und wird seit über 1000 Jahren konsumiert?",
                    nl: "Welke zeldzame Ethiopische traditionele drank wordt gemaakt van gefermenteerde valse banaan (enset) en wordt al meer dan 1000 jaar geconsumeerd?"
                },
                options: [
                    {
                        en: "Kocho beer",
                        es: "Cerveza Kocho",
                        de: "Kocho-Bier",
                        nl: "Kocho-bier"
                    },
                    {
                        en: "Borde wine",
                        es: "Vino Borde",
                        de: "Borde-Wein",
                        nl: "Borde-wijn"
                    },
                    {
                        en: "Enset mead",
                        es: "Hidromiel de Enset",
                        de: "Enset-Met",
                        nl: "Enset-mede"
                    },
                    {
                        en: "Sidama ale",
                        es: "Cerveza Sidama",
                        de: "Sidama-Bier",
                        nl: "Sidama-bier"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Borde is a traditional fermented beverage made from the enset plant (false banana), particularly important in southern Ethiopian cultures as both food and drink source.",
                    es: "Borde es una bebida fermentada tradicional hecha de la planta enset (plátano falso), particularmente importante en las culturas del sur de Etiopía como fuente de comida y bebida.",
                    de: "Borde ist ein traditionelles fermentiertes Getränk aus der Enset-Pflanze (falsche Banane), besonders wichtig in südsüdiäthiopischen Kulturen als Nahrungs- und Getränkequelle.",
                    nl: "Borde is een traditionele gefermenteerde drank gemaakt van de enset-plant (valse banaan), bijzonder belangrijk in Zuid-Ethiopische culturen als bron van voedsel en drank."
                }
            },
            {
                question: {
                    en: "What is the ancient Persian method called for making rose water distillation that uses a special cooling system with snow?",
                    es: "¿Cómo se llama el método persa antiguo para hacer destilación de agua de rosas que usa un sistema especial de enfriamiento con nieve?",
                    de: "Wie heißt die alte persische Methode zur Herstellung von Rosenwasserdestillation, die ein spezielles Kühlsystem mit Schnee verwendet?",
                    nl: "Hoe heet de oude Perzische methode voor het maken van rozenwaterdestillatie die een speciaal koelsysteem met sneeuw gebruikt?"
                },
                options: [
                    {
                        en: "Gul-ab Safavi",
                        es: "Gul-ab Safavi",
                        de: "Gul-ab Safavi",
                        nl: "Gul-ab Safavi"
                    },
                    {
                        en: "Kashan-e Yakhchal",
                        es: "Kashan-e Yakhchal",
                        de: "Kashan-e Yakhchal",
                        nl: "Kashan-e Yakhchal"
                    },
                    {
                        en: "Isfahan cooling method",
                        es: "Método de enfriamiento Isfahan",
                        de: "Isfahan-Kühlmethode",
                        nl: "Isfahan koelmethode"
                    },
                    {
                        en: "Zarrin distillation",
                        es: "Destilación Zarrin",
                        de: "Zarrin-Destillation",
                        nl: "Zarrin-distillatie"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Kashan-e Yakhchal is the traditional Persian method using underground ice chambers (yakhchal) to create the temperature differential needed for superior rose water distillation.",
                    es: "Kashan-e Yakhchal es el método persa tradicional que usa cámaras de hielo subterráneas (yakhchal) para crear la diferencia de temperatura necesaria para una destilación superior de agua de rosas.",
                    de: "Kashan-e Yakhchal ist die traditionelle persische Methode mit unterirdischen Eiskammern (Yakhchal), um das Temperaturgefälle zu schaffen, das für eine überlegene Rosenwasserdestillation benötigt wird.",
                    nl: "Kashan-e Yakhchal is de traditionele Perzische methode die ondergrondse ijskamers (yakhchal) gebruikt om het temperatuurverschil te creëren dat nodig is voor superieure rozenwaterdestillatie."
                }
            },
            {
                question: {
                    en: "Which traditional Inuit fermented beverage is made from aged seal blood and was considered essential for surviving Arctic winters?",
                    es: "¿Qué bebida fermentada tradicional inuit se hace de sangre de foca envejecida y se consideraba esencial para sobrevivir los inviernos árticos?",
                    de: "Welches traditionelle Inuit-Fermentgetränk wird aus gealtertem Robbenblut hergestellt und galt als überlebenswichtig für arktische Winter?",
                    nl: "Welke traditionele Inuit gefermenteerde drank wordt gemaakt van gerijpt zeehondenbloed en werd als essentieel beschouwd voor het overleven van Arctische winters?"
                },
                options: [
                    {
                        en: "Airag-seal",
                        es: "Airag-foca",
                        de: "Airag-Robbe",
                        nl: "Airag-zeehond"
                    },
                    {
                        en: "Akutaq liquid",
                        es: "Akutaq líquido",
                        de: "Akutaq-Flüssigkeit",
                        nl: "Akutaq vloeistof"
                    },
                    {
                        en: "Siku-drink",
                        es: "Bebida Siku",
                        de: "Siku-Getränk",
                        nl: "Siku-drank"
                    },
                    {
                        en: "Qimmiq wine",
                        es: "Vino Qimmiq",
                        de: "Qimmiq-Wein",
                        nl: "Qimmiq-wijn"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "Siku-drink was a traditional fermented beverage made from aged seal blood, providing crucial vitamins and preventing scurvy during long Arctic winters when plant foods were unavailable.",
                    es: "Siku-drink era una bebida fermentada tradicional hecha de sangre de foca envejecida, proporcionando vitaminas cruciales y previniendo el escorbuto durante largos inviernos árticos cuando los alimentos vegetales no estaban disponibles.",
                    de: "Siku-drink war ein traditionelles fermentiertes Getränk aus gealtertem Robbenblut, das wichtige Vitamine lieferte und Skorbut während langer arktischer Winter verhinderte, wenn pflanzliche Nahrung nicht verfügbar war.",
                    nl: "Siku-drink was een traditionele gefermenteerde drank gemaakt van gerijpt zeehondenbloed, die cruciale vitamines verschafte en scheurbuik voorkwam tijdens lange Arctische winters wanneer plantaardig voedsel niet beschikbaar was."
                }
            },
            {
                question: {
                    en: "What is the mysterious traditional Tibetan drink made from fermented yak butter tea that monks claim enhances meditation states?",
                    es: "¿Cuál es la misteriosa bebida tradicional tibetana hecha de té de mantequilla de yak fermentada que los monjes afirman mejora los estados de meditación?",
                    de: "Was ist das geheimnisvolle traditionelle tibetische Getränk aus fermentiertem Yak-Butter-Tee, das Mönche behaupten, Meditationszustände zu verbessern?",
                    nl: "Wat is de mysterieuze traditionele Tibetaanse drank gemaakt van gefermenteerde yak-boterthee waarvan monniken beweren dat het meditatietoestanden verbetert?"
                },
                options: [
                    {
                        en: "Chhaang-po",
                        es: "Chhaang-po",
                        de: "Chhaang-po",
                        nl: "Chhaang-po"
                    },
                    {
                        en: "Suja-shing",
                        es: "Suja-shing",
                        de: "Suja-shing",
                        nl: "Suja-shing"
                    },
                    {
                        en: "Gur-gur meditation tea",
                        es: "Té de meditación Gur-gur",
                        de: "Gur-gur Meditationstee",
                        nl: "Gur-gur meditatiethee"
                    },
                    {
                        en: "Dhompa fermented butter",
                        es: "Mantequilla fermentada Dhompa",
                        de: "Dhompa fermentierte Butter",
                        nl: "Dhompa gefermenteerde boter"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Suja-shing is a rare traditional Tibetan beverage made from fermented yak butter tea, believed by monks to have properties that enhance focus and meditation depth.",
                    es: "Suja-shing es una bebida tradicional tibetana rara hecha de té de mantequilla de yak fermentada, que los monjes creen que tiene propiedades que mejoran la concentración y la profundidad de la meditación.",
                    de: "Suja-shing ist ein seltenes traditionelles tibetisches Getränk aus fermentiertem Yak-Butter-Tee, von dem Mönche glauben, dass es Eigenschaften hat, die Fokus und Meditationstiefe verbessern.",
                    nl: "Suja-shing is een zeldzame traditionele Tibetaanse drank gemaakt van gefermenteerde yak-boterthee, waarvan monniken geloven dat het eigenschappen heeft die focus en meditatiediepte verbeteren."
                }
            },
            {
                question: {
                    en: "Which ancient Mayan ceremonial drink was prepared with cacao, human blood, and hallucinogenic flowers for royal coronations?",
                    es: "¿Qué bebida ceremonial maya antigua se preparaba con cacao, sangre humana y flores alucinógenas para las coronaciones reales?",
                    de: "Welches alte Maya-Zeremoniengetränk wurde mit Kakao, Menschenblut und halluzinogenen Blumen für königliche Krönungen zubereitet?",
                    nl: "Welke oude Maya ceremoniële drank werd bereid met cacao, mensenbloed en hallucinogene bloemen voor koninklijke kroningen?"
                },
                options: [
                    {
                        en: "Chocolha K'inich",
                        es: "Chocolha K'inich",
                        de: "Chocolha K'inich",
                        nl: "Chocolha K'inich"
                    },
                    {
                        en: "Xocolatl Ahau",
                        es: "Xocolatl Ahau",
                        de: "Xocolatl Ahau",
                        nl: "Xocolatl Ahau"
                    },
                    {
                        en: "Sacred Itzamna drink",
                        es: "Bebida sagrada Itzamna",
                        de: "Heiliges Itzamna-Getränk",
                        nl: "Heilige Itzamna-drank"
                    },
                    {
                        en: "Divine Kukulkan potion",
                        es: "Poción divina Kukulkan",
                        de: "Göttlicher Kukulkan-Trank",
                        nl: "Goddelijke Kukulkan-drank"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Xocolatl Ahau ('Divine Chocolate') was the most sacred Mayan beverage, reserved for coronations and containing cacao, sacrificial blood, and psychoactive morning glory flowers.",
                    es: "Xocolatl Ahau ('Chocolate Divino') era la bebida maya más sagrada, reservada para coronaciones y contenía cacao, sangre sacrificial y flores psicoactivas de dondiego de día.",
                    de: "Xocolatl Ahau ('Göttliche Schokolade') war das heiligste Maya-Getränk, für Krönungen reserviert und enthielt Kakao, Opferblut und psychoaktive Prunkwinden-Blüten.",
                    nl: "Xocolatl Ahau ('Goddelijke Chocolade') was de meest heilige Maya-drank, gereserveerd voor kroningen en bevatte cacao, offerbloed en psychoactieve dagbloembloemen."
                }
            },
            {
                question: {
                    en: "What is the traditional Korean method of aging makgeolli in earthenware buried in volcanic soil called?",
                    es: "¿Cómo se llama el método coreano tradicional de envejecer makgeolli en vasijas de barro enterradas en suelo volcánico?",
                    de: "Wie heißt die traditionelle koreanische Methode zur Alterung von Makgeolli in Töpferwaren, die in Vulkanerde vergraben werden?",
                    nl: "Hoe heet de traditionele Koreaanse methode om makgeolli te laten rijpen in aardewerk begraven in vulkanische grond?"
                },
                options: [
                    {
                        en: "Jeju-dok aging",
                        es: "Envejecimiento Jeju-dok",
                        de: "Jeju-dok-Alterung",
                        nl: "Jeju-dok-rijping"
                    },
                    {
                        en: "Onggi-hwa method",
                        es: "Método Onggi-hwa",
                        de: "Onggi-hwa-Methode",
                        nl: "Onggi-hwa-methode"
                    },
                    {
                        en: "Toji underground technique",
                        es: "Técnica subterránea Toji",
                        de: "Toji-Untergrundtechnik",
                        nl: "Toji ondergrondse techniek"
                    },
                    {
                        en: "Baekje ceremonial aging",
                        es: "Envejecimiento ceremonial Baekje",
                        de: "Baekje-Zeremonialreifung",
                        nl: "Baekje ceremoniële rijping"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Jeju-dok aging uses the volcanic soil of Jeju Island to naturally regulate temperature and add mineral complexity to the makgeolli during extended aging periods.",
                    es: "El envejecimiento Jeju-dok usa el suelo volcánico de la isla de Jeju para regular naturalmente la temperatura y agregar complejidad mineral al makgeolli durante períodos prolongados de envejecimiento.",
                    de: "Die Jeju-dok-Alterung nutzt den Vulkanboden der Insel Jeju, um natürlich die Temperatur zu regulieren und dem Makgeolli während längerer Alterungsperioden mineralische Komplexität zu verleihen.",
                    nl: "Jeju-dok-rijping gebruikt de vulkanische grond van Jeju-eiland om de temperatuur natuurlijk te reguleren en minerale complexiteit toe te voegen aan de makgeolli tijdens verlengde rijpingsperiodes."
                }
            },
            {
                question: {
                    en: "Which extinct traditional Norse beverage was made from fermented walrus ivory shavings and cloudberries?",
                    es: "¿Qué bebida tradicional nórdica extinta se hacía de virutas fermentadas de marfil de morsa y moras árticas?",
                    de: "Welches ausgestorbene traditionelle nordische Getränk wurde aus fermentierten Walross-Elfenbein-Spänen und Moltebeeren hergestellt?",
                    nl: "Welke uitgestorven traditionele Noordse drank werd gemaakt van gefermenteerde walrusivoor schaafsel en cloudberries?"
                },
                options: [
                    {
                        en: "Mjöllnir mead",
                        es: "Hidromiel Mjöllnir",
                        de: "Mjöllnir-Met",
                        nl: "Mjöllnir-mede"
                    },
                    {
                        en: "Hvalross-bjór",
                        es: "Hvalross-bjór",
                        de: "Hvalross-bjór",
                        nl: "Hvalross-bjór"
                    },
                    {
                        en: "Víkingar elixir",
                        es: "Elixir Víkingar",
                        de: "Víkingar-Elixier",
                        nl: "Víkingar-elixer"
                    },
                    {
                        en: "Fenrir's draught",
                        es: "Trago de Fenrir",
                        de: "Fenrir-Trunk",
                        nl: "Fenrir's drank"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Hvalross-bjór was a legendary Norse ceremonial drink made from fermented walrus ivory and cloudberries, mentioned in rare sagas but the recipe was lost by the 12th century.",
                    es: "Hvalross-bjór era una bebida ceremonial nórdica legendaria hecha de marfil de morsa fermentado y moras árticas, mencionada en sagas raras pero la receta se perdió en el siglo XII.",
                    de: "Hvalross-bjór war ein legendäres nordisches Zeremoniengetränk aus fermentiertem Walross-Elfenbein und Moltebeeren, in seltenen Sagas erwähnt, aber das Rezept ging im 12. Jahrhundert verloren.",
                    nl: "Hvalross-bjór was een legendarische Noordse ceremoniële drank gemaakt van gefermenteerd walrusivoor en cloudberries, genoemd in zeldzame saga's, maar het recept ging verloren in de 12e eeuw."
                }
            },
            {
                question: {
                    en: "What is the secret ingredient in the traditional Aboriginal Australian 'Dream Time Brew' that was said to connect drinkers with ancestral spirits?",
                    es: "¿Cuál es el ingrediente secreto en el tradicional 'Brebaje del Tiempo de los Sueños' aborigen australiano que se decía conectaba a los bebedores con los espíritus ancestrales?",
                    de: "Was ist die geheime Zutat im traditionellen australischen Aborigine-'Traumzeit-Gebräu', das angeblich Trinker mit Ahnengeistern verbinden sollte?",
                    nl: "Wat is het geheime ingrediënt in het traditionele Australische Aboriginal 'Dream Time Brew' waarvan gezegd werd dat het drinkers verbond met voorouderlijke geesten?"
                },
                options: [
                    {
                        en: "Fermented wattle bark",
                        es: "Corteza de acacia fermentada",
                        de: "Fermentierte Akazienrinde",
                        nl: "Gefermenteerde wattle-schors"
                    },
                    {
                        en: "Quandong pit extract",
                        es: "Extracto de hueso de quandong",
                        de: "Quandong-Kern-Extrakt",
                        nl: "Quandong-pit extract"
                    },
                    {
                        en: "Desert lime root essence",
                        es: "Esencia de raíz de lima del desierto",
                        de: "Wüstenlimetten-Wurzel-Essenz",
                        nl: "Woestijnlimoen wortel essence"
                    },
                    {
                        en: "Eucalyptus honey nectar",
                        es: "Néctar de miel de eucalipto",
                        de: "Eukalyptus-Honig-Nektar",
                        nl: "Eucalyptus honing nectar"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "Desert lime root essence was the sacred component believed to induce spiritual visions and connect the drinker with Dreamtime ancestors in traditional Aboriginal ceremony.",
                    es: "La esencia de raíz de lima del desierto era el componente sagrado que se creía inducía visiones espirituales y conectaba al bebedor con los ancestros del Tiempo de los Sueños en la ceremonia aborigen tradicional.",
                    de: "Wüstenlimetten-Wurzel-Essenz war die heilige Komponente, die spirituelle Visionen induzieren und den Trinker mit Traumzeit-Ahnen in traditionellen Aborigine-Zeremonien verbinden sollte.",
                    nl: "Woestijnlimoen wortel essence was de heilige component waarvan werd geloofd dat het spirituele visioenen opwekte en de drinker verbond met Dreamtime-voorouders in traditionele Aboriginal ceremonie."
                }
            },
            {
                question: {
                    en: "Which traditional Andean beverage requires fermentation at precisely 4,200 meters altitude to achieve its unique properties?",
                    es: "¿Qué bebida tradicional andina requiere fermentación a precisamente 4,200 metros de altitud para lograr sus propiedades únicas?",
                    de: "Welches traditionelle Anden-Getränk erfordert Fermentation bei genau 4.200 Metern Höhe, um seine einzigartigen Eigenschaften zu erreichen?",
                    nl: "Welke traditionele Andes-drank vereist fermentatie op precies 4.200 meter hoogte om zijn unieke eigenschappen te bereiken?"
                },
                options: [
                    {
                        en: "Chuño-chicha",
                        es: "Chuño-chicha",
                        de: "Chuño-chicha",
                        nl: "Chuño-chicha"
                    },
                    {
                        en: "Altiplano ambrosia",
                        es: "Ambrosía del altiplano",
                        de: "Altiplano-Ambrosia",
                        nl: "Altiplano ambrosia"
                    },
                    {
                        en: "Inca sky-wine",
                        es: "Vino celestial inca",
                        de: "Inka-Himmelswein",
                        nl: "Inca hemelwijn"
                    },
                    {
                        en: "Tiahuanaco elixir",
                        es: "Elixir Tiahuanaco",
                        de: "Tiahuanaco-Elixier",
                        nl: "Tiahuanaco-elixer"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Chuño-chicha is a traditional high-altitude fermented beverage that requires the specific atmospheric pressure and temperature conditions found at exactly 4,200 meters to properly ferment the freeze-dried potato base.",
                    es: "Chuño-chicha es una bebida fermentada tradicional de gran altitud que requiere las condiciones específicas de presión atmosférica y temperatura que se encuentran exactamente a 4,200 metros para fermentar adecuadamente la base de papa liofilizada.",
                    de: "Chuño-chicha ist ein traditionelles Höhen-Fermentgetränk, das die spezifischen atmosphärischen Druck- und Temperaturbedingungen benötigt, die genau bei 4.200 Metern zu finden sind, um die gefriergetrocknete Kartoffelbasis richtig zu fermentieren.",
                    nl: "Chuño-chicha is een traditionele hooggelegen gefermenteerde drank die de specifieke atmosferische druk- en temperatuuromstandigheden vereist die precies op 4.200 meter hoogte worden aangetroffen om de gevriesdroogde aardappelbasis goed te laten fermenteren."
                }
            },
            {
                question: {
                    en: "What is the molecular compound responsible for the psychoactive effects in traditional Amazonian ayahuasca beverages?",
                    es: "¿Cuál es el compuesto molecular responsable de los efectos psicoactivos en las bebidas tradicionales amazónicas de ayahuasca?",
                    de: "Was ist die molekulare Verbindung, die für die psychoaktiven Wirkungen in traditionellen Amazonas-Ayahuasca-Getränken verantwortlich ist?",
                    nl: "Wat is de moleculaire verbinding verantwoordelijk voor de psychoactieve effecten in traditionele Amazone ayahuasca dranken?"
                },
                options: [
                    {
                        en: "DMT (Dimethyltryptamine)",
                        es: "DMT (Dimetiltriptamina)",
                        de: "DMT (Dimethyltryptamin)",
                        nl: "DMT (Dimethyltryptamine)"
                    },
                    {
                        en: "THC (Tetrahydrocannabinol)",
                        es: "THC (Tetrahidrocannabinol)",
                        de: "THC (Tetrahydrocannabinol)",
                        nl: "THC (Tetrahydrocannabinol)"
                    },
                    {
                        en: "Psilocybin",
                        es: "Psilocibina",
                        de: "Psilocybin",
                        nl: "Psilocybine"
                    },
                    {
                        en: "Mescaline",
                        es: "Mescalina",
                        de: "Meskalin",
                        nl: "Mescaline"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "DMT combined with MAO inhibitors in ayahuasca creates powerful psychoactive effects used in traditional Amazonian shamanic ceremonies for spiritual healing and divination.",
                    es: "DMT combinado con inhibidores de MAO en ayahuasca crea poderosos efectos psicoactivos usados en ceremonias chamánicas amazónicas tradicionales para sanación espiritual y adivinación.",
                    de: "DMT kombiniert mit MAO-Inhibitoren in Ayahuasca erzeugt starke psychoaktive Wirkungen, die in traditionellen Amazonas-Schamanismus-Zeremonien für spirituelle Heilung und Wahrsagung verwendet werden.",
                    nl: "DMT gecombineerd met MAO remmers in ayahuasca creëert krachtige psychoactieve effecten gebruikt in traditionele Amazone sjamanistische ceremonies voor spirituele genezing en voorspelling."
                }
            },
            {
                question: {
                    en: "Which rare Japanese sake brewing technique involves adding lactobacillus at specific stages for complex acidity?",
                    es: "¿Qué técnica rara japonesa de elaboración de sake implica agregar lactobacillus en etapas específicas para acidez compleja?",
                    de: "Welche seltene japanische Sake-Brautechnik beinhaltet das Hinzufügen von Lactobacillus in bestimmten Stadien für komplexe Säure?",
                    nl: "Welke zeldzame Japanse sake brouw techniek houdt in dat lactobacillus wordt toegevoegd in specifieke stadia voor complexe zuurheid?"
                },
                options: [
                    {
                        en: "Kimoto method",
                        es: "Método Kimoto",
                        de: "Kimoto-Methode",
                        nl: "Kimoto methode"
                    },
                    {
                        en: "Yamahai method",
                        es: "Método Yamahai",
                        de: "Yamahai-Methode",
                        nl: "Yamahai methode"
                    },
                    {
                        en: "Bodaimoto method",
                        es: "Método Bodaimoto",
                        de: "Bodaimoto-Methode",
                        nl: "Bodaimoto methode"
                    },
                    {
                        en: "Sokujo method",
                        es: "Método Sokujo",
                        de: "Sokujo-Methode",
                        nl: "Sokujo methode"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "Bodaimoto is an ancient sake brewing method revived from monastery records, using lactobacillus to create natural lactic acid before yeast fermentation, producing distinctive rich, complex flavors.",
                    es: "Bodaimoto es un método antiguo de elaboración de sake revivido de registros de monasterios, usando lactobacillus para crear ácido láctico natural antes de la fermentación con levadura, produciendo sabores distintivos ricos y complejos.",
                    de: "Bodaimoto ist eine alte Sake-Braumethode, die aus Klosteraufzeichnungen wiederbelebt wurde und Lactobacillus verwendet, um natürliche Milchsäure vor der Hefegärung zu erzeugen und charakteristische reiche, komplexe Aromen zu produzieren.",
                    nl: "Bodaimoto is een oude sake brouw methode nieuw leven ingeblazen uit klooster records, waarbij lactobacillus wordt gebruikt om natuurlijk melkzuur te creëren voor gistfermentatie, wat onderscheidende rijke, complexe smaken produceert."
                }
            },
            {
                question: {
                    en: "What is the traditional Mongolian technique of preserving fermented mare's milk during long winter journeys?",
                    es: "¿Cuál es la técnica mongol tradicional de preservar leche de yegua fermentada durante largos viajes de invierno?",
                    de: "Was ist die traditionelle mongolische Technik zur Konservierung fermentierter Stutenmilch während langer Winterreisen?",
                    nl: "Wat is de traditionele Mongoolse techniek van het bewaren van gefermenteerde merrie melk tijdens lange winterreizen?"
                },
                options: [
                    {
                        en: "Freezing in leather pouches",
                        es: "Congelación en bolsas de cuero",
                        de: "Einfrieren in Lederbeuteln",
                        nl: "Bevriezen in leren zakken"
                    },
                    {
                        en: "Drying into powder",
                        es: "Secado en polvo",
                        de: "Trocknen zu Pulver",
                        nl: "Drogen tot poeder"
                    },
                    {
                        en: "Smoking over yak dung fires",
                        es: "Ahumar sobre fuegos de estiércol de yak",
                        de: "Räuchern über Yak-Dung-Feuer",
                        nl: "Roken over yak mest vuren"
                    },
                    {
                        en: "Storing in sheep stomach casings",
                        es: "Almacenar en envolturas de estómago de oveja",
                        de: "Lagerung in Schafmagenhüllen",
                        nl: "Opslaan in schapen maag omhulsels"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Mongolian herders traditionally freeze airag (fermented mare's milk) in leather pouches during winter, allowing them to carry frozen blocks that can be thawed and consumed during long journeys across the steppes.",
                    es: "Los pastores mongoles tradicionalmente congelan airag (leche de yegua fermentada) en bolsas de cuero durante el invierno, permitiéndoles llevar bloques congelados que pueden descongelarse y consumirse durante largos viajes por las estepas.",
                    de: "Mongolische Hirten frieren traditionell Airag (fermentierte Stutenmilch) in Lederbeuteln während des Winters ein, was es ihnen ermöglicht, gefrorene Blöcke zu tragen, die während langer Reisen durch die Steppen aufgetaut und konsumiert werden können.",
                    nl: "Mongoolse herders bevriezen traditioneel airag (gefermenteerde merrie melk) in leren zakken tijdens de winter, waardoor ze bevroren blokken kunnen meenemen die kunnen worden ontdooid en geconsumeerd tijdens lange reizen over de steppen."
                }
            },
            {
                question: {
                    en: "Which traditional Scandinavian brewing technique involves smoking malt over juniper branches?",
                    es: "¿Qué técnica escandinava tradicional de elaboración implica ahumar malta sobre ramas de enebro?",
                    de: "Welche traditionelle skandinavische Brautechnik beinhaltet das Räuchern von Malz über Wacholderästen?",
                    nl: "Welke traditionele Scandinavische brouw techniek houdt in dat mout wordt gerookt over jeneverbes takken?"
                },
                options: [
                    {
                        en: "Sahti brewing",
                        es: "Elaboración de Sahti",
                        de: "Sahti-Brauen",
                        nl: "Sahti brouwen"
                    },
                    {
                        en: "Gotlandsdricka method",
                        es: "Método Gotlandsdricka",
                        de: "Gotlandsdricka-Methode",
                        nl: "Gotlandsdricka methode"
                    },
                    {
                        en: "Koduõlu production",
                        es: "Producción de Koduõlu",
                        de: "Koduõlu-Produktion",
                        nl: "Koduõlu productie"
                    },
                    {
                        en: "Stjørdalsøl brewing",
                        es: "Elaboración de Stjørdalsøl",
                        de: "Stjørdalsøl-Brauen",
                        nl: "Stjørdalsøl brouwen"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Gotlandsdricka is a rare traditional Swedish smoked beer where malt is smoked over burning juniper branches and twigs, creating unique resinous, smoky flavors found nowhere else.",
                    es: "Gotlandsdricka es una cerveza ahumada sueca tradicional rara donde la malta se ahuma sobre ramas y ramitas de enebro ardiendo, creando sabores resinosos y ahumados únicos que no se encuentran en ningún otro lugar.",
                    de: "Gotlandsdricka ist ein seltenes traditionelles schwedisches Rauchbier, bei dem Malz über brennenden Wacholderästen und -zweigen geräuchert wird, was einzigartige harzige, rauchige Aromen erzeugt, die nirgendwo anders zu finden sind.",
                    nl: "Gotlandsdricka is een zeldzaam traditioneel Zweeds gerookt bier waarbij mout wordt gerookt over brandende jeneverbes takken en twijgen, wat unieke harsachtige, rokerige smaken creëert die nergens anders te vinden zijn."
                }
            },
            {
                question: {
                    en: "What is the lost medieval spice blend used in the legendary hypocras wine that modern historians cannot fully replicate?",
                    es: "¿Cuál es la mezcla de especias medieval perdida usada en el legendario vino hypocras que los historiadores modernos no pueden replicar completamente?",
                    de: "Was ist die verlorene mittelalterliche Gewürzmischung, die im legendären Hypocras-Wein verwendet wurde und die moderne Historiker nicht vollständig replizieren können?",
                    nl: "Wat is de verloren middeleeuwse kruiden mengeling gebruikt in de legendarische hypocras wijn die moderne historici niet volledig kunnen repliceren?"
                },
                options: [
                    {
                        en: "Paradise grain blend",
                        es: "Mezcla de granos del paraíso",
                        de: "Paradieskörner-Mischung",
                        nl: "Paradijskorrel mengeling"
                    },
                    {
                        en: "Grains of Paradise formula",
                        es: "Fórmula de granos del paraíso",
                        de: "Körner des Paradieses Formel",
                        nl: "Grains of Paradise formule"
                    },
                    {
                        en: "Spice de Hypocras",
                        es: "Spice de Hypocras",
                        de: "Spice de Hypocras",
                        nl: "Spice de Hypocras"
                    },
                    {
                        en: "Medieval poudre forte",
                        es: "Poudre forte medieval",
                        de: "Mittelalterliche Poudre forte",
                        nl: "Middeleeuwse poudre forte"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "Spice de Hypocras was a complex medieval spice blend for the legendary wine, with recipes varying by region and apothecary secrets now lost, making exact historical replication impossible despite numerous attempts.",
                    es: "Spice de Hypocras era una mezcla de especias medieval compleja para el vino legendario, con recetas que variaban por región y secretos de boticario ahora perdidos, haciendo imposible la replicación histórica exacta a pesar de numerosos intentos.",
                    de: "Spice de Hypocras war eine komplexe mittelalterliche Gewürzmischung für den legendären Wein, mit Rezepten, die je nach Region variierten und Apotheker-Geheimnisse, die jetzt verloren sind, was eine exakte historische Replikation trotz zahlreicher Versuche unmöglich macht.",
                    nl: "Spice de Hypocras was een complexe middeleeuwse kruiden mengeling voor de legendarische wijn, met recepten die varieerden per regio en apotheker geheimen nu verloren, waardoor exacte historische replicatie onmogelijk is ondanks talrijke pogingen."
                }
            },
            {
                question: {
                    en: "Which traditional Pacific Islander navigation drink was consumed to detect ocean currents through taste?",
                    es: "¿Qué bebida de navegación tradicional de las islas del Pacífico se consumía para detectar corrientes oceánicas a través del sabor?",
                    de: "Welches traditionelle pazifische Inselnavigationsgetränk wurde konsumiert, um Meeresströmungen durch Geschmack zu erkennen?",
                    nl: "Welke traditionele Pacific Islander navigatie drank werd geconsumeerd om oceaan stromingen te detecteren door smaak?"
                },
                options: [
                    {
                        en: "Salted seawater infusions",
                        es: "Infusiones de agua de mar salada",
                        de: "Gesalzene Meerwasser-Infusionen",
                        nl: "Gezouten zeewater infusies"
                    },
                    {
                        en: "Kava mixed with seawater",
                        es: "Kava mezclada con agua de mar",
                        de: "Kava gemischt mit Meerwasser",
                        nl: "Kava gemengd met zeewater"
                    },
                    {
                        en: "Pandanus fruit sea-brew",
                        es: "Infusión marina de fruta de pandanus",
                        de: "Pandanus-Frucht-See-Gebräu",
                        nl: "Pandanus vrucht zee-brouwsel"
                    },
                    {
                        en: "No such practice existed",
                        es: "No existía tal práctica",
                        de: "Eine solche Praxis existierte nicht",
                        nl: "Zo'n praktijk bestond niet"
                    }
                ],
                correct: 3,
                explanation: {
                    en: "This is a common misconception. Pacific Islander navigators used sophisticated observations of stars, waves, birds, and clouds - but not taste-based ocean current detection through beverages.",
                    es: "Este es un concepto erróneo común. Los navegantes de las islas del Pacífico usaban observaciones sofisticadas de estrellas, olas, pájaros y nubes - pero no detección de corrientes oceánicas basada en sabor a través de bebidas.",
                    de: "Dies ist ein verbreiteter Irrtum. Pazifische Inselnavigatoren verwendeten ausgeklügelte Beobachtungen von Sternen, Wellen, Vögeln und Wolken - aber keine geschmacksbasierte Meeresströmungserkennung durch Getränke.",
                    nl: "Dit is een veelvoorkomend misverstand. Pacific Islander navigators gebruikten geavanceerde waarnemingen van sterren, golven, vogels en wolken - maar geen smaak-gebaseerde oceaan stroom detectie door dranken."
                }
            },
            {
                question: {
                    en: "What is the precise fermentation temperature window for traditional champagne method secondary fermentation?",
                    es: "¿Cuál es la ventana precisa de temperatura de fermentación para la fermentación secundaria del método tradicional de champán?",
                    de: "Was ist das genaue Fermentationstemperaturfenster für die sekundäre Fermentation nach traditioneller Champagner-Methode?",
                    nl: "Wat is het precieze fermentatie temperatuur venster voor traditionele champagne methode secundaire fermentatie?"
                },
                options: [
                    {
                        en: "10-12°C",
                        es: "10-12°C",
                        de: "10-12°C",
                        nl: "10-12°C"
                    },
                    {
                        en: "15-18°C",
                        es: "15-18°C",
                        de: "15-18°C",
                        nl: "15-18°C"
                    },
                    {
                        en: "12-14°C",
                        es: "12-14°C",
                        de: "12-14°C",
                        nl: "12-14°C"
                    },
                    {
                        en: "8-10°C",
                        es: "8-10°C",
                        de: "8-10°C",
                        nl: "8-10°C"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Traditional méthode champenoise requires precise 10-12°C for secondary fermentation in bottle, ensuring slow, controlled CO2 development and fine bubble formation over minimum 15 months aging.",
                    es: "La méthode champenoise tradicional requiere precisos 10-12°C para fermentación secundaria en botella, asegurando desarrollo lento y controlado de CO2 y formación de burbujas finas durante mínimo 15 meses de envejecimiento.",
                    de: "Traditionelle Méthode Champenoise erfordert präzise 10-12°C für die Sekundärgärung in der Flasche, um eine langsame, kontrollierte CO2-Entwicklung und feine Blasenbildung über mindestens 15 Monate Alterung zu gewährleisten.",
                    nl: "Traditionele méthode champenoise vereist precieze 10-12°C voor secundaire fermentatie in fles, wat langzame, gecontroleerde CO2 ontwikkeling en fijne bubbel formatie verzekert gedurende minimaal 15 maanden rijping."
                }
            },
            {
                question: {
                    en: "Which traditional Central Asian drink involves fermenting wheat in horse intestines for antibacterial properties?",
                    es: "¿Qué bebida tradicional de Asia Central implica fermentar trigo en intestinos de caballo por propiedades antibacterianas?",
                    de: "Welches traditionelle zentralasiatische Getränk beinhaltet das Fermentieren von Weizen in Pferdedärmen wegen antibakterieller Eigenschaften?",
                    nl: "Welke traditionele Centraal-Aziatische drank houdt in dat tarwe wordt gefermenteerd in paarden darmen voor antibacteriële eigenschappen?"
                },
                options: [
                    {
                        en: "Koumiss variant",
                        es: "Variante de koumiss",
                        de: "Kumys-Variante",
                        nl: "Koumiss variant"
                    },
                    {
                        en: "Boza intestinal method",
                        es: "Método intestinal de boza",
                        de: "Boza-Darmmethode",
                        nl: "Boza darmen methode"
                    },
                    {
                        en: "Maksym preparation",
                        es: "Preparación de maksym",
                        de: "Maksym-Zubereitung",
                        nl: "Maksym bereiding"
                    },
                    {
                        en: "This practice doesn't exist",
                        es: "Esta práctica no existe",
                        de: "Diese Praxis existiert nicht",
                        nl: "Deze praktijk bestaat niet"
                    }
                ],
                correct: 3,
                explanation: {
                    en: "This is not a real traditional practice. While Central Asian fermented beverages are diverse, fermenting in animal intestines for antibacterial properties is not an authentic historical or cultural method.",
                    es: "Esta no es una práctica tradicional real. Aunque las bebidas fermentadas de Asia Central son diversas, fermentar en intestinos de animales por propiedades antibacterianas no es un método histórico o cultural auténtico.",
                    de: "Dies ist keine echte traditionelle Praxis. Obwohl zentralasiatische fermentierte Getränke vielfältig sind, ist das Fermentieren in Tierdärmen wegen antibakterieller Eigenschaften keine authentische historische oder kulturelle Methode.",
                    nl: "Dit is geen echte traditionele praktijk. Hoewel Centraal-Aziatische gefermenteerde dranken divers zijn, is fermenteren in dieren darmen voor antibacteriële eigenschappen geen authentieke historische of culturele methode."
                }
            },
            {
                question: {
                    en: "What is the traditional ratio of water to wort in ancient Sumerian beer according to cuneiform tablets?",
                    es: "¿Cuál es la proporción tradicional de agua a mosto en la cerveza sumeria antigua según las tablillas cuneiformes?",
                    de: "Was ist das traditionelle Verhältnis von Wasser zu Würze im antiken sumerischen Bier laut Keilschrifttafeln?",
                    nl: "Wat is de traditionele verhouding van water tot wort in oud Sumerisch bier volgens spijkerschrift tabletten?"
                },
                options: [
                    {
                        en: "1:1 ratio",
                        es: "Proporción 1:1",
                        de: "Verhältnis 1:1",
                        nl: "Verhouding 1:1"
                    },
                    {
                        en: "2:1 (water to wort)",
                        es: "2:1 (agua a mosto)",
                        de: "2:1 (Wasser zu Würze)",
                        nl: "2:1 (water tot wort)"
                    },
                    {
                        en: "No water added - thick porridge consistency",
                        es: "Sin agua añadida - consistencia de gachas espesas",
                        de: "Kein Wasser zugefügt - dicke Breikonsistenz",
                        nl: "Geen water toegevoegd - dikke pap consistentie"
                    },
                    {
                        en: "3:1 (water to wort)",
                        es: "3:1 (agua a mosto)",
                        de: "3:1 (Wasser zu Würze)",
                        nl: "3:1 (water tot wort)"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "Ancient Sumerian beer was actually thick and porridge-like, consumed through straws to filter out grain husks. The Hymn to Ninkasi describes this consistency, quite different from modern beer.",
                    es: "La cerveza sumeria antigua era en realidad espesa y similar a gachas, consumida a través de pajitas para filtrar las cáscaras de grano. El Himno a Ninkasi describe esta consistencia, bastante diferente de la cerveza moderna.",
                    de: "Antikes sumerisches Bier war tatsächlich dick und breiähnlich, durch Strohhalme konsumiert, um Getreideschalen herauszufiltern. Die Hymne an Ninkasi beschreibt diese Konsistenz, ganz anders als modernes Bier.",
                    nl: "Oud Sumerisch bier was eigenlijk dik en pap-achtig, geconsumeerd door rietjes om graan schillen eruit te filteren. De Hymne aan Ninkasi beschrijft deze consistentie, heel anders dan modern bier."
                }
            },
            {
                question: {
                    en: "Which rare traditional Polynesian fermentation involves burying breadfruit underground with hot volcanic stones?",
                    es: "¿Qué fermentación polinesia tradicional rara implica enterrar fruta del pan bajo tierra con piedras volcánicas calientes?",
                    de: "Welche seltene traditionelle polynesische Fermentation beinhaltet das Vergraben von Brotfrucht unter der Erde mit heißen Vulkansteinen?",
                    nl: "Welke zeldzame traditionele Polynesische fermentatie houdt in dat broodvrucht ondergronds wordt begraven met hete vulkanische stenen?"
                },
                options: [
                    {
                        en: "Ma fermentation",
                        es: "Fermentación Ma",
                        de: "Ma-Fermentation",
                        nl: "Ma fermentatie"
                    },
                    {
                        en: "Poi preparation",
                        es: "Preparación Poi",
                        de: "Poi-Vorbereitung",
                        nl: "Poi bereiding"
                    },
                    {
                        en: "Umu heated ma",
                        es: "Ma calentado en umu",
                        de: "Umu erhitztes Ma",
                        nl: "Umu verhitte ma"
                    },
                    {
                        en: "Masi cultivation",
                        es: "Cultivo Masi",
                        de: "Masi-Anbau",
                        nl: "Masi kweek"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Ma is a traditional Polynesian fermented breadfruit paste created by underground fermentation with hot volcanic stones, preserving the breadfruit and creating complex sour flavors used in ceremonial drinks.",
                    es: "Ma es una pasta de fruta del pan fermentada polinesia tradicional creada por fermentación subterránea con piedras volcánicas calientes, preservando la fruta del pan y creando sabores agrios complejos usados en bebidas ceremoniales.",
                    de: "Ma ist eine traditionelle polynesische fermentierte Brotfruchtpaste, die durch unterirdische Fermentation mit heißen Vulkansteinen entsteht, die Brotfrucht konserviert und komplexe saure Aromen für zeremonielle Getränke erzeugt.",
                    nl: "Ma is een traditionele Polynesische gefermenteerde broodvrucht pasta gecreëerd door ondergrondse fermentatie met hete vulkanische stenen, waarbij de broodvrucht wordt geconserveerd en complexe zure smaken worden gecreëerd gebruikt in ceremoniële dranken."
                }
            },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
