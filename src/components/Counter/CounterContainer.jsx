import React, {useState} from 'react'
import Counter from './Counter'


const CounterContainer = () => {
    const [count, setCount] = useState (0)

     const sumar = () =>{
        setCount (count + 1)
       } 
      const restar = () => {
        if( count === 0) return
        setCount (count - 1)
    }



  return (
    <div>
        <Counter count={count} sumar={sumar} restar={restar}/>

    </div>
  )
}

export default CounterContainer