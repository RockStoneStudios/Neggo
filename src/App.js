import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login'
import LoginPassword from "./pages/Login/LoginPassword";
import Recuperar from "./pages/RecuperarCuenta/Recuperar";
import RecuperaC1 from "./pages/RecuperarCuenta/RecuperaCuenta1/RecuperaC1";
import ValidaCodigo from "./pages/RecuperarCuenta/ValidaCodigo/ValidaCodigo";
import RecuperaCuenta2 from "./pages/RecuperarCuenta/RecuperaCuenta2/RecuperaCuenta2";
import Inicio from "./pages/InicioSesion/Inicio";
import Blog from "./pages/Blog/Blog";
import Footer from "./components/footer/Footer";
import Mision from "./pages/Mision/Mision";
import Educacion from "./pages/EducacionFinanciera/Educacion";
import Ahorro from "./pages/Ahorro/Ahorro";
import EdFinanciera from "./pages/EducacionFinanciera/EdFinanciera";
import Simulador from "./pages/Simulador/Simulador";

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
     <Router>
       <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/nosotros" element={<Mision/>}/>
          <Route path="/blog" element={<Blog/>} />
          <Route path="/ahorro" element={<Ahorro/>} />
          <Route path="/educacion" element={<Educacion/>} />
          <Route path="/edfinanciera" element={<EdFinanciera/>} />
          <Route path="/simulador" element={<Simulador/>} />
          <Route path="/recupera_cuenta" element={<RecuperaCuenta2/>} />
          <Route path="/login_password" element={<LoginPassword/>} />
          <Route path="/validar_codigo" element={<ValidaCodigo/>} />
          <Route path="/recupera" element={<Recuperar/>} />
          <Route path="/recuperaC" element={<RecuperaC1/>} />
       </Routes>

      </Router>

  );
}

export default App;
