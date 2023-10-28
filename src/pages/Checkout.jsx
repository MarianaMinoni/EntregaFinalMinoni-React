import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
const {orderId} = useParams()


 


  return (
    <div>
        Gracias por su compra:  {orderId}

      
      
    </div>
  )
}

export default Checkout