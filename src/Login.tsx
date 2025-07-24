import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WaveBackground from './WaveBackground';
import LanguageSwitcher from './LanguageSwitcher';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      setError(data.message || 'Login failed');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #2563eb 0%, #1e3a8a 100%)', position: 'relative' }}>
      <WaveBackground />
      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 100 }}>
        <h1 style={{ color: '#fff', fontSize: 40, fontWeight: 800 }}>Swave AI</h1>
        <form
          onSubmit={handleLogin}
          style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 12,
            padding: 24,
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}
        >
          <label style={{ color: '#fff', fontWeight: 600 }}>{t('login.username')}</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{ padding: 8, borderRadius: 8, border: 'none' }}
          />
          <label style={{ color: '#fff', fontWeight: 600 }}>{t('login.password')}</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ padding: 8, borderRadius: 8, border: 'none' }}
          />
          <button
            type="submit"
            style={{
              background: '#38bdf8',
              color: '#fff',
              border: 'none',
              padding: 10,
              borderRadius: 8,
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {t('login.loginBtn')}
          </button>
          {error && <div style={{ color: '#f87171', marginTop: 8 }}>{error}</div>}
        </form>
        <div style={{ marginTop: 16 }}>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Login;
