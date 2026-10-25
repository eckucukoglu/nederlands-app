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

  test('verifying exercises saves results to localStorage and renders persistent badge with single button', () => {
    render(
      <LanguageProvider>
        <ExerciseEngine sectionData={mockSectionData} chapterNum={1} />
      </LanguageProvider>
    );

    // Initially no score badge
    expect(screen.queryByText(/Doğru/i)).not.toBeInTheDocument();

    // Verify there is only one single button ("Cevapları Kontrol Et"), no "Yeniden Çöz"
    const buttons = screen.getAllByRole('button');
    expect(screen.getByRole('button', { name: /Cevapları Kontrol Et/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Yeniden Çöz/i })).not.toBeInTheDocument();

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

    // Still only single button ("Cevapları Kontrol Et"), no "Yeniden Çöz"
    expect(screen.queryByRole('button', { name: /Yeniden Çöz/i })).not.toBeInTheDocument();

    // Saved in localStorage
    const saved = JSON.parse(localStorage.getItem('sectionExerciseResult_test_sec_1'));
    expect(saved).toEqual(expect.objectContaining({
      correct: 1,
      incorrect: 1,
      unanswered: 1,
      total: 2
    }));
  });

  test('on re-entering section, test is in 0 state (clean inputs) but previous score is displayed at the bottom', () => {
    localStorage.setItem(
      'sectionExerciseResult_test_sec_1',
      JSON.stringify({ correct: 2, incorrect: 0, unanswered: 0, total: 2, ts: Date.now() })
    );

    render(
      <LanguageProvider>
        <ExerciseEngine sectionData={mockSectionData} chapterNum={1} />
      </LanguageProvider>
    );

    // Score badge is visible at the bottom reflecting previous test result
    expect(screen.getByText(/2 Doğru/i)).toBeInTheDocument();
    expect(screen.getByText(/0 Yanlış/i)).toBeInTheDocument();

    // Inputs are in 0 state: completely empty and enabled
    const inputs = screen.getAllByPlaceholderText(/Cevabını yaz/i);
    expect(inputs[0]).toHaveValue('');
    expect(inputs[0]).not.toBeDisabled();
    expect(inputs[1]).toHaveValue('');
    expect(inputs[1]).not.toBeDisabled();

    // Results feedback (green/red) is NOT shown
    expect(screen.queryByText(/Juist/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Onjuist/i)).not.toBeInTheDocument();

    // Only one single button ("Cevapları Kontrol Et"), absolutely no "Yeniden Çöz" button
    expect(screen.getByRole('button', { name: /Cevapları Kontrol Et/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Yeniden Çöz/i })).not.toBeInTheDocument();
  });

  test('editing an input resets results feedback while keeping bottom score until re-verified', () => {
    render(
      <LanguageProvider>
        <ExerciseEngine sectionData={mockSectionData} chapterNum={1} />
      </LanguageProvider>
    );

    const inputs = screen.getAllByPlaceholderText(/Cevabını yaz/i);
    fireEvent.change(inputs[0], { target: { value: 'ben' } });

    const verifyBtn = screen.getByRole('button', { name: /Cevapları Kontrol Et/i });
    fireEvent.click(verifyBtn);

    // Result feedback is shown
    expect(screen.getByText(/✔️ Juist/i)).toBeInTheDocument();

    // Now edit input 2
    fireEvent.change(inputs[1], { target: { value: 'eet' } });

    // Result feedback is hidden to let user answer fresh
    expect(screen.queryByText(/✔️ Juist/i)).not.toBeInTheDocument();

    // Bottom score badge remains visible until re-verified
    expect(screen.getAllByText(/1 Doğru/i).length).toBeGreaterThanOrEqual(1);

    // Re-verify
    fireEvent.click(verifyBtn);
    expect(screen.getAllByText(/2 Doğru/i).length).toBeGreaterThanOrEqual(1);
  });
});
