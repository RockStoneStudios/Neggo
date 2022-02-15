import './blog.css';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const Blog = () => {
  return (
      <>
     <Navbar/>
    <div className='blog-Container'>
        
        <div className='sidebar'>
            <h2>Categorias</h2>
            <ul className='list'>
                <li className='listItem'>Tecnologia</li>
                <li className='listItem'>Inversion</li>
                <li className='listItem'>Ahorro</li>
                <li className='listItem'>Crédito</li>
                <li className='listItem'>Dinero</li>
            </ul>
            
        </div>
        <div className='blog'>
            <h2>Blog</h2>
            <div className='blogItem'>
                <div className='img-container'>
                  <img src={blog1} alt= ""/>
                  <h3>Dia mundial del Ahorro</h3>
                </div>
                 <div className='img-container'>
                    <img src={blog2} alt= ""/>
                    <h3>Una cita con el dinero</h3>
                 </div>
                 <div  className='img-container'>
                   <img src={blog3} alt= ""/>
                   <h3>Pagos con QR</h3>
                 </div>
                 <div className='img-container'>
                  <img src={blog1} alt= ""/>
                  <h3>Dia mundial del Ahorro</h3>
                </div>
                 <div className='img-container'>
                    <img src={blog2} alt= ""/>
                    <h3>Una cita con el dinero</h3>
                 </div>
                 <div  className='img-container'>
                   <img src={blog3} alt= ""/>
                   <h3>Pagos con QR</h3>
                 </div>
                 <button className='boton'>Cargar más...</button>
            </div>
        </div>
       
    </div>
    <Footer/>
    </>
  )
}

export default Blog;