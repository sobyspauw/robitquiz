// Egyptian Gods Quiz - Level 1: Basic Egyptian Mythology
(function() {
  const level1 = {
    name: {
      en: "Egyptian Gods Level 1",
      es: "Dioses Egipcios Nivel 1",
      de: "Ã„gyptische GÃ¶tter Stufe 1",
      nl: "Egyptische Goden Level 1"
    },
    questions: [
      {
        question: {
          en: "Who was Ra in Egyptian mythology?",
          es: "Â¿QuiÃ©n era Ra en la mitologÃ­a egipcia?",
          de: "Wer war Ra in der Ã¤gyptischen Mythologie?",
          nl: "Wie was Ra in de Egyptische mythologie?"
        },
        options: [
          { en: "The sun god", es: "El dios del sol", de: "Der Sonnengott", nl: "De zonnegod" },
          { en: "The god of water", es: "El dios del agua", de: "Der Wassergott", nl: "De watergod" },
          { en: "The god of war", es: "El dios de la guerra", de: "Der Kriegsgott", nl: "De oorlogsgod" },
          { en: "The god of love", es: "El dios del amor", de: "Der Liebesgott", nl: "De liefdesgod" }
        ],
        correct: 0,
        explanation: {
          en: "Ra was the ancient Egyptian sun god, one of the most important deities who was believed to sail across the sky in his solar boat each day.",
          es: "Ra era el dios del sol del antiguo Egipto, una de las deidades mÃ¡s importantes que se creÃ­a navegaba por el cielo en su barca solar cada dÃ­a.",
          de: "Ra war der altÃ¤gyptische Sonnengott, eine der wichtigsten Gottheiten, von der man glaubte, sie fahre tÃ¤glich in ihrem Sonnenboot Ã¼ber den Himmel.",
          nl: "Ra was de oude Egyptische zonnegod, een van de belangrijkste goden waarvan werd geloofd dat hij elke dag in zijn zonneboot over de hemel zeilde."
        }
      },
      {
        question: {
          en: "Which Egyptian god has the head of a jackal?",
          es: "Â¿QuÃ© dios egipcio tiene cabeza de chacal?",
          de: "Welcher Ã¤gyptische Gott hat den Kopf eines Schakals?",
          nl: "Welke Egyptische god heeft het hoofd van een jakhals?"
        },
        options: [
          { en: "Anubis", es: "Anubis", de: "Anubis", nl: "Anubis" },
          { en: "Horus", es: "Horus", de: "Horus", nl: "Horus" },
          { en: "Thoth", es: "Thot", de: "Thot", nl: "Thot" },
          { en: "Sobek", es: "Sobek", de: "Sobek", nl: "Sobek" }
        ],
        correct: 0,
        explanation: {
          en: "Anubis, the god of mummification and the afterlife, is depicted with a jackal head. He guided souls to the afterlife and protected the dead.",
          es: "Anubis, el dios de la momificaciÃ³n y la vida despuÃ©s de la muerte, se representa con cabeza de chacal. Guiaba las almas al mÃ¡s allÃ¡ y protegÃ­a a los muertos.",
          de: "Anubis, der Gott der Mumifizierung und des Jenseits, wird mit einem Schakalskopf dargestellt. Er fÃ¼hrte Seelen ins Jenseits und beschÃ¼tzte die Toten.",
          nl: "Anubis, de god van mummificatie en het hiernamaals, wordt afgebeeld met een jakhalshoofd. Hij gidste zielen naar het hiernamaals en beschermde de doden."
        }
      },
      {
        question: {
          en: "What animal was sacred to the goddess Bastet?",
          es: "Â¿QuÃ© animal era sagrado para la diosa Bastet?",
          de: "Welches Tier war der GÃ¶ttin Bastet heilig?",
          nl: "Welk dier was heilig voor de godin Bastet?"
        },
        options: [
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" },
          { en: "Dog", es: "Perro", de: "Hund", nl: "Hond" },
          { en: "Bird", es: "PÃ¡jaro", de: "Vogel", nl: "Vogel" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" }
        ],
        correct: 0,
        explanation: {
          en: "Bastet was the cat goddess, associated with protection, joy, dance, music, and family. Cats were considered sacred animals in ancient Egypt.",
          es: "Bastet era la diosa gato, asociada con protecciÃ³n, alegrÃ­a, danza, mÃºsica y familia. Los gatos eran considerados animales sagrados en el antiguo Egipto.",
          de: "Bastet war die KatzengÃ¶ttin, verbunden mit Schutz, Freude, Tanz, Musik und Familie. Katzen galten im alten Ã„gypten als heilige Tiere.",
          nl: "Bastet was de kattengodin, geassocieerd met bescherming, vreugde, dans, muziek en familie. Katten werden beschouwd als heilige dieren in het oude Egypte."
        }
      },
      {
        question: {
          en: "Who was the Egyptian god of wisdom and writing?",
          es: "Â¿QuiÃ©n era el dios egipcio de la sabidurÃ­a y la escritura?",
          de: "Wer war der Ã¤gyptische Gott der Weisheit und des Schreibens?",
          nl: "Wie was de Egyptische god van wijsheid en schrijven?"
        },
        options: [
          { en: "Thoth", es: "Thot", de: "Thot", nl: "Thot" },
          { en: "Ptah", es: "Ptah", de: "Ptah", nl: "Ptah" },
          { en: "Seth", es: "Set", de: "Seth", nl: "Seth" },
          { en: "Khnum", es: "Jnum", de: "Chnum", nl: "Chnoem" }
        ],
        correct: 0,
        explanation: {
          en: "Thoth was the god of wisdom, writing, hieroglyphs, science, magic, art, and judgment. He is often depicted with the head of an ibis bird.",
          es: "Thot era el dios de la sabidurÃ­a, escritura, jeroglÃ­ficos, ciencia, magia, arte y juicio. A menudo se representa con cabeza de ave ibis.",
          de: "Thot war der Gott der Weisheit, des Schreibens, der Hieroglyphen, der Wissenschaft, der Magie, der Kunst und des Urteils. Er wird oft mit dem Kopf eines Ibis-Vogels dargestellt.",
          nl: "Thot was de god van wijsheid, schrijven, hiÃ«rogliefen, wetenschap, magie, kunst en oordeel. Hij wordt vaak afgebeeld met het hoofd van een ibis-vogel."
        }
      },
      {
        question: {
          en: "Which goddess was considered the mother of all pharaohs?",
          es: "Â¿QuÃ© diosa era considerada la madre de todos los faraones?",
          de: "Welche GÃ¶ttin galt als Mutter aller Pharaonen?",
          nl: "Welke godin werd beschouwd als de moeder van alle farao's?"
        },
        options: [
          { en: "Isis", es: "Isis", de: "Isis", nl: "Isis" },
          { en: "Hathor", es: "Hathor", de: "Hathor", nl: "Hathor" },
          { en: "Nut", es: "Nut", de: "Nut", nl: "Noet" },
          { en: "Maat", es: "Maat", de: "Maat", nl: "Maat" }
        ],
        correct: 0,
        explanation: {
          en: "Isis was the goddess of magic, motherhood, and healing. She was considered the divine mother and protector of pharaohs throughout Egyptian history.",
          es: "Isis era la diosa de la magia, maternidad y curaciÃ³n. Era considerada la madre divina y protectora de los faraones a lo largo de la historia egipcia.",
          de: "Isis war die GÃ¶ttin der Magie, Mutterschaft und Heilung. Sie galt als gÃ¶ttliche Mutter und BeschÃ¼tzerin der Pharaonen in der gesamten Ã¤gyptischen Geschichte.",
          nl: "Isis was de godin van magie, moederschap en genezing. Ze werd beschouwd als de goddelijke moeder en beschermster van farao's door de Egyptische geschiedenis heen."
        }
      },
      {
        question: {
          en: "Which god had the head of a falcon?",
          es: "¿Qué dios tenía la cabeza de un halcón?",
          de: "Welcher Gott hatte den Kopf eines Falken?",
          nl: "Welke god had het hoofd van een valk?"
        },
        options: [
          { en: "Horus", es: "Horus", de: "Horus", nl: "Horus" },
          { en: "Set", es: "Set", de: "Set", nl: "Set" },
          { en: "Osiris", es: "Osiris", de: "Osiris", nl: "Osiris" },
          { en: "Amon", es: "Amón", de: "Amun", nl: "Amon" }
        ],
        correct: 0,
        explanation: {
          en: "Horus was the falcon-headed god of the sky, kingship, and protection. Pharaohs were believed to be the living embodiment of Horus.",
          es: "Horus era el dios con cabeza de halcón del cielo, la realeza y la protección. Se creía que los faraones eran la encarnación viviente de Horus.",
          de: "Horus war der falkenköpfige Gott des Himmels, des Königtums und des Schutzes. Man glaubte, die Pharaonen seien die lebende Verkörperung von Horus.",
          nl: "Horus was de valkenkoppige god van de hemel, het koningschap en bescherming. Men geloofde dat farao's de levende belichaming van Horus waren."
        }
      },
      {
        question: {
          en: "What was Osiris the god of?",
          es: "¿De qué era Osiris el dios?",
          de: "Wofür war Osiris der Gott?",
          nl: "Waarvan was Osiris de god?"
        },
        options: [
          { en: "The afterlife and rebirth", es: "El más allá y el renacimiento", de: "Das Jenseits und die Wiedergeburt", nl: "Het hiernamaals en wedergeboorte" },
          { en: "War and chaos", es: "La guerra y el caos", de: "Krieg und Chaos", nl: "Oorlog en chaos" },
          { en: "The desert", es: "El desierto", de: "Die Wüste", nl: "De woestijn" },
          { en: "Fire", es: "El fuego", de: "Das Feuer", nl: "Vuur" }
        ],
        correct: 0,
        explanation: {
          en: "Osiris was the god of the afterlife, death, and rebirth. He was also associated with agriculture and fertility, representing the cycle of life.",
          es: "Osiris era el dios del más allá, la muerte y el renacimiento. También estaba asociado con la agricultura y la fertilidad, representando el ciclo de la vida.",
          de: "Osiris war der Gott des Jenseits, des Todes und der Wiedergeburt. Er wurde auch mit Landwirtschaft und Fruchtbarkeit in Verbindung gebracht und repräsentierte den Kreislauf des Lebens.",
          nl: "Osiris was de god van het hiernamaals, de dood en wedergeboorte. Hij werd ook geassocieerd met landbouw en vruchtbaarheid, en vertegenwoordigde de cyclus van het leven."
        }
      },
      {
        question: {
          en: "Which goddess had a cow's head or cow horns?",
          es: "¿Qué diosa tenía cabeza de vaca o cuernos de vaca?",
          de: "Welche Göttin hatte einen Kuhkopf oder Kuhhörner?",
          nl: "Welke godin had een koeienkop of koeienhorens?"
        },
        options: [
          { en: "Hathor", es: "Hathor", de: "Hathor", nl: "Hathor" },
          { en: "Sekhmet", es: "Sejmet", de: "Sachmet", nl: "Sekhmet" },
          { en: "Nephthys", es: "Neftis", de: "Nephthys", nl: "Nephthys" },
          { en: "Tefnut", es: "Tefnut", de: "Tefnut", nl: "Tefnoet" }
        ],
        correct: 0,
        explanation: {
          en: "Hathor was the goddess of love, beauty, music, and motherhood. She was often depicted as a cow or with cow horns and a sun disk.",
          es: "Hathor era la diosa del amor, la belleza, la música y la maternidad. A menudo se representaba como una vaca o con cuernos de vaca y un disco solar.",
          de: "Hathor war die Göttin der Liebe, Schönheit, Musik und Mutterschaft. Sie wurde oft als Kuh oder mit Kuhhörnern und einer Sonnenscheibe dargestellt.",
          nl: "Hathor was de godin van liefde, schoonheid, muziek en moederschap. Ze werd vaak afgebeeld als een koe of met koeienhorens en een zonneschijf."
        }
      },
      {
        question: {
          en: "Who was the Egyptian god of chaos and storms?",
          es: "¿Quién era el dios egipcio del caos y las tormentas?",
          de: "Wer war der ägyptische Gott des Chaos und der Stürme?",
          nl: "Wie was de Egyptische god van chaos en stormen?"
        },
        options: [
          { en: "Set (Seth)", es: "Set (Seth)", de: "Set (Seth)", nl: "Set (Seth)" },
          { en: "Bes", es: "Bes", de: "Bes", nl: "Bes" },
          { en: "Geb", es: "Geb", de: "Geb", nl: "Geb" },
          { en: "Shu", es: "Shu", de: "Schu", nl: "Sjoe" }
        ],
        correct: 0,
        explanation: {
          en: "Set was the god of chaos, deserts, storms, and violence. He was both feared and respected, representing the untamed forces of nature.",
          es: "Set era el dios del caos, los desiertos, las tormentas y la violencia. Era temido y respetado, representando las fuerzas indomables de la naturaleza.",
          de: "Set war der Gott des Chaos, der Wüsten, Stürme und Gewalt. Er wurde sowohl gefürchtet als auch respektiert und repräsentierte die ungezähmten Kräfte der Natur.",
          nl: "Set was de god van chaos, woestijnen, stormen en geweld. Hij werd zowel gevreesd als gerespecteerd en vertegenwoordigde de ongetemde krachten van de natuur."
        }
      },
      {
        question: {
          en: "What did the goddess Maat represent?",
          es: "¿Qué representaba la diosa Maat?",
          de: "Was repräsentierte die Göttin Maat?",
          nl: "Wat vertegenwoordigde de godin Maat?"
        },
        options: [
          { en: "Truth and justice", es: "La verdad y la justicia", de: "Wahrheit und Gerechtigkeit", nl: "Waarheid en gerechtigheid" },
          { en: "Beauty and love", es: "La belleza y el amor", de: "Schönheit und Liebe", nl: "Schoonheid en liefde" },
          { en: "War and victory", es: "La guerra y la victoria", de: "Krieg und Sieg", nl: "Oorlog en overwinning" },
          { en: "Wealth and prosperity", es: "La riqueza y la prosperidad", de: "Reichtum und Wohlstand", nl: "Rijkdom en welvaart" }
        ],
        correct: 0,
        explanation: {
          en: "Maat was the goddess of truth, justice, balance, and cosmic order. Her feather was used in the afterlife to weigh against a person's heart.",
          es: "Maat era la diosa de la verdad, la justicia, el equilibrio y el orden cósmico. Su pluma se usaba en el más allá para pesar contra el corazón de una persona.",
          de: "Maat war die Göttin der Wahrheit, Gerechtigkeit, des Gleichgewichts und der kosmischen Ordnung. Ihre Feder wurde im Jenseits verwendet, um gegen das Herz einer Person gewogen zu werden.",
          nl: "Maat was de godin van waarheid, gerechtigheid, evenwicht en kosmische orde. Haar veer werd in het hiernamaals gebruikt om tegen iemands hart te wegen."
        }
      },
      {
        question: {
          en: "Which god had a crocodile head?",
          es: "¿Qué dios tenía cabeza de cocodrilo?",
          de: "Welcher Gott hatte einen Krokodilkopf?",
          nl: "Welke god had een krokodillenkop?"
        },
        options: [
          { en: "Sobek", es: "Sobek", de: "Sobek", nl: "Sobek" },
          { en: "Khnum", es: "Jnum", de: "Chnum", nl: "Chnoem" },
          { en: "Atum", es: "Atum", de: "Atum", nl: "Atoem" },
          { en: "Min", es: "Min", de: "Min", nl: "Min" }
        ],
        correct: 0,
        explanation: {
          en: "Sobek was the crocodile god associated with the Nile River, fertility, and military prowess. Crocodiles were both feared and worshipped in ancient Egypt.",
          es: "Sobek era el dios cocodrilo asociado con el río Nilo, la fertilidad y la destreza militar. Los cocodrilos eran temidos y adorados en el antiguo Egipto.",
          de: "Sobek war der Krokodilgott, der mit dem Nil, Fruchtbarkeit und militärischer Stärke verbunden war. Krokodile wurden im alten Ägypten sowohl gefürchtet als auch verehrt.",
          nl: "Sobek was de krokodillengod geassocieerd met de Nijl, vruchtbaarheid en militaire kracht. Krokodillen werden zowel gevreesd als aanbeden in het oude Egypte."
        }
      },
      {
        question: {
          en: "Who was the wife of Osiris?",
          es: "¿Quién era la esposa de Osiris?",
          de: "Wer war die Frau von Osiris?",
          nl: "Wie was de vrouw van Osiris?"
        },
        options: [
          { en: "Isis", es: "Isis", de: "Isis", nl: "Isis" },
          { en: "Nephthys", es: "Neftis", de: "Nephthys", nl: "Nephthys" },
          { en: "Hathor", es: "Hathor", de: "Hathor", nl: "Hathor" },
          { en: "Nut", es: "Nut", de: "Nut", nl: "Noet" }
        ],
        correct: 0,
        explanation: {
          en: "Isis was the wife of Osiris and mother of Horus. She was famous for her magical powers and her role in resurrecting Osiris after he was killed by Set.",
          es: "Isis era la esposa de Osiris y madre de Horus. Era famosa por sus poderes mágicos y su papel en resucitar a Osiris después de que fue asesinado por Set.",
          de: "Isis war die Frau von Osiris und Mutter von Horus. Sie war berühmt für ihre magischen Kräfte und ihre Rolle bei der Wiederbelebung von Osiris, nachdem er von Set getötet wurde.",
          nl: "Isis was de vrouw van Osiris en moeder van Horus. Ze was beroemd om haar magische krachten en haar rol bij het weer tot leven brengen van Osiris nadat hij door Set werd gedood."
        }
      },
      {
        question: {
          en: "What was Bes the protector of?",
          es: "¿De qué era protector Bes?",
          de: "Was beschützte Bes?",
          nl: "Waarvan was Bes de beschermer?"
        },
        options: [
          { en: "Homes and children", es: "Los hogares y los niños", de: "Häuser und Kinder", nl: "Huizen en kinderen" },
          { en: "Temples", es: "Los templos", de: "Tempel", nl: "Tempels" },
          { en: "The pharaoh only", es: "Solo el faraón", de: "Nur der Pharao", nl: "Alleen de farao" },
          { en: "The Nile River", es: "El río Nilo", de: "Der Nil", nl: "De Nijl" }
        ],
        correct: 0,
        explanation: {
          en: "Bes was a dwarf god who protected households, especially women and children. He was also associated with music, dance, and joyful celebrations.",
          es: "Bes era un dios enano que protegía los hogares, especialmente a las mujeres y los niños. También estaba asociado con la música, la danza y las celebraciones alegres.",
          de: "Bes war ein Zwerggott, der Haushalte schützte, insbesondere Frauen und Kinder. Er wurde auch mit Musik, Tanz und fröhlichen Feiern in Verbindung gebracht.",
          nl: "Bes was een dwergengod die huishoudens beschermde, vooral vrouwen en kinderen. Hij werd ook geassocieerd met muziek, dans en vrolijke vieringen."
        }
      },
      {
        question: {
          en: "Which god was depicted with a ram's head?",
          es: "¿Qué dios se representaba con cabeza de carnero?",
          de: "Welcher Gott wurde mit einem Widderkopf dargestellt?",
          nl: "Welke god werd afgebeeld met een ramskop?"
        },
        options: [
          { en: "Khnum", es: "Jnum", de: "Chnum", nl: "Chnoem" },
          { en: "Ptah", es: "Ptah", de: "Ptah", nl: "Ptah" },
          { en: "Montu", es: "Montu", de: "Month", nl: "Montoe" },
          { en: "Atum", es: "Atum", de: "Atum", nl: "Atoem" }
        ],
        correct: 0,
        explanation: {
          en: "Khnum was the ram-headed god who created human bodies on his potter's wheel. He was also the god of the Nile's source and fertility.",
          es: "Jnum era el dios con cabeza de carnero que creaba cuerpos humanos en su rueda de alfarero. También era el dios de la fuente del Nilo y la fertilidad.",
          de: "Chnum war der widderköpfige Gott, der menschliche Körper auf seiner Töpferscheibe erschuf. Er war auch der Gott der Nilquelle und der Fruchtbarkeit.",
          nl: "Chnoem was de ramskoppige god die menselijke lichamen creëerde op zijn pottenbakkersschijf. Hij was ook de god van de bron van de Nijl en vruchtbaarheid."
        }
      },
      {
        question: {
          en: "What goddess had a lioness head?",
          es: "¿Qué diosa tenía cabeza de leona?",
          de: "Welche Göttin hatte einen Löwinnenkopf?",
          nl: "Welke godin had een leeuwinnenkop?"
        },
        options: [
          { en: "Sekhmet", es: "Sejmet", de: "Sachmet", nl: "Sekhmet" },
          { en: "Bastet", es: "Bastet", de: "Bastet", nl: "Bastet" },
          { en: "Mut", es: "Mut", de: "Mut", nl: "Moet" },
          { en: "Neith", es: "Neit", de: "Neith", nl: "Neith" }
        ],
        correct: 0,
        explanation: {
          en: "Sekhmet was the fierce lioness goddess of war, healing, and plagues. She was known as 'the Powerful One' and was feared for her destructive rage.",
          es: "Sejmet era la feroz diosa leona de la guerra, la curación y las plagas. Era conocida como 'la Poderosa' y era temida por su ira destructiva.",
          de: "Sachmet war die wilde Löwinnengöttin des Krieges, der Heilung und der Plagen. Sie war als 'die Mächtige' bekannt und wurde für ihre zerstörerische Wut gefürchtet.",
          nl: "Sekhmet was de woeste leeuwinngodin van oorlog, genezing en plagen. Ze stond bekend als 'de Machtige' en werd gevreesd om haar vernietigende woede."
        }
      },
      {
        question: {
          en: "Who was the sky goddess whose body formed the heavens?",
          es: "¿Quién era la diosa del cielo cuyo cuerpo formaba los cielos?",
          de: "Wer war die Himmelsgöttin, deren Körper den Himmel bildete?",
          nl: "Wie was de hemelgodin wier lichaam de hemelen vormde?"
        },
        options: [
          { en: "Nut", es: "Nut", de: "Nut", nl: "Noet" },
          { en: "Geb", es: "Geb", de: "Geb", nl: "Geb" },
          { en: "Shu", es: "Shu", de: "Schu", nl: "Sjoe" },
          { en: "Tefnut", es: "Tefnut", de: "Tefnut", nl: "Tefnoet" }
        ],
        correct: 0,
        explanation: {
          en: "Nut was the goddess of the sky, often depicted as a woman arched over the earth. She swallowed the sun each evening and gave birth to it each morning.",
          es: "Nut era la diosa del cielo, a menudo representada como una mujer arqueada sobre la tierra. Tragaba el sol cada noche y lo daba a luz cada mañana.",
          de: "Nut war die Göttin des Himmels, oft dargestellt als eine Frau, die sich über die Erde wölbt. Sie verschluckte jeden Abend die Sonne und gebar sie jeden Morgen.",
          nl: "Noet was de godin van de hemel, vaak afgebeeld als een vrouw gebogen over de aarde. Ze slikte de zon elke avond in en baarde hem elke ochtend."
        }
      },
      {
        question: {
          en: "Which god was considered the king of all Egyptian gods?",
          es: "¿Qué dios era considerado el rey de todos los dioses egipcios?",
          de: "Welcher Gott galt als König aller ägyptischen Götter?",
          nl: "Welke god werd beschouwd als de koning van alle Egyptische goden?"
        },
        options: [
          { en: "Amun (Amun-Ra)", es: "Amón (Amón-Ra)", de: "Amun (Amun-Re)", nl: "Amon (Amon-Ra)" },
          { en: "Bes", es: "Bes", de: "Bes", nl: "Bes" },
          { en: "Geb", es: "Geb", de: "Geb", nl: "Geb" },
          { en: "Shu", es: "Shu", de: "Schu", nl: "Sjoe" }
        ],
        correct: 0,
        explanation: {
          en: "Amun, later merged with Ra as Amun-Ra, was the king of the gods. He was the patron deity of Thebes and one of the most powerful gods in ancient Egypt.",
          es: "Amón, más tarde fusionado con Ra como Amón-Ra, era el rey de los dioses. Era la deidad patrona de Tebas y uno de los dioses más poderosos del antiguo Egipto.",
          de: "Amun, später mit Ra als Amun-Re verschmolzen, war der König der Götter. Er war die Schutzgottheit von Theben und einer der mächtigsten Götter im alten Ägypten.",
          nl: "Amon, later samengevoegd met Ra als Amon-Ra, was de koning van de goden. Hij was de beschermgod van Thebe en een van de machtigste goden in het oude Egypte."
        }
      },
      {
        question: {
          en: "Who was Nephthys in Egyptian mythology?",
          es: "¿Quién era Neftis en la mitología egipcia?",
          de: "Wer war Nephthys in der ägyptischen Mythologie?",
          nl: "Wie was Nephthys in de Egyptische mythologie?"
        },
        options: [
          { en: "Goddess of mourning and the dead", es: "Diosa del luto y los muertos", de: "Göttin der Trauer und der Toten", nl: "Godin van rouw en de doden" },
          { en: "Goddess of harvest", es: "Diosa de la cosecha", de: "Göttin der Ernte", nl: "Godin van de oogst" },
          { en: "Goddess of the moon", es: "Diosa de la luna", de: "Göttin des Mondes", nl: "Godin van de maan" },
          { en: "Goddess of fortune", es: "Diosa de la fortuna", de: "Göttin des Glücks", nl: "Godin van het geluk" }
        ],
        correct: 0,
        explanation: {
          en: "Nephthys was the goddess of mourning, death, and protection of the dead. She was the sister of Isis, Osiris, and Set, and helped Isis resurrect Osiris.",
          es: "Neftis era la diosa del luto, la muerte y la protección de los muertos. Era hermana de Isis, Osiris y Set, y ayudó a Isis a resucitar a Osiris.",
          de: "Nephthys war die Göttin der Trauer, des Todes und des Schutzes der Toten. Sie war die Schwester von Isis, Osiris und Set und half Isis bei der Wiederbelebung von Osiris.",
          nl: "Nephthys was de godin van rouw, dood en bescherming van de doden. Ze was de zus van Isis, Osiris en Set, en hielp Isis om Osiris weer tot leven te brengen."
        }
      },
      {
        question: {
          en: "What was Ptah the god of?",
          es: "¿De qué era Ptah el dios?",
          de: "Wofür war Ptah der Gott?",
          nl: "Waarvan was Ptah de god?"
        },
        options: [
          { en: "Creation and craftsmen", es: "La creación y los artesanos", de: "Schöpfung und Handwerker", nl: "Schepping en ambachtslieden" },
          { en: "Rivers and floods", es: "Los ríos y las inundaciones", de: "Flüsse und Überschwemmungen", nl: "Rivieren en overstromingen" },
          { en: "Thunder and lightning", es: "El trueno y el relámpago", de: "Donner und Blitz", nl: "Donder en bliksem" },
          { en: "Dreams and sleep", es: "Los sueños y el sueño", de: "Träume und Schlaf", nl: "Dromen en slaap" }
        ],
        correct: 0,
        explanation: {
          en: "Ptah was the creator god and patron of craftsmen, architects, and artists. He was believed to have created the world through thought and speech.",
          es: "Ptah era el dios creador y patrón de los artesanos, arquitectos y artistas. Se creía que había creado el mundo a través del pensamiento y la palabra.",
          de: "Ptah war der Schöpfergott und Schutzpatron der Handwerker, Architekten und Künstler. Man glaubte, er habe die Welt durch Gedanken und Sprache erschaffen.",
          nl: "Ptah was de scheppergod en beschermheer van ambachtslieden, architecten en kunstenaars. Men geloofde dat hij de wereld had geschapen door gedachte en spraak."
        }
      },
      {
        question: {
          en: "What creature was Apophis in Egyptian mythology?",
          es: "¿Qué criatura era Apofis en la mitología egipcia?",
          de: "Welche Kreatur war Apophis in der ägyptischen Mythologie?",
          nl: "Welk wezen was Apophis in de Egyptische mythologie?"
        },
        options: [
          { en: "A giant serpent of chaos", es: "Una serpiente gigante del caos", de: "Eine riesige Chaosschlange", nl: "Een gigantische slang van chaos" },
          { en: "A sacred bull", es: "Un toro sagrado", de: "Ein heiliger Stier", nl: "Een heilige stier" },
          { en: "A golden eagle", es: "Un águila dorada", de: "Ein goldener Adler", nl: "Een gouden adelaar" },
          { en: "A white lion", es: "Un león blanco", de: "Ein weißer Löwe", nl: "Een witte leeuw" }
        ],
        correct: 0,
        explanation: {
          en: "Apophis (Apep) was a giant serpent representing chaos and darkness. He was Ra's greatest enemy, trying to swallow the sun god during his nightly journey through the underworld.",
          es: "Apofis (Apep) era una serpiente gigante que representaba el caos y la oscuridad. Era el mayor enemigo de Ra, intentando tragar al dios sol durante su viaje nocturno por el inframundo.",
          de: "Apophis (Apep) war eine riesige Schlange, die Chaos und Dunkelheit repräsentierte. Er war Ras größter Feind und versuchte, den Sonnengott während seiner nächtlichen Reise durch die Unterwelt zu verschlingen.",
          nl: "Apophis (Apep) was een gigantische slang die chaos en duisternis vertegenwoordigde. Hij was Ra's grootste vijand en probeerde de zonnegod te verzwelgen tijdens zijn nachtelijke reis door de onderwereld."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
