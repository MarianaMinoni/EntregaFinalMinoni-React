
   
// actualizar un documento (amount o total)


  //   const updateOrder = () => {
  //     const db = getFirestore()
  //     const orderDoc = doc (db, "orders", orderId)
  // updateDoc(orderDoc, {amount: 3000})
  // .then(res => console.log("orden actualizada"))
  // .catch(error => console.log("algo salió mal"))
  
  
  // }
  
  
  // // aparte, en lo que retorna va el boton
  
  // <button onClick={updateOrder}>Actualizar orden</button>



//-----------------------------------------------------------------------------------------------



  // actualizar un documento (stock)


  //   const updateOrder = () => {
  //     const db = getFirestore()
  //     const orderDoc = doc (db, "items", stock) // entro a la coleccion items en este caso. si la propiedad no existiera, stock, por ejmeplo, la va a crear
  // updateDoc(orderDoc, {stock: 1})
  // .then(res => console.log("orden actualizada"))
  // .catch(error => console.log("algo salió mal"))
  
  
  // }
  
  
  // // aparte, en lo que retorna va el boton
  
  // <button onClick={updateOrder}>Actualizar orden</button>





//...................................................................................................................




// funcion para enviar la OC a la base de datos. Creamos el objeto purchase con un comprador que es un objeto, items que son un estado, date que es la fecha, y el total.


// const addCart = () => {
//   const purchase = {
//   buyer : {
//     id: 1,
//     name: "Mariana",
//     mail: "mariana@gmail.com"
//   },
//   items: cart,
//   date: new Date(),
//   amount:1000

// }


// const db = getFirestore()

// //si la coleccion no existe, y le envio info, la crea
// const orderCollection = collection(db, "orders")
// addDoc(orderCollection, purchase)
// .then(res => navigate( `/checkout/${res.id}` ))
// .catch(error => console.log(error))

// clear()

// }


//.................................................................................................................




///COUNTER

// const Counter = ({onAdd, text = "Agregar al carrito", cantidad = 1 }) => {

//   const [count, setCount] = useState(cantidad)
//   const sumar = () => {
//       setCount(count + 1)
//   }
//   const restar = () => {
//       if (count > 1) {
      
//       setCount (count - 1)
//   }}
// return (
//   <div>
//       <button onClick={sumar}>Agregar</button>
//       <span>{count}</span>
//       <button onClick={restar}>Restar</button>
//       <button onClick={() =>onAdd(count)}>{text}</button>


//   </div>
// )
// }