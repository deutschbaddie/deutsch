# Deutsch Lab

A complete German A1 course as a website — **taught in English**. Slide
lessons you click through, real everyday German, pronunciation on every word,
exercises that mark themselves, a vocabulary drill with spaced repetition,
and a decoder for the German that actually turns up on TikTok.

No build step, no framework, no dependencies. Double-click `index.html`.

---

## What's in it

| | |
|---|---|
| **12 units** | the whole A1 syllabus, from "Hallo" to the past tense |
| **140 slides** | vocabulary, dialogues, grammar, street German, culture |
| **452 words** | each with an example sentence, audio and a Forvo link |
| **231 exercises** | multiple choice, gap fill, sentence building, listening, translating, matching — 172 in the practice sets, 59 inside the lessons |
| **70 decoder entries** | slang, comment abbreviations, filler words, 2026 youth slang |
| **Drill** | Leitner boxes — cards come back when they're due, not before |

One unit takes about 35–40 minutes: lesson, exercises, words.

### The English/German split

The interface, every explanation and every note is in **English**. German
appears only where German is the thing you're learning: vocabulary, dialogues,
example sentences, and the grammar forms themselves. You never have to decode
the teaching in order to get at the lesson.

### The A1 units

1. **Hello — who are you?** — greetings, introducing yourself, `sein`, question words, du vs. Sie
2. **Numbers, time, making plans** — numbers to a million, telling the time, `haben`, the calendar
3. **Family and people** — possessives, jobs, describing someone
4. **der, die, das** — guessing gender, plurals, the **accusative**, `kein` vs. `nicht`
5. **My day** — **verb in second position**, separable verbs, daily routine
6. **Food and drink** — ordering, paying, `mögen` vs. `möchten`
7. **Shopping** — prices, clothes, colours, `dieser/welcher`
8. **Where you live** — furniture, `es gibt`, the **dative** after location prepositions
9. **Town, directions, trains** — asking the way, the **imperative**, `zu`/`nach`/`in`
10. **Can, must, want** — **modal verbs**, the sentence bracket, making plans
11. **Body, health, feelings** — at the doctor, **dative pronouns** (`mir`, `dir`)
12. **What happened yesterday?** — the **perfect tense**, `haben` or `sein`, weather

---

## Running it

**Simplest:** open `index.html` in a browser. That's it.

**With a local server** (better if you're editing content):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

**Putting it online:** repository **Settings → Pages → Source: Deploy from a
branch**, pick the branch and folder `/ (root)`, Save. It's a static site, so
it runs there with no further setup. After a minute it's live at
`https://<your-username>.github.io/<repo>/`.

---

## On your phone

The site is a PWA, so it installs to your home screen and works with no signal.

**Once it's online** (see "Putting it online" below), open the URL on your
phone and:

- **iPhone** — Safari → Share (□↑) → *Add to Home Screen*
- **Android** — Chrome → ⋮ → *Add to Home screen* / *Install app*

You get an icon, it opens full screen with no browser bars, and after the
first visit the whole course is stored on the device. Lessons, words, audio
and exercises all work in a tunnel or on a plane. Your progress is saved on
the phone.

Two things still need a connection: the 🗣 Forvo links (real speakers) and
the web fonts. Everything else is offline.

---

## How to actually learn with it

The order is deliberate — 35 minutes a day:

1. **Drill first** (0–6 min) — clear the cards that are due while your head is fresh.
2. **One lesson** (6–24 min) — work through a unit. Say everything **out loud**.
3. **Exercises** (24–32 min) — under 80% means go back through the slides.
4. **Decoder + one sentence** (32–35 min) — read three decoder entries, then write one real sentence about your day.

Keyboard in a lesson: `←` `→` to flip, `Esc` to close.
In the drill: `space` to flip, `1` / `2` / `3` to grade.

### Pronunciation — two sources, kept separate

- **▶︎** uses your device's German voice. Instant, offline, but synthetic.
  If your device has none, the site says so and you install one in your system settings.
- **🗣** opens [Forvo](https://forvo.com), where actual people say the word.
  For anything where the melody matters, use this one.

Nothing AI-generated is passed off as "real German" anywhere. Every dialogue,
slang entry and culture note is labelled for what it is.

---

## Progress

Everything lives in your browser's `localStorage` — no account, no server,
no data leaves your device. Which also means: different browser or a private
window = different progress. "Erase my progress" is at the bottom of the
**Me** page.

---

## How the code is arranged

```
index.html              loads everything, does nothing else
assets/css/app.css      design tokens, dark/light, responsive
assets/js/
  core.js               state, saving, content registry, router
  audio.js              speech output + Forvo
  srs.js                Leitner boxes
  exercises.js          one renderer per exercise type + the quiz runner
  deck.js               the slide player, one renderer per slide type
  views.js              the screens
  app.js                boot, settings
content/
  registry.js           levels + the list of content files  ← extend here
  decoder.js            the TikTok/slang database
  a1/u01.js … u12.js    one file per unit
manifest.webmanifest    makes it installable on a phone
sw.js                   service worker — keeps the whole course offline
docs/CONTENT.md         how to write units (format reference)
tests/smoke.js          browser test: every exercise type, quiz, drill, content
```

If you add content files, add them to the `PRECACHE` list in `sw.js` too, and
bump `CACHE` to `-v2` so phones drop the old copy. The test suite fails if the
two lists drift apart.

Content is pure data. The app knows nothing about German — it renders slide
types and exercise types. That's why A2/B1/B2 isn't a rebuild, just new files.
See `docs/CONTENT.md`.

---

## Tests

```bash
npm install     # just playwright-core
npm test
```

The test starts a local server, launches a real Chromium and checks: every
exercise type marks right **and** wrong answers correctly, the quiz runner
reaches its result screen, clicking through a lesson fills the drill deck,
progress survives a reload, there are no JS errors — and all content is
structurally sound (for sentence-building questions, for instance, that the
word tiles actually add up to the answer sentence).
