// Survivor Mode Challenge Mode Logic
(function() {

  // Survivor Mode game state
  let smGameState = {
    currentLevel: 1,
    levelProgress: 0, // Questions answered in current level (0-2, advance at 3)
    lives: 3,
    totalScore: 0,
    currentQuestionIndex: 0,
    timeLeft: 12,
    timer: null,
    timerInterval: null,
    isPlaying: false,
    currentQuestion: null,
    usedQuestions: {} // Will store arrays per level: { 1: [], 2: [], ... }
  };

  // Initialize used questions for all levels
  for (let i = 1; i <= 10; i++) {
    smGameState.usedQuestions[i] = [];
  }

  // Level configuration (levels 1-10)
  const levelConfig = {
    1: { starsPerQuestion: 5, levelBonus: 15 },
    2: { starsPerQuestion: 7, levelBonus: 20 },
    3: { starsPerQuestion: 9, levelBonus: 25 },
    4: { starsPerQuestion: 11, levelBonus: 30 },
    5: { starsPerQuestion: 13, levelBonus: 35 },
    6: { starsPerQuestion: 15, levelBonus: 40 },
    7: { starsPerQuestion: 17, levelBonus: 45 },
    8: { starsPerQuestion: 19, levelBonus: 50 },
    9: { starsPerQuestion: 21, levelBonus: 55 },
    10: { starsPerQuestion: 25, levelBonus: 60 }
  };

  // Cooldown management
  function checkSurvivorCooldown() {
    const lastPlayed = localStorage.getItem('sm_last_played');
    if (!lastPlayed) return { canPlay: true, timeRemaining: 0 };

    const lastPlayedTime = parseInt(lastPlayed);
    const cooldownDuration = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
    const now = Date.now();
    const timePassed = now - lastPlayedTime;

    if (timePassed >= cooldownDuration) {
      return { canPlay: true, timeRemaining: 0 };
    }

    return {
      canPlay: false,
      timeRemaining: cooldownDuration - timePassed
    };
  }

  // Format time remaining for display
  function formatTimeRemaining(ms) {
    const hours = Math.floor(ms / (60 * 60 * 1000));
    const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  }

  // Update Survivor Mode display
  function updateSurvivorDisplay() {
    const cooldownStatus = checkSurvivorCooldown();
    const playBtn = document.getElementById('sm-play-btn');
    const cooldownDiv = document.getElementById('sm-cooldown');
    const timerSpan = document.getElementById('sm-timer');
    const bestLevel = localStorage.getItem('sm_best_level') || '-';
    const bestLevelElement = document.getElementById('sm-best-tier'); // Keep existing element ID
    const overlay = document.getElementById('sm-cooldown-overlay');
    const timerElement = document.getElementById('sm-cooldown-timer');

    if (bestLevelElement) {
      bestLevelElement.textContent = bestLevel === '-' ? '-' : `Level ${bestLevel}`;
    }

    if (cooldownStatus.canPlay) {
      if (playBtn) playBtn.style.display = 'block';
      if (cooldownDiv) cooldownDiv.classList.add('hidden');

      // Hide overlay
      if (overlay) {
        overlay.classList.add('hidden');
        overlay.onclick = null;
      }
    } else {
      if (playBtn) playBtn.style.display = 'none'; // Hide play button
      if (cooldownDiv) cooldownDiv.classList.add('hidden'); // Hide text cooldown message

      // Show overlay with timer
      if (overlay && timerElement) {
        const hours = Math.floor(cooldownStatus.timeRemaining / (60 * 60 * 1000));
        const minutes = Math.floor((cooldownStatus.timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
        timerElement.textContent = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        overlay.classList.remove('hidden');

        // Add click handler to show modal
        overlay.onclick = () => {
          if (typeof window.showGameModeLockedModal === 'function') {
            window.showGameModeLockedModal('survivor-mode', 'sm_last_played', cooldownStatus.timeRemaining);
          }
        };
      }
    }
  }

  // Get unused questions for current level
  function getUnusedQuestionsForLevel(level) {
    // Use QuestionPool service to get questions
    if (!window.QuestionPool) {
      console.error('QuestionPool service not loaded!');
      return [];
    }

    // Calculate difficulty based on level (levels 1-3 = easy, 4-7 = medium, 8-10 = hard)
    const difficulty = window.QuestionPool.calculateDifficulty(level);

    // Get questions at this difficulty level
    const allQuestions = window.QuestionPool.getRandomQuestions(100, { difficulty });

    if (allQuestions.length === 0) {
      console.error(`No questions available for level ${level} (difficulty: ${difficulty})!`);
      return [];
    }

    // Generate unique ID for each question if not present
    const questionsWithIds = allQuestions.map((q, index) => ({
      ...q,
      id: q.id || `${q.metadata.topic.en}_${q.metadata.subcategory.en}_${q.metadata.level}_${index}`,
      // Convert to Survivor Mode format
      correctIndex: q.correct  // Map 'correct' to 'correctIndex' for consistency
    }));

    const recentlyUsed = smGameState.usedQuestions[level] || [];
    const availableQuestions = questionsWithIds.filter(q =>
      !recentlyUsed.includes(q.id)
    );

    // If we don't have enough questions, reset the pool but keep the last few
    if (availableQuestions.length < 3) {
      const keepRecent = recentlyUsed.slice(-5);
      smGameState.usedQuestions[level] = keepRecent;
      return questionsWithIds.filter(q => !keepRecent.includes(q.id));
    }

    return availableQuestions;
  }

  // Select next question
  function selectNextQuestion() {
    const availableQuestions = getUnusedQuestionsForLevel(smGameState.currentLevel);
    if (availableQuestions.length === 0) {
      console.error('No questions available for level:', smGameState.currentLevel);
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];

    // Add to used questions
    if (!smGameState.usedQuestions[smGameState.currentLevel]) {
      smGameState.usedQuestions[smGameState.currentLevel] = [];
    }
    smGameState.usedQuestions[smGameState.currentLevel].push(selectedQuestion.id);

    return selectedQuestion;
  }

  // Start Survivor Mode
  async function startSurvivorMode() {
    console.log('Starting Survivor Mode...');

    const cooldownStatus = checkSurvivorCooldown();
    if (!cooldownStatus.canPlay) {
      alert(`Survivor Mode is on cooldown. Try again in ${formatTimeRemaining(cooldownStatus.timeRemaining)}.`);
      return;
    }

    // Set modal cooldown text for survivor mode
    if (typeof window.setModalCooldownText === 'function') {
      window.setModalCooldownText('survivor');
    }

    // Check if questions are already loaded, if not load them
    if (window.QuestionPool && window.QuestionPool.getAllQuestions().length === 0) {
      try {
        console.log('Questions not preloaded, loading now...');
        await window.QuestionPool.loadAllQuestionsAsync();
      } catch (error) {
        console.error('Failed to load questions:', error);
        alert('Failed to load questions. Please try again later.');
        return;
      }
    } else {
      console.log('Using preloaded questions for Survivor Mode');
    }

    // Reset game state
    smGameState.currentLevel = 1;
    smGameState.levelProgress = 0;
    smGameState.lives = 3;
    smGameState.totalScore = 0;
    smGameState.currentQuestionIndex = 0;
    smGameState.timeLeft = 12;
    smGameState.isPlaying = true;

    // Reset used questions for this session
    for (let i = 1; i <= 10; i++) {
      smGameState.usedQuestions[i] = [];
    }

    // Set cooldown
    localStorage.setItem('sm_last_played', Date.now().toString());
    updateSurvivorDisplay();

    // Show Survivor screen
    window.showScreen('survivor-screen');

    // Initialize UI
    updateSurvivorUI();

    // Start first question
    nextSurvivorQuestion();
  }

  // Update Survivor Mode UI
  function updateSurvivorUI() {
    const lang = window.lang || 'en';
    const config = levelConfig[smGameState.currentLevel];

    // Level icons/emojis based on level number
    const levelIcons = {
      1: '⭐', 2: '🌟', 3: '✨', 4: '💫', 5: '🌠',
      6: '🔥', 7: '💥', 8: '⚡', 9: '🌪️', 10: '🏆'
    };

    const levelNames = {
      en: ['Beginner', 'Novice', 'Apprentice', 'Skilled', 'Expert', 'Master', 'Champion', 'Legend', 'Hero', 'Grand Master'],
      es: ['Principiante', 'Novato', 'Aprendiz', 'Hábil', 'Experto', 'Maestro', 'Campeón', 'Leyenda', 'Héroe', 'Gran Maestro'],
      de: ['Anfänger', 'Neuling', 'Lehrling', 'Geschickt', 'Experte', 'Meister', 'Champion', 'Legende', 'Held', 'Großmeister'],
      nl: ['Beginner', 'Novice', 'Leerling', 'Bekwaam', 'Expert', 'Meester', 'Kampioen', 'Legende', 'Held', 'Grootmeester']
    };

    const levelIcon = levelIcons[smGameState.currentLevel] || '⭐';
    const levelName = levelNames[lang][smGameState.currentLevel - 1] || `Level ${smGameState.currentLevel}`;

    // Update level display
    document.getElementById('sm-current-tier').textContent = `${levelIcon} ${levelName} (Level ${smGameState.currentLevel}/10)`;

    // Update lives
    const livesDiv = document.getElementById('sm-lives');
    livesDiv.innerHTML = '';
    for (let i = 0; i < smGameState.lives; i++) {
      const heart = document.createElement('span');
      heart.className = 'text-red-500 text-xl';
      heart.textContent = '❤️';
      livesDiv.appendChild(heart);
    }

    // Update progress bar
    const progressPercent = (smGameState.levelProgress / 3) * 100;
    document.getElementById('sm-progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('sm-progress-text').textContent =
      `${smGameState.levelProgress}/3 questions to next level`;

    // Update score
    document.getElementById('sm-score-display').textContent =
      `Score: ${smGameState.totalScore} stars`;

    // Update timer
    document.getElementById('sm-timer-display').textContent = `${smGameState.timeLeft}s`;
  }

  // Start timer for current question
  function startSurvivorTimer() {
    clearTimeout(smGameState.timer);
    clearInterval(smGameState.timerInterval);

    smGameState.timeLeft = 12;

    smGameState.timerInterval = setInterval(() => {
      smGameState.timeLeft--;
      document.getElementById('sm-timer-display').textContent = `${smGameState.timeLeft}s`;

      if (smGameState.timeLeft <= 0) {
        clearInterval(smGameState.timerInterval);
        showSurvivorTimeoutModal();
      }
    }, 1000);
  }

  // Show timeout modal for Survivor Mode
  function showSurvivorTimeoutModal() {
    smGameState.isPlaying = false;

    // Show timeout modal
    const timeoutModal = document.getElementById('timeout-modal');
    if (timeoutModal) {
      timeoutModal.classList.remove('hidden');

      // Update modal text for Survivor Mode context
      const timeoutText = document.getElementById('timeout-modal-text');
      if (timeoutText) {
        timeoutText.textContent = `Time's up! You reached Level ${smGameState.currentLevel} with ${smGameState.totalScore} stars.`;
      }

      // Handle back button - end survivor mode
      const backBtn = document.getElementById('timeout-modal-back');
      if (backBtn) {
        backBtn.onclick = () => {
          timeoutModal.classList.add('hidden');
          endSurvivorMode(false);
        };
      }
    }
  }

  // Show error modal for Survivor Mode (too many mistakes)
  function showSurvivorErrorModal() {
    smGameState.isPlaying = false;

    // Show error modal
    const errorModal = document.getElementById('error-modal');
    if (errorModal) {
      errorModal.classList.remove('hidden');

      // Update modal text for Survivor Mode context
      const errorText = document.getElementById('error-modal-text');
      if (errorText) {
        errorText.textContent = `Too many mistakes! You reached Level ${smGameState.currentLevel} with ${smGameState.totalScore} stars.`;
      }

      // Handle back button - end survivor mode
      const backBtn = document.getElementById('error-modal-back');
      if (backBtn) {
        backBtn.onclick = () => {
          errorModal.classList.add('hidden');
          endSurvivorMode(false);
        };
      }
    }
  }

  // Render current question
  function renderSurvivorQuestion(question) {
    const lang = window.lang || 'en';

    // Update question text
    document.getElementById('sm-question-text').textContent = question.question[lang];

    // Hide explanation from previous question
    document.getElementById('sm-explanation').classList.add('hidden');

    // Create answer buttons
    const answersDiv = document.getElementById('sm-answers');
    answersDiv.innerHTML = '';

    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded';
      btn.textContent = option[lang];
      btn.disabled = false;
      btn.addEventListener('click', () => handleSurvivorAnswer(index));

      // Admin Mode: Highlight correct answer
      if (window.adminModeActive && index === question.correctIndex) {
        btn.style.backgroundColor = '#fef08a'; // yellow-200
        btn.style.border = '3px solid #eab308'; // yellow-500
        btn.style.color = '#000000'; // black text for better contrast
        console.log('🔍 Admin Mode (Survivor): Highlighted correct answer');
      }

      answersDiv.appendChild(btn);
    });
  }

  // Handle answer selection
  function handleSurvivorAnswer(selectedIndex) {
    if (!smGameState.isPlaying) return;

    // Stop timer
    clearTimeout(smGameState.timer);
    clearInterval(smGameState.timerInterval);

    // Disable buttons
    document.querySelectorAll('#sm-answers button').forEach(btn => btn.disabled = true);

    const currentQuestion = smGameState.currentQuestion;
    const isCorrect = selectedIndex === currentQuestion.correctIndex && selectedIndex !== null;

    if (isCorrect) {
      document.getElementById('snd-correct').play();

      // Show large checkmark in center of screen
      if (typeof window.showFeedbackIcon === 'function') {
        window.showFeedbackIcon('✓', '#22c55e');
      }

      // Award stars
      const starsEarned = levelConfig[smGameState.currentLevel].starsPerQuestion;
      smGameState.totalScore += starsEarned;

      // Advance level progress
      smGameState.levelProgress++;

      // Add border to correct answer based on theme
      const isLightMode = document.body.classList.contains('light-mode');
      const borderColor = isLightMode ? '#1f2937' : '#ffffff';
      const buttons = document.querySelectorAll('#sm-answers button');

      if (buttons[selectedIndex]) {
        buttons[selectedIndex].style.border = `4px solid ${borderColor}`;
      }

      // Check for level advancement
      if (smGameState.levelProgress >= 3) {
        advanceToNextLevel();
      }
    } else {
      document.getElementById('snd-wrong').play();

      // Show large cross in center of screen
      if (typeof window.showFeedbackIcon === 'function') {
        window.showFeedbackIcon('✗', '#F23F5D');
      }

      // Lose a life
      smGameState.lives--;

      // Show correct answer
      const isLightMode = document.body.classList.contains('light-mode');
      const borderColor = isLightMode ? '#1f2937' : '#ffffff';
      const buttons = document.querySelectorAll('#sm-answers button');

      // Correct answer - add border based on theme
      if (buttons[currentQuestion.correctIndex]) {
        buttons[currentQuestion.correctIndex].style.border = `4px solid ${borderColor}`;
      }

      // Check for game over
      if (smGameState.lives <= 0) {
        setTimeout(() => showSurvivorErrorModal(), 2000);
        return;
      }
    }

    // Update UI
    updateSurvivorUI();

    // Check if explanations are enabled
    const showExplanations = document.getElementById('explanations-toggle')?.checked ?? true;
    const lang = localStorage.getItem('language') || 'en';

    if (showExplanations && currentQuestion.explanation && currentQuestion.explanation[lang]) {
      // Show explanation with continue button
      const explanationContainer = document.getElementById('sm-explanation');
      const explanationText = document.getElementById('sm-explanation-text');
      explanationText.textContent = currentQuestion.explanation[lang];
      explanationContainer.classList.remove('hidden');

      // Don't auto-advance - wait for continue button click
    } else {
      // Auto-advance after delay when explanations are off
      smGameState.nextQuestionTimer = setTimeout(() => {
        if (smGameState.isPlaying) {
          nextSurvivorQuestion();
        }
      }, 1500);
    }
  }

  // Advance to next level
  function advanceToNextLevel() {
    const currentConfig = levelConfig[smGameState.currentLevel];

    // Award level bonus
    smGameState.totalScore += currentConfig.levelBonus;

    // Check if we've completed all levels
    if (smGameState.currentLevel >= 10) {
      // Game complete!
      setTimeout(() => endSurvivorMode(true), 1500);
      return;
    }

    // Advance to next level
    smGameState.currentLevel++;
    smGameState.levelProgress = 0;

    console.log(`Advanced to level: ${smGameState.currentLevel}`);
  }

  // Move to next question
  function nextSurvivorQuestion() {
    const question = selectNextQuestion();
    if (!question) {
      endSurvivorMode(false);
      return;
    }

    smGameState.currentQuestion = question;
    renderSurvivorQuestion(question);
    updateSurvivorUI();
    startSurvivorTimer();
  }

  // End Survivor Mode
  function endSurvivorMode(completed) {
    smGameState.isPlaying = false;
    clearTimeout(smGameState.timer);
    clearInterval(smGameState.timerInterval);

    // Add stars to player
    let stars = parseInt(localStorage.getItem('qb_stars') || '0');
    stars += smGameState.totalScore;
    localStorage.setItem('qb_stars', stars.toString());
    if (typeof window.updateStarDisplay === 'function') {
      window.updateStarDisplay();
    }

    // Update best level
    const currentBest = parseInt(localStorage.getItem('sm_best_level') || '0');

    if (smGameState.currentLevel > currentBest) {
      localStorage.setItem('sm_best_level', smGameState.currentLevel.toString());
      updateSurvivorDisplay();
    }

    // Set cooldown (4 hours)
    localStorage.setItem('sm_last_played', Date.now().toString());

    // Show completion popup
    showSurvivorCompletePopup(completed, smGameState.currentLevel, smGameState.totalScore);
  }

  // Show Survivor Mode completion popup
  function showSurvivorCompletePopup(completed, levelReached, totalScore) {
    const modal = document.getElementById('sm-complete-modal');
    const titleElement = document.getElementById('sm-complete-title');
    const levelElement = document.getElementById('sm-complete-level');
    const scoreElement = document.getElementById('sm-complete-score');
    const starsElement = document.getElementById('sm-complete-stars');
    const messageElement = document.getElementById('sm-complete-message');
    const backBtn = document.getElementById('sm-complete-back');

    if (!modal || !titleElement || !levelElement || !scoreElement || !starsElement || !messageElement || !backBtn) {
      console.error('Survivor Mode complete modal elements not found');
      const msg = completed ? `🏆 INCREDIBLE! Level ${levelReached}, Score: ${totalScore}` : `Survivor Mode Complete!\nLevel: ${levelReached}, Score: ${totalScore}`;
      alert(msg);
      window.showScreen('challenge-modes-screen');
      updateSurvivorDisplay();
      return;
    }

    const currentLang = window.lang || 'en';

    const translations = {
      title: {
        en: '🏆 Finished! 🏆',
        nl: '🏆 Voltooid! 🏆',
        fr: '🏆 Terminé! 🏆',
        es: '🏆 ¡Terminado! 🏆'
      },
      levelReached: {
        en: 'Level Reached',
        nl: 'Level Bereikt',
        fr: 'Niveau Atteint',
        es: 'Nivel Alcanzado'
      },
      score: {
        en: 'Score',
        nl: 'Score',
        fr: 'Score',
        es: 'Puntuación'
      },
      starsEarned: {
        en: 'stars earned!',
        nl: 'sterren verdiend!',
        fr: 'étoiles gagnées!',
        es: 'estrellas ganadas!'
      },
      messageComplete: {
        en: '🏆 Incredible! All levels conquered!',
        nl: '🏆 Ongelooflijk! Alle levels veroverd!',
        fr: '🏆 Incroyable! Tous les niveaux conquis!',
        es: '🏆 ¡Increíble! ¡Todos los niveles conquistados!'
      },
      messagePartial: {
        en: '🏆 Great survival skills!',
        nl: '🏆 Geweldige overlevingsvaardigheden!',
        fr: '🏆 Excellentes compétences de survie!',
        es: '🏆 ¡Grandes habilidades de supervivencia!'
      },
      backButton: {
        en: 'Back to Challenges',
        nl: 'Terug naar Uitdagingen',
        fr: 'Retour aux Défis',
        es: 'Volver a Desafíos'
      }
    };

    titleElement.textContent = translations.title[currentLang];
    levelElement.textContent = `${translations.levelReached[currentLang]}: ${levelReached}`;
    scoreElement.textContent = `${translations.score[currentLang]}: ${totalScore}`;
    starsElement.textContent = `⭐ +${totalScore} ${translations.starsEarned[currentLang]}`;
    messageElement.textContent = completed ? translations.messageComplete[currentLang] : translations.messagePartial[currentLang];
    backBtn.textContent = translations.backButton[currentLang];

    modal.classList.remove('hidden');

    backBtn.onclick = () => {
      modal.classList.add('hidden');
      window.showScreen('challenge-modes-screen');
      updateSurvivorDisplay();
    };
  }

  // Initialize Survivor Mode
  function initializeSurvivorMode() {
    console.log('Initializing Survivor Mode...');

    // Add event listeners
    document.getElementById('sm-play-btn')?.addEventListener('click', startSurvivorMode);
    document.getElementById('sm-continue-btn')?.addEventListener('click', () => {
      if (smGameState.isPlaying) {
        nextSurvivorQuestion();
      }
    });

    // Update display
    updateSurvivorDisplay();

    // Update cooldown display every minute
    setInterval(updateSurvivorDisplay, 60000);

    console.log('Survivor Mode initialized');
  }

  // Export functions and state
  window.startSurvivorMode = startSurvivorMode;
  window.initializeSurvivorMode = initializeSurvivorMode;
  window.updateSurvivorDisplay = updateSurvivorDisplay;
  window.smGameState = smGameState;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSurvivorMode);
  } else {
    initializeSurvivorMode();
  }

})();
