import "./App.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";
import axios from "axios";
import { getAllNotes } from './services/notes/getAllNotes.js';
import {createNote} from './services/notes/createNote.js';
/* import Note from '.Note.js'; Se puede usar de la misma manera con export default*/

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNotes()
    .then(notes =>{
      setNotes(notes);
      setLoading(false);
    })
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    createNote(noteToAddToState)
    .then(newNote => {
      setNotes((prevNotes) => prevNotes.concat(newNote))
    });
    /* setNotes(notes.concat(noteToAddToState)); */
    /* setNotes([...notes, noteToAddToState]); */
    setNewNote("");
  };

  return (
    <div>
      <h1>Notas</h1>
      <p>{loading ? "Cargando..." : ""}</p>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}

export default App;
