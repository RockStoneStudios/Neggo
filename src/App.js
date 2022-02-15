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

function App() {
  return (
    <div className="App">
      <Mision/>
      <Footer/>
      {/* <Blog/> */}
    
      {/* <Inicio/> */}
      {/* <RecuperaCuenta2/> */}
      {/* <ValidaCodigo/> */}
      {/* <RecuperaC1/> */}
      {/* <Recuperar/> */}
      {/* <Login/> */}
      {/* <LoginPassword/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
