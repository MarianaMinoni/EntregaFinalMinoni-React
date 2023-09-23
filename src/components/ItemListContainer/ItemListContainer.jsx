import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { ItemList } from '../ItemList/ItemList';



const ItemListContainer = () => {
   const [items, setItems] = useState ([])

   const getData = () => {


    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then( data => setItems(data))
    .catch(error => console.log(error))
  
   }

   console.log(items)

   useEffect ( () => {
    getData()   

   }, [])

  

  return (
  <Container>
    <Row>
      <ItemList items = {items} >



      </ItemList>
    </Row>    
  </Container>
   
  )
}

export default ItemListContainer