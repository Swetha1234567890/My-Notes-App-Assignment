import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import './index.css'

const NotesForm = ({setNotes}) => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const navigate = useNavigate();

    const onSubmitNotes = event => {
        event.preventDefault()
        if (title && details) {
            const note = {
                id: uuid(),
                title,
                details
            }
            setNotes(prevNotes => [note, ...prevNotes])
            console.log(note)
            navigate('/')
        }
    }

    return (
        <div className='notes-form-background'>
            <div className='note-details-container'>
            <header className='note-header'>
                <button className='arrow'><Link to='/' className='arr-btn'>
                    <IoIosArrowBack />
                </Link></button>
                <button className='save-btn' onClick={onSubmitNotes}>Save</button>
            </header>
            <form className='note-content' onSubmit={onSubmitNotes}>
                <input type='text' className='input-title' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea rows='20' className='notes' placeholder='Take a note...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>
        </div>
    </div>
    )
}

export default NotesForm