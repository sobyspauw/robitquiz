import os
import re

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books\Adventure Books'

# 20 additional questions for level 1
level1_additions = '''      },
      {
        question: {
          en: "Who wrote 'The Lost World' featuring Professor Challenger?",
          es: "Who wrote 'The Lost World' featuring Professor Challenger?",
          de: "Who wrote 'The Lost World' featuring Professor Challenger?",
          nl: "Who wrote 'The Lost World' featuring Professor Challenger?"
        },
        options: [
          { en: "Arthur Conan Doyle", es: "Arthur Conan Doyle", de: "Arthur Conan Doyle", nl: "Arthur Conan Doyle" },
          { en: "H.G. Wells", es: "H.G. Wells", de: "H.G. Wells", nl: "H.G. Wells" },
          { en: "Jules Verne", es: "Jules Verne", de: "Jules Verne", nl: "Jules Verne" },
          { en: "Edgar Rice Burroughs", es: "Edgar Rice Burroughs", de: "Edgar Rice Burroughs", nl: "Edgar Rice Burroughs" }
        ],
        correct: 0,
        explanation: {
          en: "Arthur Conan Doyle wrote The Lost World in 1912, featuring Professor Challenger discovering dinosaurs on a remote plateau.",
          es: "Arthur Conan Doyle wrote The Lost World in 1912, featuring Professor Challenger discovering dinosaurs on a remote plateau.",
          de: "Arthur Conan Doyle wrote The Lost World in 1912, featuring Professor Challenger discovering dinosaurs on a remote plateau.",
          nl: "Arthur Conan Doyle wrote The Lost World in 1912, featuring Professor Challenger discovering dinosaurs on a remote plateau."
        }
      },
      {
        question: {
          en: "What is the name of Robinson Crusoe's companion?",
          es: "What is the name of Robinson Crusoe's companion?",
          de: "What is the name of Robinson Crusoe's companion?",
          nl: "What is the name of Robinson Crusoe's companion?"
        },
        options: [
          { en: "Friday", es: "Friday", de: "Friday", nl: "Friday" },
          { en: "Thursday", es: "Thursday", de: "Thursday", nl: "Thursday" },
          { en: "Saturday", es: "Saturday", de: "Saturday", nl: "Saturday" },
          { en: "Sunday", es: "Sunday", de: "Sunday", nl: "Sunday" }
        ],
        correct: 0,
        explanation: {
          en: "Friday is the native companion Robinson Crusoe rescues and names after the day they meet.",
          es: "Friday is the native companion Robinson Crusoe rescues and names after the day they meet.",
          de: "Friday is the native companion Robinson Crusoe rescues and names after the day they meet.",
          nl: "Friday is the native companion Robinson Crusoe rescues and names after the day they meet."
        }
      },
      {
        question: {
          en: "In which book does Edmond Dantes seek revenge?",
          es: "In which book does Edmond Dantes seek revenge?",
          de: "In which book does Edmond Dantes seek revenge?",
          nl: "In which book does Edmond Dantes seek revenge?"
        },
        options: [
          { en: "The Count of Monte Cristo", es: "The Count of Monte Cristo", de: "The Count of Monte Cristo", nl: "The Count of Monte Cristo" },
          { en: "The Three Musketeers", es: "The Three Musketeers", de: "The Three Musketeers", nl: "The Three Musketeers" },
          { en: "The Man in the Iron Mask", es: "The Man in the Iron Mask", de: "The Man in the Iron Mask", nl: "The Man in the Iron Mask" },
          { en: "The Corsican Brothers", es: "The Corsican Brothers", de: "The Corsican Brothers", nl: "The Corsican Brothers" }
        ],
        correct: 0,
        explanation: {
          en: "Edmond Dantes is wrongfully imprisoned and returns as the Count of Monte Cristo to exact elaborate revenge.",
          es: "Edmond Dantes is wrongfully imprisoned and returns as the Count of Monte Cristo to exact elaborate revenge.",
          de: "Edmond Dantes is wrongfully imprisoned and returns as the Count of Monte Cristo to exact elaborate revenge.",
          nl: "Edmond Dantes is wrongfully imprisoned and returns as the Count of Monte Cristo to exact elaborate revenge."
        }
      },
      {
        question: {
          en: "Who is the author of White Fang?",
          es: "Who is the author of White Fang?",
          de: "Who is the author of White Fang?",
          nl: "Who is the author of White Fang?"
        },
        options: [
          { en: "Jack London", es: "Jack London", de: "Jack London", nl: "Jack London" },
          { en: "Rudyard Kipling", es: "Rudyard Kipling", de: "Rudyard Kipling", nl: "Rudyard Kipling" },
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" }
        ],
        correct: 0,
        explanation: {
          en: "Jack London wrote White Fang in 1906 about a wild wolfdog domesticated in the Yukon.",
          es: "Jack London wrote White Fang in 1906 about a wild wolfdog domesticated in the Yukon.",
          de: "Jack London wrote White Fang in 1906 about a wild wolfdog domesticated in the Yukon.",
          nl: "Jack London wrote White Fang in 1906 about a wild wolfdog domesticated in the Yukon."
        }
      },
      {
        question: {
          en: "What ship does Captain Ahab command in Moby Dick?",
          es: "What ship does Captain Ahab command in Moby Dick?",
          de: "What ship does Captain Ahab command in Moby Dick?",
          nl: "What ship does Captain Ahab command in Moby Dick?"
        },
        options: [
          { en: "Pequod", es: "Pequod", de: "Pequod", nl: "Pequod" },
          { en: "Nautilus", es: "Nautilus", de: "Nautilus", nl: "Nautilus" },
          { en: "Hispaniola", es: "Hispaniola", de: "Hispaniola", nl: "Hispaniola" },
          { en: "Bounty", es: "Bounty", de: "Bounty", nl: "Bounty" }
        ],
        correct: 0,
        explanation: {
          en: "The Pequod is the whaling ship commanded by Captain Ahab in his quest for Moby Dick.",
          es: "The Pequod is the whaling ship commanded by Captain Ahab in his quest for Moby Dick.",
          de: "The Pequod is the whaling ship commanded by Captain Ahab in his quest for Moby Dick.",
          nl: "The Pequod is the whaling ship commanded by Captain Ahab in his quest for Moby Dick."
        }
      },
      {
        question: {
          en: "Who created Tarzan?",
          es: "Who created Tarzan?",
          de: "Who created Tarzan?",
          nl: "Who created Tarzan?"
        },
        options: [
          { en: "Edgar Rice Burroughs", es: "Edgar Rice Burroughs", de: "Edgar Rice Burroughs", nl: "Edgar Rice Burroughs" },
          { en: "Rudyard Kipling", es: "Rudyard Kipling", de: "Rudyard Kipling", nl: "Rudyard Kipling" },
          { en: "H. Rider Haggard", es: "H. Rider Haggard", de: "H. Rider Haggard", nl: "H. Rider Haggard" },
          { en: "Joseph Conrad", es: "Joseph Conrad", de: "Joseph Conrad", nl: "Joseph Conrad" }
        ],
        correct: 0,
        explanation: {
          en: "Edgar Rice Burroughs created Tarzan in 1912 with Tarzan of the Apes, about a boy raised by apes in Africa.",
          es: "Edgar Rice Burroughs created Tarzan in 1912 with Tarzan of the Apes, about a boy raised by apes in Africa.",
          de: "Edgar Rice Burroughs created Tarzan in 1912 with Tarzan of the Apes, about a boy raised by apes in Africa.",
          nl: "Edgar Rice Burroughs created Tarzan in 1912 with Tarzan of the Apes, about a boy raised by apes in Africa."
        }
      },
      {
        question: {
          en: "In Treasure Island, what is Jim Hawkins searching for?",
          es: "In Treasure Island, what is Jim Hawkins searching for?",
          de: "In Treasure Island, what is Jim Hawkins searching for?",
          nl: "In Treasure Island, what is Jim Hawkins searching for?"
        },
        options: [
          { en: "Buried pirate treasure", es: "Buried pirate treasure", de: "Buried pirate treasure", nl: "Buried pirate treasure" },
          { en: "His lost family", es: "His lost family", de: "His lost family", nl: "His lost family" },
          { en: "A magical artifact", es: "A magical artifact", de: "A magical artifact", nl: "A magical artifact" },
          { en: "The fountain of youth", es: "The fountain of youth", de: "The fountain of youth", nl: "The fountain of youth" }
        ],
        correct: 0,
        explanation: {
          en: "Jim Hawkins searches for Captain Flints buried treasure using a treasure map in Treasure Island.",
          es: "Jim Hawkins searches for Captain Flints buried treasure using a treasure map in Treasure Island.",
          de: "Jim Hawkins searches for Captain Flints buried treasure using a treasure map in Treasure Island.",
          nl: "Jim Hawkins searches for Captain Flints buried treasure using a treasure map in Treasure Island."
        }
      },
      {
        question: {
          en: "What is the name of the submarine in Twenty Thousand Leagues Under the Sea?",
          es: "What is the name of the submarine in Twenty Thousand Leagues Under the Sea?",
          de: "What is the name of the submarine in Twenty Thousand Leagues Under the Sea?",
          nl: "What is the name of the submarine in Twenty Thousand Leagues Under the Sea?"
        },
        options: [
          { en: "Nautilus", es: "Nautilus", de: "Nautilus", nl: "Nautilus" },
          { en: "Alvin", es: "Alvin", de: "Alvin", nl: "Alvin" },
          { en: "Triton", es: "Triton", de: "Triton", nl: "Triton" },
          { en: "Seaquest", es: "Seaquest", de: "Seaquest", nl: "Seaquest" }
        ],
        correct: 0,
        explanation: {
          en: "The Nautilus is Captain Nemos advanced submarine in Jules Vernes novel.",
          es: "The Nautilus is Captain Nemos advanced submarine in Jules Vernes novel.",
          de: "The Nautilus is Captain Nemos advanced submarine in Jules Vernes novel.",
          nl: "The Nautilus is Captain Nemos advanced submarine in Jules Vernes novel."
        }
      },
      {
        question: {
          en: "Who wrote The Last of the Mohicans?",
          es: "Who wrote The Last of the Mohicans?",
          de: "Who wrote The Last of the Mohicans?",
          nl: "Who wrote The Last of the Mohicans?"
        },
        options: [
          { en: "James Fenimore Cooper", es: "James Fenimore Cooper", de: "James Fenimore Cooper", nl: "James Fenimore Cooper" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" },
          { en: "Washington Irving", es: "Washington Irving", de: "Washington Irving", nl: "Washington Irving" },
          { en: "Nathaniel Hawthorne", es: "Nathaniel Hawthorne", de: "Nathaniel Hawthorne", nl: "Nathaniel Hawthorne" }
        ],
        correct: 0,
        explanation: {
          en: "James Fenimore Cooper wrote The Last of the Mohicans in 1826 during the French and Indian War.",
          es: "James Fenimore Cooper wrote The Last of the Mohicans in 1826 during the French and Indian War.",
          de: "James Fenimore Cooper wrote The Last of the Mohicans in 1826 during the French and Indian War.",
          nl: "James Fenimore Cooper wrote The Last of the Mohicans in 1826 during the French and Indian War."
        }
      },
      {
        question: {
          en: "What animal is Baloo in The Jungle Book?",
          es: "What animal is Baloo in The Jungle Book?",
          de: "What animal is Baloo in The Jungle Book?",
          nl: "What animal is Baloo in The Jungle Book?"
        },
        options: [
          { en: "Bear", es: "Bear", de: "Bear", nl: "Bear" },
          { en: "Panther", es: "Panther", de: "Panther", nl: "Panther" },
          { en: "Wolf", es: "Wolf", de: "Wolf", nl: "Wolf" },
          { en: "Tiger", es: "Tiger", de: "Tiger", nl: "Tiger" }
        ],
        correct: 0,
        explanation: {
          en: "Baloo is the friendly bear who teaches Mowgli the Law of the Jungle.",
          es: "Baloo is the friendly bear who teaches Mowgli the Law of the Jungle.",
          de: "Baloo is the friendly bear who teaches Mowgli the Law of the Jungle.",
          nl: "Baloo is the friendly bear who teaches Mowgli the Law of the Jungle."
        }
      },
      {
        question: {
          en: "In what year was Robinson Crusoe published?",
          es: "In what year was Robinson Crusoe published?",
          de: "In what year was Robinson Crusoe published?",
          nl: "In what year was Robinson Crusoe published?"
        },
        options: [
          { en: "1719", es: "1719", de: "1719", nl: "1719" },
          { en: "1750", es: "1750", de: "1750", nl: "1750" },
          { en: "1812", es: "1812", de: "1812", nl: "1812" },
          { en: "1883", es: "1883", de: "1883", nl: "1883" }
        ],
        correct: 0,
        explanation: {
          en: "Robinson Crusoe was published in 1719 and is one of the earliest English novels.",
          es: "Robinson Crusoe was published in 1719 and is one of the earliest English novels.",
          de: "Robinson Crusoe was published in 1719 and is one of the earliest English novels.",
          nl: "Robinson Crusoe was published in 1719 and is one of the earliest English novels."
        }
      },
      {
        question: {
          en: "Who is the villain in Treasure Island?",
          es: "Who is the villain in Treasure Island?",
          de: "Who is the villain in Treasure Island?",
          nl: "Who is the villain in Treasure Island?"
        },
        options: [
          { en: "Long John Silver", es: "Long John Silver", de: "Long John Silver", nl: "Long John Silver" },
          { en: "Captain Flint", es: "Captain Flint", de: "Captain Flint", nl: "Captain Flint" },
          { en: "Billy Bones", es: "Billy Bones", de: "Billy Bones", nl: "Billy Bones" },
          { en: "Israel Hands", es: "Israel Hands", de: "Israel Hands", nl: "Israel Hands" }
        ],
        correct: 0,
        explanation: {
          en: "Long John Silver is the one-legged pirate and main antagonist though he is complex and sometimes sympathetic.",
          es: "Long John Silver is the one-legged pirate and main antagonist though he is complex and sometimes sympathetic.",
          de: "Long John Silver is the one-legged pirate and main antagonist though he is complex and sometimes sympathetic.",
          nl: "Long John Silver is the one-legged pirate and main antagonist though he is complex and sometimes sympathetic."
        }
      },
      {
        question: {
          en: "What is the name of dArtagnan famous motto?",
          es: "What is the name of dArtagnan famous motto?",
          de: "What is the name of dArtagnan famous motto?",
          nl: "What is the name of dArtagnan famous motto?"
        },
        options: [
          { en: "All for one and one for all", es: "All for one and one for all", de: "All for one and one for all", nl: "All for one and one for all" },
          { en: "Liberty equality fraternity", es: "Liberty equality fraternity", de: "Liberty equality fraternity", nl: "Liberty equality fraternity" },
          { en: "To be or not to be", es: "To be or not to be", de: "To be or not to be", nl: "To be or not to be" },
          { en: "United we stand", es: "United we stand", de: "United we stand", nl: "United we stand" }
        ],
        correct: 0,
        explanation: {
          en: "All for one and one for all is the motto of the Three Musketeers representing their loyalty.",
          es: "All for one and one for all is the motto of the Three Musketeers representing their loyalty.",
          de: "All for one and one for all is the motto of the Three Musketeers representing their loyalty.",
          nl: "All for one and one for all is the motto of the Three Musketeers representing their loyalty."
        }
      },
      {
        question: {
          en: "Where does Around the World in Eighty Days begin?",
          es: "Where does Around the World in Eighty Days begin?",
          de: "Where does Around the World in Eighty Days begin?",
          nl: "Where does Around the World in Eighty Days begin?"
        },
        options: [
          { en: "London", es: "London", de: "London", nl: "London" },
          { en: "Paris", es: "Paris", de: "Paris", nl: "Paris" },
          { en: "New York", es: "New York", de: "New York", nl: "New York" },
          { en: "Tokyo", es: "Tokyo", de: "Tokyo", nl: "Tokyo" }
        ],
        correct: 0,
        explanation: {
          en: "Phileas Fogg begins his journey from London making a wager at the Reform Club.",
          es: "Phileas Fogg begins his journey from London making a wager at the Reform Club.",
          de: "Phileas Fogg begins his journey from London making a wager at the Reform Club.",
          nl: "Phileas Fogg begins his journey from London making a wager at the Reform Club."
        }
      },
      {
        question: {
          en: "Who is Shere Khan in The Jungle Book?",
          es: "Who is Shere Khan in The Jungle Book?",
          de: "Who is Shere Khan in The Jungle Book?",
          nl: "Who is Shere Khan in The Jungle Book?"
        },
        options: [
          { en: "A tiger who hunts Mowgli", es: "A tiger who hunts Mowgli", de: "A tiger who hunts Mowgli", nl: "A tiger who hunts Mowgli" },
          { en: "A friendly elephant", es: "A friendly elephant", de: "A friendly elephant", nl: "A friendly elephant" },
          { en: "A wise monkey", es: "A wise monkey", de: "A wise monkey", nl: "A wise monkey" },
          { en: "A snake", es: "A snake", de: "A snake", nl: "A snake" }
        ],
        correct: 0,
        explanation: {
          en: "Shere Khan is the Bengal tiger who is Mowglis archenemy and wants to kill him.",
          es: "Shere Khan is the Bengal tiger who is Mowglis archenemy and wants to kill him.",
          de: "Shere Khan is the Bengal tiger who is Mowglis archenemy and wants to kill him.",
          nl: "Shere Khan is the Bengal tiger who is Mowglis archenemy and wants to kill him."
        }
      },
      {
        question: {
          en: "What is the first name of Dr Jekyll in the famous adventure novel?",
          es: "What is the first name of Dr Jekyll in the famous adventure novel?",
          de: "What is the first name of Dr Jekyll in the famous adventure novel?",
          nl: "What is the first name of Dr Jekyll in the famous adventure novel?"
        },
        options: [
          { en: "Henry", es: "Henry", de: "Henry", nl: "Henry" },
          { en: "Edward", es: "Edward", de: "Edward", nl: "Edward" },
          { en: "William", es: "William", de: "William", nl: "William" },
          { en: "Robert", es: "Robert", de: "Robert", nl: "Robert" }
        ],
        correct: 0,
        explanation: {
          en: "Dr Henry Jekyll is the protagonist of Robert Louis Stevensons Dr Jekyll and Mr Hyde.",
          es: "Dr Henry Jekyll is the protagonist of Robert Louis Stevensons Dr Jekyll and Mr Hyde.",
          de: "Dr Henry Jekyll is the protagonist of Robert Louis Stevensons Dr Jekyll and Mr Hyde.",
          nl: "Dr Henry Jekyll is the protagonist of Robert Louis Stevensons Dr Jekyll and Mr Hyde."
        }
      },
      {
        question: {
          en: "In The Call of the Wild, where is Buck taken?",
          es: "In The Call of the Wild, where is Buck taken?",
          de: "In The Call of the Wild, where is Buck taken?",
          nl: "In The Call of the Wild, where is Buck taken?"
        },
        options: [
          { en: "Yukon during the gold rush", es: "Yukon during the gold rush", de: "Yukon during the gold rush", nl: "Yukon during the gold rush" },
          { en: "Amazon rainforest", es: "Amazon rainforest", de: "Amazon rainforest", nl: "Amazon rainforest" },
          { en: "African savanna", es: "African savanna", de: "African savanna", nl: "African savanna" },
          { en: "Arctic Circle", es: "Arctic Circle", de: "Arctic Circle", nl: "Arctic Circle" }
        ],
        correct: 0,
        explanation: {
          en: "Buck is stolen and taken to the Yukon to work as a sled dog during the Klondike Gold Rush.",
          es: "Buck is stolen and taken to the Yukon to work as a sled dog during the Klondike Gold Rush.",
          de: "Buck is stolen and taken to the Yukon to work as a sled dog during the Klondike Gold Rush.",
          nl: "Buck is stolen and taken to the Yukon to work as a sled dog during the Klondike Gold Rush."
        }
      },
      {
        question: {
          en: "Who wrote Kidnapped?",
          es: "Who wrote Kidnapped?",
          de: "Who wrote Kidnapped?",
          nl: "Who wrote Kidnapped?"
        },
        options: [
          { en: "Robert Louis Stevenson", es: "Robert Louis Stevenson", de: "Robert Louis Stevenson", nl: "Robert Louis Stevenson" },
          { en: "Daniel Defoe", es: "Daniel Defoe", de: "Daniel Defoe", nl: "Daniel Defoe" },
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "Walter Scott", es: "Walter Scott", de: "Walter Scott", nl: "Walter Scott" }
        ],
        correct: 0,
        explanation: {
          en: "Robert Louis Stevenson wrote Kidnapped in 1886 set in 18th century Scotland.",
          es: "Robert Louis Stevenson wrote Kidnapped in 1886 set in 18th century Scotland.",
          de: "Robert Louis Stevenson wrote Kidnapped in 1886 set in 18th century Scotland.",
          nl: "Robert Louis Stevenson wrote Kidnapped in 1886 set in 18th century Scotland."
        }
      },
      {
        question: {
          en: "What is the profession of Allan Quatermain in King Solomons Mines?",
          es: "What is the profession of Allan Quatermain in King Solomons Mines?",
          de: "What is the profession of Allan Quatermain in King Solomons Mines?",
          nl: "What is the profession of Allan Quatermain in King Solomons Mines?"
        },
        options: [
          { en: "Hunter and explorer", es: "Hunter and explorer", de: "Hunter and explorer", nl: "Hunter and explorer" },
          { en: "Pirate", es: "Pirate", de: "Pirate", nl: "Pirate" },
          { en: "Detective", es: "Detective", de: "Detective", nl: "Detective" },
          { en: "Soldier", es: "Soldier", de: "Soldier", nl: "Soldier" }
        ],
        correct: 0,
        explanation: {
          en: "Allan Quatermain is a professional hunter and explorer in Africa who leads treasure hunts.",
          es: "Allan Quatermain is a professional hunter and explorer in Africa who leads treasure hunts.",
          de: "Allan Quatermain is a professional hunter and explorer in Africa who leads treasure hunts.",
          nl: "Allan Quatermain is a professional hunter and explorer in Africa who leads treasure hunts."
        }
      },
      {
        question: {
          en: "In The Count of Monte Cristo, where is Edmond Dantes imprisoned?",
          es: "In The Count of Monte Cristo, where is Edmond Dantes imprisoned?",
          de: "In The Count of Monte Cristo, where is Edmond Dantes imprisoned?",
          nl: "In The Count of Monte Cristo, where is Edmond Dantes imprisoned?"
        },
        options: [
          { en: "Chateau dIf", es: "Chateau dIf", de: "Chateau dIf", nl: "Chateau dIf" },
          { en: "The Bastille", es: "The Bastille", de: "The Bastille", nl: "The Bastille" },
          { en: "Tower of London", es: "Tower of London", de: "Tower of London", nl: "Tower of London" },
          { en: "Alcatraz", es: "Alcatraz", de: "Alcatraz", nl: "Alcatraz" }
        ],
        correct: 0,
        explanation: {
          en: "Edmond Dantes is wrongfully imprisoned in the Chateau dIf fortress for 14 years.",
          es: "Edmond Dantes is wrongfully imprisoned in the Chateau dIf fortress for 14 years.",
          de: "Edmond Dantes is wrongfully imprisoned in the Chateau dIf fortress for 14 years.",
          nl: "Edmond Dantes is wrongfully imprisoned in the Chateau dIf fortress for 14 years."
        }
      }'''

# Process level1
filepath = os.path.join(base, 'level1.js')
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the closing before ]
content = re.sub(r'(\s+}\s+)\](\s+};)', level1_additions + '\n      }\n    ]\n  };', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Adventure Books level 1: added 20 questions (20->40)')
print('Total: 40 questions')
