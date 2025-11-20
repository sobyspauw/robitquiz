// Interactive Tutorial System for RobitQuiz
// Features: Speech bubbles, typing effect, interactive steps
// Character: Robit the robot guides users through the game

(function() {
  'use strict';

  // Tutorial state management
  let tutorialState = {
    isActive: false,
    currentStep: 0,
    totalSteps: 21,
    isCompleted: false,
    typingInProgress: false,
    currentTypingTimeout: null
  };

  // Tutorial translations
  const tutorialTexts = {
    en: {
      welcome: "Hey there! I'm Robit! Welcome to my quiz world! Let's get started together!",
      languageSelect: "First, let's set which language you want to play in!",
      themeSelect: "Do you prefer Light Mode or Dark Mode? Choose what you like! Try Light Mode!",
      starsDiamonds: "See those stars and diamonds at the top? You earn them by playing quizzes and need them to progress!",
      playButton: "This is where the adventure begins! Press PLAY to see all subjects!",
      gameModesButton: "Want an extra challenge? Then Game Modes are for you!",
      dailyChallengeButton: "Every day a new challenge with nice rewards! Don't forget to check in daily!",
      subjects: "Here you see all available subjects! Click on the first subject to get started!",
      levels: "Each subject has multiple subcategories! Click on the first one to start your quiz!",
      quizScreen: "Here I'll ask you questions! Let's try one question together!",
      timer: "Watch the timer! You have limited time per question. If the timer runs out, it counts as a mistake!",
      mistakes: "You can make 2 mistakes before it's game over. Keep an eye on your mistakes and correct answers here!",
      answerButtons: "Click the answer you think is correct! Try answering this question!",
      answerExplanation: "After each answer you get an explanation! For faster gameplay, you can turn these off in the settings.",
      powerUps: "Stuck? Use a power-up! 50/50 removes 2 wrong answers, Skip jumps to next question, Time gives extra seconds!",
      freePowerUps: "Good news! You start with 3 free power-ups of each type! Want more? You can buy them in the shop with stars and diamonds!",
      explanationsToggle: "Don't want to see those explanations? You can turn them off here! Try switching it!",
      trueFalseMode: "True or False - simple but tricky! See how many questions you can get right in a row!",
      lightningRound: "Super fast! As many questions as possible in a short time! How quick are your reflexes?",
      survivorMode: "Keep answering until you make a mistake! How long can you survive?",
      extremeSurvivor: "For the real go-getters! Even harder than normal survivor mode!",
      shopButton: "Want more power-ups or extras? In the shop you can buy everything you need!",
      shop: "In the shop you buy power-ups with stars and diamonds! And you can also claim free daily gems here!",
      settingsButton: "Here you can adjust all settings! Like the explanations, language, and theme!",
      complete: "Yes! You're all set to begin! Good luck and have fun quizzing!",
      nextButton: "Next →",
      doneButton: "Done!"
    },
    nl: {
      welcome: "Hey daar! Ik ben Robit! Welkom bij mijn quiz wereld! Laten we samen beginnen!",
      languageSelect: "Eerst even instellen in welke taal je wilt spelen!",
      themeSelect: "Hou je van Light Mode of Dark Mode? Kies wat jij fijn vindt! Probeer Light Mode!",
      starsDiamonds: "Zie je die sterren en diamanten bovenin? Die verdien je met quizzen en heb je nodig om verder te komen!",
      playButton: "Hier begint het avontuur! Druk op PLAY om alle onderwerpen te zien!",
      gameModesButton: "Wil je een extra uitdaging? Dan zijn de Game Modes iets voor jou!",
      dailyChallengeButton: "Elke dag een nieuwe uitdaging met leuke beloningen! Vergeet niet dagelijks even langs te komen!",
      subjects: "Hier zie je alle beschikbare onderwerpen! Klik op het eerste onderwerp om te beginnen!",
      levels: "Elk onderwerp heeft meerdere subcategorieën! Klik op de eerste om je quiz te starten!",
      quizScreen: "Hier stel ik je vragen! Laten we samen één vraag proberen!",
      timer: "Let op de timer! Je hebt beperkte tijd per vraag. Als de timer afloopt, telt dat als een fout!",
      mistakes: "Je mag 2 fouten maken voordat het game over is. Houd hier je fouten en goede antwoorden in de gaten!",
      answerButtons: "Klik op het antwoord dat jij denkt dat klopt! Probeer deze vraag te beantwoorden!",
      answerExplanation: "Na elk antwoord krijg je uitleg! Voor sneller spelen kun je deze uitzetten in de instellingen.",
      powerUps: "Zit je vast? Gebruik een power-up! 50/50 haalt 2 foute antwoorden weg, Skip slaat de vraag over, Time geeft extra seconden!",
      freePowerUps: "Goed nieuws! Je begint met 3 gratis power-ups van elk type! Wil je er meer? Die kun je kopen in de shop met sterren en diamanten!",
      explanationsToggle: "Wil je die uitleg niet zien? Dan kun je het hier uitzetten! Probeer maar eens te schakelen!",
      trueFalseMode: "Waar of Onwaar - simpel maar tricky! Zie hoeveel vragen jij op een rij goed krijgt!",
      lightningRound: "Supersnel! Zoveel mogelijk vragen in korte tijd! Hoe snel zijn jouw reflexen?",
      survivorMode: "Blijf antwoorden tot je een fout maakt! Hoe lang kun jij overleven?",
      extremeSurvivor: "Voor de échte doorzetters! Nog moeilijker dan normale survivor mode!",
      shopButton: "Wil je meer power-ups of extra's? In de shop kun je alles kopen wat je nodig hebt!",
      shop: "In de shop koop je power-ups met sterren en diamanten! En je kunt hier ook gratis dagelijkse gems claimen!",
      settingsButton: "Hier kun je alle instellingen aanpassen! Zoals de uitleg, taal en thema!",
      complete: "Yes! Je bent helemaal klaar om te beginnen! Veel succes en plezier met quizzen!",
      nextButton: "Volgende →",
      doneButton: "Klaar!"
    },
    de: {
      welcome: "Hey! Ich bin Robit! Willkommen in meiner Quiz-Welt! Lass uns zusammen starten!",
      languageSelect: "Zuerst stellen wir ein, in welcher Sprache du spielen möchtest!",
      themeSelect: "Magst du Light Mode oder Dark Mode? Wähle, was dir gefällt! Probiere Light Mode aus!",
      starsDiamonds: "Siehst du die Sterne und Diamanten oben? Du verdienst sie durch Quizzen und brauchst sie zum Weiterkommen!",
      playButton: "Hier beginnt das Abenteuer! Drücke PLAY, um alle Themen zu sehen!",
      gameModesButton: "Willst du eine extra Herausforderung? Dann sind die Game Modes für dich!",
      dailyChallengeButton: "Jeden Tag eine neue Herausforderung mit tollen Belohnungen! Vergiss nicht, täglich vorbeizuschauen!",
      subjects: "Hier siehst du alle verfügbaren Themen! Klicke auf das erste Thema, um zu beginnen!",
      levels: "Jedes Thema hat mehrere Unterkategorien! Klicke auf die erste, um dein Quiz zu starten!",
      quizScreen: "Hier stelle ich dir Fragen! Lass uns zusammen eine Frage ausprobieren!",
      timer: "Achte auf den Timer! Du hast begrenzte Zeit pro Frage. Wenn die Zeit abläuft, zählt das als Fehler!",
      mistakes: "Du darfst 2 Fehler machen, bevor es Game Over ist. Behalte hier deine Fehler und richtigen Antworten im Auge!",
      answerButtons: "Klicke auf die Antwort, die du für richtig hältst! Versuche diese Frage zu beantworten!",
      answerExplanation: "Nach jeder Antwort bekommst du eine Erklärung! Für schnelleres Spielen kannst du diese in den Einstellungen ausschalten.",
      powerUps: "Steckst du fest? Benutze ein Power-up! 50/50 entfernt 2 falsche Antworten, Skip springt zur nächsten Frage, Time gibt extra Sekunden!",
      freePowerUps: "Gute Nachrichten! Du startest mit 3 kostenlosen Power-ups von jedem Typ! Willst du mehr? Du kannst sie im Shop mit Sternen und Diamanten kaufen!",
      explanationsToggle: "Willst du diese Erklärungen nicht sehen? Du kannst sie hier ausschalten! Probiere es mal!",
      trueFalseMode: "Wahr oder Falsch - einfach aber trickreich! Sieh, wie viele Fragen du hintereinander richtig bekommst!",
      lightningRound: "Super schnell! So viele Fragen wie möglich in kurzer Zeit! Wie schnell sind deine Reflexe?",
      survivorMode: "Antworte weiter, bis du einen Fehler machst! Wie lange kannst du überleben?",
      extremeSurvivor: "Für die echten Durchhalter! Noch schwerer als der normale Survivor-Modus!",
      shopButton: "Willst du mehr Power-ups oder Extras? Im Shop kannst du alles kaufen, was du brauchst!",
      shop: "Im Shop kaufst du Power-ups mit Sternen und Diamanten! Und du kannst hier auch kostenlose tägliche Edelsteine abholen!",
      settingsButton: "Hier kannst du alle Einstellungen anpassen! Wie die Erklärungen, Sprache und Thema!",
      complete: "Ja! Du bist bereit zum Loslegen! Viel Glück und viel Spaß beim Quizzen!",
      nextButton: "Weiter →",
      doneButton: "Fertig!"
    },
    es: {
      welcome: "¡Hola! ¡Soy Robit! ¡Bienvenido a mi mundo de quiz! ¡Empecemos juntos!",
      languageSelect: "Primero, vamos a configurar en qué idioma quieres jugar!",
      themeSelect: "¿Prefieres Light Mode o Dark Mode? ¡Elige lo que te guste! ¡Prueba Light Mode!",
      starsDiamonds: "¿Ves esas estrellas y diamantes arriba? ¡Los ganas jugando quizzes y los necesitas para progresar!",
      playButton: "¡Aquí comienza la aventura! ¡Presiona PLAY para ver todos los temas!",
      gameModesButton: "¿Quieres un desafío extra? ¡Entonces los Game Modes son para ti!",
      dailyChallengeButton: "¡Cada día un nuevo desafío con buenas recompensas! ¡No olvides visitarnos diariamente!",
      subjects: "¡Aquí ves todos los temas disponibles! ¡Haz clic en el primer tema para comenzar!",
      levels: "¡Cada tema tiene múltiples subcategorías! ¡Haz clic en la primera para comenzar tu quiz!",
      quizScreen: "¡Aquí te haré preguntas! ¡Intentemos una pregunta juntos!",
      timer: "¡Mira el temporizador! Tienes tiempo limitado por pregunta. ¡Si se acaba el tiempo, cuenta como un error!",
      mistakes: "¡Puedes cometer 2 errores antes de que sea Game Over. ¡Mantén un ojo en tus errores y respuestas correctas aquí!",
      answerButtons: "¡Haz clic en la respuesta que crees que es correcta! ¡Intenta responder esta pregunta!",
      answerExplanation: "¡Después de cada respuesta obtienes una explicación! Para jugar más rápido, puedes desactivarlas en la configuración.",
      powerUps: "¿Atascado? ¡Usa un power-up! 50/50 elimina 2 respuestas incorrectas, Skip salta a la siguiente pregunta, Time da segundos extra!",
      freePowerUps: "¡Buenas noticias! ¡Empiezas con 3 power-ups gratis de cada tipo! ¿Quieres más? ¡Puedes comprarlos en la tienda con estrellas y diamantes!",
      explanationsToggle: "¿No quieres ver esas explicaciones? ¡Puedes desactivarlas aquí! ¡Prueba a cambiarla!",
      trueFalseMode: "¡Verdadero o Falso - simple pero complicado! ¡Mira cuántas preguntas puedes acertar seguidas!",
      lightningRound: "¡Súper rápido! ¡Tantas preguntas como sea posible en poco tiempo! ¿Qué tan rápidos son tus reflejos?",
      survivorMode: "¡Sigue respondiendo hasta que cometas un error! ¿Cuánto tiempo puedes sobrevivir?",
      extremeSurvivor: "¡Para los verdaderos persistentes! ¡Aún más difícil que el modo survivor normal!",
      shopButton: "¿Quieres más power-ups o extras? ¡En la tienda puedes comprar todo lo que necesitas!",
      shop: "¡En la tienda compras power-ups con estrellas y diamantes! ¡Y también puedes reclamar gemas diarias gratis aquí!",
      settingsButton: "¡Aquí puedes ajustar toda la configuración! ¡Como las explicaciones, idioma y tema!",
      complete: "¡Sí! ¡Estás listo para comenzar! ¡Buena suerte y diviértete haciendo quizzes!",
      nextButton: "Siguiente →",
      doneButton: "¡Listo!"
    }
  };

  // Get current tutorial language (defaults to English)
  function getTutorialLang() {
    return window.lang || 'en';
  }

  // Tutorial steps configuration
  const tutorialSteps = [
    // Welkom & Instellingen (Stappen 1-3)
    {
      id: 'welcome',
      textKey: 'welcome',
      screen: 'home-screen',
      target: null,
      interactiveStep: false
    },
    {
      id: 'language-select',
      textKey: 'languageSelect',
      screen: 'home-screen',
      target: null,
      interactiveStep: true,
      waitFor: 'language-change',
      showLanguageButtons: true
    },
    {
      id: 'theme-select',
      textKey: 'themeSelect',
      screen: 'home-screen',
      target: null,
      interactiveStep: true,
      waitFor: 'theme-change',
      showThemeButtons: true
    },

    // PLAY Flow: Play knop → Subjects → Levels → Quiz
    { id: 'play-button', textKey: 'playButton', screen: 'home-screen', target: '#levels-btn', interactiveStep: true, waitFor: 'play-clicked' },
    { id: 'subjects', textKey: 'subjects', screen: 'subjects-screen', target: '#subjects-grid > div:first-child button', interactiveStep: true, waitFor: 'subject-selected' },
    { id: 'levels', textKey: 'levels', screen: 'levels-screen', target: '#levels-grid > div:first-child button', interactiveStep: true, waitFor: 'quiz-started' },
    { id: 'timer', textKey: 'timer', screen: 'quiz-screen', target: '#timer', pauseTimer: true },
    { id: 'mistakes', textKey: 'mistakes', screen: 'quiz-screen', target: ['#correct', '#wrong'], pauseTimer: true, bubblePosition: 'middle' },
    { id: 'power-ups', textKey: 'powerUps', screen: 'quiz-screen', target: ['#fifty-fifty-btn', '#skip-btn', '#time-bonus-btn'], pauseTimer: true, bubblePosition: 'middle' },
    { id: 'free-power-ups', textKey: 'freePowerUps', screen: 'quiz-screen', target: ['#fifty-fifty-btn', '#skip-btn', '#time-bonus-btn'], pauseTimer: true, bubblePosition: 'middle' },
    { id: 'answer-buttons', textKey: 'answerButtons', screen: 'quiz-screen', target: null, pauseTimer: true, hideBackdrop: true, interactiveStep: true, waitFor: 'answer-given' },
    { id: 'answer-explanation', textKey: 'answerExplanation', screen: 'quiz-screen', target: null, pauseTimer: true, hideBackdrop: true, bubblePosition: 'middle' },

    // Sterren & Diamanten (after earning some from quiz)
    { id: 'stars-diamonds', textKey: 'starsDiamonds', screen: 'quiz-screen', target: ['#star-display', '#diamond-display'], pauseTimer: true },

    // Terug naar Home → GAME MODES Flow
    { id: 'game-modes-button', textKey: 'gameModesButton', screen: 'home-screen', target: '#challenge-modes-btn', interactiveStep: true, waitFor: 'game-modes-clicked' },
    { id: 'true-false-mode', textKey: 'trueFalseMode', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(1)' },
    { id: 'lightning-round', textKey: 'lightningRound', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(2)' },
    { id: 'survivor-mode', textKey: 'survivorMode', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(3)' },
    { id: 'extreme-survivor', textKey: 'extremeSurvivor', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(4)' },

    // Terug naar Home → DAILY CHALLENGE
    { id: 'daily-challenge-button', textKey: 'dailyChallengeButton', screen: 'home-screen', target: '#daily-challenge-btn' },

    // Terug naar Home → SHOP
    { id: 'shop-button', textKey: 'shopButton', screen: 'home-screen', target: '#shop-btn', interactiveStep: true, waitFor: 'shop-clicked' },
    { id: 'shop', textKey: 'shop', screen: 'shop-screen', target: '#daily-rewards' },

    // Terug naar Home → SETTINGS
    { id: 'settings-button', textKey: 'settingsButton', screen: 'home-screen', target: '#settings-btn', interactiveStep: true, waitFor: 'settings-clicked' },
    { id: 'explanations-toggle', textKey: 'explanationsToggle', screen: 'settings-screen', target: '#explanations-toggle', interactiveStep: true, waitFor: 'explanations-toggled' },

    // Afsluiting
    { id: 'complete', textKey: 'complete', screen: 'home-screen', target: null }
  ];

  // Create tutorial overlay HTML
  function createTutorialOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'tutorial-overlay';
    overlay.className = 'fixed inset-0 z-[9999] pointer-events-none';
    overlay.innerHTML = `
      <!-- Darkened background (always visible, blocks clicks on non-highlighted areas) -->
      <div id="tutorial-backdrop" class="fixed inset-0 bg-black bg-opacity-50 pointer-events-auto"></div>

      <!-- Highlight for targeted elements (punch-through for the backdrop) -->
      <div id="tutorial-highlight" class="fixed border-4 border-yellow-400 rounded-lg transition-all duration-300 bg-transparent pointer-events-none" style="display: none;"></div>

      <!-- Click layer for highlighted element (sits above backdrop, allows clicks only on highlighted area) -->
      <div id="tutorial-click-layer" class="fixed pointer-events-auto" style="display: none; z-index: 10001;"></div>

      <!-- Speech bubble container -->
      <div id="tutorial-bubble-container" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto z-[10000]" style="width: 90%; max-width: 500px;">
        <!-- Robit character -->
        <div id="tutorial-robit" class="absolute -top-32 right-8 w-32 h-32 pointer-events-none">
          <img src="images/icons/quiz icoon 4 NB.png" alt="Robit" class="w-full h-full object-contain drop-shadow-2xl animate-bounce-slow" />
        </div>

        <!-- Speech bubble -->
        <div id="tutorial-bubble" class="bg-white rounded-2xl px-5 pt-3 pb-3 shadow-2xl relative">
          <!-- Triangle pointer -->
          <div class="absolute -top-4 right-12 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-white"></div>

          <!-- Text content -->
          <div id="tutorial-text" class="text-gray-800 text-lg leading-relaxed mb-0"></div>

          <!-- Buttons container (positioned at bottom right, mostly outside bubble) -->
          <div class="absolute right-6 bottom-0 translate-y-[90%] flex gap-2">
            <button id="tutorial-skip-btn" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 shadow-lg" style="display: none;">
              Skip
            </button>
            <button id="tutorial-next-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-lg">
              Volgende →
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    return overlay;
  }

  // Typing effect for text
  function typeText(text, element, callback) {
    if (tutorialState.currentTypingTimeout) {
      clearTimeout(tutorialState.currentTypingTimeout);
    }

    element.textContent = '';
    tutorialState.typingInProgress = true;

    let index = 0;
    const speed = 30; // milliseconds per character

    function typeNextChar() {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        tutorialState.currentTypingTimeout = setTimeout(typeNextChar, speed);
      } else {
        tutorialState.typingInProgress = false;
        if (callback) callback();
      }
    }

    typeNextChar();
  }

  // Highlight target element(s)
  function highlightElement(target, makeInteractive = false) {
    const highlight = document.getElementById('tutorial-highlight');
    const backdrop = document.getElementById('tutorial-backdrop');
    const clickLayer = document.getElementById('tutorial-click-layer');

    // No target means no highlight - backdrop stays visible but no cutout
    if (!highlight || !target) {
      if (highlight) {
        highlight.style.display = 'none';
      }
      if (backdrop) {
        backdrop.style.clipPath = 'none';
      }
      if (clickLayer) {
        clickLayer.style.display = 'none';
      }
      return;
    }

    let elements = [];
    if (Array.isArray(target)) {
      elements = target.map(t => document.querySelector(t)).filter(el => el !== null);
    } else {
      const el = document.querySelector(target);
      if (el) elements = [el];
    }

    // No elements found - no highlight, no cutout
    if (elements.length === 0) {
      if (highlight) {
        highlight.style.display = 'none';
      }
      if (backdrop) {
        backdrop.style.clipPath = 'none';
      }
      if (clickLayer) {
        clickLayer.style.display = 'none';
      }
      return;
    }

    // Calculate bounding box for all elements
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      minX = Math.min(minX, rect.left);
      minY = Math.min(minY, rect.top);
      maxX = Math.max(maxX, rect.right);
      maxY = Math.max(maxY, rect.bottom);
    });

    const padding = 12;
    const x = minX - padding;
    const y = minY - padding;
    const width = maxX - minX + padding * 2;
    const height = maxY - minY + padding * 2;

    // Show and position highlight border
    highlight.style.display = 'block';
    highlight.style.left = x + 'px';
    highlight.style.top = y + 'px';
    highlight.style.width = width + 'px';
    highlight.style.height = height + 'px';
    highlight.style.zIndex = '10002';

    // Create a cutout in the backdrop using CSS polygon clip-path
    // This makes the highlighted area fully visible with normal colors
    if (backdrop) {
      const cutoutPath = `polygon(
        0% 0%,
        0% 100%,
        ${x}px 100%,
        ${x}px ${y}px,
        ${x + width}px ${y}px,
        ${x + width}px ${y + height}px,
        ${x}px ${y + height}px,
        ${x}px 100%,
        100% 100%,
        100% 0%
      )`;
      backdrop.style.clipPath = cutoutPath;
    }

    // Position click layer over highlighted area to allow clicks
    if (clickLayer && makeInteractive) {
      clickLayer.style.display = 'block';
      clickLayer.style.left = x + 'px';
      clickLayer.style.top = y + 'px';
      clickLayer.style.width = width + 'px';
      clickLayer.style.height = height + 'px';
      clickLayer.style.pointerEvents = 'auto';
    } else if (clickLayer) {
      clickLayer.style.display = 'none';
    }

    // Make highlighted elements clickable by ensuring they're above the backdrop
    if (makeInteractive) {
      elements.forEach(el => {
        el.style.position = 'relative';
        el.style.zIndex = '10003'; // Above backdrop and click layer
      });
    }
  }

  // Show tutorial step
  function showStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= tutorialSteps.length) return;

    const step = tutorialSteps[stepIndex];
    tutorialState.currentStep = stepIndex;

    // Switch to correct screen
    if (step.screen && window.showScreen) {
      window.showScreen(step.screen);
    }

    // Pause timer if this step requires it
    if (step.pauseTimer && window.pauseQuizTimer) {
      window.pauseQuizTimer();
      tutorialState.timerWasPaused = true;
    } else if (tutorialState.timerWasPaused && window.resumeQuizTimer) {
      // Resume timer when leaving a pauseTimer step
      window.resumeQuizTimer();
      tutorialState.timerWasPaused = false;
    }

    // Hide or show backdrop based on step configuration
    const backdrop = document.getElementById('tutorial-backdrop');
    if (backdrop) {
      if (step.hideBackdrop) {
        backdrop.style.display = 'none';
      } else {
        backdrop.style.display = 'block';
      }
    }

    // Position bubble based on step configuration
    const bubbleContainer = document.getElementById('tutorial-bubble-container');
    if (bubbleContainer) {
      if (step.bubblePosition === 'center') {
        bubbleContainer.style.bottom = '50%';
        bubbleContainer.style.top = 'auto';
        bubbleContainer.style.transform = 'translate(-50%, 50%)';
      } else if (step.bubblePosition === 'top') {
        bubbleContainer.style.bottom = 'auto';
        bubbleContainer.style.top = '5rem'; // top-20
        bubbleContainer.style.transform = 'translateX(-50%)';
      } else if (step.bubblePosition === 'middle') {
        bubbleContainer.style.bottom = 'auto';
        bubbleContainer.style.top = '35%'; // Between top and center
        bubbleContainer.style.transform = 'translateX(-50%)';
      } else {
        // Default position (bottom)
        bubbleContainer.style.bottom = '5rem'; // bottom-20
        bubbleContainer.style.top = 'auto';
        bubbleContainer.style.transform = 'translateX(-50%)';
      }
    }

    // Wait a bit for screen transition
    setTimeout(() => {
      // Highlight target (make interactive if it's an interactive step)
      highlightElement(step.target, step.interactiveStep);

      // Get text in current language
      const lang = getTutorialLang();
      const texts = tutorialTexts[lang] || tutorialTexts.en;
      const text = texts[step.textKey] || step.textKey;

      // Type out text with animation
      const textElement = document.getElementById('tutorial-text');
      if (textElement) {
        textElement.innerHTML = '';

        // Split by line breaks and type each line
        const lines = text.split('\n');
        let fullText = '';

        lines.forEach((line, index) => {
          if (index > 0) fullText += '<br>';
          fullText += line;
        });

        // Typing animation
        let charIndex = 0;
        const speed = 15; // ms per character (faster)

        function typeChar() {
          if (charIndex < fullText.length) {
            // Handle <br> tags
            if (fullText.substr(charIndex, 4) === '<br>') {
              textElement.innerHTML += '<br>';
              charIndex += 4;
            } else {
              textElement.innerHTML += fullText[charIndex];
              charIndex++;
            }
            tutorialState.currentTypingTimeout = setTimeout(typeChar, speed);
          } else {
            tutorialState.typingInProgress = false;
          }
        }

        tutorialState.typingInProgress = true;
        typeChar();
      }

      // Update button text and visibility
      const nextBtn = document.getElementById('tutorial-next-btn');
      const skipBtn = document.getElementById('tutorial-skip-btn');

      if (nextBtn) {
        // Reset button to visible (may be hidden by interactive steps)
        nextBtn.style.display = 'flex';
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';

        if (stepIndex === tutorialSteps.length - 1) {
          nextBtn.textContent = texts.doneButton || 'Done!';
          nextBtn.className = 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-lg';
        } else {
          nextBtn.textContent = texts.nextButton || 'Next →';
          nextBtn.className = 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-lg';
        }
      }

      // Show skip button only on first step
      if (skipBtn) {
        if (stepIndex === 0) {
          skipBtn.style.display = 'flex';
        } else {
          skipBtn.style.display = 'none';
        }
      }

      // Handle interactive steps with custom UI
      if (step.showLanguageButtons) {
        showLanguageButtons();
      } else if (step.showThemeButtons) {
        showThemeButtons();
      } else if (step.interactiveStep) {
        setupInteractiveStep(step);
      }
    }, 300);
  }

  // Show language selection buttons in tutorial bubble
  function showLanguageButtons() {
    const textElement = document.getElementById('tutorial-text');
    const nextBtn = document.getElementById('tutorial-next-btn');
    const bubble = document.getElementById('tutorial-bubble');

    if (!textElement || !nextBtn) return;

    // Hide next button for this step
    nextBtn.style.display = 'none';

    // Adjust padding for language buttons step to keep it balanced
    if (bubble) {
      bubble.classList.remove('pt-3', 'pt-4', 'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5', 'pb-8');
      bubble.classList.add('pt-3', 'pb-3');
    }

    // Add language buttons after text in 2x2 grid
    setTimeout(() => {
      const buttonsHtml = `
        <div id="tutorial-lang-container" class="grid grid-cols-2 gap-3" style="margin-top: 0.75rem;">
          <button class="tutorial-lang-btn px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105" data-lang="en">English</button>
          <button class="tutorial-lang-btn px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105" data-lang="nl">Nederlands</button>
          <button class="tutorial-lang-btn px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105" data-lang="de">Deutsch</button>
          <button class="tutorial-lang-btn px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105" data-lang="es">Español</button>
        </div>
      `;
      textElement.insertAdjacentHTML('afterend', buttonsHtml);

      // Add click handlers
      document.querySelectorAll('.tutorial-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedLang = btn.dataset.lang;

          // Update language
          window.lang = selectedLang;
          localStorage.setItem('qb_language', selectedLang);

          // Update language select in settings
          const langSelect = document.getElementById('language-select');
          if (langSelect) langSelect.value = selectedLang;

          // Apply translations
          if (window.applyTranslations) {
            window.applyTranslations();
          }

          // Dispatch event
          window.dispatchEvent(new CustomEvent('language-change', { detail: { language: selectedLang } }));

          // Hide the entire bubble during transition
          const bubbleContainer = document.getElementById('tutorial-bubble-container');
          if (bubbleContainer) {
            bubbleContainer.style.opacity = '0';
          }

          // Remove language buttons
          const langButtonContainer = document.getElementById('tutorial-lang-container');
          if (langButtonContainer) {
            langButtonContainer.remove();
          }

          // Go to next step automatically
          setTimeout(() => {
            if (bubbleContainer) {
              bubbleContainer.style.opacity = '1';
            }
            nextStep();
          }, 300);
        });
      });
    }, 500);
  }

  // Show theme selection buttons in tutorial bubble
  function showThemeButtons() {
    const textElement = document.getElementById('tutorial-text');
    const nextBtn = document.getElementById('tutorial-next-btn');
    const bubble = document.getElementById('tutorial-bubble');

    if (!textElement || !nextBtn || !bubble) return;

    // Adjust padding for theme buttons step to keep it balanced
    bubble.classList.remove('py-3', 'pb-1', 'pb-2', 'pb-3', 'pb-5', 'pb-8');
    bubble.classList.add('pt-3', 'pb-3');

    // Keep next button visible but disabled initially
    nextBtn.disabled = true;
    nextBtn.style.opacity = '0.5';
    nextBtn.style.cursor = 'not-allowed';
    nextBtn.style.display = 'flex';

    // Add theme buttons after text
    setTimeout(() => {
      const lang = getTutorialLang();
      const lightText = lang === 'nl' ? 'Light Mode' : lang === 'de' ? 'Hell' : 'Light Mode';
      const darkText = lang === 'nl' ? 'Dark Mode' : lang === 'de' ? 'Dunkel' : 'Dark Mode';

      const buttonsHtml = `
        <div class="flex gap-3 justify-center" style="margin-top: 0.75rem;">
          <button class="tutorial-theme-btn px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105" data-theme="light">☀️ ${lightText}</button>
          <button class="tutorial-theme-btn px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all hover:scale-105" data-theme="dark">🌙 ${darkText}</button>
        </div>
      `;
      textElement.insertAdjacentHTML('afterend', buttonsHtml);

      // Enable next button immediately since dark mode is already selected
      nextBtn.disabled = false;
      nextBtn.style.opacity = '1';
      nextBtn.style.cursor = 'pointer';

      // Add click handlers
      document.querySelectorAll('.tutorial-theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedTheme = btn.dataset.theme;
          const isDarkMode = selectedTheme === 'dark';

          // Update theme
          if (window.applyTheme) {
            window.applyTheme(isDarkMode);
          }
          localStorage.setItem('qb_theme', selectedTheme);

          // Update theme toggle in settings
          const themeToggle = document.getElementById('theme-toggle');
          if (themeToggle) themeToggle.checked = isDarkMode;

          // Dispatch event
          window.dispatchEvent(new CustomEvent('theme-change', { detail: { isDarkMode } }));

          // Enable next button
          nextBtn.disabled = false;
          nextBtn.style.opacity = '1';
          nextBtn.style.cursor = 'pointer';

          // Highlight selected button
          document.querySelectorAll('.tutorial-theme-btn').forEach(b => {
            b.classList.remove('bg-green-600', 'hover:bg-green-700');
            b.classList.add('bg-blue-500', 'hover:bg-blue-600');
          });
          btn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
          btn.classList.add('bg-green-600', 'hover:bg-green-700');
        });
      });
    }, 500);
  }

  // Setup interactive step (wait for user action)
  function setupInteractiveStep(step) {
    const nextBtn = document.getElementById('tutorial-next-btn');
    const clickLayer = document.getElementById('tutorial-click-layer');
    const bubble = document.getElementById('tutorial-bubble');

    if (!nextBtn) return;

    // Hide next button for interactive steps where user must click highlighted element
    nextBtn.style.display = 'none';

    // Adjust padding for interactive steps to keep it balanced
    if (bubble) {
      bubble.classList.remove('pt-3', 'pt-4', 'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5', 'pb-8');
      bubble.classList.add('pt-3', 'pb-3');
    }

    // Special case: answer-buttons step waits for user to click any answer
    if (step.id === 'answer-buttons') {
      const answerHandler = (e) => {
        console.log('Tutorial: Click detected', e.target);
        // Check if an answer button was clicked
        const target = e.target;
        const isAnswerBtn = target.classList.contains('answer-btn') || target.closest('.answer-btn');
        console.log('Tutorial: Is answer button?', isAnswerBtn, target.className);

        if (isAnswerBtn) {
          console.log('Tutorial: Answer button clicked! Proceeding to next step');
          // User clicked an answer button - proceed to next step after a delay
          setTimeout(() => {
            // Dispatch the custom event
            if (step.waitFor) {
              window.dispatchEvent(new CustomEvent(step.waitFor));
            }
            nextStep();
            // Remove event listener
            document.removeEventListener('click', answerHandler, true);
          }, 500);
        }
      };

      // Add global click listener during this step (capture phase to catch it first)
      document.addEventListener('click', answerHandler, true);
      console.log('Tutorial: Answer handler installed');

      // Store handler so we can remove it if tutorial is skipped
      tutorialState.answerHandler = answerHandler;
      return;
    }

    // Get the highlighted element(s)
    if (!step.target) return;

    let elements = [];
    if (Array.isArray(step.target)) {
      elements = step.target.map(t => document.querySelector(t)).filter(el => el !== null);
    } else {
      const el = document.querySelector(step.target);
      if (el) elements = [el];
    }

    if (elements.length === 0) return;

    // Add click handler to the click layer that forwards clicks to the actual element
    if (clickLayer) {
      let isProcessing = false; // Prevent multiple rapid clicks

      const clickHandler = (e) => {
        // Prevent multiple clicks while processing
        if (isProcessing) {
          console.log('Tutorial: Click ignored - already processing');
          return;
        }

        console.log('Tutorial: Interactive element clicked');

        // If typing is in progress, first complete the text
        if (tutorialState.typingInProgress) {
          console.log('Tutorial: Completing typing animation first');

          // Stop typing animation and show full text
          if (tutorialState.currentTypingTimeout) {
            clearTimeout(tutorialState.currentTypingTimeout);
          }
          const currentStep = tutorialSteps[tutorialState.currentStep];
          const textElement = document.getElementById('tutorial-text');
          if (textElement && currentStep) {
            const lang = getTutorialLang();
            const texts = tutorialTexts[lang] || tutorialTexts.en;
            const text = texts[currentStep.textKey] || currentStep.textKey;
            textElement.innerHTML = text.replace(/\n/g, '<br>');
          }
          tutorialState.typingInProgress = false;

          // Don't proceed to next step yet - wait for second click
          return;
        }

        // Typing is complete, now we can proceed
        isProcessing = true;
        console.log('Tutorial: Proceeding to next step');

        // Get the actual element under the click layer
        const targetElement = elements[0];

        // Simulate a click on the actual element
        targetElement.click();

        // Dispatch the custom event if specified
        if (step.waitFor) {
          window.dispatchEvent(new CustomEvent(step.waitFor));
        }

        // Remove click handler immediately to prevent double-clicks
        clickLayer.removeEventListener('click', clickHandler);

        // Go to next step after a short delay
        setTimeout(() => {
          nextStep();
        }, 300);
      };

      clickLayer.addEventListener('click', clickHandler);
      clickLayer.style.cursor = 'pointer';
    }
  }

  // Next step
  function nextStep() {
    if (tutorialState.typingInProgress) {
      // Skip typing animation - complete the text immediately
      if (tutorialState.currentTypingTimeout) {
        clearTimeout(tutorialState.currentTypingTimeout);
      }
      const step = tutorialSteps[tutorialState.currentStep];
      const textElement = document.getElementById('tutorial-text');
      if (textElement && step) {
        const lang = getTutorialLang();
        const texts = tutorialTexts[lang] || tutorialTexts.en;
        const text = texts[step.textKey] || step.textKey;
        textElement.innerHTML = text.replace(/\n/g, '<br>');
      }
      tutorialState.typingInProgress = false;

      // Enable the next button so user can click again to actually advance
      const nextBtn = document.getElementById('tutorial-next-btn');
      if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
      }
      return;
    }

    // Clean up any interactive elements from previous step
    const langButtons = document.getElementById('tutorial-lang-container');
    if (langButtons) langButtons.remove();

    const themeButtons = document.querySelectorAll('.tutorial-theme-btn');
    if (themeButtons.length > 0) {
      themeButtons.forEach(btn => btn.parentElement?.remove());
    }

    // Clean up answer handler if it exists
    if (tutorialState.answerHandler) {
      document.removeEventListener('click', tutorialState.answerHandler, true);
      tutorialState.answerHandler = null;
    }

    // Reset bubble padding to default
    const bubble = document.getElementById('tutorial-bubble');
    const textElement = document.getElementById('tutorial-text');
    if (bubble) {
      bubble.classList.remove('pt-3', 'pt-4', 'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5', 'pb-6', 'pb-8');
      bubble.classList.add('pt-3', 'pb-3');
    }
    if (textElement) {
      textElement.classList.remove('mb-2', 'mb-4');
    }

    if (tutorialState.currentStep >= tutorialSteps.length - 1) {
      completeTutorial();
    } else {
      showStep(tutorialState.currentStep + 1);
    }
  }

  // Complete tutorial
  function completeTutorial() {
    tutorialState.isActive = false;
    tutorialState.isCompleted = true;

    localStorage.setItem('qb_tutorial_completed', 'true');

    // Remove scroll prevention handlers
    if (tutorialState.scrollPreventHandlers) {
      const { preventScroll } = tutorialState.scrollPreventHandlers;
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('keydown', preventScroll);
      tutorialState.scrollPreventHandlers = null;
    }

    // Remove answer handler if it exists
    if (tutorialState.answerHandler) {
      document.removeEventListener('click', tutorialState.answerHandler, true);
      tutorialState.answerHandler = null;
    }

    const overlay = document.getElementById('tutorial-overlay');
    if (overlay) {
      overlay.remove();
    }

    window.showScreen('home-screen');
  }

  // Initialize tutorial
  function initTutorial() {
    if (tutorialState.isActive) return;
    if (localStorage.getItem('qb_tutorial_completed') === 'true') return;

    tutorialState.isActive = true;
    tutorialState.currentStep = 0;

    createTutorialOverlay();

    // Block scrolling during tutorial
    const preventScroll = (e) => {
      // Allow scrolling only within the tutorial bubble
      const bubble = document.getElementById('tutorial-bubble-container');
      if (bubble && bubble.contains(e.target)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
    };

    // Prevent scroll with wheel, touch, and keys
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', (e) => {
      // Prevent arrow keys, page up/down, space, home, end
      if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
        e.preventDefault();
      }
    }, { passive: false });

    // Store handlers so we can remove them later
    tutorialState.scrollPreventHandlers = { preventScroll };

    // Add event listener for next button
    const nextBtn = document.getElementById('tutorial-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', nextStep);
    }

    // Add event listener for skip button
    const skipBtn = document.getElementById('tutorial-skip-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', completeTutorial);
    }

    // Show first step
    showStep(0);
  }

  // Reset tutorial
  function resetTutorial() {
    localStorage.removeItem('qb_tutorial_completed');
    tutorialState.isActive = false;
    tutorialState.isCompleted = false;
    tutorialState.currentStep = 0;

    const existingOverlay = document.getElementById('tutorial-overlay');
    if (existingOverlay) {
      existingOverlay.remove();
    }

    setTimeout(initTutorial, 100);
  }

  // Auto-start check
  function checkAutoStart() {
    const tutorialCompleted = localStorage.getItem('qb_tutorial_completed');

    if (!tutorialCompleted || tutorialCompleted !== 'true') {
      // Wait for loading screen to finish
      const loadingScreen = document.getElementById('loading-screen');

      // Check if loading screen is still visible or fading out
      const isLoadingScreenVisible = loadingScreen && (
        loadingScreen.style.display !== 'none' &&
        !loadingScreen.classList.contains('fade-out')
      );

      // Also check if LoadingScreen class reports it's still loading
      const isLoadingComplete = window.loadingScreen && window.loadingScreen.isComplete;

      if (isLoadingScreenVisible || !isLoadingComplete) {
        // Loading screen still visible or fading, wait for it to finish completely
        console.log('Tutorial: Waiting for loading screen to finish...', {
          visible: isLoadingScreenVisible,
          complete: isLoadingComplete
        });
        setTimeout(checkAutoStart, 500);
        return;
      }

      if (document.body) {
        console.log('Tutorial: Starting after loading screen finished');
        // Add extra delay to ensure fade-out animation is complete
        setTimeout(initTutorial, 200);
      } else {
        setTimeout(checkAutoStart, 100);
      }
    }
  }

  // Export to window
  window.Tutorial = {
    init: initTutorial,
    reset: resetTutorial,
    checkAutoStart: checkAutoStart,
    isActive: () => tutorialState.isActive,
    isCompleted: () => tutorialState.isCompleted
  };

  // Listen for loading screen completion
  window.addEventListener('load', () => {
    // Start tutorial immediately after loading screen
    checkAutoStart();
  });

  // Fallback if window.load already fired
  if (document.readyState === 'complete') {
    checkAutoStart();
  }

})();
