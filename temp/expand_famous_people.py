import os
import re

base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people'

questions = [
    ("What makes someone famous?", "Wide public recognition", "Being wealthy", "Being tall", "Living long", "Fame comes from being widely recognized by the public for achievements or notoriety."),
    ("What is a biography?", "Written account of someone's life", "Fiction novel", "Poem", "Diary", "A biography is a detailed written account of a person's life."),
    ("What is legacy?", "Impact left after death", "Inheritance money", "Building", "Award", "A legacy is the lasting impact and influence someone leaves behind."),
    ("What is an achievement?", "Accomplishment requiring effort", "Luck", "Gift", "Purchase", "An achievement is something accomplished through skill, effort, or courage."),
    ("What is influence?", "Power to affect others", "Money", "Fame", "Position", "Influence is the capacity to have an effect on the development or behavior of others."),
    ("What is a pioneer?", "First to do something", "Follower", "Critic", "Observer", "A pioneer is someone who is among the first to explore or develop new areas."),
    ("What is innovation?", "Creating something new", "Copying others", "Tradition", "Routine", "Innovation involves introducing new ideas, methods, or products."),
    ("What is talent?", "Natural ability", "Learned skill only", "Money", "Fame", "Talent is a natural aptitude or skill in a particular area."),
    ("What is dedication?", "Commitment to a purpose", "Laziness", "Indifference", "Confusion", "Dedication is committed devotion to a task or purpose."),
    ("What is leadership?", "Guiding and inspiring others", "Following orders", "Working alone", "Avoiding responsibility", "Leadership is the action of leading a group toward a common goal."),
    ("What is creativity?", "Ability to create original ideas", "Copying", "Routine work", "Memorization", "Creativity is the use of imagination to create original ideas or things."),
    ("What is contribution?", "Adding value to society", "Taking resources", "Neutral impact", "Observation only", "A contribution is a gift or payment made to help achieve something."),
    ("What is recognition?", "Acknowledgment of achievements", "Criticism", "Ignoring", "Forgetting", "Recognition is identification and acknowledgment of someone's achievements."),
    ("What is perseverance?", "Persistence despite difficulties", "Giving up", "Luck", "Natural talent", "Perseverance is continued effort despite difficulties or opposition."),
    ("What is charisma?", "Compelling charm and appeal", "Physical strength", "Intelligence only", "Wealth", "Charisma is compelling attractiveness or charm that inspires devotion in others."),
    ("What is philanthropy?", "Generous donation to good causes", "Making money", "Self-promotion", "Criticism", "Philanthropy is the desire to promote welfare through generous donations."),
    ("What is an icon?", "Widely recognized symbol or person", "Unknown person", "Building", "Object", "An icon is a person or thing regarded as a representative symbol."),
    ("What is autobiography?", "Self-written life story", "Biography by others", "Fiction", "Essay", "An autobiography is an account of a person's life written by that person."),
    ("What is breakthrough?", "Sudden important discovery", "Gradual progress", "Failure", "Routine work", "A breakthrough is a sudden, dramatic, and important discovery or development."),
    ("What is mentorship?", "Guidance from experienced person", "Competition", "Isolation", "Criticism", "Mentorship is guidance provided by a more experienced person to someone less experienced.")
]

categories = ["Actors and Actresses", "Artists", "Authors and Writers", "Entrepreneurs",
              "Historical Figures", "Musicians", "Political Leaders", "Scientists",
              "Social Media Influencers", "Sports Icons"]

for category in categories:
    category_path = os.path.join(base_path, category)
    for level in range(1, 11):
        filepath = os.path.join(category_path, f'level{level}.js')
        if not os.path.exists(filepath):
            continue
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        additions = ""
        for q, o1, o2, o3, o4, exp in questions:
            additions += f"""    }},
    {{
      question: {{en: "{q}", es: "{q}", de: "{q}", nl: "{q}"}},
      options: [
        {{en: "{o1}", es: "{o1}", de: "{o1}", nl: "{o1}"}},
        {{en: "{o2}", es: "{o2}", de: "{o2}", nl: "{o2}"}},
        {{en: "{o3}", es: "{o3}", de: "{o3}", nl: "{o3}"}},
        {{en: "{o4}", es: "{o4}", de: "{o4}", nl: "{o4}"}}
      ],
      correct: 0,
      explanation: {{en: "{exp}", es: "{exp}", de: "{exp}", nl: "{exp}"}}
"""
        content = re.sub(r'(\s+}\s+)\](\s+};)', additions + '\n      }\n    ]\n  };', content)
        with open(filepath, 'w', encoding='utf-8', errors='ignore') as f:
            f.write(content)
        print(f"{category} level{level}: added 20 questions")
print("Famous People expansion complete!")
