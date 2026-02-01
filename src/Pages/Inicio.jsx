import '../index.css'
import Paginacion from '../Components/Paginacion.jsx'
import ProductosListing from '../Components/ProductosListing.jsx'
import HeroSection from '../Components/HeroSection.jsx'
import SearchForm from '../Components/SearchForm.jsx'
import useInicio from '../Hooks/useInicio.jsx'

export default function Inicio() {
  const {
    paginaActual,
    totalPaginas,
    handlePageChange,
    handleSearch,
    handleText,
    productosPagedResults,
    loading,
  } = useInicio()

  return (
    <main>
      <HeroSection />
      <SearchForm onSearch={handleSearch} onTextChange={handleText} />

      {loading ? (
        <p style={{ padding: '2rem', textAlign: 'center' }}>Cargando productos...</p>
      ) : (
        <>
          <ProductosListing productos={productosPagedResults} />
          <Paginacion paginaActual={paginaActual} totalPaginas={totalPaginas} onPageChange={handlePageChange} />
        </>
      )}
    </main>
  )
}




