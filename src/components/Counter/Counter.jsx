import React from 'react'
import Button from '../Button/Button'

const Counter = ({count, sumar, restar}) => {
   

   // useEffect( () => {}, [count] ) // montaje sin dependencias (se va a ejecutar siempre)

  //  useEffect( () => {}, [count] ) // montaje con dependencias (escucha al count para ejecutarse)


 //   useEffect( () => {

 //       return () => console.log("desmonte")
 //  }, [])   // acá para poder desmontar, usamos el useEffect que devuelva una funcion flecha. Siempre que devuelva una función, estamos desmontando el componente






  return (
    <div>

       {/*<button onClick={sumar} style={{color:"green"}}>Sumar</button>*/}
       <Button  text="sumar" cb={sumar}/>
      
        <p> Valor: {count}</p>

        <Button text="restar" cb={restar}/>

       {/* <button onClick={restar} style={{color:"red"}}>Restar</button>*/}

    </div>
  )
}

export default Counter