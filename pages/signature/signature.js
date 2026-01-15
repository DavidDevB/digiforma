const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");

const params = new URLSearchParams(window.location.search);
const dateIso = params.get("date") || new Date().toISOString().slice(0, 10);
const slot = params.get("slot") || (new Date().getHours() < 12 ? "AM" : "PM");
const storageKey = `SIGNED_${dateIso}_${slot}`;

const ratio = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();
const isPointerDown = (e) => (e.buttons & 1) === 1;

canvas.width = rect.width * ratio;
canvas.height = rect.height * ratio;

let drawing = false;

ctx.scale(ratio, ratio);
ctx.lineWidth = 2.5;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#111827";

ctx.fillStyle = "white";
ctx.fillRect(0, 0, rect.width, rect.height);

const getPos = (e) => {
    const r = canvas.getBoundingClientRect();
    return {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
    };
};

canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
});

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
});

canvas.addEventListener("mouseleave", () => {
    drawing = false;
});

canvas.addEventListener("mouseenter", (e) => {
    if (!isPointerDown(e)) return;
    drawing = true;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
});

document.getElementById("clearBtn").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, rect.width, rect.height);
});

document.getElementById("saveBtn").addEventListener("click", () => {
    const dataUrl = canvas.toDataURL("image/png");
    console.log("Signature:", dataUrl);

    localStorage.setItem(storageKey, "1");

    alert("Signature enregistrée ✅");

    window.location.href = "/pages/signature/signatureIndex.html";
});
