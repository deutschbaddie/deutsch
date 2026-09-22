# Deutsch Lab

Ein kompletter A1-Deutschkurs als Website. Präsentationen zum Durchklicken,
echtes Alltagsdeutsch, Aussprache auf jedem Wort, Übungen mit Korrektur,
ein Vokabeltrainer mit Spaced Repetition — und ein Decoder für das Deutsch,
das auf TikTok und in Kommentaren vorkommt.

Kein Build, kein Framework, keine Abhängigkeiten. Doppelklick auf
`index.html` reicht.

---

## Was drin ist

| | |
|---|---|
| **12 Einheiten** | der komplette A1-Stoff, von „Hallo“ bis Perfekt |
| **140 Folien** | Wortschatz, Dialoge, Grammatik, Straßendeutsch, Kultur |
| **461 Wörter** | alle mit Beispielsatz, Aussprache und Forvo-Link |
| **172 Übungen** | Auswahl, Lücken, Satzbau, Hören, Übersetzen, Zuordnen |
| **70 Decoder-Einträge** | Slang, Kommentar-Abkürzungen, Füllwörter, Jugendwort 2026 |
| **Trainer** | Leitner-Boxen, Karten kommen wieder, wenn sie fällig sind |

Jede Einheit dauert etwa 35–40 Minuten: Präsentation, Übungen, Wörter.

### Die A1-Einheiten

1. **Hallo! Wer bist du?** — Begrüßung, sich vorstellen, `sein`, W-Fragen, du/Sie
2. **Zahlen, Uhrzeit, Termine** — Zahlen bis 1 Mio., Uhrzeit, `haben`, Kalender
3. **Familie und Leute** — Possessivartikel, Berufe, Menschen beschreiben
4. **der, die, das** — Artikel raten, Plural, **Akkusativ**, `kein` vs. `nicht`
5. **Mein Tag** — **Verb an Position 2**, trennbare Verben, Tagesablauf
6. **Essen und Trinken** — bestellen, zahlen, `mögen` vs. `möchten`
7. **Einkaufen** — Preise, Kleidung, Farben, `dieser/welcher`
8. **Wohnen** — Möbel, `es gibt`, **Dativ** nach Ortspräpositionen
9. **Stadt, Wege, Bahn** — Wegbeschreibung, **Imperativ**, `zu`/`nach`/`in`
10. **Können, müssen, wollen** — **Modalverben**, Satzklammer, sich verabreden
11. **Körper, Gesundheit, Gefühle** — beim Arzt, **Dativpronomen** (`mir`, `dir`)
12. **Was war gestern?** — **Perfekt**, `haben` oder `sein`, Wetter, erzählen

---

## Starten

**Am einfachsten:** `index.html` im Browser öffnen. Fertig.

**Mit lokalem Server** (empfohlen, wenn du Inhalte bearbeitest):

```bash
python3 -m http.server 8000
# dann http://localhost:8000 aufrufen
```

**Online stellen:** Repository-Einstellungen → Pages → Branch wählen →
Ordner `/ (root)`. Die Seite ist eine statische Site, sie läuft dort ohne
weitere Konfiguration.

---

## Wie du damit lernst

Die Reihenfolge ist Absicht — 35 Minuten am Tag:

1. **Trainer zuerst** (0–6 min) — fällige Karten wegarbeiten, solange der Kopf frisch ist.
2. **Eine Präsentation** (6–24 min) — eine Einheit durchgehen, alles **laut** mitsprechen.
3. **Übungen** (24–32 min) — unter 80 % heißt: Folien nochmal.
4. **Decoder + ein Satz** (32–35 min) — drei Einträge lesen, dann einen echten Satz über deinen Tag schreiben.

Tastatur in der Präsentation: `←` `→` blättern, `Esc` schließen.
Im Trainer: `Leertaste` umdrehen, `1` / `2` / `3` bewerten.

### Aussprache — zwei Quellen, klar getrennt

- **▶︎** benutzt die deutsche Stimme deines Geräts. Sofort, offline, aber synthetisch.
  Falls dein Gerät keine hat, sagt die Seite das und du installierst eine in den
  Systemeinstellungen.
- **🗣** öffnet [Forvo](https://forvo.com) — dort sprechen echte Menschen das Wort.
  Für alles, wo dir die Melodie wichtig ist, nimm diesen Link.

Es wird nirgends KI-generiertes Deutsch als „echt“ ausgegeben. Jeder Dialog,
jeder Slang-Eintrag und jede Kulturnotiz ist als das gekennzeichnet, was sie ist.

---

## Fortschritt

Alles liegt in `localStorage` deines Browsers — kein Konto, kein Server,
keine Daten verlassen das Gerät. Das heißt auch: anderer Browser oder
privates Fenster = anderer Fortschritt. „Fortschritt löschen“ steht unten
auf der Seite **Ich**.

---

## Aufbau des Codes

```
index.html              lädt alles, sonst nichts
assets/css/app.css      Design-Tokens, Dark/Light, responsive
assets/js/
  core.js               State, Speichern, Content-Registry, Router
  audio.js              Sprachausgabe + Forvo
  srs.js                Leitner-Boxen
  exercises.js          ein Renderer pro Aufgabentyp + Quiz-Runner
  deck.js               Präsentationsplayer, ein Renderer pro Folientyp
  views.js              die Screens
  app.js                Boot, Einstellungen
content/
  registry.js           Niveaus + Liste der Inhaltsdateien  ← hier erweitern
  decoder.js            TikTok-/Slang-Datenbank
  a1/u01.js … u12.js    je eine Einheit
docs/CONTENT.md         wie man Einheiten schreibt (Formatreferenz)
tests/smoke.js          Browsertest: alle Aufgabentypen, Quiz, Trainer, Inhalte
```

Inhalt ist reine Daten. Die App weiß nichts über Deutsch — sie rendert
Folientypen und Aufgabentypen. Deshalb ist A2/B1/B2 kein Umbau, sondern
nur neue Dateien: siehe `docs/CONTENT.md`.

---

## Tests

```bash
npm install     # nur playwright-core
npm test
```

Der Test startet einen lokalen Server, fährt einen echten Chromium hoch und prüft:
jeder Aufgabentyp bewertet richtig **und** falsch korrekt, der Quiz-Runner läuft
bis zum Ergebnis durch, eine durchgeklickte Präsentation füllt den Trainer,
Fortschritt überlebt einen Reload, es gibt keine JS-Fehler — und alle Inhalte
sind strukturell sauber (bei `order`-Aufgaben etwa, dass die Wortkarten
tatsächlich den Lösungssatz ergeben).
