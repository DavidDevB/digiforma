export const lighterRgb = (rgb, amount = 0.3) => {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);

    const lighter = (value) =>
        Math.round(value + (255 - value) * amount);

    return `rgb(${lighter(r)}, ${lighter(g)}, ${lighter(b)})`;
};
