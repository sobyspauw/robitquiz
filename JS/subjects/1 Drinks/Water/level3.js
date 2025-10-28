// Quiz - Level 3: Drinken - Water (Gezondheid en hydratatie)
(function() {
  const level3 = {
    name: {
      en: "Water Health and Hydration",
      es: "Salud e Hidratación del Agua",
      de: "Wasser Gesundheit und Hydratation",
      nl: "Water Gezondheid en Hydratatie"
    },
    questions: [
      {
        question: {
          en: "What percentage of the human body is water in a healthy adult?",
          es: "¿Qué porcentaje del cuerpo humano es agua en un adulto sano?",
          de: "Welcher Prozentsatz des menschlichen Körpers ist Wasser bei einem gesunden Erwachsenen?",
          nl: "Welk percentage van het menselijk lichaam is water bij een gezonde volwassene?"
        },
        options: [
          { en: "45-50%", es: "45-50%", de: "45-50%", nl: "45-50%" },
          { en: "55-60%", es: "55-60%", de: "55-60%", nl: "55-60%" },
          { en: "60-65%", es: "60-65%", de: "60-65%", nl: "60-65%" },
          { en: "70-75%", es: "70-75%", de: "70-75%", nl: "70-75%" }
        ],
        correct: 2,
        explanation: {
          en: "A healthy adult human body is approximately 60-65% water, with variations based on age, gender, and body composition.",
          es: "Un cuerpo humano adulto sano es aproximadamente 60-65% agua, con variaciones basadas en edad, género y composición corporal.",
          de: "Ein gesunder erwachsener menschlicher Körper besteht zu etwa 60-65% aus Wasser, mit Variationen basierend auf Alter, Geschlecht und Körperzusammensetzung.",
          nl: "Een gezond volwassen menselijk lichaam bestaat voor ongeveer 60-65% uit water, met variaties gebaseerd op leeftijd, geslacht en lichaamssamenstelling."
        }
      },
      {
        question: {
          en: "How much water should an average adult drink per day according to general health guidelines?",
          es: "¿Cuánta agua debe beber un adulto promedio por día según las pautas generales de salud?",
          de: "Wie viel Wasser sollte ein durchschnittlicher Erwachsener pro Tag nach allgemeinen Gesundheitsrichtlinien trinken?",
          nl: "Hoeveel water moet een gemiddelde volwassene per dag drinken volgens algemene gezondheidsrichtlijnen?"
        },
        options: [
          { en: "1-1.5 liters", es: "1-1.5 litros", de: "1-1,5 Liter", nl: "1-1,5 liter" },
          { en: "2-2.5 liters", es: "2-2.5 litros", de: "2-2,5 Liter", nl: "2-2,5 liter" },
          { en: "3-3.5 liters", es: "3-3.5 litros", de: "3-3,5 Liter", nl: "3-3,5 liter" },
          { en: "4-5 liters", es: "4-5 litros", de: "4-5 Liter", nl: "4-5 liter" }
        ],
        correct: 1,
        explanation: {
          en: "General health guidelines recommend about 2-2.5 liters (8-10 cups) of water daily for adults, though individual needs vary based on activity, climate, and health.",
          es: "Las pautas generales de salud recomiendan aproximadamente 2-2.5 litros (8-10 tazas) de agua diariamente para adultos, aunque las necesidades individuales varían según la actividad, clima y salud.",
          de: "Allgemeine Gesundheitsrichtlinien empfehlen etwa 2-2,5 Liter (8-10 Tassen) Wasser täglich für Erwachsene, obwohl individuelle Bedürfnisse je nach Aktivität, Klima und Gesundheit variieren.",
          nl: "Algemene gezondheidsrichtlijnen bevelen ongeveer 2-2,5 liter (8-10 kopjes) water per dag aan voor volwassenen, hoewel individuele behoeften variëren op basis van activiteit, klimaat en gezondheid."
        }
      },
      {
        question: {
          en: "What is the first sign of mild dehydration?",
          es: "¿Cuál es el primer signo de deshidratación leve?",
          de: "Was ist das erste Anzeichen einer leichten Dehydrierung?",
          nl: "Wat is het eerste teken van milde uitdroging?"
        },
        options: [
          { en: "Headache", es: "Dolor de cabeza", de: "Kopfschmerzen", nl: "Hoofdpijn" },
          { en: "Thirst", es: "Sed", de: "Durst", nl: "Dorst" },
          { en: "Dark urine", es: "Orina oscura", de: "Dunkler Urin", nl: "Donkere urine" },
          { en: "Fatigue", es: "Fatiga", de: "Müdigkeit", nl: "Vermoeidheid" }
        ],
        correct: 1,
        explanation: {
          en: "Thirst is the body's first warning signal of dehydration. By the time you feel thirsty, you're already mildly dehydrated.",
          es: "La sed es la primera señal de advertencia del cuerpo de deshidratación. Para cuando sientes sed, ya estás ligeramente deshidratado.",
          de: "Durst ist das erste Warnsignal des Körpers für Dehydrierung. Wenn Sie Durst verspüren, sind Sie bereits leicht dehydriert.",
          nl: "Dorst is het eerste waarschuwingssignaal van het lichaam voor uitdroging. Tegen de tijd dat je dorst voelt, ben je al licht uitgedroogd."
        }
      },
      {
        question: {
          en: "Which organ in the human body has the highest water content?",
          es: "¿Qué órgano del cuerpo humano tiene el mayor contenido de agua?",
          de: "Welches Organ im menschlichen Körper hat den höchsten Wassergehalt?",
          nl: "Welk orgaan in het menselijk lichaam heeft het hoogste watergehalte?"
        },
        options: [
          { en: "Kidneys", es: "Riñones", de: "Nieren", nl: "Nieren" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" }
        ],
        correct: 2,
        explanation: {
          en: "The brain has the highest water content of any organ, consisting of approximately 75-80% water, which is crucial for proper neural function.",
          es: "El cerebro tiene el mayor contenido de agua de cualquier órgano, consistiendo en aproximadamente 75-80% agua, lo cual es crucial para la función neural adecuada.",
          de: "Das Gehirn hat den höchsten Wassergehalt aller Organe und besteht aus etwa 75-80% Wasser, was für die ordnungsgemäße Neuralfunktion entscheidend ist.",
          nl: "De hersenen hebben het hoogste watergehalte van alle organen, bestaande uit ongeveer 75-80% water, wat cruciaal is voor een goede neurale functie."
        }
      },
      {
        question: {
          en: "What happens to your metabolism when you're dehydrated?",
          es: "¿Qué le pasa a tu metabolismo cuando estás deshidratado?",
          de: "Was passiert mit Ihrem Stoffwechsel, wenn Sie dehydriert sind?",
          nl: "Wat gebeurt er met je stofwisseling wanneer je uitgedroogd bent?"
        },
        options: [
          { en: "It speeds up significantly", es: "Se acelera significativamente", de: "Es beschleunigt sich erheblich", nl: "Het versnelt aanzienlijk" },
          { en: "It slows down", es: "Se ralentiza", de: "Es verlangsamt sich", nl: "Het vertraagt" },
          { en: "It remains unchanged", es: "Permanece sin cambios", de: "Es bleibt unverändert", nl: "Het blijft onveranderd" },
          { en: "It stops completely", es: "Se detiene completamente", de: "Es stoppt vollständig", nl: "Het stopt volledig" }
        ],
        correct: 1,
        explanation: {
          en: "Dehydration can slow your metabolism by 2-3%, making it harder to burn calories and maintain energy levels throughout the day.",
          es: "La deshidratación puede ralentizar tu metabolismo en un 2-3%, haciendo más difícil quemar calorías y mantener niveles de energía durante el día.",
          de: "Dehydrierung kann Ihren Stoffwechsel um 2-3% verlangsamen, wodurch es schwieriger wird, Kalorien zu verbrennen und Energielevel den ganzen Tag aufrechtzuerhalten.",
          nl: "Uitdroging kan je stofwisseling met 2-3% vertragen, waardoor het moeilijker wordt om calorieën te verbranden en energieniveaus gedurende de dag te behouden."
        }
      },
      {
        question: {
          en: "Why is water important for joint health?",
          es: "¿Por qué es importante el agua para la salud de las articulaciones?",
          de: "Warum ist Wasser wichtig für die Gelenkgesundheit?",
          nl: "Waarom is water belangrijk voor gewrichtsgezondheid?"
        },
        options: [
          { en: "It strengthens bones", es: "Fortalece los huesos", de: "Es stärkt die Knochen", nl: "Het versterkt botten" },
          { en: "It lubricates cartilage and reduces friction", es: "Lubrica el cartílago y reduce la fricción", de: "Es schmiert den Knorpel und reduziert Reibung", nl: "Het smeert kraakbeen en vermindert wrijving" },
          { en: "It prevents inflammation", es: "Previene la inflamación", de: "Es verhindert Entzündungen", nl: "Het voorkomt ontstekingen" },
          { en: "It builds muscle around joints", es: "Construye músculo alrededor de las articulaciones", de: "Es baut Muskeln um Gelenke auf", nl: "Het bouwt spieren rond gewrichten op" }
        ],
        correct: 1,
        explanation: {
          en: "Water is a major component of synovial fluid, which lubricates joints and cartilage, reducing friction and allowing smooth movement.",
          es: "El agua es un componente principal del líquido sinovial, que lubrica las articulaciones y el cartílago, reduciendo la fricción y permitiendo movimiento suave.",
          de: "Wasser ist ein Hauptbestandteil der Synovialflüssigkeit, die Gelenke und Knorpel schmiert, Reibung reduziert und geschmeidige Bewegung ermöglicht.",
          nl: "Water is een hoofdbestanddeel van synoviaal vocht, dat gewrichten en kraakbeen smeert, wrijving vermindert en soepele beweging mogelijk maakt."
        }
      },
      {
        question: {
          en: "What role does water play in regulating body temperature?",
          es: "¿Qué papel juega el agua en regular la temperatura corporal?",
          de: "Welche Rolle spielt Wasser bei der Regulierung der Körpertemperatur?",
          nl: "Welke rol speelt water bij het reguleren van lichaamstemperatuur?"
        },
        options: [
          { en: "It generates heat through chemical reactions", es: "Genera calor a través de reacciones químicas", de: "Es erzeugt Wärme durch chemische Reaktionen", nl: "Het genereert warmte door chemische reacties" },
          { en: "It absorbs and releases heat through sweating and circulation", es: "Absorbe y libera calor a través de la sudoración y circulación", de: "Es absorbiert und gibt Wärme durch Schwitzen und Kreislauf ab", nl: "Het absorbeert en geeft warmte af door zweten en circulatie" },
          { en: "It prevents heat production in cells", es: "Previene la producción de calor en las células", de: "Es verhindert Wärmeproduktion in Zellen", nl: "Het voorkomt warmteproductie in cellen" },
          { en: "It only cools the body down", es: "Solo enfría el cuerpo", de: "Es kühlt nur den Körper ab", nl: "Het koelt het lichaam alleen af" }
        ],
        correct: 1,
        explanation: {
          en: "Water regulates body temperature through sweating (cooling), circulation (heat distribution), and its high heat capacity to absorb and release thermal energy.",
          es: "El agua regula la temperatura corporal a través de la sudoración (enfriamiento), circulación (distribución de calor), y su alta capacidad calorífica para absorber y liberar energía térmica.",
          de: "Wasser reguliert die Körpertemperatur durch Schwitzen (Kühlung), Kreislauf (Wärmeverteilung) und seine hohe Wärmekapazität, um thermische Energie zu absorbieren und freizusetzen.",
          nl: "Water reguleert lichaamstemperatuur door zweten (koeling), circulatie (warmteverdeling), en zijn hoge warmtecapaciteit om thermische energie te absorberen en af te geven."
        }
      },
      {
        question: {
          en: "How does dehydration affect kidney function?",
          es: "¿Cómo afecta la deshidratación a la función renal?",
          de: "Wie beeinflusst Dehydrierung die Nierenfunktion?",
          nl: "Hoe beïnvloedt uitdroging de nierfunctie?"
        },
        options: [
          { en: "It improves filtration efficiency", es: "Mejora la eficiencia de filtración", de: "Es verbessert die Filtrationseffizienz", nl: "Het verbetert filtratie-efficiëntie" },
          { en: "It reduces blood flow and impairs waste removal", es: "Reduce el flujo sanguíneo y perjudica la eliminación de desechos", de: "Es reduziert den Blutfluss und beeinträchtigt die Abfallentfernung", nl: "Het vermindert bloedstroom en verslechtert afvalverwijdering" },
          { en: "It has no effect on kidneys", es: "No tiene efecto en los riñones", de: "Es hat keine Auswirkung auf die Nieren", nl: "Het heeft geen effect op nieren" },
          { en: "It only affects urine color", es: "Solo afecta el color de la orina", de: "Es beeinflusst nur die Urinfarbe", nl: "Het beïnvloedt alleen de urinekleur" }
        ],
        correct: 1,
        explanation: {
          en: "Dehydration reduces blood volume and flow to the kidneys, impairing their ability to filter waste and maintain proper electrolyte balance.",
          es: "La deshidratación reduce el volumen sanguíneo y el flujo a los riñones, perjudicando su capacidad de filtrar desechos y mantener el equilibrio electrolítico adecuado.",
          de: "Dehydrierung reduziert das Blutvolumen und den Fluss zu den Nieren, was ihre Fähigkeit beeinträchtigt, Abfall zu filtern und das richtige Elektrolytgleichgewicht aufrechtzuerhalten.",
          nl: "Uitdroging vermindert bloedvolume en -stroom naar de nieren, wat hun vermogen verslechtert om afval te filteren en de juiste elektrolytbalans te behouden."
        }
      },
      {
        question: {
          en: "What is water intoxication (hyponatremia)?",
          es: "¿Qué es la intoxicación por agua (hiponatremia)?",
          de: "Was ist Wasserintoxikation (Hyponatriämie)?",
          nl: "Wat is watervergiftiging (hyponatriëmie)?"
        },
        options: [
          { en: "Drinking contaminated water", es: "Beber agua contaminada", de: "Trinken von kontaminiertem Wasser", nl: "Drinken van vervuild water" },
          { en: "Drinking too much water too quickly, diluting blood sodium", es: "Beber demasiada agua muy rápido, diluyendo el sodio en sangre", de: "Zu viel Wasser zu schnell trinken, wodurch das Blutnatrium verdünnt wird", nl: "Te veel water te snel drinken, waardoor bloednatrium wordt verdund" },
          { en: "Allergic reaction to minerals in water", es: "Reacción alérgica a minerales en el agua", de: "Allergische Reaktion auf Mineralien im Wasser", nl: "Allergische reactie op mineralen in water" },
          { en: "Dehydration from drinking only water", es: "Deshidratación por beber solo agua", de: "Dehydrierung durch ausschließliches Wassertrinken", nl: "Uitdroging door alleen water drinken" }
        ],
        correct: 1,
        explanation: {
          en: "Water intoxication occurs when excessive water consumption dilutes blood sodium levels, potentially causing cells to swell and leading to serious health complications.",
          es: "La intoxicación por agua ocurre cuando el consumo excesivo de agua diluye los niveles de sodio en sangre, potencialmente causando hinchazón celular y complicaciones serias de salud.",
          de: "Wasserintoxikation tritt auf, wenn übermäßiger Wasserkonsum die Blutnatriumspiegel verdünnt, was möglicherweise zu Zellschwellung und ernsthaften Gesundheitskomplikationen führt.",
          nl: "Watervergiftiging treedt op wanneer overmatig waterverbruik de bloednatriumspiegels verdunt, mogelijk celzwelling veroorzakend en leidend tot ernstige gezondheidscomplicaties."
        }
      },
      {
        question: {
          en: "How does proper hydration affect cognitive function?",
          es: "¿Cómo afecta la hidratación adecuada a la función cognitiva?",
          de: "Wie beeinflusst ordnungsgemäße Hydratation die kognitive Funktion?",
          nl: "Hoe beïnvloedt goede hydratatie de cognitieve functie?"
        },
        options: [
          { en: "It has no effect on brain function", es: "No tiene efecto en la función cerebral", de: "Es hat keine Auswirkung auf die Gehirnfunktion", nl: "Het heeft geen effect op hersenfunctie" },
          { en: "It improves memory, concentration and alertness", es: "Mejora la memoria, concentración y alerta", de: "Es verbessert Gedächtnis, Konzentration und Aufmerksamkeit", nl: "Het verbetert geheugen, concentratie en alertheid" },
          { en: "It only affects physical performance", es: "Solo afecta el rendimiento físico", de: "Es beeinflusst nur die körperliche Leistung", nl: "Het beïnvloedt alleen fysieke prestaties" },
          { en: "It makes you more tired", es: "Te hace más cansado", de: "Es macht Sie müder", nl: "Het maakt je meer moe" }
        ],
        correct: 1,
        explanation: {
          en: "Proper hydration is crucial for optimal brain function. Even mild dehydration can impair memory, concentration, mood, and cognitive performance.",
          es: "La hidratación adecuada es crucial para la función cerebral óptima. Incluso la deshidratación leve puede perjudicar la memoria, concentración, estado de ánimo y rendimiento cognitivo.",
          de: "Ordnungsgemäße Hydratation ist entscheidend für optimale Gehirnfunktion. Selbst leichte Dehydrierung kann Gedächtnis, Konzentration, Stimmung und kognitive Leistung beeinträchtigen.",
          nl: "Goede hydratatie is cruciaal voor optimale hersenfunctie. Zelfs milde uitdroging kan geheugen, concentratie, stemming en cognitieve prestaties verslechteren."
        }
      },
      {
        question: {
          en: "What color should healthy, properly hydrated urine be?",
          es: "¿De qué color debe ser la orina saludable y bien hidratada?",
          de: "Welche Farbe sollte gesunder, gut hydrierter Urin haben?",
          nl: "Welke kleur moet gezonde, goed gehydrateerde urine hebben?"
        },
        options: [
          { en: "Dark yellow or amber", es: "Amarillo oscuro o ámbar", de: "Dunkelgelb oder bernsteinfarben", nl: "Donkergeel of amber" },
          { en: "Pale yellow to clear", es: "Amarillo pálido a transparente", de: "Blassgelb bis klar", nl: "Lichtgeel tot helder" },
          { en: "Bright yellow", es: "Amarillo brillante", de: "Hellgelb", nl: "Heldergeel" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" }
        ],
        correct: 1,
        explanation: {
          en: "Healthy, well-hydrated urine should be pale yellow to almost clear. Dark urine indicates dehydration and concentrated waste products.",
          es: "La orina saludable y bien hidratada debe ser amarillo pálido a casi transparente. La orina oscura indica deshidratación y productos de desecho concentrados.",
          de: "Gesunder, gut hydrierter Urin sollte blassgelb bis fast klar sein. Dunkler Urin weist auf Dehydrierung und konzentrierte Abfallprodukte hin.",
          nl: "Gezonde, goed gehydrateerde urine moet lichtgeel tot bijna helder zijn. Donkere urine wijst op uitdroging en geconcentreerde afvalproducten."
        }
      },
      {
        question: {
          en: "When is the best time to drink water during the day?",
          es: "¿Cuál es el mejor momento para beber agua durante el día?",
          de: "Wann ist die beste Zeit, um tagsüber Wasser zu trinken?",
          nl: "Wat is de beste tijd om water te drinken tijdens de dag?"
        },
        options: [
          { en: "Only when you feel thirsty", es: "Solo cuando sientes sed", de: "Nur wenn Sie Durst haben", nl: "Alleen als je dorst hebt" },
          { en: "Only during meals", es: "Solo durante las comidas", de: "Nur während der Mahlzeiten", nl: "Alleen tijdens maaltijden" },
          { en: "Throughout the day at regular intervals", es: "A lo largo del día a intervalos regulares", de: "Den ganzen Tag über in regelmäßigen Abständen", nl: "Gedurende de dag met regelmatige tussenpozen" },
          { en: "Only in the morning", es: "Solo por la mañana", de: "Nur morgens", nl: "Alleen in de ochtend" }
        ],
        correct: 2,
        explanation: {
          en: "It's best to drink water consistently throughout the day rather than waiting until you're thirsty. Spreading intake helps maintain optimal hydration levels.",
          es: "Es mejor beber agua constantemente durante el día en lugar de esperar hasta tener sed. Distribuir la ingesta ayuda a mantener niveles de hidratación óptimos.",
          de: "Es ist am besten, den ganzen Tag über kontinuierlich Wasser zu trinken, anstatt zu warten, bis Sie Durst haben. Verteilte Aufnahme hilft, optimale Hydratationslevel aufrechtzuerhalten.",
          nl: "Het is het beste om de hele dag door consistent water te drinken in plaats van te wachten tot je dorst hebt. Gespreid innemen helpt optimale hydratieniveaus te behouden."
        }
      },
      {
        question: {
          en: "How does water help with digestion?",
          es: "¿Cómo ayuda el agua con la digestión?",
          de: "Wie hilft Wasser bei der Verdauung?",
          nl: "Hoe helpt water bij de spijsvertering?"
        },
        options: [
          { en: "It dilutes stomach acid", es: "Diluye el ácido estomacal", de: "Es verdünnt Magensäure", nl: "Het verdunt maagzuur" },
          { en: "It helps break down food and move it through the digestive tract", es: "Ayuda a descomponer alimentos y moverlos por el tracto digestivo", de: "Es hilft, Nahrung abzubauen und durch den Verdauungstrakt zu bewegen", nl: "Het helpt voedsel af te breken en door het spijsverteringskanaal te bewegen" },
          { en: "It stops digestion", es: "Detiene la digestión", de: "Es stoppt die Verdauung", nl: "Het stopt de spijsvertering" },
          { en: "It only prevents constipation", es: "Solo previene el estreñimiento", de: "Es verhindert nur Verstopfung", nl: "Het voorkomt alleen constipatie" }
        ],
        correct: 1,
        explanation: {
          en: "Water is essential for digestion. It helps dissolve nutrients, break down food, produce digestive enzymes and saliva, and move food through the intestines.",
          es: "El agua es esencial para la digestión. Ayuda a disolver nutrientes, descomponer alimentos, producir enzimas digestivas y saliva, y mover alimentos por los intestinos.",
          de: "Wasser ist essentiell für die Verdauung. Es hilft, Nährstoffe zu lösen, Nahrung abzubauen, Verdauungsenzyme und Speichel zu produzieren und Nahrung durch die Därme zu bewegen.",
          nl: "Water is essentieel voor spijsvertering. Het helpt voedingsstoffen op te lossen, voedsel af te breken, spijsverteringsenzymen en speeksel te produceren, en voedsel door de darmen te bewegen."
        }
      },
      {
        question: {
          en: "Can you get hydration from foods?",
          es: "¿Puedes obtener hidratación de los alimentos?",
          de: "Kann man Hydratation aus Nahrung gewinnen?",
          nl: "Kun je hydratatie uit voedsel krijgen?"
        },
        options: [
          { en: "No, only water provides hydration", es: "No, solo el agua proporciona hidratación", de: "Nein, nur Wasser spendet Hydratation", nl: "Nee, alleen water zorgt voor hydratatie" },
          { en: "Yes, many fruits and vegetables contain significant water", es: "Sí, muchas frutas y verduras contienen agua significativa", de: "Ja, viele Früchte und Gemüse enthalten erheblich Wasser", nl: "Ja, veel fruit en groenten bevatten aanzienlijk water" },
          { en: "Only dairy products provide hydration", es: "Solo los productos lácteos proporcionan hidratación", de: "Nur Milchprodukte spenden Hydratation", nl: "Alleen zuivelproducten zorgen voor hydratatie" },
          { en: "Only meat provides hydration", es: "Solo la carne proporciona hidratación", de: "Nur Fleisch spendet Hydratation", nl: "Alleen vlees zorgt voor hydratatie" }
        ],
        correct: 1,
        explanation: {
          en: "About 20% of daily water intake comes from food. Fruits like watermelon, cucumbers, oranges, and lettuce contain 85-95% water and contribute to hydration.",
          es: "Aproximadamente el 20% del consumo diario de agua proviene de alimentos. Frutas como sandía, pepinos, naranjas y lechuga contienen 85-95% agua y contribuyen a la hidratación.",
          de: "Etwa 20% der täglichen Wasseraufnahme stammt aus Nahrung. Früchte wie Wassermelone, Gurken, Orangen und Salat enthalten 85-95% Wasser und tragen zur Hydratation bei.",
          nl: "Ongeveer 20% van de dagelijkse waterinname komt uit voedsel. Fruit zoals watermeloen, komkommers, sinaasappels en sla bevat 85-95% water en draagt bij aan hydratatie."
        }
      },
      {
        question: {
          en: "How does exercise affect water needs?",
          es: "¿Cómo afecta el ejercicio a las necesidades de agua?",
          de: "Wie beeinflusst Bewegung den Wasserbedarf?",
          nl: "Hoe beïnvloedt lichaamsbeweging de waterbehoefte?"
        },
        options: [
          { en: "Exercise reduces water needs", es: "El ejercicio reduce las necesidades de agua", de: "Bewegung reduziert den Wasserbedarf", nl: "Lichaamsbeweging vermindert de waterbehoefte" },
          { en: "Exercise has no effect on water needs", es: "El ejercicio no tiene efecto en las necesidades de agua", de: "Bewegung hat keinen Einfluss auf den Wasserbedarf", nl: "Lichaamsbeweging heeft geen effect op waterbehoefte" },
          { en: "Exercise significantly increases water needs due to sweat loss", es: "El ejercicio aumenta significativamente las necesidades de agua debido a pérdida por sudor", de: "Bewegung erhöht den Wasserbedarf erheblich durch Schweißverlust", nl: "Lichaamsbeweging verhoogt de waterbehoefte aanzienlijk door zweetverlies" },
          { en: "Only intense exercise affects water needs", es: "Solo el ejercicio intenso afecta las necesidades de agua", de: "Nur intensive Bewegung beeinflusst den Wasserbedarf", nl: "Alleen intense lichaamsbeweging beïnvloedt waterbehoefte" }
        ],
        correct: 2,
        explanation: {
          en: "Exercise increases water needs significantly through sweat loss. You should drink before, during, and after exercise to replace fluids. An extra 1.5-2.5 cups per hour of exercise is recommended.",
          es: "El ejercicio aumenta significativamente las necesidades de agua a través de la pérdida por sudor. Debes beber antes, durante y después del ejercicio para reemplazar líquidos. Se recomiendan 1.5-2.5 tazas extra por hora de ejercicio.",
          de: "Bewegung erhöht den Wasserbedarf erheblich durch Schweißverlust. Sie sollten vor, während und nach dem Training trinken, um Flüssigkeiten zu ersetzen. Zusätzliche 1,5-2,5 Tassen pro Stunde Training werden empfohlen.",
          nl: "Lichaamsbeweging verhoogt de waterbehoefte aanzienlijk door zweetverlies. Je moet voor, tijdens en na lichaamsbeweging drinken om vloeistoffen aan te vullen. Een extra 1,5-2,5 kopjes per uur lichaamsbeweging wordt aanbevolen."
        }
      },
      {
        question: {
          en: "What is the relationship between water and skin health?",
          es: "¿Cuál es la relación entre el agua y la salud de la piel?",
          de: "Was ist die Beziehung zwischen Wasser und Hautgesundheit?",
          nl: "Wat is de relatie tussen water en huidgezondheid?"
        },
        options: [
          { en: "Water has no effect on skin", es: "El agua no tiene efecto en la piel", de: "Wasser hat keine Wirkung auf die Haut", nl: "Water heeft geen effect op de huid" },
          { en: "Water helps maintain skin elasticity, moisture, and flush out toxins", es: "El agua ayuda a mantener elasticidad, humedad de la piel y eliminar toxinas", de: "Wasser hilft, Hautelastizität, Feuchtigkeit zu erhalten und Toxine auszuspülen", nl: "Water helpt huidelasticiteit, vocht te behouden en gifstoffen uit te spoelen" },
          { en: "Water makes skin oily", es: "El agua hace la piel grasa", de: "Wasser macht die Haut fettig", nl: "Water maakt de huid vettig" },
          { en: "Only external water affects skin", es: "Solo el agua externa afecta la piel", de: "Nur äußeres Wasser beeinflusst die Haut", nl: "Alleen extern water beïnvloedt de huid" }
        ],
        correct: 1,
        explanation: {
          en: "Proper hydration maintains skin moisture, improves elasticity, reduces wrinkles, flushes out toxins, and helps skin cells regenerate. Dehydrated skin appears dry, tight, and flaky.",
          es: "La hidratación adecuada mantiene la humedad de la piel, mejora la elasticidad, reduce arrugas, elimina toxinas y ayuda a las células de la piel a regenerarse. La piel deshidratada se ve seca, tensa y escamosa.",
          de: "Ordnungsgemäße Hydratation erhält Hautfeuchtigkeit, verbessert Elastizität, reduziert Falten, spült Toxine aus und hilft Hautzellen bei der Regeneration. Dehydrierte Haut erscheint trocken, straff und schuppig.",
          nl: "Goede hydratatie behoudt huidvocht, verbetert elasticiteit, vermindert rimpels, spoelt gifstoffen uit en helpt huidcellen te regenereren. Uitgedroogde huid ziet er droog, strak en schilferig uit."
        }
      },
      {
        question: {
          en: "How much water can you lose through breathing in a day?",
          es: "¿Cuánta agua puedes perder por respiración en un día?",
          de: "Wie viel Wasser können Sie an einem Tag durch Atmung verlieren?",
          nl: "Hoeveel water kun je per dag verliezen door ademhaling?"
        },
        options: [
          { en: "About 50 ml", es: "Aproximadamente 50 ml", de: "Etwa 50 ml", nl: "Ongeveer 50 ml" },
          { en: "About 250-400 ml", es: "Aproximadamente 250-400 ml", de: "Etwa 250-400 ml", nl: "Ongeveer 250-400 ml" },
          { en: "About 1 liter", es: "Aproximadamente 1 litro", de: "Etwa 1 Liter", nl: "Ongeveer 1 liter" },
          { en: "About 2 liters", es: "Aproximadamente 2 litros", de: "Etwa 2 Liter", nl: "Ongeveer 2 liter" }
        ],
        correct: 1,
        explanation: {
          en: "Humans lose approximately 250-400 ml (1-1.5 cups) of water per day through breathing as water vapor in exhaled air. This is called insensible water loss.",
          es: "Los humanos pierden aproximadamente 250-400 ml (1-1.5 tazas) de agua por día a través de la respiración como vapor de agua en el aire exhalado. Esto se llama pérdida de agua insensible.",
          de: "Menschen verlieren etwa 250-400 ml (1-1,5 Tassen) Wasser pro Tag durch Atmung als Wasserdampf in ausgeatmeter Luft. Dies wird als unsichtbarer Wasserverlust bezeichnet.",
          nl: "Mensen verliezen ongeveer 250-400 ml (1-1,5 kopjes) water per dag door ademhaling als waterdamp in uitgeademde lucht. Dit wordt onmerkbaar waterverlies genoemd."
        }
      },
      {
        question: {
          en: "Why is it important to drink water when sick with a fever?",
          es: "¿Por qué es importante beber agua cuando estás enfermo con fiebre?",
          de: "Warum ist es wichtig, Wasser zu trinken, wenn man krank mit Fieber ist?",
          nl: "Waarom is het belangrijk om water te drinken wanneer je ziek bent met koorts?"
        },
        options: [
          { en: "Fever has no effect on hydration", es: "La fiebre no tiene efecto en la hidratación", de: "Fieber hat keine Auswirkung auf die Hydratation", nl: "Koorts heeft geen effect op hydratatie" },
          { en: "Fever increases body temperature and fluid loss through sweating", es: "La fiebre aumenta la temperatura corporal y pérdida de líquidos por sudor", de: "Fieber erhöht die Körpertemperatur und Flüssigkeitsverlust durch Schwitzen", nl: "Koorts verhoogt lichaamstemperatuur en vloeistofverlies door zweten" },
          { en: "Water cures the illness", es: "El agua cura la enfermedad", de: "Wasser heilt die Krankheit", nl: "Water geneest de ziekte" },
          { en: "Only cold water helps with fever", es: "Solo el agua fría ayuda con la fiebre", de: "Nur kaltes Wasser hilft bei Fieber", nl: "Alleen koud water helpt bij koorts" }
        ],
        correct: 1,
        explanation: {
          en: "Fever raises body temperature, causing increased sweating and respiration, which leads to significant fluid loss. Drinking water prevents dehydration and helps the body fight infection.",
          es: "La fiebre aumenta la temperatura corporal, causando aumento de sudoración y respiración, lo que lleva a pérdida significativa de líquidos. Beber agua previene la deshidratación y ayuda al cuerpo a combatir infecciones.",
          de: "Fieber erhöht die Körpertemperatur, was zu verstärktem Schwitzen und Atmen führt, was zu erheblichem Flüssigkeitsverlust führt. Wasser trinken verhindert Dehydrierung und hilft dem Körper, Infektionen zu bekämpfen.",
          nl: "Koorts verhoogt lichaamstemperatuur, wat verhoogd zweten en ademhaling veroorzaakt, wat leidt tot aanzienlijk vloeistofverlies. Water drinken voorkomt uitdroging en helpt het lichaam infecties te bestrijden."
        }
      },
      {
        question: {
          en: "What is the effect of caffeine on hydration?",
          es: "¿Cuál es el efecto de la cafeína en la hidratación?",
          de: "Was ist die Wirkung von Koffein auf die Hydratation?",
          nl: "Wat is het effect van cafeïne op hydratatie?"
        },
        options: [
          { en: "Caffeine has no effect on hydration", es: "La cafeína no tiene efecto en la hidratación", de: "Koffein hat keine Wirkung auf die Hydratation", nl: "Cafeïne heeft geen effect op hydratatie" },
          { en: "Caffeine is a mild diuretic but moderate intake doesn't cause dehydration", es: "La cafeína es un diurético leve pero consumo moderado no causa deshidratación", de: "Koffein ist ein mildes Diuretikum, aber mäßige Aufnahme verursacht keine Dehydrierung", nl: "Cafeïne is een mild diureticum maar matige inname veroorzaakt geen uitdroging" },
          { en: "Caffeine severely dehydrates the body", es: "La cafeína deshidrata severamente el cuerpo", de: "Koffein dehydriert den Körper stark", nl: "Cafeïne droogt het lichaam ernstig uit" },
          { en: "Caffeine improves hydration", es: "La cafeína mejora la hidratación", de: "Koffein verbessert die Hydratation", nl: "Cafeïne verbetert hydratatie" }
        ],
        correct: 1,
        explanation: {
          en: "While caffeine is a mild diuretic (increases urination), research shows moderate caffeine consumption (up to 400mg/day) doesn't cause dehydration. Caffeinated beverages still contribute to daily fluid intake.",
          es: "Aunque la cafeína es un diurético leve (aumenta la micción), investigaciones muestran que consumo moderado de cafeína (hasta 400mg/día) no causa deshidratación. Bebidas con cafeína aún contribuyen a la ingesta diaria de líquidos.",
          de: "Obwohl Koffein ein mildes Diuretikum ist (erhöht Harndrang), zeigen Forschungen, dass mäßiger Koffeinkonsum (bis 400mg/Tag) keine Dehydrierung verursacht. Koffeinhaltige Getränke tragen dennoch zur täglichen Flüssigkeitsaufnahme bei.",
          nl: "Hoewel cafeïne een mild diureticum is (verhoogt urineren), tonen onderzoeken dat matige cafeïne-inname (tot 400mg/dag) geen uitdroging veroorzaakt. Cafeïnehoudende dranken dragen nog steeds bij aan dagelijkse vloeistofinname."
        }
      },
      {
        question: {
          en: "How does altitude affect water needs?",
          es: "¿Cómo afecta la altitud a las necesidades de agua?",
          de: "Wie beeinflusst die Höhe den Wasserbedarf?",
          nl: "Hoe beïnvloedt hoogte de waterbehoefte?"
        },
        options: [
          { en: "Altitude has no effect on water needs", es: "La altitud no tiene efecto en las necesidades de agua", de: "Die Höhe hat keine Auswirkung auf den Wasserbedarf", nl: "Hoogte heeft geen effect op waterbehoefte" },
          { en: "Higher altitude increases water needs due to increased respiration and lower humidity", es: "Mayor altitud aumenta necesidades de agua por respiración aumentada y menor humedad", de: "Höhere Höhe erhöht Wasserbedarf durch erhöhte Atmung und niedrigere Luftfeuchtigkeit", nl: "Hogere hoogte verhoogt waterbehoefte door verhoogde ademhaling en lagere luchtvochtigheid" },
          { en: "Lower altitude increases water needs", es: "Menor altitud aumenta necesidades de agua", de: "Niedrigere Höhe erhöht den Wasserbedarf", nl: "Lagere hoogte verhoogt waterbehoefte" },
          { en: "Only extreme altitude affects water needs", es: "Solo altitud extrema afecta necesidades de agua", de: "Nur extreme Höhe beeinflusst den Wasserbedarf", nl: "Alleen extreme hoogte beïnvloedt waterbehoefte" }
        ],
        correct: 1,
        explanation: {
          en: "At higher altitudes, the air is drier and you breathe faster to compensate for lower oxygen levels. This increases water loss through respiration and requires about 50% more water intake.",
          es: "A mayores altitudes, el aire es más seco y respiras más rápido para compensar niveles más bajos de oxígeno. Esto aumenta la pérdida de agua por respiración y requiere aproximadamente 50% más de consumo de agua.",
          de: "In größeren Höhen ist die Luft trockener und Sie atmen schneller, um niedrigere Sauerstoffwerte auszugleichen. Dies erhöht den Wasserverlust durch Atmung und erfordert etwa 50% mehr Wasseraufnahme.",
          nl: "Op grotere hoogtes is de lucht droger en adem je sneller om lagere zuurstofniveaus te compenseren. Dit verhoogt waterverlies door ademhaling en vereist ongeveer 50% meer waterinname."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
