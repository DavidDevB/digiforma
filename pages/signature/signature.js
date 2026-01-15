const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");

const ratio = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();
const isPointerDown = (e) => (e.buttons & 1) === 1;

canvas.width = rect.width * ratio;
canvas.height = rect.height * ratio;

let drawing = false;

ctx.lineWidth = 2.5;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#111827";
ctx.scale(ratio, ratio);

const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
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
});


document.getElementById("saveBtn").addEventListener("click", () => {
    const dataUrl = canvas.toDataURL("image/png");
    console.log("Signature:", dataUrl);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    alert("Signature enregistrée");
});
