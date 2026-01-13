import { lighterRgb } from "../../../utils.js";

export const IconSquare = (iconName, options = {}) => {
  const {
    size = 44,
    iconSize = 30,
    bgColor = "rgb(166, 77, 144)",
    color = "white",
    borderWidth = 3,
  } = options;


  const borderColor = lighterRgb(bgColor, 0.35);

  return `
    <div
      style="
        background-color:${bgColor};
        width:${size}px;
        height:${size}px;
        border-radius:16%;
        border:${borderWidth}px solid ${borderColor};
        display:flex;
        align-items:center;
        justify-content:center;
      "
    >
      <svg
        class="icon"
        aria-hidden="true"
        style="width:${iconSize}px; height:${iconSize}px; color:${color};"
      >
        <use href="./assets/icons.svg#${iconName}"></use>
      </svg>
    </div>
  `;
};

export default IconSquare;
