'use client'

import React, { useEffect, useState } from 'react'
import './FechaSelector.css'

export default function FechaSelector({ value, onChange }) {
  const [dateValue, setDateValue] = useState(value || '')
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  // Aquí almacenamos el objeto completo, incluidas las dimensiones y la FechaKey
  const [fields, setFields] = useState({
    FechaKey: '',
    Fecha: '',
    Año: '',
    Trimestre: '',
    Mes: '',
    Dia: '',
    DiaSemana: '',
    EsFinDeSemana: ''
  })

  // Cada vez que cambie dateValue, recalculamos las dimensiones (excepto FechaKey)
  useEffect(() => {
    if (!dateValue) {
      const empty = { FechaKey:'', Fecha:'', Año:'', Trimestre:'', Mes:'', Dia:'', DiaSemana:'', EsFinDeSemana:'' }
      setFields(empty)
      onChange(empty)
      return
    }

    const d = new Date(dateValue + 'T00:00')
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    const quarter = Math.floor((month - 1) / 3) + 1
    const dayName = d.toLocaleDateString('es-ES', { weekday: 'long' })
    const weekend = ['sábado','domingo'].includes(dayName)

    // devolvemos sin FechaKey, lo pedirá handleHoy o el padre tras persistir
    const dims = {
      FechaKey: '', 
      Fecha: dateValue,
      Año: year,
      Trimestre: quarter,
      Mes: month,
      Dia: day,
      DiaSemana: dayName,
      EsFinDeSemana: weekend
    }

    setFields(dims)
    onChange(dims)
  }, [dateValue])

  // Cuando pulsemos Hoy
  const handleHoy = async () => {
    // 1) calculamos la fecha de hoy en ISO
    const hoy = new Date().toISOString().slice(0,10)
    setDateValue(hoy)

    // 2) volvemos a calcular dims aquí
    const d = new Date(hoy + 'T00:00')
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    const quarter = Math.floor((month - 1) / 3) + 1
    const dayName = d.toLocaleDateString('es-ES', { weekday: 'long' })
    const weekend = ['sábado','domingo'].includes(dayName)

    // 3) enviamos al servidor para insertar o recuperar FechaKey
    try {
      const res = await fetch(`${apiUrl}/nueva-fecha`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Fecha: hoy,
          Año: year,
          Trimestre: quarter,
          Mes: month,
          Dia: day,
          DiaSemana: dayName,
          EsFinDeSemana: weekend
        })
      })
      if (!res.ok) throw new Error('Error guardando fecha')

      const data = await res.json()
      // 4) recibimos FechaKey y completamos el objeto
      const withKey = {
        FechaKey: data.FechaKey,
        Fecha: hoy,
        Año: year,
        Trimestre: quarter,
        Mes: month,
        Dia: day,
        DiaSemana: dayName,
        EsFinDeSemana: weekend
      }
      setFields(withKey)
      onChange(withKey)

    } catch (err) {
      console.error(err)
      // en caso de fallo, dejamos al menos las dims sin clave
      setFields(fields => ({ ...fields, Fecha: hoy, Año: year, Trimestre: quarter, Mes: month, Dia: day, DiaSemana: dayName, EsFinDeSemana: weekend }))
      onChange(fields)
    }
  }

  return (
    <>
      <div className="form-group full-width">
        <label>Fecha</label>
        <div className="fecha-input-group">
          <input
            type="date"
            value={dateValue}
            onChange={e => setDateValue(e.target.value)}
          />
          <button type="button" className="btn-fecha-hoy" onClick={handleHoy}>
            Hoy
          </button>
        </div>
      </div>
    </>
  )
}
