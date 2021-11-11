import React, {useState} from 'react'
import db from '../firebase/firebase_config'
import {collection, addDoc} from "firebase/firestore";

export const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    const handleChange = (e)=>{
        e.preventDefault()
        if(characterLimit - e.target.value.length >= 0 ){
            setNoteText(e.target.value)
        }
    }

    async function handleSaveClick(){
        try {
                const response = await addDoc(collection(db, "notas"),{
                    text: noteText,
                    date: new Date()
                });
                console.log('Nota escrita con id: ', response.id);
                setNoteText('')
            
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <div className='note new'>
            <textarea 
            cols="10" 
            rows="8"
            value={noteText}
            onChange={handleChange} 
            placeholder='Write a new note...' 
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} available characters</small>
                <button className='save' onClick={handleSaveClick} >Save</button>
            </div>
        </div>
    )
}
