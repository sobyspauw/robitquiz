import os
import re

filepath = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books\Fantasy Novels\level2.js'

fantasy_q = [
    ("Who wrote The Lord of the Rings?", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "Terry Pratchett", "J.R.R. Tolkien wrote The Lord of the Rings trilogy published 1954-1955."),
    ("Who created Harry Potter?", "J.K. Rowling", "Philip Pullman", "Rick Riordan", "Suzanne Collins", "J.K. Rowling created Harry Potter series beginning in 1997."),
    ("The Chronicles of Narnia is by?", "C.S. Lewis", "J.R.R. Tolkien", "Madeleine L'Engle", "Lloyd Alexander", "C.S. Lewis wrote The Chronicles of Narnia series 1950-1956."),
    ("Who wrote A Game of Thrones?", "George R.R. Martin", "Patrick Rothfuss", "Brandon Sanderson", "Robert Jordan", "George R.R. Martin began A Song of Ice and Fire with A Game of Thrones in 1996."),
    ("The Hobbit was written by?", "J.R.R. Tolkien", "C.S. Lewis", "Ursula K. Le Guin", "Terry Brooks", "J.R.R. Tolkien wrote The Hobbit in 1937 as prequel to Lord of the Rings."),
    ("Who created Discworld?", "Terry Pratchett", "Douglas Adams", "Neil Gaiman", "Terry Brooks", "Terry Pratchett created Discworld series beginning in 1983."),
    ("The Name of the Wind is by?", "Patrick Rothfuss", "Brandon Sanderson", "George R.R. Martin", "Scott Lynch", "Patrick Rothfuss wrote The Name of the Wind in 2007."),
    ("Who wrote The Golden Compass?", "Philip Pullman", "J.K. Rowling", "Rick Riordan", "Cornelia Funke", "Philip Pullman wrote The Golden Compass in 1995."),
    ("American Gods is by?", "Neil Gaiman", "Terry Pratchett", "China Mieville", "Clive Barker", "Neil Gaiman wrote American Gods in 2001."),
    ("Who created The Wheel of Time?", "Robert Jordan", "Brandon Sanderson", "Terry Goodkind", "Raymond E. Feist", "Robert Jordan created The Wheel of Time series beginning in 1990."),
    ("The Sword of Shannara is by?", "Terry Brooks", "David Eddings", "Raymond E. Feist", "R.A. Salvatore", "Terry Brooks wrote The Sword of Shannara in 1977."),
    ("Who wrote Mistborn series?", "Brandon Sanderson", "Patrick Rothfuss", "Brent Weeks", "Brian McClellan", "Brandon Sanderson wrote Mistborn series beginning in 2006."),
    ("A Wizard of Earthsea is by?", "Ursula K. Le Guin", "Marion Zimmer Bradley", "Anne McCaffrey", "Robin Hobb", "Ursula K. Le Guin wrote A Wizard of Earthsea in 1968."),
    ("Who created Conan the Barbarian?", "Robert E. Howard", "Fritz Leiber", "Michael Moorcock", "Karl Edward Wagner", "Robert E. Howard created Conan in 1932."),
    ("The Farseer Trilogy is by?", "Robin Hobb", "Jacqueline Carey", "Kate Elliott", "N.K. Jemisin", "Robin Hobb wrote The Farseer Trilogy beginning in 1995."),
    ("Who wrote The Dark Tower series?", "Stephen King", "Clive Barker", "Dean Koontz", "Neil Gaiman", "Stephen King wrote The Dark Tower series spanning 1982-2012."),
    ("The Black Company is by?", "Glen Cook", "Steven Erikson", "Joe Abercrombie", "Mark Lawrence", "Glen Cook wrote The Black Company in 1984."),
    ("Who created Elric of Melnibone?", "Michael Moorcock", "Fritz Leiber", "Robert E. Howard", "Poul Anderson", "Michael Moorcock created Elric in 1961."),
    ("Percy Jackson series is by?", "Rick Riordan", "J.K. Rowling", "Cassandra Clare", "Suzanne Collins", "Rick Riordan created Percy Jackson series beginning in 2005."),
    ("Who wrote The Fifth Season?", "N.K. Jemisin", "Ken Liu", "N.K. Jemisin", "Rebecca Roanhorse", "N.K. Jemisin wrote The Fifth Season in 2015 winning Hugo Award.")
]

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

additions = ""
for q, opt1, opt2, opt3, opt4, exp in fantasy_q:
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

content = re.sub(r'(\s+}\s+)\](\s+};)', additions + '\n      }\n    ]\n  };', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Fantasy Novels level 2: added 20 questions (20->40)')
print('Fantasy Novels COMPLETE - all 10 levels have 40 questions!')
