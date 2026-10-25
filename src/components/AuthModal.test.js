// src/components/AuthModal.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AuthModal from './AuthModal';
import { LanguageProvider } from '../contexts/LanguageContext';
import * as firebaseModule from '../firebase';

jest.mock('../firebase', () => ({
  auth: { signOut: jest.fn() },
  sendSignInLinkToEmail: jest.fn().mockResolvedValue(),
  deleteCloudData: jest.fn().mockResolvedValue(),
  syncToCloud: jest.fn().mockResolvedValue({ success: true, timestamp: '2026-10-25T10:00:00.000Z' }),
  pullFromCloud: jest.fn().mockResolvedValue({ success: true, count: 5 })
}));

describe('AuthModal Component', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('appLanguage', 'tr');
    firebaseModule.syncToCloud.mockResolvedValue({ success: true, timestamp: '2026-10-25T10:00:00.000Z' });
    firebaseModule.pullFromCloud.mockResolvedValue({ success: true, count: 5 });
    firebaseModule.sendSignInLinkToEmail.mockResolvedValue();
    firebaseModule.deleteCloudData.mockResolvedValue();
  });

  test('Renders login form and tip when user is not logged in', () => {
    render(
      <LanguageProvider>
        <AuthModal isOpen={true} onClose={jest.fn()} user={null} />
      </LanguageProvider>
    );

    expect(screen.getByPlaceholderText(/E-posta adresin/i)).toBeInTheDocument();
    expect(screen.getByText(/Giriş Linki Gönder/i)).toBeInTheDocument();
    expect(screen.getByText(/Giriş bağlantısına tıkladığınızda bu tarayıcıda açıldığından emin olun/i)).toBeInTheDocument();
  });

  test('Normalizes email by trimming and converting to lowercase when sending login link', async () => {
    render(
      <LanguageProvider>
        <AuthModal isOpen={true} onClose={jest.fn()} user={null} />
      </LanguageProvider>
    );

    const emailInput = screen.getByPlaceholderText(/E-posta adresin/i);
    fireEvent.change(emailInput, { target: { value: '  User.Test@Example.COM  ' } });

    const submitBtn = screen.getByText(/Giriş Linki Gönder/i);
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(firebaseModule.sendSignInLinkToEmail).toHaveBeenCalledWith(
        firebaseModule.auth,
        'user.test@example.com',
        expect.any(Object)
      );
    });

    expect(localStorage.getItem('emailForSignIn')).toBe('user.test@example.com');
  });

  test('Renders active cloud sync info and handles manual sync when user is logged in', async () => {
    const mockUser = { uid: 'user_123', email: 'user@example.com' };
    localStorage.setItem('lastCloudSyncTimestamp', '2026-10-25T09:30:00.000Z');

    render(
      <LanguageProvider>
        <AuthModal isOpen={true} onClose={jest.fn()} user={mockUser} />
      </LanguageProvider>
    );

    expect(screen.getByText('user@example.com')).toBeInTheDocument();
    expect(screen.getByText(/Bulut Senkronizasyonu Aktif/i)).toBeInTheDocument();

    const syncBtn = screen.getByText(/Şimdi Senkronize Et/i);
    expect(syncBtn).toBeInTheDocument();

    fireEvent.click(syncBtn);

    await waitFor(() => {
      expect(firebaseModule.pullFromCloud).toHaveBeenCalledWith('user_123');
      expect(firebaseModule.syncToCloud).toHaveBeenCalledWith(true);
    });

    await waitFor(() => {
      expect(screen.getByText(/Tüm ilerlemeniz başarıyla senkronize edildi/i)).toBeInTheDocument();
    });
  });
});
