(() => {
  const form = document.querySelector(".search-form");
  const input = document.querySelector("#site-search");
  const results = document.querySelector("#search-results");
  const indexNode = document.querySelector("#search-index");

  if (!form || !input || !results || !indexNode) return;

  let articles = [];
  try {
    articles = JSON.parse(indexNode.textContent || "[]");
  } catch (error) {
    results.hidden = false;
    results.textContent = "No se pudo cargar el índice de búsqueda.";
    return;
  }

  const normalize = (value) =>
    String(value || "")
      .toLocaleLowerCase("es")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  const makeResult = (article) => {
    const link = document.createElement("a");
    link.className = "search-result";
    link.href = article.url;

    const title = document.createElement("strong");
    title.textContent = article.title;
    const category = document.createElement("span");
    category.className = "search-result-category";
    category.textContent = article.category;
    const summary = document.createElement("span");
    summary.className = "search-result-summary";
    summary.textContent = article.summary;

    link.append(title, category, summary);
    return link;
  };

  const renderResults = () => {
    const query = normalize(input.value);
    results.replaceChildren();

    if (!query) {
      results.hidden = true;
      return;
    }

    const terms = query.split(/\s+/).filter(Boolean);
    const matches = articles
      .map((article) => {
        const title = normalize(article.title);
        const category = normalize(article.category);
        const summary = normalize(article.summary);
        const content = normalize(article.content);
        const searchable = [title, category, summary, content].join(" ");
        const matched = terms.every((term) => searchable.includes(term));
        const score =
          (title.includes(query) ? 8 : 0) +
          (summary.includes(query) ? 4 : 0) +
          (category.includes(query) ? 2 : 0);
        return { article, matched, score };
      })
      .filter((item) => item.matched)
      .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title, "es"))
      .slice(0, 10);

    results.hidden = false;

    if (matches.length === 0) {
      const empty = document.createElement("p");
      empty.className = "search-empty";
      empty.textContent = "No encontramos una guía con esos términos. Probá con otra palabra o revisá las categorías.";
      results.append(empty);
      return;
    }

    const label = document.createElement("p");
    label.className = "search-results-label";
    label.textContent = matches.length === 1 ? "1 resultado" : `${matches.length} resultados`;
    results.append(label, ...matches.map((item) => makeResult(item.article)));
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResults();
    results.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });

  input.addEventListener("input", renderResults);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      input.value = "";
      renderResults();
    }
  });
})();

