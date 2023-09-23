import React from 'react'
import Button from '../Button/Button'

const ItemCount = ({count, sumar, restar}) => {
  return (
    <div>
    <Button  text="sumar" cb={sumar}/>
      
        <p> Valor: {count}</p>

        <Button text="restar" cb={restar}/>
        </div>
  )
}

export default ItemCount