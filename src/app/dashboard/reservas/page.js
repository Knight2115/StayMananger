'use client'
import { useEffect, useState } from 'react'
import './page.css'
import './modal.css'
import ComboBoxBusqueda from '../../components/ComboBoxBusqueda.js'
import FechaSelector from '../../components/FechaSelector.js'

export default function Reservas() {
  const [empleadoKey, setEmpleadoKey] = useState(null)
  const [reservas, setReservas] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [mostrarModal, setMostrarModal] = useState(false)
  const [mostrarModalClienteNuevo, setMostrarModalClienteNuevo] = useState(false)

  const [clientes, setClientes] = useState([])

  const [hoteles, setHoteles] = useState([])

  const [habitaciones, setHabitaciones] = useState([])

  const [canalesReserva, setCanalesReserva] = useState([])

  const [pagos, setPagos] = useState([])

  const [fechaDim, setFechaDim] = useState({})

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const ek = window.localStorage.getItem('empleadoKey')
    setEmpleadoKey(ek !== null ? Number(ek) : null)
  }, [])

  const [nuevaReserva, setNuevaReserva] = useState({
    HotelKey: '',
    ClienteKey: '',
    HabKey: '',
    FechaKey: '',
    EmpKey: 0,
    CanalKey: '',
    PagoKey: '',
    NochesReservadas: 1,
    CantidadHuespedes: 1,
    IngresoHabitacion: 0,
    IngresoServicios: 0,
    DescuentoTotal: 0,
    ImpuestoTotal: 0,
    LeadTimeReserva: 0,
    IngresoTotal: 0
  })

  const habitacionSeleccionada = habitaciones.find(
    h => h.HabitacionKey === nuevaReserva.HabKey
  );

  useEffect(() => {
    fetch(`${apiUrl}/reservas`)
      .then(res => res.json())
      .then(data => setReservas(data));

    fetch(`${apiUrl}/hoteles`)
      .then(res => res.json())
      .then(data => setHoteles(data));

    fetch(`${apiUrl}/canal-reservas`)
      .then(res => res.json())
      .then(data => setCanalesReserva(data)); 

    fetch(`${apiUrl}/pagos`)
      .then(res => res.json())
      .then(data => setPagos(data));

    fetch(`${apiUrl}/clientes`)
      .then(res => res.json())
      .then(data => setClientes(data));
  }, [])

  useEffect(() => {
    if (empleadoKey !== null) {
      setNuevaReserva(prev => ({
        ...prev,
        EmpKey: empleadoKey
      }))
    }
  }, [empleadoKey])

  useEffect(() => {
    if (nuevaReserva.HotelKey) {
      fetch(`${apiUrl}/habitaciones/${nuevaReserva.HotelKey}`)
        .then(res => res.json())
        .then(data => setHabitaciones(data))
    }
  }, [nuevaReserva.HotelKey])

  const eliminarReserva = async (id) => {
    if (!confirm("¿Estás seguro de eliminar esta reserva?")) return;

    const res = await fetch(`${apiUrl}/reservas/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setReservas(prev => prev.filter(r => r.ReservaKey !== id));
    }
  }

  const crearReserva = async () => {
    // prepara un objeto limpio, obligando a que sean números
    const payload = {
      HotelKey:          Number(nuevaReserva.HotelKey),
      ClienteKey:        Number(nuevaReserva.ClienteKey),
      HabKey:            Number(nuevaReserva.HabKey),
      FechaKey:          Number(nuevaReserva.FechaKey),
      EmpKey:            Number(empleadoKey),
      CanalKey:          Number(nuevaReserva.CanalKey),
      PagoKey:           Number(nuevaReserva.PagoKey),
      NochesReservadas:  Number(nuevaReserva.NochesReservadas),
      CantidadHuespedes: Number(nuevaReserva.CantidadHuespedes),
      IngresoHabitacion: Number(nuevaReserva.IngresoHabitacion),
      IngresoServicios:  Number(nuevaReserva.IngresoServicios),
      DescuentoTotal:    Number(nuevaReserva.DescuentoTotal),
      ImpuestoTotal:     Number(nuevaReserva.ImpuestoTotal),
      LeadTimeReserva:   Number(nuevaReserva.LeadTimeReserva),
      IngresoTotal:      Number(nuevaReserva.IngresoTotal)
    };

    console.log('Creando reserva con los siguientes datos:', payload);

    const res = await fetch(`${apiUrl}/nueva-reserva`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const nueva = await res.json();
      setReservas(prev => [...prev, nueva]);
      setMostrarModal(false);
    } else {
      const err = await res.json().catch(() => null);
      console.error('Error al crear reserva:', err);
      alert(`No se pudo crear reserva: ${err?.detail || res.statusText}`);
    }
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setNuevaReserva(prev => ({ ...prev, [name]: value }))
  }

  const reservasFiltradas = reservas.filter((r) =>
    r.Cliente?.Nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    r.Cliente?.Apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
    r.Hotel?.Nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleServiciosChange = (e) => {
    let raw = e.target.value.replace(/^Q\./, '');
    raw = raw.replace(/[^0-9.]/g, '');
    setNuevaReserva(prev => ({
      ...prev,
      IngresoServicios: raw
    }));
  };

  useEffect(() => {
    const tarifa     = parseFloat(nuevaReserva.IngresoHabitacion) || 0;
    const servicios  = parseFloat(nuevaReserva.IngresoServicios)  || 0;
    const descuento  = tarifa * (parseFloat(nuevaReserva.DescuentoTotal)   / 100);
    const impuesto   = tarifa * (parseFloat(nuevaReserva.ImpuestoTotal)    / 100);
    const total      = tarifa + servicios + impuesto - descuento;

    setNuevaReserva(prev => ({ ...prev, IngresoTotal: total }));
  }, [
    nuevaReserva.IngresoHabitacion,
    nuevaReserva.IngresoServicios,
    nuevaReserva.DescuentoTotal,
    nuevaReserva.ImpuestoTotal
  ]);

  return (
    <div className="reserva-container">
      <div className="reserva-header">
        <h1>Reservas</h1>
        <p className="empleado-info">
          Empleado logueado: <strong>{empleadoKey ?? '—'}</strong>
        </p>
        <div className="reserva-actions">
          <input
            type="text"
            placeholder="Buscar por cliente u hotel..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="busqueda-input"
          />
        <button className="btn-agregar" onClick={() => setMostrarModal(true)}>+ Nueva Reserva</button>
        </div>
    </div>
      <table className="reserva-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Hotel</th>
            <th>Cliente</th>
            <th>Habitación</th>
            <th>Fecha</th>
            <th>Ingreso</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {reservasFiltradas.map((r) => (
            <tr key={r.ReservaKey}>
              <td>{r.ReservaKey}</td>
              <td>{r.Hotel?.Nombre}</td>
              <td>{r.Cliente?.Nombre} {r.Cliente?.Apellido}</td>
              <td>{r.Habitacion?.NumeroHab}</td>
              <td>{r.Fecha?.Fecha}</td>
              <td>{r.IngresoHabitacion}</td>
              <td>{r.IngresoTotal}</td>
              <td>
                <button className="btn-eliminar" onClick={() => eliminarReserva(r.ReservaKey)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* MODAL */}
       {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Agregar Reserva</h2>
            <div className="form-grid">

                {/* Cliente con búsqueda */}
                <div className='form-group'>
                  <ComboBoxBusqueda
                    label="Cliente"
                    opciones={clientes.map(c => ({ key: c.ClienteKey, label: `${c.Nombre} ${c.Apellido}` }))} 
                    valorSeleccionado={clientes.find(c => c.ClienteKey === nuevaReserva.ClienteKey) 
                      ? { 
                          key: nuevaReserva.ClienteKey, 
                          label: `${clientes.find(c => c.ClienteKey === nuevaReserva.ClienteKey).Nombre} ${clientes.find(c => c.ClienteKey === nuevaReserva.ClienteKey).Apellido}` 
                        } 
                      : null}
                    setValorSeleccionado={(op) => setNuevaReserva(prev => ({ ...prev, ClienteKey: op.key }))}
                    onNuevo={() => setMostrarModalClienteNuevo(true)}
                  />
                </div>

                {/* Hotel con búsqueda */}
                <div className="form-group full-width">
                  <ComboBoxBusqueda
                    label="Hotel"
                    opciones={hoteles.map(h => ({ key: h.HotelKey, label: h.Nombre }))}
                    valorSeleccionado={hoteles.find(h => h.HotelKey === nuevaReserva.HotelKey) 
                      ? { 
                          key: nuevaReserva.HotelKey, 
                          label: hoteles.find(h => h.HotelKey === nuevaReserva.HotelKey).Nombre 
                        } 
                      : null}
                    setValorSeleccionado={(op) => setNuevaReserva(prev => ({ ...prev, HotelKey: op.key }))}
                  />
                </div>

                {/* Habitaciones */}
                <div className="form-group">
                  <ComboBoxBusqueda
                    label="Habitación"
                    opciones={habitaciones.map(h => ({
                      key: h.HabitacionKey,
                      label: `${h.NumeroHab} (${h.TipoHab?.Categoria})`
                    }))}
                    valorSeleccionado={
                      habitacionSeleccionada
                        ? {
                            key: habitacionSeleccionada.HabitacionKey,
                            label: `${habitacionSeleccionada.NumeroHab} (${habitacionSeleccionada.TipoHab.Categoria})`
                          }
                        : null
                    }
                    setValorSeleccionado={(op) => {
                      const keyNum = Number(op.key);
                      const selected = habitaciones.find(h => h.HabitacionKey === keyNum);
                      const tarifa = parseFloat(selected?.TipoHab?.TarifaEstandar ?? '0');
                      setNuevaReserva(prev => ({
                        ...prev,
                        HabKey: keyNum,
                        IngresoHabitacion: tarifa
                      }));
                    }}
                  />
                </div>

                {/* FechaKey */}
                <div className="form-group">
                  <FechaSelector
                    value={fechaDim.Fecha}
                    onChange={(dim) => {
                      console.log('Dimensiones recibidas del selector:', dim)
                      setFechaDim(dim)

                      setNuevaReserva(prev => {
                        const updated = { ...prev, FechaKey: dim.FechaKey }
                        console.log('nuevaReserva actualizado con FechaKey:', updated)
                        return updated
                      })
                    }}
                  />
                </div>

                {/* CanalKey */}
                <div className="form-group">
                  <ComboBoxBusqueda
                    label="Canal"
                    opciones={canalesReserva.map(cr => ({ key: cr.CanalKey, label: cr.NombreCanal }))}
                    valorSeleccionado={canalesReserva.find(cr => cr.CanalKey === nuevaReserva.CanalKey) 
                      ? { 
                          key: nuevaReserva.CanalKey, 
                          label: canalesReserva.find(cr => cr.CanalKey === nuevaReserva.CanalKey).NombreCanal
                        } 
                      : null}
                    setValorSeleccionado={(op) => setNuevaReserva(prev => ({ ...prev, CanalKey: op.key }))}
                  />
                </div>

                {/* PagoKey */}
                <div className="form-group">
                  <ComboBoxBusqueda
                    label="Pago"
                    opciones={pagos.map(p => ({ key: p.PagoKey, label: p.Metodo }))}
                    valorSeleccionado={pagos.find(p => p.PagoKey === nuevaReserva.PagoKey) 
                      ? { 
                          key: nuevaReserva.PagoKey, 
                          label: pagos.find(p => p.PagoKey === nuevaReserva.PagoKey).Metodo
                        } 
                      : null}
                    setValorSeleccionado={(op) => setNuevaReserva(prev => ({ ...prev, PagoKey: op.key }))}
                  />
                </div>

                {/* NochesReservadas */}
                <div className="form-group">
                <label>Noches</label>
                <input
                    name="NochesReservadas"
                    value={nuevaReserva.NochesReservadas}
                    onChange={handleInput}
                    type="number"
                />
                </div>

                {/* CantidadHuespedes */}
                <div className="form-group">
                <label>Huéspedes</label>
                <input
                    name="CantidadHuespedes"
                    value={nuevaReserva.CantidadHuespedes}
                    onChange={handleInput}
                    type="number"
                />
                </div>

                {/* IngresoHabitacion */}
                <div className="form-group">
                <label>Ingreso Habitación</label>
                <input
                    name="IngresoHabitacion"
                    value={`Q.${nuevaReserva.IngresoHabitacion.toFixed(2)}`}
                    readOnly
                    type="text"
                />
                </div>

                {/* IngresoServicios */}
                <div className="form-group">
                <label>Ingreso Servicios</label>
                <input
                    name="IngresoServicios"
                    value={`Q.${nuevaReserva.IngresoServicios}`}
                    onChange={handleServiciosChange}
                    type="text"
                />
                </div>

                {/* DescuentoTotal */}
                <div className="form-group">
                <label>Descuento (%)</label>
                <input
                  name="DescuentoTotal"
                  value={nuevaReserva.DescuentoTotal}
                  onChange={handleInput}
                  type="number"
                  min="0"
                  max="100"     
                />
                </div>

                {/* ImpuestoTotal */}
                <div className="form-group">
                <label>Impuesto (%)</label>
                <input
                    name="ImpuestoTotal"
                    value={nuevaReserva.ImpuestoTotal}
                    onChange={handleInput}
                    type="number"
                    min="0"
                    max="100"
                />
                </div>

                {/* Días de anticipación */}
                <div className="form-group">
                <label>Días de anticipación</label>
                <input
                    name="LeadTimeReserva"
                    value={nuevaReserva.LeadTimeReserva}
                    onChange={handleInput}
                    type="number"
                />
                </div>

                {/* IngresoTotal */}
                <div className="form-group">
                <label>Total</label>
                <input
                  name="IngresoTotal"
                  value={`Q. ${nuevaReserva.IngresoTotal.toFixed(2)}`}
                  readOnly
                  type="text"
                />
                </div>
            </div>
            <div className="modal-actions">
              <button className="btn-agregar" onClick={crearReserva}>Guardar</button>
              <button className="btn-cancelar" onClick={() => setMostrarModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {mostrarModalClienteNuevo && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Nuevo Cliente</h2>
            <form className="form-grid" onSubmit={async (e) => {
              e.preventDefault();

              const nuevoCliente = {
                Nombre: e.target.Nombre.value,
                Apellido: e.target.Apellido.value,
                Genero: e.target.Genero.value,
                Nacionalidad: e.target.Nacionalidad.value,
                TipoCliente: e.target.TipoCliente.value
              };

              const res = await fetch(`${apiUrl}/nuevo-cliente`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoCliente)
              });

              if (res.ok) {
                const clienteGuardado = await res.json();
                setClientes([...clientes, clienteGuardado]);
                setNuevaReserva(prev => ({ ...prev, ClienteKey: clienteGuardado.ClienteKey }));
                setMostrarModalClienteNuevo(false);
              }
            }}>
              <div className="form-group"><label>Nombre</label><input name="Nombre" required /></div>
              <div className="form-group"><label>Apellido</label><input name="Apellido" required /></div>
              <div className="form-group"><label>Género</label>
                <select name="Genero" required>
                  <option value="">Seleccione</option>
                  <option value="H">Masculino</option>
                  <option value="M">Femenino</option>
                </select>
              </div>
              <div className="form-group"><label>Nacionalidad</label><input name="Nacionalidad" required /></div>
              <div className="form-group"><label>Tipo Cliente</label>
                <select name="TipoCliente" required>
                  <option value="">Seleccione</option>
                  <option>Regular</option>
                  <option>Corporativo</option>
                  <option>Frecuente</option>
                  <option>VIP</option>
                </select>
              </div>
              <div className="modal-actions">
                <button className="btn-agregar" type="submit">Guardar</button>
                <button className="btn-cancelar" type="button" onClick={() => setMostrarModalClienteNuevo(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
