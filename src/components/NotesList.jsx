import React from 'react'
import { AddNote } from './AddNote'
import { Note } from './Note'
import moment from 'moment'

export const NotesList = ({notes, darkMode, handleAddNote, handleDeleteNote}) => {
    notes.map(note => console.log(note.id, note.data().text))
  console.log(notes)
    
    return (
    

        <div className='notes-list' >
            {  notes.map((note) =>(
                <Note 
                key={note.id}
                id={note.id} 
                darkMode={darkMode}
                text={note.data().text} 
                date={moment(note.data().date.toDate()).calendar()}  
                handleDeleteNote={handleDeleteNote}
                />           
            ))}         
            <AddNote handleAddNote={handleAddNote}  />   
        </div>
    )
}
