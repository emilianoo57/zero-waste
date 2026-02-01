import { useEffect, useState } from 'react'

const Results_Per_Page = 3;

export default function useInicio() {
  const [paginaActual, setPaginaActual] = useState(1)
  const [mostrarProductos, setMostrarProductos] = useState(true)
  const [text, setText] = useState('')
  const [filtros, setFiltros] = useState({ distancia: '' })
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetching() {
      try {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProductos(data)
      } catch (error) {
        console.error('error en el fetching', error)
      } finally {
        setLoading(false)
      }
    }
    fetching()
  }, [])

  const lowerText = text.toLowerCase()

  const productosFiltrados = text === ''
    ? productos
    : productos.filter(p => ((p.title || '')).toLowerCase().includes(lowerText))

  // Paginación productos (usando el state de productos traídos)
  const productosTotalPaginas = Math.ceil(productosFiltrados.length / Results_Per_Page)
  const productosPagedResults = productosFiltrados.slice(
    (paginaActual - 1) * Results_Per_Page,
    paginaActual * Results_Per_Page
  )

  // total segun sección
  const totalPaginas = mostrarProductos ? productosTotalPaginas : 0

  const handlePageChange = (newPage) => {
    setPaginaActual(newPage)
  }

  const handleSearch = (newFiltros) => {
    setFiltros(newFiltros)
    setPaginaActual(1)
  }

  const handleText = (newText) => {
    setText(newText)
    setPaginaActual(1)
  }

  // Actualizar título (opcional)
  useEffect(() => {
    document.title = `resultados: ${productosFiltrados.length}, pagina: ${paginaActual}`
  }, [productosFiltrados, paginaActual])

  return {
    paginaActual,
    mostrarProductos,
    setMostrarProductos,
    totalPaginas,
    handlePageChange,
    handleSearch,
    handleText,
    productosPagedResults,
    loading,
  }
}
