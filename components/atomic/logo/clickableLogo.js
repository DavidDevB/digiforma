export const ClickableLogo = (options = {}) => {
  const {
    href = "/",
    src,
    alt = "Logo",
    width = 65,
    height = "auto",
    className = "",
    newTab = true,
  } = options;

  return `
    <a
      class="clickable-logo ${className}"
      href="${href}"
        ${newTab ? 'target="_blank" rel="noopener noreferrer"' : ""}
    >
      <img
        src="${src}"
        alt="${alt}"
        style="width:${width}px; height:${height}; min-width:${width}px; max-width:${width}px;box-shadow:none; border-radius:0"
        class="clickable-logo__image"
      />
    </a>
  `;
};
