import button from "../../components/atomic/button/button.js";
import homeMenu from "../../components/molecular/homeMenu/homeMenu.js";
import { renderHeader, initHeader } from "../../components/molecular/header/header.js";


const todayIso = () => new Date().toISOString().slice(0, 10);
const formatDateFR = (iso) => new Date(iso).toLocaleDateString("fr-FR");
const keyFor = (dateIso, slot) => `SIGNED_${dateIso}_${slot}`;

const slots = [
  { id: "AM", label: "(08:00 - 11:30)" },
  { id: "PM", label: "(12:30 - 16:00)" },
];

document.getElementById("header").innerHTML = renderHeader(true);
initHeader();
document.querySelector(".V2_LeftMenuLayout__body").innerHTML = homeMenu();

const dateIso = todayIso();
const dateFR = formatDateFR(dateIso);

const listEl = document.getElementById("emargementsList");

const renderRow = (slot) => {
  const signed = localStorage.getItem(keyFor(dateIso, slot.id)) === "1";

  return `
    <div class="signatureWrapper" style="display:flex; gap: 20px; align-items:center; padding:18px; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; background: white; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);">
      <div style="flex:1;">
        <h4 class="pendingSignature" style="margin:0;">
          DEV-WEB-007 - ${dateFR} ${slot.label}
        </h4>
      </div>

      <div>
        ${signed
      ? `<span style="font-weight:700; color: #15803d; background: rgba(34,197,94,0.15); padding: 8px 12px; border-radius: 999px;">Signé ✅</span>`
      : button(
        "Signer",
        `/pages/signature/signature.html?date=${dateIso}&slot=${slot.id}`
      )
    }
      </div>
    </div>
  `;
};

listEl.innerHTML = slots.map(renderRow).join("");
