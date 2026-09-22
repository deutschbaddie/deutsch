/* Unit 1 — Hello */
(function () {
  window.DE.registerUnit({
    id: 'a1-01', level: 'A1', num: 1, minutes: 35,
    title: 'Hello — who are you?',
    subtitle: 'Greetings, introducing yourself, asking names · sein · question words',
    can: [
      'Introduce yourself and ask someone their name.',
      'Tell whether someone is being formal or casual with you.',
      'Say where you are from and where you live.',
      'Recognise the greetings that open most German TikToks.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 1', title: 'The first sentences that actually matter',
        lead: 'Not "the dog is brown". This is what you need in the first thirty seconds of meeting someone.',
        points: [
          '*Ich heiße …* — how you give your name. (Not "Mein Name ist", which sounds like a form.)',
          '*Wie heißt du?* vs. *Wie heißen Sie?* — the most important social switch in German.',
          'The verb *sein* (to be) in every form. You need it in almost every sentence.',
          'The question words: wer, wie, wo, woher, was.'
        ],
        note: 'Say everything out loud. Reading silently does nothing for speaking.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Hello and goodbye',
        lead: 'Time of day decides which one. "Guten Morgen" after 11 sounds odd.',
        items: [
          ['Hallo', 'hello — works anywhere, any time', 'Hallo, ich bin Max.', "Hi, I'm Max."],
          ['Guten Morgen', 'good morning (until about 11)', 'Guten Morgen! Gut geschlafen?', 'Good morning! Sleep well?'],
          ['Guten Tag', 'good day — the polite default with strangers', 'Guten Tag, Frau Weber.', 'Good day, Ms. Weber.'],
          ['Guten Abend', 'good evening (from about 6pm)', 'Guten Abend, einen Tisch für zwei bitte.', 'Good evening, a table for two please.'],
          ['Gute Nacht', 'good night — only when someone is off to bed', 'Gute Nacht, schlaf gut.', 'Good night, sleep well.'],
          ['Tschüss', 'bye — casual, extremely common', 'Tschüss, bis morgen!', 'Bye, see you tomorrow!'],
          ['Auf Wiedersehen', 'goodbye — formal; shops and offices', 'Auf Wiedersehen!', 'Goodbye!'],
          ['Bis später', 'see you later', 'Bis später, ja?', 'See you later, yeah?'],
          ['Bis morgen', 'see you tomorrow', 'Bis morgen in der Schule.', 'See you tomorrow at school.'],
          ['Servus', 'hi / bye — Bavaria and Austria', 'Servus, alles gut?', 'Hi, all good?'],
          ['Moin', 'hi — northern Germany, any hour of the day', 'Moin moin!', 'Hi there!'],
          ['Grüß dich', 'hi (warm, a bit southern)', 'Grüß dich, lange nicht gesehen.', 'Hi, long time no see.']
        ],
        note: '*Moin* in the north, *Servus* in the south, *Hallo* everywhere. When in doubt: Hallo.' },

      { t: 'grammar', kicker: 'Grammar', title: 'sein — the verb you cannot avoid',
        body: 'Every language has one verb that turns up constantly. In German it is *sein* (to be). It is irregular — no logic to work out, just learn it once properly and never think about it again.',
        table: {
          head: ['Person', 'Form', 'Example'],
          rows: [
            ['ich — I', '*bin*', 'Ich bin müde. — I’m tired.'],
            ['du — you (casual)', '*bist*', 'Du bist nett. — You’re nice.'],
            ['er / sie / es — he / she / it', '*ist*', 'Sie ist da. — She’s here.'],
            ['wir — we', '*sind*', 'Wir sind hier. — We’re here.'],
            ['ihr — you lot', '*seid*', 'Ihr seid laut. — You lot are loud.'],
            ['sie / Sie — they / you (formal)', '*sind*', 'Sie sind Lehrer. — They’re teachers.']
          ]
        },
        examples: [
          ['Ich bin Emerson.', "I'm Emerson."],
          ['Du bist zu früh.', "You're too early."],
          ['Das ist mein Bruder.', "That's my brother."],
          ['Wir sind aus Amerika.', "We're from America."]
        ],
        note: 'Germans themselves misspell *ihr seid*. It ends in d. The word *seit* with a t means "since".' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Introducing yourself',
        items: [
          ['Ich heiße …', 'my name is … (literally: I am called)', 'Ich heiße Emerson.', "My name's Emerson."],
          ['Ich bin …', "I'm … — shorter, very common", 'Ich bin Emerson.', "I'm Emerson."],
          ['Wie heißt du?', "what's your name? (casual)", 'Und wie heißt du?', "And what's your name?"],
          ['Wie heißen Sie?', "what's your name? (formal)", 'Entschuldigung, wie heißen Sie?', 'Excuse me, what is your name?'],
          ['Ich komme aus …', "I'm from …", 'Ich komme aus Amerika.', "I'm from America."],
          ['Woher kommst du?', 'where are you from?', 'Woher kommst du denn?', 'So where are you from?'],
          ['Ich wohne in …', 'I live in …', 'Ich wohne in Berlin.', 'I live in Berlin.'],
          ['Wo wohnst du?', 'where do you live?', 'Wo wohnst du genau?', 'Where exactly do you live?'],
          ['Freut mich', 'nice to meet you', 'Freut mich! — Mich auch.', 'Nice to meet you! — You too.'],
          ['Wie geht es dir?', 'how are you? (casual)', 'Hey, wie geht es dir?', 'Hey, how are you?'],
          ['Wie geht’s?', "how's it going? — what people actually say", 'Na, wie geht’s?', "So, how's it going?"],
          ['Mir geht’s gut', "I'm doing well", 'Mir geht’s gut, danke.', "I'm good, thanks."],
          ['Und dir?', 'and you?', 'Gut, und dir?', 'Good, and you?'],
          ['danke', 'thanks', 'Danke schön!', 'Thank you!'],
          ['bitte', "please — and also: you're welcome", 'Danke. — Bitte.', "Thanks. — You're welcome."]
        ],
        note: 'Nobody expects an honest life update after *Wie geht’s?* "Gut, und dir?" is the whole answer.' },

      { t: 'grammar', kicker: 'The big switch', title: 'du or Sie?',
        body: 'German has two words for "you". Picking the wrong one is not a grammar mistake, it is a social one.\n*du* — friends, family, anyone under about 25 among themselves, the entire internet, colleagues at relaxed companies.\n*Sie* — adults you don’t know, officials, doctors, teachers, anyone older that you have not been invited to be casual with.',
        table: {
          head: ['', 'casual (du)', 'formal (Sie)'],
          rows: [
            ['Name', 'Wie heißt *du*?', 'Wie heißen *Sie*?'],
            ['Where from', 'Woher kommst *du*?', 'Woher kommen *Sie*?'],
            ['How are you', 'Wie geht es *dir*?', 'Wie geht es *Ihnen*?'],
            ['Goodbye', 'Tschüss!', 'Auf Wiedersehen!']
          ]
        },
        examples: [
          ['Entschuldigung, wie heißen Sie?', 'Excuse me, what is your name?'],
          ['Ey, wie heißt du?', "Hey, what's your name?"]
        ],
        note: 'On TikTok, in comments and in games it is basically always *du*. At a government office or the doctor, never.',
        noteKind: 'warn' },

      { t: 'dialog', kicker: 'Dialogue', title: 'At a party',
        setting: 'Two people, both around twenty. Relaxed, so they use *du*.',
        lines: [
          ['Lena', 'Hey! Ich glaub, wir kennen uns nicht. Ich bin Lena.', "Hey! I don't think we've met. I'm Lena."],
          ['Emerson', 'Hi, ich heiße Emerson. Freut mich.', "Hi, I'm Emerson. Nice to meet you."],
          ['Lena', 'Freut mich auch. Woher kommst du?', 'You too. Where are you from?'],
          ['Emerson', 'Ich komme aus Amerika, aber ich wohne jetzt hier.', "I'm from America, but I live here now."],
          ['Lena', 'Krass. Und wie lange schon?', 'Wow. And how long for?'],
          ['Emerson', 'Seit drei Monaten. Mein Deutsch ist noch nicht so gut.', "For three months. My German isn't that good yet."],
          ['Lena', 'Doch, das geht schon! Echt.', "No, it's fine! Really."],
          ['Emerson', 'Danke. Und du, wohnst du hier?', 'Thanks. And you, do you live here?'],
          ['Lena', 'Ja, ganz in der Nähe. — Ey, ich hol mir was zu trinken, kommst du mit?', "Yeah, right nearby. — Hey, I'm getting a drink, you coming?"]
        ],
        note: 'Learn *Doch!* now. It means "no, wrong, the opposite is true" — a one-word contradiction English simply does not have.' },

      { t: 'street', title: 'How TikTok says hello',
        lead: 'No video ever opens with "Guten Tag". This is what you will actually hear.',
        items: [
          ['Was geht?', "What's up?", 'The standard greeting among young people. Answer: "Nicht viel" or "Alles gut".'],
          ['Alles klar?', 'You good?', 'A greeting and a question at once. Answer: "Ja, alles klar."'],
          ['Na?', 'Hey / well?', 'One syllable. Among friends that is a complete greeting.'],
          ['Ey', 'Hey / yo', 'Goes in front of almost anything: "Ey, guck mal." — "Hey, look."'],
          ['Digga / Alter', 'Bro / dude', 'Friends only. Not to a teacher, not to your boss.'],
          ['Hi Leute', 'Hi everyone', 'How roughly every second German video begins.'],
          ['Servus zusammen', 'Hi all (southern)', 'Bavarian and Austrian creators.'],
          ['Ciao / Bis dann', 'Bye / see ya', '"Ciao" is completely normal in German.']
        ],
        note: 'Say *Digga* or *Alter* to a 60-year-old official and the conversation gets short.', noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammar', title: 'Question words — five doors in',
        body: 'Questions starting with a question word always run in the same order: *question word — verb — person*. No "do", no helper verb. Simpler than English.',
        table: {
          head: ['Word', 'Means', 'Example'],
          rows: [
            ['wer', 'who', 'Wer ist das? — Who is that?'],
            ['wie', 'how — also "what" with names', 'Wie heißt du? — What’s your name?'],
            ['wo', 'where (located)', 'Wo wohnst du? — Where do you live?'],
            ['woher', 'where from', 'Woher kommst du? — Where are you from?'],
            ['wohin', 'where to', 'Wohin gehst du? — Where are you going?'],
            ['was', 'what', 'Was machst du? — What are you doing?'],
            ['wann', 'when', 'Wann kommst du? — When are you coming?'],
            ['warum', 'why', 'Warum nicht? — Why not?']
          ]
        },
        examples: [
          ['Wo *wohnst du*?', 'Where do you live?'],
          ['Was *machst du* heute?', 'What are you doing today?'],
          ['Wer *ist* das?', 'Who is that?']
        ],
        note: 'English splits "where from". German glues it together: *woher*. Same with *wohin* (where to).' },

      { t: 'pattern', kicker: 'Sentence builder', title: 'One frame, ten sentences',
        lead: 'Tap the words. Same frame, new content — this is how you build sentences instead of memorising them.',
        frame: 'Ich komme aus {}.', enFrame: "I'm from {}.",
        slotLabel: 'country',
        swaps: [
          ['Amerika', 'America'], ['Deutschland', 'Germany'], ['der Türkei', 'Turkey'],
          ['Polen', 'Poland'], ['Italien', 'Italy'], ['Berlin', 'Berlin'], ['Kalifornien', 'California']
        ],
        note: 'Most countries take no article. The exceptions: *die Türkei*, *die Schweiz*, *die USA*, *der Iran*.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'The people words',
        items: [
          ['ich', 'I', 'Ich bin hier.', "I'm here."],
          ['du', 'you (casual, one person)', 'Du bist lustig.', "You're funny."],
          ['er', 'he', 'Er ist mein Freund.', "He's my friend."],
          ['sie', 'she — and also "they"', 'Sie ist Ärztin.', "She's a doctor."],
          ['es', 'it', 'Es ist kalt.', "It's cold."],
          ['wir', 'we', 'Wir sind spät dran.', "We're late."],
          ['ihr', 'you all (casual group)', 'Wo seid ihr?', 'Where are you guys?'],
          ['Sie', 'you (formal) — always capitalised', 'Sind Sie Herr Klein?', 'Are you Mr. Klein?'],
          ['der Name', 'name', 'Wie ist dein Name?', "What's your name?"],
          ['das Land', 'country', 'Welches Land ist das?', 'Which country is that?'],
          ['die Stadt', 'city', 'Berlin ist eine große Stadt.', 'Berlin is a big city.'],
          ['ja', 'yes', 'Ja, genau.', 'Yes, exactly.'],
          ['nein', 'no', 'Nein, leider nicht.', 'No, unfortunately not.'],
          ['doch', 'yes-it-is (contradicting a "no")', 'Du kommst nicht. — Doch!', "You're not coming. — Yes I am!"],
          ['vielleicht', 'maybe', 'Vielleicht später.', 'Maybe later.']
        ],
        note: 'Lowercase *sie* = she or they. Capital *Sie* = formal you. When listening, the verb tells you: *sie ist* = she, *sie sind* = they/you.' },

      { t: 'drill', kicker: 'Try it now', title: 'Quick round',
        lead: 'Four questions. Don’t guess — think for a second, then answer.',
        ex: [
          { k: 'choice', q: 'You are meeting your girlfriend’s mother for the first time. What do you say?',
            opts: ['Ey, was geht?', 'Guten Tag, ich heiße Emerson.', 'Moin Digga.'],
            a: 1, why: 'Adults you don’t know get *Guten Tag* and *Sie*. "Was geht" and "Digga" are for friends.' },
          { k: 'fill', q: 'Ich ___ Emerson.', a: ['heiße', 'heisse'], en: 'My name is Emerson.', hint: 'from heißen',
            why: 'With *ich* the verb ends in *-e*: ich heiß*e*.' },
          { k: 'fill', q: 'Wir ___ aus Amerika.', a: ['kommen'], en: 'We are from America.',
            why: 'With *wir* the verb ends in *-en*: wir komm*en*.' },
          { k: 'order', en: 'Where do you live? (casual)', words: ['Wo', 'wohnst', 'du', '?'], a: 'Wo wohnst du ?' }
        ] },

      { t: 'culture', kicker: 'Culture', title: 'Why Germans sound so blunt',
        body: 'When a German says "Das ist falsch" — that’s wrong — it is not an attack. German does not carry politeness in softening words the way English does. It carries politeness in *bitte*, *danke*, the Sie-form, and in tiny words like *mal* and *doch*.\n"Komm her" sounds like an order. "Komm *mal* her" is a friendly request. One word of difference.\nThe reverse also matters: if you translate English politeness literally ("I was just wondering if maybe you could possibly…"), you don’t sound polite in German. You sound unsure of yourself.',
        note: 'Learn *mal*, *doch* and *denn* early. They turn correct German into friendly German.' },

      { t: 'recap', kicker: 'Unit 1', title: 'What should stick now',
        points: [
          '*Ich heiße …* / *Ich bin …* — two ways to give your name.',
          '*sein*: bin, bist, ist, sind, seid, sind.',
          '*du* for friends and the internet, *Sie* for adults you don’t know.',
          'Questions: *question word + verb + person*. No "do".',
          '*Doch!* contradicts a no — English has no single word for it.',
          'TikTok greets you with *Was geht?*, *Alles klar?*, *Hi Leute*.'
        ],
        note: 'Go to Practice now. Under 80% is not a disaster — just run it again.' }
    ],
    quiz: [
      { k: 'choice', q: 'Which form of *sein* fits: "Ihr ___ zu laut." (You lot are too loud.)',
        opts: ['seid', 'seit', 'sind', 'bist'], a: 0,
        why: '*ihr seid*, with a d. "seit" with a t means "since".' },
      { k: 'choice', q: 'You are emailing a government office. How do you ask for their name?',
        opts: ['Wie heißt du?', 'Wie heißen Sie?', 'Wer bist du?'], a: 1, why: 'Officials always get *Sie*.' },
      { k: 'fill', q: 'Woher ___ du?', a: ['kommst'], en: 'Where are you from?', why: 'du takes *-st*: du komm*st*.' },
      { k: 'fill', q: 'Das ___ meine Schwester.', a: ['ist'], en: 'That is my sister.', why: 'er/sie/es takes *ist*.' },
      { k: 'trans', en: "My name is Anna and I'm from Berlin.",
        a: ['Ich heiße Anna und ich komme aus Berlin.', 'Ich heiße Anna und komme aus Berlin.', 'Ich bin Anna und ich komme aus Berlin.'],
        hint: 'Ich heiße … und …', why: 'Both work — *ich heiße* or *ich bin*.' },
      { k: 'order', en: 'Where exactly do you live?', words: ['Wo', 'wohnst', 'du', 'genau'], a: 'Wo wohnst du genau' },
      { k: 'order', en: 'We are from America.', words: ['Wir', 'kommen', 'aus', 'Amerika'], a: 'Wir kommen aus Amerika' },
      { k: 'listen', de: 'Wie geht es dir?', a: ['Wie geht es dir', 'Wie gehts dir', 'Wie geht es dir?'], en: 'How are you?' },
      { k: 'listen', de: 'Ich komme aus Amerika.', a: ['Ich komme aus Amerika'], en: "I'm from America." },
      { k: 'match', q: 'Greeting and time of day', pairs: [
        ['Guten Morgen', 'morning, until about 11'],
        ['Guten Abend', 'from about 6 pm'],
        ['Gute Nacht', 'only when going to bed'],
        ['Moin', 'northern Germany, any time']
      ] },
      { k: 'choice', q: 'Someone says "Du kommst doch nicht mit." (You’re not coming.) But you are. What do you say?',
        opts: ['Ja!', 'Nein!', 'Doch!'], a: 2, why: '*Doch!* contradicts a negative. "Ja" would agree with them.' },
      { k: 'choice', q: 'What does "Alles klar?" mean as a greeting?',
        opts: ['Did you understand everything?', "How are you / you good?", 'Is that allowed?'], a: 1,
        why: 'As a greeting it just means "you good?" — not a real question about understanding.' },
      { k: 'fill', q: 'Ich ___ in Berlin.', a: ['wohne'], en: 'I live in Berlin.', why: 'ich takes *-e*: ich wohn*e*.' },
      { k: 'match', q: 'Question words', pairs: [
        ['woher', 'where from'], ['wohin', 'where to'], ['wann', 'when'], ['warum', 'why']
      ] }
    ]
  });
})();
