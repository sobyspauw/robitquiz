// Loading Screen Manager
class LoadingScreen {
  constructor() {
    this.loadingScreen = document.getElementById('loading-screen');
    this.progressBar = document.getElementById('loading-progress');
    this.loadingText = document.getElementById('loading-text');
    this.progress = 0;
    this.isComplete = false;
  }

  // Update progress (0-100)
  setProgress(percent, message = '') {
    this.progress = Math.min(100, Math.max(0, percent));
    this.progressBar.style.width = `${this.progress}%`;

    if (message) {
      this.loadingText.textContent = message;
    }
  }

  // Real loading process that waits for actual resources
  async simulateLoading() {
    // Step 1: Initial setup
    this.setProgress(10, 'Loading assets...');
    await new Promise(resolve => setTimeout(resolve, 200));

    // Step 2: Wait for DOM to be ready
    this.setProgress(20, 'Loading scripts...');
    await new Promise(resolve => setTimeout(resolve, 300));

    // Step 3: Wait for all resources (images, sounds, scripts)
    this.setProgress(40, 'Loading resources...');
    await this.waitForWindowLoad();

    // Step 4: Wait a bit more for question categories to load
    this.setProgress(60, 'Loading questions...');
    await new Promise(resolve => setTimeout(resolve, 800));

    // Step 5: Wait for true-false questions to finish loading
    this.setProgress(80, 'Loading game modes...');
    await this.waitForTrueFalseQuestions();

    // Step 6: Final check
    this.setProgress(95, 'Finalizing...');
    await new Promise(resolve => setTimeout(resolve, 300));

    // Step 7: Ready!
    this.setProgress(100, 'Ready!');
    await new Promise(resolve => setTimeout(resolve, 400));

    this.hide();
  }

  // Wait for window load event
  async waitForWindowLoad() {
    if (document.readyState === 'complete') {
      return; // Already loaded
    }
    return new Promise(resolve => {
      window.addEventListener('load', resolve, { once: true });
    });
  }

  // Wait for true/false questions to be loaded
  async waitForTrueFalseQuestions() {
    const maxWait = 3000; // Maximum 3 seconds
    const checkInterval = 100;
    let waited = 0;

    while (waited < maxWait) {
      // Check if questions are loaded (more than just empty array)
      if (window.trueFalseQuestions && window.trueFalseQuestions.length > 100) {
        console.log('Loading Screen: True/False questions loaded!');
        return;
      }
      await new Promise(resolve => setTimeout(resolve, checkInterval));
      waited += checkInterval;
    }

    console.log('Loading Screen: Timeout waiting for questions, proceeding anyway');
  }

  // Hide loading screen with fade out
  hide() {
    if (this.isComplete) return;

    this.isComplete = true;
    this.loadingScreen.classList.add('fade-out');

    // Remove from DOM after fade completes (1500ms to match CSS transition)
    setTimeout(() => {
      this.loadingScreen.style.display = 'none';
    }, 1500);
  }

  // Show loading screen (for re-showing if needed)
  show() {
    this.isComplete = false;
    this.progress = 0;
    this.loadingScreen.style.display = 'flex';
    this.loadingScreen.classList.remove('fade-out');
    this.setProgress(0, 'Initializing...');
  }
}

// Initialize and start loading when DOM is ready
const loadingScreen = new LoadingScreen();

// Start loading process when page loads
window.addEventListener('DOMContentLoaded', () => {
  loadingScreen.simulateLoading();
});

// Export for use in other modules if needed
window.LoadingScreen = LoadingScreen;
window.loadingScreen = loadingScreen;
