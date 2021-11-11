import React from 'react'
import { AddNote } from './AddNote'
import { Note } from './Note'

export const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className='notes-list' >
            {notes.map((note) =>(
                <Note 
                id={note.id} 
                text={note.data.text} 
                // date={note.data.}  
                handleDeleteNote={handleDeleteNote}
                />           
            ))}         
            <AddNote handleAddNote={handleAddNote}  />   
        </div>
    )
}
