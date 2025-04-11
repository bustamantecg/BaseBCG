import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/estaticos/About'
import Contacto from './components/estaticos/Contacto'
import Dashboard from './components/estaticos/Dashboard'
import Ubicacion from './components/estaticos/Ubicacion'
import Proximamente from './components/estaticos/Proximamente';
import NuestroCatalogo from './components/estaticos/NuestroCatalogo';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path='ubicacion' element={<Ubicacion />} />
        <Route path='proximamente' element={<Proximamente />} />
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path='nuestrocatalogo' element={<NuestroCatalogo />} />
      </Route>
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App