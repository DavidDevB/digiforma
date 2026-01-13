const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");
const restartBtn = document.getElementById("restart");

// Grid settings
const CELL = 20;
const GRID = canvas.width / CELL;

let snake, dir, nextDir, food, score, timerId, isGameOver;

const randCell = () => Math.floor(Math.random() * GRID);

const samePos = (a, b) => a.x === b.x && a.y === b.y;

const spawnFood = () => {
    while (true) {
        const f = { x: randCell(), y: randCell() };
        if (!snake.some((cell) => samePos(cell, f))) return f;
    }
};

const reset = () => {
    snake = [
        { x: Math.floor(GRID / 2), y: Math.floor(GRID / 2) },
        { x: Math.floor(GRID / 2) - 1, y: Math.floor(GRID / 2) },
        { x: Math.floor(GRID / 2) - 2, y: Math.floor(GRID / 2) },
    ];

    dir = { x: 1, y: 0 };
    nextDir = dir;

    score = 0;
    isGameOver = false;
    food = spawnFood();

    scoreEl.textContent = String(score);
    statusEl.textContent = "Se diriger avec les flèches";

    if (timerId) clearInterval(timerId);
    timerId = setInterval(tick, 110);

    draw();
};

const setDir = (newDir) => {
    // Prevent 180° reverse
    if (newDir.x === -dir.x && newDir.y === -dir.y) return;
    nextDir = newDir;
};

const onKey = (e) => {
    if (e.key === "ArrowUp") setDir({ x: 0, y: -1 });
    else if (e.key === "ArrowDown") setDir({ x: 0, y: 1 });
    else if (e.key === "ArrowLeft") setDir({ x: -1, y: 0 });
    else if (e.key === "ArrowRight") setDir({ x: 1, y: 0 });
};

const tick = () => {
    if (isGameOver) return;

    dir = nextDir;

    const head = snake[0];
    const newHead = { x: head.x + dir.x, y: head.y + dir.y };

    // Wrap around edges (no wall death)
    if (newHead.x < 0) newHead.x = GRID - 1;
    else if (newHead.x >= GRID) newHead.x = 0;

    if (newHead.y < 0) newHead.y = GRID - 1;
    else if (newHead.y >= GRID) newHead.y = 0;

    // Self collision = ONLY losing condition
    if (snake.some((s) => samePos(s, newHead))) {
        gameOver();
        return;
    }

    snake.unshift(newHead);

    if (samePos(newHead, food)) {
        score += 1;
        scoreEl.textContent = String(score);
        food = spawnFood();
    } else {
        snake.pop();
    }

    draw();
};

const gameOver = () => {
    isGameOver = true;
    statusEl.textContent = "💥 Game Over — tu t'es mangée !";
};

const drawCell = (x, y, kind) => {
    const px = x * CELL;
    const py = y * CELL;

    // Light grid background
    ctx.fillStyle = "rgba(0,0,0,0.03)";
    ctx.fillRect(px, py, CELL, CELL);

    if (kind === "food") {
        // Orange like your Start button
        ctx.fillStyle = "#ff9800";
        ctx.fillRect(px + 5, py + 5, CELL - 10, CELL - 10);
        return;
    }

    if (kind === "head") {
        // Purple-ish (matches gradient vibe)
        ctx.fillStyle = "#667eea";
        ctx.fillRect(px + 2, py + 2, CELL - 4, CELL - 4);
        return;
    }

    if (kind === "body") {
        ctx.fillStyle = "#764ba2";
        ctx.fillRect(px + 4, py + 4, CELL - 8, CELL - 8);
    }
};

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCell(food.x, food.y, "food");

    snake.forEach((part, i) => {
        drawCell(part.x, part.y, i === 0 ? "head" : "body");
    });
};

// Events
window.addEventListener("keydown", onKey);
restartBtn.addEventListener("click", reset);

// Start
reset();
