import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Contacto from './components/Contacto'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<p>👤 Usuarios</p>} />
          <Route path="settings" element={<p>⚙️ Configuración</p>} />
        </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App