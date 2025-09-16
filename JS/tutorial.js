// Tutorial System for RobitQuiz
// Interactive step-by-step guide for first-time users

(function() {
  'use strict';

  // Tutorial state management
  let tutorialState = {
    isActive: false,
    currentStep: 0,
    totalSteps: 0,
    isCompleted: false,
    canSkip: true,
    isLoaded: false,
    isInitializing: false
  };

  // Tutorial steps configuration
  const tutorialSteps = [
    // Step 1: Introduction
    {
      id: 'welcome',
      title: 'Welcome to RobitQuiz!',
      content: 'Your ultimate quiz challenge awaits! Press Next to continue or Skip to exit the tutorial.',
      target: null,
      position: 'center',
      showSkip: true,
      image: 'images/tutorial/zwaaien pose 3 NB.png'
    },
    // Step 2: Explain the Play button
    {
      id: 'play-button',
      title: 'Start Playing Here!',
      content: 'This is your main play button! Click here to access all quiz subjects and begin your learning journey.',
      target: '#levels-btn',
      position: 'top',
      image: 'images/tutorial/Idee pose 3 NB.png'
    },
    // Step 3: Explain subjects and rewards
    {
      id: 'subjects-explained',
      title: 'Choose Your Subject',
      content: 'Browse through all the different subjects in the different difficulty tiers. Each subject has unique questions and different star rewards! You can unlock the subjects with stars.',
      target: null,
      position: 'center',
      image: 'images/tutorial/nadenken pose 4 NB.png'
    },
    // Step 4: Explain levels screen
    {
      id: 'levels-screen',
      title: 'Level Progression',
      content: 'Each subject has 10 levels of increasing difficulty. Master all levels to complete the subject!',
      target: null,
      position: 'center',
      image: 'images/tutorial/armen over elkaar 1 NB.png'
    },
    // Step 5: Explain quiz screen
    {
      id: 'quiz-screen',
      title: 'Quiz Gameplay',
      content: 'Answer 10 questions correctly to pass the level! You have 2 mistakes allowed. Time runs out if you take too long!',
      target: ['#question', '#answers', '#correct', '#wrong'],
      position: 'center',
      image: 'images/tutorial/nadenken pose 4 NB.png'
    },
    // Step 6: Explain power-ups
    {
      id: 'power-ups',
      title: 'Power-Up Help',
      content: '50/50 removes 2 wrong answers, Skip jumps to next question, Time Bonus gives extra seconds. Use them wisely to succeed!',
      target: ['#fifty-fifty-btn', '#skip-btn', '#time-bonus-btn'],
      position: 'center',
      image: 'images/tutorial/Idee pose 3 NB.png'
    },
    // Step 6a: Explain answer explanations
    {
      id: 'answer-explanations',
      title: 'Learning from Answers',
      content: 'After answering, you\'ll see explanations to help you learn. These explanations help you understand why an answer is correct!',
      target: '#explanation-container',
      position: 'center',
      image: 'images/tutorial/nadenken pose 4 NB.png'
    },
    // Step 7: Explain game modes (home screen)
    {
      id: 'game-modes-intro',
      title: 'Special Game Modes',
      content: 'Ready for more excitement? Game modes offer unique twists on the classic quiz format with bigger rewards!',
      target: '#challenge-modes-btn',
      position: 'top',
      image: 'images/tutorial/armen over elkaar 1 NB.png'
    },
    // Step 8: True/False mode
    {
      id: 'true-false-mode',
      title: 'True/False Challenge',
      content: 'Quick thinking required! Only True or False answers. Simple format, but questions get tricky fast!',
      target: '.challenge-mode-card:first-child', // True/False card (first card)
      position: 'bottom',
      image: 'images/tutorial/Idee pose 3 NB.png'
    },
    // Step 9: Lightning Round
    {
      id: 'lightning-round',
      title: 'Lightning Round',
      content: 'Speed is key! Answer as many questions as possible before time runs out. Fast reflexes earn bonus points!',
      target: '.challenge-mode-card:nth-child(2)', // Lightning Round card (second card)
      position: 'bottom',
      image: 'images/tutorial/opstijgen pose 1 NB.png'
    },
    // Step 10: Survivor modes
    {
      id: 'survivor-modes',
      title: 'Survivor & Extreme Modes',
      content: 'Ultimate endurance test! Keep answering until you make mistakes. How long can you survive the challenge?',
      target: '.challenge-mode-card:nth-child(3), .challenge-mode-card:nth-child(4)', // Survivor and Extreme cards
      position: 'bottom',
      image: 'images/tutorial/Balen pose 2 NB.png'
    },
    // Step 11: Daily challenge and rewards
    {
      id: 'daily-challenge',
      title: 'Daily Challenge & Rewards',
      content: 'Every day brings a new special challenge! Complete it for bonus stars, gems, and exclusive daily rewards.',
      target: '#daily-challenge-btn',
      position: 'center',
      image: 'images/tutorial/Juichen pose 1 NB.png'
    },
    // Step 12: Shop and daily rewards
    {
      id: 'shop-daily-rewards',
      title: 'Shop & Daily Rewards',
      content: 'Spend your earned stars and gems here! Buy power-ups, unlock bonuses, and collect your daily login rewards.',
      target: '#shop-btn',
      position: 'top',
      image: 'images/tutorial/volledig still 2 NB.png'
    },
    // Step 13: Stars and gems
    {
      id: 'currency-system',
      title: 'Stars & Diamonds',
      content: 'Stars are earned by completing levels and challenges. Diamonds are premium currency for special power-ups and bonuses!',
      target: ['#star-display', '#diamond-display'],
      position: 'bottom',
      image: 'images/tutorial/Juichen pose 1 NB.png'
    },
    // Step 14: End
    {
      id: 'tutorial-complete',
      title: 'Ready to Become a Quiz Master!',
      content: 'You know everything now! Start with easy subjects, try game modes, and don\'t forget your daily rewards. Good luck!',
      target: null,
      position: 'center',
      showSkip: false,
      image: 'images/tutorial/zwaaien pose 3 NB.png'
    }
  ];

  // Create tutorial overlay HTML
  function createTutorialOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'tutorial-overlay';
    overlay.className = 'tutorial-overlay fixed inset-0 z-50 pointer-events-none';
    overlay.innerHTML = `
      <!-- Interaction blocking overlay -->
      <div id="tutorial-interaction-blocker" class="fixed inset-0 z-40 pointer-events-auto" style="background: rgba(0, 0, 0, 0.1);"></div>
      
      <!-- Highlight square for targeted elements -->
      <div id="tutorial-highlight" class="tutorial-highlight fixed border-4 border-yellow-400 shadow-lg transition-all duration-500 pointer-events-none" style="display: none; background: rgba(255, 235, 59, 0.1);"></div>
      
      <!-- Tutorial strip - position will be set dynamically -->
      <div id="tutorial-strip" class="tutorial-strip fixed bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg shadow-2xl transition-all duration-300 pointer-events-auto flex flex-col z-50" style="width: 90%; max-width: 380px; min-width: 280px; min-height: 200px; left: 50%; bottom: -300px; transform: translateX(-50%);">
        <div class="tutorial-content w-full flex flex-col h-full">
          <!-- Progress indicator -->
          <div class="tutorial-progress flex justify-center mb-2">
            <div class="progress-dots flex space-x-1">
              <!-- Progress dots will be generated here -->
            </div>
          </div>
          
          <!-- Main content with character inside - flex-1 to take available space -->
          <div class="tutorial-main-content flex items-center justify-between relative flex-1">
            <!-- Text content on the left -->
            <div class="tutorial-text flex-1 text-left">
              <h3 id="tutorial-title" class="text-base sm:text-lg font-bold mb-2"></h3>
              <p id="tutorial-content" class="text-xs sm:text-sm leading-relaxed"></p>
            </div>
            
            <!-- Tutorial character image on the right -->
            <div id="tutorial-character" class="relative w-24 h-24 sm:w-32 sm:h-32 pointer-events-none transition-all duration-500 flex-shrink-0" style="display: none;">
              <img id="tutorial-character-img" src="" alt="Tutorial Character" class="w-full h-full object-contain drop-shadow-lg" />
            </div>
          </div>
          
          <!-- Navigation buttons - always at bottom -->
          <div class="tutorial-controls flex justify-between items-center mt-auto pt-1">
            <button id="tutorial-skip" class="tutorial-btn bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs">
              Skip
            </button>
            
            <div class="tutorial-nav flex space-x-1">
              <button id="tutorial-prev" class="tutorial-btn bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs" style="display: none;">
                ← Back
              </button>
              <button id="tutorial-next" class="tutorial-btn bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded text-xs font-semibold">
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Disable scrolling on challenge modes screen during tutorial
    const challengeModesScreen = document.getElementById('challenge-modes-screen');
    if (challengeModesScreen) {
      challengeModesScreen.style.overflow = 'hidden';
      console.log('Tutorial: Disabled scrolling on challenge modes screen');
    }
    
    return overlay;
  }

  // Create progress dots
  function createProgressDots() {
    const container = document.querySelector('.progress-dots');
    if (!container) return;
    
    container.innerHTML = '';
    tutorialSteps.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'progress-dot w-2 h-2 rounded-full transition-colors duration-200';
      dot.className += index === tutorialState.currentStep ? ' bg-yellow-400' : ' bg-gray-400';
      container.appendChild(dot);
    });
  }

  // Update progress dots
  function updateProgressDots() {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
      dot.className = 'progress-dot w-2 h-2 rounded-full transition-colors duration-200';
      dot.className += index === tutorialState.currentStep ? ' bg-yellow-400' : ' bg-gray-400';
    });
  }

  // Highlight target element
  function highlightElement(target) {
    const highlight = document.getElementById('tutorial-highlight');
    
    console.log('highlightElement called with target:', target);
    
    if (!highlight) {
      console.error('Highlight element not found!');
      return;
    }

    // Hide highlight by default
    highlight.style.display = 'none';

    if (!target) {
      console.log('No target specified, hiding highlight');
      return;
    }

    // Handle array of targets (multiple elements)
    if (Array.isArray(target)) {
      const elements = target.map(t => document.querySelector(t)).filter(el => el !== null);
      if (elements.length === 0) {
        console.warn('No elements found for array target:', target);
        return;
      }
      
      console.log(`Found ${elements.length} elements for highlighting:`, elements);

      // For main menu buttons (3 buttons), create a large square highlight
      if (target.length >= 3 && target.includes('#levels-btn')) {
        // This is the main menu - create a square highlight
        let minLeft = Infinity, minTop = Infinity, maxRight = -Infinity, maxBottom = -Infinity;
        
        elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          minLeft = Math.min(minLeft, rect.left);
          minTop = Math.min(minTop, rect.top);
          maxRight = Math.max(maxRight, rect.right);
          maxBottom = Math.max(maxBottom, rect.bottom);
        });
        
        // Add padding around the combined area
        const padding = 20;
        const totalWidth = (maxRight - minLeft) + (padding * 2);
        const totalHeight = (maxBottom - minTop) + (padding * 2);
        const centerX = minLeft + (maxRight - minLeft) / 2;
        const centerY = minTop + (maxBottom - minTop) / 2;
        
        // Make it square with sharp corners
        highlight.style.display = 'block';
        highlight.style.borderRadius = '8px';
        highlight.style.background = 'rgba(255, 235, 59, 0.1)';
        highlight.style.border = '4px solid rgb(250, 204, 21)';
        highlight.style.left = (centerX - totalWidth / 2) + 'px';
        highlight.style.top = (centerY - totalHeight / 2) + 'px';
        highlight.style.width = totalWidth + 'px';
        highlight.style.height = totalHeight + 'px';
        
        console.log(`Created square highlight for menu: ${totalWidth}x${totalHeight} at (${centerX - totalWidth / 2}, ${centerY - totalHeight / 2})`);
      } else {
        // For other arrays (like stars & gems), create square box
        let minLeft = Infinity, minTop = Infinity, maxRight = -Infinity, maxBottom = -Infinity;
        
        elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          minLeft = Math.min(minLeft, rect.left);
          minTop = Math.min(minTop, rect.top);
          maxRight = Math.max(maxRight, rect.right);
          maxBottom = Math.max(maxBottom, rect.bottom);
        });
        
        // Add padding around the combined area
        const padding = 20; // Use same padding as menu buttons for consistency
        const totalWidth = (maxRight - minLeft) + (padding * 2);
        const totalHeight = (maxBottom - minTop) + (padding * 2);
        const centerX = minLeft + (maxRight - minLeft) / 2;
        const centerY = minTop + (maxBottom - minTop) / 2;
        
        // Make it square with sharp corners
        highlight.style.display = 'block';
        highlight.style.borderRadius = '8px';
        highlight.style.background = 'rgba(255, 235, 59, 0.1)';
        highlight.style.border = '4px solid rgb(250, 204, 21)';
        highlight.style.left = (centerX - totalWidth / 2) + 'px';
        highlight.style.top = (centerY - totalHeight / 2) + 'px';
        highlight.style.width = totalWidth + 'px';
        highlight.style.height = totalHeight + 'px';
        
        console.log(`Created square highlight: ${totalWidth}x${totalHeight} at (${centerX - totalWidth / 2}, ${centerY - totalHeight / 2})`);
      }
      
    } else {
      // Handle single target (existing behavior)
      const element = document.querySelector(target);
      if (!element) {
        console.warn(`Target element not found: ${target}`);
        return;
      }
      console.log(`Found single target element:`, element);

      const rect = element.getBoundingClientRect();
      const padding = 20;
      const width = rect.width + (padding * 2);
      const height = rect.height + (padding * 2);
      
      highlight.style.display = 'block';
      highlight.style.borderRadius = '8px';
      highlight.style.background = 'rgba(255, 235, 59, 0.1)';
      highlight.style.border = '4px solid rgb(250, 204, 21)';
      highlight.style.left = (rect.left - padding) + 'px';
      highlight.style.top = (rect.top - padding) + 'px';
      highlight.style.width = width + 'px';
      highlight.style.height = height + 'px';
      
      console.log(`Single square highlight created at (${rect.left - padding}, ${rect.top - padding}) with size ${width}x${height}px`);
    }
  }

  // Show tutorial step
  // Function to switch background screen based on tutorial step
  function switchTutorialScreen(step) {
    console.log(`Tutorial: Switching to appropriate screen for step '${step.id}'`);
    
    // Handle special screen transitions that require setup
    switch(step.id) {
      case 'welcome':
      case 'currency-system':
      case 'tutorial-complete':
        window.showScreen('home-screen');
        break;
        
      case 'play-button':
        // Stay on home screen but highlight the play button
        window.showScreen('home-screen');
        break;
        
      case 'subjects-explained':
        // Show subjects screen when explaining subjects
        if (typeof window.showSubjects === 'function') {
          console.log('Tutorial: Showing subjects screen');
          window.showSubjects();
        } else {
          window.showScreen('subjects-screen');
        }
        break;
        
      case 'levels-screen':
        // Show levels screen, preferably with a subject selected
        if (typeof window.openLevels === 'function' && window.groups && window.groups[0]) {
          console.log('Tutorial: Opening levels screen with first subject');
          window.openLevels(0); // Show levels for first subject
        } else {
          window.showScreen('levels-screen');
        }
        break;
        
      case 'quiz-screen':
        // For quiz screen demo, we need to simulate being in a quiz
        console.log('Tutorial: Simulating quiz screen for demonstration');
        window.showScreen('quiz-screen');
        
        // Move quiz container to top during tutorial
        setTimeout(() => {
          const quizScreen = document.getElementById('quiz-screen');
          if (quizScreen) {
            quizScreen.style.position = 'fixed';
            quizScreen.style.top = '20px';
            quizScreen.style.left = '50%';
            quizScreen.style.transform = 'translateX(-50%)';
            quizScreen.style.zIndex = '30'; // Below tutorial overlay but above normal content
            quizScreen.classList.add('tutorial-quiz-positioned');
            console.log('Tutorial: Moved quiz box to top of screen');
          }
        }, 100);
        
        // Show specific demo question from animals/level1
        setTimeout(() => {
          try {
            // Use specific animals level 1 question for demo
            const demoQuestion = {
              question: {
                en: "Which animal is the fastest on land?",
                es: "¿Qué animal es el más rápido en tierra?",
                de: "Welches Tier ist das schnellste an Land?",
                nl: "Welk dier is het snelst op land?"
              },
              options: [
                { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
                { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
                { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
                { en: "Gazelle", es: "Gacela", de: "Gazelle", nl: "Gazelle" }
              ],
              correct: 0,
              explanation: {
                en: "The cheetah can reach speeds up to 70 mph (112 km/h), making it the fastest land animal in the world.",
                es: "El guepardo puede alcanzar velocidades de hasta 112 km/h, convirtiéndolo en el animal terrestre más rápido del mundo.",
                de: "Der Gepard kann Geschwindigkeiten von bis zu 112 km/h erreichen, was ihn zum schnellsten Landtier der Welt macht.",
                nl: "De jachtluipaard kan snelheden bereiken tot 112 km/u, waardoor het het snelste landdier ter wereld is."
              }
            };
            
            // Set up tutorial quiz state with specific question
            window.selectedGroupIndex = 0; // Animals group
            window.selectedLevelIndex = 0; // Level 1
            window.questions = [demoQuestion];
            window.currentIndex = 0;
            window.correctCount = 0;
            window.wrongCount = 0;
            
            // Update UI elements
            document.getElementById('correct').innerText = `${window.t ? window.t('correct') : 'Correct'}: 0/10`;
            document.getElementById('wrong').innerText = `${window.t ? window.t('mistakes') : 'Mistakes'}: 0/2`;
            
            // Force manual rendering to ensure question shows up
            const lang = window.lang || 'en';
            const questionElement = document.getElementById('question');
            const answersDiv = document.getElementById('answers');
            
            if (questionElement) {
              questionElement.textContent = demoQuestion.question[lang];
              console.log('Tutorial: Set question text to:', demoQuestion.question[lang]);
            }
            
            if (answersDiv) {
              answersDiv.innerHTML = '';
              demoQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'answer-btn w-full p-3 text-left bg-white border-2 border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors';
                button.textContent = option[lang];
                button.onclick = () => console.log('Tutorial demo - answer clicked:', option[lang]);
                answersDiv.appendChild(button);
              });
              console.log('Tutorial: Added', demoQuestion.options.length, 'answer buttons');
            }
            
            // Also try the renderQuestion function as backup
            if (typeof window.renderQuestion === 'function') {
              try {
                window.renderQuestion();
                console.log('Tutorial: Also called renderQuestion function');
              } catch (error) {
                console.log('Tutorial: renderQuestion failed, but manual rendering should work');
              }
            }
          } catch (error) {
            console.log('Tutorial: Error setting up animals demo question:', error);
          }
        }, 500); // Increased delay to ensure screen is fully loaded and quiz state is set
        break;
        
      case 'power-ups':
        // For power-ups step, show quiz screen but keep it in original position
        console.log('Tutorial: Showing quiz screen for power-ups demonstration');
        window.showScreen('quiz-screen');
        
        // Show specific demo question from animals/level1 (same as other quiz steps)
        setTimeout(() => {
          try {
            // Use specific animals level 1 question for demo
            const demoQuestion = {
              question: {
                en: "Which animal is the fastest on land?",
                es: "¿Qué animal es el más rápido en tierra?",
                de: "Welches Tier ist das schnellste an Land?",
                nl: "Welk dier is het snelst op land?"
              },
              options: [
                { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
                { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
                { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
                { en: "Gazelle", es: "Gacela", de: "Gazelle", nl: "Gazelle" }
              ],
              correct: 0,
              explanation: {
                en: "The cheetah can reach speeds up to 70 mph (112 km/h), making it the fastest land animal in the world.",
                es: "El guepardo puede alcanzar velocidades de hasta 112 km/h, convirtiéndolo en el animal terrestre más rápido del mundo.",
                de: "Der Gepard kann Geschwindigkeiten von bis zu 112 km/h erreichen, was ihn zum schnellsten Landtier der Welt macht.",
                nl: "De jachtluipaard kan snelheden bereiken tot 112 km/u, waardoor het het snelste landdier ter wereld is."
              }
            };
            
            // Set up tutorial quiz state with specific question
            window.selectedGroupIndex = 0; // Animals group
            window.selectedLevelIndex = 0; // Level 1
            window.questions = [demoQuestion];
            window.currentIndex = 0;
            window.correctCount = 0;
            window.wrongCount = 0;
            
            // Update UI elements
            document.getElementById('correct').innerText = `${window.t ? window.t('correct') : 'Correct'}: 0/10`;
            document.getElementById('wrong').innerText = `${window.t ? window.t('mistakes') : 'Mistakes'}: 0/2`;
            
            // Force manual rendering to ensure question shows up
            const lang = window.lang || 'en';
            const questionElement = document.getElementById('question');
            const answersDiv = document.getElementById('answers');
            
            if (questionElement) {
              questionElement.textContent = demoQuestion.question[lang];
              console.log('Tutorial: Set question text to:', demoQuestion.question[lang]);
            }
            
            if (answersDiv) {
              answersDiv.innerHTML = '';
              demoQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'answer-btn w-full p-3 text-left bg-white border-2 border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors';
                button.textContent = option[lang];
                button.onclick = () => console.log('Tutorial demo - answer clicked:', option[lang]);
                answersDiv.appendChild(button);
              });
              console.log('Tutorial: Added', demoQuestion.options.length, 'answer buttons');
            }
            
            // Also try the renderQuestion function as backup
            if (typeof window.renderQuestion === 'function') {
              try {
                window.renderQuestion();
                console.log('Tutorial: Also called renderQuestion function');
              } catch (error) {
                console.log('Tutorial: renderQuestion failed, but manual rendering should work');
              }
            }
          } catch (error) {
            console.log('Tutorial: Error setting up animals demo question:', error);
          }
        }, 500);
        break;
        
      case 'answer-explanations':
        // For answer explanations demo, show quiz screen with explanation
        console.log('Tutorial: Simulating quiz screen with explanation for demonstration');
        window.showScreen('quiz-screen');
        
        // Move quiz container to top during tutorial
        setTimeout(() => {
          const quizScreen = document.getElementById('quiz-screen');
          if (quizScreen) {
            quizScreen.style.position = 'fixed';
            quizScreen.style.top = '20px';
            quizScreen.style.left = '50%';
            quizScreen.style.transform = 'translateX(-50%)';
            quizScreen.style.zIndex = '30'; // Below tutorial overlay but above normal content
            quizScreen.classList.add('tutorial-quiz-positioned');
            console.log('Tutorial: Moved quiz box to top of screen for explanations demo');
          }
        }, 100);
        
        // Show specific demo question with explanation displayed
        setTimeout(() => {
          try {
            // Use specific animals level 1 question for demo
            const demoQuestion = {
              question: {
                en: "Which animal is the fastest on land?",
                es: "¿Qué animal es el más rápido en tierra?",
                de: "Welches Tier ist das schnellste an Land?",
                nl: "Welk dier is het snelst op land?"
              },
              options: [
                { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
                { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
                { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
                { en: "Gazelle", es: "Gacela", de: "Gazelle", nl: "Gazelle" }
              ],
              correct: 2, // Horse is now the correct answer (3rd option, index 2)
              explanation: {
                en: "Actually, the horse is not the fastest land animal. The cheetah can reach speeds up to 70 mph (112 km/h), making it the fastest land animal in the world.",
                es: "En realidad, el caballo no es el animal terrestre más rápido. El guepardo puede alcanzar velocidades de hasta 112 km/h, convirtiéndolo en el animal terrestre más rápido del mundo.",
                de: "Eigentlich ist das Pferd nicht das schnellste Landtier. Der Gepard kann Geschwindigkeiten von bis zu 112 km/h erreichen, was ihn zum schnellsten Landtier der Welt macht.",
                nl: "Eigenlijk is het paard niet het snelste landdier. De jachtluipaard kan snelheden bereiken tot 112 km/u, waardoor het het snelste landdier ter wereld is."
              }
            };
            
            // Set up tutorial quiz state with specific question
            window.selectedGroupIndex = 0; // Animals group
            window.selectedLevelIndex = 0; // Level 1
            window.questions = [demoQuestion];
            window.currentIndex = 0;
            window.correctCount = 0;
            window.wrongCount = 0;
            
            // Update UI elements
            document.getElementById('correct').innerText = `${window.t ? window.t('correct') : 'Correct'}: 0/10`;
            document.getElementById('wrong').innerText = `${window.t ? window.t('mistakes') : 'Mistakes'}: 0/2`;
            
            // Force manual rendering to ensure question shows up
            const lang = window.lang || 'en';
            const questionElement = document.getElementById('question');
            const answersDiv = document.getElementById('answers');
            
            if (questionElement) {
              questionElement.textContent = demoQuestion.question[lang];
              console.log('Tutorial: Set question text to:', demoQuestion.question[lang]);
            }
            
            if (answersDiv) {
              answersDiv.innerHTML = '';
              demoQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'answer-btn w-full p-3 text-left bg-white border-2 border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors';
                button.textContent = option[lang];
                
                // Style buttons to show as if wrong answer was clicked
                if (index === 3) { // Gazelle (wrong answer - 4th option)
                  button.style.background = '#F23F5D'; // pinkish red for wrong
                  button.style.color = '#FFFFFF'; // white text
                  button.style.border = '2px solid #F23F5D';
                } else if (index === 2) { // Horse (correct answer - 3rd option)
                  button.style.background = '#02B7CE'; // bright cyan for correct
                  button.style.color = '#121C3A'; // deep navy text
                  button.style.border = '2px solid #02B7CE';
                }
                
                button.onclick = () => console.log('Tutorial demo - answer clicked:', option[lang]);
                answersDiv.appendChild(button);
              });
              console.log('Tutorial: Added', demoQuestion.options.length, 'answer buttons with wrong/correct styling');
            }
            
            // Show explanation as if user got it wrong
            if (typeof window.showExplanation === 'function') {
              // Simulate wrong answer scenario
              window.showExplanation(demoQuestion, false); // false = wrong answer
              console.log('Tutorial: Showing explanation for wrong answer demo');
              
              // Highlight the explanation box after it's shown
              setTimeout(() => {
                const explanationContainer = document.getElementById('explanation-container');
                if (explanationContainer) {
                  console.log('Tutorial: Highlighting explanation container after it appears');
                  // Force highlight the explanation box
                  const step = tutorialSteps.find(s => s.id === 'answer-explanations');
                  if (step) {
                    highlightElement(step.target);
                  }
                } else {
                  console.warn('Tutorial: explanation-container not found after showExplanation call');
                }
              }, 200); // Small delay to ensure explanation is rendered
            } else {
              // Manual explanation display if showExplanation function not available
              console.log('Tutorial: showExplanation function not available, explanation demo may not show');
            }
            
          } catch (error) {
            console.log('Tutorial: Error setting up explanation demo:', error);
          }
        }, 700); // Longer delay to ensure everything is set up
        break;
        
      case 'game-modes-intro':
        // Return to home screen to show the game modes button
        window.showScreen('home-screen');
        break;
        
      case 'true-false-mode':
        window.showScreen('challenge-modes-screen');
        // Scroll down to hide the title and give more room for tutorial box
        setTimeout(() => {
          const challengeModesScreen = document.getElementById('challenge-modes-screen');
          if (challengeModesScreen) {
            challengeModesScreen.scrollTop = 80; // Scroll down to hide the title
            challengeModesScreen.classList.add('tutorial-no-scroll'); // Prevent further scrolling
            challengeModesScreen.style.overflow = 'hidden';
            challengeModesScreen.style.overflowY = 'hidden';
            challengeModesScreen.style.height = '100vh'; // Fix height to prevent scroll
            challengeModesScreen.style.position = 'fixed';
            
            // Add event listeners to prevent all forms of scrolling
            const preventScroll = (e) => {
              e.preventDefault();
              e.stopPropagation();
            };
            
            challengeModesScreen.addEventListener('wheel', preventScroll, { passive: false });
            challengeModesScreen.addEventListener('touchmove', preventScroll, { passive: false });
            challengeModesScreen.addEventListener('scroll', preventScroll, { passive: false });
            
            // Store event listeners for cleanup
            challengeModesScreen._tutorialScrollPrevention = preventScroll;
            
            console.log('Tutorial: Scrolled down and completely prevented scrolling on Game Modes');
          }
        }, 100);
        break;
        
      case 'survivor-modes':
        window.showScreen('challenge-modes-screen');
        // Scroll so Lightning Round bottom border aligns with top of screen
        setTimeout(() => {
          const lightningCard = document.querySelector('.challenge-mode-card:nth-child(2)');
          const challengeModesScreen = document.getElementById('challenge-modes-screen');
          
          if (lightningCard && challengeModesScreen) {
            // Get Lightning Round card position and calculate scroll to align bottom with top
            const lightningOffsetTop = lightningCard.offsetTop;
            const lightningHeight = lightningCard.offsetHeight;
            
            // Calculate scroll position so Lightning Round bottom border is at top of screen
            const targetScrollTop = lightningOffsetTop + lightningHeight;
            challengeModesScreen.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
            
            // After scrolling, lock the position
            setTimeout(() => {
              challengeModesScreen.classList.add('tutorial-no-scroll');
              challengeModesScreen.style.overflow = 'hidden';
              challengeModesScreen.style.overflowY = 'hidden';
              
              // Add event listeners to prevent all forms of scrolling
              const preventScroll = (e) => {
                e.preventDefault();
                e.stopPropagation();
              };
              
              challengeModesScreen.addEventListener('wheel', preventScroll, { passive: false });
              challengeModesScreen.addEventListener('touchmove', preventScroll, { passive: false });
              challengeModesScreen.addEventListener('scroll', preventScroll, { passive: false });
              
              // Store event listeners for cleanup
              challengeModesScreen._tutorialScrollPrevention = preventScroll;
              
              console.log('Tutorial: Scrolled so Lightning Round bottom aligns with screen top and prevented scrolling');
            }, 500); // Wait for scroll animation to complete
          }
        }, 100);
        break;
        
      case 'lightning-round':
        window.showScreen('challenge-modes-screen');
        // Scroll so True/False bottom border aligns with top of screen
        setTimeout(() => {
          const trueFalseCard = document.querySelector('.challenge-mode-card:nth-child(1)');
          const challengeModesScreen = document.getElementById('challenge-modes-screen');
          
          if (trueFalseCard && challengeModesScreen) {
            // Get True/False card position and calculate scroll to align bottom with top
            const trueFalseRect = trueFalseCard.getBoundingClientRect();
            const trueFalseOffsetTop = trueFalseCard.offsetTop;
            const trueFalseHeight = trueFalseCard.offsetHeight;
            
            // Calculate scroll position so True/False bottom border is at top of screen
            const targetScrollTop = trueFalseOffsetTop + trueFalseHeight;
            challengeModesScreen.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
            
            // After scrolling, lock the position
            setTimeout(() => {
              challengeModesScreen.classList.add('tutorial-no-scroll');
              challengeModesScreen.style.overflow = 'hidden';
              challengeModesScreen.style.overflowY = 'hidden';
              
              // Add event listeners to prevent all forms of scrolling
              const preventScroll = (e) => {
                e.preventDefault();
                e.stopPropagation();
              };
              
              challengeModesScreen.addEventListener('wheel', preventScroll, { passive: false });
              challengeModesScreen.addEventListener('touchmove', preventScroll, { passive: false });
              challengeModesScreen.addEventListener('scroll', preventScroll, { passive: false });
              
              // Store event listeners for cleanup
              challengeModesScreen._tutorialScrollPrevention = preventScroll;
              
              console.log('Tutorial: Scrolled so True/False bottom aligns with screen top and prevented scrolling');
            }, 500); // Wait for scroll animation to complete
          }
        }, 100);
        break;
        
      case 'daily-challenge':
        // Show home screen for daily challenges
        window.showScreen('home-screen');
        break;
        
      case 'shop-daily-rewards':
        // Show home screen where the shop button is located
        console.log('Tutorial: Showing home screen for shop button');
        window.showScreen('home-screen');
        break;
        
      default:
        console.log(`Tutorial: No specific screen handling for step '${step.id}', staying on current screen`);
        break;
    }
  }

  // Position tutorial box dynamically based on step
  function positionTutorialBox(step) {
    const tutorialStrip = document.getElementById('tutorial-strip');
    if (!tutorialStrip) return;
    
    // Reset styles and animate into position
    tutorialStrip.style.top = '';
    tutorialStrip.style.bottom = '';
    
    switch(step.id) {
      case 'welcome':
        // Step 1: Position below the game logo
        // Find the game logo image
        const logo = document.querySelector('#home-screen img[alt="RobitQuiz"]');
        if (logo) {
          const logoRect = logo.getBoundingClientRect();
          tutorialStrip.style.top = (logoRect.bottom + 20) + 'px';
          tutorialStrip.style.bottom = '';
          tutorialStrip.style.transform = 'translateX(-50%)';
          console.log('Tutorial: Positioned below logo at', logoRect.bottom + 20);
        } else {
          // Fallback position if logo not found
          tutorialStrip.style.top = '200px';
          tutorialStrip.style.bottom = '';
          tutorialStrip.style.transform = 'translateX(-50%)';
          console.log('Tutorial: Logo not found, using fallback position');
        }
        break;
        
      case 'home-navigation':
        // Step 2: Position bottom of tutorial box to touch top of highlight
        // Use setTimeout to ensure buttons are rendered and highlighted
        setTimeout(() => {
          const menuButtons = ['#levels-btn', '#challenge-modes-btn', '#shop-btn'];
          const buttonElements = menuButtons.map(selector => document.querySelector(selector)).filter(el => el !== null);
          
          if (buttonElements.length > 0) {
            // Find the topmost button for highlight calculation
            let minTop = Infinity;
            buttonElements.forEach(element => {
              const rect = element.getBoundingClientRect();
              minTop = Math.min(minTop, rect.top);
            });
            
            // Get actual tutorial box height by forcing a layout update
            tutorialStrip.style.visibility = 'hidden';
            tutorialStrip.style.position = 'fixed';
            tutorialStrip.style.top = '0px';
            const tutorialRect = tutorialStrip.getBoundingClientRect();
            const tutorialBoxHeight = tutorialRect.height;
            
            // Calculate where the highlight box starts (top edge)
            const highlightPadding = 20; // padding around buttons in highlight (from highlightElement function)
            const highlightTopEdge = minTop - highlightPadding;
            
            // Position tutorial box so its bottom edge touches the highlight top edge
            const tutorialTopPosition = highlightTopEdge - tutorialBoxHeight;
            
            // Apply the positioning
            tutorialStrip.style.visibility = 'visible';
            tutorialStrip.style.top = tutorialTopPosition + 'px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
            
            console.log('Tutorial: Positioned tutorial box - bottom at', highlightTopEdge, 'top at', tutorialTopPosition, 'height', tutorialBoxHeight);
          } else {
            console.log('Tutorial: Menu buttons not found, using fallback top position');
            tutorialStrip.style.top = '20px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
          }
        }, 100); // Slightly longer delay to ensure highlight is created
        
        // Initial fallback position (will be overridden by setTimeout)
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
        
      case 'play-button':
        // Step 2: Position bottom of tutorial box to touch top of play button highlight
        setTimeout(() => {
          const playButton = document.querySelector('#levels-btn');
          
          if (playButton) {
            const rect = playButton.getBoundingClientRect();
            
            // Get actual tutorial box height by forcing a layout update
            tutorialStrip.style.visibility = 'hidden';
            tutorialStrip.style.position = 'fixed';
            tutorialStrip.style.top = '0px';
            const tutorialRect = tutorialStrip.getBoundingClientRect();
            const tutorialBoxHeight = tutorialRect.height;
            
            // Calculate where the highlight box starts (top edge)
            const highlightPadding = 20; // padding around button in highlight
            const highlightTopEdge = rect.top - highlightPadding;
            
            // Position tutorial box so its bottom edge touches the highlight top edge
            const tutorialTopPosition = highlightTopEdge - tutorialBoxHeight;
            
            // Apply the positioning
            tutorialStrip.style.visibility = 'visible';
            tutorialStrip.style.top = tutorialTopPosition + 'px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
            
            console.log('Tutorial: Positioned tutorial box above play button');
          } else {
            console.log('Tutorial: Play button not found, using fallback top position');
            tutorialStrip.style.top = '20px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
          }
        }, 100);
        
        // Initial fallback position
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
        
      case 'game-modes-intro':
        // Step 7: Position bottom of tutorial box to touch top of game modes button highlight
        setTimeout(() => {
          const gameModeButton = document.querySelector('#challenge-modes-btn');
          
          if (gameModeButton) {
            const rect = gameModeButton.getBoundingClientRect();
            
            // Get actual tutorial box height by forcing a layout update
            tutorialStrip.style.visibility = 'hidden';
            tutorialStrip.style.position = 'fixed';
            tutorialStrip.style.top = '0px';
            const tutorialRect = tutorialStrip.getBoundingClientRect();
            const tutorialBoxHeight = tutorialRect.height;
            
            // Calculate where the highlight box starts (top edge)
            const highlightPadding = 20; // padding around button in highlight
            const highlightTopEdge = rect.top - highlightPadding;
            
            // Position tutorial box so its bottom edge touches the highlight top edge
            const tutorialTopPosition = highlightTopEdge - tutorialBoxHeight;
            
            // Apply the positioning
            tutorialStrip.style.visibility = 'visible';
            tutorialStrip.style.top = tutorialTopPosition + 'px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
            
            console.log('Tutorial: Positioned tutorial box above game modes button');
          } else {
            console.log('Tutorial: Game modes button not found, using fallback top position');
            tutorialStrip.style.top = '20px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
          }
        }, 100);
        
        // Initial fallback position
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
        
      case 'shop-daily-rewards':
        // Step 12: Position bottom of tutorial box to touch top of shop button highlight
        setTimeout(() => {
          const shopButton = document.querySelector('#shop-btn');
          
          if (shopButton) {
            const rect = shopButton.getBoundingClientRect();
            
            // Get actual tutorial box height by forcing a layout update
            tutorialStrip.style.visibility = 'hidden';
            tutorialStrip.style.position = 'fixed';
            tutorialStrip.style.top = '0px';
            const tutorialRect = tutorialStrip.getBoundingClientRect();
            const tutorialBoxHeight = tutorialRect.height;
            
            // Calculate where the highlight box starts (top edge)
            const highlightPadding = 20; // padding around button in highlight
            const highlightTopEdge = rect.top - highlightPadding;
            
            // Position tutorial box so its bottom edge touches the highlight top edge
            let tutorialTopPosition = highlightTopEdge - tutorialBoxHeight;
            
            // Safety check: ensure tutorial box doesn't go off-screen
            if (tutorialTopPosition < 20) {
              // If there's no room above, position below the shop button
              const highlightBottomEdge = rect.bottom + highlightPadding;
              tutorialStrip.style.visibility = 'visible';
              tutorialStrip.style.top = (highlightBottomEdge + 10) + 'px'; // 10px gap
              tutorialStrip.style.bottom = '';
              tutorialStrip.style.transform = 'translateX(-50%)';
              console.log('Tutorial: Positioned tutorial box below shop button (no room above)');
            } else {
              // Apply the positioning above the button
              tutorialStrip.style.visibility = 'visible';
              tutorialStrip.style.top = tutorialTopPosition + 'px';
              tutorialStrip.style.bottom = '';
              tutorialStrip.style.transform = 'translateX(-50%)';
              console.log('Tutorial: Positioned tutorial box above shop button');
            }
          } else {
            console.log('Tutorial: Shop button not found, using fallback top position');
            tutorialStrip.style.top = '20px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
          }
        }, 100);
        
        // Initial fallback position
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
        
      case 'power-ups':
        // Step 6: Position tutorial box above power-up buttons in middle of screen
        setTimeout(() => {
          const powerUpButtons = ['#fifty-fifty-btn', '#skip-btn', '#time-bonus-btn'];
          const elements = powerUpButtons.map(selector => document.querySelector(selector)).filter(el => el !== null);
          
          if (elements.length > 0) {
            // Find the topmost power-up button
            let minTop = Infinity;
            elements.forEach(element => {
              const rect = element.getBoundingClientRect();
              minTop = Math.min(minTop, rect.top);
            });
            
            // Get actual tutorial box height by forcing a layout update
            tutorialStrip.style.visibility = 'hidden';
            tutorialStrip.style.position = 'fixed';
            tutorialStrip.style.top = '0px';
            const tutorialRect = tutorialStrip.getBoundingClientRect();
            const tutorialBoxHeight = tutorialRect.height;
            
            // Calculate where the highlight box starts (top edge)
            const highlightPadding = 20; // padding around buttons in highlight
            const highlightTopEdge = minTop - highlightPadding;
            
            // Position tutorial box so its bottom edge touches the highlight top edge
            const tutorialTopPosition = highlightTopEdge - tutorialBoxHeight - 20; // Extra 20px gap
            
            // Apply the positioning
            tutorialStrip.style.visibility = 'visible';
            tutorialStrip.style.top = tutorialTopPosition + 'px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
            
            console.log('Tutorial: Positioned tutorial box above power-up buttons in middle of screen');
          } else {
            console.log('Tutorial: Power-up buttons not found, using fallback center position');
            tutorialStrip.style.top = '50%';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translate(-50%, -50%)';
          }
        }, 200); // Increased delay to ensure power-up buttons are rendered
        
        // Initial fallback position
        tutorialStrip.style.top = '50%';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translate(-50%, -50%)';
        break;
        
      case 'true-false-mode':
        // Step 8: Position tutorial box below true/false card (no additional scrolling)
        setTimeout(() => {
          const trueFalseCard = document.querySelector('.challenge-mode-card:first-child');
          
          if (trueFalseCard) {
            const rect = trueFalseCard.getBoundingClientRect();
            const highlightPadding = 20;
            const highlightBottomEdge = rect.bottom + highlightPadding;
            
            tutorialStrip.style.visibility = 'visible';
            tutorialStrip.style.top = (highlightBottomEdge + 20) + 'px'; // Add some gap
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
            
            console.log('Tutorial: Positioned below True/False card');
          } else {
            tutorialStrip.style.top = '20px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
          }
        }, 200); // Increased delay to account for initial scroll
        
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
        
      case 'lightning-round':
        // Step 9: Position tutorial at bottom after Lightning Round card is scrolled to top
        setTimeout(() => {
          // Position tutorial box at bottom of screen
          tutorialStrip.style.visibility = 'visible';
          tutorialStrip.style.bottom = '20px';
          tutorialStrip.style.top = '';
          tutorialStrip.style.transform = 'translateX(-50%)';
          
          console.log('Tutorial: Positioned tutorial box at bottom for Lightning Round');
        }, 600); // Increased delay to account for scrolling animation
        
        tutorialStrip.style.bottom = '20px';
        tutorialStrip.style.top = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
        
      case 'survivor-modes':
        // Step 10: Position tutorial at bottom without additional scrolling
        setTimeout(() => {
          // Position tutorial box at bottom of screen
          tutorialStrip.style.visibility = 'visible';
          tutorialStrip.style.bottom = '20px';
          tutorialStrip.style.top = '';
          tutorialStrip.style.transform = 'translateX(-50%)';
          
          console.log('Tutorial: Positioned tutorial box at bottom for Survivor modes');
        }, 200); // Increased delay to account for initial scroll
        
        tutorialStrip.style.bottom = '20px';
        tutorialStrip.style.top = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
        
      case 'daily-challenge':
        // Step 11: Position bottom of tutorial box to touch top of daily challenge button highlight
        setTimeout(() => {
          const dailyChallengeBtn = document.querySelector('#daily-challenge-btn');
          
          if (dailyChallengeBtn) {
            const rect = dailyChallengeBtn.getBoundingClientRect();
            
            // Get actual tutorial box height by forcing a layout update
            tutorialStrip.style.visibility = 'hidden';
            tutorialStrip.style.position = 'fixed';
            tutorialStrip.style.top = '0px';
            const tutorialRect = tutorialStrip.getBoundingClientRect();
            const tutorialBoxHeight = tutorialRect.height;
            
            // Calculate where the highlight box starts (top edge)
            const highlightPadding = 20; // padding around button in highlight
            const highlightTopEdge = rect.top - highlightPadding;
            
            // Position tutorial box so its bottom edge touches the highlight top edge
            const tutorialTopPosition = highlightTopEdge - tutorialBoxHeight;
            
            // Apply the positioning
            tutorialStrip.style.visibility = 'visible';
            tutorialStrip.style.top = tutorialTopPosition + 'px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
            
            console.log('Tutorial: Positioned tutorial box above daily challenge button');
          } else {
            console.log('Tutorial: Daily challenge button not found, using fallback top position');
            tutorialStrip.style.top = '20px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
          }
        }, 100);
        
        // Initial fallback position
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;

      case 'quiz-screen':
        // Quiz tutorial step: Position tutorial box at bottom since quiz is at top
        tutorialStrip.style.bottom = '20px';
        tutorialStrip.style.top = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        console.log('Tutorial: Positioned quiz tutorial box at bottom');
        break;

      case 'answer-explanations':
        // Answer explanations step: Position tutorial box at top
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        console.log('Tutorial: Positioned answer explanations tutorial box at top');
        break;

      case 'levels-screen':
        // Level progression step: Position at bottom
        tutorialStrip.style.bottom = '20px';
        tutorialStrip.style.top = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        console.log('Tutorial: Positioned level progression at bottom');
        break;

      case 'tutorial-complete':
        // Position tutorial complete same as welcome step - below the game logo
        // Find the game logo image
        const logoComplete = document.querySelector('#home-screen img[alt="RobitQuiz"]');
        if (logoComplete) {
          const logoRect = logoComplete.getBoundingClientRect();
          tutorialStrip.style.top = (logoRect.bottom + 20) + 'px';
          tutorialStrip.style.bottom = '';
          tutorialStrip.style.transform = 'translateX(-50%)';
          console.log('Tutorial: Positioned tutorial complete below logo at', logoRect.bottom + 20);
        } else {
          // Fallback position if logo not found
          tutorialStrip.style.top = '200px';
          tutorialStrip.style.bottom = '';
          tutorialStrip.style.transform = 'translateX(-50%)';
          console.log('Tutorial: Logo not found for complete step, using fallback position');
        }
        break;

      case 'subjects-explained':
        // Other steps: Position at top
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        console.log('Tutorial: Positioned at top');
        break;
        
      case 'currency-system':
        // Step 3: Position top of tutorial box to touch bottom of highlight
        // Use setTimeout to ensure stars & gems elements are rendered and highlighted
        setTimeout(() => {
          const currencyElements = ['#star-display', '#diamond-display'];
          const elements = currencyElements.map(selector => document.querySelector(selector)).filter(el => el !== null);
          
          if (elements.length > 0) {
            // Find the bottommost element for highlight calculation
            let maxBottom = -Infinity;
            elements.forEach(element => {
              const rect = element.getBoundingClientRect();
              maxBottom = Math.max(maxBottom, rect.bottom);
            });
            
            // Calculate where the highlight box ends (bottom edge)
            const highlightPadding = 20; // padding around elements in highlight (same as step 2)
            const highlightBottomEdge = maxBottom + highlightPadding;
            
            // Position tutorial box so its top edge touches the highlight bottom edge
            tutorialStrip.style.visibility = 'visible';
            tutorialStrip.style.top = highlightBottomEdge + 'px';
            tutorialStrip.style.bottom = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
            
            console.log('Tutorial: Positioned tutorial box for currency - top at', highlightBottomEdge, 'touching highlight bottom');
          } else {
            console.log('Tutorial: Currency elements not found, using fallback bottom position');
            tutorialStrip.style.bottom = '20px';
            tutorialStrip.style.top = '';
            tutorialStrip.style.transform = 'translateX(-50%)';
          }
        }, 100); // Delay to ensure highlight is created
        
        // Initial fallback position (will be overridden by setTimeout)
        tutorialStrip.style.bottom = '20px';
        tutorialStrip.style.top = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
        
      default:
        // Default to top
        tutorialStrip.style.top = '20px';
        tutorialStrip.style.bottom = '';
        tutorialStrip.style.transform = 'translateX(-50%)';
        break;
    }
  }

  function showTutorialStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= tutorialSteps.length) return;
    
    const step = tutorialSteps[stepIndex];
    const previousStep = tutorialState.currentStep >= 0 ? tutorialSteps[tutorialState.currentStep] : null;
    
    // Hide explanation if leaving the answer-explanations step
    if (previousStep && previousStep.id === 'answer-explanations' && step.id !== 'answer-explanations') {
      if (typeof window.hideExplanation === 'function') {
        window.hideExplanation();
        console.log('Tutorial: Hidden explanation when leaving answer-explanations step');
      }
    }
    
    // Reset quiz positioning if leaving a quiz step (excluding power-ups which uses original positioning)
    if (previousStep && ['quiz-screen', 'answer-explanations'].includes(previousStep.id) && 
        !['quiz-screen', 'answer-explanations'].includes(step.id)) {
      const quizScreen = document.getElementById('quiz-screen');
      if (quizScreen && quizScreen.classList.contains('tutorial-quiz-positioned')) {
        quizScreen.style.position = '';
        quizScreen.style.top = '';
        quizScreen.style.left = '';
        quizScreen.style.transform = '';
        quizScreen.style.zIndex = '';
        quizScreen.classList.remove('tutorial-quiz-positioned');
        console.log('Tutorial: Reset quiz positioning when leaving quiz step');
      }
    }
    
    tutorialState.currentStep = stepIndex;
    
    // Position the tutorial box based on step
    positionTutorialBox(step);
    
    // Update content
    document.getElementById('tutorial-title').textContent = step.title;
    document.getElementById('tutorial-content').textContent = step.content;
    
    // Update character image
    const characterDiv = document.getElementById('tutorial-character');
    const characterImg = document.getElementById('tutorial-character-img');
    if (step.image) {
      characterImg.src = step.image;
      characterDiv.style.display = 'block';
      // Add animation class
      characterDiv.classList.remove('animate-bounce-in');
      void characterDiv.offsetWidth; // Trigger reflow
      characterDiv.classList.add('animate-bounce-in');
    } else {
      characterDiv.style.display = 'none';
    }
    
    // Update navigation buttons
    const prevBtn = document.getElementById('tutorial-prev');
    const nextBtn = document.getElementById('tutorial-next');
    const skipBtn = document.getElementById('tutorial-skip');
    
    prevBtn.style.display = stepIndex > 0 ? 'block' : 'none';
    
    if (stepIndex === tutorialSteps.length - 1) {
      nextBtn.textContent = 'Finish';
      nextBtn.className = 'tutorial-btn bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold';
    } else {
      nextBtn.textContent = 'Next →';
      nextBtn.className = 'tutorial-btn bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded text-xs font-semibold';
    }
    
    skipBtn.style.display = (step.showSkip !== false) ? 'block' : 'none';
    
    // Switch background screen based on tutorial step
    switchTutorialScreen(step);
    
    // Highlight target element with delay for certain steps that need screen loading
    if (step.id === 'lightning-round') {
      // Longer delay for lightning-round to account for scrolling animation
      setTimeout(() => {
        highlightElement(step.target);
        console.log('Tutorial: Delayed highlighting for lightning-round after scroll animation:', step.id);
      }, 700); // Wait for scrolling animation to complete (500ms + buffer)
    } else if (step.id === 'quiz-screen') {
      // Delay highlighting for quiz screen to ensure demo question is loaded
      setTimeout(() => {
        highlightElement(step.target);
        console.log('Tutorial: Delayed highlighting for quiz elements after demo question loaded:', step.id);
      }, 600); // Wait for quiz positioning and demo question loading (500ms + buffer)
    } else if (step.id === 'survivor-modes') {
      // Longer delay for survivor-modes to account for scrolling animation
      setTimeout(() => {
        highlightElement(step.target);
        console.log('Tutorial: Delayed highlighting for survivor-modes after scroll animation:', step.id);
      }, 700); // Wait for scrolling animation to complete (500ms + buffer)
    } else if (step.id === 'true-false-mode') {
      // Delay highlighting for true-false-mode to ensure cards are rendered
      setTimeout(() => {
        highlightElement(step.target);
        console.log('Tutorial: Delayed highlighting for true-false-mode:', step.id);
      }, 300); // Wait for challenge-modes-screen to fully render
    } else {
      // Immediate highlighting for other steps
      highlightElement(step.target);
    }
    
    // Update progress dots
    updateProgressDots();
  }

  // Recalculate positions on window resize
  function handleWindowResize() {
    if (tutorialState.isActive) {
      const currentStep = tutorialSteps[tutorialState.currentStep];
      if (currentStep) {
        positionTutorialBox(currentStep);
        // Use delayed highlighting for challenge mode steps
        if (currentStep.id === 'lightning-round') {
          setTimeout(() => {
            highlightElement(currentStep.target);
          }, 200); // Shorter delay for resize
        } else if (currentStep.id === 'quiz-screen') {
          setTimeout(() => {
            highlightElement(currentStep.target);
          }, 150); // Shorter delay for resize
        } else if (currentStep.id === 'survivor-modes') {
          setTimeout(() => {
            highlightElement(currentStep.target);
          }, 200); // Shorter delay for resize
        } else if (currentStep.id === 'true-false-mode') {
          setTimeout(() => {
            highlightElement(currentStep.target);
          }, 100);
        } else {
          highlightElement(currentStep.target);
        }
      }
    }
  }

  // Initialize tutorial
  function initTutorial() {
    console.log('initTutorial called');
    
    // Prevent multiple simultaneous initializations
    if (tutorialState.isInitializing) {
      console.log('Tutorial is already initializing, skipping duplicate call');
      return false;
    }
    
    // Check if tutorial was already completed
    if (localStorage.getItem('qb_tutorial_completed') === 'true') {
      console.log('Tutorial already completed, exiting');
      tutorialState.isLoaded = true;
      return false;
    }

    // Make sure document body exists
    if (!document.body) {
      console.error('Document body not available, retrying tutorial in 500ms');
      setTimeout(initTutorial, 500);
      return false;
    }

    console.log('Starting tutorial initialization...');
    tutorialState.isInitializing = true;
    tutorialState.isActive = true;
    tutorialState.currentStep = 0;
    tutorialState.totalSteps = tutorialSteps.length;
    
    try {
      // Create overlay
      console.log('Creating tutorial overlay...');
      createTutorialOverlay();
      
      console.log('Creating progress dots...');
      createProgressDots();
      
      // Show first step
      console.log('Showing first tutorial step...');
      showTutorialStep(0);
      
      // Add event listeners
      console.log('Adding tutorial event listeners...');
      addTutorialEventListeners();
      
      console.log('Tutorial successfully initialized!');
      tutorialState.isLoaded = true;
      tutorialState.isInitializing = false;
      
      // Add resize listener
      window.addEventListener('resize', handleWindowResize);
      console.log('Added window resize listener for tutorial');
      
      // Dispatch custom event to notify that tutorial is ready
      window.dispatchEvent(new CustomEvent('tutorialReady', { detail: { loaded: true } }));
      
      return true;
    } catch (error) {
      console.error('Error initializing tutorial:', error);
      tutorialState.isInitializing = false;
      return false;
    }
  }

  // Add event listeners
  function addTutorialEventListeners() {
    const nextBtn = document.getElementById('tutorial-next');
    const prevBtn = document.getElementById('tutorial-prev');
    const skipBtn = document.getElementById('tutorial-skip');
    
    if (nextBtn) {
      nextBtn.addEventListener('click', nextTutorialStep);
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', prevTutorialStep);
    }
    
    if (skipBtn) {
      skipBtn.addEventListener('click', skipTutorial);
    }

    // Allow clicking outside to advance tutorial
    const background = document.querySelector('.tutorial-background');
    if (background) {
      background.addEventListener('click', nextTutorialStep);
    }
  }

  // Next tutorial step
  function nextTutorialStep() {
    if (tutorialState.currentStep >= tutorialSteps.length - 1) {
      completeTutorial();
    } else {
      showTutorialStep(tutorialState.currentStep + 1);
    }
  }

  // Previous tutorial step
  function prevTutorialStep() {
    if (tutorialState.currentStep > 0) {
      showTutorialStep(tutorialState.currentStep - 1);
    }
  }

  // Skip tutorial
  function skipTutorial() {
    if (confirm('Are you sure you want to skip the tutorial? You can always restart it from settings.')) {
      completeTutorial();
    }
  }

  // Complete tutorial
  function completeTutorial() {
    tutorialState.isActive = false;
    tutorialState.isCompleted = true;
    
    // Save completion state
    localStorage.setItem('qb_tutorial_completed', 'true');
    
    // Remove overlay
    const overlay = document.getElementById('tutorial-overlay');
    if (overlay) {
      overlay.remove();
    }
    
    // Re-enable scrolling on challenge modes screen
    const challengeModesScreen = document.getElementById('challenge-modes-screen');
    if (challengeModesScreen) {
      challengeModesScreen.style.overflow = '';
      challengeModesScreen.style.overflowY = '';
      challengeModesScreen.style.height = '';
      challengeModesScreen.style.position = '';
      challengeModesScreen.classList.remove('tutorial-no-scroll');
      
      // Remove event listeners if they exist
      if (challengeModesScreen._tutorialScrollPrevention) {
        challengeModesScreen.removeEventListener('wheel', challengeModesScreen._tutorialScrollPrevention);
        challengeModesScreen.removeEventListener('touchmove', challengeModesScreen._tutorialScrollPrevention);
        challengeModesScreen.removeEventListener('scroll', challengeModesScreen._tutorialScrollPrevention);
        delete challengeModesScreen._tutorialScrollPrevention;
      }
      
      console.log('Tutorial: Re-enabled scrolling and removed all scroll prevention on challenge modes screen');
    }
    
    // Reset quiz screen positioning
    const quizScreen = document.getElementById('quiz-screen');
    if (quizScreen && quizScreen.classList.contains('tutorial-quiz-positioned')) {
      quizScreen.style.position = '';
      quizScreen.style.top = '';
      quizScreen.style.left = '';
      quizScreen.style.transform = '';
      quizScreen.style.zIndex = '';
      quizScreen.classList.remove('tutorial-quiz-positioned');
      console.log('Tutorial: Reset quiz screen positioning');
    }
    
    // Remove resize listener
    window.removeEventListener('resize', handleWindowResize);
    console.log('Removed window resize listener');
    
    // Return to home screen
    window.showScreen('home-screen');
    
    // Show completion message
    alert('Tutorial completed! Welcome to RobitQuiz! 🎉');
  }

  // Reset tutorial (for settings menu)
  function resetTutorial() {
    console.log('resetTutorial called');
    
    // Clear the completion flag
    localStorage.removeItem('qb_tutorial_completed');
    tutorialState.isCompleted = false;
    tutorialState.isActive = false;
    tutorialState.currentStep = 0;
    tutorialState.isInitializing = false;
    
    // Remove existing overlay if present
    const existingOverlay = document.getElementById('tutorial-overlay');
    if (existingOverlay) {
      console.log('Removing existing tutorial overlay');
      existingOverlay.remove();
    }
    
    // Start tutorial with a short delay
    console.log('Starting tutorial after reset...');
    setTimeout(() => {
      const result = initTutorial();
      if (!result) {
        console.log('Tutorial init returned false, may already be completed or initializing');
      }
    }, 100);
  }

  // Check if tutorial should start automatically
  function checkAutoStartTutorial() {
    console.log('Checking tutorial auto-start...');
    
    // Check current state
    const hasStars = localStorage.getItem('qb_stars');
    const hasDiamonds = localStorage.getItem('qb_diamonds');
    const tutorialCompleted = localStorage.getItem('qb_tutorial_completed');
    
    console.log('Tutorial check:', {hasStars, hasDiamonds, tutorialCompleted});
    console.log('Document ready state:', document.readyState);
    console.log('Body available:', !!document.body);
    
    // Start tutorial for new players or if not completed
    const shouldStartTutorial = !tutorialCompleted || tutorialCompleted !== 'true';
    
    console.log('Should start tutorial:', shouldStartTutorial);
    
    if (shouldStartTutorial) {
      // Quick start - just check if document is ready
      if (document.body) {
        console.log('Starting tutorial immediately...');
        const result = initTutorial();
        console.log('Tutorial init result:', result);
      } else {
        // Small fallback delay if body isn't ready yet
        console.log('Body not ready, using minimal delay...');
        setTimeout(() => {
          console.log('Attempting to start tutorial now...');
          const result = initTutorial();
          console.log('Tutorial init result:', result);
        }, 100);
      }
    } else {
      console.log('Tutorial already completed, skipping auto-start');
    }
  }

  // Force start tutorial (for debugging)
  function forceStartTutorial() {
    console.log('Force starting tutorial...');
    localStorage.removeItem('qb_tutorial_completed');
    setTimeout(() => {
      const result = initTutorial();
      console.log('Force tutorial result:', result);
    }, 100);
  }

  // Export functions
  window.Tutorial = {
    init: initTutorial,
    reset: resetTutorial,
    checkAutoStart: checkAutoStartTutorial,
    forceStart: forceStartTutorial,
    isActive: () => tutorialState.isActive,
    isCompleted: () => tutorialState.isCompleted,
    isLoaded: () => tutorialState.isLoaded,
    getState: () => tutorialState
  };
  
  // Mark tutorial as loaded for external scripts
  tutorialState.isLoaded = true;
  console.log('Tutorial module loaded and exported to window.Tutorial');

  // Auto-start check when script loads (browser-compatible)
  if (document.readyState === 'loading') {
    console.log('Document still loading, waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', checkAutoStartTutorial);
  } else {
    console.log('Document already loaded, starting tutorial check immediately...');
    // DOM already loaded, start tutorial check after a short delay
    setTimeout(checkAutoStartTutorial, 100);
  }

})();