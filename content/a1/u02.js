/* Unit 2 — Numbers, time, plans */
(function () {
  window.DE.registerUnit({
    id: 'a1-02', level: 'A1', num: 2, minutes: 38,
    title: 'Numbers, time, making plans',
    subtitle: 'Counting, telling the time, arranging to meet · haben · the calendar',
    can: [
      'Say and understand any number up to a million.',
      'Ask for the time and give it — both the official way and the everyday way.',
      'Arrange to meet someone.',
      'Give your phone number and your date of birth.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 2', title: 'Numbers are where listening breaks first',
        lead: 'You will be able to read German numbers long before you can hear them. There is a reason for that, and we clear it up today.',
        points: [
          'German numbers run *backwards*: 21 = "einundzwanzig" = one-and-twenty.',
          'Telling the time in conversation works differently from the timetable.',
          '*haben* (to have) — the second most important verb after *sein*.',
          'Days, months, dates: the whole calendar.'
        ],
        note: 'Give the listening exercises real time here. Reading numbers is not the same skill as hearing them.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Zero to twelve',
        items: [
          ['null', '0', 'null Grad', 'zero degrees'],
          ['eins', '1', 'Nummer eins', 'number one'],
          ['zwei', '2', 'zwei Kaffee, bitte', 'two coffees, please'],
          ['drei', '3', 'in drei Minuten', 'in three minutes'],
          ['vier', '4', 'vier Personen', 'four people'],
          ['fünf', '5', 'fünf Euro', 'five euros'],
          ['sechs', '6', 'sechs Uhr', "six o'clock"],
          ['sieben', '7', 'sieben Tage', 'seven days'],
          ['acht', '8', 'acht Stunden', 'eight hours'],
          ['neun', '9', 'neun Wochen', 'nine weeks'],
          ['zehn', '10', 'zehn Minuten', 'ten minutes'],
          ['elf', '11', 'elf Uhr', "eleven o'clock"],
          ['zwölf', '12', 'zwölf Monate', 'twelve months']
        ],
        note: 'On the phone Germans often say *zwo* instead of *zwei* for 2, so it can’t be confused with *drei*.' },

      { t: 'grammar', kicker: 'Grammar', title: 'Why 21 is back to front',
        body: 'From 13 upwards you build numbers like this: *unit + und + ten*. "Einundzwanzig" is literally "one-and-twenty" — the same pattern as the old English "four-and-twenty blackbirds", except German never dropped it.\nAnd it is written as *one word*. Yes, even "siebenundachtzig".',
        table: {
          head: ['Number', 'German', 'Built from'],
          rows: [
            ['13', 'dreizehn', 'drei + zehn'],
            ['16', '*sechzehn*', 'sechs loses its s'],
            ['17', '*siebzehn*', 'sieben loses its -en'],
            ['20', 'zwanzig', '—'],
            ['21', 'einundzwanzig', 'ein + und + zwanzig'],
            ['30', 'dreißig', 'with ß, not -zig'],
            ['42', 'zweiundvierzig', 'zwei + und + vierzig'],
            ['60', '*sechzig*', 'no s again'],
            ['70', '*siebzig*', 'no -en again'],
            ['99', 'neunundneunzig', 'neun + und + neunzig']
          ]
        },
        examples: [
          ['Ich bin siebzehn.', "I'm seventeen."],
          ['Das kostet zweiundvierzig Euro.', 'That costs forty-two euros.'],
          ['Sie ist fünfunddreißig Jahre alt.', 'She is thirty-five years old.']
        ],
        note: 'When you hear "einundzwanzig", the *1* hits your ear first. Germans themselves write numbers down wrong on the phone because of this.',
        noteKind: 'warn' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Bigger numbers',
        items: [
          ['zwanzig', '20', 'zwanzig Euro', 'twenty euros'],
          ['dreißig', '30', 'dreißig Minuten', 'thirty minutes'],
          ['vierzig', '40', 'vierzig Grad', 'forty degrees'],
          ['fünfzig', '50', 'fünfzig Prozent', 'fifty percent'],
          ['sechzig', '60', 'sechzig Sekunden', 'sixty seconds'],
          ['siebzig', '70', 'siebzig Jahre', 'seventy years'],
          ['achtzig', '80', 'achtzig Kilo', 'eighty kilos'],
          ['neunzig', '90', 'neunzig Tage', 'ninety days'],
          ['(ein)hundert', '100', 'hundert Euro', 'a hundred euros'],
          ['zweihundert', '200', 'zweihundert Meter', 'two hundred metres'],
          ['(ein)tausend', '1,000', 'tausend Leute', 'a thousand people'],
          ['eine Million', '1,000,000', 'eine Million Aufrufe', 'a million views'],
          ['die Zahl', 'number (figure)', 'Welche Zahl ist das?', 'Which number is that?'],
          ['die Nummer', 'number (phone, house)', 'Meine Nummer ist …', 'My number is …']
        ],
        note: 'German uses a *full stop* for thousands and a *comma* for decimals: 1.500,50 € — exactly the opposite of English.' },

      { t: 'grammar', kicker: 'Grammar', title: 'haben — verb number two',
        body: 'Use *haben* (to have) for what you own, whether you have time, whether you’re hungry, whether you’re up for something. Later you build the entire past tense with it.',
        table: {
          head: ['Person', 'Form', 'Example'],
          rows: [
            ['ich', '*habe* (spoken: hab)', 'Ich hab keine Zeit. — I have no time.'],
            ['du', '*hast*', 'Hast du Feuer? — Got a light?'],
            ['er / sie / es', '*hat*', 'Sie hat einen Hund. — She has a dog.'],
            ['wir', '*haben*', 'Wir haben Hunger. — We’re hungry.'],
            ['ihr', '*habt*', 'Habt ihr Zeit? — Have you lot got time?'],
            ['sie / Sie', '*haben*', 'Haben Sie einen Termin? — Do you have an appointment?']
          ]
        },
        examples: [
          ['Ich hab morgen frei.', "I'm off tomorrow."],
          ['Hast du kurz Zeit?', 'Do you have a minute?'],
          ['Wir haben einen Termin um drei.', 'We have an appointment at three.']
        ],
        note: 'Age is the big exception: *Ich bin 17* — "I am 17", not "I have 17". Unlike French or Spanish.',
        noteKind: 'warn' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Time and the calendar',
        items: [
          ['die Uhr', "clock / o'clock", 'Wie spät ist es?', 'What time is it?'],
          ['die Stunde', 'hour', 'in einer Stunde', 'in an hour'],
          ['die Minute', 'minute', 'fünf Minuten', 'five minutes'],
          ['der Tag', 'day', 'jeden Tag', 'every day'],
          ['die Woche', 'week', 'nächste Woche', 'next week'],
          ['der Monat', 'month', 'diesen Monat', 'this month'],
          ['das Jahr', 'year', 'letztes Jahr', 'last year'],
          ['heute', 'today', 'Heute ist Montag.', 'Today is Monday.'],
          ['morgen', 'tomorrow', 'Bis morgen!', 'See you tomorrow!'],
          ['gestern', 'yesterday', 'Gestern war gut.', 'Yesterday was good.'],
          ['jetzt', 'now', 'Jetzt sofort.', 'Right now.'],
          ['später', 'later', 'Bis später.', 'See you later.'],
          ['früh', 'early', 'Zu früh.', 'Too early.'],
          ['spät', 'late', 'Es ist schon spät.', "It's already late."],
          ['der Termin', 'appointment', 'Ich habe einen Termin.', 'I have an appointment.'],
          ['die Zeit', 'time', 'Hast du Zeit?', 'Do you have time?']
        ] },

      { t: 'grammar', kicker: 'Grammar', title: 'Telling the time: two systems, both needed',
        body: 'At the station, in a calendar, on TV: the *official* system, 24 hours, purely mechanical. Between people: the *everyday* system, 12 hours, with halves and quarters.\nThe trap is *halb*. "Halb acht" is 7:30, not 8:30 — German counts *towards* the coming hour, not away from the last one.',
        table: {
          head: ['Time', 'Official', 'Everyday'],
          rows: [
            ['8:00', 'acht Uhr', 'acht'],
            ['8:15', 'acht Uhr fünfzehn', '*viertel nach acht*'],
            ['8:30', 'acht Uhr dreißig', '*halb neun* ⚠️'],
            ['8:45', 'acht Uhr fünfundvierzig', '*viertel vor neun*'],
            ['8:10', 'acht Uhr zehn', 'zehn nach acht'],
            ['8:50', 'acht Uhr fünfzig', 'zehn vor neun'],
            ['20:00', 'zwanzig Uhr', 'acht (abends)']
          ]
        },
        examples: [
          ['Wie spät ist es? — Halb neun.', 'What time is it? — Half past eight (8:30).'],
          ['Der Zug fährt um sechzehn Uhr zwölf.', 'The train leaves at 16:12.'],
          ['Treffen wir uns um acht?', 'Shall we meet at eight?']
        ],
        note: '*halb neun* = 8:30. Say it out loud three times. This one mistake regularly costs learners a missed appointment.',
        noteKind: 'warn' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Days and months',
        items: [
          ['der Montag', 'Monday', 'am Montag', 'on Monday'],
          ['der Dienstag', 'Tuesday', 'Dienstagabend', 'Tuesday evening'],
          ['der Mittwoch', 'Wednesday — literally "mid-week"', 'jeden Mittwoch', 'every Wednesday'],
          ['der Donnerstag', "Thursday — Thor's day", 'bis Donnerstag', 'until Thursday'],
          ['der Freitag', 'Friday', 'Freitag ist frei.', "Friday's free."],
          ['der Samstag', 'Saturday (also: Sonnabend)', 'am Samstag', 'on Saturday'],
          ['der Sonntag', 'Sunday — everything is shut', 'Sonntag ist alles zu.', 'Everything is closed on Sunday.'],
          ['das Wochenende', 'weekend', 'Schönes Wochenende!', 'Have a good weekend!'],
          ['Januar / Februar / März', 'Jan / Feb / Mar', 'im März', 'in March'],
          ['April / Mai / Juni', 'Apr / May / Jun', 'im Juni', 'in June'],
          ['Juli / August / September', 'Jul / Aug / Sep', 'im September', 'in September'],
          ['Oktober / November / Dezember', 'Oct / Nov / Dec', 'im Dezember', 'in December']
        ],
        note: 'All days are *der*. For points in time: *am* Montag (on), *im* Juni (in), *um* acht Uhr (at).' },

      { t: 'dialog', kicker: 'Dialogue', title: 'Arranging to meet',
        setting: 'Two friends texting. This is genuinely how Germans type.',
        lines: [
          ['Jonas', 'Ey, hast du morgen Zeit?', 'Hey, you free tomorrow?'],
          ['Emerson', 'Kommt drauf an. Wann denn?', 'Depends. When?'],
          ['Jonas', 'So gegen halb sieben?', 'Around half six (6:30)?'],
          ['Emerson', 'Halb sieben ist schlecht, da arbeite ich noch.', "Six thirty is bad, I'm still working then."],
          ['Jonas', 'Okay, und um acht?', 'Okay, and at eight?'],
          ['Emerson', 'Acht passt.', 'Eight works.'],
          ['Jonas', 'Nice. Dann um acht bei mir.', 'Nice. Eight at my place then.'],
          ['Emerson', 'Alles klar, bis dann!', 'Alright, see you then!']
        ],
        note: '*gegen acht* = around eight. *um acht* = exactly eight. *ab acht* = from eight onwards.' },

      { t: 'street', title: 'Time, the relaxed way',
        lead: 'Nobody says "at eighteen hundred thirty" to a friend.',
        items: [
          ['gegen acht', 'around eight', 'The safest way to arrange anything. Nobody is punctual to the minute socially.'],
          ['so um acht rum', 'about eight-ish', 'Even vaguer. "rum" is short for "herum".'],
          ['halb acht', '7:30 — not 8:30', 'The classic misunderstanding.'],
          ['Punkt acht', 'eight sharp', 'This signals: genuinely on time.'],
          ['Ich bin gleich da', "I'm almost there", 'In practice this means anywhere from 2 to 25 minutes.'],
          ['Ich komm später', "I'll come later", 'No time given. Very common, very non-committal.'],
          ['Wann passt’s dir?', 'When suits you?', 'The normal way to ask. Not "wann ist gut für dich".'],
          ['Sorry, hab verpennt', 'Sorry, I overslept', '*verpennen* is slang for oversleeping.']
        ] },

      { t: 'pattern', kicker: 'Sentence builder', title: 'When shall we meet?',
        frame: 'Treffen wir uns um {}?', enFrame: 'Shall we meet at {}?',
        slotLabel: 'time',
        swaps: [
          ['acht', 'eight'], ['halb neun', 'half past eight'], ['viertel nach sechs', 'quarter past six'],
          ['viertel vor zehn', 'quarter to ten'], ['zwölf', 'twelve'], ['sieben', 'seven']
        ],
        note: 'For an approximate time, swap *um* for *gegen*: "Treffen wir uns gegen acht?"' },

      { t: 'drill', kicker: 'Try it now', title: 'Numbers in your ear',
        lead: 'The listening questions matter most here. Take your time with them.',
        ex: [
          { k: 'choice', q: 'What time is "halb zehn"?', opts: ['10:30', '9:30', '9:00'], a: 1,
            why: 'German counts *towards* the next hour: halb zehn = halfway to ten = 9:30.' },
          { k: 'listen', de: 'einundzwanzig', a: ['einundzwanzig', '21'], en: 'twenty-one' },
          { k: 'listen', de: 'siebenundsiebzig', a: ['siebenundsiebzig', '77'], en: 'seventy-seven' },
          { k: 'fill', q: 'Ich ___ morgen keine Zeit.', a: ['habe', 'hab'], en: "I don't have time tomorrow.",
            why: 'ich *habe* — spoken it is almost always "hab".' },
          { k: 'choice', q: 'How do you write 16 in German?', opts: ['sechszehn', 'sechzehn', 'sechsundzehn'], a: 1,
            why: '16 drops the s: *sechzehn*. Same with 60: *sechzig*.' }
        ] },

      { t: 'culture', kicker: 'Culture', title: 'The punctuality thing is real',
        body: 'The cliché largely holds. For appointments — doctor, office, job interview, university — 14:00 means standing there at 13:55. Turning up late is not a small thing; it reads as disrespectful.\nSocially it is looser, but even then people send a quick "bin 10 Min später" (I’ll be 10 minutes late). Just drifting in whenever is not done.\nAlso: on Sundays almost everything in Germany is closed. Supermarkets, most shops. Forget that and you eat toast on Sunday.',
        note: 'The most useful sentence for running late: "Sorry, ich bin zehn Minuten später."' },

      { t: 'recap', kicker: 'Unit 2', title: 'What should stick now',
        points: [
          'Numbers run backwards: 21 = ein*und*zwanzig.',
          '16/17/60/70 drop letters: sech*zehn*, sieb*zehn*, sech*zig*, sieb*zig*.',
          '*halb neun* = 8:30. Always one hour "earlier" than it feels.',
          '*haben*: habe, hast, hat, haben, habt, haben.',
          'Age uses *sein*: "Ich bin 17."',
          '*am* Montag · *im* Juni · *um* acht · *gegen* acht.'
        ] }
    ],
    quiz: [
      { k: 'choice', q: 'What is "halb sieben"?', opts: ['7:30', '6:30', '7:00'], a: 1, why: 'halb sieben = 6:30.' },
      { k: 'choice', q: 'How do you write 67?', opts: ['sechsundsiebzig', 'siebenundsechzig', 'sechzigsieben'], a: 1,
        why: 'Unit first: sieben + und + sechzig.' },
      { k: 'fill', q: '___ du morgen Zeit?', a: ['hast'], en: 'Do you have time tomorrow?', why: 'du takes *hast*.' },
      { k: 'fill', q: 'Wir ___ einen Termin um drei.', a: ['haben'], en: 'We have an appointment at three.' },
      { k: 'fill', q: 'Ich bin ___ Jahre alt. (17)', a: ['siebzehn'], en: "I'm seventeen years old.",
        why: '17 = *siebzehn* — "sieben" drops its -en.' },
      { k: 'listen', de: 'Es ist viertel vor neun.', a: ['Es ist viertel vor neun'], en: "It's quarter to nine (8:45)." },
      { k: 'listen', de: 'Ich habe am Montag einen Termin.',
        a: ['Ich habe am Montag einen Termin', 'Ich hab am Montag einen Termin'], en: 'I have an appointment on Monday.' },
      { k: 'order', en: 'Shall we meet at eight?', words: ['Treffen', 'wir', 'uns', 'um', 'acht'], a: 'Treffen wir uns um acht' },
      { k: 'order', en: 'I have no time today.', words: ['Ich', 'habe', 'heute', 'keine', 'Zeit'], a: 'Ich habe heute keine Zeit' },
      { k: 'match', q: 'Times', pairs: [
        ['viertel nach sechs', '6:15'], ['halb sieben', '6:30'], ['viertel vor sieben', '6:45'], ['Punkt sieben', '7:00 sharp']
      ] },
      { k: 'match', q: 'Time words', pairs: [
        ['gestern', 'yesterday'], ['heute', 'today'], ['morgen', 'tomorrow'], ['gegen acht', 'around eight']
      ] },
      { k: 'choice', q: 'How do you say your age?', opts: ['Ich habe 17 Jahre.', 'Ich bin 17.', 'Ich bin 17 Jahre.'], a: 1,
        why: 'German uses *sein*: "Ich bin 17" or "Ich bin 17 Jahre alt".' },
      { k: 'trans', en: 'Do you have time on Friday?',
        a: ['Hast du am Freitag Zeit?', 'Hast du Zeit am Freitag?', 'Haben Sie am Freitag Zeit?'], hint: 'Hast du …' },
      { k: 'choice', q: '1.500,50 € — how does a German read that?',
        opts: ['one thousand five hundred point fifty', 'one point five hundred', 'fifteen euros fifty'], a: 0,
        why: 'Full stop = thousands, comma = decimal. The opposite of English.' }
    ]
  });
})();
