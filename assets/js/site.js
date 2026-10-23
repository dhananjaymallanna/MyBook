document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileNavigation = document.querySelector(".mobile-nav");
  const searchInput = document.querySelector("#site-search-input");
  const searchForm = document.querySelector(".site-search");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchList = searchOverlay?.querySelector(".search-results-list");
  const searchCount = searchOverlay?.querySelector(".search-results-count");
  const searchQuery = searchOverlay?.querySelector(".search-query");
  const searchTitle = searchOverlay?.querySelector(".has-results .search-results-title");
  const noResultsTitle = searchOverlay?.querySelector(".no-results .search-results-title");
  const chapterRail = document.querySelector(".chapter-rail");
  const chapterToggle = document.querySelector(".chapter-rail-toggle");
  let searchIndex;

  mobileToggle?.addEventListener("click", () => {
    const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
    mobileNavigation.hidden = isExpanded;
  });

  chapterToggle?.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("chapter-rail-open");
    chapterToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNavigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNavigation.hidden = true;
      mobileToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const closeSearch = () => searchOverlay?.classList.remove("open", "no-results");

  const loadSearchIndex = async () => {
    if (!searchIndex) {
      const response = await fetch(searchOverlay.dataset.searchIndex);
      if (!response.ok) throw new Error("Search index could not be loaded.");
      searchIndex = await response.json();
    }
    return searchIndex;
  };

  const showSearchResults = async (query) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery || !searchOverlay || !searchList) {
      closeSearch();
      return;
    }

    try {
      const index = await loadSearchIndex();
      const results = Object.entries(index)
        .filter(([, item]) => `${item.title} ${item.body}`.toLowerCase().includes(normalizedQuery))
        .sort(([, first], [, second]) => {
          const firstTitleMatch = first.title.toLowerCase().includes(normalizedQuery);
          const secondTitleMatch = second.title.toLowerCase().includes(normalizedQuery);
          return Number(secondTitleMatch) - Number(firstTitleMatch);
        })
        .slice(0, 12);

      searchList.replaceChildren();
      searchCount.textContent = results.length;
      searchQuery.textContent = query.trim();
      searchTitle.hidden = results.length === 0;
      noResultsTitle.hidden = results.length > 0;
      searchOverlay.classList.add("open");
      searchOverlay.classList.toggle("no-results", results.length === 0);

      results.forEach(([url, item]) => {
        const listItem = document.createElement("li");
        const heading = document.createElement("h3");
        const link = document.createElement("a");
        const excerpt = document.createElement("p");

        link.href = url;
        link.textContent = item.title;
        heading.append(link);
        excerpt.textContent = item.body.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 260);
        listItem.className = "search-results-item";
        listItem.append(heading, excerpt);
        searchList.append(listItem);
      });
    } catch (error) {
      searchList.replaceChildren();
      searchQuery.textContent = query.trim();
      searchTitle.hidden = true;
      noResultsTitle.textContent = "Search is temporarily unavailable.";
      noResultsTitle.hidden = false;
      searchOverlay.classList.add("open", "no-results");
    }
  };

  searchInput?.addEventListener("input", () => showSearchResults(searchInput.value));
  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (searchInput?.value.trim()) showSearchResults(searchInput.value);
  });

  document.addEventListener("click", (event) => {
    if (!searchOverlay?.contains(event.target) && !searchForm?.contains(event.target)) closeSearch();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      searchInput?.focus();
    }

    if (event.key === "Escape") {
      document.body.classList.remove("chapter-rail-open");
      chapterToggle?.setAttribute("aria-expanded", "false");
      if (mobileNavigation) mobileNavigation.hidden = true;
      mobileToggle?.setAttribute("aria-expanded", "false");
      searchInput?.blur();
      closeSearch();
    }
  });

  if (chapterRail && chapterToggle) {
    chapterToggle.hidden = false;
  }
});