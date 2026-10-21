// 1. Nav background transition on scroll
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// 2. Scroll-reveal: add .visible so the CSS transition plays
const counters = new Set(document.querySelectorAll(".counter"));
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.addEventListener("transitionend", () => entry.target.classList.add("done"), { once: true });
      entry.target.querySelectorAll(".counter").forEach(countUp);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// 3. Number count-up for the stats
function countUp(el) {
  if (!counters.delete(el)) return;
  const target = Number(el.dataset.target);
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// 4. Animate.css on demand: play an animation, then clean up the classes
function animateCSS(el, name) {
  return new Promise((resolve) => {
    const classes = ["animate__animated", `animate__${name}`];
    el.classList.add(...classes);
    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove(...classes);
        resolve();
      },
      { once: true }
    );
  });
}

const btn = document.getElementById("wiggle-btn");
const toast = document.getElementById("toast");
btn.addEventListener("click", async () => {
  animateCSS(btn, "rubberBand");
  toast.hidden = false;
  await animateCSS(toast, "bounceIn");
});
