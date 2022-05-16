import React from 'react';
const NosotrosPage = (props)=> {
    return(
        <main>
            <section>
                <div className="historia">
                    <div className="historia-item">
                        <h3 className="h3-2">NUESTRA COMPAÑIA</h3>
                        <p className="text">Somos REPARTOS, la empresa de correo privado y servicios logísticos más importante del país. Con una amplia red de atención al cliente, conformada por 155 sucursales, más de 1.000 Centros Logísticos distribuidos estratégicamente en todo el país para cubrir las necesidades del mercado.
                            Llevamos más de 64 años recorriendo el país, comunicando a nuestros clientes, sumándonos a sus proyectos y potenciando sus negocios, nuestra experiencia nos permite conocer el esfuerzo que implica el crecimiento y expansión, por eso los acompañamos en cada paso. Innovamos con nuestras Plataformas Digitales que permiten realizar operaciones ágiles, seguras y prácticas, ofrecemos soluciones comerciales tanto para el segmento Postal, Paquetería y eCommerce.
                        </p>
                    </div>
                    <div className="historia-item">
                        <h3 className="h3-2">NUESTROS VALORES</h3>
                        <p className="text"/>Definen el modo de asumir el propósito que nos impulsa día a día a trabajar, construyendo una organización que invita a ser conscientes de la importancia que tiene nuestra labor en el mundo actual:
                            <br/>- EXCELENCIA EN EL SERVICIO: Agregando valor a cada una de nuestras acciones para obtener la plena satisfacción de nuestros clientes, posicionándonos como líderes en las mejores prácticas de la actividad.
                    
                            <br/>- EFICACIA: Asegurando el cumplimiento del servicio en los tiempos, procedimientos y niveles de calidad comprometidos.
                    
                            <br/>- EFICIENCIA: Confirmando que, para cumplir con las condiciones comprometidas, se hará foco en la utilización racional del recurso humano, material y ambiental.
                    
                            <br/>- PRESENCIA: Garantizando la llegada de nuestros servicios mediante la capilaridad geográfica, atributo diferencial de nuestra marca.
                    
                            <br/>- RAPIDEZ: Garantizando la optimización de tiempos de proceso y entrega, eliminando improductividades, reprocesos y demoras en cada etapa de la actividad.
                    
                            <br/>- SEGURIDAD: Brindando a nuestros clientes la garantía del cumplimiento del servicio en tiempo y forma, generando su confianza y lealtad.
                    
                            <br/>- COMPROMISO: Confirmando, a través de nuestras acciones diarias que estamos comprometidos con la excelencia del servicio, la satisfacción del cliente y el cuidado del medio ambiente, en todos sus aspectos relacionados.
                        <p/>
                    </div>
                </div>
                <div className="staff">
                    <h2 className="h2">Staff</h2>
                    <div className="image-container">
                        <div className="image">
                            <img className="image__img" src="imagenes/nosotros/portrait-cheerful-businessman-dressed-suit.jpg" alt="" width='500px'/>
                            <div className="image__overley">
                                <div className="image__title">Jeff Bezos</div>
                                <p className="imege__description">
                                    Gerente General
                                </p>
                            </div>
                        </div>
                        <div className="image">
                            <img className="image__img" src="imagenes/nosotros/smiling-confident-business-consultant-talking-to-customer.jpg" alt="" width='500px'/>
                        <div className="image__overley">
                            <div className="image__title">Mark Zuckerberg</div>
                                <p className="imege__description">
                                    Gerente Comercial
                                </p>
                            </div>
                        </div>
                        <div className="image">
                            <img className="image__img" src="imagenes/nosotros/smiling-man-white-shirt-typing-text-message-scrolling-feed-social-network-using-smartphone-gray.jpg" alt="" width='500px'/>
                            <div className="image__overley">
                                <div className="image__title">Elon Musk</div>
                                <p className="imege__description">
                                    Gerente de sistemas
                                </p>
                            </div>
                        </div>
                        <div className="image">
                            <img className="image__img" src="imagenes/nosotros/young-business-woman-pointing-finger-side-isolated-grey-wall.jpg" alt="" width='500px'/>
                            <div className="image__overley">
                                <div className="image__title">Françoise Bettencour</div>
                                <p className="imege__description">
                                    Gerenete de Marketing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NosotrosPage;