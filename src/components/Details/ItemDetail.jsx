import React, {useEffect} from 'react'

const ItemDetail = ({item}) => {

 



  return (
    <div>
      <h5>{item.title}</h5>
      <img src={item.image} />
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>

    </div>
  )
}

export default ItemDetail