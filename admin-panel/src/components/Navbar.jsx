import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/clientes',  label: 'Clientes',   icon: 'bi-people-fill' },
  { to: '/proveedor', label: 'Proveedor',  icon: 'bi-truck'       },
  { to: '/usuarios',  label: 'Usuarios',   icon: 'bi-person-badge'},
]

const pageTitles = {
  '/clientes':  'Clientes',
  '/proveedor': 'Proveedor',
  '/usuarios':  'Usuarios',
  '/logout':    'Cerrar Sesión',
}

export default function Navbar() {
  const location = useLocation()
  const currentTitle = pageTitles[location.pathname] || 'Panel Administrativo'

  return (
    <>
      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <NavLink to="/clientes" className="sidebar-brand">
          <div className="brand-icon">
            <i className="bi bi-shield-fill-check"></i>
          </div>
          <div className="brand-text">
            <span className="brand-name">AdminPanel</span>
            <span className="brand-sub">Sistema de gestión</span>
          </div>
        </NavLink>

        <ul className="sidebar-nav">
          <li>
            <span className="nav-section-label">Gestión</span>
          </li>
          {navItems.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                <i className={`bi ${icon}`}></i>
                <span>{label}</span>
              </NavLink>
            </li>
          ))}

          <li>
            <span className="nav-section-label">Cuenta</span>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <i className="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>

        <div className="sidebar-footer">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 20px',
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: '#1e40af', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 13, fontWeight: 600, flexShrink: 0,
            }}>AD</div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', whiteSpace: 'nowrap' }}>
                Administrador
              </div>
              <div style={{ fontSize: 11, color: '#475569', whiteSpace: 'nowrap' }}>
                admin@empresa.com
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── TOP BAR ── */}
      <header className="topbar">
        <div className="topbar-left">
          <i className="bi bi-grid-3x3-gap" style={{ fontSize: 20, color: '#94a3b8' }}></i>
          <span className="topbar-title">{currentTitle}</span>
        </div>
        <div className="topbar-right">
          <button className="btn-icon">
            <i className="bi bi-bell"></i>
          </button>
          <button className="btn-icon">
            <i className="bi bi-gear"></i>
          </button>
          <div className="topbar-avatar">AD</div>
        </div>
      </header>
    </>
  )
}
