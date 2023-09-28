import React from 'react'
import { useParams } from 'react-router-dom'

const Detalle = () => {

    const params = useParams()
    console.log(params)
    
  return (
    <div>Detalle</div>
  )
}

export default Detalle