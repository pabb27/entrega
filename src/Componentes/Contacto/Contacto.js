import {useRef} from 'react';
import './Contacto.css';
import emailjs from './@emailjs/browser/es';

const Contacto = () => {
const form = useRef();



const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_zajx6oa', 'template_y5roc5h', form.current, 'zQcAGIxH4BGjTwBbe')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

  return (
    <aside className="contacto">        
        <div className='todo'>      
          <h2 className='titulo'> Consultas? Escribinos!. </h2>
            <form className="formulario" ref={form} onSubmit={sendEmail}> 
              
              <input className="campo" type="text" placeholder="Ingrese su nombre" name='user_name' required></input>
              <input className="campo" type="text" placeholder="Ingrese su Celular" name='user_cel' required></input>
              <input className="campo" type="email" placeholder="Ingrese su Email" name='user_email' required></input>
              <input className="campo" type="text" placeholder="Asunto" name='user_subject' required></input>
              <textarea className="campo" name="message" placeholder='Escriba aqui su consulta' cols='30' rows="10" ></textarea>
              <button className="campo" type='submit'> Enviar </button>
            </form>
        </div>
    </aside>
  )
}

export default Contacto