# 🇳🇱 Nederlands in Gang - Interactief Oefenportaal (A1 → A2)

[![Version](https://img.shields.io/badge/version-v0.1.1-10B981.svg?style=for-the-badge)](https://github.com/eckucukoglu/nederlands-app/releases/tag/v0.1.1)
[![Firebase Hosting](https://img.shields.io/badge/hosting-live-FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black)](https://nederlands-app.web.app)
[![React](https://img.shields.io/badge/react-19.x-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-3.x-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-6366F1.svg?style=for-the-badge)](LICENSE)

An open-source, interactive, and personalized web application designed to track and support the complete 3rd edition curriculum of the **"Nederlands in Gang"** textbook (CEFR A1 → A2 level).

🔗 **Live Application:** [https://nederlands-app.web.app](https://nederlands-app.web.app)  
🌐 **Bilingual Support:** Full English (EN) and Turkish (TR) language support for UI, grammar references, and vocabulary translations.

> **⚠️ Educational Disclaimer:** This application is a strictly **non-commercial**, open-source educational companion. It is intended to be used as a supplementary study tool alongside the original *"Nederlands in Gang"* (Berna de Boer, Margaret van der Kamp, Birgit Lijmbach — Uitgeverij Coutinho) coursebook.

---

## 🌟 Key Highlights & Features (v0.1.1)

### 🎙️ 1. Studio Podcast Audio & Lock-Screen Playback (New in v0.1.1)
* **High-Fidelity Neural Audio Recordings**: Authentic multi-character dialogue recordings (`Karin`, `Susy`, `Ning`, `Verteller`) and narrator readings generated with neural Dutch voices (`Colette`, `Fenna`, `Maarten`).
* **Headphone & Background Listening**: Listen hands-free with lock-screen, smartwatch, and notification shade playback controls via **MediaSession API**.
* **Smart Audio Synchronization**: Automatic coordination between the studio podcast player and browser interactive Web Speech synthesis.
* **Scrubber, Speed & Skip**: Seamless ±10-second skipping, pitch-preserved playback speeds (0.8x, 1.0x, 1.2x, 1.5x), and real-time audio progress bars.

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