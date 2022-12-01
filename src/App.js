import './App.css';
import Footer from"./Componentes/Footer/Footer";
import Navbar from './Componentes/Navbar/Navbar';
import Home from "./Componentes/Home/Home";
import CarouselOfertas from './Componentes/CarouselOfertas/CarouselOfertas';
import Productos from "./Componentes/Productos/Productos";
import Contacto from './Componentes/Contacto/Contacto';
import {Routes, Route, Router} from "react-router-dom";

 


function App() {
  return (
    
    <div>      
        
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/CarouselOfertas" element={<CarouselOfertas/>}/>
          <Route path="/Productos" element={<Productos/>}/>           
          <Route path="/Contacto" element={<Contacto/>}/>        
      </Routes>         

      < Home />
      < CarouselOfertas />
      < Productos/>
      < Contacto/> 
      < Footer />
      
    </div>
  );
}

export default App;
