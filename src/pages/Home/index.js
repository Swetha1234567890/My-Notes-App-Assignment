import React, {useState, useEffect} from 'react'
import { BsSearch } from "react-icons/bs";
import NoteItem from '../../components/NoteItem';
import FloatingButton from '../FloatingButton';
import {Link} from 'react-router-dom'
import { RiCloseFill } from "react-icons/ri";
import './index.css'


const Home = ({notes}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('')
    const [filteredData, setFilteredData] = useState(notes)

    const filterNotes = () => {
        setFilteredData(notes.filter(note => {
            return note.title.toLowerCase().includes(text.toLowerCase());
        }));
    }

    useEffect(filterNotes, [notes, text])

        return (
            <div className='home-background'>
            <div className='main-container'>
                <div className='header-container'>
                    {!showSearch && <h1 className='title'>My Notes</h1>}
                    {showSearch && <input type='text' placeholder='Search' className='search-input' value={text} onChange={(e) => {setText(e.target.value); filterNotes();}}/>}
                    <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>
                    {showSearch ? <RiCloseFill className='close-btn'/> : <BsSearch className='search-btn'/>}
                    </button>
                </div>
                <div className={filteredData!=='' ? 'notes-container': ''}>
                    {filteredData.map(note => <NoteItem key={note.id} note={note} />)}
                </div>
                <div className='btn-container'>

                <Link to='/create-note'><FloatingButton className='add-btn'/></Link>
                </div>
            </div>
        </div>
        )

}

export default Home