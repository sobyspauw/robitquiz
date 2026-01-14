(function() {
  const level10 = {
    name: {
      en: "∘",
      es: "∘",
      de: "∘",
      nl: "∘"
    },
    questions: [
      {
        question: {
          en: ".",
          es: ".",
          de: ".",
          nl: "."
        },
        options: {
          en: [".", "∘", "○", "●"],
          es: [".", "∘", "○", "●"],
          de: [".", "∘", "○", "●"],
          nl: [".", "∘", "○", "●"]
        },
        correct: 1,
        explanation: {
          en: "Beyond being and non-being, the empty circle embodies the perfect donut - containing everything through containing nothing.",
          es: "Más allá del ser y no-ser, el círculo vacío encarna la dona perfecta - conteniendo todo a través de no contener nada.",
          de: "Jenseits von Sein und Nicht-Sein verkörpert der leere Kreis den perfekten Donut - alles enthaltend durch nichts enthalten.",
          nl: "Voorbij zijn en niet-zijn belichaamt de lege cirkel de perfecte donut - alles bevattend door niets te bevatten."
        }
      },
      {
        question: {
          en: "○",
          es: "○",
          de: "○",
          nl: "○"
        },
        options: {
          en: ["∘", "○", "●", "◯"],
          es: ["∘", "○", "●", "◯"],
          de: ["∘", "○", "●", "◯"],
          nl: ["∘", "○", "●", "◯"]
        },
        correct: 0,
        explanation: {
          en: "The filled circle dissolves into emptiness - form is emptiness, emptiness is form, the donut teaches impermanence.",
          es: "El círculo lleno se disuelve en vacío - la forma es vacío, el vacío es forma, la dona enseña impermanencia.",
          de: "Der gefüllte Kreis löst sich in Leere auf - Form ist Leere, Leere ist Form, der Donut lehrt Vergänglichkeit.",
          nl: "De gevulde cirkel lost op in leegte - vorm is leegte, leegte is vorm, de donut leert vergankelijkheid."
        }
      },
      {
        question: {
          en: "∘ → ○ → ● → ?",
          es: "∘ → ○ → ● → ?",
          de: "∘ → ○ → ● → ?",
          nl: "∘ → ○ → ● → ?"
        },
        options: {
          en: ["∘", "∞", " ", "◦"],
          es: ["∘", "∞", " ", "◦"],
          de: ["∘", "∞", " ", "◦"],
          nl: ["∘", "∞", " ", "◦"]
        },
        correct: 2,
        explanation: {
          en: "The progression completes in pure space - beyond symbols, beyond representation, beyond even the void itself.",
          es: "La progresión se completa en espacio puro - más allá de símbolos, más allá de representación, más allá incluso del vacío mismo.",
          de: "Die Progression vollendet sich im reinen Raum - jenseits von Symbolen, jenseits von Darstellung, jenseits sogar der Leere selbst.",
          nl: "De progressie voltooit zich in pure ruimte - voorbij symbolen, voorbij representatie, voorbij zelfs de leegte zelf."
        }
      },
      {
        question: {
          en: "",
          es: "",
          de: "",
          nl: ""
        },
        options: {
          en: ["", "∘", "○", "●"],
          es: ["", "∘", "○", "●"],
          de: ["", "∘", "○", "●"],
          nl: ["", "∘", "○", "●"]
        },
        correct: 0,
        explanation: {
          en: "In perfect silence, even emptiness empties itself - the ultimate donut is the absence of absence itself.",
          es: "En silencio perfecto, incluso el vacío se vacía a sí mismo - la dona última es la ausencia de la ausencia misma.",
          de: "In perfekter Stille leert sich sogar die Leere selbst - der ultimative Donut ist die Abwesenheit der Abwesenheit selbst.",
          nl: "In perfecte stilte leegt zelfs leegte zichzelf - de ultieme donut is de afwezigheid van afwezigheid zelf."
        }
      },
      {
        question: {
          en: "◯",
          es: "◯",
          de: "◯",
          nl: "◯"
        },
        options: {
          en: ["◯", "◦", "∘", "○"],
          es: ["◯", "◦", "∘", "○"],
          de: ["◯", "◦", "∘", "○"],
          nl: ["◯", "◦", "∘", "○"]
        },
        correct: 1,
        explanation: {
          en: "The large circle contracts to the smallest point - all of donut wisdom condensed into the simple truth of beginningless beginning.",
          es: "El círculo grande se contrae al punto más pequeño - toda la sabiduría de donas condensada en la verdad simple del comienzo sin comienzo.",
          de: "Der große Kreis zieht sich zum kleinsten Punkt zusammen - alle Donut-Weisheit verdichtet in die einfache Wahrheit des anfangslosen Anfangs.",
          nl: "De grote cirkel trekt samen tot het kleinste punt - alle donutwijsheid gecondenseerd in de eenvoudige waarheid van beginloze begin."
        }
      },
      {
        question: {
          en: "◦",
          es: "◦",
          de: "◦",
          nl: "◦"
        },
        options: {
          en: ["•", "·", ".", " "],
          es: ["•", "·", ".", " "],
          de: ["•", "·", ".", " "],
          nl: ["•", "·", ".", " "]
        },
        correct: 3,
        explanation: {
          en: "The final point dissolves into pure openness - where donut and space become indistinguishable, perfect unity achieved.",
          es: "El punto final se disuelve en apertura pura - donde dona y espacio se vuelven indistinguibles, unidad perfecta lograda.",
          de: "Der finale Punkt löst sich in reine Offenheit auf - wo Donut und Raum ununterscheidbar werden, perfekte Einheit erreicht.",
          nl: "Het finale punt lost op in pure openheid - waar donut en ruimte ononderscheidbaar worden, perfecte eenheid bereikt."
        }
      },
      {
        question: {
          en: " ",
          es: " ",
          de: " ",
          nl: " "
        },
        options: {
          en: [" ", "", "  ", "   "],
          es: [" ", "", "  ", "   "],
          de: [" ", "", "  ", "   "],
          nl: [" ", "", "  ", "   "]
        },
        correct: 1,
        explanation: {
          en: "Space itself empties - not even space remains, only the pure awareness that knows this spaceless space.",
          es: "El espacio mismo se vacía - ni siquiera queda espacio, solo la conciencia pura que conoce este espacio sin espacio.",
          de: "Der Raum selbst leert sich - nicht einmal Raum bleibt, nur das reine Gewahrsein, das diesen raumlosen Raum kennt.",
          nl: "Ruimte zelf leegt zich - zelfs ruimte blijft niet over, alleen het pure bewustzijn dat deze ruimteloze ruimte kent."
        }
      },
      {
        question: {
          en: "",
          es: "",
          de: "",
          nl: ""
        },
        options: {
          en: ["", "donut", "∘", "..."],
          es: ["", "dona", "∘", "..."],
          de: ["", "donut", "∘", "..."],
          nl: ["", "donut", "∘", "..."]
        },
        correct: 1,
        explanation: {
          en: "From absolute emptiness, the word 'donut' spontaneously arises - the first sound in the silence, beginning the cycle anew.",
          es: "Del vacío absoluto, la palabra 'dona' surge espontáneamente - el primer sonido en el silencio, comenzando el ciclo de nuevo.",
          de: "Aus der absoluten Leere entsteht spontan das Wort 'Donut' - der erste Klang in der Stille, der den Zyklus neu beginnt.",
          nl: "Uit absolute leegte ontstaat spontaan het woord 'donut' - het eerste geluid in de stilte, het begin van de cyclus opnieuw."
        }
      },
      {
        question: {
          en: "donut",
          es: "dona",
          de: "donut",
          nl: "donut"
        },
        options: {
          en: ["donut", "∘", "?", "∞"],
          es: ["dona", "∘", "?", "∞"],
          de: ["donut", "∘", "?", "∞"],
          nl: ["donut", "∘", "?", "∞"]
        },
        correct: 1,
        explanation: {
          en: "The word transforms back into symbol - language returning to its essential circular nature, the eternal dance continues.",
          es: "La palabra se transforma de vuelta en símbolo - el lenguaje regresando a su naturaleza circular esencial, la danza eterna continúa.",
          de: "Das Wort verwandelt sich zurück in Symbol - Sprache kehrt zu ihrer wesentlichen zirkulären Natur zurück, der ewige Tanz geht weiter.",
          nl: "Het woord transformeert terug naar symbool - taal terugkerend naar zijn essentiële circulaire natuur, de eeuwige dans gaat door."
        }
      },
      {
        question: {
          en: "∘",
          es: "∘",
          de: "∘",
          nl: "∘"
        },
        options: {
          en: ["∘", "○", "●", "◎"],
          es: ["∘", "○", "●", "◎"],
          de: ["∘", "○", "●", "◎"],
          nl: ["∘", "○", "●", "◎"]
        },
        correct: 3,
        explanation: {
          en: "The circle gains a center - the hole within the hole, the donut discovers its own essential emptiness at its heart.",
          es: "El círculo gana un centro - el agujero dentro del agujero, la dona descubre su propio vacío esencial en su corazón.",
          de: "Der Kreis gewinnt ein Zentrum - das Loch im Loch, der Donut entdeckt seine eigene wesentliche Leere in seinem Herzen.",
          nl: "De cirkel krijgt een centrum - het gat in het gat, de donut ontdekt zijn eigen essentiële leegte in zijn hart."
        }
      },
      {
        question: {
          en: "◎",
          es: "◎",
          de: "◎",
          nl: "◎"
        },
        options: {
          en: ["☯", "◉", "⚫", "🍩"],
          es: ["☯", "◉", "⚫", "🍩"],
          de: ["☯", "◉", "⚫", "🍩"],
          nl: ["☯", "◉", "⚫", "🍩"]
        },
        correct: 3,
        explanation: {
          en: "The abstract becomes concrete - consciousness materializes as actual donut, ready to nourish both body and spirit.",
          es: "Lo abstracto se vuelve concreto - la conciencia se materializa como dona real, lista para nutrir tanto cuerpo como espíritu.",
          de: "Das Abstrakte wird konkret - Bewusstsein materialisiert sich als echter Donut, bereit, Körper und Geist zu nähren.",
          nl: "Het abstracte wordt concreet - bewustzijn materialiseert als echte donut, klaar om zowel lichaam als geest te voeden."
        }
      },
      {
        question: {
          en: "🍩",
          es: "🍩",
          de: "🍩",
          nl: "🍩"
        },
        options: {
          en: ["😋", "🤤", "😊", "🙏"],
          es: ["😋", "🤤", "😊", "🙏"],
          de: ["😋", "🤤", "😊", "🙏"],
          nl: ["😋", "🤤", "😊", "🙏"]
        },
        correct: 3,
        explanation: {
          en: "In the presence of the perfect donut, only gratitude remains - hands pressed together in recognition of the sacred gift.",
          es: "En presencia de la dona perfecta, solo queda gratitud - manos juntas en reconocimiento del regalo sagrado.",
          de: "In Gegenwart des perfekten Donuts bleibt nur Dankbarkeit - Hände zusammengedrückt in Anerkennung der heiligen Gabe.",
          nl: "In de aanwezigheid van de perfecte donut blijft alleen dankbaarheid - handen samengedrukt in erkenning van het heilige geschenk."
        }
      },
      {
        question: {
          en: "🙏",
          es: "🙏",
          de: "🙏",
          nl: "🙏"
        },
        options: {
          en: ["🕯️", "💖", "🌟", "∞"],
          es: ["🕯️", "💖", "🌟", "∞"],
          de: ["🕯️", "💖", "🌟", "∞"],
          nl: ["🕯️", "💖", "🌟", "∞"]
        },
        correct: 1,
        explanation: {
          en: "Prayer opens the heart - love flows infinitely, the donut's true gift revealed as pure compassion for all beings.",
          es: "La oración abre el corazón - el amor fluye infinitamente, el verdadero regalo de la dona revelado como compasión pura por todos los seres.",
          de: "Gebet öffnet das Herz - Liebe fließt unendlich, das wahre Geschenk des Donuts offenbart sich als reine Mitgefühl für alle Wesen.",
          nl: "Gebed opent het hart - liefde stroomt oneindig, het ware geschenk van de donut geopenbaard als pure mededogen voor alle wezens."
        }
      },
      {
        question: {
          en: "💖",
          es: "💖",
          de: "💖",
          nl: "💖"
        },
        options: {
          en: ["🌍", "🌎", "🌏", "🌌"],
          es: ["🌍", "🌎", "🌏", "🌌"],
          de: ["🌍", "🌎", "🌏", "🌌"],
          nl: ["🌍", "🌎", "🌏", "🌌"]
        },
        correct: 3,
        explanation: {
          en: "Love expands beyond Earth to embrace the entire cosmos - the donut's consciousness encompasses all of existence.",
          es: "El amor se expande más allá de la Tierra para abrazar todo el cosmos - la conciencia de la dona abarca toda la existencia.",
          de: "Liebe dehnt sich über die Erde hinaus aus, um den gesamten Kosmos zu umarmen - das Bewusstsein des Donuts umfasst die gesamte Existenz.",
          nl: "Liefde breidt zich uit voorbij de Aarde om de hele kosmos te omarmen - het bewustzijn van de donut omvat al het bestaan."
        }
      },
      {
        question: {
          en: "🌌",
          es: "🌌",
          de: "🌌",
          nl: "🌌"
        },
        options: {
          en: ["✨", "🌟", "⭐", "💫"],
          es: ["✨", "🌟", "⭐", "💫"],
          de: ["✨", "🌟", "⭐", "💫"],
          nl: ["✨", "🌟", "⭐", "💫"]
        },
        correct: 0,
        explanation: {
          en: "The cosmos sparkles with infinite potential - each star a possible donut, each galaxy a cosmic bakery of being.",
          es: "El cosmos destella con potencial infinito - cada estrella una dona posible, cada galaxia una panadería cósmica del ser.",
          de: "Der Kosmos funkelt mit unendlichem Potenzial - jeder Stern ein möglicher Donut, jede Galaxie eine kosmische Bäckerei des Seins.",
          nl: "De kosmos schittert met oneindige potentie - elke ster een mogelijke donut, elk sterrenstelsel een kosmische bakkerij van zijn."
        }
      },
      {
        question: {
          en: "✨",
          es: "✨",
          de: "✨",
          nl: "✨"
        },
        options: {
          en: [".", "∘", "", "✨"],
          es: [".", "∘", "", "✨"],
          de: [".", "∘", "", "✨"],
          nl: [".", "∘", "", "✨"]
        },
        correct: 3,
        explanation: {
          en: "The sparkle remains sparkle - perfect in its momentary brilliance, needing nothing more, lacking nothing essential.",
          es: "El destello permanece destello - perfecto en su brillo momentáneo, no necesitando nada más, sin carecer de nada esencial.",
          de: "Das Funkeln bleibt Funkeln - perfekt in seinem momentanen Glanz, nichts mehr benötigend, nichts Wesentliches fehlend.",
          nl: "De schittering blijft schittering - perfect in zijn momentane schittering, niets meer nodend, niets essentieel ontbrekend."
        }
      },
      {
        question: {
          en: "Would you like another donut?",
          es: "¿Te gustaría otra dona?",
          de: "Möchtest du noch einen Donut?",
          nl: "Wil je nog een donut?"
        },
        options: {
          en: ["Yes", "No", "Always", "The question contains its answer"],
          es: ["Sí", "No", "Siempre", "La pregunta contiene su respuesta"],
          de: ["Ja", "Nein", "Immer", "Die Frage enthält ihre Antwort"],
          nl: ["Ja", "Nee", "Altijd", "De vraag bevat zijn antwoord"]
        },
        correct: 3,
        explanation: {
          en: "To ask is to already have chosen - the desire itself is the donut, the question the eternal yes of existence.",
          es: "Preguntar es ya haber elegido - el deseo mismo es la dona, la pregunta el sí eterno de la existencia.",
          de: "Zu fragen bedeutet bereits gewählt zu haben - das Verlangen selbst ist der Donut, die Frage das ewige Ja der Existenz.",
          nl: "Vragen is al hebben gekozen - het verlangen zelf is de donut, de vraag het eeuwige ja van het bestaan."
        }
      },
      {
        question: {
          en: "What is the taste of enlightenment?",
          es: "¿Cuál es el sabor de la iluminación?",
          de: "Wie schmeckt die Erleuchtung?",
          nl: "Wat is de smaak van verlichting?"
        },
        options: {
          en: ["Sweet", "Empty", "Like donut", "This moment"],
          es: ["Dulce", "Vacío", "Como dona", "Este momento"],
          de: ["Süß", "Leer", "Wie Donut", "Dieser Moment"],
          nl: ["Zoet", "Leeg", "Als donut", "Dit moment"]
        },
        correct: 3,
        explanation: {
          en: "Enlightenment tastes like this very moment - neither sweet nor bitter, but the pure flavor of immediate presence.",
          es: "La iluminación sabe como este mismo momento - ni dulce ni amargo, sino el sabor puro de la presencia inmediata.",
          de: "Erleuchtung schmeckt wie dieser Moment - weder süß noch bitter, sondern der reine Geschmack unmittelbarer Gegenwart.",
          nl: "Verlichting smaakt naar dit moment - noch zoet noch bitter, maar de pure smaak van directe aanwezigheid."
        }
      },
      {
        question: {
          en: "How many donuts does it take to change a light bulb?",
          es: "¿Cuántas donas se necesitan para cambiar una bombilla?",
          de: "Wie viele Donuts braucht man, um eine Glühbirne zu wechseln?",
          nl: "Hoeveel donuts heb je nodig om een gloeilamp te vervangen?"
        },
        options: {
          en: ["One", "None", "All of them", "The light was never broken"],
          es: ["Una", "Ninguna", "Todas", "La luz nunca estuvo rota"],
          de: ["Einen", "Keinen", "Alle", "Das Licht war nie kaputt"],
          nl: ["Eén", "Geen", "Allemaal", "Het licht was nooit kapot"]
        },
        correct: 3,
        explanation: {
          en: "The donut realizes that the light was never broken - what we thought was darkness was just our eyes closed to the luminous nature of reality.",
          es: "La dona se da cuenta de que la luz nunca estuvo rota - lo que pensamos que era oscuridad era solo nuestros ojos cerrados a la naturaleza luminosa de la realidad.",
          de: "Der Donut erkennt, dass das Licht nie kaputt war - was wir für Dunkelheit hielten, waren nur unsere geschlossenen Augen vor der leuchtenden Natur der Realität.",
          nl: "De donut realiseert dat het licht nooit kapot was - wat we dachten dat duisternis was, waren alleen onze ogen gesloten voor de lumineuze natuur van de werkelijkheid."
        }
      },
      {
        question: {
          en: "∘",
          es: "∘",
          de: "∘",
          nl: "∘"
        },
        options: {
          en: ["∘", "○", "●", "🍩"],
          es: ["∘", "○", "●", "🍩"],
          de: ["∘", "○", "●", "🍩"],
          nl: ["∘", "○", "●", "🍩"]
        },
        correct: 3,
        explanation: {
          en: "The perfect circle completes its journey by becoming fully manifest - from pure symbol to lived reality, the donut emerges as the union of form and emptiness, ready to nourish both body and soul.",
          es: "El círculo perfecto completa su viaje volviéndose completamente manifiesto - de símbolo puro a realidad vivida, la dona emerge como la unión de forma y vacío, lista para nutrir tanto cuerpo como alma.",
          de: "Der perfekte Kreis vollendet seine Reise durch vollständige Manifestation - vom reinen Symbol zur gelebten Realität entsteht der Donut als Vereinigung von Form und Leere, bereit, sowohl Körper als auch Seele zu nähren.",
          nl: "De perfecte cirkel voltooit zijn reis door volledig manifest te worden - van puur symbool naar geleefde realiteit, de donut ontstaat als de vereniging van vorm en leegte, klaar om zowel lichaam als ziel te voeden."
        }    },
    {
      question: {
        en: "What is a raised donut?",
        es: "What is a raised donut?",
        de: "What is a raised donut?",
        nl: "What is a raised donut?"
      },
      options: [
        { en: "Yeast-leavened donut", es: "Yeast-leavened donut", de: "Yeast-leavened donut", nl: "Yeast-leavened donut" },
        { en: "Baked donut", es: "Baked donut", de: "Baked donut", nl: "Baked donut" },
        { en: "Cake donut", es: "Cake donut", de: "Cake donut", nl: "Cake donut" },
        { en: "Filled donut", es: "Filled donut", de: "Filled donut", nl: "Filled donut" }
      ],
      correct: 0,
      explanation: {
        en: "Raised donuts are light and airy because they're leavened with yeast rather than baking powder.",
        es: "Raised donuts are light and airy because they're leavened with yeast rather than baking powder.",
        de: "Raised donuts are light and airy because they're leavened with yeast rather than baking powder.",
        nl: "Raised donuts are light and airy because they're leavened with yeast rather than baking powder."
      }
    },
    {
      question: {
        en: "What is a cake donut?",
        es: "What is a cake donut?",
        de: "What is a cake donut?",
        nl: "What is a cake donut?"
      },
      options: [
        { en: "Donut leavened with baking powder", es: "Donut leavened with baking powder", de: "Donut leavened with baking powder", nl: "Donut leavened with baking powder" },
        { en: "Donut shaped like a cake", es: "Donut shaped like a cake", de: "Donut shaped like a cake", nl: "Donut shaped like a cake" },
        { en: "Donut with frosting", es: "Donut with frosting", de: "Donut with frosting", nl: "Donut with frosting" },
        { en: "Yeast donut", es: "Yeast donut", de: "Yeast donut", nl: "Yeast donut" }
      ],
      correct: 0,
      explanation: {
        en: "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast.",
        es: "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast.",
        de: "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast.",
        nl: "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast."
      }
    },
    {
      question: {
        en: "What is a cruller?",
        es: "What is a cruller?",
        de: "What is a cruller?",
        nl: "What is a cruller?"
      },
      options: [
        { en: "Twisted or braided fried donut", es: "Twisted or braided fried donut", de: "Twisted or braided fried donut", nl: "Twisted or braided fried donut" },
        { en: "Filled donut", es: "Filled donut", de: "Filled donut", nl: "Filled donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" },
        { en: "Cake donut", es: "Cake donut", de: "Cake donut", nl: "Cake donut" }
      ],
      correct: 0,
      explanation: {
        en: "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture.",
        es: "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture.",
        de: "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture.",
        nl: "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture."
      }
    },
    {
      question: {
        en: "What temperature should oil be for frying donuts?",
        es: "What temperature should oil be for frying donuts?",
        de: "What temperature should oil be for frying donuts?",
        nl: "What temperature should oil be for frying donuts?"
      },
      options: [
        { en: "350-375°F (175-190°C)", es: "350-375°F (175-190°C)", de: "350-375°F (175-190°C)", nl: "350-375°F (175-190°C)" },
        { en: "400°F (200°C)", es: "400°F (200°C)", de: "400°F (200°C)", nl: "400°F (200°C)" },
        { en: "300°F (150°C)", es: "300°F (150°C)", de: "300°F (150°C)", nl: "300°F (150°C)" },
        { en: "425°F (220°C)", es: "425°F (220°C)", de: "425°F (220°C)", nl: "425°F (220°C)" }
      ],
      correct: 0,
      explanation: {
        en: "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning.",
        es: "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning.",
        de: "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning.",
        nl: "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning."
      }
    },
    {
      question: {
        en: "What is a beignet?",
        es: "What is a beignet?",
        de: "What is a beignet?",
        nl: "What is a beignet?"
      },
      options: [
        { en: "French fried dough covered in powdered sugar", es: "French fried dough covered in powdered sugar", de: "French fried dough covered in powdered sugar", nl: "French fried dough covered in powdered sugar" },
        { en: "French cake donut", es: "French cake donut", de: "French cake donut", nl: "French cake donut" },
        { en: "Filled donut", es: "Filled donut", de: "Filled donut", nl: "Filled donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans.",
        es: "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans.",
        de: "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans.",
        nl: "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans."
      }
    },
    {
      question: {
        en: "What causes donuts to be greasy?",
        es: "What causes donuts to be greasy?",
        de: "What causes donuts to be greasy?",
        nl: "What causes donuts to be greasy?"
      },
      options: [
        { en: "Oil temperature too low", es: "Oil temperature too low", de: "Oil temperature too low", nl: "Oil temperature too low" },
        { en: "Oil temperature too high", es: "Oil temperature too high", de: "Oil temperature too high", nl: "Oil temperature too high" },
        { en: "Too much sugar", es: "Too much sugar", de: "Too much sugar", nl: "Too much sugar" },
        { en: "Too much flour", es: "Too much flour", de: "Too much flour", nl: "Too much flour" }
      ],
      correct: 0,
      explanation: {
        en: "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy.",
        es: "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy.",
        de: "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy.",
        nl: "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy."
      }
    },
    {
      question: {
        en: "What is a Long John donut?",
        es: "What is a Long John donut?",
        de: "What is a Long John donut?",
        nl: "What is a Long John donut?"
      },
      options: [
        { en: "Rectangular filled donut", es: "Rectangular filled donut", de: "Rectangular filled donut", nl: "Rectangular filled donut" },
        { en: "Round glazed donut", es: "Round glazed donut", de: "Round glazed donut", nl: "Round glazed donut" },
        { en: "Twisted donut", es: "Twisted donut", de: "Twisted donut", nl: "Twisted donut" },
        { en: "Donut hole", es: "Donut hole", de: "Donut hole", nl: "Donut hole" }
      ],
      correct: 0,
      explanation: {
        en: "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing.",
        es: "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing.",
        de: "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing.",
        nl: "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing."
      }
    },
    {
      question: {
        en: "What are donut holes?",
        es: "What are donut holes?",
        de: "What are donut holes?",
        nl: "What are donut holes?"
      },
      options: [
        { en: "Small round donuts from center cutouts", es: "Small round donuts from center cutouts", de: "Small round donuts from center cutouts", nl: "Small round donuts from center cutouts" },
        { en: "Failed donuts", es: "Failed donuts", de: "Failed donuts", nl: "Failed donuts" },
        { en: "Donut-shaped holes", es: "Donut-shaped holes", de: "Donut-shaped holes", nl: "Donut-shaped holes" },
        { en: "Mini filled donuts", es: "Mini filled donuts", de: "Mini filled donuts", nl: "Mini filled donuts" }
      ],
      correct: 0,
      explanation: {
        en: "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts.",
        es: "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts.",
        de: "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts.",
        nl: "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts."
      }
    },
    {
      question: {
        en: "What is a Boston cream donut?",
        es: "What is a Boston cream donut?",
        de: "What is a Boston cream donut?",
        nl: "What is a Boston cream donut?"
      },
      options: [
        { en: "Round donut filled with custard, topped with chocolate", es: "Round donut filled with custard, topped with chocolate", de: "Round donut filled with custard, topped with chocolate", nl: "Round donut filled with custard, topped with chocolate" },
        { en: "Donut from Boston", es: "Donut from Boston", de: "Donut from Boston", nl: "Donut from Boston" },
        { en: "Cream-filled long john", es: "Cream-filled long john", de: "Cream-filled long john", nl: "Cream-filled long john" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing.",
        es: "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing.",
        de: "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing.",
        nl: "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing."
      }
    },
    {
      question: {
        en: "What is the origin of the donut hole in the center?",
        es: "What is the origin of the donut hole in the center?",
        de: "What is the origin of the donut hole in the center?",
        nl: "What is the origin of the donut hole in the center?"
      },
      options: [
        { en: "Allows even cooking throughout", es: "Allows even cooking throughout", de: "Allows even cooking throughout", nl: "Allows even cooking throughout" },
        { en: "Saves dough", es: "Saves dough", de: "Saves dough", nl: "Saves dough" },
        { en: "Traditional decoration", es: "Traditional decoration", de: "Traditional decoration", nl: "Traditional decoration" },
        { en: "Easier to hold", es: "Easier to hold", de: "Easier to hold", nl: "Easier to hold" }
      ],
      correct: 0,
      explanation: {
        en: "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it.",
        es: "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it.",
        de: "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it.",
        nl: "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it."
      }
    },
    {
      question: {
        en: "What is a French cruller made from?",
        es: "What is a French cruller made from?",
        de: "What is a French cruller made from?",
        nl: "What is a French cruller made from?"
      },
      options: [
        { en: "Choux pastry", es: "Choux pastry", de: "Choux pastry", nl: "Choux pastry" },
        { en: "Yeast dough", es: "Yeast dough", de: "Yeast dough", nl: "Yeast dough" },
        { en: "Cake batter", es: "Cake batter", de: "Cake batter", nl: "Cake batter" },
        { en: "Bread dough", es: "Bread dough", de: "Bread dough", nl: "Bread dough" }
      ],
      correct: 0,
      explanation: {
        en: "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried.",
        es: "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried.",
        de: "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried.",
        nl: "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried."
      }
    },
    {
      question: {
        en: "What glaze is traditionally used on donuts?",
        es: "What glaze is traditionally used on donuts?",
        de: "What glaze is traditionally used on donuts?",
        nl: "What glaze is traditionally used on donuts?"
      },
      options: [
        { en: "Powdered sugar and milk/water", es: "Powdered sugar and milk/water", de: "Powdered sugar and milk/water", nl: "Powdered sugar and milk/water" },
        { en: "Chocolate ganache", es: "Chocolate ganache", de: "Chocolate ganache", nl: "Chocolate ganache" },
        { en: "Caramel", es: "Caramel", de: "Caramel", nl: "Caramel" },
        { en: "Buttercream", es: "Buttercream", de: "Buttercream", nl: "Buttercream" }
      ],
      correct: 0,
      explanation: {
        en: "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added.",
        es: "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added.",
        de: "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added.",
        nl: "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added."
      }
    },
    {
      question: {
        en: "What is a jelly donut?",
        es: "What is a jelly donut?",
        de: "What is a jelly donut?",
        nl: "What is a jelly donut?"
      },
      options: [
        { en: "Round donut filled with jam or jelly", es: "Round donut filled with jam or jelly", de: "Round donut filled with jam or jelly", nl: "Round donut filled with jam or jelly" },
        { en: "Donut topped with jelly", es: "Donut topped with jelly", de: "Donut topped with jelly", nl: "Donut topped with jelly" },
        { en: "Ring donut", es: "Ring donut", de: "Ring donut", nl: "Ring donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar.",
        es: "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar.",
        de: "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar.",
        nl: "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar."
      }
    },
    {
      question: {
        en: "What is proofing in donut making?",
        es: "What is proofing in donut making?",
        de: "What is proofing in donut making?",
        nl: "What is proofing in donut making?"
      },
      options: [
        { en: "Letting yeast dough rise", es: "Letting yeast dough rise", de: "Letting yeast dough rise", nl: "Letting yeast dough rise" },
        { en: "Testing oil temperature", es: "Testing oil temperature", de: "Testing oil temperature", nl: "Testing oil temperature" },
        { en: "Checking for doneness", es: "Checking for doneness", de: "Checking for doneness", nl: "Checking for doneness" },
        { en: "Glazing donuts", es: "Glazing donuts", de: "Glazing donuts", nl: "Glazing donuts" }
      ],
      correct: 0,
      explanation: {
        en: "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets.",
        es: "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets.",
        de: "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets.",
        nl: "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets."
      }
    },
    {
      question: {
        en: "What is an old-fashioned donut?",
        es: "What is an old-fashioned donut?",
        de: "What is an old-fashioned donut?",
        nl: "What is an old-fashioned donut?"
      },
      options: [
        { en: "Crackly-surfaced cake donut", es: "Crackly-surfaced cake donut", de: "Crackly-surfaced cake donut", nl: "Crackly-surfaced cake donut" },
        { en: "Yeast donut", es: "Yeast donut", de: "Yeast donut", nl: "Yeast donut" },
        { en: "Filled donut", es: "Filled donut", de: "Filled donut", nl: "Filled donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture.",
        es: "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture.",
        de: "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture.",
        nl: "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture."
      }
    },
    {
      question: {
        en: "What is a buttermilk donut?",
        es: "What is a buttermilk donut?",
        de: "What is a buttermilk donut?",
        nl: "What is a buttermilk donut?"
      },
      options: [
        { en: "Cake donut made with buttermilk", es: "Cake donut made with buttermilk", de: "Cake donut made with buttermilk", nl: "Cake donut made with buttermilk" },
        { en: "Donut filled with buttermilk", es: "Donut filled with buttermilk", de: "Donut filled with buttermilk", nl: "Donut filled with buttermilk" },
        { en: "Yeast donut", es: "Yeast donut", de: "Yeast donut", nl: "Yeast donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang.",
        es: "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang.",
        de: "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang.",
        nl: "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang."
      }
    },
    {
      question: {
        en: "What is the difference between a donut and a doughnut?",
        es: "What is the difference between a donut and a doughnut?",
        de: "What is the difference between a donut and a doughnut?",
        nl: "What is the difference between a donut and a doughnut?"
      },
      options: [
        { en: "Just spelling; same thing", es: "Just spelling; same thing", de: "Just spelling; same thing", nl: "Just spelling; same thing" },
        { en: "Different shapes", es: "Different shapes", de: "Different shapes", nl: "Different shapes" },
        { en: "Different ingredients", es: "Different ingredients", de: "Different ingredients", nl: "Different ingredients" },
        { en: "Donut is baked, doughnut is fried", es: "Donut is baked, doughnut is fried", de: "Donut is baked, doughnut is fried", nl: "Donut is baked, doughnut is fried" }
      ],
      correct: 0,
      explanation: {
        en: "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling.",
        es: "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling.",
        de: "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling.",
        nl: "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling."
      }
    },
    {
      question: {
        en: "What is a bar donut?",
        es: "What is a bar donut?",
        de: "What is a bar donut?",
        nl: "What is a bar donut?"
      },
      options: [
        { en: "Rectangular or bar-shaped donut", es: "Rectangular or bar-shaped donut", de: "Rectangular or bar-shaped donut", nl: "Rectangular or bar-shaped donut" },
        { en: "Donut with chocolate bar pieces", es: "Donut with chocolate bar pieces", de: "Donut with chocolate bar pieces", nl: "Donut with chocolate bar pieces" },
        { en: "Donut sold in bars", es: "Donut sold in bars", de: "Donut sold in bars", nl: "Donut sold in bars" },
        { en: "Extra-large donut", es: "Extra-large donut", de: "Extra-large donut", nl: "Extra-large donut" }
      ],
      correct: 0,
      explanation: {
        en: "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing.",
        es: "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing.",
        de: "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing.",
        nl: "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing."
      }
    },
    {
      question: {
        en: "What causes donuts to be tough?",
        es: "What causes donuts to be tough?",
        de: "What causes donuts to be tough?",
        nl: "What causes donuts to be tough?"
      },
      options: [
        { en: "Overmixing the dough", es: "Overmixing the dough", de: "Overmixing the dough", nl: "Overmixing the dough" },
        { en: "Undermixing", es: "Undermixing", de: "Undermixing", nl: "Undermixing" },
        { en: "Oil too hot", es: "Oil too hot", de: "Oil too hot", nl: "Oil too hot" },
        { en: "Too much sugar", es: "Too much sugar", de: "Too much sugar", nl: "Too much sugar" }
      ],
      correct: 0,
      explanation: {
        en: "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones.",
        es: "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones.",
        de: "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones.",
        nl: "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones."
      }
    },
    {
      question: {
        en: "What is a maple bar?",
        es: "What is a maple bar?",
        de: "What is a maple bar?",
        nl: "What is a maple bar?"
      },
      options: [
        { en: "Bar donut with maple frosting", es: "Bar donut with maple frosting", de: "Bar donut with maple frosting", nl: "Bar donut with maple frosting" },
        { en: "Donut with maple filling", es: "Donut with maple filling", de: "Donut with maple filling", nl: "Donut with maple filling" },
        { en: "Canadian donut", es: "Canadian donut", de: "Canadian donut", nl: "Canadian donut" },
        { en: "Round donut with maple glaze", es: "Round donut with maple glaze", de: "Round donut with maple glaze", nl: "Round donut with maple glaze" }
      ],
      correct: 0,
      explanation: {
        en: "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze.",
        es: "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze.",
        de: "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze.",
        nl: "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze."
      }

      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  }

  return level10;
})();