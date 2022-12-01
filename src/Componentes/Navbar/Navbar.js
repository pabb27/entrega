import React from "react";
import "./Navbar.css";
import logo from ".//Imagenes/logo-cuadrado.png";
import { NavLink} from "react-router-dom";

const Navbar = () => {
    
    return(
        <navbar className="classnavbar">   
            <div className="logoydecrous">
                <img src={logo} className="logosolo" alt="Banner Decrous" /> 
                <div className="letraslogo"> 
                    <h2 className="decrous">DECROUS</h2>
                    <h2 className="adomicilio"><span>a domicilio</span>   </h2>
                </div>
            </div>          
            <div className="abcd">                  
                <NavLink to="./index.html" className="loslinks" > Inicio </NavLink>
                <NavLink to="./CarouselOfertas" className="loslinks"> Ofertas </NavLink>
                <NavLink to="./Productos" className="loslinks"> Productos </NavLink>                   
                <NavLink to="./Contacto" className="loslinks"> Contacto </NavLink>                          
            </div>        
  
        </navbar>    
    );}
export default Navbar;
