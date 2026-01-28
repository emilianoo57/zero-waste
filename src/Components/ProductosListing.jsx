import { RenderizarTarjetasProductos } from './Cards.jsx';

export default function ProductosListing({productos}) {
   return (
        <>
        <section className="productos-section">
            <h2 className='sectionHeader'>🛒 Productos Destacados</h2>
                <div className="productos">
                    {productos.map(producto => (
                <RenderizarTarjetasProductos productos={producto} key={producto.id} />
                ))}
                </div>
        </section>
        </>
    );
}