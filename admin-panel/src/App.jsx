import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Clientes from './pages/Clientes'
import Proveedor from './pages/Proveedor'
import Usuarios from './pages/Usuarios'
import Logout from './pages/Logout'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/clientes" replace />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/proveedor" element={<Proveedor />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
