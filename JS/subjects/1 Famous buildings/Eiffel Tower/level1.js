(function() {
  const level1 = {
    name: {
      en: "Basics",
      es: "Conceptos Básicos",
      de: "Grundlagen",
      nl: "Basiskennis"
    },
    questions: [
      {
        question: {
          en: "In which city is the Eiffel Tower located?",
          es: "¿En qué ciudad se encuentra la Torre Eiffel?",
          de: "In welcher Stadt befindet sich der Eiffelturm?",
          nl: "In welke stad staat de Eiffeltoren?"
        },
        options: [
          { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is located in Paris, France, and is one of the most iconic landmarks in the world.",
          es: "La Torre Eiffel se encuentra en París, Francia, y es uno de los monumentos más icónicos del mundo.",
          de: "Der Eiffelturm befindet sich in Paris, Frankreich, und ist eines der bekanntesten Wahrzeichen der Welt.",
          nl: "De Eiffeltoren staat in Parijs, Frankrijk, en is een van de meest iconische monumenten ter wereld."
        }
      },
      {
        question: {
          en: "What is the approximate height of the Eiffel Tower?",
          es: "¿Cuál es la altura aproximada de la Torre Eiffel?",
          de: "Wie hoch ist der Eiffelturm ungefähr?",
          nl: "Wat is de geschatte hoogte van de Eiffeltoren?"
        },
        options: [
          { en: "330 m", es: "330 metros", de: "330 Meter", nl: "330 meter" },
          { en: "250 m", es: "250 metros", de: "250 Meter", nl: "250 meter" },
          { en: "400 m", es: "400 metros", de: "400 Meter", nl: "400 meter" },
          { en: "500 m", es: "500 metros", de: "500 Meter", nl: "500 meter" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is approximately 330 meters tall, including its antenna.",
          es: "La Torre Eiffel mide aproximadamente 330 metros de altura, incluyendo su antena.",
          de: "Der Eiffelturm ist mit Antenne etwa 330 Meter hoch.",
          nl: "De Eiffeltoren is ongeveer 330 meter hoog, inclusief de antenne."
        }
      },
      {
        question: {
          en: "In which year was the Eiffel Tower completed?",
          es: "¿En qué año se completó la Torre Eiffel?",
          de: "In welchem Jahr wurde der Eiffelturm fertiggestellt?",
          nl: "In welk jaar werd de Eiffeltoren voltooid?"
        },
        options: [
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1875", es: "1875", de: "1875", nl: "1875" },
          { en: "1914", es: "1914", de: "1914", nl: "1914" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower was completed in 1889 for the World's Fair held in Paris.",
          es: "La Torre Eiffel se completó en 1889 para la Exposición Universal celebrada en París.",
          de: "Der Eiffelturm wurde 1889 für die Weltausstellung in Paris fertiggestellt.",
          nl: "De Eiffeltoren werd in 1889 voltooid voor de Wereldtentoonstelling in Parijs."
        }
      },
      {
        question: {
          en: "Who was the Eiffel Tower named after?",
          es: "¿De quién recibe el nombre la Torre Eiffel?",
          de: "Nach wem wurde der Eiffelturm benannt?",
          nl: "Naar wie is de Eiffeltoren vernoemd?"
        },
        options: [
          { en: "Gustave Eiffel", es: "Gustave Eiffel", de: "Gustave Eiffel", nl: "Gustave Eiffel" },
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
          { en: "Louis XIV", es: "Luis XIV", de: "Ludwig XIV", nl: "Lodewijk XIV" },
          { en: "Charles de Gaulle", es: "Charles de Gaulle", de: "Charles de Gaulle", nl: "Charles de Gaulle" }
        ],
        correct: 0,
        explanation: {
          en: "The tower was named after engineer Gustave Eiffel, whose company designed and built it.",
          es: "La torre lleva el nombre del ingeniero Gustave Eiffel, cuya empresa la diseñó y construyó.",
          de: "Der Turm wurde nach dem Ingenieur Gustave Eiffel benannt, dessen Firma ihn entwarf und baute.",
          nl: "De toren is vernoemd naar ingenieur Gustave Eiffel, wiens bedrijf hem ontwierp en bouwde."
        }
      },
      {
        question: {
          en: "What material is the Eiffel Tower primarily made of?",
          es: "¿De qué material está hecha principalmente la Torre Eiffel?",
          de: "Aus welchem Material besteht der Eiffelturm hauptsächlich?",
          nl: "Van welk materiaal is de Eiffeltoren voornamelijk gemaakt?"
        },
        options: [
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "Ijzer" },
          { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
          { en: "Bronze", es: "Bronce", de: "Bronze", nl: "Brons" },
          { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is made of wrought iron, a material that was innovative for such a large structure at the time.",
          es: "La Torre Eiffel está hecha de hierro forjado, un material que era innovador para una estructura tan grande en esa época.",
          de: "Der Eiffelturm besteht aus Schmiedeeisen, einem Material, das für ein so großes Bauwerk damals innovativ war.",
          nl: "De Eiffeltoren is gemaakt van smeedijzer, een materiaal dat destijds innovatief was voor zo'n grote structuur."
        }
      },
      {
        question: {
          en: "How many levels does the Eiffel Tower have for visitors?",
          es: "¿Cuántos niveles tiene la Torre Eiffel para visitantes?",
          de: "Wie viele Ebenen hat der Eiffelturm für Besucher?",
          nl: "Hoeveel verdiepingen heeft de Eiffeltoren voor bezoekers?"
        },
        options: [
          { en: "3 levels", es: "3 niveles", de: "3 Ebenen", nl: "3 verdiepingen" },
          { en: "2 levels", es: "2 niveles", de: "2 Ebenen", nl: "2 verdiepingen" },
          { en: "4 levels", es: "4 niveles", de: "4 Ebenen", nl: "4 verdiepingen" },
          { en: "5 levels", es: "5 niveles", de: "5 Ebenen", nl: "5 verdiepingen" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower has three levels accessible to visitors, each offering different views and experiences.",
          es: "La Torre Eiffel tiene tres niveles accesibles para los visitantes, cada uno ofrece vistas y experiencias diferentes.",
          de: "Der Eiffelturm hat drei für Besucher zugängliche Ebenen, die jeweils unterschiedliche Ausblicke und Erlebnisse bieten.",
          nl: "De Eiffeltoren heeft drie verdiepingen die toegankelijk zijn voor bezoekers, elk met verschillende uitzichten en ervaringen."
        }
      },
      {
        question: {
          en: "What color is the Eiffel Tower painted?",
          es: "¿De qué color está pintada la Torre Eiffel?",
          de: "Welche Farbe hat der Eiffelturm?",
          nl: "Welke kleur heeft de Eiffeltoren?"
        },
        options: [
          { en: "Brown", es: "Marrón bronce", de: "Bronzebraun", nl: "Bronsbruin" },
          { en: "Silver", es: "Plateado", de: "Silber", nl: "Zilver" },
          { en: "Gold", es: "Dorado", de: "Gold", nl: "Goud" },
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is painted in a specially mixed shade called 'Eiffel Tower Brown', a bronze-brown color.",
          es: "La Torre Eiffel está pintada en un tono especialmente mezclado llamado 'Marrón Torre Eiffel', un color marrón bronce.",
          de: "Der Eiffelturm ist in einem speziell gemischten Farbton namens 'Eiffelturm-Braun' gestrichen, einer bronzebraunen Farbe.",
          nl: "De Eiffeltoren is geschilderd in een speciaal gemengde tint genaamd 'Eiffeltoren Bruin', een bronsbruine kleur."
        }
      },
      {
        question: {
          en: "What was the original purpose of building the Eiffel Tower?",
          es: "¿Cuál era el propósito original de construir la Torre Eiffel?",
          de: "Was war der ursprüngliche Zweck des Baus des Eiffelturms?",
          nl: "Wat was het oorspronkelijke doel van de bouw van de Eiffeltoren?"
        },
        options: [
          { en: "World's Fair entrance arch", es: "Arco de entrada para la Exposición Universal", de: "Eingangsbogen für die Weltausstellung", nl: "Toegangsboog voor de Wereldtentoonstelling" },
          { en: "Military watchtower", es: "Torre de vigilancia militar", de: "Militärischer Wachturm", nl: "Militaire uitkijktoren" },
          { en: "Radio transmission tower", es: "Torre de transmisión de radio", de: "Funkturm", nl: "Radiotransmissietoren" },
          { en: "Observatory", es: "Observatorio", de: "Observatorium", nl: "Observatorium" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower was built as the entrance arch for the 1889 World's Fair celebrating the French Revolution's centennial.",
          es: "La Torre Eiffel se construyó como arco de entrada para la Exposición Universal de 1889 que celebraba el centenario de la Revolución Francesa.",
          de: "Der Eiffelturm wurde als Eingangsbogen für die Weltausstellung 1889 zur Feier des hundertjährigen Jubiläums der Französischen Revolution gebaut.",
          nl: "De Eiffeltoren werd gebouwd als toegangsboog voor de Wereldtentoonstelling van 1889 ter viering van het honderdjarig bestaan van de Franse Revolutie."
        }
      },
      {
        question: {
          en: "Which river is the Eiffel Tower located near?",
          es: "¿Cerca de qué río se encuentra la Torre Eiffel?",
          de: "In der Nähe welches Flusses befindet sich der Eiffelturm?",
          nl: "Bij welke rivier staat de Eiffeltoren?"
        },
        options: [
          { en: "Seine", es: "Sena", de: "Seine", nl: "Seine" },
          { en: "Thames", es: "Támesis", de: "Themse", nl: "Theems" },
          { en: "Rhine", es: "Rin", de: "Rhein", nl: "Rijn" },
          { en: "Danube", es: "Danubio", de: "Donau", nl: "Donau" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower stands on the Champ de Mars near the Seine River in Paris.",
          es: "La Torre Eiffel se encuentra en el Campo de Marte cerca del río Sena en París.",
          de: "Der Eiffelturm steht auf dem Champ de Mars in der Nähe der Seine in Paris.",
          nl: "De Eiffeltoren staat op het Champ de Mars bij de Seine in Parijs."
        }
      },
      {
        question: {
          en: "How long did it take to construct the Eiffel Tower?",
          es: "¿Cuánto tiempo tomó construir la Torre Eiffel?",
          de: "Wie lange dauerte der Bau des Eiffelturms?",
          nl: "Hoe lang duurde de bouw van de Eiffeltoren?"
        },
        options: [
          { en: "About 2 yrs", es: "Aproximadamente 2 años", de: "Etwa 2 Jahre", nl: "Ongeveer 2 jaar" },
          { en: "About 5 yrs", es: "Aproximadamente 5 años", de: "Etwa 5 Jahre", nl: "Ongeveer 5 jaar" },
          { en: "About 10 yrs", es: "Aproximadamente 10 años", de: "Etwa 10 Jahre", nl: "Ongeveer 10 jaar" },
          { en: "About 1 year", es: "Aproximadamente 1 año", de: "Etwa 1 Jahr", nl: "Ongeveer 1 jaar" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower was constructed in just over 2 years, from 1887 to 1889, which was remarkably fast for such a large structure.",
          es: "La Torre Eiffel se construyó en poco más de 2 años, de 1887 a 1889, lo cual fue notablemente rápido para una estructura tan grande.",
          de: "Der Eiffelturm wurde in etwas mehr als 2 Jahren, von 1887 bis 1889, gebaut, was für ein so großes Bauwerk bemerkenswert schnell war.",
          nl: "De Eiffeltoren werd gebouwd in iets meer dan 2 jaar, van 1887 tot 1889, wat opmerkelijk snel was voor zo'n grote structuur."
        }
      },
      {
        question: {
          en: "What is the Eiffel Tower's main function today?",
          es: "¿Cuál es la función principal de la Torre Eiffel hoy en día?",
          de: "Was ist die Hauptfunktion des Eiffelturms heute?",
          nl: "Wat is de belangrijkste functie van de Eiffeltoren vandaag?"
        },
        options: [
          { en: "Tourism", es: "Atracción turística", de: "Touristenattraktion", nl: "Toeristische attractie" },
          { en: "Government office", es: "Oficina gubernamental", de: "Regierungsbüro", nl: "Regeringskantoor" },
          { en: "Museum", es: "Museo", de: "Museum", nl: "Museum" },
          { en: "Hotel", es: "Hotel", de: "Hotel", nl: "Hotel" }
        ],
        correct: 0,
        explanation: {
          en: "Today, the Eiffel Tower primarily serves as a major tourist attraction, welcoming millions of visitors each year.",
          es: "Hoy en día, la Torre Eiffel sirve principalmente como una importante atracción turística, recibiendo millones de visitantes cada año.",
          de: "Heute dient der Eiffelturm hauptsächlich als wichtige Touristenattraktion und empfängt jedes Jahr Millionen von Besuchern.",
          nl: "Tegenwoordig dient de Eiffeltoren voornamelijk als een belangrijke toeristische attractie die elk jaar miljoenen bezoekers verwelkomt."
        }
      },
      {
        question: {
          en: "How many visitors does the Eiffel Tower receive approximately per year?",
          es: "¿Aproximadamente cuántos visitantes recibe la Torre Eiffel por año?",
          de: "Wie viele Besucher empfängt der Eiffelturm ungefähr pro Jahr?",
          nl: "Hoeveel bezoekers ontvangt de Eiffeltoren ongeveer per jaar?"
        },
        options: [
          { en: "About 7 million", es: "Aproximadamente 7 millones", de: "Etwa 7 Millionen", nl: "Ongeveer 7 miljoen" },
          { en: "About 2 million", es: "Aproximadamente 2 millones", de: "Etwa 2 Millionen", nl: "Ongeveer 2 miljoen" },
          { en: "About 15 million", es: "Aproximadamente 15 millones", de: "Etwa 15 Millionen", nl: "Ongeveer 15 miljoen" },
          { en: "About 500,000", es: "Aproximadamente 500,000", de: "Etwa 500.000", nl: "Ongeveer 500.000" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower welcomes approximately 7 million visitors annually, making it one of the most visited paid monuments in the world.",
          es: "La Torre Eiffel recibe aproximadamente 7 millones de visitantes al año, lo que la convierte en uno de los monumentos de pago más visitados del mundo.",
          de: "Der Eiffelturm empfängt jährlich etwa 7 Millionen Besucher und ist damit eines der meistbesuchten kostenpflichtigen Denkmäler der Welt.",
          nl: "De Eiffeltoren ontvangt jaarlijks ongeveer 7 miljoen bezoekers, waarmee het een van de meest bezochte betalende monumenten ter wereld is."
        }
      },
      {
        question: {
          en: "What is located at the top of the Eiffel Tower?",
          es: "¿Qué hay en la cima de la Torre Eiffel?",
          de: "Was befindet sich an der Spitze des Eiffelturms?",
          nl: "Wat bevindt zich bovenop de Eiffeltoren?"
        },
        options: [
          { en: "Observation & antenna", es: "Mirador y antena", de: "Aussichtsplattform und Antenne", nl: "Observatiedek en antenne" },
          { en: "Restaurant only", es: "Solo restaurante", de: "Nur Restaurant", nl: "Alleen restaurant" },
          { en: "Helicopter pad", es: "Helipuerto", de: "Hubschrauberlandeplatz", nl: "Helikopterplatform" },
          { en: "Clock tower", es: "Torre del reloj", de: "Glockenturm", nl: "Klokkentoren" }
        ],
        correct: 0,
        explanation: {
          en: "The top of the Eiffel Tower features an observation deck for visitors and broadcasting antennas for radio and television.",
          es: "La cima de la Torre Eiffel cuenta con un mirador para visitantes y antenas de transmisión para radio y televisión.",
          de: "Die Spitze des Eiffelturms verfügt über eine Aussichtsplattform für Besucher und Sendeantennen für Radio und Fernsehen.",
          nl: "De top van de Eiffeltoren heeft een observatiedek voor bezoekers en zendantennes voor radio en televisie."
        }
      },
      {
        question: {
          en: "Which field is located at the base of the Eiffel Tower?",
          es: "¿Qué campo se encuentra en la base de la Torre Eiffel?",
          de: "Welches Feld befindet sich am Fuß des Eiffelturms?",
          nl: "Welk veld bevindt zich aan de voet van de Eiffeltoren?"
        },
        options: [
          { en: "Champ de Mars", es: "Campo de Marte", de: "Champ de Mars", nl: "Champ de Mars" },
          { en: "Champs-Élysées", es: "Campos Elíseos", de: "Champs-Élysées", nl: "Champs-Élysées" },
          { en: "Place de la Concorde", es: "Plaza de la Concordia", de: "Place de la Concorde", nl: "Place de la Concorde" },
          { en: "Jardin du Luxembourg", es: "Jardín de Luxemburgo", de: "Jardin du Luxembourg", nl: "Jardin du Luxembourg" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower stands on the Champ de Mars, a large public greenspace in Paris.",
          es: "La Torre Eiffel se encuentra en el Campo de Marte, un gran espacio verde público en París.",
          de: "Der Eiffelturm steht auf dem Champ de Mars, einer großen öffentlichen Grünfläche in Paris.",
          nl: "De Eiffeltoren staat op het Champ de Mars, een grote openbare groene ruimte in Parijs."
        }
      },
      {
        question: {
          en: "When does the Eiffel Tower sparkle with lights?",
          es: "¿Cuándo brilla la Torre Eiffel con luces?",
          de: "Wann funkelt der Eiffelturm mit Lichtern?",
          nl: "Wanneer fonkelt de Eiffeltoren met lichtjes?"
        },
        options: [
          { en: "Every hour after dark", es: "Cada hora después del anochecer", de: "Jede Stunde nach Einbruch der Dunkelheit", nl: "Elk uur na het donker" },
          { en: "Only on New Year's Eve", es: "Solo en Nochevieja", de: "Nur an Silvester", nl: "Alleen met oudejaarsavond" },
          { en: "Only on Bastille Day", es: "Solo en el Día de la Bastilla", de: "Nur am Nationalfeiertag", nl: "Alleen op Bastille Day" },
          { en: "Continuously all night", es: "Continuamente toda la noche", de: "Kontinuierlich die ganze Nacht", nl: "Continu de hele nacht" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower sparkles with 20,000 lights for five minutes every hour after sunset until 1 AM.",
          es: "La Torre Eiffel brilla con 20,000 luces durante cinco minutos cada hora después del atardecer hasta la 1 AM.",
          de: "Der Eiffelturm funkelt nach Sonnenuntergang bis 1 Uhr morgens jede Stunde fünf Minuten lang mit 20.000 Lichtern.",
          nl: "De Eiffeltoren fonkelt na zonsondergang tot 01.00 uur elk uur vijf minuten lang met 20.000 lichtjes."
        }
      },
      {
        question: {
          en: "What was the Eiffel Tower's original intended lifespan?",
          es: "¿Cuál era la vida útil originalmente prevista de la Torre Eiffel?",
          de: "Wie lang sollte die ursprünglich geplante Lebensdauer des Eiffelturms sein?",
          nl: "Wat was de oorspronkelijk beoogde levensduur van de Eiffeltoren?"
        },
        options: [
          { en: "20 yrs", es: "20 años", de: "20 Jahre", nl: "20 jaar" },
          { en: "50 yrs", es: "50 años", de: "50 Jahre", nl: "50 jaar" },
          { en: "100 yrs", es: "100 años", de: "100 Jahre", nl: "100 jaar" },
          { en: "Permanent from the start", es: "Permanente desde el principio", de: "Von Anfang an permanent", nl: "Vanaf het begin permanent" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower was originally intended to stand for only 20 years and was nearly demolished in 1909.",
          es: "La Torre Eiffel originalmente estaba destinada a permanecer solo 20 años y casi fue demolida en 1909.",
          de: "Der Eiffelturm sollte ursprünglich nur 20 Jahre stehen und wäre 1909 beinahe abgerissen worden.",
          nl: "De Eiffeltoren was oorspronkelijk bedoeld om slechts 20 jaar te blijven staan en werd bijna gesloopt in 1909."
        }
      },
      {
        question: {
          en: "How much does the iron structure of the Eiffel Tower weigh?",
          es: "¿Cuánto pesa la estructura de hierro de la Torre Eiffel?",
          de: "Wie viel wiegt die Eisenkonstruktion des Eiffelturms?",
          nl: "Hoeveel weegt de ijzeren structuur van de Eiffeltoren?"
        },
        options: [
          { en: "About 10,000 tons", es: "Aproximadamente 10,000 toneladas", de: "Etwa 10.000 Tonnen", nl: "Ongeveer 10.000 ton" },
          { en: "About 5,000 tons", es: "Aproximadamente 5,000 toneladas", de: "Etwa 5.000 Tonnen", nl: "Ongeveer 5.000 ton" },
          { en: "About 20,000 tons", es: "Aproximadamente 20,000 toneladas", de: "Etwa 20.000 Tonnen", nl: "Ongeveer 20.000 ton" },
          { en: "About 50,000 tons", es: "Aproximadamente 50,000 toneladas", de: "Etwa 50.000 Tonnen", nl: "Ongeveer 50.000 ton" }
        ],
        correct: 0,
        explanation: {
          en: "The iron structure of the Eiffel Tower weighs approximately 10,000 tons, which was considered relatively light for its height.",
          es: "La estructura de hierro de la Torre Eiffel pesa aproximadamente 10,000 toneladas, lo cual se consideraba relativamente ligero para su altura.",
          de: "Die Eisenkonstruktion des Eiffelturms wiegt etwa 10.000 Tonnen, was für seine Höhe als relativ leicht galt.",
          nl: "De ijzeren structuur van de Eiffeltoren weegt ongeveer 10.000 ton, wat voor zijn hoogte als relatief licht werd beschouwd."
        }
      },
      {
        question: {
          en: "What type of structure is the Eiffel Tower?",
          es: "¿Qué tipo de estructura es la Torre Eiffel?",
          de: "Was für eine Art von Struktur ist der Eiffelturm?",
          nl: "Wat voor soort structuur is de Eiffeltoren?"
        },
        options: [
          { en: "Lattice tower", es: "Torre de celosía", de: "Gitterturm", nl: "Traliemast" },
          { en: "Solid pillar", es: "Pilar sólido", de: "Feste Säule", nl: "Massieve zuil" },
          { en: "Suspension tower", es: "Torre de suspensión", de: "Hängeturm", nl: "Hangtoren" },
          { en: "Cable-stayed tower", es: "Torre atirantada", de: "Schrägseilturm", nl: "Tuibrug toren" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is a lattice tower, featuring an open framework of iron girders that reduces wind resistance.",
          es: "La Torre Eiffel es una torre de celosía, con un marco abierto de vigas de hierro que reduce la resistencia al viento.",
          de: "Der Eiffelturm ist ein Gitterturm mit einem offenen Rahmen aus Eisenträgern, der den Windwiderstand verringert.",
          nl: "De Eiffeltoren is een traliemast, met een open raamwerk van ijzeren liggers dat de windweerstand vermindert."
        }
      },
      {
        question: {
          en: "In which arrondissement of Paris is the Eiffel Tower located?",
          es: "¿En qué distrito de París se encuentra la Torre Eiffel?",
          de: "In welchem Arrondissement von Paris befindet sich der Eiffelturm?",
          nl: "In welk arrondissement van Parijs staat de Eiffeltoren?"
        },
        options: [
          { en: "7th arrondissement", es: "Distrito 7", de: "7. Arrondissement", nl: "7e arrondissement" },
          { en: "1st arrondissement", es: "Distrito 1", de: "1. Arrondissement", nl: "1e arrondissement" },
          { en: "16th arrondissement", es: "Distrito 16", de: "16. Arrondissement", nl: "16e arrondissement" },
          { en: "4th arrondissement", es: "Distrito 4", de: "4. Arrondissement", nl: "4e arrondissement" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is located in the 7th arrondissement of Paris, on the Left Bank of the Seine.",
          es: "La Torre Eiffel se encuentra en el distrito 7 de París, en la orilla izquierda del Sena.",
          de: "Der Eiffelturm befindet sich im 7. Arrondissement von Paris, am linken Ufer der Seine.",
          nl: "De Eiffeltoren bevindt zich in het 7e arrondissement van Parijs, aan de linkeroever van de Seine."
        }
      },
      {
        question: {
          en: "What happens to the Eiffel Tower in hot weather?",
          es: "¿Qué le sucede a la Torre Eiffel en clima cálido?",
          de: "Was passiert mit dem Eiffelturm bei heißem Wetter?",
          nl: "Wat gebeurt er met de Eiffeltoren bij warm weer?"
        },
        options: [
          { en: "Thermal expansion", es: "Crece más alta debido a la expansión térmica", de: "Er wird durch Wärmeausdehnung höher", nl: "Hij wordt hoger door thermische uitzetting" },
          { en: "It shrinks", es: "Se encoge", de: "Er schrumpft", nl: "Hij krimpt" },
          { en: "Nothing changes", es: "Nada cambia", de: "Nichts ändert sich", nl: "Er verandert niets" },
          { en: "It changes color", es: "Cambia de color", de: "Er ändert die Farbe", nl: "Hij verandert van kleur" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower can grow up to 15 cm taller in hot weather due to thermal expansion of the iron.",
          es: "La Torre Eiffel puede crecer hasta 15 cm más alta en clima cálido debido a la expansión térmica del hierro.",
          de: "Der Eiffelturm kann bei heißem Wetter durch die Wärmeausdehnung des Eisens bis zu 15 cm höher werden.",
          nl: "De Eiffeltoren kan bij warm weer tot 15 cm hoger worden door thermische uitzetting van het ijzer."
        }
      }
    ]
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
  if (typeof window !== 'undefined') {
    window.level1Data = level1;
  }
  return level1;
})();