
import './App.css'
import NavBar from './components/Navbar/NavBar'
import RoutesComponent from './components/Routes/RoutesComponent'
import CartContextProvider from './context/cartContext/CartContextProvider'
import UserContextProvider from './context/userContext/UserContextProvider'






function App() {


  return (
 
<>
  <UserContextProvider>
  <CartContextProvider>
  <NavBar />
  <RoutesComponent/>     
  </CartContextProvider>
  </UserContextProvider>
  
</>

 
  
  )
}

export default App
  