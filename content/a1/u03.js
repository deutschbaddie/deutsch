/* Unit 3 — Family and people */
(function () {
  window.DE.registerUnit({
    id: 'a1-03', level: 'A1', num: 3, minutes: 36,
    title: 'Family and people',
    subtitle: 'Talking about people · my / your / his / her · jobs · describing someone',
    can: [
      'Describe your family.',
      'Say who something belongs to: mein, dein, sein, ihr.',
      'Describe people — looks and character.',
      'Say what someone does for a living.'
    ],
    slides: [
      { t: 'goal', kicker: 'Unit 3', title: 'Talking about other people',
        lead: 'Almost every real conversation ends up being about people: who that is, what they do, what they’re like.',
        points: [
          'Family words — and why *Geschwister* is not the same as *Bruder/Schwester*.',
          '*mein / dein / sein / ihr* — and when they pick up an extra *-e*.',
          'Jobs — said without "a", unlike English.',
          'Adjectives for describing people without being rude.'
        ] },

      { t: 'vocab', kicker: 'Vocabulary', title: 'The family',
        items: [
          ['die Familie', 'family', 'Meine Familie ist groß.', 'My family is big.'],
          ['die Mutter', 'mother', 'Meine Mutter heißt Sarah.', "My mother's name is Sarah."],
          ['der Vater', 'father', 'Mein Vater arbeitet viel.', 'My father works a lot.'],
          ['die Eltern', 'parents (always plural)', 'Meine Eltern wohnen dort.', 'My parents live there.'],
          ['der Bruder', 'brother', 'Ich habe einen Bruder.', 'I have a brother.'],
          ['die Schwester', 'sister', 'Meine Schwester ist älter.', 'My sister is older.'],
          ['die Geschwister', 'siblings (always plural)', 'Hast du Geschwister?', 'Do you have siblings?'],
          ['die Oma', 'grandma', 'Meine Oma kocht gut.', 'My grandma cooks well.'],
          ['der Opa', 'grandpa', 'Mein Opa war Soldat.', 'My grandpa was a soldier.'],
          ['die Großeltern', 'grandparents', 'Meine Großeltern leben noch.', 'My grandparents are still alive.'],
          ['das Kind', 'child', 'Sie haben zwei Kinder.', 'They have two children.'],
          ['der Sohn', 'son', 'Ihr Sohn ist acht.', 'Their son is eight.'],
          ['die Tochter', 'daughter', 'Seine Tochter studiert.', 'His daughter is at university.'],
          ['der Freund', 'friend (male) — or boyfriend', 'Das ist mein Freund Tim.', "That's my friend Tim."],
          ['die Freundin', 'friend (female) — or girlfriend', 'Meine Freundin kommt später.', 'My girlfriend is coming later.'],
          ['der Mann', 'man — and: husband', 'Ihr Mann ist Arzt.', 'Her husband is a doctor.'],
          ['die Frau', 'woman — and: wife', 'Seine Frau heißt Lena.', "His wife's name is Lena."]
        ],
        note: '*mein Freund* means "my friend" or "my boyfriend" depending on tone. To be unambiguous: *ein Freund von mir* = just a friend.',
        noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammar', title: 'mein, dein, sein, ihr — whose is it',
        body: 'These say who something belongs to. The base form is easy — the ending depends on the *thing*, not on the owner.\nRule for now: *die*-words and plurals add an *-e*. Everything else takes nothing.',
        table: {
          head: ['Owner', 'Base', 'with der/das word', 'with die word / plural'],
          rows: [
            ['ich — my', 'mein', 'mein Bruder', 'mein*e* Schwester'],
            ['du — your', 'dein', 'dein Vater', 'dein*e* Eltern'],
            ['er — his', 'sein', 'sein Sohn', 'sein*e* Tochter'],
            ['sie — her', 'ihr', 'ihr Mann', 'ihr*e* Kinder'],
            ['wir — our', 'unser', 'unser Haus', 'unser*e* Familie'],
            ['ihr — your (you lot)', 'euer', 'euer Auto', 'eur*e* Freunde'],
            ['sie/Sie — their / your (formal)', 'ihr / Ihr', 'Ihr Name', 'Ihr*e* Nummer']
          ]
        },
        examples: [
          ['*Mein* Bruder heißt Leon.', 'My brother is called Leon.'],
          ['*Meine* Schwester ist zwanzig.', 'My sister is twenty.'],
          ['*Ihre* Eltern wohnen in Köln.', 'Her parents live in Cologne.'],
          ['Wie ist *Ihre* Telefonnummer?', 'What is your phone number? (formal)']
        ],
        note: '*sein* = his, *ihr* = her. Confusing, because *ihr* also means "you lot". Context nearly always sorts it out.' },

      { t: 'dialog', kicker: 'Dialogue', title: 'Showing photos',
        setting: 'Emerson is showing Lena pictures on his phone.',
        lines: [
          ['Lena', 'Ist das deine Familie?', 'Is that your family?'],
          ['Emerson', 'Ja. Das sind meine Eltern, und das ist meine Schwester.', "Yes. Those are my parents, and that's my sister."],
          ['Lena', 'Wie alt ist sie?', 'How old is she?'],
          ['Emerson', 'Sie ist zwanzig. Sie studiert in Chicago.', "She's twenty. She studies in Chicago."],
          ['Lena', 'Und der Mann da?', 'And the man there?'],
          ['Emerson', 'Das ist mein Opa. Er war beim Militär.', "That's my grandpa. He was in the military."],
          ['Lena', 'Krass. Sieht streng aus.', 'Wow. Looks strict.'],
          ['Emerson', 'Ist er auch. Aber er ist sehr nett zu mir.', "He is too. But he's very nice to me."],
          ['Lena', 'Hast du noch Geschwister?', 'Do you have any other siblings?'],
          ['Emerson', 'Nein, nur die eine Schwester.', 'No, just the one sister.']
        ],
        note: '*Das sind* for plural, *das ist* for singular — "das" stays put, only the verb changes.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Describing people',
        items: [
          ['nett', 'nice, kind', 'Sie ist echt nett.', "She's really nice."],
          ['freundlich', 'friendly', 'Ein freundlicher Typ.', 'A friendly guy.'],
          ['lustig', 'funny', 'Mein Bruder ist lustig.', 'My brother is funny.'],
          ['ruhig', 'quiet, calm', 'Er ist eher ruhig.', "He's rather quiet."],
          ['laut', 'loud', 'Meine Familie ist laut.', 'My family is loud.'],
          ['streng', 'strict', 'Meine Mutter ist streng.', 'My mother is strict.'],
          ['klug', 'smart', 'Sie ist sehr klug.', "She's very smart."],
          ['jung', 'young', 'Er ist noch jung.', "He's still young."],
          ['alt', 'old', 'Wie alt bist du?', 'How old are you?'],
          ['groß', 'tall, big', 'Mein Vater ist groß.', 'My father is tall.'],
          ['klein', 'small, short', 'Ich bin ziemlich klein.', "I'm fairly short."],
          ['müde', 'tired', 'Ich bin müde.', "I'm tired."],
          ['sympathisch', 'likeable', 'Der ist mir sympathisch.', 'I like him (as a person).'],
          ['anstrengend', 'exhausting, hard work (of a person)', 'Sie ist manchmal anstrengend.', 'She can be a handful.'],
          ['sehr', 'very', 'sehr gut', 'very good'],
          ['ziemlich', 'quite, fairly', 'ziemlich groß', 'pretty tall'],
          ['ein bisschen', 'a little', 'ein bisschen müde', 'a little tired']
        ],
        note: 'To avoid insulting someone: *anstrengend* rather than "nervig" (annoying), *ruhig* rather than "langweilig" (boring). German is blunt, not brutal.' },

      { t: 'vocab', kicker: 'Vocabulary', title: 'Jobs',
        items: [
          ['der Beruf', 'profession', 'Was sind Sie von Beruf?', 'What do you do for a living?'],
          ['der Lehrer / die Lehrerin', 'teacher', 'Meine Mutter ist Lehrerin.', 'My mother is a teacher.'],
          ['der Arzt / die Ärztin', 'doctor', 'Er ist Arzt.', "He's a doctor."],
          ['der Student / die Studentin', 'university student', 'Ich bin Student.', "I'm a student."],
          ['der Schüler / die Schülerin', 'pupil (at school)', 'Sie ist noch Schülerin.', "She's still at school."],
          ['der Verkäufer / die Verkäuferin', 'shop assistant', 'Er arbeitet als Verkäufer.', 'He works as a shop assistant.'],
          ['der Ingenieur / die Ingenieurin', 'engineer', 'Mein Vater ist Ingenieur.', 'My father is an engineer.'],
          ['der Koch / die Köchin', 'cook, chef', 'Sie ist Köchin.', "She's a chef."],
          ['der Polizist / die Polizistin', 'police officer', 'Sein Bruder ist Polizist.', 'His brother is a police officer.'],
          ['arbeiten', 'to work', 'Wo arbeitest du?', 'Where do you work?'],
          ['studieren', 'to study (at university)', 'Ich studiere Informatik.', 'I study computer science.'],
          ['die Arbeit', 'work, job', 'Ich muss zur Arbeit.', 'I have to go to work.'],
          ['die Firma', 'company', 'Bei welcher Firma?', 'At which company?']
        ],
        note: 'Jobs take *no article*: "Ich bin Student." Not "ich bin ein Student." One of the most common beginner mistakes.',
        noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammar', title: 'Regular verbs — the master pattern',
        body: 'Most German verbs follow one single pattern. Take the stem (*wohn*en → wohn) and add the ending. This covers hundreds of verbs.',
        table: {
          head: ['Person', 'Ending', 'wohnen (to live)', 'arbeiten (to work)'],
          rows: [
            ['ich', '-e', 'wohn*e*', 'arbeit*e*'],
            ['du', '-st', 'wohn*st*', 'arbeit*est*'],
            ['er/sie/es', '-t', 'wohn*t*', 'arbeit*et*'],
            ['wir', '-en', 'wohn*en*', 'arbeit*en*'],
            ['ihr', '-t', 'wohn*t*', 'arbeit*et*'],
            ['sie/Sie', '-en', 'wohn*en*', 'arbeit*en*']
          ]
        },
        examples: [
          ['Ich arbeite bei Aldi.', 'I work at Aldi.'],
          ['Wo wohnst du?', 'Where do you live?'],
          ['Sie studiert Medizin.', 'She studies medicine.']
        ],
        note: 'If the stem ends in *-t* or *-d* (arbeit-, find-, red-), German slips in an extra *e* — otherwise you couldn’t pronounce it: du arbeit*e*st.' },

      { t: 'street', title: 'How young people talk about people',
        lead: 'Family and friends have their own vocabulary that no textbook prints.',
        items: [
          ['meine Leute', 'my people / my crew', 'Also used for your own family: "Ich war bei meinen Leuten."'],
          ['Macker', 'boyfriend / guy', 'On the 2026 slang-word shortlist. "Ist das dein Macker?"'],
          ['der Typ / die Frau da', 'that guy / that woman', '*Typ* is completely normal for "guy", not an insult.'],
          ['mein Homie / meine Homies', 'my close friends', 'Borrowed from English, used as ordinary German.'],
          ['Bruder', 'bro — not an actual brother', 'Like "Digga". "Bruder, hör auf." — Bro, stop.'],
          ['Sie ist voll nett', "she's super nice", '*voll* instead of *sehr* — the intensifier of youth slang.'],
          ['Der ist so cringe', "he's so cringe", '"cringe" has become a fully working German adjective.'],
          ['Ehrenmann / Ehrenfrau', 'absolute legend', 'For someone who did something genuinely decent.']
        ] },

      { t: 'pattern', kicker: 'Sentence builder', title: 'This is …',
        frame: 'Das ist {}.', enFrame: 'That is {}.',
        slotLabel: 'person',
        swaps: [
          ['mein Bruder', 'my brother'], ['meine Schwester', 'my sister'], ['meine Mutter', 'my mother'],
          ['mein bester Freund', 'my best friend'], ['ihr Mann', 'her husband'], ['unsere Oma', 'our grandma']
        ],
        note: 'For plural it becomes *Das sind*: "Das sind meine Eltern."' },

      { t: 'drill', kicker: 'Try it now', title: 'Possessive round',
        ex: [
          { k: 'fill', q: 'Das ist ___ Schwester. (my)', a: ['meine'], en: 'That is my sister.',
            why: '*Schwester* is a *die*-word → mein*e*.' },
          { k: 'fill', q: 'Das ist ___ Bruder. (my)', a: ['mein'], en: 'That is my brother.',
            why: '*Bruder* is a *der*-word → mein, no ending.' },
          { k: 'choice', q: 'How do you say "I am a teacher"?',
            opts: ['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'Ich habe Lehrer.'], a: 1,
            why: 'German jobs take no article.' },
          { k: 'fill', q: 'Du ___ bei einer Firma in Berlin.', a: ['arbeitest'], en: 'You work at a company in Berlin.',
            why: 'Stem ends in -t → extra e: du arbeit*e*st.' },
          { k: 'order', en: 'My parents live in Cologne.', words: ['Meine', 'Eltern', 'wohnen', 'in', 'Köln'],
            a: 'Meine Eltern wohnen in Köln' }
        ] },

      { t: 'recap', kicker: 'Unit 3', title: 'What should stick now',
        points: [
          '*die Eltern*, *die Geschwister*, *die Großeltern* only exist in the plural.',
          'Possessives: *die*-words and plurals add *-e* — mein*e* Schwester.',
          'Jobs take no article: "Ich bin Student."',
          'Regular verb endings: -e, -st, -t, -en, -t, -en.',
          'Stem ending in -t/-d → extra e: du arbeit*e*st, er find*e*t.',
          '*voll* is the slang version of *sehr*.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Das ist ___ Mutter. (my)', a: ['meine'], en: 'That is my mother.', why: '*die* Mutter → mein*e*.' },
      { k: 'fill', q: 'Das ist ___ Vater. (my)', a: ['mein'], en: 'That is my father.', why: '*der* Vater → mein.' },
      { k: 'fill', q: '___ Eltern wohnen in Hamburg. (her)', a: ['ihre'], en: 'Her parents live in Hamburg.',
        why: 'Plural → *ihre*.' },
      { k: 'choice', q: 'What does "sein Sohn" mean?', opts: ['her son', 'his son', 'their son'], a: 1,
        why: '*sein* = his, *ihr* = her.' },
      { k: 'choice', q: 'Which sentence is correct?',
        opts: ['Meine Schwester ist eine Ärztin.', 'Meine Schwester ist Ärztin.', 'Meine Schwester hat Ärztin.'], a: 1,
        why: 'No article with jobs.' },
      { k: 'fill', q: 'Er ___ in einer Firma. (arbeiten)', a: ['arbeitet'], en: 'He works at a company.' },
      { k: 'fill', q: 'Ich ___ Informatik. (studieren)', a: ['studiere'], en: 'I study computer science.' },
      { k: 'order', en: 'Do you have siblings?', words: ['Hast', 'du', 'Geschwister'], a: 'Hast du Geschwister' },
      { k: 'order', en: 'My brother is twenty years old.', words: ['Mein', 'Bruder', 'ist', 'zwanzig', 'Jahre', 'alt'],
        a: 'Mein Bruder ist zwanzig Jahre alt' },
      { k: 'listen', de: 'Meine Schwester ist sehr nett.', a: ['Meine Schwester ist sehr nett'], en: 'My sister is very nice.' },
      { k: 'listen', de: 'Hast du Geschwister?', a: ['Hast du Geschwister'], en: 'Do you have siblings?' },
      { k: 'match', q: 'Family', pairs: [
        ['die Eltern', 'parents'], ['die Geschwister', 'siblings'], ['die Tochter', 'daughter'], ['der Opa', 'grandpa']
      ] },
      { k: 'match', q: 'Character', pairs: [
        ['streng', 'strict'], ['lustig', 'funny'], ['ruhig', 'quiet'], ['anstrengend', 'hard work / a handful']
      ] },
      { k: 'trans', en: 'My father is an engineer.', a: ['Mein Vater ist Ingenieur.'], hint: 'No article with the job.' }
    ]
  });
})();
