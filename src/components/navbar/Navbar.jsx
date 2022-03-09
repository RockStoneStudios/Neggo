import '../../Styles/Navbar.Module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='navbarLogo'>
           <img src={logo} alt="" />
          </div>
          <div className='navbarListItem'>
              <ul className='listNavbar'>
                  <Link to="/">
                   <li className='navbarItem'>Inicio</li>
                  </Link>
                  <Link to="/educacion">
                  <li className='navbarItem'>Educacion Financiera</li>
                  </Link>
                  <Link to="/blog">
                  <li className='navbarItem'>Blog</li>
                  </Link>
                  <Link to="/nosotros">
                  <li className='navbarItem'>Nosotros</li>
                  </Link>
                  <li className='navbarItem'>
                      <Link to="/login">
                      <button className='navbarButtonSesion'>Inicio Sesion</button>
                      </Link>
                  </li>
                  <li className='navbarItem'>
                      <Link to="/inicio">
                      <button className='navbarButtonUnete'>Únete a Neggo</button>
                      </Link>
                  </li>

              </ul>
          </div>
      </div>
  )
};

export default Navbar;
