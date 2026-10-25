import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExerciseEngine from './ExerciseEngine';
import { LanguageProvider } from '../contexts/LanguageContext';

jest.mock('../firebase', () => ({
  auth: { currentUser: null },
  db: {},
  syncToCloud: jest.fn().mockResolvedValue({ success: true }),
  pullFromCloud: jest.fn().mockResolvedValue({ success: true })
}));

const mockSectionData = {
  id: 'test_sec_1',
  title: 'Test Section Title',
  subSections: [
    { title: 'Sub 1', text: 'Some text' }
  ],
  exerciseGroups: [
    {
      instructions: 'Fill in the blanks',
      questions: [
        { id: 'q1', question: 'Ik ___ een student.', correctAnswer: 'ben', type: 'fill_in_the_blank' },
        { id: 'q2', question: 'Hij ___ brood.', correctAnswer: 'eet', type: 'fill_in_the_blank' }
      ]
    }
  ]
};

describe('ExerciseEngine persistent test results', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('appLanguage', 'tr');
  });

  test('verifying exercises saves results to localStorage and renders persistent badge', () => {
    render(
      <LanguageProvider>
        <ExerciseEngine sectionData={mockSectionData} chapterNum={1} />
      </LanguageProvider>
    );

    // Initially no badge
    expect(screen.queryByText(/Doğru/i)).not.toBeInTheDocument();

    // Type one correct answer and leave the other empty
    const inputs = screen.getAllByPlaceholderText(/Cevabını yaz/i);
    fireEvent.change(inputs[0], { target: { value: 'ben' } });

    // Verify answers
    const verifyBtn = screen.getByRole('button', { name: /Cevapları Kontrol Et/i });
    fireEvent.click(verifyBtn);

    // Results rendered in badge (and floating toast)
    expect(screen.getAllByText(/1 Doğru/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/1 Yanlış/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/1 Boş/i).length).toBeGreaterThanOrEqual(1);

    // Saved in localStorage
    const saved = JSON.parse(localStorage.getItem('sectionExerciseResult_test_sec_1'));
    expect(saved).toEqual(expect.objectContaining({
      correct: 1,
      incorrect: 1,
      unanswered: 1,
      total: 2
    }));
  });

  test('loads previously saved results and answers from localStorage on mount', () => {
    localStorage.setItem(
      'sectionExerciseResult_test_sec_1',
      JSON.stringify({ correct: 2, incorrect: 0, unanswered: 0, total: 2, ts: Date.now() })
    );
    localStorage.setItem(
      'sectionExerciseAnswers_test_sec_1',
      JSON.stringify({ q1: 'ben', q2: 'eet' })
    );

    render(
      <LanguageProvider>
        <ExerciseEngine sectionData={mockSectionData} chapterNum={1} />
      </LanguageProvider>
    );

    // Badge is visible immediately without verifying again (toast is null on mount, so exactly 1 element)
    expect(screen.getByText(/2 Doğru/i)).toBeInTheDocument();
    expect(screen.getByText(/0 Yanlış/i)).toBeInTheDocument();

    // Input values are restored and disabled since results are shown
    const inputs = screen.getAllByPlaceholderText(/Cevabını yaz/i);
    expect(inputs[0]).toHaveValue('ben');
    expect(inputs[0]).toBeDisabled();
    expect(inputs[1]).toHaveValue('eet');
    expect(inputs[1]).toBeDisabled();

    // "Yeniden Çöz" button is available
    const resetBtn = screen.getByRole('button', { name: /Yeniden Çöz/i });
    expect(resetBtn).toBeInTheDocument();

    // Clicking "Yeniden Çöz" re-enables inputs and clears them, but badge remains until re-verified
    fireEvent.click(resetBtn);
    expect(inputs[0]).not.toBeDisabled();
    expect(inputs[0]).toHaveValue('');
    expect(screen.getByText(/2 Doğru/i)).toBeInTheDocument();
  });
});
