import React from 'react'
import {auth, signOut} from '../firebase/firebase_config'
import{ AiOutlineCloseCircle} from 'react-icons/ai'

export const Header = ({handleToggleDarkMode}) => {
    return (
        <div className='header' >
            <h1>Notes</h1>
            <div className="headerOptions" >
            <button 
            className='theme headerbutton' 
            onClick={() => 
                handleToggleDarkMode((previousDarkMode) => !previousDarkMode) }  
            >
                Theme 🌙/🌞
            </button>
            <div className="signoutbutton" onClick={() => signOut(auth) } >
                <AiOutlineCloseCircle />
                Sign Out    
            </div>
            </div>  
            

        </div>
    )
}
