/* Unit 12 — The past */
(function () {
  window.DE.registerUnit({
    id: 'a1-12', level: 'A1', num: 12, minutes: 42,
    title: 'What happened yesterday?',
    subtitle: 'The perfect tense · weather · telling someone about your weekend',
    can: [
      'Talk about the past.',
      'Know when to use *haben* and when to use *sein*.',
      'Talk about the weather — the most German small talk there is.',
      'Tell someone what you did at the weekend.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 12 · final unit', title: 'The past tense — and that completes A1',
        lead: 'This is the last unit. After it you can talk about the present *and* the past, which is the threshold where real conversations become possible.',
        points: [
          'The *Perfekt* — the past tense Germans actually speak in.',
          '*haben* or *sein*? The rule is shorter than you think.',
          'Past participles: ge-…-t for regular verbs, ge-…-en for irregular ones.',
          'Weather, holidays, weekends — where you put the past tense to work immediately.'
        ] },

      { t: 'grammar', kicker: 'The core idea', title: 'The perfect tense — two parts, one bracket',
        body: 'German has several past tenses. In *spoken* German people use the Perfekt almost exclusively. It has two parts:\n*haben* or *sein* in slot two — and the *past participle* right at the end of the sentence. Another bracket, just like modal verbs.',
        table: {
          head: ['Slot 1', 'haben/sein', 'Middle', 'End (participle)'],
          rows: [
            ['Ich', '*habe*', 'gestern Fußball', '*gespielt*. — I played football yesterday.'],
            ['Wir', '*sind*', 'nach Berlin', '*gefahren*. — We went to Berlin.'],
            ['Was', '*hast*', 'du am Wochenende', '*gemacht*? — What did you do at the weekend?'],
            ['Gestern', '*bin*', 'ich früh', '*aufgestanden*. — Yesterday I got up early.'],
            ['Ich', '*habe*', 'das nicht', '*verstanden*. — I didn’t understand that.']
          ]
        },
        examples: [
          ['Ich *habe* gut *geschlafen*.', 'I slept well.'],
          ['Wir *sind* ins Kino *gegangen*.', 'We went to the cinema.'],
          ['*Hast* du schon *gegessen*?', 'Have you eaten yet?']
        ],
        note: 'English separates "I played" from "I have played". In conversation German uses the Perfekt for both. One less thing to worry about.',
        noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammar', title: 'haben or sein?',
        body: 'Most verbs take *haben*. Only one clearly defined group takes *sein*:\n1. Verbs of *movement from A to B*: gehen, fahren, fliegen, kommen, laufen, reisen.\n2. Verbs of *changing state*: aufstehen, einschlafen, aufwachen, sterben, werden.\n3. Three loners: *sein*, *bleiben*, *passieren*.\nEverything else: haben.',
        table: {
          head: ['takes sein', 'Example', 'takes haben', 'Example'],
          rows: [
            ['gehen — go', 'Ich *bin* gegangen.', 'machen — do', 'Ich *habe* gemacht.'],
            ['fahren — travel', 'Wir *sind* gefahren.', 'essen — eat', 'Ich *habe* gegessen.'],
            ['kommen — come', 'Er *ist* gekommen.', 'sehen — see', 'Ich *habe* gesehen.'],
            ['fliegen — fly', 'Sie *ist* geflogen.', 'arbeiten — work', 'Ich *habe* gearbeitet.'],
            ['aufstehen — get up', 'Ich *bin* aufgestanden.', 'kaufen — buy', 'Ich *habe* gekauft.'],
            ['bleiben — stay', 'Ich *bin* geblieben.', 'trinken — drink', 'Ich *habe* getrunken.'],
            ['sein — be', 'Ich *bin* gewesen.', 'schlafen — sleep', 'Ich *habe* geschlafen.']
          ]
        },
        examples: [
          ['Ich bin nach Hause gegangen.', 'I went home.'],
          ['Ich habe zu Hause gearbeitet.', 'I worked at home.'],
          ['Wir sind zwei Tage geblieben.', 'We stayed two days.']
        ],
        note: 'Rule of thumb: if you *move somewhere* or *change state* in the process, use *sein*. Otherwise *haben*.' },

      { t: 'grammar', kicker: 'Grammar', title: 'Building the past participle',
        body: 'Three patterns, and you can spot each by how it looks.\n*Regular*: ge + stem + t. machen → ge*mach*t.\n*Irregular*: ge + (often changed) stem + en. trinken → ge*trunk*en.\n*Separable*: the ge- slides into the middle. aufstehen → auf*ge*standen.\n*No ge- at all*: verbs ending in -ieren, and verbs with an inseparable prefix (be-, ver-, er-). studieren → studiert, verstehen → verstanden.',
        table: {
          head: ['Infinitive', 'Participle', 'Pattern'],
          rows: [
            ['machen — to do', '*gemacht*', 'ge-…-t'],
            ['spielen — to play', '*gespielt*', 'ge-…-t'],
            ['arbeiten — to work', '*gearbeitet*', 'ge-…-et'],
            ['essen — to eat', '*gegessen*', 'ge-…-en'],
            ['trinken — to drink', '*getrunken*', 'vowel changes'],
            ['gehen — to go', '*gegangen*', 'vowel changes'],
            ['schreiben — to write', '*geschrieben*', 'vowel changes'],
            ['aufstehen — to get up', '*aufgestanden*', 'ge- in the middle'],
            ['einkaufen — to shop', '*eingekauft*', 'ge- in the middle'],
            ['studieren — to study', '*studiert*', 'no ge-'],
            ['verstehen — to understand', '*verstanden*', 'no ge-'],
            ['bezahlen — to pay', '*bezahlt*', 'no ge-']
          ]
        },
        examples: [
          ['Ich habe das nicht verstanden.', "I didn't understand that."],
          ['Wir haben gestern eingekauft.', 'We went shopping yesterday.'],
          ['Ich bin um sechs aufgestanden.', 'I got up at six.']
        ],
        note: 'The irregular ones have to be learned individually — but there are only about twenty you genuinely need at A1, and they are all in the drill deck.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'The 20 participles that matter most',
        items: [
          ['gemacht (machen)', 'done, made', 'Was hast du gemacht?', 'What did you do?'],
          ['gesagt (sagen)', 'said', 'Was hast du gesagt?', 'What did you say?'],
          ['gearbeitet (arbeiten)', 'worked', 'Ich habe viel gearbeitet.', 'I worked a lot.'],
          ['gekauft (kaufen)', 'bought', 'Ich habe Brot gekauft.', 'I bought bread.'],
          ['gespielt (spielen)', 'played', 'Wir haben gespielt.', 'We played.'],
          ['gegessen (essen)', 'eaten', 'Hast du schon gegessen?', 'Have you eaten?'],
          ['getrunken (trinken)', 'drunk', 'Ich habe Kaffee getrunken.', 'I drank coffee.'],
          ['geschlafen (schlafen)', 'slept', 'Ich habe gut geschlafen.', 'I slept well.'],
          ['gesehen (sehen)', 'seen', 'Ich habe den Film gesehen.', 'I saw the film.'],
          ['gelesen (lesen)', 'read', 'Ich habe das gelesen.', 'I read that.'],
          ['geschrieben (schreiben)', 'written', 'Ich habe dir geschrieben.', 'I wrote to you.'],
          ['gesprochen (sprechen)', 'spoken', 'Wir haben gesprochen.', 'We spoke.'],
          ['genommen (nehmen)', 'taken', 'Ich habe den Bus genommen.', 'I took the bus.'],
          ['gegeben (geben)', 'given', 'Er hat mir das gegeben.', 'He gave me that.'],
          ['gefunden (finden)', 'found', 'Ich habe es gefunden.', 'I found it.'],
          ['verstanden (verstehen)', 'understood', 'Ich habe nichts verstanden.', 'I understood nothing.'],
          ['gegangen (gehen) — with sein', 'gone', 'Ich bin nach Hause gegangen.', 'I went home.'],
          ['gefahren (fahren) — with sein', 'travelled, driven', 'Wir sind nach Köln gefahren.', 'We went to Cologne.'],
          ['gekommen (kommen) — with sein', 'come', 'Sie ist spät gekommen.', 'She came late.'],
          ['geblieben (bleiben) — with sein', 'stayed', 'Ich bin zu Hause geblieben.', 'I stayed home.'],
          ['gewesen (sein) — with sein', 'been', 'Ich bin in Berlin gewesen.', "I've been to Berlin."],
          ['gehabt (haben)', 'had', 'Ich habe keine Zeit gehabt.', "I didn't have time."]
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Weather',
        items: [
          ['das Wetter', 'weather', 'Wie ist das Wetter?', "What's the weather like?"],
          ['die Sonne', 'sun', 'Die Sonne scheint.', 'The sun is shining.'],
          ['sonnig', 'sunny', 'Heute ist es sonnig.', "It's sunny today."],
          ['der Regen', 'rain', 'Der Regen hört nicht auf.', "The rain won't stop."],
          ['regnen', 'to rain', 'Es regnet.', "It's raining."],
          ['der Schnee', 'snow', 'Es liegt Schnee.', "There's snow on the ground."],
          ['schneien', 'to snow', 'Es schneit.', "It's snowing."],
          ['der Wind', 'wind', 'Der Wind ist stark.', 'The wind is strong.'],
          ['die Wolke', 'cloud', 'Viele Wolken heute.', 'Lots of clouds today.'],
          ['bewölkt', 'cloudy', 'Morgen wird es bewölkt.', 'Tomorrow will be cloudy.'],
          ['heiß', 'hot', 'Es ist heiß.', "It's hot."],
          ['kalt', 'cold', 'Zieh dich warm an, es ist kalt.', "Dress warm, it's cold."],
          ['der Grad', 'degree', 'Zehn Grad.', 'Ten degrees.'],
          ['der Frühling', 'spring', 'Im Frühling wird es schön.', 'In spring it gets nice.'],
          ['der Sommer', 'summer', 'Im Sommer fahren wir weg.', 'In summer we go away.'],
          ['der Herbst', 'autumn', 'Der Herbst ist grau.', 'Autumn is grey.'],
          ['der Winter', 'winter', 'Der Winter ist lang.', 'The winter is long.']
        ],
        note: 'Weather is *the* small talk topic in Germany. "Schönes Wetter heute, ne?" is a complete, socially acceptable way to start a conversation.' },

      { t: 'dialog', kicker: 'Dialogue', title: 'How was your weekend?',
        setting: 'Monday morning. Two colleagues.',
        lines: [
          ['Nina', 'Na, wie war dein Wochenende?', 'So, how was your weekend?'],
          ['Emerson', 'Ganz gut. Ich war bei Freunden in Hamburg.', "Pretty good. I was at friends' in Hamburg."],
          ['Nina', 'Oh, schön! Wie bist du hingefahren?', 'Oh, nice! How did you get there?'],
          ['Emerson', 'Mit dem Zug. Hat vier Stunden gedauert.', 'By train. It took four hours.'],
          ['Nina', 'Und was habt ihr gemacht?', 'And what did you guys do?'],
          ['Emerson', 'Am Samstag sind wir in die Stadt gegangen, und abends haben wir gekocht.',
            'On Saturday we went into town, and in the evening we cooked.'],
          ['Nina', 'Und das Wetter?', 'And the weather?'],
          ['Emerson', 'Furchtbar. Es hat die ganze Zeit geregnet.', 'Terrible. It rained the whole time.'],
          ['Nina', 'Typisch Hamburg.', 'Typical Hamburg.'],
          ['Emerson', 'Am Sonntag bin ich dann ziemlich spät aufgestanden. Und du?',
            'On Sunday I got up pretty late then. And you?'],
          ['Nina', 'Nichts gemacht. War auch mal schön.', 'Did nothing. That was nice too for once.']
        ],
        note: 'Watch the switch: *bin gegangen*, *bin aufgestanden* (movement → sein) against *haben gekocht*, *hat geregnet* (everything else → haben).' },

      { t: 'street', title: 'Talking about your weekend',
        items: [
          ['Was ging ab?', 'What went down?', 'A casual way to ask about the weekend.'],
          ['War ganz chillig', 'It was pretty chill', '*chillig* — a fully working German adjective.'],
          ['Ich hab nur rumgehangen', 'I just hung around', '*rumhängen* = herumhängen, separable.'],
          ['War voll geil', 'It was awesome', 'Among friends. Not in a job interview.'],
          ['Hab gar nix gemacht', "Didn't do anything", '*gar nix* = absolutely nothing.'],
          ['Wir waren feiern', 'We went partying', '*feiern gehen* = to go out partying.'],
          ['Ich hab verpennt', 'I overslept', 'Features in every other Monday story.'],
          ['War echt cringe', 'It was really cringe', 'When something was embarrassing.'],
          ['Kurz gesagt: Crashout', 'Long story short: meltdown', 'The 2026 way to sum up a bad weekend.']
        ] },

      { t: 'pattern', kicker: 'Sentence builder', title: 'Yesterday I …',
        frame: 'Gestern habe ich {}.', enFrame: 'Yesterday I {}.',
        slotLabel: 'participle',
        swaps: [
          ['gearbeitet', 'worked'], ['viel geschlafen', 'slept a lot'], ['einen Film gesehen', 'watched a film'],
          ['Pizza gegessen', 'ate pizza'], ['nichts gemacht', 'did nothing'], ['mit Freunden gesprochen', 'talked with friends']
        ],
        note: 'With *sein* verbs it becomes "Gestern *bin* ich …": gegangen, gefahren, aufgestanden.' },

      { t: 'drill', kicker: 'Try it now', title: 'Perfect tense round',
        ex: [
          { k: 'fill', q: 'Ich ___ gestern gearbeitet.', a: ['habe', 'hab'], en: 'I worked yesterday.',
            why: '*arbeiten* is not movement → haben.' },
          { k: 'fill', q: 'Wir ___ nach Berlin gefahren.', a: ['sind'], en: 'We went to Berlin.',
            why: 'Movement from A to B → *sein*.' },
          { k: 'fill', q: 'Ich ___ um sechs aufgestanden.', a: ['bin'], en: 'I got up at six.',
            why: 'Change of state → *sein*.' },
          { k: 'choice', q: 'What is the participle of "trinken"?',
            opts: ['getrinkt', 'getrunken', 'trinkt'], a: 1, why: 'Irregular: the vowel changes and the ending is -en.' },
          { k: 'order', en: 'What did you do at the weekend?',
            words: ['Was', 'hast', 'du', 'am', 'Wochenende', 'gemacht'], a: 'Was hast du am Wochenende gemacht' }
        ] },

      { t: 'culture', kicker: 'Culture', title: 'Why everyone talks about the weather',
        body: 'Small talk about personal matters is less usual in Germany than in the US. Asking a stranger how they are is not a formality — it is taken as a real question, and some people will answer it honestly and at length.\nThe weather, by contrast, is neutral, shared, and commits you to nothing. Which is why it is the default topic in the lift, at the bus stop and at the bakery.\nSecond most important topic: Deutsche Bahn and its delays. That will get you a conversation with anybody.',
        note: 'Two sentences that always work: "Schönes Wetter heute, ne?" and "Die Bahn mal wieder…"' },

      { t: 'recap', kicker: 'A1 complete', title: "You've finished A1. Now what?",
        points: [
          'Perfekt = *haben/sein* in slot two + *past participle* at the end.',
          '*sein* for movement and change of state, *haben* for everything else.',
          'ge-…-t regular · ge-…-en irregular · no ge- with -ieren, be-, ver-, er-.',
          'Separable verbs push the ge- into the middle: auf*ge*standen.',
          'Weather is small talk topic number one.',
          'Next step: A2 — subordinate clauses with *weil* and *dass*, giving reasons, phone calls.'
        ],
        note: 'Go to the drill now and clear the cards that are due. From here on, review matters more than new material.' }
    ],
    quiz: [
      { k: 'fill', q: 'Ich ___ gestern Fußball gespielt.', a: ['habe', 'hab'], en: 'I played football yesterday.' },
      { k: 'fill', q: 'Wir ___ ins Kino gegangen.', a: ['sind'], en: 'We went to the cinema.' },
      { k: 'fill', q: 'Sie ___ nach Italien geflogen.', a: ['ist'], en: 'She flew to Italy.' },
      { k: 'fill', q: 'Ich ___ das nicht verstanden.', a: ['habe', 'hab'], en: "I didn't understand that." },
      { k: 'choice', q: 'Participle of "essen"?', opts: ['geesst', 'gegessen', 'geessen'], a: 1 },
      { k: 'choice', q: 'Participle of "studieren"?', opts: ['gestudiert', 'studiert', 'studieren'], a: 1,
        why: 'Verbs ending in *-ieren* take no ge-.' },
      { k: 'choice', q: 'Participle of "aufstehen"?', opts: ['geaufstanden', 'aufgestanden', 'aufstehen'], a: 1,
        why: 'With separable verbs the ge- slides into the middle.' },
      { k: 'choice', q: 'Why "Ich bin geblieben" and not "habe"?',
        opts: ['Because it is movement.', 'Because bleiben is one of the sein exceptions.', "It's wrong."], a: 1 },
      { k: 'order', en: 'I got up at six yesterday.', words: ['Ich', 'bin', 'gestern', 'um', 'sechs', 'aufgestanden'],
        a: 'Ich bin gestern um sechs aufgestanden' },
      { k: 'order', en: 'Have you eaten yet?', words: ['Hast', 'du', 'schon', 'gegessen'], a: 'Hast du schon gegessen' },
      { k: 'order', en: 'It rained the whole time.', words: ['Es', 'hat', 'die', 'ganze', 'Zeit', 'geregnet'],
        a: 'Es hat die ganze Zeit geregnet' },
      { k: 'listen', de: 'Was hast du am Wochenende gemacht?', a: ['Was hast du am Wochenende gemacht'],
        en: 'What did you do at the weekend?' },
      { k: 'listen', de: 'Ich bin nach Hause gegangen.', a: ['Ich bin nach Hause gegangen'], en: 'I went home.' },
      { k: 'match', q: 'Participles', pairs: [
        ['getrunken', 'drunk'], ['gefahren', 'travelled'], ['geschrieben', 'written'], ['genommen', 'taken']
      ] },
      { k: 'match', q: 'Weather', pairs: [
        ['Es regnet.', "It's raining."], ['Es schneit.', "It's snowing."],
        ['bewölkt', 'cloudy'], ['Die Sonne scheint.', 'The sun is shining.']
      ] },
      { k: 'trans', en: 'I slept well.', a: ['Ich habe gut geschlafen.', 'Ich hab gut geschlafen.'],
        hint: 'haben + participle at the end' }
    ]
  });
})();
