// Jurassic Dinosaurs Quiz - Level 9: Scientific/Expert Knowledge
(function() {
  const level9 = {
    name: {
      en: "Jurassic Dinosaurs Level 9",
      es: "Dinosaurios Jurásicos Nivel 9",
      de: "Jura Dinosaurier Stufe 9",
      nl: "Jura Dino's Level 9"
    },
    questions: [
      {
        question: {
          en: "What does the presence of elongated cervical ribs in diplodocid sauropods indicate about their pneumatic system evolution?",
          es: "¿Qué indica la presencia de costillas cervicales alargadas en saurópodos diplodócidos sobre la evolución de su sistema neumático?",
          de: "Was zeigt das Vorhandensein verlängerter Halsrippen bei diplodociden Sauropoden über die Evolution ihres pneumatischen Systems?",
          nl: "Wat duidt de aanwezigheid van verlengde halswervels ribben bij diplodocide sauropoden aan over de evolutie van hun pneumatisch systeem?"
        },
        options: [
          {
            en: "Elongated cervical ribs provided attachment sites for air sac diverticula extending from the neck vertebrae, suggesting extensive postcranial pneumatization comparable to modern birds",
            es: "Las costillas cervicales alargadas proporcionaban sitios de unión para los divertículos de sacos aéreos que se extendían desde las vértebras del cuello, sugiriendo una neumatización postcraneal extensa comparable a las aves modernas",
            de: "Verlängerte Halsrippen boten Ansatzstellen für Luftsackdivertikel, die sich von den Halswirbeln erstreckten, was auf eine umfassende postkraniale Pneumatisierung hinweist, vergleichbar mit modernen Vögeln",
            nl: "Verlengde halsribben boden aanhechtingsplaatsen voor luchtzak divertikels die zich uitstrekten vanaf de nekwervels, wat wijst op uitgebreide postcraniële pneumatisatie vergelijkbaar met moderne vogels"
          },
          {
            en: "The ribs served purely mechanical support with no connection to respiratory anatomy",
            es: "Las costillas servían puramente como soporte mecánico sin conexión con la anatomía respiratoria",
            de: "Die Rippen dienten rein mechanischer Unterstützung ohne Verbindung zur Atmungsanatomie",
            nl: "De ribben dienden puur mechanische ondersteuning zonder verbinding met de ademhalingsanatomie"
          },
          {
            en: "Cervical ribs were sites of muscle attachment for neck movement only",
            es: "Las costillas cervicales eran sitios de unión muscular solo para el movimiento del cuello",
            de: "Halsrippen waren nur Muskelansatzstellen für Halsbewegungen",
            nl: "Halsribben waren aanhechtingsplaatsen voor spieren alleen voor nekbeweging"
          },
          {
            en: "The elongation resulted from ossification disorders with no functional significance",
            es: "El alargamiento resultó de trastornos de osificación sin significado funcional",
            de: "Die Verlängerung resultierte aus Ossifikationsstörungen ohne funktionelle Bedeutung",
            nl: "De verlenging resulteerde uit ossificatiestoornissen zonder functionele betekenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "The elongated cervical ribs in diplodocids provided attachment sites for extensive air sac diverticula, part of a sophisticated postcranial pneumatic system that reduced skeletal mass while maintaining structural integrity, similar to the avian respiratory system.",
          es: "Las costillas cervicales alargadas en diplodócidos proporcionaban sitios de unión para divertículos extensos de sacos aéreos, parte de un sofisticado sistema neumático postcraneal que reducía la masa esquelética mientras mantenía la integridad estructural, similar al sistema respiratorio aviar.",
          de: "Die verlängerten Halsrippen bei Diplodociden boten Ansatzstellen für umfangreiche Luftsackdivertikel, Teil eines ausgeklügelten postkranialen pneumatischen Systems, das die Skelettmasse reduzierte und gleichzeitig die strukturelle Integrität beibehielt, ähnlich dem aviären Atmungssystem.",
          nl: "De verlengde halsribben bij diplodociden boden aanhechtingsplaatsen voor uitgebreide luchtzak divertikels, onderdeel van een geavanceerd postcranieel pneumatisch systeem dat de skeletmassa verminderde terwijl de structurele integriteit behouden bleef, vergelijkbaar met het aviaire ademhalingssysteem."
        }
      },
      {
        question: {
          en: "How does confocal laser scanning microscopy of Jurassic theropod tooth serrations inform understanding of feeding ecology?",
          es: "¿Cómo informa la microscopía confocal de barrido láser de las serraciones dentales de terópodos del Jurásico sobre la comprensión de la ecología alimentaria?",
          de: "Wie informiert die konfokale Laserscanning-Mikroskopie von jurassischen Theropoden-Zahnserrationen über das Verständnis der Ernährungsökologie?",
          nl: "Hoe informeert confocale laser scanning microscopie van Jura theropode tand serretjes over begrip van voedingsecologie?"
        },
        options: [
          {
            en: "3D surface texture analysis reveals microwear patterns including scratches parallel to serrations in carnivores versus perpendicular patterns in herbivorous theropods, distinguishing dietary preferences",
            es: "El análisis de textura superficial 3D revela patrones de microdesgaste incluyendo arañazos paralelos a las serraciones en carnívoros versus patrones perpendiculares en terópodos herbívoros, distinguiendo preferencias dietéticas",
            de: "Die 3D-Oberflächentexturanalyse zeigt Mikroverschleißmuster einschließlich Kratzer parallel zu Serrationen bei Karnivoren versus senkrechte Muster bei herbivoren Theropoden, was Nahrungspräferenzen unterscheidet",
            nl: "3D oppervlaktetextuur analyse onthult microslijtagpatronen inclusief krassen parallel aan serretjes bij carnivoren versus loodrechte patronen bij herbivore theropoden, wat voedselvoorkeuren onderscheidt"
          },
          {
            en: "Serration analysis only confirms tooth presence with no dietary information",
            es: "El análisis de serraciones solo confirma la presencia de dientes sin información dietética",
            de: "Serrationsanalyse bestätigt nur Zahnvorhandensein ohne Ernährungsinformationen",
            nl: "Serretje analyse bevestigt alleen tand aanwezigheid zonder voedingsinformatie"
          },
          {
            en: "All theropod serrations show identical wear patterns regardless of diet",
            es: "Todas las serraciones de terópodos muestran patrones de desgaste idénticos independientemente de la dieta",
            de: "Alle Theropoden-Serrationen zeigen identische Verschleißmuster unabhängig von der Ernährung",
            nl: "Alle theropode serretjes tonen identieke slijtagpatronen ongeacht dieet"
          },
          {
            en: "Confocal microscopy cannot resolve serration structures at functional scales",
            es: "La microscopía confocal no puede resolver estructuras de serraciones a escalas funcionales",
            de: "Konfokale Mikroskopie kann Serrationsstrukturen nicht in funktionellen Maßstäben auflösen",
            nl: "Confocale microscopie kan serretje structuren niet oplossen op functionele schalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Confocal laser scanning microscopy reveals distinctive microwear patterns on tooth serrations: carnivorous theropods show scratches parallel to serrations from cutting flesh, while herbivorous theropods display perpendicular patterns from processing plant material, providing direct evidence of dietary ecology.",
          es: "La microscopía confocal de barrido láser revela patrones distintivos de microdesgaste en las serraciones dentales: los terópodos carnívoros muestran arañazos paralelos a las serraciones por cortar carne, mientras que los terópodos herbívoros muestran patrones perpendiculares por procesar material vegetal, proporcionando evidencia directa de la ecología dietética.",
          de: "Konfokale Laserscanning-Mikroskopie zeigt charakteristische Mikroverschleißmuster auf Zahnserrationen: Karnivore Theropoden zeigen Kratzer parallel zu Serrationen vom Fleischschneiden, während herbivore Theropoden senkrechte Muster vom Verarbeiten pflanzlichen Materials zeigen, was direkte Beweise für die Ernährungsökologie liefert.",
          nl: "Confocale laser scanning microscopie onthult onderscheidende microslijtagpatronen op tand serretjes: carnivore theropoden tonen krassen parallel aan serretjes van vlees snijden, terwijl herbivore theropoden loodrechte patronen tonen van plantaardig materiaal verwerken, wat direct bewijs levert voor voedingsecologie."
        }
      },
      {
        question: {
          en: "What does synchrotron radiation X-ray fluorescence (SR-XRF) mapping of Morrison Formation fossil bones reveal about diagenetic alteration?",
          es: "¿Qué revela el mapeo de fluorescencia de rayos X por radiación sincrotrón (SR-XRF) de huesos fósiles de la Formación Morrison sobre la alteración diagenética?",
          de: "Was zeigt die Synchrotron-Röntgenfluoreszenz-Kartierung (SR-XRF) von Morrison-Formation-Fossilknochen über diagenetische Veränderung?",
          nl: "Wat onthult synchrotron straling röntgenfluorescentie (SR-XRF) mapping van Morrison Formatie fossiele botten over diagenetische verandering?"
        },
        options: [
          {
            en: "Elemental mapping shows uranium and rare earth element concentrations following original bone microstructure including vascular canals and osteocyte lacunae, indicating early diagenetic mineral replacement preserved cellular-level detail",
            es: "El mapeo elemental muestra concentraciones de uranio y elementos de tierras raras siguiendo la microestructura ósea original incluyendo canales vasculares y lagunas de osteocitos, indicando que el reemplazo mineral diagenético temprano preservó detalles a nivel celular",
            de: "Elementkartierung zeigt Uran- und Seltenerdelement-Konzentrationen, die der ursprünglichen Knochenmikrostruktur folgen, einschließlich Gefäßkanälen und Osteozyten-Lakunen, was darauf hinweist, dass frühe diagenetische Mineralersetzung Details auf zellulärer Ebene bewahrte",
            nl: "Elementaire mapping toont uranium en zeldzame aarde element concentraties volgens de originele bot microstructuur inclusief vasculaire kanalen en osteocyt lacunae, wat aanduidt dat vroege diagenetische minerale vervanging cellulaire-niveau detail bewaarde"
          },
          {
            en: "SR-XRF shows uniform element distribution with no preservation of bone structure",
            es: "SR-XRF muestra distribución elemental uniforme sin preservación de estructura ósea",
            de: "SR-XRF zeigt gleichmäßige Elementverteilung ohne Erhaltung der Knochenstruktur",
            nl: "SR-XRF toont uniforme element distributie zonder behoud van bot structuur"
          },
          {
            en: "Diagenetic minerals completely obscure original bone composition in all cases",
            es: "Los minerales diagenéticos oscurecen completamente la composición ósea original en todos los casos",
            de: "Diagenetische Mineralien verdecken die ursprüngliche Knochenzusammensetzung in allen Fällen vollständig",
            nl: "Diagenetische mineralen verduisteren volledig originele bot samenstelling in alle gevallen"
          },
          {
            en: "SR-XRF cannot detect trace elements at concentrations relevant to fossil preservation",
            es: "SR-XRF no puede detectar elementos traza en concentraciones relevantes para la preservación fósil",
            de: "SR-XRF kann Spurenelemente in Konzentrationen, die für Fossilerhaltung relevant sind, nicht nachweisen",
            nl: "SR-XRF kan spoorenelementen niet detecteren bij concentraties relevant voor fossiele bewaring"
          }
        ],
        correct: 0,
        explanation: {
          en: "SR-XRF mapping of Morrison Formation bones reveals that diagenetic minerals like uranium and rare earth elements infiltrated bones early in fossilization, precisely following original microstructure including vascular canals and osteocyte lacunae, preserving exceptional cellular-level anatomical detail.",
          es: "El mapeo SR-XRF de huesos de la Formación Morrison revela que los minerales diagenéticos como el uranio y elementos de tierras raras infiltraron los huesos temprano en la fosilización, siguiendo precisamente la microestructura original incluyendo canales vasculares y lagunas de osteocitos, preservando detalles anatómicos excepcionales a nivel celular.",
          de: "SR-XRF-Kartierung von Morrison-Formation-Knochen zeigt, dass diagenetische Mineralien wie Uran und Seltenerdelemente früh in der Fossilisierung in Knochen eindrangen und dabei präzise der ursprünglichen Mikrostruktur folgten, einschließlich Gefäßkanälen und Osteozyten-Lakunen, wobei außergewöhnliche anatomische Details auf zellulärer Ebene erhalten blieben.",
          nl: "SR-XRF mapping van Morrison Formatie botten onthult dat diagenetische mineralen zoals uranium en zeldzame aarde elementen botten vroeg in fossilisatie infiltreerden, precies volgens originele microstructuur inclusief vasculaire kanalen en osteocyt lacunae, waarbij uitzonderlijk cellulaire-niveau anatomisch detail bewaard bleef."
        }
      },
      {
        question: {
          en: "How does phylogenetic bracketing using extant phylogenetic bracket (EPB) methodology inform reconstruction of Jurassic theropod metabolic rates?",
          es: "¿Cómo informa el bracketing filogenético utilizando la metodología de bracketing filogenético extante (EPB) la reconstrucción de las tasas metabólicas de terópodos del Jurásico?",
          de: "Wie informiert phylogenetisches Bracketing unter Verwendung der extanten phylogenetischen Bracket (EPB)-Methodik die Rekonstruktion jurassischer Theropoden-Stoffwechselraten?",
          nl: "Hoe informeert fylogenetische bracketing met extante fylogenetische bracket (EPB) methodologie reconstructie van Jura theropode metabolische snelheden?"
        },
        options: [
          {
            en: "Since crocodilians (ectothermic) and birds (endothermic) bracket theropods phylogenetically, EPB Level II inference suggests theropods possessed intermediate metabolic rates, confirmed by bone histology showing elevated but not avian-level growth rates",
            es: "Dado que los cocodrilos (ectotérmicos) y las aves (endotérmicas) delimitan filogenéticamente a los terópodos, la inferencia EPB Nivel II sugiere que los terópodos poseían tasas metabólicas intermedias, confirmadas por histología ósea que muestra tasas de crecimiento elevadas pero no a nivel aviar",
            de: "Da Krokodile (ektotherm) und Vögel (endotherm) Theropoden phylogenetisch einrahmen, deutet EPB-Level-II-Inferenz darauf hin, dass Theropoden intermediäre Stoffwechselraten besaßen, bestätigt durch Knochenhistologie, die erhöhte, aber nicht aviane Wachstumsraten zeigt",
            nl: "Omdat krokodillen (ectotherm) en vogels (endotherm) theropoden fylogenetisch omsluiten, suggereert EPB Level II inferentie dat theropoden intermediaire metabolische snelheden bezaten, bevestigd door bot histologie die verhoogde maar niet aviaire groeisnel"
          },
          {
            en: "EPB methodology requires three extant groups and cannot be applied to theropods",
            es: "La metodología EPB requiere tres grupos extantes y no puede aplicarse a terópodos",
            de: "EPB-Methodik erfordert drei existierende Gruppen und kann nicht auf Theropoden angewendet werden",
            nl: "EPB methodologie vereist drie extante groepen en kan niet worden toegepast op theropoden"
          },
          {
            en: "Phylogenetic bracketing indicates theropods were strictly ectothermic like all reptiles",
            es: "El bracketing filogenético indica que los terópodos eran estrictamente ectotérmicos como todos los reptiles",
            de: "Phylogenetisches Bracketing zeigt, dass Theropoden strikt ektotherm wie alle Reptilien waren",
            nl: "Fylogenetische bracketing duidt aan dat theropoden strikt ectotherm waren zoals alle reptielen"
          },
          {
            en: "Metabolic rates cannot be inferred from phylogenetic relationships",
            es: "Las tasas metabólicas no pueden inferirse de relaciones filogenéticas",
            de: "Stoffwechselraten können nicht aus phylogenetischen Beziehungen abgeleitet werden",
            nl: "Metabolische snelheden kunnen niet worden afgeleid van fylogenetische relaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Extant Phylogenetic Bracket (EPB) methodology uses the metabolic characteristics of crocodilians and birds, which phylogenetically bracket theropods, to infer that Jurassic theropods likely possessed intermediate metabolic rates. This inference is supported by bone histology showing rapid but not fully avian growth rates, suggesting elevated mesothermic physiology.",
          es: "La metodología de Bracketing Filogenético Extante (EPB) utiliza las características metabólicas de cocodrilos y aves, que delimitan filogenéticamente a los terópodos, para inferir que los terópodos del Jurásico probablemente poseían tasas metabólicas intermedias. Esta inferencia está respaldada por histología ósea que muestra tasas de crecimiento rápidas pero no completamente aviares, sugiriendo fisiología mesotérmica elevada.",
          de: "Die Extante Phylogenetische Bracket (EPB)-Methodik verwendet die Stoffwechselmerkmale von Krokodilen und Vögeln, die Theropoden phylogenetisch einrahmen, um zu folgern, dass jurassische Theropoden wahrscheinlich intermediäre Stoffwechselraten besaßen. Diese Schlussfolgerung wird durch Knochenhistologie unterstützt, die schnelle, aber nicht vollständig aviane Wachstumsraten zeigt, was auf erhöhte mesothermische Physiologie hindeutet.",
          nl: "Extante Fylogenetische Bracket (EPB) methodologie gebruikt de metabolische kenmerken van krokodillen en vogels, die theropoden fylogenetisch omsluiten, om af te leiden dat Jura theropoden waarschijnlijk intermediaire metabolische snelheden bezaten. Deze gevolgtrekking wordt ondersteund door bot histologie die snelle maar niet volledig aviaire groeisnelheden toont, wat verhoogde mesothermische fysiologie suggereert."
        }
      },
      {
        question: {
          en: "What does the Morrison Formation's taphonomic megabias toward sauropod preservation reveal about Jurassic depositional environments?",
          es: "¿Qué revela el megasesgo tafonómico de la Formación Morrison hacia la preservación de saurópodos sobre los ambientes deposicionales del Jurásico?",
          de: "Was zeigt die taphonomische Mega-Verzerrung der Morrison-Formation zur Sauropoden-Erhaltung über jurassische Ablagerungsumgebungen?",
          nl: "Wat onthult de Morrison Formatie's tafonomische megabias naar sauropode bewaring over Jura afzettingsomgevingen?"
        },
        options: [
          {
            en: "Sauropod overrepresentation indicates floodplain and channel environments where large-bodied animals died in water bodies during seasonal droughts, leading to rapid burial and exceptional preservation compared to upland-dwelling taxa",
            es: "La sobrerrepresentación de saurópodos indica ambientes de llanura de inundación y canales donde animales de gran cuerpo murieron en cuerpos de agua durante sequías estacionales, llevando a entierro rápido y preservación excepcional comparado con taxones de tierras altas",
            de: "Sauropoden-Überrepräsentation zeigt Überschwemmungsebenen- und Kanalumgebungen, wo große Tiere während saisonaler Dürren in Gewässern starben, was zu schneller Bestattung und außergewöhnlicher Erhaltung im Vergleich zu Hochland-bewohnenden Taxa führte",
            nl: "Sauropode oververtegenwoordiging duidt op overstromingsvlakte en kanaal omgevingen waar groot-lijvige dieren stierven in waterlichamen tijdens seizoensgebonden droogtes, leidend tot snelle begraving en uitzonderlijke bewaring vergeleken met hoogland-bewonende taxa"
          },
          {
            en: "Sauropods were simply the most common dinosaurs in all Jurassic ecosystems",
            es: "Los saurópodos eran simplemente los dinosaurios más comunes en todos los ecosistemas del Jurásico",
            de: "Sauropoden waren einfach die häufigsten Dinosaurier in allen jurassischen Ökosystemen",
            nl: "Sauropoden waren gewoon de meest voorkomende dinosauriërs in alle Jura ecosystemen"
          },
          {
            en: "Taphonomic bias has no relationship to depositional environment characteristics",
            es: "El sesgo tafonómico no tiene relación con las características del ambiente deposicional",
            de: "Taphonomische Verzerrung hat keine Beziehung zu Merkmalen der Ablagerungsumgebung",
            nl: "Tafonomische bias heeft geen relatie met afzettingsomgeving kenmerken"
          },
          {
            en: "Small theropods were preferentially destroyed by carnivores, not environmental factors",
            es: "Los pequeños terópodos fueron destruidos preferentemente por carnívoros, no por factores ambientales",
            de: "Kleine Theropoden wurden bevorzugt von Karnivoren zerstört, nicht durch Umweltfaktoren",
            nl: "Kleine theropoden werden bij voorkeur vernietigd door carnivoren, niet door omgevingsfactoren"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Morrison Formation shows strong taphonomic bias toward sauropod preservation because these large animals frequented floodplain water sources during seasonal droughts. When they died in or near channels, rapid burial occurred, while smaller upland-dwelling dinosaurs had lower preservation potential, creating a megabias in the fossil record.",
          es: "La Formación Morrison muestra un fuerte sesgo tafonómico hacia la preservación de saurópodos porque estos grandes animales frecuentaban fuentes de agua de llanuras de inundación durante sequías estacionales. Cuando morían en o cerca de canales, ocurría entierro rápido, mientras que dinosaurios más pequeños de tierras altas tenían menor potencial de preservación, creando un megasesgo en el registro fósil.",
          de: "Die Morrison-Formation zeigt eine starke taphonomische Verzerrung zur Sauropoden-Erhaltung, da diese großen Tiere während saisonaler Dürren Überschwemmungsebenen-Wasserquellen aufsuchten. Als sie in oder in der Nähe von Kanälen starben, erfolgte eine schnelle Bestattung, während kleinere Hochland-bewohnende Dinosaurier ein geringeres Erhaltungspotenzial hatten, was eine Mega-Verzerrung im Fossilbericht erzeugte.",
          nl: "De Morrison Formatie toont sterke tafonomische bias naar sauropode bewaring omdat deze grote dieren overstromingsvlakte waterbronnen bezochten tijdens seizoensgebonden droogtes. Toen ze stierven in of nabij kanalen, vond snelle begraving plaats, terwijl kleinere hoogland-bewonende dinosauriërs lagere bewarings potentieel hadden, wat een megabias creëerde in het fossiele archief."
        }
      },
      {
        question: {
          en: "How does geometric morphometric analysis of Allosaurus skull shape variation inform understanding of ontogenetic versus individual variation?",
          es: "¿Cómo informa el análisis morfométrico geométrico de la variación de forma del cráneo de Allosaurus sobre la comprensión de la variación ontogenética versus individual?",
          de: "Wie informiert die geometrisch-morphometrische Analyse der Allosaurus-Schädel-Formvariation über das Verständnis ontogenetischer versus individueller Variation?",
          nl: "Hoe informeert geometrische morfometrische analyse van Allosaurus schedel vorm variatie begrip van ontogenetische versus individuele variatie?"
        },
        options: [
          {
            en: "Principal component analysis of 3D landmark coordinates shows juveniles cluster separately from adults along PC1 (snout length ratio), while PC2 captures individual variation orthogonal to ontogeny, revealing distinct developmental and individual shape axes",
            es: "El análisis de componentes principales de coordenadas de puntos de referencia 3D muestra que los juveniles se agrupan separadamente de los adultos a lo largo de PC1 (relación de longitud del hocico), mientras que PC2 captura la variación individual ortogonal a la ontogenia, revelando ejes de forma de desarrollo e individuales distintos",
            de: "Hauptkomponentenanalyse von 3D-Landmarken-Koordinaten zeigt, dass Juvenile sich entlang PC1 (Schnauzen-Längenverhältnis) getrennt von Erwachsenen gruppieren, während PC2 individuelle Variation orthogonal zur Ontogenie erfasst, was unterschiedliche Entwicklungs- und individuelle Formachsen zeigt",
            nl: "Principale componenten analyse van 3D landmark coördinaten toont jongen clusteren apart van volwassenen langs PC1 (snuit lengte verhouding), terwijl PC2 individuele variatie orthogonaal aan ontogenie vastlegt, wat onderscheidende ontwikkelings- en individuele vorm assen onthult"
          },
          {
            en: "Geometric morphometrics cannot distinguish ontogenetic from individual variation",
            es: "La morfometría geométrica no puede distinguir la variación ontogenética de la individual",
            de: "Geometrische Morphometrie kann ontogenetische von individueller Variation nicht unterscheiden",
            nl: "Geometrische morfometrie kan ontogenetische van individuele variatie niet onderscheiden"
          },
          {
            en: "All Allosaurus skull variation results from sexual dimorphism, not ontogeny",
            es: "Toda la variación del cráneo de Allosaurus resulta del dimorfismo sexual, no de la ontogenia",
            de: "Alle Allosaurus-Schädelvariation resultiert aus sexuellem Dimorphismus, nicht aus Ontogenie",
            nl: "Alle Allosaurus schedel variatie resulteert uit seksueel dimorfisme, niet uit ontogenie"
          },
          {
            en: "Skull shape remains constant throughout Allosaurus life history",
            es: "La forma del cráneo permanece constante a lo largo de la historia de vida de Allosaurus",
            de: "Schädelform bleibt während der gesamten Allosaurus-Lebensgeschichte konstant",
            nl: "Schedelvorm blijft constant gedurende Allosaurus levensgeschiedenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "Geometric morphometric analysis using 3D landmark coordinates and principal component analysis reveals that Allosaurus juveniles and adults separate along PC1 (primarily snout elongation), representing ontogenetic change, while PC2 captures individual variation independent of age, demonstrating that both developmental and individual shape variation can be quantitatively distinguished.",
          es: "El análisis morfométrico geométrico utilizando coordenadas de puntos de referencia 3D y análisis de componentes principales revela que juveniles y adultos de Allosaurus se separan a lo largo de PC1 (principalmente elongación del hocico), representando cambio ontogenético, mientras que PC2 captura variación individual independiente de la edad, demostrando que tanto la variación de forma de desarrollo como individual puede ser distinguida cuantitativamente.",
          de: "Geometrisch-morphometrische Analyse unter Verwendung von 3D-Landmarken-Koordinaten und Hauptkomponentenanalyse zeigt, dass Allosaurus-Juvenile und Erwachsene sich entlang PC1 (hauptsächlich Schnauzen-Elongation) trennen, was ontogenetische Veränderung darstellt, während PC2 individuelle Variation unabhängig vom Alter erfasst, was zeigt, dass sowohl Entwicklungs- als auch individuelle Formvariation quantitativ unterschieden werden können.",
          nl: "Geometrische morfometrische analyse met 3D landmark coördinaten en principale componenten analyse onthult dat Allosaurus jongen en volwassenen scheiden langs PC1 (voornamelijk snuit verlenging), wat ontogenetische verandering vertegenwoordigt, terwijl PC2 individuele variatie onafhankelijk van leeftijd vastlegt, wat aantoont dat zowel ontwikkelings- als individuele vormvariatie kwantitatief kan worden onderscheiden."
        }
      },
      {
        question: {
          en: "What does the presence of cyclical growth marks (LAGs) in Jurassic sauropod bone histology indicate about their developmental biology?",
          es: "¿Qué indica la presencia de marcas de crecimiento cíclicas (LAGs) en la histología ósea de saurópodos del Jurásico sobre su biología del desarrollo?",
          de: "Was zeigt das Vorhandensein zyklischer Wachstumsmarken (LAGs) in der jurassischen Sauropoden-Knochenhistologie über ihre Entwicklungsbiologie?",
          nl: "Wat duidt de aanwezigheid van cyclische groeilijnen (LAGs) in Jura sauropode bot histologie aan over hun ontwikkelingsbiologie?"
        },
        options: [
          {
            en: "Closely spaced LAGs in early ontogeny followed by widely spaced LAGs and eventual external fundamental system (EFS) indicate rapid juvenile growth transitioning to slower adult growth, with sexual maturity reached before skeletal maturity at 15-20 years",
            es: "LAGs estrechamente espaciadas en ontogenia temprana seguidas de LAGs ampliamente espaciadas y eventual sistema fundamental externo (EFS) indican crecimiento juvenil rápido que transiciona a crecimiento adulto más lento, con madurez sexual alcanzada antes de la madurez esquelética a los 15-20 años",
            de: "Eng beabstandete LAGs in früher Ontogenie, gefolgt von weit beabstandeten LAGs und eventuellem externem Fundamentalsystem (EFS), zeigen schnelles juveniles Wachstum mit Übergang zu langsamerem Erwachsenenwachstum, wobei sexuelle Reife vor Skelettreife mit 15-20 Jahren erreicht wird",
            nl: "Dicht op elkaar geplaatste LAGs in vroege ontogenie gevolgd door wijd uit elkaar geplaatste LAGs en eventueel extern fundamenteel systeem (EFS) duiden op snelle jeugdige groei overgaand naar langzamere volwassen groei, met seksuele rijpheid bereikt voor skeletale rijpheid op 15-20 jaar"
          },
          {
            en: "LAGs represent daily growth increments like tree rings counting exact days lived",
            es: "Las LAGs representan incrementos de crecimiento diarios como anillos de árboles contando días exactos vividos",
            de: "LAGs stellen tägliche Wachstumsinkremente dar wie Baumringe, die exakte gelebte Tage zählen",
            nl: "LAGs vertegenwoordigen dagelijkse groeistappen zoals boomringen die exacte geleefde dagen tellen"
          },
          {
            en: "Sauropod bones show no cyclical growth patterns, only continuous deposition",
            es: "Los huesos de saurópodos no muestran patrones de crecimiento cíclicos, solo deposición continua",
            de: "Sauropoden-Knochen zeigen keine zyklischen Wachstumsmuster, nur kontinuierliche Ablagerung",
            nl: "Sauropode botten tonen geen cyclische groeipatronen, alleen continue depositie"
          },
          {
            en: "LAG spacing remains constant throughout life indicating uniform growth rates",
            es: "El espaciado de LAG permanece constante durante toda la vida indicando tasas de crecimiento uniformes",
            de: "LAG-Abstand bleibt während des gesamten Lebens konstant, was einheitliche Wachstumsraten anzeigt",
            nl: "LAG afstand blijft constant gedurende het leven wat uniforme groeisnelheden aanduidt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Lines of Arrested Growth (LAGs) in sauropod bones record annual growth cessation. Early LAGs are closely spaced during rapid juvenile growth, then become widely spaced, and eventually form an External Fundamental System (EFS) marking skeletal maturity. This pattern shows sauropods reached sexual maturity at 15-20 years before skeletal maturity, similar to modern large mammals.",
          es: "Las Líneas de Crecimiento Detenido (LAGs) en huesos de saurópodos registran la cesación del crecimiento anual. Las LAGs tempranas están estrechamente espaciadas durante el crecimiento juvenil rápido, luego se espacian ampliamente, y eventualmente forman un Sistema Fundamental Externo (EFS) que marca la madurez esquelética. Este patrón muestra que los saurópodos alcanzaron la madurez sexual a los 15-20 años antes de la madurez esquelética, similar a los mamíferos grandes modernos.",
          de: "Linien Arrested Growth (LAGs) in Sauropoden-Knochen zeichnen jährliche Wachstumsstillstände auf. Frühe LAGs sind während des schnellen juvenilen Wachstums eng beabstandet, werden dann weit beabstandet und bilden schließlich ein Externes Fundamentalsystem (EFS), das Skelettreife markiert. Dieses Muster zeigt, dass Sauropoden sexuelle Reife mit 15-20 Jahren vor Skelettreife erreichten, ähnlich wie moderne Großsäugetiere.",
          nl: "Lines of Arrested Growth (LAGs) in sauropode botten registreren jaarlijkse groeistilstand. Vroege LAGs zijn dicht op elkaar tijdens snelle jeugdige groei, worden dan wijd uit elkaar geplaatst, en vormen uiteindelijk een Extern Fundamenteel Systeem (EFS) dat skeletale rijpheid markeert. Dit patroon toont dat sauropoden seksuele rijpheid bereikten op 15-20 jaar voor skeletale rijpheid, vergelijkbaar met moderne grote zoogdieren."
        }
      },
      {
        question: {
          en: "How does sedimentary facies analysis of Jurassic dinosaur-bearing strata inform understanding of paleoenvironmental context?",
          es: "¿Cómo informa el análisis de facies sedimentarias de estratos del Jurásico portadores de dinosaurios sobre la comprensión del contexto paleoambiental?",
          de: "Wie informiert die sedimentäre Faziesanalyse jurassischer dinosaurierführender Schichten über das Verständnis des paläoumweltlichen Kontextes?",
          nl: "Hoe informeert sedimentaire facies analyse van Jura dinosauriër-dragende lagen begrip van paleomilieu context?"
        },
        options: [
          {
            en: "Facies assemblages including cross-bedded sandstones (channels), mudstones with desiccation cracks (floodplains), and caliche nodules (paleosols) indicate semi-arid seasonal environments with meandering river systems and distinct wet-dry cycles",
            es: "Los ensamblajes de facies que incluyen areniscas con estratificación cruzada (canales), lutitas con grietas de desecación (llanuras de inundación) y nódulos de caliche (paleosuelos) indican ambientes estacionales semiáridos con sistemas fluviales meandriformes y ciclos húmedo-secos distintos",
            de: "Fazies-Vergesellschaftungen einschließlich kreuzgeschichteter Sandsteine (Kanäle), Tonsteine mit Trocknungsrissen (Überschwemmungsebenen) und Caliche-Knötchen (Paläoböden) zeigen semi-aride saisonale Umgebungen mit mäandrierenden Flusssystemen und deutlichen Nass-Trocken-Zyklen",
            nl: "Facies assemblages inclusief kruisgelaagde zandstenen (kanalen), modderstenen met uitdrogingsscheuren (overstromingsvlaktes) en caliche knobbels (paleosols) duiden op semi-aride seizoensgebonden omgevingen met meanderende riviersystemen en onderscheidende nat-droog cycli"
          },
          {
            en: "Sedimentary facies provide no information about paleoenvironmental conditions",
            es: "Las facies sedimentarias no proporcionan información sobre condiciones paleoambientales",
            de: "Sedimentäre Fazies liefern keine Informationen über paläoumweltliche Bedingungen",
            nl: "Sedimentaire facies bieden geen informatie over paleomilieu omstandigheden"
          },
          {
            en: "All Jurassic dinosaur sites show identical marine depositional environments",
            es: "Todos los sitios de dinosaurios del Jurásico muestran ambientes deposicionales marinos idénticos",
            de: "Alle jurassischen Dinosaurierstätten zeigen identische marine Ablagerungsumgebungen",
            nl: "Alle Jura dinosauriër locaties tonen identieke mariene afzettingsomgevingen"
          },
          {
            en: "Facies analysis only determines absolute age, not environmental context",
            es: "El análisis de facies solo determina la edad absoluta, no el contexto ambiental",
            de: "Faziesanalyse bestimmt nur absolutes Alter, nicht Umweltkontext",
            nl: "Facies analyse bepaalt alleen absolute leeftijd, niet omgevingscontext"
          }
        ],
        correct: 0,
        explanation: {
          en: "Sedimentary facies analysis examines rock types and structures to reconstruct depositional environments. Jurassic dinosaur sites typically show cross-bedded sandstones (river channels), mudstones with desiccation cracks (floodplains), and caliche nodules (paleosols), indicating semi-arid seasonal environments with meandering rivers and distinct wet-dry cycles, providing crucial paleoenvironmental context.",
          es: "El análisis de facies sedimentarias examina tipos de rocas y estructuras para reconstruir ambientes deposicionales. Los sitios de dinosaurios del Jurásico típicamente muestran areniscas con estratificación cruzada (canales fluviales), lutitas con grietas de desecación (llanuras de inundación) y nódulos de caliche (paleosuelos), indicando ambientes estacionales semiáridos con ríos meandriformes y ciclos húmedo-secos distintos, proporcionando contexto paleoambiental crucial.",
          de: "Sedimentäre Faziesanalyse untersucht Gesteinstypen und Strukturen zur Rekonstruktion von Ablagerungsumgebungen. Jurassische Dinosaurierstätten zeigen typischerweise kreuzgeschichtete Sandsteine (Flusskanäle), Tonsteine mit Trocknungsrissen (Überschwemmungsebenen) und Caliche-Knötchen (Paläoböden), was auf semi-aride saisonale Umgebungen mit mäandrierenden Flüssen und deutlichen Nass-Trocken-Zyklen hinweist und entscheidenden paläoumweltlichen Kontext liefert.",
          nl: "Sedimentaire facies analyse onderzoekt gesteente types en structuren om afzettingsomgevingen te reconstrueren. Jura dinosauriër locaties tonen typisch kruisgelaagde zandstenen (rivier kanalen), modderstenen met uitdrogingsscheuren (overstromingsvlaktes) en caliche knobbels (paleosols), wat semi-aride seizoensgebonden omgevingen aanduidt met meanderende rivieren en onderscheidende nat-droog cycli, wat cruciale paleomilieu context biedt."
        }
      },
      {
        question: {
          en: "What does cladistic analysis of Jurassic theropod phylogeny reveal about the origin of avian characteristics?",
          es: "¿Qué revela el análisis cladístico de la filogenia de terópodos del Jurásico sobre el origen de las características aviares?",
          de: "Was zeigt die kladistische Analyse der jurassischen Theropoden-Phylogenie über den Ursprung aviärer Merkmale?",
          nl: "Wat onthult cladistische analyse van Jura theropode fylogenie over de oorsprong van aviaire kenmerken?"
        },
        options: [
          {
            en: "Phylogenetic analysis shows avian features like feathers, wishbone, and three-fingered hands evolved incrementally across multiple theropod lineages before flight, with Archaeopteryx nested within Maniraptora showing mosaic character distribution",
            es: "El análisis filogenético muestra que las características aviares como plumas, fúrcula y manos de tres dedos evolucionaron incrementalmente a través de múltiples linajes de terópodos antes del vuelo, con Archaeopteryx anidado dentro de Maniraptora mostrando distribución de caracteres en mosaico",
            de: "Phylogenetische Analyse zeigt, dass aviane Merkmale wie Federn, Gabelbein und dreifingrige Hände inkrementell über mehrere Theropoden-Linien vor dem Flug evolvierten, wobei Archaeopteryx innerhalb von Maniraptora eingebettet ist und eine Mosaik-Charakter-Verteilung zeigt",
            nl: "Fylogenetische analyse toont dat aviaire kenmerken zoals veren, vorkbeen en drie-vingrige handen incrementeel evolueerden over meerdere theropode lijnen voor vlucht, met Archaeopteryx genesteld binnen Maniraptora die mozaïek karakter distributie toont"
          },
          {
            en: "All avian features appeared simultaneously in Archaeopteryx with no earlier theropod precursors",
            es: "Todas las características aviares aparecieron simultáneamente en Archaeopteryx sin precursores terópodos anteriores",
            de: "Alle avianen Merkmale erschienen gleichzeitig in Archaeopteryx ohne frühere Theropoden-Vorläufer",
            nl: "Alle aviaire kenmerken verschenen gelijktijdig in Archaeopteryx zonder eerdere theropode voorlopers"
          },
          {
            en: "Cladistic analysis shows birds evolved from ornithischians, not theropods",
            es: "El análisis cladístico muestra que las aves evolucionaron de ornitisquios, no de terópodos",
            de: "Kladistische Analyse zeigt, dass Vögel von Ornithischiern evolvierten, nicht von Theropoden",
            nl: "Cladistische analyse toont dat vogels evolueerden van ornithischiërs, niet van theropoden"
          },
          {
            en: "Phylogenetic analysis is incapable of resolving theropod-bird relationships",
            es: "El análisis filogenético es incapaz de resolver relaciones terópodo-ave",
            de: "Phylogenetische Analyse ist unfähig, Theropoden-Vogel-Beziehungen aufzulösen",
            nl: "Fylogenetische analyse is niet in staat om theropode-vogel relaties op te lossen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cladistic analysis of theropod phylogeny demonstrates that avian characteristics evolved incrementally across multiple theropod lineages long before powered flight. Features like feathers, furcula (wishbone), and three-fingered hands appeared in various non-avian theropods, with Archaeopteryx showing a mosaic combination of these features, nested within the maniraptoran clade.",
          es: "El análisis cladístico de la filogenia de terópodos demuestra que las características aviares evolucionaron incrementalmente a través de múltiples linajes de terópodos mucho antes del vuelo motorizado. Características como plumas, fúrcula (espoleta) y manos de tres dedos aparecieron en varios terópodos no aviares, con Archaeopteryx mostrando una combinación en mosaico de estas características, anidado dentro del clado maniraptora.",
          de: "Kladistische Analyse der Theropoden-Phylogenie zeigt, dass aviane Merkmale inkrementell über mehrere Theropoden-Linien lange vor dem motorisierten Flug evolvierten. Merkmale wie Federn, Furcula (Gabelbein) und dreifingrige Hände erschienen bei verschiedenen nicht-avianen Theropoden, wobei Archaeopteryx eine Mosaik-Kombination dieser Merkmale zeigt, eingebettet in die Maniraptora-Klade.",
          nl: "Cladistische analyse van theropode fylogenie toont aan dat aviaire kenmerken incrementeel evolueerden over meerdere theropode lijnen lang voor aangedreven vlucht. Kenmerken zoals veren, furcula (vorkbeen) en drie-vingrige handen verschenen in verschillende niet-aviaire theropoden, met Archaeopteryx die een mozaïek combinatie van deze kenmerken toont, genesteld binnen de maniraptorische clade."
        }
      },
      {
        question: {
          en: "How does taphonomic analysis of Jurassic sauropod bonebeds distinguish between mass death assemblages and attritional accumulations?",
          es: "¿Cómo distingue el análisis tafonómico de lechos óseos de saurópodos del Jurásico entre ensamblajes de muerte masiva y acumulaciones atricionales?",
          de: "Wie unterscheidet die taphonomische Analyse jurassischer Sauropoden-Knochenlager zwischen Massensterbe-Vergesellschaftungen und Abnutzungs-Ansammlungen?",
          nl: "Hoe onderscheidt tafonomische analyse van Jura sauropode bottenbedden tussen massa-sterfte assemblages en attritie accumulaties?"
        },
        options: [
          {
            en: "Mass death assemblages show monospecific deposits with catastrophic age profiles including juveniles, minimal weathering, and consistent bone orientation, while attritional sites show mixed species, attritional age profiles favoring adults, extensive weathering stages, and random bone orientation",
            es: "Los ensamblajes de muerte masiva muestran depósitos monoespecíficos con perfiles de edad catastróficos incluyendo juveniles, meteorización mínima y orientación ósea consistente, mientras que los sitios atricionales muestran especies mixtas, perfiles de edad atricionales favoreciendo adultos, etapas de meteorización extensas y orientación ósea aleatoria",
            de: "Massensterbe-Vergesellschaftungen zeigen monospezifische Ablagerungen mit katastrophalen Altersprofilen einschließlich Juveniler, minimaler Verwitterung und konsistenter Knochenorientierung, während Abnutzungsstätten gemischte Arten, Abnutzungs-Altersprofile mit Bevorzugung von Erwachsenen, extensive Verwitterungsstadien und zufällige Knochenorientierung zeigen",
            nl: "Massa-sterfte assemblages tonen monospecifieke afzettingen met catastrofale leeftijdsprofielen inclusief juvenielen, minimale verwering en consistente bot oriëntatie, terwijl attritie locaties gemengde soorten tonen, attritie leeftijdsprofielen die volwassenen bevoordelen, uitgebreide verwerings stadia en willekeurige bot oriëntatie"
          },
          {
            en: "All bonebeds result from mass death events with no attritional accumulations possible",
            es: "Todos los lechos óseos resultan de eventos de muerte masiva sin acumulaciones atricionales posibles",
            de: "Alle Knochenlager resultieren aus Massensterbe-Ereignissen ohne mögliche Abnutzungs-Ansammlungen",
            nl: "Alle bottenbedden resulteren uit massa-sterfte gebeurtenissen zonder mogelijke attritie accumulaties"
          },
          {
            en: "Taphonomic analysis cannot distinguish between different accumulation modes",
            es: "El análisis tafonómico no puede distinguir entre diferentes modos de acumulación",
            de: "Taphonomische Analyse kann nicht zwischen verschiedenen Ansammlungsmodi unterscheiden",
            nl: "Tafonomische analyse kan niet onderscheiden tussen verschillende accumulatie modi"
          },
          {
            en: "Bone weathering stages are identical in all depositional contexts",
            es: "Las etapas de meteorización ósea son idénticas en todos los contextos deposicionales",
            de: "Knochenverwitterungsstadien sind in allen Ablagerungskontexten identisch",
            nl: "Bot verwerings stadia zijn identiek in alle afzettingscontexten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Taphonomic analysis distinguishes mass death assemblages (monospecific, catastrophic age profiles with juveniles, minimal weathering, aligned bone orientation from single depositional event) from attritional accumulations (mixed species, attritional age profiles favoring adults, extensive weathering variation from time-averaged accumulation, random bone orientation from multiple events).",
          es: "El análisis tafonómico distingue ensamblajes de muerte masiva (monoespecíficos, perfiles de edad catastróficos con juveniles, meteorización mínima, orientación ósea alineada de un solo evento deposicional) de acumulaciones atricionales (especies mixtas, perfiles de edad atricionales favoreciendo adultos, variación de meteorización extensa de acumulación promediada en el tiempo, orientación ósea aleatoria de múltiples eventos).",
          de: "Taphonomische Analyse unterscheidet Massensterbe-Vergesellschaftungen (monospezifisch, katastrophale Altersprofile mit Juvenilen, minimale Verwitterung, ausgerichtete Knochenorientierung von einem einzigen Ablagerungsereignis) von Abnutzungs-Ansammlungen (gemischte Arten, Abnutzungs-Altersprofile mit Bevorzugung von Erwachsenen, extensive Verwitterungsvariation von zeitgemittelter Ansammlung, zufällige Knochenorientierung von mehreren Ereignissen).",
          nl: "Tafonomische analyse onderscheidt massa-sterfte assemblages (monospecifiek, catastrofale leeftijdsprofielen met juvenielen, minimale verwering, uitgelijnde bot oriëntatie van enkele afzettingsgebeurtenis) van attritie accumulaties (gemengde soorten, attritie leeftijdsprofielen die volwassenen bevoordelen, uitgebreide verwerings variatie van tijd-gemiddelde accumulatie, willekeurige bot oriëntatie van meerdere gebeurtenissen)."
        }
      },
      {
        question: {
          en: "What does carbon isotope analysis of Morrison Formation paleosol carbonates reveal about Late Jurassic atmospheric CO2 levels?",
          es: "¿Qué revela el análisis de isótopos de carbono de carbonatos de paleosuelos de la Formación Morrison sobre los niveles de CO2 atmosférico del Jurásico tardío?",
          de: "Was zeigt die Kohlenstoffisotopenanalyse von Morrison-Formation-Paläoboden-Karbonaten über späte jurassische atmosphärische CO2-Werte?",
          nl: "Wat onthult koolstof isotoop analyse van Morrison Formatie paleosol carbonaten over laat Jura atmosferische CO2 niveaus?"
        },
        options: [
          {
            en: "δ13C values of pedogenic carbonates, combined with δ13C of coexisting organic matter, indicate atmospheric CO2 concentrations of 1000-2000 ppm, approximately 3-5 times modern preindustrial levels, consistent with greenhouse conditions",
            es: "Los valores δ13C de carbonatos pedogénicos, combinados con δ13C de materia orgánica coexistente, indican concentraciones de CO2 atmosférico de 1000-2000 ppm, aproximadamente 3-5 veces los niveles preindustriales modernos, consistentes con condiciones de invernadero",
            de: "δ13C-Werte pedogener Karbonate, kombiniert mit δ13C koexistierender organischer Substanz, zeigen atmosphärische CO2-Konzentrationen von 1000-2000 ppm, etwa 3-5-mal moderne vorindustrielle Werte, konsistent mit Treibhausbedingungen",
            nl: "δ13C waarden van pedogene carbonaten, gecombineerd met δ13C van co-existerende organische materie, duiden op atmosferische CO2 concentraties van 1000-2000 ppm, ongeveer 3-5 keer moderne pre-industriële niveaus, consistent met broeikasomstandigheden"
          },
          {
            en: "Paleosol carbonates provide no information about atmospheric composition",
            es: "Los carbonatos de paleosuelos no proporcionan información sobre la composición atmosférica",
            de: "Paläoboden-Karbonate liefern keine Informationen über die atmosphärische Zusammensetzung",
            nl: "Paleosol carbonaten bieden geen informatie over atmosferische samenstelling"
          },
          {
            en: "Late Jurassic CO2 levels were identical to modern preindustrial values",
            es: "Los niveles de CO2 del Jurásico tardío eran idénticos a los valores preindustriales modernos",
            de: "Späte jurassische CO2-Werte waren identisch mit modernen vorindustriellen Werten",
            nl: "Laat Jura CO2 niveaus waren identiek aan moderne pre-industriële waarden"
          },
          {
            en: "Carbon isotope ratios in paleosols reflect only local vegetation patterns",
            es: "Las relaciones de isótopos de carbono en paleosuelos reflejan solo patrones de vegetación local",
            de: "Kohlenstoffisotopenverhältnisse in Paläoböden spiegeln nur lokale Vegetationsmuster wider",
            nl: "Koolstof isotoop verhoudingen in paleosols reflecteren alleen lokale vegetatie patronen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Carbon isotope analysis of Morrison Formation paleosol carbonates, using the difference between δ13C of pedogenic carbonate and coexisting organic matter, indicates Late Jurassic atmospheric CO2 concentrations of 1000-2000 ppm—approximately 3-5 times modern preindustrial levels. This elevated CO2 is consistent with the Late Jurassic greenhouse climate.",
          es: "El análisis de isótopos de carbono de carbonatos de paleosuelos de la Formación Morrison, utilizando la diferencia entre δ13C de carbonato pedogénico y materia orgánica coexistente, indica concentraciones de CO2 atmosférico del Jurásico tardío de 1000-2000 ppm—aproximadamente 3-5 veces los niveles preindustriales modernos. Este CO2 elevado es consistente con el clima de invernadero del Jurásico tardío.",
          de: "Kohlenstoffisotopenanalyse von Morrison-Formation-Paläoboden-Karbonaten unter Verwendung der Differenz zwischen δ13C pedogenen Karbonats und koexistierender organischer Substanz zeigt späte jurassische atmosphärische CO2-Konzentrationen von 1000-2000 ppm—etwa 3-5-mal moderne vorindustrielle Werte. Dieses erhöhte CO2 ist konsistent mit dem späten jurassischen Treibhausklima.",
          nl: "Koolstof isotoop analyse van Morrison Formatie paleosol carbonaten, met gebruik van het verschil tussen δ13C van pedogene carbonaat en co-existerende organische materie, duidt op laat Jura atmosferische CO2 concentraties van 1000-2000 ppm—ongeveer 3-5 keer moderne pre-industriële niveaus. Deze verhoogde CO2 is consistent met het laat Jura broeikasklimaat."
        }
      },
      {
        question: {
          en: "How does finite element analysis (FEA) of Stegosaurus tail spikes inform understanding of their mechanical function?",
          es: "¿Cómo informa el análisis de elementos finitos (FEA) de las púas de la cola de Stegosaurus sobre la comprensión de su función mecánica?",
          de: "Wie informiert die Finite-Elemente-Analyse (FEA) von Stegosaurus-Schwanzstacheln über das Verständnis ihrer mechanischen Funktion?",
          nl: "Hoe informeert eindige elementen analyse (FEA) van Stegosaurus staart stekels begrip van hun mechanische functie?"
        },
        options: [
          {
            en: "FEA stress distribution modeling shows tail spikes experienced highest stresses during lateral strikes rather than vertical impacts, with stress concentration at the spike base consistent with active weaponry use causing the Allosaurus vertebral puncture wound",
            es: "El modelado de distribución de esfuerzo FEA muestra que las púas de la cola experimentaron los mayores esfuerzos durante golpes laterales en lugar de impactos verticales, con concentración de esfuerzo en la base de la púa consistente con el uso de armas activas causando la herida punzante vertebral de Allosaurus",
            de: "FEA-Spannungsverteilungsmodellierung zeigt, dass Schwanzstacheln während seitlicher Schläge höhere Spannungen erfuhren als bei vertikalen Aufprallen, mit Spannungskonzentration an der Stachelbasis, konsistent mit aktivem Waffengebrauch, der die Allosaurus-Wirbelstichverletzung verursachte",
            nl: "FEA stress distributie modellering toont dat staart stekels hoogste spanningen ervoeren tijdens laterale slagen in plaats van verticale impacts, met stress concentratie bij de stekel basis consistent met actief wapen gebruik dat de Allosaurus vertebrale punctie wond veroorzaakte"
          },
          {
            en: "FEA analysis shows tail spikes were too fragile for any defensive function",
            es: "El análisis FEA muestra que las púas de la cola eran demasiado frágiles para cualquier función defensiva",
            de: "FEA-Analyse zeigt, dass Schwanzstacheln zu fragil für jede Verteidigungsfunktion waren",
            nl: "FEA analyse toont dat staart stekels te fragiel waren voor elke verdedigingsfunctie"
          },
          {
            en: "Tail spikes functioned exclusively for thermoregulation, not defense",
            es: "Las púas de la cola funcionaban exclusivamente para termorregulación, no defensa",
            de: "Schwanzstacheln funktionierten ausschließlich zur Thermoregulation, nicht zur Verteidigung",
            nl: "Staart stekels functioneerden uitsluitend voor thermoregulatie, niet verdediging"
          },
          {
            en: "Finite element analysis cannot model bone mechanical properties accurately",
            es: "El análisis de elementos finitos no puede modelar las propiedades mecánicas óseas con precisión",
            de: "Finite-Elemente-Analyse kann Knochenmechanische Eigenschaften nicht genau modellieren",
            nl: "Eindige elementen analyse kan bot mechanische eigenschappen niet nauwkeurig modelleren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Finite element analysis of Stegosaurus tail spikes reveals stress distribution patterns consistent with lateral striking motions rather than vertical impacts. Peak stresses concentrate at the spike base during side-to-side strikes, matching the mechanical requirements for active defensive weaponry and consistent with the famous Allosaurus vertebra showing a Stegosaurus spike puncture wound.",
          es: "El análisis de elementos finitos de las púas de la cola de Stegosaurus revela patrones de distribución de esfuerzo consistentes con movimientos de golpe lateral en lugar de impactos verticales. Los esfuerzos máximos se concentran en la base de la púa durante golpes de lado a lado, coincidiendo con los requisitos mecánicos para armas defensivas activas y consistentes con la famosa vértebra de Allosaurus que muestra una herida punzante de púa de Stegosaurus.",
          de: "Finite-Elemente-Analyse von Stegosaurus-Schwanzstacheln zeigt Spannungsverteilungsmuster, die mit seitlichen Schlagbewegungen statt vertikalen Aufprallen übereinstimmen. Spitzenspannungen konzentrieren sich an der Stachelbasis während Seite-zu-Seite-Schlägen, passend zu den mechanischen Anforderungen für aktive Verteidigungswaffen und konsistent mit dem berühmten Allosaurus-Wirbel, der eine Stegosaurus-Stachel-Stichwunde zeigt.",
          nl: "Eindige elementen analyse van Stegosaurus staart stekels onthult stress distributie patronen consistent met laterale slag bewegingen in plaats van verticale impacts. Piek spanningen concentreren bij de stekel basis tijdens zij-naar-zij slagen, wat overeenkomt met de mechanische vereisten voor actieve defensieve wapens en consistent met de beroemde Allosaurus wervel die een Stegosaurus stekel punctie wond toont."
        }
      },
      {
        question: {
          en: "What does palynological analysis of Morrison Formation sediments reveal about Jurassic plant communities and dinosaur food resources?",
          es: "¿Qué revela el análisis palinológico de sedimentos de la Formación Morrison sobre las comunidades vegetales del Jurásico y los recursos alimentarios de los dinosaurios?",
          de: "Was zeigt die palynologische Analyse von Morrison-Formation-Sedimenten über jurassische Pflanzengemeinschaften und Dinosaurier-Nahrungsressourcen?",
          nl: "Wat onthult palynologische analyse van Morrison Formatie sedimenten over Jura planten gemeenschappen en dinosauriër voedsel bronnen?"
        },
        options: [
          {
            en: "Pollen assemblages dominated by Cheirolepidiaceae, cycads, and ferns with rare Araucariaceae indicate gymnosperm-dominated communities with limited understory diversity, suggesting sauropods fed on conifer foliage while smaller herbivores consumed ferns and cycads",
            es: "Los ensamblajes de polen dominados por Cheirolepidiaceae, cicadas y helechos con Araucariaceae raras indican comunidades dominadas por gimnospermas con diversidad de sotobosque limitada, sugiriendo que los saurópodos se alimentaban de follaje de coníferas mientras que herbívoros más pequeños consumían helechos y cicadas",
            de: "Pollenvergesellschaftungen dominiert von Cheirolepidiaceae, Cycadeen und Farnen mit seltenen Araucariaceae zeigen gymnospermen-dominierte Gemeinschaften mit begrenzter Unterholz-Diversität, was darauf hindeutet, dass Sauropoden sich von Nadelbaum-Laub ernährten, während kleinere Herbivoren Farne und Cycadeen konsumierten",
            nl: "Pollen assemblages gedomineerd door Cheirolepidiaceae, cycaden en varens met zeldzame Araucariaceae duiden op gymnosperm-gedomineerde gemeenschappen met beperkte ondergroei diversiteit, wat suggereert dat sauropoden zich voedden met conifeer bladeren terwijl kleinere herbivoren varens en cycaden consumeerden"
          },
          {
            en: "Morrison palynology shows angiosperm-dominated forests identical to modern ecosystems",
            es: "La palinología de Morrison muestra bosques dominados por angiospermas idénticos a los ecosistemas modernos",
            de: "Morrison-Palynologie zeigt angiospermen-dominierte Wälder identisch mit modernen Ökosystemen",
            nl: "Morrison palynologie toont angiosperm-gedomineerde bossen identiek aan moderne ecosystemen"
          },
          {
            en: "No pollen or spores are preserved in Morrison Formation sediments",
            es: "No se conservan polen o esporas en sedimentos de la Formación Morrison",
            de: "Keine Pollen oder Sporen sind in Morrison-Formation-Sedimenten erhalten",
            nl: "Geen pollen of sporen zijn bewaard in Morrison Formatie sedimenten"
          },
          {
            en: "Palynological analysis cannot reconstruct ancient plant communities",
            es: "El análisis palinológico no puede reconstruir comunidades vegetales antiguas",
            de: "Palynologische Analyse kann alte Pflanzengemeinschaften nicht rekonstruieren",
            nl: "Palynologische analyse kan oude planten gemeenschappen niet reconstrueren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Palynological (pollen and spore) analysis of Morrison Formation sediments reveals gymnosperm-dominated plant communities, particularly Cheirolepidiaceae conifers, cycads, and ferns, with rare araucarian conifers. This assemblage indicates sauropods browsed on conifer foliage at canopy height, while smaller ornithischian herbivores consumed ground-level ferns and cycads, partitioning food resources.",
          es: "El análisis palinológico (polen y esporas) de sedimentos de la Formación Morrison revela comunidades vegetales dominadas por gimnospermas, particularmente coníferas Cheirolepidiaceae, cicadas y helechos, con coníferas araucarias raras. Este ensamblaje indica que los saurópodos ramoneaban follaje de coníferas a altura del dosel, mientras que herbívoros ornitisquios más pequeños consumían helechos y cicadas a nivel del suelo, particionando recursos alimentarios.",
          de: "Palynologische (Pollen- und Sporen-) Analyse von Morrison-Formation-Sedimenten zeigt gymnospermen-dominierte Pflanzengemeinschaften, insbesondere Cheirolepidiaceae-Nadelbäume, Cycadeen und Farne, mit seltenen araukarischen Nadelbäumen. Diese Vergesellschaftung zeigt, dass Sauropoden auf Nadelbaum-Laub in Kronenhöhe weideten, während kleinere ornithischische Herbivoren Farne und Cycadeen auf Bodenhöhe konsumierten und Nahrungsressourcen partitionierten.",
          nl: "Palynologische (pollen en sporen) analyse van Morrison Formatie sedimenten onthult gymnosperm-gedomineerde planten gemeenschappen, met name Cheirolepidiaceae coniferen, cycaden en varens, met zeldzame araucariaanse coniferen. Deze assemblage duidt aan dat sauropoden graasden op conifeer bladeren op kroonhoogte, terwijl kleinere ornithischische herbivoren grondniveau varens en cycaden consumeerden, waarbij voedsel bronnen werden verdeeld."
        }
      },
      {
        question: {
          en: "How does comparative osteology of Jurassic sauropod forelimb structure inform understanding of locomotor mechanics?",
          es: "¿Cómo informa la osteología comparativa de la estructura de las extremidades anteriores de saurópodos del Jurásico sobre la comprensión de la mecánica locomotora?",
          de: "Wie informiert die vergleichende Osteologie der jurassischen Sauropoden-Vorderbein-Struktur über das Verständnis der Fortbewegungsmechanik?",
          nl: "Hoe informeert vergelijkende osteologie van Jura sauropode voorpoot structuur begrip van locomotor mechanica?"
        },
        options: [
          {
            en: "Humeral shaft robustness indices, metacarpal arrangement (columnar versus splayed), and phalangeal reduction patterns distinguish between high-elbow posture in diplodocids (columnar manus, reduced digits) and low-elbow posture in brachiosaurids (splayed manus, robust metacarpals)",
            es: "Los índices de robustez del eje humeral, disposición metacarpiana (columnar versus extendida), y patrones de reducción falangeana distinguen entre postura de codo alto en diplodócidos (mano columnar, dígitos reducidos) y postura de codo bajo en braquiosáuridos (mano extendida, metacarpianos robustos)",
            de: "Humerus-Schaft-Robustheitsindizes, Metakarpal-Anordnung (säulenförmig versus gespreizt) und Phalangenreduktionsmuster unterscheiden zwischen hoher Ellbogenhaltung bei Diplodociden (säulenförmige Manus, reduzierte Finger) und niedriger Ellbogenhaltung bei Brachiosauriden (gespreizter Manus, robuste Metakarpale)",
            nl: "Humerale schacht robuustheid indices, metacarpale rangschikking (kolomvormig versus gespreide), en falangeale reductie patronen onderscheiden tussen hoge-elleboog houding in diplodociden (kolomvormige manus, gereduceerde digiti) en lage-elleboog houding in brachiosauriden (gespreide manus, robuuste metacarpalen)"
          },
          {
            en: "All sauropods had identical forelimb structure with no locomotor variation",
            es: "Todos los saurópodos tenían estructura de extremidades anteriores idéntica sin variación locomotora",
            de: "Alle Sauropoden hatten identische Vorderbein-Struktur ohne Fortbewegungsvariation",
            nl: "Alle sauropoden hadden identieke voorpoot structuur zonder locomotor variatie"
          },
          {
            en: "Sauropod forelimbs were non-weight-bearing structures used only for display",
            es: "Las extremidades anteriores de saurópodos eran estructuras sin soporte de peso usadas solo para exhibición",
            de: "Sauropoden-Vorderbeine waren nicht-lasttragende Strukturen, die nur zur Darstellung verwendet wurden",
            nl: "Sauropode voorpoten waren niet-gewicht dragende structuren alleen gebruikt voor vertoon"
          },
          {
            en: "Comparative osteology provides no information about locomotor function",
            es: "La osteología comparativa no proporciona información sobre la función locomotora",
            de: "Vergleichende Osteologie liefert keine Informationen über Fortbewegungsfunktion",
            nl: "Vergelijkende osteologie biedt geen informatie over locomotor functie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Comparative osteology reveals significant locomotor differences among Jurassic sauropods. Diplodocids show columnar manus structure with reduced digits and high humeral robustness indices, indicating high-elbow, pillar-like forelimbs for weight support. Brachiosaurids show splayed metacarpals and robust phalanges, suggesting low-elbow posture with more flexibility, reflecting different locomotor mechanics.",
          es: "La osteología comparativa revela diferencias locomotoras significativas entre los saurópodos del Jurásico. Los diplodócidos muestran estructura de mano columnar con dígitos reducidos e índices de robustez humeral altos, indicando extremidades anteriores tipo pilar de codo alto para soporte de peso. Los braquiosáuridos muestran metacarpianos extendidos y falanges robustas, sugiriendo postura de codo bajo con más flexibilidad, reflejando mecánicas locomotoras diferentes.",
          de: "Vergleichende Osteologie zeigt signifikante Fortbewegungsunterschiede zwischen jurassischen Sauropoden. Diplodociden zeigen säulenförmige Manus-Struktur mit reduzierten Fingern und hohen humeralen Robustheitsindizes, was auf hohe Ellbogen-, säulenartige Vorderbeine zur Gewichtsunterstützung hinweist. Brachiosauriden zeigen gespreizter Metakarpale und robuste Phalangen, was auf niedrige Ellbogenhaltung mit mehr Flexibilität hindeutet und unterschiedliche Fortbewegungsmechanik widerspiegelt.",
          nl: "Vergelijkende osteologie onthult significante locomotor verschillen tussen Jura sauropoden. Diplodociden tonen kolomvormige manus structuur met gereduceerde digiti en hoge humerale robuustheid indices, wat hoge-elleboog, pilaar-achtige voorpoten aanduidt voor gewichtsondersteuning. Brachiosauriden tonen gespreide metacarpalen en robuuste falangen, wat lage-elleboog houding suggereert met meer flexibiliteit, wat verschillende locomotor mechanica weerspiegelt."
        }
      },
      {
        question: {
          en: "What does bone microstructure analysis using polarized light microscopy reveal about Jurassic theropod growth strategies?",
          es: "¿Qué revela el análisis de microestructura ósea usando microscopía de luz polarizada sobre las estrategias de crecimiento de terópodos del Jurásico?",
          de: "Was zeigt die Knochenmikrostrukturanalyse mittels polarisierter Lichtmikroskopie über jurassische Theropoden-Wachstumsstrategien?",
          nl: "Wat onthult bot microstructuur analyse met gepolariseerde lichtmicroscopie over Jura theropode groei strategieën?"
        },
        options: [
          {
            en: "Fibrolamellar bone tissue with longitudinal and reticular vascular orientations in juvenile specimens transitioning to lamellar-zonal bone with LAGs in adults indicates rapid early growth with elevated metabolic rates followed by reduced growth at skeletal maturity",
            es: "El tejido óseo fibrolamelar con orientaciones vasculares longitudinales y reticulares en especímenes juveniles que transicionan a hueso lamelar-zonal con LAGs en adultos indica crecimiento temprano rápido con tasas metabólicas elevadas seguido de crecimiento reducido en la madurez esquelética",
            de: "Fibrolamellares Knochengewebe mit longitudinalen und retikulären Gefäßorientierungen bei juvenilen Exemplaren, die zu lamellar-zonalem Knochen mit LAGs bei Erwachsenen übergehen, zeigt schnelles frühes Wachstum mit erhöhten Stoffwechselraten gefolgt von reduziertem Wachstum bei Skelettreife",
            nl: "Fibrolamellaar botweefsel met longitudinale en reticulaire vasculaire oriëntaties in juveniele specimens overgaand naar lamellair-zonaal bot met LAGs bij volwassenen duidt op snelle vroege groei met verhoogde metabolische snelheden gevolgd door verminderde groei bij skeletale rijpheid"
          },
          {
            en: "Theropod bone shows only lamellar tissue indicating slow ectothermic growth throughout life",
            es: "El hueso de terópodo muestra solo tejido lamelar indicando crecimiento ectotérmico lento durante toda la vida",
            de: "Theropoden-Knochen zeigt nur lamellares Gewebe, was langsames ektothermes Wachstum während des gesamten Lebens anzeigt",
            nl: "Theropode bot toont alleen lamellair weefsel wat langzame ectotherme groei gedurende het leven aanduidt"
          },
          {
            en: "Polarized light microscopy cannot resolve bone tissue types in fossils",
            es: "La microscopía de luz polarizada no puede resolver tipos de tejido óseo en fósiles",
            de: "Polarisierte Lichtmikroskopie kann Knochengewebetypen in Fossilien nicht auflösen",
            nl: "Gepolariseerde lichtmicroscopie kan bot weefsel types in fossielen niet oplossen"
          },
          {
            en: "All dinosaurs show identical bone microstructure regardless of phylogeny or ecology",
            es: "Todos los dinosaurios muestran microestructura ósea idéntica independientemente de la filogenia o ecología",
            de: "Alle Dinosaurier zeigen identische Knochenmikrostruktur unabhängig von Phylogenie oder Ökologie",
            nl: "Alle dinosauriërs tonen identieke bot microstructuur ongeacht fylogenie of ecologie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Polarized light microscopy of Jurassic theropod bone reveals fibrolamellar tissue with longitudinal or reticular vascular canals in juveniles, indicating rapid growth with elevated metabolic rates. Adult bones show lamellar-zonal tissue with Lines of Arrested Growth (LAGs), indicating slowed growth at skeletal maturity. This pattern demonstrates growth strategies intermediate between ectothermic reptiles and endothermic birds.",
          es: "La microscopía de luz polarizada de hueso de terópodo del Jurásico revela tejido fibrolamelar con canales vasculares longitudinales o reticulares en juveniles, indicando crecimiento rápido con tasas metabólicas elevadas. Los huesos adultos muestran tejido lamelar-zonal con Líneas de Crecimiento Detenido (LAGs), indicando crecimiento reducido en la madurez esquelética. Este patrón demuestra estrategias de crecimiento intermedias entre reptiles ectotérmicos y aves endotérmicas.",
          de: "Polarisierte Lichtmikroskopie von jurassischem Theropoden-Knochen zeigt fibrolamellares Gewebe mit longitudinalen oder retikulären Gefäßkanälen bei Juvenilen, was schnelles Wachstum mit erhöhten Stoffwechselraten anzeigt. Erwachsene Knochen zeigen lamellar-zonales Gewebe mit Lines of Arrested Growth (LAGs), was verlangsamtes Wachstum bei Skelettreife anzeigt. Dieses Muster zeigt Wachstumsstrategien zwischen ektothermen Reptilien und endothermen Vögeln.",
          nl: "Gepolariseerde lichtmicroscopie van Jura theropode bot onthult fibrolamellaar weefsel met longitudinale of reticulaire vasculaire kanalen in juvenielen, wat snelle groei aanduidt met verhoogde metabolische snelheden. Volwassen botten tonen lamellair-zonaal weefsel met Lines of Arrested Growth (LAGs), wat vertraagde groei aanduidt bij skeletale rijpheid. Dit patroon toont groei strategieën intermediair tussen ectotherme reptielen en endotherme vogels."
        }
      },
      {
        question: {
          en: "How does ichnological analysis of Jurassic trackways provide evidence for sauropod social behavior?",
          es: "¿Cómo proporciona el análisis icnológico de huellas del Jurásico evidencia del comportamiento social de los saurópodos?",
          de: "Wie liefert die ichnologische Analyse jurassischer Spurenbahnen Beweise für Sauropoden-Sozialverhalten?",
          nl: "Hoe biedt ichnologische analyse van Jura sporen bewijs voor sauropode sociaal gedrag?"
        },
        options: [
          {
            en: "Parallel trackways with consistent spacing, size-sorted track patterns showing small individuals in the center surrounded by large individuals, and multiple horizons showing repeated patterns indicate gregarious behavior with herd structure and potential protective grouping",
            es: "Las huellas paralelas con espaciado consistente, patrones de huellas ordenadas por tamaño mostrando individuos pequeños en el centro rodeados por individuos grandes, y múltiples horizontes mostrando patrones repetidos indican comportamiento gregario con estructura de manada y agrupación protectora potencial",
            de: "Parallele Spurenbahnen mit konsistenten Abständen, größensortierte Spurenmuster, die kleine Individuen im Zentrum zeigen, umgeben von großen Individuen, und mehrere Horizonte, die wiederholte Muster zeigen, deuten auf gregäres Verhalten mit Herdenstruktur und potenzielle Schutzgruppierung hin",
            nl: "Parallelle sporen met consistente afstand, grootte-gesorteerde spoor patronen die kleine individuen in het centrum tonen omringd door grote individuen, en meerdere horizonten die herhaalde patronen tonen duiden op gregair gedrag met kudde structuur en potentiële beschermende groepering"
          },
          {
            en: "Trackways show only solitary individuals with no evidence of group behavior",
            es: "Las huellas muestran solo individuos solitarios sin evidencia de comportamiento grupal",
            de: "Spurenbahnen zeigen nur solitäre Individuen ohne Beweise für Gruppenverhalten",
            nl: "Sporen tonen alleen solitaire individuen zonder bewijs voor groepsgedrag"
          },
          {
            en: "All parallel trackways result from geological processes, not behavioral patterns",
            es: "Todas las huellas paralelas resultan de procesos geológicos, no de patrones de comportamiento",
            de: "Alle parallelen Spurenbahnen resultieren aus geologischen Prozessen, nicht aus Verhaltensmustern",
            nl: "Alle parallelle sporen resulteren uit geologische processen, niet uit gedragspatronen"
          },
          {
            en: "Ichnological analysis cannot provide information about social behavior",
            es: "El análisis icnológico no puede proporcionar información sobre el comportamiento social",
            de: "Ichnologische Analyse kann keine Informationen über Sozialverhalten liefern",
            nl: "Ichnologische analyse kan geen informatie bieden over sociaal gedrag"
          }
        ],
        correct: 0,
        explanation: {
          en: "Ichnological (trackway) analysis of Jurassic sauropod sites reveals parallel trackways with consistent inter-individual spacing and size-sorted patterns (juveniles in center, adults at periphery), preserved at multiple stratigraphic horizons. This evidence indicates gregarious behavior with structured herds and possible protective positioning of vulnerable juveniles, similar to modern elephant herds.",
          es: "El análisis icnológico (de huellas) de sitios de saurópodos del Jurásico revela huellas paralelas con espaciado inter-individual consistente y patrones ordenados por tamaño (juveniles en el centro, adultos en la periferia), preservados en múltiples horizontes estratigráficos. Esta evidencia indica comportamiento gregario con manadas estructuradas y posible posicionamiento protector de juveniles vulnerables, similar a las manadas de elefantes modernos.",
          de: "Ichnologische (Spurenbahn-) Analyse jurassischer Sauropoden-Stätten zeigt parallele Spurenbahnen mit konsistentem inter-individuellem Abstand und größensortierten Mustern (Juvenile im Zentrum, Erwachsene an der Peripherie), erhalten an mehreren stratigraphischen Horizonten. Diese Beweise deuten auf gregäres Verhalten mit strukturierten Herden und mögliche Schutzpositionierung gefährdeter Juveniler hin, ähnlich modernen Elefantenherden.",
          nl: "Ichnologische (spoor) analyse van Jura sauropode locaties onthult parallelle sporen met consistente inter-individuele afstand en grootte-gesorteerde patronen (juvenielen in centrum, volwassenen aan periferie), bewaard op meerdere stratigrafische horizonten. Dit bewijs duidt op gregair gedrag met gestructureerde kuddes en mogelijke beschermende positionering van kwetsbare juvenielen, vergelijkbaar met moderne olifantenkuddes."
        }
      },
      {
        question: {
          en: "What does Raman spectroscopy of Jurassic theropod fossil organic residues reveal about original biomolecular preservation?",
          es: "¿Qué revela la espectroscopia Raman de residuos orgánicos fósiles de terópodos del Jurásico sobre la preservación biomolecular original?",
          de: "Was zeigt die Raman-Spektroskopie jurassischer Theropoden-Fossil-Organischer Rückstände über ursprüngliche biomolekulare Erhaltung?",
          nl: "Wat onthult Raman spectroscopie van Jura theropode fossiele organische residuen over originele biomoleculaire bewaring?"
        },
        options: [
          {
            en: "Raman spectral peaks at 1330-1360 cm⁻¹ and 1580-1600 cm⁻¹ in fossil bone indicate preserved graphitized carbon derived from original protein structures, while absence of crystalline peaks suggests minimal diagenetic replacement, indicating exceptional preservation of organic molecular signatures",
            es: "Los picos espectrales Raman a 1330-1360 cm⁻¹ y 1580-1600 cm⁻¹ en hueso fósil indican carbono grafitizado preservado derivado de estructuras proteicas originales, mientras que la ausencia de picos cristalinos sugiere reemplazo diagenético mínimo, indicando preservación excepcional de firmas moleculares orgánicas",
            de: "Raman-Spektralspitzen bei 1330-1360 cm⁻¹ und 1580-1600 cm⁻¹ in fossilem Knochen zeigen erhaltenen graphitisierten Kohlenstoff aus ursprünglichen Proteinstrukturen, während das Fehlen kristalliner Spitzen minimale diagenetische Ersetzung nahelegt, was auf außergewöhnliche Erhaltung organischer Molekül-Signaturen hinweist",
            nl: "Raman spectrale pieken bij 1330-1360 cm⁻¹ en 1580-1600 cm⁻¹ in fossiel bot duiden op bewaarde gegraphitiseerde koolstof afgeleid van originele eiwit structuren, terwijl afwezigheid van kristallijne pieken minimale diagenetische vervanging suggereert, wat uitzonderlijke bewaring van organische moleculaire handtekeningen aanduidt"
          },
          {
            en: "Raman spectroscopy shows complete mineral replacement with no organic preservation",
            es: "La espectroscopia Raman muestra reemplazo mineral completo sin preservación orgánica",
            de: "Raman-Spektroskopie zeigt vollständige Mineralersetzung ohne organische Erhaltung",
            nl: "Raman spectroscopie toont complete minerale vervanging zonder organische bewaring"
          },
          {
            en: "No organic molecules can survive 150 million years of fossilization",
            es: "Ninguna molécula orgánica puede sobrevivir 150 millones de años de fosilización",
            de: "Keine organischen Moleküle können 150 Millionen Jahre Fossilisierung überleben",
            nl: "Geen organische moleculen kunnen 150 miljoen jaar fossilisatie overleven"
          },
          {
            en: "Raman spectroscopy cannot detect carbon-based compounds in fossils",
            es: "La espectroscopia Raman no puede detectar compuestos basados en carbono en fósiles",
            de: "Raman-Spektroskopie kann kohlenstoffbasierte Verbindungen in Fossilien nicht nachweisen",
            nl: "Raman spectroscopie kan koolstof-gebaseerde verbindingen in fossielen niet detecteren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Raman spectroscopy of Jurassic theropod fossils reveals characteristic carbon peaks (D and G bands at 1330-1360 and 1580-1600 cm⁻¹) indicating preserved graphitized carbon derived from original protein structures. The absence of purely crystalline mineral peaks suggests exceptional preservation of organic molecular signatures despite 150 million years of diagenesis, providing insight into biomolecular fossilization processes.",
          es: "La espectroscopia Raman de fósiles de terópodos del Jurásico revela picos de carbono característicos (bandas D y G a 1330-1360 y 1580-1600 cm⁻¹) indicando carbono grafitizado preservado derivado de estructuras proteicas originales. La ausencia de picos minerales puramente cristalinos sugiere preservación excepcional de firmas moleculares orgánicas a pesar de 150 millones de años de diagénesis, proporcionando información sobre procesos de fosilización biomolecular.",
          de: "Raman-Spektroskopie jurassischer Theropoden-Fossilien zeigt charakteristische Kohlenstoff-Spitzen (D- und G-Banden bei 1330-1360 und 1580-1600 cm⁻¹), die erhaltenen graphitisierten Kohlenstoff aus ursprünglichen Proteinstrukturen anzeigen. Das Fehlen rein kristalliner Mineralspitzen deutet auf außergewöhnliche Erhaltung organischer Molekül-Signaturen trotz 150 Millionen Jahren Diagenese hin und liefert Einblick in biomolekulare Fossilisierungsprozesse.",
          nl: "Raman spectroscopie van Jura theropode fossielen onthult karakteristieke koolstof pieken (D en G banden bij 1330-1360 en 1580-1600 cm⁻¹) wat bewaarde gegraphitiseerde koolstof aanduidt afgeleid van originele eiwit structuren. De afwezigheid van puur kristallijne minerale pieken suggereert uitzonderlijke bewaring van organische moleculaire handtekeningen ondanks 150 miljoen jaar diagenese, wat inzicht biedt in biomoleculaire fossilisatie processen."
        }
      },
      {
        question: {
          en: "How does oxygen isotope analysis of Jurassic sauropod tooth enamel phosphate inform understanding of body temperature regulation?",
          es: "¿Cómo informa el análisis de isótopos de oxígeno del fosfato de esmalte dental de saurópodos del Jurásico sobre la comprensión de la regulación de la temperatura corporal?",
          de: "Wie informiert die Sauerstoffisotopenanalyse von jurassischem Sauropoden-Zahnschmelz-Phosphat über das Verständnis der Körpertemperaturregulation?",
          nl: "Hoe informeert zuurstof isotoop analyse van Jura sauropode tand emaille fosfaat begrip van lichaamstemperatuur regulatie?"
        },
        options: [
          {
            en: "δ18O phosphate values showing minimal variation between teeth formed in different seasons, combined with calculated body temperatures of 36-38°C, indicate homeothermic temperature regulation consistent with gigantothermy or elevated metabolic rates rather than seasonal ectothermic fluctuation",
            es: "Los valores de fosfato δ18O que muestran variación mínima entre dientes formados en diferentes estaciones, combinados con temperaturas corporales calculadas de 36-38°C, indican regulación de temperatura homeotérmica consistente con gigantotermia o tasas metabólicas elevadas en lugar de fluctuación ectotérmica estacional",
            de: "δ18O-Phosphat-Werte, die minimale Variation zwischen in verschiedenen Jahreszeiten gebildeten Zähnen zeigen, kombiniert mit berechneten Körpertemperaturen von 36-38°C, deuten auf homeotherme Temperaturregulation hin, konsistent mit Gigantothermie oder erhöhten Stoffwechselraten statt saisonaler ektothermer Fluktuation",
            nl: "δ18O fosfaat waarden die minimale variatie tonen tussen tanden gevormd in verschillende seizoenen, gecombineerd met berekende lichaamstemperaturen van 36-38°C, duiden op homeotherme temperatuur regulatie consistent met gigantothermie of verhoogde metabolische snelheden in plaats van seizoensgebonden ectotherme fluctuatie"
          },
          {
            en: "Oxygen isotopes show extreme seasonal variation indicating strict ectothermy",
            es: "Los isótopos de oxígeno muestran variación estacional extrema indicando ectotermia estricta",
            de: "Sauerstoffisotope zeigen extreme saisonale Variation, die strikte Ektothermie anzeigt",
            nl: "Zuurstof isotopen tonen extreme seizoensgebonden variatie wat strikte ectothermie aanduidt"
          },
          {
            en: "Tooth enamel phosphate preserves no information about body temperature",
            es: "El fosfato de esmalte dental no preserva información sobre la temperatura corporal",
            de: "Zahnschmelz-Phosphat bewahrt keine Informationen über Körpertemperatur",
            nl: "Tand emaille fosfaat bewaart geen informatie over lichaamstemperatuur"
          },
          {
            en: "Oxygen isotope thermometry cannot be applied to fossil organisms",
            es: "La termometría de isótopos de oxígeno no puede aplicarse a organismos fósiles",
            de: "Sauerstoffisotopen-Thermometrie kann nicht auf fossile Organismen angewendet werden",
            nl: "Zuurstof isotoop thermometrie kan niet worden toegepast op fossiele organismen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Oxygen isotope analysis of sauropod tooth enamel phosphate reveals minimal seasonal variation in δ18O values, indicating stable body temperatures around 36-38°C. This homeothermic pattern suggests either gigantothermy (thermal inertia from large body size) or elevated metabolic rates maintained stable core temperatures, rather than ectothermic body temperature fluctuating with ambient conditions.",
          es: "El análisis de isótopos de oxígeno del fosfato de esmalte dental de saurópodos revela variación estacional mínima en valores δ18O, indicando temperaturas corporales estables alrededor de 36-38°C. Este patrón homeotérmico sugiere ya sea gigantotermia (inercia térmica del gran tamaño corporal) o tasas metabólicas elevadas que mantuvieron temperaturas centrales estables, en lugar de temperatura corporal ectotérmica fluctuando con condiciones ambientales.",
          de: "Sauerstoffisotopenanalyse von Sauropoden-Zahnschmelz-Phosphat zeigt minimale saisonale Variation in δ18O-Werten, was stabile Körpertemperaturen um 36-38°C anzeigt. Dieses homeotherme Muster deutet entweder auf Gigantothermie (thermische Trägheit durch große Körpergröße) oder erhöhte Stoffwechselraten hin, die stabile Kerntemperaturen aufrechterhielten, statt ektothermer Körpertemperatur, die mit Umgebungsbedingungen schwankt.",
          nl: "Zuurstof isotoop analyse van sauropode tand emaille fosfaat onthult minimale seizoensgebonden variatie in δ18O waarden, wat stabiele lichaamstemperaturen rond 36-38°C aanduidt. Dit homeotherme patroon suggereert ofwel gigantothermie (thermische traagheid van grote lichaamsgrootte) of verhoogde metabolische snelheden onderhielden stabiele kern temperaturen, in plaats van ectotherme lichaamstemperatuur fluctuerend met omgevingsomstandigheden."
        }
      },
      {
        question: {
          en: "What does electron spin resonance (ESR) dating combined with stratigraphic analysis reveal about the temporal duration of Morrison Formation deposition?",
          es: "¿Qué revela la datación por resonancia de espín electrónico (ESR) combinada con análisis estratigráfico sobre la duración temporal de la deposición de la Formación Morrison?",
          de: "Was zeigt Elektronenspin-Resonanz (ESR)-Datierung kombiniert mit stratigraphischer Analyse über die zeitliche Dauer der Morrison-Formation-Ablagerung?",
          nl: "Wat onthult elektronen spin resonantie (ESR) datering gecombineerd met stratigrafische analyse over de temporele duur van Morrison Formatie afzetting?"
        },
        options: [
          {
            en: "ESR dates from tooth enamel combined with magnetostratigraphic correlations indicate Morrison deposition spanned approximately 8-10 million years during the Late Jurassic (Kimmeridgian-Tithonian), with varying sedimentation rates reflecting climatic fluctuations and tectonic pulses",
            es: "Las fechas ESR del esmalte dental combinadas con correlaciones magnetoestratigráficas indican que la deposición de Morrison abarcó aproximadamente 8-10 millones de años durante el Jurásico tardío (Kimmeridgiano-Titoniano), con tasas de sedimentación variables reflejando fluctuaciones climáticas y pulsos tectónicos",
            de: "ESR-Daten aus Zahnschmelz kombiniert mit magnetostratigraphischen Korrelationen zeigen, dass Morrison-Ablagerung etwa 8-10 Millionen Jahre während des späten Jura (Kimmeridgium-Tithonium) umfasste, mit variierenden Sedimentationsraten, die klimatische Schwankungen und tektonische Impulse widerspiegeln",
            nl: "ESR dateringen van tand emaille gecombineerd met magnetostratigrafische correlaties duiden aan dat Morrison afzetting ongeveer 8-10 miljoen jaar besloeg tijdens het laat Jura (Kimmeridgian-Tithonian), met variërende sedimentatie snelheden die klimatologische fluctuaties en tektonische pulsen reflecteren"
          },
          {
            en: "ESR dating shows Morrison Formation deposited in only 10,000 years",
            es: "La datación ESR muestra que la Formación Morrison se depositó en solo 10,000 años",
            de: "ESR-Datierung zeigt, dass Morrison-Formation in nur 10.000 Jahren abgelagert wurde",
            nl: "ESR datering toont dat Morrison Formatie werd afgezet in slechts 10.000 jaar"
          },
          {
            en: "ESR dating cannot be applied to Jurassic fossil material",
            es: "La datación ESR no puede aplicarse a material fósil del Jurásico",
            de: "ESR-Datierung kann nicht auf jurassisches Fossilmaterial angewendet werden",
            nl: "ESR datering kan niet worden toegepast op Jura fossiel materiaal"
          },
          {
            en: "Stratigraphic analysis shows Morrison Formation is Cretaceous, not Jurassic",
            es: "El análisis estratigráfico muestra que la Formación Morrison es del Cretácico, no del Jurásico",
            de: "Stratigraphische Analyse zeigt, dass Morrison-Formation Kreidezeit ist, nicht Jura",
            nl: "Stratigrafische analyse toont dat Morrison Formatie Krijt is, niet Jura"
          }
        ],
        correct: 0,
        explanation: {
          en: "Electron Spin Resonance (ESR) dating of tooth enamel, combined with magnetostratigraphic correlations and radiometric ages from volcanic ash beds, indicates the Morrison Formation was deposited over approximately 8-10 million years during the Late Jurassic (Kimmeridgian-Tithonian, ~157-147 Ma). Varying sedimentation rates reflect climatic cycles and tectonic activity, providing temporal framework for understanding dinosaur evolution.",
          es: "La datación por Resonancia de Espín Electrónico (ESR) del esmalte dental, combinada con correlaciones magnetoestratigráficas y edades radiométricas de lechos de ceniza volcánica, indica que la Formación Morrison se depositó durante aproximadamente 8-10 millones de años durante el Jurásico tardío (Kimmeridgiano-Titoniano, ~157-147 Ma). Las tasas de sedimentación variables reflejan ciclos climáticos y actividad tectónica, proporcionando un marco temporal para comprender la evolución de los dinosaurios.",
          de: "Elektronenspin-Resonanz (ESR)-Datierung von Zahnschmelz, kombiniert mit magnetostratigraphischen Korrelationen und radiometrischen Altern aus vulkanischen Ascheschichten, zeigt, dass die Morrison-Formation über etwa 8-10 Millionen Jahre während des späten Jura (Kimmeridgium-Tithonium, ~157-147 Ma) abgelagert wurde. Variierende Sedimentationsraten spiegeln klimatische Zyklen und tektonische Aktivität wider und bieten zeitlichen Rahmen für das Verständnis der Dinosaurier-Evolution.",
          nl: "Elektronen Spin Resonantie (ESR) datering van tand emaille, gecombineerd met magnetostratigrafische correlaties en radiometrische leeftijden van vulkanische aslag lagen, duidt aan dat de Morrison Formatie werd afgezet over ongeveer 8-10 miljoen jaar tijdens het laat Jura (Kimmeridgian-Tithonian, ~157-147 Ma). Variërende sedimentatie snelheden reflecteren klimatologische cycli en tektonische activiteit, wat temporeel raamwerk biedt voor begrip van dinosauriër evolutie."
        }
      },
      {
        question: {
          en: "How does computed tomography (CT) analysis of Allosaurus skull pneumatization contribute to understanding theropod olfactory capabilities?",
          es: "¿Cómo contribuye el análisis de tomografía computarizada (CT) de la neumatización del cráneo de Allosaurus a comprender las capacidades olfativas de los terópodos?",
          de: "Wie trägt die Computertomographie (CT)-Analyse der Allosaurus-Schädelpneumatisierung zum Verständnis theropoder Riechfähigkeiten bei?",
          nl: "Hoe draagt computertomografie (CT) analyse van Allosaurus schedel pneumatisatie bij aan begrip van theropode reuk capaciteiten?"
        },
        options: [
          {
            en: "CT scans reveal extensive paranasal sinuses connected to enlarged olfactory bulbs and turbinate structures, with calculated olfactory ratios (olfactory bulb to cerebral hemisphere volume) of 0.6-0.8, indicating acute olfactory sensitivity comparable to modern scavenging birds, supporting both active predation and opportunistic scavenging behaviors",
            es: "Las tomografías CT revelan senos paranasales extensos conectados a bulbos olfativos agrandados y estructuras de cornetes, con ratios olfativas calculadas (volumen del bulbo olfativo al hemisferio cerebral) de 0.6-0.8, indicando sensibilidad olfativa aguda comparable a aves carroñeras modernas, apoyando tanto comportamientos de depredación activa como de carroñeo oportunista",
            de: "CT-Scans zeigen ausgedehnte Nasennebenhöhlen, die mit vergrößerten Riechkolben und Turbinatstrukturen verbunden sind, mit berechneten Riechverhältnissen (Riechkolben- zu Großhirnhemisphären-Volumen) von 0,6-0,8, was auf akute Riechempfindlichkeit vergleichbar mit modernen aasfressenden Vögeln hinweist und sowohl aktive Raubtierverhaltensweisen als auch opportunistisches Aasfressverhalten unterstützt",
            nl: "CT scans onthullen uitgebreide paranasale sinussen verbonden met vergrote reukbollen en turbinaat structuren, met berekende reuk ratio's (reukbol tot hersenhelft volume) van 0.6-0.8, wat acute reuk gevoeligheid aanduidt vergelijkbaar met moderne aasvogende vogels, wat zowel actief roofdier gedrag als opportunistisch aasvretergedrag ondersteunt"
          },
          {
            en: "CT scans show Allosaurus had no olfactory structures and relied solely on vision",
            es: "Las tomografías CT muestran que Allosaurus no tenía estructuras olfativas y dependía únicamente de la visión",
            de: "CT-Scans zeigen, dass Allosaurus keine Riechstrukturen hatte und sich ausschließlich auf Sehen verließ",
            nl: "CT scans tonen dat Allosaurus geen reuk structuren had en uitsluitend vertrouwde op zicht"
          },
          {
            en: "Skull pneumatization is unrelated to sensory capabilities in theropods",
            es: "La neumatización del cráneo no está relacionada con capacidades sensoriales en terópodos",
            de: "Schädelpneumatisierung steht nicht im Zusammenhang mit sensorischen Fähigkeiten bei Theropoden",
            nl: "Schedel pneumatisatie is niet gerelateerd aan sensorische capaciteiten bij theropoden"
          },
          {
            en: "CT technology cannot resolve internal cranial structures in fossil specimens",
            es: "La tecnología CT no puede resolver estructuras craneales internas en especímenes fósiles",
            de: "CT-Technologie kann interne Schädelstrukturen in fossilen Exemplaren nicht auflösen",
            nl: "CT technologie kan interne craniale structuren in fossiele exemplaren niet oplossen"
          }
        ],
        correct: 0,
        explanation: {
          en: "High-resolution CT scanning of Allosaurus skulls reveals extensive pneumatic sinuses intimately connected to enlarged olfactory bulbs and complex turbinate structures. The olfactory ratio (olfactory bulb volume relative to cerebral hemisphere volume) of 0.6-0.8 indicates highly developed olfactory sensitivity comparable to modern vultures and condors, suggesting Allosaurus possessed acute sense of smell useful for both tracking wounded prey and locating carrion across large distances.",
          es: "La tomografía CT de alta resolución de cráneos de Allosaurus revela senos neumáticos extensos íntimamente conectados a bulbos olfativos agrandados y estructuras complejas de cornetes. La relación olfativa (volumen del bulbo olfativo en relación con el volumen del hemisferio cerebral) de 0.6-0.8 indica sensibilidad olfativa altamente desarrollada comparable a buitres y cóndores modernos, sugiriendo que Allosaurus poseía un agudo sentido del olfato útil tanto para rastrear presas heridas como para localizar carroña a grandes distancias.",
          de: "Hochauflösende CT-Scans von Allosaurus-Schädeln zeigen ausgedehnte pneumatische Nebenhöhlen, die eng mit vergrößerten Riechkolben und komplexen Turbinatstrukturen verbunden sind. Das Riechverhältnis (Riechkolbenvolumen im Verhältnis zum Großhirnhemisphärenvolumen) von 0,6-0,8 deutet auf hochentwickelte Riechempfindlichkeit hin, vergleichbar mit modernen Geiern und Kondoren, was darauf hindeutet, dass Allosaurus einen ausgeprägten Geruchssinn besaß, der sowohl zum Aufspüren verwundeter Beute als auch zum Auffinden von Aas über große Entfernungen nützlich war.",
          nl: "Hoge-resolutie CT scanning van Allosaurus schedels onthult uitgebreide pneumatische sinussen nauw verbonden met vergrote reukbollen en complexe turbinaat structuren. De reuk ratio (reukbol volume relatief tot hersenhelft volume) van 0.6-0.8 duidt op hoog ontwikkelde reuk gevoeligheid vergelijkbaar met moderne gieren en condors, wat suggereert dat Allosaurus een scherp reukvermogen bezat nuttig voor zowel het opsporen van gewonde prooi als het lokaliseren van aas over grote afstanden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
