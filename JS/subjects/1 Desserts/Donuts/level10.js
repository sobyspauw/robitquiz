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
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  }

  return level10;
})();