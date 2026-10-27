/**
 * CampusConnect AI — Interactive Neural Particle & Ambient Mesh Background
 */

(function () {
  const canvas = document.getElementById("ai-particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 140 };
  let animationFrameId;

  // Check reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.2 + 0.8;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = Math.random() * 20 + 5;
      this.vx = (Math.random() - 0.5) * 0.65;
      this.vy = (Math.random() - 0.5) * 0.65;
      
      // Color palette: violet, cyan, soft white
      const colors = [
        "rgba(139, 92, 246, ", // violet
        "rgba(6, 182, 212, ",  // cyan
        "rgba(59, 130, 246, ", // blue
        "rgba(255, 255, 255, " // white
      ];
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.5 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseAngle = Math.random() * Math.PI * 2;
    }

    draw() {
      const currentAlpha = Math.max(0.1, this.alpha + Math.sin(this.pulseAngle) * 0.2);
      ctx.fillStyle = this.colorBase + currentAlpha + ")";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      // Soft outer glow for larger particles
      if (this.size > 2) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.colorBase + "0.6)";
      } else {
        ctx.shadowBlur = 0;
      }
    }

    update() {
      this.pulseAngle += this.pulseSpeed;

      // Mouse repulsion/interaction
      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * this.density;
          const directionY = (dy / distance) * force * this.density;
          this.x -= directionX * 0.8;
          this.y -= directionY * 0.8;
        }
      }

      this.x += this.vx;
      this.y += this.vy;

      // Wrap around bounds smoothly
      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;
      if (this.y < -10) this.y = height + 10;
      if (this.y > height + 10) this.y = -10;

      this.draw();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 14000), 95);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connect() {
    const maxDist = 125;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDist) {
          const opacity = (1 - distance / maxDist) * 0.16;
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
    }
    connect();
    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Init
  resize();
  if (!prefersReducedMotion) {
    animate();
  } else {
    // Draw static snapshot
    for (let i = 0; i < particles.length; i++) {
      particles[i].draw();
    }
    connect();
  }
})();
