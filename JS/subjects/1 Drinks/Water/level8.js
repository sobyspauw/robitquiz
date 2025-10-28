// Quiz - Level 8: Drinken - Water (Water en ecologie)
(function() {
  const level8 = {
    name: {
      en: "Water and Ecology",
      es: "Agua y Ecología",
      de: "Wasser und Ökologie",
      nl: "Water en Ecologie"
    },
    questions: [
      {
        question: {
          en: "What percentage of Earth's water is freshwater?",
          es: "¿Qué porcentaje del agua de la Tierra es agua dulce?",
          de: "Wie viel Prozent des Wassers der Erde ist Süßwasser?",
          nl: "Welk percentage van het water op aarde is zoetwater?"
        },
        options: [
          { en: "10%", es: "10%", de: "10%", nl: "10%" },
          { en: "5%", es: "5%", de: "5%", nl: "5%" },
          { en: "2.5%", es: "2,5%", de: "2,5%", nl: "2,5%" },
          { en: "15%", es: "15%", de: "15%", nl: "15%" }
        ],
        correct: 2,
        explanation: {
          en: "Only 2.5% of Earth's water is freshwater, with most of it locked in ice caps and glaciers.",
          es: "Solo el 2,5% del agua de la Tierra es agua dulce, y la mayor parte está congelada en casquetes polares y glaciares.",
          de: "Nur 2,5% des Wassers der Erde ist Süßwasser, wobei das meiste in Eiskappen und Gletschern gebunden ist.",
          nl: "Slechts 2,5% van het water op aarde is zoetwater, waarbij het meeste vastzit in ijskappen en gletsjers."
        }
      },
      {
        question: {
          en: "Which ecosystem is most threatened by water pollution?",
          es: "¿Qué ecosistema está más amenazado por la contaminación del agua?",
          de: "Welches Ökosystem ist am meisten durch Wasserverschmutzung bedroht?",
          nl: "Welk ecosysteem wordt het meest bedreigd door watervervuiling?"
        },
        options: [
          { en: "Coral reefs", es: "Arrecifes de coral", de: "Korallenriffe", nl: "Koraalriffen" },
          { en: "Grasslands", es: "Praderas", de: "Grasland", nl: "Graslanden" },
          { en: "Deserts", es: "Desiertos", de: "Wüsten", nl: "Woestijnen" },
          { en: "Forests", es: "Bosques", de: "Wälder", nl: "Bossen" }
        ],
        correct: 0,
        explanation: {
          en: "Coral reefs are extremely sensitive to water temperature, pH, and pollution changes.",
          es: "Los arrecifes de coral son extremadamente sensibles a los cambios de temperatura, pH y contaminación del agua.",
          de: "Korallenriffe sind extrem empfindlich gegenüber Veränderungen der Wassertemperatur, des pH-Werts und der Verschmutzung.",
          nl: "Koraalriffen zijn extreem gevoelig voor veranderingen in watertemperatuur, pH en vervuiling."
        }
      },
      {
        question: {
          en: "What is eutrophication?",
          es: "¿Qué es la eutrofización?",
          de: "Was ist Eutrophierung?",
          nl: "Wat is eutrofiëring?"
        },
        options: [
          { en: "Water freezing process", es: "Proceso de congelación del agua", de: "Gefriervorgang von Wasser", nl: "Watervries proces" },
          { en: "Nutrient enrichment causing algae blooms", es: "Enriquecimiento de nutrientes que causa proliferación de algas", de: "Nährstoffanreicherung, die Algenblüten verursacht", nl: "Voedingsstofverrijking die algengroei veroorzaakt" },
          { en: "Water purification method", es: "Método de purificación del agua", de: "Wasserreinigungsverfahren", nl: "Waterzuiveringsmethode" },
          { en: "Ocean current formation", es: "Formación de corrientes oceánicas", de: "Bildung von Meeresströmungen", nl: "Oceaanstromingvorming" }
        ],
        correct: 1,
        explanation: {
          en: "Eutrophication occurs when excess nutrients (nitrogen, phosphorus) lead to explosive algae growth, depleting oxygen.",
          es: "La eutrofización ocurre cuando el exceso de nutrientes (nitrógeno, fósforo) lleva al crecimiento explosivo de algas, agotando el oxígeno.",
          de: "Eutrophierung tritt auf, wenn überschüssige Nährstoffe (Stickstoff, Phosphor) zu explosivem Algenwachstum führen und Sauerstoff verbrauchen.",
          nl: "Eutrofiëring treedt op wanneer overtollige voedingsstoffen (stikstof, fosfor) leiden tot explosieve algengroei, waardoor zuurstof wordt weggenomen."
        }
      },
      {
        question: {
          en: "Which marine zone receives no sunlight?",
          es: "¿Qué zona marina no recibe luz solar?",
          de: "Welche Meereszone erhält kein Sonnenlicht?",
          nl: "Welke zeezone krijgt geen zonlicht?"
        },
        options: [
          { en: "Epipelagic zone", es: "Zona epipelágica", de: "Epipelagische Zone", nl: "Epipelagische zone" },
          { en: "Mesopelagic zone", es: "Zona mesopelágica", de: "Mesopelagische Zone", nl: "Mesopelagische zone" },
          { en: "Bathypelagic zone", es: "Zona batipelágica", de: "Bathypelagische Zone", nl: "Bathypelagische zone" },
          { en: "Abyssopelagic zone", es: "Zona abisopelágica", de: "Abyssopelagische Zone", nl: "Abyssopelagische zone" }
        ],
        correct: 3,
        explanation: {
          en: "The abyssopelagic zone (4000-6000m deep) receives no sunlight and has near-freezing temperatures.",
          es: "La zona abisopelágica (4000-6000m de profundidad) no recibe luz solar y tiene temperaturas cercanas al punto de congelación.",
          de: "Die abyssopelagische Zone (4000-6000m tief) erhält kein Sonnenlicht und hat Temperaturen nahe dem Gefrierpunkt.",
          nl: "De abyssopelagische zone (4000-6000m diep) krijgt geen zonlicht en heeft temperaturen nabij het vriespunt."
        }
      },
      {
        question: {
          en: "What causes ocean acidification?",
          es: "¿Qué causa la acidificación oceánica?",
          de: "Was verursacht die Ozeanversauerung?",
          nl: "Wat veroorzaakt oceaanverzuring?"
        },
        options: [
          { en: "CO2 absorption from atmosphere", es: "Absorción de CO2 de la atmósfera", de: "CO2-Aufnahme aus der Atmosphäre", nl: "CO2-opname uit de atmosfeer" },
          { en: "Industrial waste dumping", es: "Vertido de desechos industriales", de: "Industrieabfallentsorgung", nl: "Industrieel afval dumpen" },
          { en: "Underwater volcanic activity", es: "Actividad volcánica submarina", de: "Unterwasser-Vulkanaktivität", nl: "Onderwatervolkanische activiteit" },
          { en: "Ocean temperature rise", es: "Aumento de temperatura oceánica", de: "Meerestemperaturanstieg", nl: "Oceaantemperatuurstijging" }
        ],
        correct: 0,
        explanation: {
          en: "Oceans absorb about 30% of atmospheric CO2, forming carbonic acid and lowering pH from 8.1 to 8.0.",
          es: "Los océanos absorben alrededor del 30% del CO2 atmosférico, formando ácido carbónico y bajando el pH de 8,1 a 8,0.",
          de: "Die Ozeane absorbieren etwa 30% des atmosphärischen CO2, bilden Kohlensäure und senken den pH-Wert von 8,1 auf 8,0.",
          nl: "Oceanen absorberen ongeveer 30% van het atmosferische CO2, vormen koolzuur en verlagen de pH van 8,1 naar 8,0."
        }
      },
      {
        question: {
          en: "Which aquatic plant produces the most oxygen?",
          es: "¿Qué planta acuática produce más oxígeno?",
          de: "Welche Wasserpflanze produziert am meisten Sauerstoff?",
          nl: "Welke waterplant produceert de meeste zuurstof?"
        },
        options: [
          { en: "Water lilies", es: "Nenúfares", de: "Seerosen", nl: "Waterlelies" },
          { en: "Phytoplankton", es: "Fitoplancton", de: "Phytoplankton", nl: "Fytoplankton" },
          { en: "Kelp forests", es: "Bosques de kelp", de: "Kelpwälder", nl: "Kelpbossen" },
          { en: "Seagrass", es: "Pastos marinos", de: "Seegras", nl: "Zeegras" }
        ],
        correct: 1,
        explanation: {
          en: "Phytoplankton produces about 70% of Earth's oxygen through photosynthesis in marine environments.",
          es: "El fitoplancton produce alrededor del 70% del oxígeno de la Tierra a través de la fotosíntesis en ambientes marinos.",
          de: "Phytoplankton produziert etwa 70% des Sauerstoffs der Erde durch Photosynthese in Meeresumgebungen.",
          nl: "Fytoplankton produceert ongeveer 70% van de zuurstof op aarde door fotosynthese in mariene omgevingen."
        }
      },
      {
        question: {
          en: "What is the 'dead zone' in aquatic ecosystems?",
          es: "¿Qué es la 'zona muerta' en los ecosistemas acuáticos?",
          de: "Was ist die 'Todeszone' in aquatischen Ökosystemen?",
          nl: "Wat is de 'dode zone' in aquatische ecosystemen?"
        },
        options: [
          { en: "Area with no plant life", es: "Área sin vida vegetal", de: "Bereich ohne Pflanzenleben", nl: "Gebied zonder plantenleven" },
          { en: "Oxygen-depleted water area", es: "Área de agua con oxígeno agotado", de: "Sauerstoffarmer Wasserbereich", nl: "Zuurstofarm watergebied" },
          { en: "Frozen water section", es: "Sección de agua congelada", de: "Gefrorener Wasserabschnitt", nl: "Bevroren watersectie" },
          { en: "Extremely salty water zone", es: "Zona de agua extremadamente salada", de: "Extrem salzige Wasserzone", nl: "Extreem zoute waterzone" }
        ],
        correct: 1,
        explanation: {
          en: "Dead zones are hypoxic areas (< 2 mg/L dissolved oxygen) where most marine life cannot survive.",
          es: "Las zonas muertas son áreas hipóxicas (< 2 mg/L de oxígeno disuelto) donde la mayoría de la vida marina no puede sobrevivir.",
          de: "Todeszonen sind hypoxische Bereiche (< 2 mg/L gelöster Sauerstoff), in denen die meisten Meereslebewesen nicht überleben können.",
          nl: "Dode zones zijn hypoxische gebieden (< 2 mg/L opgeloste zuurstof) waar de meeste zeeleven niet kan overleven."
        }
      },
      {
        question: {
          en: "Which factor most affects water density in oceans?",
          es: "¿Qué factor afecta más la densidad del agua en los océanos?",
          de: "Welcher Faktor beeinflusst die Wasserdichte in den Ozeanen am meisten?",
          nl: "Welke factor beïnvloedt de waterdichtheid in oceanen het meest?"
        },
        options: [
          { en: "Temperature and salinity", es: "Temperatura y salinidad", de: "Temperatur und Salzgehalt", nl: "Temperatuur en zoutgehalte" },
          { en: "Pressure only", es: "Solo presión", de: "Nur Druck", nl: "Alleen druk" },
          { en: "Ocean currents", es: "Corrientes oceánicas", de: "Meeresströmungen", nl: "Oceaanstromingen" },
          { en: "Marine life activity", es: "Actividad de vida marina", de: "Meereslebewesen-Aktivität", nl: "Zeeleven activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Water density increases with lower temperature and higher salinity, driving thermohaline circulation.",
          es: "La densidad del agua aumenta con menor temperatura y mayor salinidad, impulsando la circulación termohalina.",
          de: "Die Wasserdichte steigt mit niedrigerer Temperatur und höherem Salzgehalt und treibt die thermohaline Zirkulation an.",
          nl: "Waterdichtheid neemt toe bij lagere temperatuur en hoger zoutgehalte, wat thermohaline circulatie aandrijft."
        }
      },
      {
        question: {
          en: "What percentage of marine species live in coral reefs?",
          es: "¿Qué porcentaje de especies marinas vive en arrecifes de coral?",
          de: "Welcher Prozentsatz der Meeresarten lebt in Korallenriffen?",
          nl: "Welk percentage van zeespesies leeft in koraalriffen?"
        },
        options: [
          { en: "10%", es: "10%", de: "10%", nl: "10%" },
          { en: "25%", es: "25%", de: "25%", nl: "25%" },
          { en: "40%", es: "40%", de: "40%", nl: "40%" },
          { en: "60%", es: "60%", de: "60%", nl: "60%" }
        ],
        correct: 1,
        explanation: {
          en: "About 25% of all marine species depend on coral reefs, despite reefs covering less than 1% of ocean area.",
          es: "Alrededor del 25% de todas las especies marinas dependen de los arrecifes de coral, a pesar de que cubren menos del 1% del área oceánica.",
          de: "Etwa 25% aller Meeresarten sind auf Korallenriffe angewiesen, obwohl Riffe weniger als 1% der Ozeanfläche bedecken.",
          nl: "Ongeveer 25% van alle zeespesies is afhankelijk van koraalriffen, ondanks dat riffen minder dan 1% van het oceaangebied bedekken."
        }
      },
      {
        question: {
          en: "Which process removes excess nitrogen from aquatic systems?",
          es: "¿Qué proceso elimina el exceso de nitrógeno de los sistemas acuáticos?",
          de: "Welcher Prozess entfernt überschüssigen Stickstoff aus aquatischen Systemen?",
          nl: "Welk proces verwijdert overtollige stikstof uit aquatische systemen?"
        },
        options: [
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
          { en: "Denitrification", es: "Desnitrificación", de: "Denitrifikation", nl: "Denitrificatie" },
          { en: "Evaporation", es: "Evaporación", de: "Verdunstung", nl: "Verdamping" },
          { en: "Sedimentation", es: "Sedimentación", de: "Sedimentation", nl: "Sedimentatie" }
        ],
        correct: 1,
        explanation: {
          en: "Denitrification by anaerobic bacteria converts nitrates back to nitrogen gas, completing the nitrogen cycle.",
          es: "La desnitrificación por bacterias anaeróbicas convierte los nitratos de vuelta a gas nitrógeno, completando el ciclo del nitrógeno.",
          de: "Denitrifikation durch anaerobe Bakterien wandelt Nitrate zurück in Stickstoffgas um und vervollständigt den Stickstoffkreislauf.",
          nl: "Denitrificatie door anaerobe bacteriën zet nitraten terug om in stikstofgas, waardoor de stikstofcyclus wordt voltooid."
        }
      },
      {
        question: {
          en: "What is the primary role of wetlands in water ecology?",
          es: "¿Cuál es el papel principal de los humedales en la ecología del agua?",
          de: "Was ist die Hauptrolle von Feuchtgebieten in der Wasserökologie?",
          nl: "Wat is de primaire rol van wetlands in waterecologie?"
        },
        options: [
          { en: "Natural water filtration and flood control", es: "Filtración natural del agua y control de inundaciones", de: "Natürliche Wasserfilterung und Hochwasserschutz", nl: "Natuurlijke waterfiltratie en overstromingscontrole" },
          { en: "Increasing water temperature", es: "Aumentar la temperatura del agua", de: "Erhöhung der Wassertemperatur", nl: "Watertemperatuur verhogen" },
          { en: "Producing drinking water", es: "Producir agua potable", de: "Trinkwasser produzieren", nl: "Drinkwater produceren" },
          { en: "Creating ocean currents", es: "Crear corrientes oceánicas", de: "Meeresströmungen erzeugen", nl: "Oceaanstromingen creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Wetlands act as natural filters by trapping sediments, absorbing pollutants, and storing excess water during floods. They remove up to 90% of nutrients and 80% of sediments from water while providing critical habitat for biodiversity.",
          es: "Los humedales actúan como filtros naturales al atrapar sedimentos, absorber contaminantes y almacenar agua excesiva durante inundaciones. Eliminan hasta el 90% de nutrientes y el 80% de sedimentos del agua mientras proporcionan hábitat crítico para la biodiversidad.",
          de: "Feuchtgebiete wirken als natürliche Filter, indem sie Sedimente auffangen, Schadstoffe absorbieren und überschüssiges Wasser bei Überschwemmungen speichern. Sie entfernen bis zu 90% der Nährstoffe und 80% der Sedimente aus Wasser und bieten kritischen Lebensraum für Biodiversität.",
          nl: "Wetlands fungeren als natuurlijke filters door sedimenten op te vangen, vervuilende stoffen te absorberen en overtollig water tijdens overstromingen op te slaan. Ze verwijderen tot 90% van de voedingsstoffen en 80% van sedimenten uit water terwijl ze kritisch habitat bieden voor biodiversiteit."
        }
      },
      {
        question: {
          en: "What is bioaccumulation in aquatic ecosystems?",
          es: "¿Qué es la bioacumulación en ecosistemas acuáticos?",
          de: "Was ist Bioakkumulation in aquatischen Ökosystemen?",
          nl: "Wat is bioaccumulatie in aquatische ecosystemen?"
        },
        options: [
          { en: "Build-up of pollutants in organisms over time", es: "Acumulación de contaminantes en organismos con el tiempo", de: "Anreicherung von Schadstoffen in Organismen über die Zeit", nl: "Ophoping van vervuilende stoffen in organismen over tijd" },
          { en: "Growth of beneficial bacteria", es: "Crecimiento de bacterias beneficiosas", de: "Wachstum nützlicher Bakterien", nl: "Groei van gunstige bacteriën" },
          { en: "Natural water purification", es: "Purificación natural del agua", de: "Natürliche Wasserreinigung", nl: "Natuurlijke waterzuivering" },
          { en: "Oxygen production by plants", es: "Producción de oxígeno por plantas", de: "Sauerstoffproduktion durch Pflanzen", nl: "Zuurstofproductie door planten" }
        ],
        correct: 0,
        explanation: {
          en: "Bioaccumulation is the gradual build-up of toxic substances (like mercury, PCBs, pesticides) in organisms faster than they can eliminate them. This concentration increases up the food chain (biomagnification), with top predators accumulating the highest levels.",
          es: "La bioacumulación es la acumulación gradual de sustancias tóxicas (como mercurio, PCB, pesticidas) en organismos más rápido de lo que pueden eliminarlas. Esta concentración aumenta en la cadena alimentaria (biomagnificación), con los depredadores superiores acumulando los niveles más altos.",
          de: "Bioakkumulation ist die allmähliche Anreicherung toxischer Substanzen (wie Quecksilber, PCBs, Pestizide) in Organismen schneller als sie diese ausscheiden können. Diese Konzentration steigt in der Nahrungskette (Biomagnifikation), wobei Spitzenprädatoren die höchsten Werte akkumulieren.",
          nl: "Bioaccumulatie is de geleidelijke ophoping van giftige stoffen (zoals kwik, PCB's, pesticiden) in organismen sneller dan ze deze kunnen elimineren. Deze concentratie neemt toe in de voedselketen (biomagnificatie), waarbij topproofdieren de hoogste niveaus accumuleren."
        }
      },
      {
        question: {
          en: "What is the 'Great Pacific Garbage Patch'?",
          es: "¿Qué es el 'Gran Parche de Basura del Pacífico'?",
          de: "Was ist der 'Great Pacific Garbage Patch'?",
          nl: "Wat is de 'Great Pacific Garbage Patch'?"
        },
        options: [
          { en: "A natural seaweed accumulation", es: "Una acumulación natural de algas", de: "Eine natürliche Algenhäufung", nl: "Een natuurlijke zeewieraccumulatie" },
          { en: "A massive concentration of plastic debris in the ocean", es: "Una concentración masiva de desechos plásticos en el océano", de: "Eine massive Konzentration von Plastikabfällen im Ozean", nl: "Een enorme concentratie van plastic afval in de oceaan" },
          { en: "A coral reef formation", es: "Una formación de arrecifes de coral", de: "Eine Korallenriffbildung", nl: "Een koraalrifformatie" },
          { en: "An underwater volcanic region", es: "Una región volcánica submarina", de: "Eine unterwassere Vulkanregion", nl: "Een onderwater vulkanisch gebied" }
        ],
        correct: 1,
        explanation: {
          en: "The Great Pacific Garbage Patch is a vast area (1.6 million km²) in the North Pacific where ocean currents have concentrated floating plastic debris. It contains an estimated 1.8 trillion pieces of plastic weighing 80,000 metric tons, posing severe threats to marine life.",
          es: "El Gran Parche de Basura del Pacífico es un área vasta (1.6 millones de km²) en el Pacífico Norte donde corrientes oceánicas han concentrado desechos plásticos flotantes. Contiene aproximadamente 1.8 billones de piezas de plástico que pesan 80,000 toneladas métricas, representando amenazas severas para la vida marina.",
          de: "Der Great Pacific Garbage Patch ist ein riesiges Gebiet (1,6 Millionen km²) im Nordpazifik, wo Meeresströmungen schwimmende Plastikabfälle konzentriert haben. Er enthält schätzungsweise 1,8 Billionen Plastikteile mit einem Gewicht von 80.000 Tonnen, was ernsthafte Bedrohungen für das Meeresleben darstellt.",
          nl: "De Great Pacific Garbage Patch is een enorm gebied (1,6 miljoen km²) in de Noord-Stille Oceaan waar oceaanstromingen drijvend plastic afval hebben geconcentreerd. Het bevat naar schatting 1,8 biljoen stuks plastic met een gewicht van 80.000 ton, wat ernstige bedreigingen vormt voor zeeleven."
        }
      },
      {
        question: {
          en: "What are microplastics in water ecosystems?",
          es: "¿Qué son los microplásticos en ecosistemas acuáticos?",
          de: "Was sind Mikroplastik in Wasserökosystemen?",
          nl: "Wat zijn microplastics in waterecosystemen?"
        },
        options: [
          { en: "Tiny plastic particles less than 5mm in size", es: "Partículas de plástico diminutas de menos de 5mm de tamaño", de: "Winzige Plastikpartikel kleiner als 5mm", nl: "Kleine plastic deeltjes kleiner dan 5mm" },
          { en: "Biodegradable plastic products", es: "Productos plásticos biodegradables", de: "Biologisch abbaubare Plastikprodukte", nl: "Biologisch afbreekbare plastic producten" },
          { en: "Natural minerals in water", es: "Minerales naturales en agua", de: "Natürliche Mineralien im Wasser", nl: "Natuurlijke mineralen in water" },
          { en: "Water treatment chemicals", es: "Químicos de tratamiento de agua", de: "Wasserbehandlungschemikalien", nl: "Waterbehandelingschemicaliën" }
        ],
        correct: 0,
        explanation: {
          en: "Microplastics are plastic fragments smaller than 5mm that come from breakdown of larger plastic items or are manufactured (microbeads). They enter the food chain, have been found in 90% of sea salt samples, and can carry toxic chemicals and bacteria through water systems.",
          es: "Los microplásticos son fragmentos de plástico menores de 5mm que provienen de la descomposición de artículos plásticos más grandes o son fabricados (microesferas). Entran en la cadena alimentaria, se han encontrado en el 90% de muestras de sal marina, y pueden transportar químicos tóxicos y bacterias a través de sistemas de agua.",
          de: "Mikroplastik sind Plastikfragmente kleiner als 5mm, die aus dem Zerfall größerer Plastikgegenstände stammen oder hergestellt werden (Mikroperlen). Sie gelangen in die Nahrungskette, wurden in 90% der Meersalzproben gefunden und können giftige Chemikalien und Bakterien durch Wassersysteme transportieren.",
          nl: "Microplastics zijn plastic fragmenten kleiner dan 5mm die afkomstig zijn van de afbraak van grotere plastic voorwerpen of geproduceerd worden (microbeads). Ze komen in de voedselketen terecht, zijn in 90% van de zeezoutmonsters gevonden en kunnen giftige chemicaliën en bacteriën door watersystemen transporteren."
        }
      },
      {
        question: {
          en: "What is thermal pollution in water bodies?",
          es: "¿Qué es la contaminación térmica en cuerpos de agua?",
          de: "Was ist thermische Verschmutzung in Gewässern?",
          nl: "Wat is thermische vervuiling in waterlichamen?"
        },
        options: [
          { en: "Discharge of heated water causing temperature changes", es: "Descarga de agua caliente causando cambios de temperatura", de: "Einleitung von erhitztem Wasser, die Temperaturänderungen verursacht", nl: "Lozing van verwarmd water dat temperatuurveranderingen veroorzaakt" },
          { en: "Chemical contamination of water", es: "Contaminación química del agua", de: "Chemische Wasserverschmutzung", nl: "Chemische vervuiling van water" },
          { en: "Radioactive water pollution", es: "Contaminación radiactiva del agua", de: "Radioaktive Wasserverschmutzung", nl: "Radioactieve watervervuiling" },
          { en: "Plastic debris in oceans", es: "Desechos plásticos en océanos", de: "Plastikmüll in Ozeanen", nl: "Plastic afval in oceanen" }
        ],
        correct: 0,
        explanation: {
          en: "Thermal pollution occurs when power plants or industrial facilities discharge heated water (often 10-15°C warmer) into natural water bodies. This reduces dissolved oxygen (warm water holds less O₂), disrupts reproduction cycles, and can cause fish kills. Even a 2-3°C increase can significantly affect aquatic ecosystems.",
          es: "La contaminación térmica ocurre cuando plantas de energía o instalaciones industriales descargan agua caliente (a menudo 10-15°C más caliente) en cuerpos de agua naturales. Esto reduce el oxígeno disuelto (el agua caliente contiene menos O₂), interrumpe ciclos reproductivos y puede causar muerte de peces. Incluso un aumento de 2-3°C puede afectar significativamente los ecosistemas acuáticos.",
          de: "Thermische Verschmutzung tritt auf, wenn Kraftwerke oder Industrieanlagen erhitztes Wasser (oft 10-15°C wärmer) in natürliche Gewässer einleiten. Dies reduziert gelösten Sauerstoff (warmes Wasser hält weniger O₂), stört Fortpflanzungszyklen und kann Fischsterben verursachen. Selbst eine Erhöhung um 2-3°C kann aquatische Ökosysteme erheblich beeinträchtigen.",
          nl: "Thermische vervuiling treedt op wanneer energiecentrales of industriële faciliteiten verwarmd water (vaak 10-15°C warmer) lozen in natuurlijke waterlichamen. Dit vermindert opgeloste zuurstof (warm water bevat minder O₂), verstoort reproductiecycli en kan vissterfte veroorzaken. Zelfs een stijging van 2-3°C kan aquatische ecosystemen aanzienlijk beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the 'biological oxygen demand' (BOD) an indicator of?",
          es: "¿De qué es indicador la 'demanda biológica de oxígeno' (DBO)?",
          de: "Wofür ist der 'biologische Sauerstoffbedarf' (BSB) ein Indikator?",
          nl: "Waar is de 'biologische zuurstofvraag' (BZV) een indicator voor?"
        },
        options: [
          { en: "Amount of organic pollution in water", es: "Cantidad de contaminación orgánica en agua", de: "Menge organischer Verschmutzung im Wasser", nl: "Hoeveelheid organische vervuiling in water" },
          { en: "Water temperature levels", es: "Niveles de temperatura del agua", de: "Wassertemperaturniveaus", nl: "Watertemperatuurniveaus" },
          { en: "Mineral content in water", es: "Contenido mineral en agua", de: "Mineralgehalt im Wasser", nl: "Mineraalgehalte in water" },
          { en: "Water flow rate", es: "Caudal de agua", de: "Wasserdurchflussrate", nl: "Waterdoorstroomsnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "BOD measures the amount of dissolved oxygen that microorganisms need to decompose organic matter in water over 5 days at 20°C. High BOD (>5 mg/L) indicates high organic pollution from sewage, agricultural runoff, or industrial waste. Clean water has BOD <1 mg/L.",
          es: "DBO mide la cantidad de oxígeno disuelto que los microorganismos necesitan para descomponer materia orgánica en agua durante 5 días a 20°C. DBO alta (>5 mg/L) indica alta contaminación orgánica por aguas residuales, escorrentía agrícola o desechos industriales. Agua limpia tiene DBO <1 mg/L.",
          de: "BSB misst die Menge an gelöstem Sauerstoff, die Mikroorganismen benötigen, um organisches Material im Wasser über 5 Tage bei 20°C abzubauen. Hoher BSB (>5 mg/L) deutet auf hohe organische Verschmutzung durch Abwasser, landwirtschaftlichen Abfluss oder Industrieabfälle hin. Sauberes Wasser hat BSB <1 mg/L.",
          nl: "BZV meet de hoeveelheid opgeloste zuurstof die micro-organismen nodig hebben om organisch materiaal in water gedurende 5 dagen bij 20°C af te breken. Hoog BZV (>5 mg/L) duidt op hoge organische vervuiling door rioolwater, landbouwafvoer of industrieel afval. Schoon water heeft BZV <1 mg/L."
        }
      },
      {
        question: {
          en: "What role do mangrove forests play in coastal water ecosystems?",
          es: "¿Qué papel juegan los manglares en ecosistemas de agua costera?",
          de: "Welche Rolle spielen Mangrovenwälder in Küstenwasserökosystemen?",
          nl: "Welke rol spelen mangrovebossen in kustwatersystemen?"
        },
        options: [
          { en: "Coastal protection, carbon storage, and nursery habitat", es: "Protección costera, almacenamiento de carbono y hábitat de cría", de: "Küstenschutz, Kohlenstoffspeicherung und Aufzuchthabitat", nl: "Kustbescherming, koolstofopslag en kraamkamerhabitat" },
          { en: "Increasing ocean salinity", es: "Aumentar salinidad oceánica", de: "Erhöhung des Ozean-Salzgehalts", nl: "Oceaanzoutgehalte verhogen" },
          { en: "Producing drinking water", es: "Producir agua potable", de: "Trinkwasser produzieren", nl: "Drinkwater produceren" },
          { en: "Creating ocean currents", es: "Crear corrientes oceánicas", de: "Meeresströmungen erzeugen", nl: "Oceaanstromingen creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Mangrove forests protect coastlines from erosion and storm surges, store 3-5 times more carbon per hectare than tropical rainforests, filter pollutants from runoff, and provide critical nursery habitat for 80% of commercial fish species. They're among Earth's most valuable ecosystems but are disappearing at alarming rates.",
          es: "Los manglares protegen las costas de la erosión y marejadas, almacenan 3-5 veces más carbono por hectárea que las selvas tropicales, filtran contaminantes de la escorrentía y proporcionan hábitat de cría crítico para el 80% de especies de peces comerciales. Son uno de los ecosistemas más valiosos de la Tierra pero están desapareciendo a ritmos alarmantes.",
          de: "Mangrovenwälder schützen Küsten vor Erosion und Sturmfluten, speichern 3-5 mal mehr Kohlenstoff pro Hektar als tropische Regenwälder, filtern Schadstoffe aus Abflüssen und bieten kritischen Aufzuchtlebensraum für 80% der kommerziellen Fischarten. Sie gehören zu den wertvollsten Ökosystemen der Erde, verschwinden aber in alarmierendem Tempo.",
          nl: "Mangrovebossen beschermen kustlijnen tegen erosie en stormvloeden, slaan 3-5 keer meer koolstof per hectare op dan tropische regenwouden, filteren vervuilende stoffen uit afvoer en bieden kritisch kraamkamerhabitat voor 80% van commerciële vissoorten. Ze behoren tot de waardevolste ecosystemen op aarde maar verdwijnen in alarmerend tempo."
        }
      },
      {
        question: {
          en: "What is the 'nitrogen cycle' in aquatic ecosystems?",
          es: "¿Qué es el 'ciclo del nitrógeno' en ecosistemas acuáticos?",
          de: "Was ist der 'Stickstoffkreislauf' in aquatischen Ökosystemen?",
          nl: "Wat is de 'stikstofcyclus' in aquatische ecosystemen?"
        },
        options: [
          { en: "The circulation of nitrogen through water, organisms, and atmosphere", es: "La circulación del nitrógeno a través del agua, organismos y atmósfera", de: "Der Kreislauf von Stickstoff durch Wasser, Organismen und Atmosphäre", nl: "De circulatie van stikstof door water, organismen en atmosfeer" },
          { en: "The temperature changes in water", es: "Los cambios de temperatura en agua", de: "Die Temperaturänderungen im Wasser", nl: "De temperatuurveranderingen in water" },
          { en: "The movement of water currents", es: "El movimiento de corrientes de agua", de: "Die Bewegung von Wasserströmungen", nl: "De beweging van waterstromingen" },
          { en: "The formation of clouds", es: "La formación de nubes", de: "Die Bildung von Wolken", nl: "De vorming van wolken" }
        ],
        correct: 0,
        explanation: {
          en: "The nitrogen cycle involves: 1) Nitrogen fixation (converting N₂ to ammonia by bacteria), 2) Nitrification (ammonia→nitrites→nitrates by bacteria), 3) Assimilation (plants/algae use nitrates), 4) Ammonification (decomposition releases ammonia), and 5) Denitrification (bacteria convert nitrates back to N₂). This cycle is crucial for aquatic life but can be disrupted by excess agricultural runoff.",
          es: "El ciclo del nitrógeno incluye: 1) Fijación de nitrógeno (conversión de N₂ a amoníaco por bacterias), 2) Nitrificación (amoníaco→nitritos→nitratos por bacterias), 3) Asimilación (plantas/algas usan nitratos), 4) Amonificación (descomposición libera amoníaco), y 5) Desnitrificación (bacterias convierten nitratos a N₂). Este ciclo es crucial para la vida acuática pero puede verse interrumpido por escorrentía agrícola excesiva.",
          de: "Der Stickstoffkreislauf umfasst: 1) Stickstofffixierung (Umwandlung von N₂ zu Ammoniak durch Bakterien), 2) Nitrifikation (Ammoniak→Nitrite→Nitrate durch Bakterien), 3) Assimilation (Pflanzen/Algen nutzen Nitrate), 4) Ammonifikation (Zersetzung setzt Ammoniak frei), und 5) Denitrifikation (Bakterien wandeln Nitrate zurück zu N₂ um). Dieser Kreislauf ist entscheidend für aquatisches Leben, kann aber durch übermäßigen landwirtschaftlichen Abfluss gestört werden.",
          nl: "De stikstofcyclus omvat: 1) Stikstoffixatie (omzetting van N₂ naar ammoniak door bacteriën), 2) Nitrificatie (ammoniak→nitrieten→nitraten door bacteriën), 3) Assimilatie (planten/algen gebruiken nitraten), 4) Ammonificatie (afbraak geeft ammoniak vrij), en 5) Denitrificatie (bacteriën zetten nitraten terug om naar N₂). Deze cyclus is cruciaal voor aquatisch leven maar kan verstoord worden door overmatige landbouwafvoer."
        }
      },
      {
        question: {
          en: "What are invasive aquatic species?",
          es: "¿Qué son las especies acuáticas invasoras?",
          de: "Was sind invasive aquatische Arten?",
          nl: "Wat zijn invasieve aquatische soorten?"
        },
        options: [
          { en: "Non-native species that harm ecosystems, economy, or health", es: "Especies no nativas que dañan ecosistemas, economía o salud", de: "Nicht-einheimische Arten, die Ökosysteme, Wirtschaft oder Gesundheit schädigen", nl: "Niet-inheemse soorten die ecosystemen, economie of gezondheid schaden" },
          { en: "Native species that migrate seasonally", es: "Especies nativas que migran estacionalmente", de: "Einheimische Arten, die saisonal wandern", nl: "Inheemse soorten die seizoensmigratie vertonen" },
          { en: "Endangered aquatic animals", es: "Animales acuáticos en peligro", de: "Gefährdete Wassertiere", nl: "Bedreigde waterdieren" },
          { en: "Deep-sea organisms", es: "Organismos de aguas profundas", de: "Tiefseeorganismen", nl: "Diepzee-organismen" }
        ],
        correct: 0,
        explanation: {
          en: "Invasive aquatic species are non-native organisms introduced through ballast water, aquarium releases, or intentional stocking that outcompete native species, alter habitats, and cause economic damage. Examples include zebra mussels (clog water infrastructure, cost $1 billion/year in US), Asian carp, and lionfish. They're one of the greatest threats to freshwater biodiversity.",
          es: "Las especies acuáticas invasoras son organismos no nativos introducidos a través de agua de lastre, liberaciones de acuarios o siembra intencional que compiten con especies nativas, alteran hábitats y causan daño económico. Ejemplos incluyen mejillones cebra (obstruyen infraestructura de agua, cuestan $1 mil millones/año en EE.UU.), carpa asiática y pez león. Son una de las mayores amenazas para la biodiversidad de agua dulce.",
          de: "Invasive aquatische Arten sind nicht-einheimische Organismen, die durch Ballastwasser, Aquarienfreisetzungen oder absichtliches Aussetzen eingeführt werden und einheimische Arten verdrängen, Lebensräume verändern und wirtschaftlichen Schaden verursachen. Beispiele sind Zebramuscheln (verstopfen Wasserinfrastruktur, kosten $1 Milliarde/Jahr in den USA), asiatische Karpfen und Rotfeuerfische. Sie sind eine der größten Bedrohungen für die Süßwasser-Biodiversität.",
          nl: "Invasieve aquatische soorten zijn niet-inheemse organismen geïntroduceerd via ballastwater, aquariumlozingen of opzettelijke uitzetting die inheemse soorten verdringen, habitats veranderen en economische schade veroorzaken. Voorbeelden zijn zebramosselen (verstoppen waterinfrastructuur, kosten $1 miljard/jaar in VS), Aziatische karper en leeuwenvis. Ze vormen een van de grootste bedreigingen voor de biodiversiteit van zoetwater."
        }
      },
      {
        question: {
          en: "What is 'ocean stratification' and why does it matter?",
          es: "¿Qué es la 'estratificación oceánica' y por qué importa?",
          de: "Was ist 'Ozeanstratifizierung' und warum ist sie wichtig?",
          nl: "Wat is 'oceaanstratificatie' en waarom is het belangrijk?"
        },
        options: [
          { en: "Layering of water by density, affecting nutrient mixing", es: "Estratificación de agua por densidad, afectando mezcla de nutrientes", de: "Schichtung von Wasser nach Dichte, beeinflusst Nährstoffmischung", nl: "Gelaagdheid van water op dichtheid, beïnvloedt nutriëntenmening" },
          { en: "Separation of salt from water", es: "Separación de sal del agua", de: "Trennung von Salz vom Wasser", nl: "Scheiding van zout uit water" },
          { en: "Formation of ice layers", es: "Formación de capas de hielo", de: "Bildung von Eisschichten", nl: "Vorming van ijslagen" },
          { en: "Classification of marine species", es: "Clasificación de especies marinas", de: "Klassifizierung von Meeresarten", nl: "Classificatie van zeespesies" }
        ],
        correct: 0,
        explanation: {
          en: "Ocean stratification is the layering of water into distinct density zones based on temperature and salinity. Warmer, less dense water sits atop colder, denser water. Climate change increases stratification, reducing vertical mixing that brings nutrients from deep water to surface phytoplankton, potentially decreasing ocean productivity by 10-20% and affecting fish stocks and oxygen levels.",
          es: "La estratificación oceánica es la formación de capas de agua en zonas de densidad distintas basadas en temperatura y salinidad. El agua más cálida y menos densa se sitúa sobre el agua más fría y densa. El cambio climático aumenta la estratificación, reduciendo la mezcla vertical que trae nutrientes del agua profunda al fitoplancton superficial, potencialmente disminuyendo la productividad oceánica 10-20% y afectando stocks de peces y niveles de oxígeno.",
          de: "Ozeanstratifizierung ist die Schichtung von Wasser in unterschiedliche Dichtezonen basierend auf Temperatur und Salzgehalt. Wärmeres, weniger dichtes Wasser liegt über kälterem, dichterem Wasser. Der Klimawandel verstärkt die Stratifizierung, reduziert die vertikale Durchmischung, die Nährstoffe aus der Tiefe zum Oberflächenphytoplankton bringt, und verringert möglicherweise die Ozeanproduktivität um 10-20%, was Fischbestände und Sauerstoffwerte beeinflusst.",
          nl: "Oceaanstratificatie is de gelaagdheid van water in onderscheiden dichteidszones gebaseerd op temperatuur en zoutgehalte. Warmer, minder dicht water ligt bovenop kouder, dichter water. Klimaatverandering vergroot stratificatie, vermindert verticale menging die nutriënten van diep water naar oppervlakte-fytoplankton brengt, mogelijk verlagend de oceaanproductiviteit met 10-20% en beïnvloedend visvoorraden en zuurstofniveaus."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
