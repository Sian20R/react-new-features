import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const NoteForm = () => {
    const { dispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_NOTE', note: { title, body } }) 
        // setNotes([
        //     ...notes,
        //     { title, body }
        // ]);
        setTitle('');
        setBody('');
    }

    return (
        <>
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => {setTitle(e.target.value)}} />
                <textarea value={body} onChange={(e) => {setBody(e.target.value)}} />
                <button> Add Note </button>
            </form>
        </>  
    )
}

export { NoteForm as default }