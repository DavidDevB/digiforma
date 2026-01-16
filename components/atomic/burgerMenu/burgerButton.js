export const BurgerButton = (options = {}) => {
  const {
    iconSize = 40,
    ariaLabel = "Open menu",
  } = options;

  return `
    <button
      class="burger-button"
      aria-label="${ariaLabel}"
      aria-expanded="false"
      type="button"
    >
      <svg
        class="icon"
        aria-hidden="true"
        style="width:${iconSize}px; height:${iconSize}px; cursor:pointer;"
      >
        <use href="./assets/icons2.svg#burger--menu"></use>
      </svg>
    </button>

  `;
};
