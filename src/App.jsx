import Nav from './Components/Header.jsx'
import Footer from './Components/Footer.jsx' 
import Inicio from './Pages/Inicio.jsx'
import Perfil from './Pages/Perfil.jsx'
import NotFound from './Components/404.jsx'

function App() {
  const currentPath = window.location.pathname
  let page = <NotFound />
  if (currentPath === '/'){
    page = <Inicio />
  } else if (currentPath === '/Perfil') {
    page = <Perfil />
  }

    return (
      <>
        <Nav />
        {page}
        <Footer />
      </>
    )
}


export default App



