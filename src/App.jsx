
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'
import CervezasImportadas from './pages/CervezasImportadas'
import CervezasNacionales from './pages/CervezasNacionales'
import Detalle from './pages/Detalle'






function App() {

  
  return (
    <div>
       <NavBar/>



      <h1>React-Router</h1>
    


<Routes>
  <Route path='/' element={ <Inicio /> }/>
  <Route path='/cervezasimportadas' element={ <CervezasImportadas /> }/>
  <Route path='/cervezasnacionales' element={  <CervezasNacionales /> }/>
  <Route path='/contacto' element={ <Contacto /> }/>
  <Route path='/detalle/:id' element={ <Detalle /> }/>



</Routes>


 {/*<ItemListContainer />*/}
 {/*<ItemDetailContainer />*/}

 </div>
  
  )
}

export default App
  