import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount"

function App() {
  const handleAddToCart = (item) => {
    console.log("Cantidad agregada",item)
  }
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting={"Welcome"}/>
      <ItemCount inicial ={0} stock={10} onAdd={handleAddToCart}/>
    </div>
  );
}

export default App;