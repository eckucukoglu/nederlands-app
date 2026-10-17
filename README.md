# 🇳🇱 Nederlands in Gang - Interactief Oefenportaal (A1 → A2)

[![Version](https://img.shields.io/badge/version-v0.1.9-10B981.svg?style=for-the-badge)](https://github.com/eckucukoglu/nederlands-app/releases/tag/v0.1.9)
[![Firebase Hosting](https://img.shields.io/badge/hosting-live-FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black)](https://nederlands-app.web.app)
[![React](https://img.shields.io/badge/react-19.x-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-3.x-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-6366F1.svg?style=for-the-badge)](LICENSE)

An open-source, interactive, and personalized web application designed to track and support the complete 3rd edition curriculum of the **"Nederlands in Gang"** textbook (CEFR A1 → A2 level).

🔗 **Live Application:** [https://nederlands-app.web.app](https://nederlands-app.web.app)  
🌐 **Bilingual Support:** Full English (EN) and Turkish (TR) language support for UI, grammar references, and vocabulary translations.

> **⚠️ Educational Disclaimer:** This application is a strictly **non-commercial**, open-source educational companion. It is intended to be used as a supplementary study tool alongside the original *"Nederlands in Gang"* (Berna de Boer, Margaret van der Kamp, Birgit Lijmbach — Uitgeverij Coutinho) coursebook.

---

## 🌟 Key Highlights & Features (v0.1.9)

### 🧮 1. Mathematically Precise, Anti-Inflation 10,000 XP Scoring Engine (v0.1.9)
* **Root-Cause Anti-Inflation Architecture**: Completely overhauled progress and XP calculations to eliminate single-activity inflation. Users can no longer inflate "Words XP" to 100% simply by marking reading passage paragraphs as "known" without studying the core curriculum vocabulary or using flashcards.
* **Strict Sub-Quotas & Hard Ceilings Across 3 Dedicated Pillars**:
  * **Pillar 1: Curriculum & Course Sections (Max 3,500 XP)**:
    * *169 Curriculum Sections*: Max 2,800 XP (~16.5 XP per section, partial engagement capped at 100 XP).
    * *18 Complete Chapter Masteries*: Max 400 XP (~22.2 XP per unit; awarded only when every single section of a chapter is genuinely complete).
    * *Grammar Notes & Bookmarks*: Max 300 XP.
  * **Pillar 2: Words & Vocabulary Mastery (Max 3,500 XP)**:
    * *1,066 Core Curriculum Words*: Max 2,000 XP (~1.876 XP per word; strictly chapter-isolated so words from other chapters cannot substitute).
    * *Flashcard Practice & Active Recall*: Max 800 XP (users who do not practice flashcards cannot earn this quota; impossible to earn via reading alone).
    * *Contextual Reading & Dialogue Words*: Max 500 XP (hard capped at 500 XP regardless of how many hundreds of passage words are tagged).
    * *Irregular Verbs & Custom Starred Terms*: Max 200 XP.
  * **Pillar 3: Question Bank & Quizzes (Max 3,000 XP)**:
    * *Unique Correct Questions*: Max 2,200 XP across ~3,069 authentic questions.
    * *Zero-Mistake Question Mastery*: Max 400 XP.
    * *Accuracy Bonus (70%+)*: Max 250 XP (requires at least 20 question attempts to prevent volatility).
    * *Repetition & Good Question Feedback*: Max 150 XP.
* **Elimination of Fake `.2 Woordenlijst` Section Completions**: Vocabulary sections (`.2`) are strictly protected: reading words or generic pool words can no longer trigger automatic section completion. Only genuine completion in the vocabulary module or explicit section check marks register completion.
* **Comprehensive Test Suite & Corner-Case Rigor**: 9 automated test cases in `src/utils/progress.test.js` verifying baseline zero-state, anti-inflation caps, section .2 protection, single-activity users, strict monotonicity, article deduplication (`de`/`het`), and exact 10,000 XP saturation ceiling.

### 📚 2. Authentic Chapter Vocabulary Quiz Integration & Dual Tag Filtering (v0.1.8)
* **Real Curriculum Vocabulary Quizzes (All 18 Chapters)**: Connected all "Kelime Sınavı" (Vocab Quiz) buttons across the dashboard (Sekme 2: Soru Bankası & Konu Bazlı Sınavlar, Sekme 3: Kelimeler & Ünite Bazlı İstatistikler, Sekme 4: Ünite Detayları & İlerleme) directly to the authentic question bank (`quizQuestions`).
* **Dual Tag Intersection Filtering (`#vocabulary` + `#summary_chX`)**: Quizzes now filter strictly for questions that contain **both** `#vocabulary` and `#summary_chX` (where X is the chapter number from 1 to 18), providing 15 to 42 high-quality matching, fill-in-the-blank, and multiple-choice questions per chapter with comprehensive Turkish and English explanations.
* **Visible Dual Tag Filter Badges & "Birlikte Filtreleniyor" Indicator**: The quiz header displays active `#vocabulary` and `#summary_chX` badges with a link indicator (`🔗 Birlikte Filtreleniyor`), allowing seamless one-click tag removal or clearing.
* **Unified Dashboard Statistics**: Topic cards in Sekme 2 now calculate real question counts, solved questions, accuracy, and mastery directly from user history on genuine chapter questions.

### 🎯 2. Initial Word Pre-Roll & Seek-Jitter Prevention (v0.1.7)
* **Eliminated First-Word Clipping in Single-Line & Single-Paragraph Playback**: Resolved an issue where playback of isolated dialogue lines occasionally cut off the very first consonant or syllable due to MP3 frame boundary quantization and DAC initialization latency. Playback now initiates smoothly from a calibrated pre-roll silence buffer (150–180ms) within the inter-line silence gap, ensuring the first word is heard with complete clarity from its very first millisecond.

### 🎙️ 2. Complete Natural Dutch Studio Audio Engine (Chapters 1–18) (v0.1.6)
* **36 High-Fidelity Studio Recordings across All 18 Chapters**: Natural, human-like neural Dutch studio recordings are now fully generated, timestamped, and embedded for every single dialogue (`.1`) and reading passage (`Reading-X`) across the entire 18-chapter textbook curriculum.
* **Multi-Speaker Character Cast**: Dialogue characters (teachers, students, narrators, shopkeepers, doctors, etc.) feature distinct, authentic Dutch neural voices (`nl-NL-ColetteNeural`, `nl-NL-MaartenNeural`, `nl-NL-FennaNeural`) with conversational prosody and stage-direction timing.
* **Precision Millisecond Highlighting**: Synchronized word and line/sentence lighting follows the exact studio audio timestamps across all 18 chapters with smooth auto-scrolling.
* **Interactive Line & Paragraph Snapping**: Jump instantly to any sentence or paragraph with smooth scrolling, complete sentence decay (no premature cutoffs), and global speed control.

### 🔊 2. Complete Line & Paragraph Speech Playback (v0.1.5)
* **Eliminated Premature Audio Cutoff in Single Line & Paragraph Playback**: Resolved an issue where playing individual dialogue lines or reading paragraphs cut off the final words prematurely. The playback stop threshold now extends seamlessly into the natural silence gap before subsequent sections, ensuring full acoustic decay and natural sentence completion without abrupt pauses.

### 🎧 2. Single Speech Playback Fix (v0.1.4)
* **Resolved Double-Speaking in Flashcards, Dictionary & Dialogues**: Eliminated duplicate utterance queuing caused by parallel audio error and promise catch triggers when playing individual word pronunciations. Words now cleanly and instantaneously speak exactly once via authentic Dutch speech synthesis.

### 🎛️ 2. Smart Collapsible Dashboard & Adaptive Onboarding
* **Collapsible Accordion Progress & Guide Cards**: Both "Birleşik Öğrenme İlerlemesi" (Combined Learning Progress) and "Uygulama Kullanım Kılavuzu" (App Usage Guide) feature interactive headers that can be expanded or collapsed with a single click.
* **Intelligent Progress-Adaptive Layout**:
  * **Beginner Users (< 5% Progress)**: The App Usage Guide is placed at the top and expanded by default to introduce course tools, while the detailed progress card is placed below and collapsed with a sleek summary bar.
  * **Advanced Learners (≥ 5% Progress)**: The layout seamlessly switches: the Progress Card sits at the top and expanded by default, while the Guide moves to the bottom and collapsed.
* **User Manual State Memory**: Manual clicks immediately override defaults and persist across reloads and navigation.
* **Full Bilingual Support**: Header titles, status badges (`Daralt`/`Collapse`, `Detayları Gör`/`View Details`), tooltips, and accessibility labels available in both Turkish and English.
* **Embedded Neural Audio Engine**: Studio quality Dutch voice recordings seamlessly integrated into the native dialogue and reading interface without intrusive standalone players.
* **Synchronized Line & Word Highlighting**: As the recording plays, lines and words light up in real-time, accompanied by smooth auto-scrolling.
* **Per-Line & Per-Paragraph Audio Snapping**: Clicking the speaker button next to any dialogue line or reading paragraph jumps directly to that section in the studio recording.
* **Global Speed Control**: The header speed slider and settings modal dynamically adjust recording playback speed.
* **Web Speech Engine Bug Fix**: Eliminated ghost speech repetition and double-reading on utterance completion.

### 📚 2. Complete 18-Chapter Curriculum
* **Dialogues (`.1`)**: Authentic everyday conversations in Dutch with audio playback and side-by-side comprehension.
* **Vocabulary Lists (`.2`)**: Curated chapter vocabulary with gender articles (`de`/`het`), plural forms, and contextual translations.
* **Classroom Summaries (`On-Class`)**: Detailed grammar explanations, communicative structures, and teacher notes for each chapter.
* **Reading Passages (`Reading`)**: Graded reading texts with sentence-level audio and interactive click-to-lookup.

### 🎧 3. Natural Speech Synthesis & Audio Tracking
* **Web Speech API (`nl-NL`) Integration**: Clear, natural Dutch speech engine for individual words and full passages.
* **Word-by-Word Synchronized Highlighting**: Follows speech fluidly without jitter or disruptive font scaling.
* **Interactive Word Lookup**: Click any word in a dialogue or reading text to inspect its definition in English and Turkish, hear its pronunciation, and save it to your personal vocabulary list.

### 📊 4. Balanced 10,000 XP Progress Engine
A transparent, non-inflated scoring model with 10 distinct level ranks (from *Beginner / Başlangıç* to *Nederlands Meester / Flemenkçe Ustası*):
* **Course Sections (3,500 XP / 35%)**: Progress across all 169 curriculum sections (~17.8 XP each) plus chapter mastery badges (500 XP total).
* **Vocabulary Haznesi (3,500 XP / 35%)**: Points awarded for learning and mastering words via flashcards and readings.
* **Quiz Questions (3,000 XP / 30%)**: Points earned through accuracy and repetition across comprehensive practice tests.
* **Adaptive Dashboard**: New learners (<5% overall progress) receive a prominent guide at the top of their dashboard, which automatically transitions to the bottom once foundational progress is established.

### 🃏 5. Smart Flashcards & Global Vocabulary Pool
* Interactive flashcard deck with Spaced-Repetition-inspired status tracking (*Known*, *Learning*, *Bookmarked*).
* Filter flashcards by chapter, difficulty, or switch to the **Global Pool** to review all saved vocabulary.
* Full keyboard navigation support (⬅️ Previous, ➡️ Next, ⬆️/⬇️ Flip Card).

### ✍️ 6. 1,200+ Interactive Quiz Questions
* **Grammar Categories**: Comprehensive modules on Tenses (*Presens*, *Imperfectum*, *Perfectum*), Word Order (*Inversion*, *Subordinate Clauses / Bijzin*), Adjective Endings, Conjunctions, and Prepositions.
* **Irregular Verbs**: Dedicated drills for all essential Dutch strong/irregular verbs.
* **Chapter Mastery Tests**: 42 curated topics including unit summary quizzes and listening comprehension questions.

### ☁️ 7. Cloud Synchronization & Offline PWA
* **Passwordless Authentication**: Secure Firebase Magic Link login without cumbersome passwords.
* **Real-time Firestore Sync**: Automatically synchronizes your completed exercises, flashcard statuses, and XP across all your devices.
* **PWA & Offline Ready**: Service worker caching and responsive design optimized for mobile, tablet, and desktop browsers.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, JavaScript (ES2023+), Web Speech API |
| **Styling** | Tailwind CSS 3, FontAwesome 6, PostCSS, Custom Aurora Glow Effects |
| **Backend & Auth** | Firebase Authentication (Passwordless Email Magic Link) |
| **Database & Sync** | Cloud Firestore (Real-time NoSQL Progress Storage) |
| **Hosting & CI/CD** | Firebase Hosting, GitHub Actions |
| **Testing** | Jest, React Testing Library |

---

## 🚀 Getting Started locally

### Prerequisites
* **Node.js** (v18.x or v20.x recommended, tested on v24)
* **npm** (v9+) or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/eckucukoglu/nederlands-app.git
cd nederlands-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the project root:
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=nederlands-app.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=nederlands-app
REACT_APP_FIREBASE_STORAGE_BUCKET=nederlands-app.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 4. Start Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### 5. Running Tests
```bash
npm test -- --watchAll=false
```

---

## 📦 Production Build & Deployment

### Build
Generate an optimized production build in the `build/` folder:
```bash
npm run build
```

### Deploy to Firebase Hosting
```bash
npx firebase-tools deploy --only hosting
```

---

## 📂 Project Structure

```text
nederlands-app/
├── public/                  # Manifest, favicon, index.html, service worker
├── src/
│   ├── components/          # Modular React components
│   │   ├── HomeView.js      # Adaptive dashboard & analytics engine
│   │   ├── DialogueSection.js # Interactive audio player & text reader
│   │   ├── Flashcards.js    # Flashcard deck & SRS word tracking
│   │   ├── ExerciseEngine.js# Practice questions & instant grading
│   │   ├── QuizModule.js    # Comprehensive grammar & chapter quizzes
│   │   ├── AuthModal.js     # Passwordless Firebase magic link auth
│   │   └── AdminReports.js  # Question audit & feedback dashboard
│   ├── contexts/            # LanguageContext (EN/TR localization)
│   ├── data/                # Curriculum data
│   │   ├── chapters/        # Chapters 1 through 18
│   │   ├── grammar/         # Tenses, syntax, irregular verbs data
│   │   └── globalDictionary.js # Multi-thousand Dutch-EN-TR lexicon
│   ├── utils/               # Audio TTS, progress calculation, storage
│   ├── firebase.js          # Firebase SDK client initialization
│   ├── App.js               # Shell navigation, header ambient bar, modals
│   └── index.js             # React DOM root entry
├── firebase.json            # Firebase Hosting configuration & SPA rewrites
├── package.json             # Project dependencies & scripts
└── README.md                # Project documentation
```

---

## 🤝 Contributing

Contributions, feedback, and issue reports are very welcome!
1. Fork the Project (`https://github.com/eckucukoglu/nederlands-app/fork`)
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'feat: Add NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## 📄 License & Attribution

* **Code:** Released under the [MIT License](LICENSE).
* **Curriculum & Materials:** Based on the textbook *"Nederlands in Gang"* by Berna de Boer, Margaret van der Kamp, and Birgit Lijmbach (Uitgeverij Coutinho). All pedagogical rights belong to Coutinho. This software is purely an educational open-source companion and must not be used for commercial purposes.