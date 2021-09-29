import logo from './logo.svg';
import './App.css';
import { Note } from './Note.js';
/* import Note from '.Note.js'; Se puede usar de la misma manera con export default*/



function App(props) {
  const mensaje = 'Hola mundo desde variable'
  
  return (
    <div className="App">
      <Note key={props.note.id} {...props.note} />
    </div>
  );
}

export default App;
