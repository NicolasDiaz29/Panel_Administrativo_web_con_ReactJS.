import { useState } from 'react'

const clientesData = [
  { id: 1,  nombre: 'Empresa Alfa S.A.',       contacto: 'María López',    email: 'mlopez@alfa.com',      telefono: '300-111-2233', estado: 'Activo',   color: '#3b82f6' },
  { id: 2,  nombre: 'Comercial Beta Ltda.',     contacto: 'Juan Pérez',     email: 'jperez@beta.com',      telefono: '311-444-5566', estado: 'Activo',   color: '#8b5cf6' },
  { id: 3,  nombre: 'Distribuciones Gamma',     contacto: 'Carlos Ruiz',    email: 'cruiz@gamma.co',       telefono: '320-777-8899', estado: 'Inactivo', color: '#ec4899' },
  { id: 4,  nombre: 'Inversiones Delta Corp.',  contacto: 'Ana Martínez',   email: 'amartinez@delta.co',   telefono: '315-222-3344', estado: 'Activo',   color: '#f59e0b' },
  { id: 5,  nombre: 'Tecnologías Épsilon',      contacto: 'Luis Hernández', email: 'lhernandez@epsilon.co',telefono: '322-555-6677', estado: 'Pendiente',color: '#10b981' },
  { id: 6,  nombre: 'Soluciones Zeta S.A.S.',  contacto: 'Patricia Mora',  email: 'pmora@zeta.com',       telefono: '316-888-9900', estado: 'Activo',   color: '#ef4444' },
]

const initials = (name) => name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase()

export default function Clientes() {
  const [search, setSearch] = useState('')

  const filtered = clientesData.filter(c =>
    c.nombre.toLowerCase().includes(search.toLowerCase()) ||
    c.contacto.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page-content">
      <div className="page-header">
        <h1><i className="bi bi-people-fill me-2" style={{ color: '#3b82f6' }}></i>Clientes</h1>
        <p>Gestión y seguimiento de clientes registrados en el sistema.</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dbeafe' }}>
            <i className="bi bi-people-fill" style={{ color: '#3b82f6' }}></i>
          </div>
          <div className="stat-info">
            <h3>6</h3>
            <p>Total clientes</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>
            <i className="bi bi-check-circle-fill" style={{ color: '#16a34a' }}></i>
          </div>
          <div className="stat-info">
            <h3>4</h3>
            <p>Activos</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fee2e2' }}>
            <i className="bi bi-x-circle-fill" style={{ color: '#dc2626' }}></i>
          </div>
          <div className="stat-info">
            <h3>1</h3>
            <p>Inactivos</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fef3c7' }}>
            <i className="bi bi-clock-fill" style={{ color: '#d97706' }}></i>
          </div>
          <div className="stat-info">
            <h3>1</h3>
            <p>Pendientes</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-card">
        <div className="table-card-header">
          <h5>Lista de Clientes</h5>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              className="search-bar"
              placeholder="🔍  Buscar cliente..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="btn-primary-custom">
              <i className="bi bi-plus-lg"></i> Nuevo
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Contacto</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div className="table-avatar" style={{ background: c.color }}>
                        {initials(c.nombre)}
                      </div>
                      <span style={{ fontWeight: 500 }}>{c.nombre}</span>
                    </div>
                  </td>
                  <td>{c.contacto}</td>
                  <td style={{ color: '#3b82f6' }}>{c.email}</td>
                  <td>{c.telefono}</td>
                  <td>
                    <span className={`badge-status ${
                      c.estado === 'Activo' ? 'badge-active' :
                      c.estado === 'Inactivo' ? 'badge-inactive' : 'badge-pending'
                    }`}>
                      {c.estado}
                    </span>
                  </td>
                  <td>
                    <button className="btn-icon me-1"><i className="bi bi-pencil"></i></button>
                    <button className="btn-icon"><i className="bi bi-trash"></i></button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="text-center py-4 text-muted">Sin resultados.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
