import os
import re

base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\dinosaurs'

categories = {
    "Cretaceous Dinosaurs": [
        ("What period did Cretaceous dinosaurs live in?", "Cretaceous Period", "Jurassic Period", "Triassic Period", "Permian Period", "Cretaceous dinosaurs lived during the Cretaceous Period, from about 145 to 66 million years ago."),
        ("What major event ended the Cretaceous Period?", "Asteroid impact/mass extinction", "Ice age", "Volcanic eruption", "Climate cooling", "The Cretaceous Period ended with a mass extinction event, likely caused by an asteroid impact about 66 million years ago."),
        ("Which dinosaur is famous from the Cretaceous?", "Tyrannosaurus Rex", "Stegosaurus", "Brachiosaurus", "Diplodocus", "Tyrannosaurus Rex is one of the most famous Cretaceous dinosaurs, living at the very end of the period."),
        ("What was the climate like in the Cretaceous?", "Warm and tropical", "Cold and icy", "Dry desert", "Frozen tundra", "The Cretaceous Period had a warm, tropical climate with high sea levels and no polar ice caps."),
        ("What were the first flowering plants called?", "Angiosperms", "Gymnosperms", "Ferns", "Cycads", "Angiosperms (flowering plants) first appeared and diversified during the Cretaceous Period."),
        ("Which Cretaceous dinosaur had a sail on its back?", "Spinosaurus", "T-Rex", "Triceratops", "Velociraptor", "Spinosaurus had a large sail-like structure on its back, possibly for temperature regulation or display."),
        ("What is unique about Cretaceous bird fossils?", "First modern bird features appeared", "All birds were flightless", "Birds went extinct", "No bird fossils exist", "The Cretaceous saw the evolution of modern bird features, with early birds diversifying significantly."),
        ("Which ocean expanded during the Cretaceous?", "Western Interior Seaway in North America", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "The Western Interior Seaway split North America in two during the Cretaceous Period."),
        ("What dinosaur had the thickest skull?", "Pachycephalosaurus", "T-Rex", "Triceratops", "Ankylosaurus", "Pachycephalosaurus had an extremely thick, domed skull up to 10 inches thick."),
        ("Which Cretaceous dinosaur could swim?", "Spinosaurus", "T-Rex", "Triceratops", "Velociraptor", "Spinosaurus is believed to be semi-aquatic, with adaptations for swimming and catching fish."),
        ("What is the Cretaceous named after?", "Chalk deposits (Latin: creta)", "A scientist", "A location", "A dinosaur", "The Cretaceous Period is named after the extensive chalk deposits (Latin 'creta') from this time."),
        ("Which continent split apart during the Cretaceous?", "Gondwana", "Pangaea", "Laurasia", "Rodinia", "The supercontinent Gondwana continued breaking apart during the Cretaceous Period."),
        ("What was the largest land predator of the Cretaceous?", "Spinosaurus or Giganotosaurus", "T-Rex", "Allosaurus", "Velociraptor", "Spinosaurus and Giganotosaurus were among the largest land predators, possibly larger than T-Rex."),
        ("Which Cretaceous dinosaur had feathers?", "Many theropods including raptors", "None", "All dinosaurs", "Only birds", "Many theropod dinosaurs, especially smaller ones like raptors, had feathers during the Cretaceous."),
        ("What marine reptile lived in Cretaceous seas?", "Mosasaurus", "Ichthyosaurus", "Plesiosaurus", "Nothosaurus", "Mosasaurus was a large marine reptile that dominated Cretaceous oceans."),
        ("How long did the Cretaceous Period last?", "About 79 million years", "About 50 million years", "About 100 million years", "About 30 million years", "The Cretaceous Period lasted approximately 79 million years, from 145 to 66 million years ago."),
        ("Which dinosaur had the longest claws?", "Therizinosaurus", "Velociraptor", "T-Rex", "Triceratops", "Therizinosaurus had the longest claws of any known animal, up to 3 feet long."),
        ("What percentage of species went extinct at the end of the Cretaceous?", "About 75%", "About 25%", "About 50%", "About 90%", "The end-Cretaceous mass extinction event killed approximately 75% of all species on Earth."),
        ("Which Cretaceous dinosaur is known for its intelligence?", "Troodon", "T-Rex", "Brachiosaurus", "Stegosaurus", "Troodon had one of the largest brain-to-body ratios among dinosaurs, suggesting higher intelligence."),
        ("What era did the Cretaceous Period belong to?", "Mesozoic Era", "Paleozoic Era", "Cenozoic Era", "Precambrian Era", "The Cretaceous was the final period of the Mesozoic Era, the 'Age of Reptiles'.")
    ],
    "Dinosaur Fossils": [
        ("What is a fossil?", "Preserved remains of ancient life", "Type of rock", "Ancient tool", "Dinosaur bone", "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age."),
        ("What is fossilization?", "Process of remains becoming fossils", "Finding fossils", "Studying fossils", "Breaking fossils", "Fossilization is the process by which organic remains are preserved in rock over millions of years."),
        ("What is the most common way dinosaur fossils form?", "Permineralization", "Freezing", "Mummification", "Amber preservation", "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time."),
        ("What is a trace fossil?", "Evidence of activity, not body parts", "Footprint only", "Bone fragment", "Complete skeleton", "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts."),
        ("What are coprolites?", "Fossilized feces", "Fossilized eggs", "Fossilized teeth", "Fossilized skin", "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems."),
        ("What is the best environment for fossilization?", "Rapid burial in sediment", "Dry desert", "Mountain peaks", "Open plains", "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization."),
        ("What is a cast fossil?", "Mineral filling of a mold", "Bone turned to stone", "Fossilized impression", "Amber-preserved organism", "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material."),
        ("Who was Mary Anning?", "Famous fossil collector from the 1800s", "First paleontologist", "Dinosaur namer", "Museum curator", "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s."),
        ("What does 'petrified' mean?", "Turned to stone", "Very scared", "Very old", "Well preserved", "Petrified literally means 'turned to stone' through the fossilization process."),
        ("What is taphonomy?", "Study of fossilization process", "Study of dinosaurs", "Study of rocks", "Study of extinction", "Taphonomy studies the processes that affect organisms from death to discovery as fossils."),
        ("What percentage of organisms become fossils?", "Less than 1%", "About 10%", "About 50%", "Most organisms", "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare."),
        ("What tool do paleontologists use most in the field?", "Small picks and brushes", "Jackhammers", "Shovels", "Hammers", "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils."),
        ("What is the oldest dinosaur fossil ever found?", "Approximately 230 million years old", "100 million years old", "300 million years old", "500 million years old", "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic."),
        ("What is a fossil matrix?", "Rock surrounding a fossil", "Fossil classification system", "Fossil museum display", "Fossil database", "The matrix is the rock or sediment surrounding and encasing a fossil."),
        ("What is exceptional preservation?", "Preservation of soft tissues", "Perfect bone preservation", "Large fossil size", "Complete skeletons", "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize."),
        ("What is the La Brea Tar Pits famous for?", "Preserving Ice Age animals in asphalt", "Dinosaur fossils", "Oldest fossils", "Marine fossils", "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps."),
        ("What is a type specimen?", "Individual fossil defining a species", "Typical fossil example", "Largest fossil", "First fossil found", "A type specimen is the individual fossil on which the description and name of a new species is based."),
        ("What technology helps find fossils without digging?", "Ground-penetrating radar", "Metal detectors", "Magnets", "X-rays", "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation."),
        ("What is a fossil bed?", "Layer of rock rich in fossils", "Museum display area", "Excavation site", "Fossil storage", "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils."),
        ("What famous fossil hunter found the first Iguanodon teeth?", "Gideon Mantell (or his wife Mary Ann)", "Charles Darwin", "Richard Owen", "William Buckland", "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized.")
    ],
    "Early Dinosaurs": [
        ("What was the first period with dinosaurs?", "Triassic Period", "Jurassic Period", "Cretaceous Period", "Permian Period", "Dinosaurs first appeared in the Late Triassic Period, around 230 million years ago."),
        ("What is Eoraptor?", "One of the earliest known dinosaurs", "First bird", "Early mammal", "Large predator", "Eoraptor is one of the earliest and most primitive dinosaurs, living about 230 million years ago."),
        ("How big were the first dinosaurs?", "Small, about the size of a dog or turkey", "Massive like T-Rex", "Tiny like mice", "Medium like horses", "The earliest dinosaurs were relatively small, typically about the size of a turkey or small dog."),
        ("What did early dinosaurs compete with?", "Archosaurs and early crocodile relatives", "Mammals", "Other dinosaurs", "Humans", "Early dinosaurs competed with various archosaurs, including early crocodile relatives and other reptiles."),
        ("What supercontinent existed when dinosaurs first appeared?", "Pangaea", "Gondwana", "Laurasia", "Rodinia", "When dinosaurs first appeared, all continents were joined in the supercontinent Pangaea."),
        ("What is Herrerasaurus?", "Early carnivorous dinosaur", "Early herbivore", "Flying reptile", "Marine reptile", "Herrerasaurus was one of the earliest carnivorous dinosaurs, living in the Late Triassic."),
        ("What feature distinguishes dinosaurs from other reptiles?", "Upright posture with legs under body", "Ability to fly", "Warm-blooded", "Having scales", "Dinosaurs had an upright posture with legs positioned directly under their bodies, unlike sprawling reptiles."),
        ("What was the climate like when dinosaurs first evolved?", "Hot and dry with seasonal monsoons", "Cold and icy", "Tropical rainforest", "Frozen tundra", "The Late Triassic climate was generally hot and dry with seasonal monsoons."),
        ("What is a dinosauromorph?", "Dinosaur ancestor or close relative", "Type of dinosaur", "Dinosaur predator", "Dinosaur fossil", "Dinosauromorphs are the group including dinosaurs and their closest relatives."),
        ("Which came first: meat-eating or plant-eating dinosaurs?", "Meat-eating dinosaurs", "Plant-eating dinosaurs", "Both appeared simultaneously", "Neither, they ate insects", "The earliest dinosaurs were primarily carnivorous; herbivorous dinosaurs evolved later."),
        ("What is Coelophysis?", "Small early predatory dinosaur", "Early herbivore", "Flying dinosaur", "Marine dinosaur", "Coelophysis was a small, agile predatory dinosaur from the Late Triassic, one of the earliest known."),
        ("What caused the Triassic-Jurassic extinction?", "Volcanic activity and climate change", "Asteroid impact", "Ice age", "Drought", "The Triassic-Jurassic extinction was likely caused by massive volcanic eruptions and climate change."),
        ("How did early dinosaurs differ from later ones?", "Smaller, more primitive features", "Larger, more advanced", "No differences", "All could fly", "Early dinosaurs were generally smaller with more primitive skeletal features than their later descendants."),
        ("What is Plateosaurus?", "Early large herbivorous dinosaur", "Early predator", "Flying reptile", "Marine reptile", "Plateosaurus was one of the first large dinosaurs, an early herbivore from the Late Triassic."),
        ("What evolved first: bipedal or quadrupedal dinosaurs?", "Bipedal dinosaurs", "Quadrupedal dinosaurs", "Both simultaneously", "Neither, they swam", "The earliest dinosaurs were bipedal; quadrupedal dinosaurs evolved later from bipedal ancestors."),
        ("What is the 'dawn of the dinosaurs' called?", "Late Triassic Period", "Early Jurassic Period", "Permian Period", "Carboniferous Period", "The Late Triassic Period is often called the 'dawn of the dinosaurs' as this is when they first appeared."),
        ("What is Staurikosaurus?", "Very early small carnivorous dinosaur", "Early herbivore", "Flying reptile", "Armored dinosaur", "Staurikosaurus was one of the earliest dinosaurs, a small carnivore from the Late Triassic."),
        ("How are dinosaurs classified?", "By hip structure: saurischian or ornithischian", "By size", "By diet", "By location", "Dinosaurs are primarily classified by hip structure into saurischian (lizard-hipped) and ornithischian (bird-hipped)."),
        ("What percentage of species survived the Triassic-Jurassic extinction?", "About 50%", "About 90%", "About 10%", "About 75%", "The Triassic-Jurassic extinction event killed approximately 50% of all species."),
        ("What advantage did early dinosaurs have?", "Efficient upright posture and metabolism", "Ability to fly", "Large size", "Armored protection", "Early dinosaurs' upright posture and possibly more efficient metabolism gave them advantages over competing reptiles.")
    ],
    "Horned Dinosaurs": [
        ("What is a Triceratops?", "Three-horned herbivorous dinosaur", "Carnivorous dinosaur", "Flying dinosaur", "Marine reptile", "Triceratops was a large herbivorous dinosaur with three horns and a large bony frill."),
        ("What is the bony plate on horned dinosaurs' heads called?", "Frill", "Shield", "Crest", "Crown", "The bony plate extending from the skull of horned dinosaurs is called a frill."),
        ("What family do horned dinosaurs belong to?", "Ceratopsidae", "Theropoda", "Sauropoda", "Ornithopoda", "Horned dinosaurs belong to the family Ceratopsidae."),
        ("What did horned dinosaurs eat?", "Plants", "Meat", "Fish", "Insects", "All horned dinosaurs were herbivores that fed on plants."),
        ("What is the largest horned dinosaur?", "Triceratops or Torosaurus", "Protoceratops", "Psittacosaurus", "Styracosaurus", "Triceratops and Torosaurus were among the largest horned dinosaurs, up to 30 feet long."),
        ("What was the purpose of the frill?", "Defense, display, and temperature regulation", "Flying", "Swimming", "Digging", "The frill likely served multiple purposes: defense, species recognition, mating display, and possibly temperature regulation."),
        ("What is Styracosaurus?", "Horned dinosaur with spiked frill", "Three-horned dinosaur", "Hornless dinosaur", "Flying dinosaur", "Styracosaurus had a distinctive frill adorned with long spikes radiating from its edge."),
        ("What is a Protoceratops?", "Small early horned dinosaur", "Large predator", "Flying reptile", "Marine dinosaur", "Protoceratops was a small, early ceratopsian from Mongolia, about 6 feet long."),
        ("How many horns did Triceratops have?", "Three horns", "Two horns", "Four horns", "One horn", "Triceratops had three horns: one on its nose and two above its eyes."),
        ("What is Pachyrhinosaurus?", "Horned dinosaur with massive nose boss instead of horn", "Long-horned dinosaur", "Hornless dinosaur", "Flying dinosaur", "Pachyrhinosaurus had a massive bony boss on its nose rather than a horn."),
        ("Where have most horned dinosaur fossils been found?", "North America and Asia", "Europe", "Africa", "Antarctica", "Most horned dinosaur fossils have been discovered in North America and Asia."),
        ("What is the smallest ceratopsian?", "Psittacosaurus", "Triceratops", "Styracosaurus", "Torosaurus", "Psittacosaurus was one of the smallest ceratopsians, only about 6.5 feet long."),
        ("What dinosaur frequently fought with Triceratops?", "Tyrannosaurus Rex", "Velociraptor", "Allosaurus", "Spinosaurus", "Tyrannosaurus Rex and Triceratops lived at the same time and place, and T-Rex likely hunted Triceratops."),
        ("What is unique about Kosmoceratops?", "Had most elaborate frill with 15 horns", "Largest horned dinosaur", "Smallest horned dinosaur", "No frill", "Kosmoceratops had the most ornate skull of any known dinosaur, with 15 horns and horn-like structures."),
        ("What does 'ceratopsian' mean?", "Horned face", "Three horns", "Plant eater", "Bird-hipped", "Ceratopsian comes from Greek meaning 'horned face', referring to their distinctive facial horns."),
        ("What is a nasal horn?", "Horn on the nose", "Horn above eyes", "Horn on frill", "Horn on tail", "The nasal horn is located on the nose of horned dinosaurs."),
        ("What is Pentaceratops?", "Five-horned face dinosaur", "Three-horned dinosaur", "One-horned dinosaur", "Hornless dinosaur", "Pentaceratops means 'five-horned face', though it actually had three true horns plus pointed cheek bones."),
        ("How did baby horned dinosaurs differ from adults?", "Shorter horns and smaller frills", "No horns at all", "Larger horns", "Different color", "Juvenile horned dinosaurs had proportionally smaller frills and shorter horns that grew as they matured."),
        ("What is the beak of horned dinosaurs used for?", "Cropping and cutting vegetation", "Catching fish", "Fighting", "Digging", "Horned dinosaurs had sharp beaks ideal for cropping and cutting tough plant material."),
        ("What period did horned dinosaurs live in?", "Cretaceous Period", "Jurassic Period", "Triassic Period", "Permian Period", "Horned dinosaurs lived during the Late Cretaceous Period.")
    ],
    "Jurassic Dinosaurs": [
        ("What period did Jurassic dinosaurs live in?", "Jurassic Period", "Cretaceous Period", "Triassic Period", "Permian Period", "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago."),
        ("What famous dinosaur is from the Jurassic?", "Stegosaurus", "Tyrannosaurus Rex", "Triceratops", "Velociraptor", "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back."),
        ("What was the climate like in the Jurassic?", "Warm and humid", "Cold and dry", "Frozen", "Desert-like", "The Jurassic Period had a warm, humid climate with lush vegetation."),
        ("Which giant sauropod lived in the Jurassic?", "Brachiosaurus", "Tyrannosaurus", "Triceratops", "Velociraptor", "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs."),
        ("What is Allosaurus?", "Large Jurassic predator", "Herbivore", "Flying reptile", "Marine reptile", "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long."),
        ("What supercontinent was breaking apart in the Jurassic?", "Pangaea", "Rodinia", "Gondwana only", "None", "The supercontinent Pangaea began breaking apart during the Jurassic Period."),
        ("What is the Morrison Formation?", "Rock layer rich in Jurassic fossils", "Mountain range", "Ocean", "Desert", "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils."),
        ("What dinosaur had plates on its back?", "Stegosaurus", "Allosaurus", "Brachiosaurus", "Diplodocus", "Stegosaurus had two rows of large bony plates running down its back."),
        ("What is Diplodocus known for?", "Extremely long whip-like tail", "Large plates", "Sharp teeth", "Flying ability", "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense."),
        ("What was the dominant predator of the Jurassic?", "Allosaurus", "T-Rex", "Spinosaurus", "Velociraptor", "Allosaurus was the dominant large predator during the Late Jurassic Period."),
        ("What is Archaeopteryx?", "Earliest known bird from Late Jurassic", "Flying dinosaur", "Marine reptile", "Mammal", "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features."),
        ("How long was the Jurassic Period?", "About 56 million years", "About 100 million years", "About 30 million years", "About 80 million years", "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago."),
        ("What ocean was forming during the Jurassic?", "Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean", "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic."),
        ("What is Compsognathus?", "Small chicken-sized carnivore", "Large predator", "Giant herbivore", "Flying dinosaur", "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken."),
        ("What pterosaur lived in the Jurassic?", "Pterodactylus", "Pteranodon", "Quetzalcoatlus", "None", "Pterodactylus was a small pterosaur from the Late Jurassic."),
        ("What is the function of Stegosaurus plates?", "Temperature regulation and display", "Flying", "Defense only", "Swimming", "Stegosaurus plates likely helped with temperature regulation and visual display."),
        ("What is Ceratosaurus?", "Horned Jurassic predator", "Horned herbivore", "Long-necked dinosaur", "Flying reptile", "Ceratosaurus was a Jurassic predator with a prominent horn on its nose."),
        ("What sea reptile dominated Jurassic oceans?", "Plesiosaurs and ichthyosaurs", "Mosasaurs", "Dinosaurs", "Sharks", "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas."),
        ("What is Apatosaurus?", "Large Jurassic sauropod", "Small predator", "Flying reptile", "Horned dinosaur", "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long."),
        ("What plants dominated the Jurassic?", "Conifers and ferns", "Flowering plants", "Grasses", "Mosses only", "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.")
    ],
    "Marine Reptiles": [
        ("Were marine reptiles dinosaurs?", "No, they were different reptiles", "Yes, all were dinosaurs", "Some were dinosaurs", "They were fish", "Marine reptiles like ichthyosaurs and plesiosaurs were not dinosaurs, but different groups of reptiles."),
        ("What is an Ichthyosaur?", "Dolphin-like marine reptile", "Swimming dinosaur", "Fish", "Shark", "Ichthyosaurs were dolphin-like marine reptiles that lived during the Mesozoic Era."),
        ("What is a Plesiosaur?", "Marine reptile with long neck or large head", "Flying reptile", "Swimming dinosaur", "Fish", "Plesiosaurs were marine reptiles with either long necks and small heads, or short necks and large heads."),
        ("What is a Mosasaur?", "Large predatory marine reptile from Cretaceous", "Dinosaur", "Fish", "Shark", "Mosasaurs were large predatory marine reptiles that dominated Late Cretaceous seas."),
        ("Did marine reptiles lay eggs?", "Some gave live birth; some laid eggs on land", "All laid eggs", "None laid eggs", "Unknown", "Some marine reptiles like ichthyosaurs gave live birth, while others laid eggs on beaches like sea turtles."),
        ("What is the Loch Ness Monster legend based on?", "Alleged plesiosaur survival", "Ichthyosaur sighting", "Mosasaur evidence", "Fish migration", "The Loch Ness Monster legend imagines a plesiosaur somehow surviving to modern times, though this is impossible."),
        ("What is a Kronosaurus?", "Giant short-necked plesiosaur", "Long-necked plesiosaur", "Ichthyosaur", "Mosasaur", "Kronosaurus was a massive short-necked plesiosaur (pliosaur) with a huge head and powerful jaws."),
        ("How did ichthyosaurs breathe?", "Came to surface for air", "Through gills", "Through skin", "Didn't breathe", "Ichthyosaurs were air-breathing reptiles that had to surface regularly to breathe, like modern dolphins."),
        ("What is a Nothosaur?", "Early marine reptile, plesiosaur relative", "Late marine reptile", "Flying reptile", "Dinosaur", "Nothosaurs were early marine reptiles from the Triassic, related to but more primitive than plesiosaurs."),
        ("What was the largest mosasaur?", "Mosasaurus hoffmannii", "Tylosaurus", "Hainosaurus", "Plotosaurus", "Mosasaurus hoffmannii was one of the largest mosasaurs, reaching up to 56 feet in length."),
        ("What did plesiosaurs eat?", "Fish and other marine animals", "Plankton only", "Plants", "Nothing", "Plesiosaurs were carnivores that fed on fish, squid, and other marine animals."),
        ("What is the difference between plesiosaurs and pliosaurs?", "Plesiosaurs had long necks; pliosaurs had large heads", "No difference", "Different time periods", "Different ocean habitats", "Plesiosaurs had long necks and small heads, while pliosaurs had short necks and massive heads."),
        ("How fast could ichthyosaurs swim?", "Very fast, like modern dolphins", "Very slow", "Moderate speed", "Couldn't swim", "Ichthyosaurs were fast swimmers, with streamlined bodies similar to modern dolphins."),
        ("What is Elasmosaurus?", "Plesiosaur with extremely long neck", "Short-necked pliosaur", "Ichthyosaur", "Mosasaur", "Elasmosaurus had an extremely long neck with up to 72 vertebrae, making up more than half its body length."),
        ("Did marine reptiles go extinct with the dinosaurs?", "Yes, in the same extinction event", "No, they survived", "Some survived", "They went extinct earlier", "Most marine reptiles went extinct in the same extinction event that killed the dinosaurs 66 million years ago."),
        ("What is unique about ichthyosaur eyes?", "Some had the largest eyes of any vertebrate", "Smallest eyes", "No eyes", "Eyes on top of head", "Some ichthyosaurs had enormous eyes, the largest of any known vertebrate, for hunting in deep water."),
        ("What is a Tylosaurus?", "Type of large mosasaur", "Plesiosaur", "Ichthyosaur", "Dinosaur", "Tylosaurus was a large mosasaur from the Late Cretaceous, up to 45 feet long."),
        ("How are marine reptiles related to modern animals?", "Distant relatives of modern reptiles", "Ancestors of dolphins", "Ancestors of fish", "No living relatives", "Marine reptiles were reptiles, distantly related to modern lizards, snakes, and crocodiles, but with no direct living descendants."),
        ("What did mosasaurs evolve from?", "Land-dwelling lizards", "Dinosaurs", "Fish", "Plesiosaurs", "Mosasaurs evolved from land-dwelling lizards that returned to the sea."),
        ("What is a Shonisaurus?", "Giant Triassic ichthyosaur", "Jurassic plesiosaur", "Cretaceous mosasaur", "Dinosaur", "Shonisaurus was one of the largest ichthyosaurs, from the Late Triassic, up to 50 feet long.")
    ],
    "Pterosaurs": [
        ("Were pterosaurs dinosaurs?", "No, they were flying reptiles", "Yes, flying dinosaurs", "Yes, ancient birds", "No, they were birds", "Pterosaurs were flying reptiles closely related to but distinct from dinosaurs."),
        ("What does pterosaur mean?", "Winged lizard", "Flying dinosaur", "Ancient bird", "Sky reptile", "Pterosaur comes from Greek meaning 'winged lizard' or 'winged reptile'."),
        ("How did pterosaurs fly?", "Wing membrane stretched from elongated finger", "Feathered wings like birds", "Flapping arms", "Gliding only", "Pterosaurs had wings formed by a membrane of skin stretched from a hugely elongated fourth finger to their body."),
        ("What is the largest pterosaur?", "Quetzalcoatlus", "Pteranodon", "Pterodactylus", "Rhamphorhynchus", "Quetzalcoatlus was the largest known pterosaur with a wingspan up to 33-36 feet."),
        ("What is Pteranodon?", "Large Cretaceous pterosaur with head crest", "Small pterosaur", "Early pterosaur", "Feathered pterosaur", "Pteranodon was a large Late Cretaceous pterosaur with a distinctive backward-pointing head crest."),
        ("Did pterosaurs have feathers?", "No, they had hair-like fibers called pycnofibers", "Yes, like birds", "No covering at all", "Scales only", "Pterosaurs had hair-like structures called pycnofibers covering their bodies, not true feathers."),
        ("What did most pterosaurs eat?", "Fish", "Plants", "Large dinosaurs", "Insects only", "Most pterosaurs were piscivores (fish-eaters), catching fish from oceans and lakes."),
        ("What is Pterodactylus?", "Small Jurassic pterosaur", "Largest pterosaur", "Cretaceous pterosaur", "Flying dinosaur", "Pterodactylus was a relatively small pterosaur from the Late Jurassic, with a wingspan around 3.5 feet."),
        ("When did pterosaurs first appear?", "Late Triassic Period", "Jurassic Period", "Cretaceous Period", "Permian Period", "Pterosaurs first appeared in the Late Triassic Period, about 228 million years ago."),
        ("How did pterosaurs walk on land?", "Quadrupedally, using wings as front limbs", "Bipedally like birds", "They couldn't walk", "Hopping only", "Pterosaurs walked on all fours, using their folded wings as front limbs."),
        ("What is the smallest pterosaur?", "Nemicolopterus or Anurognathus", "Pteranodon", "Quetzalcoatlus", "Pterodactylus", "The smallest pterosaurs like Nemicolopterus had wingspans of only about 10 inches."),
        ("What is Rhamphorhynchus?", "Long-tailed Jurassic pterosaur", "Short-tailed pterosaur", "Cretaceous pterosaur", "Largest pterosaur", "Rhamphorhynchus was a long-tailed pterosaur from the Late Jurassic with a distinctive diamond-shaped tail vane."),
        ("How are pterosaurs classified?", "Into long-tailed and short-tailed groups", "By size only", "By diet only", "By location only", "Pterosaurs are broadly classified into long-tailed (rhamphorhynchoids) and short-tailed (pterodactyloids) groups."),
        ("What was the purpose of pterosaur crests?", "Display, species recognition, or aerodynamics", "Weapons", "Storing food", "Hearing", "Crests likely served for visual display, species recognition, or possibly aerodynamic functions."),
        ("Did pterosaurs have good eyesight?", "Yes, excellent vision", "No, poor vision", "Blind", "Average vision", "Pterosaurs had large eyes and excellent vision for spotting prey while flying."),
        ("What is Dimorphodon?", "Early pterosaur with large head", "Late pterosaur", "Tiny pterosaur", "Largest pterosaur", "Dimorphodon was an early pterosaur with a proportionally large, deep head."),
        ("When did pterosaurs go extinct?", "End of Cretaceous, 66 million years ago", "End of Jurassic", "End of Triassic", "Still alive today", "Pterosaurs went extinct at the end of the Cretaceous Period, in the same event that killed the dinosaurs."),
        ("What is unique about Quetzalcoatlus?", "Largest flying animal ever", "Smallest pterosaur", "Only fish-eater", "Only insect-eater", "Quetzalcoatlus was the largest known flying animal of all time."),
        ("How did baby pterosaurs develop?", "Could likely fly soon after hatching", "Flightless for years", "Never learned to fly", "Stayed in nests", "Evidence suggests baby pterosaurs could fly shortly after hatching, though they grew for years."),
        ("What is a pterosaur wing made of?", "Muscle, skin, and blood vessels", "Feathers", "Scales", "Bone only", "Pterosaur wings were complex structures of muscle, skin, blood vessels, and fibers supported by an elongated finger.")
    ],
    "Sauropods": [
        ("What is a sauropod?", "Long-necked herbivorous dinosaur", "Carnivorous dinosaur", "Flying dinosaur", "Marine reptile", "Sauropods were massive herbivorous dinosaurs characterized by long necks, long tails, small heads, and four pillar-like legs."),
        ("What is the largest sauropod?", "Argentinosaurus or Patagotitan", "Brachiosaurus", "Diplodocus", "Apatosaurus", "Argentinosaurus and Patagotitan are among the largest sauropods, possibly weighing up to 100 tons."),
        ("What did sauropods eat?", "Plants", "Meat", "Fish", "Insects", "All sauropods were herbivores that fed on plants, particularly high vegetation."),
        ("What is Brachiosaurus known for?", "Front legs longer than rear legs", "Longest tail", "Smallest sauropod", "Fastest sauropod", "Brachiosaurus had unusually long front legs, making its back slope downward from shoulders to hips."),
        ("What is Diplodocus?", "Long sauropod with whip-like tail", "Short-necked sauropod", "Carnivorous dinosaur", "Flying dinosaur", "Diplodocus was one of the longest dinosaurs, with an extremely long whip-like tail."),
        ("How did sauropods support their massive weight?", "Hollow bones and efficient body structure", "Dense solid bones", "Living in water", "Extra legs", "Sauropods had hollow bones filled with air sacs, reducing weight while maintaining strength."),
        ("What is the longest sauropod?", "Supersaurus or Diplodocus", "Brachiosaurus", "Argentinosaurus", "Camarasaurus", "Supersaurus and Diplodocus were among the longest dinosaurs, up to 110 feet long."),
        ("What were sauropod teeth like?", "Peg-like or spoon-shaped for stripping leaves", "Sharp for meat", "Flat for grinding", "No teeth", "Most sauropods had simple peg-like or spoon-shaped teeth for stripping leaves, not for chewing."),
        ("What is Apatosaurus?", "Large Jurassic sauropod", "Cretaceous carnivore", "Small dinosaur", "Flying reptile", "Apatosaurus (once called Brontosaurus) was a large Jurassic sauropod up to 75 feet long."),
        ("Did sauropods chew their food?", "No, they swallowed it whole", "Yes, extensively", "Sometimes", "Unknown", "Sauropods didn't chew; they swallowed vegetation whole, using stomach stones (gastroliths) to help grind food."),
        ("What is Titanosaur?", "Group of sauropods including the largest dinosaurs", "Single dinosaur species", "Carnivorous dinosaur", "Flying dinosaur", "Titanosaurs were a diverse group of sauropods that included some of the largest dinosaurs ever."),
        ("How long was a typical sauropod neck?", "20-40 feet on average for large species", "5 feet", "100 feet", "10 feet", "Large sauropods typically had necks 20-40 feet long, allowing them to reach high vegetation."),
        ("What is Camarasaurus?", "Common Jurassic North American sauropod", "Rare sauropod", "Carnivorous dinosaur", "Marine reptile", "Camarasaurus was one of the most common sauropods in Late Jurassic North America."),
        ("What are gastroliths?", "Stomach stones swallowed to grind food", "Fossils", "Teeth", "Bones", "Gastroliths are stones swallowed by sauropods to help grind plant material in their stomachs."),
        ("What is Mamenchisaurus?", "Chinese sauropod with extremely long neck", "Short-necked sauropod", "American sauropod", "Carnivorous dinosaur", "Mamenchisaurus was a Chinese sauropod with one of the longest necks, up to 46 feet."),
        ("How much did large sauropods weigh?", "50-100 tons", "1-5 tons", "200-300 tons", "10-20 tons", "The largest sauropods weighed between 50-100 tons, making them the heaviest land animals ever."),
        ("What is Saltasaurus?", "Armored sauropod with bony plates", "Carnivorous dinosaur", "Flying dinosaur", "Marine reptile", "Saltasaurus was unusual among sauropods in having bony armor plates embedded in its skin."),
        ("Did sauropods live in herds?", "Likely yes, based on trackways", "No, solitary only", "Unknown", "Only when young", "Fossil trackways suggest sauropods traveled in herds, with young in the center for protection."),
        ("What posture did sauropods have?", "Quadrupedal with horizontal neck", "Bipedal", "Vertical neck always", "Lying down", "Sauropods walked on four legs with their necks held mostly horizontal, though they could raise them."),
        ("What period did most sauropods live in?", "Jurassic and Cretaceous", "Triassic only", "Permian", "Cenozoic", "Sauropods were most diverse during the Jurassic and Cretaceous Periods.")
    ],
    "T-Rex Family": [
        ("What is Tyrannosaurus Rex?", "Large carnivorous theropod dinosaur", "Herbivorous dinosaur", "Flying dinosaur", "Marine reptile", "Tyrannosaurus Rex was one of the largest land carnivores ever, living in Late Cretaceous North America."),
        ("What does Tyrannosaurus Rex mean?", "Tyrant Lizard King", "Terrible Lizard", "Giant Reptile", "Ancient Beast", "Tyrannosaurus Rex means 'Tyrant Lizard King' in Greek and Latin."),
        ("How long was T-Rex?", "About 40 feet", "About 20 feet", "About 80 feet", "About 100 feet", "T-Rex measured about 40 feet from nose to tail."),
        ("What was T-Rex's bite force?", "Strongest of any land animal, ~12,800 pounds", "Weak bite", "Moderate bite", "Unknown", "T-Rex had the strongest bite force of any land animal, estimated at over 12,800 pounds."),
        ("What is the T-Rex family called?", "Tyrannosauridae", "Allosauridae", "Spinosauridae", "Theropoda only", "The T-Rex belongs to the family Tyrannosauridae."),
        ("What is Albertosaurus?", "Smaller relative of T-Rex", "Larger than T-Rex", "Herbivore", "Flying dinosaur", "Albertosaurus was a smaller tyrannosaurid, about 30 feet long, from Late Cretaceous Canada."),
        ("How many fingers did T-Rex have?", "Two", "Three", "Four", "Five", "T-Rex had only two functional fingers on each tiny arm."),
        ("What is Tarbosaurus?", "Asian relative of T-Rex", "African T-Rex", "South American T-Rex", "Australian T-Rex", "Tarbosaurus was a close Asian relative of T-Rex from Mongolia, nearly as large."),
        ("Were T-Rex arms useless?", "No, likely used for grasping", "Yes, completely useless", "Used for flying", "Used for walking", "T-Rex arms, though small, were muscular and likely used for grasping prey or mates."),
        ("What is Daspletosaurus?", "Large tyrannosaurid related to T-Rex", "Small tyrannosaur", "Herbivore", "Flying dinosaur", "Daspletosaurus was a large tyrannosaurid from Late Cretaceous North America, closely related to T-Rex."),
        ("What did T-Rex eat?", "Large herbivorous dinosaurs", "Plants", "Fish", "Insects", "T-Rex preyed on large herbivorous dinosaurs like Triceratops and hadrosaurs."),
        ("What is Gorgosaurus?", "Albertosaurus relative, tyrannosaurid", "Larger than T-Rex", "Herbivore", "Marine reptile", "Gorgosaurus was a tyrannosaurid similar to Albertosaurus, from Late Cretaceous North America."),
        ("Did T-Rex have feathers?", "Possibly when young; adults may have been scaly", "Yes, fully feathered", "No feathers at all", "Unknown", "Evidence suggests young tyrannosaurs may have had feathers, but adults were likely mostly scaly."),
        ("What is the earliest tyrannosaur?", "Proceratosaurus or Guanlong", "T-Rex", "Albertosaurus", "Tarbosaurus", "Early tyrannosaurs like Proceratosaurus and Guanlong lived in the Jurassic, much smaller than later forms."),
        ("How fast could T-Rex run?", "12-25 mph estimated", "50 mph", "5 mph", "Couldn't run", "Estimates suggest T-Rex could move at 12-25 mph, though debate continues."),
        ("What is Yutyrannus?", "Largest known feathered dinosaur, early tyrannosaur", "Late tyrannosaur", "Herbivore", "Marine reptile", "Yutyrannus was an early tyrannosauroid from China, the largest known feathered dinosaur at 30 feet long."),
        ("How good was T-Rex's sense of smell?", "Excellent, among the best", "Poor", "Average", "No sense of smell", "T-Rex had an exceptionally large olfactory bulb, suggesting an excellent sense of smell."),
        ("What is a juvenile T-Rex called informally?", "Jane or juvenile T-Rex", "Baby Rex", "Mini Rex", "T-Rex Jr.", "Several juvenile T-Rex specimens have been found; one famous specimen is nicknamed 'Jane'."),
        ("Was T-Rex a scavenger or hunter?", "Likely both, primarily hunter", "Only scavenger", "Only hunter", "Neither", "Evidence suggests T-Rex was primarily an active hunter but would also scavenge when opportunities arose."),
        ("What period did T-Rex live in?", "Very end of Cretaceous Period", "Jurassic Period", "Early Cretaceous", "Triassic Period", "T-Rex lived only during the very end of the Cretaceous Period, 68-66 million years ago.")
    ],
    "Velociraptors": [
        ("What is a Velociraptor?", "Small feathered carnivorous dinosaur", "Large predator", "Herbivore", "Flying dinosaur", "Velociraptor was a small, feathered carnivorous dinosaur from Late Cretaceous Mongolia."),
        ("How big was Velociraptor?", "About turkey-sized, 6 feet long", "Large as a car", "Tiny as a chicken", "Human-sized", "Velociraptor was about 6 feet long and roughly turkey-sized, much smaller than portrayed in movies."),
        ("What is the distinctive claw on Velociraptor?", "Large sickle-shaped claw on second toe", "Claw on hands", "Claw on tail", "Nose horn", "Velociraptor had an enlarged, sickle-shaped claw on the second toe of each foot."),
        ("Did Velociraptor have feathers?", "Yes, fully feathered", "No feathers", "Only some feathers", "Unknown", "Evidence including quill knobs on arm bones confirms Velociraptor had feathers."),
        ("What is the Velociraptor family called?", "Dromaeosauridae (raptors)", "Tyrannosauridae", "Troodontidae", "Ornithomimidae", "Velociraptor belongs to the family Dromaeosauridae, commonly called raptors."),
        ("What did Velociraptor eat?", "Small dinosaurs and animals", "Plants", "Large dinosaurs", "Fish only", "Velociraptor hunted small dinosaurs, mammals, and other small animals."),
        ("What is Deinonychus?", "Larger North American raptor", "Smaller raptor", "Asian raptor", "Herbivore", "Deinonychus was a larger North American dromaeosaur that helped inspire the Jurassic Park 'Velociraptors'."),
        ("Where did Velociraptor live?", "Mongolia and China", "North America", "South America", "Africa", "Velociraptor fossils have been found in Mongolia and China."),
        ("What is the purpose of the sickle claw?", "Pinning and slashing prey", "Digging", "Climbing", "Defense only", "The sickle claw was likely used to pin down and slash prey."),
        ("What is Utahraptor?", "Largest known dromaeosaur", "Smallest raptor", "Flying raptor", "Herbivorous raptor", "Utahraptor was the largest known raptor, up to 23 feet long and 1,000 pounds."),
        ("Did raptors hunt in packs?", "Possibly, but evidence is debated", "Definitely yes", "Definitely no", "Unknown", "Some evidence suggests pack hunting, but this remains debated among paleontologists."),
        ("What is Microraptor?", "Small four-winged dinosaur", "Large raptor", "Flightless raptor", "Herbivore", "Microraptor was a small dinosaur with feathers on both arms and legs, possibly capable of gliding."),
        ("How intelligent were raptors?", "More intelligent than most dinosaurs", "Least intelligent", "Average intelligence", "Unknown", "Raptors had relatively large brains for their body size, suggesting above-average intelligence for dinosaurs."),
        ("What is Achillobator?", "Large Mongolian raptor", "Small raptor", "North American raptor", "Herbivore", "Achillobator was a large dromaeosaur from Mongolia, similar in size to Deinonychus."),
        ("Could Velociraptor fly?", "No, but had feathers", "Yes, fully", "Could glide only", "No feathers at all", "Velociraptor had feathers but could not fly; it was too large and lacked the necessary adaptations."),
        ("What is the famous 'fighting dinosaurs' fossil?", "Velociraptor and Protoceratops locked in combat", "Two T-Rexes fighting", "Triceratops vs T-Rex", "Two Velociraptors fighting", "A famous fossil shows Velociraptor and Protoceratops locked in mortal combat, preserved by a sandstorm."),
        ("What is Bambiraptor?", "Small juvenile dromaeosaur", "Large raptor", "Adult raptor", "Herbivore", "Bambiraptor was a small, possibly juvenile dromaeosaur from Montana, well-preserved with delicate features."),
        ("How are raptors related to birds?", "Close relatives; share many bird features", "Not related", "Raptors evolved from birds", "Distant relatives only", "Dromaeosaurs like Velociraptor are very closely related to birds, sharing many skeletal and feather features."),
        ("What is Saurornitholestes?", "Small North American dromaeosaur", "Large raptor", "Asian raptor", "Herbivore", "Saurornitholestes was a small dromaeosaur from Late Cretaceous North America, similar to Velociraptor."),
        ("What does 'Velociraptor' mean?", "Swift thief or speedy plunderer", "Fierce hunter", "Fast runner", "Sharp claw", "Velociraptor means 'swift thief' or 'speedy plunderer' in Latin.")
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

print("\nDinosaurs expansion complete!")
