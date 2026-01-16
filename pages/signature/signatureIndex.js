import button from "../../components/atomic/button/button.js";
import homeMenu from "../../components/molecular/homeMenu/homeMenu.js";
import { renderHeader, initHeader } from "../../components/molecular/header/header.js";

const todayIso = () => new Date().toISOString().slice(0, 10);
const formatDateFR = (iso) => new Date(iso).toLocaleDateString("fr-FR");
const keyFor = (dateIso, slot) => `SIGNED_${dateIso}_${slot}`;
const isSigned = (dateIso, slot) => localStorage.getItem(keyFor(dateIso, slot)) === "1";

const slots = [
  { id: "AM", label: "AM", hours: "(08:00 - 11:30)" },
  { id: "PM", label: "PM", hours: "(12:30 - 16:00)" },
];


document.getElementById("header").innerHTML = renderHeader(true);
initHeader();
document.querySelector(".V2_LeftMenuLayout__body").innerHTML = homeMenu();

const dateIso = todayIso();
const dateFR = formatDateFR(dateIso);

const listEl = document.getElementById("emargementsList");
const labelEl = document.getElementById("SignaturePage__hint");

const unsignedSlots = slots.filter((s) => !isSigned(dateIso, s.id));

if (unsignedSlots.length === 0) {
  listEl.innerHTML = `<h3 class="">Vous n'avez pas d'émargements à signer pour cette session</h3>`;
  labelEl.innerHTML = `<div></div>`
} else {
  listEl.innerHTML = unsignedSlots
    .map((slot) => {
      return `
        <div class="signatureWrapper signatureWrapper--row">
          <div class="SignatureRow__left">
            <div class="SignatureRow__course"><span>DEV-WEB-007</span> - Web</div>
          </div>

          <div class="SignatureRow__right">
            <div class="SignatureRow__dateBlock">
              <div class="SignatureRow__date">${dateFR}</div>
              <div class="SignatureRow__slot">${slot.label} ${slot.hours}</div>
            </div>

            <div class="SignatureRow__action">
              ${button("Signer", `/pages/signature/signature.html?date=${dateIso}&slot=${slot.id}`)}
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}
