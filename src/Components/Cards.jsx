import { useState } from 'react';
import styles from '../Components/CssModules/Cards.module.css'

export default function RenderizarTarjetasComercios({data}) {

const [isApplied, setIsApplied] = useState(false);
const [cartCount, setCartCount] = useState(0)


     const HandleApplyClick = () => {
         setIsApplied(true);
         setCartCount(cartCount + 1);
     }

const buttonText = isApplied ? 'Aplicado' : 'Ver productos';

return(
    <article data-distancia={data.distancia} className={styles.card}>
        <div className={styles.imageWrap}>
            <img src={data.imagen} className={styles.image} alt={data.nombre} />
            <div className={styles.ratingBadge}>
                <span className={`material-symbols-outlined ${styles.ratingIcon}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg></span>
                {data.puntuacion ?? '4.9'}
            </div>
            <button className={styles.favoriteButton} type="button" aria-label="Marcar como favorito">
                <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></span>
            </button>
        </div>
        <div className={styles.body}>
            <div className={styles.header}>
                <h3 className={styles.name}>{data.nombre}</h3>
                <span className={styles.distance}>{data.distancia}</span>
            </div>
            <p className={styles.description}>{data.descripcion}</p>
            <div className={styles.footer}>
                <div className={styles.ratingDots}>
                    <span className={styles.dotActive}></span>
                    <span className={styles.dotActive}></span>
                    <span className={styles.dotActive}></span>
                    <span className={styles.dotActive}></span>
                    <span className={styles.dotInactive}></span>
                </div>
                <button className={styles.actionButton} onClick={HandleApplyClick}>{buttonText}</button>
            </div>
        </div>
    </article>
    );
     
}



function RenderizarTarjetasProductos({productos}) {

    const [isApplied, setIsApplied] = useState(false);

     function HandleApplyClick() {
         setIsApplied(true);
     }
     const buttonClass = isApplied ? 'boton-card applied' : 'boton-card';
     const buttonText = isApplied ? 'Agregado' : 'Agregar';

    return(
    <>

        <article className="producto">
                            <img src={productos.image} className="img-card" />
                            <h5>{productos.title}</h5>
                            <p className="precio">${productos.price}</p>
                            <p className="descripcion"><small>{productos.description}</small></p>
                            <button className={buttonClass} onClick={HandleApplyClick}>{buttonText}</button>
                    </article>

    </>
    )
}

export { RenderizarTarjetasProductos };