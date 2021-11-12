import React, {useState} from 'react'
import {VscDebugRestart} from 'react-icons/vsc'
import db from '../firebase/firebase_config'
import {collection, addDoc} from "../firebase/firebase_config";

export const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    const handleChange = (e)=>{
        e.preventDefault()
        if(characterLimit - e.target.value.length >= 0 ){
            setNoteText(e.target.value)
        }
    }

    const handleResetText = () =>{
        setNoteText('')
    }

    async function handleSaveClick(){
                handleAddNote(noteText)
                console.log('Send text ');
                setNoteText('')
         
    }
    

    return (
        <div className='note new'>
            <textarea 
            cols="10" 
            rows="8"
            value={noteText}
            onChange={handleChange} 
            placeholder='Type to add a note here...' 
            ></textarea>
            <VscDebugRestart size={"1.5rem"} style={{cursor: "pointer"}}  onClick={handleResetText} />
            <div className="note-footer">
                <small>{characterLimit - noteText.length} available characters</small>
                <button className='save' onClick={handleSaveClick} >Save</button>
            </div>
        </div>
    )
}
