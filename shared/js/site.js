/* ========================================
   RUM - "chrome" comune del sito
   Monta header (logo + navbar) e footer in ogni
   pagina, a partire dagli attributi sull'header:

     <header id="site-header" data-page="home" data-logo="Rock Un Monte"></header>
     <footer id="site-footer"></footer>

   - data-page: "home" oppure "history" (decide quale link e' "active")
   - data-logo: testo dell'<h1> in alto a sinistra
   ======================================== */
(function () {
  // Prefisso per tornare alla root del sito: tutte le pagine con
  // navbar vivono in sottocartelle di primo livello (homepage/, history/)
  const ROOT = "../";

  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (!header) return;

  const page = header.getAttribute("data-page") || "home";
  const logo = header.getAttribute("data-logo") || "RUM";

  // Definizione unica dei link di navigazione
  const links = [
    { label: "Home", target: "home", hash: null, cls: "nav-link" },
    { label: "Programma", target: "home", hash: "programma", cls: "nav-link" },
    { label: "Artisti", target: "home", hash: "artisti", cls: "nav-link" },
    { label: "La storia del festival", target: "history", hash: null, cls: "nav-cta" }
  ];

  function hrefFor(link) {
    const file = link.target === "home" ? "homepage/index.html" : "history/index.html";
    if (link.target === page) {
      // Stessa pagina: solo hash, cosi' non si ricarica nulla
      return link.hash ? "#" + link.hash : "index.html";
    }
    return ROOT + file + (link.hash ? "#" + link.hash : "");
  }

  // La voce attiva e' quella della pagina corrente senza anchor
  // (Home sulla homepage, il CTA sulla pagina storia)
  function isActive(link) {
    return link.target === page && !link.hash;
  }

  const h1 = document.createElement("h1");
  h1.textContent = logo;

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  for (const link of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = isActive(link) ? link.cls + " active" : link.cls;
    a.href = hrefFor(link);
    a.textContent = link.label;
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);

  header.appendChild(h1);
  header.appendChild(nav);

  if (footer) {
    const p = document.createElement("p");
    p.textContent = "Prodotto - Vitamina M";
    footer.appendChild(p);
  }
})();
