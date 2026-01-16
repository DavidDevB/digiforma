import { ProgressCircle } from "../../atomic/progress/progressCircle.js";
import { IconCircle } from "../../molecular/icon/iconCircle.js";
import { lighterColor } from "../../../utils.js";

export const Stats = ({ globalProgress, totalSequences }) => {
  return `
    <div class="ModulesPageLayout__stats">
      ${ProgressCircle(globalProgress, {
    subtitle: "Progression de la formation",
    sizeClass: "ProgressCircle--size-md",
    strokeClass: "ProgressCircle--stroke-success",
  })}

      <div class="ModulesPageLayout__learning-path-counts">
        <div class="ModulesPageLayout__learning-path-counts-icon">${IconCircle("three--dots--vertical", { bgColor: lighterColor("rgb(166, 77, 144)", 0.75), color: "rgb(166, 77, 144)", size: 64, iconSize: 50 })}</div>

        <div class="ModulesPageLayout__learning-path-counts-text">

          <small>Nombre de séquences</small>
          <p style="color:rgb(166, 77, 144);">${totalSequences}</p>
        </div>
      </div>
    </div>
  `;
};
