import styles from './CssModules/ComercioForm.module.css';
export default function ComerciosForm (){
    return (
        <>
        <section className={styles.comerciosFormSection}>
            <h2>CONVIERTE TUS DESPERDICIOS EN BENEFICIOS</h2>
            <form action="sumbit">
                <input type="text" placeholder="Tu Email de Empresa"/>
                <button>Unirse como socio</button>
                </form>
        </section>
        </>
    )
}