import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('../firebase', () => ({
  auth: { currentUser: null },
  db: {},
  pullUserData: jest.fn(),
  pushUserData: jest.fn(),
}));

import HomeView from './HomeView';

// Mock GuideContent
const MockGuideContent = () => <div data-testid="mock-guide-content">Guide Full Content</div>;

describe('HomeView Collapsible Accordions and Progress Defaults', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('New user (< 5% progress): Guide is open by default and Progress card is collapsed by default', () => {
    render(
      <HomeView 
        favorites={[]}
        completed={[]}
        goToSection={jest.fn()}
        lang="tr"
        bookSections={[{ id: '1.1', chapter: 1 }]}
        GuideContent={MockGuideContent}
      />
    );

    // Guide should be open by default
    expect(screen.getByTestId('mock-guide-content')).toBeInTheDocument();
    expect(screen.getByText('Daralt')).toBeInTheDocument();

    // Progress card should be collapsed by default
    expect(screen.getByText('Detayları Gör')).toBeInTheDocument();
    // In collapsed mode, the 10.000 XP explanation prompt is visible
    expect(screen.getByText(/10\.000 XP hedefinizi görmek için tıklayın/i)).toBeInTheDocument();
  });

  test('Advanced user (>= 5% progress): Progress card is open by default and Guide is collapsed by default', () => {
    // 5% or more progress
    // Give enough completed sections to reach >= 5%
    const mockCompleted = {};
    for (let i = 0; i < 20; i++) {
      mockCompleted[`section_${i}`] = true;
    }
    const mockBookSections = Array.from({ length: 30 }, (_, i) => ({ id: `section_${i}`, chapter: Math.floor(i / 2) + 1 }));

    render(
      <HomeView 
        favorites={{}}
        completed={mockCompleted}
        goToSection={jest.fn()}
        lang="tr"
        bookSections={mockBookSections}
        GuideContent={MockGuideContent}
      />
    );

    // Progress card should be open by default
    expect(screen.getByText('Her Çalışma Bir İlerlemedir: Çözülen her soru, öğrenilen her kelime ve tamamlanan her bölüm seviyenizi anında yükseltir.')).toBeInTheDocument();

    // Guide should be collapsed by default
    expect(screen.queryByTestId('mock-guide-content')).not.toBeInTheDocument();
    expect(screen.getByText('Kılavuzu Gör')).toBeInTheDocument();
  });

  test('User manual toggle overrides defaults and persists to localStorage', () => {
    const { unmount } = render(
      <HomeView 
        favorites={[]}
        completed={[]}
        goToSection={jest.fn()}
        lang="tr"
        bookSections={[{ id: '1.1', chapter: 1 }]}
        GuideContent={MockGuideContent}
      />
    );

    // Click Progress card to expand it
    const progressHeader = screen.getByText('Birleşik Öğrenme İlerlemesi').closest('[role="button"]');
    fireEvent.click(progressHeader);

    // Now progress is expanded and saved to localStorage
    expect(localStorage.getItem('dashboard_progress_open')).toBe('true');
    expect(screen.getByText('Her Çalışma Bir İlerlemedir: Çözülen her soru, öğrenilen her kelime ve tamamlanan her bölüm seviyenizi anında yükseltir.')).toBeInTheDocument();

    // Click Guide header to collapse it
    const guideHeader = screen.getByText('Uygulama Kullanım Kılavuzu & İpuçları').closest('button');
    fireEvent.click(guideHeader);

    // Now guide is collapsed and saved to localStorage
    expect(localStorage.getItem('dashboard_guide_open')).toBe('false');
    expect(screen.queryByTestId('mock-guide-content')).not.toBeInTheDocument();

    unmount();

    // Re-render: it should retain user explicit preferences
    render(
      <HomeView 
        favorites={[]}
        completed={[]}
        goToSection={jest.fn()}
        lang="tr"
        bookSections={[{ id: '1.1', chapter: 1 }]}
        GuideContent={MockGuideContent}
      />
    );

    // Progress remains open, Guide remains collapsed
    expect(screen.getByText('Her Çalışma Bir İlerlemedir: Çözülen her soru, öğrenilen her kelime ve tamamlanan her bölüm seviyenizi anında yükseltir.')).toBeInTheDocument();
    expect(screen.queryByTestId('mock-guide-content')).not.toBeInTheDocument();
  });
});
