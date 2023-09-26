import React, {useState, useEffect} from 'react'
import ItemDetail from './itemDetail'



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
       
   const getData = () => {


    fetch("https://fakestoreapi.com/products/2")
    .then(response => response.json())
    .then( data => setItem(data))
    .catch(error => console.log(error))
  
   }

   useEffect(() => {
    getData()


   }, [])


  return (
   
   <ItemDetail item={item}/>
   
    
  )
}

export default ItemDetailContainer
