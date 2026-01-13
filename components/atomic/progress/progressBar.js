export const ProgressBar = (percent = 0, options = {}) => {
  const { color = "primary", ariaLabel = "Barre de progression" } = options;
  const clamped = Math.max(0, Math.min(100, Number(percent)));

  return `
    <span class="ProgressBar" data-color="${color}" style="width:${clamped}%">

    </span>
  `;
};
