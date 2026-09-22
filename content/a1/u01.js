/* Einheit 1 — Hallo! */
(function () {
  window.DE.registerUnit({
    id: 'a1-01', level: 'A1', num: 1, minutes: 35,
    title: 'Hallo! Wer bist du?',
    subtitle: 'Begrüßen, sich vorstellen, nach Namen fragen · sein · W-Fragen',
    can: [
      'Du kannst dich vorstellen und nach dem Namen fragen.',
      'Du verstehst, ob jemand dich siezt oder duzt.',
      'Du kannst sagen, woher du kommst und wo du wohnst.',
      'Du erkennst die wichtigsten Begrüßungen aus TikTok-Videos.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 1', title: 'Der erste Satz, der wirklich zählt',
        lead: 'Nicht „Der Hund ist braun“. Das hier ist, was du in den ersten dreißig Sekunden eines Gesprächs brauchst.',
        points: [
          '*Ich heiße …* — wie du deinen Namen sagst (nicht „Mein Name ist“, das klingt wie ein Formular).',
          '*Wie heißt du?* gegen *Wie heißen Sie?* — der wichtigste soziale Schalter im Deutschen.',
          'Das Verb *sein* in allen Formen. Du brauchst es in fast jedem Satz.',
          'Die W-Fragen: wer, wie, wo, woher, was.'
        ],
        note: 'Sprich alles laut mit. Stumm lesen bringt beim Sprechen genau nichts.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Begrüßung und Abschied',
        lead: 'Die Tageszeit entscheidet. „Guten Morgen“ nach 11 Uhr klingt seltsam.',
        items: [
          ['Hallo', 'hello — works everywhere, any time', 'Hallo, ich bin Max.', "Hi, I'm Max."],
          ['Guten Morgen', 'good morning (until about 11)', 'Guten Morgen! Gut geschlafen?', 'Good morning! Sleep well?'],
          ['Guten Tag', 'good day — the polite default with strangers', 'Guten Tag, Frau Weber.', 'Good day, Ms. Weber.'],
          ['Guten Abend', 'good evening (from about 18:00)', 'Guten Abend, einen Tisch für zwei bitte.', 'Good evening, a table for two please.'],
          ['Gute Nacht', 'good night — only when someone goes to bed', 'Gute Nacht, schlaf gut.', 'Good night, sleep well.'],
          ['Tschüss', 'bye — informal, extremely common', 'Tschüss, bis morgen!', 'Bye, see you tomorrow!'],
          ['Auf Wiedersehen', 'goodbye — formal, shops and offices', 'Auf Wiedersehen!', 'Goodbye!'],
          ['Bis später', 'see you later', 'Bis später, ja?', 'See you later, yeah?'],
          ['Bis morgen', 'see you tomorrow', 'Bis morgen in der Schule.', 'See you tomorrow at school.'],
          ['Servus', 'hi / bye — Bavaria and Austria', 'Servus, alles gut?', 'Hi, all good?'],
          ['Moin', 'hi — northern Germany, any time of day', 'Moin moin!', 'Hi there!'],
          ['Grüß dich', 'hi (warm, a bit southern)', 'Grüß dich, lange nicht gesehen.', "Hi, long time no see."]
        ],
        note: '*Moin* im Norden, *Servus* im Süden, *Hallo* überall. Wenn du unsicher bist: Hallo.' },

      { t: 'grammar', kicker: 'Grammatik', title: 'sein — das wichtigste Verb',
        body: 'Jede Sprache hat ein Verb, das ständig gebraucht wird. Im Deutschen ist das *sein*. Es ist unregelmäßig — auswendig, keine Logik, einmal richtig lernen und nie wieder darüber nachdenken.',
        table: {
          head: ['Person', 'Form', 'Beispiel'],
          rows: [
            ['ich', '*bin*', 'Ich bin müde.'],
            ['du', '*bist*', 'Du bist nett.'],
            ['er / sie / es', '*ist*', 'Sie ist da.'],
            ['wir', '*sind*', 'Wir sind hier.'],
            ['ihr', '*seid*', 'Ihr seid laut.'],
            ['sie / Sie', '*sind*', 'Sie sind Lehrer.']
          ]
        },
        examples: [
          ['Ich bin Emerson.', "I'm Emerson."],
          ['Du bist zu früh.', "You're too early."],
          ['Das ist mein Bruder.', 'That’s my brother.'],
          ['Wir sind aus Amerika.', "We're from America."]
        ],
        note: '*ihr seid* wird sehr oft falsch geschrieben („seit“ heißt *since*). Merk dir: seid = sein, seit = Zeit.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Sich vorstellen',
        items: [
          ['Ich heiße …', 'my name is … (literally: I am called)', 'Ich heiße Emerson.', "My name's Emerson."],
          ['Ich bin …', "I'm … — even shorter, very common", 'Ich bin Emerson.', "I'm Emerson."],
          ['Wie heißt du?', "what's your name? (informal)", 'Und wie heißt du?', 'And what’s your name?'],
          ['Wie heißen Sie?', "what's your name? (formal)", 'Entschuldigung, wie heißen Sie?', 'Excuse me, what is your name?'],
          ['Ich komme aus …', "I'm from …", 'Ich komme aus Amerika.', "I'm from America."],
          ['Woher kommst du?', 'where are you from?', 'Woher kommst du denn?', 'So where are you from?'],
          ['Ich wohne in …', 'I live in …', 'Ich wohne in Berlin.', 'I live in Berlin.'],
          ['Wo wohnst du?', 'where do you live?', 'Wo wohnst du genau?', 'Where exactly do you live?'],
          ['Freut mich', 'nice to meet you', 'Freut mich! — Mich auch.', 'Nice to meet you! — You too.'],
          ['Wie geht es dir?', 'how are you? (informal)', 'Hey, wie geht es dir?', 'Hey, how are you?'],
          ['Wie geht’s?', "how's it going? — the real spoken version", 'Na, wie geht’s?', 'So, how’s it going?'],
          ['Mir geht’s gut', "I'm doing well", 'Mir geht’s gut, danke.', "I'm good, thanks."],
          ['Und dir?', 'and you?', 'Gut, und dir?', 'Good, and you?'],
          ['danke', 'thanks', 'Danke schön!', 'Thank you!'],
          ['bitte', 'please — and also "you’re welcome"', 'Danke. — Bitte.', 'Thanks. — You’re welcome.']
        ],
        note: 'Auf *Wie geht’s?* erwartet niemand eine ehrliche Lebensbeichte. „Gut, und dir?“ reicht.' },

      { t: 'grammar', kicker: 'Der wichtigste Schalter', title: 'du oder Sie?',
        body: 'Das Deutsche hat zwei „you“. Die falsche Wahl ist kein Grammatikfehler, sondern ein sozialer.\n*du* — Freunde, Familie, alle unter ~25 untereinander, das ganze Internet, Kolleg:innen in Start-ups.\n*Sie* — fremde Erwachsene, Behörden, Ärzte, Lehrer, Verkäufer über dem Wochenmarkt-Niveau, alle, die älter sind und die du nicht kennst.',
        table: {
          head: ['', 'informell (du)', 'formell (Sie)'],
          rows: [
            ['Name', 'Wie heißt *du*?', 'Wie heißen *Sie*?'],
            ['Herkunft', 'Woher kommst *du*?', 'Woher kommen *Sie*?'],
            ['Befinden', 'Wie geht es *dir*?', 'Wie geht es *Ihnen*?'],
            ['Abschied', 'Tschüss!', 'Auf Wiedersehen!']
          ]
        },
        examples: [
          ['Entschuldigung, wie heißen Sie?', 'Excuse me, what is your name?'],
          ['Ey, wie heißt du?', 'Hey, what’s your name?']
        ],
        note: 'Auf TikTok, in Kommentaren und in Spielen wird praktisch nur geduzt. Im Amt oder beim Arzt niemals.', noteKind: 'warn' },

      { t: 'dialog', kicker: 'Dialog', title: 'Auf einer Party',
        setting: 'Zwei Leute, beide Anfang zwanzig. Locker, also *du*.',
        lines: [
          ['Lena', 'Hey! Ich glaub, wir kennen uns nicht. Ich bin Lena.', "Hey! I don't think we've met. I'm Lena."],
          ['Emerson', 'Hi, ich heiße Emerson. Freut mich.', "Hi, I'm Emerson. Nice to meet you."],
          ['Lena', 'Freut mich auch. Woher kommst du?', 'You too. Where are you from?'],
          ['Emerson', 'Ich komme aus Amerika, aber ich wohne jetzt hier.', "I'm from America, but I live here now."],
          ['Lena', 'Krass. Und wie lange schon?', 'Wow. And how long already?'],
          ['Emerson', 'Seit drei Monaten. Mein Deutsch ist noch nicht so gut.', 'For three months. My German isn’t that good yet.'],
          ['Lena', 'Doch, das geht schon! Echt.', 'No, it’s fine! Really.'],
          ['Emerson', 'Danke. Und du, wohnst du hier?', 'Thanks. And you, do you live here?'],
          ['Lena', 'Ja, ganz in der Nähe. — Ey, ich hol mir was zu trinken, kommst du mit?', 'Yeah, right nearby. — Hey, I’m getting a drink, you coming?']
        ],
        note: 'Merk dir *Doch!* — das ist das deutsche „Nein, stimmt nicht, das Gegenteil ist wahr“. Gibt es im Englischen nicht.' },

      { t: 'street', title: 'So begrüßt dich TikTok',
        lead: 'Kein Video fängt mit „Guten Tag“ an. Das hier hörst du wirklich.',
        items: [
          ['Was geht?', "What's up?", 'Die Standard-Begrüßung unter jungen Leuten. Antwort: „Nicht viel“ oder „Alles gut“.'],
          ['Alles klar?', 'You good?', 'Gleichzeitig Begrüßung und Frage. Antwort: „Ja, alles klar.“'],
          ['Na?', 'Hey / so?', 'Ein einziger Laut. Das ist eine komplette Begrüßung unter Freunden.'],
          ['Ey', 'Hey / yo', 'Vor fast jedem Satz möglich: „Ey, guck mal.“'],
          ['Digga / Alter', 'Bro / dude', 'Unter Freunden. Nicht zu Lehrern, nicht zur Chefin.'],
          ['Hi Leute', 'Hi everyone', 'Womit ungefähr jedes zweite deutsche Video anfängt.'],
          ['Servus zusammen', 'Hi all (southern)', 'Bayerische und österreichische Creator.'],
          ['Ciao / Bis dann', 'Bye / see ya', '„Ciao“ ist im Deutschen völlig normal.']
        ],
        note: '*Digga* und *Alter* sagst du zu Freunden. Sagst du es zu einer 60-jährigen Beamtin, wird das Gespräch kurz.', noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammatik', title: 'W-Fragen — die fünf Türöffner',
        body: 'Fragen mit einem W-Wort haben immer dieselbe Reihenfolge: *W-Wort — Verb — Person*. Kein „do“, kein Hilfsverb. Einfacher als Englisch.',
        table: {
          head: ['W-Wort', 'Bedeutung', 'Beispiel'],
          rows: [
            ['wer', 'who', 'Wer ist das?'],
            ['wie', 'how / what (bei Namen)', 'Wie heißt du?'],
            ['wo', 'where (Ort)', 'Wo wohnst du?'],
            ['woher', 'where from', 'Woher kommst du?'],
            ['wohin', 'where to', 'Wohin gehst du?'],
            ['was', 'what', 'Was machst du?'],
            ['wann', 'when', 'Wann kommst du?'],
            ['warum', 'why', 'Warum nicht?']
          ]
        },
        examples: [
          ['Wo *wohnst du*?', 'Where do you live?'],
          ['Was *machst du* heute?', 'What are you doing today?'],
          ['Wer *ist* das?', 'Who is that?']
        ],
        note: 'Englisch trennt *where from* — Deutsch klebt es zusammen: *woher*. Genauso *wohin*.' },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Ein Satz, zehn Bedeutungen',
        lead: 'Tipp die Wörter an. Derselbe Rahmen, neuer Inhalt — so baust du Sätze, statt sie auswendig zu lernen.',
        frame: 'Ich komme aus {}.', enFrame: "I'm from {}.",
        slotLabel: 'Land',
        swaps: [
          ['Amerika', 'America'], ['Deutschland', 'Germany'], ['der Türkei', 'Turkey'],
          ['Polen', 'Poland'], ['Italien', 'Italy'], ['Berlin', 'Berlin'], ['Kalifornien', 'California']
        ],
        note: 'Die meisten Länder brauchen keinen Artikel. Ausnahmen: *die Türkei*, *die Schweiz*, *die USA*, *der Iran*.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Die ersten Personen',
        items: [
          ['ich', 'I', 'Ich bin hier.', "I'm here."],
          ['du', 'you (informal, one person)', 'Du bist lustig.', "You're funny."],
          ['er', 'he', 'Er ist mein Freund.', "He's my friend."],
          ['sie', 'she — and also "they"', 'Sie ist Ärztin.', "She's a doctor."],
          ['es', 'it', 'Es ist kalt.', "It's cold."],
          ['wir', 'we', 'Wir sind spät dran.', "We're late."],
          ['ihr', 'you all (informal group)', 'Wo seid ihr?', 'Where are you guys?'],
          ['Sie', 'you (formal) — always capitalised', 'Sind Sie Herr Klein?', 'Are you Mr. Klein?'],
          ['der Name', 'name', 'Wie ist dein Name?', "What's your name?"],
          ['das Land', 'country', 'Welches Land ist das?', 'Which country is that?'],
          ['die Stadt', 'city', 'Berlin ist eine große Stadt.', 'Berlin is a big city.'],
          ['ja', 'yes', 'Ja, genau.', 'Yes, exactly.'],
          ['nein', 'no', 'Nein, leider nicht.', "No, unfortunately not."],
          ['doch', 'yes-it-is (contradicting a "no")', 'Du kommst nicht. — Doch!', "You're not coming. — Yes I am!"],
          ['vielleicht', 'maybe', 'Vielleicht später.', 'Maybe later.']
        ],
        note: '*sie* klein = she oder they. *Sie* groß = formelles you. Beim Hören entscheidet das Verb: *sie ist* = she, *sie sind* = they/you.' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Kurze Runde',
        lead: 'Vier Aufgaben. Nicht raten — überleg kurz, dann antworte.',
        ex: [
          { k: 'choice', q: 'Du triffst die Mutter deiner Freundin zum ersten Mal. Was sagst du?',
            opts: ['Ey, was geht?', 'Guten Tag, ich heiße Emerson.', 'Moin Digga.'],
            a: 1, why: 'Fremde Erwachsene: *Guten Tag* und *Sie*. „Was geht“ und „Digga“ sind für Freunde.' },
          { k: 'fill', q: 'Ich ___ Emerson.', a: ['heiße', 'heisse'], en: 'My name is Emerson.', hint: 'heißen',
            why: 'Für *ich* endet das Verb auf *-e*: ich heiß*e*.' },
          { k: 'fill', q: 'Wir ___ aus Amerika.', a: ['kommen'], en: 'We are from America.',
            why: 'Für *wir* endet das Verb auf *-en*: wir komm*en*.' },
          { k: 'order', en: 'Where do you live? (informal)', words: ['Wo', 'wohnst', 'du', '?'], a: 'Wo wohnst du ?' }
        ] },

      { t: 'culture', kicker: 'Kultur', title: 'Warum Deutsche so direkt klingen',
        body: 'Wenn eine Deutsche sagt „Das ist falsch“, ist das kein Angriff. Im Deutschen wird Höflichkeit nicht über Weichspüler-Vokabeln transportiert, sondern über *bitte*, *danke*, die Sie-Form — und über kleine Wörter wie *mal* und *doch*.\n„Komm her“ klingt wie ein Befehl. „Komm *mal* her“ ist eine freundliche Bitte. Ein einziges Wort Unterschied.\nUmgekehrt: Wenn du Englisch-höflich übersetzt („I was just wondering if maybe you could possibly…“), klingst du im Deutschen nicht höflich, sondern unsicher.',
        note: 'Lern früh: *mal*, *doch*, *denn*. Sie machen aus korrektem Deutsch freundliches Deutsch.' },

      { t: 'recap', kicker: 'Einheit 1', title: 'Was jetzt sitzen sollte',
        points: [
          '*Ich heiße …* / *Ich bin …* — dein Name, zwei Wege.',
          '*sein*: bin, bist, ist, sind, seid, sind.',
          '*du* für Freunde und das Internet, *Sie* für fremde Erwachsene.',
          'W-Fragen: *W-Wort + Verb + Person*. Kein „do“.',
          '*Doch!* widerspricht einem Nein — dafür gibt es kein englisches Wort.',
          'TikTok begrüßt dich mit *Was geht?*, *Alles klar?*, *Hi Leute*.'
        ],
        note: 'Geh jetzt in die Übungen. Wenn du unter 80 % landest, ist das kein Drama — nochmal.' }
    ],
    quiz: [
      { k: 'choice', q: 'Welche Form von *sein* passt: „Ihr ___ zu laut.“', opts: ['seid', 'seit', 'sind', 'bist'], a: 0,
        why: '*ihr seid*. Mit d, nicht mit t — „seit“ heißt *since*.' },
      { k: 'choice', q: 'Du schreibst einem Amt eine E-Mail. Wie fragst du nach dem Namen?',
        opts: ['Wie heißt du?', 'Wie heißen Sie?', 'Wer bist du?'], a: 1, why: 'Behörden: immer *Sie*.' },
      { k: 'fill', q: 'Woher ___ du?', a: ['kommst'], en: 'Where are you from?', why: 'du → Endung *-st*: du komm*st*.' },
      { k: 'fill', q: 'Das ___ meine Schwester.', a: ['ist'], en: 'That is my sister.', why: 'er/sie/es → *ist*.' },
      { k: 'trans', en: "My name is Anna and I'm from Berlin.", a: ['Ich heiße Anna und ich komme aus Berlin.', 'Ich heiße Anna und komme aus Berlin.', 'Ich bin Anna und ich komme aus Berlin.'],
        hint: 'Ich heiße … und …', why: 'Beide Varianten sind richtig — *ich heiße* oder *ich bin*.' },
      { k: 'order', en: 'Where exactly do you live?', words: ['Wo', 'wohnst', 'du', 'genau'], a: 'Wo wohnst du genau' },
      { k: 'order', en: 'We are from America.', words: ['Wir', 'kommen', 'aus', 'Amerika'], a: 'Wir kommen aus Amerika' },
      { k: 'listen', de: 'Wie geht es dir?', a: ['Wie geht es dir', 'Wie gehts dir', 'Wie geht es dir?'], en: 'How are you?' },
      { k: 'listen', de: 'Ich komme aus Amerika.', a: ['Ich komme aus Amerika'], en: "I'm from America." },
      { k: 'match', q: 'Begrüßung und Uhrzeit', pairs: [
        ['Guten Morgen', 'morning, until about 11'],
        ['Guten Abend', 'from about 6 pm'],
        ['Gute Nacht', 'only when going to bed'],
        ['Moin', 'northern Germany, any time']
      ] },
      { k: 'choice', q: 'Jemand sagt: „Du kommst doch nicht mit.“ Du kommst aber mit. Was sagst du?',
        opts: ['Ja!', 'Nein!', 'Doch!'], a: 2, why: '*Doch!* widerspricht einer negativen Aussage. „Ja“ würde hier zustimmen.' },
      { k: 'choice', q: 'Was bedeutet „Alles klar?“ als Begrüßung?',
        opts: ['Ist alles verstanden?', 'Wie geht’s / bist du okay?', 'Ist das erlaubt?'], a: 1,
        why: 'Als Begrüßung ist es einfach „you good?“ — keine echte Frage nach Verständnis.' },
      { k: 'fill', q: 'Ich ___ in Berlin.', a: ['wohne'], en: 'I live in Berlin.', why: 'ich → *-e*: ich wohn*e*.' },
      { k: 'match', q: 'W-Wörter', pairs: [
        ['woher', 'where from'], ['wohin', 'where to'], ['wann', 'when'], ['warum', 'why']
      ] }
    ]
  });
})();
