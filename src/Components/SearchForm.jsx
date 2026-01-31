import { useId } from 'react'
import styles from './CssModules/SearchForm.module.css'

export default function SearchForm ({onSearch, onTextChange}) {

const searchInput = useId()
const searchFiltro = useId()

const HandleSumbit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const filtros = {
        distancia: formData.get(searchFiltro)
    }
    onSearch(filtros)
}

const handleTextChange = (event) => {
    const text = event.target.value
    onTextChange(text)
}

    return (
        <>
    <section className={styles.SearchFormSection}>
            <h2>Busca Tus Comercios Favoritos</h2>
        <form className={styles.buscador} onChange={HandleSumbit}>
            <input type="text" id='text' onChange={handleTextChange} name={searchInput} className="search-bar" placeholder="Buscar comercios..."></input>
            
            <select name={searchFiltro} id="filtros">
            <option value="">Distancia</option>
            <option value="1km">1km</option>
            <option value="5km">5km</option>
            <option value="10km">10km</option>
            <option value="20km">20km</option>
            </select>
        </form>
     </section>

        </>
    )
}