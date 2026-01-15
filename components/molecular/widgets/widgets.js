import IconCircle from "../icon/iconCircle.js";
import IconSquare from "../icon/iconSquare.js";
import button from "../../atomic/button/button.js";

const icons = {
  nextSlot: "calendar",
  evaluations: "star",
  documents: "folder",
  elearning: "three--dots--vertical",
  signatures: "sign",
  rules: "download",
  trainers: "users",

  avatarFallback: "user",
};

const widgets = () => {
  return `
    <div class="widgets-grid">

      <!-- Prochain créneau -->
      <section class="w-card">
        <div class="w-head">
          <div class="w-ico" aria-hidden="true">
            ${IconCircle(icons.nextSlot, { iconSize: 35 })}
          </div>
          <div>
            <div class="w-title">Prochain créneau</div>
            <div class="w-sub">Le 12/01/2026</div>
          </div>
          <div style="justify-self:end;font-weight:900;">à 12:30</div>
        </div>
      </section>

      <!-- Évaluations -->
      <section class="w-card">
        <div class="w-head">
          <div class="w-ico" aria-hidden="true">
            ${IconCircle(icons.evaluations, { iconSize: 35 })}
          </div>
          <div>
            <div class="w-title">Évaluations</div>
            <div class="w-sub">4 évaluations en attente</div>
          </div>
          ${button("Compléter", "/pages/wip/wip.html")}
        </div>
      </section>

      <!-- Documents -->
      <section class="w-card">
        <div class="w-head">
          <div class="w-ico" aria-hidden="true">
            ${IconCircle(icons.documents, { iconSize: 35 })}
          </div>
          <div>
            <div class="w-title">Documents</div>
            <div class="w-sub">Aucun document disponible</div>
          </div>
          <div></div>
        </div>
      </section>

      <!-- E-learning -->
      <section class="w-card">
        <div class="w-head">
          <div class="w-ico" aria-hidden="true">
            ${IconCircle(icons.elearning, { iconSize: 35 })}
          </div>
          <div>
            <div class="w-title">E-learning</div>
            <div class="w-sub"><strong>42 %</strong></div>
            <div class="w-progress"><span style="width:42%"></span></div>
          </div>
          <div></div>
        </div>

        <div class="w-body">
          <div class="el-list">
            ${elItem("ANG-BUSI-002", "Business Essentials", 0)}
            ${elItem("ANG-CDA", "Python-Java", 50)}
            ${elItem("ANG-PROB-002", "Résolution de Problématiques", 0)}
            ${elItem("ANG-EMAI-002", "Emails : Comprendre et rédiger", 100)}
            ${elItem("ANG-CONV-003", "Pratique de la conversation", 0)}
          </div>

          <div class="el-cta">
            ${button("Accéder au E-learning", "/pages/eLearning/eLearning.html")}
          </div>
        </div>
      </section>

      <!-- Émargements -->
      <section class="w-card">
        <div class="w-head">
          <div class="w-ico" aria-hidden="true">
            ${IconCircle(icons.signatures, { iconSize: 35 })}
          </div>
          <div>
            <div class="w-title">Émargements</div>
            <div class="w-sub">1 signature en attente</div>
          </div>
          ${button("Signer", "/pages/signature/signature.html")}
        </div>
      </section>

      <!-- Règlement intérieur -->
      <section class="w-card">
        <div class="w-head">
          <div class="w-ico" aria-hidden="true">
            ${IconCircle(icons.rules, { iconSize: 35 })}
          </div>
          <div>
            <div class="w-title">Règlement intérieur</div>
          </div>
          ${button("Télécharger", "/assets/reglement-interieur.pdf")}
        </div>
      </section>

      <!-- Vos intervenants -->
      <section class="w-card">
        <div class="w-head">
          <div class="w-ico" aria-hidden="true">
            ${IconCircle(icons.trainers, { iconSize: 35 })}
          </div>
          <div>
            <div class="w-title">Vos intervenants</div>
            <div class="w-sub">Découvrez vos formateurs</div>
          </div>
          <div></div>
        </div>

        <div class="w-body">
          <div class="people-grid">
            ${person({ last: "BELLAVIA", first: "Fabrice", photoUrl: null })}
            ${person({ last: "MONTEIRO", first: "Elisabeth", photoUrl: null })}
            ${person({ last: "DIOP", first: "Mor", photoUrl: "/assets/mor.png" })}
            ${person({ last: "AUTONOME", first: "", photoUrl: null })}
            ${person({ last: "ROGER", first: "Marck", photoUrl: null })}
            ${person({ last: "ETCHEBARNE", first: "Stella", photoUrl: null })}
            ${person({ last: "BRET", first: "Martial", photoUrl: "/assets/martial.png" })}
            ${person({ last: "LACLAU", first: "Tristan", photoUrl: null })}
            ${person({ last: "PINEIRO", first: "Andrea", photoUrl: null })}
          </div>
        </div>
      </section>

    </div>
  `;
};

const elItem = (code, name, pct) => {
  return `
    <div class="el-item">
      <div>
        <div class="el-code">${code}</div>
        <div class="el-name">${name}</div>
      </div>
      <div class="el-right">
        <span class="el-pct">${pct} %</span>
        <span class="el-ring" style="--p:${pct}"></span>
      </div>
    </div>
  `;
};

const person = ({ last, first, photoUrl }) => {
  const alt = `${first} ${last}`.trim();

  const avatar = photoUrl
    ? `
      <div class="avatar avatar--square" aria-hidden="false" >
        <img src="${photoUrl}" alt="${alt}" />
      </div>
    `
    : `
      <div class="avatar avatar--square" aria-hidden="true">
        ${IconSquare(icons.avatarFallback, { size: 96, iconSize: 48, borderWidth: 4 })}
      </div>
    `;

  return `
    <div class="person">
      ${avatar}
      <div class="p-name">${last}</div>
      <div class="p-sub">${first || "&nbsp;"}</div>
    </div>
  `;
};

export default widgets;
