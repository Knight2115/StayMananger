'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import './sidebarLayout.css';

export default function SidebarLayout({ children }) {
  const router = useRouter();

   useEffect(() => {
    const emp = localStorage.getItem('empleadoKey');
    if (!emp) {
      router.replace('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('empleadoKey');
    document.cookie = 'empleadoKey=; Max-Age=0; path=/'
    router.replace('/login');
  };

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="tittle-container">
          <h2>Stay Manager</h2>
        </div>
        <nav>
          <ul>
            <li className="active">
              <Link href="/dashboard/reservas" className="sidebar-link">
                <i className="fas fa-calendar-alt" /> Reservas
              </Link>
            </li>
            <li>
              <Link href="/dashboard/hoteles" className="sidebar-link">
                <i className="fas fa-hotel" /> Hoteles
              </Link>
            </li>
            <li>
              <Link href="/dashboard/clientes" className="sidebar-link">
                <i className="fas fa-users" /> Clientes
              </Link>
            </li>
            <li>
              <Link href="/dashboard/empleados" className="sidebar-link">
                <i className="fas fa-user-tie" /> Empleados
              </Link>
            </li>
            <li>
              <button 
                onClick={handleLogout} 
                className="sidebar-link"
                type="button"
              >
                <i className="fas fa-sign-out-alt" /> Cerrar Sesión
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
}
