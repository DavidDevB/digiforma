// Vérifie si la partie est terminée
export function isGameOver(row) {
    const totalSticks = row.reduce((a, b) => a + b, 0);
    return totalSticks === 1;
}

// Désactive les inputs et le bouton quand la partie est finie
export function disableInputs() {
    document.querySelector('input[name="stickQuantity"]').disabled = true;
    document.querySelectorAll('input[name="rowIndex"]').forEach(input => input.disabled = true);
    const validateBtn = document.getElementById('validate');
    if (validateBtn) validateBtn.disabled = true;
}

// Change le joueur actuel
export function switchPlayer(currentPlayer) {
    return currentPlayer === "Joueur 1" ? "Joueur 2" : "Joueur 1";
}

// Enregistre les événements : bouton valider et choix du mode
export function registerEvents(handleClick, setPlayersMode) {
    const validateBtn = document.getElementById("validate");
    if (validateBtn) validateBtn.addEventListener("click", handleClick);

    document.querySelectorAll(".player-number").forEach(btn => {
        btn.addEventListener("click", () => {
            const mode = parseInt(btn.dataset.players);
            setPlayersMode(mode);
            alert(mode === 1 ? "Mode 1 joueur (vs ordinateur)" : "Mode 2 joueurs");
        });
    });
}

/**
 * Gère le tour de l'ordinateur dans le jeu de Nim
 * 
 * @param {number[]} row - Tableau représentant les lignes d'allumettes
 * @param {function(string): void} setCurrentPlayer - Fonction pour mettre à jour le joueur actuel
 * @param {function(): void} refreshGame - Fonction pour rafraîchir l'affichage du jeu
 * @param {function(number[]): boolean} isGameOver - Fonction pour vérifier si la partie est terminée
 * @param {function(): void} disableInputs - Fonction pour désactiver les inputs lorsque le jeu est fini
 */
export function playComputerTurn(row, setCurrentPlayer, refreshGame, isGameOver, disableInputs) {
    // Crée un tableau des lignes disponibles (avec au moins 1 allumette)
    // Chaque élément est un objet { value: nb d'allumettes, index: numéro de ligne }
    const availableRows = row
        .map((value, index) => ({ value, index }))
        .filter(r => r.value > 0);

    // Choisit aléatoirement l'index d'une ligne parmi celles encore disponibles
    const randomIndex = Math.floor(Math.random() * availableRows.length);

    // Récupère l'objet correspondant à la ligne choisie
    const chosen = availableRows[randomIndex];

    // Détermine combien d'allumettes l'ordinateur va retirer
    // Math.floor(Math.random() * 4) + 1 → nombre aléatoire entre 1 et 4
    // Math.min(..., chosen.value) → ne retire pas plus d'allumettes qu'il n'y en a dans la ligne
    const sticksToRemove = Math.min(Math.floor(Math.random() * 4) + 1, chosen.value);

    // Retire les allumettes de la ligne sélectionnée
    row[chosen.index] -= sticksToRemove;

    // Vérifie si la partie est terminée après ce coup
    if (isGameOver(row)) {
        alert("L'ordinateur a gagné 🤖");
        disableInputs();                  
        return;                        
    }

    // Passe le tour au joueur 1
    setCurrentPlayer("Joueur 1");

    // Rafraîchit l'affichage pour montrer la nouvelle situation
    refreshGame();
}
