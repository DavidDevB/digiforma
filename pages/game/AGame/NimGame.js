let currentPlayer = "Joueur 1";
let row = [1, 3, 5, 7];

export function NimGame(row) {
    const result = `
        <main class="nim-game">
            <h1>Jeu de Nim</h1>
            <div style="text-align: left;">
                <p>
                    Le jeu de Nim se joue avec plusieurs lignes d'allumettes (ici 4 lignes : 1, 3, 5 et 7 allumettes).<br>
                    Les deux joueurs jouent à tour de rôle. À chaque tour, vous devez :
                </p>
                <ul>
                    <li>Choisir une ligne d’allumettes</li>
                    <li>Retirer 1 à 4 allumettes de cette ligne</li>
                </ul>
                <p>
                    Attention : le joueur qui est forcé de prendre la dernière allumette perd la partie.<br>
                    Le joueur actuel est affiché et change à chaque tour.
                </p>
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
                    <input type="number" name="stickQuantity" min="1">
                </label>  
                <button id="validate">Valider mon choix</button>   
            </div>
        </main>
    `;

    setTimeout(() => {
        const btn = document.getElementById('validate');
        if (btn) btn.addEventListener('click', handleClick);
    }, 0);

    return result;
}

export function handleClick() {
    const selectedIndexInput = document.querySelector('input[name="rowIndex"]:checked');
    const stickQuantityInput = document.querySelector('input[name="stickQuantity"]');
    const maxSticksToRemove = 4;

    // Vérifie qu'une ligne a été sélectionné
    if (!selectedIndexInput) {
        alert("Veuillez sélectionner une ligne !");
        return;
    }

    const selectedIndex = parseInt(selectedIndexInput.value);
    const sticksToRemove = parseInt(stickQuantityInput.value);

    // Vérifie que le chiffre saisi est un nombre positif
    if (isNaN(sticksToRemove) || sticksToRemove < 1) {
        alert("Veuillez saisir un nombre valide d'allumettes.");
        return;
    }

    // Vérifie que le nombre d'allumettes ne passe pas le nombre d'allumettes restantes dans la ligne
    if (sticksToRemove > row[selectedIndex]) {
        alert(`Vous ne pouvez retirer que ${row[selectedIndex]} allumettes sur cette ligne.`);
        return;
    }
    // Vérifie que le nombre d'allumettes ne passe pas maxSticksToRemove
    else if (sticksToRemove > maxSticksToRemove){
        alert(`Vous ne pouvez retirer que ${maxSticksToRemove} allumettes maximum.`);
        return;
    }

    // Déduit le nombre d'allumettes sur la ligne selectionnée
    row[selectedIndex] -= sticksToRemove;

    const totalSticks = row.reduce((a,b)=>a+b,0);

    // Vérifie si la partie est gagnée
    if (totalSticks === 1) {
        alert(`${currentPlayer} a gagné ! 🎉`);
        // Empêche le joueur de continuer de jouer lorsque la partie est finie
        document.querySelector('input[name="stickQuantity"]').disabled = true;
        document.querySelectorAll('input[name="rowIndex"]').forEach(input => input.disabled = true);
        document.getElementById('validate').disabled = true;
        return;
    }


    // Changer de joueur
    currentPlayer = currentPlayer === "Joueur 1" ? "Joueur 2" : "Joueur 1";

    // Rafraichir l'affichage du jeu
    document.getElementById('NimGame').innerHTML = NimGame(row);
}
