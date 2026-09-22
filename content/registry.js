/* ==========================================================================
   registry.js — the only file you touch when adding content
   Add a level: push a row into DE.levels below.
   Add a unit:  drop a file in content/<level>/ and list it in contentFiles.
   Nothing in assets/js needs to change.
   ========================================================================== */
(function () {
  'use strict';
  var DE = window.DE;

  DE.registerLevel({
    id: 'A1', status: 'open',
    name: 'Anfänger',
    blurb: 'sich vorstellen, einkaufen, bestellen, wohnen, erzählen, was war'
  });
  DE.registerLevel({
    id: 'A2', status: 'soon', name: 'Grundlagen+',
    blurb: 'Vergangenheit sicher, Nebensätze mit weil/dass, Meinung sagen, Telefonate'
  });
  DE.registerLevel({
    id: 'B1', status: 'soon', name: 'Selbstständig',
    blurb: 'Konjunktiv II, Passiv, Diskussionen, Bewerbung, Nachrichten verstehen'
  });
  DE.registerLevel({
    id: 'B2', status: 'soon', name: 'Operativ',
    blurb: 'Debatte, Fachtexte, Nuancen, Podcasts und Filme ohne Untertitel'
  });

  /* Load order = order on the home screen. */
  DE.contentFiles = [
    'content/decoder.js',
    'content/a1/u01.js',
    'content/a1/u02.js',
    'content/a1/u03.js',
    'content/a1/u04.js',
    'content/a1/u05.js',
    'content/a1/u06.js',
    'content/a1/u07.js',
    'content/a1/u08.js',
    'content/a1/u09.js',
    'content/a1/u10.js',
    'content/a1/u11.js',
    'content/a1/u12.js'
  ];
})();
