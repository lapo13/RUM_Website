# RUM | Rock Un Monte

Sito web del festival musicale **Rock Un Monte** di Montespertoli.

Sito statico (HTML + CSS + JavaScript vanilla), senza framework.

## Struttura

```
RUM_website/
├── homepage/
│   ├── index.html        Pagina principale: edizione corrente del festival
│   ├── homepage.js       Logica: EDIZIONE, artisti + scheda modale, bottone biglietti
│   ├── style.css         Stili (base condivisa + specifici homepage)
│   └── images/           Immagini della homepage
└── history/
    ├── index.html        Pagina "La storia del festival"
    ├── history.js        Logica: anno corrente dinamico
    └── style.css         Stili (stessa base della homepage)
```

## Convenzioni

- **Edizione corrente**: si cambia una sola riga in `homepage/homepage.js`
  (`const EDIZIONE = 2026;`) e tutti i campi della pagina si aggiornano.
- **Font unico**: `Arial, sans-serif` su entrambe le pagine.
- **Rotondità**: variabili `--radius` (16px) e `--radius-lg` (24px) in `:root`.
- **Nessuna emoji** nei contenuti.
- Ogni pagina carica il proprio script (`homepage.js`, `history.js`).

## Funzionalità attuali

- Navbar con bottone CTA verso la pagina della storia
- Griglia artisti a 1 colonna, celle cliccabili
- Scheda artista **modale** (tasto X, click sullo sfondo o Esc per chiudere)
  con link a Spotify, Apple Music e sito ufficiale
- Bottone "Biglietti" con eventi click/mouseenter/mouseleave
- Anno corrente calcolato dinamicamente nella pagina storia

## TODO

- [ ] **Pannello di modifica**: pagina `/admin` (o modale di editing) per modificare
      le sezioni del sito dal browser, senza toccare gli HTML — contenuti da un
      file `dati.json` letto/scritto via JS
- [ ] Sostituire "Artista A/B/C" con la lineup vera e i link streaming reali
- [ ] Inserire le date reali del programma 2026
- [ ] Aggiungere immagini degli artisti nella scheda modale
- [ ] Valutare una pagina `/programma` o `/contatti` dedicata

## Come visualizarlo

Apri `homepage/index.html` nel browser (doppio click o server locale,
es. `python3 -m http.server`).
