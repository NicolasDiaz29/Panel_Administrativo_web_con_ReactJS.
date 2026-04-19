import { useState } from 'react'

const proveedoresData = [
  { id: 1, nombre: 'Suministros TechPro',    categoria: 'Tecnología',     contacto: 'Ricardo Gómez',   email: 'rgomez@techpro.com',  monto: '$12.500.000', estado: 'Activo',   color: '#6366f1' },
  { id: 2, nombre: 'Distribuidora Norte',    categoria: 'Logística',      contacto: 'Sandra Torres',   email: 'storres@norte.com',   monto: '$8.200.000',  estado: 'Activo',   color: '#f59e0b' },
  { id: 3, nombre: 'Papelería & Oficina S.A',categoria: 'Papelería',      contacto: 'Miguel Vargas',   email: 'mvargas@papo.com',    monto: '$3.100.000',  estado: 'Activo',   color: '#10b981' },
  { id: 4, nombre: 'Materiales Construmax',  categoria: 'Construcción',   contacto: 'Claudia Niño',    email: 'cnino@construmax.co', monto: '$27.000.000', estado: 'Inactivo', color: '#ef4444' },
  { id: 5, nombre: 'Global Imports Ltda.',   categoria: 'Importaciones',  contacto: 'Felipe Castro',   email: 'fcastro@global.com',  monto: '$19.400.000', estado: 'Pendiente',color: '#8b5cf6' },
]

const initials = (name) => name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase()

export default function Proveedor() {
  const [search, setSearch] = useState('')

  const filtered = proveedoresData.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase()) ||
    p.categoria.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page-content">
      <div className="page-header">
        <h1><i className="bi bi-truck me-2" style={{ color: '#f59e0b' }}></i>Proveedor</h1>
        <p>Administra los proveedores y sus contratos activos.</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#ede9fe' }}>
            <i className="bi bi-truck" style={{ color: '#7c3aed' }}></i>
          </div>
          <div className="stat-info">
            <h3>5</h3>
            <p>Total proveedores</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>
            <i className="bi bi-check-circle-fill" style={{ color: '#16a34a' }}></i>
          </div>
          <div className="stat-info">
            <h3>3</h3>
            <p>Activos</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fef3c7' }}>
            <i className="bi bi-cash-stack" style={{ color: '#d97706' }}></i>
          </div>
          <div className="stat-info">
            <h3>$70.2M</h3>
            <p>Valor contratos</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dbeafe' }}>
            <i className="bi bi-grid-fill" style={{ color: '#2563eb' }}></i>
          </div>
          <div className="stat-info">
            <h3>5</h3>
            <p>Categorías</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-card">
        <div className="table-card-header">
          <h5>Lista de Proveedores</h5>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              className="search-bar"
              placeholder="🔍  Buscar proveedor..."
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
                <th>Proveedor</th>
                <th>Categoría</th>
                <th>Contacto</th>
                <th>Email</th>
                <th>Monto Contrato</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div className="table-avatar" style={{ background: p.color }}>
                        {initials(p.nombre)}
                      </div>
                      <span style={{ fontWeight: 500 }}>{p.nombre}</span>
                    </div>
                  </td>
                  <td>
                    <span style={{
                      background: '#f1f5f9', color: '#475569',
                      padding: '3px 10px', borderRadius: 20, fontSize: 12, fontWeight: 500
                    }}>{p.categoria}</span>
                  </td>
                  <td>{p.contacto}</td>
                  <td style={{ color: '#3b82f6' }}>{p.email}</td>
                  <td style={{ fontWeight: 600 }}>{p.monto}</td>
                  <td>
                    <span className={`badge-status ${
                      p.estado === 'Activo' ? 'badge-active' :
                      p.estado === 'Inactivo' ? 'badge-inactive' : 'badge-pending'
                    }`}>
                      {p.estado}
                    </span>
                  </td>
                  <td>
                    <button className="btn-icon me-1"><i className="bi bi-pencil"></i></button>
                    <button className="btn-icon"><i className="bi bi-trash"></i></button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="text-center py-4 text-muted">Sin resultados.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
