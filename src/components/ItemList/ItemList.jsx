import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemList = ({items}) => {
  return (
    <>
    {
        items.map( (item) => (

            <Col md={4}>
                <Card />



            </Col>
        )


        )
    }
    
    
    </>
    


  )
}
