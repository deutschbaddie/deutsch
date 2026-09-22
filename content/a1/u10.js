/* Einheit 10 — Modalverben und Freizeit */
(function () {
  window.DE.registerUnit({
    id: 'a1-10', level: 'A1', num: 10, minutes: 40,
    title: 'Können, müssen, wollen',
    subtitle: 'Modalverben · Freizeit und Hobbys · sich verabreden',
    can: [
      'Du kannst sagen, was du kannst, musst, willst und darfst.',
      'Du beherrschst die Satzklammer: Modalverb vorn, Infinitiv ans Ende.',
      'Du kannst dich verabreden und absagen.',
      'Du kannst über deine Hobbys sprechen.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 10', title: 'Sechs Verben, die alles vervielfachen',
        lead: 'Modalverben sind der größte Hebel im A1. Mit ihnen wird aus jedem Verb, das du kennst, sofort ein Dutzend neue Sätze.',
        points: [
          '*können, müssen, wollen, möchten, dürfen, sollen*.',
          'Die Satzklammer: Modalverb an Position 2, Infinitiv ganz ans Ende.',
          'Warum *ich* und *er* bei Modalverben identisch sind.',
          'Verabreden, zusagen, absagen.'
        ] },

      { t: 'grammar', kicker: 'Die Kernidee', title: 'Die Satzklammer',
        body: 'Ein Modalverb kommt nie allein. Es braucht ein zweites Verb — und das steht im *Infinitiv ganz am Satzende*.\nDas ist dieselbe Logik wie bei den trennbaren Verben: Deutsch spannt eine Klammer auf und schließt sie erst zum Schluss.',
        table: {
          head: ['Position 1', 'Modalverb', 'Mitte', 'Ende (Infinitiv)'],
          rows: [
            ['Ich', '*kann*', 'ein bisschen Deutsch', '*sprechen*.'],
            ['Ich', '*muss*', 'morgen früh', '*aufstehen*.'],
            ['Wir', '*wollen*', 'heute Abend ins Kino', '*gehen*.'],
            ['*Kannst*', 'du', 'mir kurz', '*helfen*?'],
            ['Heute', '*darf*', 'ich nicht', '*mitkommen*.']
          ]
        },
        examples: [
          ['Ich *kann* dich nicht *verstehen*.', "I can't understand you."],
          ['Wir *müssen* jetzt *los*.', 'We have to go now.'],
          ['*Willst* du was *trinken*?', 'Do you want something to drink?']
        ],
        note: 'Je länger der Satz, desto weiter hinten das zweite Verb. Deshalb musst du im Deutschen bis zum Ende zuhören, bevor du weißt, was passiert.', noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammatik', title: 'Die sechs Modalverben',
        body: 'Alle sechs folgen demselben Muster: *ich* und *er/sie/es* sind identisch und haben keine Endung. Im Singular wechselt außerdem oft der Vokal.',
        table: {
          head: ['', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten'],
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
        note: '„ich kann“ und „er kann“ — kein *-t*, keine Endung. Wer „er kannt“ sagt, verrät sich sofort.' },

      { t: 'grammar', kicker: 'Bedeutung', title: 'Welches Modalverb wofür?',
        body: 'Die Bedeutungen überschneiden sich weniger, als man denkt. Vor allem *müssen nicht* und *dürfen nicht* sind nicht dasselbe.',
        table: {
          head: ['Verb', 'Bedeutung', 'Beispiel'],
          rows: [
            ['*können*', 'Fähigkeit, Möglichkeit', 'Ich kann kochen.'],
            ['*müssen*', 'Zwang, Notwendigkeit', 'Ich muss arbeiten.'],
            ['*wollen*', 'starker Wille', 'Ich will das nicht.'],
            ['*möchten*', 'höflicher Wunsch', 'Ich möchte einen Kaffee.'],
            ['*dürfen*', 'Erlaubnis', 'Darf ich hier rauchen?'],
            ['*sollen*', 'Empfehlung, fremder Wunsch', 'Du sollst deine Mutter anrufen.']
          ]
        },
        examples: [
          ['Du *musst nicht* kommen.', "You don't have to come. (optional)"],
          ['Du *darfst nicht* kommen.', "You're not allowed to come. (forbidden)"],
          ['*Soll* ich dir helfen?', 'Shall I help you?']
        ],
        note: '*Du musst nicht* = musst du nicht. *Du darfst nicht* = ist verboten. Diese Verwechslung kann richtig peinlich werden.', noteKind: 'warn' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Freizeit',
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
        note: '*gern* ist der einfachste Trick im A1: Verb + gern = „I like doing X“. Ich lese gern. Ich koche gern. Ich zocke gern.',
        noteKind: 'win' },

      { t: 'dialog', kicker: 'Dialog', title: 'Verabreden und absagen',
        setting: 'Chat zwischen zwei Freunden.',
        lines: [
          ['Jonas', 'Ey, willst du heute Abend was machen?', 'Hey, do you want to do something tonight?'],
          ['Emerson', 'Kann sein. Was denn?', 'Maybe. What?'],
          ['Jonas', 'Wir wollen ins Kino. Fängt um acht an.', "We want to go to the cinema. Starts at eight."],
          ['Emerson', 'Hm, ich muss aber morgen früh raus.', "Hm, but I have to get up early tomorrow."],
          ['Jonas', 'Komm schon, du kannst doch danach schlafen.', 'Come on, you can sleep afterwards.'],
          ['Emerson', 'Okay, aber ich will nicht so spät nach Hause.', "Okay, but I don't want to be home too late."],
          ['Jonas', 'Passt. Sollen wir uns um halb acht treffen?', "Fine. Shall we meet at seven thirty?"],
          ['Emerson', 'Ja. — Ach Mist, ich muss doch absagen. Mein Chef hat gerade geschrieben.', "Yeah. — Oh damn, I have to cancel after all. My boss just messaged."],
          ['Jonas', 'Schade. Dann nächste Woche?', 'Shame. Next week then?'],
          ['Emerson', 'Auf jeden Fall.', 'Definitely.']
        ],
        note: '*Auf jeden Fall* = definitely. Einer der nützlichsten Ausdrücke überhaupt — Zustimmung ohne Details.' },

      { t: 'street', title: 'Verabreden, wie es wirklich läuft',
        items: [
          ['Bock auf was?', 'Up for something?', 'Die häufigste Einladung unter jungen Leuten.'],
          ['Lass mal treffen', "Let's meet up", '*lass* + Infinitiv = let’s. Ohne „uns“ in der Umgangssprache.'],
          ['Ich kann nicht, muss arbeiten', "Can't, got work", 'Kurz, ohne Entschuldigungsroman. Völlig okay.'],
          ['Ich meld mich', "I'll get in touch", 'Sehr häufig — und oft unverbindlich gemeint.'],
          ['Auf jeden Fall / auf jeden', 'definitely', '„Auf jeden“ ist die gekürzte Form.'],
          ['Mal gucken', "We'll see", 'Das deutsche Vielleicht-eher-nein.'],
          ['Ich bin dabei', "I'm in", 'Klare Zusage.'],
          ['Hab schon was vor', 'Already got plans', '*vorhaben* — trennbar.'],
          ['Sorry, muss absagen', 'Sorry, have to cancel', 'Standardformel per Chat.']
        ] },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Die Klammer selbst bauen',
        lead: 'Tipp ein Modalverb an und hör, wie *schlafen* immer am Ende bleibt.',
        frame: 'Ich {} heute lange schlafen.', enFrame: 'I {} sleep in today.',
        slotLabel: 'Modalverb',
        swaps: [
          ['kann', 'can'], ['muss', 'have to'], ['will', 'want to'],
          ['darf', 'am allowed to'], ['möchte', 'would like to'], ['soll', 'am supposed to']
        ],
        note: 'Das zweite Verb bewegt sich nie. Es steht am Ende und wartet. Das ist die ganze Satzklammer.' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Modalverben-Runde',
        ex: [
          { k: 'order', en: 'I can speak a little German.', words: ['Ich', 'kann', 'ein', 'bisschen', 'Deutsch', 'sprechen'],
            a: 'Ich kann ein bisschen Deutsch sprechen' },
          { k: 'fill', q: 'Er ___ morgen arbeiten.', a: ['muss'], en: 'He has to work tomorrow.',
            why: 'er → *muss*, keine Endung.' },
          { k: 'choice', q: '„Du musst nicht kommen“ heißt:',
            opts: ["You're not allowed to come.", "You don't have to come.", 'You must not come.'], a: 1,
            why: '*müssen nicht* = es ist nicht nötig. Verbot wäre *dürfen nicht*.' },
          { k: 'fill', q: '___ ich dir helfen? (shall)', a: ['Soll', 'soll'], en: 'Shall I help you?' },
          { k: 'order', en: 'We want to go to the cinema tonight.', words: ['Wir', 'wollen', 'heute', 'Abend', 'ins', 'Kino', 'gehen'],
            a: 'Wir wollen heute Abend ins Kino gehen' }
        ] },

      { t: 'culture', kicker: 'Kultur', title: 'Verabredungen sind Verabredungen',
        body: 'In Deutschland heißt „ja“ bei einer Verabredung tatsächlich ja. Spontan absagen, weil man keine Lust hat, gilt als unhöflich — und zwar deutlich stärker als in den USA.\nDeshalb sagen Deutsche auch nicht aus Höflichkeit zu. „Mal gucken“ oder „Ich meld mich“ heißt meistens: eher nicht. Das ist keine Unehrlichkeit, das ist die Art, freundlich nein zu sagen.\nWer absagt, tut es früh und mit Grund. Ein simples „Sorry, ich schaff’s doch nicht, muss arbeiten“ reicht völlig. Kein langer Entschuldigungstext nötig.',
        note: 'Das nützlichste Paar: *Ich bin dabei* (klares ja) und *Mal gucken* (freundliches nein).' },

      { t: 'recap', kicker: 'Einheit 10', title: 'Was jetzt sitzen sollte',
        points: [
          'Modalverb an Position 2, Infinitiv *ganz ans Ende*.',
          'Bei Modalverben: *ich* = *er/sie/es*, beide ohne Endung.',
          '*müssen nicht* = nicht nötig. *dürfen nicht* = verboten.',
          '*sollen* = jemand anderes will das von dir.',
          'Verb + *gern* = „I like doing X“.',
          '*Auf jeden Fall* = ja. *Mal gucken* = eher nein.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Ich ___ gut kochen. (can)', a: ['kann'], en: 'I can cook well.' },
      { k: 'fill', q: 'Sie ___ heute arbeiten. (has to)', a: ['muss'], en: 'She has to work today.' },
      { k: 'fill', q: '___ ich hier rauchen? (am I allowed)', a: ['Darf', 'darf'], en: 'May I smoke here?' },
      { k: 'fill', q: 'Wir ___ morgen ins Kino gehen. (want)', a: ['wollen'], en: 'We want to go to the cinema tomorrow.' },
      { k: 'choice', q: 'Welcher Satz ist richtig?',
        opts: ['Ich kann sprechen Deutsch.', 'Ich kann Deutsch sprechen.', 'Ich Deutsch sprechen kann.'], a: 1,
        why: 'Infinitiv immer ans Satzende.' },
      { k: 'choice', q: '„Hier darf man nicht parken“ heißt:',
        opts: ['Parken ist nicht nötig.', 'Parken ist verboten.', 'Parken ist schwierig.'], a: 1 },
      { k: 'choice', q: 'Was heißt „Ich zocke gern“?',
        opts: ['I like gaming.', 'I have to game.', 'I can game.'], a: 0, why: 'Verb + *gern* = like doing.' },
      { k: 'order', en: 'Can you help me?', words: ['Kannst', 'du', 'mir', 'helfen'], a: 'Kannst du mir helfen' },
      { k: 'order', en: 'I have to get up early tomorrow.', words: ['Ich', 'muss', 'morgen', 'früh', 'aufstehen'],
        a: 'Ich muss morgen früh aufstehen' },
      { k: 'order', en: 'I would like to travel a lot.', words: ['Ich', 'möchte', 'viel', 'reisen'], a: 'Ich möchte viel reisen' },
      { k: 'listen', de: 'Ich kann heute leider nicht.', a: ['Ich kann heute leider nicht'], en: "I can't today, sorry." },
      { k: 'listen', de: 'Willst du was trinken?', a: ['Willst du was trinken'], en: 'Do you want something to drink?' },
      { k: 'match', q: 'Modalverben', pairs: [
        ['können', 'to be able to'], ['dürfen', 'to be allowed to'], ['sollen', 'to be supposed to'], ['müssen', 'to have to']
      ] },
      { k: 'match', q: 'Zusagen und absagen', pairs: [
        ['Ich bin dabei', "I'm in"], ['Mal gucken', "we'll see (probably no)"],
        ['Hab schon was vor', 'already have plans'], ['Auf jeden Fall', 'definitely']
      ] },
      { k: 'trans', en: 'I like reading.', a: ['Ich lese gern.', 'Ich lese gerne.'], hint: 'Verb + gern' }
    ]
  });
})();
