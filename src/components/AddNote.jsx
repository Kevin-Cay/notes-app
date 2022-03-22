import React, {useState} from 'react'
import {VscDebugRestart} from 'react-icons/vsc'

/**
 * 
 * @param {function} param0 function to add a new note in the database
 * @returns component to create a new note
 */
export const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    /**
     * 
     * @param {Event} e to get the value of the textarea 
     */
    const handleChange = (e)=>{
        e.preventDefault()
        if(characterLimit - e.target.value.length >= 0 ){
            setNoteText(e.target.value)
        }
    }

    /**
     * To reset the value of the textarea
     */
    const handleResetText = () =>{
        setNoteText('')
    }

    /**
     * @description To add the note to the list with a button
     */
    function handleSaveClick(){
                handleAddNote(noteText)
                // console.log('Send text ');
                setNoteText('') 
    }
    

    return (
        <div className='note new new-note'>
            <textarea 
            cols="10" 
            rows="8"
            value={noteText}
            onChange={handleChange} 
            placeholder='Type here to add a note...' 
            ></textarea>
            <VscDebugRestart size={"1.5rem"} style={{cursor: "pointer"}}  onClick={handleResetText} />
            <div className="note-footer">
                <small>{characterLimit - noteText.length} available characters</small>
                <button className='save' onClick={handleSaveClick} >Save</button>
            </div>
        </div>
    )
}
