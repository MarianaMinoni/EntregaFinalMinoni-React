import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/cartContext'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import {useNavigate} from 'react-router-dom'
import Counter from '../Counter/Counter'



const CartDetail = () => {
  const [buyer, setBuyer] = useState({
    name: "",
    email: ""
  })
  const [error, setError] = useState({
    name: "",
    email: ""
  })




const {cart, removeItem, clear, onAdd, calcularMontoTotal}= useContext(CartContext)
const navigate = useNavigate()



// funcion para enviar la OC a la base de datos. Creamos el objeto purchase con un comprador que es un objeto, items que son un estado, date que es la fecha, y el total.

const addCart = () => {
  const purchase = {
  buyer, 
  items: cart,
  date: new Date(),
  amount: calcularMontoTotal(cart)

}
console.log(purchase);



 const db = getFirestore()

 //si la coleccion no existe, y le envio info, la crea
 const orderCollection = collection(db, "orders")
 addDoc(orderCollection, purchase)
.then(res => navigate( `/checkout/${res.id}` ))
.catch(error => console.log(error))


 clear()

 }

 const handleChange = (e) => {
   const {target} = e;
  setBuyer({
   ...buyer,
   [target.name] : target.value
 
  })
}

const onSubmit = (e) =>{
  //validar datos

  e.preventDefault()
  const error = {};
  if (!buyer.name){
    error.name = "El nombre es obligatorio"
  }  if (!buyer.email){
    error.email = "El email es obligatorio"
  }
  if (Object.keys(error).length === 0){
    addCart()

  } else {
    setError(error)
  }


}



  return (
   
    <div>
        CART
        {
            cart.map(el => (
              
                <div  >
             <div key = {el.id}>
            
                   <p>Marca: {el.item.nombre}</p>
                  <p>Cantidad: {el.cantidad}</p>
             </div>
                 <img src={el.item.image} style= {{width: '10rem', height: '10rem'} } />


                  <Counter onAdd={() => onAdd(el.item, el.cantidad)} text="Actualizar Cantidad" />         

                  <button type="button" className="btn btn-secondary m-2" onClick={() => removeItem(el.item.id)}>Eliminar Item</button>   
                   
              </div>
            ))

          
        }

        {
        cart.length > 0 &&
        <button type="button" className="btn btn-secondary m-2" onClick={onSubmit}>Crear orden</button>

        }

        {
        cart.length > 0 &&
        <button type="button" className="btn btn-secondary m-2" onClick={() => clear()}>Eliminar todo</button>

        }




        <div>

          <h3>Ingrese sus datos para finalizar la compra</h3>
          <br />

          <label htmlFor="name">Ingrese su nombre</label>
          <input onChange={handleChange} type="text" name ='name'id = 'name' value= {buyer.name} />
          {error.name && <span>{error.name}</span>}
          <br />
          <label htmlFor="email">Ingrese su Email</label>
          <input onChange={handleChange} type="text" name ='email'id = 'email' value ={buyer.email}/>
          {error.email && <span>{error.email}</span>}


          
        


        </div>


        </div>
      
  
      
  )
}

export default CartDetail
