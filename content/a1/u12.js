/* Einheit 12 — Perfekt, Wetter, Reisen */
(function () {
  window.DE.registerUnit({
    id: 'a1-12', level: 'A1', num: 12, minutes: 42,
    title: 'Was war gestern?',
    subtitle: 'Das Perfekt · Wetter · vom Wochenende erzählen',
    can: [
      'Du kannst über die Vergangenheit sprechen.',
      'Du weißt, wann *haben* und wann *sein* kommt.',
      'Du kannst über das Wetter reden — das deutscheste Smalltalk-Thema überhaupt.',
      'Du kannst erzählen, was du am Wochenende gemacht hast.'
    ],
    slides: [
      { t: 'goal', kicker: 'Einheit 12 · Finale', title: 'Die Vergangenheit — und damit ist A1 komplett',
        lead: 'Das ist die letzte Einheit. Danach kannst du über Gegenwart *und* Vergangenheit sprechen, und das ist die Schwelle, ab der echte Gespräche möglich werden.',
        points: [
          'Das *Perfekt* — die Vergangenheit, die Deutsche tatsächlich sprechen.',
          '*haben* oder *sein*? Die Regel ist kürzer, als du denkst.',
          'Partizip II: ge-…-t bei regelmäßigen, ge-…-en bei unregelmäßigen Verben.',
          'Wetter, Urlaub, Wochenende — womit du das Perfekt sofort benutzt.'
        ] },

      { t: 'grammar', kicker: 'Die Kernidee', title: 'Das Perfekt — zwei Teile, eine Klammer',
        body: 'Deutsch hat mehrere Vergangenheitsformen. Im *gesprochenen* Deutsch benutzt man fast immer das Perfekt. Es besteht aus zwei Teilen:\n*haben* oder *sein* an Position 2 — und das *Partizip II* ganz am Satzende. Wieder eine Klammer, wie bei den Modalverben.',
        table: {
          head: ['Position 1', 'haben/sein', 'Mitte', 'Ende (Partizip)'],
          rows: [
            ['Ich', '*habe*', 'gestern Fußball', '*gespielt*.'],
            ['Wir', '*sind*', 'nach Berlin', '*gefahren*.'],
            ['Was', '*hast*', 'du am Wochenende', '*gemacht*?'],
            ['Gestern', '*bin*', 'ich früh', '*aufgestanden*.'],
            ['Ich', '*habe*', 'das nicht', '*verstanden*.']
          ]
        },
        examples: [
          ['Ich *habe* gut *geschlafen*.', 'I slept well.'],
          ['Wir *sind* ins Kino *gegangen*.', 'We went to the cinema.'],
          ['*Hast* du schon *gegessen*?', 'Have you eaten yet?']
        ],
        note: 'Englisch unterscheidet „I played“ und „I have played“. Deutsch nimmt im Gespräch für beides das Perfekt. Eine Sorge weniger.', noteKind: 'win' },

      { t: 'grammar', kicker: 'Grammatik', title: 'haben oder sein?',
        body: 'Die Mehrheit aller Verben nimmt *haben*. Nur eine klar umrissene Gruppe nimmt *sein*:\n1. Verben der *Bewegung von A nach B*: gehen, fahren, fliegen, kommen, laufen, reisen.\n2. Verben der *Zustandsänderung*: aufstehen, einschlafen, aufwachen, sterben, werden.\n3. Drei Einzelgänger: *sein*, *bleiben*, *passieren*.\nAlles andere: haben.',
        table: {
          head: ['sein', 'Beispiel', 'haben', 'Beispiel'],
          rows: [
            ['gehen', 'Ich *bin* gegangen.', 'machen', 'Ich *habe* gemacht.'],
            ['fahren', 'Wir *sind* gefahren.', 'essen', 'Ich *habe* gegessen.'],
            ['kommen', 'Er *ist* gekommen.', 'sehen', 'Ich *habe* gesehen.'],
            ['fliegen', 'Sie *ist* geflogen.', 'arbeiten', 'Ich *habe* gearbeitet.'],
            ['aufstehen', 'Ich *bin* aufgestanden.', 'kaufen', 'Ich *habe* gekauft.'],
            ['bleiben', 'Ich *bin* geblieben.', 'trinken', 'Ich *habe* getrunken.'],
            ['sein', 'Ich *bin* gewesen.', 'schlafen', 'Ich *habe* geschlafen.']
          ]
        },
        examples: [
          ['Ich bin nach Hause gegangen.', 'I went home.'],
          ['Ich habe zu Hause gearbeitet.', 'I worked at home.'],
          ['Wir sind zwei Tage geblieben.', 'We stayed two days.']
        ],
        note: 'Faustregel: Wenn du dich *dabei irgendwohin bewegst* oder dich *veränderst*, nimm *sein*. Sonst *haben*.' },

      { t: 'grammar', kicker: 'Grammatik', title: 'Das Partizip II bauen',
        body: 'Drei Muster, und du erkennst sie am Aussehen.\n*Regelmäßig*: ge + Stamm + t. machen → ge*mach*t.\n*Unregelmäßig*: ge + (oft veränderter) Stamm + en. trinken → ge*trunk*en.\n*Trennbar*: das ge- rutscht in die Mitte. aufstehen → auf*ge*standen.\n*Kein ge-*: Verben auf -ieren und Verben mit untrennbarer Vorsilbe (be-, ver-, er-). studieren → studiert, verstehen → verstanden.',
        table: {
          head: ['Infinitiv', 'Partizip II', 'Muster'],
          rows: [
            ['machen', '*gemacht*', 'ge-…-t'],
            ['spielen', '*gespielt*', 'ge-…-t'],
            ['arbeiten', '*gearbeitet*', 'ge-…-et'],
            ['essen', '*gegessen*', 'ge-…-en'],
            ['trinken', '*getrunken*', 'Vokal ändert sich'],
            ['gehen', '*gegangen*', 'Vokal ändert sich'],
            ['schreiben', '*geschrieben*', 'Vokal ändert sich'],
            ['aufstehen', '*aufgestanden*', 'ge- in der Mitte'],
            ['einkaufen', '*eingekauft*', 'ge- in der Mitte'],
            ['studieren', '*studiert*', 'kein ge-'],
            ['verstehen', '*verstanden*', 'kein ge-'],
            ['bezahlen', '*bezahlt*', 'kein ge-']
          ]
        },
        examples: [
          ['Ich habe das nicht verstanden.', "I didn't understand that."],
          ['Wir haben gestern eingekauft.', 'We went shopping yesterday.'],
          ['Ich bin um sechs aufgestanden.', 'I got up at six.']
        ],
        note: 'Die unregelmäßigen musst du einzeln lernen — aber es sind nur etwa 20, die du auf A1 wirklich brauchst. Die stehen alle im Trainer.' },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Die 20 wichtigsten Partizipien',
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
          ['gegangen (gehen) — sein', 'gone', 'Ich bin nach Hause gegangen.', 'I went home.'],
          ['gefahren (fahren) — sein', 'travelled, driven', 'Wir sind nach Köln gefahren.', 'We went to Cologne.'],
          ['gekommen (kommen) — sein', 'come', 'Sie ist spät gekommen.', 'She came late.'],
          ['geblieben (bleiben) — sein', 'stayed', 'Ich bin zu Hause geblieben.', 'I stayed home.'],
          ['gewesen (sein) — sein', 'been', 'Ich bin in Berlin gewesen.', "I've been to Berlin."],
          ['gehabt (haben)', 'had', 'Ich habe keine Zeit gehabt.', "I didn't have time."]
        ] },

      { t: 'vocab', kicker: 'Wortschatz', title: 'Wetter',
        items: [
          ['das Wetter', 'weather', 'Wie ist das Wetter?', "What's the weather like?"],
          ['die Sonne', 'sun', 'Die Sonne scheint.', 'The sun is shining.'],
          ['sonnig', 'sunny', 'Heute ist es sonnig.', "It's sunny today."],
          ['der Regen', 'rain', 'Der Regen hört nicht auf.', 'The rain won’t stop.'],
          ['regnen', 'to rain', 'Es regnet.', "It's raining."],
          ['der Schnee', 'snow', 'Es liegt Schnee.', 'There’s snow on the ground.'],
          ['schneien', 'to snow', 'Es schneit.', "It's snowing."],
          ['der Wind', 'wind', 'Der Wind ist stark.', 'The wind is strong.'],
          ['die Wolke', 'cloud', 'Viele Wolken heute.', 'Lots of clouds today.'],
          ['bewölkt', 'cloudy', 'Morgen wird es bewölkt.', 'Tomorrow will be cloudy.'],
          ['heiß', 'hot', 'Es ist heiß.', "It's hot."],
          ['kalt', 'cold', 'Zieh dich warm an, es ist kalt.', 'Dress warm, it’s cold.'],
          ['der Grad', 'degree', 'Zehn Grad.', 'Ten degrees.'],
          ['der Frühling', 'spring', 'Im Frühling wird es schön.', 'In spring it gets nice.'],
          ['der Sommer', 'summer', 'Im Sommer fahren wir weg.', 'In summer we go away.'],
          ['der Herbst', 'autumn', 'Der Herbst ist grau.', 'Autumn is grey.'],
          ['der Winter', 'winter', 'Der Winter ist lang.', 'The winter is long.']
        ],
        note: 'Wetter ist in Deutschland *das* Smalltalk-Thema. „Schönes Wetter heute, ne?“ ist ein kompletter, sozial akzeptierter Gesprächsanfang.' },

      { t: 'dialog', kicker: 'Dialog', title: 'Wie war dein Wochenende?',
        setting: 'Montagmorgen. Zwei Kollegen.',
        lines: [
          ['Nina', 'Na, wie war dein Wochenende?', 'So, how was your weekend?'],
          ['Emerson', 'Ganz gut. Ich war bei Freunden in Hamburg.', 'Pretty good. I was at friends’ in Hamburg.'],
          ['Nina', 'Oh, schön! Wie bist du hingefahren?', 'Oh, nice! How did you get there?'],
          ['Emerson', 'Mit dem Zug. Hat vier Stunden gedauert.', 'By train. It took four hours.'],
          ['Nina', 'Und was habt ihr gemacht?', 'And what did you guys do?'],
          ['Emerson', 'Am Samstag sind wir in die Stadt gegangen, und abends haben wir gekocht.', 'On Saturday we went into town, and in the evening we cooked.'],
          ['Nina', 'Und das Wetter?', 'And the weather?'],
          ['Emerson', 'Furchtbar. Es hat die ganze Zeit geregnet.', 'Terrible. It rained the whole time.'],
          ['Nina', 'Typisch Hamburg.', 'Typical Hamburg.'],
          ['Emerson', 'Am Sonntag bin ich dann ziemlich spät aufgestanden. Und du?', 'On Sunday I got up pretty late then. And you?'],
          ['Nina', 'Nichts gemacht. War auch mal schön.', 'Did nothing. That was nice too for once.']
        ],
        note: 'Achte auf den Wechsel: *bin gegangen*, *bin aufgestanden* (Bewegung → sein) gegen *haben gekocht*, *hat geregnet* (alles andere → haben).' },

      { t: 'street', title: 'Vom Wochenende erzählen',
        items: [
          ['Was ging ab?', 'What went down?', 'Lockere Frage nach dem Wochenende.'],
          ['War ganz chillig', 'It was pretty chill', '*chillig* — vollwertiges deutsches Adjektiv.'],
          ['Ich hab nur rumgehangen', 'I just hung around', '*rumhängen* = herumhängen, trennbar.'],
          ['War voll geil', 'It was awesome', 'Unter Freunden. Nicht im Bewerbungsgespräch.'],
          ['Hab gar nix gemacht', "Didn't do anything", '*gar nix* = absolutely nothing.'],
          ['Wir waren feiern', 'We went partying', '*feiern gehen* = to go out partying.'],
          ['Ich hab verpennt', 'I overslept', 'Kommt in jeder zweiten Montagsgeschichte vor.'],
          ['War echt cringe', 'It was really cringe', 'Wenn etwas peinlich war.'],
          ['Kurz gesagt: Crashout', 'Long story short: meltdown', 'Die 2026er Art, ein schlechtes Wochenende zusammenzufassen.']
        ] },

      { t: 'pattern', kicker: 'Satzbaukasten', title: 'Gestern habe ich …',
        frame: 'Gestern habe ich {}.', enFrame: 'Yesterday I {}.',
        slotLabel: 'Partizip',
        swaps: [
          ['gearbeitet', 'worked'], ['viel geschlafen', 'slept a lot'], ['einen Film gesehen', 'watched a film'],
          ['Pizza gegessen', 'ate pizza'], ['nichts gemacht', 'did nothing'], ['mit Freunden gesprochen', 'talked with friends']
        ],
        note: 'Mit *sein*-Verben wird daraus „Gestern *bin* ich …“: gegangen, gefahren, aufgestanden.' },

      { t: 'drill', kicker: 'Sofort üben', title: 'Perfekt-Runde',
        ex: [
          { k: 'fill', q: 'Ich ___ gestern gearbeitet.', a: ['habe', 'hab'], en: 'I worked yesterday.',
            why: '*arbeiten* ist keine Bewegung → haben.' },
          { k: 'fill', q: 'Wir ___ nach Berlin gefahren.', a: ['sind'], en: 'We went to Berlin.',
            why: 'Bewegung von A nach B → *sein*.' },
          { k: 'fill', q: 'Ich ___ um sechs aufgestanden.', a: ['bin'], en: 'I got up at six.',
            why: 'Zustandsänderung → *sein*.' },
          { k: 'choice', q: 'Wie lautet das Partizip von „trinken“?',
            opts: ['getrinkt', 'getrunken', 'trinkt'], a: 1, why: 'Unregelmäßig: der Vokal ändert sich, Endung -en.' },
          { k: 'order', en: 'What did you do at the weekend?',
            words: ['Was', 'hast', 'du', 'am', 'Wochenende', 'gemacht'], a: 'Was hast du am Wochenende gemacht' }
        ] },

      { t: 'culture', kicker: 'Kultur', title: 'Warum alle über das Wetter reden',
        body: 'Smalltalk über Persönliches ist in Deutschland weniger üblich als in den USA. Einen Fremden zu fragen, wie es ihm geht, ist keine Floskel — es wird als echte Frage verstanden, und manche antworten dann auch ehrlich und ausführlich.\nDas Wetter dagegen ist neutral, gemeinsam erlebbar und verpflichtet zu nichts. Deshalb ist es das Standardthema im Aufzug, an der Bushaltestelle und beim Bäcker.\nZweitwichtigstes Thema: die Deutsche Bahn und ihre Verspätungen. Damit kommst du mit jedem ins Gespräch.',
        note: 'Zwei Sätze, die immer funktionieren: „Schönes Wetter heute, ne?“ und „Die Bahn mal wieder…“' },

      { t: 'recap', kicker: 'A1 abgeschlossen', title: 'Du hast A1 durch. Was jetzt?',
        points: [
          'Perfekt = *haben/sein* an Position 2 + *Partizip II* am Ende.',
          '*sein* bei Bewegung und Zustandsänderung, *haben* bei allem anderen.',
          'ge-…-t regelmäßig · ge-…-en unregelmäßig · kein ge- bei -ieren, be-, ver-, er-.',
          'Trennbare Verben schieben das ge- in die Mitte: auf*ge*standen.',
          'Wetter ist Smalltalk Nummer eins.',
          'Nächster Schritt: A2 — Nebensätze mit *weil* und *dass*, Meinungen begründen, Telefonate.'
        ],
        note: 'Geh jetzt in den Trainer und lass die fälligen Karten durchlaufen. Wiederholung ist ab hier wichtiger als neuer Stoff.' }
    ],
    quiz: [
      { k: 'fill', q: 'Ich ___ gestern Fußball gespielt.', a: ['habe', 'hab'], en: 'I played football yesterday.' },
      { k: 'fill', q: 'Wir ___ ins Kino gegangen.', a: ['sind'], en: 'We went to the cinema.' },
      { k: 'fill', q: 'Sie ___ nach Italien geflogen.', a: ['ist'], en: 'She flew to Italy.' },
      { k: 'fill', q: 'Ich ___ das nicht verstanden.', a: ['habe', 'hab'], en: "I didn't understand that." },
      { k: 'choice', q: 'Partizip II von „essen“?', opts: ['geesst', 'gegessen', 'geessen'], a: 1 },
      { k: 'choice', q: 'Partizip II von „studieren“?', opts: ['gestudiert', 'studiert', 'studieren'], a: 1,
        why: 'Verben auf *-ieren* bekommen kein ge-.' },
      { k: 'choice', q: 'Partizip II von „aufstehen“?', opts: ['geaufstanden', 'aufgestanden', 'aufstehen'], a: 1,
        why: 'Bei trennbaren Verben rutscht das ge- in die Mitte.' },
      { k: 'choice', q: 'Warum „Ich bin geblieben“ und nicht „habe“?',
        opts: ['Weil es Bewegung ist.', 'Weil bleiben zu den Ausnahmen mit sein gehört.', 'Das ist falsch.'], a: 1 },
      { k: 'order', en: 'I got up at six yesterday.', words: ['Ich', 'bin', 'gestern', 'um', 'sechs', 'aufgestanden'],
        a: 'Ich bin gestern um sechs aufgestanden' },
      { k: 'order', en: 'Have you eaten yet?', words: ['Hast', 'du', 'schon', 'gegessen'], a: 'Hast du schon gegessen' },
      { k: 'order', en: 'It rained the whole time.', words: ['Es', 'hat', 'die', 'ganze', 'Zeit', 'geregnet'],
        a: 'Es hat die ganze Zeit geregnet' },
      { k: 'listen', de: 'Was hast du am Wochenende gemacht?', a: ['Was hast du am Wochenende gemacht'], en: 'What did you do at the weekend?' },
      { k: 'listen', de: 'Ich bin nach Hause gegangen.', a: ['Ich bin nach Hause gegangen'], en: 'I went home.' },
      { k: 'match', q: 'Partizipien', pairs: [
        ['getrunken', 'drunk'], ['gefahren', 'travelled'], ['geschrieben', 'written'], ['genommen', 'taken']
      ] },
      { k: 'match', q: 'Wetter', pairs: [
        ['Es regnet.', "It's raining."], ['Es schneit.', "It's snowing."],
        ['bewölkt', 'cloudy'], ['Die Sonne scheint.', 'The sun is shining.']
      ] },
      { k: 'trans', en: 'I slept well.', a: ['Ich habe gut geschlafen.', 'Ich hab gut geschlafen.'], hint: 'haben + Partizip ans Ende' }
    ]
  });
})();
