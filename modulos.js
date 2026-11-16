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

  // Visualizador compartilhado: cada instância mantém sua própria galeria e sequência.
  const lightbox = document.createElement("dialog");
  lightbox.className = "gallery-lightbox";
  lightbox.setAttribute("aria-label", "Visualização de imagens em tela cheia");
  lightbox.innerHTML = `
    <div class="gallery-lightbox-shell">
      <div class="gallery-lightbox-toolbar">
        <div class="gallery-lightbox-heading">
          <strong data-lightbox-title>Galeria de imagens</strong>
          <span data-lightbox-caption></span>
        </div>
        <button class="gallery-lightbox-close" type="button" data-lightbox-close aria-label="Fechar visualização" title="Fechar (Esc)">×</button>
      </div>
      <div class="gallery-lightbox-stage" data-lightbox-stage>
        <button class="gallery-lightbox-arrow" type="button" data-lightbox-prev aria-label="Imagem anterior" title="Imagem anterior"><span class="icon-chevron-left" aria-hidden="true"></span></button>
        <img class="gallery-lightbox-image" data-lightbox-image alt="">
        <button class="gallery-lightbox-arrow" type="button" data-lightbox-next aria-label="Próxima imagem" title="Próxima imagem"><span class="icon-chevron-right" aria-hidden="true"></span></button>
      </div>
      <div class="gallery-lightbox-footer">
        <span class="gallery-lightbox-hint">Use as setas do teclado para navegar</span>
        <span class="gallery-lightbox-counter" data-lightbox-counter></span>
      </div>
    </div>`;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  const lightboxTitle = lightbox.querySelector("[data-lightbox-title]");
  const lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
  const lightboxCounter = lightbox.querySelector("[data-lightbox-counter]");
  const lightboxPrev = lightbox.querySelector("[data-lightbox-prev]");
  const lightboxNext = lightbox.querySelector("[data-lightbox-next]");
  const lightboxStage = lightbox.querySelector("[data-lightbox-stage]");
  let activeLightboxGallery = null;
  let lightboxPointerStartX = null;

  function updateLightbox(slides, index, gallery) {
    const slide = slides[index];
    if (!slide) return;
    lightboxImage.src = slide.currentSrc || slide.src;
    lightboxImage.alt = slide.alt || "Imagem do projeto";
    lightboxTitle.textContent = gallery.getAttribute("aria-label") || "Galeria de imagens";
    lightboxCaption.textContent = slide.alt || "";
    lightboxCounter.textContent =
      String(index + 1).padStart(2, "0") + " / " +
      String(slides.length).padStart(2, "0");
    lightboxPrev.hidden = slides.length < 2;
    lightboxNext.hidden = slides.length < 2;
  }

  function openGalleryLightbox(gallery, slides, index, showSlide) {
    activeLightboxGallery = { gallery, slides, show: showSlide, index };
    showSlide(index);
    if (!lightbox.open) lightbox.showModal();
  }

  function navigateLightbox(direction) {
    if (!activeLightboxGallery) return;
    activeLightboxGallery.show(activeLightboxGallery.index + direction);
  }

  lightbox.querySelector("[data-lightbox-close]").addEventListener("click", () => lightbox.close());
  lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  lightboxNext.addEventListener("click", () => navigateLightbox(1));
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    activeLightboxGallery = null;
    lightboxImage.removeAttribute("src");
  });

  document.addEventListener("keydown", event => {
    if (!lightbox.open) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigateLightbox(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      navigateLightbox(1);
    }
  });

  lightboxStage.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse") return;
    lightboxPointerStartX = event.clientX;
  });
  lightboxStage.addEventListener("pointerup", event => {
    if (lightboxPointerStartX === null) return;
    const deltaX = event.clientX - lightboxPointerStartX;
    lightboxPointerStartX = null;
    if (Math.abs(deltaX) >= 42) navigateLightbox(deltaX < 0 ? 1 : -1);
  });
  lightboxStage.addEventListener("pointercancel", () => {
    lightboxPointerStartX = null;
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

      if (activeLightboxGallery && activeLightboxGallery.gallery === gallery) {
        activeLightboxGallery.index = current;
        updateLightbox(slides, current, gallery);
      }
    };

    // O botão de ampliar existe inclusive nas galerias com apenas uma imagem.
    const zoomButton = document.createElement("button");
    zoomButton.type = "button";
    zoomButton.className = "project-carousel-zoom";
    zoomButton.setAttribute("aria-label", "Ver imagem em tela cheia");
    zoomButton.title = "Ver imagem em tela cheia";
    zoomButton.innerHTML = '<span aria-hidden="true">⛶</span>';
    zoomButton.addEventListener("click", event => {
      event.stopPropagation();
      openGalleryLightbox(gallery, slides, current, show);
    });
    stage.appendChild(zoomButton);

    slides.forEach((slide, index) => {
      slide.addEventListener("click", () => openGalleryLightbox(gallery, slides, index, show));
    });

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