import React, { useEffect, useState } from 'react'
import  Container  from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';




const ItemListContainer = () => {
   const [items, setItems] = useState ([])

   const getData = () => {


    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then( data => setItems(data))
    .catch(error => console.log(error))
  
   }

  
   useEffect ( () => {
    getData()   

   }, [])

   console.log(items)

  return (
  <Container>
    <Row>
      <ItemList items = {items} >



      </ItemList>
    </Row>    
  </Container>
   
  );
}

export default ItemListContainer