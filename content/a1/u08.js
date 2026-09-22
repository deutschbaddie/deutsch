/* Einheit 8 — Wohnen */
(function () {
  window.DE.registerUnit({
    id: 'a1-08', level: 'A1', num: 8, minutes: 38,
    title: 'Wohnen',
    subtitle: 'Wohnung, Möbel, Räume · es gibt · Dativ: wo ist was?',
    can: [
      'Du kannst deine Wohnung beschreiben.',
      'Du kannst sagen, wo etwas ist — mit den richtigen Präpositionen.',
      'Du kannst *es gibt* benutzen.',
      'Du verstehst eine einfache Wohnungsanzeige.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 8', title: 'Der Dativ, zum ersten Mal',
        lead: 'Bis jetzt hattest du Nominativ und Akkusativ. Heute kommt der dritte Fall — und er ist leichter, als sein Ruf vermuten lässt.',
        points: [
          'Räume, Möbel, Wohnungsvokabular.',
          '*es gibt* — der Satz für „there is / there are“.',
          'Dativ nach Ortspräpositionen: *in der* Küche, *auf dem* Tisch.',
          'Warum *wo?* Dativ nimmt und *wohin?* Akkusativ.'
        ] },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Die Wohnung',
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
        note: 'Ein *Zimmer* in einer Anzeige meint nie Küche und Bad. „3 Zimmer“ heißt: drei richtige Räume *plus* Küche und Bad.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Möbel und Sachen',
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
          ['die Heizung', 'heating, radiator', 'Die Heizung geht nicht.', 'The heating isn’t working.'],
          ['das Regal', 'shelf', 'Die Bücher stehen im Regal.', 'The books are on the shelf.'],
          ['gemütlich', 'cosy — a very German value', 'Die Wohnung ist gemütlich.', 'The flat is cosy.'],
          ['hell', 'bright', 'Das Zimmer ist hell.', 'The room is bright.'],
          ['dunkel', 'dark', 'Hier ist es dunkel.', "It's dark in here."],
          ['möbliert', 'furnished', 'Möbliert oder nicht?', 'Furnished or not?']
        ] },

      { t: 'grammar', kicker: 'Grammatik', title: 'es gibt — there is, there are',
        body: '*es gibt* deckt „there is“ und „there are“ in einem ab. Es ändert sich nie. Und es nimmt immer den *Akkusativ*.',
        table: {
          head: ['Deutsch', 'Englisch', 'Merke'],
          rows: [
            ['Es gibt *einen* Balkon.', "There's a balcony.", 'maskulin → einen'],
            ['Es gibt *eine* Küche.', "There's a kitchen.", 'feminin → eine'],
            ['Es gibt *ein* Bad.', "There's a bathroom.", 'neutrum → ein'],
            ['Es gibt *drei* Zimmer.', 'There are three rooms.', 'Plural, gleiche Form'],
            ['Es gibt *keinen* Aufzug.', "There's no lift.", 'Verneinung mit kein']
          ]
        },
        examples: [
          ['Gibt es hier WLAN?', 'Is there wifi here?'],
          ['Es gibt keinen Balkon, leider.', 'There’s no balcony, unfortunately.'],
          ['Was gibt es zum Essen?', "What is there to eat?"]
        ],
        note: '*Was gibt’s?* heißt im Alltag auch „what’s up / what’s going on“.' },

      { t: 'grammar', kicker: 'Der dritte Fall', title: 'Dativ — wo etwas ist',
        body: 'Wenn du sagst, *wo* etwas ist, steht der Ort im Dativ. Das ist der Fall, bei dem sich fast alles ändert — aber nach einem klaren Muster.',
        table: {
          head: ['', 'Nominativ', 'Akkusativ', 'Dativ (wo?)'],
          rows: [
            ['maskulin', 'der Tisch', 'den Tisch', '*dem* Tisch'],
            ['feminin', 'die Küche', 'die Küche', '*der* Küche ⚠️'],
            ['neutrum', 'das Bad', 'das Bad', '*dem* Bad'],
            ['Plural', 'die Zimmer', 'die Zimmer', '*den* Zimmer*n* ⚠️']
          ]
        },
        examples: [
          ['Das Buch liegt auf *dem* Tisch.', 'The book is on the table.'],
          ['Ich bin in *der* Küche.', "I'm in the kitchen."],
          ['Die Schuhe stehen in *dem* Flur. → *im* Flur', 'The shoes are in the hallway.'],
          ['Die Kinder sind in *den* Zimmern.', 'The children are in the rooms.']
        ],
        note: 'Die Falle: *die* Küche wird im Dativ zu *der* Küche. Du siehst „der“ und denkst maskulin — ist es aber nicht.', noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammatik', title: 'Ortspräpositionen + die Verschmelzungen',
        body: 'Nach diesen Präpositionen steht bei der Frage *wo?* immer Dativ. Und Deutsch zieht sie extrem gern zusammen — das sind keine Abkürzungen, sondern Standard.',
        table: {
          head: ['Präposition', 'Bedeutung', 'Beispiel', 'verschmolzen'],
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
        note: 'Dieselben Präpositionen nehmen *Akkusativ*, wenn eine Bewegung dorthin passiert: „Ich gehe in *die* Küche“ (wohin?) gegen „Ich bin in *der* Küche“ (wo?).' },

      { t: 'dialog', kicker: 'Dialog', title: 'WG-Besichtigung',
        setting: 'Emerson schaut sich ein Zimmer in einer WG an.',
        lines: [
          ['Nina', 'Komm rein! Das ist der Flur, und da vorne ist die Küche.', 'Come in! This is the hallway, and the kitchen is up there.'],
          ['Emerson', 'Schön hell hier.', 'Nice and bright in here.'],
          ['Nina', 'Ja, das Wohnzimmer geht nach Süden. Gibt auch einen Balkon.', 'Yeah, the living room faces south. There’s a balcony too.'],
          ['Emerson', 'Und das Zimmer?', 'And the room?'],
          ['Nina', 'Hier. Achtzehn Quadratmeter. Bett und Schrank sind schon drin.', 'Here. Eighteen square metres. Bed and wardrobe are already in it.'],
          ['Emerson', 'Wie hoch ist die Miete?', 'How much is the rent?'],
          ['Nina', 'Vierhundertzwanzig warm.', 'Four hundred and twenty, bills included.'],
          ['Emerson', 'Okay. Und das Bad ist wo?', 'Okay. And where’s the bathroom?'],
          ['Nina', 'Neben der Küche. Die Waschmaschine steht im Keller.', 'Next to the kitchen. The washing machine is in the cellar.'],
          ['Emerson', 'Passt. Wann könnte ich einziehen?', 'Works for me. When could I move in?']
        ],
        note: '*warm* = Miete inklusive Nebenkosten. *kalt* = nur die Miete, Heizung und Wasser kommen obendrauf. Der wichtigste Unterschied bei der Wohnungssuche.' },

      { t: 'street', title: 'Wohnen, echt gesprochen',
        items: [
          ['Bude', 'place, pad', '„Coole Bude!“ — für die eigene Wohnung oder das Zimmer.'],
          ['Ich wohne bei meinen Eltern', 'I live with my parents', 'Völlig normal bis Mitte zwanzig.'],
          ['Hast du Bock rüberzukommen?', 'Wanna come over?', '*rüberkommen* — trennbar, sehr häufig.'],
          ['Es ist voll eng hier', "It's really cramped in here", '*voll* als Verstärker.'],
          ['Bei mir ist Chaos', "My place is a mess", 'Häufiger als „unordentlich“.'],
          ['Machst du mal das Fenster auf?', 'Can you open the window?', '*aufmachen* — die Vorsilbe ans Ende.'],
          ['Lüften', 'to air out the room', 'Eine echte deutsche Obsession. Täglich, auch im Winter.'],
          ['Hausordnung', 'building rules', 'Steht im Treppenhaus und wird ernst genommen.']
        ],
        note: '*Lüften* ist kein Witz: Viele Deutsche öffnen morgens fünf Minuten alle Fenster, auch bei minus zehn Grad.' },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Wo ist das Handy?',
        frame: 'Das Handy ist {}.', enFrame: 'The phone is {}.',
        slotLabel: 'Ort',
        swaps: [
          ['auf dem Tisch', 'on the table'], ['in der Küche', 'in the kitchen'], ['unter dem Bett', 'under the bed'],
          ['im Bad', 'in the bathroom'], ['neben dem Sofa', 'next to the sofa'], ['hinter der Tür', 'behind the door']
        ],
        note: 'Alles Dativ, weil die Frage *wo?* lautet. Hör die Muster: dem (m/n), der (f).' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Dativ-Runde',
        ex: [
          { k: 'fill', q: 'Das Buch liegt auf ___ Tisch.', a: ['dem'], en: 'The book is on the table.',
            why: '*der* Tisch → Dativ *dem* Tisch.' },
          { k: 'fill', q: 'Ich bin in ___ Küche.', a: ['der'], en: "I'm in the kitchen.",
            why: '*die* Küche → Dativ *der* Küche. Der Klassiker unter den Stolperfallen.' },
          { k: 'fill', q: '___ gibt hier kein WLAN.', a: ['Es', 'es'], en: "There's no wifi here." },
          { k: 'choice', q: '„Ich gehe in die Küche.“ Warum *die* und nicht *der*?',
            opts: ['Weil Küche maskulin ist.', 'Weil es eine Bewegung ist — wohin? → Akkusativ.', 'Das ist ein Fehler.'], a: 1 },
          { k: 'order', en: 'The washing machine is in the cellar.', words: ['Die', 'Waschmaschine', 'ist', 'im', 'Keller'],
            a: 'Die Waschmaschine ist im Keller' }
        ] },

      { t: 'recap', kicker: 'Einheit 8', title: 'Was jetzt sitzen sollte',
        points: [
          '*es gibt* + Akkusativ = there is / there are.',
          'Dativ: *dem* (m/n), *der* (f), *den + n* (Plural).',
          '*die* Küche → in *der* Küche. Feminin wird im Dativ zu *der*.',
          'Verschmelzungen: in dem → *im*, an dem → *am*.',
          '*wo?* → Dativ. *wohin?* → Akkusativ.',
          'Miete *warm* = inklusive Nebenkosten, *kalt* = ohne.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Das Handy liegt auf ___ Tisch.', a: ['dem'], en: 'The phone is on the table.' },
      { k: 'fill', q: 'Wir sitzen in ___ Küche.', a: ['der'], en: "We're sitting in the kitchen." },
      { k: 'fill', q: 'Die Schuhe stehen ___ Flur. (in the)', a: ['im'], en: 'The shoes are in the hallway.',
        why: 'in dem → *im*.' },
      { k: 'fill', q: '___ gibt einen Balkon.', a: ['Es', 'es'], en: "There's a balcony." },
      { k: 'choice', q: 'Was bedeutet „420 € warm“?',
        opts: ['Miete ohne Nebenkosten.', 'Miete inklusive Nebenkosten.', 'Kaution.'], a: 1 },
      { k: 'choice', q: '„Die Wohnung hat 3 Zimmer.“ Sind Küche und Bad dabei?',
        opts: ['Ja, das sind zwei davon.', 'Nein, die kommen extra dazu.', 'Kommt drauf an.'], a: 1 },
      { k: 'choice', q: 'Welcher Satz ist richtig?',
        opts: ['Ich bin in die Küche.', 'Ich bin in der Küche.', 'Ich bin in dem Küche.'], a: 1,
        why: '*wo?* → Dativ, feminin → der Küche.' },
      { k: 'order', en: 'There is no lift.', words: ['Es', 'gibt', 'keinen', 'Aufzug'], a: 'Es gibt keinen Aufzug' },
      { k: 'order', en: 'The cat is under the bed.', words: ['Die', 'Katze', 'ist', 'unter', 'dem', 'Bett'],
        a: 'Die Katze ist unter dem Bett' },
      { k: 'listen', de: 'Wo ist das Bad?', a: ['Wo ist das Bad'], en: "Where's the bathroom?" },
      { k: 'listen', de: 'Die Heizung geht nicht.', a: ['Die Heizung geht nicht'], en: "The heating isn't working." },
      { k: 'match', q: 'Räume', pairs: [
        ['die Küche', 'kitchen'], ['das Bad', 'bathroom'], ['der Flur', 'hallway'], ['der Keller', 'cellar']
      ] },
      { k: 'match', q: 'Präpositionen', pairs: [
        ['unter', 'under'], ['über', 'above'], ['neben', 'next to'], ['zwischen', 'between']
      ] },
      { k: 'trans', en: 'Is there wifi here?', a: ['Gibt es hier WLAN?', 'Gibt es hier Wlan?', 'Gibts hier WLAN?'], hint: 'Gibt es …' }
    ]
  });
})();
