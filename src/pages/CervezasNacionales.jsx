import { useState, useEffect } from "react"
import ItemList from "../components/ItemList/ItemList"



const CervezasNacionales = () => {
  const [items, setItems] = useState([])

  const getData = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
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
export default CervezasNacionales