import React from "react";
import "./Contacto.css";

const Contacto = () => {
    return(
<aside className="contacto">
   
    <form action="https://formspree.io/f/mkneoyzk" method="post" className="formRegister">
        <fieldset className="tituloContacto">   
            <legend>Contacto</legend>
            <p>Para cualquier tipo de consulta escrìbenos y a la brevedad nos contactaremos</p>
            <label for="nombre">Nombre</label>
            <input className="camposAcompletar" type="text" placeholder="Nombre" name="name" id="name" requiered/>
            <label for="apellido">Apellido</label>
            <input className="camposAcompletar" type="text" placeholder="Apellido" name="lastname" id="lastname" requiered/>
            <label for="email">Correo Electrònico</label>
            <input className="camposAcompletar" type="email" placeholder="Email" name="email" id="email" requiered/>
            <label for="direcciòn">Direcciòn</label>
            <input className="camposAcompletar" type="direccion" placeholder="Direcciòn" name="direccion" id="direccion" requiered/>
            <label for="localidad">Localidad</label>
            <input className="camposAcompletar" type="localidad" placeholder="Localidad" name="localidad" id="localidad" requiered/>
            <label for="telefono">Telèfono</label>
            <input className="camposAcompletar" type="telefono" placeholder="Telèfono" name="telefono" id="telefono" requiered/>  
            <label for="consulta">Consulta</label>        
            <textarea className="camposAcompletar" name="consulta" placeholder="Ingrese aquì su Consulta"id="consulta" cols="20" rows="5" maxlength="40"></textarea>          
        

            <div>
            <label for="RecibeOfertas"> ¿Quiere recibir nuestras Ofertas Semanales?</label>
                <select name="RecibeOfertas" id="RecibeOfertas">
            <option value="SI">SI</option>
            <option value="NO">NO</option>  
                </select>    
            </div>
            <div>
                <button>Enviar</button>
            </div>
                
        </fieldset>
     </form>
    
</aside>
          );}

export default Contacto;