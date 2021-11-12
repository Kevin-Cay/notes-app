import React from 'react'
import { AddNote } from './AddNote'
import { Note } from './Note'
import moment from 'moment'

export const NotesList = ({notes, darkMode, handleAddNote, handleDeleteNote}) => {

    //notes.docs.map((doc) =>( console.log(doc.data().date, doc.data().text)))
    
    return (
      //setNotes(result.docs.map((note) => ({id: note.id, date: moment(note.data().date.toDate()).calendar() , data: note.data()})))

        <div className='notes-list' >
            {  notes.map((note) =>(
                <Note 
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
