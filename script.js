// ── Typing Animation ────────────────────────────────
(function () {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    'Unity3D Game Developer',
    'DevOps & Cloud Engineer',
    'Building Unity libraries',
    'Automating everything',
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        return setTimeout(tick, 2000);
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? 40 : 80);
  }

  setTimeout(tick, 600);
})();

// ── Intersection Observer (fade-in on scroll) ───────
(function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();
