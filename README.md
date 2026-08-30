# 🇳🇱 Nederlands in Gang - Interactief Oefenportaal

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

An open-source, interactive, and personalized web companion designed to track and support the 3rd edition of the **"Nederlands in Gang"** textbook (A1 → A2 level). 

🌐 **Bilingual Support:** The application interface, grammar explanations, and word translations are fully available in both **English** and **Turkish**.

> **⚠️ Disclaimer:** This application is a strictly **non-commercial**, open-source personal project. It is intended to be used as a supplementary study tool alongside the original "Nederlands in Gang" (Coutinho) textbook.

---

## ✨ Features

*   💬 **Interactive Dialogues & Reading:** Read and listen to chapter dialogues using the native Text-to-Speech (TTS) API. Click on any word to see its translation and instantly mark it as "Known" or "Unknown".
*   🗂️ **Smart Flashcards & Global Pool:** Practice vocabulary with interactive flashcards. Study chapter-specific words or switch to the **Global Pool** to review every word you have ever interacted with. Features keyboard shortcuts (⬅️ ⬆️ ⬇️ ➡️) for quick navigation.
*   🧠 **Grammar & Exercises:** Interactive exercises (multiple-choice, fill-in-the-blanks) with instant feedback and visual "Correct/Incorrect" states.
*   🏫 **On-Class Extra Sections:** Comprehensive grammar summaries, pronunciation tips, and extra exercises based on real classroom notes ("On-C" tabs).
*   🔍 **Smart Dictionary Search:** Search for any Dutch word across the entire curriculum. Mark words as known/unknown directly from the search results to add them to your personal tracking system.
*   ☁️ **Cloud Sync & Passwordless Login:** Firebase Magic Link (Passwordless) authentication. Your progress—including known/unknown words, favorites, and completed sections—is securely synchronized to the cloud. You never lose your progress across devices.

---

## 🛠️ Tech Stack

*   **Frontend:** React.js
*   **Styling:** Tailwind CSS (Custom customized themes and responsive design)
*   **Backend / Auth:** Firebase (Authentication - Magic Link / Identity Toolkit)
*   **Database:** Firebase Firestore / Cloud Storage (Progress Synchronization)
*   **Deployment:** Vercel
*   **APIs:** Web Speech API (for Dutch `nl-NL` pronunciation)

---

## 🚀 Local Development & Setup

Follow these steps to run the project locally on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/eckucukoglu/nederlands-app.git
cd nederlands-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Firebase Configuration
You need to create a Firebase project and add your web app configuration to your environment variables. 
Create a `.env` file in the root directory and add the following keys:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
*(Note: Ensure your Firebase Authentication settings have "Email Link (passwordless sign-in)" enabled, and your authorized domains include `localhost` and your production domain).*

### 4. Start the development server
```bash
npm start
```
The app will run in development mode at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components (AuthModal, Flashcards, ExerciseEngine...)
├── contexts/            # React Contexts (LanguageContext for i18n TR/EN)
├── data/                # Data structure
│   ├── chapters/        # Individual chapter data (chapter3.js, chapter4.js...)
│   ├── globalDictionary.js # Fallback dictionary mappings
│   └── index.js         # Centralized export for all book sections
├── firebase.js          # Firebase configuration and auth/db