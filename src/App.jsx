import { useState } from 'react'
import './index.css'
import data from '../data.json'
import productosData from '../productos.json'
import Nav from './Components/Header.jsx'
import Footer from './Components/Footer.jsx' 
import Paginacion from './Components/Paginacion.jsx'
import ComercioListing from './Components/ComercioListing.jsx'
import ProductosListing from './Components/ProductosListing.jsx'
import HeroSection from './Components/HeroSection.jsx'
import SearchForm from './Components/SearchForm.jsx'

const Results_Per_Page = 4;

function App() {
    const [paginaActual, setPaginaActual] = useState(1);
    const [mostrarProductos] = useState(true);
    
    // Lógica para comercios
    const comerciosTotalPaginas = Math.ceil(data.length / Results_Per_Page);
    const comerciosPagedResults = data.slice(
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

    return (
      <>
        <Nav />
        <main>
          <HeroSection />
          <SearchForm />
          <ComercioListing comercios={comerciosPagedResults} />
          <ProductosListing productos={productosPagedResults} />
          <Paginacion paginaActual={paginaActual} totalPaginas={totalPaginas} onPageChange={handlePageChange} />
        </main>
        <Footer />
      </>
    )
}


export default App



