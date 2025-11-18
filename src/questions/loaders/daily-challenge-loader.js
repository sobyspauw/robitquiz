// Daily Challenges System - 365 unique challenges with seasonal relevance
(function() {
  
  // Helper function to get current date info
  function getCurrentDateInfo() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    return { dayOfYear, month, day, year: now.getFullYear() };
  }
  
  // Get season based on month
  function getSeason(month) {
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';  
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
  }
  
  // Special dates and their themes
  const specialDates = {
    '1/1': 'new_year',
    '2/14': 'valentines',
    '3/17': 'st_patricks',
    '4/22': 'earth_day',
    '7/4': 'independence_day',
    '10/31': 'halloween',
    '11/11': 'veterans_day',
    '12/25': 'christmas',
    '12/31': 'new_years_eve'
  };
  
  // Load appropriate seasonal challenge file
  function loadSeasonalChallenges() {
    const dateInfo = getCurrentDateInfo();
    const season = getSeason(dateInfo.month);
    const dateKey = `${dateInfo.month}/${dateInfo.day}`;
    const isSpecialDate = specialDates[dateKey];

    // Monthly challenges are already loaded, get today's challenge
    const todaysChallenge = getTodaysChallenge(dateInfo, isSpecialDate);
    window.dailyChallenge = todaysChallenge;
  }
  
  // Fallback challenge if seasonal files aren't available
  function getFallbackChallenge(dateInfo) {
    const challenges = [
      {
        theme: 'general',
        name: { 
          en: "Daily Knowledge Challenge", 
          es: "Desafío de Conocimiento Diario", 
          de: "Tägliche Wissensherausforderung", 
          nl: "Dagelijkse Kennisuitdaging" 
        },
        questions: [
          {
            question: {
              en: "What is the capital of France?",
              es: "¿Cuál es la capital de Francia?",
              de: "Was ist die Hauptstadt von Frankreich?",
              nl: "Wat is de hoofdstad van Frankrijk?"
            },
            options: [
              { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
              { en: "London", es: "Londres", de: "London", nl: "Londen" },
              { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" },
              { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" }
            ],
            correctIndex: 0
          },
          {
            question: {
              en: "How many sides does a triangle have?",
              es: "¿Cuántos lados tiene un triángulo?",
              de: "Wie viele Seiten hat ein Dreieck?",
              nl: "Hoeveel zijden heeft een driehoek?"
            },
            options: [
              { en: "3", es: "3", de: "3", nl: "3" },
              { en: "4", es: "4", de: "4", nl: "4" },
              { en: "5", es: "5", de: "5", nl: "5" },
              { en: "6", es: "6", de: "6", nl: "6" }
            ],
            correctIndex: 0
          },
          {
            question: {
              en: "What is 5 + 7?",
              es: "¿Cuánto es 5 + 7?",
              de: "Was ist 5 + 7?",
              nl: "Wat is 5 + 7?"
            },
            options: [
              { en: "12", es: "12", de: "12", nl: "12" },
              { en: "11", es: "11", de: "11", nl: "11" },
              { en: "13", es: "13", de: "13", nl: "13" },
              { en: "10", es: "10", de: "10", nl: "10" }
            ],
            correctIndex: 0
          },
          {
            question: {
              en: "Which planet is closest to the Sun?",
              es: "¿Qué planeta está más cerca del Sol?",
              de: "Welcher Planet ist der Sonne am nächsten?",
              nl: "Welke planeet staat het dichtst bij de zon?"
            },
            options: [
              { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
              { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
              { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
              { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
            ],
            correctIndex: 0
          },
          {
            question: {
              en: "What color do you get when you mix red and blue?",
              es: "¿Qué color obtienes cuando mezclas rojo y azul?",
              de: "Welche Farbe entsteht, wenn man Rot und Blau mischt?",
              nl: "Welke kleur krijg je als je rood en blauw mengt?"
            },
            options: [
              { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
              { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
              { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
              { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" }
            ],
            correctIndex: 0
          }
        ]
      }
    ];
    
    return challenges[dateInfo.dayOfYear % challenges.length];
  }
  
  // Get today's specific challenge
  function getTodaysChallenge(dateInfo, specialTheme) {
    // Get month name in lowercase
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june',
                        'july', 'august', 'september', 'october', 'november', 'december'];
    const monthName = monthNames[dateInfo.month - 1];

    // Get today's challenges from the monthly challenges
    if (window.monthlyChallenges && window.monthlyChallenges[monthName]) {
      const monthChallenges = window.monthlyChallenges[monthName];

      // Find challenge for today's date
      const todayChallenge = monthChallenges.find(challenge =>
        challenge.day === dateInfo.day
      );

      if (todayChallenge) {
        console.log(`Found daily challenge for ${monthName} ${dateInfo.day}`);
        return {
          theme: 'daily_challenge',
          name: todayChallenge.name,
          questions: todayChallenge.questions
        };
      }
    }

    console.log('No daily challenge found, using fallback');
    return getFallbackChallenge(dateInfo);
  }
  
  // Initialize daily challenges
  function initializeDailyChallenges() {
    loadSeasonalChallenges();
  }
  
  // Storage for monthly challenges
  window.monthlyChallenges = {};

  // Function to add monthly challenges
  window.addMonthChallenges = function(monthName, challenges) {
    window.monthlyChallenges[monthName] = challenges;
    console.log(`Loaded ${monthName} challenges:`, challenges);
  };

  // Public API
  window.DailyChallenges = {
    getCurrentChallenge: function() {
      return window.dailyChallenge || getFallbackChallenge(getCurrentDateInfo());
    },

    isAvailable: function() {
      const today = new Date().toDateString();
      const challengeData = JSON.parse(localStorage.getItem('qb_daily_challenge') || '{}');
      return challengeData.date !== today || (!challengeData.completed && !challengeData.failed);
    },

    getTimeUntilReset: function() {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      return tomorrow.getTime() - now.getTime();
    }
  };
  
  // Start initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDailyChallenges);
  } else {
    initializeDailyChallenges();
  }
  
})();