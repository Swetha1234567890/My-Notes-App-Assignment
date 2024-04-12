import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import NotesForm from './pages/NotesForm'
import NoteDetails from './pages/NoteDetails'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home notes={notes}/>}></Route>
      <Route exact path='/create-note' element={<NotesForm setNotes={setNotes}/>}></Route>
      <Route exact path='/edit-note/:id' element={<NoteDetails notes={notes} setNotes={setNotes}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
