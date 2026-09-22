/* Unit 11 — Body, health, feelings */
(function () {
  window.DE.registerUnit({
    id: 'a1-11', level: 'A1', num: 11, minutes: 36,
    title: 'Body, health, feelings',
    subtitle: 'At the doctor · pain · mir/dir/ihm — the dative for people',
    can: [
      'Say what hurts.',
      'Make a doctor’s appointment.',
      'Talk about how you feel.',
      'Use the dative pronouns: mir, dir, ihm, ihr, uns, euch.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 11', title: 'When you feel awful',
        lead: 'This is the unit you hope never to need. Which is exactly why it has to be solid.',
        points: [
          'Body parts and what is wrong with them.',
          '*mir, dir, ihm, ihr* — dative pronouns you need constantly.',
          'Why German says "Mir geht es gut" and not "I go well".',
          'At the doctor: checking in, describing, understanding.'
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'The body',
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

      { t: 'grammar', kicker: 'Grammar', title: 'mir, dir, ihm — the dative for people',
        body: 'A great many everyday German sentences put the person in the dative. German does not literally say "I am cold" — it says "*to me* it is cold".\nIt feels alien at first, but it is a fixed pattern — and once you have it, you sound markedly more natural.',
        table: {
          head: ['Nominative', 'Dative', 'Example'],
          rows: [
            ['ich — I', '*mir*', 'Mir ist kalt. — I’m cold.'],
            ['du — you', '*dir*', 'Wie geht es dir? — How are you?'],
            ['er — he', '*ihm*', 'Ihm geht es schlecht. — He’s doing badly.'],
            ['sie — she', '*ihr*', 'Ihr tut der Kopf weh. — Her head hurts.'],
            ['wir — we', '*uns*', 'Uns geht es gut. — We’re doing fine.'],
            ['ihr — you lot', '*euch*', 'Wie geht es euch? — How are you lot?'],
            ['sie/Sie — they / you (formal)', '*ihnen / Ihnen*', 'Wie geht es Ihnen? — How are you?']
          ]
        },
        examples: [
          ['*Mir* ist kalt.', "I'm cold. (literally: to me it is cold)"],
          ['*Mir* geht es nicht so gut.', "I'm not doing so well."],
          ['Kannst du *mir* helfen?', 'Can you help me?'],
          ['Das gefällt *mir*.', 'I like that. (literally: that pleases me)']
        ],
        note: 'Memorise *mir ist kalt / warm / schlecht / langweilig*. All four work the same way and all four come up constantly.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Being ill',
        items: [
          ['krank', 'ill, sick', 'Ich bin krank.', "I'm ill."],
          ['gesund', 'healthy', 'Werd schnell gesund!', 'Get well soon!'],
          ['wehtun', 'to hurt', 'Was tut weh?', 'What hurts?'],
          ['die Schmerzen', 'pain (plural)', 'Ich habe starke Schmerzen.', "I'm in a lot of pain."],
          ['die Kopfschmerzen', 'headache', 'Ich habe Kopfschmerzen.', 'I have a headache.'],
          ['die Erkältung', 'cold (the illness)', 'Ich habe eine Erkältung.', 'I have a cold.'],
          ['das Fieber', 'fever', 'Hast du Fieber?', 'Do you have a fever?'],
          ['der Husten', 'cough', 'Der Husten geht nicht weg.', "The cough won't go away."],
          ['die Grippe', 'flu', 'Sie hat Grippe.', 'She has the flu.'],
          ['die Praxis', "doctor's practice", 'Die Praxis ist heute zu.', 'The practice is closed today.'],
          ['die Apotheke', 'pharmacy', 'Geh in die Apotheke.', 'Go to the pharmacy.'],
          ['die Medizin / das Medikament', 'medicine', 'Nimm die Medizin.', 'Take the medicine.'],
          ['die Tablette', 'tablet, pill', 'Zwei Tabletten am Tag.', 'Two tablets a day.'],
          ['die Krankenkasse', 'health insurance', 'Welche Krankenkasse haben Sie?', 'Which health insurer do you have?'],
          ['die Versichertenkarte', 'insurance card', 'Ihre Karte, bitte.', 'Your card, please.'],
          ['die Krankmeldung', 'sick note', 'Ich brauche eine Krankmeldung.', 'I need a sick note.'],
          ['sich ausruhen', 'to rest', 'Du musst dich ausruhen.', 'You need to rest.']
        ],
        note: 'In Germany you need a *Krankmeldung* — a doctor’s sick note — for your employer from the third day off. Some firms want it from day one.' },

      { t: 'grammar', kicker: 'Grammar', title: 'wehtun — two ways to say the same thing',
        body: 'There are two equally correct constructions. Germans use both, but the second one sounds more everyday.',
        table: {
          head: ['Construction', 'Example', 'Literally'],
          rows: [
            ['possessive + tut weh', 'Mein Kopf tut weh.', 'My head hurts.'],
            ['dative + der/die/das', '*Mir* tut *der* Kopf weh.', 'To me hurts the head.'],
            ['Ich habe …schmerzen', 'Ich habe Kopfschmerzen.', 'I have headache.'],
            ['plural', 'Meine Füße tun weh.', 'My feet hurt.']
          ]
        },
        examples: [
          ['Mir tut der Hals weh.', 'My throat hurts.'],
          ['Ich habe seit gestern Bauchschmerzen.', "I've had stomach ache since yesterday."],
          ['Meine Augen tun weh.', 'My eyes hurt.']
        ],
        note: '*wehtun* is separable: tut *weh*. The prefix goes to the end of the sentence, as always.' },

      { t: 'dialog', kicker: 'Dialogue', title: 'At the doctor',
        setting: 'First reception, then the doctor. Both use *Sie*.',
        lines: [
          ['Anmeldung', 'Guten Tag. Haben Sie einen Termin?', 'Hello. Do you have an appointment?'],
          ['Emerson', 'Nein, aber es ist dringend.', "No, but it's urgent."],
          ['Anmeldung', 'Ihre Versichertenkarte, bitte. — Nehmen Sie im Wartezimmer Platz.',
            'Your insurance card, please. — Take a seat in the waiting room.'],
          ['Ärztin', 'So, Herr Meade. Was fehlt Ihnen denn?', 'Right, Mr. Meade. What seems to be the problem?'],
          ['Emerson', 'Mir tut seit drei Tagen der Hals weh. Und ich habe Fieber.',
            'My throat has hurt for three days. And I have a fever.'],
          ['Ärztin', 'Wie hoch ist das Fieber?', 'How high is the fever?'],
          ['Emerson', 'Achtunddreißig fünf.', 'Thirty-eight point five.'],
          ['Ärztin', 'Machen Sie mal den Mund auf. — Hm. Das ist eine Entzündung.',
            "Open your mouth. — Hm. That's an infection."],
          ['Emerson', 'Brauche ich Antibiotika?', 'Do I need antibiotics?'],
          ['Ärztin', 'Erstmal nicht. Ruhen Sie sich aus und trinken Sie viel.', 'Not for now. Rest and drink plenty.'],
          ['Emerson', 'Kann ich eine Krankmeldung bekommen?', 'Can I get a sick note?'],
          ['Ärztin', 'Natürlich. Für drei Tage.', 'Of course. For three days.']
        ],
        note: '*Was fehlt Ihnen?* is the doctor’s standard question. Literally "what is missing from you" — it means "what’s wrong?"' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Feelings',
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
          ['Es geht so', 'so-so, meh', 'Wie geht’s? — Es geht so.', 'How are you? — Meh.']
        ],
        note: '*sauer* literally means "sour" but is used for "annoyed". "Bist du sauer?" = "Are you mad at me?"' },

      { t: 'street', title: 'How you are really doing',
        lead: 'Nobody answers "Wie geht’s?" honestly — except among friends. Then it goes like this:',
        items: [
          ['Ganz okay', 'Pretty okay', 'Honestly neutral.'],
          ['Geht so', 'Meh', 'Means: not great, and not wanting to discuss it.'],
          ['Könnte besser sein', 'Could be better', 'The gentle version of "bad".'],
          ['Ich bin fertig', "I'm wrecked", 'Exhausted, not "finished".'],
          ['Ich bin durch', "I'm done in", 'Even stronger than fertig.'],
          ['Ich hab einen Crashout', 'I had a meltdown', 'New, from English, everywhere in 2026.'],
          ["Mir geht's richtig gut", "I'm doing really well", '*richtig* as an intensifier.'],
          ['Alles gut bei dir?', 'You okay?', 'When someone seems off.'],
          ['Kopf hoch', 'Chin up', 'Encouragement.'],
          ['Gute Besserung!', 'Get well soon!', 'You say this whenever someone is ill. Non-optional.']
        ] },

      { t: 'pattern', kicker: 'Sentence builder', title: 'Mir ist …',
        frame: 'Mir ist {}.', enFrame: "I'm {}.",
        slotLabel: 'state',
        swaps: [
          ['kalt', 'cold'], ['warm', 'warm'], ['schlecht', 'sick / nauseous'],
          ['langweilig', 'bored'], ['schwindelig', 'dizzy'], ['egal', "indifferent — I don't care"]
        ],
        note: 'Never "ich bin kalt" — that says you are a cold person. Always *mir ist kalt*.' },

      { t: 'drill', kicker: 'Try it now', title: 'Dative pronouns',
        ex: [
          { k: 'fill', q: '___ ist kalt.', a: ['Mir', 'mir'], en: "I'm cold.",
            why: 'Not "ich bin kalt" — the state goes in the dative.' },
          { k: 'fill', q: 'Kannst du ___ helfen?', a: ['mir'], en: 'Can you help me?',
            why: '*helfen* always takes the dative.' },
          { k: 'fill', q: 'Wie geht es ___? (to you, formal)', a: ['Ihnen'], en: 'How are you? (formal)' },
          { k: 'choice', q: 'How do you say "My throat hurts"?',
            opts: ['Ich bin Hals weh.', 'Mir tut der Hals weh.', 'Mein Hals ist weh.'], a: 1 },
          { k: 'trans', en: "I'm bored.", a: ['Mir ist langweilig.'], hint: 'Mir ist …' }
        ] },

      { t: 'recap', kicker: 'Unit 11', title: 'What should stick now',
        points: [
          'Dative pronouns: *mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen*.',
          '*Mir ist kalt* — never "ich bin kalt".',
          '*helfen* and *gefallen* always take the dative.',
          'Pain: *Mir tut der Kopf weh* or *Ich habe Kopfschmerzen*.',
          '*Was fehlt Ihnen?* is what the doctor asks.',
          '*Gute Besserung!* — always say it.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: '___ ist kalt.', a: ['Mir', 'mir'], en: "I'm cold." },
      { k: 'fill', q: 'Kannst du ___ helfen?', a: ['mir'], en: 'Can you help me?' },
      { k: 'fill', q: 'Wie geht es ___? (to you, casual)', a: ['dir'], en: 'How are you?' },
      { k: 'fill', q: 'Ich habe ___. (headache)', a: ['Kopfschmerzen', 'kopfschmerzen'], en: 'I have a headache.' },
      { k: 'choice', q: 'What is wrong with "Ich bin kalt"?',
        opts: ['Nothing.', 'It says you are a cold person.', 'The verb is wrong.'], a: 1 },
      { k: 'choice', q: 'What is the doctor asking with "Was fehlt Ihnen?"',
        opts: ["What's missing from your bag?", "What's wrong with you?", 'What would you like?'], a: 1 },
      { k: 'choice', q: 'What does "Er ist sauer" mean?', opts: ["He's sour.", "He's annoyed.", "He's tired."], a: 1 },
      { k: 'order', en: 'My stomach has hurt since yesterday.',
        words: ['Mir', 'tut', 'seit', 'gestern', 'der', 'Bauch', 'weh'], a: 'Mir tut seit gestern der Bauch weh' },
      { k: 'order', en: 'I need a sick note.', words: ['Ich', 'brauche', 'eine', 'Krankmeldung'],
        a: 'Ich brauche eine Krankmeldung' },
      { k: 'listen', de: 'Mir geht es nicht so gut.',
        a: ['Mir geht es nicht so gut', 'Mir gehts nicht so gut'], en: "I'm not doing so well." },
      { k: 'listen', de: 'Ich habe seit drei Tagen Fieber.', a: ['Ich habe seit drei Tagen Fieber'],
        en: "I've had a fever for three days." },
      { k: 'match', q: 'The body', pairs: [
        ['der Kopf', 'head'], ['der Bauch', 'stomach'], ['der Hals', 'throat'], ['das Bein', 'leg']
      ] },
      { k: 'match', q: 'Feelings', pairs: [
        ['müde', 'tired'], ['sauer', 'annoyed'], ['gestresst', 'stressed'], ['froh', 'glad']
      ] },
      { k: 'trans', en: 'Get well soon!', a: ['Gute Besserung!', 'Gute Besserung'], hint: 'two words' }
    ]
  });
})();
