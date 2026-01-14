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
            {
                question: {
                    en: "What is the ancient Inca technique of producing chicha de jora that involves women chewing corn to initiate salivary enzyme conversion?",
                    es: "¿Cuál es la técnica inca antigua de producir chicha de jora que implica que las mujeres mastiquen maíz para iniciar la conversión de enzimas salivales?",
                    de: "Was ist die alte Inka-Technik zur Herstellung von Chicha de Jora, bei der Frauen Mais kauen, um die Speichelenzyumwandlung einzuleiten?",
                    nl: "Wat is de oude Inca techniek om chicha de jora te produceren waarbij vrouwen maïs kauwen om speeksel enzym conversie te initiëren?"
                },
                options: [
                    {
                        en: "Mukbil method",
                        es: "Método Mukbil",
                        de: "Mukbil-Methode",
                        nl: "Mukbil methode"
                    },
                    {
                        en: "Aqha mastication",
                        es: "Masticación Aqha",
                        de: "Aqha-Kauen",
                        nl: "Aqha kauwing"
                    },
                    {
                        en: "Muko technique",
                        es: "Técnica Muko",
                        de: "Muko-Technik",
                        nl: "Muko techniek"
                    },
                    {
                        en: "Ch'ulla preparation",
                        es: "Preparación Ch'ulla",
                        de: "Ch'ulla-Vorbereitung",
                        nl: "Ch'ulla bereiding"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Aqha mastication was the traditional Inca method where designated women (usually elders) chewed corn to break down starches using salivary amylase enzymes, then spat the mixture into fermentation vessels for chicha production.",
                    es: "La masticación Aqha era el método inca tradicional donde mujeres designadas (usualmente ancianas) masticaban maíz para descomponer almidones usando enzimas amilasa salivales, luego escupían la mezcla en vasijas de fermentación para la producción de chicha.",
                    de: "Aqha-Kauen war die traditionelle Inka-Methode, bei der bestimmte Frauen (normalerweise Ältere) Mais kauten, um Stärken mithilfe von Speichelamylase-Enzymen abzubauen, dann die Mischung in Fermentationsgefäße spuckten für die Chicha-Produktion.",
                    nl: "Aqha kauwing was de traditionele Inca methode waarbij aangewezen vrouwen (meestal ouderen) maïs kauwden om zetmeel af te breken met behulp van speeksel amylase enzymen, daarna spuwden ze het mengsel in fermentatie vaten voor chicha productie."
                }
            },
            {
                question: {
                    en: "Which rare West African palm wine tradition involves tapping raffia palms at midnight during full moon for enhanced mystical properties?",
                    es: "¿Qué tradición rara de vino de palma de África Occidental implica extraer palmeras de rafia a medianoche durante luna llena para propiedades místicas mejoradas?",
                    de: "Welche seltene westafrikanische Palmwein-Tradition beinhaltet das Anzapfen von Raffia-Palmen um Mitternacht während Vollmond für verbesserte mystische Eigenschaften?",
                    nl: "Welke zeldzame West-Afrikaanse palmwijn traditie houdt in dat raffia palmen worden afgetapt om middernacht tijdens volle maan voor verbeterde mystieke eigenschappen?"
                },
                options: [
                    {
                        en: "Ngwo moon harvest",
                        es: "Cosecha lunar Ngwo",
                        de: "Ngwo-Mondernte",
                        nl: "Ngwo maan oogst"
                    },
                    {
                        en: "Oguro ritual tapping",
                        es: "Extracción ritual Oguro",
                        de: "Oguro-Ritualzapfen",
                        nl: "Oguro ritueel aftappen"
                    },
                    {
                        en: "This is folklore, not actual practice",
                        es: "Esto es folclore, no práctica real",
                        de: "Dies ist Folklore, keine tatsächliche Praxis",
                        nl: "Dit is folklore, geen werkelijke praktijk"
                    },
                    {
                        en: "Umu ceremonial extraction",
                        es: "Extracción ceremonial Umu",
                        de: "Umu-Zeremonialextraktion",
                        nl: "Umu ceremoniële extractie"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "This is a romanticized misconception. Traditional palm wine tapping occurs in the morning when sap flow is optimal, not during midnight rituals. While palm wine has ceremonial significance, lunar-timed tapping is folklore.",
                    es: "Este es un concepto erróneo romantizado. La extracción tradicional de vino de palma ocurre por la mañana cuando el flujo de savia es óptimo, no durante rituales de medianoche. Aunque el vino de palma tiene significado ceremonial, la extracción cronometrada lunar es folclore.",
                    de: "Dies ist ein romantisiertes Missverständnis. Traditionelles Palmweinzapfen erfolgt morgens, wenn der Saftfluss optimal ist, nicht während Mitternachtsritualen. Obwohl Palmwein zeremonielle Bedeutung hat, ist mondgesteuertes Zapfen Folklore.",
                    nl: "Dit is een geromantiseerd misverstand. Traditioneel palmwijn aftappen vindt plaats in de ochtend wanneer de sapstroom optimaal is, niet tijdens middernacht rituelen. Hoewel palmwijn ceremoniële betekenis heeft, is maan-getimed aftappen folklore."
                }
            },
            {
                question: {
                    en: "What is the traditional Japanese technique of using snow-aged sake barrels called yukimuro-juku that creates unique flavor profiles?",
                    es: "¿Cómo se llama la técnica japonesa tradicional de usar barriles de sake envejecidos en nieve llamada yukimuro-juku que crea perfiles de sabor únicos?",
                    de: "Was ist die traditionelle japanische Technik namens Yukimuro-Juku, bei der schneegealterte Sake-Fässer verwendet werden, die einzigartige Geschmacksprofile erzeugen?",
                    nl: "Wat is de traditionele Japanse techniek van het gebruik van sneeuw-gerijpte sake vaten genaamd yukimuro-juku die unieke smaak profielen creëert?"
                },
                options: [
                    {
                        en: "Sake is aged in underground ice chambers",
                        es: "El sake se envejece en cámaras de hielo subterráneas",
                        de: "Sake wird in unterirdischen Eiskammern gealtert",
                        nl: "Sake wordt gerijpt in ondergrondse ijskamers"
                    },
                    {
                        en: "Barrels are buried in snow for summer aging",
                        es: "Los barriles se entierran en nieve para envejecimiento de verano",
                        de: "Fässer werden für Sommeralterung im Schnee vergraben",
                        nl: "Vaten worden begraven in sneeuw voor zomer rijping"
                    },
                    {
                        en: "Snow melt water is added to dilute sake",
                        es: "Se agrega agua de deshielo de nieve para diluir el sake",
                        de: "Schneeschmelzwasser wird hinzugefügt, um Sake zu verdünnen",
                        nl: "Sneeuwsmelt water wordt toegevoegd om sake te verdunnen"
                    },
                    {
                        en: "Sake ferments at near-freezing temperatures",
                        es: "El sake fermenta a temperaturas cercanas a la congelación",
                        de: "Sake fermentiert bei fast gefrierende Temperaturen",
                        nl: "Sake fermenteert bij bijna vriespunt temperaturen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Yukimuro-juku is the traditional method of storing sake in specially built snow cellars (yukimuro) where the constant 0-5°C temperature from packed snow creates extremely stable aging conditions, producing mellow, refined flavors over 6-12 months.",
                    es: "Yukimuro-juku es el método tradicional de almacenar sake en bodegas de nieve especialmente construidas (yukimuro) donde la temperatura constante de 0-5°C de la nieve compactada crea condiciones de envejecimiento extremadamente estables, produciendo sabores suaves y refinados durante 6-12 meses.",
                    de: "Yukimuro-juku ist die traditionelle Methode zur Lagerung von Sake in speziell gebauten Schneekellern (Yukimuro), wo die konstante Temperatur von 0-5°C durch verdichteten Schnee extrem stabile Alterungsbedingungen schafft und über 6-12 Monate milde, raffinierte Aromen erzeugt.",
                    nl: "Yukimuro-juku is de traditionele methode om sake op te slaan in speciaal gebouwde sneeuw kelders (yukimuro) waar de constante 0-5°C temperatuur van ingepakte sneeuw extreem stabiele rijpingsomstandigheden creëert, wat zachte, verfijnde smaken produceert gedurende 6-12 maanden."
                }
            },
            {
                question: {
                    en: "Which ancient Egyptian brewing method used specific bread molds to cultivate wild yeast strains for beer production?",
                    es: "¿Qué método egipcio antiguo de elaboración usaba moldes de pan específicos para cultivar cepas de levadura silvestre para la producción de cerveza?",
                    de: "Welche alte ägyptische Braumethode verwendete spezifische Brotformen, um wilde Hefestämme für die Bierproduktion zu kultivieren?",
                    nl: "Welke oude Egyptische brouw methode gebruikte specifieke brood vormen om wilde gist stammen te kweken voor bier productie?"
                },
                options: [
                    {
                        en: "Bedja-bread fermentation",
                        es: "Fermentación de pan Bedja",
                        de: "Bedja-Brot-Fermentation",
                        nl: "Bedja-brood fermentatie"
                    },
                    {
                        en: "Bappir method",
                        es: "Método Bappir",
                        de: "Bappir-Methode",
                        nl: "Bappir methode"
                    },
                    {
                        en: "Henqet bread technique",
                        es: "Técnica de pan Henqet",
                        de: "Henqet-Brottechnik",
                        nl: "Henqet brood techniek"
                    },
                    {
                        en: "Zythum cultivation",
                        es: "Cultivo Zythum",
                        de: "Zythum-Kultivierung",
                        nl: "Zythum kweek"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Bappir was the ancient Mesopotamian and Egyptian twice-baked barley bread used specifically as a yeast starter for beer brewing. These special bread molds captured and cultivated wild yeast strains essential for fermentation.",
                    es: "Bappir era el pan de cebada dos veces horneado mesopotámico y egipcio antiguo usado específicamente como iniciador de levadura para elaborar cerveza. Estos moldes de pan especiales capturaban y cultivaban cepas de levadura silvestre esenciales para la fermentación.",
                    de: "Bappir war das alte mesopotamische und ägyptische zweimal gebackene Gerstenbrot, das speziell als Hefestarter für das Bierbrauen verwendet wurde. Diese speziellen Brotformen fingen wilde Hefestämme ein und kultivierten sie für die Fermentation.",
                    nl: "Bappir was het oude Mesopotamische en Egyptische twee keer gebakken gerstebrood dat specifiek werd gebruikt als gist starter voor bier brouwen. Deze speciale brood vormen vingen wilde gist stammen en kweekten ze essentieel voor fermentatie."
                }
            },
            {
                question: {
                    en: "What is the rare Nordic technique of preserving mead by submerging sealed vessels in freezing lakes during winter months?",
                    es: "¿Cuál es la técnica nórdica rara de preservar hidromiel sumergiendo vasijas selladas en lagos congelados durante los meses de invierno?",
                    de: "Was ist die seltene nordische Technik zur Konservierung von Met durch Eintauchen versiegelter Gefäße in gefrierende Seen während der Wintermonate?",
                    nl: "Wat is de zeldzame Noordse techniek om mede te bewaren door verzegelde vaten onder te dompelen in bevriezende meren tijdens wintermaanden?"
                },
                options: [
                    {
                        en: "Isjöl preservation",
                        es: "Preservación Isjöl",
                        de: "Isjöl-Konservierung",
                        nl: "Isjöl bewaring"
                    },
                    {
                        en: "Mjöd köld-lagring",
                        es: "Mjöd köld-lagring",
                        de: "Mjöd köld-lagring",
                        nl: "Mjöd köld-lagring"
                    },
                    {
                        en: "Vintermjöd technique",
                        es: "Técnica Vintermjöd",
                        de: "Vintermjöd-Technik",
                        nl: "Vintermjöd techniek"
                    },
                    {
                        en: "Frostlagring method",
                        es: "Método Frostlagring",
                        de: "Frostlagring-Methode",
                        nl: "Frostlagring methode"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Mjöd köld-lagring (cold mead storage) was a traditional Nordic preservation method where sealed mead vessels were weighted and submerged in frozen lakes, maintaining perfect 0-4°C temperature and preventing oxidation during 3-6 month winter aging.",
                    es: "Mjöd köld-lagring (almacenamiento frío de hidromiel) era un método nórdico tradicional de preservación donde vasijas selladas de hidromiel se ponderaban y sumergían en lagos congelados, manteniendo temperatura perfecta de 0-4°C y previniendo oxidación durante 3-6 meses de envejecimiento invernal.",
                    de: "Mjöd köld-lagring (Kalte Met-Lagerung) war eine traditionelle nordische Konservierungsmethode, bei der versiegelte Met-Gefäße beschwert und in gefrorenen Seen versenkt wurden, um perfekte 0-4°C Temperatur zu halten und Oxidation während 3-6 Monaten Winteralterung zu verhindern.",
                    nl: "Mjöd köld-lagring (koude mede opslag) was een traditionele Noordse bewaar methode waarbij verzegelde mede vaten werden gewogen en ondergedompeld in bevroren meren, waarbij perfecte 0-4°C temperatuur werd gehandhaafd en oxidatie werd voorkomen tijdens 3-6 maanden winter rijping."
                }
            },
            {
                question: {
                    en: "Which traditional Vietnamese rice wine aging process involves sealing clay pots with beeswax and burying them for 20 years?",
                    es: "¿Qué proceso de envejecimiento de vino de arroz vietnamita tradicional implica sellar vasijas de barro con cera de abejas y enterrarlas durante 20 años?",
                    de: "Welcher traditionelle vietnamesische Reiswein-Alterungsprozess beinhaltet das Versiegeln von Tongefäßen mit Bienenwachs und das Vergraben für 20 Jahre?",
                    nl: "Welk traditioneel Vietnamees rijstwijn rijpingsproces houdt in dat klei potten worden verzegeld met bijenwas en 20 jaar begraven worden?"
                },
                options: [
                    {
                        en: "Ruou can underground aging",
                        es: "Envejecimiento subterráneo Ruou can",
                        de: "Ruou can unterirdische Alterung",
                        nl: "Ruou can ondergrondse rijping"
                    },
                    {
                        en: "Thuoc mo preservation",
                        es: "Preservación Thuoc mo",
                        de: "Thuoc mo Konservierung",
                        nl: "Thuoc mo bewaring"
                    },
                    {
                        en: "Ruou nep burial method",
                        es: "Método de enterramiento Ruou nep",
                        de: "Ruou nep Begräbnismethode",
                        nl: "Ruou nep begrafenis methode"
                    },
                    {
                        en: "Son Tinh earthen technique",
                        es: "Técnica de tierra Son Tinh",
                        de: "Son Tinh Erdentechnik",
                        nl: "Son Tinh aarde techniek"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "Ruou nep burial method is the traditional Vietnamese technique of sealing glutinous rice wine in clay pots with beeswax, then burying them underground for extended periods (often 10-30 years) to develop complex, mellow flavors highly prized in ceremonies.",
                    es: "El método de enterramiento Ruou nep es la técnica vietnamita tradicional de sellar vino de arroz glutinoso en vasijas de barro con cera de abejas, luego enterrarlas bajo tierra durante períodos prolongados (a menudo 10-30 años) para desarrollar sabores complejos y suaves muy valorados en ceremonias.",
                    de: "Ruou nep Begräbnismethode ist die traditionelle vietnamesische Technik, Klebreiswein in Tongefäßen mit Bienenwachs zu versiegeln und dann für längere Zeiträume (oft 10-30 Jahre) unter der Erde zu vergraben, um komplexe, milde Aromen zu entwickeln, die in Zeremonien sehr geschätzt werden.",
                    nl: "Ruou nep begrafenis methode is de traditionele Vietnamese techniek van het verzegelen van kleefrijstwijn in klei potten met bijenwas, daarna worden ze ondergronds begraven voor lange periodes (vaak 10-30 jaar) om complexe, zachte smaken te ontwikkelen die zeer gewaardeerd worden in ceremonies."
                }
            },
            {
                question: {
                    en: "What is the precise altitude range required for traditional Bolivian singani grape spirit production in the Andes?",
                    es: "¿Cuál es el rango de altitud preciso requerido para la producción tradicional del aguardiente de uva singani boliviano en los Andes?",
                    de: "Was ist der genaue Höhenbereich, der für die traditionelle bolivianische Singani-Traubengeist-Produktion in den Anden erforderlich ist?",
                    nl: "Wat is het precieze hoogte bereik vereist voor traditionele Boliviaanse singani druiven gedistilleerde drank productie in de Andes?"
                },
                options: [
                    {
                        en: "1,600-3,000 meters",
                        es: "1,600-3,000 metros",
                        de: "1.600-3.000 Meter",
                        nl: "1.600-3.000 meter"
                    },
                    {
                        en: "2,500-4,000 meters",
                        es: "2,500-4,000 metros",
                        de: "2.500-4.000 Meter",
                        nl: "2.500-4.000 meter"
                    },
                    {
                        en: "3,200-5,000 meters",
                        es: "3,200-5,000 metros",
                        de: "3.200-5.000 Meter",
                        nl: "3.200-5.000 meter"
                    },
                    {
                        en: "800-2,200 meters",
                        es: "800-2,200 metros",
                        de: "800-2.200 Meter",
                        nl: "800-2.200 meter"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Traditional Bolivian singani must be produced from Muscat of Alexandria grapes grown at 1,600-3,000 meters altitude in designated Andean valleys. This specific altitude range creates unique grape characteristics and distillation conditions essential to authentic singani.",
                    es: "El singani boliviano tradicional debe producirse a partir de uvas Moscatel de Alejandría cultivadas a 1,600-3,000 metros de altitud en valles andinos designados. Este rango de altitud específico crea características únicas de uva y condiciones de destilación esenciales para el singani auténtico.",
                    de: "Traditioneller bolivianischer Singani muss aus Muscat of Alexandria-Trauben hergestellt werden, die in 1.600-3.000 Metern Höhe in bestimmten Andentälern angebaut werden. Dieser spezifische Höhenbereich schafft einzigartige Traubenmerkmale und Destillationsbedingungen, die für authentischen Singani unerlässlich sind.",
                    nl: "Traditionele Boliviaanse singani moet worden geproduceerd van Muscat of Alexandria druiven geteeld op 1.600-3.000 meter hoogte in aangewezen Andes valleien. Dit specifieke hoogte bereik creëert unieke druiven kenmerken en distillatie omstandigheden essentieel voor authentieke singani."
                }
            },
            {
                question: {
                    en: "Which extinct traditional Icelandic fermented shark liver beverage was consumed during winter solstice celebrations?",
                    es: "¿Qué bebida extinta tradicional islandesa de hígado de tiburón fermentado se consumía durante las celebraciones del solsticio de invierno?",
                    de: "Welches ausgestorbene traditionelle isländische fermentierte Haifischleber-Getränk wurde während Wintersonnenwende-Feiern konsumiert?",
                    nl: "Welke uitgestorven traditionele IJslandse gefermenteerde haai lever drank werd geconsumeerd tijdens winterzonnewende vieringen?"
                },
                options: [
                    {
                        en: "Hákarl-lögur",
                        es: "Hákarl-lögur",
                        de: "Hákarl-lögur",
                        nl: "Hákarl-lögur"
                    },
                    {
                        en: "Skata-vín",
                        es: "Skata-vín",
                        de: "Skata-vín",
                        nl: "Skata-vín"
                    },
                    {
                        en: "This beverage never existed",
                        es: "Esta bebida nunca existió",
                        de: "Dieses Getränk existierte nie",
                        nl: "Deze drank heeft nooit bestaan"
                    },
                    {
                        en: "Þorramatur elixir",
                        es: "Elixir Þorramatur",
                        de: "Þorramatur-Elixier",
                        nl: "Þorramatur elixer"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "This is a fabricated beverage. While Iceland has hákarl (fermented shark meat) as traditional food, there is no historical evidence of shark liver beverages. Traditional Icelandic winter drinks included brennivín and various mead varieties.",
                    es: "Esta es una bebida fabricada. Aunque Islandia tiene hákarl (carne de tiburón fermentada) como comida tradicional, no hay evidencia histórica de bebidas de hígado de tiburón. Las bebidas islandesas tradicionales de invierno incluían brennivín y varias variedades de hidromiel.",
                    de: "Dies ist ein erfundenes Getränk. Während Island Hákarl (fermentiertes Haifischfleisch) als traditionelles Essen hat, gibt es keine historischen Beweise für Haifischleber-Getränke. Traditionelle isländische Wintergetränke umfassten Brennivín und verschiedene Met-Sorten.",
                    nl: "Dit is een verzonnen drank. Hoewel IJsland hákarl (gefermenteerd haai vlees) heeft als traditioneel voedsel, is er geen historisch bewijs van haai lever dranken. Traditionele IJslandse winter dranken omvatten brennivín en verschillende mede variëteiten."
                }
            },
            {
                question: {
                    en: "What is the traditional Bhutanese ara distillation method that uses specific altitude-dependent boiling points?",
                    es: "¿Cuál es el método tradicional butanés de destilación de ara que usa puntos de ebullición dependientes de altitud específicos?",
                    de: "Was ist die traditionelle bhutanesische Ara-Destillationsmethode, die spezifische höhenabhängige Siedepunkte verwendet?",
                    nl: "Wat is de traditionele Bhutanese ara distillatie methode die specifieke hoogte-afhankelijke kookpunten gebruikt?"
                },
                options: [
                    {
                        en: "Thimphu high-altitude distillation",
                        es: "Destilación de gran altitud Thimphu",
                        de: "Thimphu-Höhen-Destillation",
                        nl: "Thimphu hoog-gelegen distillatie"
                    },
                    {
                        en: "Chang distillation at 2,500-3,500m",
                        es: "Destilación Chang a 2,500-3,500m",
                        de: "Chang-Destillation bei 2.500-3.500m",
                        nl: "Chang distillatie op 2.500-3.500m"
                    },
                    {
                        en: "Paro valley low-pressure method",
                        es: "Método de baja presión del valle Paro",
                        de: "Paro-Tal-Niederdruckmethode",
                        nl: "Paro vallei lage druk methode"
                    },
                    {
                        en: "Druk atmospheric distillation",
                        es: "Destilación atmosférica Druk",
                        de: "Druk atmosphärische Destillation",
                        nl: "Druk atmosferische distillatie"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Traditional Bhutanese ara (grain spirit) distillation occurs at 2,500-3,500 meters where reduced atmospheric pressure lowers water's boiling point to 85-92°C, requiring master distillers to adjust timing and temperature for proper alcohol separation from chang (barley beer).",
                    es: "La destilación tradicional butanesa de ara (aguardiente de grano) ocurre a 2,500-3,500 metros donde la presión atmosférica reducida baja el punto de ebullición del agua a 85-92°C, requiriendo que maestros destiladores ajusten el tiempo y temperatura para la separación adecuada del alcohol del chang (cerveza de cebada).",
                    de: "Traditionelle bhutanesische Ara-Destillation (Getreidegeist) erfolgt bei 2.500-3.500 Metern, wo reduzierter atmosphärischer Druck den Siedepunkt von Wasser auf 85-92°C senkt, was Meisterdestillateure erfordert, Zeit und Temperatur für die richtige Alkoholtrennung von Chang (Gerstenbier) anzupassen.",
                    nl: "Traditionele Bhutanese ara (graan gedistilleerde drank) distillatie vindt plaats op 2.500-3.500 meter waar verminderde atmosferische druk het kookpunt van water verlaagt naar 85-92°C, waarbij meester distilleerders de timing en temperatuur moeten aanpassen voor juiste alcohol scheiding van chang (gerst bier)."
                }
            },
            {
                question: {
                    en: "Which traditional Georgian wine-making technique uses buried qvevri clay vessels for 6-month skin-contact fermentation?",
                    es: "¿Qué técnica georgiana tradicional de elaboración de vino usa vasijas de barro qvevri enterradas para fermentación de 6 meses en contacto con la piel?",
                    de: "Welche traditionelle georgische Weinherstellungstechnik verwendet vergrabene Qvevri-Tongefäße für 6-monatige Hautkontakt-Fermentation?",
                    nl: "Welke traditionele Georgische wijn maak techniek gebruikt begraven qvevri klei vaten voor 6 maanden schil-contact fermentatie?"
                },
                options: [
                    {
                        en: "Kakhetian qvevri method",
                        es: "Método qvevri kakheti",
                        de: "Kachetische Qvevri-Methode",
                        nl: "Kakhetische qvevri methode"
                    },
                    {
                        en: "Imeretian short maceration",
                        es: "Maceración corta imereti",
                        de: "Imeretische Kurzmaceration",
                        nl: "Imeretische korte maceratie"
                    },
                    {
                        en: "Both techniques are used",
                        es: "Ambas técnicas se usan",
                        de: "Beide Techniken werden verwendet",
                        nl: "Beide technieken worden gebruikt"
                    },
                    {
                        en: "Racha underground aging",
                        es: "Envejecimiento subterráneo Racha",
                        de: "Racha-Untergrund-Alterung",
                        nl: "Racha ondergrondse rijping"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Kakhetian qvevri method is the traditional Georgian technique involving 6-month full skin-contact fermentation in buried clay vessels, producing amber wines with intense tannins. The Imeretian method uses shorter 1-2 month maceration for lighter styles.",
                    es: "El método qvevri kakheti es la técnica georgiana tradicional que implica fermentación de contacto completo con la piel de 6 meses en vasijas de barro enterradas, produciendo vinos ámbar con taninos intensos. El método imereti usa maceración más corta de 1-2 meses para estilos más ligeros.",
                    de: "Die Kachetische Qvevri-Methode ist die traditionelle georgische Technik mit 6-monatiger vollständiger Hautkontakt-Fermentation in vergrabenen Tongefäßen, die Bernsteinweine mit intensiven Tanninen produziert. Die Imeretische Methode verwendet kürzere 1-2 Monat Maceration für leichtere Stile.",
                    nl: "De Kakhetische qvevri methode is de traditionele Georgische techniek waarbij 6 maanden volledig schil-contact fermentatie in begraven klei vaten plaatsvindt, wat amber wijnen met intense tannines produceert. De Imeretische methode gebruikt kortere 1-2 maand maceratie voor lichtere stijlen."
                }
            },
            {
                question: {
                    en: "What is the rare Australian Aboriginal technique of fermenting witchetty grub honey into ceremonial beverages?",
                    es: "¿Cuál es la técnica rara de aborígenes australianos de fermentar miel de larva witchetty en bebidas ceremoniales?",
                    de: "Was ist die seltene australische Aborigine-Technik zur Fermentation von Witchetty-Maden-Honig zu zeremoniellen Getränken?",
                    nl: "Wat is de zeldzame Australische Aboriginal techniek van het fermenteren van witchetty made honing tot ceremoniële dranken?"
                },
                options: [
                    {
                        en: "Maku-maku fermentation",
                        es: "Fermentación Maku-maku",
                        de: "Maku-maku-Fermentation",
                        nl: "Maku-maku fermentatie"
                    },
                    {
                        en: "Sugarbag mead method",
                        es: "Método de hidromiel Sugarbag",
                        de: "Sugarbag-Met-Methode",
                        nl: "Sugarbag mede methode"
                    },
                    {
                        en: "This practice is not documented",
                        es: "Esta práctica no está documentada",
                        de: "Diese Praxis ist nicht dokumentiert",
                        nl: "Deze praktijk is niet gedocumenteerd"
                    },
                    {
                        en: "Coolamon vessel brewing",
                        es: "Elaboración en vasija Coolamon",
                        de: "Coolamon-Gefäß-Brauen",
                        nl: "Coolamon vat brouwen"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "This is not a documented traditional practice. Aboriginal Australians did use sugarbag (native bee honey) and consumed fermented sap drinks, but witchetty grub honey fermentation is not part of established cultural traditions or anthropological records.",
                    es: "Esta no es una práctica tradicional documentada. Los aborígenes australianos sí usaban sugarbag (miel de abejas nativas) y consumían bebidas de savia fermentada, pero la fermentación de miel de larva witchetty no es parte de tradiciones culturales establecidas o registros antropológicos.",
                    de: "Dies ist keine dokumentierte traditionelle Praxis. Australische Aborigines verwendeten Sugarbag (einheimischen Bienenhonig) und konsumierten fermentierte Saftgetränke, aber Witchetty-Maden-Honig-Fermentation ist nicht Teil etablierter kultureller Traditionen oder anthropologischer Aufzeichnungen.",
                    nl: "Dit is geen gedocumenteerde traditionele praktijk. Australische Aboriginals gebruikten wel sugarbag (inheemse bijen honing) en consumeerden gefermenteerde sap dranken, maar witchetty made honing fermentatie is geen onderdeel van gevestigde culturele tradities of antropologische records."
                }
            },
            {
                question: {
                    en: "Which traditional Caucasian honey wine aging technique involves sealing vessels in mountain caves at precisely 2,800 meters?",
                    es: "¿Qué técnica caucásica tradicional de envejecimiento de vino de miel implica sellar vasijas en cuevas de montaña a precisamente 2,800 metros?",
                    de: "Welche traditionelle kaukasische Honigwein-Alterungstechnik beinhaltet das Versiegeln von Gefäßen in Berghöhlen bei genau 2.800 Metern?",
                    nl: "Welke traditionele Kaukasische honing wijn rijpings techniek houdt in dat vaten worden verzegeld in berg grotten op precies 2.800 meter?"
                },
                options: [
                    {
                        en: "Georgian cave-aged melikra",
                        es: "Melikra envejecido en cueva georgiana",
                        de: "Georgischer höhlengelagerter Melikra",
                        nl: "Georgische grot-gerijpte melikra"
                    },
                    {
                        en: "Armenian mountain mead method",
                        es: "Método de hidromiel de montaña armenia",
                        de: "Armenische Berg-Met-Methode",
                        nl: "Armeense berg mede methode"
                    },
                    {
                        en: "Ossetian high-altitude aging",
                        es: "Envejecimiento a gran altitud osetio",
                        de: "Ossetische Höhen-Alterung",
                        nl: "Ossetische hoog-gelegen rijping"
                    },
                    {
                        en: "Specific altitude requirements are not traditional",
                        es: "Los requisitos de altitud específicos no son tradicionales",
                        de: "Spezifische Höhenanforderungen sind nicht traditionell",
                        nl: "Specifieke hoogte vereisten zijn niet traditioneel"
                    }
                ],
                correct: 3,
                explanation: {
                    en: "While Caucasian cultures do age honey wines in mountain caves for temperature stability, there are no traditional requirements for precise altitude. Cave selection is based on consistent cool temperatures (8-12°C) and humidity, not specific elevation measurements.",
                    es: "Aunque las culturas caucásicas sí envejecen vinos de miel en cuevas de montaña para estabilidad de temperatura, no hay requisitos tradicionales de altitud precisa. La selección de cuevas se basa en temperaturas frescas consistentes (8-12°C) y humedad, no en medidas de elevación específicas.",
                    de: "Während kaukasische Kulturen Honigweine in Berghöhlen für Temperaturstabilität altern, gibt es keine traditionellen Anforderungen an genaue Höhe. Höhlenwahl basiert auf konstanten kühlen Temperaturen (8-12°C) und Feuchtigkeit, nicht auf spezifischen Höhenmessungen.",
                    nl: "Hoewel Kaukasische culturen honing wijnen wel rijpen in berg grotten voor temperatuur stabiliteit, zijn er geen traditionele vereisten voor precieze hoogte. Grot selectie is gebaseerd op consistente koele temperaturen (8-12°C) en vochtigheid, niet op specifieke hoogte metingen."
                }
            },
            {
                question: {
                    en: "What is the traditional Filipino tapuy rice wine fermentation starter cake made from specific mold cultures called?",
                    es: "¿Cómo se llama el pastel iniciador de fermentación tradicional filipino para vino de arroz tapuy hecho de cultivos de moho específicos?",
                    de: "Wie heißt der traditionelle philippinische Tapuy-Reiswein-Fermentations-Starter-Kuchen aus spezifischen Schimmelkulturen?",
                    nl: "Hoe heet de traditionele Filipijnse tapuy rijstwijn fermentatie starter cake gemaakt van specifieke schimmel culturen?"
                },
                options: [
                    {
                        en: "Bubod",
                        es: "Bubod",
                        de: "Bubod",
                        nl: "Bubod"
                    },
                    {
                        en: "Ragi",
                        es: "Ragi",
                        de: "Ragi",
                        nl: "Ragi"
                    },
                    {
                        en: "Nuruk",
                        es: "Nuruk",
                        de: "Nuruk",
                        nl: "Nuruk"
                    },
                    {
                        en: "Jiuqu",
                        es: "Jiuqu",
                        de: "Jiuqu",
                        nl: "Jiuqu"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Bubod is the traditional Filipino fermentation starter made from rice, ginger, and specific mold cultures (Aspergillus, Rhizopus, yeast). These starter cakes are dried and stored, then crumbled into cooked rice to ferment tapuy and basi wines.",
                    es: "Bubod es el iniciador de fermentación filipino tradicional hecho de arroz, jengibre y cultivos de moho específicos (Aspergillus, Rhizopus, levadura). Estos pasteles iniciadores se secan y almacenan, luego se desmenuzan en arroz cocido para fermentar vinos tapuy y basi.",
                    de: "Bubod ist der traditionelle philippinische Fermentationsstarter aus Reis, Ingwer und spezifischen Schimmelkulturen (Aspergillus, Rhizopus, Hefe). Diese Starter-Kuchen werden getrocknet und gelagert, dann in gekochten Reis zerbröselt, um Tapuy- und Basi-Weine zu fermentieren.",
                    nl: "Bubod is de traditionele Filipijnse fermentatie starter gemaakt van rijst, gember en specifieke schimmel culturen (Aspergillus, Rhizopus, gist). Deze starter cakes worden gedroogd en opgeslagen, daarna verkruimeld in gekookte rijst om tapuy en basi wijnen te fermenteren."
                }
            },
            {
                question: {
                    en: "Which traditional Saharan Tuareg beverage involves fermenting dates in buried goatskin bags for desert preservation?",
                    es: "¿Qué bebida tradicional tuareg sahariana implica fermentar dátiles en bolsas de piel de cabra enterradas para preservación en el desierto?",
                    de: "Welches traditionelle Sahara-Tuareg-Getränk beinhaltet das Fermentieren von Datteln in vergrabenen Ziegenleder-Beuteln zur Wüstenkonservierung?",
                    nl: "Welke traditionele Sahara Tuareg drank houdt in dat dadels worden gefermenteerd in begraven geitenleren zakken voor woestijn bewaring?"
                },
                options: [
                    {
                        en: "Lagmi fermentation",
                        es: "Fermentación Lagmi",
                        de: "Lagmi-Fermentation",
                        nl: "Lagmi fermentatie"
                    },
                    {
                        en: "Deglet-nour wine",
                        es: "Vino Deglet-nour",
                        de: "Deglet-nour-Wein",
                        nl: "Deglet-nour wijn"
                    },
                    {
                        en: "Tamar nabidh method",
                        es: "Método Tamar nabidh",
                        de: "Tamar-nabidh-Methode",
                        nl: "Tamar nabidh methode"
                    },
                    {
                        en: "This specific practice is not documented",
                        es: "Esta práctica específica no está documentada",
                        de: "Diese spezifische Praxis ist nicht dokumentiert",
                        nl: "Deze specifieke praktijk is niet gedocumenteerd"
                    }
                ],
                correct: 3,
                explanation: {
                    en: "While Tuareg do consume date palm sap (lagmi) and various fermented milk beverages, the specific practice of fermenting dates in buried goatskin bags is not documented in anthropological literature. Traditional Tuareg fermented beverages focus on milk and palm sap.",
                    es: "Aunque los tuareg sí consumen savia de palma datilera (lagmi) y varias bebidas de leche fermentada, la práctica específica de fermentar dátiles en bolsas de piel de cabra enterradas no está documentada en literatura antropológica. Las bebidas fermentadas tuareg tradicionales se centran en leche y savia de palma.",
                    de: "Während Tuareg Dattelpalmsaft (Lagmi) und verschiedene fermentierte Milchgetränke konsumieren, ist die spezifische Praxis des Fermentierens von Datteln in vergrabenen Ziegenleder-Beuteln in der anthropologischen Literatur nicht dokumentiert. Traditionelle Tuareg-Fermentgetränke konzentrieren sich auf Milch und Palmsaft.",
                    nl: "Hoewel Tuareg wel dadel palm sap (lagmi) en verschillende gefermenteerde melk dranken consumeren, is de specifieke praktijk van het fermenteren van dadels in begraven geitenleren zakken niet gedocumenteerd in antropologische literatuur. Traditionele Tuareg gefermenteerde dranken focussen op melk en palm sap."
                }
            },
            {
                question: {
                    en: "What is the traditional Polish technique of aging honey wine in oak barrels previously used for centuries of mead production?",
                    es: "¿Cuál es la técnica polaca tradicional de envejecer vino de miel en barriles de roble usados previamente durante siglos para producción de hidromiel?",
                    de: "Was ist die traditionelle polnische Technik zur Alterung von Honigwein in Eichenfässern, die jahrhundertelang zuvor für Met-Produktion verwendet wurden?",
                    nl: "Wat is de traditionele Poolse techniek van het rijpen van honing wijn in eiken vaten die eeuwen lang eerder werden gebruikt voor mede productie?"
                },
                options: [
                    {
                        en: "Lipiec seasoning method",
                        es: "Método de curado Lipiec",
                        de: "Lipiec-Gewürzmethode",
                        nl: "Lipiec kruiden methode"
                    },
                    {
                        en: "Stare miody barrel tradition",
                        es: "Tradición de barril Stare miody",
                        de: "Stare miody Fass-Tradition",
                        nl: "Stare miody vat traditie"
                    },
                    {
                        en: "Dziedzic oak heritage",
                        es: "Herencia de roble Dziedzic",
                        de: "Dziedzic-Eichen-Erbe",
                        nl: "Dziedzic eiken erfgoed"
                    },
                    {
                        en: "Półtorak aging technique",
                        es: "Técnica de envejecimiento Półtorak",
                        de: "Półtorak-Alterungstechnik",
                        nl: "Półtorak rijpings techniek"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Stare miody (old meads) refers to the Polish tradition of using oak barrels seasoned over centuries of continuous mead production. These heritage barrels impart unique microflora and complex flavors, with some barrels in use for 200+ years in monastery cellars.",
                    es: "Stare miody (hidromiel viejo) se refiere a la tradición polaca de usar barriles de roble curados durante siglos de producción continua de hidromiel. Estos barriles patrimoniales imparten microflora única y sabores complejos, con algunos barriles en uso durante más de 200 años en bodegas de monasterios.",
                    de: "Stare miody (alte Met) bezieht sich auf die polnische Tradition, Eichenfässer zu verwenden, die über Jahrhunderte kontinuierlicher Met-Produktion gewürzt wurden. Diese Erbe-Fässer verleihen einzigartige Mikroflora und komplexe Aromen, wobei einige Fässer seit über 200 Jahren in Klosterkellern verwendet werden.",
                    nl: "Stare miody (oude medes) verwijst naar de Poolse traditie van het gebruik van eiken vaten gekruid over eeuwen van continue mede productie. Deze erfgoed vaten geven unieke microflora en complexe smaken, waarbij sommige vaten meer dan 200 jaar in gebruik zijn in klooster kelders."
                }
            },
            {
                question: {
                    en: "Which traditional Rwandan banana beer fermentation method uses specific highland banana varieties and sorghum?",
                    es: "¿Qué método tradicional ruandés de fermentación de cerveza de plátano usa variedades específicas de plátano de las tierras altas y sorgo?",
                    de: "Welche traditionelle ruandische Bananenbier-Fermentationsmethode verwendet spezifische Hochland-Bananensorten und Sorghum?",
                    nl: "Welke traditionele Rwandese banaan bier fermentatie methode gebruikt specifieke hoogland banaan variëteiten en sorghum?"
                },
                options: [
                    {
                        en: "Urwagwa production",
                        es: "Producción Urwagwa",
                        de: "Urwagwa-Produktion",
                        nl: "Urwagwa productie"
                    },
                    {
                        en: "Igikoma brewing",
                        es: "Elaboración Igikoma",
                        de: "Igikoma-Brauen",
                        nl: "Igikoma brouwen"
                    },
                    {
                        en: "Ikigage fermentation",
                        es: "Fermentación Ikigage",
                        de: "Ikigage-Fermentation",
                        nl: "Ikigage fermentatie"
                    },
                    {
                        en: "Inkangaza method",
                        es: "Método Inkangaza",
                        de: "Inkangaza-Methode",
                        nl: "Inkangaza methode"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Urwagwa is the traditional Rwandan banana beer made from specific highland banana varieties (igitoki, igisahira) mixed with roasted sorghum and special grass (umutsima w'isombe) for natural yeast. The fermentation process creates a mildly alcoholic, slightly sour beverage central to Rwandan culture.",
                    es: "Urwagwa es la cerveza de plátano ruandesa tradicional hecha de variedades específicas de plátano de las tierras altas (igitoki, igisahira) mezcladas con sorgo tostado y hierba especial (umutsima w'isombe) para levadura natural. El proceso de fermentación crea una bebida ligeramente alcohólica y ligeramente ácida central en la cultura ruandesa.",
                    de: "Urwagwa ist das traditionelle ruandische Bananenbier aus spezifischen Hochland-Bananensorten (Igitoki, Igisahira), gemischt mit geröstetem Sorghum und speziellem Gras (Umutsima w'isombe) für natürliche Hefe. Der Fermentationsprozess erzeugt ein leicht alkoholisches, leicht saures Getränk, das zentral für die ruandische Kultur ist.",
                    nl: "Urwagwa is het traditionele Rwandese banaan bier gemaakt van specifieke hoogland banaan variëteiten (igitoki, igisahira) gemengd met geroosterde sorghum en speciaal gras (umutsima w'isombe) voor natuurlijke gist. Het fermentatie proces creëert een licht alcoholische, licht zure drank centraal in de Rwandese cultuur."
                }
            },
            {
                question: {
                    en: "What is the rare traditional Sardinian myrtle liqueur aging process involving sea-cave maturation?",
                    es: "¿Cuál es el raro proceso tradicional sardo de envejecimiento de licor de mirto que implica maduración en cuevas marinas?",
                    de: "Was ist der seltene traditionelle sardische Myrten-Likör-Alterungsprozess mit Meeres-Höhlen-Reifung?",
                    nl: "Wat is het zeldzame traditionele Sardijnse mirte likeur rijpingsproces waarbij zee-grot maturatie plaatsvindt?"
                },
                options: [
                    {
                        en: "Mirto di mare method",
                        es: "Método Mirto di mare",
                        de: "Mirto di mare Methode",
                        nl: "Mirto di mare methode"
                    },
                    {
                        en: "Grotta aging tradition",
                        es: "Tradición de envejecimiento Grotta",
                        de: "Grotta-Alterungstradition",
                        nl: "Grotta rijpings traditie"
                    },
                    {
                        en: "Sea caves are not used traditionally",
                        es: "Las cuevas marinas no se usan tradicionalmente",
                        de: "Meereshöhlen werden traditionell nicht verwendet",
                        nl: "Zee grotten worden traditioneel niet gebruikt"
                    },
                    {
                        en: "Costa Smeralda technique",
                        es: "Técnica Costa Smeralda",
                        de: "Costa Smeralda Technik",
                        nl: "Costa Smeralda techniek"
                    }
                ],
                correct: 2,
                explanation: {
                    en: "Traditional Sardinian mirto (myrtle liqueur) production does not involve sea-cave aging. The authentic process macerates myrtle berries in alcohol for 40-60 days in cool, dark cellars. Some modern producers use caves for temperature control, but this is not a traditional method.",
                    es: "La producción tradicional sarda de mirto (licor de mirto) no implica envejecimiento en cuevas marinas. El proceso auténtico macera bayas de mirto en alcohol durante 40-60 días en bodegas frescas y oscuras. Algunos productores modernos usan cuevas para control de temperatura, pero este no es un método tradicional.",
                    de: "Traditionelle sardische Mirto-Produktion (Myrten-Likör) beinhaltet keine Meeres-Höhlen-Alterung. Der authentische Prozess mazeriert Myrtenbeeren in Alkohol für 40-60 Tage in kühlen, dunklen Kellern. Einige moderne Produzenten verwenden Höhlen zur Temperaturkontrolle, aber dies ist keine traditionelle Methode.",
                    nl: "Traditionele Sardijnse mirto (mirte likeur) productie houdt geen zee-grot rijping in. Het authentieke proces macereert mirte bessen in alcohol voor 40-60 dagen in koele, donkere kelders. Sommige moderne producenten gebruiken grotten voor temperatuur controle, maar dit is geen traditionele methode."
                }
            },
            {
                question: {
                    en: "Which traditional Nepalese millet beer technique uses specific fungal starters cultivated on rice straw?",
                    es: "¿Qué técnica tradicional nepalí de cerveza de mijo usa iniciadores fúngicos específicos cultivados en paja de arroz?",
                    de: "Welche traditionelle nepalesische Hirse-Bier-Technik verwendet spezifische Pilzstarter, die auf Reisstroh kultiviert werden?",
                    nl: "Welke traditionele Nepalese gierst bier techniek gebruikt specifieke schimmel starters gekweekt op rijststro?"
                },
                options: [
                    {
                        en: "Marcha starter preparation",
                        es: "Preparación de iniciador Marcha",
                        de: "Marcha-Starter-Vorbereitung",
                        nl: "Marcha starter bereiding"
                    },
                    {
                        en: "Tongba fermentation culture",
                        es: "Cultura de fermentación Tongba",
                        de: "Tongba-Fermentationskultur",
                        nl: "Tongba fermentatie cultuur"
                    },
                    {
                        en: "Chhyang yeast method",
                        es: "Método de levadura Chhyang",
                        de: "Chhyang-Hefe-Methode",
                        nl: "Chhyang gist methode"
                    },
                    {
                        en: "Jaanr cultivation technique",
                        es: "Técnica de cultivo Jaanr",
                        de: "Jaanr-Kultivierungstechnik",
                        nl: "Jaanr kweek techniek"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Marcha is the traditional Nepalese fermentation starter made by cultivating specific fungi (Mucor, Rhizopus, Saccharomyces) on rice flour cakes wrapped in rice straw or fern leaves. These dried starter cakes are then crumbled into cooked millet to produce tongba, chhyang, and jaanr beverages.",
                    es: "Marcha es el iniciador de fermentación nepalí tradicional hecho cultivando hongos específicos (Mucor, Rhizopus, Saccharomyces) en pasteles de harina de arroz envueltos en paja de arroz u hojas de helecho. Estos pasteles iniciadores secos se desmenuzan luego en mijo cocido para producir bebidas tongba, chhyang y jaanr.",
                    de: "Marcha ist der traditionelle nepalesische Fermentationsstarter, der durch Kultivierung spezifischer Pilze (Mucor, Rhizopus, Saccharomyces) auf Reismehlkuchen hergestellt wird, die in Reisstroh oder Farnblätter gewickelt sind. Diese getrockneten Starter-Kuchen werden dann in gekochte Hirse zerbröselt, um Tongba-, Chhyang- und Jaanr-Getränke zu produzieren.",
                    nl: "Marcha is de traditionele Nepalese fermentatie starter gemaakt door het kweken van specifieke schimmels (Mucor, Rhizopus, Saccharomyces) op rijstmeel cakes gewikkeld in rijststro of varen bladeren. Deze gedroogde starter cakes worden daarna verkruimeld in gekookte gierst om tongba, chhyang en jaanr dranken te produceren."
                }
            },
            {
                question: {
                    en: "What is the traditional Mexican pulque aging method using volcanic stone fermentation vessels called tlaxcales?",
                    es: "¿Cuál es el método tradicional mexicano de envejecimiento de pulque usando vasijas de fermentación de piedra volcánica llamadas tlaxcales?",
                    de: "Was ist die traditionelle mexikanische Pulque-Alterungsmethode mit vulkanischen Stein-Fermentationsgefäßen namens Tlaxcales?",
                    nl: "Wat is de traditionele Mexicaanse pulque rijpings methode waarbij vulkanische steen fermentatie vaten genaamd tlaxcales worden gebruikt?"
                },
                options: [
                    {
                        en: "Tezontle stone vessels are used",
                        es: "Se usan vasijas de piedra tezontle",
                        de: "Tezontle-Steingefäße werden verwendet",
                        nl: "Tezontle stenen vaten worden gebruikt"
                    },
                    {
                        en: "Wood barrels are traditional, not stone",
                        es: "Los barriles de madera son tradicionales, no piedra",
                        de: "Holzfässer sind traditionell, nicht Stein",
                        nl: "Houten vaten zijn traditioneel, niet steen"
                    },
                    {
                        en: "Tlaxcales refers to the fermentation cloths",
                        es: "Tlaxcales se refiere a las telas de fermentación",
                        de: "Tlaxcales bezieht sich auf die Fermentationstücher",
                        nl: "Tlaxcales verwijst naar de fermentatie doeken"
                    },
                    {
                        en: "Volcanic stone vessels are not documented",
                        es: "Las vasijas de piedra volcánica no están documentadas",
                        de: "Vulkanische Steingefäße sind nicht dokumentiert",
                        nl: "Vulkanische stenen vaten zijn niet gedocumenteerd"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Traditional pulque fermentation uses wooden barrels or animal hide vessels, not volcanic stone. The fermented aguamiel (agave sap) is collected in wooden barrels (barricas) or historically in cueros (cowhide containers). Stone vessels were not used for pulque aging.",
                    es: "La fermentación tradicional de pulque usa barriles de madera o recipientes de piel animal, no piedra volcánica. El aguamiel fermentado (savia de agave) se recoge en barriles de madera (barricas) o históricamente en cueros (contenedores de piel de vaca). Las vasijas de piedra no se usaron para envejecimiento de pulque.",
                    de: "Traditionelle Pulque-Fermentation verwendet Holzfässer oder Tierhautgefäße, nicht Vulkanstein. Der fermentierte Aguamiel (Agavensaft) wird in Holzfässern (Barricas) oder historisch in Cueros (Kuhhautbehältern) gesammelt. Steingefäße wurden nicht für Pulque-Alterung verwendet.",
                    nl: "Traditionele pulque fermentatie gebruikt houten vaten of dierenhuid vaten, niet vulkanische steen. De gefermenteerde aguamiel (agave sap) wordt verzameld in houten vaten (barricas) of historisch in cueros (koeienhuid containers). Stenen vaten werden niet gebruikt voor pulque rijping."
                }
            },
            {
                question: {
                    en: "Which rare traditional Kyrgyz kumis preservation method involves freezing in leather sacks during mountain crossings?",
                    es: "¿Qué método raro tradicional kirguís de preservación de kumis implica congelar en sacos de cuero durante cruces de montañas?",
                    de: "Welche seltene traditionelle kirgisische Kumis-Konservierungsmethode beinhaltet das Einfrieren in Ledersäcken während Bergüberquerungen?",
                    nl: "Welke zeldzame traditionele Kirgizische kumis bewaar methode houdt in dat wordt bevroren in leren zakken tijdens berg oversteken?"
                },
                options: [
                    {
                        en: "Tash-bel freezing method",
                        es: "Método de congelación Tash-bel",
                        de: "Tash-bel-Gefriermethode",
                        nl: "Tash-bel vries methode"
                    },
                    {
                        en: "Similar to Mongolian airag preservation",
                        es: "Similar a la preservación mongol de airag",
                        de: "Ähnlich wie mongolische Airag-Konservierung",
                        nl: "Vergelijkbaar met Mongoolse airag bewaring"
                    },
                    {
                        en: "Kymyz mountain transport",
                        es: "Transporte de montaña Kymyz",
                        de: "Kymyz-Bergtransport",
                        nl: "Kymyz berg transport"
                    },
                    {
                        en: "Silk Road cooling technique",
                        es: "Técnica de enfriamiento Ruta de la Seda",
                        de: "Seidenstraßen-Kühltechnik",
                        nl: "Zijderoute koel techniek"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Kyrgyz kumis preservation during mountain travel is essentially the same as Mongolian airag methods - freezing the fermented mare's milk in leather sacks (sabas) to create portable frozen blocks. Both cultures share this practical nomadic preservation technique for high-altitude travel.",
                    es: "La preservación kirguís de kumis durante viajes de montaña es esencialmente la misma que los métodos mongoles de airag - congelar la leche de yegua fermentada en sacos de cuero (sabas) para crear bloques congelados portátiles. Ambas culturas comparten esta técnica práctica de preservación nómada para viajes de gran altitud.",
                    de: "Kirgisische Kumis-Konservierung während Bergreisen ist im Wesentlichen die gleiche wie mongolische Airag-Methoden - Einfrieren der fermentierten Stutenmilch in Ledersäcken (Sabas), um tragbare gefrorene Blöcke zu schaffen. Beide Kulturen teilen diese praktische nomadische Konservierungstechnik für Hochgebirgsreisen.",
                    nl: "Kirgizische kumis bewaring tijdens berg reizen is in wezen hetzelfde als Mongoolse airag methoden - bevriezen van de gefermenteerde merrie melk in leren zakken (sabas) om draagbare bevroren blokken te creëren. Beide culturen delen deze praktische nomadische bewaar techniek voor hoog-gelegen reizen."
                }
            },
            {
                question: {
                    en: "What is the traditional Slovenian medica (honey wine) technique of adding specific alpine herbs during fermentation called?",
                    es: "¿Cómo se llama la técnica tradicional eslovena de medica (vino de miel) de agregar hierbas alpinas específicas durante la fermentación?",
                    de: "Wie heißt die traditionelle slowenische Medica-Technik (Honigwein), bei der während der Fermentation spezifische Alpenkräuter hinzugefügt werden?",
                    nl: "Hoe heet de traditionele Sloveense medica (honing wijn) techniek van het toevoegen van specifieke alpine kruiden tijdens fermentatie?"
                },
                options: [
                    {
                        en: "Zelišča medica method",
                        es: "Método Zelišča medica",
                        de: "Zelišča medica Methode",
                        nl: "Zelišča medica methode"
                    },
                    {
                        en: "Bohinjska honey preparation",
                        es: "Preparación de miel Bohinjska",
                        de: "Bohinjska-Honig-Vorbereitung",
                        nl: "Bohinjska honing bereiding"
                    },
                    {
                        en: "Medeni napitek technique",
                        es: "Técnica Medeni napitek",
                        de: "Medeni napitek Technik",
                        nl: "Medeni napitek techniek"
                    },
                    {
                        en: "Herb additions vary by producer tradition",
                        es: "Las adiciones de hierbas varían según tradición del productor",
                        de: "Kräuterzugaben variieren nach Produzententradition",
                        nl: "Kruiden toevoegingen variëren per producent traditie"
                    }
                ],
                correct: 3,
                explanation: {
                    en: "Traditional Slovenian medica recipes vary significantly by family and regional tradition. While alpine herbs (meadowsweet, linden, thyme) are commonly used, there is no standardized technique name. Each producer has inherited family recipes with specific herb combinations and timing.",
                    es: "Las recetas tradicionales eslovenas de medica varían significativamente según la familia y la tradición regional. Aunque las hierbas alpinas (reina de los prados, tilo, tomillo) se usan comúnmente, no hay un nombre de técnica estandarizado. Cada productor ha heredado recetas familiares con combinaciones de hierbas y tiempos específicos.",
                    de: "Traditionelle slowenische Medica-Rezepte variieren erheblich nach Familie und regionaler Tradition. Während Alpenkräuter (Mädesüß, Linde, Thymian) häufig verwendet werden, gibt es keinen standardisierten Technik-Namen. Jeder Produzent hat Familienrezepte mit spezifischen Kräuterkombinationen und Zeitpunkten geerbt.",
                    nl: "Traditionele Sloveense medica recepten variëren aanzienlijk per familie en regionale traditie. Hoewel alpine kruiden (moerasspirea, linde, tijm) vaak worden gebruikt, is er geen gestandaardiseerde techniek naam. Elke producent heeft familie recepten geërfd met specifieke kruiden combinaties en timing."
                }
            }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
