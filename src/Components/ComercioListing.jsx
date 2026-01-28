import RenderizarTarjetasComercios from './Cards.jsx';
import RenderizarTarjetasProductos from './Cards.jsx';

export default function ComercioListing ({ comercios }) {
    return (
        <>
                <section className="comercios-section">
            <h2 className='sectionHeader'>🏪 Comercios</h2>
            <span id="filter-selected-value"></span>
                <div className="comercios"> 
                    {comercios.map(comercio => (
                <RenderizarTarjetasComercios data={comercio} key={comercio.id} />
                ))}
                </div>

        </section>
        </>
    );
}

