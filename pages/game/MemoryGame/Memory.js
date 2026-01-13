const startBtn = document.getElementById("startBtn");

let gameStarted = false;

const game = {
  score: 0,
  sequence: [],
  userInput: [],
  level: 1,
  maxLevel: 5,
  canPlay: false,

  keys: ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],

  generateKey() {
    return this.keys[Math.floor(Math.random() * this.keys.length)];
  },

  initGame() {
    if (gameStarted) return;

    gameStarted = true;
    startBtn.disabled = true;
    startBtn.textContent = "Game in progress...";
    this.start();
  },

  start() {
    this.score = 0;
    this.level = 1;
    this.sequence = [];
    this.userInput = [];
    this.canPlay = false;

    this.updateUI();
    this.playRound();
  },

  playRound() {
    this.sequence = Array.from({ length: this.level }, () => this.generateKey());
    this.userInput = [];
    this.canPlay = false;
    this.showSequence();
  },

  showSequence() {
    const display = document.getElementById("sequenceDisplay");
    let index = 0;

    display.textContent = "Watch the sequence...";

    const interval = setInterval(() => {
      const currentKey = this.sequence[index];

      display.textContent = `Sequence: ${currentKey.replace("Arrow", "")}`;
      this.flashButton(currentKey);

      index++;

      if (index >= this.sequence.length) {
        clearInterval(interval);
        display.textContent = "À toi de jouer 👇";
        this.canPlay = true;
      }
    }, 800);
  },

  handleKeyPress(key) {
    // Ignore si pas démarré / pas ton tour / touche pas valable
    if (!gameStarted || !this.canPlay || !this.keys.includes(key)) return;

    this.flashButton(key);

    // Vérif de la touche attendue
    if (key === this.sequence[this.userInput.length]) {
      this.userInput.push(key);

      // Tour terminé
      if (this.userInput.length === this.sequence.length) {
        this.score += this.level * 10;

        // Next level (boucle si max atteint)
        this.level = this.level < this.maxLevel ? this.level + 1 : 1;

        this.updateUI();

        setTimeout(() => this.playRound(), 800);
      }
    } else {
      this.lose();
    }
  },

  lose() {
    alert(`❌ Perdu ! Score final : ${this.score}`);

    // Reset état
    gameStarted = false;
    this.canPlay = false;
    this.sequence = [];
    this.userInput = [];
    this.level = 1;
    this.score = 0;

    // UI reset
    this.updateUI();
    document.getElementById("sequenceDisplay").textContent = "Sequence: -";

    // Réactive bouton
    startBtn.disabled = false;
    startBtn.textContent = "Restart Game";
  },

  flashButton(key) {
    const id = key.replace("Arrow", "").toLowerCase();
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.classList.add("active");
    setTimeout(() => btn.classList.remove("active"), 250);
  },

  updateUI() {
    document.getElementById("score").textContent = this.score;
    document.getElementById("level").textContent = this.level;
  },
};

// Démarrage par bouton
startBtn.addEventListener("click", () => {
  game.initGame();
});

// Démarrage par première touche + gameplay ensuite
document.addEventListener("keydown", (e) => {
  if (!gameStarted) {
    game.initGame();
    return;
  }
  game.handleKeyPress(e.key);
});
