// Jurassic Dinosaurs Quiz - Level 5
(function() {
  const level5 = {
    name: {
          "en": "Jurassic Dinosaurs Level 5",
          "es": "Dinosaurios Jurásicos Nivel 5",
          "de": "Jura Dinosaurier Stufe 5",
          "nl": "Jura Dino's Level 5"
    },
    questions: [
      {
        question: {
                  "en": "What specific bone pathology is commonly found in Allosaurus specimens and indicates their predatory lifestyle?",
                  "es": "¿Qué patología ósea específica se encuentra comúnmente en especímenes de Allosaurus e indica su estilo de vida depredador?",
                  "de": "Welche spezifische Knochenpathologie findet sich häufig in Allosaurus-Exemplaren und zeigt ihre räuberische Lebensweise?",
                  "nl": "Welke specifieke botpathologie wordt vaak gevonden in Allosaurus specimens en wijst op hun roofzuchtige levensstijl?"
        },
        options: [
        {
                  "en": "Stress fractures and healed bite marks on ribs",
                  "es": "Fracturas por estrés y marcas de mordida sanadas en costillas",
                  "de": "Stressfrakturen und verheilte Bissspuren an Rippen",
                  "nl": "Stressfracturen en genezen bijtwonden op ribben"
        },
        {
                  "en": "Enlarged brain cavities",
                  "es": "Cavidades cerebrales agrandadas",
                  "de": "Vergrößerte Gehirnhöhlen",
                  "nl": "Vergrote hersenholtes"
        },
        {
                  "en": "Arthritic joint inflammation only",
                  "es": "Solo inflamación artrítica de articulaciones",
                  "de": "Nur arthritische Gelenkentzündung",
                  "nl": "Alleen artritische gewrichtsontstekingen"
        },
        {
                  "en": "Calcium deficiency symptoms",
                  "es": "Síntomas de deficiencia de calcio",
                  "de": "Kalziummangel-Symptome",
                  "nl": "Calcium tekort symptomen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Allosaurus fossils show evidence of violent lifestyles including stress fractures from high-impact activities and healed bite marks, likely from intraspecific combat or failed hunts.",
                  "es": "Los fósiles de Allosaurus muestran evidencia de estilos de vida violentos incluyendo fracturas por estrés de actividades de alto impacto y marcas de mordida sanadas, probablemente de combate intraespecífico o cacerías fallidas.",
                  "de": "Allosaurus-Fossilien zeigen Belege für gewalttätige Lebensweisen einschließlich Stressfrakturen von Aktivitäten mit hoher Belastung und verheilten Bissspuren, wahrscheinlich von innerartlichen Kämpfen oder fehlgeschlagenen Jagden.",
                  "nl": "Allosaurus fossielen tonen bewijs van gewelddadige levensstijlen inclusief stressfracturen van hoge-impact activiteiten en genezen bijtwonden, waarschijnlijk van intraspecifieke gevechten of mislukte jachten."
        }
      },
      {
        question: {
                  "en": "What was the evolutionary significance of the Morrison Formation's temporal span (Kimmeridgian-Tithonian)?",
                  "es": "¿Cuál era la significancia evolutiva del lapso temporal de la Formación Morrison (Kimmeridgiano-Titoniano)?",
                  "de": "Was war die evolutionäre Bedeutung der zeitlichen Spanne der Morrison-Formation (Kimmeridgium-Tithonium)?",
                  "nl": "Wat was de evolutionaire betekenis van de temporele span van de Morrison Formatie (Kimmeridgium-Tithonium)?"
        },
        options: [
        {
                  "en": "Peak diversification of sauropod lineages before Cretaceous bottleneck",
                  "es": "Pico de diversificación de linajes de saurópodos antes del cuello de botella del Cretácico",
                  "de": "Höchste Diversifizierung der Sauropoden-Linien vor dem Kreide-Flaschenhals",
                  "nl": "Piek diversificatie van sauropode lijnen vóór Krijt knelpunt"
        },
        {
                  "en": "Evolution of powered flight",
                  "es": "Evolución del vuelo propulsado",
                  "de": "Evolution des angetriebenen Fluges",
                  "nl": "Evolutie van aangedreven vlucht"
        },
        {
                  "en": "Mass extinction event",
                  "es": "Evento de extinción masiva",
                  "de": "Massenaussterben-Ereignis",
                  "nl": "Massa-extinctie gebeurtenis"
        },
        {
                  "en": "First appearance of flowering plants",
                  "es": "Primera aparición de plantas con flores",
                  "de": "Erstes Auftreten von Blütenpflanzen",
                  "nl": "Eerste verschijning van bloeiende planten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Morrison Formation represents the peak of sauropod diversity and ecological complexity before the Early Cretaceous extinction bottleneck that eliminated many lineages.",
                  "es": "La Formación Morrison representa el pico de diversidad de saurópodos y complejidad ecológica antes del cuello de botella de extinción del Cretácico Temprano que eliminó muchos linajes.",
                  "de": "Die Morrison-Formation repräsentiert den Höhepunkt der Sauropoden-Diversität und ökologischen Komplexität vor dem frühen Kreide-Aussterbe-Flaschenhals, der viele Linien eliminierte.",
                  "nl": "De Morrison Formatie vertegenwoordigt de piek van sauropode diversiteit en ecologische complexiteit vóór het Vroeg-Krijt extinctie knelpunt dat veel lijnen elimineerde."
        }
      },
      {
        question: {
                  "en": "What computational fluid dynamics studies reveal about Diplodocus feeding mechanics?",
                  "es": "¿Qué revelan los estudios de dinámica de fluidos computacional sobre la mecánica de alimentación de Diplodocus?",
                  "de": "Was zeigen computergestützte Strömungsdynamik-Studien über die Fütterungsmechanik von Diplodocus?",
                  "nl": "Wat onthullen computationele vloeistofdynamica studies over Diplodocus voedingsmechanica?"
        },
        options: [
        {
                  "en": "Underwater feeding adaptations",
                  "es": "Adaptaciones de alimentación submarina",
                  "de": "Unterwasser-Fütterungsanpassungen",
                  "nl": "Onderwater voedingsaanpassingen"
        },
        {
                  "en": "Maximum neck elevation for all feeding",
                  "es": "Elevación máxima del cuello para toda alimentación",
                  "de": "Maximale Halserhebung für alle Fütterung",
                  "nl": "Maximale nekverhoging voor alle voeding"
        },
        {
                  "en": "Optimal foraging at 2-4 meter height with minimal energy expenditure",
                  "es": "Forrajeo óptimo a 2-4 metros de altura con gasto mínimo de energía",
                  "de": "Optimale Nahrungssuche in 2-4 Meter Höhe mit minimalem Energieaufwand",
                  "nl": "Optimaal foerageren op 2-4 meter hoogte met minimale energie-uitgaven"
        },
        {
                  "en": "Exclusive ground-level browsing",
                  "es": "Ramoneo exclusivo a nivel del suelo",
                  "de": "Ausschließliches Bodenniveau-Fressen",
                  "nl": "Exclusief grondniveau grazen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "CFD modeling shows Diplodocus was most energy-efficient when feeding at low-to-moderate heights (2-4m), challenging earlier assumptions about habitual high browsing.",
                  "es": "El modelado CFD muestra que Diplodocus era más eficiente energéticamente cuando se alimentaba a alturas bajas a moderadas (2-4m), desafiando suposiciones anteriores sobre el ramoneo alto habitual.",
                  "de": "CFD-Modellierung zeigt, dass Diplodocus am energieeffizientesten war, wenn er in niedrigen bis mittleren Höhen (2-4m) fraß, was frühere Annahmen über habituelles hohes Fressen in Frage stellt.",
                  "nl": "CFD modellering toont dat Diplodocus het meest energie-efficiënt was bij voeding op lage tot matige hoogten (2-4m), wat eerdere aannames over gewoonlijk hoog grazen uitdaagt."
        }
      },
      {
        question: {
                  "en": "What does stable isotope analysis reveal about Jurassic ecosystem niche partitioning?",
                  "es": "¿Qué revela el análisis de isótopos estables sobre la partición de nichos del ecosistema jurásico?",
                  "de": "Was zeigt die Analyse stabiler Isotope über die Nischenteilung im Jura-Ökosystem?",
                  "nl": "Wat onthult stabiele isotopenanalyse over Jura ecosysteem niche-verdeling?"
        },
        options: [
        {
                  "en": "All herbivores fed at the same level",
                  "es": "Todos los herbívoros se alimentaron al mismo nivel",
                  "de": "Alle Pflanzenfresser fraßen auf derselben Ebene",
                  "nl": "Alle herbivoren voedden zich op hetzelfde niveau"
        },
        {
                  "en": "Vertical stratification with height-based feeding preferences among sauropods",
                  "es": "Estratificación vertical con preferencias de alimentación basadas en altura entre saurópodos",
                  "de": "Vertikale Schichtung mit höhenbasierten Fütterungsvorlieben bei Sauropoden",
                  "nl": "Verticale stratificatie met hoogte-gebaseerde voedingsvoorkeuren onder sauropoden"
        },
        {
                  "en": "Random feeding patterns",
                  "es": "Patrones de alimentación aleatorios",
                  "de": "Zufällige Fütterungsmuster",
                  "nl": "Willekeurige voedingspatronen"
        },
        {
                  "en": "Seasonal diet switching only",
                  "es": "Solo cambio de dieta estacional",
                  "de": "Nur saisonaler Diätwechsel",
                  "nl": "Alleen seizoensgebonden dieetverandering"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Carbon and nitrogen isotope analysis of Morrison Formation herbivores shows clear vertical feeding stratification, with different sauropod species occupying distinct height zones.",
                  "es": "El análisis de isótopos de carbono y nitrógeno de herbívoros de la Formación Morrison muestra estratificación de alimentación vertical clara, con diferentes especies de saurópodos ocupando zonas de altura distintas.",
                  "de": "Kohlenstoff- und Stickstoff-Isotopen-Analyse von Morrison-Formation-Pflanzenfressern zeigt klare vertikale Fütterungsschichtung, wobei verschiedene Sauropoden-Arten unterschiedliche Höhenzonen besetzen.",
                  "nl": "Koolstof- en stikstofisotopenanalyse van Morrison Formatie herbivoren toont duidelijke verticale voedingsstratificatie, waarbij verschillende sauropode soorten verschillende hoogtezones bezetten."
        }
      },
      {
        question: {
                  "en": "What role did atmospheric CO2 concentrations play in Jurassic plant-herbivore interactions?",
                  "es": "¿Qué papel jugaron las concentraciones de CO2 atmosférico en las interacciones planta-herbívoro jurásicas?",
                  "de": "Welche Rolle spielten atmosphärische CO2-Konzentrationen in Jura-Pflanzen-Pflanzenfresser-Interaktionen?",
                  "nl": "Welke rol speelden atmosferische CO2 concentraties in Jura plant-herbivoor interacties?"
        },
        options: [
        {
                  "en": "Low CO2 limited plant growth",
                  "es": "Bajo CO2 limitó el crecimiento de plantas",
                  "de": "Niedriger CO2 begrenzte Pflanzenwachstum",
                  "nl": "Lage CO2 beperkte plantengroei"
        },
        {
                  "en": "CO2 had no effect on plants",
                  "es": "CO2 no tuvo efecto en las plantas",
                  "de": "CO2 hatte keinen Effekt auf Pflanzen",
                  "nl": "CO2 had geen effect op planten"
        },
        {
                  "en": "Only affected plant reproduction",
                  "es": "Solo afectó la reproducción de plantas",
                  "de": "Beeinflusste nur Pflanzenreproduktion",
                  "nl": "Beïnvloedde alleen plantenvoortplanting"
        },
        {
                  "en": "High CO2 (1200-1500 ppm) increased plant fiber content, requiring enhanced digestive efficiency",
                  "es": "Alto CO2 (1200-1500 ppm) aumentó el contenido de fibra vegetal, requiriendo mayor eficiencia digestiva",
                  "de": "Hoher CO2 (1200-1500 ppm) erhöhte Pflanzenfasergehalt, erforderte verbesserte Verdauungseffizienz",
                  "nl": "Hoge CO2 (1200-1500 ppm) verhoogde plantenvezelgehalte, vereiste verbeterde spijsverteringsefficiëntie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Elevated Jurassic CO2 levels promoted rapid plant growth but increased C:N ratios and fiber content, forcing herbivore evolution toward more efficient digestive systems.",
                  "es": "Los niveles elevados de CO2 jurásico promovieron crecimiento rápido de plantas pero aumentaron las proporciones C:N y contenido de fibra, forzando la evolución de herbívoros hacia sistemas digestivos más eficientes.",
                  "de": "Erhöhte Jura-CO2-Werte förderten schnelles Pflanzenwachstum, erhöhten aber C:N-Verhältnisse und Fasergehalt, was die Evolution der Pflanzenfresser zu effizienteren Verdauungssystemen zwang.",
                  "nl": "Verhoogde Jura CO2-niveaus bevorderden snelle plantengroei maar verhoogden C:N verhoudingen en vezelgehalte, wat herbivore evolutie naar efficiëntere spijsverteringssystemen dwong."
        }
      },
      {
        question: {
                  "en": "What biomechanical evidence supports the hypothesis of sauropod pneumatic bone systems?",
                  "es": "¿Qué evidencia biomecánica apoya la hipótesis de sistemas óseos neumáticos en saurópodos?",
                  "de": "Welche biomechanischen Beweise stützen die Hypothese pneumatischer Knochensysteme bei Sauropoden?",
                  "nl": "Welk biomechanisch bewijs ondersteunt de hypothese van sauropode pneumatische botsystemen?"
        },
        options: [
        {
                  "en": "No evidence of internal bone structure",
                  "es": "Sin evidencia de estructura ósea interna",
                  "de": "Keine Belege für innere Knochenstruktur",
                  "nl": "Geen bewijs van interne botstructuur"
        },
        {
                  "en": "Fossil air sac impressions and fenestrated vertebrae consistent with avian-style respiratory anatomy",
                  "es": "Impresiones fósiles de sacos aéreos y vértebras fenestradas consistentes con anatomía respiratoria de estilo aviar",
                  "de": "Fossile Luftsack-Eindrücke und fenestrierte Wirbel konsistent mit Vogel-artiger Atmungsanatomie",
                  "nl": "Fossiele luchtzak afdrukken en gefenestreerde wervels consistent met vogel-achtige ademhalingsanatomie"
        },
        {
                  "en": "Solid bone construction throughout",
                  "es": "Construcción ósea sólida en todo",
                  "de": "Durchgehende massive Knochenkonstruktion",
                  "nl": "Massieve botconstructie overal"
        },
        {
                  "en": "Water-filled bone cavities",
                  "es": "Cavidades óseas llenas de agua",
                  "de": "Wassergefüllte Knochenhöhlen",
                  "nl": "Met water gevulde botholtes"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Sauropod vertebrae show pneumatic fenestrae and internal chambers similar to modern birds, indicating an air sac respiratory system that reduced bone weight and improved oxygen efficiency.",
                  "es": "Las vértebras de saurópodos muestran fenestras neumáticas y cámaras internas similares a las aves modernas, indicando un sistema respiratorio de sacos aéreos que redujo el peso óseo y mejoró la eficiencia del oxígeno.",
                  "de": "Sauropoden-Wirbel zeigen pneumatische Fenestrae und interne Kammern ähnlich modernen Vögeln, was ein Luftsack-Atmungssystem anzeigt, das Knochengewicht reduzierte und Sauerstoffeffizienz verbesserte.",
                  "nl": "Sauropode wervels tonen pneumatische fenestrae en interne kamers vergelijkbaar met moderne vogels, wat een luchtzak ademhalingssysteem aangeeft dat botgewicht verminderde en zuurstofefficiëntie verbeterde."
        }
      },
      {
        question: {
                  "en": "What does quantitative analysis of Morrison Formation depositional environments reveal about Late Jurassic paleogeography?",
                  "es": "¿Qué revela el análisis cuantitativo de ambientes deposicionales de la Formación Morrison sobre la paleogeografía del Jurásico Tardío?",
                  "de": "Was zeigt die quantitative Analyse der Ablagerungsumgebungen der Morrison-Formation über die Paläogeographie des Späten Jura?",
                  "nl": "Wat onthult kwantitatieve analyse van Morrison Formatie depositie-omgevingen over Laat-Jura paleogeografie?"
        },
        options: [
        {
                  "en": "Deep marine setting throughout",
                  "es": "Ambiente marino profundo en todo",
                  "de": "Durchgehend tiefmarines Setting",
                  "nl": "Diepe mariene setting overal"
        },
        {
                  "en": "Continuous desert environment",
                  "es": "Ambiente desértico continuo",
                  "de": "Kontinuierliche Wüstenumgebung",
                  "nl": "Continue woestijnomgeving"
        },
        {
                  "en": "Mosaic of floodplains, ephemeral lakes, and meandering rivers with 200-300mm seasonal precipitation",
                  "es": "Mosaico de llanuras de inundación, lagos efímeros y ríos serpenteantes con 200-300mm precipitación estacional",
                  "de": "Mosaik aus Überschwemmungsebenen, vergänglichen Seen und mäandernden Flüssen mit 200-300mm saisonalem Niederschlag",
                  "nl": "Mozaïek van rivierdale, efemere meren en meanderende rivieren met 200-300mm seizoensgebonden neerslag"
        },
        {
                  "en": "Tropical rainforest conditions",
                  "es": "Condiciones de selva tropical",
                  "de": "Tropische Regenwald-Bedingungen",
                  "nl": "Tropische regenwoud omstandigheden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sedimentological analysis reveals a complex mosaic of semi-arid environments with seasonal water availability, explaining the high fossil preservation potential and ecosystem diversity.",
                  "es": "El análisis sedimentológico revela un mosaico complejo de ambientes semiáridos con disponibilidad estacional de agua, explicando el alto potencial de preservación fósil y diversidad ecosistémica.",
                  "de": "Sedimentologische Analyse enthüllt ein komplexes Mosaik semiarider Umgebungen mit saisonaler Wasserverfügbarkeit, was das hohe Fossilerhaltungspotential und die Ökosystem-Diversität erklärt.",
                  "nl": "Sedimentologische analyse onthult een complex mozaïek van semi-aride omgevingen met seizoensgebonden waterbeschikbaarheid, wat het hoge fossielbewaringspotentieel en ecosysteemdiversiteit verklaart."
        }
      },
      {
        question: {
                  "en": "What was the estimated metabolic heat production of large theropods like Allosaurus?",
                  "es": "¿Cuál era la producción estimada de calor metabólico de grandes terópodos como Allosaurus?",
                  "de": "Was war die geschätzte metabolische Wärmeproduktion großer Theropoden wie Allosaurus?",
                  "nl": "Wat was de geschatte metabolische warmteproductie van grote theropoden zoals Allosaurus?"
        },
        options: [
        {
                  "en": "Same as modern mammals",
                  "es": "Igual que mamíferos modernos",
                  "de": "Gleich wie moderne Säugetiere",
                  "nl": "Hetzelfde als moderne zoogdieren"
        },
        {
                  "en": "10 times higher than any living animal",
                  "es": "10 veces mayor que cualquier animal vivo",
                  "de": "10 mal höher als jedes lebende Tier",
                  "nl": "10 keer hoger dan elk levend dier"
        },
        {
                  "en": "2-4 times modern crocodilian rates with inertial homeothermy",
                  "es": "2-4 veces las tasas de cocodrilos modernos con homeotermia inercial",
                  "de": "2-4 mal moderne Krokodil-Raten mit Trägheits-Homeothermie",
                  "nl": "2-4 keer moderne krokodilachtige snelheden met inertiële homeothermie"
        },
        {
                  "en": "Lower than modern reptiles",
                  "es": "Menor que reptiles modernos",
                  "de": "Niedriger als moderne Reptilien",
                  "nl": "Lager dan moderne reptielen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Large theropods likely had elevated metabolic rates 2-4 times higher than modern crocodilians, maintaining stable body temperature through mass and behavioral thermoregulation.",
                  "es": "Los grandes terópodos probablemente tenían tasas metabólicas elevadas 2-4 veces más altas que los cocodrilos modernos, manteniendo temperatura corporal estable através de termorregulación de masa y conductual.",
                  "de": "Große Theropoden hatten wahrscheinlich erhöhte Stoffwechselraten 2-4 mal höher als moderne Krokodile und hielten stabile Körpertemperatur durch Massen- und Verhaltensthermoregulation.",
                  "nl": "Grote theropoden hadden waarschijnlijk verhoogde metabolische snelheden 2-4 keer hoger dan moderne krokodilachtigen, waarbij ze stabiele lichaamstemperatuur behielden door massa- en gedragsthermoregulatie."
        }
      },
      {
        question: {
                  "en": "What does palynological evidence reveal about Jurassic plant community succession?",
                  "es": "¿Qué revela la evidencia palinológica sobre la sucesión de comunidades vegetales jurásicas?",
                  "de": "Was zeigen palynologische Belege über die Jura-Pflanzengemeinschafts-Sukzession?",
                  "nl": "Wat onthult palynologisch bewijs over Jura plantengemeenschap successie?"
        },
        options: [
        {
                  "en": "Cyclic replacement of conifer-fern communities following disturbance events",
                  "es": "Reemplazo cíclico de comunidades de coníferas-helechos siguiendo eventos de perturbación",
                  "de": "Zyklischer Ersatz von Nadel-Farn-Gemeinschaften nach Störungsereignissen",
                  "nl": "Cyclische vervanging van naaldbooms-varengemeenschappen na verstoringsgebeurtenissen"
        },
        {
                  "en": "Static plant communities with no change",
                  "es": "Comunidades vegetales estáticas sin cambio",
                  "de": "Statische Pflanzengemeinschaften ohne Veränderung",
                  "nl": "Statische plantengemeenschappen zonder verandering"
        },
        {
                  "en": "Grassland establishment",
                  "es": "Establecimiento de pastizales",
                  "de": "Grasland-Etablierung",
                  "nl": "Grasland vestiging"
        },
        {
                  "en": "Rapid evolution to flowering plants",
                  "es": "Evolución rápida a plantas con flores",
                  "de": "Schnelle Evolution zu Blütenpflanzen",
                  "nl": "Snelle evolutie naar bloeiende planten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Palynological studies show cyclical plant succession patterns in Jurassic ecosystems, with pioneer fern communities followed by conifer-dominated mature forests after disturbances.",
                  "es": "Los estudios palinológicos muestran patrones de sucesión vegetal cíclicos en ecosistemas jurásicos, con comunidades pioneras de helechos seguidas por bosques maduros dominados por coníferas después de perturbaciones.",
                  "de": "Palynologische Studien zeigen zyklische Pflanzensukzessionsmuster in Jura-Ökosystemen, mit Pionier-Farngemeinschaften gefolgt von nadelbaum-dominierten reifen Wäldern nach Störungen.",
                  "nl": "Palynologische studies tonen cyclische plantensuccessiepatronen in Jura-ecosystemen, met pionier varengemeenschappen gevolgd door naaldboom-gedomineerde volwassen bossen na verstoringen."
        }
      },
      {
        question: {
                  "en": "What was the taxonomic turnover rate among Morrison Formation dinosaur communities?",
                  "es": "¿Cuál era la tasa de recambio taxonómico entre las comunidades de dinosaurios de la Formación Morrison?",
                  "de": "Was war die taxonomische Umschlagsrate zwischen Morrison-Formation-Dinosaurier-Gemeinschaften?",
                  "nl": "Wat was de taxonomische omzetsnelheid onder Morrison Formatie dinosaurusgemeenschappen?"
        },
        options: [
        {
                  "en": "100% species replacement every 100,000 years",
                  "es": "100% reemplazo de especies cada 100,000 años",
                  "de": "100% Artenaustausch alle 100,000 Jahre",
                  "nl": "100% soortenvervanging elke 100.000 jaar"
        },
        {
                  "en": "Constant gradual change",
                  "es": "Cambio gradual constante",
                  "de": "Konstante graduelle Veränderung",
                  "nl": "Constante geleidelijke verandering"
        },
        {
                  "en": "15-25% species replacement per million years with punctuated equilibrium patterns",
                  "es": "15-25% reemplazo de especies por millón de años con patrones de equilibrio puntuado",
                  "de": "15-25% Artenaustausch pro Million Jahre mit punktierten Gleichgewichtsmustern",
                  "nl": "15-25% soortenvervanging per miljoen jaar met gepatroneerde evenwichtspatronen"
        },
        {
                  "en": "No species turnover",
                  "es": "Sin recambio de especies",
                  "de": "Kein Artenaustausch",
                  "nl": "Geen soortomzet"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Morrison Formation shows moderate taxonomic turnover with episodic species replacement events, consistent with punctuated equilibrium evolutionary patterns rather than gradual change.",
                  "es": "La Formación Morrison muestra recambio taxonómico moderado con eventos episódicos de reemplazo de especies, consistente con patrones evolutivos de equilibrio puntuado en lugar de cambio gradual.",
                  "de": "Die Morrison-Formation zeigt moderaten taxonomischen Umschlag mit episodischen Artenaustausch-Ereignissen, konsistent mit punktierten Gleichgewichts-Evolutionsmustern statt gradueller Veränderung.",
                  "nl": "Morrison Formatie toont gematigde taxonomische omzet met episodische soortenvervangingsgebeurtenissen, consistent met gepatroneerde evenwichtsevolutiepatronen in plaats van geleidelijke verandering."
        }
      },
      {
        question: {
                  "en": "What geochemical proxies indicate oceanic anoxic events during the Jurassic?",
                  "es": "¿Qué proxies geoquímicos indican eventos anóxicos oceánicos durante el Jurásico?",
                  "de": "Welche geochemischen Proxies zeigen ozeanische anoxische Ereignisse während des Jura an?",
                  "nl": "Welke geochemische proxies wijzen op oceanische anoxische gebeurtenissen tijdens het Jura?"
        },
        options: [
        {
                  "en": "Increased carbonate precipitation only",
                  "es": "Solo aumento de precipitación de carbonato",
                  "de": "Nur erhöhte Karbonat-Fällung",
                  "nl": "Alleen verhoogde carbonaatprecipitatie"
        },
        {
                  "en": "Carbon isotope excursions and black shale deposition with elevated organic matter",
                  "es": "Excursiones de isótopos de carbono y deposición de esquisto negro con materia orgánica elevada",
                  "de": "Kohlenstoff-Isotopen-Exkursionen und Schwarzschiefer-Ablagerung mit erhöhter organischer Substanz",
                  "nl": "Koolstofisotopen excursies en zwarte schalie afzetting met verhoogde organische materie"
        },
        {
                  "en": "No geochemical indicators",
                  "es": "Sin indicadores geoquímicos",
                  "de": "Keine geochemischen Indikatoren",
                  "nl": "Geen geochemische indicatoren"
        },
        {
                  "en": "Volcanic ash layers exclusively",
                  "es": "Exclusivamente capas de ceniza volcánica",
                  "de": "Ausschließlich vulkanische Ascheschichten",
                  "nl": "Uitsluitend vulkanische aslagen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Jurassic oceanic anoxic events are recorded by negative carbon isotope excursions, black shale formation, and elevated TOC values, indicating global carbon cycle perturbations.",
                  "es": "Los eventos anóxicos oceánicos jurásicos se registran por excursiones negativas de isótopos de carbono, formación de esquisto negro y valores elevados de TOC, indicando perturbaciones del ciclo global del carbono.",
                  "de": "Jura-ozeanische anoxische Ereignisse werden durch negative Kohlenstoff-Isotopen-Exkursionen, Schwarzschiefer-Bildung und erhöhte TOC-Werte aufgezeichnet, was globale Kohlenstoffkreislauf-Störungen anzeigt.",
                  "nl": "Jura oceanische anoxische gebeurtenissen worden vastgelegd door negatieve koolstofisotopen excursies, zwarte schalie vorming en verhoogde TOC waarden, wat globale koolstofcyclus verstoringen aangeeft."
        }
      },
      {
        question: {
                  "en": "What was the estimated encephalization quotient (EQ) of Allosaurus compared to modern vertebrates?",
                  "es": "¿Cuál era el cociente de encefalización (EQ) estimado de Allosaurus comparado con vertebrados modernos?",
                  "de": "Was war der geschätzte Enzephalisationsquotient (EQ) von Allosaurus im Vergleich zu modernen Wirbeltieren?",
                  "nl": "Wat was het geschatte encefalisatiequotiënt (EQ) van Allosaurus vergeleken met moderne gewervelden?"
        },
        options: [
        {
                  "en": "2.0-3.0 (similar to mammals)",
                  "es": "2.0-3.0 (similar a mamíferos)",
                  "de": "2.0-3.0 (ähnlich Säugetieren)",
                  "nl": "2.0-3.0 (vergelijkbaar met zoogdieren)"
        },
        {
                  "en": "0.1 (lower than any living vertebrate)",
                  "es": "0.1 (menor que cualquier vertebrado vivo)",
                  "de": "0.1 (niedriger als jedes lebende Wirbeltier)",
                  "nl": "0.1 (lager dan elk levend gewervelde)"
        },
        {
                  "en": "0.5-0.8 (intermediate between modern reptiles and birds)",
                  "es": "0.5-0.8 (intermedio entre reptiles modernos y aves)",
                  "de": "0.5-0.8 (zwischen modernen Reptilien und Vögeln)",
                  "nl": "0.5-0.8 (tussen moderne reptielen en vogels)"
        },
        {
                  "en": "5.0+ (higher than humans)",
                  "es": "5.0+ (mayor que humanos)",
                  "de": "5.0+ (höher als Menschen)",
                  "nl": "5.0+ (hoger dan mensen)"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Allosaurus EQ estimates suggest moderate intelligence between modern crocodilians and birds, indicating more complex behaviors than simple reptilian brain function.",
                  "es": "Las estimaciones de EQ de Allosaurus sugieren inteligencia moderada entre cocodrilos modernos y aves, indicando comportamientos más complejos que la función cerebral reptiliana simple.",
                  "de": "Allosaurus-EQ-Schätzungen deuten auf moderate Intelligenz zwischen modernen Krokodilen und Vögeln hin, was komplexere Verhaltensweisen als einfache reptilische Gehirnfunktion anzeigt.",
                  "nl": "Allosaurus EQ schattingen suggereren gematigde intelligentie tussen moderne krokodilachtigen en vogels, wat complexere gedragingen aangeeft dan eenvoudige reptielachtige hersenfunctie."
        }
      },
      {
        question: {
                  "en": "What does functional morphology analysis reveal about Ceratosaurus swimming ability?",
                  "es": "¿Qué revela el análisis de morfología funcional sobre la capacidad de natación de Ceratosaurus?",
                  "de": "Was zeigt die funktionelle Morphologie-Analyse über die Schwimmfähigkeit von Ceratosaurus?",
                  "nl": "Wat onthult functionele morfologie analyse over Ceratosaurus zwemvermogen?"
        },
        options: [
        {
                  "en": "Fully aquatic like modern whales",
                  "es": "Completamente acuático como ballenas modernas",
                  "de": "Vollständig aquatisch wie moderne Wale",
                  "nl": "Volledig aquatisch zoals moderne walvissen"
        },
        {
                  "en": "Laterally compressed tail and webbed digits suggest semi-aquatic capabilities",
                  "es": "Cola comprimida lateralmente y dígitos palmeados sugieren capacidades semiacuáticas",
                  "de": "Seitlich komprimierter Schwanz und Schwimmhäute deuten auf semi-aquatische Fähigkeiten hin",
                  "nl": "Lateraal samengedrukte staart en zwemvliezen suggereren semi-aquatische mogelijkheden"
        },
        {
                  "en": "Purely terrestrial with no aquatic adaptations",
                  "es": "Puramente terrestre sin adaptaciones acuáticas",
                  "de": "Rein terrestrisch ohne aquatische Anpassungen",
                  "nl": "Puur terrestrisch zonder aquatische aanpassingen"
        },
        {
                  "en": "Aerial locomotion adaptations",
                  "es": "Adaptaciones de locomoción aérea",
                  "de": "Luftfahrt-Fortbewegungsanpassungen",
                  "nl": "Luchtvaart voortbeweging aanpassingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Ceratosaurus shows morphological features including a laterally compressed tail and possible webbing that suggest it was capable of swimming, unlike most other large theropods.",
                  "es": "Ceratosaurus muestra características morfológicas incluyendo una cola comprimida lateralmente y posibles membranas que sugieren que era capaz de nadar, a diferencia de la mayoría de otros grandes terópodos.",
                  "de": "Ceratosaurus zeigt morphologische Merkmale einschließlich eines seitlich komprimierten Schwanzes und möglicher Schwimmhäute, die darauf hindeuten, dass er schwimmen konnte, im Gegensatz zu den meisten anderen großen Theropoden.",
                  "nl": "Ceratosaurus toont morfologische kenmerken inclusief een lateraal samengedrukte staart en mogelijke zwemvliezen die suggereren dat hij kon zwemmen, in tegenstelling tot de meeste andere grote theropoden."
        }
      },
      {
        question: {
                  "en": "What was the estimated daily water requirement for large Morrison Formation sauropods?",
                  "es": "¿Cuál era el requerimiento diario estimado de agua para grandes saurópodos de la Formación Morrison?",
                  "de": "Was war der geschätzte tägliche Wasserbedarf für große Morrison-Formation-Sauropoden?",
                  "nl": "Wat was de geschatte dagelijkse waterbehoefte voor grote Morrison Formatie sauropoden?"
        },
        options: [
        {
                  "en": "200-400 liters per day with water recycling adaptations",
                  "es": "200-400 litros por día con adaptaciones de reciclaje de agua",
                  "de": "200-400 Liter pro Tag mit Wasser-Recycling-Anpassungen",
                  "nl": "200-400 liter per dag met waterrecycling aanpassingen"
        },
        {
                  "en": "No water requirement",
                  "es": "Sin requerimiento de agua",
                  "de": "Kein Wasserbedarf",
                  "nl": "Geen waterbehoefte"
        },
        {
                  "en": "10-20 liters per day",
                  "es": "10-20 litros por día",
                  "de": "10-20 Liter pro Tag",
                  "nl": "10-20 liter per dag"
        },
        {
                  "en": "2,000-5,000 liters per day",
                  "es": "2,000-5,000 litros por día",
                  "de": "2,000-5,000 Liter pro Tag",
                  "nl": "2,000-5,000 liter per dag"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Large sauropods likely had efficient water conservation systems including nasal turbinates and specialized kidneys, requiring 200-400L daily despite their massive size.",
                  "es": "Los grandes saurópodos probablemente tenían sistemas eficientes de conservación de agua incluyendo turbinados nasales y riñones especializados, requiriendo 200-400L diarios a pesar de su tamaño masivo.",
                  "de": "Große Sauropoden hatten wahrscheinlich effiziente Wassersparsysteme einschließlich Nasenturbinate und spezialisierte Nieren und benötigten trotz ihrer massiven Größe 200-400L täglich.",
                  "nl": "Grote sauropoden hadden waarschijnlijk efficiënte waterbesparingssystemen inclusief neusturbinaten en gespecialiseerde nieren, waarbij ze ondanks hun massieve grootte 200-400L per dag nodig hadden."
        }
      },
      {
        question: {
                  "en": "What tectonic processes influenced Morrison Formation depositional patterns?",
                  "es": "¿Qué procesos tectónicos influyeron en los patrones deposicionales de la Formación Morrison?",
                  "de": "Welche tektonischen Prozesse beeinflussten die Ablagerungsmuster der Morrison-Formation?",
                  "nl": "Welke tektonische processen beïnvloedden Morrison Formatie afzettingspatronen?"
        },
        options: [
        {
                  "en": "No tectonic influence",
                  "es": "Sin influencia tectónica",
                  "de": "Kein tektonischer Einfluss",
                  "nl": "Geen tektonische invloed"
        },
        {
                  "en": "Sevier orogenic activity creating foreland basin subsidence and sediment supply",
                  "es": "Actividad orogénica de Sevier creando subsidencia de cuenca frontal y suministro de sedimentos",
                  "de": "Sevier-orogenetische Aktivität schuf Vorlandbecken-Subsidenz und Sedimentzufuhr",
                  "nl": "Sevier orogenische activiteit die voorlandsbekken subsidie en sedimentaanvoer creëerde"
        },
        {
                  "en": "Volcanic rifting exclusively",
                  "es": "Exclusivamente rifting volcánico",
                  "de": "Ausschließlich vulkanisches Rifting",
                  "nl": "Uitsluitend vulkanische rifting"
        },
        {
                  "en": "Passive margin sedimentation only",
                  "es": "Solo sedimentación de margen pasivo",
                  "de": "Nur passive Rand-Sedimentation",
                  "nl": "Alleen passieve marge sedimentatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Morrison Formation was deposited in a foreland basin created by Sevier orogenic loading, which controlled accommodation space and sediment flux patterns across the western interior.",
                  "es": "La Formación Morrison se depositó en una cuenca frontal creada por carga orogénica de Sevier, que controló el espacio de acomodación y patrones de flujo de sedimentos a través del interior occidental.",
                  "de": "Die Morrison-Formation wurde in einem Vorlandbecken abgelagert, das durch Sevier-orogenetische Belastung entstand, was Akkommodationsraum und Sedimentflussmuster im westlichen Binnenland kontrollierte.",
                  "nl": "De Morrison Formatie werd afgezet in een voorlandsbekken gecreëerd door Sevier orogenische belading, wat accommodatieruimte en sedimentfluxpatronen over het westelijke binnenland controleerde."
        }
      },
      {
        question: {
                  "en": "What was the estimated population structure of Morrison Formation dinosaur communities?",
                  "es": "¿Cuál era la estructura poblacional estimada de las comunidades de dinosaurios de la Formación Morrison?",
                  "de": "Was war die geschätzte Populationsstruktur der Morrison-Formation-Dinosaurier-Gemeinschaften?",
                  "nl": "Wat was de geschatte populatiestructuur van Morrison Formatie dinosaurusgemeenschappen?"
        },
        options: [
        {
                  "en": "No juveniles preserved",
                  "es": "Sin juveniles preservados",
                  "de": "Keine Jugendlichen erhalten",
                  "nl": "Geen juvenielen bewaard"
        },
        {
                  "en": "Equal age distribution",
                  "es": "Distribución de edad igual",
                  "de": "Gleiche Altersverteilung",
                  "nl": "Gelijke leeftijdsverdeling"
        },
        {
                  "en": "Juvenile-dominated assemblages (60-70%) with size-based mortality patterns",
                  "es": "Ensamblajes dominados por juveniles (60-70%) con patrones de mortalidad basados en tamaño",
                  "de": "Juvenil-dominierte Versammlungen (60-70%) mit größenbasierten Sterblichkeitsmustern",
                  "nl": "Juveniel-gedomineerde assemblages (60-70%) met grootte-gebaseerde sterftelijkheidpatronen"
        },
        {
                  "en": "Adult-dominated populations only",
                  "es": "Solo poblaciones dominadas por adultos",
                  "de": "Nur erwachsenen-dominierte Populationen",
                  "nl": "Alleen volwassen-gedomineerde populaties"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Morrison Formation fossil assemblages show juvenile-dominated populations consistent with high juvenile mortality rates typical of modern megafauna in seasonal environments.",
                  "es": "Los ensamblajes fósiles de la Formación Morrison muestran poblaciones dominadas por juveniles consistentes con altas tasas de mortalidad juvenil típicas de megafauna moderna en ambientes estacionales.",
                  "de": "Morrison-Formation-Fossil-Versammlungen zeigen juvenil-dominierte Populationen, die mit hohen juvenilen Sterblichkeitsraten übereinstimmen, typisch für moderne Megafauna in saisonalen Umgebungen.",
                  "nl": "Morrison Formatie fossielassemblages tonen juveniel-gedomineerde populaties consistent met hoge juveniele sterftecijfers typisch voor moderne megafauna in seizoensgebonden omgevingen."
        }
      },
      {
        question: {
                  "en": "What does microwear analysis of sauropod teeth reveal about feeding mechanics?",
                  "es": "¿Qué revela el análisis de microdesgaste de dientes de saurópodos sobre la mecánica de alimentación?",
                  "de": "Was zeigt die Mikroverschleiß-Analyse von Sauropoden-Zähnen über Fütterungsmechanik?",
                  "nl": "Wat onthult microslijtage analyse van sauropode tanden over voedingsmechanica?"
        },
        options: [
        {
                  "en": "Carnivorous adaptations",
                  "es": "Adaptaciones carnívoras",
                  "de": "Fleischfressende Anpassungen",
                  "nl": "Carnivore aanpassingen"
        },
        {
                  "en": "Simple cropping without oral processing, requiring extensive gut fermentation",
                  "es": "Corte simple sin procesamiento oral, requiriendo fermentación intestinal extensa",
                  "de": "Einfaches Abschneiden ohne orale Verarbeitung, erfordert extensive Darm-Fermentation",
                  "nl": "Eenvoudig afknippen zonder orale verwerking, vereist uitgebreide darmfermentatie"
        },
        {
                  "en": "Extensive chewing like modern ungulates",
                  "es": "Masticación extensa como ungulados modernos",
                  "de": "Extensive Kauen wie moderne Huftiere",
                  "nl": "Uitgebreid kauwen zoals moderne hoef dieren"
        },
        {
                  "en": "Filter feeding mechanisms",
                  "es": "Mecanismos de alimentación por filtración",
                  "de": "Filterfütterungsmechanismen",
                  "nl": "Filter voedingsmechanismen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dental microwear patterns show sauropods used simple cropping motions with minimal oral processing, relying on gastroliths and extended gut transit times for digestion.",
                  "es": "Los patrones de microdesgaste dental muestran que los saurópodos usaban movimientos simples de corte con procesamiento oral mínimo, dependiendo de gastrolitos y tiempos de tránsito intestinal extendidos para la digestión.",
                  "de": "Dentale Mikroverschleiß-Muster zeigen, dass Sauropoden einfache Abschneidbewegungen mit minimalem oralem Processing verwendeten und auf Gastrolithen und verlängerte Darmtransitzeiten für die Verdauung angewiesen waren.",
                  "nl": "Dentale microslijtagepatronen tonen dat sauropoden eenvoudige afknipbewegingen gebruikten met minimale orale verwerking, vertrouwend op gastrolieten en verlengde darmtransittijden voor vertering."
        }
      },
      {
        question: {
                  "en": "What was the estimated annual biomass turnover in Morrison Formation ecosystems?",
                  "es": "¿Cuál era el recambio anual estimado de biomasa en ecosistemas de la Formación Morrison?",
                  "de": "Was war der geschätzte jährliche Biomasse-Umsatz in Morrison-Formation-Ökosystemen?",
                  "nl": "Wat was de geschatte jaarlijkse biomassa omzet in Morrison Formatie ecosystemen?"
        },
        options: [
        {
                  "en": "50-100 tons per hectare",
                  "es": "50-100 toneladas por hectárea",
                  "de": "50-100 Tonnen pro Hektar",
                  "nl": "50-100 ton per hectare"
        },
        {
                  "en": "2-5 tons per hectare with 10-15% herbivore efficiency",
                  "es": "2-5 toneladas por hectárea con 10-15% eficiencia de herbívoros",
                  "de": "2-5 Tonnen pro Hektar mit 10-15% Pflanzenfresser-Effizienz",
                  "nl": "2-5 ton per hectare met 10-15% herbivoor efficiëntie"
        },
        {
                  "en": "200+ tons per hectare",
                  "es": "200+ toneladas por hectárea",
                  "de": "200+ Tonnen pro Hektar",
                  "nl": "200+ ton per hectare"
        },
        {
                  "en": "0.1-0.5 tons per hectare",
                  "es": "0.1-0.5 toneladas por hectárea",
                  "de": "0.1-0.5 Tonnen pro Hektar",
                  "nl": "0.1-0.5 ton per hectare"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Morrison ecosystems supported moderate biomass turnover rates similar to modern savanna systems, with herbivore populations limited by seasonal resource availability and predation pressure.",
                  "es": "Los ecosistemas de Morrison apoyaron tasas moderadas de recambio de biomasa similares a sistemas de sabana modernos, con poblaciones de herbívoros limitadas por disponibilidad estacional de recursos y presión de depredación.",
                  "de": "Morrison-Ökosysteme unterstützten moderate Biomasse-Umsatzraten ähnlich modernen Savannensystemen, mit Pflanzenfresser-Populationen begrenzt durch saisonale Ressourcenverfügbarkeit und Raubdruck.",
                  "nl": "Morrison ecosystemen ondersteunden gematigde biomassa omzetsnelheden vergelijkbaar met moderne savanne systemen, met herbivore populaties beperkt door seizoensgebonden beschikbaarheid van hulpbronnen en predatiedruk."
        }
      },
      {
        question: {
                  "en": "What was the impact of Late Jurassic sea level fluctuations on continental ecosystem dynamics?",
                  "es": "¿Cuál fue el impacto de las fluctuaciones del nivel del mar del Jurásico Tardío en la dinámica de ecosistemas continentales?",
                  "de": "Was war der Einfluss der spätjurassischen Meeresspiegel-Schwankungen auf kontinentale Ökosystem-Dynamiken?",
                  "nl": "Wat was de impact van Laat-Jura zeespiegel fluctuaties op continentale ecosysteem dynamiek?"
        },
        options: [
        {
                  "en": "Created fragmented habitats leading to increased dinosaur endemism and evolutionary radiation",
                  "es": "Creó hábitats fragmentados llevando a endemismo aumentado de dinosaurios y radiación evolutiva",
                  "de": "Schuf fragmentierte Lebensräume, die zu erhöhtem Dinosaurier-Endemismus und evolutionärer Radiation führten",
                  "nl": "Creëerde gefragmenteerde habitats leidend tot verhoogd dinosaurus endemisme en evolutionaire radiatie"
        },
        {
                  "en": "Prevented all dinosaur evolution",
                  "es": "Previno toda evolución de dinosaurios",
                  "de": "Verhinderte alle Dinosaurier-Evolution",
                  "nl": "Voorkwam alle dinosaurus evolutie"
        },
        {
                  "en": "Only affected marine environments",
                  "es": "Solo afectó ambientes marinos",
                  "de": "Beeinflusste nur marine Umgebungen",
                  "nl": "Beïnvloedde alleen mariene omgevingen"
        },
        {
                  "en": "Had no effect on terrestrial ecosystems",
                  "es": "No tuvo efecto en ecosistemas terrestres",
                  "de": "Hatte keinen Effekt auf terrestrische Ökosysteme",
                  "nl": "Had geen effect op terrestrische ecosystemen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sea level changes during the Late Jurassic created geographic barriers that isolated dinosaur populations, promoting allopatric speciation and resulting in the diverse endemic faunas seen in different formations worldwide.",
                  "es": "Los cambios del nivel del mar durante el Jurásico Tardío crearon barreras geográficas que aislaron poblaciones de dinosaurios, promoviendo especiación alopátrica y resultando en las diversas faunas endémicas vistas en diferentes formaciones mundialmente.",
                  "de": "Meeresspiegel-Veränderungen während des Späten Jura schufen geographische Barrieren, die Dinosaurier-Populationen isolierten, allopatrische Artbildung förderten und zu den diversen endemischen Faunen in verschiedenen Formationen weltweit führten.",
                  "nl": "Zeespiegel veranderingen tijdens het Laat-Jura creëerden geografische barrières die dinosaurus populaties isoleerden, allopatrische soortvorming bevorderden en resulteerden in de diverse endemische fauna's gezien in verschillende formaties wereldwijd."
        }
      },
      {
        question: {
                  "en": "What does analysis of Jurassic amber inclusions reveal about dinosaur ecosystem complexity?",
                  "es": "¿Qué revela el análisis de inclusiones de ámbar jurásico sobre la complejidad del ecosistema de dinosaurios?",
                  "de": "Was zeigt die Analyse von Jura-Bernstein-Einschlüssen über die Komplexität des Dinosaurier-Ökosystems?",
                  "nl": "Wat onthult analyse van Jura barnsteen insluitsels over dinosaurus ecosysteem complexiteit?"
        },
        options: [
        {
                  "en": "No preserved organisms",
                  "es": "Sin organismos preservados",
                  "de": "Keine konservierten Organismen",
                  "nl": "Geen bewaarde organismen"
        },
        {
                  "en": "Diverse arthropod communities indicating complex multi-trophic interactions with sophisticated pollination networks",
                  "es": "Diversas comunidades de artrópodos indicando interacciones multi-tróficas complejas con redes de polinización sofisticadas",
                  "de": "Diverse Arthropoden-Gemeinschaften zeigen komplexe multi-trophische Interaktionen mit ausgeklügelten Bestäubungsnetzwerken",
                  "nl": "Diverse artropode gemeenschappen die complexe multi-trofische interacties aangeven met geavanceerde bestuivingsnetwerken"
        },
        {
                  "en": "Simple food webs with only dinosaurs",
                  "es": "Redes alimentarias simples con solo dinosaurios",
                  "de": "Einfache Nahrungsnetze nur mit Dinosauriern",
                  "nl": "Eenvoudige voedselnetwerken met alleen dinosaurussen"
        },
        {
                  "en": "Only plant material preserved",
                  "es": "Solo material vegetal preservado",
                  "de": "Nur Pflanzenmaterial konserviert",
                  "nl": "Alleen plantenmateriaal bewaard"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Jurassic amber preserves extraordinary detail of contemporary arthropod communities, revealing complex ecological webs including early pollinator-plant relationships that supported the dinosaur food base.",
                  "es": "El ámbar jurásico preserva detalles extraordinarios de comunidades de artrópodos contemporáneos, revelando redes ecológicas complejas incluyendo relaciones tempranas polinizador-planta que apoyaron la base alimentaria de dinosaurios.",
                  "de": "Jura-Bernstein konserviert außergewöhnliche Details zeitgenössischer Arthropoden-Gemeinschaften und enthüllt komplexe ökologische Netze einschließlich früher Bestäuber-Pflanzen-Beziehungen, die die Dinosaurier-Nahrungsgrundlage unterstützten.",
                  "nl": "Jura barnsteen bewaart buitengewone details van eigentijdse artropode gemeenschappen, onthullend complexe ecologische netwerken inclusief vroege bestuiver-plant relaties die de dinosaurus voedselbasis ondersteunden."
        }
      },
      {
        question: {
                  "en": "What period did Jurassic dinosaurs live in?",
                  "es": "What period did Jurassic dinosaurs live in?",
                  "de": "What period did Jurassic dinosaurs live in?",
                  "nl": "What period did Jurassic dinosaurs live in?"
        },
        options: [
        {
                  "en": "Triassic Period",
                  "es": "Triassic Period",
                  "de": "Triassic Period",
                  "nl": "Triassic Period"
        },
        {
                  "en": "Jurassic Period",
                  "es": "Jurassic Period",
                  "de": "Jurassic Period",
                  "nl": "Jurassic Period"
        },
        {
                  "en": "Permian Period",
                  "es": "Permian Period",
                  "de": "Permian Period",
                  "nl": "Permian Period"
        },
        {
                  "en": "Cretaceous Period",
                  "es": "Cretaceous Period",
                  "de": "Cretaceous Period",
                  "nl": "Cretaceous Period"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
                  "es": "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
                  "de": "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
                  "nl": "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago."
        }
      },
      {
        question: {
                  "en": "What famous dinosaur is from the Jurassic?",
                  "es": "What famous dinosaur is from the Jurassic?",
                  "de": "What famous dinosaur is from the Jurassic?",
                  "nl": "What famous dinosaur is from the Jurassic?"
        },
        options: [
        {
                  "en": "Stegosaurus",
                  "es": "Stegosaurus",
                  "de": "Stegosaurus",
                  "nl": "Stegosaurus"
        },
        {
                  "en": "Velociraptor",
                  "es": "Velociraptor",
                  "de": "Velociraptor",
                  "nl": "Velociraptor"
        },
        {
                  "en": "Triceratops",
                  "es": "Triceratops",
                  "de": "Triceratops",
                  "nl": "Triceratops"
        },
        {
                  "en": "Tyrannosaurus Rex",
                  "es": "Tyrannosaurus Rex",
                  "de": "Tyrannosaurus Rex",
                  "nl": "Tyrannosaurus Rex"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
                  "es": "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
                  "de": "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
                  "nl": "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back."
        }
      },
      {
        question: {
                  "en": "What was the climate like in the Jurassic?",
                  "es": "What was the climate like in the Jurassic?",
                  "de": "What was the climate like in the Jurassic?",
                  "nl": "What was the climate like in the Jurassic?"
        },
        options: [
        {
                  "en": "Frozen",
                  "es": "Frozen",
                  "de": "Frozen",
                  "nl": "Frozen"
        },
        {
                  "en": "Cold and dry",
                  "es": "Cold and dry",
                  "de": "Cold and dry",
                  "nl": "Cold and dry"
        },
        {
                  "en": "Desert-like",
                  "es": "Desert-like",
                  "de": "Desert-like",
                  "nl": "Desert-like"
        },
        {
                  "en": "Warm and humid",
                  "es": "Warm and humid",
                  "de": "Warm and humid",
                  "nl": "Warm and humid"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Jurassic Period had a warm, humid climate with lush vegetation.",
                  "es": "The Jurassic Period had a warm, humid climate with lush vegetation.",
                  "de": "The Jurassic Period had a warm, humid climate with lush vegetation.",
                  "nl": "The Jurassic Period had a warm, humid climate with lush vegetation."
        }
      },
      {
        question: {
                  "en": "Which giant sauropod lived in the Jurassic?",
                  "es": "Which giant sauropod lived in the Jurassic?",
                  "de": "Which giant sauropod lived in the Jurassic?",
                  "nl": "Which giant sauropod lived in the Jurassic?"
        },
        options: [
        {
                  "en": "Triceratops",
                  "es": "Triceratops",
                  "de": "Triceratops",
                  "nl": "Triceratops"
        },
        {
                  "en": "Tyrannosaurus",
                  "es": "Tyrannosaurus",
                  "de": "Tyrannosaurus",
                  "nl": "Tyrannosaurus"
        },
        {
                  "en": "Velociraptor",
                  "es": "Velociraptor",
                  "de": "Velociraptor",
                  "nl": "Velociraptor"
        },
        {
                  "en": "Brachiosaurus",
                  "es": "Brachiosaurus",
                  "de": "Brachiosaurus",
                  "nl": "Brachiosaurus"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
                  "es": "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
                  "de": "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
                  "nl": "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs."
        }
      },
      {
        question: {
                  "en": "What is Allosaurus?",
                  "es": "What is Allosaurus?",
                  "de": "What is Allosaurus?",
                  "nl": "What is Allosaurus?"
        },
        options: [
        {
                  "en": "Herbivore",
                  "es": "Herbivore",
                  "de": "Herbivore",
                  "nl": "Herbivore"
        },
        {
                  "en": "Marine reptile",
                  "es": "Marine reptile",
                  "de": "Marine reptile",
                  "nl": "Marine reptile"
        },
        {
                  "en": "Large Jurassic predator",
                  "es": "Large Jurassic predator",
                  "de": "Large Jurassic predator",
                  "nl": "Large Jurassic predator"
        },
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
                  "es": "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
                  "de": "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
                  "nl": "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long."
        }
      },
      {
        question: {
                  "en": "What supercontinent was breaking apart in the Jurassic?",
                  "es": "What supercontinent was breaking apart in the Jurassic?",
                  "de": "What supercontinent was breaking apart in the Jurassic?",
                  "nl": "What supercontinent was breaking apart in the Jurassic?"
        },
        options: [
        {
                  "en": "Rodinia",
                  "es": "Rodinia",
                  "de": "Rodinia",
                  "nl": "Rodinia"
        },
        {
                  "en": "Gondwana only",
                  "es": "Gondwana only",
                  "de": "Gondwana only",
                  "nl": "Gondwana only"
        },
        {
                  "en": "Pangaea",
                  "es": "Pangaea",
                  "de": "Pangaea",
                  "nl": "Pangaea"
        },
        {
                  "en": "None",
                  "es": "None",
                  "de": "None",
                  "nl": "None"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
                  "es": "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
                  "de": "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
                  "nl": "The supercontinent Pangaea began breaking apart during the Jurassic Period."
        }
      },
      {
        question: {
                  "en": "What is the Morrison Formation?",
                  "es": "What is the Morrison Formation?",
                  "de": "What is the Morrison Formation?",
                  "nl": "What is the Morrison Formation?"
        },
        options: [
        {
                  "en": "Ocean",
                  "es": "Ocean",
                  "de": "Ocean",
                  "nl": "Ocean"
        },
        {
                  "en": "Desert",
                  "es": "Desert",
                  "de": "Desert",
                  "nl": "Desert"
        },
        {
                  "en": "Mountain range",
                  "es": "Mountain range",
                  "de": "Mountain range",
                  "nl": "Mountain range"
        },
        {
                  "en": "Rock layer rich in Jurassic fossils",
                  "es": "Rock layer rich in Jurassic fossils",
                  "de": "Rock layer rich in Jurassic fossils",
                  "nl": "Rock layer rich in Jurassic fossils"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
                  "es": "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
                  "de": "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
                  "nl": "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils."
        }
      },
      {
        question: {
                  "en": "What dinosaur had plates on its back?",
                  "es": "What dinosaur had plates on its back?",
                  "de": "What dinosaur had plates on its back?",
                  "nl": "What dinosaur had plates on its back?"
        },
        options: [
        {
                  "en": "Stegosaurus",
                  "es": "Stegosaurus",
                  "de": "Stegosaurus",
                  "nl": "Stegosaurus"
        },
        {
                  "en": "Brachiosaurus",
                  "es": "Brachiosaurus",
                  "de": "Brachiosaurus",
                  "nl": "Brachiosaurus"
        },
        {
                  "en": "Diplodocus",
                  "es": "Diplodocus",
                  "de": "Diplodocus",
                  "nl": "Diplodocus"
        },
        {
                  "en": "Allosaurus",
                  "es": "Allosaurus",
                  "de": "Allosaurus",
                  "nl": "Allosaurus"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Stegosaurus had two rows of large bony plates running down its back.",
                  "es": "Stegosaurus had two rows of large bony plates running down its back.",
                  "de": "Stegosaurus had two rows of large bony plates running down its back.",
                  "nl": "Stegosaurus had two rows of large bony plates running down its back."
        }
      },
      {
        question: {
                  "en": "What is Diplodocus known for?",
                  "es": "What is Diplodocus known for?",
                  "de": "What is Diplodocus known for?",
                  "nl": "What is Diplodocus known for?"
        },
        options: [
        {
                  "en": "Sharp teeth",
                  "es": "Sharp teeth",
                  "de": "Sharp teeth",
                  "nl": "Sharp teeth"
        },
        {
                  "en": "Extremely long whip-like tail",
                  "es": "Extremely long whip-like tail",
                  "de": "Extremely long whip-like tail",
                  "nl": "Extremely long whip-like tail"
        },
        {
                  "en": "Large plates",
                  "es": "Large plates",
                  "de": "Large plates",
                  "nl": "Large plates"
        },
        {
                  "en": "Flying ability",
                  "es": "Flying ability",
                  "de": "Flying ability",
                  "nl": "Flying ability"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
                  "es": "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
                  "de": "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
                  "nl": "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense."
        }
      },
      {
        question: {
                  "en": "What was the dominant predator of the Jurassic?",
                  "es": "What was the dominant predator of the Jurassic?",
                  "de": "What was the dominant predator of the Jurassic?",
                  "nl": "What was the dominant predator of the Jurassic?"
        },
        options: [
        {
                  "en": "Allosaurus",
                  "es": "Allosaurus",
                  "de": "Allosaurus",
                  "nl": "Allosaurus"
        },
        {
                  "en": "T-Rex",
                  "es": "T-Rex",
                  "de": "T-Rex",
                  "nl": "T-Rex"
        },
        {
                  "en": "Velociraptor",
                  "es": "Velociraptor",
                  "de": "Velociraptor",
                  "nl": "Velociraptor"
        },
        {
                  "en": "Spinosaurus",
                  "es": "Spinosaurus",
                  "de": "Spinosaurus",
                  "nl": "Spinosaurus"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Allosaurus was the dominant large predator during the Late Jurassic Period.",
                  "es": "Allosaurus was the dominant large predator during the Late Jurassic Period.",
                  "de": "Allosaurus was the dominant large predator during the Late Jurassic Period.",
                  "nl": "Allosaurus was the dominant large predator during the Late Jurassic Period."
        }
      },
      {
        question: {
                  "en": "What is Archaeopteryx?",
                  "es": "What is Archaeopteryx?",
                  "de": "What is Archaeopteryx?",
                  "nl": "What is Archaeopteryx?"
        },
        options: [
        {
                  "en": "Earliest known bird from Late Jurassic",
                  "es": "Earliest known bird from Late Jurassic",
                  "de": "Earliest known bird from Late Jurassic",
                  "nl": "Earliest known bird from Late Jurassic"
        },
        {
                  "en": "Mammal",
                  "es": "Mammal",
                  "de": "Mammal",
                  "nl": "Mammal"
        },
        {
                  "en": "Flying dinosaur",
                  "es": "Flying dinosaur",
                  "de": "Flying dinosaur",
                  "nl": "Flying dinosaur"
        },
        {
                  "en": "Marine reptile",
                  "es": "Marine reptile",
                  "de": "Marine reptile",
                  "nl": "Marine reptile"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
                  "es": "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
                  "de": "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
                  "nl": "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features."
        }
      },
      {
        question: {
                  "en": "How long was the Jurassic Period?",
                  "es": "How long was the Jurassic Period?",
                  "de": "How long was the Jurassic Period?",
                  "nl": "How long was the Jurassic Period?"
        },
        options: [
        {
                  "en": "About 80 million years",
                  "es": "About 80 million years",
                  "de": "About 80 million years",
                  "nl": "About 80 million years"
        },
        {
                  "en": "About 30 million years",
                  "es": "About 30 million years",
                  "de": "About 30 million years",
                  "nl": "About 30 million years"
        },
        {
                  "en": "About 56 million years",
                  "es": "About 56 million years",
                  "de": "About 56 million years",
                  "nl": "About 56 million years"
        },
        {
                  "en": "About 100 million years",
                  "es": "About 100 million years",
                  "de": "About 100 million years",
                  "nl": "About 100 million years"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
                  "es": "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
                  "de": "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
                  "nl": "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago."
        }
      },
      {
        question: {
                  "en": "What ocean was forming during the Jurassic?",
                  "es": "What ocean was forming during the Jurassic?",
                  "de": "What ocean was forming during the Jurassic?",
                  "nl": "What ocean was forming during the Jurassic?"
        },
        options: [
        {
                  "en": "Atlantic Ocean",
                  "es": "Atlantic Ocean",
                  "de": "Atlantic Ocean",
                  "nl": "Atlantic Ocean"
        },
        {
                  "en": "Pacific Ocean",
                  "es": "Pacific Ocean",
                  "de": "Pacific Ocean",
                  "nl": "Pacific Ocean"
        },
        {
                  "en": "Arctic Ocean",
                  "es": "Arctic Ocean",
                  "de": "Arctic Ocean",
                  "nl": "Arctic Ocean"
        },
        {
                  "en": "Indian Ocean",
                  "es": "Indian Ocean",
                  "de": "Indian Ocean",
                  "nl": "Indian Ocean"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
                  "es": "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
                  "de": "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
                  "nl": "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic."
        }
      },
      {
        question: {
                  "en": "What is Compsognathus?",
                  "es": "What is Compsognathus?",
                  "de": "What is Compsognathus?",
                  "nl": "What is Compsognathus?"
        },
        options: [
        {
                  "en": "Flying dinosaur",
                  "es": "Flying dinosaur",
                  "de": "Flying dinosaur",
                  "nl": "Flying dinosaur"
        },
        {
                  "en": "Giant herbivore",
                  "es": "Giant herbivore",
                  "de": "Giant herbivore",
                  "nl": "Giant herbivore"
        },
        {
                  "en": "Large predator",
                  "es": "Large predator",
                  "de": "Large predator",
                  "nl": "Large predator"
        },
        {
                  "en": "Small chicken-sized carnivore",
                  "es": "Small chicken-sized carnivore",
                  "de": "Small chicken-sized carnivore",
                  "nl": "Small chicken-sized carnivore"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
                  "es": "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
                  "de": "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
                  "nl": "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken."
        }
      },
      {
        question: {
                  "en": "What pterosaur lived in the Jurassic?",
                  "es": "What pterosaur lived in the Jurassic?",
                  "de": "What pterosaur lived in the Jurassic?",
                  "nl": "What pterosaur lived in the Jurassic?"
        },
        options: [
        {
                  "en": "None",
                  "es": "None",
                  "de": "None",
                  "nl": "None"
        },
        {
                  "en": "Pterodactylus",
                  "es": "Pterodactylus",
                  "de": "Pterodactylus",
                  "nl": "Pterodactylus"
        },
        {
                  "en": "Quetzalcoatlus",
                  "es": "Quetzalcoatlus",
                  "de": "Quetzalcoatlus",
                  "nl": "Quetzalcoatlus"
        },
        {
                  "en": "Pteranodon",
                  "es": "Pteranodon",
                  "de": "Pteranodon",
                  "nl": "Pteranodon"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pterodactylus was a small pterosaur from the Late Jurassic.",
                  "es": "Pterodactylus was a small pterosaur from the Late Jurassic.",
                  "de": "Pterodactylus was a small pterosaur from the Late Jurassic.",
                  "nl": "Pterodactylus was a small pterosaur from the Late Jurassic."
        }
      },
      {
        question: {
                  "en": "What is the function of Stegosaurus plates?",
                  "es": "What is the function of Stegosaurus plates?",
                  "de": "What is the function of Stegosaurus plates?",
                  "nl": "What is the function of Stegosaurus plates?"
        },
        options: [
        {
                  "en": "Defense only",
                  "es": "Defense only",
                  "de": "Defense only",
                  "nl": "Defense only"
        },
        {
                  "en": "Flying",
                  "es": "Flying",
                  "de": "Flying",
                  "nl": "Flying"
        },
        {
                  "en": "Temperature regulation and display",
                  "es": "Temperature regulation and display",
                  "de": "Temperature regulation and display",
                  "nl": "Temperature regulation and display"
        },
        {
                  "en": "Swimming",
                  "es": "Swimming",
                  "de": "Swimming",
                  "nl": "Swimming"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Stegosaurus plates likely helped with temperature regulation and visual display.",
                  "es": "Stegosaurus plates likely helped with temperature regulation and visual display.",
                  "de": "Stegosaurus plates likely helped with temperature regulation and visual display.",
                  "nl": "Stegosaurus plates likely helped with temperature regulation and visual display."
        }
      },
      {
        question: {
                  "en": "What is Ceratosaurus?",
                  "es": "What is Ceratosaurus?",
                  "de": "What is Ceratosaurus?",
                  "nl": "What is Ceratosaurus?"
        },
        options: [
        {
                  "en": "Long-necked dinosaur",
                  "es": "Long-necked dinosaur",
                  "de": "Long-necked dinosaur",
                  "nl": "Long-necked dinosaur"
        },
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        },
        {
                  "en": "Horned Jurassic predator",
                  "es": "Horned Jurassic predator",
                  "de": "Horned Jurassic predator",
                  "nl": "Horned Jurassic predator"
        },
        {
                  "en": "Horned herbivore",
                  "es": "Horned herbivore",
                  "de": "Horned herbivore",
                  "nl": "Horned herbivore"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
                  "es": "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
                  "de": "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
                  "nl": "Ceratosaurus was a Jurassic predator with a prominent horn on its nose."
        }
      },
      {
        question: {
                  "en": "What sea reptile dominated Jurassic oceans?",
                  "es": "What sea reptile dominated Jurassic oceans?",
                  "de": "What sea reptile dominated Jurassic oceans?",
                  "nl": "What sea reptile dominated Jurassic oceans?"
        },
        options: [
        {
                  "en": "Plesiosaurs and ichthyosaurs",
                  "es": "Plesiosaurs and ichthyosaurs",
                  "de": "Plesiosaurs and ichthyosaurs",
                  "nl": "Plesiosaurs and ichthyosaurs"
        },
        {
                  "en": "Sharks",
                  "es": "Sharks",
                  "de": "Sharks",
                  "nl": "Sharks"
        },
        {
                  "en": "Mosasaurs",
                  "es": "Mosasaurs",
                  "de": "Mosasaurs",
                  "nl": "Mosasaurs"
        },
        {
                  "en": "Dinosaurs",
                  "es": "Dinosaurs",
                  "de": "Dinosaurs",
                  "nl": "Dinosaurs"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
                  "es": "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
                  "de": "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
                  "nl": "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas."
        }
      },
      {
        question: {
                  "en": "What is Apatosaurus?",
                  "es": "What is Apatosaurus?",
                  "de": "What is Apatosaurus?",
                  "nl": "What is Apatosaurus?"
        },
        options: [
        {
                  "en": "Horned dinosaur",
                  "es": "Horned dinosaur",
                  "de": "Horned dinosaur",
                  "nl": "Horned dinosaur"
        },
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        },
        {
                  "en": "Small predator",
                  "es": "Small predator",
                  "de": "Small predator",
                  "nl": "Small predator"
        },
        {
                  "en": "Large Jurassic sauropod",
                  "es": "Large Jurassic sauropod",
                  "de": "Large Jurassic sauropod",
                  "nl": "Large Jurassic sauropod"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
                  "es": "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
                  "de": "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
                  "nl": "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long."
        }
      },
      {
        question: {
                  "en": "What plants dominated the Jurassic?",
                  "es": "What plants dominated the Jurassic?",
                  "de": "What plants dominated the Jurassic?",
                  "nl": "What plants dominated the Jurassic?"
        },
        options: [
        {
                  "en": "Conifers and ferns",
                  "es": "Conifers and ferns",
                  "de": "Conifers and ferns",
                  "nl": "Conifers and ferns"
        },
        {
                  "en": "Flowering plants",
                  "es": "Flowering plants",
                  "de": "Flowering plants",
                  "nl": "Flowering plants"
        },
        {
                  "en": "Grasses",
                  "es": "Grasses",
                  "de": "Grasses",
                  "nl": "Grasses"
        },
        {
                  "en": "Mosses only",
                  "es": "Mosses only",
                  "de": "Mosses only",
                  "nl": "Mosses only"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
                  "es": "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
                  "de": "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
                  "nl": "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
})();