import React, {useState} from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton.jsx'
import './Estilos.css' 

function Navbar() {

  const[clicked, setClicked]  = useState(false) 
 
  const handleClick = () =>{
    setClicked(!clicked)
  }
  
  return (
    <>  
      <NavContainer className='contenedor-general'>   
                  
        <div className='unnombre'> 
          <div className='Letras'>
            <h2 className='unh2'> Decrous</h2>
            <h2 className='unh2'> <span>a domicilio</span>   </h2>
          </div>
        </div>
        <div className={`loslinks ${clicked? 'active' : ''}`}>            
            <a onClick={handleClick} href='#h'>Inicio</a>
            <a onClick={handleClick} href='#h'>Productos</a>
            <a onClick={handleClick} href='#h'>Lista de precios</a>
            <a onClick={handleClick} href="http://wa.me/5493416597936">Contacto</a>               
        </div>

        <div className='xxx'> 
         <BurgerButton clicked={clicked} handleClick={handleClick} />     
         </div>

         <BgDiv className={`initial ${clicked ? 'active' : ''}`}> </BgDiv>
       
       
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
`

const BgDiv = styled.div``

