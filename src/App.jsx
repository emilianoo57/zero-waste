import Nav from './Components/Header.jsx'
import Footer from './Components/Footer.jsx' 
import Inicio from './Pages/Inicio.jsx'
import Perfil from './Pages/Perfil.jsx'
import Nosotros from './Pages/Nosotros.jsx'
import Route from './Components/Route.jsx'
import ComerciosAfiliados from './Pages/Comercios.jsx'

function App() {

    return (
      <>
        <Nav />
        <Route path= "/" component={Inicio}/>
        <Route path= "/Perfil" component={Perfil}/>
        <Route path= "/Nosotros" component={Nosotros} />
        <Route path= "/Comercios" component={ComerciosAfiliados} />
        <Footer />
      </>
    )
}


export default App



