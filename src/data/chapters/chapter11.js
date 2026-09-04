// src/data/chapters/chapter11.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter11Vocab = [
  { id: "11_1", chapter: 11, nl: "de buurvrouw", en: "neighbour (f)", example: "Marit is de buurvrouw van Tom." },
  { id: "11_2", chapter: 11, nl: "leven", en: "live", example: "Lang zal ze leven!" },
  { id: "11_3", chapter: 11, nl: "hoera", en: "hooray", example: "Hoera, het is feest!" },
  { id: "11_4", chapter: 11, nl: "van harte gefeliciteerd", en: "happy birthday / congratulations", example: "Van harte gefeliciteerd met je verjaardag." },
  { id: "11_5", chapter: 11, nl: "feliciteren met", en: "congratulate on", example: "Ik ga mijn familie feliciteren." },
  { id: "11_6", chapter: 11, nl: "het cadeautje (het cadeau)", en: "present", example: "Ik heb een cadeautje voor je." },
  { id: "11_7", chapter: 11, nl: "het kaartje", en: "ticket", example: "Een kaartje voor Festival Cubana." },
  { id: "11_8", chapter: 11, nl: "het festival", en: "festival", example: "We gaan naar een muziekfestival." },
  { id: "11_9", chapter: 11, nl: "hoop (hopen)", en: "hope", example: "Ik hoop dat je geen kaartje hebt." },
  { id: "11_10", chapter: 11, nl: "dat", en: "that", example: "Dat is een goed idee." },
  { id: "11_11", chapter: 11, nl: "nog geen", en: "not yet", example: "Ik heb nog geen kaartje." },
  { id: "11_12", chapter: 11, nl: "Cubaanse", en: "Cuban", example: "Ik houd van Cubaanse muziek." },
  { id: "11_13", chapter: 11, nl: "de muziek", en: "music", example: "De muziek staat erg hard." },
  { id: "11_14", chapter: 11, nl: "ben gek op (gek zijn op)", en: "am crazy about", example: "Ik ben gek op films." },
  { id: "11_15", chapter: 11, nl: "me herinneren (zich herinneren)", en: "remember", example: "Dat kan ik me herinneren." },
  { id: "11_16", chapter: 11, nl: "de keer", en: "time", example: "Je hebt dat een keer verteld." },
  { id: "11_17", chapter: 11, nl: "verteld (vertellen)", en: "told", example: "Hij heeft een verhaal verteld." },
  { id: "11_18", chapter: 11, nl: "de taart", en: "cake", example: "In de keuken staat koffie en taart." },
  { id: "11_19", chapter: 11, nl: "je weet de weg (de weg weten)", en: "you know the way", example: "Kom maar binnen, je weet de weg." },
  { id: "11_20", chapter: 11, nl: "doe open (open doen)", en: "open", example: "Dan doe ik even de deur open." },
  { id: "11_21", chapter: 11, nl: "de deur", en: "door", example: "Er staat iemand voor de deur." },
  { id: "11_22", chapter: 11, nl: "eerst", en: "first", example: "Ik ga eerst even familie feliciteren." },
  { id: "11_23", chapter: 11, nl: "gezien (zien)", en: "seen", example: "Lang niet gezien, alles goed?" },
  { id: "11_24", chapter: 11, nl: "het bedrijf", en: "company", example: "Hoe is het met je bedrijf?" },
  { id: "11_25", chapter: 11, nl: "de accountant", en: "accountant", example: "Je bent toch accountant?" },
  { id: "11_26", chapter: 11, nl: "vergis ik me (zich vergissen)", en: "am I mistaken", example: "Of vergis ik me?" },
  { id: "11_27", chapter: 11, nl: "het kantoor", en: "office", example: "Ik werk niet meer op kantoor." },
  { id: "11_28", chapter: 11, nl: "eigen", en: "own", example: "Ik heb een eigen bedrijf." },
  { id: "11_29", chapter: 11, nl: "de baas", en: "boss", example: "Ik ben eigen baas geworden." },
  { id: "11_30", chapter: 11, nl: "druk", en: "busy", example: "Ik heb het erg druk." },
  { id: "11_31", chapter: 11, nl: "de tijd", en: "time", example: "Het kost wel veel tijd." },
  { id: "11_32", chapter: 11, nl: "verveel me (zich vervelen)", en: "am bored", example: "Ik verveel me nooit." },
  { id: "11_33", chapter: 11, nl: "nooit", en: "never", example: "Dat doe ik nooit." },
  { id: "11_34", chapter: 11, nl: "het buitenland", en: "abroad", example: "Kom je uit het buitenland?" },
  { id: "11_35", chapter: 11, nl: "hoor (horen)", en: "hear", example: "Hoor ik een Duits accent?" },
  { id: "11_36", chapter: 11, nl: "Duits", en: "German", example: "Hij spreekt Duits." },
  { id: "11_37", chapter: 11, nl: "het accent", en: "accent", example: "Zij heeft een mooi accent." },
  { id: "11_38", chapter: 11, nl: "dat klopt", en: "that's right", example: "Ja, dat klopt." },
  { id: "11_39", chapter: 11, nl: "sinds kort", en: "recently", example: "Ik woon hier sinds kort." },
  { id: "11_40", chapter: 11, nl: "het bevalt me", en: "I enjoy it / I like it", example: "Het bevalt me heel goed hier." },
  { id: "11_41", chapter: 11, nl: "studeer (studeren)", en: "study", example: "Ik studeer logopedie." },
  { id: "11_42", chapter: 11, nl: "de student", en: "student", example: "Kirsten is student." },
  { id: "11_43", chapter: 11, nl: "de logopedie", en: "speech therapy", example: "Ze studeert logopedie." },
  { id: "11_44", chapter: 11, nl: "naast", en: "besides", example: "Doe je nog iets naast je studie?" },
  { id: "11_45", chapter: 11, nl: "het bijbaantje", en: "job on the side / part-time job", example: "Ik heb een bijbaantje." },
  { id: "11_46", chapter: 11, nl: "de studie", en: "study", example: "Mijn studie is interessant." },
  { id: "11_47", chapter: 11, nl: "iedere (ieder)", en: "each / every", example: "Ik werk iedere donderdag." },
  { id: "11_48", chapter: 11, nl: "de bioscoop", en: "cinema", example: "We gaan naar de bioscoop." },
  { id: "11_49", chapter: 11, nl: "interesseer je (zich interesseren)", en: "are you interested", example: "Interesseer je je voor films?" },
  { id: "11_50", chapter: 11, nl: "gewoon", en: "just", example: "Is het gewoon een bijbaantje?" },
  { id: "11_51", chapter: 11, nl: "begrijp (begrijpen)", en: "understand", example: "Ik begrijp het niet." },
  { id: "11_52", chapter: 11, nl: "snel", en: "fast", example: "Niet zo snel alsjeblieft." },
  { id: "11_53", chapter: 11, nl: "de hobby", en: "hobby", example: "Wat is je hobby?" },
  { id: "11_54", chapter: 11, nl: "niet echt", en: "not really", example: "Nee, niet echt." },
  { id: "11_55", chapter: 11, nl: "de sport", en: "sport", example: "Ik houd meer van sport." },
  { id: "11_56", chapter: 11, nl: "zwemmen", en: "swimming", example: "Zwemmen en wandelen." },
  { id: "11_57", chapter: 11, nl: "wandelen", en: "walking / hiking", example: "We gaan vaak wandelen." },
  { id: "11_58", chapter: 11, nl: "wat toevallig", en: "what a coincidence", example: "Wat toevallig zeg, ik ook." },
  { id: "11_59", chapter: 11, nl: "de Wandelbeurs", en: "Walking Fair", example: "Ik was op de Wandelbeurs." },
  { id: "11_60", chapter: 11, nl: "bereid me voor op (zich voorbereiden op)", en: "am getting ready for", example: "Ik bereid me voor op een reis." },
  { id: "11_61", chapter: 11, nl: "de wandelreis", en: "walking tour", example: "Een lange wandelreis in Chili." },
  { id: "11_62", chapter: 11, nl: "de reis", en: "trip", example: "De reis is erg lang." },
  { id: "11_63", chapter: 11, nl: "Chili", en: "Chile", example: "Hij gaat naar Chili." },
  { id: "11_64", chapter: 11, nl: "de informatie", en: "information", example: "Daar krijg je goede informatie." },
  { id: "11_65", chapter: 11, nl: "interessant", en: "interesting", example: "Dat is erg interessant." },
  { id: "11_66", chapter: 11, nl: "opschrijven", en: "write down", example: "Dat wil ik even opschrijven." },
  { id: "11_67", chapter: 11, nl: "onthouden", en: "remember", example: "Ik kan het niet onthouden." },
  { id: "11_68", chapter: 11, nl: "langzamer (langzaam)", en: "more slowly", example: "Kun je iets langzamer praten?" },
  { id: "11_69", chapter: 11, nl: "de pen", en: "pen", example: "Heb je een pen bij je?" },
  { id: "11_70", chapter: 11, nl: "het papier", en: "paper", example: "Pen en papier." },
  { id: "11_71", chapter: 11, nl: "praten", en: "speak", example: "Zij praten met elkaar." }
];

export const chapter11Dialogues = {
  "11.1": [
    { speaker: "Verteller", text: "De fietsenmaker, Tom, gaat naar de verjaardag van zijn buurvrouw Marit.", translation: { tr: "Bisiklet tamircisi Tom, komşusu Marit'in doğum gününe gider.", en: "The bicycle repairman, Tom, goes to his neighbor Marit's birthday." } },
    { speaker: "Tom", text: "Lang zal ze leven, lang zal ze leven ... Hoera Marit, van harte gefeliciteerd met je verjaardag. Ik heb een cadeautje voor je, alsjeblieft.", translation: { tr: "Çok yaşa, çok yaşa ... Hurra Marit, doğum günün kutlu olsun. Senin için bir hediyem var, buyur.", en: "Long may she live, long may she live ... Hooray Marit, happy birthday to you. I have a present for you, here you go." } },
    { speaker: "Marit", text: "O, een kaartje voor Festival Cubana! Wat leuk. Wat een goed idee. Dank je wel.", translation: { tr: "Oh, Cubana Festivali için bir bilet! Ne kadar güzel. Ne iyi bir fikir. Teşekkür ederim.", en: "Oh, a ticket for Festival Cubana! How nice. What a good idea. Thank you." } },
    { speaker: "Tom", text: "Het is dat festival in april, weet je wel? Ik hoop dat je nog geen kaartje hebt.", translation: { tr: "Nisandaki o festival, biliyorsun değil mi? Umarım henüz bir biletin yoktur.", en: "It's that festival in April, you know? I hope you don't have a ticket yet." } },
    { speaker: "Marit", text: "Nee. Fantastisch. Ik ben gek op Cubaanse muziek.", translation: { tr: "Hayır. Harika. Küba müziğine bayılırım.", en: "No. Fantastic. I'm crazy about Cuban music." } },
    { speaker: "Tom", text: "Ja, dat kon ik me herinneren, dat heb je een keer verteld.", translation: { tr: "Evet, bunu hatırlıyordum, bir keresinde anlatmıştın.", en: "Yes, I could remember that, you told me that once." } },
    { speaker: "Verteller", text: "Tring!", translation: { tr: "Zırrr!", en: "Ring!" } },
    { speaker: "Marit", text: "Tom, in de keuken staat koffie en taart, je weet de weg. Dan doe ik even de deur open.", translation: { tr: "Tom, mutfakta kahve ve pasta var, yolu biliyorsun. Ben bir kapıyı açayım.", en: "Tom, there's coffee and cake in the kitchen, you know the way. Then I'll just go open the door." } },
    { speaker: "Tom", text: "Lekker, maar ik ga eerst even je familie en vrienden feliciteren. Hé Peter, gefeliciteerd met je vriendin. Lang niet gezien, alles goed? Hoe is het met je bedrijf? Je bent toch accountant, of vergis ik me?", translation: { tr: "Lezzetli, ama ben önce aileni ve arkadaşlarını tebrik edeyim. Hey Peter, kız arkadaşın(ın doğum günü) için tebrikler. Görüşmeyeli uzun zaman oldu, her şey yolunda mı? Şirketin nasıl? Sen muhasebeciydin değil mi, yoksa yanılıyor muyum?", en: "Nice, but first I'll go congratulate your family and friends. Hey Peter, congratulations on your girlfriend. Long time no see, everything good? How's it going with your company? You are an accountant, right, or am I mistaken?" } },
    { speaker: "Peter", text: "Nee, je vergist je niet. Ik werk niet meer op kantoor. Ik ben eigen baas geworden. Het gaat goed. Ik heb het druk, het kost wel veel tijd hoor, een eigen bedrijf. Ik verveel me nooit. Hé, daar is Kirsten. Kennen jullie elkaar?", translation: { tr: "Hayır, yanılmıyorsun. Artık ofiste çalışmıyorum. Kendi işimin patronu oldum. İyi gidiyor. Meşgulüm, kendi şirketinin olması epey zaman alıyor doğrusu. Hiç sıkılmıyorum. Hey, işte Kirsten. Siz birbirinizi tanıyor musunuz?", en: "No, you're not mistaken. I don't work in the office anymore. I became my own boss. It's going well. I'm busy, it does take a lot of time, having your own company. I'm never bored. Hey, there is Kirsten. Do you know each other?" } },
    { speaker: "Tom", text: "Hallo, nee, wij kennen elkaar nog niet. Ik zal me even voorstellen, ik ben Tom Fransen, de buurman van Marit.", translation: { tr: "Merhaba, hayır, biz henüz tanışmıyoruz. Kendimi tanıtayım, ben Tom Fransen, Marit'in komşusu.", en: "Hello, no, we don't know each other yet. I'll just introduce myself, I'm Tom Fransen, Marit's neighbor." } },
    { speaker: "Kirsten", text: "Hallo, ik ben Kirsten Baumer, ik ben een vriendin van Marit. Prettig met je kennis te maken.", translation: { tr: "Merhaba, ben Kirsten Baumer, Marit'in arkadaşıyım. Tanıştığıma memnun oldum.", en: "Hello, I am Kirsten Baumer, I am a friend of Marit. Pleased to meet you." } },
    { speaker: "Tom", text: "Kom je uit het buitenland? Hoor ik een Duits accent?", translation: { tr: "Yurtdışından mı geliyorsun? Alman aksanı mı duyuyorum?", en: "Are you from abroad? Do I hear a German accent?" } },
    { speaker: "Kirsten", text: "Ja, dat klopt, ik kom uit Hamburg en woon sinds kort in Nederland. Het bevalt me heel goed hier, ik voel me thuis in Nederland.", translation: { tr: "Evet, doğru, Hamburg'danım ve kısa süredir Hollanda'da yaşıyorum. Burası çok hoşuma gidiyor, Hollanda'da kendimi evimde hissediyorum.", en: "Yes, that's right, I'm from Hamburg and have been living in the Netherlands recently. I really like it here, I feel at home in the Netherlands." } },
    { speaker: "Tom", text: "Wat doe je? Studeer je of werk je?", translation: { tr: "Ne yapıyorsun? Okuyor musun yoksa çalışıyor musun?", en: "What do you do? Do you study or work?" } },
    { speaker: "Kirsten", text: "Ik ben student. Ik studeer logopedie.", translation: { tr: "Öğrenciyim. Logopedi (dil ve konuşma terapisi) okuyorum.", en: "I am a student. I study speech therapy." } },
    { speaker: "Tom", text: "Doe je ook nog iets naast je studie?", translation: { tr: "Okulun yanında başka bir şey yapıyor musun?", en: "Do you do anything else besides your studies?" } },
    { speaker: "Kirsten", text: "Ja, ik heb een bijbaantje. Ik werk iedere donderdag in de bioscoop.", translation: { tr: "Evet, ek bir işim (yarı zamanlı işim) var. Her perşembe sinemada çalışıyorum.", en: "Yes, I have a part-time job. I work in the cinema every Thursday." } },
    { speaker: "Tom", text: "Wat leuk, interesseer je je ook voor films of is het gewoon een bijbaantje?", translation: { tr: "Ne güzel, filmlere de ilgi duyuyor musun yoksa sadece bir ek iş mi?", en: "How nice, are you also interested in films or is it just a part-time job?" } },
    { speaker: "Kirsten", text: "Ik begrijp het niet. Niet zo snel alsjeblieft, mijn Nederlands is nog niet zo goed.", translation: { tr: "Anlamıyorum. O kadar hızlı değil lütfen, Hollandacam henüz o kadar iyi değil.", en: "I don't understand. Not so fast please, my Dutch is not that good yet." } },
    { speaker: "Tom", text: "Is film ook je hobby?", translation: { tr: "Film izlemek de hobin mi?", en: "Is film also your hobby?" } },
    { speaker: "Kirsten", text: "Nee, niet echt. Ik houd meer van sport, van zwemmen en wandelen.", translation: { tr: "Hayır, tam olarak değil. Spora, yüzmeye ve yürüyüş yapmaya daha çok ilgi duyuyorum.", en: "No, not really. I like sports more, swimming and hiking." } },
    { speaker: "Tom", text: "Wat toevallig zeg, ik ook. Ik ben gisteren naar de Wandelbeurs in Amsterdam geweest. Ik bereid me voor op een lange wandelreis in Chili. Op die beurs krijg je goede informatie. Het is misschien ook wel interessant voor jou.", translation: { tr: "Ne tesadüf, ben de. Dün Amsterdam'daki Yürüyüş Fuarına gittim. Şili'de uzun bir yürüyüş turuna hazırlanıyorum. O fuarda iyi bilgiler alıyorsun. Belki senin için de ilginç olabilir.", en: "What a coincidence, me too. I went to the Walking Fair in Amsterdam yesterday. I am preparing for a long walking trip in Chile. You get good information at that fair. It might be interesting for you too." } },
    { speaker: "Kirsten", text: "Ja, dat wil ik graag even opschrijven. Ik kan het anders niet onthouden. Heb je pen en papier bij je? En kun je misschien iets langzamer praten?", translation: { tr: "Evet, bunu hemen yazmak istiyorum. Yoksa aklımda tutamam. Yanında kalem ve kağıt var mı? Ve belki biraz daha yavaş konuşabilir misin?", en: "Yes, I would like to write that down. Otherwise I won't remember. Do you have a pen and paper with you? And could you maybe speak a little slower?" } },
    { speaker: "Tom", text: "Ja, natuurlijk. Alsjeblieft, hier is een pen.", translation: { tr: "Evet, elbette. Buyur, işte bir kalem.", en: "Yes, of course. Here you go, here is a pen." } }
  ]
};

export const chapter11Sections = [
  {
    id: "11.1",
    chapter: 11,
    title: "11.1 Dialoog: Op een verjaardag",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Doğum Gününde (Op een verjaardag)</h3>
            <p>Tom, komşusu Marit'in doğum günü partisine gider. Orada Peter ve Almanya'dan yeni gelmiş Kirsten ile tanışır. İnsanların kendilerini nasıl tanıttığına ve iş/okul hayatlarıyla ilgili nasıl sohbet başlattıklarına dikkat et.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialogue: At a birthday party</h3>
            <p>Tom goes to his neighbor Marit's birthday party. There he meets Peter and Kirsten, who recently arrived from Germany. Pay attention to how people introduce themselves and start conversations about work/school.</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Reading Comprehension)",
        isExtra: true,
        questions: [
          { id: "11.1_smart_1", type: "multiple_choice", question: "Waarom geeft Tom een kaartje voor Festival Cubana aan Marit?", options: ["Omdat Tom zelf niet kan gaan.", "Omdat Marit van Cubaanse muziek houdt.", "Omdat Peter ook naar het festival gaat."], correctAnswer: "Omdat Marit van Cubaanse muziek houdt." },
          { id: "11.1_smart_2", type: "fill_in", question: "Kirsten vindt dat Tom te snel praat. Ze vraagt: 'Kun je misschien iets ________ praten?'", correctAnswer: "langzamer" },
          { id: "11.1_smart_3", type: "multiple_choice", question: "Wat betekent de zin 'Ik ben gek op films'?", options: ["Ben filmlerden nefret ederim.", "Ben filmlere bayılırım / hastasıyım.", "Ben filmlerde oynamak istiyorum."], correctAnswer: "Ben filmlere bayılırım / hastasıyım." }
        ]
      }
    ]
  },
  {
    id: "11.2",
    chapter: 11,
    title: "11.2 Woordenlijst & Opdracht 1",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
            <p>Diyalogdaki karakterlerin hayatları hakkında bazı temel bilgiler öğrendik. Şimdi bu bilgileri eşleştirme zamanı.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Vocabulary Analysis</h3>
            <p>We learned some basic information about the lives of the characters in the dialogue. Now it's time to match this information.</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Wat weet je over de mensen in de dialoog? (What do you know about the people?)",
        isExtra: false,
        questions: [
          { id: "11.2_opd1_1", type: "multiple_choice", question: "1. Wat doet Peter nu?", options: ["Hij werkt nog op kantoor.", "Hij is eigen baas geworden.", "Hij is een student."], correctAnswer: "Hij is eigen baas geworden." },
          { id: "11.2_opd1_2", type: "multiple_choice", question: "2. Waar is Tom gisteren geweest?", options: ["Naar Festival Cubana", "Naar Chili", "Naar de Wandelbeurs in Amsterdam"], correctAnswer: "Naar de Wandelbeurs in Amsterdam" },
          { id: "11.2_opd1_3", type: "multiple_choice", question: "3. Wat doet Kirsten naast haar studie?", options: ["Ze werkt iedere donderdag in de bioscoop.", "Ze zingt Cubaanse muziek.", "Ze werkt als accountant."], correctAnswer: "Ze werkt iedere donderdag in de bioscoop." },
          { id: "11.2_opd1_4", type: "multiple_choice", question: "4. Houdt Kirsten veel van films?", options: ["Ja, het is haar hobby.", "Nee, niet echt. Ze houdt van sport.", "Ja, ze is gek op films."], correctAnswer: "Nee, niet echt. Ze houdt van sport." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Kelime Bilgisi Testi",
        isExtra: true,
        questions: generateSmartQuestions(11, "Woorden", 10, chapter11Vocab)
      }
    ]
  },
  {
    id: "11.3",
    chapter: 11,
    title: "11.3 Vragen over werk, studie en hobby's",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>🗣️ İş, Eğitim ve Hobiler Hakkında Soru Sormak</h3>
              <p>Birisiyle tanıştığınızda mesleğini veya ilgi alanlarını sormak Hollandacada çok basittir:</p>
              <ul style={{ margin: '10px 0', paddingLeft: '20px', color: 'var(--text-main)' }}>
                <li><strong>Wat doe je?</strong> (Ne yapıyorsun? / Ne iş yapıyorsun?)</li>
                <li><strong>Studeer je? / Werk je?</strong> (Okuyor musun? / Çalışıyor musun?)</li>
                <li><strong>Heb je een baan?</strong> (Bir işin var mı?)</li>
                <li><strong>Doe je ook nog iets naast je studie?</strong> (Eğitiminin yanında başka bir şey de yapıyor musun? -> Hollandalı öğrenciler genellikle "bijbaantje" adı verilen ek işlerde çalışırlar).</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>💬 Reacties geven (Tepki Vermek)</h3>
              <p>Reageren in een gesprek is belangrijk. Gebruik "Wat + adjectief":</p>
              <p><em>Wat leuk! Wat toevallig! Wat jammer! Wat gezellig! Wat lekker! Wat interessant! Wat vervelend!</em></p>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #06b6d4', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#22d3ee' }}>🗣️ Asking about work, studies and hobbies</h3>
              <p>When you meet someone, asking about their profession or interests is very simple in Dutch:</p>
              <ul style={{ margin: '10px 0', paddingLeft: '20px', color: 'var(--text-main)' }}>
                <li><strong>Wat doe je?</strong> (What do you do? / What is your job?)</li>
                <li><strong>Studeer je? / Werk je?</strong> (Do you study? / Do you work?)</li>
                <li><strong>Heb je een baan?</strong> (Do you have a job?)</li>
                <li><strong>Doe je ook nog iets naast je studie?</strong> (Do you do anything else besides your studies? -> Dutch students often work side jobs called "bijbaantje").</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>💬 Reacties geven (Reacting)</h3>
              <p>Reacting in a conversation is important. Use "Wat + adjective":</p>
              <p><em>Wat leuk! Wat toevallig! Wat jammer! Wat gezellig! Wat lekker! Wat interessant! Wat vervelend!</em></p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 2: Wat was de vraag? (Kies de logische vraag bij het antwoord / Choose the logical question)",
        isExtra: false,
        questions: [
          { id: "11.3_opd2_1", type: "multiple_choice", question: "Antwoord: 'Nee, ik studeer.'", options: ["Werk je?", "Studeer je?", "Heb je een hobby?"], correctAnswer: "Werk je?" },
          { id: "11.3_opd2_2", type: "multiple_choice", question: "Antwoord: 'Nee, in een dorp hier in de buurt.'", options: ["Kom je uit het buitenland?", "Woon je in de stad?", "Waar werk je?"], correctAnswer: "Woon je in de stad?" },
          { id: "11.3_opd2_3", type: "multiple_choice", question: "Antwoord: 'Ik ben docent Frans.'", options: ["Wat is je hobby?", "Wat doe je?", "Waar woon je?"], correctAnswer: "Wat doe je?" },
          { id: "11.3_opd2_4", type: "multiple_choice", question: "Antwoord: 'Ja, ik ben gek op films.'", options: ["Wat is je werk?", "Is film je hobby?", "Studeer je?"], correctAnswer: "Is film je hobby?" },
          { id: "11.3_opd2_5", type: "multiple_choice", question: "Antwoord: 'Uit India.'", options: ["Waar kom je vandaan?", "Waar werk je?", "Waar ga je naartoe?"], correctAnswer: "Waar kom je vandaan?" },
          { id: "11.3_opd2_6", type: "multiple_choice", question: "Antwoord: 'Ja, ik ken haar al heel lang.'", options: ["Ken je Marit?", "Ben je de buurman?", "Hoe heet ze?"], correctAnswer: "Ken je Marit?" },
          { id: "11.3_opd2_7", type: "multiple_choice", question: "Antwoord: 'Ik ben de buurman van Susan.'", options: ["Kennen jullie elkaar?", "Wie ben jij?", "Waar kom je vandaan?"], correctAnswer: "Wie ben jij?" }
        ]
      }
    ]
  },
  {
    id: "11.4",
    chapter: 11,
    title: "11.4 Reacties (Tepkiler / Reactions)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>💬 "Wat + Sıfat!" Kalıbı ile Tepki Vermek</h3>
            <p>Hollandacada sohbete katılım göstermek ve karşıdakinin anlattığına tepki vermek için <strong>"Wat + Adjectief!" (Ne kadar + Sıfat!)</strong> kalıbı sıklıkla kullanılır:</p>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p><strong>Wat leuk!</strong> (Ne güzel!)</p>
                <p><strong>Wat toevallig!</strong> (Ne tesadüf!)</p>
                <p><strong>Wat jammer!</strong> (Ne yazık/Tüh!)</p>
              </div>
              <div>
                <p><strong>Wat gezellig!</strong> (Ne hoş/Samimi!)</p>
                <p><strong>Wat lekker!</strong> (Ne lezzetli!)</p>
                <p><strong>Wat vervelend!</strong> (Ne can sıkıcı/Kötü!)</p>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ec4899', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f472b6' }}>💬 Reacting with "Wat + Adjective!"</h3>
            <p>In Dutch, to participate in a conversation and react to what someone is saying, the <strong>"Wat + Adjectief!" (How + Adjective!)</strong> pattern is frequently used:</p>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p><strong>Wat leuk!</strong> (How nice/fun!)</p>
                <p><strong>Wat toevallig!</strong> (What a coincidence!)</p>
                <p><strong>Wat jammer!</strong> (What a pity!)</p>
              </div>
              <div>
                <p><strong>Wat gezellig!</strong> (How cozy/fun!)</p>
                <p><strong>Wat lekker!</strong> (How delicious!)</p>
                <p><strong>Wat vervelend!</strong> (How annoying/unpleasant!)</p>
              </div>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Hoe reageer je in deze situaties? (How do you react in these situations?)",
        isExtra: false,
        questions: [
          { id: "11.4_opd3_1", type: "multiple_choice", question: "Mijn remmen doen het niet meer.", options: ["Wat vervelend!", "Wat lekker!", "Wat gezellig!"], correctAnswer: "Wat vervelend!" },
          { id: "11.4_opd3_2", type: "multiple_choice", question: "Ik ben vandaag jarig.", options: ["Wat jammer!", "Gefeliciteerd! / Wat leuk!", "Wat toevallig!"], correctAnswer: "Gefeliciteerd! / Wat leuk!" },
          { id: "11.4_opd3_3", type: "multiple_choice", question: "Ik heb een nieuwe baan gekregen.", options: ["Wat vervelend!", "Wat leuk! / Fantastisch!", "Wat jammer!"], correctAnswer: "Wat leuk! / Fantastisch!" },
          { id: "11.4_opd3_4", type: "multiple_choice", question: "Ik ga vanavond met mijn vriendin uit eten.", options: ["Wat gezellig!", "Wat toevallig!", "Wat vervelend!"], correctAnswer: "Wat gezellig!" },
          { id: "11.4_opd3_5", type: "multiple_choice", question: "Studeer jij logopedie? Ik ook.", options: ["Wat jammer!", "Wat vervelend!", "Wat toevallig!"], correctAnswer: "Wat toevallig!" },
          { id: "11.4_opd3_6", type: "multiple_choice", question: "Ik kan niet op je verjaardag komen.", options: ["Wat gezellig!", "Wat interessant!", "Wat jammer!"], correctAnswer: "Wat jammer!" },
          { id: "11.4_opd3_7", type: "multiple_choice", question: "Ik heb het veel te druk.", options: ["Wat vervelend!", "Wat leuk!", "Wat toevallig!"], correctAnswer: "Wat vervelend!" },
          { id: "11.4_opd3_8", type: "multiple_choice", question: "Ik ga met een paar vrienden naar de film.", options: ["Wat gezellig!", "Wat jammer!", "Wat vervelend!"], correctAnswer: "Wat gezellig!" },
          { id: "11.4_opd3_9", type: "multiple_choice", question: "Ik heb een heel bijzonder boek over fietsen gekocht.", options: ["Wat jammer!", "Wat interessant!", "Wat vervelend!"], correctAnswer: "Wat interessant!" },
          { id: "11.4_opd3_10", type: "multiple_choice", question: "Kijk, hier is koffie met taart.", options: ["Wat lekker!", "Wat vervelend!", "Wat toevallig!"], correctAnswer: "Wat lekker!" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises)",
        isExtra: true,
        questions: [
          { id: "11.4_smart_1", type: "multiple_choice", question: "Je vriend zegt: 'Mijn fiets is gestolen.' Hoe reageer jij?", options: ["Wat leuk!", "Wat vervelend!", "Wat toevallig!"], correctAnswer: "Wat vervelend!" },
          { id: "11.4_smart_2", type: "fill_in", question: "A: 'Ik kom ook uit Hamburg!' B: 'Wat ________! Ik kom ook uit Hamburg.' (Tesadüf/Coincidence)", correctAnswer: "toevallig" }
        ]
      }
    ]
  },
  {
    id: "11.5",
    chapter: 11,
    title: "11.5 Reflexieve Werkwoorden",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔄 Reflexieve Werkwoorden (Dönüşlü Fiiller)</h3>
            <p>Bazı fiiller, eylemin özneye (kişinin kendisine) geri döndüğünü belirtmek için mutlaka bir <strong>Dönüşlü Zamire (Reflexief Pronomen)</strong> ihtiyaç duyar. Örneğin Türkçede "yıka-n-mak" (kendini yıkamak) gibi.</p>
            <ul style={{ margin: '10px 0', color: 'var(--text-muted)' }}>
              <li><strong>zich herinneren:</strong> hatırlamak <em>(Ik herinner me...)</em></li>
              <li><strong>zich vergissen:</strong> yanılmak <em>(Jij vergist je...)</em></li>
              <li><strong>zich voorstellen:</strong> kendini tanıtmak <em>(Hij stelt zich voor...)</em></li>
              <li><strong>zich voelen:</strong> hissetmek <em>(Wij voelen ons...)</em></li>
              <li><strong>zich interesseren (voor):</strong> ilgi duymak <em>(Jullie interesseren je...)</em></li>
              <li><strong>zich voorbereiden (op):</strong> hazırlanmak <em>(Zij bereiden zich voor...)</em></li>
            </ul>
            
            <table style={{ width: '100%', marginTop: '15px' }}>
              <thead><tr><th className="text-left">Subject (Özne)</th><th className="text-left">Reflexief Pronomen (Zamir)</th></tr></thead>
              <tbody>
                <tr><td>ik</td><td><strong>me</strong></td></tr>
                <tr><td>jij / je</td><td><strong>je</strong></td></tr>
                <tr><td>u</td><td><strong>u / zich</strong></td></tr>
                <tr><td>hij / zij / het</td><td><strong>zich</strong></td></tr>
                <tr><td>wij / we</td><td><strong>ons</strong></td></tr>
                <tr><td>jullie</td><td><strong>je</strong></td></tr>
                <tr><td>zij / ze (çoğul)</td><td><strong>zich</strong></td></tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>🔄 Reflexieve Werkwoorden (Reflexive Verbs)</h3>
            <p>Some verbs require a <strong>Reflexive Pronoun</strong> to indicate that the action reflects back onto the subject (themselves).</p>
            <ul style={{ margin: '10px 0', color: 'var(--text-muted)' }}>
              <li><strong>zich herinneren:</strong> to remember <em>(Ik herinner me...)</em></li>
              <li><strong>zich vergissen:</strong> to be mistaken <em>(Jij vergist je...)</em></li>
              <li><strong>zich voorstellen:</strong> to introduce oneself <em>(Hij stelt zich voor...)</em></li>
              <li><strong>zich voelen:</strong> to feel <em>(Wij voelen ons...)</em></li>
              <li><strong>zich interesseren (voor):</strong> to be interested in <em>(Jullie interesseren je...)</em></li>
              <li><strong>zich voorbereiden (op):</strong> to prepare for <em>(Zij bereiden zich voor...)</em></li>
            </ul>
            
            <table style={{ width: '100%', marginTop: '15px' }}>
              <thead><tr><th className="text-left">Subject</th><th className="text-left">Reflexive Pronoun</th></tr></thead>
              <tbody>
                <tr><td>ik</td><td><strong>me</strong></td></tr>
                <tr><td>jij / je</td><td><strong>je</strong></td></tr>
                <tr><td>u</td><td><strong>u / zich</strong></td></tr>
                <tr><td>hij / zij / het</td><td><strong>zich</strong></td></tr>
                <tr><td>wij / we</td><td><strong>ons</strong></td></tr>
                <tr><td>jullie</td><td><strong>je</strong></td></tr>
                <tr><td>zij / ze (plural)</td><td><strong>zich</strong></td></tr>
              </tbody>
            </table>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 7: Imperfectum + Reflexief (A = Vandaag, B = Gisteren)",
        isExtra: false,
        questions: [
          { id: "11.5_opd7_1", type: "fill_in", question: "A: Ik heb me al voorgesteld. En jij? -> B: Ik heb ________ ook al voorgesteld.", correctAnswer: "me" },
          { id: "11.5_opd7_2", type: "fill_in", question: "A: Stefan verveelt zich een beetje. En jullie? -> B: Wij vervelen ________ ons ook een beetje.", correctAnswer: "ons" },
          { id: "11.5_opd7_3", type: "fill_in", question: "A: Martijn vergist zich. En wij? -> B: Wij vergissen ________ ook.", correctAnswer: "ons" },
          { id: "11.5_opd7_4", type: "fill_in", question: "A: Ik voel me niet lekker. En de kinderen? -> B: Zij (mv) voelen ________ ook niet lekker.", correctAnswer: "zich" },
          { id: "11.5_opd7_5", type: "fill_in", question: "A: Hij stelde zich niet voor. En zijn vrouw? -> B: Zij stelde ________ ook niet voor.", correctAnswer: "zich" },
          { id: "11.5_opd7_6", type: "fill_in", question: "A: De studenten verveelden zich. En de docent? -> B: Hij verveelde ________ ook.", correctAnswer: "zich" },
          { id: "11.5_opd7_7", type: "fill_in", question: "A: Ik heb me vergist. En jij? -> B: Ik heb ________ ook vergist.", correctAnswer: "me" },
          { id: "11.5_opd7_8", type: "fill_in", question: "A: Ik herinner me niets van die man. En Olivier? -> B: Hij herinnert ________ zich ook niets.", correctAnswer: "zich" },
          { id: "11.5_opd7_9", type: "fill_in", question: "A: John heeft zich goed voorbereid. En jij? -> B: Ik heb ________ ook goed voorbereid.", correctAnswer: "me" },
          { id: "11.5_opd7_10", type: "fill_in", question: "A: Hij herinnerde het zich niet. En zijn vriendin? -> B: Zij herinnerde het ________ ook niet.", correctAnswer: "zich" }
        ]
      },
      {
        instruction: "Opdracht 8: Geef antwoord met het reflexieve werkwoord tussen haakjes.",
        isExtra: false,
        questions: [
          { id: "11.5_opd8_1", type: "fill_in", question: "1. Wat voor muziek vind je leuk? Ik ________ me voor popmuziek. (zich interesseren voor)", correctAnswer: "interesseer" },
          { id: "11.5_opd8_2", type: "fill_in", question: "2. Heb je altijd iets te doen? Ja, ik ________ me nooit. (zich vervelen)", correctAnswer: "verveel" },
          { id: "11.5_opd8_3", type: "fill_in", question: "3. Weet je de weg? Nee, ik ________ me. Dit is de verkeerde straat! (zich vergissen)", correctAnswer: "vergis" },
          { id: "11.5_opd8_4", type: "fill_in", question: "4. Sorry, ik ken u niet, denk ik. Dat klopt, ik zal ________ even voorstellen. (zich voorstellen)", correctAnswer: "me" },
          { id: "11.5_opd8_5", type: "fill_in", question: "5. Weet je de naam van je eerste docent nog? Ja, die ________ ik me goed. (zich herinneren)", correctAnswer: "herinner" },
          { id: "11.5_opd8_6", type: "fill_in", question: "6. Waarom is Tanja vandaag niet in de les? Zij ________ zich niet zo lekker. (zich voelen)", correctAnswer: "voelt" }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Gramer Mantığı",
        isExtra: true,
        questions: [
          { id: "11.5_smart_1", type: "multiple_choice", question: "Neden 'Wij vervelen ons' diyoruz da 'Wij vervelen wij' demiyoruz? (Why do we say 'Wij vervelen ons' and not 'Wij vervelen wij'?)", options: ["Çünkü 'wij' cümlenin nesnesidir.", "Çünkü özne (wij) ile dönüşlü zamir (ons) eşleşmek zorundadır. / Because subject and reflexive pronoun must match.", "Hollandacada 'wij' iki kez kullanılamaz."], correctAnswer: "Çünkü özne (wij) ile dönüşlü zamir (ons) eşleşmek zorundadır. / Because subject and reflexive pronoun must match." },
          { id: "11.5_smart_2", type: "fill_in", question: "Jullie (siz/you) bereiden ________ goed voor op het examen.", correctAnswer: "je" },
          { id: "11.5_smart_3", type: "fill_in", question: "Vertaal: 'Ben yanılıyorum / I am mistaken' -> Ik vergis ________.", correctAnswer: "me" }
        ]
      }
    ]
  },
  {
    id: "11.6",
    chapter: 11,
    title: "11.6 Bij zich hebben en elkaar",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🤝 Bij zich hebben vs. Elkaar</h3>
            <p><strong>1. Bij zich hebben (Yanında bulundurmak):</strong> Cebinizde, çantanızda veya üstünüzde taşıdığınız şeyler için kullanılır. Zich burada yine dönüşlüdür, özneye göre çekimlenir.</p>
            <p className="italic text-sm text-slate-400 mb-4">"Heb je een pen <strong>bij je</strong>?" / "Ik heb geen geld <strong>bij me</strong>." / "Hij heeft zijn jas <strong>bij zich</strong>."</p>
            
            <p><strong>2. Elkaar (Birbirini / Birbirine):</strong> Karşılıklı (reciprocal) eylemler için kullanılır.</p>
            <p className="italic text-sm text-slate-400">"Kennen jullie <strong>elkaar</strong>?" (Siz <em>birbirinizi</em> tanıyor musunuz?)</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🤝 Bij zich hebben vs. Elkaar</h3>
            <p><strong>1. Bij zich hebben (To have with oneself):</strong> Used for things you carry in your pocket, bag, or on you. 'Zich' acts reflexively here, changing according to the subject.</p>
            <p className="italic text-sm text-slate-400 mb-4">"Heb je een pen <strong>bij je</strong>?" / "Ik heb geen geld <strong>bij me</strong>." / "Hij heeft zijn jas <strong>bij zich</strong>."</p>
            
            <p><strong>2. Elkaar (Each other):</strong> Used for reciprocal actions.</p>
            <p className="italic text-sm text-slate-400">"Kennen jullie <strong>elkaar</strong>?" (Do you know <em>each other</em>?)</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Vul de goede vorm in (elkaar, me, je, zich, ons, u).",
        isExtra: false,
        questions: [
          { id: "11.6_opd6_1", type: "fill_in", question: "1. Wat is er gebeurd? Ik kan het ________ niet meer herinneren.", correctAnswer: "me" },
          { id: "11.6_opd6_2", type: "fill_in", question: "2. Een wandelreis in Chili! Is wandelen daar geen probleem? We gaan ________ goed voorbereiden.", correctAnswer: "ons" },
          { id: "11.6_opd6_3", type: "fill_in", question: "3. Ze woont toch in Delft? Nee echt niet, je vergist ________.", correctAnswer: "je" },
          { id: "11.6_opd6_4", type: "fill_in", question: "4. Hebben jullie ________ al voorgesteld? Ja, dat hebben we al gedaan.", correctAnswer: "je" },
          { id: "11.6_opd6_5", type: "fill_in", question: "5. Zijn ze weggegaan? Ja, ze verveelden ________.", correctAnswer: "zich" },
          { id: "11.6_opd6_6", type: "fill_in", question: "6. Hebt u uw fiets bij ________? Nee, die heb ik naar de fietsenmaker gebracht.", correctAnswer: "u" },
          { id: "11.6_opd6_7", type: "fill_in", question: "7. Hoe bevalt het Kirsten in Nederland? Ze voelt ________ hier al een beetje thuis.", correctAnswer: "zich" },
          { id: "11.6_opd6_8", type: "fill_in", question: "8. Hoe kennen jullie ________? Van de studie.", correctAnswer: "elkaar" },
          { id: "11.6_opd6_9", type: "fill_in", question: "9. Gaat hij niet mee naar de film? Nee, hij interesseert ________ niet voor dit soort films.", correctAnswer: "zich" }
        ]
      },
      {
        instruction: "Slimme Oefeningen: Farkı Yakala! (Catch the difference!)",
        isExtra: true,
        questions: [
          { id: "11.6_smart_1", type: "multiple_choice", question: "Kies het juiste woord: Tom en Peter zien ________ niet zo vaak.", options: ["zich", "elkaar", "hen"], correctAnswer: "elkaar" },
          { id: "11.6_smart_2", type: "multiple_choice", question: "Tom heeft geen pen bij ________.", options: ["zich", "hem", "elkaar"], correctAnswer: "zich" },
          { id: "11.6_smart_3", type: "fill_in", question: "Ik ben mijn portemonnee vergeten. Ik heb geen geld bij ________.", correctAnswer: "me" }
        ]
      }
    ]
  },
  {
    id: "11.7",
    chapter: 11,
    title: "11.7 Tekst: De ideale bijbaan",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Tekst: De ideale bijbaan (İdeal Ek İş)</h3>
            <p>Hollanda'da üniversite öğrencilerinin part-time (yarı zamanlı) işlerine <strong>"bijbaan"</strong> denir. Kitaptaki metinde, gençleri tanıtım elemanı (promotor) olarak işe almak isteyen bir şirketin ilanını okuyorsunuz.</p>
            <ul style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
              <li><strong>De voordelen volgens het bedrijf:</strong> Zelf beslissen wanneer je werkt (Kendi saatini kendin belirle), geen enkele dag is hetzelfde (Hiçbir gün aynı değil), topinkomens (Yüksek gelir), doorgroeimogelijkheden (Kariyer fırsatları).</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📄 Text: De ideale bijbaan (The ideal side job)</h3>
            <p>In the Netherlands, part-time jobs for university students are called <strong>"bijbaan"</strong>. In the text in the book, you read an advertisement from a company that wants to hire young people as promoters.</p>
            <ul style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
              <li><strong>De voordelen volgens het bedrijf (Advantages according to the company):</strong> Zelf beslissen wanneer je werkt (Decide yourself when you work), geen enkele dag is hetzelfde (No single day is the same), topinkomens (Top incomes), doorgroeimogelijkheden (Career opportunities).</li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 12: Passen de volgende woorden bij de tekst? (Waar / Niet waar)",
        isExtra: false,
        questions: [
          { id: "11.7_opd12_1", type: "multiple_choice", question: "vervelend (can sıkıcı / boring)", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "11.7_opd12_2", type: "multiple_choice", question: "alleen werken (yalnız çalışmak / work alone)", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "11.7_opd12_3", type: "multiple_choice", question: "variatie (çeşitlilik / geen enkele dag is hetzelfde)", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "11.7_opd12_4", type: "multiple_choice", question: "goed salaris (iyi maaş / topinkomens)", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "11.7_opd12_5", type: "multiple_choice", question: "vaste werktijden (sabit çalışma saatleri / fixed hours)", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "11.7_opd12_6", type: "multiple_choice", question: "maximaal twee dagen per week", options: ["waar", "niet waar"], correctAnswer: "niet waar" },
          { id: "11.7_opd12_7", type: "multiple_choice", question: "in een team werken", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "11.7_opd12_8", type: "multiple_choice", question: "jij beslist (sen karar verirsin / you decide)", options: ["waar", "niet waar"], correctAnswer: "waar" },
          { id: "11.7_opd12_9", type: "multiple_choice", question: "nieuwe mensen nodig (yeni insanlara ihtiyaç var / solliciteer direct)", options: ["waar", "niet waar"], correctAnswer: "waar" }
        ]
      }
    ]
  },
  {
    id: "11.8",
    chapter: 11,
    title: "11.8 Uitspraak & Cultuur",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: Sjwa (De stomme 'e')</h3>
              <p>Hollandacada kelime sonlarındaki veya vurgusuz hecelerdeki 'e' harfi genellikle tam bir "E" gibi değil, kısa ve yutulmuş bir "ı / ıh" (Sjwa) sesi gibi okunur.</p>
              <p className="mt-2 text-sm text-slate-300">Örnek: <em>makkel<strong>ij</strong>k</em> (ıh gibi okunur), <em>wand<strong>e</strong>l<strong>e</strong>n</em>, <em>vriend<strong>e</strong>n</em>.</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Verjaardagen in Nederland</h3>
              <p><strong>Hollanda'da Doğum Günü Kültürü (Circle of Death):</strong></p>
              <p className="text-sm">Hollanda'da bir doğum günü partisine gittiğinizde sandalyeler genellikle büyük bir daire (çember) şeklinde dizilmiştir. İçeri girdiğinizde <strong>sadece doğum günü çocuğunu (de jarige) değil</strong>, odadaki partnerini, ebeveynlerini, hatta içerideki diğer misafirleri de tebrik etmeniz beklenir! (Örn: <em>"Gefeliciteerd met je zoon / broer!"</em>).</p>
              
              <p className="mt-3 text-sm"><strong>Hediye Kültürü:</strong> Japonya veya bazı Asya kültürlerinin aksine, Hollanda'da bir hediye aldığınızda onu misafirin önünde <strong>hemen o an açmanız (uitpakken)</strong> ve heyecanınızı ("Wat leuk!") göstermeniz kibarlıktır.</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f43f5e', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fb7185' }}>🗣️ Uitspraak: Sjwa (The mute 'e')</h3>
              <p>In Dutch, the letter 'e' at the end of words or in unstressed syllables is usually pronounced not as a full "E", but as a short, swallowed "uh" sound (Schwa).</p>
              <p className="mt-2 text-sm text-slate-300">Example: <em>makkel<strong>ij</strong>k</em> (pronounced like uh), <em>wand<strong>e</strong>l<strong>e</strong>n</em>, <em>vriend<strong>e</strong>n</em>.</p>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🇳🇱 Cultuur: Verjaardagen in Nederland</h3>
              <p><strong>Birthday Culture in the Netherlands (Circle of Death):</strong></p>
              <p className="text-sm">When you go to a birthday party in the Netherlands, the chairs are usually arranged in a large circle. When you enter, you are expected to congratulate <strong>not only the birthday boy/girl (de jarige)</strong>, but also their partner, parents, and even the other guests in the room! (Ex: <em>"Gefeliciteerd met je zoon / broer!"</em>).</p>
              
              <p className="mt-3 text-sm"><strong>Gift Culture:</strong> Unlike Japan or some Asian cultures, when you receive a gift in the Netherlands, it is polite to <strong>open it right then and there in front of the guest (uitpakken)</strong> and show your excitement ("Wat leuk!").</p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Kültür Testi / Culture Test)",
        isExtra: true,
        questions: [
          { id: "11.8_smart_1", type: "multiple_choice", question: "Je komt binnen op een Nederlands verjaardagsfeestje. Wie feliciteer je?", options: ["Alleen de jarige (sadece doğum günü çocuğu / only the birthday person).", "De jarige en zijn/haar partner, ouders, familie.", "Niemand, je gaat gewoon zitten."], correctAnswer: "De jarige en zijn/haar partner, ouders, familie." },
          { id: "11.8_smart_2", type: "multiple_choice", question: "Wat doe je met een cadeautje (hediye / gift) in Nederland als je het krijgt?", options: ["Je pakt het direct uit (hemen açarsın / open it immediately).", "Je bewaart het voor later in je tas.", "Je weigert het 3 keer voordat je het pakt."], correctAnswer: "Je pakt het direct uit (hemen açarsın / open it immediately)." }
        ]
      }
    ]
  },
  {
    id: "On-Class-11",
    chapter: 11,
    title: "Summary",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Repetitie & Vragen (Les 10)</h3>
              <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li><strong>Past Simple (O.T.T.):</strong> Ik werk<strong>te</strong>, Ik speel<strong>de</strong>, Ik herhaal<strong>de</strong>, Ik woon<strong>de</strong>.</li>
                <li><strong>Begrip (Anlama):</strong> Ik versta u niet. / Sorry ik begrijp u niet.</li>
                <li><strong>Beterschap!:</strong> Ik hoop dat hij snel beter wordt. (I hope he'll get well soon.)</li>
              </ul>
              <h4 className="font-bold text-blue-300 text-sm mt-3 mb-1">Vragen en Antwoorden:</h4>
              <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li><strong>Wat doe je voor werk? / Heb je een baan?</strong> ➔ Ik ben fietsenmaker. / Ik heb een bijbaantje.</li>
                <li><strong>Studeer je? / Doe je nog iets naast je studie?</strong> ➔ Ik studeer logopedie.</li>
                <li><strong>Wat zijn je hobby's? / Houd je van films?</strong> ➔ Ik zwem graag. / Ik houd van wandelen. / Ik ben gek op Cubaanse muziek.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🪞 Reflexive Verbs (Wederkerende Werkwoorden)</h3>
              <p className="text-sm text-slate-300 mb-2">Hollandacada dönüşlü fiiller (kendini, kendine vb.) <strong>reflexief pronomen</strong> alır:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-200 mb-3 bg-purple-900/30 p-3 rounded-lg border border-purple-500/30">
                <div>ik ➔ <strong>me</strong></div>
                <div>jij/je ➔ <strong>je</strong></div>
                <div>u ➔ <strong>u/zich</strong></div>
                <div>hij/zij/ze ➔ <strong>zich</strong></div>
                <div>wij/we ➔ <strong>ons</strong></div>
                <div>jullie ➔ <strong>je</strong></div>
                <div>zij/ze ➔ <strong>zich</strong></div>
              </div>
              <ul className="text-sm text-purple-100 list-disc pl-5 space-y-1">
                <li>Ik herinner <strong>me</strong> dat.</li>
                <li>Je vergist <strong>je</strong>.</li>
                <li>Ik stel <strong>me</strong> even voor.</li>
                <li>Zij voelt <strong>zich</strong> thuis.</li>
                <li>Hij interesseert <strong>zich</strong> voor films.</li>
                <li>Wij bereiden <strong>ons</strong> voor op een wandelreis.</li>
                <li>Jullie vervelen <strong>je</strong> niet.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎒 Bij zich (With oneselves) & Elkaar (Each other)</h3>
              <p className="text-sm text-slate-300 mb-2"><strong>"Bij zich"</strong> yanında bulundurmak anlamındadır ve reflexive formları kullanır:</p>
              <ul className="text-sm text-emerald-100 list-disc pl-5 space-y-1 mb-3">
                <li>Ik heb een pen bij <strong>me</strong>. (Yanımda kalem var.)</li>
                <li>Heb je een pen bij <strong>je</strong>?</li>
                <li>Hij heeft zijn telefoon bij <strong>zich</strong>. (Telefonu yanında.)</li>
              </ul>
              <p className="text-sm text-slate-300 mb-2"><strong>"Elkaar"</strong> ise 'birbirini/birbirlerine' (each other) anlamına gelir:</p>
              <ul className="text-sm text-emerald-100 list-disc pl-5 space-y-1">
                <li>Kennen jullie <strong>elkaar</strong>? (Siz <em>birbirinizi</em> tanıyor musunuz?)</li>
                <li>Wij helpen <strong>elkaar</strong>. (Biz birbirimize yardım ediyoruz.)</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>💬 Exclamations & Situational Reactions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Uitroepen (Wat...!)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Wat leuk!</strong> = Ne güzel/eğlenceli!</li>
                    <li><strong>Wat toevallig!</strong> = Ne tesadüf!</li>
                    <li><strong>Wat jammer!</strong> = Ne yazık!</li>
                    <li><strong>Wat gezellig!</strong> = Ne hoş/samimi!</li>
                    <li><strong>Wat lekker!</strong> = Ne lezzetli!</li>
                    <li><strong>Wat interessant!</strong> = Ne ilginç!</li>
                    <li><strong>Wat vervelend!</strong> = Ne can sıkıcı/kötü!</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Reacties (Tepkiler)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Ik ga naar het park. ➔ <strong>Veel plezier!</strong> (İyi eğlenceler!)</li>
                    <li>Ik ben moe vandaag. ➔ <strong>Wat jammer!</strong></li>
                    <li>Ik ga vandaag naar een feest. ➔ <strong>Wat gezellig!</strong></li>
                    <li><strong>Gefeliciteerd!</strong> = Tebrikler! / Doğum günün kutlu olsun!</li>
                    <li><strong>Beterschap!</strong> = Geçmiş olsun!</li>
                    <li><strong>Sterkte!</strong> = Güçlü kal!</li>
                    <li><strong>Eet smakelijk!</strong> = Afiyet olsun!</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Lesson 11 (Q&A)</h3>
              <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5">
                <li><strong>kantoor</strong> = ofis</li>
                <li><strong>Ik ben geworden.</strong> = Oldum.</li>
                <li><strong>Hij heeft zijn eigen bedrijf.</strong> = Kendi şirketi var.</li>
                <li><strong>Hij heeft het druk.</strong> = O çok meşgul.</li>
                <li><strong>Hij verveelt zich nooit.</strong> = O hiç sıkılmaz. (zich vervelen = sıkılmak)</li>
                <li><strong>veel</strong> = çok/fazla</li>
                <li>Marit is jarig. Tom is de buurman van Marit. Zij vindt Cubaanse muziek leuk. (Marit is gek op Cubaans muziek.)</li>
                <li>Tom en Kirsten kennen <strong>elkaar</strong> nog niet.</li>
                <li>Kirsten werkt iedere donderdag in de bioscoop. Zij studeert logopedie.</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🔄 Repetitie & Vragen (Review Lesson 10)</h3>
              <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li><strong>Past Simple (O.T.T.):</strong> Ik werk<strong>te</strong>, Ik speel<strong>de</strong>, Ik herhaal<strong>de</strong>, Ik woon<strong>de</strong>.</li>
                <li><strong>Begrip (Comprehension):</strong> Ik versta u niet. / Sorry ik begrijp u niet.</li>
                <li><strong>Beterschap!:</strong> Ik hoop dat hij snel beter wordt. (I hope he'll get well soon.)</li>
              </ul>
              <h4 className="font-bold text-blue-300 text-sm mt-3 mb-1">Questions and Answers:</h4>
              <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li><strong>Wat doe je voor werk? / Heb je een baan?</strong> ➔ Ik ben fietsenmaker. / Ik heb een bijbaantje.</li>
                <li><strong>Studeer je? / Doe je nog iets naast je studie?</strong> ➔ Ik studeer logopedie.</li>
                <li><strong>Wat zijn je hobby's? / Houd je van films?</strong> ➔ Ik zwem graag. / Ik houd van wandelen. / Ik ben gek op Cubaanse muziek.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>🪞 Reflexive Verbs (Wederkerende Werkwoorden)</h3>
              <p className="text-sm text-slate-300 mb-2">In Dutch, reflexive verbs take a <strong>reflexief pronomen</strong>:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-200 mb-3 bg-purple-900/30 p-3 rounded-lg border border-purple-500/30">
                <div>ik ➔ <strong>me</strong></div>
                <div>jij/je ➔ <strong>je</strong></div>
                <div>u ➔ <strong>u/zich</strong></div>
                <div>hij/zij/ze ➔ <strong>zich</strong></div>
                <div>wij/we ➔ <strong>ons</strong></div>
                <div>jullie ➔ <strong>je</strong></div>
                <div>zij/ze ➔ <strong>zich</strong></div>
              </div>
              <ul className="text-sm text-purple-100 list-disc pl-5 space-y-1">
                <li>Ik herinner <strong>me</strong> dat.</li>
                <li>Je vergist <strong>je</strong>.</li>
                <li>Ik stel <strong>me</strong> even voor.</li>
                <li>Zij voelt <strong>zich</strong> thuis.</li>
                <li>Hij interesseert <strong>zich</strong> voor films.</li>
                <li>Wij bereiden <strong>ons</strong> voor op een wandelreis.</li>
                <li>Jullie vervelen <strong>je</strong> niet.</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>🎒 Bij zich (With oneselves) & Elkaar (Each other)</h3>
              <p className="text-sm text-slate-300 mb-2"><strong>"Bij zich"</strong> means to have something on you or with you, and it uses reflexive forms:</p>
              <ul className="text-sm text-emerald-100 list-disc pl-5 space-y-1 mb-3">
                <li>Ik heb een pen bij <strong>me</strong>. (I have a pen with me.)</li>
                <li>Heb je een pen bij <strong>je</strong>?</li>
                <li>Hij heeft zijn telefoon bij <strong>zich</strong>. (He has his phone with him.)</li>
              </ul>
              <p className="text-sm text-slate-300 mb-2"><strong>"Elkaar"</strong> means 'each other' (reciprocal):</p>
              <ul className="text-sm text-emerald-100 list-disc pl-5 space-y-1">
                <li>Kennen jullie <strong>elkaar</strong>? (Do you know each other?)</li>
                <li>Wij helpen <strong>elkaar</strong>. (We help each other.)</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>💬 Exclamations & Situational Reactions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Uitroepen (Wat...!)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li><strong>Wat leuk!</strong> = How fun/nice!</li>
                    <li><strong>Wat toevallig!</strong> = What a coincidence!</li>
                    <li><strong>Wat jammer!</strong> = What a pity!</li>
                    <li><strong>Wat gezellig!</strong> = How fun/cozy!</li>
                    <li><strong>Wat lekker!</strong> = How delicious/tasty!</li>
                    <li><strong>Wat interessant!</strong> = How interesting!</li>
                    <li><strong>Wat vervelend!</strong> = How annoying/bad!</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-300 text-sm mb-1">Reacties (Reactions)</h4>
                  <ul className="text-sm text-slate-200 list-disc pl-5 space-y-1">
                    <li>Ik ga naar het park. ➔ <strong>Veel plezier!</strong> (Enjoy!/Have fun!)</li>
                    <li>Ik ben moe vandaag. ➔ <strong>Wat jammer!</strong></li>
                    <li>Ik ga vandaag naar een feest. ➔ <strong>Wat gezellig!</strong></li>
                    <li><strong>Gefeliciteerd!</strong> = Congratulations! / Happy birthday!</li>
                    <li><strong>Beterschap!</strong> = Get well soon!</li>
                    <li><strong>Sterkte!</strong> = Good luck / Strength!</li>
                    <li><strong>Eet smakelijk!</strong> = Enjoy your meal!</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#93c5fd' }}>📝 Dialogue Lesson 11 (Q&A)</h3>
              <ul className="text-sm text-slate-200 space-y-2 list-disc pl-5">
                <li><strong>kantoor</strong> = office</li>
                <li><strong>Ik ben geworden.</strong> = I have become / I became.</li>
                <li><strong>Hij heeft zijn eigen bedrijf.</strong> = He has his own company.</li>
                <li><strong>Hij heeft het druk.</strong> = He is busy. (He has it busy.)</li>
                <li><strong>Hij verveelt zich nooit.</strong> = He is never bored. (zich vervelen = to be bored)</li>
                <li><strong>veel</strong> = much/many/a lot of</li>
                <li>Marit is jarig. Tom is de buurman van Marit. Zij vindt Cubaanse muziek leuk. (Marit is gek op Cubaans muziek.)</li>
                <li>Tom en Kirsten kennen <strong>elkaar</strong> nog niet.</li>
                <li>Kirsten werkt iedere donderdag in de bioscoop. Zij studeert logopedie.</li>
              </ul>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "On-Class Oefening 1: Wederkerende Werkwoorden (Reflexive Verbs)",
        isExtra: false,
        questions: [
          { id: "11_onclass_1_1", type: "fill_in", question: "Ik interesseer ________ voor rock muziek. (myself)", correctAnswer: "me" },
          { id: "11_onclass_1_2", type: "fill_in", question: "Zij voelt ________ niet lekker. (herself)", correctAnswer: "zich" },
          { id: "11_onclass_1_3", type: "fill_in", question: "Wij bereiden ________ voor op een wandelreis. (ourselves)", correctAnswer: "ons" },
          { id: "11_onclass_1_4", type: "fill_in", question: "Jullie vervelen ________ niet. (yourselves)", correctAnswer: "je" },
          { id: "11_onclass_1_5", type: "multiple_choice", question: "Kies het juiste woord: Je vergist ________.", options: ["je", "me", "zich"], correctAnswer: "je" }
        ]
      },
      {
        instruction: "On-Class Oefening 2: Bij zich & Elkaar",
        isExtra: false,
        questions: [
          { id: "11_onclass_2_1", type: "fill_in", question: "Kennen jullie ________? (each other)", correctAnswer: "elkaar" },
          { id: "11_onclass_2_2", type: "fill_in", question: "Ik heb een pen bij ________. (me)", correctAnswer: "me" },
          { id: "11_onclass_2_3", type: "fill_in", question: "Hij heeft zijn telefoon bij ________. (himself)", correctAnswer: "zich" },
          { id: "11_onclass_2_4", type: "multiple_choice", question: "Vertaal: 'We help each other.'", options: ["Wij helpen elkaar.", "Wij helpen ons.", "Wij helpen zich."], correctAnswer: "Wij helpen elkaar." }
        ]
      },
      {
        instruction: "On-Class Oefening 3: Wat...! (Exclamations)",
        isExtra: false,
        questions: [
          { id: "11_onclass_3_1", type: "multiple_choice", question: "Je ziet een vriend onverwachts (unexpectedly) in een andere stad. Wat zeg je?", options: ["Wat jammer!", "Wat toevallig!", "Wat vervelend!"], correctAnswer: "Wat toevallig!" },
          { id: "11_onclass_3_2", type: "multiple_choice", question: "Je eet een hele goede pizza. Wat zeg je?", options: ["Wat lekker!", "Wat interessant!", "Wat gezellig!"], correctAnswer: "Wat lekker!" },
          { id: "11_onclass_3_3", type: "multiple_choice", question: "Je mist de trein net. Wat zeg je?", options: ["Wat vervelend!", "Wat toevallig!", "Wat leuk!"], correctAnswer: "Wat vervelend!" },
          { id: "11_onclass_3_4", type: "fill_in", question: "Vertaal: 'What a pity!' -> Wat ________!", correctAnswer: "jammer" }
        ]
      },
      {
        instruction: "On-Class Oefening 4: Situational Reactions",
        isExtra: true,
        questions: [
          { id: "11_onclass_4_1", type: "multiple_choice", question: "Iemand zegt: 'Ik ga naar het park.' Wat is een goede reactie?", options: ["Veel plezier!", "Beterschap!", "Eet smakelijk!"], correctAnswer: "Veel plezier!" },
          { id: "11_onclass_4_2", type: "multiple_choice", question: "Je vriend is ziek. Wat zeg je?", options: ["Sterkte!", "Beterschap! (Ik hoop dat hij snel beter wordt)", "Gefeliciteerd!"], correctAnswer: "Beterschap! (Ik hoop dat hij snel beter wordt)" },
          { id: "11_onclass_4_3", type: "fill_in", question: "Iemand zegt: 'Ik ben moe vandaag.' Jij antwoordt: 'Wat ________!' (What a pity!)", correctAnswer: "jammer" },
          { id: "11_onclass_4_4", type: "multiple_choice", question: "Voordat je gaat eten, wat zeg je?", options: ["Eet smakelijk!", "Wat gezellig!", "Veel plezier!"], correctAnswer: "Eet smakelijk!" }
        ]
      },
      {
        instruction: "On-Class Oefening 5: Dialogue 11 Q&A & Vocab",
        isExtra: true,
        questions: [
          { id: "11_onclass_5_1", type: "multiple_choice", question: "Waar werkt Kirsten iedere donderdag?", options: ["In de bioscoop", "In het kantoor", "In de sportschool"], correctAnswer: "In de bioscoop" },
          { id: "11_onclass_5_2", type: "fill_in", question: "Wat studeert Kirsten? -> Zij studeert ________.", correctAnswer: "logopedie" },
          { id: "11_onclass_5_3", type: "multiple_choice", question: "Wat betekent 'Hij heeft het druk'?", options: ["He is busy.", "He is bored.", "He has a company."], correctAnswer: "He is busy." },
          { id: "11_onclass_5_4", type: "fill_in", question: "Marit is jarig. Zij is gek ________ Cubaanse muziek. (crazy about)", correctAnswer: "op" },
          { id: "11_onclass_5_5", type: "multiple_choice", question: "Vertaal: 'He is never bored.'", options: ["Hij verveelt zich nooit.", "Hij heeft het druk.", "Hij interesseert zich nooit."], correctAnswer: "Hij verveelt zich nooit." }
        ]
      }
    ]
  }
];