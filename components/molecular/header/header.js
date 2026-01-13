export function renderHeader() {
  return `
    <header class="header">
      <div class="header__container">
        <div class="header__icon">Mon Logo</div>

        <div class="header__profile">
          <button class="header__profile-btn" type="button">?</button>

          <button
            class="header__profile-name"
            type="button"
            id="openProfileModal"
            aria-haspopup="true"
            aria-expanded="false"
          >
          <span>RABORD Marty </span>
            <span aria-hidden="true">▾</span>
          </button>

          <!-- Dropdown sous Profil -->
          <div class="modal" id="profileModal" aria-hidden="true">
            <div class="modal__content" role="menu" aria-label="Menu profil">
              <a href="#" class="modal__link" role="menuitem">Paramètres</a>
              <a href="#" class="modal__link" role="menuitem">Déconnexion</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function initHeader() {
  const modal = document.getElementById("profileModal");
  const openBtn = document.getElementById("openProfileModal");

  if (!modal || !openBtn) return;

  const open = () => {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
  };

  const toggle = () => {
    if (modal.classList.contains("active")) close();
    else open();
  };

  // Ouvre/ferme au clic sur Profil
  openBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // sinon: open puis close immédiat via document.click
    toggle();
  });

  // Empêche le clic dans le menu de fermer (optionnel mais pratique)
  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Ferme au clic ailleurs
  document.addEventListener("click", close);

  // Ferme avec ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}



