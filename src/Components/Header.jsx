import styles from './Header.module.css'

function Nav () {
    return(
        <>
          <header className={styles.header}>
        <h2>SavFood</h2>
        <menu>
            <button><img src="https://www.svgrepo.com/show/525737/cart-large-2.svg" className="svg" /></button>
            <button>Mi impacto</button>
            <button>perfil</button>
        </menu>
    </header>
    </>
    );
}

export default Nav;