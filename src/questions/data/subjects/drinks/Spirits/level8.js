// Quiz - Level 8: Drinken - Sterke drank (Collector's & Vintage Spirits)
(function() {
    "use strict";

    const level8 = {
        name: {
            en: "Collector's & Vintage Spirits",
            es: "Licores de Colección y Vintage",
            de: "Sammler- & Vintage-Spirituosen",
            nl: "Collector's & Vintage Sterke Drank"
        },
        questions: [
            {
                question: {
                    en: "What makes a Macallan 1946 whisky so extraordinarily valuable to collectors?",
                    es: "¿Qué hace que un whisky Macallan 1946 sea tan extraordinariamente valioso para los coleccionistas?",
                    de: "Was macht einen Macallan 1946 Whisky für Sammler so außerordentlich wertvoll?",
                    nl: "Wat maakt een Macallan 1946 whisky zo buitengewoon waardevol voor verzamelaars?"
                },
                options: [
                    {
                        en: "Aged for over 75 years and extremely rare with unique wartime production",
                        es: "Envejecido por más de 75 años y extremadamente raro con producción única de tiempos de guerra",
                        de: "Über 75 Jahre gereift und extrem selten mit einzigartiger Kriegszeit-Produktion",
                        nl: "Meer dan 75 jaar gerijpt en extreem zeldzaam met unieke oorlogstijd productie"
                    },
                    {
                        en: "Made with a special blend of grains",
                        es: "Hecho con una mezcla especial de granos",
                        de: "Hergestellt mit einer speziellen Getreidemischung",
                        nl: "Gemaakt met een speciale mix van granen"
                    },
                    {
                        en: "First whisky to use sherry casks",
                        es: "Primer whisky en usar barricas de jerez",
                        de: "Erster Whisky mit Sherry-Fässern",
                        nl: "Eerste whisky die sherry vaten gebruikte"
                    },
                    {
                        en: "Limited to exactly 100 bottles",
                        es: "Limitado a exactamente 100 botellas",
                        de: "Begrenzt auf genau 100 Flaschen",
                        nl: "Beperkt tot precies 100 flessen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Macallan 1946 represents one of the oldest commercially available single malt whiskies, with production during WWII making it incredibly rare and historically significant.",
                    es: "El Macallan 1946 representa uno de los whiskies de malta más antiguos disponibles comercialmente, con producción durante la Segunda Guerra Mundial haciéndolo increíblemente raro e históricamente significativo.",
                    de: "Der Macallan 1946 repräsentiert einen der ältesten kommerziell verfügbaren Single Malt Whiskys, dessen Produktion während des Zweiten Weltkriegs ihn unglaublich selten und historisch bedeutsam macht.",
                    nl: "De Macallan 1946 vertegenwoordigt een van de oudste commercieel beschikbare single malt whisky's, met productie tijdens WOII wat het ongelooflijk zeldzaam en historisch belangrijk maakt."
                }
            },
            {
                question: {
                    en: "Which vintage Cognac house produced the legendary 'Grande Champagne 1811' commemorating Napoleon's son?",
                    es: "¿Qué casa de Cognac vintage produjo el legendario 'Grande Champagne 1811' conmemorando al hijo de Napoleón?",
                    de: "Welches Vintage-Cognac-Haus produzierte den legendären 'Grande Champagne 1811' zur Erinnerung an Napoleons Sohn?",
                    nl: "Welk vintage Cognac huis produceerde de legendarische 'Grande Champagne 1811' ter nagedachtenis aan Napoleon's zoon?"
                },
                options: [
                    {
                        en: "Hennessy",
                        es: "Hennessy",
                        de: "Hennessy",
                        nl: "Hennessy"
                    },
                    {
                        en: "Martell",
                        es: "Martell",
                        de: "Martell",
                        nl: "Martell"
                    },
                    {
                        en: "Rémy Martin",
                        es: "Rémy Martin",
                        de: "Rémy Martin",
                        nl: "Rémy Martin"
                    },
                    {
                        en: "Otard",
                        es: "Otard",
                        de: "Otard",
                        nl: "Otard"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Hennessy's Paradis Imperial was created to commemorate the birth of Napoleon's son in 1811, using eaux-de-vie from that historic year and representing one of the most prestigious vintage Cognacs.",
                    es: "El Paradis Imperial de Hennessy fue creado para conmemorar el nacimiento del hijo de Napoleón en 1811, usando eaux-de-vie de ese año histórico y representando uno de los Cognacs vintage más prestigiosos.",
                    de: "Hennessys Paradis Imperial wurde geschaffen, um die Geburt von Napoleons Sohn 1811 zu gedenken, mit Eaux-de-vie aus diesem historischen Jahr und repräsentiert einen der prestigeträchtigsten Vintage-Cognacs.",
                    nl: "Hennessy's Paradis Imperial werd gecreëerd ter nagedachtenis aan de geboorte van Napoleon's zoon in 1811, met eaux-de-vie uit dat historische jaar en vertegenwoordigt een van de meest prestigieuze vintage Cognacs."
                }
            },
            {
                question: {
                    en: "What is the most expensive bottle of whisky ever sold at auction and what made it so valuable?",
                    es: "¿Cuál es la botella de whisky más cara jamás vendida en subasta y qué la hizo tan valiosa?",
                    de: "Was ist die teuerste Whisky-Flasche, die jemals bei einer Auktion verkauft wurde, und was machte sie so wertvoll?",
                    nl: "Wat is de duurste fles whisky ooit verkocht op een veiling en wat maakte het zo waardevol?"
                },
                options: [
                    {
                        en: "Macallan 1926 Fine and Rare - hand-painted bottle by Sir Peter Blake",
                        es: "Macallan 1926 Fine and Rare - botella pintada a mano por Sir Peter Blake",
                        de: "Macallan 1926 Fine and Rare - handbemalte Flasche von Sir Peter Blake",
                        nl: "Macallan 1926 Fine and Rare - handgeschilderde fles door Sir Peter Blake"
                    },
                    {
                        en: "Glenfiddich 1937 - last pre-war batch",
                        es: "Glenfiddich 1937 - último lote de antes de la guerra",
                        de: "Glenfiddich 1937 - letzter Vorkriegs-Batch",
                        nl: "Glenfiddich 1937 - laatste vooroorlogse batch"
                    },
                    {
                        en: "Bowmore 1957 - 54-year aging",
                        es: "Bowmore 1957 - 54 años de envejecimiento",
                        de: "Bowmore 1957 - 54 Jahre Reifung",
                        nl: "Bowmore 1957 - 54 jaar rijping"
                    },
                    {
                        en: "Highland Park 1921 - centenary edition",
                        es: "Highland Park 1921 - edición centenario",
                        de: "Highland Park 1921 - Jubiläumsausgabe",
                        nl: "Highland Park 1921 - eeuwfeest editie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Macallan 1926 Fine and Rare with label artwork by Sir Peter Blake sold for over $1.9 million, combining extreme rarity (60 years aging), artistic value, and historical significance.",
                    es: "El Macallan 1926 Fine and Rare con arte de etiqueta por Sir Peter Blake se vendió por más de $1.9 millones, combinando rareza extrema (60 años de envejecimiento), valor artístico y significado histórico.",
                    de: "Der Macallan 1926 Fine and Rare mit Etikettenkunst von Sir Peter Blake wurde für über 1,9 Millionen Dollar verkauft und kombiniert extreme Seltenheit (60 Jahre Reifung), künstlerischen Wert und historische Bedeutung.",
                    nl: "De Macallan 1926 Fine and Rare met label artwork door Sir Peter Blake werd verkocht voor meer dan $1,9 miljoen, wat extreme zeldzaamheid (60 jaar rijping), artistieke waarde en historisch belang combineert."
                }
            },
            {
                question: {
                    en: "Which pre-Prohibition American whiskey is considered the 'Holy Grail' for bourbon collectors?",
                    es: "¿Qué whiskey americano de antes de la Prohibición se considera el 'Santo Grial' para los coleccionistas de bourbon?",
                    de: "Welcher amerikanische Whiskey aus der Zeit vor der Prohibition gilt als 'Heiliger Gral' für Bourbon-Sammler?",
                    nl: "Welke pre-Prohibitie Amerikaanse whiskey wordt beschouwd als de 'Heilige Graal' voor bourbon verzamelaars?"
                },
                options: [
                    {
                        en: "Old Fitzgerald Bottled-in-Bond 1914",
                        es: "Old Fitzgerald Bottled-in-Bond 1914",
                        de: "Old Fitzgerald Bottled-in-Bond 1914",
                        nl: "Old Fitzgerald Bottled-in-Bond 1914"
                    },
                    {
                        en: "Pappy Van Winkle 1912",
                        es: "Pappy Van Winkle 1912",
                        de: "Pappy Van Winkle 1912",
                        nl: "Pappy Van Winkle 1912"
                    },
                    {
                        en: "Stitzel-Weller 1910",
                        es: "Stitzel-Weller 1910",
                        de: "Stitzel-Weller 1910",
                        nl: "Stitzel-Weller 1910"
                    },
                    {
                        en: "Old Crow 1917",
                        es: "Old Crow 1917",
                        de: "Old Crow 1917",
                        nl: "Old Crow 1917"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Old Fitzgerald Bottled-in-Bond 1914 represents the pinnacle of pre-Prohibition bourbon, with authentic government oversight ensuring quality and authenticity that collectors treasure.",
                    es: "Old Fitzgerald Bottled-in-Bond 1914 representa la cúspide del bourbon de antes de la Prohibición, con supervisión gubernamental auténtica asegurando calidad y autenticidad que los coleccionistas valoran.",
                    de: "Old Fitzgerald Bottled-in-Bond 1914 repräsentiert den Höhepunkt des Vor-Prohibition-Bourbons, mit authentischer Regierungsaufsicht, die Qualität und Authentizität gewährleistet, die Sammler schätzen.",
                    nl: "Old Fitzgerald Bottled-in-Bond 1914 vertegenwoordigt het hoogtepunt van pre-Prohibitie bourbon, met authentiek regeringstoezicht dat kwaliteit en authenticiteit waarborgt die verzamelaars koesteren."
                }
            },
            {
                question: {
                    en: "What makes Japanese whisky from the closed Karuizawa distillery so sought after by collectors?",
                    es: "¿Qué hace que el whisky japonés de la destilería cerrada Karuizawa sea tan codiciado por los coleccionistas?",
                    de: "Was macht japanischen Whisky aus der geschlossenen Karuizawa-Brennerei für Sammler so begehrt?",
                    nl: "Wat maakt Japanse whisky van de gesloten Karuizawa distilleerderij zo gewild bij verzamelaars?"
                },
                options: [
                    {
                        en: "Closed in 2011, limited remaining stock with unique high-altitude aging",
                        es: "Cerrada en 2011, stock restante limitado con envejecimiento único de gran altitud",
                        de: "2011 geschlossen, begrenzter Restbestand mit einzigartiger Höhenreifung",
                        nl: "Gesloten in 2011, beperkte resterende voorraad met unieke hooggelegen rijping"
                    },
                    {
                        en: "Only used single casks for all bottlings",
                        es: "Solo usó barricas individuales para todos los embotellados",
                        de: "Verwendete nur Einzelfässer für alle Abfüllungen",
                        nl: "Gebruikte alleen single casks voor alle bottelingen"
                    },
                    {
                        en: "Made exclusively from imported Scottish barley",
                        es: "Hecho exclusivamente de cebada escocesa importada",
                        de: "Ausschließlich aus importierter schottischer Gerste hergestellt",
                        nl: "Gemaakt exclusief van geïmporteerde Schotse gerst"
                    },
                    {
                        en: "Founded by a legendary Scottish master distiller",
                        es: "Fundada por un legendario maestro destilador escocés",
                        de: "Gegründet von einem legendären schottischen Meisterdestillateur",
                        nl: "Opgericht door een legendarische Schotse meester distillateur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Karuizawa's closure in 2011 created scarcity, while its unique high-altitude location and sherry cask aging produced distinctive flavors that command premium prices among collectors.",
                    es: "El cierre de Karuizawa en 2011 creó escasez, mientras que su ubicación única de gran altitud y envejecimiento en barricas de jerez produjeron sabores distintivos que exigen precios premium entre coleccionistas.",
                    de: "Karuizawas Schließung 2011 schuf Knappheit, während seine einzigartige Höhenlage und Sherry-Fass-Reifung charakteristische Aromen erzeugten, die unter Sammlern Premiumpreise erzielen.",
                    nl: "Karuizawa's sluiting in 2011 creëerde schaarste, terwijl zijn unieke hooggelegen locatie en sherry vat rijping onderscheidende smaken produceerde die premium prijzen eisen onder verzamelaars."
                }
            },
            {
                question: {
                    en: "Which vintage rum from the 1960s is considered one of the most valuable in the world?",
                    es: "¿Qué ron vintage de los años 1960 se considera uno de los más valiosos del mundo?",
                    de: "Welcher Vintage-Rum aus den 1960er Jahren gilt als einer der wertvollsten der Welt?",
                    nl: "Welke vintage rum uit de jaren 1960 wordt beschouwd als een van de meest waardevolle ter wereld?"
                },
                options: [
                    {
                        en: "Appleton Estate 1962 - single cask bottling",
                        es: "Appleton Estate 1962 - embotellado de barrica única",
                        de: "Appleton Estate 1962 - Einzelfass-Abfüllung",
                        nl: "Appleton Estate 1962 - single cask botteling"
                    },
                    {
                        en: "Clément 1952 vintage Martinique",
                        es: "Clément 1952 vintage Martinique",
                        de: "Clément 1952 Vintage Martinique",
                        nl: "Clément 1952 vintage Martinique"
                    },
                    {
                        en: "Ron Zacapa 1976 Sistema Solera",
                        es: "Ron Zacapa 1976 Sistema Solera",
                        de: "Ron Zacapa 1976 Sistema Solera",
                        nl: "Ron Zacapa 1976 Sistema Solera"
                    },
                    {
                        en: "Mount Gay Eclipse 1703",
                        es: "Mount Gay Eclipse 1703",
                        de: "Mount Gay Eclipse 1703",
                        nl: "Mount Gay Eclipse 1703"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Clément 1952 Vintage Martinique represents one of the oldest agricole rums available, with its age and French terroir making it extraordinarily valuable to rum collectors.",
                    es: "Clément 1952 Vintage Martinique representa uno de los rones agrícolas más antiguos disponibles, con su edad y terroir francés haciéndolo extraordinariamente valioso para coleccionistas de ron.",
                    de: "Clément 1952 Vintage Martinique repräsentiert einen der ältesten verfügbaren Agricole-Rums, dessen Alter und französisches Terroir ihn für Rum-Sammler außerordentlich wertvoll macht.",
                    nl: "Clément 1952 Vintage Martinique vertegenwoordigt een van de oudste beschikbare agricole rums, met zijn leeftijd en Franse terroir wat het buitengewoon waardevol maakt voor rum verzamelaars."
                }
            },
            {
                question: {
                    en: "What unique characteristic makes Hennessy Paradis Imperial one of the most collectible Cognacs?",
                    es: "¿Qué característica única hace que Hennessy Paradis Imperial sea uno de los Cognacs más coleccionables?",
                    de: "Was für eine einzigartige Eigenschaft macht Hennessy Paradis Imperial zu einem der sammelwürdigsten Cognacs?",
                    nl: "Welke unieke eigenschap maakt Hennessy Paradis Imperial een van de meest verzamelbare Cognacs?"
                },
                options: [
                    {
                        en: "Contains eaux-de-vie dating back to 1818, some over 200 years old",
                        es: "Contiene eaux-de-vie que datan de 1818, algunos de más de 200 años",
                        de: "Enthält Eaux-de-vie aus 1818, einige über 200 Jahre alt",
                        nl: "Bevat eaux-de-vie daterend uit 1818, sommige meer dan 200 jaar oud"
                    },
                    {
                        en: "Limited to 100 bottles worldwide annually",
                        es: "Limitado a 100 botellas mundialmente anualmente",
                        de: "Weltweit jährlich auf 100 Flaschen begrenzt",
                        nl: "Beperkt tot 100 flessen wereldwijd jaarlijks"
                    },
                    {
                        en: "Aged exclusively in Limousin oak from one forest",
                        es: "Envejecido exclusivamente en roble Limousin de un bosque",
                        de: "Ausschließlich in Limousin-Eiche aus einem Wald gereift",
                        nl: "Uitsluitend gerijpt in Limousin eik uit één bos"
                    },
                    {
                        en: "Each bottle contains 50-year minimum age statement",
                        es: "Cada botella contiene declaración de edad mínima de 50 años",
                        de: "Jede Flasche enthält eine Mindestaltersangabe von 50 Jahren",
                        nl: "Elke fles bevat 50-jaar minimum leeftijdsverklaring"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Hennessy Paradis Imperial contains some of the oldest eaux-de-vie in their reserves, including spirits from 1818, making it an extraordinary collector's piece with unparalleled age and complexity.",
                    es: "Hennessy Paradis Imperial contiene algunos de los eaux-de-vie más antiguos en sus reservas, incluyendo licores de 1818, haciéndolo una pieza extraordinaria de colección con edad y complejidad sin paralelo.",
                    de: "Hennessy Paradis Imperial enthält einige der ältesten Eaux-de-vie in ihren Reserven, einschließlich Spirituosen aus 1818, was es zu einem außergewöhnlichen Sammlerstück mit unvergleichlichem Alter und Komplexität macht.",
                    nl: "Hennessy Paradis Imperial bevat enkele van de oudste eaux-de-vie in hun reserves, inclusief sterke drank uit 1818, wat het een buitengewoon verzamelobject maakt met ongeëvenaarde leeftijd en complexiteit."
                }
            },
            {
                question: {
                    en: "Which discontinued premium gin from the 1950s is now worth thousands at auction?",
                    es: "¿Qué gin premium descontinuado de los años 1950 ahora vale miles en subasta?",
                    de: "Welcher eingestellte Premium-Gin aus den 1950er Jahren ist jetzt Tausende bei Auktionen wert?",
                    nl: "Welke stopgezette premium gin uit de jaren 1950 is nu duizenden waard op veilingen?"
                },
                options: [
                    {
                        en: "Gordon's Export Strength",
                        es: "Gordon's Export Strength",
                        de: "Gordon's Export Strength",
                        nl: "Gordon's Export Strength"
                    },
                    {
                        en: "Booth's Finest Dry Gin",
                        es: "Booth's Finest Dry Gin",
                        de: "Booth's Finest Dry Gin",
                        nl: "Booth's Finest Dry Gin"
                    },
                    {
                        en: "Gilbey's Special Dry Gin",
                        es: "Gilbey's Special Dry Gin",
                        de: "Gilbey's Special Dry Gin",
                        nl: "Gilbey's Special Dry Gin"
                    },
                    {
                        en: "Coates Plymouth Gin Navy Strength",
                        es: "Coates Plymouth Gin Navy Strength",
                        de: "Coates Plymouth Gin Navy Strength",
                        nl: "Coates Plymouth Gin Navy Strength"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Booth's Finest Dry Gin from the 1950s-60s, with its distinctive Victorian-era recipe and packaging, has become extremely valuable among gin collectors, especially sealed bottles.",
                    es: "Booth's Finest Dry Gin de los años 1950-60, con su receta distintiva de la era victoriana y empaque, se ha vuelto extremadamente valioso entre los coleccionistas de gin, especialmente botellas selladas.",
                    de: "Booth's Finest Dry Gin aus den 1950er-60er Jahren, mit seinem charakteristischen viktorianischen Rezept und Verpackung, ist unter Gin-Sammlern extrem wertvoll geworden, besonders versiegelte Flaschen.",
                    nl: "Booth's Finest Dry Gin uit de jaren 1950-60, met zijn kenmerkende Victoriaanse tijdperk recept en verpakking, is extreem waardevol geworden onder gin verzamelaars, vooral verzegelde flessen."
                }
            },
            {
                question: {
                    en: "What makes the Macallan Lalique Legacy Collection bottles so valuable to collectors beyond the whisky itself?",
                    es: "¿Qué hace que las botellas Macallan Lalique Legacy Collection sean tan valiosas para los coleccionistas más allá del whisky mismo?",
                    de: "Was macht die Macallan Lalique Legacy Collection Flaschen für Sammler über den Whisky selbst hinaus so wertvoll?",
                    nl: "Wat maakt de Macallan Lalique Legacy Collection flessen zo waardevol voor verzamelaars naast de whisky zelf?"
                },
                options: [
                    {
                        en: "Hand-crafted crystal decanters by renowned French glassmaker Lalique",
                        es: "Decantadores de cristal hechos a mano por el renombrado vidriero francés Lalique",
                        de: "Handgefertigte Kristallkaraffen vom renommierten französischen Glasmacher Lalique",
                        nl: "Handgemaakte kristallen karaffen door de beroemde Franse glasmaker Lalique"
                    },
                    {
                        en: "Gold-plated caps with embedded diamonds",
                        es: "Tapas doradas con diamantes incrustados",
                        de: "Vergoldete Kappen mit eingebetteten Diamanten",
                        nl: "Goudgeplateerde doppen met ingelegde diamanten"
                    },
                    {
                        en: "Signed certificates by the master distiller",
                        es: "Certificados firmados por el maestro destilador",
                        de: "Signierte Zertifikate vom Meisterdestillateur",
                        nl: "Ondertekende certificaten door de meester distillateur"
                    },
                    {
                        en: "Bottles made from recycled Highland spring water containers",
                        es: "Botellas hechas de contenedores reciclados de agua de manantial de Highland",
                        de: "Flaschen aus recycelten Highland-Quellwasser-Behältern",
                        nl: "Flessen gemaakt van gerecyclede Highland bronwater containers"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Lalique crystal decanters are works of art in themselves, created by the prestigious French crystal house, making each bottle a collectible art piece beyond its whisky value.",
                    es: "Los decantadores de cristal Lalique son obras de arte en sí mismos, creados por la prestigiosa casa de cristal francesa, haciendo cada botella una pieza de arte coleccionable más allá de su valor como whisky.",
                    de: "Die Lalique-Kristallkaraffen sind Kunstwerke für sich, geschaffen vom prestigeträchtigen französischen Kristallhaus, wodurch jede Flasche ein sammelbares Kunstwerk über ihren Whisky-Wert hinaus wird.",
                    nl: "De Lalique kristallen karaffen zijn kunstwerken op zich, gecreëerd door het prestigieuze Franse kristalhuis, wat elke fles een verzamelbaar kunstwerk maakt naast zijn whisky waarde."
                }
            },
            {
                question: {
                    en: "Which rare 1940s Armagnac is considered the 'unicorn' of French brandy collecting?",
                    es: "¿Qué Armagnac raro de los años 1940 se considera el 'unicornio' del coleccionismo de brandy francés?",
                    de: "Welcher seltene Armagnac aus den 1940er Jahren gilt als das 'Einhorn' des französischen Brandy-Sammelns?",
                    nl: "Welke zeldzame jaren 1940 Armagnac wordt beschouwd als de 'eenhoorn' van Frans brandy verzamelen?"
                },
                options: [
                    {
                        en: "Château de Laubade 1943",
                        es: "Château de Laubade 1943",
                        de: "Château de Laubade 1943",
                        nl: "Château de Laubade 1943"
                    },
                    {
                        en: "Domaine de Jaurrey 1947",
                        es: "Domaine de Jaurrey 1947",
                        de: "Domaine de Jaurrey 1947",
                        nl: "Domaine de Jaurrey 1947"
                    },
                    {
                        en: "Marquis de Montesquiou 1949",
                        es: "Marquis de Montesquiou 1949",
                        de: "Marquis de Montesquiou 1949",
                        nl: "Marquis de Montesquiou 1949"
                    },
                    {
                        en: "Darroze Les Grands Assemblages 1944",
                        es: "Darroze Les Grands Assemblages 1944",
                        de: "Darroze Les Grands Assemblages 1944",
                        nl: "Darroze Les Grands Assemblages 1944"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Château de Laubade 1943 represents one of the rarest wartime Armagnacs, with its production during Nazi occupation making it extraordinarily scarce and historically significant for collectors.",
                    es: "Château de Laubade 1943 representa uno de los Armagnacs de tiempos de guerra más raros, con su producción durante la ocupación nazi haciéndolo extraordinariamente escaso e históricamente significativo para coleccionistas.",
                    de: "Château de Laubade 1943 repräsentiert einen der seltensten Kriegszeit-Armagnacs, dessen Produktion während der Nazi-Besatzung ihn außerordentlich knapp und historisch bedeutsam für Sammler macht.",
                    nl: "Château de Laubade 1943 vertegenwoordigt een van de zeldzaamste oorlogstijd Armagnacs, met zijn productie tijdens de Nazi-bezetting wat het buitengewoon schaars en historisch belangrijk maakt voor verzamelaars."
                }
            },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
