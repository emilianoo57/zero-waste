import styles from './CssModules/Header.module.css'

function Nav () {
    return(
        <>
          <header className={styles.header}>
        <h2><a href='/'>SavFood</a></h2>
        <menu>
            <a><img src="https://www.svgrepo.com/show/525737/cart-large-2.svg" className={styles.svg} /></a>
            <a href='/Perfil'>Perfil</a>
            <a href='/MiImpacto'>Mi impacto</a>
        </menu>
    </header>
    </>
    );
}

export default Nav;