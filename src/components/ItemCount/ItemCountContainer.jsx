
import React, {useState} from "react"
import ItemCount from "./ItemCount"






const ItemCountContainer = ({initial, stock }) => {
    const [count, setCount] = useState (initial, stock)


     const sumar = () =>{
        setCount (count + 1)
       } 
      const restar = () => {
        if( count === 0 ) return
        setCount (count - 1)
    }

  


  return (
    <div>
        <ItemCount count={count} sumar={sumar} restar={restar}/>

    </div>
  )
}

export default ItemCountContainer