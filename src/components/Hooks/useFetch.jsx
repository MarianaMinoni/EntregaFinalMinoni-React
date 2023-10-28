import React, { useState, useEffect } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState(null)
  
    
    const getData = () => {


        fetch(url)
        .then(response => response.json())
        .then( data => setData(data))
        .catch(error => console.log(error))
      
       }
    useEffect(() => {
        getData()
     
    },[data])


  return (
   [data]
  )
}

export default useFetch






  
{/*const {} = () => {
  fetch("fakestoreapi.com/products/category/")
  .then(response => response.json())
  .then( data => setData(data))
  .catch(error => console.log(error))

}

useEffect (() => {
  getData()
},[])*/}
 


