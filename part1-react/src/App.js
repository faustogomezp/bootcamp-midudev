import logo from './logo.svg';
import './App.css';
import Description from './Description.js'

/** const App = () => {
 * 
 * } */

  //Los componentes se deben crear como componente independientes.
const Message = () =>{
  return <h1>Esto es otro componente</h1>
}



function App() {
  const mensaje = 'Hola mundo desde variable'
  
  return (
    <div className="App">
      {mensaje + ' Esto es JSX'}
      <Message />
      <Description color='red' text='Estamos aprendiendo'/>
      <Description color='Yellow' text='en un bootcamp'/>
      <Description color='green' text='como ser fullStack de JS'/>
    </div>
  );
}

export default App;
