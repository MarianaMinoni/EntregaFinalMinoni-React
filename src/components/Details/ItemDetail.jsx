import React, { useState }  from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({item, onAdd}) => {


  return (
    <div>
      <h5>{item.nombre}</h5>
     <img style= {{width: '40rem', height: '40rem'} }src={item.image} />
      {/*  <p>{item.description}</p> */}
      <p>Precio: ${item.precio}</p>
      <p>Stock: {item.stock}</p>
    <Counter onAdd={onAdd} />


    </div>
  )
}

export default ItemDetail