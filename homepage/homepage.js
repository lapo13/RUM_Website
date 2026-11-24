/* ========================================
   Homepage - RUM
   ======================================== */

/* ------------------------------------------
   EDIZIONE CORRENTE
   Cambia solo questo numero quando inizia
   una nuova edizione: tutti i campi della
   pagina (titolo, hero, sezioni, bottone)
   si aggiornano automaticamente.
   ------------------------------------------ */
const EDIZIONE = 2026;

// Riempie tutti i segnaposto <span class="edizione">
document.querySelectorAll(".edizione").forEach(function (el) {
  el.textContent = EDIZIONE;
});

// Aggiorna anche il titolo della scheda del browser
document.title = "RUM " + EDIZIONE + " | Rock Un Monte";

/* ========================================
   Artisti: lista + scheda modale
   ======================================== */

const artists = [
  "Artista A",
  "Artista B",
  "Artista C"
];

// Banca dati delle schede artista (aggiungi qui i veri artisti)
const schede = {
  "Artista A": {
    descrizione: "Prima band in scaletta: energia punk e ritmiche serrate.",
    genere: "Punk rock",
    palco: "Apre il festival il primo giorno sul palco principale.",
    spotify: "https://open.spotify.com/search/Artista%20A",
    apple: "https://music.apple.com/search?term=Artista%20A",
    sito: "https://example.com/artista-a"
  },
  "Artista B": {
    descrizione: "Suoni indie con melodie orecchiabili e chitarre jangly.",
    genere: "Indie rock",
    palco: "Secondo concerto della prima serata.",
    spotify: "https://open.spotify.com/search/Artista%20B",
    apple: "https://music.apple.com/search?term=Artista%20B",
    sito: "https://example.com/artista-b"
  },
  "Artista C": {
    descrizione: "Set serale di chiusura con atmosfere elettroniche e luci.",
    genere: "Rock alternativo / Elettronica",
    palco: "Chiude il festival sull'ultimo palco.",
    spotify: "https://open.spotify.com/search/Artista%20C",
    apple: "https://music.apple.com/search?term=Artista%20C",
    sito: "https://example.com/artista-c"
  }
};

const artistGrid = document.querySelector(".artist-grid");
const modal = document.querySelector("#modal-artista");
const modalChiudi = document.querySelector("#modal-chiudi");

// 1) Costruisce la lista: ogni artista e' un bottone che apre la scheda
if (artistGrid && modal) {
  for (const artist of artists) {
       const card = document.createElement("button");
       card.type = "button";
       card.className = "artist-card";
       card.textContent = artist;

       card.addEventListener("click", function () {
         apriScheda(artist);
       });

       artistGrid.appendChild(card);
  }
}

// 2) Apre la scheda modale con i dati dell'artista
function apriScheda(nome) {
  const scheda = schede[nome] || {
    descrizione: "Artista in programma a Rock Un Monte: dettagli in arrivo.",
    genere: "Da annunciare",
    palco: "Palco e orario saranno comunicati nel programma.",
    spotify: "https://open.spotify.com",
    apple: "https://music.apple.com",
    sito: "https://example.com"
  };

  document.querySelector("#artista-nome").textContent = nome;
  document.querySelector("#artista-descrizione").textContent = scheda.descrizione;
  document.querySelector("#artista-genere").textContent = scheda.genere;
  document.querySelector("#artista-palco").textContent = scheda.palco;
  document.querySelector("#link-spotify").href = scheda.spotify;
  document.querySelector("#link-apple").href = scheda.apple;
  document.querySelector("#link-sito").href = scheda.sito;

  modal.classList.remove("hidden");
}

// 3) Chiude la scheda: tasto X, click sullo sfondo, oppure tasto Escape
if (modal && modalChiudi) {
  modalChiudi.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.classList.add("hidden");
    }
  });
}

/* ========================================
   Eventi: il bottone dei biglietti
   ======================================== */

const bottone = document.querySelector("#biglietti-btn");
const messaggio = document.querySelector("#biglietti-messaggio");

if (bottone && messaggio) {
  // CLICK: si attiva quando l'utente clicca il bottone
  bottone.addEventListener("click", function () {
    messaggio.textContent = "Posto prenotato! Ci vediamo a Montespertoli!";
    bottone.textContent = "Prenotato";
    bottone.classList.add("prenotato"); // aggiunge una classe CSS
  });

  // MOUSEENTER: quando il cursore entra sopra il bottone
  bottone.addEventListener("mouseenter", function () {
    console.log("Il cursore e' sopra il bottone!");
  });

  // MOUSELEAVE: quando il cursore esce dal bottone
  bottone.addEventListener("mouseleave", function () {
    console.log("Il cursore ha lasciato il bottone.");
  });
}
