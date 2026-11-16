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
})();