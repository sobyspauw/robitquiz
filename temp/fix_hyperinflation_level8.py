import re

filepath = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\currencies\Hyperinflation Currencies\level8.js'

# Read the file
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the last question's closing brace and add our questions before the array closing
# The pattern is:    }
#   ]
# };

additions = """    },
    {
      question: {
        en: "What is hyperinflation?",
        es: "What is hyperinflation?",
        de: "What is hyperinflation?",
        nl: "What is hyperinflation?"
      },
      options: [
        { en: "Extremely rapid uncontrolled inflation", es: "Extremely rapid uncontrolled inflation", de: "Extremely rapid uncontrolled inflation", nl: "Extremely rapid uncontrolled inflation" },
        { en: "Normal inflation", es: "Normal inflation", de: "Normal inflation", nl: "Normal inflation" },
        { en: "Deflation", es: "Deflation", de: "Deflation", nl: "Deflation" },
        { en: "Price stability", es: "Price stability", de: "Price stability", nl: "Price stability" }
      ],
      correct: 0,
      explanation: {
        en: "Hyperinflation is inflation exceeding 50% per month, destroying currency value rapidly.",
        es: "Hyperinflation is inflation exceeding 50% per month, destroying currency value rapidly.",
        de: "Hyperinflation is inflation exceeding 50% per month, destroying currency value rapidly.",
        nl: "Hyperinflation is inflation exceeding 50% per month, destroying currency value rapidly."
      }
    },
    {
      question: {
        en: "Which country had worst hyperinflation?",
        es: "Which country had worst hyperinflation?",
        de: "Which country had worst hyperinflation?",
        nl: "Which country had worst hyperinflation?"
      },
      options: [
        { en: "Zimbabwe (2008)", es: "Zimbabwe (2008)", de: "Zimbabwe (2008)", nl: "Zimbabwe (2008)" },
        { en: "Germany (1923)", es: "Germany (1923)", de: "Germany (1923)", nl: "Germany (1923)" },
        { en: "Venezuela (2016)", es: "Venezuela (2016)", de: "Venezuela (2016)", nl: "Venezuela (2016)" },
        { en: "Hungary (1946)", es: "Hungary (1946)", de: "Hungary (1946)", nl: "Hungary (1946)" }
      ],
      correct: 0,
      explanation: {
        en: "Zimbabwe experienced 79.6 billion percent monthly inflation in November 2008.",
        es: "Zimbabwe experienced 79.6 billion percent monthly inflation in November 2008.",
        de: "Zimbabwe experienced 79.6 billion percent monthly inflation in November 2008.",
        nl: "Zimbabwe experienced 79.6 billion percent monthly inflation in November 2008."
      }
    },
    {
      question: {
        en: "What was the Weimar Republic hyperinflation?",
        es: "What was the Weimar Republic hyperinflation?",
        de: "What was the Weimar Republic hyperinflation?",
        nl: "What was the Weimar Republic hyperinflation?"
      },
      options: [
        { en: "German hyperinflation 1921-1923", es: "German hyperinflation 1921-1923", de: "German hyperinflation 1921-1923", nl: "German hyperinflation 1921-1923" },
        { en: "Modern German inflation", es: "Modern German inflation", de: "Modern German inflation", nl: "Modern German inflation" },
        { en: "Austrian crisis", es: "Austrian crisis", de: "Austrian crisis", nl: "Austrian crisis" },
        { en: "French inflation", es: "French inflation", de: "French inflation", nl: "French inflation" }
      ],
      correct: 0,
      explanation: {
        en: "Weimar Germany experienced devastating hyperinflation after WWI, peaking in 1923.",
        es: "Weimar Germany experienced devastating hyperinflation after WWI, peaking in 1923.",
        de: "Weimar Germany experienced devastating hyperinflation after WWI, peaking in 1923.",
        nl: "Weimar Germany experienced devastating hyperinflation after WWI, peaking in 1923."
      }
    },
    {
      question: {
        en: "What is a trillion dollar banknote?",
        es: "What is a trillion dollar banknote?",
        de: "What is a trillion dollar banknote?",
        nl: "What is a trillion dollar banknote?"
      },
      options: [
        { en: "Zimbabwe currency note", es: "Zimbabwe currency note", de: "Zimbabwe currency note", nl: "Zimbabwe currency note" },
        { en: "US note", es: "US note", de: "US note", nl: "US note" },
        { en: "German note", es: "German note", de: "German note", nl: "German note" },
        { en: "Venezuelan note", es: "Venezuelan note", de: "Venezuelan note", nl: "Venezuelan note" }
      ],
      correct: 0,
      explanation: {
        en: "Zimbabwe issued 100 trillion dollar notes in 2009, virtually worthless due to hyperinflation.",
        es: "Zimbabwe issued 100 trillion dollar notes in 2009, virtually worthless due to hyperinflation.",
        de: "Zimbabwe issued 100 trillion dollar notes in 2009, virtually worthless due to hyperinflation.",
        nl: "Zimbabwe issued 100 trillion dollar notes in 2009, virtually worthless due to hyperinflation."
      }
    },
    {
      question: {
        en: "What causes hyperinflation?",
        es: "What causes hyperinflation?",
        de: "What causes hyperinflation?",
        nl: "What causes hyperinflation?"
      },
      options: [
        { en: "Excessive money printing", es: "Excessive money printing", de: "Excessive money printing", nl: "Excessive money printing" },
        { en: "High interest rates", es: "High interest rates", de: "High interest rates", nl: "High interest rates" },
        { en: "Strong economy", es: "Strong economy", de: "Strong economy", nl: "Strong economy" },
        { en: "Trade surplus", es: "Trade surplus", de: "Trade surplus", nl: "Trade surplus" }
      ],
      correct: 0,
      explanation: {
        en: "Hyperinflation typically results from governments printing excessive money to cover deficits.",
        es: "Hyperinflation typically results from governments printing excessive money to cover deficits.",
        de: "Hyperinflation typically results from governments printing excessive money to cover deficits.",
        nl: "Hyperinflation typically results from governments printing excessive money to cover deficits."
      }
    },
    {
      question: {
        en: "What was Hungary's post-WWII inflation?",
        es: "What was Hungary's post-WWII inflation?",
        de: "What was Hungary's post-WWII inflation?",
        nl: "What was Hungary's post-WWII inflation?"
      },
      options: [
        { en: "Worst recorded hyperinflation", es: "Worst recorded hyperinflation", de: "Worst recorded hyperinflation", nl: "Worst recorded hyperinflation" },
        { en: "Moderate inflation", es: "Moderate inflation", de: "Moderate inflation", nl: "Moderate inflation" },
        { en: "Deflation", es: "Deflation", de: "Deflation", nl: "Deflation" },
        { en: "Normal inflation", es: "Normal inflation", de: "Normal inflation", nl: "Normal inflation" }
      ],
      correct: 0,
      explanation: {
        en: "Hungary experienced the worst hyperinflation ever recorded in 1945-1946, with prices doubling every 15 hours.",
        es: "Hungary experienced the worst hyperinflation ever recorded in 1945-1946, with prices doubling every 15 hours.",
        de: "Hungary experienced the worst hyperinflation ever recorded in 1945-1946, with prices doubling every 15 hours.",
        nl: "Hungary experienced the worst hyperinflation ever recorded in 1945-1946, with prices doubling every 15 hours."
      }
    },
    {
      question: {
        en: "What is the Pengo?",
        es: "What is the Pengo?",
        de: "What is the Pengo?",
        nl: "What is the Pengo?"
      },
      options: [
        { en: "Hungarian currency during hyperinflation", es: "Hungarian currency during hyperinflation", de: "Hungarian currency during hyperinflation", nl: "Hungarian currency during hyperinflation" },
        { en: "German currency", es: "German currency", de: "German currency", nl: "German currency" },
        { en: "Polish currency", es: "Polish currency", de: "Polish currency", nl: "Polish currency" },
        { en: "Austrian currency", es: "Austrian currency", de: "Austrian currency", nl: "Austrian currency" }
      ],
      correct: 0,
      explanation: {
        en: "The Pengo was Hungary's currency that became worthless during 1945-1946 hyperinflation.",
        es: "The Pengo was Hungary's currency that became worthless during 1945-1946 hyperinflation.",
        de: "The Pengo was Hungary's currency that became worthless during 1945-1946 hyperinflation.",
        nl: "The Pengo was Hungary's currency that became worthless during 1945-1946 hyperinflation."
      }
    },
    {
      question: {
        en: "What happened to German Papiermark?",
        es: "What happened to German Papiermark?",
        de: "What happened to German Papiermark?",
        nl: "What happened to German Papiermark?"
      },
      options: [
        { en: "Destroyed by 1923 hyperinflation", es: "Destroyed by 1923 hyperinflation", de: "Destroyed by 1923 hyperinflation", nl: "Destroyed by 1923 hyperinflation" },
        { en: "Still in use", es: "Still in use", de: "Still in use", nl: "Still in use" },
        { en: "Replaced by Euro", es: "Replaced by Euro", de: "Replaced by Euro", nl: "Replaced by Euro" },
        { en: "Became very valuable", es: "Became very valuable", de: "Became very valuable", nl: "Became very valuable" }
      ],
      correct: 0,
      explanation: {
        en: "The Papiermark became worthless during Weimar hyperinflation, replaced by Rentenmark.",
        es: "The Papiermark became worthless during Weimar hyperinflation, replaced by Rentenmark.",
        de: "The Papiermark became worthless during Weimar hyperinflation, replaced by Rentenmark.",
        nl: "The Papiermark became worthless during Weimar hyperinflation, replaced by Rentenmark."
      }
    },
    {
      question: {
        en: "What is Venezuela's recent inflation?",
        es: "What is Venezuela's recent inflation?",
        de: "What is Venezuela's recent inflation?",
        nl: "What is Venezuela's recent inflation?"
      },
      options: [
        { en: "Hyperinflation since 2016", es: "Hyperinflation since 2016", de: "Hyperinflation since 2016", nl: "Hyperinflation since 2016" },
        { en: "Moderate inflation", es: "Moderate inflation", de: "Moderate inflation", nl: "Moderate inflation" },
        { en: "Deflation", es: "Deflation", de: "Deflation", nl: "Deflation" },
        { en: "Stable prices", es: "Stable prices", de: "Stable prices", nl: "Stable prices" }
      ],
      correct: 0,
      explanation: {
        en: "Venezuela has experienced severe hyperinflation since 2016, reaching over 1,000,000% annually.",
        es: "Venezuela has experienced severe hyperinflation since 2016, reaching over 1,000,000% annually.",
        de: "Venezuela has experienced severe hyperinflation since 2016, reaching over 1,000,000% annually.",
        nl: "Venezuela has experienced severe hyperinflation since 2016, reaching over 1,000,000% annually."
      }
    },
    {
      question: {
        en: "What is the Bolivar?",
        es: "What is the Bolivar?",
        de: "What is the Bolivar?",
        nl: "What is the Bolivar?"
      },
      options: [
        { en: "Venezuelan currency", es: "Venezuelan currency", de: "Venezuelan currency", nl: "Venezuelan currency" },
        { en: "Bolivian currency", es: "Bolivian currency", de: "Bolivian currency", nl: "Bolivian currency" },
        { en: "Colombian currency", es: "Colombian currency", de: "Colombian currency", nl: "Colombian currency" },
        { en: "Argentinian currency", es: "Argentinian currency", de: "Argentinian currency", nl: "Argentinian currency" }
      ],
      correct: 0,
      explanation: {
        en: "The Bolivar is Venezuela's currency that has been repeatedly devalued and redenominated.",
        es: "The Bolivar is Venezuela's currency that has been repeatedly devalued and redenominated.",
        de: "The Bolivar is Venezuela's currency that has been repeatedly devalued and redenominated.",
        nl: "The Bolivar is Venezuela's currency that has been repeatedly devalued and redenominated."
      }
    },
    {
      question: {
        en: "What is currency redenomination?",
        es: "What is currency redenomination?",
        de: "What is currency redenomination?",
        nl: "What is currency redenomination?"
      },
      options: [
        { en: "Removing zeros from currency", es: "Removing zeros from currency", de: "Removing zeros from currency", nl: "Removing zeros from currency" },
        { en: "Adding zeros", es: "Adding zeros", de: "Adding zeros", nl: "Adding zeros" },
        { en: "Changing currency name", es: "Changing currency name", de: "Changing currency name", nl: "Changing currency name" },
        { en: "Backing with gold", es: "Backing with gold", de: "Backing with gold", nl: "Backing with gold" }
      ],
      correct: 0,
      explanation: {
        en: "Redenomination removes zeros from currency to simplify transactions during high inflation.",
        es: "Redenomination removes zeros from currency to simplify transactions during high inflation.",
        de: "Redenomination removes zeros from currency to simplify transactions during high inflation.",
        nl: "Redenomination removes zeros from currency to simplify transactions during high inflation."
      }
    },
    {
      question: {
        en: "What was Yugoslavia's 1990s inflation?",
        es: "What was Yugoslavia's 1990s inflation?",
        de: "What was Yugoslavia's 1990s inflation?",
        nl: "What was Yugoslavia's 1990s inflation?"
      },
      options: [
        { en: "Second worst hyperinflation", es: "Second worst hyperinflation", de: "Second worst hyperinflation", nl: "Second worst hyperinflation" },
        { en: "Moderate inflation", es: "Moderate inflation", de: "Moderate inflation", nl: "Moderate inflation" },
        { en: "Economic growth", es: "Economic growth", de: "Economic growth", nl: "Economic growth" },
        { en: "Price stability", es: "Price stability", de: "Price stability", nl: "Price stability" }
      ],
      correct: 0,
      explanation: {
        en: "Yugoslavia experienced the second worst hyperinflation in 1992-1994 during civil war.",
        es: "Yugoslavia experienced the second worst hyperinflation in 1992-1994 during civil war.",
        de: "Yugoslavia experienced the second worst hyperinflation in 1992-1994 during civil war.",
        nl: "Yugoslavia experienced the second worst hyperinflation in 1992-1994 during civil war."
      }
    },
    {
      question: {
        en: "What is the Reichsmark?",
        es: "What is the Reichsmark?",
        de: "What is the Reichsmark?",
        nl: "What is the Reichsmark?"
      },
      options: [
        { en: "German currency after Papiermark", es: "German currency after Papiermark", de: "German currency after Papiermark", nl: "German currency after Papiermark" },
        { en: "Pre-WWI currency", es: "Pre-WWI currency", de: "Pre-WWI currency", nl: "Pre-WWI currency" },
        { en: "Austrian currency", es: "Austrian currency", de: "Austrian currency", nl: "Austrian currency" },
        { en: "Swiss currency", es: "Swiss currency", de: "Swiss currency", nl: "Swiss currency" }
      ],
      correct: 0,
      explanation: {
        en: "The Reichsmark replaced the worthless Papiermark in 1924 after hyperinflation.",
        es: "The Reichsmark replaced the worthless Papiermark in 1924 after hyperinflation.",
        de: "The Reichsmark replaced the worthless Papiermark in 1924 after hyperinflation.",
        nl: "The Reichsmark replaced the worthless Papiermark in 1924 after hyperinflation."
      }
    },
    {
      question: {
        en: "What happened in Zimbabwe 2008?",
        es: "What happened in Zimbabwe 2008?",
        de: "What happened in Zimbabwe 2008?",
        nl: "What happened in Zimbabwe 2008?"
      },
      options: [
        { en: "Abandonment of local currency", es: "Abandonment of local currency", de: "Abandonment of local currency", nl: "Abandonment of local currency" },
        { en: "Economic boom", es: "Economic boom", de: "Economic boom", nl: "Economic boom" },
        { en: "Gold standard adoption", es: "Gold standard adoption", de: "Gold standard adoption", nl: "Gold standard adoption" },
        { en: "Currency strengthening", es: "Currency strengthening", de: "Currency strengthening", nl: "Currency strengthening" }
      ],
      correct: 0,
      explanation: {
        en: "Zimbabwe abandoned its dollar in 2009, adopting foreign currencies after hyperinflation.",
        es: "Zimbabwe abandoned its dollar in 2009, adopting foreign currencies after hyperinflation.",
        de: "Zimbabwe abandoned its dollar in 2009, adopting foreign currencies after hyperinflation.",
        nl: "Zimbabwe abandoned its dollar in 2009, adopting foreign currencies after hyperinflation."
      }
    },
    {
      question: {
        en: "What is a wheelbarrow of money?",
        es: "What is a wheelbarrow of money?",
        de: "What is a wheelbarrow of money?",
        nl: "What is a wheelbarrow of money?"
      },
      options: [
        { en: "Symbol of Weimar hyperinflation", es: "Symbol of Weimar hyperinflation", de: "Symbol of Weimar hyperinflation", nl: "Symbol of Weimar hyperinflation" },
        { en: "Banking term", es: "Banking term", de: "Banking term", nl: "Banking term" },
        { en: "Armored transport", es: "Armored transport", de: "Armored transport", nl: "Armored transport" },
        { en: "Savings method", es: "Savings method", de: "Savings method", nl: "Savings method" }
      ],
      correct: 0,
      explanation: {
        en: "During Weimar hyperinflation, people needed wheelbarrows of cash for basic purchases.",
        es: "During Weimar hyperinflation, people needed wheelbarrows of cash for basic purchases.",
        de: "During Weimar hyperinflation, people needed wheelbarrows of cash for basic purchases.",
        nl: "During Weimar hyperinflation, people needed wheelbarrows of cash for basic purchases."
      }
    },
    {
      question: {
        en: "What causes currency collapse?",
        es: "What causes currency collapse?",
        de: "What causes currency collapse?",
        nl: "What causes currency collapse?"
      },
      options: [
        { en: "Loss of confidence in currency", es: "Loss of confidence in currency", de: "Loss of confidence in currency", nl: "Loss of confidence in currency" },
        { en: "High interest rates", es: "High interest rates", de: "High interest rates", nl: "High interest rates" },
        { en: "Strong exports", es: "Strong exports", de: "Strong exports", nl: "Strong exports" },
        { en: "Trade surplus", es: "Trade surplus", de: "Trade surplus", nl: "Trade surplus" }
      ],
      correct: 0,
      explanation: {
        en: "Currency collapse occurs when citizens and traders lose all confidence in the currency's value.",
        es: "Currency collapse occurs when citizens and traders lose all confidence in the currency's value.",
        de: "Currency collapse occurs when citizens and traders lose all confidence in the currency's value.",
        nl: "Currency collapse occurs when citizens and traders lose all confidence in the currency's value."
      }
    },
    {
      question: {
        en: "What was Greek inflation in 1940s?",
        es: "What was Greek inflation in 1940s?",
        de: "What was Greek inflation in 1940s?",
        nl: "What was Greek inflation in 1940s?"
      },
      options: [
        { en: "Severe wartime hyperinflation", es: "Severe wartime hyperinflation", de: "Severe wartime hyperinflation", nl: "Severe wartime hyperinflation" },
        { en: "Moderate inflation", es: "Moderate inflation", de: "Moderate inflation", nl: "Moderate inflation" },
        { en: "Deflation", es: "Deflation", de: "Deflation", nl: "Deflation" },
        { en: "Stability", es: "Stability", de: "Stability", nl: "Stability" }
      ],
      correct: 0,
      explanation: {
        en: "Greece experienced severe hyperinflation during Nazi occupation in 1941-1944.",
        es: "Greece experienced severe hyperinflation during Nazi occupation in 1941-1944.",
        de: "Greece experienced severe hyperinflation during Nazi occupation in 1941-1944.",
        nl: "Greece experienced severe hyperinflation during Nazi occupation in 1941-1944."
      }
    },
    {
      question: {
        en: "What is a million mark note?",
        es: "What is a million mark note?",
        de: "What is a million mark note?",
        nl: "What is a million mark note?"
      },
      options: [
        { en: "German hyperinflation banknote", es: "German hyperinflation banknote", de: "German hyperinflation banknote", nl: "German hyperinflation banknote" },
        { en: "Modern currency", es: "Modern currency", de: "Modern currency", nl: "Modern currency" },
        { en: "Collectible value", es: "Collectible value", de: "Collectible value", nl: "Collectible value" },
        { en: "Gold certificate", es: "Gold certificate", de: "Gold certificate", nl: "Gold certificate" }
      ],
      correct: 0,
      explanation: {
        en: "Germany issued million and billion mark notes during 1923 hyperinflation, worthless within days.",
        es: "Germany issued million and billion mark notes during 1923 hyperinflation, worthless within days.",
        de: "Germany issued million and billion mark notes during 1923 hyperinflation, worthless within days.",
        nl: "Germany issued million and billion mark notes during 1923 hyperinflation, worthless within days."
      }
    },
    {
      question: {
        en: "What is the Turkish Lira crisis?",
        es: "What is the Turkish Lira crisis?",
        de: "What is the Turkish Lira crisis?",
        nl: "What is the Turkish Lira crisis?"
      },
      options: [
        { en: "Recent high inflation", es: "Recent high inflation", de: "Recent high inflation", nl: "Recent high inflation" },
        { en: "Ancient currency", es: "Ancient currency", de: "Ancient currency", nl: "Ancient currency" },
        { en: "Hyperinflation", es: "Hyperinflation", de: "Hyperinflation", nl: "Hyperinflation" },
        { en: "Deflation", es: "Deflation", de: "Deflation", nl: "Deflation" }
      ],
      correct: 0,
      explanation: {
        en: "Turkey has experienced high inflation rates in recent years, though not technical hyperinflation.",
        es: "Turkey has experienced high inflation rates in recent years, though not technical hyperinflation.",
        de: "Turkey has experienced high inflation rates in recent years, though not technical hyperinflation.",
        nl: "Turkey has experienced high inflation rates in recent years, though not technical hyperinflation."
      }
    },
    {
      question: {
        en: "What ended Weimar hyperinflation?",
        es: "What ended Weimar hyperinflation?",
        de: "What ended Weimar hyperinflation?",
        nl: "What ended Weimar hyperinflation?"
      },
      options: [
        { en: "Introduction of Rentenmark", es: "Introduction of Rentenmark", de: "Introduction of Rentenmark", nl: "Introduction of Rentenmark" },
        { en: "Gold standard", es: "Gold standard", de: "Gold standard", nl: "Gold standard" },
        { en: "Foreign aid", es: "Foreign aid", de: "Foreign aid", nl: "Foreign aid" },
        { en: "Price controls", es: "Price controls", de: "Price controls", nl: "Price controls" }
      ],
      correct: 0,
      explanation: {
        en: "The Rentenmark, backed by land and industry, ended Weimar hyperinflation in November 1923.",
        es: "The Rentenmark, backed by land and industry, ended Weimar hyperinflation in November 1923.",
        de: "The Rentenmark, backed by land and industry, ended Weimar hyperinflation in November 1923.",
        nl: "The Rentenmark, backed by land and industry, ended Weimar hyperinflation in November 1923."
      }
    }"""

# Replace the closing pattern
content = re.sub(r'(    },\s+)\](\s+};)', additions + '\\n  ]\\n};', content)

# Write back
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Hyperinflation Currencies level8: added 20 questions (20->40)")
