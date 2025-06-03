'use client';
import { useState, useEffect, useRef  } from 'react';
import './ComboBoxBusqueda.css'; // Opcional para estilos personalizados

export default function ComboBoxBusqueda({ label, opciones, valorSeleccionado, setValorSeleccionado, onNuevo}) {
  const [busqueda, setBusqueda] = useState('');
  const [mostrarLista, setMostrarLista] = useState(false);
  const ref = useRef();

  const filtradas = opciones.filter(op =>
    op.label.toLowerCase().includes(busqueda.toLowerCase())
  );

  const seleccionar = (opcion) => {
    setValorSeleccionado(opcion);
    setBusqueda('');
    setMostrarLista(false);
  };

  // Detecta clic fuera del combobox y cierra
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setMostrarLista(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="combo-box-container" ref={ref}>
      <label>{label}</label>
      <div
        className="combo-box-display"
        onClick={() => setMostrarLista(prev => !prev)}
      >
        {valorSeleccionado?.label || `Seleccionar ${label.toLowerCase()}...`}
      </div>

      {mostrarLista && (
        <div className="combo-box-dropdown">
          <input
            className="combo-box-search"
            type="text"
            placeholder={`Buscar ${label.toLowerCase()}...`}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            autoFocus
          />
          {label.toLowerCase() === 'cliente' && (
            <button className="nuevo-cliente-btn" 
              onClick={() => {
                setMostrarLista(false);
                if (typeof onNuevo === 'function') {
                  onNuevo();
                }

              }}>
              + Agregar Nuevo Cliente
            </button>
          )}
          <ul className="combo-box-options">
            {filtradas.map(op => (
              <li key={op.key} onClick={() => seleccionar(op)}>
                {op.label}
              </li>
            ))}
            {filtradas.length === 0 && <li className="sin-resultados">No hay coincidencias</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
