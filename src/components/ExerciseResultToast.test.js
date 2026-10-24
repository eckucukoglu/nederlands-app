import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ExerciseResultToast from './ExerciseResultToast';

describe('ExerciseResultToast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders nothing when stats is null', () => {
    const { container } = render(<ExerciseResultToast stats={null} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders correct, incorrect and total counts accurately in Turkish', () => {
    const stats = { correct: 4, incorrect: 1, unanswered: 0, total: 5, ts: Date.now() };
    render(<ExerciseResultToast stats={stats} lang="tr" />);

    expect(screen.getByText(/4 Doğru/i)).toBeInTheDocument();
    expect(screen.getByText(/1 Yanlış/i)).toBeInTheDocument();
    expect(screen.getByText(/5 soru kontrol edildi/i)).toBeInTheDocument();
  });

  test('renders correct, incorrect and empty counts in English', () => {
    const stats = { correct: 2, incorrect: 1, unanswered: 2, total: 5, ts: Date.now() };
    render(<ExerciseResultToast stats={stats} lang="en" />);

    expect(screen.getByText(/2 Correct/i)).toBeInTheDocument();
    expect(screen.getByText(/1 Incorrect/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Empty/i)).toBeInTheDocument();
    expect(screen.getByText(/5 questions checked/i)).toBeInTheDocument();
  });

  test('renders celebration message when all answers are correct', () => {
    const stats = { correct: 5, incorrect: 0, unanswered: 0, total: 5, ts: Date.now() };
    render(<ExerciseResultToast stats={stats} lang="tr" />);

    expect(screen.getByText(/Tebrikler! Hepsi Doğru/i)).toBeInTheDocument();
  });

  test('smoothly fades out and calls onClose after duration', () => {
    const onClose = jest.fn();
    const stats = { correct: 3, incorrect: 1, unanswered: 0, total: 4, ts: Date.now() };
    const { container } = render(
      <ExerciseResultToast stats={stats} lang="tr" onClose={onClose} duration={4000} />
    );

    // Initial state: not fading
    expect(container.firstChild).toHaveClass('opacity-100');

    // Fast-forward to fade time (4000 - 1000 = 3000ms)
    act(() => {
      jest.advanceTimersByTime(3100);
    });
    expect(container.firstChild).toHaveClass('opacity-0');

    // Fast-forward to duration end (4000ms)
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

