import { isGameOver, disableInputs, switchPlayer, registerEvents, playComputerTurn } from "./helpers.js";

let currentPlayer = "Joueur 1";         

// État initial des lignes d'allumettes 
let row = [1, 3, 5, 7]; 
                 
let playersMode = null;                  

// Fonction qui génère le HTML du jeu Nim
export function NimGame() {
    const result = `
        <main class="nim-game">
            <h1>Jeu de Nim</h1>
            <div style="text-align: left;">
                <p>
                    Le jeu de Nim se joue avec plusieurs lignes d'allumettes (ici 4 lignes : 1, 3, 5 et 7 allumettes).<br>
                    Les joueurs jouent à tour de rôle et retirent 1 à 4 allumettes d'une seule ligne.<br>
                    Le joueur qui prend la dernière allumette perd la partie. <br>
                    2 variantes possibles : 2 joueurs ou jouer contre l'ordinateur
                </p>
                <div class="controls">
                    <button class="player-number" data-players="1">Contre l'ordinateur</button>
                    <button class="player-number" data-players="2">2 joueurs</button>
                </div>
            </div>
            <h3 class="current-player">Joueur actuel : ${currentPlayer}</h3>
            <section class="rows">
               ${row.map((value, index) => `
                    <div class="row ${value === 0 ? 'hidden' : ''}">
                        <p class="sticks">
                            ${"<span class='stick'></span>".repeat(value)}
                        </p>
                        <input type="radio" value="${index}" name="rowIndex">
                    </div>
                `).join('')}
            </section>
            <div class="controls">
                <label>
                    Combien d'allumettes à retirer : 
                    <input type="number" name="stickQuantity" min="1" max="4">
                </label>  
                <button id="validate">Valider mon choix</button>   
            </div>
        </main>
    `;

    // Enregistre les événements après que le DOM soit mis à jour
    // Passe handleClick pour gérer le bouton "Valider" et mettre à jour le mode de jeu
    setTimeout(() => registerEvents(handleClick, (mode) => playersMode = mode), 0);

    return result;
}

// Fonction qui gère le clic sur "Valider mon choix"
export function handleClick() {
    const selectedIndexInput = document.querySelector('input[name="rowIndex"]:checked'); 
    const stickQuantityInput = document.querySelector('input[name="stickQuantity"]');   
    const maxSticksToRemove = 4;                                                  

    // Vérifie qu'une ligne a été sélectionnée
    if (!selectedIndexInput) { 
        alert("Veuillez sélectionner une ligne !"); 
        return; 
    }

    const selectedIndex = parseInt(selectedIndexInput.value);
    const sticksToRemove = parseInt(stickQuantityInput.value);

    // Vérifie que la valeur saisie est valide
    if (isNaN(sticksToRemove) || sticksToRemove < 1) { 
        alert("Veuillez saisir un nombre valide d'allumettes."); 
        return; 
    }

    // Vérifie que le nombre d'allumettes ne dépasse pas le nombre restant dans la ligne
    if (sticksToRemove > row[selectedIndex]) { 
        alert(`Vous ne pouvez retirer que ${row[selectedIndex]} allumettes sur cette ligne.`); 
        return; 
    }

    // Vérifie que le nombre d'allumettes ne dépasse pas la limite max
    if (sticksToRemove > maxSticksToRemove){ 
        alert(`Vous ne pouvez retirer que ${maxSticksToRemove} allumettes maximum.`); 
        return; 
    }

    // Retire les allumettes de la ligne sélectionnée
    row[selectedIndex] -= sticksToRemove;

    // Vérifie si la partie est terminée
    if (isGameOver(row)) { 
        alert(`${currentPlayer} a gagné !!!`); 
        disableInputs();  // Bloque les inputs et le bouton
        return; 
    }

    // Change de joueur
    currentPlayer = switchPlayer(currentPlayer);

    // Rafraîchit l'affichage du jeu
    document.getElementById('NimGame').innerHTML = NimGame();

    // Si c'est le mode contre ordinateur et que c'est à l'ordinateur de jouer
    if (playersMode === 1 && currentPlayer === "Joueur 2") {
        setTimeout(() => 
            playComputerTurn(
                row, 
                (player) => currentPlayer = player, 
                () => document.getElementById('NimGame').innerHTML = NimGame(), 
                isGameOver, 
                disableInputs
            ), 
        800);
    }
}
