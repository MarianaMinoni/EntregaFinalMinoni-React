import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


 const ItemList = ({items}) => {

 
  return (
   
    <>
    <h2>Productos</h2>

   
    { items.map( (item) => 
   
    (
        

            <Col md={4} lg={3} xs={12} key={item.id}>
                <CardList item ={item}/>
               
            </Col>
        )
      

        )
        
    }
    
    
    </>
    
    

  )
}


//cardlist

 const CardList = ({item}) => {

     return (
       <Card style={{ width: '18rem' }} className="m-5">
          <Card.Img variant="top" src={item.image} /> 
         <Card.Body>
           <Card.Title>Marca: {item.nombre}</Card.Title>
            <Card.Text>
             Precio: ${item.precio}
           </Card.Text> 
           <Link to={ `/detalle/${item.id}`}>
       <Button variant="secondary"> Ver detalle</Button>
       </Link>
         </Card.Body>
       </Card>
     );
  
  
   }


export default ItemList
