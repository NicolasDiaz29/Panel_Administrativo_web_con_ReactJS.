import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()

  return (
    <div className="page-content logout-wrapper">
      <div className="logout-card">
        <div className="logout-icon">
          <i className="bi bi-box-arrow-right"></i>
        </div>
        <h2>¿Cerrar sesión?</h2>
        <p>
          Estás a punto de salir del panel administrativo. Tu sesión se cerrará
          y tendrás que iniciar sesión nuevamente para acceder.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button
            className="btn btn-outline-secondary"
            style={{ borderRadius: 8, fontFamily: 'inherit', fontWeight: 500 }}
            onClick={() => navigate('/clientes')}
          >
            <i className="bi bi-arrow-left me-2"></i>Cancelar
          </button>
          <button
            className="btn btn-danger"
            style={{ borderRadius: 8, fontFamily: 'inherit', fontWeight: 500 }}
            onClick={() => alert('Sesión cerrada. (Demo - redirige al login)')}
          >
            <i className="bi bi-box-arrow-right me-2"></i>Sí, cerrar sesión
          </button>
        </div>
        <div style={{
          marginTop: 24, padding: '12px 16px',
          background: '#f8fafc', borderRadius: 8,
          fontSize: 13, color: '#64748b', border: '1px solid #e2e8f0'
        }}>
          <i className="bi bi-info-circle me-2" style={{ color: '#3b82f6' }}></i>
          Sesión activa: <strong>Administrador</strong> — admin@empresa.com
        </div>
      </div>
    </div>
  )
}
