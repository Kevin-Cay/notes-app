import React from 'react'
import './PopupStyle.css'
import{AiFillCloseCircle} from 'react-icons/ai'

/**
 * 
 * @param {function, id, theme, variable, function} param0 function to delete the note, id, theme, value if is open the Popup, function to change the state of the Popup
 * @returns 
 */
const Popup = ({handleDeleteNote,
    id, 
    darkMode,
    openPopup,
    setOpenPopup}) => {

    const handleDeleteAndClose = () =>{
        handleDeleteNote(id)
        setOpenPopup(false) 
    }    
    return (openPopup) ? (
        <div className="popup" >
            <div className={`popupcontainer ${darkMode? "popupcontainer-dark": null  } `}>
                <div className="container-header">
                        <AiFillCloseCircle size={"2rem"}style={{cursor: "pointer"}} onClick={() => setOpenPopup(false)} />
                </div>
                <p>Are you sure you want to delete this note?</p>
            <div className="button-popup-container">
                <button className="popup-button cancel-popup" onClick={() => setOpenPopup(false)}  >
                    Cancel
                </button>
                <button className="popup-button delete-popup-button" onClick={handleDeleteAndClose } >
                    Delete
                </button>
            </div>
            </div>
        </div>
    ): null;
}

export default Popup
