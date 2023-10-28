import React, {useState, useEffect, useContext} from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../Hooks/useFetch'
import CartContext from '../../context/cartContext/cartContext'
import {doc, getDoc, getFirestore} from "firebase/firestore"

// esos 3 metodos los traemos de firestore para poder usarlos


const ItemDetailContainer = ({id}) => {
    // const [item] = useFetch( ` https://fakestoreapi.com/products/${id}`) sin firebase

  const [item, setItem] = useState(null)

    const {addItem} = useContext(CartContext)

    // en este useEffect vamos a usar lso metodos importados para poder acceder a la informacion que buscamos

    useEffect(() =>{
      const db = getFirestore()

     const itemRef = doc(db,"items", id )

     getDoc(itemRef)
     .then ( (snapshot) => {
     console.log(snapshot.exists())
      if (snapshot.exists()) {

        setItem({
          id:snapshot.id,
          ...snapshot.data()
        })
        
      }
    })
     .catch((error)=> console.log(error))

    
    },[])

     const onAdd = (cantidad) => {
       if (cantidad <= item.stock) {
         addItem(item, cantidad);
       } else {
         alert("No hay suficiente stock disponible");
       }
     }
   


  return (
    <>
    { item !== null  &&
   
   <ItemDetail item={item} onAdd={onAdd}/>
  }
    </>
  )
}

export default ItemDetailContainer
