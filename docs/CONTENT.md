# Inhalte schreiben

Die App kennt kein Deutsch. Sie kennt **Folientypen** und **Aufgabentypen**.
Alles andere sind Daten. Eine neue Einheit — oder ein ganzes neues Niveau —
ist deshalb nur eine neue Datei plus eine Zeile in der Registry.

---

## Eine Einheit anlegen

1. Datei erstellen: `content/a1/u13.js` (oder `content/a2/u01.js`).
2. Datei in `content/registry.js` in `DE.contentFiles` eintragen — die
   Reihenfolge dort ist die Reihenfolge auf der Startseite.
3. Neu laden. Fertig.

```js
(function () {
  window.DE.registerUnit({
    id: 'a1-13',              // eindeutig, taucht in der URL auf
    level: 'A1',              // muss zu einer registrierten Ebene passen
    num: 13,                  // die Zahl auf der Kachel
    minutes: 35,              // Zeitschätzung
    title: 'Titel der Einheit',
    subtitle: 'Kurz, was drin ist · getrennt mit ·',
    can: ['Du kannst …', 'Du kannst …'],   // Lernziele auf der Einheitsseite
    slides: [ /* siehe unten */ ],
    quiz:   [ /* siehe unten */ ]
  });
})();
```

`vocab` wird **nicht** von Hand gepflegt — die App sammelt den Wortschatz der
Einheit automatisch aus allen `vocab`-Folien ein.

---

## Ein neues Niveau (A2, B1, B2)

In `content/registry.js` steht das Niveau schon — auf `status: 'soon'`.
Sobald die erste Einheit existiert, auf `'open'` stellen:

```js
DE.registerLevel({
  id: 'A2', status: 'open',
  name: 'Grundlagen+',
  blurb: 'Nebensätze, Meinung sagen, Telefonate'
});
```

Die Einheitenzahl auf der Kachel wird gezählt, nicht eingetragen.

---

## Folientypen

Jede Folie hat `t` (Typ) und optional `kicker`, `title`, `lead`,
`note` (Merkkasten) und `noteKind` (`'warn'` rot · `'win'` grün · sonst blau).

### `goal` — Einstieg
```js
{ t:'goal', kicker:'Einheit 13', title:'…', lead:'…',
  points:['Erstes Ziel', 'Zweites Ziel'], body:'Absatz\nNoch ein Absatz' }
```

### `vocab` — Wortschatz mit Ton
Jede Zeile ist ein Array: `[deutsch, englisch, Beispielsatz, Übersetzung, vorlesenAls?]`
```js
{ t:'vocab', title:'…', items:[
  ['der Tisch','table','Der Tisch ist frei.','The table is free.'],
  ['hdf','shut up','hdf, keiner hat gefragt','…','halt die Fresse']  // 5. Feld: was vorgelesen wird
]}
```
Substantive **immer mit Artikel** — davon hängen die Farben und das Glossar ab.

### `dialog` — Dialog mit Übersetzung zum Aufdecken
```js
{ t:'dialog', title:'…', setting:'Wo das spielt, und ob geduzt wird.',
  lines:[ ['Lena','Was geht?','What\'s up?'], ['Max','Nicht viel.','Not much.'] ]}
```

### `grammar` — Erklärung, Tabelle, Beispiele
```js
{ t:'grammar', title:'…',
  body:'Absatz mit *fett*.\nZweiter Absatz.',
  table:{ head:['Person','Form'], rows:[['ich','*bin*'],['du','*bist*']] },
  examples:[ ['Ich bin da.','I am here.'] ] }
```

### `street` — Straßendeutsch
```js
{ t:'street', title:'…', lead:'…', items:[
  ['Was geht?','What\'s up?','Wann und zu wem man das sagt.']
]}
```

### `pattern` — Satzbaukasten zum Antippen
`{}` ist der Platzhalter, `swaps` sind `[deutsch, englisch]`.
```js
{ t:'pattern', title:'…', frame:'Ich komme aus {}.', enFrame:'I\'m from {}.',
  slotLabel:'Land', swaps:[ ['Amerika','America'], ['Polen','Poland'] ] }
```

### `drill` — Übungen mitten in der Präsentation
```js
{ t:'drill', title:'…', ex:[ /* Aufgaben, Format siehe unten */ ] }
```

### `culture` / `recap`
```js
{ t:'culture', title:'…', body:'Absatz\nAbsatz' }
{ t:'recap',   title:'…', points:['Merksatz 1','Merksatz 2'] }
```

---

## Aufgabentypen

Sie funktionieren in `quiz` und in `drill`-Folien identisch.

```js
// Auswahl — a ist der Index der richtigen Option
{ k:'choice', q:'Frage?', opts:['falsch','richtig'], a:1, why:'Erklärung danach.' }

// Lücke — ___ wird als Lücke gerendert, a ist die Liste akzeptierter Antworten
{ k:'fill', q:'Ich ___ Anna.', a:['heiße'], en:'My name is Anna.', hint:'heißen', why:'…' }

// Übersetzen
{ k:'trans', en:'My name is Max.', a:['Ich heiße Max.','Ich bin Max.'], hint:'…' }

// Hören und tippen — de wird vorgelesen
{ k:'listen', de:'Wie geht es dir?', a:['Wie geht es dir'], en:'How are you?' }

// Satz bauen — words müssen exakt die Wörter von a sein
{ k:'order', en:'Where do you live?', words:['Wo','wohnst','du'], a:'Wo wohnst du' }

// Zuordnen
{ k:'match', q:'Was passt zusammen?', pairs:[ ['eins','one'], ['zwei','two'] ] }
```

**Korrektur ist absichtlich nachsichtig.** Groß-/Kleinschreibung, Satzzeichen
am Ende und `ae/oe/ue/ss` statt `ä/ö/ü/ß` werden akzeptiert. Alles, was sonst
noch durchgehen soll, gehört in das Array `a`.

`why` erscheint nach der Antwort — nutz es für die Regel, nicht für Lob.

---

## Formatierung in Texten

In `title`, `lead`, `body`, Tabellenzellen, `points`, `why` und Fragen:

| Schreibweise | Ergebnis |
|---|---|
| `*Text*` | **fett** — für die Form, um die es geht |
| `_Text_` | *kursiv* |
| `` `Text` `` | `Code` |

Alles andere wird escaped. HTML in Inhaltsdateien funktioniert nicht — das ist Absicht.

---

## Stilregeln für diesen Kurs

- **Artikel immer mitschreiben.** `der Tisch`, nie `Tisch`.
- **Beispielsätze müssen benutzbar sein.** „Der Hund ist braun“ hilft niemandem.
  „Hast du mal Feuer?“ schon.
- **Umgangssprache kennzeichnen.** In `street`-Folien gehört in die dritte Spalte,
  *zu wem* man das sagen kann — und zu wem nicht.
- **Keine erfundene Jugendsprache.** Wenn du nicht belegen kannst, dass es jemand
  wirklich sagt, kommt es nicht rein.
- **`why` erklärt die Regel**, nicht die einzelne Aufgabe.

---

## Nach dem Schreiben

```bash
node --check content/a1/u13.js   # Syntax
npm test                          # Struktur + gesamte App
```

Der Test prüft unter anderem, dass jede `order`-Aufgabe genau die Wörter
anbietet, die den Lösungssatz ergeben, dass jeder `choice`-Index existiert
und dass kein Wort doppelt im Glossar landet.
