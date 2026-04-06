const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

/* ========================= */
/* CREATE PARTICLES */
/* ========================= */
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speedY: Math.random() * 0.5 + 0.2,
    alpha: Math.random()
  });
}

/* ========================= */
/* ANIMATION */
/* ========================= */
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.y += p.speedY;

    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 215, 0, ${p.alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();