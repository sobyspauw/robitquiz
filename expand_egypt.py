import os
import re

base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\egypt'

categories = {
    "Cleopatra": [
        ("What dynasty did Cleopatra belong to?", "Ptolemaic Dynasty", "New Kingdom", "Old Kingdom", "Middle Kingdom", "Cleopatra VII was the last active ruler of the Ptolemaic Kingdom of Egypt, a Hellenistic dynasty founded by Ptolemy I."),
        ("What was Cleopatra's native language?", "Greek", "Egyptian", "Latin", "Aramaic", "Cleopatra spoke Greek as her native language, as the Ptolemaic dynasty was of Macedonian Greek origin."),
        ("Which Roman leader had a famous relationship with Cleopatra?", "Julius Caesar and Mark Antony", "Augustus only", "Pompey", "Cicero", "Cleopatra had famous relationships with both Julius Caesar and Mark Antony."),
        ("How did Cleopatra die?", "Snake bite (asp)", "Poison", "Murder", "Natural causes", "According to tradition, Cleopatra died from the bite of an asp (Egyptian cobra), though the exact cause remains debated."),
        ("At what age did Cleopatra become pharaoh?", "18 years old", "25 years old", "30 years old", "15 years old", "Cleopatra became co-ruler with her father at 14 and sole pharaoh at approximately 18 years old."),
        ("What city was Cleopatra's capital?", "Alexandria", "Cairo", "Thebes", "Memphis", "Alexandria, founded by Alexander the Great, was the capital of Ptolemaic Egypt and Cleopatra's seat of power."),
        ("How many languages could Cleopatra speak?", "Nine languages", "Two languages", "Five languages", "Three languages", "Cleopatra was highly educated and could speak nine languages, including Egyptian, Greek, Latin, and several others."),
        ("What was Cleopatra's son with Julius Caesar named?", "Caesarion", "Augustus", "Ptolemy", "Alexander", "Cleopatra's son with Julius Caesar was named Ptolemy XV Philopator Philometor Caesar, known as Caesarion."),
        ("Which Roman defeated Cleopatra and Mark Antony?", "Octavian (Augustus)", "Pompey", "Crassus", "Brutus", "Octavian (later Emperor Augustus) defeated Cleopatra and Mark Antony at the Battle of Actium in 31 BCE."),
        ("What was Cleopatra famous for regarding her intelligence?", "Political cunning and multilingual education", "Military strategy only", "Religious knowledge", "Mathematical skills", "Cleopatra was renowned for her political intelligence, diplomatic skills, and extensive education."),
        ("In what year did Cleopatra die?", "30 BCE", "50 BCE", "10 BCE", "40 BCE", "Cleopatra VII died in 30 BCE, ending the Ptolemaic dynasty and Egyptian independence."),
        ("What battle sealed Cleopatra's fate?", "Battle of Actium", "Battle of Alexandria", "Battle of Pharsalus", "Battle of Pelusium", "The naval Battle of Actium in 31 BCE was the decisive defeat that sealed Cleopatra and Mark Antony's fate."),
        ("How is Cleopatra often portrayed in ancient sources?", "As a seductress", "As a warrior", "As a priestess", "As a scholar only", "Ancient Roman sources often portrayed Cleopatra as a seductress, though modern scholarship recognizes her political acumen."),
        ("What was Cleopatra's full name?", "Cleopatra VII Philopator", "Cleopatra I", "Cleopatra Selene", "Cleopatra Thea", "Her full name was Cleopatra VII Philopator, meaning 'Cleopatra the Father-Loving Goddess'."),
        ("Who was Cleopatra's first co-ruler?", "Her brother Ptolemy XIII", "Her father Ptolemy XII", "Her son Caesarion", "Mark Antony", "Cleopatra initially ruled as co-regent with her younger brother Ptolemy XIII, whom she also married."),
        ("What happened to Cleopatra's children?", "Most were taken to Rome", "All died with her", "They ruled Egypt", "They escaped to Greece", "After Cleopatra's death, most of her children were taken to Rome; Caesarion was killed."),
        ("What was the Library of Alexandria's fate during Cleopatra's time?", "Parts were damaged in various conflicts", "Completely destroyed", "Fully preserved", "Never existed", "The Library of Alexandria suffered damage during conflicts in Cleopatra's era, though complete destruction came later."),
        ("What was Cleopatra's relationship with her sister Arsinoe?", "Rivals; Cleopatra had her killed", "Close allies", "Never met", "Co-rulers", "Cleopatra and her sister Arsinoe IV were rivals; Cleopatra eventually had Arsinoe executed."),
        ("What was unusual about Cleopatra among Ptolemaic rulers?", "She learned to speak Egyptian", "She was the oldest", "She refused to marry", "She lived the longest", "Unlike previous Ptolemaic rulers who only spoke Greek, Cleopatra learned to speak Egyptian."),
        ("How did Romans view Cleopatra?", "As a foreign threat to Rome", "As an ally", "As insignificant", "As a goddess", "Romans viewed Cleopatra as a dangerous foreign queen who threatened Roman values and power.")
    ],
    "Egyptian Art": [
        ("What is the Egyptian art style called where figures are shown from multiple viewpoints?", "Composite view or twisted perspective", "3D perspective", "Foreshortening", "Linear perspective", "Egyptian art used composite view, showing head and legs in profile while torso and eyes face forward."),
        ("What material were most Egyptian statues carved from?", "Stone (limestone, granite, sandstone)", "Wood", "Bronze", "Clay", "Most Egyptian statues were carved from stone, particularly limestone, granite, and sandstone."),
        ("What does the size of figures in Egyptian art indicate?", "Social importance and rank", "Actual physical size", "Age", "Wealth only", "In Egyptian art, the size of figures represented social hierarchy and importance, not physical dimensions."),
        ("What color represented life and rebirth in Egyptian art?", "Green", "Red", "Blue", "Yellow", "Green symbolized life, rebirth, and vegetation in Egyptian art and religion."),
        ("What is a cartouche?", "Oval frame containing royal names", "Type of crown", "Ceremonial weapon", "Temple decoration", "A cartouche is an oval or oblong shape containing hieroglyphs spelling out royal names."),
        ("What pigment created the famous Egyptian blue color?", "Copper calcium silicate", "Lapis lazuli", "Azurite", "Cobalt", "Egyptian blue was the first synthetic pigment, made from copper calcium silicate."),
        ("What is the canon of proportions in Egyptian art?", "Grid system for depicting human figures", "Color mixing rules", "Temple design rules", "Sculpture size standards", "The canon of proportions was a grid system ensuring consistent proportions in depicting human figures."),
        ("What material was used for Egyptian paintbrush bristles?", "Palm fibers or reeds", "Animal hair", "Feathers", "Cotton", "Egyptian brushes were made from palm fibers or chewed reed ends."),
        ("What is a funerary stele?", "Upright stone slab with inscriptions", "Tomb entrance", "Burial chamber", "Mummy case", "A stele (or stela) is an upright stone slab inscribed with text and images, often funerary in purpose."),
        ("What binding medium did Egyptians use for paint?", "Egg white or gum arabic", "Oil", "Wax", "Water only", "Egyptians used egg white, gum arabic, or beeswax as binding media for their pigments."),
        ("What is faience in Egyptian art?", "Glazed ceramic material", "Gold leaf", "Precious stone", "Type of paint", "Faience is a glazed non-clay ceramic material used for jewelry, amulets, and decorative objects."),
        ("What artistic convention showed the passage of time?", "Registers or horizontal bands", "Perspective", "Shading", "Size variation", "Egyptian artists showed sequences of events in horizontal registers or bands, read from bottom to top."),
        ("What is the Palette of Narmer?", "Ancient ceremonial cosmetic palette", "Painting board", "Color mixing guide", "Royal crown", "The Palette of Narmer is a significant ceremonial palette from c. 3100 BCE showing early Egyptian artistic conventions."),
        ("What material created black pigment?", "Carbon or charcoal", "Coal", "Obsidian powder", "Tar", "Black pigment was created from carbon or charcoal, often from burned organic material."),
        ("What is a ka statue?", "Statue housing the spirit of the deceased", "Royal portrait", "God statue", "Servant figure", "A ka statue provided a resting place for the ka (life force/spirit) of the deceased."),
        ("What artistic period is the Bust of Nefertiti from?", "Amarna Period", "Old Kingdom", "Middle Kingdom", "Late Period", "The famous Bust of Nefertiti is from the Amarna Period under Akhenaten's reign."),
        ("What is relief sculpture?", "Carving projecting from background", "Free-standing sculpture", "Sunken carving", "Painted surface", "Relief sculpture has figures carved to project from a background surface."),
        ("What is sunken relief?", "Carving recessed into surface", "Raised carving", "Painted relief", "3D sculpture", "Sunken relief has figures carved into the surface, creating recessed images."),
        ("What symbolized eternity in Egyptian art?", "Shen ring (circular rope)", "Ankh", "Was scepter", "Djed pillar", "The shen ring, a circle of rope with no beginning or end, symbolized eternity and protection."),
        ("What is the Book of the Dead?", "Funerary texts with illustrations", "Historical chronicle", "Religious law", "Medical text", "The Book of the Dead is a collection of illustrated funerary texts meant to guide the deceased through the afterlife.")
    ],
    "Egyptian Cities": [
        ("What was the ancient capital of Upper Egypt?", "Thebes (Luxor)", "Memphis", "Alexandria", "Cairo", "Thebes, modern Luxor, was the ancient capital of Upper Egypt and religious center."),
        ("What city was the capital of Lower Egypt?", "Memphis", "Thebes", "Alexandria", "Giza", "Memphis was the ancient capital of Lower Egypt and administrative center."),
        ("Who founded the city of Alexandria?", "Alexander the Great", "Ptolemy I", "Cleopatra", "Julius Caesar", "Alexander the Great founded Alexandria in 331 BCE."),
        ("What is modern Cairo built near?", "Ancient Memphis", "Ancient Thebes", "Ancient Alexandria", "Ancient Amarna", "Modern Cairo is built near the ruins of ancient Memphis."),
        ("What city did Akhenaten build as his new capital?", "Amarna (Akhetaten)", "Thebes", "Memphis", "Pi-Ramesses", "Akhenaten built the city of Akhetaten (Tell el-Amarna) as his new capital dedicated to Aten."),
        ("What was Karnak?", "Temple complex in Thebes", "City name", "Palace", "Pyramid site", "Karnak was a massive temple complex in Thebes, dedicated primarily to Amun-Ra."),
        ("What city contains the Valley of the Kings?", "Thebes/Luxor", "Memphis", "Alexandria", "Giza", "The Valley of the Kings is located near ancient Thebes, modern Luxor."),
        ("What was Heliopolis known for?", "Sun worship and religious learning", "Military base", "Trade center", "Royal tombs", "Heliopolis was a major religious center dedicated to sun worship and priestly education."),
        ("What city was Ramesses II's capital?", "Pi-Ramesses", "Thebes", "Memphis", "Alexandria", "Ramesses II built Pi-Ramesses in the Nile Delta as his new capital."),
        ("What is Luxor Temple?", "Temple complex in ancient Thebes", "Pyramid", "Palace", "Fortress", "Luxor Temple is a large temple complex on the east bank of the Nile in ancient Thebes."),
        ("Where is the temple of Abu Simbel located?", "Southern Egypt, near Nubian border", "Cairo", "Alexandria", "Luxor", "Abu Simbel temples are in southern Egypt, originally carved into cliffs near Nubia."),
        ("What connected Karnak and Luxor temples?", "Avenue of Sphinxes", "Nile canal", "Royal road", "Underground tunnel", "The Avenue of Sphinxes, a 2.7 km processional way, connected Karnak and Luxor temples."),
        ("What was Tanis?", "Ancient city in Nile Delta", "Southern fortress", "Western oasis", "Eastern trading post", "Tanis was an important ancient city in the northeastern Nile Delta."),
        ("What is the modern name for ancient Thebes?", "Luxor", "Cairo", "Aswan", "Alexandria", "Ancient Thebes is now the modern city of Luxor."),
        ("What city housed the famous Library of Alexandria?", "Alexandria", "Memphis", "Thebes", "Cairo", "The Great Library of Alexandria was in the city of Alexandria."),
        ("What was special about the city of Elephantine?", "Island city and trade gateway", "Largest city", "Religious center", "Military capital", "Elephantine was an island city at Aswan, serving as a trade gateway to Nubia."),
        ("Where is the temple of Philae located?", "Aswan area", "Cairo", "Alexandria", "Luxor", "The temple of Philae is located near Aswan, now on Agilkia Island after relocation."),
        ("What was Abydos famous for?", "Osiris cult center and royal necropolis", "Military fortress", "Trade port", "Agricultural center", "Abydos was one of Egypt's most sacred cities, center of Osiris worship and site of early royal tombs."),
        ("What destroyed much of ancient Alexandria?", "Earthquakes and sea level rise", "Fire only", "War", "Sandstorms", "Much of ancient Alexandria was destroyed by earthquakes and subsequently submerged by sea level changes."),
        ("What is Dendera known for?", "Temple of Hathor", "Great Pyramid", "Royal palace", "Military academy", "Dendera is famous for its well-preserved Temple of Hathor with the zodiac ceiling.")
    ],
    "Egyptian Gods": [
        ("Who was the sun god in Egyptian mythology?", "Ra (or Re)", "Osiris", "Anubis", "Horus", "Ra (Re) was the sun god and one of the most important deities in Egyptian religion."),
        ("What animal represents Anubis?", "Jackal", "Cat", "Falcon", "Crocodile", "Anubis, god of mummification and the afterlife, is depicted with a jackal head."),
        ("Who was the god of the afterlife and resurrection?", "Osiris", "Ra", "Set", "Thoth", "Osiris was god of the afterlife, death, life, and resurrection."),
        ("What goddess had a cat form?", "Bastet", "Isis", "Hathor", "Sekhmet", "Bastet was the cat goddess associated with protection, fertility, and motherhood."),
        ("Who was the falcon-headed sky god?", "Horus", "Ra", "Thoth", "Anubis", "Horus was the falcon-headed god of kingship and the sky."),
        ("What god had an ibis head?", "Thoth", "Horus", "Anubis", "Set", "Thoth, god of wisdom and writing, was depicted with an ibis head."),
        ("Who was Osiris's treacherous brother?", "Set", "Horus", "Anubis", "Thoth", "Set was god of chaos and the desert, who murdered his brother Osiris."),
        ("What goddess was the mother of Horus?", "Isis", "Hathor", "Bastet", "Nut", "Isis was the goddess of magic and motherhood, wife of Osiris and mother of Horus."),
        ("What god weighed hearts in the afterlife?", "Anubis", "Osiris", "Thoth", "Ma'at", "Anubis supervised the weighing of the heart ceremony in the afterlife judgment."),
        ("What goddess personified truth and justice?", "Ma'at", "Isis", "Hathor", "Nut", "Ma'at was the goddess of truth, justice, and cosmic order."),
        ("What god had a crocodile head?", "Sobek", "Set", "Anubis", "Horus", "Sobek was the crocodile god associated with the Nile and fertility."),
        ("Who was the goddess of the sky?", "Nut", "Geb", "Isis", "Hathor", "Nut was the goddess of the sky, often depicted arched over the earth."),
        ("What god represented the earth?", "Geb", "Nut", "Osiris", "Ra", "Geb was the god of the earth, often shown lying beneath sky goddess Nut."),
        ("What goddess had cow horns and sun disk?", "Hathor", "Isis", "Bastet", "Sekhmet", "Hathor, goddess of love and joy, was often shown with cow horns and a sun disk."),
        ("What god was depicted as a dwarf?", "Bes", "Ptah", "Khnum", "Min", "Bes was a dwarf god who protected households and childbirth."),
        ("What lion-headed goddess represented war?", "Sekhmet", "Bastet", "Hathor", "Isis", "Sekhmet was the lion-headed goddess of war and healing."),
        ("Who was the ram-headed creator god?", "Khnum", "Amun", "Ptah", "Atum", "Khnum was the ram-headed god who created humans on his potter's wheel."),
        ("What god was Aten?", "Sun disk deity of Akhenaten", "Moon god", "War god", "River god", "Aten was the sun disk deity promoted by Akhenaten as the supreme god."),
        ("Who recorded the judgment of the dead?", "Thoth", "Anubis", "Osiris", "Ma'at", "Thoth recorded the results of the heart-weighing ceremony."),
        ("What was Ammit?", "Devourer of unworthy souls", "Guardian deity", "Creation goddess", "Fertility god", "Ammit was the creature that devoured the hearts of those who failed the judgment of the dead.")
    ],
    "Hieroglyphs": [
        ("What are hieroglyphs?", "Ancient Egyptian writing system", "Egyptian gods", "Tomb decorations", "Pyramid designs", "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols."),
        ("What stone helped decode hieroglyphs?", "Rosetta Stone", "Pyramid Stone", "Sphinx Stone", "Nile Stone", "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs."),
        ("Who deciphered hieroglyphs?", "Jean-François Champollion", "Howard Carter", "Napoleon", "Ptolemy", "French scholar Jean-François Champollion deciphered hieroglyphs in 1822."),
        ("How many hieroglyphic symbols existed?", "Over 700", "26 letters", "100", "50", "Ancient Egyptian hieroglyphs included over 700 distinct symbols."),
        ("What direction could hieroglyphs be written?", "Any direction (left, right, up, down)", "Left to right only", "Right to left only", "Top to bottom only", "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction."),
        ("What is hieratic script?", "Cursive form of hieroglyphs", "Sacred hieroglyphs", "Foreign script", "Number system", "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents."),
        ("What is demotic script?", "Even more simplified Egyptian writing", "Sacred hieroglyphs", "Greek writing", "Royal script", "Demotic was an even more simplified script that developed later, used for business and literature."),
        ("What material did Egyptians write on?", "Papyrus", "Paper", "Clay tablets", "Animal skins", "Egyptians wrote on papyrus, a paper-like material made from papyrus plant."),
        ("What is a determinative in hieroglyphs?", "Symbol clarifying meaning of words", "Vowel marker", "Punctuation", "Number", "Determinatives are symbols placed at word ends to clarify meaning and category."),
        ("What symbol represents the sound 'n'?", "Water ripple", "Reed", "Owl", "Mouth", "The water ripple hieroglyph represented the sound 'n'."),
        ("What animal represents the sound 'm'?", "Owl", "Bird", "Snake", "Lion", "The owl hieroglyph represented the sound 'm'."),
        ("Did hieroglyphs represent only pictures?", "No, they were phonetic too", "Yes, only pictures", "Only sounds", "Only ideas", "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives."),
        ("What is a cartouche used for?", "Enclosing royal names", "Marking tomb entrances", "Decorative borders", "Mathematical symbols", "Cartouches are oval frames that enclosed hieroglyphs spelling royal names."),
        ("What does the ankh symbol mean?", "Life", "Death", "Power", "Water", "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs."),
        ("When did hieroglyphic writing end?", "Around 400 CE", "100 BCE", "1000 CE", "Still used today", "The last known hieroglyphic inscription dates to 394 CE."),
        ("What tool was used to write on papyrus?", "Reed pen", "Quill", "Brush", "Stylus", "Egyptians used reed pens cut and shaped for writing on papyrus."),
        ("What color ink was most common?", "Black and red", "Blue and green", "Only black", "Only red", "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis."),
        ("What is a phonogram?", "Symbol representing a sound", "Picture symbol", "Number symbol", "Punctuation", "Phonograms are hieroglyphs that represent sounds rather than objects or ideas."),
        ("What was hieroglyphic writing reserved for?", "Formal and sacred contexts", "All writing", "Letters only", "Numbers only", "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts."),
        ("What is a serekh?", "Rectangular frame with falcon containing royal name", "Type of cartouche", "Temple entrance", "Tomb decoration", "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.")
    ],
    "Mummification": [
        ("What is mummification?", "Preserving bodies for afterlife", "Burial ritual", "Tomb decoration", "Pyramid building", "Mummification is the process of preserving a corpse to prevent decay for the afterlife."),
        ("How long did mummification take?", "70 days", "7 days", "700 days", "30 days", "The complete mummification process took approximately 70 days."),
        ("What organ was left in the body?", "Heart", "Lungs", "Liver", "Brain", "The heart was left in the body as it was needed for the judgment of the dead."),
        ("What was done with the brain?", "Removed through the nose", "Preserved in body", "Placed in canopic jar", "Buried separately", "The brain was removed through the nose with a hook and discarded as unimportant."),
        ("What were canopic jars used for?", "Storing removed organs", "Holding oils", "Containing food", "Storing jewelry", "Canopic jars held the mummified internal organs (lungs, liver, stomach, intestines)."),
        ("What substance was used to dry the body?", "Natron salt", "Sand", "Water", "Oil", "Natron, a natural salt mixture, was used to desiccate the body."),
        ("What wrapped the mummy?", "Linen bandages", "Silk", "Cotton", "Papyrus", "Mummies were wrapped in hundreds of yards of linen bandages."),
        ("Who performed mummification?", "Priests and embalmers", "Pharaohs", "Family members", "Soldiers", "Specialized priests and embalmers performed the mummification ritual."),
        ("What protected the mummy?", "Sarcophagus and amulets", "Curses", "Guards", "Locks", "Sarcophagi (coffins) and protective amulets were placed with mummies."),
        ("What god oversaw mummification?", "Anubis", "Osiris", "Ra", "Horus", "Anubis, the jackal-headed god, was the patron of mummification and embalming."),
        ("How many canopic jars were used?", "Four", "Seven", "Ten", "One", "Four canopic jars were used, each protected by a different deity."),
        ("What oils were applied to the body?", "Cedar oil, palm wine, myrrh", "Olive oil only", "Water", "Animal fat", "Various oils and resins including cedar oil, palm wine, and myrrh were used."),
        ("What was placed over the mummy's face?", "Funeral mask", "Cloth only", "Gold coins", "Flowers", "A funeral mask, sometimes gold for royalty, was placed over the mummy's face."),
        ("What book was buried with mummies?", "Book of the Dead", "Book of Kings", "Book of Life", "Book of Gods", "The Book of the Dead, containing spells and guidance, was often buried with mummies."),
        ("What position were mummies placed in?", "Extended on back", "Sitting up", "Fetal position", "Standing", "Most mummies were placed extended on their backs in coffins."),
        ("What animals were also mummified?", "Cats, dogs, crocodiles, birds, bulls", "Only cats", "No animals", "Only sacred bulls", "Egyptians mummified many animals including cats, dogs, crocodiles, ibises, and bulls."),
        ("What incision was made during mummification?", "Left side of abdomen", "Chest", "Back", "Right side", "A cut was made in the left side of the abdomen to remove internal organs."),
        ("What closed the incision?", "Wax or resin seal", "Stitches", "Bandages only", "Left open", "The abdominal incision was covered with a wax or resin plate."),
        ("What prayers were recited?", "Spells from Book of the Dead", "Hymns to Ra", "Royal decrees", "None", "Priests recited protective spells from funerary texts during mummification."),
        ("Why was mummification important?", "Body needed for afterlife", "Religious law", "Preventing disease", "Honoring pharaohs only", "Egyptians believed the preserved body was necessary for the soul to have eternal life.")
    ],
    "Nile Culture": [
        ("What direction does the Nile flow?", "South to north", "North to south", "East to west", "West to east", "The Nile River flows from south to north, from African interior to Mediterranean Sea."),
        ("What caused annual Nile flooding?", "Monsoon rains in Ethiopian highlands", "Melting snow", "Mediterranean tides", "Underground springs", "Annual monsoon rains in Ethiopian highlands caused the Nile's predictable flooding."),
        ("What did Nile flooding deposit?", "Nutrient-rich silt", "Sand", "Rocks", "Salt", "The Nile flood deposited rich black silt that fertilized farmland."),
        ("What were the three Egyptian seasons?", "Akhet (flood), Peret (growth), Shemu (harvest)", "Spring, summer, fall", "Wet and dry", "Four equal seasons", "Egypt had three seasons: Akhet (inundation), Peret (growth), and Shemu (harvest)."),
        ("What is the Nile Delta?", "Fan-shaped area where Nile meets Mediterranean", "Nile source", "Nile canyon", "Nile tributary", "The Nile Delta is the fertile fan-shaped region where the river meets the Mediterranean."),
        ("What plant from the Nile was used for writing?", "Papyrus", "Palm", "Lotus", "Reed grass", "Papyrus, growing along the Nile, was processed into writing material."),
        ("What were Nile boats made from?", "Papyrus reeds or wood", "Stone", "Metal", "Clay", "Ancient Egyptian boats were made from bundled papyrus reeds or imported wood."),
        ("What god was associated with the Nile flood?", "Hapi", "Osiris", "Ra", "Sobek", "Hapi was the god of the annual Nile inundation."),
        ("What is the gift of the Nile?", "Egypt's fertility and civilization", "Gold deposits", "Fresh water only", "Transportation", "The Greek historian Herodotus called Egypt 'the gift of the Nile' due to the river's role in civilization."),
        ("What irrigation method did Egyptians use?", "Basin irrigation and shaduf", "Sprinklers", "Underground pipes", "Rain collection", "Egyptians used basin irrigation to trap flood water and shadufs to lift water."),
        ("What is a shaduf?", "Lever device for lifting water", "Boat type", "Irrigation channel", "Water storage", "A shaduf is a hand-operated lever device with bucket for lifting water from river to field."),
        ("What crops grew along the Nile?", "Wheat, barley, flax, vegetables", "Rice and corn", "Potatoes", "Grapes only", "Major crops included wheat (bread), barley (beer), flax (linen), and vegetables."),
        ("What dangerous animal lived in the Nile?", "Crocodiles and hippos", "Sharks", "Alligators", "Snakes only", "Nile crocodiles and hippopotamuses were dangerous animals in the river."),
        ("What material came from Nile reeds?", "Baskets, mats, sandals, boats", "Clothing only", "Tools", "Weapons", "Nile reeds were woven into baskets, mats, sandals, and bundled into boats."),
        ("Where does the Nile begin?", "Lake Victoria and Ethiopian highlands", "Mediterranean Sea", "Red Sea", "Sahara Desert", "The White Nile begins at Lake Victoria; the Blue Nile in Ethiopian highlands."),
        ("What is the longest river in the world?", "Nile River", "Amazon River", "Yangtze River", "Mississippi River", "The Nile is traditionally considered the world's longest river at about 4,135 miles."),
        ("What festival celebrated the Nile flood?", "Wepet Renpet (New Year)", "Opet Festival", "Sed Festival", "Harvest Festival", "Wepet Renpet (Opening of the Year) coincided with the Nile flood's arrival."),
        ("What fish was sacred in some Nile regions?", "Oxyrhynchus fish", "Catfish", "Salmon", "Trout", "The Oxyrhynchus fish was sacred in some regions, associated with Osiris mythology."),
        ("What measured Nile flood levels?", "Nilometer", "Flood gauge", "Water clock", "Pyramid markers", "Nilometers were structures with marked steps used to measure Nile flood levels."),
        ("What did Low Nile floods mean?", "Famine and hardship", "Good harvest", "War", "Religious celebration", "Insufficient flooding led to poor harvests and famine.")
    ],
    "Pharaohs": [
        ("What does 'pharaoh' mean?", "Great house", "God king", "Supreme ruler", "Royal palace", "Pharaoh derives from 'per-aa' meaning 'great house', referring to the royal palace."),
        ("Who was the first pharaoh to unite Egypt?", "Narmer (or Menes)", "Khufu", "Tutankhamun", "Ramesses", "Narmer (possibly same as Menes) united Upper and Lower Egypt around 3100 BCE."),
        ("What pharaoh built the Great Pyramid?", "Khufu (Cheops)", "Khafre", "Menkaure", "Sneferu", "Pharaoh Khufu built the Great Pyramid of Giza during the Old Kingdom."),
        ("Which pharaoh was the boy king?", "Tutankhamun", "Ramesses II", "Akhenaten", "Thutmose III", "Tutankhamun became pharaoh at about 9 years old and died around age 19."),
        ("Who was Egypt's first female pharaoh?", "Hatshepsut", "Cleopatra", "Nefertiti", "Sobekneferu", "Hatshepsut ruled as pharaoh (not just queen) during the New Kingdom."),
        ("What pharaoh built Abu Simbel?", "Ramesses II", "Khufu", "Tutankhamun", "Akhenaten", "Ramesses II built the massive rock temples at Abu Simbel."),
        ("Which pharaoh introduced monotheism?", "Akhenaten", "Tutankhamun", "Ramesses II", "Thutmose III", "Akhenaten attempted to establish monotheistic worship of Aten."),
        ("What was the double crown called?", "Pschent", "Hedjet", "Deshret", "Khepresh", "The Pschent was the double crown combining red and white crowns of Upper and Lower Egypt."),
        ("Who was known as 'Ramesses the Great'?", "Ramesses II", "Ramesses I", "Ramesses III", "Ramesses IV", "Ramesses II earned the epithet 'the Great' for his long reign and building projects."),
        ("What pharaoh's tomb was found intact?", "Tutankhamun", "Ramesses II", "Khufu", "Hatshepsut", "Tutankhamun's tomb, discovered by Howard Carter in 1922, was found largely intact."),
        ("How long did Ramesses II reign?", "66 years", "20 years", "40 years", "10 years", "Ramesses II reigned for an exceptionally long 66 years."),
        ("What was the crook and flail?", "Royal regalia symbols", "Farming tools", "Weapons", "Religious offerings", "The crook and flail were symbols of pharaonic authority and rulership."),
        ("Who expanded Egypt's empire the most?", "Thutmose III", "Ramesses II", "Akhenaten", "Tutankhamun", "Thutmose III is considered Egypt's greatest military pharaoh, expanding the empire significantly."),
        ("What dynasty was Tutankhamun from?", "18th Dynasty", "4th Dynasty", "12th Dynasty", "19th Dynasty", "Tutankhamun ruled during the 18th Dynasty of the New Kingdom."),
        ("What false beard did pharaohs wear?", "Ceremonial postiche beard", "Natural beard", "No beard", "Animal fur beard", "Pharaohs wore a ceremonial false beard called a postiche as symbol of divine authority."),
        ("Who was Akhenaten's wife?", "Nefertiti", "Cleopatra", "Hatshepsut", "Ankhesenamun", "Queen Nefertiti was Akhenaten's Great Royal Wife."),
        ("What pharaoh built the Step Pyramid?", "Djoser", "Khufu", "Sneferu", "Menkaure", "Djoser built the Step Pyramid at Saqqara, Egypt's first pyramid."),
        ("How were pharaohs viewed?", "As living gods", "As ordinary kings", "As priests", "As military leaders only", "Pharaohs were considered living gods, intermediaries between gods and people."),
        ("What was a pharaoh's soul called?", "Ka", "Ba", "Akh", "Ib", "The ka was one part of the soul, the life force that lived on after death."),
        ("Which pharaoh fought the Hittites?", "Ramesses II", "Thutmose III", "Akhenaten", "Tutankhamun", "Ramesses II fought the famous Battle of Kadesh against the Hittites.")
    ],
    "Pyramids": [
        ("What is the Great Pyramid also called?", "Pyramid of Khufu/Cheops", "Pyramid of Khafre", "Pyramid of Giza", "Pyramid of Egypt", "The Great Pyramid is also known as the Pyramid of Khufu (or Cheops in Greek)."),
        ("Where are the three main pyramids located?", "Giza plateau", "Luxor", "Cairo city center", "Saqqara", "The three famous pyramids of Khufu, Khafre, and Menkaure are on the Giza plateau."),
        ("What was the purpose of pyramids?", "Royal tombs and monuments", "Temples", "Observatories", "Fortresses", "Pyramids served as elaborate tombs and monuments for pharaohs."),
        ("What is the oldest pyramid?", "Step Pyramid of Djoser", "Great Pyramid", "Bent Pyramid", "Red Pyramid", "The Step Pyramid at Saqqara, built for Djoser, is Egypt's oldest pyramid."),
        ("Who designed the Step Pyramid?", "Imhotep", "Khufu", "Sneferu", "Hemiunu", "Imhotep, Djoser's vizier, is credited with designing the Step Pyramid."),
        ("How many pyramids are in Egypt?", "Over 100", "Three", "Ten", "Fifty", "Archaeologists have identified over 100 pyramids in Egypt."),
        ("What aligned the pyramids?", "Cardinal directions (north, south, east, west)", "Stars", "Rivers", "Random placement", "The pyramids are precisely aligned with the cardinal directions."),
        ("What covered the pyramids originally?", "Smooth white limestone casing", "Gold", "Paint", "Nothing", "Pyramids were originally covered in smooth, polished white limestone casing stones."),
        ("What is inside the Great Pyramid?", "Chambers and passageways", "Treasure", "Nothing", "Furniture", "The Great Pyramid contains chambers, galleries, and shafts, including the King's and Queen's Chambers."),
        ("How tall was the Great Pyramid originally?", "About 481 feet (146.5 meters)", "300 feet", "600 feet", "200 feet", "The Great Pyramid originally stood about 481 feet tall, now about 455 feet due to erosion."),
        ("How long did it take to build the Great Pyramid?", "About 20 years", "5 years", "100 years", "50 years", "Estimates suggest the Great Pyramid took approximately 20 years to build."),
        ("What is the Bent Pyramid?", "Pyramid with two different angles", "Collapsed pyramid", "Unfinished pyramid", "Smallest pyramid", "The Bent Pyramid at Dahshur has two distinct angles, changing partway up."),
        ("Who built the Bent Pyramid?", "Sneferu", "Khufu", "Djoser", "Khafre", "Pharaoh Sneferu built the Bent Pyramid during the 4th Dynasty."),
        ("What stone composes most pyramids?", "Limestone", "Granite", "Sandstone", "Marble", "Most pyramids are primarily constructed of limestone blocks."),
        ("What is the Red Pyramid?", "Egypt's first true smooth-sided pyramid", "Pyramid painted red", "Pyramid made of red stone", "Modern name for Great Pyramid", "The Red Pyramid at Dahshur is Egypt's first successful smooth-sided pyramid."),
        ("How were pyramid blocks moved?", "Sledges, rollers, ramps", "Cranes", "Wheels", "Aliens", "Blocks were moved using wooden sledges, rollers, ramps, and human labor."),
        ("What guards the Giza pyramids?", "Great Sphinx", "Temple", "Wall", "Statues", "The Great Sphinx guards the Giza pyramid complex."),
        ("How many blocks in the Great Pyramid?", "About 2.3 million", "100,000", "500,000", "10 million", "The Great Pyramid contains approximately 2.3 million stone blocks."),
        ("What was the pyramidion?", "Capstone at pyramid's apex", "Base stone", "Door", "Corner stone", "The pyramidion was the pointed capstone that topped the pyramid."),
        ("Are pyramids wonders of the world?", "Great Pyramid is the only surviving ancient wonder", "All pyramids are wonders", "No pyramids are wonders", "They're modern wonders", "The Great Pyramid of Giza is the only surviving structure of the Seven Wonders of the Ancient World.")
    ],
    "Valley of the Kings": [
        ("Where is the Valley of the Kings?", "West bank of Nile near Luxor/Thebes", "Giza", "Cairo", "Alexandria", "The Valley of the Kings is on the west bank of the Nile near ancient Thebes (modern Luxor)."),
        ("What period are most Valley tombs from?", "New Kingdom", "Old Kingdom", "Middle Kingdom", "Ptolemaic Period", "Most tombs in the Valley of the Kings date from the New Kingdom (16th-11th centuries BCE)."),
        ("How many tombs are in the Valley?", "Over 60", "Three", "Ten", "Hundreds", "Over 60 tombs and chambers have been discovered in the Valley of the Kings."),
        ("Who discovered Tutankhamun's tomb?", "Howard Carter", "Jean-François Champollion", "Flinders Petrie", "Auguste Mariette", "British archaeologist Howard Carter discovered Tutankhamun's tomb in 1922."),
        ("Why did pharaohs stop building pyramids?", "Security - pyramids attracted tomb robbers", "Too expensive", "Religious change", "Ran out of stone", "Pharaohs switched to hidden rock-cut tombs in the Valley to prevent robbery."),
        ("What was KV62?", "Tutankhamun's tomb designation", "Ramesses VI tomb", "Seti I tomb", "Empty tomb", "KV62 is the archaeological designation for Tutankhamun's tomb."),
        ("What decorated tomb walls?", "Paintings and hieroglyphs", "Mosaics", "Tapestries", "Nothing", "Tomb walls were decorated with colorful paintings and hieroglyphic texts."),
        ("What texts are in royal tombs?", "Book of the Dead, Amduat, Book of Gates", "Historical records", "Poetry", "Mathematical formulas", "Royal tombs contain funerary texts like the Amduat and Book of Gates guiding the deceased."),
        ("Who was buried in KV5?", "Sons of Ramesses II", "Tutankhamun", "Ramesses II", "Seti I", "KV5 is the tomb complex of many sons of Ramesses II, the largest in the valley."),
        ("What is the Valley of the Queens?", "Burial place for queens and royal children", "Alternative name for Valley of Kings", "Modern cemetery", "Temple complex", "The Valley of the Queens is a separate necropolis for queens and royal children."),
        ("What protected tombs from robbers?", "Hidden entrances, debris, false passages", "Guards", "Curses", "Magic spells", "Tombs had hidden entrances, were covered with debris, and some had false passages."),
        ("What famous curse is associated with the Valley?", "Curse of the pharaohs", "Mummy's curse", "Anubis's curse", "No curses", "The 'Curse of the Pharaohs' legend arose after Tutankhamun's tomb discovery."),
        ("What is Deir el-Medina?", "Village of tomb workers", "Temple", "Royal palace", "Pyramid site", "Deir el-Medina was the village where craftsmen who built Valley tombs lived."),
        ("Who sponsored Carter's excavation?", "Lord Carnarvon", "British Museum", "Egyptian government", "French government", "British aristocrat Lord Carnarvon financed Howard Carter's excavations."),
        ("What tomb has the most beautiful paintings?", "Tomb of Nefertari (Valley of Queens)", "Tutankhamun's tomb", "Ramesses VI tomb", "Seti I tomb", "The tomb of Queen Nefertari is renowned for its exquisite painted decorations."),
        ("What was placed in tombs?", "Treasures, food, furniture, shabti figures", "Only bodies", "Religious texts only", "Nothing", "Tombs contained everything needed for the afterlife: furniture, food, clothing, jewelry, and servant figures."),
        ("What are shabti figures?", "Servant figures for the afterlife", "Gods statues", "Decorations", "Toys", "Shabti (or ushabti) were small figurines meant to serve the deceased in the afterlife."),
        ("What is the Amduat?", "Funerary text describing sun god's journey", "Historical chronicle", "Love poetry", "Medical text", "The Amduat is a funerary text describing the sun god's nightly journey through the underworld."),
        ("Why is the valley on the west bank?", "West symbolized realm of the dead", "Better stone", "Closer to capital", "Random choice", "The west, where the sun sets, symbolized the realm of the dead in Egyptian belief."),
        ("What modern threat affects the tombs?", "Tourism humidity and light damage", "Earthquakes", "War", "River flooding", "Modern threats include damage from tourist humidity, lights, and touching causing deterioration.")
    ]
}

for category, questions in categories.items():
    category_path = os.path.join(base_path, category)

    for level in range(1, 11):
        filepath = os.path.join(category_path, f'level{level}.js')

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        additions = ""
        for q_en, opt1_en, opt2_en, opt3_en, opt4_en, exp_en in questions:
            additions += f"""    }},
    {{
      question: {{
        en: "{q_en}",
        es: "{q_en}",
        de: "{q_en}",
        nl: "{q_en}"
      }},
      options: [
        {{ en: "{opt1_en}", es: "{opt1_en}", de: "{opt1_en}", nl: "{opt1_en}" }},
        {{ en: "{opt2_en}", es: "{opt2_en}", de: "{opt2_en}", nl: "{opt2_en}" }},
        {{ en: "{opt3_en}", es: "{opt3_en}", de: "{opt3_en}", nl: "{opt3_en}" }},
        {{ en: "{opt4_en}", es: "{opt4_en}", de: "{opt4_en}", nl: "{opt4_en}" }}
      ],
      correct: 0,
      explanation: {{
        en: "{exp_en}",
        es: "{exp_en}",
        de: "{exp_en}",
        nl: "{exp_en}"
      }}
"""

        content = re.sub(r'(\s+}\s+)\](\s+};)', additions + '\n      }\n    ]\n  };', content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"{category} level{level}: added 20 questions (20->40)")

print("\nEgypt expansion complete!")
