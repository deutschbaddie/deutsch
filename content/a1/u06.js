/* Unit 6 — Food and drink */
(function () {
  window.DE.registerUnit({
    id: 'a1-06', level: 'A1', num: 6, minutes: 38,
    title: 'Food and drink',
    subtitle: 'Restaurants, cafés, being hungry · möchten and mögen · paying',
    can: [
      'Order and pay in a restaurant.',
      'Say what you like and what you don’t.',
      'Ask for something politely: *ich möchte* instead of *ich will*.',
      'Understand the standard questions a waiter asks you.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 6', title: 'The first situation you survive',
        lead: 'Ordering food is where you first notice your German working. Short sentences, a fixed sequence, instant feedback.',
        points: [
          '*Ich möchte …* — the politest and most useful sentence opener in all of A1.',
          '*mögen* is about taste, *möchten* is about ordering. Not the same thing.',
          'The whole restaurant sequence, in the order it actually happens.',
          'Paying together or separately — the question that surprises every foreigner.'
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Food',
        items: [
          ['das Essen', 'food, meal', 'Das Essen war gut.', 'The food was good.'],
          ['das Brot', 'bread', 'Deutsches Brot ist gut.', 'German bread is good.'],
          ['das Brötchen', 'bread roll', 'Zwei Brötchen, bitte.', 'Two rolls, please.'],
          ['der Käse', 'cheese', 'Brot mit Käse.', 'Bread with cheese.'],
          ['die Wurst', 'sausage, cold cuts', 'Eine Wurst mit Senf.', 'A sausage with mustard.'],
          ['das Fleisch', 'meat', 'Ich esse kein Fleisch.', "I don't eat meat."],
          ['das Ei / die Eier', 'egg / eggs', 'Ein Ei zum Frühstück.', 'An egg for breakfast.'],
          ['der Salat', 'salad, lettuce', 'Ich nehme den Salat.', "I'll take the salad."],
          ['die Suppe', 'soup', 'Die Suppe ist kalt.', 'The soup is cold.'],
          ['die Kartoffel', 'potato', 'Kartoffeln mit Butter.', 'Potatoes with butter.'],
          ['die Nudeln', 'pasta, noodles (plural)', 'Nudeln gehen immer.', 'Pasta always works.'],
          ['der Reis', 'rice', 'Reis oder Kartoffeln?', 'Rice or potatoes?'],
          ['das Gemüse', 'vegetables', 'Iss dein Gemüse.', 'Eat your vegetables.'],
          ['das Obst', 'fruit', 'Obst ist gesund.', 'Fruit is healthy.'],
          ['der Apfel', 'apple', 'Ein Apfel am Tag.', 'An apple a day.'],
          ['der Kuchen', 'cake', 'Ein Stück Kuchen, bitte.', 'A slice of cake, please.'],
          ['das Frühstück', 'breakfast', 'Frühstück gibt es bis elf.', 'Breakfast is served until eleven.'],
          ['das Mittagessen', 'lunch', 'Was gibt es zum Mittagessen?', "What's for lunch?"],
          ['das Abendessen', 'dinner', 'Abendessen um acht.', 'Dinner at eight.']
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Drinks',
        items: [
          ['das Wasser', 'water', 'Ein Wasser, bitte.', 'A water, please.'],
          ['mit Kohlensäure', 'sparkling', 'Mit oder ohne Kohlensäure?', 'Sparkling or still?'],
          ['still', 'still (water)', 'Ein stilles Wasser.', 'A still water.'],
          ['der Kaffee', 'coffee', 'Noch einen Kaffee?', 'Another coffee?'],
          ['der Tee', 'tea', 'Tee mit Zitrone.', 'Tea with lemon.'],
          ['die Milch', 'milk', 'Kaffee mit Milch.', 'Coffee with milk.'],
          ['der Saft', 'juice', 'Ein Orangensaft.', 'An orange juice.'],
          ['das Bier', 'beer', 'Ein Bier vom Fass.', 'A draught beer.'],
          ['der Wein', 'wine', 'Rotwein oder Weißwein?', 'Red or white wine?'],
          ['die Cola', 'coke', 'Eine Cola, bitte.', 'A coke, please.'],
          ['die Schorle', 'juice or wine mixed with sparkling water', 'Eine Apfelschorle.', 'An apple spritzer.'],
          ['der Zucker', 'sugar', 'Ohne Zucker, bitte.', 'No sugar, please.'],
          ['kalt', 'cold', 'Das Bier ist kalt.', 'The beer is cold.'],
          ['warm', 'warm', 'Ein warmes Getränk.', 'A warm drink.'],
          ['das Getränk', 'drink, beverage', 'Was für Getränke habt ihr?', 'What drinks do you have?']
        ],
        note: '*Apfelschorle* is the most German drink there is. Order one and nobody will take you for a tourist.' },

      { t: 'grammar', kicker: 'Grammar', title: 'möchten — your politest tool',
        body: '*Ich möchte* means "I would like". It is polite, universal and works in every situation: restaurant, shop, office, doctor.\nIts counterpart *ich will* means "I want" and lands harder in German than in English — with strangers it is close to rude. Use *möchte*.',
        table: {
          head: ['Person', 'möchten', 'Example'],
          rows: [
            ['ich', '*möchte*', 'Ich möchte einen Kaffee. — I’d like a coffee.'],
            ['du', '*möchtest*', 'Möchtest du auch was? — Would you like something too?'],
            ['er/sie/es', '*möchte*', 'Sie möchte die Suppe. — She’d like the soup.'],
            ['wir', '*möchten*', 'Wir möchten bestellen. — We’d like to order.'],
            ['ihr', '*möchtet*', 'Möchtet ihr Nachtisch? — Would you lot like dessert?'],
            ['sie/Sie', '*möchten*', 'Was möchten Sie trinken? — What would you like to drink?']
          ]
        },
        examples: [
          ['Ich möchte bitte die Rechnung.', "I'd like the bill, please."],
          ['Wir möchten bestellen.', "We'd like to order."],
          ['Ich hätte gern einen Kaffee.', "I'd like a coffee. (even softer)"]
        ],
        note: '*ich* and *er/sie/es* are identical with möchten: both *möchte*. That is true of every modal verb.',
        noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammar', title: 'mögen vs. möchten — the difference matters',
        body: '*mögen* = to like something in general. "Ich mag Käse" means cheese is good by me, as a rule.\n*möchten* = to want something right now. "Ich möchte Käse" means: please give me cheese.\nOrder using *mögen* and all you have told the waiter is your opinion of cheese. He brings nothing.',
        table: {
          head: ['Sentence', 'What it means'],
          rows: [
            ['Ich *mag* Kaffee.', 'I like coffee (in general).'],
            ['Ich *möchte* einen Kaffee.', "I'd like a coffee (now, bring it)."],
            ['Ich *mag* kein Fleisch.', "I don't like meat."],
            ['Ich *esse* kein Fleisch.', "I don't eat meat (stronger — for diets and allergies)."],
            ['Magst du Sushi?', 'Do you like sushi?'],
            ['Möchtest du Sushi?', 'Do you want sushi (right now)?']
          ]
        },
        examples: [
          ['Ich mag das nicht so gern.', "I don't really like that."],
          ['Ich esse kein Schweinefleisch.', "I don't eat pork."],
          ['Ich bin Vegetarier / Vegetarierin.', "I'm vegetarian."]
        ],
        note: 'For allergies use *Ich vertrage kein …* or *Ich habe eine Allergie gegen …* — those get taken seriously.' },

      { t: 'dialog', kicker: 'Dialogue', title: 'In a restaurant, start to finish',
        setting: 'An ordinary restaurant. The waiter uses *Sie*, so you do too.',
        lines: [
          ['Kellner', 'Guten Abend. Haben Sie schon gewählt?', 'Good evening. Have you decided?'],
          ['Emerson', 'Noch nicht ganz. Einen Moment bitte.', 'Not quite. One moment please.'],
          ['Kellner', 'Kein Problem. Möchten Sie schon was trinken?', 'No problem. Would you like a drink already?'],
          ['Emerson', 'Ja, ein stilles Wasser bitte.', 'Yes, a still water please.'],
          ['Kellner', 'Gerne. — So, was darf es sein?', 'Sure. — So, what would you like?'],
          ['Emerson', 'Ich nehme die Suppe und danach die Nudeln.', "I'll take the soup and then the pasta."],
          ['Kellner', 'Sehr gern. Sonst noch etwas?', 'Very good. Anything else?'],
          ['Emerson', 'Nein danke, das ist alles.', "No thanks, that's all."],
          ['Kellner', '(später) Hat es geschmeckt?', '(later) Did you enjoy it?'],
          ['Emerson', 'Sehr gut, danke. Ich möchte bitte zahlen.', "Very good, thanks. I'd like to pay."],
          ['Kellner', 'Zusammen oder getrennt?', 'Together or separately?'],
          ['Emerson', 'Zusammen. Neunzehn fünfzig? Machen Sie einundzwanzig.', 'Together. Nineteen fifty? Make it twenty-one.']
        ],
        note: 'That last line is how Germans tip: you name the *total including the tip*, not the extra amount.' },

      { t: 'culture', kicker: 'Culture', title: 'Paying without embarrassing yourself',
        body: 'Four things Germany does differently from the US:\n*Tipping*: 5–10%, rounded up. No obligation, no percentage calculator. You say the final figure as you pay: "Machen Sie zwanzig." Leaving cash on the table and walking off is unusual.\n*Paying separately*: completely normal, even in a group of ten. The waiter bills each person individually. Nobody finds it annoying.\n*Water is never free.* Tap water has to be asked for specially, and some places won’t bring it.\n*Cash*: plenty of small shops, bakeries and pubs still take cash only. "Nur Barzahlung" means: go find a cash machine.',
        note: 'The sentence that saves you: "Kann ich mit Karte zahlen?" — Can I pay by card?' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'At the restaurant',
        items: [
          ['die Speisekarte', 'menu', 'Die Karte, bitte.', 'The menu, please.'],
          ['bestellen', 'to order', 'Wir möchten bestellen.', "We'd like to order."],
          ['die Rechnung', 'bill, check', 'Die Rechnung, bitte.', 'The bill, please.'],
          ['zahlen', 'to pay', 'Ich möchte zahlen.', "I'd like to pay."],
          ['zusammen', 'together', 'Wir zahlen zusammen.', "We're paying together."],
          ['getrennt', 'separately', 'Getrennt, bitte.', 'Separately, please.'],
          ['das Trinkgeld', 'tip', 'Das Trinkgeld ist inklusive.', 'The tip is included.'],
          ['die Vorspeise', 'starter', 'Als Vorspeise die Suppe.', 'Soup as a starter.'],
          ['das Hauptgericht', 'main course', 'Was ist das Hauptgericht?', 'What is the main course?'],
          ['der Nachtisch', 'dessert', 'Möchten Sie Nachtisch?', 'Would you like dessert?'],
          ['lecker', 'tasty, delicious', 'Das war echt lecker.', 'That was really tasty.'],
          ['satt', 'full (after eating)', 'Ich bin satt.', "I'm full."],
          ['der Hunger', 'hunger', 'Ich habe Hunger.', "I'm hungry."],
          ['der Durst', 'thirst', 'Ich habe Durst.', "I'm thirsty."],
          ['schmecken', 'to taste (good)', 'Das schmeckt gut.', 'That tastes good.']
        ],
        note: 'In German you *have* hunger and thirst, you aren’t them: "Ich habe Hunger." ("Ich bin hungrig" works too but sounds stiffer.)' },

      { t: 'pattern', kicker: 'Sentence builder', title: "I'd like …, please",
        frame: 'Ich möchte bitte {}.', enFrame: "I'd like {}, please.",
        slotLabel: 'order',
        swaps: [
          ['einen Kaffee', 'a coffee'], ['ein Wasser', 'a water'], ['die Rechnung', 'the bill'],
          ['ein Bier', 'a beer'], ['die Speisekarte', 'the menu'], ['ein Stück Kuchen', 'a slice of cake']
        ],
        note: 'Watch the accusative: *einen* Kaffee (der), *ein* Wasser (das), *die* Rechnung (die).' },

      { t: 'street', title: 'How people talk about food',
        lead: 'In a video it is rarely about "the main course".',
        items: [
          ['Hast du Hunger?', 'You hungry?', 'The normal question. Not "bist du hungrig".'],
          ['Ich hab Kohldampf', "I'm starving", 'Colloquial, slightly older, universally understood.'],
          ['Das schmeckt bombe', 'That tastes amazing', '*bombe* used as an adjective — pure slang.'],
          ['Bock auf Pizza?', 'Up for pizza?', 'The most common suggestion between friends, full stop.'],
          ['Ich bin pappsatt', "I'm stuffed", 'An intensified version of *satt*.'],
          ['Lass was bestellen', "Let's order something", '*lass* + infinitive = let\'s. Very common.'],
          ['Voll lecker', 'So good', '*voll* as an intensifier, youth slang.'],
          ['Das geht gar nicht', "That's a no-go", 'Also used for food: "Ananas auf Pizza geht gar nicht."']
        ] },

      { t: 'drill', kicker: 'Try it now', title: 'Ordering',
        ex: [
          { k: 'choice', q: 'You want to order a coffee. What do you say?',
            opts: ['Ich mag Kaffee.', 'Ich möchte einen Kaffee, bitte.', 'Ich will Kaffee.'], a: 1,
            why: '*mögen* = taste, *möchten* = ordering. *will* sounds blunt with strangers.' },
          { k: 'fill', q: 'Ich ___ bitte die Rechnung.', a: ['möchte', 'moechte'], en: "I'd like the bill, please." },
          { k: 'fill', q: 'Ich nehme ___ Salat. (the)', a: ['den'], en: "I'll take the salad.",
            why: '*der* Salat → accusative *den* Salat.' },
          { k: 'choice', q: 'The waiter asks "Zusammen oder getrennt?" What is he asking?',
            opts: ['Whether you are sitting together.', 'Whether you want one bill or several.', 'Whether you want to order more.'], a: 1 },
          { k: 'trans', en: "I'm hungry.", a: ['Ich habe Hunger.', 'Ich hab Hunger.'], hint: 'use haben' }
        ] },

      { t: 'recap', kicker: 'Unit 6', title: 'What should stick now',
        points: [
          '*Ich möchte …* is your default sentence for anything you want.',
          '*mögen* = taste. *möchten* = ordering. Never mix them up.',
          'With modal verbs *ich* and *er/sie/es* are the same: ich möchte, er möchte.',
          'You *have* hunger and thirst in German.',
          '"Zusammen oder getrennt?" — you need to be able to answer that.',
          'Tipping: round up and say the *total*.'
        ] }
    ],
    quiz: [
      { k: 'choice', q: 'Which sentence actually orders something?',
        opts: ['Ich mag Tee.', 'Ich möchte einen Tee.', 'Tee ist gut.'], a: 1 },
      { k: 'fill', q: '___ du Sushi? (do you like)', a: ['magst'], en: 'Do you like sushi?' },
      { k: 'fill', q: 'Wir ___ bestellen.', a: ['möchten', 'moechten'], en: "We'd like to order." },
      { k: 'fill', q: 'Ich habe ___. (thirst)', a: ['Durst', 'durst'], en: "I'm thirsty." },
      { k: 'fill', q: 'Ich nehme ___ Suppe. (the)', a: ['die'], en: "I'll take the soup.",
        why: '*die* Suppe stays *die* in the accusative.' },
      { k: 'order', en: "I'd like to pay, please.", words: ['Ich', 'möchte', 'bitte', 'zahlen'], a: 'Ich möchte bitte zahlen' },
      { k: 'order', en: 'A still water, please.', words: ['Ein', 'stilles', 'Wasser', 'bitte'], a: 'Ein stilles Wasser bitte' },
      { k: 'listen', de: 'Was möchten Sie trinken?', a: ['Was möchten Sie trinken'], en: 'What would you like to drink?' },
      { k: 'listen', de: 'Zusammen oder getrennt?', a: ['Zusammen oder getrennt'], en: 'Together or separately?' },
      { k: 'listen', de: 'Ich hätte gern einen Kaffee.',
        a: ['Ich hätte gern einen Kaffee', 'Ich haette gern einen Kaffee'], en: "I'd like a coffee." },
      { k: 'match', q: 'At the restaurant', pairs: [
        ['die Speisekarte', 'the menu'], ['die Rechnung', 'the bill'], ['der Nachtisch', 'dessert'], ['das Trinkgeld', 'the tip']
      ] },
      { k: 'match', q: 'Drinks', pairs: [
        ['die Apfelschorle', 'apple juice with sparkling water'], ['stilles Wasser', 'still water'],
        ['mit Kohlensäure', 'sparkling'], ['der Saft', 'juice']
      ] },
      { k: 'choice', q: 'What does "Ich bin satt" mean?', opts: ["I'm sad.", "I'm full.", "I'm ready."], a: 1 },
      { k: 'trans', en: "I don't eat meat.", a: ['Ich esse kein Fleisch.'], hint: 'kein + noun' }
    ]
  });
})();
