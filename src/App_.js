// src/App.js
import React, { useState } from 'react';
import './App.css';
import DialogueSection from './components/DialogueSection';
import ExerciseEngine from './components/ExerciseEngine';
import Flashcards from './components/Flashcards';
import { bookSections } from './data'; // Artık data/index.js'den okuyor

function App() {
  const [activeTab, setActiveTab] = useState('9.1');

  // SİSTEM: Gelen veri setinden üniteleri (Chapter 9, Chapter 10 vb.) dinamik olarak grupla
  const groupedChapters = bookSections.reduce((acc, section) => {
    const ch = section.chapter;
    if (!acc[ch]) acc[ch] = { title: `Hoofdstuk ${ch}`, sections: [] };
    acc[ch].sections.push(section);
    return acc;
  }, {});

  // Object key'lerini (9, 10 vb.) sırala
  const chapterNumbers = Object.keys(groupedChapters).sort((a, b) => Number(a) - Number(b));

  return (
    <div className="container">
      <h1>Nederlands in Gang - Oefenportaal</h1>
      
      {/* OTOMATİK OLUŞTURULAN MENÜ ALANI */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
        
        {chapterNumbers.map(chNum => (
          <div key={chNum} style={{ backgroundColor: 'var(--card-bg)', padding: '15px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)', fontSize: '1.1rem' }}>
              {groupedChapters[chNum].title}
            </h3>
            <div className="nav" style={{ marginBottom: 0 }}>
              {groupedChapters[chNum].sections.map(sec => (
                <button 
                  key={sec.id} 
                  className={activeTab === sec.id ? 'active' : ''} 
                  onClick={() => setActiveTab(sec.id)}
                >
                  {sec.id.includes('On-Class') ? 'On-Class' : sec.id}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button 
            className={`btn ${activeTab === 'flashcards' ? 'active' : 'btn-outline'}`} 
            style={{ padding: '12px 30px', fontSize: '1.1rem' }}
            onClick={() => setActiveTab('flashcards')}
          >
            🗂️ Flashcards (Woorden Trainen)
          </button>
        </div>
      </div>

      {/* İÇERİK ALANI */}
      <div className="content">
        {(activeTab.includes('.1') && !activeTab.includes('On-Class')) && (
          <DialogueSection sectionId={activeTab} />
        )}
        
        {activeTab !== 'flashcards' && bookSections.find(s => s.id === activeTab) && (
          <ExerciseEngine sectionData={bookSections.find(s => s.id === activeTab)} />
        )}

        {activeTab === 'flashcards' && <Flashcards />}
      </div>
    </div>
  );
}

export default App;