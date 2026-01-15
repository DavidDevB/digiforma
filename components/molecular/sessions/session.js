// components/molecular/sessionAccess/sessionAccess.js

export function renderSessionAccess({
  id = "sessions-access",
  label = "Accès à vos sessions :",
  sessions = [],
  value = "",
}) {
  return `
    <div class="Sidebar__sessions">
      <div class="SessionAccess" id="${id}">
        <div class="SessionAccess__label">${label}</div>

        <select class="SessionAccess__select">
          ${sessions
            .map(
              (s) => `
            <option value="${s.value}" ${
                s.value === value ? "selected" : ""
              }>
              ${s.label}
            </option>
          `
            )
            .join("")}
        </select>
      </div>
    </div>
  `;
}

export function initSessionAccess({ id = "sessions-access", onChange }) {
  const root = document.getElementById(id);
  if (!root) return;

  const select = root.querySelector("select");
  if (!select) return;

  select.addEventListener("change", (e) => {
    onChange?.(e.target.value);
  });
}
