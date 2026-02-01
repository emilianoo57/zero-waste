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
            <h2>Busca Tus Productos Favoritos</h2>
        <form className={styles.buscador} onChange={HandleSumbit}>
            <input type="text" id='text' onChange={handleTextChange} name={searchInput} className="search-bar" placeholder="Buscar comercios..."></input>
            
            <select name={searchFiltro} id="filtros">
            <option value="">Categoria</option>
            <option value="jewelery">joyeria</option>
            <option value="electronics">electronicos</option>
            <option value="women's clothing">ropa de mujer</option>
            <option value="men's clothing">ropa de hombre</option>
            </select>
        </form>
     </section>

        </>
    )
}