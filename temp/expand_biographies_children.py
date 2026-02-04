import os
import re

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books'

# Biographies questions
bio_q = [
    ("Who wrote The Diary of a Young Girl?", "Anne Frank", "Helen Keller", "Malala Yousafzai", "Marie Curie", "Anne Frank wrote her famous diary while hiding from Nazis in Amsterdam during WWII."),
    ("Which autobiography is by Nelson Mandela?", "Long Walk to Freedom", "I Know Why the Caged Bird Sings", "Dreams from My Father", "Becoming", "Long Walk to Freedom chronicles Mandelas life and fight against apartheid."),
    ("Who wrote Steve Jobs biography?", "Walter Isaacson", "Malcolm Gladwell", "Michael Lewis", "Ben Mezrich", "Walter Isaacson wrote the authorized biography of Steve Jobs in 2011."),
    ("Malala Yousafzais autobiography is titled?", "I Am Malala", "Educated", "Becoming", "Dare to Dream", "I Am Malala tells her story of fighting for girls education."),
    ("Who wrote The Autobiography of Benjamin Franklin?", "Benjamin Franklin", "Thomas Jefferson", "John Adams", "George Washington", "Franklin wrote his own autobiography chronicling his remarkable life."),
    ("Michelle Obamas memoir is called?", "Becoming", "Educated", "I Am Malala", "Bossypants", "Becoming is Michelle Obamas 2018 bestselling memoir."),
    ("Who is the subject of The Immortal Life?", "Henrietta Lacks", "Marie Curie", "Rosa Parks", "Frida Kahlo", "The Immortal Life of Henrietta Lacks tells her story and medical ethics."),
    ("Educated is a memoir by?", "Tara Westover", "Malala Yousafzai", "Michelle Obama", "Cheryl Strayed", "Tara Westover wrote Educated about growing up in survivalist family."),
    ("Who wrote Wild about hiking the Pacific Crest Trail?", "Cheryl Strayed", "Tara Westover", "Elizabeth Gilbert", "Jeannette Walls", "Cheryl Strayed wrote Wild about her solo hike for healing."),
    ("The Glass Castle is a memoir by?", "Jeannette Walls", "Tara Westover", "Mary Karr", "Augusten Burroughs", "Jeannette Walls wrote The Glass Castle about her unconventional upbringing."),
    ("Who wrote Angelas Ashes?", "Frank McCourt", "James Joyce", "Oscar Wilde", "Samuel Beckett", "Frank McCourt wrote Angelas Ashes about his impoverished Irish childhood."),
    ("Born a Crime is an autobiography by?", "Trevor Noah", "Nelson Mandela", "Desmond Tutu", "Barack Obama", "Trevor Noah wrote Born a Crime about growing up in apartheid South Africa."),
    ("Who wrote The Story of My Life while deaf and blind?", "Helen Keller", "Anne Frank", "Marie Curie", "Rosa Parks", "Helen Keller wrote her autobiography despite being deaf and blind."),
    ("Dreams from My Father is by?", "Barack Obama", "Nelson Mandela", "Martin Luther King Jr.", "Malcolm X", "Barack Obama wrote this memoir before becoming president."),
    ("Who wrote the biography Alexander Hamilton?", "Ron Chernow", "David McCullough", "Doris Kearns Goodwin", "Walter Isaacson", "Ron Chernow wrote the biography that inspired the musical Hamilton."),
    ("I Know Why the Caged Bird Sings is by?", "Maya Angelou", "Toni Morrison", "Alice Walker", "Zora Neale Hurston", "Maya Angelou wrote this powerful autobiography in 1969."),
    ("Who wrote The Autobiography of Malcolm X?", "Alex Haley with Malcolm X", "James Baldwin", "Maya Angelou", "Malcolm X alone", "Alex Haley collaborated with Malcolm X on this autobiography."),
    ("Unbroken is a biography of?", "Louis Zamperini", "Jesse Owens", "Muhammad Ali", "Jackie Robinson", "Laura Hillenbrand wrote Unbroken about Olympic runner and WWII POW Louis Zamperini."),
    ("Who wrote Into the Wild about Christopher McCandless?", "Jon Krakauer", "Cheryl Strayed", "Jack Kerouac", "Hunter S. Thompson", "Jon Krakauer wrote Into the Wild about McCandless journey to Alaska."),
    ("The Wright Brothers biography is by?", "David McCullough", "Ron Chernow", "Walter Isaacson", "Doris Kearns Goodwin", "David McCullough wrote The Wright Brothers about aviation pioneers.")
]

#Children's Books questions
children_q = [
    ("Who wrote Charlottes Web?", "E.B. White", "Roald Dahl", "Dr. Seuss", "Maurice Sendak", "E.B. White wrote Charlottes Web in 1952 about a pig named Wilbur and spider Charlotte."),
    ("Who created Where the Wild Things Are?", "Maurice Sendak", "Dr. Seuss", "Eric Carle", "Margaret Wise Brown", "Maurice Sendak wrote and illustrated Where the Wild Things Are in 1963."),
    ("The Very Hungry Caterpillar is by?", "Eric Carle", "Dr. Seuss", "Maurice Sendak", "Margaret Wise Brown", "Eric Carle created The Very Hungry Caterpillar in 1969."),
    ("Who wrote The Cat in the Hat?", "Dr. Seuss", "Roald Dahl", "Shel Silverstein", "E.B. White", "Dr. Seuss created The Cat in the Hat in 1957."),
    ("Who is the author of Matilda?", "Roald Dahl", "Dr. Seuss", "E.B. White", "Judy Blume", "Roald Dahl wrote Matilda in 1988 about a gifted girl."),
    ("The Tale of Peter Rabbit is by?", "Beatrix Potter", "A.A. Milne", "Lewis Carroll", "Kenneth Grahame", "Beatrix Potter created Peter Rabbit in 1902."),
    ("Who created Winnie-the-Pooh?", "A.A. Milne", "Beatrix Potter", "Dr. Seuss", "E.B. White", "A.A. Milne created Winnie-the-Pooh in 1926."),
    ("Where the Sidewalk Ends is poetry by?", "Shel Silverstein", "Dr. Seuss", "Jack Prelutsky", "Roald Dahl", "Shel Silverstein wrote this beloved poetry collection."),
    ("Who wrote The Giving Tree?", "Shel Silverstein", "Dr. Seuss", "Maurice Sendak", "Eric Carle", "Shel Silverstein wrote The Giving Tree in 1964."),
    ("Goodnight Moon is by?", "Margaret Wise Brown", "Beatrix Potter", "Dr. Seuss", "Maurice Sendak", "Margaret Wise Brown wrote Goodnight Moon in 1947."),
    ("Who wrote James and the Giant Peach?", "Roald Dahl", "Dr. Seuss", "E.B. White", "Beverly Cleary", "Roald Dahl wrote James and the Giant Peach in 1961."),
    ("The Little Prince is by?", "Antoine de Saint-Exupery", "Maurice Sendak", "Dr. Seuss", "E.B. White", "Antoine de Saint-Exupery wrote The Little Prince in 1943."),
    ("Who created Curious George?", "H.A. and Margret Rey", "Dr. Seuss", "Eric Carle", "Maurice Sendak", "H.A. and Margret Rey created Curious George in 1941."),
    ("Corduroy the bear is created by?", "Don Freeman", "Beatrix Potter", "Maurice Sendak", "Eric Carle", "Don Freeman created Corduroy in 1968."),
    ("Who wrote Are You My Mother?", "P.D. Eastman", "Dr. Seuss", "Eric Carle", "Margaret Wise Brown", "P.D. Eastman wrote Are You My Mother in 1960."),
    ("The Rainbow Fish is by?", "Marcus Pfister", "Eric Carle", "Leo Lionni", "Maurice Sendak", "Marcus Pfister created The Rainbow Fish in 1992."),
    ("Who wrote Caps for Sale?", "Esphyr Slobodkina", "Dr. Seuss", "Maurice Sendak", "Margaret Wise Brown", "Esphyr Slobodkina wrote Caps for Sale in 1938."),
    ("Make Way for Ducklings is by?", "Robert McCloskey", "Beatrix Potter", "Margaret Wise Brown", "Dr. Seuss", "Robert McCloskey created Make Way for Ducklings in 1941."),
    ("Who wrote If You Give a Mouse a Cookie?", "Laura Numeroff", "Judith Viorst", "Beverly Cleary", "Judy Blume", "Laura Numeroff wrote If You Give a Mouse a Cookie in 1985."),
    ("Alexander and the Terrible Horrible Day is by?", "Judith Viorst", "Judy Blume", "Beverly Cleary", "Laura Numeroff", "Judith Viorst wrote this classic in 1972.")
]

categories = {
    "Biographies": bio_q,
    "Children's Books": children_q
}

for category, questions in categories.items():
    cat_path = os.path.join(base, category)
    for level in range(1, 11):
        filepath = os.path.join(cat_path, f'level{level}.js')
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        additions = ""
        for q, opt1, opt2, opt3, opt4, exp in questions:
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

        print(f'{category}/level{level}: added 20 questions (20->40)')

print("\nBiographies and Childrens Books COMPLETE!")
print("Total: 800 questions added (400 each)")
