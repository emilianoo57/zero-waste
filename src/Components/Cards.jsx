
import { useState } from 'react';

 export default function RenderizarTarjetasComercios({data}) {
const [isApplied, setIsApplied] = useState(false);

     const HandleApplyClick = () => {
         setIsApplied(true);
     }

const buttonClass = isApplied ? 'boton-card applied' : 'boton-card';
const buttonText = isApplied ? 'Aplicado' : 'Ver Ofertas';
return(
    <>
            <article data-distancia={data.distancia} key={data.id} className="comercio-item">
                <div className="comercio-card">
                    <img src={data.imagen} className="img-card" />
                    <h4>{data.nombre}</h4>
                    <span className="badge-distancia">{data.distancia}</span>
                    <div className="puntuacion">{data.puntuacion}</div>
                    <p className="descripcion">{data.descripcion}</p>
                    <button className={buttonClass} onClick={HandleApplyClick}>{buttonText}</button>
                </div>
            </article>
    </>
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