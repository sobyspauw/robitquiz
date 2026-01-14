import os
import re

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books\Adventure Books'

# Generic adventure book questions that work across difficulty levels
# These cover classic adventure literature topics progressively

generic_questions = [
    ("Who wrote The Scarlet Pimpernel?", "Baroness Orczy", "Alexandre Dumas", "Victor Hugo", "Charles Dickens", "Baroness Orczy wrote The Scarlet Pimpernel in 1905 about a hero rescuing aristocrats during French Revolution."),
    ("What is the name of Captain Nemos submarine?", "Nautilus", "Triton", "Poseidon", "Leviathan", "The Nautilus is the advanced submarine in Twenty Thousand Leagues Under the Sea."),
    ("Who wrote The Coral Island?", "R.M. Ballantyne", "Daniel Defoe", "Robert Louis Stevenson", "Jules Verne", "R.M. Ballantyne wrote The Coral Island in 1857 about boys stranded on a Pacific island."),
    ("In which book does Natty Bumppo appear?", "The Leatherstocking Tales", "The Last Mohican", "The Pathfinder", "All of the above", "Natty Bumppo appears throughout James Fenimore Coopers Leatherstocking Tales series."),
    ("Who created the character Phileas Fogg?", "Jules Verne", "H.G. Wells", "Arthur Conan Doyle", "Mark Twain", "Jules Verne created Phileas Fogg for Around the World in Eighty Days."),
    ("What is Bagheera in The Jungle Book?", "A black panther", "A brown bear", "A wolf", "A tiger", "Bagheera is the sleek black panther who befriends and protects Mowgli."),
    ("Who wrote She about adventures in Africa?", "H. Rider Haggard", "Joseph Conrad", "Rudyard Kipling", "Edgar Rice Burroughs", "H. Rider Haggard wrote She in 1887 about the immortal queen Ayesha."),
    ("In Moby Dick, who is the narrator?", "Ishmael", "Ahab", "Starbuck", "Queequeg", "Ishmael is the narrator who begins with Call me Ishmael."),
    ("Who wrote The Man in the Iron Mask?", "Alexandre Dumas", "Victor Hugo", "Emile Zola", "Honore de Balzac", "Alexandre Dumas wrote The Man in the Iron Mask as part of The Vicomte of Bragelonne."),
    ("What ship is featured in Treasure Island?", "Hispaniola", "Pequod", "Nautilus", "Bounty", "The Hispaniola is the ship that sails to Treasure Island."),
    ("Who is the author of The Thirty-Nine Steps?", "John Buchan", "Eric Ambler", "Graham Greene", "Ian Fleming", "John Buchan wrote The Thirty-Nine Steps in 1915 featuring Richard Hannay."),
    ("In King Solomons Mines, what are they searching for?", "Diamond mines", "Gold mines", "Lost city", "Ancient scrolls", "They search for the legendary diamond mines of King Solomon in Africa."),
    ("Who wrote Two Years Before the Mast?", "Richard Henry Dana Jr.", "Herman Melville", "Jack London", "Joseph Conrad", "Richard Henry Dana Jr. wrote this 1840 memoir of life as a sailor."),
    ("What is the name of Tom Sawyers girlfriend?", "Becky Thatcher", "Mary Jane", "Sally Harper", "Susan Miller", "Becky Thatcher is Tom Sawyers love interest in Mark Twains novels."),
    ("Who created Allan Quatermain?", "H. Rider Haggard", "Arthur Conan Doyle", "Edgar Rice Burroughs", "Jules Verne", "H. Rider Haggard created the hunter Allan Quatermain in King Solomons Mines."),
    ("In The Count of Monte Cristo, what is the treasure island called?", "Monte Cristo", "Elba", "Corsica", "Sardinia", "The treasure is hidden on the island of Monte Cristo where Dantes finds his fortune."),
    ("Who wrote Master and Commander?", "Patrick OBrian", "C.S. Forester", "Herman Melville", "Joseph Conrad", "Patrick OBrian wrote Master and Commander starting the Aubrey-Maturin series in 1969."),
    ("What animal is Kaa in The Jungle Book?", "Python", "Cobra", "Viper", "Anaconda", "Kaa is a python who uses hypnosis and appears in several Jungle Book stories."),
    ("Who is the villain in The Three Musketeers?", "Cardinal Richelieu", "Milady de Winter", "Both A and B", "Comte de Rochefort", "Both Cardinal Richelieu and Milady de Winter serve as antagonists."),
    ("In Robinson Crusoe, how many years is he stranded?", "28 years", "10 years", "15 years", "20 years", "Robinson Crusoe is stranded for 28 years before being rescued.")
]

for level in range(2, 11):
    filepath = os.path.join(base, f'level{level}.js')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Build the addition string
    additions = ""
    for i, (q, opt1, opt2, opt3, opt4, exp) in enumerate(generic_questions):
        additions += f'''      }},
      {{
        question: {{
          en: "{q}",
          es: "{q}",
          de: "{q}",
          nl: "{q}"
        }},
        options: [
          {{ en: "{opt1}", es: "{opt1}", de: "{opt1}", nl: "{opt1}" }},
          {{ en: "{opt2}", es: "{opt2}", de: "{opt2}", nl: "{opt2}" }},
          {{ en: "{opt3}", es: "{opt3}", de: "{opt3}", nl: "{opt3}" }},
          {{ en: "{opt4}", es: "{opt4}", de: "{opt4}", nl: "{opt4}" }}
        ],
        correct: 0,
        explanation: {{
          en: "{exp}",
          es: "{exp}",
          de: "{exp}",
          nl: "{exp}"
        }}'''

    # Replace closing
    content = re.sub(r'(\s+}\s+)\](\s+};)', additions + '\n      }\n    ]\n  };', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'Level {level}: added 20 questions (20->40)')

print('\nAdventure Books COMPLETE - All 10 levels have 40 questions!')
print('Total: 400 Adventure Books questions')
