(function() {
  const level2 = {
    name: {
      en: "History",
      es: "Historia",
      de: "Geschichte",
      nl: "Geschiedenis"
    },
    questions: [
      {
        question: {
          en: "What event was the Eiffel Tower built to commemorate?",
          es: "¿Qué evento se construyó la Torre Eiffel para conmemorar?",
          de: "Welches Ereignis sollte der Eiffelturm gedenken?",
          nl: "Welke gebeurtenis werd de Eiffeltoren gebouwd om te herdenken?"
        },
        options: [
          { en: "Centennial of French Revolution", es: "Centenario de la Revolución Francesa", de: "Hundertjahrfeier der Französischen Revolution", nl: "Honderdjarig bestaan van de Franse Revolutie" },
          { en: "Napoleon's coronation", es: "Coronación de Napoleón", de: "Napoleons Krönung", nl: "Kroning van Napoleon" },
          { en: "End of World War I", es: "Fin de la Primera Guerra Mundial", de: "Ende des Ersten Weltkriegs", nl: "Einde van Wereldoorlog I" },
          { en: "Liberation of Paris", es: "Liberación de París", de: "Befreiung von Paris", nl: "Bevrijding van Parijs" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower was built for the 1889 World's Fair, which celebrated the 100th anniversary of the French Revolution.",
          es: "La Torre Eiffel se construyó para la Exposición Universal de 1889, que celebraba el centenario de la Revolución Francesa.",
          de: "Der Eiffelturm wurde für die Weltausstellung 1889 gebaut, die den 100. Jahrestag der Französischen Revolution feierte.",
          nl: "De Eiffeltoren werd gebouwd voor de Wereldtentoonstelling van 1889, die het honderdjarig bestaan van de Franse Revolutie vierde."
        }
      },
      {
        question: {
          en: "Who were the main engineers who designed the Eiffel Tower?",
          es: "¿Quiénes fueron los principales ingenieros que diseñaron la Torre Eiffel?",
          de: "Wer waren die Hauptingenieure, die den Eiffelturm entwarfen?",
          nl: "Wie waren de belangrijkste ingenieurs die de Eiffeltoren ontwierpen?"
        },
        options: [
          { en: "Maurice Koechlin and Émile Nouguier", es: "Maurice Koechlin y Émile Nouguier", de: "Maurice Koechlin und Émile Nouguier", nl: "Maurice Koechlin en Émile Nouguier" },
          { en: "Charles Garnier and Haussmann", es: "Charles Garnier y Haussmann", de: "Charles Garnier und Haussmann", nl: "Charles Garnier en Haussmann" },
          { en: "Le Corbusier and Perret", es: "Le Corbusier y Perret", de: "Le Corbusier und Perret", nl: "Le Corbusier en Perret" },
          { en: "Viollet-le-Duc and Baltard", es: "Viollet-le-Duc y Baltard", de: "Viollet-le-Duc und Baltard", nl: "Viollet-le-Duc en Baltard" }
        ],
        correct: 0,
        explanation: {
          en: "Maurice Koechlin and Émile Nouguier, engineers working for Gustave Eiffel's company, were the main designers of the tower structure.",
          es: "Maurice Koechlin y Émile Nouguier, ingenieros de la empresa de Gustave Eiffel, fueron los principales diseñadores de la estructura de la torre.",
          de: "Maurice Koechlin und Émile Nouguier, Ingenieure in Gustave Eiffels Firma, waren die Hauptentwerfer der Turmstruktur.",
          nl: "Maurice Koechlin en Émile Nouguier, ingenieurs bij het bedrijf van Gustave Eiffel, waren de belangrijkste ontwerpers van de torenstructuur."
        }
      },
      {
        question: {
          en: "What was Gustave Eiffel's original profession?",
          es: "¿Cuál era la profesión original de Gustave Eiffel?",
          de: "Was war Gustave Eiffels ursprünglicher Beruf?",
          nl: "Wat was het oorspronkelijke beroep van Gustave Eiffel?"
        },
        options: [
          { en: "Bridge engineer", es: "Ingeniero de puentes", de: "Brückeningenieur", nl: "Bruggen-ingenieur" },
          { en: "Architect", es: "Arquitecto", de: "Architekt", nl: "Architect" },
          { en: "Sculptor", es: "Escultor", de: "Bildhauer", nl: "Beeldhouwer" },
          { en: "Urban planner", es: "Urbanista", de: "Stadtplaner", nl: "Stadsplanner" }
        ],
        correct: 0,
        explanation: {
          en: "Gustave Eiffel was primarily a bridge engineer and had built many iron bridges before constructing the tower.",
          es: "Gustave Eiffel era principalmente un ingeniero de puentes y había construido muchos puentes de hierro antes de construir la torre.",
          de: "Gustave Eiffel war in erster Linie Brückeningenieur und hatte viele Eisenbrücken gebaut, bevor er den Turm errichtete.",
          nl: "Gustave Eiffel was voornamelijk een bruggen-ingenieur en had vele ijzeren bruggen gebouwd voordat hij de toren construeerde."
        }
      },
      {
        question: {
          en: "How many people submitted designs for the 1889 World's Fair monument?",
          es: "¿Cuántas personas presentaron diseños para el monumento de la Exposición Universal de 1889?",
          de: "Wie viele Menschen reichten Entwürfe für das Monument der Weltausstellung 1889 ein?",
          nl: "Hoeveel mensen dienden ontwerpen in voor het monument van de Wereldtentoonstelling van 1889?"
        },
        options: [
          { en: "Over 100", es: "Más de 100", de: "Über 100", nl: "Meer dan 100" },
          { en: "About 25", es: "Aproximadamente 25", de: "Etwa 25", nl: "Ongeveer 25" },
          { en: "Exactly 10", es: "Exactamente 10", de: "Genau 10", nl: "Precies 10" },
          { en: "Only 5", es: "Solo 5", de: "Nur 5", nl: "Slechts 5" }
        ],
        correct: 0,
        explanation: {
          en: "Over 100 designs were submitted in the competition, but Eiffel's design was chosen for its innovative engineering and practicality.",
          es: "Se presentaron más de 100 diseños en el concurso, pero el diseño de Eiffel fue elegido por su ingeniería innovadora y practicidad.",
          de: "Über 100 Entwürfe wurden im Wettbewerb eingereicht, aber Eiffels Entwurf wurde wegen seiner innovativen Technik und Praktikabilität ausgewählt.",
          nl: "Meer dan 100 ontwerpen werden ingediend in de wedstrijd, maar het ontwerp van Eiffel werd gekozen vanwege zijn innovatieve engineering en praktisch nut."
        }
      },
      {
        question: {
          en: "What famous petition was created against the Eiffel Tower's construction?",
          es: "¿Qué famosa petición se creó contra la construcción de la Torre Eiffel?",
          de: "Welche berühmte Petition wurde gegen den Bau des Eiffelturms erstellt?",
          nl: "Welk beroemd petitie werd gemaakt tegen de bouw van de Eiffeltoren?"
        },
        options: [
          { en: "Artists Against the Tower of Monsieur Eiffel", es: "Artistas Contra la Torre del Señor Eiffel", de: "Künstler gegen den Turm von Herrn Eiffel", nl: "Kunstenaars Tegen de Toren van Meneer Eiffel" },
          { en: "Parisians for Beauty", es: "Parisinos por la Belleza", de: "Pariser für Schönheit", nl: "Parijzenaars voor Schoonheid" },
          { en: "Stop the Iron Monster", es: "Detener el Monstruo de Hierro", de: "Stoppt das Eisenmonster", nl: "Stop het IJzeren Monster" },
          { en: "Save Historic Paris", es: "Salvar París Histórico", de: "Rettet das historische Paris", nl: "Red Historisch Parijs" }
        ],
        correct: 0,
        explanation: {
          en: "The 'Artists Against the Tower of Monsieur Eiffel' petition was signed by prominent artists and writers who called it a 'useless and monstrous' structure.",
          es: "La petición 'Artistas Contra la Torre del Señor Eiffel' fue firmada por artistas y escritores prominentes que la llamaron una estructura 'inútil y monstruosa'.",
          de: "Die Petition 'Künstler gegen den Turm von Herrn Eiffel' wurde von prominenten Künstlern und Schriftstellern unterzeichnet, die ihn als 'nutzlose und monströse' Struktur bezeichneten.",
          nl: "Het petitie 'Kunstenaars Tegen de Toren van Meneer Eiffel' werd ondertekend door prominente kunstenaars en schrijvers die het een 'nutteloze en monsterlijke' structuur noemden."
        }
      },
      {
        question: {
          en: "Who was the famous writer Guy de Maupassant's relationship with the tower?",
          es: "¿Cuál era la relación del famoso escritor Guy de Maupassant con la torre?",
          de: "Wie war die Beziehung des berühmten Schriftstellers Guy de Maupassant zum Turm?",
          nl: "Wat was de relatie van de beroemde schrijver Guy de Maupassant met de toren?"
        },
        options: [
          { en: "He hated it but ate lunch there to avoid seeing it", es: "La odiaba pero almorzaba allí para evitar verla", de: "Er hasste ihn, aß aber dort zu Mittag, um ihn nicht zu sehen", nl: "Hij haatte hem maar at er lunch om hem niet te hoeven zien" },
          { en: "He loved it and wrote poems about it", es: "La amaba y escribió poemas sobre ella", de: "Er liebte ihn und schrieb Gedichte darüber", nl: "Hij hield ervan en schreef gedichten erover" },
          { en: "He designed the restaurant", es: "Diseñó el restaurante", de: "Er entwarf das Restaurant", nl: "Hij ontwierp het restaurant" },
          { en: "He was indifferent to it", es: "Era indiferente a ella", de: "Es war ihm gleichgültig", nl: "Hij was er onverschillig over" }
        ],
        correct: 0,
        explanation: {
          en: "Guy de Maupassant reportedly hated the tower but frequently ate at its restaurant, saying it was the only place in Paris where he couldn't see it.",
          es: "Guy de Maupassant supuestamente odiaba la torre pero comía frecuentemente en su restaurante, diciendo que era el único lugar en París donde no podía verla.",
          de: "Guy de Maupassant hasste angeblich den Turm, aß aber häufig in seinem Restaurant und sagte, es sei der einzige Ort in Paris, wo er ihn nicht sehen könne.",
          nl: "Guy de Maupassant haatte naar verluidt de toren maar at regelmatig in het restaurant, zeggend dat het de enige plek in Parijs was waar hij hem niet kon zien."
        }
      },
      {
        question: {
          en: "Why was the Eiffel Tower not demolished after 20 years as planned?",
          es: "¿Por qué la Torre Eiffel no fue demolida después de 20 años como estaba planeado?",
          de: "Warum wurde der Eiffelturm nicht nach 20 Jahren wie geplant abgerissen?",
          nl: "Waarom werd de Eiffeltoren niet na 20 jaar gesloopt zoals gepland?"
        },
        options: [
          { en: "It became valuable for radio transmission", es: "Se volvió valiosa para la transmisión de radio", de: "Er wurde wertvoll für Funkübertragungen", nl: "Hij werd waardevol voor radiotransmissie" },
          { en: "Public protests saved it", es: "Protestas públicas la salvaron", de: "Öffentliche Proteste retteten ihn", nl: "Publieke protesten redden hem" },
          { en: "It became profitable from tourism", es: "Se volvió rentable por el turismo", de: "Er wurde durch Tourismus profitabel", nl: "Hij werd winstgevend door toerisme" },
          { en: "The government ran out of money for demolition", es: "El gobierno se quedó sin dinero para la demolición", de: "Der Regierung ging das Geld für den Abriss aus", nl: "De overheid had geen geld meer voor de sloop" }
        ],
        correct: 0,
        explanation: {
          en: "The tower was saved because it proved valuable as a radio transmission antenna, particularly for military purposes during World War I.",
          es: "La torre se salvó porque demostró ser valiosa como antena de transmisión de radio, particularmente para propósitos militares durante la Primera Guerra Mundial.",
          de: "Der Turm wurde gerettet, weil er sich als wertvolle Funkübertragungsantenne erwies, besonders für militärische Zwecke während des Ersten Weltkriegs.",
          nl: "De toren werd gered omdat hij waardevol bleek als radiotransmissie-antenne, vooral voor militaire doeleinden tijdens de Eerste Wereldoorlog."
        }
      },
      {
        question: {
          en: "When did public opinion about the Eiffel Tower change from negative to positive?",
          es: "¿Cuándo cambió la opinión pública sobre la Torre Eiffel de negativa a positiva?",
          de: "Wann änderte sich die öffentliche Meinung über den Eiffelturm von negativ zu positiv?",
          nl: "Wanneer veranderde de publieke opinie over de Eiffeltoren van negatief naar positief?"
        },
        options: [
          { en: "Shortly after its completion", es: "Poco después de su finalización", de: "Kurz nach seiner Fertigstellung", nl: "Kort na de voltooiing" },
          { en: "After 50 yrs", es: "Después de 50 años", de: "Nach 50 Jahren", nl: "Na 50 jaar" },
          { en: "During World War II", es: "Durante la Segunda Guerra Mundial", de: "Während des Zweiten Weltkriegs", nl: "Tijdens de Tweede Wereldoorlog" },
          { en: "Never changed", es: "Nunca cambió", de: "Nie geändert", nl: "Nooit veranderd" }
        ],
        correct: 0,
        explanation: {
          en: "Public opinion shifted quite quickly after the tower opened, as people were impressed by the views and the engineering achievement.",
          es: "La opinión pública cambió bastante rápido después de que se abrió la torre, ya que la gente quedó impresionada por las vistas y el logro de ingeniería.",
          de: "Die öffentliche Meinung änderte sich ziemlich schnell nach der Eröffnung des Turms, da die Menschen von der Aussicht und der ingenieurtechnischen Leistung beeindruckt waren.",
          nl: "De publieke opinie veranderde vrij snel nadat de toren werd geopend, omdat mensen onder de indruk waren van het uitzicht en de technische prestatie."
        }
      },
      {
        question: {
          en: "What role did the Eiffel Tower play during World War I?",
          es: "¿Qué papel jugó la Torre Eiffel durante la Primera Guerra Mundial?",
          de: "Welche Rolle spielte der Eiffelturm während des Ersten Weltkriegs?",
          nl: "Welke rol speelde de Eiffeltoren tijdens de Eerste Wereldoorlog?"
        },
        options: [
          { en: "Radio communication interception", es: "Intercepción de comunicaciones de radio", de: "Abhören von Funkkommunikation", nl: "Radio communicatie onderschepping" },
          { en: "Observation post only", es: "Solo puesto de observación", de: "Nur Beobachtungsposten", nl: "Alleen observatiepost" },
          { en: "Military headquarters", es: "Cuartel general militar", de: "Militärisches Hauptquartier", nl: "Militair hoofdkwartier" },
          { en: "Hospital", es: "Hospital", de: "Krankenhaus", nl: "Ziekenhuis" }
        ],
        correct: 0,
        explanation: {
          en: "The tower's radio transmitter intercepted enemy communications, including the famous Zimmermann Telegram, proving its military value.",
          es: "El transmisor de radio de la torre interceptó comunicaciones enemigas, incluido el famoso Telegrama Zimmermann, demostrando su valor militar.",
          de: "Der Funksender des Turms fing feindliche Kommunikation ab, einschließlich des berühmten Zimmermann-Telegramms, was seinen militärischen Wert bewies.",
          nl: "De radiozender van de toren onderschepte vijandelijke communicaties, waaronder het beroemde Zimmermann-telegram, wat zijn militaire waarde bewees."
        }
      },
      {
        question: {
          en: "Who was the architect that worked with the engineers on decorative elements?",
          es: "¿Quién fue el arquitecto que trabajó con los ingenieros en los elementos decorativos?",
          de: "Wer war der Architekt, der mit den Ingenieuren an dekorativen Elementen arbeitete?",
          nl: "Wie was de architect die met de ingenieurs werkte aan decoratieve elementen?"
        },
        options: [
          { en: "Stephen Sauvestre", es: "Stephen Sauvestre", de: "Stephen Sauvestre", nl: "Stephen Sauvestre" },
          { en: "Charles Garnier", es: "Charles Garnier", de: "Charles Garnier", nl: "Charles Garnier" },
          { en: "Hector Guimard", es: "Hector Guimard", de: "Hector Guimard", nl: "Hector Guimard" },
          { en: "Victor Baltard", es: "Victor Baltard", de: "Victor Baltard", nl: "Victor Baltard" }
        ],
        correct: 0,
        explanation: {
          en: "Architect Stephen Sauvestre added decorative arches and other ornamental features to make the design more aesthetically appealing.",
          es: "El arquitecto Stephen Sauvestre añadió arcos decorativos y otras características ornamentales para hacer el diseño más estéticamente atractivo.",
          de: "Architekt Stephen Sauvestre fügte dekorative Bögen und andere ornamentale Merkmale hinzu, um das Design ästhetisch ansprechender zu machen.",
          nl: "Architect Stephen Sauvestre voegde decoratieve bogen en andere ornamentele kenmerken toe om het ontwerp esthetisch aantrekkelijker te maken."
        }
      },
      {
        question: {
          en: "What year did the Eiffel Tower become the world's tallest structure?",
          es: "¿En qué año se convirtió la Torre Eiffel en la estructura más alta del mundo?",
          de: "In welchem Jahr wurde der Eiffelturm das höchste Bauwerk der Welt?",
          nl: "In welk jaar werd de Eiffeltoren 's werelds hoogste structuur?"
        },
        options: [
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1887", es: "1887", de: "1887", nl: "1887" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1910", es: "1910", de: "1910", nl: "1910" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower became the world's tallest structure upon its completion in 1889, surpassing the Washington Monument.",
          es: "La Torre Eiffel se convirtió en la estructura más alta del mundo al completarse en 1889, superando al Monumento a Washington.",
          de: "Der Eiffelturm wurde bei seiner Fertigstellung 1889 das höchste Bauwerk der Welt und überragte das Washington Monument.",
          nl: "De Eiffeltoren werd 's werelds hoogste structuur bij de voltooiing in 1889, hoger dan het Washington Monument."
        }
      },
      {
        question: {
          en: "How long did the Eiffel Tower hold the record as the world's tallest structure?",
          es: "¿Cuánto tiempo mantuvo la Torre Eiffel el récord como la estructura más alta del mundo?",
          de: "Wie lange hielt der Eiffelturm den Rekord als höchstes Bauwerk der Welt?",
          nl: "Hoe lang hield de Eiffeltoren het record als 's werelds hoogste structuur?"
        },
        options: [
          { en: "41 yrs", es: "41 años", de: "41 Jahre", nl: "41 jaar" },
          { en: "20 yrs", es: "20 años", de: "20 Jahre", nl: "20 jaar" },
          { en: "60 yrs", es: "60 años", de: "60 Jahre", nl: "60 jaar" },
          { en: "100 yrs", es: "100 años", de: "100 Jahre", nl: "100 jaar" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower held the record for 41 years until the Chrysler Building was completed in New York City in 1930.",
          es: "La Torre Eiffel mantuvo el récord durante 41 años hasta que se completó el Edificio Chrysler en Nueva York en 1930.",
          de: "Der Eiffelturm hielt den Rekord 41 Jahre lang, bis 1930 das Chrysler Building in New York City fertiggestellt wurde.",
          nl: "De Eiffeltoren hield het record 41 jaar vast tot het Chrysler Building in New York in 1930 werd voltooid."
        }
      },
      {
        question: {
          en: "What major event took place at the Eiffel Tower in 1889?",
          es: "¿Qué evento importante tuvo lugar en la Torre Eiffel en 1889?",
          de: "Welches wichtige Ereignis fand 1889 am Eiffelturm statt?",
          nl: "Welke belangrijke gebeurtenis vond plaats bij de Eiffeltoren in 1889?"
        },
        options: [
          { en: "Gustave Eiffel hosted a banquet on the second floor", es: "Gustave Eiffel organizó un banquete en el segundo piso", de: "Gustave Eiffel veranstaltete ein Bankett auf der zweiten Etage", nl: "Gustave Eiffel organiseerde een banket op de tweede verdieping" },
          { en: "The first parachute jump", es: "El primer salto en paracaídas", de: "Der erste Fallschirmsprung", nl: "De eerste parachute sprong" },
          { en: "Installation of electric lights", es: "Instalación de luces eléctricas", de: "Installation elektrischer Lichter", nl: "Installatie van elektrische lichten" },
          { en: "Visit by Queen Victoria", es: "Visita de la Reina Victoria", de: "Besuch von Königin Victoria", nl: "Bezoek van Koningin Victoria" }
        ],
        correct: 0,
        explanation: {
          en: "Gustave Eiffel celebrated the tower's completion by hosting a banquet for notable guests on the second floor during the World's Fair.",
          es: "Gustave Eiffel celebró la finalización de la torre organizando un banquete para invitados notables en el segundo piso durante la Exposición Universal.",
          de: "Gustave Eiffel feierte die Fertigstellung des Turms mit einem Bankett für bedeutende Gäste auf der zweiten Etage während der Weltausstellung.",
          nl: "Gustave Eiffel vierde de voltooiing van de toren door een banket te organiseren voor belangrijke gasten op de tweede verdieping tijdens de Wereldtentoonstelling."
        }
      },
      {
        question: {
          en: "What happened during the Nazi occupation of Paris in 1940?",
          es: "¿Qué sucedió durante la ocupación nazi de París en 1940?",
          de: "Was geschah während der Nazi-Besatzung von Paris 1940?",
          nl: "Wat gebeurde er tijdens de nazi-bezetting van Parijs in 1940?"
        },
        options: [
          { en: "The lift cables were cut to prevent Hitler from ascending", es: "Los cables del ascensor fueron cortados para evitar que Hitler subiera", de: "Die Aufzugskabel wurden durchtrennt, um Hitler am Aufstieg zu hindern", nl: "De liftekabels werden doorgesneden om te voorkomen dat Hitler naar boven ging" },
          { en: "The tower was destroyed", es: "La torre fue destruida", de: "Der Turm wurde zerstört", nl: "De toren werd vernietigd" },
          { en: "It was painted with swastikas", es: "Fue pintada con esvásticas", de: "Er wurde mit Hakenkreuzen bemalt", nl: "Hij werd beschilderd met hakenkruisen" },
          { en: "It was converted to a prison", es: "Fue convertida en una prisión", de: "Er wurde in ein Gefängnis umgewandelt", nl: "Hij werd omgebouwd tot een gevangenis" }
        ],
        correct: 0,
        explanation: {
          en: "French resistance fighters cut the elevator cables, forcing Hitler to climb the stairs. He chose not to ascend the tower during his visit to Paris.",
          es: "Los combatientes de la resistencia francesa cortaron los cables del ascensor, obligando a Hitler a subir las escaleras. Eligió no subir a la torre durante su visita a París.",
          de: "Französische Widerstandskämpfer durchtrennten die Aufzugskabel, sodass Hitler die Treppen steigen musste. Er entschied sich, während seines Paris-Besuchs nicht auf den Turm zu steigen.",
          nl: "Franse verzetsstrijders sneden de liftekabels door, waardoor Hitler de trap moest nemen. Hij koos ervoor niet naar boven te gaan tijdens zijn bezoek aan Parijs."
        }
      },
      {
        question: {
          en: "When was the first electric lighting installed on the Eiffel Tower?",
          es: "¿Cuándo se instaló la primera iluminación eléctrica en la Torre Eiffel?",
          de: "Wann wurde die erste elektrische Beleuchtung am Eiffelturm installiert?",
          nl: "Wanneer werd de eerste elektrische verlichting op de Eiffeltoren geïnstalleerd?"
        },
        options: [
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" }
        ],
        correct: 0,
        explanation: {
          en: "Electric lighting was installed on the Eiffel Tower from its opening in 1889, making it a spectacular illuminated landmark from the start.",
          es: "La iluminación eléctrica se instaló en la Torre Eiffel desde su inauguración en 1889, convirtiéndola en un espectacular monumento iluminado desde el principio.",
          de: "Elektrische Beleuchtung wurde von Anfang an 1889 am Eiffelturm installiert und machte ihn zu einem spektakulär beleuchteten Wahrzeichen.",
          nl: "Elektrische verlichting werd vanaf de opening in 1889 op de Eiffeltoren geïnstalleerd, waardoor het vanaf het begin een spectaculair verlicht monument was."
        }
      },
      {
        question: {
          en: "What scientific experiments did Gustave Eiffel conduct from the tower?",
          es: "¿Qué experimentos científicos realizó Gustave Eiffel desde la torre?",
          de: "Welche wissenschaftlichen Experimente führte Gustave Eiffel vom Turm aus durch?",
          nl: "Welke wetenschappelijke experimenten voerde Gustave Eiffel uit vanaf de toren?"
        },
        options: [
          { en: "Aerodynamics and meteorology", es: "Aerodinámica y meteorología", de: "Aerodynamik und Meteorologie", nl: "Aerodynamica en meteorologie" },
          { en: "Astronomy only", es: "Solo astronomía", de: "Nur Astronomie", nl: "Alleen astronomie" },
          { en: "Chemistry experiments", es: "Experimentos de química", de: "Chemieexperimente", nl: "Chemische experimenten" },
          { en: "Medical research", es: "Investigación médica", de: "Medizinische Forschung", nl: "Medisch onderzoek" }
        ],
        correct: 0,
        explanation: {
          en: "Eiffel used the tower for aerodynamics experiments and meteorological observations, including dropping objects to study air resistance.",
          es: "Eiffel usó la torre para experimentos de aerodinámica y observaciones meteorológicas, incluyendo dejar caer objetos para estudiar la resistencia del aire.",
          de: "Eiffel nutzte den Turm für aerodynamische Experimente und meteorologische Beobachtungen, einschließlich des Fallenlassens von Objekten zur Untersuchung des Luftwiderstands.",
          nl: "Eiffel gebruikte de toren voor aerodynamische experimenten en meteorologische waarnemingen, waaronder het laten vallen van objecten om luchtweerstand te bestuderen."
        }
      },
      {
        question: {
          en: "What was engraved on the tower to honor contributors?",
          es: "¿Qué se grabó en la torre para honrar a los contribuyentes?",
          de: "Was wurde auf dem Turm eingraviert, um Mitwirkende zu ehren?",
          nl: "Wat werd gegraveerd op de toren om bijdragers te eren?"
        },
        options: [
          { en: "Names of 72 French scientists and engineers", es: "Nombres de 72 científicos e ingenieros franceses", de: "Namen von 72 französischen Wissenschaftlern und Ingenieuren", nl: "Namen van 72 Franse wetenschappers en ingenieurs" },
          { en: "Names of all workers", es: "Nombres de todos los trabajadores", de: "Namen aller Arbeiter", nl: "Namen van alle arbeiders" },
          { en: "Names of government officials", es: "Nombres de funcionarios gubernamentales", de: "Namen von Regierungsbeamten", nl: "Namen van overheidsambtenaren" },
          { en: "Only Gustave Eiffel's name", es: "Solo el nombre de Gustave Eiffel", de: "Nur Gustave Eiffels Name", nl: "Alleen de naam van Gustave Eiffel" }
        ],
        correct: 0,
        explanation: {
          en: "The names of 72 prominent French scientists, engineers, and mathematicians are engraved on the tower's sides as a tribute to their contributions.",
          es: "Los nombres de 72 científicos, ingenieros y matemáticos franceses prominentes están grabados en los lados de la torre como tributo a sus contribuciones.",
          de: "Die Namen von 72 prominenten französischen Wissenschaftlern, Ingenieuren und Mathematikern sind als Tribut an ihre Beiträge in die Seiten des Turms eingraviert.",
          nl: "De namen van 72 prominente Franse wetenschappers, ingenieurs en wiskundigen zijn gegraveerd op de zijkanten van de toren als eerbetoon aan hun bijdragen."
        }
      },
      {
        question: {
          en: "What color was the Eiffel Tower originally painted?",
          es: "¿De qué color se pintó originalmente la Torre Eiffel?",
          de: "Welche Farbe hatte der Eiffelturm ursprünglich?",
          nl: "Welke kleur had de Eiffeltoren oorspronkelijk?"
        },
        options: [
          { en: "Reddish-brown", es: "Marrón rojizo", de: "Rotbraun", nl: "Roodbruin" },
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" },
          { en: "Gold", es: "Dorado", de: "Gold", nl: "Goud" },
          { en: "Silver", es: "Plateado", de: "Silber", nl: "Zilver" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower was originally painted reddish-brown. It has been repainted 18 times and the color has changed several times over the years.",
          es: "La Torre Eiffel se pintó originalmente de marrón rojizo. Ha sido repintada 18 veces y el color ha cambiado varias veces a lo largo de los años.",
          de: "Der Eiffelturm wurde ursprünglich rotbraun gestrichen. Er wurde 18 Mal neu gestrichen und die Farbe hat sich im Laufe der Jahre mehrmals geändert.",
          nl: "De Eiffeltoren werd oorspronkelijk roodbruin geschilderd. Hij is 18 keer opnieuw geschilderd en de kleur is door de jaren heen meerdere keren veranderd."
        }
      },
      {
        question: {
          en: "When did the Eiffel Tower receive its two millionth visitor?",
          es: "¿Cuándo recibió la Torre Eiffel a su visitante dos millones?",
          de: "Wann empfing der Eiffelturm seinen zweimillionsten Besucher?",
          nl: "Wanneer ontving de Eiffeltoren zijn twee miljoenste bezoeker?"
        },
        options: [
          { en: "During the 1889 World's Fair itself", es: "Durante la misma Exposición Universal de 1889", de: "Während der Weltausstellung 1889 selbst", nl: "Tijdens de Wereldtentoonstelling van 1889 zelf" },
          { en: "In 1900", es: "En 1900", de: "Im Jahr 1900", nl: "In 1900" },
          { en: "In 1920", es: "En 1920", de: "Im Jahr 1920", nl: "In 1920" },
          { en: "In 1950", es: "En 1950", de: "Im Jahr 1950", nl: "In 1950" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower was so popular that it received its two millionth visitor during the 6-month period of the 1889 World's Fair.",
          es: "La Torre Eiffel fue tan popular que recibió a su visitante dos millones durante el período de 6 meses de la Exposición Universal de 1889.",
          de: "Der Eiffelturm war so beliebt, dass er während der 6-monatigen Weltausstellung 1889 seinen zweimillionsten Besucher empfing.",
          nl: "De Eiffeltoren was zo populair dat hij zijn twee miljoenste bezoeker ontving tijdens de 6 maanden durende Wereldtentoonstelling van 1889."
        }
      },
      {
        question: {
          en: "What milestone did the Eiffel Tower reach in 2002?",
          es: "¿Qué hito alcanzó la Torre Eiffel en 2002?",
          de: "Welchen Meilenstein erreichte der Eiffelturm im Jahr 2002?",
          nl: "Welke mijlpaal bereikte de Eiffeltoren in 2002?"
        },
        options: [
          { en: "200 millionth visitor", es: "Visitante 200 millones", de: "200-millionster Besucher", nl: "200 miljoenste bezoeker" },
          { en: "100 millionth visitor", es: "Visitante 100 millones", de: "100-millionster Besucher", nl: "100 miljoenste bezoeker" },
          { en: "500 millionth visitor", es: "Visitante 500 millones", de: "500-millionster Besucher", nl: "500 miljoenste bezoeker" },
          { en: "First billion visitors", es: "Mil millones de visitantes", de: "Erste Milliarde Besucher", nl: "Eerste miljard bezoekers" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower welcomed its 200 millionth visitor in 2002, cementing its status as one of the world's most visited monuments.",
          es: "La Torre Eiffel recibió a su visitante 200 millones en 2002, consolidando su estatus como uno de los monumentos más visitados del mundo.",
          de: "Der Eiffelturm begrüßte 2002 seinen 200-millionsten Besucher und festigte damit seinen Status als eines der meistbesuchten Denkmäler der Welt.",
          nl: "De Eiffeltoren verwelkomde zijn 200 miljoenste bezoeker in 2002, waarmee zijn status als een van 's werelds meest bezochte monumenten werd bevestigd."
        }
      }
    ]
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
  if (typeof window !== 'undefined') {
    window.level2Data = level2;
  }
  return level2;
})();
