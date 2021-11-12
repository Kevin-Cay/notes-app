import React from 'react'
import './PopupStyle.css'
import{AiFillCloseCircle} from 'react-icons/ai'

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
