import { useState } from 'react'
import CartContext from './cartContext'
import { updateDoc } from 'firebase/firestore'

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

   
    //eliminar un item
    const removeItem = (id) => {
        const newCart = cart.filter((el) =>el.item.id !== id )
        setCart(newCart)

      
//eliminar por id siempre. recibe el id del el a eliminar
// validar si hay algo en el carro primero 
  
}


//calcular el monto final
const calcularMontoTotal = (cart) => {
    let total = 0;
  
    for (const item of cart) {
      const subtotal = item.item.precio * item.cantidad
      total += subtotal
    }
  
    return total

  }



    const addItem = (item, cantidad) => {  
        console.log("cantidad:", cantidad) 
        console.log("item:", item)       

        //compruebo si ya existe un elemento con ese id
        const elExistente = cart.find((cartItem) => cartItem.item.id === item.id)        

        // acá voy a actualizar solo la cantidad, si es que el item ya existe
        if(elExistente) { 
            const actualizacionCart = cart.map ((cartItem) =>{
                if (cartItem.item.id === item.id){
                    return {
                        item : cartItem.item,
                        cantidad : cartItem.cantidad + cantidad  
                    }
                } else {
                    return cartItem
                }
            })
                setCart(actualizacionCart)
        } else {
            setCart([ 
                ...cart,
                {
                    item, cantidad
                }
    
            ])
    
       }
    
   
  
    }



    const onAdd = (item, cantidad) => {
           
    
        if (cantidad <= item.stock) {
            addItem(item, cantidad)
        } else {
            alert("No hay suficiente stock disponible")
        }
    }
 
    const clear = () => {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        calcularMontoTotal,
        onAdd,
        

   
      
       
       
      
    }


  return (
    <CartContext.Provider value={values}> 
    {children}   
   </CartContext.Provider>
  )
}

export default CartContextProvider