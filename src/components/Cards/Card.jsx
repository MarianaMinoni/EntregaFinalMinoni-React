import React from 'react'
import Button from '../Button/Button'

const Card = (props) => {
  return (
    <div className="card">
        
        <div className="card-body">

            <p className="card-title"> {props.title} </p>

            <Button text={"Add"} cb={() => {alert("agregado")}} />

        </div>  
        

    </div>
  )
}

export default Card