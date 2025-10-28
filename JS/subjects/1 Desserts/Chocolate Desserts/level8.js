// Chocolate Desserts Quiz - Level 8: Artisan Chocolate Crafting
(function() {
  const level8 = {
    name: {
      en: "Artisan Chocolate Crafting",
      es: "Elaboración Artesanal de Chocolate",
      de: "Handwerkliche Schokoladenherstellung",
      nl: "Ambachtelijke Chocoladebereiding"
    },
    questions: [
      {
        question: {
          en: "What is the process of making chocolate directly from cacao beans called?",
          es: "¿Cómo se llama el proceso de hacer chocolate directamente de granos de cacao?",
          de: "Wie heißt der Prozess der direkten Schokoladenherstellung aus Kakaobohnen?",
          nl: "Hoe heet het proces van chocolade maken direct van cacaobonen?"
        },
        options: [
          { en: "Bean-to-bar", es: "Del grano a la barra", de: "Bean-to-Bar", nl: "Bean-to-bar" },
          { en: "Field-to-finish", es: "Del campo al acabado", de: "Feld-zu-Fertig", nl: "Veld-tot-afwerking" },
          { en: "Farm-to-table", es: "De la granja a la mesa", de: "Hof-zu-Tisch", nl: "Boerderij-tot-tafel" },
          { en: "Seed-to-sweet", es: "De la semilla al dulce", de: "Samen-zu-Süß", nl: "Zaad-tot-zoet" }
        ],
        correct: 0,
        explanation: {
          en: "Bean-to-bar is the artisan process where chocolate makers control every step from raw cacao beans to finished chocolate bars, ensuring quality and unique flavor profiles.",
          es: "Del grano a la barra es el proceso artesanal donde los chocolateros controlan cada paso desde los granos de cacao crudos hasta las barras de chocolate terminadas, asegurando calidad y perfiles de sabor únicos.",
          de: "Bean-to-Bar ist der handwerkliche Prozess, bei dem Schokoladenhersteller jeden Schritt von rohen Kakaobohnen bis zu fertigen Schokoladentafeln kontrollieren und Qualität und einzigartige Geschmacksprofile gewährleisten.",
          nl: "Bean-to-bar is het ambachtelijke proces waarbij chocolademakers elke stap controleren van rauwe cacaobonen tot afgewerkte chocoladerepen, kwaliteit en unieke smaakprofielen garanderend."
        }
      },
      {
        question: {
          en: "What is the optimal moisture content for cacao beans before roasting?",
          es: "¿Cuál es el contenido de humedad óptimo para los granos de cacao antes del tostado?",
          de: "Was ist der optimale Feuchtigkeitsgehalt für Kakaobohnen vor dem Rösten?",
          nl: "Wat is het optimale vochtgehalte voor cacaobonen voor het roosten?"
        },
        options: [
          { en: "5-7%", es: "5-7%", de: "5-7%", nl: "5-7%" },
          { en: "8-10%", es: "8-10%", de: "8-10%", nl: "8-10%" },
          { en: "12-15%", es: "12-15%", de: "12-15%", nl: "12-15%" },
          { en: "18-20%", es: "18-20%", de: "18-20%", nl: "18-20%" }
        ],
        correct: 0,
        explanation: {
          en: "Cacao beans should have 5-7% moisture content before roasting. This low moisture ensures even roasting and prevents beans from becoming tough or developing off-flavors.",
          es: "Los granos de cacao deben tener 5-7% de contenido de humedad antes del tostado. Esta baja humedad asegura un tostado uniforme y previene que los granos se vuelvan duros o desarrollen sabores extraños.",
          de: "Kakaobohnen sollten vor dem Rösten einen Feuchtigkeitsgehalt von 5-7% haben. Diese niedrige Feuchtigkeit gewährleistet gleichmäßiges Rösten und verhindert, dass die Bohnen zäh werden oder Fehlaromen entwickeln.",
          nl: "Cacaobonen moeten 5-7% vochtgehalte hebben voor het roosten. Dit lage vocht zorgt voor gelijkmatig roosten en voorkomt dat bonen taai worden of verkeerde smaken ontwikkelen."
        }
      },
      {
        question: {
          en: "Which cacao variety is known for its fine flavor and represents only 5% of world production?",
          es: "¿Qué variedad de cacao es conocida por su sabor fino y representa solo el 5% de la producción mundial?",
          de: "Welche Kakaosorte ist für ihren feinen Geschmack bekannt und macht nur 5% der Weltproduktion aus?",
          nl: "Welke cacaovariant is bekend om zijn fijne smaak en vertegenwoordigt slechts 5% van de wereldproductie?"
        },
        options: [
          { en: "Forastero", es: "Forastero", de: "Forastero", nl: "Forastero" },
          { en: "Trinitario", es: "Trinitario", de: "Trinitario", nl: "Trinitario" },
          { en: "Criollo", es: "Criollo", de: "Criollo", nl: "Criollo" },
          { en: "Nacional", es: "Nacional", de: "Nacional", nl: "Nacional" }
        ],
        correct: 2,
        explanation: {
          en: "Criollo is the rarest and most prized cacao variety, known for its complex, delicate flavors. It represents only about 5% of global cacao production due to its low yield and susceptibility to disease.",
          es: "Criollo es la variedad de cacao más rara y preciada, conocida por sus sabores complejos y delicados. Representa solo alrededor del 5% de la producción mundial de cacao debido a su bajo rendimiento y susceptibilidad a enfermedades.",
          de: "Criollo ist die seltenste und geschätzteste Kakaosorte, bekannt für ihre komplexen, delikaten Aromen. Sie macht nur etwa 5% der globalen Kakaoproduktion aus aufgrund ihrer niedrigen Erträge und Krankheitsanfälligkeit.",
          nl: "Criollo is de zeldzaamste en meest gewaardeerde cacaovariant, bekend om zijn complexe, delicate smaken. Het vertegenwoordigt slechts ongeveer 5% van de wereldwijde cacaoproductie vanwege lage opbrengst en ziektegevoeligheid."
        }
      },
      {
        question: {
          en: "What is the traditional grinding stone used in Mexican chocolate making called?",
          es: "¿Cómo se llama la piedra de moler tradicional usada en la elaboración de chocolate mexicano?",
          de: "Wie heißt der traditionelle Mahlstein in der mexikanischen Schokoladenherstellung?",
          nl: "Hoe heet de traditionele maalsteen gebruikt in Mexicaanse chocolademaking?"
        },
        options: [
          { en: "Molcajete", es: "Molcajete", de: "Molcajete", nl: "Molcajete" },
          { en: "Metate", es: "Metate", de: "Metate", nl: "Metate" },
          { en: "Comal", es: "Comal", de: "Comal", nl: "Comal" },
          { en: "Tejolote", es: "Tejolote", de: "Tejolote", nl: "Tejolote" }
        ],
        correct: 1,
        explanation: {
          en: "A metate is a traditional Mexican grinding stone used to process cacao beans into chocolate. It consists of a large stone slab with a smaller cylindrical stone roller.",
          es: "Un metate es una piedra de moler tradicional mexicana usada para procesar granos de cacao en chocolate. Consiste en una gran losa de piedra con un rodillo cilíndrico de piedra más pequeño.",
          de: "Ein Metate ist ein traditioneller mexikanischer Mahlstein zur Verarbeitung von Kakaobohnen zu Schokolade. Er besteht aus einer großen Steinplatte mit einer kleineren zylindrischen Steinwalze.",
          nl: "Een metate is een traditionele Mexicaanse maalsteen gebruikt om cacaobonen te verwerken tot chocolade. Het bestaat uit een grote stenen plaat met een kleinere cilindrische stenen roller."
        }
      },
      {
        question: {
          en: "What is the ideal particle size for smooth chocolate after refining?",
          es: "¿Cuál es el tamaño ideal de partícula para chocolate suave después del refinado?",
          de: "Was ist die ideale Partikelgröße für glatte Schokolade nach dem Raffinieren?",
          nl: "Wat is de ideale deeltjesgrootte voor gladde chocolade na verfijning?"
        },
        options: [
          { en: "10-15 microns", es: "10-15 micrones", de: "10-15 Mikron", nl: "10-15 micron" },
          { en: "20-25 microns", es: "20-25 micrones", de: "20-25 Mikron", nl: "20-25 micron" },
          { en: "30-35 microns", es: "30-35 micrones", de: "30-35 Mikron", nl: "30-35 micron" },
          { en: "40-50 microns", es: "40-50 micrones", de: "40-50 Mikron", nl: "40-50 micron" }
        ],
        correct: 1,
        explanation: {
          en: "The ideal particle size for smooth chocolate is 20-25 microns. Particles larger than 30 microns feel gritty on the tongue, while smaller particles can make chocolate too thick.",
          es: "El tamaño ideal de partícula para chocolate suave es 20-25 micrones. Las partículas más grandes de 30 micrones se sienten arenosas en la lengua, mientras que partículas más pequeñas pueden hacer el chocolate demasiado espeso.",
          de: "Die ideale Partikelgröße für glatte Schokolade ist 20-25 Mikron. Partikel größer als 30 Mikron fühlen sich sandig auf der Zunge an, während kleinere Partikel Schokolade zu dick machen können.",
          nl: "De ideale deeltjesgrootte voor gladde chocolade is 20-25 micron. Deeltjes groter dan 30 micron voelen korrelig aan op de tong, terwijl kleinere deeltjes chocolade te dik kunnen maken."
        }
      },
      {
        question: {
          en: "What is the purpose of winnowing in chocolate production?",
          es: "¿Cuál es el propósito del aventado en la producción de chocolate?",
          de: "Was ist der Zweck des Windens in der Schokoladenproduktion?",
          nl: "Wat is het doel van wannen in chocoladeproductie?"
        },
        options: [
          { en: "Removing moisture", es: "Eliminar humedad", de: "Feuchtigkeit entfernen", nl: "Vocht verwijderen" },
          { en: "Separating nibs from shells", es: "Separar puntas de cáscaras", de: "Nibs von Schalen trennen", nl: "Nibs van schillen scheiden" },
          { en: "Adding flavor", es: "Agregar sabor", de: "Geschmack hinzufügen", nl: "Smaak toevoegen" },
          { en: "Cooling beans", es: "Enfriar granos", de: "Bohnen kühlen", nl: "Bonen koelen" }
        ],
        correct: 1,
        explanation: {
          en: "Winnowing separates the valuable cacao nibs from the inedible husks/shells after roasting and cracking. This is typically done using air flow and sieves.",
          es: "El aventado separa las valiosas puntas de cacao de las cáscaras no comestibles después del tostado y agrietado. Esto se hace típicamente usando flujo de aire y tamices.",
          de: "Winden trennt die wertvollen Kakaonibs von den ungenießbaren Schalen nach dem Rösten und Aufbrechen. Dies wird typischerweise mit Luftstrom und Sieben gemacht.",
          nl: "Wannen scheidt de waardevolle cacaonibs van de oneetbare schillen na roosten en kraken. Dit wordt typisch gedaan met luchtstroom en zeven."
        }
      },
      {
        question: {
          en: "What is the minimum cacao percentage required for chocolate to be labeled as 'dark chocolate' in most countries?",
          es: "¿Cuál es el porcentaje mínimo de cacao requerido para que el chocolate sea etiquetado como 'chocolate negro' en la mayoría de países?",
          de: "Was ist der minimale Kakaoanteil, der erforderlich ist, damit Schokolade in den meisten Ländern als 'dunkle Schokolade' bezeichnet werden kann?",
          nl: "Wat is het minimale cacaopercentage vereist voor chocolade om gelabeld te worden als 'pure chocolade' in de meeste landen?"
        },
        options: [
          { en: "35%", es: "35%", de: "35%", nl: "35%" },
          { en: "50%", es: "50%", de: "50%", nl: "50%" },
          { en: "60%", es: "60%", de: "60%", nl: "60%" },
          { en: "70%", es: "70%", de: "70%", nl: "70%" }
        ],
        correct: 0,
        explanation: {
          en: "In most countries, chocolate must contain at least 35% cacao content to be labeled as 'dark chocolate', though premium dark chocolates typically contain 60-85% or more.",
          es: "En la mayoría de países, el chocolate debe contener al menos 35% de contenido de cacao para ser etiquetado como 'chocolate negro', aunque los chocolates negros premium típicamente contienen 60-85% o más.",
          de: "In den meisten Ländern muss Schokolade mindestens 35% Kakaogehalt enthalten, um als 'dunkle Schokolade' bezeichnet zu werden, obwohl Premium-Dunkle Schokoladen typischerweise 60-85% oder mehr enthalten.",
          nl: "In de meeste landen moet chocolade ten minste 35% cacaogehalte bevatten om gelabeld te worden als 'pure chocolade', hoewel premium pure chocolades typisch 60-85% of meer bevatten."
        }
      },
      {
        question: {
          en: "What is the traditional aging process for premium chocolate called?",
          es: "¿Cómo se llama el proceso de envejecimiento tradicional para chocolate premium?",
          de: "Wie heißt der traditionelle Alterungsprozess für Premium-Schokolade?",
          nl: "Hoe heet het traditionele verouderingsproces voor premium chocolade?"
        },
        options: [
          { en: "Maturation", es: "Maduración", de: "Reifung", nl: "Rijping" },
          { en: "Aging", es: "Envejecimiento", de: "Alterung", nl: "Veroudering" },
          { en: "Mellowing", es: "Suavizado", de: "Milde werden", nl: "Verzachting" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "Premium chocolate undergoes maturation, aging, or mellowing - all terms for the process where chocolate develops complex flavors over weeks or months in controlled conditions.",
          es: "El chocolate premium experimenta maduración, envejecimiento o suavizado - todos términos para el proceso donde el chocolate desarrolla sabores complejos durante semanas o meses en condiciones controladas.",
          de: "Premium-Schokolade durchläuft Reifung, Alterung oder Milde werden - alles Begriffe für den Prozess, bei dem Schokolade über Wochen oder Monate unter kontrollierten Bedingungen komplexe Aromen entwickelt.",
          nl: "Premium chocolade ondergaat rijping, veroudering of verzachting - alle termen voor het proces waarbij chocolade complexe smaken ontwikkelt gedurende weken of maanden onder gecontroleerde omstandigheden."
        }
      },
      {
        question: {
          en: "What is the traditional method for hand-tempering chocolate called?",
          es: "¿Cómo se llama el método tradicional para templar chocolate a mano?",
          de: "Wie heißt die traditionelle Methode zum Handtemperieren von Schokolade?",
          nl: "Hoe heet de traditionele methode voor handmatig temperen van chocolade?"
        },
        options: [
          { en: "Tabling", es: "Entablado", de: "Tafeln", nl: "Tafelen" },
          { en: "Seeding", es: "Sembrado", de: "Impfen", nl: "Zaaien" },
          { en: "Stirring", es: "Revuelto", de: "Rühren", nl: "Roeren" },
          { en: "Cooling", es: "Enfriado", de: "Kühlen", nl: "Koelen" }
        ],
        correct: 0,
        explanation: {
          en: "Tabling is the traditional hand-tempering method where melted chocolate is poured onto a marble surface and worked with palette knives until it reaches the proper temperature and crystal structure.",
          es: "El entablado es el método tradicional de templado a mano donde el chocolate derretido se vierte sobre una superficie de mármol y se trabaja con espátulas hasta alcanzar la temperatura apropiada y estructura cristalina.",
          de: "Tafeln ist die traditionelle Handtemperiermethode, bei der geschmolzene Schokolade auf eine Marmoroberfläche gegossen und mit Palettenmessern bearbeitet wird, bis sie die richtige Temperatur und Kristallstruktur erreicht.",
          nl: "Tafelen is de traditionele handmatige temperingmethode waarbij gesmolten chocolade op een marmeren oppervlak wordt gegoten en met palletmessen wordt bewerkt tot het de juiste temperatuur en kristalstructuur bereikt."
        }
      },
      {
        question: {
          en: "What is the optimal room temperature for working with tempered chocolate?",
          es: "¿Cuál es la temperatura ambiente óptima para trabajar con chocolate templado?",
          de: "Was ist die optimale Raumtemperatur für die Arbeit mit temperierter Schokolade?",
          nl: "Wat is de optimale kamertemperatuur voor het werken met getemperde chocolade?"
        },
        options: [
          { en: "15-18°C (59-64°F)", es: "15-18°C (59-64°F)", de: "15-18°C (59-64°F)", nl: "15-18°C (59-64°F)" },
          { en: "18-21°C (64-70°F)", es: "18-21°C (64-70°F)", de: "18-21°C (64-70°F)", nl: "18-21°C (64-70°F)" },
          { en: "22-25°C (72-77°F)", es: "22-25°C (72-77°F)", de: "22-25°C (72-77°F)", nl: "22-25°C (72-77°F)" },
          { en: "26-30°C (79-86°F)", es: "26-30°C (79-86°F)", de: "26-30°C (79-86°F)", nl: "26-30°C (79-86°F)" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal room temperature for working with tempered chocolate is 18-21°C (64-70°F). Higher temperatures can cause chocolate to lose temper, while lower temperatures make it difficult to work with.",
          es: "La temperatura ambiente óptima para trabajar con chocolate templado es 18-21°C (64-70°F). Temperaturas más altas pueden hacer que el chocolate pierda el templado, mientras temperaturas más bajas hacen difícil trabajar con él.",
          de: "Die optimale Raumtemperatur für die Arbeit mit temperierter Schokolade ist 18-21°C (64-70°F). Höhere Temperaturen können dazu führen, dass Schokolade die Temperierung verliert, während niedrigere Temperaturen die Arbeit erschweren.",
          nl: "De optimale kamertemperatuur voor het werken met getemperde chocolade is 18-21°C (64-70°F). Hogere temperaturen kunnen ervoor zorgen dat chocolade zijn tempering verliest, terwijl lagere temperaturen het moeilijk maken om mee te werken."
        }
      },
      {
        question: {
          en: "What is the name of the white coating that can develop on artisan chocolate bars?",
          es: "¿Cuál es el nombre del recubrimiento blanco que puede desarrollarse en barras de chocolate artesanal?",
          de: "Wie heißt der weiße Belag, der sich auf handwerklichen Schokoladentafeln entwickeln kann?",
          nl: "Wat is de naam van de witte laag die kan ontstaan op ambachtelijke chocoladerepen?"
        },
        options: [
          { en: "Bloom", es: "Bloom", de: "Reif", nl: "Uitslag" },
          { en: "Mold", es: "Moho", de: "Schimmel", nl: "Schimmel" },
          { en: "Oxidation", es: "Oxidación", de: "Oxidation", nl: "Oxidatie" },
          { en: "Crystallization", es: "Cristalización", de: "Kristallisation", nl: "Kristallisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Bloom is the white or grayish coating that appears on chocolate due to fat migration (fat bloom) or sugar crystallization (sugar bloom). While it affects appearance, the chocolate is still safe to eat.",
          es: "Bloom es el recubrimiento blanco o grisáceo que aparece en el chocolate debido a migración de grasa (bloom de grasa) o cristalización de azúcar (bloom de azúcar). Aunque afecta la apariencia, el chocolate sigue siendo seguro para comer.",
          de: "Reif ist der weiße oder gräuliche Belag, der auf Schokolade aufgrund von Fettmigration (Fettreif) oder Zuckerkristallisation (Zuckerreif) erscheint. Während es das Aussehen beeinträchtigt, ist die Schokolade noch sicher zu essen.",
          nl: "Uitslag is de witte of grijsachtige laag die op chocolade verschijnt door vetmigratie (vetuitslag) of suikerkristallisatie (suikeruitslag). Hoewel het het uiterlijk beïnvloedt, is de chocolade nog steeds veilig om te eten."
        }
      },
      {
        question: {
          en: "What is the traditional tool for stirring chocolate during conching?",
          es: "¿Cuál es la herramienta tradicional para revolver chocolate durante el conchado?",
          de: "Was ist das traditionelle Werkzeug zum Rühren von Schokolade während des Conchierens?",
          nl: "Wat is het traditionele gereedschap voor het roeren van chocolade tijdens concheren?"
        },
        options: [
          { en: "Conche", es: "Concha", de: "Conche", nl: "Conche" },
          { en: "Melanger", es: "Melangeur", de: "Melangeur", nl: "Melangeur" },
          { en: "Refiner", es: "Refinador", de: "Raffinierer", nl: "Verfijner" },
          { en: "Temperer", es: "Templador", de: "Temperierer", nl: "Tempereerder" }
        ],
        correct: 0,
        explanation: {
          en: "A conche is the traditional machine used for conching chocolate, featuring large granite rollers that continuously mix and aerate the chocolate mass for hours or days.",
          es: "Una concha es la máquina tradicional usada para conchar chocolate, con grandes rodillos de granito que mezclan y airean continuamente la masa de chocolate por horas o días.",
          de: "Eine Conche ist die traditionelle Maschine für das Conchieren von Schokolade, mit großen Granitwalzen, die die Schokoladenmasse stunden- oder tagelang kontinuierlich mischen und belüften.",
          nl: "Een conche is de traditionele machine gebruikt voor het concheren van chocolade, met grote granieten rollen die de chocolademassa urenlang of dagenlang continu mengen en beluchten."
        }
      },
      {
        question: {
          en: "What is the artisan technique of creating textured chocolate surfaces called?",
          es: "¿Cómo se llama la técnica artesanal de crear superficies de chocolate texturizadas?",
          de: "Wie heißt die handwerkliche Technik zur Herstellung strukturierter Schokoladenoberflächen?",
          nl: "Hoe heet de ambachtelijke techniek voor het creëren van getextureerde chocoladeoppervlakken?"
        },
        options: [
          { en: "Airbrushing", es: "Aerografía", de: "Airbrush", nl: "Airbrush" },
          { en: "Enrobing", es: "Bañado", de: "Überziehen", nl: "Overtrekken" },
          { en: "Molding", es: "Moldeado", de: "Formen", nl: "Vormen" },
          { en: "Transfer sheets", es: "Hojas de transferencia", de: "Transferfolien", nl: "Transfervellen" }
        ],
        correct: 3,
        explanation: {
          en: "Transfer sheets are thin films with cocoa butter-based designs that transfer patterns and textures onto chocolate surfaces, creating professional decorative effects.",
          es: "Las hojas de transferencia son películas delgadas con diseños a base de manteca de cacao que transfieren patrones y texturas a superficies de chocolate, creando efectos decorativos profesionales.",
          de: "Transferfolien sind dünne Filme mit kakaobutterbasierten Designs, die Muster und Texturen auf Schokoladenoberflächen übertragen und professionelle dekorative Effekte erzeugen.",
          nl: "Transfervellen zijn dunne films met cacaoboter-gebaseerde ontwerpen die patronen en texturen overbrengen op chocoladeoppervlakken, wat professionele decoratieve effecten creëert."
        }
      },
      {
        question: {
          en: "What is the ideal humidity level for a chocolate workshop?",
          es: "¿Cuál es el nivel de humedad ideal para un taller de chocolate?",
          de: "Was ist die ideale Luftfeuchtigkeit für eine Schokoladenwerkstatt?",
          nl: "Wat is het ideale vochtigheidspercentage voor een chocoladeworkshop?"
        },
        options: [
          { en: "30-40%", es: "30-40%", de: "30-40%", nl: "30-40%" },
          { en: "45-55%", es: "45-55%", de: "45-55%", nl: "45-55%" },
          { en: "60-70%", es: "60-70%", de: "60-70%", nl: "60-70%" },
          { en: "75-85%", es: "75-85%", de: "75-85%", nl: "75-85%" }
        ],
        correct: 1,
        explanation: {
          en: "The ideal humidity for a chocolate workshop is 45-55%. Lower humidity can cause static and dust issues, while higher humidity can cause sugar bloom and condensation problems.",
          es: "La humedad ideal para un taller de chocolate es 45-55%. Humedad más baja puede causar problemas de estática y polvo, mientras humedad más alta puede causar bloom de azúcar y problemas de condensación.",
          de: "Die ideale Luftfeuchtigkeit für eine Schokoladenwerkstatt ist 45-55%. Niedrigere Luftfeuchtigkeit kann statische und Staubprobleme verursachen, während höhere Luftfeuchtigkeit Zuckerreif und Kondensationsprobleme verursachen kann.",
          nl: "De ideale vochtigheid voor een chocoladeworkshop is 45-55%. Lagere vochtigheid kan statische en stofproblemen veroorzaken, terwijl hogere vochtigheid suikeruitslag en condensatieproblemen kan veroorzaken."
        }
      },
      {
        question: {
          en: "What is the purpose of adding cocoa butter to artisan chocolate recipes?",
          es: "¿Cuál es el propósito de agregar manteca de cacao a recetas de chocolate artesanal?",
          de: "Was ist der Zweck des Hinzufügens von Kakaobutter zu handwerklichen Schokoladenrezepten?",
          nl: "Wat is het doel van het toevoegen van cacaoboter aan ambachtelijke chocoladerecepten?"
        },
        options: [
          { en: "Increase sweetness", es: "Aumentar dulzura", de: "Süße erhöhen", nl: "Zoetheid verhogen" },
          { en: "Adjust texture and fluidity", es: "Ajustar textura y fluidez", de: "Textur und Fließfähigkeit anpassen", nl: "Textuur en vloeibaarheid aanpassen" },
          { en: "Add flavor", es: "Agregar sabor", de: "Geschmack hinzufügen", nl: "Smaak toevoegen" },
          { en: "Preserve chocolate", es: "Conservar chocolate", de: "Schokolade konservieren", nl: "Chocolade bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Extra cocoa butter is added to adjust the texture and fluidity of chocolate, making it easier to work with for molding, coating, and creating smooth finishes.",
          es: "Se agrega manteca de cacao extra para ajustar la textura y fluidez del chocolate, haciéndolo más fácil de trabajar para moldear, cubrir y crear acabados suaves.",
          de: "Zusätzliche Kakaobutter wird hinzugefügt, um die Textur und Fließfähigkeit von Schokolade anzupassen, was die Arbeit beim Formen, Überziehen und Schaffen glatter Oberflächen erleichtert.",
          nl: "Extra cacaoboter wordt toegevoegd om de textuur en vloeibaarheid van chocolade aan te passen, waardoor het gemakkelijker wordt om mee te werken voor vormen, bekleden en gladde afwerkingen creëren."
        }
      },
      {
        question: {
          en: "What is the traditional Venezuelan cacao processing method called?",
          es: "¿Cómo se llama el método tradicional venezolano de procesamiento de cacao?",
          de: "Wie heißt die traditionelle venezolanische Kakao-Verarbeitungsmethode?",
          nl: "Hoe heet de traditionele Venezolaanse cacaoverwerkingsmethode?"
        },
        options: [
          { en: "Fermentation boxes", es: "Cajas de fermentación", de: "Fermentationsboxen", nl: "Fermentatieboxen" },
          { en: "Montones method", es: "Método de montones", de: "Montones-Methode", nl: "Montones methode" },
          { en: "Tray drying", es: "Secado en bandejas", de: "Tablett-Trocknung", nl: "Lade drogen" },
          { en: "Solar drying", es: "Secado solar", de: "Solartrocknung", nl: "Zonne-drogen" }
        ],
        correct: 1,
        explanation: {
          en: "The montones method involves fermenting cacao beans in piles covered with banana leaves, a traditional Venezuelan technique that produces distinctive flavor profiles.",
          es: "El método de montones involucra fermentar granos de cacao en pilas cubiertas con hojas de plátano, una técnica tradicional venezolana que produce perfiles de sabor distintivos.",
          de: "Die Montones-Methode beinhaltet das Fermentieren von Kakaobohnen in Haufen, die mit Bananenblättern bedeckt sind, eine traditionelle venezolanische Technik, die charakteristische Geschmacksprofile erzeugt.",
          nl: "De montones methode houdt in dat cacaobonen worden gefermenteerd in hopen bedekt met bananenbladeren, een traditionele Venezolaanse techniek die onderscheidende smaakprofielen produceert."
        }
      },
      {
        question: {
          en: "What is the artisan technique for creating chocolate with visible texture patterns?",
          es: "¿Cuál es la técnica artesanal para crear chocolate con patrones de textura visibles?",
          de: "Was ist die handwerkliche Technik zur Herstellung von Schokolade mit sichtbaren Texturmustern?",
          nl: "Wat is de ambachtelijke techniek voor het creëren van chocolade met zichtbare textuurpatronen?"
        },
        options: [
          { en: "Marble tempering", es: "Templado de mármol", de: "Marmortemperierung", nl: "Marmer tempering" },
          { en: "Textured molding", es: "Moldeado texturizado", de: "Strukturiertes Formen", nl: "Getextureerd vormen" },
          { en: "Pattern rolling", es: "Rodillo de patrones", de: "Musterwalzen", nl: "Patroon rollen" },
          { en: "Impression technique", es: "Técnica de impresión", de: "Prägetechnik", nl: "Indruk techniek" }
        ],
        correct: 1,
        explanation: {
          en: "Textured molding uses specially designed molds with surface patterns that create visible textures on chocolate surfaces, from geometric patterns to organic designs.",
          es: "El moldeado texturizado usa moldes especialmente diseñados con patrones de superficie que crean texturas visibles en superficies de chocolate, desde patrones geométricos hasta diseños orgánicos.",
          de: "Strukturiertes Formen verwendet speziell gestaltete Formen mit Oberflächenmustern, die sichtbare Texturen auf Schokoladenoberflächen erzeugen, von geometrischen Mustern bis zu organischen Designs.",
          nl: "Getextureerd vormen gebruikt speciaal ontworpen mallen met oppervlaktepatronen die zichtbare texturen op chocoladeoppervlakken creëren, van geometrische patronen tot organische ontwerpen."
        }
      },
      {
        question: {
          en: "What is the traditional method for testing chocolate temper by hand?",
          es: "¿Cuál es el método tradicional para probar el templado del chocolate a mano?",
          de: "Was ist die traditionelle Methode zum Testen der Schokoladentemperierung von Hand?",
          nl: "Wat is de traditionele methode voor het testen van chocoladetempering met de hand?"
        },
        options: [
          { en: "Lip test", es: "Prueba de labio", de: "Lippentest", nl: "Liptest" },
          { en: "Finger dip test", es: "Prueba de inmersión del dedo", de: "Fingertauchtest", nl: "Vingerduiktest" },
          { en: "Paper strip test", es: "Prueba de tira de papel", de: "Papierstreifentest", nl: "Papierstrook test" },
          { en: "Spoon test", es: "Prueba de cuchara", de: "Löffeltest", nl: "Lepeltest" }
        ],
        correct: 2,
        explanation: {
          en: "The paper strip test involves dipping a piece of parchment paper into tempered chocolate and observing how quickly it sets and whether it has a glossy finish.",
          es: "La prueba de tira de papel involucra sumergir un pedazo de papel pergamino en chocolate templado y observar qué tan rápido se endurece y si tiene un acabado brillante.",
          de: "Der Papierstreifentest beinhaltet das Eintauchen eines Stücks Pergamentpapier in temperierte Schokolade und das Beobachten, wie schnell sie fest wird und ob sie eine glänzende Oberfläche hat.",
          nl: "De papierstrook test houdt in dat een stuk bakpapier in getemperde chocolade wordt gedoopt en wordt waargenomen hoe snel het opzet en of het een glanzende afwerking heeft."
        }
      },
      {
        question: {
          en: "What is the artisan practice of aging chocolate in specific conditions called?",
          es: "¿Cómo se llama la práctica artesanal de envejecer chocolate en condiciones específicas?",
          de: "Wie heißt die handwerkliche Praxis der Schokoladenalterung unter spezifischen Bedingungen?",
          nl: "Hoe heet de ambachtelijke praktijk van chocolade verouderen onder specifieke omstandigheden?"
        },
        options: [
          { en: "Vintage chocolate", es: "Chocolate vintage", de: "Vintage-Schokolade", nl: "Vintage chocolade" },
          { en: "Cave aging", es: "Envejecimiento en cueva", de: "Höhlenalterung", nl: "Grotten veroudering" },
          { en: "Controlled aging", es: "Envejecimiento controlado", de: "Kontrollierte Alterung", nl: "Gecontroleerde veroudering" },
          { en: "Wine-style aging", es: "Envejecimiento estilo vino", de: "Weinstil-Alterung", nl: "Wijnstijl veroudering" }
        ],
        correct: 2,
        explanation: {
          en: "Controlled aging is the artisan practice of storing chocolate under specific temperature and humidity conditions for extended periods to develop complex flavors, similar to wine or cheese aging.",
          es: "El envejecimiento controlado es la práctica artesanal de almacenar chocolate bajo condiciones específicas de temperatura y humedad por períodos extendidos para desarrollar sabores complejos, similar al envejecimiento de vino o queso.",
          de: "Kontrollierte Alterung ist die handwerkliche Praxis, Schokolade unter spezifischen Temperatur- und Feuchtigkeitsbedingungen über längere Zeiträume zu lagern, um komplexe Aromen zu entwickeln, ähnlich wie bei Wein- oder Käsereifung.",
          nl: "Gecontroleerde veroudering is de ambachtelijke praktijk van chocolade opslaan onder specifieke temperatuur- en vochtigheidsomstandigheden voor langere perioden om complexe smaken te ontwikkelen, vergelijkbaar met wijn- of kaasveroudering."
        }
      },
      {
        question: {
          en: "What is the Strecker degradation in chocolate processing?",
          es: "¿Qué es la degradación de Strecker en el procesamiento del chocolate?",
          de: "Was ist die Strecker-Degradierung bei der Schokoladenverarbeitung?",
          nl: "Wat is de Strecker-degradatie in chocoladeverwerking?"
        },
        options: [
          { en: "Amino acid-sugar reaction creating flavor compounds", es: "Reacción aminoácido-azúcar creando compuestos de sabor", de: "Aminosäure-Zucker-Reaktion zur Bildung von Geschmacksstoffen", nl: "Aminozuur-suiker reactie die smaakstoffen creëert" },
          { en: "Fat oxidation process", es: "Proceso de oxidación de grasa", de: "Fettoxidationsprozess", nl: "Vetoxidatieproces" },
          { en: "Sugar crystallization", es: "Cristalización de azúcar", de: "Zuckerkristallisation", nl: "Suikerkristallisatie" },
          { en: "Protein breakdown", es: "Descomposición de proteínas", de: "Proteinabbau", nl: "Eiwitafbraak" }
        ],
        correct: 0,
        explanation: {
          en: "Strecker degradation is a reaction between amino acids and carbonyl compounds during roasting that produces aldehydes and pyrazines, contributing to chocolate's complex flavor profile.",
          es: "La degradación de Strecker es una reacción entre aminoácidos y compuestos carbonilo durante el tostado que produce aldehídos y pirazinas, contribuyendo al perfil de sabor complejo del chocolate.",
          de: "Strecker-Degradierung ist eine Reaktion zwischen Aminosäuren und Carbonylverbindungen beim Rösten, die Aldehyde und Pyrazine produziert und zum komplexen Geschmacksprofil der Schokolade beiträgt.",
          nl: "Strecker-degradatie is een reactie tussen aminozuren en carbonylverbindingen tijdens het roosten die aldehyden en pyrazines produceert, wat bijdraagt aan het complexe smaakprofiel van chocolade."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();