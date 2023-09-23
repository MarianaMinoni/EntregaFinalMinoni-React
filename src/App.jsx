
import './App.css'
import Card from './components/Cards/Card'
import Counter from './components/Counter/Counter'
import CounterContainer from './components/Counter/CounterContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'
import ItemCountContainer from './components/ItemCount/ItemCountContainer'







function App() {

  
  return (
    <div>
   
   <ItemCountContainer initial={1} stock={15}/>
   </div>

  )
}

export default App
  