import React from 'react';
const HomePage = (props)=> {
    return(
        <main>
        <section className='section'>
            <div className='img'>
                <img id="img" src="imagenes/home/front-view-of-delivery-man-with-package.jpg" alt="repartidor" />
            </div>
            <h2 className="h2">CONOCE NUESTRAS NOVEDADES</h2>
            <div className="colum-container">
                <div className="colum-1">
                    <h3 className="h3">Envio a todo el pais</h3>
                    <p>Brindamos nuestro servicio a todo el pais de en entrega inmediata, con nos mas de una tardanza de 3 dias desde que se realizo el pedido.</p>
                </div>
                <div className="colum-2">
                    <h3 className="h3">Exelente atencion al cliente</h3>
                    <p>Contamos con una gran cantidad de empleados que dia a dia buscan ayudar a mejorar nuestro servicio de entregras, resolviendo sus problemas diarios.</p>
                </div>
                <div className="colum-3">
                    <h3 className="h3">Sucursales en todo el pais</h3>
                    <p>Tenemos sucursales distribuidas por todo el pais, perfectamente equipadas con las ultimas tecnologias para poder realizar muestro servicio.</p>
                </div>
            </div>
        </section>
    </main>
    );
}

export default HomePage;