import { useId } from 'react'
import styles from './SearchForm.module.css'

export default function SearchForm () {

const searchInput = useId()
const searchFiltro = useId()

const HandleSumbit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const filtros = {
        search: formData.get(searchInput),
        distancia: formData.get(searchFiltro)
    }
    console.log(filtros)
}
    return (
        <>
    <section className={styles.SearchFormSection}>
            <h2>Busca Tus Comercios Favoritos</h2>
        <form className={styles.buscador} onSubmit={HandleSumbit}>
            <input type="text" id='text' name={searchInput} className="search-bar" placeholder="Buscar comercios..."></input>

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