(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("#theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  if (!toggle) return;

  const applyTheme = (theme, persist = false) => {
    const selected = theme === "light" ? "light" : "dark";
    root.dataset.theme = selected;
    const light = selected === "light";
    toggle.setAttribute("aria-pressed", String(light));
    toggle.setAttribute("aria-label", light ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
    toggle.querySelector(".theme-toggle-icon").textContent = light ? "☾" : "☀";
    toggle.querySelector(".theme-toggle-label").textContent = light ? "Modo oscuro" : "Modo claro";
    if (themeColor) themeColor.content = light ? "#f7f4fa" : "#100d15";

    if (persist) {
      try {
        localStorage.setItem("support-theme", selected);
      } catch (error) {
        // Keep the selected mode for this visit if browser storage is unavailable.
      }
    }
  };

  applyTheme(root.dataset.theme || "light");
  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });
})();
