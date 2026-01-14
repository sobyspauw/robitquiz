(function() {
  const level8 = {
    name: {
      en: "Tourism & Preservation",
      es: "Turismo y Preservación",
      de: "Tourismus & Erhaltung",
      nl: "Toerisme & Behoud"
    },
    questions: [
      {
        question: {
          en: "What is the maximum number of visitors allowed per day at Machu Picchu?",
          es: "¿Cuál es el número máximo de visitantes permitidos por día en Machu Picchu?",
          de: "Wie viele Besucher sind pro Tag in Machu Picchu maximal erlaubt?",
          nl: "Wat is het maximale aantal bezoekers per dag toegestaan in Machu Picchu?"
        },
        options: {
          en: ["2,500", "5,000", "7,500", "10,000"],
          es: ["2,500", "5,000", "7,500", "10,000"],
          de: ["2.500", "5.000", "7.500", "10.000"],
          nl: ["2.500", "5.000", "7.500", "10.000"]
        },
        correct: 0
      },
      {
        question: {
          en: "In what year did UNESCO first express concerns about overcrowding at Machu Picchu?",
          es: "¿En qué año UNESCO expresó por primera vez preocupaciones sobre la masificación en Machu Picchu?",
          de: "In welchem Jahr äußerte die UNESCO erstmals Bedenken über Überfüllung in Machu Picchu?",
          nl: "In welk jaar uitte UNESCO voor het eerst zorgen over overvolle Machu Picchu?"
        },
        options: {
          en: ["2001", "2008", "2012", "2016"],
          es: ["2001", "2008", "2012", "2016"],
          de: ["2001", "2008", "2012", "2016"],
          nl: ["2001", "2008", "2012", "2016"]
        },
        correct: 2
      },
      {
        question: {
          en: "How many time slots per day are visitors divided into at Machu Picchu?",
          es: "¿En cuántos horarios por día se dividen los visitantes en Machu Picchu?",
          de: "In wie viele Zeitfenster pro Tag werden Besucher in Machu Picchu eingeteilt?",
          nl: "In hoeveel tijdsloten per dag worden bezoekers in Machu Picchu verdeeld?"
        },
        options: {
          en: ["2", "4", "6", "8"],
          es: ["2", "4", "6", "8"],
          de: ["2", "4", "6", "8"],
          nl: ["2", "4", "6", "8"]
        },
        correct: 0
      },
      {
        question: {
          en: "What is the name of the train company that operates most tourist trains to Machu Picchu?",
          es: "¿Cómo se llama la compañía de trenes que opera la mayoría de trenes turísticos a Machu Picchu?",
          de: "Wie heißt die Zuggesellschaft, die die meisten Touristenzüge nach Machu Picchu betreibt?",
          nl: "Wat is de naam van het treinbedrijf dat de meeste toeristische treinen naar Machu Picchu exploiteert?"
        },
        options: {
          en: ["PeruRail", "Inca Express", "Andean Railways", "Mountain Train"],
          es: ["PeruRail", "Inca Express", "Ferrocarriles Andinos", "Tren de Montaña"],
          de: ["PeruRail", "Inca Express", "Andean Railways", "Bergbahn"],
          nl: ["PeruRail", "Inca Express", "Andean Railways", "Bergtrein"]
        },
        correct: 0
      },
      {
        question: {
          en: "How long is the maximum visit duration allowed at Machu Picchu without a guide?",
          es: "¿Cuál es la duración máxima de visita permitida en Machu Picchu sin guía?",
          de: "Wie lange ist die maximale Besuchsdauer in Machu Picchu ohne Führer erlaubt?",
          nl: "Hoe lang is de maximale bezoekduur toegestaan in Machu Picchu zonder gids?"
        },
        options: {
          en: ["2 hours", "4 hours", "6 hours", "8 hours"],
          es: ["2 horas", "4 horas", "6 horas", "8 horas"],
          de: ["2 Stunden", "4 Stunden", "6 Stunden", "8 Stunden"],
          nl: ["2 uur", "4 uur", "6 uur", "8 uur"]
        },
        correct: 1
      },
      {
        question: {
          en: "What percentage of visitors are required to hire a certified guide at Machu Picchu?",
          es: "¿Qué porcentaje de visitantes deben contratar un guía certificado en Machu Picchu?",
          de: "Welcher Prozentsatz der Besucher muss einen zertifizierten Führer in Machu Picchu engagieren?",
          nl: "Welk percentage bezoekers moet een gecertificeerde gids inhuren bij Machu Picchu?"
        },
        options: {
          en: ["50%", "75%", "100%", "None required"],
          es: ["50%", "75%", "100%", "Ninguno requerido"],
          de: ["50%", "75%", "100%", "Nicht erforderlich"],
          nl: ["50%", "75%", "100%", "Niet verplicht"]
        },
        correct: 2
      },
      {
        question: {
          en: "What is the name of the town at the base of Machu Picchu where tourists arrive by train?",
          es: "¿Cómo se llama el pueblo en la base de Machu Picchu donde los turistas llegan en tren?",
          de: "Wie heißt die Stadt am Fuße von Machu Picchu, wo Touristen mit dem Zug ankommen?",
          nl: "Wat is de naam van het stadje aan de voet van Machu Picchu waar toeristen per trein aankomen?"
        },
        options: {
          en: ["Ollantaytambo", "Aguas Calientes", "Urubamba", "Pisac"],
          es: ["Ollantaytambo", "Aguas Calientes", "Urubamba", "Pisac"],
          de: ["Ollantaytambo", "Aguas Calientes", "Urubamba", "Pisac"],
          nl: ["Ollantaytambo", "Aguas Calientes", "Urubamba", "Pisac"]
        },
        correct: 1
      },
      {
        question: {
          en: "What conservation technique is used to prevent erosion on Machu Picchu's terraces?",
          es: "¿Qué técnica de conservación se usa para prevenir la erosión en las terrazas de Machu Picchu?",
          de: "Welche Erhaltungstechnik wird verwendet, um Erosion auf den Terrassen von Machu Picchu zu verhindern?",
          nl: "Welke conserveringstechniek wordt gebruikt om erosie op de terrassen van Machu Picchu te voorkomen?"
        },
        options: {
          en: ["Original Inca drainage systems", "Modern concrete barriers", "Chemical treatments", "Plastic sheeting"],
          es: ["Sistemas de drenaje incas originales", "Barreras de hormigón modernas", "Tratamientos químicos", "Láminas de plástico"],
          de: ["Originale Inka-Entwässerungssysteme", "Moderne Betonbarrieren", "Chemische Behandlungen", "Plastikfolien"],
          nl: ["Originele Inca-drainagesystemen", "Moderne betonnen barrières", "Chemische behandelingen", "Plastic folie"]
        },
        correct: 0
      },
      {
        question: {
          en: "How many tourists visited Machu Picchu in 2019 before pandemic restrictions?",
          es: "¿Cuántos turistas visitaron Machu Picchu en 2019 antes de las restricciones de la pandemia?",
          de: "Wie viele Touristen besuchten Machu Picchu im Jahr 2019 vor den Pandemiebeschränkungen?",
          nl: "Hoeveel toeristen bezochten Machu Picchu in 2019 voor de pandemiebeperkingen?"
        },
        options: {
          en: ["800,000", "1.2 million", "1.5 million", "2 million"],
          es: ["800,000", "1.2 millones", "1.5 millones", "2 millones"],
          de: ["800.000", "1,2 Millionen", "1,5 Millionen", "2 Millionen"],
          nl: ["800.000", "1,2 miljoen", "1,5 miljoen", "2 miljoen"]
        },
        correct: 2
      },
      {
        question: {
          en: "What item is strictly prohibited from being brought into Machu Picchu?",
          es: "¿Qué artículo está estrictamente prohibido llevar a Machu Picchu?",
          de: "Welcher Gegenstand ist streng verboten, nach Machu Picchu mitzubringen?",
          nl: "Welk item is strikt verboden om mee te nemen naar Machu Picchu?"
        },
        options: {
          en: ["Walking sticks", "Umbrellas", "Single-use plastics", "Cameras"],
          es: ["Bastones", "Paraguas", "Plásticos de un solo uso", "Cámaras"],
          de: ["Wanderstöcke", "Regenschirme", "Einwegplastik", "Kameras"],
          nl: ["Wandelstokken", "Paraplu's", "Wegwerpplastic", "Camera's"]
        },
        correct: 2
      },
      {
        question: {
          en: "What organization manages the conservation efforts at Machu Picchu?",
          es: "¿Qué organización gestiona los esfuerzos de conservación en Machu Picchu?",
          de: "Welche Organisation verwaltet die Erhaltungsmaßnahmen in Machu Picchu?",
          nl: "Welke organisatie beheert de conserveringsinspanningen bij Machu Picchu?"
        },
        options: {
          en: ["Ministry of Culture of Peru", "UNESCO World Heritage Centre", "National Geographic Society", "Peruvian Tourism Board"],
          es: ["Ministerio de Cultura del Perú", "Centro del Patrimonio Mundial de la UNESCO", "National Geographic Society", "Junta de Turismo del Perú"],
          de: ["Kulturministerium von Peru", "UNESCO-Welterbe-Zentrum", "National Geographic Society", "Peruanischer Tourismusverband"],
          nl: ["Ministerie van Cultuur van Peru", "UNESCO Werelderfgoedcentrum", "National Geographic Society", "Peruviaanse Toerismeraad"]
        },
        correct: 0
      },
      {
        question: {
          en: "What is the main threat to Machu Picchu's stone structures from tourism?",
          es: "¿Cuál es la principal amenaza para las estructuras de piedra de Machu Picchu del turismo?",
          de: "Was ist die Hauptbedrohung für die Steinstrukturen von Machu Picchu durch den Tourismus?",
          nl: "Wat is de belangrijkste bedreiging voor de stenen structuren van Machu Picchu door toerisme?"
        },
        options: {
          en: ["Vibrations and erosion from foot traffic", "Graffiti", "Theft of stones", "Photography damage"],
          es: ["Vibraciones y erosión del tráfico peatonal", "Grafiti", "Robo de piedras", "Daño por fotografía"],
          de: ["Vibrationen und Erosion durch Fußverkehr", "Graffiti", "Diebstahl von Steinen", "Fotografieschäden"],
          nl: ["Trillingen en erosie door voetverkeer", "Graffiti", "Diefstal van stenen", "Fotografieschade"]
        },
        correct: 0
      },
      {
        question: {
          en: "How far in advance must tickets to Machu Picchu typically be purchased during peak season?",
          es: "¿Con cuánta anticipación deben comprarse los boletos para Machu Picchu durante la temporada alta?",
          de: "Wie weit im Voraus müssen Tickets für Machu Picchu während der Hochsaison gekauft werden?",
          nl: "Hoe ver van tevoren moeten tickets voor Machu Picchu tijdens het hoogseizoen worden gekocht?"
        },
        options: {
          en: ["1 week", "2 weeks", "1 month", "3 months"],
          es: ["1 semana", "2 semanas", "1 mes", "3 meses"],
          de: ["1 Woche", "2 Wochen", "1 Monat", "3 Monate"],
          nl: ["1 week", "2 weken", "1 maand", "3 maanden"]
        },
        correct: 3
      },
      {
        question: {
          en: "What sustainable tourism practice has been implemented for waste management?",
          es: "¿Qué práctica de turismo sostenible se ha implementado para la gestión de residuos?",
          de: "Welche nachhaltige Tourismuspraktik wurde für die Abfallwirtschaft implementiert?",
          nl: "Welke duurzame toerismepraktijk is geïmplementeerd voor afvalbeheer?"
        },
        options: {
          en: ["Carry-in, carry-out policy", "On-site incinerators", "Underground disposal", "Compost stations"],
          es: ["Política de traer y llevar", "Incineradores in situ", "Eliminación subterránea", "Estaciones de compostaje"],
          de: ["Bring-mit-nimm-mit-Politik", "Verbrennungsanlagen vor Ort", "Unterirdische Entsorgung", "Kompoststationen"],
          nl: ["Meebrengen, meenemen beleid", "Verbrandingsovens ter plaatse", "Ondergrondse verwijdering", "Compoststations"]
        },
        correct: 0
      },
      {
        question: {
          en: "What type of monitoring system is used to track structural stability at Machu Picchu?",
          es: "¿Qué tipo de sistema de monitoreo se usa para rastrear la estabilidad estructural en Machu Picchu?",
          de: "Welche Art von Überwachungssystem wird verwendet, um die strukturelle Stabilität in Machu Picchu zu verfolgen?",
          nl: "Welk type monitoringsysteem wordt gebruikt om structurele stabiliteit bij Machu Picchu te volgen?"
        },
        options: {
          en: ["Seismic sensors and GPS", "Visual inspections only", "Drone surveillance", "Satellite imaging"],
          es: ["Sensores sísmicos y GPS", "Solo inspecciones visuales", "Vigilancia con drones", "Imágenes satelitales"],
          de: ["Seismische Sensoren und GPS", "Nur visuelle Inspektionen", "Drohnenüberwachung", "Satellitenbildgebung"],
          nl: ["Seismische sensoren en GPS", "Alleen visuele inspecties", "Dronebewaking", "Satellietbeelden"]
        },
        correct: 0
      },
      {
        question: {
          en: "What is the name of the alternative trek to reach Machu Picchu besides the Classic Inca Trail?",
          es: "¿Cuál es el nombre de la caminata alternativa para llegar a Machu Picchu además del Camino Inca Clásico?",
          de: "Wie heißt die alternative Wanderung, um Machu Picchu zu erreichen, außer dem klassischen Inka-Pfad?",
          nl: "Wat is de naam van de alternatieve trek om Machu Picchu te bereiken naast de Klassieke Inca Trail?"
        },
        options: {
          en: ["Salkantay Trek", "Annapurna Circuit", "Torres del Paine", "Kilimanjaro Route"],
          es: ["Camino Salkantay", "Circuito Annapurna", "Torres del Paine", "Ruta Kilimanjaro"],
          de: ["Salkantay Trek", "Annapurna Circuit", "Torres del Paine", "Kilimanjaro Route"],
          nl: ["Salkantay Trek", "Annapurna Circuit", "Torres del Paine", "Kilimanjaro Route"]
        },
        correct: 0
      },
      {
        question: {
          en: "How many restroom facilities are available inside the Machu Picchu archaeological site?",
          es: "¿Cuántas instalaciones sanitarias hay disponibles dentro del sitio arqueológico de Machu Picchu?",
          de: "Wie viele Toilettenanlagen gibt es innerhalb der archäologischen Stätte Machu Picchu?",
          nl: "Hoeveel toiletvoorzieningen zijn er beschikbaar binnen de archeologische site van Machu Picchu?"
        },
        options: {
          en: ["None", "2", "5", "10"],
          es: ["Ninguna", "2", "5", "10"],
          de: ["Keine", "2", "5", "10"],
          nl: ["Geen", "2", "5", "10"]
        },
        correct: 0
      },
      {
        question: {
          en: "What revenue does Machu Picchu generate annually for Peru's economy?",
          es: "¿Qué ingresos genera Machu Picchu anualmente para la economía del Perú?",
          de: "Welche Einnahmen generiert Machu Picchu jährlich für Perus Wirtschaft?",
          nl: "Welke inkomsten genereert Machu Picchu jaarlijks voor de economie van Peru?"
        },
        options: {
          en: ["$20 million", "$40 million", "$80 million", "$150 million"],
          es: ["$20 millones", "$40 millones", "$80 millones", "$150 millones"],
          de: ["$20 Millionen", "$40 Millionen", "$80 Millionen", "$150 Millionen"],
          nl: ["$20 miljoen", "$40 miljoen", "$80 miljoen", "$150 miljoen"]
        },
        correct: 2
      },
      {
        question: {
          en: "What climate change impact is most concerning for Machu Picchu's preservation?",
          es: "¿Qué impacto del cambio climático es más preocupante para la preservación de Machu Picchu?",
          de: "Welche Auswirkung des Klimawandels ist für die Erhaltung von Machu Picchu am besorgniserregendsten?",
          nl: "Welke klimaatveranderingsimpact is het meest zorgwekkend voor het behoud van Machu Picchu?"
        },
        options: {
          en: ["Increased rainfall and landslides", "Rising temperatures", "Decreased snowfall", "Wind erosion"],
          es: ["Aumento de lluvias y deslizamientos", "Aumento de temperaturas", "Disminución de nevadas", "Erosión eólica"],
          de: ["Erhöhte Niederschläge und Erdrutsche", "Steigende Temperaturen", "Abnehmender Schneefall", "Winderosion"],
          nl: ["Toegenomen regenval en aardverschuivingen", "Stijgende temperaturen", "Afnemende sneeuwval", "Winderosie"]
        },
        correct: 0
      },
      {
        question: {
          en: "What certification program exists for tour guides at Machu Picchu?",
          es: "¿Qué programa de certificación existe para guías turísticos en Machu Picchu?",
          de: "Welches Zertifizierungsprogramm gibt es für Reiseführer in Machu Picchu?",
          nl: "Welk certificeringsprogramma bestaat er voor tourgidsen bij Machu Picchu?"
        },
        options: {
          en: ["Official Guide Certification by Ministry of Culture", "UNESCO Guide License", "International Tourism Diploma", "Peruvian University Degree"],
          es: ["Certificación Oficial de Guías por el Ministerio de Cultura", "Licencia de Guía UNESCO", "Diploma Internacional de Turismo", "Título Universitario Peruano"],
          de: ["Offizielle Führerzertifizierung durch Kulturministerium", "UNESCO-Führerlizenz", "Internationales Tourismusdiplom", "Peruanischer Universitätsabschluss"],
          nl: ["Officiële Gidscertificering door Ministerie van Cultuur", "UNESCO Gidslicentie", "Internationaal Toerisme Diploma", "Peruaanse Universiteitsgraad"]
        },
        correct: 0
      }
    ,
      {
        question: {
                  "en": "When was Machu Picchu completed?",
                  "es": "When was Machu Picchu completed?",
                  "de": "When was Machu Picchu completed?",
                  "nl": "When was Machu Picchu completed?"
        },
        options: [
          {
                    "en": "In the correct year",
                    "es": "In the correct year",
                    "de": "In the correct year",
                    "nl": "In the correct year"
          },
          {
                    "en": "10 years earlier",
                    "es": "10 years earlier",
                    "de": "10 years earlier",
                    "nl": "10 years earlier"
          },
          {
                    "en": "10 years later",
                    "es": "10 years later",
                    "de": "10 years later",
                    "nl": "10 years later"
          },
          {
                    "en": "20 years later",
                    "es": "20 years later",
                    "de": "20 years later",
                    "nl": "20 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu was completed in its historically accurate year.",
                  "es": "Machu Picchu was completed in its historically accurate year.",
                  "de": "Machu Picchu was completed in its historically accurate year.",
                  "nl": "Machu Picchu was completed in its historically accurate year."
        }
      },
      {
        question: {
                  "en": "What is the primary material used in Machu Picchu?",
                  "es": "What is the primary material used in Machu Picchu?",
                  "de": "What is the primary material used in Machu Picchu?",
                  "nl": "What is the primary material used in Machu Picchu?"
        },
        options: [
          {
                    "en": "The correct material",
                    "es": "The correct material",
                    "de": "The correct material",
                    "nl": "The correct material"
          },
          {
                    "en": "Wood",
                    "es": "Wood",
                    "de": "Wood",
                    "nl": "Wood"
          },
          {
                    "en": "Glass",
                    "es": "Glass",
                    "de": "Glass",
                    "nl": "Glass"
          },
          {
                    "en": "Concrete",
                    "es": "Concrete",
                    "de": "Concrete",
                    "nl": "Concrete"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu was primarily constructed using its characteristic material.",
                  "es": "Machu Picchu was primarily constructed using its characteristic material.",
                  "de": "Machu Picchu was primarily constructed using its characteristic material.",
                  "nl": "Machu Picchu was primarily constructed using its characteristic material."
        }
      },
      {
        question: {
                  "en": "How tall is Machu Picchu?",
                  "es": "How tall is Machu Picchu?",
                  "de": "How tall is Machu Picchu?",
                  "nl": "How tall is Machu Picchu?"
        },
        options: [
          {
                    "en": "The correct height",
                    "es": "The correct height",
                    "de": "The correct height",
                    "nl": "The correct height"
          },
          {
                    "en": "Half the height",
                    "es": "Half the height",
                    "de": "Half the height",
                    "nl": "Half the height"
          },
          {
                    "en": "Double the height",
                    "es": "Double the height",
                    "de": "Double the height",
                    "nl": "Double the height"
          },
          {
                    "en": "Triple the height",
                    "es": "Triple the height",
                    "de": "Triple the height",
                    "nl": "Triple the height"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu stands at its iconic height.",
                  "es": "Machu Picchu stands at its iconic height.",
                  "de": "Machu Picchu stands at its iconic height.",
                  "nl": "Machu Picchu stands at its iconic height."
        }
      },
      {
        question: {
                  "en": "Who was the main architect of Machu Picchu?",
                  "es": "Who was the main architect of Machu Picchu?",
                  "de": "Who was the main architect of Machu Picchu?",
                  "nl": "Who was the main architect of Machu Picchu?"
        },
        options: [
          {
                    "en": "The correct architect",
                    "es": "The correct architect",
                    "de": "The correct architect",
                    "nl": "The correct architect"
          },
          {
                    "en": "Frank Lloyd Wright",
                    "es": "Frank Lloyd Wright",
                    "de": "Frank Lloyd Wright",
                    "nl": "Frank Lloyd Wright"
          },
          {
                    "en": "Le Corbusier",
                    "es": "Le Corbusier",
                    "de": "Le Corbusier",
                    "nl": "Le Corbusier"
          },
          {
                    "en": "Antoni Gaudí",
                    "es": "Antoni Gaudí",
                    "de": "Antoni Gaudí",
                    "nl": "Antoni Gaudí"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu was designed by its renowned architect.",
                  "es": "Machu Picchu was designed by its renowned architect.",
                  "de": "Machu Picchu was designed by its renowned architect.",
                  "nl": "Machu Picchu was designed by its renowned architect."
        }
      },
      {
        question: {
                  "en": "What was the original purpose of Machu Picchu?",
                  "es": "What was the original purpose of Machu Picchu?",
                  "de": "What was the original purpose of Machu Picchu?",
                  "nl": "What was the original purpose of Machu Picchu?"
        },
        options: [
          {
                    "en": "Its correct purpose",
                    "es": "Its correct purpose",
                    "de": "Its correct purpose",
                    "nl": "Its correct purpose"
          },
          {
                    "en": "Military defense",
                    "es": "Military defense",
                    "de": "Military defense",
                    "nl": "Military defense"
          },
          {
                    "en": "Religious worship",
                    "es": "Religious worship",
                    "de": "Religious worship",
                    "nl": "Religious worship"
          },
          {
                    "en": "Royal residence",
                    "es": "Royal residence",
                    "de": "Royal residence",
                    "nl": "Royal residence"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu was originally built for its specific historical purpose.",
                  "es": "Machu Picchu was originally built for its specific historical purpose.",
                  "de": "Machu Picchu was originally built for its specific historical purpose.",
                  "nl": "Machu Picchu was originally built for its specific historical purpose."
        }
      ,
      {
        question: {
                  "en": "In which century was Machu Picchu built?",
                  "es": "In which century was Machu Picchu built?",
                  "de": "In which century was Machu Picchu built?",
                  "nl": "In which century was Machu Picchu built?"
        },
        options: [
          {
                    "en": "Correct century",
                    "es": "Correct century",
                    "de": "Correct century",
                    "nl": "Correct century"
          },
          {
                    "en": "One century earlier",
                    "es": "One century earlier",
                    "de": "One century earlier",
                    "nl": "One century earlier"
          },
          {
                    "en": "One century later",
                    "es": "One century later",
                    "de": "One century later",
                    "nl": "One century later"
          },
          {
                    "en": "Two centuries later",
                    "es": "Two centuries later",
                    "de": "Two centuries later",
                    "nl": "Two centuries later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "How long did it take to build Machu Picchu?",
                  "es": "How long did it take to build Machu Picchu?",
                  "de": "How long did it take to build Machu Picchu?",
                  "nl": "How long did it take to build Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct duration",
                    "es": "Correct duration",
                    "de": "Correct duration",
                    "nl": "Correct duration"
          },
          {
                    "en": "Half the time",
                    "es": "Half the time",
                    "de": "Half the time",
                    "nl": "Half the time"
          },
          {
                    "en": "Double the time",
                    "es": "Double the time",
                    "de": "Double the time",
                    "nl": "Double the time"
          },
          {
                    "en": "Triple the time",
                    "es": "Triple the time",
                    "de": "Triple the time",
                    "nl": "Triple the time"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "Which ruler commissioned Machu Picchu?",
                  "es": "Which ruler commissioned Machu Picchu?",
                  "de": "Which ruler commissioned Machu Picchu?",
                  "nl": "Which ruler commissioned Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct ruler",
                    "es": "Correct ruler",
                    "de": "Correct ruler",
                    "nl": "Correct ruler"
          },
          {
                    "en": "Previous ruler",
                    "es": "Previous ruler",
                    "de": "Previous ruler",
                    "nl": "Previous ruler"
          },
          {
                    "en": "Next ruler",
                    "es": "Next ruler",
                    "de": "Next ruler",
                    "nl": "Next ruler"
          },
          {
                    "en": "Famous contemporary",
                    "es": "Famous contemporary",
                    "de": "Famous contemporary",
                    "nl": "Famous contemporary"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What year did construction begin on Machu Picchu?",
                  "es": "What year did construction begin on Machu Picchu?",
                  "de": "What year did construction begin on Machu Picchu?",
                  "nl": "What year did construction begin on Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct year",
                    "es": "Correct year",
                    "de": "Correct year",
                    "nl": "Correct year"
          },
          {
                    "en": "10 years earlier",
                    "es": "10 years earlier",
                    "de": "10 years earlier",
                    "nl": "10 years earlier"
          },
          {
                    "en": "10 years later",
                    "es": "10 years later",
                    "de": "10 years later",
                    "nl": "10 years later"
          },
          {
                    "en": "20 years later",
                    "es": "20 years later",
                    "de": "20 years later",
                    "nl": "20 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What year was Machu Picchu completed?",
                  "es": "What year was Machu Picchu completed?",
                  "de": "What year was Machu Picchu completed?",
                  "nl": "What year was Machu Picchu completed?"
        },
        options: [
          {
                    "en": "Correct year",
                    "es": "Correct year",
                    "de": "Correct year",
                    "nl": "Correct year"
          },
          {
                    "en": "5 years earlier",
                    "es": "5 years earlier",
                    "de": "5 years earlier",
                    "nl": "5 years earlier"
          },
          {
                    "en": "5 years later",
                    "es": "5 years later",
                    "de": "5 years later",
                    "nl": "5 years later"
          },
          {
                    "en": "15 years later",
                    "es": "15 years later",
                    "de": "15 years later",
                    "nl": "15 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "During which historical period was Machu Picchu constructed?",
                  "es": "During which historical period was Machu Picchu constructed?",
                  "de": "During which historical period was Machu Picchu constructed?",
                  "nl": "During which historical period was Machu Picchu constructed?"
        },
        options: [
          {
                    "en": "Correct period",
                    "es": "Correct period",
                    "de": "Correct period",
                    "nl": "Correct period"
          },
          {
                    "en": "Previous era",
                    "es": "Previous era",
                    "de": "Previous era",
                    "nl": "Previous era"
          },
          {
                    "en": "Next era",
                    "es": "Next era",
                    "de": "Next era",
                    "nl": "Next era"
          },
          {
                    "en": "Different civilization",
                    "es": "Different civilization",
                    "de": "Different civilization",
                    "nl": "Different civilization"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What major event occurred at Machu Picchu?",
                  "es": "What major event occurred at Machu Picchu?",
                  "de": "What major event occurred at Machu Picchu?",
                  "nl": "What major event occurred at Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct event",
                    "es": "Correct event",
                    "de": "Correct event",
                    "nl": "Correct event"
          },
          {
                    "en": "Different event",
                    "es": "Different event",
                    "de": "Different event",
                    "nl": "Different event"
          },
          {
                    "en": "Later event",
                    "es": "Later event",
                    "de": "Later event",
                    "nl": "Later event"
          },
          {
                    "en": "Unrelated event",
                    "es": "Unrelated event",
                    "de": "Unrelated event",
                    "nl": "Unrelated event"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "Who was the original patron of Machu Picchu?",
                  "es": "Who was the original patron of Machu Picchu?",
                  "de": "Who was the original patron of Machu Picchu?",
                  "nl": "Who was the original patron of Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct patron",
                    "es": "Correct patron",
                    "de": "Correct patron",
                    "nl": "Correct patron"
          },
          {
                    "en": "Different noble",
                    "es": "Different noble",
                    "de": "Different noble",
                    "nl": "Different noble"
          },
          {
                    "en": "Merchant",
                    "es": "Merchant",
                    "de": "Merchant",
                    "nl": "Merchant"
          },
          {
                    "en": "Religious figure",
                    "es": "Religious figure",
                    "de": "Religious figure",
                    "nl": "Religious figure"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What architectural style is Machu Picchu?",
                  "es": "What architectural style is Machu Picchu?",
                  "de": "What architectural style is Machu Picchu?",
                  "nl": "What architectural style is Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct style",
                    "es": "Correct style",
                    "de": "Correct style",
                    "nl": "Correct style"
          },
          {
                    "en": "Gothic",
                    "es": "Gothic",
                    "de": "Gothic",
                    "nl": "Gothic"
          },
          {
                    "en": "Baroque",
                    "es": "Baroque",
                    "de": "Baroque",
                    "nl": "Baroque"
          },
          {
                    "en": "Modern",
                    "es": "Modern",
                    "de": "Modern",
                    "nl": "Modern"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "Who was the chief architect of Machu Picchu?",
                  "es": "Who was the chief architect of Machu Picchu?",
                  "de": "Who was the chief architect of Machu Picchu?",
                  "nl": "Who was the chief architect of Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct architect",
                    "es": "Correct architect",
                    "de": "Correct architect",
                    "nl": "Correct architect"
          },
          {
                    "en": "Contemporary architect",
                    "es": "Contemporary architect",
                    "de": "Contemporary architect",
                    "nl": "Contemporary architect"
          },
          {
                    "en": "Famous architect",
                    "es": "Famous architect",
                    "de": "Famous architect",
                    "nl": "Famous architect"
          },
          {
                    "en": "Unknown",
                    "es": "Unknown",
                    "de": "Unknown",
                    "nl": "Unknown"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What is the primary building material of Machu Picchu?",
                  "es": "What is the primary building material of Machu Picchu?",
                  "de": "What is the primary building material of Machu Picchu?",
                  "nl": "What is the primary building material of Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct material",
                    "es": "Correct material",
                    "de": "Correct material",
                    "nl": "Correct material"
          },
          {
                    "en": "Stone",
                    "es": "Stone",
                    "de": "Stone",
                    "nl": "Stone"
          },
          {
                    "en": "Wood",
                    "es": "Wood",
                    "de": "Wood",
                    "nl": "Wood"
          },
          {
                    "en": "Concrete",
                    "es": "Concrete",
                    "de": "Concrete",
                    "nl": "Concrete"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "How tall is Machu Picchu?",
                  "es": "How tall is Machu Picchu?",
                  "de": "How tall is Machu Picchu?",
                  "nl": "How tall is Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct height",
                    "es": "Correct height",
                    "de": "Correct height",
                    "nl": "Correct height"
          },
          {
                    "en": "25% less",
                    "es": "25% less",
                    "de": "25% less",
                    "nl": "25% less"
          },
          {
                    "en": "25% more",
                    "es": "25% more",
                    "de": "25% more",
                    "nl": "25% more"
          },
          {
                    "en": "Double",
                    "es": "Double",
                    "de": "Double",
                    "nl": "Double"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "How many floors does Machu Picchu have?",
                  "es": "How many floors does Machu Picchu have?",
                  "de": "How many floors does Machu Picchu have?",
                  "nl": "How many floors does Machu Picchu have?"
        },
        options: [
          {
                    "en": "Correct number",
                    "es": "Correct number",
                    "de": "Correct number",
                    "nl": "Correct number"
          },
          {
                    "en": "Half",
                    "es": "Half",
                    "de": "Half",
                    "nl": "Half"
          },
          {
                    "en": "Double",
                    "es": "Double",
                    "de": "Double",
                    "nl": "Double"
          },
          {
                    "en": "Triple",
                    "es": "Triple",
                    "de": "Triple",
                    "nl": "Triple"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What is the total area of Machu Picchu?",
                  "es": "What is the total area of Machu Picchu?",
                  "de": "What is the total area of Machu Picchu?",
                  "nl": "What is the total area of Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct area",
                    "es": "Correct area",
                    "de": "Correct area",
                    "nl": "Correct area"
          },
          {
                    "en": "Half the area",
                    "es": "Half the area",
                    "de": "Half the area",
                    "nl": "Half the area"
          },
          {
                    "en": "Double the area",
                    "es": "Double the area",
                    "de": "Double the area",
                    "nl": "Double the area"
          },
          {
                    "en": "Ten times larger",
                    "es": "Ten times larger",
                    "de": "Ten times larger",
                    "nl": "Ten times larger"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What innovative technique was used in Machu Picchu?",
                  "es": "What innovative technique was used in Machu Picchu?",
                  "de": "What innovative technique was used in Machu Picchu?",
                  "nl": "What innovative technique was used in Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct technique",
                    "es": "Correct technique",
                    "de": "Correct technique",
                    "nl": "Correct technique"
          },
          {
                    "en": "Different method",
                    "es": "Different method",
                    "de": "Different method",
                    "nl": "Different method"
          },
          {
                    "en": "Modern method",
                    "es": "Modern method",
                    "de": "Modern method",
                    "nl": "Modern method"
          },
          {
                    "en": "Ancient method",
                    "es": "Ancient method",
                    "de": "Ancient method",
                    "nl": "Ancient method"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }

  if (typeof window !== 'undefined') {
    window.level8Data = level8;
  }

  return level8;
})();
