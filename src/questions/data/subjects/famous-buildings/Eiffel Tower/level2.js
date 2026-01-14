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
      },
      {
        question: {
          en: "How many workers were involved in building the Eiffel Tower?",
          es: "¿Cuántos trabajadores participaron en la construcción de la Torre Eiffel?",
          de: "Wie viele Arbeiter waren am Bau des Eiffelturms beteiligt?",
          nl: "Hoeveel arbeiders waren betrokken bij de bouw van de Eiffeltoren?"
        },
        options: [
          { en: "About 300", es: "Aproximadamente 300", de: "Etwa 300", nl: "Ongeveer 300" },
          { en: "About 100", es: "Aproximadamente 100", de: "Etwa 100", nl: "Ongeveer 100" },
          { en: "Over 1,000", es: "Más de 1,000", de: "Über 1.000", nl: "Meer dan 1.000" },
          { en: "About 50", es: "Aproximadamente 50", de: "Etwa 50", nl: "Ongeveer 50" }
        ],
        correct: 0,
        explanation: {
          en: "Around 300 workers were employed in the construction of the Eiffel Tower, working in all weather conditions to complete it in time.",
          es: "Alrededor de 300 trabajadores fueron empleados en la construcción de la Torre Eiffel, trabajando en todas las condiciones climáticas para completarla a tiempo.",
          de: "Etwa 300 Arbeiter waren beim Bau des Eiffelturms beschäftigt und arbeiteten bei allen Wetterbedingungen, um ihn rechtzeitig fertigzustellen.",
          nl: "Ongeveer 300 arbeiders waren werkzaam bij de bouw van de Eiffeltoren en werkten in alle weersomstandigheden om hem op tijd af te maken."
        }
      },
      {
        question: {
          en: "How many rivets were used in the tower's construction?",
          es: "¿Cuántos remaches se usaron en la construcción de la torre?",
          de: "Wie viele Nieten wurden beim Bau des Turms verwendet?",
          nl: "Hoeveel klinknagels werden gebruikt bij de bouw van de toren?"
        },
        options: [
          { en: "2.5 million", es: "2.5 millones", de: "2,5 Millionen", nl: "2,5 miljoen" },
          { en: "500,000", es: "500,000", de: "500.000", nl: "500.000" },
          { en: "10 million", es: "10 millones", de: "10 Millionen", nl: "10 miljoen" },
          { en: "100,000", es: "100,000", de: "100.000", nl: "100.000" }
        ],
        correct: 0,
        explanation: {
          en: "Approximately 2.5 million rivets were used to assemble the iron structure of the Eiffel Tower, each inserted by hand.",
          es: "Se usaron aproximadamente 2.5 millones de remaches para ensamblar la estructura de hierro de la Torre Eiffel, cada uno insertado a mano.",
          de: "Etwa 2,5 Millionen Nieten wurden verwendet, um die Eisenstruktur des Eiffelturms zusammenzubauen, jede von Hand eingesetzt.",
          nl: "Ongeveer 2,5 miljoen klinknagels werden gebruikt om de ijzeren structuur van de Eiffeltoren te assembleren, elk met de hand geplaatst."
        }
      },
      {
        question: {
          en: "What was the first major modification made to the tower?",
          es: "¿Cuál fue la primera modificación importante hecha a la torre?",
          de: "Was war die erste größere Änderung am Turm?",
          nl: "Wat was de eerste belangrijke wijziging aan de toren?"
        },
        options: [
          { en: "Installation of radio antenna", es: "Instalación de antena de radio", de: "Installation der Funkantenne", nl: "Installatie van radioantenne" },
          { en: "Adding restaurants", es: "Añadir restaurantes", de: "Hinzufügen von Restaurants", nl: "Toevoegen van restaurants" },
          { en: "Painting it gold", es: "Pintarla de oro", de: "Goldfarbe auftragen", nl: "Het goudkleurig schilderen" },
          { en: "Building elevators", es: "Construir ascensores", de: "Aufzüge bauen", nl: "Liften bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "The first major modification was installing a radio antenna in 1898, which saved the tower from demolition by proving its usefulness.",
          es: "La primera modificación importante fue instalar una antena de radio en 1898, que salvó a la torre de la demolición al demostrar su utilidad.",
          de: "Die erste größere Änderung war die Installation einer Funkantenne 1898, die den Turm vor dem Abriss rettete, indem sie seine Nützlichkeit bewies.",
          nl: "De eerste belangrijke wijziging was het installeren van een radioantenne in 1898, wat de toren van de sloop redde door zijn nut te bewijzen."
        }
      },
      {
        question: {
          en: "During which year did construction begin on the Eiffel Tower?",
          es: "¿En qué año comenzó la construcción de la Torre Eiffel?",
          de: "In welchem Jahr begann der Bau des Eiffelturms?",
          nl: "In welk jaar begon de bouw van de Eiffeltoren?"
        },
        options: [
          { en: "1887", es: "1887", de: "1887", nl: "1887" },
          { en: "1889", es: "1889", de: "1889", nl: "1889" },
          { en: "1885", es: "1885", de: "1885", nl: "1885" },
          { en: "1890", es: "1890", de: "1890", nl: "1890" }
        ],
        correct: 0,
        explanation: {
          en: "Construction began on January 28, 1887, and the tower was completed in March 1889, taking just over two years.",
          es: "La construcción comenzó el 28 de enero de 1887, y la torre se completó en marzo de 1889, tardando poco más de dos años.",
          de: "Der Bau begann am 28. Januar 1887, und der Turm wurde im März 1889 fertiggestellt, was etwas über zwei Jahre dauerte.",
          nl: "De bouw begon op 28 januari 1887 en de toren werd in maart 1889 voltooid, wat iets meer dan twee jaar duurde."
        }
      },
      {
        question: {
          en: "What was unusual about worker safety during construction?",
          es: "¿Qué era inusual sobre la seguridad de los trabajadores durante la construcción?",
          de: "Was war ungewöhnlich an der Arbeitssicherheit während des Baus?",
          nl: "Wat was ongewoon aan de veiligheid van arbeiders tijdens de bouw?"
        },
        options: [
          { en: "Only one fatality occurred", es: "Solo ocurrió una fatalidad", de: "Es gab nur einen Todesfall", nl: "Er viel slechts één dodelijk slachtoffer" },
          { en: "No safety measures used", es: "No se usaron medidas de seguridad", de: "Keine Sicherheitsmaßnahmen verwendet", nl: "Geen veiligheidsmaatregelen gebruikt" },
          { en: "All workers were injured", es: "Todos los trabajadores resultaron heridos", de: "Alle Arbeiter wurden verletzt", nl: "Alle arbeiders raakten gewond" },
          { en: "Construction was stopped often", es: "La construcción se detuvo a menudo", de: "Bau wurde oft gestoppt", nl: "Bouw werd vaak stopgezet" }
        ],
        correct: 0,
        explanation: {
          en: "Remarkably, only one worker died during construction, which was exceptional for such a large project in that era.",
          es: "Notablemente, solo un trabajador murió durante la construcción, lo cual fue excepcional para un proyecto tan grande en esa época.",
          de: "Bemerkenswerterweise starb nur ein Arbeiter während des Baus, was für ein so großes Projekt in dieser Ära außergewöhnlich war.",
          nl: "Opmerkelijk genoeg stierf er maar één arbeider tijdens de bouw, wat uitzonderlijk was voor zo'n groot project in die tijd."
        }
      },
      {
        question: {
          en: "What famous aviator flew through the tower's arches in 1944?",
          es: "¿Qué famoso aviador voló a través de los arcos de la torre en 1944?",
          de: "Welcher berühmte Flieger flog 1944 durch die Bögen des Turms?",
          nl: "Welke beroemde piloot vloog in 1944 door de bogen van de toren?"
        },
        options: [
          { en: "William Overstreet", es: "William Overstreet", de: "William Overstreet", nl: "William Overstreet" },
          { en: "Charles Lindbergh", es: "Charles Lindbergh", de: "Charles Lindbergh", nl: "Charles Lindbergh" },
          { en: "Amelia Earhart", es: "Amelia Earhart", de: "Amelia Earhart", nl: "Amelia Earhart" },
          { en: "Antoine de Saint-Exupéry", es: "Antoine de Saint-Exupéry", de: "Antoine de Saint-Exupéry", nl: "Antoine de Saint-Exupéry" }
        ],
        correct: 0,
        explanation: {
          en: "American pilot William Overstreet famously flew his P-51 Mustang through the tower's arches while chasing a German plane during WWII.",
          es: "El piloto americano William Overstreet voló famosamente su P-51 Mustang a través de los arcos de la torre mientras perseguía un avión alemán durante la Segunda Guerra Mundial.",
          de: "Der amerikanische Pilot William Overstreet flog berühmt mit seiner P-51 Mustang durch die Bögen des Turms, während er im Zweiten Weltkrieg ein deutsches Flugzeug verfolgte.",
          nl: "De Amerikaanse piloot William Overstreet vloog beroemd met zijn P-51 Mustang door de bogen van de toren terwijl hij tijdens WOII een Duits vliegtuig achtervolgde."
        }
      },
      {
        question: {
          en: "When was the first television broadcast from the Eiffel Tower?",
          es: "¿Cuándo fue la primera transmisión de televisión desde la Torre Eiffel?",
          de: "Wann war die erste Fernsehübertragung vom Eiffelturm?",
          nl: "Wanneer was de eerste televisie-uitzending vanaf de Eiffeltoren?"
        },
        options: [
          { en: "1935", es: "1935", de: "1935", nl: "1935" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" }
        ],
        correct: 0,
        explanation: {
          en: "The first television broadcast from the Eiffel Tower occurred in 1935, establishing it as an important broadcasting site.",
          es: "La primera transmisión de televisión desde la Torre Eiffel ocurrió en 1935, estableciéndola como un sitio de transmisión importante.",
          de: "Die erste Fernsehübertragung vom Eiffelturm fand 1935 statt und etablierte ihn als wichtigen Sendestandort.",
          nl: "De eerste televisie-uitzending vanaf de Eiffeltoren vond plaats in 1935, waarmee het een belangrijke zendlocatie werd."
        }
      },
      {
        question: {
          en: "What promotional stunt was performed on the tower in 1912?",
          es: "¿Qué truco publicitario se realizó en la torre en 1912?",
          de: "Welcher Werbestunt wurde 1912 am Turm durchgeführt?",
          nl: "Welke publiciteitsstunt werd in 1912 bij de toren uitgevoerd?"
        },
        options: [
          { en: "Franz Reichelt's parachute jump", es: "Salto en paracaídas de Franz Reichelt", de: "Franz Reichelts Fallschirmsprung", nl: "Franz Reichelts parachute sprong" },
          { en: "First bungee jump", es: "Primer salto de bungee", de: "Erster Bungee-Sprung", nl: "Eerste bungeejump" },
          { en: "Tightrope walk", es: "Caminata en cuerda floja", de: "Seiltanz", nl: "Koordlopen" },
          { en: "Hot air balloon launch", es: "Lanzamiento de globo aerostático", de: "Heißluftballonstart", nl: "Luchtballonlancering" }
        ],
        correct: 0,
        explanation: {
          en: "Franz Reichelt, a tailor, jumped from the first level wearing a parachute suit he designed, but tragically fell to his death.",
          es: "Franz Reichelt, un sastre, saltó desde el primer nivel vistiendo un traje de paracaídas que diseñó, pero trágicamente cayó a su muerte.",
          de: "Franz Reichelt, ein Schneider, sprang von der ersten Ebene mit einem von ihm entworfenen Fallschirmanzug, stürzte aber tragisch in den Tod.",
          nl: "Franz Reichelt, een kleermaker, sprong vanaf de eerste verdieping met een parachutepak dat hij ontwierp, maar viel tragisch te pletter."
        }
      },
      {
        question: {
          en: "Who climbed the Eiffel Tower stairs in 2015 on a wheelchair?",
          es: "¿Quién subió las escaleras de la Torre Eiffel en 2015 en silla de ruedas?",
          de: "Wer bestieg 2015 die Treppen des Eiffelturms in einem Rollstuhl?",
          nl: "Wie beklom in 2015 de trap van de Eiffeltoren in een rolstoel?"
        },
        options: [
          { en: "No one - stairs climbed differently", es: "Nadie - escaleras subidas de otra manera", de: "Niemand - Treppen anders bestiegen", nl: "Niemand - trap anders beklommen" },
          { en: "Stephen Hawking", es: "Stephen Hawking", de: "Stephen Hawking", nl: "Stephen Hawking" },
          { en: "Oscar Pistorius", es: "Oscar Pistorius", de: "Oscar Pistorius", nl: "Oscar Pistorius" },
          { en: "Jean-Dominique Bauby", es: "Jean-Dominique Bauby", de: "Jean-Dominique Bauby", nl: "Jean-Dominique Bauby" }
        ],
        correct: 0,
        explanation: {
          en: "While the Eiffel Tower has elevators for accessibility, the stairs challenge has been undertaken by various athletes on foot or bicycle, not wheelchair.",
          es: "Aunque la Torre Eiffel tiene ascensores para accesibilidad, el desafío de las escaleras ha sido realizado por varios atletas a pie o en bicicleta, no en silla de ruedas.",
          de: "Obwohl der Eiffelturm für Barrierefreiheit Aufzüge hat, wurde die Treppenherausforderung von verschiedenen Athleten zu Fuß oder mit dem Fahrrad durchgeführt, nicht im Rollstuhl.",
          nl: "Hoewel de Eiffeltoren liften heeft voor toegankelijkheid, is de trap-uitdaging ondernomen door verschillende atleten te voet of op de fiets, niet in een rolstoel."
        }
      },
      {
        question: {
          en: "What happened on the tower's 100th anniversary in 1989?",
          es: "¿Qué sucedió en el centenario de la torre en 1989?",
          de: "Was geschah zum 100. Jahrestag des Turms 1989?",
          nl: "Wat gebeurde er op het 100-jarig jubileum van de toren in 1989?"
        },
        options: [
          { en: "Special light show and celebrations", es: "Espectáculo de luces especial y celebraciones", de: "Besondere Lichtshow und Feierlichkeiten", nl: "Speciale lichtshow en vieringen" },
          { en: "Complete renovation", es: "Renovación completa", de: "Vollständige Renovierung", nl: "Volledige renovatie" },
          { en: "Closure for repairs", es: "Cierre por reparaciones", de: "Schließung wegen Reparaturen", nl: "Sluiting voor reparaties" },
          { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets bijzonders" }
        ],
        correct: 0,
        explanation: {
          en: "The tower's centennial was celebrated with elaborate fireworks and light shows, attracting massive crowds to Paris.",
          es: "El centenario de la torre se celebró con fuegos artificiales elaborados y espectáculos de luces, atrayendo multitudes masivas a París.",
          de: "Das hundertjährige Jubiläum des Turms wurde mit aufwendigen Feuerwerken und Lichtshows gefeiert, die große Menschenmengen nach Paris lockten.",
          nl: "Het honderdjarig jubileum van de toren werd gevierd met uitgebreide vuurwerkshows en lichtshows, wat enorme menigten naar Parijs trok."
        }
      },
      {
        question: {
          en: "When did the Eiffel Tower get its current lighting system?",
          es: "¿Cuándo obtuvo la Torre Eiffel su sistema de iluminación actual?",
          de: "Wann erhielt der Eiffelturm sein aktuelles Beleuchtungssystem?",
          nl: "Wanneer kreeg de Eiffeltoren zijn huidige verlichtingssysteem?"
        },
        options: [
          { en: "1985", es: "1985", de: "1985", nl: "1985" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" }
        ],
        correct: 0,
        explanation: {
          en: "The current golden lighting system with 336 spotlights was installed in 1985 to highlight the tower's architecture at night.",
          es: "El sistema de iluminación dorada actual con 336 reflectores se instaló en 1985 para resaltar la arquitectura de la torre por la noche.",
          de: "Das aktuelle goldene Beleuchtungssystem mit 336 Scheinwerfern wurde 1985 installiert, um die Architektur des Turms nachts hervorzuheben.",
          nl: "Het huidige gouden verlichtingssysteem met 336 spotlights werd in 1985 geïnstalleerd om 's nachts de architectuur van de toren te benadrukken."
        }
      },
      {
        question: {
          en: "What major event did the Eiffel Tower commemorate in 1989?",
          es: "¿Qué evento importante conmemoró la Torre Eiffel en 1989?",
          de: "Welches wichtige Ereignis gedachte der Eiffelturm 1989?",
          nl: "Welke belangrijke gebeurtenis herdacht de Eiffeltoren in 1989?"
        },
        options: [
          { en: "French Revolution bicentennial", es: "Bicentenario de la Revolución Francesa", de: "200-Jahr-Feier der Französischen Revolution", nl: "Tweehonderd jaar Franse Revolutie" },
          { en: "End of WWII", es: "Fin de la Segunda Guerra Mundial", de: "Ende des Zweiten Weltkriegs", nl: "Einde van WOII" },
          { en: "Napoleon's birth", es: "Nacimiento de Napoleón", de: "Napoleons Geburt", nl: "Geboorte van Napoleon" },
          { en: "Fall of the Berlin Wall", es: "Caída del Muro de Berlín", de: "Fall der Berliner Mauer", nl: "Val van de Berlijnse Muur" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower celebrated its 100th anniversary in 1989, coinciding with the bicentennial of the French Revolution it was originally built to commemorate.",
          es: "La Torre Eiffel celebró su centenario en 1989, coincidiendo con el bicentenario de la Revolución Francesa que originalmente se construyó para conmemorar.",
          de: "Der Eiffelturm feierte 1989 sein 100-jähriges Jubiläum, das mit dem 200-jährigen Jubiläum der Französischen Revolution zusammenfiel, zu deren Gedenken er ursprünglich gebaut wurde.",
          nl: "De Eiffeltoren vierde in 1989 zijn 100-jarig jubileum, samenvallend met het tweehonderdjarig bestaan van de Franse Revolutie die hij oorspronkelijk werd gebouwd om te herdenken."
        }
      },
      {
        question: {
          en: "Who was the contractor for the tower's metalwork?",
          es: "¿Quién fue el contratista para el trabajo metálico de la torre?",
          de: "Wer war der Auftragnehmer für die Metallarbeiten des Turms?",
          nl: "Wie was de aannemer voor het metaalwerk van de toren?"
        },
        options: [
          { en: "Gustave Eiffel's company", es: "Empresa de Gustave Eiffel", de: "Gustave Eiffels Firma", nl: "Bedrijf van Gustave Eiffel" },
          { en: "Schneider Electric", es: "Schneider Electric", de: "Schneider Electric", nl: "Schneider Electric" },
          { en: "Compagnie Générale", es: "Compagnie Générale", de: "Compagnie Générale", nl: "Compagnie Générale" },
          { en: "Société Métallurgique", es: "Société Métallurgique", de: "Société Métallurgique", nl: "Société Métallurgique" }
        ],
        correct: 0,
        explanation: {
          en: "Gustave Eiffel's own engineering and construction company, Compagnie des Établissements Eiffel, built the tower using his expertise in metal structures.",
          es: "La propia empresa de ingeniería y construcción de Gustave Eiffel, Compagnie des Établissements Eiffel, construyó la torre usando su experiencia en estructuras metálicas.",
          de: "Gustave Eiffels eigenes Ingenieur- und Bauunternehmen, Compagnie des Établissements Eiffel, baute den Turm mit seiner Expertise in Metallstrukturen.",
          nl: "Het eigen ingenieurs- en bouwbedrijf van Gustave Eiffel, Compagnie des Établissements Eiffel, bouwde de toren met zijn expertise in metalen structuren."
        }
      },
      {
        question: {
          en: "What sporting event featured the Eiffel Tower in 1900?",
          es: "¿Qué evento deportivo presentó la Torre Eiffel en 1900?",
          de: "Welches Sportereignis zeigte 1900 den Eiffelturm?",
          nl: "Welk sportevenement toonde de Eiffeltoren in 1900?"
        },
        options: [
          { en: "Paris Olympics", es: "Juegos Olímpicos de París", de: "Olympische Spiele in Paris", nl: "Olympische Spelen Parijs" },
          { en: "Tour de France", es: "Tour de Francia", de: "Tour de France", nl: "Tour de France" },
          { en: "World Cup", es: "Copa del Mundo", de: "Weltmeisterschaft", nl: "Wereldkampioenschap" },
          { en: "Marathon Championship", es: "Campeonato de Maratón", de: "Marathon-Meisterschaft", nl: "Marathon Kampioenschap" }
        ],
        correct: 0,
        explanation: {
          en: "The 1900 Paris Olympics used the Eiffel Tower area for various sporting events during the World's Fair.",
          es: "Los Juegos Olímpicos de París de 1900 usaron el área de la Torre Eiffel para varios eventos deportivos durante la Exposición Universal.",
          de: "Die Olympischen Spiele 1900 in Paris nutzten das Gebiet um den Eiffelturm für verschiedene Sportveranstaltungen während der Weltausstellung.",
          nl: "De Olympische Spelen van Parijs in 1900 gebruikten het gebied rond de Eiffeltoren voor verschillende sportevenementen tijdens de Wereldtentoonstelling."
        }
      },
      {
        question: {
          en: "When was the sparkling light display first added to the tower?",
          es: "¿Cuándo se añadió por primera vez el espectáculo de luces centelleantes a la torre?",
          de: "Wann wurde die funkelnde Lichtshow erstmals zum Turm hinzugefügt?",
          nl: "Wanneer werd de fonkelende lichtshow voor het eerst aan de toren toegevoegd?"
        },
        options: [
          { en: "1999 for millennium", es: "1999 para el milenio", de: "1999 für das Millennium", nl: "1999 voor het millennium" },
          { en: "1989 for centennial", es: "1989 para el centenario", de: "1989 für das Hundertjahrjubiläum", nl: "1989 voor het honderdjarig jubileum" },
          { en: "2010", es: "2010", de: "2010", nl: "2010" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" }
        ],
        correct: 0,
        explanation: {
          en: "The sparkling lights display with 20,000 bulbs was installed in 1999 to celebrate the millennium and has been kept ever since.",
          es: "El espectáculo de luces centelleantes con 20,000 bombillas se instaló en 1999 para celebrar el milenio y se ha mantenido desde entonces.",
          de: "Die funkelnde Lichtshow mit 20.000 Glühbirnen wurde 1999 zur Feier des Millenniums installiert und seitdem beibehalten.",
          nl: "De fonkelende lichtshow met 20.000 lampen werd in 1999 geïnstalleerd om het millennium te vieren en is sindsdien behouden."
        }
      },
      {
        question: {
          en: "What scientific instrument did Gustave Eiffel install at the top?",
          es: "¿Qué instrumento científico instaló Gustave Eiffel en la cima?",
          de: "Welches wissenschaftliche Instrument installierte Gustave Eiffel an der Spitze?",
          nl: "Welk wetenschappelijk instrument installeerde Gustave Eiffel bovenaan?"
        },
        options: [
          { en: "Weather station", es: "Estación meteorológica", de: "Wetterstation", nl: "Weerstation" },
          { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" },
          { en: "Seismograph", es: "Sismógrafo", de: "Seismograph", nl: "Seismograaf" },
          { en: "Compass", es: "Brújula", de: "Kompass", nl: "Kompas" }
        ],
        correct: 0,
        explanation: {
          en: "Eiffel installed a meteorological station at the top of the tower to conduct weather observations and atmospheric studies.",
          es: "Eiffel instaló una estación meteorológica en la cima de la torre para realizar observaciones climáticas y estudios atmosféricos.",
          de: "Eiffel installierte eine meteorologische Station an der Spitze des Turms, um Wetterbeobachtungen und atmosphärische Studien durchzuführen.",
          nl: "Eiffel installeerde een meteorologisch station bovenaan de toren om weerwaarnemingen en atmosferische studies uit te voeren."
        }
      },
      {
        question: {
          en: "What commercial use was made of the tower in early years?",
          es: "¿Qué uso comercial se hizo de la torre en los primeros años?",
          de: "Welche kommerzielle Nutzung wurde in den frühen Jahren vom Turm gemacht?",
          nl: "Welk commercieel gebruik werd in de eerste jaren van de toren gemaakt?"
        },
        options: [
          { en: "Advertising sign for Citroën", es: "Letrero publicitario para Citroën", de: "Werbeschild für Citroën", nl: "Reclamebord voor Citroën" },
          { en: "Movie theater", es: "Cine", de: "Kino", nl: "Bioscoop" },
          { en: "Shopping center", es: "Centro comercial", de: "Einkaufszentrum", nl: "Winkelcentrum" },
          { en: "Hotel rooms", es: "Habitaciones de hotel", de: "Hotelzimmer", nl: "Hotelkamers" }
        ],
        correct: 0,
        explanation: {
          en: "From 1925 to 1934, the Citroën company used the tower as a giant advertising sign with 250,000 light bulbs spelling the brand name.",
          es: "De 1925 a 1934, la empresa Citroën usó la torre como un letrero publicitario gigante con 250,000 bombillas deletreando el nombre de la marca.",
          de: "Von 1925 bis 1934 nutzte die Firma Citroën den Turm als riesiges Werbeschild mit 250.000 Glühbirnen, die den Markennamen buchstabierten.",
          nl: "Van 1925 tot 1934 gebruikte het bedrijf Citroën de toren als een gigantisch reclamebord met 250.000 lampen die de merknaam spelden."
        }
      },
      {
        question: {
          en: "Who was Thomas Edison's connection to the Eiffel Tower?",
          es: "¿Cuál fue la conexión de Thomas Edison con la Torre Eiffel?",
          de: "Was war Thomas Edisons Verbindung zum Eiffelturm?",
          nl: "Wat was de connectie van Thomas Edison met de Eiffeltoren?"
        },
        options: [
          { en: "He visited and signed the guest book", es: "Visitó y firmó el libro de visitas", de: "Er besuchte und unterschrieb das Gästebuch", nl: "Hij bezocht en tekende het gastenboek" },
          { en: "He designed the lights", es: "Diseñó las luces", de: "Er entwarf die Beleuchtung", nl: "Hij ontwierp de verlichting" },
          { en: "He funded construction", es: "Financió la construcción", de: "Er finanzierte den Bau", nl: "Hij financierde de bouw" },
          { en: "He never visited", es: "Nunca visitó", de: "Er besuchte nie", nl: "Hij heeft nooit bezocht" }
        ],
        correct: 0,
        explanation: {
          en: "Thomas Edison visited the Eiffel Tower in 1889 and met Gustave Eiffel, signing the guest book at the top of the tower.",
          es: "Thomas Edison visitó la Torre Eiffel en 1889 y conoció a Gustave Eiffel, firmando el libro de visitas en la cima de la torre.",
          de: "Thomas Edison besuchte 1889 den Eiffelturm und traf Gustave Eiffel, wobei er das Gästebuch an der Spitze des Turms unterschrieb.",
          nl: "Thomas Edison bezocht de Eiffeltoren in 1889 en ontmoette Gustave Eiffel, waarbij hij het gastenboek bovenaan de toren tekende."
        }
      },
      {
        question: {
          en: "What record did Pierre Labric set at the Eiffel Tower in 1923?",
          es: "¿Qué récord estableció Pierre Labric en la Torre Eiffel en 1923?",
          de: "Welchen Rekord stellte Pierre Labric 1923 am Eiffelturm auf?",
          nl: "Welk record vestigde Pierre Labric in 1923 bij de Eiffeltoren?"
        },
        options: [
          { en: "Rode bicycle down the stairs", es: "Bajó las escaleras en bicicleta", de: "Fuhr mit dem Fahrrad die Treppen hinunter", nl: "Fietste de trap af" },
          { en: "Fastest climb on foot", es: "Ascenso más rápido a pie", de: "Schnellster Aufstieg zu Fuß", nl: "Snelste beklimming te voet" },
          { en: "Longest stay at top", es: "Estancia más larga en la cima", de: "Längster Aufenthalt an der Spitze", nl: "Langste verblijf bovenaan" },
          { en: "First night climb", es: "Primera escalada nocturna", de: "Erste Nachtbesteigung", nl: "Eerste nachtelijke beklimming" }
        ],
        correct: 0,
        explanation: {
          en: "Journalist Pierre Labric rode his bicycle down the stairs from the first level in 1923, though he was arrested at the bottom.",
          es: "El periodista Pierre Labric bajó las escaleras en bicicleta desde el primer nivel en 1923, aunque fue arrestado en la base.",
          de: "Der Journalist Pierre Labric fuhr 1923 mit seinem Fahrrad die Treppen von der ersten Ebene hinunter, wurde jedoch am Boden verhaftet.",
          nl: "Journalist Pierre Labric fietste in 1923 de trap af vanaf de eerste verdieping, hoewel hij onderaan werd gearresteerd."
        }
,
      {
        question: {
          en: "What architectural curve does the tower's shape follow?",
          es: "¿Qué curva arquitectónica sigue la forma de la torre?",
          de: "Welcher architektonischen Kurve folgt die Form des Turms?",
          nl: "Welke architectonische curve volgt de vorm van de toren?"
        },
        options: [
          { en: "Exponential curve for wind resistance", es: "Curva exponencial para resistencia al viento", de: "Exponentielle Kurve für Windwiderstand", nl: "Exponentiële curve voor windweerstand" },
          { en: "Circular arc", es: "Arco circular", de: "Kreisbogen", nl: "Cirkelboog" },
          { en: "Straight lines only", es: "Solo líneas rectas", de: "Nur gerade Linien", nl: "Alleen rechte lijnen" },
          { en: "Random design", es: "Diseño aleatorio", de: "Zufälliges Design", nl: "Willekeurig ontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "The tower's distinctive shape follows an exponential curve mathematically designed to provide optimal wind resistance and structural efficiency.",
          es: "La forma distintiva de la torre sigue una curva exponencial diseñada matemáticamente para proporcionar una resistencia óptima al viento y eficiencia estructural.",
          de: "Die charakteristische Form des Turms folgt einer exponentiellen Kurve, die mathematisch entworfen wurde, um optimalen Windwiderstand und strukturelle Effizienz zu bieten.",
          nl: "De kenmerkende vorm van de toren volgt een exponentiële curve die wiskundig is ontworpen om optimale windweerstand en structurele efficiëntie te bieden."
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
