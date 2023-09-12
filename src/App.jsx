
import './App.css'
import Card from './components/Cards/Card'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'





function App() {

  
  return (
    <div className="container">
   <NavBar/>
   <ItemListContainer greeting="Bienvenidos!!"/>
   <div className="row">
    <div className="col-3">
   < Card title="Cerveza Warsteiner" />
   </div>
   <div className="col-3">
   < Card title="Cerveza Grolsch" />
   </div>
   <div className="col-3">
   < Card title="Cerveza Amstel" />
   </div>
   </div>
   </div>
  
  )
}

export default App
  