/* Unit 4 — der, die, das */
(function () {
  window.DE.registerUnit({
    id: 'a1-04', level: 'A1', num: 4, minutes: 40,
    title: 'der, die, das — and the accusative',
    subtitle: 'Genders, plurals, ein/kein · the first case that actually changes',
    can: [
      'Understand why every noun has a gender — and how to guess it most of the time.',
      'Form the plural.',
      'Tell *einen* from *ein* and know when each turns up.',
      'Negate correctly with *kein* and *nicht*.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 4', title: 'The three words for "the"',
        lead: 'This is the unit everyone dreads. Unfairly — there is more system here than you have been told.',
        points: [
          'Every noun is *der*, *die* or *das*. That is grammar, not biology.',
          'Certain endings give the gender away almost every time. You learn those now.',
          'The *accusative*: only one word genuinely changes — der becomes den.',
          'Negation: *kein* in front of nouns, *nicht* in front of everything else.'
        ],
        note: 'Learn every new noun *with its article*. Not "Tisch" but "der Tisch". That one habit saves you a year.',
        noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammar', title: 'How to guess the gender',
        body: 'You don’t have to guess blindly. Endings give it away most of the time — and this list covers a large slice of all A1 vocabulary.',
        table: {
          head: ['Article', 'Typical ending', 'Examples'],
          rows: [
            ['*die*', '-ung, -heit, -keit, -schaft, -ion, -tät', 'die Wohnung, die Freiheit, die Nation'],
            ['*die*', '-e (very often)', 'die Lampe, die Sprache, die Frage'],
            ['*der*', '-er, -en, -ling, -ismus', 'der Lehrer, der Wagen, der Frühling'],
            ['*der*', 'days, months, seasons, weather', 'der Montag, der Juli, der Sommer, der Regen'],
            ['*das*', '-chen, -lein (diminutives)', 'das Mädchen, das Brötchen'],
            ['*das*', '-ment, -um, -ma', 'das Dokument, das Museum, das Thema'],
            ['*das*', 'verbs used as nouns', 'das Essen, das Leben, das Lernen']
          ]
        },
        examples: [
          ['*die* Wohnung, *die* Zeitung, *die* Rechnung', 'everything ending in -ung is die'],
          ['*das* Mädchen (!)', 'girl is neuter — because -chen beats meaning'],
          ['*der* Montag, *der* Winter, *der* Wind', 'days, seasons, weather are der']
        ],
        note: '*das Mädchen* — "the girl" — is neuter. The ending *-chen* always wins against the meaning.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Things around you every day',
        items: [
          ['das Handy', 'mobile phone', 'Wo ist mein Handy?', "Where's my phone?"],
          ['der Laptop', 'laptop', 'Mein Laptop ist kaputt.', 'My laptop is broken.'],
          ['der Schlüssel', 'key', 'Ich habe den Schlüssel vergessen.', 'I forgot the key.'],
          ['die Tasche', 'bag', 'Das ist meine Tasche.', "That's my bag."],
          ['das Buch', 'book', 'Ich lese ein Buch.', "I'm reading a book."],
          ['der Tisch', 'table', 'Der Tisch ist frei.', 'The table is free.'],
          ['der Stuhl', 'chair', 'Nimm den Stuhl da.', 'Take that chair.'],
          ['die Tür', 'door', 'Mach die Tür zu.', 'Close the door.'],
          ['das Fenster', 'window', 'Das Fenster ist offen.', 'The window is open.'],
          ['das Auto', 'car', 'Ich habe kein Auto.', "I don't have a car."],
          ['das Geld', 'money', 'Ich habe kein Geld.', 'I have no money.'],
          ['die Uhr', 'watch, clock', 'Die Uhr geht falsch.', 'The clock is wrong.'],
          ['der Stift', 'pen', 'Hast du einen Stift?', 'Do you have a pen?'],
          ['das Papier', 'paper', 'Ein Blatt Papier.', 'A sheet of paper.'],
          ['die Flasche', 'bottle', 'Eine Flasche Wasser.', 'A bottle of water.'],
          ['die Wohnung', 'flat, apartment', 'Meine Wohnung ist klein.', 'My flat is small.']
        ] },

      { t: 'grammar', kicker: 'The core idea', title: 'Accusative — the thing on the receiving end',
        body: 'In "Ich sehe den Mann" (I see the man), *ich* does something and *der Mann* is on the receiving end. The second one goes into the accusative.\nNow the good news, and it is better than the reputation suggests: of all the articles, exactly *one* changes in the accusative. `der` becomes `den`. Die, das and plural die stay exactly as they were.',
        table: {
          head: ['', 'Nominative (who does it?)', 'Accusative (whom / what?)'],
          rows: [
            ['masculine', '*der* Mann · *ein* Mann', '*den* Mann · *einen* Mann ⚠️'],
            ['feminine', '*die* Frau · *eine* Frau', '*die* Frau · *eine* Frau'],
            ['neuter', '*das* Kind · *ein* Kind', '*das* Kind · *ein* Kind'],
            ['plural', '*die* Kinder', '*die* Kinder']
          ]
        },
        examples: [
          ['*Der* Mann ist da. → Ich sehe *den* Mann.', 'The man is there. → I see the man.'],
          ['Ich kaufe *einen* Kaffee.', "I'm buying a coffee."],
          ['Ich habe *eine* Frage.', 'I have a question.'],
          ['Ich nehme *das* Brot.', "I'll take the bread."]
        ],
        note: 'Memorise this: *only the masculine changes*. Learn nothing else about the accusative and you already make 75% fewer mistakes.',
        noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammar', title: 'Plurals — five routes',
        body: 'German has no simple "+s". There are five patterns. You don’t need to predict them, but you should recognise them — and always learn the plural along with the word.',
        table: {
          head: ['Pattern', 'Singular → Plural', 'Typical for'],
          rows: [
            ['*-e*', 'das Jahr → die Jahr*e*', 'many masculine nouns'],
            ['*-e* + umlaut', 'der Stuhl → die St*ü*hl*e*', 'many masculine nouns'],
            ['*-(e)n*', 'die Frau → die Frau*en*', 'almost all *die*-words'],
            ['*-er* + umlaut', 'das Buch → die B*ü*ch*er*', 'many neuter nouns'],
            ['*-s*', 'das Auto → die Auto*s*', 'loanwords, abbreviations'],
            ['*no ending*', 'das Fenster → die Fenster', 'words ending in -er, -en, -el']
          ]
        },
        examples: [
          ['ein Kind → *die Kinder*', 'one child → the children'],
          ['ein Mann → *die Männer*', 'one man → the men'],
          ['ein Handy → *die Handys*', 'one phone → the phones']
        ],
        note: 'In the plural the article is *always die*, whatever the singular gender was. That one is a genuine gift.',
        noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammar', title: 'kein or nicht?',
        body: 'Two ways to say no, cleanly divided.\n*kein* negates nouns that have *ein* in front of them, or no article at all. It behaves exactly like *ein*: kein, keine, keinen.\n*nicht* negates everything else — verbs, adjectives, whole statements, and nouns that already have *der/die/das* or a possessive.',
        table: {
          head: ['Statement', 'Negated', 'Why'],
          rows: [
            ['Ich habe ein Auto.', 'Ich habe *kein* Auto.', 'ein → kein'],
            ['Ich habe Zeit.', 'Ich habe *keine* Zeit.', 'no article → kein'],
            ['Ich kenne den Mann.', 'Ich kenne den Mann *nicht*.', 'definite article → nicht'],
            ['Das ist gut.', 'Das ist *nicht* gut.', 'adjective → nicht'],
            ['Ich komme.', 'Ich komme *nicht*.', 'verb → nicht'],
            ['Das ist mein Handy.', 'Das ist *nicht* mein Handy.', 'possessive → nicht']
          ]
        },
        examples: [
          ['Ich hab keinen Bock.', "I don't feel like it."],
          ['Ich versteh das nicht.', "I don't understand that."],
          ['Das ist keine gute Idee.', "That's not a good idea."]
        ],
        note: '*nicht* usually sits at the *end* of the sentence, or directly in front of whatever it negates. "Ich komme heute nicht."' },

      { t: 'dialog', kicker: 'Dialogue', title: 'At the office, nothing to hand',
        setting: 'Two colleagues, casual.',
        lines: [
          ['Tim', 'Hast du einen Stift?', 'Do you have a pen?'],
          ['Emerson', 'Nein, ich hab keinen Stift. Nur den Laptop.', "No, I don't have a pen. Just the laptop."],
          ['Tim', 'Und ein Papier? Irgendwas?', 'And some paper? Anything?'],
          ['Emerson', 'Auch nicht, sorry.', 'Nope, sorry.'],
          ['Tim', 'Okay, dann nehm ich das Handy.', "Okay, then I'll take the phone."],
          ['Emerson', 'Ist das dein Handy? Ich glaub, das ist meins.', "Is that your phone? I think that's mine."],
          ['Tim', 'Ups. Stimmt. Wo ist denn meins?', "Oops. True. So where's mine?"],
          ['Emerson', 'Keine Ahnung. Guck mal auf dem Tisch da.', 'No idea. Have a look on that table.']
        ],
        note: 'Notice *einen Stift* (accusative masculine) against *keinen Stift*. Same ending — kein simply copies ein.' },

      { t: 'pattern', kicker: 'Sentence builder', title: 'I have / I have no …',
        frame: 'Ich habe {}.', enFrame: 'I have {}.',
        slotLabel: 'object',
        swaps: [
          ['einen Hund', 'a dog'], ['eine Frage', 'a question'], ['ein Auto', 'a car'],
          ['keinen Hunger', 'no hunger'], ['keine Zeit', 'no time'], ['kein Geld', 'no money']
        ],
        note: 'Hear the difference: *einen/keinen* only for masculine. Feminine takes *eine/keine*, neuter *ein/kein*.' },

      { t: 'street', title: 'The article nobody pronounces',
        lead: 'In speech, articles half disappear. That is the main reason you can’t find them when listening.',
        items: [
          ["'nen instead of einen", 'a (masculine)', '"Hast du \'nen Stift?" — extremely common, in every video.'],
          ["'ne instead of eine", 'a (feminine)', '"Ich hab \'ne Frage." — I have a question.'],
          ["'n instead of ein", 'a (neuter)', '"Das ist \'n Witz." — That\'s a joke.'],
          ['aufs, ins, vom, zum', 'auf das, in das, von dem, zu dem', 'These contractions are standard German, not slang.'],
          ['Hab kein Bock', "can't be bothered", 'Strictly it should be *keinen* Bock. Plenty of people drop the -en when speaking.'],
          ["Das ist so'n Ding", "that's a whole thing", '"so ein" becomes "so\'n".'],
          ['Ich hab nix', "I've got nothing", '*nix* = nichts. Very common in speech.'],
          ['gib mir mal das', 'gimme that', '*mal* is what turns it into a request instead of an order.']
        ],
        note: 'You are not meant to write any of this. You are meant to *recognise* it when you hear it.',
        noteKind: 'warn' },

      { t: 'drill', kicker: 'Try it now', title: 'Accusative round',
        ex: [
          { k: 'fill', q: 'Ich sehe ___ Mann.', a: ['den'], en: 'I see the man.',
            why: 'Masculine in the accusative: der → *den*.' },
          { k: 'fill', q: 'Ich sehe ___ Frau.', a: ['die'], en: 'I see the woman.',
            why: 'Feminine does not change: *die* stays die.' },
          { k: 'fill', q: 'Ich kaufe ___ Kaffee. (a)', a: ['einen'], en: "I'm buying a coffee.",
            why: '*der* Kaffee → accusative *einen* Kaffee.' },
          { k: 'choice', q: 'How do you negate "Ich habe Zeit"?',
            opts: ['Ich habe nicht Zeit.', 'Ich habe keine Zeit.', 'Ich habe kein Zeit.'], a: 1,
            why: 'Noun with no article → *kein*. And *die* Zeit → *keine*.' },
          { k: 'choice', q: 'How do you negate "Ich kenne den Mann"?',
            opts: ['Ich kenne keinen Mann.', 'Ich kenne den Mann nicht.', 'Ich kenne nicht den Mann.'], a: 1,
            why: 'Definite article → *nicht*, and it goes at the end.' }
        ] },

      { t: 'culture', kicker: 'Strategy', title: 'What to actually do about genders',
        body: 'Honest version: native speakers hear a wrong article instantly — and almost never care. "Ich habe *die* Handy vergessen" gets understood. Nobody laughs at you.\nSo don’t let this slow you down. Speak with wrong articles rather than staying silent out of fear.\nBut: learn every new word *with* its article and *with* its plural. "das Buch, die Bücher." One word, three pieces of information, one effort. Do that consistently and in a year you have a feel for it that no longer costs you anything.',
        note: 'Colour helps: der = blue, die = pink, das = green. That is exactly how they are marked everywhere in this course.' },

      { t: 'recap', kicker: 'Unit 4', title: 'What should stick now',
        points: [
          'Endings give away gender: *-ung/-heit/-keit* → die, *-chen* → das, *-er* → der.',
          'In the accusative *only* masculine changes: der → *den*, ein → *einen*.',
          'The plural article is always *die*.',
          '*kein* in front of nouns (with ein / no article), *nicht* in front of everything else.',
          '*nicht* usually goes at the end of the sentence.',
          'In speech: \'nen, \'ne, \'n — hear them, don’t write them.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Ich sehe ___ Hund. (the)', a: ['den'], en: 'I see the dog.', why: 'der Hund → accusative *den* Hund.' },
      { k: 'fill', q: 'Ich habe ___ Frage. (a)', a: ['eine'], en: 'I have a question.', why: 'die Frage → *eine*, unchanged.' },
      { k: 'fill', q: 'Ich nehme ___ Brot. (the)', a: ['das'], en: "I'll take the bread.", why: 'Neuter stays *das*.' },
      { k: 'fill', q: 'Ich habe ___ Auto. (no)', a: ['kein'], en: "I don't have a car.", why: 'das Auto → *kein* Auto.' },
      { k: 'fill', q: 'Er hat ___ Hunger. (no)', a: ['keinen'], en: "He's not hungry.", why: 'der Hunger → accusative *keinen*.' },
      { k: 'choice', q: 'Which article goes with "Wohnung"?', opts: ['der', 'die', 'das'], a: 1,
        why: 'Ending *-ung* → always *die*.' },
      { k: 'choice', q: 'Which article goes with "Mädchen"?', opts: ['der', 'die', 'das'], a: 2,
        why: '*-chen* makes everything neuter, even a girl.' },
      { k: 'choice', q: 'Which article goes with "Montag"?', opts: ['der', 'die', 'das'], a: 0,
        why: 'Days, months, seasons and weather are *der*.' },
      { k: 'choice', q: '"Ich kenne den Film nicht." Why *nicht* and not *kein*?',
        opts: ['Because Film is masculine.', 'Because there is a definite article in front of it.', 'Because it is past tense.'], a: 1,
        why: 'With *den/die/das* or a possessive you negate with *nicht*.' },
      { k: 'order', en: "I don't have any money.", words: ['Ich', 'habe', 'kein', 'Geld'], a: 'Ich habe kein Geld' },
      { k: 'order', en: "I'm buying a coffee.", words: ['Ich', 'kaufe', 'einen', 'Kaffee'], a: 'Ich kaufe einen Kaffee' },
      { k: 'listen', de: 'Ich habe keine Zeit.', a: ['Ich habe keine Zeit', 'Ich hab keine Zeit'], en: "I don't have time." },
      { k: 'listen', de: 'Hast du einen Stift?', a: ['Hast du einen Stift'], en: 'Do you have a pen?' },
      { k: 'match', q: 'Singular → plural', pairs: [
        ['das Buch', 'die Bücher'], ['der Mann', 'die Männer'], ['die Frau', 'die Frauen'], ['das Auto', 'die Autos']
      ] },
      { k: 'trans', en: "I don't understand that.",
        a: ['Ich verstehe das nicht.', 'Das verstehe ich nicht.', 'Ich versteh das nicht.'], hint: 'nicht goes at the end' }
    ]
  });
})();
