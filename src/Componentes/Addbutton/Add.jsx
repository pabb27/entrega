import "./Add.css"; 
import React, {useState} from 'react';

export const Add = () => {

    const[count, setCount] = useState(1);

    const restar = () => {
        setCount(count - 1);
    }
    const sumar = () => {
        setCount(count + 1);
    }

  return (
    <div className="counter"> 
        <button disabled={count<=1} onClick={restar} className="sumarestar"> - </button>
        <span> {count} </span>
        <button onClick={sumar} className="sumarestar"> + </button>
        <div> 
            <button className="agregaralcarrito">Agregar al carrito </button>
        </div>
    
    
    
    </div>
  )
}

export default Add