import React, {useContext} from 'react'
import {FaShoppingCart} from "react-icons/fa"
import UserContext from '../../context/userContext/UserContext'
import CartContext from '../../context/cartContext/cartContext'

const CartWidget = () => {

  const { cart } = useContext(CartContext);

  // Calcula la cantidad total de elementos en el carrito
  const cantidadTotal = cart.reduce((total, item) => total + item.cantidad, 0);


  return (
    <div>
      <div>
      <FaShoppingCart/> <span>{cantidadTotal}</span>
      </div>
      
      <div> 
       <UserContext.Consumer> 
        {
          ({user}) => <p>Welcome, {user.name}</p>
         
        }
        
       </UserContext.Consumer>
      </div>
        
    </div>
  )

}

export default CartWidget

// este proceso se supone que da como ventaja respecto del 2 el hecho que me trae toda la data y yo puedo procesarla y mostrar o lo que sea.
// la informacion le llega a todo el componente.

// return (
//   <div>
//     <div>
//     <FaShoppingCart/> <span>0</span>
//     </div>
//     <div> 
//       Welcome, {userData.name}
//     </div>
      
//   </div>
// )


// este segundo proceso trae una cosa especifica.. Si necesito un unico dato, es mejor usar esra forma.
// la informacion solo le llega a ese div donde llamo al dato

  // return (
  //   <div>
  //     <div>
  //     <FaShoppingCart/> <span>0</span>
  //     </div>
      
  //     <div> 
  //      <UserContext.Consumer> 
  //       {
  //         () => <p>Welcome, {user.name}</p>
  //       }
  //      </UserContext.Consumer>
  //     </div>
        
  //   </div>
  // )
