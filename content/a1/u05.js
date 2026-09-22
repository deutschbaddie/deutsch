/* Unit 5 — My day */
(function () {
  window.DE.registerUnit({
    id: 'a1-05', level: 'A1', num: 5, minutes: 38,
    title: 'My day',
    subtitle: 'Describing your routine · separable verbs · verb in second position',
    can: [
      'Describe what you do on a normal day.',
      'Use the single most important German sentence rule: the verb goes second.',
      'Use separable verbs — aufstehen, anrufen, einkaufen.',
      'Say how often you do something.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 5', title: 'The one rule that holds everything together',
        lead: 'If you take only one grammar rule out of A1 German, take this: the verb goes in second position. Always.',
        points: [
          'Verb in second position — and what "position" actually means here.',
          'Separable verbs: the verb splits in half and one half flies to the end.',
          'A full day’s routine as vocabulary.',
          'Frequency: always, often, sometimes, never.'
        ] },

      { t: 'grammar', kicker: 'The main rule', title: 'The verb goes second',
        body: 'In a German statement the conjugated verb is always in the *second slot*. What comes before it is up to you — but it is exactly *one* building block.\nThis is why German sounds "inverted" to English speakers: if you start the sentence with a time expression, the subject slides in *behind* the verb.',
        table: {
          head: ['Slot 1', 'Slot 2 (verb)', 'The rest'],
          rows: [
            ['Ich', '*stehe*', 'um sieben auf. — I get up at seven.'],
            ['Um sieben', '*stehe*', 'ich auf. ⚠️ — At seven I get up.'],
            ['Heute', '*gehe*', 'ich nicht zur Arbeit. — Today I’m not going to work.'],
            ['Am Montag', '*habe*', 'ich einen Termin. — On Monday I have an appointment.'],
            ['Meine Schwester', '*wohnt*', 'in Berlin. — My sister lives in Berlin.']
          ]
        },
        examples: [
          ['*Ich gehe* heute ins Kino.', "I'm going to the cinema today."],
          ['*Heute gehe ich* ins Kino.', "Today I'm going to the cinema."],
          ['*Morgen habe ich* frei.', "Tomorrow I'm off."]
        ],
        note: 'English says "Today I go". German says "Heute gehe ich". Verb and subject swap places. That is not an exception — that is the rule.',
        noteKind: 'warn' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'The daily routine',
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
        note: 'For habits, times of day go lowercase with an -s: *morgens, mittags, abends, nachts*. "Ich arbeite abends." — I work evenings.' },

      { t: 'grammar', kicker: 'Grammar', title: 'Separable verbs — the verb splits',
        body: 'Some verbs are made of two parts: a prefix and a verb. *auf*stehen (get up), *an*rufen (call), *ein*kaufen (shop), *fern*sehen (watch TV).\nIn a sentence they come apart: the verb is conjugated and sits in slot two, and the prefix flies to the *end of the sentence*, where it waits until the sentence is over.',
        table: {
          head: ['Infinitive', 'In a sentence', 'Meaning'],
          rows: [
            ['*auf*stehen', 'Ich stehe um sieben *auf*.', 'I get up at seven.'],
            ['*an*rufen', 'Ich rufe dich später *an*.', "I'll call you later."],
            ['*ein*kaufen', 'Wir kaufen heute *ein*.', "We're shopping today."],
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
        note: 'The longer the sentence, the further back the prefix. Germans hold the decisive part back until the end — which is why, when listening, you have to wait *to the end*.' },

      { t: 'dialog', kicker: 'Dialogue', title: 'What does your day look like?',
        setting: 'Two people on the train.',
        lines: [
          ['Lena', 'Wann stehst du eigentlich auf?', 'When do you actually get up?'],
          ['Emerson', 'Viel zu früh. Um halb sieben.', 'Way too early. At six thirty.'],
          ['Lena', 'Boah. Und dann?', 'Ugh. And then?'],
          ['Emerson', 'Dusche, Kaffee, und um acht fange ich an.', 'Shower, coffee, and I start at eight.'],
          ['Lena', 'Frühstückst du nichts?', "You don't eat breakfast?"],
          ['Emerson', 'Nie. Ich trinke nur Kaffee.', 'Never. I just drink coffee.'],
          ['Lena', 'Das ist ungesund, Digga.', "That's unhealthy, dude."],
          ['Emerson', 'Weiß ich. Abends koche ich aber richtig.', 'I know. But in the evening I cook properly.'],
          ['Lena', 'Und danach?', 'And after that?'],
          ['Emerson', 'Meistens sehe ich fern oder ruf meine Schwester an.', 'Usually I watch TV or call my sister.']
        ],
        note: 'Watch *fange … an*, *sehe … fern*, *ruf … an*. The prefixes always end up at the end.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'How often?',
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
        note: 'These words are gold for telling a story. With *zuerst – dann – danach*, even an A1 text starts sounding like a real one.' },

      { t: 'pattern', kicker: 'Sentence builder', title: 'Putting time first',
        lead: 'Tap a word and watch the verb stay in slot two while "ich" slides behind it.',
        frame: '{} stehe ich um sieben auf.', enFrame: '{} I get up at seven.',
        slotLabel: 'time',
        swaps: [
          ['Heute', 'Today'], ['Morgen', 'Tomorrow'], ['Am Montag', 'On Monday'],
          ['Meistens', 'Usually'], ['Jeden Tag', 'Every day'], ['Im Sommer', 'In summer']
        ],
        note: 'You can see it immediately: *stehe* stays in second place, *ich* goes behind it. That is the whole rule.' },

      { t: 'street', title: 'How people really talk about their day',
        lead: 'In a video nobody says "I arise at seven and subsequently breakfast".',
        items: [
          ['Ich pack das nicht', "I can't deal with this", '*packen* here means "manage". Very common under stress.'],
          ['Ich bin durch', "I'm done / wiped", 'Can mean "finished work" or "completely exhausted".'],
          ['verpennt', 'overslept', '"Sorry, hab verpennt." The most common excuse sentence there is.'],
          ['chillen', 'to chill', 'A fully functioning German verb: ich chille, du chillst.'],
          ['abhängen', 'to hang out', '"Wir hängen nur ab." — We\'re just hanging out.'],
          ['keinen Bock auf', 'not up for', '"Ich hab keinen Bock auf Arbeit." — I can\'t be bothered with work.'],
          ['am Start sein', 'to be there / be in', '"Bist du heute am Start?" — You around today?'],
          ['durchziehen', 'to see something through', '"Ich zieh das jetzt durch." Also separable.']
        ],
        note: '*abhängen*, *durchziehen*, *mitkommen* — slang follows the same grammar. Prefix to the end.' },

      { t: 'drill', kicker: 'Try it now', title: 'Word order',
        ex: [
          { k: 'order', en: 'Today I get up at seven.', words: ['Heute', 'stehe', 'ich', 'um', 'sieben', 'auf'],
            a: 'Heute stehe ich um sieben auf' },
          { k: 'choice', q: 'Which sentence is correct?',
            opts: ['Morgen ich gehe ins Kino.', 'Morgen gehe ich ins Kino.', 'Ich morgen gehe ins Kino.'], a: 1,
            why: 'Slot 1 = Morgen, slot 2 = the verb. The subject slides in behind it.' },
          { k: 'fill', q: 'Ich rufe dich später ___.', a: ['an'], en: "I'll call you later.",
            why: '*anrufen* is separable — the prefix goes to the end of the sentence.' },
          { k: 'fill', q: 'Der Film fängt um acht ___.', a: ['an'], en: 'The film starts at eight.' },
          { k: 'order', en: 'Are you coming along tonight?', words: ['Kommst', 'du', 'heute', 'Abend', 'mit'],
            a: 'Kommst du heute Abend mit' }
        ] },

      { t: 'culture', kicker: 'Everyday life', title: 'Why Germans start early',
        body: 'The German working day starts early — 7:30 or 8:00 is completely normal, and so it ends at 16:00 or 17:00. Tradesmen ring your doorbell at seven. Bakeries open at half five.\nIn exchange, *Feierabend* — the end of the working day — is sacred. Sending work emails at eight in the evening doesn’t mark you as hard-working, it marks you as badly organised.\nAlso: *Ruhezeit*, quiet hours. Between 22:00 and 06:00, and often on Sundays, it is meant to be quiet. Some of this is actual law. Loud music at midnight leads to genuine trouble with the neighbours.',
        note: '*Feierabend* has no English word. It means the working day is over, and properly over.' },

      { t: 'recap', kicker: 'Unit 5', title: 'What should stick now',
        points: [
          'The verb goes in *slot two*. Always. "Heute *gehe* ich."',
          'Separable verbs break apart: prefix to the *end of the sentence*.',
          'auf*stehen*, an*rufen*, ein*kaufen*, fern*sehen*, an*fangen*, mit*kommen*.',
          'Times of day as habits: morgens, mittags, abends, nachts.',
          'Story scaffolding: *zuerst – dann – danach – zum Schluss*.',
          'When listening, wait for the end of the sentence — the prefix comes last.'
        ] }
    ],
    quiz: [
      { k: 'choice', q: 'Which sentence is correct?',
        opts: ['Am Montag ich arbeite.', 'Am Montag arbeite ich.', 'Am Montag arbeiten ich.'], a: 1,
        why: 'Verb in slot two, subject behind it.' },
      { k: 'fill', q: 'Ich stehe um sechs ___.', a: ['auf'], en: 'I get up at six.' },
      { k: 'fill', q: 'Wir kaufen am Samstag ___.', a: ['ein'], en: 'We go shopping on Saturday.' },
      { k: 'fill', q: 'Abends sehe ich ___.', a: ['fern'], en: 'In the evening I watch TV.' },
      { k: 'order', en: 'Tomorrow I start at eight.', words: ['Morgen', 'fange', 'ich', 'um', 'acht', 'an'],
        a: 'Morgen fange ich um acht an' },
      { k: 'order', en: 'I never eat breakfast.', words: ['Ich', 'frühstücke', 'nie'], a: 'Ich frühstücke nie' },
      { k: 'order', en: 'I call my mother every Sunday.',
        words: ['Ich', 'rufe', 'meine', 'Mutter', 'jeden', 'Sonntag', 'an'], a: 'Ich rufe meine Mutter jeden Sonntag an' },
      { k: 'listen', de: 'Ich stehe jeden Tag um sieben auf.', a: ['Ich stehe jeden Tag um sieben auf'],
        en: 'I get up at seven every day.' },
      { k: 'listen', de: 'Wann fängt der Film an?', a: ['Wann fängt der Film an'], en: 'When does the film start?' },
      { k: 'match', q: 'Frequency', pairs: [
        ['immer', 'always'], ['meistens', 'usually'], ['manchmal', 'sometimes'], ['nie', 'never']
      ] },
      { k: 'match', q: 'Separable verbs', pairs: [
        ['aufstehen', 'to get up'], ['anrufen', 'to call'], ['einkaufen', 'to go shopping'], ['mitkommen', 'to come along']
      ] },
      { k: 'trans', en: 'Today I am not going to work.',
        a: ['Heute gehe ich nicht zur Arbeit.', 'Ich gehe heute nicht zur Arbeit.'], hint: 'nicht before "zur Arbeit"' },
      { k: 'choice', q: 'What does "Ich hab verpennt" mean?',
        opts: ['I forgot.', 'I overslept.', "I'm ill."], a: 1, why: '*verpennen* = to oversleep, slang.' },
      { k: 'choice', q: 'Where does the prefix of "anrufen" go in a sentence?',
        opts: ['Right before the verb.', 'At the end of the sentence.', 'In slot one.'], a: 1 }
    ]
  });
})();
