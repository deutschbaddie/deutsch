/* Einheit 11 — Körper, Gesundheit, Gefühle */
(function () {
  window.DE.registerUnit({
    id: 'a1-11', level: 'A1', num: 11, minutes: 36,
    title: 'Körper, Gesundheit, Gefühle',
    subtitle: 'Beim Arzt · Schmerzen · mir/dir/ihm — Dativ bei Personen',
    can: [
      'Du kannst sagen, was dir wehtut.',
      'Du kannst einen Arzttermin machen.',
      'Du kannst über Gefühle sprechen.',
      'Du beherrschst die Dativ-Pronomen: mir, dir, ihm, ihr, uns, euch.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 11', title: 'Wenn es dir schlecht geht',
        lead: 'Diese Einheit hoffst du nie zu brauchen. Genau deshalb muss sie sitzen.',
        points: [
          'Körperteile und Beschwerden.',
          '*mir, dir, ihm, ihr* — Dativpronomen, die du ständig brauchst.',
          'Warum es „Mir geht es gut“ heißt und nicht „ich gehe gut“.',
          'Beim Arzt: anmelden, beschreiben, verstehen.'
        ] },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Der Körper',
        items: [
          ['der Kopf', 'head', 'Mein Kopf tut weh.', 'My head hurts.'],
          ['der Hals', 'throat, neck', 'Ich habe Halsschmerzen.', 'I have a sore throat.'],
          ['der Bauch', 'stomach, belly', 'Mir tut der Bauch weh.', 'My stomach hurts.'],
          ['der Rücken', 'back', 'Rückenschmerzen sind normal.', 'Back pain is normal.'],
          ['der Arm', 'arm', 'Der Arm ist gebrochen.', 'The arm is broken.'],
          ['die Hand', 'hand', 'Gib mir die Hand.', 'Give me your hand.'],
          ['das Bein', 'leg', 'Mein Bein tut weh.', 'My leg hurts.'],
          ['der Fuß', 'foot', 'Mein Fuß ist geschwollen.', 'My foot is swollen.'],
          ['das Auge / die Augen', 'eye / eyes', 'Meine Augen sind müde.', 'My eyes are tired.'],
          ['das Ohr / die Ohren', 'ear / ears', 'Mein Ohr tut weh.', 'My ear hurts.'],
          ['der Zahn / die Zähne', 'tooth / teeth', 'Ich habe Zahnschmerzen.', 'I have toothache.'],
          ['das Herz', 'heart', 'Mein Herz schlägt schnell.', 'My heart is racing.'],
          ['die Nase', 'nose', 'Meine Nase läuft.', 'My nose is running.'],
          ['der Mund', 'mouth', 'Mach den Mund auf.', 'Open your mouth.'],
          ['die Haut', 'skin', 'Meine Haut ist trocken.', 'My skin is dry.']
        ] },

      { t: 'grammar', kicker: 'Grammatik', title: 'mir, dir, ihm — der Dativ bei Personen',
        body: 'Sehr viele deutsche Alltagssätze stellen die Person in den Dativ. Wörtlich sagt Deutsch nicht „I am cold“, sondern „*zu mir* ist es kalt“.\nDas wirkt zuerst fremd, ist aber ein festes Muster — und wenn du es einmal hast, klingst du sofort deutlich natürlicher.',
        table: {
          head: ['Nominativ', 'Dativ', 'Beispiel'],
          rows: [
            ['ich', '*mir*', 'Mir ist kalt.'],
            ['du', '*dir*', 'Wie geht es dir?'],
            ['er', '*ihm*', 'Ihm geht es schlecht.'],
            ['sie', '*ihr*', 'Ihr tut der Kopf weh.'],
            ['wir', '*uns*', 'Uns geht es gut.'],
            ['ihr', '*euch*', 'Wie geht es euch?'],
            ['sie/Sie', '*ihnen / Ihnen*', 'Wie geht es Ihnen?']
          ]
        },
        examples: [
          ['*Mir* ist kalt.', "I'm cold. (lit.: to me it is cold)"],
          ['*Mir* geht es nicht so gut.', "I'm not doing so well."],
          ['Kannst du *mir* helfen?', 'Can you help me?'],
          ['Das gefällt *mir*.', 'I like that. (lit.: that pleases me)']
        ],
        note: 'Merk dir *mir ist kalt / warm / schlecht / langweilig*. Alle vier funktionieren gleich und kommen ständig vor.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Krank sein',
        items: [
          ['krank', 'ill, sick', 'Ich bin krank.', "I'm ill."],
          ['gesund', 'healthy', 'Werd schnell gesund!', 'Get well soon!'],
          ['wehtun', 'to hurt', 'Was tut weh?', 'What hurts?'],
          ['die Schmerzen', 'pain (plural)', 'Ich habe starke Schmerzen.', "I'm in a lot of pain."],
          ['die Kopfschmerzen', 'headache', 'Ich habe Kopfschmerzen.', 'I have a headache.'],
          ['die Erkältung', 'cold (illness)', 'Ich habe eine Erkältung.', 'I have a cold.'],
          ['das Fieber', 'fever', 'Hast du Fieber?', 'Do you have a fever?'],
          ['der Husten', 'cough', 'Der Husten geht nicht weg.', "The cough won't go away."],
          ['die Grippe', 'flu', 'Sie hat Grippe.', 'She has the flu.'],
          ['die Praxis', 'doctor’s practice', 'Die Praxis ist heute zu.', 'The practice is closed today.'],
          ['die Apotheke', 'pharmacy', 'Geh in die Apotheke.', 'Go to the pharmacy.'],
          ['die Medizin / das Medikament', 'medicine', 'Nimm die Medizin.', 'Take the medicine.'],
          ['die Tablette', 'tablet, pill', 'Zwei Tabletten am Tag.', 'Two tablets a day.'],
          ['die Krankenkasse', 'health insurance', 'Welche Krankenkasse haben Sie?', 'Which health insurer do you have?'],
          ['die Versichertenkarte', 'insurance card', 'Ihre Karte, bitte.', 'Your card, please.'],
          ['die Krankmeldung', 'sick note', 'Ich brauche eine Krankmeldung.', 'I need a sick note.'],
          ['sich ausruhen', 'to rest', 'Du musst dich ausruhen.', 'You need to rest.']
        ],
        note: 'In Deutschland brauchst du ab dem dritten Krankheitstag eine *Krankmeldung* vom Arzt für den Arbeitgeber. Manche Firmen wollen sie ab Tag eins.' },

      { t: 'grammar', kicker: 'Grammatik', title: 'wehtun — zwei Wege, dasselbe zu sagen',
        body: 'Es gibt zwei gleich richtige Konstruktionen. Deutsche benutzen beide, aber die zweite klingt alltäglicher.',
        table: {
          head: ['Konstruktion', 'Beispiel', 'wörtlich'],
          rows: [
            ['Possessiv + tut weh', 'Mein Kopf tut weh.', 'My head hurts.'],
            ['Dativ + der/die/das', '*Mir* tut *der* Kopf weh.', 'To me hurts the head.'],
            ['Ich habe …schmerzen', 'Ich habe Kopfschmerzen.', 'I have headache.'],
            ['Plural', 'Meine Füße tun weh.', 'My feet hurt.']
          ]
        },
        examples: [
          ['Mir tut der Hals weh.', 'My throat hurts.'],
          ['Ich habe seit gestern Bauchschmerzen.', "I've had stomach ache since yesterday."],
          ['Meine Augen tun weh.', 'My eyes hurt.']
        ],
        note: '*wehtun* ist trennbar: tut *weh*. Die Vorsilbe steht am Satzende, wie immer.' },

      { t: 'dialog', kicker: 'Dialog', title: 'Beim Arzt',
        setting: 'Erst die Anmeldung, dann die Ärztin. Beide siezen.',
        lines: [
          ['Anmeldung', 'Guten Tag. Haben Sie einen Termin?', 'Hello. Do you have an appointment?'],
          ['Emerson', 'Nein, aber es ist dringend.', "No, but it's urgent."],
          ['Anmeldung', 'Ihre Versichertenkarte, bitte. — Nehmen Sie im Wartezimmer Platz.', 'Your insurance card, please. — Take a seat in the waiting room.'],
          ['Ärztin', 'So, Herr Meade. Was fehlt Ihnen denn?', 'Right, Mr. Meade. What seems to be the problem?'],
          ['Emerson', 'Mir tut seit drei Tagen der Hals weh. Und ich habe Fieber.', "My throat has hurt for three days. And I have a fever."],
          ['Ärztin', 'Wie hoch ist das Fieber?', 'How high is the fever?'],
          ['Emerson', 'Achtunddreißig fünf.', 'Thirty-eight point five.'],
          ['Ärztin', 'Machen Sie mal den Mund auf. — Hm. Das ist eine Entzündung.', 'Open your mouth. — Hm. That’s an infection.'],
          ['Emerson', 'Brauche ich Antibiotika?', 'Do I need antibiotics?'],
          ['Ärztin', 'Erstmal nicht. Ruhen Sie sich aus und trinken Sie viel.', 'Not for now. Rest and drink plenty.'],
          ['Emerson', 'Kann ich eine Krankmeldung bekommen?', 'Can I get a sick note?'],
          ['Ärztin', 'Natürlich. Für drei Tage.', 'Of course. For three days.']
        ],
        note: '*Was fehlt Ihnen?* ist die Standardfrage der Ärztin. Wörtlich „what is missing from you“ — gemeint ist „what’s wrong?“' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Gefühle',
        items: [
          ['glücklich', 'happy', 'Ich bin glücklich.', "I'm happy."],
          ['traurig', 'sad', 'Sie ist traurig.', "She's sad."],
          ['müde', 'tired', 'Ich bin total müde.', "I'm really tired."],
          ['sauer', 'annoyed, angry', 'Er ist sauer auf mich.', "He's annoyed with me."],
          ['wütend', 'furious', 'Sie war richtig wütend.', 'She was really angry.'],
          ['nervös', 'nervous', 'Ich bin nervös.', "I'm nervous."],
          ['gestresst', 'stressed', 'Ich bin total gestresst.', "I'm so stressed."],
          ['entspannt', 'relaxed', 'Heute bin ich entspannt.', "I'm relaxed today."],
          ['froh', 'glad', 'Ich bin froh, dass du da bist.', "I'm glad you're here."],
          ['einsam', 'lonely', 'Manchmal bin ich einsam.', "Sometimes I'm lonely."],
          ['Angst haben', 'to be afraid', 'Ich habe Angst.', "I'm scared."],
          ['sich freuen', 'to be pleased, to look forward', 'Ich freue mich!', "I'm happy about it!"],
          ['Mir ist langweilig', "I'm bored", 'Mir ist langweilig.', "I'm bored."],
          ['Es geht so', "so-so, meh", 'Wie geht’s? — Es geht so.', 'How are you? — Meh.']
        ],
        note: '*sauer* heißt wörtlich „sour“, bedeutet aber „annoyed“. „Bist du sauer?“ = „Are you mad at me?“' },

      { t: 'street', title: 'Wie es dir wirklich geht',
        lead: 'Auf „Wie geht’s?“ antwortet niemand ehrlich — außer unter Freunden. Dann so:',
        items: [
          ['Ganz okay', "Pretty okay", 'Ehrlich neutral.'],
          ['Geht so', 'Meh', 'Heißt: nicht gut, will aber nicht drüber reden.'],
          ['Könnte besser sein', 'Could be better', 'Sanfte Version von „schlecht“.'],
          ['Ich bin fertig', "I'm wrecked", 'Erschöpft, nicht „finished“.'],
          ['Ich bin durch', "I'm done in", 'Noch stärker als fertig.'],
          ['Ich hab einen Crashout', 'I had a meltdown', 'Neu, aus dem Englischen, 2026 überall.'],
          ['Mir geht’s richtig gut', "I'm doing really well", '*richtig* als Verstärker.'],
          ['Alles gut bei dir?', 'You okay?', 'Wenn jemand komisch wirkt.'],
          ['Kopf hoch', 'Chin up', 'Aufmunterung.'],
          ['Gute Besserung!', 'Get well soon!', 'Sagt man immer, wenn jemand krank ist. Pflicht.']
        ] },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Mir ist …',
        frame: 'Mir ist {}.', enFrame: "I'm {}.",
        slotLabel: 'Zustand',
        swaps: [
          ['kalt', 'cold'], ['warm', 'warm'], ['schlecht', 'sick / nauseous'],
          ['langweilig', 'bored'], ['schwindelig', 'dizzy'], ['egal', "indifferent — I don't care"]
        ],
        note: 'Nie „ich bin kalt“ — das heißt, du bist ein kalter Mensch. Immer *mir ist kalt*.' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Dativ-Pronomen',
        ex: [
          { k: 'fill', q: '___ ist kalt.', a: ['Mir', 'mir'], en: "I'm cold.",
            why: 'Nicht „ich bin kalt“ — der Zustand kommt im Dativ.' },
          { k: 'fill', q: 'Kannst du ___ helfen?', a: ['mir'], en: 'Can you help me?',
            why: '*helfen* verlangt immer den Dativ.' },
          { k: 'fill', q: 'Wie geht es ___? (to you, formal)', a: ['Ihnen'], en: 'How are you? (formal)' },
          { k: 'choice', q: 'Wie sagst du „My throat hurts“?',
            opts: ['Ich bin Hals weh.', 'Mir tut der Hals weh.', 'Mein Hals ist weh.'], a: 1 },
          { k: 'trans', en: "I'm bored.", a: ['Mir ist langweilig.'], hint: 'Mir ist …' }
        ] },

      { t: 'recap', kicker: 'Einheit 11', title: 'Was jetzt sitzen sollte',
        points: [
          'Dativ-Pronomen: *mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen*.',
          '*Mir ist kalt* — nie „ich bin kalt“.',
          '*helfen* und *gefallen* verlangen immer Dativ.',
          'Schmerzen: *Mir tut der Kopf weh* oder *Ich habe Kopfschmerzen*.',
          '*Was fehlt Ihnen?* ist die Frage der Ärztin.',
          '*Gute Besserung!* sagt man immer.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: '___ ist kalt.', a: ['Mir', 'mir'], en: "I'm cold." },
      { k: 'fill', q: 'Kannst du ___ helfen?', a: ['mir'], en: 'Can you help me?' },
      { k: 'fill', q: 'Wie geht es ___? (to you, informal)', a: ['dir'], en: 'How are you?' },
      { k: 'fill', q: 'Ich habe ___. (headache)', a: ['Kopfschmerzen', 'kopfschmerzen'], en: 'I have a headache.' },
      { k: 'choice', q: 'Was ist an „Ich bin kalt“ falsch?',
        opts: ['Nichts.', 'Es heißt, du bist ein kalter Mensch.', 'Das Verb ist falsch.'], a: 1 },
      { k: 'choice', q: 'Was fragt die Ärztin mit „Was fehlt Ihnen?“',
        opts: ['Was fehlt in Ihrer Tasche?', "What's wrong with you?", 'Was möchten Sie?'], a: 1 },
      { k: 'choice', q: 'Was bedeutet „Er ist sauer“?', opts: ["He's sour.", "He's annoyed.", "He's tired."], a: 1 },
      { k: 'order', en: 'My stomach has hurt since yesterday.', words: ['Mir', 'tut', 'seit', 'gestern', 'der', 'Bauch', 'weh'],
        a: 'Mir tut seit gestern der Bauch weh' },
      { k: 'order', en: 'I need a sick note.', words: ['Ich', 'brauche', 'eine', 'Krankmeldung'], a: 'Ich brauche eine Krankmeldung' },
      { k: 'listen', de: 'Mir geht es nicht so gut.', a: ['Mir geht es nicht so gut', 'Mir gehts nicht so gut'], en: "I'm not doing so well." },
      { k: 'listen', de: 'Ich habe seit drei Tagen Fieber.', a: ['Ich habe seit drei Tagen Fieber'], en: "I've had a fever for three days." },
      { k: 'match', q: 'Körper', pairs: [['der Kopf', 'head'], ['der Bauch', 'stomach'], ['der Hals', 'throat'], ['das Bein', 'leg']] },
      { k: 'match', q: 'Gefühle', pairs: [
        ['müde', 'tired'], ['sauer', 'annoyed'], ['gestresst', 'stressed'], ['froh', 'glad']
      ] },
      { k: 'trans', en: 'Get well soon!', a: ['Gute Besserung!', 'Gute Besserung'], hint: 'zwei Wörter' }
    ]
  });
})();
