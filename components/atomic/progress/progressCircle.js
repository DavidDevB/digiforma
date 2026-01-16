export const ProgressCircle = (percent = 0, options = {}) => {
  const {
    sizeClass = "ProgressCircle--size-md",
    strokeClass = "ProgressCircle--stroke-success",
    subtitle = "Progression de la formation",
  } = options;

  const clamped = Math.max(0, Math.min(100, Number(percent)));
  const r = 42;
  const circumference = 2 * Math.PI * r;
  const value = (clamped / 100) * circumference;
  const rest = circumference - value;

  const dashOffset = circumference * 0.25;

  return `
    <div role="progressbar" aria-valuenow="${clamped}" class="ProgressCircle ${sizeClass} ${strokeClass}">
      <svg class="ProgressCircle__circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle class="ProgressCircle__circle-track" cx="50" cy="50" r="${r}"></circle>
        <circle
          class="ProgressCircle__progress"
          cx="50"
          cy="50"
          r="${r}"
          stroke-dasharray="${value},${rest}"
          stroke-dashoffset="${dashOffset}"
        ></circle>
      </svg>

      <div class="ProgressCircle__captions">
        <p class="ProgressCircle__subtitle">${subtitle}</p>
        <p class="ProgressCircle__title" style="color:rgb(166, 77, 144);">${clamped}%</p>
      </div>
    </div>
  `;
};
