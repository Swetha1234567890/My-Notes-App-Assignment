import {Link} from 'react-router-dom'

const NoteItem = ({note}) => {

    return (
        <Link to={`/edit-note/${note.id}`}>
            <h3 className='note-title'>{note.title}</h3>
        </Link>
    )
}

export default NoteItem