/* Einheit 3 — Familie und Leute */
(function () {
  window.DE.registerUnit({
    id: 'a1-03', level: 'A1', num: 3, minutes: 36,
    title: 'Familie und Leute',
    subtitle: 'Über Menschen sprechen · Possessivartikel · Berufe · Adjektive',
    can: [
      'Du kannst deine Familie beschreiben.',
      'Du kannst sagen, wem etwas gehört: mein, dein, sein, ihr.',
      'Du kannst Leute beschreiben — Aussehen und Charakter.',
      'Du kannst sagen, was jemand beruflich macht.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 3', title: 'Über andere reden',
        lead: 'Fast jedes echte Gespräch dreht sich irgendwann um Leute: wer das ist, was die machen, wie die so sind.',
        points: [
          'Familienwörter — und der Unterschied zwischen *Geschwister* und *Bruder/Schwester*.',
          '*mein / dein / sein / ihr* — und warum da manchmal ein *-e* drankommt.',
          'Berufe sagen — ohne Artikel, anders als im Englischen.',
          'Adjektive, mit denen du Menschen beschreibst, ohne unhöflich zu werden.'
        ] },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Die Familie',
        items: [
          ['die Familie', 'family', 'Meine Familie ist groß.', 'My family is big.'],
          ['die Mutter', 'mother', 'Meine Mutter heißt Sarah.', 'My mother’s name is Sarah.'],
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
          ['der Freund', 'friend (male) — or boyfriend', 'Das ist mein Freund Tim.', 'That’s my friend Tim.'],
          ['die Freundin', 'friend (female) — or girlfriend', 'Meine Freundin kommt später.', 'My girlfriend is coming later.'],
          ['der Mann', 'man — and: husband', 'Ihr Mann ist Arzt.', 'Her husband is a doctor.'],
          ['die Frau', 'woman — and: wife', 'Seine Frau heißt Lena.', 'His wife’s name is Lena.']
        ],
        note: '*mein Freund* heißt je nach Ton „my friend“ oder „my boyfriend“. Willst du das eindeutig machen: *ein Freund von mir* = just a friend.', noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammatik', title: 'mein, dein, sein, ihr',
        body: 'Possessivartikel sagen, wem etwas gehört. Die Grundform ist einfach — die Endung richtet sich nach dem *Ding*, nicht nach dem Besitzer.\nRegel fürs Erste: bei *die*-Wörtern und im Plural kommt ein *-e* dran. Sonst nichts.',
        table: {
          head: ['Besitzer', 'Grundform', 'der/das-Wort', 'die-Wort / Plural'],
          rows: [
            ['ich', 'mein', 'mein Bruder', 'mein*e* Schwester'],
            ['du', 'dein', 'dein Vater', 'dein*e* Eltern'],
            ['er', 'sein', 'sein Sohn', 'sein*e* Tochter'],
            ['sie', 'ihr', 'ihr Mann', 'ihr*e* Kinder'],
            ['wir', 'unser', 'unser Haus', 'unser*e* Familie'],
            ['ihr', 'euer', 'euer Auto', 'eur*e* Freunde'],
            ['sie/Sie', 'ihr / Ihr', 'Ihr Name', 'Ihr*e* Nummer']
          ]
        },
        examples: [
          ['*Mein* Bruder heißt Leon.', 'My brother is called Leon.'],
          ['*Meine* Schwester ist zwanzig.', 'My sister is twenty.'],
          ['*Ihre* Eltern wohnen in Köln.', 'Her parents live in Cologne.'],
          ['Wie ist *Ihre* Telefonnummer?', 'What is your phone number? (formal)']
        ],
        note: '*sein* = his, *ihr* = her. Das verwirrt, weil *ihr* auch „you all“ heißt. Der Kontext klärt es fast immer.' },

      { t: 'dialog', kicker: 'Dialog', title: 'Fotos zeigen',
        setting: 'Emerson zeigt Lena Bilder auf dem Handy.',
        lines: [
          ['Lena', 'Ist das deine Familie?', 'Is that your family?'],
          ['Emerson', 'Ja. Das sind meine Eltern, und das ist meine Schwester.', 'Yes. Those are my parents, and that’s my sister.'],
          ['Lena', 'Wie alt ist sie?', 'How old is she?'],
          ['Emerson', 'Sie ist zwanzig. Sie studiert in Chicago.', 'She’s twenty. She studies in Chicago.'],
          ['Lena', 'Und der Mann da?', 'And the man there?'],
          ['Emerson', 'Das ist mein Opa. Er war beim Militär.', 'That’s my grandpa. He was in the military.'],
          ['Lena', 'Krass. Sieht streng aus.', 'Wow. Looks strict.'],
          ['Emerson', 'Ist er auch. Aber er ist sehr nett zu mir.', 'He is too. But he’s very nice to me.'],
          ['Lena', 'Hast du noch Geschwister?', 'Do you have any other siblings?'],
          ['Emerson', 'Nein, nur die eine Schwester.', 'No, just the one sister.']
        ],
        note: '*Das sind* für Plural, *das ist* für Singular — „das“ bleibt gleich, nur das Verb ändert sich.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Menschen beschreiben',
        items: [
          ['nett', 'nice, kind', 'Sie ist echt nett.', 'She’s really nice.'],
          ['freundlich', 'friendly', 'Ein freundlicher Typ.', 'A friendly guy.'],
          ['lustig', 'funny', 'Mein Bruder ist lustig.', 'My brother is funny.'],
          ['ruhig', 'quiet, calm', 'Er ist eher ruhig.', 'He’s rather quiet.'],
          ['laut', 'loud', 'Meine Familie ist laut.', 'My family is loud.'],
          ['streng', 'strict', 'Meine Mutter ist streng.', 'My mother is strict.'],
          ['klug', 'smart', 'Sie ist sehr klug.', 'She’s very smart.'],
          ['jung', 'young', 'Er ist noch jung.', 'He’s still young.'],
          ['alt', 'old', 'Wie alt bist du?', 'How old are you?'],
          ['groß', 'tall, big', 'Mein Vater ist groß.', 'My father is tall.'],
          ['klein', 'small, short', 'Ich bin ziemlich klein.', 'I’m fairly short.'],
          ['müde', 'tired', 'Ich bin müde.', 'I’m tired.'],
          ['sympathisch', 'likeable', 'Der ist mir sympathisch.', 'I like him (as a person).'],
          ['anstrengend', 'exhausting, hard work (of a person)', 'Sie ist manchmal anstrengend.', 'She can be a handful.'],
          ['sehr', 'very', 'sehr gut', 'very good'],
          ['ziemlich', 'quite, fairly', 'ziemlich groß', 'pretty tall'],
          ['ein bisschen', 'a little', 'ein bisschen müde', 'a little tired']
        ],
        note: 'Willst du jemanden nicht beleidigen: *anstrengend* statt „nervig“, *ruhig* statt „langweilig“. Deutsch ist direkt, aber nicht schonungslos.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Berufe',
        items: [
          ['der Beruf', 'profession', 'Was sind Sie von Beruf?', 'What do you do for a living?'],
          ['der Lehrer / die Lehrerin', 'teacher', 'Meine Mutter ist Lehrerin.', 'My mother is a teacher.'],
          ['der Arzt / die Ärztin', 'doctor', 'Er ist Arzt.', 'He’s a doctor.'],
          ['der Student / die Studentin', 'university student', 'Ich bin Student.', 'I’m a student.'],
          ['der Schüler / die Schülerin', 'pupil (school)', 'Sie ist noch Schülerin.', 'She’s still in school.'],
          ['der Verkäufer / die Verkäuferin', 'shop assistant', 'Er arbeitet als Verkäufer.', 'He works as a shop assistant.'],
          ['der Ingenieur / die Ingenieurin', 'engineer', 'Mein Vater ist Ingenieur.', 'My father is an engineer.'],
          ['der Koch / die Köchin', 'cook, chef', 'Sie ist Köchin.', 'She’s a chef.'],
          ['der Polizist / die Polizistin', 'police officer', 'Sein Bruder ist Polizist.', 'His brother is a police officer.'],
          ['arbeiten', 'to work', 'Wo arbeitest du?', 'Where do you work?'],
          ['studieren', 'to study (at university)', 'Ich studiere Informatik.', 'I study computer science.'],
          ['die Arbeit', 'work, job', 'Ich muss zur Arbeit.', 'I have to go to work.'],
          ['die Firma', 'company', 'Bei welcher Firma?', 'At which company?']
        ],
        note: 'Berufe kommen *ohne Artikel*: „Ich bin Student.“ Nicht „ich bin ein Student“. Das ist einer der häufigsten Anfängerfehler.', noteKind: 'warn' },

      { t: 'grammar', kicker: 'Grammatik', title: 'Regelmäßige Verben — das Grundmuster',
        body: 'Die meisten deutschen Verben funktionieren nach einem einzigen Muster. Nimm den Stamm (*wohn*en → wohn) und häng die Endung dran. Das gilt für hunderte Verben.',
        table: {
          head: ['Person', 'Endung', 'wohnen', 'arbeiten'],
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
        note: 'Endet der Stamm auf *-t* oder *-d* (arbeit-, find-, red-), schiebt Deutsch ein *e* ein, sonst kann man es nicht aussprechen: du arbeit*e*st.' },

      { t: 'street', title: 'Wie junge Leute über Leute reden',
        lead: 'Familie und Freunde haben eigene Wörter — die stehen in keinem Lehrbuch.',
        items: [
          ['meine Leute', 'my people / my crew', 'Auch für die eigene Familie: „Ich war bei meinen Leuten.“'],
          ['Macker', 'boyfriend / guy', 'Stand 2026 auf der Jugendwort-Liste. „Ist das dein Macker?“'],
          ['der Typ / die Frau da', 'that guy / that woman', '*Typ* ist völlig normal für „guy“, nicht abwertend.'],
          ['mein Homie / meine Homies', 'my close friends', 'Aus dem Englischen, wird ganz normal mitbenutzt.'],
          ['Bruder', 'bro — not a real brother', 'Wie „Digga“. „Bruder, hör auf.“'],
          ['Sie ist voll nett', "she's super nice", '*voll* statt *sehr* — das Intensivwort der Jugendsprache.'],
          ['Der ist so cringe', "he's so cringe", '„cringe“ ist im Deutschen ein vollwertiges Adjektiv geworden.'],
          ['Ehrenmann / Ehrenfrau', 'absolute legend', 'Für jemanden, der etwas wirklich Anständiges getan hat.']
        ] },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Das ist …',
        frame: 'Das ist {}.', enFrame: 'That is {}.',
        slotLabel: 'Person',
        swaps: [
          ['mein Bruder', 'my brother'], ['meine Schwester', 'my sister'], ['meine Mutter', 'my mother'],
          ['mein bester Freund', 'my best friend'], ['ihr Mann', 'her husband'], ['unsere Oma', 'our grandma']
        ],
        note: 'Für Plural wird daraus *Das sind*: „Das sind meine Eltern.“' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Possessiv-Runde',
        ex: [
          { k: 'fill', q: 'Das ist ___ Schwester. (my)', a: ['meine'], en: 'That is my sister.',
            why: '*Schwester* ist ein *die*-Wort → mein*e*.' },
          { k: 'fill', q: 'Das ist ___ Bruder. (my)', a: ['mein'], en: 'That is my brother.',
            why: '*Bruder* ist ein *der*-Wort → mein, ohne Endung.' },
          { k: 'choice', q: 'Wie sagst du „I am a teacher“?',
            opts: ['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'Ich habe Lehrer.'], a: 1,
            why: 'Berufe stehen im Deutschen ohne Artikel.' },
          { k: 'fill', q: 'Du ___ bei einer Firma in Berlin.', a: ['arbeitest'], en: 'You work at a company in Berlin.',
            why: 'Stamm auf -t → Extra-e: du arbeit*e*st.' },
          { k: 'order', en: 'My parents live in Cologne.', words: ['Meine', 'Eltern', 'wohnen', 'in', 'Köln'], a: 'Meine Eltern wohnen in Köln' }
        ] },

      { t: 'recap', kicker: 'Einheit 3', title: 'Was jetzt sitzen sollte',
        points: [
          '*die Eltern*, *die Geschwister*, *die Großeltern* gibt es nur im Plural.',
          'Possessiv: bei *die*-Wörtern und Plural kommt *-e* dran — mein*e* Schwester.',
          'Berufe ohne Artikel: „Ich bin Student.“',
          'Regelmäßige Verben: -e, -st, -t, -en, -t, -en.',
          'Stamm auf -t/-d → Extra-e: du arbeit*e*st, er find*e*t.',
          '*voll* ist das jugendsprachliche *sehr*.'
        ] }
    ],
    quiz: [
      { k: 'fill', q: 'Das ist ___ Mutter. (my)', a: ['meine'], en: 'That is my mother.', why: '*die* Mutter → mein*e*.' },
      { k: 'fill', q: 'Das ist ___ Vater. (my)', a: ['mein'], en: 'That is my father.', why: '*der* Vater → mein.' },
      { k: 'fill', q: '___ Eltern wohnen in Hamburg. (her)', a: ['ihre'], en: 'Her parents live in Hamburg.',
        why: 'Plural → *ihre*.' },
      { k: 'choice', q: '„Sein Sohn“ bedeutet:', opts: ['her son', 'his son', 'their son'], a: 1,
        why: '*sein* = his, *ihr* = her.' },
      { k: 'choice', q: 'Welcher Satz ist richtig?',
        opts: ['Meine Schwester ist eine Ärztin.', 'Meine Schwester ist Ärztin.', 'Meine Schwester hat Ärztin.'], a: 1,
        why: 'Berufe ohne Artikel.' },
      { k: 'fill', q: 'Er ___ in einer Firma. (arbeiten)', a: ['arbeitet'], en: 'He works at a company.' },
      { k: 'fill', q: 'Ich ___ Informatik. (studieren)', a: ['studiere'], en: 'I study computer science.' },
      { k: 'order', en: 'Do you have siblings?', words: ['Hast', 'du', 'Geschwister'], a: 'Hast du Geschwister' },
      { k: 'order', en: 'My brother is twenty years old.', words: ['Mein', 'Bruder', 'ist', 'zwanzig', 'Jahre', 'alt'], a: 'Mein Bruder ist zwanzig Jahre alt' },
      { k: 'listen', de: 'Meine Schwester ist sehr nett.', a: ['Meine Schwester ist sehr nett'], en: 'My sister is very nice.' },
      { k: 'listen', de: 'Hast du Geschwister?', a: ['Hast du Geschwister'], en: 'Do you have siblings?' },
      { k: 'match', q: 'Familie', pairs: [
        ['die Eltern', 'parents'], ['die Geschwister', 'siblings'], ['die Tochter', 'daughter'], ['der Opa', 'grandpa']
      ] },
      { k: 'match', q: 'Charakter', pairs: [
        ['streng', 'strict'], ['lustig', 'funny'], ['ruhig', 'quiet'], ['anstrengend', 'hard work / a handful']
      ] },
      { k: 'trans', en: 'My father is an engineer.', a: ['Mein Vater ist Ingenieur.'], hint: 'Kein Artikel beim Beruf.' }
    ]
  });
})();
