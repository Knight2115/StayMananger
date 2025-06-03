'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './page.css'

export default function Clientes() {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const fakeClientes = [
      { id: 1, nombre: 'Carlos Martínez', apellido: 'Gómez', genero: 'M', fechaNacimiento: '1985-06-15', nacionalidad: 'Guatemalteca', tipo: 'Regular' },
      { id: 2, nombre: 'Lucía Ramírez', apellido: 'Salazar', genero: 'F', fechaNacimiento: '1990-09-22', nacionalidad: 'Guatemalteca', tipo: 'VIP' },
      { id: 3, nombre: 'Andrés Pérez', apellido: 'Morales', genero: 'M', fechaNacimiento: '1978-12-04', nacionalidad: 'Hondureña', tipo: 'Frecuente' }
    ]
    setClientes(fakeClientes)
  }, [])

  return (
    <div className="main-container">
      <div className="button-back">
        <Link href="/">
          <button>← Regresar al Menú</button>
        </Link>
      </div>

      <div className="tittle">
        <h1>Clientes</h1>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Género</th>
              <th>Fecha Nacimiento</th>
              <th>Nacionalidad</th>
              <th>Tipo Cliente</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nombre}</td>
                <td>{c.apellido}</td>
                <td>{c.genero}</td>
                <td>{c.fechaNacimiento}</td>
                <td>{c.nacionalidad}</td>
                <td>{c.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
