export const parseColorToRgba = (color) => {
    if (!color || typeof color !== "string") return null;

    const c = color.trim().toLowerCase();

    if (c === "transparent") return { r: 0, g: 0, b: 0, a: 0 };

    // rgb() / rgba()
    const rgbMatch = c.match(
        /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([01](?:\.\d+)?|\.\d+)\s*)?\)$/
    );
    if (rgbMatch) {
        const r = Math.min(255, Number(rgbMatch[1]));
        const g = Math.min(255, Number(rgbMatch[2]));
        const b = Math.min(255, Number(rgbMatch[3]));
        const a = rgbMatch[4] === undefined ? 1 : Math.max(0, Math.min(1, Number(rgbMatch[4])));
        return { r, g, b, a };
    }

    // #rgb / #rrggbb
    const hexMatch = c.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hexMatch) {
        let hex = hexMatch[1];
        if (hex.length === 3) hex = hex.split("").map((ch) => ch + ch).join("");
        const int = parseInt(hex, 16);
        const r = (int >> 16) & 255;
        const g = (int >> 8) & 255;
        const b = int & 255;
        return { r, g, b, a: 1 };
    }

    return null;
};

export const lighterColor = (color, amount = 0.3, fallback = "rgba(178, 83, 154, 0.35)") => {
    const rgba = parseColorToRgba(color);
    if (!rgba) return fallback;

    const a = rgba.a ?? 1;
    const clamp01 = (x) => Math.max(0, Math.min(1, x));
    const t = clamp01(Number(amount));

    const lighten = (v) => Math.round(v + (255 - v) * t);

    const r = lighten(rgba.r);
    const g = lighten(rgba.g);
    const b = lighten(rgba.b);

    // Keep alpha if it exists and is not 1
    if (a !== 1) return `rgba(${r}, ${g}, ${b}, ${a})`;
    return `rgb(${r}, ${g}, ${b})`;
};
