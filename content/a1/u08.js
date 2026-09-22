/* Unit 8 — Where you live */
(function () {
  window.DE.registerUnit({
    id: 'a1-08', level: 'A1', num: 8, minutes: 38,
    title: 'Where you live',
    subtitle: 'Flats, furniture, rooms · es gibt · the dative: where things are',
    can: [
      'Describe your flat.',
      'Say where something is, with the right preposition.',
      'Use *es gibt* — there is / there are.',
      'Understand a simple flat listing.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 8', title: 'The dative, for the first time',
        lead: 'So far you have had the nominative and the accusative. Today the third case arrives — and it is easier than its reputation.',
        points: [
          'Rooms, furniture, flat vocabulary.',
          '*es gibt* — the German sentence for "there is / there are".',
          'Dative after location prepositions: *in der* Küche, *auf dem* Tisch.',
          'Why *wo?* (where) takes the dative and *wohin?* (where to) takes the accusative.'
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'The flat',
        items: [
          ['die Wohnung', 'flat, apartment', 'Ich suche eine Wohnung.', "I'm looking for a flat."],
          ['das Haus', 'house', 'Sie wohnen im Haus nebenan.', 'They live in the house next door.'],
          ['das Zimmer', 'room', 'Die Wohnung hat drei Zimmer.', 'The flat has three rooms.'],
          ['die Küche', 'kitchen', 'Die Küche ist klein.', 'The kitchen is small.'],
          ['das Bad', 'bathroom', 'Wo ist das Bad?', "Where's the bathroom?"],
          ['das Schlafzimmer', 'bedroom', 'Mein Schlafzimmer ist oben.', 'My bedroom is upstairs.'],
          ['das Wohnzimmer', 'living room', 'Wir sitzen im Wohnzimmer.', "We're sitting in the living room."],
          ['der Flur', 'hallway', 'Die Schuhe stehen im Flur.', 'The shoes are in the hallway.'],
          ['der Balkon', 'balcony', 'Ein Balkon wäre schön.', 'A balcony would be nice.'],
          ['der Keller', 'cellar, basement', 'Die Waschmaschine ist im Keller.', 'The washing machine is in the cellar.'],
          ['die Miete', 'rent', 'Die Miete ist zu hoch.', 'The rent is too high.'],
          ['die Wohngemeinschaft / WG', 'flatshare', 'Ich wohne in einer WG.', 'I live in a flatshare.'],
          ['der Nachbar / die Nachbarin', 'neighbour', 'Meine Nachbarn sind laut.', 'My neighbours are loud.'],
          ['der Quadratmeter (qm)', 'square metre', 'Fünfzig Quadratmeter.', 'Fifty square metres.'],
          ['der Stock / die Etage', 'floor, storey', 'Im dritten Stock.', 'On the third floor.'],
          ['umziehen', 'to move house', 'Ich ziehe im Mai um.', "I'm moving in May."],
          ['mieten', 'to rent', 'Wir mieten die Wohnung.', "We're renting the flat."]
        ],
        note: 'A *Zimmer* in a listing never includes the kitchen or bathroom. "3 Zimmer" means three proper rooms *plus* kitchen and bath.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Furniture and things',
        items: [
          ['das Bett', 'bed', 'Das Bett ist neu.', 'The bed is new.'],
          ['der Schrank', 'wardrobe, cupboard', 'Im Schrank ist Platz.', "There's space in the wardrobe."],
          ['das Sofa', 'sofa', 'Setz dich aufs Sofa.', 'Sit on the sofa.'],
          ['der Kühlschrank', 'fridge', 'Der Kühlschrank ist leer.', 'The fridge is empty.'],
          ['der Herd', 'stove, cooker', 'Der Herd ist an.', 'The stove is on.'],
          ['die Lampe', 'lamp', 'Mach die Lampe an.', 'Turn the lamp on.'],
          ['der Teppich', 'carpet, rug', 'Ein alter Teppich.', 'An old rug.'],
          ['der Spiegel', 'mirror', 'Der Spiegel hängt im Flur.', 'The mirror hangs in the hallway.'],
          ['die Waschmaschine', 'washing machine', 'Die Waschmaschine läuft.', 'The washing machine is running.'],
          ['die Dusche', 'shower', 'Die Dusche ist kaputt.', 'The shower is broken.'],
          ['die Heizung', 'heating, radiator', 'Die Heizung geht nicht.', "The heating isn't working."],
          ['das Regal', 'shelf', 'Die Bücher stehen im Regal.', 'The books are on the shelf.'],
          ['gemütlich', 'cosy — a genuinely German value', 'Die Wohnung ist gemütlich.', 'The flat is cosy.'],
          ['hell', 'bright', 'Das Zimmer ist hell.', 'The room is bright.'],
          ['dunkel', 'dark', 'Hier ist es dunkel.', "It's dark in here."],
          ['möbliert', 'furnished', 'Möbliert oder nicht?', 'Furnished or not?']
        ] },

      { t: 'grammar', kicker: 'Grammar', title: 'es gibt — there is, there are',
        body: '*es gibt* covers both "there is" and "there are" in one. It never changes. And it always takes the *accusative*.',
        table: {
          head: ['German', 'English', 'Note'],
          rows: [
            ['Es gibt *einen* Balkon.', "There's a balcony.", 'masculine → einen'],
            ['Es gibt *eine* Küche.', "There's a kitchen.", 'feminine → eine'],
            ['Es gibt *ein* Bad.', "There's a bathroom.", 'neuter → ein'],
            ['Es gibt *drei* Zimmer.', 'There are three rooms.', 'plural, same form'],
            ['Es gibt *keinen* Aufzug.', "There's no lift.", 'negated with kein']
          ]
        },
        examples: [
          ['Gibt es hier WLAN?', 'Is there wifi here?'],
          ['Es gibt keinen Balkon, leider.', "There's no balcony, unfortunately."],
          ['Was gibt es zum Essen?', 'What is there to eat?']
        ],
        note: '*Was gibt’s?* also means "what’s up / what’s going on" in everyday speech.' },

      { t: 'grammar', kicker: 'The third case', title: 'Dative — where something is',
        body: 'When you say *where* something is, the place goes into the dative. This is the case where almost everything changes — but it follows a clear pattern.',
        table: {
          head: ['', 'Nominative', 'Accusative', 'Dative (where?)'],
          rows: [
            ['masculine', 'der Tisch', 'den Tisch', '*dem* Tisch'],
            ['feminine', 'die Küche', 'die Küche', '*der* Küche ⚠️'],
            ['neuter', 'das Bad', 'das Bad', '*dem* Bad'],
            ['plural', 'die Zimmer', 'die Zimmer', '*den* Zimmer*n* ⚠️']
          ]
        },
        examples: [
          ['Das Buch liegt auf *dem* Tisch.', 'The book is on the table.'],
          ['Ich bin in *der* Küche.', "I'm in the kitchen."],
          ['Die Schuhe stehen in *dem* Flur. → *im* Flur', 'The shoes are in the hallway.'],
          ['Die Kinder sind in *den* Zimmern.', 'The children are in the rooms.']
        ],
        note: 'The trap: *die* Küche becomes *der* Küche in the dative. You see "der" and think masculine — it isn’t.',
        noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammar', title: 'Location prepositions and their contractions',
        body: 'After these prepositions, when you are answering *wo?* (where), you always use the dative. And German loves to squash them together — these are not shortcuts, they are standard.',
        table: {
          head: ['Preposition', 'Means', 'Example', 'Contracted'],
          rows: [
            ['in', 'in', 'in dem Bad', '*im* Bad'],
            ['auf', 'on (horizontal)', 'auf dem Tisch', '—'],
            ['an', 'on (vertical), at', 'an dem Fenster', '*am* Fenster'],
            ['unter', 'under', 'unter dem Bett', '—'],
            ['über', 'above', 'über dem Sofa', '—'],
            ['neben', 'next to', 'neben dem Schrank', '—'],
            ['zwischen', 'between', 'zwischen den Betten', '—'],
            ['hinter', 'behind', 'hinter der Tür', '—'],
            ['vor', 'in front of', 'vor dem Haus', '—']
          ]
        },
        examples: [
          ['Das Handy liegt auf dem Tisch.', 'The phone is on the table.'],
          ['Das Bild hängt an der Wand.', 'The picture hangs on the wall.'],
          ['Die Katze ist unter dem Bett.', 'The cat is under the bed.'],
          ['Ich warte vor dem Haus.', "I'm waiting in front of the house."]
        ],
        note: 'The same prepositions take the *accusative* when there is movement into the place: "Ich gehe in *die* Küche" (where to?) versus "Ich bin in *der* Küche" (where?).' },

      { t: 'dialog', kicker: 'Dialogue', title: 'Viewing a flatshare',
        setting: 'Emerson is looking at a room in a shared flat.',
        lines: [
          ['Nina', 'Komm rein! Das ist der Flur, und da vorne ist die Küche.', 'Come in! This is the hallway, and the kitchen is up there.'],
          ['Emerson', 'Schön hell hier.', 'Nice and bright in here.'],
          ['Nina', 'Ja, das Wohnzimmer geht nach Süden. Gibt auch einen Balkon.', "Yeah, the living room faces south. There's a balcony too."],
          ['Emerson', 'Und das Zimmer?', 'And the room?'],
          ['Nina', 'Hier. Achtzehn Quadratmeter. Bett und Schrank sind schon drin.', 'Here. Eighteen square metres. Bed and wardrobe are already in it.'],
          ['Emerson', 'Wie hoch ist die Miete?', 'How much is the rent?'],
          ['Nina', 'Vierhundertzwanzig warm.', 'Four hundred and twenty, bills included.'],
          ['Emerson', 'Okay. Und das Bad ist wo?', "Okay. And where's the bathroom?"],
          ['Nina', 'Neben der Küche. Die Waschmaschine steht im Keller.', 'Next to the kitchen. The washing machine is in the cellar.'],
          ['Emerson', 'Passt. Wann könnte ich einziehen?', 'Works for me. When could I move in?']
        ],
        note: '*warm* = rent with bills included. *kalt* = rent only, heating and water on top. The single most important distinction when flat-hunting.' },

      { t: 'street', title: 'Home, as people actually say it',
        items: [
          ['Bude', 'place, pad', '"Coole Bude!" — for your own flat or room.'],
          ['Ich wohne bei meinen Eltern', 'I live with my parents', 'Completely normal into your mid-twenties.'],
          ['Hast du Bock rüberzukommen?', 'Wanna come over?', '*rüberkommen* — separable, very common.'],
          ['Es ist voll eng hier', "It's really cramped in here", '*voll* as an intensifier.'],
          ['Bei mir ist Chaos', "My place is a mess", 'More common than "unordentlich".'],
          ['Machst du mal das Fenster auf?', 'Can you open the window?', '*aufmachen* — prefix to the end.'],
          ['Lüften', 'to air out the room', 'A genuine German obsession. Daily, including in winter.'],
          ['Hausordnung', 'building rules', 'Posted in the stairwell and taken seriously.']
        ],
        note: '*Lüften* is not a joke: plenty of Germans throw every window open for five minutes each morning, at minus ten degrees.' },

      { t: 'pattern', kicker: 'Sentence builder', title: 'Where is the phone?',
        frame: 'Das Handy ist {}.', enFrame: 'The phone is {}.',
        slotLabel: 'place',
        swaps: [
          ['auf dem Tisch', 'on the table'], ['in der Küche', 'in the kitchen'], ['unter dem Bett', 'under the bed'],
          ['im Bad', 'in the bathroom'], ['neben dem Sofa', 'next to the sofa'], ['hinter der Tür', 'behind the door']
        ],
        note: 'All dative, because the question is *wo?* Listen for the pattern: dem (m/n), der (f).' },

      { t: 'drill', kicker: 'Try it now', title: 'Dative round',
        ex: [
          { k: 'fill', q: 'Das Buch liegt auf ___ Tisch.', a: ['dem'], en: 'The book is on the table.',
            why: '*der* Tisch → dative *dem* Tisch.' },
          { k: 'fill', q: 'Ich bin in ___ Küche.', a: ['der'], en: "I'm in the kitchen.",
            why: '*die* Küche → dative *der* Küche. The classic trip-up.' },
          { k: 'fill', q: '___ gibt hier kein WLAN.', a: ['Es', 'es'], en: "There's no wifi here." },
          { k: 'choice', q: '"Ich gehe in die Küche." Why *die* and not *der*?',
            opts: ['Because Küche is masculine.', 'Because it is movement — where to? → accusative.', "It's a mistake."], a: 1 },
          { k: 'order', en: 'The washing machine is in the cellar.',
            words: ['Die', 'Waschmaschine', 'ist', 'im', 'Keller'], a: 'Die Waschmaschine ist im Keller' }
        ] },

      { t: 'recap', kicker: 'Unit 8', title: 'What should stick now',
        points: [
          '*es gibt* + accusative = there is / there are.',
          'Dative: *dem* (m/n), *der* (f), *den + n* (plural).',
          '*die* Küche → in *der* Küche. Feminine becomes *der* in the dative.',
          'Contractions: in dem → *im*, an dem → *am*.',
          '*wo?* → dative. *wohin?* → accusative.',
          'Rent *warm* = bills included, *kalt* = without.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Das Handy liegt auf ___ Tisch.', a: ['dem'], en: 'The phone is on the table.' },
      { k: 'fill', q: 'Wir sitzen in ___ Küche.', a: ['der'], en: "We're sitting in the kitchen." },
      { k: 'fill', q: 'Die Schuhe stehen ___ Flur. (in the)', a: ['im'], en: 'The shoes are in the hallway.',
        why: 'in dem → *im*.' },
      { k: 'fill', q: '___ gibt einen Balkon.', a: ['Es', 'es'], en: "There's a balcony." },
      { k: 'choice', q: 'What does "420 € warm" mean?',
        opts: ['Rent without bills.', 'Rent with bills included.', 'The deposit.'], a: 1 },
      { k: 'choice', q: '"Die Wohnung hat 3 Zimmer." Does that include the kitchen and bathroom?',
        opts: ['Yes, those are two of them.', 'No, they come on top.', 'Depends.'], a: 1 },
      { k: 'choice', q: 'Which sentence is correct?',
        opts: ['Ich bin in die Küche.', 'Ich bin in der Küche.', 'Ich bin in dem Küche.'], a: 1,
        why: '*wo?* → dative, feminine → der Küche.' },
      { k: 'order', en: 'There is no lift.', words: ['Es', 'gibt', 'keinen', 'Aufzug'], a: 'Es gibt keinen Aufzug' },
      { k: 'order', en: 'The cat is under the bed.', words: ['Die', 'Katze', 'ist', 'unter', 'dem', 'Bett'],
        a: 'Die Katze ist unter dem Bett' },
      { k: 'listen', de: 'Wo ist das Bad?', a: ['Wo ist das Bad'], en: "Where's the bathroom?" },
      { k: 'listen', de: 'Die Heizung geht nicht.', a: ['Die Heizung geht nicht'], en: "The heating isn't working." },
      { k: 'match', q: 'Rooms', pairs: [
        ['die Küche', 'kitchen'], ['das Bad', 'bathroom'], ['der Flur', 'hallway'], ['der Keller', 'cellar']
      ] },
      { k: 'match', q: 'Prepositions', pairs: [
        ['unter', 'under'], ['über', 'above'], ['neben', 'next to'], ['zwischen', 'between']
      ] },
      { k: 'trans', en: 'Is there wifi here?', a: ['Gibt es hier WLAN?', 'Gibt es hier Wlan?', 'Gibts hier WLAN?'],
        hint: 'Gibt es …' }
    ]
  });
})();
