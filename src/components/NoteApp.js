import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from './../reducers/notes';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotesContext from './../context/notes-context';

const NoteApp = () => {
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, []);

    useEffect(() => {
        if (localStorage.getItem('myNotes'))
            dispatch({ type: 'POPULATE_NOTES', notes: JSON.parse(localStorage.getItem('myNotes'))}) 
            // setNotes(JSON.parse(localStorage.getItem('myNotes')));
    }, []);

    useEffect(() => {
        localStorage.setItem('myNotes', JSON.stringify(notes));
    }, [notes]);


    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <NoteForm />
        </NotesContext.Provider>
    )
}

export { NoteApp as default }