import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';



const MySwal = withReactContent(Swal);
const API = 'https://67f5b3f6913986b16fa55762.mockapi.io/api/basebcg/v1/articulos';

export default function App() {
  const [articulos, setArticulos] = useState([]);
  const [form, setForm] = useState({ nombre: '', precio: '', talle: '', stock: '', imagen: '' });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditar, setIdEditar] = useState(null);

  const obtenerArticulos = async () => {
    const res = await axios.get(API);
    setArticulos(res.data);
  };

  useEffect(() => {
    obtenerArticulos();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (modoEdicion) {
      await axios.put(`${API}/${idEditar}`, form);
      toast.success('Artículo actualizado');
    } else {
      await axios.post(API, form);
      toast.success('Artículo creado');
    }
    setForm({ nombre: '', precio: '', talle: '', stock: '', imagen: '' });
    setModoEdicion(false);
    obtenerArticulos();
  };

  const editar = articulo => {
    setForm(articulo);
    setModoEdicion(true);
    setIdEditar(articulo.id);
  };

  const eliminar = id => {
    MySwal.fire({
      title: '¿Está seguro?',
      text: 'No podrá revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async result => {
      if (result.isConfirmed) {
        await axios.delete(`${API}/${id}`);
        toast.error('Artículo eliminado');
        obtenerArticulos();
      }
    });
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-4">Gestión de Artículos</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="input input-bordered" required />
        <input name="precio" value={form.precio} onChange={handleChange} placeholder="Precio" className="input input-bordered" required type="number" />
        <input name="talle" value={form.talle} onChange={handleChange} placeholder="Talle" className="input input-bordered" />
        <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="input input-bordered" type="number" />
        <input name="imagen" value={form.imagen} onChange={handleChange} placeholder="URL Imagen" className="input input-bordered col-span-1 md:col-span-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
          {modoEdicion ? 'Actualizar' : 'Agregar'} Artículo
        </button>
        
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articulos.map(art => (
          <motion.div key={art.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <div>
              <div className="p-4">
                <img src={art.imagen} alt={art.nombre} className="h-48 w-full object-cover mb-2 rounded" />
                <h2 className="font-bold text-lg">{art.nombre}</h2>
                <p>Precio: ${art.precio}</p>
                <p>ID: ${art.id}</p>
                <p>Talle: {art.talle}</p>
                <p>Stock: {art.stock}</p>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => editar(art)} variant="secondary" className="btn btn-primary btn-wide cursor-pointer">Editar</button>
                  <button onClick={() => eliminar(art.id)} variant="destructive" className="btn btn-primary btn-wide cursor-pointer">Eliminar</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
