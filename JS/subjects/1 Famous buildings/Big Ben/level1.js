(function() {
    const questions = [
        {
            question: {
                en: "What is 'Big Ben' actually?",
                es: "¿Qué es realmente 'Big Ben'?",
                de: "Was ist 'Big Ben' eigentlich?",
                nl: "Wat is 'Big Ben' eigenlijk?"
            },
            options: {
                en: ["The clock tower", "The great bell inside the tower", "The clock face", "The entire Palace of Westminster"],
                es: ["La torre del reloj", "La gran campana dentro de la torre", "La esfera del reloj", "Todo el Palacio de Westminster"],
                de: ["Der Glockenturm", "Die große Glocke im Turm", "Das Zifferblatt", "Der gesamte Palace of Westminster"],
                nl: ["De klokkentoren", "De grote klok in de toren", "De wijzerplaat", "Het hele Palace of Westminster"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is the name of the great bell inside the clock tower, not the tower itself. The tower is officially called the Elizabeth Tower since 2012.",
                es: "Big Ben es el nombre de la gran campana dentro de la torre del reloj, no la torre en sí. La torre se llama oficialmente Elizabeth Tower desde 2012.",
                de: "Big Ben ist der Name der großen Glocke im Glockenturm, nicht der Turm selbst. Der Turm heißt offiziell seit 2012 Elizabeth Tower.",
                nl: "Big Ben is de naam van de grote klok in de klokkentoren, niet de toren zelf. De toren heet officieel sinds 2012 de Elizabeth Tower."
            }
        },
        {
            question: {
                en: "Where is Big Ben located?",
                es: "¿Dónde se encuentra Big Ben?",
                de: "Wo befindet sich Big Ben?",
                nl: "Waar bevindt Big Ben zich?"
            },
            options: {
                en: ["Buckingham Palace, London", "Palace of Westminster, London", "Tower of London", "Windsor Castle"],
                es: ["Palacio de Buckingham, Londres", "Palacio de Westminster, Londres", "Torre de Londres", "Castillo de Windsor"],
                de: ["Buckingham Palace, London", "Palace of Westminster, London", "Tower of London", "Windsor Castle"],
                nl: ["Buckingham Palace, Londen", "Palace of Westminster, Londen", "Tower of London", "Windsor Castle"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is located in the clock tower (Elizabeth Tower) at the Palace of Westminster in London, UK, which houses the British Parliament.",
                es: "Big Ben se encuentra en la torre del reloj (Elizabeth Tower) en el Palacio de Westminster en Londres, Reino Unido, que alberga el Parlamento británico.",
                de: "Big Ben befindet sich im Glockenturm (Elizabeth Tower) des Palace of Westminster in London, Großbritannien, wo das britische Parlament untergebracht ist.",
                nl: "Big Ben bevindt zich in de klokkentoren (Elizabeth Tower) van het Palace of Westminster in Londen, Verenigd Koninkrijk, waar het Britse parlement is gehuisvest."
            }
        },
        {
            question: {
                en: "Who designed the clock tower?",
                es: "¿Quién diseñó la torre del reloj?",
                de: "Wer entwarf den Glockenturm?",
                nl: "Wie ontwierp de klokkentoren?"
            },
            options: {
                en: ["Christopher Wren", "Augustus Pugin", "Isambard Kingdom Brunel", "John Nash"],
                es: ["Christopher Wren", "Augustus Pugin", "Isambard Kingdom Brunel", "John Nash"],
                de: ["Christopher Wren", "Augustus Pugin", "Isambard Kingdom Brunel", "John Nash"],
                nl: ["Christopher Wren", "Augustus Pugin", "Isambard Kingdom Brunel", "John Nash"]
            },
            correct: 1,
            explanation: {
                en: "Augustus Pugin designed the iconic clock tower in the Gothic Revival style. He was known for his Gothic architecture and worked on many details of the Palace of Westminster.",
                es: "Augustus Pugin diseñó la icónica torre del reloj en estilo neogótico. Era conocido por su arquitectura gótica y trabajó en muchos detalles del Palacio de Westminster.",
                de: "Augustus Pugin entwarf den ikonischen Glockenturm im neugotischen Stil. Er war bekannt für seine gotische Architektur und arbeitete an vielen Details des Palace of Westminster.",
                nl: "Augustus Pugin ontwierp de iconische klokkentoren in neogotische stijl. Hij stond bekend om zijn gotische architectuur en werkte aan veel details van het Palace of Westminster."
            }
        },
        {
            question: {
                en: "When was Big Ben completed?",
                es: "¿Cuándo se completó Big Ben?",
                de: "Wann wurde Big Ben fertiggestellt?",
                nl: "Wanneer werd Big Ben voltooid?"
            },
            options: {
                en: ["1834", "1843", "1859", "1901"],
                es: ["1834", "1843", "1859", "1901"],
                de: ["1834", "1843", "1859", "1901"],
                nl: ["1834", "1843", "1859", "1901"]
            },
            correct: 2,
            explanation: {
                en: "Big Ben was completed in 1859. The bell first chimed in July 1859, marking the completion of this iconic Victorian landmark.",
                es: "Big Ben se completó en 1859. La campana sonó por primera vez en julio de 1859, marcando la finalización de este icónico monumento victoriano.",
                de: "Big Ben wurde 1859 fertiggestellt. Die Glocke läutete erstmals im Juli 1859 und markierte die Fertigstellung dieses ikonischen viktorianischen Wahrzeichens.",
                nl: "Big Ben werd voltooid in 1859. De klok luidde voor het eerst in juli 1859, wat de voltooiing van dit iconische Victoriaanse monument markeerde."
            }
        },
        {
            question: {
                en: "What is the height of the Elizabeth Tower?",
                es: "¿Cuál es la altura de la Elizabeth Tower?",
                de: "Wie hoch ist der Elizabeth Tower?",
                nl: "Wat is de hoogte van de Elizabeth Tower?"
            },
            options: {
                en: ["250 feet (76 meters)", "316 feet (96 meters)", "400 feet (122 meters)", "500 feet (152 meters)"],
                es: ["250 pies (76 metros)", "316 pies (96 metros)", "400 pies (122 metros)", "500 pies (152 metros)"],
                de: ["250 Fuß (76 Meter)", "316 Fuß (96 Meter)", "400 Fuß (122 Meter)", "500 Fuß (152 Meter)"],
                nl: ["250 voet (76 meter)", "316 voet (96 meter)", "400 voet (122 meter)", "500 voet (152 meter)"]
            },
            correct: 1,
            explanation: {
                en: "The Elizabeth Tower stands 316 feet (96 meters) tall, making it one of London's most recognizable landmarks and visible from many parts of the city.",
                es: "La Elizabeth Tower tiene 316 pies (96 metros) de altura, lo que la convierte en uno de los monumentos más reconocibles de Londres y visible desde muchas partes de la ciudad.",
                de: "Der Elizabeth Tower ist 316 Fuß (96 Meter) hoch und damit eines der bekanntesten Wahrzeichen Londons, das von vielen Teilen der Stadt aus sichtbar ist.",
                nl: "De Elizabeth Tower is 316 voet (96 meter) hoog, waardoor het een van de meest herkenbare bezienswaardigheden van Londen is en vanuit veel delen van de stad zichtbaar is."
            }
        },
        {
            question: {
                en: "What is the diameter of each clock face?",
                es: "¿Cuál es el diámetro de cada esfera del reloj?",
                de: "Wie groß ist der Durchmesser jedes Zifferblatts?",
                nl: "Wat is de diameter van elke wijzerplaat?"
            },
            options: {
                en: ["15 feet (4.6 meters)", "23 feet (7 meters)", "30 feet (9 meters)", "40 feet (12 meters)"],
                es: ["15 pies (4.6 metros)", "23 pies (7 metros)", "30 pies (9 metros)", "40 pies (12 metros)"],
                de: ["15 Fuß (4,6 Meter)", "23 Fuß (7 Meter)", "30 Fuß (9 Meter)", "40 Fuß (12 Meter)"],
                nl: ["15 voet (4,6 meter)", "23 voet (7 meter)", "30 voet (9 meter)", "40 voet (12 meter)"]
            },
            correct: 1,
            explanation: {
                en: "Each of the four clock faces has a diameter of 23 feet (7 meters), making them large enough to be read from a considerable distance across London.",
                es: "Cada una de las cuatro esferas del reloj tiene un diámetro de 23 pies (7 metros), lo que las hace lo suficientemente grandes como para ser leídas desde una distancia considerable en Londres.",
                de: "Jedes der vier Zifferblätter hat einen Durchmesser von 23 Fuß (7 Metern), sodass sie aus beträchtlicher Entfernung in London abgelesen werden können.",
                nl: "Elk van de vier wijzerplaten heeft een diameter van 23 voet (7 meter), waardoor ze groot genoeg zijn om vanaf een aanzienlijke afstand in Londen te worden afgelezen."
            }
        },
        {
            question: {
                en: "How many clock faces does the Elizabeth Tower have?",
                es: "¿Cuántas esferas de reloj tiene la Elizabeth Tower?",
                de: "Wie viele Zifferblätter hat der Elizabeth Tower?",
                nl: "Hoeveel wijzerplaten heeft de Elizabeth Tower?"
            },
            options: {
                en: ["Two (north and south)", "Three (north, south, east)", "Four (north, south, east, west)", "Six (all directions)"],
                es: ["Dos (norte y sur)", "Tres (norte, sur, este)", "Cuatro (norte, sur, este, oeste)", "Seis (todas direcciones)"],
                de: ["Zwei (Nord und Süd)", "Drei (Nord, Süd, Ost)", "Vier (Nord, Süd, Ost, West)", "Sechs (alle Richtungen)"],
                nl: ["Twee (noord en zuid)", "Drie (noord, zuid, oost)", "Vier (noord, zuid, oost, west)", "Zes (alle richtingen)"]
            },
            correct: 2,
            explanation: {
                en: "The Elizabeth Tower has four clock faces, one facing each cardinal direction: north, south, east, and west, ensuring the time is visible from all sides.",
                es: "La Elizabeth Tower tiene cuatro esferas de reloj, una mirando hacia cada dirección cardinal: norte, sur, este y oeste, asegurando que la hora sea visible desde todos los lados.",
                de: "Der Elizabeth Tower hat vier Zifferblätter, eines in jede Himmelsrichtung: Nord, Süd, Ost und West, sodass die Zeit von allen Seiten sichtbar ist.",
                nl: "De Elizabeth Tower heeft vier wijzerplaten, één gericht op elke windrichting: noord, zuid, oost en west, zodat de tijd vanaf alle kanten zichtbaar is."
            }
        },
        {
            question: {
                en: "How much does the Big Ben bell weigh?",
                es: "¿Cuánto pesa la campana Big Ben?",
                de: "Wie viel wiegt die Big Ben Glocke?",
                nl: "Hoeveel weegt de Big Ben klok?"
            },
            options: {
                en: ["6.5 tons", "13.7 tons", "20 tons", "25 tons"],
                es: ["6.5 toneladas", "13.7 toneladas", "20 toneladas", "25 toneladas"],
                de: ["6,5 Tonnen", "13,7 Tonnen", "20 Tonnen", "25 Tonnen"],
                nl: ["6,5 ton", "13,7 ton", "20 ton", "25 ton"]
            },
            correct: 1,
            explanation: {
                en: "The Big Ben bell weighs 13.7 tons (13,760 kg), making it one of the heaviest bells in the United Kingdom. Its deep, resonant tone is world-famous.",
                es: "La campana Big Ben pesa 13.7 toneladas (13,760 kg), lo que la convierte en una de las campanas más pesadas del Reino Unido. Su tono profundo y resonante es mundialmente famoso.",
                de: "Die Big Ben Glocke wiegt 13,7 Tonnen (13.760 kg) und ist damit eine der schwersten Glocken im Vereinigten Königreich. Ihr tiefer, resonanter Ton ist weltberühmt.",
                nl: "De Big Ben klok weegt 13,7 ton (13.760 kg), waardoor het een van de zwaarste klokken in het Verenigd Koninkrijk is. De diepe, resonerende toon is wereldberoemd."
            }
        },
        {
            question: {
                en: "Why is the bell called 'Big Ben'?",
                es: "¿Por qué se llama la campana 'Big Ben'?",
                de: "Warum heißt die Glocke 'Big Ben'?",
                nl: "Waarom heet de klok 'Big Ben'?"
            },
            options: {
                en: ["Named after Queen Victoria", "Named after Sir Benjamin Hall or boxer Ben Caunt (debated)", "Named after Benjamin Franklin", "Named after the architect"],
                es: ["Nombrada por la Reina Victoria", "Nombrada por Sir Benjamin Hall o el boxeador Ben Caunt (debatido)", "Nombrada por Benjamin Franklin", "Nombrada por el arquitecto"],
                de: ["Nach Königin Victoria benannt", "Nach Sir Benjamin Hall oder Boxer Ben Caunt benannt (umstritten)", "Nach Benjamin Franklin benannt", "Nach dem Architekten benannt"],
                nl: ["Genoemd naar koningin Victoria", "Genoemd naar Sir Benjamin Hall of bokser Ben Caunt (betwist)", "Genoemd naar Benjamin Franklin", "Genoemd naar de architect"]
            },
            correct: 1,
            explanation: {
                en: "The origin of the name 'Big Ben' is debated. It may have been named after Sir Benjamin Hall, the Commissioner of Works, or after heavyweight boxer Ben Caunt, both popular figures at the time.",
                es: "El origen del nombre 'Big Ben' es debatido. Puede haber sido nombrado por Sir Benjamin Hall, el Comisionado de Obras, o por el boxeador de peso pesado Ben Caunt, ambos figuras populares en ese momento.",
                de: "Der Ursprung des Namens 'Big Ben' ist umstritten. Er könnte nach Sir Benjamin Hall, dem Commissioner of Works, oder nach dem Schwergewichtsboxer Ben Caunt benannt worden sein, beide beliebte Persönlichkeiten zu dieser Zeit.",
                nl: "De oorsprong van de naam 'Big Ben' is omstreden. Het kan zijn vernoemd naar Sir Benjamin Hall, de Commissioner of Works, of naar zwaargewichtbokser Ben Caunt, beide populaire figuren in die tijd."
            }
        },
        {
            question: {
                en: "Who designed the clock mechanism?",
                es: "¿Quién diseñó el mecanismo del reloj?",
                de: "Wer entwarf den Uhrenmechanismus?",
                nl: "Wie ontwierp het klokmechanisme?"
            },
            options: {
                en: ["Augustus Pugin", "Edmund Beckett Denison", "Charles Barry", "George Airy"],
                es: ["Augustus Pugin", "Edmund Beckett Denison", "Charles Barry", "George Airy"],
                de: ["Augustus Pugin", "Edmund Beckett Denison", "Charles Barry", "George Airy"],
                nl: ["Augustus Pugin", "Edmund Beckett Denison", "Charles Barry", "George Airy"]
            },
            correct: 1,
            explanation: {
                en: "Edmund Beckett Denison (later Lord Grimthorpe) designed the innovative clock mechanism. His design included a unique gravity escapement that made the clock extremely accurate for its time.",
                es: "Edmund Beckett Denison (más tarde Lord Grimthorpe) diseñó el innovador mecanismo del reloj. Su diseño incluía un escape de gravedad único que hizo que el reloj fuera extremadamente preciso para su época.",
                de: "Edmund Beckett Denison (später Lord Grimthorpe) entwarf den innovativen Uhrenmechanismus. Sein Design enthielt eine einzigartige Schwerkrafthemmung, die die Uhr für ihre Zeit äußerst genau machte.",
                nl: "Edmund Beckett Denison (later Lord Grimthorpe) ontwierp het innovatieve klokmechanisme. Zijn ontwerp bevatte een unieke zwaartekrachtontvluchting die de klok voor zijn tijd uiterst nauwkeurig maakte."
            }
        },
        {
            question: {
                en: "What architectural style is the Elizabeth Tower?",
                es: "¿Qué estilo arquitectónico tiene la Elizabeth Tower?",
                de: "Welchen Architekturstil hat der Elizabeth Tower?",
                nl: "Welke architectuurstijl heeft de Elizabeth Tower?"
            },
            options: {
                en: ["Baroque", "Gothic Revival", "Neoclassical", "Art Deco"],
                es: ["Barroco", "Neogótico", "Neoclásico", "Art Deco"],
                de: ["Barock", "Neugotik", "Neoklassizismus", "Art Deco"],
                nl: ["Barok", "Neogotiek", "Neoklassiek", "Art Deco"]
            },
            correct: 1,
            explanation: {
                en: "The Elizabeth Tower is built in the Gothic Revival style, characterized by pointed arches, ornate decorations, and medieval-inspired elements typical of 19th-century Gothic architecture.",
                es: "La Elizabeth Tower está construida en estilo neogótico, caracterizado por arcos apuntados, decoraciones ornamentadas y elementos inspirados en lo medieval típicos de la arquitectura gótica del siglo XIX.",
                de: "Der Elizabeth Tower ist im neugotischen Stil erbaut, gekennzeichnet durch Spitzbögen, kunstvolle Verzierungen und mittelalterlich inspirierte Elemente, die typisch für die gotische Architektur des 19. Jahrhunderts sind.",
                nl: "De Elizabeth Tower is gebouwd in neogotische stijl, gekenmerkt door spitsbogen, sierlijke decoraties en middeleeuws geïnspireerde elementen die typisch zijn voor 19e-eeuwse gotische architectuur."
            }
        },
        {
            question: {
                en: "Is the Elizabeth Tower part of a UNESCO World Heritage Site?",
                es: "¿Es la Elizabeth Tower parte de un Sitio del Patrimonio Mundial de la UNESCO?",
                de: "Ist der Elizabeth Tower Teil eines UNESCO-Weltkulturerbes?",
                nl: "Maakt de Elizabeth Tower deel uit van een UNESCO-werelderfgoed?"
            },
            options: {
                en: ["No", "Yes, as part of Westminster Palace", "Yes, as a standalone site", "Only the clock is protected"],
                es: ["No", "Sí, como parte del Palacio de Westminster", "Sí, como sitio independiente", "Solo el reloj está protegido"],
                de: ["Nein", "Ja, als Teil des Palace of Westminster", "Ja, als eigenständiges Denkmal", "Nur die Uhr ist geschützt"],
                nl: ["Nee", "Ja, als onderdeel van Westminster Palace", "Ja, als zelfstandige site", "Alleen de klok is beschermd"]
            },
            correct: 1,
            explanation: {
                en: "Yes, the Elizabeth Tower is part of the UNESCO World Heritage Site 'Palace of Westminster and Westminster Abbey including Saint Margaret's Church', designated in 1987.",
                es: "Sí, la Elizabeth Tower es parte del Sitio del Patrimonio Mundial de la UNESCO 'Palacio de Westminster y Abadía de Westminster incluida la Iglesia de Santa Margarita', designado en 1987.",
                de: "Ja, der Elizabeth Tower ist Teil des UNESCO-Weltkulturerbes 'Palace of Westminster und Westminster Abbey einschließlich der St. Margaret's Church', das 1987 ausgewiesen wurde.",
                nl: "Ja, de Elizabeth Tower maakt deel uit van het UNESCO-werelderfgoed 'Palace of Westminster en Westminster Abbey inclusief Saint Margaret's Church', aangewezen in 1987."
            }
        },
        {
            question: {
                en: "How long are the minute hands on the clock?",
                es: "¿Cuánto miden las manecillas de los minutos del reloj?",
                de: "Wie lang sind die Minutenzeiger der Uhr?",
                nl: "Hoe lang zijn de minutenwijzers van de klok?"
            },
            options: {
                en: ["9 feet", "14 feet", "18 feet", "20 feet"],
                es: ["9 pies", "14 pies", "18 pies", "20 pies"],
                de: ["9 Fuß", "14 Fuß", "18 Fuß", "20 Fuß"],
                nl: ["9 voet", "14 voet", "18 voet", "20 voet"]
            },
            correct: 1,
            explanation: {
                en: "The minute hands are 14 feet long and made of copper. They are large enough to be clearly visible from the ground, helping Londoners tell the time from a distance.",
                es: "Las manecillas de los minutos miden 14 pies de largo y están hechas de cobre. Son lo suficientemente grandes como para ser claramente visibles desde el suelo, ayudando a los londinenses a decir la hora desde la distancia.",
                de: "Die Minutenzeiger sind 14 Fuß lang und aus Kupfer gefertigt. Sie sind groß genug, um vom Boden aus deutlich sichtbar zu sein und helfen Londonern, die Zeit aus der Ferne abzulesen.",
                nl: "De minutenwijzers zijn 14 voet lang en gemaakt van koper. Ze zijn groot genoeg om duidelijk zichtbaar te zijn vanaf de grond, waardoor Londenaren de tijd van een afstand kunnen aflezen."
            }
        },
        {
            question: {
                en: "How long are the hour hands?",
                es: "¿Cuánto miden las manecillas de las horas?",
                de: "Wie lang sind die Stundenzeiger?",
                nl: "Hoe lang zijn de uurwijzers?"
            },
            options: {
                en: ["6 feet", "9 feet", "12 feet", "14 feet"],
                es: ["6 pies", "9 pies", "12 pies", "14 pies"],
                de: ["6 Fuß", "9 Fuß", "12 Fuß", "14 Fuß"],
                nl: ["6 voet", "9 voet", "12 voet", "14 voet"]
            },
            correct: 1,
            explanation: {
                en: "The hour hands are 9 feet long, shorter than the minute hands. This traditional design helps distinguish between the two hands when viewing the clock from a distance.",
                es: "Las manecillas de las horas miden 9 pies de largo, más cortas que las manecillas de los minutos. Este diseño tradicional ayuda a distinguir entre las dos manecillas al ver el reloj desde la distancia.",
                de: "Die Stundenzeiger sind 9 Fuß lang, kürzer als die Minutenzeiger. Dieses traditionelle Design hilft, die beiden Zeiger beim Betrachten der Uhr aus der Ferne zu unterscheiden.",
                nl: "De uurwijzers zijn 9 voet lang, korter dan de minutenwijzers. Dit traditionele ontwerp helpt om de twee wijzers te onderscheiden bij het bekijken van de klok van een afstand."
            }
        },
        {
            question: {
                en: "How often does Big Ben chime?",
                es: "¿Con qué frecuencia suena Big Ben?",
                de: "Wie oft läutet Big Ben?",
                nl: "Hoe vaak luidt Big Ben?"
            },
            options: {
                en: ["Only at noon", "Every hour and quarter hours", "Only on special occasions", "Every half hour"],
                es: ["Solo al mediodía", "Cada hora y cuartos de hora", "Solo en ocasiones especiales", "Cada media hora"],
                de: ["Nur um Mittag", "Jede Stunde und Viertelstunde", "Nur zu besonderen Anlässen", "Jede halbe Stunde"],
                nl: ["Alleen om 12 uur 's middags", "Elk uur en kwartier", "Alleen bij speciale gelegenheden", "Elk half uur"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben chimes every hour (the number of hours) and the Westminster Quarters melody plays every quarter hour (15, 30, 45 minutes), making it a constant timekeeper for London.",
                es: "Big Ben suena cada hora (el número de horas) y la melodía Westminster Quarters se reproduce cada cuarto de hora (15, 30, 45 minutos), convirtiéndolo en un guardián constante del tiempo para Londres.",
                de: "Big Ben läutet jede Stunde (Anzahl der Stunden) und die Westminster Quarters-Melodie spielt jede Viertelstunde (15, 30, 45 Minuten), was ihn zu einem ständigen Zeithüter für London macht.",
                nl: "Big Ben luidt elk uur (het aantal uren) en de Westminster Quarters-melodie speelt elk kwartier (15, 30, 45 minuten), waardoor het een constante tijdhouder voor Londen is."
            }
        },
        {
            question: {
                en: "When was the Clock Tower renamed Elizabeth Tower?",
                es: "¿Cuándo se renombró la Clock Tower como Elizabeth Tower?",
                de: "Wann wurde der Clock Tower in Elizabeth Tower umbenannt?",
                nl: "Wanneer werd de Clock Tower omgedoopt tot Elizabeth Tower?"
            },
            options: {
                en: ["1952 (Elizabeth II's accession)", "2002 (Golden Jubilee)", "2012 (Diamond Jubilee)", "2022 (Platinum Jubilee)"],
                es: ["1952 (ascensión de Isabel II)", "2002 (Jubileo de Oro)", "2012 (Jubileo de Diamante)", "2022 (Jubileo de Platino)"],
                de: ["1952 (Thronbesteigung von Elizabeth II)", "2002 (Goldenes Jubiläum)", "2012 (Diamantenes Jubiläum)", "2022 (Platinjubiläum)"],
                nl: ["1952 (troonsbestijging van Elizabeth II)", "2002 (Gouden Jubileum)", "2012 (Diamanten Jubileum)", "2022 (Platina Jubileum)"]
            },
            correct: 2,
            explanation: {
                en: "The Clock Tower was officially renamed Elizabeth Tower in 2012 to celebrate Queen Elizabeth II's Diamond Jubilee, marking 60 years of her reign.",
                es: "La Clock Tower se renombró oficialmente Elizabeth Tower en 2012 para celebrar el Jubileo de Diamante de la Reina Isabel II, marcando 60 años de su reinado.",
                de: "Der Clock Tower wurde 2012 offiziell in Elizabeth Tower umbenannt, um das diamantene Jubiläum von Königin Elizabeth II zu feiern und 60 Jahre ihrer Herrschaft zu würdigen.",
                nl: "De Clock Tower werd in 2012 officieel omgedoopt tot Elizabeth Tower om het Diamanten Jubileum van koningin Elizabeth II te vieren, ter ere van 60 jaar van haar bewind."
            }
        },
        {
            question: {
                en: "How many steps are there to the top of the tower?",
                es: "¿Cuántos escalones hay hasta la cima de la torre?",
                de: "Wie viele Stufen gibt es bis zur Spitze des Turms?",
                nl: "Hoeveel treden zijn er naar de top van de toren?"
            },
            options: {
                en: ["199 steps", "267 steps", "334 steps", "412 steps"],
                es: ["199 escalones", "267 escalones", "334 escalones", "412 escalones"],
                de: ["199 Stufen", "267 Stufen", "334 Stufen", "412 Stufen"],
                nl: ["199 treden", "267 treden", "334 treden", "412 treden"]
            },
            correct: 2,
            explanation: {
                en: "There are 334 steps to reach the top of the Elizabeth Tower. There is no elevator, so visitors must climb all the steps, making it quite a challenging ascent.",
                es: "Hay 334 escalones para llegar a la cima de la Elizabeth Tower. No hay ascensor, por lo que los visitantes deben subir todos los escalones, lo que lo convierte en un ascenso bastante desafiante.",
                de: "Es gibt 334 Stufen, um die Spitze des Elizabeth Tower zu erreichen. Es gibt keinen Aufzug, daher müssen Besucher alle Stufen hinaufsteigen, was einen ziemlich anspruchsvollen Aufstieg darstellt.",
                nl: "Er zijn 334 treden om de top van de Elizabeth Tower te bereiken. Er is geen lift, dus bezoekers moeten alle treden beklimmen, wat het een behoorlijke uitdaging maakt."
            }
        },
        {
            question: {
                en: "What role does Big Ben play in timekeeping?",
                es: "¿Qué papel juega Big Ben en el cronometraje?",
                de: "Welche Rolle spielt Big Ben bei der Zeitmessung?",
                nl: "Welke rol speelt Big Ben bij het tijdhouden?"
            },
            options: {
                en: ["It sets the official time for the UK", "It is primarily a ceremonial clock", "It is highly accurate and has been a London timekeeper", "It only shows approximate time"],
                es: ["Establece la hora oficial del Reino Unido", "Es principalmente un reloj ceremonial", "Es muy preciso y ha sido un guardián del tiempo de Londres", "Solo muestra la hora aproximada"],
                de: ["Es legt die offizielle Zeit für Großbritannien fest", "Es ist hauptsächlich eine zeremonielle Uhr", "Es ist sehr genau und war ein Londoner Zeithüter", "Es zeigt nur die ungefähre Zeit an"],
                nl: ["Het stelt de officiële tijd voor het VK in", "Het is voornamelijk een ceremoniële klok", "Het is zeer nauwkeurig en is een Londense tijdhouder geweest", "Het toont alleen bij benadering de tijd"]
            },
            correct: 2,
            explanation: {
                en: "Big Ben and its clock mechanism are highly accurate and have served as an important timekeeper for London for over 160 years, though modern atomic clocks now set official time standards.",
                es: "Big Ben y su mecanismo de reloj son muy precisos y han servido como un importante guardián del tiempo para Londres durante más de 160 años, aunque los relojes atómicos modernos ahora establecen los estándares de tiempo oficial.",
                de: "Big Ben und sein Uhrenmechanismus sind sehr genau und dienen seit über 160 Jahren als wichtiger Zeithüter für London, obwohl moderne Atomuhren jetzt die offiziellen Zeitstandards festlegen.",
                nl: "Big Ben en zijn klokmechanisme zijn zeer nauwkeurig en hebben meer dan 160 jaar gediend als een belangrijke tijdhouder voor Londen, hoewel moderne atoomklokken nu officiële tijdstandaarden instellen."
            }
        },
        {
            question: {
                en: "What is the pendulum of Big Ben's clock?",
                es: "¿Qué es el péndulo del reloj de Big Ben?",
                de: "Was ist das Pendel der Big Ben Uhr?",
                nl: "Wat is de slinger van Big Ben's klok?"
            },
            options: {
                en: ["A decorative element", "The swinging weight that regulates the clock", "The bell striker mechanism", "The clock winding system"],
                es: ["Un elemento decorativo", "El peso oscilante que regula el reloj", "El mecanismo de golpeo de la campana", "El sistema de cuerda del reloj"],
                de: ["Ein dekoratives Element", "Das schwingende Gewicht, das die Uhr reguliert", "Der Glockenschlagmechanismus", "Das Uhraufzugssystem"],
                nl: ["Een decoratief element", "Het slingerende gewicht dat de klok reguleert", "Het klokaanslagmechanisme", "Het opwindsysteem van de klok"]
            },
            correct: 1,
            explanation: {
                en: "The pendulum is a swinging weight that regulates the timekeeping of the clock. Its consistent rhythm ensures the clock keeps accurate time. The Big Ben pendulum is 13 feet long and weighs 660 pounds.",
                es: "El péndulo es un peso oscilante que regula el cronometraje del reloj. Su ritmo constante asegura que el reloj mantenga la hora precisa. El péndulo de Big Ben mide 13 pies de largo y pesa 660 libras.",
                de: "Das Pendel ist ein schwingendes Gewicht, das die Zeitmessung der Uhr reguliert. Sein konstanter Rhythmus sorgt dafür, dass die Uhr die genaue Zeit hält. Das Big Ben Pendel ist 13 Fuß lang und wiegt 660 Pfund.",
                nl: "De slinger is een slingerend gewicht dat de tijdmeting van de klok reguleert. Het constante ritme zorgt ervoor dat de klok nauwkeurige tijd houdt. De Big Ben slinger is 13 voet lang en weegt 660 pond."
            }
        },
        {
            question: {
                en: "What is Big Ben famous as?",
                es: "¿Por qué es famoso Big Ben?",
                de: "Wofür ist Big Ben berühmt?",
                nl: "Waarvoor is Big Ben beroemd?"
            },
            options: {
                en: ["The world's largest clock", "An iconic London and British symbol", "The most accurate clock ever made", "The oldest clock tower in Europe"],
                es: ["El reloj más grande del mundo", "Un símbolo icónico de Londres y británico", "El reloj más preciso jamás hecho", "La torre del reloj más antigua de Europa"],
                de: ["Die größte Uhr der Welt", "Ein ikonisches Symbol von London und Großbritannien", "Die genaueste Uhr, die je gebaut wurde", "Der älteste Glockenturm Europas"],
                nl: ["'s Werelds grootste klok", "Een iconisch Londens en Brits symbool", "De meest nauwkeurige klok ooit gemaakt", "De oudste klokkentoren in Europa"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is famous as one of the most iconic symbols of London and the United Kingdom. Its distinctive chimes and Victorian Gothic architecture make it instantly recognizable worldwide and a symbol of British culture and parliamentary democracy.",
                es: "Big Ben es famoso como uno de los símbolos más icónicos de Londres y el Reino Unido. Sus campanadas distintivas y arquitectura gótica victoriana lo hacen instantáneamente reconocible en todo el mundo y un símbolo de la cultura británica y la democracia parlamentaria.",
                de: "Big Ben ist berühmt als eines der ikonischsten Symbole von London und dem Vereinigten Königreich. Seine charakteristischen Glockenschläge und viktorianisch-gotische Architektur machen ihn weltweit sofort erkennbar und zu einem Symbol britischer Kultur und parlamentarischer Demokratie.",
                nl: "Big Ben is beroemd als een van de meest iconische symbolen van Londen en het Verenigd Koninkrijk. De kenmerkende klokslag en Victoriaanse gotische architectuur maken het wereldwijd direct herkenbaar en een symbool van Britse cultuur en parlementaire democratie."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else {
        window.bigBenLevel1Questions = questions;
    }
})();
