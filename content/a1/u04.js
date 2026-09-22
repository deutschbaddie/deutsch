/* Einheit 4 — der, die, das */
(function () {
  window.DE.registerUnit({
    id: 'a1-04', level: 'A1', num: 4, minutes: 40,
    title: 'der, die, das — und der Akkusativ',
    subtitle: 'Artikel, Plural, ein/kein · der erste Fall, der sich ändert',
    can: [
      'Du verstehst, warum jedes Substantiv ein Geschlecht hat — und wie du es meistens errätst.',
      'Du kannst den Plural bilden.',
      'Du kannst *einen* von *ein* unterscheiden und weißt, wann was kommt.',
      'Du kannst mit *kein* und *nicht* richtig verneinen.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 4', title: 'Die Sache mit den drei Wörtern für „the“',
        lead: 'Das ist die Einheit, vor der alle Angst haben. Zu Unrecht — es gibt mehr System, als man dir erzählt.',
        points: [
          'Jedes Substantiv ist *der*, *die* oder *das*. Das ist Grammatik, nicht Biologie.',
          'Es gibt Endungen, die das Geschlecht fast immer verraten. Die lernst du gleich.',
          '*Akkusativ*: nur ein einziges Wort verändert sich wirklich — der → den.',
          'Verneinung: *kein* vor Substantiven, *nicht* vor allem anderen.'
        ],
        note: 'Lern jedes neue Substantiv *mit Artikel*. Nicht „Tisch“, sondern „der Tisch“. Diese eine Gewohnheit spart dir ein Jahr.',
        noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammatik', title: 'Wie du das Geschlecht errätst',
        body: 'Du musst nicht raten. Endungen verraten das Geschlecht in den meisten Fällen — und diese Liste deckt einen sehr großen Teil des A1-Wortschatzes ab.',
        table: {
          head: ['Artikel', 'typische Endung', 'Beispiele'],
          rows: [
            ['*die*', '-ung, -heit, -keit, -schaft, -ion, -tät', 'die Wohnung, die Freiheit, die Nation'],
            ['*die*', '-e (sehr oft)', 'die Lampe, die Sprache, die Frage'],
            ['*der*', '-er, -en, -ling, -ismus', 'der Lehrer, der Wagen, der Frühling'],
            ['*der*', 'Tage, Monate, Jahreszeiten, Wetter', 'der Montag, der Juli, der Sommer, der Regen'],
            ['*das*', '-chen, -lein (Verkleinerung)', 'das Mädchen, das Brötchen'],
            ['*das*', '-ment, -um, -ma', 'das Dokument, das Museum, das Thema'],
            ['*das*', 'Verben als Substantiv', 'das Essen, das Leben, das Lernen']
          ]
        },
        examples: [
          ['*die* Wohnung, *die* Zeitung, *die* Rechnung', 'all -ung → die'],
          ['*das* Mädchen (!)', 'girl is neuter — because -chen beats meaning'],
          ['*der* Montag, *der* Winter, *der* Wind', 'days, seasons, weather → der']
        ],
        note: '*das Mädchen* ist sächlich, obwohl es ein Mädchen ist. Die Endung *-chen* gewinnt immer gegen die Bedeutung.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Dinge, die dich täglich umgeben',
        items: [
          ['das Handy', 'mobile phone', 'Wo ist mein Handy?', 'Where’s my phone?'],
          ['der Laptop', 'laptop', 'Mein Laptop ist kaputt.', 'My laptop is broken.'],
          ['der Schlüssel', 'key', 'Ich habe den Schlüssel vergessen.', 'I forgot the key.'],
          ['die Tasche', 'bag', 'Das ist meine Tasche.', 'That’s my bag.'],
          ['das Buch', 'book', 'Ich lese ein Buch.', 'I’m reading a book.'],
          ['der Tisch', 'table', 'Der Tisch ist frei.', 'The table is free.'],
          ['der Stuhl', 'chair', 'Nimm den Stuhl da.', 'Take that chair.'],
          ['die Tür', 'door', 'Mach die Tür zu.', 'Close the door.'],
          ['das Fenster', 'window', 'Das Fenster ist offen.', 'The window is open.'],
          ['das Auto', 'car', 'Ich habe kein Auto.', 'I don’t have a car.'],
          ['das Geld', 'money', 'Ich habe kein Geld.', 'I have no money.'],
          ['die Uhr', 'watch, clock', 'Die Uhr geht falsch.', 'The clock is wrong.'],
          ['der Stift', 'pen', 'Hast du einen Stift?', 'Do you have a pen?'],
          ['das Papier', 'paper', 'Ein Blatt Papier.', 'A sheet of paper.'],
          ['die Flasche', 'bottle', 'Eine Flasche Wasser.', 'A bottle of water.'],
          ['die Wohnung', 'flat, apartment', 'Meine Wohnung ist klein.', 'My flat is small.']
        ] },

      { t: 'grammar', kicker: 'Die Kernidee', title: 'Akkusativ — das Ding, das etwas abbekommt',
        body: 'Im Satz „Ich sehe den Mann“ macht *ich* etwas, und *der Mann* bekommt es ab. Das Zweite steht im Akkusativ.\nJetzt die gute Nachricht, und sie ist besser als ihr Ruf: Von allen Artikeln ändert sich im Akkusativ *genau einer*. `der` wird zu `den`. Die, das und die (Plural) bleiben, wie sie sind.',
        table: {
          head: ['', 'Nominativ (wer macht?)', 'Akkusativ (wen/was?)'],
          rows: [
            ['maskulin', '*der* Mann · *ein* Mann', '*den* Mann · *einen* Mann ⚠️'],
            ['feminin', '*die* Frau · *eine* Frau', '*die* Frau · *eine* Frau'],
            ['neutrum', '*das* Kind · *ein* Kind', '*das* Kind · *ein* Kind'],
            ['Plural', '*die* Kinder', '*die* Kinder']
          ]
        },
        examples: [
          ['*Der* Mann ist da. → Ich sehe *den* Mann.', 'The man is there. → I see the man.'],
          ['Ich kaufe *einen* Kaffee.', 'I’m buying a coffee.'],
          ['Ich habe *eine* Frage.', 'I have a question.'],
          ['Ich nehme *das* Brot.', "I'll take the bread."]
        ],
        note: 'Merksatz: *Nur der Mann ändert sich.* Wenn du nur das lernst, machst du im Akkusativ 75 % weniger Fehler.', noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammatik', title: 'Der Plural — fünf Wege',
        body: 'Deutsch hat kein einfaches „+s“. Es gibt fünf Muster. Du musst sie nicht ableiten können, aber du solltest sie erkennen — und den Plural immer mitlernen.',
        table: {
          head: ['Muster', 'Singular → Plural', 'typisch für'],
          rows: [
            ['*-e*', 'das Jahr → die Jahr*e*', 'viele maskuline'],
            ['*-e* + Umlaut', 'der Stuhl → die St*ü*hl*e*', 'viele maskuline'],
            ['*-(e)n*', 'die Frau → die Frau*en*', 'fast alle *die*-Wörter'],
            ['*-er* + Umlaut', 'das Buch → die B*ü*ch*er*', 'viele neutrale'],
            ['*-s*', 'das Auto → die Auto*s*', 'Fremdwörter, Abkürzungen'],
            ['*ohne Endung*', 'das Fenster → die Fenster', '-er, -en, -el Endungen']
          ]
        },
        examples: [
          ['ein Kind → *die Kinder*', 'one child → the children'],
          ['ein Mann → *die Männer*', 'one man → the men'],
          ['ein Handy → *die Handys*', 'one phone → the phones']
        ],
        note: 'Im Plural ist der Artikel *immer die*. Egal welches Geschlecht im Singular. Das ist ein echtes Geschenk.', noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammatik', title: 'kein oder nicht?',
        body: 'Zwei Verneinungen, klare Aufteilung.\n*kein* verneint Substantive mit *ein* oder ohne Artikel. Es verhält sich genau wie *ein*: kein, keine, keinen.\n*nicht* verneint alles andere — Verben, Adjektive, ganze Aussagen, Substantive mit *der/die/das* oder mit Possessiv.',
        table: {
          head: ['Aussage', 'Verneinung', 'warum'],
          rows: [
            ['Ich habe ein Auto.', 'Ich habe *kein* Auto.', 'ein → kein'],
            ['Ich habe Zeit.', 'Ich habe *keine* Zeit.', 'kein Artikel → kein'],
            ['Ich kenne den Mann.', 'Ich kenne den Mann *nicht*.', 'bestimmter Artikel → nicht'],
            ['Das ist gut.', 'Das ist *nicht* gut.', 'Adjektiv → nicht'],
            ['Ich komme.', 'Ich komme *nicht*.', 'Verb → nicht'],
            ['Das ist mein Handy.', 'Das ist *nicht* mein Handy.', 'Possessiv → nicht']
          ]
        },
        examples: [
          ['Ich hab keinen Bock.', "I don't feel like it."],
          ['Ich versteh das nicht.', "I don't understand that."],
          ['Das ist keine gute Idee.', "That's not a good idea."]
        ],
        note: '*nicht* steht meistens *am Ende* des Satzes oder direkt vor dem, was es verneint. „Ich komme heute nicht.“' },

      { t: 'dialog', kicker: 'Dialog', title: 'Im Büro, alles weg',
        setting: 'Zwei Kollegen, informell.',
        lines: [
          ['Tim', 'Hast du einen Stift?', 'Do you have a pen?'],
          ['Emerson', 'Nein, ich hab keinen Stift. Nur den Laptop.', 'No, I don’t have a pen. Just the laptop.'],
          ['Tim', 'Und ein Papier? Irgendwas?', 'And some paper? Anything?'],
          ['Emerson', 'Auch nicht, sorry.', 'Nope, sorry.'],
          ['Tim', 'Okay, dann nehm ich das Handy.', 'Okay, then I’ll take the phone.'],
          ['Emerson', 'Ist das dein Handy? Ich glaub, das ist meins.', 'Is that your phone? I think that’s mine.'],
          ['Tim', 'Ups. Stimmt. Wo ist denn meins?', 'Oops. True. So where’s mine?'],
          ['Emerson', 'Keine Ahnung. Guck mal auf dem Tisch da.', 'No idea. Have a look on that table.']
        ],
        note: 'Achte auf *einen Stift* (Akkusativ, maskulin) gegen *keinen Stift*. Dieselbe Endung — kein folgt ein.' },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Ich habe / ich habe kein …',
        frame: 'Ich habe {}.', enFrame: 'I have {}.',
        slotLabel: 'Objekt',
        swaps: [
          ['einen Hund', 'a dog'], ['eine Frage', 'a question'], ['ein Auto', 'a car'],
          ['keinen Hunger', 'no hunger'], ['keine Zeit', 'no time'], ['kein Geld', 'no money']
        ],
        note: 'Hör den Unterschied: *einen/keinen* nur bei maskulin. Bei feminin *eine/keine*, bei neutrum *ein/kein*.' },

      { t: 'street', title: 'Der Artikel, den keiner ausspricht',
        lead: 'Gesprochen verschwinden Artikel halb. Das ist der Hauptgrund, warum du sie beim Hören nicht findest.',
        items: [
          ['\'nen statt einen', 'a (masculine)', '„Hast du \'nen Stift?“ — extrem häufig, in jedem Video.'],
          ['\'ne statt eine', 'a (feminine)', '„Ich hab \'ne Frage.“'],
          ['\'n statt ein', 'a (neuter)', '„Das ist \'n Witz.“'],
          ['aufs, ins, vom, zum', 'auf das, in das, von dem, zu dem', 'Diese Verschmelzungen sind Standarddeutsch, nicht Slang.'],
          ['Hab kein Bock', "can't be bothered", 'Streng genommen *keinen* Bock. Gesprochen sagen es viele ohne -en.'],
          ['Das ist so\'n Ding', "that's such a thing", '„so ein“ → „so\'n“.'],
          ['Ich hab nix', "I've got nothing", '*nix* = nichts. Sehr häufig gesprochen.'],
          ['gib mir mal das', 'gimme that', '*mal* macht daraus eine Bitte statt eines Befehls.']
        ],
        note: 'Du sollst das nicht schreiben. Du sollst es *erkennen*, wenn du es hörst.', noteKind: 'warn' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Akkusativ-Runde',
        ex: [
          { k: 'fill', q: 'Ich sehe ___ Mann.', a: ['den'], en: 'I see the man.',
            why: 'Maskulin im Akkusativ: der → *den*.' },
          { k: 'fill', q: 'Ich sehe ___ Frau.', a: ['die'], en: 'I see the woman.',
            why: 'Feminin ändert sich nicht: *die* bleibt die.' },
          { k: 'fill', q: 'Ich kaufe ___ Kaffee. (a)', a: ['einen'], en: "I'm buying a coffee.",
            why: '*der* Kaffee → Akkusativ *einen* Kaffee.' },
          { k: 'choice', q: 'Wie verneinst du „Ich habe Zeit“?',
            opts: ['Ich habe nicht Zeit.', 'Ich habe keine Zeit.', 'Ich habe kein Zeit.'], a: 1,
            why: 'Substantiv ohne Artikel → *kein*. *die* Zeit → *keine*.' },
          { k: 'choice', q: 'Wie verneinst du „Ich kenne den Mann“?',
            opts: ['Ich kenne keinen Mann.', 'Ich kenne den Mann nicht.', 'Ich kenne nicht den Mann.'], a: 1,
            why: 'Bestimmter Artikel → *nicht*, und zwar am Ende.' }
        ] },

      { t: 'culture', kicker: 'Strategie', title: 'Was du mit den Artikeln wirklich machen sollst',
        body: 'Ehrliche Ansage: Muttersprachler hören einen falschen Artikel sofort — und es interessiert sie fast nie. „Ich habe *die* Handy vergessen“ wird verstanden. Du wirst nicht ausgelacht.\nDeshalb: Lass dich davon nicht bremsen. Sprich mit falschen Artikeln, statt aus Angst zu schweigen.\nAber: Lern jedes neue Wort *mit* Artikel und *mit* Plural. „das Buch, die Bücher“. Ein Wort, drei Informationen, ein Aufwand. Machst du das ab heute konsequent, hast du in einem Jahr ein Gefühl dafür, das sich nicht mehr wie Arbeit anfühlt.',
        note: 'Farbcode hilft: der = blau, die = pink, das = grün. Genau so sind sie in diesem Kurs überall markiert.' },

      { t: 'recap', kicker: 'Einheit 4', title: 'Was jetzt sitzen sollte',
        points: [
          'Endungen verraten das Geschlecht: *-ung/-heit/-keit* → die, *-chen* → das, *-er* → der.',
          'Im Akkusativ ändert sich *nur* maskulin: der → *den*, ein → *einen*.',
          'Plural-Artikel ist immer *die*.',
          '*kein* vor Substantiven (mit ein/ohne Artikel), *nicht* vor allem anderen.',
          '*nicht* steht meist am Satzende.',
          'Gesprochen: \'nen, \'ne, \'n — hören, nicht schreiben.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Ich sehe ___ Hund. (the)', a: ['den'], en: 'I see the dog.', why: 'der Hund → Akkusativ *den* Hund.' },
      { k: 'fill', q: 'Ich habe ___ Frage. (a)', a: ['eine'], en: 'I have a question.', why: 'die Frage → *eine*, unverändert.' },
      { k: 'fill', q: 'Ich nehme ___ Brot. (the)', a: ['das'], en: "I'll take the bread.", why: 'Neutrum bleibt *das*.' },
      { k: 'fill', q: 'Ich habe ___ Auto. (no)', a: ['kein'], en: "I don't have a car.", why: 'das Auto → *kein* Auto.' },
      { k: 'fill', q: 'Er hat ___ Hunger. (no)', a: ['keinen'], en: "He's not hungry.", why: 'der Hunger → Akkusativ *keinen*.' },
      { k: 'choice', q: 'Welcher Artikel gehört zu „Wohnung“?', opts: ['der', 'die', 'das'], a: 1,
        why: 'Endung *-ung* → immer *die*.' },
      { k: 'choice', q: 'Welcher Artikel gehört zu „Mädchen“?', opts: ['der', 'die', 'das'], a: 2,
        why: '*-chen* macht alles sächlich, auch ein Mädchen.' },
      { k: 'choice', q: 'Welcher Artikel gehört zu „Montag“?', opts: ['der', 'die', 'das'], a: 0,
        why: 'Wochentage, Monate, Jahreszeiten und Wetter sind *der*.' },
      { k: 'choice', q: '„Ich kenne den Film nicht.“ Warum *nicht* und nicht *kein*?',
        opts: ['Weil Film maskulin ist.', 'Weil ein bestimmter Artikel davorsteht.', 'Weil es Vergangenheit ist.'], a: 1,
        why: 'Mit *den/die/das* oder Possessiv verneinst du mit *nicht*.' },
      { k: 'order', en: "I don't have any money.", words: ['Ich', 'habe', 'kein', 'Geld'], a: 'Ich habe kein Geld' },
      { k: 'order', en: "I'm buying a coffee.", words: ['Ich', 'kaufe', 'einen', 'Kaffee'], a: 'Ich kaufe einen Kaffee' },
      { k: 'listen', de: 'Ich habe keine Zeit.', a: ['Ich habe keine Zeit', 'Ich hab keine Zeit'], en: "I don't have time." },
      { k: 'listen', de: 'Hast du einen Stift?', a: ['Hast du einen Stift'], en: 'Do you have a pen?' },
      { k: 'match', q: 'Singular → Plural', pairs: [
        ['das Buch', 'die Bücher'], ['der Mann', 'die Männer'], ['die Frau', 'die Frauen'], ['das Auto', 'die Autos']
      ] },
      { k: 'trans', en: "I don't understand that.", a: ['Ich verstehe das nicht.', 'Das verstehe ich nicht.', 'Ich versteh das nicht.'],
        hint: 'nicht ans Ende' }
    ]
  });
})();
