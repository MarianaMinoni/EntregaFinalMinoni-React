import React from 'react'
import Inicio from '../../pages/Inicio'
import Detalle from '../../pages/Detalle'
import { Routes, Route } from 'react-router-dom'
import Cart from '../../pages/Cart'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Checkout from '../../pages/Checkout'
import UserProfile from '../../pages/UserProfile/UserProfile'


const RoutesComponent = () => {
  return (

     <Routes>
  <Route  path='/' element={ <Inicio /> }/>
  <Route  path='/detalle/:id' element={ <Detalle /> }/>
  <Route   path='/categoria/:categoryId' element={ <ItemListContainer /> }/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/user' element={<UserProfile/>}/>
  <Route path='/checkout/:orderId' element={<Checkout/>}/>
      </Routes>
    
   
  )
}

export default RoutesComponent