// Quiz - Level 7: Drinken - Sterke drank (Geavanceerde Productiemethoden)
(function() {
    "use strict";

    const level7 = {
        name: {
            en: "Advanced Production Methods",
            es: "Métodos de Producción Avanzados",
            de: "Fortgeschrittene Produktionsmethoden",
            nl: "Geavanceerde Productiemethoden"
        },
        questions: [
            {
                question: {
                    en: "What is the 'heads and tails' process in spirit distillation?",
                    es: "¿Qué es el proceso de 'cabezas y colas' en la destilación de licores?",
                    de: "Was ist der 'Vorlauf und Nachlauf'-Prozess bei der Spirituosendestillation?",
                    nl: "Wat is het 'heads and tails' proces bij het distilleren van sterke drank?"
                },
                options: [
                    {
                        en: "Separating undesirable compounds from the pure alcohol heart",
                        es: "Separar compuestos indeseables del corazón de alcohol puro",
                        de: "Trennung unerwünschter Verbindungen vom reinen Alkohol-Herzstück",
                        nl: "Het scheiden van ongewenste verbindingen van het pure alcohol hart"
                    },
                    {
                        en: "The aging process in different barrel sections",
                        es: "El proceso de envejecimiento en diferentes secciones del barril",
                        de: "Der Alterungsprozess in verschiedenen Fassabschnitten",
                        nl: "Het rijpingsproces in verschillende vatsecties"
                    },
                    {
                        en: "Blending different batches of spirits",
                        es: "Mezclar diferentes lotes de licores",
                        de: "Mischen verschiedener Spirituosen-Chargen",
                        nl: "Het mengen van verschillende batches sterke drank"
                    },
                    {
                        en: "Temperature control during fermentation",
                        es: "Control de temperatura durante la fermentación",
                        de: "Temperaturkontrolle während der Fermentation",
                        nl: "Temperatuurcontrole tijdens fermentatie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Heads and tails refer to the first and last portions of distillation that contain undesirable compounds like methanol and fusel alcohols, which are separated from the pure 'heart' cut.",
                    es: "Cabezas y colas se refieren a las primeras y últimas porciones de destilación que contienen compuestos indeseables como metanol y alcoholes de fusel, que se separan del 'corazón' puro.",
                    de: "Vorlauf und Nachlauf beziehen sich auf die ersten und letzten Anteile der Destillation, die unerwünschte Verbindungen wie Methanol und Fuselöle enthalten, die vom reinen 'Herzstück' getrennt werden.",
                    nl: "Heads and tails verwijzen naar de eerste en laatste delen van destillatie die ongewenste verbindingen bevatten zoals methanol en fusel alcoholen, die gescheiden worden van de pure 'hart' snede."
                }
            },
            {
                question: {
                    en: "What is the traditional Scottish method of drying malted barley using peat smoke called?",
                    es: "¿Cómo se llama el método escocés tradicional de secar cebada malteada usando humo de turba?",
                    de: "Wie heißt die traditionelle schottische Methode zum Trocknen von gemälzter Gerste mit Torfrauch?",
                    nl: "Hoe heet de traditionele Schotse methode om gemout gerst te drogen met turfgasrook?"
                },
                options: [
                    {
                        en: "Peat kilning",
                        es: "Secado con turba",
                        de: "Torf-Darren",
                        nl: "Turf kilning"
                    },
                    {
                        en: "Smoke malting",
                        es: "Malteado ahumado",
                        de: "Rauch-Mälzen",
                        nl: "Rook mouten"
                    },
                    {
                        en: "Highland drying",
                        es: "Secado de montaña",
                        de: "Highland-Trocknung",
                        nl: "Highland drogen"
                    },
                    {
                        en: "Phenolic curing",
                        es: "Curado fenólico",
                        de: "Phenolisches Aushärten",
                        nl: "Fenolische verharding"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Peat kilning involves burning peat during the malting process to dry the grain, which imparts phenolic compounds that give Scotch whisky its characteristic smoky flavor.",
                    es: "El secado con turba implica quemar turba durante el proceso de malteado para secar el grano, lo que imparte compuestos fenólicos que dan al whisky escocés su sabor ahumado característico.",
                    de: "Torf-Darren beinhaltet das Verbrennen von Torf während des Mälzprozesses, um das Getreide zu trocknen, was phenolische Verbindungen verleiht, die dem schottischen Whisky seinen charakteristischen rauchigen Geschmack geben.",
                    nl: "Turf kilning houdt in dat turf verbrand wordt tijdens het moutproces om het graan te drogen, wat fenolische verbindingen geeft die Schotse whisky zijn kenmerkende rokerige smaak geven."
                }
            },
            {
                question: {
                    en: "What is the 'solera' system used in premium sherry and rum production?",
                    es: "¿Qué es el sistema 'solera' usado en la producción de jerez y ron premium?",
                    de: "Was ist das 'Solera'-System, das bei der Premium-Sherry- und Rum-Produktion verwendet wird?",
                    nl: "Wat is het 'solera' systeem gebruikt in premium sherry en rum productie?"
                },
                options: [
                    {
                        en: "A fractional blending system using stacked barrels of different ages",
                        es: "Un sistema de mezcla fraccionaria usando barriles apilados de diferentes edades",
                        de: "Ein fraktionales Mischsystem mit gestapelten Fässern verschiedener Alter",
                        nl: "Een fractioneel mengsysteem met gestapelde vaten van verschillende leeftijden"
                    },
                    {
                        en: "A distillation technique using solar heating",
                        es: "Una técnica de destilación usando calentamiento solar",
                        de: "Eine Destillationstechnik mit Solarheizung",
                        nl: "Een distillatietechniek met zonne-verwarming"
                    },
                    {
                        en: "An underground aging process",
                        es: "Un proceso de envejecimiento subterráneo",
                        de: "Ein unterirdischer Alterungsprozess",
                        nl: "Een ondergronds rijpingsproces"
                    },
                    {
                        en: "A temperature-controlled fermentation method",
                        es: "Un método de fermentación controlado por temperatura",
                        de: "Eine temperaturkontrollierte Fermentationsmethode",
                        nl: "Een temperatuurgecontroleerde fermentatiemethode"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The solera system uses multiple tiers of barrels where younger spirit is gradually blended with older spirit over time, creating consistent flavor profiles across batches.",
                    es: "El sistema solera usa múltiples niveles de barriles donde el licor más joven se mezcla gradualmente con licor más viejo a lo largo del tiempo, creando perfiles de sabor consistentes entre lotes.",
                    de: "Das Solera-System verwendet mehrere Fassebenen, in denen jüngere Spirituosen im Laufe der Zeit allmählich mit älteren Spirituosen vermischt werden, wodurch konsistente Geschmacksprofile über Chargen hinweg entstehen.",
                    nl: "Het solera systeem gebruikt meerdere lagen van vaten waar jongere sterke drank geleidelijk gemengd wordt met oudere sterke drank over tijd, wat consistente smaakprofielen over batches creëert."
                }
            },
            {
                question: {
                    en: "What is the purpose of the 'wash' in whiskey production?",
                    es: "¿Cuál es el propósito del 'wash' en la producción de whiskey?",
                    de: "Was ist der Zweck der 'Wash' in der Whiskey-Produktion?",
                    nl: "Wat is het doel van de 'wash' in whiskey productie?"
                },
                options: [
                    {
                        en: "The fermented liquid before distillation containing 7-10% alcohol",
                        es: "El líquido fermentado antes de la destilación que contiene 7-10% alcohol",
                        de: "Die fermentierte Flüssigkeit vor der Destillation mit 7-10% Alkohol",
                        nl: "De gefermenteerde vloeistof voor distillatie met 7-10% alcohol"
                    },
                    {
                        en: "The final washing of bottles before filling",
                        es: "El lavado final de botellas antes del llenado",
                        de: "Die abschließende Reinigung der Flaschen vor dem Befüllen",
                        nl: "Het laatste wassen van flessen voor het vullen"
                    },
                    {
                        en: "The cleaning process between distillation runs",
                        es: "El proceso de limpieza entre destilaciones",
                        de: "Der Reinigungsprozess zwischen Destillationsläufen",
                        nl: "Het schoonmaakproces tussen distillatie runs"
                    },
                    {
                        en: "The water used to dilute the final product",
                        es: "El agua usada para diluir el producto final",
                        de: "Das Wasser zur Verdünnung des Endprodukts",
                        nl: "Het water gebruikt om het eindproduct te verdunnen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The wash is the fermented mash containing 7-10% alcohol by volume that is fed into the stills for distillation to concentrate the alcohol and create the spirit.",
                    es: "El wash es el puré fermentado que contiene 7-10% alcohol por volumen que se alimenta a los alambiques para destilación para concentrar el alcohol y crear el licor.",
                    de: "Die Wash ist die fermentierte Maische mit 7-10% Alkohol pro Volumen, die in die Brennblasen geleitet wird zur Destillation, um den Alkohol zu konzentrieren und die Spirituose zu erzeugen.",
                    nl: "De wash is de gefermenteerde brij met 7-10% alcohol per volume die in de distilleerketels wordt gevoerd voor distillatie om de alcohol te concentreren en de sterke drank te creëren."
                }
            },
            {
                question: {
                    en: "What is the 'angel's share' phenomenon more pronounced in which climate?",
                    es: "¿En qué clima es más pronunciado el fenómeno de la 'parte del ángel'?",
                    de: "In welchem Klima ist das 'Anteil der Engel'-Phänomen ausgeprägter?",
                    nl: "In welk klimaat is het 'angel's share' fenomeen meer uitgesproken?"
                },
                options: [
                    {
                        en: "Hot and humid climates like Kentucky or Caribbean",
                        es: "Climas cálidos y húmedos como Kentucky o el Caribe",
                        de: "Heiße und feuchte Klimate wie Kentucky oder die Karibik",
                        nl: "Hete en vochtige klimaten zoals Kentucky of Caribisch gebied"
                    },
                    {
                        en: "Cold and dry climates like Scotland",
                        es: "Climas fríos y secos como Escocia",
                        de: "Kalte und trockene Klimate wie Schottland",
                        nl: "Koude en droge klimaten zoals Schotland"
                    },
                    {
                        en: "Moderate temperate climates",
                        es: "Climas templados moderados",
                        de: "Mäßige gemäßigte Klimate",
                        nl: "Gematigde temperatuur klimaten"
                    },
                    {
                        en: "High altitude mountain climates",
                        es: "Climas de montaña de gran altitud",
                        de: "Hochgebirgsklimate",
                        nl: "Hoge hoogte bergklimaten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Hot and humid climates accelerate evaporation, causing higher angel's share losses (8-10% annually in Caribbean vs 2% in Scotland), but also speed up the aging process.",
                    es: "Los climas cálidos y húmedos aceleran la evaporación, causando mayores pérdidas de la parte del ángel (8-10% anualmente en el Caribe vs 2% en Escocia), pero también aceleran el proceso de envejecimiento.",
                    de: "Heiße und feuchte Klimate beschleunigen die Verdunstung und verursachen höhere Anteil-der-Engel-Verluste (8-10% jährlich in der Karibik vs 2% in Schottland), beschleunigen aber auch den Alterungsprozess.",
                    nl: "Hete en vochtige klimaten versnellen verdamping, wat hogere angel's share verliezen veroorzaakt (8-10% jaarlijks in Caribisch gebied vs 2% in Schotland), maar versnellen ook het rijpingsproces."
                }
            },
            {
                question: {
                    en: "What is the primary difference between column stills and pot stills in spirit production?",
                    es: "¿Cuál es la diferencia principal entre alambiques de columna y alambiques de olla en la producción de licores?",
                    de: "Was ist der Hauptunterschied zwischen Säulenbrennblasen und Pot Stills in der Spirituosenproduktion?",
                    nl: "Wat is het belangrijkste verschil tussen kolomdistilleerketels en pot stills in sterke drank productie?"
                },
                options: [
                    {
                        en: "Column stills allow continuous distillation and higher alcohol content",
                        es: "Los alambiques de columna permiten destilación continua y mayor contenido alcohólico",
                        de: "Säulenbrennblasen ermöglichen kontinuierliche Destillation und höheren Alkoholgehalt",
                        nl: "Kolomdistilleerketels maken continue distillatie en hoger alcoholgehalte mogelijk"
                    },
                    {
                        en: "Pot stills produce higher volumes than column stills",
                        es: "Los alambiques de olla producen mayores volúmenes que los de columna",
                        de: "Pot Stills produzieren höhere Volumina als Säulenbrennblasen",
                        nl: "Pot stills produceren hogere volumes dan kolomdistilleerketels"
                    },
                    {
                        en: "Column stills require manual operation, pot stills are automated",
                        es: "Los alambiques de columna requieren operación manual, los de olla son automatizados",
                        de: "Säulenbrennblasen erfordern manuelle Bedienung, Pot Stills sind automatisiert",
                        nl: "Kolomdistilleerketels vereisen handmatige bediening, pot stills zijn geautomatiseerd"
                    },
                    {
                        en: "Pot stills use steam heating, column stills use direct fire",
                        es: "Los alambiques de olla usan calentamiento con vapor, los de columna usan fuego directo",
                        de: "Pot Stills verwenden Dampfheizung, Säulenbrennblasen verwenden direktes Feuer",
                        nl: "Pot stills gebruiken stoomverwarming, kolomdistilleerketels gebruiken direct vuur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Column stills operate continuously and can reach 95%+ alcohol content efficiently, while pot stills operate in batches and typically reach 60-70% alcohol, retaining more flavor compounds.",
                    es: "Los alambiques de columna operan continuamente y pueden alcanzar 95%+ contenido alcohólico eficientemente, mientras que los alambiques de olla operan en lotes y típicamente alcanzan 60-70% alcohol, reteniendo más compuestos de sabor.",
                    de: "Säulenbrennblasen arbeiten kontinuierlich und können effizient 95%+ Alkoholgehalt erreichen, während Pot Stills chargenweise arbeiten und typischerweise 60-70% Alkohol erreichen, mehr Geschmacksverbindungen beibehalten.",
                    nl: "Kolomdistilleerketels werken continu en kunnen efficiënt 95%+ alcoholgehalte bereiken, terwijl pot stills in batches werken en typisch 60-70% alcohol bereiken, meer smaakverbindingen behoudend."
                }
            },
            {
                question: {
                    en: "What causes the formation of 'congeners' in distilled spirits?",
                    es: "¿Qué causa la formación de 'congéneres' en los licores destilados?",
                    de: "Was verursacht die Bildung von 'Begleitstoffen' in destillierten Spirituosen?",
                    nl: "Wat veroorzaakt de vorming van 'congeners' in gedistilleerde sterke drank?"
                },
                options: [
                    {
                        en: "Fermentation byproducts and aging reactions that create flavor compounds",
                        es: "Subproductos de fermentación y reacciones de envejecimiento que crean compuestos de sabor",
                        de: "Fermentations-Nebenprodukte und Alterungsreaktionen, die Geschmacksverbindungen erzeugen",
                        nl: "Fermentatie bijproducten en rijpingsreacties die smaakverbindingen creëren"
                    },
                    {
                        en: "Adding artificial flavoring during production",
                        es: "Agregar saborizantes artificiales durante la producción",
                        de: "Hinzufügen künstlicher Aromen während der Produktion",
                        nl: "Het toevoegen van kunstmatige smaakstoffen tijdens productie"
                    },
                    {
                        en: "Contamination from unclean equipment",
                        es: "Contaminación de equipos no limpios",
                        de: "Kontamination durch unsaubere Ausrüstung",
                        nl: "Besmetting van onreine apparatuur"
                    },
                    {
                        en: "Chemical reactions with water minerals",
                        es: "Reacciones químicas con minerales del agua",
                        de: "Chemische Reaktionen mit Wassermineralien",
                        nl: "Chemische reacties met watermineralen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Congeners are flavor compounds formed during fermentation (esters, aldehydes) and aging (tannins, lactones from wood) that give each spirit its unique character and complexity.",
                    es: "Los congéneres son compuestos de sabor formados durante la fermentación (ésteres, aldehídos) y envejecimiento (taninos, lactonas de la madera) que dan a cada licor su carácter único y complejidad.",
                    de: "Begleitstoffe sind Geschmacksverbindungen, die während der Fermentation (Ester, Aldehyde) und Alterung (Tannine, Lactone aus Holz) entstehen und jedem Geist seinen einzigartigen Charakter und Komplexität verleihen.",
                    nl: "Congeners zijn smaakverbindingen gevormd tijdens fermentatie (esters, aldehyden) en rijping (tannines, lactonen van hout) die elke sterke drank zijn unieke karakter en complexiteit geven."
                }
            },
            {
                question: {
                    en: "What is the 'Lincoln County Process' used in Tennessee whiskey production?",
                    es: "¿Qué es el 'Proceso del Condado de Lincoln' usado en la producción de whiskey de Tennessee?",
                    de: "Was ist der 'Lincoln County Process', der bei der Tennessee-Whiskey-Produktion verwendet wird?",
                    nl: "Wat is het 'Lincoln County Process' gebruikt in Tennessee whiskey productie?"
                },
                options: [
                    {
                        en: "Filtering the new-make spirit through maple charcoal before aging",
                        es: "Filtrar el licor recién hecho a través de carbón de arce antes del envejecimiento",
                        de: "Filtern des frischen Destillats durch Ahornkohle vor der Reifung",
                        nl: "Het filteren van de nieuwe sterke drank door esdoornhoutskool voor het rijpen"
                    },
                    {
                        en: "A special fermentation technique using local yeast",
                        es: "Una técnica especial de fermentación usando levadura local",
                        de: "Eine spezielle Fermentationstechnik mit lokaler Hefe",
                        nl: "Een speciale fermentatietechniek met lokale gist"
                    },
                    {
                        en: "Aging in barrels made from Lincoln County oak",
                        es: "Envejecer en barriles hechos de roble del Condado de Lincoln",
                        de: "Reifung in Fässern aus Lincoln County Eiche",
                        nl: "Rijpen in vaten gemaakt van Lincoln County eik"
                    },
                    {
                        en: "Double distillation in copper pot stills",
                        es: "Doble destilación en alambiques de cobre",
                        de: "Doppeldestillation in Kupfer-Brennblasen",
                        nl: "Dubbele distillatie in koperen pot stills"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Lincoln County Process involves slowly filtering the new-make whiskey through 10 feet of sugar maple charcoal, which removes impurities and imparts a distinctive smooth character to Tennessee whiskey.",
                    es: "El Proceso del Condado de Lincoln involucra filtrar lentamente el whiskey recién hecho a través de 10 pies de carbón de arce azucarero, lo que elimina impurezas e imparte un carácter suave distintivo al whiskey de Tennessee.",
                    de: "Der Lincoln County Process beinhaltet das langsame Filtern des frischen Whiskeys durch 10 Fuß Zuckerahorn-Kohle, was Verunreinigungen entfernt und Tennessee Whiskey einen charakteristischen geschmeidigen Charakter verleiht.",
                    nl: "Het Lincoln County Process houdt in dat de nieuwe whiskey langzaam gefilterd wordt door 10 voet suiker esdoornhoutskool, wat onzuiverheden verwijdert en Tennessee whiskey een kenmerkend zacht karakter geeft."
                }
            },
            {
                question: {
                    en: "What is the traditional method for creating the distinctive smoky flavor in mezcal?",
                    es: "¿Cuál es el método tradicional para crear el sabor ahumado distintivo en el mezcal?",
                    de: "Was ist die traditionelle Methode zur Erzeugung des charakteristischen rauchigen Geschmacks in Mezcal?",
                    nl: "Wat is de traditionele methode om de kenmerkende rokerige smaak in mezcal te creëren?"
                },
                options: [
                    {
                        en: "Roasting agave hearts in underground earth ovens lined with volcanic rocks",
                        es: "Asar corazones de agave en hornos subterráneos de tierra forrados con rocas volcánicas",
                        de: "Rösten von Agaven-Herzen in unterirdischen Erdöfen, die mit Vulkangestein ausgekleidet sind",
                        nl: "Het roosteren van agave harten in ondergrondse aardovens bekleed met vulkanisch gesteente"
                    },
                    {
                        en: "Adding wood smoke during distillation",
                        es: "Agregar humo de madera durante la destilación",
                        de: "Hinzufügen von Holzrauch während der Destillation",
                        nl: "Het toevoegen van houtrook tijdens distillatie"
                    },
                    {
                        en: "Aging in charred oak barrels",
                        es: "Envejecer en barriles de roble carbonizado",
                        de: "Reifung in verkohlten Eichenfässern",
                        nl: "Rijpen in verkoold eiken vaten"
                    },
                    {
                        en: "Smoking the final product with mesquite wood",
                        es: "Ahumar el producto final con madera de mezquite",
                        de: "Räuchern des Endprodukts mit Mesquite-Holz",
                        nl: "Het roken van het eindproduct met mesquite hout"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Mezcal's signature smoky flavor comes from roasting agave piñas (hearts) in conical earth ovens (palenques) lined with volcanic stones and heated with wood fires for several days.",
                    es: "El sabor ahumado característico del mezcal proviene de asar piñas de agave (corazones) en hornos cónicos de tierra (palenques) forrados con piedras volcánicas y calentados con fuegos de madera durante varios días.",
                    de: "Mezcals charakteristischer rauchiger Geschmack stammt vom Rösten der Agaven-Piñas (Herzen) in konischen Erdöfen (Palenques), die mit Vulkansteinen ausgekleidet und mehrere Tage lang mit Holzfeuern erhitzt werden.",
                    nl: "Mezcal's kenmerkende rokerige smaak komt van het roosteren van agave piñas (harten) in kegelvormige aardovens (palenques) bekleed met vulkanische stenen en verwarmd met houtvuren gedurende meerdere dagen."
                }
            },
            {
                question: {
                    en: "What is the 'Devil's Cut' in bourbon production?",
                    es: "¿Qué es el 'Corte del Diablo' en la producción de bourbon?",
                    de: "Was ist der 'Devil's Cut' in der Bourbon-Produktion?",
                    nl: "Wat is de 'Devil's Cut' in bourbon productie?"
                },
                options: [
                    {
                        en: "Bourbon absorbed into the wood that's extracted by soaking used barrels",
                        es: "Bourbon absorbido en la madera que se extrae empapando barriles usados",
                        de: "Bourbon, der in das Holz absorbiert wird und durch Einweichen gebrauchter Fässer extrahiert wird",
                        nl: "Bourbon geabsorbeerd in het hout dat wordt geëxtraheerd door gebruikte vaten te weken"
                    },
                    {
                        en: "The strongest alcohol portion from distillation",
                        es: "La porción de alcohol más fuerte de la destilación",
                        de: "Der stärkste Alkoholanteil aus der Destillation",
                        nl: "Het sterkste alcohol gedeelte van distillatie"
                    },
                    {
                        en: "Bourbon aged in heavily charred barrels",
                        es: "Bourbon envejecido en barriles fuertemente carbonizados",
                        de: "Bourbon, der in stark verkohlten Fässern gereift ist",
                        nl: "Bourbon gerijpt in zwaar verkoold vaten"
                    },
                    {
                        en: "The sediment that settles during aging",
                        es: "El sedimento que se asienta durante el envejecimiento",
                        de: "Das Sediment, das sich während der Reifung absetzt",
                        nl: "Het bezinksel dat zich vormt tijdens rijping"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Devil's Cut refers to the bourbon that soaks into the barrel wood during aging. Some distilleries extract this by soaking used barrels in water, creating a unique flavor profile.",
                    es: "El Corte del Diablo se refiere al bourbon que se empapa en la madera del barril durante el envejecimiento. Algunas destilerías extraen esto empapando barriles usados en agua, creando un perfil de sabor único.",
                    de: "Der Devil's Cut bezieht sich auf den Bourbon, der während der Reifung in das Fassholz einzieht. Einige Brennereien extrahieren dies durch Einweichen gebrauchter Fässer in Wasser, wodurch ein einzigartiges Geschmacksprofil entsteht.",
                    nl: "De Devil's Cut verwijst naar de bourbon die tijdens het rijpen in het vathout trekt. Sommige distilleerderijen extraheren dit door gebruikte vaten in water te weken, wat een uniek smaakprofiel creëert."
                }
            },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
