/* ========================================
   History - La storia del festival
   ======================================== */

/* ------------------------------------------
   EDIZIONE CORRENTE
   Qui l'edizione e' sempre l'anno in corso,
   calcolata automaticamente.
   ------------------------------------------ */
const EDIZIONE = new Date().getFullYear();

const annoCorrente = document.querySelector("#anno-corrente");

if (annoCorrente) {
  annoCorrente.textContent = EDIZIONE;
}

// Evento: click sul titolo hero -> log in console (esempio di listener)
const heroTitolo = document.querySelector(".hero-titolo");

if (heroTitolo) {
  heroTitolo.addEventListener("click", function () {
    console.log("Hai cliccato il titolo della storia di RUM!");
  });
}
