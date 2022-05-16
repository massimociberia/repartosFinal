import { NavLink } from 'react-router-dom';
/* import 'styles/Nav.css'; */
const Nav = (props) => {
    return(
        <div className='navbar'>
            <div className='conteiner'>
                <div className='logo'>
                    {/* <img src='imagenes/correo-temporal.png' width="100px" alt='Repartos' className='logo__nav'></img> */}
                    <h1 className='h1'>Repartos</h1>
                </div>
                <nav>
                    <ul>
                        <li><NavLink activeClassName='activo' exact to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to='/nosotros'>Nosotros</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to='/servicios'>Servicios</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to='/contacto'>Contacto</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to='/novedades'>Novedades</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;