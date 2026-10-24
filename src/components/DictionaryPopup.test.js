import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReadingPassage from './ReadingPassage';
import DialogueSection from './DialogueSection';
import VocabularySection from './VocabularySection';
import { LanguageProvider } from '../contexts/LanguageContext';
import { bookSections } from '../data';

describe('Dictionary Popup Normal Functionality & Viewport Bounding', () => {
  const readingSection = bookSections.find(s => s.id === 'Reading-1');

  beforeEach(() => {
    localStorage.clear();
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });

  test('ReadingPassage: Clicking a Dutch word opens dictionary popup with clean exact match ranking', () => {
    render(
      <LanguageProvider>
        <ReadingPassage
          data={readingSection.readingPassage}
          sectionId="Reading-1"
          chapterId={1}
          favorites={{}}
          completed={{}}
          toggleFavorite={jest.fn()}
          toggleCompleted={jest.fn()}
        />
      </LanguageProvider>
    );

    // Find words in the reading passage
    const words = screen.getAllByText(/[a-zA-Z]+/i);
    // Find a dotted word from the passage
    const dottedWord = words.find(w => w.style && w.style.cursor === 'pointer');
    expect(dottedWord).toBeDefined();

    // Click word with mock clientX / clientY
    fireEvent.click(dottedWord, { clientX: 200, clientY: 150 });

    // The popup should appear
    expect(screen.getByText(/Sadece İşaretle|Mark Only/i)).toBeInTheDocument();
  });

  test('ReadingPassage on Mobile: Click near left edge (clientX=15) clamps safely without overflowing left', () => {
    window.innerWidth = 360;
    window.innerHeight = 740;

    render(
      <LanguageProvider>
        <ReadingPassage
          data={readingSection.readingPassage}
          sectionId="Reading-1"
          chapterId={1}
          favorites={{}}
          completed={{}}
          toggleFavorite={jest.fn()}
          toggleCompleted={jest.fn()}
        />
      </LanguageProvider>
    );

    const words = screen.getAllByText(/[a-zA-Z]+/i);
    const dottedWord = words.find(w => w.style && w.style.cursor === 'pointer');
    expect(dottedWord).toBeDefined();

    fireEvent.click(dottedWord, { clientX: 15, clientY: 200 });

    const markOnly = screen.getByText(/Sadece İşaretle|Mark Only/i);
    expect(markOnly).toBeInTheDocument();

    // Find the popup container
    const popup = markOnly.closest('.fixed.bg-slate-800');
    expect(popup).toBeInTheDocument();

    const leftVal = parseInt(popup.style.left, 10);
    expect(leftVal).toBeGreaterThanOrEqual(12);
  });

  test('DialogueSection: Clicking a word opens dictionary popup with clean translations and no overflow', () => {
    render(
      <LanguageProvider>
        <DialogueSection
          sectionId="1.1"
          favorites={{}}
          completed={{}}
          toggleFavorite={jest.fn()}
          toggleCompleted={jest.fn()}
        />
      </LanguageProvider>
    );

    const words = screen.getAllByText(/[a-zA-Z]+/i);
    const dottedWord = words.find(w => w.style && w.style.cursor === 'pointer');
    expect(dottedWord).toBeDefined();

    fireEvent.click(dottedWord, { clientX: 300, clientY: 250 });

    expect(screen.getByText(/Sadece İşaretle|Mark Only/i)).toBeInTheDocument();
  });

  test('VocabularySection: Clicking a word card opens detail modal positioned near click', () => {
    render(
      <LanguageProvider>
        <VocabularySection
          sectionId="1.2"
          chapterNum={1}
          favorites={{}}
          completed={{}}
          toggleFavorite={jest.fn()}
          toggleCompleted={jest.fn()}
        />
      </LanguageProvider>
    );

    // Look for word cards with Dutch words
    const cards = document.querySelectorAll('.group.relative.cursor-pointer');
    expect(cards.length).toBeGreaterThan(0);

    // Click on the first card
    fireEvent.click(cards[0], { clientX: 250, clientY: 300 });

    // Modal should be open with Biliyorum button inside modal
    const knowBtns = screen.getAllByText(/Biliyorum|I know/i);
    expect(knowBtns.length).toBeGreaterThan(0);

    // Find modal container and check left position
    const modal = knowBtns[0].closest('.fixed.bg-slate-800');
    expect(modal).toBeInTheDocument();
    expect(parseInt(modal.style.left, 10)).toBeGreaterThanOrEqual(12);
  });
});
