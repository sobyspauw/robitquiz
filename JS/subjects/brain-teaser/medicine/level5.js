// Medicine - Level 5: Pharmacology and Drug Interactions
(function() {
  const level5 = {
    name: {
      en: "Pharmacology and Drug Interactions",
      es: "Farmacología e Interacciones Medicamentosas",
      de: "Pharmakologie und Arzneimittelwechselwirkungen",
      nl: "Farmacologie en Geneesmiddelinteracties"
    },
    questions: [
      {
        question: {
          en: "Which class of drugs do aspirin and ibuprofen belong to?",
          es: "¿A qué clase de medicamentos pertenecen la aspirina y el ibuprofeno?",
          de: "Zu welcher Wirkstoffklasse gehören Aspirin und Ibuprofen?",
          nl: "Tot welke klasse geneesmiddelen behoren aspirine en ibuprofen?"
        },
        options: [
          {
            en: "NSAIDs (Non-Steroidal Anti-Inflammatory Drugs)",
            es: "AINEs (Antiinflamatorios No Esteroideos)",
            de: "NSARs (Nichtsteroidale Antirheumatika)",
            nl: "NSAIDs (Niet-Steroïdale Ontstekingsremmers)"
          },
          {
            en: "Beta-blockers",
            es: "Betabloqueantes",
            de: "Betablocker",
            nl: "Bètablokkers"
          },
          {
            en: "ACE inhibitors",
            es: "Inhibidores de la ECA",
            de: "ACE-Hemmer",
            nl: "ACE-remmers"
          },
          {
            en: "Corticosteroids",
            es: "Corticosteroides",
            de: "Kortikosteroide",
            nl: "Corticosteroïden"
          }
        ],
        correct: 0,
        explanation: {
          en: "NSAIDs work by inhibiting cyclooxygenase enzymes, reducing inflammation and pain. They are widely used for various conditions but can have gastrointestinal side effects.",
          es: "Los AINEs funcionan inhibiendo las enzimas ciclooxigenasa, reduciendo la inflamación y el dolor. Se usan ampliamente para diversas condiciones pero pueden tener efectos secundarios gastrointestinales.",
          de: "NSARs wirken durch Hemmung der Cyclooxygenase-Enzyme und reduzieren Entzündung und Schmerz. Sie werden weit verbreitet für verschiedene Erkrankungen verwendet, können aber gastrointestinale Nebenwirkungen haben.",
          nl: "NSAIDs werken door cyclooxygenase-enzymen te remmen, waardoor ontsteking en pijn worden verminderd. Ze worden veel gebruikt voor verschillende aandoeningen maar kunnen maag-darmklachten veroorzaken."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of beta-blockers?",
          es: "¿Cuál es el mecanismo de acción principal de los betabloqueantes?",
          de: "Was ist der primäre Wirkungsmechanismus von Betablockern?",
          nl: "Wat is het primaire werkingsmechanisme van bètablokkers?"
        },
        options: [
          {
            en: "Block calcium channels",
            es: "Bloquear canales de calcio",
            de: "Blockieren Kalziumkanäle",
            nl: "Blokkeren calciumkanalen"
          },
          {
            en: "Block beta-adrenergic receptors",
            es: "Bloquear receptores beta-adrenérgicos",
            de: "Blockieren Beta-adrenerge Rezeptoren",
            nl: "Blokkeren bèta-adrenerge receptoren"
          },
          {
            en: "Inhibit ACE enzyme",
            es: "Inhibir la enzima ECA",
            de: "Hemmen ACE-Enzym",
            nl: "Remmen ACE-enzym"
          },
          {
            en: "Block sodium channels",
            es: "Bloquear canales de sodio",
            de: "Blockieren Natriumkanäle",
            nl: "Blokkeren natriumkanalen"
          }
        ],
        correct: 1,
        explanation: {
          en: "Beta-blockers work by blocking beta-adrenergic receptors, preventing the binding of epinephrine and norepinephrine. This reduces heart rate and blood pressure.",
          es: "Los betabloqueantes funcionan bloqueando los receptores beta-adrenérgicos, impidiendo la unión de epinefrina y norepinefrina. Esto reduce la frecuencia cardíaca y la presión arterial.",
          de: "Betablocker wirken durch Blockierung der Beta-adrenergen Rezeptoren und verhindern die Bindung von Epinephrin und Norepinephrin. Dies reduziert Herzfrequenz und Blutdruck.",
          nl: "Bètablokkers werken door bèta-adrenerge receptoren te blokkeren, waardoor de binding van epinefrine en norepinefrine wordt voorkomen. Dit verlaagt de hartslag en bloeddruk."
        }
      },
      {
        question: {
          en: "What is the antidote for warfarin overdose?",
          es: "¿Cuál es el antídoto para la sobredosis de warfarina?",
          de: "Was ist das Antidot für eine Warfarin-Überdosierung?",
          nl: "Wat is het antidotum voor warfarine-overdosis?"
        },
        options: [
          {
            en: "Protamine sulfate",
            es: "Sulfato de protamina",
            de: "Protaminsulfat",
            nl: "Protaminesulfaat"
          },
          {
            en: "Vitamin K (phytonadione)",
            es: "Vitamina K (fitonadiona)",
            de: "Vitamin K (Phytonadion)",
            nl: "Vitamine K (fytomenadion)"
          },
          {
            en: "Naloxone",
            es: "Naloxona",
            de: "Naloxon",
            nl: "Naloxon"
          },
          {
            en: "Flumazenil",
            es: "Flumazenilo",
            de: "Flumazenil",
            nl: "Flumazenil"
          }
        ],
        correct: 1,
        explanation: {
          en: "Vitamin K is the antidote for warfarin overdose. Warfarin works by inhibiting vitamin K-dependent clotting factors, so vitamin K can reverse its anticoagulant effect.",
          es: "La vitamina K es el antídoto para la sobredosis de warfarina. La warfarina funciona inhibiendo los factores de coagulación dependientes de vitamina K, por lo que la vitamina K puede revertir su efecto anticoagulante.",
          de: "Vitamin K ist das Antidot für eine Warfarin-Überdosierung. Warfarin wirkt durch Hemmung Vitamin K-abhängiger Gerinnungsfaktoren, daher kann Vitamin K seine antikoagulante Wirkung umkehren.",
          nl: "Vitamine K is het antidotum voor warfarine-overdosis. Warfarine werkt door vitamine K-afhankelijke stollingsfactoren te remmen, dus vitamine K kan het antistollingseffect omkeren."
        }
      },
      {
        question: {
          en: "Which drug interaction is most concerning when combining warfarin with antibiotics?",
          es: "¿Qué interacción medicamentosa es más preocupante al combinar warfarina con antibióticos?",
          de: "Welche Arzneimittelwechselwirkung ist am bedenklichsten bei der Kombination von Warfarin mit Antibiotika?",
          nl: "Welke geneesmiddelinteractie is het meest zorgwekkend bij het combineren van warfarine met antibiotica?"
        },
        options: [
          {
            en: "Decreased effectiveness of warfarin",
            es: "Disminución de la eficacia de la warfarina",
            de: "Verminderte Wirksamkeit von Warfarin",
            nl: "Verminderde effectiviteit van warfarine"
          },
          {
            en: "Increased bleeding risk due to enhanced anticoagulation",
            es: "Mayor riesgo de sangrado debido al aumento de la anticoagulación",
            de: "Erhöhtes Blutungsrisiko durch verstärkte Antikoagulation",
            nl: "Verhoogd bloedingsrisico door versterkte antistolling"
          },
          {
            en: "Kidney damage",
            es: "Daño renal",
            de: "Nierenschädigung",
            nl: "Nierschade"
          },
          {
            en: "Liver toxicity",
            es: "Toxicidad hepática",
            de: "Lebertoxizität",
            nl: "Levertoxiciteit"
          }
        ],
        correct: 1,
        explanation: {
          en: "Many antibiotics can enhance the anticoagulant effect of warfarin by disrupting gut bacteria that produce vitamin K, leading to increased bleeding risk.",
          es: "Muchos antibióticos pueden potenciar el efecto anticoagulante de la warfarina al alterar las bacterias intestinales que producen vitamina K, llevando a un mayor riesgo de sangrado.",
          de: "Viele Antibiotika können die antikoagulante Wirkung von Warfarin verstärken, indem sie die Darmflora stören, die Vitamin K produziert, was zu erhöhtem Blutungsrisiko führt.",
          nl: "Veel antibiotica kunnen het antistollingseffect van warfarine versterken door darmbacteriën te verstoren die vitamine K produceren, wat leidt tot verhoogd bloedingsrisico."
        }
      },
      {
        question: {
          en: "What is the mechanism of action of ACE inhibitors?",
          es: "¿Cuál es el mecanismo de acción de los inhibidores de la ECA?",
          de: "Was ist der Wirkungsmechanismus von ACE-Hemmern?",
          nl: "Wat is het werkingsmechanisme van ACE-remmers?"
        },
        options: [
          {
            en: "Block calcium channels in heart muscle",
            es: "Bloquear canales de calcio en el músculo cardíaco",
            de: "Blockieren Kalziumkanäle im Herzmuskel",
            nl: "Blokkeren calciumkanalen in hartspier"
          },
          {
            en: "Inhibit angiotensin-converting enzyme",
            es: "Inhibir la enzima convertidora de angiotensina",
            de: "Hemmen Angiotensin-Converting-Enzym",
            nl: "Remmen angiotensine-convertererend enzym"
          },
          {
            en: "Block beta-adrenergic receptors",
            es: "Bloquear receptores beta-adrenérgicos",
            de: "Blockieren Beta-adrenerge Rezeptoren",
            nl: "Blokkeren bèta-adrenerge receptoren"
          },
          {
            en: "Increase sodium excretion by kidneys",
            es: "Aumentar la excreción de sodio por los riñones",
            de: "Erhöhen Natriumausscheidung durch Nieren",
            nl: "Verhogen natriumuitscheiding door nieren"
          }
        ],
        correct: 1,
        explanation: {
          en: "ACE inhibitors block the enzyme that converts angiotensin I to angiotensin II, reducing vasoconstriction and aldosterone secretion, thus lowering blood pressure.",
          es: "Los inhibidores de la ECA bloquean la enzima que convierte la angiotensina I en angiotensina II, reduciendo la vasoconstricción y la secreción de aldosterona, disminuyendo así la presión arterial.",
          de: "ACE-Hemmer blockieren das Enzym, das Angiotensin I zu Angiotensin II umwandelt, reduzieren Vasokonstriktion und Aldosteronsekretion und senken so den Blutdruck.",
          nl: "ACE-remmers blokkeren het enzym dat angiotensine I omzet naar angiotensine II, waardoor vasoconstrict en aldosteronsecretie worden verminderd en de bloeddruk daalt."
        }
      },
      {
        question: {
          en: "Which antibiotic class is most likely to cause tendon rupture?",
          es: "¿Qué clase de antibióticos es más probable que cause ruptura de tendones?",
          de: "Welche Antibiotikaklasse verursacht am ehesten Sehnenrupturen?",
          nl: "Welke antibioticarlass veroorzaakt het meest waarschijnlijk peesruptuur?"
        },
        options: [
          {
            en: "Penicillins",
            es: "Penicilinas",
            de: "Penicilline",
            nl: "Penicillines"
          },
          {
            en: "Fluoroquinolones",
            es: "Fluoroquinolonas",
            de: "Fluorchinolone",
            nl: "Fluorochinolonen"
          },
          {
            en: "Macrolides",
            es: "Macrólidos",
            de: "Makrolide",
            nl: "Macroliden"
          },
          {
            en: "Cephalosporins",
            es: "Cefalosporinas",
            de: "Cephalosporine",
            nl: "Cefalosporines"
          }
        ],
        correct: 1,
        explanation: {
          en: "Fluoroquinolones have a black box warning for increased risk of tendon rupture, especially the Achilles tendon, particularly in elderly patients and those taking corticosteroids.",
          es: "Las fluoroquinolonas tienen una advertencia de caja negra por el mayor riesgo de ruptura de tendones, especialmente el tendón de Aquiles, particularmente en pacientes ancianos y aquellos que toman corticosteroides.",
          de: "Fluorchinolone haben eine Black-Box-Warnung für erhöhtes Risiko von Sehnenrupturen, besonders der Achillessehne, insbesondere bei älteren Patienten und solchen, die Kortikosteroide einnehmen.",
          nl: "Fluorochinolonen hebben een black box-waarschuwing voor verhoogd risico op peesruptuur, vooral de achillespees, met name bij oudere patiënten en degenen die corticosteroïden innemen."
        }
      },
      {
        question: {
          en: "What is the primary concern when combining grapefruit juice with certain medications?",
          es: "¿Cuál es la principal preocupación al combinar jugo de toronja con ciertos medicamentos?",
          de: "Was ist das Hauptanliegen bei der Kombination von Grapefruitsaft mit bestimmten Medikamenten?",
          nl: "Wat is de hoofdzorg bij het combineren van grapefruitsap met bepaalde medicijnen?"
        },
        options: [
          {
            en: "Increased drug metabolism",
            es: "Aumento del metabolismo del fármaco",
            de: "Erhöhter Arzneimittelstoffwechsel",
            nl: "Verhoogd geneesmiddelmetabolisme"
          },
          {
            en: "Inhibition of CYP3A4 enzyme leading to increased drug levels",
            es: "Inhibición de la enzima CYP3A4 llevando a niveles aumentados del fármaco",
            de: "Hemmung des CYP3A4-Enzyms führt zu erhöhten Arzneimittelspiegeln",
            nl: "Remming van CYP3A4-enzym leidend tot verhoogde geneesmiddelspiegels"
          },
          {
            en: "Decreased drug absorption",
            es: "Disminución de la absorción del fármaco",
            de: "Verminderte Arzneimittelabsorption",
            nl: "Verminderde geneesmiddelabsorptie"
          },
          {
            en: "Enhanced drug excretion",
            es: "Aumento de la excreción del fármaco",
            de: "Verstärkte Arzneimittelausscheidung",
            nl: "Versterkte geneesmiddeluitscheiding"
          }
        ],
        correct: 1,
        explanation: {
          en: "Grapefruit juice inhibits the CYP3A4 enzyme in the intestine and liver, leading to increased blood levels of certain medications, potentially causing toxicity.",
          es: "El jugo de toronja inhibe la enzima CYP3A4 en el intestino y el hígado, llevando a niveles sanguíneos aumentados de ciertos medicamentos, potencialmente causando toxicidad.",
          de: "Grapefruitsaft hemmt das CYP3A4-Enzym im Darm und in der Leber, was zu erhöhten Blutspiegeln bestimmter Medikamente führt und möglicherweise Toxizität verursacht.",
          nl: "Grapefruitsap remt het CYP3A4-enzym in de darm en lever, wat leidt tot verhoogde bloedspiegels van bepaalde medicijnen en mogelijk toxiciteit veroorzaakt."
        }
      },
      {
        question: {
          en: "Which class of drugs is contraindicated in patients with asthma?",
          es: "¿Qué clase de medicamentos está contraindicada en pacientes con asma?",
          de: "Welche Medikamentenklasse ist bei Patienten mit Asthma kontraindiziert?",
          nl: "Welke klasse geneesmiddelen is gecontraïndiceerd bij patiënten met astma?"
        },
        options: [
          {
            en: "ACE inhibitors",
            es: "Inhibidores de la ECA",
            de: "ACE-Hemmer",
            nl: "ACE-remmers"
          },
          {
            en: "Non-selective beta-blockers",
            es: "Betabloqueantes no selectivos",
            de: "Nicht-selektive Betablocker",
            nl: "Niet-selectieve bètablokkers"
          },
          {
            en: "Calcium channel blockers",
            es: "Bloqueadores de canales de calcio",
            de: "Kalziumkanalblocker",
            nl: "Calciumkanaalblokkers"
          },
          {
            en: "Proton pump inhibitors",
            es: "Inhibidores de la bomba de protones",
            de: "Protonenpumpenhemmer",
            nl: "Protonpompremmers"
          }
        ],
        correct: 1,
        explanation: {
          en: "Non-selective beta-blockers can block beta-2 receptors in the lungs, causing bronchoconstriction and potentially triggering severe asthma attacks.",
          es: "Los betabloqueantes no selectivos pueden bloquear los receptores beta-2 en los pulmones, causando broncoconstricción y potencialmente desencadenando ataques severos de asma.",
          de: "Nicht-selektive Betablocker können Beta-2-Rezeptoren in der Lunge blockieren, Bronchokonstriktion verursachen und möglicherweise schwere Asthmaanfälle auslösen.",
          nl: "Niet-selectieve bètablokkers kunnen bèta-2-receptoren in de longen blokkeren, bronchoconstrict veroorzaken en mogelijk ernstige astma-aanvallen uitlokken."
        }
      },
      {
        question: {
          en: "What is the primary mechanism by which proton pump inhibitors work?",
          es: "¿Cuál es el mecanismo principal por el cual funcionan los inhibidores de la bomba de protones?",
          de: "Was ist der primäre Mechanismus, durch den Protonenpumpenhemmer wirken?",
          nl: "Wat is het primaire mechanisme waarmee protonpompremmers werken?"
        },
        options: [
          {
            en: "Block H2 receptors in stomach",
            es: "Bloquear receptores H2 en el estómago",
            de: "Blockieren H2-Rezeptoren im Magen",
            nl: "Blokkeren H2-receptoren in maag"
          },
          {
            en: "Irreversibly inhibit H+/K+-ATPase pump",
            es: "Inhibir irreversiblemente la bomba H+/K+-ATPasa",
            de: "Irreversibel hemmen H+/K+-ATPase-Pumpe",
            nl: "Onomkeerbaar remmen H+/K+-ATPase-pomp"
          },
          {
            en: "Neutralize stomach acid",
            es: "Neutralizar el ácido del estómago",
            de: "Neutralisieren Magensäure",
            nl: "Neutraliseren maagzuur"
          },
          {
            en: "Increase mucus production",
            es: "Aumentar la producción de moco",
            de: "Erhöhen Schleimproduktion",
            nl: "Verhogen slijmproductie"
          }
        ],
        correct: 1,
        explanation: {
          en: "PPIs work by irreversibly binding to and inhibiting the H+/K+-ATPase pump in gastric parietal cells, which is the final step in acid production.",
          es: "Los IBP funcionan uniéndose irreversiblemente e inhibiendo la bomba H+/K+-ATPasa en las células parietales gástricas, que es el paso final en la producción de ácido.",
          de: "PPIs wirken durch irreversible Bindung und Hemmung der H+/K+-ATPase-Pumpe in gastrischen Parietalzellen, dem letzten Schritt der Säureproduktion.",
          nl: "PPI's werken door onomkeerbare binding aan en remming van de H+/K+-ATPase-pomp in gastrische pariëtale cellen, de laatste stap in zuurproductie."
        }
      },
      {
        question: {
          en: "Which medication requires monitoring of serum levels to prevent toxicity?",
          es: "¿Qué medicamento requiere monitoreo de niveles séricos para prevenir toxicidad?",
          de: "Welches Medikament erfordert eine Überwachung der Serumspiegel zur Toxizitätsvermeidung?",
          nl: "Welk medicijn vereist monitoring van serumspiegels om toxiciteit te voorkomen?"
        },
        options: [
          {
            en: "Amoxicillin",
            es: "Amoxicilina",
            de: "Amoxicillin",
            nl: "Amoxicilline"
          },
          {
            en: "Digoxin",
            es: "Digoxina",
            de: "Digoxin",
            nl: "Digoxine"
          },
          {
            en: "Ibuprofen",
            es: "Ibuprofeno",
            de: "Ibuprofen",
            nl: "Ibuprofen"
          },
          {
            en: "Omeprazole",
            es: "Omeprazol",
            de: "Omeprazol",
            nl: "Omeprazol"
          }
        ],
        correct: 1,
        explanation: {
          en: "Digoxin has a narrow therapeutic window and requires regular monitoring of serum levels to maintain efficacy while avoiding potentially fatal toxicity.",
          es: "La digoxina tiene una ventana terapéutica estrecha y requiere monitoreo regular de los niveles séricos para mantener la eficacia mientras evita la toxicidad potencialmente fatal.",
          de: "Digoxin hat ein schmales therapeutisches Fenster und erfordert regelmäßige Überwachung der Serumspiegel zur Aufrechterhaltung der Wirksamkeit bei Vermeidung potenziell tödlicher Toxizität.",
          nl: "Digoxine heeft een smal therapeutisch venster en vereist regelmatige monitoring van serumspiegels om effectiviteit te behouden terwijl potentieel fatale toxiciteit wordt vermeden."
        }
      },
      {
        question: {
          en: "What is the antidote for acetaminophen (paracetamol) overdose?",
          es: "¿Cuál es el antídoto para la sobredosis de acetaminofén (paracetamol)?",
          de: "Was ist das Antidot für eine Acetaminophen (Paracetamol) Überdosierung?",
          nl: "Wat is het antidotum voor acetaminophen (paracetamol) overdosis?"
        },
        options: [
          {
            en: "Activated charcoal",
            es: "Carbón activado",
            de: "Aktivkohle",
            nl: "Actieve kool"
          },
          {
            en: "N-acetylcysteine",
            es: "N-acetilcisteína",
            de: "N-Acetylcystein",
            nl: "N-acetylcysteïne"
          },
          {
            en: "Vitamin K",
            es: "Vitamina K",
            de: "Vitamin K",
            nl: "Vitamine K"
          },
          {
            en: "Naloxone",
            es: "Naloxona",
            de: "Naloxon",
            nl: "Naloxon"
          }
        ],
        correct: 1,
        explanation: {
          en: "N-acetylcysteine (NAC) is the specific antidote for acetaminophen overdose. It works by replenishing glutathione stores and preventing liver damage.",
          es: "La N-acetilcisteína (NAC) es el antídoto específico para la sobredosis de acetaminofén. Funciona reponiendo las reservas de glutatión y previniendo el daño hepático.",
          de: "N-Acetylcystein (NAC) ist das spezifische Antidot für eine Acetaminophen-Überdosierung. Es wirkt durch Wiederauffüllung der Glutathion-Speicher und Verhinderung von Leberschäden.",
          nl: "N-acetylcysteïne (NAC) is het specifieke antidotum voor acetaminophen-overdosis. Het werkt door glutathionvoorraden aan te vullen en leverschade te voorkomen."
        }
      },
      {
        question: {
          en: "Which enzyme is primarily responsible for metabolizing most drugs in the liver?",
          es: "¿Qué enzima es principalmente responsable de metabolizar la mayoría de los fármacos en el hígado?",
          de: "Welches Enzym ist hauptsächlich für die Metabolisierung der meisten Medikamente in der Leber verantwortlich?",
          nl: "Welk enzym is primair verantwoordelijk voor het metaboliseren van de meeste geneesmiddelen in de lever?"
        },
        options: [
          {
            en: "CYP2D6",
            es: "CYP2D6",
            de: "CYP2D6",
            nl: "CYP2D6"
          },
          {
            en: "CYP3A4",
            es: "CYP3A4",
            de: "CYP3A4",
            nl: "CYP3A4"
          },
          {
            en: "CYP1A2",
            es: "CYP1A2",
            de: "CYP1A2",
            nl: "CYP1A2"
          },
          {
            en: "CYP2C9",
            es: "CYP2C9",
            de: "CYP2C9",
            nl: "CYP2C9"
          }
        ],
        correct: 1,
        explanation: {
          en: "CYP3A4 is the most abundant cytochrome P450 enzyme in the liver and metabolizes approximately 50% of all drugs. It's involved in many drug interactions.",
          es: "CYP3A4 es la enzima citocromo P450 más abundante en el hígado y metaboliza aproximadamente el 50% de todos los fármacos. Está involucrada en muchas interacciones medicamentosas.",
          de: "CYP3A4 ist das häufigste Cytochrom P450-Enzym in der Leber und metabolisiert etwa 50% aller Medikamente. Es ist an vielen Arzneimittelwechselwirkungen beteiligt.",
          nl: "CYP3A4 is het meest voorkomende cytochroom P450-enzym in de lever en metaboliseert ongeveer 50% van alle geneesmiddelen. Het is betrokken bij veel geneesmiddelinteracties."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of resistance to beta-lactam antibiotics?",
          es: "¿Cuál es el mecanismo principal de resistencia a los antibióticos beta-lactámicos?",
          de: "Was ist der primäre Resistenzmechanismus gegen Beta-Lactam-Antibiotika?",
          nl: "Wat is het primaire mechanisme van resistentie tegen bèta-lactam antibiotica?"
        },
        options: [
          {
            en: "Efflux pumps",
            es: "Bombas de eflujo",
            de: "Effluxpumpen",
            nl: "Effluxpompen"
          },
          {
            en: "Beta-lactamase enzyme production",
            es: "Producción de enzima beta-lactamasa",
            de: "Beta-Lactamase-Enzymproduktion",
            nl: "Bèta-lactamase enzymproductie"
          },
          {
            en: "Target site modification",
            es: "Modificación del sitio objetivo",
            de: "Zielstellenmodifikation",
            nl: "Doelplaatsmodificatie"
          },
          {
            en: "Decreased permeability",
            es: "Disminución de la permeabilidad",
            de: "Verminderte Permeabilität",
            nl: "Verminderde permeabiliteit"
          }
        ],
        correct: 1,
        explanation: {
          en: "Beta-lactamase enzymes break down the beta-lactam ring structure, which is essential for the antibiotic's activity against bacterial cell wall synthesis.",
          es: "Las enzimas beta-lactamasa descomponen la estructura del anillo beta-lactámico, que es esencial para la actividad del antibiótico contra la síntesis de la pared celular bacteriana.",
          de: "Beta-Lactamase-Enzyme bauen die Beta-Lactam-Ringstruktur ab, die für die Aktivität des Antibiotikums gegen die bakterielle Zellwandsynthese wesentlich ist.",
          nl: "Bèta-lactamase enzymen breken de bèta-lactamringstructuur af, die essentieel is voor de activiteit van het antibioticum tegen bacteriële celwandsynthese."
        }
      },
      {
        question: {
          en: "Which medication is commonly used as an antidote for benzodiazepine overdose?",
          es: "¿Qué medicamento se usa comúnmente como antídoto para la sobredosis de benzodiazepinas?",
          de: "Welches Medikament wird häufig als Antidot für eine Benzodiazepine-Überdosierung verwendet?",
          nl: "Welk medicijn wordt vaak gebruikt als antidotum voor benzodiazepine-overdosis?"
        },
        options: [
          {
            en: "Naloxone",
            es: "Naloxona",
            de: "Naloxon",
            nl: "Naloxon"
          },
          {
            en: "Flumazenil",
            es: "Flumazenilo",
            de: "Flumazenil",
            nl: "Flumazenil"
          },
          {
            en: "Atropine",
            es: "Atropina",
            de: "Atropin",
            nl: "Atropine"
          },
          {
            en: "Physostigmine",
            es: "Fisostigmina",
            de: "Physostigmin",
            nl: "Fysostigmine"
          }
        ],
        correct: 1,
        explanation: {
          en: "Flumazenil is a competitive antagonist at benzodiazepine receptors and can reverse benzodiazepine-induced sedation and respiratory depression.",
          es: "El flumazenilo es un antagonista competitivo en los receptores de benzodiazepinas y puede revertir la sedación y depresión respiratoria inducidas por benzodiazepinas.",
          de: "Flumazenil ist ein kompetitiver Antagonist an Benzodiazepine-Rezeptoren und kann Benzodiazepine-induzierte Sedierung und Atemdepression umkehren.",
          nl: "Flumazenil is een competitieve antagonist bij benzodiazepinereceptoren en kan door benzodiazepines veroorzaakte sedatie en ademdepressie omkeren."
        }
      },
      {
        question: {
          en: "What is the primary concern with long-term corticosteroid use?",
          es: "¿Cuál es la principal preocupación con el uso prolongado de corticosteroides?",
          de: "Was ist das Hauptanliegen bei langfristiger Kortikosteroid-Anwendung?",
          nl: "Wat is de hoofdzorg bij langdurig corticosteroïdgebruik?"
        },
        options: [
          {
            en: "Immediate allergic reactions",
            es: "Reacciones alérgicas inmediatas",
            de: "Sofortige allergische Reaktionen",
            nl: "Onmiddellijke allergische reacties"
          },
          {
            en: "Suppression of hypothalamic-pituitary-adrenal axis",
            es: "Supresión del eje hipotálamo-hipófisis-suprarrenal",
            de: "Suppression der Hypothalamus-Hypophyse-Nebennierenrinden-Achse",
            nl: "Onderdrukking van hypothalamus-hypofyse-bijnier as"
          },
          {
            en: "Immediate kidney failure",
            es: "Insuficiencia renal inmediata",
            de: "Sofortiges Nierenversagen",
            nl: "Onmiddellijk nierfalen"
          },
          {
            en: "Acute liver toxicity",
            es: "Toxicidad hepática aguda",
            de: "Akute Lebertoxizität",
            nl: "Acute levertoxiciteit"
          }
        ],
        correct: 1,
        explanation: {
          en: "Long-term corticosteroid use can suppress the body's natural cortisol production, leading to adrenal insufficiency if stopped abruptly. This requires gradual tapering.",
          es: "El uso prolongado de corticosteroides puede suprimir la producción natural de cortisol del cuerpo, llevando a insuficiencia suprarrenal si se detiene bruscamente. Esto requiere reducción gradual.",
          de: "Langfristige Kortikosteroid-Anwendung kann die natürliche Cortisolproduktion des Körpers unterdrücken, was bei abruptem Stoppen zu Nebenniereninsuffizienz führt. Dies erfordert allmähliches Ausschleichen.",
          nl: "Langdurig corticosteroïdgebruik kan de natuurlijke cortisolproductie van het lichaam onderdrukken, wat bij plotseling stoppen tot bijnierschorsinsufficiëntie leidt. Dit vereist geleidelijke afbouw."
        }
      },
      {
        question: {
          en: "Which drug class is first-line treatment for heart failure with reduced ejection fraction?",
          es: "¿Qué clase de fármacos es el tratamiento de primera línea para la insuficiencia cardíaca con fracción de eyección reducida?",
          de: "Welche Medikamentenklasse ist Erstlinientherapie für Herzinsuffizienz mit reduzierter Ejektionsfraktion?",
          nl: "Welke geneesmiddelenklasse is eerstelijnsbehandeling voor hartfalen met verminderde ejectiefractie?"
        },
        options: [
          {
            en: "Calcium channel blockers",
            es: "Bloqueadores de canales de calcio",
            de: "Kalziumkanalblocker",
            nl: "Calciumkanaalblokkers"
          },
          {
            en: "ACE inhibitors or ARBs",
            es: "Inhibidores de la ECA o ARA II",
            de: "ACE-Hemmer oder ARBs",
            nl: "ACE-remmers of ARBs"
          },
          {
            en: "Alpha-blockers",
            es: "Alfabloqueantes",
            de: "Alpha-Blocker",
            nl: "Alfabokkers"
          },
          {
            en: "Nitrates",
            es: "Nitratos",
            de: "Nitrate",
            nl: "Nitraten"
          }
        ],
        correct: 1,
        explanation: {
          en: "ACE inhibitors (or ARBs if ACE inhibitors are not tolerated) are first-line therapy for heart failure with reduced ejection fraction, providing mortality benefit.",
          es: "Los inhibidores de la ECA (o ARA II si no se toleran los inhibidores de la ECA) son terapia de primera línea para la insuficiencia cardíaca con fracción de eyección reducida, proporcionando beneficio de mortalidad.",
          de: "ACE-Hemmer (oder ARBs wenn ACE-Hemmer nicht vertragen werden) sind Erstlinientherapie für Herzinsuffizienz mit reduzierter Ejektionsfraktion und bieten Mortalitätsvorteil.",
          nl: "ACE-remmers (of ARBs als ACE-remmers niet verdragen worden) zijn eerstelijnstherapie voor hartfalen met verminderde ejectiefractie en bieden mortaliteitsvoordeel."
        }
      },
      {
        question: {
          en: "What is the mechanism of action of statins?",
          es: "¿Cuál es el mecanismo de acción de las estatinas?",
          de: "Was ist der Wirkungsmechanismus von Statinen?",
          nl: "Wat is het werkingsmechanisme van statines?"
        },
        options: [
          {
            en: "Inhibit cholesterol absorption in intestine",
            es: "Inhibir la absorción de colesterol en el intestino",
            de: "Hemmen Cholesterinabsorption im Darm",
            nl: "Remmen cholesterolabsorptie in darm"
          },
          {
            en: "Inhibit HMG-CoA reductase enzyme",
            es: "Inhibir la enzima HMG-CoA reductasa",
            de: "Hemmen HMG-CoA-Reduktase-Enzym",
            nl: "Remmen HMG-CoA-reductase-enzym"
          },
          {
            en: "Bind bile acids in intestine",
            es: "Unirse a ácidos biliares en el intestino",
            de: "Binden Gallensäuren im Darm",
            nl: "Binden galzuren in darm"
          },
          {
            en: "Increase cholesterol excretion",
            es: "Aumentar la excreción de colesterol",
            de: "Erhöhen Cholesterinausscheidung",
            nl: "Verhogen cholesteroluitscheiding"
          }
        ],
        correct: 1,
        explanation: {
          en: "Statins work by inhibiting HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis, thereby reducing cholesterol production in the liver.",
          es: "Las estatinas funcionan inhibiendo la HMG-CoA reductasa, la enzima limitante de la velocidad en la síntesis de colesterol, reduciendo así la producción de colesterol en el hígado.",
          de: "Statine wirken durch Hemmung der HMG-CoA-Reduktase, dem geschwindigkeitsbegrenzenden Enzym der Cholesterinsynthese, wodurch die Cholesterinproduktion in der Leber reduziert wird.",
          nl: "Statines werken door HMG-CoA-reductase te remmen, het snelheidsbepalende enzym in cholesterolsynthese, waardoor cholesterolproductie in de lever wordt verminderd."
        }
      },
      {
        question: {
          en: "Which medication can cause 'gray baby syndrome' in newborns?",
          es: "¿Qué medicamento puede causar el 'síndrome del bebé gris' en recién nacidos?",
          de: "Welches Medikament kann das 'Gray-Baby-Syndrom' bei Neugeborenen verursachen?",
          nl: "Welk medicijn kan 'gray baby syndroom' veroorzaken bij pasgeborenen?"
        },
        options: [
          {
            en: "Penicillin",
            es: "Penicilina",
            de: "Penicillin",
            nl: "Penicilline"
          },
          {
            en: "Chloramphenicol",
            es: "Cloranfenicol",
            de: "Chloramphenicol",
            nl: "Chlooramfenicol"
          },
          {
            en: "Erythromycin",
            es: "Eritromicina",
            de: "Erythromycin",
            nl: "Erytromycine"
          },
          {
            en: "Gentamicin",
            es: "Gentamicina",
            de: "Gentamicin",
            nl: "Gentamicine"
          }
        ],
        correct: 1,
        explanation: {
          en: "Chloramphenicol can cause gray baby syndrome in newborns due to their immature liver enzymes unable to metabolize the drug, leading to potentially fatal cardiovascular collapse.",
          es: "El cloranfenicol puede causar el síndrome del bebé gris en recién nacidos debido a que sus enzimas hepáticas inmaduras no pueden metabolizar el fármaco, llevando a un colapso cardiovascular potencialmente fatal.",
          de: "Chloramphenicol kann Gray-Baby-Syndrom bei Neugeborenen verursachen, da ihre unreifen Leberenzyme das Medikament nicht metabolisieren können, was zu potentiell tödlichem Kreislaufkollaps führt.",
          nl: "Chlooramfenicol kan gray baby syndroom veroorzaken bij pasgeborenen omdat hun onrijpe leverenzymen het medicijn niet kunnen metaboliseren, wat leidt tot potentieel fatale cardiovasculaire collaps."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of insulin?",
          es: "¿Cuál es el mecanismo de acción principal de la insulina?",
          de: "Was ist der primäre Wirkungsmechanismus von Insulin?",
          nl: "Wat is het primaire werkingsmechanisme van insuline?"
        },
        options: [
          {
            en: "Stimulates glucagon release",
            es: "Estimula la liberación de glucagón",
            de: "Stimuliert Glukagon-Freisetzung",
            nl: "Stimuleert glucagonafgifte"
          },
          {
            en: "Facilitates glucose uptake into cells",
            es: "Facilita la captación de glucosa en las células",
            de: "Erleichtert Glukoseaufnahme in Zellen",
            nl: "Faciliteert glucose-opname in cellen"
          },
          {
            en: "Inhibits glucose absorption in intestine",
            es: "Inhibe la absorción de glucosa en el intestino",
            de: "Hemmt Glukoseabsorption im Darm",
            nl: "Remt glucose-absorptie in darm"
          },
          {
            en: "Increases glucose production in liver",
            es: "Aumenta la producción de glucosa en el hígado",
            de: "Erhöht Glukoseproduktion in der Leber",
            nl: "Verhoogt glucoseproductie in lever"
          }
        ],
        correct: 1,
        explanation: {
          en: "Insulin facilitates glucose uptake into cells by binding to insulin receptors and promoting translocation of glucose transporters (GLUT4) to the cell membrane.",
          es: "La insulina facilita la captación de glucosa en las células al unirse a los receptores de insulina y promover la translocación de transportadores de glucosa (GLUT4) a la membrana celular.",
          de: "Insulin erleichtert die Glukoseaufnahme in Zellen durch Bindung an Insulinrezeptoren und Förderung der Translokation von Glukosetransportern (GLUT4) zur Zellmembran.",
          nl: "Insuline faciliteert glucose-opname in cellen door binding aan insulinereceptoren en bevordering van translocatie van glucosetransporters (GLUT4) naar het celmembraan."
        }
      },
      {
        question: {
          en: "Which medication is contraindicated in patients with G6PD deficiency?",
          es: "¿Qué medicamento está contraindicado en pacientes con deficiencia de G6PD?",
          de: "Welches Medikament ist bei Patienten mit G6PD-Mangel kontraindiziert?",
          nl: "Welk medicijn is gecontraïndiceerd bij patiënten met G6PD-deficiëntie?"
        },
        options: [
          {
            en: "Penicillin",
            es: "Penicilina",
            de: "Penicillin",
            nl: "Penicilline"
          },
          {
            en: "Primaquine",
            es: "Primaquina",
            de: "Primaquin",
            nl: "Primaquine"
          },
          {
            en: "Metformin",
            es: "Metformina",
            de: "Metformin",
            nl: "Metformine"
          },
          {
            en: "Lisinopril",
            es: "Lisinopril",
            de: "Lisinopril",
            nl: "Lisinopril"
          }
        ],
        correct: 1,
        explanation: {
          en: "Primaquine can cause severe hemolytic anemia in patients with G6PD deficiency because they lack the enzyme needed to protect red blood cells from oxidative stress.",
          es: "La primaquina puede causar anemia hemolítica severa en pacientes con deficiencia de G6PD porque carecen de la enzima necesaria para proteger los glóbulos rojos del estrés oxidativo.",
          de: "Primaquin kann bei Patienten mit G6PD-Mangel schwere hämolytische Anämie verursachen, da ihnen das Enzym fehlt, das zum Schutz der roten Blutkörperchen vor oxidativem Stress benötigt wird.",
          nl: "Primaquine kan ernstige hemolytische anemie veroorzaken bij patiënten met G6PD-deficiëntie omdat ze het enzym missen dat nodig is om rode bloedcellen te beschermen tegen oxidatieve stress."
        }
      },
      {
        question: {
          en: "What is the primary side effect of angiotensin receptor blockers (ARBs)?",
          es: "¿Cuál es el efecto secundario principal de los bloqueadores de receptores de angiotensina (ARA II)?",
          de: "Was ist die primäre Nebenwirkung von Angiotensin-Rezeptor-Blockern (ARBs)?",
          nl: "Wat is de primaire bijwerking van angiotensine-receptorblokkers (ARBs)?"
        },
        options: [
          {
            en: "Dry cough",
            es: "Tos seca",
            de: "Trockener Husten",
            nl: "Droge hoest"
          },
          {
            en: "Hyperkalemia",
            es: "Hipercalemia",
            de: "Hyperkaliämie",
            nl: "Hyperkaliëmie"
          },
          {
            en: "Bradycardia",
            es: "Bradicardia",
            de: "Bradykardie",
            nl: "Bradycardie"
          },
          {
            en: "Weight gain",
            es: "Aumento de peso",
            de: "Gewichtszunahme",
            nl: "Gewichtstoename"
          }
        ],
        correct: 1,
        explanation: {
          en: "ARBs can cause hyperkalemia by reducing aldosterone levels, which decreases potassium excretion by the kidneys. Regular monitoring of serum potassium is recommended.",
          es: "Los ARA II pueden causar hipercalemia al reducir los niveles de aldosterona, lo que disminuye la excreción de potasio por los riñones. Se recomienda monitoreo regular del potasio sérico.",
          de: "ARBs können Hyperkaliämie verursachen, indem sie Aldosteronspiegel reduzieren, was die Kaliumausscheidung durch die Nieren verringert. Regelmäßige Überwachung des Serumkaliums wird empfohlen.",
          nl: "ARBs kunnen hyperkaliëmie veroorzaken door aldosteronspiegels te verlagen, wat kaliumuitscheiding door de nieren vermindert. Regelmatige monitoring van serumkalium wordt aanbevolen."
        }
      },
      {
        question: {
          en: "Which medication is used to reverse heparin anticoagulation?",
          es: "¿Qué medicamento se usa para revertir la anticoagulación con heparina?",
          de: "Welches Medikament wird zur Umkehrung der Heparin-Antikoagulation verwendet?",
          nl: "Welk medicijn wordt gebruikt om heparine-antistolling om te keren?"
        },
        options: [
          {
            en: "Vitamin K",
            es: "Vitamina K",
            de: "Vitamin K",
            nl: "Vitamine K"
          },
          {
            en: "Protamine sulfate",
            es: "Sulfato de protamina",
            de: "Protaminsulfat",
            nl: "Protaminesulfaat"
          },
          {
            en: "Fresh frozen plasma",
            es: "Plasma fresco congelado",
            de: "Gefrorenes Frischplasma",
            nl: "Vers bevroren plasma"
          },
          {
            en: "Tranexamic acid",
            es: "Ácido tranexámico",
            de: "Tranexamsäure",
            nl: "Tranexaminezuur"
          }
        ],
        correct: 1,
        explanation: {
          en: "Protamine sulfate binds to heparin and forms an inactive complex, effectively reversing heparin's anticoagulant effect. It's used in cases of heparin overdose or when rapid reversal is needed.",
          es: "El sulfato de protamina se une a la heparina y forma un complejo inactivo, revirtiendo efectivamente el efecto anticoagulante de la heparina. Se usa en casos de sobredosis de heparina o cuando se necesita reversión rápida.",
          de: "Protaminsulfat bindet an Heparin und bildet einen inaktiven Komplex, wodurch die antikoagulante Wirkung von Heparin effektiv umgekehrt wird. Es wird bei Heparin-Überdosierung oder bei Bedarf schneller Umkehrung verwendet.",
          nl: "Protaminesulfaat bindt aan heparine en vormt een inactief complex, waardoor het antistollingseffect van heparine effectief wordt omgekeerd. Het wordt gebruikt bij heparine-overdosis of wanneer snelle omkering nodig is."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of metformin?",
          es: "¿Cuál es el mecanismo de acción principal de la metformina?",
          de: "Was ist der primäre Wirkungsmechanismus von Metformin?",
          nl: "Wat is het primaire werkingsmechanisme van metformine?"
        },
        options: [
          {
            en: "Stimulates insulin release from pancreas",
            es: "Estimula la liberación de insulina del páncreas",
            de: "Stimuliert Insulinfreisetzung aus der Bauchspeicheldrüse",
            nl: "Stimuleert insulineafgifte uit alvleesklier"
          },
          {
            en: "Decreases hepatic glucose production",
            es: "Disminuye la producción hepática de glucosa",
            de: "Verringert hepatische Glukoseproduktion",
            nl: "Vermindert hepatische glucoseproductie"
          },
          {
            en: "Blocks glucose absorption in intestine",
            es: "Bloquea la absorción de glucosa en el intestino",
            de: "Blockiert Glukoseabsorption im Darm",
            nl: "Blokkeert glucose-absorptie in darm"
          },
          {
            en: "Increases glucose excretion in urine",
            es: "Aumenta la excreción de glucosa en la orina",
            de: "Erhöht Glukoseausscheidung im Urin",
            nl: "Verhoogt glucose-uitscheiding in urine"
          }
        ],
        correct: 1,
        explanation: {
          en: "Metformin primarily works by decreasing hepatic glucose production (gluconeogenesis) and improving insulin sensitivity. It does not stimulate insulin release.",
          es: "La metformina funciona principalmente disminuyendo la producción hepática de glucosa (gluconeogénesis) y mejorando la sensibilidad a la insulina. No estimula la liberación de insulina.",
          de: "Metformin wirkt hauptsächlich durch Verringerung der hepatischen Glukoseproduktion (Glukoneogenese) und Verbesserung der Insulinsensitivität. Es stimuliert nicht die Insulinfreisetzung.",
          nl: "Metformine werkt hoofdzakelijk door hepatische glucoseproductie (gluconeogenese) te verminderen en insulinegevoeligheid te verbeteren. Het stimuleert geen insulineafgifte."
        }
      },
      {
        question: {
          en: "Which medication requires monitoring for lactic acidosis as a serious side effect?",
          es: "¿Qué medicamento requiere monitoreo para acidosis láctica como efecto secundario grave?",
          de: "Welches Medikament erfordert Überwachung auf Laktatazidose als schwere Nebenwirkung?",
          nl: "Welk medicijn vereist monitoring voor lactaatacidose als ernstige bijwerking?"
        },
        options: [
          {
            en: "Insulin",
            es: "Insulina",
            de: "Insulin",
            nl: "Insuline"
          },
          {
            en: "Metformin",
            es: "Metformina",
            de: "Metformin",
            nl: "Metformine"
          },
          {
            en: "Glyburide",
            es: "Gliburida",
            de: "Glibenclamid",
            nl: "Glibenclamide"
          },
          {
            en: "Acarbose",
            es: "Acarbosa",
            de: "Acarbose",
            nl: "Acarbose"
          }
        ],
        correct: 1,
        explanation: {
          en: "Metformin can rarely cause lactic acidosis, particularly in patients with kidney disease, liver disease, or conditions that predispose to hypoxia. Regular monitoring of kidney function is important.",
          es: "La metformina raramente puede causar acidosis láctica, particularmente en pacientes con enfermedad renal, enfermedad hepática, o condiciones que predisponen a la hipoxia. El monitoreo regular de la función renal es importante.",
          de: "Metformin kann selten Laktatazidose verursachen, besonders bei Patienten mit Nierenerkrankung, Lebererkrankung oder Zuständen, die zu Hypoxie prädisponieren. Regelmäßige Überwachung der Nierenfunktion ist wichtig.",
          nl: "Metformine kan zelden lactaatacidose veroorzaken, vooral bij patiënten met nierziekte, leverziekte of aandoeningen die predisponeren voor hypoxie. Regelmatige monitoring van nierfunctie is belangrijk."
        }
      },
      {
        question: {
          en: "What is the primary concern when prescribing tetracycline antibiotics to children under 8 years old?",
          es: "¿Cuál es la principal preocupación al prescribir antibióticos de tetraciclina a niños menores de 8 años?",
          de: "Was ist das Hauptanliegen bei der Verschreibung von Tetracyclin-Antibiotika an Kinder unter 8 Jahren?",
          nl: "Wat is de hoofdzorg bij het voorschrijven van tetracycline-antibiotica aan kinderen onder 8 jaar?"
        },
        options: [
          {
            en: "Kidney damage",
            es: "Daño renal",
            de: "Nierenschädigung",
            nl: "Nierschade"
          },
          {
            en: "Tooth discoloration and enamel defects",
            es: "Decoloración dental y defectos del esmalte",
            de: "Zahnverfärbung und Schmelzdefekte",
            nl: "Tandverkleuring en glazuurdefecten"
          },
          {
            en: "Growth retardation",
            es: "Retraso del crecimiento",
            de: "Wachstumsverzögerung",
            nl: "Groeivertraging"
          },
          {
            en: "Liver toxicity",
            es: "Toxicidad hepática",
            de: "Lebertoxizität",
            nl: "Levertoxiciteit"
          }
        ],
        correct: 1,
        explanation: {
          en: "Tetracyclines bind to calcium in developing teeth and bones, causing permanent yellow-gray tooth discoloration and enamel defects in children under 8 years old.",
          es: "Las tetraciclinas se unen al calcio en dientes y huesos en desarrollo, causando decoloración dental amarillo-gris permanente y defectos del esmalte en niños menores de 8 años.",
          de: "Tetracycline binden an Kalzium in sich entwickelnden Zähnen und Knochen und verursachen permanente gelb-graue Zahnverfärbung und Schmelzdefekte bei Kindern unter 8 Jahren.",
          nl: "Tetracyclines binden aan calcium in zich ontwikkelende tanden en botten, waardoor permanente geel-grijze tandverkleuring en glazuurdefecten ontstaan bij kinderen onder 8 jaar."
        }
      },
      {
        question: {
          en: "Which drug interaction can lead to serotonin syndrome?",
          es: "¿Qué interacción medicamentosa puede llevar al síndrome serotoninérgico?",
          de: "Welche Arzneimittelwechselwirkung kann zum Serotonin-Syndrom führen?",
          nl: "Welke geneesmiddelinteractie kan leiden tot serotoninensyndroom?"
        },
        options: [
          {
            en: "Warfarin + Aspirin",
            es: "Warfarina + Aspirina",
            de: "Warfarin + Aspirin",
            nl: "Warfarine + Aspirine"
          },
          {
            en: "SSRI + MAOI",
            es: "ISRS + IMAO",
            de: "SSRI + MAOI",
            nl: "SSRI + MAOI"
          },
          {
            en: "Beta-blocker + ACE inhibitor",
            es: "Betabloqueante + Inhibidor de la ECA",
            de: "Betablocker + ACE-Hemmer",
            nl: "Bètablokker + ACE-remmer"
          },
          {
            en: "Digoxin + Furosemide",
            es: "Digoxina + Furosemida",
            de: "Digoxin + Furosemid",
            nl: "Digoxine + Furosemide"
          }
        ],
        correct: 1,
        explanation: {
          en: "Combining SSRIs with MAOIs can cause dangerous accumulation of serotonin, leading to potentially fatal serotonin syndrome with symptoms like hyperthermia, muscle rigidity, and altered mental status.",
          es: "Combinar ISRS con IMAO puede causar acumulación peligrosa de serotonina, llevando al síndrome serotoninérgico potencialmente fatal con síntomas como hipertermia, rigidez muscular y alteración del estado mental.",
          de: "Die Kombination von SSRIs mit MAOIs kann zu gefährlicher Serotonin-Ansammlung führen und potenziell tödliches Serotonin-Syndrom mit Symptomen wie Hyperthermie, Muskelsteifigkeit und verändertem Bewusstseinszustand verursachen.",
          nl: "Het combineren van SSRI's met MAOI's kan gevaarlijke serotonineopbouw veroorzaken, wat leidt tot potentieel fataal serotoninensyndroom met symptomen zoals hyperthermie, spierrigiditeit en veranderde mentale toestand."
        }
      },
      {
        question: {
          en: "What is the mechanism of action of allopurinol in treating gout?",
          es: "¿Cuál es el mecanismo de acción del alopurinol en el tratamiento de la gota?",
          de: "Was ist der Wirkungsmechanismus von Allopurinol bei der Gichtbehandlung?",
          nl: "Wat is het werkingsmechanisme van allopurinol bij de behandeling van jicht?"
        },
        options: [
          {
            en: "Inhibits uric acid reabsorption in kidneys",
            es: "Inhibe la reabsorción de ácido úrico en los riñones",
            de: "Hemmt Harnsäure-Reabsorption in den Nieren",
            nl: "Remt urinezuur-herabsorptie in nieren"
          },
          {
            en: "Inhibits xanthine oxidase enzyme",
            es: "Inhibe la enzima xantina oxidasa",
            de: "Hemmt Xanthin-Oxidase-Enzym",
            nl: "Remt xanthine-oxidase-enzym"
          },
          {
            en: "Increases uric acid excretion",
            es: "Aumenta la excreción de ácido úrico",
            de: "Erhöht Harnsäure-Ausscheidung",
            nl: "Verhoogt urinezuur-uitscheiding"
          },
          {
            en: "Converts uric acid to allantoin",
            es: "Convierte ácido úrico a alantoína",
            de: "Wandelt Harnsäure in Allantoin um",
            nl: "Converteert urinezuur naar allantoïne"
          }
        ],
        correct: 1,
        explanation: {
          en: "Allopurinol inhibits xanthine oxidase, the enzyme that converts xanthine to uric acid, thereby reducing uric acid production and preventing gout attacks.",
          es: "El alopurinol inhibe la xantina oxidasa, la enzima que convierte xantina a ácido úrico, reduciendo así la producción de ácido úrico y previniendo ataques de gota.",
          de: "Allopurinol hemmt Xanthin-Oxidase, das Enzym, das Xanthin zu Harnsäure umwandelt, wodurch die Harnsäureproduktion reduziert und Gichtanfälle verhindert werden.",
          nl: "Allopurinol remt xanthine-oxidase, het enzym dat xanthine omzet naar urinezuur, waardoor urinezuurproductie wordt verminderd en jichtaanvallen worden voorkomen."
        }
      },
      {
        question: {
          en: "Which medication is most likely to cause photosensitivity reactions?",
          es: "¿Qué medicamento es más probable que cause reacciones de fotosensibilidad?",
          de: "Welches Medikament verursacht am ehesten Photosensitivitätsreaktionen?",
          nl: "Welk medicijn veroorzaakt het meest waarschijnlijk fotosensitiviteitsreacties?"
        },
        options: [
          {
            en: "Penicillin",
            es: "Penicilina",
            de: "Penicillin",
            nl: "Penicilline"
          },
          {
            en: "Doxycycline",
            es: "Doxiciclina",
            de: "Doxycyclin",
            nl: "Doxycycline"
          },
          {
            en: "Acetaminophen",
            es: "Acetaminofén",
            de: "Acetaminophen",
            nl: "Acetaminophen"
          },
          {
            en: "Metformin",
            es: "Metformina",
            de: "Metformin",
            nl: "Metformine"
          }
        ],
        correct: 1,
        explanation: {
          en: "Doxycycline and other tetracyclines commonly cause photosensitivity reactions, making patients more susceptible to sunburn. Patients should use sun protection while taking these medications.",
          es: "La doxiciclina y otras tetraciclinas comúnmente causan reacciones de fotosensibilidad, haciendo a los pacientes más susceptibles a quemaduras solares. Los pacientes deben usar protección solar mientras toman estos medicamentos.",
          de: "Doxycyclin und andere Tetracycline verursachen häufig Photosensitivitätsreaktionen und machen Patienten anfälliger für Sonnenbrand. Patienten sollten während der Einnahme dieser Medikamente Sonnenschutz verwenden.",
          nl: "Doxycycline en andere tetracyclines veroorzaken vaak fotosensitiviteitsreacties, waardoor patiënten gevoeliger worden voor zonnebrand. Patiënten moeten zonbescherming gebruiken tijdens het innemen van deze medicijnen."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of loop diuretics like furosemide?",
          es: "¿Cuál es el mecanismo de acción principal de los diuréticos de asa como la furosemida?",
          de: "Was ist der primäre Wirkungsmechanismus von Schleifendiuretika wie Furosemid?",
          nl: "Wat is het primaire werkingsmechanisme van lisdiuretica zoals furosemide?"
        },
        options: [
          {
            en: "Block aldosterone receptors",
            es: "Bloquear receptores de aldosterona",
            de: "Blockieren Aldosteron-Rezeptoren",
            nl: "Blokkeren aldosteronreceptoren"
          },
          {
            en: "Inhibit Na+/K+/2Cl- cotransporter in loop of Henle",
            es: "Inhibir el cotransportador Na+/K+/2Cl- en el asa de Henle",
            de: "Hemmen Na+/K+/2Cl--Cotransporter in der Henle-Schleife",
            nl: "Remmen Na+/K+/2Cl--cotransporter in lis van Henle"
          },
          {
            en: "Block sodium channels in collecting duct",
            es: "Bloquear canales de sodio en el conducto colector",
            de: "Blockieren Natriumkanäle im Sammelrohr",
            nl: "Blokkeren natriumkanalen in verzamelkanaal"
          },
          {
            en: "Inhibit carbonic anhydrase",
            es: "Inhibir la anhidrasa carbónica",
            de: "Hemmen Carboanhydrase",
            nl: "Remmen koolzuuranhydrase"
          }
        ],
        correct: 1,
        explanation: {
          en: "Loop diuretics work by inhibiting the Na+/K+/2Cl- cotransporter in the thick ascending limb of the loop of Henle, preventing sodium reabsorption and causing potent diuresis.",
          es: "Los diuréticos de asa funcionan inhibiendo el cotransportador Na+/K+/2Cl- en la rama ascendente gruesa del asa de Henle, previniendo la reabsorción de sodio y causando diuresis potente.",
          de: "Schleifendiuretika wirken durch Hemmung des Na+/K+/2Cl--Cotransporters im dicken aufsteigenden Schenkel der Henle-Schleife, verhindern Natrium-Reabsorption und verursachen potente Diurese.",
          nl: "Lisdiuretica werken door de Na+/K+/2Cl--cotransporter in de dikke opstijgende tak van de lis van Henle te remmen, waardoor natriumherabsorptie wordt voorkomen en krachtige diurese ontstaat."
        }
      },
      {
        question: {
          en: "Which medication is the drug of choice for treating anaphylaxis?",
          es: "¿Qué medicamento es el fármaco de elección para tratar la anafilaxia?",
          de: "Welches Medikament ist das Mittel der Wahl zur Behandlung der Anaphylaxie?",
          nl: "Welk medicijn is het middel van voorkeur voor de behandeling van anafylaxie?"
        },
        options: [
          {
            en: "Diphenhydramine",
            es: "Difenhidramina",
            de: "Diphenhydramin",
            nl: "Difenhydramine"
          },
          {
            en: "Epinephrine",
            es: "Epinefrina",
            de: "Epinephrin",
            nl: "Epinefrine"
          },
          {
            en: "Prednisone",
            es: "Prednisona",
            de: "Prednisolon",
            nl: "Prednison"
          },
          {
            en: "Albuterol",
            es: "Albuterol",
            de: "Albuterol",
            nl: "Albuterol"
          }
        ],
        correct: 1,
        explanation: {
          en: "Epinephrine is the first-line treatment for anaphylaxis. It acts quickly to counteract the cardiovascular and respiratory effects through alpha and beta-adrenergic stimulation.",
          es: "La epinefrina es el tratamiento de primera línea para la anafilaxia. Actúa rápidamente para contrarrestar los efectos cardiovasculares y respiratorios a través de la estimulación adrenérgica alfa y beta.",
          de: "Epinephrin ist die Erstlinienbehandlung der Anaphylaxie. Es wirkt schnell, um die kardiovaskulären und respiratorischen Effekte durch Alpha- und Beta-adrenerge Stimulation zu kontern.",
          nl: "Epinefrine is de eerstelijnsbehandeling voor anafylaxie. Het werkt snel om cardiovasculaire en respiratoire effecten tegen te gaan door alfa- en bèta-adrenerge stimulatie."
        }
      },
      {
        question: {
          en: "What is the primary concern with abrupt discontinuation of beta-blockers?",
          es: "¿Cuál es la principal preocupación con la interrupción abrupta de los betabloqueantes?",
          de: "Was ist das Hauptanliegen bei abruptem Absetzen von Betablockern?",
          nl: "Wat is de hoofdzorg bij abrupte stopzetting van bètablokkers?"
        },
        options: [
          {
            en: "Hypotension",
            es: "Hipotensión",
            de: "Hypotonie",
            nl: "Hypotensie"
          },
          {
            en: "Rebound hypertension and cardiac events",
            es: "Hipertensión de rebote y eventos cardíacos",
            de: "Rebound-Hypertonie und kardiale Ereignisse",
            nl: "Rebound-hypertensie en cardiale events"
          },
          {
            en: "Immediate allergic reaction",
            es: "Reacción alérgica inmediata",
            de: "Sofortige allergische Reaktion",
            nl: "Onmiddellijke allergische reactie"
          },
          {
            en: "Kidney failure",
            es: "Insuficiencia renal",
            de: "Nierenversagen",
            nl: "Nierfalen"
          }
        ],
        correct: 1,
        explanation: {
          en: "Abrupt discontinuation of beta-blockers can cause rebound hypertension and increase the risk of myocardial infarction and other cardiac events. Gradual tapering is essential.",
          es: "La interrupción abrupta de betabloqueantes puede causar hipertensión de rebote y aumentar el riesgo de infarto de miocardio y otros eventos cardíacos. La reducción gradual es esencial.",
          de: "Abruptes Absetzen von Betablockern kann Rebound-Hypertonie verursachen und das Risiko für Myokardinfarkt und andere kardiale Ereignisse erhöhen. Allmähliches Ausschleichen ist wesentlich.",
          nl: "Abrupte stopzetting van bètablokkers kan rebound-hypertensie veroorzaken en het risico op hartinfarct en andere cardiale events verhogen. Geleidelijke afbouw is essentieel."
        }
      },
      {
        question: {
          en: "Which class of antidepressants is most associated with weight gain and sedation?",
          es: "¿Qué clase de antidepresivos se asocia más con aumento de peso y sedación?",
          de: "Welche Klasse von Antidepressiva ist am meisten mit Gewichtszunahme und Sedierung assoziiert?",
          nl: "Welke klasse antidepressiva wordt het meest geassocieerd met gewichtstoename en sedatie?"
        },
        options: [
          {
            en: "SSRIs",
            es: "ISRS",
            de: "SSRIs",
            nl: "SSRI's"
          },
          {
            en: "Tricyclic antidepressants",
            es: "Antidepresivos tricíclicos",
            de: "Trizyklische Antidepressiva",
            nl: "Tricyclische antidepressiva"
          },
          {
            en: "MAOIs",
            es: "IMAO",
            de: "MAOIs",
            nl: "MAOI's"
          },
          {
            en: "SNRIs",
            es: "IRSN",
            de: "SNRIs",
            nl: "SNRI's"
          }
        ],
        correct: 1,
        explanation: {
          en: "Tricyclic antidepressants commonly cause weight gain and sedation due to their antihistaminic properties and effects on multiple neurotransmitter systems.",
          es: "Los antidepresivos tricíclicos comúnmente causan aumento de peso y sedación debido a sus propiedades antihistamínicas y efectos en múltiples sistemas de neurotransmisores.",
          de: "Trizyklische Antidepressiva verursachen häufig Gewichtszunahme und Sedierung aufgrund ihrer antihistaminergen Eigenschaften und Effekte auf multiple Neurotransmittersysteme.",
          nl: "Tricyclische antidepressiva veroorzaken vaak gewichtstoename en sedatie vanwege hun antihistaminerge eigenschappen en effecten op meerdere neurotransmittersystemen."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of morphine and other opioids?",
          es: "¿Cuál es el mecanismo de acción principal de la morfina y otros opioides?",
          de: "Was ist der primäre Wirkungsmechanismus von Morphin und anderen Opioiden?",
          nl: "Wat is het primaire werkingsmechanisme van morfine en andere opioïden?"
        },
        options: [
          {
            en: "Block sodium channels",
            es: "Bloquear canales de sodio",
            de: "Blockieren Natriumkanäle",
            nl: "Blokkeren natriumkanalen"
          },
          {
            en: "Activate opioid receptors (mu, delta, kappa)",
            es: "Activar receptores opioides (mu, delta, kappa)",
            de: "Aktivieren Opioid-Rezeptoren (mu, delta, kappa)",
            nl: "Activeren opioïdreceptoren (mu, delta, kappa)"
          },
          {
            en: "Inhibit COX enzymes",
            es: "Inhibir enzimas COX",
            de: "Hemmen COX-Enzyme",
            nl: "Remmen COX-enzymen"
          },
          {
            en: "Block GABA receptors",
            es: "Bloquear receptores GABA",
            de: "Blockieren GABA-Rezeptoren",
            nl: "Blokkeren GABA-receptoren"
          }
        ],
        correct: 1,
        explanation: {
          en: "Opioids work by binding to and activating opioid receptors (primarily mu, delta, and kappa) in the central nervous system, modulating pain transmission and perception.",
          es: "Los opioides funcionan uniéndose y activando los receptores opioides (principalmente mu, delta y kappa) en el sistema nervioso central, modulando la transmisión y percepción del dolor.",
          de: "Opioide wirken durch Bindung an und Aktivierung von Opioid-Rezeptoren (hauptsächlich mu, delta und kappa) im zentralen Nervensystem und modulieren Schmerzübertragung und -wahrnehmung.",
          nl: "Opioïden werken door binding aan en activering van opioïdreceptoren (voornamelijk mu, delta en kappa) in het centrale zenuwstelsel, waardoor pijnoverdracht en -waarneming worden gemoduleerd."
        }
      },
      {
        question: {
          en: "Which medication requires therapeutic drug monitoring due to its narrow therapeutic index?",
          es: "¿Qué medicamento requiere monitoreo terapéutico de fármacos debido a su índice terapéutico estrecho?",
          de: "Welches Medikament erfordert therapeutisches Arzneimittelmonitoring aufgrund seines schmalen therapeutischen Index?",
          nl: "Welk medicijn vereist therapeutische geneesmiddelmonitoring vanwege zijn smalle therapeutische index?"
        },
        options: [
          {
            en: "Amoxicillin",
            es: "Amoxicilina",
            de: "Amoxicillin",
            nl: "Amoxicilline"
          },
          {
            en: "Lithium",
            es: "Litio",
            de: "Lithium",
            nl: "Lithium"
          },
          {
            en: "Acetaminophen",
            es: "Acetaminofén",
            de: "Acetaminophen",
            nl: "Acetaminophen"
          },
          {
            en: "Ibuprofen",
            es: "Ibuprofeno",
            de: "Ibuprofen",
            nl: "Ibuprofen"
          }
        ],
        correct: 1,
        explanation: {
          en: "Lithium has a very narrow therapeutic window between effective and toxic levels, requiring regular monitoring of serum levels to ensure safety and efficacy.",
          es: "El litio tiene una ventana terapéutica muy estrecha entre niveles efectivos y tóxicos, requiriendo monitoreo regular de los niveles séricos para asegurar seguridad y eficacia.",
          de: "Lithium hat ein sehr schmales therapeutisches Fenster zwischen wirksamen und toxischen Spiegeln und erfordert regelmäßige Überwachung der Serumspiegel zur Gewährleistung von Sicherheit und Wirksamkeit.",
          nl: "Lithium heeft een zeer smal therapeutisch venster tussen effectieve en toxische spiegels, waardoor regelmatige monitoring van serumspiegels nodig is om veiligheid en effectiviteit te waarborgen."
        }
      },
      {
        question: {
          en: "What is the primary indication for prescribing probenecid?",
          es: "¿Cuál es la indicación principal para prescribir probenecid?",
          de: "Was ist die primäre Indikation für die Verschreibung von Probenecid?",
          nl: "Wat is de primaire indicatie voor het voorschrijven van probenecide?"
        },
        options: [
          {
            en: "Hypertension",
            es: "Hipertensión",
            de: "Hypertonie",
            nl: "Hypertensie"
          },
          {
            en: "Gout (to increase uric acid excretion)",
            es: "Gota (para aumentar la excreción de ácido úrico)",
            de: "Gicht (zur Erhöhung der Harnsäure-Ausscheidung)",
            nl: "Jicht (om urinezuur-uitscheiding te verhogen)"
          },
          {
            en: "Diabetes",
            es: "Diabetes",
            de: "Diabetes",
            nl: "Diabetes"
          },
          {
            en: "Depression",
            es: "Depresión",
            de: "Depression",
            nl: "Depressie"
          }
        ],
        correct: 1,
        explanation: {
          en: "Probenecid is a uricosuric agent that increases uric acid excretion by the kidneys, making it useful for preventing gout attacks in patients with chronic gout.",
          es: "El probenecid es un agente uricosúrico que aumenta la excreción de ácido úrico por los riñones, siendo útil para prevenir ataques de gota en pacientes con gota crónica.",
          de: "Probenecid ist ein urikosurisches Mittel, das die Harnsäure-Ausscheidung durch die Nieren erhöht und daher nützlich zur Verhinderung von Gichtanfällen bei Patienten mit chronischer Gicht ist.",
          nl: "Probenecide is een uricosureticum dat urinezuur-uitscheiding door de nieren verhoogt, waardoor het nuttig is voor het voorkomen van jichtaanvallen bij patiënten met chronische jicht."
        }
      },
      {
        question: {
          en: "Which medication is contraindicated in pregnancy due to teratogenic effects?",
          es: "¿Qué medicamento está contraindicado en el embarazo debido a efectos teratogénicos?",
          de: "Welches Medikament ist in der Schwangerschaft aufgrund teratogener Effekte kontraindiziert?",
          nl: "Welk medicijn is gecontraïndiceerd tijdens zwangerschap vanwege teratogene effecten?"
        },
        options: [
          {
            en: "Acetaminophen",
            es: "Acetaminofén",
            de: "Acetaminophen",
            nl: "Acetaminophen"
          },
          {
            en: "Warfarin",
            es: "Warfarina",
            de: "Warfarin",
            nl: "Warfarine"
          },
          {
            en: "Insulin",
            es: "Insulina",
            de: "Insulin",
            nl: "Insuline"
          },
          {
            en: "Penicillin",
            es: "Penicilina",
            de: "Penicillin",
            nl: "Penicilline"
          }
        ],
        correct: 1,
        explanation: {
          en: "Warfarin crosses the placenta and can cause fetal bleeding, bone defects, and central nervous system abnormalities. Heparin is preferred for anticoagulation during pregnancy.",
          es: "La warfarina cruza la placenta y puede causar sangrado fetal, defectos óseos y anormalidades del sistema nervioso central. La heparina se prefiere para la anticoagulación durante el embarazo.",
          de: "Warfarin durchquert die Plazenta und kann fetale Blutungen, Knochendefekte und Anomalien des zentralen Nervensystems verursachen. Heparin wird für die Antikoagulation während der Schwangerschaft bevorzugt.",
          nl: "Warfarine passeert de placenta en kan foetale bloedingen, botdefecten en afwijkingen van het centrale zenuwstelsel veroorzaken. Heparine heeft de voorkeur voor antistolling tijdens zwangerschap."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of nitroglycerin?",
          es: "¿Cuál es el mecanismo de acción principal de la nitroglicerina?",
          de: "Was ist der primäre Wirkungsmechanismus von Nitroglycerin?",
          nl: "Wat is het primaire werkingsmechanisme van nitroglycerine?"
        },
        options: [
          {
            en: "Block calcium channels",
            es: "Bloquear canales de calcio",
            de: "Blockieren Kalziumkanäle",
            nl: "Blokkeren calciumkanalen"
          },
          {
            en: "Release nitric oxide causing vasodilation",
            es: "Liberar óxido nítrico causando vasodilatación",
            de: "Freisetzung von Stickstoffmonoxid verursacht Vasodilatation",
            nl: "Vrijgave van stikstofmonoxide veroorzaakt vasodilatatie"
          },
          {
            en: "Block beta-adrenergic receptors",
            es: "Bloquear receptores beta-adrenérgicos",
            de: "Blockieren Beta-adrenerge Rezeptoren",
            nl: "Blokkeren bèta-adrenerge receptoren"
          },
          {
            en: "Inhibit ACE enzyme",
            es: "Inhibir la enzima ECA",
            de: "Hemmen ACE-Enzym",
            nl: "Remmen ACE-enzym"
          }
        ],
        correct: 1,
        explanation: {
          en: "Nitroglycerin works by releasing nitric oxide, which activates guanylate cyclase, leading to vasodilation and reduced cardiac preload, making it effective for angina.",
          es: "La nitroglicerina funciona liberando óxido nítrico, que activa la guanilato ciclasa, llevando a vasodilatación y reducción de la precarga cardíaca, siendo efectiva para la angina.",
          de: "Nitroglycerin wirkt durch Freisetzung von Stickstoffmonoxid, das Guanylatcyclase aktiviert, was zu Vasodilatation und reduzierter kardialer Vorlast führt und es bei Angina wirksam macht.",
          nl: "Nitroglycerine werkt door stikstofmonoxide vrij te geven, dat guanylaatcyclase activeert, wat leidt tot vasodilatatie en verminderde cardiale preload, waardoor het effectief is voor angina."
        }
      },
      {
        question: {
          en: "Which medication is most commonly associated with causing Stevens-Johnson syndrome?",
          es: "¿Qué medicamento se asocia más comúnmente con causar síndrome de Stevens-Johnson?",
          de: "Welches Medikament wird am häufigsten mit der Verursachung des Stevens-Johnson-Syndroms assoziiert?",
          nl: "Welk medicijn wordt het meest geassocieerd met het veroorzaken van Stevens-Johnson-syndroom?"
        },
        options: [
          {
            en: "Acetaminophen",
            es: "Acetaminofén",
            de: "Acetaminophen",
            nl: "Acetaminophen"
          },
          {
            en: "Allopurinol",
            es: "Alopurinol",
            de: "Allopurinol",
            nl: "Allopurinol"
          },
          {
            en: "Insulin",
            es: "Insulina",
            de: "Insulin",
            nl: "Insuline"
          },
          {
            en: "Metformin",
            es: "Metformina",
            de: "Metformin",
            nl: "Metformine"
          }
        ],
        correct: 1,
        explanation: {
          en: "Allopurinol is one of the medications most commonly associated with Stevens-Johnson syndrome, a severe cutaneous adverse reaction. Genetic testing for HLA-B*5801 is recommended before starting allopurinol in certain populations.",
          es: "El alopurinol es uno de los medicamentos más comúnmente asociados con el síndrome de Stevens-Johnson, una reacción adversa cutánea severa. Se recomienda la prueba genética para HLA-B*5801 antes de iniciar alopurinol en ciertas poblaciones.",
          de: "Allopurinol ist eines der Medikamente, die am häufigsten mit dem Stevens-Johnson-Syndrom assoziiert werden, einer schweren kutanen Nebenwirkung. Gentests für HLA-B*5801 werden vor Beginn von Allopurinol in bestimmten Populationen empfohlen.",
          nl: "Allopurinol is een van de medicijnen die het meest geassocieerd worden met Stevens-Johnson-syndroom, een ernstige cutane bijwerking. Genetische testen voor HLA-B*5801 worden aanbevolen voordat allopurinol wordt gestart in bepaalde populaties."
        }
      },
      {
        question: {
          en: "Which drug class is known for causing a dry, persistent cough as a common side effect?",
          es: "¿Qué clase de fármacos es conocida por causar tos seca y persistente como efecto secundario común?",
          de: "Welche Arzneimittelklasse ist bekannt dafür, trockenen, anhaltenden Husten als häufige Nebenwirkung zu verursachen?",
          nl: "Welke geneesmiddelklasse staat bekend om het veroorzaken van droge, aanhoudende hoest als veelvoorkomende bijwerking?"
        },
        options: [
          { en: "ACE inhibitors", es: "Inhibidores de la ECA", de: "ACE-Hemmer", nl: "ACE-remmers" },
          { en: "Beta-blockers", es: "Betabloqueantes", de: "Betablocker", nl: "Bètablokkers" },
          { en: "Calcium channel blockers", es: "Bloqueadores de canales de calcio", de: "Kalziumkanalblocker", nl: "Calciumkanaalblokkers" },
          { en: "Diuretics", es: "Diuréticos", de: "Diuretika", nl: "Diuretica" }
        ],
        correct: 0,
        explanation: {
          en: "ACE inhibitors commonly cause a dry, persistent cough due to increased bradykinin levels. This side effect occurs in about 10-20% of patients and may require switching to an ARB (angiotensin receptor blocker).",
          es: "Los inhibidores de la ECA comúnmente causan tos seca y persistente debido a niveles aumentados de bradicinina. Este efecto secundario ocurre en aproximadamente 10-20% de los pacientes y puede requerir cambiar a un ARA II (bloqueador del receptor de angiotensina).",
          de: "ACE-Hemmer verursachen häufig trockenen, anhaltenden Husten aufgrund erhöhter Bradykinin-Spiegel. Diese Nebenwirkung tritt bei etwa 10-20% der Patienten auf und kann einen Wechsel zu einem ARB (Angiotensin-Rezeptorblocker) erforderlich machen.",
          nl: "ACE-remmers veroorzaken vaak een droge, aanhoudende hoest vanwege verhoogde bradykinine-spiegels. Deze bijwerking komt voor bij ongeveer 10-20% van de patiënten en kan overstappen naar een ARB (angiotensine-receptorblokker) noodzakelijk maken."
        }
      },
      {
        question: {
          en: "What is the primary therapeutic use of naloxone?",
          es: "¿Cuál es el uso terapéutico principal de la naloxona?",
          de: "Was ist die primäre therapeutische Anwendung von Naloxon?",
          nl: "Wat is het primaire therapeutische gebruik van naloxon?"
        },
        options: [
          { en: "Alcohol withdrawal", es: "Abstinencia alcohólica", de: "Alkoholentzug", nl: "Alcoholontwenning" },
          { en: "Opioid overdose reversal", es: "Reversión de sobredosis de opioides", de: "Opioid-Überdosis-Umkehrung", nl: "Opioïd overdosis omkering" },
          { en: "Seizure control", es: "Control de convulsiones", de: "Anfallskontrolle", nl: "Epilepsiecontrole" },
          { en: "Pain management", es: "Manejo del dolor", de: "Schmerzbehandlung", nl: "Pijnbehandeling" }
        ],
        correct: 1,
        explanation: {
          en: "Naloxone is an opioid receptor antagonist used to reverse opioid overdoses. It rapidly displaces opioids from receptors and can restore normal breathing and consciousness in overdose situations.",
          es: "La naloxona es un antagonista de receptores opioides usado para revertir sobredosis de opioides. Desplaza rápidamente los opioides de los receptores y puede restaurar la respiración normal y la conciencia en situaciones de sobredosis.",
          de: "Naloxon ist ein Opioid-Rezeptor-Antagonist, der zur Umkehrung von Opioid-Überdosierungen verwendet wird. Es verdrängt schnell Opioide von den Rezeptoren und kann normale Atmung und Bewusstsein in Überdosierungssituationen wiederherstellen.",
          nl: "Naloxon is een opioïdreceptor-antagonist die wordt gebruikt om opioïd-overdoses om te keren. Het verdringt snel opioïden van receptoren en kan normale ademhaling en bewustzijn herstellen bij overdosis-situaties."
        }
      },
      {
        question: {
          en: "Which medication can cause 'gray baby syndrome' in newborns?",
          es: "¿Qué medicamento puede causar 'síndrome del bebé gris' en recién nacidos?",
          de: "Welches Medikament kann das 'Graue-Baby-Syndrom' bei Neugeborenen verursachen?",
          nl: "Welk medicijn kan 'grijze baby syndroom' veroorzaken bij pasgeborenen?"
        },
        options: [
          { en: "Amoxicillin", es: "Amoxicilina", de: "Amoxicillin", nl: "Amoxicilline" },
          { en: "Chloramphenicol", es: "Cloranfenicol", de: "Chloramphenicol", nl: "Chlooramfenicol" },
          { en: "Penicillin", es: "Penicilina", de: "Penicillin", nl: "Penicilline" },
          { en: "Erythromycin", es: "Eritromicina", de: "Erythromycin", nl: "Erytromycine" }
        ],
        correct: 1,
        explanation: {
          en: "Chloramphenicol can cause gray baby syndrome in newborns due to immature liver enzymes that cannot metabolize the drug effectively, leading to accumulation and toxicity with cyanosis and cardiovascular collapse.",
          es: "El cloranfenicol puede causar síndrome del bebé gris en recién nacidos debido a enzimas hepáticas inmaduras que no pueden metabolizar el fármaco efectivamente, llevando a acumulación y toxicidad con cianosis y colapso cardiovascular.",
          de: "Chloramphenicol kann bei Neugeborenen das Graue-Baby-Syndrom verursachen aufgrund unreifer Leberenzyme, die das Medikament nicht effektiv metabolisieren können, was zu Ansammlung und Toxizität mit Zyanose und kardiovaskulärem Kollaps führt.",
          nl: "Chlooramfenicol kan grijze baby syndroom veroorzaken bij pasgeborenen vanwege onrijpe leverenzymen die het medicijn niet effectief kunnen metaboliseren, wat leidt tot ophoping en toxiciteit met cyanose en cardiovasculaire collaps."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of statins?",
          es: "¿Cuál es el mecanismo de acción principal de las estatinas?",
          de: "Was ist der primäre Wirkungsmechanismus von Statinen?",
          nl: "Wat is het primaire werkingsmechanisme van statines?"
        },
        options: [
          { en: "Block cholesterol absorption", es: "Bloquear absorción de colesterol", de: "Blockieren Cholesterinabsorption", nl: "Blokkeren cholesterolabsorptie" },
          { en: "Inhibit HMG-CoA reductase", es: "Inhibir HMG-CoA reductasa", de: "Hemmen HMG-CoA-Reduktase", nl: "Remmen HMG-CoA-reductase" },
          { en: "Increase bile acid excretion", es: "Aumentar excreción de ácidos biliares", de: "Erhöhen Gallensäure-Ausscheidung", nl: "Verhogen galzuur-uitscheiding" },
          { en: "Block LDL receptors", es: "Bloquear receptores LDL", de: "Blockieren LDL-Rezeptoren", nl: "Blokkeren LDL-receptoren" }
        ],
        correct: 1,
        explanation: {
          en: "Statins work by inhibiting HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis. This reduces cholesterol production in the liver and upregulates LDL receptors, lowering blood cholesterol levels.",
          es: "Las estatinas funcionan inhibiendo la HMG-CoA reductasa, la enzima limitante de la velocidad en la síntesis de colesterol. Esto reduce la producción de colesterol en el hígado y regula al alza los receptores LDL, disminuyendo los niveles de colesterol en sangre.",
          de: "Statine wirken durch Hemmung der HMG-CoA-Reduktase, dem geschwindigkeitsbestimmenden Enzym in der Cholesterinsynthese. Dies reduziert die Cholesterinproduktion in der Leber und reguliert LDL-Rezeptoren hoch, wodurch die Blutcholesterinspiegel gesenkt werden.",
          nl: "Statines werken door HMG-CoA-reductase te remmen, het snelheidsbepalende enzym in cholesterolsynthese. Dit vermindert cholesterolproductie in de lever en reguleert LDL-receptoren omhoog, waardoor bloedcholesterolspiegels worden verlaagd."
        }
      },
      {
        question: {
          en: "Which antibiotic is associated with tendon rupture, especially the Achilles tendon?",
          es: "¿Qué antibiótico se asocia con ruptura de tendones, especialmente el tendón de Aquiles?",
          de: "Welches Antibiotikum wird mit Sehnenrissen assoziiert, besonders der Achillessehne?",
          nl: "Welk antibioticum wordt geassocieerd met peesruptuur, vooral de achillespees?"
        },
        options: [
          { en: "Amoxicillin", es: "Amoxicilina", de: "Amoxicillin", nl: "Amoxicilline" },
          { en: "Ciprofloxacin", es: "Ciprofloxacino", de: "Ciprofloxacin", nl: "Ciprofloxacine" },
          { en: "Azithromycin", es: "Azitromicina", de: "Azithromycin", nl: "Azitromycine" },
          { en: "Doxycycline", es: "Doxiciclina", de: "Doxycyclin", nl: "Doxycycline" }
        ],
        correct: 1,
        explanation: {
          en: "Fluoroquinolones like ciprofloxacin are associated with increased risk of tendon rupture, particularly the Achilles tendon. The risk is higher in elderly patients and those taking corticosteroids.",
          es: "Las fluoroquinolonas como ciprofloxacino se asocian con mayor riesgo de ruptura de tendones, particularmente el tendón de Aquiles. El riesgo es mayor en pacientes ancianos y aquellos que toman corticosteroides.",
          de: "Fluorchinolone wie Ciprofloxacin werden mit erhöhtem Risiko für Sehnenrisse assoziiert, besonders der Achillessehne. Das Risiko ist höher bei älteren Patienten und solchen, die Kortikosteroide einnehmen.",
          nl: "Fluorochinolonen zoals ciprofloxacine worden geassocieerd met verhoogd risico op peesruptuur, vooral de achillespees. Het risico is hoger bij oudere patiënten en degenen die corticosteroïden gebruiken."
        }
      },
      {
        question: {
          en: "What is the primary indication for prescribing spironolactone?",
          es: "¿Cuál es la indicación principal para prescribir espironolactona?",
          de: "Was ist die primäre Indikation für die Verschreibung von Spironolacton?",
          nl: "Wat is de primaire indicatie voor het voorschrijven van spironolacton?"
        },
        options: [
          { en: "Heart failure (potassium-sparing diuretic)", es: "Insuficiencia cardíaca (diurético ahorrador de potasio)", de: "Herzinsuffizienz (kaliumsparendes Diuretikum)", nl: "Hartfalen (kaliumsparend diureticum)" },
          { en: "Hypertension only", es: "Solo hipertensión", de: "Nur Hypertonie", nl: "Alleen hypertensie" },
          { en: "Diabetes", es: "Diabetes", de: "Diabetes", nl: "Diabetes" },
          { en: "Pain relief", es: "Alivio del dolor", de: "Schmerzlinderung", nl: "Pijnverlichting" }
        ],
        correct: 0,
        explanation: {
          en: "Spironolactone is a potassium-sparing diuretic that blocks aldosterone receptors. It's primarily used in heart failure to reduce mortality and morbidity, and also for resistant hypertension and hyperaldosteronism.",
          es: "La espironolactona es un diurético ahorrador de potasio que bloquea los receptores de aldosterona. Se usa principalmente en insuficiencia cardíaca para reducir mortalidad y morbilidad, y también para hipertensión resistente e hiperaldosteronismo.",
          de: "Spironolacton ist ein kaliumsparendes Diuretikum, das Aldosteron-Rezeptoren blockiert. Es wird hauptsächlich bei Herzinsuffizienz verwendet, um Mortalität und Morbidität zu reduzieren, und auch bei resistenter Hypertonie und Hyperaldosteronismus.",
          nl: "Spironolacton is een kaliumsparend diureticum dat aldosteronreceptoren blokkeert. Het wordt voornamelijk gebruikt bij hartfalen om mortaliteit en morbiditeit te verminderen, en ook voor resistente hypertensie en hyperaldosteronisme."
        }
      },
      {
        question: {
          en: "Which drug interaction increases the risk of rhabdomyolysis when combined with statins?",
          es: "¿Qué interacción medicamentosa aumenta el riesgo de rabdomiolisis cuando se combina con estatinas?",
          de: "Welche Arzneimittelwechselwirkung erhöht das Risiko einer Rhabdomyolyse in Kombination mit Statinen?",
          nl: "Welke geneesmiddelinteractie verhoogt het risico op rhabdomyolyse wanneer gecombineerd met statines?"
        },
        options: [
          { en: "Aspirin", es: "Aspirina", de: "Aspirin", nl: "Aspirine" },
          { en: "Gemfibrozil", es: "Gemfibrozil", de: "Gemfibrozil", nl: "Gemfibrozil" },
          { en: "Metformin", es: "Metformina", de: "Metformin", nl: "Metformine" },
          { en: "Lisinopril", es: "Lisinopril", de: "Lisinopril", nl: "Lisinopril" }
        ],
        correct: 1,
        explanation: {
          en: "Gemfibrozil significantly increases statin concentrations by inhibiting their metabolism, greatly increasing the risk of rhabdomyolysis. This combination should generally be avoided or used with extreme caution.",
          es: "El gemfibrozil aumenta significativamente las concentraciones de estatinas inhibiendo su metabolismo, aumentando enormemente el riesgo de rabdomiolisis. Esta combinación generalmente debe evitarse o usarse con extrema precaución.",
          de: "Gemfibrozil erhöht Statin-Konzentrationen signifikant durch Hemmung ihres Metabolismus und erhöht dadurch das Risiko einer Rhabdomyolyse stark. Diese Kombination sollte generell vermieden oder mit extremer Vorsicht verwendet werden.",
          nl: "Gemfibrozil verhoogt statine-concentraties significant door hun metabolisme te remmen, waardoor het risico op rhabdomyolyse sterk toeneemt. Deze combinatie moet over het algemeen worden vermeden of met extreme voorzichtigheid worden gebruikt."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of phenytoin in treating seizures?",
          es: "¿Cuál es el mecanismo de acción principal de la fenitoína en el tratamiento de convulsiones?",
          de: "Was ist der primäre Wirkungsmechanismus von Phenytoin bei der Behandlung von Anfällen?",
          nl: "Wat is het primaire werkingsmechanisme van fenytoïne bij de behandeling van epilepsie?"
        },
        options: [
          { en: "Block sodium channels", es: "Bloquear canales de sodio", de: "Blockieren Natriumkanäle", nl: "Blokkeren natriumkanalen" },
          { en: "Enhance GABA activity", es: "Potenciar actividad GABA", de: "GABA-Aktivität verstärken", nl: "GABA-activiteit versterken" },
          { en: "Block calcium channels", es: "Bloquear canales de calcio", de: "Blockieren Kalziumkanäle", nl: "Blokkeren calciumkanalen" },
          { en: "Inhibit glutamate release", es: "Inhibir liberación de glutamato", de: "Glutamat-Freisetzung hemmen", nl: "Glutamaat-afgifte remmen" }
        ],
        correct: 0,
        explanation: {
          en: "Phenytoin works by blocking voltage-gated sodium channels in neurons, preventing the rapid repetitive firing that characterizes seizure activity. This stabilizes neuronal membranes and prevents seizure propagation.",
          es: "La fenitoína funciona bloqueando los canales de sodio dependientes de voltaje en las neuronas, previniendo el disparo rápido repetitivo que caracteriza la actividad convulsiva. Esto estabiliza las membranas neuronales y previene la propagación de convulsiones.",
          de: "Phenytoin wirkt durch Blockierung spannungsgesteuerter Natriumkanäle in Neuronen und verhindert das schnelle repetitive Feuern, das Anfallsaktivität charakterisiert. Dies stabilisiert neuronale Membranen und verhindert Anfallsausbreitung.",
          nl: "Fenytoïne werkt door spanningsgestuurde natriumkanalen in neuronen te blokkeren, waardoor het snelle repetitieve vuren dat epileptische activiteit kenmerkt wordt voorkomen. Dit stabiliseert neuronale membranen en voorkomt aanvalverspreiding."
        }
      },
      {
        question: {
          en: "Which medication requires monitoring of thyroid function during long-term use?",
          es: "¿Qué medicamento requiere monitoreo de la función tiroidea durante uso a largo plazo?",
          de: "Welches Medikament erfordert Überwachung der Schilddrüsenfunktion bei Langzeitanwendung?",
          nl: "Welk medicijn vereist monitoring van schildklierfunctie tijdens langdurig gebruik?"
        },
        options: [
          { en: "Metformin", es: "Metformina", de: "Metformin", nl: "Metformine" },
          { en: "Amiodarone", es: "Amiodarona", de: "Amiodaron", nl: "Amiodaron" },
          { en: "Lisinopril", es: "Lisinopril", de: "Lisinopril", nl: "Lisinopril" },
          { en: "Atorvastatin", es: "Atorvastatina", de: "Atorvastatin", nl: "Atorvastatine" }
        ],
        correct: 1,
        explanation: {
          en: "Amiodarone contains high amounts of iodine and can cause both hyperthyroidism and hypothyroidism. Regular monitoring of thyroid function (TSH, T3, T4) is essential during treatment with amiodarone.",
          es: "La amiodarona contiene altas cantidades de yodo y puede causar tanto hipertiroidismo como hipotiroidismo. El monitoreo regular de la función tiroidea (TSH, T3, T4) es esencial durante el tratamiento con amiodarona.",
          de: "Amiodaron enthält hohe Mengen an Jod und kann sowohl Hyperthyreose als auch Hypothyreose verursachen. Regelmäßige Überwachung der Schilddrüsenfunktion (TSH, T3, T4) ist während der Behandlung mit Amiodaron wesentlich.",
          nl: "Amiodaron bevat hoge hoeveelheden jodium en kan zowel hyperthyreoïdie als hypothyreoïdie veroorzaken. Regelmatige monitoring van schildklierfunctie (TSH, T3, T4) is essentieel tijdens behandeling met amiodaron."
        }
      },
      {
        question: {
          en: "What is the primary concern with long-term proton pump inhibitor (PPI) use?",
          es: "¿Cuál es la principal preocupación con el uso a largo plazo de inhibidores de bomba de protones (IBP)?",
          de: "Was ist das Hauptanliegen bei Langzeitanwendung von Protonenpumpenhemmern (PPI)?",
          nl: "Wat is de hoofdzorg bij langdurig gebruik van protonpompremmers (PPI)?"
        },
        options: [
          { en: "Increased infection risk and nutrient deficiencies", es: "Mayor riesgo de infección y deficiencias nutricionales", de: "Erhöhtes Infektionsrisiko und Nährstoffmängel", nl: "Verhoogd infectierisico en voedingsstoffentekorten" },
          { en: "Immediate liver toxicity", es: "Toxicidad hepática inmediata", de: "Sofortige Lebertoxizität", nl: "Onmiddellijke levertoxiciteit" },
          { en: "Kidney stones", es: "Cálculos renales", de: "Nierensteine", nl: "Nierstenen" },
          { en: "Weight gain", es: "Aumento de peso", de: "Gewichtszunahme", nl: "Gewichtstoename" }
        ],
        correct: 0,
        explanation: {
          en: "Long-term PPI use can increase risk of infections (C. difficile, pneumonia), bone fractures, and nutrient deficiencies (B12, magnesium, iron) due to reduced gastric acid production affecting absorption and bacterial overgrowth.",
          es: "El uso a largo plazo de IBP puede aumentar el riesgo de infecciones (C. difficile, neumonía), fracturas óseas y deficiencias nutricionales (B12, magnesio, hierro) debido a la reducción de la producción de ácido gástrico que afecta la absorción y el crecimiento bacteriano excesivo.",
          de: "Langzeit-PPI-Anwendung kann das Risiko für Infektionen (C. difficile, Pneumonie), Knochenfrakturen und Nährstoffmängel (B12, Magnesium, Eisen) erhöhen aufgrund reduzierter Magensäureproduktion, die Absorption und bakterielles Überwachstum beeinflusst.",
          nl: "Langdurig PPI-gebruik kan het risico op infecties (C. difficile, pneumonie), botfracturen en voedingsstoffentekorten (B12, magnesium, ijzer) verhogen door verminderde maagazuurproductie die absorptie en bacteriële overgroei beïnvloedt."
        }
      },
      {
        question: {
          en: "Which medication is the antidote for acetaminophen (paracetamol) overdose?",
          es: "¿Qué medicamento es el antídoto para sobredosis de acetaminofén (paracetamol)?",
          de: "Welches Medikament ist das Antidot für Acetaminophen (Paracetamol) Überdosierung?",
          nl: "Welk medicijn is het tegengif voor acetaminophen (paracetamol) overdosis?"
        },
        options: [
          { en: "Naloxone", es: "Naloxona", de: "Naloxon", nl: "Naloxon" },
          { en: "N-acetylcysteine", es: "N-acetilcisteína", de: "N-Acetylcystein", nl: "N-acetylcysteïne" },
          { en: "Flumazenil", es: "Flumazenil", de: "Flumazenil", nl: "Flumazenil" },
          { en: "Activated charcoal", es: "Carbón activado", de: "Aktivkohle", nl: "Actieve kool" }
        ],
        correct: 1,
        explanation: {
          en: "N-acetylcysteine (NAC) is the specific antidote for acetaminophen overdose. It works by replenishing glutathione stores and providing alternative pathways for acetaminophen metabolism, preventing liver damage.",
          es: "La N-acetilcisteína (NAC) es el antídoto específico para sobredosis de acetaminofén. Funciona reponiendo las reservas de glutatión y proporcionando vías alternativas para el metabolismo del acetaminofén, previniendo daño hepático.",
          de: "N-Acetylcystein (NAC) ist das spezifische Antidot für Acetaminophen-Überdosierung. Es wirkt durch Wiederauffüllung der Glutathion-Speicher und Bereitstellung alternativer Wege für den Acetaminophen-Metabolismus, wodurch Leberschäden verhindert werden.",
          nl: "N-acetylcysteïne (NAC) is het specifieke tegengif voor acetaminophen-overdosis. Het werkt door glutathion-voorraden aan te vullen en alternatieve routes voor acetaminophen-metabolisme te bieden, waardoor leverschade wordt voorkomen."
        }
      },
      {
        question: {
          en: "Which medication is known for causing orange-red discoloration of body fluids?",
          es: "¿Qué medicamento es conocido por causar decoloración naranja-roja de los fluidos corporales?",
          de: "Welches Medikament ist bekannt dafür, orange-rote Verfärbung von Körperflüssigkeiten zu verursachen?",
          nl: "Welk medicijn staat bekend om het veroorzaken van oranje-rode verkleuring van lichaamsvloeistoffen?"
        },
        options: [
          { en: "Rifampin", es: "Rifampicina", de: "Rifampicin", nl: "Rifampicine" },
          { en: "Isoniazid", es: "Isoniazida", de: "Isoniazid", nl: "Isoniazide" },
          { en: "Ethambutol", es: "Etambutol", de: "Ethambutol", nl: "Ethambutol" },
          { en: "Streptomycin", es: "Estreptomicina", de: "Streptomycin", nl: "Streptomycine" }
        ],
        correct: 0,
        explanation: {
          en: "Rifampin commonly causes harmless orange-red discoloration of urine, tears, saliva, and sweat. Patients should be warned about this cosmetic effect, which can stain contact lenses and clothing.",
          es: "La rifampicina comúnmente causa decoloración naranja-roja inofensiva de orina, lágrimas, saliva y sudor. Los pacientes deben ser advertidos sobre este efecto cosmético, que puede manchar lentes de contacto y ropa.",
          de: "Rifampicin verursacht häufig harmlose orange-rote Verfärbung von Urin, Tränen, Speichel und Schweiß. Patienten sollten über diesen kosmetischen Effekt gewarnt werden, der Kontaktlinsen und Kleidung färben kann.",
          nl: "Rifampicine veroorzaakt vaak onschadelijke oranje-rode verkleuring van urine, tranen, speeksel en zweet. Patiënten moeten gewaarschuwd worden voor dit cosmetische effect, dat contactlenzen en kleding kan verkleuren."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/medicine', level5);
  }
})();
