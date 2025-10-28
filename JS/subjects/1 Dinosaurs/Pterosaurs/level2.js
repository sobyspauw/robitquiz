// Pterosaurs Quiz - Level 2: Pterosaur Anatomy and Flight
(function() {
  const level2 = {
    name: {
      en: "Pterosaurs Level 2",
      es: "Pterosaurios Nivel 2",
      de: "Pterosaurier Stufe 2",
      nl: "Pterosauriërs Level 2"
    },
    questions: [
      {
        question: {
          en: "Which pterosaur had the distinctive large bony crest on its head?",
          es: "¿Qué pterosaurio tenía la distintiva cresta ósea grande en su cabeza?",
          de: "Welcher Pterosaurier hatte den charakteristischen großen Knochenkamm auf seinem Kopf?",
          nl: "Welke pterosauriër had de kenmerkende grote botkam op zijn hoofd?"
        },
        options: [
          { en: "Pteranodon", es: "Pteranodon", de: "Pteranodon", nl: "Pteranodon" },
          { en: "Rhamphorhynchus", es: "Rhamphorhynchus", de: "Rhamphorhynchus", nl: "Rhamphorhynchus" },
          { en: "Archaeopteryx", es: "Archaeopteryx", de: "Archaeopteryx", nl: "Archaeopteryx" },
          { en: "Dimorphodon", es: "Dimorphodon", de: "Dimorphodon", nl: "Dimorphodon" }
        ],
        correct: 0,
        explanation: {
          en: "Pteranodon is famous for its large, backwards-pointing bony crest that could extend up to 90 cm long, likely used for display and flight balance.",
          es: "Pteranodon es famoso por su gran cresta ósea que apunta hacia atrás que podía extenderse hasta 90 cm de largo, probablemente usada para exhibición y equilibrio de vuelo.",
          de: "Pteranodon ist berühmt für seinen großen, nach hinten zeigenden Knochenkamm, der bis zu 90 cm lang werden konnte und wahrscheinlich für Zurschaustellung und Flugbalance verwendet wurde.",
          nl: "Pteranodon is beroemd om zijn grote, naar achteren wijzende botkam die wel 90 cm lang kon worden, waarschijnlijk gebruikt voor vertoon en vliegbalans."
        }
      },
      {
        question: {
          en: "What is the main difference between early and late pterosaurs?",
          es: "¿Cuál es la principal diferencia entre pterosaurios tempranos y tardíos?",
          de: "Was ist der Hauptunterschied zwischen frühen und späten Pterosauriern?",
          nl: "Wat is het hoofdverschil tussen vroege en late pterosauriërs?"
        },
        options: [
          { en: "Early pterosaurs had long tails, late pterosaurs had short tails", es: "Los pterosaurios tempranos tenían colas largas, los tardíos tenían colas cortas", de: "Frühe Pterosaurier hatten lange Schwänze, späte Pterosaurier hatten kurze Schwänze", nl: "Vroege pterosauriërs hadden lange staarten, late pterosauriërs hadden korte staarten" },
          { en: "Early pterosaurs were bigger than late ones", es: "Los pterosaurios tempranos eran más grandes que los tardíos", de: "Frühe Pterosaurier waren größer als späte", nl: "Vroege pterosauriërs waren groter dan late" },
          { en: "Early pterosaurs couldn't fly", es: "Los pterosaurios tempranos no podían volar", de: "Frühe Pterosaurier konnten nicht fliegen", nl: "Vroege pterosauriërs konden niet vliegen" },
          { en: "Early pterosaurs lived in water", es: "Los pterosaurios tempranos vivían en el agua", de: "Frühe Pterosaurier lebten im Wasser", nl: "Vroege pterosauriërs leefden in water" }
        ],
        correct: 0,
        explanation: {
          en: "Early pterosaurs (rhamphorhynchoids) had long tails with diamond-shaped tips, while later pterosaurs (pterodactyloids) had very short tails or no tails at all.",
          es: "Los pterosaurios tempranos (ramphorínquidos) tenían colas largas con puntas en forma de diamante, mientras que los pterosaurios posteriores (pterodactiloides) tenían colas muy cortas o no tenían cola en absoluto.",
          de: "Frühe Pterosaurier (Rhamphorhynchoidea) hatten lange Schwänze mit diamantförmigen Spitzen, während spätere Pterosaurier (Pterodactyloidea) sehr kurze Schwänze oder gar keine Schwänze hatten.",
          nl: "Vroege pterosauriërs (rhamphorhynchoiden) hadden lange staarten met ruitvormige uiteinden, terwijl latere pterosauriërs (pterodactyloiden) zeer korte staarten of helemaal geen staarten hadden."
        }
      },
      {
        question: {
          en: "How did pterosaurs control their flight direction?",
          es: "¿Cómo controlaban los pterosaurios la dirección de su vuelo?",
          de: "Wie kontrollierten Pterosaurier ihre Flugrichtung?",
          nl: "Hoe controleerden pterosauriërs hun vliegrichting?"
        },
        options: [
          { en: "By adjusting their wing shape and tail position", es: "Ajustando la forma de sus alas y la posición de la cola", de: "Durch Anpassen ihrer Flügelform und Schwanzposition", nl: "Door hun vleugelvorm en staartpositie aan te passen" },
          { en: "By breathing fire to change direction", es: "Respirando fuego para cambiar de dirección", de: "Durch Feuerspeien um die Richtung zu ändern", nl: "Door vuur te ademen om van richting te veranderen" },
          { en: "By swimming through the air", es: "Nadando a través del aire", de: "Durch Schwimmen durch die Luft", nl: "Door door de lucht te zwemmen" },
          { en: "By using magnetic navigation only", es: "Usando solo navegación magnética", de: "Nur durch magnetische Navigation", nl: "Alleen door magnetische navigatie te gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs controlled their flight by changing their wing shape, angle, and position, and by using their tail (in early species) as a rudder for steering and stability.",
          es: "Los pterosaurios controlaban su vuelo cambiando la forma, ángulo y posición de sus alas, y usando su cola (en especies tempranas) como timón para dirigirse y mantener estabilidad.",
          de: "Pterosaurier kontrollierten ihren Flug durch Änderung ihrer Flügelform, -winkel und -position und durch Verwendung ihres Schwanzes (bei frühen Arten) als Ruder für Steuerung und Stabilität.",
          nl: "Pterosauriërs controleerden hun vlucht door hun vleugelvorm, hoek en positie te veranderen, en door hun staart (bij vroege soorten) als roer te gebruiken voor sturing en stabiliteit."
        }
      },
      {
        question: {
          en: "What type of teeth did fish-eating pterosaurs typically have?",
          es: "¿Qué tipo de dientes tenían típicamente los pterosaurios que comían peces?",
          de: "Welche Art von Zähnen hatten fischfressende Pterosaurier typischerweise?",
          nl: "Wat voor soort tanden hadden vissetende pterosauriërs typisch?"
        },
        options: [
          { en: "Long, sharp, pointed teeth for catching fish", es: "Dientes largos, afilados y puntiagudos para atrapar peces", de: "Lange, scharfe, spitze Zähne zum Fischfang", nl: "Lange, scherpe, puntige tanden voor het vangen van vis" },
          { en: "Flat grinding teeth", es: "Dientes planos para moler", de: "Flache Mahlzähne", nl: "Platte maaltanden" },
          { en: "No teeth at all", es: "Sin dientes en absoluto", de: "Gar keine Zähne", nl: "Helemaal geen tanden" },
          { en: "Saw-like cutting teeth", es: "Dientes cortantes como sierra", de: "Sägenartige Schneidezähne", nl: "Zaagachtige snijdtanden" }
        ],
        correct: 0,
        explanation: {
          en: "Fish-eating pterosaurs like Pteranodon and Anhanguera had long, sharp, needle-like teeth that were perfect for catching and holding slippery fish while flying or skimming water surfaces.",
          es: "Los pterosaurios comedores de peces como Pteranodon y Anhanguera tenían dientes largos, afilados y parecidos a agujas que eran perfectos para atrapar y sostener peces resbaladizos mientras volaban o rozaban superficies de agua.",
          de: "Fischfressende Pterosaurier wie Pteranodon und Anhanguera hatten lange, scharfe, nadelartige Zähne, die perfekt zum Fangen und Festhalten glitschiger Fische während des Fluges oder beim Gleiten über Wasseroberflächen waren.",
          nl: "Vissetende pterosauriërs zoals Pteranodon en Anhanguera hadden lange, scherpe, naaldachtige tanden die perfect waren voor het vangen en vasthouden van glibberige vissen tijdens het vliegen of scheren over wateroppervlakken."
        }
      },
      {
        question: {
          en: "What was unique about pterosaur bone structure compared to other reptiles?",
          es: "¿Qué era único sobre la estructura ósea de los pterosaurios comparada con otros reptiles?",
          de: "Was war einzigartig an der Knochenstruktur der Pterosaurier im Vergleich zu anderen Reptilien?",
          nl: "Wat was uniek aan de botstructuur van pterosauriërs vergeleken met andere reptielen?"
        },
        options: [
          { en: "They had hollow, air-filled bones like birds", es: "Tenían huesos huecos llenos de aire como las aves", de: "Sie hatten hohle, luftgefüllte Knochen wie Vögel", nl: "Ze hadden holle, met lucht gevulde botten zoals vogels" },
          { en: "Their bones were made of metal", es: "Sus huesos estaban hechos de metal", de: "Ihre Knochen bestanden aus Metall", nl: "Hun botten waren gemaakt van metaal" },
          { en: "They had extra thick bones", es: "Tenían huesos extra gruesos", de: "Sie hatten extra dicke Knochen", nl: "Ze hadden extra dikke botten" },
          { en: "Their bones could bend like rubber", es: "Sus huesos podían doblarse como goma", de: "Ihre Knochen konnten sich wie Gummi biegen", nl: "Hun botten konden buigen als rubber" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs had pneumatic bones - hollow bones filled with air spaces connected to their respiratory system, making them extremely lightweight while maintaining strength for flight.",
          es: "Los pterosaurios tenían huesos neumáticos - huesos huecos llenos de espacios de aire conectados a su sistema respiratorio, haciéndolos extremadamente ligeros mientras mantenían la fuerza para el vuelo.",
          de: "Pterosaurier hatten pneumatische Knochen - hohle Knochen voller Lufträume, die mit ihrem Atmungssystem verbunden waren, was sie extrem leicht machte, während sie die Stärke für den Flug beibehielten.",
          nl: "Pterosauriërs hadden pneumatische botten - holle botten vol luchtkamers verbonden met hun ademhalingssysteem, waardoor ze extreem licht waren terwijl ze de sterkte voor vliegen behielden."
        }
      },
      {
        question: {
          en: "Which pterosaur is known for having a long tail with a diamond-shaped vane at the end?",
          es: "¿Qué pterosaurio es conocido por tener una cola larga con una veleta en forma de diamante al final?",
          de: "Welcher Pterosaurier ist bekannt für einen langen Schwanz mit einer diamantförmigen Fahne am Ende?",
          nl: "Welke pterosauriër staat bekend om zijn lange staart met een ruitvormige waaier aan het einde?"
        },
        options: [
          { en: "Rhamphorhynchus", es: "Rhamphorhynchus", de: "Rhamphorhynchus", nl: "Rhamphorhynchus" },
          { en: "Quetzalcoatlus", es: "Quetzalcoatlus", de: "Quetzalcoatlus", nl: "Quetzalcoatlus" },
          { en: "Pteranodon", es: "Pteranodon", de: "Pteranodon", nl: "Pteranodon" },
          { en: "Tapejara", es: "Tapejara", de: "Tapejara", nl: "Tapejara" }
        ],
        correct: 0,
        explanation: {
          en: "Rhamphorhynchus had a distinctive long tail ending in a diamond-shaped vane that helped with flight stability and steering, typical of early pterosaurs (rhamphorhynchoids).",
          es: "Rhamphorhynchus tenía una distintiva cola larga que terminaba en una veleta en forma de diamante que ayudaba con la estabilidad del vuelo y la dirección, típico de pterosaurios tempranos (ramphorínquidos).",
          de: "Rhamphorhynchus hatte einen charakteristischen langen Schwanz, der in einer diamantförmigen Fahne endete, die bei der Flugstabilität und Steuerung half, typisch für frühe Pterosaurier (Rhamphorhynchoidea).",
          nl: "Rhamphorhynchus had een kenmerkende lange staart eindigend in een ruitvormige waaier die hielp bij vliegstabiliteit en besturing, typisch voor vroege pterosauriërs (rhamphorhynchoiden)."
        }
      },
      {
        question: {
          en: "How did pterosaurs likely feed their young?",
          es: "¿Cómo alimentaban probablemente los pterosaurios a sus crías?",
          de: "Wie fütterten Pterosaurier wahrscheinlich ihre Jungen?",
          nl: "Hoe voedden pterosauriërs waarschijnlijk hun jongen?"
        },
        options: [
          { en: "By regurgitating food directly into their mouths", es: "Regurgitando comida directamente en sus bocas", de: "Durch Auswürgen von Nahrung direkt in ihre Mäuler", nl: "Door voedsel direct in hun bekken op te geven" },
          { en: "By producing milk like mammals", es: "Produciendo leche como los mamíferos", de: "Durch Milchproduktion wie Säugetiere", nl: "Door melk te produceren zoals zoogdieren" },
          { en: "Young pterosaurs never ate food", es: "Los pterosaurios jóvenes nunca comían comida", de: "Junge Pterosaurier fraßen nie Nahrung", nl: "Jonge pterosauriërs aten nooit voedsel" },
          { en: "By teaching them to hunt immediately", es: "Enseñándoles a cazar inmediatamente", de: "Durch sofortiges Jagdtraining", nl: "Door hen meteen te leren jagen" }
        ],
        correct: 0,
        explanation: {
          en: "Like modern birds and crocodiles, pterosaur parents likely fed their young by regurgitating partially digested food directly into their beaks, providing essential nutrients for rapid growth.",
          es: "Como las aves y cocodrilos modernos, los padres pterosaurio probablemente alimentaban a sus crías regurgitando comida parcialmente digerida directamente en sus picos, proporcionando nutrientes esenciales para el crecimiento rápido.",
          de: "Wie moderne Vögel und Krokodile fütterten Pterosaurier-Eltern wahrscheinlich ihre Jungen durch Auswürgen teilweise verdauter Nahrung direkt in ihre Schnäbel, um wesentliche Nährstoffe für schnelles Wachstum zu liefern.",
          nl: "Net als moderne vogels en krokodillen voedden pterosauriër ouders waarschijnlijk hun jongen door gedeeltelijk verteerd voedsel direct in hun snavels op te geven, wat essentiële voedingsstoffen voor snelle groei verschafte."
        }
      },
      {
        question: {
          en: "What advantage did pterosaur wing membranes have over feathered wings?",
          es: "¿Qué ventaja tenían las membranas alares de los pterosaurios sobre las alas emplumadas?",
          de: "Welchen Vorteil hatten Pterosaurier-Flügelmembranen gegenüber gefiederten Flügeln?",
          nl: "Welk voordeel hadden pterosauriër vleugelmembranen ten opzichte van gevederde vleugels?"
        },
        options: [
          { en: "They could heal quickly from small tears and holes", es: "Podían sanar rápidamente de pequeños desgarros y agujeros", de: "Sie konnten schnell von kleinen Rissen und Löchern heilen", nl: "Ze konden snel genezen van kleine scheuren en gaten" },
          { en: "They were completely waterproof", es: "Eran completamente impermeables", de: "Sie waren völlig wasserdicht", nl: "Ze waren volledig waterdicht" },
          { en: "They could change color instantly", es: "Podían cambiar de color instantáneamente", de: "Sie konnten sofort ihre Farbe ändern", nl: "Ze konden onmiddellijk van kleur veranderen" },
          { en: "They were much heavier and stronger", es: "Eran mucho más pesadas y fuertes", de: "Sie waren viel schwerer und stärker", nl: "Ze waren veel zwaarder en sterker" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaur wing membranes were made of living tissue with blood vessels and could repair themselves from minor damage, unlike feathers which need to be completely regrown if damaged.",
          es: "Las membranas alares de pterosaurio estaban hechas de tejido vivo con vasos sanguíneos y podían repararse de daños menores, a diferencia de las plumas que necesitan regenerarse completamente si se dañan.",
          de: "Pterosaurier-Flügelmembranen bestanden aus lebendem Gewebe mit Blutgefäßen und konnten sich selbst von geringfügigen Schäden reparieren, im Gegensatz zu Federn, die bei Beschädigung völlig nachwachsen müssen.",
          nl: "Pterosauriër vleugelmembranen waren gemaakt van levend weefsel met bloedvaten en konden zichzelf herstellen van kleine schade, in tegenstelling tot veren die volledig opnieuw moeten groeien als ze beschadigd zijn."
        }
      },
      {
        question: {
          en: "Which body part helped pterosaurs walk on the ground when not flying?",
          es: "¿Qué parte del cuerpo ayudaba a los pterosaurios a caminar en el suelo cuando no volaban?",
          de: "Welcher Körperteil half Pterosauriern beim Gehen am Boden, wenn sie nicht flogen?",
          nl: "Welk lichaamsdeel help pterosauriërs om op de grond te lopen wanneer ze niet vlogen?"
        },
        options: [
          { en: "Their wing claws (first three fingers)", es: "Las garras de sus alas (primeros tres dedos)", de: "Ihre Flügelkrallen (erste drei Finger)", nl: "Hun vleugel klauwen (eerste drie vingers)" },
          { en: "Their tail that dragged behind them", es: "Su cola que arrastraban detrás", de: "Ihr Schwanz, den sie hinter sich herschleiften", nl: "Hun staart die achter hen sleepte" },
          { en: "They never walked, only flew", es: "Nunca caminaban, solo volaban", de: "Sie liefen nie, flogen nur", nl: "Ze liepen nooit, vlogen alleen" },
          { en: "Special wheels on their feet", es: "Ruedas especiales en sus pies", de: "Spezielle Räder an ihren Füßen", nl: "Speciale wielen aan hun voeten" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs used the first three fingers of each hand, which had sharp claws, to help support their weight when walking on all fours while their fourth finger supported the wing membrane.",
          es: "Los pterosaurios usaban los primeros tres dedos de cada mano, que tenían garras afiladas, para ayudar a soportar su peso al caminar en cuatro patas mientras su cuarto dedo sostenía la membrana del ala.",
          de: "Pterosaurier nutzten die ersten drei Finger jeder Hand, die scharfe Krallen hatten, um ihr Gewicht beim Gehen auf allen vieren zu stützen, während ihr vierter Finger die Flügelmembran trug.",
          nl: "Pterosauriërs gebruikten de eerste drie vingers van elke hand, die scherpe klauwen hadden, om hun gewicht te ondersteunen bij het lopen op vier poten terwijl hun vierde vinger het vleugelmembraan ondersteunde."
        }
      },
      {
        question: {
          en: "What did scientists discover about pterosaur brain size?",
          es: "¿Qué descubrieron los científicos sobre el tamaño del cerebro de los pterosaurios?",
          de: "Was entdeckten Wissenschaftler über die Gehirngröße der Pterosaurier?",
          nl: "Wat ontdekten wetenschappers over de hersengrootte van pterosauriërs?"
        },
        options: [
          { en: "They had relatively large brains for complex flight control", es: "Tenían cerebros relativamente grandes para control complejo del vuelo", de: "Sie hatten relativ große Gehirne für komplexe Flugkontrolle", nl: "Ze hadden relatief grote hersenen voor complexe vliegcontrole" },
          { en: "Their brains were smaller than pea-sized", es: "Sus cerebros eran más pequeños que un guisante", de: "Ihre Gehirne waren kleiner als erbsengroß", nl: "Hun hersenen waren kleiner dan erwt-grootte" },
          { en: "They had no brains at all", es: "No tenían cerebro en absoluto", de: "Sie hatten gar keine Gehirne", nl: "Ze hadden helemaal geen hersenen" },
          { en: "Their brains were exactly like fish brains", es: "Sus cerebros eran exactamente como cerebros de peces", de: "Ihre Gehirne waren genau wie Fischgehirne", nl: "Hun hersenen waren precies zoals vissenhersenen" }
        ],
        correct: 0,
        explanation: {
          en: "CT scans of pterosaur skulls show they had well-developed brains with enlarged regions for processing visual information and coordinating the complex movements needed for active flight.",
          es: "Las tomografías de cráneos de pterosaurios muestran que tenían cerebros bien desarrollados con regiones agrandadas para procesar información visual y coordinar los movimientos complejos necesarios para el vuelo activo.",
          de: "CT-Scans von Pterosaurier-Schädeln zeigen, dass sie gut entwickelte Gehirne mit vergrößerten Bereichen zur Verarbeitung visueller Informationen und zur Koordination der komplexen Bewegungen für aktiven Flug hatten.",
          nl: "CT-scans van pterosauriër schedels tonen dat ze goed ontwikkelde hersenen hadden met vergrote gebieden voor het verwerken van visuele informatie en het coördineren van de complexe bewegingen nodig voor actief vliegen."
        }
      },
      {
        question: {
          en: "How did pterosaurs likely sleep or rest?",
          es: "¿Cómo dormían o descansaban probablemente los pterosaurios?",
          de: "Wie schliefen oder ruhten Pterosaurier wahrscheinlich?",
          nl: "Hoe sliepen of rustten pterosauriërs waarschijnlijk?"
        },
        options: [
          { en: "Hanging upside down from cliffs or trees like bats", es: "Colgando boca abajo de acantilados o árboles como murciélagos", de: "Kopfüber hängend von Klippen oder Bäumen wie Fledermäuse", nl: "Ondersteboven hangend aan kliffen of bomen zoals vleermuizen" },
          { en: "Floating on water like ducks", es: "Flotando en el agua como patos", de: "Schwimmend auf dem Wasser wie Enten", nl: "Drijvend op water zoals eenden" },
          { en: "Buried underground like moles", es: "Enterrados bajo tierra como topos", de: "Unter der Erde vergraben wie Maulwürfe", nl: "Begraven ondergronds zoals mollen" },
          { en: "They never slept at all", es: "Nunca dormían en absoluto", de: "Sie schliefen überhaupt nie", nl: "Ze sliepen helemaal nooit" }
        ],
        correct: 0,
        explanation: {
          en: "Like modern bats, pterosaurs likely hung upside down using their hind claws to grip cliff faces, tree branches, or cave ceilings, folding their wings around their bodies for warmth.",
          es: "Como los murciélagos modernos, los pterosaurios probablemente colgaban boca abajo usando sus garras traseras para agarrarse a paredes de acantilados, ramas de árboles o techos de cuevas, plegando sus alas alrededor de sus cuerpos para calentarse.",
          de: "Wie moderne Fledermäuse hingen Pterosaurier wahrscheinlich kopfüber, indem sie ihre Hinterkrallen nutzten, um sich an Klippenwänden, Baumästen oder Höhlendecken festzuhalten, und falteten ihre Flügel um ihre Körper für Wärme.",
          nl: "Net als moderne vleermuizen hingen pterosauriërs waarschijnlijk ondersteboven door hun achterklauwen te gebruiken om zich vast te houden aan klifwanden, boomtakken of grotplafonds, hun vleugels om hun lichamen vouwend voor warmte."
        }
      },
      {
        question: {
          en: "What was special about pterosaur eyesight?",
          es: "¿Qué era especial sobre la vista de los pterosaurios?",
          de: "Was war besonders an der Sehkraft der Pterosaurier?",
          nl: "Wat was speciaal aan het gezichtsvermogen van pterosauriërs?"
        },
        options: [
          { en: "They had excellent vision, better than most modern birds", es: "Tenían excelente visión, mejor que la mayoría de las aves modernas", de: "Sie hatten ausgezeichnetes Sehen, besser als die meisten modernen Vögel", nl: "Ze hadden uitstekend zicht, beter dan de meeste moderne vogels" },
          { en: "They were completely blind", es: "Eran completamente ciegos", de: "Sie waren völlig blind", nl: "Ze waren volledig blind" },
          { en: "They could only see in black and white", es: "Solo podían ver en blanco y negro", de: "Sie konnten nur schwarz-weiß sehen", nl: "Ze konden alleen zwart-wit zien" },
          { en: "Their eyes faced backwards", es: "Sus ojos miraban hacia atrás", de: "Ihre Augen schauten nach hinten", nl: "Hun ogen keken naar achteren" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs had large eyes with excellent vision adapted for spotting prey from great heights while flying, with brain regions dedicated to processing complex visual information for flight navigation.",
          es: "Los pterosaurios tenían ojos grandes con excelente visión adaptada para detectar presas desde grandes alturas mientras volaban, con regiones cerebrales dedicadas a procesar información visual compleja para la navegación de vuelo.",
          de: "Pterosaurier hatten große Augen mit ausgezeichnetem Sehen, das darauf angepasst war, Beute aus großer Höhe während des Fluges zu entdecken, mit Gehirnregionen, die der Verarbeitung komplexer visueller Informationen für die Flugnavigation gewidmet waren.",
          nl: "Pterosauriërs hadden grote ogen met uitstekend zicht aangepast voor het spotten van prooi vanaf grote hoogten tijdens het vliegen, met hersengebieden gewijd aan het verwerken van complexe visuele informatie voor vliegnavigatie."
        }
      },
      {
        question: {
          en: "How did large pterosaurs like Quetzalcoatlus likely hunt?",
          es: "¿Cómo cazaban probablemente los pterosaurios grandes como Quetzalcoatlus?",
          de: "Wie jagten große Pterosaurier wie Quetzalcoatlus wahrscheinlich?",
          nl: "Hoe jaagden grote pterosauriërs zoals Quetzalcoatlus waarschijnlijk?"
        },
        options: [
          { en: "By walking on land and stalking prey like giant storks", es: "Caminando en tierra y acechando presas como cigüeñas gigantes", de: "Durch Gehen an Land und Anpirschen von Beute wie riesige Störche", nl: "Door op land te lopen en prooi te besluipen zoals reuze ooievaars" },
          { en: "By diving underwater like pelicans", es: "Buceando bajo el agua como pelícanos", de: "Durch Tauchen unter Wasser wie Pelikane", nl: "Door onder water te duiken zoals pelikanen" },
          { en: "By spinning webs to catch prey", es: "Tejiendo telarañas para atrapar presas", de: "Durch Spinnen von Netzen zum Beutefang", nl: "Door webben te spinnen om prooi te vangen" },
          { en: "By eating only tree leaves", es: "Comiendo solo hojas de árboles", de: "Durch Fressen nur von Baumblättern", nl: "Door alleen boombladeren te eten" }
        ],
        correct: 0,
        explanation: {
          en: "Large pterosaurs like Quetzalcoatlus were likely terrestrial stalkers, walking on the ground like giant storks or marabous, using their long necks and beaks to probe for small animals, fish, and carrion.",
          es: "Los pterosaurios grandes como Quetzalcoatlus eran probablemente acechadores terrestres, caminando en el suelo como cigüeñas o marabúes gigantes, usando sus cuellos largos y picos para buscar pequeños animales, peces y carroña.",
          de: "Große Pterosaurier wie Quetzalcoatlus waren wahrscheinlich terrestrische Anschleicher, die wie riesige Störche oder Marabus am Boden gingen und ihre langen Hälse und Schnäbel nutzten, um nach kleinen Tieren, Fischen und Aas zu suchen.",
          nl: "Grote pterosauriërs zoals Quetzalcoatlus waren waarschijnlijk terrestrische bejagers, lopend op de grond zoals reuze ooievaars of maraboes, hun lange nekken en snavels gebruikend om te zoeken naar kleine dieren, vissen en aas."
        }
      },
      {
        question: {
          en: "What was the wingspan of the largest confirmed pterosaur?",
          es: "¿Cuál era la envergadura del pterosaurio confirmado más grande?",
          de: "Wie groß war die Flügelspannweite des größten bestätigten Pterosauriers?",
          nl: "Wat was de spanwijdte van de grootste bevestigde pterosauriër?"
        },
        options: [
          { en: "About 10-11 meters (33-36 feet)", es: "Unos 10-11 metros (33-36 pies)", de: "Etwa 10-11 Meter (33-36 Fuß)", nl: "Ongeveer 10-11 meter (33-36 voet)" },
          { en: "About 5 meters (16 feet)", es: "Unos 5 metros (16 pies)", de: "Etwa 5 Meter (16 Fuß)", nl: "Ongeveer 5 meter (16 voet)" },
          { en: "About 20 meters (66 feet)", es: "Unos 20 metros (66 pies)", de: "Etwa 20 Meter (66 Fuß)", nl: "Ongeveer 20 meter (66 voet)" },
          { en: "About 2 meters (6 feet)", es: "Unos 2 metros (6 pies)", de: "Etwa 2 Meter (6 Fuß)", nl: "Ongeveer 2 meter (6 voet)" }
        ],
        correct: 0,
        explanation: {
          en: "Quetzalcoatlus northropi, the largest confirmed pterosaur, had an estimated wingspan of 10-11 meters, making it as wide as a small airplane and one of the largest flying animals ever.",
          es: "Quetzalcoatlus northropi, el pterosaurio confirmado más grande, tenía una envergadura estimada de 10-11 metros, haciéndolo tan ancho como un avión pequeño y uno de los animales voladores más grandes jamás existidos.",
          de: "Quetzalcoatlus northropi, der größte bestätigte Pterosaurier, hatte eine geschätzte Flügelspannweite von 10-11 Metern, was ihn so breit wie ein kleines Flugzeug und zu einem der größten fliegenden Tiere aller Zeiten machte.",
          nl: "Quetzalcoatlus northropi, de grootste bevestigde pterosauriër, had een geschatte spanwijdte van 10-11 meter, waardoor het zo breed was als een klein vliegtuig en een van de grootste vliegende dieren ooit."
        }
      },
      {
        question: {
          en: "How did pterosaurs likely communicate with each other?",
          es: "¿Cómo se comunicaban probablemente los pterosaurios entre sí?",
          de: "Wie kommunizierten Pterosaurier wahrscheinlich miteinander?",
          nl: "Hoe communiceerden pterosauriërs waarschijnlijk met elkaar?"
        },
        options: [
          { en: "Through visual displays, calls, and crest coloring", es: "A través de exhibiciones visuales, llamadas y coloración de cresta", de: "Durch visuelle Darstellungen, Rufe und Kammfärbung", nl: "Door visuele vertoningen, roepen en kamkleuring" },
          { en: "By writing messages in the sand", es: "Escribiendo mensajes en la arena", de: "Durch Schreiben von Nachrichten in den Sand", nl: "Door berichten in het zand te schrijven" },
          { en: "Through telepathic thoughts only", es: "Solo a través de pensamientos telepáticos", de: "Nur durch telepathische Gedanken", nl: "Alleen door telepathische gedachten" },
          { en: "They never communicated at all", es: "Nunca se comunicaban en absoluto", de: "Sie kommunizierten überhaupt nie", nl: "Ze communiceerden helemaal nooit" }
        ],
        correct: 0,
        explanation: {
          en: "Like modern birds and crocodiles, pterosaurs likely communicated through a combination of visual displays using their colorful crests, vocalizations, and body postures to attract mates and establish territory.",
          es: "Como las aves y cocodrilos modernos, los pterosaurios probablemente se comunicaban a través de una combinación de exhibiciones visuales usando sus crestas coloridas, vocalizaciones y posturas corporales para atraer parejas y establecer territorio.",
          de: "Wie moderne Vögel und Krokodile kommunizierten Pterosaurier wahrscheinlich durch eine Kombination aus visuellen Darstellungen mit ihren farbigen Kämmen, Lautäußerungen und Körperhaltungen, um Partner anzulocken und Territorium zu etablieren.",
          nl: "Net als moderne vogels en krokodillen communiceerden pterosauriërs waarschijnlijk door een combinatie van visuele vertoningen met hun kleurrijke kammen, geluiden en lichaamshoudingen om partners aan te trekken en territorium te vestigen."
        }
      },
      {
        question: {
          en: "What type of eggs did pterosaurs lay?",
          es: "¿Qué tipo de huevos ponían los pterosaurios?",
          de: "Welche Art von Eiern legten Pterosaurier?",
          nl: "Wat voor soort eieren legden pterosauriërs?"
        },
        options: [
          { en: "Soft, leathery eggs like modern reptiles", es: "Huevos suaves y correosos como los reptiles modernos", de: "Weiche, ledrige Eier wie moderne Reptilien", nl: "Zachte, leerachtige eieren zoals moderne reptielen" },
          { en: "Hard, calcified eggs like birds", es: "Huevos duros y calcificados como las aves", de: "Harte, verkalkte Eier wie Vögel", nl: "Harde, verkalkte eieren zoals vogels" },
          { en: "Glass eggs that were transparent", es: "Huevos de vidrio que eran transparentes", de: "Glaseier, die durchsichtig waren", nl: "Glazen eieren die doorzichtig waren" },
          { en: "No eggs - they gave birth to live young", es: "Sin huevos - daban a luz crías vivas", de: "Keine Eier - sie brachten lebende Junge zur Welt", nl: "Geen eieren - ze brachten levende jongen ter wereld" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaur eggs were soft and leathery like those of modern lizards and crocodiles, not hard like bird eggs. The soft shells allowed the developing embryos to absorb calcium from the environment.",
          es: "Los huevos de pterosaurio eran suaves y correosos como los de lagartos y cocodrilos modernos, no duros como los huevos de aves. Las cáscaras suaves permitían que los embriones en desarrollo absorbieran calcio del ambiente.",
          de: "Pterosaurier-Eier waren weich und ledrig wie die von modernen Echsen und Krokodilen, nicht hart wie Vogeleier. Die weichen Schalen erlaubten es den sich entwickelnden Embryonen, Kalzium aus der Umgebung aufzunehmen.",
          nl: "Pterosauriër eieren waren zacht en leerachtig zoals die van moderne hagedissen en krokodillen, niet hard zoals vogeleieren. De zachte schalen stelden de ontwikkelende embryo's in staat om calcium uit de omgeving op te nemen."
        }
      },
      {
        question: {
          en: "Which time period saw the greatest diversity of pterosaur species?",
          es: "¿Qué período de tiempo vio la mayor diversidad de especies de pterosaurios?",
          de: "In welcher Zeitperiode gab es die größte Vielfalt an Pterosaurier-Arten?",
          nl: "In welke tijdperiode was er de grootste diversiteit aan pterosauriër soorten?"
        },
        options: [
          { en: "Cretaceous period", es: "Período Cretácico", de: "Kreidezeit", nl: "Krijttijd" },
          { en: "Triassic period", es: "Período Triásico", de: "Trias", nl: "Trias" },
          { en: "Jurassic period", es: "Período Jurásico", de: "Jura", nl: "Jura" },
          { en: "Permian period", es: "Período Pérmico", de: "Perm", nl: "Perm" }
        ],
        correct: 0,
        explanation: {
          en: "The Cretaceous period (145-66 million years ago) saw the highest diversity of pterosaur species, with many different sizes, feeding strategies, and crest shapes evolving before their final extinction.",
          es: "El período Cretácico (145-66 millones de años) vio la mayor diversidad de especies de pterosaurios, con muchos tamaños diferentes, estrategias de alimentación y formas de cresta evolucionando antes de su extinción final.",
          de: "Die Kreidezeit (145-66 Millionen Jahre) sah die höchste Vielfalt an Pterosaurier-Arten, mit vielen verschiedenen Größen, Ernährungsstrategien und Kammformen, die vor ihrem endgültigen Aussterben evolvierten.",
          nl: "De Krijttijd (145-66 miljoen jaar geleden) zag de hoogste diversiteit aan pterosauriër soorten, met vele verschillende groottes, voedingsstrategieën en kamvormen die evolueerden voor hun uiteindelijke uitsterven."
        }
      },
      {
        question: {
          en: "What was the primary function of the pteroid bone in pterosaurs?",
          es: "¿Cuál era la función principal del hueso pteroide en los pterosaurios?",
          de: "Was war die Hauptfunktion des Pteroidknochens bei Pterosauriern?",
          nl: "Wat was de primaire functie van het pteroïde bot in pterosauriërs?"
        },
        options: [
          { en: "To support the front edge of the wing membrane", es: "Para soportar el borde frontal de la membrana del ala", de: "Zur Stützung der Vorderkante der Flügelmembran", nl: "Om de voorrand van het vleugelmembraan te ondersteunen" },
          { en: "To help digest fish bones", es: "Para ayudar a digerir espinas de peces", de: "Zum Verdauen von Fischgräten", nl: "Om visgraten te verteren" },
          { en: "To produce sounds for communication", es: "Para producir sonidos para comunicación", de: "Zur Schallerzeugung für Kommunikation", nl: "Om geluiden te produceren voor communicatie" },
          { en: "To store calcium for egg production", es: "Para almacenar calcio para la producción de huevos", de: "Zur Kalziumspeicherung für Eierproduktion", nl: "Om calcium op te slaan voor eierproductie" }
        ],
        correct: 0,
        explanation: {
          en: "The pteroid bone was unique to pterosaurs and extended forward from the wrist to support the propatagium, the front membrane of the wing that helped with flight control and aerodynamics.",
          es: "El hueso pteroide era único de los pterosaurios y se extendía hacia adelante desde la muñeca para soportar el propatagium, la membrana frontal del ala que ayudaba con el control del vuelo y la aerodinámica.",
          de: "Der Pteroidknochen war einzigartig für Pterosaurier und erstreckte sich vom Handgelenk nach vorne, um das Propatagium zu stützen, die vordere Membran des Flügels, die bei Flugkontrolle und Aerodynamik half.",
          nl: "Het pteroïde bot was uniek voor pterosauriërs en strekte zich naar voren uit vanaf de pols om het propatagium te ondersteunen, het voormembraan van de vleugel dat hielp bij vliegcontrole en aerodynamica."
        }
      },
      {
        question: {
          en: "Which pterosaur had distinctive forward-pointing teeth and a long tail?",
          es: "¿Qué pterosaurio tenía dientes distintivos que apuntaban hacia adelante y una cola larga?",
          de: "Welcher Pterosaurier hatte charakteristische nach vorne gerichtete Zähne und einen langen Schwanz?",
          nl: "Welke pterosauriër had kenmerkende naar voren wijzende tanden en een lange staart?"
        },
        options: [
          { en: "Rhamphorhynchus", es: "Rhamphorhynchus", de: "Rhamphorhynchus", nl: "Rhamphorhynchus" },
          { en: "Pteranodon", es: "Pteranodon", de: "Pteranodon", nl: "Pteranodon" },
          { en: "Quetzalcoatlus", es: "Quetzalcoatlus", de: "Quetzalcoatlus", nl: "Quetzalcoatlus" },
          { en: "Tupandactylus", es: "Tupandactylus", de: "Tupandactylus", nl: "Tupandactylus" }
        ],
        correct: 0,
        explanation: {
          en: "Rhamphorhynchus was one of the most well-known early pterosaurs, characterized by its forward-pointing needle-like teeth for catching fish and its distinctive long tail with a diamond-shaped tip.",
          es: "Rhamphorhynchus fue uno de los pterosaurios tempranos más conocidos, caracterizado por sus dientes como agujas que apuntaban hacia adelante para atrapar peces y su distintiva cola larga con punta en forma de diamante.",
          de: "Rhamphorhynchus war einer der bekanntesten frühen Pterosaurier, charakterisiert durch seine nach vorne gerichteten nadelartigen Zähne zum Fischfang und seinen charakteristischen langen Schwanz mit diamantförmiger Spitze.",
          nl: "Rhamphorhynchus was een van de bekendste vroege pterosauriërs, gekenmerkt door zijn naar voren wijzende naaldachtige tanden voor het vangen van vis en zijn kenmerkende lange staart met ruitvormige punt."
        }
      },
      {
        question: {
          en: "How did pterosaurs likely navigate during long-distance flights?",
          es: "¿Cómo navegaban probablemente los pterosaurios durante vuelos de larga distancia?",
          de: "Wie navigierten Pterosaurier wahrscheinlich bei Langstreckenflügen?",
          nl: "Hoe navigeerden pterosauriërs waarschijnlijk tijdens lange vluchten?"
        },
        options: [
          { en: "Using landmarks, coastlines, and possibly magnetic fields", es: "Usando puntos de referencia, costas y posiblemente campos magnéticos", de: "Mit Landmarken, Küstenlinien und möglicherweise Magnetfeldern", nl: "Met behulp van oriëntatiepunten, kustlijnen en mogelijk magnetische velden" },
          { en: "Following other pterosaurs only", es: "Siguiendo solo a otros pterosaurios", de: "Nur anderen Pterosauriern folgend", nl: "Alleen andere pterosauriërs volgend" },
          { en: "Using echolocation like bats", es: "Usando ecolocalización como los murciélagos", de: "Mit Echoortung wie Fledermäuse", nl: "Met echolocatie zoals vleermuizen" },
          { en: "They never flew long distances", es: "Nunca volaron largas distancias", de: "Sie flogen nie lange Strecken", nl: "Ze vlogen nooit lange afstanden" }
        ],
        correct: 0,
        explanation: {
          en: "Large pterosaurs likely navigated using visual landmarks like coastlines and mountain ranges, and possibly had magnetic field sensing abilities similar to modern migratory birds for long-distance navigation.",
          es: "Los pterosaurios grandes probablemente navegaban usando puntos de referencia visuales como costas y cordilleras, y posiblemente tenían habilidades de detección de campos magnéticos similares a las aves migratorias modernas para navegación de larga distancia.",
          de: "Große Pterosaurier navigierten wahrscheinlich mit visuellen Landmarken wie Küstenlinien und Bergketten und hatten möglicherweise Magnetfeldwahrnehmungsfähigkeiten ähnlich modernen Zugvögeln für Langstreckennavigation.",
          nl: "Grote pterosauriërs navigeerden waarschijnlijk met visuele oriëntatiepunten zoals kustlijnen en bergketens, en hadden mogelijk magnetische velddetectie vergelijkbaar met moderne trekvogels voor lange-afstand navigatie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();