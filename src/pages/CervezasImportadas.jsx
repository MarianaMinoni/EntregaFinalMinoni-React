import React, { useState, useEffect } from 'react'
import ItemList from '../components/ItemList/ItemList'

const CervezasImportadas = () => {
  
  const [items, setItems] = useState([])

  const getData = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
    .then(response => response.json())
    .then(data => setItems(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getData()
  },[])


  return (
    <div>
      
      <ItemList items = {items} />
     
  
      
    </div>
  )
}

export default CervezasImportadas