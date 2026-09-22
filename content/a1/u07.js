/* Einheit 7 — Einkaufen */
(function () {
  window.DE.registerUnit({
    id: 'a1-07', level: 'A1', num: 7, minutes: 36,
    title: 'Einkaufen, Preise, Klamotten',
    subtitle: 'Im Laden, Geld, Farben, Kleidung · dieser/welcher · zu teuer',
    can: [
      'Du kannst nach Preisen fragen und Antworten verstehen.',
      'Du kannst Kleidung kaufen und nach einer anderen Größe fragen.',
      'Du kannst *dieser/diese/dieses* benutzen, um auf etwas zu zeigen.',
      'Du verstehst die typischen Sätze an einer deutschen Supermarktkasse.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 7', title: 'Geld ausgeben auf Deutsch',
        lead: 'Kassen in Deutschland sind schnell. Sehr schnell. Diese Einheit sorgt dafür, dass du nicht ins Stocken kommst.',
        points: [
          'Preise sagen und verstehen — inklusive „drei fünfzig“.',
          'Kleidung, Farben, Größen.',
          '*dieser, diese, dieses* — auf etwas zeigen, ohne zu deuten.',
          '*welcher?* — nach der Auswahl fragen.'
        ] },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Im Laden',
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
        note: '*Pfand* ist eine deutsche Spezialität: Auf fast jede Flasche zahlst du 8–25 Cent extra und bekommst sie beim Rückgabeautomaten zurück.' },

      { t: 'grammar', kicker: 'Praxis', title: 'Preise hören und sagen',
        body: 'Preise werden im Alltag fast nie voll ausgesprochen. „3,50 €“ sagt niemand als „drei Euro fünfzig Cent“.',
        table: {
          head: ['Geschrieben', 'gesagt', 'wörtlich'],
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
        note: '„Haben Sie es passend?“ hörst du ständig. Antwort: „Ja“ oder „Nein, tut mir leid“.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Kleidung und Farben',
        items: [
          ['die Kleidung', 'clothing', 'Die Kleidung ist im ersten Stock.', 'Clothing is on the first floor.'],
          ['die Hose', 'trousers (singular in German!)', 'Die Hose ist zu eng.', 'The trousers are too tight.'],
          ['das Hemd', 'shirt', 'Ein weißes Hemd.', 'A white shirt.'],
          ['das T-Shirt', 't-shirt', 'Das T-Shirt gefällt mir.', 'I like the t-shirt.'],
          ['der Pullover / Pulli', 'jumper, sweater', 'Zieh einen Pulli an.', 'Put on a jumper.'],
          ['die Jacke', 'jacket', 'Meine Jacke ist weg.', 'My jacket is gone.'],
          ['die Schuhe', 'shoes (plural)', 'Neue Schuhe.', 'New shoes.'],
          ['das Kleid', 'dress', 'Ein schönes Kleid.', 'A nice dress.'],
          ['die Mütze', 'beanie, hat', 'Setz die Mütze auf.', 'Put on the beanie.'],
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
        note: '*die Hose* ist Singular. Eine Hose, zwei Hosen. „Die Hose ist“, nicht „sind“. Genauso *die Brille*.' },

      { t: 'grammar', kicker: 'Grammatik', title: 'dieser, diese, dieses — zeigen ohne Finger',
        body: '*dieser* heißt „this one here“. Es folgt exakt den Endungen von *der/die/das* — wenn du die kennst, kannst du dieser schon.\nUnd *welcher?* fragt nach der Auswahl: „Welche Größe?“, „Welcher Zug?“',
        table: {
          head: ['', 'Nominativ', 'Akkusativ'],
          rows: [
            ['maskulin', '*dieser* Pulli', '*diesen* Pulli'],
            ['feminin', '*diese* Jacke', '*diese* Jacke'],
            ['neutrum', '*dieses* T-Shirt', '*dieses* T-Shirt'],
            ['Plural', '*diese* Schuhe', '*diese* Schuhe'],
            ['Frage', '*welcher / welche / welches*', '*welchen / welche / welches*']
          ]
        },
        examples: [
          ['Ich nehme *diesen* Pulli.', "I'll take this jumper."],
          ['*Diese* Jacke gefällt mir.', 'I like this jacket.'],
          ['*Welche* Größe haben Sie?', 'What size do you take?'],
          ['*Welchen* möchten Sie?', 'Which one would you like?']
        ],
        note: 'Wieder gilt: nur maskulin ändert sich im Akkusativ. dieser → diesen. Die anderen bleiben.' },

      { t: 'dialog', kicker: 'Dialog', title: 'Im Klamottenladen',
        setting: 'Eine Verkäuferin, du. Sie siezt.',
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
        note: '*Die nehme ich* — das Objekt steht an Position 1, das Verb bleibt an Position 2. Sehr natürliches Deutsch.' },

      { t: 'culture', kicker: 'Überlebenswissen', title: 'Die deutsche Supermarktkasse',
        body: 'Sie ist schneller als du erwartest. Die Kassiererin scannt in hohem Tempo, und es wird erwartet, dass du im selben Tempo einpackst.\nEs gibt kein Personal, das für dich einpackt. Du bringst deine eigene Tasche mit — Tüten kosten extra und gelten als leicht peinlich.\nDie drei Sätze, die immer kommen:\n„Haben Sie eine Payback-Karte?“ — nein, hast du nicht.\n„Brauchen Sie eine Tüte?“ — „Nein danke.“\n„Möchten Sie den Bon?“ — „Nein danke“ oder „Ja, bitte.“\nUnd am Ende, während du noch packst: „Der Nächste bitte.“ Das ist kein Angriff. Das ist der Normalbetrieb.',
        note: 'Pack erst grob ein, zahl, und sortier dann am Tisch hinter der Kasse. Genau das machen die Deutschen auch.' },

      { t: 'street', title: 'Über Preise reden',
        lead: 'Deutsche reden offen über Geld, wenn es um Preise geht — und sehr ungern über Gehälter.',
        items: [
          ['Das ist mir zu teuer', "That's too expensive for me", 'Völlig normal, auch laut im Laden zu sagen.'],
          ['viel zu teuer', 'way too expensive', '*viel zu* ist der Standardverstärker.'],
          ['ein Schnäppchen', 'a bargain', '„Das war echt ein Schnäppchen.“'],
          ['Das lohnt sich nicht', "It's not worth it", 'Sehr häufig bei Kaufentscheidungen.'],
          ['abgezockt', 'ripped off', '„Da wirst du abgezockt.“'],
          ['Ich bin blank', "I'm broke", 'Umgangssprachlich. Auch: „Ich bin pleite.“'],
          ['Geht auf mich', "It's on me", 'Wenn du einlädst.'],
          ['Hast du Kleingeld?', 'Got any change?', '*Kleingeld* = coins.']
        ] },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Was kostet …?',
        frame: 'Was kostet {}?', enFrame: 'What does {} cost?',
        slotLabel: 'Ding',
        swaps: [
          ['das', 'that'], ['die Jacke', 'the jacket'], ['der Pulli', 'the jumper'],
          ['ein Kaffee', 'a coffee'], ['das T-Shirt', 'the t-shirt'], ['diese Schuhe', 'these shoes']
        ],
        note: 'Im Plural wird daraus *Was kosten diese Schuhe?* — das Verb passt sich an.' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Einkaufsrunde',
        ex: [
          { k: 'fill', q: 'Ich nehme ___ Pulli. (this)', a: ['diesen'], en: "I'll take this jumper.",
            why: '*der* Pulli → Akkusativ *diesen*.' },
          { k: 'fill', q: '___ Größe haben Sie? (which)', a: ['welche'], en: 'What size do you take?',
            why: '*die* Größe → *welche*.' },
          { k: 'choice', q: 'Die Kassiererin fragt „Brauchen Sie eine Tüte?“ Was fragt sie?',
            opts: ['Ob du zahlen willst.', 'Ob du eine Tragetasche brauchst.', 'Ob du den Bon willst.'], a: 1 },
          { k: 'listen', de: 'Das macht neunzehn fünfzig.', a: ['Das macht neunzehn fünfzig', 'Das macht neunzehn fuenfzig'], en: "That'll be 19,50." },
          { k: 'trans', en: 'That is too expensive.', a: ['Das ist zu teuer.'], hint: 'zu + Adjektiv' }
        ] },

      { t: 'recap', kicker: 'Einheit 7', title: 'Was jetzt sitzen sollte',
        points: [
          'Preise: „drei fünfzig“, nicht „drei Euro fünfzig Cent“.',
          '*dieser/diese/dieses* folgt den Endungen von der/die/das.',
          '*welcher?* fragt nach der Auswahl.',
          '*die Hose* und *die Brille* sind Singular.',
          'Kasse: Tüte selbst mitbringen, selbst einpacken, Tempo halten.',
          '*Das ist mir zu teuer* ist ein völlig normaler Satz.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Ich nehme ___ Jacke. (this)', a: ['diese'], en: "I'll take this jacket." },
      { k: 'fill', q: 'Ich nehme ___ Pullover. (this)', a: ['diesen'], en: "I'll take this jumper." },
      { k: 'fill', q: 'Was ___ das? (to cost)', a: ['kostet'], en: 'What does that cost?' },
      { k: 'choice', q: 'Wie sagt man 4,20 € im Alltag?', opts: ['vier Euro zwanzig Cent', 'vier zwanzig', 'vierzwanzig'], a: 1 },
      { k: 'choice', q: 'Was ist „Pfand“?', opts: ['Ein Rabatt.', 'Eine Gebühr auf Flaschen, die du zurückbekommst.', 'Das Trinkgeld.'], a: 1 },
      { k: 'choice', q: '„Die Hose ist zu eng.“ Warum *ist* und nicht *sind*?',
        opts: ['Fehler im Satz.', 'Weil Hose im Deutschen Singular ist.', 'Weil es Akkusativ ist.'], a: 1 },
      { k: 'order', en: 'Can I try this on?', words: ['Kann', 'ich', 'das', 'anprobieren'], a: 'Kann ich das anprobieren' },
      { k: 'order', en: 'Can I pay by card?', words: ['Kann', 'ich', 'mit', 'Karte', 'zahlen'], a: 'Kann ich mit Karte zahlen' },
      { k: 'listen', de: 'Haben Sie es passend?', a: ['Haben Sie es passend'], en: 'Do you have exact change?' },
      { k: 'listen', de: 'Das ist mir zu teuer.', a: ['Das ist mir zu teuer'], en: "That's too expensive for me." },
      { k: 'match', q: 'Farben', pairs: [['schwarz', 'black'], ['weiß', 'white'], ['grau', 'grey'], ['gelb', 'yellow']] },
      { k: 'match', q: 'Im Laden', pairs: [
        ['die Kasse', 'the till'], ['die Tüte', 'the bag'], ['der Kassenbon', 'the receipt'], ['die Größe', 'the size']
      ] },
      { k: 'trans', en: 'I like this jacket.', a: ['Diese Jacke gefällt mir.', 'Die Jacke gefällt mir.', 'Diese Jacke gefaellt mir.'],
        hint: 'gefallen + mir' },
      { k: 'choice', q: 'Was bedeutet „Ich bin pleite“?', opts: ["I'm broke.", "I'm tired.", "I'm done."], a: 0 }
    ]
  });
})();
