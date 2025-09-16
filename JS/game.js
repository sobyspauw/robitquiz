// —— 1) Game State (variables now declared in ui.js) ——
// selectedGroupIndex, selectedLevelIndex, questions, currentIndex, 
// correctCount, wrongCount, stars, timer, timerInterval are now global from ui.js

// —— 2) Ads helper ——
function showInterstitialAd(callback) {
  if (window.admob && admob.interstitial) {
    admob.interstitial.show().then(callback).catch(callback);
  } else {
    callback();
  }
}

// —— 3) Persistence & “Quick Start” ——
function quickStart() {
  const save = JSON.parse(localStorage.getItem('qb_save') || 'null');
  if (!save) return window.showSubjects();

  selectedGroupIndex = save.group;
  selectedLevelIndex = save.level;
  currentIndex       = save.question;
  correctCount       = save.correct;
  wrongCount         = save.wrong;
  stars              = save.stars || parseInt(localStorage.getItem('qb_stars') || '0');
  

  // load & shuffle questions for that level
  const level = window.groups[selectedGroupIndex].levels[selectedLevelIndex];
  questions = [...level.questions].sort(() => Math.random() - 0.5);


  window.updateStarDisplay();
  window.showScreen('quiz-screen');
  window.applyTranslations();
  window.renderQuestion();
}

// —— 4) Starting a new level ——
function startLevel(groupIdx, levelIdx) {
  console.log('startLevel called with:', groupIdx, levelIdx);
  
  selectedGroupIndex = groupIdx;
  selectedLevelIndex = levelIdx;
  currentIndex       = 0;
  correctCount       = 0;
  wrongCount         = 0;
  // Don't reset stars when starting a new level
  stars = parseInt(localStorage.getItem('qb_stars') || '0');
  
  // Reset continue button processing state
  if (window.continueButtonProcessing !== undefined) {
    window.continueButtonProcessing = false;
    console.log('Reset continue button processing state for new level');
  }
  

  const level = window.groups[selectedGroupIndex].levels[selectedLevelIndex];
  questions = [...level.questions].sort(() => Math.random() - 0.5);

  console.log('About to call updateStarDisplay and showScreen');
  
  if (typeof window.updateStarDisplay === 'function') {
    window.updateStarDisplay();
  } else {
    console.error('updateStarDisplay function not available');
  }
  
  if (typeof window.showScreen === 'function') {
    console.log('Calling showScreen with quiz-screen');
    window.showScreen('quiz-screen');
    console.log('showScreen call completed');
  } else {
    console.error('showScreen function not available');
  }
  
  window.applyTranslations();
  window.renderQuestion();
}

// —— 5) Answer handling & scoring ——
function handleAnswer(answer, btn) {
  console.log('handleAnswer called with answer:', answer);
  console.log('Button clicked:', btn);
  console.log('Current question:', currentIndex);
  
  // disable further clicks
  document.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);
  console.log('Disabled all answer buttons');
  
  // stop countdown
  clearTimeout(timer);
  clearInterval(timerInterval);
  console.log('Stopped timer and interval');

  // find correct text
  const q = questions[currentIndex];
  console.log('Question object:', q);
  // Use 'correct' property instead of 'correctIndex' if available
  const correctIndex = q.correctIndex !== undefined ? q.correctIndex : q.correct;
  const correctAnswer = q.options[correctIndex][window.lang || 'en'];
  const isCorrect = answer === correctAnswer;
  console.log('Correct answer:', correctAnswer, 'User answer:', answer, 'Is correct:', isCorrect);

  // Show explanation if available
  if (typeof window.showExplanation === 'function') {
    window.showExplanation(q, isCorrect);
  }

  // play sound + highlight
  console.log('Applying feedback styling...');
  if (isCorrect) {
    console.log('Answer is correct - applying green/cyan styling');
    document.getElementById('snd-correct').play();
    correctCount++;
    // Don't add stars here - only on level completion
    btn.style.background = '#02B7CE'; // bright cyan for correct
    btn.style.color = '#121C3A'; // deep navy text
    btn.style.border = '2px solid #02B7CE';
    console.log('Applied correct answer styling to button');
  } else {
    console.log('Answer is wrong - applying red styling and highlighting correct answer');
    document.getElementById('snd-wrong').play();
    wrongCount++;
    btn.style.background = '#F23F5D'; // pinkish red for wrong
    btn.style.color = '#FFFFFF'; // white text
    btn.style.border = '2px solid #F23F5D';
    console.log('Applied wrong answer styling to clicked button');
    
    // Show correct answer
    let correctButtonFound = false;
    document.querySelectorAll('#answers button').forEach(b => {
      if (b.innerText === correctAnswer) {
        b.style.background = '#02B7CE'; // bright cyan for correct
        b.style.color = '#121C3A'; // deep navy text
        b.style.border = '2px solid #02B7CE';
        correctButtonFound = true;
        console.log('Found and highlighted correct answer button:', b.innerText);
      }
    });
    if (!correctButtonFound) {
      console.warn('Could not find correct answer button to highlight');
    }
  }

  // Answer buttons are already disabled above - no need for additional logic here

  // update counters & save
  document.getElementById('correct').innerText =
    `${window.t('correct')}: ${correctCount}/10`;
  document.getElementById('wrong').innerText =
    `${window.t('mistakes')}: ${wrongCount}/2`;
  window.updateStarDisplay();

  localStorage.setItem('qb_save', JSON.stringify({
    group:    selectedGroupIndex,
    level:    selectedLevelIndex,
    question: currentIndex + 1,
    correct:  correctCount,
    wrong:    wrongCount,
    stars
  }));
  localStorage.setItem('qb_stars', stars.toString());

  // after 1.5 s either advance or show error
  setTimeout(() => {
    console.log('Timeout fired - checking progression logic');
    console.log('wrongCount:', wrongCount, 'correctCount:', correctCount);
    
    // Check if there's an explanation to show first
    const q = questions[currentIndex];
    const hasExplanation = q.explanation && (q.explanation[window.lang || 'en'] || q.explanation['en']);
    const showExplanationsEnabled = window.showExplanations === true; // Only true if explicitly true
    const shouldShowExplanation = showExplanationsEnabled && hasExplanation;
    
    console.log('Detailed explanation check:');
    console.log('  - window.showExplanations:', window.showExplanations);
    console.log('  - showExplanationsEnabled:', showExplanationsEnabled);
    console.log('  - hasExplanation:', hasExplanation);
    console.log('  - shouldShowExplanation:', shouldShowExplanation);
    
    if (wrongCount >= 2) {
      console.log('🚨 GAME OVER DETECTED IN TIMEOUT - wrongCount:', wrongCount);
      document.getElementById('snd-wrong2').play();
      
      if (shouldShowExplanation) {
        console.log('🚨 Game over WITH explanation - setting gameOverAfterExplanation flag');
        // Store that we need to show game over popup after explanation
        window.gameOverAfterExplanation = true;
      } else {
        console.log('🚨 Game over WITHOUT explanation - showing popup immediately');
        window.showErrorPopup();
      }
    } else {
      // Continue with normal flow for non-game-over scenarios
      if (!shouldShowExplanation) {
        console.log('No explanation to show or explanations disabled - auto-advancing to next question');
        window.continueToNextQuestion();
      } else {
        console.log('Explanation should be shown - waiting for user to click Continue button');
        // Do not auto-advance - wait for Continue button click
      }
    }
  }, 1500);
}

// New function to handle continuing to next question
function continueToNextQuestion() {
  currentIndex++;
  
  // Check if user has achieved 10 correct answers or reached end of questions
  if (correctCount >= 10 || currentIndex >= questions.length) {
    // Level complete - calculate tier-based star rewards
    let starsEarned = 0;
    if (correctCount >= 10) {
      // Get the subject tier to determine reward amount
      const currentGroup = window.groups[selectedGroupIndex];
      if (currentGroup && currentGroup.name) {
        // Find the subject in subjectDefinitions to get tier info
        const subjectKey = Object.keys(window.subjectDefinitions).find(key => {
          const subject = window.subjectDefinitions[key];
          return subject.name[window.lang || 'en'] === currentGroup.name[window.lang || 'en'];
        });
        
        if (subjectKey && window.subjectDefinitions[subjectKey]) {
          starsEarned = window.subjectDefinitions[subjectKey].levelReward || 10;
        } else {
          starsEarned = 10; // Fallback for warm-up subjects
        }
      } else {
        starsEarned = 10; // Default fallback
      }
    }
    if (starsEarned > 0) {
      stars += starsEarned;
      localStorage.setItem('qb_stars', stars.toString());
      window.updateStarDisplay();
    }
    
    // Mark level as completed
    if (typeof window.markLevelAsCompleted === 'function') {
      window.markLevelAsCompleted(selectedGroupIndex, selectedLevelIndex);
    }
    
    // Check for subject completion rewards
    if (typeof window.checkSubjectCompletion === 'function') {
      window.checkSubjectCompletion(selectedGroupIndex, selectedLevelIndex);
    }
    
    // Show completion popup instead of alert
    window.showCompletePopup(correctCount, starsEarned);
  } else {
    // Continue to next question
    if (window.timerState) {
      window.timerState.isPaused = false;
      window.timerState.isRunning = false;
    }
    window.renderQuestion();
  }
}

// —— 6) Error / Timeout popups ——
function showErrorPopup() {
  document.getElementById('error-modal').classList.remove('hidden');
}
// Error popup is now handled by ui.js

function showTimeoutPopup() {
  document.getElementById('timeout-modal').classList.remove('hidden');
  document.getElementById('snd-wrong2').play();
}
// These functions are now handled by ui.js modal system

// —— 7) Export for UI wiring ——
window.quickStart           = quickStart;
window.startLevel           = startLevel;
window.handleAnswer         = handleAnswer;
window.continueToNextQuestion = continueToNextQuestion;
window.showErrorPopup       = showErrorPopup;
// hideErrorPopup now handled by ui.js
window.showTimeoutPopup     = showTimeoutPopup;
// These are now handled by ui.js
window.showInterstitialAd   = showInterstitialAd;
