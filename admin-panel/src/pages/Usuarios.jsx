import { useState } from 'react'

const usuariosData = [
  { id: 1, nombre: 'Andrés Díaz',      email: 'adiaz@empresa.com',     rol: 'Administrador', area: 'Sistemas',    ultimo: 'Hoy 09:15',    estado: 'Activo',   color: '#3b82f6' },
  { id: 2, nombre: 'Laura Suárez',     email: 'lsuarez@empresa.com',   rol: 'Supervisor',    area: 'Ventas',      ultimo: 'Hoy 08:47',    estado: 'Activo',   color: '#10b981' },
  { id: 3, nombre: 'Jorge Medina',     email: 'jmedina@empresa.com',   rol: 'Operador',      area: 'Logística',   ultimo: 'Ayer 16:20',   estado: 'Activo',   color: '#f59e0b' },
  { id: 4, nombre: 'Valentina Ríos',   email: 'vrios@empresa.com',     rol: 'Analista',      area: 'Finanzas',    ultimo: 'Ayer 11:05',   estado: 'Activo',   color: '#8b5cf6' },
  { id: 5, nombre: 'Camilo Quintero',  email: 'cquintero@empresa.com', rol: 'Operador',      area: 'Soporte',     ultimo: '15/04/2025',   estado: 'Inactivo', color: '#64748b' },
  { id: 6, nombre: 'Natalia Pardo',    email: 'npardo@empresa.com',    rol: 'Supervisor',    area: 'RRHH',        ultimo: 'Hoy 10:30',    estado: 'Activo',   color: '#ec4899' },
  { id: 7, nombre: 'Sebastián Mora',   email: 'smora@empresa.com',     rol: 'Analista',      area: 'Marketing',   ultimo: '10/04/2025',   estado: 'Pendiente',color: '#6366f1' },
]

const rolColors = {
  Administrador: { bg: '#dbeafe', color: '#1d4ed8' },
  Supervisor:    { bg: '#dcfce7', color: '#15803d' },
  Operador:      { bg: '#f1f5f9', color: '#475569' },
  Analista:      { bg: '#fef3c7', color: '#b45309' },
}

const initials = (name) => name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase()

export default function Usuarios() {
  const [search, setSearch] = useState('')

  const filtered = usuariosData.filter(u =>
    u.nombre.toLowerCase().includes(search.toLowerCase()) ||
    u.rol.toLowerCase().includes(search.toLowerCase()) ||
    u.area.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page-content">
      <div className="page-header">
        <h1><i className="bi bi-person-badge me-2" style={{ color: '#8b5cf6' }}></i>Usuarios</h1>
        <p>Control de acceso y gestión de usuarios del sistema.</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#ede9fe' }}>
            <i className="bi bi-person-badge" style={{ color: '#7c3aed' }}></i>
          </div>
          <div className="stat-info">
            <h3>7</h3>
            <p>Total usuarios</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dbeafe' }}>
            <i className="bi bi-shield-fill-check" style={{ color: '#1d4ed8' }}></i>
          </div>
          <div className="stat-info">
            <h3>1</h3>
            <p>Administradores</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>
            <i className="bi bi-person-check-fill" style={{ color: '#16a34a' }}></i>
          </div>
          <div className="stat-info">
            <h3>5</h3>
            <p>Activos hoy</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fee2e2' }}>
            <i className="bi bi-person-x-fill" style={{ color: '#dc2626' }}></i>
          </div>
          <div className="stat-info">
            <h3>1</h3>
            <p>Inactivos</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-card">
        <div className="table-card-header">
          <h5>Lista de Usuarios</h5>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              className="search-bar"
              placeholder="🔍  Buscar usuario..."
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
                <th>Usuario</th>
                <th>Rol</th>
                <th>Área</th>
                <th>Último acceso</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div className="table-avatar" style={{ background: u.color }}>
                        {initials(u.nombre)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{u.nombre}</div>
                        <div style={{ fontSize: 12, color: '#64748b' }}>{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span style={{
                      background: rolColors[u.rol]?.bg ?? '#f1f5f9',
                      color: rolColors[u.rol]?.color ?? '#475569',
                      padding: '3px 10px', borderRadius: 20, fontSize: 12, fontWeight: 500
                    }}>{u.rol}</span>
                  </td>
                  <td>{u.area}</td>
                  <td style={{ color: '#64748b', fontSize: 13 }}>{u.ultimo}</td>
                  <td>
                    <span className={`badge-status ${
                      u.estado === 'Activo' ? 'badge-active' :
                      u.estado === 'Inactivo' ? 'badge-inactive' : 'badge-pending'
                    }`}>
                      {u.estado}
                    </span>
                  </td>
                  <td>
                    <button className="btn-icon me-1"><i className="bi bi-pencil"></i></button>
                    <button className="btn-icon me-1"><i className="bi bi-key"></i></button>
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
