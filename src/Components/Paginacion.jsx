import styles from './CssModules/Paginacion.module.css';
export default function Paginacion ({ paginaActual, totalPaginas, onPageChange }) {   
    const pages = Array.from ({length: totalPaginas}, (_, i) => i + 1);

    const isFirstPage = paginaActual === 1;
    const isLastPage = paginaActual === totalPaginas;

    const styleFirstPage = isFirstPage ? {pointerEvents: 'none', opacity: '0.5'} : {};
    const styleLastPage = isLastPage ? {pointerEvents: 'none', opacity: '0.5'} : {};

    const handlePrevClick = (event) => {
        event.preventDefault();
        if (!isFirstPage) {
            onPageChange(paginaActual - 1);
        }
    }

    const handleNextClick = (event) => {
        event.preventDefault();
        if (!isLastPage) {
            onPageChange(paginaActual + 1);
        }
    }

    const handlePageClick = (event, page) => {
        event.preventDefault();
        if (page === paginaActual) return;
        onPageChange(page);
    }


    return(
        <>
        <nav className={styles.paginacion}>
            <a id="retroceder-pagina" onClick={handlePrevClick} style={styleFirstPage}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg></a>
            {pages.map(page => (
                <a key={page} className={page === paginaActual ? styles.activo : ''} href="#" onClick={(event) => handlePageClick(event, page)}>{page}</a>
            ))}
            <a id="pasar-pagina" onClick={handleNextClick} style={styleLastPage}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></a>
        </nav>
        </>
    );
}