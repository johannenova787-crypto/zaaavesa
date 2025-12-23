<script>
function setTimeMode() {
  const hour = new Date().getHours();
  const body = document.body;

  body.classList.remove("day", "sunset", "night");

  if (hour >= 6 && hour < 17) {
    body.classList.add("day");
  } else if (hour >= 17 && hour < 20) {
    body.classList.add("sunset");
  } else {
    body.classList.add("night");
  }
}

setTimeMode();

/* Проверка раз в 5 минут — плавно */
setInterval(setTimeMode, 300000);
</script>

<script>
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

let particles = [];
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.6,
    v: Math.random() * 0.3 + 0.1,
    a: Math.random() * Math.PI * 2
  });
}

function getParticleColor() {
  if (document.body.classList.contains("night")) {
    return "rgba(180,170,255,0.6)"; // лунный
  }
  if (document.body.classList.contains("sunset")) {
    return "rgba(220,170,100,0.6)"; // янтарный
  }
  return "rgba(210,170,90,0.6)"; // дневное золото
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    p.y -= p.v;
    p.a += 0.01;
    if (p.y < -10) p.y = canvas.height + 10;

    ctx.beginPath();
    ctx.fillStyle = getParticleColor();
    ctx.arc(p.x + Math.sin(p.a)*4, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}
draw();
</script>
