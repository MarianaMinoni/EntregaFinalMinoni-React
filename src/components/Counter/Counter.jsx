import React, {useState} from 'react'

const Counter = ({onAdd, text = "Agregar al carrito", cantidad = 1}) => {

    const [count, setCount] = useState(cantidad)
    
    const sumar = () => {
        setCount(count + 1)
    }
    const restar = () => {
        if (count > 1) {
        
        setCount (count - 1)
    }}

 

 return (
    <div>
       <button type="button" className="btn btn-secondary m-2" onClick= {sumar} >Agregar</button>
         <span>{count}</span>
         <button type="button" className="btn btn-secondary m-2"  onClick={restar}>Restar</button>
         <button type="button" className="btn btn-secondary m-2"  onClick={() => onAdd(count)}>{text}</button>
   

     </div>
   )
 }

export default Counter