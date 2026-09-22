/* Einheit 5 — Mein Tag */
(function () {
  window.DE.registerUnit({
    id: 'a1-05', level: 'A1', num: 5, minutes: 38,
    title: 'Mein Tag',
    subtitle: 'Tagesablauf erzählen · trennbare Verben · Wortstellung (Verb an Position 2)',
    can: [
      'Du kannst erzählen, was du an einem normalen Tag machst.',
      'Du beherrschst die wichtigste Satzregel des Deutschen: Verb an Position 2.',
      'Du kannst trennbare Verben benutzen — aufstehen, anrufen, einkaufen.',
      'Du kannst sagen, wie oft du etwas machst.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 5', title: 'Die eine Regel, die alles zusammenhält',
        lead: 'Wenn du nur eine Grammatikregel aus dem A1-Deutsch mitnimmst, dann diese: das Verb steht an Position 2. Immer.',
        points: [
          'Verb an Position 2 — und was „Position“ hier wirklich heißt.',
          'Trennbare Verben: das Verb bricht auseinander und die Hälfte fliegt ans Satzende.',
          'Der komplette Tagesablauf als Wortschatz.',
          'Häufigkeit: immer, oft, manchmal, nie.'
        ] },

      { t: 'grammar', kicker: 'Die Hauptregel', title: 'Verb an Position 2',
        body: 'Im deutschen Aussagesatz steht das konjugierte Verb immer an der *zweiten Stelle*. Was davor steht, darfst du frei wählen — aber es ist genau *ein* Baustein.\nDas ist der Grund, warum Deutsch für Englischsprachige oft „verdreht“ klingt: Wenn du den Satz mit einer Zeitangabe anfängst, rutscht das Subjekt *hinter* das Verb.',
        table: {
          head: ['Position 1', 'Position 2 (Verb)', 'Rest'],
          rows: [
            ['Ich', '*stehe*', 'um sieben auf.'],
            ['Um sieben', '*stehe*', 'ich auf. ⚠️'],
            ['Heute', '*gehe*', 'ich nicht zur Arbeit.'],
            ['Am Montag', '*habe*', 'ich einen Termin.'],
            ['Meine Schwester', '*wohnt*', 'in Berlin.']
          ]
        },
        examples: [
          ['*Ich gehe* heute ins Kino.', "I'm going to the cinema today."],
          ['*Heute gehe ich* ins Kino.', 'Today I’m going to the cinema.'],
          ['*Morgen habe ich* frei.', "Tomorrow I'm off."]
        ],
        note: 'Englisch sagt „Today I go“. Deutsch sagt „Heute gehe ich“. Verb und Subjekt tauschen die Plätze. Das ist keine Ausnahme — das ist die Regel.', noteKind: 'warn' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Der Tagesablauf',
        items: [
          ['aufstehen', 'to get up', 'Ich stehe um sieben auf.', 'I get up at seven.'],
          ['aufwachen', 'to wake up', 'Ich wache früh auf.', 'I wake up early.'],
          ['duschen', 'to shower', 'Ich dusche morgens.', 'I shower in the mornings.'],
          ['frühstücken', 'to have breakfast', 'Ich frühstücke nie.', 'I never have breakfast.'],
          ['anziehen', 'to put on (clothes)', 'Ich ziehe mich an.', 'I get dressed.'],
          ['losgehen', 'to set off', 'Ich gehe gleich los.', "I'm setting off now."],
          ['zur Arbeit gehen', 'to go to work', 'Ich gehe um acht zur Arbeit.', 'I go to work at eight.'],
          ['anfangen', 'to start', 'Die Schule fängt um acht an.', 'School starts at eight.'],
          ['aufhören', 'to stop', 'Ich höre um fünf auf.', 'I finish at five.'],
          ['einkaufen', 'to go shopping', 'Ich kaufe nach der Arbeit ein.', 'I shop after work.'],
          ['kochen', 'to cook', 'Ich koche fast jeden Tag.', 'I cook almost every day.'],
          ['essen', 'to eat', 'Wir essen um acht.', 'We eat at eight.'],
          ['fernsehen', 'to watch TV', 'Abends sehe ich fern.', 'In the evenings I watch TV.'],
          ['schlafen gehen', 'to go to bed', 'Ich gehe um elf schlafen.', 'I go to bed at eleven.'],
          ['der Morgen', 'morning', 'am Morgen', 'in the morning'],
          ['der Vormittag', 'late morning', 'am Vormittag', 'in the late morning'],
          ['der Mittag', 'midday', 'zu Mittag essen', 'to have lunch'],
          ['der Nachmittag', 'afternoon', 'am Nachmittag', 'in the afternoon'],
          ['der Abend', 'evening', 'am Abend', 'in the evening'],
          ['die Nacht', 'night', 'in der Nacht', 'at night']
        ],
        note: 'Tageszeiten als Gewohnheit: *morgens, mittags, abends, nachts* — klein und mit -s. „Ich arbeite abends.“' },

      { t: 'grammar', kicker: 'Grammatik', title: 'Trennbare Verben — das Verb bricht auseinander',
        body: 'Manche Verben bestehen aus zwei Teilen: einer Vorsilbe und einem Verb. *auf*stehen, *an*rufen, *ein*kaufen, *fern*sehen.\nIm Satz trennen sie sich: das Verb wird konjugiert und steht an Position 2, die Vorsilbe fliegt ans *Satzende*. Dort wartet sie, bis der Satz zu Ende ist.',
        table: {
          head: ['Infinitiv', 'im Satz', 'Bedeutung'],
          rows: [
            ['*auf*stehen', 'Ich stehe um sieben *auf*.', 'I get up at seven.'],
            ['*an*rufen', 'Ich rufe dich später *an*.', 'I’ll call you later.'],
            ['*ein*kaufen', 'Wir kaufen heute *ein*.', 'We’re shopping today.'],
            ['*fern*sehen', 'Er sieht jeden Abend *fern*.', 'He watches TV every evening.'],
            ['*an*fangen', 'Der Film fängt gleich *an*.', 'The film starts in a moment.'],
            ['*mit*kommen', 'Kommst du *mit*?', 'Are you coming along?'],
            ['*zu*machen', 'Mach die Tür *zu*.', 'Close the door.'],
            ['*auf*machen', 'Machst du das Fenster *auf*?', 'Will you open the window?']
          ]
        },
        examples: [
          ['Ich *rufe* meine Mutter jeden Sonntag *an*.', 'I call my mother every Sunday.'],
          ['Wann *fängt* der Film *an*?', 'When does the film start?'],
          ['*Kommst* du heute Abend *mit*?', 'Are you coming along tonight?']
        ],
        note: 'Je länger der Satz, desto weiter hinten die Vorsilbe. Deutsche halten den entscheidenden Teil bis zum Schluss zurück — deshalb musst du beim Hören *bis zum Ende* zuhören.' },

      { t: 'dialog', kicker: 'Dialog', title: 'Wie sieht dein Tag aus?',
        setting: 'Zwei Leute in der Bahn.',
        lines: [
          ['Lena', 'Wann stehst du eigentlich auf?', 'When do you actually get up?'],
          ['Emerson', 'Viel zu früh. Um halb sieben.', 'Way too early. At six thirty.'],
          ['Lena', 'Boah. Und dann?', 'Ugh. And then?'],
          ['Emerson', 'Dusche, Kaffee, und um acht fange ich an.', 'Shower, coffee, and I start at eight.'],
          ['Lena', 'Frühstückst du nichts?', 'You don’t eat breakfast?'],
          ['Emerson', 'Nie. Ich trinke nur Kaffee.', 'Never. I just drink coffee.'],
          ['Lena', 'Das ist ungesund, Digga.', 'That’s unhealthy, dude.'],
          ['Emerson', 'Weiß ich. Abends koche ich aber richtig.', 'I know. But in the evening I cook properly.'],
          ['Lena', 'Und danach?', 'And after that?'],
          ['Emerson', 'Meistens sehe ich fern oder ruf meine Schwester an.', 'Usually I watch TV or call my sister.']
        ],
        note: 'Achte auf *fange … an*, *sehe … fern*, *ruf … an*. Die Vorsilben stehen immer am Ende.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Wie oft?',
        items: [
          ['immer', 'always', 'Ich bin immer müde.', "I'm always tired."],
          ['meistens', 'usually, most of the time', 'Meistens koche ich.', 'I usually cook.'],
          ['oft', 'often', 'Wir gehen oft aus.', 'We often go out.'],
          ['manchmal', 'sometimes', 'Manchmal gehe ich laufen.', 'Sometimes I go running.'],
          ['selten', 'rarely', 'Ich trinke selten Alkohol.', 'I rarely drink alcohol.'],
          ['nie', 'never', 'Ich frühstücke nie.', 'I never eat breakfast.'],
          ['jeden Tag', 'every day', 'Ich lerne jeden Tag.', 'I study every day.'],
          ['einmal die Woche', 'once a week', 'Einmal die Woche Sport.', 'Sport once a week.'],
          ['zuerst', 'first', 'Zuerst dusche ich.', 'First I shower.'],
          ['dann', 'then', 'Dann trinke ich Kaffee.', 'Then I drink coffee.'],
          ['danach', 'after that', 'Danach gehe ich los.', 'After that I set off.'],
          ['zum Schluss', 'finally, at the end', 'Zum Schluss räume ich auf.', 'At the end I tidy up.']
        ],
        note: 'Diese Wörter sind Gold für Erzählungen. Mit *zuerst – dann – danach* klingt schon ein A1-Text wie ein echter Text.' },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Zeit nach vorne stellen',
        lead: 'Tipp ein Wort an und hör, wie das Verb an Position 2 bleibt und „ich“ nach hinten rutscht.',
        frame: '{} stehe ich um sieben auf.', enFrame: '{} I get up at seven.',
        slotLabel: 'Zeit',
        swaps: [
          ['Heute', 'Today'], ['Morgen', 'Tomorrow'], ['Am Montag', 'On Monday'],
          ['Meistens', 'Usually'], ['Jeden Tag', 'Every day'], ['Im Sommer', 'In summer']
        ],
        note: 'Du siehst es sofort: *stehe* bleibt an Platz zwei, *ich* geht dahinter. Das ist die ganze Regel.' },

      { t: 'street', title: 'Wie Leute wirklich über ihren Tag reden',
        lead: 'Im Video sagt niemand „Ich stehe um sieben Uhr auf und frühstücke anschließend“.',
        items: [
          ['Ich pack das nicht', "I can't deal with this", '*packen* = schaffen. Sehr häufig bei Stress.'],
          ['Ich bin durch', "I'm done / wiped", 'Kann „fertig mit der Arbeit“ oder „völlig erschöpft“ heißen.'],
          ['verpennt', 'overslept', '„Sorry, hab verpennt.“ Der häufigste Entschuldigungssatz.'],
          ['chillen', 'to chill', 'Vollwertiges deutsches Verb: ich chille, du chillst.'],
          ['abhängen', 'to hang out', '„Wir hängen nur ab.“'],
          ['keinen Bock auf', "not up for", '„Ich hab keinen Bock auf Arbeit.“'],
          ['am Start sein', 'to be there / be in', '„Bist du heute am Start?“'],
          ['durchziehen', 'to see something through', '„Ich zieh das jetzt durch.“ Auch trennbar!']
        ],
        note: '*abhängen*, *durchziehen*, *mitkommen* — Slang folgt derselben Grammatik. Vorsilbe ans Ende.' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Wortstellung',
        ex: [
          { k: 'order', en: 'Today I get up at seven.', words: ['Heute', 'stehe', 'ich', 'um', 'sieben', 'auf'],
            a: 'Heute stehe ich um sieben auf' },
          { k: 'choice', q: 'Welcher Satz ist richtig?',
            opts: ['Morgen ich gehe ins Kino.', 'Morgen gehe ich ins Kino.', 'Ich morgen gehe ins Kino.'], a: 1,
            why: 'Position 1 = Morgen, Position 2 = das Verb. Das Subjekt rutscht dahinter.' },
          { k: 'fill', q: 'Ich rufe dich später ___.', a: ['an'], en: "I'll call you later.",
            why: '*anrufen* ist trennbar — die Vorsilbe steht am Satzende.' },
          { k: 'fill', q: 'Der Film fängt um acht ___.', a: ['an'], en: 'The film starts at eight.' },
          { k: 'order', en: 'Are you coming along tonight?', words: ['Kommst', 'du', 'heute', 'Abend', 'mit'],
            a: 'Kommst du heute Abend mit' }
        ] },

      { t: 'culture', kicker: 'Alltag', title: 'Warum Deutsche früh anfangen',
        body: 'Der deutsche Arbeitstag beginnt früh — 7:30 oder 8:00 ist völlig normal, und entsprechend ist um 16:00 oder 17:00 Schluss. Handwerker klingeln um sieben. Bäcker öffnen um halb sechs.\nDafür gilt der Feierabend als heilig. Wer abends um acht noch Arbeits-E-Mails schickt, gilt nicht als fleißig, sondern als schlecht organisiert.\nUnd: *Ruhezeit*. Zwischen 22:00 und 6:00 und oft auch sonntags soll es leise sein. Das ist teilweise sogar rechtlich geregelt. Laute Musik um Mitternacht führt zu echtem Ärger mit den Nachbarn.',
        note: '*Feierabend* hat kein englisches Wort. Es heißt: der Arbeitstag ist vorbei, und zwar wirklich vorbei.' },

      { t: 'recap', kicker: 'Einheit 5', title: 'Was jetzt sitzen sollte',
        points: [
          'Verb an *Position 2*. Immer. „Heute *gehe* ich.“',
          'Trennbare Verben brechen auf: Vorsilbe ans *Satzende*.',
          'auf*stehen*, an*rufen*, ein*kaufen*, fern*sehen*, an*fangen*, mit*kommen*.',
          'Tageszeiten als Gewohnheit: morgens, mittags, abends, nachts.',
          'Erzähl-Gerüst: *zuerst – dann – danach – zum Schluss*.',
          'Beim Hören bis zum Satzende warten — die Vorsilbe kommt zuletzt.'
        ] }
    ],
    quiz: [
      { k: 'choice', q: 'Welcher Satz ist richtig?',
        opts: ['Am Montag ich arbeite.', 'Am Montag arbeite ich.', 'Am Montag arbeiten ich.'], a: 1,
        why: 'Verb an Position 2, Subjekt dahinter.' },
      { k: 'fill', q: 'Ich stehe um sechs ___.', a: ['auf'], en: 'I get up at six.' },
      { k: 'fill', q: 'Wir kaufen am Samstag ___.', a: ['ein'], en: 'We go shopping on Saturday.' },
      { k: 'fill', q: 'Abends sehe ich ___.', a: ['fern'], en: 'In the evening I watch TV.' },
      { k: 'order', en: 'Tomorrow I start at eight.', words: ['Morgen', 'fange', 'ich', 'um', 'acht', 'an'],
        a: 'Morgen fange ich um acht an' },
      { k: 'order', en: 'I never eat breakfast.', words: ['Ich', 'frühstücke', 'nie'], a: 'Ich frühstücke nie' },
      { k: 'order', en: 'I call my mother every Sunday.', words: ['Ich', 'rufe', 'meine', 'Mutter', 'jeden', 'Sonntag', 'an'],
        a: 'Ich rufe meine Mutter jeden Sonntag an' },
      { k: 'listen', de: 'Ich stehe jeden Tag um sieben auf.', a: ['Ich stehe jeden Tag um sieben auf'], en: 'I get up at seven every day.' },
      { k: 'listen', de: 'Wann fängt der Film an?', a: ['Wann fängt der Film an'], en: 'When does the film start?' },
      { k: 'match', q: 'Häufigkeit', pairs: [
        ['immer', 'always'], ['meistens', 'usually'], ['manchmal', 'sometimes'], ['nie', 'never']
      ] },
      { k: 'match', q: 'Trennbare Verben', pairs: [
        ['aufstehen', 'to get up'], ['anrufen', 'to call'], ['einkaufen', 'to go shopping'], ['mitkommen', 'to come along']
      ] },
      { k: 'trans', en: 'Today I am not going to work.', a: ['Heute gehe ich nicht zur Arbeit.', 'Ich gehe heute nicht zur Arbeit.'],
        hint: 'nicht vor „zur Arbeit“' },
      { k: 'choice', q: 'Was bedeutet „Ich hab verpennt“?',
        opts: ['Ich habe vergessen.', 'Ich habe verschlafen.', 'Ich bin krank.'], a: 1,
        why: '*verpennen* = verschlafen, Umgangssprache.' },
      { k: 'choice', q: 'Wo steht die Vorsilbe von „anrufen“ im Satz?',
        opts: ['Direkt vor dem Verb.', 'Am Ende des Satzes.', 'An Position 1.'], a: 1 }
    ]
  });
})();
