import RenderizarTarjetasComercios from './Cards.jsx';
import styles from '../Components/CssModules/ComercioListing.module.css'

export default function ComercioListing ({ comercios = [] }) {
    if (comercios.length === 0) return null

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h2 className={styles.title}>Encuentra héroes locales</h2>
                    <p className={styles.subtitle}>Descubre comercios de tu zona comprometidos con reducir el desperdicio.</p>
                </div>
                <div className={styles.viewToggle}>
                    <button className={styles.iconButton} type="button" aria-label="Vista de grilla">
                        <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-grid"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg></span>
                    </button>
                    <button className={styles.iconButton} type="button" aria-label="Vista de lista">
                        <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg></span>
                    </button>
                </div>
            </div>

            <div className={styles.filters}>
                <button className={styles.filterActive} type="button">Todas las tiendas</button>
                <button className={styles.filterButton} type="button">
                    <span className={`material-symbols-outlined ${styles.filterIcon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg></span>
                    Supermercado
                </button>
                <button className={styles.filterButton} type="button">
                    <span className={`material-symbols-outlined ${styles.filterIcon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cooker"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7h.01" /><path d="M15 7h.01" /><path d="M9 7h.01" /><path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" /><path d="M9 15h6" /><path d="M5 11h14" /></svg></span>
                    Panadería
                </button>
                <button className={styles.filterButton} type="button">
                    <span className={`material-symbols-outlined ${styles.filterIcon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plant-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 9a10 10 0 1 0 20 0" /><path d="M12 19a10 10 0 0 1 10 -10" /><path d="M2 9a10 10 0 0 1 10 10" /><path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" /><path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" /></svg></span>
                    Belleza
                </button>
                <button className={styles.filterButton} type="button">
                    <span className={`material-symbols-outlined ${styles.filterIcon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg></span>
                    Hogar
                </button>
                <div className={styles.divider}></div>
                <button className={styles.filterButton} type="button">
                    <span className={`material-symbols-outlined ${styles.filterIcon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-tune"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M10 12l4 0" /><circle cx="7" cy="6" r="2" /><circle cx="17" cy="12" r="2" /><path d="M5 18l14 0" /><circle cx="19" cy="18" r="2" /></svg></span>
                    Filtros
                </button>
            </div>

            <div className={styles.layout}>
                <div className={styles.grid}>
                    {comercios.map((comercio, index) => (
                        <RenderizarTarjetasComercios data={comercio} key={`${comercio?.id}-${index}`} />
                    ))}
                </div>

                <div className={styles.mapColumn}>
                    <div className={styles.mapCard}>
                        <div className={styles.mapGridOverlay}></div>
                        <div className={styles.mapPinTop}>
                            <div className={styles.mapPinTooltip}>La Despensa a Granel</div>
                            <span className={`material-symbols-outlined ${styles.mapPin}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" /></svg></span>
                        </div>
                        <div className={styles.mapPinRight}>
                            <span className={`material-symbols-outlined ${styles.mapPin}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" /></svg></span>
                        </div>
                        <div className={styles.mapPinBottom}>
                            <span className={`material-symbols-outlined ${styles.mapPin}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" /></svg></span>
                        </div>

                        <div className={styles.mapControls}>
                            <button className={styles.mapControlButton} type="button" aria-label="Acercar">
                                <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></span>
                            </button>
                            <button className={styles.mapControlButton} type="button" aria-label="Alejar">
                                <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="5" y1="12" x2="19" y2="12" /></svg></span>
                            </button>
                        </div>

                        <div className={styles.mapLocationButton}>
                            <button className={styles.locationButton} type="button">
                                <span className={`material-symbols-outlined ${styles.locationIcon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-current-location"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" /><path d="M12 2l0 2" /><path d="M12 20l0 2" /><path d="M20 12l2 0" /><path d="M2 12l2 0" /></svg></span>
                                Usar mi ubicación
                            </button>
                        </div>

                        <img
                            className={styles.mapImage}
                            alt="Mapa estilizado de la ciudad con pines"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7Xj7eE0Y5W-_4n06S5AFCmi5J5oiWhwa3aMVzOhTpV2aCf48HKTI2AgLAzDLcU09HSa-W9sxsXuVwLjH6zYoZgzHrrB1lmMkBOT3ZO690Px6_hUsnrqWUCvox5I5k5iL5fbHwXTvYExai6Nr1q8yPOPzaRrSkNP9YwP71RJRgfbMbpwTv8yBQsrHJOa2-fGln39YcA-R045bbb9WDze1hrs0FdL9rioAnBllqfoXBZDl78O2vVHGYTjZLl18n-d_gmUvpVCRekNV"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

