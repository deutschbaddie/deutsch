# Writing content

The app knows no German. It knows **slide types** and **exercise types**.
Everything else is data. So a new unit — or a whole new level — is just a new
file plus one line in the registry.

**Language rule:** every explanation, note, heading and question prompt is
written in **English**. German appears only as the material being taught —
vocabulary, dialogue lines, example sentences, grammar forms. Never explain
German in German.

---

## Adding a unit

1. Create the file: `content/a1/u13.js` (or `content/a2/u01.js`).
2. List it in `content/registry.js` under `DE.contentFiles` — that order is
   the order on the home screen.
3. Reload. Done.

```js
(function () {
  window.DE.registerUnit({
    id: 'a1-13',              // unique, shows up in the URL
    level: 'A1',              // must match a registered level
    num: 13,                  // the number on the card
    minutes: 35,              // time estimate
    title: 'Unit title in English',
    subtitle: 'Short summary of contents · separated with ·',
    can: ['Do this.', 'Do that.'],   // learning goals on the unit page
    slides: [ /* see below */ ],
    quiz:   [ /* see below */ ]
  });
})();
```

You do **not** maintain `vocab` by hand — the app collects the unit's
vocabulary automatically from every `vocab` slide.

---

## Adding a level (A2, B1, B2)

The level already exists in `content/registry.js` with `status: 'soon'`.
Once the first unit exists, flip it to `'open'`:

```js
DE.registerLevel({
  id: 'A2', status: 'open',
  name: 'Building up',
  blurb: 'subordinate clauses, giving opinions, phone calls'
});
```

The unit count on the card is counted, not typed.

---

## Slide types

Every slide has `t` (type) and optionally `kicker`, `title`, `lead`,
`note` (callout box) and `noteKind` (`'warn'` red · `'win'` green · otherwise blue).

### `goal` — opener
```js
{ t:'goal', kicker:'Unit 13', title:'…', lead:'…',
  points:['First goal', 'Second goal'], body:'Paragraph\nAnother paragraph' }
```

### `vocab` — vocabulary with audio
Each row is an array: `[german, english, exampleSentence, translation, sayAs?]`
```js
{ t:'vocab', title:'…', items:[
  ['der Tisch','table','Der Tisch ist frei.','The table is free.'],
  ['hdf','shut up','hdf, keiner hat gefragt','…','halt die Fresse']  // 5th field: what gets read aloud
]}
```
Nouns **always with their article** — the colours and the word list depend on it.

### `dialog` — dialogue with reveal-on-tap translation
```js
{ t:'dialog', title:'…', setting:'Where this happens, and whether they use du or Sie.',
  lines:[ ['Lena','Was geht?','What\'s up?'], ['Max','Nicht viel.','Not much.'] ]}
```

### `grammar` — explanation, table, examples
```js
{ t:'grammar', title:'…',
  body:'Paragraph with *bold*.\nSecond paragraph.',
  table:{ head:['Person','Form'], rows:[['ich','*bin*'],['du','*bist*']] },
  examples:[ ['Ich bin da.','I am here.'] ] }
```
Table headers are English. Table cells hold the German forms, and it helps to
append the translation after an em dash: `'Ich bin müde. — I’m tired.'`

### `street` — street German
Third field is where you say **who you can say this to**.
```js
{ t:'street', title:'…', lead:'…', items:[
  ['Was geht?','What\'s up?','Standard greeting among young people. Not to your boss.']
]}
```

### `pattern` — tap-to-swap sentence builder
`{}` is the slot, `swaps` are `[german, english]`.
```js
{ t:'pattern', title:'…', frame:'Ich komme aus {}.', enFrame:'I\'m from {}.',
  slotLabel:'country', swaps:[ ['Amerika','America'], ['Polen','Poland'] ] }
```

### `drill` — exercises in the middle of a lesson
```js
{ t:'drill', title:'…', ex:[ /* exercises, format below */ ] }
```

### `culture` / `recap`
```js
{ t:'culture', title:'…', body:'Paragraph\nParagraph' }
{ t:'recap',   title:'…', points:['Takeaway 1','Takeaway 2'] }
```

---

## Exercise types

Identical in `quiz` and in `drill` slides. Prompts in English, the German is
what's being tested.

```js
// Multiple choice — a is the index of the correct option
{ k:'choice', q:'Question in English?', opts:['wrong','right'], a:1, why:'Explanation shown after.' }

// Gap fill — ___ renders as a gap, a is the list of accepted answers
{ k:'fill', q:'Ich ___ Anna.', a:['heiße'], en:'My name is Anna.', hint:'from heißen', why:'…' }

// Translate into German
{ k:'trans', en:'My name is Max.', a:['Ich heiße Max.','Ich bin Max.'], hint:'…' }

// Listen and type — de is what gets spoken
{ k:'listen', de:'Wie geht es dir?', a:['Wie geht es dir'], en:'How are you?' }

// Build the sentence — words must be exactly the words in a
{ k:'order', en:'Where do you live?', words:['Wo','wohnst','du'], a:'Wo wohnst du' }

// Matching
{ k:'match', q:'Match the pairs', pairs:[ ['eins','one'], ['zwei','two'] ] }
```

**Marking is deliberately forgiving.** Capitalisation, trailing punctuation
and `ae/oe/ue/ss` typed instead of `ä/ö/ü/ß` are all accepted. Anything else
you want to let through belongs in the `a` array.

`why` appears after the answer — use it for the rule, not for praise.

---

## Formatting inside text

In `title`, `lead`, `body`, table cells, `points`, `why` and questions:

| You write | You get |
|---|---|
| `*text*` | **bold** — use it for the German form under discussion |
| `_text_` | *italic* |
| `` `text` `` | `code` |

Everything else is escaped. HTML in content files does not work, by design.

---

## Style rules for this course

- **Explain in English.** Always. No exceptions.
- **Always include the article.** `der Tisch`, never `Tisch`.
- **Example sentences must be usable.** "The dog is brown" helps nobody.
  "Hast du mal Feuer?" does.
- **Label the register.** In `street` slides, the third field says *who* you
  can say it to — and who you can't.
- **No invented slang.** If you can't point to people actually saying it, it
  doesn't go in.
- **`why` explains the rule**, not the individual question.

---

## After writing

```bash
node --check content/a1/u13.js   # syntax
npm test                          # structure + the whole app
```

The test checks, among other things, that every `order` exercise offers
exactly the words that make up its answer sentence, that every `choice` index
exists, and that no word ends up duplicated in the word list.
