/* Einheit 6 — Essen und Trinken */
(function () {
  window.DE.registerUnit({
    id: 'a1-06', level: 'A1', num: 6, minutes: 38,
    title: 'Essen und Trinken',
    subtitle: 'Im Restaurant, im Café, Hunger · möchten und mögen · Mengen',
    can: [
      'Du kannst im Restaurant bestellen und bezahlen.',
      'Du kannst sagen, was du magst und was du nicht magst.',
      'Du kannst höflich etwas wollen: *ich möchte* statt *ich will*.',
      'Du verstehst die Standardfragen der Kellner.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 6', title: 'Die erste Situation, die du überlebst',
        lead: 'Essen bestellen ist die Situation, in der du am schnellsten merkst, dass dein Deutsch funktioniert. Kurze Sätze, klarer Ablauf, sofortiges Feedback.',
        points: [
          '*Ich möchte …* — der höflichste und nützlichste Satzanfang im ganzen A1.',
          '*mögen* für Geschmack, *möchten* für Bestellungen. Nicht dasselbe.',
          'Der komplette Ablauf im Restaurant, in der Reihenfolge, in der er wirklich passiert.',
          'Getrennt oder zusammen zahlen — die Frage, die jeden Ausländer überrascht.'
        ] },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Essen',
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

      { t: 'vocab', kicker: 'Wortschatz', title: 'Trinken',
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
        note: '*Apfelschorle* ist das deutscheste Getränk überhaupt. Bestell eine — niemand wird dich für einen Touristen halten.' },

      { t: 'grammar', kicker: 'Grammatik', title: 'möchten — dein höflichstes Werkzeug',
        body: '*Ich möchte* heißt „I would like“. Es ist höflich, universell und funktioniert in jeder Situation: Restaurant, Laden, Amt, Arzttermin.\nDas Gegenstück *ich will* heißt „I want“ und klingt im Deutschen härter als im Englischen — bei Fremden fast unhöflich. Benutz *möchte*.',
        table: {
          head: ['Person', 'möchten', 'Beispiel'],
          rows: [
            ['ich', '*möchte*', 'Ich möchte einen Kaffee.'],
            ['du', '*möchtest*', 'Möchtest du auch was?'],
            ['er/sie/es', '*möchte*', 'Sie möchte die Suppe.'],
            ['wir', '*möchten*', 'Wir möchten bestellen.'],
            ['ihr', '*möchtet*', 'Möchtet ihr Nachtisch?'],
            ['sie/Sie', '*möchten*', 'Was möchten Sie trinken?']
          ]
        },
        examples: [
          ['Ich möchte bitte die Rechnung.', "I'd like the bill, please."],
          ['Wir möchten bestellen.', "We'd like to order."],
          ['Ich hätte gern einen Kaffee.', "I'd like a coffee. (even softer)"]
        ],
        note: '*ich* und *er/sie/es* sind bei möchten identisch: beide *möchte*. Das ist bei allen Modalverben so.', noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammatik', title: 'mögen vs. möchten — der Unterschied zählt',
        body: '*mögen* = etwas grundsätzlich gern haben. „Ich mag Käse“ heißt: Käse ist generell gut für mich.\n*möchten* = etwas jetzt gerade haben wollen. „Ich möchte Käse“ heißt: gib mir bitte Käse.\nBestellst du mit *mögen*, sagst du dem Kellner nur, was du von Käse hältst. Er bringt nichts.',
        table: {
          head: ['Satz', 'Bedeutung'],
          rows: [
            ['Ich *mag* Kaffee.', 'I like coffee (in general).'],
            ['Ich *möchte* einen Kaffee.', "I'd like a coffee (now, bring it)."],
            ['Ich *mag* kein Fleisch.', "I don't like meat."],
            ['Ich *esse* kein Fleisch.', "I don't eat meat (stronger, for allergies/diets)."],
            ['Magst du Sushi?', 'Do you like sushi?'],
            ['Möchtest du Sushi?', 'Do you want sushi (right now)?']
          ]
        },
        examples: [
          ['Ich mag das nicht so gern.', "I don't really like that."],
          ['Ich esse kein Schweinefleisch.', "I don't eat pork."],
          ['Ich bin Vegetarier / Vegetarierin.', "I'm vegetarian."]
        ],
        note: 'Für Allergien nimm *Ich vertrage kein …* oder *Ich habe eine Allergie gegen …* — das wird ernst genommen.' },

      { t: 'dialog', kicker: 'Dialog', title: 'Im Restaurant, kompletter Ablauf',
        setting: 'Ein normales Lokal. Der Kellner siezt, du siezt zurück.',
        lines: [
          ['Kellner', 'Guten Abend. Haben Sie schon gewählt?', 'Good evening. Have you decided?'],
          ['Emerson', 'Noch nicht ganz. Einen Moment bitte.', 'Not quite. One moment please.'],
          ['Kellner', 'Kein Problem. Möchten Sie schon was trinken?', 'No problem. Would you like a drink already?'],
          ['Emerson', 'Ja, ein stilles Wasser bitte.', 'Yes, a still water please.'],
          ['Kellner', 'Gerne. — So, was darf es sein?', 'Sure. — So, what would you like?'],
          ['Emerson', 'Ich nehme die Suppe und danach die Nudeln.', "I'll take the soup and then the pasta."],
          ['Kellner', 'Sehr gern. Sonst noch etwas?', 'Very good. Anything else?'],
          ['Emerson', 'Nein danke, das ist alles.', 'No thanks, that’s all.'],
          ['Kellner', '(später) Hat es geschmeckt?', '(later) Did you enjoy it?'],
          ['Emerson', 'Sehr gut, danke. Ich möchte bitte zahlen.', 'Very good, thanks. I’d like to pay.'],
          ['Kellner', 'Zusammen oder getrennt?', 'Together or separately?'],
          ['Emerson', 'Zusammen. Neunzehn fünfzig? Machen Sie einundzwanzig.', 'Together. Nineteen fifty? Make it twenty-one.']
        ],
        note: 'Der letzte Satz ist die deutsche Art zu tippen: Du nennst den *Gesamtbetrag inklusive Trinkgeld*, nicht den Aufschlag.' },

      { t: 'culture', kicker: 'Kultur', title: 'Bezahlen ohne Blamage',
        body: 'Vier Dinge, die Deutschland anders macht als die USA:\n*Trinkgeld*: 5–10 %, aufgerundet. Kein Zwang, kein Prozentrechner. Du sagst beim Zahlen den Endbetrag: „Machen Sie zwanzig.“ Geld auf dem Tisch liegen lassen und gehen ist unüblich.\n*Getrennt zahlen*: Völlig normal, auch in einer Gruppe von zehn. Der Kellner rechnet für jeden einzeln ab. Niemand findet das anstrengend.\n*Wasser ist nie gratis.* Leitungswasser musst du extra erfragen, und manche Lokale bringen es nicht.\n*Bar zahlen*: Viele kleine Läden, Bäckereien und Kneipen nehmen immer noch nur Bargeld. „Nur Barzahlung“ heißt: Automat suchen.',
        note: 'Der Satz, der dich rettet: „Kann ich mit Karte zahlen?“' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Im Lokal',
        items: [
          ['die Speisekarte', 'menu', 'Die Karte, bitte.', 'The menu, please.'],
          ['bestellen', 'to order', 'Wir möchten bestellen.', 'We’d like to order.'],
          ['die Rechnung', 'bill, check', 'Die Rechnung, bitte.', 'The bill, please.'],
          ['zahlen', 'to pay', 'Ich möchte zahlen.', 'I’d like to pay.'],
          ['zusammen', 'together', 'Wir zahlen zusammen.', 'We’re paying together.'],
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
        note: 'Hunger und Durst *hat* man im Deutschen, man *ist* sie nicht: „Ich habe Hunger“, nicht „ich bin hungrig“ (das geht auch, klingt aber steifer).' },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Ich möchte bitte …',
        frame: 'Ich möchte bitte {}.', enFrame: "I'd like {}, please.",
        slotLabel: 'Bestellung',
        swaps: [
          ['einen Kaffee', 'a coffee'], ['ein Wasser', 'a water'], ['die Rechnung', 'the bill'],
          ['ein Bier', 'a beer'], ['die Speisekarte', 'the menu'], ['ein Stück Kuchen', 'a slice of cake']
        ],
        note: 'Achte auf den Akkusativ: *einen* Kaffee (der), *ein* Wasser (das), *die* Rechnung (die).' },

      { t: 'street', title: 'Essen, wie Leute drüber reden',
        lead: 'Im Video geht es selten um „das Hauptgericht“.',
        items: [
          ['Hast du Hunger?', 'You hungry?', 'Die normale Frage. Nicht „bist du hungrig“.'],
          ['Ich hab Kohldampf', "I'm starving", 'Umgangssprachlich, etwas älter, aber sehr verständlich.'],
          ['Das schmeckt bombe', 'That tastes amazing', '*bombe* als Adjektiv — reine Umgangssprache.'],
          ['Bock auf Pizza?', 'Up for pizza?', 'Der häufigste Vorschlag unter Freunden überhaupt.'],
          ['Ich bin pappsatt', "I'm stuffed", 'Verstärkung von *satt*.'],
          ['Lass was bestellen', "Let's order something", '*lass* + Infinitiv = let’s. Sehr häufig.'],
          ['Voll lecker', 'So good', '*voll* als Verstärker, jugendsprachlich.'],
          ['Das geht gar nicht', "That's a no-go", 'Auch für Essen: „Ananas auf Pizza geht gar nicht.“']
        ] },

      { t: 'drill', kicker: 'Sofort üben', title: 'Bestellen',
        ex: [
          { k: 'choice', q: 'Du willst einen Kaffee bestellen. Was sagst du?',
            opts: ['Ich mag Kaffee.', 'Ich möchte einen Kaffee, bitte.', 'Ich will Kaffee.'], a: 1,
            why: '*mögen* = Geschmack, *möchten* = Bestellung. *will* klingt bei Fremden grob.' },
          { k: 'fill', q: 'Ich ___ bitte die Rechnung.', a: ['möchte', 'moechte'], en: "I'd like the bill, please." },
          { k: 'fill', q: 'Ich nehme ___ Salat. (the)', a: ['den'], en: "I'll take the salad.",
            why: '*der* Salat → Akkusativ *den* Salat.' },
          { k: 'choice', q: 'Der Kellner fragt „Zusammen oder getrennt?“. Was will er wissen?',
            opts: ['Ob ihr zusammen sitzt.', 'Ob ihr eine Rechnung oder mehrere wollt.', 'Ob ihr noch etwas bestellt.'], a: 1 },
          { k: 'trans', en: "I'm hungry.", a: ['Ich habe Hunger.', 'Ich hab Hunger.'], hint: 'mit haben' }
        ] },

      { t: 'recap', kicker: 'Einheit 6', title: 'Was jetzt sitzen sollte',
        points: [
          '*Ich möchte …* ist dein Standardsatz für alles, was du haben willst.',
          '*mögen* = Geschmack. *möchten* = Bestellung. Nie verwechseln.',
          'Bei Modalverben sind *ich* und *er/sie/es* gleich: ich möchte, er möchte.',
          'Hunger und Durst *hat* man.',
          '„Zusammen oder getrennt?“ — darauf musst du antworten können.',
          'Trinkgeld: aufrunden und den *Endbetrag* nennen.'
        ] }
    ],
    quiz: [
      { k: 'choice', q: 'Welcher Satz bestellt tatsächlich etwas?',
        opts: ['Ich mag Tee.', 'Ich möchte einen Tee.', 'Tee ist gut.'], a: 1 },
      { k: 'fill', q: '___ du Sushi? (do you like)', a: ['magst'], en: 'Do you like sushi?' },
      { k: 'fill', q: 'Wir ___ bestellen.', a: ['möchten', 'moechten'], en: "We'd like to order." },
      { k: 'fill', q: 'Ich habe ___. (thirst)', a: ['Durst', 'durst'], en: "I'm thirsty." },
      { k: 'fill', q: 'Ich nehme ___ Suppe. (the)', a: ['die'], en: "I'll take the soup.", why: '*die* Suppe bleibt im Akkusativ *die*.' },
      { k: 'order', en: "I'd like to pay, please.", words: ['Ich', 'möchte', 'bitte', 'zahlen'], a: 'Ich möchte bitte zahlen' },
      { k: 'order', en: 'A still water, please.', words: ['Ein', 'stilles', 'Wasser', 'bitte'], a: 'Ein stilles Wasser bitte' },
      { k: 'listen', de: 'Was möchten Sie trinken?', a: ['Was möchten Sie trinken'], en: 'What would you like to drink?' },
      { k: 'listen', de: 'Zusammen oder getrennt?', a: ['Zusammen oder getrennt'], en: 'Together or separately?' },
      { k: 'listen', de: 'Ich hätte gern einen Kaffee.', a: ['Ich hätte gern einen Kaffee', 'Ich haette gern einen Kaffee'], en: "I'd like a coffee." },
      { k: 'match', q: 'Im Restaurant', pairs: [
        ['die Speisekarte', 'the menu'], ['die Rechnung', 'the bill'], ['der Nachtisch', 'dessert'], ['das Trinkgeld', 'the tip']
      ] },
      { k: 'match', q: 'Getränke', pairs: [
        ['die Apfelschorle', 'apple juice with sparkling water'], ['stilles Wasser', 'still water'],
        ['mit Kohlensäure', 'sparkling'], ['der Saft', 'juice']
      ] },
      { k: 'choice', q: 'Was heißt „Ich bin satt“?', opts: ["I'm sad.", "I'm full.", "I'm ready."], a: 1 },
      { k: 'trans', en: "I don't eat meat.", a: ['Ich esse kein Fleisch.'], hint: 'kein + Substantiv' }
    ]
  });
})();
