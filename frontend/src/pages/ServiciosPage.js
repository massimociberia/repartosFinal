import React from 'react';
const ServiciosPage = (props)=> {
    return(
        <main>
            <div>
                <img className="servicios-img" src="imagenes/servicios/woman-giving-online-signature-deliveryman.jpg"  alt="repartidor entregando un pedido" width='500px'/>
            </div>
            <div className="servicios">
                <div className="servicios__box">
                    <h2>01</h2>
                    <h3>Envios Express</h3>
                    <p>Tiempo de entrega: de 2 a 3 días, según el origen y el destino.
                        <br/>Rango de peso: desde 500 gr hasta 20kg máximo. (A partir de los 2 kg de peso, solo se admiten en Sucursales con Asiento de Aduana)
                        <br/>Medidas admitidas:        
                        <br/>Para sobres: 30 x 40 x 5 cm de espesor.
                        <br/>Para paquetes o cajas: lado más largo: 105 cm. Lado más largo, más el mayor contorno tomado en forma transversal: 200 cm.
                    </p>
                </div>
                <div className="servicios__box">
                    <h2>02</h2>
                    <h3>Ventas Online</h3>
                    <p>
                        Comprá Todo Ventas Online en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.
                    </p>
                </div>
                <div className="servicios__box">
                    <h2>03</h2>
                    <h3>Envio Urgentes</h3>
                    <p>
                        Servicio de envíos urgentes para correspondencia de hasta 500 grs. y encomiendas de hasta 20kg. Cuenta con la mayor cobertura de localidades atendidas y con plazo comprometido para el primer intento de entrega.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;