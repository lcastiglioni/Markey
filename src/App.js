import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
      
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting={"Bienvenido a Markey"}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;