import '../../Styles/Navbar.Module.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='navbarLogo'>
           <img src={logo} alt="" />
          </div>
          <div className='navbarListItem'>
              <ul className='listNavbar'>
                  <li className='navbarItem'>Inicio</li>
                  <li className='navbarItem'>Educacion Financiera</li>
                  <li className='navbarItem'>Blog</li>
                  <li className='navbarItem'>Nosotros</li>
                  <li className='navbarItem'>
                      <button className='navbarButtonSesion'>Inicio Sesion</button>
                  </li>
                  <li className='navbarItem'>
                      <button className='navbarButtonUnete'>Únete a Neggo</button>
                  </li>

              </ul>
          </div>
      </div>
  )
};

export default Navbar;
