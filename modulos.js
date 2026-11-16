(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (icon) icon.className = theme === "dark" ? "icon-sun" : "icon-moon";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#150f18" : "#fff7fa");
    try { localStorage.setItem("portfolio-theme", theme); } catch (error) {}
  }

  let initial = "dark";
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") initial = saved;
  } catch (error) {}
  applyTheme(initial);
  if (toggle) toggle.addEventListener("click", () => {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  const language = new URLSearchParams(window.location.search).get("lang");
  document.querySelectorAll("[data-language]").forEach(link => {
    if (link.getAttribute("data-language") === language) link.classList.add("is-active");
  });

  document.querySelectorAll("[data-project-gallery]").forEach(gallery => {
    const slides = Array.from(gallery.querySelectorAll("[data-gallery-slide]"));
    const controls = gallery.querySelector("[data-gallery-controls]");
    const dotsHost = gallery.querySelector("[data-gallery-dots]");
    const counter = gallery.querySelector("[data-gallery-counter]");
    const previous = gallery.querySelector("[data-gallery-prev]");
    const next = gallery.querySelector("[data-gallery-next]");
    if (!slides.length) return;

    let current = 0;
    if (slides.length === 1) {
      slides[0].hidden = false;
      slides[0].setAttribute("aria-hidden", "false");
      if (controls) controls.hidden = true;
      if (previous) previous.hidden = true;
      if (next) next.hidden = true;
      return;
    }
    if (controls) controls.hidden = false;

    const dots = slides.map((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "project-carousel-dot";
      dot.setAttribute("aria-label", "Mostrar imagem " + (index + 1) + " de " + slides.length);
      dot.addEventListener("click", () => show(index));
      if (dotsHost) dotsHost.appendChild(dot);
      return dot;
    });

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === current;
        slide.hidden = !active;
        slide.setAttribute("aria-hidden", active ? "false" : "true");
      });
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle("is-active", active);
        if (active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      if (counter) counter.textContent = String(current + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    }

    if (previous) previous.addEventListener("click", () => show(current - 1));
    if (next) next.addEventListener("click", () => show(current + 1));
    show(0);
    gallery.setAttribute("data-gallery-ready", "true");
  });
})();