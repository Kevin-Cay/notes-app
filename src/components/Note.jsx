import React, {useState} from 'react'
import Popup from './Popup'
import {MdDeleteForever} from 'react-icons/md'

/**
 * 
 * @param {date, id, theme, text, function} param0 date, id, theme, text, function to delete the note
 * @returns 
 */
export const Note = ({date, id, darkMode, text, handleDeleteNote}) => {
    const [openPopup, setOpenPopup] = useState(false);
    return (
        <div className='note' id={id} >
            <span> {text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                onClick={() => setOpenPopup(true)} 
                className='delete-icon' 
                size='1.3em' />
            </div>
            <Popup 
            handleDeleteNote={handleDeleteNote} 
            id={id} 
            darkMode={darkMode}
            openPopup={openPopup} 
            setOpenPopup={setOpenPopup} 
            />
        </div>
    )
}
