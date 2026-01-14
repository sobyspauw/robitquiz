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
      },
      {
        question: {
          en: "What is the main purpose of the Eiffel Tower today?",
          es: "¿Cuál es el propósito principal de la Torre Eiffel hoy?",
          de: "Was ist heute der Hauptzweck des Eiffelturms?",
          nl: "Wat is het belangrijkste doel van de Eiffeltoren vandaag?"
        },
        options: [
          { en: "Tourist attraction", es: "Atracción turística", de: "Touristenattraktion", nl: "Toeristische attractie" },
          { en: "Military base", es: "Base militar", de: "Militärbasis", nl: "Militaire basis" },
          { en: "Observatory only", es: "Solo observatorio", de: "Nur Observatorium", nl: "Alleen observatorium" },
          { en: "Shopping center", es: "Centro comercial", de: "Einkaufszentrum", nl: "Winkelcentrum" }
        ],
        correct: 0,
        explanation: {
          en: "Today the Eiffel Tower is primarily a tourist attraction, though it also houses restaurants, shops, and broadcasting equipment.",
          es: "Hoy la Torre Eiffel es principalmente una atracción turística, aunque también alberga restaurantes, tiendas y equipo de transmisión.",
          de: "Heute ist der Eiffelturm in erster Linie eine Touristenattraktion, beherbergt aber auch Restaurants, Geschäfte und Sendeeinrichtungen.",
          nl: "Tegenwoordig is de Eiffeltoren voornamelijk een toeristische attractie, hoewel hij ook restaurants, winkels en zendapparatuur herbergt."
        }
      },
      {
        question: {
          en: "What country is the Eiffel Tower in?",
          es: "¿En qué país está la Torre Eiffel?",
          de: "In welchem Land befindet sich der Eiffelturm?",
          nl: "In welk land staat de Eiffeltoren?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is located in France, in the capital city of Paris, and is the country's most iconic landmark.",
          es: "La Torre Eiffel está ubicada en Francia, en la ciudad capital de París, y es el monumento más icónico del país.",
          de: "Der Eiffelturm befindet sich in Frankreich, in der Hauptstadt Paris, und ist das bekannteste Wahrzeichen des Landes.",
          nl: "De Eiffeltoren staat in Frankrijk, in de hoofdstad Parijs, en is het meest iconische monument van het land."
        }
      },
      {
        question: {
          en: "Can visitors climb stairs to reach the top?",
          es: "¿Pueden los visitantes subir escaleras hasta la cima?",
          de: "Können Besucher Treppen bis zur Spitze steigen?",
          nl: "Kunnen bezoekers trappen beklimmen naar de top?"
        },
        options: [
          { en: "Only to 2nd level", es: "Solo hasta el segundo nivel", de: "Nur bis zur 2. Ebene", nl: "Alleen tot 2e verdieping" },
          { en: "Yes, all the way", es: "Sí, hasta arriba", de: "Ja, ganz nach oben", nl: "Ja, helemaal" },
          { en: "No stairs available", es: "No hay escaleras", de: "Keine Treppen verfügbar", nl: "Geen trappen beschikbaar" },
          { en: "Only in summer", es: "Solo en verano", de: "Nur im Sommer", nl: "Alleen in de zomer" }
        ],
        correct: 0,
        explanation: {
          en: "Visitors can climb stairs to the second level, but must take an elevator from there to reach the top platform.",
          es: "Los visitantes pueden subir escaleras hasta el segundo nivel, pero deben tomar un ascensor desde allí para llegar a la plataforma superior.",
          de: "Besucher können Treppen bis zur zweiten Ebene steigen, müssen aber von dort einen Aufzug nehmen, um die oberste Plattform zu erreichen.",
          nl: "Bezoekers kunnen trappen beklimmen tot de tweede verdieping, maar moeten daarna een lift nemen om het bovenste platform te bereiken."
        }
      },
      {
        question: {
          en: "What shape is the base of the Eiffel Tower?",
          es: "¿Qué forma tiene la base de la Torre Eiffel?",
          de: "Welche Form hat die Basis des Eiffelturms?",
          nl: "Welke vorm heeft de basis van de Eiffeltoren?"
        },
        options: [
          { en: "Square", es: "Cuadrada", de: "Quadratisch", nl: "Vierkant" },
          { en: "Circle", es: "Circular", de: "Kreisförmig", nl: "Rond" },
          { en: "Triangle", es: "Triangular", de: "Dreieckig", nl: "Driehoekig" },
          { en: "Hexagon", es: "Hexagonal", de: "Sechseckig", nl: "Zeshoekig" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower has a square base with four massive pillars at each corner supporting the structure.",
          es: "La Torre Eiffel tiene una base cuadrada con cuatro pilares masivos en cada esquina que soportan la estructura.",
          de: "Der Eiffelturm hat eine quadratische Basis mit vier massiven Pfeilern an jeder Ecke, die die Struktur tragen.",
          nl: "De Eiffeltoren heeft een vierkante basis met vier massieve pilaren op elke hoek die de structuur ondersteunen."
        }
      },
      {
        question: {
          en: "What type of building is the Eiffel Tower?",
          es: "¿Qué tipo de edificio es la Torre Eiffel?",
          de: "Was für ein Gebäude ist der Eiffelturm?",
          nl: "Wat voor soort gebouw is de Eiffeltoren?"
        },
        options: [
          { en: "Tower", es: "Torre", de: "Turm", nl: "Toren" },
          { en: "Palace", es: "Palacio", de: "Palast", nl: "Paleis" },
          { en: "Bridge", es: "Puente", de: "Brücke", nl: "Brug" },
          { en: "Castle", es: "Castillo", de: "Schloss", nl: "Kasteel" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is a lattice tower, a type of tall structure with an open iron framework rather than solid walls.",
          es: "La Torre Eiffel es una torre de celosía, un tipo de estructura alta con un marco de hierro abierto en lugar de paredes sólidas.",
          de: "Der Eiffelturm ist ein Gitterturm, eine Art hoher Struktur mit einem offenen Eisenrahmen statt fester Wände.",
          nl: "De Eiffeltoren is een traliemast, een soort hoge structuur met een open ijzeren raamwerk in plaats van massieve muren."
        }
      },
      {
        question: {
          en: "How many legs support the Eiffel Tower?",
          es: "¿Cuántas patas sostienen la Torre Eiffel?",
          de: "Wie viele Beine stützen den Eiffelturm?",
          nl: "Hoeveel poten ondersteunen de Eiffeltoren?"
        },
        options: [
          { en: "4 legs", es: "4 patas", de: "4 Beine", nl: "4 poten" },
          { en: "3 legs", es: "3 patas", de: "3 Beine", nl: "3 poten" },
          { en: "6 legs", es: "6 patas", de: "6 Beine", nl: "6 poten" },
          { en: "8 legs", es: "8 patas", de: "8 Beine", nl: "8 poten" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower stands on four curved legs that meet at the base and taper as they rise toward the first platform.",
          es: "La Torre Eiffel se apoya sobre cuatro patas curvas que se encuentran en la base y se estrechan al subir hacia la primera plataforma.",
          de: "Der Eiffelturm steht auf vier gebogenen Beinen, die sich an der Basis treffen und sich beim Aufsteigen zur ersten Plattform verjüngen.",
          nl: "De Eiffeltoren staat op vier gebogen poten die elkaar aan de basis ontmoeten en taps toelopen terwijl ze naar het eerste platform stijgen."
        }
      },
      {
        question: {
          en: "What can you do at the Eiffel Tower?",
          es: "¿Qué puedes hacer en la Torre Eiffel?",
          de: "Was kann man am Eiffelturm tun?",
          nl: "Wat kun je doen bij de Eiffeltoren?"
        },
        options: [
          { en: "Enjoy views and dine", es: "Disfrutar vistas y cenar", de: "Aussichten genießen und speisen", nl: "Uitzichten genieten en dineren" },
          { en: "Sleep overnight", es: "Dormir durante la noche", de: "Übernachten", nl: "Overnachten" },
          { en: "Go shopping only", es: "Solo ir de compras", de: "Nur einkaufen", nl: "Alleen winkelen" },
          { en: "Swim in pools", es: "Nadar en piscinas", de: "In Pools schwimmen", nl: "Zwemmen in zwembaden" }
        ],
        correct: 0,
        explanation: {
          en: "Visitors can enjoy panoramic views from different levels, dine at restaurants, and visit gift shops at the Eiffel Tower.",
          es: "Los visitantes pueden disfrutar de vistas panorámicas desde diferentes niveles, cenar en restaurantes y visitar tiendas de regalos en la Torre Eiffel.",
          de: "Besucher können von verschiedenen Ebenen aus Panoramablicke genießen, in Restaurants speisen und Souvenirläden am Eiffelturm besuchen.",
          nl: "Bezoekers kunnen genieten van panoramische uitzichten vanaf verschillende niveaus, dineren in restaurants en cadeauwinkels bezoeken bij de Eiffeltoren."
        }
      },
      {
        question: {
          en: "When is the best time to visit the Eiffel Tower?",
          es: "¿Cuál es el mejor momento para visitar la Torre Eiffel?",
          de: "Wann ist die beste Zeit, den Eiffelturm zu besuchen?",
          nl: "Wanneer is de beste tijd om de Eiffeltoren te bezoeken?"
        },
        options: [
          { en: "Early morning or evening", es: "Temprano en la mañana o por la tarde", de: "Früh morgens oder abends", nl: "Vroeg in de ochtend of avond" },
          { en: "Only at midnight", es: "Solo a medianoche", de: "Nur um Mitternacht", nl: "Alleen om middernacht" },
          { en: "Only on weekends", es: "Solo los fines de semana", de: "Nur am Wochenende", nl: "Alleen in het weekend" },
          { en: "Tower is always closed", es: "La torre siempre está cerrada", de: "Turm ist immer geschlossen", nl: "Toren is altijd gesloten" }
        ],
        correct: 0,
        explanation: {
          en: "Early morning or evening visits typically have fewer crowds, and evening visits offer the chance to see the tower's sparkling lights.",
          es: "Las visitas temprano en la mañana o por la tarde suelen tener menos multitudes, y las visitas nocturnas ofrecen la oportunidad de ver las luces centelleantes de la torre.",
          de: "Besuche früh morgens oder abends haben normalerweise weniger Menschenmassen, und Abendbesuche bieten die Chance, die funkelnden Lichter des Turms zu sehen.",
          nl: "Bezoeken vroeg in de ochtend of 's avonds hebben meestal minder drukte, en avondbezoeken bieden de kans om de fonkelende lichtjes van de toren te zien."
        }
      },
      {
        question: {
          en: "Are there restaurants in the Eiffel Tower?",
          es: "¿Hay restaurantes en la Torre Eiffel?",
          de: "Gibt es Restaurants im Eiffelturm?",
          nl: "Zijn er restaurants in de Eiffeltoren?"
        },
        options: [
          { en: "Yes, several", es: "Sí, varios", de: "Ja, mehrere", nl: "Ja, meerdere" },
          { en: "No restaurants", es: "Sin restaurantes", de: "Keine Restaurants", nl: "Geen restaurants" },
          { en: "Only one", es: "Solo uno", de: "Nur eins", nl: "Maar één" },
          { en: "Only fast food", es: "Solo comida rápida", de: "Nur Fast Food", nl: "Alleen fastfood" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower has several restaurants including the famous Le Jules Verne on the second level and casual dining on the first level.",
          es: "La Torre Eiffel tiene varios restaurantes, incluido el famoso Le Jules Verne en el segundo nivel y comida informal en el primer nivel.",
          de: "Der Eiffelturm hat mehrere Restaurants, darunter das berühmte Le Jules Verne auf der zweiten Ebene und ungezwungene Gastronomie auf der ersten Ebene.",
          nl: "De Eiffeltoren heeft verschillende restaurants, waaronder het beroemde Le Jules Verne op de tweede verdieping en informeel eten op de eerste verdieping."
        }
      },
      {
        question: {
          en: "What time of day does the tower light up?",
          es: "¿A qué hora del día se ilumina la torre?",
          de: "Zu welcher Tageszeit leuchtet der Turm?",
          nl: "Op welk tijdstip van de dag licht de toren op?"
        },
        options: [
          { en: "At sunset", es: "Al atardecer", de: "Bei Sonnenuntergang", nl: "Bij zonsondergang" },
          { en: "At noon", es: "Al mediodía", de: "Mittags", nl: "Op de middag" },
          { en: "Only midnight", es: "Solo a medianoche", de: "Nur um Mitternacht", nl: "Alleen middernacht" },
          { en: "Never lights up", es: "Nunca se ilumina", de: "Leuchtet nie", nl: "Licht nooit op" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower's golden illumination turns on at sunset every evening, with sparkles occurring every hour until 1 AM.",
          es: "La iluminación dorada de la Torre Eiffel se enciende al atardecer cada noche, con destellos cada hora hasta la 1 AM.",
          de: "Die goldene Beleuchtung des Eiffelturms schaltet sich jeden Abend bei Sonnenuntergang ein, mit Funkeln jede Stunde bis 1 Uhr morgens.",
          nl: "De gouden verlichting van de Eiffeltoren gaat elke avond bij zonsondergang aan, met fonkelingen elk uur tot 01.00 uur."
        }
      },
      {
        question: {
          en: "Do you need tickets to visit the Eiffel Tower?",
          es: "¿Necesitas boletos para visitar la Torre Eiffel?",
          de: "Braucht man Tickets, um den Eiffelturm zu besuchen?",
          nl: "Heb je tickets nodig om de Eiffeltoren te bezoeken?"
        },
        options: [
          { en: "Yes, tickets required", es: "Sí, se requieren boletos", de: "Ja, Tickets erforderlich", nl: "Ja, tickets vereist" },
          { en: "Always free entry", es: "Entrada siempre gratuita", de: "Immer freier Eintritt", nl: "Altijd gratis toegang" },
          { en: "Only on weekends", es: "Solo los fines de semana", de: "Nur am Wochenende", nl: "Alleen in het weekend" },
          { en: "Donation only", es: "Solo donación", de: "Nur Spende", nl: "Alleen donatie" }
        ],
        correct: 0,
        explanation: {
          en: "Tickets are required to visit the Eiffel Tower and can be purchased online in advance or at the tower itself.",
          es: "Se requieren boletos para visitar la Torre Eiffel y se pueden comprar en línea con anticipación o en la torre misma.",
          de: "Tickets sind erforderlich, um den Eiffelturm zu besuchen, und können online im Voraus oder am Turm selbst gekauft werden.",
          nl: "Tickets zijn vereist om de Eiffeltoren te bezoeken en kunnen van tevoren online of bij de toren zelf worden gekocht."
        }
      },
      {
        question: {
          en: "What is special about the tower's design?",
          es: "¿Qué es especial sobre el diseño de la torre?",
          de: "Was ist besonders am Design des Turms?",
          nl: "Wat is speciaal aan het ontwerp van de toren?"
        },
        options: [
          { en: "Open lattice framework", es: "Marco de celosía abierta", de: "Offener Gitterrahmen", nl: "Open tralie-raamwerk" },
          { en: "Solid stone walls", es: "Paredes de piedra sólidas", de: "Feste Steinwände", nl: "Massieve stenen muren" },
          { en: "Glass exterior", es: "Exterior de vidrio", de: "Glasaußenseite", nl: "Glazen buitenkant" },
          { en: "Wooden structure", es: "Estructura de madera", de: "Holzstruktur", nl: "Houten structuur" }
        ],
        correct: 0,
        explanation: {
          en: "The tower's distinctive open lattice framework of iron girders creates its iconic silhouette and allows wind to pass through.",
          es: "El distintivo marco de celosía abierta de vigas de hierro de la torre crea su silueta icónica y permite que el viento pase.",
          de: "Der charakteristische offene Gitterrahmen aus Eisenträgern des Turms schafft seine ikonische Silhouette und lässt Wind durchströmen.",
          nl: "Het kenmerkende open tralie-raamwerk van ijzeren liggers van de toren creëert zijn iconische silhouet en laat wind erdoor gaan."
        }
      },
      {
        question: {
          en: "How often is the Eiffel Tower repainted?",
          es: "¿Con qué frecuencia se repinta la Torre Eiffel?",
          de: "Wie oft wird der Eiffelturm neu gestrichen?",
          nl: "Hoe vaak wordt de Eiffeltoren opnieuw geschilderd?"
        },
        options: [
          { en: "Every 7 yrs", es: "Cada 7 años", de: "Alle 7 Jahre", nl: "Om de 7 jaar" },
          { en: "Every year", es: "Cada año", de: "Jedes Jahr", nl: "Elk jaar" },
          { en: "Every 50 yrs", es: "Cada 50 años", de: "Alle 50 Jahre", nl: "Om de 50 jaar" },
          { en: "Never repainted", es: "Nunca repintada", de: "Nie neu gestrichen", nl: "Nooit opnieuw geschilderd" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is repainted approximately every 7 years to protect the iron from rust, requiring about 60 tons of paint.",
          es: "La Torre Eiffel se repinta aproximadamente cada 7 años para proteger el hierro del óxido, requiriendo alrededor de 60 toneladas de pintura.",
          de: "Der Eiffelturm wird etwa alle 7 Jahre neu gestrichen, um das Eisen vor Rost zu schützen, wofür etwa 60 Tonnen Farbe benötigt werden.",
          nl: "De Eiffeltoren wordt ongeveer om de 7 jaar opnieuw geschilderd om het ijzer tegen roest te beschermen, wat ongeveer 60 ton verf vereist."
        }
      },
      {
        question: {
          en: "What view can you see from the top?",
          es: "¿Qué vista puedes ver desde la cima?",
          de: "Welche Aussicht hat man von oben?",
          nl: "Welk uitzicht kun je zien vanaf de top?"
        },
        options: [
          { en: "All of Paris", es: "Todo París", de: "Ganz Paris", nl: "Heel Parijs" },
          { en: "Only the ground", es: "Solo el suelo", de: "Nur der Boden", nl: "Alleen de grond" },
          { en: "Inside only", es: "Solo el interior", de: "Nur innen", nl: "Alleen binnen" },
          { en: "Nothing visible", es: "Nada visible", de: "Nichts sichtbar", nl: "Niets zichtbaar" }
        ],
        correct: 0,
        explanation: {
          en: "From the top of the Eiffel Tower, visitors can see panoramic views of all of Paris, up to 70 km on clear days.",
          es: "Desde la cima de la Torre Eiffel, los visitantes pueden ver vistas panorámicas de todo París, hasta 70 km en días despejados.",
          de: "Von der Spitze des Eiffelturms aus können Besucher Panoramablicke auf ganz Paris sehen, an klaren Tagen bis zu 70 km.",
          nl: "Vanaf de top van de Eiffeltoren kunnen bezoekers panoramische uitzichten zien over heel Parijs, tot 70 km op heldere dagen."
        }
      },
      {
        question: {
          en: "Is the Eiffel Tower taller than most buildings?",
          es: "¿Es la Torre Eiffel más alta que la mayoría de los edificios?",
          de: "Ist der Eiffelturm höher als die meisten Gebäude?",
          nl: "Is de Eiffeltoren hoger dan de meeste gebouwen?"
        },
        options: [
          { en: "Yes, in Paris", es: "Sí, en París", de: "Ja, in Paris", nl: "Ja, in Parijs" },
          { en: "Shortest in Paris", es: "Más bajo en París", de: "Kürzester in Paris", nl: "Laagste in Parijs" },
          { en: "Same height as all", es: "Misma altura que todos", de: "Gleiche Höhe wie alle", nl: "Dezelfde hoogte als alle" },
          { en: "Underground structure", es: "Estructura subterránea", de: "Unterirdische Struktur", nl: "Ondergrondse structuur" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is one of the tallest structures in Paris, standing at 330 meters, and dominates the city skyline.",
          es: "La Torre Eiffel es una de las estructuras más altas de París, con 330 metros de altura, y domina el horizonte de la ciudad.",
          de: "Der Eiffelturm ist mit 330 Metern eines der höchsten Bauwerke in Paris und prägt die Skyline der Stadt.",
          nl: "De Eiffeltoren is met 330 meter een van de hoogste structuren in Parijs en domineert de skyline van de stad."
        }
      },
      {
        question: {
          en: "Why is the Eiffel Tower famous?",
          es: "¿Por qué es famosa la Torre Eiffel?",
          de: "Warum ist der Eiffelturm berühmt?",
          nl: "Waarom is de Eiffeltoren beroemd?"
        },
        options: [
          { en: "Iconic Paris symbol", es: "Símbolo icónico de París", de: "Ikonisches Paris-Symbol", nl: "Iconisch Parijs symbool" },
          { en: "Oldest building in France", es: "Edificio más antiguo de Francia", de: "Ältestes Gebäude in Frankreich", nl: "Oudste gebouw in Frankrijk" },
          { en: "Largest in the world", es: "Más grande del mundo", de: "Größtes der Welt", nl: "Grootste ter wereld" },
          { en: "Made of gold", es: "Hecha de oro", de: "Aus Gold gemacht", nl: "Gemaakt van goud" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower is famous as the iconic symbol of Paris and France, recognized worldwide for its distinctive design and cultural significance.",
          es: "La Torre Eiffel es famosa como el símbolo icónico de París y Francia, reconocida en todo el mundo por su diseño distintivo y significado cultural.",
          de: "Der Eiffelturm ist als ikonisches Symbol von Paris und Frankreich berühmt und weltweit bekannt für sein unverwechselbares Design und seine kulturelle Bedeutung.",
          nl: "De Eiffeltoren is beroemd als het iconische symbool van Parijs en Frankrijk, wereldwijd erkend voor zijn kenmerkende ontwerp en culturele betekenis."
        }
      },
      {
        question: {
          en: "How do most people reach the top level?",
          es: "¿Cómo llega la mayoría de la gente al nivel superior?",
          de: "Wie erreichen die meisten Menschen die oberste Ebene?",
          nl: "Hoe bereiken de meeste mensen het bovenste niveau?"
        },
        options: [
          { en: "By elevator", es: "En ascensor", de: "Mit dem Aufzug", nl: "Met de lift" },
          { en: "By helicopter", es: "En helicóptero", de: "Mit dem Hubschrauber", nl: "Met de helikopter" },
          { en: "By rope", es: "Por cuerda", de: "Mit Seil", nl: "Met touw" },
          { en: "Cannot reach top", es: "No se puede llegar a la cima", de: "Kann die Spitze nicht erreichen", nl: "Kan de top niet bereiken" }
        ],
        correct: 0,
        explanation: {
          en: "Most visitors take elevators to reach the top level, as stairs are only available up to the second platform.",
          es: "La mayoría de los visitantes toman ascensores para llegar al nivel superior, ya que las escaleras solo están disponibles hasta la segunda plataforma.",
          de: "Die meisten Besucher nehmen Aufzüge, um die oberste Ebene zu erreichen, da Treppen nur bis zur zweiten Plattform verfügbar sind.",
          nl: "De meeste bezoekers nemen liften om het bovenste niveau te bereiken, omdat trappen alleen beschikbaar zijn tot het tweede platform."
        }
      },
      {
        question: {
          en: "What makes the tower safe during storms?",
          es: "¿Qué hace que la torre sea segura durante tormentas?",
          de: "Was macht den Turm bei Stürmen sicher?",
          nl: "Wat maakt de toren veilig tijdens stormen?"
        },
        options: [
          { en: "Strong iron structure", es: "Estructura de hierro fuerte", de: "Starke Eisenstruktur", nl: "Sterke ijzeren structuur" },
          { en: "Plastic coating", es: "Recubrimiento plástico", de: "Kunststoffbeschichtung", nl: "Plastic coating" },
          { en: "Underground cables", es: "Cables subterráneos", de: "Unterirdische Kabel", nl: "Ondergrondse kabels" },
          { en: "Glass protection", es: "Protección de vidrio", de: "Glasschutz", nl: "Glazen bescherming" }
        ],
        correct: 0,
        explanation: {
          en: "The tower's strong iron structure and open lattice design allow it to flex slightly in wind while remaining stable and safe.",
          es: "La fuerte estructura de hierro de la torre y el diseño de celosía abierta le permiten flexionarse ligeramente con el viento mientras permanece estable y segura.",
          de: "Die starke Eisenstruktur und das offene Gitterdesign des Turms ermöglichen es ihm, sich im Wind leicht zu biegen, während er stabil und sicher bleibt.",
          nl: "De sterke ijzeren structuur en het open tralie-ontwerp van de toren stellen hem in staat licht te buigen in de wind terwijl hij stabiel en veilig blijft."
        }
      },
      {
        question: {
          en: "What is the Eiffel Tower made to look like?",
          es: "¿A qué está hecha para parecer la Torre Eiffel?",
          de: "Wonach sieht der Eiffelturm aus?",
          nl: "Waar is de Eiffeltoren gemaakt om op te lijken?"
        },
        options: [
          { en: "Lattice structure", es: "Estructura de celosía", de: "Gitterstruktur", nl: "Tralie-structuur" },
          { en: "Tree trunk", es: "Tronco de árbol", de: "Baumstamm", nl: "Boomstam" },
          { en: "Mountain", es: "Montaña", de: "Berg", nl: "Berg" },
          { en: "Pyramid", es: "Pirámide", de: "Pyramide", nl: "Piramide" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower's design features a distinctive lattice structure with crisscrossing iron beams that create its elegant appearance.",
          es: "El diseño de la Torre Eiffel presenta una estructura de celosía distintiva con vigas de hierro entrecruzadas que crean su apariencia elegante.",
          de: "Das Design des Eiffelturms weist eine unverwechselbare Gitterstruktur mit gekreuzten Eisenträgern auf, die sein elegantes Aussehen schaffen.",
          nl: "Het ontwerp van de Eiffeltoren heeft een kenmerkende tralie-structuur met kruisende ijzeren balken die zijn elegante uiterlijk creëren."
        }
      },
      {
        question: {
          en: "What is the name of the park at the tower's base?",
          es: "¿Cómo se llama el parque en la base de la torre?",
          de: "Wie heißt der Park an der Basis des Turms?",
          nl: "Wat is de naam van het park aan de voet van de toren?"
        },
        options: [
          { en: "Champ de Mars", es: "Campo de Marte", de: "Champ de Mars", nl: "Champ de Mars" },
          { en: "Tuileries Garden", es: "Jardín de las Tullerías", de: "Tuileriengarten", nl: "Tuileriën" },
          { en: "Luxembourg Gardens", es: "Jardines de Luxemburgo", de: "Luxemburggarten", nl: "Luxemburg Tuinen" },
          { en: "Bois de Boulogne", es: "Bosque de Bolonia", de: "Bois de Boulogne", nl: "Bois de Boulogne" }
        ],
        correct: 0,
        explanation: {
          en: "The Champ de Mars is the large public greenspace at the base of the Eiffel Tower, extending to the École Militaire.",
          es: "El Campo de Marte es el gran espacio verde público en la base de la Torre Eiffel, que se extiende hasta la École Militaire.",
          de: "Das Champ de Mars ist die große öffentliche Grünfläche an der Basis des Eiffelturms, die sich bis zur École Militaire erstreckt.",
          nl: "Het Champ de Mars is de grote openbare groene ruimte aan de voet van de Eiffeltoren, die zich uitstrekt tot aan de École Militaire."
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