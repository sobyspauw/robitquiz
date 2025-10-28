(function() {
  const level1 = {
    questions: [
      {
        question: {
          en: "Which of these is a type of shellfish?",
          es: "¿Cuál de estos es un tipo de marisco?",
          de: "Welches davon ist eine Art von Schalentier?",
          nl: "Welke hiervan is een type schaaldier?"
        },
        options: [
          {
            en: "Shrimp",
            es: "Camarón",
            de: "Garnele",
            nl: "Garnaal"
          },
          {
            en: "Chicken",
            es: "Pollo",
            de: "Huhn",
            nl: "Kip"
          },
          {
            en: "Beef",
            es: "Carne de res",
            de: "Rindfleisch",
            nl: "Rundvlees"
          },
          {
            en: "Pork",
            es: "Cerdo",
            de: "Schweinefleisch",
            nl: "Varkensvlees"
          }
        ],
        correct: 0,
        explanation: {
          en: "Shrimp is a popular shellfish enjoyed worldwide. Shellfish include crustaceans like shrimp, crab, and lobster, as well as mollusks like clams and oysters.",
          es: "El camarón es un marisco popular disfrutado en todo el mundo. Los mariscos incluyen crustáceos como camarones, cangrejos y langostas, así como moluscos como almejas y ostras.",
          de: "Garnelen sind beliebte Schalentiere, die weltweit genossen werden. Schalentiere umfassen Krebstiere wie Garnelen, Krabben und Hummer sowie Weichtiere wie Muscheln und Austern.",
          nl: "Garnalen zijn populaire schaaldieren die wereldwijd worden gegeten. Schaaldieren omvatten schaaldieren zoals garnalen, krabben en kreeften, evenals weekdieren zoals mosselen en oesters."
        }
      },
      {
        question: {
          en: "What color is salmon flesh typically?",
          es: "¿De qué color es típicamente la carne del salmón?",
          de: "Welche Farbe hat Lachsfleisch typischerweise?",
          nl: "Welke kleur heeft zalmvlees doorgaans?"
        },
        options: [
          {
            en: "Pink to orange",
            es: "Rosa a naranja",
            de: "Rosa bis orange",
            nl: "Roze tot oranje"
          },
          {
            en: "Blue",
            es: "Azul",
            de: "Blau",
            nl: "Blauw"
          },
          {
            en: "Green",
            es: "Verde",
            de: "Grün",
            nl: "Groen"
          },
          {
            en: "White",
            es: "Blanco",
            de: "Weiß",
            nl: "Wit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Salmon flesh ranges from pink to orange due to carotenoid pigments from their diet, particularly astaxanthin from eating krill and other small crustaceans.",
          es: "La carne del salmón varía de rosa a naranja debido a los pigmentos carotenoides de su dieta, particularmente astaxantina de comer krill y otros pequeños crustáceos.",
          de: "Lachsfleisch reicht von rosa bis orange aufgrund von Carotinoid-Pigmenten aus ihrer Nahrung, insbesondere Astaxanthin aus dem Verzehr von Krill und anderen kleinen Krebstieren.",
          nl: "Zalmvlees varieert van roze tot oranje vanwege carotenoïde pigmenten uit hun dieet, met name astaxanthine uit het eten van krill en andere kleine schaaldieren."
        }
      },
      {
        question: {
          en: "Which fish is commonly used for making fish and chips?",
          es: "¿Qué pescado se usa comúnmente para hacer fish and chips?",
          de: "Welcher Fisch wird häufig für Fish and Chips verwendet?",
          nl: "Welke vis wordt vaak gebruikt voor fish and chips?"
        },
        options: [
          {
            en: "Cod",
            es: "Bacalao",
            de: "Kabeljau",
            nl: "Kabeljauw"
          },
          {
            en: "Salmon",
            es: "Salmón",
            de: "Lachs",
            nl: "Zalm"
          },
          {
            en: "Tuna",
            es: "Atún",
            de: "Thunfisch",
            nl: "Tonijn"
          },
          {
            en: "Mackerel",
            es: "Caballa",
            de: "Makrele",
            nl: "Makreel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cod is the traditional fish used in British fish and chips. Its mild flavor and flaky white flesh make it perfect for deep frying in batter.",
          es: "El bacalao es el pescado tradicional usado en el fish and chips británico. Su sabor suave y carne blanca escamosa lo hacen perfecto para freír en masa.",
          de: "Kabeljau ist der traditionelle Fisch für britische Fish and Chips. Sein milder Geschmack und das flockige weiße Fleisch machen ihn perfekt zum Frittieren im Teig.",
          nl: "Kabeljauw is de traditionele vis voor Britse fish and chips. De milde smaak en het schilferige witte vlees maken het perfect om te frituren in beslag."
        }
      },
      {
        question: {
          en: "What is sushi primarily made with?",
          es: "¿Con qué se hace principalmente el sushi?",
          de: "Woraus besteht Sushi hauptsächlich?",
          nl: "Waar wordt sushi voornamelijk van gemaakt?"
        },
        options: [
          {
            en: "Rice and raw fish",
            es: "Arroz y pescado crudo",
            de: "Reis und roher Fisch",
            nl: "Rijst en rauwe vis"
          },
          {
            en: "Noodles and beef",
            es: "Fideos y carne",
            de: "Nudeln und Rindfleisch",
            nl: "Noedels en rundvlees"
          },
          {
            en: "Bread and cheese",
            es: "Pan y queso",
            de: "Brot und Käse",
            nl: "Brood en kaas"
          },
          {
            en: "Pasta and tomato",
            es: "Pasta y tomate",
            de: "Pasta und Tomate",
            nl: "Pasta en tomaat"
          }
        ],
        correct: 0,
        explanation: {
          en: "Sushi consists of vinegared rice combined with various ingredients, most commonly raw fish. The rice is seasoned with rice vinegar, sugar, and salt.",
          es: "El sushi consiste en arroz con vinagre combinado con varios ingredientes, más comúnmente pescado crudo. El arroz se sazona con vinagre de arroz, azúcar y sal.",
          de: "Sushi besteht aus mit Essig gewürztem Reis kombiniert mit verschiedenen Zutaten, meist rohem Fisch. Der Reis wird mit Reisessig, Zucker und Salz gewürzt.",
          nl: "Sushi bestaat uit met azijn gekruide rijst gecombineerd met verschillende ingrediënten, meestal rauwe vis. De rijst wordt gekruid met rijstazijn, suiker en zout."
        }
      },
      {
        question: {
          en: "Which of these is a sign of fresh fish?",
          es: "¿Cuál de estos es un signo de pescado fresco?",
          de: "Was ist ein Zeichen für frischen Fisch?",
          nl: "Wat is een teken van verse vis?"
        },
        options: [
          {
            en: "Clear, bright eyes",
            es: "Ojos claros y brillantes",
            de: "Klare, helle Augen",
            nl: "Heldere, heldere ogen"
          },
          {
            en: "Strong fishy smell",
            es: "Fuerte olor a pescado",
            de: "Starker Fischgeruch",
            nl: "Sterke visgeur"
          },
          {
            en: "Cloudy eyes",
            es: "Ojos nublados",
            de: "Trübe Augen",
            nl: "Troebele ogen"
          },
          {
            en: "Brown gills",
            es: "Branquias marrones",
            de: "Braune Kiemen",
            nl: "Bruine kieuwen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fresh fish should have clear, bright eyes. Other signs include firm flesh, bright red gills, and a mild ocean smell rather than a strong fishy odor.",
          es: "El pescado fresco debe tener ojos claros y brillantes. Otros signos incluyen carne firme, branquias rojas brillantes y un olor suave a océano en lugar de un fuerte olor a pescado.",
          de: "Frischer Fisch sollte klare, helle Augen haben. Andere Anzeichen sind festes Fleisch, hellrote Kiemen und ein milder Ozeangeruch statt eines starken Fischgeruchs.",
          nl: "Verse vis moet heldere, heldere ogen hebben. Andere tekenen zijn stevig vlees, helderrode kieuwen en een milde oceaangeur in plaats van een sterke visgeur."
        }
      },
      {
        question: {
          en: "What type of seafood is a lobster?",
          es: "¿Qué tipo de marisco es una langosta?",
          de: "Welche Art von Meeresfrüchten ist ein Hummer?",
          nl: "Wat voor soort zeevruchten is een kreeft?"
        },
        options: [
          {
            en: "Crustacean",
            es: "Crustáceo",
            de: "Krebstier",
            nl: "Schaaldier"
          },
          {
            en: "Fish",
            es: "Pez",
            de: "Fisch",
            nl: "Vis"
          },
          {
            en: "Mammal",
            es: "Mamífero",
            de: "Säugetier",
            nl: "Zoogdier"
          },
          {
            en: "Reptile",
            es: "Reptil",
            de: "Reptil",
            nl: "Reptiel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Lobsters are crustaceans, characterized by their hard exoskeleton and jointed legs. Other crustaceans include crabs, shrimp, and crayfish.",
          es: "Las langostas son crustáceos, caracterizados por su exoesqueleto duro y patas articuladas. Otros crustáceos incluyen cangrejos, camarones y cangrejos de río.",
          de: "Hummer sind Krebstiere, gekennzeichnet durch ihr hartes Exoskelett und gelenkige Beine. Andere Krebstiere sind Krabben, Garnelen und Flusskrebse.",
          nl: "Kreeften zijn schaaldieren, gekenmerkt door hun harde exoskelet en gelede poten. Andere schaaldieren zijn krabben, garnalen en rivierkreeften."
        }
      },
      {
        question: {
          en: "Which cooking method involves cooking seafood in boiling water?",
          es: "¿Qué método de cocción implica cocinar mariscos en agua hirviendo?",
          de: "Bei welcher Kochmethode werden Meeresfrüchte in kochendem Wasser gekocht?",
          nl: "Bij welke kookmethode worden zeevruchten in kokend water gekookt?"
        },
        options: [
          {
            en: "Boiling",
            es: "Hervir",
            de: "Kochen",
            nl: "Koken"
          },
          {
            en: "Grilling",
            es: "Asar a la parrilla",
            de: "Grillen",
            nl: "Grillen"
          },
          {
            en: "Baking",
            es: "Hornear",
            de: "Backen",
            nl: "Bakken"
          },
          {
            en: "Smoking",
            es: "Ahumar",
            de: "Räuchern",
            nl: "Roken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Boiling is a common method for cooking seafood, especially shellfish like shrimp and lobster. The seafood is submerged in boiling water until cooked through.",
          es: "Hervir es un método común para cocinar mariscos, especialmente mariscos como camarones y langostas. Los mariscos se sumergen en agua hirviendo hasta que estén completamente cocidos.",
          de: "Kochen ist eine gängige Methode zum Kochen von Meeresfrüchten, insbesondere Schalentieren wie Garnelen und Hummer. Die Meeresfrüchte werden in kochendes Wasser getaucht, bis sie durchgegart sind.",
          nl: "Koken is een veelgebruikte methode om zeevruchten te bereiden, vooral schaaldieren zoals garnalen en kreeft. De zeevruchten worden ondergedompeld in kokend water tot ze gaar zijn."
        }
      },
      {
        question: {
          en: "What is caviar made from?",
          es: "¿De qué está hecho el caviar?",
          de: "Woraus wird Kaviar hergestellt?",
          nl: "Waar is kaviaar van gemaakt?"
        },
        options: [
          {
            en: "Fish eggs",
            es: "Huevos de pescado",
            de: "Fischeier",
            nl: "Viseieren"
          },
          {
            en: "Fish liver",
            es: "Hígado de pescado",
            de: "Fischleber",
            nl: "Vislever"
          },
          {
            en: "Fish scales",
            es: "Escamas de pescado",
            de: "Fischschuppen",
            nl: "Visschubben"
          },
          {
            en: "Fish bones",
            es: "Espinas de pescado",
            de: "Fischgräten",
            nl: "Visgraten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Caviar is made from salt-cured fish eggs (roe), traditionally from sturgeon. It's considered a delicacy and is often expensive.",
          es: "El caviar se hace de huevos de pescado curados en sal (huevas), tradicionalmente de esturión. Se considera un manjar y a menudo es caro.",
          de: "Kaviar wird aus gesalzenen Fischeiern (Rogen) hergestellt, traditionell vom Stör. Er gilt als Delikatesse und ist oft teuer.",
          nl: "Kaviaar wordt gemaakt van gezouten viseieren (kuit), traditioneel van steur. Het wordt beschouwd als een delicatesse en is vaak duur."
        }
      },
      {
        question: {
          en: "Which shellfish is known for producing pearls?",
          es: "¿Qué marisco es conocido por producir perlas?",
          de: "Welches Schalentier ist dafür bekannt, Perlen zu produzieren?",
          nl: "Welk schaaldier staat bekend om het produceren van parels?"
        },
        options: [
          {
            en: "Oyster",
            es: "Ostra",
            de: "Auster",
            nl: "Oester"
          },
          {
            en: "Crab",
            es: "Cangrejo",
            de: "Krabbe",
            nl: "Krab"
          },
          {
            en: "Shrimp",
            es: "Camarón",
            de: "Garnele",
            nl: "Garnaal"
          },
          {
            en: "Lobster",
            es: "Langosta",
            de: "Hummer",
            nl: "Kreeft"
          }
        ],
        correct: 0,
        explanation: {
          en: "Oysters produce pearls when an irritant gets inside their shell. They coat it with layers of nacre, forming a pearl over time.",
          es: "Las ostras producen perlas cuando un irritante entra en su concha. Lo cubren con capas de nácar, formando una perla con el tiempo.",
          de: "Austern produzieren Perlen, wenn ein Reizstoff in ihre Schale gelangt. Sie überziehen ihn mit Schichten von Perlmutt und bilden im Laufe der Zeit eine Perle.",
          nl: "Oesters produceren parels wanneer een irritant in hun schelp komt. Ze bedekken het met lagen parelmoer en vormen na verloop van tijd een parel."
        }
      },
      {
        question: {
          en: "What is the most consumed fish in the world?",
          es: "¿Cuál es el pescado más consumido en el mundo?",
          de: "Welcher Fisch wird weltweit am meisten konsumiert?",
          nl: "Wat is de meest geconsumeerde vis ter wereld?"
        },
        options: [
          {
            en: "Tuna",
            es: "Atún",
            de: "Thunfisch",
            nl: "Tonijn"
          },
          {
            en: "Salmon",
            es: "Salmón",
            de: "Lachs",
            nl: "Zalm"
          },
          {
            en: "Cod",
            es: "Bacalao",
            de: "Kabeljau",
            nl: "Kabeljauw"
          },
          {
            en: "Trout",
            es: "Trucha",
            de: "Forelle",
            nl: "Forel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Tuna is the most consumed fish globally, popular in both canned form and as fresh sushi-grade fish. It's prized for its meaty texture and rich flavor.",
          es: "El atún es el pescado más consumido a nivel mundial, popular tanto en forma enlatada como pescado fresco de grado sushi. Es apreciado por su textura carnosa y sabor rico.",
          de: "Thunfisch ist der weltweit am meisten konsumierte Fisch, beliebt sowohl in Dosenform als auch als frischer Sushi-Fisch. Er wird für seine fleischige Textur und seinen reichhaltigen Geschmack geschätzt.",
          nl: "Tonijn is de meest geconsumeerde vis wereldwijd, populair in zowel ingeblikte vorm als verse sushi-kwaliteit vis. Het wordt gewaardeerd om zijn vlezige textuur en rijke smaak."
        }
      },
      {
        question: {
          en: "Which cooking method uses steam to cook seafood?",
          es: "¿Qué método de cocción usa vapor para cocinar mariscos?",
          de: "Bei welcher Kochmethode wird Dampf zum Kochen von Meeresfrüchten verwendet?",
          nl: "Bij welke kookmethode wordt stoom gebruikt om zeevruchten te koken?"
        },
        options: [
          {
            en: "Steaming",
            es: "Cocción al vapor",
            de: "Dämpfen",
            nl: "Stomen"
          },
          {
            en: "Frying",
            es: "Freír",
            de: "Braten",
            nl: "Frituren"
          },
          {
            en: "Roasting",
            es: "Asar",
            de: "Rösten",
            nl: "Braden"
          },
          {
            en: "Broiling",
            es: "Asar al horno",
            de: "Grillen",
            nl: "Grillen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Steaming uses hot steam to cook seafood gently and evenly. It's a healthy method that preserves nutrients and natural flavors, commonly used for mussels, clams, and fish.",
          es: "La cocción al vapor usa vapor caliente para cocinar mariscos suavemente y uniformemente. Es un método saludable que preserva nutrientes y sabores naturales, comúnmente usado para mejillones, almejas y pescado.",
          de: "Dämpfen verwendet heißen Dampf, um Meeresfrüchte sanft und gleichmäßig zu garen. Es ist eine gesunde Methode, die Nährstoffe und natürliche Aromen bewahrt, häufig für Muscheln und Fisch verwendet.",
          nl: "Stomen gebruikt hete stoom om zeevruchten zacht en gelijkmatig te koken. Het is een gezonde methode die voedingsstoffen en natuurlijke smaken behoudt, vaak gebruikt voor mosselen, kokkels en vis."
        }
      },
      {
        question: {
          en: "What is the name of the Japanese dish with battered and deep-fried seafood?",
          es: "¿Cuál es el nombre del plato japonés con mariscos rebozados y fritos?",
          de: "Wie heißt das japanische Gericht mit panierten und frittierten Meeresfrüchten?",
          nl: "Wat is de naam van het Japanse gerecht met gepaneerde en gefrituurde zeevruchten?"
        },
        options: [
          {
            en: "Tempura",
            es: "Tempura",
            de: "Tempura",
            nl: "Tempura"
          },
          {
            en: "Teriyaki",
            es: "Teriyaki",
            de: "Teriyaki",
            nl: "Teriyaki"
          },
          {
            en: "Ramen",
            es: "Ramen",
            de: "Ramen",
            nl: "Ramen"
          },
          {
            en: "Udon",
            es: "Udon",
            de: "Udon",
            nl: "Udon"
          }
        ],
        correct: 0,
        explanation: {
          en: "Tempura is a Japanese dish where seafood or vegetables are coated in a light batter and deep-fried until crispy. The batter is made from cold water, flour, and eggs.",
          es: "Tempura es un plato japonés donde mariscos o verduras se cubren con una masa ligera y se fríen hasta que estén crujientes. La masa se hace con agua fría, harina y huevos.",
          de: "Tempura ist ein japanisches Gericht, bei dem Meeresfrüchte oder Gemüse in einem leichten Teig paniert und knusprig frittiert werden. Der Teig wird aus kaltem Wasser, Mehl und Eiern hergestellt.",
          nl: "Tempura is een Japans gerecht waarbij zeevruchten of groenten worden bedekt met een licht beslag en knapperig worden gefrituurd. Het beslag wordt gemaakt van koud water, meel en eieren."
        }
      },
      {
        question: {
          en: "Which of these is a cold-water fish?",
          es: "¿Cuál de estos es un pez de agua fría?",
          de: "Welcher davon ist ein Kaltwasserfisch?",
          nl: "Welke hiervan is een koudwatervis?"
        },
        options: [
          {
            en: "Cod",
            es: "Bacalao",
            de: "Kabeljau",
            nl: "Kabeljauw"
          },
          {
            en: "Tilapia",
            es: "Tilapia",
            de: "Tilapia",
            nl: "Tilapia"
          },
          {
            en: "Catfish",
            es: "Bagre",
            de: "Wels",
            nl: "Meerval"
          },
          {
            en: "Bass",
            es: "Róbalo",
            de: "Barsch",
            nl: "Baars"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cod is a cold-water fish found in the North Atlantic and Arctic oceans. Cold-water fish like cod, salmon, and halibut are often higher in omega-3 fatty acids.",
          es: "El bacalao es un pez de agua fría que se encuentra en el Atlántico Norte y océanos Árticos. Los peces de agua fría como el bacalao, el salmón y el halibut suelen tener más ácidos grasos omega-3.",
          de: "Kabeljau ist ein Kaltwasserfisch, der im Nordatlantik und in arktischen Ozeanen vorkommt. Kaltwasserfische wie Kabeljau, Lachs und Heilbutt haben oft mehr Omega-3-Fettsäuren.",
          nl: "Kabeljauw is een koudwatervis die voorkomt in de Noord-Atlantische Oceaan en Arctische oceanen. Koudwatervissen zoals kabeljauw, zalm en heilbot bevatten vaak meer omega-3-vetzuren."
        }
      },
      {
        question: {
          en: "What should you remove before eating mussels?",
          es: "¿Qué debes quitar antes de comer mejillones?",
          de: "Was sollte man vor dem Verzehr von Muscheln entfernen?",
          nl: "Wat moet je verwijderen voordat je mosselen eet?"
        },
        options: [
          {
            en: "The beard",
            es: "La barba",
            de: "Den Bart",
            nl: "De baard"
          },
          {
            en: "The eyes",
            es: "Los ojos",
            de: "Die Augen",
            nl: "De ogen"
          },
          {
            en: "The tail",
            es: "La cola",
            de: "Der Schwanz",
            nl: "De staart"
          },
          {
            en: "The fins",
            es: "Las aletas",
            de: "Die Flossen",
            nl: "De vinnen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The beard (byssus threads) is the stringy material mussels use to attach to rocks. It should be removed before cooking by pulling it toward the hinge of the shell.",
          es: "La barba (hilos de biso) es el material fibroso que los mejillones usan para adherirse a las rocas. Debe quitarse antes de cocinar tirando hacia la bisagra de la concha.",
          de: "Der Bart (Byssusfäden) ist das faserige Material, mit dem sich Muscheln an Felsen befestigen. Es sollte vor dem Kochen entfernt werden, indem man es zum Scharnier der Schale zieht.",
          nl: "De baard (byssusdraden) is het vezelige materiaal dat mosselen gebruiken om zich aan rotsen te hechten. Het moet voor het koken worden verwijderd door het naar het scharnier van de schelp te trekken."
        }
      },
      {
        question: {
          en: "Which seafood is often served raw in ceviche?",
          es: "¿Qué marisco se sirve a menudo crudo en ceviche?",
          de: "Welche Meeresfrüchte werden in Ceviche oft roh serviert?",
          nl: "Welke zeevruchten worden vaak rauw geserveerd in ceviche?"
        },
        options: [
          {
            en: "White fish",
            es: "Pescado blanco",
            de: "Weißfisch",
            nl: "Witte vis"
          },
          {
            en: "Chicken",
            es: "Pollo",
            de: "Huhn",
            nl: "Kip"
          },
          {
            en: "Pork",
            es: "Cerdo",
            de: "Schweinefleisch",
            nl: "Varkensvlees"
          },
          {
            en: "Beef",
            es: "Carne de res",
            de: "Rindfleisch",
            nl: "Rundvlees"
          }
        ],
        correct: 0,
        explanation: {
          en: "Ceviche is made with raw white fish that is 'cooked' by the acidity of citrus juices, typically lime or lemon. Popular fish include sea bass, snapper, or tilapia.",
          es: "El ceviche se hace con pescado blanco crudo que se 'cocina' con la acidez de jugos cítricos, típicamente lima o limón. Los pescados populares incluyen corvina, pargo o tilapia.",
          de: "Ceviche wird mit rohem Weißfisch zubereitet, der durch die Säure von Zitrussäften, typischerweise Limette oder Zitrone, 'gekocht' wird. Beliebte Fische sind Wolfsbarsch, Schnapper oder Tilapia.",
          nl: "Ceviche wordt gemaakt met rauwe witte vis die wordt 'gekookt' door het zuur van citrusvruchten, meestal limoen of citroen. Populaire vissen zijn zeebaars, snapper of tilapia."
        }
      },
      {
        question: {
          en: "What temperature should fish be stored at to stay fresh?",
          es: "¿A qué temperatura debe almacenarse el pescado para mantenerse fresco?",
          de: "Bei welcher Temperatur sollte Fisch gelagert werden, um frisch zu bleiben?",
          nl: "Op welke temperatuur moet vis worden bewaard om vers te blijven?"
        },
        options: [
          {
            en: "At or below 4°C (40°F)",
            es: "A 4°C (40°F) o menos",
            de: "Bei oder unter 4°C (40°F)",
            nl: "Op of onder 4°C (40°F)"
          },
          {
            en: "At room temperature",
            es: "A temperatura ambiente",
            de: "Bei Raumtemperatur",
            nl: "Op kamertemperatuur"
          },
          {
            en: "At 15°C (60°F)",
            es: "A 15°C (60°F)",
            de: "Bei 15°C (60°F)",
            nl: "Op 15°C (60°F)"
          },
          {
            en: "In hot water",
            es: "En agua caliente",
            de: "In heißem Wasser",
            nl: "In heet water"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fresh fish should be stored at or below 4°C (40°F) to prevent bacterial growth. Ideally, it should be stored on ice and consumed within 1-2 days for best quality.",
          es: "El pescado fresco debe almacenarse a 4°C (40°F) o menos para prevenir el crecimiento bacteriano. Idealmente, debe almacenarse en hielo y consumirse dentro de 1-2 días para mejor calidad.",
          de: "Frischer Fisch sollte bei oder unter 4°C (40°F) gelagert werden, um Bakterienwachstum zu verhindern. Idealerweise sollte er auf Eis gelagert und innerhalb von 1-2 Tagen für beste Qualität verzehrt werden.",
          nl: "Verse vis moet worden bewaard op of onder 4°C (40°F) om bacteriegroei te voorkomen. Idealiter moet het op ijs worden bewaard en binnen 1-2 dagen worden geconsumeerd voor de beste kwaliteit."
        }
      },
      {
        question: {
          en: "Which cooking method involves cooking fish in a small amount of liquid?",
          es: "¿Qué método de cocción implica cocinar pescado en una pequeña cantidad de líquido?",
          de: "Bei welcher Kochmethode wird Fisch in einer kleinen Menge Flüssigkeit gekocht?",
          nl: "Bij welke kookmethode wordt vis gekookt in een kleine hoeveelheid vloeistof?"
        },
        options: [
          {
            en: "Poaching",
            es: "Escalfar",
            de: "Pochieren",
            nl: "Pocheren"
          },
          {
            en: "Deep frying",
            es: "Freír profundo",
            de: "Frittieren",
            nl: "Frituren"
          },
          {
            en: "Grilling",
            es: "Asar a la parrilla",
            de: "Grillen",
            nl: "Grillen"
          },
          {
            en: "Smoking",
            es: "Ahumar",
            de: "Räuchern",
            nl: "Roken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Poaching involves gently simmering fish in a small amount of liquid, such as water, wine, or broth. It's a gentle method that keeps fish moist and tender.",
          es: "Escalfar implica cocinar suavemente el pescado en una pequeña cantidad de líquido, como agua, vino o caldo. Es un método suave que mantiene el pescado húmedo y tierno.",
          de: "Pochieren beinhaltet das sanfte Garen von Fisch in einer kleinen Menge Flüssigkeit, wie Wasser, Wein oder Brühe. Es ist eine schonende Methode, die Fisch feucht und zart hält.",
          nl: "Pocheren houdt in dat vis zachtjes wordt gekookt in een kleine hoeveelheid vloeistof, zoals water, wijn of bouillon. Het is een zachte methode die vis vochtig en mals houdt."
        }
      },
      {
        question: {
          en: "What is imitation crab meat typically made from?",
          es: "¿De qué está hecha típicamente la carne de cangrejo imitación?",
          de: "Woraus wird typischerweise Imitat-Krabbenfleisch hergestellt?",
          nl: "Waar wordt imitatie krabvlees doorgaans van gemaakt?"
        },
        options: [
          {
            en: "White fish like pollock",
            es: "Pescado blanco como abadejo",
            de: "Weißfisch wie Seelachs",
            nl: "Witte vis zoals koolvis"
          },
          {
            en: "Real crab",
            es: "Cangrejo real",
            de: "Echte Krabbe",
            nl: "Echte krab"
          },
          {
            en: "Shrimp",
            es: "Camarón",
            de: "Garnele",
            nl: "Garnaal"
          },
          {
            en: "Tofu",
            es: "Tofu",
            de: "Tofu",
            nl: "Tofu"
          }
        ],
        correct: 0,
        explanation: {
          en: "Imitation crab meat, or surimi, is made from white fish (usually pollock) that is processed, flavored, and shaped to resemble crab meat. It's more affordable than real crab.",
          es: "La carne de cangrejo imitación, o surimi, está hecha de pescado blanco (generalmente abadejo) que se procesa, aromatiza y moldea para parecerse a la carne de cangrejo. Es más económico que el cangrejo real.",
          de: "Imitat-Krabbenfleisch oder Surimi wird aus Weißfisch (meist Seelachs) hergestellt, der verarbeitet, gewürzt und geformt wird, um Krabbenfleisch zu ähneln. Es ist günstiger als echtes Krabbenfleisch.",
          nl: "Imitatie krabvlees, of surimi, wordt gemaakt van witte vis (meestal koolvis) die wordt verwerkt, op smaak gebracht en gevormd om op krabvlees te lijken. Het is betaalbaarder dan echte krab."
        }
      },
      {
        question: {
          en: "Which fish is known for its ability to swim upstream?",
          es: "¿Qué pez es conocido por su capacidad de nadar río arriba?",
          de: "Welcher Fisch ist bekannt für seine Fähigkeit, stromaufwärts zu schwimmen?",
          nl: "Welke vis staat bekend om zijn vermogen om stroomopwaarts te zwemmen?"
        },
        options: [
          {
            en: "Salmon",
            es: "Salmón",
            de: "Lachs",
            nl: "Zalm"
          },
          {
            en: "Tuna",
            es: "Atún",
            de: "Thunfisch",
            nl: "Tonijn"
          },
          {
            en: "Flounder",
            es: "Platija",
            de: "Flunder",
            nl: "Bot"
          },
          {
            en: "Mackerel",
            es: "Caballa",
            de: "Makrele",
            nl: "Makreel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Salmon are famous for swimming upstream from the ocean to freshwater rivers to spawn. This remarkable journey can span hundreds of miles against strong currents.",
          es: "Los salmones son famosos por nadar río arriba desde el océano hacia ríos de agua dulce para desovar. Este viaje notable puede abarcar cientos de millas contra corrientes fuertes.",
          de: "Lachse sind berühmt dafür, vom Ozean flussaufwärts zu Süßwasserflüssen zu schwimmen, um zu laichen. Diese bemerkenswerte Reise kann Hunderte von Meilen gegen starke Strömungen umfassen.",
          nl: "Zalm staat bekend om het zwemmen stroomopwaarts van de oceaan naar zoetwaterrivieren om te paaien. Deze opmerkelijke reis kan honderden kilometers beslaan tegen sterke stromingen in."
        }
      },
      {
        question: {
          en: "What makes a fish 'oily' or 'fatty'?",
          es: "¿Qué hace que un pez sea 'graso' o 'aceitoso'?",
          de: "Was macht einen Fisch 'ölig' oder 'fett'?",
          nl: "Wat maakt een vis 'olieachtig' of 'vet'?"
        },
        options: [
          {
            en: "High omega-3 content",
            es: "Alto contenido de omega-3",
            de: "Hoher Omega-3-Gehalt",
            nl: "Hoog omega-3-gehalte"
          },
          {
            en: "Living in warm water",
            es: "Vivir en agua caliente",
            de: "Leben in warmem Wasser",
            nl: "Leven in warm water"
          },
          {
            en: "Having scales",
            es: "Tener escamas",
            de: "Schuppen haben",
            nl: "Schubben hebben"
          },
          {
            en: "Being large",
            es: "Ser grande",
            de: "Groß sein",
            nl: "Groot zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "Oily fish like salmon, mackerel, and sardines have high omega-3 fatty acid content distributed throughout their flesh. This makes them nutritious and gives them a richer flavor.",
          es: "Los pescados grasos como el salmón, la caballa y las sardinas tienen alto contenido de ácidos grasos omega-3 distribuidos por toda su carne. Esto los hace nutritivos y les da un sabor más rico.",
          de: "Fettfische wie Lachs, Makrele und Sardinen haben einen hohen Gehalt an Omega-3-Fettsäuren, die im gesamten Fleisch verteilt sind. Dies macht sie nahrhaft und verleiht ihnen einen reichhaltigeren Geschmack.",
          nl: "Vette vissen zoals zalm, makreel en sardines hebben een hoog gehalte aan omega-3-vetzuren verspreid door hun vlees. Dit maakt ze voedzaam en geeft ze een rijkere smaak."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
  if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
