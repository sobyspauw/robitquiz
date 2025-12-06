// Interactive Tutorial System for RobitQuiz
// Features: Speech bubbles, typing effect, interactive steps
// Character: Robit the robot guides users through the game

(function() {
  'use strict';

  // Tutorial state management
  let tutorialState = {
    isActive: false,
    currentStep: 0,
    totalSteps: 23,
    isCompleted: false,
    typingInProgress: false,
    currentTypingTimeout: null,
    currentTarget: null, // Store current target for scroll updates
    currentInteractive: false,
    currentBlockClicks: false
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
      trueFalseMode: "True or False - simple but tricky! Answer as many True/False questions correctly in a row as you can!",
      trueFalseDetails: "Perfect for quick games! Each correct answer adds to your streak. One mistake and your streak resets. Can you beat your high score?",
      lightningRound: "Lightning Round - race against the clock! Answer as many questions as possible before time runs out!",
      lightningDetails: "Time pressure makes it exciting! Every correct answer gives you bonus time. How high can you score in 60 seconds?",
      survivorMode: "Survivor Mode - keep going as long as you can! One mistake means game over!",
      survivorDetails: "Test your knowledge limits! Questions get progressively harder. The further you get, the more rewards you earn!",
      extremeSurvivor: "Extreme Survivor - the ultimate challenge! Even harder questions and no room for error!",
      extremeSurvivorDetails: "Only for true quiz masters! Questions are significantly harder and time is shorter. Are you ready for the ultimate test?",
      shopButton: "Want more power-ups or extras? In the shop you can buy everything you need with stars and diamonds! And you can also claim free daily gems here!",
      settingsButton: "Here you can adjust all settings! Like the explanations, language, and theme!",
      complete: "Yes! You're all set to begin! Good luck and have fun quizzing!",
      nextButton: "Next",
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
      trueFalseMode: "Waar of Onwaar - simpel maar tricky! Beantwoord zoveel mogelijk Waar/Onwaar vragen achter elkaar goed!",
      trueFalseDetails: "Perfect voor een snel spelletje! Elk goed antwoord voegt toe aan je streak. Eén fout en je streak reset. Kun jij je highscore verslaan?",
      lightningRound: "Lightning Round - race tegen de klok! Beantwoord zoveel mogelijk vragen voordat de tijd op is!",
      lightningDetails: "Tijdsdruk maakt het spannend! Elk goed antwoord geeft je bonus tijd. Hoe hoog scoor jij in 60 seconden?",
      survivorMode: "Survivor Mode - blijf doorgaan zolang je kunt! Eén fout betekent game over!",
      survivorDetails: "Test je kennis grenzen! Vragen worden steeds moeilijker. Hoe verder je komt, hoe meer beloningen je verdient!",
      extremeSurvivor: "Extreme Survivor - de ultieme uitdaging! Nog moeilijkere vragen en geen ruimte voor fouten!",
      extremeSurvivorDetails: "Alleen voor échte quiz masters! Vragen zijn significant moeilijker en tijd is korter. Ben jij klaar voor de ultieme test?",
      shopButton: "Wil je meer power-ups of extra's? In de shop kun je alles kopen wat je nodig hebt met sterren en diamanten! En je kunt hier ook gratis dagelijkse gems claimen!",
      settingsButton: "Hier kun je alle instellingen aanpassen! Zoals de uitleg, taal en thema!",
      complete: "Yes! Je bent helemaal klaar om te beginnen! Veel succes en plezier met quizzen!",
      nextButton: "Volgende",
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
      trueFalseMode: "Wahr oder Falsch - einfach aber trickreich! Beantworte so viele Wahr/Falsch-Fragen hintereinander richtig wie möglich!",
      trueFalseDetails: "Perfekt für schnelle Spiele! Jede richtige Antwort erhöht deine Serie. Ein Fehler und deine Serie wird zurückgesetzt. Kannst du deinen Highscore schlagen?",
      lightningRound: "Lightning Round - Rennen gegen die Zeit! Beantworte so viele Fragen wie möglich, bevor die Zeit abläuft!",
      lightningDetails: "Zeitdruck macht es aufregend! Jede richtige Antwort gibt dir Bonuszeit. Wie hoch kannst du in 60 Sekunden punkten?",
      survivorMode: "Survivor-Modus - mach weiter, solange du kannst! Ein Fehler bedeutet Game Over!",
      survivorDetails: "Teste deine Wissensgrenzen! Fragen werden zunehmend schwieriger. Je weiter du kommst, desto mehr Belohnungen verdienst du!",
      extremeSurvivor: "Extreme Survivor - die ultimative Herausforderung! Noch schwierigere Fragen und kein Spielraum für Fehler!",
      extremeSurvivorDetails: "Nur für echte Quiz-Meister! Fragen sind deutlich schwieriger und die Zeit ist kürzer. Bist du bereit für den ultimativen Test?",
      shopButton: "Willst du mehr Power-ups oder Extras? Im Shop kannst du alles kaufen, was du brauchst!",
      shop: "Im Shop kaufst du Power-ups mit Sternen und Diamanten! Und du kannst hier auch kostenlose tägliche Edelsteine abholen!",
      settingsButton: "Hier kannst du alle Einstellungen anpassen! Wie die Erklärungen, Sprache und Thema!",
      complete: "Ja! Du bist bereit zum Loslegen! Viel Glück und viel Spaß beim Quizzen!",
      nextButton: "Weiter",
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
      trueFalseMode: "¡Verdadero o Falso - simple pero complicado! ¡Responde tantas preguntas de Verdadero/Falso seguidas correctamente como puedas!",
      trueFalseDetails: "¡Perfecto para juegos rápidos! Cada respuesta correcta añade a tu racha. Un error y tu racha se reinicia. ¿Puedes superar tu puntuación más alta?",
      lightningRound: "¡Lightning Round - carrera contra el reloj! ¡Responde tantas preguntas como sea posible antes de que se acabe el tiempo!",
      lightningDetails: "¡La presión del tiempo lo hace emocionante! Cada respuesta correcta te da tiempo extra. ¿Qué tan alto puedes puntuar en 60 segundos?",
      survivorMode: "¡Modo Survivor - sigue adelante mientras puedas! ¡Un error significa game over!",
      survivorDetails: "¡Prueba los límites de tu conocimiento! Las preguntas se vuelven progresivamente más difíciles. ¡Cuanto más lejos llegues, más recompensas ganas!",
      extremeSurvivor: "¡Extreme Survivor - el desafío definitivo! ¡Preguntas aún más difíciles y sin margen de error!",
      extremeSurvivorDetails: "¡Solo para verdaderos maestros del quiz! Las preguntas son significativamente más difíciles y el tiempo es más corto. ¿Estás listo para la prueba definitiva?",
      shopButton: "¿Quieres más power-ups o extras? ¡En la tienda puedes comprar todo lo que necesitas!",
      shop: "¡En la tienda compras power-ups con estrellas y diamantes! ¡Y también puedes reclamar gemas diarias gratis aquí!",
      settingsButton: "¡Aquí puedes ajustar toda la configuración! ¡Como las explicaciones, idioma y tema!",
      complete: "¡Sí! ¡Estás listo para comenzar! ¡Buena suerte y diviértete haciendo quizzes!",
      nextButton: "Siguiente",
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
    { id: 'power-ups', textKey: 'powerUps', screen: 'quiz-screen', target: ['#fifty-fifty-btn', '#skip-btn', '#time-bonus-btn'], pauseTimer: true, bubblePosition: 'middle', blockClicks: true },
    { id: 'free-power-ups', textKey: 'freePowerUps', screen: 'quiz-screen', target: ['#fifty-fifty-btn', '#skip-btn', '#time-bonus-btn'], pauseTimer: true, bubblePosition: 'middle', blockClicks: true },
    { id: 'answer-buttons', textKey: 'answerButtons', screen: 'quiz-screen', target: ['#question', '#answers'], pauseTimer: true, interactiveStep: true, waitFor: 'answer-given' },
    { id: 'answer-explanation', textKey: 'answerExplanation', screen: 'quiz-screen', target: '#explanation-container', pauseTimer: true, bubblePosition: 'middle', blockClicks: true },

    // Sterren & Diamanten (after earning some from quiz)
    { id: 'stars-diamonds', textKey: 'starsDiamonds', screen: 'quiz-screen', target: ['#star-display', '#diamond-display'], pauseTimer: true, blockClicks: true },

    // Terug naar Home → GAME MODES Flow
    { id: 'game-modes-button', textKey: 'gameModesButton', screen: 'home-screen', target: '#challenge-modes-btn', interactiveStep: true, waitFor: 'game-modes-clicked', bubblePosition: 'center' },
    { id: 'true-false-mode', textKey: 'trueFalseMode', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(1)', scrollToTarget: true, blockClicks: true },
    { id: 'true-false-details', textKey: 'trueFalseDetails', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(1)', scrollToTarget: true, blockClicks: true },
    { id: 'lightning-round', textKey: 'lightningRound', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(2)', scrollToTarget: true, blockClicks: true },
    { id: 'lightning-details', textKey: 'lightningDetails', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(2)', scrollToTarget: true, blockClicks: true },
    { id: 'survivor-mode', textKey: 'survivorMode', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(3)', scrollToTarget: true, blockClicks: true },
    { id: 'survivor-details', textKey: 'survivorDetails', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(3)', scrollToTarget: true, blockClicks: true },
    { id: 'extreme-survivor', textKey: 'extremeSurvivor', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(4)', scrollToTarget: true, blockClicks: true, bubblePosition: 'middle' },
    { id: 'extreme-survivor-details', textKey: 'extremeSurvivorDetails', screen: 'challenge-modes-screen', target: '.challenge-mode-card:nth-child(4)', scrollToTarget: true, blockClicks: true, bubblePosition: 'middle' },

    // Terug naar Home → DAILY CHALLENGE
    { id: 'daily-challenge-button', textKey: 'dailyChallengeButton', screen: 'home-screen', target: '#daily-challenge-btn', bubblePosition: 'middle', blockClicks: true },

    // Terug naar Home → SHOP
    { id: 'shop-button', textKey: 'shopButton', screen: 'home-screen', target: '#shop-btn', bubblePosition: 'middle', blockClicks: true },

    // Terug naar Home → SETTINGS
    { id: 'settings-button', textKey: 'settingsButton', screen: 'home-screen', target: '#settings-btn', bubblePosition: 'middle', blockClicks: true },

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

      <!-- Click blockers for interactive steps (4 rectangles around the cutout) -->
      <div id="tutorial-blocker-top" class="fixed bg-transparent pointer-events-auto" style="display: none; z-index: 10001;"></div>
      <div id="tutorial-blocker-bottom" class="fixed bg-transparent pointer-events-auto" style="display: none; z-index: 10001;"></div>
      <div id="tutorial-blocker-left" class="fixed bg-transparent pointer-events-auto" style="display: none; z-index: 10001;"></div>
      <div id="tutorial-blocker-right" class="fixed bg-transparent pointer-events-auto" style="display: none; z-index: 10001;"></div>

      <!-- Speech bubble container -->
      <div id="tutorial-bubble-container" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-auto z-[10000]" style="width: 90%; max-width: 500px;">
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
  function highlightElement(target, makeInteractive = false, blockClicks = false) {
    const highlight = document.getElementById('tutorial-highlight');
    const backdrop = document.getElementById('tutorial-backdrop');
    const clickLayer = document.getElementById('tutorial-click-layer');

    // Store current target for scroll updates
    tutorialState.currentTarget = target;
    tutorialState.currentInteractive = makeInteractive;
    tutorialState.currentBlockClicks = blockClicks;

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
      tutorialState.currentTarget = null;
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

    // Check if target is inside top bar
    const topBar = document.getElementById('top-bar');
    const isInTopBar = topBar && elements.some(el => topBar.contains(el));

    // Show and position highlight border
    highlight.style.display = 'block';
    highlight.style.left = x + 'px';
    highlight.style.top = y + 'px';
    highlight.style.width = width + 'px';
    highlight.style.height = height + 'px';
    highlight.style.zIndex = '10002';

    // If not in top bar, clip the highlight so it doesn't go over the top bar
    if (!isInTopBar && topBar) {
      const topBarRect = topBar.getBoundingClientRect();
      const topBarBottom = topBarRect.bottom;

      // Use clip-path to cut off the top part if it goes over top bar
      if (y < topBarBottom) {
        const clipTop = Math.max(0, topBarBottom - y);
        highlight.style.clipPath = `inset(${clipTop}px 0px 0px 0px)`;
      } else {
        highlight.style.clipPath = 'none';
      }
    } else {
      highlight.style.clipPath = 'none';
    }

    // Create a cutout in the backdrop using CSS polygon clip-path
    // This makes the highlighted area fully visible with normal colors
    if (backdrop) {
      // Adjust cutout to not go above top bar
      let cutoutY = y;
      let cutoutHeight = height;

      if (!isInTopBar && topBar) {
        const topBarRect = topBar.getBoundingClientRect();
        const topBarBottom = topBarRect.bottom;

        if (y < topBarBottom) {
          // Adjust cutout to start at top bar bottom
          const clipAmount = topBarBottom - y;
          cutoutY = topBarBottom;
          cutoutHeight = Math.max(0, height - clipAmount);
        }
      }

      const cutoutPath = `polygon(
        0% 0%,
        0% 100%,
        ${x}px 100%,
        ${x}px ${cutoutY}px,
        ${x + width}px ${cutoutY}px,
        ${x + width}px ${cutoutY + cutoutHeight}px,
        ${x}px ${cutoutY + cutoutHeight}px,
        ${x}px 100%,
        100% 100%,
        100% 0%
      )`;
      backdrop.style.clipPath = cutoutPath;

      // For interactive steps, we keep backdrop visible but ensure elements are clickable
      if (makeInteractive && !blockClicks) {
        backdrop.style.zIndex = '9999'; // Below highlighted elements
        backdrop.style.pointerEvents = 'none'; // Don't block any clicks

        // Position invisible click blockers around the cutout to block clicks outside highlighted area
        const blockerTop = document.getElementById('tutorial-blocker-top');
        const blockerBottom = document.getElementById('tutorial-blocker-bottom');
        const blockerLeft = document.getElementById('tutorial-blocker-left');
        const blockerRight = document.getElementById('tutorial-blocker-right');

        if (blockerTop && blockerBottom && blockerLeft && blockerRight) {
          // Top blocker: from screen top to cutout top
          blockerTop.style.display = 'block';
          blockerTop.style.left = '0';
          blockerTop.style.top = '0';
          blockerTop.style.width = '100%';
          blockerTop.style.height = y + 'px';

          // Bottom blocker: from cutout bottom to screen bottom
          blockerBottom.style.display = 'block';
          blockerBottom.style.left = '0';
          blockerBottom.style.top = (y + height) + 'px';
          blockerBottom.style.width = '100%';
          blockerBottom.style.height = `calc(100% - ${y + height}px)`;

          // Left blocker: from cutout top to cutout bottom, screen left to cutout left
          blockerLeft.style.display = 'block';
          blockerLeft.style.left = '0';
          blockerLeft.style.top = y + 'px';
          blockerLeft.style.width = x + 'px';
          blockerLeft.style.height = height + 'px';

          // Right blocker: from cutout top to cutout bottom, cutout right to screen right
          blockerRight.style.display = 'block';
          blockerRight.style.left = (x + width) + 'px';
          blockerRight.style.top = y + 'px';
          blockerRight.style.width = `calc(100% - ${x + width}px)`;
          blockerRight.style.height = height + 'px';
        }
      } else {
        backdrop.style.zIndex = '10000'; // Normal z-index
        backdrop.style.pointerEvents = 'auto'; // Block clicks normally

        // Hide blockers for non-interactive steps
        const blockerTop = document.getElementById('tutorial-blocker-top');
        const blockerBottom = document.getElementById('tutorial-blocker-bottom');
        const blockerLeft = document.getElementById('tutorial-blocker-left');
        const blockerRight = document.getElementById('tutorial-blocker-right');

        if (blockerTop) blockerTop.style.display = 'none';
        if (blockerBottom) blockerBottom.style.display = 'none';
        if (blockerLeft) blockerLeft.style.display = 'none';
        if (blockerRight) blockerRight.style.display = 'none';
      }
    }

    // Position click layer over highlighted area to allow clicks
    // If blockClicks is true, keep the click layer hidden to prevent interaction
    // For interactive steps, we DON'T want the click layer - it blocks the actual elements
    if (clickLayer) {
      if (makeInteractive && !blockClicks) {
        // For interactive steps, hide click layer so elements underneath can be clicked
        clickLayer.style.display = 'none';
        clickLayer.style.pointerEvents = 'none';
      } else {
        // For non-interactive steps, click layer can be shown if needed
        clickLayer.style.display = 'none';
      }
    }

    // Make highlighted elements clickable by ensuring they're above the backdrop
    // Unless blockClicks is true, in which case we want them highlighted but not clickable
    if (makeInteractive && !blockClicks) {
      elements.forEach(el => {
        el.style.position = 'relative';
        el.style.zIndex = '10005'; // Above everything else

        // Also ensure all child buttons are clickable and have pointer-events enabled
        const buttons = el.querySelectorAll('button');
        buttons.forEach(btn => {
          btn.style.position = 'relative';
          btn.style.zIndex = '10005';
          btn.style.pointerEvents = 'auto';
        });
      });
    }
  }

  // Update highlight position on scroll
  function updateHighlightPosition() {
    if (!tutorialState.currentTarget) return;

    // Re-run highlightElement with current target
    highlightElement(
      tutorialState.currentTarget,
      tutorialState.currentInteractive,
      tutorialState.currentBlockClicks
    );
  }

  // Add scroll listener for tutorial
  let scrollUpdateTimeout;
  function onTutorialScroll() {
    // Use requestAnimationFrame for smooth updates
    if (scrollUpdateTimeout) {
      cancelAnimationFrame(scrollUpdateTimeout);
    }
    scrollUpdateTimeout = requestAnimationFrame(updateHighlightPosition);
  }

  // Show tutorial step
  function showStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= tutorialSteps.length) return;

    const step = tutorialSteps[stepIndex];
    tutorialState.currentStep = stepIndex;

    // Switch to correct screen
    if (step.screen && window.showScreen) {
      // If this step will scroll to a target, temporarily disable scroll-to-top
      if (step.scrollToTarget) {
        // Temporarily store the scroll position or disable the auto-scroll
        const currentScrollY = window.scrollY;
        window.showScreen(step.screen);
        // Restore scroll position immediately if screen didn't change
        if (window.currentScreen === step.screen) {
          window.scrollTo(0, currentScrollY);
        }
      } else {
        window.showScreen(step.screen);
      }
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
        backdrop.style.clipPath = 'none';
      } else {
        backdrop.style.display = 'block';
        // Reset clip-path to ensure full backdrop coverage
        if (!step.target) {
          backdrop.style.clipPath = 'none';
        }
        // For interactive steps with targets, keep backdrop visible to block other elements
        // The backdrop will have a cutout made by highlightElement() for the target
        // For interactive steps without targets:
        // - Language/theme buttons are IN the bubble, so keep backdrop to block background
        // - Answer buttons need no backdrop (hideBackdrop: true handles this)
        if (step.interactiveStep && !step.blockClicks && !step.target && !step.showLanguageButtons && !step.showThemeButtons) {
          backdrop.style.display = 'none';
        }

        // Ensure backdrop blocks clicks when visible
        if (backdrop.style.display !== 'none') {
          backdrop.style.pointerEvents = 'auto';
        }
      }
    }

    // Block clicks on highlighted elements if blockClicks is true
    if (step.blockClicks) {
      // Wait a bit for elements to be created, then block them
      setTimeout(() => {
        // Block continue button
        const continueBtn = document.getElementById('continue-question-btn');
        if (continueBtn) {
          continueBtn.style.pointerEvents = 'none';
          continueBtn.style.opacity = '0.5';
        }

        // Block power-up buttons
        const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
        const skipBtn = document.getElementById('skip-btn');
        const timeBonusBtn = document.getElementById('time-bonus-btn');

        [fiftyFiftyBtn, skipBtn, timeBonusBtn].forEach(btn => {
          if (btn) {
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.5';
          }
        });

        // Block star and diamond displays
        const starDisplay = document.getElementById('star-display');
        const diamondDisplay = document.getElementById('diamond-display');

        [starDisplay, diamondDisplay].forEach(display => {
          if (display) {
            display.style.pointerEvents = 'none';
            display.style.opacity = '0.7';
          }
        });

        // Block all buttons in game mode cards (Play Now and info buttons)
        document.querySelectorAll('.challenge-mode-card button').forEach(btn => {
          btn.style.pointerEvents = 'none';
          btn.style.opacity = '0.5';
        });

        // Block all buttons in shop screen
        document.querySelectorAll('#shop-screen button').forEach(btn => {
          // Don't block the back button
          if (btn.id !== 'back-btn') {
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.5';
          }
        });

        // Block daily challenge button
        const dailyChallengeBtn = document.getElementById('daily-challenge-btn');
        if (dailyChallengeBtn) {
          dailyChallengeBtn.style.pointerEvents = 'none';
          dailyChallengeBtn.style.opacity = '0.7';
        }

        // Block shop button
        const shopBtn = document.getElementById('shop-btn');
        if (shopBtn) {
          shopBtn.style.pointerEvents = 'none';
          shopBtn.style.opacity = '0.7';
        }

        // Block settings button
        const settingsBtn = document.getElementById('settings-btn');
        if (settingsBtn) {
          settingsBtn.style.pointerEvents = 'none';
          settingsBtn.style.opacity = '0.7';
        }
      }, 100);
    } else {
      // Re-enable buttons when leaving blockClicks step
      const continueBtn = document.getElementById('continue-question-btn');
      if (continueBtn) {
        continueBtn.style.pointerEvents = 'auto';
        continueBtn.style.opacity = '1';
      }

      // Re-enable power-up buttons
      const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
      const skipBtn = document.getElementById('skip-btn');
      const timeBonusBtn = document.getElementById('time-bonus-btn');

      [fiftyFiftyBtn, skipBtn, timeBonusBtn].forEach(btn => {
        if (btn) {
          btn.style.pointerEvents = 'auto';
          btn.style.opacity = '1';
        }
      });

      // Re-enable star and diamond displays
      const starDisplay = document.getElementById('star-display');
      const diamondDisplay = document.getElementById('diamond-display');

      [starDisplay, diamondDisplay].forEach(display => {
        if (display) {
          display.style.pointerEvents = 'auto';
          display.style.opacity = '1';
        }
      });

      // Re-enable all buttons in game mode cards
      document.querySelectorAll('.challenge-mode-card button').forEach(btn => {
        btn.style.pointerEvents = 'auto';
        btn.style.opacity = '1';
      });

      // Re-enable all buttons in shop screen
      document.querySelectorAll('#shop-screen button').forEach(btn => {
        btn.style.pointerEvents = 'auto';
        btn.style.opacity = '1';
      });

      // Re-enable daily challenge button
      const dailyChallengeBtn = document.getElementById('daily-challenge-btn');
      if (dailyChallengeBtn) {
        dailyChallengeBtn.style.pointerEvents = 'auto';
        dailyChallengeBtn.style.opacity = '1';
      }

      // Re-enable shop button
      const shopBtn = document.getElementById('shop-btn');
      if (shopBtn) {
        shopBtn.style.pointerEvents = 'auto';
        shopBtn.style.opacity = '1';
      }

      // Re-enable settings button
      const settingsBtn = document.getElementById('settings-btn');
      if (settingsBtn) {
        settingsBtn.style.pointerEvents = 'auto';
        settingsBtn.style.opacity = '1';
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
      // Scroll to target FIRST if specified, then highlight
      if (step.scrollToTarget && step.target) {
        const targetElement = Array.isArray(step.target)
          ? document.querySelector(step.target[0])
          : document.querySelector(step.target);

        if (targetElement) {
          console.log('Tutorial: Scrolling to target', step.id);

          // Get the target element's position on the page
          const targetRect = targetElement.getBoundingClientRect();

          // Calculate scroll position to put target near top of viewport
          // Account for current scroll position and desired offset from top
          const desiredOffset = 150; // Leave space for header and "Game Modes" title
          const currentScrollY = window.scrollY || window.pageYOffset;
          const scrollTo = currentScrollY + targetRect.top - desiredOffset;

          console.log('Tutorial: Scroll calculation', {
            currentScrollY,
            targetTop: targetRect.top,
            desiredOffset,
            scrollTo: Math.max(0, scrollTo)
          });

          // Scroll the window
          window.scrollTo({
            top: Math.max(0, scrollTo),
            behavior: 'smooth'
          });

          // Wait for scroll to complete, then highlight
          setTimeout(() => {
            highlightElement(step.target, step.interactiveStep, step.blockClicks);
          }, 400); // Wait for smooth scroll to finish
        } else {
          console.log('Tutorial: Target element not found');
          highlightElement(step.target, step.interactiveStep, step.blockClicks);
        }
      } else {
        // No scrolling needed, just highlight immediately
        highlightElement(step.target, step.interactiveStep, step.blockClicks);
      }

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
        nextBtn.style.pointerEvents = 'auto'; // Ensure button is clickable

        if (stepIndex === tutorialSteps.length - 1) {
          nextBtn.textContent = texts.doneButton || 'Done!';
          nextBtn.className = 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-lg';
          console.log('Tutorial: Done button configured', { text: nextBtn.textContent, visible: nextBtn.style.display });
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

    // Add click handler to the actual elements (not the click layer since we hide it for interactive steps)
    // We'll listen to clicks on the actual highlighted elements
    let isProcessing = false; // Prevent multiple rapid clicks

    const clickHandler = (e) => {
        // Prevent multiple clicks while processing
        if (isProcessing) {
          console.log('Tutorial: Click ignored - already processing');
          return;
        }

        console.log('Tutorial: Interactive element clicked');

        // Complete typing animation if in progress
        if (tutorialState.typingInProgress) {
          console.log('Tutorial: Completing typing animation');
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
        }

        // Now proceed with the tutorial (let the click happen naturally)
        isProcessing = true;
        console.log('Tutorial: Proceeding to next step');

        // Dispatch the custom event if specified
        if (step.waitFor) {
          window.dispatchEvent(new CustomEvent(step.waitFor));
        }

        // Remove click handlers from all elements
        elements.forEach(el => {
          el.removeEventListener('click', clickHandler, true);
        });

        // Go to next step after a short delay (allow the natural click to process first)
        setTimeout(() => {
          nextStep();
        }, 300);
      };

    // Add click handler to each highlighted element
    elements.forEach(element => {
      element.addEventListener('click', clickHandler, true);
      element.style.cursor = 'pointer';
    });
  }

  // Next step
  function nextStep() {
    console.log('Tutorial: nextStep called', {
      currentStep: tutorialState.currentStep,
      totalSteps: tutorialSteps.length,
      isLastStep: tutorialState.currentStep >= tutorialSteps.length - 1
    });

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
      console.log('Tutorial: Completing tutorial');
      completeTutorial();
    } else {
      console.log('Tutorial: Going to next step');
      showStep(tutorialState.currentStep + 1);
    }
  }

  // Complete tutorial
  function completeTutorial() {
    console.log('Tutorial: completeTutorial called');
    tutorialState.isActive = false;
    tutorialState.isCompleted = true;

    localStorage.setItem('qb_tutorial_completed', 'true');
    console.log('Tutorial: Saved completion to localStorage');

    // Update achievement stats for tutorial completion
    if (typeof window.updateAchievementStats === 'function') {
      window.updateAchievementStats({
        tutorialCompleted: true
      });
    }

    // Remove scroll listener
    window.removeEventListener('scroll', onTutorialScroll);

    // Remove scroll prevention handlers
    if (tutorialState.scrollPreventHandlers) {
      const { preventScroll, preventKeyScroll } = tutorialState.scrollPreventHandlers;
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
      if (preventKeyScroll) {
        document.removeEventListener('keydown', preventKeyScroll);
      }
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

    // Enable scroll listener to update highlights
    window.addEventListener('scroll', onTutorialScroll, { passive: true });

    // Block scrolling during tutorial EXCEPT when allowed
    const preventScroll = (e) => {
      // Allow scrolling only within the tutorial bubble
      const bubble = document.getElementById('tutorial-bubble-container');
      if (bubble && bubble.contains(e.target)) {
        return;
      }

      // Allow scrolling in shop screen during shop step
      const currentStep = tutorialSteps[tutorialState.currentStep];
      if (currentStep && currentStep.id === 'shop') {
        const shopScreen = document.getElementById('shop-screen');
        // Check if target is shop screen itself OR is inside shop screen
        if (shopScreen && (e.target === shopScreen || shopScreen.contains(e.target) || e.target.closest('#shop-screen'))) {
          return; // Allow scrolling in shop
        }
      }

      // Allow scrolling in challenge modes screen during game mode steps
      if (currentStep && currentStep.screen === 'challenge-modes-screen' && currentStep.scrollToTarget) {
        const challengeModesScreen = document.getElementById('challenge-modes-screen');
        if (challengeModesScreen && challengeModesScreen.contains(e.target)) {
          return; // Allow scrolling in game modes screen
        }
      }

      // ALWAYS allow scrolling - just update highlights
      return;

      // e.preventDefault();  // DISABLED - allow scrolling
      // e.stopPropagation(); // DISABLED - allow scrolling
    };

    // Prevent scroll with wheel, touch, and keys - BUT ALLOWING IT NOW
    // document.addEventListener('wheel', preventScroll, { passive: false }); // DISABLED
    // document.addEventListener('touchmove', preventScroll, { passive: false }); // DISABLED

    const preventKeyScroll = (e) => {
      // Allow keyboard scrolling in shop screen during shop step
      const currentStep = tutorialSteps[tutorialState.currentStep];
      if (currentStep && currentStep.id === 'shop') {
        return; // Allow keyboard scrolling in shop
      }

      // Allow keyboard scrolling in challenge modes screen during game mode steps
      if (currentStep && currentStep.screen === 'challenge-modes-screen' && currentStep.scrollToTarget) {
        return; // Allow keyboard scrolling in game modes screen
      }

      // Prevent arrow keys, page up/down, space, home, end
      if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', preventKeyScroll, { passive: false });

    // Store handlers so we can remove them later
    tutorialState.scrollPreventHandlers = { preventScroll, preventKeyScroll };

    // Add event listener for next button
    const nextBtn = document.getElementById('tutorial-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        console.log('Tutorial: Next/Done button clicked');
        nextStep();
      });
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
