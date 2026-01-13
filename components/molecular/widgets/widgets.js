document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("rightWidgets");
  if (!root) return;

  root.innerHTML = `
    <!-- Prochain créneau -->
    <section class="w-card">
      <div class="w-head">
        <div class="w-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H4v10h16V10z"/></svg>
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
          <svg viewBox="0 0 24 24"><path d="M12 2l3 7 7 .6-5.3 4.6 1.7 7-6.4-3.9L6.3 21 8 14.2 2.8 9.6 10 9z"/></svg>
        </div>
        <div>
          <div class="w-title">Évaluations</div>
          <div class="w-sub">4 évaluations en attente</div>
        </div>
        <div><button class="btn-pill">Compléter</button></div>
      </div>
    </section>

    <!-- Documents -->
    <section class="w-card">
      <div class="w-head">
        <div class="w-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6V2zm8 1v5h5"/></svg>
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
          <svg viewBox="0 0 24 24"><path d="M8 5v14l12-7z"/></svg>
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
          <button class="btn-pill">Accéder au e-learning</button>
        </div>
      </div>
    </section>

    <!-- Émargements -->
    <section class="w-card">
      <div class="w-head">
        <div class="w-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M3 21l3-1 11-11-2-2L4 18l-1 3zm14-14l2 2 2-2-2-2-2 2z"/></svg>
        </div>
        <div>
          <div class="w-title">Émargements</div>
          <div class="w-sub">1 signature en attente</div>
        </div>
        <div><button class="btn-pill">Signer</button></div>
      </div>
    </section>

    <!-- Règlement intérieur -->
    <section class="w-card">
      <div class="w-head">
        <div class="w-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 3v10l4-4 1 1-6 6-6-6 1-1 4 4V3h2zm-8 16h16v2H4v-2z"/></svg>
        </div>
        <div>
          <div class="w-title">Règlement intérieur</div>
        </div>
        <div><button class="btn-pill">Télécharger</button></div>
      </div>
    </section>

    <!-- Vos intervenants -->
    <section class="w-card">
      <div class="w-head">
        <div class="w-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5 0-9 3-9 7h2c0-3 3-5 7-5s7 2 7 5h2c0-4-4-7-9-7z"/></svg>
        </div>
        <div>
          <div class="w-title">Vos intervenants</div>
          <div class="w-sub">Découvrez vos formateurs</div>
        </div>
        <div></div>
      </div>

      <div class="w-body">
        <div class="people-grid">
          ${person("BF", "BELLAVIA", "Fabrice")}
          ${person("ME", "MONTEIRO", "Elisabeth")}
          ${person("DM", "DIOP", "Mor")}
          ${person("AU", "AUTONOME", "")}
          ${person("RM", "ROGER", "Marck")}
          ${person("ES", "ETCHEBARNE", "Stella")}
          ${person("BM", "BRET", "Martial")}
          ${person("LT", "LACLAU", "Tristan")}
          ${person("PA", "PINEIRO", "Andrea")}
        </div>
      </div>
    </section>
  `;

  function elItem(code, name, pct){
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
  }

  function person(initials, last, first){
    return `
      <div class="person">
        <div class="avatar">${initials}</div>
        <div class="p-name">${last}</div>
        <div class="p-sub">${first || "&nbsp;"}</div>
      </div>
    `;
  }
});
