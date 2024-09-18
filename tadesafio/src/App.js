import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [items, setItems] = useState([]);

  const handleAgregar = () => {
    setModalAbierto(true);
  };

  const handleGuardado = (nuevoItem) => {
    setItems([...items, nuevoItem]);
    setModalAbierto(false);
  };

  const handleCancelar = () => {
    setModalAbierto(false);
  };


  return (
    <div className='App App-header'>
      <h1>Lista de textos</h1>
      <button id="AgregarEnLista-btn" onClick={handleAgregar}>Agregar</button>

      {modalAbierto && (<Modal guardado={handleGuardado} cancelado={handleCancelar} />)}

      <div className='listaDeElementos'>
        <ul className='lista'>
          {items.map((item, index) => (
            <li key={items.length}>{item}</li> //en la key utilicé el length ya que en clase vimos que no podemos usar el índice del array. Como en la lista no existe el botón de eliminar, no me preocupa que pueda haber dos lengths iguales
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
