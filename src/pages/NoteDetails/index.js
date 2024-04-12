import React, {useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import './index.css'


const NoteDetails = ({notes, setNotes}) => {
    const {id} = useParams();
    const note= notes.find((item) => item.id===id);

    const [title, setTitle] = useState(note.title);
    const [details, setDetails] = useState(note.details);
    const navigate = useNavigate();

    const submitChanges = (e) => {
        e.preventDefault();
        if(title && details) {
            const newNote = {...note, title, details}
            const newNotes = notes.map(item => {
                if(item.id === id) {
                    item = newNote;
                }
                return item;
            })
            setNotes(newNotes);
        }
        navigate('/')
    }

    const deleteNote = () => {
        const newNotes = notes.filter(item => item.id!==id);
        setNotes(newNotes)
        navigate('/')
    }
 
    return (
    <div className='note-details-background'>
        <div className='note-details-container'>
            <header className='note-header'>
                <Link to='/' className='arr-btn'>
                    <IoIosArrowBack />
                </Link>
                <button className='save-btn' onClick={submitChanges}>Save</button>
                <button className='del-btn' onClick={deleteNote}><MdOutlineDelete /></button>
            </header>
            <form className='note-content'>
                <input type='text' className='input-title' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea rows='20' className='notes' placeholder='Take a note...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>
        </div>
    </div>
    )
}

export default NoteDetails
