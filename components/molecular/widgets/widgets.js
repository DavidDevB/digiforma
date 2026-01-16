import IconCircle from "../icon/iconCircle.js";
import IconSquare from "../icon/iconSquare.js";
import button from "../../atomic/button/button.js";

const icons = {
  nextSlot: "calendar",
  evaluations: "star",
  documents: "folder",
  elearning: "three--dots--vertical",
  signatures: "pen--fountain-writing",
  rules: "download",
  trainers: "users",

  avatarFallback: "user",
};

const todayIso = () => new Date().toISOString().slice(0, 10);
const keyForSignature = (dateIso, slot) => `SIGNED_${dateIso}_${slot}`;
const isSigned = (dateIso, slot) => localStorage.getItem(keyForSignature(dateIso, slot)) === "1";

const getPendingSignaturesCount = (dateIso) => {
  const slots = ["AM", "PM"];
  return slots.filter((slot) => !isSigned(dateIso, slot)).length;
};


const widgets = (data) => {
  const dateIso = todayIso();
  const pendingCount = getPendingSignaturesCount(dateIso);

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
            <div class="w-sub"><strong>66 %</strong></div>
            <div class="w-progress"><span style="width:42%"></span></div>
          </div>
          <div></div>
        </div>

        <div class="w-body">
          <div class="el-list">
            ${elItem(data.sequences[0].title, 100)}
            ${elItem(data.sequences[1].title, 50)}
            ${elItem(data.sequences[2].title, 70)}
            ${elItem(data.sequences[3].title, 80)}
            ${elItem(data.sequences[4].title, 30)}
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
            <div class="w-sub">
              ${pendingCount === 0 ? "Aucune signature en attente"
      : `${pendingCount} signature${pendingCount > 1 ? "s" : ""} en attente`
    }
</div>
          </div>
          ${button("Signer", "/pages/signature/signatureIndex.html")}
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

const elItem = (code, pct) => {
  return `
    <div class="el-item">
      <div>
        <div class="el-code">${code}</div>
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
