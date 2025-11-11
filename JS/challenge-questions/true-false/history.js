// True/False Questions - History (Easy-Medium)
// Historical facts, myths, and famous events
(function() {

  const historyQuestions = [
    {
      id: 'hist_1',
      question: {
        en: "The Great Wall of China is visible from space.",
        es: "La Gran Muralla China es visible desde el espacio.",
        de: "Die Chinesische Mauer ist vom Weltraum aus sichtbar.",
        nl: "De Chinese Muur is zichtbaar vanuit de ruimte."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. The Great Wall is not visible from space with the naked eye.",
        es: "Esto es un mito. La Gran Muralla no es visible desde el espacio a simple vista.",
        de: "Dies ist ein Mythos. Die Chinesische Mauer ist vom Weltraum aus nicht sichtbar.",
        nl: "Dit is een mythe. De Chinese Muur is niet zichtbaar vanuit de ruimte met het blote oog."
      }
    },
    {
      id: 'hist_2',
      question: {
        en: "Cleopatra was Egyptian.",
        es: "Cleopatra era egipcia.",
        de: "Kleopatra war Ägypterin.",
        nl: "Cleopatra was Egyptisch."
      },
      isTrue: false,
      explanation: {
        en: "Cleopatra was Greek, descended from Ptolemy, one of Alexander the Great's generals.",
        es: "Cleopatra era griega, descendiente de Ptolomeo, uno de los generales de Alejandro Magno.",
        de: "Kleopatra war Griechin, abstammend von Ptolemäus, einem von Alexanders Generälen.",
        nl: "Cleopatra was Grieks, afstammeling van Ptolemaeus, een van Alexander de Grote's generaals."
      }
    },
    {
      id: 'hist_3',
      question: {
        en: "Napoleon Bonaparte was short.",
        es: "Napoleón Bonaparte era bajo.",
        de: "Napoleon Bonaparte war klein.",
        nl: "Napoleon Bonaparte was klein."
      },
      isTrue: false,
      explanation: {
        en: "Napoleon was 5'7\", average height for his time. British propaganda portrayed him as short.",
        es: "Napoleón medía 1.70m, altura promedio para su época. La propaganda británica lo retrató como bajo.",
        de: "Napoleon war 1,70m groß, Durchschnittsgröße für seine Zeit. Britische Propaganda stellte ihn als klein dar.",
        nl: "Napoleon was 1,70m, gemiddelde lengte voor zijn tijd. Britse propaganda portretteerde hem als klein."
      }
    },
    {
      id: 'hist_4',
      question: {
        en: "Vikings wore horned helmets.",
        es: "Los vikingos usaban cascos con cuernos.",
        de: "Wikinger trugen Helme mit Hörnern.",
        nl: "Vikingen droegen gehoornde helmen."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth from 19th-century romanticized art. Vikings wore simple helmets without horns.",
        es: "Esto es un mito del arte romántico del siglo XIX. Los vikingos usaban cascos simples sin cuernos.",
        de: "Dies ist ein Mythos aus romantisierter Kunst des 19. Jahrhunderts. Wikinger trugen einfache Helme.",
        nl: "Dit is een mythe uit 19e-eeuwse geromantiseerde kunst. Vikingen droegen eenvoudige helmen."
      }
    },
    {
      id: 'hist_5',
      question: {
        en: "The Titanic's musicians continued playing as the ship sank.",
        es: "Los músicos del Titanic continuaron tocando mientras el barco se hundía.",
        de: "Die Musiker der Titanic spielten weiter, während das Schiff sank.",
        nl: "De muzikanten van de Titanic bleven spelen terwijl het schip zonk."
      },
      isTrue: true,
      explanation: {
        en: "According to survivor accounts, the ship's band continued to play music on deck to keep passengers calm as the Titanic sank. None of the eight musicians survived.",
        es: "Según los relatos de los sobrevivientes, la banda del barco continuó tocando música en la cubierta para mantener a los pasajeros tranquilos mientras el Titanic se hundía. Ninguno de los ocho músicos sobrevivió.",
        de: "Überlebenden zufolge spielte die Schiffskapelle weiter Musik an Deck, um die Passagiere zu beruhigen, während die Titanic sank. Keiner der acht Musiker überlebte.",
        nl: "Volgens overlevenden bleef de scheepsband muziek spelen op het dek om passagiers kalm te houden terwijl de Titanic zonk. Geen van de acht muzikanten overleefde."
      }
    },
    {
      id: 'hist_6',
      question: {
        en: "The Roman Empire fell in one day.",
        es: "El Imperio Romano cayó en un día.",
        de: "Das Römische Reich fiel an einem Tag.",
        nl: "Het Romeinse Rijk viel op één dag."
      },
      isTrue: false,
      explanation: {
        en: "The fall of Rome was a gradual process over centuries, not a single event.",
        es: "La caída de Roma fue un proceso gradual durante siglos, no un evento único.",
        de: "Der Fall Roms war ein allmählicher Prozess über Jahrhunderte, kein einzelnes Ereignis.",
        nl: "De val van Rome was een geleidelijk proces over eeuwen, geen enkele gebeurtenis."
      }
    },
    {
      id: 'hist_7',
      question: {
        en: "George Washington had wooden teeth.",
        es: "George Washington tenía dientes de madera.",
        de: "George Washington hatte Holzzähne.",
        nl: "George Washington had houten tanden."
      },
      isTrue: false,
      explanation: {
        en: "His dentures were made from ivory, gold, lead, and human/animal teeth, but not wood.",
        es: "Sus dentaduras eran de marfil, oro, plomo y dientes humanos/animales, pero no de madera.",
        de: "Seine Prothesen waren aus Elfenbein, Gold, Blei und menschlichen/tierischen Zähnen, aber nicht aus Holz.",
        nl: "Zijn kunstgebitten waren van ivoor, goud, lood en menselijke/dierlijke tanden, maar niet van hout."
      }
    },
    {
      id: 'hist_8',
      question: {
        en: "The first country to give women the right to vote was New Zealand.",
        es: "El primer país en dar a las mujeres el derecho al voto fue Nueva Zelanda.",
        de: "Das erste Land, das Frauen das Wahlrecht gab, war Neuseeland.",
        nl: "Het eerste land dat vrouwen stemrecht gaf was Nieuw-Zeeland."
      },
      isTrue: true,
      explanation: {
        en: "New Zealand granted women's suffrage in 1893, making it the first self-governing country to do so.",
        es: "Nueva Zelanda otorgó el sufragio femenino en 1893, siendo el primer país autogobernado en hacerlo.",
        de: "Neuseeland gewährte 1893 das Frauenwahlrecht als erstes selbstverwaltetes Land.",
        nl: "Nieuw-Zeeland verleende vrouwenkiesrecht in 1893, als eerste zelfbesturend land."
      }
    },
    {
      id: 'hist_9',
      question: {
        en: "Albert Einstein failed math in school.",
        es: "Albert Einstein reprobó matemáticas en la escuela.",
        de: "Albert Einstein fiel in der Schule in Mathematik durch.",
        nl: "Albert Einstein zakte voor wiskunde op school."
      },
      isTrue: false,
      explanation: {
        en: "Einstein excelled at math. This myth arose from a misunderstanding of the Swiss grading system.",
        es: "Einstein sobresalió en matemáticas. Este mito surgió de un malentendido del sistema de calificación suizo.",
        de: "Einstein war ausgezeichnet in Mathematik. Dieser Mythos entstand durch ein Missverständnis des Schweizer Notensystems.",
        nl: "Einstein was uitstekend in wiskunde. Deze mythe ontstond door een misverstand over het Zwitserse cijfersysteem."
      }
    },
    {
      id: 'hist_10',
      question: {
        en: "The first bomb dropped by the Allies on Berlin during WWII killed an elephant.",
        es: "La primera bomba lanzada por los Aliados en Berlín durante la Segunda Guerra Mundial mató a un elefante.",
        de: "Die erste von den Alliierten auf Berlin abgeworfene Bombe im Zweiten Weltkrieg tötete einen Elefanten.",
        nl: "De eerste bom gedropt door de Geallieerden op Berlijn tijdens WOII doodde een olifant."
      },
      isTrue: true,
      explanation: {
        en: "The only casualty of the first British air raid on Berlin was an elephant at the Berlin Zoo.",
        es: "La única víctima del primer ataque aéreo británico en Berlín fue un elefante en el zoológico de Berlín.",
        de: "Das einzige Opfer des ersten britischen Luftangriffs auf Berlin war ein Elefant im Berliner Zoo.",
        nl: "Het enige slachtoffer van de eerste Britse luchtaanval op Berlijn was een olifant in de Berlijnse dierentuin."
      }
    },
    {
      id: 'hist_11',
      question: {
        en: "The pyramids were built by slaves.",
        es: "Las pirámides fueron construidas por esclavos.",
        de: "Die Pyramiden wurden von Sklaven gebaut.",
        nl: "De piramides werden gebouwd door slaven."
      },
      isTrue: false,
      explanation: {
        en: "Evidence shows the pyramids were built by paid workers, not slaves.",
        es: "La evidencia muestra que las pirámides fueron construidas por trabajadores pagados, no esclavos.",
        de: "Beweise zeigen, dass die Pyramiden von bezahlten Arbeitern gebaut wurden, nicht von Sklaven.",
        nl: "Bewijs toont aan dat de piramides werden gebouwd door betaalde arbeiders, niet slaven."
      }
    },
    {
      id: 'hist_12',
      question: {
        en: "Christopher Columbus never actually set foot on mainland North America.",
        es: "Cristóbal Colón nunca puso un pie en el continente de América del Norte.",
        de: "Christoph Kolumbus betrat nie das nordamerikanische Festland.",
        nl: "Christopher Columbus zette nooit voet op het vasteland van Noord-Amerika."
      },
      isTrue: true,
      explanation: {
        en: "Columbus landed in the Caribbean islands and Central/South America, but never reached what is now the United States or Canada.",
        es: "Colón llegó a las islas del Caribe y América Central/del Sur, pero nunca alcanzó lo que hoy son Estados Unidos o Canadá.",
        de: "Kolumbus landete in der Karibik und Mittel-/Südamerika, erreichte aber nie das heutige USA oder Kanada.",
        nl: "Columbus landde in het Caribisch gebied en Midden-/Zuid-Amerika, maar bereikte nooit het huidige Verenigde Staten of Canada."
      }
    },
    {
      id: 'hist_13',
      question: {
        en: "Julius Caesar was born by Caesarean section.",
        es: "Julio César nació por cesárea.",
        de: "Julius Cäsar wurde per Kaiserschnitt geboren.",
        nl: "Julius Caesar werd geboren via een keizersnede."
      },
      isTrue: false,
      explanation: {
        en: "This is unlikely as his mother survived his birth. Caesarean sections were usually fatal to mothers then.",
        es: "Esto es improbable ya que su madre sobrevivió a su nacimiento. Las cesáreas eran usualmente fatales entonces.",
        de: "Dies ist unwahrscheinlich, da seine Mutter seine Geburt überlebte. Kaiserschnitte waren damals meist tödlich.",
        nl: "Dit is onwaarschijnlijk omdat zijn moeder zijn geboorte overleefde. Keizersnedes waren toen meestal fataal."
      }
    },
    {
      id: 'hist_14',
      question: {
        en: "The Hundred Years' War lasted 116 years.",
        es: "La Guerra de los Cien Años duró 116 años.",
        de: "Der Hundertjährige Krieg dauerte 116 Jahre.",
        nl: "De Honderdjarige Oorlog duurde 116 jaar."
      },
      isTrue: true,
      explanation: {
        en: "Despite its name, the war between England and France lasted from 1337 to 1453, totaling 116 years.",
        es: "A pesar de su nombre, la guerra entre Inglaterra y Francia duró desde 1337 hasta 1453, totalizando 116 años.",
        de: "Trotz des Namens dauerte der Krieg zwischen England und Frankreich von 1337 bis 1453, insgesamt 116 Jahre.",
        nl: "Ondanks de naam duurde de oorlog tussen Engeland en Frankrijk van 1337 tot 1453, in totaal 116 jaar."
      }
    },
    {
      id: 'hist_15',
      question: {
        en: "The shortest war in history lasted 38 minutes.",
        es: "La guerra más corta de la historia duró 38 minutos.",
        de: "Der kürzeste Krieg der Geschichte dauerte 38 Minuten.",
        nl: "De kortste oorlog in de geschiedenis duurde 38 minuten."
      },
      isTrue: true,
      explanation: {
        en: "The Anglo-Zanzibar War of 1896 lasted between 38 and 45 minutes.",
        es: "La Guerra Anglo-Zanzibariana de 1896 duró entre 38 y 45 minutos.",
        de: "Der Anglo-Sansibarische Krieg von 1896 dauerte zwischen 38 und 45 Minuten.",
        nl: "De Anglo-Zanzibar Oorlog van 1896 duurde tussen 38 en 45 minuten."
      }
    },
    {
      id: 'hist_16',
      question: {
        en: "The Great Fire of London destroyed most of the city.",
        es: "El Gran Incendio de Londres destruyó la mayor parte de la ciudad.",
        de: "Der Große Brand von London zerstörte den größten Teil der Stadt.",
        nl: "De Grote Brand van Londen verwoestte het grootste deel van de stad."
      },
      isTrue: true,
      explanation: {
        en: "The 1666 fire destroyed 13,200 houses and 87 churches, including Old St. Paul's Cathedral.",
        es: "El incendio de 1666 destruyó 13,200 casas y 87 iglesias, incluyendo la vieja Catedral de San Pablo.",
        de: "Das Feuer von 1666 zerstörte 13.200 Häuser und 87 Kirchen, einschließlich der alten St. Paul's Cathedral.",
        nl: "De brand van 1666 verwoestte 13.200 huizen en 87 kerken, waaronder Old St. Paul's Cathedral."
      }
    },
    {
      id: 'hist_17',
      question: {
        en: "Marie Antoinette said 'Let them eat cake.'",
        es: "María Antonieta dijo 'Que coman pasteles.'",
        de: "Marie Antoinette sagte 'Sollen sie doch Kuchen essen.'",
        nl: "Marie Antoinette zei 'Laat ze cake eten.'"
      },
      isTrue: false,
      explanation: {
        en: "There's no evidence she said this. The phrase was attributed to her by revolutionaries to portray her as out of touch.",
        es: "No hay evidencia de que dijera esto. La frase le fue atribuida por revolucionarios para retratarla como desconectada.",
        de: "Es gibt keine Beweise, dass sie dies sagte. Der Satz wurde ihr von Revolutionären zugeschrieben.",
        nl: "Er is geen bewijs dat ze dit zei. De uitspraak werd haar toegeschreven door revolutionairen."
      }
    },
    {
      id: 'hist_18',
      question: {
        en: "The first person to survive going over Niagara Falls in a barrel was a woman.",
        es: "La primera persona en sobrevivir al salto de las Cataratas del Niágara en un barril fue una mujer.",
        de: "Die erste Person, die die Fahrt über die Niagarafälle in einem Fass überlebte, war eine Frau.",
        nl: "De eerste persoon die het overleefd om over Niagara Falls in een ton te gaan was een vrouw."
      },
      isTrue: true,
      explanation: {
        en: "Annie Edson Taylor, a 63-year-old schoolteacher, went over the falls in a barrel in 1901.",
        es: "Annie Edson Taylor, una maestra de 63 años, fue sobre las cataratas en un barril en 1901.",
        de: "Annie Edson Taylor, eine 63-jährige Lehrerin, fuhr 1901 in einem Fass über die Wasserfälle.",
        nl: "Annie Edson Taylor, een 63-jarige lerares, ging in 1901 over de watervallen in een ton."
      }
    },
    {
      id: 'hist_19',
      question: {
        en: "The Berlin Wall fell accidentally due to a misunderstood announcement.",
        es: "El Muro de Berlín cayó accidentalmente debido a un anuncio malinterpretado.",
        de: "Die Berliner Mauer fiel versehentlich aufgrund einer missverstandenen Ankündigung.",
        nl: "De Berlijnse Muur viel per ongeluk door een verkeerd begrepen aankondiging."
      },
      isTrue: true,
      explanation: {
        en: "On November 9, 1989, a spokesperson mistakenly announced travel restrictions would lift 'immediately' instead of the next day. Confused guards, overwhelmed by crowds, opened the gates.",
        es: "El 9 de noviembre de 1989, un portavoz anunció erróneamente que las restricciones de viaje se levantarían 'inmediatamente' en lugar del día siguiente. Los guardias confundidos, abrumados por las multitudes, abrieron las puertas.",
        de: "Am 9. November 1989 gab ein Sprecher fälschlicherweise bekannt, dass die Reisebeschränkungen 'sofort' statt am nächsten Tag aufgehoben würden. Verwirrte Wachen, von Menschenmassen überwältigt, öffneten die Tore.",
        nl: "Op 9 november 1989 kondigde een woordvoerder per ongeluk aan dat de reisbeperkingen 'onmiddellijk' in plaats van de volgende dag zouden worden opgeheven. Verwarde bewakers, overspoeld door menigten, openden de poorten."
      }
    },
    {
      id: 'hist_20',
      question: {
        en: "Winston Churchill was born in a ladies' bathroom.",
        es: "Winston Churchill nació en un baño de señoras.",
        de: "Winston Churchill wurde in einer Damentoilette geboren.",
        nl: "Winston Churchill werd geboren in een damestoilet."
      },
      isTrue: true,
      explanation: {
        en: "Churchill was born prematurely at Blenheim Palace during a dance, in a room used as a ladies' cloakroom.",
        es: "Churchill nació prematuramente en el Palacio de Blenheim durante un baile, en una sala usada como guardarropa de señoras.",
        de: "Churchill wurde vorzeitig im Blenheim Palace während eines Tanzes geboren, in einem als Damengaderobe genutzten Raum.",
        nl: "Churchill werd prematuur geboren in Blenheim Palace tijdens een dans, in een ruimte gebruikt als damesgarderobe."
      }
    },
    {
      id: 'hist_21',
      question: {
        en: "The Boston Tea Party was a protest against high tea prices.",
        es: "El Motín del Té de Boston fue una protesta contra los altos precios del té.",
        de: "Die Boston Tea Party war ein Protest gegen hohe Teepreise.",
        nl: "De Boston Tea Party was een protest tegen hoge theeprijzen."
      },
      isTrue: false,
      explanation: {
        en: "It was a protest against taxation without representation, not high prices. The tea was actually cheaper.",
        es: "Fue una protesta contra impuestos sin representación, no contra precios altos. El té era en realidad más barato.",
        de: "Es war ein Protest gegen Besteuerung ohne Vertretung, nicht gegen hohe Preise. Der Tee war tatsächlich billiger.",
        nl: "Het was een protest tegen belasting zonder vertegenwoordiging, niet tegen hoge prijzen. De thee was eigenlijk goedkoper."
      }
    },
    {
      id: 'hist_22',
      question: {
        en: "Leonardo da Vinci invented the bicycle.",
        es: "Leonardo da Vinci inventó la bicicleta.",
        de: "Leonardo da Vinci erfand das Fahrrad.",
        nl: "Leonardo da Vinci vond de fiets uit."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth based on a forged drawing. The bicycle wasn't invented until the 19th century.",
        es: "Esto es un mito basado en un dibujo falsificado. La bicicleta no se inventó hasta el siglo XIX.",
        de: "Dies ist ein Mythos basierend auf einer gefälschten Zeichnung. Das Fahrrad wurde erst im 19. Jahrhundert erfunden.",
        nl: "Dit is een mythe gebaseerd op een vervalste tekening. De fiets werd pas in de 19e eeuw uitgevonden."
      }
    },
    {
      id: 'hist_23',
      question: {
        en: "The Leaning Tower of Pisa has always been leaning.",
        es: "La Torre de Pisa siempre ha estado inclinada.",
        de: "Der Schiefe Turm von Pisa war schon immer schief.",
        nl: "De Toren van Pisa heeft altijd gescheef gestaan."
      },
      isTrue: true,
      explanation: {
        en: "The tower began leaning during construction in the 12th century due to soft ground.",
        es: "La torre comenzó a inclinarse durante la construcción en el siglo XII debido al suelo blando.",
        de: "Der Turm begann während des Baus im 12. Jahrhundert aufgrund des weichen Bodens zu neigen.",
        nl: "De toren begon te leunen tijdens de bouw in de 12e eeuw door zachte grond."
      }
    },
    {
      id: 'hist_24',
      question: {
        en: "The Statue of Liberty was originally copper-colored, not green.",
        es: "La Estatua de la Libertad era originalmente de color cobre, no verde.",
        de: "Die Freiheitsstatue war ursprünglich kupferfarben, nicht grün.",
        nl: "Het Vrijheidsbeeld was oorspronkelijk koperkleurig, niet groen."
      },
      isTrue: true,
      explanation: {
        en: "The Statue of Liberty is made of copper, which is naturally a shiny brown-orange color. The green color (patina) developed over about 20 years due to oxidation.",
        es: "La Estatua de la Libertad está hecha de cobre, que naturalmente es de color marrón-naranja brillante. El color verde (pátina) se desarrolló durante unos 20 años debido a la oxidación.",
        de: "Die Freiheitsstatue besteht aus Kupfer, das natürlich eine glänzende braunorange Farbe hat. Die grüne Farbe (Patina) entwickelte sich über etwa 20 Jahre durch Oxidation.",
        nl: "Het Vrijheidsbeeld is gemaakt van koper, dat van nature een glanzende bruinoranje kleur heeft. De groene kleur (patina) ontwikkelde zich over ongeveer 20 jaar door oxidatie."
      }
    },
    {
      id: 'hist_25',
      question: {
        en: "Abraham Lincoln fought in the Civil War.",
        es: "Abraham Lincoln luchó en la Guerra Civil.",
        de: "Abraham Lincoln kämpfte im Bürgerkrieg.",
        nl: "Abraham Lincoln vocht in de Burgeroorlog."
      },
      isTrue: false,
      explanation: {
        en: "Lincoln was President during the Civil War but never fought as a soldier in it.",
        es: "Lincoln fue Presidente durante la Guerra Civil pero nunca luchó como soldado en ella.",
        de: "Lincoln war Präsident während des Bürgerkriegs, kämpfte aber nie als Soldat darin.",
        nl: "Lincoln was President tijdens de Burgeroorlog maar vocht er nooit als soldaat in."
      }
    },
    {
      id: 'hist_26',
      question: {
        en: "The ancient Olympic Games included a race in full armor.",
        es: "Los antiguos Juegos Olímpicos incluían una carrera con armadura completa.",
        de: "Die antiken Olympischen Spiele beinhalteten ein Rennen in voller Rüstung.",
        nl: "De oude Olympische Spelen omvatten een race in volle wapenrusting."
      },
      isTrue: true,
      explanation: {
        en: "The hoplitodromos was a race where athletes ran wearing helmets, greaves, and carrying shields.",
        es: "El hoplitodromos era una carrera donde los atletas corrían usando cascos, grebas y portando escudos.",
        de: "Der Hoplitodromos war ein Rennen, bei dem Athleten mit Helmen, Beinschienen und Schilden liefen.",
        nl: "De hoplitodromos was een race waarbij atleten renden met helmen, beenschijnen en schilden."
      }
    },
    {
      id: 'hist_27',
      question: {
        en: "The first country to use paper money was China.",
        es: "El primer país en usar papel moneda fue China.",
        de: "Das erste Land, das Papiergeld verwendete, war China.",
        nl: "Het eerste land dat papiergeld gebruikte was China."
      },
      isTrue: true,
      explanation: {
        en: "China introduced paper money during the Tang Dynasty in the 7th century.",
        es: "China introdujo el papel moneda durante la Dinastía Tang en el siglo VII.",
        de: "China führte während der Tang-Dynastie im 7. Jahrhundert Papiergeld ein.",
        nl: "China introduceerde papiergeld tijdens de Tang-dynastie in de 7e eeuw."
      }
    },
    {
      id: 'hist_28',
      question: {
        en: "The Spanish Inquisition gave advance notice before arresting people.",
        es: "La Inquisición Española daba aviso previo antes de arrestar a la gente.",
        de: "Die Spanische Inquisition gab vorher Bescheid, bevor sie Menschen verhaftete.",
        nl: "De Spaanse Inquisitie gaf vooraf waarschuwing voor het arresteren van mensen."
      },
      isTrue: true,
      explanation: {
        en: "Contrary to popular belief, the Inquisition gave 30 days' notice before arrest, encouraging confessions.",
        es: "Contrario a la creencia popular, la Inquisición daba 30 días de aviso antes del arresto.",
        de: "Entgegen der landläufigen Meinung gab die Inquisition 30 Tage Vorankündigung vor einer Verhaftung.",
        nl: "Tegen de gangbare opvatting in gaf de Inquisitie 30 dagen waarschuwing voor een arrestatie."
      }
    },
    {
      id: 'hist_29',
      question: {
        en: "The guillotine was invented in France during the French Revolution.",
        es: "La guillotina fue inventada en Francia durante la Revolución Francesa.",
        de: "Die Guillotine wurde während der Französischen Revolution in Frankreich erfunden.",
        nl: "De guillotine werd uitgevonden in Frankrijk tijdens de Franse Revolutie."
      },
      isTrue: true,
      explanation: {
        en: "The guillotine was adopted in France in 1792 during the Revolution as a more humane method of execution, proposed by Dr. Joseph-Ignace Guillotin.",
        es: "La guillotina fue adoptada en Francia en 1792 durante la Revolución como un método de ejecución más humano.",
        de: "Die Guillotine wurde 1792 während der Revolution in Frankreich als humanere Hinrichtungsmethode eingeführt.",
        nl: "De guillotine werd in 1792 in Frankrijk geadopteerd tijdens de Revolutie als een humanere executiemethode."
      }
    },
    {
      id: 'hist_30',
      question: {
        en: "The White House was originally white.",
        es: "La Casa Blanca era originalmente blanca.",
        de: "Das Weiße Haus war ursprünglich weiß.",
        nl: "Het Witte Huis was oorspronkelijk wit."
      },
      isTrue: false,
      explanation: {
        en: "It was originally gray and was painted white after being burned by the British in 1814.",
        es: "Era originalmente gris y fue pintada de blanco después de ser quemada por los británicos en 1814.",
        de: "Es war ursprünglich grau und wurde weiß gestrichen, nachdem es 1814 von den Briten verbrannt wurde.",
        nl: "Het was oorspronkelijk grijs en werd wit geschilderd nadat het in 1814 door de Britten was verbrand."
      }
    },
    {
      id: 'hist_31',
      question: {
        en: "Paul Revere shouted 'The British are coming!' during his midnight ride.",
        es: "Paul Revere gritó '¡Los británicos vienen!' durante su cabalgata de medianoche.",
        de: "Paul Revere rief 'Die Briten kommen!' während seines Mitternachtsritts.",
        nl: "Paul Revere riep 'De Britten komen!' tijdens zijn middernachtelijke rit."
      },
      isTrue: false,
      explanation: {
        en: "He likely said 'The Regulars are coming out' and worked to stay quiet to avoid British patrols.",
        es: "Probablemente dijo 'Los regulares están saliendo' y trabajó para mantenerse callado para evitar patrullas británicas.",
        de: "Er sagte wahrscheinlich 'Die Regulars kommen' und bemühte sich, leise zu bleiben, um britische Patrouillen zu vermeiden.",
        nl: "Hij zei waarschijnlijk 'De Regulars komen eruit' en probeerde stil te blijven om Britse patrouilles te vermijden."
      }
    },
    {
      id: 'hist_32',
      question: {
        en: "The Roman Colosseum could be filled with water for mock naval battles.",
        es: "El Coliseo Romano podía llenarse de agua para batallas navales simuladas.",
        de: "Das Römische Kolosseum konnte für simulierte Seeschlachten mit Wasser gefüllt werden.",
        nl: "Het Romeinse Colosseum kon worden gevuld met water voor nagebootste zeeslagen."
      },
      isTrue: true,
      explanation: {
        en: "The Colosseum was occasionally flooded for naumachiae (staged sea battles) in its early years.",
        es: "El Coliseo fue ocasionalmente inundado para naumaquias (batallas navales escenificadas) en sus primeros años.",
        de: "Das Kolosseum wurde gelegentlich für Naumachien (inszenierte Seeschlachten) in seinen frühen Jahren geflutet.",
        nl: "Het Colosseum werd af en toe overspoeld voor naumachieën (nagebootste zeeslagen) in zijn vroege jaren."
      }
    },
    {
      id: 'hist_33',
      question: {
        en: "Thomas Edison invented the light bulb.",
        es: "Thomas Edison inventó la bombilla.",
        de: "Thomas Edison erfand die Glühbirne.",
        nl: "Thomas Edison vond de gloeilamp uit."
      },
      isTrue: false,
      explanation: {
        en: "Edison improved the light bulb, but it was invented earlier by others. He made the first practical, long-lasting version.",
        es: "Edison mejoró la bombilla, pero fue inventada antes por otros. Él hizo la primera versión práctica y duradera.",
        de: "Edison verbesserte die Glühbirne, aber sie wurde früher von anderen erfunden. Er machte die erste praktische Version.",
        nl: "Edison verbeterde de gloeilamp, maar hij werd eerder door anderen uitgevonden. Hij maakte de eerste praktische versie."
      }
    },
    {
      id: 'hist_34',
      question: {
        en: "The first American flag had 13 stripes and 13 stars.",
        es: "La primera bandera estadounidense tenía 13 franjas y 13 estrellas.",
        de: "Die erste amerikanische Flagge hatte 13 Streifen und 13 Sterne.",
        nl: "De eerste Amerikaanse vlag had 13 strepen en 13 sterren."
      },
      isTrue: true,
      explanation: {
        en: "The original flag had 13 stars and 13 stripes representing the original 13 colonies.",
        es: "La bandera original tenía 13 estrellas y 13 franjas representando las 13 colonias originales.",
        de: "Die ursprüngliche Flagge hatte 13 Sterne und 13 Streifen, die die ursprünglichen 13 Kolonien repräsentierten.",
        nl: "De oorspronkelijke vlag had 13 sterren en 13 strepen die de oorspronkelijke 13 koloniën vertegenwoordigden."
      }
    },
    {
      id: 'hist_35',
      question: {
        en: "Genghis Khan killed so many people that it reduced global carbon emissions.",
        es: "Genghis Khan mató a tanta gente que redujo las emisiones globales de carbono.",
        de: "Dschingis Khan tötete so viele Menschen, dass es die globalen CO2-Emissionen reduzierte.",
        nl: "Genghis Khan doodde zoveel mensen dat het de wereldwijde koolstofemissies verminderde."
      },
      isTrue: true,
      explanation: {
        en: "His conquests killed so many people that forests regrew on abandoned farmland, absorbing carbon from the atmosphere.",
        es: "Sus conquistas mataron a tanta gente que los bosques volvieron a crecer en tierras de cultivo abandonadas.",
        de: "Seine Eroberungen töteten so viele Menschen, dass Wälder auf verlassenen Ackerland nachwuchsen.",
        nl: "Zijn veroveringen doodden zoveel mensen dat bossen hergroeiden op verlaten landbouwgrond."
      }
    },
    {
      id: 'hist_36',
      question: {
        en: "The first webcam was created to watch a coffee pot.",
        es: "La primera cámara web fue creada para observar una cafetera.",
        de: "Die erste Webcam wurde erstellt, um eine Kaffeekanne zu beobachten.",
        nl: "De eerste webcam werd gemaakt om een koffiepot te bekijken."
      },
      isTrue: true,
      explanation: {
        en: "Cambridge University researchers created a webcam in 1991 to monitor their coffee pot without leaving their desks.",
        es: "Los investigadores de la Universidad de Cambridge crearon una cámara web en 1991 para monitorear su cafetera.",
        de: "Forscher der Universität Cambridge erstellten 1991 eine Webcam, um ihre Kaffeekanne zu überwachen.",
        nl: "Onderzoekers van Cambridge University creëerden in 1991 een webcam om hun koffiepot te monitoren."
      }
    },
    {
      id: 'hist_37',
      question: {
        en: "The Eiffel Tower was originally intended to be temporary.",
        es: "La Torre Eiffel estaba originalmente destinada a ser temporal.",
        de: "Der Eiffelturm sollte ursprünglich nur vorübergehend sein.",
        nl: "De Eiffeltoren was oorspronkelijk bedoeld als tijdelijk."
      },
      isTrue: true,
      explanation: {
        en: "It was built for the 1889 World's Fair and was supposed to be dismantled after 20 years.",
        es: "Fue construida para la Feria Mundial de 1889 y debía ser desmantelada después de 20 años.",
        de: "Es wurde für die Weltausstellung 1889 gebaut und sollte nach 20 Jahren abgerissen werden.",
        nl: "Het werd gebouwd voor de Wereldtentoonstelling van 1889 en zou na 20 jaar worden afgebroken."
      }
    },
    {
      id: 'hist_38',
      question: {
        en: "Adolf Hitler was nominated for the Nobel Peace Prize.",
        es: "Adolf Hitler fue nominado para el Premio Nobel de la Paz.",
        de: "Adolf Hitler wurde für den Friedensnobelpreis nominiert.",
        nl: "Adolf Hitler werd genomineerd voor de Nobelprijs voor de Vrede."
      },
      isTrue: true,
      explanation: {
        en: "In 1939, Swedish politician E.G.C. Brandt nominated Hitler for the Nobel Peace Prize as a satirical protest. The nomination was withdrawn, but it technically happened.",
        es: "En 1939, el político sueco E.G.C. Brandt nominó a Hitler para el Premio Nobel de la Paz como una protesta satírica. La nominación fue retirada.",
        de: "1939 nominierte der schwedische Politiker E.G.C. Brandt Hitler für den Friedensnobelpreis als satirischen Protest. Die Nominierung wurde zurückgezogen.",
        nl: "In 1939 nomineerde de Zweedse politicus E.G.C. Brandt Hitler voor de Nobelprijs voor de Vrede als satirisch protest. De nominatie werd ingetrokken."
      }
    },
    {
      id: 'hist_39',
      question: {
        en: "Oxford University is older than the Aztec Empire.",
        es: "La Universidad de Oxford es más antigua que el Imperio Azteca.",
        de: "Die Universität Oxford ist älter als das Aztekenreich.",
        nl: "Oxford University is ouder dan het Azteekse Rijk."
      },
      isTrue: true,
      explanation: {
        en: "Oxford began teaching around 1096, while the Aztec Empire was founded in 1428.",
        es: "Oxford comenzó a enseñar alrededor de 1096, mientras que el Imperio Azteca fue fundado en 1428.",
        de: "Oxford begann um 1096 mit dem Unterricht, während das Aztekenreich 1428 gegründet wurde.",
        nl: "Oxford begon rond 1096 met lesgeven, terwijl het Azteekse Rijk in 1428 werd gesticht."
      }
    },
    {
      id: 'hist_40',
      question: {
        en: "Speed limits existed before automobiles were invented.",
        es: "Los límites de velocidad existían antes de que se inventaran los automóviles.",
        de: "Geschwindigkeitsbegrenzungen existierten bevor Automobile erfunden wurden.",
        nl: "Snelheidslimieten bestonden voordat auto's werden uitgevonden."
      },
      isTrue: true,
      explanation: {
        en: "Speed limits were first introduced in the UK in 1865 for steam-powered vehicles and horse-drawn carriages, limiting them to 2 mph in towns.",
        es: "Los límites de velocidad se introdujeron por primera vez en el Reino Unido en 1865 para vehículos de vapor y carruajes.",
        de: "Geschwindigkeitsbegrenzungen wurden erstmals 1865 in Großbritannien für dampfbetriebene Fahrzeuge und Pferdekutschen eingeführt.",
        nl: "Snelheidslimieten werden voor het eerst geïntroduceerd in het VK in 1865 voor stoomvoertuigen en paardenkoetsen."
      }
    },
    {
      id: 'hist_41',
      question: {
        en: "The French Revolution began with the storming of the Bastille.",
        es: "La Revolución Francesa comenzó con el asalto a la Bastilla.",
        de: "Die Französische Revolution begann mit dem Sturm auf die Bastille.",
        nl: "De Franse Revolutie begon met de bestorming van de Bastille."
      },
      isTrue: false,
      explanation: {
        en: "The Revolution had already begun; the Bastille storming on July 14, 1789, was a symbolic turning point.",
        es: "La Revolución ya había comenzado; el asalto a la Bastilla el 14 de julio de 1789 fue un punto de inflexión simbólico.",
        de: "Die Revolution hatte bereits begonnen; der Bastille-Sturm am 14. Juli 1789 war ein symbolischer Wendepunkt.",
        nl: "De Revolutie was al begonnen; de bestorming van de Bastille op 14 juli 1789 was een symbolisch keerpunt."
      }
    },
    {
      id: 'hist_42',
      question: {
        en: "Samurai warriors existed at the same time as the fax machine.",
        es: "Los guerreros samuráis existieron al mismo tiempo que la máquina de fax.",
        de: "Samurai-Krieger existierten zur gleichen Zeit wie das Faxgerät.",
        nl: "Samurai krijgers bestonden tegelijkertijd met de faxmachine."
      },
      isTrue: true,
      explanation: {
        en: "The samurai class wasn't abolished until 1868, while the fax machine was invented in 1843.",
        es: "La clase samurái no fue abolida hasta 1868, mientras que la máquina de fax fue inventada en 1843.",
        de: "Die Samurai-Klasse wurde erst 1868 abgeschafft, während das Faxgerät 1843 erfunden wurde.",
        nl: "De samurai klasse werd pas in 1868 afgeschaft, terwijl de faxmachine in 1843 werd uitgevonden."
      }
    },
    {
      id: 'hist_43',
      question: {
        en: "The Trojan War was fought over Helen of Troy.",
        es: "La Guerra de Troya se libró por Helena de Troya.",
        de: "Der Trojanische Krieg wurde um Helena von Troja geführt.",
        nl: "De Trojaanse Oorlog werd uitgevochten om Helena van Troje."
      },
      isTrue: false,
      explanation: {
        en: "If it happened, it was likely fought over trade routes and power, not one woman. The Helen story is mythology.",
        es: "Si ocurrió, probablemente fue por rutas comerciales y poder, no por una mujer. La historia de Helena es mitología.",
        de: "Falls es passierte, ging es wahrscheinlich um Handelsrouten und Macht, nicht um eine Frau.",
        nl: "Als het gebeurde, ging het waarschijnlijk om handelsroutes en macht, niet om één vrouw."
      }
    },
    {
      id: 'hist_44',
      question: {
        en: "The last guillotine execution in France happened after Star Wars was released.",
        es: "La última ejecución en guillotina en Francia ocurrió después del estreno de Star Wars.",
        de: "Die letzte Guillotine-Hinrichtung in Frankreich fand nach der Veröffentlichung von Star Wars statt.",
        nl: "De laatste guillotine executie in Frankrijk gebeurde na de release van Star Wars."
      },
      isTrue: true,
      explanation: {
        en: "The last guillotine execution was September 10, 1977. Star Wars was released May 25, 1977.",
        es: "La última ejecución en guillotina fue el 10 de septiembre de 1977. Star Wars se estrenó el 25 de mayo de 1977.",
        de: "Die letzte Guillotine-Hinrichtung war am 10. September 1977. Star Wars erschien am 25. Mai 1977.",
        nl: "De laatste guillotine executie was op 10 september 1977. Star Wars kwam uit op 25 mei 1977."
      }
    },
    {
      id: 'hist_45',
      question: {
        en: "Ancient Romans used urine as mouthwash.",
        es: "Los antiguos romanos usaban orina como enjuague bucal.",
        de: "Die alten Römer benutzten Urin als Mundwasser.",
        nl: "Oude Romeinen gebruikten urine als mondwater."
      },
      isTrue: true,
      explanation: {
        en: "Romans used urine for teeth whitening because it contains ammonia, which has whitening properties.",
        es: "Los romanos usaban orina para blanquear los dientes porque contiene amoníaco.",
        de: "Römer nutzten Urin zum Zähnebleichen, weil er Ammoniak enthält, das aufhellende Eigenschaften hat.",
        nl: "Romeinen gebruikten urine voor het witten van tanden omdat het ammoniak bevat met blekende eigenschappen."
      }
    },
    {
      id: 'hist_46',
      question: {
        en: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
        es: "Cleopatra vivió más cerca en el tiempo del alunizaje que de la construcción de la Gran Pirámide.",
        de: "Kleopatra lebte zeitlich näher an der Mondlandung als am Bau der Großen Pyramide.",
        nl: "Cleopatra leefde dichter bij de maanlanding dan bij de bouw van de Grote Piramide."
      },
      isTrue: true,
      explanation: {
        en: "Cleopatra lived around 30 BC. The Great Pyramid was built around 2560 BC, and the Moon landing was in 1969 AD.",
        es: "Cleopatra vivió alrededor del 30 a.C. La Gran Pirámide fue construida alrededor del 2560 a.C.",
        de: "Kleopatra lebte um 30 v. Chr. Die Große Pyramide wurde um 2560 v. Chr. erbaut.",
        nl: "Cleopatra leefde rond 30 v.Chr. De Grote Piramide werd gebouwd rond 2560 v.Chr."
      }
    },
    {
      id: 'hist_47',
      question: {
        en: "The Pony Express only lasted about 18 months.",
        es: "El Pony Express solo duró unos 18 meses.",
        de: "Der Pony Express dauerte nur etwa 18 Monate.",
        nl: "De Pony Express duurde slechts ongeveer 18 maanden."
      },
      isTrue: true,
      explanation: {
        en: "The Pony Express operated from April 1860 to October 1861, ending when the transcontinental telegraph was completed.",
        es: "El Pony Express operó desde abril de 1860 hasta octubre de 1861, terminando cuando se completó el telégrafo transcontinental.",
        de: "Der Pony Express operierte von April 1860 bis Oktober 1861 und endete mit der transkontinentalen Telegrafenleitung.",
        nl: "De Pony Express opereerde van april 1860 tot oktober 1861, eindigend toen de transcontinentale telegraaf werd voltooid."
      }
    },
    {
      id: 'hist_48',
      question: {
        en: "Shakespeare and Pocahontas lived at the same time.",
        es: "Shakespeare y Pocahontas vivieron al mismo tiempo.",
        de: "Shakespeare und Pocahontas lebten zur gleichen Zeit.",
        nl: "Shakespeare en Pocahontas leefden tegelijkertijd."
      },
      isTrue: true,
      explanation: {
        en: "Shakespeare died in 1616, the same year Pocahontas visited England and met King James I.",
        es: "Shakespeare murió en 1616, el mismo año en que Pocahontas visitó Inglaterra y conoció al Rey James I.",
        de: "Shakespeare starb 1616, im selben Jahr besuchte Pocahontas England und traf König James I.",
        nl: "Shakespeare stierf in 1616, hetzelfde jaar dat Pocahontas Engeland bezocht en King James I ontmoette."
      }
    },
    {
      id: 'hist_49',
      question: {
        en: "The first computer programmer was a woman.",
        es: "La primera programadora de computadoras fue una mujer.",
        de: "Die erste Computerprogrammiererin war eine Frau.",
        nl: "De eerste computerprogrammeur was een vrouw."
      },
      isTrue: true,
      explanation: {
        en: "Ada Lovelace wrote the first algorithm for Charles Babbage's Analytical Engine in the 1840s.",
        es: "Ada Lovelace escribió el primer algoritmo para el Motor Analítico de Charles Babbage en la década de 1840.",
        de: "Ada Lovelace schrieb in den 1840er Jahren den ersten Algorithmus für Charles Babbages Analytical Engine.",
        nl: "Ada Lovelace schreef het eerste algoritme voor Charles Babbage's Analytical Engine in de jaren 1840."
      }
    },
    {
      id: 'hist_50',
      question: {
        en: "The teddy bear was named after President Theodore Roosevelt.",
        es: "El oso de peluche fue nombrado en honor al Presidente Theodore Roosevelt.",
        de: "Der Teddybär wurde nach Präsident Theodore Roosevelt benannt.",
        nl: "De teddybeer werd vernoemd naar President Theodore Roosevelt."
      },
      isTrue: true,
      explanation: {
        en: "After Roosevelt refused to shoot a bear cub on a hunting trip in 1902, toy makers created 'Teddy's bear.'",
        es: "Después de que Roosevelt se negara a disparar a un osezno en un viaje de caza en 1902, los fabricantes crearon el 'oso de Teddy.'",
        de: "Nachdem Roosevelt 1902 sich weigerte, ein Bärenjunges zu erschießen, schufen Spielzeughersteller 'Teddys Bär.'",
        nl: "Nadat Roosevelt weigerde om een berenwelp neer te schieten op een jachttrip in 1902, creëerden speelgoedfabrikanten 'Teddy's beer.'"
      }
    },
    {
      id: 'hist_51',
      question: {
        en: "The Great Chicago Fire was started by Mrs. O'Leary's cow.",
        es: "El Gran Incendio de Chicago fue iniciado por la vaca de la Sra. O'Leary.",
        de: "Das Große Feuer von Chicago wurde von Mrs. O'Learys Kuh verursacht.",
        nl: "De Grote Brand van Chicago werd veroorzaakt door de koe van mevrouw O'Leary."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. While the fire started near the O'Leary barn, the cow story was fabricated by a reporter.",
        es: "Esto es un mito. Aunque el fuego comenzó cerca del granero O'Leary, la historia de la vaca fue inventada.",
        de: "Dies ist ein Mythos. Obwohl das Feuer in der Nähe der O'Leary-Scheune begann, wurde die Kuh-Geschichte erfunden.",
        nl: "Dit is een mythe. Hoewel de brand begon bij de O'Leary schuur, was het koeverhaal verzonnen."
      }
    },
    {
      id: 'hist_52',
      question: {
        en: "Coca-Cola once contained cocaine.",
        es: "Coca-Cola alguna vez contuvo cocaína.",
        de: "Coca-Cola enthielt einst Kokain.",
        nl: "Coca-Cola bevatte ooit cocaïne."
      },
      isTrue: true,
      explanation: {
        en: "Until 1903, Coca-Cola contained small amounts of cocaine from coca leaf extract.",
        es: "Hasta 1903, Coca-Cola contenía pequeñas cantidades de cocaína del extracto de hoja de coca.",
        de: "Bis 1903 enthielt Coca-Cola kleine Mengen Kokain aus Kokablatt-Extrakt.",
        nl: "Tot 1903 bevatte Coca-Cola kleine hoeveelheden cocaïne uit coca-bladextract."
      }
    },
    {
      id: 'hist_53',
      question: {
        en: "The first aerial photograph was taken from a hot air balloon.",
        es: "La primera fotografía aérea fue tomada desde un globo aerostático.",
        de: "Das erste Luftbild wurde von einem Heißluftballon aus aufgenommen.",
        nl: "De eerste luchtfoto werd gemaakt vanuit een luchtballon."
      },
      isTrue: true,
      explanation: {
        en: "Nadar (Gaspard-Félix Tournachon) took the first aerial photograph from a balloon over Paris in 1858.",
        es: "Nadar tomó la primera fotografía aérea desde un globo sobre París en 1858.",
        de: "Nadar machte 1858 das erste Luftbild von einem Ballon über Paris.",
        nl: "Nadar maakte in 1858 de eerste luchtfoto vanuit een ballon boven Parijs."
      }
    },
    {
      id: 'hist_54',
      question: {
        en: "Ancient Egypt had female pharaohs.",
        es: "El antiguo Egipto tuvo faraonas.",
        de: "Das alte Ägypten hatte weibliche Pharaonen.",
        nl: "Het oude Egypte had vrouwelijke farao's."
      },
      isTrue: true,
      explanation: {
        en: "Several women ruled as pharaoh in ancient Egypt, including Hatshepsut, one of the most successful pharaohs, and Cleopatra VII.",
        es: "Varias mujeres gobernaron como faraón en el antiguo Egipto, incluyendo a Hatshepsut y Cleopatra VII.",
        de: "Mehrere Frauen regierten als Pharao im alten Ägypten, darunter Hatschepsut und Kleopatra VII.",
        nl: "Verschillende vrouwen regeerden als farao in het oude Egypte, waaronder Hatshepsut en Cleopatra VII."
      }
    },
    {
      id: 'hist_55',
      question: {
        en: "The term 'OK' originated during the American Civil War.",
        es: "El término 'OK' se originó durante la Guerra Civil Americana.",
        de: "Der Begriff 'OK' entstand während des Amerikanischen Bürgerkriegs.",
        nl: "De term 'OK' ontstond tijdens de Amerikaanse Burgeroorlog."
      },
      isTrue: false,
      explanation: {
        en: "OK first appeared in 1839 in a Boston newspaper as a humorous abbreviation of 'oll korrect.'",
        es: "OK apareció por primera vez en 1839 en un periódico de Boston como una abreviatura humorística de 'oll korrect.'",
        de: "OK erschien erstmals 1839 in einer Bostoner Zeitung als humoristische Abkürzung von 'oll korrect.'",
        nl: "OK verscheen voor het eerst in 1839 in een Bostoner krant als een humoristische afkorting van 'oll korrect.'"
      }
    },
    {
      id: 'hist_56',
      question: {
        en: "The fortune cookie was invented in China.",
        es: "La galleta de la fortuna fue inventada en China.",
        de: "Der Glückskeks wurde in China erfunden.",
        nl: "Het gelukskoekje werd uitgevonden in China."
      },
      isTrue: false,
      explanation: {
        en: "Fortune cookies were invented in California by Japanese immigrants in the early 1900s.",
        es: "Las galletas de la fortuna fueron inventadas en California por inmigrantes japoneses a principios del siglo XX.",
        de: "Glückskekse wurden Anfang des 20. Jahrhunderts in Kalifornien von japanischen Einwanderern erfunden.",
        nl: "Gelukskoekjes werden begin 1900 uitgevonden in Californië door Japanse immigranten."
      }
    },
    {
      id: 'hist_57',
      question: {
        en: "The can opener was invented 48 years after the can.",
        es: "El abrelatas fue inventado 48 años después de la lata.",
        de: "Der Dosenöffner wurde 48 Jahre nach der Dose erfunden.",
        nl: "De blikopener werd 48 jaar na het blik uitgevonden."
      },
      isTrue: true,
      explanation: {
        en: "Cans were invented in 1810, but the first can opener wasn't patented until 1858. People used hammers and chisels before that.",
        es: "Las latas fueron inventadas en 1810, pero el primer abrelatas no fue patentado hasta 1858.",
        de: "Dosen wurden 1810 erfunden, aber der erste Dosenöffner wurde erst 1858 patentiert.",
        nl: "Blikken werden uitgevonden in 1810, maar de eerste blikopener werd pas in 1858 gepatenteerd."
      }
    },
    {
      id: 'hist_58',
      question: {
        en: "Anne Frank and Martin Luther King Jr. were born in the same year.",
        es: "Anne Frank y Martin Luther King Jr. nacieron en el mismo año.",
        de: "Anne Frank und Martin Luther King Jr. wurden im selben Jahr geboren.",
        nl: "Anne Frank en Martin Luther King Jr. werden in hetzelfde jaar geboren."
      },
      isTrue: true,
      explanation: {
        en: "Both were born in 1929, showing how recent and overlapping these historical periods were.",
        es: "Ambos nacieron en 1929, mostrando cuán recientes y superpuestos fueron estos períodos históricos.",
        de: "Beide wurden 1929 geboren, was zeigt, wie jüngst und überlappend diese historischen Perioden waren.",
        nl: "Beiden werden geboren in 1929, wat aantoont hoe recent en overlappend deze historische periodes waren."
      }
    },
    {
      id: 'hist_59',
      question: {
        en: "The world's oldest known recipe is for beer.",
        es: "La receta más antigua conocida del mundo es para cerveza.",
        de: "Das älteste bekannte Rezept der Welt ist für Bier.",
        nl: "Het oudst bekende recept ter wereld is voor bier."
      },
      isTrue: true,
      explanation: {
        en: "A 4,000-year-old Sumerian poem honoring the goddess Ninkasi contains the oldest known recipe for making beer.",
        es: "Un poema sumerio de 4,000 años en honor a la diosa Ninkasi contiene la receta más antigua conocida para hacer cerveza.",
        de: "Ein 4.000 Jahre altes sumerisches Gedicht zu Ehren der Göttin Ninkasi enthält das älteste bekannte Bierrezept.",
        nl: "Een 4.000 jaar oud Soemerisch gedicht ter ere van de godin Ninkasi bevat het oudst bekende recept voor bier."
      }
    },
    {
      id: 'hist_60',
      question: {
        en: "Alexander the Great conquered most of the known world before age 30.",
        es: "Alejandro Magno conquistó la mayor parte del mundo conocido antes de los 30 años.",
        de: "Alexander der Große eroberte den größten Teil der bekannten Welt vor dem Alter von 30 Jahren.",
        nl: "Alexander de Grote veroverde het grootste deel van de bekende wereld voor zijn 30ste."
      },
      isTrue: true,
      explanation: {
        en: "Alexander died at 32, having conquered an empire stretching from Greece to India by age 30.",
        es: "Alejandro murió a los 32 años, habiendo conquistado un imperio que se extendía desde Grecia hasta India a los 30.",
        de: "Alexander starb mit 32, nachdem er mit 30 ein Reich von Griechenland bis Indien erobert hatte.",
        nl: "Alexander stierf op 32-jarige leeftijd, nadat hij op 30-jarige leeftijd een rijk had veroverd van Griekenland tot India."
      }
    },
    {
      id: 'hist_61',
      question: {
        en: "The Black Death killed approximately half of Europe's population.",
        es: "La Peste Negra mató aproximadamente a la mitad de la población de Europa.",
        de: "Der Schwarze Tod tötete ungefähr die Hälfte der europäischen Bevölkerung.",
        nl: "De Zwarte Dood doodde ongeveer de helft van Europa's bevolking."
      },
      isTrue: true,
      explanation: {
        en: "The plague pandemic of 1347-1351 killed an estimated 75-200 million people, about 30-60% of Europe's population.",
        es: "La pandemia de peste de 1347-1351 mató a unos 75-200 millones de personas, alrededor del 30-60% de la población europea.",
        de: "Die Pest-Pandemie von 1347-1351 tötete schätzungsweise 75-200 Millionen Menschen, etwa 30-60% der europäischen Bevölkerung.",
        nl: "De pestpandemie van 1347-1351 doodde naar schatting 75-200 miljoen mensen, ongeveer 30-60% van Europa's bevolking."
      }
    },
    {
      id: 'hist_62',
      question: {
        en: "The first recorded use of the 'F-word' was in a 15th-century poem.",
        es: "El primer uso registrado de la 'palabra F' fue en un poema del siglo XV.",
        de: "Die erste aufgezeichnete Verwendung des 'F-Worts' war in einem Gedicht aus dem 15. Jahrhundert.",
        nl: "Het eerste geregistreerde gebruik van het 'F-woord' was in een 15e-eeuws gedicht."
      },
      isTrue: true,
      explanation: {
        en: "The word appears in a 1475 poem satirizing the monks of Ely, England.",
        es: "La palabra aparece en un poema de 1475 que satiriza a los monjes de Ely, Inglaterra.",
        de: "Das Wort erscheint in einem Gedicht von 1475, das die Mönche von Ely, England satirisiert.",
        nl: "Het woord verschijnt in een gedicht uit 1475 dat de monniken van Ely, Engeland satiriseert."
      }
    },
    {
      id: 'hist_63',
      question: {
        en: "Stonehenge is older than the Egyptian pyramids.",
        es: "Stonehenge es más antiguo que las pirámides egipcias.",
        de: "Stonehenge ist älter als die ägyptischen Pyramiden.",
        nl: "Stonehenge is ouder dan de Egyptische piramides."
      },
      isTrue: false,
      explanation: {
        en: "The Great Pyramid was built around 2560 BC, while Stonehenge was completed around 2400 BC.",
        es: "La Gran Pirámide fue construida alrededor del 2560 a.C., mientras que Stonehenge se completó alrededor del 2400 a.C.",
        de: "Die Große Pyramide wurde um 2560 v. Chr. gebaut, während Stonehenge um 2400 v. Chr. fertiggestellt wurde.",
        nl: "De Grote Piramide werd gebouwd rond 2560 v.Chr., terwijl Stonehenge werd voltooid rond 2400 v.Chr."
      }
    },
    {
      id: 'hist_64',
      question: {
        en: "The first underground railway was built in London.",
        es: "El primer ferrocarril subterráneo fue construido en Londres.",
        de: "Die erste U-Bahn wurde in London gebaut.",
        nl: "De eerste ondergrondse spoorweg werd gebouwd in Londen."
      },
      isTrue: true,
      explanation: {
        en: "The London Underground opened in 1863, making it the world's first underground railway system.",
        es: "El Metro de Londres se abrió en 1863, convirtiéndose en el primer sistema ferroviario subterráneo del mundo.",
        de: "Die Londoner U-Bahn wurde 1863 eröffnet und war damit das erste U-Bahn-System der Welt.",
        nl: "De Londense Underground opende in 1863, waarmee het 's werelds eerste ondergrondse spoorwegsysteem werd."
      }
    },
    {
      id: 'hist_65',
      question: {
        en: "Catherine the Great of Russia died while on the toilet.",
        es: "Catalina la Grande de Rusia murió mientras estaba en el inodoro.",
        de: "Katharina die Große von Russland starb auf der Toilette.",
        nl: "Catharina de Grote van Rusland stierf op het toilet."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. She died in bed the day after suffering a stroke in her chambers.",
        es: "Esto es un mito. Murió en la cama el día después de sufrir un derrame cerebral en sus aposentos.",
        de: "Dies ist ein Mythos. Sie starb im Bett einen Tag nach einem Schlaganfall in ihren Gemächern.",
        nl: "Dit is een mythe. Ze stierf in bed de dag nadat ze een beroerte had in haar kamers."
      }
    },
    {
      id: 'hist_66',
      question: {
        en: "The first person to go over Niagara Falls in a barrel and survive was a 63-year-old woman.",
        es: "La primera persona en pasar por las Cataratas del Niágara en un barril y sobrevivir fue una mujer de 63 años.",
        de: "Die erste Person, die in einem Fass über die Niagarafälle ging und überlebte, war eine 63-jährige Frau.",
        nl: "De eerste persoon die over Niagara Falls ging in een ton en overleefde was een 63-jarige vrouw."
      },
      isTrue: true,
      explanation: {
        en: "Annie Edson Taylor accomplished this feat on her 63rd birthday in 1901.",
        es: "Annie Edson Taylor logró esta hazaña en su 63 cumpleaños en 1901.",
        de: "Annie Edson Taylor vollbrachte diese Leistung an ihrem 63. Geburtstag im Jahr 1901.",
        nl: "Annie Edson Taylor voltooide deze prestatie op haar 63e verjaardag in 1901."
      }
    },
    {
      id: 'hist_67',
      question: {
        en: "There was once a female Pope in the Catholic Church.",
        es: "Hubo una vez una Papa mujer en la Iglesia Católica.",
        de: "Es gab einmal eine weibliche Päpstin in der katholischen Kirche.",
        nl: "Er was ooit een vrouwelijke Paus in de Katholieke Kerk."
      },
      isTrue: false,
      explanation: {
        en: "The legend of 'Pope Joan' claims a woman disguised as a man became Pope in the 9th century, but historians agree this is a medieval myth with no historical evidence.",
        es: "La leyenda de la 'Papisa Juana' afirma que una mujer disfrazada de hombre se convirtió en Papa en el siglo IX, pero los historiadores están de acuerdo en que es un mito medieval.",
        de: "Die Legende der 'Päpstin Johanna' behauptet, eine als Mann verkleidete Frau wurde im 9. Jahrhundert Papst, aber Historiker sind sich einig, dass dies ein mittelalterlicher Mythos ist.",
        nl: "De legende van 'Paus Johanna' beweert dat een als man vermomde vrouw in de 9e eeuw Paus werd, maar historici zijn het erover eens dat dit een middeleeuwse mythe is."
      }
    },
    {
      id: 'hist_68',
      question: {
        en: "The original London Bridge is now in Arizona.",
        es: "El Puente de Londres original ahora está en Arizona.",
        de: "Die ursprüngliche London Bridge befindet sich jetzt in Arizona.",
        nl: "De oorspronkelijke London Bridge staat nu in Arizona."
      },
      isTrue: true,
      explanation: {
        en: "The 1831 London Bridge was sold and rebuilt in Lake Havasu City, Arizona in 1971.",
        es: "El Puente de Londres de 1831 fue vendido y reconstruido en Lake Havasu City, Arizona en 1971.",
        de: "Die London Bridge von 1831 wurde verkauft und 1971 in Lake Havasu City, Arizona wiederaufgebaut.",
        nl: "De London Bridge van 1831 werd verkocht en herbouwd in Lake Havasu City, Arizona in 1971."
      }
    },
    {
      id: 'hist_69',
      question: {
        en: "The Salem Witch Trials involved burning witches at the stake.",
        es: "Los Juicios de las Brujas de Salem involucraron quemar brujas en la hoguera.",
        de: "Die Hexenprozesse von Salem beinhalteten das Verbrennen von Hexen auf dem Scheiterhaufen.",
        nl: "De Heksenprocessen van Salem betroffen het verbranden van heksen op de brandstapel."
      },
      isTrue: false,
      explanation: {
        en: "No one was burned. The 20 people executed were hanged, and one was pressed to death with stones.",
        es: "Nadie fue quemado. Las 20 personas ejecutadas fueron ahorcadas, y una fue aplastada hasta la muerte con piedras.",
        de: "Niemand wurde verbrannt. Die 20 hingerichteten Personen wurden gehängt, und einer wurde mit Steinen zu Tode gepresst.",
        nl: "Niemand werd verbrand. De 20 geëxecuteerde personen werden opgehangen, en één werd doodgedrukt met stenen."
      }
    },
    {
      id: 'hist_70',
      question: {
        en: "Witches were burned at the stake during the Salem Witch Trials.",
        es: "Las brujas fueron quemadas en la hoguera durante los Juicios de Salem.",
        de: "Hexen wurden während der Hexenprozesse von Salem auf dem Scheiterhaufen verbrannt.",
        nl: "Heksen werden op de brandstapel verbrand tijdens de Heksenprocessen van Salem."
      },
      isTrue: false,
      explanation: {
        en: "None were burned. They were hanged. Burning witches was a European practice, not used in the American colonies.",
        es: "Ninguna fue quemada. Fueron ahorcadas. Quemar brujas era una práctica europea, no usada en las colonias americanas.",
        de: "Keine wurde verbrannt. Sie wurden gehängt. Hexenverbrennung war eine europäische Praxis.",
        nl: "Geen enkele werd verbrand. Ze werden opgehangen. Heksen verbranden was een Europese praktijk."
      }
    },
    {
      id: 'hist_71',
      question: {
        en: "King Tut's tomb was discovered completely intact.",
        es: "La tumba del Rey Tut fue descubierta completamente intacta.",
        de: "König Tuts Grab wurde völlig intakt entdeckt.",
        nl: "Koning Toet's graf werd volledig intact ontdekt."
      },
      isTrue: false,
      explanation: {
        en: "The tomb had been entered by robbers twice in antiquity, though most treasures remained.",
        es: "La tumba había sido visitada por ladrones dos veces en la antigüedad, aunque la mayoría de los tesoros permanecieron.",
        de: "Das Grab wurde zweimal in der Antike von Räubern betreten, obwohl die meisten Schätze verblieben.",
        nl: "Het graf was twee keer in de oudheid bezocht door rovers, hoewel de meeste schatten bleven."
      }
    },
    {
      id: 'hist_72',
      question: {
        en: "The Mayflower Pilgrims landed at Plymouth Rock.",
        es: "Los Peregrinos del Mayflower desembarcaron en Plymouth Rock.",
        de: "Die Mayflower-Pilger landeten am Plymouth Rock.",
        nl: "De Mayflower Pelgrims landden bij Plymouth Rock."
      },
      isTrue: false,
      explanation: {
        en: "They first landed at Provincetown. Plymouth Rock wasn't mentioned as a landing site until 1741.",
        es: "Primero desembarcaron en Provincetown. Plymouth Rock no fue mencionada como sitio de desembarco hasta 1741.",
        de: "Sie landeten zuerst in Provincetown. Plymouth Rock wurde erst 1741 als Landeplatz erwähnt.",
        nl: "Ze landden eerst in Provincetown. Plymouth Rock werd pas in 1741 genoemd als landingsplaats."
      }
    },
    {
      id: 'hist_73',
      question: {
        en: "The Rosetta Stone helped decode Egyptian hieroglyphics.",
        es: "La Piedra de Rosetta ayudó a descifrar los jeroglíficos egipcios.",
        de: "Der Stein von Rosetta half, ägyptische Hieroglyphen zu entschlüsseln.",
        nl: "De Steen van Rosetta hielp Egyptische hiërogliefen te ontcijferen."
      },
      isTrue: true,
      explanation: {
        en: "The Rosetta Stone contains the same text in three scripts, enabling scholars to decipher hieroglyphics.",
        es: "La Piedra de Rosetta contiene el mismo texto en tres escrituras, permitiendo a los eruditos descifrar los jeroglíficos.",
        de: "Der Stein von Rosetta enthält denselben Text in drei Schriften, was Gelehrten ermöglichte, Hieroglyphen zu entschlüsseln.",
        nl: "De Steen van Rosetta bevat dezelfde tekst in drie schriften, waardoor geleerden hiërogliefen konden ontcijferen."
      }
    },
    {
      id: 'hist_74',
      question: {
        en: "The shortest war in recorded history lasted 38 to 45 minutes.",
        es: "La guerra más corta en la historia registrada duró de 38 a 45 minutos.",
        de: "Der kürzeste Krieg in der aufgezeichneten Geschichte dauerte 38 bis 45 Minuten.",
        nl: "De kortste oorlog in de geregistreerde geschiedenis duurde 38 tot 45 minuten."
      },
      isTrue: true,
      explanation: {
        en: "The Anglo-Zanzibar War on August 27, 1896, is the shortest war on record.",
        es: "La Guerra Anglo-Zanzibariana del 27 de agosto de 1896 es la guerra más corta registrada.",
        de: "Der Anglo-Sansibarische Krieg am 27. August 1896 ist der kürzeste aufgezeichnete Krieg.",
        nl: "De Anglo-Zanzibar Oorlog op 27 augustus 1896 is de kortste geregistreerde oorlog."
      }
    },
    {
      id: 'hist_75',
      question: {
        en: "Benjamin Franklin proposed that the turkey be the national bird of the United States.",
        es: "Benjamin Franklin propuso que el pavo fuera el ave nacional de Estados Unidos.",
        de: "Benjamin Franklin schlug vor, dass der Truthahn der Nationalvogel der USA sein sollte.",
        nl: "Benjamin Franklin stelde voor dat de kalkoen de nationale vogel van de Verenigde Staten zou zijn."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. Franklin never formally proposed this, though he did write that he thought the turkey more respectable than the eagle.",
        es: "Esto es un mito. Franklin nunca propuso esto formalmente, aunque escribió que pensaba que el pavo era más respetable que el águila.",
        de: "Dies ist ein Mythos. Franklin schlug dies nie formell vor, obwohl er schrieb, dass er den Truthahn respektabler als den Adler fand.",
        nl: "Dit is een mythe. Franklin stelde dit nooit formeel voor, hoewel hij schreef dat hij de kalkoen respectabeler vond dan de adelaar."
      }
    },
    {
      id: 'hist_76',
      question: {
        en: "Ancient Romans used to vomit during feasts so they could eat more.",
        es: "Los antiguos romanos solían vomitar durante los banquetes para poder comer más.",
        de: "Die alten Römer erbrachen sich während Festmahlen, um mehr essen zu können.",
        nl: "Oude Romeinen braakten tijdens feesten zodat ze meer konden eten."
      },
      isTrue: false,
      explanation: {
        en: "This is largely a myth. While vomitoriums existed, they were actually passages for crowds to exit, not rooms for vomiting.",
        es: "Esto es en gran parte un mito. Aunque existían vomitorios, en realidad eran pasajes para que las multitudes salieran.",
        de: "Dies ist größtenteils ein Mythos. Vomitorien waren Durchgänge für Menschenmengen zum Ausgang, keine Räume zum Erbrechen.",
        nl: "Dit is grotendeels een mythe. Hoewel vomitoria bestonden, waren het eigenlijk doorgangen voor menigtes om te verlaten."
      }
    },
    {
      id: 'hist_77',
      question: {
        en: "The Olympic Games were banned for over 1,000 years.",
        es: "Los Juegos Olímpicos fueron prohibidos durante más de 1,000 años.",
        de: "Die Olympischen Spiele wurden über 1.000 Jahre lang verboten.",
        nl: "De Olympische Spelen werden meer dan 1.000 jaar verboden."
      },
      isTrue: true,
      explanation: {
        en: "The ancient Olympics were banned by Roman Emperor Theodosius I in 393 AD and weren't revived until 1896.",
        es: "Los antiguos Juegos Olímpicos fueron prohibidos por el Emperador Romano Teodosio I en 393 d.C. y no se revivieron hasta 1896.",
        de: "Die antiken Olympischen Spiele wurden 393 n. Chr. von Kaiser Theodosius I. verboten und erst 1896 wiederbelebt.",
        nl: "De oude Olympische Spelen werden verboden door Romeinse Keizer Theodosius I in 393 na Christus en werden pas in 1896 nieuw leven ingeblazen."
      }
    },
    {
      id: 'hist_78',
      question: {
        en: "The Wright Brothers' first flight was shorter than the wingspan of a Boeing 747.",
        es: "El primer vuelo de los Hermanos Wright fue más corto que la envergadura de un Boeing 747.",
        de: "Der erste Flug der Wright Brothers war kürzer als die Spannweite einer Boeing 747.",
        nl: "De eerste vlucht van de Wright Brothers was korter dan de spanwijdte van een Boeing 747."
      },
      isTrue: true,
      explanation: {
        en: "The Wright Brothers' first flight covered 120 feet. A Boeing 747's wingspan is 211 feet.",
        es: "El primer vuelo de los Hermanos Wright cubrió 120 pies. La envergadura de un Boeing 747 es de 211 pies.",
        de: "Der erste Flug der Wright Brothers betrug 120 Fuß. Die Spannweite einer Boeing 747 beträgt 211 Fuß.",
        nl: "De eerste vlucht van de Wright Brothers bedroeg 120 voet. De spanwijdte van een Boeing 747 is 211 voet."
      }
    },
    {
      id: 'hist_79',
      question: {
        en: "The electric chair was invented by a dentist.",
        es: "La silla eléctrica fue inventada por un dentista.",
        de: "Der elektrische Stuhl wurde von einem Zahnarzt erfunden.",
        nl: "De elektrische stoel werd uitgevonden door een tandarts."
      },
      isTrue: true,
      explanation: {
        en: "Alfred P. Southwick, a dentist, invented the electric chair in 1881 after witnessing someone die by accidental electrocution.",
        es: "Alfred P. Southwick, un dentista, inventó la silla eléctrica en 1881 después de presenciar a alguien morir por electrocución accidental.",
        de: "Alfred P. Southwick, ein Zahnarzt, erfand 1881 den elektrischen Stuhl, nachdem er jemanden durch versehentliche Elektrokution sterben sah.",
        nl: "Alfred P. Southwick, een tandarts, vond de elektrische stoel uit in 1881 na het zien van iemand die stierf door onbedoelde elektrocutie."
      }
    },
    {
      id: 'hist_80',
      question: {
        en: "Ketchup was sold as medicine in the 1830s.",
        es: "El kétchup se vendió como medicina en la década de 1830.",
        de: "Ketchup wurde in den 1830er Jahren als Medizin verkauft.",
        nl: "Ketchup werd verkocht als medicijn in de jaren 1830."
      },
      isTrue: true,
      explanation: {
        en: "In 1834, ketchup was sold as Dr. Miles' Compound Extract of Tomato and was claimed to cure diarrhea, jaundice, and indigestion.",
        es: "En 1834, el kétchup se vendió como Extracto Compuesto de Tomate del Dr. Miles y se afirmaba que curaba diarrea, ictericia e indigestión.",
        de: "1834 wurde Ketchup als Dr. Miles' Compound Extract of Tomato verkauft und behauptete, Durchfall, Gelbsucht und Verdauungsstörungen zu heilen.",
        nl: "In 1834 werd ketchup verkocht als Dr. Miles' Compound Extract of Tomato en zou diarree, geelzucht en spijsvertering genezen."
      }
    },
    {
      id: 'hist_81',
      question: {
        en: "The Irish Potato Famine was caused solely by potato blight.",
        es: "La Gran Hambruna Irlandesa fue causada únicamente por el tizón de la papa.",
        de: "Die Irische Kartoffelhungersnot wurde ausschließlich durch die Kartoffelfäule verursacht.",
        nl: "De Ierse Hongersnood werd uitsluitend veroorzaakt door aardappelziekte."
      },
      isTrue: false,
      explanation: {
        en: "While blight destroyed crops, the famine was worsened by British colonial policies and continued food exports from Ireland.",
        es: "Aunque el tizón destruyó los cultivos, la hambruna empeoró por las políticas coloniales británicas y las continuas exportaciones de alimentos.",
        de: "Während die Fäule Ernten zerstörte, wurde die Hungersnot durch britische Kolonialpolitik und fortgesetzte Nahrungsexporte verschlimmert.",
        nl: "Hoewel de ziekte gewassen vernietigde, werd de hongersnood verergerd door Brits koloniaal beleid en voortdurende voedselexport."
      }
    },
    {
      id: 'hist_82',
      question: {
        en: "The Statue of Liberty was a gift from France to the United States.",
        es: "La Estatua de la Libertad fue un regalo de Francia a los Estados Unidos.",
        de: "Die Freiheitsstatue war ein Geschenk Frankreichs an die Vereinigten Staaten.",
        nl: "Het Vrijheidsbeeld was een geschenk van Frankrijk aan de Verenigde Staten."
      },
      isTrue: true,
      explanation: {
        en: "The Statue of Liberty was given to the United States by France in 1886 as a symbol of friendship and freedom.",
        es: "La Estatua de la Libertad fue entregada a los Estados Unidos por Francia en 1886 como símbolo de amistad y libertad.",
        de: "Die Freiheitsstatue wurde den Vereinigten Staaten 1886 von Frankreich als Symbol der Freundschaft und Freiheit geschenkt.",
        nl: "Het Vrijheidsbeeld werd in 1886 door Frankrijk aan de Verenigde Staten gegeven als symbool van vriendschap en vrijheid."
      }
    },
    {
      id: 'hist_83',
      question: {
        en: "The Great Wall of China was built to keep out the Mongols.",
        es: "La Gran Muralla China fue construida para mantener fuera a los mongoles.",
        de: "Die Chinesische Mauer wurde gebaut, um die Mongolen fernzuhalten.",
        nl: "De Chinese Muur werd gebouwd om de Mongolen buiten te houden."
      },
      isTrue: false,
      explanation: {
        en: "The wall was built over centuries against various northern invasions, not specifically the Mongols who actually conquered China anyway.",
        es: "La muralla fue construida durante siglos contra varias invasiones del norte, no específicamente contra los mongoles.",
        de: "Die Mauer wurde über Jahrhunderte gegen verschiedene nördliche Invasionen gebaut, nicht speziell gegen die Mongolen.",
        nl: "De muur werd over eeuwen gebouwd tegen verschillende noordelijke invasies, niet specifiek de Mongolen."
      }
    },
    {
      id: 'hist_84',
      question: {
        en: "Carrots were popularized during WWII as part of British propaganda.",
        es: "Las zanahorias se popularizaron durante la Segunda Guerra Mundial como parte de la propaganda británica.",
        de: "Karotten wurden während des Zweiten Weltkriegs als Teil britischer Propaganda populär gemacht.",
        nl: "Wortels werden populair gemaakt tijdens WOII als onderdeel van Britse propaganda."
      },
      isTrue: true,
      explanation: {
        en: "The British spread the myth that carrots improve night vision to hide the fact they had radar technology.",
        es: "Los británicos difundieron el mito de que las zanahorias mejoran la visión nocturna para ocultar que tenían tecnología de radar.",
        de: "Die Briten verbreiteten den Mythos, dass Karotten die Nachtsicht verbessern, um ihre Radartechnologie zu verbergen.",
        nl: "De Britten verspreidden de mythe dat wortels het nachtzicht verbeteren om hun radartechnologie te verbergen."
      }
    },
    {
      id: 'hist_85',
      question: {
        en: "Pirates actually made people walk the plank.",
        es: "Los piratas realmente hacían que la gente caminara por la plancha.",
        de: "Piraten ließen Menschen tatsächlich über die Planke gehen.",
        nl: "Piraten lieten mensen daadwerkelijk over de plank lopen."
      },
      isTrue: false,
      explanation: {
        en: "This is mostly a myth popularized by literature. Pirates typically killed or marooned enemies more efficiently.",
        es: "Esto es principalmente un mito popularizado por la literatura. Los piratas típicamente mataban o abandonaban enemigos más eficientemente.",
        de: "Dies ist hauptsächlich ein durch Literatur popularisierter Mythos. Piraten töteten oder setzten Feinde typischerweise effizienter aus.",
        nl: "Dit is voornamelijk een mythe gepopulariseerd door literatuur. Piraten doodden of verlieten vijanden typisch efficiënter."
      }
    },
    {
      id: 'hist_86',
      question: {
        en: "The Liberty Bell cracked the first time it was rung.",
        es: "La Campana de la Libertad se agrietó la primera vez que sonó.",
        de: "Die Freiheitsglocke bekam beim ersten Läuten einen Riss.",
        nl: "De Vrijheidsbel scheurde de eerste keer dat hij werd geluid."
      },
      isTrue: true,
      explanation: {
        en: "The bell cracked on its first test ring in 1752 and had to be recast twice.",
        es: "La campana se agrietó en su primera prueba de sonido en 1752 y tuvo que ser refundida dos veces.",
        de: "Die Glocke bekam beim ersten Testläuten 1752 einen Riss und musste zweimal umgegossen werden.",
        nl: "De bel scheurde bij het eerste testluiden in 1752 en moest twee keer opnieuw worden gegoten."
      }
    },
    {
      id: 'hist_87',
      question: {
        en: "The word 'assassin' comes from 'hashish' users.",
        es: "La palabra 'asesino' proviene de usuarios de 'hachís'.",
        de: "Das Wort 'Assassine' kommt von 'Haschisch'-Nutzern.",
        nl: "Het woord 'assassijn' komt van 'hasjiesj' gebruikers."
      },
      isTrue: true,
      explanation: {
        en: "The word derives from 'Hashshashin,' a secretive order of Nizari Ismailis who allegedly used hashish.",
        es: "La palabra deriva de 'Hashshashin,' una orden secreta de nizaríes ismaelitas que supuestamente usaban hachís.",
        de: "Das Wort stammt von 'Hashshashin,' einem geheimen Orden der Nizari-Ismaeliten, die angeblich Haschisch verwendeten.",
        nl: "Het woord komt van 'Hashshashin,' een geheime orde van Nizari Ismaëlieten die naar verluidt hasjiesj gebruikten."
      }
    },
    {
      id: 'hist_88',
      question: {
        en: "The Pony Express delivered mail coast-to-coast across America.",
        es: "El Pony Express entregó correo de costa a costa a través de América.",
        de: "Der Pony Express lieferte Post quer durch Amerika von Küste zu Küste.",
        nl: "De Pony Express leverde post van kust tot kust door Amerika."
      },
      isTrue: false,
      explanation: {
        en: "The Pony Express ran from Missouri to California, not truly coast-to-coast.",
        es: "El Pony Express corría desde Missouri hasta California, no verdaderamente de costa a costa.",
        de: "Der Pony Express lief von Missouri nach Kalifornien, nicht wirklich von Küste zu Küste.",
        nl: "De Pony Express liep van Missouri naar Californië, niet echt van kust tot kust."
      }
    },
    {
      id: 'hist_89',
      question: {
        en: "Mozart was buried in a pauper's grave.",
        es: "Mozart fue enterrado en una tumba de indigente.",
        de: "Mozart wurde in einem Armengrab begraben.",
        nl: "Mozart werd begraven in een armenzerk."
      },
      isTrue: true,
      explanation: {
        en: "Mozart was buried in a common grave in Vienna, which was standard practice for the time, not due to poverty.",
        es: "Mozart fue enterrado en una tumba común en Viena, que era práctica estándar para la época, no debido a pobreza.",
        de: "Mozart wurde in einem Gemeinschaftsgrab in Wien begraben, was damals üblich war, nicht wegen Armut.",
        nl: "Mozart werd begraven in een gemeenschappelijk graf in Wenen, wat standaardpraktijk was voor die tijd, niet vanwege armoede."
      }
    },
    {
      id: 'hist_90',
      question: {
        en: "The Nazis invented Fanta.",
        es: "Los nazis inventaron Fanta.",
        de: "Die Nazis erfanden Fanta.",
        nl: "De nazi's vonden Fanta uit."
      },
      isTrue: true,
      explanation: {
        en: "Fanta was created in Nazi Germany in 1940 when Coca-Cola syrup couldn't be imported due to WWII trade embargoes.",
        es: "Fanta fue creada en la Alemania Nazi en 1940 cuando el jarabe de Coca-Cola no pudo ser importado debido a embargos comerciales.",
        de: "Fanta wurde 1940 in Nazi-Deutschland kreiert, als Coca-Cola-Sirup aufgrund von Handelsembargos nicht importiert werden konnte.",
        nl: "Fanta werd in 1940 gecreëerd in Nazi-Duitsland toen Coca-Cola siroop niet kon worden geïmporteerd vanwege handelsembargo's."
      }
    },
    {
      id: 'hist_91',
      question: {
        en: "The youngest person ever executed in the United States was 14 years old.",
        es: "La persona más joven ejecutada en Estados Unidos tenía 14 años.",
        de: "Die jüngste jemals in den USA hingerichtete Person war 14 Jahre alt.",
        nl: "De jongste persoon ooit geëxecuteerd in de Verenigde Staten was 14 jaar oud."
      },
      isTrue: true,
      explanation: {
        en: "George Stinney Jr. was executed by electric chair in 1944 at age 14. He was later exonerated in 2014.",
        es: "George Stinney Jr. fue ejecutado en silla eléctrica en 1944 a los 14 años. Fue exonerado posteriormente en 2014.",
        de: "George Stinney Jr. wurde 1944 im Alter von 14 Jahren auf dem elektrischen Stuhl hingerichtet. 2014 wurde er entlastet.",
        nl: "George Stinney Jr. werd in 1944 op 14-jarige leeftijd geëxecuteerd via de elektrische stoel. Hij werd in 2014 vrijgesproken."
      }
    },
    {
      id: 'hist_92',
      question: {
        en: "The bikini swimsuit was named after a nuclear testing site.",
        es: "El traje de baño bikini fue nombrado en honor a un sitio de pruebas nucleares.",
        de: "Der Bikini-Badeanzug wurde nach einem Atomtestgelände benannt.",
        nl: "Het bikini zwempak werd vernoemd naar een nucleaire testlocatie."
      },
      isTrue: true,
      explanation: {
        en: "The bikini was named after Bikini Atoll, where the US conducted nuclear tests, because its designer thought it would be 'explosive.'",
        es: "El bikini fue nombrado en honor al Atolón de Bikini, donde EE.UU. realizó pruebas nucleares, porque su diseñador pensó que sería 'explosivo.'",
        de: "Der Bikini wurde nach dem Bikini-Atoll benannt, wo die USA Atomtests durchführten, weil sein Designer dachte, er wäre 'explosiv.'",
        nl: "De bikini werd vernoemd naar Bikini Atol, waar de VS nucleaire tests uitvoerde, omdat de ontwerper dacht dat het 'explosief' zou zijn."
      }
    },
    {
      id: 'hist_93',
      question: {
        en: "Heroin was originally marketed as cough medicine for children.",
        es: "La heroína se comercializó originalmente como medicina para la tos para niños.",
        de: "Heroin wurde ursprünglich als Hustenmittel für Kinder vermarktet.",
        nl: "Heroïne werd oorspronkelijk op de markt gebracht als hoestmedicijn voor kinderen."
      },
      isTrue: true,
      explanation: {
        en: "Bayer pharmaceutical company marketed heroin as a non-addictive cough suppressant from 1898 to 1910.",
        es: "La compañía farmacéutica Bayer comercializó la heroína como un supresor de tos no adictivo desde 1898 hasta 1910.",
        de: "Die Pharmafirma Bayer vermarktete Heroin von 1898 bis 1910 als nicht süchtig machendes Hustenmittel.",
        nl: "Bayer farmaceutisch bedrijf vermarkte heroïne als een niet-verslavende hoestonderdrukker van 1898 tot 1910."
      }
    },
    {
      id: 'hist_94',
      question: {
        en: "The first known vending machine dispensed holy water.",
        es: "La primera máquina expendedora conocida dispensaba agua bendita.",
        de: "Der erste bekannte Verkaufsautomat gab Weihwasser aus.",
        nl: "De eerste bekende automaat gaf wijwater uit."
      },
      isTrue: true,
      explanation: {
        en: "The ancient Greek mathematician Hero of Alexandria created a coin-operated holy water dispenser around 215 BC.",
        es: "El antiguo matemático griego Herón de Alejandría creó un dispensador de agua bendita activado por monedas alrededor del 215 a.C.",
        de: "Der antike griechische Mathematiker Heron von Alexandria schuf um 215 v. Chr. einen münzbetriebenen Weihwasserspender.",
        nl: "De oude Griekse wiskundige Heron van Alexandrië creëerde rond 215 v.Chr. een muntstuk-bediende wijwaterdispenser."
      }
    },
    {
      id: 'hist_95',
      question: {
        en: "The ancient Egyptians invented toothpaste.",
        es: "Los antiguos egipcios inventaron la pasta de dientes.",
        de: "Die alten Ägypter erfanden Zahnpasta.",
        nl: "De oude Egyptenaren vonden tandpasta uit."
      },
      isTrue: true,
      explanation: {
        en: "Ancient Egyptians created tooth powder using crushed rock salt, mint, dried iris flowers, and pepper around 5000 BC.",
        es: "Los antiguos egipcios crearon polvo dental usando sal de roca triturada, menta, flores de iris secas y pimienta alrededor del 5000 a.C.",
        de: "Die alten Ägypter schufen Zahnpulver mit zerstoßenem Steinsalz, Minze, getrockneten Irisblüten und Pfeffer um 5000 v. Chr.",
        nl: "Oude Egyptenaren creëerden tandpoeder met gebroken steenzout, munt, gedroogde iris bloemen en peper rond 5000 v.Chr."
      }
    },
    {
      id: 'hist_96',
      question: {
        en: "The Olympics used to award medals for art competitions.",
        es: "Los Juegos Olímpicos solían otorgar medallas por competencias de arte.",
        de: "Bei den Olympischen Spielen wurden früher Medaillen für Kunstwettbewerbe verliehen.",
        nl: "De Olympische Spelen kenden ooit medailles toe voor kunstwedstrijden."
      },
      isTrue: true,
      explanation: {
        en: "From 1912 to 1948, the Olympics awarded medals for architecture, literature, music, painting, and sculpture.",
        es: "Desde 1912 hasta 1948, los Juegos Olímpicos otorgaron medallas por arquitectura, literatura, música, pintura y escultura.",
        de: "Von 1912 bis 1948 vergaben die Olympischen Spiele Medaillen für Architektur, Literatur, Musik, Malerei und Bildhauerei.",
        nl: "Van 1912 tot 1948 kenden de Olympische Spelen medailles toe voor architectuur, literatuur, muziek, schilderkunst en beeldhouwkunst."
      }
    },
    {
      id: 'hist_97',
      question: {
        en: "The oldest known song is over 3,000 years old.",
        es: "La canción más antigua conocida tiene más de 3,000 años.",
        de: "Das älteste bekannte Lied ist über 3.000 Jahre alt.",
        nl: "Het oudst bekende lied is meer dan 3.000 jaar oud."
      },
      isTrue: true,
      explanation: {
        en: "The Hurrian Hymn No. 6, found in Ugarit, Syria, dates back to approximately 1400 BC.",
        es: "El Himno Hurrita No. 6, encontrado en Ugarit, Siria, data de aproximadamente 1400 a.C.",
        de: "Die Hurrische Hymne Nr. 6, gefunden in Ugarit, Syrien, stammt aus etwa 1400 v. Chr.",
        nl: "De Hurrische Hymne Nr. 6, gevonden in Ugarit, Syrië, dateert van ongeveer 1400 v.Chr."
      }
    },
    {
      id: 'hist_98',
      question: {
        en: "Ice cream cones were invented at the 1904 World's Fair.",
        es: "Los conos de helado fueron inventados en la Feria Mundial de 1904.",
        de: "Eistüten wurden auf der Weltausstellung 1904 erfunden.",
        nl: "IJshoorntjes werden uitgevonden op de Wereldtentoonstelling van 1904."
      },
      isTrue: true,
      explanation: {
        en: "The ice cream cone was popularized at the 1904 St. Louis World's Fair when an ice cream vendor ran out of cups.",
        es: "El cono de helado se popularizó en la Feria Mundial de St. Louis de 1904 cuando un vendedor de helados se quedó sin vasos.",
        de: "Die Eistüte wurde auf der Weltausstellung 1904 in St. Louis populär, als einem Eisverkäufer die Becher ausgingen.",
        nl: "Het ijshoorntje werd populair op de Wereldtentoonstelling van St. Louis in 1904 toen een ijsverkoper geen bekertjes meer had."
      }
    },
    {
      id: 'hist_99',
      question: {
        en: "The longest reigning monarch in history was a king.",
        es: "El monarca con el reinado más largo de la historia fue un rey.",
        de: "Der am längsten regierende Monarch der Geschichte war ein König.",
        nl: "De langst regerende monarch in de geschiedenis was een koning."
      },
      isTrue: true,
      explanation: {
        en: "King Louis XIV of France reigned for 72 years (1643-1715), the longest verified reign of any monarch.",
        es: "El Rey Luis XIV de Francia reinó durante 72 años (1643-1715), el reinado verificado más largo de cualquier monarca.",
        de: "König Ludwig XIV. von Frankreich regierte 72 Jahre (1643-1715), die längste verifizierte Herrschaft eines Monarchen.",
        nl: "Koning Lodewijk XIV van Frankrijk regeerde 72 jaar (1643-1715), de langst geverifieerde regeringsperiode van een monarch."
      }
    },
    {
      id: 'hist_100',
      question: {
        en: "The first email was sent before the first mobile phone call.",
        es: "El primer correo electrónico fue enviado antes de la primera llamada de teléfono móvil.",
        de: "Die erste E-Mail wurde vor dem ersten Mobiltelefon-Anruf gesendet.",
        nl: "De eerste e-mail werd verzonden vóór het eerste mobiele telefoongesprek."
      },
      isTrue: true,
      explanation: {
        en: "The first email was sent in 1971 by Ray Tomlinson, while the first mobile phone call was made in 1973 by Martin Cooper.",
        es: "El primer correo electrónico fue enviado en 1971 por Ray Tomlinson, mientras que la primera llamada de teléfono móvil fue realizada en 1973 por Martin Cooper.",
        de: "Die erste E-Mail wurde 1971 von Ray Tomlinson gesendet, während der erste Mobiltelefon-Anruf 1973 von Martin Cooper getätigt wurde.",
        nl: "De eerste e-mail werd in 1971 verzonden door Ray Tomlinson, terwijl het eerste mobiele telefoongesprek in 1973 werd gemaakt door Martin Cooper."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['history'] = historyQuestions;

  console.log(`Loaded ${historyQuestions.length} history true/false questions`);

})();
