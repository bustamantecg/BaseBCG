import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ArticuloContext = createContext()

export const useArticulos = () => useContext(ArticuloContext)
 
const API ="https://67f5b3f6913986b16fa55762.mockapi.io/api/basebcg/v1/articulos"

export const ArticuloProvider = ({ children }) => {
  const [articulos, setArticulos] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchArticulos = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(API)
      setArticulos(data)
    } catch (error) {
      console.error("Error al hacer el fetch a Artículos", error)
    } finally {
      setLoading(false)
    }
  }

  // aplicando método Pst
  const createArticulo = async (articulo) => {
    const { data } = await axios.post(API, articulo)
    console.log('data -> ', data)
    setArticulos((prev) => [...prev, data])
  }

  // Aplicado un update con metodo put
  const updateArticulo = async (id, updatedData) => {
    const { data } = await axios.put(`${API}/${id}`, updatedData)
    setArticulos((prev) =>
      prev.map((articulo) => (articulo.id === id ? data : articulo))
    )
  }

  // realizando delete
  const deleteArticulo = async (id) => {
    await axios.delete(`${API}/${id}`)
    setArticulos((prev) => prev.filter((articulo) => articulo.id !== id))
  }

  useEffect(() => {
    fetchArticulos()
  }, [])

  return (
    <ArticuloContext.Provider value={{ fetchArticulos, createArticulo, loading, deleteArticulo, updateArticulo }}>
      {children}
    </ArticuloContext.Provider>
  )
}