import styles from './CssModules/Header.module.css'
import { useState } from 'react'
import Link from './link'

function Nav () {
    const [cartCount, setCartCount] = useState(2)

    const HandleAgregarCarrito = () => {
        setCartCount(cartCount +  1)
    }

    return(
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logoSection}>
                    <Link href='/' className={styles.logo}>
                        <span className="material-symbols-outlined" style={{fontSize: '1.875rem', color: '#26d962'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-leaf"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21c.5 -4.5 2.5 -8 7 -10" /><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3l.014 0" /></svg>
                        </span>
                        <h1 className={styles.logoText}>SavFood</h1>
                    </Link>
                    <nav className={styles.nav}>
                        <a href='#' className={styles.navLink}>Colecciones</a>
                        <a href='#' className={styles.navLink}>Impacto</a>
                        <a href='#' className={styles.navLink}>Sobre Nosotros</a>
                    </nav>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.actionsContainer}>
                        <button className={styles.iconButton}>
                            <span className="material-symbols-outlined" onClick={HandleAgregarCarrito}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                            </span>
                            <span className={styles.cartBadge}>{cartCount}</span>
                        </button>
                        <Link href='/Perfil'>
                            <button className={styles.iconButton}>
                                <span className="material-symbols-outlined">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav;