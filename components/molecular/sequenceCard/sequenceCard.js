import { ProgressBar } from "../../atomic/progress/progressBar.js";
import { IconCircle } from "../../molecular/icon/iconCircle.js";

export const SequenceCard = (seq) => {
  return `
    <li class="Paper Paper--no-padding Paper--full-width ElearningSequenceWidget ModulesPageLayout__module">
      <div class="ElearningSequenceWidget__cover" style="
    background-image: url('${seq.coverUrl}');
    border: 5px solid hsla(0, 0%, 90%, 0.333);
    border-radius:14px;
  "></div>

      <h2 title="${seq.title}" class="ElearningSequenceWidget__title">
        <span class="ElearningSequenceWidget__title-wrapper">
          <span class="ElearningSequenceWidget__title-text">${seq.title}</span>
        </span>
      </h2>

      <div class="ElearningSequenceWidget__footer">
        <div class="ElearningSequenceWidget__progress-container">
          ${ProgressBar(seq.progress, { color: "primary" })}
          <span class="ElearningSequenceWidget__progress-label">${seq.progress} %</span>
        </div>

        <a
          class="Button Button--size-sm Button--variant-solid Button--color-primary Button--text-only"
          href="${seq.href}"
        >
          Consulter
        </a>
      </div>

      ${seq.isFinished
      ? `
          <div class="RoundedIcon RoundedIcon--background-secondary ElearningSequenceWidget__finishedBadge">
          ${IconCircle("checkmark--circle")}
          </div>
        `
      : ""
    }
    </li>
  `;
};
