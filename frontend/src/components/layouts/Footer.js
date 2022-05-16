import React from 'react';
const Footer = (props)=> {
    return(
        <footer>
            <div className="footer-conteiner">
                <h3 >Repartos</h3>
                    <ul class="socials">
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
            <div className="footer-botton">
                <p>copyright &copy;2022 by Massimo Cibeira</p>
            </div>
        </footer>
    );
}

export default Footer;