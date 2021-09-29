import "./App.css";
import { useEffect, useState } from 'react';
import { Note } from "./Note.js";
/* import Note from '.Note.js'; Se puede usar de la misma manera con export default*/

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    setTimeout(() =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(json => {
      setNotes(json)
    });
    }, 2000);

  }, []);
  
  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    }
    /* setNotes(notes.concat(noteToAddToState)); */
    setNotes([...notes, noteToAddToState]);
    setNewNote('');
  }


  return (
    <div>
      <h1>Notas</h1>
      <ol>
        {notes
          .map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newNote} />
      <button>Crear nota</button>
      </form>
    </div>
  );
}

export default App;
