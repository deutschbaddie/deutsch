/* Unit 9 — Getting around */
(function () {
  window.DE.registerUnit({
    id: 'a1-09', level: 'A1', num: 9, minutes: 37,
    title: 'Town, directions, trains',
    subtitle: 'Asking the way · the imperative · zu, nach and in',
    can: [
      'Ask for directions and understand the answer.',
      'Use the imperative without sounding rude.',
      'Cope with trains, buses and ticket machines.',
      'Tell *zu*, *nach* and *in* apart.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 9', title: 'Not getting lost',
        lead: 'Asking the way is easy. Understanding the answer is the hard part — so that is what we drill.',
        points: [
          'Places in a town.',
          'Understanding directions: left, right, straight on, as far as the lights.',
          'The *imperative* — giving and receiving instructions.',
          '*zu* vs. *nach* vs. *in* — three German words for "to".'
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Around town',
        items: [
          ['die Stadt', 'city, town', 'Die Stadt ist groß.', 'The city is big.'],
          ['die Straße', 'street', 'In welcher Straße?', 'On which street?'],
          ['der Platz', 'square', 'Am Marktplatz.', 'At the market square.'],
          ['der Bahnhof', 'train station', 'Zum Bahnhof, bitte.', 'To the station, please.'],
          ['die Haltestelle', 'bus / tram stop', 'Die nächste Haltestelle.', 'The next stop.'],
          ['die Apotheke', 'pharmacy', 'Wo ist die nächste Apotheke?', "Where's the nearest pharmacy?"],
          ['das Krankenhaus', 'hospital', 'Er ist im Krankenhaus.', "He's in hospital."],
          ['die Post', 'post office', 'Die Post macht um sechs zu.', 'The post office closes at six.'],
          ['die Bank', 'bank', 'Gibt es hier eine Bank?', 'Is there a bank here?'],
          ['das Rathaus', 'town hall', 'Das Rathaus ist da vorne.', 'The town hall is up ahead.'],
          ['die Kirche', 'church', 'Neben der Kirche.', 'Next to the church.'],
          ['der Park', 'park', 'Im Park ist es schön.', "It's nice in the park."],
          ['das Kino', 'cinema', 'Gehen wir ins Kino?', 'Shall we go to the cinema?'],
          ['die Schule', 'school', 'Ich gehe zur Schule.', 'I go to school.'],
          ['die Ampel', 'traffic light', 'An der Ampel links.', 'Left at the traffic light.'],
          ['die Ecke', 'corner', 'An der Ecke.', 'At the corner.'],
          ['die Brücke', 'bridge', 'Über die Brücke.', 'Across the bridge.']
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Directions',
        items: [
          ['links', 'left', 'Geh links.', 'Go left.'],
          ['rechts', 'right', 'Dann rechts.', 'Then right.'],
          ['geradeaus', 'straight ahead', 'Immer geradeaus.', 'Keep going straight.'],
          ['abbiegen', 'to turn (a corner)', 'Bieg links ab.', 'Turn left.'],
          ['weitergehen', 'to keep walking', 'Geh einfach weiter.', 'Just keep going.'],
          ['die Kreuzung', 'intersection', 'An der Kreuzung rechts.', 'Right at the intersection.'],
          ['gegenüber', 'opposite', 'Gegenüber vom Bahnhof.', 'Opposite the station.'],
          ['in der Nähe', 'nearby', 'Ist das in der Nähe?', 'Is that nearby?'],
          ['weit', 'far', 'Ist es weit?', 'Is it far?'],
          ['zu Fuß', 'on foot', 'Zehn Minuten zu Fuß.', 'Ten minutes on foot.'],
          ['die Richtung', 'direction', 'In welche Richtung?', 'In which direction?'],
          ['der Weg', 'way, path', 'Ich kenne den Weg nicht.', "I don't know the way."],
          ['sich verlaufen', 'to get lost (on foot)', 'Ich habe mich verlaufen.', "I've got lost."]
        ] },

      { t: 'grammar', kicker: 'Grammar', title: 'The imperative',
        body: 'Giving instructions. Three forms, depending on who you are talking to.\n*du*: the verb stem, usually with no ending. geh! komm! nimm!\n*ihr*: same as the normal ihr-form. geht! kommt!\n*Sie*: verb + Sie. Gehen Sie! Kommen Sie!',
        table: {
          head: ['Verb', 'du', 'ihr', 'Sie'],
          rows: [
            ['gehen — to go', '*Geh!*', '*Geht!*', '*Gehen Sie!*'],
            ['kommen — to come', '*Komm!*', '*Kommt!*', '*Kommen Sie!*'],
            ['nehmen — to take', '*Nimm!*', '*Nehmt!*', '*Nehmen Sie!*'],
            ['warten — to wait', '*Warte!*', '*Wartet!*', '*Warten Sie!*'],
            ['abbiegen — to turn', '*Bieg ab!*', '*Biegt ab!*', '*Biegen Sie ab!*'],
            ['sein — to be', '*Sei!*', '*Seid!*', '*Seien Sie!*']
          ]
        },
        examples: [
          ['Geh an der Ampel links.', 'Turn left at the traffic light.'],
          ['Nehmen Sie die zweite Straße rechts.', 'Take the second street on the right.'],
          ['Warte mal kurz!', 'Hang on a second!']
        ],
        note: 'Without *mal* or *bitte* a German imperative lands hard. With *mal* an order becomes a request: "Komm mal her."',
        noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammar', title: 'zu, nach, in — three words for "to"',
        body: 'English has one word. German has three, and they are not interchangeable.\n*zu* + dative — to people, buildings, institutions. The default.\n*nach* — to cities, to countries with no article, and to compass directions. Plus *nach Hause* (home).\n*in* + accusative — when you go *inside* something: ins Kino, in die Stadt.',
        table: {
          head: ['Destination', 'Use', 'Example'],
          rows: [
            ['a person', '*zu*', 'Ich gehe zu Anna.'],
            ['doctor, station', '*zu*', 'zum Arzt, zum Bahnhof'],
            ['school, work', '*zu*', 'zur Schule, zur Arbeit'],
            ['a city / country', '*nach*', 'nach Berlin, nach Italien'],
            ['your own home', '*nach Hause*', 'Ich gehe nach Hause.'],
            ['going inside', '*in* + acc.', 'ins Kino, in die Stadt'],
            ['countries with an article', '*in* + acc.', 'in die Türkei, in die Schweiz']
          ]
        },
        examples: [
          ['Ich fahre nach Berlin.', "I'm going to Berlin."],
          ['Ich gehe zum Arzt.', "I'm going to the doctor."],
          ['Wir gehen ins Kino.', "We're going to the cinema."],
          ['Ich will nach Hause.', 'I want to go home.']
        ],
        note: 'Contractions: zu dem → *zum*, zu der → *zur*, in das → *ins*. Everyone uses these.' },

      { t: 'dialog', kicker: 'Dialogue', title: 'Asking the way',
        setting: 'On the street, a stranger. So: *Sie*.',
        lines: [
          ['Emerson', 'Entschuldigung, wie komme ich zum Bahnhof?', 'Excuse me, how do I get to the station?'],
          ['Passantin', 'Zum Bahnhof? Gehen Sie hier geradeaus bis zur Ampel.', 'To the station? Go straight ahead here as far as the traffic light.'],
          ['Emerson', 'Okay, bis zur Ampel.', 'Okay, to the traffic light.'],
          ['Passantin', 'Dann links, und an der zweiten Kreuzung rechts.', 'Then left, and right at the second intersection.'],
          ['Emerson', 'Links, dann zweite Kreuzung rechts. Ist das weit?', 'Left, then second intersection right. Is it far?'],
          ['Passantin', 'Nein, fünf Minuten zu Fuß.', 'No, five minutes on foot.'],
          ['Emerson', 'Super, vielen Dank!', 'Great, thank you very much!'],
          ['Passantin', 'Gern. — Ach, und der Bahnhof ist gegenüber vom Rathaus.', "You're welcome. — Oh, and the station is opposite the town hall."]
        ],
        note: 'The trick when asking the way: *repeat the answer back*. It buys you time, and they correct you if you got it wrong.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Trains, buses, tickets',
        items: [
          ['der Zug', 'train', 'Der Zug hat Verspätung.', 'The train is delayed.'],
          ['die Bahn', 'the railway / the train', 'Ich fahre mit der Bahn.', "I'm going by train."],
          ['der Bus', 'bus', 'Der Bus kommt gleich.', 'The bus is coming.'],
          ['die U-Bahn', 'underground, subway', 'Nimm die U2.', 'Take the U2.'],
          ['die S-Bahn', 'urban rail', 'Die S-Bahn fährt alle zehn Minuten.', 'The S-Bahn runs every ten minutes.'],
          ['die Straßenbahn', 'tram', 'Die Straßenbahn hält hier.', 'The tram stops here.'],
          ['das Ticket / die Fahrkarte', 'ticket', 'Eine Fahrkarte nach Köln.', 'A ticket to Cologne.'],
          ['der Fahrplan', 'timetable', 'Schau auf den Fahrplan.', 'Check the timetable.'],
          ['das Gleis', 'platform, track', 'Gleis sieben.', 'Platform seven.'],
          ['umsteigen', 'to change (trains)', 'Du musst in Hannover umsteigen.', 'You have to change in Hanover.'],
          ['einsteigen', 'to get on', 'Bitte einsteigen!', 'Please board!'],
          ['aussteigen', 'to get off', 'Wo muss ich aussteigen?', 'Where do I get off?'],
          ['die Verspätung', 'delay', 'Zwanzig Minuten Verspätung.', 'Twenty minutes delay.'],
          ['fahren', 'to go (by vehicle), to drive', 'Ich fahre mit dem Bus.', "I'm going by bus."],
          ['abfahren', 'to depart', 'Der Zug fährt um zehn ab.', 'The train departs at ten.']
        ],
        note: 'Travelling by something takes *mit* + dative: mit *dem* Bus, mit *der* Bahn, mit *dem* Auto, mit *dem* Fahrrad. The exception is *zu Fuß*.' },

      { t: 'street', title: 'Out and about, as people say it',
        items: [
          ["Wo geht's hier zum Bahnhof?", 'Which way to the station?', 'More relaxed than "wie komme ich zu…".'],
          ['Ich steh im Stau', "I'm stuck in traffic", 'The standard reason for being late.'],
          ['Die Bahn ist mal wieder zu spät', 'The train is late again', '*mal wieder* = as usual. A national pastime.'],
          ['Ich bin gleich da', "I'm nearly there", 'Highly elastic.'],
          ['Ich hab die Bahn verpasst', 'I missed the train', '*verpassen* = to miss.'],
          ['Schwarzfahren', 'riding without a ticket', 'A €60 fine. Inspectors turn up without warning.'],
          ["Komm, wir laufen", "Come on, let's walk", '*laufen* in speech usually means "walk", not "run".'],
          ['Das ist um die Ecke', "That's just around the corner", 'Very common for "really close".']
        ],
        note: 'Ticket inspectors on the U-Bahn are in plain clothes. "I didn’t know I needed a ticket" does not work.',
        noteKind: 'warn' },

      { t: 'pattern', kicker: 'Sentence builder', title: 'How do I get …?',
        frame: 'Wie komme ich {}?', enFrame: 'How do I get {}?',
        slotLabel: 'destination',
        swaps: [
          ['zum Bahnhof', 'to the station'], ['zur Post', 'to the post office'], ['ins Zentrum', 'to the centre'],
          ['nach Hause', 'home'], ['zum Flughafen', 'to the airport'], ['in die Stadt', 'into town']
        ],
        note: '*zum* (zu dem) for der/das words, *zur* (zu der) for die words, *nach* for cities and for "Hause".' },

      { t: 'drill', kicker: 'Try it now', title: 'Finding your way',
        ex: [
          { k: 'fill', q: 'Ich fahre ___ Berlin.', a: ['nach'], en: "I'm going to Berlin.",
            why: 'Cities and countries without an article take *nach*.' },
          { k: 'fill', q: 'Ich gehe ___ Arzt. (to the)', a: ['zum'], en: "I'm going to the doctor.",
            why: 'zu dem Arzt → *zum* Arzt.' },
          { k: 'fill', q: 'Wir gehen ___ Kino. (into the)', a: ['ins'], en: "We're going to the cinema.",
            why: 'in das Kino → *ins* Kino. Movement inside → accusative.' },
          { k: 'choice', q: 'How do you politely say "turn left" to a stranger?',
            opts: ['Geh links!', 'Biegen Sie links ab.', 'Links!'], a: 1 },
          { k: 'order', en: 'How do I get to the station?', words: ['Wie', 'komme', 'ich', 'zum', 'Bahnhof'],
            a: 'Wie komme ich zum Bahnhof' }
        ] },

      { t: 'recap', kicker: 'Unit 9', title: 'What should stick now',
        points: [
          'du-imperative: the verb stem. *Geh! Komm! Nimm!*',
          '*mal* and *bitte* turn an order into a request.',
          '*zu* for people and buildings · *nach* for cities and *nach Hause* · *in* when you go inside.',
          'zu dem → *zum*, zu der → *zur*, in das → *ins*.',
          'Travel with *mit* + dative: mit *dem* Bus. Except *zu Fuß*.',
          'When asking the way, repeat the answer out loud.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Ich fahre ___ Italien.', a: ['nach'], en: "I'm going to Italy." },
      { k: 'fill', q: 'Ich gehe ___ Schule. (to)', a: ['zur'], en: 'I go to school.', why: 'zu der Schule → *zur*.' },
      { k: 'fill', q: 'Ich will ___ Hause.', a: ['nach'], en: 'I want to go home.' },
      { k: 'fill', q: 'Ich fahre mit ___ Bus.', a: ['dem'], en: "I'm going by bus.", why: '*mit* + dative: mit dem Bus.' },
      { k: 'choice', q: 'Which is the du-imperative of "nehmen"?',
        opts: ['Nehm!', 'Nimm!', 'Nehme!'], a: 1, why: 'nehmen changes its vowel: du nimmst → *Nimm!*' },
      { k: 'choice', q: 'What does "umsteigen" mean?',
        opts: ['To get off.', 'To change trains.', 'To buy a ticket.'], a: 1 },
      { k: 'choice', q: 'What does "Schwarzfahren" mean?',
        opts: ['Travelling at night.', 'Travelling without a ticket.', 'Driving fast.'], a: 1 },
      { k: 'order', en: 'Go straight ahead to the traffic light.',
        words: ['Gehen', 'Sie', 'geradeaus', 'bis', 'zur', 'Ampel'], a: 'Gehen Sie geradeaus bis zur Ampel' },
      { k: 'order', en: 'Where do I have to get off?', words: ['Wo', 'muss', 'ich', 'aussteigen'], a: 'Wo muss ich aussteigen' },
      { k: 'listen', de: 'Der Zug hat zwanzig Minuten Verspätung.',
        a: ['Der Zug hat zwanzig Minuten Verspätung', 'Der Zug hat zwanzig Minuten Verspaetung'], en: 'The train is twenty minutes late.' },
      { k: 'listen', de: 'Entschuldigung, wie komme ich zum Bahnhof?',
        a: ['Entschuldigung wie komme ich zum Bahnhof', 'Entschuldigung, wie komme ich zum Bahnhof'],
        en: 'Excuse me, how do I get to the station?' },
      { k: 'match', q: 'Directions', pairs: [
        ['links', 'left'], ['geradeaus', 'straight ahead'], ['gegenüber', 'opposite'], ['die Kreuzung', 'intersection']
      ] },
      { k: 'match', q: 'Transport', pairs: [
        ['das Gleis', 'platform'], ['umsteigen', 'to change trains'], ['die Verspätung', 'the delay'], ['die Haltestelle', 'the stop']
      ] },
      { k: 'trans', en: 'Is it far?', a: ['Ist es weit?'], hint: 'three words' }
    ]
  });
})();
