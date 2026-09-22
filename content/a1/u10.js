/* Unit 10 — Modal verbs */
(function () {
  window.DE.registerUnit({
    id: 'a1-10', level: 'A1', num: 10, minutes: 40,
    title: 'Can, must, want',
    subtitle: 'Modal verbs · the sentence bracket · free time · making plans',
    can: [
      'Say what you can, must, want and are allowed to do.',
      'Handle the sentence bracket: modal verb second, infinitive at the end.',
      'Make plans and cancel them.',
      'Talk about your hobbies.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 10', title: 'Six verbs that multiply everything',
        lead: 'Modal verbs are the biggest single lever in A1. With them, every verb you already know turns into a dozen new sentences.',
        points: [
          '*können, müssen, wollen, möchten, dürfen, sollen*.',
          'The sentence bracket: modal verb in slot two, infinitive right at the end.',
          'Why *ich* and *er* are identical with modal verbs.',
          'Making plans, saying yes, saying no.'
        ] },

      { t: 'grammar', kicker: 'The core idea', title: 'The sentence bracket',
        body: 'A modal verb never turns up alone. It needs a second verb — and that one sits *in the infinitive at the very end of the sentence*.\nIt is the same logic as separable verbs: German opens a bracket and only closes it at the end.',
        table: {
          head: ['Slot 1', 'Modal verb', 'Middle', 'End (infinitive)'],
          rows: [
            ['Ich', '*kann*', 'ein bisschen Deutsch', '*sprechen*. — I can speak a bit of German.'],
            ['Ich', '*muss*', 'morgen früh', '*aufstehen*. — I have to get up early tomorrow.'],
            ['Wir', '*wollen*', 'heute Abend ins Kino', '*gehen*. — We want to go to the cinema tonight.'],
            ['*Kannst*', 'du', 'mir kurz', '*helfen*? — Can you help me a second?'],
            ['Heute', '*darf*', 'ich nicht', '*mitkommen*. — Today I’m not allowed to come along.']
          ]
        },
        examples: [
          ['Ich *kann* dich nicht *verstehen*.', "I can't understand you."],
          ['Wir *müssen* jetzt *los*.', 'We have to go now.'],
          ['*Willst* du was *trinken*?', 'Do you want something to drink?']
        ],
        note: 'The longer the sentence, the further back the second verb. This is why you have to listen to the end of a German sentence before you know what is happening.',
        noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammar', title: 'The six modal verbs',
        body: 'All six follow the same pattern: *ich* and *er/sie/es* are identical and take no ending. In the singular the vowel often changes too.',
        table: {
          head: ['', 'können (can)', 'müssen (must)', 'wollen (want)', 'dürfen (may)', 'sollen (should)', 'möchten (would like)'],
          rows: [
            ['ich', 'kann', 'muss', 'will', 'darf', 'soll', 'möchte'],
            ['du', 'kannst', 'musst', 'willst', 'darfst', 'sollst', 'möchtest'],
            ['er/sie/es', 'kann', 'muss', 'will', 'darf', 'soll', 'möchte'],
            ['wir', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten'],
            ['ihr', 'könnt', 'müsst', 'wollt', 'dürft', 'sollt', 'möchtet'],
            ['sie/Sie', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten']
          ]
        },
        examples: [
          ['Ich kann schwimmen.', 'I can swim.'],
          ['Sie muss arbeiten.', 'She has to work.'],
          ['Er will nicht.', "He doesn't want to."]
        ],
        note: '"ich kann" and "er kann" — no *-t*, no ending at all. Say "er kannt" and you give yourself away instantly.' },

      { t: 'grammar', kicker: 'Meaning', title: 'Which modal verb for what?',
        body: 'The meanings overlap less than you would think. In particular, *müssen nicht* and *dürfen nicht* are not the same thing at all.',
        table: {
          head: ['Verb', 'Meaning', 'Example'],
          rows: [
            ['*können*', 'ability, possibility', 'Ich kann kochen. — I can cook.'],
            ['*müssen*', 'obligation, necessity', 'Ich muss arbeiten. — I have to work.'],
            ['*wollen*', 'strong intention', 'Ich will das nicht. — I don’t want that.'],
            ['*möchten*', 'polite wish', 'Ich möchte einen Kaffee. — I’d like a coffee.'],
            ['*dürfen*', 'permission', 'Darf ich hier rauchen? — May I smoke here?'],
            ['*sollen*', 'advice, someone else’s wish', 'Du sollst deine Mutter anrufen. — You’re meant to call your mother.']
          ]
        },
        examples: [
          ['Du *musst nicht* kommen.', "You don't have to come. (optional)"],
          ['Du *darfst nicht* kommen.', "You're not allowed to come. (forbidden)"],
          ['*Soll* ich dir helfen?', 'Shall I help you?']
        ],
        note: '*Du musst nicht* = you don’t have to. *Du darfst nicht* = you are forbidden. Mixing those up can get genuinely awkward.',
        noteKind: 'warn' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Free time',
        items: [
          ['die Freizeit', 'free time', 'Was machst du in deiner Freizeit?', 'What do you do in your free time?'],
          ['das Hobby', 'hobby', 'Hast du ein Hobby?', 'Do you have a hobby?'],
          ['Sport machen', 'to do sport', 'Ich mache dreimal die Woche Sport.', 'I do sport three times a week.'],
          ['Fußball spielen', 'to play football', 'Wir spielen Fußball.', "We're playing football."],
          ['schwimmen', 'to swim', 'Ich kann gut schwimmen.', 'I can swim well.'],
          ['laufen', 'to run — also: to walk', 'Ich gehe laufen.', "I'm going running."],
          ['Musik hören', 'to listen to music', 'Ich höre viel Musik.', 'I listen to a lot of music.'],
          ['lesen', 'to read', 'Ich lese gern.', 'I like reading.'],
          ['zocken', 'to game (slang)', 'Ich zocke abends.', 'I game in the evenings.'],
          ['tanzen', 'to dance', 'Sie tanzt gut.', 'She dances well.'],
          ['kochen', 'to cook', 'Ich koche gern.', 'I like cooking.'],
          ['reisen', 'to travel', 'Ich will viel reisen.', 'I want to travel a lot.'],
          ['ausgehen', 'to go out', 'Gehen wir heute aus?', 'Shall we go out today?'],
          ['sich treffen', 'to meet up', 'Wir treffen uns um acht.', "We're meeting at eight."],
          ['die Verabredung', 'arrangement, date', 'Ich habe eine Verabredung.', 'I have plans.'],
          ['absagen', 'to cancel', 'Ich muss leider absagen.', 'I have to cancel, sorry.'],
          ['gern', 'gladly — turns any verb into "like doing"', 'Ich koche gern.', 'I like cooking.'],
          ['lieber', 'rather, prefer', 'Ich gehe lieber ins Kino.', "I'd rather go to the cinema."]
        ],
        note: '*gern* is the easiest trick in A1: verb + gern = "I like doing X". Ich lese gern. Ich koche gern. Ich zocke gern.',
        noteKind: 'win' },

      { t: 'dialog', kicker: 'Dialogue', title: 'Making plans, then cancelling',
        setting: 'Two friends chatting.',
        lines: [
          ['Jonas', 'Ey, willst du heute Abend was machen?', 'Hey, do you want to do something tonight?'],
          ['Emerson', 'Kann sein. Was denn?', 'Maybe. What?'],
          ['Jonas', 'Wir wollen ins Kino. Fängt um acht an.', 'We want to go to the cinema. Starts at eight.'],
          ['Emerson', 'Hm, ich muss aber morgen früh raus.', 'Hm, but I have to be up early tomorrow.'],
          ['Jonas', 'Komm schon, du kannst doch danach schlafen.', 'Come on, you can sleep afterwards.'],
          ['Emerson', 'Okay, aber ich will nicht so spät nach Hause.', "Okay, but I don't want to be home too late."],
          ['Jonas', 'Passt. Sollen wir uns um halb acht treffen?', 'Fine. Shall we meet at seven thirty?'],
          ['Emerson', 'Ja. — Ach Mist, ich muss doch absagen. Mein Chef hat gerade geschrieben.',
            'Yeah. — Oh damn, I have to cancel after all. My boss just messaged.'],
          ['Jonas', 'Schade. Dann nächste Woche?', 'Shame. Next week then?'],
          ['Emerson', 'Auf jeden Fall.', 'Definitely.']
        ],
        note: '*Auf jeden Fall* = definitely. One of the most useful phrases there is — agreement without committing to detail.' },

      { t: 'street', title: 'How plans actually get made',
        items: [
          ['Bock auf was?', 'Up for something?', 'The most common invitation among young people.'],
          ['Lass mal treffen', "Let's meet up", '*lass* + infinitive = let\'s. The "uns" gets dropped in speech.'],
          ['Ich kann nicht, muss arbeiten', "Can't, got work", 'Short, no apology essay. Completely fine.'],
          ['Ich meld mich', "I'll get in touch", 'Very common — and often non-committal.'],
          ['Auf jeden Fall / auf jeden', 'definitely', '"Auf jeden" is the clipped version.'],
          ['Mal gucken', "We'll see", 'The German maybe-meaning-probably-not.'],
          ['Ich bin dabei', "I'm in", 'A clear yes.'],
          ['Hab schon was vor', 'Already got plans', '*vorhaben* — separable.'],
          ['Sorry, muss absagen', 'Sorry, have to cancel', 'The standard text message.']
        ] },

      { t: 'pattern', kicker: 'Sentence builder', title: 'Build the bracket yourself',
        lead: 'Tap a modal verb and watch *schlafen* stay stuck at the end.',
        frame: 'Ich {} heute lange schlafen.', enFrame: 'I {} sleep in today.',
        slotLabel: 'modal verb',
        swaps: [
          ['kann', 'can'], ['muss', 'have to'], ['will', 'want to'],
          ['darf', 'am allowed to'], ['möchte', 'would like to'], ['soll', 'am supposed to']
        ],
        note: 'The second verb never moves. It sits at the end and waits. That is the whole sentence bracket.' },

      { t: 'drill', kicker: 'Try it now', title: 'Modal verb round',
        ex: [
          { k: 'order', en: 'I can speak a little German.',
            words: ['Ich', 'kann', 'ein', 'bisschen', 'Deutsch', 'sprechen'], a: 'Ich kann ein bisschen Deutsch sprechen' },
          { k: 'fill', q: 'Er ___ morgen arbeiten.', a: ['muss'], en: 'He has to work tomorrow.',
            why: 'er → *muss*, no ending.' },
          { k: 'choice', q: 'What does "Du musst nicht kommen" mean?',
            opts: ["You're not allowed to come.", "You don't have to come.", 'You must not come.'], a: 1,
            why: '*müssen nicht* = it is not necessary. A ban would be *dürfen nicht*.' },
          { k: 'fill', q: '___ ich dir helfen? (shall)', a: ['Soll', 'soll'], en: 'Shall I help you?' },
          { k: 'order', en: 'We want to go to the cinema tonight.',
            words: ['Wir', 'wollen', 'heute', 'Abend', 'ins', 'Kino', 'gehen'], a: 'Wir wollen heute Abend ins Kino gehen' }
        ] },

      { t: 'culture', kicker: 'Culture', title: 'A plan is a plan',
        body: 'In Germany, "yes" to a plan genuinely means yes. Cancelling last minute because you can’t be bothered reads as rude — noticeably more so than in the US.\nWhich is why Germans also don’t say yes out of politeness. "Mal gucken" or "Ich meld mich" usually means: probably not. That is not dishonesty, that is the polite way of saying no.\nIf you do cancel, do it early and give a reason. A plain "Sorry, ich schaff’s doch nicht, muss arbeiten" is plenty. No long apology needed.',
        note: 'The most useful pair: *Ich bin dabei* (a clear yes) and *Mal gucken* (a friendly no).' },

      { t: 'recap', kicker: 'Unit 10', title: 'What should stick now',
        points: [
          'Modal verb in slot two, infinitive *right at the end*.',
          'With modal verbs *ich* = *er/sie/es*, both with no ending.',
          '*müssen nicht* = not necessary. *dürfen nicht* = forbidden.',
          '*sollen* = someone else wants this from you.',
          'Verb + *gern* = "I like doing X".',
          '*Auf jeden Fall* = yes. *Mal gucken* = probably not.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Ich ___ gut kochen. (can)', a: ['kann'], en: 'I can cook well.' },
      { k: 'fill', q: 'Sie ___ heute arbeiten. (has to)', a: ['muss'], en: 'She has to work today.' },
      { k: 'fill', q: '___ ich hier rauchen? (am I allowed)', a: ['Darf', 'darf'], en: 'May I smoke here?' },
      { k: 'fill', q: 'Wir ___ morgen ins Kino gehen. (want)', a: ['wollen'], en: 'We want to go to the cinema tomorrow.' },
      { k: 'choice', q: 'Which sentence is correct?',
        opts: ['Ich kann sprechen Deutsch.', 'Ich kann Deutsch sprechen.', 'Ich Deutsch sprechen kann.'], a: 1,
        why: 'The infinitive always goes at the end.' },
      { k: 'choice', q: 'What does "Hier darf man nicht parken" mean?',
        opts: ['Parking is not necessary.', 'Parking is forbidden.', 'Parking is difficult.'], a: 1 },
      { k: 'choice', q: 'What does "Ich zocke gern" mean?',
        opts: ['I like gaming.', 'I have to game.', 'I can game.'], a: 0, why: 'Verb + *gern* = like doing.' },
      { k: 'order', en: 'Can you help me?', words: ['Kannst', 'du', 'mir', 'helfen'], a: 'Kannst du mir helfen' },
      { k: 'order', en: 'I have to get up early tomorrow.', words: ['Ich', 'muss', 'morgen', 'früh', 'aufstehen'],
        a: 'Ich muss morgen früh aufstehen' },
      { k: 'order', en: 'I would like to travel a lot.', words: ['Ich', 'möchte', 'viel', 'reisen'], a: 'Ich möchte viel reisen' },
      { k: 'listen', de: 'Ich kann heute leider nicht.', a: ['Ich kann heute leider nicht'], en: "I can't today, sorry." },
      { k: 'listen', de: 'Willst du was trinken?', a: ['Willst du was trinken'], en: 'Do you want something to drink?' },
      { k: 'match', q: 'Modal verbs', pairs: [
        ['können', 'to be able to'], ['dürfen', 'to be allowed to'], ['sollen', 'to be supposed to'], ['müssen', 'to have to']
      ] },
      { k: 'match', q: 'Yes and no', pairs: [
        ['Ich bin dabei', "I'm in"], ['Mal gucken', "we'll see (probably no)"],
        ['Hab schon was vor', 'already have plans'], ['Auf jeden Fall', 'definitely']
      ] },
      { k: 'trans', en: 'I like reading.', a: ['Ich lese gern.', 'Ich lese gerne.'], hint: 'verb + gern' }
    ]
  });
})();
