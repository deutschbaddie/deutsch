/* Einheit 9 — Stadt und Wege */
(function () {
  window.DE.registerUnit({
    id: 'a1-09', level: 'A1', num: 9, minutes: 37,
    title: 'Stadt, Wege, Bahn',
    subtitle: 'Nach dem Weg fragen · Imperativ · zu, nach, mit + Dativ',
    can: [
      'Du kannst nach dem Weg fragen und eine Antwort verstehen.',
      'Du kannst den Imperativ benutzen, ohne unhöflich zu klingen.',
      'Du kommst mit Bahn, Bus und Ticketautomat zurecht.',
      'Du kennst den Unterschied zwischen *zu*, *nach* und *in*.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 9', title: 'Sich nicht verlaufen',
        lead: 'Nach dem Weg zu fragen ist leicht. Die Antwort zu verstehen ist das Problem — deshalb üben wir vor allem das.',
        points: [
          'Orte in der Stadt.',
          'Wegbeschreibungen verstehen: links, rechts, geradeaus, bis zur Ampel.',
          '*Imperativ* — Anweisungen geben und bekommen.',
          '*zu* vs. *nach* vs. *in* — die drei Wörter für „to“.'
        ] },

      { t: 'vocab', kicker: 'Wortschatz', title: 'In der Stadt',
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
          ['das Rathaus', 'town hall', 'Das Rathaus ist da vorne.', "The town hall is up ahead."],
          ['die Kirche', 'church', 'Neben der Kirche.', 'Next to the church.'],
          ['der Park', 'park', 'Im Park ist es schön.', "It's nice in the park."],
          ['das Kino', 'cinema', 'Gehen wir ins Kino?', 'Shall we go to the cinema?'],
          ['die Schule', 'school', 'Ich gehe zur Schule.', 'I go to school.'],
          ['die Ampel', 'traffic light', 'An der Ampel links.', 'Left at the traffic light.'],
          ['die Ecke', 'corner', 'An der Ecke.', 'At the corner.'],
          ['die Brücke', 'bridge', 'Über die Brücke.', 'Across the bridge.']
        ] },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Richtungen',
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

      { t: 'grammar', kicker: 'Grammatik', title: 'Der Imperativ',
        body: 'Anweisungen. Drei Formen, je nachdem, mit wem du redest.\n*du*: Verbstamm, meistens ohne Endung. geh! komm! nimm!\n*ihr*: wie die normale ihr-Form. geht! kommt!\n*Sie*: Verb + Sie. Gehen Sie! Kommen Sie!',
        table: {
          head: ['Verb', 'du', 'ihr', 'Sie'],
          rows: [
            ['gehen', '*Geh!*', '*Geht!*', '*Gehen Sie!*'],
            ['kommen', '*Komm!*', '*Kommt!*', '*Kommen Sie!*'],
            ['nehmen', '*Nimm!*', '*Nehmt!*', '*Nehmen Sie!*'],
            ['warten', '*Warte!*', '*Wartet!*', '*Warten Sie!*'],
            ['abbiegen', '*Bieg ab!*', '*Biegt ab!*', '*Biegen Sie ab!*'],
            ['sein', '*Sei!*', '*Seid!*', '*Seien Sie!*']
          ]
        },
        examples: [
          ['Geh an der Ampel links.', 'Turn left at the traffic light.'],
          ['Nehmen Sie die zweite Straße rechts.', 'Take the second street on the right.'],
          ['Warte mal kurz!', 'Hang on a second!']
        ],
        note: 'Ohne *mal* oder *bitte* klingt ein Imperativ im Deutschen hart. Mit *mal* wird aus einem Befehl eine Bitte: „Komm mal her.“', noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammatik', title: 'zu, nach, in — die drei Wörter für „to“',
        body: 'Englisch hat ein Wort. Deutsch hat drei, und sie sind nicht austauschbar.\n*zu* + Dativ — zu Personen, Gebäuden, Institutionen. Der Standardfall.\n*nach* — zu Städten, Ländern ohne Artikel, und Himmelsrichtungen. Plus: *nach Hause*.\n*in* + Akkusativ — wenn du in etwas *hineingehst*: ins Kino, in die Stadt.',
        table: {
          head: ['Ziel', 'richtig', 'Beispiel'],
          rows: [
            ['Person', '*zu*', 'Ich gehe zu Anna.'],
            ['Arzt, Bahnhof', '*zu*', 'zum Arzt, zum Bahnhof'],
            ['Schule, Arbeit', '*zu*', 'zur Schule, zur Arbeit'],
            ['Stadt / Land', '*nach*', 'nach Berlin, nach Italien'],
            ['eigenes Zuhause', '*nach Hause*', 'Ich gehe nach Hause.'],
            ['hineingehen', '*in* + Akk.', 'ins Kino, in die Stadt'],
            ['Länder mit Artikel', '*in* + Akk.', 'in die Türkei, in die Schweiz']
          ]
        },
        examples: [
          ['Ich fahre nach Berlin.', "I'm going to Berlin."],
          ['Ich gehe zum Arzt.', "I'm going to the doctor."],
          ['Wir gehen ins Kino.', "We're going to the cinema."],
          ['Ich will nach Hause.', 'I want to go home.']
        ],
        note: 'Verschmelzungen: zu dem → *zum*, zu der → *zur*, in das → *ins*. Die benutzt jeder.' },

      { t: 'dialog', kicker: 'Dialog', title: 'Nach dem Weg fragen',
        setting: 'Auf der Straße, eine fremde Person. Also *Sie*.',
        lines: [
          ['Emerson', 'Entschuldigung, wie komme ich zum Bahnhof?', "Excuse me, how do I get to the station?"],
          ['Passantin', 'Zum Bahnhof? Gehen Sie hier geradeaus bis zur Ampel.', "To the station? Go straight ahead here until the traffic light."],
          ['Emerson', 'Okay, bis zur Ampel.', 'Okay, to the traffic light.'],
          ['Passantin', 'Dann links, und an der zweiten Kreuzung rechts.', 'Then left, and right at the second intersection.'],
          ['Emerson', 'Links, dann zweite Kreuzung rechts. Ist das weit?', "Left, then second intersection right. Is it far?"],
          ['Passantin', 'Nein, fünf Minuten zu Fuß.', 'No, five minutes on foot.'],
          ['Emerson', 'Super, vielen Dank!', 'Great, thank you very much!'],
          ['Passantin', 'Gern. — Ach, und der Bahnhof ist gegenüber vom Rathaus.', "You're welcome. — Oh, and the station is opposite the town hall."]
        ],
        note: 'Der Trick beim Weg fragen: *wiederhol die Antwort*. Das gibt dir Zeit und die Person korrigiert dich, wenn du falsch liegst.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Bahn, Bus, Ticket',
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
        note: 'Fortbewegung: *mit* + Dativ. mit *dem* Bus, mit *der* Bahn, mit *dem* Auto, mit *dem* Fahrrad. Ausnahme: *zu Fuß*.' },

      { t: 'street', title: 'Unterwegs, echt gesprochen',
        items: [
          ['Wo geht’s hier zum Bahnhof?', "Which way to the station?", 'Lockerer als „wie komme ich zu…“.'],
          ['Ich steh im Stau', "I'm stuck in traffic", 'Der Standardgrund fürs Zuspätkommen.'],
          ['Die Bahn ist mal wieder zu spät', 'The train is late again', '*mal wieder* = as usual. Ein nationales Hobby.'],
          ['Ich bin gleich da', "I'm nearly there", 'Sehr dehnbar.'],
          ['Ich hab die Bahn verpasst', 'I missed the train', '*verpassen* = to miss.'],
          ['Schwarzfahren', 'riding without a ticket', 'Kostet 60 € Strafe. Kontrollen kommen ohne Vorwarnung.'],
          ['Komm, wir laufen', "Come on, let's walk", '*laufen* heißt gesprochen meistens „gehen“, nicht „rennen“.'],
          ['Das ist um die Ecke', "That's just around the corner", 'Sehr häufig für „ganz nah“.']
        ],
        note: 'Kontrolleure in der U-Bahn sind in Zivil. „Ich wusste nicht, dass ich ein Ticket brauche“ funktioniert nicht.', noteKind: 'warn' },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Wie komme ich …?',
        frame: 'Wie komme ich {}?', enFrame: 'How do I get {}?',
        slotLabel: 'Ziel',
        swaps: [
          ['zum Bahnhof', 'to the station'], ['zur Post', 'to the post office'], ['ins Zentrum', 'to the centre'],
          ['nach Hause', 'home'], ['zum Flughafen', 'to the airport'], ['in die Stadt', 'into town']
        ],
        note: '*zum* (zu dem) bei der/das-Wörtern, *zur* (zu der) bei die-Wörtern, *nach* bei Städten und „Hause“.' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Wegfinden',
        ex: [
          { k: 'fill', q: 'Ich fahre ___ Berlin.', a: ['nach'], en: "I'm going to Berlin.",
            why: 'Städte und Länder ohne Artikel → *nach*.' },
          { k: 'fill', q: 'Ich gehe ___ Arzt. (to the)', a: ['zum'], en: "I'm going to the doctor.",
            why: 'zu dem Arzt → *zum* Arzt.' },
          { k: 'fill', q: 'Wir gehen ___ Kino. (into the)', a: ['ins'], en: "We're going to the cinema.",
            why: 'in das Kino → *ins* Kino. Bewegung hinein → Akkusativ.' },
          { k: 'choice', q: 'Wie sagst du höflich „turn left“ zu einer fremden Person?',
            opts: ['Geh links!', 'Biegen Sie links ab.', 'Links!'], a: 1 },
          { k: 'order', en: 'How do I get to the station?', words: ['Wie', 'komme', 'ich', 'zum', 'Bahnhof'],
            a: 'Wie komme ich zum Bahnhof' }
        ] },

      { t: 'recap', kicker: 'Einheit 9', title: 'Was jetzt sitzen sollte',
        points: [
          'Imperativ du: Verbstamm. *Geh! Komm! Nimm!*',
          '*mal* und *bitte* machen aus einem Befehl eine Bitte.',
          '*zu* zu Personen und Gebäuden · *nach* zu Städten und *nach Hause* · *in* wenn du hineingehst.',
          'zu dem → *zum*, zu der → *zur*, in das → *ins*.',
          'Fortbewegung mit *mit* + Dativ: mit *dem* Bus. Außer *zu Fuß*.',
          'Beim Weg fragen: die Antwort laut wiederholen.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Ich fahre ___ Italien.', a: ['nach'], en: "I'm going to Italy." },
      { k: 'fill', q: 'Ich gehe ___ Schule. (to)', a: ['zur'], en: 'I go to school.', why: 'zu der Schule → *zur*.' },
      { k: 'fill', q: 'Ich will ___ Hause.', a: ['nach'], en: 'I want to go home.' },
      { k: 'fill', q: 'Ich fahre mit ___ Bus.', a: ['dem'], en: "I'm going by bus.", why: '*mit* + Dativ: mit dem Bus.' },
      { k: 'choice', q: 'Welcher Imperativ passt zu *du* bei „nehmen“?',
        opts: ['Nehm!', 'Nimm!', 'Nehme!'], a: 1, why: 'nehmen ändert den Vokal: du nimmst → *Nimm!*' },
      { k: 'choice', q: 'Was bedeutet „umsteigen“?',
        opts: ['Aussteigen.', 'Den Zug wechseln.', 'Ein Ticket kaufen.'], a: 1 },
      { k: 'choice', q: 'Was heißt „Schwarzfahren“?',
        opts: ['Nachts fahren.', 'Ohne Ticket fahren.', 'Schnell fahren.'], a: 1 },
      { k: 'order', en: 'Go straight ahead to the traffic light.', words: ['Gehen', 'Sie', 'geradeaus', 'bis', 'zur', 'Ampel'],
        a: 'Gehen Sie geradeaus bis zur Ampel' },
      { k: 'order', en: 'Where do I have to get off?', words: ['Wo', 'muss', 'ich', 'aussteigen'], a: 'Wo muss ich aussteigen' },
      { k: 'listen', de: 'Der Zug hat zwanzig Minuten Verspätung.', a: ['Der Zug hat zwanzig Minuten Verspätung', 'Der Zug hat zwanzig Minuten Verspaetung'], en: 'The train is twenty minutes late.' },
      { k: 'listen', de: 'Entschuldigung, wie komme ich zum Bahnhof?', a: ['Entschuldigung wie komme ich zum Bahnhof', 'Entschuldigung, wie komme ich zum Bahnhof'], en: 'Excuse me, how do I get to the station?' },
      { k: 'match', q: 'Richtungen', pairs: [
        ['links', 'left'], ['geradeaus', 'straight ahead'], ['gegenüber', 'opposite'], ['die Kreuzung', 'intersection']
      ] },
      { k: 'match', q: 'Verkehr', pairs: [
        ['das Gleis', 'platform'], ['umsteigen', 'to change trains'], ['die Verspätung', 'the delay'], ['die Haltestelle', 'the stop']
      ] },
      { k: 'trans', en: 'Is it far?', a: ['Ist es weit?'], hint: 'drei Wörter' }
    ]
  });
})();
