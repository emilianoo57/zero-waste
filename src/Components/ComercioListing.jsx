import RenderizarTarjetasComercios from './Cards.jsx';
import RenderizarTarjetasProductos from './Cards.jsx';

export default function ComercioListing ({ comercios }) {

    if (comercios.length === 0) return null
    
    return (
        <>
                <section className="comercios-section">
            <h2 className='sectionHeader'>🏪 Heroes en Savfood</h2>
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

