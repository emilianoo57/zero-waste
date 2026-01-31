import { useEffect, useState } from 'react'
import '../index.css'
import data from '../../data.json'
import productosData from '../../productos.json'
import Paginacion from '../Components/Paginacion.jsx'
import ComercioListing from '../Components/ComercioListing.jsx'
import ProductosListing from '../Components/ProductosListing.jsx'
import HeroSection from '../Components/HeroSection.jsx'
import SearchForm from '../Components/SearchForm.jsx'

const Results_Per_Page = 3;

export default function Inicio() {
    const [paginaActual, setPaginaActual] = useState(1);
    const [mostrarProductos] = useState(true);
    const [text, setText] = useState('')
    const [filtros, setFiltros] = useState({distancia: ''})

  const cardsFiltradasPorFiltros = data.filter(data =>{
    return(
      (filtros.distancia === '' || data.distancia.toLowerCase() === filtros.distancia.toLowerCase())
    )
  })

  const cardsFiltradas = text ===  '' ? cardsFiltradasPorFiltros
  : cardsFiltradasPorFiltros.filter(data => {
    return data.nombre.toLowerCase().includes(text.toLowerCase())
  })
  

    // Lógica para comercios
    const comerciosTotalPaginas = Math.ceil(data.length / Results_Per_Page);
    const comerciosPagedResults = cardsFiltradas.slice(
      (paginaActual - 1) * Results_Per_Page,
      paginaActual * Results_Per_Page
    );

    // Lógica para productos
    const productosTotalPaginas = Math.ceil(productosData.length / Results_Per_Page);
    const productosPagedResults = productosData.slice(
      (paginaActual - 1) * Results_Per_Page,
      paginaActual * Results_Per_Page
    );

    // Determinar total de páginas según la sección activa
    const totalPaginas = mostrarProductos ? productosTotalPaginas : comerciosTotalPaginas;

    const handlePageChange = (newPage) => { 
      setPaginaActual(newPage);   
    }

    const handleSearch = (filtros) => {
      setFiltros(filtros)
      setPaginaActual(1)
    }

    const handleText = (newText) => {
      setText(newText)
      setPaginaActual(1)
    }

    useEffect(() => {
        document.title = `resultados: ${cardsFiltradas.length}, pagina: ${paginaActual}`
    }, [cardsFiltradas, paginaActual])

    return (
        <main>
          <HeroSection />
          <SearchForm onSearch={handleSearch} onTextChange={handleText} />
          <ComercioListing comercios={comerciosPagedResults} />
          <ProductosListing productos={productosPagedResults} />
          <Paginacion paginaActual={paginaActual} totalPaginas={totalPaginas} onPageChange={handlePageChange} />
        </main>
    )
}




