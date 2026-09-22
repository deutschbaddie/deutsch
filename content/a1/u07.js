/* Unit 7 — Shopping */
(function () {
  window.DE.registerUnit({
    id: 'a1-07', level: 'A1', num: 7, minutes: 36,
    title: 'Shopping, prices, clothes',
    subtitle: 'In shops, money, colours, sizes · dieser/welcher · too expensive',
    can: [
      'Ask about prices and understand the answers.',
      'Buy clothes and ask for a different size.',
      'Use *dieser/diese/dieses* to point at something without pointing.',
      'Handle the standard lines at a German supermarket till.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 7', title: 'Spending money in German',
        lead: 'German checkouts are faster than you expect. Much faster. This unit is about not freezing up.',
        points: [
          'Saying and hearing prices — including "drei fünfzig".',
          'Clothes, colours, sizes.',
          '*dieser, diese, dieses* — this one here.',
          '*welcher?* — asking which one.'
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'In the shop',
        items: [
          ['kaufen', 'to buy', 'Ich kaufe das.', "I'll buy that."],
          ['einkaufen', 'to do the shopping', 'Ich gehe einkaufen.', "I'm going shopping."],
          ['der Supermarkt', 'supermarket', 'Der Supermarkt macht um acht zu.', 'The supermarket closes at eight.'],
          ['die Bäckerei', 'bakery', 'Zwei Brötchen von der Bäckerei.', 'Two rolls from the bakery.'],
          ['der Laden', 'shop', 'Der Laden ist zu.', 'The shop is closed.'],
          ['die Kasse', 'till, checkout', 'Kasse zwei bitte!', 'Till two please!'],
          ['der Preis', 'price', 'Der Preis ist okay.', 'The price is okay.'],
          ['das Geld', 'money', 'Ich habe kein Geld dabei.', "I don't have money on me."],
          ['bar', 'cash', 'Zahlen Sie bar?', 'Are you paying cash?'],
          ['die Karte', 'card', 'Kann ich mit Karte zahlen?', 'Can I pay by card?'],
          ['die Tüte', 'bag (plastic/paper)', 'Brauchen Sie eine Tüte?', 'Do you need a bag?'],
          ['der Pfand', 'deposit (on bottles)', 'Auf die Flasche ist Pfand.', "There's a deposit on the bottle."],
          ['die Quittung / der Kassenbon', 'receipt', 'Möchten Sie den Bon?', 'Would you like the receipt?'],
          ['teuer', 'expensive', 'Das ist zu teuer.', "That's too expensive."],
          ['billig / günstig', 'cheap / good value', 'Das war günstig.', 'That was good value.'],
          ['der Euro', 'euro', 'Das macht neun Euro.', "That'll be nine euros."],
          ['der Cent', 'cent', 'Neunundneunzig Cent.', 'Ninety-nine cents.'],
          ['kosten', 'to cost', 'Was kostet das?', 'What does that cost?']
        ],
        note: '*Pfand* is a German speciality: you pay 8–25 cents extra on almost every bottle and get it back at a return machine.' },

      { t: 'grammar', kicker: 'In practice', title: 'Hearing and saying prices',
        body: 'Prices are almost never said in full. Nobody says "3,50 €" as "three euros fifty cents".',
        table: {
          head: ['Written', 'Said', 'Literally'],
          rows: [
            ['3,50 €', '*drei fünfzig*', 'three fifty'],
            ['0,99 €', '*neunundneunzig Cent*', 'ninety-nine cents'],
            ['12,00 €', '*zwölf Euro*', 'twelve euros'],
            ['1,20 €', '*ein zwanzig*', 'one twenty'],
            ['19,95 €', '*neunzehn fünfundneunzig*', 'nineteen ninety-five']
          ]
        },
        examples: [
          ['Was kostet das? — Drei fünfzig.', 'What does that cost? — Three fifty.'],
          ['Das macht zusammen achtzehn zwanzig.', 'That comes to eighteen twenty altogether.'],
          ['Haben Sie es passend?', 'Do you have exact change?']
        ],
        note: 'You will hear "Haben Sie es passend?" constantly. The answer is "Ja" or "Nein, tut mir leid".' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Clothes and colours',
        items: [
          ['die Kleidung', 'clothing', 'Die Kleidung ist im ersten Stock.', 'Clothing is on the first floor.'],
          ['die Hose', 'trousers (singular in German!)', 'Die Hose ist zu eng.', 'The trousers are too tight.'],
          ['das Hemd', 'shirt', 'Ein weißes Hemd.', 'A white shirt.'],
          ['das T-Shirt', 't-shirt', 'Das T-Shirt gefällt mir.', 'I like the t-shirt.'],
          ['der Pullover / Pulli', 'jumper, sweater', 'Zieh einen Pulli an.', 'Put on a jumper.'],
          ['die Jacke', 'jacket', 'Meine Jacke ist weg.', 'My jacket is gone.'],
          ['die Schuhe', 'shoes (plural)', 'Neue Schuhe.', 'New shoes.'],
          ['das Kleid', 'dress', 'Ein schönes Kleid.', 'A nice dress.'],
          ['die Mütze', 'beanie, hat', 'Setz die Mütze auf.', 'Put the beanie on.'],
          ['die Größe', 'size', 'Welche Größe haben Sie?', 'What size are you?'],
          ['schwarz', 'black', 'eine schwarze Jacke', 'a black jacket'],
          ['weiß', 'white', 'ein weißes Hemd', 'a white shirt'],
          ['rot', 'red', 'rote Schuhe', 'red shoes'],
          ['blau', 'blue', 'eine blaue Hose', 'blue trousers'],
          ['grün', 'green', 'grüner Pulli', 'green jumper'],
          ['gelb', 'yellow', 'gelbe Mütze', 'yellow beanie'],
          ['grau', 'grey', 'ein graues T-Shirt', 'a grey t-shirt'],
          ['braun', 'brown', 'braune Schuhe', 'brown shoes'],
          ['anprobieren', 'to try on', 'Kann ich das anprobieren?', 'Can I try this on?'],
          ['passen', 'to fit', 'Das passt nicht.', "That doesn't fit."],
          ['gefallen', 'to please, to like', 'Das gefällt mir.', 'I like that.']
        ],
        note: '*die Hose* is singular. One Hose, two Hosen. "Die Hose ist", not "sind". Same with *die Brille* (glasses).' },

      { t: 'grammar', kicker: 'Grammar', title: 'dieser, diese, dieses — pointing without a finger',
        body: '*dieser* means "this one here". It copies the endings of *der/die/das* exactly — so if you know those, you already know this.\nAnd *welcher?* asks which one: "Welche Größe?", "Welcher Zug?"',
        table: {
          head: ['', 'Nominative', 'Accusative'],
          rows: [
            ['masculine', '*dieser* Pulli', '*diesen* Pulli'],
            ['feminine', '*diese* Jacke', '*diese* Jacke'],
            ['neuter', '*dieses* T-Shirt', '*dieses* T-Shirt'],
            ['plural', '*diese* Schuhe', '*diese* Schuhe'],
            ['asking', '*welcher / welche / welches*', '*welchen / welche / welches*']
          ]
        },
        examples: [
          ['Ich nehme *diesen* Pulli.', "I'll take this jumper."],
          ['*Diese* Jacke gefällt mir.', 'I like this jacket.'],
          ['*Welche* Größe haben Sie?', 'What size do you take?'],
          ['*Welchen* möchten Sie?', 'Which one would you like?']
        ],
        note: 'Same rule as before: only the masculine changes in the accusative. dieser → diesen. The rest stay put.' },

      { t: 'dialog', kicker: 'Dialogue', title: 'In a clothes shop',
        setting: 'A shop assistant and you. She uses *Sie*.',
        lines: [
          ['Verkäuferin', 'Hallo! Kann ich Ihnen helfen?', 'Hello! Can I help you?'],
          ['Emerson', 'Ja, ich suche eine Jacke.', "Yes, I'm looking for a jacket."],
          ['Verkäuferin', 'Welche Farbe denn?', 'What colour?'],
          ['Emerson', 'Schwarz oder grau. Was kostet diese hier?', 'Black or grey. What does this one cost?'],
          ['Verkäuferin', 'Die ist neunundsiebzig neunzig.', "That one's seventy-nine ninety."],
          ['Emerson', 'Okay, das ist ein bisschen teuer. Kann ich sie anprobieren?', "Okay, that's a bit expensive. Can I try it on?"],
          ['Verkäuferin', 'Klar. Welche Größe?', 'Sure. What size?'],
          ['Emerson', 'Ich glaube M. — Hm, die ist zu klein.', 'I think M. — Hm, this is too small.'],
          ['Verkäuferin', 'Ich hole Ihnen eine L.', "I'll get you an L."],
          ['Emerson', 'Danke. — Die passt. Die nehme ich.', "Thanks. — This fits. I'll take it."]
        ],
        note: '*Die nehme ich* — the object sits in slot one and the verb stays in slot two. Very natural German.' },

      { t: 'culture', kicker: 'Survival', title: 'The German supermarket till',
        body: 'It is faster than you expect. The cashier scans at speed, and you are expected to pack at the same speed.\nThere is no one to pack for you. You bring your own bag — bags cost extra and count as mildly embarrassing.\nThe three sentences that always come:\n"Haben Sie eine Payback-Karte?" — no, you don’t.\n"Brauchen Sie eine Tüte?" — "Nein danke."\n"Möchten Sie den Bon?" — "Nein danke" or "Ja, bitte."\nAnd at the end, while you are still packing: "Der Nächste bitte." — next please. That is not an attack. That is normal operation.',
        note: 'Chuck things in roughly, pay, then sort it out at the shelf behind the till. That is exactly what Germans do.' },

      { t: 'street', title: 'Talking about prices',
        lead: 'Germans talk openly about prices — and very reluctantly about salaries.',
        items: [
          ['Das ist mir zu teuer', "That's too expensive for me", 'Completely normal to say out loud in a shop.'],
          ['viel zu teuer', 'way too expensive', '*viel zu* is the standard intensifier.'],
          ['ein Schnäppchen', 'a bargain', '"Das war echt ein Schnäppchen."'],
          ['Das lohnt sich nicht', "It's not worth it", 'Very common when weighing up a purchase.'],
          ['abgezockt', 'ripped off', '"Da wirst du abgezockt." — You\'re getting ripped off there.'],
          ['Ich bin blank', "I'm broke", 'Colloquial. Also: "Ich bin pleite."'],
          ['Geht auf mich', "It's on me", 'When you are paying for someone.'],
          ['Hast du Kleingeld?', 'Got any change?', '*Kleingeld* = coins.']
        ] },

      { t: 'pattern', kicker: 'Sentence builder', title: 'What does … cost?',
        frame: 'Was kostet {}?', enFrame: 'What does {} cost?',
        slotLabel: 'thing',
        swaps: [
          ['das', 'that'], ['die Jacke', 'the jacket'], ['der Pulli', 'the jumper'],
          ['ein Kaffee', 'a coffee'], ['das T-Shirt', 'the t-shirt'], ['diese Schuhe', 'these shoes']
        ],
        note: 'In the plural it becomes *Was kosten diese Schuhe?* — the verb adjusts.' },

      { t: 'drill', kicker: 'Try it now', title: 'Shopping round',
        ex: [
          { k: 'fill', q: 'Ich nehme ___ Pulli. (this)', a: ['diesen'], en: "I'll take this jumper.",
            why: '*der* Pulli → accusative *diesen*.' },
          { k: 'fill', q: '___ Größe haben Sie? (which)', a: ['welche'], en: 'What size do you take?',
            why: '*die* Größe → *welche*.' },
          { k: 'choice', q: 'The cashier asks "Brauchen Sie eine Tüte?" What is she asking?',
            opts: ['Whether you want to pay.', 'Whether you need a carrier bag.', 'Whether you want the receipt.'], a: 1 },
          { k: 'listen', de: 'Das macht neunzehn fünfzig.',
            a: ['Das macht neunzehn fünfzig', 'Das macht neunzehn fuenfzig'], en: "That'll be 19,50." },
          { k: 'trans', en: 'That is too expensive.', a: ['Das ist zu teuer.'], hint: 'zu + adjective' }
        ] },

      { t: 'recap', kicker: 'Unit 7', title: 'What should stick now',
        points: [
          'Prices: "drei fünfzig", not "drei Euro fünfzig Cent".',
          '*dieser/diese/dieses* copies the endings of der/die/das.',
          '*welcher?* asks which one.',
          '*die Hose* and *die Brille* are singular.',
          'At the till: bring your own bag, pack yourself, keep up.',
          '"Das ist mir zu teuer" is a completely normal thing to say.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Ich nehme ___ Jacke. (this)', a: ['diese'], en: "I'll take this jacket." },
      { k: 'fill', q: 'Ich nehme ___ Pullover. (this)', a: ['diesen'], en: "I'll take this jumper." },
      { k: 'fill', q: 'Was ___ das? (to cost)', a: ['kostet'], en: 'What does that cost?' },
      { k: 'choice', q: 'How do you say 4,20 € in everyday speech?',
        opts: ['vier Euro zwanzig Cent', 'vier zwanzig', 'vierzwanzig'], a: 1 },
      { k: 'choice', q: 'What is "Pfand"?',
        opts: ['A discount.', 'A deposit on bottles that you get back.', 'The tip.'], a: 1 },
      { k: 'choice', q: '"Die Hose ist zu eng." Why *ist* and not *sind*?',
        opts: ['It is a mistake.', 'Because Hose is singular in German.', 'Because it is accusative.'], a: 1 },
      { k: 'order', en: 'Can I try this on?', words: ['Kann', 'ich', 'das', 'anprobieren'], a: 'Kann ich das anprobieren' },
      { k: 'order', en: 'Can I pay by card?', words: ['Kann', 'ich', 'mit', 'Karte', 'zahlen'], a: 'Kann ich mit Karte zahlen' },
      { k: 'listen', de: 'Haben Sie es passend?', a: ['Haben Sie es passend'], en: 'Do you have exact change?' },
      { k: 'listen', de: 'Das ist mir zu teuer.', a: ['Das ist mir zu teuer'], en: "That's too expensive for me." },
      { k: 'match', q: 'Colours', pairs: [['schwarz', 'black'], ['weiß', 'white'], ['grau', 'grey'], ['gelb', 'yellow']] },
      { k: 'match', q: 'In the shop', pairs: [
        ['die Kasse', 'the till'], ['die Tüte', 'the bag'], ['der Kassenbon', 'the receipt'], ['die Größe', 'the size']
      ] },
      { k: 'trans', en: 'I like this jacket.',
        a: ['Diese Jacke gefällt mir.', 'Die Jacke gefällt mir.', 'Diese Jacke gefaellt mir.'], hint: 'gefallen + mir' },
      { k: 'choice', q: 'What does "Ich bin pleite" mean?', opts: ["I'm broke.", "I'm tired.", "I'm done."], a: 0 }
    ]
  });
})();
