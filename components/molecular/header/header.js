import { ClickableLogo } from "../../atomic/logo/clickableLogo.js";
import { IconCircle } from "../../molecular/icon/iconCircle.js";

export function renderHeader() {
  return `
    <header class="header">
      <div class="header__container">

        <!-- LOGO -->
        <div class="header__icon">
          ${ClickableLogo({
    href: "/",
    src: "../../../assets/logoFms.png",
    alt: "FMS Academy",
    width: 65,
    newTab: false,
  })}
        </div>

        <!-- PROFIL -->
        <div class="header__profile">

          <!-- Bouton question -->
          <button
            class="header__profile-btn"
            type="button"
            aria-label="Aide"
          >
            <span id="header-question-icon"></span>
          </button>

          <!-- Bouton profil -->
          <button
            class="header__profile-name"
            type="button"
            id="openProfileModal"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>RABORD Marty</span>
            <span aria-hidden="true">▾</span>
          </button>

          <!-- Dropdown -->
          <div class="modal" id="profileModal" aria-hidden="true">
            <div class="modal__content" role="menu">
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
  const questionIcon = document.getElementById("header-question-icon");

  if (!modal || !openBtn) return;

  /* Injecte l’icône question */
  if (questionIcon) {
    questionIcon.innerHTML = IconCircle("question");
  }

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
    modal.classList.contains("active") ? close() : open();
  };

  /* Events */
  openBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
