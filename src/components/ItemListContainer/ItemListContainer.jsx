import React, { useEffect, useState } from 'react'
import  Container  from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"






 const ItemListContainer = () => {

 

  const [items, setItems] = useState([])
  const {categoryId} = useParams()



  
  useEffect(() =>{
    const db = getFirestore()
    const itemCollection = collection(db, "items")

    const allItems = query (itemCollection)

    if (categoryId) {

const elFiltradosCategoria =  query(itemCollection, where ("categoria", "==", `${categoryId}`)) 

getDocs(elFiltradosCategoria)
.then((snapshot) => {
  const elFiltrados = snapshot.docs.map(document => ({id:document.id, ...document.data()}))

  setItems(elFiltrados)

    })
  }  else { 
      getDocs(allItems)
      .then((snapshot) => {
        const allData = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
        setItems(allData)
      })

    }




  

  },[categoryId])





  return (
     <Container>
       <Row>
         {
           items.length > 0 &&
   
         <ItemList items = {items} />
            }
      
       </Row>    
     </Container>
   
     )
  }

  export default ItemListContainer