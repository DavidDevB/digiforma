const CHOICES = ["pierre", "feuille", "ciseaux"];
const WIN_TARGET = 3;        // Best-of-5 => premier à 3
const MAX_DECISIVE_ROUNDS = 5; // max de manches "décisives" (hors égalités)

const btns = document.querySelectorAll(".pfc-btn");
const resetBtn = document.getElementById("resetBtn");

const elScorePlayer = document.getElementById("scorePlayer");
const elScoreBot = document.getElementById("scoreBot");
const elScoreDraw = document.getElementById("scoreDraw");

const elPlayerPick = document.getElementById("playerPick");
const elBotPick = document.getElementById("botPick");
const elRoundResult = document.getElementById("roundResult");
const elMatchInfo = document.getElementById("matchInfo");

let scorePlayer = 0;
let scoreBot = 0;
let scoreDraw = 0;

// Nombre de manches "décisives" (donc hors égalités)
let decisiveRounds = 0;
let matchOver = false;

function randomChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function compare(player, bot) {
  if (player === bot) return "draw";

  const win =
    (player === "pierre" && bot === "ciseaux") ||
    (player === "ciseaux" && bot === "feuille") ||
    (player === "feuille" && bot === "pierre");

  return win ? "win" : "lose";
}

function label(choice) {
  if (choice === "pierre") return "✊🏻​";
  if (choice === "feuille") return "​​🖐️​​";
  if (choice === "ciseaux") return "​✌🏼​";
  return "—";
}

function setButtonsDisabled(disabled) {
  btns.forEach(b => (b.disabled = disabled));
}

function render() {
  elScorePlayer.textContent = String(scorePlayer);
  elScoreBot.textContent = String(scoreBot);
  elScoreDraw.textContent = String(scoreDraw);

  const info =
    `Best-of-5 : premier à ${WIN_TARGET} victoires. ` +
    `Manches décisives : ${decisiveRounds}/${MAX_DECISIVE_ROUNDS}.`;
  elMatchInfo.textContent = info;
}

function endMatch(message) {
  matchOver = true;
  elRoundResult.textContent = message;
  setButtonsDisabled(true);
  resetBtn.textContent = "Rejouer la partie";
}

function playRound(playerChoice) {
  if (matchOver) return;

  const botChoice = randomChoice();
  const outcome = compare(playerChoice, botChoice);

  elPlayerPick.textContent = label(playerChoice);
  elBotPick.textContent = label(botChoice);

  if (outcome === "win") {
    scorePlayer++;
    decisiveRounds++;
    elRoundResult.textContent = "Tu gagnes ce round.";
  } else if (outcome === "lose") {
    scoreBot++;
    decisiveRounds++;
    elRoundResult.textContent = "Le bot gagne ce round.";
  } else {
    scoreDraw++;
    elRoundResult.textContent = "Égalité (on rejoue cette manche).";
  }

  // Fin de partie si quelqu’un atteint 3 victoires
  if (scorePlayer >= WIN_TARGET) {
    render();
    endMatch("Partie terminée : tu gagnes (Best-of-5).");
    return;
  }
  if (scoreBot >= WIN_TARGET) {
    render();
    endMatch("Partie terminée : le bot gagne (Best-of-5).");
    return;
  }

  // Sécurité : si 5 manches décisives ont été jouées, on termine
  if (decisiveRounds >= MAX_DECISIVE_ROUNDS) {
    render();
    if (scorePlayer > scoreBot) endMatch("Partie terminée : tu gagnes (Best-of-5).");
    else if (scoreBot > scorePlayer) endMatch("Partie terminée : le bot gagne (Best-of-5).");
    else endMatch("Partie terminée : égalité globale.");
    return;
  }

  render();
}

function resetGame() {
  scorePlayer = 0;
  scoreBot = 0;
  scoreDraw = 0;
  decisiveRounds = 0;
  matchOver = false;

  elPlayerPick.textContent = "—";
  elBotPick.textContent = "—";
  elRoundResult.textContent = "Fais ton choix pour commencer.";

  setButtonsDisabled(false);
  resetBtn.textContent = "Réinitialiser";

  render();
}

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    playRound(btn.dataset.choice);
  });
});

resetBtn.addEventListener("click", resetGame);

render();
