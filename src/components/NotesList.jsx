import React from 'react'
import { AddNote } from './AddNote'
import { Note } from './Note'
import moment from 'moment'

/**
 * 
 * @param {array, theme, function, function} param0 
 * @returns elements of the notes list
 */
export const NotesList = ({notes, darkMode, handleAddNote, handleDeleteNote}) => {
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
