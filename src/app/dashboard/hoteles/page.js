'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './page.css'

export default function Hoteles() {
    const [hoteles, setHoteles] = useState([])
    const [nuevoHotel, setNuevoHotel] = useState({
        name: '',
        cadena: '',
        ciudad: '',
        pais: '',
        estrellas: '',
        direccion: ''
    })

    useEffect(() => {
        const fakeData = [
            { id: 1, name: 'Hotel Paraíso', cadena: 'principal', ciudad: 'Guatemala', pais: 'Guatemala', estrellas: 5, direccion: 'Calle 1, 123' },
            { id: 2, name: 'Ocean View Resort', cadena: 'principal', ciudad: 'Peten', pais: 'Guatemala', estrellas: 4, direccion: 'Av. del Mar, 456' },
            { id: 3, name: 'Montaña Suites', cadena: 'principal', ciudad: 'Zacapa', pais: 'Guatemala', estrellas: 3, direccion: 'Cerro Azul, 789' }
        ]
        setHoteles(fakeData)
    }, [])

    const handleChange = (e) => {
        setNuevoHotel({
            ...nuevoHotel,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nuevoHotel.name && nuevoHotel.ciudad && nuevoHotel.pais) {
            const nuevo = {
                id: hoteles.length + 1, // Asignar ID incremental
                ...nuevoHotel,
                estrellas: parseInt(nuevoHotel.estrellas)
            }
            setHoteles([...hoteles, nuevo])
            setNuevoHotel({ name: '', cadena: '', ciudad: '', pais: '', estrellas: '', direccion: '' }) // limpiar formulario
        } else {
            alert('Por favor completa los campos obligatorios.')
        }
    }

    return (
        <div className="main-container">

            <div className="tittle">
                <h1>Hoteles</h1>
            </div>
            <div className='table-container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cadena</th>
                            <th>Ciudad</th>
                            <th>Pais</th>
                            <th>Estrellas</th>
                            <th>Dirección</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hoteles.map((hotel) => (
                            <tr key={hotel.id}>
                                <td>{hotel.id}</td>
                                <td>{hotel.name}</td>
                                <td>{hotel.cadena}</td>
                                <td>{hotel.ciudad}</td>
                                <td>{hotel.pais}</td>
                                <td>{'⭐'.repeat(hotel.estrellas)}</td>
                                <td>{hotel.direccion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="form-container">
                <h2>Agregar Nuevo Hotel</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre del hotel"
                        value={nuevoHotel.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="cadena"
                        placeholder="Cadena"
                        value={nuevoHotel.cadena}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ciudad"
                        placeholder="Ciudad"
                        value={nuevoHotel.ciudad}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="pais"
                        placeholder="País"
                        value={nuevoHotel.pais}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="estrellas"
                        placeholder="Estrellas (1-5)"
                        value={nuevoHotel.estrellas}
                        onChange={handleChange}
                        min="1"
                        max="5"
                    />
                    <input
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                        value={nuevoHotel.direccion}
                        onChange={handleChange}
                    />
                    <button type="submit">Agregar Hotel</button>
                </form>
            </div>
        </div>
    )
}