import React from 'react'



const Card = (props) => {
  return (
    <div className="card">
        
        <div className="card-body">

            <p className="card-title"> {props.title} </p>

        </div>  

    </div>
  )
}




export default Card