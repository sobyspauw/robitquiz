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
        },
        {
            question: {
                en: "In which city is Big Ben located?",
                es: "¿En qué ciudad se encuentra Big Ben?",
                de: "In welcher Stadt befindet sich Big Ben?",
                nl: "In welke stad bevindt Big Ben zich?"
            },
            options: {
                en: ["Paris", "London", "Dublin", "Edinburgh"],
                es: ["París", "Londres", "Dublín", "Edimburgo"],
                de: ["Paris", "London", "Dublin", "Edinburgh"],
                nl: ["Parijs", "Londen", "Dublin", "Edinburgh"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is located in London, the capital city of the United Kingdom. It stands on the bank of the River Thames next to Westminster Bridge.",
                es: "Big Ben se encuentra en Londres, la capital del Reino Unido. Se encuentra en la orilla del río Támesis junto al Puente de Westminster.",
                de: "Big Ben befindet sich in London, der Hauptstadt des Vereinigten Königreichs. Es steht am Ufer der Themse neben der Westminster Bridge.",
                nl: "Big Ben bevindt zich in Londen, de hoofdstad van het Verenigd Koninkrijk. Het staat aan de oever van de rivier de Theems naast Westminster Bridge."
            }
        },
        {
            question: {
                en: "Which river is Big Ben next to?",
                es: "¿Junto a qué río está Big Ben?",
                de: "An welchem Fluss steht Big Ben?",
                nl: "Naast welke rivier staat Big Ben?"
            },
            options: {
                en: ["River Seine", "River Thames", "River Shannon", "River Rhine"],
                es: ["Río Sena", "Río Támesis", "Río Shannon", "Río Rin"],
                de: ["Fluss Seine", "Fluss Themse", "Fluss Shannon", "Fluss Rhein"],
                nl: ["Rivier de Seine", "Rivier de Theems", "Rivier de Shannon", "Rivier de Rijn"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben stands next to the River Thames, London's famous river. The tower's location on the riverbank makes it visible from many parts of the city.",
                es: "Big Ben se encuentra junto al río Támesis, el famoso río de Londres. La ubicación de la torre en la orilla del río la hace visible desde muchas partes de la ciudad.",
                de: "Big Ben steht neben der Themse, Londons berühmtem Fluss. Die Lage des Turms am Flussufer macht ihn von vielen Teilen der Stadt aus sichtbar.",
                nl: "Big Ben staat naast de rivier de Theems, de beroemde rivier van Londen. De locatie van de toren aan de rivieroever maakt het zichtbaar vanuit veel delen van de stad."
            }
        },
        {
            question: {
                en: "What sound does Big Ben make?",
                es: "¿Qué sonido hace Big Ben?",
                de: "Welchen Klang macht Big Ben?",
                nl: "Welk geluid maakt Big Ben?"
            },
            options: {
                en: ["Whistle", "Chime or bell sound", "Alarm", "Horn"],
                es: ["Silbato", "Campanada o sonido de campana", "Alarma", "Bocina"],
                de: ["Pfeife", "Glockenklang oder Glockenton", "Alarm", "Horn"],
                nl: ["Fluitje", "Klokgelui of klokgeluid", "Alarm", "Hoorn"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben makes a deep chiming or bell sound. The bell rings every hour, and smaller bells play the Westminster Quarters melody every 15 minutes.",
                es: "Big Ben hace un sonido profundo de campanada o campana. La campana suena cada hora, y campanas más pequeñas tocan la melodía Westminster Quarters cada 15 minutos.",
                de: "Big Ben macht einen tiefen Glockenklang. Die Glocke läutet jede Stunde, und kleinere Glocken spielen die Westminster Quarters-Melodie alle 15 Minuten.",
                nl: "Big Ben maakt een diep klokgelui. De klok luidt elk uur, en kleinere klokken spelen de Westminster Quarters-melodie elke 15 minuten."
            }
        },
        {
            question: {
                en: "What type of building is Big Ben part of?",
                es: "¿De qué tipo de edificio forma parte Big Ben?",
                de: "Zu welcher Art von Gebäude gehört Big Ben?",
                nl: "Van wat voor soort gebouw maakt Big Ben deel uit?"
            },
            options: {
                en: ["A museum", "A government building (Parliament)", "A church", "A shopping center"],
                es: ["Un museo", "Un edificio gubernamental (Parlamento)", "Una iglesia", "Un centro comercial"],
                de: ["Ein Museum", "Ein Regierungsgebäude (Parlament)", "Eine Kirche", "Ein Einkaufszentrum"],
                nl: ["Een museum", "Een overheidsgebouw (Parlement)", "Een kerk", "Een winkelcentrum"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is part of the Palace of Westminster, which houses the British Parliament. This is where the UK's laws are debated and made.",
                es: "Big Ben es parte del Palacio de Westminster, que alberga el Parlamento británico. Aquí es donde se debaten y hacen las leyes del Reino Unido.",
                de: "Big Ben ist Teil des Palace of Westminster, in dem das britische Parlament untergebracht ist. Hier werden die Gesetze des Vereinigten Königreichs debattiert und gemacht.",
                nl: "Big Ben maakt deel uit van het Palace of Westminster, waar het Britse parlement is gehuisvest. Dit is waar de wetten van het VK worden besproken en gemaakt."
            }
        },
        {
            question: {
                en: "What color are the clock faces usually?",
                es: "¿De qué color son normalmente las esferas del reloj?",
                de: "Welche Farbe haben die Zifferblätter normalerweise?",
                nl: "Welke kleur hebben de wijzerplaten meestal?"
            },
            options: {
                en: ["Red", "Black with gold details", "Blue", "Green"],
                es: ["Rojo", "Negro con detalles dorados", "Azul", "Verde"],
                de: ["Rot", "Schwarz mit goldenen Details", "Blau", "Grün"],
                nl: ["Rood", "Zwart met gouden details", "Blauw", "Groen"]
            },
            correct: 1,
            explanation: {
                en: "The clock faces are black with gold-colored Roman numerals and hands. The faces are illuminated at night, making them clearly visible across London.",
                es: "Las esferas del reloj son negras con números romanos y manecillas de color dorado. Las esferas se iluminan por la noche, haciéndolas claramente visibles en todo Londres.",
                de: "Die Zifferblätter sind schwarz mit goldfarbenen römischen Ziffern und Zeigern. Die Zifferblätter werden nachts beleuchtet und sind in ganz London deutlich sichtbar.",
                nl: "De wijzerplaten zijn zwart met goudkleurige Romeinse cijfers en wijzers. De wijzerplaten worden 's nachts verlicht, waardoor ze duidelijk zichtbaar zijn in heel Londen."
            }
        },
        {
            question: {
                en: "Can visitors climb Big Ben?",
                es: "¿Pueden los visitantes subir Big Ben?",
                de: "Können Besucher Big Ben besteigen?",
                nl: "Kunnen bezoekers Big Ben beklimmen?"
            },
            options: {
                en: ["Yes, anyone can visit anytime", "Limited access with special tours", "No visitors allowed ever", "Only on weekends"],
                es: ["Sí, cualquiera puede visitar en cualquier momento", "Acceso limitado con tours especiales", "Nunca se permiten visitantes", "Solo los fines de semana"],
                de: ["Ja, jeder kann jederzeit besuchen", "Begrenzter Zugang mit speziellen Führungen", "Keine Besucher jemals erlaubt", "Nur am Wochenende"],
                nl: ["Ja, iedereen kan altijd bezoeken", "Beperkte toegang met speciale rondleidingen", "Geen bezoekers ooit toegestaan", "Alleen in het weekend"]
            },
            correct: 1,
            explanation: {
                en: "Access to Big Ben is very limited. Only UK residents can book special tours through their Members of Parliament. There are 334 steps to climb and no elevator.",
                es: "El acceso a Big Ben es muy limitado. Solo los residentes del Reino Unido pueden reservar tours especiales a través de sus miembros del Parlamento. Hay 334 escalones para subir y no hay ascensor.",
                de: "Der Zugang zu Big Ben ist sehr begrenzt. Nur britische Einwohner können über ihre Parlamentsabgeordneten spezielle Führungen buchen. Es gibt 334 Stufen zu steigen und keinen Aufzug.",
                nl: "De toegang tot Big Ben is zeer beperkt. Alleen inwoners van het VK kunnen speciale rondleidingen boeken via hun parlementsleden. Er zijn 334 treden om te beklimmen en geen lift."
            }
        },
        {
            question: {
                en: "What happens every hour at Big Ben?",
                es: "¿Qué sucede cada hora en Big Ben?",
                de: "Was passiert jede Stunde bei Big Ben?",
                nl: "Wat gebeurt er elk uur bij Big Ben?"
            },
            options: {
                en: ["The tower lights flash", "The bell chimes the number of hours", "Music plays", "Fireworks go off"],
                es: ["Las luces de la torre parpadean", "La campana suena el número de horas", "La música suena", "Los fuegos artificiales se disparan"],
                de: ["Die Turmlichter blinken", "Die Glocke läutet die Anzahl der Stunden", "Musik wird gespielt", "Feuerwerk geht los"],
                nl: ["De torenverlichting knippert", "De klok luidt het aantal uren", "Er wordt muziek gespeeld", "Er gaat vuurwerk af"]
            },
            correct: 1,
            explanation: {
                en: "Every hour, Big Ben chimes the number of times matching the hour. For example, at 3 o'clock it chimes three times. This has been happening for over 160 years.",
                es: "Cada hora, Big Ben suena el número de veces que coincide con la hora. Por ejemplo, a las 3 en punto suena tres veces. Esto ha estado sucediendo durante más de 160 años.",
                de: "Jede Stunde läutet Big Ben die Anzahl der Male, die der Stunde entspricht. Zum Beispiel läutet es um 3 Uhr dreimal. Dies geschieht seit über 160 Jahren.",
                nl: "Elk uur luidt Big Ben het aantal keren dat overeenkomt met het uur. Om 3 uur bijvoorbeeld luidt het drie keer. Dit gebeurt al meer dan 160 jaar."
            }
        },
        {
            question: {
                en: "Is the tower straight or does it lean?",
                es: "¿La torre está recta o se inclina?",
                de: "Ist der Turm gerade oder neigt er sich?",
                nl: "Staat de toren recht of helt hij over?"
            },
            options: {
                en: ["Perfectly straight", "Leans slightly to one side", "Leans dramatically like Pisa", "Moves with the wind"],
                es: ["Perfectamente recta", "Se inclina ligeramente hacia un lado", "Se inclina dramáticamente como Pisa", "Se mueve con el viento"],
                de: ["Perfekt gerade", "Neigt sich leicht zur Seite", "Neigt sich dramatisch wie Pisa", "Bewegt sich mit dem Wind"],
                nl: ["Perfect recht", "Helt licht naar één kant", "Helt dramatisch zoals Pisa", "Beweegt met de wind"]
            },
            correct: 1,
            explanation: {
                en: "The Elizabeth Tower leans slightly to the northwest by about 46 centimeters. This lean is very small and the tower is completely safe. It's much less than the famous Leaning Tower of Pisa.",
                es: "La Elizabeth Tower se inclina ligeramente hacia el noroeste unos 46 centímetros. Esta inclinación es muy pequeña y la torre es completamente segura. Es mucho menos que la famosa Torre Inclinada de Pisa.",
                de: "Der Elizabeth Tower neigt sich leicht nach Nordwesten um etwa 46 Zentimeter. Diese Neigung ist sehr gering und der Turm ist völlig sicher. Es ist viel weniger als der berühmte Schiefe Turm von Pisa.",
                nl: "De Elizabeth Tower helt licht naar het noordwesten over met ongeveer 46 centimeter. Deze helling is erg klein en de toren is volledig veilig. Het is veel minder dan de beroemde Scheve Toren van Pisa."
            }
        },
        {
            question: {
                en: "What special occasions is Big Ben associated with?",
                es: "¿Con qué ocasiones especiales se asocia Big Ben?",
                de: "Mit welchen besonderen Anlässen wird Big Ben in Verbindung gebracht?",
                nl: "Met welke speciale gelegenheden wordt Big Ben geassocieerd?"
            },
            options: {
                en: ["Only royal weddings", "New Year's Eve celebrations", "Only Christmas", "Only summer festivals"],
                es: ["Solo bodas reales", "Celebraciones de Nochevieja", "Solo Navidad", "Solo festivales de verano"],
                de: ["Nur königliche Hochzeiten", "Silvesterfeiern", "Nur Weihnachten", "Nur Sommerfestivals"],
                nl: ["Alleen koninklijke bruiloften", "Oudejaarsavondvieringen", "Alleen Kerstmis", "Alleen zomerfestivals"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is especially famous for New Year's Eve celebrations. The BBC broadcasts its midnight chimes to mark the start of the new year, a tradition that has continued for decades.",
                es: "Big Ben es especialmente famoso por las celebraciones de Nochevieja. La BBC transmite sus campanadas de medianoche para marcar el inicio del año nuevo, una tradición que ha continuado durante décadas.",
                de: "Big Ben ist besonders berühmt für Silvesterfeiern. Die BBC überträgt seine Mitternachtsschläge, um den Beginn des neuen Jahres zu markieren, eine Tradition, die seit Jahrzehnten fortbesteht.",
                nl: "Big Ben is vooral beroemd om oudejaarsavondvieringen. De BBC zendt zijn middernachtelijke klokslagen uit om het begin van het nieuwe jaar te markeren, een traditie die al tientallen jaren bestaat."
            }
        },
        {
            question: {
                en: "How is Big Ben's time kept accurate?",
                es: "¿Cómo se mantiene precisa la hora de Big Ben?",
                de: "Wie wird Big Bens Zeit genau gehalten?",
                nl: "Hoe wordt de tijd van Big Ben nauwkeurig gehouden?"
            },
            options: {
                en: ["By computer", "By adding or removing pennies on the pendulum", "By electric motor", "By GPS"],
                es: ["Por computadora", "Añadiendo o quitando peniques en el péndulo", "Por motor eléctrico", "Por GPS"],
                de: ["Durch Computer", "Durch Hinzufügen oder Entfernen von Pennys am Pendel", "Durch Elektromotor", "Durch GPS"],
                nl: ["Door computer", "Door penny's toe te voegen of te verwijderen op de slinger", "Door elektromotor", "Door GPS"]
            },
            correct: 1,
            explanation: {
                en: "The clock's accuracy is adjusted by placing old pennies on top of the pendulum. Adding a penny speeds up the clock by about 0.4 seconds per day. This simple method has been used for over a century.",
                es: "La precisión del reloj se ajusta colocando peniques viejos encima del péndulo. Agregar un penique acelera el reloj unos 0.4 segundos por día. Este método simple se ha utilizado durante más de un siglo.",
                de: "Die Genauigkeit der Uhr wird durch Platzieren alter Pennys oben auf dem Pendel angepasst. Das Hinzufügen eines Pennys beschleunigt die Uhr um etwa 0,4 Sekunden pro Tag. Diese einfache Methode wird seit über einem Jahrhundert verwendet.",
                nl: "De nauwkeurigheid van de klok wordt aangepast door oude penny's bovenop de slinger te plaatsen. Het toevoegen van een penny versnelt de klok met ongeveer 0,4 seconden per dag. Deze eenvoudige methode wordt al meer dan een eeuw gebruikt."
            }
        },
        {
            question: {
                en: "What was Big Ben's condition during recent renovations?",
                es: "¿Cuál fue el estado de Big Ben durante las renovaciones recientes?",
                de: "Wie war Big Bens Zustand während der jüngsten Renovierungen?",
                nl: "Wat was de staat van Big Ben tijdens recente renovaties?"
            },
            options: {
                en: ["Demolished and rebuilt", "Covered in scaffolding for repairs", "Left untouched", "Painted a new color"],
                es: ["Demolido y reconstruido", "Cubierto con andamios para reparaciones", "Dejado intacto", "Pintado de un nuevo color"],
                de: ["Abgerissen und wieder aufgebaut", "Mit Gerüsten für Reparaturen bedeckt", "Unberührt gelassen", "In neuer Farbe gestrichen"],
                nl: ["Gesloopt en herbouwd", "Bedekt met steigers voor reparaties", "Onveranderd gelaten", "Geverfd in een nieuwe kleur"]
            },
            correct: 1,
            explanation: {
                en: "From 2017 to 2021, Big Ben underwent major conservation work. The entire tower was covered in scaffolding while repairs were made to preserve it for future generations.",
                es: "De 2017 a 2021, Big Ben se sometió a importantes trabajos de conservación. Toda la torre fue cubierta con andamios mientras se realizaban reparaciones para preservarla para las generaciones futuras.",
                de: "Von 2017 bis 2021 wurde Big Ben einer umfassenden Konservierung unterzogen. Der gesamte Turm war mit Gerüsten bedeckt, während Reparaturen durchgeführt wurden, um ihn für zukünftige Generationen zu erhalten.",
                nl: "Van 2017 tot 2021 onderging Big Ben grote conserveringswerkzaamheden. De hele toren was bedekt met steigers terwijl reparaties werden uitgevoerd om het te bewaren voor toekomstige generaties."
            }
        },
        {
            question: {
                en: "What makes Big Ben a tourist attraction?",
                es: "¿Qué hace de Big Ben una atracción turística?",
                de: "Was macht Big Ben zu einer Touristenattraktion?",
                nl: "Wat maakt Big Ben een toeristische attractie?"
            },
            options: {
                en: ["It's the tallest building in London", "It's an iconic landmark with historical importance", "It's the oldest building in Britain", "It has a restaurant at the top"],
                es: ["Es el edificio más alto de Londres", "Es un monumento icónico con importancia histórica", "Es el edificio más antiguo de Gran Bretaña", "Tiene un restaurante en la cima"],
                de: ["Es ist das höchste Gebäude in London", "Es ist ein ikonisches Wahrzeichen mit historischer Bedeutung", "Es ist das älteste Gebäude in Großbritannien", "Es hat ein Restaurant oben"],
                nl: ["Het is het hoogste gebouw in Londen", "Het is een iconisch landmark met historisch belang", "Het is het oudste gebouw in Groot-Brittannië", "Het heeft een restaurant bovenop"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is one of London's most photographed landmarks and a symbol of British culture. Its Victorian architecture and famous chimes attract millions of visitors to admire it from the outside each year.",
                es: "Big Ben es uno de los monumentos más fotografiados de Londres y un símbolo de la cultura británica. Su arquitectura victoriana y sus famosas campanadas atraen a millones de visitantes para admirarlo desde el exterior cada año.",
                de: "Big Ben ist eines der am meisten fotografierten Wahrzeichen Londons und ein Symbol britischer Kultur. Seine viktorianische Architektur und berühmten Glockenschläge ziehen jedes Jahr Millionen von Besuchern an, um es von außen zu bewundern.",
                nl: "Big Ben is een van Londen's meest gefotografeerde bezienswaardigheden en een symbool van de Britse cultuur. Zijn Victoriaanse architectuur en beroemde klokslagen trekken elk jaar miljoenen bezoekers aan om het van buitenaf te bewonderen."
            }
        },
        {
            question: {
                en: "What is the official name of Big Ben's tower?",
                es: "¿Cuál es el nombre oficial de la torre de Big Ben?",
                de: "Wie lautet der offizielle Name von Big Bens Turm?",
                nl: "Wat is de officiële naam van Big Ben's toren?"
            },
            options: {
                en: ["Big Ben Tower", "Elizabeth Tower", "Victoria Tower", "Westminster Tower"],
                es: ["Torre Big Ben", "Torre Elizabeth", "Torre Victoria", "Torre Westminster"],
                de: ["Big Ben Turm", "Elizabeth Tower", "Victoria Tower", "Westminster Tower"],
                nl: ["Big Ben Toren", "Elizabeth Tower", "Victoria Tower", "Westminster Tower"]
            },
            correct: 1,
            explanation: {
                en: "The tower's official name is the Elizabeth Tower, renamed in 2012 to honor Queen Elizabeth II's Diamond Jubilee. Most people still call it Big Ben, though that name properly refers only to the great bell inside.",
                es: "El nombre oficial de la torre es Elizabeth Tower, renombrada en 2012 para honrar el Jubileo de Diamante de la Reina Isabel II. La mayoría de la gente todavía lo llama Big Ben, aunque ese nombre se refiere propiamente solo a la gran campana dentro.",
                de: "Der offizielle Name des Turms ist Elizabeth Tower, umbenannt 2012 zu Ehren des diamantenen Jubiläums von Königin Elizabeth II. Die meisten Leute nennen ihn immer noch Big Ben, obwohl dieser Name eigentlich nur auf die große Glocke im Inneren verweist.",
                nl: "De officiële naam van de toren is Elizabeth Tower, hernoemd in 2012 ter ere van het Diamanten Jubileum van koningin Elizabeth II. De meeste mensen noemen het nog steeds Big Ben, hoewel die naam eigenlijk alleen verwijst naar de grote klok binnenin."
            }
        },
        {
            question: {
                en: "What country is Big Ben in?",
                es: "¿En qué país está Big Ben?",
                de: "In welchem Land befindet sich Big Ben?",
                nl: "In welk land staat Big Ben?"
            },
            options: {
                en: ["France", "United Kingdom", "Ireland", "Germany"],
                es: ["Francia", "Reino Unido", "Irlanda", "Alemania"],
                de: ["Frankreich", "Vereinigtes Königreich", "Irland", "Deutschland"],
                nl: ["Frankrijk", "Verenigd Koninkrijk", "Ierland", "Duitsland"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is located in the United Kingdom, specifically in London, England. It has been a British national symbol since it was completed in 1859.",
                es: "Big Ben se encuentra en el Reino Unido, específicamente en Londres, Inglaterra. Ha sido un símbolo nacional británico desde que se completó en 1859.",
                de: "Big Ben befindet sich im Vereinigten Königreich, genauer gesagt in London, England. Es ist seit seiner Fertigstellung im Jahr 1859 ein britisches Nationalsymbol.",
                nl: "Big Ben bevindt zich in het Verenigd Koninkrijk, specifiek in Londen, Engeland. Het is een Brits nationaal symbool sinds het in 1859 werd voltooid."
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
                en: ["It was the biggest bell in the world", "Possibly named after Sir Benjamin Hall", "Named by Queen Victoria", "It was made in a town called Ben"],
                es: ["Era la campana más grande del mundo", "Posiblemente nombrada por Sir Benjamin Hall", "Nombrada por la Reina Victoria", "Fue hecha en un pueblo llamado Ben"],
                de: ["Es war die größte Glocke der Welt", "Möglicherweise nach Sir Benjamin Hall benannt", "Von Königin Victoria benannt", "Es wurde in einer Stadt namens Ben hergestellt"],
                nl: ["Het was de grootste klok ter wereld", "Mogelijk vernoemd naar Sir Benjamin Hall", "Vernoemd door koningin Victoria", "Het werd gemaakt in een stad genaamd Ben"]
            },
            correct: 1,
            explanation: {
                en: "The bell is likely named after Sir Benjamin Hall, who was in charge of the building work when the bell was installed. Another theory suggests it was named after boxer Ben Caunt. The exact origin remains debated.",
                es: "La campana probablemente lleva el nombre de Sir Benjamin Hall, quien estaba a cargo de los trabajos de construcción cuando se instaló la campana. Otra teoría sugiere que fue nombrada por el boxeador Ben Caunt. El origen exacto sigue siendo debatido.",
                de: "Die Glocke ist wahrscheinlich nach Sir Benjamin Hall benannt, der für die Bauarbeiten verantwortlich war, als die Glocke installiert wurde. Eine andere Theorie besagt, sie sei nach dem Boxer Ben Caunt benannt. Die genaue Herkunft bleibt umstritten.",
                nl: "De klok is waarschijnlijk vernoemd naar Sir Benjamin Hall, die verantwoordelijk was voor de bouwwerkzaamheden toen de klok werd geïnstalleerd. Een andere theorie suggereert dat het vernoemd is naar bokser Ben Caunt. De exacte oorsprong blijft omstreden."
            }
        },
        {
            question: {
                en: "What can you see on the clock faces?",
                es: "¿Qué puedes ver en las esferas del reloj?",
                de: "Was kann man auf den Zifferblättern sehen?",
                nl: "Wat kun je zien op de wijzerplaten?"
            },
            options: {
                en: ["Digital numbers", "Roman numerals", "No numbers", "Pictures"],
                es: ["Números digitales", "Números romanos", "Sin números", "Imágenes"],
                de: ["Digitale Zahlen", "Römische Ziffern", "Keine Zahlen", "Bilder"],
                nl: ["Digitale nummers", "Romeinse cijfers", "Geen nummers", "Afbeeldingen"]
            },
            correct: 1,
            explanation: {
                en: "The clock faces display Roman numerals (I, II, III, IV, etc.) instead of modern numbers. This traditional style was common in Victorian times and adds to Big Ben's classic appearance.",
                es: "Las esferas del reloj muestran números romanos (I, II, III, IV, etc.) en lugar de números modernos. Este estilo tradicional era común en la época victoriana y añade a la apariencia clásica de Big Ben.",
                de: "Die Zifferblätter zeigen römische Ziffern (I, II, III, IV usw.) anstelle moderner Zahlen. Dieser traditionelle Stil war in viktorianischen Zeiten üblich und trägt zu Big Bens klassischem Aussehen bei.",
                nl: "De wijzerplaten tonen Romeinse cijfers (I, II, III, IV, enz.) in plaats van moderne cijfers. Deze traditionele stijl was gebruikelijk in Victoriaanse tijden en draagt bij aan Big Ben's klassieke uiterlijk."
            }
        },
        {
            question: {
                en: "Does Big Ben tell the time or just chime?",
                es: "¿Big Ben da la hora o solo suena?",
                de: "Zeigt Big Ben die Zeit oder läutet es nur?",
                nl: "Geeft Big Ben de tijd aan of luidt het alleen?"
            },
            options: {
                en: ["Only chimes, no clock face", "Both tells time and chimes", "Only tells time, never chimes", "Changes between modes"],
                es: ["Solo suena, sin esfera de reloj", "Tanto da la hora como suena", "Solo da la hora, nunca suena", "Cambia entre modos"],
                de: ["Nur läuten, kein Zifferblatt", "Sowohl Zeitanzeige als auch läuten", "Nur Zeitanzeige, läutet nie", "Wechselt zwischen Modi"],
                nl: ["Alleen luiden, geen wijzerplaat", "Zowel tijd aangeven als luiden", "Alleen tijd aangeven, luidt nooit", "Wisselt tussen modi"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben both shows the time on four large clock faces and chimes to mark the hours. The clock faces can be seen from far away, and the bells can be heard across much of London.",
                es: "Big Ben tanto muestra la hora en cuatro grandes esferas de reloj como suena para marcar las horas. Las esferas del reloj se pueden ver desde lejos, y las campanas se pueden escuchar en gran parte de Londres.",
                de: "Big Ben zeigt sowohl die Zeit auf vier großen Zifferblättern als auch läutet, um die Stunden zu markieren. Die Zifferblätter können von weit her gesehen werden, und die Glocken können in weiten Teilen Londons gehört werden.",
                nl: "Big Ben toont zowel de tijd op vier grote wijzerplaten als luidt om de uren aan te geven. De wijzerplaten kunnen van ver worden gezien, en de klokken kunnen in een groot deel van Londen worden gehoord."
            }
        },
        {
            question: {
                en: "What is special about Big Ben at night?",
                es: "¿Qué tiene de especial Big Ben por la noche?",
                de: "Was ist nachts an Big Ben besonders?",
                nl: "Wat is er speciaal aan Big Ben 's nachts?"
            },
            options: {
                en: ["It turns off completely", "The clock faces are illuminated", "It chimes louder", "It changes color"],
                es: ["Se apaga completamente", "Las esferas del reloj están iluminadas", "Suena más fuerte", "Cambia de color"],
                de: ["Es schaltet vollständig ab", "Die Zifferblätter sind beleuchtet", "Es läutet lauter", "Es ändert die Farbe"],
                nl: ["Het gaat volledig uit", "De wijzerplaten zijn verlicht", "Het luidt harder", "Het verandert van kleur"]
            },
            correct: 1,
            explanation: {
                en: "At night, the four clock faces are illuminated from behind, making them glow and allowing people to see the time even in darkness. This makes Big Ben a beautiful landmark both day and night.",
                es: "Por la noche, las cuatro esferas del reloj están iluminadas desde atrás, haciéndolas brillar y permitiendo que la gente vea la hora incluso en la oscuridad. Esto hace de Big Ben un hermoso monumento tanto de día como de noche.",
                de: "Nachts werden die vier Zifferblätter von hinten beleuchtet, sodass sie leuchten und die Menschen auch im Dunkeln die Zeit ablesen können. Dies macht Big Ben sowohl tagsüber als auch nachts zu einem wunderschönen Wahrzeichen.",
                nl: "'s Nachts worden de vier wijzerplaten van achteren verlicht, waardoor ze gloeien en mensen zelfs in het donker de tijd kunnen zien. Dit maakt Big Ben zowel overdag als 's nachts een prachtig landmark."
            }
        },
        {
            question: {
                en: "How old is Big Ben approximately?",
                es: "¿Aproximadamente qué edad tiene Big Ben?",
                de: "Wie alt ist Big Ben ungefähr?",
                nl: "Hoe oud is Big Ben ongeveer?"
            },
            options: {
                en: ["About 50 years old", "About 100 years old", "About 165 years old", "About 300 years old"],
                es: ["Unos 50 años", "Unos 100 años", "Unos 165 años", "Unos 300 años"],
                de: ["Etwa 50 Jahre alt", "Etwa 100 Jahre alt", "Etwa 165 Jahre alt", "Etwa 300 Jahre alt"],
                nl: ["Ongeveer 50 jaar oud", "Ongeveer 100 jaar oud", "Ongeveer 165 jaar oud", "Ongeveer 300 jaar oud"]
            },
            correct: 2,
            explanation: {
                en: "Big Ben was completed in 1859, making it approximately 165 years old. It has been keeping time for London for over a century and a half, becoming one of the world's most recognizable landmarks.",
                es: "Big Ben se completó en 1859, lo que lo hace tener aproximadamente 165 años. Ha estado dando la hora para Londres durante más de un siglo y medio, convirtiéndose en uno de los monumentos más reconocibles del mundo.",
                de: "Big Ben wurde 1859 fertiggestellt, was ihn etwa 165 Jahre alt macht. Es hält seit über anderthalb Jahrhunderten die Zeit für London und ist zu einem der weltweit bekanntesten Wahrzeichen geworden.",
                nl: "Big Ben werd voltooid in 1859, waardoor het ongeveer 165 jaar oud is. Het houdt al meer dan anderhalve eeuw de tijd bij voor Londen en is een van 's werelds meest herkenbare bezienswaardigheden geworden."
            }
        },
        {
            question: {
                en: "Can you visit Big Ben?",
                es: "¿Se puede visitar Big Ben?",
                de: "Kann man Big Ben besuchen?",
                nl: "Kun je Big Ben bezoeken?"
            },
            options: {
                en: ["Yes, anyone can visit anytime", "Only UK residents", "Tours available but limited", "No public access"],
                es: ["Sí, cualquiera puede visitar en cualquier momento", "Solo residentes del Reino Unido", "Tours disponibles pero limitados", "Sin acceso público"],
                de: ["Ja, jeder kann jederzeit besuchen", "Nur UK-Einwohner", "Führungen verfügbar aber begrenzt", "Kein öffentlicher Zugang"],
                nl: ["Ja, iedereen kan altijd bezoeken", "Alleen UK-inwoners", "Rondleidingen beschikbaar maar beperkt", "Geen openbare toegang"]
            },
            correct: 2,
            explanation: {
                en: "Tours of Big Ben are available but limited to UK residents and require booking well in advance. The tower has 334 steps with no elevator, making it a challenging climb. International visitors can view it from outside.",
                es: "Los tours de Big Ben están disponibles pero limitados a residentes del Reino Unido y requieren reservar con mucha anticipación. La torre tiene 334 escalones sin ascensor, lo que lo convierte en una subida desafiante. Los visitantes internacionales pueden verlo desde afuera.",
                de: "Führungen durch Big Ben sind verfügbar, aber auf UK-Einwohner beschränkt und erfordern eine frühzeitige Buchung. Der Turm hat 334 Stufen ohne Aufzug, was ihn zu einem anspruchsvollen Aufstieg macht. Internationale Besucher können ihn von außen betrachten.",
                nl: "Rondleidingen door Big Ben zijn beschikbaar maar beperkt tot UK-inwoners en vereisen ruim van tevoren boeken. De toren heeft 334 trappen zonder lift, wat het een uitdagende klim maakt. Internationale bezoekers kunnen het van buitenaf bekijken."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else {
        window.bigBenLevel1Questions = questions;
    }
})();
