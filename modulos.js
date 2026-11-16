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

  if (toggle) {
    toggle.addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  const language = new URLSearchParams(window.location.search).get("lang");
  document.querySelectorAll("[data-language]").forEach(link => {
    if (link.getAttribute("data-language") === language) link.classList.add("is-active");
  });

  function initializeGallery(gallery) {
    if (gallery.dataset.galleryReady === "true") return;

    const slides = Array.from(gallery.querySelectorAll("[data-gallery-slide]"));
    const stage = gallery.querySelector(".project-carousel-stage");
    const controls = gallery.querySelector("[data-gallery-controls]");
    const dotsHost = gallery.querySelector("[data-gallery-dots]");
    const counter = gallery.querySelector("[data-gallery-counter]");
    const previous = gallery.querySelector("[data-gallery-prev]");
    const next = gallery.querySelector("[data-gallery-next]");

    if (!slides.length || !stage) return;

    let current = 0;
    let pointerStartX = null;

    const updateCounter = () => {
      if (counter) {
        counter.textContent =
          String(current + 1).padStart(2, "0") + " / " +
          String(slides.length).padStart(2, "0");
      }
    };

    const show = (requestedIndex) => {
      current = (requestedIndex + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        const active = index === current;
        slide.hidden = !active;
        slide.setAttribute("aria-hidden", active ? "false" : "true");
      });

      gallery.querySelectorAll("[data-gallery-dot]").forEach((dot, index) => {
        const active = index === current;
        dot.classList.toggle("is-active", active);
        if (active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });

      updateCounter();
    };

    if (slides.length === 1) {
      show(0);
      if (controls) controls.hidden = true;
      if (previous) previous.hidden = true;
      if (next) next.hidden = true;
      gallery.dataset.galleryReady = "true";
      gallery.dataset.galleryCount = "1";
      return;
    }

    if (controls) controls.hidden = false;

    if (dotsHost) {
      dotsHost.replaceChildren();
      slides.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "project-carousel-dot";
        dot.setAttribute("data-gallery-dot", "");
        dot.setAttribute("aria-label", "Mostrar imagem " + (index + 1) + " de " + slides.length);
        dot.addEventListener("click", () => show(index));
        dotsHost.appendChild(dot);
      });
    }

    if (previous) previous.addEventListener("click", () => show(current - 1));
    if (next) next.addEventListener("click", () => show(current + 1));

    // Permite navegar por teclado quando o foco está na galeria.
    gallery.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(current - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        show(current + 1);
      }
    });

    // Swipe horizontal para navegação em telas touch.
    stage.addEventListener("pointerdown", event => {
      if (event.pointerType === "mouse") return;
      pointerStartX = event.clientX;
    });

    stage.addEventListener("pointerup", event => {
      if (pointerStartX === null) return;
      const deltaX = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(deltaX) < 38) return;
      show(deltaX < 0 ? current + 1 : current - 1);
    });

    stage.addEventListener("pointercancel", () => {
      pointerStartX = null;
    });

    gallery.dataset.galleryCount = String(slides.length);
    gallery.dataset.galleryReady = "true";
    show(0);
  }

  function initializeAllGalleries() {
    document.querySelectorAll("[data-project-gallery]").forEach(initializeGallery);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAllGalleries, { once: true });
  } else {
    initializeAllGalleries();
  }
})();