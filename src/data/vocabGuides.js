// src/data/vocabGuides.js
// Comprehensive A2 Inburgering Vocabulary & Grammar Guides for Chapters 1 - 18

export const CHAPTER_VOCAB_GUIDES = {
  1: {
    title: { tr: "1. Ünite: Tanışma, Sayılar ve Temel İletişim Rehberi", en: "Chapter 1: Greetings, Numbers & Basics Guide" },
    icon: "fa-solid fa-handshake",
    summary: {
      tr: "Bu ünitede Hollandacada tanışma, selamlaşma, kendini tanıtma kalıpları, alfabe kodlama ve 0-1000 arası sayılar öğrenilir.",
      en: "In this chapter, you learn introductions, greetings, spelling the alphabet, and numbers 0-1000."
    },
    keyPatterns: [
      {
        rule: { tr: "Tanışma Soru Kalıpları (Vraagwoorden)", en: "Introduction Question Words" },
        explanation: {
          tr: "Wie (Kim?), Wat (Ne?), Waar (Nerede?), Waar ... vandaan (Nereden?). Dikkat: 'Hoe heet je?' (Adın ne?) kalıbında 'hoe' (nasıl) kullanılır.",
          en: "Wie (Who?), Wat (What?), Waar (Where?), Waar ... vandaan (Where from?). Note: 'Hoe heet je?' literally means 'How are you called?'."
        },
        examples: ["Wie ben jij? - Ik ben Maria.", "Waar kom je vandaan? - Ik kom uit Turkije.", "Waar woon je? - Ik woon in Utrecht."]
      },
      {
        rule: { tr: "Hollandacada Sayı Mantığı (Tersten Okuma)", en: "Dutch Number Logic (Reversed Order)" },
        explanation: {
          tr: "21'den itibaren birler basamağı onlar basamağından önce söylenir: 21 = een-en-twintig (bir ve yirmi), 54 = vier-en-vijftig (dört ve elli).",
          en: "From 21 onwards, units come before tens: 21 = eenentwintig (one-and-twenty), 54 = vierenvijftig (four-and-fifty)."
        },
        examples: ["18 = achttien", "24 = vierentwintig", "100 = honderd"]
      },
      {
        rule: { tr: "U (Resmi) vs. Jij/Je (Samimi)", en: "U (Formal) vs. Jij/Je (Informal)" },
        explanation: {
          tr: "Resmi durumlarda, tanımadığınız yetişkinlere ve resmi kurumlarda 'U' kullanılır. Arkadaş ortamında ve kursta 'Jij / Je' tercih edilir.",
          en: "Use 'U' with unfamiliar adults, doctors, officials. Use 'jij/je' with colleagues, friends, and fellow students."
        },
        examples: ["Wat is uw naam? (Resmi)", "Hoe heet je? (Samimi)"]
      }
    ],
    inburgeringTip: {
      tr: "İnburgering Konuşma ve Dinleme sınavlarında adınızı ve adresinizi hecelemeniz (spellen) ve telefon numaranızı ikili gruplar halinde söylemeniz sıkça istenir. 'ij' harfini 'lange ij', 'y' harfini 'Griekse ij' olarak telaffuz etmeye dikkat edin.",
      en: "In the Inburgering speaking/listening exam, you are often asked to spell your name/address and state phone numbers in two-digit pairs."
    }
  },
  2: {
    title: { tr: "2. Ünite: Rutinler, Saatler ve Zaman İfadeleri Rehberi", en: "Chapter 2: Routines, Telling Time & Calendar Guide" },
    icon: "fa-solid fa-clock",
    summary: {
      tr: "Günlük rutinler, saat söyleme, haftanın günleri, aylar, mevsimler ve zaman edatları (om, in, op, van... tot...).",
      en: "Daily routines, clock times, days of the week, months, seasons, and time prepositions."
    },
    keyPatterns: [
      {
        rule: { tr: "Hollandaca Saat Sistemi (Yarımlar ve Çeyrekler)", en: "Dutch Clock Time System" },
        explanation: {
          tr: "Hollandacada 'half' bir sonraki saate doğru söylenir! Örneğin 'half drie' saat 02:30 demektir (3'e yarım var). 02:20 = 'tien voor half drie', 02:40 = 'tien over half drie'.",
          en: "'Half' refers to the upcoming hour: 'half drie' = 2:30 (halfway to 3). 2:20 = 'tien voor half drie', 2:40 = 'tien over half drie'."
        },
        examples: ["10:00 = tien uur", "10:30 = half elf", "10:15 = kwart over tien", "10:45 = kwart voor elf"]
      },
      {
        rule: { tr: "Zaman Edatları (Preposities van tijd)", en: "Prepositions of Time" },
        explanation: {
          tr: "Saatlerde 'om', günlerde ve günün bölümlerinde 'op', aylarda ve mevsimlerde 'in' kullanılır.",
          en: "Use 'om' for clock times, 'op' for days/dates, 'in' for months/seasons."
        },
        examples: ["om half tien (saat 09:30'da)", "op maandag (pazartesi günü)", "in de zomer (yazın)", "'s ochtends / 's avonds (sabahları/akşamları)"]
      }
    ],
    inburgeringTip: {
      tr: "Doktor, belediye veya iş görüşmesi randevularında (afspraak) Hollandaca saat ifadelerini doğru anlamak hayati önem taşır. 'Half elf' dendiğinde saat 11:30 değil 10:30 olduğunu unutmayın!",
      en: "When booking appointments (afspraak), remember that 'half elf' is 10:30, not 11:30!"
    }
  },
  3: {
    title: { tr: "3. Ünite: Kafe & Restoranda Sipariş, Artikeller ve İnversiyon", en: "Chapter 3: Ordering in Café, Articles & Inversion Guide" },
    icon: "fa-solid fa-utensils",
    summary: {
      tr: "Yeme-içme, kafe/restoranda sipariş verme ve hesap isteme kalıpları, 'de' ve 'het' artikelleri, sıra sayıları ve devrik cümle (inversie).",
      en: "Ordering food and drinks, paying the bill, 'de' and 'het' articles, ordinal numbers, and inversion."
    },
    keyPatterns: [
      {
        rule: { tr: "Sipariş ve Ödeme Kalıpları", en: "Ordering & Paying Expressions" },
        explanation: {
          tr: "Sipariş verirken 'Mag ik...', 'Doe mij maar...', 'Ik wil graag...' kalıpları kullanılır. Hesap isterken 'Mag ik afrekenen?' denir.",
          en: "Use 'Mag ik...', 'Doe mij maar...', 'Ik wil graag...' when ordering. Say 'Mag ik afrekenen?' when asking for the bill."
        },
        examples: ["Mag ik een kopje koffie?", "Doe mij maar een biertje.", "Mag ik afrekenen? - Alles samen of apart?"]
      },
      {
        rule: { tr: "Cümlede İnversiyon (Devrik Cümle Kuralı)", en: "Word Order: Inversion Rule" },
        explanation: {
          tr: "Hollandaca bir cümle zaman, yer veya nesne gibi öğelerle başlarsa özne ile fiil yer değiştirir (Fiil daima 2. sırada kalır!).",
          en: "If a sentence begins with time or place, subject and verb invert. The finite verb stays in position 2!"
        },
        examples: ["Ik drink vandaag koffie. -> Vandaag drink ik koffie.", "Morgen ben ik jarig."]
      }
    ],
    inburgeringTip: {
      tr: "İnburgering yazma sınavında cümlelere 'Vandaag...', 'Gisteren...', 'In het weekend...' gibi zaman zarflarıyla başlarken fiili hemen arkasından getirmeyi (inversiyon) unutmayın: 'Gisteren ging ik...' (Gisteren ik ging DEĞİL).",
      en: "In the writing exam, starting sentences with time words requires inversion: 'Vandaag leer ik Nederlands'."
    }
  },
  4: {
    title: { tr: "4. Ünite: Sokakta İletişim, Sıfatlar ve Hal-Hatır Sorma", en: "Chapter 4: On the Street, Asking How Someone is & Adjectives" },
    icon: "fa-solid fa-road",
    summary: {
      tr: "Tanıdıklarla karşılaşma, hal-hatır sorma ve cevap verme, randevulaşma, temel sıfatlar ve açılış saatleri.",
      en: "Bumping into acquaintances, asking how someone is, setting up appointments, basic adjectives, and opening hours."
    },
    keyPatterns: [
      {
        rule: { tr: "Hal-Hatır Sorma & Cevaplar", en: "Asking How Someone Is" },
        explanation: {
          tr: "'Hoe is het?' veya 'Alles goed?' sorularına: 'Prima, dank je!', 'Het gaat wel' (şöyle böyle), 'Niet zo goed' (pek iyi değil) şeklinde yanıt verilir.",
          en: "Respond to 'Hoe gaat het?' with 'Prima!', 'Goed, dank je', 'Het gaat wel' (so-so), or 'Niet zo goed'."
        },
        examples: ["Alles goed? - Ja, prima! En met jou?", "Dat is lang geleden, zeg!", "Ik moet ervandoor. (Gitmem gerek.)"]
      },
      {
        rule: { tr: "Açılış Saatleri İfadeleri (Openingstijden)", en: "Opening Hours Expressions" },
        explanation: {
          tr: "Dükkanların ve kurumların açık/kapalı olma durumları: 'open / geopend' (açık), 'gesloten / dicht' (kapalı). 'van ... tot ...' (saat ...'den ...'e kadar).",
          en: "'Open' vs. 'gesloten / dicht'. 'Van 09.00 tot 18.00 uur'."
        },
        examples: ["De winkel is open van 09.00 tot 18.00 uur.", "Op zondag zijn we gesloten."]
      }
    ],
    inburgeringTip: {
      tr: "Sokak tabelaları ve mağaza camlarındaki açılış saatleri (koopavond: perşembe/cuma akşamı geç kapanış, koopzondag: pazar günü açık mağazalar) Inburgering KNM ve Okuma bölümlerinde sıkça sorulur.",
      en: "Terms like 'koopavond' (late night shopping) and 'koopzondag' are common in KNM and Reading questions."
    }
  },
  5: {
    title: { tr: "5. Ünite: Pazarda Alışveriş, Miktarlar ve Emir Kipi (Imperatief)", en: "Chapter 5: At the Market, Quantities & Imperatives" },
    icon: "fa-solid fa-basket-shopping",
    summary: {
      tr: "Pazarda ve süpermarkette alışveriş, meyve-sebze isimleri, ağırlık ve ambalaj birimleri (kilo, pond, bakje, bosje), emir kipi (imperatief).",
      en: "Market shopping, produce, measurement units (kilo, pound, box, bunch), and the imperative mood."
    },
    keyPatterns: [
      {
        rule: { tr: "Miktar ve Ambalaj Birimleri", en: "Units of Measurement" },
        explanation: {
          tr: "Hollanda'da 1 pond = 500 gramdır. 'Een ons' = 100 gramdır. Meyve/sebzelerde: 'een bakje' (küçük sepet/kutu), 'een bosje' (demet).",
          en: "1 pond = 500 grams. 1 ons = 100 grams. 'Een bakje aardbeien' (a punnet of strawberries), 'een bosje wortels' (a bunch of carrots)."
        },
        examples: ["Mag ik een pond druiven?", "Twee kilo aardappelen, alstublieft.", "Een bosje peterselie."]
      },
      {
        rule: { tr: "Emir Kipi (De Imperatief)", en: "The Imperative Mood" },
        explanation: {
          tr: "Emir kipi için fiilin yalın kökü (stam) kullanılır ve özne söylenmez: 'Kom binnen!' (İçeri gel!), 'Kijk maar even!' (Bir bak!).",
          en: "The imperative uses the bare verb stem without a subject pronoun: 'Kom!', 'Zeg het maar!'."
        },
        examples: ["Zeg het maar! (Buyurun söyleyin!)", "Pas op! (Dikkat et!)", "Ga zitten! (Otur!)"]
      }
    ],
    inburgeringTip: {
      tr: "Pazarcının sorduğu 'Wie is er aan de beurt?' (Sıra kimde?) sorusuna 'Ik ben aan de beurt' veya kısaca 'Ik' şeklinde cevap verilir. 'Anders nog iets?' sorusuna ise 'Nee, dat was het, dank u' denir.",
      en: "Common market dialogue responses: 'Wie is er aan de beurt?' -> 'Ik!', 'Anders nog iets?' -> 'Nee, dat was het'."
    }
  },
  6: {
    title: { tr: "6. Ünite: Restoranda Yemek, Menü Seçimi ve Ayrılabilen Fiiller", en: "Chapter 6: Restaurant Dining, Courses & Menu Guide" },
    icon: "fa-solid fa-wine-glass",
    summary: {
      tr: "Restoran rezervasyonu, masa isteme, yemek öğünleri ve menü bölümleri (voorgerecht, hoofdgerecht, nagerecht), bahşiş kültürü.",
      en: "Restaurant reservations, table requests, meal courses (starter, main, dessert), and tipping culture."
    },
    keyPatterns: [
      {
        rule: { tr: "Yemek Öğünleri ve Menü Bölümleri", en: "Courses & Meal Terminology" },
        explanation: {
          tr: "Het voorgerecht (başlangıç), het hoofdgerecht (ana yemek), het nagerecht / het toetje (tatlı). Bestek: de vork (çatal), het mes (bıçak), de lepel (kaşık).",
          en: "Voorgerecht (starter), hoofdgerecht (main), nagerecht/toetje (dessert). Vork (fork), mes (knife), lepel (spoon)."
        },
        examples: ["Hebt u een tafel voor twee personen?", "Als voorgerecht neem ik de soep.", "Mag ik de rekening, alstublieft?"]
      },
      {
        rule: { tr: "Hesap Ödeme ve Bahşiş (Fooi)", en: "Paying the Bill & Tipping" },
        explanation: {
          tr: "Hollanda'da bahşiş zorunlu değildir ancak iyi hizmette yuvarlama yapılır. 'Laat de rest maar zitten' (Üstü kalsın) denir.",
          en: "Tipping is optional but customary by rounding up. 'Laat de rest maar zitten' means 'Keep the change'."
        },
        examples: ["Dat is dan 67 euro. - Maak er maar 70 van. (Yetmiş yapın.)"]
      }
    ],
    inburgeringTip: {
      tr: "Hollanda'da 'Pinnen' (banka kartıyla temassız/şifreli ödeme) nakit ödemeden çok daha yaygındır. Çoğu restoranda 'Alleen pinnen' (Yalnızca kart) tabelası görürsünüz.",
      en: "'Pinnen' (paying by debit card) is standard everywhere in the Netherlands. Many venues are cashless ('alleen pinnen')."
    }
  },
  7: {
    title: { tr: "7. Ünite: Kıyafet Alışverişi, Renkler ve Sıfat Çekimi (+e)", en: "Chapter 7: Clothing Store, Colors & Adjective Endings" },
    icon: "fa-solid fa-shirt",
    summary: {
      tr: "Giyim eşyaları, bedenler, renkler, deneme kabini, fiyat sorma ve sıfatların sonuna '-e' takısı gelme kuralı.",
      en: "Clothing, sizes, colors, fitting rooms, asking prices, and the inflected adjective ending '-e'."
    },
    keyPatterns: [
      {
        rule: { tr: "Sıfat Çekim Kuralı (Adjectief + e)", en: "Adjective Inflection (+e Rule)" },
        explanation: {
          tr: "Kural basittir: İsimden önce gelen sıfatların neredeyse tümü '-e' alır. İSTİSNA: Sadece tekil, belirsiz (een) 'HET' isimlerinde sıfat '-e' ALMAZ!",
          en: "Adjectives before nouns take '-e' in almost all cases. EXCEPTION: Singular indefinite 'het' words (een + het-woord) do NOT take '-e'!"
        },
        examples: ["de mooie jas (de-woord -> +e)", "een mooie jas (de-woord -> +e)", "het mooie huis (het-woord definiet -> +e)", "een mooi huis (het-woord indefiniet -> YALIN!)"]
      },
      {
        rule: { tr: "Mağaza İletişimi Kalıpları", en: "Shopping Useful Phrases" },
        explanation: {
          tr: "Beden: de maat. Denemek: passen. Deneme kabini: het pashokje. İndirim: de korting / de uitverkoop (sale).",
          en: "De maat (size), passen (to try on), het pashokje (fitting room), de korting (discount)."
        },
        examples: ["Hebt u deze broek in maat 38?", "Waar zijn de pashokjes?", "Deze jurk past perfect!"]
      }
    ],
    inburgeringTip: {
      tr: "Sıfat çekimi ('een mooi huis' vs 'een mooie auto') hem A2 yazma hem de dilbilgisi sınavlarında en çok puan kırılan temel kurallardan biridir.",
      en: "Mastering adjective inflection ('een mooi huis' vs 'een mooie jas') is crucial for high writing scores in A2 exams."
    }
  },
  8: {
    title: { tr: "8. Ünite: Emlakçıda, Ev Tipleri ve Yer Edatları", en: "Chapter 8: Real Estate, Housing Types & Prepositions of Place" },
    icon: "fa-solid fa-house",
    summary: {
      tr: "Hollanda'da ev arama, konut tipleri (rijtjeshuis, flat, studio), evin bölümleri, eşyalar ve yer edatları (voor, achter, naast, tussen).",
      en: "House hunting in the Netherlands, housing types, rooms, furniture, and spatial prepositions."
    },
    keyPatterns: [
      {
        rule: { tr: "Hollanda'ya Özgü Konut Türleri (Woningtypen)", en: "Dutch Housing Types" },
        explanation: {
          tr: "Het rijtjeshuis (sıra ev), het appartement / de flat (daire), de bovenwoning (üst kat ev), de benedenwoning (bahçeli alt kat), het vrijstaande huis (müstakil ev).",
          en: "Rijtjeshuis (terraced house), appartement (flat), bovenwoning (upper-floor flat), benedenwoning (ground-floor flat)."
        },
        examples: ["We zoeken een appartement met twee slaapkamers en een balkon.", "De woning heeft een grote tuin."]
      },
      {
        rule: { tr: "Yer Belirten Edatlar (Preposities van plaats)", en: "Prepositions of Place" },
        explanation: {
          tr: "in (içinde), op (üstünde), onder (altında), voor (önünde), achter (arkasında), naast (yanında), tussen (arasında), tegenover (karşısında).",
          en: "in, op (on), onder (under), voor (in front of), achter (behind), naast (next to), tegenover (opposite)."
        },
        examples: ["De supermarkt is tegenover het station.", "De auto staat voor het huis."]
      }
    ],
    inburgeringTip: {
      tr: "Hollanda KNM (Hollanda Toplumu Bilgisi) sınavında konut arama, 'huurtoeslag' (kira yardımı) ve belediye kaydı (inschrijven bij de gemeente) konuları doğrudan bu ünitedeki kelimelerle ilgilidir.",
      en: "Housing vocabulary is heavily tested in the KNM exam (rental contracts, municipal registration, energy bills)."
    }
  },
  9: {
    title: { tr: "9. Ünite: Doktorda (Bij de huisarts), Vücut ve Sağlık", en: "Chapter 9: At the Doctor, Body Parts & Health" },
    icon: "fa-solid fa-user-doctor",
    summary: {
      tr: "Aile hekiminden (huisarts) randevu alma, şikayetleri anlatma (pijn aan, last van), vücut organları, eczane (apotheek) ve reçete (recept).",
      en: "Booking a doctor's appointment, describing symptoms, body parts, pharmacy, and prescriptions."
    },
    keyPatterns: [
      {
        rule: { tr: "Şikayet Bildirme Kalıpları", en: "Expressing Ailments and Symptoms" },
        explanation: {
          tr: "'Ik heb pijn aan mijn ...' (..-m ağrıyor), 'Ik heb last van ...' (..-den rahatsızlığım var/şikayetçiyim), 'Ik ben misselijk' (midem bulanıyor), 'Ik heb koorts' (ateşim var).",
          en: "'Ik heb pijn aan...' (my ... hurts), 'Ik heb last van...' (I suffer from...), 'Ik voel me niet lekker' (I don't feel well)."
        },
        examples: ["Ik heb pijn aan mijn keel en ik hoest veel.", "Ik heb last van mijn rug.", "Beterschap! (Geçmiş olsun!)"]
      },
      {
        rule: { tr: "Zamirler: Iets vs. Niets", en: "Indefinite Pronouns: Iets vs. Niets" },
        explanation: {
          tr: "'Iets' = bir şey; 'Niets' = hiçbir şey. Cümlede olumsuzluk oluştururken 'niets' tek başına yeterlidir ('niet' kullanılmaz).",
          en: "'Iets' = something; 'Niets' = nothing. Do not use 'niet' with 'niets'."
        },
        examples: ["Hebt u iets tegen de pijn? (Ağrıya karşı bir şeyiniz var mı?)", "Nee, ik voel niets. (Hayır, hiçbir şey hissetmiyorum.)"]
      }
    ],
    inburgeringTip: {
      tr: "Hollanda sağlık sisteminde uzman doktora (specialist) gitmek için MUTLAKA önce aile hekiminden sevk (verwijsbrief) alınması gerekir. Acil olmayan durumlarda doğrudan hastaneye gidilmez.",
      en: "In the Dutch healthcare system, you always need a referral (verwijsbrief) from your huisarts to see a hospital specialist."
    }
  },
  10: {
    title: { tr: "10. Ünite: Bisikletçide, Ulaşım ve Geçmiş Zaman (Perfectum Giriş)", en: "Chapter 10: Bike Repair, Transportation & Present Perfect" },
    icon: "fa-solid fa-bicycle",
    summary: {
      tr: "Bisiklet parçaları, arıza anlatma (lekke band, rem kapot), tamir ve yol tarifi, düzenli fiillerin geçmiş zamanı (het perfectum).",
      en: "Bicycle parts, describing breakdowns, bike repair, directions, and introducing the present perfect tense."
    },
    keyPatterns: [
      {
        rule: { tr: "Bisiklet Parçaları ve Arızalar", en: "Bike Terminology & Problems" },
        explanation: {
          tr: "De band (lastik), de rem (fren), de ketting (zincir), het zadel (sele), de trapper (pedal). 'Mijn band is lek' = Lastiğim patlak.",
          en: "De band (tire), de rem (brake), de ketting (chain). 'Een lekke band' = a flat tire."
        },
        examples: ["Mijn fiets heeft een lekke band.", "Kunt u mijn remmen repareren?", "Hoeveel kost de reparatie?"]
      },
      {
        rule: { tr: "Bedoelen vs. Betekenen Farkı", en: "Bedoelen vs. Betekenen" },
        explanation: {
          tr: "'Bedoelen' İNSANLAR için kullanılır (ne kastettiğini belirtir). 'Betekenen' ise KELİMELER/ŞEYLER için kullanılır (anlamına gelir).",
          en: "'Bedoelen' is used for people ('Wat bedoel je?'). 'Betekenen' is used for words/things ('Wat betekent dit woord?')."
        },
        examples: ["Wat bedoelt u precies? (Tam olarak ne demek istiyorsunuz?)", "Wat betekent dit verkeersbord? (Bu trafik levhası ne anlama geliyor?)"]
      }
    ],
    inburgeringTip: {
      tr: "'Wat bedoelt u?' ile 'Wat betekent dit?' arasındaki fark Inburgering dilbilgisi ve dinleme testlerinde sıkça tuzak olarak kullanılır.",
      en: "Distinguish 'Wat bedoel je?' (What do you mean?) from 'Wat betekent dat?' (What does that signify?)."
    }
  },
  11: {
    title: { tr: "11. Ünite: Doğum Günü, Kutlamalar ve Dönüşlü Fiiller (Reflexieve werkwoorden)", en: "Chapter 11: Birthday, Celebrations & Reflexive Verbs" },
    icon: "fa-solid fa-cake-candles",
    summary: {
      tr: "Doğum günü ve tebrik kalıpları, hediyeleşme, iş hayatından bahsetme, dönüşlü fiiller (zich voorstellen, zich vergissen, zich voelen).",
      en: "Birthday wishes, celebrations, giving gifts, talking about jobs, and reflexive verbs."
    },
    keyPatterns: [
      {
        rule: { tr: "Dönüşlü Fiiller (Zich scheren, zich voelen...)", en: "Reflexive Verbs & Pronouns" },
        explanation: {
          tr: "Eylemin kişinin kendisine döndüğü fiillerde dönüşlü zamirler kullanılır: ik me, jij je, u zich/u, hij/zij zich, wij ons, jullie je, zij zich.",
          en: "Reflexive verbs take reflexive pronouns: ik me, jij je, hij/zij zich, wij ons, jullie je, zij zich."
        },
        examples: ["Ik voel me heel goed. (Kendimi çok iyi hissediyorum.)", "Hij vergist zich. (O yanılıyor.)", "We verheugen ons op het feest. (Partiyi iple çekiyoruz.)"]
      },
      {
        rule: { tr: "Tebrik ve Kutlama İfadeleri", en: "Congratulations & Social Etiquette" },
        explanation: {
          tr: "Doğum gününde: 'Gefeliciteerd met je verjaardag!'. Hollanda geleneğinde sadece doğum günü sahibi değil, ailesi de tebrik edilir!",
          en: "'Gefeliciteerd!' is the standard congratulation. In Dutch culture, you also congratulate the birthday person's close family!"
        },
        examples: ["Van harte gefeliciteerd!", "Veel succes met je nieuwe baan!"]
      }
    ],
    inburgeringTip: {
      tr: "Hollanda doğum günü çemberi ('de kringverjaardag') ve herkesin birbiriyle tokalaşıp tebrik etmesi, KNM sınavında en klasik kültürel sorulardandır.",
      en: "The Dutch birthday circle party ('kringverjaardag') is a classic cultural question on the KNM exam."
    }
  },
  12: {
    title: { tr: "12. Ünite: Etkinlikler, Yol Tarifi ve Ayrılabilen Fiiller (Scheidbare werkwoorden)", en: "Chapter 12: Events, Directions & Separable Verbs" },
    icon: "fa-solid fa-map-location-dot",
    summary: {
      tr: "Fuar ve etkinlikler, detaylı yol tarifi sorma ve verme (rechtdoor, afslaan, oversteken), ayrılabilen fiillerin çekimi (meenemen, oversteken, instappen).",
      en: "Exhibitions and fairs, giving directions, and conjugated separable verbs."
    },
    keyPatterns: [
      {
        rule: { tr: "Ayrılabilen Fiiller (Scheidbare werkwoorden)", en: "Separable Verbs in Present Tense" },
        explanation: {
          tr: "Fiilin ön eki (aan, op, uit, mee, in, over) ana cümlede fiilden ayrılır ve cümlenin EN SONUNA gider!",
          en: "The prefix (op, mee, in, uit, over) separates from the verb stem and moves to the VERY END of the clause!"
        },
        examples: ["meenemen -> Ik neem een plattegrond mee.", "oversteken -> U steekt hier de straat over.", "instappen -> We stappen in de bus in."]
      },
      {
        rule: { tr: "Yol Tarifi Verme Kalıpları", en: "Giving Directions" },
        explanation: {
          tr: "rechtdoor (düz), linksaf (sola), rechtsaf (sağa), de hoek om (köşeyi dön), de trap af (merdivenden in), oversteken (karşıya geç).",
          en: "rechtdoor (straight ahead), linksaf slaan (turn left), rechtsaf slaan (turn right), oversteken (cross)."
        },
        examples: ["Ga bij het stoplicht naar rechts.", "Loop rechtdoor tot aan het plein.", "Neem de eerste straat links."]
      }
    ],
    inburgeringTip: {
      tr: "Ayrılabilen fiillerin ekini cümlenin sonuna koymayı unutmak A2 yazma sınavında en sık yapılan hatalardandır: 'Ik doe de deur open' (DOĞRU), 'Ik opendoe de deur' (YANLIŞ).",
      en: "Always place the separable prefix at the very end of the main clause: 'Ik nodig je uit' (not 'Ik uitnodig je')."
    }
  },
  13: {
    title: { tr: "13. Ünite: Ev Ziyareti, Hava Durumu ve 'Want' vs. 'Omdat' Bağlaçları", en: "Chapter 13: Visiting Friends, Weather & Conjunctions Guide" },
    icon: "fa-solid fa-users",
    summary: {
      tr: "Arkadaş ziyareti, ev sahibi-konuk konuşmaları, hava durumundan bahsetme, neden bildiren bağlaçlar ('want' vs. 'omdat').",
      en: "Visiting friends, hosting guests, discussing the weather, and causal conjunctions ('want' vs 'omdat')."
    },
    keyPatterns: [
      {
        rule: { tr: "En Önemli Kural: 'Want' vs. 'Omdat'", en: "Crucial Rule: 'Want' vs. 'Omdat'" },
        explanation: {
          tr: "'WANT' normal düz cümle sırası alır (Özne + Fiil). 'OMDAT' ise yan cümle yapar ve FİİLİ CÜMLENİN EN SONUNA ATAR!",
          en: "'WANT' keeps normal main clause order (Subject + Verb). 'OMDAT' is a subordinating conjunction: the VERB GOES TO THE END!"
        },
        examples: [
          "Ik blijf thuis, want ik ben ziek. (Normal sıra)",
          "Ik blijf thuis, omdat ik ziek ben. (Fiil 'ben' en sona gitti!)"
        ]
      },
      {
        rule: { tr: "Hava Durumu İfadeleri (Het Weer)", en: "Weather Expressions" },
        explanation: {
          tr: "Het regent (yağmur yağıyor), het waait (rüzgar esiyor), de zon schijnt (güneş açıyor), het is koud/warm (hava soğuk/sıcak).",
          en: "Het regent (it rains), het waait (it's windy), de zon schijnt (sun shines), bewolkt (cloudy)."
        },
        examples: ["Wat een rotweer vandaag!", "Het regent dat het giet. (Bardaktan boşalırcasına yağıyor.)", "Morgen wordt het zonnig."]
      }
    ],
    inburgeringTip: {
      tr: "'Omdat' bağlacından sonra fiili cümlenin sonuna göndermek Inburgering A2 yazma sınavında en yüksek puan getiren dilbilgisi göstergesidir.",
      en: "Using 'omdat' with correct subordinate word order (verb at the end) demonstrates solid A2 mastery."
    }
  },
  14: {
    title: { tr: "14. Ünite: Spor Salonu, Sağlıklı Yaşam ve Gelecek Zaman (Zullen / Gaan)", en: "Chapter 14: Gym, Fitness & Future Tense (Zullen / Gaan)" },
    icon: "fa-solid fa-dumbbell",
    summary: {
      tr: "Spor tesisleri, abonelik seçenekleri, antrenman aletleri, gelecek zaman oluşturma (zullen & gaan) ve modal fiiller.",
      en: "Gyms, memberships, fitness routines, and forming the future tense using 'zullen' and 'gaan'."
    },
    keyPatterns: [
      {
        rule: { tr: "Gelecek Zaman (Het Futurum: Gaan & Zullen)", en: "Future Tense with 'Gaan' and 'Zullen'" },
        explanation: {
          tr: "Gelecek zaman için 'gaan' (planlanan eylemler) veya 'zullen' (tahmin/öneri/söz) + Mastar Fiil (en sonda) kullanılır.",
          en: "Future is formed with conjugated 'gaan' (intentions) or 'zullen' (promises/proposals) + Infinitive at the end."
        },
        examples: [
          "Ik ga morgen sporten. (Yarın spor yapacağım.)",
          "We zullen zien wat er gebeurt. (Ne olacağını göreceğiz.)",
          "Zullen we een afspraak maken? (Randevulaşalım mı? - Öneri)"
        ]
      },
      {
        rule: { tr: "Spor ve Sağlık Terimleri", en: "Fitness Vocabulary" },
        explanation: {
          tr: "Het lidmaatschap / het abonnement (üyelik), trainen (idman yapmak), de spier / de spieren (kaslar), de conditie (kondisyon).",
          en: "Abonnement (membership), trainen (workout), spieren (muscles), conditie (stamina)."
        },
        examples: ["Ik wil mijn conditie verbeteren.", "Mijn abonnement gaat volgende week in."]
      }
    ],
    inburgeringTip: {
      tr: "'Zullen we...?' kalıbı Hollandacada kibar bir öneri ve davet kalıbıdır. Sınav konuşma bölümünde 'Zullen we om twee uur afspreken?' gibi cümleler kurmak size artı puan kazandırır.",
      en: "Use 'Zullen we...?' for polite invitations and scheduling in the speaking test."
    }
  },
  15: {
    title: { tr: "15. Ünite: Trende Yolculuk, NS Ulaşım Sistemi ve Geçmiş Zaman (Imperfectum)", en: "Chapter 15: Train Travel, Public Transit & Past Tense (Imperfectum)" },
    icon: "fa-solid fa-train",
    summary: {
      tr: "Toplu taşıma, tren yolculuğu, OV-chipkaart, aktarma yapma, Hollanda polder manzarası, geçmiş zamanın hikayesi (het imperfectum).",
      en: "Public transit, train journeys, OV-chipkaart, transfers, landscapes, and the simple past tense (imperfectum)."
    },
    keyPatterns: [
      {
        rule: { tr: "Düzenli Fiillerde Geçmiş Zaman (Het Imperfectum: 't kofschip)", en: "Simple Past: 't Kofschip Rule" },
        explanation: {
          tr: "Düzenli fiil kökü t, k, f, s, c, h, p harflerinden biriyle bitiyorsa tekilde '-te', çoğulda '-ten' alır. Diğer tüm harflerde '-de' ve '-den' gelir.",
          en: "If the verb stem ends in a consonant from 't kofschip (t, k, f, s, ch, p), add '-te(n)'. Otherwise, add '-de(n)'."
        },
        examples: [
          "werken (kök: werk) -> Ik werkte, wij werkten",
          "wonen (kök: woon) -> Ik woonde, wij woonden",
          "reizen (kök: reis) -> Ik reisde, wij reisden"
        ]
      },
      {
        rule: { tr: "Tren ve Ulaşım İfadeleri (NS & OV)", en: "Train & Transit Expressions" },
        explanation: {
          tr: "Het spoor (peron hattı), de vertraging (gecikme), overstappen (aktarma yapmak), inchecken / uitchecken (kart okutmak/çıkmak).",
          en: "Het spoor (track/platform), de vertraging (delay), overstappen (transfer), inchecken/uitchecken (tap card in/out)."
        },
        examples: ["De trein vertrekt van spoor 5b.", "Vergeet niet uit te checken! (Kartınızı okutup çıkmayı unutmayın!)"]
      }
    ],
    inburgeringTip: {
      tr: "Hollanda tren istasyonlarında ve otobüslerde kart okutma ('inchecken / uitchecken') kuralını bilmemek hem ceza sebebidir hem de KNM sınavında mutlaka sorulan bir kamu düzeni sorusudur.",
      en: "Always remember 'inchecken' and 'uitchecken' with your OV-chipkaart; this is also tested on KNM."
    }
  },
  16: {
    title: { tr: "16. Ünite: Sinema, Kültürel Etkinlikler ve Düzensiz Fiillerin Perfectum'u", en: "Chapter 16: Cinema, Culture & Irregular Past Participles" },
    icon: "fa-solid fa-film",
    summary: {
      tr: "Sinema ve tiyatro kültürü, film türleri, bilet alma, film incelemeleri ve en sık kullanılan düzensiz fiillerin geçmiş zaman ortaçları (ge-..-en).",
      en: "Cinema, film genres, buying tickets, reviews, and irregular past participles."
    },
    keyPatterns: [
      {
        rule: { tr: "Düzensiz Fiillerin Geçmiş Zamanı (Onregelmatige werkwoorden)", en: "Irregular Past Participles" },
        explanation: {
          tr: "Düzensiz fiillerin geçmiş zaman ortaçları genellikle 'ge- ... -en' ile biter ve ünlü değişimi yaşayabilir.",
          en: "Irregular past participles typically end in '-en' and often undergo a vowel change."
        },
        examples: [
          "kijken -> gekeken: Ik heb naar de film gekeken.",
          "spreken -> gesproken: De film is Nederlands gesproken.",
          "kiezen -> gekozen: We hebben een goede stoel gekozen."
        ]
      },
      {
        rule: { tr: "Sinema ve Film İfadeleri", en: "Cinema Expressions" },
        explanation: {
          tr: "ondertiteld (altyazılı), nagesynchroniseerd (dublajlı), de recensie (eleştiri/yorum), draaien (vizyonda olmak).",
          en: "ondertiteld (subtitled), de recensie (review), de zaal (screening room)."
        },
        examples: ["Welke film draait er vanavond?", "De film is Engels met Nederlandse ondertiteling."]
      }
    ],
    inburgeringTip: {
      tr: "Hollanda'da yabancı filmler ve diziler dublaj yapılmaz, orijinal dilinde altyazılı (ondertiteld) yayınlanır. Bu sayede televizyon izlemek Felemenkçe öğrenmenin en iyi yollarından biridir.",
      en: "In the Netherlands, films and foreign TV are broadcast in their original language with Dutch subtitles ('ondertiteld')."
    }
  },
  17: {
    title: { tr: "17. Ünite: Ev Yaşamı, Ev İşleri ve Telefon Görüşmesi Kuralları", en: "Chapter 17: At Home, Chores & Telephone Etiquette" },
    icon: "fa-solid fa-couch",
    summary: {
      tr: "Ev içi günlük yaşam, ev işlerinin paylaşımı (huishoudelijke taken), yemek yapma, telefonda profesyonel ve günlük konuşma kalıpları.",
      en: "Home life, division of domestic chores, cooking, and professional/casual phone etiquette."
    },
    keyPatterns: [
      {
        rule: { tr: "Telefonda Konuşma Kalıpları (A2 Standartları)", en: "Dutch Telephone Etiquette" },
        explanation: {
          tr: "Telefon açarken: 'Met [İsminiz]' (Ben ...). Arayanı sormak: 'Met wie spreek ik?'. Birini bağlamak: 'Een ogenblikje, ik verbind u door'. Not bırakmak: 'Kan ik een boodschap achterlaten?'.",
          en: "Answer with 'Met [Name]'. Ask identity with 'Met wie spreek ik?'. 'Een ogenblikje' = one moment please."
        },
        examples: ["Goedemorgen, met Selin Yilmaz.", "Spreek ik met meneer De Vries?", "Kan hij mij later terugbellen?"]
      },
      {
        rule: { tr: "Ev İşleri Terimleri (Huishoudelijke taken)", en: "Household Chores" },
        explanation: {
          tr: "schoonmaken (temizlik yapmak), stofzuigen (süpürge açmak), de afwas doen / de vaatwasser inruimen (bulaşık yıkamak/makineye dizmek), koken (yemek yapmak).",
          en: "schoonmaken (clean), stofzuigen (vacuum), de afwas doen (wash dishes), koken (cook)."
        },
        examples: ["Wie doet vandaag de afwas?", "Ik ruim de vaatwasser in."]
      }
    ],
    inburgeringTip: {
      tr: "İnburgering Konuşma sınavında telefon görüşmesi simülasyonu (doktoru arayıp randevu erteleme, iş yerine hasta olduğunu bildirme) en sık çıkan soru tipidir. 'Met [Adınız]' diyerek başlamayı unutmayın!",
      en: "Phone call simulations (calling in sick to work, calling the doctor) are standard tasks in the A2 speaking test."
    }
  },
  18: {
    title: { tr: "18. Ünite: Poliste, Resmi İhbarlar ve Tavsiye İsteme/Verme", en: "Chapter 18: At the Police, Formal Reports & Giving Advice" },
    icon: "fa-solid fa-shield-halved",
    summary: {
      tr: "Polis karakolunda kayıp veya çalıntı ihbarı yapma (aangifte doen), eşya tarif etme, tavsiye isteme ve verme kalıpları.",
      en: "Filing a police report for lost/stolen items, describing objects in detail, and asking for/giving advice."
    },
    keyPatterns: [
      {
        rule: { tr: "Poliste İhbar Yapma (Aangifte doen)", en: "Filing a Police Report" },
        explanation: {
          tr: "'Ik wil aangifte doen van diefstal' (Hırsızlık ihbarında bulunmak istiyorum). 'Mijn fiets is gestolen' (Bisikletim çalındı). Form doldurmak: 'het formulier invullen'.",
          en: "'Aangifte doen van diefstal' = report a theft. 'Mijn tas is gestolen' = my bag was stolen."
        },
        examples: ["Mijn fiets is gisteravond gestolen bij het station.", "Ik wil graag aangifte doen.", "Hier is het aankoopbewijs van mijn fiets."]
      },
      {
        rule: { tr: "Tavsiye İsteme ve Verme (Advies geven)", en: "Giving & Asking for Advice" },
        explanation: {
          tr: "Tavsiye isterken: 'Wat raadt u mij aan?' veya 'Wat moet ik doen?'. Tavsiye verirken: 'Je kunt het beste...', 'Ik raad je aan om...'.",
          en: "Asking advice: 'Wat kan ik het beste doen?'. Giving advice: 'Je kunt het beste direct je bankpas blokkeren'."
        },
        examples: ["Wat raadt u mij aan? - Ik raad je aan om direct je pas te blokkeren.", "Het beste is om naar het bureau te gaan."]
      }
    ],
    inburgeringTip: {
      tr: "Hollanda'da çalınan bisiklet veya eşyaların sigortadan (verzekering) tazmin edilebilmesi için polisten alınan resmi suç duyurusu raporu ('het proces-verbaal' / 'het aangifterapport') şarttır.",
      en: "For insurance claims after a theft, you always need the official police report ('het proces-verbaal')."
    }
  }
};
