
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'





function App() {

  
  return (
    <div className="container">
   <NavBar/>
   <ItemListContainer greeting="Bienvenidos!!"/>
   </div>
  )
}

export default App
  