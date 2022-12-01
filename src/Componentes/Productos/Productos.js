import React, {useState} from "react";
import "./Productos.css";
import Plantilla from "../Plantilla/Plantilla";

import dt from "./Imagenes/dt.png";
import ariel from "./Imagenes/ariel.png";
import flit from "./Imagenes/flit.png";
import quitasarro from "./Imagenes/quitasarro.png";
import vivere from "./Imagenes/vivere.png";
import cloro110 from "./Imagenes/cloro110.png";

const Productos = () => {
    const [Perfuminas, setPerfuminas] = useState ([
        {
            id: 1,
            img: dt,
            name: "Detergente",
            presentacion: "5Litros",
            precioMinorista: 600, 
            
        },
        {
            id: 2,
            img: ariel,
            name: "Jabon liquido",
            presentacion: "5Litros",
            precioMinorista: 400, 
             
        },
        {
            id: 3,
            img: flit,
            name: "Flit",
            presentacion: "5Litros",
            precioMinorista: 1500, 
            
        },
        {
            id: 4,
            img: vivere,
            name: "Suavizante",
            presentacion: "5Litros",
            precioMinorista: 200, 
             
        },
        {
            id: 5,
            img: cloro110,
            name: "Cloro Puro",
            presentacion: "5Litros 110%",
            precioMinorista: 200, 
            
        },
        {
            id: 6,
            img: quitasarro,
            name: "Quitasarro",
            presentacion: "5Litros",
            precioMinorista: 200, 
             
        }
    ]);
    
    
    return (
<div className="contenedorDeProductos">

    
        {Perfuminas.map((producto) => {
            return (
        <div className="productos">    
            <Plantilla 
            key={producto.id} 
            img={producto.img} 
            name={producto.name} 
            presentacion={producto.presentacion} 
            precioMinorista={producto.precioMinorista} />
            <button className="addcart"/*onClick={}*/ >Agregar</button>
        </div> )
        })};

    
</div>

           );}

export default Productos




