// src/data/chapters/chapter18.js
import React from 'react';
import { generateSmartQuestions } from '../questionGenerator';

export const chapter18Vocab = [
  { id: "18_1", chapter: 18, nl: "de politie", en: "police / police station", example: "Sam gaat naar de politie." },
  { id: "18_2", chapter: 18, nl: "nadat", en: "after", example: "Nadat zijn portemonnee is gestolen." },
  { id: "18_3", chapter: 18, nl: "de portemonnee", en: "wallet / purse", example: "Mijn portemonnee is gestolen." },
  { id: "18_4", chapter: 18, nl: "gestolen (stelen)", en: "stolen", example: "Hij heeft een fiets gestolen." },
  { id: "18_5", chapter: 18, nl: "aangifte doen", en: "report (a crime)", example: "Ik wil aangifte doen bij de politie." },
  { id: "18_6", chapter: 18, nl: "de politieagent", en: "police officer", example: "De politieagent stelt vragen." },
  { id: "18_7", chapter: 18, nl: "via", en: "by way of / via", example: "Aangifte doen via internet." },
  { id: "18_8", chapter: 18, nl: "zat (zitten)", en: "was sitting", example: "Ik zat op een terras." },
  { id: "18_9", chapter: 18, nl: "het terras", en: "terrace", example: "We zaten op het terras." },
  { id: "18_10", chapter: 18, nl: "zulk", en: "such", example: "Het was zulk lekker weer." },
  { id: "18_11", chapter: 18, nl: "toen", en: "when", example: "Toen we op het terras gingen zitten." },
  { id: "18_12", chapter: 18, nl: "lag (liggen)", en: "was / lay", example: "Mijn portemonnee lag niet meer op tafel." },
  { id: "18_13", chapter: 18, nl: "overal", en: "everywhere", example: "Ik heb overal gezocht." },
  { id: "18_14", chapter: 18, nl: "gezocht (zoeken)", en: "searched", example: "We hebben de dader gezocht." },
  { id: "18_15", chapter: 18, nl: "nergens", en: "nowhere", example: "Hij lag nergens." },
  { id: "18_16", chapter: 18, nl: "gelegd (leggen)", en: "placed", example: "Ik heb hem op tafel gelegd." },
  { id: "18_17", chapter: 18, nl: "had (hebben)", en: "had", example: "Omdat ik een nieuwe portemonnee heb." },
  { id: "18_18", chapter: 18, nl: "omdat", en: "because", example: "Omdat ik net een nieuwe portemonnee heb." },
  { id: "18_19", chapter: 18, nl: "de rits", en: "zip", example: "De rits van de oude portemonnee was kapot." },
  { id: "18_20", chapter: 18, nl: "zodat", en: "so that", example: "Zodat het geld steeds uit mijn portemonnee viel." },
  { id: "18_21", chapter: 18, nl: "het geld", en: "money", example: "Er zat niet veel geld in." },
  { id: "18_22", chapter: 18, nl: "steeds", en: "always / continually", example: "Het geld viel steeds uit de tas." },
  { id: "18_23", chapter: 18, nl: "viel (vallen)", en: "fell", example: "Het geld viel op de grond." },
  { id: "18_24", chapter: 18, nl: "gehaald (halen)", en: "took / fetched", example: "Ik heb geld gehaald." },
  { id: "18_25", chapter: 18, nl: "de dader", en: "culprit", example: "Heb je de dader gezien?" },
  { id: "18_26", chapter: 18, nl: "terwijl", en: "while", example: "Terwijl mijn buurman met me praatte." },
  { id: "18_27", chapter: 18, nl: "namelijk", en: "it so happens / namely", example: "Die zat namelijk ook op het terras." },
  { id: "18_28", chapter: 18, nl: "slim", en: "clever", example: "Niet zo slim van mij." },
  { id: "18_29", chapter: 18, nl: "ziet eruit (eruitzien)", en: "looks like", example: "Hoe ziet uw portemonnee eruit?" },
  { id: "18_30", chapter: 18, nl: "oei", en: "um / oh (expression)", example: "Oei, dat is een moeilijke vraag." },
  { id: "18_31", chapter: 18, nl: "in ieder geval", en: "at any rate / in any case", example: "Hij is in ieder geval rood." },
  { id: "18_32", chapter: 18, nl: "het leer", en: "leather", example: "Hij is van leer." },
  { id: "18_33", chapter: 18, nl: "verder", en: "further / otherwise", example: "Verder weet ik het niet." },
  { id: "18_34", chapter: 18, nl: "het rijbewijs", en: "driver's licence", example: "Mijn rijbewijs zat in de tas." },
  { id: "18_35", chapter: 18, nl: "de identiteitskaart", en: "ID card", example: "Een identiteitskaart en paspoort." },
  { id: "18_36", chapter: 18, nl: "de bankpas", en: "bank card", example: "Mijn bankpas is gestolen." },
  { id: "18_37", chapter: 18, nl: "de bankrekening", en: "bank account", example: "Rekening blokkeren." },
  { id: "18_38", chapter: 18, nl: "de rekening", en: "account / bill", example: "De bankrekening." },
  { id: "18_39", chapter: 18, nl: "blokkeren", en: "block", example: "Mijn bankpas laten blokkeren." },
  { id: "18_40", chapter: 18, nl: "onmiddellijk", en: "immediately / at once", example: "Dat heb ik onmiddellijk gedaan." },
  { id: "18_41", chapter: 18, nl: "hoewel", en: "although", example: "Hoewel dat wel heel onhandig is." },
  { id: "18_42", chapter: 18, nl: "handig (onhandig)", en: "handy / clumsy", example: "Dat is erg onhandig." },
  { id: "18_43", chapter: 18, nl: "hoezo", en: "how come / why so", example: "Hoezo is dat onhandig?" },
  { id: "18_44", chapter: 18, nl: "ophalen", en: "get / pick up", example: "Geld ophalen uit de automaat." },
  { id: "18_45", chapter: 18, nl: "vervelend", en: "annoying", example: "Mm, vervelend." },
  { id: "18_46", chapter: 18, nl: "opgeschreven (opschrijven)", en: "written down", example: "Ik heb alles opgeschreven." },
  { id: "18_47", chapter: 18, nl: "zodra", en: "as soon as", example: "Zodra uw portemonnee gevonden is." },
  { id: "18_48", chapter: 18, nl: "gevonden (vinden)", en: "found", example: "Als de tas gevonden is." },
  { id: "18_49", chapter: 18, nl: "nemen contact op", en: "contact / get in touch", example: "We nemen contact met u op." },
  { id: "18_50", chapter: 18, nl: "de kans", en: "chance", example: "Ik denk dat de kans klein is." },
  { id: "18_51", chapter: 18, nl: "als", en: "if / when", example: "Als ik eerlijk ben." },
  { id: "18_52", chapter: 18, nl: "eerlijk", en: "honest", example: "Als ik eerlijk ben, denk ik dat ook." }
];

export const chapter18Dialogues = {
  "18.1": [
    { speaker: "Verteller", text: "Sam gaat naar de politie nadat zijn portemonnee is gestolen.", translation: { tr: "Sam, cüzdanı çalındıktan sonra polise gidiyor.", en: "Sam goes to the police after his wallet is stolen." } },
    { speaker: "Sam", text: "Goedemiddag, mijn portemonnee is gestolen, ik wil aangifte doen.", translation: { tr: "İyi günler, cüzdanım çalındı, suç duyurusunda bulunmak (şikayetçi olmak) istiyorum.", en: "Good afternoon, my wallet has been stolen, I want to report it." } },
    { speaker: "Politieagent", text: "Dat kan. U kunt ook aangifte doen via internet, maar het kan hier ook. Wat is er gebeurd?", translation: { tr: "Olur. İnternet üzerinden de suç duyurusunda bulunabilirsiniz ama burada da yapabilirsiniz. Ne oldu?", en: "You can. You can also report it via the internet, but you can do it here too. What happened?" } },
    { speaker: "Sam", text: "Ik zat op een terras met mijn collega, het was zulk lekker weer. Toen ik wilde afrekenen, lag mijn portemonnee niet meer op tafel. Ik heb overal gezocht maar hij lag nergens.", translation: { tr: "Meslektaşımca bir terasta oturuyordum, hava çok güzeldi. Hesabı ödemek istediğimde cüzdanım masada yoktu. Her yerde aradım ama hiçbir yerde yoktu.", en: "I was sitting on a terrace with my colleague, it was such nice weather. When I wanted to pay the bill, my wallet was no longer on the table. I searched everywhere but it was nowhere." } },
    { speaker: "Politieagent", text: "Weet u zeker dat uw portemonnee op tafel lag?", translation: { tr: "Cüzdanınızın masada olduğundan emin misiniz?", en: "Are you sure that your wallet was on the table?" } },
    { speaker: "Sam", text: "Ja, we wilden betalen maar het was druk op het terras. Toen we op het terras gingen zitten, heb ik hem op tafel gelegd. Ik herinner me dat zo goed omdat ik net een nieuwe portemonnee heb. De rits van de oude was kapot zodat het geld steeds uit mijn portemonnee viel. Op het terras heb ik alles uit de oude portemonnee gehaald en in de nieuwe gedaan.", translation: { tr: "Evet, ödemek istiyorduk ama teras kalabalıktı. Terasa oturduğumuzda onu masaya koydum. Bunu çok iyi hatırlıyorum çünkü yeni bir cüzdanım var. Eskisinin fermuarı bozuktu, bu yüzden para sürekli cüzdandan düşüyordu. Terasta her şeyi eski cüzdandan çıkarıp yeniye koydum.", en: "Yes, we wanted to pay but it was busy on the terrace. When we went to sit on the terrace, I put it on the table. I remember that so well because I just got a new wallet. The zipper of the old one was broken so that the money kept falling out of my wallet. On the terrace I took everything out of the old wallet and put it in the new one." } },
    { speaker: "Politieagent", text: "Hebt u de dader gezien?", translation: { tr: "Faili (hırsızı) gördünüz mü?", en: "Did you see the culprit?" } },
    { speaker: "Sam", text: "Nee, ik heb niemand gezien. De portemonnee is gestolen terwijl mijn collega naar de wc was en ik even met mijn buurman praatte, denk ik. Die zat namelijk ook op het terras. Niet zo slim van mij.", translation: { tr: "Hayır, kimseyi görmedim. Cüzdanım, meslektaşım tuvaletteyken ve ben biraz komşumla sohbet ederken çalındı sanırım. O da çünkü terasta oturuyordu. Benim için pek akıllıca olmadı.", en: "No, I didn't see anyone. The wallet was stolen while my colleague went to the toilet and I was chatting with my neighbor for a moment, I think. He was also sitting on the terrace. Not so smart of me." } },
    { speaker: "Politieagent", text: "Nee, inderdaad. Hoe ziet uw portemonnee eruit?", translation: { tr: "Hayır, gerçekten öyle. Cüzdanınız nasıl görünüyor?", en: "No, indeed. What does your wallet look like?" } },
    { speaker: "Sam", text: "Oei, dat is een moeilijke vraag omdat ik hem net heb. Hij is in ieder geval rood, hij is van leer en verder weet ik het eigenlijk niet.", translation: { tr: "Eyvah, bu zor bir soru çünkü onu yeni aldım. Her halükarda kırmızı, deriden ve aslında başka pek bir şey bilmiyorum.", en: "Oh, that's a difficult question because I just got it. At any rate it is red, it is made of leather and otherwise I don't really know." } },
    { speaker: "Politieagent", text: "Hoeveel geld zat er in uw portemonnee? Zaten er ook pasjes in, een rijbewijs, een identiteitskaart?", translation: { tr: "Cüzdanınızda ne kadar para vardı? Kartlar, ehliyet, kimlik kartı var mıydı?", en: "How much money was in your wallet? Were there also cards in it, a driver's license, an ID card?" } },
    { speaker: "Sam", text: "Dat weet ik wel precies. Er zat niet heel veel geld in, 10 euro. Mijn bankpas en identiteitskaart zaten er ook in.", translation: { tr: "Bunu tam olarak biliyorum. İçinde çok fazla para yoktu, 10 euro. Banka kartım ve kimliğim de içindeydi.", en: "I do know that exactly. There wasn't very much money in it, 10 euros. My bank card and ID card were also in it." } },
    { speaker: "Politieagent", text: "Weet u dat u uw bankpas moet laten blokkeren?", translation: { tr: "Banka kartınızı bloke ettirmeniz gerektiğini biliyor musunuz?", en: "Do you know that you have to get your bank card blocked?" } },
    { speaker: "Sam", text: "Ja, dat heb ik onmiddellijk gedaan hoewel dat wel heel onhandig is.", translation: { tr: "Evet, bunu hemen yaptım ama bu gerçekten çok kullanışsız/zor.", en: "Yes, I did that immediately, although that is very inconvenient." } },
    { speaker: "Politieagent", text: "Hoezo?", translation: { tr: "Nasıl yani? / Neden?", en: "How come?" } },
    { speaker: "Sam", text: "Omdat ik nu niet kan pinnen of geld kan ophalen uit de geldautomaat.", translation: { tr: "Çünkü artık kartla ödeme yapamıyorum veya bankamatikten para çekemiyorum.", en: "Because now I cannot pay by card or withdraw money from the ATM." } },
    { speaker: "Politieagent", text: "Mm, vervelend. Ik heb alles opgeschreven. Zodra uw portemonnee gevonden is, nemen we contact met u op.", translation: { tr: "Mm, can sıkıcı. Her şeyi yazdım. Cüzdanınız bulunur bulunmaz sizinle iletişime geçeceğiz.", en: "Mm, annoying. I have written everything down. As soon as your wallet is found, we will contact you." } },
    { speaker: "Sam", text: "Ik denk dat de kans klein is.", translation: { tr: "Bence şansımız çok küçük (bulunacağını sanmıyorum).", en: "I think the chance is small." } },
    { speaker: "Politieagent", text: "Als ik eerlijk ben, denk ik dat ook. Maar je weet maar nooit.", translation: { tr: "Dürüst olmak gerekirse ben de öyle düşünüyorum. Ama belli olmaz (Asla bilemezsin).", en: "If I am honest, I think so too. But you never know." } }
  ]
};

export const chapter18Sections = [
  {
    id: "18.1",
    chapter: 18,
    title: "18.1 Dialoog: Bij de politie",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialoog: Bij de politie (Karakolda / Poliste)</h3>
            <p>Sam'in terasta cüzdanı çalınmıştır ve karakola gidip **aangifte doen** (suç duyurusunda bulunmak / şikayetçi olmak) istemektedir. Polis memuru ile arasında geçen diyalogda hırsızlık anı ve sonrasında yapılan işlemler anlatılır.</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Aangifte doen:</strong> Suç duyurusunda bulunmak.</li>
              <li><strong>Bankpas blokkeren:</strong> Banka kartını bloke ettirmek.</li>
              <li><strong>Zodra uw portemonnee gevonden is:</strong> Cüzdanınız bulunur bulunmaz...</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Dialogue: Bij de politie (At the police station)</h3>
            <p>Sam's wallet was stolen on a terrace, and he goes to the police station to **aangifte doen** (report the crime / file a complaint). The dialogue with the police officer describes the moment of the theft and the actions taken afterwards.</p>
            <ul style={{ margin: '10px 0', paddingLeft: '20px', color: '#cbd5e1', listStyleType: 'disc' }}>
              <li><strong>Aangifte doen:</strong> To report a crime / file a complaint.</li>
              <li><strong>Bankpas blokkeren:</strong> To block a bank card.</li>
              <li><strong>Zodra uw portemonnee gevonden is:</strong> As soon as your wallet is found...</li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 1: Zet de gebeurtenissen in de goede volgorde (Order the events correctly).",
        isExtra: false,
        questions: [
          { id: "18.1_opd1_1", type: "multiple_choice", question: "Wat gebeurde er als EERSTE in het verhaal?", options: ["Sam gaat naar de politie.", "Sam zit op een terras met een collega.", "Sam koopt een nieuwe portemonnee."], correctAnswer: "Sam zit op een terras met een collega." },
          { id: "18.1_opd1_2", type: "multiple_choice", question: "Wat deed Sam nadat hij merkte dat zijn portemonnee weg was?", options: ["Hij blokkeerde meteen zijn pinpas.", "Hij ging direct naar de politie om aangifte te doen."], correctAnswer: "Hij ging direct naar de politie om aangifte te doen." }
        ]
      }
    ]
  },
  {
    id: "18.2",
    chapter: 18,
    title: "18.2 Woordenlijst",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Woordenlijst Analizi</h3>
            <p>Polis, suç, cüzdan, kimlik kartı ve banka kartı gibi acil durum kelimelerini bu bölümde çalışıyoruz. Menüdeki Flashcards sekmesinden pratik yapabilirsiniz.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#a78bfa' }}>📖 Vocabulary Analysis</h3>
            <p>In this section, we study emergency words such as police, crime, wallet, ID card, and bank card. You can practice in the Flashcards section from the menu.</p>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Woordenlijst Test: Wat is de juiste vertaling? (What is the correct translation?)",
        isExtra: true,
        questions: generateSmartQuestions(18, "Woordenlijst", 10, chapter18Vocab)
      }
    ]
  },
  {
    id: "18.3",
    chapter: 18,
    title: "18.3 Conjuncties (Yan Cümlecikler ve Bağlaçlar / Subordinate clauses and Conjunctions)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>🔗 Bijzinnen & Conjuncties (ÇOK ÖNEMLİ GRAMER KURALI!)</h3>
            <p className="text-sm text-slate-300">Daha önceki ünitelerde (Hoofdstuk 16) öğrendiğimiz bağlaçlar (*en, of, maar, want, dus*) ana cümleleri bağlıyordu ve kelime sırasını değiştirmiyordu.</p>
            <p className="text-sm text-slate-300 mt-2 font-bold text-rose-300">Ancak bu ünitede öğrendiğimiz bağlaçlar (ondergeschikte voegwoorden) bir YAN CÜMLECİK (bijzin) başlatır!</p>

            <div className="bg-rose-900/40 p-4 rounded-xl mt-4 border border-rose-500/50">
              <h4 className="font-bold text-rose-300 mb-2">🚨 ALTIN KURAL: Fiil En Sona Gider! (Werkwoord achteraan)</h4>
              <p className="text-sm text-rose-100">Bu bağlaçlarla kurulan yan cümlelerde <strong>çekimli fiil (verb) cümlenin EN SONUNA atılır!</strong></p>
              <ul className="text-sm text-white mt-3 space-y-3 list-disc pl-5">
                <li><strong>omdat (çünkü):</strong> Ik herinner me dat zo goed <span className="text-amber-300 font-bold">omdat</span> ik net een nieuwe portemonnee <span className="text-amber-300 font-bold">heb</span>.</li>
                <li><strong>zodat (öyle ki / -sın diye):</strong> De rits was kapot <span className="text-amber-300 font-bold">zodat</span> het geld steeds uit mijn portemonnee <span className="text-amber-300 font-bold">viel</span>.</li>
                <li><strong>hoewel (rağmen):</strong> Ik heb dat onmiddellijk gedaan <span className="text-amber-300 font-bold">hoewel</span> dat heel onhandig <span className="text-amber-300 font-bold">is</span>.</li>
                <li><strong>terwijl (iken):</strong> De portemonnee is gestolen <span className="text-amber-300 font-bold">terwijl</span> mijn collega naar de wc <span className="text-amber-300 font-bold">was</span>.</li>
                <li><strong>nadat (sonra):</strong> Sam gaat naar de politie <span className="text-amber-300 font-bold">nadat</span> zijn portemonnee gestolen <span className="text-amber-300 font-bold">is</span>.</li>
                <li><strong>voordat (önce):</strong> Je moet een kaartje kopen <span className="text-amber-300 font-bold">voordat</span> je naar binnen <span className="text-amber-300 font-bold">mag</span>.</li>
                <li><strong>toen (geçmişte -andığında/-ken):</strong> <span className="text-amber-300 font-bold">Toen</span> we op het terras gingen <span className="text-amber-300 font-bold">zitten</span>, heb ik hem op tafel gelegd. <em>(Not: Cümle 'Toen' ile başlarsa ana cümlede inversion olur!)</em></li>
                <li><strong>als (eğer / olduğunda):</strong> <span className="text-amber-300 font-bold">Als</span> ik eerlijk <span className="text-amber-300 font-bold">ben</span>, denk ik dat ook.</li>
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #ef4444', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#f87171' }}>🔗 Bijzinnen & Conjuncties (VERY IMPORTANT GRAMMAR RULE!)</h3>
            <p className="text-sm text-slate-300">The conjunctions we learned in earlier units (Chapter 16) (*en, of, maar, want, dus*) connected main clauses and did not change the word order.</p>
            <p className="text-sm text-slate-300 mt-2 font-bold text-rose-300">However, the conjunctions we learn in this unit (subordinating conjunctions / ondergeschikte voegwoorden) start a SUBORDINATE CLAUSE (bijzin)!</p>

            <div className="bg-rose-900/40 p-4 rounded-xl mt-4 border border-rose-500/50">
              <h4 className="font-bold text-rose-300 mb-2">🚨 GOLDEN RULE: The Verb Goes to the End! (Werkwoord achteraan)</h4>
              <p className="text-sm text-rose-100">In subordinate clauses built with these conjunctions, <strong>the conjugated verb goes to the VERY END of the sentence!</strong></p>
              <ul className="text-sm text-white mt-3 space-y-3 list-disc pl-5">
                <li><strong>omdat (because):</strong> Ik herinner me dat zo goed <span className="text-amber-300 font-bold">omdat</span> ik net een nieuwe portemonnee <span className="text-amber-300 font-bold">heb</span>.</li>
                <li><strong>zodat (so that):</strong> De rits was kapot <span className="text-amber-300 font-bold">zodat</span> het geld steeds uit mijn portemonnee <span className="text-amber-300 font-bold">viel</span>.</li>
                <li><strong>hoewel (although):</strong> Ik heb dat onmiddellijk gedaan <span className="text-amber-300 font-bold">hoewel</span> dat heel onhandig <span className="text-amber-300 font-bold">is</span>.</li>
                <li><strong>terwijl (while):</strong> De portemonnee is gestolen <span className="text-amber-300 font-bold">terwijl</span> mijn collega naar de wc <span className="text-amber-300 font-bold">was</span>.</li>
                <li><strong>nadat (after):</strong> Sam gaat naar de politie <span className="text-amber-300 font-bold">nadat</span> zijn portemonnee gestolen <span className="text-amber-300 font-bold">is</span>.</li>
                <li><strong>voordat (before):</strong> Je moet een kaartje kopen <span className="text-amber-300 font-bold">voordat</span> je naar binnen <span className="text-amber-300 font-bold">mag</span>.</li>
                <li><strong>toen (when - in the past):</strong> <span className="text-amber-300 font-bold">Toen</span> we op het terras gingen <span className="text-amber-300 font-bold">zitten</span>, heb ik hem op tafel gelegd. <em>(Note: If the sentence starts with 'Toen', the main clause takes inversion!)</em></li>
                <li><strong>als (if / when):</strong> <span className="text-amber-300 font-bold">Als</span> ik eerlijk <span className="text-amber-300 font-bold">ben</span>, denk ik dat ook.</li>
              </ul>
            </div>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 3: Maak van beide zinnen één zin. Gebruik de gegeven conjunctie (Fiili sona atmayı unutmayın! / Do not forget to put the verb at the end!).",
        isExtra: false,
        questions: [
          { id: "18.3_opd3_1", type: "fill_in", question: "1. hoewel - We vonden nog een plaats op het terras. Het was erg druk. -> We vonden nog een plaats op het terras ________ het erg druk ________.", correctAnswer: "hoewel, was" },
          { id: "18.3_opd3_2", type: "fill_in", question: "2. omdat - Je kunt internet nu niet gebruiken. Er is een storing. -> Je kunt internet nu niet gebruiken ________ er een storing ________.", correctAnswer: "omdat, is" },
          { id: "18.3_opd3_3", type: "fill_in", question: "3. zodat - We wonen met vijf studenten in een huis. We wonen niet zo duur. -> We wonen met vijf studenten in een huis ________ we niet zo duur ________.", correctAnswer: "zodat, wonen" },
          { id: "18.3_opd3_4", type: "fill_in", question: "4. zodra - Ik koop een nieuwe computer. Deze computer gaat kapot. -> Ik koop een nieuwe computer ________ deze computer ________.", correctAnswer: "zodra, opgaat / kapotgaat" }
        ]
      },
      {
        instruction: "Opdracht 4: Zoek de goede zinnen bij elkaar (Eşleştirme / Matching).",
        isExtra: false,
        questions: [
          { id: "18.3_opd4_1", type: "multiple_choice", question: "1. Zeg het maar als ...", options: ["a) ik bij mijn tante mocht logeren.", "h) je hier kunt studeren."], correctAnswer: "h) je hier kunt studeren." },
          { id: "18.3_opd4_2", type: "multiple_choice", question: "2. Je moet Nederlands leren voordat ...", options: ["c) ik nog moet werken.", "f) ik een nieuwe telefoon moest kopen."], correctAnswer: "c) ik nog moet werken." },
          { id: "18.3_opd4_3", type: "multiple_choice", question: "3. Die vakantie was niet duur omdat ...", options: ["i) het wel duur zal zijn.", "e) ik liever wil lopen."], correctAnswer: "i) het wel duur zal zijn." }
        ]
      },
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Bijzin & Werkwoord achteraan (Verb at the end)",
        isExtra: true,
        questions: [
          { id: "18.3_smart_1", type: "multiple_choice", question: "Welke zin is grammaticaal correct met 'omdat'?", options: ["Ik kom niet naar de les, omdat ik ben ziek.", "Ik kom niet naar de les, omdat ik ziek ben.", "Ik kom niet naar de les, omdat ziek ben ik."], correctAnswer: "Ik kom niet naar de les, omdat ik ziek ben." },
          { id: "18.3_smart_2", type: "multiple_choice", question: "Waar staat de persvorm (çekimli fiil / conjugated verb) in een bijzin met 'zodat'?", options: ["Op de tweede plaats", "Helemaal vooraan", "Helemaal achteraan"], correctAnswer: "Helemaal achteraan" }
        ]
      }
    ]
  },
  {
    id: "18.4",
    chapter: 18,
    title: "18.4 Tekst: Aangifte doen (Suç Duyurusu Rehberi / Guide to filing a report)",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Tekst: Aangifte doen bij de politie</h3>
            <p className="text-sm text-slate-300">Hollanda'da suç duyurusunda bulunmak (aangifte doen) hakkında resmi bilgilendirme metni:</p>
            <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
              <li><strong>Ne zaman yapılmalı?</strong> Hırsızlık durumunda gündüz gitmek mantıklıdır, ancak can güvenliği tehlikediyse veya suçüstü/acil durum varsa derhal aranmalıdır (0900-8844 veya acil 112).</li>
              <li><strong>Nasıl yapılır?</strong> Polis merkezine gidebilir, telefonla arayabilir veya internet üzerinden (via internet) başvuru yapabilirsiniz.</li>
              <li><strong>Hırsızlıkta ne yapılır?</strong> Özellikle hırsızlık (inbraak) durumunda polisin parmak izi veya delil toplayabilmesi için evde hiçbir şeye dokunmadan önce polisi aramak ve *beklemek* tavsiye edilir.</li>
            </ul>
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fbbf24' }}>📄 Text: Aangifte doen bij de politie</h3>
            <p className="text-sm text-slate-300">Official information text about filing a report (aangifte doen) in the Netherlands:</p>
            <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
              <li><strong>When should it be done?</strong> In case of theft, it makes sense to go during the day, but if someone's life is in danger or there is an emergency/caught in the act situation, the police should be called immediately (0900-8844 or emergency 112).</li>
              <li><strong>How is it done?</strong> You can go to the police station, call by phone, or file a report online (via internet).</li>
              <li><strong>What to do in case of a break-in?</strong> Especially in the case of a burglary (inbraak), it is recommended to call the police and *wait* before touching anything in the house so that the police can collect fingerprints or evidence.</li>
            </ul>
          </div>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Opdracht 6: Kies de juiste zin (Konu Anlama / Reading comprehension).",
        isExtra: false,
        questions: [
          { id: "18.4_opd6_1", type: "multiple_choice", question: "1. U kunt aangifte doen op het politiebureau ________ u kunt meestal ook telefonisch aangifte doen.", options: ["dus", "maar"], correctAnswer: "maar" },
          { id: "18.4_opd6_2", type: "multiple_choice", question: "2. De politie schrijft het complete verhaal op ________ de politie hebt verteld wat er is gebeurd.", options: ["nadat", "voordat"], correctAnswer: "nadat" },
          { id: "18.4_opd6_3", type: "multiple_choice", question: "3. Bel van tevoren ________ u een aangifte van inbraak wilt doen.", options: ["omdat", "als"], correctAnswer: "als" }
        ]
      }
    ]
  },
  {
    id: "18.5",
    chapter: 18,
    title: "18.5 Advies vragen en geven & Uitspraak",
    theory: (lang) => (
      <>
        {lang === 'tr' ? (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>💡 Advies vragen en geven (Tavsiye İsteme ve Verme)</h3>
              <p className="text-sm text-slate-300">Birine akıl danışmak veya tavsiye vermek için şu kalıplar kullanılır:</p>
              <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
                <li><strong>Wat kan ik het beste doen?</strong> (En iyisi ne yapabilirim?)</li>
                <li><strong>Wat moet ik doen?</strong> (Ne yapmalıyım?)</li>
                <li><strong>Je kunt het beste...</strong> (En iyisi ... yaparsın). ➔ <em>Je kunt het beste direct naar de politie gaan.</em></li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Uitspraak: g – sch – isch</h3>
              <p className="text-sm text-slate-300"><strong>Opdracht 11:</strong> Hollandacada boğazdan gelen sert **g** (geld, groot) sesi ile **sch** (geschikt, verschrikkelijk) ve **-isch** (romantisch, fantastisch, logisch) eklerindeki yumuşak hırlama seslerinin telaffuz farkı çalışılır.</p>
            </div>
          </>
        ) : (
          <>
            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#34d399' }}>💡 Advies vragen en geven (Asking for and giving advice)</h3>
              <p className="text-sm text-slate-300">These phrases are used to ask for or give advice:</p>
              <ul className="text-sm text-slate-200 mt-2 list-disc pl-5 space-y-1">
                <li><strong>Wat kan ik het beste doen?</strong> (What is the best thing I can do?)</li>
                <li><strong>Wat moet ik doen?</strong> (What should I do?)</li>
                <li><strong>Je kunt het beste...</strong> (It's best if you...). ➔ <em>Je kunt het beste direct naar de politie gaan.</em></li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>🗣️ Uitspraak: g – sch – isch (Pronunciation)</h3>
              <p className="text-sm text-slate-300"><strong>Opdracht 11:</strong> In Dutch, the pronunciation difference between the hard **g** from the throat (geld, groot), and the softer guttural sounds in **sch** (geschikt, verschrikkelijk) and the **-isch** suffix (romantisch, fantastisch, logisch) is practiced.</p>
            </div>
          </>
        )}
      </>
    ),
    exerciseGroups: [
      {
        instruction: "Slimme Oefeningen (Smart Exercises): Advies Test",
        isExtra: true,
        questions: [
          { id: "18.5_smart_1", type: "multiple_choice", question: "Je portemonnee is gestolen. Je vraagt aan een vriend: 'Wat kan ik het beste doen?'. Wat is een passend advies?", options: ["Je kunt het beste gaan slapen.", "Je kunt het beste direct naar de politie gaan en je bankpas blokkeren.", "Je kunt het beste een nieuwe auto kopen."], correctAnswer: "Je kunt het beste direct naar de politie gaan en je bankpas blokkeren." }
        ]
      }
    ]
  }
];