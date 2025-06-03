'use client';
import './page.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, contraseña }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('empleadoKey', String(data.EmpKey));
        document.cookie = `empleadoKey=${data.EmpKey}; path=/; sameSite=lax`;
        router.replace('/dashboard/reservas');
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      setError('Error de conexión');
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <div className="left-panel">
          <h2 className="login-title">Login</h2>
          <input
            type="text"
            placeholder="Usuario"
            className="login-input"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Constraseña"
            className="login-input"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          {error && <p className="login-error">{error}</p>}
          <button className="login-button" onClick={handleLogin}>Iniciar Sesion</button>
        </div>

        <div className="right-panel">
          <div className="welcome-container">
            <div className="line top">Bienvenido</div>
            <div className="line middle">a</div>
            <div className="line bottom">Stay Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
}
